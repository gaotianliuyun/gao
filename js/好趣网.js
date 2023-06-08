var rule = {
	title:'好趣网',
	编码:'GBK',//不填就默认utf-8
	搜索编码:'GBK',//不填则不编码，默认都是按utf-8.可优先于全局编码属性.比如网页源码编码是gbk,这里可以指定utf-8搜索独立编码。多数情况这个属性不填或者填写gbk应对特殊的网站搜索
	host:'http://tv.haoqu99.com',
	url: '/fyclass',
	searchUrl: '/e/sch/index.php?page=fypage&keyboard=**&sear=1',
	searchable:2,//是否启用全局搜索,
	quickSearch:0,//是否启用快速搜索,
	headers:{
		'User-Agent': 'MOBILE_UA'
	},
	timeout:5000,//网站的全局请求超时,默认是3000毫秒
	class_name:'央视&卫视频道&港澳台频道&国外电视台&广东&湖南&江苏&安徽&浙江&北京&辽宁&江西&山东&黑龙江&上海&云南&四川&河南&湖北&福建&重庆&河北&吉林&广西&山西&陕西&宁夏&海南&甘肃&新疆&内蒙古&天津&贵州&青海&西藏',
	class_url:'1&2&4&5&3/guangdong&3/hunan&3/jiangsu&3/anhui&3/zhejiang&3/beijing&3/liaoning&3/jiangxi&3/shandong&3/heilongjiang&3/shanghai&3/yunnan&3/sichuan&3/henan&3/hubei&3/fujian&3/zhongqing&3/hebei&3/jilin&3/guangxi&3/shan-xi&3/shanxi&3/ningxia&3/hainan&3/gansu&3/xinjiang&3/neimenggu&3/tianjin&3/guizhou&3/qinghai&3/xizang',
	play_parse:true,
	lazy:'js:input=input.replace("tv", "m")',
	limit:6,
	推荐: '.p-list-sya&&li;.s&&Text;img&&src;;a&&href',
	一级: '.bx-sya&&li;span&&Text;img&&src;;a&&href',
	二级: '*',
	搜索: 'div.list-box.J-medal&&li;a&&Text;;;a&&href',
}