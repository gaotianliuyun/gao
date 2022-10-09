import './uri.min.js';

/**
 * 豆瓣索引
 * @antod
 * 
 */

const key = 'douban';
const api = 'https://frodo.douban.com/api/v2';
const ua = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat';
const apiKey = '0ac44ae016490db2204ce0a042db2916';
const homeData = {"class":[{"type_id":"movie","type_name":"电影"},{"type_id":"tv","type_name":"电视剧"},{"type_id":"rank","type_name":"排行版"}],"filters":{"movie":[{"key":"类型","name":"类型","value":[{"n":"全部类型","v":""},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"动作","v":"动作"},{"n":"科幻","v":"科幻"},{"n":"动画","v":"动画"},{"n":"悬疑","v":"悬疑"},{"n":"犯罪","v":"犯罪"},{"n":"惊悚","v":"惊悚"},{"n":"冒险","v":"冒险"},{"n":"音乐","v":"音乐"},{"n":"历史","v":"历史"},{"n":"奇幻","v":"奇幻"},{"n":"恐怖","v":"恐怖"},{"n":"战争","v":"战争"},{"n":"传记","v":"传记"},{"n":"歌舞","v":"歌舞"},{"n":"武侠","v":"武侠"},{"n":"情色","v":"情色"},{"n":"灾难","v":"灾难"},{"n":"西部","v":"西部"},{"n":"纪录片","v":"纪录片"},{"n":"短片","v":"短片"}]},{"key":"地区","name":"地区","value":[{"n":"全部地区","v":""},{"n":"华语","v":"华语"},{"n":"欧美","v":"欧美"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"中国大陆","v":"中国大陆"},{"n":"美国","v":"美国"},{"n":"中国香港","v":"中国香港"},{"n":"中国台湾","v":"中国台湾"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"意大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"印度","v":"印度"},{"n":"泰国","v":"泰国"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"加拿大","v":"加拿大"},{"n":"澳大利亚","v":"澳大利亚"},{"n":"爱尔兰","v":"爱尔兰"},{"n":"瑞典","v":"瑞典"},{"n":"巴西","v":"巴西"},{"n":"丹麦","v":"丹麦"}]},{"key":"sort","name":"排序","value":[{"n":"近期热度","v":"T"},{"n":"首映时间","v":"R"},{"n":"高分优先","v":"S"}]},{"key":"年代","name":"年代","value":[{"n":"全部年代","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2010年代","v":"2010年代"},{"n":"2000年代","v":"2000年代"},{"n":"90年代","v":"90年代"},{"n":"80年代","v":"80年代"},{"n":"70年代","v":"70年代"},{"n":"60年代","v":"60年代"},{"n":"更早","v":"更早"}]}],"tv":[{"key":"类型","name":"类型","value":[{"n":"不限","v":""},{"n":"电视剧","v":"电视剧"},{"n":"综艺","v":"综艺"}]},{"key":"电视剧形式","name":"电视剧形式","value":[{"n":"不限","v":""},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"悬疑","v":"悬疑"},{"n":"动画","v":"动画"},{"n":"武侠","v":"武侠"},{"n":"古装","v":"古装"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"科幻","v":"科幻"},{"n":"恐怖","v":"恐怖"},{"n":"历史","v":"历史"},{"n":"战争","v":"战争"},{"n":"动作","v":"动作"},{"n":"冒险","v":"冒险"},{"n":"传记","v":"传记"},{"n":"剧情","v":"剧情"},{"n":"奇幻","v":"奇幻"},{"n":"惊悚","v":"惊悚"},{"n":"灾难","v":"灾难"},{"n":"歌舞","v":"歌舞"},{"n":"音乐","v":"音乐"}]},{"key":"综艺形式","name":"综艺形式","value":[{"n":"不限","v":""},{"n":"真人秀","v":"真人秀"},{"n":"脱口秀","v":"脱口秀"},{"n":"音乐","v":"音乐"},{"n":"歌舞","v":"歌舞"}]},{"key":"地区","name":"地区","value":[{"n":"全部地区","v":""},{"n":"华语","v":"华语"},{"n":"欧美","v":"欧美"},{"n":"国外","v":"国外"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"中国大陆","v":"中国大陆"},{"n":"中国香港","v":"中国香港"},{"n":"美国","v":"美国"},{"n":"英国","v":"英国"},{"n":"泰国","v":"泰国"},{"n":"中国台湾","v":"中国台湾"},{"n":"意大利","v":"意大利"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"西班牙","v":"西班牙"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"瑞典","v":"瑞典"},{"n":"巴西","v":"巴西"},{"n":"丹麦","v":"丹麦"},{"n":"印度","v":"印度"},{"n":"加拿大","v":"加拿大"},{"n":"爱尔兰","v":"爱尔兰"},{"n":"澳大利亚","v":"澳大利亚"}]},{"key":"sort","name":"排序","value":[{"n":"近期热度","v":"T"},{"n":"首播时间","v":"R"},{"n":"高分优先","v":"S"}]},{"key":"年代","name":"年代","value":[{"n":"全部","v":""},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2010年代","v":"2010年代"},{"n":"2000年代","v":"2000年代"},{"n":"90年代","v":"90年代"},{"n":"80年代","v":"80年代"},{"n":"70年代","v":"70年代"},{"n":"60年代","v":"60年代"},{"n":"更早","v":"更早"}]},{"key":"平台","name":"平台","value":[{"n":"全部","v":""},{"n":"腾讯视频","v":"腾讯视频"},{"n":"爱奇艺","v":"爱奇艺"},{"n":"优酷","v":"优酷"},{"n":"湖南卫视","v":"湖南卫视"},{"n":"Netflix","v":"Netflix"},{"n":"HBO","v":"HBO"},{"n":"BBC","v":"BBC"},{"n":"NHK","v":"NHK"},{"n":"CBS","v":"CBS"},{"n":"NBC","v":"NBC"},{"n":"tvN","v":"tvN"}]}],"rank":[{"key":"rank","name":"榜单","value":[{"n":"实时热门","v":"show_hot"},{"n":"一周口碑电影榜","v":"movie_weekly_best"},{"n":"豆瓣电影Top250","v":"movie_top250"},{"n":"华语口碑剧集榜","v":"tv_chinese_best_weekly"},{"n":"全球口碑剧集榜","v":"tv_global_best_weekly"},{"n":"国内口碑综艺榜","v":"show_chinese_best_weekly"},{"n":"国外口碑综艺榜","v":"show_global_best_weekly"}]}]}};

