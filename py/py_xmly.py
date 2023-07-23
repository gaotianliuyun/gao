#coding=utf-8
#!/usr/bin/python
import sys
sys.path.append('..')
from base.spider import Spider
import math
import json
from requests import session, utils

class Spider(Spider):
	def getName(self):
		return "喜马拉雅"
	def init(self,extend=""):
		pass
	def isVideoFormat(self,url):
		pass
	def manualVideoCheck(self):
		pass
	def homeContent(self,filter):
		result = {}
		cateManual = {
			"小说": "7",
			"儿童": "11",
			"评书": "10",
			"娱乐": "13",
			"悬疑": "14",
			"人文": "17",
			"国学": "18",
			"头条": "24",
			"音乐": "19",
			"历史": "16",
			"情感": "20",
			"健康": "22",
			"生活": "21",
			"影视": "15",
			"英语": "29",
			"科技": "28",
			"体育": "25",
			"汽车": "23",
			"广播剧": "8",
			"小语种": "30",
			"教育考试": "32",
			"少儿素养": "12",
			"商业管理": "27",
			"个人提升": "31",
			"投资理财": "26",
			"相声小品": "9",
		}
		classes = []
		for k in cateManual:
			classes.append({
				'type_name': k,
				'type_id': cateManual[k]
			})

		result['class'] = classes
		if (filter):
			result['filters'] = self.config['filter']
		return result
	def homeVideoContent(self):
		result = {}
		return result

	def categoryContent(self,tid,pg,filter,extend):
		result = {}
		header = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54",
			"Referer": "https://www.ximalaya.com/channel/{}/".format(tid)
		}
		url = 'https://www.ximalaya.com/revision/metadata/v2/channel/albums?pageNum={0}&pageSize=50&sort=1&metadata=&groupId={1}'.format(pg, tid)
		rsp = self.fetch(url,headers=header)
		jo = json.loads(rsp.text)
		videos = []
		numvL = len(jo['data']['albums'])
		pgc = math.ceil(numvL/15)
		for a in jo['data']['albums']:
			aid = a['albumId']
			img = 'http://imagev2.xmcdn.com/{0}'.format(a['albumCoverPath'])
			name = a['albumTitle']
			if a['vipType'] == 1:
				remark = 'VIP'
			else:
				remark = ''
			videos.append({
				"vod_id": aid,
				"vod_name": name,
				"vod_pic": img,
				"vod_remarks": remark
			})
		result['list'] = videos
		result['page'] = pg
		result['pagecount'] = pgc
		result['limit'] = numvL
		result['total'] = numvL
		return result

	def detailContent(self,array):
		aid = array[0]
		header = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54",
			"Referer": "https://www.ximalaya.com/album/{}/".format(aid)
		}
		pg = 1
		url = 'https://www.ximalaya.com/revision/album/v1/getTracksList?albumId={}&pageNum={}&pageSize=30'.format(aid, pg)
		rsp = self.fetch(url, headers=header)
		jo = json.loads(rsp.text)
		items = jo['data']['tracks']
		numjo = jo['data']['trackTotalCount']
		while len(items) < numjo:
			pg = pg + 1
			url = 'https://www.ximalaya.com/revision/album/v1/getTracksList?albumId={}&pageNum={}&pageSize=30'.format(aid, pg)
			rsp = self.fetch(url, headers=header)
			jo = json.loads(rsp.text)
			items.extend(jo['data']['tracks'])
		playUrl = ''
		for item in items:
			dir = item['anchorName'].strip()
			act = item['anchorName'].strip()
			title = item['albumTitle']
			pic = 'http://imagev2.xmcdn.com/{0}'.format(item['albumCoverPath'])
			year = item['createDateFormat'].split('-')[0]
			cont = item['albumTitle']
			name = item['title'].strip()
			purl = item['trackId']
			playUrl = playUrl + '{0}${1}#'.format(name, purl)
		vod = {
			"vod_id": aid,
			"vod_name": title,
			"vod_pic": pic,
			"type_name": '',
			"vod_year": year,
			"vod_area": '',
			"vod_remarks": '',
			"vod_actor": act,
			"vod_director": dir,
			"vod_content": cont
		}

		vod['vod_play_from'] = '喜马拉雅'
		vod['vod_play_url'] = playUrl

		result = {
			'list': [
				vod
			]
		}
		return result


	def searchContent(self,key,quick):
		header = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54",
			"Referer": "https://www.ximalaya.com/"
		}
		url = 'https://www.ximalaya.com/revision/search/main?core=all&kw={}&spellchecker=true&device=iPhone&live=true'.format(key)
		rsp = self.fetch(url, headers=header)
		jo = json.loads(rsp.text)
		items = jo['data']['album']['docs']
		pg = 1
		while pg < jo['data']['album']['totalPage']:
			pg = pg + 1
			url = 'https://www.ximalaya.com/revision/search/main?core=album&kw={0}&page={1}&spellchecker=true&rows=20&condition=relation&device=iPhone&fq=&paidFilter=false'.format(key, pg)
			rsp = self.fetch(url, headers=header)
			jo = json.loads(rsp.text)
			items.extend(jo['data']['album']['docs'])
		videos = []
		for item in items:
			name = item['title']
			pic = item['coverPath']
			if item['vipType'] == 1:
				mark = 'VIP'
			else:
				mark = ''
			sid = item['albumId']
			videos.append({
				"vod_id":sid,
				"vod_name":name,
				"vod_pic":pic,
				"vod_remarks":mark
			})
		result = {
				'list': videos
			}
		return result

	def playerContent(self,flag,id,vipFlags):
		result = {}
		header = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54",
			"Referer": 'https://www.ximalaya.com/sound/{0}/'.format(id)
		}
		#这里是游客cookie，有vip的填入自己的会员cookie
		cookies_str = '_xmLog=h5&48be63f9-2a8a-48e1-b923-d29486aac356&process.env.sdkVersion; xm-page-viewid=ximalaya-web; x_xmly_traffic=utm_source%253A%2526utm_medium%253A%2526utm_campaign%253A%2526utm_content%253A%2526utm_term%253A%2526utm_from%253A'
		cookies_dic = dict([co.strip().split('=') for co in cookies_str.split(';')])
		rsp = session()
		cookies_jar = utils.cookiejar_from_dict(cookies_dic)
		rsp.cookie = cookies_jar
		url = 'https://www.ximalaya.com/revision/play/v1/audio?id={0}&ptype=1'.format(id)
		rsp = self.fetch(url, cookies=rsp.cookie, headers=header)
		jo = json.loads(rsp.text)
		purl = jo['data']['src']
		result["parse"] = 0
		result["playUrl"] = ''
		result["url"] = purl
		result["header"] = ''
		return result

	config = {
		"player": {},
		"filter": {}
	}
	header = {}

	def localProxy(self,param):
		action = {
			'url':'',
			'header':'',
			'param':'',
			'type':'string',
			'after':''
		}
		return [200, "video/MP2T", action, ""]