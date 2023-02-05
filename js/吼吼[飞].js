var rule={
title:'吼吼',
host:'https://www.hoho.tv',
// homeUrl:'/',
url:'/vod/show/fyclass/page/fypage.html',
    searchUrl:'/vod/search/wd/**.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_name:'电影&连续剧&综艺&动漫&纪录片',
    class_url:'1&2&3&4&20',
    //class_parse:'ul.nav-menu-items&&li;a&&Text;a&&href;./(\\d+).html',
    //cate_exclude:'',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.module-list;.module-items&&.module-item;a&&title;.lazyloaded&&data-src;.module-item-caption&&span&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.module-items&&.module-item;a&&title;.lazyloaded&&data-src;.module-item-caption&&span&&Text;a&&href',
    二级:{"title":"h1.page-title&&Text;.video-info-aux&&a&&Text","img":".lazyload&&data-src","desc":";;;.video-info-items:eq(1)&&Text;.video-info-items:eq(0)&&Text","content":".vod_content&&Text","tabs":".module-tab-content&&span","lists":".module-blocklist:eq(#id) a"},
    搜索:'body&&.module-search-item;h3&&a&&title;.lazyload&&data-src;*;*',
}