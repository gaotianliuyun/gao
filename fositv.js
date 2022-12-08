var rule = { 
    title: 'fositv',
    host: 'https://fositv.com/',
    // homeUrl:'/',
    url: '/vod_____type/fyclass-fypage.html',
    searchUrl: '/vod_____search/**----------fypage---.html',
    class_name:'电影&电视剧&综艺&动漫&纪录片',
    class_url:'1&2&3&4&5',
    searchable: 2,//是否启用全局搜索,
    quickSearch: 0,//是否启用快速搜索,
    filterable: 0,//是否启用分类筛选,
    headers: {//网站的请求头,完整支持所有的,常带ua和cookies
                'User-Agent': 'MOBILE_UA',
                // "Cookie": "searchneed=ok"
            },
    play_parse: true,//播放是否解析
    lazy: '',//是否免嗅探
    limit: 6,
    推荐:'ul.myui-vodlist.clearfix;li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.myui-vodlist li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
    二级:{"title":".myui-content__detail .title&&Text;.t-muted:eq(-1)&&Text","img":".lazyload&&data-original","desc":";;.myui-player__data&&p.text-muted&&Text;.col-pd.text-collapse p:eq(1)&&Text;.col-pd.text-collapse p:eq(0)&&Text","content":".sketch.content&&Text","tabs":".nav-tabs:eq(0) li","lists":".myui-content__list:eq(#id) li"},
    搜索:'.myui-vodlist__media li;a&&title;*;*;a&&href;.text-muted:eq(-1)&&Text',
        }
