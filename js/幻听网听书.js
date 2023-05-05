muban.首图2.二级.title = 'h1--span&&title;.data--span:eq(0)&&Text';
muban.首图2.二级.desc = '.data--span:eq(3)&&Text;;;.data--span:eq(1)&&Text;.data--span:eq(2)&&Text';
muban.首图2.二级.content = '.detail-content&&Text';
muban.首图2.二级.tabs = '.stui-pannel__head.bottom-line&&h3';
var rule = {
    title:'幻听网听书',
    模板:'首图2',
    host:'http://www.ting38.com',
    url:'/ting/fyclass-fypage.html',
    searchUrl:'/search.php?page=fypage&searchword=**&searchtype=',
    class_parse: '.stui-header__menu li:gt(0);a&&Text;a&&href;.*/(.*?).html',
    cate_exclude:'导航',
    搜索:'.stui-vodlist__media:eq(0) li;a&&title;.lazyload&&data-original;p:eq(0)&&Text;a&&href;.pic-text&&Text',
}