var rule={
    title:'ddys',
    host:'https://ddys.tv',
    // homeUrl:'/',
    url:'https://ddys.tv/category/fyclass/page/fypage/',
    searchUrl:'/search.html?wd=**',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_name:'电影&剧集&动画',
    class_url:'movie&airing&anime',
    cate_exclude:'解析|动态',
    play_parse:true,
    lazy:'',
    limit:6,
    //推荐:'.indexShowBox;ul&&li;a&&title;img&&data-src;.s1&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.post-box-list&&article;a:eq(-1)&&Text;.post-box-image&&style;a:eq(0)&&Text;a:eq(-1)&&href',
    二级:{"title":"h1&&Text;.content-rt&&p:eq(0)&&Text","img":".img&&img&&data-src","desc":".content-rt&&p:eq(1)&&Text;.content-rt&&p:eq(2)&&Text;.content-rt&&p:eq(3)&&Text;.content-rt&&p:eq(4)&&Text;.content-rt&&p:eq(5)&&Text","content":".zkjj_a&&Text","tabs":".py-tabs&&option","lists":".player:eq(#id) li"},
    搜索:'.sr_lists&&ul&&li;h3&&Text;img&&data-src;.int&&p:eq(0)&&Text;a&&href',
}