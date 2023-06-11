var rule = {
    title:'MV263',
    host:'https://www.mv263.com',
    url:'/fyclass_fypage.html',
    searchUrl:'/search.php?q=**',
    searchable:2,
    quickSearch:0,
    filterable:0,
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    class_parse: '.navbar li;a&&Text;a&&href;.*/(.*?).html',
    timeout:5000,
    play_parse:true,
    lazy:'js:let html=request(input);let src=jsp.pd(html,".edui-upload-video&&src");input={jx:0,url:src,parse:0,header:JSON.stringify({"referer":"https://www.mv263.com/"})}',
    limit:6,
    // 推荐:'.toplist&&li;*;*;p&&Text;a&&href',
    推荐:'js:var d=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);let list=pdfa(html,".toplist&&li");list.forEach((it)=>{d.push({title:pdfh(it,".b-lazy&&alt"),pic_url:pd(it,".b-lazy&&data-src"),url:pd(it,"a&&href"),})});setResult(d);',
    // 一级:'.article&&.post;.b-lazy&&alt;.b-lazy&&data-src;.post-text&&Text;a&&href',
    一级:'js:var d=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);let list=pdfa(html,".article&&.post");list.forEach((it)=>{d.push({title:pdfh(it,".b-lazy&&alt"),desc:"🔥"+pdfh(it,"span:eq(2)&&Text").replace(" views",""),pic_url:pd(it,".b-lazy&&data-src"),url:pd(it,"a&&href"),})});setResult(d);',
    二级:'*',
    搜索:'.list-search&&p;a&&Text;;body--a&&Text;a&&href',
}