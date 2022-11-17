var rule = Object.assign(muban.默认,{
title:'兰花影院',
host:'https://www.lanhua.tv',
url:'/vodshow/fyclass--------fypage---.html',
searchUrl:'/vodsearch/-------------.html?wd=**',
class_parse:'ul.top_nav&&li;a&&Text;a&&href;./(\\d+).html',
cate_exclude:'午夜影院|VIP蓝光影院|电视直播',
推荐:'.cbox_list;ul&&li;a&&title;.lazyload&&data-original;.pic_text.text_right&&Text;a&&href',
double:true, // 推荐内容是否双层定位
一级:'.vodlist&&li;a&&title;.lazyload&&data-original;.pic_text.text_right&&Text;a&&href',
二级:{"title":".hd_tit&&Text;.content_min&&ul&&li&&Text","img":".lazyload&&data-original","desc":";;;.content_min&&ul&&li:eq(2)&&Text;.content_min&&ul&&li:eq(3)&&Text","content":".context&&span&&Text","tabs":".play_source_tab&&a","lists":".content_playlist:eq(#id) li"},
搜索:'.vodlist&&li;*;*;*;*',
});