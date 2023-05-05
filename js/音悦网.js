var rule = {
    title:'音悦网',
    host:'https://data.yinyuetai.com',
    homeUrl:'/video/getTypeVideoList?videoType=1&pageNum=1&pageSize=20',//网站的首页链接,可以是完整路径或者相对路径,用于分类获取和推荐获取 fyclass是分类标签 fypage是页数
    url:'/video/getTypeVideoList?videoType=fyclass&pageNum=fypage&pageSize=20',
    // detailUrl:'https://data.yinyuetai.com/video/getVideoInfo?id=fyid',
    searchUrl:'',//搜索链接 可以是完整路径或者相对路径,用于分类获取和推荐获取 **代表搜索词 fypage代表页数
    searchable:0,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
    },
    class_name:'内地&香港&台湾&日韩欧美&音悦V榜及自制',
    class_url:'1&2&3&4&5',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'*',
    一级:'js:let d=[];let data=JSON.parse(request(input)).list;data.forEach(function(it){let purl=JSON.parse(request("https://data.yinyuetai.com/video/getVideoInfo?id="+it.id)).videoUrl;d.push({title:it.videoName,img:it.videoImg,url:purl,desc:it.artistName,})});setResult(d);',
    二级:'*',
    搜索:'',
}