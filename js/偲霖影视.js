var rule = {
    title:'偲霖影视',
    host:'https://40tl.com',    
    // homeUrl:'/',
    url:'/show/id/fyclass/page/fypage.html',
    searchUrl:'/search/so**/page/fypage.html',
    searchable:2,
    quickSearch:0,
    filterable:0,
    headers:{'User-Agent':'MOBILE_UA', },
    class_name:'电影&电视剧&综艺&动漫&电影解说',//静态分类名称拼接
    class_url:'dianying&lianxuju&zongyi&dongman&dianyingjieshuo',//静态分类标识拼接
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.module-list;.module-items&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.module-items&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
    二级:{"title":"h1&&Text;.video-info-aux&&div&&a:eq(0)&&Text","img":".module-item-pic&&img&&data-src","desc":";.video-info-aux&&a:eq(1)&&Text;.video-info-aux&&a:eq(2)&&Text;.video-info-items:eq(1) a&&Text;.video-info-items:eq(0) a&&Text","content":".video-info-content&&Text","tabs":".module-tab-item","lists":".module-list.module-player-list:eq(#id)&&.scroll-content a"},
    搜索:'.module-items .module-search-item;a&&title;img&&data-src;.video-serial&&Text;a&&href',
}
