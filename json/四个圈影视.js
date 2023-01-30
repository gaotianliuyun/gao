var rule={
    title:'四个圈影视',
    host:'https://pg.fenwe078.cf/',
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
    class_parse:'.nav&&ul&&li;a&&title;a&&href;.*/(.*?).html',
    cate_exclude:'原站',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.module-list;.module-items&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
double:true, // 推荐内容是否双层定位
一级:'.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
二级:{"title":"h1&&Text;.tag-link&&Text","img":".module-item-pic&&img&&data-src","desc":".video-info-items:eq(0)&&Text;.video-info-items:eq(1)&&Text;.video-info-items:eq(2)&&Text;.video-info-items:eq(3)&&Text","content":".vod_content&&Text","tabs":".module-tab-item","lists":".module-player-list:eq(#id)&&.scroll-content&&a"},
搜索:'.module-items .module-search-item;a&&title;img&&data-src;.video-serial&&Text;a&&href',
}