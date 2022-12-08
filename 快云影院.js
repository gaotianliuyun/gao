var rule = {
     title:'快云',
    host:'https://kuaiyunyy.com',
    // homeUrl:'/',
    url:'/index.php/vod/show/id/fyclass/page/fypage.html',
    //searchUrl:'/vodsearch/**----------fypage---.html',
    searchable:0,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_parse:'.nav-menu-items&&li;a&&title;a&&href;/(\\d+).html',
	cate_exclude:'直播|足球',
    play_parse:true,
    lazy:'',
    limit:8,
    推荐:'.module-items;.module-item-cover&&.module-item-pic;a&&title;.lazyloaded&&data-src;.item-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.module-list&&.module-item-pic;a&&title;.lazyloaded&&data-src;.module-item-text&&Text;a&&href',
    二级:{"title":"h1.page-title&&Text;.video-info-aux&&Text","img":".lazyload&&data-src","content":".content.vod_content&&Text","tabs":".module-tab-item.tab-item","lists":".module-blocklist.scroll-box:eq(#id) a"},
    
}
