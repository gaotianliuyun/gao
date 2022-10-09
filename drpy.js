import './lib/util.js';
import cheerio from 'assets://js/lib/cheerio.min.js';
import 'assets://js/lib/crypto-js.js'
// import muban from 'https://gitcode.net/qq_32394351/dr_py/-/raw/master/js/模板.js';

// const key = 'drpy_zbk';
// eval(req('http://192.168.1.124:5705/libs/es6py.js').content);
function init_test() {
    console.log("init_test_start");
    console.log(RKEY);
    console.log(JSON.stringify(rule));
    // clearItem(RULE_CK);
    // console.log(JSON.stringify(rule));
    // let aa = base64Encode('编码测试一下')
    // log(aa);
    // let bb = base64Decode(aa);
    // log('bb:' + bb);
    // console.log(request('https://www.baidu.com',{withHeaders:true}));
    // console.log(request('https://www.baidu.com/favicon.ico', { toBase64: true }));
    // require('http://192.168.10.99:5705/txt/pluto/drT.js');
    // console.log(typeof(drT));
    // console.log(drT.renderText('{{fl.cate}},hi, {{fl}}哈哈.{{fl}}',{sort: 1,cate:'movie'},'fl'));
    console.log("init_test_end");
}

let rule = {};
/** 已知问题记录
 * 1.影魔的jinjia2引擎不支持 {{fl}}对象直接渲染
 * Array.prototype.append = Array.prototype.push; 这种js执行后有毛病,for in 循环列表会把属性给打印出来
 * 2.import es6py.js但是里面的函数没有被装载进来.比如drpy规则报错setResult2 is undefiend
 * 3.无法重复导入cheerio(怎么解决drpy和parseTag里都需要导入cheerio的问题) 无法在副文件导入cheerio (现在是全部放在drpy一个文件里了,凑合解决?)
 * 4.有个错误不知道哪儿来的 executeScript: com.quickjs.JSObject$Undefined cannot be cast to java.lang.String 在 点击选集播放打印init_test_end后面打印
 * 5.需要实现 stringify 函数,比起JSON.stringify函数,它会原封不动保留中文不会编码unicode
 * todo:  jsp:{pdfa,pdfh,pd},json:{pdfa,pdfh,pd},jq:{pdfa,pdfh,pd}
 *  * 电脑看日志调试
 adb tcpip 5555
 adb connect 192.168.10.192
 adb devices -l
 adb logcat -c
 adb logcat | grep -i QuickJS
 * **/


/*** 以下是内置变量和解析方法 **/
const MOBILE_UA = 'Mozilla/5.0 (Linux; Android 11; M2007J3SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045714 Mobile Safari/537.36';
const PC_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36';
const UA = 'Mozilla/5.0';
const UC_UA = 'Mozilla/5.0 (Linux; U; Android 9; zh-CN; MI 9 Build/PKQ1.181121.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UCBrowser/12.5.5.1035 Mobile Safari/537.36';
const IOS_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';
const RULE_CK = 'cookie'; // 源cookie的key值
// const KEY = typeof(key)!=='undefined'&&key?key:'drpy_' + (rule.title || rule.host); // 源的唯一标识
const CATE_EXCLUDE = '首页|留言|APP|下载|资讯|新闻|动态';
const TAB_EXCLUDE = '猜你|喜欢|APP|下载|剧情|热播';
const OCR_RETRY = 3;//ocr验证重试次数
// const OCR_API = 'http://dm.mudery.com:10000';//ocr在线识别接口
// const OCR_API = 'http://192.168.3.239:5705/parse/ocr';//ocr在线识别接口
const OCR_API = 'http://cms.nokia.press/parse/ocr';//ocr在线识别接口
if (typeof (MY_URL) === 'undefined') {
    var MY_URL; // 全局注入变量,pd函数需要
}
var RKEY; // 源的唯一标识
var fetch;
var print;
var log;
var rule_fetch_params;
var fetch_params; // 每个位置单独的
var oheaders;
var _pdfh;
var _pdfa;
var _pd;
// const DOM_CHECK_ATTR = ['url', 'src', 'href', 'data-original', 'data-src'];
const DOM_CHECK_ATTR = /(url|src|href|data-original|data-src)$/;
const SELECT_REGEX = /:eq|:lt|:gt|#/g;
const SELECT_REGEX_A = /:eq|:lt|:gt/g;

function setResult(d) {
    if (!Array.isArray(d)) {
        return []
    }
    VODS = [];
    // print(d);
    d.forEach(function (it) {
        let obj = {
            vod_id: it.url || '',
            vod_name: it.title || '',
            vod_remarks: it.desc || '',
            vod_content: it.content || '',
            vod_pic: it.pic_url || it.img || '',
        };
        let keys = Object.keys(it);
        if (keys.includes('tname')) {
            obj.type_name = it.tname || '';
        }
        if (keys.includes('tid')) {
            obj.type_id = it.tid || '';
        }
        if (keys.includes('year')) {
            obj.vod_year = it.year || '';
        }
        if (keys.includes('actor')) {
            obj.vod_actor = it.actor || '';
        }
        if (keys.includes('director')) {
            obj.vod_director = it.director || '';
        }
        if (keys.includes('area')) {
            obj.vod_area = it.area || '';
        }
        VODS.push(obj);
    });
    return VODS
}
function setResult2(res) {
    VODS = res.list || [];
    return VODS
}
function setHomeResult(res) {
    if (!res || typeof (res) !== 'object') {
        return []
    }
    return setResult(res.list);
}
// 猫了个咪
function rc(js) {
    if (js === 'maomi_aes.js') {
        var a = CryptoJS.enc.Utf8.parse("625222f9149e961d");
        var t = CryptoJS.enc.Utf8.parse("5efdtf6060e2o330");
        return {
            De: function (word) {
                word = CryptoJS.enc.Hex.parse(word)
                return CryptoJS.AES.decrypt(CryptoJS.enc.Base64.stringify(word), a, {
                    iv: t,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                }).toString(CryptoJS.enc.Utf8)
            },
            En: function (word) {
                // print(a);
                // print(word);
                var Encrypted = CryptoJS.AES.encrypt(word, a, {
                    iv: t,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                });
                return Encrypted.ciphertext.toString();
            }
        };
    }
    return {};
}

