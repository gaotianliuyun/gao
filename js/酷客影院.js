// 网址发布页 http://www.ikuke.vip/
var rule = {
    title:'酷客影院',
    模板:'首图2',
    host:'http://www.2kuke.com',
    // host:'http://www.3kuke.com',
    // url:'/list/fyclass_fypage.html',
    url:'/list/fyfilter',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.cateId}}_fypage.html?order={{fl.by}}',
    filter:{
        "1":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"1"},{"n":"喜剧片","v":"7"},{"n":"动作片","v":"8"},{"n":"科幻片","v":"9"},{"n":"奇幻片","v":"10"},{"n":"恐怖片","v":"11"},{"n":"灾难片","v":"12"},{"n":"战争片","v":"13"},{"n":"爱情片","v":"14"},{"n":"剧情片","v":"15"},{"n":"其他片","v":"16"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"}]}],
        "2":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"2"},{"n":"言情剧","v":"28"},{"n":"古装剧","v":"30"},{"n":"都市剧","v":"29"},{"n":"警匪剧","v":"31"},{"n":"爱情剧","v":"32"},{"n":"家庭剧","v":"33"},{"n":"战争剧","v":"34"},{"n":"悬疑剧","v":"35"},{"n":"穿越剧","v":"36"},{"n":"其他剧","v":"37"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"}]}],
        "4":[{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"}]}],
        "3":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"3"},{"n":"热血","v":"38"},{"n":"冒险","v":"39"},{"n":"搞笑","v":"40"},{"n":"玄幻","v":"41"},{"n":"武侠","v":"42"},{"n":"推理","v":"43"},{"n":"推理","v":"44"},{"n":"经典","v":"45"},{"n":"其他动漫","v":"46"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"}]}]
    },
    filter_def:{
        1:{cateId:'1',by:'time'},
        2:{cateId:'2',by:'time'},
        4:{cateId:'4',by:'time'},
        3:{cateId:'3',by:'time'}
    },
    searchUrl:'/search.php#searchword=**;post',
    class_parse: '.stui-header__menu li:gt(0):lt(5);a&&title;a&&href;.*/(.*?).html',
    // lazy:'js:pdfh=jsp.pdfh;var url=pdfh(request(input),"iframe&&src");try{try{try{var url=pdfh(request(url,{}),"body&&script,1&&Html").match(/else[\s\S]*?src="(.*?)"/)[1];if(/m3u8|mp4/.test(url)){input=url}}catch(e){var url=pdfh(request(url),"iframe&&src");var url=request(url,{headers:{"Referer":MY_URL}}).match(/Source\\("(.*?)"/)[1];input=url}}catch(e){var url=pdfh(request(input),"iframe&&src");var url=request(url,{headers:{"Referer":MY_URL}}).match(/Source\\("(.*?)"/)[1];input=url}}catch(e){input}',
    二级: {
        "title": "h1&&Text;.data--span:eq(0)&&Text",
        "img": ".lazyload&&data-original",
        "desc": ".data:eq(1)&&Text;;;p.line1--span:eq(0)&&Text;p.line1--span:eq(1)&&Text",
        "content": ".desc--span&&Text",
        "tabs": ".nav-tabs li",
        "lists": ".stui-content__playlist:eq(#id) li"
    },
}