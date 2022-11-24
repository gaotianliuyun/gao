var rule={
    title:'土狗影院',
    host:'https://v.qiau.cn',
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
    //class_parse:'.conch-nav&&ul&&li;a&&Text;a&&href;./(\\d+).html',
    //cate_exclude:'',
    class_name:'电影&电视剧&综艺&动漫&记录片&哔哩哔哩&国产剧&港台剧&日韩剧&欧美剧',
    class_url:'1&2&3&4&33&20&13&14&15&16',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'body&&.hl-list-wrap;ul&&li;a&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.hl-vod-list&&li;a&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
    二级:{"title":".hl-dc-title&&Text;.hl-col-xs-12&&em&&.hl-text-muted:eq(-2)&&Text","img":".hl-lazy&&data-original","desc":";;.hl-col-xs-12:eq(2)&&Text;.hl-col-xs-12:eq(3)&&Text;.hl-col-xs-12:eq(4)&&Text","content":".hl-content-text&&Text","tabs":".hl-plays-from a","lists":".hl-plays-list:eq(#id) li"},
    搜索:'.hl-list-wrap&&ul&&li;.hl-item-thumb&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
}