// 千万不要用for in 推荐 forEach (for in 会打乱顺序)
//猫函数
function maoss(jxurl, ref, key) {
    eval(getCryptoJS());
    try {
        var getVideoInfo = function (text) {
            return CryptoJS.AES.decrypt(text, key, { iv: iv, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8);
        };
        var token_key = key == undefined ? 'dvyYRQlnPRCMdQSe' : key;
        if (ref) {
            var html = request(jxurl, {
                headers: {
                    'Referer': ref
                }
            });
        } else {
            var html = request(jxurl);
        }
        // print(html);
        if (html.indexOf('&btwaf=') != -1) {
            html = request(jxurl + '&btwaf' + html.match(/&btwaf(.*?)"/)[1], {
                headers: {
                    'Referer': ref
                }
            })
        }
        var token_iv = html.split('_token = "')[1].split('"')[0];
        var key = CryptoJS.enc.Utf8.parse(token_key);
        var iv = CryptoJS.enc.Utf8.parse(token_iv);
        // log("iv:"+iv);
        //  log(html);
        // print(key);
        // print(iv);
        eval(html.match(/var config = {[\s\S]*?}/)[0] + '');
        // config.url = config.url.replace(/,/g,'');
        // print(config.url);
        if (!config.url.startsWith('http')) {
            //config.url = decodeURIComponent(AES(config.url, key, iv));
            config.url = CryptoJS.AES.decrypt(config.url, key, {
                iv: iv,
                padding: CryptoJS.pad.Pkcs7
            }).toString(CryptoJS.enc.Utf8)
        }
        return config.url;
    } catch (e) {
        return '';
    }
}

let VODS = [];// 一级或者搜索需要的数据列表
let VOD = {};// 二级的单个数据

/**
 * 重写pd方法-增加自动urljoin(没法重写,改个名继续骗)
 * @param html
 * @param parse
 * @param uri
 * @returns {*}
 */
function pD(html, parse, uri) {
    let ret = pdfh(html, parse);
    if (typeof (uri) === 'undefined' || !uri) {
        uri = '';
    }
    if (DOM_CHECK_ATTR.test(parse)) {
        if (/http/.test(ret)) {
            ret = ret.substr(ret.indexOf('http'));
        } else {
            ret = urljoin(MY_URL, ret)
        }
    }
    // MY_URL = getItem('MY_URL',MY_URL);
    // console.log(`规则${RKEY}打印MY_URL:${MY_URL},uri:${uri}`);
    return ret
}

const parseTags = {
    jsp: {
        pdfh: pdfh,
        pdfa: pdfa,
        pd: pD,
    },
    json: {
        pdfh(html, parse) {
            if (!parse || !parse.trim()) {
                return '';
            }
            if (typeof (html) === 'string') {
                html = JSON.parse(html);
            }
            parse = parse.trim();
            if (!parse.startsWith('$.')) {
                parse = '$.' + parse;
            }
            parse = parse.split('||');
            for (let ps of parse) {
                let ret = cheerio.jp(ps, html);
                if (Array.isArray(ret)) {
                    ret = ret[0] || '';
                } else {
                    ret = ret || ''
                }
                if (ret && typeof (ret) !== 'string') {
                    ret = ret.toString();
                }
                if (ret) {
                    return ret
                }
            }
            return '';
        },
        pdfa(html, parse) {
            if (!parse || !parse.trim()) {
                return '';
            }
            if (typeof (html) === 'string') {
                html = JSON.parse(html);
            }
            parse = parse.trim()
            if (!parse.startsWith('$.')) {
                parse = '$.' + parse;
            }
            let ret = cheerio.jp(parse, html);
            if (Array.isArray(ret) && Array.isArray(ret[0]) && ret.length === 1) {
                return ret[0] || []
            }
            return ret || []
        },
        pd(html, parse) {
            let ret = parseTags.json.pdfh(html, parse);
            if (ret) {
                return urljoin(MY_URL, ret);
            }
            return ret
        },
    },
    jq: {
        pdfh: pdfh,
        pdfa: pdfa,
        pd(html, parse, uri) {
            return parseTags.jq.pdfh(html, parse, MY_URL);
        },
    },
    getParse(p0) {//非js开头的情况自动获取解析标签
        if (p0.startsWith('jsp:')) {
            return this.jsp
        } else if (p0.startsWith('json:')) {
            return this.json
        } else if (p0.startsWith('jq:')) {
            return this.jq
        } else {
            return this.jq
        }
    }
};

const stringify = JSON.stringify;
const jsp = parseTags.jsp;

/*** 后台需要实现的java方法并注入到js中 ***/

/**
 * 读取本地文件->应用程序目录
 * @param filePath
 * @returns {string}
 */
function readFile(filePath) {
    filePath = filePath || './uri.min.js';
    var fd = os.open(filePath);
    var buffer = new ArrayBuffer(1024);
    var len = os.read(fd, buffer, 0, 1024);
    console.log(len);
    let text = String.fromCharCode.apply(null, new Uint8Array(buffer));
    console.log(text);
    return text
}

/**
 * 处理返回的json数据
 * @param html
 * @returns {*}
 */
function dealJson(html) {
    try {
        return html.match(/[\w|\W|\s|\S]*?(\{[\w|\W|\s|\S]*\})/).group[1];
    } catch (e) {
    }
    try {
        html = JSON.parse(html);
    } catch (e) { }
    // console.log(typeof(html));
    return html;
}

/**
 * 验证码识别逻辑,需要java实现(js没有bytes类型,无法调用后端的传递图片二进制获取验证码文本的接口)
 * @type {{api: string, classification: (function(*=): string)}}
 */
var OcrApi = {
    api: OCR_API,
    classification: function (img) { // img是byte类型,这里不方便搞啊
        let code = '';
        try {
            let html = request(this.api, { data: { img: img }, headers: { 'User-Agent': PC_UA }, 'method': 'POST' });
            html = JSON.parse(html);
            code = html.url || '';
        } catch (e) { }
        return code
    }
};
/**
 * 验证码识别,暂未实现
 * @param url 验证码图片链接
 * @returns {string} 验证成功后的cookie
 */
function verifyCode(url) {
    let cnt = 0;
    let host = getHome(url);
    let cookie = '';
    while (cnt < OCR_RETRY) {
        try {
            // let obj = {headers:headers,timeout:timeout};
            let yzm_url = `${host}/index.php/verify/index.html`;
            console.log(`验证码链接:${yzm_url}`);
            let hhtml = request(yzm_url, { withHeaders: true, toBase64: true });
            let json = JSON.parse(hhtml);
            if (!cookie) {
                cookie = json['set-cookie'] ? json['set-cookie'].split(';')[0] : '';
            }
            // console.log(hhtml);
            console.log('cookie:' + cookie);
            let img = json.body;
            // console.log(img);
            let code = OcrApi.classification(img);
            console.log(`第${cnt + 1}次验证码识别结果:${code}`);
            let submit_url = `${host}/index.php/ajax/verify_check?type=search&verify=${code}`;
            console.log(submit_url);
            let html = request(submit_url, { headers: { Cookie: cookie, 'User-Agent': MOBILE_UA }, 'method': 'POST' });
            // console.log(html);
            html = JSON.parse(html);
            if (html.msg === 'ok') {
                console.log(`第${cnt + 1}次验证码提交成功`);
                return cookie // 需要返回cookie
            } else if (html.msg !== 'ok' && cnt + 1 >= OCR_RETRY) {
                cookie = ''; // 需要清空返回cookie
            }
        } catch (e) {
            console.log(`第${cnt + 1}次验证码提交失败:${e.message}`);
            if (cnt + 1 >= OCR_RETRY) {
                cookie = '';
            }
        }
        cnt += 1
    }
    return cookie
}

/**
 * 存在数据库配置表里, key字段对应值value,没有就新增,有就更新,调用此方法会清除key对应的内存缓存
 * @param k 键
 * @param v 值
 */
function setItem(k, v) {
    local.set(RKEY, k, v);
    console.log(`规则${RKEY}设置${k} => ${v}`)
}

/**
 *  获取数据库配置表对应的key字段的value，没有这个key就返回value默认传参.需要有缓存,第一次获取后会存在内存里
 * @param k 键
 * @param v 值
 * @returns {*}
 */
function getItem(k, v) {
    return local.get(RKEY, k) || v;
}

/**
 *  删除数据库key对应的一条数据,并清除此key对应的内存缓存
 * @param k
 */
function clearItem(k) {
    local.delete(RKEY, k);
}

/*** js自封装的方法 ***/

/**
 * 获取链接的host(带http协议的完整链接)
 * @param url 任意一个正常完整的Url,自动提取根
 * @returns {string}
 */
function getHome(url) {
    if (!url) {
        return ''
    }
    let tmp = url.split('//');
    url = tmp[0] + '//' + tmp[1].split('/')[0];
    try {
        url = decodeURIComponent(url);
    } catch (e) { }
    return url
}

/**
 * get参数编译链接,类似python params字典自动拼接
 * @param url 访问链接
 * @param obj 参数字典
 * @returns {*}
 */
function buildUrl(url, obj) {
    obj = obj || {};
    if (url.indexOf('?') < 0) {
        url += '?'
    }
    let param_list = [];
    let keys = Object.keys(obj);
    keys.forEach(it => {
        param_list.push(it + '=' + obj[it])
    });
    let prs = param_list.join('&');
    if (keys.length > 0 && !url.endsWith('?')) {
        url += '&'
    }
    url += prs;
    return url
}

/**
 * 远程依赖执行函数
 * @param url 远程js地址
 */
function require(url) {
    eval(request(url));
}
/**
 * 海阔网页请求函数完整封装
 * @param url 请求链接
 * @param obj 请求对象 {headers:{},method:'',timeout:5000,body:'',withHeaders:false}
 * @returns {string|string|DocumentFragment|*}
 */
function request(url, obj) {
    if (typeof (obj) === 'undefined' || !obj || obj === {}) {
        if (!fetch_params || !fetch_params.headers) {
            let headers = {
                'User-Agent': MOBILE_UA,
            };
            if (rule.headers) {
                Object.assign(headers, rule.headers);
            }
            fetch_params.headers = headers;
        }
        if (!fetch_params.headers.Referer) {
            fetch_params.headers.Referer = getHome(url)
        }
        obj = fetch_params;
    } else {
        let headers = obj.headers || {};
        let keys = Object.keys(headers).map(it => it.toLowerCase());
        if (!keys.includes('user-agent')) {
            headers['User-Agent'] = MOBILE_UA;
        } if (!keys.includes('referer')) {
            headers['Referer'] = getHome(url);
        }
        obj.headers = headers;
    }
    console.log(JSON.stringify(obj.headers));
    if (typeof (obj.headers.body) != 'undefined' && obj.headers.body && typeof (obj.headers.body) === 'string') {
        let data = {};
        obj.headers.body.split('&').forEach(it => {
            data[it.split('=')[0]] = it.split('=')[1]
        });
        obj.data = data;
        delete obj.headers.body
    }
    if (!url) {
        return obj.withHeaders ? '{}' : ''
    }
    if (obj.toBase64) { // 返回base64,用于请求图片
        obj.buffer = 2;
        delete obj.toBase64
    }
    console.log('request:' + url);
    let res = req(url, obj);
    let html = res.content || '';
    // console.log(html);
    if (obj.withHeaders) {
        let htmlWithHeaders = res.headers;
        htmlWithHeaders.body = html;
        return JSON.stringify(htmlWithHeaders);
    } else {
        return html
    }
}

fetch = request;
print = function (data) {
    data = data || '';
    if (typeof (data) !== 'string') {
        try {
            data = JSON.stringify(data);
        } catch (e) {
            console.log('print:' + e.message)
        }
    }
    console.log(data);
}
log = console.log;
/**
 * 检查宝塔验证并自动跳过获取正确源码
 * @param html 之前获取的html
 * @param url 之前的来源url
 * @param obj 来源obj
 * @returns {string|DocumentFragment|*}
 */
function checkHtml(html, url, obj) {
    if (/\?btwaf=/.test(html)) {
        let btwaf = html.match(/btwaf(.*?)"/)[1];
        url = url.split('#')[0] + '?btwaf' + btwaf;
        html = request(url, obj);
    }
    return html
}

/**
 *  带一次宝塔验证的源码获取
 * @param url 请求链接
 * @param obj 请求参数
 * @returns {string|DocumentFragment}
 */
function getCode(url, obj) {
    let html = request(url, obj);
    html = checkHtml(html, url, obj);
    return html
}

/**
 * 源rule专用的请求方法,自动注入cookie
 * @param url 请求链接
 * @returns {string|DocumentFragment}
 */
function getHtml(url) {
    let obj = {};
    if (rule.headers) {
        obj.headers = rule.headers;
    }
    let cookie = getItem(RULE_CK, '');
    if (cookie) {
        if (obj.headers && !Object.keys(obj.headers).map(it => it.toLowerCase()).includes('cookie')) {
            obj.headers['Cookie'] = cookie;
        } else if (!obj.headers) {
            obj.headers = { Cookie: cookie };
        }
    }
    let html = getCode(url, obj);
    return html
}

/**
 * 首页分类解析，筛选暂未实现
 * @param homeObj 首页传参对象
 * @returns {string}
 */
function homeParse(homeObj) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let classes = [];
    if (homeObj.class_name && homeObj.class_url) {
        let names = homeObj.class_name.split('&');
        let urls = homeObj.class_url.split('&');
        let cnt = Math.min(names.length, urls.length);
        for (let i = 0; i < cnt; i++) {
            classes.push({
                'type_id': urls[i],
                'type_name': names[i]
            });
        }
    }

    if (homeObj.class_parse) {
        let p = homeObj.class_parse.split(';');
        if (p.length >= 4) {
            try {
                let html = getHtml(homeObj.MY_URL);
                if (html) {
                    homeHtmlCache = html;
                    let list = pdfa(html, p[0]);
                    if (list && list.length > 0) {
                        list.forEach((it, idex) => {
                            try {
                                let name = pdfh(it, p[1]);
                                if (homeObj.cate_exclude && (new RegExp(homeObj.cate_exclude).test(name))) {
                                    return;
                                }
                                let url = pdfh(it, p[2]);
                                if (p[3]) {
                                    let exp = new RegExp(p[3]);
                                    url = url.match(exp)[1];
                                }

                                classes.push({
                                    'type_id': url.trim(),
                                    'type_name': name.trim()
                                });
                            } catch (e) {
                                console.log(`分类列表定位第${idex}个元素正常报错:${e.message}`);
                            }
                        });
                    }
                }
            } catch (e) {
                console.log(e.message);
            }

        }
    }
    // 排除分类
    classes = classes.filter(it => !homeObj.cate_exclude || !(new RegExp(homeObj.cate_exclude).test(it.type_name)));
    let resp = {
        'class': classes
    };
    if (homeObj.filter) {
        resp.filters = homeObj.filter;
    }
    console.log(JSON.stringify(resp));
    return JSON.stringify(resp);

}

/**
 *  首页推荐列表解析
 * @param homeVodObj
 * @returns {string}
 */
function homeVodParse(homeVodObj) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let d = [];
    MY_URL = homeVodObj.homeUrl;
    // setItem('MY_URL',MY_URL);
    console.log(MY_URL);
    let p = homeVodObj.推荐;
    if (!p || typeof (p) !== 'string') {
        return '{}'
    }
    p = p.trim();
    if (p.startsWith('js:')) {
        const TYPE = 'home';
        var input = MY_URL;
        const HOST = rule.host;
        eval(p.replace('js:', ''));
        d = VODS;
    } else {
        p = p.split(';');
        if (!homeVodObj.double && p.length < 5) {
            return '{}'
        } else if (homeVodObj.double && p.length < 6) {
            return '{}'
        }
        let _ps = parseTags.getParse(p[0]);
        _pdfa = _ps.pdfa;
        _pdfh = _ps.pdfh;
        _pd = _ps.pd;
        let is_json = p[0].startsWith('json:');
        p[0] = p[0].replace(/^(jsp:|json:|jq:)/, '');
        // print(p[0]);
        let html = homeHtmlCache || getHtml(MY_URL);
        homeHtmlCache = undefined;
        if (is_json) {
            html = dealJson(html);
        }
        try {
            console.log('double:' + homeVodObj.double);
            if (homeVodObj.double) {
                let items = _pdfa(html, p[0]);
                // console.log(items.length);
                for (let item of items) {
                    // console.log(p[1]);
                    let items2 = _pdfa(item, p[1]);
                    // console.log(items2.length);
                    for (let item2 of items2) {
                        try {
                            let title = _pdfh(item2, p[2]);
                            let img = '';
                            try {
                                img = _pd(item2, p[3])
                            } catch (e) {
                            }
                            let desc = _pdfh(item2, p[4]);
                            let links = [];
                            for (let p5 of p[5].split('+')) {
                                let link = !homeVodObj.detailUrl ? _pd(item2, p5, MY_URL) : _pdfh(item2, p5);
                                links.push(link);
                            }
                            let vod = {
                                vod_name: title,
                                vod_pic: img,
                                vod_remarks: desc,
                                vod_id: links.join('$')
                            };
                            // print(vod);
                            d.push(vod);
                        } catch (e) {
                            console.log('首页列表处理发生错误:' + e.message);
                        }

                    }
                }
            } else {
                let items = _pdfa(html, p[0]);
                for (let item of items) {
                    try {
                        let title = _pdfh(item, p[1]);
                        let img = '';
                        try {
                            img = _pd(item, p[2], MY_URL);
                        } catch (e) {

                        }
                        let desc = _pdfh(item, p[3]);
                        let links = [];
                        for (let p5 of p[4].split('+')) {
                            let link = !homeVodObj.detailUrl ? _pd(item, p5, MY_URL) : _pdfh(item, p5);
                            links.push(link);
                        }
                        let vod = {
                            vod_name: title,
                            vod_pic: img,
                            vod_remarks: desc,
                            vod_id: links.join('$')
                        };
                        d.push(vod);

                    } catch (e) {

                    }

                }

            }

        } catch (e) {

        }
    }
    // console.log(JSON.stringify(d));
    return JSON.stringify({
        list: d
    })
}

