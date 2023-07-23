muban.首图2.二级.tabs = '.stui-pannel__head h3';
var rule = Object.assign(muban.首图2,{
    title:'人人影视',
    host:'https://www.rttks.com',
    url:'/rrtop/fyclass/page/fypage.html',
    searchUrl:'/rrcz.html?wd=**',
    class_parse:'.stui-header__menu li;a&&Text;a&&href;.*/(.*?).html',
    // cate_exclude:'解说',
    play_parse:true,
    lazy:'',
});
