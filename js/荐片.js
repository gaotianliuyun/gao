// 道长 drpy仓库 https://gitcode.net/qq_32394351/dr_py
// drpy安卓本地搭建说明 https://gitcode.net/qq_32394351/dr_py/-/blob/master/%E5%AE%89%E5%8D%93%E6%9C%AC%E5%9C%B0%E6%90%AD%E5%BB%BA%E8%AF%B4%E6%98%8E.md
// Pluto Player官方TG https://t.me/PlutoPlayer
// Pluto Player官方TG https://t.me/PlutoPlayerChannel

var rule = {
    title:'荐片',
    host:'http://api2.rinhome.com',
    homeUrl:'',//网站的首页链接,用于分类获取和推荐获取
	url:'/api/crumb/list?area=0&sort=hot&category_id=fyclass&page=fypage&type=0&limit=24&year=0',
    class_name:'全部&电影&电视剧&动漫&综艺',
    class_url:'0&1&2&3&4',
    detailUrl:'/api/node/detail?channel=wandoujia&token=&id=fyid',//二级详情拼接链接(json格式用)
    searchUrl:'/api/video/search?key=**&page=fypage',
    searchable:2,
    quickSearch:0,
    headers:{
		'User-Agent':'jianpian-android/350',
		'JPAUTH':'y261ow7kF2dtzlxh1GS9EB8nbTxNmaK/QQIAjctlKiEv'
	},
    timeout:5000,
    limit:8,
    play_parse:true,
    play_json:[{
      re:'*',
      json:{
          parse:0,
          jx:0
      }
    }],
    lazy:'',
    double:true,
	推荐:'json:data;room;*;cover;*;*',
	一级:'json:data;title;path;playlist.title;id',
    二级:{
    title:'data.title',
    desc:';data.description;data.id',
    img:'data.thumbnail',
    content:'data.thumbnail',
    is_json:1,
    tabs:'js:TABS=[];if(html.data.have_ftp_ur == 1){TABS.push("边下边播超清版")}if(html.data.have_m3u8_ur == 1){TABS.push("在线点播普清版")}',
    lists:'js:log(TABS);LISTS=[];TABS.forEach(function(tab){if(/边下边播/.test(tab)){let ftp=html.data.new_ftp_list;let d=ftp.map(function(it){return it.title+"$"+(/m3u8/.test(it.url)?play_url+it.url:"tvbox-xg:"+it.url)});LISTS.push(d)}else if(/在线点播/.test(tab)){let m3u=html.data.new_m3u8_list;let d=m3u.map(function(it){return it.title+"$"+(/m3u8/.test(it.url)?play_url+it.url:"tvbox-xg:"+it.url)});LISTS.push(d)}});',
    },
    搜索:'json:data;*;thumbnail;mask;*',
}