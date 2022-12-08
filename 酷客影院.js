var rule = {
     title:'酷客影院',
    host:'http://www.2kuke.com',
    // homeUrl:'/',
    url:'/list/fyclass_fypage.html',
    //searchUrl:'/vodsearch/**----------fypage---.html',
    searchable:0,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    //class_parse:'.stui-header__menu li.hidden-xs;a&&Text;a&&href;/(\\d+)/',
    class_name:'电影&剧集&综艺&动漫',
    class_url:'1&2&4&3',
    play_parse:true,
    lazy:'',
    limit:8,
    推荐:'.stui-vodlist.clearfix;.stui-vodlist__box;a&&title;a&&data-original;.pic-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.stui-vodlist.clearfix li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
    二级:{"title":"h1.line1&&Text;.stui-content__detail p:eq(0)&&Text","img":".lazyload&&data-original","desc":";;;.stui-content__detail p:eq(1)&&Text;.stui-content__detail p:eq(2)&&Text","content":".stui-content__detail p:eq(4)&&Text","tabs":".nav.nav-tabs.pull-right&&li","lists":".stui-content__playlist:eq(#id) li"},
    
}