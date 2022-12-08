var rule = Object.assign(muban.mxpro,{
title:'电影大师',
host:'https://dyds8.cyou',
url:'/index.php/vod/type/id/fyclass/page/fypage.html',
searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
class_parse:'.dropdown.type.clearfix li:gt(2):lt(6);a&&Text;a&&href;.*/(.*?).html',
});