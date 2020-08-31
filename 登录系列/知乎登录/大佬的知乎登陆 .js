var window = this;

(function () {
    /*说明在之前已经定义了*/
    if (this.document) return;
     window = self = this;
    var fun = function () {
        return window.canvas;
    },
        url = window.referer?window.referer:"https://www.zhihu.com/signin?next=%2F"; //这边可以改成自己的网址
   window.top=window;
     window.Promise=window.Promise||fun;
    /*定义部分window常量*/
    window.screen = {
        availHeight: 693,
        availLeft: 0,
        availTop: 0,
        availWidth: 1291,
        colorDepth: 24,
        height: 727,
        orientation: {
            angle: 0,
            type: "landscape-primary",
            onchange: null,
            angle: fun,
            lock: fun,
            onchange: fun,
            type: fun,
            unlock: fun
        },
        pixelDepth: 24,
        width: 1291
    };
    window.navigator = {
        appCodeName: "Mozilla",
        appName: "Netscape",
        appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36",
        bluetooth: {},
        clipboard: {},
        connection: {
            onchange: null,
            effectiveType: "4g",
            rtt: 100,
            downlink: 10,
            saveData: false,
            addEventListener: fun,
            dispatchEvent: fun,
            removeEventListener: fun
        },
        cookieEnabled: true,
        credentials: {},
        deviceMemory: 8,
        doNotTrack: null,
        geolocation: {},
        hardwareConcurrency: 12,
        keyboard: {},
        language: "en-US",
        languages: ["en-US", "en", "zh", "zh-CN"],
        locks: {},
        maxTouchPoints: 0,
        mediaCapabilities: {},
        mediaDevices: {
            ondevicechange: null
        },
        mediaSession: {
            metadata: null,
            playbackState: "none"
        },
        mimeTypes: {},
        onLine: true,
        permissions: {},
        platform: "Win32",
        plugins: [{}, {}, {}],
        presentation: {
            receiver: null,
            defaultRequest: null
        },
        product: "Gecko",
        productSub: "20030107",
        serviceWorker: {
            ready: {},
            controller: null,
            oncontrollerchange: null,
            onmessage: null
        },
        storage: {},
        usb: {
            onconnect: null,
            ondisconnect: null
        },
        userActivation: {
            hasBeenActive: true,
            isActive: true
        },
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36",
        vendor: "Google Inc.",
        vendorSub: "",
        webkitPersistentStorage: {},
        webkitTemporaryStorage: {},
        ancestorOrigins: [],
        bluetooth: fun,
        clipboard: fun,
        connection: fun,
        cookieEnabled: fun,
        credentials: fun,
        deviceMemory: fun,
        doNotTrack: fun,
        geolocation: fun,
        getBattery: fun,
        getGamepads: fun,
        getUserMedia: fun,
        hardwareConcurrency: fun,
        javaEnabled: fun,
        keyboard: fun,
        locks: fun,
        maxTouchPoints: fun,
        mediaCapabilities: fun,
        mediaDevices: fun,
        mediaSession: fun,
        mimeTypes: fun,
        onLine: fun,
        permissions: fun,
        presentation: fun,
        registerProtocolHandler: fun,
        requestMIDIAccess: fun,
        requestMediaKeySystemAccess: fun,
        sendBeacon: fun,
        serviceWorker: fun,
        storage: fun,
        unregisterProtocolHandler: fun,
        usb: fun,
        userActivation: fun,
        vibrate: fun,
        webkitGetUserMedia: fun,
        webkitPersistentStorage: fun,
        webkitTemporaryStorage: fun
    };
    window.style = {};
    window.screenLeft = 0;
    window.screenTop = 0;
    window.outerWidth = 1549;
    window.outerHeight = 831;
    window.innerWidth = 1550;
    window.innerHeight = 729;
    /*定义部分document常量*/
    (function () {
        var i;
        for (i = 0; i < 2; i++)
            window.document = {
                '0': window.document,
                createElement: function (e) {
                    return window.canvas
                },
                addEventListener: function () {
                    log("[addEventListener]被调用" + JSON.stringify(arguments))
                },
                removeEventListener: function () {
                    log("[removeEventListener]被调用" + JSON.stringify(arguments))
                },
                append: function () {
                    log("[append]被调用" + JSON.stringify(arguments))
                },
                appendChild: function () {
                    log("[appendChild]被调用" + JSON.stringify(arguments))
                },
                removeChild: function () {
                    log("[removeChild]被调用" + JSON.stringify(arguments))
                },
                replaceChild: function () { },
                getElementById: function () { },
                getElementsByClassName: function () { },
                getElementsByName: function () { },
                getElementsByTagName: function () {
                    return window.document
                },
                getElementsByTagNameNS: function () { },
                dispatchEvent: function () { },
                getRootNode: function () {
                    return window.document
                },
                body: window.document,
                URL: url,
                activeElement: window.document,
                adoptedStyleSheets: [],
                alinkColor: "",
                all: [
                    window.location, window.location, window.location, window.location, window.location
                ],
                anchors: [],
                applets: [],
                baseURI: url,
                bgColor: "",
                characterSet: "GBK",
                charset: "GBK",
                childElementCount: 1,
                childNodes: [
                    window.location,
                    window.location
                ],
                children: [
                    window.document
                ],
                compatMode: "CSS1Compat",
                contentType: "text/html",
                cookie: "",
                currentScript: window.location,
                defaultView: {},
                designMode: "off",
                dir: "",
                doctype: window.document,
                documentElement: window.document,
                documentURI: url,
                domain: "",
                embeds: [],
                featurePolicy: {},
                fgColor: "",
                firstChild: window.document,
                firstElementChild: window.document,
                fonts: {
                    onloading: null,
                    onloadingdone: null,
                    onloadingerror: null,
                    ready: Promise,
                    status: "loaded"
                },
                forms: [],
                fullscreen: false,
                fullscreenElement: null,
                fullscreenEnabled: true,
                head: window.document,
                hidden: true,
                images: [],
                implementation: {},
                inputEncoding: "GBK",
                isConnected: true,
                lastChild: window.document,
                lastElementChild: window.document,
                lastModified: "01/31/2020 00:40:45",
                linkColor: "",
                links: [],
                location: window.location,
                nextSibling: null,
                nodeName: "#document",
                nodeType: 9,
                nodeValue: null,
                onabort: null,
                onauxclick: null,
                onbeforecopy: null,
                onbeforecut: null,
                onbeforepaste: null,
                onblur: null,
                oncancel: null,
                oncanplay: null,
                oncanplaythrough: null,
                onchange: null,
                onclick: null,
                onclose: null,
                oncontextmenu: null,
                oncopy: null,
                oncuechange: null,
                oncut: null,
                ondblclick: null,
                ondrag: null,
                ondragend: null,
                ondragenter: null,
                ondragleave: null,
                ondragover: null,
                ondragstart: null,
                ondrop: null,
                ondurationchange: null,
                onemptied: null,
                onended: null,
                onerror: null,
                onfocus: null,
                onformdata: null,
                onfreeze: null,
                onfullscreenchange: null,
                onfullscreenerror: null,
                ongotpointercapture: null,
                oninput: null,
                oninvalid: null,
                onkeydown: null,
                onkeypress: null,
                onkeyup: null,
                onload: null,
                onloadeddata: null,
                onloadedmetadata: null,
                onloadstart: null,
                onlostpointercapture: null,
                onmousedown: null,
                onmouseenter: null,
                onmouseleave: null,
                onmousemove: null,
                onmouseout: null,
                onmouseover: null,
                onmouseup: null,
                onmousewheel: null,
                onpaste: null,
                onpause: null,
                onplay: null,
                onplaying: null,
                onpointercancel: null,
                onpointerdown: null,
                onpointerenter: null,
                onpointerleave: null,
                onpointerlockchange: null,
                onpointerlockerror: null,
                onpointermove: null,
                onpointerout: null,
                onpointerover: null,
                onpointerrawupdate: null,
                onpointerup: null,
                onprogress: null,
                onratechange: null,
                onreadystatechange: null,
                onreset: null,
                onresize: null,
                onresume: null,
                onscroll: null,
                onsearch: null,
                onsecuritypolicyviolation: null,
                onseeked: null,
                onseeking: null,
                onselect: null,
                onselectionchange: null,
                onselectstart: null,
                onstalled: null,
                onsubmit: null,
                onsuspend: null,
                ontimeupdate: null,
                ontoggle: null,
                onvisibilitychange: null,
                onvolumechange: null,
                onwaiting: null,
                onwebkitfullscreenchange: null,
                onwebkitfullscreenerror: null,
                onwheel: null,
                ownerDocument: null,
                parentElement: null,
                parentNode: null,
                pictureInPictureElement: null,
                pictureInPictureEnabled: true,
                plugins: [],
                pointerLockElement: null,
                previousSibling: null,
                readyState: "loading",
                referrer: "",
                style: {},
                rootElement: null,
                scripts: [
                    window.document
                ],
                scrollingElement: window.document,
                styleSheets: {},
                textContent: null,
                title: "",
                visibilityState: "visible",
                vlinkColor: "",
                wasDiscarded: false,
                webkitCurrentFullScreenElement: null,
                webkitFullscreenElement: null,
                webkitFullscreenEnabled: true,
                webkitHidden: false,
                webkitIsFullScreen: false,
                webkitVisibilityState: "visible",
                xmlEncoding: null,
                xmlStandalone: false,
                xmlVersion: null,
                documentElement: {
                    clientHeight: 952,
                    clientWidth: 1937,
                    getAttribute: function () {
                        return null
                    }
                },
                referrer: url
            };
    })();

    window.addEventListener = document.addEventListener;
    window.removeEventListener = document.removeEventListener;
    window.location = (function () {
        function Location() {
            this.ancestorOrigins = {
                length: 0,
                contains: fun,
                item: fun
            }
            this.assign = fun
            this.hash = ""
            this.host = "reg.taobao.com"
            this.hostname = "reg.taobao.com"
            this.href = window.referer?window.referer:"https://reg.taobao.com/member/reg/fill_mobile.htm"
            this.origin = "https://reg.taobao.com"
            this.pathname = "/member/reg/fill_mobile.htm"
            this.port = ""
            this.protocol = "https:"
            this.reload = fun
            this.replace = fun
            this.search = ""
        }
        Location.prototype.toString = function () {
            return window.location.href
        }
        return new Location
    })();

    /*使对象无法被修改*/
    Object.defineProperty && Object.defineProperty(this, "document", {
        value: this.document,
        writable: false
    });
    Object.defineProperty && Object.defineProperty(window, "navigator", {
        value: window.navigator,
        writable: false
    });
    /*定义canvas元素对象*/
    try {
        window.canvas = {
            accessKey: "",
            assignedSlot: null,
            attributeStyleMap: {
                size: 0,
                append: fun,
                clear: fun,
                'delete': fun,
                'set': fun
            },
            attributes: {
                length: 0
            },
            autocapitalize: "",
            baseURI: location.href,
            childElementCount: 0,
            childNodes: [],
            children: [],
            classList: [],
            className: "",
            clientHeight: 0,
            clientLeft: 0,
            clientTop: 0,
            clientWidth: 0,
            contentEditable: "inherit",
            dataset: {},
            dir: "",
            draggable: false,
            elementTiming: "",
            enterKeyHint: "",
            firstChild: null,
            firstElementChild: null,
            height: 150,
            hidden: false,
            id: "",
            innerHTML: "",
            innerText: "",
            inputMode: "",
            isConnected: false,
            isContentEditable: false,
            lang: "",
            lastChild: null,
            lastElementChild: null,
            localName: "canvas",
            namespaceURI: "http://www.w3.org/1999/xhtml",
            nextElementSibling: null,
            nextSibling: null,
            nodeName: "CANVAS",
            nodeType: 1,
            nodeValue: null,
            nonce: "",
            offsetHeight: 0,
            offsetLeft: 0,
            offsetParent: null,
            offsetTop: 0,
            offsetWidth: 0,
            onabort: null,
            onauxclick: null,
            onbeforecopy: null,
            onbeforecut: null,
            onbeforepaste: null,
            onblur: null,
            oncancel: null,
            oncanplay: null,
            oncanplaythrough: null,
            onchange: null,
            onclick: null,
            onclose: null,
            oncontextmenu: null,
            oncopy: null,
            oncuechange: null,
            oncut: null,
            ondblclick: null,
            ondrag: null,
            ondragend: null,
            ondragenter: null,
            ondragleave: null,
            ondragover: null,
            ondragstart: null,
            ondrop: null,
            ondurationchange: null,
            onemptied: null,
            onended: null,
            onerror: null,
            onfocus: null,
            onformdata: null,
            onfullscreenchange: null,
            onfullscreenerror: null,
            ongotpointercapture: null,
            oninput: null,
            oninvalid: null,
            onkeydown: null,
            onkeypress: null,
            onkeyup: null,
            onload: null,
            onloadeddata: null,
            onloadedmetadata: null,
            onloadstart: null,
            onlostpointercapture: null,
            onmousedown: null,
            onmouseenter: null,
            onmouseleave: null,
            onmousemove: null,
            onmouseout: null,
            onmouseover: null,
            onmouseup: null,
            onmousewheel: null,
            onpaste: null,
            onpause: null,
            onplay: null,
            onplaying: null,
            onpointercancel: null,
            onpointerdown: null,
            onpointerenter: null,
            onpointerleave: null,
            onpointermove: null,
            onpointerout: null,
            onpointerover: null,
            onpointerrawupdate: null,
            onpointerup: null,
            onprogress: null,
            onratechange: null,
            onreset: null,
            onresize: null,
            onscroll: null,
            onsearch: null,
            onseeked: null,
            onseeking: null,
            onselect: null,
            onselectionchange: null,
            onselectstart: null,
            onstalled: null,
            onsubmit: null,
            onsuspend: null,
            ontimeupdate: null,
            ontoggle: null,
            onvolumechange: null,
            onwaiting: null,
            onwebkitfullscreenchange: null,
            onwebkitfullscreenerror: null,
            onwheel: null,
            outerHTML: "<canvas></canvas>",
            outerText: "",
            ownerDocument: document,
            parentElement: null,
            parentNode: null,
            part: [],
            prefix: null,
            previousElementSibling: null,
            previousSibling: null,
            scrollHeight: 0,
            scrollLeft: 0,
            scrollTop: 0,
            scrollWidth: 0,
            shadowRoot: null,
            slot: "",
            spellcheck: true,
            alignContent: "",
            alignItems: "",
            alignSelf: "",
            alignmentBaseline: "",
            all: "",

            tabIndex: -1,
            tagName: "CANVAS",
            textContent: "",
            title: "",
            translate: true,
            width: 300,
            style: {},
            toBlob: fun,
            toDataURL: function () {
                return "data:image/png;base64,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"
            },
            getContext: function () {
                fun();
                return Object.assign({
                    style: {},
                    canvas: canvas,
                    direction: "ltr",
                    fillStyle: "#000000",
                    filter: "none",
                    font: "10px sans-serif",
                    globalAlpha: 1,
                    globalCompositeOperation: "source-over",
                    imageSmoothingEnabled: true,
                    imageSmoothingQuality: "low",
                    lineCap: "butt",
                    lineDashOffset: 0,
                    lineJoin: "miter",
                    lineWidth: 1,
                    miterLimit: 10,
                    shadowBlur: 0,
                    shadowColor: "rgba(0, 0, 0, 0)",
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    strokeStyle: "#000000",
                    textAlign: "start",
                    textBaseline: "alphabetic",
                    arc: fun,
                    arcTo: fun,
                    beginPath: fun,
                    bezierCurveTo: fun,
                    clearRect: fun,
                    clip: fun,
                    closePath: fun,
                    createImageData: fun,
                    createLinearGradient: fun,
                    createPattern: fun,
                    createRadialGradient: fun,
                    drawFocusIfNeeded: fun,
                    drawImage: fun,
                    ellipse: fun,
                    fill: fun,
                    fillRect: fun,
                    fillText: fun,
                    getContextAttributes: fun,
                    getImageData: fun,
                    getLineDash: fun,
                    getTransform: fun,
                    isPointInPath: fun,
                    isPointInStroke: fun,
                    lineTo: fun,
                    measureText: fun,
                    moveTo: fun,
                    putImageData: fun,
                    quadraticCurveTo: fun,
                    rect: fun,
                    resetTransform: fun,
                    restore: fun,
                    rotate: fun,
                    save: fun,
                    scale: fun,
                    setLineDash: fun,
                    setTransform: fun,
                    stroke: fun,
                    strokeRect: fun,
                    strokeText: fun,
                    transform: fun,
                    translate: fun,
                    transferControlToOffscreen: function () {
                        return {
                            height: 150,
                            width: 300,
                            convertToBlob: fun,
                            getContext: canvas.getContext,
                            transferToImageBitmap: fun
                        }
                    }
                }, WebGLRenderingContext)
            }
        };
    } catch (e) {
        log("[canvas]创建类canvas出现了点问题 " + e);
    }
    /*定义localStorage sessionStorage函数*/
    ;
    (function () {
        var cache = {};

        function e() {
            this.length = 0
        }
        e.prototype = {
            clear: function () {
                cache = {};
            },
            getItem: function (e) {
                return cache[e]
            },
            key: function (e) {
                var o = 0;
                for (var i in cache) {
                    if (o++ == e) return i
                }
                return undefined
            },
            removeItem: function (e) {
                delete cache[e]
            },
            setItem: function (e, t) {
                cache[e] = t
            }
        }
        Object.prototype.__defineGetter__ && e.prototype.__defineGetter__("length", function () {
            var o = 0;
            for (var i in cache) o++;
            return o
        });
        this.localStorage = this.localStorage || new e;
        this.sessionStorage = this.sessionStorage || new e
    })();

    function log() {
        this.console && this.console.log && console.log.apply(this, arguments);
    }
})();



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





