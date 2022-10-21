var rule = {
    title:'omofun动漫',
    host:'https://www.omofun.tv',
    // homeUrl:'/',
    url:'/vod/show/id/fyclass/page/fypage.html',
    searchUrl:'/vod/search.html?wd=**',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_parse:'.navbar-items li;a&&Text;a&&href;.*/(.*?).html',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.module-item;.lazyload&&alt;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.module-item;.lazyload&&alt;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    二级:{"title":"h1&&Text;.module-info-tag&&Text","img":".lazyload&&data-original","desc":".module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text","content":".module-info-introduction&&Text","tabs":".module-tab-item","lists":".module-play-list-content:eq(#id) a"},
    搜索:'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
}