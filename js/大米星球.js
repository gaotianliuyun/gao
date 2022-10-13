muban.mxpro.二级.img = '.lazyload&&src';
var rule = Object.assign(muban.mxpro,{
title:'大米星球',
host:'https://www.dmxq.fun',
url:'/vodshow/fyclass--------fypage---/pjax/YES.html',
searchUrl:'/vodsearch/**----------fypage---/pjax/NO.html',
class_parse:'li.swiper-slide.navbar-item;span&&Text;a&&href;/(\\d+).html',
 一级:'a.module-poster-item.module-item;a&&title;.lazyload&&src;.module-item-note&&Text;a&&href',
 推荐:'.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&src;.module-item-note&&Text;a&&href',
});