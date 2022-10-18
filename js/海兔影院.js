var rule = {
    title:'海兔影院',
    host:'https://www.haitu.tv',
    // homeUrl:'/',
    url:'/vod/show/id/fyclass/page/fypage.html',
    searchUrl:'/vod/search/page/fypage/wd/**.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_parse:'.nav-menu-items&&li;a&&title;a&&href;/(\\d+).html',
    //class_name:'电影&电视剧&综艺&动漫&纪录片',
    //class_url:'1&2&3&4&55',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.module-item;.module-item-cover&&.module-item-pic;a&&title;.lazyloaded&&data-src;.module-item-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.module-list&&.module-item;.module-item-pic&&a&&title;.lazyloaded&&data-src;.module-item-text&&Text;a&&href',
    二级:{"title":"h1.page-title&&Text;.video-info-aux&&Text","img":".lazyload&&data-src","content":".video-info-item.video-info-content.vod_content&&Text","tabs":".module-tab-item.tab-item","lists":".module-blocklist.scroll-box:eq(#id) a"},
    
}