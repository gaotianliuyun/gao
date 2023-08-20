// !!!!! Do not use in release mode. Just a native inject fake wrapper for test spider. !!!!!
// !!!!! Do not use in release mode. Just a native inject fake wrapper for test spider. !!!!!
// !!!!! Do not use in release mode. Just a native inject fake wrapper for test spider. !!!!!
import axios from 'axios';
import crypto from 'crypto';
import https from 'https';
import fs from 'node:fs';
import qs from 'qs';
import { Uri, _ } from '../lib/cat.js';

const confs = {};

function initLocalStorage(storage) {
    if (!_.has(confs, storage)) {
        if (!fs.existsSync('local')) {
            fs.mkdirSync('local');
        }

        const storagePath = 'local/js_' + storage;

        if (!fs.existsSync(storagePath)) {
            fs.writeFileSync(storagePath, '{}');
            confs[storage] = {};
        } else {
            confs[storage] = JSON.parse(fs.readFileSync(storagePath).toString());
        }
    }
}

function localGet(storage, key) {
    initLocalStorage(storage);
    return _.get(confs[storage], key, '');
}

function localSet(storage, key, value) {
    initLocalStorage(storage);
    confs[storage][key] = value;
    fs.writeFileSync('local/js_' + storage, JSON.stringify(confs[storage]));
}

async function request(url, opt) {
    try {
        var data = opt ? opt.data || null : null;
        var postType = opt ? opt.postType || null : null;
        var returnBuffer = opt ? opt.buffer || 0 : 0;
        var timeout = opt ? opt.timeout || 5000 : 5000;

        var headers = opt ? opt.headers || {} : {};
        if (postType == 'form') {
            headers['Content-Type'] = 'application/x-www-form-urlencoded';

            if (data != null) {
                data = qs.stringify(data, { encode: false });
            }
        }
        let respType = returnBuffer == 1 || returnBuffer == 2 ? 'arraybuffer' : undefined;
        var resp = await axios(url, {
            responseType: respType,
            method: opt ? opt.method || 'get' : 'get',
            headers: headers,
            data: data,
            timeout: timeout,
            httpsAgent: https.Agent({
                rejectUnauthorized: false,
            }),
        });
        var data = resp.data;

        var resHeader = {};
        for (const hks of resp.headers) {
            var v = hks[1];
            resHeader[hks[0]] = Array.isArray(v) ? (v.length == 1 ? v[0] : v) : v;
        }

        if (!returnBuffer) {
            if (typeof data === 'object') {
                data = JSON.stringify(data);
            }
        } else if (returnBuffer == 1) {
            return { code: resp.status, headers: resHeader, content: data };
        } else if (returnBuffer == 2) {
            return { code: resp.status, headers: resHeader, content: data.toString('base64') };
        }
        return { code: resp.status, headers: resHeader, content: data };
    } catch (error) {
        console.error(error);
    }
    return { headers: {}, content: '' };
}

function base64EncodeBuf(buff, urlsafe = false) {
    return buff.toString(urlsafe ? 'base64url' : 'base64');
}

function base64Encode(text, urlsafe = false) {
    return base64EncodeBuf(Buffer.from(text, 'utf8'), urlsafe);
}

function base64DecodeBuf(text) {
    return Buffer.from(text, 'base64');
}

function base64Decode(text) {
    return base64DecodeBuf(text).toString('utf8');
}

function md5(text) {
    return crypto.createHash('md5').update(Buffer.from(text, 'utf8')).digest('hex');
}

function aes(mode, encrypt, input, inBase64, key, iv, outBase64) {
    if (iv.length == 0) iv = null;
    try {
        if (mode.startsWith('AES/CBC')) {
            switch (key.length) {
                case 16:
                    mode = 'aes-128-cbc';
                    break;
                case 32:
                    mode = 'aes-256-cbc';
                    break;
            }
        } else if (mode.startsWith('AES/ECB')) {
            switch (key.length) {
                case 16:
                    mode = 'aes-128-ecb';
                    break;
                case 32:
                    mode = 'aes-256-ecb';
                    break;
            }
        }
        const inBuf = inBase64 ? base64DecodeBuf(input) : Buffer.from(input, 'utf8');
        let keyBuf = Buffer.from(key);
        if (keyBuf.length < 16) keyBuf = Buffer.concat([keyBuf], 16);
        let ivBuf = iv == null ? Buffer.alloc(0) : Buffer.from(iv);
        if (iv != null && ivBuf.length < 16) ivBuf = Buffer.concat([ivBuf], 16);
        const cipher = encrypt ? crypto.createCipheriv(mode, keyBuf, ivBuf) : crypto.createDecipheriv(mode, keyBuf, ivBuf);
        const outBuf = Buffer.concat([cipher.update(inBuf), cipher.final()]);
        return outBase64 ? base64EncodeBuf(outBuf) : outBuf.toString('utf8');
    } catch (error) {
        console.log(error);
    }
    return '';
}

