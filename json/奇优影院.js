muban.首图2.二级.title = '.stui-content__detail&&h1&&Text;.stui-content__detail&&p:eq(0)&&Text';
muban.首图2.二级.tabs = '.stui-pannel__head a';
muban.首图2.二级.lists = '.stui-content__playlist:eq(#id) li';
muban.首图2.二级.desc = '.stui-content__detail&&p:eq(1)&&Text;.stui-content__detail&&p:eq(2)&&Text;.stui-content__detail&&p:eq(3)&&Text';
muban.首图2.二级.content = '.stui-pannel_bd:eq(1)&&Text';
var rule = Object.assign(muban.首图2,{
    title:'奇优影院',
    host:'http://1e6e.com',
    // host:'https://www.gdjilong.com/',
    url:'/list/fyclass_fypage.html',
    searchUrl:'/search.php;**',
    搜索:'js:let url=input.split(";")[0];let d=[];let body={searchword:input.split(";")[1]};body="searchword="+input.split(";")[1];fetch_params.body=body;let html=post(url,fetch_params);let pdfa=jsp.pdfa;let pdfh=jsp.pdfh;let pd=jsp.pd;let lists=pdfa(html,"ul.stui-vodlist__media&&li");lists.forEach(function(it){d.push({title:pdfh(it,".title&&Text"),url:pd(it,"a&&href"),desc:pdfh(html,".pic-text&&Text"),pic_url:pd(html,".lazyload&&data-original")})});setResult(d);',
//搜索:'li.stui-vodlist__item;a&&title;a&&data-original;.pic-text&&Text;a&&href'
});