var rule = {
    title:'酷奇MV',
    host:'https://www.kuqimv.com',
    homeUrl:'/play/',
    url:'/play/fyclass_fypage.html',
    searchUrl:'/search.php?key=**&pages=fypage',
    searchable:2,
    quickSearch:0,
    class_parse:'.main:eq(1)&&li;a&&Text;a&&href;.*/(\\d+)_1.html',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:'js:var d=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);let list=pdfa(html,".mv_list&&li");list.forEach((it)=>{d.push({title:pdfh(it,".name&&Text"),desc:"🎤"+pdfh(it,".singer&&Text")+"｜"+pdfh(it,".time&&Text"),pic_url:pd(it,"img&&src"),url:pd(it,"a&&href"),})});setResult(d);',
    二级:'*',
    搜索:'.video_list&&li;a&&title;;.singer&&Text;a&&href;.t_03:eq(1)&&Text',
}
