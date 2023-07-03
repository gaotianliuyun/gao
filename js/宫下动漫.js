var rule = {
    title: '宫下动漫',
    模板:'短视2',
    host: 'https://arlnigdm.com',
    homeUrl:'/label/rank.html',
	url: '/index.php/api/vod#type=fyclass&page=fypage',
    class_name:'TV动画&剧场版',
    class_url:'1&21',
    detailUrl:'/bangumi/fyid.html',
    lazy:"js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);var url=html.url;if(html.encrypt=='1'){url=unescape(url)}else if(html.encrypt=='2'){url=unescape(base64Decode(url))}if(/m3u8|mp4/.test(url)){input=url}else{input}",
    推荐:'.vod-rank-vod;a&&title;.lazy&&data-original;.vod-rank-state&&Text;a&&href',
    double: false, // 推荐内容是否双层定位
}