/**
 * 一级分类页数据解析
 * @param cateObj
 * @returns {string}
 */
function categoryParse(cateObj) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let p = cateObj.一级;
    if (!p || typeof (p) !== 'string') {
        return '{}'
    }
    let d = [];
    // let url = cateObj.url.replaceAll('fyclass', cateObj.tid).replaceAll('fypage', cateObj.pg);
    let url = cateObj.url.replaceAll('fyclass', cateObj.tid);
    if (rule.filter_url) {
        if (!/fyfilter/.test(url)) {
            if (!url.endsWith('&') && !rule.filter_url.startsWith('&')) {
                url += '&'
            }
            url += rule.filter_url;
        } else {
            url = url.replace('fyfilter', rule.filter_url);
        }
        // console.log('filter:'+cateObj.filter);
        let fl = cateObj.filter ? cateObj.extend : {};
        let new_url;
        new_url = cheerio.jinja2(url, { fl: fl });
        // if (/object Object/.test(new_url)) {
        //     new_url = drT.renderText(url, fl);
        // }
        url = new_url;
    }
    if (/fypage/.test(url)) {
        if (url.includes('(') && url.includes(')')) {
            let url_rep = url.match(/.*?\((.*)\)/)[1];
            // console.log(url_rep);
            let cnt_page = url_rep.replaceAll('fypage', cateObj.pg);
            // console.log(cnt_page);
            let cnt_pg = eval(cnt_page);
            // console.log(cnt_pg);
            url = url.replaceAll(url_rep, cnt_pg).replaceAll('(', '').replaceAll(')', '');
        } else {
            url = url.replaceAll('fypage', cateObj.pg);
        }
    }
    if (cateObj.pg === 1 && url.includes('[') && url.includes(']')) {
        url = url.split('[')[1].split(']')[0];
    }
    MY_URL = url;
    // setItem('MY_URL',MY_URL);
    console.log(MY_URL);
    p = p.trim();
    const MY_CATE = cateObj.tid;
    if (p.startsWith('js:')) {
        var MY_FL = cateObj.extend;
        const TYPE = 'cate';
        var input = MY_URL;
        const MY_PAGE = cateObj.pg;
        var desc = '';
        eval(p.trim().replace('js:', ''));
        d = VODS;
    } else {
        p = p.split(';');
        if (p.length < 5) {
            return '{}'
        }
        let _ps = parseTags.getParse(p[0]);
        _pdfa = _ps.pdfa;
        _pdfh = _ps.pdfh;
        _pd = _ps.pd;
        let is_json = p[0].startsWith('json:');
        p[0] = p[0].replace(/^(jsp:|json:|jq:)/, '');
        try {
            let html = getHtml(MY_URL);
            if (html) {
                if (is_json) {
                    html = dealJson(html);
                }
                let list = _pdfa(html, p[0]);
                list.forEach(it => {
                    let links = p[4].split('+').map(p4 => {
                        return !rule.detailUrl ? _pd(it, p4, MY_URL) : _pdfh(it, p4);
                    });
                    let link = links.join('$');
                    let vod_id = rule.detailUrl ? MY_CATE + '$' + link : link;
                    d.push({
                        'vod_id': vod_id,
                        'vod_name': _pdfh(it, p[1]).replace(/\n|\t/g, '').trim(),
                        'vod_pic': _pd(it, p[2], MY_URL),
                        'vod_remarks': _pdfh(it, p[3]).replace(/\n|\t/g, '').trim(),
                    });
                });
            }
        } catch (e) {
            console.log(e.message);
        }
    }
    // print(d);
    return d.length < 1 ? '{}' : JSON.stringify({
        'page': parseInt(cateObj.pg),
        'pagecount': 999,
        'limit': 20,
        'total': 999,
        'list': d,
    });
}

