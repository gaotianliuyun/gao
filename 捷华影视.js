var rule={
    title:'捷华影视',
    host:'https://www.jiehua.tv',
    url:'/vodtypehtml/fyclass-fypage/',
    searchUrl:'/vodsearch/**----------fypage---/',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{
        'User-Agent':'UC_UA',
    },
    // class_parse:'.fed-pops-navbar&&ul.fed-part-rows&&a.fed-part-eone:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
    //class_parse:'.myui-header__menu&&li:gt(0):lt(6);a&&Text;a&&href;.*/(.*?).html',
    class_name:'电影&电视剧&综艺&动漫&纪录片',
    class_url:'1&2&3&4&24',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'ul.myui-vodlist.clearfix;li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.myui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
    二级:{"title":".myui-content__detail .title&&Text;.myui-content__detail p:eq(-2)&&Text","img":".myui-content__thumb .lazyload&&data-original","desc":".myui-content__detail p:eq(0)&&Text;.myui-content__detail p:eq(1)&&Text;.myui-content__detail p:eq(2)&&Text","content":".content&&Text","tabs":".nav-tabs:eq(0) li","lists":".myui-content__list:eq(#id) li"},
    搜索:'#searchList li;a&&title;.lazyload&&data-original;.pic_text.text_right&&Text;a&&href;.text-muted:eq(-1)&&Text',
}
