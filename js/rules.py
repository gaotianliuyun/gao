#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# File  : rules.py.py
# Author: DaShenHan&道长-----先苦后甜，任凭晚风拂柳颜------
# Date  : 2022/8/25
import json
import os
from time import time
import js2py
from quickjs import Function,Context
from utils.log import logger
# from utils.web import get_interval,UA
from utils.ua import UA,get_interval
from flask import render_template_string
import ujson

def getRuleLists():
    base_path = os.path.dirname(os.path.abspath(__file__)) # 当前文件所在目录
    # print(base_path)
    file_name = os.listdir(base_path)
    file_name = list(filter(lambda x:str(x).endswith('.js') and str(x).find('模板') < 0,file_name))
    # print(file_name)
    rule_list = [file.replace('.js','') for file in file_name]
    # print(rule_list)
    return rule_list

def getCacheCount():
    base_path = 'cache/'  # 当前缓存js所在目录
    os.makedirs(base_path, exist_ok=True)
    file_name = os.listdir(base_path)
    file_name = list(filter(lambda x: str(x).endswith('.js') and str(x).find('模板') < 0, file_name))
    return len(file_name)

def getRulesJs2py(path='cache',js_mode=0):
    t1 = time()

    base_path = path+'/'  # 当前文件所在目录
    # print(base_path)
    os.makedirs(base_path,exist_ok=True)
    file_name = os.listdir(base_path)
    file_name = list(filter(lambda x: str(x).endswith('.js') and str(x).find('模板') < 0, file_name))
    # print(file_name)
    rule_list = [file.replace('.js', '') for file in file_name]
    js_path = [f'{path}/{rule}.js' for rule in rule_list]
    with open('js/模板.js', encoding='utf-8') as f:
        # before = f.read().split('export')[0]
        before = f.read().split('export default')[0]
    rule_codes = []
    # for js in js_path:
    #     with open(js,encoding='utf-8') as f:
    #         code = f.read()
    #         rule_codes.append(js2py.eval_js(before+code))

    ctx = js2py.EvalJs()
    codes = []
    for i in range(len(js_path)):
        js = js_path[i]
        with open(js,encoding='utf-8') as f:
            code = f.read()
            new_code = 'var muban = JSON.parse(JSON.stringify(mubanDict));\n'+code.replace('rule',f'rule{i}',1)
            # new_code = ''+code.replace('rule',f'rule{i}',1)
            codes.append(new_code)
    newCodes = before + '\n'+ '\n'.join(codes)
    # print(newCodes)
    try:
        ctx.execute(newCodes)
        for i in range(len(js_path)):
            rule_codes.append(ctx.eval(f'rule{i}'))

        # print(type(rule_codes[0]),rule_codes[0])
        # print(rule_codes[0].title)
        # print(rule_codes[0].searchable)
        # print(rule_codes[0].quickSearch)
        # rule_codes 是个 js2py.base.JsObjectWrapper 类型,所以下面才能用. 获取属性
        new_rule_list = []
        for i in range(len(rule_list)):
            # 过滤排除drpy
            if js_mode == 1 and rule_list[i] == 'drpy':
                continue
            sable = rule_codes[i].searchable or 0
            tmpObj = {
                'name':rule_list[i],
                # 'searchable':1 if (js_mode==1 and sable==2) else sable, # 对js模式1开放软件聚搜(还是算了，服务器遭不住)
                'searchable':sable,
                'quickSearch':rule_codes[i].quickSearch or 0,
                'filterable':rule_codes[i].filterable or 0,
            }
            if rule_codes[i].multi:
                tmpObj['multi'] = 1
            new_rule_list.append(tmpObj)
        # print(new_rule_list)
        rules = {'list': new_rule_list, 'count': len(rule_list)}
    except Exception as e:
        logger.info(f'装载js内置源列表失败,置空内置源')
        rules = []
    logger.info(f'自动配置装载耗时:{get_interval(t1)}毫秒')
    return rules

