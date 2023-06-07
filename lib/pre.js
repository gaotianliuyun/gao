var VODS = [];
var $ = {};
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
	String.prototype.startsWith = function (prefix){
		return this.slice(0, prefix.length) === prefix;
	};
}
if (typeof String.prototype.endsWith != 'function') {
	String.prototype.endsWith = function(suffix) {
		return this.indexOf(suffix, this.length - suffix.length) !== -1;
	};
}

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
Object.prototype.myValues=function(obj){
   if(obj ==null) {
   	 throw new TypeError("Cannot convert undefined or null to object");
   }
   var res=[]
   for(var k in obj){
     if(obj.hasOwnProperty(k)){//需判断是否是本身的属性
   		res.push(obj[k]);
   	 }
   }
   return res;
}
if (typeof Object.prototype.values != 'function') {
	Object.prototype.values=function(obj){
   if(obj ==null) {
   	 throw new TypeError("Cannot convert undefined or null to object");
   }
   var res=[]
   for(var k in obj){
     if(obj.hasOwnProperty(k)){//需判断是否是本身的属性
   		res.push(obj[k]);
   	 }
   }
   return res;
}
}

Array.prototype.join = function (emoji) {
    // emoji = emoji||',';
    emoji = emoji||'';
      let self = this;
      let str = "";
      let i = 0;
      if (!Array.isArray(self)) {throw String(self)+'is not Array'}
      if(self.length===0){return ''}
      if (self.length === 1){return String(self[0])}
      i = 1;
      str = this[0];
      for (; i < self.length; i++) {
        str += String(emoji)+String(self[i]);
      }
      return str;
};
Array.prototype.append = Array.prototype.push;
String.prototype.strip = String.prototype.trim;
function 是否正版(vipUrl){
    let flag = new RegExp('qq\.com|iqiyi\.com|youku\.com|mgtv\.com|bilibili\.com|sohu\.com|ixigua\.com|pptv\.com|miguvideo\.com|le\.com|1905\.com|fun\.tv');
    return  flag.test(vipUrl);
}
function urlDeal(vipUrl){
    if(!vipUrl){
        return ''
    }
    if(!是否正版(vipUrl)){
        return vipUrl
    }
    if(!/miguvideo/.test(vipUrl)){
        vipUrl=vipUrl.split('#')[0].split('?')[0];
    }
    return vipUrl
}
function setResult(d){
    if(!Array.isArray(d)){
        return []
    }
    d.forEach(function (it){
        let obj = {
            vod_id:it.url||'',
            vod_name: it.title||'',
            vod_remarks: it.desc||'',
            vod_content: it.content||'',
            vod_pic: it.pic_url||it.img||'',
        };
        let keys = Object.keys(it);
        if(keys.includes('tname')){
            obj.type_name = it.tname||'';
        }
        if(keys.includes('tid')){
            obj.type_id = it.tid||'';
        }
        if(keys.includes('year')){
            obj.vod_year = it.year||'';
        }
        if(keys.includes('actor')){
            obj.vod_actor = it.actor||'';
        }
        if(keys.includes('director')){
            obj.vod_director = it.director||'';
        }
        if(keys.includes('area')){
            obj.vod_area = it.area||'';
        }
        VODS.push(obj);
    });
    return VODS
}
function setResult2(res){
    VODS = res.list||[];
    return VODS
}
function setHomeResult(res){
    if(!res||typeof(res)!=='object'){
        return []
    }
    return setResult(res.list);
}
// 千万不要用for in 推荐 forEach (for in 会打乱顺序)
//猫函数
function maoss(jxurl, ref, key) {
    eval(getCryptoJS());
    try {
        var getVideoInfo = function (text) {
                return CryptoJS.AES.decrypt(text, key, {iv: iv, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
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

function request(url,obj){
    // obj = obj||{'user-agent': MOBILE_UA};
    let new_obj;
    if(typeof(fetch_params)!=='undefined'){
        new_obj = obj?Object.assign(fetch_params,obj):fetch_params;
    }else{
        new_obj = obj||{}
    }
    if(!new_obj||!new_obj.headers){
        new_obj.headers = {};
    }
    if(!new_obj.headers['User-Agent']&&!new_obj.headers['user-agent']){
        new_obj.headers['User-Agent'] = MOBILE_UA;
    }
    // delete new_obj.headers['Referer'];
    // print(obj);
    // print(new_obj);
    if(typeof(fetch)!==undefined){
        let html = fetch(url,new_obj);
        if (/\?btwaf=/.test(html)) {//宝塔验证
            url=url.split('#')[0]+'?btwaf'+html.match(/btwaf(.*?)\"/)[1];
            log("宝塔验证跳转到:"+url);
            html = fetch(url, new_obj);
        }
        return html
    }
    return ''
}

function rc(url){// 系统已经有require方法了,再覆盖的话无法操作了
    res =  eval(requireObj(url));
    // print(res);
    return res;
    // return eval.call(null, requireObj(url));
}

$.require = rc;

function urlencode (str) {
    str = (str + '').toString();

    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
    replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}