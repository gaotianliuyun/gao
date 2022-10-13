muban.海螺2.二级.content = '.play-m-box&&Text';
muban.海螺2.二级.desc = '.play-news&&Text';
muban.海螺2.二级.img = '';
var rule = Object.assign(muban.海螺2,{
    title:'l0l',
    host:'https://www.l0l.tv',
    class_parse:'.index-tag&&li;a&&.title&&Text;a&&href;.*/(.*?).html',
    searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
    搜索:'.searchlilst&&li;a&&title;.lazy&&data-original;.list-remarks&&Text;a&&href',
});