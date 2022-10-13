var rule = Object.assign(muban.mxpro,{
title:'瓜皮TV',
host:'https://guapitv.xyz',
class_parse:'.navbar-items li:gt(1):lt(8);a&&Text;a&&href;.*-(.*?).html',
});