// 道长 drpy仓库 https://gitcode.net/qq_32394351/dr_py
// drpy安卓本地搭建说明 https://gitcode.net/qq_32394351/dr_py/-/blob/master/%E5%AE%89%E5%8D%93%E6%9C%AC%E5%9C%B0%E6%90%AD%E5%BB%BA%E8%AF%B4%E6%98%8E.md
// Pluto Player官方TG https://t.me/PlutoPlayer
// Pluto Player官方TG https://t.me/PlutoPlayerChannel

var rule = {
    title:'斗鱼直播',
    host:'https://www.douyu.com',
    homeUrl:'/japi/weblist/apinc/recLabelList?',//网站的首页链接,用于分类获取和推荐获取
	url:'/gapi/rkc/directory/mixList/fyclass/fypage',
    class_name:'一起看&网游竞技&单机热游&手游休闲&娱乐天地&科技文化&语音互动&语音直播&正能量&颜值&音乐&舞蹈&二次元&户外&美食&互动交友&趣生活&数码科技&文化&科普&社会人文&汽车&纪录片&斗鱼购物&交友&电台&一起玩&音乐之声&正能量&英雄联盟&热门游戏&DOTA2&穿越火线&CFHD&DNF&炉石传说&CS:GO&逆战&lol云顶之弈&魔兽争霸&魔兽怀旧服&网易游戏&守望先锋&DOTA&魔兽世界&天涯明月刀&三国杀&主机游戏&永劫无间&生死狙击2&迷失ARK&艾尔登法环&逃离塔科夫&V Rising&海上狼人杀&怀旧游戏&王者荣耀&和平精英&火影忍者&LOL手游&金铲铲之战&重返帝国&COD手游&哈利波特：魔法觉醒&CF手游&欢乐斗地主&原神&天刀手游&棋牌娱乐&欢乐麻将&新游中心&QQ飞车&阴阳师&热门手游',
    class_url:'2_208&1_1&1_15&1_9&1_2&1_11&1_20&1_18&1_13&2_201&2_175&2_1008&2_174&2_124&2_194&2_1555&2_1097&2_134&2_195&2_204&2_1162&2_136&2_514&2_1203&2_1221&2_1556&2_1575&2_910&2_250&2_1&2_270&2_3&2_33&2_1997&2_40&2_2&2_6&2_46&2_917&2_55&2_1055&2_3567&2_148&2_217&2_5&2_59&2_14&2_19&2_1227&2_1781&2_3528&2_3406&2_1024&2_3684&2_3556&2_26&2_181&2_350&2_196&2_1920&2_2556&2_2915&2_767&2_1192&2_178&2_416&2_1223&2_911&2_113&2_451&2_229&2_331&2_240&2_30',
    detailUrl:'/fyid',//二级详情拼接链接(json格式用)
    searchUrl:'/japi/search/api/searchShow?kw=**&page=fypage&pageSize=20',
    searchable:2,
    quickSearch:0,
    headers:{
		'User-Agent':'PC_UA'
	},
    timeout:5000,
    limit:8,
    play_parse:true,
    lazy:'',
    double:true,
	推荐:'json:data.list;room;*;cover;*;*',
	一级:'json:data.rl;rn;rs16;nn;rid',
    二级:'*',
    搜索:'json:data.relateShow;roomName;roomSrc;nickName;*',
}