!(function() {
    var exports = {};
    "use strict";
    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.A ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var A = "2.0"
      , __g = {};
    function s() {}
    function i(e) {
        this.t = (2048 & e) >> 11,
        this.s = (1536 & e) >> 9,
        this.i = 511 & e,
        this.h = 511 & e
    }
    function h(e) {
        this.s = (3072 & e) >> 10,
        this.h = 1023 & e
    }
    function a(e) {
        this.a = (3072 & e) >> 10,
        this.c = (768 & e) >> 8,
        this.n = (192 & e) >> 6,
        this.t = 63 & e
    }
    function c(e) {
        this.s = e >> 10 & 3,
        this.i = 1023 & e
    }
    function n() {}
    function e(e) {
        this.a = (3072 & e) >> 10,
        this.c = (768 & e) >> 8,
        this.n = (192 & e) >> 6,
        this.t = 63 & e
    }
    function o(e) {
        this.h = (4095 & e) >> 2,
        this.t = 3 & e
    }
    function r(e) {
        this.s = e >> 10 & 3,
        this.i = e >> 2 & 255,
        this.t = 3 & e
    }
    s.prototype.e = function(e) {
        e.o = !1
    }
    ,
    i.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            e.r[this.s] = this.i;
            break;
        case 1:
            e.r[this.s] = e.k[this.h]
        }
    }
    ,
    h.prototype.e = function(e) {
        e.k[this.h] = e.r[this.s]
    }
    ,
    a.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            e.r[this.a] = e.r[this.c] + e.r[this.n];
            break;
        case 1:
            e.r[this.a] = e.r[this.c] - e.r[this.n];
            break;
        case 2:
            e.r[this.a] = e.r[this.c] * e.r[this.n];
            break;
        case 3:
            e.r[this.a] = e.r[this.c] / e.r[this.n];
            break;
        case 4:
            e.r[this.a] = e.r[this.c] % e.r[this.n];
            break;
        case 5:
            e.r[this.a] = e.r[this.c] == e.r[this.n];
            break;
        case 6:
            e.r[this.a] = e.r[this.c] >= e.r[this.n];
            break;
        case 7:
            e.r[this.a] = e.r[this.c] || e.r[this.n];
            break;
        case 8:
            e.r[this.a] = e.r[this.c] && e.r[this.n];
            break;
        case 9:
            e.r[this.a] = e.r[this.c] !== e.r[this.n];
            break;
        case 10:
            e.r[this.a] = t(e.r[this.c]);
            break;
        case 11:
            e.r[this.a] = e.r[this.c]in e.r[this.n];
            break;
        case 12:
            e.r[this.a] = e.r[this.c] > e.r[this.n];
            break;
        case 13:
            e.r[this.a] = -e.r[this.c];
            break;
        case 14:
            e.r[this.a] = e.r[this.c] < e.r[this.n];
            break;
        case 15:
            e.r[this.a] = e.r[this.c] & e.r[this.n];
            break;
        case 16:
            e.r[this.a] = e.r[this.c] ^ e.r[this.n];
            break;
        case 17:
            e.r[this.a] = e.r[this.c] << e.r[this.n];
            break;
        case 18:
            e.r[this.a] = e.r[this.c] >>> e.r[this.n];
            break;
        case 19:
            e.r[this.a] = e.r[this.c] | e.r[this.n];
            break;
        case 20:
            e.r[this.a] = !e.r[this.c]
        }
    }
    ,
    c.prototype.e = function(e) {
        e.Q.push(e.C),
        e.B.push(e.k),
        e.C = e.r[this.s],
        e.k = [];
        for (var t = 0; t < this.i; t++)
            e.k.unshift(e.f.pop());
        e.g.push(e.f),
        e.f = []
    }
    ,
    n.prototype.e = function(e) {
        e.C = e.Q.pop(),
        e.k = e.B.pop(),
        e.f = e.g.pop()
    }
    ,
    e.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            e.u = e.r[this.a] >= e.r[this.c];
            break;
        case 1:
            e.u = e.r[this.a] <= e.r[this.c];
            break;
        case 2:
            e.u = e.r[this.a] > e.r[this.c];
            break;
        case 3:
            e.u = e.r[this.a] < e.r[this.c];
            break;
        case 4:
            e.u = e.r[this.a] == e.r[this.c];
            break;
        case 5:
            e.u = e.r[this.a] != e.r[this.c];
            break;
        case 6:
            e.u = e.r[this.a];
            break;
        case 7:
            e.u = !e.r[this.a]
        }
    }
    ,
    o.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            e.C = this.h;
            break;
        case 1:
            e.u && (e.C = this.h);
            break;
        case 2:
            e.u || (e.C = this.h);
            break;
        case 3:
            e.C = this.h,
            e.w = null
        }
        e.u = !1
    }
    ,
    r.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            for (var t = [], n = 0; n < this.i; n++)
                t.unshift(e.f.pop());
            e.r[3] = e.r[this.s](t[0], t[1]);
            break;
        case 1:
            for (var r = e.f.pop(), o = [], i = 0; i < this.i; i++)
                o.unshift(e.f.pop());
            e.r[3] = e.r[this.s][r](o[0], o[1]);
            break;
        case 2:
            for (var a = [], c = 0; c < this.i; c++)
                a.unshift(e.f.pop());
            e.r[3] = new e.r[this.s](a[0],a[1])
        }
    }
    ;
    var k = function(e) {
        for (var t = 66, n = [], r = 0; r < e.length; r++) {
            var o = 24 ^ e.charCodeAt(r) ^ t;
            n.push(String.fromCharCode(o)),
            t = o
        }
        return n.join("")
    };
    function Q(e) {
        this.t = (4095 & e) >> 10,
        this.s = (1023 & e) >> 8,
        this.i = 1023 & e,
        this.h = 63 & e
    }
    function C(e) {
        this.t = (4095 & e) >> 10,
        this.a = (1023 & e) >> 8,
        this.c = (255 & e) >> 6
    }
    function B(e) {
        this.s = (3072 & e) >> 10,
        this.h = 1023 & e
    }
    function f(e) {
        this.h = 4095 & e
    }
    function g(e) {
        this.s = (3072 & e) >> 10
    }
    function u(e) {
        this.h = 4095 & e
    }
    function w(e) {
        this.t = (3840 & e) >> 8,
        this.s = (192 & e) >> 6,
        this.i = 63 & e
    }
    function G() {
        this.r = [0, 0, 0, 0],
        this.C = 0,
        this.Q = [],
        this.k = [],
        this.B = [],
        this.f = [],
        this.g = [],
        this.u = !1,
        this.G = [],
        this.b = [],
        this.o = !1,
        this.w = null,
        this.U = null,
        this.F = [],
        this.R = 0,
        this.J = {
            0: s,
            1: i,
            2: h,
            3: a,
            4: c,
            5: n,
            6: e,
            7: o,
            8: r,
            9: Q,
            10: C,
            11: B,
            12: f,
            13: g,
            14: u,
            15: w
        }
    }
    Q.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            e.f.push(e.r[this.s]);
            break;
        case 1:
            e.f.push(this.i);
            break;
        case 2:
            e.f.push(e.k[this.h]);
            break;
        case 3:
            e.f.push(k(e.b[this.h]))
        }
    }
    ,
    C.prototype.e = function(A) {
        switch (this.t) {
        case 0:
            var t = A.f.pop();
            A.r[this.a] = A.r[this.c][t];
            break;
        case 1:
            var s = A.f.pop()
              , i = A.f.pop();
            A.r[this.c][s] = i;
            break;
        case 2:
            var h = A.f.pop();
            A.r[this.a] = eval(h)
        }
    }
    ,
    B.prototype.e = function(e) {
        e.r[this.s] = k(e.b[this.h])
    }
    ,
    f.prototype.e = function(e) {
        e.w = this.h
    }
    ,
    g.prototype.e = function(e) {
        throw e.r[this.s]
    }
    ,
    u.prototype.e = function(e) {
        var t = this
          , n = [0];
        e.k.forEach(function(e) {
            n.push(e)
        });
        var r = function(r) {
            var o = new G;
            return o.k = n,
            o.k[0] = r,
            o.v(e.G, t.h, e.b, e.F),
            o.r[3]
        };
        r.toString = function() {
            return "() { [native code] }"
        }
        ,
        e.r[3] = r
    }
    ,
    w.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            for (var t = {}, n = 0; n < this.i; n++) {
                var r = e.f.pop();
                t[e.f.pop()] = r
            }
            e.r[this.s] = t;
            break;
        case 1:
            for (var o = [], i = 0; i < this.i; i++)
                o.unshift(e.f.pop());
            e.r[this.s] = o
        }
    }
    ,
    G.prototype.D = function(e) {
        for (var t = atob(e), n = t.charCodeAt(0) << 8 | t.charCodeAt(1), r = [], o = 2; o < n + 2; o += 2)
            r.push(t.charCodeAt(o) << 8 | t.charCodeAt(o + 1));
        this.G = r;
        for (var i = [], a = n + 2; a < t.length; ) {
            var c = t.charCodeAt(a) << 8 | t.charCodeAt(a + 1)
              , s = t.slice(a + 2, a + 2 + c);
            i.push(s),
            a += c + 2
        }
        this.b = i
    }
    ,
    G.prototype.v = function(e, t, n) {
        for (t = t || 0,
        n = n || [],
        this.C = t,
        "string" == typeof e ? this.D(e) : (this.G = e,
        this.b = n),
        this.o = !0,
        this.R = Date.now(); this.o; ) {
            var r = this.G[this.C++];
            if ("number" != typeof r)
                break;
            var o = Date.now();
            if (500 < o - this.R)
                return;
            this.R = o;
            //try {
                this.e(r)
            //} catch (e) {
               // this.U = e,
               // this.w && (this.C = this.w)
            //}
        }
    }
    ,
    G.prototype.e = function(e) {
        var t = (61440 & e) >> 12;
        new this.J[t](e).e(this)
    }
    ,
    "undefined" != typeof window && (new G).v("AxjgB5MAnACoAJwBpAAAABAAIAKcAqgAMAq0AzRJZAZwUpwCqACQACACGAKcBKAAIAOcBagAIAQYAjAUGgKcBqFAuAc5hTSHZAZwqrAIGgA0QJEAJAAYAzAUGgOcCaFANRQ0R2QGcOKwChoANECRACQAsAuQABgDnAmgAJwMgAGcDYwFEAAzBmAGcSqwDhoANECRACQAGAKcD6AAGgKcEKFANEcYApwRoAAxB2AGcXKwEhoANECRACQAGAKcE6AAGgKcFKFANEdkBnGqsBUaADRAkQAkABgCnBagAGAGcdKwFxoANECRACQAGAKcGKAAYAZx+rAZGgA0QJEAJAAYA5waoABgBnIisBsaADRAkQAkABgCnBygABoCnB2hQDRHZAZyWrAeGgA0QJEAJAAYBJwfoAAwFGAGcoawIBoANECRACQAGAOQALAJkAAYBJwfgAlsBnK+sCEaADRAkQAkABgDkACwGpAAGAScH4AJbAZy9rAiGgA0QJEAJACwI5AAGAScH6AAkACcJKgAnCWgAJwmoACcJ4AFnA2MBRAAMw5gBnNasCgaADRAkQAkABgBEio0R5EAJAGwKSAFGACcKqAAEgM0RCQGGAYSATRFZAZzshgAtCs0QCQAGAYSAjRFZAZz1hgAtCw0QCQAEAAgB7AtIAgYAJwqoAASATRBJAkYCRIANEZkBnYqEAgaBxQBOYAoBxQEOYQ0giQKGAmQABgAnC6ABRgBGgo0UhD/MQ8zECALEAgaBxQBOYAoBxQEOYQ0gpEAJAoYARoKNFIQ/zEPkAAgChgLGgkUATmBkgAaAJwuhAUaCjdQFAg5kTSTJAsQCBoHFAE5gCgHFAQ5hDSCkQAkChgBGgo0UhD/MQ+QACAKGAsaCRQCOYGSABoAnC6EBRoKN1AUEDmRNJMkCxgFGgsUPzmPkgAaCJwvhAU0wCQFGAUaCxQGOZISPzZPkQAaCJwvhAU0wCQFGAUaCxQMOZISPzZPkQAaCJwvhAU0wCQFGAUaCxQSOZISPzZPkQAaCJwvhAU0wCQFGAkSAzRBJAlz/B4FUAAAAwUYIAAIBSITFQkTERwABi0GHxITAAAJLwMSGRsXHxMZAAk0Fw8HFh4NAwUABhU1EBceDwAENBcUEAAGNBkTGRcBAAFKAAkvHg4PKz4aEwIAAUsACDIVHB0QEQ4YAAsuAzs7AAoPKToKDgAHMx8SGQUvMQABSAALORoVGCQgERcCAxoACAU3ABEXAgMaAAsFGDcAERcCAxoUCgABSQAGOA8LGBsPAAYYLwsYGw8AAU4ABD8QHAUAAU8ABSkbCQ4BAAFMAAktCh8eDgMHCw8AAU0ADT4TGjQsGQMaFA0FHhkAFz4TGjQsGQMaFA0FHhk1NBkCHgUbGBEPAAFCABg9GgkjIAEmOgUHDQ8eFSU5DggJAwEcAwUAAUMAAUAAAUEADQEtFw0FBwtdWxQTGSAACBwrAxUPBR4ZAAkqGgUDAwMVEQ0ACC4DJD8eAx8RAAQ5GhUYAAFGAAAABjYRExELBAACWhgAAVoAQAg/PTw0NxcQPCQ5C3JZEBs9fkcnDRcUAXZia0Q4EhQgXHojMBY3MWVCNT0uDhMXcGQ7AUFPHigkQUwQFkhaAkEACjkTEQspNBMZPC0ABjkTEQsrLQ==");
    var b = function(e) {
        return __g._encrypt(encodeURIComponent(e))
    };
    window.ENCRYPT_VERSION = A,
    window.zzz = b;
    
})()


//window.zzz("client_id=c3cef7c66a1843f8b3a9e6a1e3160e20&grant_type=password&timestamp=1595834079968&source=com.zhihu.web&signature=301fbbcbb9517adf5170e9c2aa521dc9209ae6b4&username=%2B8615233332561&password=1231232&captcha=&lang=cn&utm_source=&ref_source=other_https%3A%2F%2Fwww.zhihu.com%2Fsignin%3Fnext%3D%252F")