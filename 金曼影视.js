var rule={
    title:'金曼影视',
    host:'https://www.jinmantv.com',
    // homeUrl:'/',
    url:'/index.php/vod/show/id/fyclass/page/fypage.html',
    searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    //class_parse:'.navbar-items li:gt(2):lt(8);a&&Text;a&&href;.*/(.*?).html',
    class_name:'电影&电视剧&综艺&动漫&纪录片&电影解说',
    class_url:'1&2&3&4&5&20',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'body .main;.module-poster-item.module-item;a&&title;img&&data-original;.module-item-note&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'a.module-poster-item.module-item;a&&title;img&&data-original;.module-item-note&&Text;a&&href',
    二级:{"title":"h1&&Text;.module-info-tag&&Text","img":".lazy.lazyload&&data-original","desc":".module-info-item:eq(-1)&&Text;.module-info-item:eq(-2)&&Text;.module-info-item:eq(-3)&&Text;.module-info-item:eq(3)&&.module-info-item-content&&Text;.module-info-item:eq(1)&&.module-info-item-content&&Text","content":".module-info-introduction&&Text","tabs":".module-tab-item.tab-item","lists":".module-list:eq(#id)&&.module-play-list a"},
    搜索:'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
}
