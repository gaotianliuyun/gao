var rule = {
	title:'电影港[磁]',
	编码:'gb2312',
	host:'https://www.dygang.tv',
	homeUrl:'/',
	url: '/fyclass/index_fypage.htm?',
	filter_url:'{{fl.class}}',
	filter:{
	},
	searchUrl: '/e/search/index.php#tbname=article&show=title,smalltext&tempid=1&Submit=%CB%D1%CB%F7&keyboard=**;post',
	searchable:2,
	quickSearch:1,
	filterable:0,
	headers:{
		'User-Agent': 'PC_UA',
		'Referer': 'https://www.dygang.tv/'
	},
	timeout:5000,
	class_name:'最新电影&经典高清&国配电影&经典港片&国剧&日韩剧&美剧&综艺&动漫&纪录片&高清原盘&4K高清区&3D电影&电影专题',
	class_url:'ys&bd&gy&gp&dsj&dsj1&yx&zy&dmq&jilupian&1080p&4K&3d&dyzt',
	play_parse:false,
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
			var d = pdfa(html, '#dede_content&&a');
			var index=0;
			d.forEach(function(it) {
				let burl = pdfh(it, 'a&&href');
				log("burl >>>>>>" + burl);
				if (burl.startsWith("magnet")){
					let result = 'magnet' + index;
					index = index + 1;
					TABS.push(result);
				}
			});
			log('TABS >>>>>>>>>>>>>>>>>>' + TABS);
		`,
		lists:`js:
			log(TABS);
			pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
			LISTS = [];
			var d = pdfa(html, '#dede_content&&a');
			TABS.forEach(function(tab) {
				log('tab >>>>>>>>' + tab);
				if (/^magnet/.test(tab)) {
					let targetindex = parseInt(tab.substring(6));
					let index = 0;
					d.forEach(function(it){
						let burl = pdfh(it, 'a&&href');
						if (burl.startsWith("magnet")){
							if (index == targetindex){
								let title = pdfh(it, 'a&&Text');
								log('title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
								log('burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
								let loopresult = title + '$' + burl;
								LISTS.push([loopresult]);
							}
							index = index + 1;
						}
					});
				}
			});
			`,

	},
	搜索:'table.border1;img&&alt;img&&src;img&&alt;a&&href;img&&alt',
	预处理:`
		let new_host=HOST;
		let new_html=request(new_host, {withHeaders:true});
		let json=JSON.parse(new_html);
		let setCk=Object.keys(json).find(it=>it.toLowerCase()==="set-cookie");
		let cookie=setCk?json[setCk].split(";")[0]:"";
		log("cookie:"+cookie);
		rule_fetch_params.headers.Cookie=cookie;
		setItem(RULE_CK,cookie);
	`,
}
