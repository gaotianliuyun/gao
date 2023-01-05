muban.mxpro.二级.desc = ';;;.module-info-item:eq(2) .module-info-item-content&&Text;.module-info-item:eq(1) .module-info-item-content&&Text';
var rule = {
    title:'新安影院',
    host:'https://www.xinan.tv',
    模板:'mxpro',
    url:'/fl/id/fyclass/page/fypage.html',
    searchUrl:'/ss/page/fypage/wd/**.html',
    class_parse: '.navbar-items li:gt(1):lt(7);a&&Text;a&&href;/(\\d+).html',
}