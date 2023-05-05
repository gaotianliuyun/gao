// 一级筛选 数字验证
muban.首图.二级.title = 'h1&&Text;.data--span:eq(0)&&Text';
muban.首图.二级.desc = '.score&&Text;;;.data:eq(1)--span&&Text;.data:eq(2)--span&&Text';
muban.首图.二级.content = '.data:eq(3)--span&&Text';
var rule={
    title:'8K影视',
    模板:'首图',
    host:'http://www.8kvod.com',
    url:'/t/fyclass-fypage/',
    class_parse: '.myui-header__menu&&li.col-md-2;a&&Text;a&&href;/(\\d+)',
    searchUrl:'/vse**/page/fypage/',
    推荐: 'ul.myui-vodlist.clearfix;li.col-lg-8;a&&title;a&&data-original;.pic-text&&Text;a&&href',
}