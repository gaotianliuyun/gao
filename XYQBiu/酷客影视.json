//写法思路来自biubiu影院，海阔视界，xpath筛选。
{
    //规则名
    "title": "酷客影视",
    //作者
    "author": "聆听优美旋律",
    //请求UA
    "UserAgent":"MOBILE_UA",
    //是否开启获取首页数据，0关闭，1开启
    "homeContent":"0",
    //分类链接起始页码,禁止负数和含小数点。
    "firstpage": "1",
    //分类链接,{cateId}是分类，{catePg}是页码,第一页没有页码的可以这样写 第二页链接[firstPage=第一页的链接]
    "class_url": "http://www.788dy.com/list/{cateId}_{catePg}.html",
    //分类名
    "class_name": "电影&电视剧&综艺&动漫",
    //分类名替换词，替换词中有英文&的用两个中文＆＆代替
    "class_value": "1&2&4&3",
    //筛选数据，json格式，参考xpath的筛选写法
    "filterdata":{},
    //分类是否二次截取
    "cat_YN_twice": "1",
    //分类二次截取前
    "cat_twice_pre": "stui-vodlist clearfix",
    //分类二次截取后
    "cat_twice_suf": "</ul>",
    //分类数组截取前
    "cat_arr_pre": "<li",
    //分类数组截取后
    "cat_arr_suf": "</li>",
    //分类截取片单图片，截取前缀&&截取后缀
    "cat_pic": "data-original=\"&&\"",
    //分类截取片单标题，截取前缀&&截取后缀
    "cat_title": "title=\"&&\"",
    //分类截取片单副标题，截取前缀&&截取后缀
    "cat_subtitle": "text-right\">&&<",
    //分类截取片单链接，截取前缀&&截取后缀
    "cat_url": "href=\"&&\"",  
    //分类片单链接补前缀  
    "cat_prefix": "http://www.788dy.com",
    //分类片单链接补后缀
    "cat_suffix": "",
    
    //搜索链接，搜索关键字用{wd}表示，post请求的最后面加;post，post链接与Body参数用?分开,链接含?的用两个中文?代替
    "search_url": "http://www.788dy.com/search.php;post",
    //POST搜索body
    "sea_PtBody":"searchword={wd}",
    //搜索模式,0为json搜索，只支持列表在list数组里的，其它为网页截取。
    "search_mode": "1",
    //json片单图片
    "jsonpic": "pic",
    //json片单标题
    "jsonname": "name",
    //json片单链接
    "jsonid": "id",
    //json片单副标题，这个很少有，预留着
    "jsonstitle":"",
    //搜索是否二次截取  
    "sea_YN_twice": "1",
    //搜索二次截取前
    "sea_twice_pre": "class=\"stui-vodlist__media",
    //搜索二次截取后
    "sea_twice_suf": "</ul>",
    //搜索数组前缀
    "sea_arr_pre": "<li",
    //搜索数组后缀
    "sea_arr_suf": "/li>",
    //搜索片单图片，截取前缀&&截取后缀
    "sea_pic": "data-original=\"&&\"",
    //搜索片单标题，截取前缀&&截取后缀
    "sea_title": "title=\"&&\"",
    //搜索片单链接，截取前缀&&截取后缀
    "sea_url": "href=\"&&\"",
    //搜索片单链接补前缀
    "search_prefix": "http://www.788dy.com",
    //搜索片单链接补后缀，这个一般json搜索的需要
    "search_suffix": "",
    //搜索副标题，截取前缀&&截取后缀
    "sea_subtitle": "text-right\">&&<",
    
    //片单链接是否直接播放，1是直接播放。
    "force_play": "0",
    //直接播放链接补前缀
    "play_prefix": "https://live.52sf.ga/huya/",
    //直接播放链接补后缀，设置为#isVideo=true#可强制识别为视频链接
    "play_suffix": "#isVideo=true#",
    //直接播放链接设置请求头，每一组用#分开
    "play_header": "authority$ku.peizq.online#Referer$https://play.peizq.online",
    
    //演员数据，截取前缀&&截取后缀
    "proj_actor": "主演：</span>&&</p>",
    //简介内容，截取前缀&&截取后缀
    "proj_plot": "简介：</span>&&</p>",
    
    //线路截取区域，如果不需要请把tab_title置空或者全部不要填。
    //线路是否二次截取
    "tab_YN_twice": "1",
    //线路二次截取前
    "tab_twice_pre": "class=\"nav nav-tabs",
    //线路二次截取后
    "tab_twice_suf": "</ul",
    //线路截取数组前
    "tab_arr_pre": "<a",
    //线路截取数组后
    "tab_arr_suf": "/a>",
    //线路标题，截取前缀&&截取后缀
    "tab_title": ">&&<",
    
    //列表是否二次截取
    "list_YN_twice": "0",
    //列表二次截取前
    "list_twice_pre": "",
    //列表二次截取后
    "list_twice_suf": "",
    //列表数组截取前
    "list_arr_pre": "class=\"stui-content__playlist",
    //列表数组截取后
    "list_arr_suf": "</ul>",
    
    //集数是否二次截取
    "epi_YN_twice": "0",
    //集数二次截取前
    "epi_twice_pre": "空",
    //集数二次截取后
    "epi_twice_suf": "空",
    //集数数组截取前
    "epi_arr_pre": "<a",
    //集数数组截取后
    "epi_arr_suf": "/a>",
    //集数标题，截取前缀&&截取后缀
    "epi_title": ">&&<",
    //集数链接，截取前缀&&截取后缀
    "epi_url": "href=\"&&\"",
    //集数链接补前缀
    "epiurl_prefix": "http://www.788dy.com",
    //集数链接补后缀
    "epiurl_suffix": "",
    //分析网页源码中有<script type="text/javascript">var player_aaaa={"flag":"play","encrypt这种源码的链接解析
    //如果网页源码里没有这种请设置为0
    "Anal_MacPlayer":"0",
    //是否开启手动嗅探，只对网页嗅探有效，0否，1是
    "ManualSniffer":"0",
    //手动嗅探视频链接关键字，每个用#隔开
    "VideoFormat":".mp4#.m3u8#.flv#item/video#is_play_url=1"
}