/**
 * 搜索列表数据解析
 * @param searchObj
 * @returns {string}
 */
function searchParse(searchObj) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let d = [];
    if (!searchObj.searchUrl) {
        return '{}'
    }
    let p = searchObj.搜索 === '*' && rule.一级 ? rule.一级 : searchObj.搜索;
    if (!p || typeof (p) !== 'string') {
        return '{}'
    }
    p = p.trim();
    let url = searchObj.searchUrl.replaceAll('**', searchObj.wd).replaceAll('fypage', searchObj.pg);
    MY_URL = url;
    console.log(MY_URL);
    // setItem('MY_URL',MY_URL);
    if (p.startsWith('js:')) {
        const TYPE = 'search';
        const MY_PAGE = searchObj.pg;
        const KEY = searchObj.wd;
        var input = MY_URL;
        var detailUrl = rule.detailUrl || '';
        eval(p.trim().replace('js:', ''));
        d = VODS;
    } else {
        p = p.split(';');
        if (p.length < 5) {
            return '{}'
        }
        let _ps = parseTags.getParse(p[0]);
        _pdfa = _ps.pdfa;
        _pdfh = _ps.pdfh;
        _pd = _ps.pd;
        let is_json = p[0].startsWith('json:');
        p[0] = p[0].replace(/^(jsp:|json:|jq:)/, '');
        try {
            let html = getHtml(MY_URL);
            if (html) {
                if (/系统安全验证|输入验证码/.test(html)) {
                    let cookie = verifyCode(MY_URL);
                    if (cookie) {
                        console.log(`本次成功过验证,cookie:${cookie}`);
                        setItem(RULE_CK, cookie);
                    } else {
                        console.log(`本次自动过搜索验证失败,cookie:${cookie}`);
                    }
                    // obj.headers['Cookie'] = cookie;
                    html = getHtml(MY_URL);
                }
                if (!html.includes(searchObj.wd)) {
                    console.log('搜索结果源码未包含关键字,疑似搜索失败,正为您打印结果源码');
                    console.log(html);
                }
                if (is_json) {
                    html = dealJson(html);
                }
                let list = _pdfa(html, p[0]);
                list.forEach(it => {
                    let links = p[4].split('+').map(p4 => {
                        return !rule.detailUrl ? _pd(it, p4, MY_URL) : _pdfh(it, p4)
                    });

                    let link = links.join('$');
                    let ob = {
                        'vod_id': link,
                        'vod_name': _pdfh(it, p[1]).replace(/\n|\t/g, '').trim(),
                        'vod_pic': _pd(it, p[2], MY_URL),
                        'vod_remarks': _pdfh(it, p[3]).replace(/\n|\t/g, '').trim(),
                    };
                    if (p.length > 5 && p[5]) {
                        ob.vod_content = _pdfh(it, p[5]);
                    }
                    d.push(ob);
                });

            }
        } catch (e) {
            return '{}'
        }

    }
    return JSON.stringify({
        'page': parseInt(searchObj.pg),
        'pagecount': 10,
        'limit': 20,
        'total': 100,
        'list': d,
    });
}