function request(path) {
    const uri = new Uri(api + path);
    // TODO - params
    const header = {
        'User-Agent': ua,
        'Referer': 'https://servicewechat.com/wx2f9b06c1de1ccfca/84/page-frame.html'
    };
    const res = req(uri.toString(), {
        headers: header
    });

    const content = res.content;
    return content;
}

function init(ext) {
}

function home(filter) {
    if (filter) return JSON.stringify(homeData);
    return JSON.stringify({
        'class': homeData.class
    });
}

function homeVod(params) {
    try {
        const url = '/subject_collection/show_hot/items?apiKey=' + apiKey + '&count=20&start=0';

        let videos = [];
        for (const vod of JSON.parse(request(url)).subject_collection_items) {
            if (vod.type && (vod.type == 'tv' || vod.type == 'movie')) {
                videos.push({
                    'vod_id': '/' + vod.type + '/' + vod.id,
                    'vod_name': vod.title,
                    'vod_pic': vod.pic.normal,
                    'vod_remarks': vod.rating.value
                });
            }
        }

        return JSON.stringify({
            'list': videos
        });
    } catch (e) {
        console.log(e);
    }
    return JSON.stringify({
        'list': []
    });
}

function category(tid, pg, filter, extend) {
    try {
        let url = '',
            data,list;
        const pageSize = 30;

        if (tid == 'movie' || tid == 'tv') {
            let sort = '',
                tags = '';
            if (filter && extend) {
                sort = extend.sort || 'T';
                delete extend.sort;
                tags = Object.values(extend).join(',');
            }

            url += '/' + tid + '/recommend?apiKey=' + apiKey
                + '&tags=' + tags + '&sort=' + sort + '&refresh=0&selected_categories='
                + '&count=' + pageSize + '&start=' + ((parseInt(pg) - 1) * pageSize);

            data = JSON.parse(request(url));
            list = data.items;
        } else if (tid == 'rank') {
            let type = 'show_hot';
            if (filter && extend && extend.rank) {
                type = extend.rank;
            }
            url += '/subject_collection/' + type + '/items?apiKey=' + apiKey
                + '&count=' + pageSize + '&start=' + (parseInt(pg) - 1) * pageSize;
            data = JSON.parse(request(url));
            list = data.subject_collection_items;
        }
    
        let videos = [];
        for (const vod of list) {
            if (vod.type && (vod.type == 'tv' || vod.type == 'movie')) {
                videos.push({
                    'vod_id': '/' + vod.type + '/' + vod.id,
                    'vod_name': vod.title,
                    'vod_pic': vod.pic.normal,
                    'vod_remarks': vod.rating ? vod.rating.value : ''
                });
            }
        }
    
        return JSON.stringify({
            'page': parseInt(pg),
            'pagecount': Math.ceil(data.total / pageSize),
            'limit': pageSize,
            'total': data.total,
            'list': videos,
        });
    } catch (e) {
        console.log(e)
    }
    return '{}';
}

function detail(id) {
    try {
        const url = id + '?apiKey=' + apiKey;
        const data = JSON.parse(request(url));

        let directors = [];
        data.directors.forEach((it) => {directors.push(it.name)});
        let actors = [];
        data.actors.forEach((it) => {actors.push(it.name)});

        let vod = {
            'vod_id': data.id,
            'vod_name': data.title,
            'vod_pic': data.pic.normal,
            'type_name': data.genres.join('/'),
            'vod_year': data.year,
            'vod_area': data.area,
            'vod_remarks': data.card_subtitle,
            'vod_actor': actors.join('/'),
            'vod_director': directors.join('/'),
            'vod_content': data.intro,
        }
        return JSON.stringify({
            'list': [vod]
        });
    } catch (e) {
        console.log(e)
    }
    return '{}';
}

function play(flag, id, flags) {
    return '{}';
}

function search(wd, quick) {
    return '{}';
}

__JS_SPIDER__ = {
    init: init,
    home: home,
    homeVod: homeVod,
    category: category,
    detail: detail,
    play: play,
    search: search
}
