var rule={
    title:'尘落影视',
    host:'http://v.ftixkrv.cn',
    url:'/whole/fyclass_______0_addtime_fypage.html',   
    searchUrl:'/?c=search&wd=**&sort=addtime&order=desc&page=fypage',   
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'PC_UA',
        // "Cookie": "searchneed=ok"
    },
    class_name:'电影&电视剧&综艺&动漫',
    class_url:'1&2&4&3',
    cate_exclude:'全网资源',
    play_parse:true,
    lazy:'',
    limit:6,
   推荐:'.movie-item-in;a&&title;img&&src;em&&Text;a&&href',  
   一级:'.movie-item-in;a&&title;img&&src;em&&Text;a&&href',
   二级:{"title":"h1&&Text;.table-striped tr:eq(2)&&Text","img":".img-thumbnail&&src","desc":";;.table-striped tr:eq(3)&&Text;.table-striped tr:eq(1)&&Text;.table-striped tr:eq(0)&&Text","content":".movie-introduce&&Text","tabs":".nav.nav-tabs li a","lists":".tab-pane.active:eq(#id) div a"},
   搜索:'.movie-item-in;a&&title;img&&src;em&&Text;a&&href',
}