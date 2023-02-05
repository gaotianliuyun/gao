var rule = {
    title: '大豆',
    host: 'https://dadou.pro',
    class_name:'电影&电视剧&综艺&动漫',
    class_url:'1&2&3&4',
    searchUrl: '/index.php/ajax/suggest?mid=1&wd=**',
    searchable: 2,
    quickSearch: 0,
    headers:{'User-Agent':'MOBILE_UA'},
	url: '/index.php/api/vod#type=fyfilter&page=fypage',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}',
	filter: {"1":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"1"},{"n":"动作","v":"6"},{"n":"喜剧","v":"7"},{"n":"爱情","v":"8"},{"n":"动画","v":"9"},{"n":"纪录","v":"10"},{"n":"科幻","v":"11"},{"n":"剧情","v":"30"},{"n":"悬疑","v":"31"},{"n":"惊悚","v":"32"},{"n":"恐怖","v":"33"},{"n":"犯罪","v":"34"},{"n":"谍战","v":"35"},{"n":"冒险","v":"36"},{"n":"奇幻","v":"37"},{"n":"灾难","v":"38"},{"n":"战争","v":"39"},{"n":"歌舞","v":"40"},{"n":"历史","v":"41"},{"n":"其他","v":"42"}]}],"2":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"2"},{"n":"日韩","v":"16"},{"n":"大陆","v":"13"},{"n":"欧美","v":"14"},{"n":"港台","v":"15"},{"n":"动画","v":"21"},{"n":"其他","v":"20"},{"n":"记录","v":"22"}]}],"3":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"3"},{"n":"华语","v":"23"},{"n":"日韩","v":"24"},{"n":"欧美","v":"25"},{"n":"其他","v":"26"}]}],"4":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"4"},{"n":"国漫","v":"27"},{"n":"日漫","v":"28"},{"n":"其他","v":"29"}]}]},
	filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'}
	},
    detailUrl:'/index.php/vod/detail/id/fyid.html',
    推荐:'.list-vod.flex .public-list-box;a&&title;.lazy&&data-original;.public-list-prb&&Text;a&&href',
    一级:'js:let body=input.split("#")[1];let t=Math.round(new Date/1e3).toString();let key=md5("DS"+t+"DCC147D11943AF75");let url=input.split("#")[0];body=body+"&time="+t+"&key="+key;print(body);fetch_params.body=body;let html=post(url,fetch_params);let data=JSON.parse(html);VODS=data.list.map(function(it){it.vod_pic=urljoin2(input.split("/i")[0],it.vod_pic);return it});',
    二级:{
		"title":".slide-info-title&&Text;.slide-info:eq(3)--strong&&Text",
		"img":".detail-pic&&data-original",
		"desc":".fraction&&Text;.slide-info-remarks:eq(1)&&Text;.slide-info-remarks:eq(2)&&Text;.slide-info:eq(2)--strong&&Text;.slide-info:eq(1)--strong&&Text",
		"content":"#height_limit&&Text",
		"tabs":".anthology.wow.fadeInUp.animated&&.swiper-wrapper&&a",
		"tab_text":".swiper-slide&&Text",
		"lists":".anthology-list-box:eq(#id) li"
	},
    搜索:'json:list;name;pic;;id',
}