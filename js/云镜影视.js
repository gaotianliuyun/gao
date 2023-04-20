var rule = {
    title: '云镜影视',
    host: 'https://v.t-ui.cn',
    class_name:'电影&电视剧&综艺&动漫',
    class_url:'20&37&45&43',
    homeUrl: '',
    searchUrl: '/index.php/ajax/suggest?mid=1&wd=**',
    searchable: 2,
    quickSearch: 0,
    headers:{'User-Agent':'MOBILE_UA'},
    // 分类链接fypage参数支持1个()表达式
    // url: '/index.php/api/vod#type=fyclass&page=fypage',
	url: '/index.php/api/vod#type=fyfilter&page=fypage',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}',
	filter: {"20":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"20"},{"n":"动作片","v":"21"},{"n":"喜剧片","v":"22"},{"n":"爱情片","v":"23"},{"n":"科幻片","v":"24"},{"n":"恐怖片","v":"25"},{"n":"剧情片","v":"26"},{"n":"战争片","v":"27"},{"n":"惊悚片","v":"28"},{"n":"犯罪片","v":"29"},{"n":"冒险篇","v":"30"},{"n":"动画片","v":"31"},{"n":"悬疑片","v":"32"},{"n":"武侠片","v":"33"},{"n":"奇幻片","v":"34"},{"n":"纪录片","v":"35"},{"n":"其他片","v":"36"}]}],"37":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"37"},{"n":"国产剧","v":"38"},{"n":"港台剧","v":"39"},{"n":"欧美剧","v":"40"},{"n":"日韩剧","v":"41"},{"n":"其他剧","v":"42"}]}]},
	filter_def:{
		20:{cateId:'20'},
		37:{cateId:'37'},
		45:{cateId:'45'},
		43:{cateId:'43'}
	},
    detailUrl:'/index.php/vod/detail/id/fyid.html',
    图片来源:'@Referer=https://v.t-ui.cn/',
    推荐:'.list-vod.flex .public-list-box;a&&title;.lazy&&data-original;.public-list-prb&&Text;a&&href',
    一级:'',
    一级:'js:let body=input.split("#")[1];let t=Math.round(new Date/1e3).toString();let key=md5("DS"+t+"DCC147D11943AF75");let url=input.split("#")[0];body=body+"&time="+t+"&key="+key;print(body);fetch_params.body=body;let html=post(url,fetch_params);let data=JSON.parse(html);VODS=data.list.map(function(it){it.vod_pic=it.vod_pic.replace("mac:","https:");return it});',
    二级:{
		"title":".slide-info-title&&Text;.slide-info:eq(3)--strong&&Text",
		"img":".detail-pic&&data-original",
		"desc":".fraction&&Text;.slide-info-remarks:eq(1)&&Text;.slide-info-remarks:eq(2)&&Text;.slide-info:eq(2)--strong&&Text;.slide-info:eq(1)--strong&&Text",
		"content":"#height_limit&&Text",
		"tabs":".anthology&&.swiper-slide",
		"tab_text":".swiper-slide--i&&Text",
		"lists":".anthology-list-box:eq(#id) li"
	},
    搜索:'json:list;name;pic;;id',
}