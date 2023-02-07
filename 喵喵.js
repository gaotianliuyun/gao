var rule = {
    title:'喵喵',
    host:'https://www.2345ka.com',
    // homeUrl:'/',
    url:'/t/fyclass/fypage.html',
    searchUrl:'/s/**/fypage.html',
    searchable:2,
    quickSearch:0,
    headers:{
        'User-Agent':'UC_UA'
    },
    timeout:5000,
    class_parse:'.bm-item-list a:gt(0):lt(7);a&&Text;a&&href;/(\\d+).html',
    play_parse:true,
    lazy:'',
    limit:5,
    推荐:'.movie-list-body;.movie-list-item;.movie-title&&Text;.movie-post-lazyload&&data-original;.movie-rating&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.movie-list-body .movie-list-item;.movie-title&&Text;.Lazy&&data-original;.movie-rating&&Text;a&&href',
    二级:{"title":"h1.movie-title&&Text;.data:eq(1)&&Text","img":".poster img&&src","desc":".cr3.starLink&&Text","content":".detailsTxt&&Text","tabs":".play_source_tab a","lists":".content_playlist:eq(#id) a"},
    搜索:'.vod-search-list;.movie-title&&Text;.Lazy&&data-original;.getop&&Text;a&&href;.getop:eq(-1)&&Text',
}