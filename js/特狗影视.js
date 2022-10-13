var rule = Object.assign(muban.首图,{
title:'特狗',
host:'https://www.tegouys.com',
url:'/vodshow/id/fyclass/page/fypage.html',
searchUrl:'/search/-------------.html?wd=*&submit=',
//class_name:'电视剧&电影&综艺&动漫',//静态分类名称拼接
//class_url:'2&1&3&4',//静态分类标识拼接
class_parse:'.myui-header__menu li.hidden-sm:gt(0):lt(5);a&&Text;a&&href;/(\\d+).html',

});
