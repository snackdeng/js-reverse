import execjs
import requests
"64389594016"
js = open('douyin_fuck.js', 'r', encoding='gbk').read()
ctx = execjs.compile(js, cwd=r'C:\Users\snackdeng\AppData\Roaming\npm\node_modules')
result = ctx.call('sig')
print(result)
"M40wJhAXbWDU-sggdvf1fzONMD"
"aM6CegAANh2XMX2F31OY92jOgm"

url = 'https://www.iesdouyin.com/web/api/v2/aweme/post/?sec_uid=MS4wLjABAAAAjfVCbYq4GQ6Wrr5pa_tX5PSQq5WPdfvgNSkZCkR1KI8&count=21&max_cursor=1590826779000&aid=1128&_signature=EtYsIxAdTAf1odQl2v48XxLWLD&dytk=08818981b8ea970af9588beb5759579b'
headers = {
    "x-requested-with": "XMLHttpRequest",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    "accept-language": "zh-CN,zh;q=0.9",
    "accept-encoding": "gzip, deflate, br",
    "accept": "application/json",
    "cookie": "_ga=GA1.2.1872635969.1590975138; _gid=GA1.2.1216726452.1590975138; tt_webid=6833189706685007373; _ba=BA0.2-20200601-5199e-ehTD8iCkN5ojM3KyeUUh",
    "referer": "https://www.iesdouyin.com/share/user/64389594016?sec_uid=MS4wLjABAAAAjfVCbYq4GQ6Wrr5pa_tX5PSQq5WPdfvgNSkZCkR1KI8&u_code=15g3m1ee0&timestamp=1590975065&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_app_name=douyin",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
}
proxy = {
    "https": "58.218.92.171:9401"
}
data = {
    "sec_uid": "MS4wLjABAAAAjfVCbYq4GQ6Wrr5pa_tX5PSQq5WPdfvgNSkZCkR1KI8",
    "count": 21,
    "max_cursor": 0,
    "aid": 1128,
    "_signature": "VEnMFBAZCp6zPjQScNV89lRJzA",
    "dytk": "08818981b8ea970af9588beb5759579b"
}
response = requests.post(url, headers = headers,data=data).json()
print(response)
"ZIuA3wAAOmKbdH8gUxWPeWSLgM"
"Rq47ChAZGHyh2cMMOfyKX0auOx"