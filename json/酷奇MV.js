var rule = {
    title:'酷奇MV',
    host:'https://www.kuqimv.com',
    homeUrl:'/play/',
    url:'/play/fyclass_fypage.html',
    searchUrl:'/search.php?key=**',
    searchable:2,
    quickSearch:0,
    class_parse:'.m_bor li;a&&Text;a&&href;/play/(\\d+)_1.html',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:'.mv_list li;.name&&Text;.pic img&&src;.singer&&Text;a&&href',
    二级:'*',
    搜索:'.play_xg li;*;*;*;*',
}
