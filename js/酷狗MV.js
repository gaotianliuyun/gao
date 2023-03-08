var rule = {
    title:'酷狗MV',
    host:'https://www.kugou.com',
    homeUrl:'/mvweb/html/',
    url:'/mvweb/html/index_fyclass_fypage.html',
    searchUrl:'https://api.linhun.vip/api/kgmv?apiKey=e7e165ab27316db14467c07e00f3820d&name=**&n=',
    searchable:2,
    quickSearch:0,
    class_parse:'#radioList&&dd;a&&Text;a&&href;.*/index_(\\d+)_1.html',
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'js:if(/mp4/.test(input)){input}else{var mv_name=request(input).match(/mv_name = "(.*?)"/)[1];input=JSON.parse(request("https://api.linhun.vip/api/kgmv?apiKey=e7e165ab27316db14467c07e00f3820d&name="+mv_name+"&n=1")).video}',
    limit:6,
    推荐:'*',
    一级:'.mvlist li;a&&title;img&&_src;;a&&href',
    二级:'*',
    搜索:'js:let d=[];let html=request(input);let list=JSON.parse(html).sun;for(let j=1;j<=list;j++){let t=JSON.parse(request(MY_URL+j));d.push({title:t.name,desc:t.author,img:t.img,url:t.video})}setResult(d)',
}