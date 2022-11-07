var rule = {
    title:'看片狂人',
    host:'https://www.kpkuang.de',
    //host:'https://www.kpkuang.org/',    
    // homeUrl:'/',
    url:'/vodshow/fyclass--------fypage-----.html',
    searchUrl:'/vodsearch/**----------fypage---.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_name:'电影&电视剧&综艺&动漫&国产剧&港剧&日剧&欧美剧&台剧&泰剧&越南剧&韩剧&海外剧',
    class_url:'1&2&3&4&13&14&15&16&20&21&22&23&30',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.uk-switcher.uk-margin;.fed-week-boxs li;.fed-list-pics&&title;.fed-list-pics&&data-original;.fed-list-remarks&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.fed-list-info&&.fed-list-item;a&&title;.fed-list-pics&&data-original;.fed-list-remarks&&Text;a&&href',
    二级:{"title":"h1&&Text;.uk-list&&li:eq(3)&&Text","img":".cover-shadow-xs&&data-original","desc":".module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-4)&&Text;.module-info-content&&.module-info-item:eq(-3)&&Text;.uk-list&&li:eq(0)&&Text;.uk-list&&li:eq(1)&&Text","content":".fed-col-xs12.fed-show-md-block&&Text","tabs":"ul.yunlist&&li a","lists":".fed-play-item.fed-drop-item:eq(#id) ul.fed-part-rows:eq(1) li"},
    搜索:'.fed-back-whits.uk-margin&&.uk-text-center;a&&title;.fed-list-pics&&data-original;.uk-overlay&&Text;a&&href',
}
