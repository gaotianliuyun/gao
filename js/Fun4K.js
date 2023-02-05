// 搜索验证
muban.mxone5.二级.desc = '.video-info-items:eq(3)&&Text;;;.video-info-actor:eq(1)&&Text;.video-info-actor:eq(0)&&Text';
muban.mxone5.二级.tabs = '.module-tab-item';
muban.mxone5.二级.lists = '.module-player-list:eq(#id)&&.scroll-content&&a';
var rule = {
	title:'Fun4K',
	模板:'mxone5',
	host:'https://www.fun4k.com',
	url:'/vod/fyclass--------fypage---/',
	class_parse:'.nav ul li;a&&Text;a&&href;.*/(.*?)/',
	cate_exclude: 'Bilibili|虎牙',
	lazy:"js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);var url=html.url;if(html.encrypt=='1'){url=unescape(url)}else if(html.encrypt=='2'){url=unescape(base64Decode(url))}if(/m3u8|mp4/.test(url)){input=url}else{input}",
	headers:{
		'User-Agent':'PC_UA',
	},
	// searchUrl:'/vodsearch/**----------fypage---/',
	searchUrl:'/index.php/ajax/suggest?mid=1&wd=**',
	detailUrl:'/vodplay/fyid-1-1/', //非必填,二级详情拼接链接
	搜索:'json:list;name;pic;;id',
}