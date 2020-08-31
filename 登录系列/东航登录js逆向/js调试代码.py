import execjs
import requests
"64389594016"
js = open('js调试.js', 'r', encoding='utf-8').read()
ctx = execjs.compile(js, )
result = ctx.call('pd', '111')
print(result)
