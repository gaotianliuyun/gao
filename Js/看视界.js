var rule = Object.assign(muban.mxpro,{
title:'看视界',
host:'https://www.1080kan.cc',
url:'/show/fyclass--------fypage---.html',
searchUrl:'/search/**----------fypage---.html',
searchable:2,
class_parse:'.navbar-items li:gt(1):lt(6);a&&Text;a&&href;.*/(.*?).html',
});