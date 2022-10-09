import 'assets://js/lib/uri.min.js'
import cheerio from 'assets://js/lib/cheerio.min.js';
import 'assets://js/lib/crypto-js.js'
import 'assets://js/lib/dayjs.min.js'
import _ from 'assets://js/lib/underscore-esm-min.js'

var charStr = 'abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789';
export function randIndex(min, max, i) {
    let index = Math.floor(Math.random() * (max - min + 1) + min),
        numStart = charStr.length - 10;
    if (i == 0 && index >= numStart) {
        index = randIndex(min, max, i);
    }
    return index;
}

export function randomStr(len) {
    let min = 0, max = charStr.length - 1, _str = '';
    len = len || 15;
    for (var i = 0, index; i < len; i++) {
        index = randIndex(min, max, i);
        _str += charStr[index];
    }
    return _str;
}
if (typeof Object.assign != 'function') {
    Object.assign = function () {
        var target = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
}
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        if (typeof start !== 'number') {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        value: function (searchElement, fromIndex) {

            if (this == null) {//this是空或者未定义，抛出错误
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);//将this转变成对象
            var len = o.length >>> 0;//无符号右移0位，获取对象length属性，如果未定义就会变成0

            if (len === 0) {//length为0直接返回false未找到目标值
                return false;
            }

            var n = fromIndex | 0;//查找起始索引
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);//计算正确起始索引，因为有可能是负值

            while (k < len) {//从起始索引处开始循环
                if (o[k] === searchElement) {//如果某一位置与寻找目标相等，返回true，找到了
                    return true;
                }
                k++;
            }
            return false;//未找到，返回false
        }
    });
}
if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (prefix) {
        return this.slice(0, prefix.length) === prefix;
    };
}
if (typeof String.prototype.endsWith != 'function') {
    String.prototype.endsWith = function (suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}
Object.prototype.myValues = function (obj) {
    if (obj == null) {
        throw new TypeError("Cannot convert undefined or null to object");
    }
    var res = []
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {//需判断是否是本身的属性
            res.push(obj[k]);
        }
    }
    return res;
}
if (typeof Object.prototype.values != 'function') {
    Object.prototype.values = function (obj) {
        if (obj == null) {
            throw new TypeError("Cannot convert undefined or null to object");
        }
        var res = []
        for (var k in obj) {
            if (obj.hasOwnProperty(k)) {//需判断是否是本身的属性
                res.push(obj[k]);
            }
        }
        return res;
    }
}
if (typeof Array.prototype.join != 'function') {
    Array.prototype.join = function (emoji) {
        // emoji = emoji||',';
        emoji = emoji || '';
        let self = this;
        let str = "";
        let i = 0;
        if (!Array.isArray(self)) { throw String(self) + 'is not Array' }
        if (self.length === 0) { return '' }
        if (self.length === 1) { return String(self[0]) }
        i = 1;
        str = this[0];
        for (; i < self.length; i++) {
            str += String(emoji) + String(self[i]);
        }
        return str;
    };
}

String.prototype.rstrip = function (chars) {
    let regex = new RegExp(chars + "$");
    return this.replace(regex, "");
};

Array.prototype.append = Array.prototype.push;
String.prototype.strip = String.prototype.trim;

export function 是否正版(vipUrl) {
    let flag = new RegExp('qq\.com|iqiyi\.com|youku\.com|mgtv\.com|bilibili\.com|sohu\.com|ixigua\.com|pptv\.com|miguvideo\.com|le\.com|1905\.com|fun\.tv');
    return flag.test(vipUrl);
}

export function urlDeal(vipUrl) {
    if (!vipUrl) {
        return ''
    }
    if (!是否正版(vipUrl)) {
        return vipUrl
    }
    if (!/miguvideo/.test(vipUrl)) {
        vipUrl = vipUrl.split('#')[0].split('?')[0];
    }
    return vipUrl
}

export function urlencode(str) {
    str = (str + '').toString();
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
        replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}

export function base64Encode(text) {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
}

export function base64Decode(text) {
    return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(text));
}

