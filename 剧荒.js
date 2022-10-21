var rule = {
    title:'剧荒',
    host:'https://www.juhuang.tv',    
    // homeUrl:'/',
    url:'/type/fyclass_type_fypage.html',
    searchUrl:'/s/**/fypage.html',
    searchable:1,
    quickSearch:1,
    headers:{
        'User-Agent':'UC_UA'
    },
    timeout:5000,
	class_name:'电视剧&电影&综艺&动漫',//静态分类名称拼接
	class_url:'2&1&3&4',//静态分类标识拼接
    //class_parse:'.drop-content-items li:gt(0):lt(7);.grid-item-name&&Text;a&&href',
    play_parse:true,
    lazy:'',
    limit:5,
    推荐:'#movie-list-body;.movie-list-item;a&&title;.lazyloaded&&data-src;.module-item-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
   
   一级:'.module-item-pic&&a;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
    
	
	二级:{"title":"h1.movie-title&&Text;.data:eq(1)&&Text","img":".poster img&&src","desc":".cr3.starLink&&Text","content":".detailsTxt&&Text","tabs":".play_source_tab a","lists":".content_playlist:eq(#id) a"},
    搜索:'.vod-search-list;.movie-title&&Text;.Lazy&&data-original;.getop&&Text;a&&href;.getop:eq(-1)&&Text',
}