var rule = {
    title:'JRS看比赛',
    host:'https://m.jrskbs.com',
    url:'/fyclass',
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_name:'全部',
    class_url:'/',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:'.contentList a;.contentBody&&Text;.contentLeft img&&src;.contentCenter p:eq(1)&&Text;a&&href',
    二级:{title:'.vs-wrap&&Text;.vs-wrap&&Text',img:'.vs img&&src',desc:';;;.vs:eq(0)&&Text;.vs:eq(2)&&Text',content:'.time1&&Text',tabs:'',tab_text:'',lists:'.liveshow a',list_text:'a&&Text',list_url:'a&&data-url'},
    搜索:'',
}
