import requests
import time
import random
import hashlib
import execjs

string = string.encode('utf-8')
md5 = hashlib.md5(string).hexdigest()


# t1.get()是获取界面输入的内容(有二维坐标之说)从0行0列到最后
sign = make_md5("fanyideskweb" + t1.get(0.0,'end') + salt + "n%A-rKaT5fb[Gy?;N5@Tj")
bv = make_md5('5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36')

url = 'http://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36',
    'Referer': 'http://fanyi.youdao.com/',
    'Host': 'fanyi.youdao.com',
    'Origin': 'http://fanyi.youdao.com',
    'X-Requested-With': 'XMLHttpRequest',
    'Cookie': 'OUTFOX_SEARCH_USER_ID=5370028@10.169.0.84; OUTFOX_SEARCH_USER_ID_NCOO=811010223.2979907; _ntes_nnid=634f2925d538907049e98d0aaa6fdf01,1578713408596; JSESSIONID=aaa8HzXt6sxGA7sB37Tax; ___rl__test__cookies=1581318654931'
}
date = {
    'i': t1.get(0.0,'end'),
    'from': 'AUTO',
    'to': 'AUTO',
    'smartresult': 'dict',
    'client': 'fanyideskweb',
    'salt': salt,
    'sign': sign,
    'ts': ts,
    'bv': bv,
    'doctype': 'json',
    'version': '2.1',
    'keyfrom': 'fanyi.web',
    'action': 'FY_BY_REALTlME'
}
respon = requests.post(url,data=date,headers=headers).json()