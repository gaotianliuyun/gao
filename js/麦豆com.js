var rule = {
    title:'麦豆com',
    host:'https://www.mdoutv.com',
    // homeUrl:'/',
    url:'/movie_bt_series/fyclass/page/fypage',
    searchUrl:'/search/**/page/fypage',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_parse:'.submenu_mi&&li;a&&Text;a&&href;.*/(.*)',
	//class_name:'国产&港台&欧美&韩剧&日剧&泰剧&剧集&电影&动漫&综艺',
	//class_url:'guocanju&gangtai&en&hanju&riju&taiju&tv&movie&ac&zongyi',
	cate_exclude:'留言|幸运码|更多播放线路|蚂蚁导航|迷历史',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'body&&.mi_btcon;ul&&li;img&&alt;img&&data-original;.jidi&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.mrb&&ul&&li;img&&alt;img&&data-original;.jidi&&Text;a&&href',
    二级:{"title":"h1&&Text;.moviedteail_list&&li:eq(2)&&Text;","img":".dyxingq&&img&&src","desc":".moviedteail_list&&li:eq(3)&&Text;.moviedteail_list&&li:eq(4)&&Text","content":".yp_context&&Text","tabs":".fr&&a","lists":".paly_list_btn:eq(#id) a"},
    搜索:'.search_list&&ul&&li;h3&&Text;img&&data-original;.hdinfo&&span&&Text;a&&href',
}