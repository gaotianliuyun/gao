var rule = {
	title:'电影港[磁]',
	编码:'gb2312',
	搜索编码:'gb2312',
	host:'https://www.dygang.tv',
	homeUrl:'/',
	url: '/fyclass/index_fypage.htm?',
	filter_url:'{{fl.class}}',
	filter:{
	},
	searchUrl: '/e/search/index123.php#tempid=1&tbname=article&keyborad=**&show=title%2Csmalltext&Submit=%CB%D1%CB%F7;post',
	searchable:2,
	quickSearch:0,
	filterable:0,
	headers:{
		'User-Agent': 'MOBILE_UA',
		'Referer': 'https://www.dygang.tv/'
	},
	timeout:5000,
	class_name:'最新电影&经典高清&国配电影&经典港片&国剧&日韩剧&美剧&综艺&动漫&纪录片&高清原盘&4K高清区&3D电影&电影专题',
	class_url:'ys&bd&gy&gp&dsj&dsj1&yx&zy&dmq&jilupian&1080p&4K&3d&dyzt',
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
	推荐:'div#tl table.border1;img&&alt;img&&src;;a&&href',
	一级:'table.border1;img&&alt;img&&src;;a&&href',
	二级:{
		title:"div.title a&&Text",
		img:"#dede_content img&&src",
		desc:"#dede_content p:eq(3)&&Text",
		content:"#dede_content p:eq(2)&&Text",
		tabs:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
TABS=[]
var d = pdfa(html, '#dede_content table tbody tr a[href^="magnet"]');
if (d.length>0){
	TABS.push("磁力");
}
d = pdfa(html, '#dede_content table tbody tr a[href^="ed2k"]');
if (d.length>0){
	TABS.push("電驢");
}
log('dygang TABS >>>>>>>>>>>>>>>>>>' + TABS);
`,
		lists:`js:
log(TABS);
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
LISTS = [];
var d = pdfa(html, '#dede_content table tbody tr');
let listm = [];
let liste = [];
d.forEach(function(it){
	let burl = pdfh(it, 'a&&href');
	let title = pdfh(it, 'a&&Text');
	log('dygang title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
	log('dygang burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
	let loopresult = title + '$' + burl;
	if (burl.startsWith("magnet")){
		listm.push(loopresult);
	}else if (burl.startsWith("ed2k")){
		liste.push(loopresult);
	}
});
if (listm.length>0){
	LISTS.push(listm);
}
if (liste.length>0){
	LISTS.push(liste);
}
`,

	},
	搜索:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
let params = 'tempid=1&tbname=article&keyboard=' + KEY + '&show=title%2Csmalltext&Submit=%CB%D1%CB%F7';
let _fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
let postData = {
    method: "POST",
    body: params
};
delete(_fetch_params.headers['Content-Type']);
Object.assign(_fetch_params, postData);
log("dygang search postData>>>>>>>>>>>>>>>" + JSON.stringify(_fetch_params));
let search_html = request( HOST + '/e/search/index123.php', _fetch_params, true);
log("dygang search result>>>>>>>>>>>>>>>" + search_html);
let d=[];
let dlist = pdfa(search_html, 'table.border1');
dlist.forEach(function(it){
	let title = pdfh(it, 'img&&alt');
	if (searchObj.quick === true){
		if (title.includes(KEY)){
			title = KEY;
		}
	}
	let img = pd(it, 'img&&src', HOST);
	let content = pdfh(it, 'img&&alt');
	let desc = pdfh(it, 'img&&alt');
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
