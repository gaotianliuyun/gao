var rule = Object.assign(muban.mxpro,{
title:'鸭奈飞',
host:'https://yanetflix.com',
url:'/vodshow/fyclass--------fypage---.html',
class_parse:'.navbar-items li:gt(1):lt(6);a&&Text;a&&href;.*/(.*?).html',
});