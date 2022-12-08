muban.首图.二级.tabs = '.myui-panel__head.bottom-line h3';
var rule = Object.assign(muban.首图,{
title:'剧迷',
host:'https://gmtv1.xyz',
url:'/genre/fyclass---fypage.html',
searchUrl:'/search/-------------.html?wd=*&submit=',
class_name:'电视剧&电影&综艺&动漫',//静态分类名称拼接
class_url:'2&1&3&4',//静态分类标识拼接
class_parse:'',
一级:'.myui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
});
