var rule = {
    title:'看了么',
    host:'https://www.ksksl.com',
    // homeUrl:'/',
    url:'/show/fyclass/page/fypage.html',
    searchUrl:'/ch.html?wd=**',
    searchable:1,
    quickSearch:1,
    headers:{
        'User-Agent':'UC_UA'
    },
    timeout:5000,
	class_name:'电影&电视剧&动漫&综艺&纪录片',//静态分类名称拼接
    class_url:'dy&tv&dm&zy&jl',//静态分类标识拼接
    play_parse:true,
    lazy:'',
    limit:5,
    推荐:'.dx-top;li;a&&title;a&&data-original;.vod_remarks&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
	
    一级:'ul.dx-list li;a&&title;a&&data-original;.vod_remarks&&Text;a&&href',
    
	二级:{"title":".obj-info h1&&Text;","img":"img:eq(2)&&src","desc":".video-info.d-none.d-sm-block&&Text","content":".vod_content&&Text","tabs":".play-title h2","lists":".play_li.fn-clear:eq(#id) a"},
    
	搜索:'.movie-list-body;.movie-list-item;.movie-title&&Text;.movie-post-lazyload&&data-original;.vod_remarks&&Text;a&&href',
}