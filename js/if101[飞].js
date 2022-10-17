var rule={
    title:'if101',
    host:'https://www.oulevod.tv',
    // homeUrl:'/',
    url:'/index.php/vod/show/id/fyclass/page/fypage.html',
    searchUrl:'/index.php/vod/search.html?wd=**',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
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
    推荐:'body&&.hl-list-wrap;ul&&li;a&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.hl-vod-list&&li;a&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
    二级:{"title":".hl-dc-title&&Text;.hl-col-xs-12&&em&&.hl-text-muted:eq(0)&&Text","img":".hl-lazy&&data-original","desc":".hl-col-xs-12&&em&&.hl-text-muted:eq(-2)&&Text;.hl-col-xs-12&&em&&.hl-text-muted:eq(1)&&Text;.hl-col-xs-12&&em&&.hl-text-muted:eq(2)&&Text","content":".hl-content-text&&Text","tabs":".hl-plays-wrap","lists":".hl-plays-list:eq(#id) li"},
    搜索:'.hl-list-wrap&&ul&&li;h3&&Text;.hl-lazy&&data-original;.hl-item-title:eq(0)&&Text;a&&href',
}