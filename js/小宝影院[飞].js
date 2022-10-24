var rule={
title:'小宝影院',
host:'https://xiaoheimi.net',
// homeUrl:'/',
url:'/index.php/vod/type/id/fyclass/page/fypage.html',
searchUrl:'/index.php/vod/search.html?wd=**',
searchable:2,//是否启用全局搜索,
quickSearch:1,//是否启用快速搜索,
filterable:0,//是否启用分类筛选,
headers:{//网站的请求头,完整支持所有的,常带ua和cookies
'User-Agent':'MOBILE_UA',
 // "Cookie": "searchneed=ok"
},
class_name:'电影&连续剧&综艺&动漫&纪录片',
class_url:'1&2&3&4&21',
//class_parse:'ul.nav-menu-items&&li;a&&Text;a&&href;./(\\d+).html',
//cate_exclude:'',
play_parse:true,
lazy:'',
limit:6,
推荐:'body ul.myui-vodlist;li;a&&title;a&&data-original;.text-right&&Text;a&&href',
double:true, // 推荐内容是否双层定位
一级:'ul.myui-vodlist&&li;a&&title;a&&data-original;.text-right&&Text;a&&href',
二级:{"title":"h1.title&&Text;p.data&&Text","img":"img.lazyload&&data-original","desc":";;;p.data:eq(2) a&&Text;p.data:eq(3) a&&Text","content":"span.sketch&&Text","tabs":".nav-tabs.active","lists":".myui-content__list:eq(#id) li"},
搜索:'.myui-vodlist__media.clearfix&&li;*;*;*;*',
}