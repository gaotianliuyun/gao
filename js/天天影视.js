var rule={
    title:'天天影视',
    host:'http://www.b7yy.cc',
    // homeUrl:'/',
    url:'/yy6090-show/fyclass/page/fypage.html',
    searchUrl:'/yy6090-search/page/fypage/wd/**.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'PC_UA',
        // "Cookie": "searchneed=ok"
    },
    class_name:'电影&剧集&综艺&动漫&纪录',
    class_url:'dianying&lianxuju&zongyi&dongman&jilupian',
    lazy:'',
    limit:6,
    推荐:'.mo-cols-lays;ul.mo-cols-rows li;.mo-situ-name&&Text;a&&data-original;.mo-situ-rema&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.mo-cols-lays:eq(1)&&ul.mo-cols-rows li;.mo-situ-name&&Text;a&&data-original;.mo-situ-rema&&Text;a&&href',
    二级:{"title":"h1&&Text;.s-top-info-title&&Text","img":"img.mo-part-full&&src","desc":".data:eq(0)&&Text;.data:eq(1)&&Text;.data:eq(2)&&Text;.data:eq(3)&&Text","content":".mo-word-info&&Text","tabs":"h2.mo-fsxs-14px&&.mo-movs-btns","lists":"ul.mo-movs-item:eq(#id)&&li"},
    搜索:'.mo-deta-info.mo-cols-rows;h1&&Text;a&&data-original;.mo-situ-rema&&Text;a&&href',
}
