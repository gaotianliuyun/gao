muban.首图2.二级.content = '.stui-content__desc&&Text';
muban.首图2.二级.title = '.stui-content__detail&&h3&&Text;.stui-content__detail&&p:eq(1)&&Text;';
muban.首图2.二级.重定向='js:let url = jsp.pd(html,".playbtn&&a&&href");log("重定向到:"+url);html = request(url)';
muban.首图2.二级.tabs='.t-ul&&li';
muban.首图2.二级.lists='.stui-content__playlist:eq(#id)&&li';

var rule = Object.assign(muban.首图2,{
title:'小强迷',
host:'http://xqmi.top',
url:'/index.php/vod/show/id/fyclass/page/fypage.html',
searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
});