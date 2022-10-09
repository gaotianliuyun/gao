import _ from 'https://underscorejs.org/underscore-esm-min.js'
import { distance } from 'https://unpkg.com/fastest-levenshtein@1.0.16/esm/mod.js'

/**
 * alist js
 * 配置设置 {"key":"Alist","name":"Alist","type":3,"api":"http://xxx.com/alist.js","searchable":0,"quickSearch":0,"filterable":0,"ext":"http://xxx.com/alist.json"}
 * alist.json [{
				name:'名称',
				server:'地址',
				startPage:'/',		 //启动文件夹
				showAll: false ,	//是否显示全部文件，默认false只显示 视频和文件夹
				params:{ 			//对应文件夹参数 如设置对应文件夹的密码
					'/abc':{ password : '123' },
					'/abc/abc':{ password : '123' },
				}
		}]
 * 提示 想要加载文件夹里面全部视频到详情（看剧可以自动播放下一集支持历史记录）
 *		需要改软件才能支持，，建议长按文件夹时添加判断 tag == folder 时跳转 DetailActivity
 */
 
const http = function (url, options = {}) {
	if(options.method =='POST' && options.data){
		options.body = JSON.stringify(options.data)
		options.headers = Object.assign({'content-type':'application/json'}, options.headers)
	}
    const res = req(url, options);
    res.json = () => res.content ? JSON.parse(res.content) : null;
    res.text = () => res.content;
    return res
};
["get", "post"].forEach(method => {
    http[method] = function (url, options = {}) {
        return http(url, Object.assign(options, {method: method.toUpperCase()}));
    }
})

const __drives = {}

function get_drives_path(tid) {
	const index = tid.indexOf('$');
	const name = tid.substring(0, index);
	const path = tid.substring(index + 1)
	return { drives: get_drives(name), path }
}

function get_drives(name) {
	const { settings, api, server } = __drives[name]
	if (settings.v3 == null) { //获取 设置
		settings.v3 = false
		const data = http.get(server + '/api/public/settings').json().data;
		if (_.isArray(data)) {
			settings.title = data.find(x => x.key == 'title')?.value;
			settings.v3 = false;
			settings.version = data.find(x => x.key == 'version')?.value;
			settings.enableSearch = data.find(x => x.key == 'enable search')?.value == 'true';
		} else {
			settings.title = data.title;
			settings.v3 = true;
			settings.version = data.version;
			settings.enableSearch = false; //v3 没有找到 搜索配置
		}
		//不同版本 接口不一样
		api.path = settings.v3 ? '/api/fs/list' : '/api/public/path';
		api.file = settings.v3 ? '/api/fs/get' : '/api/public/path';
		api.search = settings.v3 ? '/api/public/search' : '/api/public/search';
	}
	return __drives[name]
}

function init(ext) {
	const data = http.get(ext).json();
	data.forEach(item => __drives[item.name] = {
		name: item.name,
		server: item.server.endsWith("/") ? url.substring(0, item.server.length() - 1) : item.server,
		startPage: item.startPage || '/', //首页
		showAll: item.showAll === true, //默认只显示 视频和文件夹，如果想显示全部 showAll 设置true
		params: item.params || {},
		_path_param: item.params ? _.sortBy(Object.keys(item.params), function(x) { return -x.length }) : [],
		settings: {},
		api: {},
		getParams(path) {
			const key = this._path_param.find(x => path.startsWith(x))
			return Object.assign({}, this.params[key], { path })
		},
		getPath(path) {
			const res = http.post(this.server + this.api.path, { data: this.getParams(path) }).json()
			return this.settings.v3 ? res.data.content : res.data.files
		},
		getFile(path) {
			const res = http.post(this.server + this.api.file, { data: this.getParams(path) }).json()
			const data = this.settings.v3 ? res.data : res.data.files[0]
			if (!this.settings.v3) data.raw_url = data.url //v2 的url和v3不一样
			return data
		},
		isFolder(data) { return data.type == 1 },
		isVideo(data) { //判断是否是 视频文件
			return this.settings.v3 ? data.type == 2 : data.type == 3
		},
		is_subt(data) {
			if (data.type == 1) return false
			const ext = [".srt", ".ass", ".scc", ".stl", ".ttml"]
			return ext.some(x => data.name.endsWith(x))
		},
		getPic(data) {
			let pic = this.settings.v3 ? data.thumb : data.thumbnail;
			return pic || (this.isFolder(data) ? "http://img1.3png.com/281e284a670865a71d91515866552b5f172b.png" : '')
		}
	})
}

function home(filter) {
	let classes = Object.keys(__drives).map(key => ({
		type_id: `${key}$${__drives[key].startPage}`,
		type_name: key,
		type_flag: '1',
	}))
	return JSON.stringify({ 'class': classes });
}

function homeVod(params) {
	return JSON.stringify({ 'list': [] })
}

