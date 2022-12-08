
var rule={
		title:'9U电影',
		host:'https://www.9udy.com',
		url:'/index.php/vod/show/id/fyclass/page/fypage.html',
 		searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
		searchable:2,//是否启用全局搜索,
		quickSearch:0,//是否启用快速搜索,
		filterable:0,//是否启用分类筛选,
		//class_parse:'.nav-menu-items&&li;a&&Text;a&&href;.*/(.*?).html',
	        //cate_exclude:'演员',
	        class_name:'电影&电视剧&综艺&动漫&纪录片&国产剧&港台剧&日韩剧&欧美剧&其他',
                class_url:'1&2&3&4&28&13&14&15&16&24&30',
		play_parse:true,
		lazy:'',
		limit:6,
		推荐:'.module-list;.module-items&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
		double:true, // 推荐内容是否双层定位
		一级:'.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
		二级:{"title":"h1&&Text;.tag-link&&Text","img":".module-item-pic&&img&&data-src","desc":".video-info-items:eq(-2)&&Text;.video-info-items:eq(-1)&&Text;.video-info-items:eq(-2)&&Text;.video-info-items:eq(1)&&.video-info-item&&Text;.video-info-items:eq(-2)&&.video-info-item&&Text","content":".zkjj_a&&Text","tabs":".module-tab-item","lists":".module-player-list:eq(#id)&&.scroll-content&&a"},
		搜索:'.module-items .module-search-item;h3&&Text;*;.video-serial&&Text;*',
}
