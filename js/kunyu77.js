import './dayjs.min.js'
import './uri.min.js';
import './crypto-js.js'
import _ from './underscore-esm-min.js'

let key = 'kunyu77';
let url = 'http://api.kunyu77.com';
let agent = 'Dalvik/2.1.0 (Linux; U; Android 6.0; ZTE BA520 Build/MRA58K)';
let deviceId = '';
let timeOffset = 0;

var charStr = 'abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789';

function randIndex(min, max, i) {
    let index = Math.floor(Math.random() * (max - min + 1) + min),
        numStart = charStr.length - 10;
    if (i == 0 && index >= numStart) {
        index = randIndex(min, max, i);
    }
    return index;
}

function randomStr(len) {
    let min = 0, max = charStr.length - 1, _str = '';
    len = len || 15;
    for (var i = 0, index; i < len; i++) {
        index = randIndex(min, max, i);
        _str += charStr[index];
    }
    return _str;
}

function request(reqUrl) {
    let sj = dayjs().unix() - timeOffset;
    let uri = new Uri(reqUrl);
    uri.addQueryParam()
    uri.addQueryParam('pcode', '010110004')
    uri.addQueryParam('version', '2.0.4')
    uri.addQueryParam('devid', deviceId)
    uri.addQueryParam('package', 'com.sevenVideo.app.android')
    uri.addQueryParam('sys', 'android')
    uri.addQueryParam('sysver', '6.0')
    uri.addQueryParam('brand', 'ZTE')
    uri.addQueryParam('model', 'ZTE_BA520')
    uri.addQueryParam('sj', sj);
    let keys = [];
    for (var i = 0; i < uri.queryPairs.length; i++) {
        keys.push(uri.queryPairs[i][0]);
    }
    keys = _.sortBy(keys, function (name) { return name })
    let tkSrc = uri.path();
    for (let k of keys) {
        tkSrc += uri.getQueryParamValue(k);
    }
    tkSrc += sj;
    tkSrc += 'XSpeUFjJ';
    console.log(tkSrc);
    let tk = CryptoJS.MD5(tkSrc).toString().toLowerCase();
    console.log(tk);
    let header = {
        'user-agent': agent,
        't': sj,
        'TK': tk,
    };
    let res = req(uri.toString(), {
        headers: header
    });

    let serverTime = res.headers.Date;
    let content = res.content;
    let serverTimeS = dayjs(serverTime).unix();
    timeOffset = dayjs().unix() - serverTimeS;
    // console.log(content);
    return content;
}

function init(ext) {
    var device = local.get(key, 'device');
    if (device.length == 0) {
        device = randomStr(32).toLowerCase();
        local.set(key, 'device', device);
    }
    deviceId = device;
    console.log(dayjs().unix());
}

function home(filter) {
    let data = JSON.parse(request(url + '/api.php/provide/filter')).data;
    let classes = [];
    for (const key in data) {
        classes.push({
            'type_id': key,
            'type_name': data[key][0].cat
        });
    }
    console.log(classes);
    return JSON.stringify({
        'class': classes
    });
}

function homeVod(params) {
    let data = JSON.parse(request(url + '/api.php/provide/homeBlock?type_id=0')).data;
    let blocks = data.blocks;
    let videos = [];
    for (const block of blocks) {
        let name = block.block_name;
        if (name.indexOf('热播') >= 0)
            continue;
        let contents = block.contents;
        for (const content of contents) {
            videos.push({
                'vod_id': content.id,
                'vod_name': content.title,
                'vod_pic': content.videoCover,
                'vod_remarks': content.msg,
            })
        }
    }
    return JSON.stringify({
        'list': videos
    });
}

function category(tid, pg, filter, extend) {
    let data = JSON.parse(request(url + '/api.php/provide/searchFilter?type_id=' + tid + '&pagenum=' + pg + '&pagesize=24')).data;
    let videos = []
    for (const vod of data.result) {
        videos.push({
            'vod_id': vod.id,
            'vod_name': vod.title,
            'vod_pic': vod.videoCover,
            'vod_remarks': vod.msg,
        });
    }
    return JSON.stringify({
        'page': parseInt(data.page),
        'pagecount': data.pagesize,
        'limit': 24,
        'total': data.total,
        'list': videos,
    });
}

function detail(id) {
    let data = JSON.parse(request(url + '/api.php/provide/videoDetail?ids=' + id)).data;
    let vod = {
        'vod_id': data.id,
        'vod_name': data.videoName,
        'vod_pic': data.videoCover,
        'type_name': data.subCategory,
        'vod_year': data.year,
        'vod_area': data.area,
        'vod_remarks': data.msg,
        'vod_actor': data.actor,
        'vod_director': data.director,
        'vod_content': data.brief.trim(),
    }
    let episodes = JSON.parse(request(url + '/api.php/provide/videoPlaylist?ids=' + id)).data.episodes;
    let playlist = {};
    for (const episode of episodes) {
        let playurls = episode.playurls;
        for (const playurl of playurls) {
            let from = playurl.playfrom;
            if (!playlist.hasOwnProperty(from)) {
                playlist[from] = []
            }
            playlist[from].push(playurl.title.trim() + '$' + playurl.playurl);
        }
    }
    vod.vod_play_from = _.keys(playlist).join('$$$');
    let urls = _.values(playlist)
    let vod_play_url = []
    for (const urlist of urls) {
        vod_play_url.push(urlist.join('#'))
    }
    vod.vod_play_url = vod_play_url.join('$$$')
    return JSON.stringify({
        'list': [vod]
    });
}

function play(flag, id, flags) {
    let data = JSON.parse(request(url + '/api.php/provide/parserUrl?url=' + id)).data;
    let playHeader = data.playHeader;
    let jxUrl = data.url;
    let jxData = JSON.parse(request(jxUrl));
    if (flags.indexOf(flag) >= 0) {
        return JSON.stringify({
            'parse': 1,
            'jx': 1,
            'url': id
        });
    } else {
        return JSON.stringify({
            'parse': 0,
            'url': id
        });
    }
}

function search(wd, quick) {
    let data = JSON.parse(request(url + '/api.php/provide/searchVideo?searchName=' + wd)).data;
    let videos = [];
    for (const vod of data) {
        videos.push({
            'vod_id': vod.id,
            'vod_name': vod.videoName,
            'vod_pic': vod.videoCover,
            'vod_remarks': vod.msg,
        })
    }
    return JSON.stringify({
        'list': videos
    });
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