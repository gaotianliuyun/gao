muban.mxone5.二级.desc = '.video-info-items:eq(6)&&Text;;;.video-info-actor:eq(1)&&Text;.video-info-actor:eq(0)&&Text';
var rule={
    title:'子子影视',
    模板:'mxone5',
    host:'https://www.ziziys.com',
    // url:'/list/fyclass/page/fypage.html',
    url:'/list/fyfilter/page/fypage.html',
    filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}',
	filter: {"1":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"1"},{"n":"动漫片","v":"23"},{"n":"恐怖片","v":"24"},{"n":"历史传记片","v":"25"},{"n":"战争片","v":"26"},{"n":"情色片","v":"27"},{"n":"武侠古装","v":"28"},{"n":"记录片","v":"29"},{"n":"灾难片","v":"30"},{"n":"音乐歌舞","v":"31"},{"n":"运动片","v":"32"},{"n":"科幻片","v":"33"},{"n":"动作片","v":"6"},{"n":"剧情片","v":"7"},{"n":"喜剧","v":"8"},{"n":"爱情片","v":"9"},{"n":"惊悚片","v":"10"},{"n":"奇幻片","v":"11"},{"n":"悬疑片","v":"12"}]}],"2":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"2"},{"n":"国产剧","v":"13"},{"n":"欧美剧","v":"14"},{"n":"日韩剧","v":"15"},{"n":"泰剧","v":"16"}]}],"3":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"3"},{"n":"国漫","v":"20"},{"n":"日漫","v":"21"},{"n":"欧美动漫","v":"22"}]}]},
	filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'}
	},
    class_name:'电影&电视剧&动漫',
    class_url:'1&2&3',
    class_parse:'',
    // searchUrl:'/vsearch/**--fypage.html',
    searchUrl:'/index.php/ajax/suggest?mid=1&wd=**',
    detailUrl:'/vdetail/fyid.html', //非必填,二级详情拼接链接
    搜索:'json:list;name;pic;;id',
}
