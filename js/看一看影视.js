var rule = {
    title:'看一看影视',
    host:'https://www.kanyk.cc',
    // homeUrl:'/',
    url:'/index.php?m=vod-list-id-fyclass-pg-fypage-order--by--class--year--letter--area--lang-.html',
    searchUrl:'/index.php?m=vod-search-pg-fypage-wd-**.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_name:'电影&电视剧&综艺&动漫&纪录片&国产剧&港台剧&日韩剧&欧美剧&泰剧',
    class_url:'1&2&3&4&16&12&13&14&15&19',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.index-area.clearfix;ul&&li;a&&title;img&&data-original;.other&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.index-area.clearfix&&ul&&li;a&&title;img&&data-original;.other&&Text;a&&href',
    二级:{"title":".ek.title&&a:eq(2)&&Text;.module-info-tag-link:eq(2)&&Text","img":".ek.ct-l&&img&&data-original","desc":".module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-2)&&Text;.ek.ct-c&&dl&&dt:eq(1)&&Text;.ek.ct-c&&dl&&dt:eq(3)&&Text","content":".ek.ct-c&&.ek.ee&&Text","tabs":".ek.playfrom&&li","lists":".ek.playlist:eq(#id)&&.ek.videourl li"},
    搜索:'.index-area.clearfix&&ul&&li;*;*;*;*',
}
