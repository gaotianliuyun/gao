var rule={
		title:'扛把子影院',
		//host:'https://www.2023kan.com',
		host:'https://www.90yc.com',
		hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});HOST = jsp.pdfh(html,"ul&&li&&a&&href")',
		url:'/type/fyclass/fypage.html',
 		searchUrl:'/s/**/fypage.html',
		searchable:0,//是否启用全局搜索,
		quickSearch:0,//是否启用快速搜索,
		filterable:0,//是否启用分类筛选,
		class_parse:'#sj-nav-1&&ul&&li;a&&Text;a&&href;.*/(.*?).html',
	    cate_exclude:'福利',
		play_parse:true,
		lazy:'',
		limit:6,
		推荐:'.main&&ul&&li;a&&title;img&&src;i&&Text;a&&href',
		double:true, // 推荐内容是否双层定位
		一级:'.main&&ul&&li;a&&title;img&&src;i&&Text;a&&href',
		二级:{
			"title":"h1&&a:eq(2)&&Text;.ct-c&&dl&&dd:eq(1)--span&&Text",
			"img":".lazy img&&src",
			"desc":"ct-c&&dl&&dt:eq(1)--span&&Text;.ct-c&&dl&&dd:eq(2)--span&&Text;.ct-c&&dl&&dd:eq(0)--span&&Text;;",
			"content":".ct-c&&.ee&&Text",
			"tabs":"#stab1&&.playfrom li",
			"lists":".videourl:eq(#id) li"
		},
		搜索:'.main&&ul&&li;a&&title;img&&src;i&&Text;a&&href',
}
