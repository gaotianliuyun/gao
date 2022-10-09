var  rule={
    title:'凌云影视',
    host:'https://www.lingyun.in',
    // searchUrl:'/v_search/**----------fypage---.html',
    url:'/channel/fyclass-fypage.html',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_parse:'.over-auto li;a&&Text;a&&href;.*/(.*?).html',
    cate_exclude:'解析',
    limit:40,
    play_parse:true,
    lazy:'',
    推荐:'ul.pic-list.pic-list-nth;li;a&&title;img&&data-src;.s1&&Text;a&&href',
    double:true,
    一级:'ul.pic-list.clearfix&&li;a&&title;img&&data-src;.s1&&Text;a&&href',
    二级:{"title":".content-rt&&h1&&Text;.content-rt&&p:eq(0)&&Text","img":".img&&img&&data-src","desc":".content-rt&&p:eq(2)&&Text;.content-rt&&p:eq(3)&&Text","content":".movie-introduce&&.sqjj_a&&Text","tabs":".py-tabs&&option","lists":"ul.player:eq(#id)&&li"},
    // 搜索:'.hl-list-item;a&&title;a&&data-original;.remarks&&Text;a&&href',
    searchable:0,//是否启用全局搜索,
};