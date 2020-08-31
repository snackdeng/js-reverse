import execjs
import requests


with open("steam1.js", "r") as f:
    js = f.read()
    ctx = execjs.compile(js)
times = ctx.call("time")
print(times)
username = input("请输入你的账号:")
passwd = input("请输入你的密码:")
password = ctx.call("getwd",passwd,"bfac2693cfc703826b556594e08289208a99d9555fcfd43e38b115b4cb0d4f59cd2ba093102f2dea1ab05ec6fe4a075dca9fd45b0a563d2a6773d2e01411818aa4cf943e271b1a17aa779f07de509648206350925556a0cd3413bfa6b75fe32757e18e88fea1611d29717c5efb9e6dc00f1ef7b6ea74fb9cdb5c822dfee6107cc0c5fc309f685ad703765f31a31b8935a87d48883cdc07a527918a92033ce296d070161e9baacddbbe688a28b9b7dccee0d456ff92e0371a42e16b540f855ce07b863f89b5dd218b1d5fc5fc1c6d8596c5d94f3a4f42748e270bc68a3630e02dbbc73cf84aedafe78a56e9dcdc27d193a2c0e62d01e93bee12eaaf2181649f7b","010001")
print(password)
url = "https://store.steampowered.com/login/dologin/"
headers = {
'Host': 'store.steampowered.com',
'Origin': 'https://store.steampowered.com',
'Referer': 'https://store.steampowered.com/login/?redir=&redir_ssl=1',
'Sec-Fetch-Dest': 'empty',
'Sec-Fetch-Mode': 'cors',
'Sec-Fetch-Site': 'same-origin',
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36',
}
data = {
'password': password,
'donotcache': times,
'username': username,
'captchagid': '-1',
'isiframe': '1',
'rsatimestamp': '205293700000',
'remember_login': 'false',
}
response = requests.post(url=url,headers=headers,data=data)
print(response.text)