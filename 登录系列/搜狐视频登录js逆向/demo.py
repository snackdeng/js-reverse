import execjs
import requests

js = open('js逆向.js', 'r', encoding='utf-8').read()
ctx = execjs.compile(js)
result = ctx.call('pwd', '111111')
print(result)
"96e79218965eb72c92a549dd5a330112"
"96e79218965eb72c92a549dd5a330112"