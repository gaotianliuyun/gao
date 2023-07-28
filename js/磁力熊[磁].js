var rule = {
	title:'磁力熊[磁]',
	host:'https://www.cilixiong.com',
	homeUrl:'/top250/index.html',
	// url: '/fyclass/index_(fypage-1).html',
	url: '/fyclassfyfilter-(fypage-1).html',
	filter_url:'-{{fl.class or "0"}}-{{fl.area or "0"}}',
	filter:{
		"movie":[{"key":"class","name":"类型","value":[{"n":"全部","v":"0"},{"n":"剧情","v":"1"},{"n":"喜剧","v":"2"},{"n":"惊悚","v":"3"},{"n":"动作","v":"4"},{"n":"爱情","v":"5"},{"n":"犯罪","v":"6"},{"n":"恐怖","v":"7"},{"n":"冒险","v":"8"},{"n":"悬疑","v":"9"},{"n":"科幻","v":"10"},{"n":"家庭","v":"11"},{"n":"奇幻","v":"12"},{"n":"动画","v":"13"},{"n":"战争","v":"14"},{"n":"历史","v":"15"},{"n":"传记","v":"16"},{"n":"音乐","v":"17"},{"n":"歌舞","v":"18"},{"n":"运动","v":"19"},{"n":"西部","v":"20"},{"n":"灾难","v":"21"},{"n":"古装","v":"22"},{"n":"情色","v":"23"},{"n":"同性","v":"24"},{"n":"儿童","v":"25"},{"n":"纪录片","v":"26"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":"0"},{"n":"大陆","v":"1"},{"n":"香港","v":"2"},{"n":"台湾","v":"3"},{"n":"美国","v":"4"},{"n":"日本","v":"5"},{"n":"韩国","v":"6"},{"n":"英国","v":"7"},{"n":"法国","v":"8"},{"n":"德国","v":"9"},{"n":"印度","v":"10"},{"n":"泰国","v":"11"},{"n":"丹麦","v":"12"},{"n":"瑞典","v":"13"},{"n":"巴西","v":"14"},{"n":"加拿大","v":"15"},{"n":"俄罗斯","v":"16"},{"n":"意大利","v":"17"},{"n":"比利时","v":"18"},{"n":"爱尔兰","v":"19"},{"n":"西班牙","v":"20"},{"n":"澳大利亚","v":"21"},{"n":"波兰","v":"22"},{"n":"土耳其","v":"23"},{"n":"越南","v":"24"}]}],
		"drama":[{"key":"class","name":"类型","value":[{"n":"全部","v":"0"},{"n":"剧情","v":"1"},{"n":"喜剧","v":"2"},{"n":"惊悚","v":"3"},{"n":"动作","v":"4"},{"n":"爱情","v":"5"},{"n":"犯罪","v":"6"},{"n":"恐怖","v":"7"},{"n":"冒险","v":"8"},{"n":"悬疑","v":"9"},{"n":"科幻","v":"10"},{"n":"家庭","v":"11"},{"n":"奇幻","v":"12"},{"n":"动画","v":"13"},{"n":"战争","v":"14"},{"n":"历史","v":"15"},{"n":"传记","v":"16"},{"n":"音乐","v":"17"},{"n":"歌舞","v":"18"},{"n":"运动","v":"19"},{"n":"西部","v":"20"},{"n":"灾难","v":"21"},{"n":"古装","v":"22"},{"n":"情色","v":"23"},{"n":"同性","v":"24"},{"n":"儿童","v":"25"},{"n":"纪录片","v":"26"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":"0"},{"n":"大陆","v":"1"},{"n":"香港","v":"2"},{"n":"台湾","v":"3"},{"n":"美国","v":"4"},{"n":"日本","v":"5"},{"n":"韩国","v":"6"},{"n":"英国","v":"7"},{"n":"法国","v":"8"},{"n":"德国","v":"9"},{"n":"印度","v":"10"},{"n":"泰国","v":"11"},{"n":"丹麦","v":"12"},{"n":"瑞典","v":"13"},{"n":"巴西","v":"14"},{"n":"加拿大","v":"15"},{"n":"俄罗斯","v":"16"},{"n":"意大利","v":"17"},{"n":"比利时","v":"18"},{"n":"爱尔兰","v":"19"},{"n":"西班牙","v":"20"},{"n":"澳大利亚","v":"21"},{"n":"波兰","v":"22"},{"n":"土耳其","v":"23"},{"n":"越南","v":"24"}]}]
	},
	searchUrl: '/e/search/index.php#classid=1,2&show=title&tempid=1&keyboard=**;post',
	searchable:2,
	quickSearch:0,
	filterable:1,
	headers:{
		'User-Agent': 'MOBILE_UA'
	},
	timeout:5000,
	class_name:'电影&剧集',
	class_url:'1&2',
	play_parse:true,
	lazy:'',
	limit:6,
	推荐: `js:
		pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
		var d = [];
		var html = request(input);
		var list = pdfa(html, 'body&&.col');
		list.forEach(it => {
			d.push({
				title: pdfh(it, 'h2&&Text'),
				desc: pdfh(it, '.me-auto&&Text') + '分 / ' + pdfh(it, '.small&&Text'),
				pic_url: pd(it, '.card-img&&style'),
				url: pd(it, 'a&&href')
			});
		})
		setResult(d);
	`,
	一级: `js:
		pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
		var d = [];
		var html = request(input);
		var list = pdfa(html, 'body&&.col');
		list.forEach(it => {
			d.push({
				title: pdfh(it, 'h2&&Text'),
				desc: pdfh(it, '.me-auto&&Text') + '分 / ' + pdfh(it, '.small&&Text'),
				pic_url: pdfh(it, '.card-img&&style'),
				url: pd(it, 'a&&href')
			});
		})
		setResult(d);
	`,
	二级:{
		title:'h1&&Text;p.mb-2:eq(4)&&Text',
		desc:'p.mb-2:eq(1)&&Text;;;p.mb-2:eq(7)&&Text;p.mb-2:eq(5)&&Text',
		img:'.rounded-2&&src',
		content:'.mv_card_box&&Text',
		// tabs:'js:TABS = ["道长磁力"]',
		// lists:'.mv_down:eq(#id)&&.border-bottom',
		// list_text:'a&&Text',
		// list_url:'a&&href',

		tabs:'js:TABS = ["道长磁力","道长在线预览"]',
		lists:`js:
		log(TABS);
		pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
		LISTS = [];
		var dd=[];
		TABS.forEach(function(tab) {
			if (/道长磁力/.test(tab)) {
				var d = pdfa(html, '.mv_down&&.border-bottom');
				d = d.map(function(it) {
					var title = pdfh(it, 'a&&Text');
					log('title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
					var burl = pd(it, 'a&&href');
					log('burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
					return title + '$' + burl
				});
				LISTS.push(d)
			} else if (/道长在线预览/.test(tab)) {
				var d = pd(html, 'iframe&&src');
				if (d) {
					d=['第一集在线播放预览$' + d]
				} else {
					d=['没有预览不要点$http://www.sharenice.net/douyin/23852']
				}
				LISTS.push(d)
			}
		});
		`,
	},
	搜索:'.col;h2&&Text;.card-img&&style;.me-auto&&Text;a&&href',
}