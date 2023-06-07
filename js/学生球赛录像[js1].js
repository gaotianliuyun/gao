var rule = {
    title:'学生球赛录像',
    编码:'gb18030',
    host:'http://www.xsm2b.com',
    url:'/fyclass/fypage.html',
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_name:'录像&足球视频&篮球视频&综合视频',
    class_url:'matchvideo&footballvideo&basketballvideo&othervideo',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    //推荐:'*',
    一级:'js:pdfa=jsp.pdfa;pdfa=jsp.pdfa;pd=jsp.pd;let d=[];log(input);let html=request(input);let list=pdfa(html,".text_list li");let burl=input.match(/(.*)\\/.*?.html/)[1];log(burl);MY_URL=burl;print(list);list.forEach(function(it){let title=pdfh(it,"a&&Text");d.push({title:title,desc:pdfh(it,".date&&Text"),url:pd(it,"a&&href")+"@@"+title})});setResult(d);',
    // 一级:'.text_list li;a&&Text;;.date&&Text;a&&href',
    二级:'*',
    搜索:'',
}