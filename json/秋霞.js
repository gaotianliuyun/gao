muban.首图2.二级.tabs = '.stui-pannel__head.bottom-line.active.clearfix h3';
muban.首图2.二级.content = '.stui-content__desc&&Text';
var rule = Object.assign(muban.首图2,{
title:'秋霞',
host:'https://www.7xiady.cc',
url:'/type/fyclass-fypage/',
class_parse:'.stui-header__menu li;a&&Text;a&&href;/type/(.*?)/',
searchUrl:'/search/**----------fypage---.html',
搜索:'ul.stui-vodlist&&li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
图片来源:'@Referer=https://www.7xiady.cc/',
});