/**
 * 二级详情页数据解析
 * @param detailObj
 * @returns {string}
 */
function detailParse(detailObj) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let vod = {
        vod_id: detailObj.orId, //"id",
        vod_name: "片名",
        vod_pic: "",
        type_name: "剧情",
        vod_year: "年份",
        vod_area: "地区",
        vod_remarks: "更新信息",
        vod_actor: "主演",
        vod_director: "导演",
        vod_content: "简介"
    };
    let p = detailObj.二级;
    let url = detailObj.url;
    let detailUrl = detailObj.detailUrl;
    let fyclass = detailObj.fyclass;
    let tab_exclude = detailObj.tab_exclude;
    let html = detailObj.html || '';
    MY_URL = url;
    console.log(MY_URL);
    // setItem('MY_URL',MY_URL);
    if (p === '*') {
        vod.vod_play_from = '道长在线';
        vod.vod_remarks = detailUrl;
        vod.vod_actor = '没有二级,只有一级链接直接嗅探播放';
        vod.vod_content = MY_URL;
        vod.vod_play_url = '嗅探播放$' + MY_URL;
    } else if (typeof (p) === 'string' && p.trim().startsWith('js:')) {
        const TYPE = 'detail';
        var input = MY_URL;
        eval(p.trim().replace('js:', ''));
        vod = VOD;
        console.log(JSON.stringify(vod));
    } else if (p && typeof (p) === 'object') {
        if (!html) {
            html = getHtml(MY_URL);
        }
        let _impJQP = true;
        let _ps;
        if (p.is_json) {
            _ps = parseTags.json;
            html = dealJson(html);
            _impJQP = false;
        } else if (p.is_jsp) {
            _ps = parseTags.jsp;
        } else if (p.is_jq) {
            _ps = parseTags.jq;
        } else {
            _ps = parseTags.jq;
        }
        if (_impJQP) {
            let c$ = cheerio.load(html);
            html = { rr: c$, ele: c$('html')[0] }
        }
        _pdfa = _ps.pdfa;
        _pdfh = _ps.pdfh;
        _pd = _ps.pd;
        if (p.title) {
            let p1 = p.title.split(';');
            vod.vod_name = _pdfh(html, p1[0]).replace(/\n|\t/g, '').trim();
            let type_name = p1.length > 1 ? _pdfh(html, p1[1]).replace(/\n|\t/g, '').replace(/ /g, '').trim() : '';
            vod.type_name = type_name || vod.type_name;
        }
        if (p.desc) {
            try {
                let p1 = p.desc.split(';');
                vod.vod_remarks = _pdfh(html, p1[0]).replace(/\n|\t/g, '').trim();
                vod.vod_year = p1.length > 1 ? _pdfh(html, p1[1]).replace(/\n|\t/g, '').trim() : '';
                vod.vod_area = p1.length > 2 ? _pdfh(html, p1[2]).replace(/\n|\t/g, '').trim() : '';
                // vod.vod_actor = p1.length > 3 ? _pdfh(html, p1[3]).replaceAll('\n', ' ').trim():'';
                vod.vod_actor = p1.length > 3 ? _pdfh(html, p1[3]).replace(/\n|\t/g, '').trim() : '';
                vod.vod_director = p1.length > 4 ? _pdfh(html, p1[4]).replace(/\n|\t/g, '').trim() : '';
            }
            catch (e) {

            }
        }
        if (p.content) {
            try {
                let p1 = p.content.split(';');
                vod.vod_content = _pdfh(html, p1[0]).replace(/\n|\t/g, '').trim();
            }
            catch (e) { }
        }
        if (p.img) {
            try {
                let p1 = p.img.split(';');
                vod.vod_pic = _pd(html, p1[0], MY_URL);
            }
            catch (e) { }
        }

        let vod_play_from = '$$$';
        let playFrom = [];
        if (p.重定向 && p.重定向.startsWith('js:')) {
            html = eval(p.重定向.replace('js:', ''));
            if (_impJQP) {
                let c$ = cheerio.load(html);
                html = { rr: c$, ele: c$('html')[0] }
            }
        }

        // console.log(2);
        if (p.tabs) {
            let p_tab = p.tabs.split(';')[0];
            console.log(p_tab);
            let vHeader = _pdfa(html, p_tab);

            console.log(vHeader.length);
            for (let v of vHeader) {
                let v_title = _pdfh(v, 'body&&Text');
                console.log(v_title);
                if (tab_exclude && (new RegExp(tab_exclude)).test(v_title)) {
                    continue;
                }
                playFrom.push(v_title);
            }
            console.log(JSON.stringify(playFrom));
        } else {
            playFrom = ['道长在线']
        }
        vod.vod_play_from = playFrom.join(vod_play_from);

        // console.log(3);
        let vod_play_url = '$$$';
        let vod_tab_list = [];
        if (p.lists) {
            for (let i = 0; i < playFrom.length; i++) {
                let tab_name = playFrom[i];
                let tab_ext = p.tabs.split(';').length > 1 ? p.tabs.split(';')[1] : '';
                let p1 = p.lists.replaceAll('#idv', tab_name).replaceAll('#id', i);
                tab_ext = tab_ext.replaceAll('#idv', tab_name).replaceAll('#id', i);
                console.log(p1);
                // console.log(html);
                let vodList = [];
                try {
                    vodList = _pdfa(html, p1);
                    console.log('len(vodList):' + vodList.length);
                } catch (e) {
                    // console.log(e.message);
                }
                let new_vod_list = [];
                let tabName = tab_ext ? _pdfh(html, tab_ext) : tab_name;
                console.log(tabName);
                // console.log('cheerio解析Text');
                vodList.forEach(it => {
                    // 请注意,这里要固定pdfh解析body&&Text,不需要下划线,没写错
                    // new_vod_list.push(pdfh(it,'body&&Text')+'$'+_pd(it,'a&&href',MY_URL));
                    // new_vod_list.push(cheerio.load(it).text() + '$' + _pd(it, 'a&&href', MY_URL));
                    new_vod_list.push(_pdfh(it, 'body&&Text') + '$' + _pd(it, 'a&&href', MY_URL));
                });
                let vlist = new_vod_list.join('#');
                vod_tab_list.push(vlist);
            }
        }
        vod.vod_play_url = vod_tab_list.join(vod_play_url);
    }
    // print(vod);
    return JSON.stringify({
        list: [vod]
    })
}

