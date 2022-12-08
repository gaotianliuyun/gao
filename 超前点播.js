var rule = {
    title:'超前点播',
    host:'https://bzhanyy.com',
    // homeUrl:'/',
    url:'/index.php/vod/show/id/fyclass/page/fypage.html',
    searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_name:'电影&电视剧&综艺&动漫&国产剧&港台剧&日韩剧&欧美剧',
    class_url:'1&2&3&4&13&14&15&16',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.movie-list-body;.movie-list-item;.movie-title&&Text;.movie-post-lazyload&&data-original;.module-item-note&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.movie-list-body&&.movie-list-item;.movie-title&&Text;.movie-post-lazyload&&data-original;.module-item-note&&Text;a&&href',
    二级:{"title":"h1&&Text;.cr3&&Text","img":".poster&&img&&src","desc":".module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-2)&&Text;.scroll-content&&Text;.title-block&&.starLink&&Text;.module-info-content&&.module-info-item:eq(2)&&.module-info-item-content&&Text","content":".detailsTxt&&Text","tabs":".swiper-wrapper&&a","lists":".play_list_box:eq(#id)&&.content_playlist li"},
    搜索:'.movie-list-body&&.vod-search-list;.movie-title&&Text;.movie-post-lazyload&&data-original;.module-item-note&&Text;a&&href',
}