function des(mode, encrypt, input, inBase64, key, iv, outBase64) {
    try {
        if (mode.startsWith('DESede/CBC')) {
            // https://stackoverflow.com/questions/29831300/convert-desede-ecb-nopadding-algorithm-written-in-java-into-nodejs-using-crypto
            switch (key.length) {
                case 16:
                    mode = 'des-ede-cbc';
                    break;
                case 24:
                    mode = 'des-ede3-cbc';
                    break;
            }
        }
        const inBuf = inBase64 ? base64DecodeBuf(input) : Buffer.from(input, 'utf8');
        let keyBuf = Buffer.from(key);
        if (keyBuf.length < 16) keyBuf = Buffer.concat([keyBuf], 16);
        let ivBuf = iv == null ? Buffer.alloc(0) : Buffer.from(iv);
        if (iv != null && ivBuf.length < 8) ivBuf = Buffer.concat([ivBuf], 8);
        const cipher = encrypt ? crypto.createCipheriv(mode, keyBuf, ivBuf) : crypto.createDecipheriv(mode, keyBuf, ivBuf);
        const outBuf = Buffer.concat([cipher.update(inBuf), cipher.final()]);
        return outBase64 ? base64EncodeBuf(outBuf) : outBuf.toString('utf8');
    } catch (error) {
        console.log(error);
    }
    return '';
}

// pkcs8 only
function rsa(mode, pub, encrypt, input, inBase64, key, outBase64) {
    try {
        let pd = undefined;
        const keyObj = pub ? crypto.createPublicKey(key) : crypto.createPrivateKey(key);
        if (!keyObj.asymmetricKeyDetails || !keyObj.asymmetricKeyDetails.modulusLength) return '';
        const moduleLen = keyObj.asymmetricKeyDetails.modulusLength;
        let blockLen = moduleLen / 8;
        switch (mode) {
            case 'RSA/PKCS1':
                pd = crypto.constants.RSA_PKCS1_PADDING;
                blockLen = encrypt ? blockLen - 11 : blockLen;
                break;
            case 'RSA/None/NoPadding':
                pd = crypto.constants.RSA_NO_PADDING;
                break;
            case 'RSA/None/OAEPPadding':
                pd = crypto.constants.RSA_PKCS1_OAEP_PADDING;
                blockLen = encrypt ? blockLen - 41 : blockLen;
                break;
            default:
                throw Error('not support ' + mode);
        }
        let inBuf = inBase64 ? base64DecodeBuf(input) : Buffer.from(input, 'utf8');
        let bufIdx = 0;
        let outBuf = Buffer.alloc(0);
        while (bufIdx < inBuf.length) {
            const bufEndIdx = Math.min(bufIdx + blockLen, inBuf.length);
            let tmpInBuf = inBuf.subarray(bufIdx, bufEndIdx);
            if (pd == crypto.constants.RSA_NO_PADDING) {
                if (tmpInBuf.length < blockLen) {
                    tmpInBuf = Buffer.concat([Buffer.alloc(128 - tmpInBuf.length), tmpInBuf]);
                }
            }
            let tmpBuf;
            if (pub) {
                tmpBuf = encrypt ? crypto.publicEncrypt({ key: keyObj, padding: pd }, tmpInBuf) : crypto.publicDecrypt({ key: keyObj, padding: pd }, tmpInBuf);
            } else {
                tmpBuf = encrypt ? crypto.privateEncrypt({ key: keyObj, padding: pd }, tmpInBuf) : crypto.privateDecrypt({ key: keyObj, padding: pd }, tmpInBuf);
            }
            bufIdx = bufEndIdx;
            outBuf = Buffer.concat([outBuf, tmpBuf]);
        }
        return outBase64 ? base64EncodeBuf(outBuf) : outBuf.toString('utf8');
    } catch (error) {
        console.log(error);
    }
    return '';
}

var charStr = 'abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789';

function randStr(len, withNum) {
    var _str = '';
    let containsNum = withNum === undefined ? true : withNum;
    for (var i = 0; i < len; i++) {
        let idx = _.random(0, containsNum ? charStr.length - 1 : charStr.length - 11);
        _str += charStr[idx];
    }
    return _str;
}

globalThis.local = {
    get: async function (storage, key) {
        return localGet(storage, key);
    },
    set: async function (storage, key, val) {
        localSet(storage, key, val);
    },
};

globalThis.md5X = md5;
globalThis.rsaX = rsa;
globalThis.aesX = aes;
globalThis.desX = des;

globalThis.req = request;

globalThis.url2Proxy = async function (type, url, headers) {
    let hd = Object.keys(headers).length == 0 ? '_' : encodeURIComponent(JSON.stringify(headers));
    let uri = new Uri(url);
    let path = uri.path();
    path = path.substring(path.lastIndexOf('/'));
    let ext = path.indexOf('.') >= 0 ? path.substring(path.indexOf('.')) : '.bin';
    return 'http://127.0.0.1:13333/up/' + randStr(6) + '/' + type + '/' + hd + '/' + encodeURIComponent(url) + '/' + ext;
};

globalThis.js2Proxy = async function (dynamic, siteType, site, url, headers) {
    let hd = Object.keys(headers).length == 0 ? '_' : encodeURIComponent(JSON.stringify(headers));
    return (dynamic ? 'js2p://_WEB_/' : 'http://127.0.0.1:13333/jp/') + randStr(6) + '/' + siteType + '/' + site + '/' + hd + '/' + encodeURIComponent(url);
};

export default {};
