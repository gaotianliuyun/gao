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
    title:'酷酷韩剧',
    host:'http://www.kan-tv.com',
    url:'/hanju/?p=fypage',
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_name:'最新韩剧',
    class_url:'/',
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:'.resource-main .shadow;h1&&Text;img&&src;.resource-abstract:eq(1)&&Text;a&&href',
    二级:{title:'h1&&Text;.article-detail-content&&Text',img:'img&&src',desc:'',content:'.article-detail-content&&Text',tabs:'.article-category-title',lists:'.article-category-list:eq(#id) a'},
    搜索:'',
}
