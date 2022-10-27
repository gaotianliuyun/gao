var rule = {
    title:'蛋蛋魔法',
    host:'https://ddmf.net',
    // homeUrl:'/',
    url:'/vodshow/fyclass--------fypage---.html',
    searchUrl:'/vodsearch/**----------fypage---.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_name:'电影&电视剧&综艺&动漫&纪录片',
    class_url:'1&2&3&4&22',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.module-item;.module-item-cover&&.module-item-pic;a&&title;.lazyloaded&&data-src;.module-item-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.module-list&&.module-item;.module-item-pic&&a&&title;.lazyloaded&&data-src;.module-item-text&&Text;a&&href',
    二级:{"title":"h1&&Text;.video-info-aux.scroll-content&&Text","img":".lazyload&&data-src","desc":".module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-2)&&Text;.video-info-items:eq(1)&&.video-info-item.video-info-actor&&Text;.video-info-items:eq(0)&&.video-info-item.video-info-actor&&Text","content":".video-info-item.video-info-content.vod_content&&Text","tabs":".module-tab-content&&.module-tab-item.tab-item","lists":".module-blocklist.scroll-box.scroll-box-y:eq(0)&&.scroll-content a"},
    搜索:'.module-search-item;.lazy.lazyload&&alt;img&&data-src;.video-serial&&Text;a.video-serial&&href',
}
