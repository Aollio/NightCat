!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.NIM = t() : e.NIM = t()
}(this, function () {
    return function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {exports: {}, id: r, loaded: !1};
            return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function (e, t, n) {
          
        n(50), e.exports = n(113)
    }, function (e, t, n) {
          
        var r = n(13), i = n(20), o = n(36), s = n(26);
        n(62);
        var a = n(4), c = n(37), u = c.getGlobal(), l = /\s+/;
        c.shouldDisplayInstallFlashHint = function () {
            var e = r.name.toLowerCase();
            if ("ie" === e) {
                var t = +r.version || 0;
                return t = Math.floor(t), 7 === t && !i.Transport.flashsocket.check()
            }
            return !1
        }, c.deduplicate = function (e) {
            var t = [];
            return e.forEach(function (e) {
                t.indexOf(e) === -1 && t.push(e)
            }), t
        }, c.capFirstLetter = function (e) {
            return e ? (e = "" + e, e.slice(0, 1).toUpperCase() + e.slice(1)) : ""
        }, c.guid = function () {
            var e = function () {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            };
            return function () {
                return e() + e() + e() + e() + e() + e() + e() + e()
            }
        }(), c.extend = function (e, t, n) {
            for (var r in t) "undefined" != typeof e[r] && n !== !0 || (e[r] = t[r])
        }, c.filterObj = function (e, t) {
            var n = {};
            return c.isString(t) && (t = t.split(l)), t.forEach(function (t) {
                e.hasOwnProperty(t) && (n[t] = e[t])
            }), n
        }, c.simpleClone = function (e) {
            return JSON.parse(JSON.stringify(e))
        }, c.copy = function (e, t) {
            return t = t || {}, e ? (Object.keys(e).forEach(function (n) {
                c.exist(e[n]) && (t[n] = e[n])
            }), t) : t
        }, c.copyWithNull = function (e, t) {
            return t = t || {}, e ? (Object.keys(e).forEach(function (n) {
                (c.exist(e[n]) || c.isnull(e[n])) && (t[n] = e[n])
            }), t) : t
        }, c.findObjIndexInArray = function (e, t) {
            e = e || [];
            var n = t.keyPath || "id", r = -1;
            return e.some(function (e, i) {
                if (s(e, n) === t.value) return r = i, !0
            }), r
        }, c.findObjInArray = function (e, t) {
            var n = c.findObjIndexInArray(e, t);
            return n === -1 ? null : e[n]
        }, c.mergeObjArray = function () {
            var e = [], t = [].slice.call(arguments, 0, -1), n = arguments[arguments.length - 1];
            c.isArray(n) && (t.push(n), n = {});
            var r = n.keyPath = n.keyPath || "id";
            for (n.sortPath = n.sortPath || r; !e.length && t.length;) e = t.shift() || [], e = e.slice(0);
            var i;
            return t.forEach(function (t) {
                t && t.forEach(function (t) {
                    i = c.findObjIndexInArray(e, {
                        keyPath: r,
                        value: s(t, r)
                    }), i !== -1 ? e[i] = c.merge({}, e[i], t) : e.push(t)
                })
            }), n.notSort || (e = c.sortObjArray(e, n)), e
        }, c.cutObjArray = function (e) {
            var t = e.slice(0), n = arguments.length, r = [].slice.call(arguments, 1, n - 1), i = arguments[n - 1];
            c.isObject(i) || (r.push(i), i = {});
            var o, a = i.keyPath = i.keyPath || "id";
            return r.forEach(function (e) {
                c.isArray(e) || (e = [e]), e.forEach(function (e) {
                    e && (i.value = s(e, a), o = c.findObjIndexInArray(t, i), o !== -1 && t.splice(o, 1))
                })
            }), t
        }, c.sortObjArray = function (e, t) {
            t = t || {};
            var n = t.sortPath || "id";
            o.insensitive = !!t.insensitive;
            var r, i, a, u = !!t.desc;
            return a = c.isFunction(t.compare) ? t.compare : function (e, t) {
                return r = s(e, n), i = s(t, n), u ? o(i, r) : o(r, i)
            }, e.sort(a)
        }, c.emptyFunc = function () {
        }, c.isEmptyFunc = function (e) {
            return e === c.emptyFunc
        }, c.notEmptyFunc = function (e) {
            return e !== c.emptyFunc
        }, c.splice = function (e, t, n) {
            return [].splice.call(e, t, n)
        }, c.reshape2d = function (e, t) {
            if (Array.isArray(e)) {
                c.verifyParamType("type", t, "number");
                var n = e.length;
                if (n <= t) return [e];
                for (var r = Math.ceil(n / t), i = [], o = 0; o < r; o++) i.push(e.slice(o * t, (o + 1) * t));
                return i
            }
            return e
        }, c.flatten2d = function (e) {
            if (Array.isArray(e)) {
                var t = [];
                return e.forEach(function (e) {
                    t = t.concat(e)
                }), t
            }
            return e
        }, c.dropArrayDuplicates = function (e) {
            if (Array.isArray(e)) {
                for (var t = {}, n = []; e.length > 0;) {
                    var r = e.shift();
                    t[r] = !0
                }
                for (var i in t) t[i] === !0 && n.push(i);
                return n
            }
            return e
        }, c.onError = function (e) {
            throw new a(e)
        }, c.verifyParamPresent = function (e, t, n) {
            n = n || "";
            var r = !1;
            switch (c.typeOf(t)) {
                case"undefined":
                case"null":
                    r = !0;
                    break;
                case"string":
                    "" === t && (r = !0);
                    break;
                case"object":
                    Object.keys(t).length || (r = !0);
                    break;
                case"array":
                    t.length ? t.some(function (e) {
                        if (c.notexist(e)) return r = !0, !0
                    }) : r = !0
            }
            r && c.onParamAbsent(n + e)
        }, c.onParamAbsent = function (e) {
            c.onParamError('缺少参数"' + e + '", 请确保参数不是 空字符串、空对象、空数组、null或undefined, 或者数组的内容不是 null/undefined')
        }, c.verifyParamAbsent = function (e, t, n) {
            n = n || "", void 0 !== t && c.onParamPresent(n + e)
        }, c.onParamPresent = function (e) {
            c.onParamError('多余的参数"' + e + '"')
        }, c.verifyParamType = function (e, t, n) {
            var r = c.typeOf(t).toLowerCase();
            c.isArray(n) || (n = [n]), n = n.map(function (e) {
                return e.toLowerCase()
            });
            var i = !0;
            switch (n.indexOf(r) === -1 && (i = !1), r) {
                case"number":
                    isNaN(t) && (i = !1)
            }
            i || c.onParamInvalidType(e, n)
        }, c.onParamInvalidType = function (e, t, n) {
            n = n || "", c.isArray(t) ? (t = t.map(function (e) {
                return '"' + e + '"'
            }), t = t.join(", ")) : t = '"' + t + '"', c.onParamError('参数"' + n + e + '"类型错误, 合法的类型包括: [' + t + "]")
        }, c.verifyParamValid = function (e, t, n) {
            c.isArray(n) || (n = [n]), n.indexOf(t) === -1 && c.onParamInvalidValue(e, n)
        }, c.onParamInvalidValue = function (e, t) {
            c.isArray(t) || (t = [t]), t = t.map(function (e) {
                return '"' + e + '"'
            }), c.isArray(t) && (t = t.join(", ")), c.onParamError('参数"' + e + '"值错误, 合法的值包括: [' + t + "]")
        }, c.verifyParamMin = function (e, t, n) {
            t < n && c.onParamError("参数" + e + "的值不能小于" + n)
        }, c.verifyParamMax = function (e, t, n) {
            t > n && c.onParamError("参数" + e + "的值不能大于" + n)
        }, c.verifyArrayMax = function (e, t, n) {
            t.length > n && c.onParamError("参数" + e + "的长度不能大于" + n)
        }, c.verifyEmail = function () {
            var e = /^\S+@\S+$/;
            return function (t, n) {
                e.test(n) || c.onParamError("参数" + t + "邮箱格式错误, 合法格式必须包含@符号, @符号前后至少要各有一个字符")
            }
        }(), c.verifyTel = function () {
            var e = /^[+\-()\d]+$/;
            return function (t, n) {
                e.test(n) || c.onParamError("参数" + t + "电话号码格式错误, 合法字符包括+、-、英文括号和数字")
            }
        }(), c.verifyBirth = function () {
            var e = /^(\d{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
            return function (t, n) {
                e.test(n) || c.onParamError("参数" + t + '生日格式错误, 合法为"yyyy-MM-dd"')
            }
        }(), c.onParamError = function (e) {
            c.onError(e)
        }, c.verifyOptions = function (e, t, n, r) {
            if (e = e || {}, t && (c.isString(t) && (t = t.split(l)), c.isArray(t))) {
                n = void 0 === n || !!n;
                var i = n ? c.verifyParamPresent : c.verifyParamAbsent;
                t.forEach(function (t) {
                    i.call(c, t, e[t], r)
                })
            }
            return e
        }, c.verifyParamAtLeastPresentOne = function (e, t) {
            if (t && (c.isString(t) && (t = t.split(l)), c.isArray(t))) {
                var n = t.some(function (t) {
                    return c.exist(e[t])
                });
                n || c.onParamError("以下参数[" + t.join(", ") + "]至少需要传入一个")
            }
        }, c.verifyParamPresentJustOne = function (e, t) {
            if (t && (c.isString(t) && (t = t.split(l)), c.isArray(t))) {
                var n = t.reduce(function (t, n) {
                    return c.exist(e[n]) && t++, t
                }, 0);
                1 !== n && c.onParamError("以下参数[" + t.join(", ") + "]必须且只能传入一个")
            }
        }, c.verifyBooleanWithDefault = function (e, t, n, r) {
            c.undef(n) && (n = !0), l.test(t) && (t = t.split(l)), c.isArray(t) ? t.forEach(function (t) {
                c.verifyBooleanWithDefault(e, t, n, r)
            }) : "undefined" == typeof e[t] ? e[t] = n : c.isBoolean(e[t]) || c.onParamInvalidType(t, "boolean", r)
        }, c.verifyFileInput = function (e) {
            return c.verifyParamPresent("fileInput", e), c.isString(e) && (e = document.getElementById(e), e || c.onParamError("找不到要上传的文件对应的input, 请检查fileInput id")), e.tagName && "input" === e.tagName.toLowerCase() && "file" === e.type.toLowerCase() || c.onParamError("请提供正确的 fileInput, 必须为 file 类型的 input 节点"), e
        }, c.verifyFileType = function (e) {
            c.verifyParamValid("type", e, c.validFileTypes)
        }, c.verifyCallback = function (e, t) {
            l.test(t) && (t = t.split(l)), c.isArray(t) ? t.forEach(function (t) {
                c.verifyCallback(e, t)
            }) : e[t] ? c.isFunction(e[t]) || c.onParamInvalidType(t, "function") : e[t] = c.emptyFunc
        }, c.verifyFileUploadCallback = function (e) {
            c.verifyCallback(e, "uploadprogress uploaddone uploaderror uploadcancel")
        }, c.validFileTypes = ["image", "audio", "video", "file"], c.validFileExts = {
            image: ["bmp", "gif", "jpg", "jpeg", "jng", "png", "webp"],
            audio: ["mp3", "wav", "aac", "wma", "wmv", "amr", "mp2", "flac", "vorbis", "ac3"],
            video: ["mp4", "rm", "rmvb", "wmv", "avi", "mpg", "mpeg"]
        }, c.filterFiles = function (e, t) {
            t = t.toLowerCase();
            var n, r, i, o = "file" === t, s = [];
            return [].forEach.call(e, function (e) {
                if (o) s.push(e); else if (n = e.name.slice(e.name.lastIndexOf(".") + 1), r = e.type.split("/"), r[0] && r[1]) {
                    i = r[0].toLowerCase();
                    var a = !1;
                    a = i === t || c.validFileExts[t].indexOf(n) !== -1, a && s.push(e)
                }
            }), s
        };
        var f = c.supportFormData = c.notundef(u.FormData);
        c.getFileName = function () {
            return function (e) {
                return e = c.verifyFileInput(e), f ? e.files[0].name : e.value.slice(e.value.lastIndexOf("\\") + 1)
            }
        }(), c.sizeText = function () {
            var e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "BB"];
            return function (t) {
                var n, r = 0;
                do {
                    t = Math.floor(100 * t) / 100;
                    var i = e[r];
                    n = t + i, t /= 1024, r++
                } while (t > 1);
                return n
            }
        }(), c.promises2cmds = function (e) {
            return e.map(function (e) {
                return e.cmd
            })
        }, c.objs2accounts = function (e) {
            return e.map(function (e) {
                return e.account
            })
        }, c.teams2ids = function (e) {
            return e.map(function (e) {
                return e.teamId
            })
        }, c.objs2ids = function (e) {
            return e.map(function (e) {
                return e.id
            })
        }, c.getMaxUpdateTime = function (e) {
            var t = e.map(function (e) {
                return +e.updateTime
            });
            return Math.max.apply(Math, t)
        }, c.genCheckUniqueFunc = function (e, t) {
            var n = [], r = {};
            return e = e || "id", t = t || 1e3, function (i) {
                var o;
                return n.length >= t && (o = n.shift(), delete r[o]), o = s(i, e), !r[o] && (r[o] = !0, n.push(o), !0)
            }
        }, e.exports = c, n(65)
    }, function (e, t, n) {
        (function (t, r) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.1.0
	 */
            !function (t, n) {
                e.exports = n()
            }(this, function () {
                  

                function e(e) {
                    return "function" == typeof e || "object" == typeof e && null !== e
                }

                function i(e) {
                    return "function" == typeof e
                }

                function o(e) {
                    G = e
                }

                function s(e) {
                    K = e
                }

                function a() {
                    return function () {
                        return t.nextTick(d)
                    }
                }

                function c() {
                    return "undefined" != typeof z ? function () {
                        z(d)
                    } : f()
                }

                function u() {
                    var e = 0, t = new Q(d), n = document.createTextNode("");
                    return t.observe(n, {characterData: !0}), function () {
                        n.data = e = ++e % 2
                    }
                }

                function l() {
                    var e = new MessageChannel;
                    return e.port1.onmessage = d, function () {
                        return e.port2.postMessage(0)
                    }
                }

                function f() {
                    var e = setTimeout;
                    return function () {
                        return e(d, 1)
                    }
                }

                function d() {
                    for (var e = 0; e < J; e += 2) {
                        var t = ne[e], n = ne[e + 1];
                        t(n), ne[e] = void 0, ne[e + 1] = void 0
                    }
                    J = 0
                }

                function m() {
                    try {
                        var e = n(80);
                        return z = e.runOnLoop || e.runOnContext, c()
                    } catch (t) {
                        return f()
                    }
                }

                function p(e, t) {
                    var n = arguments, r = this, i = new this.constructor(h);
                    void 0 === i[ie] && F(i);
                    var o = r._state;
                    return o ? !function () {
                        var e = n[o - 1];
                        K(function () {
                            return A(o, i, e, r._result)
                        })
                    }() : _(r, i, e, t), i
                }

                function y(e) {
                    var t = this;
                    if (e && "object" == typeof e && e.constructor === t) return e;
                    var n = new t(h);
                    return w(n, e), n
                }

                function h() {
                }

                function g() {
                    return new TypeError("You cannot resolve a promise with itself")
                }

                function v() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }

                function b(e) {
                    try {
                        return e.then
                    } catch (t) {
                        return ce.error = t, ce
                    }
                }

                function M(e, t, n, r) {
                    try {
                        e.call(t, n, r)
                    } catch (i) {
                        return i
                    }
                }

                function T(e, t, n) {
                    K(function (e) {
                        var r = !1, i = M(n, t, function (n) {
                            r || (r = !0, t !== n ? w(e, n) : C(e, n))
                        }, function (t) {
                            r || (r = !0, x(e, t))
                        }, "Settle: " + (e._label || " unknown promise"));
                        !r && i && (r = !0, x(e, i))
                    }, e)
                }

                function k(e, t) {
                    t._state === se ? C(e, t._result) : t._state === ae ? x(e, t._result) : _(t, void 0, function (t) {
                        return w(e, t)
                    }, function (t) {
                        return x(e, t)
                    })
                }

                function S(e, t, n) {
                    t.constructor === e.constructor && n === p && t.constructor.resolve === y ? k(e, t) : n === ce ? (x(e, ce.error), ce.error = null) : void 0 === n ? C(e, t) : i(n) ? T(e, t, n) : C(e, t)
                }

                function w(t, n) {
                    t === n ? x(t, g()) : e(n) ? S(t, n, b(n)) : C(t, n)
                }

                function O(e) {
                    e._onerror && e._onerror(e._result), I(e)
                }

                function C(e, t) {
                    e._state === oe && (e._result = t, e._state = se, 0 !== e._subscribers.length && K(I, e))
                }

                function x(e, t) {
                    e._state === oe && (e._state = ae, e._result = t, K(O, e))
                }

                function _(e, t, n, r) {
                    var i = e._subscribers, o = i.length;
                    e._onerror = null, i[o] = t, i[o + se] = n, i[o + ae] = r, 0 === o && e._state && K(I, e)
                }

                function I(e) {
                    var t = e._subscribers, n = e._state;
                    if (0 !== t.length) {
                        for (var r = void 0, i = void 0, o = e._result, s = 0; s < t.length; s += 3) r = t[s], i = t[s + n], r ? A(n, r, i, o) : i(o);
                        e._subscribers.length = 0
                    }
                }

                function P() {
                    this.error = null
                }

                function E(e, t) {
                    try {
                        return e(t)
                    } catch (n) {
                        return ue.error = n, ue
                    }
                }

                function A(e, t, n, r) {
                    var o = i(n), s = void 0, a = void 0, c = void 0, u = void 0;
                    if (o) {
                        if (s = E(n, r), s === ue ? (u = !0, a = s.error, s.error = null) : c = !0, t === s) return void x(t, v())
                    } else s = r, c = !0;
                    t._state !== oe || (o && c ? w(t, s) : u ? x(t, a) : e === se ? C(t, s) : e === ae && x(t, s))
                }

                function j(e, t) {
                    try {
                        t(function (t) {
                            w(e, t)
                        }, function (t) {
                            x(e, t)
                        })
                    } catch (n) {
                        x(e, n)
                    }
                }

                function R() {
                    return le++
                }

                function F(e) {
                    e[ie] = le++, e._state = void 0, e._result = void 0, e._subscribers = []
                }

                function N(e, t) {
                    this._instanceConstructor = e, this.promise = new e(h), this.promise[ie] || F(this.promise), V(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? C(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && C(this.promise, this._result))) : x(this.promise, U())
                }

                function U() {
                    return new Error("Array Methods must be provided an Array")
                }

                function D(e) {
                    return new N(this, e).promise
                }

                function L(e) {
                    var t = this;
                    return new t(V(e) ? function (n, r) {
                        for (var i = e.length, o = 0; o < i; o++) t.resolve(e[o]).then(n, r)
                    } : function (e, t) {
                        return t(new TypeError("You must pass an array to race."))
                    })
                }

                function B(e) {
                    var t = this, n = new t(h);
                    return x(n, e), n
                }

                function q() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function W() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }

                function H(e) {
                    this[ie] = R(), this._result = this._state = void 0, this._subscribers = [], h !== e && ("function" != typeof e && q(), this instanceof H ? j(this, e) : W())
                }

                function $() {
                    var e = void 0;
                    if ("undefined" != typeof r) e = r; else if ("undefined" != typeof self) e = self; else try {
                        e = Function("return this")()
                    } catch (t) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var n = e.Promise;
                    if (n) {
                        var i = null;
                        try {
                            i = Object.prototype.toString.call(n.resolve())
                        } catch (t) {
                        }
                        if ("[object Promise]" === i && !n.cast) return
                    }
                    e.Promise = H
                }

                var X = void 0;
                X = Array.isArray ? Array.isArray : function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                };
                var V = X, J = 0, z = void 0, G = void 0, K = function (e, t) {
                        ne[J] = e, ne[J + 1] = t, J += 2, 2 === J && (G ? G(d) : re())
                    }, Y = "undefined" != typeof window ? window : void 0, Z = Y || {},
                    Q = Z.MutationObserver || Z.WebKitMutationObserver,
                    ee = "undefined" == typeof self && "undefined" != typeof t && "[object process]" === {}.toString.call(t),
                    te = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    ne = new Array(1e3), re = void 0;
                re = ee ? a() : Q ? u() : te ? l() : void 0 === Y ? m() : f();
                var ie = Math.random().toString(36).substring(16), oe = void 0, se = 1, ae = 2, ce = new P, ue = new P,
                    le = 0;
                return N.prototype._enumerate = function () {
                    for (var e = this.length, t = this._input, n = 0; this._state === oe && n < e; n++) this._eachEntry(t[n], n)
                }, N.prototype._eachEntry = function (e, t) {
                    var n = this._instanceConstructor, r = n.resolve;
                    if (r === y) {
                        var i = b(e);
                        if (i === p && e._state !== oe) this._settledAt(e._state, t, e._result); else if ("function" != typeof i) this._remaining--, this._result[t] = e; else if (n === H) {
                            var o = new n(h);
                            S(o, e, i), this._willSettleAt(o, t)
                        } else this._willSettleAt(new n(function (t) {
                            return t(e)
                        }), t)
                    } else this._willSettleAt(r(e), t)
                }, N.prototype._settledAt = function (e, t, n) {
                    var r = this.promise;
                    r._state === oe && (this._remaining--, e === ae ? x(r, n) : this._result[t] = n), 0 === this._remaining && C(r, this._result)
                }, N.prototype._willSettleAt = function (e, t) {
                    var n = this;
                    _(e, void 0, function (e) {
                        return n._settledAt(se, t, e)
                    }, function (e) {
                        return n._settledAt(ae, t, e)
                    })
                }, H.all = D, H.race = L, H.resolve = y, H.reject = B, H._setScheduler = o, H._setAsap = s, H._asap = K, H.prototype = {
                    constructor: H,
                    then: p,
                    "catch": function (e) {
                        return this.then(null, e)
                    }
                }, H.polyfill = $, H.Promise = H, H
            })
        }).call(t, n(10), function () {
            return this
        }())
    }, function (e, t, n) {
          

        function r(e) {
            var t = this;
            u.verifyOptions(e, "appKey account token"), u.verifyCallback(e, ["onconnect", "onerror", "onwillreconnect", "ondisconnect", "onloginportschange", "onmyinfo", "onblacklist", "onmutelist", "onfriends", "onusers", "onrobots", "onteams", "onsessions", "onRoamingMsgs", "onOfflineMsgs", "onofflinefiltermsgs", "onroamingsysmsgs", "onofflinesysmsgs", "onofflinefiltersysmsgs", "onofflinecustomsysmsgs", "onofflinefiltercustomsysmsgs", "onsysmsgunread", "onsyncdone", "onteammembers", "onsyncteammembersdone", "onmsg", "onsysmsg", "oncustomsysmsg", "onupdatemyinfo", "onupdateuser", "onupdateteammember", "onCreateTeam", "onUpdateTeam", "onAddTeamMembers", "onRemoveTeamMembers", "onUpdateTeamManagers", "onDismissTeam", "onTransferTeam", "onUpdateTeamMembersMute", "onupdatesession", "onupdatesysmsgunread", "onupdatesysmsg", "onsynccreateteam", "onsyncmarkinblacklist", "onsyncmarkinmutelist", "onsyncfriendaction", "shouldIgnoreNotification", "onPushNotificationMultiportConfig", "onPushNotificationMultiportConfigUpdate"]), t.db = e.api.db = new o({logger: e.logger}), s.call(t, e)
        }

        var i = n(2).Promise, o = n(8), s = n(11), a = n(4), c = n(6), u = n(1), l = u.undef, f = n(41),
            d = n(16).getInstance("IM"), m = n(23), p = s.fn, y = r.fn = r.prototype = Object.create(p);
        y.init = function () {
            var e = this;
            p.init.call(e), e.socketUrls = [], e.parser = d, e.syncing = !0, e.hasSynced = !1, e.hasSyncedTeamMembers = !1, e.syncPromiseArray = [], e.syncResult = {}, e.syncTeamMembersPromiseArray = [], e.syncTeamMembersResult = {}, e.timetags = {}, e.sysMsgUnread = m.completeUnread({}), e.resetUnsettledMsgs(), e.resetUnsettledSysMsgs(), e.msgPromise = i.resolve(), e.sysMsgPromise = i.resolve(), e.sessionSet = {}, e.msgReceiptTasks = {}, e.userSet = {}, e.pushNotificationMultiportConfig = f.getDefaultConfig()
        }, y.reset = function () {
            var e = this;
            p.reset.call(e);
            var t = e.options;
            e.db.reset(t.db), l(t.lbsUrl) && (t.lbsUrl = c.lbsUrl), e.resetAutoMarkRead()
        }, y.resetAutoMarkRead = function () {
            var e = this.options;
            u.verifyBooleanWithDefault(e, "autoMarkRead", !0)
        }, y.resetUnsettledMsgs = function () {
            var e = this;
            e.unhandledMsgs = [], e.unupdatedMsgs = []
        }, y.resetUnsettledSysMsgs = function () {
            var e = this;
            e.unhandledSysMsgs = [], e.unupdatedSysMsgs = []
        }, y.packetFromSync = function (e) {
            return !e.obj || !!e.obj.sync
        }, y.onDBError = function (e) {
            var t = a.newDBError();
            t.event = e, this.notifyError(t)
        }, e.exports = r, n(144), n(142), n(156), n(159), n(147), n(153), n(158), n(152), n(148), n(150), n(149), n(157), n(154), n(155), n(143), n(146), n(145)
    }, function (e, t) {
          

        function n(e, t) {
            var n = this;
            n.message = e, n.code = t, n.time = new Date, n.timetag = +n.time
        }

        n.prototype = Object.create(Error.prototype), n.prototype.name = "NIMError", n.prototype.appendMessage = function (e) {
            var t = this;
            t.message ? e && (t.message += "(" + e + ")") : t.message = e
        };
        var r = {
            201: "客户端版本不对, 需升级sdk",
            302: "用户名或密码错误, 请检查appKey和token是否有效, account和token是否匹配",
            403: "非法操作或没有权限",
            404: "对象(用户/群/聊天室)不存在",
            405: "参数长度过长",
            408: "客户端请求超时",
            414: "参数错误",
            415: "服务不可用/没有聊天室服务器可分配",
            416: "频率控制",
            417: "重复操作",
            422: "帐号被禁用",
            500: "服务器内部错误",
            501: "数据库操作失败",
            503: "服务器繁忙",
            508: "删除有效期过了",
            509: "已失效",
            7101: "被拉黑",
            801: "群人数达到上限",
            802: "没有权限",
            803: "群不存在或未发生变化",
            804: "用户不在群里面",
            805: "群类型不匹配",
            806: "创建群数量达到限制",
            807: "群成员状态不对",
            809: "已经在群里",
            997: "协议已失效",
            998: "解包错误",
            999: "打包错误",
            9102: "通道失效",
            9103: "已经在其他端接听/拒绝过这通电话",
            11001: "对方离线, 通话不可送达",
            13002: "聊天室状态异常",
            13003: "在黑名单中",
            13004: "在禁言名单中",
            13006: "聊天室处于整体禁言状态,只有管理员能发言",
            Connect_Failed: "无法建立连接, 请确保能 ping/telnet 到云信服务器; 如果是IE8/9, 请确保项目部署在 HTTPS 环境下",
            Error_Internet_Disconnected: "网断了",
            Error_Connection_is_not_Established: "连接未建立",
            Error_Connection_Socket_State_not_Match: "socket状态不对",
            Error_Timeout: "超时",
            Param_Error: "参数错误",
            No_File_Selected: "请选择文件",
            Wrong_File_Type: "文件类型错误",
            File_Too_Large: "文件过大",
            Cross_Origin_Iframe: "不能获取跨域Iframe的内容",
            Not_Support: "不支持",
            NO_DB: "无数据库",
            DB: "数据库错误",
            Still_In_Team: "还在群里",
            Session_Exist: "会话已存在",
            Session_Not_Exist: "会话不存在",
            Error_Unknown: "未知错误",
            Operation_Canceled: "操作取消"
        };
        [200, 406, 808, 810].forEach(function (e) {
            r[e] = null
        }), n.genError = function (e) {
            var t = r[e];
            return void 0 === t && (t = "操作失败"), null === t ? null : new n(t, e)
        }, n.multiInstance = function () {
            return new n("不允许初始化多个实例", "Not_Allow_Multi_Instance")
        }, n.newNetworkError = function () {
            var e = "Error_Internet_Disconnected";
            return new n(r[e], e)
        }, n.newConnectError = function (e) {
            var t = "Connect_Failed";
            return new n(r[t] || e, t)
        }, n.newConnectionError = function () {
            var e = "Error_Connection_is_not_Established";
            return new n(r[e], e)
        }, n.newSocketStateError = function () {
            var e = "Error_Connection_Socket_State_not_Match";
            return new n(r[e], e)
        }, n.newTimeoutError = function () {
            var e = "Error_Timeout";
            return new n(r[e], e)
        }, n.newFrequencyControlError = function () {
            var e = 416, t = new n(r[e], e);
            return t.from = "local", t
        }, n.newParamError = function (e) {
            var t = "Param_Error";
            return new n(e || r[t], t)
        }, n.newNoFileError = function (e) {
            var t = "No_File_Selected";
            return new n(e || r[t], t)
        }, n.newWrongFileTypeError = function (e) {
            var t = "Wrong_File_Type";
            return new n(e || r[t], t)
        }, n.newFileTooLargeError = function (e) {
            var t = "File_Too_Large";
            return new n(e || r[t], t)
        }, n.newCORSIframeError = function () {
            var e = "Cross_Origin_Iframe";
            return new n(r[e], e)
        }, n.newSupportError = function (e, t) {
            return new n("不支持" + e, "Not_Support_" + t)
        }, n.newSupportDBError = function () {
            return n.newSupportError("数据库", "DB")
        }, n.noDBError = function () {
            var e = "NO_DB";
            return new n(r[e], e)
        }, n.newDBError = function () {
            var e = "DB";
            return new n(r[e], e)
        }, n.newUnknownError = function () {
            var e = "Error_Unknown";
            return new n(r[e], e)
        }, n.stillInTeamError = function () {
            var e = "Still_In_Team";
            return new n(r[e], e)
        }, n.sessionExist = function () {
            var e = "Session_Exist";
            return new n(r[e], e)
        }, n.sessionNotExist = function () {
            var e = "Session_Not_Exist";
            return new n(r[e], e)
        }, n.cancel = function () {
            var e = "Operation_Canceled";
            return new n(r[e], e)
        }, e.exports = n
    }, function (e, t, n) {
          

        function r(e) {
            var t = this;
            return t.subType = "im", e.Protocol = o, e.Message = a, e.constructor = r, t.init(e)
        }

        var i = n(7), o = n(3), s = n(6), a = n(128), c = n(16).getInstance("IM");
        r.Protocol = o, r.parser = c, r.use = i.use, r.getInstance = i.getInstance, r.genInstanceName = function (e) {
            return "NIM-account-" + e.account
        };
        var u = r.fn = r.prototype = Object.create(i.prototype);
        r.info = u.info = s.info, e.exports = r, n(90), n(86), n(96), n(101), n(89), n(97), n(100), n(98), n(91), n(99), n(85), n(93), n(94), n(84), n(87), n(95), n(88)
    }, function (e, t, n) {
        (function (t) {
              
            var n = "'6519257071096b279938914f1f49a20d22fc2c2d", r = "6519257'", i = "4.0.0", o = "2.0.0.524", s = 40,
                a = 1, c = "https://lbs.netease.im/lbs/webconf.jsp", u = "development" === t.env.NODE_ENV ? 6e3 : 42e3,
                l = {
                    info: {hash: n, shortHash: r, version: i, sdkVersion: s, protocolVersion: a},
                    agentVersion: o,
                    lbsUrl: c,
                    connectTimeout: u,
                    xhrTimeout: u,
                    socketTimeout: u,
                    reconnectionDelay: 656.25,
                    reconnectionDelayMax: u,
                    reconnectionJitter: .1,
                    heartbeatInterval: 18e4,
                    cmdTimeout: u
                };
            l.formatSocketUrl = function (e) {
                var t = e.url, n = e.secure, r = n ? "https" : "http";
                return t.indexOf("http") === -1 ? r + "://" + t : t
            }, l.fileServerUrl = "https://nos.netease.com", l.replaceUrl = "http://nos.netease.im", l.genUploadUrl = function (e) {
                return l.uploadUrl ? l.uploadUrl + "/" + e : l.fileServerUrl + "/" + e
            }, l.genDownloadUrl = function (e, t) {
                return l.downloadUrl ? l.replaceUrl + "/" + e + "/" + t : l.fileServerUrl + "/" + e + "/" + t
            }, e.exports = l
        }).call(t, n(10))
    }, function (e, t, n) {
          

        function r() {
        }

        var i = n(12), o = n(2).Promise, s = n(1), a = s.notundef, c = n(63), u = n(6), l = {};
        r.getInstance = function (e) {
            var t = this;
            s.verifyOptions(e, "account");
            var n = t.genInstanceName(e), i = l[n];
            return i ? r.updateInstance(i, e) : i = l[n] = new t(e), i
        }, r.updateInstance = function (e, t) {
            e.setOptions(t), e.connect()
        };
        var f = r.fn = r.prototype = Object.create(new i);
        f.init = function (e) {
            var t = this;
            s.verifyOptions(e, "account");
            var n = t.account = e.account = e.account + "", i = e.constructor, o = i.genInstanceName(e), a = l[o];
            if (e._disableSingleton && (a = null), a) return r.updateInstance(a, e), a;
            t.name = o, l[o] = t, t.logger = e.logger = new c({
                debug: e.debug,
                logFunc: e.logFunc,
                prefix: t.subType
            }), e.api = t;
            var f = t.protocol = new e.Protocol(e);
            return f.name = "Protocol-" + o, f.account = n, f.api = t, f.message = t.message = new e.Message({account: n}), t.options = s.copy(e), e.uploadUrl && e.downloadUrl && (u.uploadUrl = e.uploadUrl, u.downloadUrl = e.downloadUrl), t.reset(), t
        }, f.reset = function () {
            var e = this, t = e.options;
            s.verifyBooleanWithDefault(t, "exifOrientation", !0)
        }, f.setOptions = function (e) {
            this.reset(), this.protocol.setOptions(e)
        }, f.processCallback = function (e, t) {
            d(e, t)
        }, f.processCallbackPromise = function (e, t) {
            var n = new o(function (n, r) {
                d(e, t, !0, n, r)
            });
            return n
        };
        var d = function (e, t, n, r, i) {
            s.verifyCallback(e, "done"), e.callback = function (o, c) {
                var u = e.callback.options;
                if (c = c || u, t && (c = u), s.isFunction(e.cbaop)) {
                    var l = e.cbaop(o, c);
                    a(l) && (c = l)
                }
                var f = e.done;
                s.isObject(c) && (delete c.done, delete c.cb, delete c.callback), n ? o ? i(o) : r(c) : f(o, c)
            }, e.callback.options = s.copy(e)
        };
        f.processPs = function (e) {
            s.notexist(e.ps) && (e.ps = "")
        }, f.processCustom = function (e) {
            s.notexist(e.custom) && (e.custom = "")
        }, f.sendCmd = function () {
            this.protocol.sendCmd.apply(this.protocol, arguments)
        }, f.sendCmdWithResp = function (e, t, n) {
            this.sendCmd(e, t, function (e, t, r) {
                s.isFunction(n) && (e ? n(e, t) : n(null, r))
            })
        }, f.cbAndSendCmd = function (e, t) {
            var n = this.processCallbackPromise(t);
            return this.sendCmd(e, t), n
        }, r.use = function (e, t) {
            e && e.install && s.isFunction(e.install) && e.install(this, t)
        }, e.exports = r, n(45), n(47), n(48), n(49), n(46)
    }, function (e, t, n) {
          

        function r(e) {
            h = e, l.set("db", e, c)
        }

        function i(e) {
            this.concurrency = 0, this.pendingTasks = [], this.queue = o.resolve(), this.logger = e.logger
        }

        var o = n(2).Promise, s = n(13), a = n(26), c = n(38), u = n(1), l = n(43), f = n(4), d = f.newSupportDBError,
            m = f.noDBError, p = n(102), y = "nim-", h = !1, g = u.getGlobal();
        if (r(!!g.indexedDB), "IE" === s.name && r(!1), "Microsoft Edge" === s.name && r(!1), "Safari" === s.name) {
            var v = parseInt(s.version.split(".")[0], 10);
            v < 9 && r(!1), r(!1)
        }
        var b = i.fn = i.prototype;
        b.reset = u.emptyFunc, h && (b.reset = function (e) {
            this.enable = e !== !1
        }), b.addTask = function (e) {
            var t = this;
            return new o(function (n, r) {
                function i(e) {
                    t.concurrency--;
                    var n = t.pendingTasks.shift();
                    n && t.addTask(n), e()
                }

                return t.concurrency < 100 ? (t.concurrency++, e().then(function (t) {
                    i(function () {
                        n(t), e.resolve && e.resolve(t)
                    })
                }, function (t) {
                    i(function () {
                        r(t), e.reject && e.reject(t)
                    })
                })) : (e.resolve || (e.resolve = n, e.reject = r), void t.pendingTasks.push(e))
            })
        }, b.init = function (e) {
            var t = this;
            return t.addTask(function () {
                return t.enable ? t.server ? o.resolve() : (t.name = y + e, c.open({
                    server: t.name,
                    version: p.version,
                    schema: p.schema
                }).then(function (e) {
                    t.logger.warn("init db", t.name), t.server = e
                }, function (e) {
                    throw r(!1), t.server = null, t.name = null, e
                })) : o.reject(d())
            })
        }, b.destroy = function () {
            var e = this;
            return e.addTask(function () {
                return e.enable ? e.server ? c.remove(e.name).then(function () {
                    e.logger.warn("delete db", e.name), e.server = null, e.name = null
                }) : o.resolve() : o.reject(d())
            })
        }, b.clear = function () {
            var e = this;
            return e.addTask(function () {
                return e.enable ? e.server ? e.server.clear("timetag").then(function () {
                    var t = [].slice.call(e.server.getIndexedDB().objectStoreNames), n = [];
                    if (t.forEach(function (t) {
                            n.push(e.server.clear(t))
                        }), n.length) return o.all(n).then(function () {
                        e.logger.warn("clear db", e.name)
                    })
                }) : o.resolve() : o.reject(d())
            })
        }, b.close = function () {
            var e = this;
            e.server && (e.server.close(), e.server = null, e.name = null)
        }, b.remove = function (e, t) {
            var n = this;
            return n.addTask(function () {
                return n.enable ? n.server ? (u.isArray(t) || (t = [t]), n.server.remove(e, t).then(function () {
                    n.logger.warn("delete", e, 1 === t.length ? t[0] : t)
                })) : o.reject(m()) : o.reject(d())
            })
        }, b.put = function (e, t) {
            var n = this;
            return n.addTask(function () {
                return n.enable ? n.server ? (u.isArray(t) || (t = [t]), n.server.update(e, t).then(function (t) {
                    var r = ["put", e], i = p.keyPath(e), o = [];
                    return i && (t.forEach(function (e) {
                        o.push(a(e, i))
                    }), r.push(1 === o.length ? o[0] : o)), r.push(1 === t.length ? t[0] : t), n.logger.warn.apply(n.logger.warn, r), t
                })) : o.reject(m()) : o.reject(d())
            })
        }, b.modifyOrPut = function (e) {
            var t = this, n = e.table, r = u.copy(e.obj), i = e.key, o = e.modifyObjWhenPut, s = u.copy(r);
            return delete s[i], t.getOne(n, null, r[i], {modifyObj: s}).then(function (e) {
                return e ? (t.logger.warn("update table " + n, r), e) : (r = u.merge(r, o), t.put(n, r).then(function (e) {
                    return e[0]
                }))
            })
        }, b.updateAndDelete = function (e, t, n) {
            var r = this;
            return r.addTask(function () {
                return r.enable ? r.server ? r.server.updateAndDelete(e, t, n) : o.reject(m()) : o.reject(d())
            })
        }, b.get = function (e, t) {
            var n = this;
            return n.addTask(function () {
                return n.enable ? n.server ? n.server.get(e, t) : o.reject(m()) : o.reject(d())
            })
        }, b.getAll = function (e, t) {
            var n = this;
            return n.addTask(function () {
                return n.enable ? n.server ? (t = t || {}, t.keys = t.keys === !0, t.desc = t.desc === !0, t.distinct = t.distinct === !0, n.server.query(e, t.index).filter(t.filter).keys(t.keys).desc(t.desc).limit(t.limit).distinct(t.distinct).map(t.mapper).modify(t.modifyObj).execute()) : o.reject(m()) : o.reject(d())
            })
        }, b.getOnly = function (e, t, n, r) {
            var i = this;
            return i.addTask(function () {
                if (!i.enable) throw d();
                if (!i.server) throw m();
                return r = r || {}, r.keys = r.keys === !0, r.desc = r.desc === !0, r.distinct = r.distinct === !0, r.remove = r.remove === !0, i.server.query(e, t).only(n).filter(r.filter).keys(r.keys).desc(r.desc).limit(r.limit).distinct(r.distinct).map(r.mapper).modify(r.modifyObj).remove(r.remove).execute()
            })
        }, b.getOne = function () {
            var e = this;
            return e.getOnly.apply(e, arguments).then(function (e) {
                return e[0]
            })
        }, b.clearTable = function (e) {
            var t = this;
            return t.addTask(function () {
                if (!t.enable) throw d();
                if (!t.server) throw m();
                return t.server.clear(e)
            })
        }, b.checkDB = function () {
            var e = this;
            if (!e.enable) throw d();
            if (!e.server) throw m()
        }, e.exports = i, n(104), n(110), n(106), n(103), n(109), n(111), n(105), n(108), n(107)
    }, function (e, t, n) {
          
        var r = n(1), i = {};
        i.init = function () {
            i.deviceId = r.guid()
        }, i.init(), i.clientTypeMap = {
            1: "Android",
            2: "iOS",
            4: "PC",
            8: "WindowsPhone",
            16: "Web",
            32: "Server"
        }, e.exports = i
    }, function (e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function i(e) {
            if (l === setTimeout) return setTimeout(e, 0);
            if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
            try {
                return l(e, 0)
            } catch (t) {
                try {
                    return l.call(null, e, 0)
                } catch (t) {
                    return l.call(this, e, 0)
                }
            }
        }

        function o(e) {
            if (f === clearTimeout) return clearTimeout(e);
            if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
            try {
                return f(e)
            } catch (t) {
                try {
                    return f.call(null, e)
                } catch (t) {
                    return f.call(this, e)
                }
            }
        }

        function s() {
            y && m && (y = !1, m.length ? p = m.concat(p) : h = -1, p.length && a())
        }

        function a() {
            if (!y) {
                var e = i(s);
                y = !0;
                for (var t = p.length; t;) {
                    for (m = p, p = []; ++h < t;) m && m[h].run();
                    h = -1, t = p.length
                }
                m = null, y = !1, o(e)
            }
        }

        function c(e, t) {
            this.fun = e, this.array = t
        }

        function u() {
        }

        var l, f, d = e.exports = {};
        !function () {
            try {
                l = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                l = n
            }
            try {
                f = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                f = r
            }
        }();
        var m, p = [], y = !1, h = -1;
        d.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            p.push(new c(e, t)), 1 !== p.length || y || i(a)
        }, c.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = u, d.addListener = u, d.once = u, d.off = u, d.removeListener = u, d.removeAllListeners = u, d.emit = u, d.prependListener = u, d.prependOnceListener = u, d.listeners = function (e) {
            return []
        }, d.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, d.cwd = function () {
            return "/"
        }, d.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, d.umask = function () {
            return 0
        }
    }, function (e, t, n) {
          

        function r(e) {
            var t = this;
            i.undef(e.secure) && (e.secure = !0), t.options = i.copy(e), t.init(), t.connect()
        }

        var i = n(1), o = n(6), s = n(4), a = r.fn = r.prototype;
        a.init = function () {
            var e = this;
            e.logger = e.options.logger, e.cmdTaskArray = [], e.timerMap = {}, e.cmdCallbackMap = {}, e.cmdContentMap = {}, e.initConnect(), e.reset()
        }, a.reset = function () {
            var e = this;
            e.resetConnect()
        }, a.setOptions = function (e) {
            var t = this, n = t.options, r = Object.keys(n), o = r.indexOf("account");
            o !== -1 && r.splice(o, 1), e = i.filterObj(e, r), t.options = i.merge(n, e), t.reset()
        }, a.sendCmd = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = arguments[2], r = this;
            r.heartbeat(), "heartbeat" !== e && r.logger.log("Protocol Command    " + e + "\t", t);
            var i = e;
            e = r.parser.createCmd(e, t);
            var o, s = e.SER;
            t = t || {}, r.cmdContentMap[s] = t, t.single && (delete t.single, o = Object.keys(t), 1 === o.length && (r.cmdContentMap[s] = t[o[0]])), t.NOTSTORE && (o = t.NOTSTORE.split(" "), o.forEach(function (e) {
                delete t[e]
            }), delete t.NOTSTORE), n = n || t.callback, n && (r.cmdCallbackMap[s] = n), r.cmdTaskArray.push({
                cmdName: i,
                cmd: JSON.stringify(e)
            }), r.startCmdTaskTimer()
        }, a.startCmdTaskTimer = function () {
            var e = this;
            e.cmdTaskTimer || (e.cmdTaskTimer = setTimeout(function () {
                var t = e.cmdTaskArray.shift();
                e.cmdTaskTimer = null, t && e.executeCmdTask(t), e.cmdTaskArray.length && e.startCmdTaskTimer()
            }, 0))
        }, a.executeCmdTask = function (e) {
            var t = this, n = e.cmdName, r = e.cmd;
            r = JSON.parse(r);
            var i = r.SER;
            t.isFrequencyControlled(n) ? (t.logger.warn("hit frequency control " + n), t.markCallbackInvalid(i, s.newFrequencyControlError())) : t.isConnected() ? t.doSendCmd(r) : t.markCallbackInvalid(i, s.newSocketStateError())
        }, a.isFrequencyControlled = function (e) {
            var t = this.frequencyControlMap && this.frequencyControlMap[e];
            if (t) {
                if (Date.now() < t.from + t.duration) return !0;
                delete this.frequencyControlMap[e]
            }
        }, a.doSendCmd = function (e) {
            var t = this, n = e.SER;
            t.timerMap[n] = setTimeout(function () {
                t.markCallbackInvalid(n, s.newTimeoutError())
            }, o.cmdTimeout);
            try {
                t.socket.send(JSON.stringify(e))
            } catch (r) {
                t.markCallbackInvalid(n, s.newSocketStateError()), t.onDisconnect(!0)
            }
        }, a.getObjWithSer = function (e) {
            var t = this, n = t.cmdContentMap[e];
            return delete t.cmdContentMap[e], n && i.copy(n)
        }, a.getCallbackWithSer = function (e) {
            var t = this, n = t.cmdCallbackMap[e];
            return delete t.cmdCallbackMap[e], n
        }, a.getTimerWithSer = function (e) {
            var t = this, n = t.timerMap[e];
            return delete t.timerMap[e], n
        }, a.clearTimerWithSer = function (e) {
            var t = this, n = t.getTimerWithSer(e);
            n && clearTimeout(n)
        }, a.markCallbackInvalid = function (e, t) {
            var n = this;
            n.getObjWithSer(e), n.clearTimerWithSer(e);
            var r = n.getCallbackWithSer(e);
            if (r) {
                var i = r.options;
                setTimeout(function () {
                    r(t || s.newUnknownError(), i)
                }, 0)
            }
        }, a.markAllCallbackInvalid = function (e) {
            var t = this;
            Object.keys(this.cmdCallbackMap).forEach(function (n) {
                t.markCallbackInvalid(n, e)
            })
        }, a.getPacketObj = function (e) {
            var t = null;
            if (e && e.raw) {
                var n = e.raw.ser;
                i.notundef(n) && (t = this.getObjWithSer(n))
            }
            return t
        }, a.callPacketAckCallback = function (e) {
            var t = this;
            if (e && e.raw) {
                var n = e.raw.ser;
                if (i.notundef(n)) {
                    t.clearTimerWithSer(n);
                    var r = t.getCallbackWithSer(n);
                    r && (e.promise ? e.promise.then(function () {
                        r(e.error, e.obj)
                    }, function (n) {
                        var i = s.newDBError();
                        i.event = n, t.logger.error("promise error", i, n), r(i, e.obj, e.content)
                    }) : r(e.error, e.obj, e.content))
                }
            }
        }, a.onMessage = function (e) {
            var t = this;
            t.heartbeat();
            var n = t.parser.parseResponse(e);
            n.notFound && t.logger.log("no config for", n.notFound), n.frequencyControlDuration && (t.logger.warn("server frequency control " + n.cmd), t.frequencyControlMap = t.frequencyControlMap || {}, t.frequencyControlMap[n.cmd] = {
                from: +new Date,
                duration: n.frequencyControlDuration
            }), n.obj = t.getPacketObj(n), "heartbeat" !== n.cmd && t.logger.log("Protocol Response   " + n.cmd + "\t", n, n.error || (n.content ? n.content : ""));
            var r = "process" + i.capFirstLetter(n.service);
            t[r] && t[r](n), t.callPacketAckCallback(n)
        }, a.onMiscError = function (e, t, n) {
            e && (e.appendMessage(n), this.notifyError(e, t))
        }, a.notifyError = function (e, t) {
            var n = this;
            if (n.isConnected()) {
                var r = ["onError " + n.name, e];
                e.event && r.push(e.event), t && r.push(t), n.logger.error.apply(n.logger.error, r), n.options.onerror(e, t)
            }
        }, a.emitAPI = function (e) {
            var t = e.type, n = e.obj;
            this.api.emit(t, n)
        }, e.exports = r, n(54), n(53), n(55), n(56)
    }, function (e, t, n) {
          

        function r() {
        }

        function i(e, t, n) {
            this.fn = e, this.context = t, this.once = n || !1
        }

        function o() {
            this._events = new r, this._eventsCount = 0
        }

        var s = Object.prototype.hasOwnProperty, a = "~";
        Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (a = !1)), o.prototype.eventNames = function () {
            var e, t, n = [];
            if (0 === this._eventsCount) return n;
            for (t in e = this._events) s.call(e, t) && n.push(a ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
        }, o.prototype.listeners = function (e, t) {
            var n = a ? a + e : e, r = this._events[n];
            if (t) return !!r;
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var i = 0, o = r.length, s = new Array(o); i < o; i++) s[i] = r[i].fn;
            return s
        }, o.prototype.emit = function (e, t, n, r, i, o) {
            var s = a ? a + e : e;
            if (!this._events[s]) return !1;
            var c, u, l = this._events[s], f = arguments.length;
            if (l.fn) {
                switch (l.once && this.removeListener(e, l.fn, void 0, !0), f) {
                    case 1:
                        return l.fn.call(l.context), !0;
                    case 2:
                        return l.fn.call(l.context, t), !0;
                    case 3:
                        return l.fn.call(l.context, t, n), !0;
                    case 4:
                        return l.fn.call(l.context, t, n, r), !0;
                    case 5:
                        return l.fn.call(l.context, t, n, r, i), !0;
                    case 6:
                        return l.fn.call(l.context, t, n, r, i, o), !0
                }
                for (u = 1, c = new Array(f - 1); u < f; u++) c[u - 1] = arguments[u];
                l.fn.apply(l.context, c)
            } else {
                var d, m = l.length;
                for (u = 0; u < m; u++) switch (l[u].once && this.removeListener(e, l[u].fn, void 0, !0), f) {
                    case 1:
                        l[u].fn.call(l[u].context);
                        break;
                    case 2:
                        l[u].fn.call(l[u].context, t);
                        break;
                    case 3:
                        l[u].fn.call(l[u].context, t, n);
                        break;
                    case 4:
                        l[u].fn.call(l[u].context, t, n, r);
                        break;
                    default:
                        if (!c) for (d = 1, c = new Array(f - 1); d < f; d++) c[d - 1] = arguments[d];
                        l[u].fn.apply(l[u].context, c)
                }
            }
            return !0
        }, o.prototype.on = function (e, t, n) {
            var r = new i(t, n || this), o = a ? a + e : e;
            return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++), this
        }, o.prototype.once = function (e, t, n) {
            var r = new i(t, n || this, !0), o = a ? a + e : e;
            return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++), this
        }, o.prototype.removeListener = function (e, t, n, i) {
            var o = a ? a + e : e;
            if (!this._events[o]) return this;
            if (!t) return 0 === --this._eventsCount ? this._events = new r : delete this._events[o], this;
            var s = this._events[o];
            if (s.fn) s.fn !== t || i && !s.once || n && s.context !== n || (0 === --this._eventsCount ? this._events = new r : delete this._events[o]); else {
                for (var c = 0, u = [], l = s.length; c < l; c++) (s[c].fn !== t || i && !s[c].once || n && s[c].context !== n) && u.push(s[c]);
                u.length ? this._events[o] = 1 === u.length ? u[0] : u : 0 === --this._eventsCount ? this._events = new r : delete this._events[o]
            }
            return this
        }, o.prototype.removeAllListeners = function (e) {
            var t;
            return e ? (t = a ? a + e : e, this._events[t] && (0 === --this._eventsCount ? this._events = new r : delete this._events[t])) : (this._events = new r, this._eventsCount = 0), this
        }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function () {
            return this
        }, o.prefixed = a, o.EventEmitter = o, e.exports = o
    }, function (e, t, n) {
        var r;
        (function (e, i) {
            (function () {
                  

                function o(e) {
                    return e = String(e), e.charAt(0).toUpperCase() + e.slice(1)
                }

                function s(e, t, n) {
                    var r = {
                        "10.0": "10",
                        6.4: "10 Technical Preview",
                        6.3: "8.1",
                        6.2: "8",
                        6.1: "Server 2008 R2 / 7",
                        "6.0": "Server 2008 / Vista",
                        5.2: "Server 2003 / XP 64-bit",
                        5.1: "XP",
                        5.01: "2000 SP1",
                        "5.0": "2000",
                        "4.0": "NT",
                        "4.90": "ME"
                    };
                    return t && n && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (r = r[/[\d.]+$/.exec(e)]) && (e = "Windows " + r), e = String(e), t && n && (e = e.replace(RegExp(t, "i"), n)), e = c(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                }

                function a(e, t) {
                    var n = -1, r = e ? e.length : 0;
                    if ("number" == typeof r && r > -1 && r <= k) for (; ++n < r;) t(e[n], n, e); else u(e, t)
                }

                function c(e) {
                    return e = p(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : o(e)
                }

                function u(e, t) {
                    for (var n in e) C.call(e, n) && t(e[n], n, e)
                }

                function l(e) {
                    return null == e ? o(e) : x.call(e).slice(8, -1)
                }

                function f(e, t) {
                    var n = null != e ? typeof e[t] : "number";
                    return !(/^(?:boolean|number|string|undefined)$/.test(n) || "object" == n && !e[t])
                }

                function d(e) {
                    return String(e).replace(/([ -])(?!$)/g, "$1?")
                }

                function m(e, t) {
                    var n = null;
                    return a(e, function (r, i) {
                        n = t(n, r, i, e)
                    }), n
                }

                function p(e) {
                    return String(e).replace(/^ +| +$/g, "")
                }

                function y(e) {
                    function t(t) {
                        return m(t, function (t, n) {
                            return t || RegExp("\\b" + (n.pattern || d(n)) + "\\b", "i").exec(e) && (n.label || n)
                        })
                    }

                    function n(t) {
                        return m(t, function (t, n, r) {
                            return t || (n[G] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(G)] || RegExp("\\b" + d(r) + "(?:\\b|\\w*\\d)", "i").exec(e)) && r
                        })
                    }

                    function r(t) {
                        return m(t, function (t, n) {
                            return t || RegExp("\\b" + (n.pattern || d(n)) + "\\b", "i").exec(e) && (n.label || n)
                        })
                    }

                    function i(t) {
                        return m(t, function (t, n) {
                            var r = n.pattern || d(n);
                            return !t && (t = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) && (t = s(t, r, n.label || n)), t
                        })
                    }

                    function o(t) {
                        return m(t, function (t, n) {
                            var r = n.pattern || d(n);
                            return !t && (t = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(e) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(e) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) && ((t = String(n.label && !RegExp(r, "i").test(n.label) ? n.label : t).split("/"))[1] && !/[\d.]+/.test(t[0]) && (t[0] += " " + t[1]), n = n.label || n, t = c(t[0].replace(RegExp(r, "i"), n).replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ").replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"))), t
                        })
                    }

                    function a(t) {
                        return m(t, function (t, n) {
                            return t || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] || null
                        })
                    }

                    function h() {
                        return this.description || ""
                    }

                    var b = g, M = e && "object" == typeof e && "String" != l(e);
                    M && (b = e, e = null);
                    var T = b.navigator || {}, k = T.userAgent || "";
                    e || (e = k);
                    var O, C, _ = M || w == v,
                        I = M ? !!T.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(x.toString()),
                        P = "Object", E = M ? P : "ScriptBridgingProxyObject", A = M ? P : "Environment",
                        j = M && b.java ? "JavaPackage" : l(b.java), R = M ? P : "RuntimeObject",
                        F = /\bJava/.test(j) && b.java, N = F && l(b.environment) == A, U = F ? "a" : "α",
                        D = F ? "b" : "β", L = b.document || {}, B = b.operamini || b.opera,
                        q = S.test(q = M && B ? B["[[Class]]"] : l(B)) ? q : B = null, W = e, H = [], $ = null,
                        X = e == k, V = X && B && "function" == typeof B.version && B.version(),
                        J = t([{label: "EdgeHTML", pattern: "Edge"}, "Trident", {
                            label: "WebKit",
                            pattern: "AppleWebKit"
                        }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
                        z = r(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                            label: "Microsoft Edge",
                            pattern: "Edge"
                        }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                            label: "Samsung Internet", pattern: "SamsungBrowser"
                        }, "SeaMonkey", {
                            label: "Silk",
                            pattern: "(?:Cloud9|Silk-Accelerated)"
                        }, "Sleipnir", "SlimBrowser", {
                            label: "SRWare Iron",
                            pattern: "Iron"
                        }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                            label: "Opera Mini",
                            pattern: "OPiOS"
                        }, "Opera", {label: "Opera", pattern: "OPR"}, "Chrome", {
                            label: "Chrome Mobile",
                            pattern: "(?:CriOS|CrMo)"
                        }, {label: "Firefox", pattern: "(?:Firefox|Minefield)"}, {
                            label: "Firefox for iOS",
                            pattern: "FxiOS"
                        }, {label: "IE", pattern: "IEMobile"}, {label: "IE", pattern: "MSIE"}, "Safari"]),
                        G = o([{label: "BlackBerry", pattern: "BB10"}, "BlackBerry", {
                            label: "Galaxy S",
                            pattern: "GT-I9000"
                        }, {label: "Galaxy S2", pattern: "GT-I9100"}, {
                            label: "Galaxy S3",
                            pattern: "GT-I9300"
                        }, {label: "Galaxy S4", pattern: "GT-I9500"}, {
                            label: "Galaxy S5",
                            pattern: "SM-G900"
                        }, {label: "Galaxy S6", pattern: "SM-G920"}, {
                            label: "Galaxy S6 Edge",
                            pattern: "SM-G925"
                        }, {label: "Galaxy S7", pattern: "SM-G930"}, {
                            label: "Galaxy S7 Edge",
                            pattern: "SM-G935"
                        }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                            label: "Kindle Fire",
                            pattern: "(?:Cloud9|Silk-Accelerated)"
                        }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                            label: "Wii U",
                            pattern: "WiiU"
                        }, "Wii", "Xbox One", {label: "Xbox 360", pattern: "Xbox"}, "Xoom"]), K = n({
                            Apple: {iPad: 1, iPhone: 1, iPod: 1},
                            Archos: {},
                            Amazon: {Kindle: 1, "Kindle Fire": 1},
                            Asus: {Transformer: 1},
                            "Barnes & Noble": {Nook: 1},
                            BlackBerry: {PlayBook: 1},
                            Google: {"Google TV": 1, Nexus: 1},
                            HP: {TouchPad: 1},
                            HTC: {},
                            LG: {},
                            Microsoft: {Xbox: 1, "Xbox One": 1},
                            Motorola: {Xoom: 1},
                            Nintendo: {"Wii U": 1, Wii: 1},
                            Nokia: {Lumia: 1},
                            Samsung: {"Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1},
                            Sony: {PlayStation: 1, "PlayStation Vita": 1}
                        }), Y = i(["Windows Phone", "Android", "CentOS", {
                            label: "Chrome OS",
                            pattern: "CrOS"
                        }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
                    if (J && (J = [J]), K && !G && (G = o([K])), (O = /\bGoogle TV\b/.exec(G)) && (G = O[0]), /\bSimulator\b/i.test(e) && (G = (G ? G + " " : "") + "Simulator"), "Opera Mini" == z && /\bOPiOS\b/.test(e) && H.push("running in Turbo/Uncompressed mode"), "IE" == z && /\blike iPhone OS\b/.test(e) ? (O = y(e.replace(/like iPhone OS/, "")), K = O.manufacturer, G = O.product) : /^iP/.test(G) ? (z || (z = "Safari"), Y = "iOS" + ((O = / OS ([\d_]+)/i.exec(e)) ? " " + O[1].replace(/_/g, ".") : "")) : "Konqueror" != z || /buntu/i.test(Y) ? K && "Google" != K && (/Chrome/.test(z) && !/\bMobile Safari\b/i.test(e) || /\bVita\b/.test(G)) || /\bAndroid\b/.test(Y) && /^Chrome/.test(z) && /\bVersion\//i.test(e) ? (z = "Android Browser", Y = /\bAndroid\b/.test(Y) ? Y : "Android") : "Silk" == z ? (/\bMobi/i.test(e) || (Y = "Android", H.unshift("desktop mode")), /Accelerated *= *true/i.test(e) && H.unshift("accelerated")) : "PaleMoon" == z && (O = /\bFirefox\/([\d.]+)\b/.exec(e)) ? H.push("identifying as Firefox " + O[1]) : "Firefox" == z && (O = /\b(Mobile|Tablet|TV)\b/i.exec(e)) ? (Y || (Y = "Firefox OS"), G || (G = O[1])) : !z || (O = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(z)) ? (z && !G && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(O + "/") + 8)) && (z = null), (O = G || K || Y) && (G || K || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(Y)) && (z = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(Y) ? Y : O) + " Browser")) : "Electron" == z && (O = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) && H.push("Chromium " + O) : Y = "Kubuntu", V || (V = a(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", d(z), "(?:Firefox|Minefield|NetFront)"])), (O = "iCab" == J && parseFloat(V) > 3 && "WebKit" || /\bOpera\b/.test(z) && (/\bOPR\b/.test(e) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(J) && "WebKit" || !J && /\bMSIE\b/i.test(e) && ("Mac OS" == Y ? "Tasman" : "Trident") || "WebKit" == J && /\bPlayStation\b(?! Vita\b)/i.test(z) && "NetFront") && (J = [O]), "IE" == z && (O = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? (z += " Mobile", Y = "Windows Phone " + (/\+$/.test(O) ? O : O + ".x"), H.unshift("desktop mode")) : /\bWPDesktop\b/i.test(e) ? (z = "IE Mobile", Y = "Windows Phone 8.x", H.unshift("desktop mode"), V || (V = (/\brv:([\d.]+)/.exec(e) || 0)[1])) : "IE" != z && "Trident" == J && (O = /\brv:([\d.]+)/.exec(e)) && (z && H.push("identifying as " + z + (V ? " " + V : "")), z = "IE", V = O[1]), X) {
                        if (f(b, "global")) if (F && (O = F.lang.System, W = O.getProperty("os.arch"), Y = Y || O.getProperty("os.name") + " " + O.getProperty("os.version")), _ && f(b, "system") && (O = [b.system])[0]) {
                            Y || (Y = O[0].os || null);
                            try {
                                O[1] = b.require("ringo/engine").version, V = O[1].join("."), z = "RingoJS"
                            } catch (Z) {
                                O[0].global.system == b.system && (z = "Narwhal")
                            }
                        } else "object" == typeof b.process && !b.process.browser && (O = b.process) ? "object" == typeof O.versions ? "string" == typeof O.versions.electron ? (H.push("Node " + O.versions.node), z = "Electron", V = O.versions.electron) : "string" == typeof O.versions.nw && (H.push("Chromium " + V, "Node " + O.versions.node), z = "NW.js", V = O.versions.nw) : (z = "Node.js", W = O.arch, Y = O.platform, V = /[\d.]+/.exec(O.version), V = V ? V[0] : "unknown") : N && (z = "Rhino"); else l(O = b.runtime) == E ? (z = "Adobe AIR", Y = O.flash.system.Capabilities.os) : l(O = b.phantom) == R ? (z = "PhantomJS", V = (O = O.version || null) && O.major + "." + O.minor + "." + O.patch) : "number" == typeof L.documentMode && (O = /\bTrident\/(\d+)/i.exec(e)) ? (V = [V, L.documentMode], (O = +O[1] + 4) != V[1] && (H.push("IE " + V[1] + " mode"), J && (J[1] = ""), V[1] = O), V = "IE" == z ? String(V[1].toFixed(1)) : V[0]) : "number" == typeof L.documentMode && /^(?:Chrome|Firefox)\b/.test(z) && (H.push("masking as " + z + " " + V), z = "IE", V = "11.0", J = ["Trident"], Y = "Windows");
                        Y = Y && c(Y)
                    }
                    if (V && (O = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(V) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (X && T.appMinorVersion)) || /\bMinefield\b/i.test(e) && "a") && ($ = /b/i.test(O) ? "beta" : "alpha", V = V.replace(RegExp(O + "\\+?$"), "") + ("beta" == $ ? D : U) + (/\d+\+?/.exec(O) || "")), "Fennec" == z || "Firefox" == z && /\b(?:Android|Firefox OS)\b/.test(Y)) z = "Firefox Mobile"; else if ("Maxthon" == z && V) V = V.replace(/\.[\d.]+/, ".x"); else if (/\bXbox\b/i.test(G)) "Xbox 360" == G && (Y = null), "Xbox 360" == G && /\bIEMobile\b/.test(e) && H.unshift("mobile mode"); else if (!/^(?:Chrome|IE|Opera)$/.test(z) && (!z || G || /Browser|Mobi/.test(z)) || "Windows CE" != Y && !/Mobi/i.test(e)) if ("IE" == z && X) try {
                        null === b.external && H.unshift("platform preview")
                    } catch (Z) {
                        H.unshift("embedded")
                    } else (/\bBlackBerry\b/.test(G) || /\bBB10\b/.test(e)) && (O = (RegExp(G.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || V) ? (O = [O, /BB10/.test(e)], Y = (O[1] ? (G = null, K = "BlackBerry") : "Device Software") + " " + O[0], V = null) : this != u && "Wii" != G && (X && B || /Opera/.test(z) && /\b(?:MSIE|Firefox)\b/i.test(e) || "Firefox" == z && /\bOS X (?:\d+\.){2,}/.test(Y) || "IE" == z && (Y && !/^Win/.test(Y) && V > 5.5 || /\bWindows XP\b/.test(Y) && V > 8 || 8 == V && !/\bTrident\b/.test(e))) && !S.test(O = y.call(u, e.replace(S, "") + ";")) && O.name && (O = "ing as " + O.name + ((O = O.version) ? " " + O : ""), S.test(z) ? (/\bIE\b/.test(O) && "Mac OS" == Y && (Y = null), O = "identify" + O) : (O = "mask" + O, z = q ? c(q.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(O) && (Y = null), X || (V = null)), J = ["Presto"], H.push(O)); else z += " Mobile";
                    (O = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) && (O = [parseFloat(O.replace(/\.(\d)$/, ".0$1")), O], "Safari" == z && "+" == O[1].slice(-1) ? (z = "WebKit Nightly", $ = "alpha", V = O[1].slice(0, -1)) : V != O[1] && V != (O[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1]) || (V = null), O[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1], 537.36 == O[0] && 537.36 == O[2] && parseFloat(O[1]) >= 28 && "WebKit" == J && (J = ["Blink"]), X && (I || O[1]) ? (J && (J[1] = "like Chrome"), O = O[1] || (O = O[0], O < 530 ? 1 : O < 532 ? 2 : O < 532.05 ? 3 : O < 533 ? 4 : O < 534.03 ? 5 : O < 534.07 ? 6 : O < 534.1 ? 7 : O < 534.13 ? 8 : O < 534.16 ? 9 : O < 534.24 ? 10 : O < 534.3 ? 11 : O < 535.01 ? 12 : O < 535.02 ? "13+" : O < 535.07 ? 15 : O < 535.11 ? 16 : O < 535.19 ? 17 : O < 536.05 ? 18 : O < 536.1 ? 19 : O < 537.01 ? 20 : O < 537.11 ? "21+" : O < 537.13 ? 23 : O < 537.18 ? 24 : O < 537.24 ? 25 : O < 537.36 ? 26 : "Blink" != J ? "27" : "28")) : (J && (J[1] = "like Safari"), O = O[0], O = O < 400 ? 1 : O < 500 ? 2 : O < 526 ? 3 : O < 533 ? 4 : O < 534 ? "4+" : O < 535 ? 5 : O < 537 ? 6 : O < 538 ? 7 : O < 601 ? 8 : "8"), J && (J[1] += " " + (O += "number" == typeof O ? ".x" : /[.+]/.test(O) ? "" : "+")), "Safari" == z && (!V || parseInt(V) > 45) && (V = O)), "Opera" == z && (O = /\bzbov|zvav$/.exec(Y)) ? (z += " ", H.unshift("desktop mode"), "zvav" == O ? (z += "Mini", V = null) : z += "Mobile", Y = Y.replace(RegExp(" *" + O + "$"), "")) : "Safari" == z && /\bChrome\b/.exec(J && J[1]) && (H.unshift("desktop mode"), z = "Chrome Mobile", V = null, /\bOS X\b/.test(Y) ? (K = "Apple", Y = "iOS 4.3+") : Y = null), V && 0 == V.indexOf(O = /[\d.]+$/.exec(Y)) && e.indexOf("/" + O + "-") > -1 && (Y = p(Y.replace(O, ""))), J && !/\b(?:Avant|Nook)\b/.test(z) && (/Browser|Lunascape|Maxthon/.test(z) || "Safari" != z && /^iOS/.test(Y) && /\bSafari\b/.test(J[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(z) && J[1]) && (O = J[J.length - 1]) && H.push(O), H.length && (H = ["(" + H.join("; ") + ")"]), K && G && G.indexOf(K) < 0 && H.push("on " + K), G && H.push((/^on /.test(H[H.length - 1]) ? "" : "on ") + G), Y && (O = / ([\d.+]+)$/.exec(Y), C = O && "/" == Y.charAt(Y.length - O[0].length - 1), Y = {
                        architecture: 32,
                        family: O && !C ? Y.replace(O[0], "") : Y,
                        version: O ? O[1] : null,
                        toString: function () {
                            var e = this.version;
                            return this.family + (e && !C ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
                        }
                    }), (O = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(W)) && !/\bi686\b/i.test(W) ? (Y && (Y.architecture = 64, Y.family = Y.family.replace(RegExp(" *" + O), "")), z && (/\bWOW64\b/i.test(e) || X && /\w(?:86|32)$/.test(T.cpuClass || T.platform) && !/\bWin64; x64\b/i.test(e)) && H.unshift("32-bit")) : Y && /^OS X/.test(Y.family) && "Chrome" == z && parseFloat(V) >= 39 && (Y.architecture = 64), e || (e = null);
                    var Q = {};
                    return Q.description = e, Q.layout = J && J[0], Q.manufacturer = K, Q.name = z, Q.prerelease = $, Q.product = G, Q.ua = e, Q.version = z && V, Q.os = Y || {
                        architecture: null,
                        family: null,
                        version: null,
                        toString: function () {
                            return "null"
                        }
                    }, Q.parse = y, Q.toString = h, Q.version && H.unshift(V), Q.name && H.unshift(z), Y && z && (Y != String(Y).split(" ")[0] || Y != z.split(" ")[0] && !G) && H.push(G ? "(" + Y + ")" : "on " + Y), H.length && (Q.description = H.join(" ")), Q
                }

                var h = {"function": !0, object: !0}, g = h[typeof window] && window || this, v = g,
                    b = h[typeof t] && t, M = h[typeof e] && e && !e.nodeType && e,
                    T = b && M && "object" == typeof i && i;
                !T || T.global !== T && T.window !== T && T.self !== T || (g = T);
                var k = Math.pow(2, 53) - 1, S = /\bOpera/, w = this, O = Object.prototype, C = O.hasOwnProperty,
                    x = O.toString, _ = y();
                g.platform = _, r = function () {
                    return _
                }.call(t, n, t, e), !(void 0 !== r && (e.exports = r))
            }).call(this)
        }).call(t, n(18)(e), function () {
            return this
        }())
    }, function (e, t, n) {
          

        function r(e) {
            o.verifyOptions(e, "scene to type"), o.verifyParamValid("scene", e.scene, p);
            var t = this;
            t.scene = d[e.scene], t.to = "" + e.to, t.type = y[e.type], t.resend = e.resend ? 1 : 0, e.resend ? (o.verifyOptions(e, "idClient"), t.idClient = e.idClient) : t.idClient = o.guid(), a(e.text) && (t.body = "" + e.text), a(e.custom) && (t.custom = "" + e.custom), a(e.body) && (t.body = "" + e.body), a(e.pushContent) && (t.pushContent = "" + e.pushContent), a(e.pushPayload) && (t.pushPayload = "" + e.pushPayload);
            var n = e.apns;
            if (a(n) && "team" === e.scene) {
                var r = n.accounts;
                a(r) && o.verifyParamType("apns.accounts", r, "array"), t.apnsAccounts = r ? JSON.stringify(r) : f, t.apnsContent = n.content || e.pushContent || "", o.verifyBooleanWithDefault(n, "forcePush", !0, "options.apns"), t.apnsForcePush = n.forcePush ? 1 : 0
            }
            a(e.isHistoryable) && (t.isHistoryable = e.isHistoryable ? 1 : 0), a(e.isRoamingable) && (t.isRoamingable = e.isRoamingable ? 1 : 0), a(e.isSyncable) && (t.isSyncable = e.isSyncable ? 1 : 0), a(e.cc) && (t.cc = e.cc ? 1 : 0), a(e.isPushable) && (t.isPushable = e.isPushable ? 1 : 0), a(e.isOfflinable) && (t.isOfflinable = e.isOfflinable ? 1 : 0), a(e.isUnreadable) && (t.isUnreadable = e.isUnreadable ? 1 : 0), a(e.needPushNick) && (t.needPushNick = e.needPushNick ? 1 : 0), a(e.yidunEnable) && (t.yidunEnable = e.yidunEnable ? 1 : 0), a(e.antiSpamContent) && ("object" === i(e.antiSpamContent) ? (t.logger.warn("antiSpamContent should be json string, auto transfer object"), t.antiSpamContent = JSON.stringify(e.antiSpamContent)) : t.antiSpamContent = "" + e.antiSpamContent)
        }

        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, o = n(1), s = o.undef, a = o.notundef, c = o.exist, u = n(21), l = n(44), f = "#%@all@%#",
            d = {p2p: 0, team: 1}, m = {0: "p2p", 1: "team"}, p = Object.keys(d), y = l.typeMap, h = l.validTypes;
        r.prototype.getScene = function () {
            return m[this.scene]
        }, r.getScene = function (e) {
            var t = e.scene;
            return m[t] || t
        }, r.getType = l.getType, r.reverse = function (e) {
            var t = m[e.scene], n = {
                scene: t || e.scene,
                from: e.from,
                fromNick: e.fromNick,
                fromClientType: u.reverseType(e.fromClientType),
                fromDeviceId: e.fromDeviceId,
                to: "" + e.to,
                time: +e.time,
                type: r.getType(e),
                text: c(e.body) ? e.body : "",
                isHistoryable: s(e.isHistoryable) || 1 === +e.isHistoryable,
                isRoamingable: s(e.isRoamingable) || 1 === +e.isRoamingable,
                isSyncable: s(e.isSyncable) || 1 === +e.isSyncable,
                cc: s(e.cc) || 1 === +e.cc,
                isPushable: s(e.isPushable) || 1 === +e.isPushable,
                isOfflinable: s(e.isOfflinable) || 1 === +e.isOfflinable,
                isUnreadable: s(e.isUnreadable) || 1 === +e.isUnreadable,
                needPushNick: s(e.needPushNick) || 1 === +e.needPushNick,
                isLocal: !1
            };
            if (a(e.isMuted) && (n.isMuted = 1 === +e.isMuted), a(e.resend) && (n.resend = 1 === +e.resend), a(e.idClient) && (n.idClient = e.idClient), a(e.idServer) && (n.idServer = "" + e.idServer), a(e.userUpdateTime) && (n.userUpdateTime = +e.userUpdateTime), a(e.custom) && (n.custom = e.custom), a(e.pushContent) && (n.pushContent = e.pushContent), a(e.pushPayload) && (n.pushPayload = e.pushPayload), a(e.apnsAccounts)) {
                if (n.apns = {}, e.apnsAccounts !== f) {
                    var i = e.apnsAccounts;
                    try {
                        n.apns.accounts = JSON.parse(i)
                    } catch (o) {
                        n.apns.accounts = []
                    }
                }
                n.apns.content = e.apnsContent || "", n.apns.forcePush = 1 === +e.apnsForcePush
            }
            return n.status = e.status || "success", a(e.filter) && (n.filter = e.filter), n
        }, r.setExtra = function (e, t) {
            e.target = r.getMsgTarget(e, t), e.sessionId = e.scene + "-" + e.target, l.setFlow(e, t)
        }, r.getMsgTarget = function (e, t) {
            return "p2p" === e.scene ? e.to === t ? e.from : e.to : "team" === e.scene ? e.to : void 0
        }, r.deduplication = function (e) {
            var t, n = {}, r = [];
            return e.forEach(function (e) {
                t = e.idClient, n[t] || (n[t] = !0, r.push(e))
            }), r
        }, r.sortMsgs = function (e) {
            return e = e.slice(0), o.sortObjArray(e, {sortPath: "time"}), e
        }, r.getLastMsg = function (e) {
            return e = r.sortMsgs(e), e[e.length - 1]
        }, r.getLastNotIgnoredMsg = function (e) {
            e = r.sortMsgs(e);
            for (var t = null, n = e.length - 1; n >= 0; n--) if (t = e[n], !t.ignore) return t;
            return null
        }, r.getMaxTimetag = function (e) {
            return r.getLastMsg(e).time
        }, r.validScenes = p, r.validTypes = h, e.exports = r
    }, , function (e, t, n) {
          

        function r(e) {
            this.mixin(e)
        }

        var i = n(1), o = i.undef, s = n(4), a = n(42), c = n(59), u = n(61), l = n(57), f = n(58), d = n(60);
        r.prototype.mixin = function (e) {
            var t = this;
            this.configMap = this.configMap || {}, ["idMap", "cmdConfig", "packetConfig"].forEach(function (n) {
                t.configMap[n] = i.merge({}, t.configMap[n], e.configMap && e.configMap[n])
            }), ["serializeMap", "unserializeMap"].forEach(function (n) {
                t[n] = i.merge({}, t[n], e[n])
            })
        };
        var m = new r({configMap: a, serializeMap: c, unserializeMap: u}),
            p = new r({configMap: l, serializeMap: f, unserializeMap: d});
        r.getInstance = function (e) {
            switch (e) {
                case"IM":
                    return m;
                case"Chatroom":
                    return p
            }
        }, r.prototype.createCmd = function () {
            var e = 1;
            return function (t, n) {
                var r = this, i = this.configMap.cmdConfig[t];
                return t = {
                    SID: i.sid,
                    CID: i.cid,
                    SER: "heartbeat" === t ? 0 : e++
                }, i.params && (t.Q = [], i.params.forEach(function (e) {
                    var i = e.type, s = e.name, a = e.entity, c = n[s];
                    if (!o(c)) {
                        switch (i) {
                            case"PropertyArray":
                                i = "ArrayMable", c = c.map(function (e) {
                                    return {t: "Property", v: r.serialize(e, a)}
                                });
                                break;
                            case"Property":
                                c = r.serialize(c, s);
                                break;
                            case"bool":
                                c = c ? "true" : "false"
                        }
                        t.Q.push({t: i, v: c})
                    }
                })), t
            }
        }(), r.prototype.parseResponse = function (e) {
            var t = this, n = JSON.parse(e), r = {raw: n, rawStr: e, error: s.genError(n.code)},
                o = t.configMap.packetConfig[n.sid + "_" + n.cid];
            if (!o) return r.notFound = {sid: n.sid, cid: n.cid}, r;
            var a = n.r, c = "notify" === o.service && !o.cmd;
            if (r.isNotify = c, c) {
                var u = n.r[1].headerPacket;
                if (o = t.configMap.packetConfig[u.sid + "_" + u.cid], a = n.r[1].body, !o) return r.notFound = {
                    sid: u.sid,
                    cid: u.cid
                }, r
            }
            if (r.service = o.service, r.cmd = o.cmd, r.error && 416 === r.error.code) {
                var l = a[0];
                l && (r.frequencyControlDuration = 1e3 * l)
            }
            var f = !1;
            return r.error && o.trivialErrorCodes && (f = o.trivialErrorCodes.indexOf(r.error.code) !== -1), r.error && !f || !o.response || (r.content = {}, o.response.forEach(function (e, o) {
                var s = a[o];
                if (!i.undef(s)) {
                    var u = e.type, l = e.name, f = e.entity || l;
                    switch (u) {
                        case"Property":
                            r.content[l] = t.unserialize(s, f);
                            break;
                        case"PropertyArray":
                            r.content[l] = [], s.forEach(function (e) {
                                r.content[l].push(t.unserialize(e, f))
                            });
                            break;
                        case"KVArray":
                            r.content[l] = s;
                            break;
                        case"long":
                        case"Long":
                        case"byte":
                        case"Byte":
                        case"Number":
                            r.content[l] = +s;
                            break;
                        default:
                            r.content[l] = s
                    }
                    if (c && "msg" === l || "sysMsg" === l) {
                        var d = r.content[l];
                        i.isObject(d) && !d.idServer && (d.idServer = "" + n.r[0], d.type && "8" === d.type && d.deletedIdClient && (d.idServer = d.deletedIdClient))
                    }
                }
            })), r
        }, r.prototype.serialize = function (e, t) {
            var n = this.serializeMap[t], r = {};
            for (var i in n) e.hasOwnProperty(i) && (r[n[i]] = e[i]);
            return r
        }, r.prototype.unserialize = function (e, t) {
            var n = this.unserializeMap[t], r = {};
            if (e) for (var i in n) e.hasOwnProperty(i) && (r[n[i]] = e[i]);
            return r
        }, e.exports = r
    }, function (e, t, n) {
          

        function r(e) {
            var t = this;
            i.verifyOptions(e, "teamId"), i.verifyParamAtLeastPresentOne(e, "nickInTeam muteTeam custom"), t.teamId = e.teamId, o(e.account) && (t.account = e.account), o(e.nickInTeam) && (t.nickInTeam = e.nickInTeam), o(e.muteTeam) && (t.bits = 0, e.muteTeam && (t.bits += 1)), o(e.mute) && (t.mute = e.mute ? 1 : 0), o(e.custom) && (t.custom = "" + e.custom)
        }

        var i = n(1), o = i.notundef, s = i.fillPropertyWithDefault, a = {0: "normal", 1: "owner", 2: "manager"};
        r.reverse = function (e) {
            var t = i.copy(e);
            if (o(t.teamId) && (t.teamId = "" + t.teamId), o(t.type) && (t.type = a[t.type]), o(t.active) && (t.active = 1 === +t.active), o(t.valid) && (t.valid = 1 === +t.valid), o(t.mute) && (t.mute = 1 === +t.mute), o(t.joinTime) && (t.joinTime = +t.joinTime), o(t.updateTime) && (t.updateTime = +t.updateTime), o(t.bits)) {
                var n = t.bits;
                delete t.bits, t.muteTeam = !!(1 & n)
            }
            return o(t.teamId) && o(t.account) && (t.id = r.genId(t.teamId, t.account)), t
        }, r.reverseMembers = function (e) {
            return e.map(function (e) {
                return r.reverse(e)
            })
        }, r.fillProperties = function (e) {
            var t = s(e, "mute", !1), n = s(e, "custom", "");
            return t || n
        }, r.genId = function (e, t) {
            return e + "-" + t
        }, r.accounts2ids = function (e, t) {
            return t.map(function (t) {
                return r.genId(e, t)
            })
        }, r.assembleMembers = function (e, t) {
            return i.isArray(t) || (t = [t]), t.map(function (t) {
                return r.assembleMember(e, t)
            })
        }, r.assembleMember = function (e, t) {
            return {
                id: r.genId(e.teamId, t),
                account: t,
                teamId: e.teamId,
                type: "normal",
                nickInTeam: "",
                muteTeam: !1,
                mute: !1,
                joinTime: e.memberUpdateTime,
                updateTime: e.memberUpdateTime,
                active: !0,
                valid: !0
            }
        }, r.assembleOwner = function (e) {
            var t = r.assembleMember(e, e.owner);
            return t.type = "owner", t
        }, e.exports = r
    }, function (e, t) {
        e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () {
            }, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
        }
    }, function (e, t, n) {
        !function (t, r) {
            e.exports = r(n(37))
        }(this, function (e) {
            return function (e) {
                function t(r) {
                    if (n[r]) return n[r].exports;
                    var i = n[r] = {exports: {}, id: r, loaded: !1};
                    return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
                }

                var n = {};
                return t.m = e, t.c = n, t.p = "", t(0)
            }([function (e, t, n) {
                  
                var r = n(1), i = n(11), o = n(12);
                r.json = i, r.upload = o, e.exports = r
            }, function (e, t, n) {
                  

                function r(e) {
                    var t = e.mode, n = m, r = d.getGlobal();
                    return r.FormData || (t = "iframe"), "iframe" === t && (n = e.upload ? p : y), new n(e)
                }

                function i(e) {
                    var t = e.upload = "multipart/form-data" === (e.headers || d.o)["Content-Type"], n = !1;
                    try {
                        var i = (location.protocol + "//" + location.host).toLowerCase(), o = d.url2origin(e.url);
                        n = i !== o
                    } catch (s) {
                    }
                    return e.cors = n, t || n || e.mode ? r(e) : new m(e)
                }

                function o(e) {
                    var t = h[e];
                    t && (t.req.destroy(), delete h[e])
                }

                function s(e, t) {
                    t = {data: t};
                    var n = e.result.headers;
                    return n && (t.headers = e.req.header(n)), t
                }

                function a(e, t, n) {
                    var r = h[e];
                    if (r) {
                        "onload" === t && r.result && (n = s(r, n)), o(e);
                        var i = {type: t, result: n};
                        g(i), i.stopped || r[t](i.result)
                    }
                }

                function c(e, t) {
                    a(e, "onload", t)
                }

                function u(e, t) {
                    a(e, "onerror", t)
                }

                function l(e, t) {
                    var n = d.genUrlSep(e);
                    return t = t || "", d.isObject(t) && (t = d.object2query(t)), t && (e += n + t), e
                }

                function f(e, t) {
                    t = t || {};
                    var n = d.uniqueID(), r = {result: t.result, onload: t.onload || d.f, onerror: t.onerror || d.f};
                    h[n] = r, t.onload = c.bind(null, n), t.onerror = u.bind(null, n), t.query && (e = l(e, t.query));
                    var o = t.method || "";
                    return o && !/get/i.test(o) || !t.data || (e = l(e, t.data), t.data = null), t.url = e, r.req = i(t), n
                }

                var d = n(2), m = n(3), p = n(7), y = n(10), h = {}, g = d.f;
                f.filter = function (e) {
                    d.isFunction(e) && (g = e)
                }, f.abort = function (e) {
                    var t = h[e];
                    t && t.req.abort()
                }, e.exports = f
            }, function (t, n) {
                t.exports = e
            }, function (e, t, n) {
                  

                function r(e) {
                    var t = this;
                    e.onuploading && t.on("uploading", e.onuploading), s.call(t, e)
                }

                var i = n(2), o = n(4), s = n(5), a = s.prototype, c = r.prototype = Object.create(a);
                c.doSend = function () {
                    var e = this, t = e.options, n = t.headers, r = e.xhr = new XMLHttpRequest;
                    if ("multipart/form-data" === n["Content-Type"]) {
                        delete n["Content-Type"], r.upload.onprogress = e.onProgress.bind(e), r.upload.onload = e.onProgress.bind(e);
                        var s = t.data;
                        t.data = new window.FormData, s && o.getKeys(s, t.putFileAtEnd).forEach(function (e) {
                            var n = s[e];
                            n.tagName && "INPUT" === n.tagName.toUpperCase() ? "file" === n.type && [].forEach.call(n.files, function (e) {
                                t.data.append(i.dataset(n, "name") || n.name || e.name || "file-" + i.uniqueID(), e)
                            }) : t.data.append(e, n)
                        })
                    }
                    r.onreadystatechange = e.onStateChange.bind(e), 0 !== t.timeout && (e.timer = setTimeout(e.onTimeout.bind(e), t.timeout)), r.open(t.method, t.url, !t.sync), Object.keys(n).forEach(function (e) {
                        r.setRequestHeader(e, n[e])
                    }), t.cookie && "withCredentials" in r && (r.withCredentials = !0), r.send(t.data), e.afterSend()
                }, c.onProgress = function (e) {
                    e.lengthComputable && e.loaded <= e.total && this.emit("uploading", e)
                }, c.onStateChange = function () {
                    var e = this, t = e.xhr;
                    4 === t.readyState && e.onLoad({status: t.status, result: t.responseText || ""})
                }, c.getResponseHeader = function (e) {
                    var t = this.xhr;
                    return t ? t.getResponseHeader(e) : ""
                }, c.destroy = function () {
                    var e = this;
                    clearTimeout(e.timer);
                    try {
                        e.xhr.onreadystatechange = i.f, e.xhr.abort()
                    } catch (t) {
                    }
                    a.destroy.call(e)
                }, e.exports = r
            }, function (e, t, n) {
                  
                var r = n(2), i = {};
                i.isFileInput = function (e) {
                    var t = r.getGlobal();
                    return e.tagName && "INPUT" === e.tagName.toUpperCase() || t.Blob && e instanceof t.Blob
                }, i.getKeys = function (e, t) {
                    var n = Object.keys(e);
                    return t && n.sort(function (t, n) {
                        var r = i.isFileInput(e[t]), o = i.isFileInput(e[n]);
                        return r === o ? 0 : r ? 1 : -1
                    }), n
                }, e.exports = i
            }, function (e, t, n) {
                  

                function r(e) {
                    var t = this;
                    e.onload && t.once("load", e.onload), e.onerror && t.once("error", e.onerror), e.onbeforesend && t.once("beforesend", e.onbeforesend), e.onaftersend && t.once("aftersend", e.onaftersend), e = t.options = i.fetch({
                        method: "GET",
                        url: "",
                        sync: !1,
                        data: null,
                        headers: {},
                        cookie: !1,
                        timeout: 6e4,
                        type: "text",
                        form: null,
                        input: null,
                        putFileAtEnd: !1,
                        proxyUrl: ""
                    }, e);
                    var n = e.headers, r = "Content-Type";
                    i.notexist(n[r]) && (n[r] = "application/x-www-form-urlencoded"), t.send()
                }

                var i = n(2), o = i.f, s = n(6), a = r.prototype = Object.create(s.prototype);
                a.send = function () {
                    var e = this, t = e.options;
                    setTimeout(function () {
                        try {
                            try {
                                e.emit("beforesend", t)
                            } catch (n) {
                            }
                            e.doSend()
                        } catch (n) {
                            e.onError("serverError", "请求失败:" + n.message)
                        }
                    }, 0)
                }, a.doSend = o, a.afterSend = function () {
                    var e = this;
                    setTimeout(function () {
                        e.emit("aftersend", e.options)
                    }, 0)
                }, a.onLoad = function (e) {
                    var t = this, n = t.options, r = e.status, i = e.result;
                    if (0 !== ("" + r).indexOf("2")) return void t.onError("serverError", "服务器返回异常状态", {
                        status: r,
                        result: i
                    });
                    if ("json" === n.type) try {
                        i = JSON.parse(i)
                    } catch (o) {
                        return void t.onError("parseError", i)
                    }
                    t.emit("load", i)
                }, a.onError = function (e, t, n) {
                    var r = i.isObject(n) ? n : {};
                    r.code = e || "error", r.message = t || "发生错误", this.emit("error", r)
                }, a.onTimeout = function () {
                    this.onError("timeout", "请求超时")
                }, a.abort = function () {
                    this.onError("abort", "客户端中止")
                }, a.header = function (e) {
                    var t = this;
                    if (!i.isArray(e)) return t.getResponseHeader(e || "");
                    var n = {};
                    return e.forEach(function (e) {
                        n[e] = t.header(e)
                    }), n
                }, a.getResponseHeader = o, a.destroy = o, e.exports = r
            }, function (e, t, n) {
                var r;
                !function (t) {
                      

                    function i() {
                    }

                    function o(e, t) {
                        for (var n = e.length; n--;) if (e[n].listener === t) return n;
                        return -1
                    }

                    function s(e) {
                        return function () {
                            return this[e].apply(this, arguments)
                        }
                    }

                    function a(e) {
                        return "function" == typeof e || e instanceof RegExp || !(!e || "object" != typeof e) && a(e.listener)
                    }

                    var c = i.prototype, u = t.EventEmitter;
                    c.getListeners = function (e) {
                        var t, n, r = this._getEvents();
                        if (e instanceof RegExp) {
                            t = {};
                            for (n in r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n])
                        } else t = r[e] || (r[e] = []);
                        return t
                    }, c.flattenListeners = function (e) {
                        var t, n = [];
                        for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
                        return n
                    }, c.getListenersAsObject = function (e) {
                        var t, n = this.getListeners(e);
                        return n instanceof Array && (t = {}, t[e] = n), t || n
                    }, c.addListener = function (e, t) {
                        if (!a(t)) throw new TypeError("listener must be a function");
                        var n, r = this.getListenersAsObject(e), i = "object" == typeof t;
                        for (n in r) r.hasOwnProperty(n) && o(r[n], t) === -1 && r[n].push(i ? t : {
                            listener: t,
                            once: !1
                        });
                        return this
                    }, c.on = s("addListener"), c.addOnceListener = function (e, t) {
                        return this.addListener(e, {listener: t, once: !0})
                    }, c.once = s("addOnceListener"), c.defineEvent = function (e) {
                        return this.getListeners(e), this
                    }, c.defineEvents = function (e) {
                        for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
                        return this
                    }, c.removeListener = function (e, t) {
                        var n, r, i = this.getListenersAsObject(e);
                        for (r in i) i.hasOwnProperty(r) && (n = o(i[r], t), n !== -1 && i[r].splice(n, 1));
                        return this
                    }, c.off = s("removeListener"), c.addListeners = function (e, t) {
                        return this.manipulateListeners(!1, e, t)
                    }, c.removeListeners = function (e, t) {
                        return this.manipulateListeners(!0, e, t)
                    }, c.manipulateListeners = function (e, t, n) {
                        var r, i, o = e ? this.removeListener : this.addListener,
                            s = e ? this.removeListeners : this.addListeners;
                        if ("object" != typeof t || t instanceof RegExp) for (r = n.length; r--;) o.call(this, t, n[r]); else for (r in t) t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? o.call(this, r, i) : s.call(this, r, i));
                        return this
                    }, c.removeEvent = function (e) {
                        var t, n = typeof e, r = this._getEvents();
                        if ("string" === n) delete r[e]; else if (e instanceof RegExp) for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t]; else delete this._events;
                        return this
                    }, c.removeAllListeners = s("removeEvent"), c.emitEvent = function (e, t) {
                        var n, r, i, o, s, a = this.getListenersAsObject(e);
                        for (o in a) if (a.hasOwnProperty(o)) for (n = a[o].slice(0), i = 0; i < n.length; i++) r = n[i], r.once === !0 && this.removeListener(e, r.listener), s = r.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, r.listener);
                        return this
                    }, c.trigger = s("emitEvent"), c.emit = function (e) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        return this.emitEvent(e, t)
                    }, c.setOnceReturnValue = function (e) {
                        return this._onceReturnValue = e, this
                    }, c._getOnceReturnValue = function () {
                        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
                    }, c._getEvents = function () {
                        return this._events || (this._events = {})
                    }, i.noConflict = function () {
                        return t.EventEmitter = u, i
                    }, r = function () {
                        return i
                    }.call(t, n, t, e), !(void 0 !== r && (e.exports = r))
                }(this || {})
            }, function (e, t, n) {
                  

                function r(e) {
                    var t = this;
                    t.init(), s.call(t, e)
                }

                var i = n(2), o = n(4), s = n(5), a = n(8), c = "NEJ-UPLOAD-RESULT:", u = {}, l = s.prototype,
                    f = r.prototype = Object.create(l);
                f.init = function () {
                    function e(e) {
                        var t = e.data;
                        if (0 === t.indexOf(c)) {
                            t = JSON.parse(t.replace(c, ""));
                            var n = t.key, r = u[n];
                            r && (delete u[n], t.result = decodeURIComponent(t.result || ""), r.onLoad(t.result))
                        }
                    }

                    function t() {
                        if (!n) {
                            n = !0;
                            var t = i.getGlobal();
                            t.postMessage ? i.on(t, "message", e) : (a.addMsgListener(e), a.startTimer())
                        }
                    }

                    var n = !1;
                    return function () {
                        t()
                    }
                }(), f.doSend = function () {
                    function e() {
                        f.forEach(function (e, t) {
                            var n = d[t];
                            n.parentNode && (e.name = n.name, i.isFunction(e.setAttribute) && e.setAttribute("form", n.getAttribute("form")), n.parentNode.replaceChild(e, n))
                        })
                    }

                    var t = this, n = t.options, r = t.key = "zoro-ajax-upload-iframe-" + i.uniqueID();
                    u[r] = t;
                    var s = t.form = i.html2node('<form style="display:none;"></form>');
                    document.body.appendChild(s), s.target = r, s.method = "POST", s.enctype = "multipart/form-data", s.encoding = "multipart/form-data";
                    var a = n.url, c = i.genUrlSep(a);
                    s.action = a + c + "_proxy_=form";
                    var l = n.data, f = [], d = [];
                    l && o.getKeys(l, n.putFileAtEnd).forEach(function (e) {
                        var t = l[e];
                        if (t.tagName && "INPUT" === t.tagName.toUpperCase()) {
                            if ("file" === t.type) {
                                var n = t, r = n.cloneNode(!0);
                                n.parentNode.insertBefore(r, n);
                                var o = i.dataset(n, "name");
                                o && (n.name = o), s.appendChild(n), i.isFunction(n.setAttribute) && (n.setAttribute("form", ""), n.removeAttribute("form")), f.push(t), d.push(r)
                            }
                        } else {
                            var a = i.html2node('<input type="hidden"/>');
                            a.name = e, a.value = t, s.appendChild(a)
                        }
                    });
                    var m = t.iframe = i.createIframe({
                        name: r, onload: function () {
                            return t.aborted ? void e() : (i.on(m, "load", t.checkResult.bind(t)), s.submit(), e(), void t.afterSend())
                        }
                    })
                }, f.checkResult = function () {
                    var e, t, n = this;
                    try {
                        if (e = n.iframe.contentWindow.document.body, t = (e.innerText || e.textContent || "").trim(), t.indexOf(c) >= 0 || e.innerHTML.indexOf(c) >= 0) return
                    } catch (r) {
                        return
                    }
                    n.onLoad(t)
                }, f.onLoad = function (e) {
                    var t = this;
                    l.onLoad.call(t, {status: 200, result: e}), i.remove(t.form), i.remove(t.iframe), l.destroy.call(t)
                }, f.destroy = function () {
                    i.remove(this.iframe), i.remove(this.form)
                }, f.abort = function () {
                    var e = this;
                    e.aborted = !0, delete u[e.key], l.abort.call(e)
                }, e.exports = r
            }, function (e, t, n) {
                  

                function r(e) {
                    return e && e.__esModule ? e : {"default": e}
                }

                var i = n(9), o = r(i), s = o["default"].getGlobal(), a = {}, c = s.name || "_parent", u = [],
                    l = "MSG|", f = [];
                a.addMsgListener = function (e) {
                    u.push(e)
                };
                var d = function (e) {
                    for (var t = 0, n = u.length; t < n; t++) try {
                        u[t].call(null, e)
                    } catch (r) {
                    }
                }, m = function () {
                    var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
                    return function (t) {
                        return t = t || "", e.test(t) ? RegExp.$1 : "*"
                    }
                }(), p = function () {
                    var e = unescape(s.name || "").trim();
                    if (e && 0 === e.indexOf(l)) {
                        s.name = "";
                        var t = o["default"].string2object(e.replace(l, ""), "|"), n = (t.origin || "").toLowerCase();
                        n && "*" !== n && 0 !== location.href.toLowerCase().indexOf(n) || d({
                            data: JSON.parse(t.data || "null"),
                            source: s.frames[t.self] || t.self,
                            origin: m(t.ref || document.referrer)
                        })
                    }
                }, y = function () {
                    var e, t = function (e, t) {
                        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return !0;
                        return !1
                    };
                    return function () {
                        if (f.length) {
                            e = [];
                            for (var n, r = f.length - 1; r >= 0; r--) n = f[r], t(e, n.w) || (e.push(n.w), f.splice(r, 1), n.w.name = n.d);
                            e = null
                        }
                    }
                }(), h = a.startTimer = function () {
                    var e = !1;
                    return function () {
                        e || (e = !0, s.postMessage || (setInterval(y, 100), setInterval(p, 20)))
                    }
                }();
                a.postMessage = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (o["default"].fillUndef(t, {origin: "*", source: c}), s.postMessage) {
                        var n = t.data;
                        s.FormData || (n = JSON.stringify(n)), e.postMessage(n, t.origin)
                    } else {
                        if (h(), o["default"].isObject(t)) {
                            var r = {};
                            r.origin = t.origin || "", r.ref = location.href, r.self = t.source, r.data = JSON.stringify(t.data), t = l + o["default"].object2string(r, "|", !0)
                        }
                        f.unshift({w: e, d: escape(t)})
                    }
                }, e.exports = a
            }, function (e, t, n) {
                  
                e.exports = n(2)
            }, function (e, t, n) {
                  

                function r(e) {
                    var t = this;
                    t.init(), s.call(t, e)
                }

                var i = n(2), o = n(8), s = n(5), a = {}, c = s.prototype, u = r.prototype = Object.create(c);
                u.init = function () {
                    function e(e) {
                        var t = e.data;
                        if (0 === t.indexOf(n)) {
                            t = JSON.parse(t.replace(n, ""));
                            var r = t.key, i = a[r];
                            i && (delete a[r], t.result = decodeURIComponent(t.result || ""), i.onLoad(t))
                        }
                    }

                    function t() {
                        if (!r) {
                            r = !0;
                            var t = i.getGlobal();
                            t.postMessage ? i.on(t, "message", e) : o.addMsgListener(e)
                        }
                    }

                    var n = "NEJ-AJAX-DATA:", r = !1;
                    return function () {
                        t()
                    }
                }(), u.doSend = function () {
                    var e = this, t = e.options, n = i.url2origin(t.url),
                        r = t.proxyUrl || n + "/res/nej_proxy_frame.html", s = a[r];
                    if (i.isArray(s)) return void s.push(e.doSend.bind(e, t));
                    if (!s) return a[r] = [e.doSend.bind(e, t)], void i.createIframe({
                        src: r, onload: function (e) {
                            var t = a[r];
                            a[r] = i.target(e).contentWindow, t.forEach(function (e) {
                                try {
                                    e()
                                } catch (t) {
                                }
                            })
                        }
                    });
                    if (!e.aborted) {
                        var c = e.key = i.uniqueID();
                        a[c] = e;
                        var u = i.fetch({method: "GET", url: "", data: null, headers: {}, timeout: 0}, t);
                        u.key = c, o.postMessage(s, {data: u}), e.afterSend()
                    }
                }, u.abort = function () {
                    var e = this;
                    e.aborted = !0, delete a[e.key], c.abort.call(e)
                }, e.exports = r
            }, function (e, t, n) {
                  
                var r = n(2), i = n(1), o = function () {
                    var e = /json/i, t = /post/i;
                    return function (n, o) {
                        o = o || {};
                        var s = o.data = o.data || {}, a = o.headers = o.headers || {},
                            c = r.checkWithDefault(a, "Accept", "application/json"),
                            u = r.checkWithDefault(a, "Content-Type", "application/json");
                        return e.test(c) && (o.type = "json"), t.test(o.method) && e.test(u) && (o.data = JSON.stringify(s)), i(n, o)
                    }
                }();
                e.exports = o
            }, function (e, t, n) {
                  
                var r = n(1), i = function (e, t) {
                    return t.method = "POST", t.headers = t.headers || {}, t.headers["Content-Type"] = "multipart/form-data", t.timeout = 0, t.type = t.type || "json", r(e, t)
                };
                e.exports = i
            }])
        })
    }, function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        (function (module) {/*! Socket.IO.js build:0.9.11, development. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */
            var io = module.exports;
            window.io ? module && (module.exports = io = window.io) : window.io = io, function () {
                if (function (e, t) {
                        var n = e;
                        n.version = "0.9.11", n.protocol = 1, n.transports = [], n.j = [], n.sockets = {}, n.connect = function (e, r) {
                            var i, o, s = n.util.parseUri(e);
                            t && t.location && (s.protocol = s.protocol || t.location.protocol.slice(0, -1), s.host = s.host || (t.document ? t.document.domain : t.location.hostname), s.port = s.port || t.location.port), i = n.util.uniqueUri(s);
                            var a = {
                                host: s.host,
                                secure: "https" == s.protocol,
                                port: s.port || ("https" == s.protocol ? 443 : 80),
                                query: s.query || ""
                            };
                            return n.util.merge(a, r), !a["force new connection"] && n.sockets[i] || (o = new n.Socket(a)), !a["force new connection"] && o && (n.sockets[i] = o), o = o || n.sockets[i], o.of(s.path.length > 1 ? s.path : "")
                        }
                    }(module.exports, window), function (e, t) {
                        var n = e.util = {},
                            r = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                            i = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                        n.parseUri = function (e) {
                            for (var t = r.exec(e || ""), n = {}, o = 14; o--;) n[i[o]] = t[o] || "";
                            return n
                        }, n.uniqueUri = function (e) {
                            var n = e.protocol, r = e.host, i = e.port;
                            return "document" in t ? (r = r || document.domain, i = i || ("https" == n && "https:" !== document.location.protocol ? 443 : document.location.port)) : (r = r || "localhost", i || "https" != n || (i = 443)), (n || "http") + "://" + r + ":" + (i || 80)
                        }, n.query = function (e, t) {
                            var r = n.chunkQuery(e || ""), i = [];
                            n.merge(r, n.chunkQuery(t || ""));
                            for (var o in r) r.hasOwnProperty(o) && i.push(o + "=" + r[o]);
                            return i.length ? "?" + i.join("&") : ""
                        }, n.chunkQuery = function (e) {
                            for (var t, n = {}, r = e.split("&"), i = 0, o = r.length; i < o; ++i) t = r[i].split("="), t[0] && (n[t[0]] = t[1]);
                            return n
                        };
                        var o = !1;
                        n.load = function (e) {
                            return "document" in t && "complete" === document.readyState || o ? e() : void n.on(t, "load", e, !1)
                        }, n.on = function (e, t, n, r) {
                            e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener && e.addEventListener(t, n, r)
                        }, n.request = function (e) {
                            if (e && "undefined" != typeof XDomainRequest && !n.ua.hasCORS) return new XDomainRequest;
                            if ("undefined" != typeof XMLHttpRequest && (!e || n.ua.hasCORS)) return new XMLHttpRequest;
                            if (!e) try {
                                return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                            } catch (t) {
                            }
                            return null
                        }, "undefined" != typeof window && n.load(function () {
                            o = !0
                        }), n.defer = function (e) {
                            return n.ua.webkit && "undefined" == typeof importScripts ? void n.load(function () {
                                setTimeout(e, 100)
                            }) : e()
                        }, n.merge = function (e, t, r, i) {
                            var o, s = i || [], a = "undefined" == typeof r ? 2 : r;
                            for (o in t) t.hasOwnProperty(o) && n.indexOf(s, o) < 0 && ("object" == typeof e[o] && a ? n.merge(e[o], t[o], a - 1, s) : (e[o] = t[o], s.push(t[o])));
                            return e
                        }, n.mixin = function (e, t) {
                            n.merge(e.prototype, t.prototype)
                        }, n.inherit = function (e, t) {
                            function n() {
                            }

                            n.prototype = t.prototype, e.prototype = new n
                        }, n.isArray = Array.isArray || function (e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        }, n.intersect = function (e, t) {
                            for (var r = [], i = e.length > t.length ? e : t, o = e.length > t.length ? t : e, s = 0, a = o.length; s < a; s++) ~n.indexOf(i, o[s]) && r.push(o[s]);
                            return r
                        }, n.indexOf = function (e, t, n) {
                            for (var r = e.length, n = n < 0 ? n + r < 0 ? 0 : n + r : n || 0; n < r && e[n] !== t; n++) ;
                            return r <= n ? -1 : n
                        }, n.toArray = function (e) {
                            for (var t = [], n = 0, r = e.length; n < r; n++) t.push(e[n]);
                            return t
                        }, n.ua = {}, n.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
                            try {
                                var e = new XMLHttpRequest
                            } catch (t) {
                                return !1
                            }
                            return void 0 != e.withCredentials
                        }(), n.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent), n.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
                    }("undefined" != typeof io ? io : module.exports, window), function (e, t) {
                        function n() {
                        }

                        e.EventEmitter = n, n.prototype.on = function (e, n) {
                            return this.$events || (this.$events = {}), this.$events[e] ? t.util.isArray(this.$events[e]) ? this.$events[e].push(n) : this.$events[e] = [this.$events[e], n] : this.$events[e] = n, this
                        }, n.prototype.addListener = n.prototype.on, n.prototype.once = function (e, t) {
                            function n() {
                                r.removeListener(e, n), t.apply(this, arguments)
                            }

                            var r = this;
                            return n.listener = t, this.on(e, n), this
                        }, n.prototype.removeListener = function (e, n) {
                            if (this.$events && this.$events[e]) {
                                var r = this.$events[e];
                                if (t.util.isArray(r)) {
                                    for (var i = -1, o = 0, s = r.length; o < s; o++) if (r[o] === n || r[o].listener && r[o].listener === n) {
                                        i = o;
                                        break
                                    }
                                    if (i < 0) return this;
                                    r.splice(i, 1), r.length || delete this.$events[e]
                                } else (r === n || r.listener && r.listener === n) && delete this.$events[e]
                            }
                            return this
                        }, n.prototype.removeAllListeners = function (e) {
                            return void 0 === e ? (this.$events = {}, this) : (this.$events && this.$events[e] && (this.$events[e] = null), this)
                        }, n.prototype.listeners = function (e) {
                            return this.$events || (this.$events = {}), this.$events[e] || (this.$events[e] = []), t.util.isArray(this.$events[e]) || (this.$events[e] = [this.$events[e]]), this.$events[e]
                        }, n.prototype.emit = function (e) {
                            if (!this.$events) return !1;
                            var n = this.$events[e];
                            if (!n) return !1;
                            var r = Array.prototype.slice.call(arguments, 1);
                            if ("function" == typeof n) n.apply(this, r); else {
                                if (!t.util.isArray(n)) return !1;
                                for (var i = n.slice(), o = 0, s = i.length; o < s; o++) i[o].apply(this, r)
                            }
                            return !0
                        }
                    }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (exports, nativeJSON) {
                          

                        function f(e) {
                            return e < 10 ? "0" + e : e
                        }

                        function date(e, t) {
                            return isFinite(e.valueOf()) ? e.getUTCFullYear() + "-" + f(e.getUTCMonth() + 1) + "-" + f(e.getUTCDate()) + "T" + f(e.getUTCHours()) + ":" + f(e.getUTCMinutes()) + ":" + f(e.getUTCSeconds()) + "Z" : null
                        }

                        function quote(e) {
                            return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
                                var t = meta[e];
                                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                            }) + '"' : '"' + e + '"'
                        }

                        function str(e, t) {
                            var n, r, i, o, s, a = gap, c = t[e];
                            switch (c instanceof Date && (c = date(e)), "function" == typeof rep && (c = rep.call(t, e, c)), typeof c) {
                                case"string":
                                    return quote(c);
                                case"number":
                                    return isFinite(c) ? String(c) : "null";
                                case"boolean":
                                case"null":
                                    return String(c);
                                case"object":
                                    if (!c) return "null";
                                    if (gap += indent, s = [], "[object Array]" === Object.prototype.toString.apply(c)) {
                                        for (o = c.length, n = 0; n < o; n += 1) s[n] = str(n, c) || "null";
                                        return i = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]" : "[" + s.join(",") + "]", gap = a, i
                                    }
                                    if (rep && "object" == typeof rep) for (o = rep.length, n = 0; n < o; n += 1) "string" == typeof rep[n] && (r = rep[n], i = str(r, c), i && s.push(quote(r) + (gap ? ": " : ":") + i)); else for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (i = str(r, c), i && s.push(quote(r) + (gap ? ": " : ":") + i));
                                    return i = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}" : "{" + s.join(",") + "}", gap = a, i
                            }
                        }

                        if (nativeJSON && nativeJSON.parse) return exports.JSON = {
                            parse: nativeJSON.parse,
                            stringify: nativeJSON.stringify
                        };
                        var JSON = exports.JSON = {},
                            cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                            gap, indent, meta = {
                                "\b": "\\b",
                                "\t": "\\t",
                                "\n": "\\n",
                                "\f": "\\f",
                                "\r": "\\r",
                                '"': '\\"',
                                "\\": "\\\\"
                            }, rep;
                        JSON.stringify = function (e, t, n) {
                            var r;
                            if (gap = "", indent = "", "number" == typeof n) for (r = 0; r < n; r += 1) indent += " "; else "string" == typeof n && (indent = n);
                            if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
                            return str("", {"": e})
                        }, JSON.parse = function (text, reviver) {
                            function walk(e, t) {
                                var n, r, i = e[t];
                                if (i && "object" == typeof i) for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), void 0 !== r ? i[n] = r : delete i[n]);
                                return reviver.call(e, t, i)
                            }

                            var j;
                            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
                                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
                            throw new SyntaxError("JSON.parse")
                        }
                    }("undefined" != typeof io ? io : module.exports, "undefined" != typeof JSON ? JSON : void 0), function (e, t) {
                        var n = e.parser = {},
                            r = n.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"],
                            i = n.reasons = ["transport not supported", "client not handshaken", "unauthorized"],
                            o = n.advice = ["reconnect"], s = t.JSON, a = t.util.indexOf;
                        n.encodePacket = function (e) {
                            var t = a(r, e.type), n = e.id || "", c = e.endpoint || "", u = e.ack, l = null;
                            switch (e.type) {
                                case"error":
                                    var f = e.reason ? a(i, e.reason) : "", d = e.advice ? a(o, e.advice) : "";
                                    "" === f && "" === d || (l = f + ("" !== d ? "+" + d : ""));
                                    break;
                                case"message":
                                    "" !== e.data && (l = e.data);
                                    break;
                                case"event":
                                    var m = {name: e.name};
                                    e.args && e.args.length && (m.args = e.args), l = s.stringify(m);
                                    break;
                                case"json":
                                    l = s.stringify(e.data);
                                    break;
                                case"connect":
                                    e.qs && (l = e.qs);
                                    break;
                                case"ack":
                                    l = e.ackId + (e.args && e.args.length ? "+" + s.stringify(e.args) : "")
                            }
                            var p = [t, n + ("data" == u ? "+" : ""), c];
                            return null !== l && void 0 !== l && p.push(l), p.join(":")
                        }, n.encodePayload = function (e) {
                            var t = "";
                            if (1 == e.length) return e[0];
                            for (var n = 0, r = e.length; n < r; n++) {
                                var i = e[n];
                                t += "�" + i.length + "�" + e[n]
                            }
                            return t
                        };
                        var c = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
                        n.decodePacket = function (e) {
                            var t = e.match(c);
                            if (!t) return {};
                            var n = t[2] || "", e = t[5] || "", a = {type: r[t[1]], endpoint: t[4] || ""};
                            switch (n && (a.id = n, t[3] ? a.ack = "data" : a.ack = !0), a.type) {
                                case"error":
                                    var t = e.split("+");
                                    a.reason = i[t[0]] || "", a.advice = o[t[1]] || "";
                                    break;
                                case"message":
                                    a.data = e || "";
                                    break;
                                case"event":
                                    try {
                                        var u = s.parse(e);
                                        a.name = u.name, a.args = u.args
                                    } catch (l) {
                                    }
                                    a.args = a.args || [];
                                    break;
                                case"json":
                                    try {
                                        a.data = s.parse(e)
                                    } catch (l) {
                                    }
                                    break;
                                case"connect":
                                    a.qs = e || "";
                                    break;
                                case"ack":
                                    var t = e.match(/^([0-9]+)(\+)?(.*)/);
                                    if (t && (a.ackId = t[1], a.args = [], t[3])) try {
                                        a.args = t[3] ? s.parse(t[3]) : []
                                    } catch (l) {
                                    }
                                    break;
                                case"disconnect":
                                case"heartbeat":
                            }
                            return a
                        }, n.decodePayload = function (e) {
                            var t = function (e, t) {
                                for (var n = 0, r = e; r < t.length; r++) {
                                    if ("�" == t.charAt(r)) return n;
                                    n++
                                }
                                return n
                            };
                            if ("�" == e.charAt(0)) {
                                for (var r = [], i = 1, o = ""; i < e.length; i++) if ("�" == e.charAt(i)) {
                                    var s = e.substr(i + 1).substr(0, o);
                                    if ("�" != e.charAt(i + 1 + Number(o)) && i + 1 + Number(o) != e.length) {
                                        var a = Number(o);
                                        l = t(i + a + 1, e), s = e.substr(i + 1).substr(0, a + l), i += l
                                    }
                                    r.push(n.decodePacket(s)), i += Number(o) + 1, o = ""
                                } else o += e.charAt(i);
                                return r
                            }
                            return [n.decodePacket(e)]
                        }
                    }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (e, t) {
                        function n(e, t) {
                            this.socket = e, this.sessid = t
                        }

                        e.Transport = n, t.util.mixin(n, t.EventEmitter), n.prototype.heartbeats = function () {
                            return !0
                        }, n.prototype.onData = function (e) {
                            if (this !== this.socket.transport) return this;
                            if (this.clearCloseTimeout(), (this.socket.connected || this.socket.connecting || this.socket.reconnecting) && this.setCloseTimeout(), "" !== e) {
                                var n = t.parser.decodePayload(e);
                                if (n && n.length) for (var r = 0, i = n.length; r < i; r++) this.onPacket(n[r])
                            }
                            return this
                        }, n.prototype.onPacket = function (e) {
                            return this.socket.setHeartbeatTimeout(), "heartbeat" == e.type ? this.onHeartbeat() : ("connect" == e.type && "" == e.endpoint && this.onConnect(), "error" == e.type && "reconnect" == e.advice && (this.isOpen = !1), this.socket.onPacket(e), this)
                        }, n.prototype.setCloseTimeout = function () {
                            if (!this.closeTimeout) {
                                var e = this;
                                this.closeTimeout = setTimeout(function () {
                                    e.onDisconnect()
                                }, this.socket.closeTimeout)
                            }
                        }, n.prototype.onDisconnect = function () {
                            return this.isOpen && this.close(), this.clearTimeouts(), this.socket.transport === this ? this.socket.onDisconnect() : this.socket.setBuffer(!1), this
                        }, n.prototype.onConnect = function () {
                            return this.socket.onConnect(), this
                        }, n.prototype.clearCloseTimeout = function () {
                            this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = null)
                        }, n.prototype.clearTimeouts = function () {
                            this.clearCloseTimeout(), this.reopenTimeout && clearTimeout(this.reopenTimeout)
                        }, n.prototype.packet = function (e) {
                            this.send(t.parser.encodePacket(e))
                        }, n.prototype.onHeartbeat = function (e) {
                            this.packet({type: "heartbeat"})
                        }, n.prototype.onOpen = function () {
                            this.isOpen = !0, this.clearCloseTimeout(), this.socket.onOpen()
                        }, n.prototype.onClose = function () {
                            this.isOpen = !1, this.socket.transport === this ? this.socket.onClose() : this.socket.setBuffer(!1), this.onDisconnect()
                        }, n.prototype.prepareUrl = function () {
                            var e = this.socket.options;
                            return this.scheme() + "://" + e.host + ":" + e.port + "/" + e.resource + "/" + t.protocol + "/" + this.name + "/" + this.sessid
                        }, n.prototype.ready = function (e, t) {
                            t.call(this)
                        }
                    }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (e, t, n) {
                        function r(e) {
                            if (this.options = {
                                    port: 80,
                                    secure: !1,
                                    document: "document" in n && document,
                                    resource: "socket.io",
                                    transports: e.transports || t.transports,
                                    "connect timeout": 1e4,
                                    "try multiple transports": !0,
                                    reconnect: !0,
                                    "reconnection delay": 500,
                                    "reconnection limit": 1 / 0,
                                    "reopen delay": 3e3,
                                    "max reconnection attempts": 10,
                                    "sync disconnect on unload": !1,
                                    "auto connect": !0,
                                    "flash policy port": 10843,
                                    manualFlush: !1
                                }, t.util.merge(this.options, e), this.connected = !1, this.open = !1, this.connecting = !1, this.reconnecting = !1, this.namespaces = {}, this.buffer = [], this.doBuffer = !1, this.options["sync disconnect on unload"] && (!this.isXDomain() || t.util.ua.hasCORS)) {
                                var r = this;
                                t.util.on(n, "beforeunload", function () {
                                    r.disconnectSync()
                                }, !1)
                            }
                            this.options["auto connect"] && this.connect()
                        }

                        function i() {
                        }

                        e.Socket = r, t.util.mixin(r, t.EventEmitter), r.prototype.of = function (e) {
                            return this.namespaces[e] || (this.namespaces[e] = new t.SocketNamespace(this, e), "" !== e && this.namespaces[e].packet({type: "connect"})), this.namespaces[e]
                        }, r.prototype.publish = function () {
                            this.emit.apply(this, arguments);
                            var e;
                            for (var t in this.namespaces) this.namespaces.hasOwnProperty(t) && (e = this.of(t), e.$emit.apply(e, arguments))
                        }, r.prototype.handshake = function (e) {
                            function n(t) {
                                t instanceof Error ? (r.connecting = !1, r.onError(t.message)) : e.apply(null, t.split(":"))
                            }

                            var r = this, o = this.options,
                                s = ["http" + (o.secure ? "s" : "") + ":/", o.host + ":" + o.port, o.resource, t.protocol, t.util.query(this.options.query, "t=" + +new Date)].join("/");
                            if (this.isXDomain() && !t.util.ua.hasCORS) {
                                var a = document.getElementsByTagName("script")[0],
                                    c = document.createElement("script");
                                c.src = s + "&jsonp=" + t.j.length, c.onreadystatechange = function () {
                                    "loaded" == this.readyState && c.parentNode && (c.parentNode.removeChild(c), r.connecting = !1, !r.reconnecting && r.onError("Server down or port not open"), r.publish("handshake_failed"))
                                }, a.parentNode.insertBefore(c, a), t.j.push(function (e) {
                                    n(e), c.parentNode.removeChild(c)
                                })
                            } else {
                                var u = t.util.request();
                                u.open("GET", s, !0), this.isXDomain() && (u.withCredentials = !0), u.onreadystatechange = function () {
                                    4 == u.readyState && (u.onreadystatechange = i, 200 == u.status ? n(u.responseText) : 403 == u.status ? (r.onError(u.responseText), r.publish("handshake_failed")) : (r.connecting = !1, !r.reconnecting && r.onError(u.responseText), r.publish("handshake_failed")))
                                }, u.send(null)
                            }
                        }, r.prototype.connect = function (e) {
                            if (this.connecting) return this;
                            var n = this;
                            return n.connecting = !0, this.handshake(function (r, i, o, s) {
                                n.sessionid = r, n.closeTimeout = 1e3 * o, n.heartbeatTimeout = 1e3 * i, n.transports || (n.transports = n.origTransports = s ? t.util.intersect(s.split(","), n.options.transports) : n.options.transports), n.setHeartbeatTimeout(), n.once("connect", function () {
                                    clearTimeout(n.connectTimeoutTimer), n.connectTimeoutTimer = null, e && "function" == typeof e && e()
                                }), n.doConnect()
                            }), this
                        }, r.prototype.doConnect = function () {
                            var e = this;
                            return e.transport && e.transport.clearTimeouts(), e.transport = e.getTransport(e.transports), e.transport ? void e.transport.ready(e, function () {
                                e.connecting = !0, e.publish("connecting", e.transport.name), e.transport.open(), e.options["connect timeout"] && (e.connectTimeoutTimer && clearTimeout(e.connectTimeoutTimer), e.connectTimeoutTimer = setTimeout(e.tryNextTransport.bind(e), e.options["connect timeout"]))
                            }) : e.publish("connect_failed")
                        }, r.prototype.getTransport = function (e) {
                            for (var n, r = e || this.transports, i = 0; n = r[i]; i++) if (t.Transport[n] && t.Transport[n].check(this) && (!this.isXDomain() || t.Transport[n].xdomainCheck(this))) {
                                var o = new t.Transport[n](this, this.sessionid);
                                return o
                            }
                            return null
                        }, r.prototype.tryNextTransport = function () {
                            var e = this;
                            if (!e.connected && (e.connecting = !1, e.options["try multiple transports"])) {
                                for (var t = e.transports; t.length > 0 && t.splice(0, 1)[0] != e.transport.name;) ;
                                t.length ? e.doConnect() : e.publish("connect_failed")
                            }
                        }, r.prototype.setHeartbeatTimeout = function () {
                            if (clearTimeout(this.heartbeatTimeoutTimer), !this.transport || this.transport.heartbeats()) {
                                var e = this;
                                this.heartbeatTimeoutTimer = setTimeout(function () {
                                    e.transport && e.transport.onClose()
                                }, this.heartbeatTimeout)
                            }
                        }, r.prototype.packet = function (e) {
                            return this.connected && !this.doBuffer ? this.transport.packet(e) : this.buffer.push(e), this
                        }, r.prototype.setBuffer = function (e) {
                            this.doBuffer = e, !e && this.connected && this.buffer.length && (this.options.manualFlush || this.flushBuffer())
                        }, r.prototype.flushBuffer = function () {
                            this.transport.payload(this.buffer), this.buffer = []
                        }, r.prototype.disconnect = function () {
                            return (this.connected || this.connecting) && (this.open && this.of("").packet({type: "disconnect"}), this.onDisconnect("booted")), this
                        }, r.prototype.disconnectSync = function () {
                            var e = t.util.request(),
                                n = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, t.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
                            e.open("GET", n, !1), e.send(null), this.onDisconnect("booted")
                        }, r.prototype.isXDomain = function () {
                            var e = n.location.port || ("https:" == n.location.protocol ? 443 : 80);
                            return this.options.host !== n.location.hostname || this.options.port != e
                        }, r.prototype.onConnect = function () {
                            this.connected || (this.connected = !0, this.connecting = !1, this.doBuffer || this.setBuffer(!1), this.emit("connect"))
                        }, r.prototype.onOpen = function () {
                            this.open = !0
                        }, r.prototype.onClose = function () {
                            this.open = !1, clearTimeout(this.heartbeatTimeoutTimer)
                        }, r.prototype.onPacket = function (e) {
                            this.of(e.endpoint).onPacket(e)
                        }, r.prototype.onError = function (e) {
                            e && e.advice && "reconnect" === e.advice && (this.connected || this.connecting) && (this.disconnect(), this.options.reconnect && this.reconnect()), this.publish("error", e && e.reason ? e.reason : e)
                        }, r.prototype.onDisconnect = function (e) {
                            var t = this.connected, n = this.connecting;
                            this.connected = !1, this.connecting = !1, this.open = !1, (t || n) && (this.transport.close(), this.transport.clearTimeouts(), t && (this.publish("disconnect", e), "booted" != e && this.options.reconnect && !this.reconnecting && this.reconnect()), n && this.tryNextTransport())
                        }, r.prototype.reconnect = function () {
                            function e() {
                                if (n.connected) {
                                    for (var e in n.namespaces) n.namespaces.hasOwnProperty(e) && "" !== e && n.namespaces[e].packet({type: "connect"});
                                    n.publish("reconnect", n.transport.name, n.reconnectionAttempts)
                                }
                                clearTimeout(n.reconnectionTimer), n.removeListener("connect_failed", t), n.removeListener("connect", t), n.reconnecting = !1, delete n.reconnectionAttempts, delete n.reconnectionDelay, delete n.reconnectionTimer, delete n.redoTransports, n.options["try multiple transports"] = i
                            }

                            function t() {
                                if (n.reconnecting) return n.connected ? e() : n.connecting && n.reconnecting ? n.reconnectionTimer = setTimeout(t, 1e3) : void(n.reconnectionAttempts++ >= r ? n.redoTransports ? (n.publish("reconnect_failed"), e()) : (n.on("connect_failed", t), n.options["try multiple transports"] = !0, n.transports = n.origTransports, n.transport = n.getTransport(), n.redoTransports = !0, n.connect()) : (n.reconnectionDelay < o && (n.reconnectionDelay *= 2), n.connect(), n.publish("reconnecting", n.reconnectionDelay, n.reconnectionAttempts), n.reconnectionTimer = setTimeout(t, n.reconnectionDelay)))
                            }

                            this.reconnecting = !0, this.reconnectionAttempts = 0, this.reconnectionDelay = this.options["reconnection delay"];
                            var n = this, r = this.options["max reconnection attempts"],
                                i = this.options["try multiple transports"], o = this.options["reconnection limit"];
                            this.options["try multiple transports"] = !1, this.reconnectionTimer = setTimeout(t, this.reconnectionDelay), this.on("connect", t)
                        }
                    }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, window), function (e, t) {
                        function n(e, t) {
                            this.socket = e, this.name = t || "", this.flags = {}, this.json = new r(this, "json"), this.ackPackets = 0, this.acks = {}
                        }

                        function r(e, t) {
                            this.namespace = e, this.name = t
                        }

                        e.SocketNamespace = n, t.util.mixin(n, t.EventEmitter), n.prototype.$emit = t.EventEmitter.prototype.emit, n.prototype.of = function () {
                            return this.socket.of.apply(this.socket, arguments)
                        }, n.prototype.packet = function (e) {
                            return e.endpoint = this.name, this.socket.packet(e), this.flags = {}, this
                        }, n.prototype.send = function (e, t) {
                            var n = {type: this.flags.json ? "json" : "message", data: e};
                            return "function" == typeof t && (n.id = ++this.ackPackets, n.ack = !0, this.acks[n.id] = t), this.packet(n)
                        }, n.prototype.emit = function (e) {
                            var t = Array.prototype.slice.call(arguments, 1), n = t[t.length - 1],
                                r = {type: "event", name: e};
                            return "function" == typeof n && (r.id = ++this.ackPackets, r.ack = "data", this.acks[r.id] = n, t = t.slice(0, t.length - 1)), r.args = t, this.packet(r)
                        }, n.prototype.disconnect = function () {
                            return "" === this.name ? this.socket.disconnect() : (this.packet({type: "disconnect"}), this.$emit("disconnect")), this
                        }, n.prototype.onPacket = function (e) {
                            function n() {
                                r.packet({type: "ack", args: t.util.toArray(arguments), ackId: e.id})
                            }

                            var r = this;
                            switch (e.type) {
                                case"connect":
                                    this.$emit("connect");
                                    break;
                                case"disconnect":
                                    "" === this.name ? this.socket.onDisconnect(e.reason || "booted") : this.$emit("disconnect", e.reason);
                                    break;
                                case"message":
                                case"json":
                                    var i = ["message", e.data];
                                    "data" == e.ack ? i.push(n) : e.ack && this.packet({
                                        type: "ack",
                                        ackId: e.id
                                    }), this.$emit.apply(this, i);
                                    break;
                                case"event":
                                    var i = [e.name].concat(e.args);
                                    "data" == e.ack && i.push(n), this.$emit.apply(this, i);
                                    break;
                                case"ack":
                                    this.acks[e.ackId] && (this.acks[e.ackId].apply(this, e.args), delete this.acks[e.ackId]);
                                    break;
                                case"error":
                                    e.advice ? this.socket.onError(e) : "unauthorized" == e.reason ? this.$emit("connect_failed", e.reason) : this.$emit("error", e.reason)
                            }
                        }, r.prototype.send = function () {
                            this.namespace.flags[this.name] = !0, this.namespace.send.apply(this.namespace, arguments)
                        }, r.prototype.emit = function () {
                            this.namespace.flags[this.name] = !0, this.namespace.emit.apply(this.namespace, arguments)
                        }
                    }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (e, t, n) {
                        function r(e) {
                            t.Transport.apply(this, arguments)
                        }

                        e.websocket = r, t.util.inherit(r, t.Transport), r.prototype.name = "websocket", r.prototype.open = function () {
                            var e, r = t.util.query(this.socket.options.query), i = this;
                            return e || (e = n.MozWebSocket || n.WebSocket), this.websocket = new e(this.prepareUrl() + r), this.websocket.onopen = function () {
                                i.onOpen(), i.socket.setBuffer(!1)
                            }, this.websocket.onmessage = function (e) {
                                i.onData(e.data)
                            }, this.websocket.onclose = function () {
                                i.socket.setBuffer(!0), i.onClose()
                            }, this.websocket.onerror = function (e) {
                                i.onError(e)
                            }, this
                        }, t.util.ua.iDevice ? r.prototype.send = function (e) {
                            var t = this;
                            return setTimeout(function () {
                                t.websocket.send(e)
                            }, 0), this
                        } : r.prototype.send = function (e) {
                            return this.websocket.send(e), this
                        }, r.prototype.payload = function (e) {
                            for (var t = 0, n = e.length; t < n; t++) this.packet(e[t]);
                            return this
                        }, r.prototype.close = function () {
                            return this.websocket.close(), this
                        }, r.prototype.onError = function (e) {
                            this.socket.onError(e)
                        }, r.prototype.scheme = function () {
                            return this.socket.options.secure ? "wss" : "ws"
                        }, r.check = function () {
                            return "WebSocket" in n && !("__addTask" in WebSocket) || "MozWebSocket" in n
                        }, r.xdomainCheck = function () {
                            return !0
                        }, t.transports.push("websocket")
                    }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, window), function (e, t) {
                        function n() {
                            t.Transport.websocket.apply(this, arguments)
                        }

                        e.flashsocket = n, t.util.inherit(n, t.Transport.websocket), n.prototype.name = "flashsocket", n.prototype.open = function () {
                            var e = this, n = arguments;
                            return WebSocket.__addTask(function () {
                                t.Transport.websocket.prototype.open.apply(e, n)
                            }), this
                        }, n.prototype.send = function () {
                            var e = this, n = arguments;
                            return WebSocket.__addTask(function () {
                                t.Transport.websocket.prototype.send.apply(e, n)
                            }), this
                        }, n.prototype.close = function () {
                            return WebSocket.__tasks.length = 0, t.Transport.websocket.prototype.close.call(this), this
                        }, n.prototype.ready = function (e, r) {
                            function i() {
                                var t = e.options, i = t["flash policy port"],
                                    s = ["http" + (t.secure ? "s" : "") + ":/", t.host + ":" + t.port, t.resource, "static/flashsocket", "WebSocketMain" + (e.isXDomain() ? "Insecure" : "") + ".swf"];
                                n.loaded || ("undefined" == typeof WEB_SOCKET_SWF_LOCATION && (WEB_SOCKET_SWF_LOCATION = s.join("/")), 843 !== i && WebSocket.loadFlashPolicyFile("xmlsocket://" + t.host + ":" + i), WebSocket.__initialize(), n.loaded = !0), r.call(o)
                            }

                            var o = this;
                            return document.body ? i() : void t.util.load(i)
                        }, n.check = function () {
                            return !!("undefined" != typeof WebSocket && "__initialize" in WebSocket && swfobject) && swfobject.getFlashPlayerVersion().major >= 10
                        }, n.xdomainCheck = function () {
                            return !0
                        }, "undefined" != typeof window && (window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = !0), t.transports.push("flashsocket")
                    }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports), "undefined" != typeof window && "undefined" != typeof window.document) var swfobject = function () {
                    function e() {
                        if (!H) {
                            try {
                                var e = N.getElementsByTagName("body")[0].appendChild(h("span"));
                                e.parentNode.removeChild(e)
                            } catch (t) {
                                return
                            }
                            H = !0;
                            for (var n = L.length, r = 0; r < n; r++) L[r]()
                        }
                    }

                    function t(e) {
                        H ? e() : L[L.length] = e
                    }

                    function n(e) {
                        if (typeof F.addEventListener != _) F.addEventListener("load", e, !1); else if (typeof N.addEventListener != _) N.addEventListener("load", e, !1); else if (typeof F.attachEvent != _) g(F, "onload", e); else if ("function" == typeof F.onload) {
                            var t = F.onload;
                            F.onload = function () {
                                t(), e()
                            }
                        } else F.onload = e
                    }

                    function r() {
                        D ? i() : o()
                    }

                    function i() {
                        var e = N.getElementsByTagName("body")[0], t = h(I);
                        t.setAttribute("type", A);
                        var n = e.appendChild(t);
                        if (n) {
                            var r = 0;
                            !function () {
                                if (typeof n.GetVariable != _) {
                                    var i = n.GetVariable("$version");
                                    i && (i = i.split(" ")[1].split(","), V.pv = [parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10)])
                                } else if (r < 10) return r++, void setTimeout(arguments.callee, 10);
                                e.removeChild(t), n = null, o()
                            }()
                        } else o()
                    }

                    function o() {
                        var e = B.length;
                        if (e > 0) for (var t = 0; t < e; t++) {
                            var n = B[t].id, r = B[t].callbackFn, i = {success: !1, id: n};
                            if (V.pv[0] > 0) {
                                var o = y(n);
                                if (o) if (!v(B[t].swfVersion) || V.wk && V.wk < 312) if (B[t].expressInstall && a()) {
                                    var l = {};
                                    l.data = B[t].expressInstall, l.width = o.getAttribute("width") || "0", l.height = o.getAttribute("height") || "0", o.getAttribute("class") && (l.styleclass = o.getAttribute("class")), o.getAttribute("align") && (l.align = o.getAttribute("align"));
                                    for (var f = {}, d = o.getElementsByTagName("param"), m = d.length, p = 0; p < m; p++) "movie" != d[p].getAttribute("name").toLowerCase() && (f[d[p].getAttribute("name")] = d[p].getAttribute("value"));
                                    c(l, f, n, r)
                                } else u(o), r && r(i); else M(n, !0), r && (i.success = !0, i.ref = s(n), r(i))
                            } else if (M(n, !0), r) {
                                var h = s(n);
                                h && typeof h.SetVariable != _ && (i.success = !0, i.ref = h), r(i)
                            }
                        }
                    }

                    function s(e) {
                        var t = null, n = y(e);
                        if (n && "OBJECT" == n.nodeName) if (typeof n.SetVariable != _) t = n; else {
                            var r = n.getElementsByTagName(I)[0];
                            r && (t = r)
                        }
                        return t
                    }

                    function a() {
                        return !$ && v("6.0.65") && (V.win || V.mac) && !(V.wk && V.wk < 312)
                    }

                    function c(e, t, n, r) {
                        $ = !0, w = r || null, O = {success: !1, id: n};
                        var i = y(n);
                        if (i) {
                            "OBJECT" == i.nodeName ? (k = l(i), S = null) : (k = i, S = n), e.id = j, (typeof e.width == _ || !/%$/.test(e.width) && parseInt(e.width, 10) < 310) && (e.width = "310"), (typeof e.height == _ || !/%$/.test(e.height) && parseInt(e.height, 10) < 137) && (e.height = "137"), N.title = N.title.slice(0, 47) + " - Flash Player Installation";
                            var o = V.ie && V.win ? ["Active"].concat("").join("X") : "PlugIn",
                                s = "MMredirectURL=" + F.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + o + "&MMdoctitle=" + N.title;
                            if (typeof t.flashvars != _ ? t.flashvars += "&" + s : t.flashvars = s, V.ie && V.win && 4 != i.readyState) {
                                var a = h("div");
                                n += "SWFObjectNew", a.setAttribute("id", n), i.parentNode.insertBefore(a, i), i.style.display = "none", function () {
                                    4 == i.readyState ? i.parentNode.removeChild(i) : setTimeout(arguments.callee, 10)
                                }()
                            }
                            f(e, t, n)
                        }
                    }

                    function u(e) {
                        if (V.ie && V.win && 4 != e.readyState) {
                            var t = h("div");
                            e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(l(e), t), e.style.display = "none", function () {
                                4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
                            }()
                        } else e.parentNode.replaceChild(l(e), e)
                    }

                    function l(e) {
                        var t = h("div");
                        if (V.win && V.ie) t.innerHTML = e.innerHTML; else {
                            var n = e.getElementsByTagName(I)[0];
                            if (n) {
                                var r = n.childNodes;
                                if (r) for (var i = r.length, o = 0; o < i; o++) 1 == r[o].nodeType && "PARAM" == r[o].nodeName || 8 == r[o].nodeType || t.appendChild(r[o].cloneNode(!0))
                            }
                        }
                        return t
                    }

                    function f(e, t, n) {
                        var r, i = y(n);
                        if (V.wk && V.wk < 312) return r;
                        if (i) if (typeof e.id == _ && (e.id = n), V.ie && V.win) {
                            var o = "";
                            for (var s in e) e[s] != Object.prototype[s] && ("data" == s.toLowerCase() ? t.movie = e[s] : "styleclass" == s.toLowerCase() ? o += ' class="' + e[s] + '"' : "classid" != s.toLowerCase() && (o += " " + s + '="' + e[s] + '"'));
                            var a = "";
                            for (var c in t) t[c] != Object.prototype[c] && (a += '<param name="' + c + '" value="' + t[c] + '" />');
                            i.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + o + ">" + a + "</object>", q[q.length] = e.id, r = y(e.id)
                        } else {
                            var u = h(I);
                            u.setAttribute("type", A);
                            for (var l in e) e[l] != Object.prototype[l] && ("styleclass" == l.toLowerCase() ? u.setAttribute("class", e[l]) : "classid" != l.toLowerCase() && u.setAttribute(l, e[l]));
                            for (var f in t) t[f] != Object.prototype[f] && "movie" != f.toLowerCase() && d(u, f, t[f]);
                            i.parentNode.replaceChild(u, i), r = u
                        }
                        return r
                    }

                    function d(e, t, n) {
                        var r = h("param");
                        r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r)
                    }

                    function m(e) {
                        var t = y(e);
                        t && "OBJECT" == t.nodeName && (V.ie && V.win ? (t.style.display = "none", function () {
                            4 == t.readyState ? p(e) : setTimeout(arguments.callee, 10)
                        }()) : t.parentNode.removeChild(t))
                    }

                    function p(e) {
                        var t = y(e);
                        if (t) {
                            for (var n in t) "function" == typeof t[n] && (t[n] = null);
                            t.parentNode.removeChild(t)
                        }
                    }

                    function y(e) {
                        var t = null;
                        try {
                            t = N.getElementById(e)
                        } catch (n) {
                        }
                        return t
                    }

                    function h(e) {
                        return N.createElement(e)
                    }

                    function g(e, t, n) {
                        e.attachEvent(t, n), W[W.length] = [e, t, n]
                    }

                    function v(e) {
                        var t = V.pv, n = e.split(".");
                        return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2]
                    }

                    function b(e, t, n, r) {
                        if (!V.ie || !V.mac) {
                            var i = N.getElementsByTagName("head")[0];
                            if (i) {
                                var o = n && "string" == typeof n ? n : "screen";
                                if (r && (C = null, x = null), !C || x != o) {
                                    var s = h("style");
                                    s.setAttribute("type", "text/css"), s.setAttribute("media", o), C = i.appendChild(s), V.ie && V.win && typeof N.styleSheets != _ && N.styleSheets.length > 0 && (C = N.styleSheets[N.styleSheets.length - 1]), x = o
                                }
                                V.ie && V.win ? C && typeof C.addRule == I && C.addRule(e, t) : C && typeof N.createTextNode != _ && C.appendChild(N.createTextNode(e + " {" + t + "}"))
                            }
                        }
                    }

                    function M(e, t) {
                        if (X) {
                            var n = t ? "visible" : "hidden";
                            H && y(e) ? y(e).style.visibility = n : b("#" + e, "visibility:" + n)
                        }
                    }

                    function T(e) {
                        var t = /[\\\"<>\.;]/, n = null != t.exec(e);
                        return n && typeof encodeURIComponent != _ ? encodeURIComponent(e) : e
                    }

                    var k, S, w, O, C, x, _ = "undefined", I = "object", P = "Shockwave Flash",
                        E = "ShockwaveFlash.ShockwaveFlash", A = "application/x-shockwave-flash",
                        j = "SWFObjectExprInst", R = "onreadystatechange", F = window, N = document, U = navigator,
                        D = !1, L = [r], B = [], q = [], W = [], H = !1, $ = !1, X = !0, V = function () {
                            var e = typeof N.getElementById != _ && typeof N.getElementsByTagName != _ && typeof N.createElement != _,
                                t = U.userAgent.toLowerCase(), n = U.platform.toLowerCase(),
                                r = n ? /win/.test(n) : /win/.test(t), i = n ? /mac/.test(n) : /mac/.test(t),
                                o = !!/webkit/.test(t) && parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")),
                                s = !1, a = [0, 0, 0], c = null;
                            if (typeof U.plugins != _ && typeof U.plugins[P] == I) c = U.plugins[P].description, !c || typeof U.mimeTypes != _ && U.mimeTypes[A] && !U.mimeTypes[A].enabledPlugin || (D = !0, s = !1, c = c.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), a[0] = parseInt(c.replace(/^(.*)\..*$/, "$1"), 10), a[1] = parseInt(c.replace(/^.*\.(.*)\s.*$/, "$1"), 10), a[2] = /[a-zA-Z]/.test(c) ? parseInt(c.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0); else if (typeof F[["Active"].concat("Object").join("X")] != _) try {
                                var u = new (window[["Active"].concat("Object").join("X")])(E);
                                u && (c = u.GetVariable("$version"), c && (s = !0, c = c.split(" ")[1].split(","), a = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)]))
                            } catch (l) {
                            }
                            return {w3: e, pv: a, wk: o, ie: s, win: r, mac: i}
                        }();
                    (function () {
                        V.w3 && ((typeof N.readyState != _ && "complete" == N.readyState || typeof N.readyState == _ && (N.getElementsByTagName("body")[0] || N.body)) && e(), H || (typeof N.addEventListener != _ && N.addEventListener("DOMContentLoaded", e, !1), V.ie && V.win && (N.attachEvent(R, function () {
                            "complete" == N.readyState && (N.detachEvent(R, arguments.callee), e())
                        }), F == top && !function () {
                            if (!H) {
                                try {
                                    N.documentElement.doScroll("left")
                                } catch (t) {
                                    return void setTimeout(arguments.callee, 0)
                                }
                                e()
                            }
                        }()), V.wk && !function () {
                            if (!H) return /loaded|complete/.test(N.readyState) ? void e() : void setTimeout(arguments.callee, 0)
                        }(), n(e)))
                    })(), function () {
                        V.ie && V.win && window.attachEvent("onunload", function () {
                            for (var e = W.length, t = 0; t < e; t++) W[t][0].detachEvent(W[t][1], W[t][2]);
                            for (var n = q.length, r = 0; r < n; r++) m(q[r]);
                            for (var i in V) V[i] = null;
                            V = null;
                            for (var o in swfobject) swfobject[o] = null;
                            swfobject = null
                        })
                    }();
                    return {
                        registerObject: function (e, t, n, r) {
                            if (V.w3 && e && t) {
                                var i = {};
                                i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = r, B[B.length] = i, M(e, !1)
                            } else r && r({success: !1, id: e})
                        }, getObjectById: function (e) {
                            if (V.w3) return s(e)
                        }, embedSWF: function (e, n, r, i, o, s, u, l, d, m) {
                            var p = {success: !1, id: n};
                            V.w3 && !(V.wk && V.wk < 312) && e && n && r && i && o ? (M(n, !1), t(function () {
                                r += "", i += "";
                                var t = {};
                                if (d && typeof d === I) for (var y in d) t[y] = d[y];
                                t.data = e, t.width = r, t.height = i;
                                var h = {};
                                if (l && typeof l === I) for (var g in l) h[g] = l[g];
                                if (u && typeof u === I) for (var b in u) typeof h.flashvars != _ ? h.flashvars += "&" + b + "=" + u[b] : h.flashvars = b + "=" + u[b];
                                if (v(o)) {
                                    var T = f(t, h, n);
                                    t.id == n && M(n, !0), p.success = !0, p.ref = T
                                } else {
                                    if (s && a()) return t.data = s, void c(t, h, n, m);
                                    M(n, !0)
                                }
                                m && m(p)
                            })) : m && m(p)
                        }, switchOffAutoHideShow: function () {
                            X = !1
                        }, ua: V, getFlashPlayerVersion: function () {
                            return {major: V.pv[0], minor: V.pv[1], release: V.pv[2]}
                        }, hasFlashPlayerVersion: v, createSWF: function (e, t, n) {
                            return V.w3 ? f(e, t, n) : void 0
                        }, showExpressInstall: function (e, t, n, r) {
                            V.w3 && a() && c(e, t, n, r)
                        }, removeSWF: function (e) {
                            V.w3 && m(e)
                        }, createCSS: function (e, t, n, r) {
                            V.w3 && b(e, t, n, r)
                        }, addDomLoadEvent: t, addLoadEvent: n, getQueryParamValue: function (e) {
                            var t = N.location.search || N.location.hash;
                            if (t) {
                                if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return T(t);
                                for (var n = t.split("&"), r = 0; r < n.length; r++) if (n[r].substring(0, n[r].indexOf("=")) == e) return T(n[r].substring(n[r].indexOf("=") + 1))
                            }
                            return ""
                        }, expressInstallCallback: function () {
                            if ($) {
                                var e = y(j);
                                e && k && (e.parentNode.replaceChild(k, e), S && (M(S, !0), V.ie && V.win && (k.style.display = "block")), w && w(O)), $ = !1
                            }
                        }
                    }
                }();
                !function () {
                    if ("undefined" != typeof window && !window.WebSocket) {
                        var e = window.console;
                        if (e && e.log && e.error || (e = {
                                log: function () {
                                }, error: function () {
                                }
                            }), !swfobject.hasFlashPlayerVersion("10.0.0")) return void e.error("Flash Player >= 10.0.0 is required.");
                        "file:" == location.protocol && e.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."), WebSocket = function (e, t, n, r, i) {
                            var o = this;
                            o.__id = WebSocket.__nextId++, WebSocket.__instances[o.__id] = o, o.readyState = WebSocket.CONNECTING, o.bufferedAmount = 0, o.__events = {}, t ? "string" == typeof t && (t = [t]) : t = [], setTimeout(function () {
                                WebSocket.__addTask(function () {
                                    WebSocket.__flash.create(o.__id, e, t, n || null, r || 0, i || null)
                                })
                            }, 0)
                        }, WebSocket.prototype.send = function (e) {
                            if (this.readyState == WebSocket.CONNECTING) throw"INVALID_STATE_ERR: Web Socket connection has not been established";
                            var t = WebSocket.__flash.send(this.__id, encodeURIComponent(e));
                            return t < 0 || (this.bufferedAmount += t, !1)
                        }, WebSocket.prototype.close = function () {
                            this.readyState != WebSocket.CLOSED && this.readyState != WebSocket.CLOSING && (this.readyState = WebSocket.CLOSING, WebSocket.__flash.close(this.__id))
                        }, WebSocket.prototype.addEventListener = function (e, t, n) {
                            e in this.__events || (this.__events[e] = []), this.__events[e].push(t)
                        }, WebSocket.prototype.removeEventListener = function (e, t, n) {
                            if (e in this.__events) for (var r = this.__events[e], i = r.length - 1; i >= 0; --i) if (r[i] === t) {
                                r.splice(i, 1);
                                break
                            }
                        }, WebSocket.prototype.dispatchEvent = function (e) {
                            for (var t = this.__events[e.type] || [], n = 0; n < t.length; ++n) t[n](e);
                            var r = this["on" + e.type];
                            r && r(e)
                        }, WebSocket.prototype.__handleEvent = function (e) {
                            "readyState" in e && (this.readyState = e.readyState), "protocol" in e && (this.protocol = e.protocol);
                            var t;
                            if ("open" == e.type || "error" == e.type) t = this.__createSimpleEvent(e.type); else if ("close" == e.type) t = this.__createSimpleEvent("close"); else {
                                if ("message" != e.type) throw"unknown event type: " + e.type;
                                var n = decodeURIComponent(e.message);
                                t = this.__createMessageEvent("message", n)
                            }
                            this.dispatchEvent(t)
                        }, WebSocket.prototype.__createSimpleEvent = function (e) {
                            if (document.createEvent && window.Event) {
                                var t = document.createEvent("Event");
                                return t.initEvent(e, !1, !1), t
                            }
                            return {type: e, bubbles: !1, cancelable: !1}
                        }, WebSocket.prototype.__createMessageEvent = function (e, t) {
                            if (document.createEvent && window.MessageEvent && !window.opera) {
                                var n = document.createEvent("MessageEvent");
                                return n.initMessageEvent("message", !1, !1, t, null, null, window, null), n
                            }
                            return {type: e, data: t, bubbles: !1, cancelable: !1}
                        }, WebSocket.CONNECTING = 0, WebSocket.OPEN = 1, WebSocket.CLOSING = 2, WebSocket.CLOSED = 3, WebSocket.__flash = null, WebSocket.__instances = {}, WebSocket.__tasks = [], WebSocket.__nextId = 0, WebSocket.loadFlashPolicyFile = function (e) {
                            WebSocket.__addTask(function () {
                                WebSocket.__flash.loadManualPolicyFile(e)
                            })
                        }, WebSocket.__initialize = function () {
                            if (!WebSocket.__flash) {
                                if (WebSocket.__swfLocation && (window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation), !window.WEB_SOCKET_SWF_LOCATION) return void e.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                                var t = document.createElement("div");
                                t.id = "webSocketContainer", t.style.position = "absolute", WebSocket.__isFlashLite() ? (t.style.left = "0px", t.style.top = "0px") : (t.style.left = "-100px", t.style.top = "-100px");
                                var n = document.createElement("div");
                                n.id = "webSocketFlash", t.appendChild(n), document.body.appendChild(t), swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                                    hasPriority: !0,
                                    swliveconnect: !0,
                                    allowScriptAccess: "always"
                                }, null, function (t) {
                                    t.success || e.error("[WebSocket] swfobject.embedSWF failed")
                                })
                            }
                        }, WebSocket.__onFlashInitialized = function () {
                            setTimeout(function () {
                                WebSocket.__flash = document.getElementById("webSocketFlash"), WebSocket.__flash.setCallerUrl(location.href), WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);
                                for (var e = 0; e < WebSocket.__tasks.length; ++e) WebSocket.__tasks[e]();
                                WebSocket.__tasks = []
                            }, 0)
                        }, WebSocket.__onFlashEvent = function () {
                            return setTimeout(function () {
                                try {
                                    for (var t = WebSocket.__flash.receiveEvents(), n = 0; n < t.length; ++n) WebSocket.__instances[t[n].webSocketId].__handleEvent(t[n])
                                } catch (r) {
                                    e.error(r)
                                }
                            }, 0), !0
                        };
                        var t = function () {
                            var e = function (e, t) {
                                    t = t || 2;
                                    for (var n = "" + e; n.length < t;) n = "0" + n;
                                    return n
                                }, t = new Date,
                                n = t.getFullYear() + "-" + e(t.getMonth() + 1) + "-" + e(t.getDate()) + " " + e(t.getHours()) + ":" + e(t.getMinutes()) + ":" + e(t.getSeconds()) + ":" + e(t.getMilliseconds(), 3);
                            return n
                        };
                        WebSocket.__log = function (n) {
                            e.log(t(), decodeURIComponent(n))
                        }, WebSocket.__error = function (n) {
                            e.error(t(), decodeURIComponent(n))
                        }, WebSocket.__addTask = function (e) {
                            WebSocket.__flash ? e() : WebSocket.__tasks.push(e)
                        }, WebSocket.__isFlashLite = function () {
                            if (!window.navigator || !window.navigator.mimeTypes) return !1;
                            var e = window.navigator.mimeTypes["application/x-shockwave-flash"];
                            return !!(e && e.enabledPlugin && e.enabledPlugin.filename) && !!e.enabledPlugin.filename.match(/flashlite/i)
                        }, window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION || (window.addEventListener ? window.addEventListener("load", function () {
                            WebSocket.__initialize()
                        }, !1) : window.attachEvent("onload", function () {
                            WebSocket.__initialize()
                        }))
                    }
                }(), function (e, t, n) {
                    function r(e) {
                        e && (t.Transport.apply(this, arguments), this.sendBuffer = [])
                    }

                    function i() {
                    }

                    e.XHR = r, t.util.inherit(r, t.Transport), r.prototype.open = function () {
                        return this.socket.setBuffer(!1), this.onOpen(), this.get(), this.setCloseTimeout(), this
                    }, r.prototype.payload = function (e) {
                        for (var n = [], r = 0, i = e.length; r < i; r++) n.push(t.parser.encodePacket(e[r]));
                        this.send(t.parser.encodePayload(n))
                    }, r.prototype.send = function (e) {
                        return this.post(e), this
                    }, r.prototype.post = function (e) {
                        function t() {
                            4 == this.readyState && (this.onreadystatechange = i, o.posting = !1, 200 == this.status ? o.socket.setBuffer(!1) : o.onClose())
                        }

                        function r() {
                            this.onload = i, o.socket.setBuffer(!1)
                        }

                        var o = this;
                        this.socket.setBuffer(!0), this.sendXHR = this.request("POST"), n.XDomainRequest && this.sendXHR instanceof XDomainRequest ? this.sendXHR.onload = this.sendXHR.onerror = r : this.sendXHR.onreadystatechange = t, this.sendXHR.send(e)
                    }, r.prototype.close = function () {
                        return this.onClose(), this
                    }, r.prototype.request = function (e) {
                        var n = t.util.request(this.socket.isXDomain()),
                            r = t.util.query(this.socket.options.query, "t=" + +new Date);
                        if (n.open(e || "GET", this.prepareUrl() + r, !0), "POST" == e) try {
                            n.setRequestHeader ? n.setRequestHeader("Content-type", "text/plain;charset=UTF-8") : n.contentType = "text/plain"
                        } catch (i) {
                        }
                        return n
                    }, r.prototype.scheme = function () {
                        return this.socket.options.secure ? "https" : "http"
                    }, r.check = function (e, r) {
                        try {
                            var i = t.util.request(r), o = n.XDomainRequest && i instanceof XDomainRequest,
                                s = e && e.options && e.options.secure ? "https:" : "http:",
                                a = n.location && s != n.location.protocol;
                            if (i && (!o || !a)) return !0
                        } catch (c) {
                        }
                        return !1
                    }, r.xdomainCheck = function (e) {
                        return r.check(e, !0)
                    }
                }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, window), function (e, t) {
                    function n(e) {
                        t.Transport.XHR.apply(this, arguments)
                    }

                    e.htmlfile = n, t.util.inherit(n, t.Transport.XHR), n.prototype.name = "htmlfile", n.prototype.get = function () {
                        this.doc = new (window[["Active"].concat("Object").join("X")])("htmlfile"), this.doc.open(), this.doc.write("<html></html>"), this.doc.close(), this.doc.parentWindow.s = this;
                        var e = this.doc.createElement("div");
                        e.className = "socketio", this.doc.body.appendChild(e), this.iframe = this.doc.createElement("iframe"), e.appendChild(this.iframe);
                        var n = this, r = t.util.query(this.socket.options.query, "t=" + +new Date);
                        this.iframe.src = this.prepareUrl() + r, t.util.on(window, "unload", function () {
                            n.destroy()
                        })
                    }, n.prototype._ = function (e, t) {
                        this.onData(e);
                        try {
                            var n = t.getElementsByTagName("script")[0];
                            n.parentNode.removeChild(n)
                        } catch (r) {
                        }
                    }, n.prototype.destroy = function () {
                        if (this.iframe) {
                            try {
                                this.iframe.src = "about:blank"
                            } catch (e) {
                            }
                            this.doc = null, this.iframe.parentNode.removeChild(this.iframe), this.iframe = null, CollectGarbage()
                        }
                    }, n.prototype.close = function () {
                        return this.destroy(), t.Transport.XHR.prototype.close.call(this)
                    }, n.check = function (e) {
                        if ("undefined" != typeof window && ["Active"].concat("Object").join("X") in window) try {
                            var n = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                            return n && t.Transport.XHR.check(e)
                        } catch (r) {
                        }
                        return !1
                    }, n.xdomainCheck = function () {
                        return !1
                    }, t.transports.push("htmlfile")
                }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (e, t, n) {
                    function r() {
                        t.Transport.XHR.apply(this, arguments)
                    }

                    function i() {
                    }

                    e["xhr-polling"] = r, t.util.inherit(r, t.Transport.XHR), t.util.merge(r, t.Transport.XHR), r.prototype.name = "xhr-polling", r.prototype.heartbeats = function () {
                        return !1
                    }, r.prototype.open = function () {
                        var e = this;
                        return t.Transport.XHR.prototype.open.call(e), !1
                    }, r.prototype.get = function () {
                        function e() {
                            4 == this.readyState && (this.onreadystatechange = i, 200 == this.status ? (o.onData(this.responseText), o.get()) : o.onClose())
                        }

                        function t() {
                            this.onload = i, this.onerror = i, o.retryCounter = 1, o.onData(this.responseText), o.get()
                        }

                        function r() {
                            o.retryCounter++, !o.retryCounter || o.retryCounter > 3 ? o.onClose() : o.get()
                        }

                        if (this.isOpen) {
                            var o = this;
                            this.xhr = this.request(), n.XDomainRequest && this.xhr instanceof XDomainRequest ? (this.xhr.onload = t, this.xhr.onerror = r) : this.xhr.onreadystatechange = e, this.xhr.send(null)
                        }
                    }, r.prototype.onClose = function () {
                        if (t.Transport.XHR.prototype.onClose.call(this), this.xhr) {
                            this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = i;
                            try {
                                this.xhr.abort()
                            } catch (e) {
                            }
                            this.xhr = null
                        }
                    }, r.prototype.ready = function (e, n) {
                        var r = this;
                        t.util.defer(function () {
                            n.call(r)
                        })
                    }, t.transports.push("xhr-polling")
                }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, window), function (e, t, n) {
                    function r(e) {
                        t.Transport["xhr-polling"].apply(this, arguments), this.index = t.j.length;
                        var n = this;
                        t.j.push(function (e) {
                            n._(e)
                        })
                    }

                    var i = n.document && "MozAppearance" in n.document.documentElement.style;
                    e["jsonp-polling"] = r, t.util.inherit(r, t.Transport["xhr-polling"]), r.prototype.name = "jsonp-polling", r.prototype.post = function (e) {
                        function n() {
                            r(), i.socket.setBuffer(!1)
                        }

                        function r() {
                            i.iframe && i.form.removeChild(i.iframe);
                            try {
                                s = document.createElement('<iframe name="' + i.iframeId + '">')
                            } catch (e) {
                                s = document.createElement("iframe"), s.name = i.iframeId
                            }
                            s.id = i.iframeId, i.form.appendChild(s), i.iframe = s
                        }

                        var i = this,
                            o = t.util.query(this.socket.options.query, "t=" + +new Date + "&i=" + this.index);
                        if (!this.form) {
                            var s, a = document.createElement("form"), c = document.createElement("textarea"),
                                u = this.iframeId = "socketio_iframe_" + this.index;
                            a.className = "socketio", a.style.position = "absolute", a.style.top = "0px", a.style.left = "0px", a.style.display = "none", a.target = u, a.method = "POST", a.setAttribute("accept-charset", "utf-8"), c.name = "d", a.appendChild(c), document.body.appendChild(a), this.form = a, this.area = c
                        }
                        this.form.action = this.prepareUrl() + o, r(), this.area.value = t.JSON.stringify(e);
                        try {
                            this.form.submit()
                        } catch (l) {
                        }
                        this.iframe.attachEvent ? s.onreadystatechange = function () {
                            "complete" == i.iframe.readyState && n()
                        } : this.iframe.onload = n, this.socket.setBuffer(!0)
                    }, r.prototype.get = function () {
                        var e = this, n = document.createElement("script"),
                            r = t.util.query(this.socket.options.query, "t=" + +new Date + "&i=" + this.index);
                        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), n.async = !0, n.src = this.prepareUrl() + r, n.onerror = function () {
                            e.onClose()
                        };
                        var o = document.getElementsByTagName("script")[0];
                        o.parentNode.insertBefore(n, o), this.script = n, i && setTimeout(function () {
                            var e = document.createElement("iframe");
                            document.body.appendChild(e), document.body.removeChild(e)
                        }, 100)
                    }, r.prototype._ = function (e) {
                        return this.onData(e), this.isOpen && this.get(), this
                    }, r.prototype.ready = function (e, n) {
                        var r = this;
                        return i ? void t.util.load(function () {
                            n.call(r)
                        }) : n.call(this)
                    }, r.check = function () {
                        return "document" in n
                    }, r.xdomainCheck = function () {
                        return !0
                    }, t.transports.push("jsonp-polling")
                }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, window), __WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                    return io
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
            }()
        }).call(exports, __webpack_require__(18)(module))
    }, function (e, t, n) {
          

        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function i() {
        }

        var o = n(9), s = r(o), a = s["default"].clientTypeMap;
        i.reverse = function (e) {
            var t = e;
            return t.type = a[t.type], t
        }, i.reverseType = function (e) {
            return a[e] || e
        }, e.exports = i
    }, function (e, t, n) {
          

        function r() {
        }

        var i = n(1);
        r.parse = function (e) {
            var t = e.split("|");
            return {scene: t[0], to: t[1]}
        }, r.genSessionByMsg = function (e) {
            var t = {id: e.sessionId, scene: e.scene, to: e.target, updateTime: e.time, lastMsg: e};
            return t
        }, r.appendLastMsg = function (e) {
            var t = e.lastMsg, n = i.capFirstLetter(t.type);
            e["last" + n + "Msg"] = t;
            var r = i.capFirstLetter(t.flow);
            e["last" + r + "Msg"] = t
        }, r.genSessionByMsgs = function (e, t) {
            var n = e.getLastNotIgnoredMsg(t);
            return n ? r.genSessionByMsg(n) : null
        }, r.trim = function (e) {
            delete e.msgReceiptSendTime, delete e.msgReceiptServerTime, delete e.ack, delete e.unreadMsgs
        }, r.isComplete = function (e) {
            return e.id && e.scene && e.to
        }, e.exports = r
    }, function (e, t, n) {
          

        function r(e) {
            var t = this;
            i.verifyOptions(e, "type to"), i.verifyParamValid("type", e.type, r.validTypes), e.type.indexOf("custom") !== -1 && (i.verifyOptions(e, "content"), t.attach = e.content, s(e.apnsText) && (t.apnsText = "" + e.apnsText), s(e.pushPayload) && (t.pushPayload = "" + e.pushPayload), s(e.sendToOnlineUsersOnly) && (t.sendToOnlineUsersOnly = e.sendToOnlineUsersOnly ? 0 : 1), s(e.cc) && (t.cc = e.cc ? 1 : 0), s(e.isPushable) && (t.isPushable = e.isPushable ? 1 : 0), s(e.isUnreadable) && (t.isUnreadable = e.isUnreadable ? 1 : 0), s(e.needPushNick) && (t.needPushNick = e.needPushNick ? 1 : 0)), t.time = e.time || +new Date, t.type = l[e.type], t.to = e.to, s(e.from) && (t.from = e.from), s(e.ps) && (t.ps = e.ps), s(e.deletedIdClient) && (t.deletedIdClient = e.deletedIdClient), s(e.deletedIdServer) && (t.deletedIdServer = e.deletedIdServer), s(e.yidunEnable) && (t.yidunEnable = e.yidunEnable ? 1 : 0), s(e.antiSpamContent) && (t.antiSpamContent = "" + e.antiSpamContent), t.idClient = e.idClient || i.guid()
        }

        var i = n(1), o = i.undef, s = i.notundef, a = n(16).getInstance("IM"), c = n(24), u = n(17),
            l = {customP2p: 100, customTeam: 101, deleteMsgP2p: 7, deleteMsgTeam: 8}, f = {
                0: "applyTeam",
                1: "rejectTeamApply",
                2: "teamInvite",
                3: "rejectTeamInvite",
                5: "friendRequest",
                6: "deleteFriend",
                7: "deleteMsgP2p",
                8: "deleteMsgTeam",
                100: "customP2p",
                101: "customTeam",
                102: "customP2p"
            }, d = {1: "addFriend", 2: "applyFriend", 3: "passFriendApply", 4: "rejectFriendApply"}, m = "team",
            p = "friend", y = "msg", h = [m, p, y], g = {
                applyTeam: m,
                rejectTeamApply: m,
                teamInvite: m,
                rejectTeamInvite: m,
                addFriend: p,
                applyFriend: p,
                passFriendApply: p,
                rejectFriendApply: p,
                deleteFriend: p,
                deleteMsg: y
            };
        r.validTypes = Object.keys(l).concat(Object.keys(g)), r.validCategories = ["team", "friend"], r.isCustom = function (e) {
            return "custom" === e.type
        }, r.reverse = function (e) {
            var t = {time: +e.time, to: e.to, type: f[e.type]};
            if (s(e.from) && (t.from = e.from), s(e.idServer) && (t.idServer = "" + e.idServer), s(e.deletedIdClient) && (t.deletedIdClient = e.deletedIdClient), s(e.deletedIdServer) && (t.deletedIdServer = "" + e.deletedIdServer), s(e.deletedMsgTime) && (t.deletedMsgTime = +e.deletedMsgTime), s(e.deletedMsgFromNick) && (t.deletedMsgFromNick = "" + e.deletedMsgFromNick), s(e.ps) && (t.ps = e.ps), e.attach = e.attach ? "" + e.attach : "", "customP2p" === t.type || "customTeam" === t.type) t.content = e.attach, s(e.apnsText) && (t.apnsText = e.apnsText), s(e.pushPayload) && (t.pushPayload = e.pushPayload), i.merge(t, {
                sendToOnlineUsersOnly: o(e.sendToOnlineUsersOnly) || 0 === +e.sendToOnlineUsersOnly,
                cc: o(e.cc) || 1 === +e.cc,
                isPushable: o(e.isPushable) || 1 === +e.isPushable,
                isUnreadable: o(e.isUnreadable) || 1 === +e.isUnreadable,
                needPushNick: s(e.needPushNick) && 1 === +e.needPushNick
            }), t.scene = t.type.slice(6).toLowerCase(), t.type = "custom"; else if ("deleteMsgP2p" === t.type || "deleteMsgTeam" === t.type) t.scene = t.type.slice(9).toLowerCase(), t.type = "deleteMsg"; else {
                if (e.attach) {
                    t.attach = {};
                    var n = JSON.parse(e.attach);
                    s(n.vt) ? (t.type = d[n.vt], delete t.attach) : (s(n.tinfo) && (t.attach.team = c.reverse(a.unserialize(n.tinfo, "team"))), s(n.tlist) && (t.attach.member = u.reverse(a.unserialize(n.tlist, "teamMember"))), s(n.attach) && (t.attach.custom = n.attach))
                }
                t.category = g[t.type], t.read = !1, t.state = "init"
            }
            return s(e.cc) && (t.cc = 1 === +e.cc), t.status = e.status || "success", s(e.filter) && (t.filter = e.filter), t
        }, r.reverseSysMsgs = function (e, t) {
            t = t || {};
            var n = t.mapper, o = i.isFunction(n);
            return e.map(function (e) {
                return e = r.reverse(e), o && (e = n(e)), e
            })
        }, r.completeUnread = function (e) {
            e = e || {}, h.forEach(function (t) {
                delete e[t]
            });
            var t;
            return Object.keys(g).forEach(function (n) {
                e[n] = e[n] || 0, e[n] < 0 && (e[n] = 0), t = g[n], e[t] = e[t] || 0, e[t] = e[t] + e[n]
            }), e.total = 0, h.forEach(function (t) {
                e.total += e[t]
            }), e
        }, e.exports = r
    }, function (e, t, n) {
          

        function r(e) {
            var t = this;
            switch (o.verifyOptions(e, "action"), e.action) {
                case"create":
                    o.verifyOptions(e, "teamId", !1), o.verifyOptions(e, "type name"), o.verifyParamValid("type", e.type, y);
                    break;
                case"update":
                    o.verifyOptions(e, "teamId"), o.verifyOptions(e, "type", !1)
            }
            s(e.teamId) && (t.teamId = e.teamId), s(e.type) && (t.type = m[e.type]), s(e.avatar) && (t.avatar = "" + e.avatar), s(e.name) && (t.name = "" + e.name), s(e.intro) && (t.intro = "" + e.intro), s(e.announcement) && (t.announcement = "" + e.announcement), f.forEach(t.setMode.bind(t, e)), s(e.custom) && (t.custom = "" + e.custom)
        }

        function i(e, t) {
            t += "Mode", s(e[t]) && (e[t] = l[t][e[t]])
        }

        var o = n(1), s = o.notundef, a = o.fillPropertyWithDefault, c = Object.keys, u = {}, l = {}, f = [], d = {},
            m = {normal: 0, advanced: 1}, p = {0: "normal", 1: "advanced"}, y = c(m),
            h = u.joinMode = {noVerify: 0, needVerify: 1, rejectAll: 2};
        l.joinMode = {0: "noVerify", 1: "needVerify", 2: "rejectAll"}, f.push("join"), d.joinMode = c(h);
        var g = u.beInviteMode = {needVerify: 0, noVerify: 1};
        l.beInviteMode = {0: "needVerify", 1: "noVerify"}, f.push("beInvite"), d.beInviteMode = c(g);
        var v = u.inviteMode = {manager: 0, all: 1};
        l.inviteMode = {0: "manager", 1: "all"}, f.push("invite"), d.inviteMode = c(v);
        var b = u.updateTeamMode = {manager: 0, all: 1};
        l.updateTeamMode = {0: "manager", 1: "all"}, f.push("updateTeam"), d.updateTeamMode = c(b);
        var M = u.updateCustomMode = {manager: 0, all: 1};
        l.updateCustomMode = {0: "manager", 1: "all"}, f.push("updateCustom"), d.updateCustomMode = c(M);
        var T = r.prototype;
        T.setMode = function (e, t) {
            var n = this;
            t += "Mode", s(e[t]) && (o.verifyParamValid(t, e[t], d[t]), n[t] = u[t][e[t]])
        }, r.reverse = function (e, t) {
            var n = o.copy(e);
            return s(n.teamId) && (n.teamId = "" + n.teamId), s(n.type) && (n.type = p[n.type]), s(n.level) && (n.level = +n.level), s(n.valid) && (n.valid = 1 === +n.valid), s(n.memberNum) && (n.memberNum = +n.memberNum), s(n.memberUpdateTime) && (n.memberUpdateTime = +n.memberUpdateTime), s(n.createTime) && (n.createTime = +n.createTime), s(n.updateTime) && (n.updateTime = +n.updateTime), s(n.validToCurrentUser) && (n.validToCurrentUser = "1" === n.validToCurrentUser), s(n.mute) && (n.mute = "1" === n.mute), f.forEach(i.bind(null, n)), delete n.bits, t || r.fillProperties(n), n
        }, r.fillProperties = function (e) {
            var t = a(e, "beInviteMode", "needVerify"), n = a(e, "inviteMode", "manager"),
                r = a(e, "updateTeamMode", "manager"), i = a(e, "updateCustomMode", "manager"), o = a(e, "avatar", "");
            return t || n || r || i || o
        }, e.exports = r
    }, , function (e, t) {
        function n(e, t) {
            for (var n = t.split("."); n.length;) {
                var r = n.shift(), i = !1;
                if ("?" == r[r.length - 1] && (r = r.slice(0, -1), i = !0), e = e[r], !e && i) return e
            }
            return e
        }

        e.exports = n
    }, , , function (e, t, n) {
          

        function r(e) {
            switch (o.notundef(e.type) ? o.verifyFileType(e.type) : e.type = "file", o.verifyOptions(e, "file"), o.verifyOptions(e.file, "url ext size md5", !0, "file."), e.type) {
                case"image":
                    s.verifyFile(e.file);
                    break;
                case"audio":
                    a.verifyFile(e.file);
                    break;
                case"video":
                    c.verifyFile(e.file)
            }
            i.call(this, e), this.attach = JSON.stringify(e.file)
        }

        var i = n(14), o = n(1);
        r.prototype = Object.create(i.prototype), r.reverse = function (e) {
            var t = i.reverse(e);
            return e.attach = e.attach ? "" + e.attach : "", t.file = e.attach ? JSON.parse(e.attach) : {}, "audio" === t.type && (t.file.mp3Url = t.file.url + "?audioTrans&type=mp3"), t
        }, e.exports = r;
        var s = n(127), a = n(124), c = n(133)
    }, function (e, t, n) {
          

        function r(e) {
            i.merge(this, e), i.notundef(this.gender) && (i.verifyParamValid("gender", this.gender, r.validGenders), this.gender = o[this.gender]), i.notundef(this.email) && "" !== this.email && i.verifyEmail("email", this.email), i.notundef(this.birth) && "" !== this.birth && i.verifyBirth("birth", this.birth), i.notundef(this.tel) && "" !== this.tel && i.verifyTel("tel", this.tel)
        }

        var i = n(1), o = {unknown: 0, male: 1, female: 2}, s = {0: "unknown", 1: "male", 2: "female"};
        r.reverse = function (e) {
            var t = i.filterObj(e, "account nick avatar sign gender email birth tel custom createTime updateTime");
            return i.notundef(t.gender) && (t.gender = s[t.gender]), i.notundef(t.createTime) && (t.createTime = +t.createTime), i.notundef(t.updateTime) && (t.updateTime = +t.updateTime), t
        }, r.reverseUsers = function (e) {
            return e.map(function (e) {
                return r.reverse(e)
            })
        }, r.validGenders = Object.keys(o), e.exports = r
    }, , function (e, t, n) {
          

        function r(e) {
            i.verifyOptions(e, "type"), i.verifyParamValid("type", e.type, r.validTypes), i.merge(this, e), this.type = o[e.type]
        }

        var i = n(1), o = {stripmeta: 0, blur: 2, quality: 3, crop: 4, rotate: 5, thumbnail: 7, interlace: 9}, s = {
            0: "stripmeta",
            1: "type",
            2: "blur",
            3: "quality",
            4: "crop",
            5: "rotate",
            6: "pixel",
            7: "thumbnail",
            8: "watermark",
            9: "interlace",
            10: "tmp"
        };
        r.validTypes = Object.keys(o), r.reverse = function (e) {
            var t = i.copy(e);
            return t.type = s[t.type], t
        }, r.reverseImageOps = function (e) {
            return e.map(function (e) {
                return r.reverse(e)
            })
        }, e.exports = r
    }, function (e, t) {
          
        var n = {
            link: {id: 1, heartbeat: 2},
            misc: {
                id: 6,
                getSimpleNosToken: 1,
                getNosToken: 2,
                notifyUploadLog: 3,
                uploadSdkLogUrl: 4,
                audioToText: 5,
                processImage: 6
            }
        }, r = {
            heartbeat: {sid: n.link.id, cid: n.link.heartbeat},
            getSimpleNosToken: {sid: n.misc.id, cid: n.misc.getSimpleNosToken, params: [{type: "int", name: "num"}]},
            getNosToken: {sid: n.misc.id, cid: n.misc.getNosToken, params: [{type: "String", name: "responseBody"}]},
            uploadSdkLogUrl: {sid: n.misc.id, cid: n.misc.uploadSdkLogUrl, params: [{type: "string", name: "url"}]},
            audioToText: {sid: n.misc.id, cid: n.misc.audioToText, params: [{type: "Property", name: "audioToText"}]},
            processImage: {
                sid: n.misc.id,
                cid: n.misc.processImage,
                params: [{type: "String", name: "url"}, {type: "PropertyArray", name: "imageOps", entity: "imageOp"}]
            }
        }, i = {
            "1_2": {service: "link", cmd: "heartbeat"},
            "6_1": {
                service: "misc",
                cmd: "getSimpleNosToken",
                response: [{type: "PropertyArray", name: "nosTokens", entity: "nosToken"}]
            },
            "6_2": {service: "misc", cmd: "getNosToken", response: [{type: "Property", name: "nosToken"}]},
            "6_3": {service: "misc", cmd: "notifyUploadLog"},
            "6_5": {service: "misc", cmd: "audioToText", response: [{type: "String", name: "text"}]},
            "6_6": {service: "misc", cmd: "processImage", response: [{type: "String", name: "url"}]}
        };
        e.exports = {idMap: n, cmdConfig: r, packetConfig: i}
    }, function (e, t, n) {
          
        var r = n(1), i = {};
        i.fromDataURL = r.blobFromDataURL, e.exports = i
    }, function (e, t) {
        function n(e) {
            var t = r.call(e);
            return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
        }

        e.exports = n;
        var r = Object.prototype.toString
    }, function (e, t) {
        e.exports = function n(e, t) {
              
            var r, i, o = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
                s = /(^[ ]*|[ ]*$)/g,
                a = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
                c = /^0x[0-9a-f]+$/i, u = /^0/, l = function (e) {
                    return n.insensitive && ("" + e).toLowerCase() || "" + e
                }, f = l(e).replace(s, "") || "", d = l(t).replace(s, "") || "",
                m = f.replace(o, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                p = d.replace(o, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                y = parseInt(f.match(c), 16) || 1 !== m.length && f.match(a) && Date.parse(f),
                h = parseInt(d.match(c), 16) || y && d.match(a) && Date.parse(d) || null;
            if (h) {
                if (y < h) return -1;
                if (y > h) return 1
            }
            for (var g = 0, v = Math.max(m.length, p.length); g < v; g++) {
                if (r = !(m[g] || "").match(u) && parseFloat(m[g]) || m[g] || 0, i = !(p[g] || "").match(u) && parseFloat(p[g]) || p[g] || 0, isNaN(r) !== isNaN(i)) return isNaN(r) ? 1 : -1;
                if (typeof r != typeof i && (r += "", i += ""), r < i) return -1;
                if (r > i) return 1
            }
            return 0
        }
    }, function (e, t, n) {
        !function (t, n) {
            e.exports = n()
        }(this, function () {
            return function (e) {
                function t(r) {
                    if (n[r]) return n[r].exports;
                    var i = n[r] = {exports: {}, id: r, loaded: !1};
                    return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
                }

                var n = {};
                return t.m = e, t.c = n, t.p = "", t(0)
            }([function (e, t, n) {
                  

                function r(e) {
                    return e && e.__esModule ? e : {"default": e}
                }

                function i(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t["default"] = e, t
                }

                t.__esModule = !0;
                var o = n(1), s = i(o), a = n(3), c = i(a), u = n(4), l = i(u), f = n(5), d = i(f), m = n(6), p = i(m),
                    y = n(8), h = r(y), g = n(2), v = r(g), b = n(9), M = i(b), T = n(10), k = i(T), S = n(11),
                    w = r(S), O = n(12), C = i(O), x = n(7), _ = i(x), I = n(13), P = i(I),
                    E = C.merge({}, s, c, l, d, p, {
                        forOwn: h["default"],
                        getGlobal: v["default"]
                    }, M, k, {mixin: w["default"]}, C, _, P);
                delete E.__esModule, t["default"] = E, e.exports = t["default"]
            }, function (e, t, n) {
                  

                function r(e) {
                    return e && e.__esModule ? e : {"default": e}
                }

                function i(e) {
                    var t = (0, a["default"])(), n = void 0;
                    n = e.split(",")[0].indexOf("base64") >= 0 ? t.atob(e.split(",")[1]) : t.decodeURIComponent(e.split(",")[1]);
                    for (var r = e.split(",")[0].split(":")[1].split(";")[0], i = new Uint8Array(n.length), o = 0; o < n.length; o++) i[o] = n.charCodeAt(o);
                    return new t.Blob([i], {type: r})
                }

                function o(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/jpeg",
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                    if (e.toBlob) e.toBlob(t, n, r); else {
                        var o = e.toDataURL(n, r);
                        t(i(o))
                    }
                }

                t.__esModule = !0, t.blobFromDataURL = i, t.blobFromCanvas = o;
                var s = n(2), a = r(s)
            }, function (e, t) {
                (function (n) {
                      
                    t.__esModule = !0, t["default"] = function () {
                        return "undefined" != typeof window ? window : "undefined" != typeof self ? self : "undefined" != typeof n ? n : {}
                    }, e.exports = t["default"]
                }).call(t, function () {
                    return this
                }())
            }, function (e, t) {
                  

                function n(e) {
                    var t = !1, n = "Webkit Moz ms O".split(" "), r = document.createElement("div"), i = null;
                    if (e = e.toLowerCase(), void 0 !== r.style[e] && (t = !0), t === !1) {
                        i = e.charAt(0).toUpperCase() + e.substr(1);
                        for (var o = 0; o < n.length; o++) if (void 0 !== r.style[n[o] + i]) {
                            t = !0;
                            break
                        }
                    }
                    return t
                }

                t.__esModule = !0, t.detectCSSFeature = n
            }, function (e, t) {
                  
                t.__esModule = !0;
                t.o = {}, t.emptyObj = {}, t.f = function () {
                }, t.emptyFunc = function () {
                }, t.regBlank = /\s+/gi, t.regWhiteSpace = /\s+/gi
            }, function (e, t) {
                  

                function n(e, t) {
                    t = t || 2;
                    for (var n = "" + e; n.length < t;) n = "0" + n;
                    return n
                }

                function r(e) {
                    return "" + e.getFullYear()
                }

                function i(e) {
                    return n(e.getMonth() + 1)
                }

                function o(e) {
                    return n(e.getDate())
                }

                function s(e) {
                    return n(e.getHours())
                }

                function a(e) {
                    return n(e.getMinutes())
                }

                function c(e) {
                    return n(e.getSeconds())
                }

                function u(e) {
                    return n(e.getMilliseconds(), 3)
                }

                function l(e) {
                    return e = "" + e, new Date(e.replace(/-/g, "/").replace("T", " "))
                }

                t.__esModule = !0, t.fix = n, t.getYearStr = r, t.getMonthStr = i, t.getDayStr = o, t.getHourStr = s, t.getMinuteStr = a, t.getSecondStr = c, t.getMillisecondStr = u, t.dateFromDateTimeLocal = l;
                t.format = function () {
                    var e = /yyyy|MM|dd|hh|mm|ss|SSS/g, t = {yyyy: r, MM: i, dd: o, hh: s, mm: a, ss: c, SSS: u};
                    return function (n, r) {
                        return n = new Date(n), isNaN(+n) ? "invalid date" : (r = r || "yyyy-MM-dd", r.replace(e, function (e) {
                            return t[e](n)
                        }))
                    }
                }()
            }, function (e, t, n) {
                  

                function r(e, t) {
                    if (e === t) return !0;
                    for (; t.parentNode;) {
                        if (t.parentNode === e) return !0;
                        t = t.parentNode
                    }
                    return !1
                }

                function i(e) {
                    var t = e.parentNode || document.body;
                    e = e.cloneNode(!0), e.style.display = "block", e.style.opacity = 0, e.style.height = "auto", t.appendChild(e);
                    var n = e.offsetHeight;
                    return t.removeChild(e), n
                }

                function o(e) {
                    e.parentNode && e.parentNode.removeChild(e)
                }

                function s(e, t, n) {
                    return (0, f.exist)(n) ? void e.setAttribute("data-" + t, n) : e.getAttribute("data-" + t)
                }

                function a(e) {
                    return e.target || e.srcElement
                }

                function c(e) {
                    function t(r) {
                        n.src && (e.multi || y(n, "load", t), e.onload(r))
                    }

                    e = e || {};
                    var n;
                    if (e.name) try {
                        n = document.createElement('<iframe name="' + e.name + '"></iframe>'), n.frameBorder = 0
                    } catch (r) {
                        n = document.createElement("iframe"), n.name = e.name
                    } else n = document.createElement("iframe");
                    e.visible || (n.style.display = "none"), (0, f.isFunction)(e.onload) && m(n, "load", t);
                    var i = e.parent;
                    (i || document.body).appendChild(n);
                    var o = e.src || "about:blank";
                    return setTimeout(function () {
                        n.src = o
                    }, 0), n
                }

                function u(e) {
                    var t = document.createElement("div");
                    t.innerHTML = e;
                    var n = [], r = void 0, i = void 0;
                    if (t.children) for (r = 0, i = t.children.length; r < i; r++) n.push(t.children[r]); else for (r = 0, i = t.childNodes.length; r < i; r++) {
                        var o = t.childNodes[r];
                        1 === o.nodeType && n.push(o)
                    }
                    return n.length > 1 ? t : n[0]
                }

                function l(e) {
                    return (0, f.exist)(e) && (document.documentElement.scrollTop = document.body.scrollTop = e), window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
                }

                t.__esModule = !0, t.off = t.removeEventListener = t.on = t.addEventListener = void 0, t.containsNode = r, t.calcHeight = i, t.remove = o, t.dataset = s, t.target = a, t.createIframe = c, t.html2node = u, t.scrollTop = l;
                var f = n(7), d = t.addEventListener = function (e, t, n) {
                    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
                }, m = t.on = d, p = t.removeEventListener = function (e, t, n) {
                    e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
                }, y = t.off = p
            }, function (e, t) {
                  

                function n(e) {
                    return Object.prototype.toString.call(e).slice(8, -1)
                }

                function r(e) {
                    return n(e).toLowerCase()
                }

                function i(e) {
                    return "string" === r(e)
                }

                function o(e) {
                    return "number" === r(e)
                }

                function s(e) {
                    return "boolean" === r(e)
                }

                function a(e) {
                    return "array" === r(e)
                }

                function c(e) {
                    return "function" === r(e)
                }

                function u(e) {
                    return "date" === r(e)
                }

                function l(e) {
                    return "regexp" === r(e)
                }

                function f(e) {
                    return "error" === r(e)
                }

                function d(e) {
                    return null === e
                }

                function m(e) {
                    return null !== e
                }

                function p(e) {
                    return "undefined" == typeof e
                }

                function y(e) {
                    return "undefined" != typeof e
                }

                function h(e) {
                    return y(e) && m(e)
                }

                function g(e) {
                    return p(e) || d(e)
                }

                function v(e) {
                    return h(e) && "object" === r(e)
                }

                function b(e) {
                    return g(e) || (i(e) || a(e)) && 0 === e.length
                }

                t.__esModule = !0, t.getClass = n, t.typeOf = r, t.isString = i, t.isNumber = o, t.isBoolean = s, t.isArray = a, t.isFunction = c, t.isDate = u, t.isRegExp = l, t.isError = f, t.isnull = d, t.notnull = m, t.undef = p, t.notundef = y, t.exist = h, t.notexist = g, t.isObject = v, t.isEmpty = b
            }, function (e, t) {
                  
                t.__esModule = !0, t["default"] = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                        }, n = arguments[2];
                    for (var r in e) e.hasOwnProperty(r) && t.call(n, r, e[r])
                }, e.exports = t["default"]
            }, function (e, t) {
                  
                t.__esModule = !0;
                t.uniqueID = function () {
                    var e = 0;
                    return function () {
                        return "" + e++
                    }
                }()
            }, function (e, t, n) {
                  

                function r(e) {
                    return e && e.__esModule ? e : {"default": e}
                }

                function i(e) {
                    return (0, c.isString)(e) && 0 === e.indexOf("{") && e.lastIndexOf("}") === e.length - 1;
                }

                function o(e) {
                    try {
                        i(e) && (e = JSON.parse(e)), (0, c.isObject)(e) && (0, a["default"])(e, function (t, n) {
                            switch ((0, c.typeOf)(n)) {
                                case"string":
                                case"object":
                                    e[t] = o(n)
                            }
                        })
                    } catch (t) {
                    }
                    return e
                }

                t.__esModule = !0, t.isJSON = i, t.parseJSON = o;
                var s = n(8), a = r(s), c = n(7)
            }, function (e, t, n) {
                  

                function r(e) {
                    return e && e.__esModule ? e : {"default": e}
                }

                t.__esModule = !0;
                var i = n(8), o = r(i);
                t["default"] = function (e, t) {
                    (0, o["default"])(t, function (t, n) {
                        e[t] = n
                    })
                }, e.exports = t["default"]
            }, function (e, t, n) {
                  

                function r(e) {
                    return e && e.__esModule ? e : {"default": e}
                }

                function i(e) {
                    return JSON.parse(JSON.stringify(e))
                }

                function o() {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    return n.forEach(function (t) {
                        (0, d["default"])(e, t)
                    }), e
                }

                function s(e, t) {
                    return (0, p["default"])(t, function (t, n) {
                        (0, y.undef)(e[t]) && (e[t] = n)
                    }), e
                }

                function a(e, t, n) {
                    var r = e[t] || e[t.toLowerCase()];
                    return (0, y.notexist)(r) && (r = n, e[t] = r), r
                }

                function c(e, t) {
                    return (0, p["default"])(e, function (n, r) {
                        (0, y.exist)(t[n]) && (e[n] = t[n])
                    }), e
                }

                function u() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ",", n = {};
                    return e.split(t).forEach(function (e) {
                        var t = e.split("="), r = t.shift();
                        r && (n[decodeURIComponent(r)] = decodeURIComponent(t.join("=")))
                    }), n
                }

                function l(e, t, n) {
                    if (!e) return "";
                    var r = [];
                    return (0, p["default"])(e, function (e, t) {
                        (0, y.isFunction)(t) || ((0, y.isDate)(t) ? t = t.getTime() : (0, y.isArray)(t) ? t = t.join(",") : (0, y.isObject)(t) && (t = JSON.stringify(t)), n && (t = encodeURIComponent(t)), r.push(encodeURIComponent(e) + "=" + t))
                    }), r.join(t || ",")
                }

                t.__esModule = !0, t.simpleClone = i, t.merge = o, t.fillUndef = s, t.checkWithDefault = a, t.fetch = c, t.string2object = u, t.object2string = l;
                var f = n(11), d = r(f), m = n(8), p = r(m), y = n(7)
            }, function (e, t, n) {
                  

                function r(e) {
                    return e.indexOf("?") < 0 ? "?" : "&"
                }

                function i(e) {
                    return (0, o.object2string)(e, "&", !0)
                }

                t.__esModule = !0, t.url2origin = void 0, t.genUrlSep = r, t.object2query = i;
                var o = n(12);
                t.url2origin = function () {
                    var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
                    return function (t) {
                        return e.test(t || "") ? RegExp.$1.toLowerCase() : ""
                    }
                }()
            }])
        })
    }, function (e, t, n) {
        var r;
        (function (i) {
            !function (o, s) {
                  

                function a() {
                    return "undefined" != typeof o ? o : "undefined" != typeof self ? self : "undefined" != typeof i ? i : {}
                }

                o = a();
                var c, u = o.IDBKeyRange || o.webkitIDBKeyRange, l = {readonly: "readonly", readwrite: "readwrite"},
                    f = Object.prototype.hasOwnProperty, d = function () {
                        if (!c && (c = o.indexedDB || o.webkitIndexedDB || o.mozIndexedDB || o.oIndexedDB || o.msIndexedDB || (null === o.indexedDB && o.shimIndexedDB ? o.shimIndexedDB : s), !c)) throw"IndexedDB required";
                        return c
                    }, m = function (e) {
                        return e
                    }, p = function (e) {
                        return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
                    }, y = function (e) {
                        return "function" == typeof e
                    }, h = function (e) {
                        return "number" === p(e)
                    }, g = function (e) {
                        return "array" === p(e)
                    }, v = function (e) {
                        return e === s
                    }, b = function (e, t) {
                        var n = this, r = !1;
                        this.name = t, this.getIndexedDB = function () {
                            return e
                        }, this.add = function (t) {
                            if (r) throw"Database has been closed";
                            for (var i = [], o = 0, s = 0; s < arguments.length - 1; s++) if (Array.isArray(arguments[s + 1])) for (var a = 0; a < arguments[s + 1].length; a++) i[o] = arguments[s + 1][a], o++; else i[o] = arguments[s + 1], o++;
                            var c = e.transaction(t, l.readwrite), u = c.objectStore(t);
                            return new Promise(function (e, t) {
                                i.forEach(function (e) {
                                    var t;
                                    if (e.item && e.key) {
                                        var n = e.key;
                                        e = e.item, t = u.add(e, n)
                                    } else t = u.add(e);
                                    t.onsuccess = function (t) {
                                        var n = t.target, r = n.source.keyPath;
                                        null === r && (r = "__id__"), Object.defineProperty(e, r, {
                                            value: n.result,
                                            enumerable: !0
                                        })
                                    }
                                }), c.oncomplete = function () {
                                    e(i, n)
                                }, c.onerror = function (e) {
                                    e.preventDefault(), t(e)
                                }, c.onabort = function (e) {
                                    t(e)
                                }
                            })
                        }, this.updateAndDelete = function (t, n, i) {
                            if (r) throw"Database has been closed";
                            var o = e.transaction(t, l.readwrite), s = o.objectStore(t), a = s.keyPath;
                            return new Promise(function (e, t) {
                                n.forEach(function (e) {
                                    if (e.item && e.key) {
                                        var t = e.key;
                                        e = e.item, s.put(e, t)
                                    } else s.put(e)
                                }), i.forEach(function (e) {
                                    s["delete"](e[a])
                                }), o.oncomplete = function () {
                                    e([n, i])
                                }, o.onerror = function (e) {
                                    t(e)
                                }
                            })
                        }, this.update = function (t) {
                            if (r) throw"Database has been closed";
                            for (var i, o = [], s = 1; s < arguments.length; s++) i = arguments[s], Array.isArray(i) ? o = o.concat(i) : o.push(i);
                            var a = e.transaction(t, l.readwrite), c = a.objectStore(t);
                            c.keyPath;
                            return new Promise(function (e, t) {
                                o.forEach(function (e) {
                                    var t;
                                    if (e.item && e.key) {
                                        var n = e.key;
                                        e = e.item, t = c.put(e, n)
                                    } else t = c.put(e);
                                    t.onsuccess = function (e) {
                                    }, t.onerror = function (e) {
                                    }
                                }), a.oncomplete = function () {
                                    e(o, n)
                                }, a.onerror = function (e) {
                                    t(e)
                                }, a.onabort = function (e) {
                                    t(e)
                                }
                            })
                        }, this.remove = function (t, n) {
                            if (r) throw"Database has been closed";
                            var i = e.transaction(t, l.readwrite), o = i.objectStore(t);
                            return new Promise(function (e, t) {
                                Array.isArray(n) || (n = [n]), n.forEach(function (e) {
                                    o["delete"](e)
                                }), i.oncomplete = function () {
                                    e(n)
                                }, i.onerror = function (e) {
                                    t(e)
                                }, i.onabort = function (e) {
                                    t(e)
                                }
                            })
                        }, this.clear = function (t) {
                            if (r) throw"Database has been closed";
                            var n = e.transaction(t, l.readwrite), i = n.objectStore(t);
                            i.clear();
                            return new Promise(function (e, t) {
                                n.oncomplete = function () {
                                    e()
                                }, n.onerror = function (e) {
                                    t(e)
                                }
                            })
                        }, this.close = function () {
                            r || (e.close(), r = !0, delete S[t])
                        }, this.get = function (t, n) {
                            if (r) throw"Database has been closed";
                            var i = e.transaction(t), o = i.objectStore(t), s = o.get(n);
                            return new Promise(function (e, t) {
                                s.onsuccess = function (t) {
                                    e(t.target.result)
                                }, i.onerror = function (e) {
                                    t(e)
                                }
                            })
                        }, this.query = function (t, n) {
                            if (r) throw"Database has been closed";
                            return new M(t, e, n)
                        }, this.count = function (t, n) {
                            if (r) throw"Database has been closed";
                            var i = e.transaction(t);
                            i.objectStore(t)
                        };
                        for (var i = 0, o = e.objectStoreNames.length; i < o; i++) !function (e) {
                            n[e] = {};
                            for (var t in n) f.call(n, t) && "close" !== t && (n[e][t] = function (t) {
                                return function () {
                                    var r = [e].concat([].slice.call(arguments, 0));
                                    return n[t].apply(n, r)
                                }
                            }(t))
                        }(e.objectStoreNames[i])
                    }, M = function (e, t, n) {
                        var r = this, i = !1, o = !1, a = function (r, a, c, f, d, m, p) {
                            return new Promise(function (h, g) {
                                var v = i || o ? l.readwrite : l.readonly, b = t.transaction(e, v), M = b.objectStore(e),
                                    T = n ? M.index(n) : M, k = r ? u[r].apply(null, a) : null, S = [], w = [k], O = 0;
                                d = d ? d : null, m = m ? m : [], "count" !== c && w.push(f || "next");
                                var C = !!i && Object.keys(i), x = function (e) {
                                    for (var t = 0; t < C.length; t++) {
                                        var n = C[t], r = i[n];
                                        r instanceof Function && (r = r(e)), e[n] = r
                                    }
                                    return e
                                };
                                T[c].apply(T, w).onsuccess = function (e) {
                                    var t = e.target.result;
                                    if ("number" == typeof t) S = t; else if (t) if (null !== d && d[0] > O) O = d[0], t.advance(d[0]); else if (null !== d && O >= d[0] + d[1]) ; else {
                                        var n = !0, r = "value" in t ? t.value : t.key;
                                        m.forEach(function (e) {
                                            e && e.length && (2 === e.length ? n = n && r[e[0]] === e[1] : y(e[0]) && (n = n && e[0].apply(s, [r])))
                                        }), n && (O++, S.push(p(r)), o ? t["delete"]() : i && (r = x(r), t.update(r))), t["continue"]()
                                    }
                                }, b.oncomplete = function () {
                                    h(S)
                                }, b.onerror = function (e) {
                                    g(e)
                                }, b.onabort = function (e) {
                                    g(e)
                                }
                            })
                        }, c = function (e, t) {
                            var n = "next", r = "openCursor", s = [], c = null, u = m, l = !1, f = function () {
                                return a(e, t, r, l ? n + "unique" : n, c, s, u)
                            }, d = function () {
                                return n = null, r = "count", {execute: f}
                            }, p = function () {
                                return c = g(arguments[0]) ? arguments[0] : Array.prototype.slice.call(arguments, 0, 2), 1 == c.length && c.unshift(0), h(c[1]) || (c = null), {
                                    execute: f,
                                    count: d,
                                    keys: b,
                                    filter: M,
                                    asc: T,
                                    desc: k,
                                    distinct: S,
                                    modify: w,
                                    limit: p,
                                    map: O,
                                    remove: C
                                }
                            }, b = function (e) {
                                return e = !!v(e) || !!e, e && (r = "openKeyCursor"), {
                                    execute: f,
                                    keys: b,
                                    filter: M,
                                    asc: T,
                                    desc: k,
                                    distinct: S,
                                    modify: w,
                                    limit: p,
                                    map: O,
                                    remove: C
                                }
                            }, M = function () {
                                return s.push(Array.prototype.slice.call(arguments, 0, 2)), {
                                    execute: f,
                                    count: d,
                                    keys: b,
                                    filter: M,
                                    asc: T,
                                    desc: k,
                                    distinct: S,
                                    modify: w,
                                    limit: p,
                                    map: O,
                                    remove: C
                                }
                            }, T = function (e) {
                                return e = !!v(e) || !!e, n = e ? "next" : "prev", {
                                    execute: f,
                                    count: d,
                                    keys: b,
                                    filter: M,
                                    asc: T,
                                    desc: k,
                                    distinct: S,
                                    modify: w,
                                    limit: p,
                                    map: O,
                                    remove: C
                                }
                            }, k = function (e) {
                                return e = !!v(e) || !!e, n = e ? "prev" : "next", {
                                    execute: f,
                                    count: d,
                                    keys: b,
                                    filter: M,
                                    asc: T,
                                    desc: k,
                                    distinct: S,
                                    modify: w,
                                    limit: p,
                                    map: O,
                                    remove: C
                                }
                            }, S = function (e) {
                                return e = !!v(e) || !!e, l = e, {
                                    execute: f,
                                    count: d,
                                    keys: b,
                                    filter: M,
                                    asc: T,
                                    desc: k,
                                    distinct: S,
                                    modify: w,
                                    limit: p,
                                    map: O,
                                    remove: C
                                }
                            }, w = function (e) {
                                return i = e, {
                                    execute: f,
                                    count: d,
                                    keys: b,
                                    filter: M,
                                    asc: T,
                                    desc: k,
                                    distinct: S,
                                    modify: w,
                                    limit: p,
                                    map: O,
                                    remove: C
                                }
                            }, O = function (e) {
                                return y(e) && (u = e), {
                                    execute: f,
                                    count: d,
                                    keys: b,
                                    filter: M,
                                    asc: T,
                                    desc: k,
                                    distinct: S,
                                    modify: w,
                                    limit: p,
                                    map: O,
                                    remove: C
                                }
                            }, C = function (e) {
                                return e = !!v(e) || !!e, o = e, {
                                    execute: f,
                                    count: d,
                                    keys: b,
                                    filter: M,
                                    asc: T,
                                    desc: k,
                                    distinct: S,
                                    modify: w,
                                    limit: p,
                                    map: O,
                                    remove: C
                                }
                            };
                            return {
                                execute: f,
                                count: d,
                                keys: b,
                                filter: M,
                                asc: T,
                                desc: k,
                                distinct: S,
                                modify: w,
                                limit: p,
                                map: O,
                                remove: C
                            }
                        };
                        "only bound upperBound lowerBound".split(" ").forEach(function (e) {
                            r[e] = function () {
                                return new c(e, arguments)
                            }
                        }), this.filter = function () {
                            var e = new c(null, null);
                            return e.filter.apply(e, arguments)
                        }, this.all = function () {
                            return this.filter()
                        }
                    }, T = function (e, t, n) {
                        "function" == typeof t && (t = t());
                        for (var r in t) {
                            var i, o = t[r];
                            i = !f.call(t, r) || n.objectStoreNames.contains(r) ? e.currentTarget.transaction.objectStore(r) : n.createObjectStore(r, o.key);
                            for (var s in o.indexes) {
                                var a = o.indexes[s];
                                try {
                                    i.index(s)
                                } catch (e) {
                                    i.createIndex(s, a.key || s, Object.keys(a).length ? a : {unique: !1})
                                }
                            }
                        }
                    }, k = function (e, t, n, r) {
                        var i = e.target.result, o = new b(i, t);
                        return S[t] = i, Promise.resolve(o)
                    }, S = {}, w = {
                        version: "0.10.2", open: function (e) {
                            var t;
                            return new Promise(function (n, r) {
                                if (S[e.server]) k({target: {result: S[e.server]}}, e.server, e.version, e.schema).then(n, r); else {
                                    try {
                                        t = d().open(e.server, e.version)
                                    } catch (i) {
                                        r(i)
                                    }
                                    t.onsuccess = function (t) {
                                        k(t, e.server, e.version, e.schema).then(n, r)
                                    }, t.onupgradeneeded = function (t) {
                                        T(t, e.schema, t.target.result)
                                    }, t.onerror = function (e) {
                                        r(e)
                                    }
                                }
                            })
                        }, remove: function (e) {
                            return new Promise(function (t, n) {
                                if (!e) return t();
                                typeof e === b && (e = e.name);
                                var r;
                                "string" == typeof e && (r = S[e]), r && "function" == typeof r.close && r.close();
                                var i;
                                try {
                                    i = d().deleteDatabase(e)
                                } catch (o) {
                                    n(o)
                                }
                                i.onsuccess = function (n) {
                                    delete S[e], t(e)
                                }, i.onerror = function (e) {
                                    n(e)
                                }, i.onblocked = function (e) {
                                    n(e)
                                }
                            })
                        }
                    };
                "undefined" != typeof e && "undefined" != typeof e.exports ? e.exports = w : (r = function () {
                    return w
                }.call(t, n, t, e), !(r !== s && (e.exports = r)))
            }(window)
        }).call(t, function () {
            return this
        }())
    }, function (e, t, n) {
          
        var r = n(13), i = n(77), o = n(20), s = n(36), a = n(26), c = n(38), u = n(1), l = n(43), f = n(34), d = n(19),
            m = n(2).Promise;
        e.exports = function (e) {
            u.merge(e, {
                platform: r,
                xhr: i,
                io: o,
                naturalSort: s,
                deepAccess: a,
                db: c,
                util: u,
                support: l,
                blob: f,
                ajax: d,
                Promise: m
            })
        }
    }, , function (e, t, n) {
          

        function r(e) {
            var t = this;
            o(e.shouldPushNotificationWhenPCOnline) && (t.open = e.shouldPushNotificationWhenPCOnline ? 2 : 1)
        }

        var i = n(1), o = i.notundef;
        r.getDefaultConfig = function () {
            return {shouldPushNotificationWhenPCOnline: !0}
        }, r.reverse = function (e) {
            var t = {shouldPushNotificationWhenPCOnline: 1 !== +e.open};
            return t
        }, e.exports = r
    }, function (e, t, n) {
          
        var r = n(1), i = n(33), o = r.merge({}, i.idMap, {
            auth: {id: 2, login: 3, kicked: 5, logout: 6, multiPortLogin: 7, kick: 8},
            user: {
                id: 3,
                markInBlacklist: 3,
                getBlacklist: 4,
                markInMutelist: 5,
                getMutelist: 6,
                getRelations: 8,
                getUsers: 7,
                updateMyInfo: 10,
                updateDonnop: 15,
                syncMyInfo: 109,
                syncUpdateMyInfo: 110
            },
            notify: {
                id: 4,
                markRead: 3,
                syncOfflineMsgs: 4,
                batchMarkRead: 5,
                syncOfflineSysMsgs: 6,
                syncRoamingMsgs: 9,
                syncMsgReceipts: 12,
                syncRobots: 15
            },
            sync: {id: 5, sync: 1, syncTeamMembers: 2},
            msg: {
                id: 7,
                sendMsg: 1,
                msg: 2,
                sysMsg: 3,
                getHistoryMsgs: 6,
                sendCustomSysMsg: 7,
                searchHistoryMsgs: 8,
                deleteSessions: 9,
                getSessions: 10,
                syncSendMsg: 101,
                sendMsgReceipt: 11,
                msgReceipt: 12,
                deleteMsg: 13,
                msgDeleted: 14,
                markSessionAck: 16
            },
            team: {
                id: 8,
                createTeam: 1,
                sendTeamMsg: 2,
                teamMsg: 3,
                teamMsgs: 4,
                addTeamMembers: 5,
                removeTeamMembers: 6,
                updateTeam: 7,
                leaveTeam: 8,
                getTeam: 9,
                getTeams: 10,
                getTeamMembers: 11,
                dismissTeam: 12,
                applyTeam: 13,
                passTeamApply: 14,
                rejectTeamApply: 15,
                addTeamManagers: 16,
                removeTeamManagers: 17,
                transferTeam: 18,
                updateInfoInTeam: 19,
                updateNickInTeam: 20,
                acceptTeamInvite: 21,
                rejectTeamInvite: 22,
                getTeamHistoryMsgs: 23,
                searchTeamHistoryMsgs: 24,
                updateMuteStateInTeam: 25,
                getMyTeamMembers: 26,
                getMutedTeamMembers: 27,
                syncMyTeamMembers: 126,
                syncTeams: 109,
                syncTeamMembers: 111,
                syncCreateTeam: 101,
                syncSendTeamMsg: 102,
                syncUpdateTeamMember: 119
            },
            friend: {
                id: 12,
                friendRequest: 1,
                syncFriendRequest: 101,
                deleteFriend: 2,
                syncDeleteFriend: 102,
                updateFriend: 3,
                syncUpdateFriend: 103,
                getFriends: 4
            },
            chatroom: {id: 13, getChatroomAddress: 1},
            filter: {id: 101, sendFilterMsg: 1, filterMsg: 2, filterSysMsg: 3, sendFilterCustomSysMsg: 7},
            eventService: {
                id: 14,
                publishEvent: 1,
                pushEvent: 2,
                subscribeEvent: 3,
                unSubscribeEventsByAccounts: 4,
                unSubscribeEventsByType: 5,
                querySubscribeEventsByAccounts: 6,
                querySubscribeEventsByType: 7,
                pushEvents: 9
            }
        }), s = r.merge({}, i.cmdConfig, {
            login: {
                sid: o.auth.id,
                cid: o.auth.login,
                params: [{type: "Property", name: "login"}]
            },
            logout: {sid: o.auth.id, cid: o.auth.logout},
            kick: {sid: o.auth.id, cid: o.auth.kick, params: [{type: "StrArray", name: "deviceIds"}]},
            markInBlacklist: {
                sid: o.user.id,
                cid: o.user.markInBlacklist,
                params: [{type: "String", name: "account"}, {type: "bool", name: "isAdd"}]
            },
            getBlacklist: {sid: o.user.id, cid: o.user.getBlacklist, params: [{type: "long", name: "time"}]},
            markInMutelist: {
                sid: o.user.id,
                cid: o.user.markInMutelist,
                params: [{type: "String", name: "account"}, {type: "bool", name: "isAdd"}]
            },
            getMutelist: {sid: o.user.id, cid: o.user.getMutelist, params: [{type: "long", name: "time"}]},
            getRelations: {sid: o.user.id, cid: o.user.getRelations, params: [{type: "long", name: "timetag"}]},
            getUsers: {sid: o.user.id, cid: o.user.getUsers, params: [{type: "StrArray", name: "accounts"}]},
            updateMyInfo: {sid: o.user.id, cid: o.user.updateMyInfo, params: [{type: "Property", name: "user"}]},
            updateDonnop: {sid: o.user.id, cid: o.user.updateDonnop, params: [{type: "Property", name: "donnop"}]},
            markRead: {
                sid: o.notify.id,
                cid: o.notify.markRead,
                params: [{type: "long", name: "id"}, {type: "ph", name: "ph"}]
            },
            batchMarkRead: {
                sid: o.notify.id,
                cid: o.notify.batchMarkRead,
                params: [{type: "byte", name: "sid"}, {type: "byte", name: "cid"}, {type: "LongArray", name: "ids"}]
            },
            sync: {sid: o.sync.id, cid: o.sync.sync, params: [{type: "Property", name: "sync"}]},
            syncTeamMembers: {
                sid: o.sync.id,
                cid: o.sync.syncTeamMembers,
                params: [{type: "LongLongMap", name: "sync"}]
            },
            sendMsg: {sid: o.msg.id, cid: o.msg.sendMsg, params: [{type: "Property", name: "msg"}]},
            getHistoryMsgs: {
                sid: o.msg.id,
                cid: o.msg.getHistoryMsgs,
                params: [{type: "String", name: "to"}, {type: "long", name: "beginTime"}, {
                    type: "long",
                    name: "endTime"
                }, {type: "long", name: "lastMsgId"}, {type: "int", name: "limit"}, {type: "bool", name: "reverse"}]
            },
            sendCustomSysMsg: {
                sid: o.msg.id,
                cid: o.msg.sendCustomSysMsg,
                params: [{type: "Property", name: "sysMsg"}]
            },
            searchHistoryMsgs: {
                sid: o.msg.id,
                cid: o.msg.searchHistoryMsgs,
                params: [{type: "String", name: "to"}, {type: "long", name: "beginTime"}, {
                    type: "long",
                    name: "endTime"
                }, {type: "String", name: "keyword"}, {type: "int", name: "limit"}, {type: "bool", name: "reverse"}]
            },
            getSessions: {sid: o.msg.id, cid: o.msg.getSessions, params: [{type: "long", name: "time"}]},
            deleteSessions: {sid: o.msg.id, cid: o.msg.deleteSessions, params: [{type: "StrArray", name: "sessions"}]},
            sendMsgReceipt: {
                sid: o.msg.id,
                cid: o.msg.sendMsgReceipt,
                params: [{type: "Property", name: "msgReceipt"}]
            },
            deleteMsg: {sid: o.msg.id, cid: o.msg.deleteMsg, params: [{type: "Property", name: "sysMsg"}]},
            markSessionAck: {
                sid: o.msg.id,
                cid: o.msg.markSessionAck,
                params: [{type: "byte", name: "scene"}, {type: "String", name: "to"}, {type: "long", name: "timetag"}]
            },
            createTeam: {
                sid: o.team.id,
                cid: o.team.createTeam,
                params: [{type: "Property", name: "team"}, {type: "StrArray", name: "accounts"}, {
                    type: "String",
                    name: "ps"
                }]
            },
            sendTeamMsg: {sid: o.team.id, cid: o.team.sendTeamMsg, params: [{type: "Property", name: "msg"}]},
            addTeamMembers: {
                sid: o.team.id,
                cid: o.team.addTeamMembers,
                params: [{type: "long", name: "teamId"}, {type: "StrArray", name: "accounts"}, {
                    type: "String",
                    name: "ps"
                }]
            },
            removeTeamMembers: {
                sid: o.team.id,
                cid: o.team.removeTeamMembers,
                params: [{type: "long", name: "teamId"}, {type: "StrArray", name: "accounts"}]
            },
            updateTeam: {sid: o.team.id, cid: o.team.updateTeam, params: [{type: "Property", name: "team"}]},
            leaveTeam: {sid: o.team.id, cid: o.team.leaveTeam, params: [{type: "long", name: "teamId"}]},
            getTeam: {sid: o.team.id, cid: o.team.getTeam, params: [{type: "long", name: "teamId"}]},
            getTeams: {sid: o.team.id, cid: o.team.getTeams, params: [{type: "long", name: "timetag"}]},
            getTeamMembers: {
                sid: o.team.id,
                cid: o.team.getTeamMembers,
                params: [{type: "long", name: "teamId"}, {type: "long", name: "timetag"}]
            },
            dismissTeam: {sid: o.team.id, cid: o.team.dismissTeam, params: [{type: "long", name: "teamId"}]},
            applyTeam: {
                sid: o.team.id,
                cid: o.team.applyTeam,
                params: [{type: "long", name: "teamId"}, {type: "String", name: "ps"}]
            },
            passTeamApply: {
                sid: o.team.id,
                cid: o.team.passTeamApply,
                params: [{type: "long", name: "teamId"}, {type: "String", name: "from"}]
            },
            rejectTeamApply: {
                sid: o.team.id,
                cid: o.team.rejectTeamApply,
                params: [{type: "long", name: "teamId"}, {type: "String", name: "from"}, {type: "String", name: "ps"}]
            },
            addTeamManagers: {
                sid: o.team.id,
                cid: o.team.addTeamManagers,
                params: [{type: "long", name: "teamId"}, {type: "StrArray", name: "accounts"}]
            },
            removeTeamManagers: {
                sid: o.team.id,
                cid: o.team.removeTeamManagers,
                params: [{type: "long", name: "teamId"}, {type: "StrArray", name: "accounts"}]
            },
            transferTeam: {
                sid: o.team.id,
                cid: o.team.transferTeam,
                params: [{type: "long", name: "teamId"}, {type: "String", name: "account"}, {
                    type: "bool",
                    name: "leave"
                }]
            },
            updateInfoInTeam: {
                sid: o.team.id,
                cid: o.team.updateInfoInTeam,
                params: [{type: "Property", name: "teamMember"}]
            },
            updateNickInTeam: {
                sid: o.team.id,
                cid: o.team.updateNickInTeam,
                params: [{type: "Property", name: "teamMember"}]
            },
            acceptTeamInvite: {
                sid: o.team.id,
                cid: o.team.acceptTeamInvite,
                params: [{type: "long", name: "teamId"}, {type: "String", name: "from"}]
            },
            rejectTeamInvite: {
                sid: o.team.id,
                cid: o.team.rejectTeamInvite,
                params: [{type: "long", name: "teamId"}, {type: "String", name: "from"}, {type: "String", name: "ps"}]
            },
            getTeamHistoryMsgs: {
                sid: o.team.id,
                cid: o.team.getTeamHistoryMsgs,
                params: [{type: "long", name: "to"}, {type: "long", name: "beginTime"}, {
                    type: "long",
                    name: "endTime"
                }, {type: "long", name: "lastMsgId"}, {type: "int", name: "limit"}, {type: "bool", name: "reverse"}]
            },
            searchTeamHistoryMsgs: {
                sid: o.team.id,
                cid: o.team.searchTeamHistoryMsgs,
                params: [{type: "long", name: "to"}, {type: "long", name: "beginTime"}, {
                    type: "long",
                    name: "endTime"
                }, {type: "String", name: "keyword"}, {type: "int", name: "limit"}, {type: "bool", name: "reverse"}]
            },
            updateMuteStateInTeam: {
                sid: o.team.id,
                cid: o.team.updateMuteStateInTeam,
                params: [{type: "long", name: "teamId"}, {type: "String", name: "account"}, {type: "int", name: "mute"}]
            },
            getMyTeamMembers: {
                sid: o.team.id,
                cid: o.team.getMyTeamMembers,
                params: [{type: "LongArray", name: "teamIds"}]
            },
            getMutedTeamMembers: {
                sid: o.team.id,
                cid: o.team.getMutedTeamMembers,
                params: [{type: "long", name: "teamId"}]
            },
            friendRequest: {
                sid: o.friend.id,
                cid: o.friend.friendRequest,
                params: [{type: "String", name: "account"}, {type: "byte", name: "type"}, {type: "String", name: "ps"}]
            },
            deleteFriend: {sid: o.friend.id, cid: o.friend.deleteFriend, params: [{type: "String", name: "account"}]},
            updateFriend: {sid: o.friend.id, cid: o.friend.updateFriend, params: [{type: "Property", name: "friend"}]},
            getFriends: {sid: o.friend.id, cid: o.friend.getFriends, params: [{type: "long", name: "timetag"}]},
            getChatroomAddress: {
                sid: o.chatroom.id,
                cid: o.chatroom.getChatroomAddress,
                params: [{type: "long", name: "chatroomId"}]
            },
            sendFilterMsg: {sid: o.filter.id, cid: o.filter.sendFilterMsg, params: [{type: "Property", name: "msg"}]},
            sendFilterCustomSysMsg: {
                sid: o.filter.id,
                cid: o.filter.sendFilterCustomSysMsg,
                params: [{type: "Property", name: "sysMsg"}]
            },
            publishEvent: {
                sid: o.eventService.id,
                cid: o.eventService.publishEvent,
                params: [{type: "Property", name: "msgEvent"}]
            },
            pushEvent: {sid: o.eventService.id, cid: o.eventService.pushEvent},
            subscribeEvent: {
                sid: o.eventService.id,
                cid: o.eventService.subscribeEvent,
                params: [{type: "Property", name: "msgEventSubscribe"}, {type: "StrArray", name: "accounts"}]
            },
            unSubscribeEventsByAccounts: {
                sid: o.eventService.id,
                cid: o.eventService.unSubscribeEventsByAccounts,
                params: [{type: "Property", name: "msgEventSubscribe"}, {type: "StrArray", name: "accounts"}]
            },
            unSubscribeEventsByType: {
                sid: o.eventService.id,
                cid: o.eventService.unSubscribeEventsByType,
                params: [{type: "Property", name: "msgEventSubscribe"}]
            },
            querySubscribeEventsByAccounts: {
                sid: o.eventService.id,
                cid: o.eventService.querySubscribeEventsByAccounts,
                params: [{type: "Property", name: "msgEventSubscribe"}, {type: "StrArray", name: "accounts"}]
            },
            querySubscribeEventsByType: {
                sid: o.eventService.id,
                cid: o.eventService.querySubscribeEventsByType,
                params: [{type: "Property", name: "msgEventSubscribe"}]
            },
            pushEvents: {sid: o.eventService.id, cid: o.eventService.pushEvents}
        }), a = r.merge({}, i.packetConfig, {
            "2_3": {
                service: "auth",
                cmd: "login",
                response: [{type: "Property", name: "loginRes"}, {
                    type: "PropertyArray",
                    name: "loginPorts",
                    entity: "loginPort"
                }]
            },
            "2_5": {
                service: "auth",
                cmd: "kicked",
                response: [{type: "Number", name: "from"}, {type: "Number", name: "reason"}]
            },
            "2_6": {service: "auth", cmd: "logout"},
            "2_7": {
                service: "auth",
                cmd: "multiPortLogin",
                response: [{type: "Number", name: "state"}, {
                    type: "PropertyArray",
                    name: "loginPorts",
                    entity: "loginPort"
                }]
            },
            "2_8": {service: "auth", cmd: "kick", response: [{type: "StrArray", name: "deviceIds"}]},
            "3_3": {service: "user", cmd: "markInBlacklist"},
            "3_103": {
                service: "user",
                cmd: "syncMarkInBlacklist",
                response: [{type: "String", name: "account"}, {type: "Boolean", name: "isAdd"}]
            },
            "3_4": {service: "user", cmd: "getBlacklist", response: [{type: "StrArray", name: "blacklist"}]},
            "3_5": {service: "user", cmd: "markInMutelist"},
            "3_105": {
                service: "user",
                cmd: "syncMarkInMutelist",
                response: [{type: "String", name: "account"}, {type: "Boolean", name: "isAdd"}]
            },
            "3_6": {service: "user", cmd: "getMutelist", response: [{type: "StrArray", name: "mutelist"}]},
            "3_8": {
                service: "user",
                cmd: "getRelations",
                response: [{
                    type: "PropertyArray",
                    name: "specialRelations",
                    entity: "specialRelation"
                }, {type: "Number", name: "timetag"}]
            },
            "3_7": {
                service: "user",
                cmd: "getUsers",
                response: [{type: "PropertyArray", name: "users", entity: "user"}]
            },
            "3_10": {service: "user", cmd: "updateMyInfo", response: [{type: "Number", name: "timetag"}]},
            "3_15": {service: "user", cmd: "updateDonnop", response: [{type: "Number", name: "timetag"}]},
            "3_115": {
                service: "user",
                cmd: "syncUpdateDonnop",
                response: [{type: "Property", name: "donnop"}, {type: "Number", name: "timetag"}]
            },
            "3_109": {
                service: "user",
                cmd: "syncMyInfo",
                response: [{type: "Property", name: "user"}, {type: "Number", name: "timetag"}]
            },
            "3_110": {service: "user", cmd: "syncUpdateMyInfo", response: [{type: "Property", name: "user"}]},
            "4_1": {service: "notify"},
            "4_2": {service: "notify"},
            "4_3": {service: "notify", cmd: "markRead"},
            "4_4": {
                service: "notify",
                cmd: "syncOfflineMsgs",
                response: [{type: "PropertyArray", name: "msgs", entity: "msg"}]
            },
            "4_5": {service: "notify", cmd: "batchMarkRead"},
            "4_6": {
                service: "notify",
                cmd: "syncOfflineSysMsgs",
                response: [{type: "PropertyArray", name: "sysMsgs", entity: "sysMsg"}]
            },
            "4_9": {
                service: "notify",
                cmd: "syncRoamingMsgs",
                response: [{type: "PropertyArray", name: "msgs", entity: "msg"}]
            },
            "4_12": {
                service: "notify",
                cmd: "syncMsgReceipts",
                response: [{type: "PropertyArray", name: "msgReceipts", entity: "msgReceipt"}, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "4_13": {
                service: "notify",
                cmd: "syncDonnop",
                response: [{type: "Property", name: "donnop"}, {type: "Number", name: "timetag"}]
            },
            "4_14": {
                service: "notify",
                cmd: "syncSessionAck",
                response: [{type: "StrLongMap", name: "p2p"}, {type: "LongLongMap", name: "team"}, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "4_15": {
                service: "notify",
                cmd: "syncRobots",
                response: [{type: "PropertyArray", name: "robots", entity: "robot"}]
            },
            "4_100": {
                service: "notify",
                cmd: "syncOfflineFilterMsgs",
                response: [{type: "PropertyArray", name: "msgs", entity: "msg"}]
            },
            "4_101": {
                service: "notify",
                cmd: "syncOfflineFilterSysMsgs",
                response: [{type: "PropertyArray", name: "sysMsgs", entity: "sysMsg"}]
            },
            "5_1": {service: "sync", cmd: "syncDone", response: [{type: "Number", name: "timetag"}]},
            "5_2": {service: "sync", cmd: "syncTeamMembersDone", response: [{type: "Number", name: "timetag"}]},
            "7_1": {
                service: "msg",
                cmd: "sendMsg",
                response: [{type: "Property", name: "msg"}],
                trivialErrorCodes: [7101]
            },
            "7_2": {service: "msg", cmd: "msg", response: [{type: "Property", name: "msg"}]},
            "7_3": {service: "msg", cmd: "sysMsg", response: [{type: "Property", name: "sysMsg"}]},
            "7_6": {
                service: "msg",
                cmd: "getHistoryMsgs",
                response: [{type: "PropertyArray", name: "msgs", entity: "msg"}]
            },
            "7_7": {service: "msg", cmd: "sendCustomSysMsg", trivialErrorCodes: [7101]},
            "7_8": {
                service: "msg",
                cmd: "searchHistoryMsgs",
                response: [{type: "PropertyArray", name: "msgs", entity: "msg"}]
            },
            "7_9": {service: "msg", cmd: "deleteSessions"},
            "7_10": {service: "msg", cmd: "getSessions", response: [{type: "StrArray", name: "sessions"}]},
            "7_101": {service: "msg", cmd: "syncSendMsg", response: [{type: "Property", name: "msg"}]},
            "7_11": {service: "msg", cmd: "sendMsgReceipt", response: [{type: "Property", name: "msgReceipt"}]},
            "7_12": {service: "msg", cmd: "msgReceipt", response: [{type: "Property", name: "msgReceipt"}]},
            "7_13": {service: "msg", cmd: "onDeleteMsg"},
            "7_14": {service: "msg", cmd: "onMsgDeleted", response: [{type: "Property", name: "sysMsg"}]},
            "7_15": {
                service: "msg",
                cmd: "onDeleteMsgOfflineRoaming",
                response: [{type: "PropertyArray", name: "sysMsgs", entity: "sysMsg"}, {
                    type: "Number",
                    name: "timetag"
                }, {type: "Number", name: "type"}]
            },
            "7_16": {service: "msg", cmd: "onMarkSessionAck"},
            "7_116": {
                service: "msg",
                cmd: "syncMarkSessionAck",
                response: [{type: "Number", name: "scene"}, {type: "String", name: "to"}, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "8_1": {service: "team", cmd: "createTeam", response: [{type: "Property", name: "team"}]},
            "8_2": {service: "team", cmd: "sendTeamMsg", response: [{type: "Property", name: "msg"}]},
            "8_3": {service: "team", cmd: "teamMsg", response: [{type: "Property", name: "msg"}]},
            "8_4": {service: "team", cmd: "teamMsgs", response: [{type: "PropertyArray", name: "msgs", entity: "msg"}]},
            "8_5": {service: "team", cmd: "addTeamMembers"},
            "8_6": {service: "team", cmd: "removeTeamMembers"},
            "8_7": {
                service: "team",
                cmd: "updateTeam",
                response: [{type: "Number", name: "id"}, {type: "Number", name: "time"}]
            },
            "8_8": {service: "team", cmd: "leaveTeam"},
            "8_9": {service: "team", cmd: "getTeam", response: [{type: "Property", name: "team"}]},
            "8_10": {
                service: "team",
                cmd: "getTeams",
                response: [{type: "PropertyArray", name: "teams", entity: "team"}, {type: "Number", name: "timetag"}]
            },
            "8_11": {
                service: "team",
                cmd: "getTeamMembers",
                response: [{type: "Number", name: "teamId"}, {
                    type: "PropertyArray",
                    name: "members",
                    entity: "teamMember"
                }, {type: "Number", name: "timetag"}]
            },
            "8_12": {service: "team", cmd: "dismissTeam"},
            "8_13": {service: "team", cmd: "applyTeam", response: [{type: "Property", name: "team"}]},
            "8_14": {service: "team", cmd: "passTeamApply"},
            "8_15": {service: "team", cmd: "rejectTeamApply"},
            "8_16": {service: "team", cmd: "addTeamManagers"},
            "8_17": {service: "team", cmd: "removeTeamManagers"},
            "8_18": {service: "team", cmd: "transferTeam"},
            "8_19": {service: "team", cmd: "updateInfoInTeam"},
            "8_20": {service: "team", cmd: "updateNickInTeam"},
            "8_21": {service: "team", cmd: "acceptTeamInvite", response: [{type: "Property", name: "team"}]},
            "8_22": {service: "team", cmd: "rejectTeamInvite"},
            "8_23": {
                service: "team",
                cmd: "getTeamHistoryMsgs",
                response: [{type: "PropertyArray", name: "msgs", entity: "msg"}]
            },
            "8_24": {
                service: "team",
                cmd: "searchTeamHistoryMsgs",
                response: [{type: "PropertyArray", name: "msgs", entity: "msg"}]
            },
            "8_25": {service: "team", cmd: "updateMuteStateInTeam"},
            "8_26": {
                service: "team",
                cmd: "getMyTeamMembers",
                response: [{type: "PropertyArray", name: "teamMembers", entity: "teamMember"}]
            },
            "8_27": {
                service: "team",
                cmd: "getMutedTeamMembers",
                response: [{type: "Number", name: "teamId"}, {
                    type: "PropertyArray",
                    name: "teamMembers",
                    entity: "teamMember"
                }]
            },
            "8_126": {
                service: "team",
                cmd: "syncMyTeamMembers",
                response: [{type: "PropertyArray", name: "teamMembers", entity: "teamMember"}, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "8_109": {
                service: "team",
                cmd: "syncTeams",
                response: [{type: "Number", name: "timetag"}, {type: "PropertyArray", name: "teams", entity: "team"}]
            },
            "8_111": {
                service: "team",
                cmd: "syncTeamMembers",
                response: [{type: "Number", name: "teamId"}, {
                    type: "PropertyArray",
                    name: "members",
                    entity: "teamMember"
                }, {type: "Number", name: "timetag"}]
            },
            "8_101": {service: "team", cmd: "syncCreateTeam", response: [{type: "Property", name: "team"}]},
            "8_102": {service: "team", cmd: "syncSendTeamMsg", response: [{type: "Property", name: "msg"}]},
            "8_119": {service: "team", cmd: "syncUpdateTeamMember", response: [{type: "Property", name: "teamMember"}]},
            "12_1": {service: "friend", cmd: "friendRequest"},
            "12_101": {
                service: "friend",
                cmd: "syncFriendRequest",
                response: [{type: "String", name: "account"}, {type: "Number", name: "type"}, {
                    type: "String",
                    name: "ps"
                }]
            },
            "12_2": {service: "friend", cmd: "deleteFriend"},
            "12_102": {service: "friend", cmd: "syncDeleteFriend", response: [{type: "String", name: "account"}]},
            "12_3": {service: "friend", cmd: "updateFriend"},
            "12_103": {service: "friend", cmd: "syncUpdateFriend", response: [{type: "Property", name: "friend"}]},
            "12_4": {
                service: "friend",
                cmd: "getFriends",
                response: [{type: "PropertyArray", name: "friends", entity: "friend"}, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "12_5": {
                service: "friend",
                cmd: "syncFriends",
                response: [{type: "PropertyArray", name: "friends", entity: "friend"}, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "12_6": {
                service: "friend",
                cmd: "syncFriendUsers",
                response: [{type: "PropertyArray", name: "users", entity: "user"}, {type: "Number", name: "timetag"}]
            },
            "13_1": {service: "chatroom", cmd: "getChatroomAddress", response: [{type: "StrArray", name: "address"}]},
            "14_1": {service: "eventService", cmd: "publishEvent", response: [{type: "Property", name: "msgEvent"}]},
            "14_2": {service: "eventService", cmd: "pushEvent", response: [{type: "Property", name: "msgEvent"}]},
            "14_3": {service: "eventService", cmd: "subscribeEvent", response: [{type: "StrArray", name: "accounts"}]},
            "14_4": {
                service: "eventService",
                cmd: "unSubscribeEventsByAccounts",
                response: [{type: "StrArray", name: "accounts"}]
            },
            "14_5": {service: "eventService", cmd: "unSubscribeEventsByType"},
            "14_6": {
                service: "eventService",
                cmd: "querySubscribeEventsByAccounts",
                response: [{type: "PropertyArray", name: "msgEventSubscribes", entity: "msgEventSubscribe"}]
            },
            "14_7": {
                service: "eventService",
                cmd: "querySubscribeEventsByType",
                response: [{type: "PropertyArray", name: "msgEventSubscribes", entity: "msgEventSubscribe"}]
            },
            "14_9": {
                service: "eventService",
                cmd: "pushEvents",
                response: [{type: "PropertyArray", name: "msgEvents", entity: "msgEvent"}]
            },
            "101_1": {service: "filter", cmd: "sendFilterMsg", response: [{type: "Property", name: "msg"}]},
            "101_2": {service: "filter", cmd: "filterMsg", response: [{type: "Property", name: "msg"}]},
            "101_3": {service: "filter", cmd: "filterSysMsg", response: [{type: "Property", name: "sysMsg"}]},
            "101_7": {service: "filter", cmd: "sendFilterCustomSysMsg"}
        });
        e.exports = {idMap: o, cmdConfig: s, packetConfig: a}
    }, function (e, t) {
          
        var n = {};
        n.set = function (e, t, r) {
            n[e] = t, r && (r.support = t)
        }, e.exports = n
    }, function (e, t, n) {
          

        function r() {
        }

        var i = n(9);
        r.typeMap = {
            text: 0,
            image: 1,
            audio: 2,
            video: 3,
            geo: 4,
            notification: 5,
            file: 6,
            tip: 10,
            robot: 11,
            custom: 100
        };
        var o = r.typeReverseMap = {
            0: "text",
            1: "image",
            2: "audio",
            3: "video",
            4: "geo",
            5: "notification",
            6: "file",
            10: "tip",
            11: "robot",
            100: "custom"
        };
        r.validTypes = Object.keys(r.typeMap), r.setFlow = function (e, t) {
            var n = t === e.from;
            n && t === e.to && (n = i.deviceId === e.fromDeviceId), e.flow = n ? "out" : "in", "robot" === e.type && e.content && e.content.msgOut && (e.flow = "in")
        }, r.getType = function (e) {
            var t = e.type;
            return o[t] || t
        }, e.exports = r
    }, function (e, t, n) {
          
        var r = n(7).fn;
        r.isConnected = function () {
            return this.protocol.isConnected()
        }, r.connect = function () {
            this.protocol.connect()
        }, r.disconnect = function () {
            this.protocol.disconnect()
        }
    }, function (e, t, n) {
          
        var r = n(1), i = n(7).fn;
        i.uploadSdkLogUrl = function (e) {
            return r.verifyOptions(e, "url"), this.cbAndSendCmd("uploadSdkLogUrl", e)
        }
    }, function (e, t, n) {
        (function (e) {
              
            var t = n(7).fn, r = n(1), i = n(76), o = n(4), s = n(6), a = n(64), c = n(66), u = n(34);
            t.sendText = function (e) {
                var t = this;
                return t.processCallback(e), e.msg = new t.message.TextMessage(e), t.sendMsg(e)
            }, t.previewFile = function (e) {
                if (r.verifyOptions(e, "done"), e.type || (e.type = "file"), r.verifyParamPresentJustOne(e, "dataURL blob fileInput wxFilePath"), e.dataURL) e.blob = u.fromDataURL(e.dataURL); else if (e.blob) ; else if (e.fileInput) {
                    if (e.fileInput = r.verifyFileInput(e.fileInput), e.fileInput.files && !e.fileInput.files.length) return void e.done(o.newNoFileError("请选择" + e.type + "文件"), e);
                    e.fileInputName = r.getFileName(e.fileInput)
                }
                this.processCallback(e);
                var t = a.genResponseBody(e.type) || {};
                this.getNosToken({
                    responseBody: JSON.stringify(t).replace(/"/gi, '\\"'), callback: function (t, n) {
                        return t ? void e.done(t, e.callback.options) : (e.nosToken = n, void this._doPreviewFile(e))
                    }.bind(this)
                })
            }, t._doPreviewFile = function (t) {
                function n(n, c) {
                    if (t.uploaddone = o, n) return n.appendMessage("上传文件失败"), void t.done(n, t.callback.options);
                    if (c = a.parseResponse(c, i.options.exifOrientation), c.url = s.genDownloadUrl(t.nosToken.bucket, l.Object), r.exist(t.fileInputName)) c.name = t.fileInputName; else if (t.blob) {
                        var u = t.blob.name;
                        if (c.name = u || "blob-" + c.md5, !u) {
                            var f = t.blob.type;
                            c.ext = f.slice(f.lastIndexOf("/") + 1)
                        }
                    }
                    if (e.env.WEIXIN_APP && (c.name = t.wxFilePath), !c.ext) {
                        var d = c.name.lastIndexOf(".");
                        d === -1 ? c.ext = "unknown" : c.ext = c.name.slice(d + 1)
                    }
                    return void t.done(null, r.copy(c))
                }

                var i = this, o = t.uploaddone, u = s.genUploadUrl(t.nosToken.bucket),
                    l = this.assembleUploadParams(t.nosToken), f = "file";
                e.env.WEIXIN_APP ? (r.verifyOptions(t, "wxFilePath"),
                    wx.uploadFile({
                        url: u, filePath: t.wxFilePath, name: f, formData: l, fail: function (e) {
                        }, success: function (e) {
                            if (200 === e.statusCode) try {
                                n(null, JSON.parse(e.data))
                            } catch (t) {
                                n({code: "PARSE_WX_UPLOAD_FILE_RES_ERROR", str: e.data, msg: e.errMsg})
                            } else n({code: e.statusCode, msg: e.errMsg})
                        }
                    })) : (t.uploaddone = n, t.url = u, t.params = l, t.fileName = f, new c(t))
            }, t.sendFile = function (e) {
                var t = this;
                if (e.type || (e.type = "file"), r.verifyParamPresentJustOne(e, "dataURL blob fileInput file wxFilePath"), t.processCallback(e), e.dataURL) t._previewAndSendFile(e); else if (e.blob) t._previewAndSendFile(e); else if (e.fileInput) {
                    if (e.fileInput = r.verifyFileInput(e.fileInput), e.fileInput.files && !e.fileInput.files.length) return void e.done(o.newNoFileError("请选择" + e.type + "文件"), e.callback.options);
                    t._previewAndSendFile(e)
                } else if (e.wxFilePath) t._previewAndSendFile(e); else if (e.file) return e.msg = new t.message.FileMessage(e), t.sendMsg(e)
            }, t._previewAndSendFile = function (e) {
                var t = this;
                r.verifyCallback(e, "uploaddone beforesend");
                var n = e.done;
                e.done = function (i, o) {
                    e.done = n, i ? e.uploaddone(i, e.callback.options) : (e.uploaddone(null, r.copy(o)), e.file = o, e.msg = new t.message.FileMessage(e), e.beforesend(t.sendMsg(e)))
                }, t.previewFile(e)
            }, t.assembleUploadParams = function (e) {
                return e ? {
                    Object: decodeURIComponent(e.objectName),
                    "x-nos-token": e.token,
                    "x-nos-entity-type": "json"
                } : null
            }, t.sendGeo = function (e) {
                var t = this;
                return t.processCallback(e), e.msg = new t.message.GeoMessage(e), t.sendMsg(e)
            }, t.sendTipMsg = function (e) {
                var t = this;
                return t.processCallback(e), e.msg = new t.message.TipMessage(e), t.sendMsg(e)
            }, t.sendCustomMsg = function (e) {
                var t = this;
                return t.processCallback(e), e.msg = new t.message.CustomMessage(e), t.sendMsg(e)
            }, t.sendRobotMsg = function (e) {
                var t = this;
                return t.processCallback(e), e.msg = new t.message.RobotMessage(e), t.sendMsg(e)
            }, t.sendMsg = function (e) {
                var t = this, n = t.protocol, i = e.msg, o = {}, s = !!e.isLocal;
                if (s && e.time && (i.time = e.time), e.resend && ("out" !== e.flow || "fail" !== e.status)) return r.onError("只能重发发送失败的消息");
                e.callback.options.idClient = i.idClient, t.beforeSendMsg(e, o);
                var a = e.rtnMsg = t.formatReturnMsg(i);
                return s && (a.status = "success", a.isLocal = !0), n.storeSendMsg && (o.promise = n.storeSendMsg(a)), e.cbaop = function (e) {
                    if (e && "server" !== e.from) return a.status = "fail", n.updateSendMsgError && n.updateSendMsgError(a), a
                }, s || (o.msg = i, t.sendCmd(e.cmd, o, e.callback)), t.afterSendMsg(e), s && setTimeout(function () {
                    a = r.simpleClone(a), e.done(null, a)
                }, 0), r.copy(a)
            }, t.beforeSendMsg = function () {
            }, t.afterSendMsg = function () {
            }, t.formatReturnMsg = function (e) {
                var t = this;
                return e = r.copy(e), t.protocol.completeMsg(e), e.status = "sending", e = t.message.reverse(e)
            }, t.resendMsg = function (e) {
                var t = this;
                return r.verifyOptions(e, "msg"), t.trimMsgFlag(e), e.resend = !0, t._sendMsgByType(e)
            }, t.forwardMsg = function (e) {
                var t = this;
                return r.verifyOptions(e, "msg"), t.beforeForwardMsg(e), t.trimMsgFlag(e), e.forward = !0, e.msg.idClient = r.guid(), t._sendMsgByType(e)
            }, t.trimMsgFlag = function (e) {
                e && e.msg && (e.msg = r.copy(e.msg), delete e.msg.resend, delete e.msg.forward)
            }, t.beforeForwardMsg = function () {
            }, t._sendMsgByType = function (e) {
                var t = this;
                switch (r.verifyOptions(e, "msg"), r.verifyParamValid("msg.type", e.msg.type, t.message.validTypes), r.merge(e, e.msg), e.type) {
                    case"text":
                        return t.sendText(e);
                    case"image":
                    case"audio":
                    case"video":
                    case"file":
                        return t.sendFile(e);
                    case"geo":
                        return t.sendGeo(e);
                    case"custom":
                        return t.sendCustomMsg(e);
                    case"tip":
                        return t.sendTipMsg(e);
                    default:
                        throw new o("不能发送类型为 " + e.type + " 的消息")
                }
            }, t.parseRobotTemplate = function (e) {
                function t(e) {
                    if (e.link) {
                        var t = e.link;
                        Array.isArray(t) || (t = [t]), t = t.map(function (e) {
                            return e.image && (e.image = r(e)), e.text && (e.text = n(e)), "url" === e._type ? (e.type = "url", e.style = e._style || "", e.target = e._target, delete e._target, delete e._style) : "block" === e._type && (e.type = "block", e.style = e._style || "", e.params = e._params || "", e.target = e._target, delete e._params, delete e._target, delete e._style), delete e._type, e
                        }), e.link = t
                    }
                    return e.link
                }

                function n(e) {
                    return Array.isArray(e.text) || (e.text = [e.text]), e.text = e.text.map(function (e) {
                        return {type: "text", name: e._name, text: e.__text}
                    }), e.text
                }

                function r(e) {
                    return Array.isArray(e.image) || (e.image = [e.image]), e.image = e.image.map(function (e) {
                        return {type: "image", name: e._name, url: e._url}
                    }), e.image
                }

                if (/<template[^>\/]+\/>/.test(e)) return {raw: e, json: [{type: "text", name: "", text: ""}]};
                if (!/<template[^>\/]+>/.test(e)) return {raw: e, json: [{type: "text", name: "", text: e}]};
                var o = new i({escapeMode: !1});
                e = e.replace(/<template [^>]+>/, "<template>");
                var s = o.xml2js(e);
                s = s.template.LinearLayout, Array.isArray(s) || (s = [s]);
                var a = [];
                return s = s.forEach(function (e) {
                    e.image && (a = a.concat(r(e))), e.text && (a = a.concat(n(e))), e.link && (a = a.concat(t(e)))
                }), {raw: e, json: a}
            }
        }).call(t, n(10))
    }, function (e, t, n) {
          
        var r = n(1), i = n(7).fn, o = n(32);
        i.getSimpleNosToken = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return e.num = 1, r.verifyOptions(e), this.cbAndSendCmd("getSimpleNosToken", e)
        }, i.getNosToken = function (e) {
            this.sendCmd("getNosToken", {responseBody: e.responseBody}, e.callback)
        }, i.packFileDownloadName = function (e) {
            r.verifyOptions(e, "url name");
            var t = e.url;
            return t + r.genUrlSep(t) + "download=" + encodeURIComponent(e.name)
        }, i.audioToMp3 = function (e) {
            r.verifyOptions(e, "url");
            var t = e.url;
            return t + r.genUrlSep(t) + "audioTrans&type=mp3"
        }, i.stripImageMeta = function (e) {
            return this.beforeProcessImage(e, "stripmeta")
        }, i.qualityImage = function (e) {
            return this.beforeProcessImage(e, "quality")
        }, i.interlaceImage = function (e) {
            return this.beforeProcessImage(e, "interlace")
        }, i.rotateImage = function (e) {
            return this.beforeProcessImage(e, "rotate")
        }, i.blurImage = function (e) {
            return this.beforeProcessImage(e, "blur")
        }, i.cropImage = function (e) {
            return this.beforeProcessImage(e, "crop")
        }, i.thumbnailImage = function (e) {
            return this.beforeProcessImage(e, "thumbnail")
        }, i.beforeProcessImage = function (e, t) {
            var n = r.copy(e);
            return n.type = t, e.ops = [n], this.processImage(e)
        }, i.processImage = function (e) {
            var t = this;
            r.verifyOptions(e, "url ops"), r.verifyParamType("ops", e.ops, "array");
            var n = e.ops.map(function (e) {
                return r.verifyOptions(e, "type"), r.verifyParamValid("type", e.type, o.validTypes), t["gen" + e.type.slice(0, 1).toUpperCase() + e.type.slice(1) + "Op"](e)
            });
            t.processCallback(e), t.sendCmd("processImage", {url: e.url, imageOps: n}, e.callback)
        }, i.genStripmetaOp = function (e) {
            return new o({type: e.type, stripmeta: e.strip ? 1 : 0})
        }, i.genQualityOp = function (e) {
            r.verifyOptions(e, "quality"), r.verifyParamType("quality", e.quality, "number"), r.verifyParamMin("quality", e.quality, 0), r.verifyParamMax("quality", e.quality, 100);
            var t = Math.round(e.quality);
            return new o({type: e.type, qualityQuality: t})
        }, i.genInterlaceOp = function (e) {
            return new o({type: e.type})
        }, i.genRotateOp = function (e) {
            for (r.verifyOptions(e, "angle"), r.verifyParamType("angle", e.angle, "number"); e.angle < 0;) e.angle = e.angle + 360;
            e.angle = e.angle % 360;
            var t = Math.round(e.angle);
            return new o({type: e.type, rotateAngle: t})
        }, i.genBlurOp = function (e) {
            r.verifyOptions(e, "radius sigma"), r.verifyParamType("radius", e.radius, "number"), r.verifyParamMin("radius", e.radius, 1), r.verifyParamMax("radius", e.radius, 50), r.verifyParamType("sigma", e.sigma, "number"), r.verifyParamMin("sigma", e.sigma, 0);
            var t = Math.round(e.radius), n = Math.round(e.sigma);
            return new o({type: e.type, blurRadius: t, blurSigma: n})
        }, i.genCropOp = function (e) {
            r.verifyOptions(e, "x y width height"), r.verifyParamType("x", e.x, "number"), r.verifyParamMin("x", e.x, 0), r.verifyParamType("y", e.y, "number"), r.verifyParamMin("y", e.y, 0), r.verifyParamType("width", e.width, "number"), r.verifyParamMin("width", e.width, 0), r.verifyParamType("height", e.height, "number"), r.verifyParamMin("height", e.height, 0);
            var t = Math.round(e.x), n = Math.round(e.y), i = Math.round(e.width), s = Math.round(e.height);
            return new o({type: e.type, cropX: t, cropY: n, cropWidth: i, cropHeight: s})
        }, i.genThumbnailOp = function () {
            var e = {cover: "z", contain: "x", crop: "y"};
            return function (t) {
                r.verifyOptions(t, "mode"), r.verifyParamValid("mode", t.mode, Object.keys(e)), "contain" === t.mode ? r.verifyParamAtLeastPresentOne(t, "width height") : r.verifyOptions(t, "width height"), r.undef(t.width) && (t.width = 0), r.undef(t.height) && (t.height = 0), r.verifyParamType("width", t.width, "number"), r.verifyParamMin("width", t.width, 0), r.verifyParamType("height", t.height, "number"), r.verifyParamMin("height", t.height, 0);
                var n = Math.round(t.width), i = Math.round(t.height),
                    s = new o({type: t.type, thumbnailMode: e[t.mode], thumbnailWidth: n, thumbnailHeight: i});
                if ("crop" === t.mode && r.notundef(t.axis)) {
                    r.undef(t.axis.x) && (t.axis.x = 5), r.undef(t.axis.y) && (t.axis.y = 5), r.verifyParamMin("axis.x", t.axis.x, 0), r.verifyParamMax("axis.x", t.axis.x, 10), r.verifyParamMin("axis.y", t.axis.y, 0), r.verifyParamMax("axis.y", t.axis.y, 10);
                    var a = Math.round(t.axis.x), c = Math.round(t.axis.y);
                    s.thumbnailAxisX = a, s.thumbnailAxisY = c
                }
                return r.notundef(t.enlarge) && (r.verifyParamType("enlarge", t.enlarge, "boolean"), t.enlarge && (s.thumbnailEnlarge = 1)), s
            }
        }()
    }, function (e, t, n) {
          

        function r(e) {
            e = "" + e;
            var t = e.indexOf("?") === -1 ? "?imageView&" : "&";
            return t
        }

        function i(e) {
            e = e || "";
            var t = e.indexOf("https") >= 0 ? "https://" : "http://", n = e.replace(t, "");
            n.indexOf("?") >= 0 && (n = n.substring(0, n.indexOf("?")));
            var r = n.split("/");
            n = r[0];
            var i = "";
            if (r.length > 0 && (i = r.slice(1).join("/")), e.indexOf("?") === -1) return {
                protocol: t,
                hostname: n,
                path: i,
                query: {}
            };
            var o = e.substr(e.indexOf("?") + 1), s = o.split("&"), a = {};
            return s.forEach(function (e) {
                if (e.indexOf("=") > 0) {
                    var t = e.split("=");
                    a[t[0]] = decodeURIComponent(t[1])
                } else a[e] = ""
            }), {protocol: t, hostname: n, path: i, query: a}
        }

        function o(e) {
            var t = e.protocol, n = e.hostname, r = e.path, i = e.query;
            t = t || "http://", n = n || "", r && (n = n + "/" + r), i = i || {};
            var o = [];
            for (var s in i) "imageView" !== s && o.push(s + "=" + encodeURIComponent(i[s]));
            return o.length > 0 ? "" + t + n + "?imageView&" + o.join("&") : "" + t + n
        }

        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, a = n(1), c = n(7).fn;
        c.viewImageSync = function (e) {
            var t = this.options;
            a.verifyOptions(e, "url");
            var n = e.url, r = i(n), c = r.protocol, u = r.hostname, l = r.path, f = r.query;
            if ("boolean" == typeof e.strip && (f.stripmeta = e.strip ? 1 : 0), "number" == typeof e.quality && (a.verifyParamMin("quality", e.quality, 0), a.verifyParamMax("quality", e.quality, 100), f.quality = Math.round(e.quality)), "boolean" == typeof e.interlace && (f.interlace = e.interlace ? 1 : 0), "number" == typeof e.rotate && (f.rotate = Math.round(e.rotate)), "object" === s(e.thumbnail)) {
                var d = e.thumbnail.mode || "crop", m = e.thumbnail.width, p = e.thumbnail.height;
                if (m >= 0 && p >= 0 && m < 4096 && p < 4096 && (m > 0 || p > 0)) {
                    switch (d) {
                        case"crop":
                            d = "y";
                            break;
                        case"contain":
                            d = "x";
                            break;
                        case"cover":
                            d = "z";
                            break;
                        default:
                            d = "x"
                    }
                    f.thumbnail = "" + m + d + p
                }
            }
            if (t.downloadUrl) {
                var y = i(t.downloadUrl);
                return o({protocol: y.protocol, hostname: y.hostname, path: l, query: a.merge(y.query, f)})
            }
            return o({protocol: c, hostname: u, path: l, query: f})
        }, c.viewImageStripMeta = function (e) {
            a.verifyOptions(e, "url strip"), a.verifyParamType("strip", e.strip, "boolean");
            var t = "stripmeta=" + (e.strip ? 1 : 0), n = r(e.url);
            return e.url + n + t
        }, c.viewImageQuality = function (e) {
            a.verifyOptions(e, "url quality"), a.verifyParamType("quality", e.quality, "number"), a.verifyParamMin("quality", e.quality, 0), a.verifyParamMax("quality", e.quality, 100);
            var t = Math.round(e.quality), n = "quality=" + t, i = r(e.url);
            return e.url + i + n
        }, c.viewImageInterlace = function (e) {
            a.verifyOptions(e, "url");
            var t = "interlace=1", n = r(e.url);
            return e.url + n + t
        }, c.viewImageRotate = function (e) {
            for (a.verifyOptions(e, "url angle"), a.verifyParamType("angle", e.angle, "number"); e.angle < 0;) e.angle = e.angle + 360;
            e.angle = e.angle % 360;
            var t = Math.round(e.angle), n = "rotate=" + t, i = r(e.url);
            return e.url + i + n
        }, c.viewImageBlur = function (e) {
            a.verifyOptions(e, "url radius sigma"), a.verifyParamType("radius", e.radius, "number"), a.verifyParamMin("radius", e.radius, 1), a.verifyParamMax("radius", e.radius, 50), a.verifyParamType("sigma", e.sigma, "number"), a.verifyParamMin("sigma", e.sigma, 0);
            var t = Math.round(e.radius), n = Math.round(e.sigma), i = "blur=" + t + "x" + n, o = r(e.url);
            return e.url + o + i
        }, c.viewImageCrop = function (e) {
            a.verifyOptions(e, "url x y width height"), a.verifyParamType("x", e.x, "number"), a.verifyParamMin("x", e.x, 0), a.verifyParamType("y", e.y, "number"), a.verifyParamMin("y", e.y, 0), a.verifyParamType("width", e.width, "number"), a.verifyParamMin("width", e.width, 0), a.verifyParamType("height", e.height, "number"), a.verifyParamMin("height", e.height, 0);
            var t = Math.round(e.x), n = Math.round(e.y), i = Math.round(e.width), o = Math.round(e.height),
                s = "crop=" + t + "_" + n + "_" + i + "_" + o, c = r(e.url);
            return e.url + c + s
        }, c.viewImageThumbnail = function () {
            var e = {cover: "z", contain: "x", crop: "y"};
            return function (t) {
                a.verifyOptions(t, "url mode"), a.verifyParamValid("mode", t.mode, Object.keys(e)), "contain" === t.mode ? a.verifyParamAtLeastPresentOne(t, "width height") : a.verifyOptions(t, "width height"), a.undef(t.width) && (t.width = 0), a.undef(t.height) && (t.height = 0), a.verifyParamType("width", t.width, "number"), a.verifyParamMin("width", t.width, 0), a.verifyParamType("height", t.height, "number"), a.verifyParamMin("height", t.height, 0);
                var n = Math.round(t.width), i = Math.round(t.height), o = "thumbnail=" + n + e[t.mode] + i;
                if ("crop" === t.mode && a.notundef(t.axis)) {
                    a.undef(t.axis.x) && (t.axis.x = 5), a.undef(t.axis.y) && (t.axis.y = 5), a.verifyParamMin("axis.x", t.axis.x, 0), a.verifyParamMax("axis.x", t.axis.x, 10), a.verifyParamMin("axis.y", t.axis.y, 0), a.verifyParamMax("axis.y", t.axis.y, 10);
                    var s = Math.round(t.axis.x), c = Math.round(t.axis.y);
                    o = o + "&axis=" + s + "_" + c
                }
                a.notundef(t.enlarge) && (a.verifyParamType("enlarge", t.enlarge, "boolean"), t.enlarge && (o += "&enlarge=1"));
                var u = r(t.url);
                return t.url + u + o
            }
        }()
    }, function (e, t, n) {
          
        n(70), n(69), n(73), n(2).polyfill()
    }, , function (e, t, n) {
          

        function r(e) {
            i.verifyOptions(e, "account"), i.verifyParamAtLeastPresentOne(e, "alias custom"), this.account = e.account, o(e.alias) && (this.alias = e.alias), o(e.custom) && (this.custom = e.custom)
        }

        var i = n(1), o = i.notundef, s = {addFriend: 1, applyFriend: 2, passFriendApply: 3, rejectFriendApply: 4},
            a = {1: "addFriend", 2: "applyFriend", 3: "passFriendApply", 4: "rejectFriendApply"};
        r.reverse = function (e) {
            var t = i.filterObj(e, "account alias custom createTime updateTime");
            return o(e.flag) && (t.valid = "1" === e.flag), o(t.createTime) && (t.createTime = +t.createTime), o(t.updateTime) && (t.updateTime = +t.updateTime), t
        }, r.validTypes = function () {
            return Object.keys(s)
        }, r.getByteFromType = function (e) {
            return s[e]
        }, r.getTypeFromByte = function (e) {
            return a[e]
        }, r.assembleFriend = function (e) {
            var t = +new Date;
            return {account: e, alias: "", createTime: t, custom: "", updateTime: t, valid: !0}
        }, e.exports = r
    }, function (e, t, n) {
          
        var r = n(11).fn, i = n(4), o = n(13), s = n(21), a = n(9), c = n(6), u = n(1), l = u.notundef;
        r.login = function () {
            var e = this;
            e.sendCmd("login", e.assembleLogin(), e.onLogin.bind(e)), e.autoconnect = !1
        }, r.genSessionKey = function () {
            var e = {};
            return function () {
                var t = this, n = t.name, r = e[n] = e[n] || u.guid();
                return r
            }
        }(), r.assembleIMLogin = function () {
            var e = this, t = e.options, n = t.account, r = e.autoconnect ? 0 : 1;
            return {
                appLogin: r,
                appKey: t.appKey,
                account: n,
                token: t.token,
                sdkVersion: c.info.sdkVersion,
                protocolVersion: c.info.protocolVersion,
                os: o.os.toString(),
                browser: o.name + " " + o.version,
                session: e.genSessionKey(),
                deviceId: a.deviceId
            }
        }, r.onLogin = function (e, t) {
            var n = this;
            n.loginResult = t, e ? n.onAuthError(e) : (n.startHeartbeat(), n.afterLogin(t))
        }, r.afterLogin = u.emptyFunc, r.notifyLogin = function () {
            var e = this, t = e.loginResult;
            e.logger.info("onConnect", t), e.options.onconnect(t)
        }, r.logout = function () {
            var e = this;
            if (e.isConnected()) {
                var t = new i("主动退出", "logout");
                e.onAuthError(t)
            }
        }, r.onKicked = function (e) {
            var t = this, n = e.content, r = n.from, o = n.reason, a = n.custom,
                c = {reason: t.kickedReasons[o] || "unknown", message: t.kickedMessages[o] || "未知原因"};
            if (l(r) && (c.from = s.reverseType(r)), l(a) && (c.custom = a), t.shouldNotifyKicked(c)) {
                var f = new i("被踢了", "kicked");
                u.merge(f, c), t.onAuthError(f)
            } else t.logger.warn("silentlyKick"), t.shouldReconnect = !1, t.hasNotifyDisconnected = !0, t.disconnectSocket()
        }, r.shouldNotifyKicked = function (e) {
            return !0
        }, r.onAuthError = function (e) {
            var t = this;
            t.shouldReconnect = !1, t.markAllCallbackInvalid(e || i.newConnectionError()), t.notifyDisconnect(e)
        }
    }, function (e, t, n) {
        (function (e) {
              
            var t = n(11).fn, r = n(4), i = n(68), o = n(20), s = n(6), a = n(1);
            t.initConnect = function () {
                var e = this;
                e.socket = null, e.retryCount = 0, e.connecting = !1, e.shouldReconnect = !0, e.hasNotifyDisconnected = !1
            }, t.resetConnect = function () {
                var e = this, t = e.options;
                a.notundef(t.needReconnect) ? (a.verifyParamType("needReconnect", t.needReconnect, "boolean"), e.needReconnect = t.needReconnect) : e.needReconnect = !0, a.notundef(t.reconnectionAttempts) && a.verifyParamType("reconnectionAttempts", t.reconnectionAttempts, "number"), e.reconnectionAttempts = t.reconnectionAttempts || 1 / 0, e.backoff = new i({
                    min: s.reconnectionDelay,
                    max: s.reconnectionDelayMax,
                    jitter: s.reconnectionJitter
                })
            }, t.connect = function () {
                var e = this;
                if (!e.isConnected() && !e.connecting) if (e.connecting = !0, e.hasNotifyDisconnected = !1, e.socket) e.logger.info("connecting"), e.socket.socket.connect(); else {
                    var t = e.getNextSocketUrl();
                    t ? e.connectToUrl(t) : e.refreshSocketUrl()
                }
            }, t.getNextSocketUrl = function () {
                return this.socketUrls.shift()
            }, t.isConnected = function () {
                var e = this;
                return !!e.socket && !!e.socket.socket && e.socket.socket.connected
            }, t.connectToUrl = function (t) {
                var n = this;
                if (n.logger.log("try connect to ", t), e.env.WEIXIN_APP) {
                    if (!window.location) {
                        var r = t.split(":");
                        window.location = {protocol: r[0], hostname: r[1].slice(2), port: r[2]}
                    }
                    this.options.transports = ["websocket"]
                }
                var i = this.options.transports || ["websocket", "xhr-polling"];
                n.socket = o.connect(t, {
                    transports: i,
                    reconnect: !1,
                    "force new connection": !0,
                    "connect timeout": s.connectTimeout
                }), n.logger.info("socket url: " + t + ", transports: " + JSON.stringify(i)), n.socket.on("connect", n.onConnect.bind(n)), n.socket.on("handshake_failed", n.onHandshakeFailed.bind(n)), n.socket.on("connect_failed", n.onConnectFailed.bind(n)), n.socket.on("error", n.onError.bind(n)), n.socket.on("message", n.onMessage.bind(n)), n.socket.on("disconnect", function () {
                    n.logger.info("socket disconnect"), n.onDisconnect(!0)
                })
            }, t.disconnect = function () {
                var e = this;
                e.isConnected() && (e.logger.info("disconnecting"), e.logout())
            }, t.onConnect = function () {
                var e = this;
                e.backoff && e.backoff.reset(), e.retryCount = 0, e.connecting = !1, e.shouldReconnect = !0, e.hasNotifyDisconnected = !1, e.login()
            }, t.onHandshakeFailed = function () {
                this.onDisconnect()
            }, t.onConnectFailed = function () {
                this.onDisconnect()
            }, t.onError = function () {
                var e = arguments[0];
                e && this.notifyError(new r(e))
            }, t.onDisconnect = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = this;
                t.connected = e, t.connecting = !1, t.markAllCallbackInvalid(r.newNetworkError()), t.stopHeartbeat(), t.reconnect()
            }, t.willReconnect = function () {
                var e = this;
                return e.shouldReconnect && e.needReconnect && e.retryCount < e.reconnectionAttempts
            }, t.reconnect = function () {
                var e = this;
                if (e.willReconnect()) {
                    e.socket = null, e.connected && (e.autoconnect = !0), e.retryCount++;
                    var t = e.backoff.duration();
                    e.logger.log("will retry after", t + "ms", ", retryCount", e.retryCount), e.options.onwillreconnect({
                        retryCount: e.retryCount,
                        duration: t
                    }), setTimeout(function () {
                        e.connect()
                    }, t)
                } else e.notifyDisconnect()
            }, t.notifyConnectError = function (e) {
                var t = this, n = r.newConnectError(e);
                t.logger.error(n), t.options.onerror(n)
            }, t.notifyDisconnect = function (e) {
                var t = this;
                t.hasNotifyDisconnected || (t.hasNotifyDisconnected = !0, t.disconnectSocket(), e = e || new r, e.retryCount = t.retryCount, e.willReconnect = t.willReconnect(), t.backoff && t.backoff.reset(), t.retryCount = 0, t.connecting = !1, t.logger.info("onDisconnect", e), t.options.ondisconnect(e))
            }, t.disconnectSocket = function () {
                var e = this;
                if (e.isConnected()) try {
                    e.socket.disconnect(), e.socket = null
                } catch (t) {
                }
            }
        }).call(t, n(10))
    }, function (e, t, n) {
          
        var r = n(11).fn, i = n(6);
        r.processLink = function (e) {
            switch (e.cmd) {
                case"heartbeat":
            }
        }, r.startHeartbeat = function () {
            var e = this;
            e.stopHeartbeat(), e.heartbeatTimer = setTimeout(function () {
                e.sendCmd("heartbeat", null, e.onHeartbeat.bind(e))
            }, i.heartbeatInterval)
        }, r.stopHeartbeat = function () {
            var e = this;
            e.heartbeatTimer && (clearTimeout(e.heartbeatTimer), e.heartbeatTimer = null)
        }, r.onHeartbeat = function (e, t) {
            var n = this;
            e || n.startHeartbeat(), n.onMiscError(e, t, "heartbeat")
        }, r.heartbeat = function () {
        }
    }, function (e, t, n) {
          
        var r = n(11).fn, i = n(32);
        r.processMisc = function (e) {
            switch (e.cmd) {
                case"getSimpleNosToken":
                    e.error || (e.obj = e.content.nosTokens[0]);
                    break;
                case"getNosToken":
                    e.error || (e.obj = e.content.nosToken);
                    break;
                case"notifyUploadLog":
                    e.error || this.emitAPI({type: "notifyUploadLog"});
                    break;
                case"audioToText":
                    e.error || (e.obj.text = e.content.text);
                    break;
                case"processImage":
                    e.obj.imageOps = i.reverseImageOps(e.obj.imageOps), e.error || (e.obj = {url: e.content.url})
            }
        }
    }, function (e, t, n) {
          
        var r = n(1), i = n(33), o = r.merge({}, i.idMap, {
            chatroom: {
                id: 13,
                login: 2,
                kicked: 3,
                logout: 4,
                sendMsg: 6,
                msg: 7,
                getChatroomMembers: 8,
                getHistoryMsgs: 9,
                markChatroomMember: 11,
                closeChatroom: 12,
                getChatroom: 13,
                updateChatroom: 14,
                updateMyChatroomMemberInfo: 15,
                getChatroomMembersInfo: 16,
                kickChatroomMember: 17,
                updateChatroomMemberTempMute: 19,
                queueOffer: 20,
                queuePoll: 21,
                queueList: 22,
                queueDrop: 24,
                queueInit: 25
            }
        }), s = r.merge({}, i.cmdConfig, {
            login: {
                sid: o.chatroom.id,
                cid: o.chatroom.login,
                params: [{type: "byte", name: "type"}, {type: "Property", name: "login"}, {
                    type: "Property",
                    name: "imLogin"
                }]
            },
            logout: {sid: o.chatroom.id, cid: o.chatroom.logout},
            sendMsg: {sid: o.chatroom.id, cid: o.chatroom.sendMsg, params: [{type: "Property", name: "msg"}]},
            getChatroomMembers: {
                sid: o.chatroom.id,
                cid: o.chatroom.getChatroomMembers,
                params: [{type: "byte", name: "type"}, {type: "long", name: "time"}, {type: "int", name: "limit"}]
            },
            getHistoryMsgs: {
                sid: o.chatroom.id,
                cid: o.chatroom.getHistoryMsgs,
                params: [{type: "long", name: "timetag"}, {type: "int", name: "limit"}, {type: "bool", name: "reverse"}]
            },
            markChatroomMember: {
                sid: o.chatroom.id,
                cid: o.chatroom.markChatroomMember,
                params: [{type: "string", name: "account"}, {type: "int", name: "type"}, {
                    type: "bool",
                    name: "isAdd"
                }, {type: "int", name: "level"}, {type: "string", name: "custom"}]
            },
            closeChatroom: {
                sid: o.chatroom.id,
                cid: o.chatroom.closeChatroom,
                params: [{type: "string", name: "custom"}]
            },
            getChatroom: {sid: o.chatroom.id, cid: o.chatroom.getChatroom},
            updateChatroom: {
                sid: o.chatroom.id,
                cid: o.chatroom.updateChatroom,
                params: [{type: "Property", name: "chatroom"}, {type: "boolean", name: "needNotify"}, {
                    type: "String",
                    name: "custom"
                }]
            },
            updateMyChatroomMemberInfo: {
                sid: o.chatroom.id,
                cid: o.chatroom.updateMyChatroomMemberInfo,
                params: [{type: "Property", name: "chatroomMember"}, {
                    type: "boolean",
                    name: "needNotify"
                }, {type: "String", name: "custom"}, {type: "boolean", name: "needSave"}]
            },
            getChatroomMembersInfo: {
                sid: o.chatroom.id,
                cid: o.chatroom.getChatroomMembersInfo,
                params: [{type: "StrArray", name: "accounts"}]
            },
            kickChatroomMember: {
                sid: o.chatroom.id,
                cid: o.chatroom.kickChatroomMember,
                params: [{type: "string", name: "account"}, {type: "string", name: "custom"}]
            },
            updateChatroomMemberTempMute: {
                sid: o.chatroom.id,
                cid: o.chatroom.updateChatroomMemberTempMute,
                params: [{type: "String", name: "account"}, {type: "long", name: "duration"}, {
                    type: "boolean",
                    name: "needNotify"
                }, {type: "String", name: "custom"}]
            },
            queueOffer: {
                sid: o.chatroom.id,
                cid: o.chatroom.queueOffer,
                params: [{type: "string", name: "elementKey"}, {type: "string", name: "elementValue"}]
            },
            queuePoll: {sid: o.chatroom.id, cid: o.chatroom.queuePoll, params: [{type: "string", name: "elementKey"}]},
            queueList: {sid: o.chatroom.id, cid: o.chatroom.queueList},
            queueDrop: {sid: o.chatroom.id, cid: o.chatroom.queueDrop},
            queueInit: {sid: o.chatroom.id, cid: o.chatroom.queueInit, params: [{type: "int", name: "limit"}]}
        }), a = "chatroom", c = r.merge({}, i.packetConfig, {
            "4_10": {service: "notify"},
            "4_11": {service: "notify"},
            "13_2": {
                service: a,
                cmd: "login",
                response: [{type: "Property", name: "chatroom"}, {type: "Property", name: "chatroomMember"}]
            },
            "13_3": {
                service: a,
                cmd: "kicked",
                response: [{type: "Number", name: "reason"}, {type: "String", name: "custom"}]
            },
            "13_4": {service: a, cmd: "logout"},
            "13_6": {service: a, cmd: "sendMsg", response: [{type: "Property", name: "msg"}]},
            "13_7": {service: a, cmd: "msg", response: [{type: "Property", name: "msg"}]},
            "13_8": {
                service: a,
                cmd: "getChatroomMembers",
                response: [{type: "PropertyArray", name: "members", entity: "chatroomMember"}]
            },
            "13_9": {
                service: a,
                cmd: "getHistoryMsgs",
                response: [{type: "PropertyArray", name: "msgs", entity: "msg"}]
            },
            "13_11": {service: a, cmd: "markChatroomMember", response: [{type: "Property", name: "chatroomMember"}]},
            "13_12": {service: a, cmd: "closeChatroom"},
            "13_13": {service: a, cmd: "getChatroom", response: [{type: "Property", name: "chatroom"}]},
            "13_14": {service: a, cmd: "updateChatroom"},
            "13_15": {service: a, cmd: "updateMyChatroomMemberInfo"},
            "13_16": {
                service: a,
                cmd: "getChatroomMembersInfo",
                response: [{type: "PropertyArray", name: "members", entity: "chatroomMember"}]
            },
            "13_17": {service: a, cmd: "kickChatroomMember"},
            "13_19": {service: a, cmd: "updateChatroomMemberTempMute"},
            "13_20": {service: a, cmd: "queueOffer"},
            "13_21": {
                service: a,
                cmd: "queuePoll",
                response: [{type: "String", name: "elementKey"}, {type: "String", name: "elementValue"}]
            },
            "13_22": {service: a, cmd: "queueList", response: [{type: "KVArray", name: "queueList"}]},
            "13_24": {service: a, cmd: "queueDrop"},
            "13_25": {service: a, cmd: "queueInit"}
        });
        e.exports = {idMap: o, cmdConfig: s, packetConfig: c}
    }, function (e, t) {
          
        e.exports = {
            imLogin: {
                os: 4,
                sdkVersion: 6,
                appLogin: 8,
                protocolVersion: 9,
                deviceId: 13,
                appKey: 18,
                account: 19,
                browser: 24,
                session: 26,
                token: 1e3
            },
            nosToken: {objectName: 1, token: 2, bucket: 3, expireTime: 4},
            audioToText: {url: 2},
            imageOp: {
                type: 0,
                stripmeta: 1,
                typeType: 2,
                blurRadius: 3,
                blurSigma: 4,
                qualityQuality: 5,
                cropX: 6,
                cropY: 7,
                cropWidth: 8,
                cropHeight: 9,
                rotateAngle: 10,
                pixelPixel: 11,
                thumbnailMode: 12,
                thumbnailWidth: 13,
                thumbnailHeight: 14,
                thumbnailAxisX: 15,
                thumbnailAxisY: 16,
                thumbnailCenterX: 17,
                thumbnailCenterY: 18,
                thumbnailEnlarge: 19,
                thumbnailToStatic: 20,
                watermarkType: 21,
                watermarkGravity: 22,
                watermarkDissolve: 23,
                watermarkDx: 24,
                watermarkDy: 25,
                watermarkImage: 26,
                watermarkText: 27,
                watermarkFont: 28,
                watermarkFontSize: 29,
                watermarkFontColor: 30,
                interlace: 31
            },
            login: {
                appKey: 1,
                account: 2,
                deviceId: 3,
                chatroomId: 5,
                chatroomNick: 20,
                chatroomAvatar: 21,
                chatroomCustom: 22,
                chatroomEnterCustom: 23,
                session: 26
            },
            chatroom: {
                id: 1,
                name: 3,
                announcement: 4,
                broadcastUrl: 5,
                custom: 12,
                createTime: 14,
                updateTime: 15,
                creator: 100,
                onlineMemberNum: 101,
                mute: 102
            },
            msg: {
                idClient: 1,
                type: 2,
                attach: 3,
                custom: 4,
                resend: 5,
                userUpdateTime: 6,
                fromNick: 7,
                fromAvatar: 8,
                fromCustom: 9,
                yidunEnable: 10,
                antiSpamContent: 11,
                skipHistory: 12,
                time: 20,
                from: 21,
                chatroomId: 22,
                fromClientType: 23
            },
            chatroomMember: {
                chatroomId: 1,
                account: 2,
                type: 3,
                level: 4,
                nick: 5,
                avatar: 6,
                custom: 7,
                online: 8,
                guest: 9,
                enterTime: 10,
                blacked: 12,
                gaged: 13,
                valid: 14,
                updateTime: 15,
                tempMuted: 16,
                tempMuteDuration: 17
            }
        }
    }, function (e, t) {
          
        e.exports = {
            nosToken: {objectName: 1, token: 2, bucket: 3, expireTime: 4},
            audioToText: {url: 2},
            imageOp: {
                type: 0,
                stripmeta: 1,
                typeType: 2,
                blurRadius: 3,
                blurSigma: 4,
                qualityQuality: 5,
                cropX: 6,
                cropY: 7,
                cropWidth: 8,
                cropHeight: 9,
                rotateAngle: 10,
                pixelPixel: 11,
                thumbnailMode: 12,
                thumbnailWidth: 13,
                thumbnailHeight: 14,
                thumbnailAxisX: 15,
                thumbnailAxisY: 16,
                thumbnailCenterX: 17,
                thumbnailCenterY: 18,
                thumbnailEnlarge: 19,
                thumbnailToStatic: 20,
                watermarkType: 21,
                watermarkGravity: 22,
                watermarkDissolve: 23,
                watermarkDx: 24,
                watermarkDy: 25,
                watermarkImage: 26,
                watermarkText: 27,
                watermarkFont: 28,
                watermarkFontSize: 29,
                watermarkFontColor: 30,
                interlace: 31
            },
            login: {
                os: 4,
                sdkVersion: 6,
                appLogin: 8,
                protocolVersion: 9,
                deviceId: 13,
                appKey: 18,
                account: 19,
                browser: 24,
                session: 26,
                token: 1e3
            },
            loginRes: {lastLoginDeviceId: 17, connectionId: 102, ip: 103, port: 104, country: 106},
            loginPort: {type: 3, os: 4, mac: 5, deviceId: 13, account: 19, connectionId: 102, ip: 103, time: 109},
            sync: {
                myInfo: 1,
                offlineMsgs: 2,
                teams: 3,
                netcallMsgs: 6,
                roamingMsgs: 7,
                relations: 9,
                friends: 11,
                sessions: 12,
                friendUsers: 13,
                msgReceipts: 14,
                myTeamMembers: 15,
                donnop: 16,
                deleteMsg: 17,
                sessionAck: 18,
                robots: 19,
                filterMsgs: 100
            },
            donnop: {open: 1},
            team: {
                teamId: 1,
                name: 3,
                type: 4,
                owner: 5,
                level: 6,
                selfCustom: 7,
                valid: 8,
                memberNum: 9,
                memberUpdateTime: 10,
                createTime: 11,
                updateTime: 12,
                validToCurrentUser: 13,
                intro: 14,
                announcement: 15,
                joinMode: 16,
                bits: 17,
                custom: 18,
                serverCustom: 19,
                avatar: 20,
                beInviteMode: 21,
                inviteMode: 22,
                updateTeamMode: 23,
                updateCustomMode: 24,
                mute: 100
            },
            teamMember: {
                teamId: 1,
                account: 3,
                type: 4,
                nickInTeam: 5,
                bits: 7,
                active: 8,
                valid: 9,
                joinTime: 10,
                updateTime: 11,
                custom: 12,
                mute: 13
            },
            msg: {
                scene: 0,
                to: 1,
                from: 2,
                fromClientType: 4,
                fromDeviceId: 5,
                fromNick: 6,
                time: 7,
                type: 8,
                body: 9,
                attach: 10,
                idClient: 11,
                idServer: 12,
                resend: 13,
                userUpdateTime: 14,
                custom: 15,
                pushPayload: 16,
                pushContent: 17,
                apnsAccounts: 18,
                apnsContent: 19,
                apnsForcePush: 20,
                yidunEnable: 21,
                antiSpamContent: 22,
                isHistoryable: 100,
                isRoamingable: 101,
                isSyncable: 102,
                isMuted: 104,
                cc: 105,
                isPushable: 107,
                isOfflinable: 108,
                isUnreadable: 109,
                needPushNick: 110
            },
            msgReceipt: {to: 1, from: 2, time: 7, idClient: 11},
            sysMsg: {
                time: 0,
                type: 1,
                to: 2,
                from: 3,
                ps: 4,
                attach: 5,
                idServer: 6,
                sendToOnlineUsersOnly: 7,
                apnsText: 8,
                pushPayload: 9,
                deletedIdClient: 10,
                deletedIdServer: 11,
                yidunEnable: 12,
                antiSpamContent: 13,
                deletedMsgTime: 14,
                deletedMsgFromNick: 15,
                cc: 105,
                isPushable: 107,
                isUnreadable: 109,
                needPushNick: 110
            },
            friend: {
                account: 4,
                flag: 5,
                beflag: 6,
                source: 7,
                alias: 8,
                bits: 9,
                custom: 10,
                createTime: 11,
                updateTime: 12
            },
            user: {
                account: 1,
                nick: 3,
                avatar: 4,
                sign: 5,
                gender: 6,
                email: 7,
                birth: 8,
                tel: 9,
                custom: 10,
                createTime: 12,
                updateTime: 13
            },
            robot: {
                account: 4,
                nick: 5,
                avatar: 6,
                intro: 7,
                config: 8,
                valid: 9,
                createTime: 10,
                updateTime: 11,
                custid: 12,
                botid: 13,
                bindTime: 14
            },
            specialRelation: {account: 0, isMuted: 1, isBlacked: 2, createTime: 3, updateTime: 4},
            msgType: {
                text: 0,
                picture: 1,
                audio: 2,
                video: 3,
                location: 4,
                notification: 5,
                file: 6,
                netcall_audio: 7,
                netcall_vedio: 8,
                datatunnel_new: 9,
                tips: 10,
                robot: 11,
                custom: 100
            },
            msgEvent: {
                type: 1,
                value: 2,
                idClient: 3,
                custom: 4,
                validTime: 5,
                broadcastType: 6,
                sync: 7,
                validTimeType: 8,
                durable: 9,
                time: 10,
                idServer: 11,
                clientType: 12,
                serverConfig: 13,
                serverCustom: 14,
                appid: 101,
                account: 103,
                enableMultiClient: 104,
                consid: 106
            },
            msgEventSubscribe: {type: 1, subscribeTime: 2, sync: 3, to: 102, from: 104, time: 105}
        }
    }, function (e, t) {
          
        e.exports = {
            imLogin: {
                4: "os",
                6: "sdkVersion",
                8: "appLogin",
                9: "protocolVersion",
                13: "deviceId",
                18: "appKey",
                19: "account",
                24: "browser",
                26: "session",
                1000: "token"
            },
            nosToken: {1: "objectName", 2: "token", 3: "bucket", 4: "expireTime"},
            audioToText: {2: "url"},
            imageOp: {
                0: "type",
                1: "stripmeta",
                2: "typeType",
                3: "blurRadius",
                4: "blurSigma",
                5: "qualityQuality",
                6: "cropX",
                7: "cropY",
                8: "cropWidth",
                9: "cropHeight",
                10: "rotateAngle",
                11: "pixelPixel",
                12: "thumbnailMode",
                13: "thumbnailWidth",
                14: "thumbnailHeight",
                15: "thumbnailAxisX",
                16: "thumbnailAxisY",
                17: "thumbnailCenterX",
                18: "thumbnailCenterY",
                19: "thumbnailEnlarge",
                20: "thumbnailToStatic",
                21: "watermarkType",
                22: "watermarkGravity",
                23: "watermarkDissolve",
                24: "watermarkDx",
                25: "watermarkDy",
                26: "watermarkImage",
                27: "watermarkText",
                28: "watermarkFont",
                29: "watermarkFontSize",
                30: "watermarkFontColor",
                31: "interlace"
            },
            login: {
                1: "appKey",
                2: "account",
                3: "deviceId",
                5: "chatroomId",
                20: "chatroomNick",
                21: "chatroomAvatar",
                22: "chatroomCustom",
                23: "chatroomEnterCustom",
                26: "session"
            },
            chatroom: {
                1: "id",
                3: "name",
                4: "announcement",
                5: "broadcastUrl",
                12: "custom",
                14: "createTime",
                15: "updateTime",
                100: "creator",
                101: "onlineMemberNum",
                102: "mute"
            },
            msg: {
                1: "idClient",
                2: "type",
                3: "attach",
                4: "custom",
                5: "resend",
                6: "userUpdateTime",
                7: "fromNick",
                8: "fromAvatar",
                9: "fromCustom",
                10: "yidunEnable",
                11: "antiSpamContent",
                12: "skipHistory",
                20: "time",
                21: "from",
                22: "chatroomId",
                23: "fromClientType"
            },
            chatroomMember: {
                1: "chatroomId",
                2: "account",
                3: "type",
                4: "level",
                5: "nick",
                6: "avatar",
                7: "custom",
                8: "online",
                9: "guest",
                10: "enterTime",
                12: "blacked",
                13: "gaged",
                14: "valid",
                15: "updateTime",
                16: "tempMuted",
                17: "tempMuteDuration"
            }
        }
    }, function (e, t) {
          
        e.exports = {
            nosToken: {1: "objectName", 2: "token", 3: "bucket", 4: "expireTime"},
            audioToText: {2: "url"},
            imageOp: {
                0: "type",
                1: "stripmeta",
                2: "typeType",
                3: "blurRadius",
                4: "blurSigma",
                5: "qualityQuality",
                6: "cropX",
                7: "cropY",
                8: "cropWidth",
                9: "cropHeight",
                10: "rotateAngle",
                11: "pixelPixel",
                12: "thumbnailMode",
                13: "thumbnailWidth",
                14: "thumbnailHeight",
                15: "thumbnailAxisX",
                16: "thumbnailAxisY",
                17: "thumbnailCenterX",
                18: "thumbnailCenterY",
                19: "thumbnailEnlarge",
                20: "thumbnailToStatic",
                21: "watermarkType",
                22: "watermarkGravity",
                23: "watermarkDissolve",
                24: "watermarkDx",
                25: "watermarkDy",
                26: "watermarkImage",
                27: "watermarkText",
                28: "watermarkFont",
                29: "watermarkFontSize",
                30: "watermarkFontColor",
                31: "interlace"
            },
            login: {
                4: "os",
                6: "sdkVersion",
                8: "appLogin",
                9: "protocolVersion",
                13: "deviceId",
                18: "appKey",
                19: "account",
                24: "browser",
                26: "session",
                1000: "token"
            },
            loginRes: {17: "lastLoginDeviceId", 102: "connectionId", 103: "ip", 104: "port", 106: "country"},
            loginPort: {
                3: "type",
                4: "os",
                5: "mac",
                13: "deviceId",
                19: "account",
                102: "connectionId",
                103: "ip",
                109: "time"
            },
            sync: {
                1: "myInfo",
                2: "offlineMsgs",
                3: "teams",
                6: "netcallMsgs",
                7: "roamingMsgs",
                9: "relations",
                11: "friends",
                12: "sessions",
                13: "friendUsers",
                14: "msgReceipts",
                15: "myTeamMembers",
                16: "donnop",
                17: "deleteMsg",
                18: "sessionAck",
                19: "robots",
                100: "filterMsgs"
            },
            donnop: {1: "open"},
            team: {
                1: "teamId",
                3: "name",
                4: "type",
                5: "owner",
                6: "level",
                7: "selfCustom",
                8: "valid",
                9: "memberNum",
                10: "memberUpdateTime",
                11: "createTime",
                12: "updateTime",
                13: "validToCurrentUser",
                14: "intro",
                15: "announcement",
                16: "joinMode",
                17: "bits",
                18: "custom",
                19: "serverCustom",
                20: "avatar",
                21: "beInviteMode",
                22: "inviteMode",
                23: "updateTeamMode",
                24: "updateCustomMode",
                100: "mute"
            },
            teamMember: {
                1: "teamId",
                3: "account",
                4: "type",
                5: "nickInTeam",
                7: "bits",
                8: "active",
                9: "valid",
                10: "joinTime",
                11: "updateTime",
                12: "custom",
                13: "mute"
            },
            msg: {
                0: "scene",
                1: "to",
                2: "from",
                4: "fromClientType",
                5: "fromDeviceId",
                6: "fromNick",
                7: "time",
                8: "type",
                9: "body",
                10: "attach",
                11: "idClient",
                12: "idServer",
                13: "resend",
                14: "userUpdateTime",
                15: "custom",
                16: "pushPayload",
                17: "pushContent",
                18: "apnsAccounts",
                19: "apnsContent",
                20: "apnsForcePush",
                21: "yidunEnable",
                22: "antiSpamContent",
                100: "isHistoryable",
                101: "isRoamingable",
                102: "isSyncable",
                104: "isMuted",
                105: "cc",
                107: "isPushable",
                108: "isOfflinable",
                109: "isUnreadable",
                110: "needPushNick"
            },
            msgReceipt: {1: "to", 2: "from", 7: "time", 11: "idClient"},
            sysMsg: {
                0: "time",
                1: "type",
                2: "to",
                3: "from",
                4: "ps",
                5: "attach",
                6: "idServer",
                7: "sendToOnlineUsersOnly",
                8: "apnsText",
                9: "pushPayload",
                10: "deletedIdClient",
                11: "deletedIdServer",
                12: "yidunEnable",
                13: "antiSpamContent",
                14: "deletedMsgTime",
                15: "deletedMsgFromNick",
                105: "cc",
                107: "isPushable",
                109: "isUnreadable",
                110: "needPushNick"
            },
            friend: {
                4: "account",
                5: "flag",
                6: "beflag",
                7: "source",
                8: "alias",
                9: "bits",
                10: "custom",
                11: "createTime",
                12: "updateTime"
            },
            user: {
                1: "account",
                3: "nick",
                4: "avatar",
                5: "sign",
                6: "gender",
                7: "email",
                8: "birth",
                9: "tel",
                10: "custom",
                12: "createTime",
                13: "updateTime"
            },
            robot: {
                4: "account",
                5: "nick",
                6: "avatar",
                7: "intro",
                8: "config",
                9: "valid",
                10: "createTime",
                11: "updateTime",
                12: "custid",
                13: "botid",
                14: "bindTime"
            },
            specialRelation: {0: "account", 1: "isMuted", 2: "isBlacked", 3: "createTime", 4: "updateTime"},
            msgType: {
                0: "text",
                1: "picture",
                2: "audio",
                3: "video",
                4: "location",
                5: "notification",
                6: "file",
                7: "netcall_audio",
                8: "netcall_vedio",
                9: "datatunnel_new",
                10: "tips",
                11: "robot",
                100: "custom"
            },
            msgEvent: {
                1: "type",
                2: "value",
                3: "idClient",
                4: "custom",
                5: "validTime",
                6: "broadcastType",
                7: "sync",
                8: "validTimeType",
                9: "durable",
                10: "time",
                11: "idServer",
                12: "clientType",
                13: "serverConfig",
                14: "serverCustom",
                101: "appid",
                103: "account",
                104: "enableMultiClient",
                106: "consid"
            },
            msgEventSubscribe: {1: "type", 2: "subscribeTime", 3: "sync", 102: "to", 104: "from", 105: "time"}
        }
    }, function (e, t, n) {
        (function (e) {
              
            "undefined" != typeof window && (window.console || e.env.WEIXIN_APP || (window.console = {
                log: function () {
                }, info: function () {
                }, warn: function () {
                }, error: function () {
                }
            }))
        }).call(t, n(10))
    }, function (e, t, n) {
          

        function r() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            o.merge(this, {
                options: e,
                debug: !1,
                api: "log",
                style: "color:blue;",
                log: o.emptyFunc,
                info: o.emptyFunc,
                warn: o.emptyFunc,
                error: o.emptyFunc
            }), this.prefix = e.prefix || "", this.setDebug(e.debug)
        }

        var i = n(13), o = n(1), s = r.prototype, a = ["Chrome", "Safari", "Firefox"];
        s.setDebug = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = this;
            if (t.debug = e, e.style && (t.style = e.style), t.debug && o.exist(console)) {
                var n = console;
                t.log = function () {
                    var e = t.formatArgs(arguments);
                    a.indexOf(i.name) !== -1 && o.isString(e[0]) && (e[0] = "%c" + e[0], e.splice(1, 0, t.style)), t._log("log", e)
                }, t.info = function () {
                    var e = t.formatArgs(arguments);
                    t._log("info", e)
                }, t.warn = function () {
                    var e = t.formatArgs(arguments);
                    t._log("warn", e)
                }, t.error = function () {
                    var e = t.formatArgs(arguments);
                    t._log("error", e)
                }, t._log = function (e, r) {
                    var i = t.options.logFunc;
                    if (i && (i[e] && (i = i[e]), o.isFunction(i))) return void i.apply(null, r);
                    if (n[e]) try {
                        n[e].apply ? t.chrome(e, r) : t.ie(e, r)
                    } catch (s) {
                    }
                }, t.chrome = function (e, r) {
                    a.indexOf(i.name) !== -1 ? n[e].apply(n, r) : t.ie(e, r)
                }, t.ie = function (e, t) {
                    t.forEach(function (t) {
                        n[e](JSON.stringify(t, null, 4))
                    })
                }
            }
        }, s.formatArgs = function (e) {
            var t = this;
            e = [].slice.call(e, 0);
            var n = new Date,
                r = n.getFullYear() + "-" + c(n.getMonth() + 1) + "-" + c(n.getDate()) + " " + c(n.getHours()) + ":" + c(n.getMinutes()) + ":" + c(n.getSeconds()) + ":" + c(n.getMilliseconds(), 3),
                i = "[NIM SDK LOG " + r + " " + +n + " " + t.prefix + "]\t";
            return o.isString(e[0]) ? e[0] = i + e[0] : e.splice(0, 0, i), e.forEach(function (t, n) {
                (o.isArray(t) || o.isObject(t)) && (e[n] = o.simpleClone(t))
            }), e
        };
        var c = function (e, t) {
            t = t || 2;
            for (var n = "" + e; n.length < t;) n = "0" + n;
            return n
        };
        e.exports = r
    }, function (e, t, n) {
          
        var r = n(1), i = {
            file: {md5: "$(Etag)", size: "$(ObjectSize)"},
            image: {
                md5: "$(Etag)",
                size: "$(ObjectSize)",
                w: "$(ImageInfo.Width)",
                h: "$(ImageInfo.Height)",
                orientation: "$(ImageInfo.Orientation)"
            },
            audio: {md5: "$(Etag)", size: "$(ObjectSize)", dur: "$(AVinfo.Audio.Duration)"},
            video: {
                md5: "$(Etag)",
                size: "$(ObjectSize)",
                dur: "$(AVinfo.Video.Duration)",
                w: "$(AVinfo.Video.Width)",
                h: "$(AVinfo.Video.Height)"
            }
        }, o = {};
        o.genResponseBody = function (e) {
            return e = e || "file", i[e]
        }, o.parseResponse = function (e, t) {
            r.notundef(e.size) && (e.size = +e.size), r.notundef(e.w) && (e.w = +e.w), r.notundef(e.h) && (e.h = +e.h), r.notundef(e.dur) && (e.dur = +e.dur);
            var n = e.orientation;
            if (r.notundef(n) && (delete e.orientation, t && ("right, top" === n || "left, bottom" === n))) {
                var i = e.w;
                e.w = e.h, e.h = i
            }
            return e
        }, e.exports = o
    }, function (e, t, n) {
          
        var r = n(1);
        r.fillPropertyWithDefault = function (e, t, n) {
            return !!r.undef(e[t]) && (e[t] = n, !0)
        }
    }, function (e, t, n) {
          

        function r(e) {
            var t = this;
            t.options = i.copy(e), i.verifyOptions(e, "url fileName"), i.verifyParamPresentJustOne(e, "blob fileInput"), i.verifyCallback(e, "beginupload uploadprogress uploaddone"), e.fileInput && (e.fileInput = i.verifyFileInput(e.fileInput)), e.type && i.verifyFileType(e.type), e.timeout ? i.verifyParamType("timeout", e.timeout, "number") : e.timeout = 6e5, i.verifyFileUploadCallback(e), e.data = {};
            var n = e.fileName, r = e.fileInput;
            if (c) if (r) {
                var a = e.type ? i.filterFiles(r.files, e.type) : [].slice.call(r.files, 0);
                if (!a || !a.length) return void e.uploaddone(o.newWrongFileTypeError("未读取到" + e.type + "类型的文件, 请确保文件选择节点的文件不为空, 并且请确保选择了" + e.type + "类型的文件"));
                var l = r.files[0].size;
                if (l > u) return void e.uploaddone(o.newFileTooLargeError("文件大小超过100M"));
                e.data[n] = a[0]
            } else e.blob && (e.data[n] = e.blob); else i.dataset(r, "name", n), e.data.input = r;
            e.params && i.merge(e.data, e.params);
            var f = {
                data: e.data, onaftersend: function () {
                    e.beginupload(t)
                }, onuploading: function (t) {
                    var n = Math.floor(1e4 * t.loaded / t.total) / 100,
                        r = {total: t.total, loaded: t.loaded, percentage: n, percentageText: n + "%"};
                    e.fileInput && (r.fileInput = e.fileInput), e.blob && (r.blob = e.blob), e.uploadprogress(r)
                }, onload: function (n) {
                    n.Error ? t.onError(n) : e.uploaddone(null, n)
                }, onerror: function (n) {
                    try {
                        if (n.result) var r = JSON.parse(n.result); else r = n;
                        t.onError(r)
                    } catch (i) {
                        e.uploaddone(new o(n.message, n.code), t.options)
                    }
                }
            };
            c || (f.mode = "iframe"), f.putFileAtEnd = !0, t.sn = s(e.url, f)
        }

        var i = n(1), o = n(4), s = n(19).upload, a = n(19).abort, c = i.supportFormData, u = 104857600;
        r.prototype.onError = function (e) {
            var t, n, r, i = this, s = i.options;
            e = e || {}, t = e.Error || e || {}, n = t.Code || t.code || "unknown", r = t.Message || t.message || "未知错误", s.uploaddone(new o(n + "(" + r + ")", n))
        }, r.prototype.abort = function () {
            a(this.sn)
        }, e.exports = r
    }, , function (e, t) {
        function n(e) {
            e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
        }

        e.exports = n, n.prototype.duration = function () {
            var e = this.ms * Math.pow(this.factor, this.attempts++);
            if (this.jitter) {
                var t = Math.random(), n = Math.floor(t * this.jitter * e);
                e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
            }
            return 0 | Math.min(e, this.max)
        }, n.prototype.reset = function () {
            this.attempts = 0
        }, n.prototype.setMin = function (e) {
            this.ms = e
        }, n.prototype.setMax = function (e) {
            this.max = e
        }, n.prototype.setJitter = function (e) {
            this.jitter = e
        }
    }, function (e, t, n) {
        var r, i;
        !function (o, s) {
              
            r = s, i = "function" == typeof r ? r.call(t, n, t, e) : r, !(void 0 !== i && (e.exports = i))
        }(this, function () {
            var e, t, n, r, i = Function.call, o = Object.prototype, s = i.bind(o.hasOwnProperty),
                a = i.bind(o.propertyIsEnumerable), c = i.bind(o.toString), u = s(o, "__defineGetter__");
            u && (e = i.bind(o.__defineGetter__), t = i.bind(o.__defineSetter__), n = i.bind(o.__lookupGetter__), r = i.bind(o.__lookupSetter__));
            var l = function (e) {
                return null == e || "object" != typeof e && "function" != typeof e
            };
            Object.getPrototypeOf || (Object.getPrototypeOf = function (e) {
                var t = e.__proto__;
                return t || null === t ? t : "[object Function]" === c(e.constructor) ? e.constructor.prototype : e instanceof Object ? o : null
            });
            var f = function (e) {
                try {
                    return e.sentinel = 0, 0 === Object.getOwnPropertyDescriptor(e, "sentinel").value
                } catch (t) {
                    return !1
                }
            };
            if (Object.defineProperty) {
                var d = f({}), m = "undefined" == typeof document || f(document.createElement("div"));
                if (!m || !d) var p = Object.getOwnPropertyDescriptor
            }
            if (!Object.getOwnPropertyDescriptor || p) {
                var y = "Object.getOwnPropertyDescriptor called on a non-object: ";
                Object.getOwnPropertyDescriptor = function (e, t) {
                    if (l(e)) throw new TypeError(y + e);
                    if (p) try {
                        return p.call(Object, e, t)
                    } catch (i) {
                    }
                    var c;
                    if (!s(e, t)) return c;
                    if (c = {enumerable: a(e, t), configurable: !0}, u) {
                        var f = e.__proto__, d = e !== o;
                        d && (e.__proto__ = o);
                        var m = n(e, t), h = r(e, t);
                        if (d && (e.__proto__ = f), m || h) return m && (c.get = m), h && (c.set = h), c
                    }
                    return c.value = e[t], c.writable = !0, c
                }
            }
            if (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function (e) {
                    return Object.keys(e)
                }), !Object.create) {
                var h, g = !({__proto__: null} instanceof Object), v = function () {
                    if (!document.domain) return !1;
                    try {
                        return !!new ActiveXObject("htmlfile")
                    } catch (e) {
                        return !1
                    }
                }, b = function () {
                    var e, t;
                    t = new ActiveXObject("htmlfile");
                    var n = "script";
                    return t.write("<" + n + "></" + n + ">"), t.close(), e = t.parentWindow.Object.prototype, t = null, e
                }, M = function () {
                    var e, t = document.createElement("iframe"), n = document.body || document.documentElement;
                    return t.style.display = "none", n.appendChild(t), t.src = "javascript:", e = t.contentWindow.Object.prototype, n.removeChild(t), t = null, e
                };
                h = g || "undefined" == typeof document ? function () {
                    return {__proto__: null}
                } : function () {
                    var e = v() ? b() : M();
                    delete e.constructor, delete e.hasOwnProperty, delete e.propertyIsEnumerable, delete e.isPrototypeOf, delete e.toLocaleString, delete e.toString, delete e.valueOf;
                    var t = function () {
                    };
                    return t.prototype = e, h = function () {
                        return new t
                    }, new t
                }, Object.create = function (e, t) {
                    var n, r = function () {
                    };
                    if (null === e) n = h(); else {
                        if (null !== e && l(e)) throw new TypeError("Object prototype may only be an Object or null");
                        r.prototype = e, n = new r, n.__proto__ = e
                    }
                    return void 0 !== t && Object.defineProperties(n, t), n
                }
            }
            var T = function (e) {
                try {
                    return Object.defineProperty(e, "sentinel", {}), "sentinel" in e
                } catch (t) {
                    return !1
                }
            };
            if (Object.defineProperty) {
                var k = T({}), S = "undefined" == typeof document || T(document.createElement("div"));
                if (!k || !S) var w = Object.defineProperty, O = Object.defineProperties
            }
            if (!Object.defineProperty || w) {
                var C = "Property description must be an object: ", x = "Object.defineProperty called on non-object: ",
                    _ = "getters & setters can not be defined on this javascript engine";
                Object.defineProperty = function (i, s, a) {
                    if (l(i)) throw new TypeError(x + i);
                    if (l(a)) throw new TypeError(C + a);
                    if (w) try {
                        return w.call(Object, i, s, a)
                    } catch (c) {
                    }
                    if ("value" in a) if (u && (n(i, s) || r(i, s))) {
                        var f = i.__proto__;
                        i.__proto__ = o, delete i[s], i[s] = a.value, i.__proto__ = f
                    } else i[s] = a.value; else {
                        var d = "get" in a, m = "set" in a;
                        if (!u && (d || m)) throw new TypeError(_);
                        d && e(i, s, a.get), m && t(i, s, a.set)
                    }
                    return i
                }
            }
            Object.defineProperties && !O || (Object.defineProperties = function (e, t) {
                if (O) try {
                    return O.call(Object, e, t)
                } catch (n) {
                }
                return Object.keys(t).forEach(function (n) {
                    "__proto__" !== n && Object.defineProperty(e, n, t[n])
                }), e
            }), Object.seal || (Object.seal = function (e) {
                if (Object(e) !== e) throw new TypeError("Object.seal can only be called on Objects.");
                return e
            }), Object.freeze || (Object.freeze = function (e) {
                if (Object(e) !== e) throw new TypeError("Object.freeze can only be called on Objects.");
                return e
            });
            try {
                Object.freeze(function () {
                })
            } catch (I) {
                Object.freeze = function (e) {
                    return function (t) {
                        return "function" == typeof t ? t : e(t)
                    }
                }(Object.freeze)
            }
            Object.preventExtensions || (Object.preventExtensions = function (e) {
                if (Object(e) !== e) throw new TypeError("Object.preventExtensions can only be called on Objects.");
                return e
            }), Object.isSealed || (Object.isSealed = function (e) {
                if (Object(e) !== e) throw new TypeError("Object.isSealed can only be called on Objects.");
                return !1
            }), Object.isFrozen || (Object.isFrozen = function (e) {
                if (Object(e) !== e) throw new TypeError("Object.isFrozen can only be called on Objects.");
                return !1
            }), Object.isExtensible || (Object.isExtensible = function (e) {
                if (Object(e) !== e) throw new TypeError("Object.isExtensible can only be called on Objects.");
                for (var t = ""; s(e, t);) t += "?";
                e[t] = !0;
                var n = s(e, t);
                return delete e[t], n
            })
        })
    }, function (e, t, n) {
        var r, i;
        !function (o, s) {
              
            r = s, i = "function" == typeof r ? r.call(t, n, t, e) : r, !(void 0 !== i && (e.exports = i))
        }(this, function () {
            var e, t, n = Array, r = n.prototype, i = Object, o = i.prototype, s = Function, a = s.prototype,
                c = String, u = c.prototype, l = Number, f = l.prototype, d = r.slice, m = r.splice, p = r.push,
                y = r.unshift, h = r.concat, g = r.join, v = a.call, b = a.apply, M = Math.max, T = Math.min,
                k = o.toString, S = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                w = Function.prototype.toString, O = /^\s*class /, C = function (e) {
                    try {
                        var t = w.call(e), n = t.replace(/\/\/.*\n/g, ""), r = n.replace(/\/\*[.\s\S]*\*\//g, ""),
                            i = r.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                        return O.test(i)
                    } catch (o) {
                        return !1
                    }
                }, x = function (e) {
                    try {
                        return !C(e) && (w.call(e), !0)
                    } catch (t) {
                        return !1
                    }
                }, _ = "[object Function]", I = "[object GeneratorFunction]", e = function (e) {
                    if (!e) return !1;
                    if ("function" != typeof e && "object" != typeof e) return !1;
                    if (S) return x(e);
                    if (C(e)) return !1;
                    var t = k.call(e);
                    return t === _ || t === I
                }, P = RegExp.prototype.exec, E = function (e) {
                    try {
                        return P.call(e), !0
                    } catch (t) {
                        return !1
                    }
                }, A = "[object RegExp]";
            t = function (e) {
                return "object" == typeof e && (S ? E(e) : k.call(e) === A)
            };
            var j, R = String.prototype.valueOf, F = function (e) {
                try {
                    return R.call(e), !0
                } catch (t) {
                    return !1
                }
            }, N = "[object String]";
            j = function (e) {
                return "string" == typeof e || "object" == typeof e && (S ? F(e) : k.call(e) === N)
            };
            var U = i.defineProperty && function () {
                try {
                    var e = {};
                    i.defineProperty(e, "x", {enumerable: !1, value: e});
                    for (var t in e) return !1;
                    return e.x === e
                } catch (n) {
                    return !1
                }
            }(), D = function (e) {
                var t;
                return t = U ? function (e, t, n, r) {
                    !r && t in e || i.defineProperty(e, t, {configurable: !0, enumerable: !1, writable: !0, value: n})
                } : function (e, t, n, r) {
                    !r && t in e || (e[t] = n)
                }, function (n, r, i) {
                    for (var o in r) e.call(r, o) && t(n, o, r[o], i)
                }
            }(o.hasOwnProperty), L = function (e) {
                var t = typeof e;
                return null === e || "object" !== t && "function" !== t
            }, B = l.isNaN || function (e) {
                return e !== e
            }, q = {
                ToInteger: function (e) {
                    var t = +e;
                    return B(t) ? t = 0 : 0 !== t && t !== 1 / 0 && t !== -(1 / 0) && (t = (t > 0 || -1) * Math.floor(Math.abs(t))), t
                }, ToPrimitive: function (t) {
                    var n, r, i;
                    if (L(t)) return t;
                    if (r = t.valueOf, e(r) && (n = r.call(t), L(n))) return n;
                    if (i = t.toString, e(i) && (n = i.call(t), L(n))) return n;
                    throw new TypeError
                }, ToObject: function (e) {
                    if (null == e) throw new TypeError("can't convert " + e + " to object");
                    return i(e)
                }, ToUint32: function (e) {
                    return e >>> 0
                }
            }, W = function () {
            };
            D(a, {
                bind: function (t) {
                    var n = this;
                    if (!e(n)) throw new TypeError("Function.prototype.bind called on incompatible " + n);
                    for (var r, o = d.call(arguments, 1), a = function () {
                        if (this instanceof r) {
                            var e = b.call(n, this, h.call(o, d.call(arguments)));
                            return i(e) === e ? e : this
                        }
                        return b.call(n, t, h.call(o, d.call(arguments)))
                    }, c = M(0, n.length - o.length), u = [], l = 0; l < c; l++) p.call(u, "$" + l);
                    return r = s("binder", "return function (" + g.call(u, ",") + "){ return binder.apply(this, arguments); }")(a), n.prototype && (W.prototype = n.prototype, r.prototype = new W, W.prototype = null), r
                }
            });
            var H = v.bind(o.hasOwnProperty), $ = v.bind(o.toString), X = v.bind(d), V = b.bind(d), J = v.bind(u.slice),
                z = v.bind(u.split), G = v.bind(u.indexOf), K = v.bind(p), Y = v.bind(o.propertyIsEnumerable),
                Z = v.bind(r.sort), Q = n.isArray || function (e) {
                    return "[object Array]" === $(e)
                }, ee = 1 !== [].unshift(0);
            D(r, {
                unshift: function () {
                    return y.apply(this, arguments), this.length
                }
            }, ee), D(n, {isArray: Q});
            var te = i("a"), ne = "a" !== te[0] || !(0 in te), re = function (e) {
                var t = !0, n = !0, r = !1;
                if (e) try {
                    e.call("foo", function (e, n, r) {
                        "object" != typeof r && (t = !1)
                    }), e.call([1], function () {
                          
                        n = "string" == typeof this
                    }, "x")
                } catch (i) {
                    r = !0
                }
                return !!e && !r && t && n
            };
            D(r, {
                forEach: function (t) {
                    var n, r = q.ToObject(this), i = ne && j(this) ? z(this, "") : r, o = -1, s = q.ToUint32(i.length);
                    if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.forEach callback must be a function");
                    for (; ++o < s;) o in i && ("undefined" == typeof n ? t(i[o], o, r) : t.call(n, i[o], o, r))
                }
            }, !re(r.forEach)), D(r, {
                map: function (t) {
                    var r, i = q.ToObject(this), o = ne && j(this) ? z(this, "") : i, s = q.ToUint32(o.length),
                        a = n(s);
                    if (arguments.length > 1 && (r = arguments[1]), !e(t)) throw new TypeError("Array.prototype.map callback must be a function");
                    for (var c = 0; c < s; c++) c in o && ("undefined" == typeof r ? a[c] = t(o[c], c, i) : a[c] = t.call(r, o[c], c, i));
                    return a
                }
            }, !re(r.map)), D(r, {
                filter: function (t) {
                    var n, r, i = q.ToObject(this), o = ne && j(this) ? z(this, "") : i, s = q.ToUint32(o.length),
                        a = [];
                    if (arguments.length > 1 && (r = arguments[1]), !e(t)) throw new TypeError("Array.prototype.filter callback must be a function");
                    for (var c = 0; c < s; c++) c in o && (n = o[c], ("undefined" == typeof r ? t(n, c, i) : t.call(r, n, c, i)) && K(a, n));
                    return a
                }
            }, !re(r.filter)), D(r, {
                every: function (t) {
                    var n, r = q.ToObject(this), i = ne && j(this) ? z(this, "") : r, o = q.ToUint32(i.length);
                    if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.every callback must be a function");
                    for (var s = 0; s < o; s++) if (s in i && !("undefined" == typeof n ? t(i[s], s, r) : t.call(n, i[s], s, r))) return !1;
                    return !0
                }
            }, !re(r.every)), D(r, {
                some: function (t) {
                    var n, r = q.ToObject(this), i = ne && j(this) ? z(this, "") : r, o = q.ToUint32(i.length);
                    if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.some callback must be a function");
                    for (var s = 0; s < o; s++) if (s in i && ("undefined" == typeof n ? t(i[s], s, r) : t.call(n, i[s], s, r))) return !0;
                    return !1
                }
            }, !re(r.some));
            var ie = !1;
            r.reduce && (ie = "object" == typeof r.reduce.call("es5", function (e, t, n, r) {
                return r
            })), D(r, {
                reduce: function (t) {
                    var n = q.ToObject(this), r = ne && j(this) ? z(this, "") : n, i = q.ToUint32(r.length);
                    if (!e(t)) throw new TypeError("Array.prototype.reduce callback must be a function");
                    if (0 === i && 1 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
                    var o, s = 0;
                    if (arguments.length >= 2) o = arguments[1]; else for (; ;) {
                        if (s in r) {
                            o = r[s++];
                            break
                        }
                        if (++s >= i) throw new TypeError("reduce of empty array with no initial value")
                    }
                    for (; s < i; s++) s in r && (o = t(o, r[s], s, n));
                    return o
                }
            }, !ie);
            var oe = !1;
            r.reduceRight && (oe = "object" == typeof r.reduceRight.call("es5", function (e, t, n, r) {
                return r
            })), D(r, {
                reduceRight: function (t) {
                    var n = q.ToObject(this), r = ne && j(this) ? z(this, "") : n, i = q.ToUint32(r.length);
                    if (!e(t)) throw new TypeError("Array.prototype.reduceRight callback must be a function");
                    if (0 === i && 1 === arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
                    var o, s = i - 1;
                    if (arguments.length >= 2) o = arguments[1]; else for (; ;) {
                        if (s in r) {
                            o = r[s--];
                            break
                        }
                        if (--s < 0) throw new TypeError("reduceRight of empty array with no initial value")
                    }
                    if (s < 0) return o;
                    do s in r && (o = t(o, r[s], s, n)); while (s--);
                    return o
                }
            }, !oe);
            var se = r.indexOf && [0, 1].indexOf(1, 2) !== -1;
            D(r, {
                indexOf: function (e) {
                    var t = ne && j(this) ? z(this, "") : q.ToObject(this), n = q.ToUint32(t.length);
                    if (0 === n) return -1;
                    var r = 0;
                    for (arguments.length > 1 && (r = q.ToInteger(arguments[1])), r = r >= 0 ? r : M(0, n + r); r < n; r++) if (r in t && t[r] === e) return r;
                    return -1
                }
            }, se);
            var ae = r.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
            D(r, {
                lastIndexOf: function (e) {
                    var t = ne && j(this) ? z(this, "") : q.ToObject(this), n = q.ToUint32(t.length);
                    if (0 === n) return -1;
                    var r = n - 1;
                    for (arguments.length > 1 && (r = T(r, q.ToInteger(arguments[1]))), r = r >= 0 ? r : n - Math.abs(r); r >= 0; r--) if (r in t && e === t[r]) return r;
                    return -1
                }
            }, ae);
            var ce = function () {
                var e = [1, 2], t = e.splice();
                return 2 === e.length && Q(t) && 0 === t.length
            }();
            D(r, {
                splice: function (e, t) {
                    return 0 === arguments.length ? [] : m.apply(this, arguments)
                }
            }, !ce);
            var ue = function () {
                var e = {};
                return r.splice.call(e, 0, 0, 1), 1 === e.length
            }();
            D(r, {
                splice: function (e, t) {
                    if (0 === arguments.length) return [];
                    var n = arguments;
                    return this.length = M(q.ToInteger(this.length), 0), arguments.length > 0 && "number" != typeof t && (n = X(arguments), n.length < 2 ? K(n, this.length - e) : n[1] = q.ToInteger(t)), m.apply(this, n)
                }
            }, !ue);
            var le = function () {
                var e = new n(1e5);
                return e[8] = "x", e.splice(1, 1), 7 === e.indexOf("x")
            }(), fe = function () {
                var e = 256, t = [];
                return t[e] = "a", t.splice(e + 1, 0, "b"), "a" === t[e]
            }();
            D(r, {
                splice: function (e, t) {
                    for (var n, r = q.ToObject(this), i = [], o = q.ToUint32(r.length), s = q.ToInteger(e), a = s < 0 ? M(o + s, 0) : T(s, o), u = T(M(q.ToInteger(t), 0), o - a), l = 0; l < u;) n = c(a + l), H(r, n) && (i[l] = r[n]), l += 1;
                    var f, d = X(arguments, 2), m = d.length;
                    if (m < u) {
                        l = a;
                        for (var p = o - u; l < p;) n = c(l + u), f = c(l + m), H(r, n) ? r[f] = r[n] : delete r[f], l += 1;
                        l = o;
                        for (var y = o - u + m; l > y;) delete r[l - 1], l -= 1
                    } else if (m > u) for (l = o - u; l > a;) n = c(l + u - 1), f = c(l + m - 1), H(r, n) ? r[f] = r[n] : delete r[f], l -= 1;
                    l = a;
                    for (var h = 0; h < d.length; ++h) r[l] = d[h], l += 1;
                    return r.length = o - u + m, i
                }
            }, !le || !fe);
            var de, me = r.join;
            try {
                de = "1,2,3" !== Array.prototype.join.call("123", ",")
            } catch (pe) {
                de = !0
            }
            de && D(r, {
                join: function (e) {
                    var t = "undefined" == typeof e ? "," : e;
                    return me.call(j(this) ? z(this, "") : this, t)
                }
            }, de);
            var ye = "1,2" !== [1, 2].join(void 0);
            ye && D(r, {
                join: function (e) {
                    var t = "undefined" == typeof e ? "," : e;
                    return me.call(this, t)
                }
            }, ye);
            var he = function (e) {
                for (var t = q.ToObject(this), n = q.ToUint32(t.length), r = 0; r < arguments.length;) t[n + r] = arguments[r], r += 1;
                return t.length = n + r, n + r
            }, ge = function () {
                var e = {}, t = Array.prototype.push.call(e, void 0);
                return 1 !== t || 1 !== e.length || "undefined" != typeof e[0] || !H(e, 0)
            }();
            D(r, {
                push: function (e) {
                    return Q(this) ? p.apply(this, arguments) : he.apply(this, arguments)
                }
            }, ge);
            var ve = function () {
                var e = [], t = e.push(void 0);
                return 1 !== t || 1 !== e.length || "undefined" != typeof e[0] || !H(e, 0)
            }();
            D(r, {push: he}, ve), D(r, {
                slice: function (e, t) {
                    var n = j(this) ? z(this, "") : this;
                    return V(n, arguments)
                }
            }, ne);
            var be = function () {
                try {
                    return [1, 2].sort(null), [1, 2].sort({}), !0
                } catch (e) {
                }
                return !1
            }(), Me = function () {
                try {
                    return [1, 2].sort(/a/), !1
                } catch (e) {
                }
                return !0
            }(), Te = function () {
                try {
                    return [1, 2].sort(void 0), !0
                } catch (e) {
                }
                return !1
            }();
            D(r, {
                sort: function (t) {
                    if ("undefined" == typeof t) return Z(this);
                    if (!e(t)) throw new TypeError("Array.prototype.sort callback must be a function");
                    return Z(this, t)
                }
            }, be || !Te || !Me);
            var ke = !Y({toString: null}, "toString"), Se = Y(function () {
                }, "prototype"), we = !H("x", "0"), Oe = function (e) {
                    var t = e.constructor;
                    return t && t.prototype === e
                }, Ce = {
                    $window: !0,
                    $console: !0,
                    $parent: !0,
                    $self: !0,
                    $frame: !0,
                    $frames: !0,
                    $frameElement: !0,
                    $webkitIndexedDB: !0,
                    $webkitStorageInfo: !0,
                    $external: !0
                }, xe = function () {
                    if ("undefined" == typeof window) return !1;
                    for (var e in window) try {
                        !Ce["$" + e] && H(window, e) && null !== window[e] && "object" == typeof window[e] && Oe(window[e])
                    } catch (t) {
                        return !0
                    }
                    return !1
                }(), _e = function (e) {
                    if ("undefined" == typeof window || !xe) return Oe(e);
                    try {
                        return Oe(e)
                    } catch (t) {
                        return !1
                    }
                },
                Ie = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                Pe = Ie.length, Ee = function (e) {
                    return "[object Arguments]" === $(e)
                }, Ae = function (t) {
                    return null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && !Q(t) && e(t.callee)
                }, je = Ee(arguments) ? Ee : Ae;
            D(i, {
                keys: function (t) {
                    var n = e(t), r = je(t), i = null !== t && "object" == typeof t, o = i && j(t);
                    if (!i && !n && !r) throw new TypeError("Object.keys called on a non-object");
                    var s = [], a = Se && n;
                    if (o && we || r) for (var u = 0; u < t.length; ++u) K(s, c(u));
                    if (!r) for (var l in t) a && "prototype" === l || !H(t, l) || K(s, c(l));
                    if (ke) for (var f = _e(t), d = 0; d < Pe; d++) {
                        var m = Ie[d];
                        f && "constructor" === m || !H(t, m) || K(s, m)
                    }
                    return s
                }
            });
            var Re = i.keys && function () {
                return 2 === i.keys(arguments).length
            }(1, 2), Fe = i.keys && function () {
                var e = i.keys(arguments);
                return 1 !== arguments.length || 1 !== e.length || 1 !== e[0]
            }(1), Ne = i.keys;
            D(i, {
                keys: function (e) {
                    return Ne(je(e) ? X(e) : e)
                }
            }, !Re || Fe);
            var Ue, De, Le = 0 !== new Date(-0xc782b5b342b24).getUTCMonth(), Be = new Date(-0x55d318d56a724),
                qe = new Date(14496624e5), We = "Mon, 01 Jan -45875 11:59:59 GMT" !== Be.toUTCString(),
                He = Be.getTimezoneOffset();
            He < -720 ? (Ue = "Tue Jan 02 -45875" !== Be.toDateString(), De = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(qe.toString())) : (Ue = "Mon Jan 01 -45875" !== Be.toDateString(), De = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(qe.toString()));
            var $e = v.bind(Date.prototype.getFullYear), Xe = v.bind(Date.prototype.getMonth),
                Ve = v.bind(Date.prototype.getDate), Je = v.bind(Date.prototype.getUTCFullYear),
                ze = v.bind(Date.prototype.getUTCMonth), Ge = v.bind(Date.prototype.getUTCDate),
                Ke = v.bind(Date.prototype.getUTCDay), Ye = v.bind(Date.prototype.getUTCHours),
                Ze = v.bind(Date.prototype.getUTCMinutes), Qe = v.bind(Date.prototype.getUTCSeconds),
                et = v.bind(Date.prototype.getUTCMilliseconds), tt = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                nt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                rt = function (e, t) {
                    return Ve(new Date(t, e, 0))
                };
            D(Date.prototype, {
                getFullYear: function () {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var e = $e(this);
                    return e < 0 && Xe(this) > 11 ? e + 1 : e
                }, getMonth: function () {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var e = $e(this), t = Xe(this);
                    return e < 0 && t > 11 ? 0 : t
                }, getDate: function () {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var e = $e(this), t = Xe(this), n = Ve(this);
                    if (e < 0 && t > 11) {
                        if (12 === t) return n;
                        var r = rt(0, e + 1);
                        return r - n + 1
                    }
                    return n
                }, getUTCFullYear: function () {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var e = Je(this);
                    return e < 0 && ze(this) > 11 ? e + 1 : e
                }, getUTCMonth: function () {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var e = Je(this), t = ze(this);
                    return e < 0 && t > 11 ? 0 : t
                }, getUTCDate: function () {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var e = Je(this), t = ze(this), n = Ge(this);
                    if (e < 0 && t > 11) {
                        if (12 === t) return n;
                        var r = rt(0, e + 1);
                        return r - n + 1
                    }
                    return n
                }
            }, Le), D(Date.prototype, {
                toUTCString: function () {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var e = Ke(this), t = Ge(this), n = ze(this), r = Je(this), i = Ye(this), o = Ze(this),
                        s = Qe(this);
                    return tt[e] + ", " + (t < 10 ? "0" + t : t) + " " + nt[n] + " " + r + " " + (i < 10 ? "0" + i : i) + ":" + (o < 10 ? "0" + o : o) + ":" + (s < 10 ? "0" + s : s) + " GMT"
                }
            }, Le || We), D(Date.prototype, {
                toDateString: function () {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var e = this.getDay(), t = this.getDate(), n = this.getMonth(), r = this.getFullYear();
                    return tt[e] + " " + nt[n] + " " + (t < 10 ? "0" + t : t) + " " + r
                }
            }, Le || Ue), (Le || De) && (Date.prototype.toString = function () {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var e = this.getDay(), t = this.getDate(), n = this.getMonth(), r = this.getFullYear(),
                    i = this.getHours(), o = this.getMinutes(), s = this.getSeconds(), a = this.getTimezoneOffset(),
                    c = Math.floor(Math.abs(a) / 60), u = Math.floor(Math.abs(a) % 60);
                return tt[e] + " " + nt[n] + " " + (t < 10 ? "0" + t : t) + " " + r + " " + (i < 10 ? "0" + i : i) + ":" + (o < 10 ? "0" + o : o) + ":" + (s < 10 ? "0" + s : s) + " GMT" + (a > 0 ? "-" : "+") + (c < 10 ? "0" + c : c) + (u < 10 ? "0" + u : u)
            }, U && i.defineProperty(Date.prototype, "toString", {configurable: !0, enumerable: !1, writable: !0}));
            var it = -621987552e5, ot = "-000001",
                st = Date.prototype.toISOString && new Date(it).toISOString().indexOf(ot) === -1,
                at = Date.prototype.toISOString && "1969-12-31T23:59:59.999Z" !== new Date(-1).toISOString(),
                ct = v.bind(Date.prototype.getTime);
            D(Date.prototype, {
                toISOString: function () {
                    if (!isFinite(this) || !isFinite(ct(this))) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
                    var e = Je(this), t = ze(this);
                    e += Math.floor(t / 12), t = (t % 12 + 12) % 12;
                    var n = [t + 1, Ge(this), Ye(this), Ze(this), Qe(this)];
                    e = (e < 0 ? "-" : e > 9999 ? "+" : "") + J("00000" + Math.abs(e), 0 <= e && e <= 9999 ? -4 : -6);
                    for (var r = 0; r < n.length; ++r) n[r] = J("00" + n[r], -2);
                    return e + "-" + X(n, 0, 2).join("-") + "T" + X(n, 2).join(":") + "." + J("000" + et(this), -3) + "Z"
                }
            }, st || at);
            var ut = function () {
                try {
                    return Date.prototype.toJSON && null === new Date(NaN).toJSON() && new Date(it).toJSON().indexOf(ot) !== -1 && Date.prototype.toJSON.call({
                        toISOString: function () {
                            return !0
                        }
                    })
                } catch (e) {
                    return !1
                }
            }();
            ut || (Date.prototype.toJSON = function (t) {
                var n = i(this), r = q.ToPrimitive(n);
                if ("number" == typeof r && !isFinite(r)) return null;
                var o = n.toISOString;
                if (!e(o)) throw new TypeError("toISOString property is not callable");
                return o.call(n)
            });
            var lt = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
                ft = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z")),
                dt = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
            if (dt || ft || !lt) {
                var mt = Math.pow(2, 31) - 1, pt = B(new Date(1970, 0, 1, 0, 0, 0, mt + 1).getTime());
                Date = function (e) {
                    var t = function (n, r, i, o, s, a, u) {
                            var l, f = arguments.length;
                            if (this instanceof e) {
                                var d = a, m = u;
                                if (pt && f >= 7 && u > mt) {
                                    var p = Math.floor(u / mt) * mt, y = Math.floor(p / 1e3);
                                    d += y, m -= 1e3 * y
                                }
                                l = 1 === f && c(n) === n ? new e(t.parse(n)) : f >= 7 ? new e(n, r, i, o, s, d, m) : f >= 6 ? new e(n, r, i, o, s, d) : f >= 5 ? new e(n, r, i, o, s) : f >= 4 ? new e(n, r, i, o) : f >= 3 ? new e(n, r, i) : f >= 2 ? new e(n, r) : f >= 1 ? new e(n instanceof e ? +n : n) : new e
                            } else l = e.apply(this, arguments);
                            return L(l) || D(l, {constructor: t}, !0), l
                        },
                        n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
                        r = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365], i = function (e, t) {
                            var n = t > 1 ? 1 : 0;
                            return r[t] + Math.floor((e - 1969 + n) / 4) - Math.floor((e - 1901 + n) / 100) + Math.floor((e - 1601 + n) / 400) + 365 * (e - 1970)
                        }, o = function (t) {
                            var n = 0, r = t;
                            if (pt && r > mt) {
                                var i = Math.floor(r / mt) * mt, o = Math.floor(i / 1e3);
                                n += o, r -= 1e3 * o
                            }
                            return l(new e(1970, 0, 1, 0, 0, n, r))
                        };
                    for (var s in e) H(e, s) && (t[s] = e[s]);
                    D(t, {now: e.now, UTC: e.UTC}, !0), t.prototype = e.prototype, D(t.prototype, {constructor: t}, !0);
                    var a = function (t) {
                        var r = n.exec(t);
                        if (r) {
                            var s, a = l(r[1]), c = l(r[2] || 1) - 1, u = l(r[3] || 1) - 1, f = l(r[4] || 0),
                                d = l(r[5] || 0), m = l(r[6] || 0), p = Math.floor(1e3 * l(r[7] || 0)),
                                y = Boolean(r[4] && !r[8]), h = "-" === r[9] ? 1 : -1, g = l(r[10] || 0),
                                v = l(r[11] || 0), b = d > 0 || m > 0 || p > 0;
                            return f < (b ? 24 : 25) && d < 60 && m < 60 && p < 1e3 && c > -1 && c < 12 && g < 24 && v < 60 && u > -1 && u < i(a, c + 1) - i(a, c) && (s = 60 * (24 * (i(a, c) + u) + f + g * h), s = 1e3 * (60 * (s + d + v * h) + m) + p, y && (s = o(s)), -864e13 <= s && s <= 864e13) ? s : NaN
                        }
                        return e.parse.apply(this, arguments)
                    };
                    return D(t, {parse: a}), t
                }(Date)
            }
            Date.now || (Date.now = function () {
                return (new Date).getTime()
            });
            var yt = f.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)),
                ht = {
                    base: 1e7, size: 6, data: [0, 0, 0, 0, 0, 0], multiply: function (e, t) {
                        for (var n = -1, r = t; ++n < ht.size;) r += e * ht.data[n], ht.data[n] = r % ht.base, r = Math.floor(r / ht.base)
                    }, divide: function (e) {
                        for (var t = ht.size, n = 0; --t >= 0;) n += ht.data[t], ht.data[t] = Math.floor(n / e), n = n % e * ht.base
                    }, numToString: function () {
                        for (var e = ht.size, t = ""; --e >= 0;) if ("" !== t || 0 === e || 0 !== ht.data[e]) {
                            var n = c(ht.data[e]);
                            "" === t ? t = n : t += J("0000000", 0, 7 - n.length) + n
                        }
                        return t
                    }, pow: function Nt(e, t, n) {
                        return 0 === t ? n : t % 2 === 1 ? Nt(e, t - 1, n * e) : Nt(e * e, t / 2, n)
                    }, log: function (e) {
                        for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
                        for (; n >= 2;) t += 1, n /= 2;
                        return t
                    }
                }, gt = function (e) {
                    var t, n, r, i, o, s, a, u;
                    if (t = l(e), t = B(t) ? 0 : Math.floor(t), t < 0 || t > 20) throw new RangeError("Number.toFixed called with invalid number of decimals");
                    if (n = l(this), B(n)) return "NaN";
                    if (n <= -1e21 || n >= 1e21) return c(n);
                    if (r = "", n < 0 && (r = "-", n = -n), i = "0", n > 1e-21) if (o = ht.log(n * ht.pow(2, 69, 1)) - 69, s = o < 0 ? n * ht.pow(2, -o, 1) : n / ht.pow(2, o, 1), s *= 4503599627370496, o = 52 - o, o > 0) {
                        for (ht.multiply(0, s), a = t; a >= 7;) ht.multiply(1e7, 0), a -= 7;
                        for (ht.multiply(ht.pow(10, a, 1), 0), a = o - 1; a >= 23;) ht.divide(1 << 23), a -= 23;
                        ht.divide(1 << a), ht.multiply(1, 1), ht.divide(2), i = ht.numToString()
                    } else ht.multiply(0, s), ht.multiply(1 << -o, 0), i = ht.numToString() + J("0.00000000000000000000", 2, 2 + t);
                    return t > 0 ? (u = i.length, i = u <= t ? r + J("0.0000000000000000000", 0, t - u + 2) + i : r + J(i, 0, u - t) + "." + J(i, u - t)) : i = r + i, i
                };
            D(f, {toFixed: gt}, yt);
            var vt = function () {
                try {
                    return "1" === 1..toPrecision(void 0)
                } catch (e) {
                    return !0
                }
            }(), bt = f.toPrecision;
            D(f, {
                toPrecision: function (e) {
                    return "undefined" == typeof e ? bt.call(this) : bt.call(this, e)
                }
            }, vt), 2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? !function () {
                var e = "undefined" == typeof/()??/.exec("")[1], n = Math.pow(2, 32) - 1;
                u.split = function (r, i) {
                    var o = String(this);
                    if ("undefined" == typeof r && 0 === i) return [];
                    if (!t(r)) return z(this, r, i);
                    var s, a, c, u, l = [],
                        f = (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.unicode ? "u" : "") + (r.sticky ? "y" : ""),
                        d = 0, m = new RegExp(r.source, f + "g");
                    e || (s = new RegExp("^" + m.source + "$(?!\\s)", f));
                    var y = "undefined" == typeof i ? n : q.ToUint32(i);
                    for (a = m.exec(o); a && (c = a.index + a[0].length,
                        !(c > d && (K(l, J(o, d, a.index)), !e && a.length > 1 && a[0].replace(s, function () {
                            for (var e = 1; e < arguments.length - 2; e++) "undefined" == typeof arguments[e] && (a[e] = void 0)
                        }), a.length > 1 && a.index < o.length && p.apply(l, X(a, 1)), u = a[0].length, d = c, l.length >= y)));) m.lastIndex === a.index && m.lastIndex++, a = m.exec(o);
                    return d === o.length ? !u && m.test("") || K(l, "") : K(l, J(o, d)), l.length > y ? X(l, 0, y) : l
                }
            }() : "0".split(void 0, 0).length && (u.split = function (e, t) {
                return "undefined" == typeof e && 0 === t ? [] : z(this, e, t)
            });
            var Mt = u.replace, Tt = function () {
                var e = [];
                return "x".replace(/x(.)?/g, function (t, n) {
                    K(e, n)
                }), 1 === e.length && "undefined" == typeof e[0]
            }();
            Tt || (u.replace = function (n, r) {
                var i = e(r), o = t(n) && /\)[*?]/.test(n.source);
                if (i && o) {
                    var s = function (e) {
                        var t = arguments.length, i = n.lastIndex;
                        n.lastIndex = 0;
                        var o = n.exec(e) || [];
                        return n.lastIndex = i, K(o, arguments[t - 2], arguments[t - 1]), r.apply(this, o)
                    };
                    return Mt.call(this, n, s)
                }
                return Mt.call(this, n, r)
            });
            var kt = u.substr, St = "".substr && "b" !== "0b".substr(-1);
            D(u, {
                substr: function (e, t) {
                    var n = e;
                    return e < 0 && (n = M(this.length + e, 0)), kt.call(this, n, t)
                }
            }, St);
            var wt = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff", Ot = "​", Ct = "[" + wt + "]",
                xt = new RegExp("^" + Ct + Ct + "*"), _t = new RegExp(Ct + Ct + "*$"),
                It = u.trim && (wt.trim() || !Ot.trim());
            D(u, {
                trim: function () {
                    if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                    return c(this).replace(xt, "").replace(_t, "")
                }
            }, It);
            var Pt = v.bind(String.prototype.trim), Et = u.lastIndexOf && "abcあい".lastIndexOf("あい", 2) !== -1;
            D(u, {
                lastIndexOf: function (e) {
                    if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                    for (var t = c(this), n = c(e), r = arguments.length > 1 ? l(arguments[1]) : NaN, i = B(r) ? 1 / 0 : q.ToInteger(r), o = T(M(i, 0), t.length), s = n.length, a = o + s; a > 0;) {
                        a = M(0, a - s);
                        var u = G(J(t, a, o + s), n);
                        if (u !== -1) return a + u
                    }
                    return -1
                }
            }, Et);
            var At = u.lastIndexOf;
            if (D(u, {
                    lastIndexOf: function (e) {
                        return At.apply(this, arguments)
                    }
                }, 1 !== u.lastIndexOf.length), 8 === parseInt(wt + "08") && 22 === parseInt(wt + "0x16") || (parseInt = function (e) {
                    var t = /^[\-+]?0[xX]/;
                    return function (n, r) {
                        var i = Pt(String(n)), o = l(r) || (t.test(i) ? 16 : 10);
                        return e(i, o)
                    }
                }(parseInt)), 1 / parseFloat("-0") !== -(1 / 0) && (parseFloat = function (e) {
                    return function (t) {
                        var n = Pt(String(t)), r = e(n);
                        return 0 === r && "-" === J(n, 0, 1) ? -0 : r
                    }
                }(parseFloat)), "RangeError: test" !== String(new RangeError("test"))) {
                var jt = function () {
                    if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                    var e = this.name;
                    "undefined" == typeof e ? e = "Error" : "string" != typeof e && (e = c(e));
                    var t = this.message;
                    return "undefined" == typeof t ? t = "" : "string" != typeof t && (t = c(t)), e ? t ? e + ": " + t : e : t
                };
                Error.prototype.toString = jt
            }
            if (U) {
                var Rt = function (e, t) {
                    if (Y(e, t)) {
                        var n = Object.getOwnPropertyDescriptor(e, t);
                        n.configurable && (n.enumerable = !1, Object.defineProperty(e, t, n))
                    }
                };
                Rt(Error.prototype, "message"), "" !== Error.prototype.message && (Error.prototype.message = ""), Rt(Error.prototype, "name")
            }
            if ("/a/gim" !== String(/a/gim)) {
                var Ft = function () {
                    var e = "/" + this.source + "/";
                    return this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), e
                };
                RegExp.prototype.toString = Ft
            }
        })
    }, function (e, t, n) {
        function r(e, t, n) {
            if (!a(t)) throw new TypeError("iterator must be a function");
            arguments.length < 3 && (n = this), "[object Array]" === c.call(e) ? i(e, t, n) : "string" == typeof e ? o(e, t, n) : s(e, t, n)
        }

        function i(e, t, n) {
            for (var r = 0, i = e.length; r < i; r++) u.call(e, r) && t.call(n, e[r], r, e)
        }

        function o(e, t, n) {
            for (var r = 0, i = e.length; r < i; r++) t.call(n, e.charAt(r), r, e)
        }

        function s(e, t, n) {
            for (var r in e) u.call(e, r) && t.call(n, e[r], r, e)
        }

        var a = n(35);
        e.exports = r;
        var c = Object.prototype.toString, u = Object.prototype.hasOwnProperty
    }, function (e, t) {
        (function (t) {
            var n;
            n = "undefined" != typeof window ? window : "undefined" != typeof t ? t : "undefined" != typeof self ? self : {}, e.exports = n
        }).call(t, function () {
            return this
        }())
    }, function (e, t, n) {
        var r;
        (function (e, i) {
            (function () {
                function o(e, t) {
                    function n(e) {
                        if (n[e] !== h) return n[e];
                        var o;
                        if ("bug-string-char-index" == e) o = "a" != "a"[0]; else if ("json" == e) o = n("json-stringify") && n("json-parse"); else {
                            var s, a = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                            if ("json-stringify" == e) {
                                var u = t.stringify, l = "function" == typeof u && b;
                                if (l) {
                                    (s = function () {
                                        return 1
                                    }).toJSON = s;
                                    try {
                                        l = "0" === u(0) && "0" === u(new r) && '""' == u(new i) && u(v) === h && u(h) === h && u() === h && "1" === u(s) && "[1]" == u([s]) && "[null]" == u([h]) && "null" == u(null) && "[null,null,null]" == u([h, v, null]) && u({a: [s, !0, !1, null, "\0\b\n\f\r\t"]}) == a && "1" === u(null, s) && "[\n 1,\n 2\n]" == u([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == u(new c(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == u(new c(864e13)) && '"-000001-01-01T00:00:00.000Z"' == u(new c(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == u(new c(-1))
                                    } catch (f) {
                                        l = !1
                                    }
                                }
                                o = l
                            }
                            if ("json-parse" == e) {
                                var d = t.parse;
                                if ("function" == typeof d) try {
                                    if (0 === d("0") && !d(!1)) {
                                        s = d(a);
                                        var m = 5 == s.a.length && 1 === s.a[0];
                                        if (m) {
                                            try {
                                                m = !d('"\t"')
                                            } catch (f) {
                                            }
                                            if (m) try {
                                                m = 1 !== d("01")
                                            } catch (f) {
                                            }
                                            if (m) try {
                                                m = 1 !== d("1.")
                                            } catch (f) {
                                            }
                                        }
                                    }
                                } catch (f) {
                                    m = !1
                                }
                                o = m
                            }
                        }
                        return n[e] = !!o
                    }

                    e || (e = u.Object()), t || (t = u.Object());
                    var r = e.Number || u.Number, i = e.String || u.String, s = e.Object || u.Object,
                        c = e.Date || u.Date, l = e.SyntaxError || u.SyntaxError, f = e.TypeError || u.TypeError,
                        d = e.Math || u.Math, m = e.JSON || u.JSON;
                    "object" == typeof m && m && (t.stringify = m.stringify, t.parse = m.parse);
                    var p, y, h, g = s.prototype, v = g.toString, b = new c(-0xc782b5b800cec);
                    try {
                        b = b.getUTCFullYear() == -109252 && 0 === b.getUTCMonth() && 1 === b.getUTCDate() && 10 == b.getUTCHours() && 37 == b.getUTCMinutes() && 6 == b.getUTCSeconds() && 708 == b.getUTCMilliseconds()
                    } catch (M) {
                    }
                    if (!n("json")) {
                        var T = "[object Function]", k = "[object Date]", S = "[object Number]", w = "[object String]",
                            O = "[object Array]", C = "[object Boolean]", x = n("bug-string-char-index");
                        if (!b) var _ = d.floor, I = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                            P = function (e, t) {
                                return I[t] + 365 * (e - 1970) + _((e - 1969 + (t = +(t > 1))) / 4) - _((e - 1901 + t) / 100) + _((e - 1601 + t) / 400)
                            };
                        if ((p = g.hasOwnProperty) || (p = function (e) {
                                var t, n = {};
                                return (n.__proto__ = null, n.__proto__ = {toString: 1}, n).toString != v ? p = function (e) {
                                    var t = this.__proto__, n = e in (this.__proto__ = null, this);
                                    return this.__proto__ = t, n
                                } : (t = n.constructor, p = function (e) {
                                    var n = (this.constructor || t).prototype;
                                    return e in this && !(e in n && this[e] === n[e])
                                }), n = null, p.call(this, e)
                            }), y = function (e, t) {
                                var n, r, i, o = 0;
                                (n = function () {
                                    this.valueOf = 0
                                }).prototype.valueOf = 0, r = new n;
                                for (i in r) p.call(r, i) && o++;
                                return n = r = null, o ? y = 2 == o ? function (e, t) {
                                    var n, r = {}, i = v.call(e) == T;
                                    for (n in e) i && "prototype" == n || p.call(r, n) || !(r[n] = 1) || !p.call(e, n) || t(n)
                                } : function (e, t) {
                                    var n, r, i = v.call(e) == T;
                                    for (n in e) i && "prototype" == n || !p.call(e, n) || (r = "constructor" === n) || t(n);
                                    (r || p.call(e, n = "constructor")) && t(n)
                                } : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], y = function (e, t) {
                                    var n, i, o = v.call(e) == T,
                                        s = !o && "function" != typeof e.constructor && a[typeof e.hasOwnProperty] && e.hasOwnProperty || p;
                                    for (n in e) o && "prototype" == n || !s.call(e, n) || t(n);
                                    for (i = r.length; n = r[--i]; s.call(e, n) && t(n)) ;
                                }), y(e, t)
                            }, !n("json-stringify")) {
                            var E = {92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"},
                                A = "000000", j = function (e, t) {
                                    return (A + (t || 0)).slice(-e)
                                }, R = "\\u00", F = function (e) {
                                    for (var t = '"', n = 0, r = e.length, i = !x || r > 10, o = i && (x ? e.split("") : e); n < r; n++) {
                                        var s = e.charCodeAt(n);
                                        switch (s) {
                                            case 8:
                                            case 9:
                                            case 10:
                                            case 12:
                                            case 13:
                                            case 34:
                                            case 92:
                                                t += E[s];
                                                break;
                                            default:
                                                if (s < 32) {
                                                    t += R + j(2, s.toString(16));
                                                    break
                                                }
                                                t += i ? o[n] : e.charAt(n)
                                        }
                                    }
                                    return t + '"'
                                }, N = function (e, t, n, r, i, o, s) {
                                    var a, c, u, l, d, m, g, b, M, T, x, I, E, A, R, U;
                                    try {
                                        a = t[e]
                                    } catch (D) {
                                    }
                                    if ("object" == typeof a && a) if (c = v.call(a), c != k || p.call(a, "toJSON")) "function" == typeof a.toJSON && (c != S && c != w && c != O || p.call(a, "toJSON")) && (a = a.toJSON(e)); else if (a > -1 / 0 && a < 1 / 0) {
                                        if (P) {
                                            for (d = _(a / 864e5), u = _(d / 365.2425) + 1970 - 1; P(u + 1, 0) <= d; u++) ;
                                            for (l = _((d - P(u, 0)) / 30.42); P(u, l + 1) <= d; l++) ;
                                            d = 1 + d - P(u, l), m = (a % 864e5 + 864e5) % 864e5, g = _(m / 36e5) % 24, b = _(m / 6e4) % 60, M = _(m / 1e3) % 60, T = m % 1e3
                                        } else u = a.getUTCFullYear(), l = a.getUTCMonth(), d = a.getUTCDate(), g = a.getUTCHours(), b = a.getUTCMinutes(), M = a.getUTCSeconds(), T = a.getUTCMilliseconds();
                                        a = (u <= 0 || u >= 1e4 ? (u < 0 ? "-" : "+") + j(6, u < 0 ? -u : u) : j(4, u)) + "-" + j(2, l + 1) + "-" + j(2, d) + "T" + j(2, g) + ":" + j(2, b) + ":" + j(2, M) + "." + j(3, T) + "Z"
                                    } else a = null;
                                    if (n && (a = n.call(t, e, a)), null === a) return "null";
                                    if (c = v.call(a), c == C) return "" + a;
                                    if (c == S) return a > -1 / 0 && a < 1 / 0 ? "" + a : "null";
                                    if (c == w) return F("" + a);
                                    if ("object" == typeof a) {
                                        for (A = s.length; A--;) if (s[A] === a) throw f();
                                        if (s.push(a), x = [], R = o, o += i, c == O) {
                                            for (E = 0, A = a.length; E < A; E++) I = N(E, a, n, r, i, o, s), x.push(I === h ? "null" : I);
                                            U = x.length ? i ? "[\n" + o + x.join(",\n" + o) + "\n" + R + "]" : "[" + x.join(",") + "]" : "[]"
                                        } else y(r || a, function (e) {
                                            var t = N(e, a, n, r, i, o, s);
                                            t !== h && x.push(F(e) + ":" + (i ? " " : "") + t)
                                        }), U = x.length ? i ? "{\n" + o + x.join(",\n" + o) + "\n" + R + "}" : "{" + x.join(",") + "}" : "{}";
                                        return s.pop(), U
                                    }
                                };
                            t.stringify = function (e, t, n) {
                                var r, i, o, s;
                                if (a[typeof t] && t) if ((s = v.call(t)) == T) i = t; else if (s == O) {
                                    o = {};
                                    for (var c, u = 0, l = t.length; u < l; c = t[u++], s = v.call(c), (s == w || s == S) && (o[c] = 1)) ;
                                }
                                if (n) if ((s = v.call(n)) == S) {
                                    if ((n -= n % 1) > 0) for (r = "", n > 10 && (n = 10); r.length < n; r += " ") ;
                                } else s == w && (r = n.length <= 10 ? n : n.slice(0, 10));
                                return N("", (c = {}, c[""] = e, c), i, o, r, "", [])
                            }
                        }
                        if (!n("json-parse")) {
                            var U, D, L = i.fromCharCode,
                                B = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"},
                                q = function () {
                                    throw U = D = null, l()
                                }, W = function () {
                                    for (var e, t, n, r, i, o = D, s = o.length; U < s;) switch (i = o.charCodeAt(U)) {
                                        case 9:
                                        case 10:
                                        case 13:
                                        case 32:
                                            U++;
                                            break;
                                        case 123:
                                        case 125:
                                        case 91:
                                        case 93:
                                        case 58:
                                        case 44:
                                            return e = x ? o.charAt(U) : o[U], U++, e;
                                        case 34:
                                            for (e = "@", U++; U < s;) if (i = o.charCodeAt(U), i < 32) q(); else if (92 == i) switch (i = o.charCodeAt(++U)) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    e += B[i], U++;
                                                    break;
                                                case 117:
                                                    for (t = ++U, n = U + 4; U < n; U++) i = o.charCodeAt(U), i >= 48 && i <= 57 || i >= 97 && i <= 102 || i >= 65 && i <= 70 || q();
                                                    e += L("0x" + o.slice(t, U));
                                                    break;
                                                default:
                                                    q()
                                            } else {
                                                if (34 == i) break;
                                                for (i = o.charCodeAt(U), t = U; i >= 32 && 92 != i && 34 != i;) i = o.charCodeAt(++U);
                                                e += o.slice(t, U)
                                            }
                                            if (34 == o.charCodeAt(U)) return U++, e;
                                            q();
                                        default:
                                            if (t = U, 45 == i && (r = !0, i = o.charCodeAt(++U)), i >= 48 && i <= 57) {
                                                for (48 == i && (i = o.charCodeAt(U + 1), i >= 48 && i <= 57) && q(), r = !1; U < s && (i = o.charCodeAt(U), i >= 48 && i <= 57); U++) ;
                                                if (46 == o.charCodeAt(U)) {
                                                    for (n = ++U; n < s && (i = o.charCodeAt(n), i >= 48 && i <= 57); n++) ;
                                                    n == U && q(), U = n
                                                }
                                                if (i = o.charCodeAt(U), 101 == i || 69 == i) {
                                                    for (i = o.charCodeAt(++U), 43 != i && 45 != i || U++, n = U; n < s && (i = o.charCodeAt(n), i >= 48 && i <= 57); n++) ;
                                                    n == U && q(), U = n
                                                }
                                                return +o.slice(t, U)
                                            }
                                            if (r && q(), "true" == o.slice(U, U + 4)) return U += 4, !0;
                                            if ("false" == o.slice(U, U + 5)) return U += 5, !1;
                                            if ("null" == o.slice(U, U + 4)) return U += 4, null;
                                            q()
                                    }
                                    return "$"
                                }, H = function (e) {
                                    var t, n;
                                    if ("$" == e && q(), "string" == typeof e) {
                                        if ("@" == (x ? e.charAt(0) : e[0])) return e.slice(1);
                                        if ("[" == e) {
                                            for (t = []; e = W(), "]" != e; n || (n = !0)) n && ("," == e ? (e = W(), "]" == e && q()) : q()), "," == e && q(), t.push(H(e));
                                            return t
                                        }
                                        if ("{" == e) {
                                            for (t = {}; e = W(), "}" != e; n || (n = !0)) n && ("," == e ? (e = W(), "}" == e && q()) : q()), "," != e && "string" == typeof e && "@" == (x ? e.charAt(0) : e[0]) && ":" == W() || q(), t[e.slice(1)] = H(W());
                                            return t
                                        }
                                        q()
                                    }
                                    return e
                                }, $ = function (e, t, n) {
                                    var r = X(e, t, n);
                                    r === h ? delete e[t] : e[t] = r
                                }, X = function (e, t, n) {
                                    var r, i = e[t];
                                    if ("object" == typeof i && i) if (v.call(i) == O) for (r = i.length; r--;) $(i, r, n); else y(i, function (e) {
                                        $(i, e, n)
                                    });
                                    return n.call(e, t, i)
                                };
                            t.parse = function (e, t) {
                                var n, r;
                                return U = 0, D = "" + e, n = H(W()), "$" != W() && q(), U = D = null, t && v.call(t) == T ? X((r = {}, r[""] = n, r), "", t) : n
                            }
                        }
                    }
                    return t.runInContext = o, t
                }

                var s = n(79), a = {"function": !0, object: !0}, c = a[typeof t] && t && !t.nodeType && t,
                    u = a[typeof window] && window || this,
                    l = c && a[typeof e] && e && !e.nodeType && "object" == typeof i && i;
                if (!l || l.global !== l && l.window !== l && l.self !== l || (u = l), c && !s) o(u, c); else {
                    var f = u.JSON, d = u.JSON3, m = !1, p = o(u, u.JSON3 = {
                        noConflict: function () {
                            return m || (m = !0, u.JSON = f, u.JSON3 = d, f = d = null), p
                        }
                    });
                    u.JSON = {parse: p.parse, stringify: p.stringify}
                }
                s && (r = function () {
                    return p
                }.call(t, n, t, e), !(void 0 !== r && (e.exports = r)))
            }).call(this)
        }).call(t, n(18)(e), function () {
            return this
        }())
    }, function (e, t, n) {
        var r = n(75), i = n(71), o = function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        };
        e.exports = function (e) {
            if (!e) return {};
            var t = {};
            return i(r(e).split("\n"), function (e) {
                var n = e.indexOf(":"), i = r(e.slice(0, n)).toLowerCase(), s = r(e.slice(n + 1));
                "undefined" == typeof t[i] ? t[i] = s : o(t[i]) ? t[i].push(s) : t[i] = [t[i], s]
            }), t
        }
    }, function (e, t) {
        function n(e) {
            return e.replace(/^\s*|\s*$/g, "")
        }

        t = e.exports = n, t.left = function (e) {
            return e.replace(/^\s*/, "")
        }, t.right = function (e) {
            return e.replace(/\s*$/, "")
        }
    }, function (e, t, n) {
        var r, i, o;
        !function (n, s) {
              
            i = [], r = s, o = "function" == typeof r ? r.apply(t, i) : r, !(void 0 !== o && (e.exports = o))
        }(this, function (e) {
              
            return function (t) {
                function n() {
                    t.arrayAccessForm = t.arrayAccessForm || "none", t.emptyNodeForm = t.emptyNodeForm || "text", t.attributeConverters = t.attributeConverters || [], t.datetimeAccessFormPaths = t.datetimeAccessFormPaths || [], t.arrayAccessFormPaths = t.arrayAccessFormPaths || [], void 0 === t.enableToStringFunc && (t.enableToStringFunc = !0), void 0 === t.skipEmptyTextNodesForObj && (t.skipEmptyTextNodesForObj = !0), void 0 === t.stripWhitespaces && (t.stripWhitespaces = !0), void 0 === t.useDoubleQuotes && (t.useDoubleQuotes = !0), void 0 === t.ignoreRoot && (t.ignoreRoot = !1), void 0 === t.escapeMode && (t.escapeMode = !0), void 0 === t.attributePrefix && (t.attributePrefix = "_"), void 0 === t.selfClosingElements && (t.selfClosingElements = !0), void 0 === t.keepCData && (t.keepCData = !1)
                }

                function r() {
                    function e(e) {
                        var t = String(e);
                        return 1 === t.length && (t = "0" + t), t
                    }

                    "function" != typeof String.prototype.trim && (String.prototype.trim = function () {
                        return this.replace(/^\s+|^\n+|(\s|\n)+$/g, "")
                    }), "function" != typeof Date.prototype.toISOString && (Date.prototype.toISOString = function () {
                        var t = 1e3;
                        return this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / t).toFixed(3)).slice(2, 5) + "Z"
                    })
                }

                function i(e) {
                    var t = e.localName;
                    return null == t && (t = e.baseName), null != t && "" !== t || (t = e.nodeName), t
                }

                function o(e) {
                    return e.prefix
                }

                function s(e) {
                    return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;") : e
                }

                function a(e) {
                    return e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, "&")
                }

                function c(e, n, r) {
                    switch (t.arrayAccessForm) {
                        case"property":
                            e[n] instanceof Array ? e[n + "_asArray"] = e[n] : e[n + "_asArray"] = [e[n]]
                    }
                    if (!(e[n] instanceof Array) && t.arrayAccessFormPaths.length > 0) {
                        for (var i = !1, o = 0; o < t.arrayAccessFormPaths.length; o++) {
                            var s = t.arrayAccessFormPaths[o];
                            if ("string" == typeof s) {
                                if (s === r) {
                                    i = !0;
                                    break
                                }
                            } else if (s instanceof RegExp) {
                                if (s.test(r)) {
                                    i = !0;
                                    break
                                }
                            } else if ("function" == typeof s && s(n, r)) {
                                i = !0;
                                break
                            }
                        }
                        i && (e[n] = [e[n]])
                    }
                }

                function u(e) {
                    var t = 60, n = e.split(/[-T:+Z]/g), r = new Date(n[0], n[1] - 1, n[2]), i = n[5].split(".");
                    if (r.setHours(n[3], n[4], i[0]), i.length > 1 && r.setMilliseconds(i[1]), n[6] && n[7]) {
                        var o = n[6] * t + Number(n[7]), s = /\d\d-\d\d:\d\d$/.test(e) ? "-" : "+";
                        o = 0 + ("-" === s ? -1 * o : o), r.setMinutes(r.getMinutes() - o - r.getTimezoneOffset())
                    } else e.indexOf("Z", e.length - 1) !== -1 && (r = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds())));
                    return r
                }

                function l(e, n, r) {
                    if (t.datetimeAccessFormPaths.length > 0) for (var i = r.split(".#")[0], o = 0; o < t.datetimeAccessFormPaths.length; o++) {
                        var s = t.datetimeAccessFormPaths[o];
                        if ("string" == typeof s) {
                            if (s === i) return u(e)
                        } else if (s instanceof RegExp) {
                            if (s.test(i)) return u(e)
                        } else if ("function" == typeof s && s(i)) return u(e)
                    }
                    return e
                }

                function f(e) {
                    for (var n = {}, r = e.childNodes, o = 0; o < r.length; o++) {
                        var s = r.item(o);
                        if (s.nodeType === x.ELEMENT_NODE) {
                            var a = i(s);
                            t.ignoreRoot ? n = m(s, a) : n[a] = m(s, a)
                        }
                    }
                    return n
                }

                function d(e, n) {
                    var r = {};
                    r.__cnt = 0;
                    for (var s = e.childNodes, u = 0; u < s.length; u++) {
                        var f = s.item(u), d = i(f);
                        f.nodeType !== x.COMMENT_NODE && (r.__cnt++, null == r[d] ? (r[d] = m(f, n + "." + d), c(r, d, n + "." + d)) : (r[d] instanceof Array || (r[d] = [r[d]], c(r, d, n + "." + d)), r[d][r[d].length] = m(f, n + "." + d)))
                    }
                    for (var p = 0; p < e.attributes.length; p++) {
                        var y = e.attributes.item(p);
                        r.__cnt++;
                        for (var h = y.value, g = 0; g < t.attributeConverters.length; g++) {
                            var v = t.attributeConverters[g];
                            v.test.call(null, y.name, y.value) && (h = v.convert.call(null, y.name, y.value))
                        }
                        r[t.attributePrefix + y.name] = h
                    }
                    var b = o(e);
                    return b && (r.__cnt++, r.__prefix = b), r["#text"] && (r.__text = r["#text"], r.__text instanceof Array && (r.__text = r.__text.join("\n")), t.escapeMode && (r.__text = a(r.__text)), t.stripWhitespaces && (r.__text = r.__text.trim()), delete r["#text"], "property" === t.arrayAccessForm && delete r["#text_asArray"], r.__text = l(r.__text, "#text", n + ".#text")), r.hasOwnProperty("#cdata-section") && (r.__cdata = r["#cdata-section"], delete r["#cdata-section"], "property" === t.arrayAccessForm && delete r["#cdata-section_asArray"]), 1 === r.__cnt && r.__text ? r = r.__text : 0 === r.__cnt && "text" === t.emptyNodeForm ? r = "" : r.__cnt > 1 && void 0 !== r.__text && t.skipEmptyTextNodesForObj && (t.stripWhitespaces && "" === r.__text || "" === r.__text.trim()) && delete r.__text, delete r.__cnt, t.keepCData || r.hasOwnProperty("__text") || !r.hasOwnProperty("__cdata") ? (t.enableToStringFunc && (r.__text || r.__cdata) && (r.toString = function () {
                        return (this.__text ? this.__text : "") + (this.__cdata ? this.__cdata : "")
                    }), r) : r.__cdata ? r.__cdata : ""
                }

                function m(e, t) {
                    return e.nodeType === x.DOCUMENT_NODE ? f(e) : e.nodeType === x.ELEMENT_NODE ? d(e, t) : e.nodeType === x.TEXT_NODE || e.nodeType === x.CDATA_SECTION_NODE ? e.nodeValue : null
                }

                function p(e, n, r, i) {
                    var o = "<" + (e && e.__prefix ? e.__prefix + ":" : "") + n;
                    if (r) for (var a = 0; a < r.length; a++) {
                        var c = r[a], u = e[c];
                        t.escapeMode && (u = s(u)), o += " " + c.substr(t.attributePrefix.length) + "=", o += t.useDoubleQuotes ? '"' + u + '"' : "'" + u + "'"
                    }
                    return o += i ? " />" : ">"
                }

                function y(e, t) {
                    return "</" + (e && e.__prefix ? e.__prefix + ":" : "") + t + ">"
                }

                function h(e, t) {
                    return e.indexOf(t, e.length - t.length) !== -1
                }

                function g(e, n) {
                    return !!("property" === t.arrayAccessForm && h(n.toString(), "_asArray") || 0 === n.toString().indexOf(t.attributePrefix) || 0 === n.toString().indexOf("__") || e[n] instanceof Function)
                }

                function v(e) {
                    var t = 0;
                    if (e instanceof Object) for (var n in e) g(e, n) || t++;
                    return t
                }

                function b(e) {
                    var n = [];
                    if (e instanceof Object) for (var r in e) r.toString().indexOf("__") === -1 && 0 === r.toString().indexOf(t.attributePrefix) && n.push(r);
                    return n
                }

                function M(e) {
                    var n = "";
                    return e.__cdata && (n += "<![CDATA[" + e.__cdata + "]]>"), e.__text && (n += t.escapeMode ? s(e.__text) : e.__text), n
                }

                function T(e) {
                    var n = "";
                    return e instanceof Object ? n += M(e) : null !== e && (n += t.escapeMode ? s(e) : e), n
                }

                function k(e, t, n) {
                    var r = "";
                    if (0 === e.length) r += p(e, t, n, !0); else for (var i = 0; i < e.length; i++) r += S(e[i], t, b(e[i]));
                    return r
                }

                function S(e, n, r) {
                    var i = "";
                    if (void 0 !== e && null !== e && "" !== e || !t.selfClosingElements) if ("object" == typeof e) if ("[object Array]" === Object.prototype.toString.call(e)) i += k(e, n, r); else if (e instanceof Date) i += p(e, n, r, !1), i += e.toISOString(), i += y(e, n); else {
                        var o = v(e);
                        o > 0 || e.__text || e.__cdata ? (i += p(e, n, r, !1), i += w(e), i += y(e, n)) : t.selfClosingElements ? i += p(e, n, r, !0) : (i += p(e, n, r, !1), i += y(e, n))
                    } else i += p(e, n, r, !1), i += T(e), i += y(e, n); else i += p(e, n, r, !0);
                    return i
                }

                function w(e) {
                    var t = "", n = v(e);
                    if (n > 0) for (var r in e) if (!g(e, r)) {
                        var i = e[r], o = b(i);
                        t += S(i, r, o)
                    }
                    return t += T(e)
                }

                function O(t) {
                    if (void 0 === t) return null;
                    if ("string" != typeof t) return null;
                    var n = null, r = null;
                    if (e) n = new e, r = n.parseFromString(t, "text/xml"); else if (window && window.DOMParser) {
                        n = new window.DOMParser;
                        var i = null, o = window.ActiveXObject || "ActiveXObject" in window;
                        if (!o) try {
                            i = n.parseFromString("INVALID", "text/xml").childNodes[0].namespaceURI
                        } catch (s) {
                            i = null
                        }
                        try {
                            r = n.parseFromString(t, "text/xml"), null !== i && r.getElementsByTagNameNS(i, "parsererror").length > 0 && (r = null)
                        } catch (s) {
                            r = null
                        }
                    } else 0 === t.indexOf("<?") && (t = t.substr(t.indexOf("?>") + 2)), r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(t);
                    return r
                }

                var C = "3.1.1";
                t = t || {}, n(), r();
                var x = {ELEMENT_NODE: 1, TEXT_NODE: 3, CDATA_SECTION_NODE: 4, COMMENT_NODE: 8, DOCUMENT_NODE: 9};
                this.asArray = function (e) {
                    return void 0 === e || null === e ? [] : e instanceof Array ? e : [e]
                }, this.toXmlDateTime = function (e) {
                    return e instanceof Date ? e.toISOString() : "number" == typeof e ? new Date(e).toISOString() : null
                }, this.asDateTime = function (e) {
                    return "string" == typeof e ? u(e) : e
                }, this.xml2dom = function (e) {
                    return O(e)
                }, this.dom2js = function (e) {
                    return m(e, null)
                }, this.js2dom = function (e) {
                    var t = this.js2xml(e);
                    return O(t)
                }, this.xml2js = function (e) {
                    var t = O(e);
                    return null != t ? this.dom2js(t) : null
                }, this.js2xml = function (e) {
                    return w(e)
                }, this.getVersion = function () {
                    return C
                }
            }
        })
    }, function (e, t, n) {
          

        function r(e, t) {
            for (var n = 0; n < e.length; n++) t(e[n])
        }

        function i(e) {
            for (var t in e) if (e.hasOwnProperty(t)) return !1;
            return !0
        }

        function o(e, t, n) {
            var r = e;
            return f(t) ? (n = t, "string" == typeof e && (r = {uri: e})) : r = m(t, {uri: e}), r.callback = n, r
        }

        function s(e, t, n) {
            return t = o(e, t, n), a(t)
        }

        function a(e) {
            function t() {
                4 === l.readyState && setTimeout(o, 0)
            }

            function n() {
                var e = void 0;
                if (e = l.response ? l.response : l.responseText || c(l), M) try {
                    e = JSON.parse(e)
                } catch (t) {
                }
                return e
            }

            function r(e) {
                return clearTimeout(p), e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))), e.statusCode = 0, u(e, T)
            }

            function o() {
                if (!m) {
                    var t;
                    clearTimeout(p), t = e.useXDR && void 0 === l.status ? 200 : 1223 === l.status ? 204 : l.status;
                    var r = T, i = null;
                    return 0 !== t ? (r = {
                        body: n(),
                        statusCode: t,
                        method: h,
                        headers: {},
                        url: y,
                        rawRequest: l
                    }, l.getAllResponseHeaders && (r.headers = d(l.getAllResponseHeaders()))) : i = new Error("Internal XMLHttpRequest Error"), u(i, r, r.body)
                }
            }

            if ("undefined" == typeof e.callback) throw new Error("callback argument missing");
            var a = !1, u = function (t, n, r) {
                a || (a = !0, e.callback(t, n, r))
            }, l = e.xhr || null;
            l || (l = e.cors || e.useXDR ? new s.XDomainRequest : new s.XMLHttpRequest);
            var f, m, p, y = l.url = e.uri || e.url, h = l.method = e.method || "GET", g = e.body || e.data,
                v = l.headers = e.headers || {}, b = !!e.sync, M = !1,
                T = {body: void 0, headers: {}, statusCode: 0, method: h, url: y, rawRequest: l};
            if ("json" in e && e.json !== !1 && (M = !0, v.accept || v.Accept || (v.Accept = "application/json"), "GET" !== h && "HEAD" !== h && (v["content-type"] || v["Content-Type"] || (v["Content-Type"] = "application/json"), g = JSON.stringify(e.json === !0 ? g : e.json))), l.onreadystatechange = t, l.onload = o, l.onerror = r, l.onprogress = function () {
                }, l.onabort = function () {
                    m = !0
                }, l.ontimeout = r, l.open(h, y, !b, e.username, e.password), b || (l.withCredentials = !!e.withCredentials), !b && e.timeout > 0 && (p = setTimeout(function () {
                    if (!m) {
                        m = !0, l.abort("timeout");
                        var e = new Error("XMLHttpRequest timeout");
                        e.code = "ETIMEDOUT", r(e)
                    }
                }, e.timeout)), l.setRequestHeader) for (f in v) v.hasOwnProperty(f) && l.setRequestHeader(f, v[f]); else if (e.headers && !i(e.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
            return "responseType" in e && (l.responseType = e.responseType), "beforeSend" in e && "function" == typeof e.beforeSend && e.beforeSend(l), l.send(g || null), l
        }

        function c(e) {
            if ("document" === e.responseType) return e.responseXML;
            var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
            return "" !== e.responseType || t ? null : e.responseXML
        }

        function u() {
        }

        var l = n(72), f = n(35), d = n(74), m = n(78);
        e.exports = s, s.XMLHttpRequest = l.XMLHttpRequest || u, s.XDomainRequest = "withCredentials" in new s.XMLHttpRequest ? s.XMLHttpRequest : l.XDomainRequest, r(["get", "put", "post", "patch", "head", "delete"], function (e) {
            s["delete" === e ? "del" : e] = function (t, n, r) {
                return n = o(t, n, r), n.method = e.toUpperCase(), a(n)
            }
        })
    }, function (e, t) {
        function n() {
            for (var e = {}, t = 0; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) r.call(n, i) && (e[i] = n[i])
            }
            return e
        }

        e.exports = n;
        var r = Object.prototype.hasOwnProperty
    }, function (e, t) {
        (function (t) {
            e.exports = t
        }).call(t, {})
    }, function (e, t) {
    }, , , , function (e, t, n) {
          
        var r = n(5).fn, i = n(1);
        r.audioToText = function (e) {
            i.verifyOptions(e, "url"), e.audioToText = i.filterObj(e, "url");
            var t = this;
            t.processCallback(e), t.sendCmd("audioToText", e)
        }
    }, function (e, t, n) {
          
        var r = n(5).fn, i = n(1);
        r.getChatroomAddress = function (e) {
            i.verifyOptions(e, "chatroomId");
            var t = this;
            t.processCallback(e), t.sendCmd("getChatroomAddress", e)
        }
    }, function (e, t, n) {
          
        var r = n(5).fn, i = n(1);
        r.kick = function (e) {
            i.verifyOptions(e, "deviceIds"), this.processCallback(e), this.sendCmd("kick", {deviceIds: e.deviceIds.slice(0)}, e.callback)
        }
    }, function (e, t, n) {
          
        var r = n(5).fn;
        r.clearDB = function (e) {
            var t = this, n = t.db;
            t.processCallback(e);
            var r = e.done;
            n.enable ? n.clear().then(r, r) : r()
        }, r.removeDB = function (e) {
            var t = this, n = t.db;
            t.processCallback(e);
            var r = e.done;
            n.enable ? n.destroy().then(r, r) : r()
        }
    }, function (e, t, n) {
          

        function r(e) {
            return "object" === ("undefined" == typeof e ? "undefined" : i(e)) && (e.msgEventSubscribes ? e = e.msgEventSubscribes : e.msgEventSubscribe ? e = e.msgEventSubscribe : e.accounts ? e = e.accounts : e.msgEvent && (e = e.msgEvent, e.time && (e.time = +e.time)), 1 === e.sync ? e.sync = !0 : 0 === e.sync && (e.sync = !1)), e
        }

        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o = n(2).Promise, s = n(5).fn, a = n(1), c = n(134), u = n(135);
        s.batchSendEventsCmds = function (e, t, n) {
            var i = this, s = 100, c = a.dropArrayDuplicates(t.accounts);
            c = a.reshape2d(c, s);
            var u = [];
            c.forEach(function (n) {
                u.push(new o(function (o, s) {
                    var c = a.simpleClone(t);
                    c.accounts = n, i.sendCmdWithResp(e, c, function (e, t) {
                        e ? s(e) : o(r(t))
                    })
                }))
            }), o.all(u).then(function (e) {
                var t = null;
                if (e.length > 0) if (e[0].msgEventSubscribe) {
                    var i = e[0].msgEventSubscribe;
                    i = r(i);
                    var o = [];
                    e.forEach(function (e) {
                        o = o.concat(e.accounts)
                    }), t = {accounts: o, msgEventSubscribe: i}
                } else t = [], e.forEach(function (e) {
                    t = t.concat(e)
                });
                n(null, t)
            }, function (e) {
                n(e, null)
            })
        }, s.publishEvent = function (e) {
            var t = this, n = new c(e);
            n = n.assembleEvent(), t.processCallback(e), this.sendCmdWithResp("publishEvent", {msgEvent: n}, function (t, n) {
                t || (n = r(n)), e.callback(t, n)
            })
        }, s.subscribeEvent = function (e) {
            var t = this;
            a.verifyOptions(e, "accounts");
            var n = new u(e);
            a.verifyParamType("accounts", e.accounts, "array"), t.processCallback(e), n = n.assembleEvent(), this.batchSendEventsCmds("subscribeEvent", {
                msgEventSubscribe: n,
                accounts: e.accounts
            }, function (t, n) {
                !t && n && (n = {failedAccounts: n}), e.callback(t, n)
            })
        }, s.unSubscribeEventsByAccounts = function (e) {
            var t = this;
            a.verifyOptions(e, "accounts"), a.verifyParamType("accounts", e.accounts, "array");
            var n = new u(e);
            n = n.assembleEvent(), t.processCallback(e), this.batchSendEventsCmds("unSubscribeEventsByAccounts", {
                msgEventSubscribe: n,
                accounts: e.accounts
            }, function (t, n) {
                !t && n && (n = {failedAccounts: n}), e.callback(t, n)
            })
        }, s.unSubscribeEventsByType = function (e) {
            var t = this, n = new u(e);
            n = n.assembleEvent(), t.processCallback(e), this.sendCmdWithResp("unSubscribeEventsByType", {msgEventSubscribe: n}, function (t, n) {
                e.callback(t)
            })
        }, s.querySubscribeEventsByAccounts = function (e) {
            var t = this;
            a.verifyOptions(e, "accounts"), a.verifyParamType("accounts", e.accounts, "array");
            var n = new u(e);
            n = n.assembleEvent(), t.processCallback(e), this.batchSendEventsCmds("querySubscribeEventsByAccounts", {
                msgEventSubscribe: n,
                accounts: e.accounts
            }, function (t, n) {
                !t && n && (n = {msgEventSubscribes: n}), e.callback(t, n)
            })
        }, s.querySubscribeEventsByType = function (e) {
            var t = this, n = new u(e);
            n = n.assembleEvent(), t.processCallback(e), this.sendCmdWithResp("querySubscribeEventsByType", {msgEventSubscribe: n}, function (t, n) {
                t || (n = {msgEventSubscribes: r(n)}), e.callback(t, n)
            })
        }
    }, function (e, t, n) {
          
        var r = n(5).fn, i = n(1), o = i.notundef, s = n(52);
        r.friendRequest = function (e) {
            i.verifyOptions(e, "type account"), i.verifyParamValid("type", e.type, s.validTypes()), this.processPs(e), this.processCallback(e);
            var t = {account: e.account, type: s.getByteFromType(e.type), ps: e.ps};
            o(e.idServer) && (t.idServer = e.idServer), this.sendCmd("friendRequest", t, e.callback)
        }, r.addFriend = function (e) {
            e.type = "addFriend", this.friendRequest(e)
        }, r.applyFriend = function (e) {
            e.type = "applyFriend", this.friendRequest(e)
        }, r.passFriendApply = function (e) {
            i.verifyOptions(e, "idServer"), e.type = "passFriendApply", this.friendRequest(e)
        }, r.rejectFriendApply = function (e) {
            i.verifyOptions(e, "idServer"), e.type = "rejectFriendApply", this.friendRequest(e)
        }, r.deleteFriend = function (e) {
            i.verifyOptions(e, "account"), this.processCallback(e), this.sendCmd("deleteFriend", {account: e.account}, e.callback)
        }, r.updateFriend = function (e) {
            this.processCallback(e);
            var t = new s(e);
            this.sendCmd("updateFriend", {friend: t, single: !0}, e.callback)
        }, r.getFriends = function (e) {
            function t() {
                n.sendCmd("getFriends", {timetag: o, NOTSTORE: "timetag"}, e.callback)
            }

            var n = this, r = n.db, o = 0;
            i.verifyOptions(e), n.processCallback(e), r.enable ? r.getFriendsTimetag().then(function (e) {
                o = e, t()
            }, t) : t()
        }
    }, function (e, t, n) {
          
        var r = n(5).fn, i = n(1), o = i.isArray, s = n(17);
        r.mergeObjArray = function (e, t, n) {
            return e || (e = []), t ? (o(t) || (t = [t]), t.length ? (n = n || {}, i.mergeObjArray(e, t, n)) : e) : e
        }, r.cutObjArray = function (e, t, n) {
            return e && t ? (o(t) || (t = [t]), t.length ? (n = n || {}, i.cutObjArray(e, t, n)) : e) : e
        }, r.mergeLoginPorts = function (e, t) {
            return this.mergeObjArray(e, t, {keyPath: "deviceId"})
        }, r.cutLoginPorts = function (e, t) {
            return this.cutObjArray(e, t, {keyPath: "deviceId", sortPath: "type"})
        }, r.mergeRelations = function (e, t) {
            return this.mergeObjArray(e, t, {keyPath: "account"})
        }, r.cutRelations = function (e, t) {
            return this.cutObjArray(e, t, {keyPath: "account"})
        }, r.findRelation = function (e, t) {
            return i.findObjInArray(e, {keyPath: "account", value: t})
        }, r.mergeFriends = function (e, t) {
            return this.mergeObjArray(e, t, {keyPath: "account"})
        }, r.cutFriends = function (e, t) {
            return this.cutObjArray(e, t, {keyPath: "account"})
        }, r.cutFriendsByAccounts = function (e, t) {
            o(t) || (t = [t]);
            var n = t.map(function (e) {
                return {account: e}
            });
            return this.cutFriends(e, n)
        }, r.findFriend = function (e, t) {
            return i.findObjInArray(e, {keyPath: "account", value: t})
        }, r.mergeUsers = function (e, t) {
            return this.mergeObjArray(e, t, {keyPath: "account"})
        }, r.findUser = function (e, t) {
            return i.findObjInArray(e, {keyPath: "account", value: t})
        }, r.mergeTeams = function (e, t) {
            return this.mergeObjArray(e, t, {keyPath: "teamId"})
        }, r.cutTeams = function (e, t) {
            return this.cutObjArray(e, t, {keyPath: "teamId"})
        }, r.findTeam = function (e, t) {
            return i.findObjInArray(e, {keyPath: "teamId", value: t})
        }, r.assembleTeamOwner = s.assembleOwner, r.assembleTeamMembers = s.assembleMembers, r.genTeamMemberId = s.genId, r.mergeTeamMembers = function (e, t) {
            return this.mergeObjArray(e, t)
        }, r.cutTeamMembers = function (e, t) {
            return this.cutObjArray(e, t)
        }, r.cutTeamMembersByAccounts = function (e, t, n) {
            o(n) || (n = [n]);
            var r = s.assembleMembers({teamId: t}, n);
            return this.cutTeamMembers(e, r)
        }, r.findTeamMember = function (e, t) {
            return i.findObjInArray(e, {keyPath: "id", value: t})
        }, r.mergeSessions = function (e, t) {
            return this.mergeObjArray(e, t, {sortPath: "updateTime", desc: !0})
        }, r.cutSessions = function (e, t) {
            return this.cutObjArray(e, t)
        }, r.cutSessionsByIds = function (e, t) {
            o(t) || (t = [t]);
            var n = t.map(function (e) {
                return {id: e}
            });
            return this.cutSessions(e, n)
        }, r.findSession = function (e, t) {
            return i.findObjInArray(e, {keyPath: "id", value: t})
        }, r.mergeMsgs = function (e, t) {
            return this.mergeObjArray(e, t, {keyPath: "idClient", sortPath: "time"})
        }, r.cutMsgs = function (e, t) {
            return this.cutObjArray(e, t, {keyPath: "idClient"})
        }, r.cutMsgsByIdClients = function (e, t) {
            o(t) || (t = [t]);
            var n = t.map(function (e) {
                return {idClient: e}
            });
            return this.cutMsgs(e, n)
        }, r.findMsg = function (e, t) {
            return i.findObjInArray(e, {keyPath: "idClient", value: t})
        }, r.mergeSysMsgs = function (e, t) {
            return this.mergeObjArray(e, t, {keyPath: "idServer", desc: !0})
        }, r.cutSysMsgs = function (e, t) {
            return this.cutObjArray(e, t, {keyPath: "idServer"})
        }, r.cutSysMsgsByIdServers = function (e, t) {
            o(t) || (t = [t]);
            var n = t.map(function (e) {
                return {idServer: e}
            });
            return this.cutSysMsgs(e, n)
        }, r.findSysMsg = function (e, t) {
            return i.findObjInArray(e, {keyPath: "idServer", value: t})
        }
    }, function (e, t, n) {
          
        var r = n(5).fn, i = n(1), o = i.undef, s = i.notundef, a = n(9), c = n(22), u = n(23), l = n(4);
        r.beforeSendMsg = function (e) {
            var t = this, n = t.protocol, r = e.msg;
            r.to === t.account && (r.fromDeviceId = a.deviceId), r.userUpdateTime = n.myInfo && n.myInfo.updateTime;
            var i;
            switch (r.getScene()) {
                case"p2p":
                    i = "sendMsg";
                    break;
                case"team":
                    i = "sendTeamMsg"
            }
            e.filter && (i = "sendFilterMsg", r.filter = !0), e.cmd = i
        }, r.afterSendMsg = function (e) {
            var t = e.rtnMsg, n = c.genSessionByMsg(t);
            this.protocol.onUpdateSession(n)
        }, r.beforeForwardMsg = function (e) {
            i.verifyOptions(e, "msg scene to"), e.msg.scene = e.scene, e.msg.to = e.to
        }, r.markMsgRead = function (e) {
            var t = this, n = t.protocol;
            return !e || t.db.enable || n.options.autoMarkRead ? void t.logger.warn("不需要标记消息为已收到 (没有消息, 或者启用了数据库, 或者启用了自动标记已收到)") : void n.markMsgRead(e, !0)
        }, r.sendMsgReceipt = function (e) {
            var t = this;
            if (i.verifyOptions(e), t.processCallback(e), !e.msg) return void e.done();
            var n = "target idClient time";
            i.verifyOptions(e, "msg");
            var r = e.msg;
            i.verifyOptions(r, n, !0, "msg."), t.protocol.shouldSendMsgReceipt(r) ? t.sendCmd("sendMsgReceipt", {
                msgReceipt: {
                    to: r.target,
                    idClient: r.idClient,
                    time: r.time
                }
            }, e.callback) : e.done()
        }, r.isMsgRemoteRead = function (e) {
            return this.protocol.isMsgRemoteRead(e)
        }, r.deleteMsg = function (e) {
            var t = this;
            i.verifyOptions(e, "msg");
            var n = e.msg;
            if ("out" !== n.flow || "success" !== n.status || n.from === n.to || n.isLocal) return e.done(l.newParamError("只能删除自己发送给别人的, 并且发送成功的消息"), e);
            i.verifyOptions(n, ["scene", "to", "from", "time", "idClient", "idServer"], !0, "msg."), i.verifyParamValid("msg.scene", n.scene, t.message.validScenes);
            var r = i.simpleClone(n);
            this.processPs(r), this.processCallback(e), "p2p" === r.scene ? r.type = "deleteMsgP2p" : r.type = "deleteMsgTeam", r.deletedIdClient = r.idClient, r.deletedIdServer = r.idServer, r = new u(r), t.sendCmd("deleteMsg", {
                sysMsg: r,
                msg: n
            }, e.callback)
        }, r.getHistoryMsgs = function (e) {
            var t = this;
            i.verifyOptions(e, "scene to"), i.verifyParamValid("scene", e.scene, t.message.validScenes), "undefined" == typeof e.beginTime && (e.beginTime = 0), i.verifyParamType("beginTime", e.beginTime, "number"), "undefined" == typeof e.endTime && (e.endTime = 0), i.verifyParamType("endTime", e.endTime, "number"), "undefined" != typeof e.lastMsgId && null !== e.lastMsgId || (e.lastMsgId = "0"), "undefined" == typeof e.limit && (e.limit = 100), i.verifyParamType("limit", e.limit, "number"), i.verifyParamMax("limit", e.limit, 100), s(e.reverse) ? i.verifyParamType("reverse", e.reverse, "boolean") : e.reverse = !1, s(e.asc) ? i.verifyParamType("asc", e.asc, "boolean") : e.asc = !1, t.processCallback(e), e.asc && (e.cbaop = function (e, t) {
                e || (t.msgs = t.msgs.reverse())
            });
            var n;
            switch (e.scene) {
                case"p2p":
                    n = "getHistoryMsgs";
                    break;
                case"team":
                    n = "getTeamHistoryMsgs"
            }
            var r = {
                scene: e.scene,
                to: e.to,
                beginTime: e.beginTime,
                endTime: e.endTime,
                lastMsgId: e.lastMsgId,
                limit: e.limit,
                reverse: e.reverse
            };
            t.sendCmd(n, r, e.callback)
        }, r.searchHistoryMsgs = function (e) {
            var t = this;
            i.verifyOptions(e, "scene to keyword"), i.verifyParamValid("scene", e.scene, t.message.validScenes), "undefined" == typeof e.beginTime && (e.beginTime = 0), i.verifyParamType("beginTime", e.beginTime, "number"), "undefined" == typeof e.endTime && (e.endTime = 0), i.verifyParamType("endTime", e.endTime, "number"), "undefined" == typeof e.limit && (e.limit = 100), i.verifyParamType("limit", e.limit, "number"), i.verifyParamMax("limit", e.limit, 100), s(e.reverse) ? i.verifyParamType("reverse", e.reverse, "boolean") : e.reverse = !1, s(e.asc) ? i.verifyParamType("asc", e.asc, "boolean") : e.asc = !1, t.processCallback(e), e.asc && (e.cbaop = function (e, t) {
                e || (t.msgs = t.msgs.reverse())
            });
            var n;
            switch (e.scene) {
                case"p2p":
                    n = "searchHistoryMsgs";
                    break;
                case"team":
                    n = "searchTeamHistoryMsgs"
            }
            var r = i.filterObj(e, "scene to beginTime endTime keyword limit reverse");
            t.sendCmd(n, r, e.callback)
        }, r.getLocalMsgs = function (e) {
            function t() {
                e.msgs = c, e.done(n, e)
            }

            var n, r = this, a = r.db, c = [];
            i.verifyOptions(e);
            var u = !1;
            s(e.start) && (u = !0, i.verifyParamType("start", e.start, "number"));
            var l = !1;
            s(e.end) && (l = !0, i.verifyParamType("end", e.end, "number")), u && l && e.end <= e.start && i.onParamError("参数 end 必须晚于 start"), o(e.limit) && (e.limit = 100), i.verifyParamType("limit", e.limit, "number"), i.verifyParamMin("limit", e.limit, 1), r.processCallback(e), a.enable ? a.getMsgs(e).then(function (e) {
                c = e, t()
            }, function (e) {
                n = e, t()
            }) : t()
        }, r.getLocalMsgByIdClient = function (e) {
            function t() {
                e.msg = s, e.done(n, e)
            }

            var n, r = this, o = r.db, s = null;
            i.verifyOptions(e, "idClient"), r.processCallback(e), o.enable ? o.getMsgByIdClient(e.idClient).then(function (e) {
                e && (s = e), t()
            }, function (e) {
                n = e, t()
            }) : t()
        }, r.getLocalMsgsByIdClients = function (e) {
            function t() {
                e.msgs = s, e.done(n, e)
            }

            var n, r = this, o = r.db, s = [];
            i.verifyOptions(e, "idClients"), i.verifyParamType("idClients", e.idClients, "array"), r.processCallback(e), o.enable ? o.getMsgsByIdClients(e.idClients).then(function (e) {
                s = e.filter(function (e) {
                    return !!e
                }), t()
            }, function (e) {
                n = e, t()
            }) : t()
        }, r.updateLocalMsg = function (e) {
            function t() {
                e.msg = s, e.done(n, e)
            }

            var n, r = this, o = r.db, s = null;
            if (i.verifyOptions(e, "idClient"), r.processCallback(e), o.enable) {
                var a = i.filterObj(e, "idClient localCustom");
                o.updateMsg(a).then(function (e) {
                    s = e, t()
                }, function (e) {
                    n = e, t()
                })
            } else t()
        }, r.deleteLocalMsg = function (e) {
            function t() {
                e.done(n, e)
            }

            var n, r = this;
            i.verifyOptions(e, "msg");
            var o = e.msg;
            i.verifyOptions(o, "idClient sessionId", !0, "msg."), r.processCallback(e), r.protocol.deleteLocalMsg(o).then(t, function (e) {
                n = e, t()
            })
        }, r.deleteLocalMsgsBySession = function (e) {
            function t() {
                e.done(n, e)
            }

            var n, r = this, o = r.db;
            i.verifyOptions(e, "scene to"), i.verifyParamValid("scene", e.scene, r.message.validScenes), e.sessionId = e.scene + "-" + e.to, r.processCallback(e), o.enable ? o.deleteMsgsBySessionId(e.sessionId).then(function () {
                t()
            }, function (e) {
                n = e, t()
            }) : t()
        }, r.deleteAllLocalMsgs = function (e) {
            function t() {
                e.done(n, e)
            }

            var n, r = this, i = r.db;
            r.processCallback(e), i.enable && i.deleteAllMsgs().then(function () {
                t()
            }, function (e) {
                n = e, t()
            })
        }
    }, , function (e, t) {
        "use strict"
    }, function (e, t) {
        "use strict"
    }, function (e, t, n) {
          
        var r = n(5).fn, i = n(41), o = n(1), s = o.undef;
        r.getPushNotificationMultiportConfig = function () {
            return this.protocol.getPushNotificationMultiportConfig()
        }, r.updatePushNotificationMultiportConfig = function (e) {
            o.verifyOptions(e), s(e.shouldPushNotificationWhenPCOnline) && (e.shouldPushNotificationWhenPCOnline = !0), e.donnop = new i(e), this.processCallback(e), this.sendCmd("updateDonnop", e)
        }
    }, function (e, t, n) {
          
        var r = n(5).fn, i = n(1);
        r.markInBlacklist = function (e) {
            i.verifyOptions(e, "account isAdd"), i.verifyParamType("isAdd", e.isAdd, "boolean"), this.processCallback(e), this.sendCmd("markInBlacklist", {
                account: e.account,
                isAdd: e.isAdd
            }, e.callback)
        }, r.addToBlacklist = function (e) {
            return e.isAdd = !0, this.markInBlacklist(e)
        }, r.removeFromBlacklist = function (e) {
            return e.isAdd = !1, this.markInBlacklist(e)
        }, r.markInMutelist = function (e) {
            i.verifyOptions(e, "account"), i.verifyParamType("isAdd", e.isAdd, "boolean"), this.processCallback(e), this.sendCmd("markInMutelist", {
                account: e.account,
                isAdd: e.isAdd
            }, e.callback)
        }, r.addToMutelist = function (e) {
            return e.isAdd = !0, this.markInMutelist(e)
        }, r.removeFromMutelist = function (e) {
            return e.isAdd = !1, this.markInMutelist(e)
        }, r.getRelations = function (e) {
            function t() {
                n.sendCmd("getRelations", {timetag: o, NOTSTORE: "timetag"}, e.callback)
            }

            var n = this, r = n.db, o = 0;
            e = i.verifyOptions(e), n.processCallback(e), r.enable ? r.getRelationsTimetag().then(function (e) {
                o = e, t()
            }, t) : t()
        }
    }, function (e, t, n) {
          
        var r = n(5).fn;
        r.getRobots = function (e) {
            e = e || {}, e.type = "getRobots", this.processCallback(e), this.sendCmd("sync", {sync: {robots: 0}}, e.callback)
        }
    }, function (e, t, n) {
          
        var r = n(5).fn, i = n(1), o = i.undef, s = i.notundef;
        r.setCurrSession = function (e) {
            var t = this;
            t.resetSessionUnread(e), t.protocol.setCurrSession(e)
        }, r.resetSessionUnread = function (e) {
            var t = this;
            if (t.protocol.resetSessionUnread(e), t.options.syncSessionUnread) {
                var n = t.protocol.findSession(e);
                if (!n) return void t.logger.warn("no session, " + e);
                if (!n.lastMsg) return void t.logger.warn("no session.lastMsg, session " + e);
                if (!n.scene || !n.to) return void t.logger.warn("no scene or to, session " + e);
                var r = n.lastMsg.time;
                if (n && n.ack && n.ack >= r) return void t.logger.warn("no need to ack, session " + e);
                var i = {scene: "p2p" === n.scene ? 0 : 1, to: n.to, timetag: r};
                t.sendCmd("markSessionAck", i)
            }
        }, r.resetCurrSession = function () {
            this.protocol.setCurrSession("")
        }, r.insertLocalSession = function (e) {
            function t() {
                e.session = r, e.done(n, e)
            }

            var n, r, o = this;
            i.verifyOptions(e, "scene to"), i.verifyParamValid("scene", e.scene, o.message.validScenes), o.processCallback(e), o.protocol.insertLocalSession(e).then(function (e) {
                r = e, t()
            }, function (e) {
                n = e, t()
            })
        }, r.getLocalSessions = function (e) {
            function t() {
                e.sessions = c, e.done(n, e)
            }

            var n, r = this, a = r.db, c = [];
            i.verifyOptions(e), o(e.limit) && (e.limit = 100), i.verifyParamType("limit", e.limit, "number"), i.verifyParamMax("limit", e.limit, 100), s(e.reverse) ? i.verifyParamType("reverse", e.reverse, "boolean") : e.reverse = !1, r.processCallback(e), a.enable ? a.getSessions(e).then(function (e) {
                c = e, r.protocol.mergeSessions(c), t()
            }, function (e) {
                n = e, t()
            }) : t()
        }, r.updateLocalSession = function (e) {
            function t() {
                r.protocol.onUpdateSession(s), e.session = s, e.done(n, e)
            }

            var n, r = this, o = r.db;
            i.verifyOptions(e, "id"), r.processCallback(e);
            var s = i.filterObj(e, "id localCustom");
            o.enable ? o.updateSession(s).then(function (e) {
                s = e, t()
            }, function (e) {
                n = e, t()
            }) : t()
        }, r.deleteLocalSession = function (e) {
            function t() {
                e.done(n, e)
            }

            var n, r = this, o = r.db;
            i.verifyOptions(e, "id"), r.processCallback(e), o.enable ? o.deleteSession(e.id).then(function () {
                r.protocol.deleteLocalSession(e.id), t()
            }, function (e) {
                n = e, t()
            }) : t()
        }, r.deleteSession = function (e) {
            i.verifyOptions(e, "scene to"), this.processCallback(e), e.sessions = [{
                scene: e.scene,
                to: e.to
            }], this.deleteSessions(e)
        }, r.deleteSessions = function (e) {
            i.verifyOptions(e, "sessions"), i.verifyParamType("sessions", e.sessions, "array"), e.sessions.forEach(function (e, t) {
                i.verifyOptions(e, "scene to", !0, "sessions[" + t + "].")
            }), this.processCallback(e), this.sendCmd("deleteSessions", {
                sessions: e.sessions.map(function (e) {
                    return e.scene + "|" + e.to
                })
            }, e.callback)
        }
    }, function (e, t, n) {
          
        var r = n(2).Promise, i = n(5).fn, o = n(1), s = o.undef, a = o.notundef, c = n(23);
        i.markSysMsgRead = function (e) {
            function t() {
                e.done(n, e)
            }

            var n, i = this, s = i.db, a = r.resolve(), c = i.protocol;
            o.verifyOptions(e, "sysMsgs");
            var u = e.sysMsgs;
            o.isArray(u) || (u = [u]), s.enable ? a = s.markSysMsgRead(u).then(function (e) {
                u = e, c.onUpdateSysMsg(e)
            }) : (u = u.filter(function (e) {
                return !e.read
            }), u.length && (c.options.autoMarkRead || c.markSysMsgRead(u, !0), u.forEach(function (e) {
                e.read = !0
            }), c.onUpdateSysMsg(u))), a.then(function () {
                return c.reduceSysMsgUnread(u)
            }).then(t, function (e) {
                n = e, t()
            })
        }, i.sendCustomSysMsg = function (e) {
            var t = this;
            o.verifyOptions(e, "scene to content"), o.verifyParamValid("scene", e.scene, t.message.validScenes), t.processCallback(e), "p2p" === e.scene ? e.type = "customP2p" : e.type = "customTeam", e.sysMsg = new c(e);
            var n = "sendCustomSysMsg";
            return e.filter && (n = "sendFilterCustomSysMsg"), t.sendCmd(n, {
                sysMsg: e.sysMsg,
                single: !0
            }, e.callback), t.formatReturnSysMsg(e.sysMsg)
        }, i.formatReturnSysMsg = function (e) {
            var t = this;
            return e = o.copy(e), t.protocol.completeSysMsg(e), e.status = "sending", e = c.reverse(e)
        }, i.getLocalSysMsgs = function (e) {
            function t() {
                e.sysMsgs = u, e.done(n, e)
            }

            var n, r = this, i = r.db, u = [];
            o.verifyOptions(e), e.category && o.verifyParamValid("category", e.category, c.validCategories), e.type && o.verifyParamValid("type", e.type, c.validTypes), s(e.limit) && (e.limit = 100), o.verifyParamType("limit", e.limit, "number"), o.verifyParamMax("limit", e.limit, 100), a(e.reverse) ? o.verifyParamType("reverse", e.reverse, "boolean") : e.reverse = !1, r.processCallback(e), i.enable ? i.getSysMsgs(e).then(function (e) {
                u = e, t()
            }, function (e) {
                n = e, t()
            }) : t()
        }, i.updateLocalSysMsg = function (e) {
            function t() {
                e.sysMsg = s, e.done(n, e)
            }

            var n, r = this, i = r.db, s = null;
            if (o.verifyOptions(e, "idServer"), r.processCallback(e), i.enable) {
                var a = o.filterObj(e, "idServer state localCustom");
                i.updateSysMsg(a).then(function (e) {
                    s = e, t()
                }, function (e) {
                    n = e, t()
                })
            } else t()
        }, i.deleteLocalSysMsg = function (e) {
            function t() {
                e.done(n, e)
            }

            var n, r = this, i = r.db;
            o.verifyOptions(e, "idServer"), r.processCallback(e), i.enable ? i.deleteSysMsg(e.idServer).then(function () {
                t()
            }, function (e) {
                n = e, t()
            }) : t()
        }, i.deleteAllLocalSysMsgs = function (e) {
            function t() {
                r.protocol.onUpdateSysMsgUnread({}), e.done(n, e)
            }

            var n, r = this, i = r.db;
            r.processCallback(e), i.enable && i.deleteAllSysMsgs().then(function () {
                t()
            }, function (e) {
                n = e, t()
            })
        }
    }, function (e, t, n) {
          
        var r = n(5).fn, i = n(1), o = i.undef, s = n(24), a = n(17);
        r.createTeam = function (e) {
            i.verifyOptions(e, "type name"), o(e.accounts) ? e.accounts = [] : i.verifyParamType("accounts", e.accounts, "array"), e.action = "create", this.processPs(e), this.processCallback(e), e.team = new s(e);
            var t = {team: e.team, accounts: e.accounts.slice(0), ps: e.ps};
            this.sendCmd("createTeam", t, e.callback)
        }, r.updateTeam = function (e) {
            i.verifyOptions(e, "teamId"), e.action = "update", this.processCallback(e), e.team = new s(e), this.sendCmd("updateTeam", {
                team: e.team,
                single: !0
            }, e.callback)
        }, r.addTeamMembers = function (e) {
            i.verifyOptions(e, "teamId accounts"), i.verifyParamType("accounts", e.accounts, "array"), this.processPs(e), this.processCallback(e);
            var t = {teamId: e.teamId, accounts: e.accounts.slice(0), ps: e.ps};
            this.sendCmd("addTeamMembers", t, e.callback)
        }, r.removeTeamMembers = function (e) {
            i.verifyOptions(e, "teamId accounts"), i.verifyParamType("accounts", e.accounts, "array"), this.processCallback(e);
            var t = {teamId: e.teamId, accounts: e.accounts.slice(0)};
            this.sendCmd("removeTeamMembers", t, e.callback)
        }, r.acceptTeamInvite = function (e) {
            i.verifyOptions(e, "idServer teamId from"), this.processCallback(e);
            var t = {idServer: e.idServer, teamId: e.teamId, from: e.from};
            this.sendCmd("acceptTeamInvite", t, e.callback)
        }, r.rejectTeamInvite = function (e) {
            i.verifyOptions(e, "idServer teamId from"), this.processPs(e), this.processCallback(e);
            var t = {idServer: e.idServer, teamId: e.teamId, from: e.from, ps: e.ps};
            this.sendCmd("rejectTeamInvite", t, e.callback)
        }, r.applyTeam = function (e) {
            i.verifyOptions(e, "teamId"), this.processPs(e), this.processCallback(e);
            var t = {teamId: e.teamId, ps: e.ps};
            this.sendCmd("applyTeam", t, e.callback)
        }, r.passTeamApply = function (e) {
            i.verifyOptions(e, "idServer teamId from"), this.processCallback(e);
            var t = {idServer: e.idServer, teamId: e.teamId, from: e.from};
            this.sendCmd("passTeamApply", t, e.callback)
        }, r.rejectTeamApply = function (e) {
            i.verifyOptions(e, "idServer teamId from"), this.processPs(e), this.processCallback(e);
            var t = {idServer: e.idServer, teamId: e.teamId, from: e.from, ps: e.ps};
            this.sendCmd("rejectTeamApply", t, e.callback)
        }, r.addTeamManagers = function (e) {
            i.verifyOptions(e, "teamId accounts"), i.verifyParamType("accounts", e.accounts, "array"), this.processCallback(e);
            var t = {teamId: e.teamId, accounts: e.accounts.slice(0)};
            this.sendCmd("addTeamManagers", t, e.callback)
        }, r.removeTeamManagers = function (e) {
            i.verifyOptions(e, "teamId accounts"), i.verifyParamType("accounts", e.accounts, "array"), this.processCallback(e);
            var t = {teamId: e.teamId, accounts: e.accounts.slice(0)};
            this.sendCmd("removeTeamManagers", t, e.callback)
        }, r.updateInfoInTeam = function (e) {
            i.verifyOptions(e, "teamId"), this.processCallback(e), this.sendCmd("updateInfoInTeam", {
                teamMember: new a(e),
                single: !0
            }, e.callback)
        }, r.updateNickInTeam = function (e) {
            i.verifyOptions(e, "teamId account"), this.processCallback(e), this.sendCmd("updateNickInTeam", {
                teamMember: new a(e),
                single: !0
            }, e.callback)
        }, r.updateMuteStateInTeam = function (e) {
            var t = this;
            i.verifyOptions(e, "teamId account mute"), t.processCallback(e), e.mute = e.mute ? 1 : 0, t.sendCmd("updateMuteStateInTeam", e)
        }, r.getMutedTeamMembers = function (e) {
            var t = this;
            i.verifyOptions(e, "teamId"), t.processCallback(e), t.sendCmd("getMutedTeamMembers", e)
        }, r.leaveTeam = function (e) {
            i.verifyOptions(e, "teamId"), this.processCallback(e);
            var t = {teamId: e.teamId};
            this.sendCmd("leaveTeam", t, e.callback)
        }, r.transferTeam = function (e) {
            i.verifyOptions(e, "teamId account leave"), i.verifyParamType("leave", e.leave, "boolean"), this.processCallback(e);
            var t = {teamId: e.teamId, account: e.account, leave: e.leave};
            this.sendCmd("transferTeam", t, e.callback)
        }, r.dismissTeam = function (e) {
            i.verifyOptions(e, "teamId"), this.processCallback(e);
            var t = {teamId: e.teamId};
            this.sendCmd("dismissTeam", t, e.callback)
        }, r.getTeam = function (e) {
            function t() {
                o.sendCmd("getTeam", {teamId: e.teamId}, e.callback)
            }

            function n(e) {
                o.logger.warn("get team", r, e)
            }

            var r, o = this, s = o.db;
            i.verifyOptions(e, "teamId"), o.processCallback(e), e.cbaop = function (e, t) {
                e || n(t)
            }, r = e.teamId, s.enable && !e.sync ? s.getTeam(r).then(function (r) {
                r ? (n(r), e.done(null, r)) : t()
            }, t) : t()
        }, r.getTeams = function (e) {
            function t() {
                n.sendCmd("getTeams", {timetag: o, NOTSTORE: "timetag"}, e.callback)
            }

            var n = this, r = n.db, o = 0;
            i.verifyOptions(e), n.processCallback(e), r.enable ? r.getTeamsTimetag().then(function (e) {
                o = e, t()
            }, t) : t()
        }, r.getTeamMembers = function (e) {
            function t() {
                n.sendCmd("getTeamMembers", {teamId: e.teamId, timetag: o, NOTSTORE: "timetag"}, e.callback)
            }

            var n = this, r = n.db, o = 0;
            i.verifyOptions(e, "teamId"), n.processCallback(e), r.enable && !e.sync ? r.getTeam(e.teamId).then(function (n) {
                if (n) {
                    var i = n.memberUpdateTime;
                    r.getTeamMembersTimetag(e.teamId).then(function (n) {
                        !isNaN(i) && !isNaN(n) && i <= n ? r.getTeamMembers(e.teamId).then(function (t) {
                            e.done(null, {teamId: e.teamId, members: t})
                        }, t) : (o = n, t())
                    }, t)
                } else t()
            }, t) : t()
        }, r.notifyForNewTeamMsg = function (e) {
            var t = this;
            i.verifyOptions(e, "teamIds");
            var n = t.protocol.notifyForNewTeamMsg(e.teamIds);
            n.then(function (t) {
                e.done(null, t)
            }, function (t) {
                e.done(t)
            })
        }, r.getMyTeamMembers = function (e) {
            var t = this;
            i.verifyOptions(e, "teamIds");
            var n = t.processCallbackPromise(e);
            return t.sendCmd("getMyTeamMembers", e), n
        }, r.getLocalTeams = function (e) {
            function t() {
                e.teams = s, e.done(n, e)
            }

            var n, r = this, o = r.db, s = [];
            i.verifyOptions(e, "teamIds"), i.verifyParamType("teamIds", e.teamIds, "array"), r.processCallback(e), o.enable ? o.getTeamsByTeamIds(e.teamIds).then(function (e) {
                s = e.filter(function (e) {
                    return !!e
                }), t()
            }, function (e) {
                n = e, t()
            }) : t()
        }, r.getLocalTeamMembers = function (e) {
            function t() {
                e.members = s, e.done(n, e)
            }

            var n, r = this, o = r.db, s = [];
            i.verifyOptions(e, "teamId accounts"), i.verifyParamType("accounts", e.accounts, "array"), r.processCallback(e), o.enable ? o.getInvalidTeamMembers(e.teamId, e.accounts).then(function (e) {
                s = e.filter(function (e) {
                    return !!e
                }), t()
            }, function (e) {
                n = e, t()
            }) : t()
        }, r.deleteLocalTeam = function (e) {
            function t() {
                e.done(n, e)
            }

            var n, r = this, o = r.db;
            i.verifyOptions(e, "teamId"), r.processCallback(e), o.enable ? o.deleteTeam(e.teamId).then(function () {
                t()
            }, function (e) {
                n = e, t()
            }) : t()
        }
    }, function (e, t, n) {
          
        var r = n(5).fn, i = n(1), o = i.objs2accounts, s = n(30);
        r.updateMyInfo = function (e) {
            i.verifyOptions(e), this.processCallback(e), e.user = new s(e), delete e.user.account, this.sendCmd("updateMyInfo", {
                user: e.user,
                single: !0
            }, e.callback)
        }, r.getMyInfo = function (e) {
            var t = this;
            return e = e || {}, e.account = t.account, t.getUser(e)
        }, r.getUser = function (e) {
            function t() {
                o.sendCmd("getUsers", {accounts: [r], single: !0}, e.callback)
            }

            function n(e) {
                o.logger.warn("get user", r, e)
            }

            var r, o = this, s = o.db;
            i.verifyOptions(e, "account"), o.processCallback(e), e.cbaop = function (e, t) {
                if (!e) return t = t[0] || null, n(t), t
            }, r = e.account, e.sync ? t() : s.enable ? s.getUser(r).then(function (r) {
                r ? (n(r), e.done(null, r)) : t()
            }, t) : t()
        }, r.getUsers = function (e) {
            function t() {
                s.sendCmd("getUsers", {accounts: r, single: !0}, e.callback)
            }

            function n(e) {
                s.logger.warn("get users", o(e), e)
            }

            var r, s = this, a = s.db, c = [];
            i.verifyOptions(e, "accounts"), i.verifyParamType("accounts", e.accounts, "array"), s.processCallback(e), e.cbaop = function (e, t) {
                if (!e) return t = t.concat(c), n(t), t
            }, r = i.deduplicate(e.accounts), i.verifyArrayMax("accounts", e.accounts, 150), e.sync ? t() : a.enable ? a.getUsers(r).then(function (i) {
                if (i && i.length === r.length) n(i), e.done(null, i); else {
                    c = i;
                    var s = o(i), a = [];
                    r.forEach(function (e) {
                        s.indexOf(e) === -1 && a.push(e)
                    }), r = a, t()
                }
            }, t) : t()
        }
    }, function (e, t) {
          
        var n = {version: 7}, r = {
            kv: {key: {keyPath: "key"}},
            timetag: {key: {keyPath: "name"}},
            blacklist: {key: {keyPath: "account"}},
            mutelist: {key: {keyPath: "account"}},
            friend: {key: {keyPath: "account"}},
            user: {key: {keyPath: "account"}},
            team: {key: {keyPath: "teamId"}},
            teamMember: {key: {keyPath: "id"}, indexes: {teamId: {unique: !1}, account: {unique: !1}}},
            msg: {
                key: {autoIncrement: !0},
                indexes: {
                    idClient: {unique: !0},
                    sessionId: {unique: !1},
                    time: {unique: !1},
                    type: {unique: !1},
                    sessionType: {unique: !1},
                    status: {unique: !1},
                    sessionTime: {key: ["sessionId", "time"], unique: !1}
                }
            },
            msg1: {
                key: {keyPath: "idClient"},
                indexes: {
                    sessionId: {unique: !1},
                    time: {unique: !1},
                    status: {unique: !1},
                    sessionTime: {key: ["sessionId", "time"], unique: !1}
                }
            },
            sysMsg: {
                key: {autoIncrement: !0},
                indexes: {idServer: {unique: !0}, category: {unique: !1}, type: {unique: !1}}
            },
            sysMsgUnread: {key: {keyPath: "type"}},
            session: {key: {keyPath: "id"}, indexes: {updateTime: {unique: !1}}}
        };
        n.keyPath = function (e) {
            return r[e].key.keyPath
        }, n.schema = function () {
            return window._nimForceSyncIM = !0, r
        }, e.exports = n
    }, function (e, t, n) {
          
        var r = n(2).Promise, i = n(8).fn, o = n(1), s = "friend";
        i.mergeFriends = function (e, t, n) {
            var r = this;
            return r.updateAndDelete(s, e, t).then(function () {
                return r.logger.warn("merge friends"), n && r.updateFriendTimetag(n), [e, t, n]
            })
        }, i.putFriend = function (e) {
            return this.put(s, e)
        }, i.updateFriend = function (e) {
            var t = this;
            e = o.copy(e);
            var n = e.account;
            return this.getOne(s, null, n, {modifyObj: e}).then(function (r) {
                return r ? t.logger.warn("update friend", n, e) : t.logger.warn("update friend no", n), r
            })
        }, i.deleteFriend = function (e) {
            var t = this, n = t.remove(s, e), i = t.deleteUser(e);
            return r.all([n, i])
        }, i.getFriends = function () {
            var e = function (e) {
                return e.valid
            };
            return this.getAll(s, {filter: e})
        }, i.getFriend = function (e) {
            return this.getOne(s, null, e)
        }
    }, function (e, t, n) {
          
        var r = n(8).fn, i = "kv";
        r.setKey = function (e, t) {
            return this.put(i, {key: e, value: t})
        }, r.getKey = function (e) {
            return this.get(i, e).then(function (e) {
                return e && e.value
            })
        }, r.setDonnop = function (e) {
            return this.setKey("donnop", e)
        }, r.getDonnop = function () {
            return this.getKey("donnop")
        }
    }, function (e, t, n) {
          
        var r = n(2).Promise, i = n(8).fn, o = n(1), s = "session", a = "msg1", c = "sessionId", u = "time",
            l = "status", f = "sessionTime";
        i.putMsg = function (e) {
            var t = this;
            return o.isArray(e) || (e = [e]), !e.length || e[0].filter ? r.resolve() : (e = e.filter(function (e) {
                return !e.ignore
            }), t.put(a, e))
        }, i.updateMsg = function (e) {
            var t = this;
            if (!e.filter) {
                var n = e.idClient, r = o.filterObj(e, "resend status idServer time localCustom");
                return t.getOne(a, null, n, {modifyObj: r}).then(function (e) {
                    return e ? t.logger.warn("update msg", n, r) : t.logger.warn("udpate msg no", n), e
                })
            }
        }, i.getMsgs = function (e) {
            var t = this;
            t.checkDB(), e = e || {};
            var n = u, r = !1, i = !1, s = e.sessionId, c = e.sessionIds;
            o.exist(s) ? (r = !0, n = f) : o.exist(c) && (r = !0, o.isString(c) ? (n = f, s = c) : Array.isArray(c) && (1 === c.length ? (n = f, s = c[0]) : i = !0));
            var l = e.start || 0, d = e.end || 1 / 0, m = l, p = d;
            r && !i && (m = [s, l], p = [s, d]);
            var y = e.desc !== !1, h = e.limit || 100, g = !1, v = !1, b = e.type, M = e.types;
            o.exist(b) ? g = !0 : o.exist(M) && (g = !0, o.isString(M) ? b = M : Array.isArray(M) && (1 === M.length ? b = M[0] : v = !0));
            var T = e.keyword || "", k = e.filterFunc, S = void 0;
            return (i || g || T || o.isFunction(k)) && (S = function (e) {
                if (i && c.indexOf(e.sessionId) === -1) return !1;
                if (g) if (v) {
                    if (M.indexOf(e.type) === -1) return !1
                } else if (b !== e.type) return !1;
                if (T) {
                    var t = e.text || e.tip || "";
                    if (t.indexOf(T) === -1) return !1
                }
                return !k || k(e)
            }), t.server.query(a, n).bound(m, p, !0, !0).desc(y).limit(h).filter(S).execute()
        }, i.getMsgCountAfterAck = function (e) {
            var t = this;
            e = e || {};
            var n = e, i = n.sessionId;
            return t.checkDB(), t.server.query(a, f).bound([i, e.ack], [i, 1 / 0], !0, !0).execute().then(function (e) {
                var t = e.filter(function (e) {
                    return "out" !== e.flow
                });
                return r.resolve(t.length)
            })
        }, i.amendMsg = function (e) {
            return e ? (o.notexist(e.text) && (e.text = ""), e) : null
        }, i.getMsgByIdClient = function (e) {
            var t = this;
            return t.getOne(a, null, e).then(function (e) {
                return t.amendMsg(e)
            })
        }, i.getMsgsByIdClients = function (e) {
            var t, n = this, i = [];
            return e.forEach(function (e) {
                t = n.getMsgByIdClient(e), i.push(t)
            }), r.all(i)
        }, i.clearSendingMsgs = function () {
            var e = this;
            return e.getOnly(a, l, "sending", {modifyObj: {status: "fail"}}).then(function (t) {
                e.logger.warn("fail msgs", t)
            })
        }, i.deleteMsg = function (e) {
            var t, n = this, i = [];
            return o.isArray(e) || (e = [e]), e.forEach(function (e) {
                t = n.getOne(a, null, e, {remove: !0}).then(function (e) {
                    return n.logger.warn("delete msg", e), e
                }), i.push(t)
            }), 1 === i.length ? i[0] : r.all(i)
        }, i.deleteMsgsBySessionId = function (e) {
            var t = this;
            return t.getOnly(a, c, e, {remove: !0})
        }, i.deleteAllMsgs = function () {
            var e = this, t = e.clearTable(a), n = e.clearTable(s);
            return r.all([t, n])
        }
    }, function (e, t, n) {
          
        var r = n(2).Promise, i = n(8).fn, o = n(1), s = "blacklist", a = "mutelist";
        i.mergeRelations = function (e, t, n, i, o) {
            var c = this, u = c.updateAndDelete(s, e, t), l = c.updateAndDelete(a, n, i);
            return r.all([u, l]).then(function () {
                return c.logger.warn("merge relations"), c.updateRelationTimetag(o), [e, t, n, i, o]
            })
        }, i.getRelations = function () {
            var e = this, t = e.getAll(s), n = e.getAll(a);
            return r.all([t, n])
        }, i.markInBlacklist = function (e) {
            var t = this;
            if (e = o.copy(e), e.isAdd) {
                var n = e.record;
                return t.put(s, n)
            }
            var r = e.account;
            return t.remove(s, r)
        }, i.markInMutelist = function (e) {
            var t = this;
            if (e = o.copy(e), e.isAdd) {
                var n = e.record;
                return t.put(a, n)
            }
            var r = e.account;
            return t.remove(a, r)
        }
    }, function (e, t, n) {
          
        var r = n(8).fn, i = n(1), o = i.notundef, s = "session", a = "updateTime";
        r.putSession = function (e) {
            return e = i.merge({}, e), delete e.unread, this.modifyOrPut({
                table: s,
                obj: e,
                key: "id",
                modifyObjWhenPut: {unread: 0}
            })
        }, r.getSessions = function (e) {
            e = e || {};
            var t, n = !e.reverse, r = e.limit || 100, i = e.lastSessionId, c = e.sessionId, u = !1;
            if (o(i)) t = function (e) {
                return !!u || (e.id === i && (u = !0), !1)
            }; else if (o(c)) return this.get(s, c);
            return this.getAll(s, {index: a, desc: n, limit: r, filter: t})
        }, r.getSession = function (e) {
            return this.get(s, e)
        }, r.updateSession = function (e) {
            var t = this, n = e.id,
                r = i.filterObj(e, "ack unread lastMsg localCustom msgReceiptTime msgReceiptServerTime");
            return Object.keys(e).forEach(function (t) {
                0 === t.indexOf("last") && (r[t] = e[t])
            }), this.getOne(s, null, n, {modifyObj: r}).then(function (e) {
                return e ? t.logger.warn("update session", n, r) : t.logger.warn("update session no", n), e
            })
        }, r.resetSessionUnread = function (e) {
            return this.updateSession({id: e, unread: 0})
        }, r.deleteSession = function (e) {
            return this.remove(s, e)
        }
    }, function (e, t, n) {
          
        var r = n(2).Promise, i = n(8).fn, o = n(1), s = o.notundef, a = "sysMsg", c = "idServer", u = "type",
            l = "category", f = "sysMsgUnread";
        i.putSysMsg = function (e) {
            var t = this;
            return new r(function (n) {
                function r() {
                    s--, 0 === s && n(i)
                }

                if (o.isArray(e) || (e = [e]), !e[0].filter) {
                    var i = [], s = e.length;
                    e.forEach(function (e) {
                        e = o.copy(e), t.put(a, e).then(function (e) {
                            i.push(e[0]), r()
                        }, r)
                    })
                }
            })
        }, i.getSysMsgs = function (e) {
            var t = this;
            e = e || {};
            var n = !e.reverse, r = e.limit || 100, i = null, o = null;
            e.category && (i = l, o = e.category), e.type && (i = u, o = e.type);
            var c, f = e.lastIdServer, d = !1, m = e.read;
            return (s(f) || s(m)) && (c = function (e) {
                function t() {
                    return !s(m) || e.read === m
                }

                return s(f) ? (f = "" + f, d ? t() : (e.idServer === f && (d = !0), !1)) : t()
            }), e = {filter: c, desc: n, limit: r}, i ? t.getOnly(a, i, o, e) : t.getAll(a, e)
        }, i.getSysMsgByIdServer = function (e) {
            return this.getOne(a, c, e)
        }, i.updateSysMsg = function (e) {
            var t = this;
            if (!e.filter) {
                var n = "" + e.idServer, r = o.filterObj(e, "read state error localCustom");
                return this.getOne(a, c, n, {modifyObj: r}).then(function (e) {
                    return e ? t.logger.warn("update sysMsg", n, r) : t.logger.warn("update sysMsg no", n), e
                })
            }
        }, i.markSysMsgRead = function (e) {
            var t = this;
            return new r(function (n, i) {
                o.isArray(e) || (e = [e]);
                var s, a, c = [], u = [];
                e.forEach(function (e) {
                    s = t.getSysMsgByIdServer(e.idServer).then(function (e) {
                        e && !e.read && (a = t.updateSysMsg({idServer: e.idServer, read: !0}), u.push(a))
                    }, i), c.push(s)
                }), r.all(c).then(function () {
                    r.all(u).then(function (e) {
                        n(e)
                    }, i)
                }, i)
            })
        }, i.deleteSysMsg = function (e) {
            var t, n = this, i = [];
            return o.isArray(e) || (e = [e]), e.forEach(function (e) {
                e = "" + e, t = n.getOne(a, c, e, {remove: !0}), i.push(t)
            }), 1 === i.length ? i[0] : r.all(i)
        }, i.deleteAllSysMsgs = function () {
            var e = this, t = e.clearTable(a), n = e.clearTable(f);
            return r.all([t, n])
        }, i.getSysMsgUnread = function () {
            return this.getAll(f).then(function (e) {
                var t = {};
                return e.forEach(function (e) {
                    t[e.type] = e.num
                }), t
            })
        }, i.updateSysMsgUnread = function (e) {
            var t = this;
            e = o.copy(e);
            var n = [];
            return Object.keys(e).forEach(function (t) {
                n.push({type: t, num: e[t]})
            }), this.put(f, n).then(function () {
                return t.logger.warn("update sysMsg unread", e), e
            })
        }
    }, function (e, t, n) {
          

        function r(e) {
            return e.valid && e.validToCurrentUser
        }

        function i(e) {
            return e && e.valid
        }

        function o(e) {
            return e && c.fillUndef(e, {mute: !1, custom: ""}), e
        }

        var s = n(2).Promise, a = n(8).fn, c = n(1), u = n(4), l = n(24), f = n(17), d = "team", m = "teamId",
            p = "account", y = "teamMember";
        a.mergeTeams = function (e, t, n) {
            var r = this, i = r.put(d, e), o = r.leaveTeams(t, n);
            return s.all([i, o]).then(function () {
                return r.logger.warn("merge teams"), r.updateTeamTimetag(n), [e, t, n]
            })
        }, a.putTeam = function (e) {
            if (e) return c.isArray(e) || (e = [e]), e.forEach(function (e) {
                e.validToCurrentUser = !0
            }), this.put(d, e)
        }, a.updateTeam = function (e) {
            var t = this;
            e = c.copy(e);
            var n = e.teamId;
            return t.getOne(d, null, n, {modifyObj: e}).then(function (r) {
                return r ? (t.logger.warn("update team", n, e), r) : (t.logger.warn("update team no", n), t.putTeam(e))
            })
        }, a.transferTeam = function (e, t, n) {
            var r = this, i = e.teamId, o = e.memberUpdateTime,
                s = {teamId: i, account: t, type: "normal", updateTime: o},
                a = {teamId: i, account: n, type: "owner", updateTime: o};
            return r.updateTeamMembers([s, a]).then(function () {
                return r.putTeam(e).then(function () {
                    return r.logger.warn("transfer team", e.teamId, t, n), [e, t, n]
                })
            })
        }, a.leaveTeam = function (e) {
            var t = this;
            return t.updateTeam({teamId: e, validToCurrentUser: !1}).then(function () {
                return t.removeAllTeamMembers(e)
            })
        }, a.dismissTeam = function (e, t) {
            var n = this, r = {teamId: e, valid: !1, validToCurrentUser: !1, updateTime: t};
            return n.updateTeam(r).then(function () {
                return n.removeAllTeamMembers(e)
            })
        }, a.leaveTeams = function (e, t) {
            var n, r = this, i = [];
            return e.forEach(function (e) {
                n = r.leaveTeam(e.teamId, t), i.push(n)
            }), s.all(i)
        }, a.getTeamsByTeamIds = function (e) {
            var t, n = this, r = [];
            return e.forEach(function (e) {
                t = n.getTeam(e), r.push(t)
            }), s.all(r)
        }, a.getTeam = function (e) {
            e = "" + e;
            var t = this;
            return t.getOne(d, null, e).then(function (e) {
                return t.updateTeamProperties([e]), e
            })
        }, a.getTeams = function () {
            var e = this;
            return e.getAll(d, {filter: r}).then(function (t) {
                return e.updateTeamProperties(t), t
            })
        }, a.updateTeamProperties = function (e) {
            e.forEach(function (e) {
                l.fillProperties(e)
            })
        }, a.mergeTeamMembers = function (e, t, n, r) {
            var i = this, o = i.putTeamMembers(t), a = i.updateTeamMembers(n);
            return s.all([o, a]).then(function () {
                return i.logger.warn("merge members", e), i.updateTeamMemberTimetag(e, r)
            })
        }, a.putTeamMembers = function (e) {
            return this.put(y, e)
        }, a.getTeamMembersByAccount = function (e) {
            var t = this;
            return t.getOnly(y, p, e, {filter: i, mapper: o}).then()
        }, a.getTeamMembers = function (e) {
            var t = this;
            e = "" + e;
            var n = function (e) {
                return e.valid
            };
            return t.getOnly(y, m, e, {filter: n, mapper: o}).then(function (e) {
                return t.updateTeamMemberProperties(e).then(function () {
                    return e
                })
            })
        }, a.updateTeamMemberProperties = function (e) {
            var t, n = this, r = [];
            return e.forEach(function (e) {
                f.fillProperties(e) && (t = n.updateTeamMember(e), r.push(t))
            }), s.all(r)
        }, a.getInvalidTeamMembers = function (e, t) {
            var n = this;
            e = "" + e;
            var r, i = [];
            return t.forEach(function (t) {
                r = n.getOne(y, null, f.genId(e, t)).then(function (e) {
                    return o(e)
                }), i.push(r)
            }), s.all(i)
        }, a.updateTeamMember = function (e) {
            var t = this, n = e.teamId, r = e.account, i = f.genId(n, r),
                s = c.filterObj(e, "nickInTeam muteTeam mute custom updateTime type valid");
            return this.getOne(y, null, i, {modifyObj: s, mapper: o}).then(function (e) {
                return e ? t.logger.warn("update member", n, r, s) : t.logger.warn("update member no", n, r), e
            })
        }, a.updateTeamMembers = function (e) {
            var t = this;
            if (!e.length) return s.resolve();
            var n, r = [];
            return e.forEach(function (e) {
                n = t.updateTeamMember(e), r.push(n)
            }), s.all(r)
        }, a.updateTeamManagers = function (e, t, n, r) {
            var i = t.map(function (t) {
                return {teamId: e, account: t, type: n ? "manager" : "normal", updateTime: r}
            });
            return this.updateTeamMembers(i)
        }, a.removeTeamMembersByAccounts = function (e, t) {
            var n = t.map(function (t) {
                return {teamId: e, account: t, valid: !1}
            });
            return this.updateTeamMembers(n)
        }, a.removeAllTeamMembers = function (e) {
            var t = this, n = {valid: !1};
            return t.getOnly(y, m, e, {modifyObj: n}).then(function () {
                return t.logger.warn("invalid all teamMembers", e), t.deleteTeamMemberTimetag(e)
            })
        }, a.deleteTeamMembers = function (e) {
            var t = this;
            return t.getOnly(y, m, e, {remove: !0}).then(function () {
                t.logger.warn("delete all teamMembers", e), t.deleteTeamMemberTimetag(e)
            })
        }, a.deleteTeam = function (e) {
            var t, n = this, i = [];
            return c.isArray(e) || (e = [e]), e.forEach(function (e) {
                e = "" + e, t = n.get(d, e).then(function (t) {
                    if (t && r(t)) throw u.stillInTeamError();
                    var i = n.remove(d, e), o = n.deleteTeamMembers(e);
                    return s.all([i, o])
                }), i.push(t)
            }), 1 === i.length ? i[0] : s.all(i)
        }
    }, function (e, t, n) {
          
        var r = n(8).fn;
        r.getTimetags = function (e) {
            var t = {}, n = function (e) {
                return t[e.name] = e.value, e
            };
            return this.getAll("timetag", {filter: e, mapper: n}).then(function () {
                return t
            })
        }, r.getTeamMemberTimetags = function () {
            return this.getTimetags(function (e) {
                return e.name.indexOf("team-") !== -1
            })
        }, r.getTimetag = function (e) {
            return this.getOne("timetag", null, e).then(function (e) {
                return e = e || {value: 0}, e.value
            })
        }, r.getTeamMemberTimetag = function (e) {
            return this.getTimetag("team-" + e)
        }, r.updateTimetag = function (e, t) {
            var n = {name: e, value: t};
            return this.put("timetag", n)
        }, r.updateMyInfoTimetag = function (e) {
            return this.updateTimetag("myInfo", e)
        }, r.updateRelationTimetag = function (e) {
            return this.updateTimetag("relations", e)
        }, r.getRelationsTimetag = function () {
            return this.getTimetag("relations")
        }, r.updateFriendTimetag = function (e) {
            return this.updateTimetag("friends", e)
        }, r.getFriendsTimetag = function () {
            return this.getTimetag("friends")
        }, r.updateFriendUserTimetag = function (e) {
            return this.updateTimetag("friendUsers", e)
        }, r.updateTeamTimetag = function (e) {
            return this.updateTimetag("teams", e)
        }, r.getTeamsTimetag = function () {
            return this.getTimetag("teams")
        }, r.updateTeamMemberTimetag = function (e, t) {
            return this.updateTimetag("team-" + e, t)
        }, r.getTeamMembersTimetag = function (e) {
            return this.getTimetag("team-" + e)
        }, r.updateMyTeamMembersTimetag = function (e) {
            return this.updateTimetag("myTeamMembers", e)
        }, r.updateRoamingMsgTimetag = function (e) {
            return this.updateTimetag("roamingMsgs", e)
        }, r.updateMsgReceiptsTimetag = function (e) {
            return this.updateTimetag("msgReceipts", e)
        }, r.updateDonnopTimetag = function (e) {
            return this.updateTimetag("donnop", e)
        }, r.updateDeleteMsgTimetag = function (e) {
            return this.updateTimetag("deleteMsg", e)
        }, r.updateSessionAck = function (e) {
            return this.updateTimetag("sessionAck", e)
        }, r.deleteTimetag = function (e) {
            return this.remove("timetag", e)
        }, r.deleteTeamMemberTimetag = function (e) {
            return this.deleteTimetag("team-" + e)
        }
    }, function (e, t, n) {
          
        var r = n(2).Promise, i = n(8).fn, o = n(1), s = "user";
        i.mergeMyInfo = function (e, t) {
            var n = this;
            return n.put(s, e).then(function () {
                return t ? n.updateMyInfoTimetag(e.updateTime) : e
            })
        }, i.mergeFriendUsers = function (e, t) {
            var n = this;
            return n.putUsers(e).then(function () {
                n.updateFriendUserTimetag(t)
            })
        }, i.putUsers = function (e) {
            return this.put(s, e)
        }, i.putUser = function (e) {
            return this.put(s, e)
        }, i.updateUser = function (e) {
            var t = this;
            e = o.copy(e);
            var n = e.account;
            return this.getOne(s, null, n, {modifyObj: e}).then(function (r) {
                return r ? t.logger.warn("update user", n, e) : t.logger.warn("update user no", n), r
            })
        }, i.putUsersIfIsFriend = function (e) {
            var t, n = this, i = [], o = [];
            return e.forEach(function (e) {
                t = n.getFriend(e.account).then(function (r) {
                    return r && (t = n.putUser(e), o.push(t)), r
                }), i.push(t)
            }), r.all(i).then(function () {
                return r.all(o).then(function (e) {
                    return e
                })
            })
        }, i.deleteUser = function (e) {
            return this.remove(s, e)
        }, i.getUser = function (e) {
            return this.getOne(s, null, e)
        }, i.getUsers = function (e) {
            function t(t) {
                return e.indexOf(t.account) !== -1
            }

            return this.getAll(s, {filter: t})
        }, i.getAllUsers = function () {
            return this.getAll(s)
        }
    }, , function (e, t, n) {
          
        var r = n(5), i = n(39);
        i(r), e.exports = r
    }, , , , , , , , , , , function (e, t, n) {
          

        function r() {
        }

        var i = n(29), o = n(1);
        r.prototype = Object.create(i.prototype), r.verifyFile = function (e) {
            o.verifyOptions(e, "dur", !0, "file.")
        }, e.exports = r
    }, function (e, t, n) {
          

        function r(e) {
            o.verifyOptions(e, "content"), e.type = "custom", i.call(this, e), this.attach = e.content
        }

        var i = n(14), o = n(1);
        r.prototype = Object.create(i.prototype), r.reverse = function (e) {
            var t = i.reverse(e);
            return t.content = e.attach, t
        }, e.exports = r
    }, function (e, t, n) {
          

        function r(e) {
            e.type = "geo", o.verifyOptions(e, "geo"), o.verifyOptions(e.geo, "lng lat title", !0, "geo."), o.verifyParamType("geo.lng", e.geo.lng, "number"), o.verifyParamType("geo.lat", e.geo.lat, "number"), o.verifyParamType("geo.title", e.geo.title, "string"), i.call(this, e), this.attach = JSON.stringify(e.geo)
        }

        var i = n(14), o = n(1);
        r.prototype = Object.create(i.prototype), r.reverse = function (e) {
            var t = i.reverse(e);
            return e.attach = e.attach ? "" + e.attach : "", t.geo = e.attach ? JSON.parse(e.attach) : {}, t
        }, e.exports = r
    }, function (e, t, n) {
          

        function r() {
        }

        var i = n(1), o = n(29);
        r.prototype = Object.create(o.prototype), r.verifyFile = function (e) {
            i.verifyOptions(e, "w h", !0, "file.")
        }, e.exports = r
    }, function (e, t, n) {
          
        var r = n(1), i = function (e) {
                this.account = e.account
            }, o = i.prototype, s = o.Message = n(14), a = o.TextMessage = n(131), c = o.FileMessage = n(29),
            u = o.GeoMessage = n(126), l = o.NotificationMessage = n(129), f = o.CustomMessage = n(125),
            d = o.TipMessage = n(132), m = o.RobotMessage = n(130);
        o.validScenes = s.validScenes, o.validTypes = s.validTypes, o.reverse = function (e) {
            var t, n = s.getType(e);
            switch (n) {
                case"text":
                    t = a.reverse(e);
                    break;
                case"image":
                case"audio":
                case"video":
                case"file":
                    t = c.reverse(e);
                    break;
                case"geo":
                    t = u.reverse(e);
                    break;
                case"notification":
                    t = l.reverse(e);
                    break;
                case"custom":
                    t = f.reverse(e);
                    break;
                case"tip":
                    t = d.reverse(e);
                    break;
                case"robot":
                    t = m.reverse(e);
                    break;
                default:
                    t = s.reverse(e)
            }
            return s.setExtra(t, this.account), t
        }, o.reverseMsgs = function (e, t) {
            var n, i, o = this;
            return e.map(function (e) {
                return e = o.reverse(e), t && (n = t.modifyObj, n && (e = r.merge(e, n)), i = t.mapper, r.isFunction(i) && (e = i(e))), e
            })
        }, e.exports = i
    }, function (e, t, n) {
          

        function r() {
        }

        var i = n(1), o = i.notundef, s = n(14), a = n(16).getInstance("IM"), c = n(24), u = n(30), l = {
            0: "addTeamMembers",
            1: "removeTeamMembers",
            2: "leaveTeam",
            3: "updateTeam",
            4: "dismissTeam",
            5: "passTeamApply",
            6: "transferTeam",
            7: "addTeamManagers",
            8: "removeTeamManagers",
            9: "acceptTeamInvite",
            10: "updateTeamMute",
            101: "netcallMiss",
            102: "netcallBill"
        };
        r.prototype = Object.create(s.prototype), r.reverse = function (e) {
            var t = s.reverse(e);
            if (e.attach = e.attach ? "" + e.attach : "", e.attach) {
                var n = JSON.parse(e.attach);
                if (t.attach = {type: l[n.id] || n.id}, o(n.data)) {
                    var r = n.data;
                    o(r.tinfo) && (t.attach.team = c.reverse(a.unserialize(r.tinfo, "team"), !0)), o(r.ids) && (t.attach.accounts = r.ids), o(r.id) && (t.attach.account = r.id), o(r.uinfos) && (t.attach.users = r.uinfos.map(function (e) {
                        return u.reverse(a.unserialize(e, "user"))
                    })), o(r.mute) && (t.attach.mute = 1 === +r.mute), o(r.attach) && (t.attach.custom = r.attach), o(r.channel) && (t.attach.channelId = r.channel), o(r.calltype) && (t.attach.netcallType = r.calltype), o(r.duration) && (t.attach.duration = r.duration), o(r.time) && (t.attach.time = r.time), t.attach.accounts && t.attach.accounts.length <= 2 && t.from === t.to && t.attach.accounts.some(function (e) {
                        if (e !== t.to) return t.to = e, !0
                    })
                }
            } else t.attach = {};
            return t
        }, e.exports = r
    }, function (e, t, n) {
          

        function r(e) {
            o.verifyOptions(e, "content"), o.undef(e.robotAccid) && (e.robotAccid = e.to);
            var t = e.content;
            switch (t.type) {
                case"welcome":
                    o.undef(e.body) && (this.body = "欢迎消息");
                    break;
                case"text":
                    o.verifyOptions(t, "content"), o.undef(e.body) && (this.body = t.content);
                    break;
                case"link":
                    o.verifyOptions(t, "target")
            }
            t.type && (t.type = s[t.type]), t = {
                param: t,
                robotAccid: e.robotAccid
            }, this.attach = JSON.stringify(t), e.type = "robot", i.call(this, e)
        }

        var i = n(14), o = n(1), s = {welcome: "00", text: "01", link: "03"},
            a = {"01": "text", "02": "image", "03": "answer", 11: "template"};
        r.prototype = Object.create(i.prototype), r.reverse = function (e) {
            var t = i.reverse(e);
            if ("robot" === t.type) {
                var n = JSON.parse(e.attach);
                if (n.param && (n.param.type = a[n.param.type] || "unknown"), n.robotMsg) {
                    n = o.merge(n, n.robotMsg);
                    var r = n.message;
                    "bot" === n.flag ? n.message = r.map(function (e) {
                        return e.type = a[e.type] || "unknown", e
                    }) : "faq" === n.flag, delete n.robotMsg
                }
                t.content = n
            }
            return t
        }, e.exports = r
    }, function (e, t, n) {
          

        function r(e) {
            o.verifyOptions(e, "text"), e.type = "text", i.call(this, e)
        }

        var i = n(14), o = n(1);
        r.prototype = Object.create(i.prototype), r.reverse = function (e) {
            var t = i.reverse(e);
            return t
        }, e.exports = r
    }, function (e, t, n) {
          

        function r(e) {
            o.verifyOptions(e, "tip"), e.type = "tip", i.call(this, e), this.body = e.tip
        }

        var i = n(14), o = n(1);
        r.prototype = Object.create(i.prototype), r.reverse = function (e) {
            var t = i.reverse(e);
            return t.text = "", t.tip = e.body, e.attach && (t.attach = e.attach), t
        }, e.exports = r
    }, function (e, t, n) {
          

        function r() {
        }

        var i = n(29), o = n(1);
        r.prototype = Object.create(i.prototype), r.verifyFile = function (e) {
            o.verifyOptions(e, "dur w h", !0, "file.")
        }, e.exports = r
    }, function (e, t, n) {
          

        function r(e) {
            if (i.verifyOptions(e, "type value validTime"), i.verifyParamType("type", e.type, "number"), i.verifyParamMin("type", e.type, 1e5), i.verifyParamType("value", e.value, "number"), this.type = e.type, this.value = e.value, this.idClient = i.guid(), o(e.custom) && (this.custom = "" + e.custom), this.validTime = e.validTime || 604800, i.verifyParamType("validTime", this.validTime, "number"), i.verifyParamMin("validTime", this.validTime, 60), i.verifyParamMax("validTime", this.validTime, 604800), o(e.broadcastType)) {
                if (i.verifyParamType("broadcastType", e.broadcastType, "number"), [1, 2].indexOf(e.broadcastType) < 0) throw new s('参数错误"broadcastType":只能为1或2');
                this.broadcastType = e.broadcastType
            } else this.broadcastType = 2;
            o(e.sync) ? (i.verifyParamType("sync", e.sync, "boolean"), this.sync = e.sync) : this.sync = !1
        }

        var i = n(1), o = i.notundef, s = n(4);
        r.prototype.assembleEvent = function () {
            return {
                type: this.type,
                value: this.value,
                idClient: this.idClient,
                custom: this.custom || "",
                validTime: this.validTime,
                broadcastType: this.broadcastType,
                sync: this.sync === !0 ? 1 : 0
            }
        }, e.exports = r
    }, function (e, t, n) {
          

        function r(e) {
            i.verifyOptions(e, "type"), i.verifyParamType("type", e.type, "number"), i.findObjIndexInArray([1, 2, 3], e.type) < 0 && i.verifyParamMin("type", e.type, 1e5), this.type = e.type, o(e.subscribeTime) ? (i.verifyParamType("subscribeTime", e.subscribeTime, "number"), i.verifyParamMin("subscribeTime", e.subscribeTime, 60), i.verifyParamMax("subscribeTime", e.subscribeTime, 2592e3), this.subscribeTime = e.subscribeTime) : this.subscribeTime = 2592e3, o(e.sync) ? (i.verifyParamType("sync", e.sync, "boolean"), this.sync = e.sync) : this.sync = !0
        }

        var i = n(1), o = i.notundef;
        r.prototype.assembleEvent = function (e) {
            return {type: this.type, subscribeTime: this.subscribeTime, sync: this.sync === !0 ? 1 : 0}
        }, e.exports = r
    }, function (e, t, n) {
          

        function r() {
        }

        var i = n(1);
        r.parse = function (e) {
            var t = i.copy(e);
            return t.isBlacked = "1" === t.isBlacked, t.isMuted = "1" === t.isMuted, t.createTime = +t.createTime, t.updateTime = +t.updateTime, t
        }, e.exports = r
    }, , , , , , function (e, t, n) {
          
        var r = n(3).fn, i = n(21);
        r.assembleLogin = function () {
            return {login: this.assembleIMLogin()}
        }, r.afterLogin = function () {
            var e = this, t = e.db;
            if (t.enable) {
                var n = e.account;
                e.options.appendAppKeyForDBName && (n += "-" + e.options.appKey), e.db.init(n).then(function () {
                    e.syncData()
                }, function (n) {
                    e.logger.warn("no db", n), t.reset(!1), e.syncData()
                })
            } else e.logger.warn("no db"), e.syncData()
        }, r.processAuth = function (e) {
            var t = this;
            switch (e.cmd) {
                case"login":
                    e.error || (e.obj = e.content.loginRes, t.connectionId = e.content.loginRes.connectionId, t.onLoginPortsChange(e, 2));
                    break;
                case"kicked":
                    return void t.onKicked(e);
                case"multiPortLogin":
                    t.onLoginPortsChange(e, e.content.state);
                    break;
                case"kick":
                    e.error || (e.obj.deviceIds = e.content.deviceIds)
            }
        }, r.onLoginPortsChange = function (e, t) {
            var n = this, r = e.content.loginPorts;
            if (r && r.length) {
                var o = !0;
                switch (t) {
                    case 2:
                        o = !0;
                        break;
                    case 3:
                        o = !1
                }
                r.forEach(function (e) {
                    e.type = i.reverseType(e.type), e.time = +e.time, e.online = o
                }), r = r.filter(function (e) {
                    return e.connectionId !== n.connectionId
                }), r.length && (n.logger.info("on login ports", r), n.options.onloginportschange(r))
            }
        }, r.kickedReasons = ["", "samePlatformKick", "serverKick", "otherPlatformKick", "silentlyKick"], r.kickedMessages = ["", "不允许同一个帐号在多个地方同时登录", "被服务器踢了", "被其它端踢了", "悄悄被踢"]
    }, function (e, t, n) {
          
        var r = n(3).fn;
        r.processChatroom = function (e) {
            var t = this;
            switch (e.cmd) {
                case"getChatroomAddress":
                    t.onChatroomAddress(e)
            }
        }, r.onChatroomAddress = function (e) {
            e.error || (e.obj.address = e.content.address)
        }
    }, function (e, t, n) {
          
        var r = n(3).fn, i = n(6), o = n(1), s = n(19);
        r.refreshSocketUrl = function () {
            function e(e) {
                n.socketUrls = [], e = JSON.parse(e), e.common.link.forEach(function (e) {
                    n.socketUrls.push(i.formatSocketUrl({url: e, secure: n.options.secure}))
                }), e.common["link.default"].forEach(function (e) {
                    e = i.formatSocketUrl({
                        url: e,
                        secure: n.options.secure
                    }), n.socketUrls.indexOf(e) === -1 && n.socketUrls.push(e)
                }), n.logger.log("got socket urls", n.socketUrls), n.connectToUrl(n.getNextSocketUrl())
            }

            function t(e) {
                console && void 0, n.onDisconnect()
            }

            var n = this, r = n.options, a = i.info, c = r.lbsUrl;
            c = c + o.genUrlSep(c) + "k=" + r.appKey + "&id=" + r.account + "&sv=" + a.sdkVersion + "&pv=" + a.protocolVersion, n.logger.log("refresh lbs", c), s(c, {
                proxyUrl: o.url2origin(c) + "/lbs/res/cors/nej_proxy_frame.html",
                timeout: i.xhrTimeout,
                onload: e,
                onerror: t
            })
        }
    }, function (e, t, n) {
          

        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function i(e) {
            e = e || {};
            var t = c.copy(e);
            return t.clientType && (t.clientType = u[t.clientType] || ""), t.serverCustom && (t.custom = JSON.parse(t.serverCustom), "string" == typeof t.custom[0] && (t.custom = t.custom[0]), delete t.serverCustom), t
        }

        var o = n(9), s = r(o), a = n(3).fn, c = n(1), u = s["default"].clientTypeMap;
        a.processEventService = function (e) {
            var t = this, n = e.content, r = e.error, o = t.options || {};
            switch (r && this.logger.error(r), e.cmd) {
                case"pushEvent":
                    if (c.isFunction(o.onpushevents)) {
                        var s = {msgEvents: [i(n.msgEvent)]};
                        o.onpushevents(s)
                    }
                    break;
                case"pushEvents":
                    if (c.isFunction(o.onpushevents)) {
                        var a = n.msgEvents, u = a.map(function (e) {
                            return i(e)
                        });
                        a = {msgEvents: u}, o.onpushevents(a)
                    }
            }
        }
    }, function (e, t, n) {
          
        var r = n(3).fn;
        r.processFilter = function (e) {
            var t = this;
            switch (e.cmd) {
                case"sendFilterMsg":
                    t.onSendMsg(e, !0);
                    break;
                case"filterMsg":
                    t.onMsg(e, !0);
                    break;
                case"filterSysMsg":
                    t.onSysMsg(e, !0);
                    break;
                case"sendFilterCustomSysMsg":
                    t.onSendSysMsg(e, !0)
            }
        }
    }, function (e, t, n) {
          
        var r = n(2).Promise, i = n(3).fn, o = n(1), s = o.objs2accounts, a = n(52), c = n(30);
        i.processFriend = function (e) {
            var t = this, n = e.obj, r = e.content, i = e.error;
            switch (e.cmd) {
                case"friendRequest":
                    t.updateFriendSysMsg(e), i || t.onFriendRequest(n);
                    break;
                case"syncFriendRequest":
                    t.onFriendRequest(r, !0);
                    break;
                case"deleteFriend":
                    i || t.onDeleteFriend(n);
                    break;
                case"syncDeleteFriend":
                    t.onDeleteFriend(r, !0);
                    break;
                case"updateFriend":
                    i || t.onUpdateFriend(n);
                    break;
                case"syncUpdateFriend":
                    t.onUpdateFriend(r.friend, !0);
                    break;
                case"getFriends":
                    t.onFriends(e);
                    break;
                case"syncFriends":
                    t.onFriends(e);
                    break;
                case"syncFriendUsers":
                    t.onFriendUsers(e)
            }
        }, i.onFriends = function (e) {
            function t() {
                m && d.forEach(function (e) {
                    e = a.reverse(e), e.valid ? p.push(e) : y.push(e)
                }), c.logger.warn("parse friends", s(p), p, "delete", s(y), y), d.length ? (m = !0, o = e.content.timetag) : m = !1
            }

            function n(t, n) {
                e.promise = new r(function (e, r) {
                    function s() {
                        f ? (i(), e(), t()) : u.getFriends().then(function (n) {
                            p = n, i(), e(), t()
                        }).then(void 0, function (e) {
                            e._msg = "get friends error", r(e), n(e)
                        })
                    }

                    m ? u.mergeFriends(p, y, o).then(function () {
                        s()
                    }).then(void 0, function (e) {
                        e._msg = "merge friends error", r(e), n(e)
                    }) : (c.logger.warn("no merge friends"), s())
                }).then(void 0, function (e) {
                    throw e._msg = "merge friends data error", n(e), e
                })
            }

            function i() {
                c.timetags.friends = o, p.invalid = y, f ? (c.syncResult.friends = p, c.syncResult.invalidFriends = y) : (c.logger.warn("get friends", s(p), p), e.obj = p)
            }

            var o, c = this, u = c.db, l = e.error, f = c.packetFromSync(e), d = e.content.friends, m = !0, p = [],
                y = [], h = new r(function (e, r) {
                    l ? f && r(l) : (t(), u.enable ? n(e, r) : (i(), e()))
                });
            f && (h.cmd = "friends", c.syncPromiseArray.push(h))
        }, i.onFriendRequest = function (e, t) {
            var n = r.resolve(), i = this, o = i.db, s = e.type;
            s = e.type = a.getTypeFromByte(s) || s;
            var c = "addFriend" === s || "passFriendApply" === s;
            if (c) {
                var u = e.friend = a.assembleFriend(e.account);
                o.enable && (n = o.putFriend(u))
            }
            return t && i.onSyncFriendAction(e), n
        }, i.onSyncFriendAction = function (e) {
            var t = this;
            t.logger.info("on sync friendAction", e), t.options.onsyncfriendaction(e)
        }, i.onDeleteFriend = function (e, t) {
            var n = r.resolve(), i = this, o = i.db;
            return o.enable && (n = o.deleteFriend(e.account)), t && (e.type = "deleteFriend", i.onSyncFriendAction(e)), n
        }, i.onUpdateFriend = function (e, t) {
            var n = this, r = n.db, i = a.reverse(e);
            r.enable && r.updateFriend(i), t && n.onSyncFriendAction({type: "updateFriend", friend: i})
        }, i.onFriendUsers = function (e) {
            var t = this, n = t.db, i = e.content, o = i.users.map(function (e) {
                return c.reverse(e)
            });
            t.logger.warn("parse users", s(o), o);
            var a = i.timetag, u = r.resolve();
            n.enable && (u = n.mergeFriendUsers(o, a)), t.timetags.friendUsers = a, u.cmd = "friendUsers", t.syncPromiseArray.push(u), t.syncResult.users = o
        }, i.updateFriendSysMsg = function (e) {
            var t, n, r = e.obj, i = e.error;
            if (e.obj.idServer) {
                if (i) t = "error", i = o.filterObj(i, "code message"); else {
                    var s = r.type;
                    switch (s = a.getTypeFromByte(s) || s) {
                        case"passFriendApply":
                            t = "passed";
                            break;
                        case"rejectFriendApply":
                            t = "rejected"
                    }
                }
                n = {idServer: r.idServer, state: t}, i && (n.error = i), this.updateSysMsg(n)
            }
        }
    }, function (e, t, n) {
          
        var r = n(2).Promise, i = n(3).fn, o = n(1), s = o.undef, a = n(9), c = n(17), u = n(22), l = n(42);
        i.processMsg = function (e) {
            var t = this;
            switch (e.cmd) {
                case"sendMsg":
                    t.onSendMsg(e);
                    break;
                case"msg":
                    t.onMsg(e);
                    break;
                case"sysMsg":
                    t.onSysMsg(e);
                    break;
                case"sendCustomSysMsg":
                    t.onSendSysMsg(e);
                    break;
                case"getHistoryMsgs":
                case"searchHistoryMsgs":
                    t.onHistoryMsgs(e);
                    break;
                case"syncSendMsg":
                    t.onMsg(e);
                    break;
                case"deleteSessions":
                    t.onDeleteSessions(e);
                    break;
                case"sendMsgReceipt":
                    t.onSendMsgReceipt(e);
                    break;
                case"msgReceipt":
                    t.onMsgReceipt(e);
                    break;
                case"onDeleteMsg":
                    t.onDeleteMsg(e);
                    break;
                case"onMsgDeleted":
                    t.onMsgDeleted(e);
                    break;
                case"onDeleteMsgOfflineRoaming":
                    t.onDeleteMsgOfflineRoaming(e);
                    break;
                case"onMarkSessionAck":
                    t.onMarkSessionAck(e);
                    break;
                case"syncMarkSessionAck":
                    t.syncMarkSessionAck(e)
            }
        }, i.checkIgnore = function (e) {
            var t = this;
            e.forEach(function (e) {
                "notification" === e.type && !e.ignore && t.options.shouldIgnoreNotification(e) && (e.ignore = !0)
            })
        }, i.filterIgnore = function (e) {
            return e.filter(function (e) {
                return !e.ignore
            })
        }, i.genSessionByMsgs = function (e) {
            var t = this;
            return t.checkIgnore(e), u.genSessionByMsgs(t.message.Message, e)
        }, i.onRoamingMsgs = function (e) {
            var t = this, n = t.message, r = n.Message, i = r.getMaxTimetag, o = n.reverseMsgs(e.content.msgs),
                s = i(o);
            o = r.sortMsgs(o), o = r.deduplication(o);
            var a = o[0], c = a.sessionId, u = t.genSessionByMsgs(o);
            t.cacheSyncedSession(u);
            var l = t.putMsg(o, "roamingMsgs").then(function (e) {
                o = e, o = t.filterIgnore(o), o.length && (t.logger.warn("sync roamingMsgs", c, o.length, o), t.syncResult.roamingMsgs = t.syncResult.roamingMsgs || [], t.syncResult.roamingMsgs.push({
                    sessionId: c,
                    scene: a.scene,
                    to: a.target,
                    msgs: o,
                    timetag: s
                }))
            });
            l.cmd = "roamingMsgs-" + c, t.syncPromiseArray.push(l)
        }, i.onOfflineMsgs = function (e, t) {
            function n(e) {
                if (l.length) {
                    var t = o.getMaxTimetag(l), n = l[0].scene, i = l[0].target;
                    r.markMsgRead(l), l = o.sortMsgs(l), l = o.deduplication(l);
                    var s = r.genSessionByMsgs(l);
                    r.cacheSyncedSession(s), c = r.putMsg(l, "offlineMsgs").then(function (o) {
                        l = o, l = r.filterIgnore(l), l.length && (r.logger.warn("sync", d, e, l.length, l), r.syncResult[d] = r.syncResult[d] || [], r.syncResult[d].push({
                            sessionId: e,
                            scene: n,
                            to: i,
                            msgs: l,
                            timetag: t
                        }))
                    }), c.cmd = "offlineMsgs-" + e, r.syncPromiseArray.push(c)
                }
            }

            var r = this, i = r.message, o = i.Message, s = null;
            t && (s = {filter: !0});
            var a, c, u = i.reverseMsgs(e.content.msgs, {modifyObj: s}), l = [], f = "",
                d = t ? "offlineFilterMsgs" : "offlineMsgs";
            u.forEach(function (e) {
                a = e.sessionId, a !== f ? (n(f), l = [], l.push(e), f = a) : l.push(e)
            }), n(f)
        }, i.markUnreadByMsgsPromise = function (e) {
            var t = this, n = t.db;
            n.enable && n.getSession(e).then(function (n) {
                n.ack && t.markUnreadBySessionAck({sessionId: e, ack: n.ack})
            })
        }, i.completeMsg = function (e) {
            var t = this;
            return e.from = t.account, e.fromNick = t.myInfo && t.myInfo.nick, e.fromClientType = "Web", e.fromDeviceId = a.deviceId, e.time || (e.time = +new Date), e
        }, i.onMsgs = function (e) {
            var t = this;
            t.message.reverseMsgs(e.content.msgs, {
                mapper: function (e) {
                    t.handleMsg(e)
                }
            })
        }, i.onMsg = function (e, t) {
            var n = this, r = n.message.reverse(e.content.msg);
            t && (r.filter = !0), n.syncing ? n.unhandledMsgs.push({type: "onMsg", msg: r}) : n.handleMsg(r)
        }, i.pushMsgTask = function (e) {
            var t = this;
            t.msgPromise = t.msgPromise.then(function () {
                return e()
            })
        }, i.handleMsg = function (e) {
            var t = this, n = e.time;
            t.markMsgRead(e), t.msgPromise = t.msgPromise.then(function () {
                return t.putMsg(e, "onMsg")
            }).then(function (r) {
                return e = r[0], t.updateRoamingMsgTimetag(n)
            }).then(function () {
                if (e) return t.checkUserUpdate(e)
            }).then(function () {
                if (e) {
                    var n = e.type;
                    switch (t.logger.log("handle " + e.scene + " " + n + " msg" + ("notification" === n ? " " + e.attach.type : ""), e), n) {
                        case"notification":
                            return t.onTeamNotificationMsg(e)
                    }
                }
            }).then(function () {
                e && !e.ignore && (t.logger.info("on msg", e), setTimeout(function () {
                    t.options.onmsg(o.copy(e))
                }, 0))
            }).then(void 0, function (e) {
                e._msg = "handle msg error", t.onDBError(e)
            })
        }, i.putMsg = function (e, t) {
            function n(e) {
                "roamingMsgs" !== t && "offlineMsgs" !== t || i.cacheSyncedSession(e)
            }

            if (o.isArray(e) || (e = [e]), e[0].filter) return r.resolve(e);
            var i = this, a = i.db, c = a.enable, u = r.resolve(), l = i.message.Message, f = l.getLastMsg(e),
                d = f.flow, m = f.sessionId !== i.currSessionId, p = i.genSessionByMsgs(e);
            n(p);
            var y = !1, h = [];
            return i.checkIgnore(e), u = u.then(function () {
                return c || i.options.autoMarkRead || "roamingMsgs" === t || !p || (i.sessionUnreadMsgs = i.sessionUnreadMsgs || {}, i.sessionUnreadMsgs[p.id] = i.sessionUnreadMsgs[p.id] || [], i.sessionUnreadMsgs[p.id] = i.sessionUnreadMsgs[p.id].concat(e)), c && "roamingMsgs" !== t && "offlineMsgs" !== t ? a.putMsg(e) : e
            }).then(function (t) {
                var n = [];
                return e.forEach(function (e) {
                    i.checkMsgUnique(e) && n.push(e)
                }), e = n, h = c ? t : e, r.resolve(e)
            }), u = u.then(function (e) {
                return e.length && (p = i.genSessionByMsgs(e), n(p), c && p) ? new r(function (t, n) {
                    a.getSessions({sessionId: p.id}).then(function (n) {
                        if (n && n.lastMsg) {
                            var r = n.lastMsg;
                            p.lastMsg && p.lastMsg.time < r.time && (p.lastMsg = r)
                        }
                        h.length ? p ? a.putSession(p).then(function (e) {
                            t(e)
                        }) : t(n) : (y = !0, h = e, t(n))
                    })
                }) : r.resolve(p)
            }), u = u.then(function (e) {
                if (p && h.length) {
                    var r = "roamingMsgs" === t, o = i.options.syncSessionUnread, u = p.id, l = i.findSession(u) || {},
                        f = l.ack || 0, g = "offlineMsgs" === t || r && o || "onMsg" === t && "in" === d && m;
                    if (g) {
                        c && e ? (p = e, f = f || p.ack || 0) : (e = l, e && (p.unread = e.unread || 0)), n(p), p.unread = p.unread || 0;
                        var v = 0;
                        if (h.forEach(function (e) {
                                var t = "notification" !== e.type && (s(e.isUnreadable) || e.isUnreadable);
                                if (t && o && (t = e.time > f && "out" !== e.flow), t && (v++, o && !c)) {
                                    var n = l.unreadMsgs || [];
                                    n.push(e), p.unreadMsgs = n
                                }
                            }), p.unread += v, n(p), c && !y) return a.updateSession({id: p.id, unread: p.unread})
                    }
                }
            }), "onMsg" === t ? u = u.then(function () {
                e.length && p && (i.onUpdateSession(p), i.options.syncSessionUnread && !m && i.api.resetSessionUnread(i.currSessionId))
            }) : "sendMsg" === t && !m && p && p.lastMsg && p.lastMsg.isLocal && (i.onUpdateSession(p), i.api.resetSessionUnread(i.currSessionId)), u.then(function () {
                return r.resolve(e)
            })
        }, i.cacheSyncedSession = function (e) {
            var t = this;
            if (e && t.syncResult) {
                e = o.merge({}, e), t.syncResult.sessions = t.syncResult.sessions || {};
                var n = e.id;
                t.syncResult.sessions[n] = o.merge(t.syncResult.sessions[n], e), s(t.syncResult.sessions[n].unread) && (t.syncResult.sessions[n].unread = 0), t.mergeSession(t.syncResult.sessions[n])
            }
        }, i.checkMsgUnique = o.genCheckUniqueFunc("idClient"), i.storeSendMsg = function (e) {
            var t = this;
            if (!t.syncing) {
                var n = t.putMsg(e, "sendMsg");
                return t.msgPromise = t.msgPromise.then(function () {
                    return n
                }), n
            }
            t.unhandledMsgs.push({type: "sendMsg", msg: e})
        }, i.updateSendMsgError = function (e) {
            var t = this;
            if (!t.syncing) {
                var n = t.updateMsg(e);
                return t.msgPromise = t.msgPromise.then(function () {
                    return n
                }), n
            }
            t.unupdatedMsgs.push(e)
        }, i.onSendMsg = function (e, t) {
            var n = this, i = e.obj && e.obj.msg || e.content.msg;
            n.completeMsg(i);
            var o = e.error && 7101 === e.error.code;
            e.error && !o || (i.idServer = e.content.msg.idServer, i.time = +e.content.msg.time), e.error ? i.status = "fail" : i.status = "success", i = n.message.reverse(i), t && (i.filter = !0), e.obj = i, n.syncing ? n.unupdatedMsgs.push(i) : n.msgPromise = r.all([n.msgPromise, e.obj.promise]).then(function (e) {
                return e.length || (i.resend = !0), n.updateMsg(i).then(function () {
                    return n.options.syncSessionUnread && n.currSessionId === i.sessionId && n.api.resetSessionUnread(n.currSessionId), n.resolveMsgReceiptTask(i), i
                })
            })
        }, i.updateLocalMsg = function (e) {
            var t = this, n = t.updateMsg(e);
            return t.msgPromise = t.msgPromise.then(function () {
                return n
            }), n
        }, i.updateMsg = function (e) {
            if (e.filter) return r.resolve(e);
            var t = this, n = t.db, i = "success" === e.status, o = u.genSessionByMsg(e), s = !!e.isLocal;
            return t.onUpdateSession(o), n.enable ? n.updateMsg(e).then(function (e) {
                var t = n.updateSession(o), a = r.resolve();
                return i && e && !s && (a = n.updateRoamingMsgTimetag(e.time)), r.all([t, a])
            }) : (i && !s && (t.timetags.roamingMsgs = e.time), r.resolve(e))
        }, i.updateRoamingMsgTimetag = function (e) {
            var t = this, n = t.db;
            return n.enable ? n.updateRoamingMsgTimetag(e) : (t.timetags.roamingMsgs = e, r.resolve(e))
        }, i.checkUserUpdate = function (e) {
            var t = this, n = e.from;
            return n === t.account ? r.resolve() : new r(function (r) {
                function i() {
                    t.api.getUser({
                        account: n, sync: !0, done: function (e, n) {
                            e || setTimeout(function () {
                                t.logger.info("on update user", n.account, n), t.options.onupdateuser(n)
                            }, 0), r()
                        }
                    })
                }

                var s = t.userSet[n];
                if (s) {
                    var a = +s.updateTime, c = +e.userUpdateTime;
                    !isNaN(a) && !isNaN(c) && o.isNumber(a) && o.isNumber(c) && a < c ? i() : r()
                } else i()
            })
        }, i.processUnsettledMsgs = function () {
            var e = this;
            e.unhandledMsgs.forEach(function (t) {
                var n = t.msg;
                switch (t.type) {
                    case"onMsg":
                        e.handleMsg(n);
                        break;
                    case"sendMsg":
                        e.msgPromise = e.msgPromise.then(function () {
                            return e.putMsg(n)
                        })
                }
            }), e.unupdatedMsgs.forEach(function (t) {
                e.msgPromise = e.msgPromise.then(function () {
                    return e.updateMsg(t)
                })
            }), e.resetUnsettledMsgs()
        }, i.onTeamNotificationMsg = function (e) {
            var t = this, n = t.db, r = e.attach, i = r.type, o = e.from, s = e.to, a = e.time, c = r.team,
                u = r.account, l = r.accounts;
            switch (i) {
                case"updateTeam":
                    if (!n.enable) return;
                    return c.updateTime = a, t.onUpdateTeam(c), n.updateTeam(c);
                case"addTeamMembers":
                    return t.onAddTeamMembers(e, c, l);
                case"removeTeamMembers":
                    return t.onRemoveTeamMembers(c, s, l);
                case"acceptTeamInvite":
                    return t.onAddTeamMembers(e, c, [o]);
                case"passTeamApply":
                    return t.onAddTeamMembers(e, c, [u]);
                case"addTeamManagers":
                    return t.updateTeamManagers(e, s, l, !0, a);
                case"removeTeamManagers":
                    return t.updateTeamManagers(e, s, l, !1, a);
                case"leaveTeam":
                    return t.onRemoveTeamMembers(c, s, [o]);
                case"dismissTeam":
                    return t.onDismissTeam(s, a);
                case"transferTeam":
                    return t.transferTeam(e, c, o, u);
                case"updateTeamMute":
                    return t.onUpdateTeamMembersMute(e, c, [u], r.mute)
            }
        }, i.onAddTeamMembers = function (e, t, n) {
            var i = this, s = i.db, a = t.teamId, u = c.assembleMembers(t, n);
            e.attach.members = u;
            var l = {team: t, accounts: n, members: u};
            if (i.logger.info("on add team members", l), i.options.onAddTeamMembers(o.simpleClone(l)), s.enable) {
                var f, d = s.putTeam(t), m = n.indexOf(i.account) === -1;
                return m ? f = s.putTeamMembers(u) : (i.logger.warn("join team", a), d = new r(function (e) {
                    i.api.getTeamMembers({
                        teamId: a, sync: !0, done: function () {
                            e()
                        }
                    })
                })), r.all([f, d])
            }
        }, i.onRemoveTeamMembers = function (e, t, n) {
            var i = this, s = i.db, a = {team: e, accounts: n};
            if (i.logger.info("on remove team members", a), i.options.onRemoveTeamMembers(o.simpleClone(a)), s.enable) {
                if (n.indexOf(i.account) === -1) {
                    var c = s.removeTeamMembersByAccounts(t, n), u = r.resolve();
                    return e && (u = s.putTeam(e)), r.all([c, u])
                }
                return s.leaveTeam(t)
            }
        }, i.updateTeamManagers = function (e, t, n, i, s) {
            var a = this, u = a.db, l = e.attach.members = n.map(function (e) {
                return {id: c.genId(t, e), type: i ? "manager" : "normal", updateTime: s}
            }), f = {teamId: "" + t, memberUpdateTime: s};
            e.attach.team = f;
            var d = {team: f, accounts: n, isManager: i, members: l};
            if (a.logger.info("on update team managers", d), a.options.onUpdateTeamManagers(o.simpleClone(d)), u.enable) {
                var m = u.updateTeam(f), p = u.updateTeamManagers(t, n, i, s);
                return r.all([m, p])
            }
        }, i.onDismissTeam = function (e, t) {
            var n = this, r = n.db, i = {teamId: e};
            if (n.logger.info("on dismiss team", i), n.options.onDismissTeam(i), r.enable) return r.dismissTeam(e, t)
        }, i.transferTeam = function (e, t, n, r) {
            var i = this, s = i.db, a = t.teamId, u = t.memberUpdateTime,
                l = {id: c.genId(a, n), type: "normal", updateTime: u},
                f = {id: c.genId(a, r), type: "owner", updateTime: u};
            e.attach.members = [l, f];
            var d = {team: t, from: l, to: f};
            if (i.logger.info("on transfer team", d), i.options.onTransferTeam(o.simpleClone(d)), s.enable) return s.transferTeam(t, n, r)
        }, i.onUpdateTeamMembersMute = function (e, t, n, i) {
            var s = this, a = s.db, u = n.map(function (e) {
                return {id: c.genId(t.teamId, e), account: e, teamId: t.teamId, mute: i, updateTime: t.memberUpdateTime}
            });
            e.attach.members = u;
            var l = {team: t, accounts: n, members: u, mute: i};
            if (s.logger.info("on update team members mute", l), s.options.onUpdateTeamMembersMute(o.simpleClone(l)), a.enable) {
                var f = a.updateTeamMembers(u), d = a.putTeam(t);
                return r.all([f, d])
            }
        }, i.onHistoryMsgs = function (e) {
            e.error || (e.obj.msgs = this.message.reverseMsgs(e.content.msgs))
        }, i.isFilterMsgs = function (e) {
            return !!e[0].filter
        }, i.splitMsgs = function (e, t, n, r) {
            e.forEach(function (e) {
                if (e.filter) r.push(e); else switch (e.scene) {
                    case"p2p":
                        t.push(e);
                        break;
                    case"team":
                        n.push(e)
                }
            })
        }, i.markMsgRead = function (e, t) {
            o.isArray(e) || (e = [e]);
            var n = this, r = n.db;
            if (r.enable || n.options.autoMarkRead || t) {
                var i = [], s = [], a = [];
                n.splitMsgs(e, i, s, a), n.markP2pMsgsRead(i), n.markTeamMsgsRead(s), n.markFilterMsgsRead(a)
            }
        }, i.markP2pMsgsRead = function (e) {
            if (e.length) {
                var t = l.idMap.msg.id, n = l.idMap.msg.msg;
                this.doMarkMsgsRead(t, n, e)
            }
        }, i.markTeamMsgsRead = function (e) {
            if (e.length) {
                var t = l.idMap.team.id, n = l.idMap.team.teamMsg;
                this.doMarkMsgsRead(t, n, e)
            }
        }, i.markFilterMsgsRead = function (e) {
            if (e.length) {
                var t = l.idMap.filter.id, n = l.idMap.filter.filterMsg;
                this.doMarkMsgsRead(t, n, e)
            }
        }, i.markSysMsgRead = function (e, t) {
            o.isArray(e) || (e = [e]);
            var n = this, r = n.db;
            if (r.enable || n.options.autoMarkRead || t) {
                var i, s;
                n.isFilterMsgs(e) ? (i = l.idMap.filter.id, s = l.idMap.filter.filterSysMsg) : (i = l.idMap.msg.id, s = l.idMap.msg.sysMsg), n.doMarkMsgsRead(i, s, e)
            }
        }, i.doMarkMsgsRead = function (e, t, n) {
            n.length && this.sendCmd("batchMarkRead", {
                sid: e, cid: t, ids: n.map(function (e) {
                    return e.idServer
                })
            })
        }
    }, function (e, t, n) {
          
        var r = n(2).Promise, i = n(3).fn, o = n(23), s = n(22), a = n(1);
        i.onDeleteMsg = function (e) {
            delete e.obj.sysMsg, e.error || (e.promise = this.deleteLocalMsg(e.obj.msg))
        }, i.onMsgDeleted = function (e) {
            if (!e.error) {
                var t = this, n = t.db, r = o.reverse(e.content.sysMsg);
                r = t.processDeleteMsgSysMsg(r), t.markSysMsgRead(r), t.deleteLocalMsg(r.msg).then(function () {
                    n.enable && n.updateDeleteMsgTimetag(r.time + 1), t.handleSysMsg(r)
                })
            }
        }, i.processDeleteMsgSysMsg = function (e) {
            var t = this;
            return e.msg = {}, ["scene", "from", "to"].forEach(function (t) {
                e.msg[t] = e[t]
            }), e.msg.idClient = e.deletedIdClient, e.msg.idServer = e.deletedIdServer, e.msg.time = e.deletedMsgTime, e.msg.fromNick = e.deletedMsgFromNick, t.message.Message.setExtra(e.msg, t.account), e
        }, i.onDeleteMsgOfflineRoaming = function (e) {
            if (!e.error) {
                var t = this, n = 1 === +e.content.type ? "offline" : "roaming",
                    r = o.reverseSysMsgs(e.content.sysMsgs, {
                        mapper: function (e) {
                            return t.processDeleteMsgSysMsg(e)
                        }
                    });
                t.logger.warn("sync deleteMsgSysMsgs " + n, r), "offline" === n && t.markSysMsgRead(r);
                var i = e.content.timetag;
                t.timetags.deleteMsg = i, t.syncResult.deleteMsgTimetag = i;
                var s = t.putSysMsg(r, "offlineSysMsgs");
                s.cmd = "deleteMsgSysMsgs " + n, t.syncPromiseArray.push(s), t.syncResult.deleteMsgSysMsgs = t.syncResult.deleteMsgSysMsgs || [], t.syncResult.deleteMsgSysMsgs.push({
                    type: n,
                    sysMsgs: r
                })
            }
        }, i.deleteMsgOfflineRoaming = function (e, t) {
            if (!e) return r.resolve();
            var n = this;
            n.logger.warn("deleting msgs", e);
            var i = n.db, o = [];
            return e.forEach(function (e) {
                e.sysMsgs.forEach(function (e) {
                    var r = n.deleteLocalMsg(e.msg, {
                        cbUpdateSession: function (e) {
                            e = n.mergeSession(e), e = a.simpleClone(e), s.trim(e);
                            var r = a.findObjIndexInArray(t, {value: e.id});
                            if (r !== -1 && (t[r] = a.merge({}, t[r], e)), i.enable) return i.updateSession(e)
                        }
                    });
                    o.push(r)
                })
            }), r.all(o).then(function () {
                if (i.enable) return i.updateDeleteMsgTimetag(n.syncResult.deleteMsgTimetag)
            })
        }, i.deleteLocalMsg = function (e, t) {
            var n = this, i = n.db;
            t = t || {};
            var o = t.cbUpdateSession || n.updateLocalSession.bind(n);
            if (i.enable && e) {
                var s = !1, a = null, c = e.sessionId;
                return i.getMsgs({sessionId: c, limit: 1}).then(function (t) {
                    t && t[0] && t[0].idClient === e.idClient && (s = !0)
                }).then(function () {
                    return i.deleteMsg(e.idClient)
                }).then(function () {
                    if (s) return i.getMsgs({sessionId: c, limit: 1})
                }).then(function (e) {
                    if (s) return e && e[0] && (a = e[0]), o({id: c, lastMsg: a})
                })
            }
            return r.resolve()
        }
    }, function (e, t, n) {
          
        var r = n(2).Promise, i = n(3).fn, o = n(1);
        i.onOfflineMsgReceipts = function (e) {
            var t, n = this, i = n.db, o = e.content.msgReceipts, s = n.syncResult.msgReceipts = [], a = [],
                c = "msgReceipts", u = n.syncResult.sessions || {};
            o.forEach(function (e) {
                e.time = +e.time;
                var o = e.sessionId = "p2p-" + e.from;
                c += "-" + o, t = r.resolve();
                var l = u[o];
                i.enable ? t = i.getSession(o).then(function (t) {
                    if (t = t || l, t && n.shouldUpdateSessionFromMsgReceipt(t, e)) {
                        var r = n.genSessionFromMsgReceipt(t, e), s = n.syncResult.sessions;
                        return s && s[o] && (s = s[o], s.lastMsg && r.lastMsg && s.lastMsg.time > r.lastMsg.time && (r.lastMsg = s.lastMsg)), i.putSession(r).then(function (e) {
                            e && n.cacheSyncedSession(e)
                        })
                    }
                }) : l && s.push(e), a.push(t)
            }), t = r.all(a).then(function () {
                if (i.enable) return i.updateMsgReceiptsTimetag(e.content.timetag)
            }), t.cmd = c, n.syncPromiseArray.push(t)
        }, i.mergeSessionAndMsgReceipts = function (e, t) {
            var n = this, r = {};
            return e = e || [], t = t || [], e.forEach(function (e) {
                r[e.id] = e
            }), t.forEach(function (t) {
                var i = r[t.sessionId];
                if (n.shouldUpdateSessionFromMsgReceipt(i, t)) {
                    var o = n.genSessionFromMsgReceipt(i, t);
                    e = n.api.mergeSessions(e, o)
                }
            }), e
        }, i.shouldUpdateSessionFromMsgReceipt = function (e, t) {
            return !e || !e.msgReceiptServerTime || t.time > e.msgReceiptServerTime
        }, i.genSessionFromMsgReceipt = function (e, t) {
            var n = t.time, r = {id: t.sessionId, msgReceiptTime: n, msgReceiptServerTime: n};
            return e && e.id === t.sessionId && (r = o.merge({}, e, r)), e && e.updateTime || (r.updateTime = n), r
        }, i.onMsgReceipt = function (e) {
            var t = this, n = t.db, i = e.content.msgReceipt;
            i.time = +i.time;
            var o = i.idClient, s = r.resolve();
            n.enable && o && (s = n.getMsgByIdClient(o)), s.then(function (e) {
                var n;
                if (e) {
                    if (!e.idServer) return void(t.msgReceiptTasks[o] = i);
                    n = e.time
                } else n = i.time;
                i.msgReceiptTime = n, t.updateSessionMsgReceiptTime(i)
            })
        }, i.resolveMsgReceiptTask = function (e) {
            var t = this, n = t.msgReceiptTasks[e.idClient];
            n && (n.msgReceiptTime = e.time, this.updateSessionMsgReceiptTime(n))
        }, i.updateSessionMsgReceiptTime = function (e) {
            var t = this, n = t.db,
                r = {id: "p2p-" + e.from, msgReceiptTime: e.msgReceiptTime, msgReceiptServerTime: e.time};
            n.enable && n.putSession(r), t.onUpdateSession(r)
        }, i.onSendMsgReceipt = function (e) {
            var t = this;
            if (!e.error) {
                var n = e.obj.msgReceipt, r = +n.time, i = +e.content.msgReceipt.time, o = t.sessionSet["p2p-" + n.to];
                o.msgReceiptSendTime = Math.min(r, i)
            }
        }, i.shouldSendMsgReceipt = function (e) {
            if (e && "p2p" === e.scene && "success" === e.status) {
                var t = this.sessionSet[e.sessionId];
                if (t) {
                    var n = t.msgReceiptSendTime;
                    return !n || n < e.time
                }
            }
            return !1
        }, i.isMsgRemoteRead = function (e) {
            var t = this;
            if (e && "p2p" === e.scene && "out" === e.flow && "success" === e.status) {
                var n = t.sessionSet[e.sessionId];
                if (n && n.msgReceiptTime) return e.time <= n.msgReceiptTime
            }
            return !1
        }
    }, , function (e, t, n) {
          
        var r = n(2).Promise, i = n(3).fn, o = n(1), s = n(41);
        i.processNotify = function (e) {
            var t = this;
            switch (e.cmd) {
                case"syncOfflineMsgs":
                    t.onOfflineMsgs(e);
                    break;
                case"batchMarkRead":
                    break;
                case"syncOfflineSysMsgs":
                    t.onOfflineSysMsgs(e);
                    break;
                case"syncRoamingMsgs":
                    t.onRoamingMsgs(e);
                    break;
                case"syncOfflineFilterMsgs":
                    t.onOfflineMsgs(e, !0);
                    break;
                case"syncOfflineFilterSysMsgs":
                    t.onOfflineSysMsgs(e, !0);
                    break;
                case"syncMsgReceipts":
                    t.onOfflineMsgReceipts(e);
                    break;
                case"syncDonnop":
                    t.onDonnop(e, !0);
                    break;
                case"syncSessionAck":
                    t.syncSessionAck(e);
                    break;
                case"syncRobots":
                    t.onRobots(e)
            }
        }, i.onDonnop = function (e, t) {
            if (!e.error) {
                var n = this, r = n.db, i = s.reverse(e.content.donnop);
                n.mergeDonnop(i);
                var o = n.dbDonnop();
                if (t) {
                    var a = e.content.timetag;
                    n.timetags.donnop = a, r.enable && (o = o.then(function () {
                        return n.db.updateDonnopTimetag(a)
                    })), o.cmd = "donnop", n.syncPromiseArray.push(o)
                } else n.onPushNotificationMultiportConfigUpdate()
            }
        }, i.onUpdateDonnop = function (e) {
            var t = this;
            if (!e.error) {
                var n = e.obj;
                n && (t.mergeDonnop(o.filterObj(n, ["shouldPushNotificationWhenPCOnline"])), t.dbDonnop(), t.onPushNotificationMultiportConfigUpdate())
            }
        }, i.getPushNotificationMultiportConfig = function () {
            var e = this;
            return o.merge({}, e.pushNotificationMultiportConfig)
        }, i.mergeDonnop = function (e) {
            var t = this;
            t.pushNotificationMultiportConfig = o.merge({}, t.pushNotificationMultiportConfig, e)
        }, i.dbDonnop = function () {
            var e = this, t = e.db;
            return t.enable ? e.db.setDonnop(e.pushNotificationMultiportConfig) : r.resolve()
        }, i.onPushNotificationMultiportConfigUpdate = function () {
            var e = this;
            setTimeout(function () {
                var t = e.getPushNotificationMultiportConfig();
                e.logger.info("on update pushNotificationMultiportConfig", t), e.options.onPushNotificationMultiportConfigUpdate(t)
            })
        }
    }, function (e, t, n) {
          
        var r = n(3).fn, i = n(1);
        r.onRobots = function (e) {
            var t = this, n = e.content, r = e.error;
            if (r) return void t.logger.error("sync robots error", r);
            if (i.isFunction(t.options.onrobots) && Array.isArray(n.robots)) {
                var o = n.robots.filter(function (e) {
                    return !!e.botid
                });
                o.length > 0 && t.options.onrobots(o || [])
            }
        }
    }, function (e, t, n) {
          
        var r = n(2).Promise, i = n(3).fn, o = n(1), s = n(22), a = n(4);
        i.mergeSession = function (e) {
            e = o.copyWithNull(e);
            var t = this.sessionSet, n = e.id, r = t[n];
            if (r && r.lastMsg && e && e.lastMsg && e.lastMsg.isLocal) {
                var i = r.lastMsg.time || 0, s = e.lastMsg.time || 0;
                if (s < i) return r
            }
            return t[n] = o.merge(r, e), e = t[n], o.undef(e.unread) && (e.unread = 0), e
        }, i.mergeSessions = function (e) {
            var t = this;
            e.forEach(function (e) {
                t.mergeSession(e)
            })
        }, i.deleteLocalSession = function (e) {
            var t = this;
            o.isArray(e) || (e = [e]), e.forEach(function (e) {
                delete t.sessionSet[e]
            })
        }, i.onDeleteSessions = function (e) {
            e.obj = e.obj.sessions.map(function (e) {
                return s.parse(e)
            })
        }, i.onUpdateSession = function (e) {
            var t = this;
            return new r(function (n) {
                e ? (e = t.mergeSession(e), e = o.simpleClone(e), s.trim(e), s.isComplete(e) && setTimeout(function () {
                    t.logger.info("on update session", e.id, o.simpleClone(e)), t.options.onupdatesession(e), n(e)
                }, 0)) : n(e)
            })
        }, i.setCurrSession = function (e) {
            var t = this;
            e = "" + e, t.currSessionId = e, t.logger.warn("set curr session", e)
        }, i.findSession = function (e) {
            return this.sessionSet[e]
        }, i.resetSessionUnread = function (e) {
            function t() {
                n = {id: e, unread: 0}, r.onUpdateSession(n)
            }

            e = "" + e;
            var n, r = this, i = r.db;
            if (!r.findSession(e)) return void r.logger.warn("reset session unread, no session " + e);
            if (i.enable && i.resetSessionUnread(e), !r.options.autoMarkRead && r.sessionUnreadMsgs && r.sessionUnreadMsgs[e]) {
                var o = r.sessionUnreadMsgs[e];
                r.markMsgRead(o, !0), r.sessionUnreadMsgs[e] = []
            }
            t()
        }, i.insertLocalSession = function (e) {
            var t = this, n = t.db, i = t.sessionSet;
            return new r(function (c, u) {
                var l = e.scene, f = e.to, d = l + "-" + f, m = t.findSession(d);
                if (m) t.logger.warn("session exist"), u(a.sessionExist()); else {
                    var p;
                    if (o.isNumber(e.updateTime)) p = e.updateTime; else {
                        var y, h = [];
                        for (var g in i) i.hasOwnProperty(g) && (y = i[g], o.isNumber(y.updateTime) && h.push(y.updateTime));
                        p = Math.max.apply(Math, h) + 1, p = Math.max(p, +new Date)
                    }
                    var v = r.resolve();
                    n.enable && (v = n.getMsgs({sessionId: d, limit: 1})), v.then(function (e) {
                        if (o.isArray(e) && 1 === e.length) {
                            var r = e[0];
                            m = s.genSessionByMsg(r), m.updateTime = p
                        } else m = {id: d, scene: l, to: f, updateTime: p, lastMsg: null};
                        n.enable ? n.putSession(m).then(c, u) : c(m), t.onUpdateSession(m)
                    })
                }
            })
        }, i.updateLocalSession = function (e, t) {
            var n = this;
            return new r(function (i, s) {
                var c = n.db, u = n.findSession(e.id);
                if (u) {
                    var l = r.resolve(), f = o.filterObj(e, "id lastMsg localCustom");
                    c.enable && (l = c.updateSession(f)), l.then(function (e) {
                        return n.onUpdateSession(e, t)
                    }).then(i, function (e) {
                        s(e)
                    })
                } else n.logger.warn("no session ", e.id), s(a.sessionNotExist())
            })
        }
    }, function (e, t, n) {
          
        var r = n(2).Promise, i = n(3).fn;
        i.syncSessionAck = function (e) {
            var t = this, n = t.db, i = r.resolve();
            [[e.content.p2p, "p2p"], [e.content.team.m_map, "team"]].forEach(function (e) {
                var r = e[0], o = e[1];
                Object.keys(r).forEach(function (e) {
                    var s = o + "-" + e, a = {id: s, ack: r[e]};
                    n.enable && (i = i.then(function () {
                        return n.putSession(a)
                    }).then(function () {
                        t.markUnreadBySessionAck({sessionId: s, ack: r[e]})
                    })), t.mergeSession(a)
                })
            }), t.logger.warn("parse offline session ack", t.sessionSet);
            var o = e.content.timetag;
            n.enable && (i = i.then(function () {
                return t.db.updateSessionAck(o)
            })), i.cmd = "sessionAck", t.syncPromiseArray.push(i)
        }, i.onMarkSessionAck = function (e) {
            e.error || this.storeSessionAck(e.obj)
        }, i.syncMarkSessionAck = function (e) {
            this.storeSessionAck(e.content)
        }, i.storeSessionAck = function (e) {
            var t = this, n = t.options.syncSessionUnread;
            if (n) {
                var r = t.db, i = 0 === e.scene ? "p2p" : "team", o = i + "-" + e.to, s = e.timetag,
                    a = t.findSession(o) || {}, c = a.ack || 0;
                if (s <= c) return void t.logger.warn("useless ack, no store session ack", s);
                var u = {id: o, ack: s};
                t.mergeSession(u), r.enable && r.updateSession(u), t.logger.warn("store session ack", u), t.markUnreadBySessionAck({
                    sessionId: o,
                    ack: u.ack
                })
            }
        }, i.markUnreadBySessionAck = function (e) {
            var t = e.sessionId, n = e.ack, r = this, i = r.db;
            if (i.enable) r.pushMsgTask(function () {
                return i.getMsgCountAfterAck({sessionId: t, ack: n}).then(function (e) {
                    var n = {id: t, unread: e};
                    return r.logger.warn("update unread via session ack"), r.syncing && r.cacheSyncedSession(n), r.onUpdateSession(n), i.updateSession(n)
                })
            }); else {
                var o = r.findSession(t);
                if (o) {
                    var s = o.unreadMsgs;
                    if (s && s.length) {
                        for (var a = 0, c = [], u = s.length - 1; u >= 0; u--) {
                            var l = s[u];
                            if (!(l.time > n)) break;
                            a++, c.push(l)
                        }
                        o.unreadMsgs = c, o.unread = a, r.logger.warn("update unread via session ack"), r.onUpdateSession(o)
                    }
                }
            }
        }
    }, function (e, t, n) {
          
        var r = n(2).Promise, i = n(3).fn, o = n(1), s = o.undef, a = o.objs2ids, c = o.objs2accounts, u = o.teams2ids,
            l = n(22);
        i.beforeSync = function () {
            var e = this, t = e.db;
            return t.enable ? t.clearSendingMsgs() : r.resolve()
        }, i.syncData = function () {
            function e(e) {
                t.syncPromiseArray = [], t.syncResult = {}, t.syncTeamMembersPromiseArray = [], t.syncTeamMembersResult = {}, o.verifyBooleanWithDefault(r, "syncRelations syncFriends syncFriendUsers syncTeams syncRoamingMsgs syncMsgReceipts syncExtraTeamInfo syncTeamMembers", !0), o.verifyBooleanWithDefault(r, "syncFilter", !1);
                var n = {};
                e = e || {}, window._nimForceSyncIM && (t.logger.warn("upgrade force sync"), delete e.teams, window._nimForceSyncIM = !1), n.myInfo = e.myInfo || 0, n.offlineMsgs = 0, r.syncRelations && (n.relations = e.relations || 0), r.syncFriends && (n.friends = e.friends || 0), r.syncFriendUsers && (n.friendUsers = e.friendUsers || 0), r.syncRobots && (n.robots = e.robots || 0), r.syncTeams && (n.teams = e.teams || 0), r.syncRoamingMsgs && (n.roamingMsgs = e.roamingMsgs || 0), r.syncMsgReceipts && (n.msgReceipts = e.msgReceipts || 0), r.syncExtraTeamInfo && (n.myTeamMembers = e.myTeamMembers || 0), r.syncSessionUnread && (n.sessionAck = e.sessionAck || 0), n.donnop = e.donnop || 0, n.deleteMsg = e.deleteMsg || 0, r.syncFilter && (n.filterMsgs = 0), t.sendCmd("sync", {sync: n}, t.onSyncData.bind(t))
            }

            var t = this, n = t.db, r = t.options, i = n.enable;
            t.notifyLogin(), t.syncing = !0, i ? t.beforeSync().then(function () {
                return t.db.getTimetags()
            }).then(function (t) {
                e(t)
            }, function () {
                e()
            }) : e(t.timetags)
        }, i.onSyncData = function (e, t) {
            this.onMiscError(e, t, "sync error")
        }, i.processSync = function (e) {
            var t = this;
            switch (e.cmd) {
                case"syncDone":
                    t.timetags.sync = e.content.timetag, t.onSyncDone();
                    break;
                case"syncTeamMembersDone":
                    t.onSyncTeamMembersDone()
            }
        }, i.onSyncDone = function () {
            function e() {
                if (!q) return void U.logger.warn("after sync --no promiseArray");
                if (U.logger.warn("after sync", o.promises2cmds(q)), q = [], h = W.blacklist || [], g = W.invalidBlacklist || [], v = W.mutelist || [], b = W.invalidMutelist || [], M = W.friends, T = W.invalidFriends || [], k = W.myInfo, S = W.users, w = W.teams, O = W.invalidTeams || [], C = W.sessions, x = W.msgReceipts, _ = W.roamingMsgs, I = W.offlineMsgs, P = W.offlineFilterMsgs, A = W.offlineSysMsgs, j = W.offlineCustomSysMsgs, R = W.offlineFilterSysMsgs, F = W.offlineFilterCustomSysMsgs, N = W.sysMsgUnread, C) {
                    var e = [];
                    Object.keys(C).forEach(function (t) {
                        e.push(C[t])
                    }), C = e.sort(function (e, t) {
                        return t.updateTime - e.updateTime
                    })
                }
                var s = r.resolve();
                L && (s = t().then(function (e) {
                    var t = {};
                    e.forEach(function (e) {
                        var n = e.sessionId;
                        t[n] || (t[n] = !0, U.markUnreadByMsgsPromise(n))
                    })
                })), s.then(function () {
                    L && !U.hasSynced && (U.hasSynced = !0, n());
                    var e = q.filter(function (e) {
                        return "sessionAck" === e.cmd
                    });
                    0 === e.length && e.push(r.resolve());
                    var t = q.filter(function (e) {
                        return "sessionAck" !== e.cmd
                    });
                    0 === t.length && t.push(r.resolve()), r.all(t).then(function () {
                        return r.all(e)
                    }).then(i).then(d, U.onDBError.bind(U))
                })
            }

            function t() {
                var e, t = [], n = [];
                return _ && _.forEach(function (e) {
                    n = [].concat(n, e.msgs)
                }), I && I.forEach(function (e) {
                    n = [].concat(n, e.msgs)
                }), e = D.putMsg(n), t.push(e), r.all(t).then(function () {
                    return n
                })
            }

            function n() {
                B.syncRelations && (y = D.getRelations().then(function (e) {
                    h = e[0], v = e[1], h.invalid = g, v.invalid = b
                }, function (e) {
                    return e._msg = "on relations error", e
                }), q.push(y)), B.syncFriends && (y = D.getFriends().then(function (e) {
                    M = e, M.invalid = T
                }, function (e) {
                    return e._msg = "on friends error", e
                }), q.push(y)), s(k) && (y = D.getUser(U.account).then(function (e) {
                    k = e
                }, function (e) {
                    return e._msg = "on myInfo error", e
                }), q.push(y)), B.syncFriendUsers && (y = D.getFriends().then(function (e) {
                    return e.map(function (e) {
                        return e.account
                    })
                }).then(function (e) {
                    return D.getUsers(e)
                }).then(function (e) {
                    S = e
                }, function (e) {
                    return e._msg = "on users error", e
                }), q.push(y)), B.syncTeams && (y = D.getTeams().then(function (e) {
                    w = e, w.invalid = O
                }, function (e) {
                    return e._msg = "on teams error", e
                }), q.push(y)), y = D.getTeamMembersByAccount(U.account).then(function (e) {
                    U.mergeMyTeamMembers(e)
                }), q.push(y), y = D.getDonnop().then(function (e) {
                    U.mergeDonnop(e)
                }), q.push(y), y = D.getSessions().then(function (e) {
                    C = e
                }, function (e) {
                    return e._msg = "on sessions error", e
                }), q.push(y), y = D.getSysMsgUnread().then(function (e) {
                    N = e
                }, function (e) {
                    return e._msg = "on sysMsgUnread error", e
                }), q.push(y)
            }

            function i() {
                U.logger.warn("taskAfterSync"), f();
                var e = [];
                return e.push(U.deleteMsgOfflineRoaming(W.deleteMsgSysMsgs, C)), r.all(e)
            }

            function f() {
                if (W.deleteMsgSysMsgs) {
                    var e = {};
                    _ && _.forEach(function (t) {
                        e[t.sessionId] = t
                    });
                    var t = {};
                    I && I.forEach(function (e) {
                        t[e.sessionId] = e
                    });
                    var n = U.api;
                    W.deleteMsgSysMsgs.forEach(function (r) {
                        r.sysMsgs.forEach(function (r) {
                            var i = r.msg, o = i.sessionId;
                            [e, t].forEach(function (e) {
                                e[o] && (e[o].msgs = n.cutMsgs(e[o].msgs, i))
                            })
                        })
                    }), D.enable || [_, I].forEach(function (e) {
                        e && e.forEach(function (e) {
                            if (e.msgs.length) {
                                var t = U.genSessionByMsgs(e.msgs);
                                U.cacheSyncedSession(t), C = n.mergeSessions(C, t)
                            } else C = n.cutSessions(C, {id: e.sessionId})
                        })
                    })
                }
            }

            function d() {
                setTimeout(m, 0)
            }

            function m() {
                var e, t, n = [];
                h && (U.logger.info("on blacklist", c(h), h), B.onblacklist(h)), v && (U.logger.info("on mutelist", c(v), v), B.onmutelist(v)), M && (U.logger.info("on friends", c(M), M), B.onfriends(M)), k && (U.logger.info("on myInfo", k), U.myInfo = k, B.onmyinfo(o.copy(k))), S && (S.forEach(function (e) {
                    U.mergeUser(e)
                }), U.logger.info("on users", c(S), S), B.onusers(S)), w && (U.logger.info("on teams", u(w), w), B.onteams(w)), x && (!U.hasSynced && C && C.length || U.hasSynced) && (C = U.mergeSessionAndMsgReceipts(C, x)), C && C.length && (C.forEach(function (e) {
                    U.syncResult.sessions && U.syncResult.sessions[e.id] && "number" == typeof U.syncResult.sessions[e.id].unread && (e.unread = U.syncResult.sessions[e.id].unread), U.mergeSession(e), l.trim(e)
                }), U.logger.info("on sessions", a(C), C), B.onsessions(C)), _ && _.forEach(function (e) {
                    n.push(e.timetag), t = e.msgs, t.length && (U.logger.info("on roaming msgs", e.sessionId, t.length, t), B.onRoamingMsgs(e))
                }), I && I.forEach(function (e) {
                    n.push(e.timetag), t = e.msgs, t.length && (U.logger.info("on offline msgs", e.sessionId, t.length, t), B.onOfflineMsgs(e))
                }), P && P.forEach(function (e) {
                    n.push(e.timetag), t = e.msgs, t.length && (U.logger.info("on offline filter msgs", e.sessionId, t.length, t), B.onofflinefiltermsgs(t))
                });
                var r = [], i = [];
                W.deleteMsgSysMsgs && W.deleteMsgSysMsgs.forEach(function (e) {
                    "roaming" === e.type ? r = r.concat(e.sysMsgs) : i = i.concat(e.sysMsgs)
                }), r.length && (E = E || [], E = E.concat(r)), i.length && (A = A || [], A = A.concat(i)), E && (U.logger.info("on roaming sys msgs", E.length, E), B.onroamingsysmsgs(E)), A && (U.logger.info("on offline sys msgs", A.length, A), B.onofflinesysmsgs(A)), R && (U.logger.info("on offline filter sys msgs", R.length, R), B.onofflinefiltersysmsgs(R)), j && (U.logger.info("on offline custom sys msgs", j.length, j), B.onofflinecustomsysmsgs(j)), F && (U.logger.info("on offline filter custom sys msgs", F.length, F), B.onofflinefiltercustomsysmsgs(F)), N && (N = o.merge({}, U.sysMsgUnread, N), U.sysMsgUnread = o.merge({}, N), U.logger.info("on sysMsgUnread", N), B.onsysmsgunread(N));
                var s = U.getPushNotificationMultiportConfig();
                U.logger.info("on pushNotificationMultiportConfig", s), B.onPushNotificationMultiportConfig(s), n.length ? (e = Math.max.apply(Math, n), U.updateRoamingMsgTimetag(e).then(p, p)) : p(), U.syncPromiseArray = null, U.syncResult = null
            }

            function p() {
                U.processUnsettledMsgs(), U.processUnsettledSysMsgs(), U.syncing = !1, U.logger.info("sync done"), B.onsyncdone(), B.syncTeamMembers && w && w.length ? U.syncTeamMembers(w) : setTimeout(function () {
                    U.onSyncTeamMembersDone()
                }, 0)
            }

            var y, h, g, v, b, M, T, k, S, w, O, C, x, _, I, P, E, A, j, R, F, N, U = this, D = U.db, L = D.enable,
                B = U.options, q = U.syncPromiseArray, W = U.syncResult;
            if (q && q.length) {
                var H = q.filter(function (e) {
                    return "sessionAck" === e.cmd
                });
                0 === H.length && H.push(r.resolve());
                var $ = q.filter(function (e) {
                    return "sessionAck" !== e.cmd
                });
                0 === $.length && $.push(r.resolve()), r.all($).then(function () {
                    return r.all(H)
                }).then(e, function (e) {
                    U.onDBError(e)
                })
            } else e()
        }, i.syncTeamMembers = function (e) {
            function t(t) {
                var r = {};
                t = t || {}, e.forEach(function (e) {
                    r[e.teamId] = t["team-" + e.teamId] || 0
                }, n), n.sendCmd("syncTeamMembers", {sync: r}, n.onSyncTeamMembers.bind(n))
            }

            var n = this, r = n.db;
            r.enable ? r.getTeamMemberTimetags().then(function (e) {
                t(e)
            }, function () {
                t()
            }) : t(n.timetags)
        }, i.onSyncTeamMembers = function (e, t) {
            this.onMiscError(e, t, "sync teamMembers error")
        }, i.onSyncTeamMembersDone = function () {
            function e() {
                l.logger.warn("after sync members", o.promises2cmds(p)), p = [], f.enable && !l.hasSyncedTeamMembers ? (l.hasSyncedTeamMembers = !0, t()) : n()
            }

            function t() {
                return d.syncTeams && d.syncTeamMembers ? void f.getTeams().then(function (e) {
                    e.forEach(function (e) {
                        var t = e.teamId;
                        u = f.getTeamMembers(t).then(function (e) {
                            m[t] = e
                        }, function (e) {
                            return e._msg = "on members error", e
                        }), p.push(u)
                    }), p.length ? r.all(p).then(n, function (e) {
                        l.onDBError(e)
                    }) : n()
                }, function (e) {
                    e._msg = "on members error", l.onDBError(e)
                }) : a()
            }

            function n() {
                setTimeout(i, 0)
            }

            function i() {
                var e, t;
                Object.keys(m).forEach(function (n) {
                    n.indexOf("invalid") === -1 && (e = m[n], t = m[n + "-invalid"] || [], e.invalid = t, s(n, e))
                }), a()
            }

            function s(e, t) {
                l.logger.info("on members", e, c(t), t), d.onteammembers({teamId: e, members: t})
            }

            function a() {
                l.logger.info("sync members done"), d.onsyncteammembersdone(), l.syncTeamMembersResult = null, l.syncTeamMembersPromiseArray = null
            }

            var u, l = this, f = l.db, d = l.options, m = l.syncTeamMembersResult, p = l.syncTeamMembersPromiseArray;
            p.length ? r.all(p).then(e, function (e) {
                l.onDBError(e)
            }) : e()
        }
    }, function (e, t, n) {
          
        var r = n(2).Promise, i = n(3).fn, o = n(1), s = n(23);
        i.splitSysMsgs = function (e, t) {
            for (var n, r = e.length - 1; r >= 0; r--) n = e[r], s.isCustom(n) && (e.splice(r, 1), t.push(n))
        }, i.onOfflineSysMsgs = function (e, t) {
            var n = this, r = e.content.sysMsgs.map(function (e) {
                return e = s.reverse(e), t && (e.filter = !0), e
            });
            r = r.reverse(), n.markSysMsgRead(r);
            var i = [];
            n.splitSysMsgs(r, i);
            var o = t ? "offlineFilterSysMsgs" : "offlineSysMsgs",
                a = t ? "offlineFilterCustomSysMsgs" : "offlineCustomSysMsgs";
            if (r.length) {
                var c = n.putSysMsg(r, "offlineSysMsgs").then(function (e) {
                    r = e, r.length && (n.logger.warn("sync", o, r.length, r), n.syncResult[o] = r)
                });
                c.cmd = "sysMsgs", n.syncPromiseArray.push(c)
            }
            i.length && (n.logger.warn("sync " + a, i), n.syncResult[a] = i)
        }, i.onSendSysMsg = function (e, t) {
            var n = this, r = e.obj;
            n.completeSysMsg(r), e.error ? r.status = "fail" : r.status = "success", r = s.reverse(r), t && (e.obj.filter = !0), e.obj = r
        }, i.completeSysMsg = function (e) {
            return e.from = this.account, e
        }, i.onSysMsg = function (e, t) {
            var n = this, r = s.reverse(e.content.sysMsg);
            n.markSysMsgRead(r), t && (r.filter = !0), s.isCustom(r) ? (n.logger.info("on customSysMsg", r), n.options.oncustomsysmsg(r)) : n.syncing ? n.unhandledSysMsgs.push(r) : n.handleSysMsg(r)
        }, i.handleSysMsg = function (e) {
            var t = this, n = e.type, i = e.from;
            t.sysMsgPromise = t.sysMsgPromise.then(function () {
                return t.putSysMsg(e, "onSysMsg")
            }).then(function (t) {
                e = t[0]
            }).then(function () {
                if (e) {
                    var o, s = r.resolve();
                    switch (n) {
                        case"addFriend":
                            o = {type: "addFriend", account: i}, s = t.onFriendRequest(o);
                            break;
                        case"passFriendApply":
                            o = {type: "passFriendApply", account: i}, s = t.onFriendRequest(o);
                            break;
                        case"deleteFriend":
                            s = t.onDeleteFriend({account: i})
                    }
                    return o && o.friend && (e.friend = o.friend), s
                }
            }).then(function () {
                e && (t.logger.info("on sysMsg", n, e), setTimeout(function () {
                    t.options.onsysmsg(e)
                }, 0))
            })
        }, i.putSysMsg = function (e, t) {
            if (o.isArray(e) || (e = [e]), e[0].filter) return r.resolve(e);
            var n = this, i = n.db, s = i.enable, a = r.resolve(), c = [];
            return a = a.then(function () {
                return s ? i.putSysMsg(e) : e
            }).then(function (t) {
                var r = [];
                e.forEach(function (e) {
                    n.checkSysMsgUnique(e) && r.push(e)
                }), e = r, c = s ? t : e
            }), a = a.then(function () {
                return n.getSysMsgUnread().then(function (r) {
                    return c.length || (c = e, c.backward = !0), n.updateSysMsgUnread(c, r, 1).then(function (e) {
                        "offlineSysMsgs" === t && (n.syncResult.sysMsgUnread = e), "onSysMsg" === t && n.onUpdateSysMsgUnread(e)
                    })
                })
            }), a.then(function () {
                return e
            })
        }, i.checkSysMsgUnique = o.genCheckUniqueFunc("idServer"), i.getSysMsgUnread = function () {
            var e = this, t = e.db;
            return new r(function (n) {
                t.enable ? t.getSysMsgUnread().then(function (e) {
                    n(e)
                }, function () {
                    n(e.sysMsgUnread)
                }) : n(e.sysMsgUnread)
            })
        }, i.updateSysMsgUnread = function (e, t, n) {
            if (o.isArray(e) || (e = [e]), !e.length) return r.resolve(t);
            t = t || {};
            var i, a = this, c = a.db;
            return e.forEach(function (e) {
                (n > 0 && !e.read || n < 0 && e.read) && (i = e.type, t[i] = (t[i] || 0) + n)
            }), t = s.completeUnread(t), a.sysMsgUnread = t, c.enable && !e.backward ? c.updateSysMsgUnread(t) : r.resolve(t)
        }, i.reduceSysMsgUnread = function (e) {
            var t = this;
            return t.getSysMsgUnread().then(function (n) {
                return t.updateSysMsgUnread(e, n, -1)
            }).then(function (e) {
                t.onUpdateSysMsgUnread(e)
            })
        }, i.onUpdateSysMsgUnread = function (e) {
            var t = this;
            setTimeout(function () {
                t.logger.info("on update sysMsg unread", e), t.options.onupdatesysmsgunread(e)
            }, 0)
        }, i.updateSysMsg = function (e) {
            var t, n = this, i = n.db;
            t = i.enable ? i.updateSysMsg(e) : r.resolve(e), t.then(function (e) {
                n.onUpdateSysMsg(e)
            })
        }, i.onUpdateSysMsg = function (e) {
            var t = this;
            setTimeout(function () {
                o.isArray(e) || (e = [e]), e.forEach(function (e) {
                    t.logger.info("on update sysMsg", e), t.options.onupdatesysmsg(e)
                })
            }, 0)
        }, i.processUnsettledSysMsgs = function () {
            var e = this;
            e.unhandledSysMsgs.forEach(function (t) {
                e.handleSysMsg(t)
            }), e.resetUnsettledSysMsgs()
        }
    }, function (e, t, n) {
          
        var r = n(2).Promise, i = n(3).fn, o = n(1), s = o.objs2accounts, a = o.teams2ids, c = n(24), u = n(17);
        i.processTeam = function (e) {
            var t, n, r, i = this, o = e.error;
            switch (e.cmd) {
                case"createTeam":
                    if (t = e.obj.team, o || (t = e.content.team), t = c.reverse(t), e.obj.team = t, r = u.assembleOwner(t), e.obj.owner = r, !o) {
                        var s = {team: t, owner: r};
                        i.logger.info("on create team", s), i.options.onCreateTeam(s), i.onCreateTeam(t, r)
                    }
                    break;
                case"syncCreateTeam":
                    t = c.reverse(e.content.team), r = u.assembleOwner(t), i.logger.info("on sync createTeam", t, r), i.options.onsynccreateteam(t, r), i.onCreateTeam(t, r);
                    break;
                case"sendTeamMsg":
                    i.onSendMsg(e);
                    break;
                case"teamMsg":
                    i.onMsg(e);
                    break;
                case"teamMsgs":
                    i.onMsgs(e);
                    break;
                case"addTeamMembers":
                case"removeTeamMembers":
                case"leaveTeam":
                case"dismissTeam":
                case"addTeamManagers":
                case"removeTeamManagers":
                case"transferTeam":
                    break;
                case"updateInfoInTeam":
                    o || (n = e.obj, n.account = i.account, n.id = u.genId(n.teamId, n.account), n = u.reverse(n), e.obj = n, i.mergeMyTeamMembers(n), i.onUpdateTeamMember(n));
                    break;
                case"updateNickInTeam":
                    e.obj = u.reverse(e.obj);
                    break;
                case"updateTeam":
                    e.obj = c.reverse(e.obj, !0);
                    break;
                case"applyTeam":
                    e.error || (e.obj = c.reverse(e.content.team));
                    break;
                case"passTeamApply":
                    i.updateTeamSysMsgState(e, "passed");
                    break;
                case"rejectTeamApply":
                    i.updateTeamSysMsgState(e, "rejected");
                    break;
                case"acceptTeamInvite":
                    i.updateTeamSysMsgState(e, "passed"), e.error || (e.obj = c.reverse(e.content.team));
                    break;
                case"rejectTeamInvite":
                    i.updateTeamSysMsgState(e, "rejected");
                    break;
                case"getTeam":
                    e.error || (e.obj = c.reverse(e.content.team));
                    break;
                case"getTeams":
                    i.onTeams(e);
                    break;
                case"getTeamMembers":
                    i.onTeamMembers(e);
                    break;
                case"syncTeams":
                    i.onTeams(e);
                    break;
                case"syncTeamMembers":
                    i.onTeamMembers(e);
                    break;
                case"getTeamHistoryMsgs":
                case"searchTeamHistoryMsgs":
                    i.onHistoryMsgs(e);
                    break;
                case"syncSendTeamMsg":
                    i.onMsg(e);
                    break;
                case"syncUpdateTeamMember":
                    n = u.reverse(e.content.teamMember), i.onUpdateTeamMember(n), n.account === i.account && i.mergeMyTeamMembers(n);
                    break;
                case"updateMuteStateInTeam":
                    break;
                case"getMyTeamMembers":
                    e.error || (e.obj = u.reverseMembers(e.content.teamMembers));
                    break;
                case"getMutedTeamMembers":
                    e.error || (e.obj = {teamId: e.obj.teamId, members: u.reverseMembers(e.content.teamMembers)});
                    break;
                case"syncMyTeamMembers":
                    i.onSyncMyTeamMembers(e)
            }
        }, i.onCreateTeam = function (e, t) {
            var n = this.db;
            n.enable && (n.putTeam(e), n.putTeamMembers(t))
        }, i.onTeams = function (e) {
            function t() {
                d && f.forEach(function (e) {
                    e = c.reverse(e), e.validToCurrentUser ? m.push(e) : p.push(e)
                }), s.logger.warn("parse teams", a(m), m, "invalid", a(p), p), f.length ? (d = !0, o = e.content.timetag) : d = !1
            }

            function n(t, n) {
                e.promise = new r(function (e, r) {
                    function a() {
                        l ? (i(), e(), t()) : u.getTeams().then(function (n) {
                            m = n, i(), e(), t()
                        }).then(void 0, function (e) {
                            e._msg = "get teams error", r(e), n(e)
                        })
                    }

                    d ? u.mergeTeams(m, p, o).then(function () {
                        a()
                    }).then(void 0, function (e) {
                        e._msg = "merge teams error", r(e), n(e)
                    }) : (s.logger.warn("no merge teams"), a())
                }).then(void 0, function (e) {
                    throw e._msg = "merge teams data error", n(e), e
                })
            }

            function i() {
                s.timetags.teams = o, m.invalid = p, l ? (s.syncResult.teams = m, s.syncResult.invalidTeams = p) : (s.logger.warn("get teams", a(m), m), e.obj = m)
            }

            e.content = e.content || {};
            var o, s = this, u = s.db, l = s.packetFromSync(e), f = e.content.teams || [], d = !0, m = [], p = [];
            if (e.error) switch (e.error.code) {
                case 803:
                    e.error = null, d = !1
            }
            var y = new r(function (r, o) {
                e.error ? l && o(e.error) : (t(), u.enable ? n(r, o) : (i(), r()))
            });
            l && (y.cmd = "teams", s.syncPromiseArray.push(y))
        }, i.onTeamMembers = function (e) {
            function t() {
                m && d.forEach(function (e) {
                    e = u.reverse(e), e.valid ? p.push(e) : y.push(e)
                }), c.logger.warn("parse members", a, s(p), p, "invalid", s(y), y), d.length ? (m = !0, o = e.content.timetag) : m = !1
            }

            function n(t, n) {
                e.promise = new r(function (e, r) {
                    function s() {
                        f ? (i(), e(), t()) : l.getTeamMembers(a).then(function (n) {
                            p = n, i(), e(), t()
                        }).then(void 0, function (e) {
                            e._msg = "get members error", r(e), n(e)
                        })
                    }

                    m ? l.mergeTeamMembers(a, p, y, o).then(function () {
                        s()
                    }).then(void 0, function (e) {
                        e._msg = "merge members error " + a, r(e), n(e)
                    }) : (c.logger.warn("no merge members", a), s())
                }).then(void 0, function (e) {
                    throw e._msg = "merge members data error", n(e), e
                })
            }

            function i() {
                p.invalid = y, f ? (c.syncTeamMembersResult[a] = p, c.syncTeamMembersResult[a + "-invalid"] = y, c.timetags["team-" + a] = o) : (c.logger.warn("get members", a, s(p), p), e.obj = {
                    teamId: a,
                    members: p
                })
            }

            e.content = e.content || {};
            var o, a, c = this, l = c.db, f = c.packetFromSync(e), d = e.content.members || [], m = !0, p = [], y = [];
            if (e.obj && (a = e.obj.teamId), a || (a = e.content.teamId), a = "" + a, e.error) switch (e.error.code) {
                case 406:
                    e.error = null, m = !1
            }
            var h = new r(function (r, o) {
                e.error ? f && o(e.error) : (t(), l.enable ? n(r, o) : (i(), r()))
            });
            f && (h.cmd = a, c.syncTeamMembersPromiseArray.push(h))
        }, i.onUpdateTeamMember = function (e) {
            var t = this;
            e.updateTime || (e.updateTime = +new Date), t.logger.warn("parse update member", e), t.logger.info("on update teamMember", e), t.options.onupdateteammember(o.simpleClone(e));
            var n = {teamId: e.teamId, memberUpdateTime: e.updateTime};
            t.onUpdateTeam(n);
            var r = this.db;
            r.enable && r.updateTeamMember(e)
        }, i.onUpdateTeam = function (e) {
            var t = this;
            t.logger.info("on update team", e), t.options.onUpdateTeam(o.simpleClone(e));
            var n = t.db;
            n.enable && n.updateTeam(e)
        }, i.onSyncMyTeamMembers = function (e) {
            var t = this, n = t.db, r = u.reverseMembers(e.content.teamMembers);
            if (t.logger.warn("parse my team members", r), n.enable) {
                var i = n.putTeamMembers(r).then(function () {
                    return n.updateMyTeamMembersTimetag(e.content.timetag)
                });
                i.cmd = "myTeamMembers", t.syncTeamMembersPromiseArray.push(i)
            }
            t.mergeMyTeamMembers(r)
        }, i.mergeMyTeamMembers = function (e) {
            o.isArray(e) || (e = [e]);
            var t = this, n = t.myTeamMembersMap = t.myTeamMembersMap || {};
            e.forEach(function (e) {
                var t = e.teamId;
                n[t] = o.merge(n[t], e)
            }), t.logger.warn("cache my team members", n)
        }, i.notifyForNewTeamMsg = function (e) {
            o.isArray(e) || (e = [e]);
            var t = this, n = this.myTeamMembersMap || {}, i = {}, s = [];
            e.forEach(function (e) {
                o.exist(n[e]) ? i[e] = !n[e].muteTeam : s.push(e)
            });
            var a = r.resolve(i);
            return s.length && (a = t.api.getMyTeamMembers({teamIds: s, promise: !0}).then(function (e) {
                return t.mergeMyTeamMembers(e), e.forEach(function (e) {
                    i[e.teamId] = !e.muteTeam
                }), i
            })), a
        }, i.updateTeamSysMsgState = function (e, t) {
            var n, r = e.error;
            r && (t = "error", r = o.filterObj(r, "code message")), n = {
                idServer: e.obj.idServer,
                state: t
            }, r && (n.error = r), this.updateSysMsg(n)
        }
    }, function (e, t, n) {
          
        var r = n(2).Promise, i = n(3).fn, o = n(1), s = o.objs2accounts, a = n(136), c = n(30);
        i.processUser = function (e) {
            var t, n = this, r = n.db, i = e.obj, o = e.error, s = e.content;
            switch (e.cmd) {
                case"markInBlacklist":
                    o || n.markInBlacklist(i);
                    break;
                case"syncMarkInBlacklist":
                    n.markInBlacklist(s, !0);
                    break;
                case"markInMutelist":
                    o || n.markInMutelist(i);
                    break;
                case"syncMarkInMutelist":
                    n.markInMutelist(s, !0);
                    break;
                case"getRelations":
                    o || n.onRelations(e);
                    break;
                case"syncMyInfo":
                    n.onMyInfo(e, !0);
                    break;
                case"updateMyInfo":
                    o || (i.updateTime = s.timetag, n.onUpdateMyInfo(e, i));
                    break;
                case"syncUpdateMyInfo":
                    n.onUpdateMyInfo(e, s.user, !0);
                    break;
                case"getUsers":
                    o || (t = s.users.map(function (e) {
                        return e = c.reverse(e), n.mergeUser(e), e
                    }), e.obj = t, r.enable && r.putUsers(t));
                    break;
                case"updateDonnop":
                    n.onUpdateDonnop(e);
                    break;
                case"syncUpdateDonnop":
                    n.onDonnop(e, !1)
            }
        }, i.onMyInfo = function (e) {
            function t() {
                o = c.reverse(l.user), s.logger.warn("parse myInfo", o)
            }

            function n(e, t) {
                a.mergeMyInfo(o, f).then(function () {
                    i(), e()
                }).then(void 0, function (e) {
                    e._msg = "merge myInfo error", t(e)
                })
            }

            function i() {
                s.timetags.myInfo = o.updateTime, f && (s.syncResult.myInfo = o)
            }

            var o, s = this, a = s.db, u = e.error, l = e.content, f = !0, d = new r(function (e, r) {
                u ? f && r(u) : (t(), a.enable ? n(e, r) : (i(), e()))
            });
            f && (d.cmd = "myInfo", s.syncPromiseArray.push(d))
        }, i.onUpdateMyInfo = function (e, t, n) {
            var r = this, i = r.db, s = c.reverse(t), a = o.merge(r.myInfo, s);
            r.myInfo = a, n ? (r.logger.info("on update myInfo", a), r.options.onupdatemyinfo(a)) : e.obj = a, i.enable && (s.account = r.account, i.updateUser(s))
        }, i.onRelations = function (e) {
            function t() {
                d.forEach(function (e) {
                    e = a.parse(e);
                    var t = {account: e.account, createTime: e.createTime, updateTime: e.updateTime};
                    e.isBlacked ? p.push(t) : y.push(t), e.isMuted ? h.push(t) : g.push(t)
                }), c.logger.warn("parse blacklist", s(p), p, "delete", s(y), y), c.logger.warn("parse mutelist", s(h), h, "delete", s(g), g), d.length ? (m = !0, o = e.content.timetag) : m = !1
            }

            function n(t, n) {
                e.promise = new r(function (e, r) {
                    function s() {
                        f ? (i(), e(), t()) : u.getRelations().then(function (n) {
                            p = n[0], h = n[1], i(), e(), t()
                        }).then(void 0, function (e) {
                            e._msg = "get relations error", r(e), n(e)
                        })
                    }

                    m ? u.mergeRelations(p, y, h, g, o).then(function () {
                        s()
                    }).then(void 0, function (e) {
                        e._msg = "merge relations error", r(e), n(e)
                    }) : (c.logger.warn("no merge relations"), s())
                }).then(void 0, function (e) {
                    throw e._msg = "merge relations data error", n(e), e
                })
            }

            function i() {
                c.timetags.relations = o, p.invalid = y, h.invalid = g, f ? (c.syncResult.blacklist = p, c.syncResult.mutelist = h, c.syncResult.invalidBlacklist = y, c.syncResult.invalidMutelist = g) : (c.logger.warn("get relations", p, h), e.obj.blacklist = p, e.obj.mutelist = h)
            }

            var o, c = this, u = c.db, l = e.error, f = c.packetFromSync(e), d = e.content.specialRelations, m = !0,
                p = [], y = [], h = [], g = [], v = new r(function (e, r) {
                    l ? f && r(l) : (t(), u.enable ? n(e, r) : (i(), e()))
                });
            f && (v.cmd = "relations", c.syncPromiseArray.push(v))
        }, i.markInBlacklist = function (e, t) {
            var n = this, r = n.db;
            e.record = {
                account: e.account,
                updateTime: +new Date
            }, r.enable && r.markInBlacklist(e), t && (n.logger.info("on sync markInBlacklist", e), n.options.onsyncmarkinblacklist(e))
        }, i.markInMutelist = function (e, t) {
            var n = this, r = n.db;
            e.record = {
                account: e.account,
                updateTime: +new Date
            }, r.enable && r.markInMutelist(e), t && (n.logger.info("on sync markInMutelist", e), n.options.onsyncmarkinmutelist(e))
        }, i.mergeUser = function (e) {
            this.userSet[e.account] = e
        }
    }])
});