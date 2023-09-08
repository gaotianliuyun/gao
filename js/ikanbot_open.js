import { Crypto, load, _ } from './lib/cat.js';

let key = 'ikanbot';
let url = 'https://www.ikanbot.com';
let siteKey = '';
let siteType = 0;

const UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';

async function request(reqUrl, agentSp) {
    let res = await req(reqUrl, {
        method: 'get',
        headers: {
            'User-Agent': agentSp || UA,
        },
    });
    return res.content;
}

// cfg = {skey: siteKey, ext: extend}
async function init(cfg) {
    siteKey = cfg.skey;
    siteType = cfg.stype;
}

function getClass($) {
    const nav = $('ul.nav-pills:eq(1) > li > a');
    let tags = {
        key: 'tag',
        name: '标签',
        value: _.map(nav, (n) => {
            return { n: n.children[0].data, v: n.attribs.href };
        }),
    };
    tags['init'] = tags.value[0].v;
    const title = $('title:first').text().split('-')[0].substring(2);
    return { cls: { type_id: tags.value[0].v, type_name: title }, tags: [tags] };
}

async function home(filter) {
    let classes = [];
    let filterObj = {};
    for (const cate of ['/hot/index-movie-热门.html', '/hot/index-tv-热门.html']) {
        const html = await request(url + cate);
        const $ = load(html);
        const { cls, tags } = getClass($);
        classes.push(cls);
        filterObj[cls.type_id] = tags;
    }
    return JSON.stringify({
        class: classes,
        filters: filterObj,
    });
}

async function homeVod() {
    return '{}';
}

async function category(tid, pg, filter, extend) {
    if (pg <= 0) pg = 1;
    const link = url + (extend.tag || tid).replace('.html', pg > 1 ? `-p-${pg}.html` : '.html');
    const html = await request(link);
    const $ = load(html);
    const items = $('div.v-list a.item');
    var jsBase = await js2Proxy(true, siteType, siteKey, 'img/', {});
    let videos = _.map(items, (item) => {
        const img = $(item).find('img:first')[0];
        return {
            vod_id: item.attribs.href,
            vod_name: img.attribs.alt,
            vod_pic: jsBase + base64Encode(img.attribs['data-src']),
            vod_remarks: '',
        };
    });
    const hasMore = $('div.page-more > a:contains(下一页)').length > 0;
    const pgCount = hasMore ? parseInt(pg) + 1 : parseInt(pg);
    return JSON.stringify({
        page: parseInt(pg),
        pagecount: pgCount,
        limit: 24,
        total: 24 * pgCount,
        list: videos,
    });
}

async function detail(id) {
    const html = await request(url + id);
    const $ = load(html);
    var jsBase = await js2Proxy(true, siteType, siteKey, 'img/', {});
    const detail = $('div.detail > .meta');
    let vod = {
        vod_id: id,
        vod_pic: jsBase + base64Encode($('div.item-root > img')[0].attribs['data-src']),
        vod_remarks: '',
    };
    for (const info of detail) {
        if ($(info).hasClass('title')) {
            vod.vod_name = info.children[0].data;
        } else if ($(info).hasClass('year')) {
            vod.vod_area = info.children[0].data;
        } else if ($(info).hasClass('country')) {
            vod.vod_area = info.children[0].data;
        } else if ($(info).hasClass('celebrity')) {
            vod.vod_actor = info.children[0].data;
        }
    }

    const res = await req(url + '/api/getResN?videoId=' + id.substring(id.lastIndexOf('/') + 1) + '&mtype=2', {
        headers: {
            Referer: url,
            'User-Agent': UA,
        },
    });
    const list = JSON.parse(res.content).data.list;
    let playlist = {};
    for (const l of list) {
        const flagData = JSON.parse(l.resData);
        for (const f of flagData) {
            const from = f.flag;
            const urls = f.url;
            if (!from || !urls) continue;
            if (playlist[from]) continue;
            playlist[from] = urls;
        }
    }
    vod.vod_play_from = _.keys(playlist).join('$$$');
    vod.vod_play_url = _.values(playlist).join('$$$');
    return JSON.stringify({
        list: [vod],
    });
}

function base64Encode(text) {
    return Crypto.enc.Base64.stringify(Crypto.enc.Utf8.parse(text));
}

function base64Decode(text) {
    return Crypto.enc.Utf8.stringify(Crypto.enc.Base64.parse(text));
}

async function proxy(segments, headers) {
    let what = segments[0];
    let url = base64Decode(segments[1]);
    if (what == 'img') {
        var resp = await req(url, {
            buffer: 2,
            headers: {
                Referer: url,
                'User-Agent': UA,
            },
        });
        return JSON.stringify({
            code: resp.code,
            buffer: 2,
            content: resp.content,
            headers: resp.headers,
        });
    }
    return JSON.stringify({
        code: 500,
        content: '',
    });
}

async function play(flag, id, flags) {
    return JSON.stringify({
        parse: 0,
        url: id,
    });
}

async function search(wd, quick) {
    const html = await request(url + '/search?q=' + wd);
    const $ = load(html);
    const items = $('div.media > div.media-left > a');
    var jsBase = await js2Proxy(true, siteType, siteKey, 'img/', {});
    let videos = _.map(items, (item) => {
        const img = $(item).find('img:first')[0];
        return {
            vod_id: item.attribs.href,
            vod_name: img.attribs.alt,
            vod_pic: jsBase + base64Encode(img.attribs['data-src']),
            vod_remarks: '',
        };
    });
    return JSON.stringify({
        list: videos,
    });
}

export function __jsEvalReturn() {
    return {
        init: init,
        home: home,
        homeVod: homeVod,
        category: category,
        detail: detail,
        play: play,
        proxy: proxy,
        search: search,
    };
}
