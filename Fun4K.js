muban.mxone5.二级.tabs = '.module-tab-item';
muban.mxone5.二级.lists = '.module-player-list:eq(#id)&&.scroll-content&&a';
var rule = Object.assign(muban.mxone5,{
title:'Fun4K',
host:'https://www.fun4k.com',
url:'/vod/fyclass--------fypage---/',
searchUrl:'/vodsearch/**----------fypage---/',
class_parse:'.nav ul li;a&&Text;a&&href;.*/(.*?)/',
cate_exclude: 'Bilibili|虎牙',
headers:{
		'User-Agent':'PC_UA',
	},
});