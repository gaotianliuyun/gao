var rule = {
    title:'乐猪TV',
    host:'http://www.lezhutv.com',
    // homeUrl:'/',
    url:'/type/fyclass-fypage.html',
    searchUrl:'/s/**/fypage.html',
    searchable:0,
    quickSearch:0,
    headers:{
        'User-Agent':'UC_UA'
    },
    timeout:5000,
    class_parse:'div.nav a;a&&Text;a&&href;/(\\d.+).html',
    play_parse:true,
    lazy:'',
    limit:5,
    推荐:'.movie-list-body;.movie-list-item;.movie-title&&Text;.movie-post-lazyload&&data-original;.movie-rating&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'ul.tbox_m2 li;a&&title;a&&data-original;span&&Text;a&&href',
    二级:{"title":".data h4&&Text","img":".item-lazy&&data-original","desc":".cr3.starLink&&Text","content":".tbox_js&&Text","tabs":".tbox_t&&h3","lists":".list_block.show:eq(#id) li"},
    搜索:'.vod-search-list;.movie-title&&Text;.Lazy&&data-original;.getop&&Text;a&&href;.getop:eq(-1)&&Text',
	
}
