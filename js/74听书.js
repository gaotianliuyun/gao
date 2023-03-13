var rule = {
    title: '74听书',
    host: 'https://www.ting74.com',
    // homeUrl:'/sort/xuanhuan.html',
    url:'/sort/fyclass/fypage.html',
    searchUrl: '/search.html#searchtype=novelname&searchword=**&page=fypage;post',
    searchable: 0,
    quickSearch: 0,
    filterable:0,
    headers:{'User-Agent':'PC_UA'},
    timeout:5000,//网站的全局请求超时,默认是3000毫秒
    class_parse: '.nav-ol&&li:gt(0):lt(8);a&&Text;a&&href;/(\\w+).html',
    play_parse:true,
    // lazy:"js:var url=jsp.pdfh(request(input),'iframe&&src');var purl=request('http://www.ting74.com'+url).match(/mp3:'(.*?)'/)[1];input={jx:0,url:purl,parse:0}",
    limit:6,
    推荐:'#myTab_Content0&&.tab-li;.tab-book-title&&Text;*;.tab-book-author&&Text;*',
    一级:'.list-works&&li;.list-book-dt&&a&&Text;.lazy&&data-original;.book-author--aria:eq(2)&&Text;a&&href',
    二级:{
        "title":".book-cover&&alt;.book-info&&dd--span:eq(1)&&Text",
        "img":".book-cover&&src",
        "desc":".book-info&&dd:eq(4)&&Text;;;.book-info&&dd:eq(3)&&Text;.book-info&&dd:eq(2)&&Text",
        "content":".book-des&&Text",
        "tabs":".playlist-top&&h2",
        "lists":"#playlist:eq(#id)&&li"
    },
    搜索:'*',
}