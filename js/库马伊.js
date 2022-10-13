var rule = Object.assign(muban.首图2,{
title:'库马伊',
host:'http://www.kmy5.com',
url:'/tv/fyclass-fypage.html',
searchUrl:'/search/**----------fypage---.html',
class_parse:'.stui-header__menu li:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
搜索:'li.stui-vodlist__item;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
二级:{"title":".stui-content__detail .title&&Text;.stui-content__detail p:eq(-2)&&Text","img":".stui-content__thumb .lazyload&&data-original","desc":".stui-content__detail p:eq(0)&&Text;.stui-content__detail p:eq(1)&&Text;.stui-content__detail p:eq(2)&&Text","content":".stui-content__desc&&Text","tabs":".stui-pannel__head h3","lists":".stui-content__playlist:eq(#id) li"},
});
