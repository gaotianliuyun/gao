// import _ from 'https://underscorejs.org/underscore-esm-min.js'
// import {distance} from 'https://unpkg.com/fastest-levenshtein@1.0.16/esm/mod.js'
import {distance} from './mod.js'
import {sortListByCN} from './sortName.js'

/**
 * alist js
 * 配置设置 {"key":"Alist","name":"Alist","type":3,"api":"http://xxx.com/alist.js","searchable":0,"quickSearch":0,"filterable":0,"ext":"http://xxx.com/alist.json"}
 * alist.json [{
				name:'名称',
				server:'地址',
				startPage:'/',		 //启动文件夹
				showAll: false ,	//是否显示全部文件，默认false只显示 音视频和文件夹
 				search: true, // 启用小雅的搜索,搜索只会搜第一个开启此开关的磁盘
				params:{ 			//对应文件夹参数 如设置对应文件夹的密码
					'/abc':{ password : '123' },
					'/abc/abc':{ password : '123' },
				}
		}]
 * 提示 想要加载文件夹里面全部视频到详情（看剧可以自动播放下一集支持历史记录）
 *		需要改软件才能支持，，建议长按文件夹时添加判断 tag == folder 时跳转 DetailActivity
 */
String.prototype.rstrip = function (chars) {
	let regex = new RegExp(chars + "$");
	return this.replace(regex, "");
};
var showMode = 'single';
var searchDriver = '';
var limit_search_show = 200;
var search_type = '';
var detail_order = 'name';
var playRaw = 1; // 播放直链获取,默认0直接拼接/d 填1可以获取阿里oss链接。注意，有时效性
const request_timeout = 5000;
const VERSION = 'alist v2/v3 20221223';
const UA = 'Mozilla/5.0'; //默认请求ua
/**
 * 打印日志
 * @param any 任意变量
 */
function print(any){
	any = any||'';
	if(typeof(any)=='object'&&Object.keys(any).length>0){
		try {
			any = JSON.stringify(any);
			console.log(any);
		}catch (e) {
			// console.log('print:'+e.message);
			console.log(typeof(any)+':'+any.length);
		}
	}else if(typeof(any)=='object'&&Object.keys(any).length<1){
		console.log('null object');
	}else{
		console.log(any);
	}
}

/*** js自封装的方法 ***/

/**
 * 获取链接的host(带http协议的完整链接)
 * @param url 任意一个正常完整的Url,自动提取根
 * @returns {string}
 */
function getHome(url){
	if(!url){
		return ''
	}
	let tmp = url.split('//');
	url = tmp[0] + '//' + tmp[1].split('/')[0];
	try {
		url = decodeURIComponent(url);
	}catch (e) {}
	return url
}

const http = function (url, options = {}) {
	if(options.method ==='POST' && options.data){
		options.body = JSON.stringify(options.data);
		options.headers = Object.assign({'content-type':'application/json'}, options.headers);
	}
	options.timeout = request_timeout;
	if(!options.headers){
		options.headers = {};
	}
	let keys = Object.keys(options.headers).map(it=>it.toLowerCase());
	if(!keys.includes('referer')){
		options.headers['Referer'] = getHome(url);
	}
	if(!keys.includes('user-agent')){
		options.headers['User-Agent'] = UA;
	}
	console.log(JSON.stringify(options.headers));
	try {
		const res = req(url, options);
		// if(options.headers['Authorization']){
		// 	console.log(res.content);
		// }
		res.json = () => res&&res.content ? JSON.parse(res.content) : null;
		res.text = () => res&&res.content ? res.content:'';
		return res
	}catch (e) {
		return {
			json() {
				return null
			}, text() {
				return ''
			}
		}
	}
};
["get", "post"].forEach(method => {
    http[method] = function (url, options = {}) {
        return http(url, Object.assign(options, {method: method.toUpperCase()}));
    }
});

const __drives = {};

