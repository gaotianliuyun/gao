var rule={
title:'稀饭影视',
host:'https://www.xifanys.com',

url:'/yingpianshow/fyclass--------fypage---.html',
searchUrl:'/yingpiansearch/**----------fypage---.html',
searchable:2,
quickSearch:0,
filterable:0,
headers:{'User-Agent':'MOBILE_UA', },
class_name:'电影&电视剧&综艺&动漫&纪录片',
class_url:'dianying&lianxuju&zongyi&dongman&jilupian',
play_parse:true,
lazy:'',
limit:6,
推荐:'.module-list;.module-items&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
double:true, // 推荐内容是否双层定位
一级:'.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
二级:{"title":"h1&&Text;.video-info-aux&&div&&a:eq(0)&&Text","img":".module-item-pic&&img&&data-src","desc":";.video-info-aux&&a:eq(1)&&Text;.video-info-aux&&a:eq(2)&&Text;.video-info-items:eq(1)&&.video-info-actor&&Text;.video-info-items:eq(0)&&.video-info-actor&&Text","content":".video-info-items:eq(6)&&.video-info-content&&Text","tabs":".module-tab-item.tab-item","lists":".module-player-list:eq(#id)&&.scroll-content&&a"},
搜索:'.module-items&&.module-search-item;h3&&Text;*;.video-serial&&Text;*',
}