def getRules(path='cache',js_mode=0):
    t1 = time()

    base_path = path+'/'  # 当前文件所在目录
    os.makedirs(base_path,exist_ok=True)
    file_name = os.listdir(base_path)
    file_name = list(filter(lambda x: str(x).endswith('.js') and str(x).find('模板') < 0, file_name))
    rule_list = [file.replace('.js', '') for file in file_name]
    js_path = [f'{path}/{rule}.js' for rule in rule_list]
    with open('js/模板.js', encoding='utf-8') as f:
        # before = f.read().split('export')[0]
        before = f.read().split('export default')[0]
    rule_codes = []
    ctx = Context()
    codes = []
    for i in range(len(js_path)):
        js = js_path[i]
        with open(js,encoding='utf-8') as f:
            code = f.read()
            new_code = 'var muban = JSON.parse(JSON.stringify(mubanDict));\n'+code.replace('var rule',f'var rule{i}',1)+f'\nif (rule{i}.模板 && muban.hasOwnProperty(rule{i}.模板))'+'{'+f'rule{i} = Object.assign(muban[rule{i}.模板], rule{i});'+'}'
            # new_code = ''+code.replace('rule',f'rule{i}',1)
            codes.append(new_code)
    newCodes = before + '\n'+ '\n'.join(codes)
    # print(newCodes)
    try:
        ctx.eval(newCodes)
        for i in range(len(js_path)):
            rule_codes.append(ctx.get(f'rule{i}'))

        # rule_codes 是个 js2py.base.JsObjectWrapper 类型,所以下面才能用. 获取属性
        new_rule_list = []
        for i in range(len(rule_list)):
            # 过滤排除drpy
            # if js_mode == 1 and rule_list[i] == 'drpy':
            #     continue
            rule_codes[i] = ujson.loads(rule_codes[i].json())
            sable = rule_codes[i].get('searchable',0)
            tmpObj = {
                'name':rule_list[i],
                # 'searchable':1 if (js_mode==1 and sable==2) else sable, # 对js模式1开放软件聚搜(还是算了，服务器遭不住)
                'searchable':sable,
                'quickSearch': rule_codes[i].get('quickSearch',0),
                'filterable': rule_codes[i].get('filterable',0),
            }
            # print(tmpObj)
            if rule_codes[i].get('multi'):
                tmpObj['multi'] = 1
            new_rule_list.append(tmpObj)
        # print(new_rule_list)
        rules = {'list': new_rule_list, 'count': len(rule_list)}
    except Exception as e:
        logger.info(f'装载js内置源列表失败,置空内置源:{e}')
        rules = {'list': [], 'count': 0}
    logger.info(f'自动配置装载耗时:{get_interval(t1)}毫秒')
    return rules

def jxTxt2Json(text:str,host:str):
    try:
        data = render_template_string(text,host=host).strip().split('\n')
    except Exception as e:
        logger.info(f'jxTxt2Json发生错误:{e}')
        data = []
    jxs = []
    for i in data:
        i = i.strip()
        dt = i.split(',')
        if not i.startswith('#') and len(i) > 10:
            try:
                jxs.append({
                    'name':dt[0],
                    'url':dt[1],
                    'type':dt[2] if len(dt) > 2 and dt[2] else 0,
                    'ua':dt[3] if len(dt) > 3 and dt[3] else UA,
                })
            except Exception as e:
                logger.info(f'解析行有错误:{e}')
    return jxs