/**
 * 选集播放点击事件解析
 * @param playObj
 * @returns {string}
 */
function playParse(playObj) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    MY_URL = playObj.url;
    if (!/http/.test(MY_URL)) {
        try {
            MY_URL = base64Decode(MY_URL);
        } catch (e) { }
    }
    MY_URL = decodeURIComponent(MY_URL);
    var input = MY_URL;//注入给免嗅js
    let common_play = {
        parse: 1,
        url: input
    };
    let lazy_play;
    if (!rule.play_parse || !rule.lazy) {
        lazy_play = common_play;
    } else if (rule.play_parse && rule.lazy && typeof (rule.lazy) === 'string') {
        try {
            let lazy_code = rule.lazy.replace('js:', '').trim();
            print('开始执行js免嗅=>' + lazy_code);
            eval(lazy_code);
            lazy_play = typeof (input) === 'object' ? input : {
                parse: 1,
                jx: 1,
                url: input
            };
        } catch (e) {
            print('js免嗅错误:' + e.message);
            lazy_play = common_play;
        }
    } else {
        lazy_play = common_play;
    }
    console.log(JSON.stringify(lazy_play));
    return JSON.stringify(lazy_play);
}

/**
 * js源预处理特定返回对象中的函数
 * @param ext
 */
function init(ext) {
    console.log('init');
    try {
        // make shared jsContext happy        
        if (typeof (globalThis.mubanJs) === 'undefined') {
            let mubanJs = request('https://gitcode.net/qq_32394351/dr_py/-/raw/master/js/模板.js', { 'User-Agent': MOBILE_UA });
            mubanJs = mubanJs.replace('export default', '(function() {return muban;}()) // export default');
            globalThis.mubanJs = mubanJs;
        }
        let muban = eval(globalThis.mubanJs);
        if (typeof ext == 'object') {
            rule = ext;
            if (rule.template) {
                rule = Object.assign(muban[rule.template], rule);
            }
        } else if (typeof ext == 'string') {
            if (ext.startsWith('http')) {
                let js = request(ext, { 'method': 'GET' });
                if (js) {
                    eval(js.replace('var rule', 'rule'));
                }
            }
        } else {
            eval(ext.replace('var rule', 'rule'));
        }
        /** 处理一下 rule规则关键字段没传递的情况 **/
        let rule_cate_excludes = (rule.cate_exclude || '').split('|').filter(it => it.trim());
        let rule_tab_excludes = (rule.tab_exclude || '').split('|').filter(it => it.trim());
        rule_cate_excludes = rule_cate_excludes.concat(CATE_EXCLUDE.split('|').filter(it => it.trim()));
        rule_tab_excludes = rule_tab_excludes.concat(TAB_EXCLUDE.split('|').filter(it => it.trim()));

        rule.cate_exclude = rule_cate_excludes.join('|');
        rule.tab_exclude = rule_tab_excludes.join('|');
        rule.host = (rule.host || '').rstrip('/');
        rule.url = rule.url || '';
        rule.double = rule.double || false;
        rule.homeUrl = rule.homeUrl || '';
        rule.detailUrl = rule.detailUrl || '';
        rule.searchUrl = rule.searchUrl || '';
        rule.homeUrl = rule.host && rule.homeUrl ? urljoin(rule.host, rule.homeUrl) : (rule.homeUrl || rule.host);
        rule.detailUrl = rule.host && rule.detailUrl ? urljoin(rule.host, rule.detailUrl) : rule.detailUrl;
        if (rule.url.includes('[') && rule.url.includes(']')) {
            let u1 = rule.url.split('[')[0]
            let u2 = rule.url.split('[')[1].split(']')[0]
            rule.url = rule.host && rule.url ? urljoin(rule.host, u1) + '[' + urljoin(rule.host, u2) + ']' : rule.url;
        } else {
            rule.url = rule.host && rule.url ? urljoin(rule.host, rule.url) : rule.url;
        }
        rule.searchUrl = rule.host && rule.searchUrl ? urljoin(rule.host, rule.searchUrl) : rule.searchUrl;

        rule.timeout = rule.timeout || 5000;
        rule.encoding = rule.编码 || rule.encoding || 'utf-8';
        if (rule.headers && typeof (rule.headers) === 'object') {
            try {
                let header_keys = Object.keys(rule.headers);
                for (let k of header_keys) {
                    if (k.toLowerCase() === 'user-agent') {
                        let v = rule.headers[k];
                        console.log(v);
                        if (['MOBILE_UA', 'PC_UA', 'UC_UA', 'IOS_UA', 'UA'].includes(v)) {
                            rule.headers[k] = eval(v);
                        }
                    }
                }
            } catch (e) {
                console.log('处理headers发生错误:' + e.message);
            }
        }
        // print(rule.headers);
        rule_fetch_params = { 'headers': rule.headers || false, 'timeout': rule.timeout, 'encoding': rule.encoding };
        oheaders = rule.headers || {};
        RKEY = typeof (key) !== 'undefined' && key ? key : 'drpy_' + (rule.title || rule.host);
        init_test();
    } catch (e) {
        console.log('init_test发生错误:' + e.message);
    }
}

