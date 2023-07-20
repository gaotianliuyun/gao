var 二级=`js:
    pdfh = jsp.pdfh;pdfa = jsp.pdfa;pd = jsp.pd;
    VOD = {};
    var html = request(input);
    VOD.vod_name = pdfh(html, "h1&&Text");
    VOD.type_name = pdfh(html, ".data:eq(0)&&Text").replace("类型：", "").replace("地区：", "").replace("年份：", "");
    VOD.vod_pic = pdfh(html, "img.lazyload&&data-original");
    VOD.vod_remarks = pdfh(html, ".data:eq(3)&&Text");
    VOD.vod_actor = pdfh(html, ".data:eq(1)&&Text").replace("主演：", "");
    VOD.vod_director = pdfh(html, ".data:eq(2)&&Text").replace("导演：", "");
    VOD.vod_content = pdfh(html, "p.col-pd&&Text");
    let playFrom = [];
    let vod_tab_list = [];
    let tabs = pdfa(html, "body&&.stui-pannel_hd:not(:matches(为你)):not(:matches(剧情)):not(:matches(榜单))");
    tabs.forEach((it) => {
        playFrom.push(pdfh(it, "h3&&Text"));
    });
    for (let i = 0; i < playFrom.length; i++) {
        let p1 = ".stui-content__playlist:eq(#id)&&li".replaceAll("#id", i);
        let new_vod_list = [];
        let vodList = [];
        try {
            vodList = pdfa(html, p1);
        } catch (e) {}
        for (let i = 0; i < vodList.length; i++) {
            let it = vodList[i];
            new_vod_list.push(pdfh(it, "body&&Text").trim() + "$" + pd(it, "a&&href"));
        }
        let vlist = new_vod_list.join("#");
        vod_tab_list.push(vlist);
    }
    VOD.vod_play_from = playFrom.reverse().join("$$$");
    VOD.vod_play_url = vod_tab_list.reverse().join("$$$");
`;

