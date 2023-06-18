/**
 * live2cms.js
 * 配置设置 {"key":"Live2CMS","name":"直播转点播V2","type":3,"api":"{{host}}/libs/live2cms.js","searchable":2,"quickSearch":0,"filterable":0,"ext":"{{host}}/txt/json/live2mv_data.json"}
 * live2mv_data.json
[
{"name": "甜蜜",     "url": "http://zdir.kebedd69.repl.co/public/live.txt"},
{"name": "俊于",     "url": "http://home.jundie.top:81/Cat/tv/live.txt"},
{"name": "菜妮丝",     "url": "http://xn--ihqu10cn4c.xn--z7x900a.love:63/TV/tvzb.txt"},
{"name": "布里m3u",     "url": "http://jiexi.bulisite.top/m3u.php"},
{"name": "吾爱",     "url": "http://52bsj.vip:81/api/v3/file/get/763/live.txt?sign=87BTGT1_6AOry7FPwy_uuxFTv2Wcb9aDMj46rDdRTD8%3D%3A0"},
{"name": "饭太硬",     "url": "http://ftyyy.tk/live.txt"}
]

 * 提示 ext文件格式为json列表,name,url参数
 *	取消加密,减少性能问题
 */
String.prototype.rstrip = function (chars) {
	let regex = new RegExp(chars + "$");
	return this.replace(regex, "");
};
const request_timeout = 5000;
const VERSION = 'live2cms 20230616';
const UA = 'Mozilla/5.0'; //默认请求ua
const __ext = {data_dict:{}};
const tips = `\n道长直播转点播js-当前版本${VERSION}`;
const def_pic = 'https://avatars.githubusercontent.com/u/97389433?s=120&v=4';
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

/**
 * m3u直播格式转一般直播格式
 * @param m3u
 * @returns {string}
 */
