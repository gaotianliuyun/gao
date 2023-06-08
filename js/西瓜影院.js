       var rule={
           title: '西瓜影院',
            host: 'https://www.uccomic.com',
            url: '/vodshow/fyclass--------fypage---/',
            searchUrl: '/index.php/ajax/suggest?mid=1&wd=**',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            class_parse: '.menulist.hidden-xs li:gt(0):lt(5);a&&Text;a&&href;.*/(.*?)/',
            play_parse: true,
            lazy: '',
            limit: 6,
            推荐: 'body&&.col-md-2.col-sm-3.col-xs-4;a&&title;a&&data-original;.note.textbg&&Text;a&&href',
            //double: true, // 推荐内容是否双层定位
            一级: 'body&&.col-md-2.col-sm-3.col-xs-4;a&&title;a&&data-original;.note.textbg&&Text;a&&href',
            二级: {
                "title": "h3&&Text",
                "img": "",
                "desc": "",
                "content": "",
                "tabs": ".option",
                "lists": ".playlistlink-1:eq(#id) li"
            },
              搜索:'json:list;name;pic;;id',
        }