//已知问题:
// 相较于其他壳,pluto player 无法正常嗅探的"分类"或"影片"较多
// 推荐页面: pluto正常, 其他壳异常
// 无法搜索

var rule = {
    title:'短视频',
    host:'http://www.sharenice.net',
    url:'/fyclass?page=fypage',
    //searchUrl:'/video/search?search_key=**',
    searchable:0,
    quickSearch:0,
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    class_name:'抖音&快手&微视&火山&场库&体育&美拍&秒拍&全民&梨&好兔&美女&正能量&搞笑&社会&游戏&娱乐&旅游&萌系&生活&音乐&美食&明星&动漫&影视&时尚',
    class_url:'douyin&kuaishou&weishi&huoshan&changku&tags/t-5L2T6IKy.html&meipai&miaopai&quanmin&lishipin&haotu&tags/t-576O5aWz.html&tags/t-5q2j6IO96YeP.html&tags/t-5pCe56yR.html&tags/t-56S+5Lya.html&tags/t-5ri45oiP.html&tags/t-5aix5LmQ.html&tags/t-5peF5ri4.html&tags/t-6JCM57O7.html&tags/t-55Sf5rS7.html&tags/t-6Z+z5LmQ.html&tags/t-576O6aOf.html&tags/t-5piO5pif.html&tags/t-5Yqo5ryr.html&tags/t-5b2x6KeG.html&tags/t-5pe25bCa.html',
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:'.item-box&&ul&&li;a&&title;img&&data-original;;a&&href',
    二级:'*',
}