// 发布页 http://www.8kvod.com/
// 一级筛选 数字验证
muban.首图.二级.title = 'h1&&Text;.data--span:eq(0)&&Text';
muban.首图.二级.desc = '.score&&Text;;;.data:eq(1)--span&&Text;.data:eq(2)--span&&Text';
muban.首图.二级.content = '.data:eq(3)--span&&Text';
var rule={
    title:'8K影视',
    模板:'首图',
    host:'http://www.8kvod.com',
    // host:'http://www.xn--45q.top',
    homeUrl:'/index.php',
    url:'/t/fyclass-fypage/',
    // class_name:'电影&电视剧&动漫&综艺',
    // class_url:'1&2&3&4',
    class_parse: '.myui-header__menu&&li.col-md-2;a&&Text;a&&href;/(\\d+)',
    searchUrl:'/vse**/page/fypage/',
    lazy:'js:var url=jsp.pdfh(request(input),"iframe&&src");if(/hulihuli/.test(url)){input=url.replace(".m3u8","")}else if(/.m3u8|.mp4/.test(url)){input=url.match(/.*?=(.*?)&next/)[1]}else{input=url}',
    推荐: 'ul.myui-vodlist.clearfix;li.col-lg-8;a&&title;a&&data-original;.pic-text&&Text;a&&href',
}