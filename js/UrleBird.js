// 道长 drpy仓库 https://gitcode.net/qq_32394351/dr_py
// 道长 drpy安卓本地搭建说明 https://gitcode.net/qq_32394351/dr_py/-/blob/master/%E5%AE%89%E5%8D%93%E6%9C%AC%E5%9C%B0%E6%90%AD%E5%BB%BA%E8%AF%B4%E6%98%8E.md
// 道长 drpy写源 模板规则说明 https://gitcode.net/qq_32394351/dr_py#%E6%A8%A1%E6%9D%BF%E8%A7%84%E5%88%99%E8%AF%B4%E6%98%8E
// 道长 drpy写源 套模模版 https://gitcode.net/qq_32394351/dr_py/-/raw/master/js/%E6%A8%A1%E6%9D%BF.js
// 道长 drpy写源 相关视频教程 https://www.youtube.com/watch?v=AK7cN-fcwm4
// 道长 drpy写源 写源教学视频 https://t.me/fongmi_offical/54080/63553
// 海阔下载 https://haikuo.lanzoui.com/u/GoldRiver
// 影视TV 官方TG Drpy群 https://t.me/fongmi_offical/63689
// 影视TV 官方TG 下载 https://t.me/fongmi_release


var rule = {
    title:'UrleBird',
    host:'https://urlebird.com',
    homeUrl:'/trending/',
    url:'fyclass/page/fypage/[fyclass/]',
    searchUrl:'/search/?q=**',//Search @user or #hash
    searchable:2,
    quickSearch:0,
    class_name:'更新&人气&热搜',
    class_url:'videos&videos/popular&trending',
    headers:{
        'User-Agent':'PC_UA'
    },
    play_parse:true,
    lazy:'js:let html=request(input);let rurl=html.match(/video src="(.*?)"/)[1];input={parse:0,url:rurl};',
    limit:10,
    推荐:'*',
    一级:"js:var d=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var list=pdfa(request(input),'body&&.thumb');list.forEach(function(it){let img=pd(it,'.img img&&data-src');if(!/jpg|jpeg|webp/.test(img)){img=pd(it,'.img img&&src')};d.push({desc:pdfh(it,'.author-name&&Text'),title:'♥'+pdfh(it,'.stats div:eq(2)&&Text')+' '+pdfh(it,'.info3--div&&Text'),pic_url:img,url:pd(it,'a:eq(-1)&&href')})});setResult(d);",
    二级:'*',
    搜索:'*',
}
