import execjs
import requests
with open("a.js", "r") as f:
    js = f.read()
    ctx = execjs.compile(js)
passwod = ctx.call("aes_pwd","111111")
print(passwod)