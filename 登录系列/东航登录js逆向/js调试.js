/*
 *  WT-JS_DEBUG 专用内部命令 WT.LOG(参数1, 参数2, ...........)
 *  你可以使用本命令在任意位置进行日志输出，详见下面简易例子：
 *  此小命令，是为了方便在调试过程中，能任意查看一些需要的内容而设计。
 *  如果你需要到其它地方运行，请将本命令删除。
 */
/*
 *  WT-JS_DEBUG 专用内部命令 WT.LOG(参数1, 参数2, ...........)
 *  你可以使用本命令在任意位置进行日志输出，详见下面简易例子：
 *  此小命令，是为了方便在调试过程中，能任意查看一些需要的内容而设计。
 *  如果你需要到其它地方运行，请将本命令删除。
 */
function i(e) {
    e = e.replace(/\r\n/g, "\n");
    for (var t = "", n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192),
            t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224),
            t += String.fromCharCode(r >> 6 & 63 | 128),
            t += String.fromCharCode(63 & r | 128))
    }
    return t
}

function encode(e) {
    var t, n, r, a, s, c, u, l = "",
        f = 0,
		o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    for (e = i(e); f < e.length;)
        a = (t = e.charCodeAt(f++)) >> 2,
        s = (3 & t) << 4 | (n = e.charCodeAt(f++)) >> 4,
        c = (15 & n) << 2 | (r = e.charCodeAt(f++)) >> 6,
        u = 63 & r,
        isNaN(n) ? c = u = 64 : isNaN(r) && (u = 64),
        l = l + o.charAt(a) + o.charAt(s) + o.charAt(c) + o.charAt(u);
    return l
}

function pd(passwod) {
    var password = encode(passwod);
    return password

}