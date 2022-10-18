var rule = {
    title:'起飞影院',
    host:'http://www.qfitv.com',
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
    class_name:'电影&电视剧&综艺&动漫&纪录片',
    class_url:'1&2&3&4&55',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.module-items;.module-poster-item;a&&title;img&&data-original;.module-item-note&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.module-poster-item;a&&title;img&&data-original;.module-item-note&&Text;a&&href',
    二级:{"title":"h1&&Text;.module-info-content&&.module-info-item:eq(4)&&.module-info-item-content&&Text","img":".ls-is-cached.lazy.lazyload&&data-original","desc":".text-muted:eq(-1)&&Text;.text-muted:eq(-1)&&Text;.text-muted:eq(-1)&&Text;.module-info-content&&.module-info-item:eq(6)&&.module-info-item-content&&Text","content":".show-desc&&Text","tabs":".module-tab-items-box:eq(0)&&.module-tab-item","lists":".module-play-list-content:eq(0) a"},
    搜索:'.module-card-item.module-item;.module-card-item-title&&Text;img&&data-original;.module-item-note&&Text;a.play-btn-o&&href',
}