var rule={
    title:'异世界动漫',
    host:'http://www.ysjdm.net',
    url:'/index.php/vod/show/class/fyclass/id/20/page/fypage.html',
    searchUrl:'/index.php/vod/search.html?wd=**&submit=',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
 class_name:'BD无修&萝莉&学園&后宫&恋爱&热血&神魔&奇幻&治愈&搞笑&百合冒险&魔法&机战&战争&战斗&犯罪&悬疑&推理&科幻&竞技&运动&耽美&其他&OVA&剧场版&国产动漫',
 class_url:'BD无修&萝莉&学園&后宫&恋爱&热血&神魔&奇幻&治愈&搞笑&百合冒险&魔法&机战&战争&战斗&犯罪&悬疑&推理&科幻&竞技&运动&耽美&其他&OVA&剧场版&国产动漫',
    cate_exclude:'',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.vodlist;li;a&&title;a&&data-original;.text_right&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.vodlist&&li;a&&title;a&&data-original;.text_right&&Text;a&&href',
    二级:{"title":"h2&&Text","img":".lazyload&&data-original","desc":"li.data:eq(0)&&Text;li.data:eq(1)&&Text;li.data:eq(2)&&Text;li.data:eq(3)&&Text","content":".content&&span&&Text","tabs":".play_source_tab","lists":".content_playlist:eq(#id) a"},
    搜索:'.container&&ul&&li;h4&&title;.lazyload&&data-original;.pic_text&&Text;a&&href',
}