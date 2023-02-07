muban.首图2.二级.tabs = '.stui-pannel__head.bottom-line.active.clearfix h3';
var rule = Object.assign(muban.首图2,{
title:'皮皮泡',
host:'https://www.pipipao.com',
url:'/vodshow/id/fyclass/page/fypage.html',
searchUrl:'/vodsearch**/page/fypage.html',
class_name:'电视剧&电影&综艺&动漫&纪录片',//静态分类名称拼接
class_url:'dianshiju&dianying&zongyi&dongman&jilupian',//静态分类标识拼接
class_parse:' ',
搜索:'ul.stui-vodlist__media&&li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
});