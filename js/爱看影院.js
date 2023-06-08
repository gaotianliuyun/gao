// 一级筛选 数字验证
// 搜索验证
muban.海螺3.二级.title = '.hl-dc-title&&Text;.hl-data-xs&&Text';
muban.海螺3.二级.desc = '.hl-col-xs-12:eq(2)&&Text;;;.hl-col-xs-12--em:eq(3)&&Text;.hl-col-xs-12--em:eq(4)&&Text';
var rule={
    title:'爱看影院',
    模板:'海螺3',
    host:'https://www.ikyy.tv',
    url:'/v_type/fyclass-fypage.html',
    class_parse: '.hl-menus&&a;a&&Text;a&&href;.*/(\\d+).html',
    lazy:"js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);var url=html.url;if(html.encrypt=='1'){url=unescape(url)}else if(html.encrypt=='2'){url=unescape(base64Decode(url))}if(/m3u8|mp4/.test(url)){input=url}else{input}",

    // searchUrl:'/v_search/**----------fypage---.html',
    searchUrl:'/index.php/ajax/suggest?mid=fypage&wd=**',
    detailUrl:'/v_detail/fyid.html', //非必填,二级详情拼接链接
    搜索:'json:list;name;pic;;id',
}