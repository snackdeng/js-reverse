var window = this;
window.zhiyuan ="";
/*! #metadata# @jsc/video: 2.39.0-5f760d19 (2020-08-27T08:00:35.767Z) */
!function(e, t) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var n = t();
        for (var i in n)
            ("object" == typeof exports ? exports : e)[i] = n[i]
    }
}(window, (function() {
    return function(e) {
        function t(t) {
            for (var n, r, o = t[0], a = t[1], s = 0, u = []; s < o.length; s++)
                r = o[s],
                Object.prototype.hasOwnProperty.call(i, r) && i[r] && u.push(i[r][0]),
                i[r] = 0;
            for (n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            for (l && l(t); u.length; )
                u.shift()()
        }
        var n = {}
          , i = {
            12: 0
        };
        function r(e) {
            return o.p + "widgets/jsc-" + ({
                0: "auxiliary~player",
                1: "vendors~auxiliary~player",
                2: "vendors~bscroll~player",
                3: "ace",
                4: "auxiliary",
                5: "bscroll",
                6: "combo",
                7: "feedback",
                8: "musth5",
                9: "no-flash-tips",
                10: "player",
                11: "vendors~player"
            }[e] || e) + "." + {
                0: "1d941153",
                1: "2b17b17b",
                2: "a35854ca",
                3: "640c3779",
                4: "31d995f9",
                5: "e432e305",
                6: "53937012",
                7: "fb482c30",
                8: "30e63da9",
                9: "4ac968dd",
                10: "e3162a7f",
                11: "2fe2ab26"
            }[e] + ".js"
        }
        function o(t) {
            if (n[t])
                return n[t].exports;
            var i = n[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(i.exports, i, i.exports, o),
            i.l = !0,
            i.exports
        }
		window.zhiyuan = o;
        o.e = function(e) {
            var t = []
              , n = i[e];
            if (0 !== n)
                if (n)
                    t.push(n[2]);
                else {
                    var a = new Promise((function(t, r) {
                        n = i[e] = [t, r]
                    }
                    ));
                    t.push(n[2] = a);
                    var s = new Error;
                    var u = function t(n, a) {
                        var u, l = document.createElement("script"), d = "&retry-attempt=" + (1 - a + 1);
                        l.charset = "utf-8",
                        l.timeout = 120,
                        o.nc && l.setAttribute("nonce", o.nc),
                        l.src = n,
                        u = function(n) {
                            l.onerror = l.onload = null,
                            clearTimeout(f);
                            var o = i[e];
                            if (0 !== o)
                                if (o)
                                    if (0 === a) {
                                        var u = n && ("load" === n.type ? "missing" : n.type)
                                          , c = n && n.target && n.target.src;
                                        s.message = "Loading chunk " + e + " failed after 1 retries.\n(" + u + ": " + c + ")",
                                        s.name = "ChunkLoadError",
                                        s.type = u,
                                        s.request = c,
                                        o[1](s),
                                        i[e] = void 0
                                    } else {
                                        var h = "cache-bust=true" + d
                                          , p = t(r(e) + "?" + h, a - 1);
                                        document.head.appendChild(p)
                                    }
                                else
                                    i[e] = void 0
                        }
                        ;
                        var f = setTimeout((function() {
                            u({
                                type: "timeout",
                                target: l
                            })
                        }
                        ), 12e4);
                        return l.onerror = l.onload = u,
                        l
                    }(r(e), 1);
                    document.head.appendChild(u)
                }
            return Promise.all(t)
        }
        ,
        o.m = e,
        o.c = n,
        o.d = function(e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }
        ,
        o.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        o.t = function(e, t) {
            if (1 & t && (e = o(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (o.r(n),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }),
            2 & t && "string" != typeof e)
                for (var i in e)
                    o.d(n, i, function(t) {
                        return e[t]
                    }
                    .bind(null, i));
            return n
        }
        ,
        o.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return o.d(t, "a", t),
            t
        }
        ,
        o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        o.p = "https://s1.hdslb.com/bfs/static/player/main/",
        o.oe = function(e) {
            throw console.error(e),
            e
        }
        ;
        var a = window.videoWidgetsJsonP = window.videoWidgetsJsonP || []
          , s = a.push.bind(a);
        a.push = t,
        a = a.slice();
        for (var u = 0; u < a.length; u++)
            t(a[u]);
        var l = s;
        return {}
    }({
		440: function(t, e, i) {
    "use strict";
    t.exports = i(441)
},
441: function(t, e, i) {
    "use strict";
    var r = t.exports = i(442);
    r.build = "full", r.tokenize = i(249), r.parse = i(455), r.common = i(456), r.Root._configure(r.Type, r.parse, r.common)
},
442: function(t, e, i) {
    "use strict";
    var r = t.exports = i(239);
    r.build = "light", r.load = function(t, e, i) {
        return "function" == typeof e ? (i = e, e = new r.Root) : e || (e = new r.Root), e.load(t, i)
    }, r.loadSync = function(t, e) {
        return e || (e = new r.Root), e.loadSync(t)
    }, r.encoder = i(244), r.decoder = i(245), r.verifier = i(246), r.converter = i(247), r.ReflectionObject = i(212), r.Namespace = i(214), r.Root = i(227), r.Enum = i(207), r.Type = i(222), r.Field = i(210), r.OneOf = i(215), r.MapField = i(223), r.Service = i(224), r.Method = i(225), r.Message = i(226), r.wrappers = i(248), r.types = i(213), r.util = i(205), r.ReflectionObject._configure(r.Root), r.Namespace._configure(r.Type, r.Service, r.Enum), r.Root._configure(r.Type), r.Field._configure(r.Type)
},
239: function(t, e, i) {
    "use strict";
    var r = e;

    function n() {
        r.Reader._configure(r.BufferReader), r.util._configure()
    }
    r.build = "minimal", r.Writer = i(220), r.BufferWriter = i(449), r.Reader = i(221), r.BufferReader = i(450), r.util = i(208), r.rpc = i(242), r.roots = i(243), r.configure = n, r.Writer._configure(r.BufferWriter), n()
},
220: function(t, e, i) {
    "use strict";
    t.exports = u;
    var r, n = i(208),
        a = n.LongBits,
        o = n.base64,
        s = n.utf8;

    function h(t, e, i) {
        this.fn = t, this.len = e, this.next = void 0, this.val = i
    }
    function l() {}
    function c(t) {
        this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states
    }
    function u() {
        this.len = 0, this.head = new h(l, 0, 0), this.tail = this.head, this.states = null
    }
    function p(t, e, i) {
        e[i] = 255 & t
    }
    function d(t, e) {
        this.len = t, this.next = void 0, this.val = e
    }
    function f(t, e, i) {
        for (; t.hi;) e[i++] = 127 & t.lo | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
        for (; t.lo > 127;) e[i++] = 127 & t.lo | 128, t.lo = t.lo >>> 7;
        e[i++] = t.lo
    }
    function m(t, e, i) {
        e[i] = 255 & t, e[i + 1] = t >>> 8 & 255, e[i + 2] = t >>> 16 & 255, e[i + 3] = t >>> 24
    }
    u.create = n.Buffer ? function() {
        return (u.create = function() {
            return new r
        })()
    } : function() {
        return new u
    }, u.alloc = function(t) {
        return new n.Array(t)
    }, n.Array !== Array && (u.alloc = n.pool(u.alloc, n.Array.prototype.subarray)), u.prototype._push = function(t, e, i) {
        return this.tail = this.tail.next = new h(t, e, i), this.len += e, this
    }, d.prototype = Object.create(h.prototype), d.prototype.fn = function(t, e, i) {
        for (; t > 127;) e[i++] = 127 & t | 128, t >>>= 7;
        e[i] = t
    }, u.prototype.uint32 = function(t) {
        return this.len += (this.tail = this.tail.next = new d((t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5, t)).len, this
    }, u.prototype.int32 = function(t) {
        return t < 0 ? this._push(f, 10, a.fromNumber(t)) : this.uint32(t)
    }, u.prototype.sint32 = function(t) {
        return this.uint32((t << 1 ^ t >> 31) >>> 0)
    }, u.prototype.uint64 = function(t) {
        var e = a.from(t);
        return this._push(f, e.length(), e)
    }, u.prototype.int64 = u.prototype.uint64, u.prototype.sint64 = function(t) {
        var e = a.from(t).zzEncode();
        return this._push(f, e.length(), e)
    }, u.prototype.bool = function(t) {
        return this._push(p, 1, t ? 1 : 0)
    }, u.prototype.fixed32 = function(t) {
        return this._push(m, 4, t >>> 0)
    }, u.prototype.sfixed32 = u.prototype.fixed32, u.prototype.fixed64 = function(t) {
        var e = a.from(t);
        return this._push(m, 4, e.lo)._push(m, 4, e.hi)
    }, u.prototype.sfixed64 = u.prototype.fixed64, u.prototype.float = function(t) {
        return this._push(n.float.writeFloatLE, 4, t)
    }, u.prototype.double = function(t) {
        return this._push(n.float.writeDoubleLE, 8, t)
    };
    var g = n.Array.prototype.set ? function(t, e, i) {
            e.set(t, i)
        } : function(t, e, i) {
            for (var r = 0; r < t.length; ++r) e[i + r] = t[r]
        };
    u.prototype.bytes = function(t) {
        var e = t.length >>> 0;
        if (!e) return this._push(p, 1, 0);
        if (n.isString(t)) {
            var i = u.alloc(e = o.length(t));
            o.decode(t, i, 0), t = i
        }
        return this.uint32(e)._push(g, e, t)
    }, u.prototype.string = function(t) {
        var e = s.length(t);
        return e ? this.uint32(e)._push(s.write, e, t) : this._push(p, 1, 0)
    }, u.prototype.fork = function() {
        return this.states = new c(this), this.head = this.tail = new h(l, 0, 0), this.len = 0, this
    }, u.prototype.reset = function() {
        return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new h(l, 0, 0), this.len = 0), this
    }, u.prototype.ldelim = function() {
        var t = this.head,
            e = this.tail,
            i = this.len;
        return this.reset().uint32(i), i && (this.tail.next = t.next, this.tail = e, this.len += i), this
    }, u.prototype.finish = function() {
        for (var t = this.head.next, e = this.constructor.alloc(this.len), i = 0; t;) t.fn(t.val, e, i), i += t.len, t = t.next;
        return e
    }, u._configure = function(t) {
        r = t
    }
},
208: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var n = e;

    function a(t, e, i) {
        for (var r = Object.keys(e), n = 0; n < r.length; ++n) void 0 !== t[r[n]] && i || (t[r[n]] = e[r[n]]);
        return t
    }
    function o(t) {
        function e(t, i) {
            if (!(this instanceof e)) return new e(t, i);
            Object.defineProperty(this, "message", {
                get: function() {
                    return t
                }
            }), Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {
                value: (new Error).stack || ""
            }), i && a(this, i)
        }
        return (e.prototype = Object.create(Error.prototype)).constructor = e, Object.defineProperty(e.prototype, "name", {
            get: function() {
                return t
            }
        }), e.prototype.toString = function() {
            return this.name + ": " + this.message
        }, e
    }
    n.asPromise = i(240), n.base64 = i(443), n.EventEmitter = i(444), n.float = i(445), n.inquire = i(241), n.utf8 = i(446), n.pool = i(447), n.LongBits = i(448), n.global = "undefined" != typeof window && window || "undefined" != typeof global && global || "undefined" != typeof self && self || this, n.emptyArray = Object.freeze ? Object.freeze([]) : [], n.emptyObject = Object.freeze ? Object.freeze({}) : {}, n.isNode = Boolean(n.global.process && n.global.process.versions && n.global.process.versions.node), n.isInteger = Number.isInteger || function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }, n.isString = function(t) {
        return "string" == typeof t || t instanceof String
    }, n.isObject = function(t) {
        return t && "object" === r(t)
    }, n.isset = n.isSet = function(t, e) {
        var i = t[e];
        return !(null == i || !t.hasOwnProperty(e)) && ("object" !== r(i) || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0)
    }, n.Buffer = function() {
        try {
            var t = n.inquire("buffer").Buffer;
            return t.prototype.utf8Write ? t : null
        } catch (t) {
            return null
        }
    }(), n._Buffer_from = null, n._Buffer_allocUnsafe = null, n.newBuffer = function(t) {
        return "number" == typeof t ? n.Buffer ? n._Buffer_allocUnsafe(t) : new n.Array(t) : n.Buffer ? n._Buffer_from(t) : "undefined" == typeof Uint8Array ? t : new Uint8Array(t)
    }, n.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, n.Long = n.global.dcodeIO && n.global.dcodeIO.Long || n.global.Long || n.inquire("long"), n.key2Re = /^true|false|0|1$/, n.key32Re = /^-?(?:0|[1-9][0-9]*)$/, n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, n.longToHash = function(t) {
        return t ? n.LongBits.from(t).toHash() : n.LongBits.zeroHash
    }, n.longFromHash = function(t, e) {
        var i = n.LongBits.fromHash(t);
        return n.Long ? n.Long.fromBits(i.lo, i.hi, e) : i.toNumber(Boolean(e))
    }, n.merge = a, n.lcFirst = function(t) {
        return t.charAt(0).toLowerCase() + t.substring(1)
    }, n.newError = o, n.ProtocolError = o("ProtocolError"), n.oneOfGetter = function(t) {
        for (var e = {}, i = 0; i < t.length; ++i) e[t[i]] = 1;
        return function() {
            for (var t = Object.keys(this), i = t.length - 1; i > -1; --i) if (1 === e[t[i]] && void 0 !== this[t[i]] && null !== this[t[i]]) return t[i]
        }
    }, n.oneOfSetter = function(t) {
        return function(e) {
            for (var i = 0; i < t.length; ++i) t[i] !== e && delete this[t[i]]
        }
    }, n.toJSONOptions = {
        longs: String,
        enums: String,
        bytes: String,
        json: !0
    }, n._configure = function() {
        var t = n.Buffer;
        t ? (n._Buffer_from = t.from !== Uint8Array.from && t.from || function(e, i) {
            return new t(e, i)
        }, n._Buffer_allocUnsafe = t.allocUnsafe || function(e) {
            return new t(e)
        }) : n._Buffer_from = n._Buffer_allocUnsafe = null
    }
},
240: function(t, e, i) {
    "use strict";
    t.exports = function(t, e) {
        var i = new Array(arguments.length - 1),
            r = 0,
            n = 2,
            a = !0;
        for (; n < arguments.length;) i[r++] = arguments[n++];
        return new Promise((function(n, o) {
            i[r] = function(t) {
                if (a) if (a = !1, t) o(t);
                else {
                    for (var e = new Array(arguments.length - 1), i = 0; i < e.length;) e[i++] = arguments[i];
                    n.apply(null, e)
                }
            };
            try {
                t.apply(e || null, i)
            } catch (t) {
                a && (a = !1, o(t))
            }
        }))
    }
},
443: function(t, e, i) {
    "use strict";
    var r = e;
    r.length = function(t) {
        var e = t.length;
        if (!e) return 0;
        for (var i = 0; --e % 4 > 1 && "=" === t.charAt(e);)++i;
        return Math.ceil(3 * t.length) / 4 - i
    };
    for (var n = new Array(64), a = new Array(123), o = 0; o < 64;) a[n[o] = o < 26 ? o + 65 : o < 52 ? o + 71 : o < 62 ? o - 4 : o - 59 | 43] = o++;
    r.encode = function(t, e, i) {
        for (var r, a = null, o = [], s = 0, h = 0; e < i;) {
            var l = t[e++];
            switch (h) {
                case 0:
                    o[s++] = n[l >> 2], r = (3 & l) << 4, h = 1;
                    break;
                case 1:
                    o[s++] = n[r | l >> 4], r = (15 & l) << 2, h = 2;
                    break;
                case 2:
                    o[s++] = n[r | l >> 6], o[s++] = n[63 & l], h = 0
            }
            s > 8191 && ((a || (a = [])).push(String.fromCharCode.apply(String, o)), s = 0)
        }
        return h && (o[s++] = n[r], o[s++] = 61, 1 === h && (o[s++] = 61)), a ? (s && a.push(String.fromCharCode.apply(String, o.slice(0, s))), a.join("")) : String.fromCharCode.apply(String, o.slice(0, s))
    };
    r.decode = function(t, e, i) {
        for (var r, n = i, o = 0, s = 0; s < t.length;) {
            var h = t.charCodeAt(s++);
            if (61 === h && o > 1) break;
            if (void 0 === (h = a[h])) throw Error("invalid encoding");
            switch (o) {
                case 0:
                    r = h, o = 1;
                    break;
                case 1:
                    e[i++] = r << 2 | (48 & h) >> 4, r = h, o = 2;
                    break;
                case 2:
                    e[i++] = (15 & r) << 4 | (60 & h) >> 2, r = h, o = 3;
                    break;
                case 3:
                    e[i++] = (3 & r) << 6 | h, o = 0
            }
        }
        if (1 === o) throw Error("invalid encoding");
        return i - n
    }, r.test = function(t) {
        return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)
    }
},
444: function(t, e, i) {
    "use strict";

    function r() {
        this._listeners = {}
    }
    t.exports = r, r.prototype.on = function(t, e, i) {
        return (this._listeners[t] || (this._listeners[t] = [])).push({
            fn: e,
            ctx: i || this
        }), this
    }, r.prototype.off = function(t, e) {
        if (void 0 === t) this._listeners = {};
        else if (void 0 === e) this._listeners[t] = [];
        else for (var i = this._listeners[t], r = 0; r < i.length;) i[r].fn === e ? i.splice(r, 1) : ++r;
        return this
    }, r.prototype.emit = function(t) {
        var e = this._listeners[t];
        if (e) {
            for (var i = [], r = 1; r < arguments.length;) i.push(arguments[r++]);
            for (r = 0; r < e.length;) e[r].fn.apply(e[r++].ctx, i)
        }
        return this
    }
},
445: function(t, e, i) {
    "use strict";

    function r(t) {
        return "undefined" != typeof Float32Array ? function() {
            var e = new Float32Array([-0]),
                i = new Uint8Array(e.buffer),
                r = 128 === i[3];

            function n(t, r, n) {
                e[0] = t, r[n] = i[0], r[n + 1] = i[1], r[n + 2] = i[2], r[n + 3] = i[3]
            }
            function a(t, r, n) {
                e[0] = t, r[n] = i[3], r[n + 1] = i[2], r[n + 2] = i[1], r[n + 3] = i[0]
            }
            function o(t, r) {
                return i[0] = t[r], i[1] = t[r + 1], i[2] = t[r + 2], i[3] = t[r + 3], e[0]
            }
            function s(t, r) {
                return i[3] = t[r], i[2] = t[r + 1], i[1] = t[r + 2], i[0] = t[r + 3], e[0]
            }
            t.writeFloatLE = r ? n : a, t.writeFloatBE = r ? a : n, t.readFloatLE = r ? o : s, t.readFloatBE = r ? s : o
        }() : function() {
            function e(t, e, i, r) {
                var n = e < 0 ? 1 : 0;
                if (n && (e = -e), 0 === e) t(1 / e > 0 ? 0 : 2147483648, i, r);
                else if (isNaN(e)) t(2143289344, i, r);
                else if (e > 34028234663852886e22) t((n << 31 | 2139095040) >>> 0, i, r);
                else if (e < 11754943508222875e-54) t((n << 31 | Math.round(e / 1401298464324817e-60)) >>> 0, i, r);
                else {
                    var a = Math.floor(Math.log(e) / Math.LN2);
                    t((n << 31 | a + 127 << 23 | 8388607 & Math.round(e * Math.pow(2, -a) * 8388608)) >>> 0, i, r)
                }
            }
            function i(t, e, i) {
                var r = t(e, i),
                    n = 2 * (r >> 31) + 1,
                    a = r >>> 23 & 255,
                    o = 8388607 & r;
                return 255 === a ? o ? NaN : n * (1 / 0) : 0 === a ? 1401298464324817e-60 * n * o : n * Math.pow(2, a - 150) * (o + 8388608)
            }
            t.writeFloatLE = e.bind(null, n), t.writeFloatBE = e.bind(null, a), t.readFloatLE = i.bind(null, o), t.readFloatBE = i.bind(null, s)
        }(), "undefined" != typeof Float64Array ? function() {
            var e = new Float64Array([-0]),
                i = new Uint8Array(e.buffer),
                r = 128 === i[7];

            function n(t, r, n) {
                e[0] = t, r[n] = i[0], r[n + 1] = i[1], r[n + 2] = i[2], r[n + 3] = i[3], r[n + 4] = i[4], r[n + 5] = i[5], r[n + 6] = i[6], r[n + 7] = i[7]
            }
            function a(t, r, n) {
                e[0] = t, r[n] = i[7], r[n + 1] = i[6], r[n + 2] = i[5], r[n + 3] = i[4], r[n + 4] = i[3], r[n + 5] = i[2], r[n + 6] = i[1], r[n + 7] = i[0]
            }
            function o(t, r) {
                return i[0] = t[r], i[1] = t[r + 1], i[2] = t[r + 2], i[3] = t[r + 3], i[4] = t[r + 4], i[5] = t[r + 5], i[6] = t[r + 6], i[7] = t[r + 7], e[0]
            }
            function s(t, r) {
                return i[7] = t[r], i[6] = t[r + 1], i[5] = t[r + 2], i[4] = t[r + 3], i[3] = t[r + 4], i[2] = t[r + 5], i[1] = t[r + 6], i[0] = t[r + 7], e[0]
            }
            t.writeDoubleLE = r ? n : a, t.writeDoubleBE = r ? a : n, t.readDoubleLE = r ? o : s, t.readDoubleBE = r ? s : o
        }() : function() {
            function e(t, e, i, r, n, a) {
                var o = r < 0 ? 1 : 0;
                if (o && (r = -r), 0 === r) t(0, n, a + e), t(1 / r > 0 ? 0 : 2147483648, n, a + i);
                else if (isNaN(r)) t(0, n, a + e), t(2146959360, n, a + i);
                else if (r > 17976931348623157e292) t(0, n, a + e), t((o << 31 | 2146435072) >>> 0, n, a + i);
                else {
                    var s;
                    if (r < 22250738585072014e-324) t((s = r / 5e-324) >>> 0, n, a + e), t((o << 31 | s / 4294967296) >>> 0, n, a + i);
                    else {
                        var h = Math.floor(Math.log(r) / Math.LN2);
                        1024 === h && (h = 1023), t(4503599627370496 * (s = r * Math.pow(2, -h)) >>> 0, n, a + e), t((o << 31 | h + 1023 << 20 | 1048576 * s & 1048575) >>> 0, n, a + i)
                    }
                }
            }
            function i(t, e, i, r, n) {
                var a = t(r, n + e),
                    o = t(r, n + i),
                    s = 2 * (o >> 31) + 1,
                    h = o >>> 20 & 2047,
                    l = 4294967296 * (1048575 & o) + a;
                return 2047 === h ? l ? NaN : s * (1 / 0) : 0 === h ? 5e-324 * s * l : s * Math.pow(2, h - 1075) * (l + 4503599627370496)
            }
            t.writeDoubleLE = e.bind(null, n, 0, 4), t.writeDoubleBE = e.bind(null, a, 4, 0), t.readDoubleLE = i.bind(null, o, 0, 4), t.readDoubleBE = i.bind(null, s, 4, 0)
        }(), t
    }
    function n(t, e, i) {
        e[i] = 255 & t, e[i + 1] = t >>> 8 & 255, e[i + 2] = t >>> 16 & 255, e[i + 3] = t >>> 24
    }
    function a(t, e, i) {
        e[i] = t >>> 24, e[i + 1] = t >>> 16 & 255, e[i + 2] = t >>> 8 & 255, e[i + 3] = 255 & t
    }
    function o(t, e) {
        return (t[e] | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0
    }
    function s(t, e) {
        return (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0
    }
    t.exports = r(r)
},
241: function(module, exports, __webpack_require__) {
    "use strict";

    function inquire(moduleName) {
        try {
            var mod = eval("quire".replace(/^/, "re"))(moduleName);
            if (mod && (mod.length || Object.keys(mod).length)) return mod
        } catch (t) {}
        return null
    }
    module.exports = inquire
},
446: function(t, e, i) {
    "use strict";
    var r = e;
    r.length = function(t) {
        for (var e = 0, i = 0, r = 0; r < t.length; ++r)(i = t.charCodeAt(r)) < 128 ? e += 1 : i < 2048 ? e += 2 : 55296 == (64512 & i) && 56320 == (64512 & t.charCodeAt(r + 1)) ? (++r, e += 4) : e += 3;
        return e
    }, r.read = function(t, e, i) {
        if (i - e < 1) return "";
        for (var r, n = null, a = [], o = 0; e < i;)(r = t[e++]) < 128 ? a[o++] = r : r > 191 && r < 224 ? a[o++] = (31 & r) << 6 | 63 & t[e++] : r > 239 && r < 365 ? (r = ((7 & r) << 18 | (63 & t[e++]) << 12 | (63 & t[e++]) << 6 | 63 & t[e++]) - 65536, a[o++] = 55296 + (r >> 10), a[o++] = 56320 + (1023 & r)) : a[o++] = (15 & r) << 12 | (63 & t[e++]) << 6 | 63 & t[e++], o > 8191 && ((n || (n = [])).push(String.fromCharCode.apply(String, a)), o = 0);
        return n ? (o && n.push(String.fromCharCode.apply(String, a.slice(0, o))), n.join("")) : String.fromCharCode.apply(String, a.slice(0, o))
    },
    r.write = function(t, e, i) {
        for (var r, n, a = i, o = 0; o < t.length; ++o)(r = t.charCodeAt(o)) < 128 ? e[i++] = r : r < 2048 ? (e[i++] = r >> 6 | 192, e[i++] = 63 & r | 128) : 55296 == (64512 & r) && 56320 == (64512 & (n = t.charCodeAt(o + 1))) ? (r = 65536 + ((1023 & r) << 10) + (1023 & n), ++o, e[i++] = r >> 18 | 240, e[i++] = r >> 12 & 63 | 128, e[i++] = r >> 6 & 63 | 128, e[i++] = 63 & r | 128) : (e[i++] = r >> 12 | 224, e[i++] = r >> 6 & 63 | 128, e[i++] = 63 & r | 128);
        return i - a
    }
},
447: function(t, e, i) {
    "use strict";
    t.exports = function(t, e, i) {
        var r = i || 8192,
            n = r >>> 1,
            a = null,
            o = r;
        return function(i) {
            if (i < 1 || i > n) return t(i);
            o + i > r && (a = t(r), o = 0);
            var s = e.call(a, o, o += i);
            return 7 & o && (o = 1 + (7 | o)), s
        }
    }
},
448: function(t, e, i) {
    "use strict";
    t.exports = n;
    var r = i(208);

    function n(t, e) {
        this.lo = t >>> 0, this.hi = e >>> 0
    }
    var a = n.zero = new n(0, 0);
    a.toNumber = function() {
        return 0
    }, a.zzEncode = a.zzDecode = function() {
        return this
    }, a.length = function() {
        return 1
    };
    var o = n.zeroHash = "\0\0\0\0\0\0\0\0";
    n.fromNumber = function(t) {
        if (0 === t) return a;
        var e = t < 0;
        e && (t = -t);
        var i = t >>> 0,
            r = (t - i) / 4294967296 >>> 0;
        return e && (r = ~r >>> 0, i = ~i >>> 0, ++i > 4294967295 && (i = 0, ++r > 4294967295 && (r = 0))), new n(i, r)
    }, n.from = function(t) {
        if ("number" == typeof t) return n.fromNumber(t);
        if (r.isString(t)) {
            if (!r.Long) return n.fromNumber(parseInt(t, 10));
            t = r.Long.fromString(t)
        }
        return t.low || t.high ? new n(t.low >>> 0, t.high >>> 0) : a
    }, n.prototype.toNumber = function(t) {
        if (!t && this.hi >>> 31) {
            var e = 1 + ~this.lo >>> 0,
                i = ~this.hi >>> 0;
            return e || (i = i + 1 >>> 0), -(e + 4294967296 * i)
        }
        return this.lo + 4294967296 * this.hi
    }, n.prototype.toLong = function(t) {
        return r.Long ? new r.Long(0 | this.lo, 0 | this.hi, Boolean(t)) : {
            low: 0 | this.lo,
            high: 0 | this.hi,
            unsigned: Boolean(t)
        }
    };
    var s = String.prototype.charCodeAt;
    n.fromHash = function(t) {
        return t === o ? a : new n((s.call(t, 0) | s.call(t, 1) << 8 | s.call(t, 2) << 16 | s.call(t, 3) << 24) >>> 0, (s.call(t, 4) | s.call(t, 5) << 8 | s.call(t, 6) << 16 | s.call(t, 7) << 24) >>> 0)
    }, n.prototype.toHash = function() {
        return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
    }, n.prototype.zzEncode = function() {
        var t = this.hi >> 31;
        return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ t) >>> 0, this.lo = (this.lo << 1 ^ t) >>> 0, this
    }, n.prototype.zzDecode = function() {
        var t = -(1 & this.lo);
        return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ t) >>> 0, this.hi = (this.hi >>> 1 ^ t) >>> 0, this
    }, n.prototype.length = function() {
        var t = this.lo,
            e = (this.lo >>> 28 | this.hi << 4) >>> 0,
            i = this.hi >>> 24;
        return 0 === i ? 0 === e ? t < 16384 ? t < 128 ? 1 : 2 : t < 2097152 ? 3 : 4 : e < 16384 ? e < 128 ? 5 : 6 : e < 2097152 ? 7 : 8 : i < 128 ? 9 : 10
    }
},
208: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var n = e;

    function a(t, e, i) {
        for (var r = Object.keys(e), n = 0; n < r.length; ++n) void 0 !== t[r[n]] && i || (t[r[n]] = e[r[n]]);
        return t
    }
    function o(t) {
        function e(t, i) {
            if (!(this instanceof e)) return new e(t, i);
            Object.defineProperty(this, "message", {
                get: function() {
                    return t
                }
            }), Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {
                value: (new Error).stack || ""
            }), i && a(this, i)
        }
        return (e.prototype = Object.create(Error.prototype)).constructor = e, Object.defineProperty(e.prototype, "name", {
            get: function() {
                return t
            }
        }), e.prototype.toString = function() {
            return this.name + ": " + this.message
        }, e
    }
    n.asPromise = i(240), n.base64 = i(443), n.EventEmitter = i(444), n.float = i(445), n.inquire = i(241), n.utf8 = i(446), n.pool = i(447), n.LongBits = i(448), n.global = "undefined" != typeof window && window || "undefined" != typeof global && global || "undefined" != typeof self && self || this, n.emptyArray = Object.freeze ? Object.freeze([]) : [], n.emptyObject = Object.freeze ? Object.freeze({}) : {}, n.isNode = Boolean(n.global.process && n.global.process.versions && n.global.process.versions.node), n.isInteger = Number.isInteger || function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }, n.isString = function(t) {
        return "string" == typeof t || t instanceof String
    }, n.isObject = function(t) {
        return t && "object" === r(t)
    }, n.isset = n.isSet = function(t, e) {
        var i = t[e];
        return !(null == i || !t.hasOwnProperty(e)) && ("object" !== r(i) || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0)
    }, n.Buffer = function() {
        try {
            var t = n.inquire("buffer").Buffer;
            return t.prototype.utf8Write ? t : null
        } catch (t) {
            return null
        }
    }(), n._Buffer_from = null, n._Buffer_allocUnsafe = null, n.newBuffer = function(t) {
        return "number" == typeof t ? n.Buffer ? n._Buffer_allocUnsafe(t) : new n.Array(t) : n.Buffer ? n._Buffer_from(t) : "undefined" == typeof Uint8Array ? t : new Uint8Array(t)
    }, n.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, n.Long = n.global.dcodeIO && n.global.dcodeIO.Long || n.global.Long || n.inquire("long"), n.key2Re = /^true|false|0|1$/, n.key32Re = /^-?(?:0|[1-9][0-9]*)$/, n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, n.longToHash = function(t) {
        return t ? n.LongBits.from(t).toHash() : n.LongBits.zeroHash
    }, n.longFromHash = function(t, e) {
        var i = n.LongBits.fromHash(t);
        return n.Long ? n.Long.fromBits(i.lo, i.hi, e) : i.toNumber(Boolean(e))
    }, n.merge = a, n.lcFirst = function(t) {
        return t.charAt(0).toLowerCase() + t.substring(1)
    }, n.newError = o, n.ProtocolError = o("ProtocolError"), n.oneOfGetter = function(t) {
        for (var e = {}, i = 0; i < t.length; ++i) e[t[i]] = 1;
        return function() {
            for (var t = Object.keys(this), i = t.length - 1; i > -1; --i) if (1 === e[t[i]] && void 0 !== this[t[i]] && null !== this[t[i]]) return t[i]
        }
    }, n.oneOfSetter = function(t) {
        return function(e) {
            for (var i = 0; i < t.length; ++i) t[i] !== e && delete this[t[i]]
        }
    }, n.toJSONOptions = {
        longs: String,
        enums: String,
        bytes: String,
        json: !0
    }, n._configure = function() {
        var t = n.Buffer;
        t ? (n._Buffer_from = t.from !== Uint8Array.from && t.from || function(e, i) {
            return new t(e, i)
        }, n._Buffer_allocUnsafe = t.allocUnsafe || function(e) {
            return new t(e)
        }) : n._Buffer_from = n._Buffer_allocUnsafe = null
    }
},
449: function(t, e, i) {
    "use strict";
    t.exports = o;
    var r = i(220);
    (o.prototype = Object.create(r.prototype)).constructor = o;
    var n = i(208),
        a = n.Buffer;

    function o() {
        r.call(this)
    }
    o.alloc = function(t) {
        return (o.alloc = n._Buffer_allocUnsafe)(t)
    };
    var s = a && a.prototype instanceof Uint8Array && "set" === a.prototype.set.name ? function(t, e, i) {
            e.set(t, i)
        } : function(t, e, i) {
            if (t.copy) t.copy(e, i, 0, t.length);
            else for (var r = 0; r < t.length;) e[i++] = t[r++]
        };

    function h(t, e, i) {
        t.length < 40 ? n.utf8.write(t, e, i) : e.utf8Write(t, i)
    }
    o.prototype.bytes = function(t) {
        n.isString(t) && (t = n._Buffer_from(t, "base64"));
        var e = t.length >>> 0;
        return this.uint32(e), e && this._push(s, e, t), this
    }, o.prototype.string = function(t) {
        var e = a.byteLength(t);
        return this.uint32(e), e && this._push(h, e, t), this
    }
},
220: function(t, e, i) {
    "use strict";
    t.exports = u;
    var r, n = i(208),
        a = n.LongBits,
        o = n.base64,
        s = n.utf8;

    function h(t, e, i) {
        this.fn = t, this.len = e, this.next = void 0, this.val = i
    }
    function l() {}
    function c(t) {
        this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states
    }
    function u() {
        this.len = 0, this.head = new h(l, 0, 0), this.tail = this.head, this.states = null
    }
    function p(t, e, i) {
        e[i] = 255 & t
    }
    function d(t, e) {
        this.len = t, this.next = void 0, this.val = e
    }
    function f(t, e, i) {
        for (; t.hi;) e[i++] = 127 & t.lo | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
        for (; t.lo > 127;) e[i++] = 127 & t.lo | 128, t.lo = t.lo >>> 7;
        e[i++] = t.lo
    }
    function m(t, e, i) {
        e[i] = 255 & t, e[i + 1] = t >>> 8 & 255, e[i + 2] = t >>> 16 & 255, e[i + 3] = t >>> 24
    }
    u.create = n.Buffer ? function() {
        return (u.create = function() {
            return new r
        })()
    } : function() {
        return new u
    }, u.alloc = function(t) {
        return new n.Array(t)
    }, n.Array !== Array && (u.alloc = n.pool(u.alloc, n.Array.prototype.subarray)), u.prototype._push = function(t, e, i) {
        return this.tail = this.tail.next = new h(t, e, i), this.len += e, this
    }, d.prototype = Object.create(h.prototype), d.prototype.fn = function(t, e, i) {
        for (; t > 127;) e[i++] = 127 & t | 128, t >>>= 7;
        e[i] = t
    }, u.prototype.uint32 = function(t) {
        return this.len += (this.tail = this.tail.next = new d((t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5, t)).len, this
    }, u.prototype.int32 = function(t) {
        return t < 0 ? this._push(f, 10, a.fromNumber(t)) : this.uint32(t)
    }, u.prototype.sint32 = function(t) {
        return this.uint32((t << 1 ^ t >> 31) >>> 0)
    }, u.prototype.uint64 = function(t) {
        var e = a.from(t);
        return this._push(f, e.length(), e)
    }, u.prototype.int64 = u.prototype.uint64, u.prototype.sint64 = function(t) {
        var e = a.from(t).zzEncode();
        return this._push(f, e.length(), e)
    }, u.prototype.bool = function(t) {
        return this._push(p, 1, t ? 1 : 0)
    }, u.prototype.fixed32 = function(t) {
        return this._push(m, 4, t >>> 0)
    }, u.prototype.sfixed32 = u.prototype.fixed32, u.prototype.fixed64 = function(t) {
        var e = a.from(t);
        return this._push(m, 4, e.lo)._push(m, 4, e.hi)
    }, u.prototype.sfixed64 = u.prototype.fixed64, u.prototype.float = function(t) {
        return this._push(n.float.writeFloatLE, 4, t)
    }, u.prototype.double = function(t) {
        return this._push(n.float.writeDoubleLE, 8, t)
    };
    var g = n.Array.prototype.set ? function(t, e, i) {
            e.set(t, i)
        } : function(t, e, i) {
            for (var r = 0; r < t.length; ++r) e[i + r] = t[r]
        };
    u.prototype.bytes = function(t) {
        var e = t.length >>> 0;
        if (!e) return this._push(p, 1, 0);
        if (n.isString(t)) {
            var i = u.alloc(e = o.length(t));
            o.decode(t, i, 0), t = i
        }
        return this.uint32(e)._push(g, e, t)
    }, u.prototype.string = function(t) {
        var e = s.length(t);
        return e ? this.uint32(e)._push(s.write, e, t) : this._push(p, 1, 0)
    }, u.prototype.fork = function() {
        return this.states = new c(this), this.head = this.tail = new h(l, 0, 0), this.len = 0, this
    }, u.prototype.reset = function() {
        return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new h(l, 0, 0), this.len = 0), this
    }, u.prototype.ldelim = function() {
        var t = this.head,
            e = this.tail,
            i = this.len;
        return this.reset().uint32(i), i && (this.tail.next = t.next, this.tail = e, this.len += i), this
    }, u.prototype.finish = function() {
        for (var t = this.head.next, e = this.constructor.alloc(this.len), i = 0; t;) t.fn(t.val, e, i), i += t.len, t = t.next;
        return e
    }, u._configure = function(t) {
        r = t
    }
},
208: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var n = e;

    function a(t, e, i) {
        for (var r = Object.keys(e), n = 0; n < r.length; ++n) void 0 !== t[r[n]] && i || (t[r[n]] = e[r[n]]);
        return t
    }
    function o(t) {
        function e(t, i) {
            if (!(this instanceof e)) return new e(t, i);
            Object.defineProperty(this, "message", {
                get: function() {
                    return t
                }
            }), Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {
                value: (new Error).stack || ""
            }), i && a(this, i)
        }
        return (e.prototype = Object.create(Error.prototype)).constructor = e, Object.defineProperty(e.prototype, "name", {
            get: function() {
                return t
            }
        }), e.prototype.toString = function() {
            return this.name + ": " + this.message
        }, e
    }
    n.asPromise = i(240), n.base64 = i(443), n.EventEmitter = i(444), n.float = i(445), n.inquire = i(241), n.utf8 = i(446), n.pool = i(447), n.LongBits = i(448), n.global = "undefined" != typeof window && window || "undefined" != typeof global && global || "undefined" != typeof self && self || this, n.emptyArray = Object.freeze ? Object.freeze([]) : [], n.emptyObject = Object.freeze ? Object.freeze({}) : {}, n.isNode = Boolean(n.global.process && n.global.process.versions && n.global.process.versions.node), n.isInteger = Number.isInteger || function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }, n.isString = function(t) {
        return "string" == typeof t || t instanceof String
    }, n.isObject = function(t) {
        return t && "object" === r(t)
    }, n.isset = n.isSet = function(t, e) {
        var i = t[e];
        return !(null == i || !t.hasOwnProperty(e)) && ("object" !== r(i) || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0)
    }, n.Buffer = function() {
        try {
            var t = n.inquire("buffer").Buffer;
            return t.prototype.utf8Write ? t : null
        } catch (t) {
            return null
        }
    }(), n._Buffer_from = null, n._Buffer_allocUnsafe = null, n.newBuffer = function(t) {
        return "number" == typeof t ? n.Buffer ? n._Buffer_allocUnsafe(t) : new n.Array(t) : n.Buffer ? n._Buffer_from(t) : "undefined" == typeof Uint8Array ? t : new Uint8Array(t)
    }, n.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, n.Long = n.global.dcodeIO && n.global.dcodeIO.Long || n.global.Long || n.inquire("long"), n.key2Re = /^true|false|0|1$/, n.key32Re = /^-?(?:0|[1-9][0-9]*)$/, n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, n.longToHash = function(t) {
        return t ? n.LongBits.from(t).toHash() : n.LongBits.zeroHash
    }, n.longFromHash = function(t, e) {
        var i = n.LongBits.fromHash(t);
        return n.Long ? n.Long.fromBits(i.lo, i.hi, e) : i.toNumber(Boolean(e))
    }, n.merge = a, n.lcFirst = function(t) {
        return t.charAt(0).toLowerCase() + t.substring(1)
    }, n.newError = o, n.ProtocolError = o("ProtocolError"), n.oneOfGetter = function(t) {
        for (var e = {}, i = 0; i < t.length; ++i) e[t[i]] = 1;
        return function() {
            for (var t = Object.keys(this), i = t.length - 1; i > -1; --i) if (1 === e[t[i]] && void 0 !== this[t[i]] && null !== this[t[i]]) return t[i]
        }
    }, n.oneOfSetter = function(t) {
        return function(e) {
            for (var i = 0; i < t.length; ++i) t[i] !== e && delete this[t[i]]
        }
    }, n.toJSONOptions = {
        longs: String,
        enums: String,
        bytes: String,
        json: !0
    }, n._configure = function() {
        var t = n.Buffer;
        t ? (n._Buffer_from = t.from !== Uint8Array.from && t.from || function(e, i) {
            return new t(e, i)
        }, n._Buffer_allocUnsafe = t.allocUnsafe || function(e) {
            return new t(e)
        }) : n._Buffer_from = n._Buffer_allocUnsafe = null
    }
},
221: function(t, e, i) {
    "use strict";
    t.exports = h;
    var r, n = i(208),
        a = n.LongBits,
        o = n.utf8;

    function s(t, e) {
        return RangeError("index out of range: " + t.pos + " + " + (e || 1) + " > " + t.len)
    }
    function h(t) {
        this.buf = t,
        this.pos = 0, this.len = t.length
    }
    var l, c = "undefined" != typeof Uint8Array ? function(t) {
            if (t instanceof Uint8Array || Array.isArray(t)) return new h(t);
            throw Error("illegal buffer")
        } : function(t) {
            if (Array.isArray(t)) return new h(t);
            throw Error("illegal buffer")
        };

    function u() {
        var t = new a(0, 0),
            e = 0;
        if (!(this.len - this.pos > 4)) {
            for (; e < 3; ++e) {
                if (this.pos >= this.len) throw s(this);
                if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t
            }
            return t.lo = (t.lo | (127 & this.buf[this.pos++]) << 7 * e) >>> 0, t
        }
        for (; e < 4; ++e) if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t;
        if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 28) >>> 0, t.hi = (t.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return t;
        if (e = 0, this.len - this.pos > 4) {
            for (; e < 5; ++e) if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
        } else for (; e < 5; ++e) {
            if (this.pos >= this.len) throw s(this);
            if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
        }
        throw Error("invalid varint encoding")
    }
    function p(t, e) {
        return (t[e - 4] | t[e - 3] << 8 | t[e - 2] << 16 | t[e - 1] << 24) >>> 0
    }
    function d() {
        if (this.pos + 8 > this.len) throw s(this, 8);
        return new a(p(this.buf, this.pos += 4), p(this.buf, this.pos += 4))
    }
    h.create = n.Buffer ? function(t) {
        return (h.create = function(t) {
            return n.Buffer.isBuffer(t) ? new r(t) : c(t)
        })(t)
    } : c, h.prototype._slice = n.Array.prototype.subarray || n.Array.prototype.slice, h.prototype.uint32 = (l = 4294967295, function() {
        if (l = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return l;
        if (l = (l | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return l;
        if (l = (l | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return l;
        if (l = (l | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return l;
        if (l = (l | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return l;
        if ((this.pos += 5) > this.len) throw this.pos = this.len, s(this, 10);
        return l
    }), h.prototype.int32 = function() {
        return 0 | this.uint32()
    }, h.prototype.sint32 = function() {
        var t = this.uint32();
        return t >>> 1 ^ -(1 & t) | 0
    }, h.prototype.bool = function() {
        return 0 !== this.uint32()
    }, h.prototype.fixed32 = function() {
        if (this.pos + 4 > this.len) throw s(this, 4);
        return p(this.buf, this.pos += 4)
    }, h.prototype.sfixed32 = function() {
        if (this.pos + 4 > this.len) throw s(this, 4);
        return 0 | p(this.buf, this.pos += 4)
    }, h.prototype.float = function() {
        if (this.pos + 4 > this.len) throw s(this, 4);
        var t = n.float.readFloatLE(this.buf, this.pos);
        return this.pos += 4, t
    }, h.prototype.double = function() {
        if (this.pos + 8 > this.len) throw s(this, 4);
        var t = n.float.readDoubleLE(this.buf, this.pos);
        return this.pos += 8, t
    }, h.prototype.bytes = function() {
        var t = this.uint32(),
            e = this.pos,
            i = this.pos + t;
        if (i > this.len) throw s(this, t);
        return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(e, i) : e === i ? new this.buf.constructor(0) : this._slice.call(this.buf, e, i)
    }, h.prototype.string = function() {
        var t = this.bytes();
        return o.read(t, 0, t.length)
    }, h.prototype.skip = function(t) {
        if ("number" == typeof t) {
            if (this.pos + t > this.len) throw s(this, t);
            this.pos += t
        } else do {
            if (this.pos >= this.len) throw s(this)
        } while (128 & this.buf[this.pos++]);
        return this
    }, h.prototype.skipType = function(t) {
        switch (t) {
            case 0:
                this.skip();
                break;
            case 1:
                this.skip(8);
                break;
            case 2:
                this.skip(this.uint32());
                break;
            case 3:
                for (; 4 != (t = 7 & this.uint32());) this.skipType(t);
                break;
            case 5:
                this.skip(4);
                break;
            default:
                throw Error("invalid wire type " + t + " at offset " + this.pos)
        }
        return this
    }, h._configure = function(t) {
        r = t;
        var e = n.Long ? "toLong" : "toNumber";
        n.merge(h.prototype, {
            int64: function() {
                return u.call(this)[e](!1)
            },
            uint64: function() {
                return u.call(this)[e](!0)
            },
            sint64: function() {
                return u.call(this).zzDecode()[e](!1)
            },
            fixed64: function() {
                return d.call(this)[e](!0)
            },
            sfixed64: function() {
                return d.call(this)[e](!1)
            }
        })
    }
},
208: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var n = e;

    function a(t, e, i) {
        for (var r = Object.keys(e), n = 0; n < r.length; ++n) void 0 !== t[r[n]] && i || (t[r[n]] = e[r[n]]);
        return t
    }
    function o(t) {
        function e(t, i) {
            if (!(this instanceof e)) return new e(t, i);
            Object.defineProperty(this, "message", {
                get: function() {
                    return t
                }
            }), Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {
                value: (new Error).stack || ""
            }), i && a(this, i)
        }
        return (e.prototype = Object.create(Error.prototype)).constructor = e, Object.defineProperty(e.prototype, "name", {
            get: function() {
                return t
            }
        }), e.prototype.toString = function() {
            return this.name + ": " + this.message
        }, e
    }
    n.asPromise = i(240), n.base64 = i(443), n.EventEmitter = i(444), n.float = i(445), n.inquire = i(241), n.utf8 = i(446), n.pool = i(447), n.LongBits = i(448), n.global = "undefined" != typeof window && window || "undefined" != typeof global && global || "undefined" != typeof self && self || this, n.emptyArray = Object.freeze ? Object.freeze([]) : [], n.emptyObject = Object.freeze ? Object.freeze({}) : {}, n.isNode = Boolean(n.global.process && n.global.process.versions && n.global.process.versions.node), n.isInteger = Number.isInteger || function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }, n.isString = function(t) {
        return "string" == typeof t || t instanceof String
    }, n.isObject = function(t) {
        return t && "object" === r(t)
    }, n.isset = n.isSet = function(t, e) {
        var i = t[e];
        return !(null == i || !t.hasOwnProperty(e)) && ("object" !== r(i) || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0)
    }, n.Buffer = function() {
        try {
            var t = n.inquire("buffer").Buffer;
            return t.prototype.utf8Write ? t : null
        } catch (t) {
            return null
        }
    }(), n._Buffer_from = null, n._Buffer_allocUnsafe = null, n.newBuffer = function(t) {
        return "number" == typeof t ? n.Buffer ? n._Buffer_allocUnsafe(t) : new n.Array(t) : n.Buffer ? n._Buffer_from(t) : "undefined" == typeof Uint8Array ? t : new Uint8Array(t)
    }, n.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, n.Long = n.global.dcodeIO && n.global.dcodeIO.Long || n.global.Long || n.inquire("long"), n.key2Re = /^true|false|0|1$/, n.key32Re = /^-?(?:0|[1-9][0-9]*)$/, n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, n.longToHash = function(t) {
        return t ? n.LongBits.from(t).toHash() : n.LongBits.zeroHash
    }, n.longFromHash = function(t, e) {
        var i = n.LongBits.fromHash(t);
        return n.Long ? n.Long.fromBits(i.lo, i.hi, e) : i.toNumber(Boolean(e))
    }, n.merge = a, n.lcFirst = function(t) {
        return t.charAt(0).toLowerCase() + t.substring(1)
    }, n.newError = o, n.ProtocolError = o("ProtocolError"), n.oneOfGetter = function(t) {
        for (var e = {}, i = 0; i < t.length; ++i) e[t[i]] = 1;
        return function() {
            for (var t = Object.keys(this), i = t.length - 1; i > -1; --i) if (1 === e[t[i]] && void 0 !== this[t[i]] && null !== this[t[i]]) return t[i]
        }
    }, n.oneOfSetter = function(t) {
        return function(e) {
            for (var i = 0; i < t.length; ++i) t[i] !== e && delete this[t[i]]
        }
    }, n.toJSONOptions = {
        longs: String,
        enums: String,
        bytes: String,
        json: !0
    }, n._configure = function() {
        var t = n.Buffer;
        t ? (n._Buffer_from = t.from !== Uint8Array.from && t.from || function(e, i) {
            return new t(e, i)
        }, n._Buffer_allocUnsafe = t.allocUnsafe || function(e) {
            return new t(e)
        }) : n._Buffer_from = n._Buffer_allocUnsafe = null
    }
},
450: function(t, e, i) {
    "use strict";
    t.exports = a;
    var r = i(221);
    (a.prototype = Object.create(r.prototype)).constructor = a;
    var n = i(208);

    function a(t) {
        r.call(this, t)
    }
    n.Buffer && (a.prototype._slice = n.Buffer.prototype.slice), a.prototype.string = function() {
        var t = this.uint32();
        return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len))
    }
},
221: function(t, e, i) {
    "use strict";
    t.exports = h;
    var r, n = i(208),
        a = n.LongBits,
        o = n.utf8;

    function s(t, e) {
        return RangeError("index out of range: " + t.pos + " + " + (e || 1) + " > " + t.len)
    }
    function h(t) {
        this.buf = t,
        this.pos = 0, this.len = t.length
    }
    var l, c = "undefined" != typeof Uint8Array ? function(t) {
            if (t instanceof Uint8Array || Array.isArray(t)) return new h(t);
            throw Error("illegal buffer")
        } : function(t) {
            if (Array.isArray(t)) return new h(t);
            throw Error("illegal buffer")
        };

    function u() {
        var t = new a(0, 0),
            e = 0;
        if (!(this.len - this.pos > 4)) {
            for (; e < 3; ++e) {
                if (this.pos >= this.len) throw s(this);
                if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t
            }
            return t.lo = (t.lo | (127 & this.buf[this.pos++]) << 7 * e) >>> 0, t
        }
        for (; e < 4; ++e) if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t;
        if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 28) >>> 0, t.hi = (t.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return t;
        if (e = 0, this.len - this.pos > 4) {
            for (; e < 5; ++e) if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
        } else for (; e < 5; ++e) {
            if (this.pos >= this.len) throw s(this);
            if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
        }
        throw Error("invalid varint encoding")
    }
    function p(t, e) {
        return (t[e - 4] | t[e - 3] << 8 | t[e - 2] << 16 | t[e - 1] << 24) >>> 0
    }
    function d() {
        if (this.pos + 8 > this.len) throw s(this, 8);
        return new a(p(this.buf, this.pos += 4), p(this.buf, this.pos += 4))
    }
    h.create = n.Buffer ? function(t) {
        return (h.create = function(t) {
            return n.Buffer.isBuffer(t) ? new r(t) : c(t)
        })(t)
    } : c, h.prototype._slice = n.Array.prototype.subarray || n.Array.prototype.slice, h.prototype.uint32 = (l = 4294967295, function() {
        if (l = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return l;
        if (l = (l | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return l;
        if (l = (l | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return l;
        if (l = (l | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return l;
        if (l = (l | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return l;
        if ((this.pos += 5) > this.len) throw this.pos = this.len, s(this, 10);
        return l
    }), h.prototype.int32 = function() {
        return 0 | this.uint32()
    }, h.prototype.sint32 = function() {
        var t = this.uint32();
        return t >>> 1 ^ -(1 & t) | 0
    }, h.prototype.bool = function() {
        return 0 !== this.uint32()
    }, h.prototype.fixed32 = function() {
        if (this.pos + 4 > this.len) throw s(this, 4);
        return p(this.buf, this.pos += 4)
    }, h.prototype.sfixed32 = function() {
        if (this.pos + 4 > this.len) throw s(this, 4);
        return 0 | p(this.buf, this.pos += 4)
    }, h.prototype.float = function() {
        if (this.pos + 4 > this.len) throw s(this, 4);
        var t = n.float.readFloatLE(this.buf, this.pos);
        return this.pos += 4, t
    }, h.prototype.double = function() {
        if (this.pos + 8 > this.len) throw s(this, 4);
        var t = n.float.readDoubleLE(this.buf, this.pos);
        return this.pos += 8, t
    }, h.prototype.bytes = function() {
        var t = this.uint32(),
            e = this.pos,
            i = this.pos + t;
        if (i > this.len) throw s(this, t);
        return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(e, i) : e === i ? new this.buf.constructor(0) : this._slice.call(this.buf, e, i)
    }, h.prototype.string = function() {
        var t = this.bytes();
        return o.read(t, 0, t.length)
    }, h.prototype.skip = function(t) {
        if ("number" == typeof t) {
            if (this.pos + t > this.len) throw s(this, t);
            this.pos += t
        } else do {
            if (this.pos >= this.len) throw s(this)
        } while (128 & this.buf[this.pos++]);
        return this
    }, h.prototype.skipType = function(t) {
        switch (t) {
            case 0:
                this.skip();
                break;
            case 1:
                this.skip(8);
                break;
            case 2:
                this.skip(this.uint32());
                break;
            case 3:
                for (; 4 != (t = 7 & this.uint32());) this.skipType(t);
                break;
            case 5:
                this.skip(4);
                break;
            default:
                throw Error("invalid wire type " + t + " at offset " + this.pos)
        }
        return this
    }, h._configure = function(t) {
        r = t;
        var e = n.Long ? "toLong" : "toNumber";
        n.merge(h.prototype, {
            int64: function() {
                return u.call(this)[e](!1)
            },
            uint64: function() {
                return u.call(this)[e](!0)
            },
            sint64: function() {
                return u.call(this).zzDecode()[e](!1)
            },
            fixed64: function() {
                return d.call(this)[e](!0)
            },
            sfixed64: function() {
                return d.call(this)[e](!1)
            }
        })
    }
},
208: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var n = e;

    function a(t, e, i) {
        for (var r = Object.keys(e), n = 0; n < r.length; ++n) void 0 !== t[r[n]] && i || (t[r[n]] = e[r[n]]);
        return t
    }
    function o(t) {
        function e(t, i) {
            if (!(this instanceof e)) return new e(t, i);
            Object.defineProperty(this, "message", {
                get: function() {
                    return t
                }
            }), Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {
                value: (new Error).stack || ""
            }), i && a(this, i)
        }
        return (e.prototype = Object.create(Error.prototype)).constructor = e, Object.defineProperty(e.prototype, "name", {
            get: function() {
                return t
            }
        }), e.prototype.toString = function() {
            return this.name + ": " + this.message
        }, e
    }
    n.asPromise = i(240), n.base64 = i(443), n.EventEmitter = i(444), n.float = i(445), n.inquire = i(241), n.utf8 = i(446), n.pool = i(447), n.LongBits = i(448), n.global = "undefined" != typeof window && window || "undefined" != typeof global && global || "undefined" != typeof self && self || this, n.emptyArray = Object.freeze ? Object.freeze([]) : [], n.emptyObject = Object.freeze ? Object.freeze({}) : {}, n.isNode = Boolean(n.global.process && n.global.process.versions && n.global.process.versions.node), n.isInteger = Number.isInteger || function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }, n.isString = function(t) {
        return "string" == typeof t || t instanceof String
    }, n.isObject = function(t) {
        return t && "object" === r(t)
    }, n.isset = n.isSet = function(t, e) {
        var i = t[e];
        return !(null == i || !t.hasOwnProperty(e)) && ("object" !== r(i) || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0)
    }, n.Buffer = function() {
        try {
            var t = n.inquire("buffer").Buffer;
            return t.prototype.utf8Write ? t : null
        } catch (t) {
            return null
        }
    }(), n._Buffer_from = null, n._Buffer_allocUnsafe = null, n.newBuffer = function(t) {
        return "number" == typeof t ? n.Buffer ? n._Buffer_allocUnsafe(t) : new n.Array(t) : n.Buffer ? n._Buffer_from(t) : "undefined" == typeof Uint8Array ? t : new Uint8Array(t)
    }, n.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, n.Long = n.global.dcodeIO && n.global.dcodeIO.Long || n.global.Long || n.inquire("long"), n.key2Re = /^true|false|0|1$/, n.key32Re = /^-?(?:0|[1-9][0-9]*)$/, n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, n.longToHash = function(t) {
        return t ? n.LongBits.from(t).toHash() : n.LongBits.zeroHash
    }, n.longFromHash = function(t, e) {
        var i = n.LongBits.fromHash(t);
        return n.Long ? n.Long.fromBits(i.lo, i.hi, e) : i.toNumber(Boolean(e))
    }, n.merge = a, n.lcFirst = function(t) {
        return t.charAt(0).toLowerCase() + t.substring(1)
    }, n.newError = o, n.ProtocolError = o("ProtocolError"), n.oneOfGetter = function(t) {
        for (var e = {}, i = 0; i < t.length; ++i) e[t[i]] = 1;
        return function() {
            for (var t = Object.keys(this), i = t.length - 1; i > -1; --i) if (1 === e[t[i]] && void 0 !== this[t[i]] && null !== this[t[i]]) return t[i]
        }
    }, n.oneOfSetter = function(t) {
        return function(e) {
            for (var i = 0; i < t.length; ++i) t[i] !== e && delete this[t[i]]
        }
    }, n.toJSONOptions = {
        longs: String,
        enums: String,
        bytes: String,
        json: !0
    }, n._configure = function() {
        var t = n.Buffer;
        t ? (n._Buffer_from = t.from !== Uint8Array.from && t.from || function(e, i) {
            return new t(e, i)
        }, n._Buffer_allocUnsafe = t.allocUnsafe || function(e) {
            return new t(e)
        }) : n._Buffer_from = n._Buffer_allocUnsafe = null
    }
},
208: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var n = e;

    function a(t, e, i) {
        for (var r = Object.keys(e), n = 0; n < r.length; ++n) void 0 !== t[r[n]] && i || (t[r[n]] = e[r[n]]);
        return t
    }
    function o(t) {
        function e(t, i) {
            if (!(this instanceof e)) return new e(t, i);
            Object.defineProperty(this, "message", {
                get: function() {
                    return t
                }
            }), Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {
                value: (new Error).stack || ""
            }), i && a(this, i)
        }
        return (e.prototype = Object.create(Error.prototype)).constructor = e, Object.defineProperty(e.prototype, "name", {
            get: function() {
                return t
            }
        }), e.prototype.toString = function() {
            return this.name + ": " + this.message
        }, e
    }
    n.asPromise = i(240), n.base64 = i(443), n.EventEmitter = i(444), n.float = i(445), n.inquire = i(241), n.utf8 = i(446), n.pool = i(447), n.LongBits = i(448), n.global = "undefined" != typeof window && window || "undefined" != typeof global && global || "undefined" != typeof self && self || this, n.emptyArray = Object.freeze ? Object.freeze([]) : [], n.emptyObject = Object.freeze ? Object.freeze({}) : {}, n.isNode = Boolean(n.global.process && n.global.process.versions && n.global.process.versions.node), n.isInteger = Number.isInteger || function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }, n.isString = function(t) {
        return "string" == typeof t || t instanceof String
    }, n.isObject = function(t) {
        return t && "object" === r(t)
    }, n.isset = n.isSet = function(t, e) {
        var i = t[e];
        return !(null == i || !t.hasOwnProperty(e)) && ("object" !== r(i) || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0)
    }, n.Buffer = function() {
        try {
            var t = n.inquire("buffer").Buffer;
            return t.prototype.utf8Write ? t : null
        } catch (t) {
            return null
        }
    }(), n._Buffer_from = null, n._Buffer_allocUnsafe = null, n.newBuffer = function(t) {
        return "number" == typeof t ? n.Buffer ? n._Buffer_allocUnsafe(t) : new n.Array(t) : n.Buffer ? n._Buffer_from(t) : "undefined" == typeof Uint8Array ? t : new Uint8Array(t)
    }, n.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, n.Long = n.global.dcodeIO && n.global.dcodeIO.Long || n.global.Long || n.inquire("long"), n.key2Re = /^true|false|0|1$/, n.key32Re = /^-?(?:0|[1-9][0-9]*)$/, n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, n.longToHash = function(t) {
        return t ? n.LongBits.from(t).toHash() : n.LongBits.zeroHash
    }, n.longFromHash = function(t, e) {
        var i = n.LongBits.fromHash(t);
        return n.Long ? n.Long.fromBits(i.lo, i.hi, e) : i.toNumber(Boolean(e))
    }, n.merge = a, n.lcFirst = function(t) {
        return t.charAt(0).toLowerCase() + t.substring(1)
    }, n.newError = o, n.ProtocolError = o("ProtocolError"), n.oneOfGetter = function(t) {
        for (var e = {}, i = 0; i < t.length; ++i) e[t[i]] = 1;
        return function() {
            for (var t = Object.keys(this), i = t.length - 1; i > -1; --i) if (1 === e[t[i]] && void 0 !== this[t[i]] && null !== this[t[i]]) return t[i]
        }
    }, n.oneOfSetter = function(t) {
        return function(e) {
            for (var i = 0; i < t.length; ++i) t[i] !== e && delete this[t[i]]
        }
    }, n.toJSONOptions = {
        longs: String,
        enums: String,
        bytes: String,
        json: !0
    }, n._configure = function() {
        var t = n.Buffer;
        t ? (n._Buffer_from = t.from !== Uint8Array.from && t.from || function(e, i) {
            return new t(e, i)
        }, n._Buffer_allocUnsafe = t.allocUnsafe || function(e) {
            return new t(e)
        }) : n._Buffer_from = n._Buffer_allocUnsafe = null
    }
},
242: function(t, e, i) {
    "use strict";
    e.Service = i(451)
},
451: function(t, e, i) {
    "use strict";
    t.exports = n;
    var r = i(208);

    function n(t, e, i) {
        if ("function" != typeof t) throw TypeError("rpcImpl must be a function");
        r.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = Boolean(e), this.responseDelimited = Boolean(i)
    }(n.prototype = Object.create(r.EventEmitter.prototype)).constructor = n, n.prototype.rpcCall = function t(e, i, n, a, o) {
        if (!a) throw TypeError("request must be specified");
        var s = this;
        if (!o) return r.asPromise(t, s, e, i, n, a);
        if (s.rpcImpl) try {
            return s.rpcImpl(e, i[s.requestDelimited ? "encodeDelimited" : "encode"](a).finish(), (function(t, i) {
                if (t) return s.emit("error", t, e), o(t);
                if (null !== i) {
                    if (!(i instanceof n)) try {
                        i = n[s.responseDelimited ? "decodeDelimited" : "decode"](i)
                    } catch (t) {
                        return s.emit("error", t, e), o(t)
                    }
                    return s.emit("data", i, e), o(null, i)
                }
                s.end(!0)
            }))
        } catch (t) {
            return s.emit("error", t, e), void setTimeout((function() {
                o(t)
            }), 0)
        } else setTimeout((function() {
            o(Error("already ended"))
        }), 0)
    }, n.prototype.end = function(t) {
        return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
    }
},
208: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var n = e;

    function a(t, e, i) {
        for (var r = Object.keys(e), n = 0; n < r.length; ++n) void 0 !== t[r[n]] && i || (t[r[n]] = e[r[n]]);
        return t
    }
    function o(t) {
        function e(t, i) {
            if (!(this instanceof e)) return new e(t, i);
            Object.defineProperty(this, "message", {
                get: function() {
                    return t
                }
            }), Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {
                value: (new Error).stack || ""
            }), i && a(this, i)
        }
        return (e.prototype = Object.create(Error.prototype)).constructor = e, Object.defineProperty(e.prototype, "name", {
            get: function() {
                return t
            }
        }), e.prototype.toString = function() {
            return this.name + ": " + this.message
        }, e
    }
    n.asPromise = i(240), n.base64 = i(443), n.EventEmitter = i(444), n.float = i(445), n.inquire = i(241), n.utf8 = i(446), n.pool = i(447), n.LongBits = i(448), n.global = "undefined" != typeof window && window || "undefined" != typeof global && global || "undefined" != typeof self && self || this, n.emptyArray = Object.freeze ? Object.freeze([]) : [], n.emptyObject = Object.freeze ? Object.freeze({}) : {}, n.isNode = Boolean(n.global.process && n.global.process.versions && n.global.process.versions.node), n.isInteger = Number.isInteger || function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }, n.isString = function(t) {
        return "string" == typeof t || t instanceof String
    }, n.isObject = function(t) {
        return t && "object" === r(t)
    }, n.isset = n.isSet = function(t, e) {
        var i = t[e];
        return !(null == i || !t.hasOwnProperty(e)) && ("object" !== r(i) || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0)
    }, n.Buffer = function() {
        try {
            var t = n.inquire("buffer").Buffer;
            return t.prototype.utf8Write ? t : null
        } catch (t) {
            return null
        }
    }(), n._Buffer_from = null, n._Buffer_allocUnsafe = null, n.newBuffer = function(t) {
        return "number" == typeof t ? n.Buffer ? n._Buffer_allocUnsafe(t) : new n.Array(t) : n.Buffer ? n._Buffer_from(t) : "undefined" == typeof Uint8Array ? t : new Uint8Array(t)
    }, n.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, n.Long = n.global.dcodeIO && n.global.dcodeIO.Long || n.global.Long || n.inquire("long"), n.key2Re = /^true|false|0|1$/, n.key32Re = /^-?(?:0|[1-9][0-9]*)$/, n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, n.longToHash = function(t) {
        return t ? n.LongBits.from(t).toHash() : n.LongBits.zeroHash
    }, n.longFromHash = function(t, e) {
        var i = n.LongBits.fromHash(t);
        return n.Long ? n.Long.fromBits(i.lo, i.hi, e) : i.toNumber(Boolean(e))
    }, n.merge = a, n.lcFirst = function(t) {
        return t.charAt(0).toLowerCase() + t.substring(1)
    }, n.newError = o, n.ProtocolError = o("ProtocolError"), n.oneOfGetter = function(t) {
        for (var e = {}, i = 0; i < t.length; ++i) e[t[i]] = 1;
        return function() {
            for (var t = Object.keys(this), i = t.length - 1; i > -1; --i) if (1 === e[t[i]] && void 0 !== this[t[i]] && null !== this[t[i]]) return t[i]
        }
    }, n.oneOfSetter = function(t) {
        return function(e) {
            for (var i = 0; i < t.length; ++i) t[i] !== e && delete this[t[i]]
        }
    }, n.toJSONOptions = {
        longs: String,
        enums: String,
        bytes: String,
        json: !0
    }, n._configure = function() {
        var t = n.Buffer;
        t ? (n._Buffer_from = t.from !== Uint8Array.from && t.from || function(e, i) {
            return new t(e, i)
        }, n._Buffer_allocUnsafe = t.allocUnsafe || function(e) {
            return new t(e)
        }) : n._Buffer_from = n._Buffer_allocUnsafe = null
    }
},
243: function(t, e, i) {
    "use strict";
    t.exports = {}
},
244: function(t, e, i) {
    "use strict";
    t.exports = function(t) {
        for (var e, i = a.codegen(["m", "w"], t.name + "$encode")("if(!w)")("w=Writer.create()"), s = t.fieldsArray.slice().sort(a.compareFieldsById), h = 0; h < s.length; ++h) {
            var l = s[h].resolve(),
                c = t._fieldsArray.indexOf(l),
                u = l.resolvedType instanceof r ? "int32" : l.type,
                p = n.basic[u];
            e = "m" + a.safeProp(l.name), l.map ? (i("if(%s!=null&&m.hasOwnProperty(%j)){", e, l.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", e)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (l.id << 3 | 2) >>> 0, 8 | n.mapKey[l.keyType], l.keyType), void 0 === p ? i("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", c, e) : i(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | p, u, e), i("}")("}")) : l.repeated ? (i("if(%s!=null&&%s.length){", e, e), l.packed && void 0 !== n.packed[u] ? i("w.uint32(%i).fork()", (l.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", e)("w.%s(%s[i])", u, e)("w.ldelim()") : (i("for(var i=0;i<%s.length;++i)", e), void 0 === p ? o(i, l, c, e + "[i]") : i("w.uint32(%i).%s(%s[i])", (l.id << 3 | p) >>> 0, u, e)), i("}")) : (l.optional && i("if(%s!=null&&m.hasOwnProperty(%j))", e, l.name), void 0 === p ? o(i, l, c, e) : i("w.uint32(%i).%s(%s)", (l.id << 3 | p) >>> 0, u, e))
        }
        return i("return w")
    };
    var r = i(207),
        n = i(213),
        a = i(205);

    function o(t, e, i, r) {
        return e.resolvedType.group ? t("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", i, r, (e.id << 3 | 3) >>> 0, (e.id << 3 | 4) >>> 0) : t("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", i, r, (e.id << 3 | 2) >>> 0)
    }
},
207: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = s;
    var n = i(212);
    ((s.prototype = Object.create(n.prototype)).constructor = s).className = "Enum";
    var a = i(214),
        o = i(205);

    function s(t, e, i, a, o) {
        if (n.call(this, t, i), e && "object" !== r(e)) throw TypeError("values must be an object");
        if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = a, this.comments = o || {}, this.reserved = void 0, e) for (var s = Object.keys(e), h = 0; h < s.length; ++h) "number" == typeof e[s[h]] && (this.valuesById[this.values[s[h]] = e[s[h]]] = s[h])
    }
    s.fromJSON = function(t, e) {
        var i = new s(t, e.values, e.options, e.comment, e.comments);
        return i.reserved = e.reserved, i
    }, s.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return o.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", e ? this.comment : void 0, "comments", e ? this.comments : void 0])
    }, s.prototype.add = function(t, e, i) {
        if (!o.isString(t)) throw TypeError("name must be a string");
        if (!o.isInteger(e)) throw TypeError("id must be an integer");
        if (void 0 !== this.values[t]) throw Error("duplicate name '" + t + "' in " + this);
        if (this.isReservedId(e)) throw Error("id " + e + " is reserved in " + this);
        if (this.isReservedName(t)) throw Error("name '" + t + "' is reserved in " + this);
        if (void 0 !== this.valuesById[e]) {
            if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + e + " in " + this);
            this.values[t] = e
        } else this.valuesById[this.values[t] = e] = t;
        return this.comments[t] = i || null, this
    }, s.prototype.remove = function(t) {
        if (!o.isString(t)) throw TypeError("name must be a string");
        var e = this.values[t];
        if (null == e) throw Error("name '" + t + "' does not exist in " + this);
        return delete this.valuesById[e], delete this.values[t], delete this.comments[t], this
    }, s.prototype.isReservedId = function(t) {
        return a.isReservedId(this.reserved, t)
    }, s.prototype.isReservedName = function(t) {
        return a.isReservedName(this.reserved, t)
    }
},
212: function(t, e, i) {
    "use strict";
    t.exports = a, a.className = "ReflectionObject";
    var r, n = i(205);

    function a(t, e) {
        if (!n.isString(t)) throw TypeError("name must be a string");
        if (e && !n.isObject(e)) throw TypeError("options must be an object");
        this.options = e, this.name = t, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null
    }
    Object.defineProperties(a.prototype, {
        root: {
            get: function() {
                for (var t = this; null !== t.parent;) t = t.parent;
                return t
            }
        },
        fullName: {
            get: function() {
                for (var t = [this.name], e = this.parent; e;) t.unshift(e.name), e = e.parent;
                return t.join(".")
            }
        }
    }), a.prototype.toJSON = function() {
        throw Error()
    }, a.prototype.onAdd = function(t) {
        this.parent && this.parent !== t && this.parent.remove(this), this.parent = t, this.resolved = !1;
        var e = t.root;
        e instanceof r && e._handleAdd(this)
    }, a.prototype.onRemove = function(t) {
        var e = t.root;
        e instanceof r && e._handleRemove(this), this.parent = null, this.resolved = !1
    }, a.prototype.resolve = function() {
        return this.resolved || this.root instanceof r && (this.resolved = !0), this
    }, a.prototype.getOption = function(t) {
        if (this.options) return this.options[t]
    }, a.prototype.setOption = function(t, e, i) {
        return i && this.options && void 0 !== this.options[t] || ((this.options || (this.options = {}))[t] = e), this
    }, a.prototype.setOptions = function(t, e) {
        if (t) for (var i = Object.keys(t), r = 0; r < i.length; ++r) this.setOption(i[r], t[i[r]], e);
        return this
    }, a.prototype.toString = function() {
        var t = this.constructor.className,
            e = this.fullName;
        return e.length ? t + " " + e : t
    }, a._configure = function(t) {
        r = t
    }
},
205: function(t, e, i) {
    "use strict";
    var r, n, a = t.exports = i(208),
        o = i(243);
    a.codegen = i(452), a.fetch = i(453), a.path = i(454), a.fs = a.inquire("fs"), a.toArray = function(t) {
        if (t) {
            for (var e = Object.keys(t), i = new Array(e.length), r = 0; r < e.length;) i[r] = t[e[r++]];
            return i
        }
        return []
    }, a.toObject = function(t) {
        for (var e = {}, i = 0; i < t.length;) {
            var r = t[i++],
                n = t[i++];
            void 0 !== n && (e[r] = n)
        }
        return e
    };
    var s = /\\/g,
        h = /"/g;
    a.isReserved = function(t) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
    }, a.safeProp = function(t) {
        return !/^[$\w_]+$/.test(t) || a.isReserved(t) ? '["' + t.replace(s, "\\\\").replace(h, '\\"') + '"]' : "." + t
    }, a.ucFirst = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1)
    };
    var l = /_([a-z])/g;
    a.camelCase = function(t) {
        return t.substring(0, 1) + t.substring(1).replace(l, (function(t, e) {
            return e.toUpperCase()
        }))
    }, a.compareFieldsById = function(t, e) {
        return t.id - e.id
    }, a.decorateType = function(t, e) {
        if (t.$type) return e && t.$type.name !== e && (a.decorateRoot.remove(t.$type), t.$type.name = e, a.decorateRoot.add(t.$type)), t.$type;
        r || (r = i(222));
        var n = new r(e || t.name);
        return a.decorateRoot.add(n), n.ctor = t, Object.defineProperty(t, "$type", {
            value: n,
            enumerable: !1
        }), Object.defineProperty(t.prototype, "$type", {
            value: n,
            enumerable: !1
        }), n
    };
    var c = 0;
    a.decorateEnum = function(t) {
        if (t.$type) return t.$type;
        n || (n = i(207));
        var e = new n("Enum" + c++, t);
        return a.decorateRoot.add(e), Object.defineProperty(t, "$type", {
            value: e,
            enumerable: !1
        }), e
    }, Object.defineProperty(a, "decorateRoot", {
        get: function() {
            return o.decorated || (o.decorated = new(i(227)))
        }
    })
},
208: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var n = e;

    function a(t, e, i) {
        for (var r = Object.keys(e), n = 0; n < r.length; ++n) void 0 !== t[r[n]] && i || (t[r[n]] = e[r[n]]);
        return t
    }
    function o(t) {
        function e(t, i) {
            if (!(this instanceof e)) return new e(t, i);
            Object.defineProperty(this, "message", {
                get: function() {
                    return t
                }
            }), Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {
                value: (new Error).stack || ""
            }), i && a(this, i)
        }
        return (e.prototype = Object.create(Error.prototype)).constructor = e, Object.defineProperty(e.prototype, "name", {
            get: function() {
                return t
            }
        }), e.prototype.toString = function() {
            return this.name + ": " + this.message
        }, e
    }
    n.asPromise = i(240), n.base64 = i(443), n.EventEmitter = i(444), n.float = i(445), n.inquire = i(241), n.utf8 = i(446), n.pool = i(447), n.LongBits = i(448), n.global = "undefined" != typeof window && window || "undefined" != typeof global && global || "undefined" != typeof self && self || this, n.emptyArray = Object.freeze ? Object.freeze([]) : [], n.emptyObject = Object.freeze ? Object.freeze({}) : {}, n.isNode = Boolean(n.global.process && n.global.process.versions && n.global.process.versions.node), n.isInteger = Number.isInteger || function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }, n.isString = function(t) {
        return "string" == typeof t || t instanceof String
    }, n.isObject = function(t) {
        return t && "object" === r(t)
    }, n.isset = n.isSet = function(t, e) {
        var i = t[e];
        return !(null == i || !t.hasOwnProperty(e)) && ("object" !== r(i) || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0)
    }, n.Buffer = function() {
        try {
            var t = n.inquire("buffer").Buffer;
            return t.prototype.utf8Write ? t : null
        } catch (t) {
            return null
        }
    }(), n._Buffer_from = null, n._Buffer_allocUnsafe = null, n.newBuffer = function(t) {
        return "number" == typeof t ? n.Buffer ? n._Buffer_allocUnsafe(t) : new n.Array(t) : n.Buffer ? n._Buffer_from(t) : "undefined" == typeof Uint8Array ? t : new Uint8Array(t)
    }, n.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, n.Long = n.global.dcodeIO && n.global.dcodeIO.Long || n.global.Long || n.inquire("long"), n.key2Re = /^true|false|0|1$/, n.key32Re = /^-?(?:0|[1-9][0-9]*)$/, n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, n.longToHash = function(t) {
        return t ? n.LongBits.from(t).toHash() : n.LongBits.zeroHash
    }, n.longFromHash = function(t, e) {
        var i = n.LongBits.fromHash(t);
        return n.Long ? n.Long.fromBits(i.lo, i.hi, e) : i.toNumber(Boolean(e))
    }, n.merge = a, n.lcFirst = function(t) {
        return t.charAt(0).toLowerCase() + t.substring(1)
    }, n.newError = o, n.ProtocolError = o("ProtocolError"), n.oneOfGetter = function(t) {
        for (var e = {}, i = 0; i < t.length; ++i) e[t[i]] = 1;
        return function() {
            for (var t = Object.keys(this), i = t.length - 1; i > -1; --i) if (1 === e[t[i]] && void 0 !== this[t[i]] && null !== this[t[i]]) return t[i]
        }
    }, n.oneOfSetter = function(t) {
        return function(e) {
            for (var i = 0; i < t.length; ++i) t[i] !== e && delete this[t[i]]
        }
    }, n.toJSONOptions = {
        longs: String,
        enums: String,
        bytes: String,
        json: !0
    }, n._configure = function() {
        var t = n.Buffer;
        t ? (n._Buffer_from = t.from !== Uint8Array.from && t.from || function(e, i) {
            return new t(e, i)
        }, n._Buffer_allocUnsafe = t.allocUnsafe || function(e) {
            return new t(e)
        }) : n._Buffer_from = n._Buffer_allocUnsafe = null
    }
},
243: function(t, e, i) {
    "use strict";
    t.exports = {}
},
452: function(t, e, i) {
    "use strict";

    function r(t, e) {
        "string" == typeof t && (e = t, t = void 0);
        var i = [];

        function n(t) {
            if ("string" != typeof t) {
                var e = a();
                if (r.verbose && console.log("codegen: " + e), e = "return " + e, t) {
                    for (var o = Object.keys(t), s = new Array(o.length + 1), h = new Array(o.length), l = 0; l < o.length;) s[l] = o[l], h[l] = t[o[l++]];
                    return s[l] = e, Function.apply(null, s).apply(null, h)
                }
                return Function(e)()
            }
            for (var c = new Array(arguments.length - 1), u = 0; u < c.length;) c[u] = arguments[++u];
            if (u = 0, t = t.replace(/%([%dfijs])/g, (function(t, e) {
                var i = c[u++];
                switch (e) {
                    case "d":
                    case "f":
                        return String(Number(i));
                    case "i":
                        return String(Math.floor(i));
                    case "j":
                        return JSON.stringify(i);
                    case "s":
                        return String(i)
                }
                return "%"
            })), u !== c.length) throw Error("parameter count mismatch");
            return i.push(t), n
        }
        function a(r) {
            return "function " + (r || e || "") + "(" + (t && t.join(",") || "") + "){\n  " + i.join("\n  ") + "\n}"
        }
        return n.toString = a, n
    }
    t.exports = r, r.verbose = !1
},
453: function(t, e, i) {
    "use strict";
    t.exports = a;
    var r = i(240),
        n = i(241)("fs");

    function a(t, e, i) {
        return "function" == typeof e ? (i = e, e = {}) : e || (e = {}), i ? !e.xhr && n && n.readFile ? n.readFile(t, (function(r, n) {
            return r && "undefined" != typeof XMLHttpRequest ? a.xhr(t, e, i) : r ? i(r) : i(null, e.binary ? n : n.toString("utf8"))
        })) : a.xhr(t, e, i) : r(a, this, t, e)
    }
    a.xhr = function(t, e, i) {
        var r = new XMLHttpRequest;
        r.onreadystatechange = function() {
            if (4 === r.readyState) {
                if (0 !== r.status && 200 !== r.status) return i(Error("status " + r.status));
                if (e.binary) {
                    var t = r.response;
                    if (!t) {
                        t = [];
                        for (var n = 0; n < r.responseText.length; ++n) t.push(255 & r.responseText.charCodeAt(n))
                    }
                    return i(null, "undefined" != typeof Uint8Array ? new Uint8Array(t) : t)
                }
                return i(null, r.responseText)
            }
        }, e.binary && ("overrideMimeType" in r && r.overrideMimeType("text/plain; charset=x-user-defined"), r.responseType = "arraybuffer"), r.open("GET", t), r.send()
    }
},
240: function(t, e, i) {
    "use strict";
    t.exports = function(t, e) {
        var i = new Array(arguments.length - 1),
            r = 0,
            n = 2,
            a = !0;
        for (; n < arguments.length;) i[r++] = arguments[n++];
        return new Promise((function(n, o) {
            i[r] = function(t) {
                if (a) if (a = !1, t) o(t);
                else {
                    for (var e = new Array(arguments.length - 1), i = 0; i < e.length;) e[i++] = arguments[i];
                    n.apply(null, e)
                }
            };
            try {
                t.apply(e || null, i)
            } catch (t) {
                a && (a = !1, o(t))
            }
        }))
    }
},
241: function(module, exports, __webpack_require__) {
    "use strict";

    function inquire(moduleName) {
        try {
            var mod = eval("quire".replace(/^/, "re"))(moduleName);
            if (mod && (mod.length || Object.keys(mod).length)) return mod
        } catch (t) {}
        return null
    }
    module.exports = inquire
},
454: function(t, e, i) {
    "use strict";
    var r = e,
        n = r.isAbsolute = function(t) {
            return /^(?:\/|\w+:)/.test(t)
        }, a = r.normalize = function(t) {
            var e = (t = t.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"),
                i = n(t),
                r = "";
            i && (r = e.shift() + "/");
            for (var a = 0; a < e.length;) ".." === e[a] ? a > 0 && ".." !== e[a - 1] ? e.splice(--a, 2) : i ? e.splice(a, 1) : ++a : "." === e[a] ? e.splice(a, 1) : ++a;
            return r + e.join("/")
        };
    r.resolve = function(t, e, i) {
        return i || (e = a(e)), n(e) ? e : (i || (t = a(t)), (t = t.replace(/(?:\/|^)[^/]+$/, "")).length ? a(t + "/" + e) : e)
    }
},
214: function(t, e, i) {
    "use strict";
    t.exports = c;
    var r = i(212);
    ((c.prototype = Object.create(r.prototype)).constructor = c).className = "Namespace";
    var n, a, o, s = i(210),
        h = i(205);

    function l(t, e) {
        if (t && t.length) {
            for (var i = {}, r = 0; r < t.length; ++r) i[t[r].name] = t[r].toJSON(e);
            return i
        }
    }
    function c(t, e) {
        r.call(this, t, e), this.nested = void 0, this._nestedArray = null
    }
    function u(t) {
        return t._nestedArray = null, t
    }
    c.fromJSON = function(t, e) {
        return new c(t, e.options).addJSON(e.nested)
    }, c.arrayToJSON = l, c.isReservedId = function(t, e) {
        if (t) for (var i = 0; i < t.length; ++i) if ("string" != typeof t[i] && t[i][0] <= e && t[i][1] >= e) return !0;
        return !1
    }, c.isReservedName = function(t, e) {
        if (t) for (var i = 0; i < t.length; ++i) if (t[i] === e) return !0;
        return !1
    }, Object.defineProperty(c.prototype, "nestedArray", {
        get: function() {
            return this._nestedArray || (this._nestedArray = h.toArray(this.nested))
        }
    }), c.prototype.toJSON = function(t) {
        return h.toObject(["options", this.options, "nested", l(this.nestedArray, t)])
    }, c.prototype.addJSON = function(t) {
        if (t) for (var e, i = Object.keys(t), r = 0; r < i.length; ++r) e = t[i[r]], this.add((void 0 !== e.fields ? n.fromJSON : void 0 !== e.values ? o.fromJSON : void 0 !== e.methods ? a.fromJSON : void 0 !== e.id ? s.fromJSON : c.fromJSON)(i[r], e));
        return this
    }, c.prototype.get = function(t) {
        return this.nested && this.nested[t] || null
    }, c.prototype.getEnum = function(t) {
        if (this.nested && this.nested[t] instanceof o) return this.nested[t].values;
        throw Error("no such enum: " + t)
    }, c.prototype.add = function(t) {
        if (!(t instanceof s && void 0 !== t.extend || t instanceof n || t instanceof o || t instanceof a || t instanceof c)) throw TypeError("object must be a valid nested object");
        if (this.nested) {
            var e = this.get(t.name);
            if (e) {
                if (!(e instanceof c && t instanceof c) || e instanceof n || e instanceof a) throw Error("duplicate name '" + t.name + "' in " + this);
                for (var i = e.nestedArray, r = 0; r < i.length; ++r) t.add(i[r]);
                this.remove(e), this.nested || (this.nested = {}), t.setOptions(e.options, !0)
            }
        } else this.nested = {};
        return this.nested[t.name] = t, t.onAdd(this), u(this)
    }, c.prototype.remove = function(t) {
        if (!(t instanceof r)) throw TypeError("object must be a ReflectionObject");
        if (t.parent !== this) throw Error(t + " is not a member of " + this);
        return delete this.nested[t.name], Object.keys(this.nested).length || (this.nested = void 0), t.onRemove(this), u(this)
    }, c.prototype.define = function(t, e) {
        if (h.isString(t)) t = t.split(".");
        else if (!Array.isArray(t)) throw TypeError("illegal path");
        if (t && t.length && "" === t[0]) throw Error("path must be relative");
        for (var i = this; t.length > 0;) {
            var r = t.shift();
            if (i.nested && i.nested[r]) {
                if (!((i = i.nested[r]) instanceof c)) throw Error("path conflicts with non-namespace objects")
            } else i.add(i = new c(r))
        }
        return e && i.addJSON(e), i
    }, c.prototype.resolveAll = function() {
        for (var t = this.nestedArray, e = 0; e < t.length;) t[e] instanceof c ? t[e++].resolveAll() : t[e++].resolve();
        return this.resolve()
    }, c.prototype.lookup = function(t, e, i) {
        if ("boolean" == typeof e ? (i = e, e = void 0) : e && !Array.isArray(e) && (e = [e]), h.isString(t) && t.length) {
            if ("." === t) return this.root;
            t = t.split(".")
        } else if (!t.length) return this;
        if ("" === t[0]) return this.root.lookup(t.slice(1), e);
        var r = this.get(t[0]);
        if (r) {
            if (1 === t.length) {
                if (!e || e.indexOf(r.constructor) > -1) return r
            } else if (r instanceof c && (r = r.lookup(t.slice(1), e, !0))) return r
        } else for (var n = 0; n < this.nestedArray.length; ++n) if (this._nestedArray[n] instanceof c && (r = this._nestedArray[n].lookup(t, e, !0))) return r;
        return null === this.parent || i ? null : this.parent.lookup(t, e)
    }, c.prototype.lookupType = function(t) {
        var e = this.lookup(t, [n]);
        if (!e) throw Error("no such type: " + t);
        return e
    }, c.prototype.lookupEnum = function(t) {
        var e = this.lookup(t, [o]);
        if (!e) throw Error("no such Enum '" + t + "' in " + this);
        return e
    }, c.prototype.lookupTypeOrEnum = function(t) {
        var e = this.lookup(t, [n, o]);
        if (!e) throw Error("no such Type or Enum '" + t + "' in " + this);
        return e
    }, c.prototype.lookupService = function(t) {
        var e = this.lookup(t, [a]);
        if (!e) throw Error("no such Service '" + t + "' in " + this);
        return e
    }, c._configure = function(t, e, i) {
        n = t, a = e, o = i
    }
},
212: function(t, e, i) {
    "use strict";
    t.exports = a, a.className = "ReflectionObject";
    var r, n = i(205);

    function a(t, e) {
        if (!n.isString(t)) throw TypeError("name must be a string");
        if (e && !n.isObject(e)) throw TypeError("options must be an object");
        this.options = e, this.name = t, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null
    }
    Object.defineProperties(a.prototype, {
        root: {
            get: function() {
                for (var t = this; null !== t.parent;) t = t.parent;
                return t
            }
        },
        fullName: {
            get: function() {
                for (var t = [this.name], e = this.parent; e;) t.unshift(e.name), e = e.parent;
                return t.join(".")
            }
        }
    }), a.prototype.toJSON = function() {
        throw Error()
    }, a.prototype.onAdd = function(t) {
        this.parent && this.parent !== t && this.parent.remove(this), this.parent = t, this.resolved = !1;
        var e = t.root;
        e instanceof r && e._handleAdd(this)
    }, a.prototype.onRemove = function(t) {
        var e = t.root;
        e instanceof r && e._handleRemove(this), this.parent = null, this.resolved = !1
    }, a.prototype.resolve = function() {
        return this.resolved || this.root instanceof r && (this.resolved = !0), this
    }, a.prototype.getOption = function(t) {
        if (this.options) return this.options[t]
    }, a.prototype.setOption = function(t, e, i) {
        return i && this.options && void 0 !== this.options[t] || ((this.options || (this.options = {}))[t] = e), this
    }, a.prototype.setOptions = function(t, e) {
        if (t) for (var i = Object.keys(t), r = 0; r < i.length; ++r) this.setOption(i[r], t[i[r]], e);
        return this
    }, a.prototype.toString = function() {
        var t = this.constructor.className,
            e = this.fullName;
        return e.length ? t + " " + e : t
    }, a._configure = function(t) {
        r = t
    }
},
210: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = c;
    var n = i(212);
    ((c.prototype = Object.create(n.prototype)).constructor = c).className = "Field";
    var a, o = i(207),
        s = i(213),
        h = i(205),
        l = /^required|optional|repeated$/;

    function c(t, e, i, r, a, o, c) {
        if (h.isObject(r) ? (c = a, o = r, r = a = void 0) : h.isObject(a) && (c = o, o = a, a = void 0), n.call(this, t, o), !h.isInteger(e) || e < 0) throw TypeError("id must be a non-negative integer");
        if (!h.isString(i)) throw TypeError("type must be a string");
        if (void 0 !== r && !l.test(r = r.toString().toLowerCase())) throw TypeError("rule must be a string rule");
        if (void 0 !== a && !h.isString(a)) throw TypeError("extend must be a string");
        this.rule = r && "optional" !== r ? r : void 0, this.type = i, this.id = e, this.extend = a || void 0, this.required = "required" === r, this.optional = !this.required, this.repeated = "repeated" === r, this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !! h.Long && void 0 !== s.long[i], this.bytes = "bytes" === i, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = c
    }
    c.fromJSON = function(t, e) {
        return new c(t, e.id, e.type, e.rule, e.extend, e.options, e.comment)
    }, Object.defineProperty(c.prototype, "packed", {
        get: function() {
            return null === this._packed && (this._packed = !1 !== this.getOption("packed")), this._packed
        }
    }), c.prototype.setOption = function(t, e, i) {
        return "packed" === t && (this._packed = null), n.prototype.setOption.call(this, t, e, i)
    }, c.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return h.toObject(["rule", "optional" !== this.rule && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", e ? this.comment : void 0])
    }, c.prototype.resolve = function() {
        if (this.resolved) return this;
        if (void 0 === (this.typeDefault = s.defaults[this.type]) && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof a ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.
        default && (this.typeDefault = this.options.
        default, this.resolvedType instanceof o && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (!0 !== this.options.packed && (void 0 === this.options.packed || !this.resolvedType || this.resolvedType instanceof o) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long) this.typeDefault = h.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)), Object.freeze && Object.freeze(this.typeDefault);
        else if (this.bytes && "string" == typeof this.typeDefault) {
            var t;
            h.base64.test(this.typeDefault) ? h.base64.decode(this.typeDefault, t = h.newBuffer(h.base64.length(this.typeDefault)), 0) : h.utf8.write(this.typeDefault, t = h.newBuffer(h.utf8.length(this.typeDefault)), 0), this.typeDefault = t
        }
        return this.map ? this.defaultValue = h.emptyObject : this.repeated ? this.defaultValue = h.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof a && (this.parent.ctor.prototype[this.name] = this.defaultValue), n.prototype.resolve.call(this)
    }, c.d = function(t, e, i, n) {
        return "function" == typeof e ? e = h.decorateType(e).name : e && "object" === r(e) && (e = h.decorateEnum(e).name),
        function(r, a) {
            h.decorateType(r.constructor).add(new c(a, t, e, i, {
                default: n
            }))
        }
    }, c._configure = function(t) {
        a = t
    }
},
212: function(t, e, i) {
    "use strict";
    t.exports = a, a.className = "ReflectionObject";
    var r, n = i(205);

    function a(t, e) {
        if (!n.isString(t)) throw TypeError("name must be a string");
        if (e && !n.isObject(e)) throw TypeError("options must be an object");
        this.options = e, this.name = t, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null
    }
    Object.defineProperties(a.prototype, {
        root: {
            get: function() {
                for (var t = this; null !== t.parent;) t = t.parent;
                return t
            }
        },
        fullName: {
            get: function() {
                for (var t = [this.name], e = this.parent; e;) t.unshift(e.name), e = e.parent;
                return t.join(".")
            }
        }
    }), a.prototype.toJSON = function() {
        throw Error()
    }, a.prototype.onAdd = function(t) {
        this.parent && this.parent !== t && this.parent.remove(this), this.parent = t, this.resolved = !1;
        var e = t.root;
        e instanceof r && e._handleAdd(this)
    }, a.prototype.onRemove = function(t) {
        var e = t.root;
        e instanceof r && e._handleRemove(this), this.parent = null, this.resolved = !1
    }, a.prototype.resolve = function() {
        return this.resolved || this.root instanceof r && (this.resolved = !0), this
    }, a.prototype.getOption = function(t) {
        if (this.options) return this.options[t]
    }, a.prototype.setOption = function(t, e, i) {
        return i && this.options && void 0 !== this.options[t] || ((this.options || (this.options = {}))[t] = e), this
    }, a.prototype.setOptions = function(t, e) {
        if (t) for (var i = Object.keys(t), r = 0; r < i.length; ++r) this.setOption(i[r], t[i[r]], e);
        return this
    }, a.prototype.toString = function() {
        var t = this.constructor.className,
            e = this.fullName;
        return e.length ? t + " " + e : t
    }, a._configure = function(t) {
        r = t
    }
},
207: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = s;
    var n = i(212);
    ((s.prototype = Object.create(n.prototype)).constructor = s).className = "Enum";
    var a = i(214),
        o = i(205);

    function s(t, e, i, a, o) {
        if (n.call(this, t, i), e && "object" !== r(e)) throw TypeError("values must be an object");
        if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = a, this.comments = o || {}, this.reserved = void 0, e) for (var s = Object.keys(e), h = 0; h < s.length; ++h) "number" == typeof e[s[h]] && (this.valuesById[this.values[s[h]] = e[s[h]]] = s[h])
    }
    s.fromJSON = function(t, e) {
        var i = new s(t, e.values, e.options, e.comment, e.comments);
        return i.reserved = e.reserved, i
    }, s.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return o.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", e ? this.comment : void 0, "comments", e ? this.comments : void 0])
    }, s.prototype.add = function(t, e, i) {
        if (!o.isString(t)) throw TypeError("name must be a string");
        if (!o.isInteger(e)) throw TypeError("id must be an integer");
        if (void 0 !== this.values[t]) throw Error("duplicate name '" + t + "' in " + this);
        if (this.isReservedId(e)) throw Error("id " + e + " is reserved in " + this);
        if (this.isReservedName(t)) throw Error("name '" + t + "' is reserved in " + this);
        if (void 0 !== this.valuesById[e]) {
            if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + e + " in " + this);
            this.values[t] = e
        } else this.valuesById[this.values[t] = e] = t;
        return this.comments[t] = i || null, this
    }, s.prototype.remove = function(t) {
        if (!o.isString(t)) throw TypeError("name must be a string");
        var e = this.values[t];
        if (null == e) throw Error("name '" + t + "' does not exist in " + this);
        return delete this.valuesById[e], delete this.values[t], delete this.comments[t], this
    }, s.prototype.isReservedId = function(t) {
        return a.isReservedId(this.reserved, t)
    }, s.prototype.isReservedName = function(t) {
        return a.isReservedName(this.reserved, t)
    }
},
213: function(t, e, i) {
    "use strict";
    var r = e,
        n = i(205),
        a = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];

    function o(t, e) {
        var i = 0,
            r = {};
        for (e |= 0; i < t.length;) r[a[i + e]] = t[i++];
        return r
    }
    r.basic = o([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), r.defaults = o([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", n.emptyArray, null]), r.long = o([0, 0, 0, 1, 1], 7), r.mapKey = o([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), r.packed = o([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])
},
205: function(t, e, i) {
    "use strict";
    var r, n, a = t.exports = i(208),
        o = i(243);
    a.codegen = i(452), a.fetch = i(453), a.path = i(454), a.fs = a.inquire("fs"), a.toArray = function(t) {
        if (t) {
            for (var e = Object.keys(t), i = new Array(e.length), r = 0; r < e.length;) i[r] = t[e[r++]];
            return i
        }
        return []
    }, a.toObject = function(t) {
        for (var e = {}, i = 0; i < t.length;) {
            var r = t[i++],
                n = t[i++];
            void 0 !== n && (e[r] = n)
        }
        return e
    };
    var s = /\\/g,
        h = /"/g;
    a.isReserved = function(t) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
    }, a.safeProp = function(t) {
        return !/^[$\w_]+$/.test(t) || a.isReserved(t) ? '["' + t.replace(s, "\\\\").replace(h, '\\"') + '"]' : "." + t
    }, a.ucFirst = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1)
    };
    var l = /_([a-z])/g;
    a.camelCase = function(t) {
        return t.substring(0, 1) + t.substring(1).replace(l, (function(t, e) {
            return e.toUpperCase()
        }))
    }, a.compareFieldsById = function(t, e) {
        return t.id - e.id
    }, a.decorateType = function(t, e) {
        if (t.$type) return e && t.$type.name !== e && (a.decorateRoot.remove(t.$type), t.$type.name = e, a.decorateRoot.add(t.$type)), t.$type;
        r || (r = i(222));
        var n = new r(e || t.name);
        return a.decorateRoot.add(n), n.ctor = t, Object.defineProperty(t, "$type", {
            value: n,
            enumerable: !1
        }), Object.defineProperty(t.prototype, "$type", {
            value: n,
            enumerable: !1
        }), n
    };
    var c = 0;
    a.decorateEnum = function(t) {
        if (t.$type) return t.$type;
        n || (n = i(207));
        var e = new n("Enum" + c++, t);
        return a.decorateRoot.add(e), Object.defineProperty(t, "$type", {
            value: e,
            enumerable: !1
        }), e
    }, Object.defineProperty(a, "decorateRoot", {
        get: function() {
            return o.decorated || (o.decorated = new(i(227)))
        }
    })
},
205: function(t, e, i) {
    "use strict";
    var r, n, a = t.exports = i(208),
        o = i(243);
    a.codegen = i(452), a.fetch = i(453), a.path = i(454), a.fs = a.inquire("fs"), a.toArray = function(t) {
        if (t) {
            for (var e = Object.keys(t), i = new Array(e.length), r = 0; r < e.length;) i[r] = t[e[r++]];
            return i
        }
        return []
    }, a.toObject = function(t) {
        for (var e = {}, i = 0; i < t.length;) {
            var r = t[i++],
                n = t[i++];
            void 0 !== n && (e[r] = n)
        }
        return e
    };
    var s = /\\/g,
        h = /"/g;
    a.isReserved = function(t) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
    }, a.safeProp = function(t) {
        return !/^[$\w_]+$/.test(t) || a.isReserved(t) ? '["' + t.replace(s, "\\\\").replace(h, '\\"') + '"]' : "." + t
    }, a.ucFirst = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1)
    };
    var l = /_([a-z])/g;
    a.camelCase = function(t) {
        return t.substring(0, 1) + t.substring(1).replace(l, (function(t, e) {
            return e.toUpperCase()
        }))
    }, a.compareFieldsById = function(t, e) {
        return t.id - e.id
    }, a.decorateType = function(t, e) {
        if (t.$type) return e && t.$type.name !== e && (a.decorateRoot.remove(t.$type), t.$type.name = e, a.decorateRoot.add(t.$type)), t.$type;
        r || (r = i(222));
        var n = new r(e || t.name);
        return a.decorateRoot.add(n), n.ctor = t, Object.defineProperty(t, "$type", {
            value: n,
            enumerable: !1
        }), Object.defineProperty(t.prototype, "$type", {
            value: n,
            enumerable: !1
        }), n
    };
    var c = 0;
    a.decorateEnum = function(t) {
        if (t.$type) return t.$type;
        n || (n = i(207));
        var e = new n("Enum" + c++, t);
        return a.decorateRoot.add(e), Object.defineProperty(t, "$type", {
            value: e,
            enumerable: !1
        }), e
    }, Object.defineProperty(a, "decorateRoot", {
        get: function() {
            return o.decorated || (o.decorated = new(i(227)))
        }
    })
},
205: function(t, e, i) {
    "use strict";
    var r, n, a = t.exports = i(208),
        o = i(243);
    a.codegen = i(452), a.fetch = i(453), a.path = i(454), a.fs = a.inquire("fs"), a.toArray = function(t) {
        if (t) {
            for (var e = Object.keys(t), i = new Array(e.length), r = 0; r < e.length;) i[r] = t[e[r++]];
            return i
        }
        return []
    }, a.toObject = function(t) {
        for (var e = {}, i = 0; i < t.length;) {
            var r = t[i++],
                n = t[i++];
            void 0 !== n && (e[r] = n)
        }
        return e
    };
    var s = /\\/g,
        h = /"/g;
    a.isReserved = function(t) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
    }, a.safeProp = function(t) {
        return !/^[$\w_]+$/.test(t) || a.isReserved(t) ? '["' + t.replace(s, "\\\\").replace(h, '\\"') + '"]' : "." + t
    }, a.ucFirst = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1)
    };
    var l = /_([a-z])/g;
    a.camelCase = function(t) {
        return t.substring(0, 1) + t.substring(1).replace(l, (function(t, e) {
            return e.toUpperCase()
        }))
    }, a.compareFieldsById = function(t, e) {
        return t.id - e.id
    }, a.decorateType = function(t, e) {
        if (t.$type) return e && t.$type.name !== e && (a.decorateRoot.remove(t.$type), t.$type.name = e, a.decorateRoot.add(t.$type)), t.$type;
        r || (r = i(222));
        var n = new r(e || t.name);
        return a.decorateRoot.add(n), n.ctor = t, Object.defineProperty(t, "$type", {
            value: n,
            enumerable: !1
        }), Object.defineProperty(t.prototype, "$type", {
            value: n,
            enumerable: !1
        }), n
    };
    var c = 0;
    a.decorateEnum = function(t) {
        if (t.$type) return t.$type;
        n || (n = i(207));
        var e = new n("Enum" + c++, t);
        return a.decorateRoot.add(e), Object.defineProperty(t, "$type", {
            value: e,
            enumerable: !1
        }), e
    }, Object.defineProperty(a, "decorateRoot", {
        get: function() {
            return o.decorated || (o.decorated = new(i(227)))
        }
    })
},
205: function(t, e, i) {
    "use strict";
    var r, n, a = t.exports = i(208),
        o = i(243);
    a.codegen = i(452), a.fetch = i(453), a.path = i(454), a.fs = a.inquire("fs"), a.toArray = function(t) {
        if (t) {
            for (var e = Object.keys(t), i = new Array(e.length), r = 0; r < e.length;) i[r] = t[e[r++]];
            return i
        }
        return []
    }, a.toObject = function(t) {
        for (var e = {}, i = 0; i < t.length;) {
            var r = t[i++],
                n = t[i++];
            void 0 !== n && (e[r] = n)
        }
        return e
    };
    var s = /\\/g,
        h = /"/g;
    a.isReserved = function(t) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
    }, a.safeProp = function(t) {
        return !/^[$\w_]+$/.test(t) || a.isReserved(t) ? '["' + t.replace(s, "\\\\").replace(h, '\\"') + '"]' : "." + t
    }, a.ucFirst = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1)
    };
    var l = /_([a-z])/g;
    a.camelCase = function(t) {
        return t.substring(0, 1) + t.substring(1).replace(l, (function(t, e) {
            return e.toUpperCase()
        }))
    }, a.compareFieldsById = function(t, e) {
        return t.id - e.id
    }, a.decorateType = function(t, e) {
        if (t.$type) return e && t.$type.name !== e && (a.decorateRoot.remove(t.$type), t.$type.name = e, a.decorateRoot.add(t.$type)), t.$type;
        r || (r = i(222));
        var n = new r(e || t.name);
        return a.decorateRoot.add(n), n.ctor = t, Object.defineProperty(t, "$type", {
            value: n,
            enumerable: !1
        }), Object.defineProperty(t.prototype, "$type", {
            value: n,
            enumerable: !1
        }), n
    };
    var c = 0;
    a.decorateEnum = function(t) {
        if (t.$type) return t.$type;
        n || (n = i(207));
        var e = new n("Enum" + c++, t);
        return a.decorateRoot.add(e), Object.defineProperty(t, "$type", {
            value: e,
            enumerable: !1
        }), e
    }, Object.defineProperty(a, "decorateRoot", {
        get: function() {
            return o.decorated || (o.decorated = new(i(227)))
        }
    })
},
213: function(t, e, i) {
    "use strict";
    var r = e,
        n = i(205),
        a = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];

    function o(t, e) {
        var i = 0,
            r = {};
        for (e |= 0; i < t.length;) r[a[i + e]] = t[i++];
        return r
    }
    r.basic = o([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), r.defaults = o([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", n.emptyArray, null]), r.long = o([0, 0, 0, 1, 1], 7), r.mapKey = o([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), r.packed = o([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])
},
205: function(t, e, i) {
    "use strict";
    var r, n, a = t.exports = i(208),
        o = i(243);
    a.codegen = i(452), a.fetch = i(453), a.path = i(454), a.fs = a.inquire("fs"), a.toArray = function(t) {
        if (t) {
            for (var e = Object.keys(t), i = new Array(e.length), r = 0; r < e.length;) i[r] = t[e[r++]];
            return i
        }
        return []
    }, a.toObject = function(t) {
        for (var e = {}, i = 0; i < t.length;) {
            var r = t[i++],
                n = t[i++];
            void 0 !== n && (e[r] = n)
        }
        return e
    };
    var s = /\\/g,
        h = /"/g;
    a.isReserved = function(t) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
    }, a.safeProp = function(t) {
        return !/^[$\w_]+$/.test(t) || a.isReserved(t) ? '["' + t.replace(s, "\\\\").replace(h, '\\"') + '"]' : "." + t
    }, a.ucFirst = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1)
    };
    var l = /_([a-z])/g;
    a.camelCase = function(t) {
        return t.substring(0, 1) + t.substring(1).replace(l, (function(t, e) {
            return e.toUpperCase()
        }))
    }, a.compareFieldsById = function(t, e) {
        return t.id - e.id
    }, a.decorateType = function(t, e) {
        if (t.$type) return e && t.$type.name !== e && (a.decorateRoot.remove(t.$type), t.$type.name = e, a.decorateRoot.add(t.$type)), t.$type;
        r || (r = i(222));
        var n = new r(e || t.name);
        return a.decorateRoot.add(n), n.ctor = t, Object.defineProperty(t, "$type", {
            value: n,
            enumerable: !1
        }), Object.defineProperty(t.prototype, "$type", {
            value: n,
            enumerable: !1
        }), n
    };
    var c = 0;
    a.decorateEnum = function(t) {
        if (t.$type) return t.$type;
        n || (n = i(207));
        var e = new n("Enum" + c++, t);
        return a.decorateRoot.add(e), Object.defineProperty(t, "$type", {
            value: e,
            enumerable: !1
        }), e
    }, Object.defineProperty(a, "decorateRoot", {
        get: function() {
            return o.decorated || (o.decorated = new(i(227)))
        }
    })
},
245: function(t, e, i) {
    "use strict";
    t.exports = function(t) {
        var e = a.codegen(["r", "l"], t.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (t.fieldsArray.filter((function(t) {
            return t.map
        })).length ? ",k" : ""))("while(r.pos<c){")("var t=r.uint32()");
        t.group && e("if((t&7)===4)")("break");
        e("switch(t>>>3){");
        for (var i = 0; i < t.fieldsArray.length; ++i) {
            var s = t._fieldsArray[i].resolve(),
                h = s.resolvedType instanceof r ? "int32" : s.type,
                l = "m" + a.safeProp(s.name);
            e("case %i:", s.id), s.map ? (e("r.skip().pos++")("if(%s===util.emptyObject)", l)("%s={}", l)("k=r.%s()", s.keyType)("r.pos++"), void 0 !== n.long[s.keyType] ? void 0 === n.basic[h] ? e('%s[typeof k==="object"?util.longToHash(k):k]=types[%i].decode(r,r.uint32())', l, i) : e('%s[typeof k==="object"?util.longToHash(k):k]=r.%s()', l, h) : void 0 === n.basic[h] ? e("%s[k]=types[%i].decode(r,r.uint32())", l, i) : e("%s[k]=r.%s()", l, h)) : s.repeated ? (e("if(!(%s&&%s.length))", l, l)("%s=[]", l), void 0 !== n.packed[h] && e("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", l, h)("}else"), void 0 === n.basic[h] ? e(s.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", l, i) : e("%s.push(r.%s())", l, h)) : void 0 === n.basic[h] ? e(s.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", l, i) : e("%s=r.%s()", l, h), e("break")
        }
        for (e("default:")("r.skipType(t&7)")("break")("}")("}"), i = 0; i < t._fieldsArray.length; ++i) {
            var c = t._fieldsArray[i];
            c.required && e("if(!m.hasOwnProperty(%j))", c.name)("throw util.ProtocolError(%j,{instance:m})", o(c))
        }
        return e("return m")
    };
    var r = i(207),
        n = i(213),
        a = i(205);

    function o(t) {
        return "missing required '" + t.name + "'"
    }
},
207: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = s;
    var n = i(212);
    ((s.prototype = Object.create(n.prototype)).constructor = s).className = "Enum";
    var a = i(214),
        o = i(205);

    function s(t, e, i, a, o) {
        if (n.call(this, t, i), e && "object" !== r(e)) throw TypeError("values must be an object");
        if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = a, this.comments = o || {}, this.reserved = void 0, e) for (var s = Object.keys(e), h = 0; h < s.length; ++h) "number" == typeof e[s[h]] && (this.valuesById[this.values[s[h]] = e[s[h]]] = s[h])
    }
    s.fromJSON = function(t, e) {
        var i = new s(t, e.values, e.options, e.comment, e.comments);
        return i.reserved = e.reserved, i
    }, s.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return o.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", e ? this.comment : void 0, "comments", e ? this.comments : void 0])
    }, s.prototype.add = function(t, e, i) {
        if (!o.isString(t)) throw TypeError("name must be a string");
        if (!o.isInteger(e)) throw TypeError("id must be an integer");
        if (void 0 !== this.values[t]) throw Error("duplicate name '" + t + "' in " + this);
        if (this.isReservedId(e)) throw Error("id " + e + " is reserved in " + this);
        if (this.isReservedName(t)) throw Error("name '" + t + "' is reserved in " + this);
        if (void 0 !== this.valuesById[e]) {
            if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + e + " in " + this);
            this.values[t] = e
        } else this.valuesById[this.values[t] = e] = t;
        return this.comments[t] = i || null, this
    }, s.prototype.remove = function(t) {
        if (!o.isString(t)) throw TypeError("name must be a string");
        var e = this.values[t];
        if (null == e) throw Error("name '" + t + "' does not exist in " + this);
        return delete this.valuesById[e], delete this.values[t], delete this.comments[t], this
    }, s.prototype.isReservedId = function(t) {
        return a.isReservedId(this.reserved, t)
    }, s.prototype.isReservedName = function(t) {
        return a.isReservedName(this.reserved, t)
    }
},
213: function(t, e, i) {
    "use strict";
    var r = e,
        n = i(205),
        a = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];

    function o(t, e) {
        var i = 0,
            r = {};
        for (e |= 0; i < t.length;) r[a[i + e]] = t[i++];
        return r
    }
    r.basic = o([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), r.defaults = o([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", n.emptyArray, null]), r.long = o([0, 0, 0, 1, 1], 7), r.mapKey = o([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), r.packed = o([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])
},
205: function(t, e, i) {
    "use strict";
    var r, n, a = t.exports = i(208),
        o = i(243);
    a.codegen = i(452), a.fetch = i(453), a.path = i(454), a.fs = a.inquire("fs"), a.toArray = function(t) {
        if (t) {
            for (var e = Object.keys(t), i = new Array(e.length), r = 0; r < e.length;) i[r] = t[e[r++]];
            return i
        }
        return []
    }, a.toObject = function(t) {
        for (var e = {}, i = 0; i < t.length;) {
            var r = t[i++],
                n = t[i++];
            void 0 !== n && (e[r] = n)
        }
        return e
    };
    var s = /\\/g,
        h = /"/g;
    a.isReserved = function(t) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
    }, a.safeProp = function(t) {
        return !/^[$\w_]+$/.test(t) || a.isReserved(t) ? '["' + t.replace(s, "\\\\").replace(h, '\\"') + '"]' : "." + t
    }, a.ucFirst = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1)
    };
    var l = /_([a-z])/g;
    a.camelCase = function(t) {
        return t.substring(0, 1) + t.substring(1).replace(l, (function(t, e) {
            return e.toUpperCase()
        }))
    }, a.compareFieldsById = function(t, e) {
        return t.id - e.id
    }, a.decorateType = function(t, e) {
        if (t.$type) return e && t.$type.name !== e && (a.decorateRoot.remove(t.$type), t.$type.name = e, a.decorateRoot.add(t.$type)), t.$type;
        r || (r = i(222));
        var n = new r(e || t.name);
        return a.decorateRoot.add(n), n.ctor = t, Object.defineProperty(t, "$type", {
            value: n,
            enumerable: !1
        }), Object.defineProperty(t.prototype, "$type", {
            value: n,
            enumerable: !1
        }), n
    };
    var c = 0;
    a.decorateEnum = function(t) {
        if (t.$type) return t.$type;
        n || (n = i(207));
        var e = new n("Enum" + c++, t);
        return a.decorateRoot.add(e), Object.defineProperty(t, "$type", {
            value: e,
            enumerable: !1
        }), e
    }, Object.defineProperty(a, "decorateRoot", {
        get: function() {
            return o.decorated || (o.decorated = new(i(227)))
        }
    })
},
246: function(t, e, i) {
    "use strict";
    t.exports = function(t) {
        var e = n.codegen(["m"], t.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"),
            i = t.oneofsArray,
            r = {};
        i.length && e("var p={}");
        for (var h = 0; h < t.fieldsArray.length; ++h) {
            var l = t._fieldsArray[h].resolve(),
                c = "m" + n.safeProp(l.name);
            if (l.optional && e("if(%s!=null&&m.hasOwnProperty(%j)){", c, l.name), l.map) e("if(!util.isObject(%s))", c)("return%j", a(l, "object"))("var k=Object.keys(%s)", c)("for(var i=0;i<k.length;++i){"), s(e, l, "k[i]"), o(e, l, h, c + "[k[i]]")("}");
            else if (l.repeated) e("if(!Array.isArray(%s))", c)("return%j", a(l, "array"))("for(var i=0;i<%s.length;++i){", c), o(e, l, h, c + "[i]")("}");
            else {
                if (l.partOf) {
                    var u = n.safeProp(l.partOf.name);
                    1 === r[l.partOf.name] && e("if(p%s===1)", u)("return%j", l.partOf.name + ": multiple values"), r[l.partOf.name] = 1, e("p%s=1", u)
                }
                o(e, l, h, c)
            }
            l.optional && e("}")
        }
        return e("return null")
    };
    var r = i(207),
        n = i(205);

    function a(t, e) {
        return t.name + ": " + e + (t.repeated && "array" !== e ? "[]" : t.map && "object" !== e ? "{k:" + t.keyType + "}" : "") + " expected"
    }
    function o(t, e, i, n) {
        if (e.resolvedType) if (e.resolvedType instanceof r) {
            t("switch(%s){", n)("default:")("return%j", a(e, "enum value"));
            for (var o = Object.keys(e.resolvedType.values), s = 0; s < o.length; ++s) t("case %i:", e.resolvedType.values[o[s]]);
            t("break")("}")
        } else t("{")("var e=types[%i].verify(%s);", i, n)("if(e)")("return%j+e", e.name + ".")("}");
        else switch (e.type) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
                t("if(!util.isInteger(%s))", n)("return%j", a(e, "integer"));
                break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
                t("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", n, n, n, n)("return%j", a(e, "integer|Long"));
                break;
            case "float":
            case "double":
                t('if(typeof %s!=="number")', n)("return%j", a(e, "number"));
                break;
            case "bool":
                t('if(typeof %s!=="boolean")', n)("return%j", a(e, "boolean"));
                break;
            case "string":
                t("if(!util.isString(%s))", n)("return%j", a(e, "string"));
                break;
            case "bytes":
                t('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', n, n, n)("return%j", a(e, "buffer"))
        }
        return t
    }
    function s(t, e, i) {
        switch (e.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
                t("if(!util.key32Re.test(%s))", i)("return%j", a(e, "integer key"));
                break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
                t("if(!util.key64Re.test(%s))", i)("return%j", a(e, "integer|Long key"));
                break;
            case "bool":
                t("if(!util.key2Re.test(%s))", i)("return%j", a(e, "boolean key"))
        }
        return t
    }
},
207: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = s;
    var n = i(212);
    ((s.prototype = Object.create(n.prototype)).constructor = s).className = "Enum";
    var a = i(214),
        o = i(205);

    function s(t, e, i, a, o) {
        if (n.call(this, t, i), e && "object" !== r(e)) throw TypeError("values must be an object");
        if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = a, this.comments = o || {}, this.reserved = void 0, e) for (var s = Object.keys(e), h = 0; h < s.length; ++h) "number" == typeof e[s[h]] && (this.valuesById[this.values[s[h]] = e[s[h]]] = s[h])
    }
    s.fromJSON = function(t, e) {
        var i = new s(t, e.values, e.options, e.comment, e.comments);
        return i.reserved = e.reserved, i
    }, s.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return o.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", e ? this.comment : void 0, "comments", e ? this.comments : void 0])
    }, s.prototype.add = function(t, e, i) {
        if (!o.isString(t)) throw TypeError("name must be a string");
        if (!o.isInteger(e)) throw TypeError("id must be an integer");
        if (void 0 !== this.values[t]) throw Error("duplicate name '" + t + "' in " + this);
        if (this.isReservedId(e)) throw Error("id " + e + " is reserved in " + this);
        if (this.isReservedName(t)) throw Error("name '" + t + "' is reserved in " + this);
        if (void 0 !== this.valuesById[e]) {
            if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + e + " in " + this);
            this.values[t] = e
        } else this.valuesById[this.values[t] = e] = t;
        return this.comments[t] = i || null, this
    }, s.prototype.remove = function(t) {
        if (!o.isString(t)) throw TypeError("name must be a string");
        var e = this.values[t];
        if (null == e) throw Error("name '" + t + "' does not exist in " + this);
        return delete this.valuesById[e], delete this.values[t], delete this.comments[t], this
    }, s.prototype.isReservedId = function(t) {
        return a.isReservedId(this.reserved, t)
    }, s.prototype.isReservedName = function(t) {
        return a.isReservedName(this.reserved, t)
    }
},
205: function(t, e, i) {
    "use strict";
    var r, n, a = t.exports = i(208),
        o = i(243);
    a.codegen = i(452), a.fetch = i(453), a.path = i(454), a.fs = a.inquire("fs"), a.toArray = function(t) {
        if (t) {
            for (var e = Object.keys(t), i = new Array(e.length), r = 0; r < e.length;) i[r] = t[e[r++]];
            return i
        }
        return []
    }, a.toObject = function(t) {
        for (var e = {}, i = 0; i < t.length;) {
            var r = t[i++],
                n = t[i++];
            void 0 !== n && (e[r] = n)
        }
        return e
    };
    var s = /\\/g,
        h = /"/g;
    a.isReserved = function(t) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
    }, a.safeProp = function(t) {
        return !/^[$\w_]+$/.test(t) || a.isReserved(t) ? '["' + t.replace(s, "\\\\").replace(h, '\\"') + '"]' : "." + t
    }, a.ucFirst = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1)
    };
    var l = /_([a-z])/g;
    a.camelCase = function(t) {
        return t.substring(0, 1) + t.substring(1).replace(l, (function(t, e) {
            return e.toUpperCase()
        }))
    }, a.compareFieldsById = function(t, e) {
        return t.id - e.id
    }, a.decorateType = function(t, e) {
        if (t.$type) return e && t.$type.name !== e && (a.decorateRoot.remove(t.$type), t.$type.name = e, a.decorateRoot.add(t.$type)), t.$type;
        r || (r = i(222));
        var n = new r(e || t.name);
        return a.decorateRoot.add(n), n.ctor = t, Object.defineProperty(t, "$type", {
            value: n,
            enumerable: !1
        }), Object.defineProperty(t.prototype, "$type", {
            value: n,
            enumerable: !1
        }), n
    };
    var c = 0;
    a.decorateEnum = function(t) {
        if (t.$type) return t.$type;
        n || (n = i(207));
        var e = new n("Enum" + c++, t);
        return a.decorateRoot.add(e), Object.defineProperty(t, "$type", {
            value: e,
            enumerable: !1
        }), e
    }, Object.defineProperty(a, "decorateRoot", {
        get: function() {
            return o.decorated || (o.decorated = new(i(227)))
        }
    })
},
247: function(t, e, i) {
    "use strict";
    var r = e,
        n = i(207),
        a = i(205);

    function o(t, e, i, r) {
        if (e.resolvedType) if (e.resolvedType instanceof n) {
            t("switch(d%s){", r);
            for (var a = e.resolvedType.values, o = Object.keys(a), s = 0; s < o.length; ++s) e.repeated && a[o[s]] === e.typeDefault && t("default:"), t("case%j:", o[s])("case %i:", a[o[s]])("m%s=%j", r, a[o[s]])("break");
            t("}")
        } else t('if(typeof d%s!=="object")', r)("throw TypeError(%j)", e.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", r, i, r);
        else {
            var h = !1;
            switch (e.type) {
                case "double":
                case "float":
                    t("m%s=Number(d%s)", r, r);
                    break;
                case "uint32":
                case "fixed32":
                    t("m%s=d%s>>>0", r, r);
                    break;
                case "int32":
                case "sint32":
                case "sfixed32":
                    t("m%s=d%s|0", r, r);
                    break;
                case "uint64":
                    h = !0;
                case "int64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                    t("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", r, r, h)('else if(typeof d%s==="string")', r)("m%s=parseInt(d%s,10)", r, r)('else if(typeof d%s==="number")', r)("m%s=d%s", r, r)('else if(typeof d%s==="object")', r)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", r, r, r, h ? "true" : "");
                    break;
                case "bytes":
                    t('if(typeof d%s==="string")', r)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", r, r, r)("else if(d%s.length)", r)("m%s=d%s", r, r);
                    break;
                case "string":
                    t("m%s=String(d%s)", r, r);
                    break;
                case "bool":
                    t("m%s=Boolean(d%s)", r, r)
            }
        }
        return t
    }
    function s(t, e, i, r) {
        if (e.resolvedType) e.resolvedType instanceof n ? t("d%s=o.enums===String?types[%i].values[m%s]:m%s", r, i, r, r) : t("d%s=types[%i].toObject(m%s,o)", r, i, r);
        else {
            var a = !1;
            switch (e.type) {
                case "double":
                case "float":
                    t("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", r, r, r, r);
                    break;
                case "uint64":
                    a = !0;
                case "int64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                    t('if(typeof m%s==="number")', r)("d%s=o.longs===String?String(m%s):m%s", r, r, r)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", r, r, r, r, a ? "true" : "", r);
                    break;
                case "bytes":
                    t("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", r, r, r, r, r);
                    break;
                default:
                    t("d%s=m%s", r, r)
            }
        }
        return t
    }
    r.fromObject = function(t) {
        var e = t.fieldsArray,
            i = a.codegen(["d"], t.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
        if (!e.length) return i("return new this.ctor");
        i("var m=new this.ctor");
        for (var r = 0; r < e.length; ++r) {
            var s = e[r].resolve(),
                h = a.safeProp(s.name);
            s.map ? (i("if(d%s){", h)('if(typeof d%s!=="object")', h)("throw TypeError(%j)", s.fullName + ": object expected")("m%s={}", h)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", h), o(i, s, r, h + "[ks[i]]")("}")("}")) : s.repeated ? (i("if(d%s){", h)("if(!Array.isArray(d%s))", h)("throw TypeError(%j)", s.fullName + ": array expected")("m%s=[]", h)("for(var i=0;i<d%s.length;++i){", h), o(i, s, r, h + "[i]")("}")("}")) : (s.resolvedType instanceof n || i("if(d%s!=null){", h), o(i, s, r, h), s.resolvedType instanceof n || i("}"))
        }
        return i("return m")
    }, r.toObject = function(t) {
        var e = t.fieldsArray.slice().sort(a.compareFieldsById);
        if (!e.length) return a.codegen()("return {}");
        for (var i = a.codegen(["m", "o"], t.name + "$toObject")("if(!o)")("o={}")("var d={}"), r = [], o = [], h = [], l = 0; l < e.length; ++l) e[l].partOf || (e[l].resolve().repeated ? r : e[l].map ? o : h).push(e[l]);
        if (r.length) {
            for (i("if(o.arrays||o.defaults){"), l = 0; l < r.length; ++l) i("d%s=[]", a.safeProp(r[l].name));
            i("}")
        }
        if (o.length) {
            for (i("if(o.objects||o.defaults){"), l = 0; l < o.length; ++l) i("d%s={}", a.safeProp(o[l].name));
            i("}")
        }
        if (h.length) {
            for (i("if(o.defaults){"), l = 0; l < h.length; ++l) {
                var c = h[l],
                    u = a.safeProp(c.name);
                if (c.resolvedType instanceof n) i("d%s=o.enums===String?%j:%j", u, c.resolvedType.valuesById[c.typeDefault], c.typeDefault);
                else if (c.long) i("if(util.Long){")("var n=new util.Long(%i,%i,%j)", c.typeDefault.low, c.typeDefault.high, c.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", u)("}else")("d%s=o.longs===String?%j:%i", u, c.typeDefault.toString(), c.typeDefault.toNumber());
                else if (c.bytes) {
                    var p = "[" + Array.prototype.slice.call(c.typeDefault).join(",") + "]";
                    i("if(o.bytes===String)d%s=%j", u, String.fromCharCode.apply(String, c.typeDefault))("else{")("d%s=%s", u, p)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", u, u)("}")
                } else i("d%s=%j", u, c.typeDefault)
            }
            i("}")
        }
        var d = !1;
        for (l = 0; l < e.length; ++l) {
            c = e[l];
            var f = t._fieldsArray.indexOf(c);
            u = a.safeProp(c.name);
            c.map ? (d || (d = !0, i("var ks2")), i("if(m%s&&(ks2=Object.keys(m%s)).length){", u, u)("d%s={}", u)("for(var j=0;j<ks2.length;++j){"), s(i, c, f, u + "[ks2[j]]")("}")) : c.repeated ? (i("if(m%s&&m%s.length){", u, u)("d%s=[]", u)("for(var j=0;j<m%s.length;++j){", u), s(i, c, f, u + "[j]")("}")) : (i("if(m%s!=null&&m.hasOwnProperty(%j)){", u, c.name), s(i, c, f, u), c.partOf && i("if(o.oneofs)")("d%s=%j", a.safeProp(c.partOf.name), c.name)), i("}")
        }
        return i("return d")
    }
},
207: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = s;
    var n = i(212);
    ((s.prototype = Object.create(n.prototype)).constructor = s).className = "Enum";
    var a = i(214),
        o = i(205);

    function s(t, e, i, a, o) {
        if (n.call(this, t, i), e && "object" !== r(e)) throw TypeError("values must be an object");
        if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = a, this.comments = o || {}, this.reserved = void 0, e) for (var s = Object.keys(e), h = 0; h < s.length; ++h) "number" == typeof e[s[h]] && (this.valuesById[this.values[s[h]] = e[s[h]]] = s[h])
    }
    s.fromJSON = function(t, e) {
        var i = new s(t, e.values, e.options, e.comment, e.comments);
        return i.reserved = e.reserved, i
    }, s.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return o.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", e ? this.comment : void 0, "comments", e ? this.comments : void 0])
    }, s.prototype.add = function(t, e, i) {
        if (!o.isString(t)) throw TypeError("name must be a string");
        if (!o.isInteger(e)) throw TypeError("id must be an integer");
        if (void 0 !== this.values[t]) throw Error("duplicate name '" + t + "' in " + this);
        if (this.isReservedId(e)) throw Error("id " + e + " is reserved in " + this);
        if (this.isReservedName(t)) throw Error("name '" + t + "' is reserved in " + this);
        if (void 0 !== this.valuesById[e]) {
            if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + e + " in " + this);
            this.values[t] = e
        } else this.valuesById[this.values[t] = e] = t;
        return this.comments[t] = i || null, this
    }, s.prototype.remove = function(t) {
        if (!o.isString(t)) throw TypeError("name must be a string");
        var e = this.values[t];
        if (null == e) throw Error("name '" + t + "' does not exist in " + this);
        return delete this.valuesById[e], delete this.values[t], delete this.comments[t], this
    }, s.prototype.isReservedId = function(t) {
        return a.isReservedId(this.reserved, t)
    }, s.prototype.isReservedName = function(t) {
        return a.isReservedName(this.reserved, t)
    }
},
205: function(t, e, i) {
    "use strict";
    var r, n, a = t.exports = i(208),
        o = i(243);
    a.codegen = i(452), a.fetch = i(453), a.path = i(454), a.fs = a.inquire("fs"), a.toArray = function(t) {
        if (t) {
            for (var e = Object.keys(t), i = new Array(e.length), r = 0; r < e.length;) i[r] = t[e[r++]];
            return i
        }
        return []
    }, a.toObject = function(t) {
        for (var e = {}, i = 0; i < t.length;) {
            var r = t[i++],
                n = t[i++];
            void 0 !== n && (e[r] = n)
        }
        return e
    };
    var s = /\\/g,
        h = /"/g;
    a.isReserved = function(t) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
    }, a.safeProp = function(t) {
        return !/^[$\w_]+$/.test(t) || a.isReserved(t) ? '["' + t.replace(s, "\\\\").replace(h, '\\"') + '"]' : "." + t
    }, a.ucFirst = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1)
    };
    var l = /_([a-z])/g;
    a.camelCase = function(t) {
        return t.substring(0, 1) + t.substring(1).replace(l, (function(t, e) {
            return e.toUpperCase()
        }))
    }, a.compareFieldsById = function(t, e) {
        return t.id - e.id
    }, a.decorateType = function(t, e) {
        if (t.$type) return e && t.$type.name !== e && (a.decorateRoot.remove(t.$type), t.$type.name = e, a.decorateRoot.add(t.$type)), t.$type;
        r || (r = i(222));
        var n = new r(e || t.name);
        return a.decorateRoot.add(n), n.ctor = t, Object.defineProperty(t, "$type", {
            value: n,
            enumerable: !1
        }), Object.defineProperty(t.prototype, "$type", {
            value: n,
            enumerable: !1
        }), n
    };
    var c = 0;
    a.decorateEnum = function(t) {
        if (t.$type) return t.$type;
        n || (n = i(207));
        var e = new n("Enum" + c++, t);
        return a.decorateRoot.add(e), Object.defineProperty(t, "$type", {
            value: e,
            enumerable: !1
        }), e
    }, Object.defineProperty(a, "decorateRoot", {
        get: function() {
            return o.decorated || (o.decorated = new(i(227)))
        }
    })
},
212: function(t, e, i) {
    "use strict";
    t.exports = a, a.className = "ReflectionObject";
    var r, n = i(205);

    function a(t, e) {
        if (!n.isString(t)) throw TypeError("name must be a string");
        if (e && !n.isObject(e)) throw TypeError("options must be an object");
        this.options = e, this.name = t, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null
    }
    Object.defineProperties(a.prototype, {
        root: {
            get: function() {
                for (var t = this; null !== t.parent;) t = t.parent;
                return t
            }
        },
        fullName: {
            get: function() {
                for (var t = [this.name], e = this.parent; e;) t.unshift(e.name), e = e.parent;
                return t.join(".")
            }
        }
    }), a.prototype.toJSON = function() {
        throw Error()
    }, a.prototype.onAdd = function(t) {
        this.parent && this.parent !== t && this.parent.remove(this), this.parent = t, this.resolved = !1;
        var e = t.root;
        e instanceof r && e._handleAdd(this)
    }, a.prototype.onRemove = function(t) {
        var e = t.root;
        e instanceof r && e._handleRemove(this), this.parent = null, this.resolved = !1
    }, a.prototype.resolve = function() {
        return this.resolved || this.root instanceof r && (this.resolved = !0), this
    }, a.prototype.getOption = function(t) {
        if (this.options) return this.options[t]
    }, a.prototype.setOption = function(t, e, i) {
        return i && this.options && void 0 !== this.options[t] || ((this.options || (this.options = {}))[t] = e), this
    }, a.prototype.setOptions = function(t, e) {
        if (t) for (var i = Object.keys(t), r = 0; r < i.length; ++r) this.setOption(i[r], t[i[r]], e);
        return this
    }, a.prototype.toString = function() {
        var t = this.constructor.className,
            e = this.fullName;
        return e.length ? t + " " + e : t
    }, a._configure = function(t) {
        r = t
    }
},
214: function(t, e, i) {
    "use strict";
    t.exports = c;
    var r = i(212);
    ((c.prototype = Object.create(r.prototype)).constructor = c).className = "Namespace";
    var n, a, o, s = i(210),
        h = i(205);

    function l(t, e) {
        if (t && t.length) {
            for (var i = {}, r = 0; r < t.length; ++r) i[t[r].name] = t[r].toJSON(e);
            return i
        }
    }
    function c(t, e) {
        r.call(this, t, e), this.nested = void 0, this._nestedArray = null
    }
    function u(t) {
        return t._nestedArray = null, t
    }
    c.fromJSON = function(t, e) {
        return new c(t, e.options).addJSON(e.nested)
    }, c.arrayToJSON = l, c.isReservedId = function(t, e) {
        if (t) for (var i = 0; i < t.length; ++i) if ("string" != typeof t[i] && t[i][0] <= e && t[i][1] >= e) return !0;
        return !1
    }, c.isReservedName = function(t, e) {
        if (t) for (var i = 0; i < t.length; ++i) if (t[i] === e) return !0;
        return !1
    }, Object.defineProperty(c.prototype, "nestedArray", {
        get: function() {
            return this._nestedArray || (this._nestedArray = h.toArray(this.nested))
        }
    }), c.prototype.toJSON = function(t) {
        return h.toObject(["options", this.options, "nested", l(this.nestedArray, t)])
    }, c.prototype.addJSON = function(t) {
        if (t) for (var e, i = Object.keys(t), r = 0; r < i.length; ++r) e = t[i[r]], this.add((void 0 !== e.fields ? n.fromJSON : void 0 !== e.values ? o.fromJSON : void 0 !== e.methods ? a.fromJSON : void 0 !== e.id ? s.fromJSON : c.fromJSON)(i[r], e));
        return this
    }, c.prototype.get = function(t) {
        return this.nested && this.nested[t] || null
    }, c.prototype.getEnum = function(t) {
        if (this.nested && this.nested[t] instanceof o) return this.nested[t].values;
        throw Error("no such enum: " + t)
    }, c.prototype.add = function(t) {
        if (!(t instanceof s && void 0 !== t.extend || t instanceof n || t instanceof o || t instanceof a || t instanceof c)) throw TypeError("object must be a valid nested object");
        if (this.nested) {
            var e = this.get(t.name);
            if (e) {
                if (!(e instanceof c && t instanceof c) || e instanceof n || e instanceof a) throw Error("duplicate name '" + t.name + "' in " + this);
                for (var i = e.nestedArray, r = 0; r < i.length; ++r) t.add(i[r]);
                this.remove(e), this.nested || (this.nested = {}), t.setOptions(e.options, !0)
            }
        } else this.nested = {};
        return this.nested[t.name] = t, t.onAdd(this), u(this)
    }, c.prototype.remove = function(t) {
        if (!(t instanceof r)) throw TypeError("object must be a ReflectionObject");
        if (t.parent !== this) throw Error(t + " is not a member of " + this);
        return delete this.nested[t.name], Object.keys(this.nested).length || (this.nested = void 0), t.onRemove(this), u(this)
    }, c.prototype.define = function(t, e) {
        if (h.isString(t)) t = t.split(".");
        else if (!Array.isArray(t)) throw TypeError("illegal path");
        if (t && t.length && "" === t[0]) throw Error("path must be relative");
        for (var i = this; t.length > 0;) {
            var r = t.shift();
            if (i.nested && i.nested[r]) {
                if (!((i = i.nested[r]) instanceof c)) throw Error("path conflicts with non-namespace objects")
            } else i.add(i = new c(r))
        }
        return e && i.addJSON(e), i
    }, c.prototype.resolveAll = function() {
        for (var t = this.nestedArray, e = 0; e < t.length;) t[e] instanceof c ? t[e++].resolveAll() : t[e++].resolve();
        return this.resolve()
    }, c.prototype.lookup = function(t, e, i) {
        if ("boolean" == typeof e ? (i = e, e = void 0) : e && !Array.isArray(e) && (e = [e]), h.isString(t) && t.length) {
            if ("." === t) return this.root;
            t = t.split(".")
        } else if (!t.length) return this;
        if ("" === t[0]) return this.root.lookup(t.slice(1), e);
        var r = this.get(t[0]);
        if (r) {
            if (1 === t.length) {
                if (!e || e.indexOf(r.constructor) > -1) return r
            } else if (r instanceof c && (r = r.lookup(t.slice(1), e, !0))) return r
        } else for (var n = 0; n < this.nestedArray.length; ++n) if (this._nestedArray[n] instanceof c && (r = this._nestedArray[n].lookup(t, e, !0))) return r;
        return null === this.parent || i ? null : this.parent.lookup(t, e)
    }, c.prototype.lookupType = function(t) {
        var e = this.lookup(t, [n]);
        if (!e) throw Error("no such type: " + t);
        return e
    }, c.prototype.lookupEnum = function(t) {
        var e = this.lookup(t, [o]);
        if (!e) throw Error("no such Enum '" + t + "' in " + this);
        return e
    }, c.prototype.lookupTypeOrEnum = function(t) {
        var e = this.lookup(t, [n, o]);
        if (!e) throw Error("no such Type or Enum '" + t + "' in " + this);
        return e
    }, c.prototype.lookupService = function(t) {
        var e = this.lookup(t, [a]);
        if (!e) throw Error("no such Service '" + t + "' in " + this);
        return e
    }, c._configure = function(t, e, i) {
        n = t, a = e, o = i
    }
},
227: function(t, e, i) {
    "use strict";
    t.exports = u;
    var r = i(214);
    ((u.prototype = Object.create(r.prototype)).constructor = u).className = "Root";
    var n, a, o, s = i(210),
        h = i(207),
        l = i(215),
        c = i(205);

    function u(t) {
        r.call(this, "", t), this.deferred = [], this.files = []
    }
    function p() {}
    u.fromJSON = function(t, e) {
        return e || (e = new u), t.options && e.setOptions(t.options), e.addJSON(t.nested)
    }, u.prototype.resolvePath = c.path.resolve, u.prototype.load = function t(e, i, r) {
        "function" == typeof i && (r = i, i = void 0);
        var n = this;
        if (!r) return c.asPromise(t, n, e, i);
        var s = r === p;

        function h(t, e) {
            if (r) {
                var i = r;
                if (r = null, s) throw t;
                i(t, e)
            }
        }
        function l(t, e) {
            try {
                if (c.isString(e) && "{" === e.charAt(0) && (e = JSON.parse(e)), c.isString(e)) {
                    a.filename = t;
                    var r, o = a(e, n, i),
                        l = 0;
                    if (o.imports) for (; l < o.imports.length; ++l)(r = n.resolvePath(t, o.imports[l])) && u(r);
                    if (o.weakImports) for (l = 0; l < o.weakImports.length; ++l)(r = n.resolvePath(t, o.weakImports[l])) && u(r, !0)
                } else n.setOptions(e.options).addJSON(e.nested)
            } catch (t) {
                h(t)
            }
            s || d || h(null, n)
        }
        function u(t, e) {
            var i = t.lastIndexOf("google/protobuf/");
            if (i > -1) {
                var a = t.substring(i);
                a in o && (t = a)
            }
            if (!(n.files.indexOf(t) > -1)) if (n.files.push(t), t in o) s ? l(t, o[t]) : (++d, setTimeout((function() {
                --d, l(t, o[t])
            })));
            else if (s) {
                var u;
                try {
                    u = c.fs.readFileSync(t).toString("utf8")
                } catch (t) {
                    return void(e || h(t))
                }
                l(t, u)
            } else ++d, c.fetch(t, (function(i, a) {
                --d, r && (i ? e ? d || h(null, n) : h(i) : l(t, a))
            }))
        }
        var d = 0;
        c.isString(e) && (e = [e]);
        for (var f, m = 0; m < e.length; ++m)(f = n.resolvePath("", e[m])) && u(f);
        if (s) return n;
        d || h(null, n)
    }, u.prototype.loadSync = function(t, e) {
        if (!c.isNode) throw Error("not supported");
        return this.load(t, e, p)
    },
    u.prototype.resolveAll = function() {
        if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map((function(t) {
            return "'extend " + t.extend + "' in " + t.parent.fullName
        })).join(", "));
        return r.prototype.resolveAll.call(this)
    };
    var d = /^[A-Z]/;

    function f(t, e) {
        var i = e.parent.lookup(e.extend);
        if (i) {
            var r = new s(e.fullName, e.id, e.type, e.rule, void 0, e.options);
            return r.declaringField = e, e.extensionField = r, i.add(r), !0
        }
        return !1
    }
    u.prototype._handleAdd = function(t) {
        if (t instanceof s) void 0 === t.extend || t.extensionField || f(0, t) || this.deferred.push(t);
        else if (t instanceof h) d.test(t.name) && (t.parent[t.name] = t.values);
        else if (!(t instanceof l)) {
            if (t instanceof n) for (var e = 0; e < this.deferred.length;) f(0, this.deferred[e]) ? this.deferred.splice(e, 1) : ++e;
            for (var i = 0; i < t.nestedArray.length; ++i) this._handleAdd(t._nestedArray[i]);
            d.test(t.name) && (t.parent[t.name] = t)
        }
    }, u.prototype._handleRemove = function(t) {
        if (t instanceof s) {
            if (void 0 !== t.extend) if (t.extensionField) t.extensionField.parent.remove(t.extensionField), t.extensionField = null;
            else {
                var e = this.deferred.indexOf(t);
                e > -1 && this.deferred.splice(e, 1)
            }
        } else if (t instanceof h) d.test(t.name) && delete t.parent[t.name];
        else if (t instanceof r) {
            for (var i = 0; i < t.nestedArray.length; ++i) this._handleRemove(t._nestedArray[i]);
            d.test(t.name) && delete t.parent[t.name]
        }
    }, u._configure = function(t, e, i) {
        n = t, a = e, o = i
    }
},
214: function(t, e, i) {
    "use strict";
    t.exports = c;
    var r = i(212);
    ((c.prototype = Object.create(r.prototype)).constructor = c).className = "Namespace";
    var n, a, o, s = i(210),
        h = i(205);

    function l(t, e) {
        if (t && t.length) {
            for (var i = {}, r = 0; r < t.length; ++r) i[t[r].name] = t[r].toJSON(e);
            return i
        }
    }
    function c(t, e) {
        r.call(this, t, e), this.nested = void 0, this._nestedArray = null
    }
    function u(t) {
        return t._nestedArray = null, t
    }
    c.fromJSON = function(t, e) {
        return new c(t, e.options).addJSON(e.nested)
    }, c.arrayToJSON = l, c.isReservedId = function(t, e) {
        if (t) for (var i = 0; i < t.length; ++i) if ("string" != typeof t[i] && t[i][0] <= e && t[i][1] >= e) return !0;
        return !1
    }, c.isReservedName = function(t, e) {
        if (t) for (var i = 0; i < t.length; ++i) if (t[i] === e) return !0;
        return !1
    }, Object.defineProperty(c.prototype, "nestedArray", {
        get: function() {
            return this._nestedArray || (this._nestedArray = h.toArray(this.nested))
        }
    }), c.prototype.toJSON = function(t) {
        return h.toObject(["options", this.options, "nested", l(this.nestedArray, t)])
    }, c.prototype.addJSON = function(t) {
        if (t) for (var e, i = Object.keys(t), r = 0; r < i.length; ++r) e = t[i[r]], this.add((void 0 !== e.fields ? n.fromJSON : void 0 !== e.values ? o.fromJSON : void 0 !== e.methods ? a.fromJSON : void 0 !== e.id ? s.fromJSON : c.fromJSON)(i[r], e));
        return this
    }, c.prototype.get = function(t) {
        return this.nested && this.nested[t] || null
    }, c.prototype.getEnum = function(t) {
        if (this.nested && this.nested[t] instanceof o) return this.nested[t].values;
        throw Error("no such enum: " + t)
    }, c.prototype.add = function(t) {
        if (!(t instanceof s && void 0 !== t.extend || t instanceof n || t instanceof o || t instanceof a || t instanceof c)) throw TypeError("object must be a valid nested object");
        if (this.nested) {
            var e = this.get(t.name);
            if (e) {
                if (!(e instanceof c && t instanceof c) || e instanceof n || e instanceof a) throw Error("duplicate name '" + t.name + "' in " + this);
                for (var i = e.nestedArray, r = 0; r < i.length; ++r) t.add(i[r]);
                this.remove(e), this.nested || (this.nested = {}), t.setOptions(e.options, !0)
            }
        } else this.nested = {};
        return this.nested[t.name] = t, t.onAdd(this), u(this)
    }, c.prototype.remove = function(t) {
        if (!(t instanceof r)) throw TypeError("object must be a ReflectionObject");
        if (t.parent !== this) throw Error(t + " is not a member of " + this);
        return delete this.nested[t.name], Object.keys(this.nested).length || (this.nested = void 0), t.onRemove(this), u(this)
    }, c.prototype.define = function(t, e) {
        if (h.isString(t)) t = t.split(".");
        else if (!Array.isArray(t)) throw TypeError("illegal path");
        if (t && t.length && "" === t[0]) throw Error("path must be relative");
        for (var i = this; t.length > 0;) {
            var r = t.shift();
            if (i.nested && i.nested[r]) {
                if (!((i = i.nested[r]) instanceof c)) throw Error("path conflicts with non-namespace objects")
            } else i.add(i = new c(r))
        }
        return e && i.addJSON(e), i
    }, c.prototype.resolveAll = function() {
        for (var t = this.nestedArray, e = 0; e < t.length;) t[e] instanceof c ? t[e++].resolveAll() : t[e++].resolve();
        return this.resolve()
    }, c.prototype.lookup = function(t, e, i) {
        if ("boolean" == typeof e ? (i = e, e = void 0) : e && !Array.isArray(e) && (e = [e]), h.isString(t) && t.length) {
            if ("." === t) return this.root;
            t = t.split(".")
        } else if (!t.length) return this;
        if ("" === t[0]) return this.root.lookup(t.slice(1), e);
        var r = this.get(t[0]);
        if (r) {
            if (1 === t.length) {
                if (!e || e.indexOf(r.constructor) > -1) return r
            } else if (r instanceof c && (r = r.lookup(t.slice(1), e, !0))) return r
        } else for (var n = 0; n < this.nestedArray.length; ++n) if (this._nestedArray[n] instanceof c && (r = this._nestedArray[n].lookup(t, e, !0))) return r;
        return null === this.parent || i ? null : this.parent.lookup(t, e)
    }, c.prototype.lookupType = function(t) {
        var e = this.lookup(t, [n]);
        if (!e) throw Error("no such type: " + t);
        return e
    }, c.prototype.lookupEnum = function(t) {
        var e = this.lookup(t, [o]);
        if (!e) throw Error("no such Enum '" + t + "' in " + this);
        return e
    }, c.prototype.lookupTypeOrEnum = function(t) {
        var e = this.lookup(t, [n, o]);
        if (!e) throw Error("no such Type or Enum '" + t + "' in " + this);
        return e
    }, c.prototype.lookupService = function(t) {
        var e = this.lookup(t, [a]);
        if (!e) throw Error("no such Service '" + t + "' in " + this);
        return e
    }, c._configure = function(t, e, i) {
        n = t, a = e, o = i
    }
},
210: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = c;
    var n = i(212);
    ((c.prototype = Object.create(n.prototype)).constructor = c).className = "Field";
    var a, o = i(207),
        s = i(213),
        h = i(205),
        l = /^required|optional|repeated$/;

    function c(t, e, i, r, a, o, c) {
        if (h.isObject(r) ? (c = a, o = r, r = a = void 0) : h.isObject(a) && (c = o, o = a, a = void 0), n.call(this, t, o), !h.isInteger(e) || e < 0) throw TypeError("id must be a non-negative integer");
        if (!h.isString(i)) throw TypeError("type must be a string");
        if (void 0 !== r && !l.test(r = r.toString().toLowerCase())) throw TypeError("rule must be a string rule");
        if (void 0 !== a && !h.isString(a)) throw TypeError("extend must be a string");
        this.rule = r && "optional" !== r ? r : void 0, this.type = i, this.id = e, this.extend = a || void 0, this.required = "required" === r, this.optional = !this.required, this.repeated = "repeated" === r, this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !! h.Long && void 0 !== s.long[i], this.bytes = "bytes" === i, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = c
    }
    c.fromJSON = function(t, e) {
        return new c(t, e.id, e.type, e.rule, e.extend, e.options, e.comment)
    }, Object.defineProperty(c.prototype, "packed", {
        get: function() {
            return null === this._packed && (this._packed = !1 !== this.getOption("packed")), this._packed
        }
    }), c.prototype.setOption = function(t, e, i) {
        return "packed" === t && (this._packed = null), n.prototype.setOption.call(this, t, e, i)
    }, c.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return h.toObject(["rule", "optional" !== this.rule && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", e ? this.comment : void 0])
    }, c.prototype.resolve = function() {
        if (this.resolved) return this;
        if (void 0 === (this.typeDefault = s.defaults[this.type]) && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof a ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.
        default && (this.typeDefault = this.options.
        default, this.resolvedType instanceof o && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (!0 !== this.options.packed && (void 0 === this.options.packed || !this.resolvedType || this.resolvedType instanceof o) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long) this.typeDefault = h.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)), Object.freeze && Object.freeze(this.typeDefault);
        else if (this.bytes && "string" == typeof this.typeDefault) {
            var t;
            h.base64.test(this.typeDefault) ? h.base64.decode(this.typeDefault, t = h.newBuffer(h.base64.length(this.typeDefault)), 0) : h.utf8.write(this.typeDefault, t = h.newBuffer(h.utf8.length(this.typeDefault)), 0), this.typeDefault = t
        }
        return this.map ? this.defaultValue = h.emptyObject : this.repeated ? this.defaultValue = h.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof a && (this.parent.ctor.prototype[this.name] = this.defaultValue), n.prototype.resolve.call(this)
    }, c.d = function(t, e, i, n) {
        return "function" == typeof e ? e = h.decorateType(e).name : e && "object" === r(e) && (e = h.decorateEnum(e).name),
        function(r, a) {
            h.decorateType(r.constructor).add(new c(a, t, e, i, {
                default: n
            }))
        }
    }, c._configure = function(t) {
        a = t
    }
},
207: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = s;
    var n = i(212);
    ((s.prototype = Object.create(n.prototype)).constructor = s).className = "Enum";
    var a = i(214),
        o = i(205);

    function s(t, e, i, a, o) {
        if (n.call(this, t, i), e && "object" !== r(e)) throw TypeError("values must be an object");
        if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = a, this.comments = o || {}, this.reserved = void 0, e) for (var s = Object.keys(e), h = 0; h < s.length; ++h) "number" == typeof e[s[h]] && (this.valuesById[this.values[s[h]] = e[s[h]]] = s[h])
    }
    s.fromJSON = function(t, e) {
        var i = new s(t, e.values, e.options, e.comment, e.comments);
        return i.reserved = e.reserved, i
    }, s.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return o.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", e ? this.comment : void 0, "comments", e ? this.comments : void 0])
    }, s.prototype.add = function(t, e, i) {
        if (!o.isString(t)) throw TypeError("name must be a string");
        if (!o.isInteger(e)) throw TypeError("id must be an integer");
        if (void 0 !== this.values[t]) throw Error("duplicate name '" + t + "' in " + this);
        if (this.isReservedId(e)) throw Error("id " + e + " is reserved in " + this);
        if (this.isReservedName(t)) throw Error("name '" + t + "' is reserved in " + this);
        if (void 0 !== this.valuesById[e]) {
            if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + e + " in " + this);
            this.values[t] = e
        } else this.valuesById[this.values[t] = e] = t;
        return this.comments[t] = i || null, this
    }, s.prototype.remove = function(t) {
        if (!o.isString(t)) throw TypeError("name must be a string");
        var e = this.values[t];
        if (null == e) throw Error("name '" + t + "' does not exist in " + this);
        return delete this.valuesById[e], delete this.values[t], delete this.comments[t], this
    }, s.prototype.isReservedId = function(t) {
        return a.isReservedId(this.reserved, t)
    }, s.prototype.isReservedName = function(t) {
        return a.isReservedName(this.reserved, t)
    }
},
215: function(t, e, i) {
    "use strict";
    t.exports = o;
    var r = i(212);
    ((o.prototype = Object.create(r.prototype)).constructor = o).className = "OneOf";
    var n = i(210),
        a = i(205);

    function o(t, e, i, n) {
        if (Array.isArray(e) || (i = e, e = void 0), r.call(this, t, i), void 0 !== e && !Array.isArray(e)) throw TypeError("fieldNames must be an Array");
        this.oneof = e || [], this.fieldsArray = [], this.comment = n
    }
    function s(t) {
        if (t.parent) for (var e = 0; e < t.fieldsArray.length; ++e) t.fieldsArray[e].parent || t.parent.add(t.fieldsArray[e])
    }
    o.fromJSON = function(t, e) {
        return new o(t, e.oneof, e.options, e.comment)
    }, o.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return a.toObject(["options", this.options, "oneof", this.oneof, "comment", e ? this.comment : void 0])
    }, o.prototype.add = function(t) {
        if (!(t instanceof n)) throw TypeError("field must be a Field");
        return t.parent && t.parent !== this.parent && t.parent.remove(t), this.oneof.push(t.name), this.fieldsArray.push(t), t.partOf = this, s(this), this
    }, o.prototype.remove = function(t) {
        if (!(t instanceof n)) throw TypeError("field must be a Field");
        var e = this.fieldsArray.indexOf(t);
        if (e < 0) throw Error(t + " is not a member of " + this);
        return this.fieldsArray.splice(e, 1), (e = this.oneof.indexOf(t.name)) > -1 && this.oneof.splice(e, 1), t.partOf = null, this
    }, o.prototype.onAdd = function(t) {
        r.prototype.onAdd.call(this, t);
        for (var e = 0; e < this.oneof.length; ++e) {
            var i = t.get(this.oneof[e]);
            i && !i.partOf && (i.partOf = this, this.fieldsArray.push(i))
        }
        s(this)
    }, o.prototype.onRemove = function(t) {
        for (var e, i = 0; i < this.fieldsArray.length; ++i)(e = this.fieldsArray[i]).parent && e.parent.remove(e);
        r.prototype.onRemove.call(this, t)
    }, o.d = function() {
        for (var t = new Array(arguments.length), e = 0; e < arguments.length;) t[e] = arguments[e++];
        return function(e, i) {
            a.decorateType(e.constructor).add(new o(i, t)), Object.defineProperty(e, i, {
                get: a.oneOfGetter(t),
                set: a.oneOfSetter(t)
            })
        }
    }
},
212: function(t, e, i) {
    "use strict";
    t.exports = a, a.className = "ReflectionObject";
    var r, n = i(205);

    function a(t, e) {
        if (!n.isString(t)) throw TypeError("name must be a string");
        if (e && !n.isObject(e)) throw TypeError("options must be an object");
        this.options = e, this.name = t, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null
    }
    Object.defineProperties(a.prototype, {
        root: {
            get: function() {
                for (var t = this; null !== t.parent;) t = t.parent;
                return t
            }
        },
        fullName: {
            get: function() {
                for (var t = [this.name], e = this.parent; e;) t.unshift(e.name), e = e.parent;
                return t.join(".")
            }
        }
    }), a.prototype.toJSON = function() {
        throw Error()
    }, a.prototype.onAdd = function(t) {
        this.parent && this.parent !== t && this.parent.remove(this), this.parent = t, this.resolved = !1;
        var e = t.root;
        e instanceof r && e._handleAdd(this)
    }, a.prototype.onRemove = function(t) {
        var e = t.root;
        e instanceof r && e._handleRemove(this), this.parent = null, this.resolved = !1
    }, a.prototype.resolve = function() {
        return this.resolved || this.root instanceof r && (this.resolved = !0), this
    }, a.prototype.getOption = function(t) {
        if (this.options) return this.options[t]
    }, a.prototype.setOption = function(t, e, i) {
        return i && this.options && void 0 !== this.options[t] || ((this.options || (this.options = {}))[t] = e), this
    }, a.prototype.setOptions = function(t, e) {
        if (t) for (var i = Object.keys(t), r = 0; r < i.length; ++r) this.setOption(i[r], t[i[r]], e);
        return this
    }, a.prototype.toString = function() {
        var t = this.constructor.className,
            e = this.fullName;
        return e.length ? t + " " + e : t
    }, a._configure = function(t) {
        r = t
    }
},
210: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = c;
    var n = i(212);
    ((c.prototype = Object.create(n.prototype)).constructor = c).className = "Field";
    var a, o = i(207),
        s = i(213),
        h = i(205),
        l = /^required|optional|repeated$/;

    function c(t, e, i, r, a, o, c) {
        if (h.isObject(r) ? (c = a, o = r, r = a = void 0) : h.isObject(a) && (c = o, o = a, a = void 0), n.call(this, t, o), !h.isInteger(e) || e < 0) throw TypeError("id must be a non-negative integer");
        if (!h.isString(i)) throw TypeError("type must be a string");
        if (void 0 !== r && !l.test(r = r.toString().toLowerCase())) throw TypeError("rule must be a string rule");
        if (void 0 !== a && !h.isString(a)) throw TypeError("extend must be a string");
        this.rule = r && "optional" !== r ? r : void 0, this.type = i, this.id = e, this.extend = a || void 0, this.required = "required" === r, this.optional = !this.required, this.repeated = "repeated" === r, this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !! h.Long && void 0 !== s.long[i], this.bytes = "bytes" === i, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = c
    }
    c.fromJSON = function(t, e) {
        return new c(t, e.id, e.type, e.rule, e.extend, e.options, e.comment)
    }, Object.defineProperty(c.prototype, "packed", {
        get: function() {
            return null === this._packed && (this._packed = !1 !== this.getOption("packed")), this._packed
        }
    }), c.prototype.setOption = function(t, e, i) {
        return "packed" === t && (this._packed = null), n.prototype.setOption.call(this, t, e, i)
    }, c.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return h.toObject(["rule", "optional" !== this.rule && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", e ? this.comment : void 0])
    }, c.prototype.resolve = function() {
        if (this.resolved) return this;
        if (void 0 === (this.typeDefault = s.defaults[this.type]) && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof a ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.
        default && (this.typeDefault = this.options.
        default, this.resolvedType instanceof o && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (!0 !== this.options.packed && (void 0 === this.options.packed || !this.resolvedType || this.resolvedType instanceof o) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long) this.typeDefault = h.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)), Object.freeze && Object.freeze(this.typeDefault);
        else if (this.bytes && "string" == typeof this.typeDefault) {
            var t;
            h.base64.test(this.typeDefault) ? h.base64.decode(this.typeDefault, t = h.newBuffer(h.base64.length(this.typeDefault)), 0) : h.utf8.write(this.typeDefault, t = h.newBuffer(h.utf8.length(this.typeDefault)), 0), this.typeDefault = t
        }
        return this.map ? this.defaultValue = h.emptyObject : this.repeated ? this.defaultValue = h.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof a && (this.parent.ctor.prototype[this.name] = this.defaultValue), n.prototype.resolve.call(this)
    }, c.d = function(t, e, i, n) {
        return "function" == typeof e ? e = h.decorateType(e).name : e && "object" === r(e) && (e = h.decorateEnum(e).name),
        function(r, a) {
            h.decorateType(r.constructor).add(new c(a, t, e, i, {
                default: n
            }))
        }
    }, c._configure = function(t) {
        a = t
    }
},
205: function(t, e, i) {
    "use strict";
    var r, n, a = t.exports = i(208),
        o = i(243);
    a.codegen = i(452), a.fetch = i(453), a.path = i(454), a.fs = a.inquire("fs"), a.toArray = function(t) {
        if (t) {
            for (var e = Object.keys(t), i = new Array(e.length), r = 0; r < e.length;) i[r] = t[e[r++]];
            return i
        }
        return []
    }, a.toObject = function(t) {
        for (var e = {}, i = 0; i < t.length;) {
            var r = t[i++],
                n = t[i++];
            void 0 !== n && (e[r] = n)
        }
        return e
    };
    var s = /\\/g,
        h = /"/g;
    a.isReserved = function(t) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
    }, a.safeProp = function(t) {
        return !/^[$\w_]+$/.test(t) || a.isReserved(t) ? '["' + t.replace(s, "\\\\").replace(h, '\\"') + '"]' : "." + t
    }, a.ucFirst = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1)
    };
    var l = /_([a-z])/g;
    a.camelCase = function(t) {
        return t.substring(0, 1) + t.substring(1).replace(l, (function(t, e) {
            return e.toUpperCase()
        }))
    }, a.compareFieldsById = function(t, e) {
        return t.id - e.id
    }, a.decorateType = function(t, e) {
        if (t.$type) return e && t.$type.name !== e && (a.decorateRoot.remove(t.$type), t.$type.name = e, a.decorateRoot.add(t.$type)), t.$type;
        r || (r = i(222));
        var n = new r(e || t.name);
        return a.decorateRoot.add(n), n.ctor = t, Object.defineProperty(t, "$type", {
            value: n,
            enumerable: !1
        }), Object.defineProperty(t.prototype, "$type", {
            value: n,
            enumerable: !1
        }), n
    };
    var c = 0;
    a.decorateEnum = function(t) {
        if (t.$type) return t.$type;
        n || (n = i(207));
        var e = new n("Enum" + c++, t);
        return a.decorateRoot.add(e), Object.defineProperty(t, "$type", {
            value: e,
            enumerable: !1
        }), e
    }, Object.defineProperty(a, "decorateRoot", {
        get: function() {
            return o.decorated || (o.decorated = new(i(227)))
        }
    })
},
205: function(t, e, i) {
    "use strict";
    var r, n, a = t.exports = i(208),
        o = i(243);
    a.codegen = i(452), a.fetch = i(453), a.path = i(454), a.fs = a.inquire("fs"), a.toArray = function(t) {
        if (t) {
            for (var e = Object.keys(t), i = new Array(e.length), r = 0; r < e.length;) i[r] = t[e[r++]];
            return i
        }
        return []
    }, a.toObject = function(t) {
        for (var e = {}, i = 0; i < t.length;) {
            var r = t[i++],
                n = t[i++];
            void 0 !== n && (e[r] = n)
        }
        return e
    };
    var s = /\\/g,
        h = /"/g;
    a.isReserved = function(t) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
    }, a.safeProp = function(t) {
        return !/^[$\w_]+$/.test(t) || a.isReserved(t) ? '["' + t.replace(s, "\\\\").replace(h, '\\"') + '"]' : "." + t
    }, a.ucFirst = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1)
    };
    var l = /_([a-z])/g;
    a.camelCase = function(t) {
        return t.substring(0, 1) + t.substring(1).replace(l, (function(t, e) {
            return e.toUpperCase()
        }))
    }, a.compareFieldsById = function(t, e) {
        return t.id - e.id
    }, a.decorateType = function(t, e) {
        if (t.$type) return e && t.$type.name !== e && (a.decorateRoot.remove(t.$type), t.$type.name = e, a.decorateRoot.add(t.$type)), t.$type;
        r || (r = i(222));
        var n = new r(e || t.name);
        return a.decorateRoot.add(n), n.ctor = t, Object.defineProperty(t, "$type", {
            value: n,
            enumerable: !1
        }), Object.defineProperty(t.prototype, "$type", {
            value: n,
            enumerable: !1
        }), n
    };
    var c = 0;
    a.decorateEnum = function(t) {
        if (t.$type) return t.$type;
        n || (n = i(207));
        var e = new n("Enum" + c++, t);
        return a.decorateRoot.add(e), Object.defineProperty(t, "$type", {
            value: e,
            enumerable: !1
        }), e
    }, Object.defineProperty(a, "decorateRoot", {
        get: function() {
            return o.decorated || (o.decorated = new(i(227)))
        }
    })
},
207: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = s;
    var n = i(212);
    ((s.prototype = Object.create(n.prototype)).constructor = s).className = "Enum";
    var a = i(214),
        o = i(205);

    function s(t, e, i, a, o) {
        if (n.call(this, t, i), e && "object" !== r(e)) throw TypeError("values must be an object");
        if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = a, this.comments = o || {}, this.reserved = void 0, e) for (var s = Object.keys(e), h = 0; h < s.length; ++h) "number" == typeof e[s[h]] && (this.valuesById[this.values[s[h]] = e[s[h]]] = s[h])
    }
    s.fromJSON = function(t, e) {
        var i = new s(t, e.values, e.options, e.comment, e.comments);
        return i.reserved = e.reserved, i
    }, s.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return o.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", e ? this.comment : void 0, "comments", e ? this.comments : void 0])
    }, s.prototype.add = function(t, e, i) {
        if (!o.isString(t)) throw TypeError("name must be a string");
        if (!o.isInteger(e)) throw TypeError("id must be an integer");
        if (void 0 !== this.values[t]) throw Error("duplicate name '" + t + "' in " + this);
        if (this.isReservedId(e)) throw Error("id " + e + " is reserved in " + this);
        if (this.isReservedName(t)) throw Error("name '" + t + "' is reserved in " + this);
        if (void 0 !== this.valuesById[e]) {
            if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + e + " in " + this);
            this.values[t] = e
        } else this.valuesById[this.values[t] = e] = t;
        return this.comments[t] = i || null, this
    }, s.prototype.remove = function(t) {
        if (!o.isString(t)) throw TypeError("name must be a string");
        var e = this.values[t];
        if (null == e) throw Error("name '" + t + "' does not exist in " + this);
        return delete this.valuesById[e], delete this.values[t], delete this.comments[t], this
    }, s.prototype.isReservedId = function(t) {
        return a.isReservedId(this.reserved, t)
    }, s.prototype.isReservedName = function(t) {
        return a.isReservedName(this.reserved, t)
    }
},
222: function(t, e, i) {
    "use strict";
    t.exports = y;
    var r = i(214);
    ((y.prototype = Object.create(r.prototype)).constructor = y).className = "Type";
    var n = i(207),
        a = i(215),
        o = i(210),
        s = i(223),
        h = i(224),
        l = i(226),
        c = i(221),
        u = i(220),
        p = i(205),
        d = i(244),
        f = i(245),
        m = i(246),
        g = i(247),
        v = i(248);

    function y(t, e) {
        r.call(this, t, e), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null,
        this._oneofsArray = null, this._ctor = null
    }
    function _(t) {
        return t._fieldsById = t._fieldsArray = t._oneofsArray = null, delete t.encode, delete t.decode, delete t.verify, t
    }
    Object.defineProperties(y.prototype, {
        fieldsById: {
            get: function() {
                if (this._fieldsById) return this._fieldsById;
                this._fieldsById = {};
                for (var t = Object.keys(this.fields), e = 0; e < t.length; ++e) {
                    var i = this.fields[t[e]],
                        r = i.id;
                    if (this._fieldsById[r]) throw Error("duplicate id " + r + " in " + this);
                    this._fieldsById[r] = i
                }
                return this._fieldsById
            }
        },
        fieldsArray: {
            get: function() {
                return this._fieldsArray || (this._fieldsArray = p.toArray(this.fields))
            }
        },
        oneofsArray: {
            get: function() {
                return this._oneofsArray || (this._oneofsArray = p.toArray(this.oneofs))
            }
        },
        ctor: {
            get: function() {
                return this._ctor || (this.ctor = y.generateConstructor(this)())
            },
            set: function(t) {
                var e = t.prototype;
                e instanceof l || ((t.prototype = new l).constructor = t, p.merge(t.prototype, e)), t.$type = t.prototype.$type = this, p.merge(t, l, !0), this._ctor = t;
                for (var i = 0; i < this.fieldsArray.length; ++i) this._fieldsArray[i].resolve();
                var r = {};
                for (i = 0; i < this.oneofsArray.length; ++i) r[this._oneofsArray[i].resolve().name] = {
                    get: p.oneOfGetter(this._oneofsArray[i].oneof),
                    set: p.oneOfSetter(this._oneofsArray[i].oneof)
                };
                i && Object.defineProperties(t.prototype, r)
            }
        }
    }), y.generateConstructor = function(t) {
        for (var e, i = p.codegen(["p"], t.name), r = 0; r < t.fieldsArray.length; ++r)(e = t._fieldsArray[r]).map ? i("this%s={}", p.safeProp(e.name)) : e.repeated && i("this%s=[]", p.safeProp(e.name));
        return i("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")
    }, y.fromJSON = function(t, e) {
        var i = new y(t, e.options);
        i.extensions = e.extensions, i.reserved = e.reserved;
        for (var l = Object.keys(e.fields), c = 0; c < l.length; ++c) i.add((void 0 !== e.fields[l[c]].keyType ? s.fromJSON : o.fromJSON)(l[c], e.fields[l[c]]));
        if (e.oneofs) for (l = Object.keys(e.oneofs), c = 0; c < l.length; ++c) i.add(a.fromJSON(l[c], e.oneofs[l[c]]));
        if (e.nested) for (l = Object.keys(e.nested), c = 0; c < l.length; ++c) {
            var u = e.nested[l[c]];
            i.add((void 0 !== u.id ? o.fromJSON : void 0 !== u.fields ? y.fromJSON : void 0 !== u.values ? n.fromJSON : void 0 !== u.methods ? h.fromJSON : r.fromJSON)(l[c], u))
        }
        return e.extensions && e.extensions.length && (i.extensions = e.extensions), e.reserved && e.reserved.length && (i.reserved = e.reserved), e.group && (i.group = !0), e.comment && (i.comment = e.comment), i
    }, y.prototype.toJSON = function(t) {
        var e = r.prototype.toJSON.call(this, t),
            i = !! t && Boolean(t.keepComments);
        return p.toObject(["options", e && e.options || void 0, "oneofs", r.arrayToJSON(this.oneofsArray, t), "fields", r.arrayToJSON(this.fieldsArray.filter((function(t) {
            return !t.declaringField
        })), t) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : void 0, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "group", this.group || void 0, "nested", e && e.nested || void 0, "comment", i ? this.comment : void 0])
    }, y.prototype.resolveAll = function() {
        for (var t = this.fieldsArray, e = 0; e < t.length;) t[e++].resolve();
        var i = this.oneofsArray;
        for (e = 0; e < i.length;) i[e++].resolve();
        return r.prototype.resolveAll.call(this)
    }, y.prototype.get = function(t) {
        return this.fields[t] || this.oneofs && this.oneofs[t] || this.nested && this.nested[t] || null
    }, y.prototype.add = function(t) {
        if (this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
        if (t instanceof o && void 0 === t.extend) {
            if (this._fieldsById ? this._fieldsById[t.id] : this.fieldsById[t.id]) throw Error("duplicate id " + t.id + " in " + this);
            if (this.isReservedId(t.id)) throw Error("id " + t.id + " is reserved in " + this);
            if (this.isReservedName(t.name)) throw Error("name '" + t.name + "' is reserved in " + this);
            return t.parent && t.parent.remove(t), this.fields[t.name] = t, t.message = this, t.onAdd(this), _(this)
        }
        return t instanceof a ? (this.oneofs || (this.oneofs = {}), this.oneofs[t.name] = t, t.onAdd(this), _(this)) : r.prototype.add.call(this, t)
    }, y.prototype.remove = function(t) {
        if (t instanceof o && void 0 === t.extend) {
            if (!this.fields || this.fields[t.name] !== t) throw Error(t + " is not a member of " + this);
            return delete this.fields[t.name], t.parent = null, t.onRemove(this), _(this)
        }
        if (t instanceof a) {
            if (!this.oneofs || this.oneofs[t.name] !== t) throw Error(t + " is not a member of " + this);
            return delete this.oneofs[t.name], t.parent = null, t.onRemove(this), _(this)
        }
        return r.prototype.remove.call(this, t)
    }, y.prototype.isReservedId = function(t) {
        return r.isReservedId(this.reserved, t)
    }, y.prototype.isReservedName = function(t) {
        return r.isReservedName(this.reserved, t)
    }, y.prototype.create = function(t) {
        return new this.ctor(t)
    }, y.prototype.setup = function() {
        for (var t = this.fullName, e = [], i = 0; i < this.fieldsArray.length; ++i) e.push(this._fieldsArray[i].resolve().resolvedType);
        this.encode = d(this)({
            Writer: u,
            types: e,
            util: p
        }), this.decode = f(this)({
            Reader: c,
            types: e,
            util: p
        }), this.verify = m(this)({
            types: e,
            util: p
        }), this.fromObject = g.fromObject(this)({
            types: e,
            util: p
        }), this.toObject = g.toObject(this)({
            types: e,
            util: p
        });
        var r = v[t];
        if (r) {
            var n = Object.create(this);
            n.fromObject = this.fromObject, this.fromObject = r.fromObject.bind(n), n.toObject = this.toObject, this.toObject = r.toObject.bind(n)
        }
        return this
    }, y.prototype.encode = function(t, e) {
        return this.setup().encode(t, e)
    }, y.prototype.encodeDelimited = function(t, e) {
        return this.encode(t, e && e.len ? e.fork() : e).ldelim()
    }, y.prototype.decode = function(t, e) {
        return this.setup().decode(t, e)
    }, y.prototype.decodeDelimited = function(t) {
        return t instanceof c || (t = c.create(t)), this.decode(t, t.uint32())
    }, y.prototype.verify = function(t) {
        return this.setup().verify(t)
    }, y.prototype.fromObject = function(t) {
        return this.setup().fromObject(t)
    }, y.prototype.toObject = function(t, e) {
        return this.setup().toObject(t, e)
    }, y.d = function(t) {
        return function(e) {
            p.decorateType(e, t)
        }
    }
},
214: function(t, e, i) {
    "use strict";
    t.exports = c;
    var r = i(212);
    ((c.prototype = Object.create(r.prototype)).constructor = c).className = "Namespace";
    var n, a, o, s = i(210),
        h = i(205);

    function l(t, e) {
        if (t && t.length) {
            for (var i = {}, r = 0; r < t.length; ++r) i[t[r].name] = t[r].toJSON(e);
            return i
        }
    }
    function c(t, e) {
        r.call(this, t, e), this.nested = void 0, this._nestedArray = null
    }
    function u(t) {
        return t._nestedArray = null, t
    }
    c.fromJSON = function(t, e) {
        return new c(t, e.options).addJSON(e.nested)
    }, c.arrayToJSON = l, c.isReservedId = function(t, e) {
        if (t) for (var i = 0; i < t.length; ++i) if ("string" != typeof t[i] && t[i][0] <= e && t[i][1] >= e) return !0;
        return !1
    }, c.isReservedName = function(t, e) {
        if (t) for (var i = 0; i < t.length; ++i) if (t[i] === e) return !0;
        return !1
    }, Object.defineProperty(c.prototype, "nestedArray", {
        get: function() {
            return this._nestedArray || (this._nestedArray = h.toArray(this.nested))
        }
    }), c.prototype.toJSON = function(t) {
        return h.toObject(["options", this.options, "nested", l(this.nestedArray, t)])
    }, c.prototype.addJSON = function(t) {
        if (t) for (var e, i = Object.keys(t), r = 0; r < i.length; ++r) e = t[i[r]], this.add((void 0 !== e.fields ? n.fromJSON : void 0 !== e.values ? o.fromJSON : void 0 !== e.methods ? a.fromJSON : void 0 !== e.id ? s.fromJSON : c.fromJSON)(i[r], e));
        return this
    }, c.prototype.get = function(t) {
        return this.nested && this.nested[t] || null
    }, c.prototype.getEnum = function(t) {
        if (this.nested && this.nested[t] instanceof o) return this.nested[t].values;
        throw Error("no such enum: " + t)
    }, c.prototype.add = function(t) {
        if (!(t instanceof s && void 0 !== t.extend || t instanceof n || t instanceof o || t instanceof a || t instanceof c)) throw TypeError("object must be a valid nested object");
        if (this.nested) {
            var e = this.get(t.name);
            if (e) {
                if (!(e instanceof c && t instanceof c) || e instanceof n || e instanceof a) throw Error("duplicate name '" + t.name + "' in " + this);
                for (var i = e.nestedArray, r = 0; r < i.length; ++r) t.add(i[r]);
                this.remove(e), this.nested || (this.nested = {}), t.setOptions(e.options, !0)
            }
        } else this.nested = {};
        return this.nested[t.name] = t, t.onAdd(this), u(this)
    }, c.prototype.remove = function(t) {
        if (!(t instanceof r)) throw TypeError("object must be a ReflectionObject");
        if (t.parent !== this) throw Error(t + " is not a member of " + this);
        return delete this.nested[t.name], Object.keys(this.nested).length || (this.nested = void 0), t.onRemove(this), u(this)
    }, c.prototype.define = function(t, e) {
        if (h.isString(t)) t = t.split(".");
        else if (!Array.isArray(t)) throw TypeError("illegal path");
        if (t && t.length && "" === t[0]) throw Error("path must be relative");
        for (var i = this; t.length > 0;) {
            var r = t.shift();
            if (i.nested && i.nested[r]) {
                if (!((i = i.nested[r]) instanceof c)) throw Error("path conflicts with non-namespace objects")
            } else i.add(i = new c(r))
        }
        return e && i.addJSON(e), i
    }, c.prototype.resolveAll = function() {
        for (var t = this.nestedArray, e = 0; e < t.length;) t[e] instanceof c ? t[e++].resolveAll() : t[e++].resolve();
        return this.resolve()
    }, c.prototype.lookup = function(t, e, i) {
        if ("boolean" == typeof e ? (i = e, e = void 0) : e && !Array.isArray(e) && (e = [e]), h.isString(t) && t.length) {
            if ("." === t) return this.root;
            t = t.split(".")
        } else if (!t.length) return this;
        if ("" === t[0]) return this.root.lookup(t.slice(1), e);
        var r = this.get(t[0]);
        if (r) {
            if (1 === t.length) {
                if (!e || e.indexOf(r.constructor) > -1) return r
            } else if (r instanceof c && (r = r.lookup(t.slice(1), e, !0))) return r
        } else for (var n = 0; n < this.nestedArray.length; ++n) if (this._nestedArray[n] instanceof c && (r = this._nestedArray[n].lookup(t, e, !0))) return r;
        return null === this.parent || i ? null : this.parent.lookup(t, e)
    }, c.prototype.lookupType = function(t) {
        var e = this.lookup(t, [n]);
        if (!e) throw Error("no such type: " + t);
        return e
    }, c.prototype.lookupEnum = function(t) {
        var e = this.lookup(t, [o]);
        if (!e) throw Error("no such Enum '" + t + "' in " + this);
        return e
    }, c.prototype.lookupTypeOrEnum = function(t) {
        var e = this.lookup(t, [n, o]);
        if (!e) throw Error("no such Type or Enum '" + t + "' in " + this);
        return e
    }, c.prototype.lookupService = function(t) {
        var e = this.lookup(t, [a]);
        if (!e) throw Error("no such Service '" + t + "' in " + this);
        return e
    }, c._configure = function(t, e, i) {
        n = t, a = e, o = i
    }
},
207: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = s;
    var n = i(212);
    ((s.prototype = Object.create(n.prototype)).constructor = s).className = "Enum";
    var a = i(214),
        o = i(205);

    function s(t, e, i, a, o) {
        if (n.call(this, t, i), e && "object" !== r(e)) throw TypeError("values must be an object");
        if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = a, this.comments = o || {}, this.reserved = void 0, e) for (var s = Object.keys(e), h = 0; h < s.length; ++h) "number" == typeof e[s[h]] && (this.valuesById[this.values[s[h]] = e[s[h]]] = s[h])
    }
    s.fromJSON = function(t, e) {
        var i = new s(t, e.values, e.options, e.comment, e.comments);
        return i.reserved = e.reserved, i
    }, s.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return o.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", e ? this.comment : void 0, "comments", e ? this.comments : void 0])
    }, s.prototype.add = function(t, e, i) {
        if (!o.isString(t)) throw TypeError("name must be a string");
        if (!o.isInteger(e)) throw TypeError("id must be an integer");
        if (void 0 !== this.values[t]) throw Error("duplicate name '" + t + "' in " + this);
        if (this.isReservedId(e)) throw Error("id " + e + " is reserved in " + this);
        if (this.isReservedName(t)) throw Error("name '" + t + "' is reserved in " + this);
        if (void 0 !== this.valuesById[e]) {
            if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + e + " in " + this);
            this.values[t] = e
        } else this.valuesById[this.values[t] = e] = t;
        return this.comments[t] = i || null, this
    }, s.prototype.remove = function(t) {
        if (!o.isString(t)) throw TypeError("name must be a string");
        var e = this.values[t];
        if (null == e) throw Error("name '" + t + "' does not exist in " + this);
        return delete this.valuesById[e], delete this.values[t], delete this.comments[t], this
    }, s.prototype.isReservedId = function(t) {
        return a.isReservedId(this.reserved, t)
    }, s.prototype.isReservedName = function(t) {
        return a.isReservedName(this.reserved, t)
    }
},
215: function(t, e, i) {
    "use strict";
    t.exports = o;
    var r = i(212);
    ((o.prototype = Object.create(r.prototype)).constructor = o).className = "OneOf";
    var n = i(210),
        a = i(205);

    function o(t, e, i, n) {
        if (Array.isArray(e) || (i = e, e = void 0), r.call(this, t, i), void 0 !== e && !Array.isArray(e)) throw TypeError("fieldNames must be an Array");
        this.oneof = e || [], this.fieldsArray = [], this.comment = n
    }
    function s(t) {
        if (t.parent) for (var e = 0; e < t.fieldsArray.length; ++e) t.fieldsArray[e].parent || t.parent.add(t.fieldsArray[e])
    }
    o.fromJSON = function(t, e) {
        return new o(t, e.oneof, e.options, e.comment)
    }, o.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return a.toObject(["options", this.options, "oneof", this.oneof, "comment", e ? this.comment : void 0])
    }, o.prototype.add = function(t) {
        if (!(t instanceof n)) throw TypeError("field must be a Field");
        return t.parent && t.parent !== this.parent && t.parent.remove(t), this.oneof.push(t.name), this.fieldsArray.push(t), t.partOf = this, s(this), this
    }, o.prototype.remove = function(t) {
        if (!(t instanceof n)) throw TypeError("field must be a Field");
        var e = this.fieldsArray.indexOf(t);
        if (e < 0) throw Error(t + " is not a member of " + this);
        return this.fieldsArray.splice(e, 1), (e = this.oneof.indexOf(t.name)) > -1 && this.oneof.splice(e, 1), t.partOf = null, this
    }, o.prototype.onAdd = function(t) {
        r.prototype.onAdd.call(this, t);
        for (var e = 0; e < this.oneof.length; ++e) {
            var i = t.get(this.oneof[e]);
            i && !i.partOf && (i.partOf = this, this.fieldsArray.push(i))
        }
        s(this)
    }, o.prototype.onRemove = function(t) {
        for (var e, i = 0; i < this.fieldsArray.length; ++i)(e = this.fieldsArray[i]).parent && e.parent.remove(e);
        r.prototype.onRemove.call(this, t)
    }, o.d = function() {
        for (var t = new Array(arguments.length), e = 0; e < arguments.length;) t[e] = arguments[e++];
        return function(e, i) {
            a.decorateType(e.constructor).add(new o(i, t)), Object.defineProperty(e, i, {
                get: a.oneOfGetter(t),
                set: a.oneOfSetter(t)
            })
        }
    }
},
210: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = c;
    var n = i(212);
    ((c.prototype = Object.create(n.prototype)).constructor = c).className = "Field";
    var a, o = i(207),
        s = i(213),
        h = i(205),
        l = /^required|optional|repeated$/;

    function c(t, e, i, r, a, o, c) {
        if (h.isObject(r) ? (c = a, o = r, r = a = void 0) : h.isObject(a) && (c = o, o = a, a = void 0), n.call(this, t, o), !h.isInteger(e) || e < 0) throw TypeError("id must be a non-negative integer");
        if (!h.isString(i)) throw TypeError("type must be a string");
        if (void 0 !== r && !l.test(r = r.toString().toLowerCase())) throw TypeError("rule must be a string rule");
        if (void 0 !== a && !h.isString(a)) throw TypeError("extend must be a string");
        this.rule = r && "optional" !== r ? r : void 0, this.type = i, this.id = e, this.extend = a || void 0, this.required = "required" === r, this.optional = !this.required, this.repeated = "repeated" === r, this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !! h.Long && void 0 !== s.long[i], this.bytes = "bytes" === i, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = c
    }
    c.fromJSON = function(t, e) {
        return new c(t, e.id, e.type, e.rule, e.extend, e.options, e.comment)
    }, Object.defineProperty(c.prototype, "packed", {
        get: function() {
            return null === this._packed && (this._packed = !1 !== this.getOption("packed")), this._packed
        }
    }), c.prototype.setOption = function(t, e, i) {
        return "packed" === t && (this._packed = null), n.prototype.setOption.call(this, t, e, i)
    }, c.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return h.toObject(["rule", "optional" !== this.rule && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", e ? this.comment : void 0])
    }, c.prototype.resolve = function() {
        if (this.resolved) return this;
        if (void 0 === (this.typeDefault = s.defaults[this.type]) && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof a ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.
        default && (this.typeDefault = this.options.
        default, this.resolvedType instanceof o && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (!0 !== this.options.packed && (void 0 === this.options.packed || !this.resolvedType || this.resolvedType instanceof o) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long) this.typeDefault = h.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)), Object.freeze && Object.freeze(this.typeDefault);
        else if (this.bytes && "string" == typeof this.typeDefault) {
            var t;
            h.base64.test(this.typeDefault) ? h.base64.decode(this.typeDefault, t = h.newBuffer(h.base64.length(this.typeDefault)), 0) : h.utf8.write(this.typeDefault, t = h.newBuffer(h.utf8.length(this.typeDefault)), 0), this.typeDefault = t
        }
        return this.map ? this.defaultValue = h.emptyObject : this.repeated ? this.defaultValue = h.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof a && (this.parent.ctor.prototype[this.name] = this.defaultValue), n.prototype.resolve.call(this)
    }, c.d = function(t, e, i, n) {
        return "function" == typeof e ? e = h.decorateType(e).name : e && "object" === r(e) && (e = h.decorateEnum(e).name),
        function(r, a) {
            h.decorateType(r.constructor).add(new c(a, t, e, i, {
                default: n
            }))
        }
    }, c._configure = function(t) {
        a = t
    }
},
223: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = s;
    var n = i(210);
    ((s.prototype = Object.create(n.prototype)).constructor = s).className = "MapField";
    var a = i(213),
        o = i(205);

    function s(t, e, i, r, a, s) {
        if (n.call(this, t, e, r, void 0, void 0, a, s), !o.isString(i)) throw TypeError("keyType must be a string");
        this.keyType = i, this.resolvedKeyType = null, this.map = !0
    }
    s.fromJSON = function(t, e) {
        return new s(t, e.id, e.keyType, e.type, e.options, e.comment)
    }, s.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return o.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", e ? this.comment : void 0])
    }, s.prototype.resolve = function() {
        if (this.resolved) return this;
        if (void 0 === a.mapKey[this.keyType]) throw Error("invalid key type: " + this.keyType);
        return n.prototype.resolve.call(this)
    }, s.d = function(t, e, i) {
        return "function" == typeof i ? i = o.decorateType(i).name : i && "object" === r(i) && (i = o.decorateEnum(i).name),
        function(r, n) {
            o.decorateType(r.constructor).add(new s(n, t, e, i))
        }
    }
},
210: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = c;
    var n = i(212);
    ((c.prototype = Object.create(n.prototype)).constructor = c).className = "Field";
    var a, o = i(207),
        s = i(213),
        h = i(205),
        l = /^required|optional|repeated$/;

    function c(t, e, i, r, a, o, c) {
        if (h.isObject(r) ? (c = a, o = r, r = a = void 0) : h.isObject(a) && (c = o, o = a, a = void 0), n.call(this, t, o), !h.isInteger(e) || e < 0) throw TypeError("id must be a non-negative integer");
        if (!h.isString(i)) throw TypeError("type must be a string");
        if (void 0 !== r && !l.test(r = r.toString().toLowerCase())) throw TypeError("rule must be a string rule");
        if (void 0 !== a && !h.isString(a)) throw TypeError("extend must be a string");
        this.rule = r && "optional" !== r ? r : void 0, this.type = i, this.id = e, this.extend = a || void 0, this.required = "required" === r, this.optional = !this.required, this.repeated = "repeated" === r, this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !! h.Long && void 0 !== s.long[i], this.bytes = "bytes" === i, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = c
    }
    c.fromJSON = function(t, e) {
        return new c(t, e.id, e.type, e.rule, e.extend, e.options, e.comment)
    }, Object.defineProperty(c.prototype, "packed", {
        get: function() {
            return null === this._packed && (this._packed = !1 !== this.getOption("packed")), this._packed
        }
    }), c.prototype.setOption = function(t, e, i) {
        return "packed" === t && (this._packed = null), n.prototype.setOption.call(this, t, e, i)
    }, c.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return h.toObject(["rule", "optional" !== this.rule && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", e ? this.comment : void 0])
    }, c.prototype.resolve = function() {
        if (this.resolved) return this;
        if (void 0 === (this.typeDefault = s.defaults[this.type]) && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof a ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.
        default && (this.typeDefault = this.options.
        default, this.resolvedType instanceof o && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (!0 !== this.options.packed && (void 0 === this.options.packed || !this.resolvedType || this.resolvedType instanceof o) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long) this.typeDefault = h.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)), Object.freeze && Object.freeze(this.typeDefault);
        else if (this.bytes && "string" == typeof this.typeDefault) {
            var t;
            h.base64.test(this.typeDefault) ? h.base64.decode(this.typeDefault, t = h.newBuffer(h.base64.length(this.typeDefault)), 0) : h.utf8.write(this.typeDefault, t = h.newBuffer(h.utf8.length(this.typeDefault)), 0), this.typeDefault = t
        }
        return this.map ? this.defaultValue = h.emptyObject : this.repeated ? this.defaultValue = h.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof a && (this.parent.ctor.prototype[this.name] = this.defaultValue), n.prototype.resolve.call(this)
    }, c.d = function(t, e, i, n) {
        return "function" == typeof e ? e = h.decorateType(e).name : e && "object" === r(e) && (e = h.decorateEnum(e).name),
        function(r, a) {
            h.decorateType(r.constructor).add(new c(a, t, e, i, {
                default: n
            }))
        }
    }, c._configure = function(t) {
        a = t
    }
},
213: function(t, e, i) {
    "use strict";
    var r = e,
        n = i(205),
        a = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];

    function o(t, e) {
        var i = 0,
            r = {};
        for (e |= 0; i < t.length;) r[a[i + e]] = t[i++];
        return r
    }
    r.basic = o([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), r.defaults = o([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", n.emptyArray, null]), r.long = o([0, 0, 0, 1, 1], 7), r.mapKey = o([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), r.packed = o([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])
},
205: function(t, e, i) {
    "use strict";
    var r, n, a = t.exports = i(208),
        o = i(243);
    a.codegen = i(452), a.fetch = i(453), a.path = i(454), a.fs = a.inquire("fs"), a.toArray = function(t) {
        if (t) {
            for (var e = Object.keys(t), i = new Array(e.length), r = 0; r < e.length;) i[r] = t[e[r++]];
            return i
        }
        return []
    }, a.toObject = function(t) {
        for (var e = {}, i = 0; i < t.length;) {
            var r = t[i++],
                n = t[i++];
            void 0 !== n && (e[r] = n)
        }
        return e
    };
    var s = /\\/g,
        h = /"/g;
    a.isReserved = function(t) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
    }, a.safeProp = function(t) {
        return !/^[$\w_]+$/.test(t) || a.isReserved(t) ? '["' + t.replace(s, "\\\\").replace(h, '\\"') + '"]' : "." + t
    }, a.ucFirst = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1)
    };
    var l = /_([a-z])/g;
    a.camelCase = function(t) {
        return t.substring(0, 1) + t.substring(1).replace(l, (function(t, e) {
            return e.toUpperCase()
        }))
    }, a.compareFieldsById = function(t, e) {
        return t.id - e.id
    }, a.decorateType = function(t, e) {
        if (t.$type) return e && t.$type.name !== e && (a.decorateRoot.remove(t.$type), t.$type.name = e, a.decorateRoot.add(t.$type)), t.$type;
        r || (r = i(222));
        var n = new r(e || t.name);
        return a.decorateRoot.add(n), n.ctor = t, Object.defineProperty(t, "$type", {
            value: n,
            enumerable: !1
        }), Object.defineProperty(t.prototype, "$type", {
            value: n,
            enumerable: !1
        }), n
    };
    var c = 0;
    a.decorateEnum = function(t) {
        if (t.$type) return t.$type;
        n || (n = i(207));
        var e = new n("Enum" + c++, t);
        return a.decorateRoot.add(e), Object.defineProperty(t, "$type", {
            value: e,
            enumerable: !1
        }), e
    }, Object.defineProperty(a, "decorateRoot", {
        get: function() {
            return o.decorated || (o.decorated = new(i(227)))
        }
    })
},
224: function(t, e, i) {
    "use strict";
    t.exports = s;
    var r = i(214);
    ((s.prototype = Object.create(r.prototype)).constructor = s).className = "Service";
    var n = i(225),
        a = i(205),
        o = i(242);

    function s(t, e) {
        r.call(this, t, e), this.methods = {}, this._methodsArray = null
    }
    function h(t) {
        return t._methodsArray = null, t
    }
    s.fromJSON = function(t, e) {
        var i = new s(t, e.options);
        if (e.methods) for (var r = Object.keys(e.methods), a = 0; a < r.length; ++a) i.add(n.fromJSON(r[a], e.methods[r[a]]));
        return e.nested && i.addJSON(e.nested), i.comment = e.comment, i
    }, s.prototype.toJSON = function(t) {
        var e = r.prototype.toJSON.call(this, t),
            i = !! t && Boolean(t.keepComments);
        return a.toObject(["options", e && e.options || void 0, "methods", r.arrayToJSON(this.methodsArray, t) || {}, "nested", e && e.nested || void 0, "comment", i ? this.comment : void 0])
    }, Object.defineProperty(s.prototype, "methodsArray", {
        get: function() {
            return this._methodsArray || (this._methodsArray = a.toArray(this.methods))
        }
    }), s.prototype.get = function(t) {
        return this.methods[t] || r.prototype.get.call(this, t)
    }, s.prototype.resolveAll = function() {
        for (var t = this.methodsArray, e = 0; e < t.length; ++e) t[e].resolve();
        return r.prototype.resolve.call(this)
    }, s.prototype.add = function(t) {
        if (this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
        return t instanceof n ? (this.methods[t.name] = t, t.parent = this, h(this)) : r.prototype.add.call(this, t)
    }, s.prototype.remove = function(t) {
        if (t instanceof n) {
            if (this.methods[t.name] !== t) throw Error(t + " is not a member of " + this);
            return delete this.methods[t.name], t.parent = null, h(this)
        }
        return r.prototype.remove.call(this, t)
    }, s.prototype.create = function(t, e, i) {
        for (var r, n = new o.Service(t, e, i), s = 0; s < this.methodsArray.length; ++s) {
            var h = a.lcFirst((r = this._methodsArray[s]).resolve().name).replace(/[^$\w_]/g, "");
            n[h] = a.codegen(["r", "c"], a.isReserved(h) ? h + "_" : h)("return this.rpcCall(m,q,s,r,c)")({
                m: r,
                q: r.resolvedRequestType.ctor,
                s: r.resolvedResponseType.ctor
            })
        }
        return n
    }
},
214: function(t, e, i) {
    "use strict";
    t.exports = c;
    var r = i(212);
    ((c.prototype = Object.create(r.prototype)).constructor = c).className = "Namespace";
    var n, a, o, s = i(210),
        h = i(205);

    function l(t, e) {
        if (t && t.length) {
            for (var i = {}, r = 0; r < t.length; ++r) i[t[r].name] = t[r].toJSON(e);
            return i
        }
    }
    function c(t, e) {
        r.call(this, t, e), this.nested = void 0, this._nestedArray = null
    }
    function u(t) {
        return t._nestedArray = null, t
    }
    c.fromJSON = function(t, e) {
        return new c(t, e.options).addJSON(e.nested)
    }, c.arrayToJSON = l, c.isReservedId = function(t, e) {
        if (t) for (var i = 0; i < t.length; ++i) if ("string" != typeof t[i] && t[i][0] <= e && t[i][1] >= e) return !0;
        return !1
    }, c.isReservedName = function(t, e) {
        if (t) for (var i = 0; i < t.length; ++i) if (t[i] === e) return !0;
        return !1
    }, Object.defineProperty(c.prototype, "nestedArray", {
        get: function() {
            return this._nestedArray || (this._nestedArray = h.toArray(this.nested))
        }
    }), c.prototype.toJSON = function(t) {
        return h.toObject(["options", this.options, "nested", l(this.nestedArray, t)])
    }, c.prototype.addJSON = function(t) {
        if (t) for (var e, i = Object.keys(t), r = 0; r < i.length; ++r) e = t[i[r]], this.add((void 0 !== e.fields ? n.fromJSON : void 0 !== e.values ? o.fromJSON : void 0 !== e.methods ? a.fromJSON : void 0 !== e.id ? s.fromJSON : c.fromJSON)(i[r], e));
        return this
    }, c.prototype.get = function(t) {
        return this.nested && this.nested[t] || null
    }, c.prototype.getEnum = function(t) {
        if (this.nested && this.nested[t] instanceof o) return this.nested[t].values;
        throw Error("no such enum: " + t)
    }, c.prototype.add = function(t) {
        if (!(t instanceof s && void 0 !== t.extend || t instanceof n || t instanceof o || t instanceof a || t instanceof c)) throw TypeError("object must be a valid nested object");
        if (this.nested) {
            var e = this.get(t.name);
            if (e) {
                if (!(e instanceof c && t instanceof c) || e instanceof n || e instanceof a) throw Error("duplicate name '" + t.name + "' in " + this);
                for (var i = e.nestedArray, r = 0; r < i.length; ++r) t.add(i[r]);
                this.remove(e), this.nested || (this.nested = {}), t.setOptions(e.options, !0)
            }
        } else this.nested = {};
        return this.nested[t.name] = t, t.onAdd(this), u(this)
    }, c.prototype.remove = function(t) {
        if (!(t instanceof r)) throw TypeError("object must be a ReflectionObject");
        if (t.parent !== this) throw Error(t + " is not a member of " + this);
        return delete this.nested[t.name], Object.keys(this.nested).length || (this.nested = void 0), t.onRemove(this), u(this)
    }, c.prototype.define = function(t, e) {
        if (h.isString(t)) t = t.split(".");
        else if (!Array.isArray(t)) throw TypeError("illegal path");
        if (t && t.length && "" === t[0]) throw Error("path must be relative");
        for (var i = this; t.length > 0;) {
            var r = t.shift();
            if (i.nested && i.nested[r]) {
                if (!((i = i.nested[r]) instanceof c)) throw Error("path conflicts with non-namespace objects")
            } else i.add(i = new c(r))
        }
        return e && i.addJSON(e), i
    }, c.prototype.resolveAll = function() {
        for (var t = this.nestedArray, e = 0; e < t.length;) t[e] instanceof c ? t[e++].resolveAll() : t[e++].resolve();
        return this.resolve()
    }, c.prototype.lookup = function(t, e, i) {
        if ("boolean" == typeof e ? (i = e, e = void 0) : e && !Array.isArray(e) && (e = [e]), h.isString(t) && t.length) {
            if ("." === t) return this.root;
            t = t.split(".")
        } else if (!t.length) return this;
        if ("" === t[0]) return this.root.lookup(t.slice(1), e);
        var r = this.get(t[0]);
        if (r) {
            if (1 === t.length) {
                if (!e || e.indexOf(r.constructor) > -1) return r
            } else if (r instanceof c && (r = r.lookup(t.slice(1), e, !0))) return r
        } else for (var n = 0; n < this.nestedArray.length; ++n) if (this._nestedArray[n] instanceof c && (r = this._nestedArray[n].lookup(t, e, !0))) return r;
        return null === this.parent || i ? null : this.parent.lookup(t, e)
    }, c.prototype.lookupType = function(t) {
        var e = this.lookup(t, [n]);
        if (!e) throw Error("no such type: " + t);
        return e
    }, c.prototype.lookupEnum = function(t) {
        var e = this.lookup(t, [o]);
        if (!e) throw Error("no such Enum '" + t + "' in " + this);
        return e
    }, c.prototype.lookupTypeOrEnum = function(t) {
        var e = this.lookup(t, [n, o]);
        if (!e) throw Error("no such Type or Enum '" + t + "' in " + this);
        return e
    }, c.prototype.lookupService = function(t) {
        var e = this.lookup(t, [a]);
        if (!e) throw Error("no such Service '" + t + "' in " + this);
        return e
    }, c._configure = function(t, e, i) {
        n = t, a = e, o = i
    }
},
225: function(t, e, i) {
    "use strict";
    t.exports = a;
    var r = i(212);
    ((a.prototype = Object.create(r.prototype)).constructor = a).className = "Method";
    var n = i(205);

    function a(t, e, i, a, o, s, h, l) {
        if (n.isObject(o) ? (h = o, o = s = void 0) : n.isObject(s) && (h = s, s = void 0), void 0 !== e && !n.isString(e)) throw TypeError("type must be a string");
        if (!n.isString(i)) throw TypeError("requestType must be a string");
        if (!n.isString(a)) throw TypeError("responseType must be a string");
        r.call(this, t, h), this.type = e || "rpc", this.requestType = i, this.requestStream = !! o || void 0, this.responseType = a, this.responseStream = !! s || void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = l
    }
    a.fromJSON = function(t, e) {
        return new a(t, e.type, e.requestType, e.responseType, e.requestStream, e.responseStream, e.options, e.comment)
    }, a.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return n.toObject(["type", "rpc" !== this.type && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", e ? this.comment : void 0])
    }, a.prototype.resolve = function() {
        return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), r.prototype.resolve.call(this))
    }
},
212: function(t, e, i) {
    "use strict";
    t.exports = a, a.className = "ReflectionObject";
    var r, n = i(205);

    function a(t, e) {
        if (!n.isString(t)) throw TypeError("name must be a string");
        if (e && !n.isObject(e)) throw TypeError("options must be an object");
        this.options = e, this.name = t, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null
    }
    Object.defineProperties(a.prototype, {
        root: {
            get: function() {
                for (var t = this; null !== t.parent;) t = t.parent;
                return t
            }
        },
        fullName: {
            get: function() {
                for (var t = [this.name], e = this.parent; e;) t.unshift(e.name), e = e.parent;
                return t.join(".")
            }
        }
    }), a.prototype.toJSON = function() {
        throw Error()
    }, a.prototype.onAdd = function(t) {
        this.parent && this.parent !== t && this.parent.remove(this), this.parent = t, this.resolved = !1;
        var e = t.root;
        e instanceof r && e._handleAdd(this)
    }, a.prototype.onRemove = function(t) {
        var e = t.root;
        e instanceof r && e._handleRemove(this), this.parent = null, this.resolved = !1
    }, a.prototype.resolve = function() {
        return this.resolved || this.root instanceof r && (this.resolved = !0), this
    }, a.prototype.getOption = function(t) {
        if (this.options) return this.options[t]
    }, a.prototype.setOption = function(t, e, i) {
        return i && this.options && void 0 !== this.options[t] || ((this.options || (this.options = {}))[t] = e), this
    }, a.prototype.setOptions = function(t, e) {
        if (t) for (var i = Object.keys(t), r = 0; r < i.length; ++r) this.setOption(i[r], t[i[r]], e);
        return this
    }, a.prototype.toString = function() {
        var t = this.constructor.className,
            e = this.fullName;
        return e.length ? t + " " + e : t
    }, a._configure = function(t) {
        r = t
    }
},
205: function(t, e, i) {
    "use strict";
    var r, n, a = t.exports = i(208),
        o = i(243);
    a.codegen = i(452), a.fetch = i(453), a.path = i(454), a.fs = a.inquire("fs"), a.toArray = function(t) {
        if (t) {
            for (var e = Object.keys(t), i = new Array(e.length), r = 0; r < e.length;) i[r] = t[e[r++]];
            return i
        }
        return []
    }, a.toObject = function(t) {
        for (var e = {}, i = 0; i < t.length;) {
            var r = t[i++],
                n = t[i++];
            void 0 !== n && (e[r] = n)
        }
        return e
    };
    var s = /\\/g,
        h = /"/g;
    a.isReserved = function(t) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
    }, a.safeProp = function(t) {
        return !/^[$\w_]+$/.test(t) || a.isReserved(t) ? '["' + t.replace(s, "\\\\").replace(h, '\\"') + '"]' : "." + t
    }, a.ucFirst = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1)
    };
    var l = /_([a-z])/g;
    a.camelCase = function(t) {
        return t.substring(0, 1) + t.substring(1).replace(l, (function(t, e) {
            return e.toUpperCase()
        }))
    }, a.compareFieldsById = function(t, e) {
        return t.id - e.id
    }, a.decorateType = function(t, e) {
        if (t.$type) return e && t.$type.name !== e && (a.decorateRoot.remove(t.$type), t.$type.name = e, a.decorateRoot.add(t.$type)), t.$type;
        r || (r = i(222));
        var n = new r(e || t.name);
        return a.decorateRoot.add(n), n.ctor = t, Object.defineProperty(t, "$type", {
            value: n,
            enumerable: !1
        }), Object.defineProperty(t.prototype, "$type", {
            value: n,
            enumerable: !1
        }), n
    };
    var c = 0;
    a.decorateEnum = function(t) {
        if (t.$type) return t.$type;
        n || (n = i(207));
        var e = new n("Enum" + c++, t);
        return a.decorateRoot.add(e), Object.defineProperty(t, "$type", {
            value: e,
            enumerable: !1
        }), e
    }, Object.defineProperty(a, "decorateRoot", {
        get: function() {
            return o.decorated || (o.decorated = new(i(227)))
        }
    })
},
205: function(t, e, i) {
    "use strict";
    var r, n, a = t.exports = i(208),
        o = i(243);
    a.codegen = i(452), a.fetch = i(453), a.path = i(454), a.fs = a.inquire("fs"), a.toArray = function(t) {
        if (t) {
            for (var e = Object.keys(t), i = new Array(e.length), r = 0; r < e.length;) i[r] = t[e[r++]];
            return i
        }
        return []
    }, a.toObject = function(t) {
        for (var e = {}, i = 0; i < t.length;) {
            var r = t[i++],
                n = t[i++];
            void 0 !== n && (e[r] = n)
        }
        return e
    };
    var s = /\\/g,
        h = /"/g;
    a.isReserved = function(t) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
    }, a.safeProp = function(t) {
        return !/^[$\w_]+$/.test(t) || a.isReserved(t) ? '["' + t.replace(s, "\\\\").replace(h, '\\"') + '"]' : "." + t
    }, a.ucFirst = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1)
    };
    var l = /_([a-z])/g;
    a.camelCase = function(t) {
        return t.substring(0, 1) + t.substring(1).replace(l, (function(t, e) {
            return e.toUpperCase()
        }))
    }, a.compareFieldsById = function(t, e) {
        return t.id - e.id
    }, a.decorateType = function(t, e) {
        if (t.$type) return e && t.$type.name !== e && (a.decorateRoot.remove(t.$type), t.$type.name = e, a.decorateRoot.add(t.$type)), t.$type;
        r || (r = i(222));
        var n = new r(e || t.name);
        return a.decorateRoot.add(n), n.ctor = t, Object.defineProperty(t, "$type", {
            value: n,
            enumerable: !1
        }), Object.defineProperty(t.prototype, "$type", {
            value: n,
            enumerable: !1
        }), n
    };
    var c = 0;
    a.decorateEnum = function(t) {
        if (t.$type) return t.$type;
        n || (n = i(207));
        var e = new n("Enum" + c++, t);
        return a.decorateRoot.add(e), Object.defineProperty(t, "$type", {
            value: e,
            enumerable: !1
        }), e
    }, Object.defineProperty(a, "decorateRoot", {
        get: function() {
            return o.decorated || (o.decorated = new(i(227)))
        }
    })
},
242: function(t, e, i) {
    "use strict";
    e.Service = i(451)
},
226: function(t, e, i) {
    "use strict";
    t.exports = n;
    var r = i(208);

    function n(t) {
        if (t) for (var e = Object.keys(t), i = 0; i < e.length; ++i) this[e[i]] = t[e[i]]
    }
    n.create = function(t) {
        return this.$type.create(t)
    }, n.encode = function(t, e) {
        return this.$type.encode(t, e)
    }, n.encodeDelimited = function(t, e) {
        return this.$type.encodeDelimited(t, e)
    }, n.decode = function(t) {
        return this.$type.decode(t)
    }, n.decodeDelimited = function(t) {
        return this.$type.decodeDelimited(t)
    }, n.verify = function(t) {
        return this.$type.verify(t)
    }, n.fromObject = function(t) {
        return this.$type.fromObject(t)
    }, n.toObject = function(t, e) {
        return this.$type.toObject(t, e)
    }, n.prototype.toJSON = function() {
        return this.$type.toObject(this, r.toJSONOptions)
    }
},
208: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var n = e;

    function a(t, e, i) {
        for (var r = Object.keys(e), n = 0; n < r.length; ++n) void 0 !== t[r[n]] && i || (t[r[n]] = e[r[n]]);
        return t
    }
    function o(t) {
        function e(t, i) {
            if (!(this instanceof e)) return new e(t, i);
            Object.defineProperty(this, "message", {
                get: function() {
                    return t
                }
            }), Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {
                value: (new Error).stack || ""
            }), i && a(this, i)
        }
        return (e.prototype = Object.create(Error.prototype)).constructor = e, Object.defineProperty(e.prototype, "name", {
            get: function() {
                return t
            }
        }), e.prototype.toString = function() {
            return this.name + ": " + this.message
        }, e
    }
    n.asPromise = i(240), n.base64 = i(443), n.EventEmitter = i(444), n.float = i(445), n.inquire = i(241), n.utf8 = i(446), n.pool = i(447), n.LongBits = i(448), n.global = "undefined" != typeof window && window || "undefined" != typeof global && global || "undefined" != typeof self && self || this, n.emptyArray = Object.freeze ? Object.freeze([]) : [], n.emptyObject = Object.freeze ? Object.freeze({}) : {}, n.isNode = Boolean(n.global.process && n.global.process.versions && n.global.process.versions.node), n.isInteger = Number.isInteger || function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }, n.isString = function(t) {
        return "string" == typeof t || t instanceof String
    }, n.isObject = function(t) {
        return t && "object" === r(t)
    }, n.isset = n.isSet = function(t, e) {
        var i = t[e];
        return !(null == i || !t.hasOwnProperty(e)) && ("object" !== r(i) || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0)
    }, n.Buffer = function() {
        try {
            var t = n.inquire("buffer").Buffer;
            return t.prototype.utf8Write ? t : null
        } catch (t) {
            return null
        }
    }(), n._Buffer_from = null, n._Buffer_allocUnsafe = null, n.newBuffer = function(t) {
        return "number" == typeof t ? n.Buffer ? n._Buffer_allocUnsafe(t) : new n.Array(t) : n.Buffer ? n._Buffer_from(t) : "undefined" == typeof Uint8Array ? t : new Uint8Array(t)
    }, n.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, n.Long = n.global.dcodeIO && n.global.dcodeIO.Long || n.global.Long || n.inquire("long"), n.key2Re = /^true|false|0|1$/, n.key32Re = /^-?(?:0|[1-9][0-9]*)$/, n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, n.longToHash = function(t) {
        return t ? n.LongBits.from(t).toHash() : n.LongBits.zeroHash
    }, n.longFromHash = function(t, e) {
        var i = n.LongBits.fromHash(t);
        return n.Long ? n.Long.fromBits(i.lo, i.hi, e) : i.toNumber(Boolean(e))
    }, n.merge = a, n.lcFirst = function(t) {
        return t.charAt(0).toLowerCase() + t.substring(1)
    }, n.newError = o, n.ProtocolError = o("ProtocolError"), n.oneOfGetter = function(t) {
        for (var e = {}, i = 0; i < t.length; ++i) e[t[i]] = 1;
        return function() {
            for (var t = Object.keys(this), i = t.length - 1; i > -1; --i) if (1 === e[t[i]] && void 0 !== this[t[i]] && null !== this[t[i]]) return t[i]
        }
    }, n.oneOfSetter = function(t) {
        return function(e) {
            for (var i = 0; i < t.length; ++i) t[i] !== e && delete this[t[i]]
        }
    }, n.toJSONOptions = {
        longs: String,
        enums: String,
        bytes: String,
        json: !0
    }, n._configure = function() {
        var t = n.Buffer;
        t ? (n._Buffer_from = t.from !== Uint8Array.from && t.from || function(e, i) {
            return new t(e, i)
        }, n._Buffer_allocUnsafe = t.allocUnsafe || function(e) {
            return new t(e)
        }) : n._Buffer_from = n._Buffer_allocUnsafe = null
    }
},
221: function(t, e, i) {
    "use strict";
    t.exports = h;
    var r, n = i(208),
        a = n.LongBits,
        o = n.utf8;

    function s(t, e) {
        return RangeError("index out of range: " + t.pos + " + " + (e || 1) + " > " + t.len)
    }
    function h(t) {
        this.buf = t,
        this.pos = 0, this.len = t.length
    }
    var l, c = "undefined" != typeof Uint8Array ? function(t) {
            if (t instanceof Uint8Array || Array.isArray(t)) return new h(t);
            throw Error("illegal buffer")
        } : function(t) {
            if (Array.isArray(t)) return new h(t);
            throw Error("illegal buffer")
        };

    function u() {
        var t = new a(0, 0),
            e = 0;
        if (!(this.len - this.pos > 4)) {
            for (; e < 3; ++e) {
                if (this.pos >= this.len) throw s(this);
                if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t
            }
            return t.lo = (t.lo | (127 & this.buf[this.pos++]) << 7 * e) >>> 0, t
        }
        for (; e < 4; ++e) if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t;
        if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 28) >>> 0, t.hi = (t.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return t;
        if (e = 0, this.len - this.pos > 4) {
            for (; e < 5; ++e) if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
        } else for (; e < 5; ++e) {
            if (this.pos >= this.len) throw s(this);
            if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
        }
        throw Error("invalid varint encoding")
    }
    function p(t, e) {
        return (t[e - 4] | t[e - 3] << 8 | t[e - 2] << 16 | t[e - 1] << 24) >>> 0
    }
    function d() {
        if (this.pos + 8 > this.len) throw s(this, 8);
        return new a(p(this.buf, this.pos += 4), p(this.buf, this.pos += 4))
    }
    h.create = n.Buffer ? function(t) {
        return (h.create = function(t) {
            return n.Buffer.isBuffer(t) ? new r(t) : c(t)
        })(t)
    } : c, h.prototype._slice = n.Array.prototype.subarray || n.Array.prototype.slice, h.prototype.uint32 = (l = 4294967295, function() {
        if (l = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return l;
        if (l = (l | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return l;
        if (l = (l | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return l;
        if (l = (l | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return l;
        if (l = (l | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return l;
        if ((this.pos += 5) > this.len) throw this.pos = this.len, s(this, 10);
        return l
    }), h.prototype.int32 = function() {
        return 0 | this.uint32()
    }, h.prototype.sint32 = function() {
        var t = this.uint32();
        return t >>> 1 ^ -(1 & t) | 0
    }, h.prototype.bool = function() {
        return 0 !== this.uint32()
    }, h.prototype.fixed32 = function() {
        if (this.pos + 4 > this.len) throw s(this, 4);
        return p(this.buf, this.pos += 4)
    }, h.prototype.sfixed32 = function() {
        if (this.pos + 4 > this.len) throw s(this, 4);
        return 0 | p(this.buf, this.pos += 4)
    }, h.prototype.float = function() {
        if (this.pos + 4 > this.len) throw s(this, 4);
        var t = n.float.readFloatLE(this.buf, this.pos);
        return this.pos += 4, t
    }, h.prototype.double = function() {
        if (this.pos + 8 > this.len) throw s(this, 4);
        var t = n.float.readDoubleLE(this.buf, this.pos);
        return this.pos += 8, t
    }, h.prototype.bytes = function() {
        var t = this.uint32(),
            e = this.pos,
            i = this.pos + t;
        if (i > this.len) throw s(this, t);
        return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(e, i) : e === i ? new this.buf.constructor(0) : this._slice.call(this.buf, e, i)
    }, h.prototype.string = function() {
        var t = this.bytes();
        return o.read(t, 0, t.length)
    }, h.prototype.skip = function(t) {
        if ("number" == typeof t) {
            if (this.pos + t > this.len) throw s(this, t);
            this.pos += t
        } else do {
            if (this.pos >= this.len) throw s(this)
        } while (128 & this.buf[this.pos++]);
        return this
    }, h.prototype.skipType = function(t) {
        switch (t) {
            case 0:
                this.skip();
                break;
            case 1:
                this.skip(8);
                break;
            case 2:
                this.skip(this.uint32());
                break;
            case 3:
                for (; 4 != (t = 7 & this.uint32());) this.skipType(t);
                break;
            case 5:
                this.skip(4);
                break;
            default:
                throw Error("invalid wire type " + t + " at offset " + this.pos)
        }
        return this
    }, h._configure = function(t) {
        r = t;
        var e = n.Long ? "toLong" : "toNumber";
        n.merge(h.prototype, {
            int64: function() {
                return u.call(this)[e](!1)
            },
            uint64: function() {
                return u.call(this)[e](!0)
            },
            sint64: function() {
                return u.call(this).zzDecode()[e](!1)
            },
            fixed64: function() {
                return d.call(this)[e](!0)
            },
            sfixed64: function() {
                return d.call(this)[e](!1)
            }
        })
    }
},
220: function(t, e, i) {
    "use strict";
    t.exports = u;
    var r, n = i(208),
        a = n.LongBits,
        o = n.base64,
        s = n.utf8;

    function h(t, e, i) {
        this.fn = t, this.len = e, this.next = void 0, this.val = i
    }
    function l() {}
    function c(t) {
        this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states
    }
    function u() {
        this.len = 0, this.head = new h(l, 0, 0), this.tail = this.head, this.states = null
    }
    function p(t, e, i) {
        e[i] = 255 & t
    }
    function d(t, e) {
        this.len = t, this.next = void 0, this.val = e
    }
    function f(t, e, i) {
        for (; t.hi;) e[i++] = 127 & t.lo | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
        for (; t.lo > 127;) e[i++] = 127 & t.lo | 128, t.lo = t.lo >>> 7;
        e[i++] = t.lo
    }
    function m(t, e, i) {
        e[i] = 255 & t, e[i + 1] = t >>> 8 & 255, e[i + 2] = t >>> 16 & 255, e[i + 3] = t >>> 24
    }
    u.create = n.Buffer ? function() {
        return (u.create = function() {
            return new r
        })()
    } : function() {
        return new u
    }, u.alloc = function(t) {
        return new n.Array(t)
    }, n.Array !== Array && (u.alloc = n.pool(u.alloc, n.Array.prototype.subarray)), u.prototype._push = function(t, e, i) {
        return this.tail = this.tail.next = new h(t, e, i), this.len += e, this
    }, d.prototype = Object.create(h.prototype), d.prototype.fn = function(t, e, i) {
        for (; t > 127;) e[i++] = 127 & t | 128, t >>>= 7;
        e[i] = t
    }, u.prototype.uint32 = function(t) {
        return this.len += (this.tail = this.tail.next = new d((t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5, t)).len, this
    }, u.prototype.int32 = function(t) {
        return t < 0 ? this._push(f, 10, a.fromNumber(t)) : this.uint32(t)
    }, u.prototype.sint32 = function(t) {
        return this.uint32((t << 1 ^ t >> 31) >>> 0)
    }, u.prototype.uint64 = function(t) {
        var e = a.from(t);
        return this._push(f, e.length(), e)
    }, u.prototype.int64 = u.prototype.uint64, u.prototype.sint64 = function(t) {
        var e = a.from(t).zzEncode();
        return this._push(f, e.length(), e)
    }, u.prototype.bool = function(t) {
        return this._push(p, 1, t ? 1 : 0)
    }, u.prototype.fixed32 = function(t) {
        return this._push(m, 4, t >>> 0)
    }, u.prototype.sfixed32 = u.prototype.fixed32, u.prototype.fixed64 = function(t) {
        var e = a.from(t);
        return this._push(m, 4, e.lo)._push(m, 4, e.hi)
    }, u.prototype.sfixed64 = u.prototype.fixed64, u.prototype.float = function(t) {
        return this._push(n.float.writeFloatLE, 4, t)
    }, u.prototype.double = function(t) {
        return this._push(n.float.writeDoubleLE, 8, t)
    };
    var g = n.Array.prototype.set ? function(t, e, i) {
            e.set(t, i)
        } : function(t, e, i) {
            for (var r = 0; r < t.length; ++r) e[i + r] = t[r]
        };
    u.prototype.bytes = function(t) {
        var e = t.length >>> 0;
        if (!e) return this._push(p, 1, 0);
        if (n.isString(t)) {
            var i = u.alloc(e = o.length(t));
            o.decode(t, i, 0), t = i
        }
        return this.uint32(e)._push(g, e, t)
    }, u.prototype.string = function(t) {
        var e = s.length(t);
        return e ? this.uint32(e)._push(s.write, e, t) : this._push(p, 1, 0)
    }, u.prototype.fork = function() {
        return this.states = new c(this), this.head = this.tail = new h(l, 0, 0), this.len = 0, this
    }, u.prototype.reset = function() {
        return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new h(l, 0, 0), this.len = 0), this
    }, u.prototype.ldelim = function() {
        var t = this.head,
            e = this.tail,
            i = this.len;
        return this.reset().uint32(i), i && (this.tail.next = t.next, this.tail = e, this.len += i), this
    }, u.prototype.finish = function() {
        for (var t = this.head.next, e = this.constructor.alloc(this.len), i = 0; t;) t.fn(t.val, e, i), i += t.len, t = t.next;
        return e
    }, u._configure = function(t) {
        r = t
    }
},
205: function(t, e, i) {
    "use strict";
    var r, n, a = t.exports = i(208),
        o = i(243);
    a.codegen = i(452), a.fetch = i(453), a.path = i(454), a.fs = a.inquire("fs"), a.toArray = function(t) {
        if (t) {
            for (var e = Object.keys(t), i = new Array(e.length), r = 0; r < e.length;) i[r] = t[e[r++]];
            return i
        }
        return []
    }, a.toObject = function(t) {
        for (var e = {}, i = 0; i < t.length;) {
            var r = t[i++],
                n = t[i++];
            void 0 !== n && (e[r] = n)
        }
        return e
    };
    var s = /\\/g,
        h = /"/g;
    a.isReserved = function(t) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
    }, a.safeProp = function(t) {
        return !/^[$\w_]+$/.test(t) || a.isReserved(t) ? '["' + t.replace(s, "\\\\").replace(h, '\\"') + '"]' : "." + t
    }, a.ucFirst = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1)
    };
    var l = /_([a-z])/g;
    a.camelCase = function(t) {
        return t.substring(0, 1) + t.substring(1).replace(l, (function(t, e) {
            return e.toUpperCase()
        }))
    }, a.compareFieldsById = function(t, e) {
        return t.id - e.id
    }, a.decorateType = function(t, e) {
        if (t.$type) return e && t.$type.name !== e && (a.decorateRoot.remove(t.$type), t.$type.name = e, a.decorateRoot.add(t.$type)), t.$type;
        r || (r = i(222));
        var n = new r(e || t.name);
        return a.decorateRoot.add(n), n.ctor = t, Object.defineProperty(t, "$type", {
            value: n,
            enumerable: !1
        }), Object.defineProperty(t.prototype, "$type", {
            value: n,
            enumerable: !1
        }), n
    };
    var c = 0;
    a.decorateEnum = function(t) {
        if (t.$type) return t.$type;
        n || (n = i(207));
        var e = new n("Enum" + c++, t);
        return a.decorateRoot.add(e), Object.defineProperty(t, "$type", {
            value: e,
            enumerable: !1
        }), e
    }, Object.defineProperty(a, "decorateRoot", {
        get: function() {
            return o.decorated || (o.decorated = new(i(227)))
        }
    })
},
244: function(t, e, i) {
    "use strict";
    t.exports = function(t) {
        for (var e, i = a.codegen(["m", "w"], t.name + "$encode")("if(!w)")("w=Writer.create()"), s = t.fieldsArray.slice().sort(a.compareFieldsById), h = 0; h < s.length; ++h) {
            var l = s[h].resolve(),
                c = t._fieldsArray.indexOf(l),
                u = l.resolvedType instanceof r ? "int32" : l.type,
                p = n.basic[u];
            e = "m" + a.safeProp(l.name), l.map ? (i("if(%s!=null&&m.hasOwnProperty(%j)){", e, l.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", e)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (l.id << 3 | 2) >>> 0, 8 | n.mapKey[l.keyType], l.keyType), void 0 === p ? i("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", c, e) : i(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | p, u, e), i("}")("}")) : l.repeated ? (i("if(%s!=null&&%s.length){", e, e), l.packed && void 0 !== n.packed[u] ? i("w.uint32(%i).fork()", (l.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", e)("w.%s(%s[i])", u, e)("w.ldelim()") : (i("for(var i=0;i<%s.length;++i)", e), void 0 === p ? o(i, l, c, e + "[i]") : i("w.uint32(%i).%s(%s[i])", (l.id << 3 | p) >>> 0, u, e)), i("}")) : (l.optional && i("if(%s!=null&&m.hasOwnProperty(%j))", e, l.name), void 0 === p ? o(i, l, c, e) : i("w.uint32(%i).%s(%s)", (l.id << 3 | p) >>> 0, u, e))
        }
        return i("return w")
    };
    var r = i(207),
        n = i(213),
        a = i(205);

    function o(t, e, i, r) {
        return e.resolvedType.group ? t("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", i, r, (e.id << 3 | 3) >>> 0, (e.id << 3 | 4) >>> 0) : t("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", i, r, (e.id << 3 | 2) >>> 0)
    }
},
245: function(t, e, i) {
    "use strict";
    t.exports = function(t) {
        var e = a.codegen(["r", "l"], t.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (t.fieldsArray.filter((function(t) {
            return t.map
        })).length ? ",k" : ""))("while(r.pos<c){")("var t=r.uint32()");
        t.group && e("if((t&7)===4)")("break");
        e("switch(t>>>3){");
        for (var i = 0; i < t.fieldsArray.length; ++i) {
            var s = t._fieldsArray[i].resolve(),
                h = s.resolvedType instanceof r ? "int32" : s.type,
                l = "m" + a.safeProp(s.name);
            e("case %i:", s.id), s.map ? (e("r.skip().pos++")("if(%s===util.emptyObject)", l)("%s={}", l)("k=r.%s()", s.keyType)("r.pos++"), void 0 !== n.long[s.keyType] ? void 0 === n.basic[h] ? e('%s[typeof k==="object"?util.longToHash(k):k]=types[%i].decode(r,r.uint32())', l, i) : e('%s[typeof k==="object"?util.longToHash(k):k]=r.%s()', l, h) : void 0 === n.basic[h] ? e("%s[k]=types[%i].decode(r,r.uint32())", l, i) : e("%s[k]=r.%s()", l, h)) : s.repeated ? (e("if(!(%s&&%s.length))", l, l)("%s=[]", l), void 0 !== n.packed[h] && e("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", l, h)("}else"), void 0 === n.basic[h] ? e(s.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", l, i) : e("%s.push(r.%s())", l, h)) : void 0 === n.basic[h] ? e(s.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", l, i) : e("%s=r.%s()", l, h), e("break")
        }
        for (e("default:")("r.skipType(t&7)")("break")("}")("}"), i = 0; i < t._fieldsArray.length; ++i) {
            var c = t._fieldsArray[i];
            c.required && e("if(!m.hasOwnProperty(%j))", c.name)("throw util.ProtocolError(%j,{instance:m})", o(c))
        }
        return e("return m")
    };
    var r = i(207),
        n = i(213),
        a = i(205);

    function o(t) {
        return "missing required '" + t.name + "'"
    }
},
246: function(t, e, i) {
    "use strict";
    t.exports = function(t) {
        var e = n.codegen(["m"], t.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"),
            i = t.oneofsArray,
            r = {};
        i.length && e("var p={}");
        for (var h = 0; h < t.fieldsArray.length; ++h) {
            var l = t._fieldsArray[h].resolve(),
                c = "m" + n.safeProp(l.name);
            if (l.optional && e("if(%s!=null&&m.hasOwnProperty(%j)){", c, l.name), l.map) e("if(!util.isObject(%s))", c)("return%j", a(l, "object"))("var k=Object.keys(%s)", c)("for(var i=0;i<k.length;++i){"), s(e, l, "k[i]"), o(e, l, h, c + "[k[i]]")("}");
            else if (l.repeated) e("if(!Array.isArray(%s))", c)("return%j", a(l, "array"))("for(var i=0;i<%s.length;++i){", c), o(e, l, h, c + "[i]")("}");
            else {
                if (l.partOf) {
                    var u = n.safeProp(l.partOf.name);
                    1 === r[l.partOf.name] && e("if(p%s===1)", u)("return%j", l.partOf.name + ": multiple values"), r[l.partOf.name] = 1, e("p%s=1", u)
                }
                o(e, l, h, c)
            }
            l.optional && e("}")
        }
        return e("return null")
    };
    var r = i(207),
        n = i(205);

    function a(t, e) {
        return t.name + ": " + e + (t.repeated && "array" !== e ? "[]" : t.map && "object" !== e ? "{k:" + t.keyType + "}" : "") + " expected"
    }
    function o(t, e, i, n) {
        if (e.resolvedType) if (e.resolvedType instanceof r) {
            t("switch(%s){", n)("default:")("return%j", a(e, "enum value"));
            for (var o = Object.keys(e.resolvedType.values), s = 0; s < o.length; ++s) t("case %i:", e.resolvedType.values[o[s]]);
            t("break")("}")
        } else t("{")("var e=types[%i].verify(%s);", i, n)("if(e)")("return%j+e", e.name + ".")("}");
        else switch (e.type) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
                t("if(!util.isInteger(%s))", n)("return%j", a(e, "integer"));
                break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
                t("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", n, n, n, n)("return%j", a(e, "integer|Long"));
                break;
            case "float":
            case "double":
                t('if(typeof %s!=="number")', n)("return%j", a(e, "number"));
                break;
            case "bool":
                t('if(typeof %s!=="boolean")', n)("return%j", a(e, "boolean"));
                break;
            case "string":
                t("if(!util.isString(%s))", n)("return%j", a(e, "string"));
                break;
            case "bytes":
                t('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', n, n, n)("return%j", a(e, "buffer"))
        }
        return t
    }
    function s(t, e, i) {
        switch (e.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
                t("if(!util.key32Re.test(%s))", i)("return%j", a(e, "integer key"));
                break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
                t("if(!util.key64Re.test(%s))", i)("return%j", a(e, "integer|Long key"));
                break;
            case "bool":
                t("if(!util.key2Re.test(%s))", i)("return%j", a(e, "boolean key"))
        }
        return t
    }
},
247: function(t, e, i) {
    "use strict";
    var r = e,
        n = i(207),
        a = i(205);

    function o(t, e, i, r) {
        if (e.resolvedType) if (e.resolvedType instanceof n) {
            t("switch(d%s){", r);
            for (var a = e.resolvedType.values, o = Object.keys(a), s = 0; s < o.length; ++s) e.repeated && a[o[s]] === e.typeDefault && t("default:"), t("case%j:", o[s])("case %i:", a[o[s]])("m%s=%j", r, a[o[s]])("break");
            t("}")
        } else t('if(typeof d%s!=="object")', r)("throw TypeError(%j)", e.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", r, i, r);
        else {
            var h = !1;
            switch (e.type) {
                case "double":
                case "float":
                    t("m%s=Number(d%s)", r, r);
                    break;
                case "uint32":
                case "fixed32":
                    t("m%s=d%s>>>0", r, r);
                    break;
                case "int32":
                case "sint32":
                case "sfixed32":
                    t("m%s=d%s|0", r, r);
                    break;
                case "uint64":
                    h = !0;
                case "int64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                    t("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", r, r, h)('else if(typeof d%s==="string")', r)("m%s=parseInt(d%s,10)", r, r)('else if(typeof d%s==="number")', r)("m%s=d%s", r, r)('else if(typeof d%s==="object")', r)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", r, r, r, h ? "true" : "");
                    break;
                case "bytes":
                    t('if(typeof d%s==="string")', r)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", r, r, r)("else if(d%s.length)", r)("m%s=d%s", r, r);
                    break;
                case "string":
                    t("m%s=String(d%s)", r, r);
                    break;
                case "bool":
                    t("m%s=Boolean(d%s)", r, r)
            }
        }
        return t
    }
    function s(t, e, i, r) {
        if (e.resolvedType) e.resolvedType instanceof n ? t("d%s=o.enums===String?types[%i].values[m%s]:m%s", r, i, r, r) : t("d%s=types[%i].toObject(m%s,o)", r, i, r);
        else {
            var a = !1;
            switch (e.type) {
                case "double":
                case "float":
                    t("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", r, r, r, r);
                    break;
                case "uint64":
                    a = !0;
                case "int64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                    t('if(typeof m%s==="number")', r)("d%s=o.longs===String?String(m%s):m%s", r, r, r)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", r, r, r, r, a ? "true" : "", r);
                    break;
                case "bytes":
                    t("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", r, r, r, r, r);
                    break;
                default:
                    t("d%s=m%s", r, r)
            }
        }
        return t
    }
    r.fromObject = function(t) {
        var e = t.fieldsArray,
            i = a.codegen(["d"], t.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
        if (!e.length) return i("return new this.ctor");
        i("var m=new this.ctor");
        for (var r = 0; r < e.length; ++r) {
            var s = e[r].resolve(),
                h = a.safeProp(s.name);
            s.map ? (i("if(d%s){", h)('if(typeof d%s!=="object")', h)("throw TypeError(%j)", s.fullName + ": object expected")("m%s={}", h)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", h), o(i, s, r, h + "[ks[i]]")("}")("}")) : s.repeated ? (i("if(d%s){", h)("if(!Array.isArray(d%s))", h)("throw TypeError(%j)", s.fullName + ": array expected")("m%s=[]", h)("for(var i=0;i<d%s.length;++i){", h), o(i, s, r, h + "[i]")("}")("}")) : (s.resolvedType instanceof n || i("if(d%s!=null){", h), o(i, s, r, h), s.resolvedType instanceof n || i("}"))
        }
        return i("return m")
    }, r.toObject = function(t) {
        var e = t.fieldsArray.slice().sort(a.compareFieldsById);
        if (!e.length) return a.codegen()("return {}");
        for (var i = a.codegen(["m", "o"], t.name + "$toObject")("if(!o)")("o={}")("var d={}"), r = [], o = [], h = [], l = 0; l < e.length; ++l) e[l].partOf || (e[l].resolve().repeated ? r : e[l].map ? o : h).push(e[l]);
        if (r.length) {
            for (i("if(o.arrays||o.defaults){"), l = 0; l < r.length; ++l) i("d%s=[]", a.safeProp(r[l].name));
            i("}")
        }
        if (o.length) {
            for (i("if(o.objects||o.defaults){"), l = 0; l < o.length; ++l) i("d%s={}", a.safeProp(o[l].name));
            i("}")
        }
        if (h.length) {
            for (i("if(o.defaults){"), l = 0; l < h.length; ++l) {
                var c = h[l],
                    u = a.safeProp(c.name);
                if (c.resolvedType instanceof n) i("d%s=o.enums===String?%j:%j", u, c.resolvedType.valuesById[c.typeDefault], c.typeDefault);
                else if (c.long) i("if(util.Long){")("var n=new util.Long(%i,%i,%j)", c.typeDefault.low, c.typeDefault.high, c.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", u)("}else")("d%s=o.longs===String?%j:%i", u, c.typeDefault.toString(), c.typeDefault.toNumber());
                else if (c.bytes) {
                    var p = "[" + Array.prototype.slice.call(c.typeDefault).join(",") + "]";
                    i("if(o.bytes===String)d%s=%j", u, String.fromCharCode.apply(String, c.typeDefault))("else{")("d%s=%s", u, p)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", u, u)("}")
                } else i("d%s=%j", u, c.typeDefault)
            }
            i("}")
        }
        var d = !1;
        for (l = 0; l < e.length; ++l) {
            c = e[l];
            var f = t._fieldsArray.indexOf(c);
            u = a.safeProp(c.name);
            c.map ? (d || (d = !0, i("var ks2")), i("if(m%s&&(ks2=Object.keys(m%s)).length){", u, u)("d%s={}", u)("for(var j=0;j<ks2.length;++j){"), s(i, c, f, u + "[ks2[j]]")("}")) : c.repeated ? (i("if(m%s&&m%s.length){", u, u)("d%s=[]", u)("for(var j=0;j<m%s.length;++j){", u), s(i, c, f, u + "[j]")("}")) : (i("if(m%s!=null&&m.hasOwnProperty(%j)){", u, c.name), s(i, c, f, u), c.partOf && i("if(o.oneofs)")("d%s=%j", a.safeProp(c.partOf.name), c.name)), i("}")
        }
        return i("return d")
    }
},
248: function(t, e, i) {
    "use strict";
    var r = e,
        n = i(226);
    r[".google.protobuf.Any"] = {
        fromObject: function(t) {
            if (t && t["@type"]) {
                var e = this.lookup(t["@type"]);
                if (e) {
                    var i = "." === t["@type"].charAt(0) ? t["@type"].substr(1) : t["@type"];
                    return this.create({
                        type_url: "/" + i,
                        value: e.encode(e.fromObject(t)).finish()
                    })
                }
            }
            return this.fromObject(t)
        },
        toObject: function(t, e) {
            if (e && e.json && t.type_url && t.value) {
                var i = t.type_url.substring(t.type_url.lastIndexOf("/") + 1),
                    r = this.lookup(i);
                r && (t = r.decode(t.value))
            }
            if (!(t instanceof this.ctor) && t instanceof n) {
                var a = t.$type.toObject(t, e);
                return a["@type"] = t.$type.fullName, a
            }
            return this.toObject(t, e)
        }
    }
},
226: function(t, e, i) {
    "use strict";
    t.exports = n;
    var r = i(208);

    function n(t) {
        if (t) for (var e = Object.keys(t), i = 0; i < e.length; ++i) this[e[i]] = t[e[i]]
    }
    n.create = function(t) {
        return this.$type.create(t)
    }, n.encode = function(t, e) {
        return this.$type.encode(t, e)
    }, n.encodeDelimited = function(t, e) {
        return this.$type.encodeDelimited(t, e)
    }, n.decode = function(t) {
        return this.$type.decode(t)
    }, n.decodeDelimited = function(t) {
        return this.$type.decodeDelimited(t)
    }, n.verify = function(t) {
        return this.$type.verify(t)
    }, n.fromObject = function(t) {
        return this.$type.fromObject(t)
    }, n.toObject = function(t, e) {
        return this.$type.toObject(t, e)
    }, n.prototype.toJSON = function() {
        return this.$type.toObject(this, r.toJSONOptions)
    }
},
210: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = c;
    var n = i(212);
    ((c.prototype = Object.create(n.prototype)).constructor = c).className = "Field";
    var a, o = i(207),
        s = i(213),
        h = i(205),
        l = /^required|optional|repeated$/;

    function c(t, e, i, r, a, o, c) {
        if (h.isObject(r) ? (c = a, o = r, r = a = void 0) : h.isObject(a) && (c = o, o = a, a = void 0), n.call(this, t, o), !h.isInteger(e) || e < 0) throw TypeError("id must be a non-negative integer");
        if (!h.isString(i)) throw TypeError("type must be a string");
        if (void 0 !== r && !l.test(r = r.toString().toLowerCase())) throw TypeError("rule must be a string rule");
        if (void 0 !== a && !h.isString(a)) throw TypeError("extend must be a string");
        this.rule = r && "optional" !== r ? r : void 0, this.type = i, this.id = e, this.extend = a || void 0, this.required = "required" === r, this.optional = !this.required, this.repeated = "repeated" === r, this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !! h.Long && void 0 !== s.long[i], this.bytes = "bytes" === i, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = c
    }
    c.fromJSON = function(t, e) {
        return new c(t, e.id, e.type, e.rule, e.extend, e.options, e.comment)
    }, Object.defineProperty(c.prototype, "packed", {
        get: function() {
            return null === this._packed && (this._packed = !1 !== this.getOption("packed")), this._packed
        }
    }), c.prototype.setOption = function(t, e, i) {
        return "packed" === t && (this._packed = null), n.prototype.setOption.call(this, t, e, i)
    }, c.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return h.toObject(["rule", "optional" !== this.rule && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", e ? this.comment : void 0])
    }, c.prototype.resolve = function() {
        if (this.resolved) return this;
        if (void 0 === (this.typeDefault = s.defaults[this.type]) && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof a ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.
        default && (this.typeDefault = this.options.
        default, this.resolvedType instanceof o && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (!0 !== this.options.packed && (void 0 === this.options.packed || !this.resolvedType || this.resolvedType instanceof o) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long) this.typeDefault = h.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)), Object.freeze && Object.freeze(this.typeDefault);
        else if (this.bytes && "string" == typeof this.typeDefault) {
            var t;
            h.base64.test(this.typeDefault) ? h.base64.decode(this.typeDefault, t = h.newBuffer(h.base64.length(this.typeDefault)), 0) : h.utf8.write(this.typeDefault, t = h.newBuffer(h.utf8.length(this.typeDefault)), 0), this.typeDefault = t
        }
        return this.map ? this.defaultValue = h.emptyObject : this.repeated ? this.defaultValue = h.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof a && (this.parent.ctor.prototype[this.name] = this.defaultValue), n.prototype.resolve.call(this)
    }, c.d = function(t, e, i, n) {
        return "function" == typeof e ? e = h.decorateType(e).name : e && "object" === r(e) && (e = h.decorateEnum(e).name),
        function(r, a) {
            h.decorateType(r.constructor).add(new c(a, t, e, i, {
                default: n
            }))
        }
    }, c._configure = function(t) {
        a = t
    }
},
215: function(t, e, i) {
    "use strict";
    t.exports = o;
    var r = i(212);
    ((o.prototype = Object.create(r.prototype)).constructor = o).className = "OneOf";
    var n = i(210),
        a = i(205);

    function o(t, e, i, n) {
        if (Array.isArray(e) || (i = e, e = void 0), r.call(this, t, i), void 0 !== e && !Array.isArray(e)) throw TypeError("fieldNames must be an Array");
        this.oneof = e || [], this.fieldsArray = [], this.comment = n
    }
    function s(t) {
        if (t.parent) for (var e = 0; e < t.fieldsArray.length; ++e) t.fieldsArray[e].parent || t.parent.add(t.fieldsArray[e])
    }
    o.fromJSON = function(t, e) {
        return new o(t, e.oneof, e.options, e.comment)
    }, o.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return a.toObject(["options", this.options, "oneof", this.oneof, "comment", e ? this.comment : void 0])
    }, o.prototype.add = function(t) {
        if (!(t instanceof n)) throw TypeError("field must be a Field");
        return t.parent && t.parent !== this.parent && t.parent.remove(t), this.oneof.push(t.name), this.fieldsArray.push(t), t.partOf = this, s(this), this
    }, o.prototype.remove = function(t) {
        if (!(t instanceof n)) throw TypeError("field must be a Field");
        var e = this.fieldsArray.indexOf(t);
        if (e < 0) throw Error(t + " is not a member of " + this);
        return this.fieldsArray.splice(e, 1), (e = this.oneof.indexOf(t.name)) > -1 && this.oneof.splice(e, 1), t.partOf = null, this
    }, o.prototype.onAdd = function(t) {
        r.prototype.onAdd.call(this, t);
        for (var e = 0; e < this.oneof.length; ++e) {
            var i = t.get(this.oneof[e]);
            i && !i.partOf && (i.partOf = this, this.fieldsArray.push(i))
        }
        s(this)
    }, o.prototype.onRemove = function(t) {
        for (var e, i = 0; i < this.fieldsArray.length; ++i)(e = this.fieldsArray[i]).parent && e.parent.remove(e);
        r.prototype.onRemove.call(this, t)
    }, o.d = function() {
        for (var t = new Array(arguments.length), e = 0; e < arguments.length;) t[e] = arguments[e++];
        return function(e, i) {
            a.decorateType(e.constructor).add(new o(i, t)), Object.defineProperty(e, i, {
                get: a.oneOfGetter(t),
                set: a.oneOfSetter(t)
            })
        }
    }
},
223: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = s;
    var n = i(210);
    ((s.prototype = Object.create(n.prototype)).constructor = s).className = "MapField";
    var a = i(213),
        o = i(205);

    function s(t, e, i, r, a, s) {
        if (n.call(this, t, e, r, void 0, void 0, a, s), !o.isString(i)) throw TypeError("keyType must be a string");
        this.keyType = i, this.resolvedKeyType = null, this.map = !0
    }
    s.fromJSON = function(t, e) {
        return new s(t, e.id, e.keyType, e.type, e.options, e.comment)
    }, s.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return o.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", e ? this.comment : void 0])
    }, s.prototype.resolve = function() {
        if (this.resolved) return this;
        if (void 0 === a.mapKey[this.keyType]) throw Error("invalid key type: " + this.keyType);
        return n.prototype.resolve.call(this)
    }, s.d = function(t, e, i) {
        return "function" == typeof i ? i = o.decorateType(i).name : i && "object" === r(i) && (i = o.decorateEnum(i).name),
        function(r, n) {
            o.decorateType(r.constructor).add(new s(n, t, e, i))
        }
    }
},
224: function(t, e, i) {
    "use strict";
    t.exports = s;
    var r = i(214);
    ((s.prototype = Object.create(r.prototype)).constructor = s).className = "Service";
    var n = i(225),
        a = i(205),
        o = i(242);

    function s(t, e) {
        r.call(this, t, e), this.methods = {}, this._methodsArray = null
    }
    function h(t) {
        return t._methodsArray = null, t
    }
    s.fromJSON = function(t, e) {
        var i = new s(t, e.options);
        if (e.methods) for (var r = Object.keys(e.methods), a = 0; a < r.length; ++a) i.add(n.fromJSON(r[a], e.methods[r[a]]));
        return e.nested && i.addJSON(e.nested), i.comment = e.comment, i
    }, s.prototype.toJSON = function(t) {
        var e = r.prototype.toJSON.call(this, t),
            i = !! t && Boolean(t.keepComments);
        return a.toObject(["options", e && e.options || void 0, "methods", r.arrayToJSON(this.methodsArray, t) || {}, "nested", e && e.nested || void 0, "comment", i ? this.comment : void 0])
    }, Object.defineProperty(s.prototype, "methodsArray", {
        get: function() {
            return this._methodsArray || (this._methodsArray = a.toArray(this.methods))
        }
    }), s.prototype.get = function(t) {
        return this.methods[t] || r.prototype.get.call(this, t)
    }, s.prototype.resolveAll = function() {
        for (var t = this.methodsArray, e = 0; e < t.length; ++e) t[e].resolve();
        return r.prototype.resolve.call(this)
    }, s.prototype.add = function(t) {
        if (this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
        return t instanceof n ? (this.methods[t.name] = t, t.parent = this, h(this)) : r.prototype.add.call(this, t)
    }, s.prototype.remove = function(t) {
        if (t instanceof n) {
            if (this.methods[t.name] !== t) throw Error(t + " is not a member of " + this);
            return delete this.methods[t.name], t.parent = null, h(this)
        }
        return r.prototype.remove.call(this, t)
    }, s.prototype.create = function(t, e, i) {
        for (var r, n = new o.Service(t, e, i), s = 0; s < this.methodsArray.length; ++s) {
            var h = a.lcFirst((r = this._methodsArray[s]).resolve().name).replace(/[^$\w_]/g, "");
            n[h] = a.codegen(["r", "c"], a.isReserved(h) ? h + "_" : h)("return this.rpcCall(m,q,s,r,c)")({
                m: r,
                q: r.resolvedRequestType.ctor,
                s: r.resolvedResponseType.ctor
            })
        }
        return n
    }
},
225: function(t, e, i) {
    "use strict";
    t.exports = a;
    var r = i(212);
    ((a.prototype = Object.create(r.prototype)).constructor = a).className = "Method";
    var n = i(205);

    function a(t, e, i, a, o, s, h, l) {
        if (n.isObject(o) ? (h = o, o = s = void 0) : n.isObject(s) && (h = s, s = void 0), void 0 !== e && !n.isString(e)) throw TypeError("type must be a string");
        if (!n.isString(i)) throw TypeError("requestType must be a string");
        if (!n.isString(a)) throw TypeError("responseType must be a string");
        r.call(this, t, h), this.type = e || "rpc", this.requestType = i, this.requestStream = !! o || void 0, this.responseType = a, this.responseStream = !! s || void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = l
    }
    a.fromJSON = function(t, e) {
        return new a(t, e.type, e.requestType, e.responseType, e.requestStream, e.responseStream, e.options, e.comment)
    }, a.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return n.toObject(["type", "rpc" !== this.type && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", e ? this.comment : void 0])
    }, a.prototype.resolve = function() {
        return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), r.prototype.resolve.call(this))
    }
},
226: function(t, e, i) {
    "use strict";
    t.exports = n;
    var r = i(208);

    function n(t) {
        if (t) for (var e = Object.keys(t), i = 0; i < e.length; ++i) this[e[i]] = t[e[i]]
    }
    n.create = function(t) {
        return this.$type.create(t)
    }, n.encode = function(t, e) {
        return this.$type.encode(t, e)
    }, n.encodeDelimited = function(t, e) {
        return this.$type.encodeDelimited(t, e)
    }, n.decode = function(t) {
        return this.$type.decode(t)
    }, n.decodeDelimited = function(t) {
        return this.$type.decodeDelimited(t)
    }, n.verify = function(t) {
        return this.$type.verify(t)
    }, n.fromObject = function(t) {
        return this.$type.fromObject(t)
    }, n.toObject = function(t, e) {
        return this.$type.toObject(t, e)
    }, n.prototype.toJSON = function() {
        return this.$type.toObject(this, r.toJSONOptions)
    }
},
248: function(t, e, i) {
    "use strict";
    var r = e,
        n = i(226);
    r[".google.protobuf.Any"] = {
        fromObject: function(t) {
            if (t && t["@type"]) {
                var e = this.lookup(t["@type"]);
                if (e) {
                    var i = "." === t["@type"].charAt(0) ? t["@type"].substr(1) : t["@type"];
                    return this.create({
                        type_url: "/" + i,
                        value: e.encode(e.fromObject(t)).finish()
                    })
                }
            }
            return this.fromObject(t)
        },
        toObject: function(t, e) {
            if (e && e.json && t.type_url && t.value) {
                var i = t.type_url.substring(t.type_url.lastIndexOf("/") + 1),
                    r = this.lookup(i);
                r && (t = r.decode(t.value))
            }
            if (!(t instanceof this.ctor) && t instanceof n) {
                var a = t.$type.toObject(t, e);
                return a["@type"] = t.$type.fullName, a
            }
            return this.toObject(t, e)
        }
    }
},
213: function(t, e, i) {
    "use strict";
    var r = e,
        n = i(205),
        a = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];

    function o(t, e) {
        var i = 0,
            r = {};
        for (e |= 0; i < t.length;) r[a[i + e]] = t[i++];
        return r
    }
    r.basic = o([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), r.defaults = o([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", n.emptyArray, null]), r.long = o([0, 0, 0, 1, 1], 7), r.mapKey = o([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), r.packed = o([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])
},
205: function(t, e, i) {
    "use strict";
    var r, n, a = t.exports = i(208),
        o = i(243);
    a.codegen = i(452), a.fetch = i(453), a.path = i(454), a.fs = a.inquire("fs"), a.toArray = function(t) {
        if (t) {
            for (var e = Object.keys(t), i = new Array(e.length), r = 0; r < e.length;) i[r] = t[e[r++]];
            return i
        }
        return []
    }, a.toObject = function(t) {
        for (var e = {}, i = 0; i < t.length;) {
            var r = t[i++],
                n = t[i++];
            void 0 !== n && (e[r] = n)
        }
        return e
    };
    var s = /\\/g,
        h = /"/g;
    a.isReserved = function(t) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
    }, a.safeProp = function(t) {
        return !/^[$\w_]+$/.test(t) || a.isReserved(t) ? '["' + t.replace(s, "\\\\").replace(h, '\\"') + '"]' : "." + t
    }, a.ucFirst = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1)
    };
    var l = /_([a-z])/g;
    a.camelCase = function(t) {
        return t.substring(0, 1) + t.substring(1).replace(l, (function(t, e) {
            return e.toUpperCase()
        }))
    }, a.compareFieldsById = function(t, e) {
        return t.id - e.id
    }, a.decorateType = function(t, e) {
        if (t.$type) return e && t.$type.name !== e && (a.decorateRoot.remove(t.$type), t.$type.name = e, a.decorateRoot.add(t.$type)), t.$type;
        r || (r = i(222));
        var n = new r(e || t.name);
        return a.decorateRoot.add(n), n.ctor = t, Object.defineProperty(t, "$type", {
            value: n,
            enumerable: !1
        }), Object.defineProperty(t.prototype, "$type", {
            value: n,
            enumerable: !1
        }), n
    };
    var c = 0;
    a.decorateEnum = function(t) {
        if (t.$type) return t.$type;
        n || (n = i(207));
        var e = new n("Enum" + c++, t);
        return a.decorateRoot.add(e), Object.defineProperty(t, "$type", {
            value: e,
            enumerable: !1
        }), e
    }, Object.defineProperty(a, "decorateRoot", {
        get: function() {
            return o.decorated || (o.decorated = new(i(227)))
        }
    })
},
249: function(t, e, i) {
    "use strict";
    t.exports = d;
    var r = /[\s{}=;:[\],'"()<>]/g,
        n = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
        a = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
        o = /^ *[*/]+ */,
        s = /^\s*\*?\/*/,
        h = /\n/g,
        l = /\s/,
        c = /\\(.?)/g,
        u = {
            0: "\0",
            r: "\r",
            n: "\n",
            t: "\t"
        };

    function p(t) {
        return t.replace(c, (function(t, e) {
            switch (e) {
                case "\\":
                case "":
                    return e;
                default:
                    return u[e] || ""
            }
        }))
    }
    function d(t, e) {
        t = t.toString();
        var i = 0,
            c = t.length,
            u = 1,
            d = null,
            f = null,
            m = 0,
            g = !1,
            v = [],
            y = null;

        function _(t) {
            return Error("illegal " + t + " (line " + u + ")")
        }
        function b(e) {
            return t.charAt(e)
        }
        function x(i, r) {
            d = t.charAt(i++), m = u, g = !1;
            var n, a = i - (e ? 2 : 3);
            do {
                if (--a < 0 || "\n" === (n = t.charAt(a))) {
                    g = !0;
                    break
                }
            } while (" " === n || "\t" === n);
            for (var l = t.substring(i, r).split(h), c = 0; c < l.length; ++c) l[c] = l[c].replace(e ? s : o, "").trim();
            f = l.join("\n").trim()
        }
        function w(e) {
            var i = M(e),
                r = t.substring(e, i);
            return /^\s*\/{1,2}/.test(r)
        }
        function M(t) {
            for (var e = t; e < c && "\n" !== b(e);) e++;
            return e
        }
        function S() {
            if (v.length > 0) return v.shift();
            if (y) return function() {
                var e = "'" === y ? a : n;
                e.lastIndex = i - 1;
                var r = e.exec(t);
                if (!r) throw _("string");
                return i = e.lastIndex, T(y), y = null, p(r[1])
            }();
            var o, s, h, d, f;
            do {
                if (i === c) return null;
                for (o = !1; l.test(h = b(i));) if ("\n" === h && ++u, ++i === c) return null;
                if ("/" === b(i)) {
                    if (++i === c) throw _("comment");
                    if ("/" === b(i)) if (e) {
                        if (d = i, f = !1, w(i)) {
                            f = !0;
                            do {
                                if ((i = M(i)) === c) break;
                                i++
                            } while (w(i))
                        } else i = Math.min(c, M(i) + 1);
                        f && x(d, i), u++, o = !0
                    } else {
                        for (f = "/" === b(d = i + 1);
                        "\n" !== b(++i);) if (i === c) return null;
                        ++i, f && x(d, i - 1), ++u, o = !0
                    } else {
                        if ("*" !== (h = b(i))) return "/";
                        d = i + 1, f = e || "*" === b(d);
                        do {
                            if ("\n" === h && ++u, ++i === c) throw _("comment");
                            s = h, h = b(i)
                        } while ("*" !== s || "/" !== h);
                        ++i, f && x(d, i - 2), o = !0
                    }
                }
            } while (o);
            var m = i;
            if (r.lastIndex = 0, !r.test(b(m++))) for (; m < c && !r.test(b(m));)++m;
            var g = t.substring(i, i = m);
            return '"' !== g && "'" !== g || (y = g), g
        }
        function T(t) {
            v.push(t)
        }
        function E() {
            if (!v.length) {
                var t = S();
                if (null === t) return null;
                T(t)
            }
            return v[0]
        }
        return Object.defineProperty({
            next: S,
            peek: E,
            push: T,
            skip: function(t, e) {
                var i = E();
                if (i === t) return S(), !0;
                if (!e) throw _("token '" + i + "', '" + t + "' expected");
                return !1
            },
            cmnt: function(t) {
                var i = null;
                return void 0 === t ? m === u - 1 && (e || "*" === d || g) && (i = f) : (m < t && E(), m !== t || g || !e && "/" !== d || (i = f)), i
            }
        }, "line", {
            get: function() {
                return u
            }
        })
    }
    d.unescape = p
},
455: function(t, e, i) {
    "use strict";
    t.exports = S, S.filename = null, S.defaults = {
        keepCase: !1
    };
    var r = i(249),
        n = i(227),
        a = i(222),
        o = i(210),
        s = i(223),
        h = i(215),
        l = i(207),
        c = i(224),
        u = i(225),
        p = i(213),
        d = i(205),
        f = /^[1-9][0-9]*$/,
        m = /^-?[1-9][0-9]*$/,
        g = /^0[x][0-9a-fA-F]+$/,
        v = /^-?0[x][0-9a-fA-F]+$/,
        y = /^0[0-7]+$/,
        _ = /^-?0[0-7]+$/,
        b = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
        x = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
        w = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
        M = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;

    function S(t, e, i) {
        e instanceof n || (i = e, e = new n), i || (i = S.defaults);
        var T, E, A, C, P, L = r(t, i.alternateCommentMode || !1),
            k = L.next,
            R = L.push,
            O = L.peek,
            D = L.skip,
            I = L.cmnt,
            N = !0,
            F = !1,
            z = e,
            B = i.keepCase ? function(t) {
                return t
            } : d.camelCase;

        function G(t, e, i) {
            var r = S.filename;
            return i || (S.filename = null), Error("illegal " + (e || "token") + " '" + t + "' (" + (r ? r + ", " : "") + "line " + L.line + ")")
        }
        function U() {
            var t, e = [];
            do {
                if ('"' !== (t = k()) && "'" !== t) throw G(t);
                e.push(k()), D(t), t = O()
            } while ('"' === t || "'" === t);
            return e.join("")
        }
        function j(t) {
            var e = k();
            switch (e) {
                case "'":
                case '"':
                    return R(e), U();
                case "true":
                case "TRUE":
                    return !0;
                case "false":
                case "FALSE":
                    return !1
            }
            try {
                return function(t, e) {
                    var i = 1;
                    "-" === t.charAt(0) && (i = -1, t = t.substring(1));
                    switch (t) {
                        case "inf":
                        case "INF":
                        case "Inf":
                            return i * (1 / 0);
                        case "nan":
                        case "NAN":
                        case "Nan":
                        case "NaN":
                            return NaN;
                        case "0":
                            return 0
                    }
                    if (f.test(t)) return i * parseInt(t, 10);
                    if (g.test(t)) return i * parseInt(t, 16);
                    if (y.test(t)) return i * parseInt(t, 8);
                    if (b.test(t)) return i * parseFloat(t);
                    throw G(t, "number", e)
                }(e, !0)
            } catch (i) {
                if (t && w.test(e)) return e;
                throw G(e, "value")
            }
        }
        function H(t, e) {
            var i, r;
            do {!e || '"' !== (i = O()) && "'" !== i ? t.push([r = V(k()), D("to", !0) ? V(k()) : r]) : t.push(U())
            } while (D(",", !0));
            D(";")
        }
        function V(t, e) {
            switch (t) {
                case "max":
                case "MAX":
                case "Max":
                    return 536870911;
                case "0":
                    return 0
            }
            if (!e && "-" === t.charAt(0)) throw G(t, "id");
            if (m.test(t)) return parseInt(t, 10);
            if (v.test(t)) return parseInt(t, 16);
            if (_.test(t)) return parseInt(t, 8);
            throw G(t, "id")
        }
        function W() {
            if (void 0 !== T) throw G("package");
            if (T = k(), !w.test(T)) throw G(T, "name");
            z = z.define(T), D(";")
        }
        function q() {
            var t, e = O();
            switch (e) {
                case "weak":
                    t = A || (A = []), k();
                    break;
                case "public":
                    k();
                default:
                    t = E || (E = [])
            }
            e = U(), D(";"), t.push(e)
        }
        function X() {
            if (D("="), C = U(), !(F = "proto3" === C) && "proto2" !== C) throw G(C, "syntax");
            D(";")
        }
        function Y(t, e) {
            switch (e) {
                case "option":
                    return K(t, e), D(";"), !0;
                case "message":
                    return function(t, e) {
                        if (!x.test(e = k())) throw G(e, "type name");
                        var i = new a(e);
                        Z(i, (function(t) {
                            if (!Y(i, t)) switch (t) {
                                case "map":
                                    ! function(t) {
                                        D("<");
                                        var e = k();
                                        if (void 0 === p.mapKey[e]) throw G(e, "type");
                                        D(",");
                                        var i = k();
                                        if (!w.test(i)) throw G(i, "type");
                                        D(">");
                                        var r = k();
                                        if (!x.test(r)) throw G(r, "name");
                                        D("=");
                                        var n = new s(B(r), V(k()), e, i);
                                        Z(n, (function(t) {
                                            if ("option" !== t) throw G(t);
                                            K(n, t), D(";")
                                        }), (function() {
                                            tt(n)
                                        })), t.add(n)
                                    }(i);
                                    break;
                                case "required":
                                case "optional":
                                case "repeated":
                                    J(i, t);
                                    break;
                                case "oneof":
                                    ! function(t, e) {
                                        if (!x.test(e = k())) throw G(e, "name");
                                        var i = new h(B(e));
                                        Z(i, (function(t) {
                                            "option" === t ? (K(i, t), D(";")) : (R(t), J(i, "optional"))
                                        })), t.add(i)
                                    }(i, t);
                                    break;
                                case "extensions":
                                    H(i.extensions || (i.extensions = []));
                                    break;
                                case "reserved":
                                    H(i.reserved || (i.reserved = []), !0);
                                    break;
                                default:
                                    if (!F || !w.test(t)) throw G(t);
                                    R(t), J(i, "optional")
                            }
                        })), t.add(i)
                    }(t, e), !0;
                case "enum":
                    return function(t, e) {
                        if (!x.test(e = k())) throw G(e, "name");
                        var i = new l(e);
                        Z(i, (function(t) {
                            switch (t) {
                                case "option":
                                    K(i, t), D(";");
                                    break;
                                case "reserved":
                                    H(i.reserved || (i.reserved = []), !0);
                                    break;
                                default:
                                    ! function(t, e) {
                                        if (!x.test(e)) throw G(e, "name");
                                        D("=");
                                        var i = V(k(), !0),
                                            r = {};
                                        Z(r, (function(t) {
                                            if ("option" !== t) throw G(t);
                                            K(r, t), D(";")
                                        }), (function() {
                                            tt(r)
                                        })), t.add(e, i, r.comment)
                                    }(i, t)
                            }
                        })), t.add(i)
                    }(t, e), !0;
                case "service":
                    return function(t, e) {
                        if (!x.test(e = k())) throw G(e, "service name");
                        var i = new c(e);
                        Z(i, (function(t) {
                            if (!Y(i, t)) {
                                if ("rpc" !== t) throw G(t);
                                ! function(t, e) {
                                    var i = e;
                                    if (!x.test(e = k())) throw G(e, "name");
                                    var r, n, a, o, s = e;
                                    D("("), D("stream", !0) && (n = !0);
                                    if (!w.test(e = k())) throw G(e);
                                    r = e, D(")"), D("returns"), D("("), D("stream", !0) && (o = !0);
                                    if (!w.test(e = k())) throw G(e);
                                    a = e, D(")");
                                    var h = new u(s, i, r, a, n, o);
                                    Z(h, (function(t) {
                                        if ("option" !== t) throw G(t);
                                        K(h, t), D(";")
                                    })), t.add(h)
                                }(i, t)
                            }
                        })), t.add(i)
                    }(t, e), !0;
                case "extend":
                    return function(t, e) {
                        if (!w.test(e = k())) throw G(e, "reference");
                        var i = e;
                        Z(null, (function(e) {
                            switch (e) {
                                case "required":
                                case "repeated":
                                case "optional":
                                    J(t, e, i);
                                    break;
                                default:
                                    if (!F || !w.test(e)) throw G(e);
                                    R(e), J(t, "optional", i)
                            }
                        }))
                    }(t, e), !0
            }
            return !1
        }
        function Z(t, e, i) {
            var r = L.line;
            if (t && (t.comment = I(), t.filename = S.filename), D("{", !0)) {
                for (var n;
                "}" !== (n = k());) e(n);
                D(";", !0)
            } else i && i(), D(";"), t && "string" != typeof t.comment && (t.comment = I(r))
        }
        function J(t, e, i) {
            var r = k();
            if ("group" !== r) {
                if (!w.test(r)) throw G(r, "type");
                var n = k();
                if (!x.test(n)) throw G(n, "name");
                n = B(n), D("=");
                var s = new o(n, V(k()), r, e, i);
                Z(s, (function(t) {
                    if ("option" !== t) throw G(t);
                    K(s, t), D(";")
                }), (function() {
                    tt(s)
                })), t.add(s), F || !s.repeated || void 0 === p.packed[r] && void 0 !== p.basic[r] || s.setOption("packed", !1, !0)
            } else ! function(t, e) {
                var i = k();
                if (!x.test(i)) throw G(i, "name");
                var r = d.lcFirst(i);
                i === r && (i = d.ucFirst(i));
                D("=");
                var n = V(k()),
                    s = new a(i);
                s.group = !0;
                var h = new o(r, n, i, e);
                h.filename = S.filename, Z(s, (function(t) {
                    switch (t) {
                        case "option":
                            K(s, t), D(";");
                            break;
                        case "required":
                        case "optional":
                        case "repeated":
                            J(s, t);
                            break;
                        default:
                            throw G(t)
                    }
                })), t.add(s).add(h)
            }(t, e)
        }
        function K(t, e) {
            var i = D("(", !0);
            if (!w.test(e = k())) throw G(e, "name");
            var r = e;
            i && (D(")"), r = "(" + r + ")", e = O(), M.test(e) && (r += e, k())), D("="), Q(t, r)
        }
        function Q(t, e) {
            if (D("{", !0)) do {
                if (!x.test(P = k())) throw G(P, "name");
                "{" === O() ? Q(t, e + "." + P) : (D(":"), "{" === O() ? Q(t, e + "." + P) : $(t, e + "." + P, j(!0))), D(",", !0)
            } while (!D("}", !0));
            else $(t, e, j(!0))
        }

        function $(t, e, i) {
            t.setOption && t.setOption(e, i)
        }
        function tt(t) {
            if (D("[", !0)) {
                do {
                    K(t, "option")
                } while (D(",", !0));
                D("]")
            }
            return t
        }
        for (; null !== (P = k());) switch (P) {
            case "package":
                if (!N) throw G(P);
                W();
                break;
            case "import":
                if (!N) throw G(P);
                q();
                break;
            case "syntax":
                if (!N) throw G(P);
                X();
                break;
            case "option":
                if (!N) throw G(P);
                K(z, P), D(";");
                break;
            default:
                if (Y(z, P)) {
                    N = !1;
                    continue
                }
                throw G(P)
        }
        return S.filename = null, {
            package: T,
            imports: E,
            weakImports: A,
            syntax: C,
            root: e
        }
    }
},
249: function(t, e, i) {
    "use strict";
    t.exports = d;
    var r = /[\s{}=;:[\],'"()<>]/g,
        n = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
        a = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
        o = /^ *[*/]+ */,
        s = /^\s*\*?\/*/,
        h = /\n/g,
        l = /\s/,
        c = /\\(.?)/g,
        u = {
            0: "\0",
            r: "\r",
            n: "\n",
            t: "\t"
        };

    function p(t) {
        return t.replace(c, (function(t, e) {
            switch (e) {
                case "\\":
                case "":
                    return e;
                default:
                    return u[e] || ""
            }
        }))
    }
    function d(t, e) {
        t = t.toString();
        var i = 0,
            c = t.length,
            u = 1,
            d = null,
            f = null,
            m = 0,
            g = !1,
            v = [],
            y = null;

        function _(t) {
            return Error("illegal " + t + " (line " + u + ")")
        }
        function b(e) {
            return t.charAt(e)
        }
        function x(i, r) {
            d = t.charAt(i++), m = u, g = !1;
            var n, a = i - (e ? 2 : 3);
            do {
                if (--a < 0 || "\n" === (n = t.charAt(a))) {
                    g = !0;
                    break
                }
            } while (" " === n || "\t" === n);
            for (var l = t.substring(i, r).split(h), c = 0; c < l.length; ++c) l[c] = l[c].replace(e ? s : o, "").trim();
            f = l.join("\n").trim()
        }
        function w(e) {
            var i = M(e),
                r = t.substring(e, i);
            return /^\s*\/{1,2}/.test(r)
        }
        function M(t) {
            for (var e = t; e < c && "\n" !== b(e);) e++;
            return e
        }
        function S() {
            if (v.length > 0) return v.shift();
            if (y) return function() {
                var e = "'" === y ? a : n;
                e.lastIndex = i - 1;
                var r = e.exec(t);
                if (!r) throw _("string");
                return i = e.lastIndex, T(y), y = null, p(r[1])
            }();
            var o, s, h, d, f;
            do {
                if (i === c) return null;
                for (o = !1; l.test(h = b(i));) if ("\n" === h && ++u, ++i === c) return null;
                if ("/" === b(i)) {
                    if (++i === c) throw _("comment");
                    if ("/" === b(i)) if (e) {
                        if (d = i, f = !1, w(i)) {
                            f = !0;
                            do {
                                if ((i = M(i)) === c) break;
                                i++
                            } while (w(i))
                        } else i = Math.min(c, M(i) + 1);
                        f && x(d, i), u++, o = !0
                    } else {
                        for (f = "/" === b(d = i + 1);
                        "\n" !== b(++i);) if (i === c) return null;
                        ++i, f && x(d, i - 1), ++u, o = !0
                    } else {
                        if ("*" !== (h = b(i))) return "/";
                        d = i + 1, f = e || "*" === b(d);
                        do {
                            if ("\n" === h && ++u, ++i === c) throw _("comment");
                            s = h, h = b(i)
                        } while ("*" !== s || "/" !== h);
                        ++i, f && x(d, i - 2), o = !0
                    }
                }
            } while (o);
            var m = i;
            if (r.lastIndex = 0, !r.test(b(m++))) for (; m < c && !r.test(b(m));)++m;
            var g = t.substring(i, i = m);
            return '"' !== g && "'" !== g || (y = g), g
        }
        function T(t) {
            v.push(t)
        }
        function E() {
            if (!v.length) {
                var t = S();
                if (null === t) return null;
                T(t)
            }
            return v[0]
        }
        return Object.defineProperty({
            next: S,
            peek: E,
            push: T,
            skip: function(t, e) {
                var i = E();
                if (i === t) return S(), !0;
                if (!e) throw _("token '" + i + "', '" + t + "' expected");
                return !1
            },
            cmnt: function(t) {
                var i = null;
                return void 0 === t ? m === u - 1 && (e || "*" === d || g) && (i = f) : (m < t && E(), m !== t || g || !e && "/" !== d || (i = f)), i
            }
        }, "line", {
            get: function() {
                return u
            }
        })
    }
    d.unescape = p
},
227: function(t, e, i) {
    "use strict";
    t.exports = u;
    var r = i(214);
    ((u.prototype = Object.create(r.prototype)).constructor = u).className = "Root";
    var n, a, o, s = i(210),
        h = i(207),
        l = i(215),
        c = i(205);

    function u(t) {
        r.call(this, "", t), this.deferred = [], this.files = []
    }
    function p() {}
    u.fromJSON = function(t, e) {
        return e || (e = new u), t.options && e.setOptions(t.options), e.addJSON(t.nested)
    }, u.prototype.resolvePath = c.path.resolve, u.prototype.load = function t(e, i, r) {
        "function" == typeof i && (r = i, i = void 0);
        var n = this;
        if (!r) return c.asPromise(t, n, e, i);
        var s = r === p;

        function h(t, e) {
            if (r) {
                var i = r;
                if (r = null, s) throw t;
                i(t, e)
            }
        }
        function l(t, e) {
            try {
                if (c.isString(e) && "{" === e.charAt(0) && (e = JSON.parse(e)), c.isString(e)) {
                    a.filename = t;
                    var r, o = a(e, n, i),
                        l = 0;
                    if (o.imports) for (; l < o.imports.length; ++l)(r = n.resolvePath(t, o.imports[l])) && u(r);
                    if (o.weakImports) for (l = 0; l < o.weakImports.length; ++l)(r = n.resolvePath(t, o.weakImports[l])) && u(r, !0)
                } else n.setOptions(e.options).addJSON(e.nested)
            } catch (t) {
                h(t)
            }
            s || d || h(null, n)
        }
        function u(t, e) {
            var i = t.lastIndexOf("google/protobuf/");
            if (i > -1) {
                var a = t.substring(i);
                a in o && (t = a)
            }
            if (!(n.files.indexOf(t) > -1)) if (n.files.push(t), t in o) s ? l(t, o[t]) : (++d, setTimeout((function() {
                --d, l(t, o[t])
            })));
            else if (s) {
                var u;
                try {
                    u = c.fs.readFileSync(t).toString("utf8")
                } catch (t) {
                    return void(e || h(t))
                }
                l(t, u)
            } else ++d, c.fetch(t, (function(i, a) {
                --d, r && (i ? e ? d || h(null, n) : h(i) : l(t, a))
            }))
        }
        var d = 0;
        c.isString(e) && (e = [e]);
        for (var f, m = 0; m < e.length; ++m)(f = n.resolvePath("", e[m])) && u(f);
        if (s) return n;
        d || h(null, n)
    }, u.prototype.loadSync = function(t, e) {
        if (!c.isNode) throw Error("not supported");
        return this.load(t, e, p)
    },
    u.prototype.resolveAll = function() {
        if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map((function(t) {
            return "'extend " + t.extend + "' in " + t.parent.fullName
        })).join(", "));
        return r.prototype.resolveAll.call(this)
    };
    var d = /^[A-Z]/;

    function f(t, e) {
        var i = e.parent.lookup(e.extend);
        if (i) {
            var r = new s(e.fullName, e.id, e.type, e.rule, void 0, e.options);
            return r.declaringField = e, e.extensionField = r, i.add(r), !0
        }
        return !1
    }
    u.prototype._handleAdd = function(t) {
        if (t instanceof s) void 0 === t.extend || t.extensionField || f(0, t) || this.deferred.push(t);
        else if (t instanceof h) d.test(t.name) && (t.parent[t.name] = t.values);
        else if (!(t instanceof l)) {
            if (t instanceof n) for (var e = 0; e < this.deferred.length;) f(0, this.deferred[e]) ? this.deferred.splice(e, 1) : ++e;
            for (var i = 0; i < t.nestedArray.length; ++i) this._handleAdd(t._nestedArray[i]);
            d.test(t.name) && (t.parent[t.name] = t)
        }
    }, u.prototype._handleRemove = function(t) {
        if (t instanceof s) {
            if (void 0 !== t.extend) if (t.extensionField) t.extensionField.parent.remove(t.extensionField), t.extensionField = null;
            else {
                var e = this.deferred.indexOf(t);
                e > -1 && this.deferred.splice(e, 1)
            }
        } else if (t instanceof h) d.test(t.name) && delete t.parent[t.name];
        else if (t instanceof r) {
            for (var i = 0; i < t.nestedArray.length; ++i) this._handleRemove(t._nestedArray[i]);
            d.test(t.name) && delete t.parent[t.name]
        }
    }, u._configure = function(t, e, i) {
        n = t, a = e, o = i
    }
},
222: function(t, e, i) {
    "use strict";
    t.exports = y;
    var r = i(214);
    ((y.prototype = Object.create(r.prototype)).constructor = y).className = "Type";
    var n = i(207),
        a = i(215),
        o = i(210),
        s = i(223),
        h = i(224),
        l = i(226),
        c = i(221),
        u = i(220),
        p = i(205),
        d = i(244),
        f = i(245),
        m = i(246),
        g = i(247),
        v = i(248);

    function y(t, e) {
        r.call(this, t, e), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null,
        this._oneofsArray = null, this._ctor = null
    }
    function _(t) {
        return t._fieldsById = t._fieldsArray = t._oneofsArray = null, delete t.encode, delete t.decode, delete t.verify, t
    }
    Object.defineProperties(y.prototype, {
        fieldsById: {
            get: function() {
                if (this._fieldsById) return this._fieldsById;
                this._fieldsById = {};
                for (var t = Object.keys(this.fields), e = 0; e < t.length; ++e) {
                    var i = this.fields[t[e]],
                        r = i.id;
                    if (this._fieldsById[r]) throw Error("duplicate id " + r + " in " + this);
                    this._fieldsById[r] = i
                }
                return this._fieldsById
            }
        },
        fieldsArray: {
            get: function() {
                return this._fieldsArray || (this._fieldsArray = p.toArray(this.fields))
            }
        },
        oneofsArray: {
            get: function() {
                return this._oneofsArray || (this._oneofsArray = p.toArray(this.oneofs))
            }
        },
        ctor: {
            get: function() {
                return this._ctor || (this.ctor = y.generateConstructor(this)())
            },
            set: function(t) {
                var e = t.prototype;
                e instanceof l || ((t.prototype = new l).constructor = t, p.merge(t.prototype, e)), t.$type = t.prototype.$type = this, p.merge(t, l, !0), this._ctor = t;
                for (var i = 0; i < this.fieldsArray.length; ++i) this._fieldsArray[i].resolve();
                var r = {};
                for (i = 0; i < this.oneofsArray.length; ++i) r[this._oneofsArray[i].resolve().name] = {
                    get: p.oneOfGetter(this._oneofsArray[i].oneof),
                    set: p.oneOfSetter(this._oneofsArray[i].oneof)
                };
                i && Object.defineProperties(t.prototype, r)
            }
        }
    }), y.generateConstructor = function(t) {
        for (var e, i = p.codegen(["p"], t.name), r = 0; r < t.fieldsArray.length; ++r)(e = t._fieldsArray[r]).map ? i("this%s={}", p.safeProp(e.name)) : e.repeated && i("this%s=[]", p.safeProp(e.name));
        return i("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")
    }, y.fromJSON = function(t, e) {
        var i = new y(t, e.options);
        i.extensions = e.extensions, i.reserved = e.reserved;
        for (var l = Object.keys(e.fields), c = 0; c < l.length; ++c) i.add((void 0 !== e.fields[l[c]].keyType ? s.fromJSON : o.fromJSON)(l[c], e.fields[l[c]]));
        if (e.oneofs) for (l = Object.keys(e.oneofs), c = 0; c < l.length; ++c) i.add(a.fromJSON(l[c], e.oneofs[l[c]]));
        if (e.nested) for (l = Object.keys(e.nested), c = 0; c < l.length; ++c) {
            var u = e.nested[l[c]];
            i.add((void 0 !== u.id ? o.fromJSON : void 0 !== u.fields ? y.fromJSON : void 0 !== u.values ? n.fromJSON : void 0 !== u.methods ? h.fromJSON : r.fromJSON)(l[c], u))
        }
        return e.extensions && e.extensions.length && (i.extensions = e.extensions), e.reserved && e.reserved.length && (i.reserved = e.reserved), e.group && (i.group = !0), e.comment && (i.comment = e.comment), i
    }, y.prototype.toJSON = function(t) {
        var e = r.prototype.toJSON.call(this, t),
            i = !! t && Boolean(t.keepComments);
        return p.toObject(["options", e && e.options || void 0, "oneofs", r.arrayToJSON(this.oneofsArray, t), "fields", r.arrayToJSON(this.fieldsArray.filter((function(t) {
            return !t.declaringField
        })), t) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : void 0, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "group", this.group || void 0, "nested", e && e.nested || void 0, "comment", i ? this.comment : void 0])
    }, y.prototype.resolveAll = function() {
        for (var t = this.fieldsArray, e = 0; e < t.length;) t[e++].resolve();
        var i = this.oneofsArray;
        for (e = 0; e < i.length;) i[e++].resolve();
        return r.prototype.resolveAll.call(this)
    }, y.prototype.get = function(t) {
        return this.fields[t] || this.oneofs && this.oneofs[t] || this.nested && this.nested[t] || null
    }, y.prototype.add = function(t) {
        if (this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
        if (t instanceof o && void 0 === t.extend) {
            if (this._fieldsById ? this._fieldsById[t.id] : this.fieldsById[t.id]) throw Error("duplicate id " + t.id + " in " + this);
            if (this.isReservedId(t.id)) throw Error("id " + t.id + " is reserved in " + this);
            if (this.isReservedName(t.name)) throw Error("name '" + t.name + "' is reserved in " + this);
            return t.parent && t.parent.remove(t), this.fields[t.name] = t, t.message = this, t.onAdd(this), _(this)
        }
        return t instanceof a ? (this.oneofs || (this.oneofs = {}), this.oneofs[t.name] = t, t.onAdd(this), _(this)) : r.prototype.add.call(this, t)
    }, y.prototype.remove = function(t) {
        if (t instanceof o && void 0 === t.extend) {
            if (!this.fields || this.fields[t.name] !== t) throw Error(t + " is not a member of " + this);
            return delete this.fields[t.name], t.parent = null, t.onRemove(this), _(this)
        }
        if (t instanceof a) {
            if (!this.oneofs || this.oneofs[t.name] !== t) throw Error(t + " is not a member of " + this);
            return delete this.oneofs[t.name], t.parent = null, t.onRemove(this), _(this)
        }
        return r.prototype.remove.call(this, t)
    }, y.prototype.isReservedId = function(t) {
        return r.isReservedId(this.reserved, t)
    }, y.prototype.isReservedName = function(t) {
        return r.isReservedName(this.reserved, t)
    }, y.prototype.create = function(t) {
        return new this.ctor(t)
    }, y.prototype.setup = function() {
        for (var t = this.fullName, e = [], i = 0; i < this.fieldsArray.length; ++i) e.push(this._fieldsArray[i].resolve().resolvedType);
        this.encode = d(this)({
            Writer: u,
            types: e,
            util: p
        }), this.decode = f(this)({
            Reader: c,
            types: e,
            util: p
        }), this.verify = m(this)({
            types: e,
            util: p
        }), this.fromObject = g.fromObject(this)({
            types: e,
            util: p
        }), this.toObject = g.toObject(this)({
            types: e,
            util: p
        });
        var r = v[t];
        if (r) {
            var n = Object.create(this);
            n.fromObject = this.fromObject, this.fromObject = r.fromObject.bind(n), n.toObject = this.toObject, this.toObject = r.toObject.bind(n)
        }
        return this
    }, y.prototype.encode = function(t, e) {
        return this.setup().encode(t, e)
    }, y.prototype.encodeDelimited = function(t, e) {
        return this.encode(t, e && e.len ? e.fork() : e).ldelim()
    }, y.prototype.decode = function(t, e) {
        return this.setup().decode(t, e)
    }, y.prototype.decodeDelimited = function(t) {
        return t instanceof c || (t = c.create(t)), this.decode(t, t.uint32())
    }, y.prototype.verify = function(t) {
        return this.setup().verify(t)
    }, y.prototype.fromObject = function(t) {
        return this.setup().fromObject(t)
    }, y.prototype.toObject = function(t, e) {
        return this.setup().toObject(t, e)
    }, y.d = function(t) {
        return function(e) {
            p.decorateType(e, t)
        }
    }
},
210: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = c;
    var n = i(212);
    ((c.prototype = Object.create(n.prototype)).constructor = c).className = "Field";
    var a, o = i(207),
        s = i(213),
        h = i(205),
        l = /^required|optional|repeated$/;

    function c(t, e, i, r, a, o, c) {
        if (h.isObject(r) ? (c = a, o = r, r = a = void 0) : h.isObject(a) && (c = o, o = a, a = void 0), n.call(this, t, o), !h.isInteger(e) || e < 0) throw TypeError("id must be a non-negative integer");
        if (!h.isString(i)) throw TypeError("type must be a string");
        if (void 0 !== r && !l.test(r = r.toString().toLowerCase())) throw TypeError("rule must be a string rule");
        if (void 0 !== a && !h.isString(a)) throw TypeError("extend must be a string");
        this.rule = r && "optional" !== r ? r : void 0, this.type = i, this.id = e, this.extend = a || void 0, this.required = "required" === r, this.optional = !this.required, this.repeated = "repeated" === r, this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !! h.Long && void 0 !== s.long[i], this.bytes = "bytes" === i, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = c
    }
    c.fromJSON = function(t, e) {
        return new c(t, e.id, e.type, e.rule, e.extend, e.options, e.comment)
    }, Object.defineProperty(c.prototype, "packed", {
        get: function() {
            return null === this._packed && (this._packed = !1 !== this.getOption("packed")), this._packed
        }
    }), c.prototype.setOption = function(t, e, i) {
        return "packed" === t && (this._packed = null), n.prototype.setOption.call(this, t, e, i)
    }, c.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return h.toObject(["rule", "optional" !== this.rule && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", e ? this.comment : void 0])
    }, c.prototype.resolve = function() {
        if (this.resolved) return this;
        if (void 0 === (this.typeDefault = s.defaults[this.type]) && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof a ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.
        default && (this.typeDefault = this.options.
        default, this.resolvedType instanceof o && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (!0 !== this.options.packed && (void 0 === this.options.packed || !this.resolvedType || this.resolvedType instanceof o) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long) this.typeDefault = h.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)), Object.freeze && Object.freeze(this.typeDefault);
        else if (this.bytes && "string" == typeof this.typeDefault) {
            var t;
            h.base64.test(this.typeDefault) ? h.base64.decode(this.typeDefault, t = h.newBuffer(h.base64.length(this.typeDefault)), 0) : h.utf8.write(this.typeDefault, t = h.newBuffer(h.utf8.length(this.typeDefault)), 0), this.typeDefault = t
        }
        return this.map ? this.defaultValue = h.emptyObject : this.repeated ? this.defaultValue = h.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof a && (this.parent.ctor.prototype[this.name] = this.defaultValue), n.prototype.resolve.call(this)
    }, c.d = function(t, e, i, n) {
        return "function" == typeof e ? e = h.decorateType(e).name : e && "object" === r(e) && (e = h.decorateEnum(e).name),
        function(r, a) {
            h.decorateType(r.constructor).add(new c(a, t, e, i, {
                default: n
            }))
        }
    }, c._configure = function(t) {
        a = t
    }
},
223: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = s;
    var n = i(210);
    ((s.prototype = Object.create(n.prototype)).constructor = s).className = "MapField";
    var a = i(213),
        o = i(205);

    function s(t, e, i, r, a, s) {
        if (n.call(this, t, e, r, void 0, void 0, a, s), !o.isString(i)) throw TypeError("keyType must be a string");
        this.keyType = i, this.resolvedKeyType = null, this.map = !0
    }
    s.fromJSON = function(t, e) {
        return new s(t, e.id, e.keyType, e.type, e.options, e.comment)
    }, s.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return o.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", e ? this.comment : void 0])
    }, s.prototype.resolve = function() {
        if (this.resolved) return this;
        if (void 0 === a.mapKey[this.keyType]) throw Error("invalid key type: " + this.keyType);
        return n.prototype.resolve.call(this)
    }, s.d = function(t, e, i) {
        return "function" == typeof i ? i = o.decorateType(i).name : i && "object" === r(i) && (i = o.decorateEnum(i).name),
        function(r, n) {
            o.decorateType(r.constructor).add(new s(n, t, e, i))
        }
    }
},
215: function(t, e, i) {
    "use strict";
    t.exports = o;
    var r = i(212);
    ((o.prototype = Object.create(r.prototype)).constructor = o).className = "OneOf";
    var n = i(210),
        a = i(205);

    function o(t, e, i, n) {
        if (Array.isArray(e) || (i = e, e = void 0), r.call(this, t, i), void 0 !== e && !Array.isArray(e)) throw TypeError("fieldNames must be an Array");
        this.oneof = e || [], this.fieldsArray = [], this.comment = n
    }
    function s(t) {
        if (t.parent) for (var e = 0; e < t.fieldsArray.length; ++e) t.fieldsArray[e].parent || t.parent.add(t.fieldsArray[e])
    }
    o.fromJSON = function(t, e) {
        return new o(t, e.oneof, e.options, e.comment)
    }, o.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return a.toObject(["options", this.options, "oneof", this.oneof, "comment", e ? this.comment : void 0])
    }, o.prototype.add = function(t) {
        if (!(t instanceof n)) throw TypeError("field must be a Field");
        return t.parent && t.parent !== this.parent && t.parent.remove(t), this.oneof.push(t.name), this.fieldsArray.push(t), t.partOf = this, s(this), this
    }, o.prototype.remove = function(t) {
        if (!(t instanceof n)) throw TypeError("field must be a Field");
        var e = this.fieldsArray.indexOf(t);
        if (e < 0) throw Error(t + " is not a member of " + this);
        return this.fieldsArray.splice(e, 1), (e = this.oneof.indexOf(t.name)) > -1 && this.oneof.splice(e, 1), t.partOf = null, this
    }, o.prototype.onAdd = function(t) {
        r.prototype.onAdd.call(this, t);
        for (var e = 0; e < this.oneof.length; ++e) {
            var i = t.get(this.oneof[e]);
            i && !i.partOf && (i.partOf = this, this.fieldsArray.push(i))
        }
        s(this)
    }, o.prototype.onRemove = function(t) {
        for (var e, i = 0; i < this.fieldsArray.length; ++i)(e = this.fieldsArray[i]).parent && e.parent.remove(e);
        r.prototype.onRemove.call(this, t)
    }, o.d = function() {
        for (var t = new Array(arguments.length), e = 0; e < arguments.length;) t[e] = arguments[e++];
        return function(e, i) {
            a.decorateType(e.constructor).add(new o(i, t)), Object.defineProperty(e, i, {
                get: a.oneOfGetter(t),
                set: a.oneOfSetter(t)
            })
        }
    }
},
207: function(t, e, i) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    t.exports = s;
    var n = i(212);
    ((s.prototype = Object.create(n.prototype)).constructor = s).className = "Enum";
    var a = i(214),
        o = i(205);

    function s(t, e, i, a, o) {
        if (n.call(this, t, i), e && "object" !== r(e)) throw TypeError("values must be an object");
        if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = a, this.comments = o || {}, this.reserved = void 0, e) for (var s = Object.keys(e), h = 0; h < s.length; ++h) "number" == typeof e[s[h]] && (this.valuesById[this.values[s[h]] = e[s[h]]] = s[h])
    }
    s.fromJSON = function(t, e) {
        var i = new s(t, e.values, e.options, e.comment, e.comments);
        return i.reserved = e.reserved, i
    }, s.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return o.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", e ? this.comment : void 0, "comments", e ? this.comments : void 0])
    }, s.prototype.add = function(t, e, i) {
        if (!o.isString(t)) throw TypeError("name must be a string");
        if (!o.isInteger(e)) throw TypeError("id must be an integer");
        if (void 0 !== this.values[t]) throw Error("duplicate name '" + t + "' in " + this);
        if (this.isReservedId(e)) throw Error("id " + e + " is reserved in " + this);
        if (this.isReservedName(t)) throw Error("name '" + t + "' is reserved in " + this);
        if (void 0 !== this.valuesById[e]) {
            if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + e + " in " + this);
            this.values[t] = e
        } else this.valuesById[this.values[t] = e] = t;
        return this.comments[t] = i || null, this
    }, s.prototype.remove = function(t) {
        if (!o.isString(t)) throw TypeError("name must be a string");
        var e = this.values[t];
        if (null == e) throw Error("name '" + t + "' does not exist in " + this);
        return delete this.valuesById[e], delete this.values[t], delete this.comments[t], this
    }, s.prototype.isReservedId = function(t) {
        return a.isReservedId(this.reserved, t)
    }, s.prototype.isReservedName = function(t) {
        return a.isReservedName(this.reserved, t)
    }
},
224: function(t, e, i) {
    "use strict";
    t.exports = s;
    var r = i(214);
    ((s.prototype = Object.create(r.prototype)).constructor = s).className = "Service";
    var n = i(225),
        a = i(205),
        o = i(242);

    function s(t, e) {
        r.call(this, t, e), this.methods = {}, this._methodsArray = null
    }
    function h(t) {
        return t._methodsArray = null, t
    }
    s.fromJSON = function(t, e) {
        var i = new s(t, e.options);
        if (e.methods) for (var r = Object.keys(e.methods), a = 0; a < r.length; ++a) i.add(n.fromJSON(r[a], e.methods[r[a]]));
        return e.nested && i.addJSON(e.nested), i.comment = e.comment, i
    }, s.prototype.toJSON = function(t) {
        var e = r.prototype.toJSON.call(this, t),
            i = !! t && Boolean(t.keepComments);
        return a.toObject(["options", e && e.options || void 0, "methods", r.arrayToJSON(this.methodsArray, t) || {}, "nested", e && e.nested || void 0, "comment", i ? this.comment : void 0])
    }, Object.defineProperty(s.prototype, "methodsArray", {
        get: function() {
            return this._methodsArray || (this._methodsArray = a.toArray(this.methods))
        }
    }), s.prototype.get = function(t) {
        return this.methods[t] || r.prototype.get.call(this, t)
    }, s.prototype.resolveAll = function() {
        for (var t = this.methodsArray, e = 0; e < t.length; ++e) t[e].resolve();
        return r.prototype.resolve.call(this)
    }, s.prototype.add = function(t) {
        if (this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
        return t instanceof n ? (this.methods[t.name] = t, t.parent = this, h(this)) : r.prototype.add.call(this, t)
    }, s.prototype.remove = function(t) {
        if (t instanceof n) {
            if (this.methods[t.name] !== t) throw Error(t + " is not a member of " + this);
            return delete this.methods[t.name], t.parent = null, h(this)
        }
        return r.prototype.remove.call(this, t)
    }, s.prototype.create = function(t, e, i) {
        for (var r, n = new o.Service(t, e, i), s = 0; s < this.methodsArray.length; ++s) {
            var h = a.lcFirst((r = this._methodsArray[s]).resolve().name).replace(/[^$\w_]/g, "");
            n[h] = a.codegen(["r", "c"], a.isReserved(h) ? h + "_" : h)("return this.rpcCall(m,q,s,r,c)")({
                m: r,
                q: r.resolvedRequestType.ctor,
                s: r.resolvedResponseType.ctor
            })
        }
        return n
    }
},
225: function(t, e, i) {
    "use strict";
    t.exports = a;
    var r = i(212);
    ((a.prototype = Object.create(r.prototype)).constructor = a).className = "Method";
    var n = i(205);

    function a(t, e, i, a, o, s, h, l) {
        if (n.isObject(o) ? (h = o, o = s = void 0) : n.isObject(s) && (h = s, s = void 0), void 0 !== e && !n.isString(e)) throw TypeError("type must be a string");
        if (!n.isString(i)) throw TypeError("requestType must be a string");
        if (!n.isString(a)) throw TypeError("responseType must be a string");
        r.call(this, t, h), this.type = e || "rpc", this.requestType = i, this.requestStream = !! o || void 0, this.responseType = a, this.responseStream = !! s || void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = l
    }
    a.fromJSON = function(t, e) {
        return new a(t, e.type, e.requestType, e.responseType, e.requestStream, e.responseStream, e.options, e.comment)
    }, a.prototype.toJSON = function(t) {
        var e = !! t && Boolean(t.keepComments);
        return n.toObject(["type", "rpc" !== this.type && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", e ? this.comment : void 0])
    }, a.prototype.resolve = function() {
        return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), r.prototype.resolve.call(this))
    }
},
213: function(t, e, i) {
    "use strict";
    var r = e,
        n = i(205),
        a = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];

    function o(t, e) {
        var i = 0,
            r = {};
        for (e |= 0; i < t.length;) r[a[i + e]] = t[i++];
        return r
    }
    r.basic = o([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), r.defaults = o([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", n.emptyArray, null]), r.long = o([0, 0, 0, 1, 1], 7), r.mapKey = o([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), r.packed = o([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])
},
205: function(t, e, i) {
    "use strict";
    var r, n, a = t.exports = i(208),
        o = i(243);
    a.codegen = i(452), a.fetch = i(453), a.path = i(454), a.fs = a.inquire("fs"), a.toArray = function(t) {
        if (t) {
            for (var e = Object.keys(t), i = new Array(e.length), r = 0; r < e.length;) i[r] = t[e[r++]];
            return i
        }
        return []
    }, a.toObject = function(t) {
        for (var e = {}, i = 0; i < t.length;) {
            var r = t[i++],
                n = t[i++];
            void 0 !== n && (e[r] = n)
        }
        return e
    };
    var s = /\\/g,
        h = /"/g;
    a.isReserved = function(t) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
    }, a.safeProp = function(t) {
        return !/^[$\w_]+$/.test(t) || a.isReserved(t) ? '["' + t.replace(s, "\\\\").replace(h, '\\"') + '"]' : "." + t
    }, a.ucFirst = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1)
    };
    var l = /_([a-z])/g;
    a.camelCase = function(t) {
        return t.substring(0, 1) + t.substring(1).replace(l, (function(t, e) {
            return e.toUpperCase()
        }))
    }, a.compareFieldsById = function(t, e) {
        return t.id - e.id
    }, a.decorateType = function(t, e) {
        if (t.$type) return e && t.$type.name !== e && (a.decorateRoot.remove(t.$type), t.$type.name = e, a.decorateRoot.add(t.$type)), t.$type;
        r || (r = i(222));
        var n = new r(e || t.name);
        return a.decorateRoot.add(n), n.ctor = t, Object.defineProperty(t, "$type", {
            value: n,
            enumerable: !1
        }), Object.defineProperty(t.prototype, "$type", {
            value: n,
            enumerable: !1
        }), n
    };
    var c = 0;
    a.decorateEnum = function(t) {
        if (t.$type) return t.$type;
        n || (n = i(207));
        var e = new n("Enum" + c++, t);
        return a.decorateRoot.add(e), Object.defineProperty(t, "$type", {
            value: e,
            enumerable: !1
        }), e
    }, Object.defineProperty(a, "decorateRoot", {
        get: function() {
            return o.decorated || (o.decorated = new(i(227)))
        }
    })
},
456: function(t, e, i) {
    "use strict";
    t.exports = a;
    var r, n = /\/|\./;

    function a(t, e) {
        n.test(t) || (t = "google/protobuf/" + t + ".proto", e = {
            nested: {
                google: {
                    nested: {
                        protobuf: {
                            nested: e
                        }
                    }
                }
            }
        }), a[t] = e
    }
    a("any", {
        Any: {
            fields: {
                type_url: {
                    type: "string",
                    id: 1
                },
                value: {
                    type: "bytes",
                    id: 2
                }
            }
        }
    }), a("duration", {
        Duration: r = {
            fields: {
                seconds: {
                    type: "int64",
                    id: 1
                },
                nanos: {
                    type: "int32",
                    id: 2
                }
            }
        }
    }), a("timestamp", {
        Timestamp: r
    }), a("empty", {
        Empty: {
            fields: {}
        }
    }), a("struct", {
        Struct: {
            fields: {
                fields: {
                    keyType: "string",
                    type: "Value",
                    id: 1
                }
            }
        },
        Value: {
            oneofs: {
                kind: {
                    oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]
                }
            },
            fields: {
                nullValue: {
                    type: "NullValue",
                    id: 1
                },
                numberValue: {
                    type: "double",
                    id: 2
                },
                stringValue: {
                    type: "string",
                    id: 3
                },
                boolValue: {
                    type: "bool",
                    id: 4
                },
                structValue: {
                    type: "Struct",
                    id: 5
                },
                listValue: {
                    type: "ListValue",
                    id: 6
                }
            }
        },
        NullValue: {
            values: {
                NULL_VALUE: 0
            }
        },
        ListValue: {
            fields: {
                values: {
                    rule: "repeated",
                    type: "Value",
                    id: 1
                }
            }
        }
    }), a("wrappers", {
        DoubleValue: {
            fields: {
                value: {
                    type: "double",
                    id: 1
                }
            }
        },
        FloatValue: {
            fields: {
                value: {
                    type: "float",
                    id: 1
                }
            }
        },
        Int64Value: {
            fields: {
                value: {
                    type: "int64",
                    id: 1
                }
            }
        },
        UInt64Value: {
            fields: {
                value: {
                    type: "uint64",
                    id: 1
                }
            }
        },
        Int32Value: {
            fields: {
                value: {
                    type: "int32",
                    id: 1
                }
            }
        },
        UInt32Value: {
            fields: {
                value: {
                    type: "uint32",
                    id: 1
                }
            }
        },
        BoolValue: {
            fields: {
                value: {
                    type: "bool",
                    id: 1
                }
            }
        },
        StringValue: {
            fields: {
                value: {
                    type: "string",
                    id: 1
                }
            }
        },
        BytesValue: {
            fields: {
                value: {
                    type: "bytes",
                    id: 1
                }
            }
        }
    }), a("field_mask", {
        FieldMask: {
            fields: {
                paths: {
                    rule: "repeated",
                    type: "string",
                    id: 1
                }
            }
        }
    }), a.get = function(t) {
        return a[t] || null
    }
},
457: function(i) {
    i.exports = JSON.parse('{"nested":{"bilibili":{"nested":{"community":{"nested":{"service":{"nested":{"dm":{"nested":{"v1":{"nested":{"DmWebViewReply":{"fields":{"state":{"type":"int32","id":1},"text":{"type":"string","id":2},"textSide":{"type":"string","id":3},"dmSge":{"type":"DmSegConfig","id":4},"flag":{"type":"DanmakuFlagConfig","id":5},"specialDms":{"rule":"repeated","type":"string","id":6},"checkBox":{"type":"bool","id":7},"count":{"type":"int64","id":8},"commandDms":{"rule":"repeated","type":"CommandDm","id":9},"dmSetting":{"type":"DanmuWebPlayerConfig","id":10}}},"CommandDm":{"fields":{"id":{"type":"int64","id":1},"oid":{"type":"int64","id":2},"mid":{"type":"int64","id":3},"command":{"type":"string","id":4},"content":{"type":"string","id":5},"progress":{"type":"int32","id":6},"ctime":{"type":"string","id":7},"mtime":{"type":"string","id":8},"extra":{"type":"string","id":9},"idStr":{"type":"string","id":10}}},"DmSegConfig":{"fields":{"pageSize":{"type":"int64","id":1},"total":{"type":"int64","id":2}}},"DanmakuFlagConfig":{"fields":{"recFlag":{"type":"int32","id":1},"recText":{"type":"string","id":2},"recSwitch":{"type":"int32","id":3}}},"DmSegMobileReply":{"fields":{"elems":{"rule":"repeated","type":"DanmakuElem","id":1}}},"DanmakuElem":{"fields":{"id":{"type":"int64","id":1},"progress":{"type":"int32","id":2},"mode":{"type":"int32","id":3},"fontsize":{"type":"int32","id":4},"color":{"type":"uint32","id":5},"midHash":{"type":"string","id":6},"content":{"type":"string","id":7},"ctime":{"type":"int64","id":8},"weight":{"type":"int32","id":9},"action":{"type":"string","id":10},"pool":{"type":"int32","id":11},"idStr":{"type":"string","id":12}}},"DanmuWebPlayerConfig":{"fields":{"dmSwitch":{"type":"bool","id":1},"aiSwitch":{"type":"bool","id":2},"aiLevel":{"type":"int32","id":3},"blocktop":{"type":"bool","id":4},"blockscroll":{"type":"bool","id":5},"blockbottom":{"type":"bool","id":6},"blockcolor":{"type":"bool","id":7},"blockspecial":{"type":"bool","id":8},"preventshade":{"type":"bool","id":9},"dmask":{"type":"bool","id":10},"opacity":{"type":"float","id":11},"dmarea":{"type":"int32","id":12},"speedplus":{"type":"float","id":13},"fontsize":{"type":"float","id":14},"screensync":{"type":"bool","id":15},"speedsync":{"type":"bool","id":16},"fontfamily":{"type":"string","id":17},"bold":{"type":"bool","id":18},"fontborder":{"type":"int32","id":19},"drawType":{"type":"string","id":20}}}}}}}}}}}}}}}')
}
		
	})
}
));
!function(e) {
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

    function base64encode(str) {
        var out, i, len;
        var c1, c2, c3;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += base64EncodeChars.charAt(c3 & 0x3F);
        }
        return out;
    }

    function base64decode(str) {
        var c1, c2, c3, c4;
        var i, len, out;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            do {
                c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c1 == -1);
            if (c1 == -1) break;
            do {
                c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c2 == -1);
            if (c2 == -1) break;
            out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
            do {
                c3 = str.charCodeAt(i++) & 0xff;
                if (c3 == 61) return out;
                c3 = base64DecodeChars[c3];
            } while (i < len && c3 == -1);
            if (c3 == -1) break;
            out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
            do {
                c4 = str.charCodeAt(i++) & 0xff;
                if (c4 == 61) return out;
                c4 = base64DecodeChars[c4];
            } while (i < len && c4 == -1);
            if (c4 == -1) break;
            out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
        }
        return out;
    }

    function utf16to8(str) {
        var out, i, len, c;
        out = "";
        len = str.length;
        for (i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += str.charAt(i);
            } else if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            } else {
                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
        }
        return out;
    }

    function utf8to16(str) {
        var out, i, len, c;
        var char2, char3;
        out = "";
        len = str.length;
        i = 0;
        while (i < len) {
            c = str.charCodeAt(i++);
            switch (c >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    out += str.charAt(i - 1);
                    break;
                case 12:
                case 13:
                    char2 = str.charCodeAt(i++);
                    out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                    break;
                case 14:
                    char2 = str.charCodeAt(i++);
                    char3 = str.charCodeAt(i++);
                    out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));
                    break;
            }
        }
        return out;
    }

    function CharToHex(str) {
        var out, i, len, c, h;
        out = "";
        len = str.length;
        i = 0;
        while (i < len) {
            c = str.charCodeAt(i++);
            h = c.toString(16);
            if (h.length < 2) h = "0" + h;
            out += "\\x" + h + " ";
            if (i > 0 && i % 8 == 0) out += "\r\n";
        }
        return out;
    }
    this.atob = base64decode, this.btoa = base64encode;
}(this);


window.base64ToUint8Array = function base64ToUint8Array(base64String) {
    let padding = '='.repeat((4 - base64String.length % 4) % 4);
    let base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    let rawData = window.atob(base64);
    let outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}


function xxx(data)
{
	var data1 = base64ToUint8Array(data);
	var _440 = window.zhiyuan(440);
	var _457 = window.zhiyuan(457);
	var eee = _440.Root.fromJSON(_457);
	var xxx = eee.lookupType("bilibili.community.service.dm.v1.DmSegMobileReply");
	return JSON.stringify(xxx.decode(data1));
}
//xxx('CkIIhYCA6vuPk0IQ1FsYASAZKP///wcyCDc5MzA4MTVmOgbniLHkuoZA3cOI+gVIA2IRMzcyMzg4MDg0NDU0NTIyOTMKXgiHgKD4waWgQhDAwgEYASAZKP///wcyCGI3NTQ5Yzg1OiHmiYDku6Xov5nlsLHmmK/mi4nku5TnmoTnlLHmnaXvvJ9A3aKP+gVIA2IRMzcyOTY3MjM0MjQ5Njg3MTE=')


//弹幕获取接口 https://api.bilibili.com/x/v2/dm/web/seg.so?type=1&oid=227303221&pid=711773434&segment_index=1