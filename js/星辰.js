muban.首图2.二级.tabs = '.stui-pannel__head h3';
var rule = Object.assign(muban.首图2,{
title:'星辰',
host:'http://www.40yb.com',
url:'/fyclass/indexfypage.html[/fyclass/index.html]',
searchUrl:'/search.php?page=fypage&searchword=**&searchtype=',
class_parse:'.stui-header__menu li:gt(0):lt(7);a&&Text;a&&href;.*/(.*?)/.*html',
});