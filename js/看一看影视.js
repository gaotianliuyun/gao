// 搜索验证
var rule = {
    title:'看一看影视',
    host:'https://www.kanyk.cc',
    // homeUrl:'/',
    // url:'/index.php?m=vod-list-id-fyclass-pg-fypage-order--by--class--year--letter--area--lang-.html',
    url:'/index.php?m=vod-list-id-fyfilter-pg-fypage-order--by--class--year--letter--area--lang-.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}',
	filter: {"1":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"1"},{"n":"动作片","v":"5"},{"n":"喜剧片","v":"6"},{"n":"爱情片","v":"7"},{"n":"科幻片","v":"8"},{"n":"恐怖片","v":"9"},{"n":"剧情片","v":"10"},{"n":"战争片","v":"11"},{"n":"纪录片","v":"16"},{"n":"微电影","v":"18"},{"n":"惊悚片","v":"20"},{"n":"悬疑片","v":"21"}]}],"2":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"2"},{"n":"国产剧","v":"12"},{"n":"港台剧","v":"13"},{"n":"日韩剧","v":"14"},{"n":"欧美剧","v":"15"},{"n":"泰剧","v":"19"},{"n":"海外剧","v":"32"}]}],"4":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"4"},{"n":"TV版","v":"23"},{"n":"电影版","v":"24"},{"n":"剧场版","v":"25"},{"n":"国语经典","v":"36"}]}],"3":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"3"},{"n":"TV综艺","v":"26"},{"n":"音乐MV","v":"31"}]}]},
	filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'},
		16:{cateId:'16'},
		12:{cateId:'12'},
		13:{cateId:'13'},
		14:{cateId:'14'},
		15:{cateId:'15'},
		19:{cateId:'19'}
	},
    searchUrl:'/index.php?m=vod-search-pg-fypage-wd-**.html',
    searchable:2,//是否启用全局搜索,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_name:'电影&电视剧&综艺&动漫&纪录片&国产剧&港台剧&日韩剧&欧美剧&泰剧',
    class_url:'1&2&3&4&16&12&13&14&15&19',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.index-area.clearfix;ul&&li;a&&title;img&&data-original;.other&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.index-area.clearfix&&ul&&li;a&&title;img&&data-original;.other&&Text;a&&href',
    二级:{"title":".ek.title&&a:eq(2)&&Text;.module-info-tag-link:eq(2)&&Text","img":".ek.ct-l&&img&&data-original","desc":".module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-2)&&Text;.ek.ct-c&&dl&&dt:eq(1)&&Text;.ek.ct-c&&dl&&dt:eq(3)&&Text","content":".ek.ct-c&&.ek.ee&&Text","tabs":".ek.playfrom&&li","lists":".ek.playlist:eq(#id)&&.ek.videourl li"},
    搜索:'.index-area.clearfix&&ul&&li;*;*;*;*',
}
