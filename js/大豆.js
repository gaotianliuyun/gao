muban.短视2.二级.img = '.detail-pic&&img&&data-original';
var rule = {
    title: '大豆',
    模板:'短视2',
    host: 'https://dadou.pro',
    homeUrl:'/map.html',
	url: '/index.php/api/vod#type=fyclass&page=fypage',
	class_parse:'.swiper-wrapper&&li;a&&Text;a&&href;.*/(\\d+).html',
	class_name:'',
    class_url:'',
    detailUrl:'/Vod/fyid.html',
    推荐:'.border-box .public-list-box;a&&title;.lazy&&data-original;.public-list-prb&&Text;a&&href',
    double: false, // 推荐内容是否双层定位
}