// 新发布页 https://www.fabu1010.com
var rule = {
	title:'双十电影',
	模板:'首图2',
	host:'https://www.fabu1010.com',
	hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,"ul&&li&&a&&href");print(src);HOST=src',
	// url:'/show/fyclass{{fl.area}}{{fl.by}}{{fl.class}}{{fl.year}}/page/fypage/',
    url:'/show/fyclassfyfilter/page/fypage/',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.area}}{{fl.by or "/by/time"}}{{fl.class}}{{fl.year}}',
	filter: {
		"1":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"喜剧","v":"/class/喜剧"},{"n":"爱情","v":"/class/爱情"},{"n":"恐怖","v":"/class/恐怖"},{"n":"动作","v":"/class/动作"},{"n":"科幻","v":"/class/科幻"},{"n":"剧情","v":"/class/剧情"},{"n":"战争","v":"/class/战争"},{"n":"犯罪","v":"/class/犯罪"},{"n":"灾难","v":"/class/灾难"},{"n":"奇幻","v":"/class/奇幻"},{"n":"悬疑","v":"/class/悬疑"},{"n":"惊悚","v":"/class/惊悚"},{"n":"冒险","v":"/class/冒险"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"美国","v":"/area/美国"},{"n":"法国","v":"/area/法国"},{"n":"英国","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韩国","v":"/area/韩国"},{"n":"德国","v":"/area/德国"},{"n":"泰国","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2008","v":"/year/2008"},{"n":"2000","v":"/year/2000"},{"n":"1997","v":"/year/1997"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
		"2":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"国产","v":"/class/国产"},{"n":"港台","v":"/class/港台"},{"n":"日韩","v":"/class/日韩"},{"n":"欧美","v":"/class/欧美"},{"n":"海外","v":"/class/海外"},{"n":"古装","v":"/class/古装"},{"n":"战争","v":"/class/战争"},{"n":"偶像","v":"/class/偶像"},{"n":"犯罪","v":"/class/犯罪"},{"n":"奇幻","v":"/class/奇幻"},{"n":"剧情","v":"/class/剧情"},{"n":"历史","v":"/class/历史"},{"n":"网剧","v":"/class/网剧"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"韩国","v":"/area/韩国"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"日本","v":"/area/日本"},{"n":"美国","v":"/area/美国"},{"n":"泰国","v":"/area/泰国"},{"n":"英国","v":"/area/英国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2008","v":"/year/2008"},{"n":"2000","v":"/year/2000"},{"n":"1997","v":"/year/1997"},{"n":"1980","v":"/year/1980"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
		"3":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"科幻","v":"/class/科幻"},{"n":"热血","v":"/class/热血"},{"n":"推理","v":"/class/推理"},{"n":"搞笑","v":"/class/搞笑"},{"n":"冒险","v":"/class/冒险"},{"n":"萝莉","v":"/class/萝莉"},{"n":"校园","v":"/class/校园"},{"n":"动作","v":"/class/动作"},{"n":"机战","v":"/class/机战"},{"n":"运动","v":"/class/运动"},{"n":"战争","v":"/class/战争"},{"n":"少年","v":"/class/少年"},{"n":"少女","v":"/class/少女"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"日本","v":"/area/日本"},{"n":"欧美","v":"/area/欧美"},{"n":"海外","v":"/area/海外"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2008","v":"/year/2008"},{"n":"2000","v":"/year/2000"},{"n":"1997","v":"/year/1997"},{"n":"1980","v":"/year/1980"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
		"4":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"相声","v":"/class/相声"},{"n":"真人秀","v":"/class/真人秀"},{"n":"脱口秀","v":"/class/脱口秀"},{"n":"选秀","v":"/class/选秀"},{"n":"情感","v":"/class/情感"},{"n":"访谈","v":"/class/访谈"},{"n":"播报","v":"/class/播报"},{"n":"旅游","v":"/class/旅游"},{"n":"音乐","v":"/class/音乐"},{"n":"美食","v":"/class/美食"},{"n":"纪实","v":"/class/纪实"},{"n":"舞蹈","v":"/class/舞蹈"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"日本","v":"/area/日本"},{"n":"欧美","v":"/area/欧美"},{"n":"韩国","v":"/area/韩国"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2008","v":"/year/2008"},{"n":"2000","v":"/year/2000"},{"n":"1997","v":"/year/1997"},{"n":"1980","v":"/year/1980"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}]
	},
	searchUrl:'/search/page/fypage/wd/**/',
	class_parse: '.type-slide&&li;a&&Text;a&&href;.*/(.*?)/',
	lazy:'var base64decode=base64Decode;eval(unescape(base64decode("anM6CiAgICB2YXIgaHRtbCA9IEpTT04ucGFyc2UocmVxdWVzdChpbnB1dCkubWF0Y2goL3IgcGxheWVyXy4qPz0oLio/KTwvKVsxXSk7CiAgICB2YXIgdXJsID0gaHRtbC51cmw7CiAgICB2YXIgZnJvbSA9IGh0bWwuZnJvbTsKICAgIHZhciBuZXh0ID0gaHRtbC5saW5rX25leHQ7CiAgICB2YXIgaWQgPSBodG1sLmlkOwogICAgdmFyIG5pZCA9IGh0bWwubmlkOwogICAgaWYgKGh0bWwuZW5jcnlwdCA9PSAiMSIpIHsKICAgICAgICB2YXIgdXJsID0gdW5lc2NhcGUodXJsKTsKICAgIH0gZWxzZSBpZiAoaHRtbC5lbmNyeXB0ID09ICIyIikgewogICAgICAgIHZhciB1cmwgPSB1bmVzY2FwZShiYXNlNjREZWNvZGUodXJsKSk7CiAgICB9IGVsc2UgewogICAgICAgIHVybDsKICAgIH0KICAgIHZhciBwc2h0bWwgPSByZXF1ZXN0KEhPU1QgKyAiL3N0YXRpYy9wbGF5ZXIvIiArIGZyb20gKyAiLmpzIik7CiAgICB2YXIganggPSBwZGZoKHBzaHRtbCwgImlmcmFtZSYmc3JjIikuc3BsaXQoIj0iKVswXSArICI9IjsKICAgIHRyeSB7CiAgICAgICAgaWYgKC9cLm0zdTh8XC5tcDQvLnRlc3QodXJsKSkgewogICAgICAgICAgICBpbnB1dCA9IHVybAogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHZhciBqeGh0bWwgPSByZXF1ZXN0KAogICAgICAgICAgICAgICAganggKyB1cmwgKyAiJm5leHQ9IiArIG5leHQgKyAiJmlkPSIgKyBpZCArICImbmlkPSIgKyBuaWQgKyAiJmZyb209IiArIGZyb20sIHsKICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICJVc2VyLUFnZW50IjogTU9CSUxFX1VBLAogICAgICAgICAgICAgICAgICAgICAgICAiUmVmZXJlciI6IEhPU1QKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICk7CiAgICAgICAgICAgIGV2YWwoZ2V0Q3J5cHRvSlMoKSk7CiAgICAgICAgICAgIHZhciB1cmxzID0ganhodG1sLm1hdGNoKC92YXIgdXJscyA9ICIoLio/KSIvKVsxXTsKICAgICAgICAgICAgbGV0IHBVcmwgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdCgKICAgICAgICAgICAgICAgIHVybHMsCiAgICAgICAgICAgICAgICBDcnlwdG9KUy5lbmMuTGF0aW4xLnBhcnNlKCJPZjg0ZmYwY2xmMjUyY2JhIiksIHsKICAgICAgICAgICAgICAgICAgICBpdjogQ3J5cHRvSlMuZW5jLkxhdGluMS5wYXJzZSgiYzQ4N2VibDJlMzhhMGZhTyIpLAogICAgICAgICAgICAgICAgICAgIG1vZGU6IENyeXB0b0pTLm1vZGUuQ0JDLAogICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IENyeXB0b0pTLnBhZC5aZXJvUGFkZGluZywKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgKS50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7CiAgICAgICAgICAgIGlucHV0ID0ge2p4OjAsdXJsOnBVcmwscGFyc2U6MX0KICAgICAgICB9CiAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgaW5wdXQKICAgIH0=")))',
	二级:二级,
}