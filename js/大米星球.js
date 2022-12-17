muban.mxpro.二级.desc = ';;;.module-info-item-content:eq(2)&&Text;.module-info-item-content:eq(0)&&Text';
muban.mxpro.二级.img = '.lazyload&&src';
var rule = {
	title:'大米星球',
	模板:'mxpro',
	host:'https://www.dmxq.fun',
	url:'/vodshow/fyclass--------fypage---/pjax/YES.html',
	searchUrl:'/vodsearch/**----------fypage---/pjax/NO.html',
	class_parse:'li.swiper-slide.navbar-item;span&&Text;a&&href;/(\\d+).html',
 	一级:'a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
 	推荐:'.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
}
