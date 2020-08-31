// 此js逆向很有参考意义，当遇到一些数字开头的和！开头的就可以参考此js文件 直到52行【写两个方法】 第一个写抠出来的js代码，第二个写自己的编辑方法
window = this;
window.screen = {
    availHeight: 728,
    availLeft: 0,
    availTop: 0,
    availWidth: 1366,
    colorDepth: 24,
    height: 768,
    pixelDepth: 24,
    width: 1366
};
window.navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
    cookieEnabled: true,
    doNotTrack: null,
    hardwareConcurrency: 4,
    language: "zh-CN",
    languages: ["zh-CN", "zh"],
    maxTouchPoints: 0,
    onLine: true,
    platform: "Win32",
    product: "Gecko",
    productSub: "20030107",
    userAgent: "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
    vendor: "Google Inc.",
    vendorSub: ""
};

!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ajax = t() : e.ajax = t()
} (this,function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(o.exports, o, o.exports, t),
                o.loaded = !0,
                o.exports
        }
        var n = {};
        return t.m = e,
            t.c = n,
            t.p = "",
            t(1)
    }([
        !function(e) {
            var t = {};
            function i(n) {
                if (t[n])
                    return t[n].exports;
                var o = t[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return e[n].call(o.exports, o, o.exports, i),
                    o.l = !0,
                    o.exports
            }
            i.m = e,
                i.c = t,
                i.d = function(e, t, n) {
                    i.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: n
                    })
                }
                ,
                i.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                }
                ,
                i.t = function(e, t) {
                    if (1 & t && (e = i(e)),
                    8 & t)
                        return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule)
                        return e;
                    var n = Object.create(null);
                    if (i.r(n),
                        Object.defineProperty(n, "default", {
                            enumerable: !0,
                            value: e
                        }),
                    2 & t && "string" != typeof e)
                        for (var o in e)
                            i.d(n, o, function(t) {
                                return e[t]
                            }
                                .bind(null, o));
                    return n
                }
                ,
                i.n = function(e) {
                    var t = e && e.__esModule ? function() {
                            return e.default
                        }
                        : function() {
                            return e
                        }
                    ;
                    return i.d(t, "a", t),
                        t
                }
                ,
                i.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                i.p = "//esfres.leju.com/agent_www_new/dist/",
                // i(i.s = 299)
                window._228 = i(228);
                window._303 = i(303);
                window._304 = i(304);
        }({
            228: function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n, o;
                function s(e) {
                    n = new Array(e);
                    for (var t = 0; t < n.length; t++)
                        n[t] = 0;
                    new a,
                        (o = new a).digits[0] = 1
                }
                s(20);
                l(1e15);
                function a(e) {
                    this.digits = "boolean" == typeof e && 1 == e ? null : n.slice(0),
                        this.isNeg = !1
                }
                function r(e) {
                    var t = new a(!0);
                    return t.digits = e.digits.slice(0),
                        t.isNeg = e.isNeg,
                        t
                }
                function l(e) {
                    var t = new a;
                    t.isNeg = e < 0,
                        e = Math.abs(e);
                    for (var i = 0; e > 0; )
                        t.digits[i++] = 65535 & e,
                            e >>= 16;
                    return t
                }
                function c(e) {
                    for (var t = "", i = e.length - 1; i > -1; --i)
                        t += e.charAt(i);
                    return t
                }
                new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
                var u = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");
                function d(e) {
                    for (var t = "", i = 0; i < 4; ++i)
                        t += u[15 & e],
                            e >>>= 4;
                    return c(t)
                }
                function p(e) {
                    return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 90 ? 10 + e - 65 : e >= 97 && e <= 122 ? 10 + e - 97 : 0
                }
                function h(e) {
                    for (var t = 0, i = Math.min(e.length, 4), n = 0; n < i; ++n)
                        t <<= 4,
                            t |= p(e.charCodeAt(n));
                    return t
                }
                function f(e, t) {
                    var i;
                    if (e.isNeg != t.isNeg)
                        t.isNeg = !t.isNeg,
                            i = g(e, t),
                            t.isNeg = !t.isNeg;
                    else {
                        i = new a;
                        for (var n, o = 0, s = 0; s < e.digits.length; ++s)
                            n = e.digits[s] + t.digits[s] + o,
                                i.digits[s] = 65535 & n,
                                o = Number(n >= 65536);
                        i.isNeg = e.isNeg
                    }
                    return i
                }
                function g(e, t) {
                    var i;
                    if (e.isNeg != t.isNeg)
                        t.isNeg = !t.isNeg,
                            i = f(e, t),
                            t.isNeg = !t.isNeg;
                    else {
                        var n, o;
                        i = new a,
                            o = 0;
                        for (var s = 0; s < e.digits.length; ++s)
                            n = e.digits[s] - t.digits[s] + o,
                                i.digits[s] = 65535 & n,
                            i.digits[s] < 0 && (i.digits[s] += 65536),
                                o = 0 - Number(n < 0);
                        if (-1 == o) {
                            o = 0;
                            for (s = 0; s < e.digits.length; ++s)
                                n = 0 - i.digits[s] + o,
                                    i.digits[s] = 65535 & n,
                                i.digits[s] < 0 && (i.digits[s] += 65536),
                                    o = 0 - Number(n < 0);
                            i.isNeg = !e.isNeg
                        } else
                            i.isNeg = e.isNeg
                    }
                    return i
                }
                function m(e) {
                    for (var t = e.digits.length - 1; t > 0 && 0 == e.digits[t]; )
                        --t;
                    return t
                }
                function y(e) {
                    var t, i = m(e), n = e.digits[i], o = 16 * (i + 1);
                    for (t = o; t > o - 16 && 0 == (32768 & n); --t)
                        n <<= 1;
                    return t
                }
                function v(e, t) {
                    for (var i, n, o, s = new a, r = m(e), l = m(t), c = 0; c <= l; ++c) {
                        i = 0,
                            o = c;
                        for (var u = 0; u <= r; ++u,
                            ++o)
                            n = s.digits[o] + e.digits[u] * t.digits[c] + i,
                                s.digits[o] = 65535 & n,
                                i = n >>> 16;
                        s.digits[c + r + 1] = i
                    }
                    return s.isNeg = e.isNeg != t.isNeg,
                        s
                }
                function b(e, t) {
                    var i, n, o, s = new a;
                    i = m(e),
                        n = 0;
                    for (var r = 0; r <= i; ++r)
                        o = s.digits[r] + e.digits[r] * t + n,
                            s.digits[r] = 65535 & o,
                            n = o >>> 16;
                    return s.digits[1 + i] = n,
                        s
                }
                function w(e, t, i, n, o) {
                    for (var s = Math.min(t + o, e.length), a = t, r = n; a < s; ++a,
                        ++r)
                        i[r] = e[a]
                }
                var k = new Array(0,32768,49152,57344,61440,63488,64512,65024,65280,65408,65472,65504,65520,65528,65532,65534,65535);
                function C(e, t) {
                    var i = Math.floor(t / 16)
                        , n = new a;
                    w(e.digits, 0, n.digits, i, n.digits.length - i);
                    for (var o = t % 16, s = 16 - o, r = n.digits.length - 1, l = r - 1; r > 0; --r,
                        --l)
                        n.digits[r] = n.digits[r] << o & 65535 | (n.digits[l] & k[o]) >>> s;
                    return n.digits[0] = n.digits[r] << o & 65535,
                        n.isNeg = e.isNeg,
                        n
                }
                var $ = new Array(0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535);
                function x(e, t) {
                    var i = Math.floor(t / 16)
                        , n = new a;
                    w(e.digits, i, n.digits, 0, e.digits.length - i);
                    for (var o = t % 16, s = 16 - o, r = 0, l = r + 1; r < n.digits.length - 1; ++r,
                        ++l)
                        n.digits[r] = n.digits[r] >>> o | (n.digits[l] & $[o]) << s;
                    return n.digits[n.digits.length - 1] >>>= o,
                        n.isNeg = e.isNeg,
                        n
                }
                function _(e, t) {
                    var i = new a;
                    return w(e.digits, 0, i.digits, t, i.digits.length - t),
                        i
                }
                function S(e, t) {
                    if (e.isNeg != t.isNeg)
                        return 1 - 2 * Number(e.isNeg);
                    for (var i = e.digits.length - 1; i >= 0; --i)
                        if (e.digits[i] != t.digits[i])
                            return e.isNeg ? 1 - 2 * Number(e.digits[i] > t.digits[i]) : 1 - 2 * Number(e.digits[i] < t.digits[i]);
                    return 0
                }
                function j(e, t) {
                    var i, n, s = y(e), l = y(t), c = t.isNeg;
                    if (s < l)
                        return e.isNeg ? ((i = r(o)).isNeg = !t.isNeg,
                            e.isNeg = !1,
                            t.isNeg = !1,
                            n = g(t, e),
                            e.isNeg = !0,
                            t.isNeg = c) : (i = new a,
                            n = r(e)),
                            new Array(i,n);
                    i = new a,
                        n = e;
                    for (var u = Math.ceil(l / 16) - 1, d = 0; t.digits[u] < 32768; )
                        t = C(t, 1),
                            ++d,
                            ++l,
                            u = Math.ceil(l / 16) - 1;
                    n = C(n, d),
                        s += d;
                    for (var p = Math.ceil(s / 16) - 1, h = _(t, p - u); -1 != S(n, h); )
                        ++i.digits[p - u],
                            n = g(n, h);
                    for (var v = p; v > u; --v) {
                        var w = v >= n.digits.length ? 0 : n.digits[v]
                            , k = v - 1 >= n.digits.length ? 0 : n.digits[v - 1]
                            , $ = v - 2 >= n.digits.length ? 0 : n.digits[v - 2]
                            , j = u >= t.digits.length ? 0 : t.digits[u]
                            , A = u - 1 >= t.digits.length ? 0 : t.digits[u - 1];
                        i.digits[v - u - 1] = w == j ? 65535 : Math.floor((65536 * w + k) / j);
                        for (var T = i.digits[v - u - 1] * (65536 * j + A), O = 4294967296 * w + (65536 * k + $); T > O; )
                            --i.digits[v - u - 1],
                                T = i.digits[v - u - 1] * (65536 * j | A),
                                O = 65536 * w * 65536 + (65536 * k + $);
                        (n = g(n, b(h = _(t, v - u - 1), i.digits[v - u - 1]))).isNeg && (n = f(n, h),
                            --i.digits[v - u - 1])
                    }
                    return n = x(n, d),
                        i.isNeg = e.isNeg != c,
                    e.isNeg && (i = c ? f(i, o) : g(i, o),
                        n = g(t = x(t, d), n)),
                    0 == n.digits[0] && 0 == m(n) && (n.isNeg = !1),
                        new Array(i,n)
                }
                t.setMaxDigits = s,
                    t.biFromHex = function(e) {
                        for (var t = new a, i = e.length, n = 0; i > 0; i -= 4,
                            ++n)
                            t.digits[n] = h(e.substr(Math.max(i - 4, 0), Math.min(i, 4)));
                        return t
                    }
                    ,
                    t.biHighIndex = m,
                    t.biCopy = r,
                    t.BigInt = a,
                    t.biDivide = function(e, t) {
                        return j(e, t)[0]
                    }
                    ,
                    t.biMultiply = v,
                    t.biDivideByRadixPower = function(e, t) {
                        var i = new a;
                        return w(e.digits, t, i.digits, 0, i.digits.length - t),
                            i
                    }
                    ,
                    t.biModuloByRadixPower = function(e, t) {
                        var i = new a;
                        return w(e.digits, 0, i.digits, 0, t),
                            i
                    }
                    ,
                    t.biSubtract = g,
                    t.biCompare = S,
                    t.biShiftRight = x,
                    t.biToHex = function(e) {
                        for (var t = "", i = (m(e),
                            m(e)); i > -1; --i)
                            t += d(e.digits[i]);
                        return t
                    }
            },
            303: function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                    t.encryptedString = t.RSAKeyPair = void 0;
                var n = i(228)
                    , o = i(304)
                    , s = {};
                s.NoPadding = "NoPadding",
                    s.PKCS1Padding = "PKCS1Padding",
                    s.RawEncoding = "RawEncoding",
                    s.NumericEncoding = "NumericEncoding",
                    t.RSAKeyPair = function(e, t, i, s) {
                        this.e = (0,
                            n.biFromHex)(e),
                            this.d = (0,
                                n.biFromHex)(t),
                            this.m = (0,
                                n.biFromHex)(i),
                            this.chunkSize = "number" != typeof s ? 2 * (0,
                                n.biHighIndex)(this.m) : s / 8,
                            this.radix = 16,
                            this.barrett = new o.BarrettMu(this.m)
                    }
                    ,
                    t.encryptedString = function(e, t, i, o) {
                        var a, r, l, c, u, d, p, h, f, g = new Array, m = t.length, y = "";
                        for (c = "string" == typeof i ? i == s.NoPadding ? 1 : i == s.PKCS1Padding ? 2 : 0 : 0,
                                 u = "string" == typeof o && o == s.RawEncoding ? 1 : 0,
                                 1 == c ? m > e.chunkSize && (m = e.chunkSize) : 2 == c && m > e.chunkSize - 11 && (m = e.chunkSize - 11),
                                 a = 0,
                                 r = 2 == c ? m - 1 : e.chunkSize - 1; a < m; )
                            c ? g[r] = t.charCodeAt(a) : g[a] = t.charCodeAt(a),
                                a++,
                                r--;
                        for (1 == c && (a = 0),
                                 r = e.chunkSize - m % e.chunkSize; r > 0; ) {
                            if (2 == c) {
                                for (d = Math.floor(256 * Math.random()); !d; )
                                    d = Math.floor(256 * Math.random());
                                g[a] = d
                            } else
                                g[a] = 0;
                            a++,
                                r--
                        }
                        for (2 == c && (g[m] = 0,
                            g[e.chunkSize - 2] = 2,
                            g[e.chunkSize - 1] = 0),
                                 p = g.length,
                                 a = 0; a < p; a += e.chunkSize) {
                            for (h = new n.BigInt,
                                     r = 0,
                                     l = a; l < a + e.chunkSize; ++r)
                                h.digits[r] = g[l++],
                                    h.digits[r] += g[l++] << 8;
                            f = e.barrett.powMod(h, e.e),
                                y += 1 == u ? biToBytes(f) : 16 == e.radix ? (0,
                                    n.biToHex)(f) : biToString(f, e.radix)
                        }
                        return y
                    }
            },
            304: function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                    t.BarrettMu_powMod = t.BarrettMu_multiplyMod = t.BarrettMu_modulo = t.BarrettMu = void 0;
                var n = i(228);
                function o(e) {
                    var t = (0,
                        n.biDivideByRadixPower)(e, this.k - 1)
                        , i = (0,
                        n.biMultiply)(t, this.mu)
                        , o = (0,
                        n.biDivideByRadixPower)(i, this.k + 1)
                        , s = (0,
                        n.biModuloByRadixPower)(e, this.k + 1)
                        , a = (0,
                        n.biMultiply)(o, this.modulus)
                        , r = (0,
                        n.biModuloByRadixPower)(a, this.k + 1)
                        , l = (0,
                        n.biSubtract)(s, r);
                    l.isNeg && (l = biAdd(l, this.bkplus1));
                    for (var c = (0,
                        n.biCompare)(l, this.modulus) >= 0; c; )
                        l = (0,
                            n.biSubtract)(l, this.modulus),
                            c = (0,
                                n.biCompare)(l, this.modulus) >= 0;
                    return l
                }
                function s(e, t) {
                    var i = (0,
                        n.biMultiply)(e, t);
                    return this.modulo(i)
                }
                function a(e, t) {
                    var i = new n.BigInt;
                    i.digits[0] = 1;
                    for (var o = e, s = t; 0 != (1 & s.digits[0]) && (i = this.multiplyMod(i, o)),
                    0 != (s = (0,
                        n.biShiftRight)(s, 1)).digits[0] || 0 != (0,
                        n.biHighIndex)(s); )
                        o = this.multiplyMod(o, o);
                    return i
                }
                t.BarrettMu = function(e) {
                    this.modulus = (0,
                        n.biCopy)(e),
                        this.k = (0,
                            n.biHighIndex)(this.modulus) + 1;
                    var t = new n.BigInt;
                    t.digits[2 * this.k] = 1,
                        this.mu = (0,
                            n.biDivide)(t, this.modulus),
                        this.bkplus1 = new n.BigInt,
                        this.bkplus1.digits[this.k + 1] = 1,
                        this.modulo = o,
                        this.multiplyMod = s,
                        this.powMod = a
                }
                    ,
                    t.BarrettMu_modulo = o,
                    t.BarrettMu_multiplyMod = s,
                    t.BarrettMu_powMod = a
            },
        })
        ,
    function () {
        window.getpwd = function (pwd) {
            var r = window._228;
            var l = window._303
            r.setMaxDigits(129);
            var n = new l.RSAKeyPair("10001","","BC087C7C00848CE8A349C9072C3229E0D595F817EDDE9ABF6FC72B41942A759E97956CE9CB7D1F2E99399EADBACC0531F16EAE8EFCB68553DE0E125B2231ED955ADBF5208E65DC804237C93EB23C83E7ECDA0B586ECF31839038EE6B640E0EEC5FF17D219FDEA33E730F287F0D384C74A53DFE1F91ACC63C7C92039A43AC6E97");
            var o = l.encryptedString(n, pwd);
            return o;
        }
    }
    ])});
console.log(window.getpwd("111111"));
//正确的代码 "3b2ea640ef8d56f783e3f044b2f8d11d8dacfe3f638b116cacd9190fa7c04e9920f1519ffb42dd0828ce9e781a66d43f9c44b228ace2c06fa97f799ec180e55b2657a835461f6a3b593cf2c070d62f747c94f57c9c94480bba29995198ac1eea91e54d286a926ab8a69bc03946cdb207c127cbdfa80ae8f383ed64a91e0a0a9a"
//本机运行的 "3b2ea640ef8d56f783e3f044b2f8d11d8dacfe3f638b116cacd9190fa7c04e9920f1519ffb42dd0828ce9e781a66d43f9c44b228ace2c06fa97f799ec180e55b2657a835461f6a3b593cf2c070d62f747c94f57c9c94480bba29995198ac1eea91e54d286a926ab8a69bc03946cdb207c127cbdfa80ae8f383ed64a91e0a0a9a"



