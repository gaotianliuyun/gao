// 搜索 数字验证
// 一级 数字验证
muban.短视2.二级.img = '.detail-pic&&img&&data-original';
var rule = {
    title: '爱看',
    模板:'短视2',
    host:'https://aikanys.vip',
    hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,"li:eq(2)&&a&&href");print(src);HOST=src',
    homeUrl:'/map/',
	// url: '/index.php/api/vod#type=fyclass&page=fypage',
    url: '/vodtype/fyclass/page/fypage/',
    detailUrl:'/voddetail/fyid/',
    searchUrl: '/vodsearch/**----------fypage---/',
    class_name:'动漫&电影&国产剧&美剧&日韩剧&港台剧',
    class_url:'4&1&2&16&15&14',
    pagecount:{"4":1,"1":1,"2":1,"16":1,"15":1,"14":1},
    推荐:'*',
    一级:'.border-box&&.public-list-box;a&&title;.lazy&&data-original;.public-list-prb&&Text;a&&href',
    double: false, // 推荐内容是否双层定位
    搜索:'.row-right&&.search-box;.thumb-txt&&Text;.lazy&&data-original;.public-list-prb&&Text;a&&href',
}