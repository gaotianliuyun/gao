var rule = Object.assign(muban.mxpro,{
title:'莫扎兔',
host:'https://www.mozhatu.com',
url:'/index.php/vod/show/id/fyclass/page/fypage.html',
searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
class_parse:'.navbar-items li:gt(2):lt(8);a&&Text;a&&href;.*/(.*?).html',
});