muban.海螺3.二级.desc = '.hl-text-conch&&Text';
var rule = Object.assign(muban.海螺3,{
    title:'AnFuns动漫',
    host:'https://www.anfuns.cc',
    cate_exclude: '最新|排行',
    url:'/type/fyclass-fypage.html',
    searchUrl:'/search/page/fypage/wd/**.html',
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
    'User-Agent':'MOBILE_UA',
    "Cookie": "searchneed=ok"},
});