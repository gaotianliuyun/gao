var rule = {
    title:'l0l',
    host:'https://www.l0l.tv',
    url: '/index.php/vod/show/id/fyclass/page/fypage.html',
    class_parse:'.ecnav-nav .main-nav;a&&Text;a&&href;.*/(.*?).html',
    searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
	headers: {//网站的请求头,完整支持所有的,常带ua和cookies
	    'User-Agent': 'PC_UA',
	},
    lazy:'',
    limit:6,
    推荐: '*',
    一级: '.vodlist&&.pack-ykpack;a&&title;.eclazy&&data-original;.pack-prb&&Text;a&&href',
	二级: {
	    "title": "h2.title&&Text;.play-tag.cor3 span--div:eq(3)&&Text",
	    "img": ".poster&&style",
	    "desc": ".remarks&&Text;;;.info-wrap--span:eq(1)&&Text;.info-wrap--span:eq(0)&&Text",
	    "content": ".info-wrap.cor3--span&&Text",
	    "tabs": ".swiper-wrapper.cf a",
	    "lists": "#playsx:eq(#id)&&li"
	},
    搜索:'.ec-search li;*;*;*;*',
}