let homeHtmlCache = undefined;

/**
 * js源获取首页分类和筛选特定返回对象中的函数
 * @param filter 筛选条件字典对象
 * @returns {string}
 */
function home(filter) {
    console.log("home");
    let homeObj = {
        filter: rule.filter || false,
        MY_URL: rule.homeUrl,
        class_name: rule.class_name || '',
        class_url: rule.class_url || '',
        class_parse: rule.class_parse || '',
        cate_exclude: rule.cate_exclude,
    };
    return homeParse(homeObj);
}

/**
 * js源获取首页推荐数据列表特定返回对象中的函数
 * @param params
 * @returns {string}
 */
function homeVod(params) {
    let homeVodObj = {
        推荐: rule.推荐,
        double: rule.double,
        homeUrl: rule.homeUrl,
        detailUrl: rule.detailUrl
    };
    return homeVodParse(homeVodObj)
    // return "{}";
}

/**
 * js源获取分类页一级数据列表特定返回对象中的函数
 * @param tid 分类id
 * @param pg 页数
 * @param filter 当前选中的筛选条件
 * @param extend 扩展
 * @returns {string}
 */
function category(tid, pg, filter, extend) {
    let cateObj = {
        url: rule.url,
        一级: rule.一级,
        tid: tid,
        pg: parseInt(pg),
        filter: filter,
        extend: extend
    };
    // console.log(JSON.stringify(extend));
    return categoryParse(cateObj)
}

