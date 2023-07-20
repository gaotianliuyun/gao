// 播放器ijk --> "playerType":1

var 二级=`js:
try {
	let html = request(input);
	print(html);
	html = JSON.parse(html);
	let node = html.data;
	VOD = {
		vod_id: node["vod_id"],
		vod_name: node["vod_name"],
		vod_pic: node["vod_pic"],
		type_name: node["vod_class"],
		vod_year: node["vod_year"],
		vod_area: node["vod_area"],
		vod_remarks: node["vod_remarks"],
		vod_actor: node["vod_actor"],
		vod_director: node["vod_director"],
		vod_content: node["vod_content"].strip()
	};
	let episodes = node.vod_url_with_player;
	let playMap = {};
	if (typeof play_url === "undefined") {
		var play_url = ""
	}
	episodes.forEach(function(ep) {
		let source = ep["name"];
		if (!playMap.hasOwnProperty(source)) {
			playMap[source] = []
		}
		playMap[source].append(ep["url"])
	});
	let playFrom = [];
	let playList = [];
	Object.keys(playMap).forEach(function(key) {
		playFrom.append(key);
		playList.append(playMap[key])
	});
	let vod_play_from = playFrom.join("$$$");
	let vod_play_url = playList.join("$$$");
	VOD["vod_play_from"] = vod_play_from;
	VOD["vod_play_url"] = vod_play_url
} catch (e) {
	log("获取二级详情页发生错误:" + e.message)
}
`;

var rule = {
	title: '酷影[V2]', // csp_AppYsV2
	host: 'http://cms.realdou.cn',
	homeUrl:'/api.php/app/index_video',
	url: '/api.php/app/video?tid=fyclass&class=&area=&lang=&year=&limit=20&pg=fypage',
	// url: '/api.php/app/video?tid=fyclassfyfilter&limit=20&pg=fypage',
	// filter_url:'&class={{fl.class}}&area={{fl.area}}&lang={{fl.lang}}&year={{fl.year}}',
	// filter: {
	// 	"6":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]}],
	// 	"7":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]}],
	// 	"8":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]}]
	// },
	detailUrl:'/api.php/app/video_detail?id=fyid',
	searchUrl: '/api.php/app/search?text=**&pg=fypage',
	searchable: 2,
	quickSearch: 0,
	// filterable:1,//是否启用分类筛选,
	headers:{'User-Agent':'Dart/2.14 (dart:io)'},
	timeout:5000,
	class_name:'4K电视剧&4K电影&儿童4K', // 分类筛选 /api.php/app/nav
	class_url:'7&6&8',
	play_parse:true,
	lazy:`js:
		input = {
			jx: 0,
			url: input,
			parse: 0,
			header: JSON.stringify({
				'user-agent': 'Lavf/58.12.100'
			})
		}
	`,
	limit:6,
	推荐:'json:list[5];vlist;*;*;*;*',
	double:true,
	一级:'json:list;vod_name;vod_pic;vod_remarks;vod_id',
	二级:二级,
	搜索:'*',
}