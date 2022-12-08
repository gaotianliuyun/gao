var rule = { 
    title: '城市影视',
    host: 'https://www.citydy.com',
    // homeUrl:'/',
    url: '/show/id-fyclass/page/fypage.html',
    searchUrl: '/search/page/fypage/wd/**.html',
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
    推荐:'ul.img-list;li;a&&title;.lazyload&&data-original;.text-right&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.img-list li;a&&title;.lazyload&&data-original;.text-right&&Text;a&&href',
    二级:{"title":"h1&&Text;.t-muted:eq(-1)&&Text","img":".lazyload&&data-original","desc":";;.vod-detail-info&&ul&&li:eq(2)&&Text;.vod-detail-info&&ul&&li:eq(3)&&Text;.vod-detail-info&&ul&&li:eq(4)&&Text","content":".vod-detail-info&&ul&&li:eq(10)&&Text","tabs":".details-play-nav li","lists":".play-list.fade-in:eq(#id) li"},
    搜索:'.img-list li;a&&title;*;.title.text-center&&Text;a&&href;.text-muted:eq(-1)&&Text',
        }
