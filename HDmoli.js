muban.首图.二级.tabs = '.nav.nav-tabs.active&&li';
muban.首图.二级.lists='.myui-content__list.sort-list.clearfix:eq(#id)&&li';

var rule = Object.assign(muban.首图,{
title:'HDmoli',
host:'https://www.hdmoli.com',
url:'/mlist/fyclass-fypage.html',
searchUrl:'/search/-------------.html?wd=*&submit=',
class_name:'电影&剧集&动漫',//静态分类名称拼接
class_url:'index1&index2&index41',//静态分类标识拼接
class_parse:'',
一级:'.myui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
});