def getJxs(path='js',host=None):
    custom_jx = 'base/解析.conf'
    if not os.path.exists(custom_jx):
        with open(custom_jx,'w+',encoding='utf-8') as f1:
            msg = """# 这是用户自定义解析列表,不会被系统升级覆盖
# 0123，对应，普通解析，json解析，并发多json解析，聚合解析,参数3不填默认0
# flags是线路名称标识,会自动拦截并走以下的解析
# 名称，链接，类型,ua (ua不填默认 Mozilla/5.0) 可以手动填 Dart/2.14 (dart:io)
虾米,https://dm.xmflv.com:4433/?url=
            """
            f1.write(msg)
    base_path = 'jiexi'  # 自建解析目录
    os.makedirs(base_path, exist_ok=True)
    file_name = os.listdir(base_path)
    file_name = list(filter(lambda x: str(x).endswith('.js') and str(x).find('模板') < 0 and str(x).find('加密') < 0, file_name))
    # print(file_name)
    jx_list = [file.replace('.js', '') for file in file_name]
    # print(file_name)
    # print(jx_list)
    jx_str = '\n'.join([jx+',{{host}}'+f'/parse/api/{jx}.js?url=,1' for jx in jx_list])
    # print(jx_str)

    with open(f'{path}/解析.conf',encoding='utf-8') as f:
        text = f.read()
    text = jx_str + '\n' + text
    jxs = jxTxt2Json(text,host)
    with open(custom_jx,encoding='utf-8') as f2:
        text = f2.read()
    jxs2 = jxTxt2Json(text,host)
    jxs.extend(jxs2)
    print(f'共计{len(jxs)}条解析')
    return jxs

def getPys(path='txt/py'):
    t1 = time()
    base_path = os.path.dirname(os.path.abspath(os.path.dirname(__file__)))  # 上级目录
    py_path = os.path.join(base_path, path)
    os.makedirs(py_path, exist_ok=True)
    file_name = os.listdir(py_path)
    file_name = list(filter(lambda x: str(x).endswith('.py'), file_name))
    # print(file_name)
    rule_list = [file.replace('.py', '') for file in file_name]
    py_path = [f'{path}/{rule}.py' for rule in rule_list]
    new_rule_list = []
    for i in range(len(rule_list)):
        new_rule_list.append({
            'name': rule_list[i],
            'searchable': 1,
            'quickSearch': 1,
            'filterable': 0,
        })
    logger.info(f'自动加载Pyramid耗时:{get_interval(t1)}毫秒')
    return new_rule_list

def gen_cache(path='txt/js/tg'):
    t1 = time()
    base_path = os.path.dirname(os.path.abspath(os.path.dirname(__file__)))  # 上级目录
    py_path = os.path.join(base_path, path)
    os.makedirs(py_path, exist_ok=True)
    file_name = os.listdir(py_path)
    file_name = list(filter(lambda x: str(x).endswith('.js'), file_name))
    # print(file_name)
    rule_list = [file.replace('.js', '') for file in file_name]
    js_path = [f'{path}/{rule}.js' for rule in rule_list]
    new_rule_list = []
    for i in range(len(rule_list)):
        # print(js_path[i])
        rname = rule_list[i]
        new_rule_list.append(
            {
                "key": f"dr_{rname}",
                "name": f"{rname}(道长)",
                "type": 1,
                # "api": "{{host}}"+f"/vod?rule={rname}&ext="+"{{host}}/"+js_path[i],
                "api": "{{host}}"+f"/vod?rule={rname}&ext="+js_path[i],
                "searchable": 2,
                "quickSearch": 0,
                "filterable": 0
            })
    logger.info(f'自动加载{len(new_rule_list)}个缓存JS耗时:{get_interval(t1)}毫秒')
    new_rules_texts = [json.dumps(new_rule,ensure_ascii=False) for new_rule in new_rule_list]
    # new_rules_text = json.dumps(new_rule_list,ensure_ascii=False)
    new_rules_text = ',\n'.join(new_rules_texts)+','
    return new_rules_text

if __name__ == '__main__':
    print(getRuleLists())
    # print(gen_cache())
    # print(gen_cache('txt/js/18'))

    custom_file = gen_cache() + '\n'+gen_cache('txt/js/18')
    print(custom_file)
    with open('custom.conf','w+',encoding='utf-8') as f:
        f.write(custom_file)