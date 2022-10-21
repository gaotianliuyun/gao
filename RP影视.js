
var rule={
    title:'RP影视',
    host:'https://mac.rp123.top',
    url:'/vodshow/fyclass--------fypage---/',
    searchUrl:'/vodsearch/**----------fypage---/',
    searchable:2,
    quickSearch:0,
    filterable:0,
    headers:{'User-Agent':'MOBILE_UA',},
    class_name:'电影&电视剧&综艺&动漫&纪录片&4K专区',
    class_url:'1&2&3&4&35&40',
 play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'body a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    二级:{"title":"h1&&Text;.module-info-tag&&Text","img":".lazyload&&data-original","desc":".module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text","content":".module-info-introduction&&Text","tabs":".module-tab-item.tab-item","lists":".module-play-list:eq(#id) a"},
    搜索:'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
}