var rule={
    title:'爱猫影院',
    host:'https://www.moviend.com',
    url:'/lists/fyclass/fypage.html',
    searchUrl:'/search.html?key=**&submit=',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{
        'User-Agent':'UC_UA',
    },
    //class_parse:'.myui-header__menu&&li;a&&Text;a&&href;.*/(.*?).html',
    class_name:'电影&电视剧&综艺&动漫&纪录片&国产剧&港台剧&日韩剧&欧美剧&其他剧',
    class_url:'1&2&3&4&16&20&21&22&23&24',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'ul.myui-vodlist.clearfix;li;a&&title;a&&data-original;.pic-tag.text-right&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.myui-vodlist li;a&&title;a&&data-original;.text-right&&Text;a&&href',
    二级:{"title":".myui-content__detail .title&&Text;.text-muted:eq(-1)&&Text","img":"img&&src","desc":".text-muted:eq(-1)&&Text;.text-muted:eq(-1)&&Text;.pic-text.text-right&&Text;.myui-content__detail p:eq(-2)&&Text;.text-muted:eq(-1)&&Text","content":".yh-text&&Text","tabs":".nav-tabs:eq(0) li","lists":".myui-content__list:eq(#id) li"},
    搜索:'#searchList li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href;.text-muted:eq(-1)&&Text',
}
