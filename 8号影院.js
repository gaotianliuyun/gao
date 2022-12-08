var rule={
title:'8号影院',
    host:'http://www.8hysw.com',
    // homeUrl:'/',
    url:'/frim/fyclass-fypage.html',
    searchUrl:'/search.php?page=fypage&searchword=**&searchtype=',
searchable:2,//是否启用全局搜索,
quickSearch:0,//是否启用快速搜索,
filterable:0,//是否启用分类筛选,
class_name:'电影&电视剧&综艺&动漫&日韩剧&国产剧&欧美剧&港台剧',
    class_url:'1&2&3&4&16&13&15&14',
play_parse:true,
lazy:'',
limit:6,
tab_exclude:'本周热门|最近更新',
推荐:'.stui-pannel_bd;.stui-vodlist li;h4&&Text;.lazyload&&data-original;.text-right&&Text;a&&href',
double:true, // 推荐内容是否双层定位
一级:'.stui-vodlist.clearfix&&li;a&&title;.lazyload&&data-original;.text-right&&Text;a&&href',
二级:{"title":"h1&&Text;.stui-content__detail&&p&&Text","img":".lazyload&&data-original","desc":".data:eq(0)&&Text;.data:eq(1)&&Text;.data:eq(2)&&Text;.data:eq(3)&&Text","content":".desc&&Text","tabs":".stui-pannel__head.bottom-line h3","lists":".stui-content__playlist:eq(#id) li"},
 搜索:muban.首图2.搜索2,

}