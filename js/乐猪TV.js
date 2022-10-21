var rule = {
    title:'乐猪TV',
    host:'http://www.lezhutv.com',
    // homeUrl:'/',
    url:'/type/fyclass-fypage.html',
    searchUrl:'/search-pg-fypage-wd-**.html',
    searchable:2,
    quickSearch:0,
    headers:{
        'User-Agent':'UC_UA'
    },
    timeout:5000,
    class_parse:'div.nav a;a&&Text;a&&href;/(\\d.+).html',
    play_parse:true,
    lazy:'',
    limit:5,
    推荐:'ul.tbox_m2;li;*;*;*;*',
    double:true, // 推荐内容是否双层定位
    一级:'ul.tbox_m2 li;a&&title;a&&data-original;span&&Text;a&&href',
    二级:{"title":".data h4&&Text","img":".item-lazy&&data-original","desc":".cr3.starLink&&Text","content":".tbox_js&&Text","tabs":"js:pdfa=jsp.pdfa;TABS=pdfa(html,'.tbox_t h3').map(function(it,idex){return '线路'+(idex+1)})","lists":"ul.list_block:eq(#id) li"},
    搜索:'ul.tbox_m li;*;*;*;*',
	
}
