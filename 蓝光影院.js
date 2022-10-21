var rule = Object.assign(muban.mxpro,{
title:'蓝光影院',
host:'https://lgyy.cc',
url:'/vodshow/fyclass--------fypage---.html',
searchUrl:'/vodsearch/**-------------.html',
class_parse:'.navbar-items li:gt(1):lt(6);a&&Text;a&&href;.*/(.*?).html',
});