function isMedia(file){
	return /\.(dff|dsf|mp3|aac|wav|wma|cda|flac|m4a|mid|mka|mp2|mpa|mpc|ape|ofr|ogg|ra|wv|tta|ac3|dts|tak|webm|wmv|mpeg|mov|ram|swf|mp4|avi|rm|rmvb|flv|mpg|mkv|m3u8|ts|3gp|asf)$/.test(file.toLowerCase());
}

function get_drives_path(tid) {
	const index = tid.indexOf('$');
	const name = tid.substring(0, index);
	const path = tid.substring(index + 1);
	return { drives: get_drives(name), path };
}

function get_drives(name) {
	const { settings, api, server,headers } = __drives[name];
	if (settings.v3 == null) { //获取 设置
		settings.v3 = false;
		const data = http.get(server + '/api/public/settings',{headers:headers}).json().data;
		if (Array.isArray(data)) {
			settings.title = data.find(x => x.key === 'title')?.value;
			settings.v3 = false;
			settings.version = data.find(x => x.key === 'version')?.value;
			settings.enableSearch = data.find(x => x.key === 'enable search')?.value === 'true';
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
	console.log("当前版本号:"+VERSION);
	let data;
	if (typeof ext == 'object'){
		data = ext;
		print('alist ext:object');
	} else if (typeof ext == 'string') {
		if (ext.startsWith('http')) {
			let alist_data = ext.split(';');
			let alist_data_url = alist_data[0];
			limit_search_show = alist_data.length>1?Number(alist_data[1])||limit_search_show:limit_search_show;
			search_type = alist_data.length>2?alist_data[2]:search_type;
			print(alist_data_url);
			data = http.get(alist_data_url).json(); // .map(it=>{it.name='🙋丫仙女';return it})
		} else {
			print('alist ext:json string');
			data = JSON.parse(ext);
		}
	}

	// print(data); // 测试证明壳子标题支持emoji,是http请求源码不支持emoji
	let drives = [];
	if(Array.isArray(data) && data.length > 0 && data[0].hasOwnProperty('server') && data[0].hasOwnProperty('name')){
		drives = data;
	}else if(!Array.isArray(data)&&data.hasOwnProperty('drives')&&Array.isArray(data.drives)){
		drives = data.drives.filter(it=>(it.type&&it.type==='alist')||!it.type);
	}
	print(drives);
	searchDriver = (drives.find(x=>x.search)||{}).name||'';
	if(!searchDriver && drives.length > 0){
		searchDriver = drives[0].name;
	}
	print(searchDriver);
	drives.forEach(item => {
		let _path_param = [];
		if(item.params){
			_path_param = Object.keys(item.params);
			// 升序排列
			_path_param.sort((a,b)=>(a.length-b.length));
		}
		if(item.password){
			let pwdObj = {
				password: item.password
			};
			if(!item.params){
				item.params = {'/':pwdObj};
			}else{
				item.params['/'] = pwdObj;
			}
			_path_param.unshift('/');
		}
		__drives[item.name] = {
			name: item.name,
			server: item.server.endsWith("/") ? item.server.rstrip("/") : item.server,
			startPage: item.startPage || '/', //首页
			showAll: item.showAll === true, //默认只显示 视频和文件夹，如果想显示全部 showAll 设置true
			search: !!item.search, //是否支持搜索,只有小丫的可以,多个可搜索只取最前面的一个
			params: item.params || {},
			_path_param: _path_param,
			settings: {},
			api: {},
			headers:item.headers||{},
			getParams(path) {
				const key = this._path_param.find(x => path.startsWith(x));
				return Object.assign({}, this.params[key], { path });
			},
			getPath(path) {
				const res = http.post(this.server + this.api.path, { data: this.getParams(path),headers:this.headers }).json();
				// console.log(res);
				try {
					return this.settings.v3 ? res.data.content : res.data.files
				}catch (e) {
					console.log(`getPath发生错误:${e.message}`);
					console.log(JSON.stringify(res));
					return [{name:'error',value:JSON.stringify(res)}]
				}
			},
			getFile(path) {
				let raw_url = this.server+'/d'+path;
				raw_url = encodeURI(raw_url);
				let data = {raw_url:raw_url,raw_url1:raw_url};
				if(playRaw===1){
					try {
						const res = http.post(this.server + this.api.file, { data: this.getParams(path),headers:this.headers }).json();
						data = this.settings.v3 ? res.data : res.data.files[0];
						if (!this.settings.v3) {
							data.raw_url = data.url; //v2 的url和v3不一样
						}
						data.raw_url1 = raw_url;
						return data
					}catch (e) {
						return data
					}
				}else{
					return data
				}
			},
			isFolder(data) { return data.type === 1 },
			isVideo(data) { //判断是否是 视频文件
				// return this.settings.v3 ? data.type === 2 : data.type === 3
				// 增加音乐识别 视频,其他,音频
				return this.settings.v3 ? (data.type === 2||data.type===0||data.type===3) : (data.type === 3||data.type===0||data.type === 4)
			},
			is_subt(data) {
				if (data.type === 1) {
					return false;
				}
				const ext = /\.(srt|ass|scc|stl|ttml)$/;  // [".srt", ".ass", ".scc", ".stl", ".ttml"];
				// return ext.some(x => data.name.endsWith(x));
				return ext.test(data.name);
			},
			getPic(data) {
				let pic = this.settings.v3 ? data.thumb : data.thumbnail;
				return pic || (this.isFolder(data) ? "http://img1.3png.com/281e284a670865a71d91515866552b5f172b.png" : '');
			},
			getTime(data,isStandard) {
				isStandard = isStandard||false;
				try {
					let tTime = data.updated_at || data.time_str || data.modified || "";
					let date = '';
					if(tTime){
						tTime = tTime.split("T");
						date = tTime[0];
						if(isStandard){
							date = date.replace(/-/g,"/");
						}
						tTime = tTime[1].split(/Z|\./);
						date += " " + tTime[0];
					}
					return date;
				}catch (e) {
					// print(e.message);
					// print(data);
					return ''
				}
			},
	}
	}
	);
	print('init执行完毕');
}

function home(filter) {
	let classes = Object.keys(__drives).map(key => ({
		type_id: `${key}$${__drives[key].startPage}`,
		type_name: key,
		type_flag: '1',
	}));
	let filter_dict = {};
	let filters = [{'key': 'order', 'name': '排序', 'value': [{'n': '名称⬆️', 'v': 'vod_name_asc'}, {'n': '名称⬇️', 'v': 'vod_name_desc'},
			{'n': '中英⬆️', 'v': 'vod_cn_asc'}, {'n': '中英⬇️', 'v': 'vod_cn_desc'},
			{'n': '时间⬆️', 'v': 'vod_time_asc'}, {'n': '时间⬇️', 'v': 'vod_time_desc'},
			{'n': '大小⬆️', 'v': 'vod_size_asc'}, {'n': '大小⬇️', 'v': 'vod_size_desc'},{'n': '无', 'v': 'none'}]},
			{'key': 'show', 'name': '播放展示', 'value': [{'n': '单集', 'v': 'single'},{'n': '全集', 'v': 'all'}]}
	];
	classes.forEach(it=>{
		filter_dict[it.type_id] = filters;
	});
	print("----home----");
	print(classes);
	return JSON.stringify({ 'class': classes,'filters': filter_dict});
}

function homeVod(params) {
	let _post_data = {"pageNum":0,"pageSize":100};
	let _post_url = 'https://pbaccess.video.qq.com/trpc.videosearch.hot_rank.HotRankServantHttp/HotRankHttp';
	let data = http.post(_post_url,{ data: _post_data }).json();
	let _list = [];
	try {
		data = data['data']['navItemList'][0]['hotRankResult']['rankItemList'];
		// print(data);
		data.forEach(it=>{
			_list.push({
				vod_name:it.title,
				vod_id:'msearch:'+it.title,
				vod_pic:'https://avatars.githubusercontent.com/u/97389433?s=120&v=4',
				vod_remarks:it.changeOrder,
			});
		});
	}catch (e) {
		print('Alist获取首页推荐发送错误:'+e.message);
	}
	return JSON.stringify({ 'list': _list });
}

function category(tid, pg, filter, extend) {
	let orid = tid.replace(/#all#|#search#/g,'');
	let { drives, path } = get_drives_path(orid);
	const id = orid.endsWith('/') ? orid : orid + '/';
	const list = drives.getPath(path);
	let subList = [];
	let vodFiles = [];
	let allList = [];
	let fl = filter?extend:{};
	if(fl.show){
		showMode = fl.show;
	}
	list.forEach(item => {
		if(item.name!=='error') {
			if (drives.is_subt(item)) {
				subList.push(item.name);
			}
			if (!drives.showAll && !drives.isFolder(item) && !drives.isVideo(item)) {
				return //只显示视频文件和文件夹
			}
			let vod_time = drives.getTime(item);
			let vod_size = get_size(item.size);
			let remark = vod_time.split(' ')[0].substr(3) + '\t' + vod_size;
			let vod_id = id + item.name + (drives.isFolder(item) ? '/' : '');
			if (showMode === 'all') {
				vod_id += '#all#';
			}
			print(vod_id);
			const vod = {
				'vod_id': vod_id,
				'vod_name': item.name.replaceAll("$", "").replaceAll("#", ""),
				'vod_pic': drives.getPic(item),
				'vod_time': vod_time,
				'vod_size': item.size,
				'vod_tag': drives.isFolder(item) ? 'folder' : 'file',
				'vod_remarks': drives.isFolder(item) ? remark + ' 文件夹' : remark
			};
			if (drives.isVideo(item)) {
				vodFiles.push(vod);
			}
			allList.push(vod);
		}else{
			console.log(item);
			const vod = {
				vod_name: item.value,
				vod_id: 'no_data',
				vod_remarks: '不要点,会崩的',
				vod_pic: 'https://ghproxy.net/https://raw.githubusercontent.com/hjdhnx/dr_py/main/404.jpg'
			}
			allList.push(vod);
		}
	});

	if (vodFiles.length === 1 && subList.length > 0) { //只有一个视频 一个或者多个字幕 取相似度最高的
		// let sub = subList.length === 1 ? subList[0] : _.chain(allList).sortBy(x => (x.includes('chs') ? 100 : 0) + levenshteinDistance(x, vodFiles[0].vod_name)).last().value();
		let sub; // 字幕文件名称
		if(subList.length === 1){
			sub = subList[0];
		}else {
			let subs = JSON.parse(JSON.stringify(subList));
			subs.sort((a,b)=>{
				// chs是简体中文字幕
				let a_similar = (a.includes('chs') ? 100 : 0) + levenshteinDistance(a, vodFiles[0].vod_name);
				let b_similar = (b.includes('chs') ? 100 : 0) + levenshteinDistance(b, vodFiles[0].vod_name);
				if(a_similar>b_similar) { // 按相似度正序排列
					return 1;
				}else{ //否则，位置不变
					return -1;
				}
			});
			sub = subs.slice(-1)[0];
		}
		vodFiles[0].vod_id += "@@@" + sub;
		// vodFiles[0].vod_remarks += " 有字幕";
		vodFiles[0].vod_remarks += "🏷️";
	} else {
		vodFiles.forEach(item => {
			const lh = 0;
			let sub;
			subList.forEach(s => {
				//编辑距离相似度
				const l = levenshteinDistance(s, item.vod_name);
				if (l > 60 && l > lh) {
					sub = s;
				}
			});
			if (sub) {
				item.vod_id += "@@@" + sub;
				// item.vod_remarks += " 有字幕";
				item.vod_remarks += "🏷️";
			}
		});
	}

	if(fl.order){
		// print(fl.order);
		let key = fl.order.split('_').slice(0,-1).join('_');
		let order = fl.order.split('_').slice(-1)[0];
		print(`排序key:${key},排序order:${order}`);
		if(key.includes('name')){
			detail_order = 'name';
			allList = sortListByName(allList,key,order);
		}else if(key.includes('cn')){
			detail_order = 'cn';
			allList = sortListByCN(allList,'vod_name',order);
		}else if(key.includes('time')){
			detail_order = 'time';
			allList = sortListByTime(allList,key,order);
		}else if(key.includes('size')){
			detail_order = 'size';
			allList = sortListBySize(allList,key,order);
		}else if(fl.order.includes('none')){
			detail_order = 'none';
			print('不排序');
		}
	}else{
		// 没传order是其他地方调用的,自动按名称正序排序方便追剧,如果传了none进去就不排序，假装云盘里本身文件顺序是正常的
		if(detail_order!=='none'){
			allList = sortListByName(allList,'vod_name','asc');
		}
	}

	print("----category----"+`tid:${tid},detail_order:${detail_order},showMode:${showMode}`);
	// print(allList);
	return JSON.stringify({
		'page': 1,
		'pagecount': 1,
		'limit': allList.length,
		'total': allList.length,
		'list': allList,
	});
}

function getAll(otid,tid,drives,path){
	try {
		const content = category(tid, null, false, null);
		const isFile = isMedia(otid.replace(/#all#|#search#/g,'').split('@@@')[0]);
		const { list } = JSON.parse(content);
		let vod_play_url = [];
		list.forEach(x => {
			if (x.vod_tag === 'file'){
				let vid = x.vod_id.replace(/#all#|#search#/g,'');
				vod_play_url.push(`${x.vod_name}$${vid.substring(vid.indexOf('$') + 1)}`);
			}
		});
		const pl = path.split("/").filter(it=>it);
		let vod_name = pl[pl.length - 1] || drives.name;
		if(vod_name === drives.name){
			print(pl);
		}
		if(otid.includes('#search#')){
			vod_name+='[搜]';
		}
		let vod = {
			// vod_id: tid,
			vod_id: otid,
			vod_name: vod_name,
			type_name: "文件夹",
			vod_pic: "https://avatars.githubusercontent.com/u/97389433?s=120&v=4",
			vod_content: tid,
			vod_tag: 'folder',
			vod_play_from: drives.name,
			vod_play_url: vod_play_url.join('#'),
			vod_remarks: drives.settings.title,
		}
		print("----detail1----");
		print(vod);
		return JSON.stringify({ 'list': [vod] });
	}catch (e) {
		print(e.message);
		let list = [{vod_name:'无数据,防无限请求',type_name: "文件夹",vod_id:'no_data',vod_remarks:'不要点,会崩的',vod_pic:'https://ghproxy.net/https://raw.githubusercontent.com/hjdhnx/dr_py/main/static/img/404.jpg',vod_actor:e.message,vod_director: tid,vod_content: otid}];
		return JSON.stringify({ 'list': list });
	}
}

function detail(tid) {
	let isSearch = tid.includes('#search#');
	let isAll = tid.includes('#all#');
	let otid = tid;
	tid = tid.replace(/#all#|#search#/g,'');
	let isFile = isMedia(tid.split('@@@')[0]);
	print(`isFile:${tid}?${isFile}`);
	let { drives, path } = get_drives_path(tid);
	print(`drives:${drives},path:${path},`);
	if (path.endsWith("/")) { //长按文件夹可以 加载里面全部视频到详情
		return getAll(otid,tid,drives,path);
	} else {
		if(isSearch&&!isFile){ // 搜索结果 当前目录获取所有文件
			return getAll(otid,tid,drives,path);
		}else if(isAll){ // 上级目录获取所有文件  不管是搜索还是分类,只要不是 搜索到的文件夹，且展示模式为全部,都获取上级目录的所有文件
			// 是文件就取上级目录
			let new_tid;
			if(isFile){
				new_tid = tid.split('/').slice(0,-1).join('/')+'/';
			}else{
				new_tid = tid;
			}
			print(`全集模式 tid:${tid}=>tid:${new_tid}`);
			let { drives, path } = get_drives_path(new_tid);
			return getAll(otid,new_tid,drives,path);
		} else if(isFile){ // 单文件进入
			let paths = path.split("@@@");
			let vod_name = paths[0].substring(paths[0].lastIndexOf("/") + 1);
			let vod_title = vod_name;
			if(otid.includes('#search#')){
				vod_title+='[搜]';
			}
			let vod = {
				vod_id: otid,
				vod_name: vod_title,
				type_name: "文件",
				vod_pic: "https://avatars.githubusercontent.com/u/97389433?s=120&v=4",
				vod_content: tid,
				vod_play_from: drives.name,
				vod_play_url: vod_name + "$" + path,
				vod_remarks: drives.settings.title,
			};
			print("----detail2----");
			print(vod);
			return JSON.stringify({
				'list': [vod]
			});
		}else{
			return JSON.stringify({
				'list': []
			});
		}
	}
}

function play(flag, id, flags) {
	const drives = get_drives(flag);
	const urls = id.split("@@@"); // @@@ 分割前是 相对文件path,分割后是字幕文件
	let vod = {
		'parse': 0,
		'playUrl': '',
		// 'url': drives.getFile(urls[0]).raw_url+'#.m3u8' // 加 # 没法播放
		'url': drives.getFile(urls[0]).raw_url
	};
	if (urls.length >= 2) {
		const path = urls[0].substring(0, urls[0].lastIndexOf('/') + 1);
		vod.subt = drives.getFile(path + urls[1]).raw_url1;
	}
	print("----play----");
	print(vod);
	return JSON.stringify(vod);
}

function search(wd, quick) {
	print(__drives);
	print('可搜索的alist驱动:'+searchDriver);
	if(!searchDriver||!wd){
		return JSON.stringify({
			'list': []
		});
	}else{
		let driver = __drives[searchDriver];
		wd = wd.split(' ').filter(it=>it.trim()).join('+');
		print(driver);
		let surl = driver.server + '/search?box='+wd+'&url=';
		if(search_type){
			surl+='&type='+search_type;
		}
		print('搜索链接:'+surl);
		let html = http.get(surl).text();
		let lists = [];
		try {
			lists = pdfa(html,'div&&ul&&a');
		}catch (e) {}
		print(`搜索结果数:${lists.length},搜索结果显示数量限制:${limit_search_show}`);
		let vods = [];
		let excludeReg = /\.(pdf|epub|mobi|txt|doc|lrc)$/; // 过滤后缀文件
		let cnt = 0;
		lists.forEach(it=>{
			let vhref = pdfh(it,'a&&href');
			if(vhref){
				vhref = unescape(vhref);
			}
			if(excludeReg.test(vhref)){
				return; //跳过本次循环
			}
			if(cnt < limit_search_show){
				print(vhref);
			}
			cnt ++;
			let vid = searchDriver+'$'+vhref+'#search#';
			if(showMode==='all'){
				vid+='#all#';
			}
			vods.push({
				vod_name:pdfh(it,'a&&Text'),
				vod_id:vid,
				vod_tag: isMedia(vhref) ? 'file' : 'folder',
				vod_pic:'http://img1.3png.com/281e284a670865a71d91515866552b5f172b.png',
				vod_remarks:searchDriver
			});
		});
		// 截取搜索结果
		vods = vods.slice(0,limit_search_show);
		print(vods);
		return JSON.stringify({
			'list': vods
		});
	}
}

function get_size(sz) {
	if (sz <= 0) {
		return "";
	}
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
	} else if( sz > 1024.0){
		sz /= 1024.0;
		filesize = "KB";
	}else{
		filesize = "B";
	}
	// 转成字符串
	let sizeStr = sz.toFixed(2) + filesize,
	// 获取小数点处的索引
	index = sizeStr.indexOf("."),
	// 获取小数点后两位的值
	dou = sizeStr.substr(index + 1, 2);
	if (dou === "00") {
		return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2);
	}else{
		return sizeStr;
	}
}

// 相似度获取
function levenshteinDistance(str1, str2) {
    return 100 - 100 * distance(str1, str2) / Math.max(str1.length, str2.length);
}

/**
 * 自然排序
 * ["第1集","第10集","第20集","第2集","1","2","10","12","23","01","02"].sort(naturalSort())
 * @param options {{key,caseSensitive, order: string}}
 */
function naturalSort(options) {
	if (!options) {
		options = {};
	}

	return function (a, b) {
		if(options.key){
			a = a[options.key];
			b = b[options.key];
		}
		var EQUAL = 0;
		var GREATER = (options.order === 'desc' ?
				-1 :
				1
		);
		var SMALLER = -GREATER;

		var re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi;
		var sre = /(^[ ]*|[ ]*$)/g;
		var dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/;
		var hre = /^0x[0-9a-f]+$/i;
		var ore = /^0/;

		var normalize = function normalize(value) {
			var string = '' + value;
			return (options.caseSensitive ?
					string :
					string.toLowerCase()
			);
		};

		// Normalize values to strings
		var x = normalize(a).replace(sre, '') || '';
		var y = normalize(b).replace(sre, '') || '';

		// chunk/tokenize
		var xN = x.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0');
		var yN = y.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0');

		// Return immediately if at least one of the values is empty.
		if (!x && !y) return EQUAL;
		if (!x && y) return GREATER;
		if (x && !y) return SMALLER;

		// numeric, hex or date detection
		var xD = parseInt(x.match(hre)) || (xN.length != 1 && x.match(dre) && Date.parse(x));
		var yD = parseInt(y.match(hre)) || xD && y.match(dre) && Date.parse(y) || null;
		var oFxNcL, oFyNcL;

		// first try and sort Hex codes or Dates
		if (yD) {
			if (xD < yD) return SMALLER;
			else if (xD > yD) return GREATER;
		}

		// natural sorting through split numeric strings and default strings
		for (var cLoc = 0, numS = Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {

			// find floats not starting with '0', string or 0 if not defined (Clint Priest)
			oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
			oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;

			// handle numeric vs string comparison - number < string - (Kyle Adams)
			if (isNaN(oFxNcL) !== isNaN(oFyNcL)) return (isNaN(oFxNcL)) ? GREATER : SMALLER;

			// rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
			else if (typeof oFxNcL !== typeof oFyNcL) {
				oFxNcL += '';
				oFyNcL += '';
			}
			if (oFxNcL < oFyNcL) return SMALLER;
			if (oFxNcL > oFyNcL) return GREATER;
		}
		return EQUAL;
	};
}
// 完整名称排序
const sortListByName = (vodList,key,order) => {
	if(!key){
		return vodList
	}
	order = order||'asc'; // 默认正序
	// 排序键,顺序,区分大小写
	return vodList.sort(naturalSort({key: key, order: order,caseSensitive:true}))
};

const getTimeInt = (timeStr) => {
	return (new Date(timeStr)).getTime();
};

// 时间
const sortListByTime = (vodList,key,order) => {
	if (!key) {
		return vodList
	}
	let ASCarr = vodList.sort((a, b) => {
		a = a[key];
		b = b[key];
		return getTimeInt(a) - getTimeInt(b);
	});
	if(order==='desc'){
		ASCarr.reverse();
	}
	return ASCarr
};

// 大小
const sortListBySize = (vodList,key,order) => {
	if (!key) {
		return vodList
	}
	let ASCarr = vodList.sort((a, b) => {
		a = a[key];
		b = b[key];
		return (Number(a) || 0) - (Number(b) || 0);
	});
	if(order==='desc'){
		ASCarr.reverse();
	}
	return ASCarr
};

// 导出函数对象
export default {
	init: init,
	home: home,
	homeVod: homeVod,
	category: category,
	detail: detail,
	play: play,
	search: search
}