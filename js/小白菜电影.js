var rule={
    title:'小白菜电影',
    host:'https://www.xbcdy.com',
    url:'/vodshow/fyclass--------fypage---.html',
    //searchUrl:'/vod/search/page/fypage/wd/**.html',
    //class_parse:'.navbar-items li:gt(1):lt(6);a&&Text;a&&href;.*/(.*?).html',

    searchable:2,
    quickSearch:1,
    filterable:0,
    headers:{'User-Agent':'MOBILE_UA', },
    class_name:'电影&电视剧&综艺&动漫',
    class_url:'dianying&dianshiju&zongyi&dongman',
    推荐:'ul.stui-vodlist.clearfix;li;a&&title;.lazyload&&data-original;;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'body .stui-vodlist__box;a&&title;.lazyload&&data-original;;a&&href',
    二级:{"title":"h1.title&&Text;.stui-content__detail p:eq(1)&&Text","img":".lazyload&&data-original","desc":".stui-content__detail p:eq(-3)&&Text;.stui-content__detail p:eq(-2)&&Text","content":".stui-content__detail p.detail&&Text","tabs":".stui-pannel__head ul li","lists":".stui-content__playlist:eq(#id) li"},
    // 搜索:'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
}