/**
 * js源获取二级详情页数据特定返回对象中的函数
 * @param vod_url 一级列表中的vod_id或者是带分类的自拼接 vod_id 如 fyclass$vod_id
 * @returns {string}
 */
function detail(vod_url) {
    let orId = vod_url;
    let fyclass = '';
    if (vod_url.indexOf('$') > -1) {
        let tmp = vod_url.split('$');
        fyclass = tmp[0];
        vod_url = tmp[1];
    }
    let detailUrl = vod_url;
    let url;
    if (!detailUrl.startsWith('http') && !detailUrl.includes('/')) {
        url = rule.detailUrl.replaceAll('fyid', detailUrl).replaceAll('fyclass', fyclass);
    } else if (detailUrl.includes('/')) {
        url = urljoin(rule.homeUrl, detailUrl);
    } else {
        url = detailUrl
    }
    let detailObj = {
        orId: orId,
        url: url,
        二级: rule.二级,
        detailUrl: detailUrl,
        fyclass: fyclass,
        tab_exclude: rule.tab_exclude,
    }
    return detailParse(detailObj)
}

/**
 * js源选集按钮播放点击事件特定返回对象中的函数
 * @param flag 线路名
 * @param id 播放按钮的链接
 * @param flags 全局配置的flags是否需要解析的标识列表
 * @returns {string}
 */
function play(flag, id, flags) {
    let playObj = {
        url: id,
        flag: flag,
        flags: flags
    }
    return playParse(playObj);
}

/**
 * js源搜索返回的数据列表特定返回对象中的函数
 * @param wd 搜索关键字
 * @param quick 是否来自快速搜索
 * @returns {string}
 */
function search(wd, quick) {
    let searchObj = {
        searchUrl: rule.searchUrl,
        搜索: rule.搜索,
        wd: wd,
        //pg: pg,
        pg: 1,
        quick: quick,
    };
    // console.log(JSON.stringify(searchObj));
    return searchParse(searchObj)
}

function DRPY() {//导出函数
    return {
        init: init,
        home: home,
        homeVod: homeVod,
        category: category,
        detail: detail,
        play: play,
        search: search,
    }
}


let pd = pD;

// 导出函数对象
__JS_SPIDER__ = {
    init: init,
    home: home,
    homeVod: homeVod,
    category: category,
    detail: detail,
    play: play,
    search: search,
    DRPY: DRPY
}
