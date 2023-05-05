var rule = {
    title:'有声听书网',
    host:'https://www.ysts5.com',
    url:'/book/fyclass/lastupdate/fypage.html',
    searchUrl:'https://m.ysts.cc/api/ajax/solist?word=**&type=name&page=fypage',
    searchable:2,
    quickSearch:0,
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    class_name:'玄幻有声&灵异有声&都市有声&军事有声&百家讲坛&网游竞技&长篇评书&相声小品&综艺娱乐&儿童故事&职场有声&其他有声',
    class_url:'xuanhuan&lingyi&dushi&junshi&bjjt&jingji&pingshu&xiangsheng&yule&ertong&tongren&qita',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'js:pd=jsp.pd;pdfa=jsp.pdfa;pdfh=jsp.pdfh;var d=[];try{var list=pdfa(request(input),".tab-ul&&li");list.forEach(function(it){d.push({title:pdfh(it,"a&&title").replace("有声小说",""),desc:"❤️"+pdfh(it,".playCountText&&Text"),pic_url:pd(it,"img&&data-original"),url:pd(it,"a&&href")})})}catch(e){}setResult(d);',
    一级:'js:pd=jsp.pd;pdfa=jsp.pdfa;pdfh=jsp.pdfh;var d=[];try{var list=pdfa(request(input),".list-works&&li");list.forEach(function(it){d.push({title:pdfh(it,"a&&title").replace("有声小说",""),desc:"❤️"+pdfh(it,".playCountText&&Text"),pic_url:pd(it,"img&&data-original"),url:pd(it,"a&&href")})})}catch(e){}setResult(d);',
    二级:'js:pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;VOD={};var html=request(input);VOD.vod_name=pdfh(html,"h1&&Text").replace("有声小说","");VOD.type_name=pdfh(html,".book-info&&dd:eq(0)&&Text").replace("类型：","");VOD.vod_pic=pd(html,".lazy&&data-original");VOD.vod_remarks=pdfh(html,".book-info&&dd:eq(2)&&Text");VOD.vod_year=pdfh(html,".book-info&&dd--span:eq(3)&&Text").substr(0,4);VOD.vod_actor=pdfh(html,".book-info&&dd:eq(4)&&Text");VOD.vod_director=pdfh(html,".book-info&&dd:eq(1)&&Text");VOD.vod_content=pdfh(html,".book-des&&Text");let playFrom=[];let vod_tab_list=[];let tabs=pdfa(html,".js_chapter_ul&&li");tabs.forEach((it)=>{playFrom.push(pdfh(it,"a&&Text"))});playFrom.forEach((it,idex)=>{let new_vod_list=[];let vodList=[];let turl=input;if(idex>0){turl=pd(tabs[idex],"a&&href")}try{vodList=pdfa(request(turl),"#playlist&&a")}catch(e){}vodList.forEach((it)=>{let burl=pd(it,"a&&href");let btitle=pdfh(it,"body&&Text").replace(/.*?(\\d+).*/,"$1").replace("第","").replace("期","");new_vod_list.push(btitle+"$"+burl)});let vlist=new_vod_list.join("#");vod_tab_list.push(vlist)});VOD.vod_play_from=playFrom.join("$$$");VOD.vod_play_url=vod_tab_list.join("$$$");',
    搜索:'js:var d=[];let jo=JSON.parse(fetch(input));jo.forEach((it)=>{d.push({title:it.novel.name,img:"https://m.ysts.cc"+it.novel.cover,desc:"❤️"+it.data.allvisit,url:"https://www.ysts5.com"+it.novel.url})});setResult(d);',
}