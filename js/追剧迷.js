var rule = Object.assign(muban.vfed,{
title:'追剧迷',
host:'https://www.zhuijumi.cc',
url:'/videotype//fyclass--------fypage---.html',
searchUrl:'/vodsearch/**-fypage.html',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'ul.fed-list-info.fed-part-rows;li;a.fed-list-title&&Text;a&&data-original;.fed-list-remarks&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.fed-list-info&&li;a.fed-list-title&&Text;a&&data-original;.fed-list-remarks&&Text;a&&href',
    二级:{"title":"h1&&Text;.fed-mute&&Text","img":".fed-list-info&&a&&data-original","desc":".fed-deta-content&&.fed-part-rows&&li:eq(-1)&&Text;.fed-deta-content&&.fed-part-rows&&li:eq(-2)&&Text;.fed-deta-content&&.fed-part-rows&&li:eq(-3)&&Text;.fed-deta-content&&.fed-part-rows&&li:eq(0)&&Text;.fed-deta-content&&.fed-part-rows&&li:eq(1)&&Text","content":".fed-conv-text&&Text","tabs":".fed-tabs-foot&&.fed-part-rows li","lists":".fed-deta-playlist&&.fed-tabs-btm:eq(#id) li"},
    搜索:'.fed-list-deta;h1&&Text;.fed-lazy&&data-original;.fed-list-remarks&&Text;a&&href;.fed-deta-content&&Text',
});
