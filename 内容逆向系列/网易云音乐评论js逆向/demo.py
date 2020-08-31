import execjs
import requests


js = open('js逆向.js', 'r', encoding='utf-8').read()
ctx = execjs.compile(js)
result = ctx.call('start')
print(result)
url = 'https://music.163.com/weapi/v1/resource/comments/R_SO_4_1361348080?csrf_token='
headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36'
}
data = {
    'params':result['encText'],
    'encSecKey':result['encSecKey']
}
response = requests.post(url, headers=headers, data=data).json()
print(response)