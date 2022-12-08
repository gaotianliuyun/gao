var rule = Object.assign(muban.mxpro,{
title:'1080P',
host:'https://1080p.tv',
url:'/vodshow/fyclass--------fypage---/',
searchUrl:'/vodsearch/**----------fypage---/',
class_parse:'.navbar-items li:gt(0):lt(5);a&&Text;a&&href;.*/(.*?)/',
});
