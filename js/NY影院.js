muban.短视2.二级.title = '.slide-info-title&&Text;.hl-ma0&&Text';
muban.短视2.二级.img = '.detail-pic&&img&&data-src';
muban.短视2.二级.desc = '.fraction&&Text;;;.slide-info:eq(3)--strong&&Text;.slide-info:eq(2)--strong&&Text';
var rule={
    title:'NY影院',
    模板:'短视2',
    host:'https://www.nycvod.com',
    homeUrl:'/index.php/label/rb.html',
    url: '/index.php/api/vod#type=fyfilter&page=fypage',
    detailUrl:'/voddetail/fyid.html',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.cateId}}',
    filter:{
        "1":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"1"},{"n":"动作片","v":"9"},{"n":"喜剧片","v":"10"},{"n":"奇幻片","v":"11"},{"n":"科幻片","v":"12"},{"n":"恐怖片","v":"22"},{"n":"惊悚片","v":"27"},{"n":"悬疑片","v":"23"},{"n":"爱情片","v":"21"},{"n":"战争片","v":"20"},{"n":"剧情片","v":"6"},{"n":"网络电影","v":"24"},{"n":"犯罪片","v":"26"},{"n":"伦理片","v":"8"},{"n":"灾难片","v":"7"},{"n":"动画电影","v":"25"},{"n":"冒险片","v":"28"},{"n":"同性片","v":"44"},{"n":"纪录片","v":"29"},{"n":"歌舞片","v":"45"},{"n":"经典片","v":"46"}]}],
        "2":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"2"},{"n":"国产剧","v":"30"},{"n":"欧美剧","v":"47"},{"n":"日韩剧","v":"18"},{"n":"港台剧","v":"16"},{"n":"新马泰剧","v":"14"},{"n":"其他剧","v":"13"}]}],
        "3":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"3"},{"n":"国产综艺","v":"31"},{"n":"日韩综艺","v":"32"},{"n":"欧美综艺","v":"34"},{"n":"港台综艺","v":"35"},{"n":"其他综艺","v":"37"}]}],
        "4":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"4"},{"n":"日韩动漫","v":"38"},{"n":"国产动漫","v":"39"},{"n":"欧美动漫","v":"40"},{"n":"港台动漫","v":"42"},{"n":"其他动漫","v":"43"}]}]
    },
    filter_def:{
        1:{cateId:'1'},
        2:{cateId:'2'},
        3:{cateId:'3'},
        4:{cateId:'4'},
        5:{cateId:'5'}
    },
    // class_name:'电影&电视剧&综艺&动漫&竞技体育',
    // class_url:'1&2&3&4&5',
    class_parse:'.swiper-wrapper&&li.swiper-slide;a--em&&Text;a&&href;/(\\d+).html',
	class_name:'',
    class_url:'',
    play_parse:true,
    lazy:`js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        }
        if (/m3u8|mp4/.test(url)) {
            input = url
        } else {
            input
        }
    `,
    推荐:'.list-vod .public-list-box;a&&title;.lazy&&data-src;.public-list-prb&&Text;a&&href',
    double: false, // 推荐内容是否双层定位
    一级:`js:
        let body = input.split("#")[1];
        let t = Math.round(new Date / 1e3).toString();
        let key = md5("DS" + t + "DCC147D11943AF75");
        let url = input.split("#")[0];
        body = body + "&time=" + t + "&key=" + key;
        print(body);
        fetch_params.body = body;
        let html = post(url, fetch_params);
        let data = JSON.parse(html);
        VODS = data.list.map(function(it) {
            it.vod_pic = urljoin2(input.split("/i")[0], it.vod_pic);
            return it
        });
    `,

}