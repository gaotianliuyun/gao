var rule={
    title:'if101',
    host:'https://www.oulevod.tv',
    // homeUrl:'/',
    url:'/index.php/vod/show/id/fyclass/page/fypage.html',
    searchUrl:'/index.php/vod/search.html?wd=**',
    searchable:2,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_parse:'.conch-nav&&ul&&li;a&&Text;a&&href;./(\\d+).html',
    cate_exclude:'',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'body&&.hl-list-wrap;ul&&li;*;*;*;*',
    double:true, // 推荐内容是否双层定位
    一级:'.hl-vod-list&&li;a&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
    二级:{"title":"h2.hl-dc-title&&Text;.hl-full-box&&ul&&li:eq(6) a&&Text","img":".hl-lazy&&data-original","desc":";;;.hl-full-box&&ul&&li:eq(2) a&&Text;.hl-full-box&&ul&&li:eq(3) a&&Text","content":".hl-content-text&&Text","tabs":".hl-from-list&&li","lists":".hl-plays-list:eq(#id) li"},
    搜索:'.hl-list-wrap&&.hl-item-pic;*;*;*;*',
}