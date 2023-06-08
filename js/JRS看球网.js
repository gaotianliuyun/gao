var rule = {
    title:'JRS看球网',
    host:'http://www.jrskanqiu.com',
    url:'/fyclass',
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_name:'全部',
    class_url:'/',
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:'.todayMatch .contenTab;.myList div:gt(0)&&Text;img&&src;.status&&Text;a&&href',
    二级:{title:'.msg ul&&Text;.msg ul&&Text',img:'img:eq(2)&&src',desc:';;;.nameOne&&Text;.nameTwo&&Text',content:'._t&&Text',tabs:'.checkChannel li:eq(0)',tab_text:'p&&Text',lists:'.checkChannel li:gt(0)',list_text:'a&&Text',list_url:'a&&data-url'},
    搜索:'',
}
