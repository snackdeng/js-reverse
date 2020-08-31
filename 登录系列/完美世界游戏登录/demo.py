import execjs
import requests


with open("wanmeishijie.js", "r") as f:
    js = f.read()
    ctx = execjs.compile(js)
password = ctx.call("getpwd","yijiaren.980801","MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCjfeE0MIYsZes/HwV06/kvRw34Hmhn9WPt0feLPp1PVqdqZz1/xFvPPEAJ/lAvfqt5kyn+A06bvYXIhizTjlOzPgLE4897ihuSYXgfwcUshPZvydRLbftU6Exj5SLbv5tw4GInbgQv7RWLWOKyQA81q6lWae2Kcgd1XpDRsQNXVwIDAQAB")
print(password)
url = "https://passport.wanmei.com/sso/login"
headers = {
'Host': 'passport.wanmei.com',
'Origin': 'https://passport.wanmei.com',
'Referer': 'https://passport.wanmei.com/sso/login?service=passport&isiframe=1&location=2f736166652f',
'Sec-Fetch-Dest': 'document',
'Sec-Fetch-Mode': 'navigate',
'Sec-Fetch-Site': 'same-origin',
'Sec-Fetch-User': '?1',
'Upgrade-Insecure-Requests': '1',
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36',
}
data = {
'password': password,
'service': 'passport',
'location': '2f736166652f',
'needRand': '1',
'isiframe': '1',
'logintype': 'normal',
'autoLogin': '1',
'username': '13348783892',
'randimg': '2b718ce8d38c4ca79e5285c34521af45;undefined',
'isAICap': '1',
}