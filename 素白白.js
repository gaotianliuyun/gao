var rule = {
    title:'素白白',
    host:'https://www.subaibaiys.com',
    url:'/fyclass/page/fypage',
    searchUrl:'/grabble?q=**',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{
        'User-Agent':'UC_UA',
        // "Cookie": ""
    },
    class_parse:'.navlist&&li;a&&Text;a&&href;com/(.*)',
	cate_exclude:'公告留言',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.mi_cont&&ul;li;h3&&Text;img&&data-original;.jidi&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.mi_cont&&ul&&li;h3&&Text;img&&data-original;.jidi&&Text;a&&href',
    二级:{"title":"h1&&Text;.moviedteail_list&&li&&Text","img":".dyimg&&img&&src","desc":".moviedteail_list&&li:eq(1)&&Text;.moviedteail_list&&li:eq(2)&&Text;.moviedteail_list&&li:eq(3)&&Text;.moviedteail_list&&li:eq(4)&&Text","content":".yp_context&&Text","tabs":".mi_paly_box .ypxingq_t","lists":".paly_list_btn:eq(#id) a"},
    搜索:'.mi_cont&&ul&&li;h3&&Text;.lazy&&data-original;.jidi&&Text;a&&href',
}