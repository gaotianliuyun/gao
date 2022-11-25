var rule={
    title:'追剧兔',
    host:'https://www.zjtu.cc',
    // homeUrl:'/',
    url:'/vodshow/fyclass--------fypage---.html',
    searchUrl:'/vodsearch/**----------fypage---.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'PC_UA',
        // "Cookie": "searchneed=ok"
    },
    class_name:'电影&剧集&综艺&动漫&纪录',
    class_url:'1&2&3&4&21',
    lazy:'',
    limit:6,
    推荐:'.vodlist;.pack-ykpack;a&&title;.bj.eclazy&&data-original;.pack-prb&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.pack-ykpack;a&&title;.bj.eclazy&&data-original;.pack-prb&&Text;a&&href',
    二级:{"title":"h1&&title;.s-top-info-title&&Text","img":".g-playicon.s-cover-img&&img&&src","desc":".data:eq(0)&&Text;.data:eq(1)&&Text;.data:eq(2)&&Text;.data:eq(3)&&Text","content":".item-desc&&Text","tabs":".channelname.swiper-slide","lists":".play_list_box:eq(#id)&&.content_playlist li"},
    搜索:'.pack-packcover.returl.list-top-b;a&&title;.bj.eclazy&&data-original;.pack-prb&&Text;a&&href',
}
