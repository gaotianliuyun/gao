// 网址发布页 https://ddys.site
var rule={
    title:'ddys',
    // host:'https://ddys.tv',
    // host:'https://ddys.art', // 推荐使用，尚未被污染，对国内线路优化
    host:'https://ddys.pro', // 推荐使用，尚未被污染
    // homeUrl:'/',
    url:'/fyclass/page/fypage/',
    searchUrl:'/?s=**&post_type=post',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    // class_name:'电影&剧集&动画',
    // class_url:'movie&airing&anime',
    // class_parse:'#primary-menu li.menu-item;a&&Text;a&&href;\.tv/(.*)',
    class_parse:'#primary-menu li.menu-item;a&&Text;a&&href;\.pro/(.*)',
    cate_exclude:'站长|^其他$|关于|^电影$|^剧集$|^类型$',
    play_parse:true,
    lazy:'js:let purl=input.split("|")[0];let referer=input.split("|")[1];let zm=input.split("|")[2];print("purl:"+purl);print("referer:"+referer);print("zm:"+zm);let myua="okhttp/3.15";if(/ddrkey/.test(purl)){let ret=request(purl,{Referer:referer,withHeaders:true,"User-Agent":myua});log(ret);input=purl}else{let html=request(purl,{headers:{Referer:referer,"User-Agent":myua}});print(html);try{input=JSON.parse(html).url||{}}catch(e){input=purl}}',
    limit:6,
    //推荐:'.indexShowBox;ul&&li;a&&title;img&&data-src;.s1&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.post-box-list&&article;a:eq(-1)&&Text;.post-box-image&&style;a:eq(0)&&Text;a:eq(-1)&&href',
    二级:{"title":".post-title&&Text;.cat-links&&Text","img":".doulist-item&&img&&data-cfsrc","desc":".published&&Text","content":".abstract&&Text","tabs":"js:TABS=['国内','海外(貌似不能播放)']",
        // lists:'js:log(TABS);let d=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;if(typeof play_url==="undefined"){var play_url=""}function getLists(html){let src=pdfh(html,".wp-playlist-script&&Html");src=JSON.parse(src).tracks;let list1=[];let list2=[];src.forEach(function(it){let src0=it.src0;let src1=it.src1;let src2=it.src2;let title=it.caption;let url1="https://ddys.tv/getvddr/video?id="+src1+"&dim=1080P+&type=mix";let url2="https://w.ddys.tv"+src0+"?ddrkey="+src2;let zm="https://ddys.tv/subddr/"+it.subsrc;list1.push({title:title,url:url1,desc:zm});list2.push({title:title,url:url2,desc:zm})});return{list1:list1,list2:list2}}var data=getLists(html);var list1=data.list1;var list2=data.list2;let nums=pdfa(html,"body&&.post-page-numbers");nums.forEach(function(it){let num=pdfh(it,"body&&Text");log(num);let nurl=input+num+"/";if(num==1){return}log(nurl);let html=request(nurl);let data=getLists(html);list1=list1.concat(data.list1);list2=list2.concat(data.list2)});list1=list1.map(function(item){return item.title+"$"+play_url+urlencode(item.url+"|"+input+"|"+item.desc)});list2=list2.map(function(item){return item.title+"$"+play_url+urlencode(item.url+"|"+input+"|"+item.desc)});LISTS=[list1,list2];',
        lists:'js:log(TABS);let d=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;if(typeof play_url==="undefined"){var play_url=""}function getLists(html){let src=pdfh(html,".wp-playlist-script&&Html");src=JSON.parse(src).tracks;let list1=[];let list2=[];src.forEach(function(it){let src0=it.src0;let src1=it.src1;let src2=it.src2;let title=it.caption;let url1="https://ddys.pro/getvddr/video?id="+src1+"&dim=1080P+&type=mix";let url2="https://w.ddys.pro"+src0+"?ddrkey="+src2;let zm="https://ddys.pro/subddr/"+it.subsrc;list1.push({title:title,url:url1,desc:zm});list2.push({title:title,url:url2,desc:zm})});return{list1:list1,list2:list2}}var data=getLists(html);var list1=data.list1;var list2=data.list2;let nums=pdfa(html,"body&&.post-page-numbers");nums.forEach(function(it){let num=pdfh(it,"body&&Text");log(num);let nurl=input+num+"/";if(num==1){return}log(nurl);let html=request(nurl);let data=getLists(html);list1=list1.concat(data.list1);list2=list2.concat(data.list2)});list1=list1.map(function(item){return item.title+"$"+play_url+urlencode(item.url+"|"+input+"|"+item.desc)});list2=list2.map(function(item){return item.title+"$"+play_url+urlencode(item.url+"|"+input+"|"+item.desc)});LISTS=[list1,list2];',
    },
    搜索:'#main&&article;.post-title&&Text;;.published&&Text;a&&href',
    推荐:'*'
}