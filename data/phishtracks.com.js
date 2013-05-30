/*!
 * jQuery JavaScript Library v1.8.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Tue Nov 13 2012 08:20:33 GMT-0500 (Eastern Standard Time)
 */ (function (e, t) {
    function _(e) {
        var t = M[e] = {};
        return v.each(e.split(y), function (e, n) {
            t[n] = !0
        }), t
    }
    function H(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r
                } catch (s) {}
                v.data(e, n, r)
            } else r = t
        }
        return r
    }
    function B(e) {
        var t;
        for (t in e) {
            if (t === "data" && v.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }
    function et() {
        return !1
    }
    function tt() {
        return !0
    }
    function ut(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }
    function at(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }
    function ft(e, t, n) {
        t = t || 0;
        if (v.isFunction(t)) return v.grep(e, function (e, r) {
                var i = !! t.call(e, r, e);
                return i === n
            });
        if (t.nodeType) return v.grep(e, function (e, r) {
                return e === t === n
            });
        if (typeof t == "string") {
            var r = v.grep(e, function (e) {
                return e.nodeType === 1
            });
            if (it.test(t)) return v.filter(t, r, !n);
            t = v.filter(t, r)
        }
        return v.grep(e, function (e, r) {
            return v.inArray(e, t) >= 0 === n
        })
    }
    function lt(e) {
        var t = ct.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n
    }
    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function At(e, t) {
        if (t.nodeType !== 1 || !v.hasData(e)) return;
        var n, r, i, s = v._data(e),
            o = v._data(t, s),
            u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u) for (r = 0, i = u[n].length; r < i; r++) v.event.add(t, n, u[n][r])
        }
        o.data && (o.data = v.extend({}, o.data))
    }
    function Ot(e, t) {
        var n;
        if (t.nodeType !== 1) return;
        t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando)
    }
    function Mt(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }
    function _t(e) {
        Et.test(e.type) && (e.defaultChecked = e.checked)
    }
    function Qt(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = Jt.length;
        while (i--) {
            t = Jt[i] + n;
            if (t in e) return t
        }
        return r
    }
    function Gt(e, t) {
        return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e)
    }
    function Yt(e, t) {
        var n, r, i = [],
            s = 0,
            o = e.length;
        for (; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r))
        }
        for (s = 0; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[s] || "" : "none"
        }
        return e
    }
    function Zt(e, t, n) {
        var r = Rt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function en(e, t, n, r) {
        var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            s = 0;
        for (; i < 4; i += 2) n === "margin" && (s += v.css(e, n + $t[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0, n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
        return s
    }
    function tn(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight,
            i = !0,
            s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
        if (r <= 0 || r == null) {
            r = Dt(e, t);
            if (r < 0 || r == null) r = e.style[t];
            if (Ut.test(r)) return r;
            i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + en(e, t, n || (s ? "border" : "content"), i) + "px"
    }
    function nn(e) {
        if (Wt[e]) return Wt[e];
        var t = v("<" + e + ">").appendTo(i.body),
            n = t.css("display");
        t.remove();
        if (n === "none" || n === "") {
            Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!Ht || !Pt.createElement) Ht = (Pt.contentWindow || Pt.contentDocument).document, Ht.write("<!doctype html><html><body>"), Ht.close();
            t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt)
        }
        return Wt[e] = n, n
    }
    function fn(e, t, n, r) {
        var i;
        if (v.isArray(t)) v.each(t, function (t, i) {
                n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
            });
        else if (!n && v.type(t) === "object") for (i in t) fn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }
    function Cn(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i, s, o = t.toLowerCase().split(y),
                u = 0,
                a = o.length;
            if (v.isFunction(n)) for (; u < a; u++) r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n)
        }
    }
    function kn(e, n, r, i, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        var u, a = e[s],
            f = 0,
            l = a ? a.length : 0,
            c = e === Sn;
        for (; f < l && (c || !u); f++) u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = kn(e, n, r, i, u, o)));
        return (c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)), u
    }
    function Ln(e, n) {
        var r, i, s = v.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && v.extend(!0, e, i)
    }
    function An(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes,
            l = e.responseFields;
        for (s in l) s in r && (n[l[s]] = r[s]);
        while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i) for (s in a) if (a[s] && a[s].test(i)) {
                    f.unshift(s);
                    break
                }
        if (f[0] in r) o = f[0];
        else {
            for (s in r) {
                if (!f[0] || e.converters[s + " " + f[0]]) {
                    o = s;
                    break
                }
                u || (u = s)
            }
            o = o || u
        } if (o) return o !== f[0] && f.unshift(o), r[o]
    }
    function On(e, t) {
        var n, r, i, s, o = e.dataTypes.slice(),
            u = o[0],
            a = {}, f = 0;
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (o[1]) for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
        for (; i = o[++f];) if (i !== "*") {
                if (u !== "*" && u !== i) {
                    n = a[u + " " + i] || a["* " + i];
                    if (!n) for (r in a) {
                            s = r.split(" ");
                            if (s[1] === i) {
                                n = a[u + " " + s[0]] || a["* " + s[0]];
                                if (n) {
                                    n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
                                    break
                                }
                            }
                    }
                    if (n !== !0) if (n && e["throws"]) t = n(t);
                        else try {
                                t = n(t)
                        } catch (l) {
                        return {
                            state: "parsererror",
                            error: n ? l : "No conversion from " + u + " to " + i
                        }
                    }
                }
                u = i
            }
        return {
            state: "success",
            data: t
        }
    }
    function Fn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function In() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function $n() {
        return setTimeout(function () {
            qn = t
        }, 0), qn = v.now()
    }
    function Jn(e, t) {
        v.each(t, function (t, n) {
            var r = (Vn[t] || []).concat(Vn["*"]),
                i = 0,
                s = r.length;
            for (; i < s; i++) if (r[i].call(e, t, n)) return
        })
    }
    function Kn(e, t, n) {
        var r, i = 0,
            s = 0,
            o = Xn.length,
            u = v.Deferred().always(function () {
                delete a.elem
            }),
            a = function () {
                var t = qn || $n(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    i = 1 - r,
                    s = 0,
                    o = f.tweens.length;
                for (; s < o; s++) f.tweens[s].run(i);
                return u.notifyWith(e, [f, i, n]), i < 1 && o ? n : (u.resolveWith(e, [f]), !1)
            }, f = u.promise({
                elem: e,
                props: v.extend({}, t),
                opts: v.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: qn || $n(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n, r) {
                    var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        Qn(l, f.opts.specialEasing);
        for (; i < o; i++) {
            r = Xn[i].call(f, e, l, f.opts);
            if (r) return r
        }
        return Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {
            anim: f,
            queue: f.opts.queue,
            elem: e
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    function Qn(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }
    function Gn(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this,
            p = e.style,
            d = {}, m = [],
            g = e.nodeType && Gt(e);
        n.queue || (l = v._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function () {
            l.unqueued || c()
        }), l.unqueued++, h.always(function () {
            h.always(function () {
                l.unqueued--, v.queue(e, "fx").length || l.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", v.support.shrinkWrapBlocks || h.done(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            s = t[r];
            if (Un.exec(s)) {
                delete t[r], a = a || s === "toggle";
                if (s === (g ? "hide" : "show")) continue;
                m.push(r)
            }
        }
        o = m.length;
        if (o) {
            u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), "hidden" in u && (g = u.hidden), a && (u.hidden = !g), g ? v(e).show() : h.done(function () {
                v(e).hide()
            }), h.done(function () {
                var t;
                v.removeData(e, "fxshow", !0);
                for (t in d) v.style(e, t, d[t])
            });
            for (r = 0; r < o; r++) i = m[r], f = h.createTween(i, g ? u[i] : 0), d[i] = u[i] || v.style(e, i), i in u || (u[i] = f.start, g && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0))
        }
    }
    function Yn(e, t, n, r, i) {
        return new Yn.prototype.init(e, t, n, r, i)
    }
    function Zn(e, t) {
        var n, r = {
                height: e
            }, i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = $t[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    function tr(e) {
        return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = e.document,
        s = e.location,
        o = e.navigator,
        u = e.jQuery,
        a = e.$,
        f = Array.prototype.push,
        l = Array.prototype.slice,
        c = Array.prototype.indexOf,
        h = Object.prototype.toString,
        p = Object.prototype.hasOwnProperty,
        d = String.prototype.trim,
        v = function (e, t) {
            return new v.fn.init(e, t, n)
        }, m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        g = /\S/,
        y = /\s+/,
        b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        S = /^[\],:{}\s]*$/,
        x = /(?:^|:|,)(?:\s*\[)+/g,
        T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        C = /^-ms-/,
        k = /-([\da-z])/gi,
        L = function (e, t) {
            return (t + "").toUpperCase()
        }, A = function () {
            i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready())
        }, O = {};
    v.fn = v.prototype = {
        constructor: v,
        init: function (e, n, r) {
            var s, o, u, a;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);
                if (s && (s[1] || !n)) {
                    if (s[1]) return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0), v.merge(this, e);
                    o = i.getElementById(s[2]);
                    if (o && o.parentNode) {
                        if (o.id !== s[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = i, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return l.call(this)
        },
        get: function (e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function (e, t, n) {
            var r = v.merge(this.constructor(), e);
            return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
        },
        each: function (e, t) {
            return v.each(this, e, t)
        },
        ready: function (e) {
            return v.ready.promise().done(e), this
        },
        eq: function (e) {
            return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        slice: function () {
            return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","))
        },
        map: function (e) {
            return this.pushStack(v.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: [].sort,
        splice: [].splice
    }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function () {
        var e, n, r, i, s, o, u = arguments[0] || {}, a = 1,
            f = arguments.length,
            l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++) if ((e = arguments[a]) != null) for (n in e) {
                    r = u[n], i = e[n];
                    if (u === i) continue;
                    l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i)
            }
        return u
    }, v.extend({
        noConflict: function (t) {
            return e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? v.readyWait++ : v.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? --v.readyWait : v.isReady) return;
            if (!i.body) return setTimeout(v.ready, 1);
            v.isReady = !0;
            if (e !== !0 && --v.readyWait > 0) return;
            r.resolveWith(i, [v]), v.fn.trigger && v(i).trigger("ready").off("ready")
        },
        isFunction: function (e) {
            return v.type(e) === "function"
        },
        isArray: Array.isArray || function (e) {
            return v.type(e) === "array"
        },
        isWindow: function (e) {
            return e != null && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return e == null ? String(e) : O[h.call(e)] || "object"
        },
        isPlainObject: function (e) {
            if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e)) return !1;
            try {
                if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || p.call(e, r)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw new Error(e)
        },
        parseHTML: function (e, t, n) {
            var r;
            return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)))
        },
        parseJSON: function (t) {
            if (!t || typeof t != "string") return null;
            t = v.trim(t);
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (S.test(t.replace(T, "@").replace(N, "]").replace(x, ""))) return (new Function("return " + t))();
            v.error("Invalid JSON: " + t)
        },
        parseXML: function (n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n), r
        },
        noop: function () {},
        globalEval: function (t) {
            t && g.test(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(C, "ms-").replace(k, L)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, n, r) {
            var i, s = 0,
                o = e.length,
                u = o === t || v.isFunction(e);
            if (r) {
                if (u) {
                    for (i in e) if (n.apply(e[i], r) === !1) break
                } else for (; s < o;) if (n.apply(e[s++], r) === !1) break
            } else if (u) {
                for (i in e) if (n.call(e[i], i, e[i]) === !1) break
            } else for (; s < o;) if (n.call(e[s], s, e[s++]) === !1) break; return e
        },
        trim: d && !d.call("﻿ ") ? function (e) {
            return e == null ? "" : d.call(e)
        } : function (e) {
            return e == null ? "" : (e + "").replace(b, "")
        },
        makeArray: function (e, t) {
            var n, r = t || [];
            return e != null && (n = v.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (c) return c.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++) if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                s = 0;
            if (typeof r == "number") for (; s < r; s++) e[i++] = n[s];
            else while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length;
            n = !! n;
            for (; s < o; s++) r = !! t(e[s], s), n !== r && i.push(e[s]);
            return i
        },
        map: function (e, n, r) {
            var i, s, o = [],
                u = 0,
                a = e.length,
                f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
            if (f) for (; u < a; u++) i = n(e[u], u, r), i != null && (o[o.length] = i);
            else for (s in e) i = n(e[s], s, r), i != null && (o[o.length] = i);
            return o.concat.apply([], o)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, s;
            return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function () {
                return e.apply(n, i.concat(l.call(arguments)))
            }, s.guid = e.guid = e.guid || v.guid++, s) : t
        },
        access: function (e, n, r, i, s, o, u) {
            var a, f = r == null,
                l = 0,
                c = e.length;
            if (r && typeof r == "object") {
                for (l in r) v.access(e, n, l, r[l], 1, o, i);
                s = 1
            } else if (i !== t) {
                a = u === t && v.isFunction(i), f && (a ? (a = n, n = function (e, t, n) {
                    return a.call(v(e), n)
                }) : (n.call(e, i), n = null));
                if (n) for (; l < c; l++) n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
                s = 1
            }
            return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
        },
        now: function () {
            return (new Date).getTime()
        }
    }), v.ready.promise = function (t) {
        if (!r) {
            r = v.Deferred();
            if (i.readyState === "complete") setTimeout(v.ready, 1);
            else if (i.addEventListener) i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1);
            else {
                i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);
                var n = !1;
                try {
                    n = e.frameElement == null && i.documentElement
                } catch (s) {}
                n && n.doScroll && function o() {
                    if (!v.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        v.ready()
                    }
                }()
            }
        }
        return r.promise(t)
    }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
        O["[object " + t + "]"] = t.toLowerCase()
    }), n = v(i);
    var M = {};
    v.Callbacks = function (e) {
        e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function (t) {
                n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
                for (; a && u < o; u++) if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
            }, c = {
                add: function () {
                    if (a) {
                        var t = a.length;
                        (function r(t) {
                            v.each(t, function (t, n) {
                                var i = v.type(n);
                                i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n)
                            })
                        })(arguments), i ? o = a.length : n && (s = t, l(n))
                    }
                    return this
                },
                remove: function () {
                    return a && v.each(arguments, function (e, t) {
                        var n;
                        while ((n = v.inArray(t, a, n)) > -1) a.splice(n, 1), i && (n <= o && o--, n <= u && u--)
                    }), this
                },
                has: function (e) {
                    return v.inArray(e, a) > -1
                },
                empty: function () {
                    return a = [], this
                },
                disable: function () {
                    return a = f = n = t, this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return f = t, n || c.disable(), this
                },
                locked: function () {
                    return !f
                },
                fireWith: function (e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return c
    }, v.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", v.Callbacks("once memory"), "resolved"],
                ["reject", "fail", v.Callbacks("once memory"), "rejected"],
                ["notify", "progress", v.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return v.Deferred(function (n) {
                            v.each(t, function (t, r) {
                                var s = r[0],
                                    o = e[t];
                                i[r[1]](v.isFunction(o) ? function () {
                                    var e = o.apply(this, arguments);
                                    e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
                                } : n[s])
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return e != null ? v.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, v.each(t, function (e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function () {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t = 0,
                n = l.call(arguments),
                r = n.length,
                i = r !== 1 || e && v.isFunction(e.promise) ? r : 0,
                s = i === 1 ? e : v.Deferred(),
                o = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                }, u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++) n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), v.support = function () {
        var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
        if (!n || !r || !n.length) return {};
        s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !! p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !! r.style.cssFloat,
            checkOn: u.value === "on",
            optSelected: o.selected,
            getSetAttribute: p.className !== "t",
            enctype: !! i.createElement("form").enctype,
            html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: i.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function () {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);
        if (p.attachEvent) for (l in {
                submit: !0,
                change: !0,
                focusin: !0
            }) f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;
        return v(function () {
            var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                a = i.getElementsByTagName("body")[0];
            if (!a) return;
            n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {
                width: "4px"
            }).width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null
        }), a.removeChild(p), n = r = s = o = u = a = p = null, t
    }();
    var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;
    v.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !! e && !B(e)
        },
        data: function (e, n, r, i) {
            if (!v.acceptData(e)) return;
            var s, o, u = v.expando,
                a = typeof n == "string",
                f = e.nodeType,
                l = f ? v.cache : e,
                c = f ? e[u] : e[u] && u;
            if ((!c || !l[c] || !i && !l[c].data) && a && r === t) return;
            c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
            if (typeof n == "object" || typeof n == "function") i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
            return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o
        },
        removeData: function (e, t, n) {
            if (!v.acceptData(e)) return;
            var r, i, s, o = e.nodeType,
                u = o ? v.cache : e,
                a = o ? e[v.expando] : v.expando;
            if (!u[a]) return;
            if (t) {
                r = n ? u[a] : u[a].data;
                if (r) {
                    v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                    for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                    if (!(n ? B : v.isEmptyObject)(r)) return
                }
            }
            if (!n) {
                delete u[a].data;
                if (!B(u[a])) return
            }
            o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
        },
        _data: function (e, t, n) {
            return v.data(e, t, n, !0)
        },
        acceptData: function (e) {
            var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), v.fn.extend({
        data: function (e, n) {
            var r, i, s, o, u, a = this[0],
                f = 0,
                l = null;
            if (e === t) {
                if (this.length) {
                    l = v.data(a);
                    if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
                        s = a.attributes;
                        for (u = s.length; f < u; f++) o = s[f].name, o.indexOf("data-") || (o = v.camelCase(o.substring(5)), H(a, o, l[o]));
                        v._data(a, "parsedAttrs", !0)
                    }
                }
                return l
            }
            return typeof e == "object" ? this.each(function () {
                v.data(this, e)
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function (n) {
                if (n === t) return l = this.triggerHandler("getData" + i, [r[0]]), l === t && a && (l = v.data(a, e), l = H(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
                r[1] = n, this.each(function () {
                    var t = v(this);
                    t.triggerHandler("setData" + i, r), v.data(this, e, n), t.triggerHandler("changeData" + i, r)
                })
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function (e) {
            return this.each(function () {
                v.removeData(this, e)
            })
        }
    }), v.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = v.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = v._queueHooks(e, t),
                o = function () {
                    v.dequeue(e, t)
                };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return v._data(e, n) || v._data(e, n, {
                empty: v.Callbacks("once memory").add(function () {
                    v.removeData(e, t + "queue", !0), v.removeData(e, n, !0)
                })
            })
        }
    }), v.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = v.queue(this, e, n);
                v._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                v.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = v.fx ? v.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                s = v.Deferred(),
                o = this,
                u = this.length,
                a = function () {
                    --i || s.resolveWith(o, [o])
                };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--) r = v._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var j, F, I, q = /[\t\r\n]/g,
        R = /\r/g,
        U = /^(?:button|input)$/i,
        z = /^(?:button|input|object|select|textarea)$/i,
        W = /^a(?:rea|)$/i,
        X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        V = v.support.getSetAttribute;
    v.fn.extend({
        attr: function (e, t) {
            return v.access(this, v.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                v.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return v.access(this, v.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = v.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, r, i, s, o, u;
            if (v.isFunction(e)) return this.each(function (t) {
                    v(this).addClass(e.call(this, t, this.className))
                });
            if (e && typeof e == "string") {
                t = e.split(y);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1) if (!i.className && t.length === 1) i.className = e;
                        else {
                            s = " " + i.className + " ";
                            for (o = 0, u = t.length; o < u; o++) s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
                            i.className = v.trim(s)
                        }
                }
            }
            return this
        },
        removeClass: function (e) {
            var n, r, i, s, o, u, a;
            if (v.isFunction(e)) return this.each(function (t) {
                    v(this).removeClass(e.call(this, t, this.className))
                });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(y);
                for (u = 0, a = this.length; u < a; u++) {
                    i = this[u];
                    if (i.nodeType === 1 && i.className) {
                        r = (" " + i.className + " ").replace(q, " ");
                        for (s = 0, o = n.length; s < o; s++) while (r.indexOf(" " + n[s] + " ") >= 0) r = r.replace(" " + n[s] + " ", " ");
                        i.className = e ? v.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return v.isFunction(e) ? this.each(function (n) {
                v(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if (n === "string") {
                    var i, s = 0,
                        o = v(this),
                        u = t,
                        a = e.split(y);
                    while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean") this.className && v._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || ""
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
                return
            }
            return i = v.isFunction(e), this.each(function (r) {
                var s, o = v(this);
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function (e) {
                    return e == null ? "" : e + ""
                })), n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s
            })
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = e.type === "select-one" || i < 0,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (v.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
                            t = v(n).val();
                            if (s) return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function (e, t) {
                    var n = v.makeArray(t);
                    return v(e).find("option").each(function () {
                        this.selected = v.inArray(v(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {},
        attr: function (e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2) return;
            if (i && v.isFunction(v.fn[n])) return v(e)[n](r);
            if (typeof e.getAttribute == "undefined") return v.prop(e, n, r);
            u = a !== 1 || !v.isXMLDoc(e), u && (n = n.toLowerCase(), o = v.attrHooks[n] || (X.test(n) ? F : j));
            if (r !== t) {
                if (r === null) {
                    v.removeAttr(e, n);
                    return
                }
                return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r)
            }
            return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
        },
        removeAttr: function (e, t) {
            var n, r, i, s, o = 0;
            if (t && e.nodeType === 1) {
                r = t.split(y);
                for (; o < r.length; o++) i = r[o], i && (n = v.propFix[i] || i, s = X.test(i), s || v.attr(e, i, ""), e.removeAttribute(V ? i : n), s && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (U.test(e.nodeName) && e.parentNode) v.error("type property can't be changed");
                    else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function (e, t) {
                    return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null
                },
                set: function (e, t, n) {
                    if (j && v.nodeName(e, "button")) return j.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), F = {
        get: function (e, n) {
            var r, i = v.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function (e, t, n) {
            var r;
            return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, V || (I = {
        name: !0,
        id: !0,
        coords: !0
    }, j = v.valHooks.button = {
        get: function (e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = i.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
        }
    }, v.each(["width", "height"], function (e, t) {
        v.attrHooks[t] = v.extend(v.attrHooks[t], {
            set: function (e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        })
    }), v.attrHooks.contenteditable = {
        get: j.get,
        set: function (e, t, n) {
            t === "" && (t = "false"), j.set(e, t, n)
        }
    }), v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function (e, n) {
        v.attrHooks[n] = v.extend(v.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }), v.support.style || (v.attrHooks.style = {
        get: function (e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each(["radio", "checkbox"], function () {
        v.valHooks[this] = {
            get: function (e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), v.each(["radio", "checkbox"], function () {
        v.valHooks[this] = v.extend(v.valHooks[this], {
            set: function (e, t) {
                if (v.isArray(t)) return e.checked = v.inArray(v(e).val(), t) >= 0
            }
        })
    });
    var $ = /^(?:textarea|input|select)$/i,
        J = /^([^\.]*|)(?:\.(.+)|)$/,
        K = /(?:^|\s)hover(\.\S+|)\b/,
        Q = /^key/,
        G = /^(?:mouse|contextmenu)|click/,
        Y = /^(?:focusinfocus|focusoutblur)$/,
        Z = function (e) {
            return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1")
        };
    v.event = {
        add: function (e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, d, m, g;
            if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e))) return;
            r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = v.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function (e) {
                return typeof v == "undefined" || !! e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments)
            }, u.elem = e), n = v.trim(Z(n)).split(" ");
            for (f = 0; f < n.length; f++) {
                l = J.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = v.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = v.event.special[c] || {}, p = v.extend({
                    type: c,
                    origType: l[1],
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: s,
                    needsContext: s && v.expr.match.needsContext.test(s),
                    namespace: h.join(".")
                }, d), m = a[c];
                if (!m) {
                    m = a[c] = [], m.delegateCount = 0;
                    if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                }
                g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), v.event.global[c] = !0
            }
            e = null
        },
        global: {},
        remove: function (e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, m, g = v.hasData(e) && v._data(e);
            if (!g || !(h = g.events)) return;
            t = v.trim(Z(t || "")).split(" ");
            for (s = 0; s < t.length; s++) {
                o = J.exec(t[s]) || [], u = a = o[1], f = o[2];
                if (!u) {
                    for (u in h) v.event.remove(e, u + t[s], n, r, !0);
                    continue
                }
                p = v.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (c = 0; c < d.length; c++) m = d[c], (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1), m.selector && d.delegateCount--, p.remove && p.remove.call(e, m));
                d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle), delete h[u])
            }
            v.isEmptyObject(h) && (delete g.handle, v.removeData(e, "events", !0))
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (n, r, s, o) {
            if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
                var u, a, f, l, c, h, p, d, m, g, y = n.type || n,
                    b = [];
                if (Y.test(y + v.event.triggered)) return;
                y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (b = y.split("."), y = b.shift(), b.sort());
                if ((!s || v.event.customEvent[y]) && !v.event.global[y]) return;
                n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = b.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = y.indexOf(":") < 0 ? "on" + y : "";
                if (!s) {
                    u = v.cache;
                    for (f in u) u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
                    return
                }
                n.result = t, n.target || (n.target = s), r = r != null ? v.makeArray(r) : [], r.unshift(n), p = v.event.special[y] || {};
                if (p.trigger && p.trigger.apply(s, r) === !1) return;
                m = [
                    [s, p.bindType || y]
                ];
                if (!o && !p.noBubble && !v.isWindow(s)) {
                    g = p.delegateType || y, l = Y.test(g + y) ? s : s.parentNode;
                    for (c = s; l; l = l.parentNode) m.push([l, g]), c = l;
                    c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g])
                }
                for (f = 0; f < m.length && !n.isPropagationStopped(); f++) l = m[f][0], n.type = m[f][1], d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"), d && d.apply(l, r), d = h && l[h], d && v.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();
                return n.type = y, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)), n.result
            }
            return
        },
        dispatch: function (n) {
            n = v.event.fix(n || e.event);
            var r, i, s, o, u, a, f, c, h, p, d = (v._data(this, "events") || {})[n.type] || [],
                m = d.delegateCount,
                g = l.call(arguments),
                y = !n.exclusive && !n.namespace,
                b = v.event.special[n.type] || {}, w = [];
            g[0] = n, n.delegateTarget = this;
            if (b.preDispatch && b.preDispatch.call(this, n) === !1) return;
            if (m && (!n.button || n.type !== "click")) for (s = n.target; s != this; s = s.parentNode || this) if (s.disabled !== !0 || n.type !== "click") {
                        u = {}, f = [];
                        for (r = 0; r < m; r++) c = d[r], h = c.selector, u[h] === t && (u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [s]).length), u[h] && f.push(c);
                        f.length && w.push({
                            elem: s,
                            matches: f
                        })
                    }
            d.length > m && w.push({
                elem: this,
                matches: d.slice(m)
            });
            for (r = 0; r < w.length && !n.isPropagationStopped(); r++) {
                a = w[r], n.currentTarget = a.elem;
                for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
                    c = a.matches[i];
                    if (y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) n.data = c.data, n.handleObj = c, o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()))
                }
            }
            return b.postDispatch && b.postDispatch.call(this, n), n.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, s, o, u = n.button,
                    a = n.fromElement;
                return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[v.expando]) return e;
            var t, n, r = e,
                s = v.event.fixHooks[e.type] || {}, o = s.props ? this.props.concat(s.props) : this.props;
            e = v.Event(r);
            for (t = o.length; t;) n = o[--t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, s.filter ? s.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (e, t, n) {
                    v.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = v.extend(new v.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, v.event.handle = v.event.dispatch, v.removeEvent = i.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
    }, v.Event = function (e, t) {
        if (!(this instanceof v.Event)) return new v.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0
    }, v.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = tt;
            var e = this.originalEvent;
            if (!e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function () {
            this.isPropagationStopped = tt;
            var e = this.originalEvent;
            if (!e) return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = tt, this.stopPropagation()
        },
        isDefaultPrevented: et,
        isPropagationStopped: et,
        isImmediatePropagationStopped: et
    }, v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        v.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj,
                    o = s.selector;
                if (!i || i !== r && !v.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }
        }
    }), v.support.submitBubbles || (v.event.special.submit = {
        setup: function () {
            if (v.nodeName(this, "form")) return !1;
            v.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
                r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), v._data(r, "_submit_attached", !0))
            })
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            if (v.nodeName(this, "form")) return !1;
            v.event.remove(this, "._submit")
        }
    }), v.support.changeBubbles || (v.event.special.change = {
        setup: function () {
            if ($.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") v.event.add(this, "propertychange._change", function (e) {
                        e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), v.event.add(this, "click._change", function (e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0)
                    });
                return !1
            }
            v.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function (e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0)
                }), v._data(t, "_change_attached", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return v.event.remove(this, "._change"), !$.test(this.nodeName)
        }
    }), v.support.focusinBubbles || v.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                v.event.simulate(t, e.target, v.event.fix(e), !0)
            };
        v.event.special[t] = {
            setup: function () {
                n++ === 0 && i.addEventListener(e, r, !0)
            },
            teardown: function () {
                --n === 0 && i.removeEventListener(e, r, !0)
            }
        }
    }), v.fn.extend({
        on: function (e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (u in e) this.on(u, n, r, e[u], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1) i = et;
            else if (!i) return this;
            return s === 1 && (o = i, i = function (e) {
                return v().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = v.guid++)), this.each(function () {
                v.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if (typeof e == "object") {
                for (s in e) this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function") r = n, n = t;
            return r === !1 && (r = et), this.each(function () {
                v.event.remove(this, e, r, n)
            })
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        live: function (e, t, n) {
            return v(this.context).on(e, this.selector, t, n), this
        },
        die: function (e, t) {
            return v(this.context).off(e, this.selector || "**", t), this
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function (e, t) {
            return this.each(function () {
                v.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            if (this[0]) return v.event.trigger(e, t, this[0], !0)
        },
        toggle: function (e) {
            var t = arguments,
                n = e.guid || v.guid++,
                r = 0,
                i = function (n) {
                    var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
                    return v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                };
            i.guid = n;
            while (r < t.length) t[r++].guid = n;
            return this.click(i)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        v.fn[t] = function (e, n) {
            return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks), G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks)
    }),
    function (e, t) {
        function nt(e, t, n, r) {
            n = n || [], t = t || g;
            var i, s, a, f, l = t.nodeType;
            if (!e || typeof e != "string") return n;
            if (l !== 1 && l !== 9) return [];
            a = o(t);
            if (!a && !r) if (i = R.exec(e)) if (f = i[1]) {
                        if (l === 9) {
                            s = t.getElementById(f);
                            if (!s || !s.parentNode) return n;
                            if (s.id === f) return n.push(s), n
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && u(t, s) && s.id === f) return n.push(s), n
                    } else {
                        if (i[2]) return S.apply(n, x.call(t.getElementsByTagName(e), 0)), n;
                        if ((f = i[3]) && Z && t.getElementsByClassName) return S.apply(n, x.call(t.getElementsByClassName(f), 0)), n
                    }
            return vt(e.replace(j, "$1"), t, n, r, a)
        }
        function rt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }
        function it(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }
        function st(e) {
            return N(function (t) {
                return t = +t, N(function (n, r) {
                    var i, s = e([], n.length, t),
                        o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function ot(e, t, n) {
            if (e === t) return n;
            var r = e.nextSibling;
            while (r) {
                if (r === t) return -1;
                r = r.nextSibling
            }
            return 1
        }
        function ut(e, t) {
            var n, r, s, o, u, a, f, l = L[d][e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = i.preFilter;
            while (u) {
                if (!n || (r = F.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
                n = !1;
                if (r = I.exec(u)) s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = r[0].replace(j, " ");
                for (o in i.filter)(r = J[o].exec(u)) && (!f[o] || (r = f[o](r))) && (s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = o, n.matches = r);
                if (!n) break
            }
            return t ? u.length : u ? nt.error(e) : L(e, a).slice(0)
        }
        function at(e, t, r) {
            var i = t.dir,
                s = r && t.dir === "parentNode",
                o = w++;
            return t.first ? function (t, n, r) {
                while (t = t[i]) if (s || t.nodeType === 1) return e(t, n, r)
            } : function (t, r, u) {
                if (!u) {
                    var a, f = b + " " + o + " ",
                        l = f + n;
                    while (t = t[i]) if (s || t.nodeType === 1) {
                            if ((a = t[d]) === l) return t.sizset;
                            if (typeof a == "string" && a.indexOf(f) === 0) {
                                if (t.sizset) return t
                            } else {
                                t[d] = l;
                                if (e(t, r, u)) return t.sizset = !0, t;
                                t.sizset = !1
                            }
                        }
                } else while (t = t[i]) if (s || t.nodeType === 1) if (e(t, r, u)) return t
            }
        }
        function ft(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }
        function lt(e, t, n, r, i) {
            var s, o = [],
                u = 0,
                a = e.length,
                f = t != null;
            for (; u < a; u++) if (s = e[u]) if (!n || n(s, r, i)) o.push(s), f && t.push(u);
            return o
        }
        function ct(e, t, n, r, i, s) {
            return r && !r[d] && (r = ct(r)), i && !i[d] && (i = ct(i, s)), N(function (s, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || dt(t || "*", u.nodeType ? [u] : u, []),
                    m = e && (s || !t) ? lt(v, h, e, u, a) : v,
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = lt(g, p), r(f, [], u, a), l = f.length;
                    while (l--) if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? T.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = lt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : S.apply(o, g)
            })
        }
        function ht(e) {
            var t, n, r, s = e.length,
                o = i.relative[e[0].type],
                u = o || i.relative[" "],
                a = o ? 1 : 0,
                f = at(function (e) {
                    return e === t
                }, u, !0),
                l = at(function (e) {
                    return T.call(t, e) > -1
                }, u, !0),
                h = [
                    function (e, n, r) {
                        return !o && (r || n !== c) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r))
                    }
                ];
            for (; a < s; a++) if (n = i.relative[e[a].type]) h = [at(ft(h), n)];
                else {
                    n = i.filter[e[a].type].apply(null, e[a].matches);
                    if (n[d]) {
                        r = ++a;
                        for (; r < s; r++) if (i.relative[e[r].type]) break;
                        return ct(a > 1 && ft(h), a > 1 && e.slice(0, a - 1).join("").replace(j, "$1"), n, a < r && ht(e.slice(a, r)), r < s && ht(e = e.slice(r)), r < s && e.join(""))
                    }
                    h.push(n)
                }
            return ft(h)
        }
        function pt(e, t) {
            var r = t.length > 0,
                s = e.length > 0,
                o = function (u, a, f, l, h) {
                    var p, d, v, m = [],
                        y = 0,
                        w = "0",
                        x = u && [],
                        T = h != null,
                        N = c,
                        C = u || s && i.find.TAG("*", h && a.parentNode || a),
                        k = b += N == null ? 1 : Math.E;
                    T && (c = a !== g && a, n = o.el);
                    for (;
                    (p = C[w]) != null; w++) {
                        if (s && p) {
                            for (d = 0; v = e[d]; d++) if (v(p, a, f)) {
                                    l.push(p);
                                    break
                                }
                            T && (b = k, n = ++o.el)
                        }
                        r && ((p = !v && p) && y--, u && x.push(p))
                    }
                    y += w;
                    if (r && w !== y) {
                        for (d = 0; v = t[d]; d++) v(x, m, a, f);
                        if (u) {
                            if (y > 0) while (w--)!x[w] && !m[w] && (m[w] = E.call(l));
                            m = lt(m)
                        }
                        S.apply(l, m), T && !u && m.length > 0 && y + t.length > 1 && nt.uniqueSort(l)
                    }
                    return T && (b = k, c = N), x
                };
            return o.el = 0, r ? N(o) : o
        }
        function dt(e, t, n) {
            var r = 0,
                i = t.length;
            for (; r < i; r++) nt(e, t[r], n);
            return n
        }
        function vt(e, t, n, r, s) {
            var o, u, f, l, c, h = ut(e),
                p = h.length;
            if (!r && h.length === 1) {
                u = h[0] = h[0].slice(0);
                if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && !s && i.relative[u[1].type]) {
                    t = i.find.ID(f.matches[0].replace($, ""), t, s)[0];
                    if (!t) return n;
                    e = e.slice(u.shift().length)
                }
                for (o = J.POS.test(e) ? -1 : u.length - 1; o >= 0; o--) {
                    f = u[o];
                    if (i.relative[l = f.type]) break;
                    if (c = i.find[l]) if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
                            u.splice(o, 1), e = r.length && u.join("");
                            if (!e) return S.apply(n, x.call(r, 0)), n;
                            break
                        }
                }
            }
            return a(e, h)(r, t, s, n, z.test(e)), n
        }
        function mt() {}
        var n, r, i, s, o, u, a, f, l, c, h = !0,
            p = "undefined",
            d = ("sizcache" + Math.random()).replace(".", ""),
            m = String,
            g = e.document,
            y = g.documentElement,
            b = 0,
            w = 0,
            E = [].pop,
            S = [].push,
            x = [].slice,
            T = [].indexOf || function (e) {
                var t = 0,
                    n = this.length;
                for (; t < n; t++) if (this[t] === e) return t;
                return -1
            }, N = function (e, t) {
                return e[d] = t == null || t, e
            }, C = function () {
                var e = {}, t = [];
                return N(function (n, r) {
                    return t.push(n) > i.cacheLength && delete e[t.shift()], e[n + " "] = r
                }, e)
            }, k = C(),
            L = C(),
            A = C(),
            O = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
            _ = M.replace("w", "w#"),
            D = "([*^$|!~]?=)",
            P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]",
            H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)",
            B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)",
            j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
            F = new RegExp("^" + O + "*," + O + "*"),
            I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"),
            q = new RegExp(H),
            R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
            U = /^:not/,
            z = /[\x20\t\r\n\f]*[+~]/,
            W = /:not\($/,
            X = /h\d/i,
            V = /input|select|textarea|button/i,
            $ = /\\(?!\\)/g,
            J = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + H),
                POS: new RegExp(B, "i"),
                CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                needsContext: new RegExp("^" + O + "*[>+~]|" + B, "i")
            }, K = function (e) {
                var t = g.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return !1
                } finally {
                    t = null
                }
            }, Q = K(function (e) {
                return e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length
            }),
            G = K(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#"
            }),
            Y = K(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return t !== "boolean" && t !== "string"
            }),
            Z = K(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
            }),
            et = K(function (e) {
                e.id = d + 0, e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>", y.insertBefore(e, y.firstChild);
                var t = g.getElementsByName && g.getElementsByName(d).length === 2 + g.getElementsByName(d + 0).length;
                return r = !g.getElementById(d), y.removeChild(e), t
            });
        try {
            x.call(y.childNodes, 0)[0].nodeType
        } catch (tt) {
            x = function (e) {
                var t, n = [];
                for (; t = this[e]; e++) n.push(t);
                return n
            }
        }
        nt.matches = function (e, t) {
            return nt(e, null, null, t)
        }, nt.matchesSelector = function (e, t) {
            return nt(t, null, null, [e]).length > 0
        }, s = nt.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (i === 1 || i === 9 || i === 11) {
                    if (typeof e.textContent == "string") return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                } else if (i === 3 || i === 4) return e.nodeValue
            } else for (; t = e[r]; r++) n += s(t);
            return n
        }, o = nt.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, u = nt.contains = y.contains ? function (e, t) {
            var n = e.nodeType === 9 ? e.documentElement : e,
                r = t && t.parentNode;
            return e === r || !! (r && r.nodeType === 1 && n.contains && n.contains(r))
        } : y.compareDocumentPosition ? function (e, t) {
            return t && !! (e.compareDocumentPosition(t) & 16)
        } : function (e, t) {
            while (t = t.parentNode) if (t === e) return !0;
            return !1
        }, nt.attr = function (e, t) {
            var n, r = o(e);
            return r || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
        }, i = nt.selectors = {
            cacheLength: 50,
            createPseudo: N,
            match: J,
            attrHandle: G ? {} : {
                href: function (e) {
                    return e.getAttribute("href", 2)
                },
                type: function (e) {
                    return e.getAttribute("type")
                }
            },
            find: {
                ID: r ? function (e, t, n) {
                    if (typeof t.getElementById !== p && !n) {
                        var r = t.getElementById(e);
                        return r && r.parentNode ? [r] : []
                    }
                } : function (e, n, r) {
                    if (typeof n.getElementById !== p && !r) {
                        var i = n.getElementById(e);
                        return i ? i.id === e || typeof i.getAttributeNode !== p && i.getAttributeNode("id").value === e ? [i] : t : []
                    }
                },
                TAG: Q ? function (e, t) {
                    if (typeof t.getElementsByTagName !== p) return t.getElementsByTagName(e)
                } : function (e, t) {
                    var n = t.getElementsByTagName(e);
                    if (e === "*") {
                        var r, i = [],
                            s = 0;
                        for (; r = n[s]; s++) r.nodeType === 1 && i.push(r);
                        return i
                    }
                    return n
                },
                NAME: et && function (e, t) {
                    if (typeof t.getElementsByName !== p) return t.getElementsByName(name)
                },
                CLASS: Z && function (e, t, n) {
                    if (typeof t.getElementsByClassName !== p && !n) return t.getElementsByClassName(e)
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace($, ""), e[3] = (e[4] || e[5] || "").replace($, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || nt.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n;
                    if (J.CHILD.test(e[0])) return null;
                    if (e[3]) e[2] = e[3];
                    else if (t = e[4]) q.test(t) && (n = ut(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t;
                    return e.slice(0, 3)
                }
            },
            filter: {
                ID: r ? function (e) {
                    return e = e.replace($, ""),
                    function (t) {
                        return t.getAttribute("id") === e
                    }
                } : function (e) {
                    return e = e.replace($, ""),
                    function (t) {
                        var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                },
                TAG: function (e) {
                    return e === "*" ? function () {
                        return !0
                    } : (e = e.replace($, "").toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function (e) {
                    var t = k[d][e + " "];
                    return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && k(e, function (e) {
                        return t.test(e.className || typeof e.getAttribute !== p && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (r, i) {
                        var s = nt.attr(r, e);
                        return s == null ? t === "!=" : t ? (s += "", t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, r) {
                    return e === "nth" ? function (e) {
                        var t, i, s = e.parentNode;
                        if (n === 1 && r === 0) return !0;
                        if (s) {
                            i = 0;
                            for (t = s.firstChild; t; t = t.nextSibling) if (t.nodeType === 1) {
                                    i++;
                                    if (e === t) break
                                }
                        }
                        return i -= r, i === n || i % n === 0 && i / n >= 0
                    } : function (t) {
                        var n = t;
                        switch (e) {
                        case "only":
                        case "first":
                            while (n = n.previousSibling) if (n.nodeType === 1) return !1;
                            if (e === "first") return !0;
                            n = t;
                        case "last":
                            while (n = n.nextSibling) if (n.nodeType === 1) return !1;
                            return !0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + e);
                    return r[d] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function (e, n) {
                        var i, s = r(e, t),
                            o = s.length;
                        while (o--) i = T.call(e, s[o]), e[i] = !(n[i] = s[o])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: N(function (e) {
                    var t = [],
                        n = [],
                        r = a(e.replace(j, "$1"));
                    return r[d] ? N(function (e, t, n, i) {
                        var s, o = r(e, null, i, []),
                            u = e.length;
                        while (u--) if (s = o[u]) e[u] = !(t[u] = s)
                    }) : function (e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),
                has: N(function (e) {
                    return function (t) {
                        return nt(e, t).length > 0
                    }
                }),
                contains: N(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                    }
                }),
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !! e.checked || t === "option" && !! e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                parent: function (e) {
                    return !i.pseudos.empty(e)
                },
                empty: function (e) {
                    var t;
                    e = e.firstChild;
                    while (e) {
                        if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;
                        e = e.nextSibling
                    }
                    return !0
                },
                header: function (e) {
                    return X.test(e.nodeName)
                },
                text: function (e) {
                    var t, n;
                    return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
                },
                radio: rt("radio"),
                checkbox: rt("checkbox"),
                file: rt("file"),
                password: rt("password"),
                image: rt("image"),
                submit: it("submit"),
                reset: it("reset"),
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                input: function (e) {
                    return V.test(e.nodeName)
                },
                focus: function (e) {
                    var t = e.ownerDocument;
                    return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                active: function (e) {
                    return e === e.ownerDocument.activeElement
                },
                first: st(function () {
                    return [0]
                }),
                last: st(function (e, t) {
                    return [t - 1]
                }),
                eq: st(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: st(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: st(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: st(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: st(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, f = y.compareDocumentPosition ? function (e, t) {
            return e === t ? (l = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
        } : function (e, t) {
            if (e === t) return l = !0, 0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var n, r, i = [],
                s = [],
                o = e.parentNode,
                u = t.parentNode,
                a = o;
            if (o === u) return ot(e, t);
            if (!o) return -1;
            if (!u) return 1;
            while (a) i.unshift(a), a = a.parentNode;
            a = u;
            while (a) s.unshift(a), a = a.parentNode;
            n = i.length, r = s.length;
            for (var f = 0; f < n && f < r; f++) if (i[f] !== s[f]) return ot(i[f], s[f]);
            return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1)
        }, [0, 0].sort(f), h = !l, nt.uniqueSort = function (e) {
            var t, n = [],
                r = 1,
                i = 0;
            l = h, e.sort(f);
            if (l) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                while (i--) e.splice(n[i], 1)
            }
            return e
        }, nt.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, a = nt.compile = function (e, t) {
            var n, r = [],
                i = [],
                s = A[d][e + " "];
            if (!s) {
                t || (t = ut(e)), n = t.length;
                while (n--) s = ht(t[n]), s[d] ? r.push(s) : i.push(s);
                s = A(e, pt(i, r))
            }
            return s
        }, g.querySelectorAll && function () {
            var e, t = vt,
                n = /'|\\/g,
                r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                i = [":focus"],
                s = [":active"],
                u = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
            K(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || i.push(":checked")
            }), K(function (e) {
                e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + O + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled")
            }), i = new RegExp(i.join("|")), vt = function (e, r, s, o, u) {
                if (!o && !u && !i.test(e)) {
                    var a, f, l = !0,
                        c = d,
                        h = r,
                        p = r.nodeType === 9 && e;
                    if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                        a = ut(e), (l = r.getAttribute("id")) ? c = l.replace(n, "\\$&") : r.setAttribute("id", c), c = "[id='" + c + "'] ", f = a.length;
                        while (f--) a[f] = c + a[f].join("");
                        h = z.test(e) && r.parentNode || r, p = a.join(",")
                    }
                    if (p) try {
                            return S.apply(s, x.call(h.querySelectorAll(p), 0)), s
                    } catch (v) {} finally {
                        l || r.removeAttribute("id")
                    }
                }
                return t(e, r, s, o, u)
            }, u && (K(function (t) {
                e = u.call(t, "div");
                try {
                    u.call(t, "[test!='']:sizzle"), s.push("!=", H)
                } catch (n) {}
            }), s = new RegExp(s.join("|")), nt.matchesSelector = function (t, n) {
                n = n.replace(r, "='$1']");
                if (!o(t) && !s.test(n) && !i.test(n)) try {
                        var a = u.call(t, n);
                        if (a || e || t.document && t.document.nodeType !== 11) return a
                } catch (f) {}
                return nt(n, null, null, [t]).length > 0
            })
        }(), i.pseudos.nth = i.pseudos.eq, i.filters = mt.prototype = i.pseudos, i.setFilters = new mt, nt.attr = v.attr, v.find = nt, v.expr = nt.selectors, v.expr[":"] = v.expr.pseudos, v.unique = nt.uniqueSort, v.text = nt.getText, v.isXMLDoc = nt.isXML, v.contains = nt.contains
    }(e);
    var nt = /Until$/,
        rt = /^(?:parents|prev(?:Until|All))/,
        it = /^.[^:#\[\.,]*$/,
        st = v.expr.match.needsContext,
        ot = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    v.fn.extend({
        find: function (e) {
            var t, n, r, i, s, o, u = this;
            if (typeof e != "string") return v(e).filter(function () {
                    for (t = 0, n = u.length; t < n; t++) if (v.contains(u[t], this)) return !0
                });
            o = this.pushStack("", "find", e);
            for (t = 0, n = this.length; t < n; t++) {
                r = o.length, v.find(e, this[t], o);
                if (t > 0) for (i = r; i < o.length; i++) for (s = 0; s < r; s++) if (o[s] === o[i]) {
                                o.splice(i--, 1);
                                break
                            }
            }
            return o
        },
        has: function (e) {
            var t, n = v(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; t < r; t++) if (v.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(ft(this, e, !1), "not", e)
        },
        filter: function (e) {
            return this.pushStack(ft(this, e, !0), "filter", e)
        },
        is: function (e) {
            return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e)
        },
        index: function (e) {
            return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (e, t) {
            var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e),
                r = v.merge(this.get(), n);
            return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r))
        },
        addBack: function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), v.fn.andSelf = v.fn.addBack, v.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (e) {
            return v.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return v.dir(e, "parentNode", n)
        },
        next: function (e) {
            return at(e, "nextSibling")
        },
        prev: function (e) {
            return at(e, "previousSibling")
        },
        nextAll: function (e) {
            return v.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return v.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return v.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return v.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return v.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return v.sibling(e.firstChild)
        },
        contents: function (e) {
            return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes)
        }
    }, function (e, t) {
        v.fn[e] = function (n, r) {
            var i = v.map(this, t, n);
            return nt.test(e) || (r = n), r && typeof r == "string" && (i = v.filter(r, i)), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && rt.test(e) && (i = i.reverse()), this.pushStack(i, e, l.call(arguments).join(","))
        }
    }), v.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t)
        },
        dir: function (e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ht = / jQuery\d+="(?:null|\d+)"/g,
        pt = /^\s+/,
        dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        vt = /<([\w:]+)/,
        mt = /<tbody/i,
        gt = /<|&#?\w+;/,
        yt = /<(?:script|style|link)/i,
        bt = /<(?:script|object|embed|option|style)/i,
        wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i"),
        Et = /^(?:checkbox|radio)$/,
        St = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xt = /\/(java|ecma)script/i,
        Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Nt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, Ct = lt(i),
        kt = Ct.appendChild(i.createElement("div"));
    Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]), v.fn.extend({
        text: function (e) {
            return v.access(this, function (e) {
                return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function (e) {
            if (v.isFunction(e)) return this.each(function (t) {
                    v(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = v(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return v.isFunction(e) ? this.each(function (t) {
                v(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = v(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = v.isFunction(e);
            return this.each(function (n) {
                v(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                v.nodeName(this, "body") || v(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            if (!ut(this[0])) return this.domManip(arguments, !1, function (e) {
                    this.parentNode.insertBefore(e, this)
                });
            if (arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(e, this), "before", this.selector)
            }
        },
        after: function () {
            if (!ut(this[0])) return this.domManip(arguments, !1, function (e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
            if (arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(this, e), "after", this.selector)
            }
        },
        remove: function (e, t) {
            var n, r = 0;
            for (;
            (n = this[r]) != null; r++) if (!e || v.filter(e, [n]).length)!t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), v.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
            return this
        },
        empty: function () {
            var e, t = 0;
            for (;
            (e = this[t]) != null; t++) {
                e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));
                while (e.firstChild) e.removeChild(e.firstChild)
            }
            return this
        },
        clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return v.clone(this, e, t)
            })
        },
        html: function (e) {
            return v.access(this, function (e) {
                var n = this[0] || {}, r = 0,
                    i = this.length;
                if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
                if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(dt, "<$1></$2>");
                    try {
                        for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                        n = 0
                    } catch (s) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function (e) {
            return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function (t) {
                var n = v(this),
                    r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : (typeof e != "string" && (e = v(e).detach()), this.each(function () {
                var t = this.nextSibling,
                    n = this.parentNode;
                v(this).remove(), t ? v(t).before(e) : v(n).append(e)
            }))
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, n, r) {
            e = [].concat.apply([], e);
            var i, s, o, u, a = 0,
                f = e[0],
                l = [],
                c = this.length;
            if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f)) return this.each(function () {
                    v(this).domManip(e, n, r)
                });
            if (v.isFunction(f)) return this.each(function (i) {
                    var s = v(this);
                    e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
                });
            if (this[0]) {
                i = v.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);
                if (s) {
                    n = n && v.nodeName(s, "tr");
                    for (u = i.cacheable || c - 1; a < c; a++) r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0))
                }
                o = s = null, l.length && v.each(l, function (e, t) {
                    t.src ? v.ajax ? v.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")), t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }), v.buildFragment = function (e, n, r) {
        var s, o, u, a = e[0];
        return n = n || i, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0, s = v.fragments[a], u = s !== t), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), {
            fragment: s,
            cacheable: o
        }
    }, v.fragments = {}, v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        v.fn[e] = function (n) {
            var r, i = 0,
                s = [],
                o = v(n),
                u = o.length,
                a = this.length === 1 && this[0].parentNode;
            if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1) return o[t](this[0]), this;
            for (; i < u; i++) r = (i > 0 ? this.clone(!0) : this).get(), v(o[i])[t](r), s = s.concat(r);
            return this.pushStack(s, e, o.selector)
        }
    }), v.extend({
        clone: function (e, t, n) {
            var r, i, s, o;
            v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(o = kt.firstChild));
            if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
                Ot(e, o), r = Mt(e), i = Mt(o);
                for (s = 0; r[s]; ++s) i[s] && Ot(r[s], i[s])
            }
            if (t) {
                At(e, o);
                if (n) {
                    r = Mt(e), i = Mt(o);
                    for (s = 0; r[s]; ++s) At(r[s], i[s])
                }
            }
            return r = i = null, o
        },
        clean: function (e, t, n, r) {
            var s, o, u, a, f, l, c, h, p, d, m, g, y = t === i && Ct,
                b = [];
            if (!t || typeof t.createDocumentFragment == "undefined") t = i;
            for (s = 0;
            (u = e[s]) != null; s++) {
                typeof u == "number" && (u += "");
                if (!u) continue;
                if (typeof u == "string") if (!gt.test(u)) u = t.createTextNode(u);
                    else {
                        y = y || lt(t), c = t.createElement("div"), y.appendChild(c), u = u.replace(dt, "<$1></$2>"), a = (vt.exec(u) || ["", ""])[1].toLowerCase(), f = Nt[a] || Nt._default, l = f[0], c.innerHTML = f[1] + u + f[2];
                        while (l--) c = c.lastChild;
                        if (!v.support.tbody) {
                            h = mt.test(u), p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
                            for (o = p.length - 1; o >= 0; --o) v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o])
                        }!v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild), u = c.childNodes, c.parentNode.removeChild(c)
                    }
                u.nodeType ? b.push(u) : v.merge(b, u)
            }
            c && (u = c = y = null);
            if (!v.support.appendChecked) for (s = 0;
                (u = b[s]) != null; s++) v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
            if (n) {
                m = function (e) {
                    if (!e.type || xt.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                };
                for (s = 0;
                (u = b[s]) != null; s++) if (!v.nodeName(u, "script") || !m(u)) n.appendChild(u), typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m), b.splice.apply(b, [s + 1, 0].concat(g)), s += g.length)
            }
            return b
        },
        cleanData: function (e, t) {
            var n, r, i, s, o = 0,
                u = v.expando,
                a = v.cache,
                f = v.support.deleteExpando,
                l = v.event.special;
            for (;
            (i = e[o]) != null; o++) if (t || v.acceptData(i)) {
                    r = i[u], n = r && a[r];
                    if (n) {
                        if (n.events) for (s in n.events) l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
                        a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, v.deletedIds.push(r))
                    }
                }
        }
    }),
    function () {
        var e, t;
        v.uaMatch = function (e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), v.browser = t, v.sub = function () {
            function e(t, n) {
                return new e.fn.init(t, n)
            }
            v.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (r, i) {
                return i && i instanceof v && !(i instanceof e) && (i = e(i)), v.fn.init.call(this, r, i, t)
            }, e.fn.init.prototype = e.fn;
            var t = e(i);
            return e
        }
    }();
    var Dt, Pt, Ht, Bt = /alpha\([^)]*\)/i,
        jt = /opacity=([^)]*)/,
        Ft = /^(top|right|bottom|left)$/,
        It = /^(none|table(?!-c[ea]).+)/,
        qt = /^margin/,
        Rt = new RegExp("^(" + m + ")(.*)$", "i"),
        Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"),
        zt = new RegExp("^([-+])=(" + m + ")", "i"),
        Wt = {
            BODY: "block"
        }, Xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Vt = {
            letterSpacing: 0,
            fontWeight: 400
        }, $t = ["Top", "Right", "Bottom", "Left"],
        Jt = ["Webkit", "O", "Moz", "ms"],
        Kt = v.fn.toggle;
    v.fn.extend({
        css: function (e, n) {
            return v.access(this, function (e, n, r) {
                return r !== t ? v.style(e, n, r) : v.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return Yt(this, !0)
        },
        hide: function () {
            return Yt(this)
        },
        toggle: function (e, t) {
            var n = typeof e == "boolean";
            return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function () {
                (n ? e : Gt(this)) ? v(this).show() : v(this).hide()
            })
        }
    }), v.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Dt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": v.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = v.camelCase(n),
                f = e.style;
            n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)), u = v.cssHooks[n] || v.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !v.cssNumber[a] && (r += "px");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                    f[n] = r
            } catch (l) {}
        },
        css: function (e, n, r, i) {
            var s, o, u, a = v.camelCase(n);
            return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && "get" in u && (s = u.get(e, !0, i)), s === t && (s = Dt(e, n)), s === "normal" && n in Vt && (s = Vt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s
        },
        swap: function (e, t, n) {
            var r, i, s = {};
            for (i in t) s[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for (i in t) e.style[i] = s[i];
            return r
        }
    }), e.getComputedStyle ? Dt = function (t, n) {
        var r, i, s, o, u = e.getComputedStyle(t, null),
            a = t.style;
        return u && (r = u.getPropertyValue(n) || u[n], r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)), Ut.test(r) && qt.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)), r
    } : i.documentElement.currentStyle && (Dt = function (e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t],
            s = e.style;
        return i == null && s && s[t] && (i = s[t]), Ut.test(i) && !Ft.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i
    }), v.each(["height", "width"], function (e, t) {
        v.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function () {
                        return tn(e, t, r)
                    }) : tn(e, t, r)
            },
            set: function (e, n, r) {
                return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0)
            }
        }
    }), v.support.opacity || (v.cssHooks.opacity = {
        get: function (e, t) {
            return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (r && !r.filter) return
            }
            n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i
        }
    }), v(function () {
        v.support.reliableMarginRight || (v.cssHooks.marginRight = {
            get: function (e, t) {
                return v.swap(e, {
                    display: "inline-block"
                }, function () {
                    if (t) return Dt(e, "marginRight")
                })
            }
        }), !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function (e, t) {
            v.cssHooks[t] = {
                get: function (e, n) {
                    if (n) {
                        var r = Dt(e, t);
                        return Ut.test(r) ? v(e).position()[t] + "px" : r
                    }
                }
            }
        })
    }), v.expr && v.expr.filters && (v.expr.filters.hidden = function (e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none"
    }, v.expr.filters.visible = function (e) {
        return !v.expr.filters.hidden(e)
    }), v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        v.cssHooks[e + t] = {
            expand: function (n) {
                var r, i = typeof n == "string" ? n.split(" ") : [n],
                    s = {};
                for (r = 0; r < 4; r++) s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
                return s
            }
        }, qt.test(e) || (v.cssHooks[e + t].set = Zt)
    });
    var rn = /%20/g,
        sn = /\[\]$/,
        on = /\r?\n/g,
        un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        an = /^(?:select|textarea)/i;
    v.fn.extend({
        serialize: function () {
            return v.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? v.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type))
            }).map(function (e, t) {
                var n = v(this).val();
                return n == null ? null : v.isArray(n) ? v.map(n, function (e, n) {
                    return {
                        name: t.name,
                        value: e.replace(on, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }), v.param = function (e, n) {
        var r, i = [],
            s = function (e, t) {
                t = v.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
        if (v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function () {
                s(this.name, this.value)
            });
        else for (r in e) fn(r, e[r], n, s);
        return i.join("&").replace(rn, "+")
    };
    var ln, cn, hn = /#.*$/,
        pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        vn = /^(?:GET|HEAD)$/,
        mn = /^\/\//,
        gn = /\?/,
        yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bn = /([?&])_=[^&]*/,
        wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        En = v.fn.load,
        Sn = {}, xn = {}, Tn = ["*/"] + ["*"];
    try {
        cn = s.href
    } catch (Nn) {
        cn = i.createElement("a"), cn.href = "", cn = cn.href
    }
    ln = wn.exec(cn.toLowerCase()) || [], v.fn.load = function (e, n, r) {
        if (typeof e != "string" && En) return En.apply(this, arguments);
        if (!this.length) return this;
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), v.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n,
            complete: function (e, t) {
                r && u.each(r, o || [e.responseText, t, e])
            }
        }).done(function (e) {
            o = arguments, u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e)
        }), this
    }, v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        v.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), v.each(["get", "post"], function (e, n) {
        v[n] = function (e, r, i, s) {
            return v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }), v.extend({
        getScript: function (e, n) {
            return v.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return v.get(e, t, n, "json")
        },
        ajaxSetup: function (e, t) {
            return t ? Ln(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), Ln(e, t), e
        },
        ajaxSettings: {
            url: cn,
            isLocal: dn.test(ln[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Tn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": v.parseJSON,
                "text xml": v.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Cn(Sn),
        ajaxTransport: Cn(xn),
        ajax: function (e, n) {
            function T(e, n, s, a) {
                var l, y, b, w, S, T = n;
                if (E === 2) return;
                E = 2, u && clearTimeout(u), o = t, i = a || "", x.readyState = e > 0 ? 4 : 0, s && (w = An(c, x, s));
                if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (v.lastModified[r] = S), S = x.getResponseHeader("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = On(c, w), T = l.state, y = l.data, b = l.error, l = !b);
                else {
                    b = T;
                    if (!T || e) T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(g), g = t, f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]), m.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --v.active || v.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = v.ajaxSetup({}, n),
                h = c.context || c,
                p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event,
                d = v.Deferred(),
                m = v.Callbacks("once memory"),
                g = c.statusCode || {}, b = {}, w = {}, E = 0,
                S = "canceled",
                x = {
                    readyState: 0,
                    setRequestHeader: function (e, t) {
                        if (!E) {
                            var n = e.toLowerCase();
                            e = w[n] = w[n] || e, b[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return E === 2 ? i : null
                    },
                    getResponseHeader: function (e) {
                        var n;
                        if (E === 2) {
                            if (!s) {
                                s = {};
                                while (n = pn.exec(i)) s[n[1].toLowerCase()] = n[2]
                            }
                            n = s[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function (e) {
                        return E || (c.mimeType = e), this
                    },
                    abort: function (e) {
                        return e = e || S, o && o.abort(e), T(0, e), this
                    }
                };
            d.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function (e) {
                if (e) {
                    var t;
                    if (E < 2) for (t in e) g[t] = [g[t], e[t]];
                    else t = e[x.status], x.always(t)
                }
                return this
            }, c.url = ((e || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//"), c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y), c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === ln[1] && a[2] === ln[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)), kn(Sn, c, n, x);
            if (E === 2) return x;
            f = c.global, c.type = c.type.toUpperCase(), c.hasContent = !vn.test(c.type), f && v.active++ === 0 && v.event.trigger("ajaxStart");
            if (!c.hasContent) {
                c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data, delete c.data), r = c.url;
                if (c.cache === !1) {
                    var N = v.now(),
                        C = c.url.replace(bn, "$1_=" + N);
                    c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "")
                }
            }(c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), c.ifModified && (r = r || c.url, v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers) x.setRequestHeader(l, c.headers[l]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                S = "abort";
                for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[l](c[l]);
                o = kn(xn, c, n, x);
                if (!o) T(-1, "No Transport");
                else {
                    x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        E = 1, o.send(b, T)
                    } catch (k) {
                        if (!(E < 2)) throw k;
                        T(-1, k)
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Mn = [],
        _n = /\?/,
        Dn = /(=)\?(?=&|$)|\?\?/,
        Pn = v.now();
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Mn.pop() || v.expando + "_" + Pn++;
            return this[e] = !0, e
        }
    }), v.ajaxPrefilter("json jsonp", function (n, r, i) {
        var s, o, u, a = n.data,
            f = n.url,
            l = n.jsonp !== !1,
            c = l && Dn.test(f),
            h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);
        if (n.dataTypes[0] === "jsonp" || c || h) return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
                return u || v.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", e[s] = function () {
            u = arguments
        }, i.always(function () {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Mn.push(s)), u && v.isFunction(o) && o(u[0]), u = o = t
        }), "script"
    }), v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (e) {
                return v.globalEval(e), e
            }
        }
    }), v.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), v.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
            return {
                send: function (s, o) {
                    n = i.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, i) {
                        if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Hn, Bn = e.ActiveXObject ? function () {
            for (var e in Hn) Hn[e](0, 1)
        } : !1,
        jn = 0;
    v.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && Fn() || In()
    } : Fn,
    function (e) {
        v.extend(v.support, {
            ajax: !! e,
            cors: !! e && "withCredentials" in e
        })
    }(v.ajaxSettings.xhr()), v.support.ajax && v.ajaxTransport(function (n) {
        if (!n.crossDomain || v.support.cors) {
            var r;
            return {
                send: function (i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields) for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u])
                    } catch (f) {}
                    a.send(n.hasContent && n.data || null), r = function (e, i) {
                        var u, f, l, c, h;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t, o && (a.onreadystatechange = v.noop, Bn && delete Hn[o]);
                                if (i) a.readyState !== 4 && a.abort();
                                else {
                                    u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);
                                    try {
                                        c.text = a.responseText
                                    } catch (p) {}
                                    try {
                                        f = a.statusText
                                    } catch (p) {
                                        f = ""
                                    }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch (d) {
                            i || s(-1, d)
                        }
                        c && s(u, f, c, l)
                    }, n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++jn, Bn && (Hn || (Hn = {}, v(e).unload(Bn)), Hn[o] = r), a.onreadystatechange = r) : r()
                },
                abort: function () {
                    r && r(0, 1)
                }
            }
        }
    });
    var qn, Rn, Un = /^(?:toggle|show|hide)$/,
        zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"),
        Wn = /queueHooks$/,
        Xn = [Gn],
        Vn = {
            "*": [
                function (e, t) {
                    var n, r, i = this.createTween(e, t),
                        s = zn.exec(t),
                        o = i.cur(),
                        u = +o || 0,
                        a = 1,
                        f = 20;
                    if (s) {
                        n = +s[2], r = s[3] || (v.cssNumber[e] ? "" : "px");
                        if (r !== "px" && u) {
                            u = v.css(i.elem, e, !0) || n || 1;
                            do a = a || ".5", u /= a, v.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f)
                        }
                        i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
                    }
                    return i
                }
            ]
        };
    v.Animation = v.extend(Kn, {
        tweener: function (e, t) {
            v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; r < i; r++) n = e[r], Vn[n] = Vn[n] || [], Vn[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Xn.unshift(e) : Xn.push(e)
        }
    }), v.Tween = Yn, Yn.prototype = {
        constructor: Yn,
        init: function (e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = Yn.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yn.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = Yn.propHooks[this.prop];
            return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yn.propHooks._default.set(this), this
        }
    }, Yn.prototype.init.prototype = Yn.prototype, Yn.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return e.elem[e.prop] == null || !! e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function (e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, v.each(["toggle", "show", "hide"], function (e, t) {
        var n = v.fn[t];
        v.fn[t] = function (r, i, s) {
            return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s)
        }
    }), v.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(Gt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = v.isEmptyObject(e),
                s = v.speed(t, n, r),
                o = function () {
                    var t = Kn(this, v.extend({}, e), s);
                    i && t.stop(!0)
                };
            return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = e != null && e + "queueHooks",
                    s = v.timers,
                    o = v._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else for (n in o) o[n] && o[n].stop && Wn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && v.dequeue(this, e)
            })
        }
    }), v.each({
        slideDown: Zn("show"),
        slideUp: Zn("hide"),
        slideToggle: Zn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        v.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), v.speed = function (e, t, n) {
        var r = e && typeof e == "object" ? v.extend({}, e) : {
            complete: n || !n && t || v.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !v.isFunction(t) && t
        };
        r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function () {
            v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue)
        }, r
    }, v.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, v.timers = [], v.fx = Yn.prototype.init, v.fx.tick = function () {
        var e, n = v.timers,
            r = 0;
        qn = v.now();
        for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || v.fx.stop(), qn = t
    }, v.fx.timer = function (e) {
        e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval))
    }, v.fx.interval = 13, v.fx.stop = function () {
        clearInterval(Rn), Rn = null
    }, v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function (e) {
        return v.grep(v.timers, function (t) {
            return e === t.elem
        }).length
    });
    var er = /^(?:body|html)$/i;
    v.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
                v.offset.setOffset(this, e, t)
            });
        var n, r, i, s, o, u, a, f = {
                top: 0,
                left: 0
            }, l = this[0],
            c = l && l.ownerDocument;
        if (!c) return;
        return (r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement, v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()), i = tr(c), s = n.clientTop || r.clientTop || 0, o = n.clientLeft || r.clientLeft || 0, u = i.pageYOffset || n.scrollTop, a = i.pageXOffset || n.scrollLeft, {
            top: f.top + u - s,
            left: f.left + a - o
        }) : f)
    }, v.offset = {
        bodyOffset: function (e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function (e, t, n) {
            var r = v.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = v(e),
                s = i.offset(),
                o = v.css(e, "top"),
                u = v.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1,
                f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, v.fn.extend({
        position: function () {
            if (!this[0]) return;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = er.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || i.body;
                while (e && !er.test(e.nodeName) && v.css(e, "position") === "static") e = e.offsetParent;
                return e || i.body
            })
        }
    }), v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        v.fn[e] = function (i) {
            return v.access(this, function (e, i, s) {
                var o = tr(e);
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), v.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        v.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            v.fn[i] = function (i, s) {
                var o = arguments.length && (r || typeof i != "boolean"),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return v.access(this, function (n, r, i) {
                    var s;
                    return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = v, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return v
    })
})(window),
function (e, t) {
    var n = function () {
        var t = e._data(document, "events");
        return t && t.click && e.grep(t.click, function (e) {
            return e.namespace === "rails"
        }).length
    };
    n() && e.error("jquery-ujs has already been loaded!");
    var r;
    e.rails = r = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input:file",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function (t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r), i.result !== !1
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e.attr("href")
        },
        handleRemote: function (n) {
            var i, s, o, u, a, f, l, c;
            if (r.fire(n, "ajax:before")) {
                u = n.data("cross-domain"), a = u === t ? null : u, f = n.data("with-credentials") || null, l = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType;
                if (n.is("form")) {
                    i = n.attr("method"), s = n.attr("action"), o = n.serializeArray();
                    var h = n.data("ujs:submit-button");
                    h && (o.push(h), n.data("ujs:submit-button", null))
                } else n.is(r.inputChangeSelector) ? (i = n.data("method"), s = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (i = n.data("method"), s = r.href(n), o = n.data("params") || null);
                c = {
                    type: i || "GET",
                    data: o,
                    dataType: l,
                    beforeSend: function (e, i) {
                        return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), r.fire(n, "ajax:beforeSend", [e, i])
                    },
                    success: function (e, t, r) {
                        n.trigger("ajax:success", [e, t, r])
                    },
                    complete: function (e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function (e, t, r) {
                        n.trigger("ajax:error", [e, t, r])
                    },
                    xhrFields: {
                        withCredentials: f
                    },
                    crossDomain: a
                }, s && (c.url = s);
                var p = r.ajax(c);
                return n.trigger("ajax:send", p), p
            }
            return !1
        },
        handleMethod: function (n) {
            var i = r.href(n),
                s = n.data("method"),
                o = n.attr("target"),
                u = e("meta[name=csrf-token]").attr("content"),
                a = e("meta[name=csrf-param]").attr("content"),
                f = e('<form method="post" action="' + i + '"></form>'),
                l = '<input name="_method" value="' + s + '" type="hidden" />';
            a !== t && u !== t && (l += '<input name="' + a + '" value="' + u + '" type="hidden" />'), o && f.attr("target", o), f.hide().append(l).appendTo("body"), f.submit()
        },
        disableFormElements: function (t) {
            t.find(r.disableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function (t) {
            t.find(r.enableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function (e) {
            var t = e.data("confirm"),
                n = !1,
                i;
            return t ? (r.fire(e, "confirm") && (n = r.confirm(t), i = r.fire(e, "confirm:complete", [n])), n && i) : !0
        },
        blankInputs: function (t, n, r) {
            var i = e(),
                s, o, u = n || "input,textarea",
                a = t.find(u);
            return a.each(function () {
                s = e(this), o = s.is(":checkbox,:radio") ? s.is(":checked") : s.val();
                if (!o == !r) {
                    if (s.is(":radio") && a.filter('input:radio:checked[name="' + s.attr("name") + '"]').length) return !0;
                    i = i.add(s)
                }
            }), i.length ? i : !1
        },
        nonBlankInputs: function (e, t) {
            return r.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function (n, r) {
            var i = n.data("events"),
                s = !0;
            return i !== t && i.submit !== t && e.each(i.submit, function (e, t) {
                if (typeof t.handler == "function") return s = t.handler(r)
            }), s
        },
        disableElement: function (e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function (e) {
                return r.stopEverything(e)
            })
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.data("ujs:enable-with", !1)), e.unbind("click.railsDisable")
        }
    }, r.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, n) {
        e.crossDomain || r.CSRFProtection(n)
    }), e(document).delegate(r.linkDisableSelector, "ajax:complete", function () {
        r.enableElement(e(this))
    }), e(document).delegate(r.linkClickSelector, "click.rails", function (n) {
        var i = e(this),
            s = i.data("method"),
            o = i.data("params");
        if (!r.allowAction(i)) return r.stopEverything(n);
        i.is(r.linkDisableSelector) && r.disableElement(i);
        if (i.data("remote") !== t) {
            if ((n.metaKey || n.ctrlKey) && (!s || s === "GET") && !o) return !0;
            var u = r.handleRemote(i);
            return u === !1 ? r.enableElement(i) : u.error(function () {
                r.enableElement(i)
            }), !1
        }
        if (i.data("method")) return r.handleMethod(i), !1
    }), e(document).delegate(r.inputChangeSelector, "change.rails", function (t) {
        var n = e(this);
        return r.allowAction(n) ? (r.handleRemote(n), !1) : r.stopEverything(t)
    }), e(document).delegate(r.formSubmitSelector, "submit.rails", function (n) {
        var i = e(this),
            s = i.data("remote") !== t,
            o = r.blankInputs(i, r.requiredInputSelector),
            u = r.nonBlankInputs(i, r.fileInputSelector);
        if (!r.allowAction(i)) return r.stopEverything(n);
        if (o && i.attr("novalidate") == t && r.fire(i, "ajax:aborted:required", [o])) return r.stopEverything(n);
        if (s) {
            if (u) {
                setTimeout(function () {
                    r.disableFormElements(i)
                }, 13);
                var a = r.fire(i, "ajax:aborted:file", [u]);
                return a || setTimeout(function () {
                    r.enableFormElements(i)
                }, 13), a
            }
            return !e.support.submitBubbles && e().jquery < "1.7" && r.callFormSubmitBindings(i, n) === !1 ? r.stopEverything(n) : (r.handleRemote(i), !1)
        }
        setTimeout(function () {
            r.disableFormElements(i)
        }, 13)
    }), e(document).delegate(r.formInputClickSelector, "click.rails", function (t) {
        var n = e(this);
        if (!r.allowAction(n)) return r.stopEverything(t);
        var i = n.attr("name"),
            s = i ? {
                name: i,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", s)
    }), e(document).delegate(r.formSubmitSelector, "ajax:beforeSend.rails", function (t) {
        this == t.target && r.disableFormElements(e(this))
    }), e(document).delegate(r.formSubmitSelector, "ajax:complete.rails", function (t) {
        this == t.target && r.enableFormElements(e(this))
    }), e(function () {
        csrf_token = e("meta[name=csrf-token]").attr("content"), csrf_param = e("meta[name=csrf-param]").attr("content"), e('form input[name="' + csrf_param + '"]').val(csrf_token)
    }))
}(jQuery), window.log = function () {
    log.history = log.history || [], log.history.push(arguments);
    if (this.console) {
        var t = arguments,
            n;
        t.callee = t.callee.caller, n = [].slice.call(t), typeof console.log == "object" ? log.apply.call(console.log, console, n) : console.log.apply(console, n)
    }
},
function (e) {
    function t() {}
    for (var n = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","), r; !! (r = n.pop());) e[r] = e[r] || t
}(function () {
    try {
        return console.log(), window.console
    } catch (e) {
        return window.console = {}
    }
}()),
function (e, t) {
    e.CircleEventManager = function (t, n) {
        this.$el = e(n), this._init(t)
    }, e.CircleEventManager.defaults = {
        onMouseEnter: function () {
            return !1
        },
        onMouseLeave: function () {
            return !1
        },
        onClick: function () {
            return !1
        }
    }, e.CircleEventManager.prototype = {
        _init: function (t) {
            this.options = e.extend(!0, {}, e.CircleEventManager.defaults, t), this.$el.css("cursor", "default"), this._initEvents()
        },
        _initEvents: function () {
            var t = this;
            this.$el.on({
                "mouseenter.circlemouse webkitTransitionEnd transitioned oTransitionEnd MSTransitionEnd": function (n) {
                    var r = e(this),
                        i = r.outerWidth(!0),
                        s = r.outerHeight(!0),
                        o = r.offset().left,
                        u = r.offset().top,
                        a = {
                            x: o + i / 2,
                            y: u + s / 2,
                            radius: i / 2
                        }, f = "default";
                    if (t.$el.css("cursor") === "pointer" || t.$el.is("a")) f = "pointer";
                    r.data("cursor", f), r.on("mousemove.circlemouse", function (e) {
                        var n = Math.sqrt(Math.pow(e.pageX - a.x, 2) + Math.pow(e.pageY - a.y, 2));
                        Modernizr.borderradius ? n <= a.radius && !r.data("inside") ? (r.css("cursor", r.data("cursor")).data("inside", !0), t.options.onMouseEnter(t.$el)) : n > a.radius && r.data("inside") && (r.css("cursor", "default").data("inside", !1), t.options.onMouseLeave(t.$el)) : (r.css("cursor", r.data("cursor")).data("inside", !0), t.options.onMouseEnter(t.$el))
                    })
                },
                "mouseleave.circlemouse": function (n) {
                    var r = e(this);
                    r.off("mousemove"), r.data("inside") && (r.data("inside", !1), t.options.onMouseLeave(t.$el))
                },
                "click.circlemouse": function (n) {
                    var r = e(this);
                    if (!r.data("inside")) return !1;
                    t.options.onClick(t.$el)
                }
            })
        },
        destroy: function () {
            this.$el.unbind(".circlemouse").removeData("inside, cursor")
        }
    };
    var n = function (e) {
        this.console && console.error(e)
    };
    e.fn.circlemouse = function (t) {
        if (typeof t == "string") {
            var r = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var i = e.data(this, "circlemouse");
                if (!i) {
                    n("cannot call methods on circlemouse prior to initialization; attempted to call method '" + t + "'");
                    return
                }
                if (!e.isFunction(i[t]) || t.charAt(0) === "_") {
                    n("no such method '" + t + "' for circlemouse instance");
                    return
                }
                i[t].apply(i, r)
            })
        } else this.each(function () {
                var n = e.data(this, "circlemouse");
                n || e.data(this, "circlemouse", new e.CircleEventManager(t, this))
            });
        return this
    }
}(jQuery),
function () {
    var e = this,
        t = e._,
        n = {}, r = Array.prototype,
        i = Object.prototype,
        s = Function.prototype,
        o = r.push,
        u = r.slice,
        a = r.concat,
        f = i.toString,
        l = i.hasOwnProperty,
        c = r.forEach,
        h = r.map,
        p = r.reduce,
        d = r.reduceRight,
        v = r.filter,
        m = r.every,
        g = r.some,
        y = r.indexOf,
        b = r.lastIndexOf,
        w = Array.isArray,
        E = Object.keys,
        S = s.bind,
        x = function (e) {
            return e instanceof x ? e : this instanceof x ? (this._wrapped = e, void 0) : new x(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.4.4";
    var T = x.each = x.forEach = function (e, t, r) {
        if (null != e) if (c && e.forEach === c) e.forEach(t, r);
            else if (e.length === +e.length) {
            for (var i = 0, s = e.length; s > i; i++) if (t.call(r, e[i], i, e) === n) return
        } else for (var o in e) if (x.has(e, o) && t.call(r, e[o], o, e) === n) return
    };
    x.map = x.collect = function (e, t, n) {
        var r = [];
        return null == e ? r : h && e.map === h ? e.map(t, n) : (T(e, function (e, i, s) {
            r[r.length] = t.call(n, e, i, s)
        }), r)
    };
    var N = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function (e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        if (T(e, function (e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
        }), !i) throw new TypeError(N);
        return n
    }, x.reduceRight = x.foldr = function (e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = e.length;
        if (s !== +s) {
            var o = x.keys(e);
            s = o.length
        }
        if (T(e, function (u, a, f) {
            a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
        }), !i) throw new TypeError(N);
        return n
    }, x.find = x.detect = function (e, t, n) {
        var r;
        return C(e, function (e, i, s) {
            return t.call(n, e, i, s) ? (r = e, !0) : void 0
        }), r
    }, x.filter = x.select = function (e, t, n) {
        var r = [];
        return null == e ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function (e, i, s) {
            t.call(n, e, i, s) && (r[r.length] = e)
        }), r)
    }, x.reject = function (e, t, n) {
        return x.filter(e, function (e, r, i) {
            return !t.call(n, e, r, i)
        }, n)
    }, x.every = x.all = function (e, t, r) {
        t || (t = x.identity);
        var i = !0;
        return null == e ? i : m && e.every === m ? e.every(t, r) : (T(e, function (e, s, o) {
            return (i = i && t.call(r, e, s, o)) ? void 0 : n
        }), !! i)
    };
    var C = x.some = x.any = function (e, t, r) {
        t || (t = x.identity);
        var i = !1;
        return null == e ? i : g && e.some === g ? e.some(t, r) : (T(e, function (e, s, o) {
            return i || (i = t.call(r, e, s, o)) ? n : void 0
        }), !! i)
    };
    x.contains = x.include = function (e, t) {
        return null == e ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function (e) {
            return e === t
        })
    }, x.invoke = function (e, t) {
        var n = u.call(arguments, 2),
            r = x.isFunction(t);
        return x.map(e, function (e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }, x.pluck = function (e, t) {
        return x.map(e, function (e) {
            return e[t]
        })
    }, x.where = function (e, t, n) {
        return x.isEmpty(t) ? n ? null : [] : x[n ? "find" : "filter"](e, function (e) {
            for (var n in t) if (t[n] !== e[n]) return !1;
            return !0
        })
    }, x.findWhere = function (e, t) {
        return x.where(e, t, !0)
    }, x.max = function (e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.max.apply(Math, e);
        if (!t && x.isEmpty(e)) return -1 / 0;
        var r = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return T(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o >= r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.min = function (e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.min.apply(Math, e);
        if (!t && x.isEmpty(e)) return 1 / 0;
        var r = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return T(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            r.computed > o && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.shuffle = function (e) {
        var t, n = 0,
            r = [];
        return T(e, function (e) {
            t = x.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    };
    var k = function (e) {
        return x.isFunction(e) ? e : function (t) {
            return t[e]
        }
    };
    x.sortBy = function (e, t, n) {
        var r = k(t);
        return x.pluck(x.map(e, function (e, t, i) {
            return {
                value: e,
                index: t,
                criteria: r.call(n, e, t, i)
            }
        }).sort(function (e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0) return 1;
                if (r > n || r === void 0) return -1
            }
            return e.index < t.index ? -1 : 1
        }), "value")
    };
    var L = function (e, t, n, r) {
        var i = {}, s = k(t || x.identity);
        return T(e, function (t, o) {
            var u = s.call(n, t, o, e);
            r(i, u, t)
        }), i
    };
    x.groupBy = function (e, t, n) {
        return L(e, t, n, function (e, t, n) {
            (x.has(e, t) ? e[t] : e[t] = []).push(n)
        })
    }, x.countBy = function (e, t, n) {
        return L(e, t, n, function (e, t) {
            x.has(e, t) || (e[t] = 0), e[t]++
        })
    }, x.sortedIndex = function (e, t, n, r) {
        n = null == n ? x.identity : k(n);
        for (var i = n.call(r, t), s = 0, o = e.length; o > s;) {
            var u = s + o >>> 1;
            i > n.call(r, e[u]) ? s = u + 1 : o = u
        }
        return s
    }, x.toArray = function (e) {
        return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
    }, x.size = function (e) {
        return null == e ? 0 : e.length === +e.length ? e.length : x.keys(e).length
    }, x.first = x.head = x.take = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : u.call(e, 0, t)
    }, x.initial = function (e, t, n) {
        return u.call(e, 0, e.length - (null == t || n ? 1 : t))
    }, x.last = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0))
    }, x.rest = x.tail = x.drop = function (e, t, n) {
        return u.call(e, null == t || n ? 1 : t)
    }, x.compact = function (e) {
        return x.filter(e, x.identity)
    };
    var A = function (e, t, n) {
        return T(e, function (e) {
            x.isArray(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
        }), n
    };
    x.flatten = function (e, t) {
        return A(e, t, [])
    }, x.without = function (e) {
        return x.difference(e, u.call(arguments, 1))
    }, x.uniq = x.unique = function (e, t, n, r) {
        x.isFunction(t) && (r = n, n = t, t = !1);
        var i = n ? x.map(e, n, r) : e,
            s = [],
            o = [];
        return T(i, function (n, r) {
            (t ? r && o[o.length - 1] === n : x.contains(o, n)) || (o.push(n), s.push(e[r]))
        }), s
    }, x.union = function () {
        return x.uniq(a.apply(r, arguments))
    }, x.intersection = function (e) {
        var t = u.call(arguments, 1);
        return x.filter(x.uniq(e), function (e) {
            return x.every(t, function (t) {
                return x.indexOf(t, e) >= 0
            })
        })
    }, x.difference = function (e) {
        var t = a.apply(r, u.call(arguments, 1));
        return x.filter(e, function (e) {
            return !x.contains(t, e)
        })
    }, x.zip = function () {
        for (var e = u.call(arguments), t = x.max(x.pluck(e, "length")), n = Array(t), r = 0; t > r; r++) n[r] = x.pluck(e, "" + r);
        return n
    }, x.object = function (e, t) {
        if (null == e) return {};
        for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, x.indexOf = function (e, t, n) {
        if (null == e) return -1;
        var r = 0,
            i = e.length;
        if (n) {
            if ("number" != typeof n) return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
            r = 0 > n ? Math.max(0, i + n) : n
        }
        if (y && e.indexOf === y) return e.indexOf(t, n);
        for (; i > r; r++) if (e[r] === t) return r;
        return -1
    }, x.lastIndexOf = function (e, t, n) {
        if (null == e) return -1;
        var r = null != n;
        if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        for (var i = r ? n : e.length; i--;) if (e[i] === t) return i;
        return -1
    }, x.range = function (e, t, n) {
        1 >= arguments.length && (t = e || 0, e = 0), n = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, s = Array(r); r > i;) s[i++] = e, e += n;
        return s
    }, x.bind = function (e, t) {
        if (e.bind === S && S) return S.apply(e, u.call(arguments, 1));
        var n = u.call(arguments, 2);
        return function () {
            return e.apply(t, n.concat(u.call(arguments)))
        }
    }, x.partial = function (e) {
        var t = u.call(arguments, 1);
        return function () {
            return e.apply(this, t.concat(u.call(arguments)))
        }
    }, x.bindAll = function (e) {
        var t = u.call(arguments, 1);
        return 0 === t.length && (t = x.functions(e)), T(t, function (t) {
            e[t] = x.bind(e[t], e)
        }), e
    }, x.memoize = function (e, t) {
        var n = {};
        return t || (t = x.identity),
        function () {
            var r = t.apply(this, arguments);
            return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }, x.delay = function (e, t) {
        var n = u.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, x.defer = function (e) {
        return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
    }, x.throttle = function (e, t) {
        var n, r, i, s, o = 0,
            u = function () {
                o = new Date, i = null, s = e.apply(n, r)
            };
        return function () {
            var a = new Date,
                f = t - (a - o);
            return n = this, r = arguments, 0 >= f ? (clearTimeout(i), i = null, o = a, s = e.apply(n, r)) : i || (i = setTimeout(u, f)), s
        }
    }, x.debounce = function (e, t, n) {
        var r, i;
        return function () {
            var s = this,
                o = arguments,
                u = function () {
                    r = null, n || (i = e.apply(s, o))
                }, a = n && !r;
            return clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i
        }
    }, x.once = function (e) {
        var t, n = !1;
        return function () {
            return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
        }
    }, x.wrap = function (e, t) {
        return function () {
            var n = [e];
            return o.apply(n, arguments), t.apply(this, n)
        }
    }, x.compose = function () {
        var e = arguments;
        return function () {
            for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, x.after = function (e, t) {
        return 0 >= e ? t() : function () {
            return 1 > --e ? t.apply(this, arguments) : void 0
        }
    }, x.keys = E || function (e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) x.has(e, n) && (t[t.length] = n);
        return t
    }, x.values = function (e) {
        var t = [];
        for (var n in e) x.has(e, n) && t.push(e[n]);
        return t
    }, x.pairs = function (e) {
        var t = [];
        for (var n in e) x.has(e, n) && t.push([n, e[n]]);
        return t
    }, x.invert = function (e) {
        var t = {};
        for (var n in e) x.has(e, n) && (t[e[n]] = n);
        return t
    }, x.functions = x.methods = function (e) {
        var t = [];
        for (var n in e) x.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, x.extend = function (e) {
        return T(u.call(arguments, 1), function (t) {
            if (t) for (var n in t) e[n] = t[n]
        }), e
    }, x.pick = function (e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        return T(n, function (n) {
            n in e && (t[n] = e[n])
        }), t
    }, x.omit = function (e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        for (var i in e) x.contains(n, i) || (t[i] = e[i]);
        return t
    }, x.defaults = function (e) {
        return T(u.call(arguments, 1), function (t) {
            if (t) for (var n in t) null == e[n] && (e[n] = t[n])
        }), e
    }, x.clone = function (e) {
        return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
    }, x.tap = function (e, t) {
        return t(e), e
    };
    var O = function (e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
        var i = f.call(e);
        if (i != f.call(t)) return !1;
        switch (i) {
        case "[object String]":
            return e == t + "";
        case "[object Number]":
            return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +e == +t;
        case "[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var s = n.length; s--;) if (n[s] == e) return r[s] == t;
        n.push(e), r.push(t);
        var o = 0,
            u = !0;
        if ("[object Array]" == i) {
            if (o = e.length, u = o == t.length) for (; o-- && (u = O(e[o], t[o], n, r)););
        } else {
            var a = e.constructor,
                l = t.constructor;
            if (a !== l && !(x.isFunction(a) && a instanceof a && x.isFunction(l) && l instanceof l)) return !1;
            for (var c in e) if (x.has(e, c) && (o++, !(u = x.has(t, c) && O(e[c], t[c], n, r)))) break;
            if (u) {
                for (c in t) if (x.has(t, c) && !(o--)) break;
                u = !o
            }
        }
        return n.pop(), r.pop(), u
    };
    x.isEqual = function (e, t) {
        return O(e, t, [], [])
    }, x.isEmpty = function (e) {
        if (null == e) return !0;
        if (x.isArray(e) || x.isString(e)) return 0 === e.length;
        for (var t in e) if (x.has(e, t)) return !1;
        return !0
    }, x.isElement = function (e) {
        return !!e && 1 === e.nodeType
    }, x.isArray = w || function (e) {
        return "[object Array]" == f.call(e)
    }, x.isObject = function (e) {
        return e === Object(e)
    }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
        x["is" + e] = function (t) {
            return f.call(t) == "[object " + e + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function (e) {
        return !!e && !! x.has(e, "callee")
    }), "function" != typeof / . / && (x.isFunction = function (e) {
        return "function" == typeof e
    }), x.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, x.isNaN = function (e) {
        return x.isNumber(e) && e != +e
    }, x.isBoolean = function (e) {
        return e === !0 || e === !1 || "[object Boolean]" == f.call(e)
    }, x.isNull = function (e) {
        return null === e
    }, x.isUndefined = function (e) {
        return e === void 0
    }, x.has = function (e, t) {
        return l.call(e, t)
    }, x.noConflict = function () {
        return e._ = t, this
    }, x.identity = function (e) {
        return e
    }, x.times = function (e, t, n) {
        for (var r = Array(e), i = 0; e > i; i++) r[i] = t.call(n, i);
        return r
    }, x.random = function (e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    };
    var M = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    M.unescape = x.invert(M.escape);
    var _ = {
        escape: RegExp("[" + x.keys(M.escape).join("") + "]", "g"),
        unescape: RegExp("(" + x.keys(M.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"], function (e) {
        x[e] = function (t) {
            return null == t ? "" : ("" + t).replace(_[e], function (t) {
                return M[e][t]
            })
        }
    }), x.result = function (e, t) {
        if (null == e) return null;
        var n = e[t];
        return x.isFunction(n) ? n.call(e) : n
    }, x.mixin = function (e) {
        T(x.functions(e), function (t) {
            var n = x[t] = e[t];
            x.prototype[t] = function () {
                var e = [this._wrapped];
                return o.apply(e, arguments), j.call(this, n.apply(x, e))
            }
        })
    };
    var D = 0;
    x.uniqueId = function (e) {
        var t = ++D + "";
        return e ? e + t : t
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var P = /(.)^/,
        H = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function (e, t, n) {
        var r;
        n = x.defaults({}, n, x.templateSettings);
        var i = RegExp([(n.escape || P).source, (n.interpolate || P).source, (n.evaluate || P).source].join("|") + "|$", "g"),
            s = 0,
            o = "__p+='";
        e.replace(i, function (t, n, r, i, u) {
            return o += e.slice(s, u).replace(B, function (e) {
                return "\\" + H[e]
            }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t
        }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            r = Function(n.variable || "obj", "_", o)
        } catch (u) {
            throw u.source = o, u
        }
        if (t) return r(t, x);
        var a = function (e) {
            return r.call(this, e, x)
        };
        return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a
    }, x.chain = function (e) {
        return x(e).chain()
    };
    var j = function (e) {
        return this._chain ? x(e).chain() : e
    };
    x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = r[e];
        x.prototype[e] = function () {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], j.call(this, n)
        }
    }), T(["concat", "join", "slice"], function (e) {
        var t = r[e];
        x.prototype[e] = function () {
            return j.call(this, t.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    })
}.call(this),
function () {
    var e = this,
        t = e.Backbone,
        n = [],
        r = n.push,
        i = n.slice,
        s = n.splice,
        o;
    typeof exports != "undefined" ? o = exports : o = e.Backbone = {}, o.VERSION = "1.0.0";
    var u = e._;
    !u && typeof require != "undefined" && (u = require("underscore")), o.$ = e.jQuery || e.Zepto || e.ender || e.$, o.noConflict = function () {
        return e.Backbone = t, this
    }, o.emulateHTTP = !1, o.emulateJSON = !1;
    var a = o.Events = {
        on: function (e, t, n) {
            if (!l(this, "on", e, [t, n]) || !t) return this;
            this._events || (this._events = {});
            var r = this._events[e] || (this._events[e] = []);
            return r.push({
                callback: t,
                context: n,
                ctx: n || this
            }), this
        },
        once: function (e, t, n) {
            if (!l(this, "once", e, [t, n]) || !t) return this;
            var r = this,
                i = u.once(function () {
                    r.off(e, i), t.apply(this, arguments)
                });
            return i._callback = t, this.on(e, i, n)
        },
        off: function (e, t, n) {
            var r, i, s, o, a, f, c, h;
            if (!this._events || !l(this, "off", e, [t, n])) return this;
            if (!e && !t && !n) return this._events = {}, this;
            o = e ? [e] : u.keys(this._events);
            for (a = 0, f = o.length; a < f; a++) {
                e = o[a];
                if (s = this._events[e]) {
                    this._events[e] = r = [];
                    if (t || n) for (c = 0, h = s.length; c < h; c++) i = s[c], (t && t !== i.callback && t !== i.callback._callback || n && n !== i.context) && r.push(i);
                    r.length || delete this._events[e]
                }
            }
            return this
        },
        trigger: function (e) {
            if (!this._events) return this;
            var t = i.call(arguments, 1);
            if (!l(this, "trigger", e, t)) return this;
            var n = this._events[e],
                r = this._events.all;
            return n && c(n, t), r && c(r, arguments), this
        },
        stopListening: function (e, t, n) {
            var r = this._listeners;
            if (!r) return this;
            var i = !t && !n;
            typeof t == "object" && (n = this), e && ((r = {})[e._listenerId] = e);
            for (var s in r) r[s].off(t, n, this), i && delete this._listeners[s];
            return this
        }
    }, f = /\s+/,
        l = function (e, t, n, r) {
            if (!n) return !0;
            if (typeof n == "object") {
                for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
                return !1
            }
            if (f.test(n)) {
                var s = n.split(f);
                for (var o = 0, u = s.length; o < u; o++) e[t].apply(e, [s[o]].concat(r));
                return !1
            }
            return !0
        }, c = function (e, t) {
            var n, r = -1,
                i = e.length,
                s = t[0],
                o = t[1],
                u = t[2];
            switch (t.length) {
            case 0:
                while (++r < i)(n = e[r]).callback.call(n.ctx);
                return;
            case 1:
                while (++r < i)(n = e[r]).callback.call(n.ctx, s);
                return;
            case 2:
                while (++r < i)(n = e[r]).callback.call(n.ctx, s, o);
                return;
            case 3:
                while (++r < i)(n = e[r]).callback.call(n.ctx, s, o, u);
                return;
            default:
                while (++r < i)(n = e[r]).callback.apply(n.ctx, t)
            }
        }, h = {
            listenTo: "on",
            listenToOnce: "once"
        };
    u.each(h, function (e, t) {
        a[t] = function (t, n, r) {
            var i = this._listeners || (this._listeners = {}),
                s = t._listenerId || (t._listenerId = u.uniqueId("l"));
            return i[s] = t, typeof n == "object" && (r = this), t[e](n, r, this), this
        }
    }), a.bind = a.on, a.unbind = a.off, u.extend(o, a);
    var p = o.Model = function (e, t) {
        var n, r = e || {};
        t || (t = {}), this.cid = u.uniqueId("c"), this.attributes = {}, u.extend(this, u.pick(t, d)), t.parse && (r = this.parse(r, t) || {});
        if (n = u.result(this, "defaults")) r = u.defaults({}, r, n);
        this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments)
    }, d = ["url", "urlRoot", "collection"];
    u.extend(p.prototype, a, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function () {},
        toJSON: function (e) {
            return u.clone(this.attributes)
        },
        sync: function () {
            return o.sync.apply(this, arguments)
        },
        get: function (e) {
            return this.attributes[e]
        },
        escape: function (e) {
            return u.escape(this.get(e))
        },
        has: function (e) {
            return this.get(e) != null
        },
        set: function (e, t, n) {
            var r, i, s, o, a, f, l, c;
            if (e == null) return this;
            typeof e == "object" ? (i = e, n = t) : (i = {})[e] = t, n || (n = {});
            if (!this._validate(i, n)) return !1;
            s = n.unset, a = n.silent, o = [], f = this._changing, this._changing = !0, f || (this._previousAttributes = u.clone(this.attributes), this.changed = {}), c = this.attributes, l = this._previousAttributes, this.idAttribute in i && (this.id = i[this.idAttribute]);
            for (r in i) t = i[r], u.isEqual(c[r], t) || o.push(r), u.isEqual(l[r], t) ? delete this.changed[r] : this.changed[r] = t, s ? delete c[r] : c[r] = t;
            if (!a) {
                o.length && (this._pending = !0);
                for (var h = 0, p = o.length; h < p; h++) this.trigger("change:" + o[h], this, c[o[h]], n)
            }
            if (f) return this;
            if (!a) while (this._pending) this._pending = !1, this.trigger("change", this, n);
            return this._pending = !1, this._changing = !1, this
        },
        unset: function (e, t) {
            return this.set(e, void 0, u.extend({}, t, {
                unset: !0
            }))
        },
        clear: function (e) {
            var t = {};
            for (var n in this.attributes) t[n] = void 0;
            return this.set(t, u.extend({}, e, {
                unset: !0
            }))
        },
        hasChanged: function (e) {
            return e == null ? !u.isEmpty(this.changed) : u.has(this.changed, e)
        },
        changedAttributes: function (e) {
            if (!e) return this.hasChanged() ? u.clone(this.changed) : !1;
            var t, n = !1,
                r = this._changing ? this._previousAttributes : this.attributes;
            for (var i in e) {
                if (u.isEqual(r[i], t = e[i])) continue;
                (n || (n = {}))[i] = t
            }
            return n
        },
        previous: function (e) {
            return e == null || !this._previousAttributes ? null : this._previousAttributes[e]
        },
        previousAttributes: function () {
            return u.clone(this._previousAttributes)
        },
        fetch: function (e) {
            e = e ? u.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
            var t = this,
                n = e.success;
            return e.success = function (r) {
                if (!t.set(t.parse(r, e), e)) return !1;
                n && n(t, r, e), t.trigger("sync", t, r, e)
            }, j(this, e), this.sync("read", this, e)
        },
        save: function (e, t, n) {
            var r, i, s, o = this.attributes;
            e == null || typeof e == "object" ? (r = e, n = t) : (r = {})[e] = t;
            if (r && (!n || !n.wait) && !this.set(r, n)) return !1;
            n = u.extend({
                validate: !0
            }, n);
            if (!this._validate(r, n)) return !1;
            r && n.wait && (this.attributes = u.extend({}, o, r)), n.parse === void 0 && (n.parse = !0);
            var a = this,
                f = n.success;
            return n.success = function (e) {
                a.attributes = o;
                var t = a.parse(e, n);
                n.wait && (t = u.extend(r || {}, t));
                if (u.isObject(t) && !a.set(t, n)) return !1;
                f && f(a, e, n), a.trigger("sync", a, e, n)
            }, j(this, n), i = this.isNew() ? "create" : n.patch ? "patch" : "update", i === "patch" && (n.attrs = r), s = this.sync(i, this, n), r && n.wait && (this.attributes = o), s
        },
        destroy: function (e) {
            e = e ? u.clone(e) : {};
            var t = this,
                n = e.success,
                r = function () {
                    t.trigger("destroy", t, t.collection, e)
                };
            e.success = function (i) {
                (e.wait || t.isNew()) && r(), n && n(t, i, e), t.isNew() || t.trigger("sync", t, i, e)
            };
            if (this.isNew()) return e.success(), !1;
            j(this, e);
            var i = this.sync("delete", this, e);
            return e.wait || r(), i
        },
        url: function () {
            var e = u.result(this, "urlRoot") || u.result(this.collection, "url") || B();
            return this.isNew() ? e : e + (e.charAt(e.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function (e, t) {
            return e
        },
        clone: function () {
            return new this.constructor(this.attributes)
        },
        isNew: function () {
            return this.id == null
        },
        isValid: function (e) {
            return this._validate({}, u.extend(e || {}, {
                validate: !0
            }))
        },
        _validate: function (e, t) {
            if (!t.validate || !this.validate) return !0;
            e = u.extend({}, this.attributes, e);
            var n = this.validationError = this.validate(e, t) || null;
            return n ? (this.trigger("invalid", this, n, u.extend(t || {}, {
                validationError: n
            })), !1) : !0
        }
    });
    var v = ["keys", "values", "pairs", "invert", "pick", "omit"];
    u.each(v, function (e) {
        p.prototype[e] = function () {
            var t = i.call(arguments);
            return t.unshift(this.attributes), u[e].apply(u, t)
        }
    });
    var m = o.Collection = function (e, t) {
        t || (t = {}), t.url && (this.url = t.url), t.model && (this.model = t.model), t.comparator !== void 0 && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, u.extend({
            silent: !0
        }, t))
    }, g = {
            add: !0,
            remove: !0,
            merge: !0
        }, y = {
            add: !0,
            merge: !1,
            remove: !1
        };
    u.extend(m.prototype, a, {
        model: p,
        initialize: function () {},
        toJSON: function (e) {
            return this.map(function (t) {
                return t.toJSON(e)
            })
        },
        sync: function () {
            return o.sync.apply(this, arguments)
        },
        add: function (e, t) {
            return this.set(e, u.defaults(t || {}, y))
        },
        remove: function (e, t) {
            e = u.isArray(e) ? e.slice() : [e], t || (t = {});
            var n, r, i, s;
            for (n = 0, r = e.length; n < r; n++) {
                s = this.get(e[n]);
                if (!s) continue;
                delete this._byId[s.id], delete this._byId[s.cid], i = this.indexOf(s), this.models.splice(i, 1), this.length--, t.silent || (t.index = i, s.trigger("remove", s, this, t)), this._removeReference(s)
            }
            return this
        },
        set: function (e, t) {
            t = u.defaults(t || {}, g), t.parse && (e = this.parse(e, t)), u.isArray(e) || (e = e ? [e] : []);
            var n, i, o, a, f, l, c = t.at,
                h = this.comparator && c == null && t.sort !== !1,
                p = u.isString(this.comparator) ? this.comparator : null,
                d = [],
                v = [],
                m = {};
            for (n = 0, i = e.length; n < i; n++) {
                if (!(o = this._prepareModel(e[n], t))) continue;
                (f = this.get(o)) ? (t.remove && (m[f.cid] = !0), t.merge && (f.set(o.attributes, t), h && !l && f.hasChanged(p) && (l = !0))) : t.add && (d.push(o), o.on("all", this._onModelEvent, this), this._byId[o.cid] = o, o.id != null && (this._byId[o.id] = o))
            }
            if (t.remove) {
                for (n = 0, i = this.length; n < i; ++n) m[(o = this.models[n]).cid] || v.push(o);
                v.length && this.remove(v, t)
            }
            d.length && (h && (l = !0), this.length += d.length, c != null ? s.apply(this.models, [c, 0].concat(d)) : r.apply(this.models, d)), l && this.sort({
                silent: !0
            });
            if (t.silent) return this;
            for (n = 0, i = d.length; n < i; n++)(o = d[n]).trigger("add", o, this, t);
            return l && this.trigger("sort", this, t), this
        },
        reset: function (e, t) {
            t || (t = {});
            for (var n = 0, r = this.models.length; n < r; n++) this._removeReference(this.models[n]);
            return t.previousModels = this.models, this._reset(), this.add(e, u.extend({
                silent: !0
            }, t)), t.silent || this.trigger("reset", this, t), this
        },
        push: function (e, t) {
            return e = this._prepareModel(e, t), this.add(e, u.extend({
                at: this.length
            }, t)), e
        },
        pop: function (e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t
        },
        unshift: function (e, t) {
            return e = this._prepareModel(e, t), this.add(e, u.extend({
                at: 0
            }, t)), e
        },
        shift: function (e) {
            var t = this.at(0);
            return this.remove(t, e), t
        },
        slice: function (e, t) {
            return this.models.slice(e, t)
        },
        get: function (e) {
            return e == null ? void 0 : this._byId[e.id != null ? e.id : e.cid || e]
        },
        at: function (e) {
            return this.models[e]
        },
        where: function (e, t) {
            return u.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function (t) {
                for (var n in e) if (e[n] !== t.get(n)) return !1;
                return !0
            })
        },
        findWhere: function (e) {
            return this.where(e, !0)
        },
        sort: function (e) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            return e || (e = {}), u.isString(this.comparator) || this.comparator.length === 1 ? this.models = this.sortBy(this.comparator, this) : this.models.sort(u.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
        },
        sortedIndex: function (e, t, n) {
            t || (t = this.comparator);
            var r = u.isFunction(t) ? t : function (e) {
                    return e.get(t)
                };
            return u.sortedIndex(this.models, e, r, n)
        },
        pluck: function (e) {
            return u.invoke(this.models, "get", e)
        },
        fetch: function (e) {
            e = e ? u.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
            var t = e.success,
                n = this;
            return e.success = function (r) {
                var i = e.reset ? "reset" : "set";
                n[i](r, e), t && t(n, r, e), n.trigger("sync", n, r, e)
            }, j(this, e), this.sync("read", this, e)
        },
        create: function (e, t) {
            t = t ? u.clone(t) : {};
            if (!(e = this._prepareModel(e, t))) return !1;
            t.wait || this.add(e, t);
            var n = this,
                r = t.success;
            return t.success = function (i) {
                t.wait && n.add(e, t), r && r(e, i, t)
            }, e.save(null, t), e
        },
        parse: function (e, t) {
            return e
        },
        clone: function () {
            return new this.constructor(this.models)
        },
        _reset: function () {
            this.length = 0, this.models = [], this._byId = {}
        },
        _prepareModel: function (e, t) {
            if (e instanceof p) return e.collection || (e.collection = this), e;
            t || (t = {}), t.collection = this;
            var n = new this.model(e, t);
            return n._validate(e, t) ? n : (this.trigger("invalid", this, e, t), !1)
        },
        _removeReference: function (e) {
            this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function (e, t, n, r) {
            if ((e === "add" || e === "remove") && n !== this) return;
            e === "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], t.id != null && (this._byId[t.id] = t)), this.trigger.apply(this, arguments)
        }
    });
    var b = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
    u.each(b, function (e) {
        m.prototype[e] = function () {
            var t = i.call(arguments);
            return t.unshift(this.models), u[e].apply(u, t)
        }
    });
    var w = ["groupBy", "countBy", "sortBy"];
    u.each(w, function (e) {
        m.prototype[e] = function (t, n) {
            var r = u.isFunction(t) ? t : function (e) {
                    return e.get(t)
                };
            return u[e](this.models, r, n)
        }
    });
    var E = o.View = function (e) {
        this.cid = u.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, S = /^(\S+)\s*(.*)$/,
        x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    u.extend(E.prototype, a, {
        tagName: "div",
        $: function (e) {
            return this.$el.find(e)
        },
        initialize: function () {},
        render: function () {
            return this
        },
        remove: function () {
            return this.$el.remove(), this.stopListening(), this
        },
        setElement: function (e, t) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof o.$ ? e : o.$(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this
        },
        delegateEvents: function (e) {
            if (!e && !(e = u.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var t in e) {
                var n = e[t];
                u.isFunction(n) || (n = this[e[t]]);
                if (!n) continue;
                var r = t.match(S),
                    i = r[1],
                    s = r[2];
                n = u.bind(n, this), i += ".delegateEvents" + this.cid, s === "" ? this.$el.on(i, n) : this.$el.on(i, s, n)
            }
            return this
        },
        undelegateEvents: function () {
            return this.$el.off(".delegateEvents" + this.cid), this
        },
        _configure: function (e) {
            this.options && (e = u.extend({}, u.result(this, "options"), e)), u.extend(this, u.pick(e, x)), this.options = e
        },
        _ensureElement: function () {
            if (!this.el) {
                var e = u.extend({}, u.result(this, "attributes"));
                this.id && (e.id = u.result(this, "id")), this.className && (e["class"] = u.result(this, "className"));
                var t = o.$("<" + u.result(this, "tagName") + ">").attr(e);
                this.setElement(t, !1)
            } else this.setElement(u.result(this, "el"), !1)
        }
    }), o.sync = function (e, t, n) {
        var r = T[e];
        u.defaults(n || (n = {}), {
            emulateHTTP: o.emulateHTTP,
            emulateJSON: o.emulateJSON
        });
        var i = {
            type: r,
            dataType: "json"
        };
        n.url || (i.url = u.result(t, "url") || B()), n.data == null && t && (e === "create" || e === "update" || e === "patch") && (i.contentType = "application/json", i.data = JSON.stringify(n.attrs || t.toJSON(n))), n.emulateJSON && (i.contentType = "application/x-www-form-urlencoded", i.data = i.data ? {
            model: i.data
        } : {});
        if (n.emulateHTTP && (r === "PUT" || r === "DELETE" || r === "PATCH")) {
            i.type = "POST", n.emulateJSON && (i.data._method = r);
            var s = n.beforeSend;
            n.beforeSend = function (e) {
                e.setRequestHeader("X-HTTP-Method-Override", r);
                if (s) return s.apply(this, arguments)
            }
        }
        i.type !== "GET" && !n.emulateJSON && (i.processData = !1), i.type === "PATCH" && window.ActiveXObject && (!window.external || !window.external.msActiveXFilteringEnabled) && (i.xhr = function () {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        var a = n.xhr = o.ajax(u.extend(i, n));
        return t.trigger("request", t, a, n), a
    };
    var T = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    o.ajax = function () {
        return o.$.ajax.apply(o.$, arguments)
    };
    var N = o.Router = function (e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, C = /\((.*?)\)/g,
        k = /(\(\?)?:\w+/g,
        L = /\*\w+/g,
        A = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    u.extend(N.prototype, a, {
        initialize: function () {},
        route: function (e, t, n) {
            u.isRegExp(e) || (e = this._routeToRegExp(e)), u.isFunction(t) && (n = t, t = ""), n || (n = this[t]);
            var r = this;
            return o.history.route(e, function (i) {
                var s = r._extractParameters(e, i);
                n && n.apply(r, s), r.trigger.apply(r, ["route:" + t].concat(s)), r.trigger("route", t, s), o.history.trigger("route", r, t, s)
            }), this
        },
        navigate: function (e, t) {
            return o.history.navigate(e, t), this
        },
        _bindRoutes: function () {
            if (!this.routes) return;
            this.routes = u.result(this, "routes");
            var e, t = u.keys(this.routes);
            while ((e = t.pop()) != null) this.route(e, this.routes[e])
        },
        _routeToRegExp: function (e) {
            return e = e.replace(A, "\\$&").
            replace(C, "(?:$1)?").replace(k, function (e, t) {
                return t ? e : "([^/]+)"
            }).replace(L, "(.*?)"), new RegExp("^" + e + "$")
        },
        _extractParameters: function (e, t) {
            var n = e.exec(t).slice(1);
            return u.map(n, function (e) {
                return e ? decodeURIComponent(e) : null
            })
        }
    });
    var O = o.History = function () {
        this.handlers = [], u.bindAll(this, "checkUrl"), typeof window != "undefined" && (this.location = window.location, this.history = window.history)
    }, M = /^[#\/]|\s+$/g,
        _ = /^\/+|\/+$/g,
        D = /msie [\w.]+/,
        P = /\/$/;
    O.started = !1, u.extend(O.prototype, a, {
        interval: 50,
        getHash: function (e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        },
        getFragment: function (e, t) {
            if (e == null) if (this._hasPushState || !this._wantsHashChange || t) {
                    e = this.location.pathname;
                    var n = this.root.replace(P, "");
                    e.indexOf(n) || (e = e.substr(n.length))
                } else e = this.getHash();
            return e.replace(M, "")
        },
        start: function (e) {
            if (O.started) throw new Error("Backbone.history has already been started");
            O.started = !0, this.options = u.extend({}, {
                root: "/"
            }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !! this.options.pushState, this._hasPushState = !! (this.options.pushState && this.history && this.history.pushState);
            var t = this.getFragment(),
                n = document.documentMode,
                r = D.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
            this.root = ("/" + this.root + "/").replace(_, "/"), r && this._wantsHashChange && (this.iframe = o.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(t)), this._hasPushState ? o.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? o.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
            var i = this.location,
                s = i.pathname.replace(/[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !s) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
            this._wantsPushState && this._hasPushState && s && i.hash && (this.fragment = this.getHash().replace(M, ""), this.history.replaceState({}, document.title, this.root + this.fragment + i.search));
            if (!this.options.silent) return this.loadUrl()
        },
        stop: function () {
            o.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), O.started = !1
        },
        route: function (e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function (e) {
            var t = this.getFragment();
            t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
            if (t === this.fragment) return !1;
            this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash())
        },
        loadUrl: function (e) {
            var t = this.fragment = this.getFragment(e),
                n = u.any(this.handlers, function (e) {
                    if (e.route.test(t)) return e.callback(t), !0
                });
            return n
        },
        navigate: function (e, t) {
            if (!O.started) return !1;
            if (!t || t === !0) t = {
                    trigger: t
            };
            e = this.getFragment(e || "");
            if (this.fragment === e) return;
            this.fragment = e;
            var n = this.root + e;
            if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
            else {
                if (!this._wantsHashChange) return this.location.assign(n);
                this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
            }
            t.trigger && this.loadUrl(e)
        },
        _updateHash: function (e, t, n) {
            if (n) {
                var r = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(r + "#" + t)
            } else e.hash = "#" + t
        }
    }), o.history = new O;
    var H = function (e, t) {
        var n = this,
            r;
        e && u.has(e, "constructor") ? r = e.constructor : r = function () {
            return n.apply(this, arguments)
        }, u.extend(r, n, t);
        var i = function () {
            this.constructor = r
        };
        return i.prototype = n.prototype, r.prototype = new i, e && u.extend(r.prototype, e), r.__super__ = n.prototype, r
    };
    p.extend = m.extend = N.extend = E.extend = O.extend = H;
    var B = function () {
        throw new Error('A "url" property or function must be specified')
    }, j = function (e, t) {
            var n = t.error;
            t.error = function (r) {
                n && n(e, r, t), e.trigger("error", e, r, t)
            }
        }
}.call(this),
function (e, t) {
    function h(t, n) {
        var r = t.split("&");
        e.each(r, function (e) {
            var t = e.indexOf("="),
                r = [e.slice(0, t), e.slice(t + 1)];
            r.length > 1 && n(r[0], r[1])
        })
    }
    typeof require != "undefined" && (e = e || require("underscore"), t = t || require("backbone"));
    var n = /^\?(.*)/,
        r = /\((.*?)\)/g,
        i = /(\(\?)?:\w+/g,
        s = /\*\w+/g,
        o = /[\-{}\[\]+?.,\\\^$|#\s]/g,
        u = /(\?.*)$/,
        a = /^([^\?]*)/,
        f = /(\?)[\w-]+=/i,
        l = /[\:\*]([^\:\?\/]+)/g;
    t.Router.arrayValueSplit = "|";
    var c = t.History.prototype.getFragment;
    e.extend(t.History.prototype, {
        getFragment: function (e, t, n) {
            return e = c.apply(this, arguments), n ? e = e.replace(u, "") : !f.test(e) && this.location.pathname.replace(/^\//, "") === e && (e += this.location.search), e
        },
        getQueryParameters: function (t, r) {
            t = c.apply(this, arguments);
            var i = t.replace(a, ""),
                s = i.match(n);
            if (s) {
                i = s[1];
                var o = {};
                return h(i, function (t, n) {
                    o[t] ? e.isString(o[t]) ? o[t] = [o[t], n] : o[t].push(n) : o[t] = n
                }), o
            }
            return {}
        }
    }), e.extend(t.Router.prototype, {
        initialize: function (e) {
            this.encodedSplatParts = e && e.encodedSplatParts
        },
        getFragment: function (e, t, n) {
            return e = c.apply(this, arguments), n && (e = e.replace(u, "")), e
        },
        _routeToRegExp: function (t) {
            var n = s.exec(t) || {
                index: -1
            }, u = i.exec(t) || {
                    index: -1
                }, a = t.match(l) || [];
            t = t.replace(o, "\\$&").replace(r, "(?:$1)?").replace(i, function (e, t) {
                return t ? e : "([^\\/\\?]+)"
            }).replace(s, "([^?]*?)"), t += "([?]{1}.*)?";
            var f = new RegExp("^" + t + "$");
            return n.index >= 0 && (u >= 0 ? f.splatMatch = n.index - u.index : f.splatMatch = -1), f.paramNames = e.map(a, function (e) {
                return e.substring(1)
            }), f.namedParameters = this.namedParameters, f
        },
        _extractParameters: function (r, i) {
            var s = r.exec(i).slice(1),
                o = {}, u = s.length && s[s.length - 1] && s[s.length - 1].match(n);
            if (u) {
                var a = u[1],
                    f = {};
                if (a) {
                    var l = this;
                    h(a, function (e, t) {
                        l._setParamValue(e, t, f)
                    })
                }
                s[s.length - 1] = f, e.extend(o, f)
            }
            var c = s.length;
            if (r.splatMatch && this.encodedSplatParts) {
                if (r.splatMatch < 0) return s;
                c -= 1
            }
            for (var p = 0; p < c; p++) e.isString(s[p]) && (s[p] = t.Router.decodeParams ? decodeURIComponent(s[p]) : s[p], r.paramNames.length >= p - 1 && (o[r.paramNames[p]] = s[p]));
            return t.Router.namedParameters || r.namedParameters ? [o] : s
        },
        _setParamValue: function (e, t, n) {
            var r = e.split("."),
                i = n;
            for (var s = 0; s < r.length; s++) {
                var o = r[s];
                s === r.length - 1 ? i[o] = this._decodeParamValue(t, i[o]) : i = i[o] = i[o] || {}
            }
        },
        _decodeParamValue: function (n, r) {
            var i = t.Router.arrayValueSplit;
            if (n.indexOf(i) >= 0) {
                var s = n.split(i);
                for (var o = s.length - 1; o >= 0; o--) s[o] ? s[o] = decodeURIComponent(s[o]) : s.splice(o, 1);
                return s
            }
            return r ? e.isArray(r) ? (r.push(decodeURIComponent(n)), r) : [r, decodeURIComponent(n)] : decodeURIComponent(n)
        },
        toFragment: function (t, n) {
            return n && (e.isString(n) || (n = this._toQueryString(n)), n && (t += "?" + n)), t
        },
        _toQueryString: function (n, r) {
            function s(e) {
                return e.replace(i, encodeURIComponent(i))
            }
            var i = t.Router.arrayValueSplit;
            if (!n) return "";
            r = r || "";
            var o = "";
            for (var u in n) {
                var a = n[u];
                if (e.isString(a) || e.isNumber(a) || e.isBoolean(a) || e.isDate(a)) {
                    a = this._toQueryParam(a);
                    if (e.isBoolean(a) || e.isNumber(a) || a) o += (o ? "&" : "") + this._toQueryParamName(u, r) + "=" + s(encodeURIComponent(a))
                } else if (e.isArray(a)) {
                    var f = "";
                    for (var l in a) {
                        var c = this._toQueryParam(a[l]);
                        if (e.isBoolean(c) || c) f += i + s(c)
                    }
                    f && (o += (o ? "&" : "") + this._toQueryParamName(u, r) + "=" + f)
                } else {
                    var h = this._toQueryString(a, this._toQueryParamName(u, r, !0));
                    h && (o += (o ? "&" : "") + h)
                }
            }
            return o
        },
        _toQueryParamName: function (e, t, n) {
            return t + e + (n ? "." : "")
        },
        _toQueryParam: function (t) {
            return e.isNull(t) || e.isUndefined(t) ? null : t
        }
    })
}(typeof _ == "undefined" ? null : _, typeof Backbone == "undefined" ? null : Backbone),
function () {
    window.Streamphish = {
        Models: {},
        Collections: {},
        Routers: {},
        Views: {},
        Templates: {},
        Helpers: {
            dateString: function (e, t) {
                var n, r, i, s, o;
                return r = e.split("-"), n = new Date(r[0], r[1] - 1, r[2]), s = ("0" + (n.getMonth() + 1)).slice(-2), i = ("0" + n.getDate()).slice(-2), o = n.getFullYear(), t.replace("%m", s).replace("%d", i).replace("%Y", o)
            },
            msToMMSS: function (e) {
                var t, n, r;
                return t = Math.floor(e / 6e4), n = e - t * 1e3 * 60, r = Math.floor(n / 1e3), "" + t + ":" + (r < 10 ? "0" : "") + r
            },
            clamp: function (e, t, n) {
                return Math.max(t, Math.min(n, e))
            },
            linkTo: function (e, t) {
                return Backbone.history._wantsPushState ? "<a href='/" + t + "'>" + e + "</a>" : "<a href='#" + t + "'>" + e + "</a>"
            }
        }
    }
}.call(this), Streamphish.Templates.player = _.template('<div class="controls">\n  <a class="btn prev" data-control="prev" style="margin-right: 4px;">\n    <span class="arrowGrp">\n      <span class="arrow"></span><span class="arrow"></span>\n    </span>\n  </a>\n  <a class="btn playpause" data-control="togglePause" style="margin-right: 4px;" id="playBtn">\n    <span class="pause"></span>\n  </a>\n  <a class="btn next" data-control="next">\n    <span class="arrowGrp">\n      <span class="arrow"></span><span class="arrow"></span>\n    </span>\n  </a>\n</div>\n\n<% var show = (currentTrack.collection && currentTrack.collection.show) ? currentTrack.collection.show : null; %>\n<h2>\n  <%= Streamphish.Helpers.linkTo(currentTrack.get(\'title\'), "songs/" + currentTrack.get(\'slug\')) %>\n</h2>\n<% if(show) { %>\n  <h3>\n    <%= Streamphish.Helpers.linkTo(Streamphish.Helpers.dateString(show.get(\'show_date\'), \'%m-%d-%Y\') + \'&nbsp;<small>\' + show.get(\'location\') + \'</small>\', \'shows/\' + Streamphish.Helpers.dateString(show.get(\'show_date\'), \'%Y-%m-%d\')) %>\n  </h3>\n<% } %>\n<% var lt10MinClass = currentTrack.get(\'duration\') < 600000 ? \'lt10Min\' : \'\' %>\n<div class="scrubber <%= lt10MinClass %>">\n  <div class="loadProgress">\n    <div class="handle"></div>\n  </div>\n</div>\n<div class="time">\n  <span class="current">0:00</span><span class="total"> / <%= Streamphish.Helpers.msToMMSS(currentTrack.get(\'duration\')) %></span>\n</div>\n'), Streamphish.Templates.show = _.template('<header>\n  <a href="/shows/<%= year %>" class="backBtn">← <%= year %></a>\n  <h1>\n    <%= Streamphish.Helpers.dateString(show_date, \'%m-%d-%Y\') %><span class="location"> - <%= location %>\n  </h1>\n  <a href="http://phish.net/setlists/?d=<%= show_date %>" target="_blank" class="info" data-bypass>\n    info\n  </a>\n</header>\n\n<% beforeTrackIdxs = _.map(sets, function(set) { return set.beforeTrackIdx; }); %>\n\n<ul class="pageList songs">\n  <% _.each(tracks.models, function(track, trackIdx) { %>\n    <% if( (setIdx = _.indexOf(beforeTrackIdxs, trackIdx)) !== -1 ) { %>\n    <li class="sectionTitle"><h2><%= sets[setIdx].title %></h2></li>\n    <% } %>\n\n    <li data-cid="<%= track.cid %>">\n      <div class="songInfo">\n        <div class="songTitle">\n          <a data-control="song" href="/shows/<%= show_date %>/<%= track.get(\'slug\') %>" data-bypass><%= track.get(\'title\') %></a>\n          <% if(sbd) { %>\n            <span class="tag">SBD</span>\n          <% } %>\n          <% if(remastered) { %>\n            <span class="tag">Remastered</span>\n          <% } %>\n        </div>\n      </div>\n      <span class="duration"><%= Streamphish.Util.msToMMSS(track.get(\'duration\')) %></span>\n    </li>\n  <% }); %>\n</ul>\n'), Streamphish.Templates.shows_by_year = _.template('<header>\n  <a href="/" class="backBtn">← Home</a>\n  <h1>\n    <a href=\'#\' data-control=\'toggleYearList\' data-bypass=\'true\'>\n      <%= year %> <small>▾</small>\n    </a>\n  </h1>\n</header>\n\n<ul class="pageList linkItems showsByYear">\n  <% _.each(shows, function(show) { %>\n    <li><a href="/shows/<%= Streamphish.Helpers.dateString(show.show_date, \'%Y-%m-%d\') %>">\n      <span>\n        <strong><%= Streamphish.Helpers.dateString(show.show_date, \'%m/%d/%Y\') %></strong>\n        <%= show.location %>\n      </span>\n      <% if(show.sbd || show.remastered) { %>\n        <div class="tagContainer">\n      <% } %>\n        <% if(show.sbd) { %>\n          <span class="tag">SBD</span>\n        <% } %>\n\n        <% if(show.remastered) { %>\n          <span class="tag">Remastered</span>\n        <% } %>\n      <% if(show.sbd || show.remastered) { %>\n        </div>\n      <% } %>\n    </a></li>\n  <% }); %>\n</ul>\n'), Streamphish.Templates.site_index = _.template('<header>\n  <h1>PhishTracks</h1>\n</header>\n\n<ul class="pageList linkItems">\n  <li class="sectionTitle"><h2>Years</h2></li>\n  <% _.each(years, function(year) { %>\n    <li>\n      <a href="/shows/<%= year %>"><span><%= year %></span></a>\n    </li>\n  <% }); %>\n  <li class="sectionTitle"><h2>Songs</h2></li>\n  <% _.each(songs, function(song) { %>\n    <li>\n      <a href="<%= song.url %>"><span><%= song.title %></span></a>\n    </li>\n  <% }); %>\n</ul>\n'), Streamphish.Templates.song = _.template('<header>\n  <a href="/songs" class="backBtn">← Songs</a>\n  <h1><%= title %></h1>\n</header>\n\n<ul class="pageList songs song">\n  <% _.each(tracks, function(track, idx) { %>\n     <li data-track-idx="<%= idx %>" data-track-id="<%= track.id %>">\n      <div class="songInfo">\n        <span class="songDate">\n          <a href="/shows/<%= track.show.show_date %>"><%= track.show.show_date %></a>\n        </span>\n        <br>\n        <span class="songVenue"><%= track.show.location %></span>\n      </div>\n      <span class="duration"><%= Streamphish.Helpers.msToMMSS(track.duration) %></span>\n    </li>\n  <% }); %>\n</ul>\n'), Streamphish.Templates.song_bubbles = _.template('<div class="songs">\n  <% _.each(songs, function(song) { %>\n    <a href="<%= song.url %>" style="background: <%= song.bg %>; color: <%= song.fg %>;">\n      <span><%= song.title %></span>\n    </a>\n  <% }); %>\n</div>\n'), Streamphish.Templates.songs = _.template('<header>\n  <a href="/" class="backBtn">← Home</a>\n  <h1>Songs</h1>\n</header>\n\n<ul class="pageList linkItems">\n<% _.each(data, function(song) { %>\n  <li>\n    <a href="/songs/<%= song.slug %>"><span><%= song.title %></span></a>\n  </li>\n<% }); %>\n</ul>\n'), Streamphish.Templates.year_bubbles = _.template('<ul class="yearsCircles">\n  <% _.each(years, function(year) { %>\n    <li style="background: <%= year.bg %>; border: 1px solid <%= year.bg %>;">\n      <a href="/shows/<%= year.year %>" style="color: <%= year.fg %>;">\n        <span><%= year.year %></span>\n      </a>\n    </li>\n  <% }); %>\n</ul>\n'),
function () {
    var e = {}.hasOwnProperty,
        t = function (t, n) {
            function i() {
                this.constructor = t
            }
            for (var r in n) e.call(n, r) && (t[r] = n[r]);
            return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
        };
    Streamphish.Models.IndexData = function (e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.urlRoot = "/", n.prototype.initialize = function () {}, n
    }(Backbone.Model)
}.call(this),
function () {
    var e = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }, t = {}.hasOwnProperty,
        n = function (e, n) {
            function i() {
                this.constructor = e
            }
            for (var r in n) t.call(n, r) && (e[r] = n[r]);
            return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
        };
    Streamphish.Models.Player = function (t) {
        function r() {
            return this._pushTrackListenAnalytic = e(this._pushTrackListenAnalytic, this), this.playNext = e(this.playNext, this), r.__super__.constructor.apply(this, arguments)
        }
        return n(r, t), r.prototype._cSound = null, r.prototype.initialize = function () {
            return r.__super__.initialize.apply(this, arguments), this.set("currentTrack", null), this.on("change:currentTrack", this.stopLoadingCurrent), this.on("change:currentTrack", this._pushTrackListenAnalytic)
        }, r.prototype.load = function (e, t, n) {
            var r = this;
            t == null && (t = 0), n == null && (n = !1);
            if (!e) return;
            return soundManager.onready(function () {
                return e.collection && r.set("playlist", e.collection), e.set("initialPosition", soundManager.html5.usingFlash ? 0 : t), n ? r.set("currentTrack", e) : (r.set("currentTrack", e, {
                    silent: !0
                }), App.player_view.render(), document.getElementById("playBtn").children[0].className = "play")
            })
        }, r.prototype.play = function (e, t) {
            return t == null && (t = 0), this.load(e, t, !0)
        }, r.prototype.stop = function () {
            return soundManager.stopAll()
        }, r.prototype.playPrev = function () {
            var e;
            e = this.get("playlist").indexOf(this.get("currentTrack"));
            if (e === 0) return;
            return this.set("currentTrack", this.get("playlist").at(e - 1))
        }, r.prototype.playNext = function () {
            var e;
            e = this.get("playlist").indexOf(this.get("currentTrack"));
            if (e === this.get("playlist").length - 1) return;
            return this.set("currentTrack", this.get("playlist").at(e + 1))
        }, r.prototype.togglePause = function () {
            return this.get("currentTrack").togglePause()
        }, r.prototype.isPaused = function () {
            return this.get("currentTrack").sound.paused
        }, r.prototype.goToPercentage = function (e) {
            var t;
            return t = this.get("currentTrack").get("duration"), this.get("currentTrack").sound.setPosition(t * e)
        }, r.prototype.stopLoadingCurrent = function (e, t) {
            return this._cSound && this._cSound.unload(), this._cSound = t.sound
        }, r.prototype._pushTrackListenAnalytic = function (e, t) {
            var n;
            return n = "/shows/" + t.collection.show.get("show_date") + "/" + t.get("slug"), _gaq.push(["_trackEvent", "track", "listen", n])
        }, r
    }(Backbone.Model)
}.call(this),
function () {
    var e = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }, t = {}.hasOwnProperty,
        n = function (e, n) {
            function i() {
                this.constructor = e
            }
            for (var r in n) t.call(n, r) && (e[r] = n[r]);
            return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
        };
    Streamphish.Models.Show = function (t) {
        function r() {
            return this.year = e(this.year, this), r.__super__.constructor.apply(this, arguments)
        }
        return n(r, t), r.prototype.urlRoot = "/shows", r.prototype.initialize = function () {
            var e = this;
            return r.__super__.initialize.apply(this, arguments), this.on("change:tracks", function (t, n) {
                var r;
                return e.set("tracks", new Streamphish.Collections.Tracks(function () {
                    var e, t, i;
                    i = [];
                    for (e = 0, t = n.length; e < t; e++) r = n[e], i.push(new Streamphish.Models.Track(r));
                    return i
                }()), {
                    silent: !0
                }), e.get("tracks").show = t
            }), this.on("change:sets", function (e, t) {
                var n, r;
                return r = _.flatten(_.map(t, function (e) {
                    return e.tracks
                })), n = [], _.reduce(t, function (e, t) {
                    return n.push({
                        title: t.title,
                        beforeTrackIdx: e
                    }), e + t.tracks.length
                }, 0), this.set("sets", n, {
                    silent: !0
                }), this.set("tracks", r)
            })
        }, r.prototype.year = function () {
            return this.get("show_date").split("-")[0]
        }, r.prototype.toJSON = function () {
            var e;
            return e = r.__super__.toJSON.apply(this, arguments), e.year = this.year(), e
        }, r.prototype.fetch = function (e) {
            var t, n = this;
            return t = e.success, _.extend(e, {
                success: function (e, r, i) {
                    return t(e, r, i), n.fetched = !0
                }
            }), r.__super__.fetch.call(this, e)
        }, r
    }(Backbone.Model), Streamphish.Collections.Shows = function (e) {
        function t() {
            return t.__super__.constructor.apply(this, arguments)
        }
        return n(t, e), t.prototype.url = "/shows", t.prototype.model = Streamphish.Models.Show, t.prototype.initialize = function (e, n) {
            return n.year && (this.year = n.year), t.__super__.initialize.call(this, e, n)
        }, t.prototype.toJSON = function () {
            return {
                year: this.year,
                shows: t.__super__.toJSON.apply(this, arguments)
            }
        }, t.prototype.fetch = function (e) {
            var n;
            return e == null && (e = {}), this.year && ((n = e.data) == null && (e.data = {}), e.data.year = this.year), t.__super__.fetch.call(this, e)
        }, t
    }(Backbone.Collection)
}.call(this),
function () {
    Streamphish.Models.ShowCache = function () {
        function e() {}
        return e.prototype.shows = {}, e.prototype.get = function (e, t) {
            return t == null && (t = {}), _.defaults(t, {
                autoFetch: !0
            }), this.shows[e] || (this.shows[e] = new Streamphish.Models.Show({
                id: e
            })), !this.shows[e].fetched && t.autoFetch ? this.shows[e].fetch({
                success: t.fetchCallback
            }) : t.fetchCallback && t.fetchCallback(this.shows[e]), this.shows[e]
        }, e
    }(), Streamphish.ShowCache = new Streamphish.Models.ShowCache
}.call(this),
function () {
    var e = {}.hasOwnProperty,
        t = function (t, n) {
            function i() {
                this.constructor = t
            }
            for (var r in n) e.call(n, r) && (t[r] = n[r]);
            return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
        };
    Streamphish.Models.Song = function (e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.urlRoot = "/songs", n
    }(Backbone.Model), Streamphish.Collections.Songs = function (e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.url = "/songs", n.prototype.model = Streamphish.Models.Song, n
    }(Backbone.Collection)
}.call(this),
function () {
    var e = {}.hasOwnProperty,
        t = function (t, n) {
            function i() {
                this.constructor = t
            }
            for (var r in n) e.call(n, r) && (t[r] = n[r]);
            return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
        };
    Streamphish.Models.Track = function (e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.initialize = function () {
            return n.__super__.initialize.apply(this, arguments)
        }, n.prototype.play = function (e) {
            var t = this;
            return soundManager.onready(function () {
                var e;
                return t.sound || (t.get("initialPosition") && t.get("initialPosition") < t.get("duration") ? e = t.get("initialPosition") : e = 0, t.sound = soundManager.createSound({
                    id: t.cid,
                    url: t.get("file_url"),
                    autoPlay: !1,
                    position: e,
                    onfinish: App.player.playNext
                })), t.sound.play({
                    whileloading: function () {
                        return App.player_view.trackLoading(t)
                    },
                    whileplaying: function () {
                        return App.player_view.trackPlaying(t)
                    }
                })
            })
        }, n.prototype.togglePause = function () {
            return this.sound ? this.sound.togglePause() : this.play()
        }, n.prototype.position = function () {
            var e;
            return ((e = this.sound) != null ? e.position : void 0) || this.get("initialPosition") || 0
        }, n
    }(Backbone.Model), Streamphish.Collections.Tracks = function (e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.model = Streamphish.Models.Track, n
    }(Backbone.Collection)
}.call(this),
function () {
    var e = {}.hasOwnProperty,
        t = function (t, n) {
            function i() {
                this.constructor = t
            }
            for (var r in n) e.call(n, r) && (t[r] = n[r]);
            return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
        };
    Streamphish.Views.ApplicationView = function (e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.tagName = "div", n.prototype.id = "currentView", n.prototype.bypassLink = function (e) {
            return $(document).trigger(e), !1
        }, n.prototype.render = function () {
            var e;
            return e = (this.model || this.collection).toJSON(), e instanceof Array && (e = {
                data: e
            }), this.$el.html(this.template(e)), this
        }, n
    }(Backbone.View)
}.call(this),
function (e, t) {
    "use strict";

    function r(n, r) {
        function on(e) {
            return s.preferFlash && Pt && !s.ignoreFlash && s.flash[e] !== t && s.flash[e]
        }
        function un(e) {
            return function (t) {
                var n = this._s,
                    r;
                return !n || !n._a ? r = null : r = e.call(this, t), r
            }
        }
        this.setupOptions = {
            url: n || null,
            flashVersion: 8,
            debugMode: !0,
            debugFlash: !1,
            useConsole: !0,
            consoleOnly: !0,
            waitForWindowLoad: !1,
            bgColor: "#ffffff",
            useHighPerformance: !1,
            flashPollingInterval: null,
            html5PollingInterval: null,
            flashLoadTimeout: 1e3,
            wmode: null,
            allowScriptAccess: "always",
            useFlashBlock: !1,
            useHTML5Audio: !0,
            html5Test: /^(probably|maybe)$/i,
            preferFlash: !0,
            noSWFCache: !1
        }, this.defaultOptions = {
            autoLoad: !1,
            autoPlay: !1,
            from: null,
            loops: 1,
            onid3: null,
            onload: null,
            whileloading: null,
            onplay: null,
            onpause: null,
            onresume: null,
            whileplaying: null,
            onposition: null,
            onstop: null,
            onfailure: null,
            onfinish: null,
            multiShot: !0,
            multiShotEvents: !1,
            position: null,
            pan: 0,
            stream: !0,
            to: null,
            type: null,
            usePolicyFile: !1,
            volume: 100
        }, this.flash9Options = {
            isMovieStar: null,
            usePeakData: !1,
            useWaveformData: !1,
            useEQData: !1,
            onbufferchange: null,
            ondataerror: null
        }, this.movieStarOptions = {
            bufferTime: 3,
            serverURL: null,
            onconnect: null,
            duration: null
        }, this.audioFormats = {
            mp3: {
                type: ['audio/mpeg; codecs="mp3"', "audio/mpeg", "audio/mp3", "audio/MPA", "audio/mpa-robust"],
                required: !0
            },
            mp4: {
                related: ["aac", "m4a", "m4b"],
                type: ['audio/mp4; codecs="mp4a.40.2"', "audio/aac", "audio/x-m4a", "audio/MP4A-LATM", "audio/mpeg4-generic"],
                required: !1
            },
            ogg: {
                type: ["audio/ogg; codecs=vorbis"],
                required: !1
            },
            wav: {
                type: ['audio/wav; codecs="1"', "audio/wav", "audio/wave", "audio/x-wav"],
                required: !1
            }
        }, this.movieID = "sm2-container", this.id = r || "sm2movie", this.debugID = "soundmanager-debug", this.debugURLParam = /([#?&])debug=1/i, this.versionNumber = "V2.97a.20130101", this.version = null, this.movieURL = null, this.altURL = null, this.swfLoaded = !1, this.enabled = !1, this.oMC = null, this.sounds = {}, this.soundIDs = [], this.muted = !1, this.didFlashBlock = !1, this.filePattern = null, this.filePatterns = {
            flash8: /\.mp3(\?.*)?$/i,
            flash9: /\.mp3(\?.*)?$/i
        }, this.features = {
            buffering: !1,
            peakData: !1,
            waveformData: !1,
            eqData: !1,
            movieStar: !1
        }, this.sandbox = {}, this.html5 = {
            usingFlash: null
        }, this.flash = {}, this.html5Only = !1, this.ignoreFlash = !1;
        var i, s = this,
            o = null,
            u = null,
            a = "soundManager",
            f = a + ": ",
            l = "HTML5::",
            c, h = navigator.userAgent,
            p = e.location.href.toString(),
            d = document,
            v, m, g, y, b = [],
            w = !0,
            E, S = !1,
            x = !1,
            T = !1,
            N = !1,
            C = !1,
            k, L = 0,
            A, O, M, _, D, P, H, B, j, F, I, q, R, U, z, W, X, V, $, J, K, Q, G = ["log", "info", "warn", "error"],
            Y = 8,
            Z, et, tt, nt = null,
            rt = null,
            it, st, ot, ut, at, ft, lt, ct, ht, pt = !1,
            dt = !1,
            vt, mt, gt, yt = 0,
            bt = null,
            wt, Et = [],
            St = null,
            xt, Tt, Nt, Ct, kt, Lt, At, Ot, Mt = Array.prototype.slice,
            _t = !1,
            Dt, Pt, Ht, Bt, jt, Ft, It, qt = h.match(/(ipad|iphone|ipod)/i),
            Rt = h.match(/android/i),
            Ut = h.match(/msie/i),
            zt = h.match(/webkit/i),
            Wt = h.match(/safari/i) && !h.match(/chrome/i),
            Xt = h.match(/opera/i),
            Vt = h.match(/(mobile|pre\/|xoom)/i) || qt || Rt,
            $t = !p.match(/usehtml5audio/i) && !p.match(/sm2\-ignorebadua/i) && Wt && !h.match(/silk/i) && h.match(/OS X 10_6_([3-7])/i),
            Jt = e.console !== t && console.log !== t,
            Kt = d.hasFocus !== t ? d.hasFocus() : null,
            Qt = Wt && (d.hasFocus === t || !d.hasFocus()),
            Gt = !Qt,
            Yt = /(mp3|mp4|mpa|m4a|m4b)/i,
            Zt = "about:blank",
            en = d.location ? d.location.protocol.match(/http/i) : null,
            tn = en ? "" : "http://",
            nn = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
            rn = ["mpeg4", "aac", "flv", "mov", "mp4", "m4v", "f4v", "m4a", "m4b", "mp4v", "3gp", "3g2"],
            sn = new RegExp("\\.(" + rn.join("|") + ")(\\?.*)?$", "i");
        this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i, this.useAltURL = !en, ut = {
            swfBox: "sm2-object-box",
            swfDefault: "movieContainer",
            swfError: "swf_error",
            swfTimedout: "swf_timedout",
            swfLoaded: "swf_loaded",
            swfUnblocked: "swf_unblocked",
            sm2Debug: "sm2_debug",
            highPerf: "high_performance",
            flashDebug: "flash_debug"
        }, this.hasHTML5 = function () {
            try {
                return Audio !== t && (Xt && opera !== t && opera.version() < 10 ? new Audio(null) : new Audio).canPlayType !== t
            } catch (e) {
                return !1
            }
        }(), this.setup = function (e) {
            var n = !s.url;
            return e !== t && T && St && s.ok() && (e.flashVersion !== t || e.url !== t || e.html5Test !== t) && ct(it("setupLate")), M(e), n && X && e.url !== t && s.beginDelayedInit(), !X && e.url !== t && d.readyState === "complete" && setTimeout(z, 1), s
        }, this.ok = function () {
            return St ? T && !N : s.useHTML5Audio && s.hasHTML5
        }, this.supported = this.ok, this.getMovie = function (t) {
            return c(t) || d[t] || e[t]
        }, this.createSound = function (e, n) {
            function l() {
                return a = ft(a), s.sounds[a.id] = new i(a), s.soundIDs.push(a.id), s.sounds[a.id]
            }
            var r, o, a, f = null;
            return !T || !s.ok() ? (ct(o), !1) : (n !== t && (e = {
                id: e,
                url: n
            }), a = O(e), a.url = wt(a.url), ht(a.id, !0) ? s.sounds[a.id] : (Tt(a) ? (f = l(), f._setup_html5(a)) : (y > 8 && a.isMovieStar === null && (a.isMovieStar = !! (a.serverURL || (a.type ? a.type.match(nn) : !1) || a.url.match(sn))), a = lt(a, r), f = l(), y === 8 ? u._createSound(a.id, a.loops || 1, a.usePolicyFile) : (u._createSound(a.id, a.url, a.usePeakData, a.useWaveformData, a.useEQData, a.isMovieStar, a.isMovieStar ? a.bufferTime : !1, a.loops || 1, a.serverURL, a.duration || null, a.autoPlay, !0, a.autoLoad, a.usePolicyFile), a.serverURL || (f.connected = !0, a.onconnect && a.onconnect.apply(f))), !a.serverURL && (a.autoLoad || a.autoPlay) && f.load(a)), !a.serverURL && a.autoPlay && f.play(), f))
        }, this.destroySound = function (e, t) {
            if (!ht(e)) return !1;
            var n = s.sounds[e],
                r;
            n._iO = {}, n.stop(), n.unload();
            for (r = 0; r < s.soundIDs.length; r++) if (s.soundIDs[r] === e) {
                    s.soundIDs.splice(r, 1);
                    break
                }
            return t || n.destruct(!0), n = null, delete s.sounds[e], !0
        }, this.load = function (e, t) {
            return ht(e) ? s.sounds[e].load(t) : !1
        }, this.unload = function (e) {
            return ht(e) ? s.sounds[e].unload() : !1
        }, this.onPosition = function (e, t, n, r) {
            return ht(e) ? s.sounds[e].onposition(t, n, r) : !1
        }, this.onposition = this.onPosition, this.clearOnPosition = function (e, t, n) {
            return ht(e) ? s.sounds[e].clearOnPosition(t, n) : !1
        }, this.play = function (e, t) {
            var n = !1;
            return !T || !s.ok() ? (ct(a + ".play(): " + it(T ? "notOK" : "notReady")), n) : ht(e) ? s.sounds[e].play(t) : (t instanceof Object || (t = {
                url: t
            }), t && t.url && (t.id = e, n = s.createSound(t).play()), n)
        }, this.start = this.play, this.setPosition = function (e, t) {
            return ht(e) ? s.sounds[e].setPosition(t) : !1
        }, this.stop = function (e) {
            return ht(e) ? s.sounds[e].stop() : !1
        }, this.stopAll = function () {
            var e;
            for (e in s.sounds) s.sounds.hasOwnProperty(e) && s.sounds[e].stop()
        }, this.pause = function (e) {
            return ht(e) ? s.sounds[e].pause() : !1
        }, this.pauseAll = function () {
            var e;
            for (e = s.soundIDs.length - 1; e >= 0; e--) s.sounds[s.soundIDs[e]].pause()
        }, this.resume = function (e) {
            return ht(e) ? s.sounds[e].resume() : !1
        }, this.resumeAll = function () {
            var e;
            for (e = s.soundIDs.length - 1; e >= 0; e--) s.sounds[s.soundIDs[e]].resume()
        }, this.togglePause = function (e) {
            return ht(e) ? s.sounds[e].togglePause() : !1
        }, this.setPan = function (e, t) {
            return ht(e) ? s.sounds[e].setPan(t) : !1
        }, this.setVolume = function (e, t) {
            return ht(e) ? s.sounds[e].setVolume(t) : !1
        }, this.mute = function (e) {
            var t = 0;
            e instanceof String && (e = null);
            if (!e) {
                for (t = s.soundIDs.length - 1; t >= 0; t--) s.sounds[s.soundIDs[t]].mute();
                return s.muted = !0, !0
            }
            return ht(e) ? s.sounds[e].mute() : !1
        }, this.muteAll = function () {
            s.mute()
        }, this.unmute = function (e) {
            var t;
            e instanceof String && (e = null);
            if (!e) {
                for (t = s.soundIDs.length - 1; t >= 0; t--) s.sounds[s.soundIDs[t]].unmute();
                return s.muted = !1, !0
            }
            return ht(e) ? s.sounds[e].unmute() : !1
        }, this.unmuteAll = function () {
            s.unmute()
        }, this.toggleMute = function (e) {
            return ht(e) ? s.sounds[e].toggleMute() : !1
        }, this.getMemoryUse = function () {
            var e = 0;
            return u && y !== 8 && (e = parseInt(u._getMemoryUse(), 10)), e
        }, this.disable = function (n) {
            var r;
            n === t && (n = !1);
            if (N) return !1;
            N = !0;
            for (r = s.soundIDs.length - 1; r >= 0; r--) Z(s.sounds[s.soundIDs[r]]);
            return A(n), Ot.remove(e, "load", H), !0
        }, this.canPlayMIME = function (e) {
            var t;
            return s.hasHTML5 && (t = Nt({
                type: e
            })), !t && St && (t = e && s.ok() ? !! ((y > 8 ? e.match(nn) : null) || e.match(s.mimePattern)) : null), t
        }, this.canPlayURL = function (e) {
            var t;
            return s.hasHTML5 && (t = Nt({
                url: e
            })), !t && St && (t = e && s.ok() ? !! e.match(s.filePattern) : null), t
        }, this.canPlayLink = function (e) {
            return e.type !== t && e.type && s.canPlayMIME(e.type) ? !0 : s.canPlayURL(e.href)
        }, this.getSoundById = function (e, t) {
            if (!e) throw new Error(a + ".getSoundById(): sID is null/_undefined");
            var n = s.sounds[e];
            return n
        }, this.onready = function (t, n) {
            var r = "onready",
                i = !1;
            if (typeof t != "function") throw it("needFunction", r);
            return n || (n = e), D(r, t, n), P(), i = !0, i
        }, this.ontimeout = function (t, n) {
            var r = "ontimeout",
                i = !1;
            if (typeof t != "function") throw it("needFunction", r);
            return n || (n = e), D(r, t, n), P({
                type: r
            }), i = !0, i
        }, this._writeDebug = function (e, t) {
            return !0
        }, this._wD = this._writeDebug, this._debug = function () {}, this.reboot = function (t, n) {
            var r, i, o;
            for (r = s.soundIDs.length - 1; r >= 0; r--) s.sounds[s.soundIDs[r]].destruct();
            if (u) try {
                    Ut && (rt = u.innerHTML), nt = u.parentNode.removeChild(u)
            } catch (a) {}
            rt = nt = St = u = null, s.enabled = X = T = pt = dt = S = x = N = _t = s.swfLoaded = !1, s.soundIDs = [], s.sounds = {};
            if (!t) {
                for (r in b) if (b.hasOwnProperty(r)) for (i = 0, o = b[r].length; i < o; i++) b[r][i].fired = !1
            } else b = [];
            return s.html5 = {
                usingFlash: null
            }, s.flash = {}, s.html5Only = !1, s.ignoreFlash = !1, e.setTimeout(function () {
                U(), n || s.beginDelayedInit()
            }, 20), s
        }, this.reset = function () {
            return s.reboot(!0, !0)
        }, this.getMoviePercent = function () {
            return u && "PercentLoaded" in u ? u.PercentLoaded() : null
        }, this.beginDelayedInit = function () {
            C = !0, z(), setTimeout(function () {
                return dt ? !1 : ($(), R(), dt = !0, !0)
            }, 20), B()
        }, this.destruct = function () {
            s.disable(!0)
        }, i = function (e) {
            var n = this,
                r, i, a, f, l, c, h = !1,
                p = [],
                d = 0,
                v, m, g = null,
                b;
            b = {
                duration: null,
                time: null
            }, this.id = e.id, this.sID = this.id, this.url = e.url, this.options = O(e), this.instanceOptions = this.options, this._iO = this.instanceOptions, this.pan = this.options.pan, this.volume = this.options.volume, this.isHTML5 = !1, this._a = null, this.id3 = {}, this._debug = function () {}, this.load = function (e) {
                var r = null,
                    i;
                e !== t ? n._iO = O(e, n.options) : (e = n.options, n._iO = e, g && g !== n.url && (n._iO.url = n.url, n.url = null)), n._iO.url || (n._iO.url = n.url), n._iO.url = wt(n._iO.url), n.instanceOptions = n._iO, i = n._iO;
                if (i.url === n.url && n.readyState !== 0 && n.readyState !== 2) return n.readyState === 3 && i.onload && i.onload.apply(n, [ !! n.duration]), n;
                n.loaded = !1, n.readyState = 1, n.playState = 0, n.id3 = {};
                if (Tt(i)) r = n._setup_html5(i), r._called_load || (n._html5_canplay = !1, n.url !== i.url && (n._a.src = i.url, n.setPosition(0)), n._a.autobuffer = "auto", n._a.preload = "auto", n._a._called_load = !0, i.autoPlay && n.play());
                else try {
                        n.isHTML5 = !1, n._iO = lt(ft(i)), i = n._iO, y === 8 ? u._load(n.id, i.url, i.stream, i.autoPlay, i.usePolicyFile) : u._load(n.id, i.url, !! i.stream, !! i.autoPlay, i.loops || 1, !! i.autoLoad, i.usePolicyFile)
                } catch (s) {
                    J({
                        type: "SMSOUND_LOAD_JS_EXCEPTION",
                        fatal: !0
                    })
                }
                return n.url = i.url, n
            }, this.unload = function () {
                return n.readyState !== 0 && (n.isHTML5 ? (f(), n._a && (n._a.pause(), kt(n._a, Zt), g = Zt)) : y === 8 ? u._unload(n.id, Zt) : u._unload(n.id), r()), n
            }, this.destruct = function (e) {
                n.isHTML5 ? (f(), n._a && (n._a.pause(), kt(n._a), _t || a(), n._a._s = null, n._a = null)) : (n._iO.onfailure = null, u._destroySound(n.id)), e || s.destroySound(n.id, !0)
            }, this.play = function (e, r) {
                var i, s, o, a, f = !0,
                    p = null;
                r = r === t ? !0 : r, e || (e = {}), n.url && (n._iO.url = n.url), n._iO = O(n._iO, n.options), n._iO = O(e, n._iO), n._iO.url = wt(n._iO.url), n.instanceOptions = n._iO;
                if (n._iO.serverURL && !n.connected) return n.getAutoPlay() || n.setAutoPlay(!0), n;
                Tt(n._iO) && (n._setup_html5(n._iO), l()), n.playState === 1 && !n.paused && (s = n._iO.multiShot, s || (p = n));
                if (p !== null) return p;
                e.url && e.url !== n.url && n.load(n._iO), n.loaded || (n.readyState === 0 ? (n.isHTML5 ? n.load(n._iO) : (n._iO.autoPlay = !0, n.load(n._iO)), n.instanceOptions = n._iO) : n.readyState === 2 && (p = n));
                if (p !== null) return p;
                !n.isHTML5 && y === 9 && n.position > 0 && n.position === n.duration && (e.position = 0);
                if (n.paused && n.position >= 0 && (!n._iO.serverURL || n.position > 0)) n.resume();
                else {
                    n._iO = O(e, n._iO);
                    if (n._iO.from !==
                        null && n._iO.to !== null && n.instanceCount === 0 && n.playState === 0 && !n._iO.serverURL) {
                        a = function () {
                            n._iO = O(e, n._iO), n.play(n._iO)
                        }, n.isHTML5 && !n._html5_canplay ? (n.load({
                            oncanplay: a
                        }), p = !1) : !n.isHTML5 && !n.loaded && (!n.readyState || n.readyState !== 2) && (n.load({
                            onload: a
                        }), p = !1);
                        if (p !== null) return p;
                        n._iO = m()
                    }(!n.instanceCount || n._iO.multiShotEvents || !n.isHTML5 && y > 8 && !n.getAutoPlay()) && n.instanceCount++, n._iO.onposition && n.playState === 0 && c(n), n.playState = 1, n.paused = !1, n.position = n._iO.position !== t && !isNaN(n._iO.position) ? n._iO.position : 0, n.isHTML5 || (n._iO = lt(ft(n._iO))), n._iO.onplay && r && (n._iO.onplay.apply(n), h = !0), n.setVolume(n._iO.volume, !0), n.setPan(n._iO.pan, !0), n.isHTML5 ? (l(), o = n._setup_html5(), n.setPosition(n._iO.position), o.play()) : (f = u._start(n.id, n._iO.loops || 1, y === 9 ? n._iO.position : n._iO.position / 1e3, n._iO.multiShot), y === 9 && !f && n._iO.onplayerror && n._iO.onplayerror.apply(n))
                }
                return n
            }, this.start = this.play, this.stop = function (e) {
                var t = n._iO,
                    r;
                return n.playState === 1 && (n._onbufferchange(0), n._resetOnPosition(0), n.paused = !1, n.isHTML5 || (n.playState = 0), v(), t.to && n.clearOnPosition(t.to), n.isHTML5 ? n._a && (r = n.position, n.setPosition(0), n.position = r, n._a.pause(), n.playState = 0, n._onTimer(), f()) : (u._stop(n.id, e), t.serverURL && n.unload()), n.instanceCount = 0, n._iO = {}, t.onstop && t.onstop.apply(n)), n
            }, this.setAutoPlay = function (e) {
                n._iO.autoPlay = e, n.isHTML5 || (u._setAutoPlay(n.id, e), e && !n.instanceCount && n.readyState === 1 && n.instanceCount++)
            }, this.getAutoPlay = function () {
                return n._iO.autoPlay
            }, this.setPosition = function (e) {
                e === t && (e = 0);
                var r, i, s, o = n.isHTML5 ? Math.max(e, 0) : Math.min(n.duration || n._iO.duration, Math.max(e, 0));
                r = n.position, n.position = o, s = n.position / 1e3, n._resetOnPosition(n.position), n._iO.position = o;
                if (!n.isHTML5) i = y === 9 ? n.position : s, n.readyState && n.readyState !== 2 && u._setPosition(n.id, i, n.paused || !n.playState, n._iO.multiShot);
                else if (n._a && n._html5_canplay && n._a.currentTime !== s) try {
                        n._a.currentTime = s, (n.playState === 0 || n.paused) && n._a.pause()
                } catch (a) {}
                return n.isHTML5 && n.paused && n._onTimer(!0), n
            }, this.pause = function (e) {
                return n.paused || n.playState === 0 && n.readyState !== 1 ? n : (n.paused = !0, n.isHTML5 ? (n._setup_html5().pause(), f()) : (e || e === t) && u._pause(n.id, n._iO.multiShot), n._iO.onpause && n._iO.onpause.apply(n), n)
            }, this.resume = function () {
                var e = n._iO;
                return n.paused ? (n.paused = !1, n.playState = 1, n.isHTML5 ? (n._setup_html5().play(), l()) : (e.isMovieStar && !e.serverURL && n.setPosition(n.position), u._pause(n.id, e.multiShot)), !h && e.onplay ? (e.onplay.apply(n), h = !0) : e.onresume && e.onresume.apply(n), n) : n
            }, this.togglePause = function () {
                return n.playState === 0 ? (n.play({
                    position: y === 9 && !n.isHTML5 ? n.position : n.position / 1e3
                }), n) : (n.paused ? n.resume() : n.pause(), n)
            }, this.setPan = function (e, r) {
                return e === t && (e = 0), r === t && (r = !1), n.isHTML5 || u._setPan(n.id, e), n._iO.pan = e, r || (n.pan = e, n.options.pan = e), n
            }, this.setVolume = function (e, r) {
                return e === t && (e = 100), r === t && (r = !1), n.isHTML5 ? n._a && (n._a.volume = Math.max(0, Math.min(1, e / 100))) : u._setVolume(n.id, s.muted && !n.muted || n.muted ? 0 : e), n._iO.volume = e, r || (n.volume = e, n.options.volume = e), n
            }, this.mute = function () {
                return n.muted = !0, n.isHTML5 ? n._a && (n._a.muted = !0) : u._setVolume(n.id, 0), n
            }, this.unmute = function () {
                n.muted = !1;
                var e = n._iO.volume !== t;
                return n.isHTML5 ? n._a && (n._a.muted = !1) : u._setVolume(n.id, e ? n._iO.volume : n.options.volume), n
            }, this.toggleMute = function () {
                return n.muted ? n.unmute() : n.mute()
            }, this.onPosition = function (e, r, i) {
                return p.push({
                    position: parseInt(e, 10),
                    method: r,
                    scope: i !== t ? i : n,
                    fired: !1
                }), n
            }, this.onposition = this.onPosition, this.clearOnPosition = function (e, t) {
                var n;
                e = parseInt(e, 10);
                if (isNaN(e)) return !1;
                for (n = 0; n < p.length; n++) e === p[n].position && (!t || t === p[n].method) && (p[n].fired && d--, p.splice(n, 1))
            }, this._processOnPosition = function () {
                var e, t, r = p.length;
                if (!r || !n.playState || d >= r) return !1;
                for (e = r - 1; e >= 0; e--) t = p[e], !t.fired && n.position >= t.position && (t.fired = !0, d++, t.method.apply(t.scope, [t.position]));
                return !0
            }, this._resetOnPosition = function (e) {
                var t, n, r = p.length;
                if (!r) return !1;
                for (t = r - 1; t >= 0; t--) n = p[t], n.fired && e <= n.position && (n.fired = !1, d--);
                return !0
            }, m = function () {
                var e = n._iO,
                    t = e.from,
                    r = e.to,
                    i, s;
                return s = function () {
                    n.clearOnPosition(r, s), n.stop()
                }, i = function () {
                    r !== null && !isNaN(r) && n.onPosition(r, s)
                }, t !== null && !isNaN(t) && (e.position = t, e.multiShot = !1, i()), e
            }, c = function () {
                var e, t = n._iO.onposition;
                if (t) for (e in t) t.hasOwnProperty(e) && n.onPosition(parseInt(e, 10), t[e])
            }, v = function () {
                var e, t = n._iO.onposition;
                if (t) for (e in t) t.hasOwnProperty(e) && n.clearOnPosition(parseInt(e, 10))
            }, l = function () {
                n.isHTML5 && vt(n)
            }, f = function () {
                n.isHTML5 && mt(n)
            }, r = function (e) {
                e || (p = [], d = 0), h = !1, n._hasTimer = null, n._a = null, n._html5_canplay = !1, n.bytesLoaded = null, n.bytesTotal = null, n.duration = n._iO && n._iO.duration ? n._iO.duration : null, n.durationEstimate = null, n.buffered = [], n.eqData = [], n.eqData.left = [], n.eqData.right = [], n.failures = 0, n.isBuffering = !1, n.instanceOptions = {}, n.instanceCount = 0, n.loaded = !1, n.metadata = {}, n.readyState = 0, n.muted = !1, n.paused = !1, n.peakData = {
                    left: 0,
                    right: 0
                }, n.waveformData = {
                    left: [],
                    right: []
                }, n.playState = 0, n.position = null, n.id3 = {}
            }, r(), this._onTimer = function (e) {
                var t, r = !1,
                    i, s = {};
                if (n._hasTimer || e) return n._a && (e || (n.playState > 0 || n.readyState === 1) && !n.paused) && (t = n._get_html5_duration(), t !== b.duration && (b.duration = t, n.duration = t, r = !0), n.durationEstimate = n.duration, i = n._a.currentTime * 1e3 || 0, i !== b.time && (b.time = i, r = !0), (r || e) && n._whileplaying(i, s, s, s, s)), r
            }, this._get_html5_duration = function () {
                var e = n._iO,
                    t = n._a && n._a.duration ? n._a.duration * 1e3 : e && e.duration ? e.duration : null,
                    r = t && !isNaN(t) && t !== Infinity ? t : null;
                return r
            }, this._apply_loop = function (e, t) {
                e.loop = t > 1 ? "loop" : ""
            }, this._setup_html5 = function (e) {
                var t = O(n._iO, e),
                    s = decodeURI,
                    u = _t ? o : n._a,
                    a = s(t.url),
                    f;
                _t ? a === Dt && (f = !0) : a === g && (f = !0);
                if (u) {
                    if (u._s) if (_t) u._s && u._s.playState && !f && u._s.stop();
                        else if (!_t && a === s(g)) return n._apply_loop(u, t.loops), u;
                    f || (r(!1), u.src = t.url, n.url = t.url, g = t.url, Dt = t.url, u._called_load = !1)
                } else t.autoLoad || t.autoPlay ? n._a = new Audio(t.url) : n._a = Xt && opera.version() < 10 ? new Audio(null) : new Audio, u = n._a, u._called_load = !1, _t && (o = u);
                return n.isHTML5 = !0, n._a = u, u._s = n, i(), n._apply_loop(u, t.loops), t.autoLoad || t.autoPlay ? n.load() : (u.autobuffer = !1, u.preload = "auto"), u
            }, i = function () {
                function t(e, t, r) {
                    return n._a ? n._a.addEventListener(e, t, r || !1) : null
                }
                if (n._a._added_events) return !1;
                var e;
                n._a._added_events = !0;
                for (e in jt) jt.hasOwnProperty(e) && t(e, jt[e]);
                return !0
            }, a = function () {
                function t(e, t, r) {
                    return n._a ? n._a.removeEventListener(e, t, r || !1) : null
                }
                var e;
                n._a._added_events = !1;
                for (e in jt) jt.hasOwnProperty(e) && t(e, jt[e])
            }, this._onload = function (e) {
                var t, r = !! e || !n.isHTML5 && y === 8 && n.duration;
                return n.loaded = r, n.readyState = r ? 3 : 2, n._onbufferchange(0), n._iO.onload && n._iO.onload.apply(n, [r]), !0
            }, this._onbufferchange = function (e) {
                return n.playState === 0 ? !1 : e && n.isBuffering || !e && !n.isBuffering ? !1 : (n.isBuffering = e === 1, n._iO.onbufferchange && n._iO.onbufferchange.apply(n), !0)
            }, this._onsuspend = function () {
                return n._iO.onsuspend && n._iO.onsuspend.apply(n), !0
            }, this._onfailure = function (e, t, r) {
                n.failures++, n._iO.onfailure && n.failures === 1 && n._iO.onfailure(n, e, t, r)
            }, this._onfinish = function () {
                var e = n._iO.onfinish;
                n._onbufferchange(0), n._resetOnPosition(0), n.instanceCount && (n.instanceCount--, n.instanceCount || (v(), n.playState = 0, n.paused = !1, n.instanceCount = 0, n.instanceOptions = {}, n._iO = {}, f(), n.isHTML5 && (n.position = 0)), (!n.instanceCount || n._iO.multiShotEvents) && e && e.apply(n))
            }, this._whileloading = function (e, t, r, i) {
                var s = n._iO;
                n.bytesLoaded = e, n.bytesTotal = t, n.duration = Math.floor(r), n.bufferLength = i, !n.isHTML5 && !s.isMovieStar ? s.duration ? n.durationEstimate = n.duration > s.duration ? n.duration : s.duration : n.durationEstimate = parseInt(n.bytesTotal / n.bytesLoaded * n.duration, 10) : n.durationEstimate = n.duration, n.isHTML5 || (n.buffered = [{
                        start: 0,
                        end: n.duration
                    }
                ]), (n.readyState !== 3 || n.isHTML5) && s.whileloading && s.whileloading.apply(n)
            }, this._whileplaying = function (e, r, i, s, o) {
                var u = n._iO,
                    a;
                return isNaN(e) || e === null ? !1 : (n.position = Math.max(0, e), n._processOnPosition(), !n.isHTML5 && y > 8 && (u.usePeakData && r !== t && r && (n.peakData = {
                    left: r.leftPeak,
                    right: r.rightPeak
                }), u.useWaveformData && i !== t && i && (n.waveformData = {
                    left: i.split(","),
                    right: s.split(",")
                }), u.useEQData && o !== t && o && o.leftEQ && (a = o.leftEQ.split(","), n.eqData = a, n.eqData.left = a, o.rightEQ !== t && o.rightEQ && (n.eqData.right = o.rightEQ.split(",")))), n.playState === 1 && (!n.isHTML5 && y === 8 && !n.position && n.isBuffering && n._onbufferchange(0), u.whileplaying && u.whileplaying.apply(n)), !0)
            }, this._oncaptiondata = function (e) {
                n.captiondata = e, n._iO.oncaptiondata && n._iO.oncaptiondata.apply(n, [e])
            }, this._onmetadata = function (e, t) {
                var r = {}, i, s;
                for (i = 0, s = e.length; i < s; i++) r[e[i]] = t[i];
                n.metadata = r, n._iO.onmetadata && n._iO.onmetadata.apply(n)
            }, this._onid3 = function (e, t) {
                var r = [],
                    i, s;
                for (i = 0, s = e.length; i < s; i++) r[e[i]] = t[i];
                n.id3 = O(n.id3, r), n._iO.onid3 && n._iO.onid3.apply(n)
            }, this._onconnect = function (e) {
                e = e === 1, n.connected = e, e && (n.failures = 0, ht(n.id) && (n.getAutoPlay() ? n.play(t, n.getAutoPlay()) : n._iO.autoLoad && n.load()), n._iO.onconnect && n._iO.onconnect.apply(n, [e]))
            }, this._ondataerror = function (e) {
                n.playState > 0 && n._iO.ondataerror && n._iO.ondataerror.apply(n)
            }
        }, V = function () {
            return d.body || d._docElement || d.getElementsByTagName("div")[0]
        }, c = function (e) {
            return d.getElementById(e)
        }, O = function (e, n) {
            var r = e || {}, i, o;
            i = n === t ? s.defaultOptions : n;
            for (o in i) i.hasOwnProperty(o) && r[o] === t && (typeof i[o] != "object" || i[o] === null ? r[o] = i[o] : r[o] = O(r[o], i[o]));
            return r
        }, _ = {
            onready: 1,
            ontimeout: 1,
            defaultOptions: 1,
            flash9Options: 1,
            movieStarOptions: 1
        }, M = function (e, n) {
            var r, i = !0,
                o = n !== t,
                u = s.setupOptions,
                a = _;
            for (r in e) if (e.hasOwnProperty(r)) if (typeof e[r] != "object" || e[r] === null || e[r] instanceof Array || e[r] instanceof RegExp) o && a[n] !== t ? s[n][r] = e[r] : u[r] !== t ? (s.setupOptions[r] = e[r], s[r] = e[r]) : a[r] === t ? (ct(it(s[r] === t ? "setupUndef" : "setupError", r), 2), i = !1) : s[r] instanceof Function ? s[r].apply(s, e[r] instanceof Array ? e[r] : [e[r]]) : s[r] = e[r];
                    else {
                        if (a[r] !== t) return M(e[r], r);
                        ct(it(s[r] === t ? "setupUndef" : "setupError", r), 2), i = !1
                    }
            return i
        }, Ot = function () {
            function r(e) {
                var n = Mt.call(e),
                    r = n.length;
                return t ? (n[1] = "on" + n[1], r > 3 && n.pop()) : r === 3 && n.push(!1), n
            }
            function i(e, r) {
                var i = e.shift(),
                    s = [n[r]];
                t ? i[s](e[0], e[1]) : i[s].apply(i, e)
            }
            function s() {
                i(r(arguments), "add")
            }
            function o() {
                i(r(arguments), "remove")
            }
            var t = e.attachEvent,
                n = {
                    add: t ? "attachEvent" : "addEventListener",
                    remove: t ? "detachEvent" : "removeEventListener"
                };
            return {
                add: s,
                remove: o
            }
        }(), jt = {
            abort: un(function () {}),
            canplay: un(function () {
                var e = this._s,
                    n;
                if (e._html5_canplay) return !0;
                e._html5_canplay = !0, e._onbufferchange(0), n = e._iO.position !== t && !isNaN(e._iO.position) ? e._iO.position / 1e3 : null;
                if (e.position && this.currentTime !== n) try {
                        this.currentTime = n
                } catch (r) {}
                e._iO._oncanplay && e._iO._oncanplay()
            }),
            canplaythrough: un(function () {
                var e = this._s;
                e.loaded || (e._onbufferchange(0), e._whileloading(e.bytesLoaded, e.bytesTotal, e._get_html5_duration()), e._onload(!0))
            }),
            ended: un(function () {
                var e = this._s;
                e._onfinish()
            }),
            error: un(function () {
                this._s._onload(!1)
            }),
            loadeddata: un(function () {
                var e = this._s;
                !e._loaded && !Wt && (e.duration = e._get_html5_duration())
            }),
            loadedmetadata: un(function () {}),
            loadstart: un(function () {
                this._s._onbufferchange(1)
            }),
            play: un(function () {
                this._s._onbufferchange(0)
            }),
            playing: un(function () {
                this._s._onbufferchange(0)
            }),
            progress: un(function (e) {
                var t = this._s,
                    n, r, i, s = 0,
                    o = e.type === "progress",
                    u = e.target.buffered,
                    a = e.loaded || 0,
                    f = e.total || 1,
                    l = 1e3;
                t.buffered = [];
                if (u && u.length) {
                    for (n = 0, r = u.length; n < r; n++) t.buffered.push({
                            start: u.start(n) * l,
                            end: u.end(n) * l
                        });
                    s = (u.end(0) - u.start(0)) * l, a = s / (e.target.duration * l)
                }
                isNaN(a) || (t._onbufferchange(0), t._whileloading(a, f, t._get_html5_duration()), a && f && a === f && jt.canplaythrough.call(this, e))
            }),
            ratechange: un(function () {}),
            suspend: un(function (e) {
                var t = this._s;
                jt.progress.call(this, e), t._onsuspend()
            }),
            stalled: un(function () {}),
            timeupdate: un(function () {
                this._s._onTimer()
            }),
            waiting: un(function () {
                var e = this._s;
                e._onbufferchange(1)
            })
        }, Tt = function (e) {
            var t;
            return e.serverURL || e.type && on(e.type) ? t = !1 : t = e.type ? Nt({
                type: e.type
            }) : Nt({
                url: e.url
            }) || s.html5Only, t
        }, kt = function (e, t) {
            e && (e.src = t, e._called_load = !1), _t && (Dt = null)
        }, Nt = function (e) {
            if (!s.useHTML5Audio || !s.hasHTML5) return !1;
            var n = e.url || null,
                r = e.type || null,
                i = s.audioFormats,
                o, u, a, f;
            if (r && s.html5[r] !== t) return s.html5[r] && !on(r);
            if (!Ct) {
                Ct = [];
                for (f in i) i.hasOwnProperty(f) && (Ct.push(f), i[f].related && (Ct = Ct.concat(i[f].related)));
                Ct = new RegExp("\\.(" + Ct.join("|") + ")(\\?.*)?$", "i")
            }
            return a = n ? n.toLowerCase().match(Ct) : null, !a || !a.length ? r ? (u = r.indexOf(";"), a = (u !== -1 ? r.substr(0, u) : r).substr(6)) : o = !1 : a = a[1], a && s.html5[a] !== t ? o = s.html5[a] && !on(a) : (r = "audio/" + a, o = s.html5.canPlayType({
                type: r
            }), s.html5[a] = o, o = o && s.html5[r] && !on(r)), o
        }, At = function () {
            function a(t) {
                var n, r, i, o = !1,
                    u = !1;
                if (!e || typeof e.canPlayType != "function") return o;
                if (t instanceof Array) {
                    for (r = 0, i = t.length; r < i; r++) if (s.html5[t[r]] || e.canPlayType(t[r]).match(s.html5Test)) u = !0, s.html5[t[r]] = !0, s.flash[t[r]] = !! t[r].match(Yt);
                    o = u
                } else n = e && typeof e.canPlayType == "function" ? e.canPlayType(t) : !1, o = !! n && !! n.match(s.html5Test);
                return o
            }
            if (!s.useHTML5Audio || !s.hasHTML5) return !1;
            var e = Audio !== t ? Xt && opera.version() < 10 ? new Audio(null) : new Audio : null,
                n, r, i = {}, o, u;
            o = s.audioFormats;
            for (n in o) if (o.hasOwnProperty(n)) {
                    r = "audio/" + n, i[n] = a(o[n].type), i[r] = i[n], n.match(Yt) ? (s.flash[n] = !0, s.flash[r] = !0) : (s.flash[n] = !1, s.flash[r] = !1);
                    if (o[n] && o[n].related) for (u = o[n].related.length - 1; u >= 0; u--) i["audio/" + o[n].related[u]] = i[n], s.html5[o[n].related[u]] = i[n], s.flash[o[n].related[u]] = i[n]
                }
            return i.canPlayType = e ? a : null, s.html5 = O(s.html5, i), !0
        }, q = {}, it = function () {}, ft = function (e) {
            return y === 8 && e.loops > 1 && e.stream && (e.stream = !1), e
        }, lt = function (e, t) {
            return e && !e.usePolicyFile && (e.onid3 || e.usePeakData || e.useWaveformData || e.useEQData) && (e.usePolicyFile = !0), e
        }, ct = function (e) {}, v = function () {
            return !1
        }, Z = function (e) {
            var t;
            for (t in e) e.hasOwnProperty(t) && typeof e[t] == "function" && (e[t] = v);
            t = null
        }, et = function (e) {
            e === t && (e = !1), (N || e) && s.disable(e)
        }, tt = function (e) {
            var t = null,
                n;
            if (e) if (e.match(/\.swf(\?.*)?$/i)) {
                    t = e.substr(e.toLowerCase().lastIndexOf(".swf?") + 4);
                    if (t) return e
                } else e.lastIndexOf("/") !== e.length - 1 && (e += "/");
            return n = (e && e.lastIndexOf("/") !== -1 ? e.substr(0, e.lastIndexOf("/") + 1) : "./") + s.movieURL, s.noSWFCache && (n += "?ts=" + (new Date).getTime()), n
        }, F = function () {
            y = parseInt(s.flashVersion, 10), y !== 8 && y !== 9 && (s.flashVersion = y = Y);
            var e = s.debugMode || s.debugFlash ? "_debug.swf" : ".swf";
            s.useHTML5Audio && !s.html5Only && s.audioFormats.mp4.required && y < 9 && (s.flashVersion = y = 9), s.version = s.versionNumber + (s.html5Only ? " (HTML5-only mode)" : y === 9 ? " (AS3/Flash 9)" : " (AS2/Flash 8)"), y > 8 ? (s.defaultOptions = O(s.defaultOptions, s.flash9Options), s.features.buffering = !0, s.defaultOptions = O(s.defaultOptions, s.movieStarOptions), s.filePatterns.flash9 = new RegExp("\\.(mp3|" + rn.join("|") + ")(\\?.*)?$", "i"), s.features.movieStar = !0) : s.features.movieStar = !1, s.filePattern = s.filePatterns[y !== 8 ? "flash9" : "flash8"], s.movieURL = (y === 8 ? "soundmanager2.swf" : "soundmanager2_flash9.swf").replace(".swf", e), s.features.peakData = s.features.waveformData = s.features.eqData = y > 8
        }, K = function (e, t) {
            if (!u) return !1;
            u._setPolling(e, t)
        }, Q = function () {
            s.debugURLParam.test(p) && (s.debugMode = !0)
        }, ht = this.getSoundById, ot = function () {
            var e = [];
            return s.debugMode && e.push(ut.sm2Debug), s.debugFlash && e.push(ut.flashDebug), s.useHighPerformance && e.push(ut.highPerf), e.join(" ")
        }, st = function () {
            var e = it("fbHandler"),
                t = s.getMoviePercent(),
                n = ut,
                r = {
                    type: "FLASHBLOCK"
                };
            if (s.html5Only) return !1;
            s.ok() ? s.oMC && (s.oMC.className = [ot(), n.swfDefault, n.swfLoaded + (s.didFlashBlock ? " " + n.swfUnblocked : "")].join(" ")) : (St && (s.oMC.className = ot() + " " + n.swfDefault + " " + (t === null ? n.swfTimedout : n.swfError)), s.didFlashBlock = !0, P({
                type: "ontimeout",
                ignoreInit: !0,
                error: r
            }), J(r))
        }, D = function (e, n, r) {
            b[e] === t && (b[e] = []), b[e].push({
                method: n,
                scope: r || null,
                fired: !1
            })
        }, P = function (e) {
            e || (e = {
                type: s.ok() ? "onready" : "ontimeout"
            });
            if (!T && e && !e.ignoreInit) return !1;
            if (e.type === "ontimeout" && (s.ok() || N && !e.ignoreInit)) return !1;
            var t = {
                success: e && e.ignoreInit ? s.ok() : !N
            }, n = e && e.type ? b[e.type] || [] : [],
                r = [],
                i, o, u = [t],
                a = St && !s.ok();
            e.error && (u[0].error = e.error);
            for (i = 0, o = n.length; i < o; i++) n[i].fired !== !0 && r.push(n[i]);
            if (r.length) for (i = 0, o = r.length; i < o; i++) r[i].scope ? r[i].method.apply(r[i].scope, u) : r[i].method.apply(this, u), a || (r[i].fired = !0);
            return !0
        }, H = function () {
            e.setTimeout(function () {
                s.useFlashBlock && st(), P(), typeof s.onload == "function" && s.onload.apply(e), s.waitForWindowLoad && Ot.add(e, "load", H)
            }, 1)
        }, Ht = function () {
            if (Pt !== t) return Pt;
            var n = !1,
                r = navigator,
                i = r.plugins,
                s, o, u, a = e.ActiveXObject;
            if (i && i.length) o = "application/x-shockwave-flash", u = r.mimeTypes, u && u[o] && u[o].enabledPlugin && u[o].enabledPlugin.description && (n = !0);
            else if (a !== t && !h.match(/MSAppHost/i)) {
                try {
                    s = new a("ShockwaveFlash.ShockwaveFlash")
                } catch (f) {}
                n = !! s, s = null
            }
            return Pt = n, n
        }, xt = function () {
            var e, t, n = !0,
                r = s.audioFormats,
                i = qt && !! h.match(/os (1|2|3_0|3_1)/i);
            i ? (s.hasHTML5 = !1, s.html5Only = !0, s.oMC && (s.oMC.style.display = "none"), n = !1) : s.useHTML5Audio && (!s.html5 || !s.html5.canPlayType) && (s.hasHTML5 = !1);
            if (s.useHTML5Audio && s.hasHTML5) for (t in r) r.hasOwnProperty(t) && (r[t].required && !s.html5.canPlayType(r[t].type) || s.preferFlash && (s.flash[t] || s.flash[r[t].type])) && (e = !0);
            return s.ignoreFlash && (e = !1), s.html5Only = s.hasHTML5 && s.useHTML5Audio && !e, !s.html5Only
        }, wt = function (e) {
            var t, n, r = 0,
                i;
            if (e instanceof Array) {
                for (t = 0, n = e.length; t < n; t++) if (e[t] instanceof Object) {
                        if (s.canPlayMIME(e[t].type)) {
                            r = t;
                            break
                        }
                    } else if (s.canPlayURL(e[t])) {
                    r = t;
                    break
                }
                e[r].url && (e[r] = e[r].url), i = e[r]
            } else i = e;
            return i
        }, vt = function (t) {
            t._hasTimer || (t._hasTimer = !0, !Vt && s.html5PollingInterval && (bt === null && yt === 0 && (bt = e.setInterval(gt, s.html5PollingInterval)), yt++))
        }, mt = function (e) {
            e._hasTimer && (e._hasTimer = !1, !Vt && s.html5PollingInterval && yt--)
        }, gt = function () {
            var t;
            if (bt !== null && !yt) return e.clearInterval(bt), bt = null, !1;
            for (t = s.soundIDs.length - 1; t >= 0; t--) s.sounds[s.soundIDs[t]].isHTML5 && s.sounds[s.soundIDs[t]]._hasTimer && s.sounds[s.soundIDs[t]]._onTimer()
        }, J = function (n) {
            n = n !== t ? n : {}, typeof s.onerror == "function" && s.onerror.apply(e, [{
                    type: n.type !== t ? n.type : null
                }
            ]), n.fatal !== t && n.fatal && s.disable()
        }, Bt = function () {
            if (!$t || !Ht()) return !1;
            var e = s.audioFormats,
                t, n;
            for (n in e) if (e.hasOwnProperty(n)) if (n === "mp3" || n === "mp4") {
                        s.html5[n] = !1;
                        if (e[n] && e[n].related) for (t = e[n].related.length - 1; t >= 0; t--) s.html5[e[n].related[t]] = !1
                    }
        }, this._setSandboxType = function (e) {}, this._externalInterfaceOK = function (e, t) {
            if (s.swfLoaded) return !1;
            var n;
            s.swfLoaded = !0, Qt = !1, $t && Bt(), setTimeout(g, Ut ? 100 : 1)
        }, $ = function (e, n) {
            function r() {}
            function C(e, t) {
                return '<param name="' + e + '" value="' + t + '" />'
            }
            if (S && x) return !1;
            if (s.html5Only) return F(), r(), s.oMC = c(s.movieID), g(), S = !0, x = !0, !1;
            var i = n || s.url,
                o = s.altURL || i,
                u = "JS/Flash audio component (SoundManager 2)",
                a = V(),
                f = ot(),
                l = null,
                p = d.getElementsByTagName("html")[0],
                v, m, y, b, w, E, T, N;
            l = p && p.dir && p.dir.match(/rtl/i), e = e === t ? s.id : e, F(), s.url = tt(en ? i : o), n = s.url, s.wmode = !s.wmode && s.useHighPerformance ? "transparent" : s.wmode, s.wmode !== null && (h.match(/msie 8/i) || !Ut && !s.useHighPerformance) && navigator.platform.match(/win32|win64/i) && (Et.push(q.spcWmode), s.wmode = null), v = {
                name: e,
                id: e,
                src: n,
                quality: "high",
                allowScriptAccess: s.allowScriptAccess,
                bgcolor: s.bgColor,
                pluginspage: tn + "www.macromedia.com/go/getflashplayer",
                title: u,
                type: "application/x-shockwave-flash",
                wmode: s.wmode,
                hasPriority: "true"
            }, s.debugFlash && (v.FlashVars = "debug=1"), s.wmode || delete v.wmode;
            if (Ut) m = d.createElement("div"), b = ['<object id="' + e + '" data="' + n + '" type="' + v.type + '" title="' + v.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + tn + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">', C("movie", n), C("AllowScriptAccess", s.allowScriptAccess), C("quality", v.quality), s.wmode ? C("wmode", s.wmode) : "", C("bgcolor", s.bgColor), C("hasPriority", "true"), s.debugFlash ? C("FlashVars", v.FlashVars) : "", "</object>"].join("");
            else {
                m = d.createElement("embed");
                for (y in v) v.hasOwnProperty(y) && m.setAttribute(y, v[y])
            }
            Q(), f = ot(), a = V();
            if (a) {
                s.oMC = c(s.movieID) || d.createElement("div");
                if (!s.oMC.id) {
                    s.oMC.id = s.movieID, s.oMC.className = ut.swfDefault + " " + f, E = null, w = null, s.useFlashBlock || (s.useHighPerformance ? E = {
                        position: "fixed",
                        width: "8px",
                        height: "8px",
                        bottom: "0px",
                        left: "0px",
                        overflow: "hidden"
                    } : (E = {
                        position: "absolute",
                        width: "6px",
                        height: "6px",
                        top: "-9999px",
                        left: "-9999px"
                    }, l && (E.left = Math.abs(parseInt(E.left, 10)) + "px"))), zt && (s.oMC.style.zIndex = 1e4);
                    if (!s.debugFlash) for (T in E) E.hasOwnProperty(T) && (s.oMC.style[T] = E[T]);
                    try {
                        Ut || s.oMC.appendChild(m), a.appendChild(s.oMC), Ut && (w = s.oMC.appendChild(d.createElement("div")), w.className = ut.swfBox, w.innerHTML = b), x = !0
                    } catch (k) {
                        throw new Error(it("domError") + " \n" + k.toString())
                    }
                } else N = s.oMC.className, s.oMC.className = (N ? N + " " : ut.swfDefault) + (f ? " " + f : ""), s.oMC.appendChild(m), Ut && (w = s.oMC.appendChild(d.createElement("div")), w.className = ut.swfBox, w.innerHTML = b), x = !0
            }
            return S = !0, r(), !0
        }, R = function () {
            return s.html5Only ? ($(), !1) : u ? !1 : s.url ? (u = s.getMovie(s.id), u || (nt ? (Ut ? s.oMC.innerHTML = rt : s.oMC.appendChild(nt), nt = null, S = !0) : $(s.id, s.url), u = s.getMovie(s.id)), typeof s.oninitmovie == "function" && setTimeout(s.oninitmovie, 1), !0) : !1
        }, B = function () {
            setTimeout(j, 1e3)
        }, j = function () {
            var t, n = !1;
            if (!s.url) return !1;
            if (pt) return !1;
            pt = !0, Ot.remove(e, "load", B);
            if (Qt && !Kt) return !1;
            T || (t = s.getMoviePercent(), t > 0 && t < 100 && (n = !0)), setTimeout(function () {
                t = s.getMoviePercent();
                if (n) return pt = !1, e.setTimeout(B, 1), !1;
                !T && Gt && (t === null ? s.useFlashBlock || s.flashLoadTimeout === 0 ? s.useFlashBlock && st() : P({
                    type: "ontimeout",
                    ignoreInit: !0
                }) : s.flashLoadTimeout !== 0 && et(!0))
            }, s.flashLoadTimeout)
        }, I = function () {
            function t() {
                Ot.remove(e, "focus", I)
            }
            return Kt || !Qt ? (t(), !0) : (Gt = !0, Kt = !0, pt = !1, B(), t(), !0)
        }, It = function () {}, Ft = function () {}, A = function (t) {
            if (T) return !1;
            if (s.html5Only) return T = !0, H(), !0;
            var n = s.useFlashBlock && s.flashLoadTimeout && !s.getMoviePercent(),
                r = !0,
                i;
            n || (T = !0, N && (i = {
                type: !Pt && St ? "NO_FLASH" : "INIT_TIMEOUT"
            }));
            if (N || t) s.useFlashBlock && s.oMC && (s.oMC.className = ot() + " " + (s.getMoviePercent() === null ? ut.swfTimedout : ut.swfError)), P({
                    type: "ontimeout",
                    error: i,
                    ignoreInit: !0
                }), J(i), r = !1;
            return N || (s.waitForWindowLoad && !C ? Ot.add(e, "load", H) : H()), r
        }, m = function () {
            var e, n = s.setupOptions;
            for (e in n) n.hasOwnProperty(e) && (s[e] === t ? s[e] = n[e] : s[e] !== n[e] && (s.setupOptions[e] = s[e]))
        }, g = function () {
            function t() {
                Ot.remove(e, "load", s.beginDelayedInit)
            }
            if (T) return !1;
            if (s.html5Only) return T || (t(), s.enabled = !0, A()), !0;
            R();
            try {
                u._externalInterfaceTest(!1), K(!0, s.flashPollingInterval || (s.useHighPerformance ? 10 : 50)), s.debugMode || u._disableDebug(), s.enabled = !0, s.html5Only || Ot.add(e, "unload", v)
            } catch (n) {
                return J({
                    type: "JS_TO_FLASH_EXCEPTION",
                    fatal: !0
                }), et(!0), A(), !1
            }
            return A(), t(), !0
        }, z = function () {
            return X ? !1 : (X = !0, m(), Q(), !Pt && s.hasHTML5 && s.setup({
                useHTML5Audio: !0,
                preferFlash: !1
            }), At(), s.html5.usingFlash = xt(), St = s.html5.usingFlash, !Pt && St && (Et.push(q.needFlash), s.setup({
                flashLoadTimeout: 1
            })), d.removeEventListener && d.removeEventListener("DOMContentLoaded", z, !1), R(), !0)
        }, Lt = function () {
            return d.readyState === "complete" && (z(), d.detachEvent("onreadystatechange", Lt)), !0
        }, W = function () {
            C = !0, Ot.remove(e, "load", W)
        }, U = function () {
            if (Vt) {
                s.setupOptions.useHTML5Audio = !0, s.setupOptions.preferFlash = !1;
                if (qt || Rt && !h.match(/android\s2\.3/i)) qt && (s.ignoreFlash = !0), _t = !0
            }
        }, U(), Ht(), Ot.add(e, "focus", I), Ot.add(e, "load", B), Ot.add(e, "load", W), d.addEventListener ? d.addEventListener("DOMContentLoaded", z, !1) : d.attachEvent ? d.attachEvent("onreadystatechange", Lt) : J({
            type: "NO_DOM2_EVENTS",
            fatal: !0
        })
    }
    var n = null;
    if (e.SM2_DEFER === undefined || !SM2_DEFER) n = new r;
    e.SoundManager = r, e.soundManager = n
}(window),
function () {
    var e = {}.hasOwnProperty,
        t = function (t, n) {
            function i() {
                this.constructor = t
            }
            for (var r in n) e.call(n, r) && (t[r] = n[r]);
            return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
        };
    Streamphish.Views.Player = function (e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.el = "#player", n.prototype.template = Streamphish.Templates.player, n.prototype.scrubbing = !1, n.prototype.events = {
            "click .btn.prev": "playPrev",
            "click .btn.next": "playNext",
            "click .btn.playpause": "togglePause",
            "mousedown .scrubber": "grabScrubberHandle",
            "mousedown .scrubber .handle": "grabScrubberHandle",
            "touchdown .scrubber .handle": "grabScrubberHandle"
        }, n.prototype.initialize = function (e) {
            var t = this;
            return soundManager.setup({
                url: "/assets/",
                useHTML5Audio: !0,
                preferFlash: !1,
                flashVersion: 9,
                debugMode: !1
            }), this.model.on("change:currentTrack", this.trackChange, this), $(document).on("keypress", function (e) {
                return t.handleKeypress(e)
            })
        }, n.prototype.playPrev = function () {
            return this.model.playPrev()
        }, n.prototype.playNext = function () {
            return this.model.playNext()
        }, n.prototype.togglePause = function () {
            var e;
            return e = this.$el.find(".btn.playpause"), this.model.togglePause(), this.toggleTitleAnimation(), this.$el.find(".btn.playpause span").toggleClass("play").toggleClass("pause")
        }, n.prototype.trackChange = function (e, t) {
            return this.render(), e.stop(), !this._animating && !App.config.isMobile && this.toggleTitleAnimation(), t.play()
        }, n.prototype.trackLoading = function (e) {
            var t;
            return t = "" + Math.round(e.sound.duration / e.get("duration") * 100) + "%", this.$el.find(".loadProgress").width(t)
        }, n.prototype._updateTime = function (e) {
            if (!this.scrubbing) return this.$el.find(".time .current").text(Streamphish.Helpers.msToMMSS(e.position()))
        }, n.prototype._updateHandlePosition = function (e) {
            var t, n;
            n = this.$el.find(".scrubber").width() - 8, t = e.position() / e.get("duration") * n;
            if (!this.scrubbing) return this.$el.find(".handle").css("left", t)
        }, n.prototype.trackPlaying = function (e) {
            this._updateTime(e);
            if (!App.config.isMobile) return this._updateHandlePosition(e)
        }, n.prototype.toggleTitleAnimation = function () {
            var e, t = this;
            return this._title || (this._title = document.title), this._frames || (this._frames = ["◈", "▣", "◉", "◎"]), e = function () {
                return t._frames.unshift(t._frames.pop()), document.title = t._frames[0] + " " + t._title + " " + t._frames[0]
            }, this._animating ? (clearInterval(this._titleAnimation), document.title = this._title, this._title = this._animating = null) : (e(), this._titleAnimation = setInterval(e, 400), this._animating = !0)
        }, n.prototype.getScrubVars = function () {
            var e;
            return e = {
                $scrubber: this.$el.find(".scrubber")
            }, e.$handle = e.$scrubber.find(".handle"), e.$currentTime = this.$el.find(".time .current"), e.scrubOffset = e.$scrubber.offset().left + e.$handle.width() / 4, e.maxScrubDistance = e.$scrubber.width() - 8, e.scrubPosition = 0, e
        }, n.prototype.scrubToMousePos = function (e, t) {
            var n;
            return t.scrubPosition = Streamphish.Helpers.clamp(e.clientX - t.scrubOffset, 0, t.maxScrubDistance), n = t.scrubPosition / t.maxScrubDistance * this.model.get("currentTrack").get("duration"), t.$handle.css("left", t.scrubPosition), t.$currentTime.text(Streamphish.Helpers.msToMMSS(n))
        }, n.prototype.grabScrubberHandle = function (e) {
            var t;
            return e.originalEvent.preventDefault(), this.scrubbing = !0, t = this.getScrubVars(), this.scrubToMousePos(e, t), this._toggleHandleHandlers(t)
        }, n.prototype._toggleHandleHandlers = function (e) {
            var t, n = this;
            return t = $(document), this.scrubbing ? ($("body").addClass("noTextSelect"), t.on("mouseup touchend", function () {
                return n.model.goToPercentage(e.scrubPosition / e.maxScrubDistance), n.scrubbing = !1, n._toggleHandleHandlers()
            }), t.on("mousemove touchmove", function (t) {
                return n.scrubToMousePos(t, e)
            })) : (t.off("mouseup mousemove touchend touchmove"), $("body").removeClass("noTextSelect"))
        }, n.prototype.handleKeypress = function (e) {
            if (e.charCode === 32) {
                e.preventDefault();
                if (this.model.get("currentTrack")) return this.togglePause()
            }
        }, n.prototype.render = function () {
            return $(document.body).removeClass("hidePlayer"), n.__super__.render.apply(this, arguments), this._updateTime(this.model.get("currentTrack")), this._updateHandlePosition(this.model.get("currentTrack"))
        }, n
    }(Streamphish.Views.ApplicationView)
}.call(this),
function () {
    var e = {}.hasOwnProperty,
        t = function (t, n) {
            function i() {
                this.constructor = t
            }
            for (var r in n) e.call(n, r) && (t[r] = n[r]);
            return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
        };
    Streamphish.Views.Show = function (e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.template = Streamphish.Templates.show, n.prototype.events = {
            "click ul.songs li": "songClick"
        }, n.prototype.initialize = function (e) {
            var t;
            return n.__super__.initialize.call(this, e), e.autoloadTrack && (t = this._parsePosition(e.trackPosition), this.model.once("change:tracks", function (n) {
                return App.player.load(n.get("tracks").where({
                    slug: e.autoloadTrack
                })[0], t, e.autoPlay)
            })), App.player.on("change:currentTrack", this.updateUrl, this)
        }, n.prototype.songClick = function (e) {
            var t, n;
            return e.preventDefault(), n = $(e.target).closest("li").data("cid"), t = this.model.get("tracks").get(n), this.updateUrl(t), App.player.play(t)
        }, n.prototype.updateUrl = function (e) {
            var t, n;
            e instanceof Streamphish.Models.Player ? t = e.get("currentTrack") : t = e, n = "/shows/" + this.model.get("show_date") + "/" + t.get("slug");
            if ("/" + Backbone.history.fragment === n) {
                t.unset("initialPosition");
                return
            }
            return App.router.navigate(n, {
                replace: !0
            })
        }, n.prototype._parsePosition = function (e) {
            var t, n;
            return e == null || e === "" ? 0 : (t = e.match(/((\d+)m(?!s))?((\d+)(s|ms))?/), n = 0, t[5] && (t[5] === "s" ? n += parseInt(t[4], 10) * 1e3 : t[5] === "ms" && (n += parseInt(t[4], 10))), t[2] && (n += parseInt(t[2], 10) * 6e4), n)
        }, n.prototype.remove = function () {
            return App.player.off("change:currentTrack", null, this), n.__super__.remove.apply(this, arguments)
        }, n.prototype.render = function () {
            return n.__super__.render.apply(this, arguments), this.el.scrollTop = 0
        }, n
    }(Streamphish.Views.ApplicationView)
}.call(this),
function () {
    var e = {}.hasOwnProperty,
        t = function (t, n) {
            function i() {
                this.constructor = t
            }
            for (var r in n) e.call(n, r) && (t[r] = n[r]);
            return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
        };
    Streamphish.Views.ShowsByYear = function (e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.template = Streamphish.Templates.shows_by_year, n.prototype.events = {
            "click header h1 a": "toggleYearSelect"
        }, n.prototype.toggleYearSelect = function (e) {
            return e && e.preventDefault(), this.yearSelect || (this.yearSelect = document.getElementById("yearSelect")), this.yearSelect.style.display === "block" ? this.yearSelect.style.display = "none" : this.yearSelect.style.display = "block"
        }, n.prototype.remove = function () {
            var e, t;
            return (e = this.yearSelect) != null ? (t = e.style) != null ? t.display = "none" : void 0 : void 0
        }, n
    }(Streamphish.Views.ApplicationView)
}.call(this),
function () {
    var e = {}.hasOwnProperty,
        t = function (t, n) {
            function i() {
                this.constructor = t
            }
            for (var r in n) e.call(n, r) && (t[r] = n[r]);
            return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
        };
    Streamphish.Views.SiteIndex = function (e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.template = Streamphish.Templates.site_index, n.prototype.initialize = function (e) {}, n.prototype.render = function () {
            return n.__super__.render.apply(this, arguments)
        }, n
    }(Streamphish.Views.ApplicationView)
}.call(this),
function () {
    var e = {}.hasOwnProperty,
        t = function (t, n) {
            function i() {
                this.constructor = t
            }
            for (var r in n) e.call(n, r) && (t[r] = n[r]);
            return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
        };
    Streamphish.Views.Song = function (e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.template = Streamphish.Templates.song, n.prototype.events = {
            "click ul.songs a": "bypassLink",
            "click ul.songs li": "trackClick"
        }, n.prototype.trackClick = function (e) {
            var t, n, r;
            return t = $(e.currentTarget), r = t.data("track-idx"), n = t.data("track-id"), Streamphish.ShowCache.get(this.model.get("tracks")[r].show.show_date, {
                fetchCallback: function (e) {
                    return App.player.play(e.get("tracks").get(n))
                }
            })
        }, n
    }(Streamphish.Views.ApplicationView)
}.call(this),
function () {
    var e = {}.hasOwnProperty,
        t = function (t, n) {
            function i() {
                this.constructor = t
            }
            for (var r in n) e.call(n, r) && (t[r] = n[r]);
            return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
        };
    Streamphish.Views.Songs = function (e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.template = Streamphish.Templates.songs, n
    }(Streamphish.Views.ApplicationView)
}.call(this),
function () {
    var e = {}.hasOwnProperty,
        t = function (t, n) {
            function i() {
                this.constructor = t
            }
            for (var r in n) e.call(n, r) && (t[r] = n[r]);
            return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
        };
    Streamphish.Routers.AppRouter = function (e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.prototype.routes = {
            "": "index",
            songs: "songs",
            "songs/:title": "song",
            "shows/:date(/:track)": "showByDate"
        }, n.prototype.showCache = {}, n.prototype.initialize = function () {
            return n.__super__.initialize.apply(this, arguments), this.bind("all", this._trackPageView), this._dim = document.getElementById("dim")
        }, n.prototype.index = function () {
            var e, t;
            return e = new Streamphish.Models.IndexData, t = new Streamphish.Views.SiteIndex({
                model: e
            }), this._swap(t, e)
        }, n.prototype.songs = function () {
            var e, t;
            return e = new Streamphish.Collections.Songs, t = new Streamphish.Views.Songs({
                collection: e
            }), this._swap(t, e)
        }, n.prototype.song = function (e) {
            var t, n;
            return t = new Streamphish.Models.Song({
                id: e
            }), n = new Streamphish.Views.Song({
                model: t
            }), this._swap(n, t)
        }, n.prototype
            .showsByYear = function (e) {
            var t, n;
            return t = new Streamphish.Collections.Shows([], {
                year: e
            }), n = new Streamphish.Views.ShowsByYear({
                collection: t
            }), this._swap(n, t)
        }, n.prototype.showByDate = function (e, t, n) {
            var r, i;
            return e.match(/^\d{4}$|^83-87$/) ? this.showsByYear(e) : (r = Streamphish.ShowCache.get(e, {
                autoFetch: !1
            }), i = new Streamphish.Views.Show({
                model: r,
                autoloadTrack: t,
                autoPlay: (n != null ? n.autoplay : void 0) !== "false",
                trackPosition: n != null ? n.t : void 0
            }), this._swap(i, r))
        }, n.prototype._swapCallback = function (e) {
            return this.currentView && this.currentView.remove(), this.currentView = e, this.currentView.render(), $("#main").html(this.currentView.$el), this._dim.style.display = "none"
        }, n.prototype._swap = function (e, t) {
            var n = this;
            return this.currentView && (this._dim.style.display = "block"), t.fetched ? this._swapCallback(e) : t.fetch({
                success: function (t, r, i) {
                    return n._swapCallback(e)
                }
            })
        }, n.prototype._trackPageView = function () {
            var e;
            return e = Backbone.history.getFragment(), _gaq.push(["_trackPageview", "/" + e])
        }, n
    }(Backbone.Router)
}.call(this),
function () {
    Streamphish.Util = function () {
        function e() {}
        return e.msToMMSS = function (e) {
            var t, n, r;
            return t = Math.floor(e / 6e4), n = e - t * 1e3 * 60, r = Math.floor(n / 1e3), "" + t + ":" + (r < 10 ? "0" : "") + r
        }, e.clamp = function (e, t, n) {
            return Math.max(t, Math.min(n, e))
        }, e
    }()
}.call(this),
function () {
    var e = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    };
    Streamphish.FastTouchLinks = function () {
        function t(t) {
            this.cbOnClick = e(this.cbOnClick, this), this.cbPop = e(this.cbPop, this), this.main = t, this.main.addEventListener("touchstart", this, !1), this.main.addEventListener("click", this, !1), this.main.addEventListener("click", this.cbOnClick, !0), this.cbCoords = []
        }
        return t.prototype.handleEvent = function (e) {
            switch (e.type) {
            case "touchstart":
                return this.onTouchStart(e);
            case "touchmove":
                return this.onTouchMove(e);
            case "touchend":
                return this.onClick(e);
            case "click":
                return this.onClick(e)
            }
        }, t.prototype.onTouchStart = function (e) {
            return e.stopPropagation(), this.main.addEventListener("touchend", this, !1), document.body.addEventListener("touchmove", this, !1), this.startX = e.touches[0].clientX, this.startY = e.touches[0].clientY
        }, t.prototype.onTouchMove = function (e) {
            if (Math.abs(e.touches[0].clientX - this.startX) > 10 || Math.abs(e.touches[0].clientY - this.startY) > 10) return this.reset()
        }, t.prototype.onClick = function (e) {
            var t;
            e.stopPropagation(), e.type === "click" && e.preventDefault(), this.reset(), t = this.getANode(e.target);
            if (t) {
                switch (t.getAttribute("data-control")) {
                case "prev":
                    App.player_view.playPrev();
                    break;
                case "togglePause":
                    App.player_view.togglePause();
                    break;
                case "next":
                    App.player_view.playNext();
                    break;
                case "song":
                    App.router.currentView.songClick(e);
                    break;
                case "toggleYearList":
                    App.router.currentView.toggleYearSelect();
                    break;
                default:
                    App.router.navigate(t.getAttribute("href"), !0)
                }
                if (e.type === "touchend") return this.preventGhostClick(this.startX, this.startY)
            }
        }, t.prototype.reset = function () {
            return this.main.removeEventListener("touchend", this, !1), document.body.removeEventListener("touchmove", this, !1)
        }, t.prototype.preventGhostClick = function (e, t) {
            var n = this;
            return this.cbCoords.push(e, t), window.setTimeout(function () {
                return n.cbPop
            }, 2500)
        }, t.prototype.cbPop = function () {
            return this.cbCoords.splice(0, 2)
        }, t.prototype.cbOnClick = function (e) {
            var t, n, r, i, s, o, u, a, f;
            u = this.cbCoords, f = [];
            for (n = s = 0, o = u.length; s < o; n = ++s) {
                t = u[n];
                if (n % 2 !== 0) continue;
                a = [this.cbCoords[n], this.cbCoords[n + 1]], r = a[0], i = a[1], Math.abs(e.clientX - r) < 25 && Math.abs(e.clientY - i) < 25 ? (e.stopPropagation(), f.push(e.preventDefault())) : f.push(void 0)
            }
            return f
        }, t.prototype.getANode = function (e) {
            return e === null || e.tagName === "A" ? e : this.getANode(e.parentNode)
        }, t
    }()
}.call(this),
function () {
    window.App = {}, $(function () {
        return App.router = new Streamphish.Routers.AppRouter, App.player = new Streamphish.Models.Player, App.player_view = new Streamphish.Views.Player({
            model: App.player
        }), App.config = {
            isMobile: document.width <= 320
        }, App.config.isMobile ? App.FTL = new Streamphish.FastTouchLinks(document.body) : $(document).on("click", "a:not([data-bypass])", function (e) {
            var t, n;
            t = {
                prop: $(this).prop("href"),
                attr: $(this).attr("href")
            }, n = "" + location.protocol + "//" + location.host;
            if (t.prop && t.prop.slice(0, n.length) === n) return e.preventDefault(), App.router.navigate(t.attr, !0)
        }), Backbone.history.start({
            pushState: !0
        })
    })
}.call(this);