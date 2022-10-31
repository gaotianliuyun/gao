
var rule = Object.assign(muban.mxpro,{
title:'豆芽影院',
host:'https://www.imdy.tv',
class_parse:'.navbar-items&&li;a&&Text;a&&href;.*/(.*?).html',
cate_exclude: '追剧周表|今日更新|热搜',
});
