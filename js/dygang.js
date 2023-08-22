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
	推荐:'div#tl tr:has(>td>table.border1>tbody>tr>td>a>img);table.border1 img&&alt;table.border1 img&&src;table:eq(2)&&Text;a&&href',
	一级:`js:
		pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
		let d = [];
		let turl = (MY_PAGE === 1)? '/' : '/index_'+ MY_PAGE + '.htm';
		input = rule.homeUrl + MY_CATE + turl;
		let html = request(input);
		let list = pdfa(html, 'tr:has(>td>table.border1)');
		list.forEach(it => {
			let title = pdfh(it, 'table.border1 img&&alt');
			if (title!==""){
				d.push({
					title: title,
					desc: pdfh(it, 'table:eq(1)&&Text'),
					pic_url: pdfh(it, 'table.border1 img&&src'),
					url: pdfh(it, 'a&&href')
				});
			}
		})
		setResult(d);
	`,
	二级:{
		title:"div.title a&&Text",
		img:"#dede_content img&&src",
		desc:"#dede_content p:eq(3)&&Text",
		content:"#dede_content p:eq(2)&&Text",
		tabs:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
TABS=[]
let d = pdfa(html, '#dede_content table tbody tr a');
let tabsa = [];
let tabsq = [];
let tabsm = false;
let tabse = false;
d.forEach(function(it) {
	let burl = pdfh(it, 'a&&href');
	if (burl.startsWith("https://www.aliyundrive.com/s/")){
		tabsa.push("阿里云盤");
	}else if (burl.startsWith("https://pan.quark.cn/s/")){
		tabsq.push("夸克云盤");
	}else if (burl.startsWith("magnet")){
		tabsm = true;
	}else if (burl.startsWith("ed2k")){
		tabse = true;
	}
});
if (tabsm === true){
	TABS.push("磁力");
}
if (tabse === true){
	TABS.push("電驢");
}
let tmpIndex;
tmpIndex=1;
tabsa.forEach(function(it){
	TABS.push(it + tmpIndex);
	tmpIndex = tmpIndex + 1;
});
tmpIndex=1;
tabsq.forEach(function(it){
	TABS.push(it + tmpIndex);
	tmpIndex = tmpIndex + 1;
});
log('dygang TABS >>>>>>>>>>>>>>>>>>' + TABS);
`,
		lists:`js:
log(TABS);
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
LISTS = [];
let d = pdfa(html, '#dede_content table tbody tr a');
let lista = [];
let listq = [];
let listm = [];
let liste = [];
d.forEach(function(it){
	let burl = pdfh(it, 'a&&href');
	let title = pdfh(it, 'a&&Text');
	log('dygang title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
	log('dygang burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
	let loopresult = title + '$' + burl;
	if (burl.startsWith("https://www.aliyundrive.com/s/")){
		if (TABS.length==1){
			burl = "http://127.0.0.1:9978/proxy?do=ali&type=push&confirm=0&url=" + encodeURIComponent(burl);
		}else{
			burl = "http://127.0.0.1:9978/proxy?do=ali&type=push&url=" + encodeURIComponent(burl);
		}
		loopresult = title + '$' + burl;
		lista.push(loopresult);
	}else if (burl.startsWith("https://pan.quark.cn/s/")){
		if (TABS.length==1){
			burl = "http://127.0.0.1:9978/proxy?do=quark&type=push&confirm=0&url=" + encodeURIComponent(burl);
		}else{
			burl = "http://127.0.0.1:9978/proxy?do=quark&type=push&url=" + encodeURIComponent(burl);
		}
		loopresult = title + '$' + burl;
		listq.push(loopresult);
	}else if (burl.startsWith("magnet")){
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
lista.forEach(function(it){
	LISTS.push([it]);
});
listq.forEach(function(it){
	LISTS.push([it]);
});
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
