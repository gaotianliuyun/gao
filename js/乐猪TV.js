var rule = {
    title:'乐猪TV',
    host:'http://www.lezhutv.com',
    // homeUrl:'/',
    url:'/type/fyclass-fypage.html',
    // searchUrl:'/search-pg-fypage-wd-**.html',
    searchUrl:'/index.php?m=vod-search#wd=**&search=;post',
    searchable:2,
    quickSearch:0,
    headers:{
        // 'User-Agent':'UC_UA'
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_parse:'div.nav a;a&&Text;a&&href;/(\\d.+).html',
    play_parse:true,
    lazy:'',
    limit:5,
    推荐:'.tbox2;*;*;*;*;*',
    double:true, // 推荐内容是否双层定位
    一级:'ul.tbox_m2 li;a&&title;a&&data-original;span&&Text;a&&href',
    二级:{"title":".data h4--i&&Text;.yac&&Text","img":".item-lazy&&data-original","desc":";;;.act&&Text;.dir&&Text","content":".tbox_js&&Text","tabs":"js:pdfa=jsp.pdfa;TABS=pdfa(html,'.tbox_t h3').map(function(it,idex){return '线路'+(idex+1)})","lists":"ul.list_block:eq(#id) li","tabs":".tbox_t h3"},
    搜索:'ul.tbox_m li;*;*;*;*',
	
}
