       var rule={
            title: '奈飞中文',
            host: 'https://www.naifei.io',
            url: '/vodshow/id/fyclass/page/fypage.html',
            searchUrl: '/search/**----------fypage---.html',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            class_parse: '.nav-menu-items&&li;a&&Text;a&&href;.*/(.*?).html',
            play_parse: true,
            lazy: '',
            limit: 6,
            推荐: '.module-list;.module-items&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
            double: true, // 推荐内容是否双层定位
            一级: '.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
            二级: {
                "title": "h1&&Text;.tag-link&&Text",
                "img": ".module-item-pic&&img&&data-src",
                "desc": ".video-info-aux&&.tag-link&&Text;.video-info-aux&&a:eq(1)&&Text;.video-info-items:eq(2)&&Text;.video-info-items:eq(5)&&Text",
                "content": ".vod_content&&Text",
                "tabs": ".module-tab-item",
                "lists": ".module-player-list:eq(#id)&&.scroll-content&&a"
            },
            搜索: '.module-items .module-search-item;a&&title;img&&data-src;.video-serial&&Text;a&&href',
        }