var rule={
    title:'麦豆',
    host:'https://www.mdoutv.cc',
    // homeUrl:'/',
    url:'/vodshow/fyclass--------fypage---.html',
    //searchUrl:'/search/**/',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_parse:'.row&&ul&&li;a&&Text;a&&href;.*/(.*?).html',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.myui-panel_bd;&&li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.myui-vodlist&&li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
    二级:{"title":"h1&&Text;.module-info-tag&&Text","img":".lazyload&&data-original","desc":".data:eq(1)&&Text;.data:eq(2)&&Text;.data:eq(3)&&Text;.data:eq(4)&&Text;.data:eq(5)&&Text","content":".sketch&&Text","tabs":".nav&&li","lists":".myui-content__list:eq(#id) li"},
    搜索:'',
}