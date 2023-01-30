var rule = {
    title: '时光影视',
    host: 'http://www.shigys.com',
    class_name:'电影&电视剧&综艺&动漫&哔哩哔哩&独家',
    class_url:'1&2&3&4&40&41',
    homeUrl: '',
    searchUrl: '/index.php/ajax/suggest?mid=1&wd=**',
    searchable: 2,
    quickSearch: 0,
    headers:{'User-Agent':'MOBILE_UA'},
    // 分类链接fypage参数支持1个()表达式
    url: '/index.php/api/vod#type=fyclass&page=fypage',
    detailUrl:'/index.php/vod/detail/id/fyid.html',
    推荐:'.list-vod.flex .public-list-box;a&&title;.lazy&&data-original;.public-list-prb&&Text;a&&href',
    一级:'',
    一级:'js:let body=input.split("#")[1];let t=Math.round(new Date/1e3).toString();let key=md5("DS"+t+"DCC147D11943AF75");let url=input.split("#")[0];body=body+"&time="+t+"&key="+key;print(body);fetch_params.body=body;let html=post(url,fetch_params);let data=JSON.parse(html);VODS=data.list;',
    二级:{
		"title":".slide-info-title&&Text;.slide-info:eq(3)--strong&&Text",
		"img":".detail-pic&&data-original",
		"desc":".fraction&&Text;.slide-info-remarks:eq(1)&&Text;.slide-info-remarks:eq(2)&&Text;.slide-info:eq(2)--strong&&Text;.slide-info:eq(1)--strong&&Text",
		"content":"#height_limit&&Text",
		"tabs":".anthology.wow.fadeInUp.animated&&.swiper-wrapper&&a",
		"tab_text":".swiper-slide&&Text",
		"lists":".anthology-list-box:eq(#id)&&.anthology-list-play&&li"
	},
    搜索:'json:list;name;pic;;id',
}