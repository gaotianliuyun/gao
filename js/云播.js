var rule={
title:'TVA云播',
host:'http://www.tvyb03.com',
url:'/vod/type/id/fyclass/page/fypage.html',
searchUrl:'/vod/search.html?wd=**&submit=',
searchable:2,//是否启用全局搜索,
quickSearch:0,//是否启用快速搜索,
filterable:0,//是否启用分类筛选,
class_name:'电影&电视剧&综艺&动漫&日韩剧&国产剧&欧美剧&港台剧',
class_url:'1&2&3&4&16&13&15&14',
play_parse:true,
lazy:'',
limit:6,
// 推荐:'ul.myui-vodlist;ul li;*;*;*;*',
推荐:'ul.myui-vodlist;li;*;*;*;*',
// 推荐:'ul.myui-vodlist;ul&&li;*;*;*;*', // 此写法本地js无效
double:true, // 推荐内容是否双层定位
一级:'.myui-vodlist__box;a&&title;.lazyload&&data-original;.tag&&Text;a&&href',
二级:{"title":"h1&&Text;.data:eq(0) a:eq(0)&&Text","img":".lazyload&&data-original","desc":";.data:eq(0) a:eq(2)&&Text;.data:eq(0) a:eq(1)&&Text;.data:eq(2)&&Text;.data:eq(3)&&Text","content":".text-collapse span&&Text","tabs":".myui-panel__head h3","lists":".myui-content__list:eq(#id) li"},
搜索:'ul.myui-vodlist__media li;*;*;*;*',
}