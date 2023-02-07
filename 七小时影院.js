muban.首图.二级.重定向='js:let url = jsp.pd(html,".myui-content__operate&&a&&href");log("重定向到:"+url);html = request(url)';
muban.首图.二级.tabs='.myui-screens__list&&ul&&li';
muban.首图.二级.lists='.myui-content__list:eq(#id)&&li';

var rule = Object.assign(muban.首图,{
title:'七小时影院',
host:'https://www.qxsyy.com',
url:'/type/fyclass-fypage.html',
searchUrl:'/search/**----------fypage---.html',
class_parse:'.myui-header__menu&&li:gt(0):lt(6);a&&Text;a&&href;.*/(.*?).html',
搜索:'#searchList li;.myui-vodlist__thumb&&title;.lazyload&&data-original;;a&&href;.text-muted:eq(-1)&&Text',
});
