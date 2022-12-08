var rule = {
    title:'电影先生',
    host:'http://dyxs20.com',
    // homeUrl:'/',
    url:'/pianku-fyclass--------fypage---/',
    searchUrl:'/search-**-----------fypage--/',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    //class_name:'电影&电视剧&动漫&综艺',
	//class_url:'dianying&dianshiju&dongman&zongyi',
    class_parse:'.swiper&&ul&&li;a&&Text;a&&href;/v/(.*)/',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.module-items;.module-item&&.module-item-cover;img&&alt;img&&data-src;.module-item-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.module-items;img&&alt;img&&data-src;.module-item-text&&Text;a&&href',
    二级:{"title":"h1&&Text;.video-info-main&&spann:eq(0)&&Text;.video-info-main&&span:eq(2)&&Text","img":".mobile-play&&img&&data-src","desc":".video-info-main&&span:eq(3)&&Text;.video-info-main&&span:eq(5)&&Text;.video-info-main&&span:eq(7)&&Text","content":".video-info-content&&Text","tabs":".module-tab-content&&span","lists":".sort-item:eq(#id) a"},
    搜索:'.module-items;h3&&Text;img&&data-src;a&&Text;a&&href',
}