export function urljoin(base, url) {
    base = base || '';
    url = url || '';
    let baseU = new Uri(base.trim().rstrip('/'));
    url = url.trim().rstrip('/');
    let u = undefined;
    if (url.startsWith('http://') || url.startsWith('https://')) {
        u = new Uri(url);
    } else if (url.startsWith('://')) {
        u = new Uri(baseU.protocol() + url);
    } else if (url.startsWith('//')) {
        u = new Uri(baseU.protocol() + ':' + url);
    } else {
        u = new Uri(baseU.protocol() + '://' + baseU.host() + (baseU.port() ? ':' + baseU.port() : '') + '/' + url);
    }
    if ((!u.path() || u.path().trim().length === 0) && baseU.path())
        u.path(baseU.path());
    if (!u.query() && baseU.query())
        u.query(baseU.query());
    return u.toString();
}

export function md5(src) {
    return CryptoJS.MD5(src).toString();
}

const DOM_CHECK_ATTR = /(url|src|href|data-original|data-src)$/;
const SELECT_REGEX = /:eq|:lt|:gt|#/g;
const SELECT_REGEX_A = /:eq|:lt|:gt/g;

export function pdfh(html, parse, base_url) {
    if (!parse || !parse.trim()) {
        return ''
    }
    let eleFind = typeof html === 'object';
    let option = undefined;
    if (eleFind && parse.startsWith('body&&')) {
        parse = parse.substr(6);
        if (parse.indexOf('&&') < 0) {
            option = parse.trim();
            parse = '*=*';
        }
    }
    if (parse.indexOf('&&') > -1) {
        let sp = parse.split('&&');
        option = sp[sp.length - 1];
        sp.splice(sp.length - 1);
        if (sp.length > 1) {
            for (let i in sp) {
                if (!SELECT_REGEX.test(sp[i])) {
                    sp[i] = sp[i] + ':eq(0)';
                }
            }
        } else {
            if (!SELECT_REGEX.test(sp[0])) {
                sp[0] = sp[0] + ':eq(0)';
            }
        }
        parse = sp.join(' ');
    }
    let result = '';
    const $ = eleFind ? html.rr : cheerio.load(html);
    let ret = eleFind ? ((parse === '*=*' || $(html.ele).is(parse)) ? html.ele : $(html.ele).find(parse)) : $(parse);
    if (option) {
        if (option === 'Text') {
            result = $(ret).text();
        }
        else if (option === 'Html') {
            result = $(ret).html();
        }
        else {
            result = $(ret).attr(option);
        }
        if (result && base_url && DOM_CHECK_ATTR.test(option)) {
            if (/http/.test(result)) {
                result = result.substr(result.indexOf('http'));
            } else {
                result = urljoin(base_url, result)
            }
        }
    } else {
        result = $(ret).toString();
    }
    return result;
}

export function pdfa(html, parse) {
    if (!parse || !parse.trim()) {
        return [];
    }
    let eleFind = typeof html === 'object';
    if (parse.indexOf('&&') > -1) {
        let sp = parse.split('&&');
        for (let i in sp) {
            if (!SELECT_REGEX_A.test(sp[i]) && i < sp.length - 1) {
                sp[i] = sp[i] + ':eq(0)';
            }
        }
        parse = sp.join(' ');
    }
    const $ = eleFind ? html.rr : cheerio.load(html);
    let ret = eleFind ? ($(html.ele).is(parse) ? html.ele : $(html.ele).find(parse)) : $(parse);
    let result = [];
    if (ret) {
        ret.each(function (idx, ele) {
            result.push({ rr: $, ele: ele });
        });
    }
    return result;
}

globalThis.randIndex = randIndex;
globalThis.randomStr = randomStr;
globalThis.urljoin = urljoin;
globalThis.joinUrl = urljoin;
globalThis.urljoin2 = urljoin;
globalThis.是否正版 = 是否正版;
globalThis.urlDeal = urlDeal;
globalThis.urlencode = urlencode;
globalThis.encodeUrl = urlencode;
globalThis.base64Encode = base64Encode;
globalThis.base64Decode = base64Decode;
globalThis.pdfa = pdfa;
globalThis.pdfh = pdfh;
globalThis.md5 = md5;