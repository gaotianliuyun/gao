var rule = {
	title:'极影网[磁]',
	//host:'https://www.jiyingw.net',
	//homeUrl:'/',
	//url: '/fyclass/page/fypage?',
	host:'http://127.0.0.1:10079',
	homeUrl:'/p/0/socks5%253A%252F%252F192.168.101.1%253A1080/https://www.jiyingw.net',
	url: '/p/0/socks5%253A%252F%252F192.168.101.1%253A1080/https://www.jiyingw.net/fyclass/page/fypage?',
	filter_url:'{{fl.class}}',
	filter:{
		"movie":[{"key":"class","name":"标签","value":[{"n":"全部","v":"movie"},{"n":"4k","v":"tag/4k"}, {"n":"人性","v":"tag/人性"}, {"n":"传记","v":"tag/chuanji"}, {"n":"儿童","v":"tag/儿童"}, {"n":"冒险","v":"tag/adventure"}, {"n":"剧情","v":"tag/剧情"}, {"n":"加拿大","v":"tag/加拿大"}, {"n":"动作","v":"tag/dongzuo"}, {"n":"动漫","v":"tag/动漫"}, {"n":"励志","v":"tag/励志"}, {"n":"历史","v":"tag/history"}, {"n":"古装","v":"tag/古装"}, {"n":"同性","v":"tag/gay"}, {"n":"喜剧","v":"tag/comedy"}, {"n":"国剧","v":"tag/国剧"}, {"n":"奇幻","v":"tag/qihuan"}, {"n":"女性","v":"tag/女性"}, {"n":"家庭","v":"tag/family"}, {"n":"德国","v":"tag/德国"}, {"n":"恐怖","v":"tag/kongbu"}, {"n":"悬疑","v":"tag/xuanyi"}, {"n":"惊悚","v":"tag/jingsong"}, {"n":"意大利","v":"tag/意大利"}, {"n":"战争","v":"tag/zhanzheng"}, {"n":"战斗","v":"tag/战斗"}, {"n":"搞笑","v":"tag/搞笑"}, {"n":"故事","v":"tag/故事"}, {"n":"文艺","v":"tag/文艺"}, {"n":"日常","v":"tag/日常"}, {"n":"日本","v":"tag/日本"}, {"n":"日语","v":"tag/日语"}, {"n":"校园","v":"tag/校园"}, {"n":"武侠","v":"tag/wuxia"}, {"n":"法国","v":"tag/法国"}, {"n":"游戏","v":"tag/游戏"}, {"n":"灾难","v":"tag/zainan"}, {"n":"爱情","v":"tag/爱情"}, {"n":"犯罪","v":"tag/crime"}, {"n":"真人秀","v":"tag/zhenrenxiu"}, {"n":"短片","v":"tag/duanpian"}, {"n":"科幻","v":"tag/kehuan"}, {"n":"纪录","v":"tag/jilu"}, {"n":"美剧","v":"tag/meiju"}, {"n":"舞台","v":"tag/stage"}, {"n":"西部","v":"tag/xibu"}, {"n":"运动","v":"tag/yundong"}, {"n":"韩剧","v":"tag/韩剧"}, {"n":"韩国","v":"tag/韩国"}, {"n":"音乐","v":"tag/yinyue"}, {"n":"高清电影","v":"tag/高清电影"}]}]
	},
	searchUrl: '/?s=**',
	searchable:2,
	quickSearch:0,
	filterable:1,
	headers:{
		'User-Agent': 'PC_UA',
		'Referer': 'https://www.jiyingw.net/'
	},
	timeout:5000,
	class_name:'电影&电视剧&动漫&综艺&影评',
	class_url:'movie&tv&cartoon&movie/variety&yingping',
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
	推荐:'ul#post_container li;a&&title;img&&src;.article entry_post&&Text;a&&href',
        一级:'ul#post_container li;a&&title;img&&src;.article entry_post&&Text;a&&href',
	二级:{
		title:"h1&&Text",
		img:"#post_content img&&src",
		desc:"#post_content&&Text",
		content:".movie-introduce&&Text",
		tabs:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
TABS=[]
let d = pdfa(html, '.movie-introduce p a[href^="magnet"]');
if (d.length > 0){
	TABS.push("磁力");
}else{
	d = pdfa(html, 'div#down p.down-list3 a[href^="magnet"]');
	if (d.length > 0){
		TABS.push("磁力");
	}
}
d = pdfa(html, '.movie-introduce p a[href^="ed2k"]');
if (d.length > 0){
	TABS.push("電驢");
}else{
	d = pdfa(html, 'div#down p.down-list3 a[href^="ed2k');
	if (d.length > 0){
		TABS.push("電驢");
	}
}
log('jiyingw TABS >>>>>>>>>>>>>>>>>>' + TABS);
`,
		lists:`js:
log(TABS);
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
LISTS = [];
let listm = [];
let liste = [];
let d = pdfa(html, '.movie-introduce p');
d.forEach(function(it){
	let burl = pdfh(it, 'a[href^="magnet"]&&href');
	let title = pdfh(it, 'a[href^="magnet"]&&Text');
	log('jiyingw title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
	log('jiyingw burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
	let loopresult = title + '$' + burl;
	listm.push(loopresult);

	burl = pdfh(it, 'a[href^="ed2k"]&&href');
	title = pdfh(it, 'a[href^="ed2k"]&&Text');
	log('jiyingw title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
	log('jiyingw burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
	loopresult = title + '$' + burl;
	liste.push(loopresult);
});
if (listm.length<=0){
	d = pdfa(html, 'div#down p.down-list3');
	d.forEach(function(it){
		let burl = pdfh(it, 'a[href^="magnet"]&&href');
		let title = pdfh(it, 'a[href^="magnet"]&&Text');
		log('jiyingw title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
		log('jiyingw burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
		let loopresult = title + '$' + burl;
		listm.push(loopresult);

		burl = pdfh(it, 'a[href^="ed2k"]&&href');
		title = pdfh(it, 'a[href^="ed2k"]&&Text');
		log('jiyingw title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
		log('jiyingw burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
		loopresult = title + '$' + burl;
		liste.push(loopresult);
	});
}
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
let _fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
let search_html=request(HOST + rule.homeUrl + '/?s=' + KEY, _fetch_params);
let d=[];
let dlist = pdfa(search_html, 'h2');
log("jiyingw dlist.length>>>>>>>"+dlist.length);
dlist.forEach(function(it){
	let title = pdfh(it, 'a&&title');
	//if (searchObj.quick === true){
	//	title = KEY;
	//}
	let img = '';
	let content = title;
	let desc = title;
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