function category(tid, pg, filter, extend) {
	let { drives, path } = get_drives_path(tid)
	const id = tid.endsWith('/') ? tid : tid + '/'
	const list = drives.getPath(path)
	let subList = []
	let vodFiles = []
	let allList = []
	list.forEach(item => {
		if (drives.is_subt(item)) subList.push(item.name)
		if (!drives.showAll && !drives.isFolder(item) && !drives.isVideo(item)) return //只显示视频文件和文件夹
		let remark = get_size(item.size)
		const vod = {
			'vod_id': id + item.name + (drives.isFolder(item) ? '/' : ''),
			'vod_name': item.name.replaceAll("$", "").replaceAll("#", ""),
			'vod_pic': drives.getPic(item),
			'vod_tag': drives.isFolder(item) ? 'folder' : 'file',
			'vod_remarks': drives.isFolder(item) ? remark + ' 文件夹' : remark
		}
		if (drives.isVideo(item)) vodFiles.push(vod)
		allList.push(vod)
	})

	if (vodFiles.length == 1 && subList.length > 0) { //只有一个视频 一个或者多个字幕 取相似度最高的
		let sub = subList.length == 1 ? subList[0] : _.chain(allList).sortBy(x => (x.includes('chs') ? 100 : 0) + levenshteinDistance(x, vodFiles[0].vod_name)).last().value()
		vodFiles[0].vod_id += "@@@" + sub
		//vodFiles[0].vod_remarks += " 有字幕"
	} else {
		vodFiles.forEach(item => {
			const lh = 0
			let sub
			subList.forEach(s => {
				//编辑距离相似度
				const l = levenshteinDistance(s, item.vod_name)
				if (l > 60 && l > lh) sub = s
			})
			if (sub) {
				item.vod_id += "@@@" + sub
				//item.vod_remarks += " 有字幕"
			}
		})
	}

	return JSON.stringify({
		'page': 1,
		'pagecount': 1,
		'limit': allList.length,
		'total': allList.length,
		'list': allList,
	});
}

function detail(tid) {
	let { drives, path } = get_drives_path(tid)
	if (path.endsWith("/")) { //长按文件夹可以 加载里面全部视频到详情
		const content = category(tid, null, false, null)
		const { list } = JSON.parse(content)
		const vod_play_url = []
		list.forEach(x => {
			if (x.vod_tag == 'file') vod_play_url.push(`${x.vod_name}$${x.vod_id.substring(x.vod_id.indexOf('$') + 1)}`)
		})
		const pl = path.split("/");
		const vod_name = pl[pl.length - 2] || drives.name;
		let vod = {
			vod_id: tid,
			vod_name: vod_name,
			type_name: "文件夹",
			vod_pic: "https://avatars.githubusercontent.com/u/97389433?s=200&v=4",
			vod_content: tid,
			vod_tag: 'folder',
			vod_play_from: drives.name,
			vod_play_url: vod_play_url.join('#'),
			vod_remarks: drives.settings.title,
		}
		return JSON.stringify({ 'list': [vod] })
	} else {
		let paths = path.split("@@@");
		let vod_name = paths[0].substring(paths[0].lastIndexOf("/") + 1)
		let vod = {
			vod_id: tid,
			vod_name: vod_name,
			type_name: "文件",
			vod_pic: "https://avatars.githubusercontent.com/u/97389433?s=200&v=4",
			vod_content: tid,
			vod_play_from: drives.name,
			vod_play_url: vod_name + "$" + path,
			vod_remarks: drives.settings.title,
		}
		return JSON.stringify({
			'list': [vod]
		});
	}
}

function play(flag, id, flags) {
	const drives = get_drives(flag)
	const urls = id.split("@@@")
	const vod = {
		'parse': 0,
		'playUrl': '',
		'url': drives.getFile(urls[0]).raw_url
	}
	if (urls.length >= 2) {
		const path = urls[0].substring(0, urls[0].lastIndexOf('/') + 1)
		vod.subt = drives.getFile(path + urls[1]).raw_url
	}
	return JSON.stringify(vod)
}

function search(wd, quick) {
	return JSON.stringify({
		'list': []
	});
}

function get_size(sz) {
	if (sz <= 0) return "";
	let filesize = "";
	if (sz > 1024 * 1024 * 1024 * 1024.0) {
		sz /= (1024 * 1024 * 1024 * 1024.0);
		filesize = "TB";
	} else if (sz > 1024 * 1024 * 1024.0) {
		sz /= (1024 * 1024 * 1024.0);
		filesize = "GB";
	} else if (sz > 1024 * 1024.0) {
		sz /= (1024 * 1024.0);
		filesize = "MB";
	} else {
		sz /= 1024.0;
		filesize = "KB";
	}
	return sz.toFixed(2) + filesize
}

function levenshteinDistance(str1, str2) {
    return 100 - 100 * distance(str1, str2) / Math.max(str1.length, str2.length)
}

__JS_SPIDER__ = {
	init: init,
	home: home,
	homeVod: homeVod,
	category: category,
	detail: detail,
	play: play,
	search: search
}

