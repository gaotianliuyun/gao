var rule = {
	title:'4KHDR[磁]',
	host:'https://www.4khdr.cn',
        homeUrl: "/forum.php?mod=forumdisplay&fid=2&page=1",
	url: '/forum.php?mod=forumdisplay&fid=2&filter=typeid&typeid=fyclass&page=fypage',
	filter_url:'{{fl.class}}',
	filter:{
	},
	searchUrl: '/search.php#searchsubmit=yes&srchtxt=**;post',
	searchable:2,
	quickSearch:1,
	filterable:0,
	headers:{
		'User-Agent': 'PC_UA',
         	'Cookie':'http://127.0.0.1:9978/file:///tvbox/JS/lib/4khdr.txt',
	},
	timeout:5000,
	class_name: "4K电影&4K美剧&4K华语&4K动画&4K纪录片&4K日韩印&蓝光电影&蓝光美剧&蓝光华语&蓝光动画&蓝光日韩印",
	class_url:"3&8&15&6&11&4&29&31&33&32&34",
	play_parse:true,
	play_json:[{
		re:'*',
		json:{
			parse:0,
			jx:0
		}
	}],
	lazy:'',
	limit:6,
	推荐:'ul#waterfall li;a&&title;img&&src;div.auth.cl&&Text;a&&href',
	一级:'ul#waterfall li;a&&title;img&&src;div.auth.cl&&Text;a&&href',
	二级:{
		title:"#thead_subject&&Text",
		img:"img.zoom&&src",
		desc:'td[id^="postmessage_"] font&&Text',
		content:'td[id^="postmessage_"] font&&Text',
		tabs:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
TABS=[]
let d = pdfa(html, 'table.t_table');
let aliIndex=1;
d.forEach(function(it) {
	let burl = pdfh(it, 'a&&href');
	log("burl >>>>>>" + burl);
	if (burl.startsWith("https://www.aliyundrive.com/s/")){
		TABS.push("aliyun"+aliIndex);
		aliIndex = aliIndex + 1;
	}
});
d = pdfa(html, 'table.t_table a[href^="magnet"]');
if (d.length>0){
	TABS.push("磁力");
}
log('4khdr TABS >>>>>>>>>>>>>>>>>>' + TABS);
`,
		lists:`js:
log(TABS);
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
LISTS = [];
let d = pdfa(html, 'table.t_table');
d.forEach(function(it){
	let burl = pdfh(it, 'a&&href');
	if (burl.startsWith("https://www.aliyundrive.com/s/")){
		let title = pdfh(it, 'a&&Text');
		log('title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
		burl = "http://127.0.0.1:9978/proxy?do=ali&type=push&url=" + encodeURIComponent(burl);
		log('burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
		let loopresult = title + '$' + burl;
		LISTS.push([loopresult]);
	}
});
let listm = [];
d.forEach(function(it){
	let burl = pdfh(it, 'a&&href');
	if (burl.startsWith("magnet")){
		let title = pdfh(it, 'a&&Text');
		log('title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
		log('burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
		let loopresult = title + '$' + burl;
		listm.push(loopresult);
	}
});
if (listm.length>0){
	LISTS.push(listm);
}
`,

	},
	一级:'ul#waterfall li;a&&title;img&&src;div.auth.cl&&Text;a&&href',
	搜索:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
if (rule_fetch_params.headers.Cookie.startsWith("http")){
	rule_fetch_params.headers.Cookie=fetch(rule_fetch_params.headers.Cookie);
	let cookie = rule_fetch_params.headers.Cookie;
	setItem(RULE_CK, cookie);
};
log('4khdr search cookie>>>>>>>>>>>>>>>' + rule_fetch_params.headers.Cookie);
let new_host= HOST + '/search.php';
let new_html=request(new_host);
let formhash = pdfh(new_html, 'input[name="formhash"]&&value');
log("4khdr formhash>>>>>>>>>>>>>>>" + formhash);
let params = 'formhash=' + formhash + '&searchsubmit=yes&srchtxt=' + KEY;
let _fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
let postData = {
    body: params
};
Object.assign(_fetch_params, postData);
log("4khdr search postData>>>>>>>>>>>>>>>" + JSON.stringify(_fetch_params));
let search_html = post( HOST + '/search.php', _fetch_params)
//log("4khdr search result>>>>>>>>>>>>>>>" + search_html);
let d=[];
let dlist = pdfa(search_html, 'div#threadlist ul li');
dlist.forEach(function(it){
	let title = pdfh(it, 'h3&&Text');
	if (searchObj.quick === true){
		if (title.includes(KEY)){
			title = KEY;
		}
	}
	let img = "";
	let content = pdfh(it, 'p:eq(3)&&Text');
	let desc = pdfh(it, 'p:eq(2)&&Text');
	let url = pd(it, 'a&&href', HOST);
	d.push({
		title:title,
		img:img,
		content:content,
		desc:desc,
		url:url
		})
});
setResult(d);
	`,
}
