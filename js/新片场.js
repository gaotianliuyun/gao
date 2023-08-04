var rule = {
    title:'新片场',
    host:'https://www.xinpianchang.com',
    homeUrl:'/discover/article-0-0-all-all-0-0-hot',
    // url: '/discover/article-fyclass-0-all-all-0-0-hot?page=fypage',
    url: '/discover/article-fyclass-0-fyfilter?page=fypage',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.time or "all"}}-{{fl.dpi or "all"}}-{{fl.pr or "0"}}-0-{{fl.by or "hot"}}',
    filter:{
        "0":[{"key":"by","name":"排序","value":[{"n":"最多热度","v":"hot"},{"n":"编辑精选","v":"pick"},{"n":"最新发布","v":"addtime"}]},{"key":"time","name":"时长","value":[{"n":"全部","v":"all"},{"n":"1分钟以下","v":"0T60"},{"n":"1-5分钟","v":"60T300"},{"n":"5-10分钟","v":"300T600"},{"n":"10-30分钟","v":"600T1800"}]},{"key":"pr","name":"比例","value":[{"n":"全部","v":"0"},{"n":"横屏","v":"1"},{"n":"竖屏","v":"2"}]},{"key":"dpi","name":"清晰","value":[{"n":"全部","v":"all"},{"n":"2K","v":"2k"},{"n":"4K","v":"4k"}]}],
        "1":[{"key":"by","name":"排序","value":[{"n":"最多热度","v":"hot"},{"n":"编辑精选","v":"pick"},{"n":"最新发布","v":"addtime"}]},{"key":"time","name":"时长","value":[{"n":"全部","v":"all"},{"n":"1分钟以下","v":"0T60"},{"n":"1-5分钟","v":"60T300"},{"n":"5-10分钟","v":"300T600"},{"n":"10-30分钟","v":"600T1800"}]},{"key":"pr","name":"比例","value":[{"n":"全部","v":"0"},{"n":"横屏","v":"1"},{"n":"竖屏","v":"2"}]},{"key":"dpi","name":"清晰","value":[{"n":"全部","v":"all"},{"n":"2K","v":"2k"},{"n":"4K","v":"4k"}]}],
        "31":[{"key":"by","name":"排序","value":[{"n":"最多热度","v":"hot"},{"n":"编辑精选","v":"pick"},{"n":"最新发布","v":"addtime"}]},{"key":"time","name":"时长","value":[{"n":"全部","v":"all"},{"n":"1分钟以下","v":"0T60"},{"n":"1-5分钟","v":"60T300"},{"n":"5-10分钟","v":"300T600"},{"n":"10-30分钟","v":"600T1800"}]},{"key":"pr","name":"比例","value":[{"n":"全部","v":"0"},{"n":"横屏","v":"1"},{"n":"竖屏","v":"2"}]},{"key":"dpi","name":"清晰","value":[{"n":"全部","v":"all"},{"n":"2K","v":"2k"},{"n":"4K","v":"4k"}]}],
        "16":[{"key":"by","name":"排序","value":[{"n":"最多热度","v":"hot"},{"n":"编辑精选","v":"pick"},{"n":"最新发布","v":"addtime"}]},{"key":"time","name":"时长","value":[{"n":"全部","v":"all"},{"n":"1分钟以下","v":"0T60"},{"n":"1-5分钟","v":"60T300"},{"n":"5-10分钟","v":"300T600"},{"n":"10-30分钟","v":"600T1800"}]},{"key":"pr","name":"比例","value":[{"n":"全部","v":"0"},{"n":"横屏","v":"1"},{"n":"竖屏","v":"2"}]},{"key":"dpi","name":"清晰","value":[{"n":"全部","v":"all"},{"n":"2K","v":"2k"},{"n":"4K","v":"4k"}]}],
        "76":[{"key":"by","name":"排序","value":[{"n":"最多热度","v":"hot"},{"n":"编辑精选","v":"pick"},{"n":"最新发布","v":"addtime"}]},{"key":"time","name":"时长","value":[{"n":"全部","v":"all"},{"n":"1分钟以下","v":"0T60"},{"n":"1-5分钟","v":"60T300"},{"n":"5-10分钟","v":"300T600"},{"n":"10-30分钟","v":"600T1800"}]},{"key":"pr","name":"比例","value":[{"n":"全部","v":"0"},{"n":"横屏","v":"1"},{"n":"竖屏","v":"2"}]},{"key":"dpi","name":"清晰","value":[{"n":"全部","v":"all"},{"n":"2K","v":"2k"},{"n":"4K","v":"4k"}]}],
        "61":[{"key":"by","name":"排序","value":[{"n":"最多热度","v":"hot"},{"n":"编辑精选","v":"pick"},{"n":"最新发布","v":"addtime"}]},{"key":"time","name":"时长","value":[{"n":"全部","v":"all"},{"n":"1分钟以下","v":"0T60"},{"n":"1-5分钟","v":"60T300"},{"n":"5-10分钟","v":"300T600"},{"n":"10-30分钟","v":"600T1800"}]},{"key":"pr","name":"比例","value":[{"n":"全部","v":"0"},{"n":"横屏","v":"1"},{"n":"竖屏","v":"2"}]},{"key":"dpi","name":"清晰","value":[{"n":"全部","v":"all"},{"n":"2K","v":"2k"},{"n":"4K","v":"4k"}]}],
        "141":[{"key":"by","name":"排序","value":[{"n":"最多热度","v":"hot"},{"n":"编辑精选","v":"pick"},{"n":"最新发布","v":"addtime"}]},{"key":"time","name":"时长","value":[{"n":"全部","v":"all"},{"n":"1分钟以下","v":"0T60"},{"n":"1-5分钟","v":"60T300"},{"n":"5-10分钟","v":"300T600"},{"n":"10-30分钟","v":"600T1800"}]},{"key":"pr","name":"比例","value":[{"n":"全部","v":"0"},{"n":"横屏","v":"1"},{"n":"竖屏","v":"2"}]},{"key":"dpi","name":"清晰","value":[{"n":"全部","v":"all"},{"n":"2K","v":"2k"},{"n":"4K","v":"4k"}]}],
        "81":[{"key":"by","name":"排序","value":[{"n":"最多热度","v":"hot"},{"n":"编辑精选","v":"pick"},{"n":"最新发布","v":"addtime"}]},{"key":"time","name":"时长","value":[{"n":"全部","v":"all"},{"n":"1分钟以下","v":"0T60"},{"n":"1-5分钟","v":"60T300"},{"n":"5-10分钟","v":"300T600"},{"n":"10-30分钟","v":"600T1800"}]},{"key":"pr","name":"比例","value":[{"n":"全部","v":"0"},{"n":"横屏","v":"1"},{"n":"竖屏","v":"2"}]},{"key":"dpi","name":"清晰","value":[{"n":"全部","v":"all"},{"n":"2K","v":"2k"},{"n":"4K","v":"4k"}]}],
        "142":[{"key":"by","name":"排序","value":[{"n":"最多热度","v":"hot"},{"n":"编辑精选","v":"pick"},{"n":"最新发布","v":"addtime"}]},{"key":"time","name":"时长","value":[{"n":"全部","v":"all"},{"n":"1分钟以下","v":"0T60"},{"n":"1-5分钟","v":"60T300"},{"n":"5-10分钟","v":"300T600"},{"n":"10-30分钟","v":"600T1800"}]},{"key":"pr","name":"比例","value":[{"n":"全部","v":"0"},{"n":"横屏","v":"1"},{"n":"竖屏","v":"2"}]},{"key":"dpi","name":"清晰","value":[{"n":"全部","v":"all"},{"n":"2K","v":"2k"},{"n":"4K","v":"4k"}]}],
        "143":[{"key":"by","name":"排序","value":[{"n":"最多热度","v":"hot"},{"n":"编辑精选","v":"pick"},{"n":"最新发布","v":"addtime"}]},{"key":"time","name":"时长","value":[{"n":"全部","v":"all"},{"n":"1分钟以下","v":"0T60"},{"n":"1-5分钟","v":"60T300"},{"n":"5-10分钟","v":"300T600"},{"n":"10-30分钟","v":"600T1800"}]},{"key":"pr","name":"比例","value":[{"n":"全部","v":"0"},{"n":"横屏","v":"1"},{"n":"竖屏","v":"2"}]},{"key":"dpi","name":"清晰","value":[{"n":"全部","v":"all"},{"n":"2K","v":"2k"},{"n":"4K","v":"4k"}]}],
        "144":[{"key":"by","name":"排序","value":[{"n":"最多热度","v":"hot"},{"n":"编辑精选","v":"pick"},{"n":"最新发布","v":"addtime"}]},{"key":"time","name":"时长","value":[{"n":"全部","v":"all"},{"n":"1分钟以下","v":"0T60"},{"n":"1-5分钟","v":"60T300"},{"n":"5-10分钟","v":"300T600"},{"n":"10-30分钟","v":"600T1800"}]},{"key":"pr","name":"比例","value":[{"n":"全部","v":"0"},{"n":"横屏","v":"1"},{"n":"竖屏","v":"2"}]},{"key":"dpi","name":"清晰","value":[{"n":"全部","v":"all"},{"n":"2K","v":"2k"},{"n":"4K","v":"4k"}]}],
        "129":[{"key":"by","name":"排序","value":[{"n":"最多热度","v":"hot"},{"n":"编辑精选","v":"pick"},{"n":"最新发布","v":"addtime"}]},{"key":"time","name":"时长","value":[{"n":"全部","v":"all"},{"n":"1分钟以下","v":"0T60"},{"n":"1-5分钟","v":"60T300"},{"n":"5-10分钟","v":"300T600"},{"n":"10-30分钟","v":"600T1800"}]},{"key":"pr","name":"比例","value":[{"n":"全部","v":"0"},{"n":"横屏","v":"1"},{"n":"竖屏","v":"2"}]},{"key":"dpi","name":"清晰","value":[{"n":"全部","v":"all"},{"n":"2K","v":"2k"},{"n":"4K","v":"4k"}]}],
        "145":[{"key":"by","name":"排序","value":[{"n":"最多热度","v":"hot"},{"n":"编辑精选","v":"pick"},{"n":"最新发布","v":"addtime"}]},{"key":"time","name":"时长","value":[{"n":"全部","v":"all"},{"n":"1分钟以下","v":"0T60"},{"n":"1-5分钟","v":"60T300"},{"n":"5-10分钟","v":"300T600"},{"n":"10-30分钟","v":"600T1800"}]},{"key":"pr","name":"比例","value":[{"n":"全部","v":"0"},{"n":"横屏","v":"1"},{"n":"竖屏","v":"2"}]},{"key":"dpi","name":"清晰","value":[{"n":"全部","v":"all"},{"n":"2K","v":"2k"},{"n":"4K","v":"4k"}]}],
        "29":[{"key":"by","name":"排序","value":[{"n":"最多热度","v":"hot"},{"n":"编辑精选","v":"pick"},{"n":"最新发布","v":"addtime"}]},{"key":"time","name":"时长","value":[{"n":"全部","v":"all"},{"n":"1分钟以下","v":"0T60"},{"n":"1-5分钟","v":"60T300"},{"n":"5-10分钟","v":"300T600"},{"n":"10-30分钟","v":"600T1800"}]},{"key":"pr","name":"比例","value":[{"n":"全部","v":"0"},{"n":"横屏","v":"1"},{"n":"竖屏","v":"2"}]},{"key":"dpi","name":"清晰","value":[{"n":"全部","v":"all"},{"n":"2K","v":"2k"},{"n":"4K","v":"4k"}]}],
        "49":[{"key":"by","name":"排序","value":[{"n":"最多热度","v":"hot"},{"n":"编辑精选","v":"pick"},{"n":"最新发布","v":"addtime"}]},{"key":"time","name":"时长","value":[{"n":"全部","v":"all"},{"n":"1分钟以下","v":"0T60"},{"n":"1-5分钟","v":"60T300"},{"n":"5-10分钟","v":"300T600"},{"n":"10-30分钟","v":"600T1800"}]},{"key":"pr","name":"比例","value":[{"n":"全部","v":"0"},{"n":"横屏","v":"1"},{"n":"竖屏","v":"2"}]},{"key":"dpi","name":"清晰","value":[{"n":"全部","v":"all"},{"n":"2K","v":"2k"},{"n":"4K","v":"4k"}]}],
        "69":[{"key":"by","name":"排序","value":[{"n":"最多热度","v":"hot"},{"n":"编辑精选","v":"pick"},{"n":"最新发布","v":"addtime"}]},{"key":"time","name":"时长","value":[{"n":"全部","v":"all"},{"n":"1分钟以下","v":"0T60"},{"n":"1-5分钟","v":"60T300"},{"n":"5-10分钟","v":"300T600"},{"n":"10-30分钟","v":"600T1800"}]},{"key":"pr","name":"比例","value":[{"n":"全部","v":"0"},{"n":"横屏","v":"1"},{"n":"竖屏","v":"2"}]},{"key":"dpi","name":"清晰","value":[{"n":"全部","v":"all"},{"n":"2K","v":"2k"},{"n":"4K","v":"4k"}]}],
        "27":[{"key":"by","name":"排序","value":[{"n":"最多热度","v":"hot"},{"n":"编辑精选","v":"pick"},{"n":"最新发布","v":"addtime"}]},{"key":"time","name":"时长","value":[{"n":"全部","v":"all"},{"n":"1分钟以下","v":"0T60"},{"n":"1-5分钟","v":"60T300"},{"n":"5-10分钟","v":"300T600"},{"n":"10-30分钟","v":"600T1800"}]},{"key":"pr","name":"比例","value":[{"n":"全部","v":"0"},{"n":"横屏","v":"1"},{"n":"竖屏","v":"2"}]},{"key":"dpi","name":"清晰","value":[{"n":"全部","v":"all"},{"n":"2K","v":"2k"},{"n":"4K","v":"4k"}]}],
        "146":[{"key":"by","name":"排序","value":[{"n":"最多热度","v":"hot"},{"n":"编辑精选","v":"pick"},{"n":"最新发布","v":"addtime"}]},{"key":"time","name":"时长","value":[{"n":"全部","v":"all"},{"n":"1分钟以下","v":"0T60"},{"n":"1-5分钟","v":"60T300"},{"n":"5-10分钟","v":"300T600"},{"n":"10-30分钟","v":"600T1800"}]},{"key":"pr","name":"比例","value":[{"n":"全部","v":"0"},{"n":"横屏","v":"1"},{"n":"竖屏","v":"2"}]},{"key":"dpi","name":"清晰","value":[{"n":"全部","v":"all"},{"n":"2K","v":"2k"},{"n":"4K","v":"4k"}]}]
    },
    searchUrl: '/search?kw=**',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,//网站的全局请求超时,默认是3000毫秒
    class_parse: '.flex-wrap.ml-8&&.rounded;.px-3&&Text;a&&href;.*/\\w+-(\\d+)',
    play_parse:true,
    // lazy:`js:
    //     let html=request(input);
    //     let json=JSON.parse(jsp.pdfh(html, "#__NEXT_DATA__&&Html")).props.pageProps.detail.video.content;
    //     input = json.progressive[0].https_url;
    // `,
    limit:6,
    double: true, // 推荐内容是否双层定位
    推荐: '*',
    // 一级: 'body&&.fAPlpj;img&&alt;img&&src;.px-3.text-xs&&Text;a&&href',
    一级:`js:
        var d = [];
        pdfh = jsp.pdfh;
        pdfa = jsp.pdfa;
        pd = jsp.pd;
        var html = request(input);
        var dw = pdfh(html,'head&&style:eq(2)&&Html').match(/.*(\\..*?):hover/)[1];
        let list = pdfa(html, 'body&&'+dw);
        list.forEach(it => {
            d.push({
                title: pdfh(it, "img&&alt"),
                desc: pdfh(it, ".list-remarks&&Text"),
                pic_url: pd(it, "img&&src"),
                url: pd(it, "a&&href")
            })
        });
        setResult(d)
    `,
    二级:`js:
        try {
            let json = JSON.parse(pdfh(request(input),'#__NEXT_DATA__&&Html'));
            let node = json.props.pageProps.detail;
            VOD = {
                vod_id: node.id,
                vod_name: node.title,
                vod_pic: node.cover,
                type_name: node.editor_tags.map(function(it) {
                    return it.name
                }).join("/"),
                vod_year: new Date(node.publish_time * 1000).getFullYear(),
                vod_area: node.author.userinfo.location.country.name,
                vod_director: node.author.userinfo.username,
                vod_content: node.content.replaceAll('\\n','/').strip()
            };
            let episodes = node.video.content.progressive;
            if (typeof play_url === "undefined") {
                var play_url = ""
            }
            let vod_play_url = episodes.map(function(it) {
                return it.profile + "$" + it.https_url
            }).join("#")
            VOD.vod_play_from = '道长在线';
            VOD.vod_play_url = vod_play_url
        } catch (e) {
            log("获取二级详情页发生错误:" + e.message)
        }
    `,
    搜索: '*',
}