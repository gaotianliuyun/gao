var rule = {
    title:'喵喵',
    host:'https://www.2345ka.com',
    // homeUrl:'/',
    // url:'/t/fyclass/fypage.html',
    url:'/t/fyclassfyfilter/fypage.html',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.by}}',
    filter:{
        "1":[{"key":"by","name":"排序","value":[{"n":"时间","v":""},{"n":"人气","v":"/hits"},{"n":"评分","v":"/score"}]}],
        "2":[{"key":"by","name":"排序","value":[{"n":"时间","v":""},{"n":"人气","v":"/hits"},{"n":"评分","v":"/score"}]}],
        "3":[{"key":"by","name":"排序","value":[{"n":"时间","v":""},{"n":"人气","v":"/hits"},{"n":"评分","v":"/score"}]}],
        "4":[{"key":"by","name":"排序","value":[{"n":"时间","v":""},{"n":"人气","v":"/hits"},{"n":"评分","v":"/score"}]}],
        "6":[{"key":"by","name":"排序","value":[{"n":"时间","v":""},{"n":"人气","v":"/hits"},{"n":"评分","v":"/score"}]}],
    },
    searchUrl:'/s/**/fypage.html',
    searchable:2,
    quickSearch:0,
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    class_parse:'.bm-item-list a:gt(0):lt(7);a&&Text;a&&href;/(\\d+).html',
    play_parse:true,
    lazy:'',
    limit:5,
    推荐:'*',
    double:true, // 推荐内容是否双层定位
    一级:'.movie-list-body .movie-list-item;.movie-title&&Text;.Lazy&&data-original;.movie-rating&&Text;a&&href',
    二级:{
        "title":"h1&&Text;.scroll-content&&Text",
        "img":".poster img&&src",
        "desc":".cr3:eq(0)&&Text;;;.starLink&&Text;.cr3:eq(0)&&Text",
        "content":".detailsTxt--div&&Text",
        "tabs":".play_source_tab a",
        "lists":".content_playlist:eq(#id) a"
    },
    搜索:'.vod-search-list;*;*;*;*',
}