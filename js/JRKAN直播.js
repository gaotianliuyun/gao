// 道长 drpy仓库 https://gitcode.net/qq_32394351/dr_py
// 道长 drpy安卓本地搭建说明 https://gitcode.net/qq_32394351/dr_py/-/blob/master/%E5%AE%89%E5%8D%93%E6%9C%AC%E5%9C%B0%E6%90%AD%E5%BB%BA%E8%AF%B4%E6%98%8E.md
// 道长 drpy写源 模板规则说明 https://gitcode.net/supertlo/dr_py#%E6%A8%A1%E6%9D%BF%E8%A7%84%E5%88%99%E8%AF%B4%E6%98%8E
// 道长 drpy写源 套模模版 https://gitcode.net/qq_32394351/dr_py/-/raw/master/js/%E6%A8%A1%E6%9D%BF.js
// 道长 drpy写源 影片教程 http://101.34.67.237:5244/%E6%95%99%E8%82%B2/drpy
// 道长 drpy写源 影片教程(m3u8切片) https://freedrpy.run.goorm.io/txt/jc/playlist.m3u8
// 海阔下载 https://haikuo.lanzoui.com/u/GoldRiver
// Pluto Player官方TG https://t.me/PlutoPlayer
// Pluto Player官方TG https://t.me/PlutoPlayerChannel


var rule = {
    title:'JRKAN直播',
    host:'http://m.jrkan2023.com/',
	// JRKAN备用域名:m.jrskan8.com / m.jrkan666.com / jryyds.com / jrsbxj.com
	// JRKAN网址发布:qiumi1314.com
    url:'/fyclass',
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_name:'全部',
    class_url:'/',
    //class_url:'?live',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    // 一级播放线路x3 可自行切换
    //一级:'.loc_match .d-touch;li&&Text;img&&src;.lab_time&&Text;a:eq(0)&&href',//play.sportsteam365.com
    一级:'.loc_match:eq(2) ul;li:gt(1):lt(4)&&Text;img&&src;li:lt(2)&&Text;a:eq(1)&&href',//play.sportsteam333.com
    //一级:'.loc_match .d-touch;li&&Text;img&&src;.lab_time&&Text;a:eq(2)&&href',//play.sportsteam666.com
    二级:{title:'.sub_list li:lt(2)&&Text;.sub_list li:eq(0)&&Text',img:'img&&src',desc:';;;.lab_team_home&&Text;.lab_team_away&&Text',content:'.sub_list ul&&Text',tabs:'',tab_text:'',lists:'.sub_channel a',list_text:'a&&Text',list_url:'a&&data-play'},
    搜索:'',
}