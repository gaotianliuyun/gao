var rule={
    title:'69美剧',
    host:'https://www.69mj.com',
    // homeUrl:'/',
    url:'/index.php/vod/show/id/fyclass/page/fypage.html',
    searchUrl:'/index.php/vod/search.html?wd=**',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_parse:'.nav-menu-items&&li;a&&Text;a&&href;/(\\d+).html',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.module-list;.module-item;a&&title;.lazyloaded&&data-src;.module-item-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.module&&.module-item;a&&title;.lazyloaded&&data-src;.module-item-text&&Text;a&&href',
    二级:{
    	"title":"h1&&Text;.video-info-aux&&Text",
    	"img":".lazyload&&data-src",
    	"desc":";;;.video-info-actor:eq(1)&&Text;.video-info-actor:eq(0)&&Text",
    	"content":".vod_content&&Text",
    	"tabs":".module-tab-item.tab-item",
    	"lists":".module-player-list:eq(#id)&&.sort-item a"
	},
    搜索:'.module&&.module-search-item;h3&&Text;.lazyload&&data-src;.video-serial&&Text;a&&href',
}
