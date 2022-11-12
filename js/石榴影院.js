var rule={
    title:'石榴影院',
    host:'https://hei19.com',
    // homeUrl:'/',
    url:'/catalog?column=fyclass&sort=1&per_page=72&page=fypage',
    searchUrl:'/search?type=1&keywords=**&page=fypage',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    //class_parse:'.conch-nav&&ul&&li;a&&Text;a&&href;./(\\d+).html',
    //cate_exclude:'',
    class_name:'电影&电视剧&综艺&动漫',
    class_url:'1&2&3&4',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.media-list-1;ul&&li;a&&title;img&&src;.tag&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.media-list-2&&ul&&li;a&&title;img&&src;.tag&&Text;a&&href',
    二级:{"title":".hl-dc-title&&Text;.hl-col-xs-12&&em&&.hl-text-muted:eq(-2)&&Text","img":".hl-lazy&&data-original","desc":";;.hl-col-xs-12:eq(2)&&Text;.hl-col-xs-12:eq(3)&&Text;.hl-col-xs-12:eq(4)&&Text","content":".video-desc-single&&Text","tabs":".play-box-mobile h2","lists":".play-list&&.item-box&&li a"},
    搜索:'.hl-list-wrap&&ul&&li;.hl-item-thumb&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
}
