# -*- coding:utf-8 -*-
"""
作者：snackdeng
日期：2020/08/10
"""
# 不成功的原因是还有个验证码没输  75行的verifycode后面就是验证码
import execjs
import requests

def get_vpkey():
    url = "https://cn.fawmx.com/service/vpkey"
    headers = {
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Host": "cn.fawmx.com",
        "Referer": "https://cn.fawmx.com/home/register",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36",
        "X-Requested-With": "XMLHttpRequestilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36",
    }
    response = requests.get(url=url, headers=headers).json()
    return response


def get_fkey(user_name):
    url = "https://cn.fawmx.com/ee/loginverification"
    headers = {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Content-Length": "1535",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Host": "cn.fawmx.com",
        "Origin": "https://cn.fawmx.com",
        "Referer": "https://cn.fawmx.com/home/register",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
    }
    data = {
        "eeblackbox": "0002MDAwN0xTVE9LRU4wMDI0YWNjODQ0ZWQtNzQxMy00NGI3LTgwYjYtYjhmNzFiM2FmYmEyMDAwNklOVExPQzAwMjJodHRwczovL2NuLmZhd214LmNvbS9ob21lL3JlZ2lzdGVyMDAwNUpFTkJMMDAwMTEwMDA1SlNTUkMwMDIwaHR0cHM6Ly93d3cuZjRienlyejkydXMzLmNvbS9FMi8wMDA0VUFHVDAwNzNNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvODQuMC40MTQ3LjEwNSBTYWZhcmkvNTM3LjM2MDAwN0pTVE9LRU4wMDI0YWNjODQ0ZWQtNzQxMy00NGI3LTgwYjYtYjhmNzFiM2FmYmEyMDAwN0hBQ0NMTkcwMDBlemgtQ04semg7cT0wLjkwMDA3SEFDQ0NIUjAwMGZVbmljb2RlIChVVEYtOCkwMDA1SlNWRVIwMDAzMS4yMDAwNFRaT04wMDA0LTQ4MDAwMDZKU1RJTUUwMDEzMjAyMC8wOC8xMCAwNjoyMzoyMzAwMDdTVlJUSU1FMDAxNDgvMTAvMjAyMCA2OjIzOjIzIEFNMDAwNUpCUk5NMDAwNkNocm9tZTAwMDVKQlJWUjAwMGQ4NC4wLjQxNDcuMTA1MDAwNUpCUk9TMDAwZldpbmRvd3MgTlQgMTAuMDAwMDVKQlJDTTAwMWRXaW42NDsgeDY0OyBLSFRNTCwgbGlrZSBHZWNrbzAwMDVKTEFORzAwMDV6aC1DTjAwMDRKUkVTMDAwODc2OHgxMzY2MDAwNkpQTEdOUzAwNGFpbnRlcm5hbC1wZGYtdmlld2VyO21oamZibWRnY2ZqYmJwYWVvam9mb2hvZWZnaWVoamFpO2ludGVybmFsLW5hY2wtcGx1Z2luOzAwMDRJR0dZMDAyY0tXcDBIYmZycXFadzZ4ZEpicHRIb2ZYQjY3S1kydUVTV3lUT3lScVFHRWM9MDAwNUFQVkVSMDA2YjUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvODQuMC40MTQ3LjEwNSBTYWZhcmkvNTM3LjM2MDAwNUFQTkFNMDAwOE5ldHNjYXBlMDAwNU5QTEFUMDAwNVdpbjMyMDAwMk1WMDAyMDMzNzVFNERFMzZDMkFEMTExNkEwNzUxMTJGN0JEOTY1MDAwNkNUT0tFTjAwMjRhY2M4NDRlZC03NDEzLTQ0YjctODBiNi1iOGY3MWIzYWZiYTIwMDA4V0RCVE9LRU4wMDI0YWNjODQ0ZWQtNzQxMy00NGI3LTgwYjYtYjhmNzFiM2FmYmEyMDAwOFdFQlJUQ0lQMDAwZjIyMy4xNTcuMjI4LjEwMg ==",
        "info": user_name  # 这是账号
    }
    response = requests.post(url, headers=headers, data=data).json()
    return response['response']


def get_login(user_name, pwd, fkey):
    url = "https://cn.fawmx.com/kz/member/login2?r=0.7974597568464197"
    headers = {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Content-Length": "319",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Host": "cn.fawmx.com",
        "Origin": "https://cn.fawmx.com",
        "Referer": "https://cn.fawmx.com/home/register",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
    }
    data = {
        "loginpwd": pwd,
        "loginame": user_name,
        "verifycode": "",
        "fkey": fkey,
    }
    response = requests.post(url, headers=headers, data=data).json()
    print(response)


if __name__ == '__main__':
    user_name = input("请输入你的账号：")
    passwod = input("请输入你的密码：")
    key = get_vpkey()
    with open("test01.js", 'r') as f:
        js = f.read()
        ctx = execjs.compile(js)
    pwd = ctx.call("data", key, passwod)
    fkey = get_fkey(user_name)
    get_login(user_name, pwd, fkey)