muban.mxpro.二级.desc = ';;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text';
muban.mxpro.二级.tabs = '#y-playList .module-tab-item';
var rule = {
    title:'莫扎兔',
    模板:'mxpro',
	host:'https://www.mozhatu.com',
	url:'/index.php/vod/show/id/fyclass/page/fypage.html',
	searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
	class_parse:'.navbar-items li:gt(2):lt(8);a&&Text;a&&href;.*/(.*?).html',
}