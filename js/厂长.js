var rule={
    title:'广长资源',
    host:'https://www.czspp.com',
    // homeUrl:'/',
    url:'/fyclass/page/fypage',
    searchUrl:'/xssearch?q=**',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_name:'豆瓣电影Top250&最新电影&电视剧&国产剧&美剧&韩剧&番剧&动漫',//静态分类名称拼接
    class_url:'dbtop250&zuixindianying&dsj&gcj&meijutt&hanjutv&fanju&dm',//静态分类标识拼接
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.bt_img;ul&&li;h3.dytit&&Text;img.lazy&&data-original;.furk&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.bt_img&&ul&&li;h3.dytit&&Text;img.lazy&&data-original;.jidi&&Text;a&&href',
    二级:{"title":"h3.dy_tit_big&&Text;.moviedteail_list li:eq(0)&&Text;.moviedteail_list li:eq(2)&&Text","img":"img.lazy&&data-original","desc":".moviedteail_list li:eq(1)&&Text;.moviedteail_list li:eq(3)&&Text;.moviedteail_list li:eq(4)&&Text;.moviedteail_list li:eq(7)&&Text","content":".yp_context&&Text","tabs":".mi_paly_box&&span","lists":".paly_list_btn:eq(#id) a"},
    搜索:'.search_list&&ul&&li;h3&&Text;img&&data-original;.jidi&&Text;a&&href',
}