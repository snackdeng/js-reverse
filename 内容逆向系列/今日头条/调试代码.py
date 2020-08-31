# -*- coding:utf-8 -*-
"""
作者：snackdeng
日期：2020/07/20
"""
import execjs
import requests

js = open('js调试.js', 'r', encoding='utf-8').read()
ctx = execjs.compile(js)
result = ctx.call("q")
print(result)

# a函数 获取{'as': 'A1253F213524BA3', 'cp': '5F15843B1A23EE1'}