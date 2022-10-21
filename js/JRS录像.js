var rule = {
    title:'JRS录像',
    host:'http://m.jrskqw.net',
    url:'http://m.jrskqw.net/video/fyclass/',
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_name:'篮球&足球',
    class_url:'nba&zq',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    play_json:1,
    // lazy:'js:input={parse:1,jx:1,url:input}',
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:'.videotape a;.list p:eq(-1)&&Text;img&&src;.list p:eq(2)&&Text;a&&href',
    二级:{title:'.box&&Text',img:'img:eq(1)&&src',desc:';;;.teamOne&&Text;.teamTwo&&Text',content:'.score&&Text',tabs:'',tab_text:'',lists:'#checked-jjlx a',list_text:'p&&Text',list_url:'a&&href'},
    搜索:'',
}
