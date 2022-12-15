var rule={
    title:'饭团',
    模板:'首图',
    host:'https://fositv.com',
    // url:'/vod____show/fyclass--------fypage---.html',
    url:'/vod_____show/fyclass--time------fypage---.html', 
    // class_parse:'.myui-header__menu li.hidden-sm:gt(0):lt(5);a&&Text;a&&href;/vod____type/(\\d+).html',
    class_parse:'.myui-header__menu li.hidden-sm:gt(0):lt(5);a&&Text;a&&href;/vod_____type/(\\d+).html',
    // 二级:{"title":".text-fff&&Text;.myui-player__data p&&Text","img":"","desc":".myui-player__data p&&Text;;;.text-collapse p:eq(1)&&Text;.text-collapse p:eq(0)&&Text","content":".data&&Text","tabs":".nav-tabs:eq(0) li","lists":".myui-content__list:eq(#id) li"},
    二级:{"title":".text-fff&&Text;.myui-player__data p&&Text","img":".lazyload&&data-original","desc":".myui-player__data p&&Text;;;.text-collapse p:eq(1)&&Text;.text-collapse p:eq(0)&&Text","content":".data&&Text","tabs":".nav-tabs:eq(0) li","lists":".myui-content__list:eq(#id) li"},
    // searchUrl:'/vod_search/-------------.html?wd=**',
    searchUrl: '/vod_____search/**----------fypage---.html',
    搜索:'#searchList li;a&&title;.lazyload&&data-original;.text-right&&Text;a&&href',
}