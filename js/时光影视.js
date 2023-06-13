// 筛选页功能关闭中
var rule={
    title:'时光影视',
    host:'https://www.shigys.com',
    homeUrl:'/index.php/label/hot.html',
    url:'/index.php/vod/type/id/fyclass.html',
    searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
    searchable:2,
    quickSearch:0,
    filterable:0,
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_name:'动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&国产剧&港台剧&日韩剧&欧美剧&综艺&动漫',
    class_url:'6&7&8&9&10&11&12&13&14&15&16&3&4',
    play_parse:true,
    pagecount:{"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"3":1,"4":1},
    lazy:'',
    limit:6,
    推荐: '.module-items&&.module-item;.lazyload&&alt;*;*;*',
    一级: 'a.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    二级: {
        "title": "h1&&Text;.module-info-tag&&Text",
        "img": ".ls-is-cached&&data-original",
        "desc": ".module-info-item-content:eq(3)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text",
        "content": ".module-info-introduction-content&&Text",
        "tabs": "#y-playList&&.module-tab-item",
        "lists": ".module-play-list-content:eq(#id)&&a"
    },

    searchUrl:'/index.php/ajax/suggest?mid=fypage&wd=**',
    detailUrl:'/index.php/vod/detail/id/fyid.html', //非必填,二级详情拼接链接
    搜索:'json:list;name;pic;;id',
}