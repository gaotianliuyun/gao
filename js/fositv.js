var rule={
    title:'饭团',
    模板:'首图',
    host:'https://fositv.com',
    // url:'/vod_________________________show/fyclass--------fypage---.html',
    url:'/fyclass-fypage.html',
    searchUrl:'/vod_________________________search/**----------fypage---.html',
    class_parse:'.myui-header__menu li.hidden-sm:gt(0):lt(6);a&&Text;a&&href;com/(.*?).html',
    二级:{"title":".text-fff&&Text;.myui-player__data p&&Text","img":".lazyload&&data-original","desc":".myui-player__data p&&Text;;;.text-collapse p:eq(1)&&Text;.text-collapse p:eq(0)&&Text","content":".data&&Text","tabs":".nav-tabs:eq(0) li","lists":".myui-content__list:eq(#id) li"},
    搜索:'#searchList li;a&&title;.lazyload&&data-original;.text-right&&Text;a&&href',
}