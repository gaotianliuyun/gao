var rule={     
    title:'伊人追剧',
    host:'https://yrzj.vip',
    url:'/index.php/vod/show/id/fyclass/page/fypage.html',
    searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    //class_parse:'.nav-menu-items&&li;a&&Text;a&&href;.*/(.*?).html',
    //cate_exclude:'演员',
    class_name:'电影&电视剧&综艺&动漫',
    class_url:'1&2&3&4',  
推荐:'.module-list;.module-items&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
double:true, // 推荐内容是否双层定位
一级:'.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
二级:{"title":"h1&&Text;.video-info-aux&&div&&a:eq(0)&&Text","img":".module-item-pic&&img&&data-src","desc":";.video-info-aux&&a:eq(1)&&Text;.video-info-aux&&a:eq(2)&&Text;.video-info-items:eq(1) a&&Text;.video-info-items:eq(0) a&&Text","content":".vod_content&&Text","tabs":".module-tab-content&& span","lists":".module-player-list:eq(#id)&&.scroll-content&&a"},
搜索:'.module-items .module-search-item;a&&title;img&&data-src;.video-serial&&Text;a&&href',
}
