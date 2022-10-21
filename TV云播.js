muban.首图.二级.tabs = '.myui-panel__head.bottom-line h3';
var rule = Object.assign(muban.首图,{
title:'TV云播',
host:'http://www.tvyb03.com',
url:'/vod/type/id/fyclass/page/fypage.html',
class_parse:'.item.nav-list.clearfix li:gt(0):lt(5);a&&Text;a&&href;/(\\d+).html',
推荐:'.myui-panel_bd.clearfix;.myui-vodlist.clearfix&&li;a&&title;a&&data-original;.background-color&&Text;a&&href',
 一级:'.myui-vodlist li;a&&title;a&&data-original;.pic-tag-top&&Text;a&&href',
});