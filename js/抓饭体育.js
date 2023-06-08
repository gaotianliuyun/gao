// 道长 drpy仓库 https://gitcode.net/qq_32394351/dr_py
// drpy安卓本地搭建说明 https://code.gitlink.org.cn/api/v1/repos/hjdhnx/dr_py/blob/master/%E5%AE%89%E5%8D%93%E6%9C%AC%E5%9C%B0%E6%90%AD%E5%BB%BA%E8%AF%B4%E6%98%8E.md
// Pluto Player官方TG https://t.me/PlutoPlayer
// Pluto Player官方TG https://t.me/PlutoPlayerChannel

var rule = {
    title:'抓饭体育',
    host:'https://www.zhuafan.tech',
    url:'/sports-home/category/fyclass',
    class_name:'全部&足球&篮球&羽乒&台球&棒球&户外&搏击&综合&棋盘&电竞&网球&排球&聊天&原声',
    class_url:'all&Football&Basketball&Badminton&Billiards&Baseball&Outdoors&Wrestling&Others&Boardgame&Popular&Tennis&Volleyball&Chat&Acoustic',
	homeUrl:'/sports-home/category/all',//网站的首页链接,用于分类获取和推荐获取
    detailUrl:'https://m.zhuafan.tech/fyid',//二级详情拼接链接(json格式用)
    searchUrl:'/live-search/search/query/data?keyword=**&page=fypage&num=&searchType=all&uid=null&from=pc',
    searchable:2,
    quickSearch:0,
    headers:{ 
        'User-Agent':'PC_UA'
    },
    limit:6,
    timeout:5000,
    play_parse:true,
    lazy:'',
    double:false,
    推荐:'*',
    一级:'json:data;cname;imageUrl;uname;id',
    二级:'*',
	搜索:'json:cObj.cList;*;*;*;_id',
}