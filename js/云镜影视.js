muban.短视2.二级.img = '.detail-pic&&img&&data-original';
var rule = {
    title: '云镜影视',
    模板:'短视2',
    host: 'https://v.t-ui.cn',
    homeUrl:'/map.html',
    // url: '/index.php/api/vod#type=fyclass&page=fypage',
    url: '/index.php/api/vod#type=fyfilter&page=fypage',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.cateId}}',
    filter: {
        "20":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"20"},{"n":"动作片","v":"21"},{"n":"喜剧片","v":"22"},{"n":"爱情片","v":"23"},{"n":"科幻片","v":"24"},{"n":"恐怖片","v":"25"},{"n":"剧情片","v":"26"},{"n":"战争片","v":"27"},{"n":"惊悚片","v":"28"},{"n":"犯罪片","v":"29"},{"n":"冒险篇","v":"30"},{"n":"动画片","v":"31"},{"n":"悬疑片","v":"32"},{"n":"武侠片","v":"33"},{"n":"奇幻片","v":"34"},{"n":"纪录片","v":"35"},{"n":"其他片","v":"36"}]}],
        "37":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"37"},{"n":"国产剧","v":"38"},{"n":"港台剧","v":"39"},{"n":"欧美剧","v":"40"},{"n":"日韩剧","v":"41"},{"n":"其他剧","v":"42"}]}],
        "43":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"43"},{"n":"国产动漫","v":"52"},{"n":"日本动漫","v":"53"},{"n":"欧美动漫","v":"54"}]}]
    },
    filter_def:{
        20:{cateId:'20'},
        37:{cateId:'37'},
        45:{cateId:'45'},
        43:{cateId:'43'}
    },
    class_parse:'.swiper-wrapper&&li;a&&Text;a&&href;.*/(\\d+).html',
    class_name:'',
    class_url:'',
    detailUrl:'/index.php/vod/detail/id/fyid.html',
    推荐:'.border-box .public-list-box;a&&title;.lazy&&data-original;.public-list-prb&&Text;a&&href',
    double: false, // 推荐内容是否双层定位
    一级:'js:let body=input.split("#")[1];let t=Math.round(new Date/1e3).toString();let key=md5("DS"+t+"DCC147D11943AF75");let url=input.split("#")[0];body=body+"&time="+t+"&key="+key;print(body);fetch_params.body=body;let html=post(url,fetch_params);let data=JSON.parse(html);VODS=data.list.map(function(it){it.vod_pic=it.vod_pic.replace("mac:","https:");return it});',
}