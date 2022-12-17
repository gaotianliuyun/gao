muban.首图.二级.desc = ';;;.data:eq(2)&&Text;.data:eq(3)&&Text';
var rule = {
	title:'539影院',
	模板:'首图',
	host:'https://539539.xyz',
	url:'/vodtype/fyclass/page/fypage.html',
	searchUrl:'/vodsearch.html?wd=**&submit=',
	class_parse:'.myui-header__menu li.visible-inline-lg:lt(6);a&&Text;a&&href;/vodtype/(\\d).html',
}