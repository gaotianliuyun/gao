muban.mxpro.二级.desc = ';;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text'
var rule = {
	title:'豆芽影院',
	模板:'mxpro',
	host:'https://www.imdy.tv',
	class_parse:'.navbar-items&&li;a&&Text;a&&href;.*/(.*?).html',
	cate_exclude: '追剧周表|今日更新|热搜',
}
