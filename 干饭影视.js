var rule = {
    title:'干饭影视',
    host:'https://www.gfysys.com/',
    // homeUrl:'/',
    url:'/vodtype/fyclass-fypage.html',
    headers:{
        'User-Agent':'MOBILE_UA',
        "Cookie": "searchneed=ok"
    },
    searchUrl:'/vodsearch/**----------fypage---.html',
    searchable:2,
    // class_name:'电影&网剧&剧集&动漫&综艺&记录',
    // class_url:'20&1&2&3&4&23',
    class_parse:'.stui-header__menu li:gt(0):lt(5);a&&Text;a&&href;/(\\d+).html',
    play_parse:true,
    // lazy:'干饭',
    // lazy:'@js:cacheUrl = d.getParse(input);print(cacheUrl);input=cacheUrl',
    // lazy:'js:cacheUrl = d.getParse(input);print(cacheUrl);input=cacheUrl',
    // lazy:'js:cacheUrl=d.getParse(input);if(cacheUrl){input=cacheUrl}else{try{let html=fetch(input,{headers:d.headers,timeout:d.timeout,encoding:d.encoding});let ret=html.match(/var player_(.*?)=(.*?)</)[2];let url=JSON.parse(ret).url;if(url.length>10){real_url="https://player.buyaotou.xyz/?url="+url;d.saveParse(input,real_url);input=real_url}}catch(e){print("网络请求发生错误:"+e.message)}}',
    lazy:'js:cacheUrl=getParse(input);if(cacheUrl){input=cacheUrl}else{try{let html=fetch(input,fetch_params);let ret=html.match(/var player_(.*?)=(.*?)</)[2];let url=JSON.parse(ret).url;if(url.length>10){real_url="https://player.buyaotou.xyz/?url="+url;saveParse(input,real_url);input=real_url}}catch(e){print("网络请求发生错误:"+e.message)}}',
    limit:5,
    推荐:'ul.stui-vodlist.clearfix;li;a&&title;.lazyload&&data-original;;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'body .stui-vodlist__box;a&&title;.lazyload&&data-original;;a&&href',
    二级:{"title":"h1.title&&Text;.stui-content__detail p:eq(1)&&Text","img":".lazyload&&data-original","desc":".stui-content__detail p:eq(-3)&&Text;.stui-content__detail p:eq(-2)&&Text","content":".stui-content__detail p.detail&&Text","tabs":".stui-pannel__head ul li","lists":".stui-content__playlist:eq(#id) li"},
    // 搜索:'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
}