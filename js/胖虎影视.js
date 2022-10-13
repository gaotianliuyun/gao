var rule = Object.assign(muban.mxpro,{
title:'胖虎影视.',
host:'http://panghuys.com',
url:'/vodshow/fyclass/page/fypage.html',
searchUrl:'/search-**----------fypage---/',
class_parse:'.navbar-items li:gt(1):lt(7);a&&Text;a&&href;/(\\d+).html',
});
