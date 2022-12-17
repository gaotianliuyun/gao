var rule={
    title:'子子影视',
    host:'https://www.ziziys.com',
    // homeUrl:'/',
    url:'/list/fyclass/page/fypage.html',
    searchUrl:'/vsearch/--.html?wd=**',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_name:'电影&动漫&国产剧&美剧&日韩剧',
    class_url:'1&3&13&14&15',
    lazy:'',
    limit:6,
    double:true, // 推荐内容是否双层定位
    // 推荐:'.module-item;a&&title;.lazyloaded&&data-src;.module-item-text&&Text;a&&href',
    推荐:'.module-items:eq(0);.module-item;a&&title;.lazyloaded&&data-src;.module-item-text&&Text;a&&href',
    一级:'.module-item;a&&title;.lazyloaded&&data-src;.module-item-text&&Text;a&&href',
    二级:{
    	"title":"h1&&Text;.video-info-header&&Text",
    	"img":".lazyload&&data-src",
    	// "desc":".video-info-items:eq(1)&&Text;.video-info-items:eq(2)&&Text;.video-info-items:eq(3)&&Text",
    	"desc":";;;.video-info-main .video-info-actor:eq(1)&&Text;.video-info-main .video-info-actor:eq(0)&&Text",
    	"content":".vod_content&&Text",
    	"tabs":".module-tab-item",
    	"lists":".sort-item:eq(#id) a"
	},
    搜索:'.module-items;.lazyload&&alt;.lazyload&&data-src;.tag-link&&Text;*',
}