function convertM3uToNormal(m3u) {
	try {
	  const lines = m3u.split('\n');
	  let result = '';
	  let TV='';
	  // let flag='#genre#';
	  let flag='#m3u#';
	  let currentGroupTitle = '';
	  lines.forEach((line) => {
		if (line.startsWith('#EXTINF:')) {
		  const groupTitle = line.split('"')[1].trim();
		  TV= line.split('"')[2].substring(1);
		  if (currentGroupTitle !== groupTitle) {
			currentGroupTitle = groupTitle;
			result += `\n${currentGroupTitle},${flag}\n`;
		  }
		} else if (line.startsWith('http')) {
		  const splitLine = line.split(',');
		  result += `${TV}\,${splitLine[0]}\n`;
		}
	  });
	  return result.trim();
  }catch (e) {
	print(`m3u直播转普通直播发生错误:${e.message}`);
	return m3u
	}
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

function init(ext) {
	console.log("当前版本号:"+VERSION);
	let data;
	if (typeof ext == 'object'){
		data = ext;
		print('live ext:object');
	} else if (typeof ext == 'string') {
		if (ext.startsWith('http')) {
			let ext_paramas = ext.split(';');
			let data_url = ext_paramas[0];
			print(data_url);
			data = http.get(data_url).json();
		}
	}
    print(data);
    __ext.data = data;
	print('init执行完毕');
}

function home(filter) {
	let classes = __ext.data.map(it => ({
		type_id: it.url,
		type_name: it.name,
	}));
	print("----home----");
	print(classes);
	return JSON.stringify({ 'class': classes});
}

function homeVod(params) {
	let _get_url = __ext.data[0].url;
	let html;
    if(__ext.data_dict[_get_url]){
        html = __ext.data_dict[_get_url];
    }else{
        html = http.get(_get_url).text();
		if(/#EXTM3U/.test(html)){
			html = convertM3uToNormal(html);
		}
        __ext.data_dict[_get_url] = html;
    }
    let arr = html.match(/.*?,#[\s\S].*?#/g);
	let _list = [];
	try {
		arr.forEach(it=>{
			_list.push({
				vod_name:it.split(',')[0],
				vod_id:_get_url+'$'+it.split(',')[0],
				vod_pic:def_pic,
				vod_remarks:it.split(',')[1],
			});
		});
	}catch (e) {
		print('Live2cms获取首页推荐发送错误:'+e.message);
	}
	return JSON.stringify({ 'list': _list });
}

function category(tid, pg, filter, extend) {
	if(parseInt(pg)>1){
		return JSON.stringify({
		'list': [],
	});
	}
    let _get_url = tid;
    let html;
    if(__ext.data_dict[_get_url]){
        html = __ext.data_dict[_get_url];
    }else{
        html = http.get(_get_url).text();
		if(/#EXTM3U/.test(html)){
			html = convertM3uToNormal(html);
		}
        __ext.data_dict[_get_url] = html;
    }
    let arr = html.match(/.*?,#[\s\S].*?#/g);
    let _list = [];
	try {
		arr.forEach(it=>{
			_list.push({
				vod_name:it.split(',')[0],
				vod_id:_get_url+'$'+it.split(',')[0],
				vod_pic:def_pic,
				vod_remarks:it.split(',')[1],
			});
		});
	}catch (e) {
		print('Live2cms获取一级分类页发生错误:'+e.message);
	}

	return JSON.stringify({
		'page': 1,
		'pagecount': 1,
		'limit': _list.length,
		'total': _list.length,
		'list': _list,
	});
}

function detail(tid) { // ⛵  港•澳•台
    let _get_url = tid.split('$')[0];
    let _tab = tid.split('$')[1];
	if(tid.includes('#search#')){
		let vod_play_url = _tab.replace('#search#','')+'$'+_get_url;
		print(vod_play_url);
		return JSON.stringify({
			list: [{
				vod_id: tid,
        		vod_name: '搜索:'+_tab.replace('#search#',''),
        		type_name: "直播列表",
        		vod_pic: def_pic,
        		vod_content: tid,
        		vod_play_from: '来自搜索',
        		vod_play_url: vod_play_url,
        		vod_director: tips,
        		vod_remarks: `道长直播转点播js-当前版本${VERSION}`,
			}]
		});
	}
    let html;
    if(__ext.data_dict[_get_url]){
        html = __ext.data_dict[_get_url];
    }else{
        html = http.get(_get_url).text();
		if(/#EXTM3U/.test(html)){
			html = convertM3uToNormal(html);
		}
        __ext.data_dict[_get_url] = html;
    }
    let a = new RegExp(`.*?${_tab},#[\\s\\S].*?#`);
    let b = html.match(a)[0];
    let c = html.split(b)[1];
    if(c.match(/.*?,#[\s\S].*?#/)){
        let d = c.match(/.*?,#[\s\S].*?#/)[0];
        c = c.split(d)[0];
    }
    let arr = c.trim().split('\n');
    let _list = [];
    arr.forEach((it)=>{
        if(it.trim()){
            let t = it.trim().split(',')[0];
            let u = it.trim().split(',')[1];
            _list.push(t+'$'+u);
        }
    });
	// let groups = [[],[],[],[],[],[]];
	// _list.forEach((it)=>{
	//
	// });
    let vod_name = __ext.data.find(x=>x.url===_get_url).name;
    let vod_play_url = _list.join('#');

    let vod = {
        vod_id: tid,
        vod_name: vod_name+'|'+_tab,
        type_name: "直播列表",
        vod_pic: def_pic,
        vod_content: tid,
        vod_play_from: vod_name,
        vod_play_url: vod_play_url,
        vod_director: tips,
        vod_remarks: `道长直播转点播js-当前版本${VERSION}`,
    };

    return JSON.stringify({
        list: [vod]
    });
}

function play(flag, id, flags) {
    let vod = {
		'parse': /m3u8/.test(id)?0:1,
		'playUrl': '',
		'url': id
	};
    print(vod);
	return JSON.stringify(vod);
}

function search(wd, quick) {
	let _get_url = __ext.data[0].url;
	let html;
    if(__ext.data_dict[_get_url]){
        html = __ext.data_dict[_get_url];
    }else{
        html = http.get(_get_url).text();
		if(/#EXTM3U/.test(html)){
			html = convertM3uToNormal(html);
		}
        __ext.data_dict[_get_url] = html;
    }
	let str='';
	Object.keys(__ext.data_dict).forEach(()=>{
		str+=__ext.data_dict[_get_url];
	});
	let links = str.split('\n').filter(it=>it.trim() && it.includes(','));
	links = links.map(it=>it.trim());
	let plays = Array.from(new Set(links));
	print('搜索关键词:'+wd);
	print('过滤前:'+plays.length);
	plays = plays.filter(it=>it.includes(wd));
	print('过滤后:'+plays.length);
	print(plays);
	let _list = [];
	plays.forEach((it)=>{
		_list.push({
			'vod_name':it.split(',')[0],
			'vod_id':it.split(',')[1].trim()+'$'+it.split(',')[0].trim()+'#search#',
			'vod_pic':def_pic,
		})
	});
	return JSON.stringify({
			'list': _list
    });
}

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