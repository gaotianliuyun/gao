muban.首图2.二级.tabs = '.stui-pannel__head h3';
muban.首图2.二级.content = '.stui-content__desc&&Text';
var rule = Object.assign(muban.首图2,{
    title:'牛马TV',
    host:'https://www.niumatv.cc',
    url:'/type/fyclass-fypage.html',
    searchUrl:'/vodsearch**/page/fypage.html',
    class_parse:'.stui-header__menu&&li;a&&Text;a&&href;.*/(.*?).html',
});