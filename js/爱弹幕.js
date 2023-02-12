var rule = {
    title: '爱弹幕',
	模板:'短视2',
    host: 'https://anime.girigirilove.com',
    homeUrl:'/vodshow/2-----------/',//网站的首页链接,可以是完整路径或者相对路径,用于分类获取和推荐获取 fyclass是分类标签 fypage是页数
    detailUrl:'/voddetail/fyid/',
    class_name:'',
    class_url:'',
    class_parse:'.swiper-wrapper:eq(1) li;a&&Text;a&&href;.*/(\\d+)',
    图片来源:'@Referer=https://anime.girigirilove.com/',
    推荐:'js:let body="type=2&page=1";let t=Math.round(new Date/1e3).toString();let key=md5("DS"+t+"DCC147D11943AF75");let url=HOST+"/index.php/api/vod";body=body+"&time="+t+"&key="+key;print(body);fetch_params.body=body;let html=post(url,fetch_params);let data=JSON.parse(html);VODS=data.list.map(function(it){it.vod_pic=urljoin2(input.split("/v")[0],it.vod_pic);return it});',
    一级:'js:let body=input.split("#")[1];let t=Math.round(new Date/1e3).toString();let key=md5("DS"+t+"DCC147D11943AF75");let url=input.split("#")[0];body=body+"&time="+t+"&key="+key;print(body);fetch_params.body=body;let html=post(url,fetch_params);let data=JSON.parse(html);VODS=data.list.map(function(it){it.vod_pic=urljoin2(input.split("/i")[0],it.vod_pic);return it});',
}