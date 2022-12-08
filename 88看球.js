var rule = {
    title:'88看球',
    host:'http://www.88kanqiu.cc',
    url:'/match/fyclass/live',
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_parse:'.nav-pills li;a&&Text;a&&href;/match/(\\d+)/live',
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:'.list-group .group-game-item;.d-none&&Text;img&&src;.btn&&Text;a&&href',
    二级:{title:'.game-info-container&&Text;.customer-navbar-nav li&&Text',img:'img&&src',desc:';;;div.team-name:eq(0)&&Text;div.team-name:eq(1)&&Text',content:'div.game-time&&Text',tabs:'',tab_text:'',lists:'.btn-group a',list_text:'a&&Text',list_url:'a&&href'},
    搜索:'',
}
