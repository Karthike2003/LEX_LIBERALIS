var app = function () {
    "use strict";

    function e() {
    }

    function t(e) {
        return e()
    }



    function n() {
        return Object.create(null)
    }

    function i(e) {
        e.forEach(t)
    }

    function s(e) {
        return "function" == typeof e
    }

    function o(e, t) {
        return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
    }

    let r, a;

    function l(e, t) {
        return r || (r = document.createElement("a")), r.href = t, e === r.href
    }

    function h(t, ...n) {
        if (null == t) return e;
        const i = t.subscribe(...n);
        return i.unsubscribe ? () => i.unsubscribe() : i
    }

    function c(e) {
        let t;
        return h(e, (e => t = e))(), t
    }

    function u(t) {
        return t && s(t.destroy) ? t.destroy : e
    }

    function d(e, t) {
        e.appendChild(t)
    }

    function g(e, t, n) {
        e.insertBefore(t, n || null)
    }

    function f(e) {
        e.parentNode && e.parentNode.removeChild(e)
    }

    function m(e, t) {
        for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
    }

    function p(e) {
        return document.createElement(e)
    }

    function v(e) {
        return document.createTextNode(e)
    }

    function w() {
        return v(" ")
    }

    function $() {
        return v("")
    }

    function b(e, t, n, i) {
        return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i)
    }

    function y(e, t, n) {
        null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
    }

    function x(e) {
        return "" === e ? null : +e
    }

    function C(e, t) {
        t = "" + t, e.data !== t && (e.data = t)
    }

    function S(e, t) {
        e.value = null == t ? "" : t
    }

    function k(e, t, n, i) {
        null === n ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? "important" : "")
    }

    function A(e, t, n) {
        e.classList[n ? "add" : "remove"](t)
    }

    function L(e) {
        a = e
    }

    function R() {
        if (!a) throw new Error("Function called outside component initialization");
        return a
    }

    function M(e) {
        R().$$.on_mount.push(e)
    }

    function E() {
        const e = R();
        return (t, n, {cancelable: i = !1} = {}) => {
            const s = e.$$.callbacks[t];
            if (s) {
                const o = function (e, t, {bubbles: n = !1, cancelable: i = !1} = {}) {
                    const s = document.createEvent("CustomEvent");
                    return s.initCustomEvent(e, n, i, t), s
                }(t, n, {cancelable: i});
                return s.slice().forEach((t => {
                    t.call(e, o)
                })), !o.defaultPrevented
            }
            return !0
        }
    }

    function T(e, t) {
        const n = e.$$.callbacks[t.type];
        n && n.slice().forEach((e => e.call(this, t)))
    }

    const _ = [], F = [];
    let I = [];
    const O = [], W = Promise.resolve();
    let B = !1;

    function H() {
        B || (B = !0, W.then(U))
    }

    function D() {
        return H(), W
    }

    function P(e) {
        I.push(e)
    }

    function N(e) {
        O.push(e)
    }

    const z = new Set;
    let V = 0;

    function U() {
        if (0 !== V) return;
        const e = a;
        do {
            try {
                for (; V < _.length;) {
                    const e = _[V];
                    V++, L(e), G(e.$$)
                }
            } catch (e) {
                throw _.length = 0, V = 0, e
            }
            for (L(null), _.length = 0, V = 0; F.length;) F.pop()();
            for (let e = 0; e < I.length; e += 1) {
                const t = I[e];
                z.has(t) || (z.add(t), t())
            }
            I.length = 0
        } while (_.length);
        for (; O.length;) O.pop()();
        B = !1, z.clear(), L(e)
    }

    function G(e) {
        if (null !== e.fragment) {
            e.update(), i(e.before_update);
            const t = e.dirty;
            e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(P)
        }
    }

    const K = new Set;
    let j;

    function Y() {
        j = {r: 0, c: [], p: j}
    }

    function X() {
        j.r || i(j.c), j = j.p
    }

    function q(e, t) {
        e && e.i && (K.delete(e), e.i(t))
    }

    function Q(e, t, n, i) {
        if (e && e.o) {
            if (K.has(e)) return;
            K.add(e), j.c.push((() => {
                K.delete(e), i && (n && e.d(1), i())
            })), e.o(t)
        } else i && i()
    }

    function J(e, t, n) {
        const i = e.$$.props[t];
        void 0 !== i && (e.$$.bound[i] = n, n(e.$$.ctx[i]))
    }

    function Z(e) {
        e && e.c()
    }

    function ee(e, n, o, r) {
        const {fragment: a, after_update: l} = e.$$;
        a && a.m(n, o), r || P((() => {
            const n = e.$$.on_mount.map(t).filter(s);
            e.$$.on_destroy ? e.$$.on_destroy.push(...n) : i(n), e.$$.on_mount = []
        })), l.forEach(P)
    }

    function te(e, t) {
        const n = e.$$;
        null !== n.fragment && (!function (e) {
            const t = [], n = [];
            I.forEach((i => -1 === e.indexOf(i) ? t.push(i) : n.push(i))), n.forEach((e => e())), I = t
        }(n.after_update), i(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
    }

    function ne(t, s, o, r, l, h, c, u = [-1]) {
        const d = a;
        L(t);
        const g = t.$$ = {
            fragment: null,
            ctx: [],
            props: h,
            update: e,
            not_equal: l,
            bound: n(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(s.context || (d ? d.$$.context : [])),
            callbacks: n(),
            dirty: u,
            skip_bound: !1,
            root: s.target || d.$$.root
        };
        c && c(g.root);
        let m = !1;
        if (g.ctx = o ? o(t, s.props || {}, ((e, n, ...i) => {
            const s = i.length ? i[0] : n;
            return g.ctx && l(g.ctx[e], g.ctx[e] = s) && (!g.skip_bound && g.bound[e] && g.bound[e](s), m && function (e, t) {
                -1 === e.$$.dirty[0] && (_.push(e), H(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
            }(t, e)), n
        })) : [], g.update(), m = !0, i(g.before_update), g.fragment = !!r && r(g.ctx), s.target) {
            if (s.hydrate) {
                const e = function (e) {
                    return Array.from(e.childNodes)
                }(s.target);
                g.fragment && g.fragment.l(e), e.forEach(f)
            } else g.fragment && g.fragment.c();
            s.intro && q(t.$$.fragment), ee(t, s.target, s.anchor, s.customElement), U()
        }
        L(d)
    }

    class ie {
        $destroy() {
            te(this, 1), this.$destroy = e
        }

        $on(t, n) {
            if (!s(n)) return e;
            const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return i.push(n), () => {
                const e = i.indexOf(n);
                -1 !== e && i.splice(e, 1)
            }
        }

        $set(e) {
            var t;
            this.$$set && (t = e, 0 !== Object.keys(t).length) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
        }
    }

    function se(e, t) {
        return JSON.stringify([e.filename, t.index])
    }

    function oe(e) {
        return e()
    }

    const re = [], ae = [], le = [], he = [], ce = Promise.resolve();
    let ue = !1;

    function de() {
        return ue || (ue = !0, ce.then(pe)), ce
    }

    function ge(e) {
        le.push(e)
    }

    const fe = new Set;
    let me = 0;

    function pe() {
        do {
            for (; me < re.length;) {
                const e = re[me];
                me++, ve(e.$$)
            }
            for (re.length = 0, me = 0; ae.length;) ae.pop()();
            for (let e = 0; e < le.length; e += 1) {
                const t = le[e];
                fe.has(t) || (fe.add(t), t())
            }
            le.length = 0
        } while (re.length);
        for (; he.length;) he.pop()();
        ue = !1, fe.clear()
    }

    function ve(e) {
        if (null !== e.fragment) {
            e.update(), e.before_update.forEach(oe);
            const t = e.dirty;
            e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ge)
        }
    }

    const we = {root: null, rootMargin: "0px", threshold: 0, unobserveOnEnter: !1},
        $e = (e, t) => new CustomEvent(e, {detail: t});

    function be(e, t = {}) {
        const {root: n, rootMargin: i, threshold: s, unobserveOnEnter: o} = Object.assign(Object.assign({}, we), t);
        let r = {x: void 0, y: void 0}, a = {vertical: void 0, horizontal: void 0};
        if ("undefined" != typeof IntersectionObserver && e) {
            const t = new IntersectionObserver(((t, n) => {
                t.forEach((t => {
                    r.y > t.boundingClientRect.y ? a.vertical = "up" : a.vertical = "down", r.x > t.boundingClientRect.x ? a.horizontal = "left" : a.horizontal = "right", r = {
                        y: t.boundingClientRect.y,
                        x: t.boundingClientRect.x
                    };
                    const i = {inView: t.isIntersecting, entry: t, scrollDirection: a, node: e, observer: n};
                    e.dispatchEvent($e("inview_change", i)), e.dispatchEvent($e("change", i)), t.isIntersecting ? (e.dispatchEvent($e("inview_enter", i)), e.dispatchEvent($e("enter", i)), o && n.unobserve(e)) : (e.dispatchEvent($e("inview_leave", i)), e.dispatchEvent($e("leave", i)))
                }))
            }), {root: n, rootMargin: i, threshold: s});
            return de().then((() => {
                e.dispatchEvent($e("inview_init", {observer: t, node: e})), e.dispatchEvent($e("init", {
                    observer: t,
                    node: e
                }))
            })), t.observe(e), {
                destroy() {
                    t.unobserve(e)
                }
            }
        }
    }

    const ye = [];
    const xe = function (t, n = e) {
        let i;
        const s = new Set;

        function r(e) {
            if (o(t, e) && (t = e, i)) {
                const e = !ye.length;
                for (const e of s) e[1](), ye.push(e, t);
                if (e) {
                    for (let e = 0; e < ye.length; e += 2) ye[e][0](ye[e + 1]);
                    ye.length = 0
                }
            }
        }

        return {
            set: r, update: function (e) {
                r(e(t))
            }, subscribe: function (o, a = e) {
                const l = [o, a];
                return s.add(l), 1 === s.size && (i = n(r) || e), o(t), () => {
                    s.delete(l), 0 === s.size && i && (i(), i = null)
                }
            }
        }
    }({}), Ce = [];
    let Se = !1;

    async function ke(e) {
        Se = !0;
        const t = c(xe)[e];
        if (t) return t;
        const n = await fetch("/api/explain", {method: "POST", headers: {"Content-Type": "application/json"}, body: e}),
            i = await n.json();
        return xe.update((t => (t[e] = i, t))), Se = !1, i
    }

    function Ae(e, t, n) {
        const i = e.slice();
        return i[12] = t[n], i
    }

    function Le(e) {
        let t, n = e[3], i = [];
        for (let t = 0; t < n.length; t += 1) i[t] = Te(Ae(e, n, t));
        return {
            c() {
                for (let e = 0; e < i.length; e += 1) i[e].c();
                t = $()
            }, m(e, n) {
                for (let t = 0; t < i.length; t += 1) i[t] && i[t].m(e, n);
                g(e, t, n)
            }, p(e, s) {
                if (8 & s) {
                    let o;
                    for (n = e[3], o = 0; o < n.length; o += 1) {
                        const r = Ae(e, n, o);
                        i[o] ? i[o].p(r, s) : (i[o] = Te(r), i[o].c(), i[o].m(t.parentNode, t))
                    }
                    for (; o < i.length; o += 1) i[o].d(1);
                    i.length = n.length
                }
            }, d(e) {
                m(i, e), e && f(t)
            }
        }
    }

    function Re(e) {
        let t, n;
        return {
            c() {
                t = p("span"), n = v(e[0])
            }, m(e, i) {
                g(e, t, i), d(t, n)
            }, p(e, t) {
                1 & t && C(n, e[0])
            }, d(e) {
                e && f(t)
            }
        }
    }

    function Me(e) {
        let t, n, i = e[12].text + "";
        return {
            c() {
                t = p("span"), n = v(i)
            }, m(e, i) {
                g(e, t, i), d(t, n)
            }, p(e, t) {
                8 & t && i !== (i = e[12].text + "") && C(n, i)
            }, d(e) {
                e && f(t)
            }
        }
    }

    function Ee(e) {
        let t, n, i = e[12].text + "";
        return {
            c() {
                t = p("span"), n = v(i), y(t, "class", "explain-highlight svelte-xurgv")
            }, m(e, i) {
                g(e, t, i), d(t, n)
            }, p(e, t) {
                8 & t && i !== (i = e[12].text + "") && C(n, i)
            }, d(e) {
                e && f(t)
            }
        }
    }

    function Te(e) {
        let t;

        function n(e, t) {
            return "highlight" === e[12].type ? Ee : Me
        }

        let i = n(e), s = i(e);
        return {
            c() {
                s.c(), t = $()
            }, m(e, n) {
                s.m(e, n), g(e, t, n)
            }, p(e, o) {
                i === (i = n(e)) && s ? s.p(e, o) : (s.d(1), s = i(e), s && (s.c(), s.m(t.parentNode, t)))
            }, d(e) {
                s.d(e), e && f(t)
            }
        }
    }

    function _e(t) {
        let n, s, o;

        function r(e, t) {
            return null == e[3] ? Re : Le
        }

        let a = r(t), l = a(t);
        return {
            c() {
                n = p("span"), l.c()
            }, m(e, i) {
                g(e, n, i), l.m(n, null), t[10](n), s || (o = [u(be.call(null, n, t[4])), b(n, "inview_change", t[9])], s = !0)
            }, p(e, [t]) {
                a === (a = r(e)) && l ? l.p(e, t) : (l.d(1), l = a(e), l && (l.c(), l.m(n, null)))
            }, i: e, o: e, d(e) {
                e && f(n), l.d(), t[10](null), s = !1, i(o)
            }
        }
    }

    function Fe(e, t, n) {
        let i, s;
        var o, r;
        let a;
        o = xe, r = e => n(8, s = e), e.$$.on_destroy.push(h(o, r));
        let {text: l} = t, {searchResult: u} = t, d = null, g = !1, f = null;
        return e.$$set = e => {
            "text" in e && n(0, l = e.text), "searchResult" in e && n(5, u = e.searchResult)
        }, e.$$.update = () => {
            33 & e.$$.dirty && n(7, i = {
                filename: u.filename,
                offset: u.offset,
                queries: u.queries,
                preferences: u.preferences,
                text: l
            }), 384 & e.$$.dirty && n(3, d = s[JSON.stringify(i)]), 198 & e.$$.dirty && (g ? n(6, f = setTimeout((() => {
                !function (e, t) {
                    const n = JSON.stringify(t);
                    c(xe)[n] || Ce.find((([, e]) => e === n)) || Ce.push([e, n])
                }(a, i)
            }), 100)) : null !== f && (clearTimeout(f), n(6, f = null)))
        }, [l, a, g, d, {rootMargin: "50px"}, u, f, i, s, e => n(2, g = e.detail.inView), function (e) {
            F[e ? "unshift" : "push"]((() => {
                a = e, n(1, a)
            }))
        }]
    }

    setInterval((function () {
        if (0 === Ce.length || Se) return;
        const e = Ce.sort((([e], [t]) => {
            if (null == e && null == t) return 0;
            if (null == e) return 1;
            if (null == t) return -1;
            const n = e.getBoundingClientRect().bottom, i = t.getBoundingClientRect().bottom;
            return n < 0 && i >= 0 ? 1 : n >= 0 && i < 0 ? -1 : n - i
        }));
        for (; e.length > 0;) {
            const [t, n] = e.shift();
            if (!(null == t || t.getBoundingClientRect().bottom < 0)) return void ke(n)
        }
    }), 20);

    class Ie extends ie {
        constructor(e) {
            super(), ne(this, e, Fe, _e, o, {text: 0, searchResult: 5})
        }
    }

    function Oe(e) {
        let t, n, i = e[1].distance.toFixed(2) + "";
        return {
            c() {
                t = p("span"), n = v(i), y(t, "class", "text-xs highlight px-1 rounded svelte-gnx11y")
            }, m(e, i) {
                g(e, t, i), d(t, n)
            }, p(e, t) {
                2 & t && i !== (i = e[1].distance.toFixed(2) + "") && C(n, i)
            }, d(e) {
                e && f(t)
            }
        }
    }

    function We(e) {
        let t, n, i, s, o, r = e[0].basename + "", a = e[1].distance.toFixed(2) + "";
        return {
            c() {
                t = p("div"), n = v(r), i = w(), s = p("span"), o = v(a), y(s, "class", "highlight px-1 rounded text-xs svelte-gnx11y"), y(t, "class", "font-bold text-base my-2")
            }, m(e, r) {
                g(e, t, r), d(t, n), d(t, i), d(t, s), d(s, o)
            }, p(e, t) {
                1 & t && r !== (r = e[0].basename + "") && C(n, r), 2 & t && a !== (a = e[1].distance.toFixed(2) + "") && C(o, a)
            }, d(e) {
                e && f(t)
            }
        }
    }

    function Be(e) {
        let t, n;
        return t = new Ie({props: {searchResult: e[1], text: e[1].text}}), {
            c() {
                Z(t.$$.fragment)
            }, m(e, i) {
                ee(t, e, i), n = !0
            }, p(e, n) {
                const i = {};
                2 & n && (i.searchResult = e[1]), 2 & n && (i.text = e[1].text), t.$set(i)
            }, i(e) {
                n || (q(t.$$.fragment, e), n = !0)
            }, o(e) {
                Q(t.$$.fragment, e), n = !1
            }, d(e) {
                te(t, e)
            }
        }
    }

    function He(t) {
        let n, s, r, a, l, h, c, u, m, v, $ = JSON.stringify({
            filename: t[1].filename,
            offset: t[1].offset,
            queries: t[1].queries,
            preferences: t[1].preferences,
            text: t[1].text
        });

        function x(e, t) {
            return e[2] ? We : Oe
        }

        let C = x(t), S = C(t), k = Be(t);
        return {
            c() {
                n = p("li"), s = p("div"), S.c(), r = w(), a = p("button"), a.textContent = "+", l = w(), h = p("button"), h.textContent = "-", c = w(), k.c(), y(a, "class", "bg-gray-300 rounded px-2"), A(a, "bg-blue-200", t[3].weight > 0), A(a, "text-blue-600", t[3].weight > 0), A(a, "font-bold", t[3].weight > 0), y(h, "class", "bg-gray-300 rounded px-2"), A(h, "bg-orange-200", t[3].weight < 0), A(h, "text-orange-500", t[3].weight < 0), A(h, "font-bold", t[3].weight < 0), y(s, "class", "border-l-4 border-transparent pl-2 -ml-2"), A(s, "!border-blue-600", t[3].weight > 0), A(s, "!border-orange-500", t[3].weight < 0), y(n, "class", "font-mono text-sm border-b last:border-0 py-4 px-4 border-black pointer")
            }, m(e, i) {
                g(e, n, i), d(n, s), S.m(s, null), d(s, r), d(s, a), d(s, l), d(s, h), d(s, c), k.m(s, null), u = !0, m || (v = [b(a, "click", t[8]), b(h, "click", t[9]), b(n, "click", t[10])], m = !0)
            }, p(t, [n]) {
                C === (C = x(t)) && S ? S.p(t, n) : (S.d(1), S = C(t), S && (S.c(), S.m(s, r))), (!u || 8 & n) && A(a, "bg-blue-200", t[3].weight > 0), (!u || 8 & n) && A(a, "text-blue-600", t[3].weight > 0), (!u || 8 & n) && A(a, "font-bold", t[3].weight > 0), (!u || 8 & n) && A(h, "bg-orange-200", t[3].weight < 0), (!u || 8 & n) && A(h, "text-orange-500", t[3].weight < 0), (!u || 8 & n) && A(h, "font-bold", t[3].weight < 0), 2 & n && o($, $ = JSON.stringify({
                    filename: t[1].filename,
                    offset: t[1].offset,
                    queries: t[1].queries,
                    preferences: t[1].preferences,
                    text: t[1].text
                })) ? (Y(), Q(k, 1, 1, e), X(), k = Be(t), k.c(), q(k, 1), k.m(s, null)) : k.p(t, n), (!u || 8 & n) && A(s, "!border-blue-600", t[3].weight > 0), (!u || 8 & n) && A(s, "!border-orange-500", t[3].weight < 0)
            }, i(e) {
                u || (q(k), u = !0)
            }, o(e) {
                Q(k), u = !1
            }, d(e) {
                e && f(n), S.d(), k.d(e), m = !1, i(v)
            }
        }
    }

    function De(e, t, n) {
        let i, s, {file: o} = t, {searchResult: r} = t, {preferences: a} = t, {showFilename: l = !1} = t;
        const h = E();

        function c(e, t) {
            h("navigate", {file: e, searchResult: t})
        }

        function u(e, t, n, i) {
            h("setPreference", {file: t, searchResult: n, weight: i}), e.stopPropagation()
        }

        return e.$$set = e => {
            "file" in e && n(0, o = e.file), "searchResult" in e && n(1, r = e.searchResult), "preferences" in e && n(6, a = e.preferences), "showFilename" in e && n(2, l = e.showFilename)
        }, e.$$.update = () => {
            3 & e.$$.dirty && n(7, i = se(o, r)), 195 & e.$$.dirty && n(3, s = a[i] || {
                file: o,
                searchResult: r,
                weight: 0
            })
        }, [o, r, l, s, c, u, a, i, e => u(e, o, r, s.weight > 0 ? 0 : 1), e => u(e, o, r, s.weight < 0 ? 0 : -1), () => c(o, r)]
    }

    class Pe extends ie {
        constructor(e) {
            super(), ne(this, e, De, He, o, {file: 0, searchResult: 1, preferences: 6, showFilename: 2})
        }
    }

    function Ne(e, t, n) {
        const i = e.slice();
        i[32] = t[n][0], i[33] = t[n][1], i[34] = t[n][2];
        const s = i[1][i[32]];
        return i[29] = s, i
    }

    function ze(e, t, n) {
        const i = e.slice();
        return i[28] = t[n], i
    }

    function Ve(e, t, n) {
        const i = e.slice();
        i[28] = t[n];
        const s = i[1][i[28].filename];
        return i[29] = s, i
    }

    function Ue(e) {
        let t, n, i;

        function s(e, t) {
            return e[9] ? Ke : Ge
        }

        let o = s(e), r = o(e);
        return {
            c() {
                t = p("button"), r.c(), y(t, "class", "button toggle-detail-icon svelte-1w3dvgm"), y(t, "title", "Toggle search results expanded/collapsed")
            }, m(s, o) {
                g(s, t, o), r.m(t, null), n || (i = b(t, "click", e[19]), n = !0)
            }, p(e, n) {
                o !== (o = s(e)) && (r.d(1), r = o(e), r && (r.c(), r.m(t, null)))
            }, d(e) {
                e && f(t), r.d(), n = !1, i()
            }
        }
    }

    function Ge(e) {
        let t;
        return {
            c() {
                t = v("Expand all")
            }, m(e, n) {
                g(e, t, n)
            }, d(e) {
                e && f(t)
            }
        }
    }

    function Ke(e) {
        let t;
        return {
            c() {
                t = v("Collapse all")
            }, m(e, n) {
                g(e, t, n)
            }, d(e) {
                e && f(t)
            }
        }
    }

    function je(e) {
        let t;
        return {
            c() {
                t = v("Filter to only viewed file")
            }, m(e, n) {
                g(e, t, n)
            }, d(e) {
                e && f(t)
            }
        }
    }

    function Ye(e) {
        let t;
        return {
            c() {
                t = v("Show all files")
            }, m(e, n) {
                g(e, t, n)
            }, d(e) {
                e && f(t)
            }
        }
    }

    function Xe(e) {
        let t;
        return {
            c() {
                t = v("Show exercept view")
            }, m(e, n) {
                g(e, t, n)
            }, d(e) {
                e && f(t)
            }
        }
    }

    function qe(e) {
        let t;
        return {
            c() {
                t = v("Show file view")
            }, m(e, n) {
                g(e, t, n)
            }, d(e) {
                e && f(t)
            }
        }
    }

    function Qe(e) {
        let t, n, i = e[12], s = [];
        for (let t = 0; t < i.length; t += 1) s[t] = it(Ne(e, i, t));
        const o = e => Q(s[e], 1, 1, (() => {
            s[e] = null
        }));
        return {
            c() {
                for (let e = 0; e < s.length; e += 1) s[e].c();
                t = $()
            }, m(e, i) {
                for (let t = 0; t < s.length; t += 1) s[t] && s[t].m(e, i);
                g(e, t, i), n = !0
            }, p(e, n) {
                if (13958 & n[0]) {
                    let r;
                    for (i = e[12], r = 0; r < i.length; r += 1) {
                        const o = Ne(e, i, r);
                        s[r] ? (s[r].p(o, n), q(s[r], 1)) : (s[r] = it(o), s[r].c(), q(s[r], 1), s[r].m(t.parentNode, t))
                    }
                    for (Y(), r = i.length; r < s.length; r += 1) o(r);
                    X()
                }
            }, i(e) {
                if (!n) {
                    for (let e = 0; e < i.length; e += 1) q(s[e]);
                    n = !0
                }
            }, o(e) {
                s = s.filter(Boolean);
                for (let e = 0; e < s.length; e += 1) Q(s[e]);
                n = !1
            }, d(e) {
                m(s, e), e && f(t)
            }
        }
    }

    function Je(e) {
        let t, n, i = e[11], s = [];
        for (let t = 0; t < i.length; t += 1) s[t] = rt(Ve(e, i, t));
        const o = e => Q(s[e], 1, 1, (() => {
            s[e] = null
        }));
        return {
            c() {
                t = p("ul");
                for (let e = 0; e < s.length; e += 1) s[e].c();
                y(t, "class", "-mt-2")
            }, m(e, i) {
                g(e, t, i);
                for (let e = 0; e < s.length; e += 1) s[e] && s[e].m(t, null);
                n = !0
            }, p(e, n) {
                if (2182 & n[0]) {
                    let r;
                    for (i = e[11], r = 0; r < i.length; r += 1) {
                        const o = Ve(e, i, r);
                        s[r] ? (s[r].p(o, n), q(s[r], 1)) : (s[r] = rt(o), s[r].c(), q(s[r], 1), s[r].m(t, null))
                    }
                    for (Y(), r = i.length; r < s.length; r += 1) o(r);
                    X()
                }
            }, i(e) {
                if (!n) {
                    for (let e = 0; e < i.length; e += 1) q(s[e]);
                    n = !0
                }
            }, o(e) {
                s = s.filter(Boolean);
                for (let e = 0; e < s.length; e += 1) Q(s[e]);
                n = !1
            }, d(e) {
                e && f(t), m(s, e)
            }
        }
    }

    function Ze(t) {
        let n, i, s = [t[32], t[33], t[34]], r = nt(t);
        return {
            c() {
                r.c(), n = $()
            }, m(e, t) {
                r.m(e, t), g(e, n, t), i = !0
            }, p(t, i) {
                4096 & i[0] && o(s, s = [t[32], t[33], t[34]]) ? (Y(), Q(r, 1, 1, e), X(), r = nt(t), r.c(), q(r, 1), r.m(n.parentNode, n)) : r.p(t, i)
            }, i(e) {
                i || (q(r), i = !0)
            }, o(e) {
                Q(r), i = !1
            }, d(e) {
                e && f(n), r.d(e)
            }
        }
    }

    function et(e) {
        let t, n;
        return t = new Pe({
            props: {
                file: e[29],
                searchResult: e[28],
                preferences: e[2],
                showFilename: !1
            }
        }), t.$on("navigate", e[24]), t.$on("setPreference", e[25]), {
            c() {
                Z(t.$$.fragment)
            }, m(e, i) {
                ee(t, e, i), n = !0
            }, p(e, n) {
                const i = {};
                4098 & n[0] && (i.file = e[29]), 4096 & n[0] && (i.searchResult = e[28]), 4 & n[0] && (i.preferences = e[2]), t.$set(i)
            }, i(e) {
                n || (q(t.$$.fragment, e), n = !0)
            }, o(e) {
                Q(t.$$.fragment, e), n = !1
            }, d(e) {
                te(t, e)
            }
        }
    }

    function tt(t) {
        let n, i, s = t[28], r = et(t);
        return {
            c() {
                r.c(), n = $()
            }, m(e, t) {
                r.m(e, t), g(e, n, t), i = !0
            }, p(t, i) {
                4096 & i[0] && o(s, s = t[28]) ? (Y(), Q(r, 1, 1, e), X(), r = et(t), r.c(), q(r, 1), r.m(n.parentNode, n)) : r.p(t, i)
            }, i(e) {
                i || (q(r), i = !0)
            }, o(e) {
                Q(r), i = !1
            }, d(e) {
                e && f(n), r.d(e)
            }
        }
    }

    function nt(e) {
        let t, n, i, s, o, r, a, l, h, c, u, $, x, S = e[29].basename + "", k = e[34].toFixed(2) + "", A = e[33],
            L = [];
        for (let t = 0; t < A.length; t += 1) L[t] = tt(ze(e, A, t));
        const R = e => Q(L[e], 1, 1, (() => {
            L[e] = null
        }));

        function M(...t) {
            return e[26](e[32], ...t)
        }

        return {
            c() {
                t = p("details"), n = p("summary"), i = v(S), s = w(), o = p("span"), r = v(k), a = w(), l = p("ul");
                for (let e = 0; e < L.length; e += 1) L[e].c();
                h = w(), y(o, "class", "text-xs highlight px-1 rounded svelte-1w3dvgm"), y(n, "class", "font-mono font-bold cursor-pointer select-none px-2 pt-2 top-0 sticky bg-slate-100"), y(l, "class", "-mt-2"), t.open = c = e[9] ? e[10][e[32]] : !e[10][e[32]]
            }, m(e, c) {
                g(e, t, c), d(t, n), d(n, i), d(n, s), d(n, o), d(o, r), d(t, a), d(t, l);
                for (let e = 0; e < L.length; e += 1) L[e] && L[e].m(l, null);
                d(t, h), u = !0, $ || (x = b(t, "toggle", M), $ = !0)
            }, p(n, s) {
                if (e = n, (!u || 4098 & s[0]) && S !== (S = e[29].basename + "") && C(i, S), (!u || 4096 & s[0]) && k !== (k = e[34].toFixed(2) + "") && C(r, k), 4102 & s[0]) {
                    let t;
                    for (A = e[33], t = 0; t < A.length; t += 1) {
                        const n = ze(e, A, t);
                        L[t] ? (L[t].p(n, s), q(L[t], 1)) : (L[t] = tt(n), L[t].c(), q(L[t], 1), L[t].m(l, null))
                    }
                    for (Y(), t = A.length; t < L.length; t += 1) R(t);
                    X()
                }
                (!u || 5632 & s[0] && c !== (c = e[9] ? e[10][e[32]] : !e[10][e[32]])) && (t.open = c)
            }, i(e) {
                if (!u) {
                    for (let e = 0; e < A.length; e += 1) q(L[e]);
                    u = !0
                }
            }, o(e) {
                L = L.filter(Boolean);
                for (let e = 0; e < L.length; e += 1) Q(L[e]);
                u = !1
            }, d(e) {
                e && f(t), m(L, e), $ = !1, x()
            }
        }
    }

    function it(e) {
        let t, n, i = ht(e[7], e[29].basename), s = i && Ze(e);
        return {
            c() {
                s && s.c(), t = $()
            }, m(e, i) {
                s && s.m(e, i), g(e, t, i), n = !0
            }, p(e, n) {
                4226 & n[0] && (i = ht(e[7], e[29].basename)), i ? s ? (s.p(e, n), 4226 & n[0] && q(s, 1)) : (s = Ze(e), s.c(), q(s, 1), s.m(t.parentNode, t)) : s && (Y(), Q(s, 1, 1, (() => {
                    s = null
                })), X())
            }, i(e) {
                n || (q(s), n = !0)
            }, o(e) {
                Q(s), n = !1
            }, d(e) {
                s && s.d(e), e && f(t)
            }
        }
    }

    function st(t) {
        let n, i, s = t[28], r = ot(t);
        return {
            c() {
                r.c(), n = $()
            }, m(e, t) {
                r.m(e, t), g(e, n, t), i = !0
            }, p(t, i) {
                2048 & i[0] && o(s, s = t[28]) ? (Y(), Q(r, 1, 1, e), X(), r = ot(t), r.c(), q(r, 1), r.m(n.parentNode, n)) : r.p(t, i)
            }, i(e) {
                i || (q(r), i = !0)
            }, o(e) {
                Q(r), i = !1
            }, d(e) {
                e && f(n), r.d(e)
            }
        }
    }

    function ot(e) {
        let t, n;
        return t = new Pe({
            props: {
                file: e[29],
                searchResult: e[28],
                preferences: e[2],
                showFilename: !0
            }
        }), t.$on("navigate", e[22]), t.$on("setPreference", e[23]), {
            c() {
                Z(t.$$.fragment)
            }, m(e, i) {
                ee(t, e, i), n = !0
            }, p(e, n) {
                const i = {};
                2050 & n[0] && (i.file = e[29]), 2048 & n[0] && (i.searchResult = e[28]), 4 & n[0] && (i.preferences = e[2]), t.$set(i)
            }, i(e) {
                n || (q(t.$$.fragment, e), n = !0)
            }, o(e) {
                Q(t.$$.fragment, e), n = !1
            }, d(e) {
                te(t, e)
            }
        }
    }

    function rt(e) {
        let t, n, i = ht(e[7], e[29].basename), s = i && st(e);
        return {
            c() {
                s && s.c(), t = $()
            }, m(e, i) {
                s && s.m(e, i), g(e, t, i), n = !0
            }, p(e, n) {
                2178 & n[0] && (i = ht(e[7], e[29].basename)), i ? s ? (s.p(e, n), 2178 & n[0] && q(s, 1)) : (s = st(e), s.c(), q(s, 1), s.m(t.parentNode, t)) : s && (Y(), Q(s, 1, 1, (() => {
                    s = null
                })), X())
            }, i(e) {
                n || (q(s), n = !0)
            }, o(e) {
                Q(s), n = !1
            }, d(e) {
                s && s.d(e), e && f(t)
            }
        }
    }

    function at(e) {
        let t;
        return {
            c() {
                t = p("div"), t.textContent = "Enter a search query above and click the search icon or type “Enter”.", y(t, "class", "m-2 font-mono")
            }, m(e, n) {
                g(e, t, n)
            }, d(e) {
                e && f(t)
            }
        }
    }

    function lt(e) {
        let t, n, s, o, r, a, l, h, c, u, m, v, $, x, C, k, L, R, M, E, T, _, F, I, O, W, B, H, D, P = !e[6] && Ue(e);

        function N(e, t) {
            return e[5] ? Ye : je
        }

        let z = N(e), V = z(e);

        function U(e, t) {
            return e[6] ? qe : Xe
        }

        let G = U(e), K = G(e);
        const j = [Je, Qe], J = [];

        function Z(e, t) {
            return e[6] ? 0 : 1
        }

        I = Z(e), O = J[I] = j[I](e);
        let ee = e[4] && at();
        return {
            c() {
                t = p("div"), n = p("button"), n.textContent = "Toggle sidebar expanded", s = w(), o = p("div"), r = p("div"), a = p("div"), l = p("button"), l.textContent = "Toggle sidebar expanded", h = w(), c = p("div"), u = p("input"), m = w(), v = p("div"), v.textContent = "Filter", $ = w(), x = p("div"), P && P.c(), C = w(), k = p("button"), V.c(), M = w(), E = p("button"), K.c(), T = w(), _ = p("div"), F = p("div"), O.c(), W = w(), ee && ee.c(), y(n, "class", "button hamburger-icon svelte-1w3dvgm"), y(n, "title", "Toggle sidebar expanded"), y(t, "class", "absolute top-11 z-10 hidden max-sm:block svelte-1w3dvgm"), A(t, "hide", e[0]), y(l, "class", "button hamburger-icon svelte-1w3dvgm"), y(l, "title", "Toggle sidebar expanded"), y(a, "class", "mt-2 hidden max-sm:block"), y(u, "class", "border border-black bg-white py-1 pl-8 font-mono rounded flex-1 w-40"), y(u, "placeholder", "Filter files"), y(v, "class", "filter-icon svelte-1w3dvgm"), y(c, "class", "flex-1 flex items-center relative px-2 mt-2 svelte-1w3dvgm"), A(c, "unsearched", e[4]), y(k, "class", "button solo-icon svelte-1w3dvgm"), k.disabled = L = null == e[3], y(k, "title", R = e[5] ? "Show all files" : "Filter to only viewed file"), A(k, "button-active", e[5]), y(E, "class", "button toggle-view-icon svelte-1w3dvgm"), y(E, "title", "Toggle search results view"), y(x, "class", "mt-2 svelte-1w3dvgm"), A(x, "unsearched", e[4]), y(r, "class", "flex items-center mb-2 pr-2 max-lg:flex-wrap"), y(F, "class", "absolute left-0 top-0 right-0 bottom-0 break-words overflow-y-auto pb-2"), y(_, "class", "flex-1 relative"), y(o, "class", "w-1/3 max-lg:w-64 bg-slate-100 max-sm:absolute max-sm:left-0 max-sm:right-8 max-sm:bottom-0 max-sm:top-0 max-sm:w-[calc(100%-8rem)] border-r-4 z-10 border-black flex flex-col items-stretch flex-shrink-0 svelte-1w3dvgm"), A(o, "hide", !e[0])
            }, m(i, f) {
                g(i, t, f), d(t, n), g(i, s, f), g(i, o, f), d(o, r), d(r, a), d(a, l), d(r, h), d(r, c), d(c, u), S(u, e[7]), d(c, m), d(c, v), d(r, $), d(r, x), P && P.m(x, null), d(x, C), d(x, k), V.m(k, null), d(x, M), d(x, E), K.m(E, null), d(o, T), d(o, _), d(_, F), J[I].m(F, null), d(F, W), ee && ee.m(F, null), e[27](F), B = !0, H || (D = [b(n, "click", e[16]), b(l, "click", e[17]), b(u, "input", e[18]), b(k, "click", e[20]), b(E, "click", e[21])], H = !0)
            }, p(e, n) {
                (!B || 1 & n[0]) && A(t, "hide", e[0]), 128 & n[0] && u.value !== e[7] && S(u, e[7]), (!B || 16 & n[0]) && A(c, "unsearched", e[4]), e[6] ? P && (P.d(1), P = null) : P ? P.p(e, n) : (P = Ue(e), P.c(), P.m(x, C)), z !== (z = N(e)) && (V.d(1), V = z(e), V && (V.c(), V.m(k, null))), (!B || 8 & n[0] && L !== (L = null == e[3])) && (k.disabled = L), (!B || 32 & n[0] && R !== (R = e[5] ? "Show all files" : "Filter to only viewed file")) && y(k, "title", R), (!B || 32 & n[0]) && A(k, "button-active", e[5]), G !== (G = U(e)) && (K.d(1), K = G(e), K && (K.c(), K.m(E, null))), (!B || 16 & n[0]) && A(x, "unsearched", e[4]);
                let i = I;
                I = Z(e), I === i ? J[I].p(e, n) : (Y(), Q(J[i], 1, 1, (() => {
                    J[i] = null
                })), X(), O = J[I], O ? O.p(e, n) : (O = J[I] = j[I](e), O.c()), q(O, 1), O.m(F, W)), e[4] ? ee || (ee = at(), ee.c(), ee.m(F, null)) : ee && (ee.d(1), ee = null), (!B || 1 & n[0]) && A(o, "hide", !e[0])
            }, i(e) {
                B || (q(O), B = !0)
            }, o(e) {
                Q(O), B = !1
            }, d(n) {
                n && f(t), n && f(s), n && f(o), P && P.d(), V.d(), K.d(), J[I].d(), ee && ee.d(), e[27](null), H = !1, i(D)
            }
        }
    }

    function ht(e, t) {
        return t.toLowerCase().includes(e.toLowerCase())
    }

    function ct(e) {
        let t = 0;
        for (const n of e) t += n.distance;
        return t / e.length
    }

    function ut(e, t, n) {
        let i, s,
            o, {searchResultSet: r} = t, {filesByPath: a} = t, {preferences: l} = t, {activeFile: h} = t, {unsearched: c} = t, {sidebarExpanded: u = !1} = t,
            d = !1, g = !1, f = "", m = !1, p = {};

        function v(e, t) {
            const i = e.target.open;
            n(10, p[t] = m ? i : !i, p)
        }

        return e.$$set = e => {
            "searchResultSet" in e && n(14, r = e.searchResultSet), "filesByPath" in e && n(1, a = e.filesByPath), "preferences" in e && n(2, l = e.preferences), "activeFile" in e && n(3, h = e.activeFile), "unsearched" in e && n(4, c = e.unsearched), "sidebarExpanded" in e && n(0, u = e.sidebarExpanded)
        }, e.$$.update = () => {
            16424 & e.$$.dirty[0] && n(12, i = r.results.map((([e, t]) => [e, t, ct(t)])).sort(((e, t) => "asc" === r.sort ? e[2] - t[2] : t[2] - e[2])).filter((([e]) => !d || null == h || e === h.filename))), 16424 & e.$$.dirty[0] && n(11, s = r.results.map((e => e[1])).flat().sort(((e, t) => "asc" === r.sort ? e.distance - t.distance : t.distance - e.distance)).filter((e => !d || null == h || e.filename === h.filename)))
        }, [u, a, l, h, c, d, g, f, o, m, p, s, i, v, r, function () {
            o && n(8, o.scrollTop = 0, o)
        }, () => n(0, u = !u), () => n(0, u = !u), function () {
            f = this.value, n(7, f)
        }, () => {
            m ? (n(9, m = !1), n(10, p = {})) : (n(9, m = !0), n(10, p = {}))
        }, () => n(5, d = !d), () => n(6, g = !g), function (t) {
            T.call(this, e, t)
        }, function (t) {
            T.call(this, e, t)
        }, function (t) {
            T.call(this, e, t)
        }, function (t) {
            T.call(this, e, t)
        }, (e, t) => v(t, e), function (e) {
            F[e ? "unshift" : "push"]((() => {
                o = e, n(8, o)
            }))
        }]
    }

    class dt extends ie {
        constructor(e) {
            super(), ne(this, e, ut, lt, o, {
                searchResultSet: 14,
                filesByPath: 1,
                preferences: 2,
                activeFile: 3,
                unsearched: 4,
                sidebarExpanded: 0,
                scrollToTop: 15
            }, null, [-1, -1])
        }

        get scrollToTop() {
            return this.$$.ctx[15]
        }
    }

    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var gt, ft = {};
    gt = {
        get exports() {
            return ft
        }, set exports(e) {
            ft = e
        }
    }, function () {
        var e = function () {
            return this
        }();
        e || "undefined" == typeof window || (e = window);
        var t = function (e, n, i) {
            "string" == typeof e ? (2 == arguments.length && (i = n), t.modules[e] || (t.payloads[e] = i, t.modules[e] = null)) : t.original ? t.original.apply(this, arguments) : (console.error("dropping module because define wasn't a string."), console.trace())
        };
        t.modules = {}, t.payloads = {};
        var n, i, s = function (e, t, n) {
            if ("string" == typeof t) {
                var i = a(e, t);
                if (null != i) return n && n(), i
            } else if ("[object Array]" === Object.prototype.toString.call(t)) {
                for (var s = [], r = 0, l = t.length; r < l; ++r) {
                    var h = a(e, t[r]);
                    if (null == h && o.original) return;
                    s.push(h)
                }
                return n && n.apply(null, s) || !0
            }
        }, o = function (e, t) {
            var n = s("", e, t);
            return null == n && o.original ? o.original.apply(this, arguments) : n
        }, r = function (e, t) {
            if (-1 !== t.indexOf("!")) {
                var n = t.split("!");
                return r(e, n[0]) + "!" + r(e, n[1])
            }
            if ("." == t.charAt(0)) for (t = e.split("/").slice(0, -1).join("/") + "/" + t; -1 !== t.indexOf(".") && i != t;) {
                var i = t;
                t = t.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "")
            }
            return t
        }, a = function (e, n) {
            n = r(e, n);
            var i = t.modules[n];
            if (!i) {
                if ("function" == typeof (i = t.payloads[n])) {
                    var o = {}, a = {id: n, uri: "", exports: o, packaged: !0};
                    o = i((function (e, t) {
                        return s(n, e, t)
                    }), o, a) || a.exports, t.modules[n] = o, delete t.payloads[n]
                }
                i = t.modules[n] = o || i
            }
            return i
        };
        i = e, (n = "ace") && (e[n] || (e[n] = {}), i = e[n]), i.define && i.define.packaged || (t.original = i.define, i.define = t, i.define.packaged = !0), i.require && i.require.packaged || (o.original = i.require, i.require = o, i.require.packaged = !0)
    }(), ace.define("ace/lib/es6-shim", ["require", "exports", "module"], (function (e, t, n) {
        function i(e, t, n) {
            Object.defineProperty(e, t, {value: n, enumerable: !1, writable: !0, configurable: !0})
        }

        String.prototype.startsWith || i(String.prototype, "startsWith", (function (e, t) {
            return t = t || 0, this.lastIndexOf(e, t) === t
        })), String.prototype.endsWith || i(String.prototype, "endsWith", (function (e, t) {
            var n = this;
            (void 0 === t || t > n.length) && (t = n.length), t -= e.length;
            var i = n.indexOf(e, t);
            return -1 !== i && i === t
        })), String.prototype.repeat || i(String.prototype, "repeat", (function (e) {
            for (var t = "", n = this; e > 0;) 1 & e && (t += n), (e >>= 1) && (n += n);
            return t
        })), String.prototype.includes || i(String.prototype, "includes", (function (e, t) {
            return -1 != this.indexOf(e, t)
        })), Object.assign || (Object.assign = function (e) {
            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var i = arguments[n];
                null != i && Object.keys(i).forEach((function (e) {
                    t[e] = i[e]
                }))
            }
            return t
        }), Object.values || (Object.values = function (e) {
            return Object.keys(e).map((function (t) {
                return e[t]
            }))
        }), Array.prototype.find || i(Array.prototype, "find", (function (e) {
            for (var t = this.length, n = arguments[1], i = 0; i < t; i++) {
                var s = this[i];
                if (e.call(n, s, i, this)) return s
            }
        })), Array.prototype.findIndex || i(Array.prototype, "findIndex", (function (e) {
            for (var t = this.length, n = arguments[1], i = 0; i < t; i++) {
                var s = this[i];
                if (e.call(n, s, i, this)) return i
            }
        })), Array.prototype.includes || i(Array.prototype, "includes", (function (e, t) {
            return -1 != this.indexOf(e, t)
        })), Array.prototype.fill || i(Array.prototype, "fill", (function (e) {
            for (var t = this, n = t.length >>> 0, i = arguments[1] >> 0, s = i < 0 ? Math.max(n + i, 0) : Math.min(i, n), o = arguments[2], r = void 0 === o ? n : o >> 0, a = r < 0 ? Math.max(n + r, 0) : Math.min(r, n); s < a;) t[s] = e, s++;
            return t
        })), Array.of || i(Array, "of", (function () {
            return Array.prototype.slice.call(arguments)
        }))
    })), ace.define("ace/lib/fixoldbrowsers", ["require", "exports", "module", "ace/lib/es6-shim"], (function (e, t, n) {
        e("./es6-shim")
    })), ace.define("ace/lib/lang", ["require", "exports", "module"], (function (e, t, n) {
        t.last = function (e) {
            return e[e.length - 1]
        }, t.stringReverse = function (e) {
            return e.split("").reverse().join("")
        }, t.stringRepeat = function (e, t) {
            for (var n = ""; t > 0;) 1 & t && (n += e), (t >>= 1) && (e += e);
            return n
        };
        var i = /^\s\s*/, s = /\s\s*$/;
        t.stringTrimLeft = function (e) {
            return e.replace(i, "")
        }, t.stringTrimRight = function (e) {
            return e.replace(s, "")
        }, t.copyObject = function (e) {
            var t = {};
            for (var n in e) t[n] = e[n];
            return t
        }, t.copyArray = function (e) {
            for (var t = [], n = 0, i = e.length; n < i; n++) e[n] && "object" == typeof e[n] ? t[n] = this.copyObject(e[n]) : t[n] = e[n];
            return t
        }, t.deepCopy = function e(t) {
            if ("object" != typeof t || !t) return t;
            var n;
            if (Array.isArray(t)) {
                n = [];
                for (var i = 0; i < t.length; i++) n[i] = e(t[i]);
                return n
            }
            if ("[object Object]" !== Object.prototype.toString.call(t)) return t;
            for (var i in n = {}, t) n[i] = e(t[i]);
            return n
        }, t.arrayToMap = function (e) {
            for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = 1;
            return t
        }, t.createMap = function (e) {
            var t = Object.create(null);
            for (var n in e) t[n] = e[n];
            return t
        }, t.arrayRemove = function (e, t) {
            for (var n = 0; n <= e.length; n++) t === e[n] && e.splice(n, 1)
        }, t.escapeRegExp = function (e) {
            return e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1")
        }, t.escapeHTML = function (e) {
            return ("" + e).replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;")
        }, t.getMatchOffsets = function (e, t) {
            var n = [];
            return e.replace(t, (function (e) {
                n.push({offset: arguments[arguments.length - 2], length: e.length})
            })), n
        }, t.deferredCall = function (e) {
            var t = null, n = function () {
                t = null, e()
            }, i = function (e) {
                return i.cancel(), t = setTimeout(n, e || 0), i
            };
            return i.schedule = i, i.call = function () {
                return this.cancel(), e(), i
            }, i.cancel = function () {
                return clearTimeout(t), t = null, i
            }, i.isPending = function () {
                return t
            }, i
        }, t.delayedCall = function (e, t) {
            var n = null, i = function () {
                n = null, e()
            }, s = function (e) {
                null == n && (n = setTimeout(i, e || t))
            };
            return s.delay = function (e) {
                n && clearTimeout(n), n = setTimeout(i, e || t)
            }, s.schedule = s, s.call = function () {
                this.cancel(), e()
            }, s.cancel = function () {
                n && clearTimeout(n), n = null
            }, s.isPending = function () {
                return n
            }, s
        }
    })), ace.define("ace/lib/oop", ["require", "exports", "module"], (function (e, t, n) {
        t.inherits = function (e, t) {
            e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        }, t.mixin = function (e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }, t.implement = function (e, n) {
            t.mixin(e, n)
        }
    })), ace.define("ace/lib/useragent", ["require", "exports", "module"], (function (e, t, n) {
        t.OS = {LINUX: "LINUX", MAC: "MAC", WINDOWS: "WINDOWS"}, t.getOS = function () {
            return t.isMac ? t.OS.MAC : t.isLinux ? t.OS.LINUX : t.OS.WINDOWS
        };
        var i = "object" == typeof navigator ? navigator : {},
            s = (/mac|win|linux/i.exec(i.platform) || ["other"])[0].toLowerCase(), o = i.userAgent || "",
            r = i.appName || "";
        t.isWin = "win" == s, t.isMac = "mac" == s, t.isLinux = "linux" == s, t.isIE = "Microsoft Internet Explorer" == r || r.indexOf("MSAppHost") >= 0 ? parseFloat((o.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]) : parseFloat((o.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]), t.isOldIE = t.isIE && t.isIE < 9, t.isGecko = t.isMozilla = o.match(/ Gecko\/\d+/), t.isOpera = "object" == typeof opera && "[object Opera]" == Object.prototype.toString.call(window.opera), t.isWebKit = parseFloat(o.split("WebKit/")[1]) || void 0, t.isChrome = parseFloat(o.split(" Chrome/")[1]) || void 0, t.isEdge = parseFloat(o.split(" Edge/")[1]) || void 0, t.isAIR = o.indexOf("AdobeAIR") >= 0, t.isAndroid = o.indexOf("Android") >= 0, t.isChromeOS = o.indexOf(" CrOS ") >= 0, t.isIOS = /iPad|iPhone|iPod/.test(o) && !window.MSStream, t.isIOS && (t.isMac = !0), t.isMobile = t.isIOS || t.isAndroid
    })), ace.define("ace/lib/dom", ["require", "exports", "module", "ace/lib/useragent"], (function (e, t, n) {
        var i, s = e("./useragent");
        t.buildDom = function e(t, n, i) {
            if ("string" == typeof t && t) {
                var s = document.createTextNode(t);
                return n && n.appendChild(s), s
            }
            if (!Array.isArray(t)) return t && t.appendChild && n && n.appendChild(t), t;
            if ("string" != typeof t[0] || !t[0]) {
                for (var o = [], r = 0; r < t.length; r++) {
                    var a = e(t[r], n, i);
                    a && o.push(a)
                }
                return o
            }
            var l = document.createElement(t[0]), h = t[1], c = 1;
            for (h && "object" == typeof h && !Array.isArray(h) && (c = 2), r = c; r < t.length; r++) e(t[r], l, i);
            return 2 == c && Object.keys(h).forEach((function (e) {
                var t = h[e];
                "class" === e ? l.className = Array.isArray(t) ? t.join(" ") : t : "function" == typeof t || "value" == e || "$" == e[0] ? l[e] = t : "ref" === e ? i && (i[t] = l) : "style" === e ? "string" == typeof t && (l.style.cssText = t) : null != t && l.setAttribute(e, t)
            })), n && n.appendChild(l), l
        }, t.getDocumentHead = function (e) {
            return e || (e = document), e.head || e.getElementsByTagName("head")[0] || e.documentElement
        }, t.createElement = function (e, t) {
            return document.createElementNS ? document.createElementNS(t || "http://www.w3.org/1999/xhtml", e) : document.createElement(e)
        }, t.removeChildren = function (e) {
            e.innerHTML = ""
        }, t.createTextNode = function (e, t) {
            return (t ? t.ownerDocument : document).createTextNode(e)
        }, t.createFragment = function (e) {
            return (e ? e.ownerDocument : document).createDocumentFragment()
        }, t.hasCssClass = function (e, t) {
            return -1 !== (e.className + "").split(/\s+/g).indexOf(t)
        }, t.addCssClass = function (e, n) {
            t.hasCssClass(e, n) || (e.className += " " + n)
        }, t.removeCssClass = function (e, t) {
            for (var n = e.className.split(/\s+/g); ;) {
                var i = n.indexOf(t);
                if (-1 == i) break;
                n.splice(i, 1)
            }
            e.className = n.join(" ")
        }, t.toggleCssClass = function (e, t) {
            for (var n = e.className.split(/\s+/g), i = !0; ;) {
                var s = n.indexOf(t);
                if (-1 == s) break;
                i = !1, n.splice(s, 1)
            }
            return i && n.push(t), e.className = n.join(" "), i
        }, t.setCssClass = function (e, n, i) {
            i ? t.addCssClass(e, n) : t.removeCssClass(e, n)
        }, t.hasCssString = function (e, t) {
            var n, i = 0;
            if (n = (t = t || document).querySelectorAll("style")) for (; i < n.length;) if (n[i++].id === e) return !0
        }, t.removeElementById = function (e, t) {
            (t = t || document).getElementById(e) && t.getElementById(e).remove()
        };
        var o = [];

        function r() {
            var e = o;
            o = null, e && e.forEach((function (e) {
                a(e[0], e[1])
            }))
        }

        function a(e, n, s) {
            if ("undefined" != typeof document) {
                if (o) if (s) r(); else if (!1 === s) return o.push([e, n]);
                if (!i) {
                    var a = s;
                    s && s.getRootNode && (a = s.getRootNode()) && a != s || (a = document);
                    var l = a.ownerDocument || a;
                    if (n && t.hasCssString(n, a)) return null;
                    n && (e += "\n/*# sourceURL=ace/css/" + n + " */");
                    var h = t.createElement("style");
                    h.appendChild(l.createTextNode(e)), n && (h.id = n), a == l && (a = t.getDocumentHead(l)), a.insertBefore(h, a.firstChild)
                }
            }
        }

        if (t.useStrictCSP = function (e) {
            i = e, 0 == e ? r() : o || (o = [])
        }, t.importCssString = a, t.importCssStylsheet = function (e, n) {
            t.buildDom(["link", {rel: "stylesheet", href: e}], t.getDocumentHead(n))
        }, t.scrollbarWidth = function (e) {
            var n = t.createElement("ace_inner");
            n.style.width = "100%", n.style.minWidth = "0px", n.style.height = "200px", n.style.display = "block";
            var i = t.createElement("ace_outer"), s = i.style;
            s.position = "absolute", s.left = "-10000px", s.overflow = "hidden", s.width = "200px", s.minWidth = "0px", s.height = "150px", s.display = "block", i.appendChild(n);
            var o = e && e.documentElement || document && document.documentElement;
            if (!o) return 0;
            o.appendChild(i);
            var r = n.offsetWidth;
            s.overflow = "scroll";
            var a = n.offsetWidth;
            return r === a && (a = i.clientWidth), o.removeChild(i), r - a
        }, t.computedStyle = function (e, t) {
            return window.getComputedStyle(e, "") || {}
        }, t.setStyle = function (e, t, n) {
            e[t] !== n && (e[t] = n)
        }, t.HAS_CSS_ANIMATION = !1, t.HAS_CSS_TRANSFORMS = !1, t.HI_DPI = !s.isWin || "undefined" != typeof window && window.devicePixelRatio >= 1.5, s.isChromeOS && (t.HI_DPI = !1), "undefined" != typeof document) {
            var l = document.createElement("div");
            t.HI_DPI && void 0 !== l.style.transform && (t.HAS_CSS_TRANSFORMS = !0), s.isEdge || void 0 === l.style.animationName || (t.HAS_CSS_ANIMATION = !0), l = null
        }
        t.HAS_CSS_TRANSFORMS ? t.translate = function (e, t, n) {
            e.style.transform = "translate(" + Math.round(t) + "px, " + Math.round(n) + "px)"
        } : t.translate = function (e, t, n) {
            e.style.top = Math.round(n) + "px", e.style.left = Math.round(t) + "px"
        }
    })), ace.define("ace/lib/net", ["require", "exports", "module", "ace/lib/dom"], (function (e, t, n) {
        /*
    	 * based on code from:
    	 *
    	 * @license RequireJS text 0.25.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
    	 * Available via the MIT or new BSD license.
    	 * see: http://github.com/jrburke/requirejs for details
    	 */
        var i = e("./dom");
        t.get = function (e, t) {
            var n = new XMLHttpRequest;
            n.open("GET", e, !0), n.onreadystatechange = function () {
                4 === n.readyState && t(n.responseText)
            }, n.send(null)
        }, t.loadScript = function (e, t) {
            var n = i.getDocumentHead(), s = document.createElement("script");
            s.src = e, n.appendChild(s), s.onload = s.onreadystatechange = function (e, n) {
                !n && s.readyState && "loaded" != s.readyState && "complete" != s.readyState || (s = s.onload = s.onreadystatechange = null, n || t())
            }
        }, t.qualifyURL = function (e) {
            var t = document.createElement("a");
            return t.href = e, t.href
        }
    })), ace.define("ace/lib/event_emitter", ["require", "exports", "module"], (function (e, t, n) {
        var i = {}, s = function () {
            this.propagationStopped = !0
        }, o = function () {
            this.defaultPrevented = !0
        };
        i._emit = i._dispatchEvent = function (e, t) {
            this._eventRegistry || (this._eventRegistry = {}), this._defaultHandlers || (this._defaultHandlers = {});
            var n = this._eventRegistry[e] || [], i = this._defaultHandlers[e];
            if (n.length || i) {
                "object" == typeof t && t || (t = {}), t.type || (t.type = e), t.stopPropagation || (t.stopPropagation = s), t.preventDefault || (t.preventDefault = o), n = n.slice();
                for (var r = 0; r < n.length && (n[r](t, this), !t.propagationStopped); r++) ;
                return i && !t.defaultPrevented ? i(t, this) : void 0
            }
        }, i._signal = function (e, t) {
            var n = (this._eventRegistry || {})[e];
            if (n) {
                n = n.slice();
                for (var i = 0; i < n.length; i++) n[i](t, this)
            }
        }, i.once = function (e, t) {
            var n = this;
            if (this.on(e, (function i() {
                n.off(e, i), t.apply(null, arguments)
            })), !t) return new Promise((function (e) {
                t = e
            }))
        }, i.setDefaultHandler = function (e, t) {
            var n = this._defaultHandlers;
            if (n || (n = this._defaultHandlers = {_disabled_: {}}), n[e]) {
                var i = n[e], s = n._disabled_[e];
                s || (n._disabled_[e] = s = []), s.push(i);
                var o = s.indexOf(t);
                -1 != o && s.splice(o, 1)
            }
            n[e] = t
        }, i.removeDefaultHandler = function (e, t) {
            var n = this._defaultHandlers;
            if (n) {
                var i = n._disabled_[e];
                if (n[e] == t) i && this.setDefaultHandler(e, i.pop()); else if (i) {
                    var s = i.indexOf(t);
                    -1 != s && i.splice(s, 1)
                }
            }
        }, i.on = i.addEventListener = function (e, t, n) {
            this._eventRegistry = this._eventRegistry || {};
            var i = this._eventRegistry[e];
            return i || (i = this._eventRegistry[e] = []), -1 == i.indexOf(t) && i[n ? "unshift" : "push"](t), t
        }, i.off = i.removeListener = i.removeEventListener = function (e, t) {
            this._eventRegistry = this._eventRegistry || {};
            var n = this._eventRegistry[e];
            if (n) {
                var i = n.indexOf(t);
                -1 !== i && n.splice(i, 1)
            }
        }, i.removeAllListeners = function (e) {
            e || (this._eventRegistry = this._defaultHandlers = void 0), this._eventRegistry && (this._eventRegistry[e] = void 0), this._defaultHandlers && (this._defaultHandlers[e] = void 0)
        }, t.EventEmitter = i
    })), ace.define("ace/lib/app_config", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], (function (e, t, n) {
        var i = e("./oop"), s = e("./event_emitter").EventEmitter, o = {
            setOptions: function (e) {
                Object.keys(e).forEach((function (t) {
                    this.setOption(t, e[t])
                }), this)
            }, getOptions: function (e) {
                var t = {};
                if (e) Array.isArray(e) || (t = e, e = Object.keys(t)); else {
                    var n = this.$options;
                    e = Object.keys(n).filter((function (e) {
                        return !n[e].hidden
                    }))
                }
                return e.forEach((function (e) {
                    t[e] = this.getOption(e)
                }), this), t
            }, setOption: function (e, t) {
                if (this["$" + e] !== t) {
                    var n = this.$options[e];
                    if (!n) return r('misspelled option "' + e + '"');
                    if (n.forwardTo) return this[n.forwardTo] && this[n.forwardTo].setOption(e, t);
                    n.handlesSet || (this["$" + e] = t), n && n.set && n.set.call(this, t)
                }
            }, getOption: function (e) {
                var t = this.$options[e];
                return t ? t.forwardTo ? this[t.forwardTo] && this[t.forwardTo].getOption(e) : t && t.get ? t.get.call(this) : this["$" + e] : r('misspelled option "' + e + '"')
            }
        };

        function r(e) {
            "undefined" != typeof console && console.warn && console.warn.apply(console, arguments)
        }

        function a(e, t) {
            var n = new Error(e);
            n.data = t, "object" == typeof console && console.error && console.error(n), setTimeout((function () {
                throw n
            }))
        }

        var l = function () {
            this.$defaultOptions = {}
        };
        (function () {
            i.implement(this, s), this.defineOptions = function (e, t, n) {
                return e.$options || (this.$defaultOptions[t] = e.$options = {}), Object.keys(n).forEach((function (t) {
                    var i = n[t];
                    "string" == typeof i && (i = {forwardTo: i}), i.name || (i.name = t), e.$options[i.name] = i, "initialValue" in i && (e["$" + i.name] = i.initialValue)
                })), i.implement(e, o), this
            }, this.resetOptions = function (e) {
                Object.keys(e.$options).forEach((function (t) {
                    var n = e.$options[t];
                    "value" in n && e.setOption(t, n.value)
                }))
            }, this.setDefaultValue = function (e, t, n) {
                if (!e) {
                    for (e in this.$defaultOptions) if (this.$defaultOptions[e][t]) break;
                    if (!this.$defaultOptions[e][t]) return !1
                }
                var i = this.$defaultOptions[e] || (this.$defaultOptions[e] = {});
                i[t] && (i.forwardTo ? this.setDefaultValue(i.forwardTo, t, n) : i[t].value = n)
            }, this.setDefaultValues = function (e, t) {
                Object.keys(t).forEach((function (n) {
                    this.setDefaultValue(e, n, t[n])
                }), this)
            }, this.warn = r, this.reportError = a
        }).call(l.prototype), t.AppConfig = l
    })), ace.define("ace/theme/textmate.css", ["require", "exports", "module"], (function (e, t, n) {
        n.exports = '.ace-tm .ace_gutter {\n  background: #f0f0f0;\n  color: #333;\n}\n\n.ace-tm .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-tm .ace_fold {\n    background-color: #6B72E6;\n}\n\n.ace-tm {\n  background-color: #FFFFFF;\n  color: black;\n}\n\n.ace-tm .ace_cursor {\n  color: black;\n}\n        \n.ace-tm .ace_invisible {\n  color: rgb(191, 191, 191);\n}\n\n.ace-tm .ace_storage,\n.ace-tm .ace_keyword {\n  color: blue;\n}\n\n.ace-tm .ace_constant {\n  color: rgb(197, 6, 11);\n}\n\n.ace-tm .ace_constant.ace_buildin {\n  color: rgb(88, 72, 246);\n}\n\n.ace-tm .ace_constant.ace_language {\n  color: rgb(88, 92, 246);\n}\n\n.ace-tm .ace_constant.ace_library {\n  color: rgb(6, 150, 14);\n}\n\n.ace-tm .ace_invalid {\n  background-color: rgba(255, 0, 0, 0.1);\n  color: red;\n}\n\n.ace-tm .ace_support.ace_function {\n  color: rgb(60, 76, 114);\n}\n\n.ace-tm .ace_support.ace_constant {\n  color: rgb(6, 150, 14);\n}\n\n.ace-tm .ace_support.ace_type,\n.ace-tm .ace_support.ace_class {\n  color: rgb(109, 121, 222);\n}\n\n.ace-tm .ace_keyword.ace_operator {\n  color: rgb(104, 118, 135);\n}\n\n.ace-tm .ace_string {\n  color: rgb(3, 106, 7);\n}\n\n.ace-tm .ace_comment {\n  color: rgb(76, 136, 107);\n}\n\n.ace-tm .ace_comment.ace_doc {\n  color: rgb(0, 102, 255);\n}\n\n.ace-tm .ace_comment.ace_doc.ace_tag {\n  color: rgb(128, 159, 191);\n}\n\n.ace-tm .ace_constant.ace_numeric {\n  color: rgb(0, 0, 205);\n}\n\n.ace-tm .ace_variable {\n  color: rgb(49, 132, 149);\n}\n\n.ace-tm .ace_xml-pe {\n  color: rgb(104, 104, 91);\n}\n\n.ace-tm .ace_entity.ace_name.ace_function {\n  color: #0000A2;\n}\n\n\n.ace-tm .ace_heading {\n  color: rgb(12, 7, 255);\n}\n\n.ace-tm .ace_list {\n  color:rgb(185, 6, 144);\n}\n\n.ace-tm .ace_meta.ace_tag {\n  color:rgb(0, 22, 142);\n}\n\n.ace-tm .ace_string.ace_regex {\n  color: rgb(255, 0, 0)\n}\n\n.ace-tm .ace_marker-layer .ace_selection {\n  background: rgb(181, 213, 255);\n}\n.ace-tm.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px white;\n}\n.ace-tm .ace_marker-layer .ace_step {\n  background: rgb(252, 255, 0);\n}\n\n.ace-tm .ace_marker-layer .ace_stack {\n  background: rgb(164, 229, 101);\n}\n\n.ace-tm .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-tm .ace_marker-layer .ace_active-line {\n  background: rgba(0, 0, 0, 0.07);\n}\n\n.ace-tm .ace_gutter-active-line {\n    background-color : #dcdcdc;\n}\n\n.ace-tm .ace_marker-layer .ace_selected-word {\n  background: rgb(250, 250, 255);\n  border: 1px solid rgb(200, 200, 250);\n}\n\n.ace-tm .ace_indent-guide {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;\n}\n\n.ace-tm .ace_indent-guide-active {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;\n}\n'
    })), ace.define("ace/theme/textmate", ["require", "exports", "module", "ace/theme/textmate.css", "ace/lib/dom"], (function (e, t, n) {
        t.isDark = !1, t.cssClass = "ace-tm", t.cssText = e("./textmate.css"), t.$id = "ace/theme/textmate", e("../lib/dom").importCssString(t.cssText, t.cssClass, !1)
    })), ace.define("ace/config", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/lib/net", "ace/lib/dom", "ace/lib/app_config", "ace/theme/textmate"], (function (e, t, n) {
        var i = e("./lib/lang");
        e("./lib/oop");
        var s = e("./lib/net"), o = e("./lib/dom"), r = e("./lib/app_config").AppConfig;
        n.exports = t = new r;
        var a = {
            packaged: !1,
            workerPath: null,
            modePath: null,
            themePath: null,
            basePath: "",
            suffix: ".js",
            $moduleUrls: {},
            loadWorkerFromBlob: !0,
            sharedPopups: !1,
            useStrictCSP: null
        };
        t.get = function (e) {
            if (!a.hasOwnProperty(e)) throw new Error("Unknown config key: " + e);
            return a[e]
        }, t.set = function (e, t) {
            if (a.hasOwnProperty(e)) a[e] = t; else if (0 == this.setDefaultValue("", e, t)) throw new Error("Unknown config key: " + e);
            "useStrictCSP" == e && o.useStrictCSP(t)
        }, t.all = function () {
            return i.copyObject(a)
        }, t.$modes = {}, t.moduleUrl = function (e, t) {
            if (a.$moduleUrls[e]) return a.$moduleUrls[e];
            var n = e.split("/"), i = "snippets" == (t = t || n[n.length - 2] || "") ? "/" : "-", s = n[n.length - 1];
            if ("worker" == t && "-" == i) {
                var o = new RegExp("^" + t + "[\\-_]|[\\-_]" + t + "$", "g");
                s = s.replace(o, "")
            }
            (!s || s == t) && n.length > 1 && (s = n[n.length - 2]);
            var r = a[t + "Path"];
            return null == r ? r = a.basePath : "/" == i && (t = i = ""), r && "/" != r.slice(-1) && (r += "/"), r + t + i + s + this.get("suffix")
        }, t.setModuleUrl = function (e, t) {
            return a.$moduleUrls[e] = t
        };
        var l = function (t, n) {
            return "ace/theme/textmate" === t || "./theme/textmate" === t ? n(null, e("./theme/textmate")) : console.error("loader is not configured")
        };
        t.setLoader = function (e) {
            l = e
        }, t.dynamicModules = Object.create(null), t.$loading = {}, t.loadModule = function (n, i) {
            var o, r;
            Array.isArray(n) && (r = n[0], n = n[1]);
            var a = function (e) {
                if (e && !t.$loading[n]) return i && i(e);
                if (t.$loading[n] || (t.$loading[n] = []), t.$loading[n].push(i), !(t.$loading[n].length > 1)) {
                    var o = function () {
                        l(n, (function (e, i) {
                            t._emit("load.module", {name: n, module: i});
                            var s = t.$loading[n];
                            t.$loading[n] = null, s.forEach((function (e) {
                                e && e(i)
                            }))
                        }))
                    };
                    if (!t.get("packaged")) return o();
                    s.loadScript(t.moduleUrl(n, r), o), h()
                }
            };
            if (t.dynamicModules[n]) t.dynamicModules[n]().then((function (e) {
                e.default ? a(e.default) : a(e)
            })); else {
                try {
                    o = e(n)
                } catch (e) {
                }
                a(o)
            }
        }, t.setModuleLoader = function (e, n) {
            t.dynamicModules[e] = n
        };
        var h = function () {
            a.basePath || a.workerPath || a.modePath || a.themePath || Object.keys(a.$moduleUrls).length || (console.error("Unable to infer path to ace from script src,", "use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes", "or with webpack use ace/webpack-resolver"), h = function () {
            })
        };
        t.version = "1.16.0"
    })), ace.define("ace/loader_build", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/config"], (function (e, t, n) {
        e("./lib/fixoldbrowsers");
        var i = e("./config");
        i.setLoader((function (t, n) {
            e([t], (function (e) {
                n(null, e)
            }))
        }));
        var s = function () {
            return this || "undefined" != typeof window && window
        }();

        function o(t) {
            if (s && s.document) {
                i.set("packaged", t || e.packaged || n.packaged || s.define && (void 0).packaged);
                var o = {}, r = "", a = document.currentScript || document._currentScript,
                    l = a && a.ownerDocument || document;
                a && a.src && (r = a.src.split(/[?#]/)[0].split("/").slice(0, -1).join("/") || "");
                for (var h, c = l.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                    var d = c[u], g = d.src || d.getAttribute("src");
                    if (g) {
                        for (var f = d.attributes, m = 0, p = f.length; m < p; m++) {
                            var v = f[m];
                            0 === v.name.indexOf("data-ace-") && (o[(h = v.name.replace(/^data-ace-/, ""), h.replace(/-(.)/g, (function (e, t) {
                                return t.toUpperCase()
                            })))] = v.value)
                        }
                        var w = g.match(/^(.*)\/ace([\-.]\w+)?\.js(\?|$)/);
                        w && (r = w[1])
                    }
                }
                for (var $ in r && (o.base = o.base || r, o.packaged = !0), o.basePath = o.base, o.workerPath = o.workerPath || o.base, o.modePath = o.modePath || o.base, o.themePath = o.themePath || o.base, delete o.base, o) void 0 !== o[$] && i.set($, o[$])
            }
        }

        n.exports = function (t) {
            i.init = o, t.require = e
        }, o(!0)
    })), ace.define("ace/lib/keys", ["require", "exports", "module", "ace/lib/oop"], (function (e, t, n) {
        /*! @license
    	==========================================================================
    	SproutCore -- JavaScript Application Framework
    	copyright 2006-2009, Sprout Systems Inc., Apple Inc. and contributors.

    	Permission is hereby granted, free of charge, to any person obtaining a
    	copy of this software and associated documentation files (the "Software"),
    	to deal in the Software without restriction, including without limitation
    	the rights to use, copy, modify, merge, publish, distribute, sublicense,
    	and/or sell copies of the Software, and to permit persons to whom the
    	Software is furnished to do so, subject to the following conditions:

    	The above copyright notice and this permission notice shall be included in
    	all copies or substantial portions of the Software.

    	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    	FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
    	DEALINGS IN THE SOFTWARE.

    	SproutCore and the SproutCore logo are trademarks of Sprout Systems, Inc.

    	For more information about SproutCore, visit http://www.sproutcore.com


    	==========================================================================
    	@license */
        var i = e("./oop"), s = function () {
            var e, t, n = {
                MODIFIER_KEYS: {
                    16: "Shift",
                    17: "Ctrl",
                    18: "Alt",
                    224: "Meta",
                    91: "MetaLeft",
                    92: "MetaRight",
                    93: "ContextMenu"
                },
                KEY_MODS: {ctrl: 1, alt: 2, option: 2, shift: 4, super: 8, meta: 8, command: 8, cmd: 8, control: 1},
                FUNCTION_KEYS: {
                    8: "Backspace",
                    9: "Tab",
                    13: "Return",
                    19: "Pause",
                    27: "Esc",
                    32: "Space",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "Left",
                    38: "Up",
                    39: "Right",
                    40: "Down",
                    44: "Print",
                    45: "Insert",
                    46: "Delete",
                    96: "Numpad0",
                    97: "Numpad1",
                    98: "Numpad2",
                    99: "Numpad3",
                    100: "Numpad4",
                    101: "Numpad5",
                    102: "Numpad6",
                    103: "Numpad7",
                    104: "Numpad8",
                    105: "Numpad9",
                    "-13": "NumpadEnter",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "Numlock",
                    145: "Scrolllock"
                },
                PRINTABLE_KEYS: {
                    32: " ",
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    59: ";",
                    61: "=",
                    65: "a",
                    66: "b",
                    67: "c",
                    68: "d",
                    69: "e",
                    70: "f",
                    71: "g",
                    72: "h",
                    73: "i",
                    74: "j",
                    75: "k",
                    76: "l",
                    77: "m",
                    78: "n",
                    79: "o",
                    80: "p",
                    81: "q",
                    82: "r",
                    83: "s",
                    84: "t",
                    85: "u",
                    86: "v",
                    87: "w",
                    88: "x",
                    89: "y",
                    90: "z",
                    107: "+",
                    109: "-",
                    110: ".",
                    186: ";",
                    187: "=",
                    188: ",",
                    189: "-",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'",
                    111: "/",
                    106: "*"
                }
            };
            for (t in n.PRINTABLE_KEYS[173] = "-", n.FUNCTION_KEYS) e = n.FUNCTION_KEYS[t].toLowerCase(), n[e] = parseInt(t, 10);
            for (t in n.PRINTABLE_KEYS) e = n.PRINTABLE_KEYS[t].toLowerCase(), n[e] = parseInt(t, 10);
            return i.mixin(n, n.MODIFIER_KEYS), i.mixin(n, n.PRINTABLE_KEYS), i.mixin(n, n.FUNCTION_KEYS), n.enter = n.return, n.escape = n.esc, n.del = n.delete, function () {
                for (var e = ["cmd", "ctrl", "alt", "shift"], t = Math.pow(2, e.length); t--;) n.KEY_MODS[t] = e.filter((function (e) {
                    return t & n.KEY_MODS[e]
                })).join("-") + "-"
            }(), n.KEY_MODS[0] = "", n.KEY_MODS[-1] = "input-", n
        }();
        i.mixin(t, s), t.keyCodeToString = function (e) {
            var t = s[e];
            return "string" != typeof t && (t = String.fromCharCode(e)), t.toLowerCase()
        }
    })), ace.define("ace/lib/event", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], (function (e, t, n) {
        var i, s = e("./keys"), o = e("./useragent"), r = null, a = 0;

        function l() {
            return null == i && function () {
                i = !1;
                try {
                    document.createComment("").addEventListener("test", (function () {
                    }), {
                        get passive() {
                            i = {passive: !1}
                        }
                    })
                } catch (e) {
                }
            }(), i
        }

        function h(e, t, n) {
            this.elem = e, this.type = t, this.callback = n
        }

        h.prototype.destroy = function () {
            u(this.elem, this.type, this.callback), this.elem = this.type = this.callback = void 0
        };
        var c = t.addListener = function (e, t, n, i) {
            e.addEventListener(t, n, l()), i && i.$toDestroy.push(new h(e, t, n))
        }, u = t.removeListener = function (e, t, n) {
            e.removeEventListener(t, n, l())
        };
        t.stopEvent = function (e) {
            return t.stopPropagation(e), t.preventDefault(e), !1
        }, t.stopPropagation = function (e) {
            e.stopPropagation && e.stopPropagation()
        }, t.preventDefault = function (e) {
            e.preventDefault && e.preventDefault()
        }, t.getButton = function (e) {
            return "dblclick" == e.type ? 0 : "contextmenu" == e.type || o.isMac && e.ctrlKey && !e.altKey && !e.shiftKey ? 2 : e.button
        }, t.capture = function (e, t, n) {
            var i = e && e.ownerDocument || document;

            function s(e) {
                t && t(e), n && n(e), u(i, "mousemove", t), u(i, "mouseup", s), u(i, "dragstart", s)
            }

            return c(i, "mousemove", t), c(i, "mouseup", s), c(i, "dragstart", s), s
        }, t.addMouseWheelListener = function (e, t, n) {
            c(e, "wheel", (function (e) {
                var n = e.deltaX || 0, i = e.deltaY || 0;
                switch (e.deltaMode) {
                    case e.DOM_DELTA_PIXEL:
                        e.wheelX = .15 * n, e.wheelY = .15 * i;
                        break;
                    case e.DOM_DELTA_LINE:
                        e.wheelX = 15 * n, e.wheelY = 15 * i;
                        break;
                    case e.DOM_DELTA_PAGE:
                        e.wheelX = 150 * n, e.wheelY = 150 * i
                }
                t(e)
            }), n)
        }, t.addMultiMouseDownListener = function (e, n, i, s, r) {
            var a, l, h, u = 0, d = {2: "dblclick", 3: "tripleclick", 4: "quadclick"};

            function g(e) {
                if (0 !== t.getButton(e) ? u = 0 : e.detail > 1 ? ++u > 4 && (u = 1) : u = 1, o.isIE) {
                    var r = Math.abs(e.clientX - a) > 5 || Math.abs(e.clientY - l) > 5;
                    h && !r || (u = 1), h && clearTimeout(h), h = setTimeout((function () {
                        h = null
                    }), n[u - 1] || 600), 1 == u && (a = e.clientX, l = e.clientY)
                }
                if (e._clicks = u, i[s]("mousedown", e), u > 4) u = 0; else if (u > 1) return i[s](d[u], e)
            }

            Array.isArray(e) || (e = [e]), e.forEach((function (e) {
                c(e, "mousedown", g, r)
            }))
        };
        var d = function (e) {
            return 0 | (e.ctrlKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.metaKey ? 8 : 0)
        };

        function g(e, t, n) {
            var i = d(t);
            if (!o.isMac && r) {
                if (t.getModifierState && (t.getModifierState("OS") || t.getModifierState("Win")) && (i |= 8), r.altGr) {
                    if (3 == (3 & i)) return;
                    r.altGr = 0
                }
                if (18 === n || 17 === n) {
                    var l = "location" in t ? t.location : t.keyLocation;
                    17 === n && 1 === l ? 1 == r[n] && (a = t.timeStamp) : 18 === n && 3 === i && 2 === l && t.timeStamp - a < 50 && (r.altGr = !0)
                }
            }
            if (n in s.MODIFIER_KEYS && (n = -1), i || 13 !== n || 3 !== (l = "location" in t ? t.location : t.keyLocation) || (e(t, i, -n), !t.defaultPrevented)) {
                if (o.isChromeOS && 8 & i) {
                    if (e(t, i, n), t.defaultPrevented) return;
                    i &= -9
                }
                return !!(i || n in s.FUNCTION_KEYS || n in s.PRINTABLE_KEYS) && e(t, i, n)
            }
        }

        function f() {
            r = Object.create(null)
        }

        if (t.getModifierString = function (e) {
            return s.KEY_MODS[d(e)]
        }, t.addCommandKeyListener = function (e, n, i) {
            if (o.isOldGecko || o.isOpera && !("KeyboardEvent" in window)) {
                var s = null;
                c(e, "keydown", (function (e) {
                    s = e.keyCode
                }), i), c(e, "keypress", (function (e) {
                    return g(n, e, s)
                }), i)
            } else {
                var a = null;
                c(e, "keydown", (function (e) {
                    r[e.keyCode] = (r[e.keyCode] || 0) + 1;
                    var t = g(n, e, e.keyCode);
                    return a = e.defaultPrevented, t
                }), i), c(e, "keypress", (function (e) {
                    a && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && (t.stopEvent(e), a = null)
                }), i), c(e, "keyup", (function (e) {
                    r[e.keyCode] = null
                }), i), r || (f(), c(window, "focus", f))
            }
        }, "object" == typeof window && window.postMessage && !o.isOldIE) {
            var m = 1;
            t.nextTick = function (e, n) {
                n = n || window;
                var i = "zero-timeout-message-" + m++, s = function (o) {
                    o.data == i && (t.stopPropagation(o), u(n, "message", s), e())
                };
                c(n, "message", s), n.postMessage(i, "*")
            }
        }
        t.$idleBlocked = !1, t.onIdle = function (e, n) {
            return setTimeout((function n() {
                t.$idleBlocked ? setTimeout(n, 100) : e()
            }), n)
        }, t.$idleBlockId = null, t.blockIdle = function (e) {
            t.$idleBlockId && clearTimeout(t.$idleBlockId), t.$idleBlocked = !0, t.$idleBlockId = setTimeout((function () {
                t.$idleBlocked = !1
            }), e || 100)
        }, t.nextFrame = "object" == typeof window && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame), t.nextFrame ? t.nextFrame = t.nextFrame.bind(window) : t.nextFrame = function (e) {
            setTimeout(e, 17)
        }
    })), ace.define("ace/range", ["require", "exports", "module"], (function (e, t, n) {
        var i = function (e, t, n, i) {
            this.start = {row: e, column: t}, this.end = {row: n, column: i}
        };
        (function () {
            this.isEqual = function (e) {
                return this.start.row === e.start.row && this.end.row === e.end.row && this.start.column === e.start.column && this.end.column === e.end.column
            }, this.toString = function () {
                return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]"
            }, this.contains = function (e, t) {
                return 0 == this.compare(e, t)
            }, this.compareRange = function (e) {
                var t, n = e.end, i = e.start;
                return 1 == (t = this.compare(n.row, n.column)) ? 1 == (t = this.compare(i.row, i.column)) ? 2 : 0 == t ? 1 : 0 : -1 == t ? -2 : -1 == (t = this.compare(i.row, i.column)) ? -1 : 1 == t ? 42 : 0
            }, this.comparePoint = function (e) {
                return this.compare(e.row, e.column)
            }, this.containsRange = function (e) {
                return 0 == this.comparePoint(e.start) && 0 == this.comparePoint(e.end)
            }, this.intersects = function (e) {
                var t = this.compareRange(e);
                return -1 == t || 0 == t || 1 == t
            }, this.isEnd = function (e, t) {
                return this.end.row == e && this.end.column == t
            }, this.isStart = function (e, t) {
                return this.start.row == e && this.start.column == t
            }, this.setStart = function (e, t) {
                "object" == typeof e ? (this.start.column = e.column, this.start.row = e.row) : (this.start.row = e, this.start.column = t)
            }, this.setEnd = function (e, t) {
                "object" == typeof e ? (this.end.column = e.column, this.end.row = e.row) : (this.end.row = e, this.end.column = t)
            }, this.inside = function (e, t) {
                return 0 == this.compare(e, t) && !this.isEnd(e, t) && !this.isStart(e, t)
            }, this.insideStart = function (e, t) {
                return 0 == this.compare(e, t) && !this.isEnd(e, t)
            }, this.insideEnd = function (e, t) {
                return 0 == this.compare(e, t) && !this.isStart(e, t)
            }, this.compare = function (e, t) {
                return this.isMultiLine() || e !== this.start.row ? e < this.start.row ? -1 : e > this.end.row ? 1 : this.start.row === e ? t >= this.start.column ? 0 : -1 : this.end.row === e ? t <= this.end.column ? 0 : 1 : 0 : t < this.start.column ? -1 : t > this.end.column ? 1 : 0
            }, this.compareStart = function (e, t) {
                return this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)
            }, this.compareEnd = function (e, t) {
                return this.end.row == e && this.end.column == t ? 1 : this.compare(e, t)
            }, this.compareInside = function (e, t) {
                return this.end.row == e && this.end.column == t ? 1 : this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)
            }, this.clipRows = function (e, t) {
                if (this.end.row > t) var n = {row: t + 1, column: 0}; else this.end.row < e && (n = {
                    row: e,
                    column: 0
                });
                if (this.start.row > t) var s = {row: t + 1, column: 0}; else this.start.row < e && (s = {
                    row: e,
                    column: 0
                });
                return i.fromPoints(s || this.start, n || this.end)
            }, this.extend = function (e, t) {
                var n = this.compare(e, t);
                if (0 == n) return this;
                if (-1 == n) var s = {row: e, column: t}; else var o = {row: e, column: t};
                return i.fromPoints(s || this.start, o || this.end)
            }, this.isEmpty = function () {
                return this.start.row === this.end.row && this.start.column === this.end.column
            }, this.isMultiLine = function () {
                return this.start.row !== this.end.row
            }, this.clone = function () {
                return i.fromPoints(this.start, this.end)
            }, this.collapseRows = function () {
                return 0 == this.end.column ? new i(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new i(this.start.row, 0, this.end.row, 0)
            }, this.toScreenRange = function (e) {
                var t = e.documentToScreenPosition(this.start), n = e.documentToScreenPosition(this.end);
                return new i(t.row, t.column, n.row, n.column)
            }, this.moveBy = function (e, t) {
                this.start.row += e, this.start.column += t, this.end.row += e, this.end.column += t
            }
        }).call(i.prototype), i.fromPoints = function (e, t) {
            return new i(e.row, e.column, t.row, t.column)
        }, i.comparePoints = function (e, t) {
            return e.row - t.row || e.column - t.column
        }, i.comparePoints = function (e, t) {
            return e.row - t.row || e.column - t.column
        }, t.Range = i
    })), ace.define("ace/clipboard", ["require", "exports", "module"], (function (e, t, n) {
        var i;
        n.exports = {
            lineMode: !1, pasteCancelled: function () {
                return !!(i && i > Date.now() - 50) || (i = !1)
            }, cancel: function () {
                i = Date.now()
            }
        }
    })), ace.define("ace/keyboard/textinput", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang", "ace/clipboard", "ace/lib/keys"], (function (e, t, n) {
        var i = e("../lib/event"), s = e("../lib/useragent"), o = e("../lib/dom"), r = e("../lib/lang"),
            a = e("../clipboard"), l = s.isChrome < 18, h = s.isIE, c = s.isChrome > 63, u = 400, d = e("../lib/keys"),
            g = d.KEY_MODS, f = s.isIOS, m = f ? /\s/ : /\n/, p = s.isMobile;
        t.TextInput = function (e, t) {
            var n = o.createElement("textarea");
            n.className = "ace_text-input", n.setAttribute("wrap", "off"), n.setAttribute("autocorrect", "off"), n.setAttribute("autocapitalize", "off"), n.setAttribute("spellcheck", !1), n.style.opacity = "0", e.insertBefore(n, e.firstChild);
            var v = !1, w = !1, $ = !1, b = !1, y = "";
            p || (n.style.fontSize = "1px");
            var x = !1, C = !1, S = "", k = 0, A = 0, L = 0;
            try {
                var R = document.activeElement === n
            } catch (e) {
            }
            this.setAriaOptions = function (e) {
                e.activeDescendant ? (n.setAttribute("aria-haspopup", "true"), n.setAttribute("aria-autocomplete", e.inline ? "both" : "list"), n.setAttribute("aria-activedescendant", e.activeDescendant)) : (n.setAttribute("aria-haspopup", "false"), n.setAttribute("aria-autocomplete", "both"), n.removeAttribute("aria-activedescendant")), e.role && n.setAttribute("role", e.role)
            }, this.setAriaOptions({role: "textbox"}), i.addListener(n, "blur", (function (e) {
                C || (t.onBlur(e), R = !1)
            }), t), i.addListener(n, "focus", (function (e) {
                if (!C) {
                    if (R = !0, s.isEdge) try {
                        if (!document.hasFocus()) return
                    } catch (e) {
                    }
                    t.onFocus(e), s.isEdge ? setTimeout(M) : M()
                }
            }), t), this.$focusScroll = !1, this.focus = function () {
                if (y || c || "browser" == this.$focusScroll) return n.focus({preventScroll: !0});
                var e = n.style.top;
                n.style.position = "fixed", n.style.top = "0px";
                try {
                    var t = 0 != n.getBoundingClientRect().top
                } catch (e) {
                    return
                }
                var i = [];
                if (t) for (var s = n.parentElement; s && 1 == s.nodeType;) i.push(s), s.setAttribute("ace_nocontext", !0), s = !s.parentElement && s.getRootNode ? s.getRootNode().host : s.parentElement;
                n.focus({preventScroll: !0}), t && i.forEach((function (e) {
                    e.removeAttribute("ace_nocontext")
                })), setTimeout((function () {
                    n.style.position = "", "0px" == n.style.top && (n.style.top = e)
                }), 0)
            }, this.blur = function () {
                n.blur()
            }, this.isFocused = function () {
                return R
            }, t.on("beforeEndOperation", (function () {
                var e = t.curOp, i = e && e.command && e.command.name;
                if ("insertstring" != i) {
                    var s = i && (e.docChanged || e.selectionChanged);
                    $ && s && (S = n.value = "", P()), M()
                }
            }));
            var M = f ? function (e) {
                if (R && (!v || e) && !b) {
                    e || (e = "");
                    var i = "\n ab" + e + "cde fg\n";
                    i != n.value && (n.value = S = i);
                    var s = 4 + (e.length || (t.selection.isEmpty() ? 0 : 1));
                    4 == k && A == s || n.setSelectionRange(4, s), k = 4, A = s
                }
            } : function () {
                if (!$ && !b && (R || T)) {
                    $ = !0;
                    var e = 0, i = 0, s = "";
                    if (t.session) {
                        var o = t.selection, r = o.getRange(), a = o.cursor.row;
                        if (e = r.start.column, i = r.end.column, s = t.session.getLine(a), r.start.row != a) {
                            var l = t.session.getLine(a - 1);
                            e = r.start.row < a - 1 ? 0 : e, i += l.length + 1, s = l + "\n" + s
                        } else if (r.end.row != a) {
                            var h = t.session.getLine(a + 1);
                            i = r.end.row > a + 1 ? h.length : i, i += s.length + 1, s = s + "\n" + h
                        } else p && a > 0 && (s = "\n" + s, i += 1, e += 1);
                        s.length > u && (e < u && i < u ? s = s.slice(0, u) : (s = "\n", e == i ? e = i = 0 : (e = 0, i = 1)))
                    }
                    var c = s + "\n\n";
                    if (c != S && (n.value = S = c, k = A = c.length), T && (k = n.selectionStart, A = n.selectionEnd), A != i || k != e || n.selectionEnd != A) try {
                        n.setSelectionRange(e, i), k = e, A = i
                    } catch (e) {
                    }
                    $ = !1
                }
            };
            this.resetSelection = M, R && t.onFocus();
            var E = null;
            this.setInputHandler = function (e) {
                E = e
            }, this.getInputHandler = function () {
                return E
            };
            var T = !1, _ = function (e, i) {
                if (T && (T = !1), w) return M(), e && t.onPaste(e), w = !1, "";
                for (var o = n.selectionStart, r = n.selectionEnd, a = k, l = S.length - A, h = e, c = e.length - o, u = e.length - r, d = 0; a > 0 && S[d] == e[d];) d++, a--;
                for (h = h.slice(d), d = 1; l > 0 && S.length - d > k - 1 && S[S.length - d] == e[e.length - d];) d++, l--;
                c -= d - 1, u -= d - 1;
                var g = h.length - d + 1;
                if (g < 0 && (a = -g, g = 0), h = h.slice(0, g), !(i || h || c || a || l || u)) return "";
                b = !0;
                var f = !1;
                return s.isAndroid && ". " == h && (h = "  ", f = !0), h && !a && !l && !c && !u || x ? t.onTextInput(h) : t.onTextInput(h, {
                    extendLeft: a,
                    extendRight: l,
                    restoreStart: c,
                    restoreEnd: u
                }), b = !1, S = e, k = o, A = r, L = u, f ? "\n" : h
            }, F = function (e) {
                if ($) return D();
                if (e && e.inputType) {
                    if ("historyUndo" == e.inputType) return t.execCommand("undo");
                    if ("historyRedo" == e.inputType) return t.execCommand("redo")
                }
                var i = n.value, s = _(i, !0);
                (i.length > 500 || m.test(s) || p && k < 1 && k == A) && M()
            }, I = function (e, t, n) {
                var i = e.clipboardData || window.clipboardData;
                if (i && !l) {
                    var s = h || n ? "Text" : "text/plain";
                    try {
                        return t ? !1 !== i.setData(s, t) : i.getData(s)
                    } catch (e) {
                        if (!n) return I(e, t, !0)
                    }
                }
            }, O = function (e, s) {
                var o = t.getCopyText();
                if (!o) return i.preventDefault(e);
                I(e, o) ? (f && (M(o), v = o, setTimeout((function () {
                    v = !1
                }), 10)), s ? t.onCut() : t.onCopy(), i.preventDefault(e)) : (v = !0, n.value = o, n.select(), setTimeout((function () {
                    v = !1, M(), s ? t.onCut() : t.onCopy()
                })))
            }, W = function (e) {
                O(e, !0)
            }, B = function (e) {
                O(e, !1)
            }, H = function (e) {
                var o = I(e);
                a.pasteCancelled() || ("string" == typeof o ? (o && t.onPaste(o, e), s.isIE && setTimeout(M), i.preventDefault(e)) : (n.value = "", w = !0))
            };
            i.addCommandKeyListener(n, t.onCommandKey.bind(t), t), i.addListener(n, "select", (function (e) {
                $ || (v ? v = !1 : function (e) {
                    return 0 === e.selectionStart && e.selectionEnd >= S.length && e.value === S && S && e.selectionEnd !== A
                }(n) ? (t.selectAll(), M()) : p && n.selectionStart != k && M())
            }), t), i.addListener(n, "input", F, t), i.addListener(n, "cut", W, t), i.addListener(n, "copy", B, t), i.addListener(n, "paste", H, t), "oncut" in n && "oncopy" in n && "onpaste" in n || i.addListener(e, "keydown", (function (e) {
                if ((!s.isMac || e.metaKey) && e.ctrlKey) switch (e.keyCode) {
                    case 67:
                        B(e);
                        break;
                    case 86:
                        H(e);
                        break;
                    case 88:
                        W(e)
                }
            }), t);
            var D = function () {
                if ($ && t.onCompositionUpdate && !t.$readOnly) {
                    if (x) return N();
                    if ($.useTextareaForIME) t.onCompositionUpdate(n.value); else {
                        var e = n.value;
                        _(e), $.markerRange && ($.context && ($.markerRange.start.column = $.selectionStart = $.context.compositionStartOffset), $.markerRange.end.column = $.markerRange.start.column + A - $.selectionStart + L)
                    }
                }
            }, P = function (e) {
                t.onCompositionEnd && !t.$readOnly && ($ = !1, t.onCompositionEnd(), t.off("mousedown", N), e && F())
            };

            function N() {
                C = !0, n.blur(), n.focus(), C = !1
            }

            var z, V = r.delayedCall(D, 50).schedule.bind(null, null);

            function U() {
                clearTimeout(z), z = setTimeout((function () {
                    y && (n.style.cssText = y, y = ""), t.renderer.$isMousePressed = !1, t.renderer.$keepTextAreaAtCursor && t.renderer.$moveTextAreaToCursor()
                }), 0)
            }

            i.addListener(n, "compositionstart", (function (e) {
                if (!$ && t.onCompositionStart && !t.$readOnly && ($ = {}, !x)) {
                    e.data && ($.useTextareaForIME = !1), setTimeout(D, 0), t._signal("compositionStart"), t.on("mousedown", N);
                    var i = t.getSelectionRange();
                    i.end.row = i.start.row, i.end.column = i.start.column, $.markerRange = i, $.selectionStart = k, t.onCompositionStart($), $.useTextareaForIME ? (S = n.value = "", k = 0, A = 0) : (n.msGetInputContext && ($.context = n.msGetInputContext()), n.getInputContext && ($.context = n.getInputContext()))
                }
            }), t), i.addListener(n, "compositionupdate", D, t), i.addListener(n, "keyup", (function (e) {
                27 == e.keyCode && n.value.length < n.selectionStart && ($ || (S = n.value), k = A = -1, M()), V()
            }), t), i.addListener(n, "keydown", V, t), i.addListener(n, "compositionend", P, t), this.getElement = function () {
                return n
            }, this.setCommandMode = function (e) {
                x = e, n.readOnly = !1
            }, this.setReadOnly = function (e) {
                x || (n.readOnly = e)
            }, this.setCopyWithEmptySelection = function (e) {
            }, this.onContextMenu = function (e) {
                T = !0, M(), t._emit("nativecontextmenu", {target: t, domEvent: e}), this.moveToMouse(e, !0)
            }, this.moveToMouse = function (e, r) {
                y || (y = n.style.cssText), n.style.cssText = (r ? "z-index:100000;" : "") + (s.isIE ? "opacity:0.1;" : "") + "text-indent: -" + (k + A) * t.renderer.characterWidth * .5 + "px;";
                var a = t.container.getBoundingClientRect(), l = o.computedStyle(t.container),
                    h = a.top + (parseInt(l.borderTopWidth) || 0), c = a.left + (parseInt(a.borderLeftWidth) || 0),
                    u = a.bottom - h - n.clientHeight - 2, d = function (e) {
                        o.translate(n, e.clientX - c - 2, Math.min(e.clientY - h - 2, u))
                    };
                d(e), "mousedown" == e.type && (t.renderer.$isMousePressed = !0, clearTimeout(z), s.isWin && i.capture(t.container, d, U))
            }, this.onContextMenuClose = U;
            var G = function (e) {
                t.textInput.onContextMenu(e), U()
            };
            i.addListener(n, "mouseup", G, t), i.addListener(n, "mousedown", (function (e) {
                e.preventDefault(), U()
            }), t), i.addListener(t.renderer.scroller, "contextmenu", G, t), i.addListener(n, "contextmenu", G, t), f && function (e, t, n) {
                var i = null, s = !1;
                n.addEventListener("keydown", (function (e) {
                    i && clearTimeout(i), s = !0
                }), !0), n.addEventListener("keyup", (function (e) {
                    i = setTimeout((function () {
                        s = !1
                    }), 100)
                }), !0);
                var o = function (e) {
                    if (document.activeElement === n && !(s || $ || t.$mouseHandler.isMousePressed || v)) {
                        var i = n.selectionStart, o = n.selectionEnd, r = null, a = 0;
                        if (0 == i ? r = d.up : 1 == i ? r = d.home : o > A && "\n" == S[o] ? r = d.end : i < k && " " == S[i - 1] ? (r = d.left, a = g.option) : i < k || i == k && A != k && i == o ? r = d.left : o > A && S.slice(0, o).split("\n").length > 2 ? r = d.down : o > A && " " == S[o - 1] ? (r = d.right, a = g.option) : (o > A || o == A && A != k && i == o) && (r = d.right), i !== o && (a |= g.shift), r) {
                            if (!t.onCommandKey({}, a, r) && t.commands) {
                                r = d.keyCodeToString(r);
                                var l = t.commands.findKeyCommand(a, r);
                                l && t.execCommand(l)
                            }
                            k = i, A = o, M("")
                        }
                    }
                };
                document.addEventListener("selectionchange", o), t.on("destroy", (function () {
                    document.removeEventListener("selectionchange", o)
                }))
            }(0, t, n), this.destroy = function () {
                n.parentElement && n.parentElement.removeChild(n)
            }
        }, t.$setUserAgentForTests = function (e, t) {
            p = e, f = t
        }
    })), ace.define("ace/mouse/default_handlers", ["require", "exports", "module", "ace/lib/useragent"], (function (e, t, n) {
        var i = e("../lib/useragent");

        function s(e) {
            e.$clickSelection = null;
            var t = e.editor;
            t.setDefaultHandler("mousedown", this.onMouseDown.bind(e)), t.setDefaultHandler("dblclick", this.onDoubleClick.bind(e)), t.setDefaultHandler("tripleclick", this.onTripleClick.bind(e)), t.setDefaultHandler("quadclick", this.onQuadClick.bind(e)), t.setDefaultHandler("mousewheel", this.onMouseWheel.bind(e)), ["select", "startSelect", "selectEnd", "selectAllEnd", "selectByWordsEnd", "selectByLinesEnd", "dragWait", "dragWaitEnd", "focusWait"].forEach((function (t) {
                e[t] = this[t]
            }), this), e.selectByLines = this.extendSelectionBy.bind(e, "getLineRange"), e.selectByWords = this.extendSelectionBy.bind(e, "getWordRange")
        }

        function o(e, t) {
            if (e.start.row == e.end.row) var n = 2 * t.column - e.start.column - e.end.column; else if (e.start.row != e.end.row - 1 || e.start.column || e.end.column) n = 2 * t.row - e.start.row - e.end.row; else var n = t.column - 4;
            return n < 0 ? {cursor: e.start, anchor: e.end} : {cursor: e.end, anchor: e.start}
        }

        (function () {
            this.onMouseDown = function (e) {
                var t = e.inSelection(), n = e.getDocumentPosition();
                this.mousedownEvent = e;
                var s = this.editor, o = e.getButton();
                return 0 !== o ? ((s.getSelectionRange().isEmpty() || 1 == o) && s.selection.moveToPosition(n), void (2 == o && (s.textInput.onContextMenu(e.domEvent), i.isMozilla || e.preventDefault()))) : (this.mousedownEvent.time = Date.now(), !t || s.isFocused() || (s.focus(), !this.$focusTimeout || this.$clickSelection || s.inMultiSelectMode) ? (this.captureMouse(e), this.startSelect(n, e.domEvent._clicks > 1), e.preventDefault()) : (this.setState("focusWait"), void this.captureMouse(e)))
            }, this.startSelect = function (e, t) {
                e = e || this.editor.renderer.screenToTextCoordinates(this.x, this.y);
                var n = this.editor;
                this.mousedownEvent && (this.mousedownEvent.getShiftKey() ? n.selection.selectToPosition(e) : t || n.selection.moveToPosition(e), t || this.select(), n.setStyle("ace_selecting"), this.setState("select"))
            }, this.select = function () {
                var e, t = this.editor, n = t.renderer.screenToTextCoordinates(this.x, this.y);
                if (this.$clickSelection) {
                    var i = this.$clickSelection.comparePoint(n);
                    if (-1 == i) e = this.$clickSelection.end; else if (1 == i) e = this.$clickSelection.start; else {
                        var s = o(this.$clickSelection, n);
                        n = s.cursor, e = s.anchor
                    }
                    t.selection.setSelectionAnchor(e.row, e.column)
                }
                t.selection.selectToPosition(n), t.renderer.scrollCursorIntoView()
            }, this.extendSelectionBy = function (e) {
                var t, n = this.editor, i = n.renderer.screenToTextCoordinates(this.x, this.y),
                    s = n.selection[e](i.row, i.column);
                if (this.$clickSelection) {
                    var r = this.$clickSelection.comparePoint(s.start), a = this.$clickSelection.comparePoint(s.end);
                    if (-1 == r && a <= 0) t = this.$clickSelection.end, s.end.row == i.row && s.end.column == i.column || (i = s.start); else if (1 == a && r >= 0) t = this.$clickSelection.start, s.start.row == i.row && s.start.column == i.column || (i = s.end); else if (-1 == r && 1 == a) i = s.end, t = s.start; else {
                        var l = o(this.$clickSelection, i);
                        i = l.cursor, t = l.anchor
                    }
                    n.selection.setSelectionAnchor(t.row, t.column)
                }
                n.selection.selectToPosition(i), n.renderer.scrollCursorIntoView()
            }, this.selectEnd = this.selectAllEnd = this.selectByWordsEnd = this.selectByLinesEnd = function () {
                this.$clickSelection = null, this.editor.unsetStyle("ace_selecting")
            }, this.focusWait = function () {
                var e, t, n, i,
                    s = (e = this.mousedownEvent.x, t = this.mousedownEvent.y, n = this.x, i = this.y, Math.sqrt(Math.pow(n - e, 2) + Math.pow(i - t, 2))),
                    o = Date.now();
                (s > 0 || o - this.mousedownEvent.time > this.$focusTimeout) && this.startSelect(this.mousedownEvent.getDocumentPosition())
            }, this.onDoubleClick = function (e) {
                var t = e.getDocumentPosition(), n = this.editor, i = n.session.getBracketRange(t);
                i ? (i.isEmpty() && (i.start.column--, i.end.column++), this.setState("select")) : (i = n.selection.getWordRange(t.row, t.column), this.setState("selectByWords")), this.$clickSelection = i, this.select()
            }, this.onTripleClick = function (e) {
                var t = e.getDocumentPosition(), n = this.editor;
                this.setState("selectByLines");
                var i = n.getSelectionRange();
                i.isMultiLine() && i.contains(t.row, t.column) ? (this.$clickSelection = n.selection.getLineRange(i.start.row), this.$clickSelection.end = n.selection.getLineRange(i.end.row).end) : this.$clickSelection = n.selection.getLineRange(t.row), this.select()
            }, this.onQuadClick = function (e) {
                var t = this.editor;
                t.selectAll(), this.$clickSelection = t.getSelectionRange(), this.setState("selectAll")
            }, this.onMouseWheel = function (e) {
                if (!e.getAccelKey()) {
                    e.getShiftKey() && e.wheelY && !e.wheelX && (e.wheelX = e.wheelY, e.wheelY = 0);
                    var t = this.editor;
                    this.$lastScroll || (this.$lastScroll = {t: 0, vx: 0, vy: 0, allowed: 0});
                    var n = this.$lastScroll, i = e.domEvent.timeStamp, s = i - n.t, o = s ? e.wheelX / s : n.vx,
                        r = s ? e.wheelY / s : n.vy;
                    s < 550 && (o = (o + n.vx) / 2, r = (r + n.vy) / 2);
                    var a = Math.abs(o / r), l = !1;
                    return a >= 1 && t.renderer.isScrollableBy(e.wheelX * e.speed, 0) && (l = !0), a <= 1 && t.renderer.isScrollableBy(0, e.wheelY * e.speed) && (l = !0), l ? n.allowed = i : i - n.allowed < 550 && (Math.abs(o) <= 1.5 * Math.abs(n.vx) && Math.abs(r) <= 1.5 * Math.abs(n.vy) ? (l = !0, n.allowed = i) : n.allowed = 0), n.t = i, n.vx = o, n.vy = r, l ? (t.renderer.scrollBy(e.wheelX * e.speed, e.wheelY * e.speed), e.stop()) : void 0
                }
            }
        }).call(s.prototype), t.DefaultHandlers = s
    })), ace.define("ace/tooltip", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom"], (function (e, t, n) {
        e("./lib/oop");
        var i = e("./lib/dom"), s = "ace_tooltip";

        function o(e) {
            this.isOpen = !1, this.$element = null, this.$parentNode = e
        }

        (function () {
            this.$init = function () {
                return this.$element = i.createElement("div"), this.$element.className = s, this.$element.style.display = "none", this.$parentNode.appendChild(this.$element), this.$element
            }, this.getElement = function () {
                return this.$element || this.$init()
            }, this.setText = function (e) {
                this.getElement().textContent = e
            }, this.setHtml = function (e) {
                this.getElement().innerHTML = e
            }, this.setPosition = function (e, t) {
                this.getElement().style.left = e + "px", this.getElement().style.top = t + "px"
            }, this.setClassName = function (e) {
                i.addCssClass(this.getElement(), e)
            }, this.show = function (e, t, n) {
                null != e && this.setText(e), null != t && null != n && this.setPosition(t, n), this.isOpen || (this.getElement().style.display = "block", this.isOpen = !0)
            }, this.hide = function () {
                this.isOpen && (this.getElement().style.display = "none", this.getElement().className = s, this.isOpen = !1)
            }, this.getHeight = function () {
                return this.getElement().offsetHeight
            }, this.getWidth = function () {
                return this.getElement().offsetWidth
            }, this.destroy = function () {
                this.isOpen = !1, this.$element && this.$element.parentNode && this.$element.parentNode.removeChild(this.$element)
            }
        }).call(o.prototype), t.Tooltip = o
    })), ace.define("ace/mouse/default_gutter_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event", "ace/tooltip"], (function (e, t, n) {
        var i = e("../lib/dom"), s = e("../lib/oop"), o = e("../lib/event"), r = e("../tooltip").Tooltip;

        function a(e) {
            r.call(this, e)
        }

        s.inherits(a, r), function () {
            this.setPosition = function (e, t) {
                var n = window.innerWidth || document.documentElement.clientWidth,
                    i = window.innerHeight || document.documentElement.clientHeight, s = this.getWidth(),
                    o = this.getHeight();
                (e += 15) + s > n && (e -= e + s - n), (t += 15) + o > i && (t -= 20 + o), r.prototype.setPosition.call(this, e, t)
            }
        }.call(a.prototype), t.GutterHandler = function (e) {
            var t, n, s, r = e.editor, l = r.renderer.$gutterLayer, h = new a(r.container);

            function c() {
                t && (t = clearTimeout(t)), s && (h.hide(), s = null, r._signal("hideGutterTooltip", h), r.off("mousewheel", c))
            }

            function u(e) {
                h.setPosition(e.x, e.y)
            }

            e.editor.setDefaultHandler("guttermousedown", (function (t) {
                if (r.isFocused() && 0 == t.getButton() && "foldWidgets" != l.getRegion(t)) {
                    var n = t.getDocumentPosition().row, i = r.session.selection;
                    if (t.getShiftKey()) i.selectTo(n, 0); else {
                        if (2 == t.domEvent.detail) return r.selectAll(), t.preventDefault();
                        e.$clickSelection = r.selection.getLineRange(n)
                    }
                    return e.setState("selectByLines"), e.captureMouse(t), t.preventDefault()
                }
            })), e.editor.setDefaultHandler("guttermousemove", (function (o) {
                var a = o.domEvent.target || o.domEvent.srcElement;
                if (i.hasCssClass(a, "ace_fold-widget")) return c();
                s && e.$tooltipFollowsMouse && u(o), n = o, t || (t = setTimeout((function () {
                    t = null, n && !e.isMousePressed ? function () {
                        var t = n.getDocumentPosition().row, i = l.$annotations[t];
                        if (!i) return c();
                        if (t == r.session.getLength()) {
                            var o = r.renderer.pixelToScreenCoordinates(0, n.y).row, a = n.$pos;
                            if (o > r.session.documentToScreenRow(a.row, a.column)) return c()
                        }
                        if (s != i) {
                            s = i.text.join("<br/>"), h.setHtml(s);
                            var d = i.className;
                            if (d && h.setClassName(d.trim()), h.show(), r._signal("showGutterTooltip", h), r.on("mousewheel", c), e.$tooltipFollowsMouse) u(n); else {
                                var g = n.domEvent.target.getBoundingClientRect(), f = h.getElement().style;
                                f.left = g.right + "px", f.top = g.bottom + "px"
                            }
                        }
                    }() : c()
                }), 50))
            })), o.addListener(r.renderer.$gutter, "mouseout", (function (e) {
                n = null, s && !t && (t = setTimeout((function () {
                    t = null, c()
                }), 50))
            }), r), r.on("changeSession", c)
        }
    })), ace.define("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], (function (e, t, n) {
        var i = e("../lib/event"), s = e("../lib/useragent"), o = t.MouseEvent = function (e, t) {
            this.domEvent = e, this.editor = t, this.x = this.clientX = e.clientX, this.y = this.clientY = e.clientY, this.$pos = null, this.$inSelection = null, this.propagationStopped = !1, this.defaultPrevented = !1
        };
        (function () {
            this.stopPropagation = function () {
                i.stopPropagation(this.domEvent), this.propagationStopped = !0
            }, this.preventDefault = function () {
                i.preventDefault(this.domEvent), this.defaultPrevented = !0
            }, this.stop = function () {
                this.stopPropagation(), this.preventDefault()
            }, this.getDocumentPosition = function () {
                return this.$pos || (this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY)), this.$pos
            }, this.inSelection = function () {
                if (null !== this.$inSelection) return this.$inSelection;
                var e = this.editor.getSelectionRange();
                if (e.isEmpty()) this.$inSelection = !1; else {
                    var t = this.getDocumentPosition();
                    this.$inSelection = e.contains(t.row, t.column)
                }
                return this.$inSelection
            }, this.getButton = function () {
                return i.getButton(this.domEvent)
            }, this.getShiftKey = function () {
                return this.domEvent.shiftKey
            }, this.getAccelKey = s.isMac ? function () {
                return this.domEvent.metaKey
            } : function () {
                return this.domEvent.ctrlKey
            }
        }).call(o.prototype)
    })), ace.define("ace/mouse/dragdrop_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], (function (e, t, n) {
        var i = e("../lib/dom"), s = e("../lib/event"), o = e("../lib/useragent");

        function r(e) {
            var t = e.editor, n = i.createElement("div");
            n.style.cssText = "top:-100px;position:absolute;z-index:2147483647;opacity:0.5", n.textContent = " ", ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd", "onMouseDrag"].forEach((function (t) {
                e[t] = this[t]
            }), this), t.on("mousedown", this.onMouseDown.bind(e));
            var r, l, h, c, u, d, g, f, m, p, v, w = t.container, $ = 0;

            function b() {
                var e = d;
                (function (e, n) {
                    var i = Date.now(), s = !n || e.row != n.row, o = !n || e.column != n.column;
                    !p || s || o ? (t.moveCursorToPosition(e), p = i, v = {
                        x: l,
                        y: h
                    }) : a(v.x, v.y, l, h) > 5 ? p = null : i - p >= 200 && (t.renderer.scrollCursorIntoView(), p = null)
                })(d = t.renderer.screenToTextCoordinates(l, h), e), function (e, n) {
                    var i = Date.now(), s = t.renderer.layerConfig.lineHeight,
                        o = t.renderer.layerConfig.characterWidth, r = t.renderer.scroller.getBoundingClientRect(),
                        a = {x: {left: l - r.left, right: r.right - l}, y: {top: h - r.top, bottom: r.bottom - h}},
                        c = Math.min(a.x.left, a.x.right), u = Math.min(a.y.top, a.y.bottom),
                        d = {row: e.row, column: e.column};
                    c / o <= 2 && (d.column += a.x.left < a.x.right ? -3 : 2), u / s <= 1 && (d.row += a.y.top < a.y.bottom ? -1 : 1);
                    var g = e.row != d.row, f = e.column != d.column, p = !n || e.row != n.row;
                    g || f && !p ? m ? i - m >= 200 && t.renderer.scrollCursorIntoView(d) : m = i : m = null
                }(d, e)
            }

            function y() {
                u = t.selection.toOrientedRange(), r = t.session.addMarker(u, "ace_selection", t.getSelectionStyle()), t.clearSelection(), t.isFocused() && t.renderer.$cursorLayer.setBlinking(!1), clearInterval(c), b(), c = setInterval(b, 20), $ = 0, s.addListener(document, "mousemove", S)
            }

            function x() {
                clearInterval(c), t.session.removeMarker(r), r = null, t.selection.fromOrientedRange(u), t.isFocused() && !f && t.$resetCursorStyle(), u = null, d = null, $ = 0, m = null, p = null, s.removeListener(document, "mousemove", S)
            }

            this.onDragStart = function (e) {
                if (this.cancelDrag || !w.draggable) {
                    var i = this;
                    return setTimeout((function () {
                        i.startSelect(), i.captureMouse(e)
                    }), 0), e.preventDefault()
                }
                u = t.getSelectionRange();
                var s = e.dataTransfer;
                s.effectAllowed = t.getReadOnly() ? "copy" : "copyMove", t.container.appendChild(n), s.setDragImage && s.setDragImage(n, 0, 0), setTimeout((function () {
                    t.container.removeChild(n)
                })), s.clearData(), s.setData("Text", t.session.getTextRange()), f = !0, this.setState("drag")
            }, this.onDragEnd = function (e) {
                if (w.draggable = !1, f = !1, this.setState(null), !t.getReadOnly()) {
                    var n = e.dataTransfer.dropEffect;
                    g || "move" != n || t.session.remove(t.getSelectionRange()), t.$resetCursorStyle()
                }
                this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle("")
            }, this.onDragEnter = function (e) {
                if (!t.getReadOnly() && k(e.dataTransfer)) return l = e.clientX, h = e.clientY, r || y(), $++, e.dataTransfer.dropEffect = g = A(e), s.preventDefault(e)
            }, this.onDragOver = function (e) {
                if (!t.getReadOnly() && k(e.dataTransfer)) return l = e.clientX, h = e.clientY, r || (y(), $++), null !== C && (C = null), e.dataTransfer.dropEffect = g = A(e), s.preventDefault(e)
            }, this.onDragLeave = function (e) {
                if (--$ <= 0 && r) return x(), g = null, s.preventDefault(e)
            }, this.onDrop = function (e) {
                if (d) {
                    var n = e.dataTransfer;
                    if (f) switch (g) {
                        case"move":
                            u = u.contains(d.row, d.column) ? {start: d, end: d} : t.moveText(u, d);
                            break;
                        case"copy":
                            u = t.moveText(u, d, !0)
                    } else {
                        var i = n.getData("Text");
                        u = {start: d, end: t.session.insert(d, i)}, t.focus(), g = null
                    }
                    return x(), s.preventDefault(e)
                }
            }, s.addListener(w, "dragstart", this.onDragStart.bind(e), t), s.addListener(w, "dragend", this.onDragEnd.bind(e), t), s.addListener(w, "dragenter", this.onDragEnter.bind(e), t), s.addListener(w, "dragover", this.onDragOver.bind(e), t), s.addListener(w, "dragleave", this.onDragLeave.bind(e), t), s.addListener(w, "drop", this.onDrop.bind(e), t);
            var C = null;

            function S() {
                null == C && (C = setTimeout((function () {
                    null != C && r && x()
                }), 20))
            }

            function k(e) {
                var t = e.types;
                return !t || Array.prototype.some.call(t, (function (e) {
                    return "text/plain" == e || "Text" == e
                }))
            }

            function A(e) {
                var t = ["copy", "copymove", "all", "uninitialized"], n = o.isMac ? e.altKey : e.ctrlKey,
                    i = "uninitialized";
                try {
                    i = e.dataTransfer.effectAllowed.toLowerCase()
                } catch (e) {
                }
                var s = "none";
                return n && t.indexOf(i) >= 0 ? s = "copy" : ["move", "copymove", "linkmove", "all", "uninitialized"].indexOf(i) >= 0 ? s = "move" : t.indexOf(i) >= 0 && (s = "copy"), s
            }
        }

        function a(e, t, n, i) {
            return Math.sqrt(Math.pow(n - e, 2) + Math.pow(i - t, 2))
        }

        (function () {
            this.dragWait = function () {
                Date.now() - this.mousedownEvent.time > this.editor.getDragDelay() && this.startDrag()
            }, this.dragWaitEnd = function () {
                this.editor.container.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()), this.selectEnd()
            }, this.dragReadyEnd = function (e) {
                this.editor.$resetCursorStyle(), this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle(""), this.dragWaitEnd()
            }, this.startDrag = function () {
                this.cancelDrag = !1;
                var e = this.editor;
                e.container.draggable = !0, e.renderer.$cursorLayer.setBlinking(!1), e.setStyle("ace_dragging");
                var t = o.isWin ? "default" : "move";
                e.renderer.setCursorStyle(t), this.setState("dragReady")
            }, this.onMouseDrag = function (e) {
                var t = this.editor.container;
                o.isIE && "dragReady" == this.state && a(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y) > 3 && t.dragDrop(), "dragWait" === this.state && a(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y) > 0 && (t.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()))
            }, this.onMouseDown = function (e) {
                if (this.$dragEnabled) {
                    this.mousedownEvent = e;
                    var t = this.editor, n = e.inSelection(), i = e.getButton();
                    if (1 === (e.domEvent.detail || 1) && 0 === i && n) {
                        if (e.editor.inMultiSelectMode && (e.getAccelKey() || e.getShiftKey())) return;
                        this.mousedownEvent.time = Date.now();
                        var s = e.domEvent.target || e.domEvent.srcElement;
                        "unselectable" in s && (s.unselectable = "on"), t.getDragDelay() ? (o.isWebKit && (this.cancelDrag = !0, t.container.draggable = !0), this.setState("dragWait")) : this.startDrag(), this.captureMouse(e, this.onMouseDrag.bind(this)), e.defaultPrevented = !0
                    }
                }
            }
        }).call(r.prototype), t.DragdropHandler = r
    })), ace.define("ace/mouse/touch_handler", ["require", "exports", "module", "ace/mouse/mouse_event", "ace/lib/event", "ace/lib/dom"], (function (e, t, n) {
        var i = e("./mouse_event").MouseEvent, s = e("../lib/event"), o = e("../lib/dom");
        t.addTouchListeners = function (e, t) {
            var n, r, a, l, h, c, u, d, g, f = "scroll", m = 0, p = 0, v = 0, w = 0;

            function $() {
                var e = window.navigator && window.navigator.clipboard, n = !1, i = function (i) {
                    var s, r, a = i.target.getAttribute("action");
                    if ("more" == a || !n) return n = !n, s = t.getCopyText(), r = t.session.getUndoManager().hasUndo(), void g.replaceChild(o.buildDom(n ? ["span", !s && ["span", {
                        class: "ace_mobile-button",
                        action: "selectall"
                    }, "Select All"], s && ["span", {
                        class: "ace_mobile-button",
                        action: "copy"
                    }, "Copy"], s && ["span", {
                        class: "ace_mobile-button",
                        action: "cut"
                    }, "Cut"], e && ["span", {
                        class: "ace_mobile-button",
                        action: "paste"
                    }, "Paste"], r && ["span", {
                        class: "ace_mobile-button",
                        action: "undo"
                    }, "Undo"], ["span", {
                        class: "ace_mobile-button",
                        action: "find"
                    }, "Find"], ["span", {
                        class: "ace_mobile-button",
                        action: "openCommandPallete"
                    }, "Palette"]] : ["span"]), g.firstChild);
                    "paste" == a ? e.readText().then((function (e) {
                        t.execCommand(a, e)
                    })) : a && ("cut" != a && "copy" != a || (e ? e.writeText(t.getCopyText()) : document.execCommand("copy")), t.execCommand(a)), g.firstChild.style.display = "none", n = !1, "openCommandPallete" != a && t.focus()
                };
                g = o.buildDom(["div", {
                    class: "ace_mobile-menu", ontouchstart: function (e) {
                        f = "menu", e.stopPropagation(), e.preventDefault(), t.textInput.focus()
                    }, ontouchend: function (e) {
                        e.stopPropagation(), e.preventDefault(), i(e)
                    }, onclick: i
                }, ["span"], ["span", {class: "ace_mobile-button", action: "more"}, "..."]], t.container)
            }

            function b() {
                g || $();
                var e = t.selection.cursor, n = t.renderer.textToScreenCoordinates(e.row, e.column),
                    i = t.renderer.textToScreenCoordinates(0, 0).pageX, s = t.renderer.scrollLeft,
                    o = t.container.getBoundingClientRect();
                g.style.top = n.pageY - o.top - 3 + "px", n.pageX - o.left < o.width - 70 ? (g.style.left = "", g.style.right = "10px") : (g.style.right = "", g.style.left = i + s - o.left + "px"), g.style.display = "", g.firstChild.style.display = "none", t.on("input", y)
            }

            function y(e) {
                g && (g.style.display = "none"), t.off("input", y)
            }

            function x() {
                h = null, clearTimeout(h);
                var e = t.selection.getRange(), n = e.contains(u.row, u.column);
                !e.isEmpty() && n || (t.selection.moveToPosition(u), t.selection.selectWord()), f = "wait", b()
            }

            s.addListener(e, "contextmenu", (function (e) {
                d && t.textInput.getElement().focus()
            }), t), s.addListener(e, "touchstart", (function (e) {
                var s = e.touches;
                if (h || s.length > 1) return clearTimeout(h), h = null, a = -1, void (f = "zoom");
                d = t.$mouseHandler.isMousePressed = !0;
                var o = t.renderer.layerConfig.lineHeight, c = t.renderer.layerConfig.lineHeight, g = e.timeStamp;
                l = g;
                var $ = s[0], b = $.clientX, y = $.clientY;
                Math.abs(n - b) + Math.abs(r - y) > o && (a = -1), n = e.clientX = b, r = e.clientY = y, v = w = 0;
                var C = new i(e, t);
                if (u = C.getDocumentPosition(), g - a < 500 && 1 == s.length && !m) p++, e.preventDefault(), e.button = 0, function () {
                    h = null, clearTimeout(h), t.selection.moveToPosition(u);
                    var e = p >= 2 ? t.selection.getLineRange(u.row) : t.session.getBracketRange(u);
                    e && !e.isEmpty() ? t.selection.setRange(e) : t.selection.selectWord(), f = "wait"
                }(); else {
                    p = 0;
                    var S = t.selection.cursor, k = t.selection.isEmpty() ? S : t.selection.anchor,
                        A = t.renderer.$cursorLayer.getPixelPosition(S, !0),
                        L = t.renderer.$cursorLayer.getPixelPosition(k, !0),
                        R = t.renderer.scroller.getBoundingClientRect(), M = t.renderer.layerConfig.offset,
                        E = t.renderer.scrollLeft, T = function (e, t) {
                            return (e /= c) * e + (t = t / o - .75) * t
                        };
                    if (e.clientX < R.left) return void (f = "zoom");
                    var _ = T(e.clientX - R.left - A.left + E, e.clientY - R.top - A.top + M),
                        F = T(e.clientX - R.left - L.left + E, e.clientY - R.top - L.top + M);
                    _ < 3.5 && F < 3.5 && (f = _ > F ? "cursor" : "anchor"), f = F < 3.5 ? "anchor" : _ < 3.5 ? "cursor" : "scroll", h = setTimeout(x, 450)
                }
                a = g
            }), t), s.addListener(e, "touchend", (function (e) {
                d = t.$mouseHandler.isMousePressed = !1, c && clearInterval(c), "zoom" == f ? (f = "", m = 0) : h ? (t.selection.moveToPosition(u), m = 0, b()) : "scroll" == f ? (m += 60, c = setInterval((function () {
                    m-- <= 0 && (clearInterval(c), c = null), Math.abs(v) < .01 && (v = 0), Math.abs(w) < .01 && (w = 0), m < 20 && (v *= .9), m < 20 && (w *= .9);
                    var e = t.session.getScrollTop();
                    t.renderer.scrollBy(10 * v, 10 * w), e == t.session.getScrollTop() && (m = 0)
                }), 10), y()) : b(), clearTimeout(h), h = null
            }), t), s.addListener(e, "touchmove", (function (e) {
                h && (clearTimeout(h), h = null);
                var s = e.touches;
                if (!(s.length > 1 || "zoom" == f)) {
                    var o = s[0], a = n - o.clientX, c = r - o.clientY;
                    if ("wait" == f) {
                        if (!(a * a + c * c > 4)) return e.preventDefault();
                        f = "cursor"
                    }
                    n = o.clientX, r = o.clientY, e.clientX = o.clientX, e.clientY = o.clientY;
                    var u = e.timeStamp, d = u - l;
                    if (l = u, "scroll" == f) {
                        var g = new i(e, t);
                        g.speed = 1, g.wheelX = a, g.wheelY = c, 10 * Math.abs(a) < Math.abs(c) && (a = 0), 10 * Math.abs(c) < Math.abs(a) && (c = 0), 0 != d && (v = a / d, w = c / d), t._emit("mousewheel", g), g.propagationStopped || (v = w = 0)
                    } else {
                        var m = new i(e, t).getDocumentPosition();
                        "cursor" == f ? t.selection.moveCursorToPosition(m) : "anchor" == f && t.selection.setSelectionAnchor(m.row, m.column), t.renderer.scrollCursorIntoView(m), e.preventDefault()
                    }
                }
            }), t)
        }
    })), ace.define("ace/mouse/mouse_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/mouse/default_handlers", "ace/mouse/default_gutter_handler", "ace/mouse/mouse_event", "ace/mouse/dragdrop_handler", "ace/mouse/touch_handler", "ace/config"], (function (e, t, n) {
        var i = e("../lib/event"), s = e("../lib/useragent"), o = e("./default_handlers").DefaultHandlers,
            r = e("./default_gutter_handler").GutterHandler, a = e("./mouse_event").MouseEvent,
            l = e("./dragdrop_handler").DragdropHandler, h = e("./touch_handler").addTouchListeners, c = e("../config"),
            u = function (e) {
                var t = this;
                this.editor = e, new o(this), new r(this), new l(this);
                var n = function (t) {
                    (!document.hasFocus || !document.hasFocus() || !e.isFocused() && document.activeElement == (e.textInput && e.textInput.getElement())) && window.focus(), e.focus(), setTimeout((function () {
                        e.isFocused() || e.focus()
                    }))
                }, a = e.renderer.getMouseEventTarget();
                i.addListener(a, "click", this.onMouseEvent.bind(this, "click"), e), i.addListener(a, "mousemove", this.onMouseMove.bind(this, "mousemove"), e), i.addMultiMouseDownListener([a, e.renderer.scrollBarV && e.renderer.scrollBarV.inner, e.renderer.scrollBarH && e.renderer.scrollBarH.inner, e.textInput && e.textInput.getElement()].filter(Boolean), [400, 300, 250], this, "onMouseEvent", e), i.addMouseWheelListener(e.container, this.onMouseWheel.bind(this, "mousewheel"), e), h(e.container, e);
                var c = e.renderer.$gutter;
                i.addListener(c, "mousedown", this.onMouseEvent.bind(this, "guttermousedown"), e), i.addListener(c, "click", this.onMouseEvent.bind(this, "gutterclick"), e), i.addListener(c, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick"), e), i.addListener(c, "mousemove", this.onMouseEvent.bind(this, "guttermousemove"), e), i.addListener(a, "mousedown", n, e), i.addListener(c, "mousedown", n, e), s.isIE && e.renderer.scrollBarV && (i.addListener(e.renderer.scrollBarV.element, "mousedown", n, e), i.addListener(e.renderer.scrollBarH.element, "mousedown", n, e)), e.on("mousemove", (function (n) {
                    if (!t.state && !t.$dragDelay && t.$dragEnabled) {
                        var i = e.renderer.screenToTextCoordinates(n.x, n.y), s = e.session.selection.getRange(),
                            o = e.renderer;
                        !s.isEmpty() && s.insideStart(i.row, i.column) ? o.setCursorStyle("default") : o.setCursorStyle("")
                    }
                }), e)
            };
        (function () {
            this.onMouseEvent = function (e, t) {
                this.editor.session && this.editor._emit(e, new a(t, this.editor))
            }, this.onMouseMove = function (e, t) {
                var n = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
                n && n.length && this.editor._emit(e, new a(t, this.editor))
            }, this.onMouseWheel = function (e, t) {
                var n = new a(t, this.editor);
                n.speed = 2 * this.$scrollSpeed, n.wheelX = t.wheelX, n.wheelY = t.wheelY, this.editor._emit(e, n)
            }, this.setState = function (e) {
                this.state = e
            }, this.captureMouse = function (e, t) {
                this.x = e.x, this.y = e.y, this.isMousePressed = !0;
                var n = this.editor, o = this.editor.renderer;
                o.$isMousePressed = !0;
                var r = this, l = function (e) {
                    if (e) {
                        if (s.isWebKit && !e.which && r.releaseMouse) return r.releaseMouse();
                        r.x = e.clientX, r.y = e.clientY, t && t(e), r.mouseEvent = new a(e, r.editor), r.$mouseMoved = !0
                    }
                }, h = function (e) {
                    n.off("beforeEndOperation", u), clearInterval(d), n.session && c(), r[r.state + "End"] && r[r.state + "End"](e), r.state = "", r.isMousePressed = o.$isMousePressed = !1, o.$keepTextAreaAtCursor && o.$moveTextAreaToCursor(), r.$onCaptureMouseMove = r.releaseMouse = null, e && r.onMouseEvent("mouseup", e), n.endOperation()
                }, c = function () {
                    r[r.state] && r[r.state](), r.$mouseMoved = !1
                };
                if (s.isOldIE && "dblclick" == e.domEvent.type) return setTimeout((function () {
                    h(e)
                }));
                var u = function (e) {
                    r.releaseMouse && n.curOp.command.name && n.curOp.selectionChanged && (r[r.state + "End"] && r[r.state + "End"](), r.state = "", r.releaseMouse())
                };
                n.on("beforeEndOperation", u), n.startOperation({command: {name: "mouse"}}), r.$onCaptureMouseMove = l, r.releaseMouse = i.capture(this.editor.container, l, h);
                var d = setInterval(c, 20)
            }, this.releaseMouse = null, this.cancelContextMenu = function () {
                var e = function (t) {
                    t && t.domEvent && "contextmenu" != t.domEvent.type || (this.editor.off("nativecontextmenu", e), t && t.domEvent && i.stopEvent(t.domEvent))
                }.bind(this);
                setTimeout(e, 10), this.editor.on("nativecontextmenu", e)
            }, this.destroy = function () {
                this.releaseMouse && this.releaseMouse()
            }
        }).call(u.prototype), c.defineOptions(u.prototype, "mouseHandler", {
            scrollSpeed: {initialValue: 2},
            dragDelay: {initialValue: s.isMac ? 150 : 0},
            dragEnabled: {initialValue: !0},
            focusTimeout: {initialValue: 0},
            tooltipFollowsMouse: {initialValue: !0}
        }), t.MouseHandler = u
    })), ace.define("ace/mouse/fold_handler", ["require", "exports", "module", "ace/lib/dom"], (function (e, t, n) {
        var i = e("../lib/dom");
        t.FoldHandler = function (e) {
            e.on("click", (function (t) {
                var n = t.getDocumentPosition(), s = e.session, o = s.getFoldAt(n.row, n.column, 1);
                o && (t.getAccelKey() ? s.removeFold(o) : s.expandFold(o), t.stop());
                var r = t.domEvent && t.domEvent.target;
                r && i.hasCssClass(r, "ace_inline_button") && i.hasCssClass(r, "ace_toggle_wrap") && (s.setOption("wrap", !s.getUseWrapMode()), e.renderer.scrollCursorIntoView())
            })), e.on("gutterclick", (function (t) {
                if ("foldWidgets" == e.renderer.$gutterLayer.getRegion(t)) {
                    var n = t.getDocumentPosition().row, i = e.session;
                    i.foldWidgets && i.foldWidgets[n] && e.session.onFoldWidgetClick(n, t), e.isFocused() || e.focus(), t.stop()
                }
            })), e.on("gutterdblclick", (function (t) {
                if ("foldWidgets" == e.renderer.$gutterLayer.getRegion(t)) {
                    var n = t.getDocumentPosition().row, i = e.session, s = i.getParentFoldRangeData(n, !0),
                        o = s.range || s.firstRange;
                    if (o) {
                        n = o.start.row;
                        var r = i.getFoldAt(n, i.getLine(n).length, 1);
                        r ? i.removeFold(r) : (i.addFold("...", o), e.renderer.scrollCursorIntoView({
                            row: o.start.row,
                            column: 0
                        }))
                    }
                    t.stop()
                }
            }))
        }
    })), ace.define("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"], (function (e, t, n) {
        var i = e("../lib/keys"), s = e("../lib/event"), o = function (e) {
            this.$editor = e, this.$data = {editor: e}, this.$handlers = [], this.setDefaultHandler(e.commands)
        };
        (function () {
            this.setDefaultHandler = function (e) {
                this.removeKeyboardHandler(this.$defaultHandler), this.$defaultHandler = e, this.addKeyboardHandler(e, 0)
            }, this.setKeyboardHandler = function (e) {
                var t = this.$handlers;
                if (t[t.length - 1] != e) {
                    for (; t[t.length - 1] && t[t.length - 1] != this.$defaultHandler;) this.removeKeyboardHandler(t[t.length - 1]);
                    this.addKeyboardHandler(e, 1)
                }
            }, this.addKeyboardHandler = function (e, t) {
                if (e) {
                    "function" != typeof e || e.handleKeyboard || (e.handleKeyboard = e);
                    var n = this.$handlers.indexOf(e);
                    -1 != n && this.$handlers.splice(n, 1), null == t ? this.$handlers.push(e) : this.$handlers.splice(t, 0, e), -1 == n && e.attach && e.attach(this.$editor)
                }
            }, this.removeKeyboardHandler = function (e) {
                var t = this.$handlers.indexOf(e);
                return -1 != t && (this.$handlers.splice(t, 1), e.detach && e.detach(this.$editor), !0)
            }, this.getKeyboardHandler = function () {
                return this.$handlers[this.$handlers.length - 1]
            }, this.getStatusText = function () {
                var e = this.$data, t = e.editor;
                return this.$handlers.map((function (n) {
                    return n.getStatusText && n.getStatusText(t, e) || ""
                })).filter(Boolean).join(" ")
            }, this.$callKeyboardHandlers = function (e, t, n, i) {
                for (var o, r = !1, a = this.$editor.commands, l = this.$handlers.length; l-- && !((o = this.$handlers[l].handleKeyboard(this.$data, e, t, n, i)) && o.command && ((r = "null" == o.command || a.exec(o.command, this.$editor, o.args, i)) && i && -1 != e && 1 != o.passEvent && 1 != o.command.passEvent && s.stopEvent(i), r));) ;
                return r || -1 != e || (o = {command: "insertstring"}, r = a.exec("insertstring", this.$editor, t)), r && this.$editor._signal && this.$editor._signal("keyboardActivity", o), r
            }, this.onCommandKey = function (e, t, n) {
                var s = i.keyCodeToString(n);
                return this.$callKeyboardHandlers(t, s, n, e)
            }, this.onTextInput = function (e) {
                return this.$callKeyboardHandlers(-1, e)
            }
        }).call(o.prototype), t.KeyBinding = o
    })), ace.define("ace/lib/bidiutil", ["require", "exports", "module"], (function (e, t, n) {
        var i = 0, s = 0, o = !1, r = !1, a = !1,
            l = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]],
            h = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], c = 0,
            u = 1, d = 2, g = 3, f = 4, m = 5, p = 6, v = 7, w = 8, $ = 9, b = 10, y = 11, x = 12, C = 13, S = 14,
            k = 15, A = 16, L = 17, R = 18,
            M = [R, R, R, R, R, R, R, R, R, p, m, p, w, m, R, R, R, R, R, R, R, R, R, R, R, R, R, R, m, m, m, p, w, f, f, y, y, y, f, f, f, f, f, b, $, b, $, $, d, d, d, d, d, d, d, d, d, d, $, f, f, f, f, f, f, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, f, f, f, f, f, f, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, f, f, f, f, R, R, R, R, R, R, m, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, $, f, y, y, y, y, f, f, f, f, c, f, f, R, f, f, y, y, d, d, f, c, f, f, f, d, c, f, f, f, f, f],
            E = [w, w, w, w, w, w, w, w, w, w, w, R, R, R, c, u, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, w, m, C, S, k, A, L, $, y, y, y, y, y, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, $, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, w];

        function T(e, t, n) {
            if (!(s < e)) if (1 != e || 1 != i || r) for (var o, a, l, h, c = n.length, u = 0; u < c;) {
                if (t[u] >= e) {
                    for (o = u + 1; o < c && t[o] >= e;) o++;
                    for (a = u, l = o - 1; a < l; a++, l--) h = n[a], n[a] = n[l], n[l] = h;
                    u = o
                }
                u++
            } else n.reverse()
        }

        function _(e, t, n, s) {
            var l, h, M, E, T = t[s];
            switch (T) {
                case c:
                case u:
                    o = !1;
                case f:
                case g:
                    return T;
                case d:
                    return o ? g : d;
                case v:
                    return o = !0, u;
                case w:
                    return f;
                case $:
                    return s < 1 || s + 1 >= t.length || (l = n[s - 1]) != d && l != g || (h = t[s + 1]) != d && h != g ? f : (o && (h = g), h == l ? h : f);
                case b:
                    return (l = s > 0 ? n[s - 1] : m) == d && s + 1 < t.length && t[s + 1] == d ? d : f;
                case y:
                    if (s > 0 && n[s - 1] == d) return d;
                    if (o) return f;
                    for (E = s + 1, M = t.length; E < M && t[E] == y;) E++;
                    return E < M && t[E] == d ? d : f;
                case x:
                    for (M = t.length, E = s + 1; E < M && t[E] == x;) E++;
                    if (E < M) {
                        var _ = e[s], F = _ >= 1425 && _ <= 2303 || 64286 == _;
                        if (l = t[E], F && (l == u || l == v)) return u
                    }
                    return s < 1 || (l = t[s - 1]) == m ? f : n[s - 1];
                case m:
                    return o = !1, r = !0, i;
                case p:
                    return a = !0, f;
                case C:
                case S:
                case A:
                case L:
                case k:
                    o = !1;
                case R:
                    return f
            }
        }

        function F(e) {
            var t = e.charCodeAt(0), n = t >> 8;
            return 0 == n ? t > 191 ? c : M[t] : 5 == n ? /[\u0591-\u05f4]/.test(e) ? u : c : 6 == n ? /[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(e) ? x : /[\u0660-\u0669\u066b-\u066c]/.test(e) ? g : 1642 == t ? y : /[\u06f0-\u06f9]/.test(e) ? d : v : 32 == n && t <= 8287 ? E[255 & t] : 254 == n && t >= 65136 ? v : f
        }

        t.L = c, t.R = u, t.EN = d, t.ON_R = 3, t.AN = 4, t.R_H = 5, t.B = 6, t.RLE = 7, t.DOT = "·", t.doBidiReorder = function (e, n, c) {
            if (e.length < 2) return {};
            var d = e.split(""), $ = new Array(d.length), b = new Array(d.length), y = [];
            i = c ? 1 : 0, function (e, t, n, c) {
                var u = i ? h : l, d = null, g = null, f = null, v = 0, $ = null, b = -1, y = null, x = null, C = [];
                if (!c) for (y = 0, c = []; y < n; y++) c[y] = F(e[y]);
                for (s = i, o = !1, r = !1, a = !1, x = 0; x < n; x++) {
                    if (d = v, C[x] = g = _(e, c, C, x), $ = 240 & (v = u[d][g]), v &= 15, t[x] = f = u[v][5], $ > 0) if (16 == $) {
                        for (y = b; y < x; y++) t[y] = 1;
                        b = -1
                    } else b = -1;
                    if (u[v][6]) -1 == b && (b = x); else if (b > -1) {
                        for (y = b; y < x; y++) t[y] = f;
                        b = -1
                    }
                    c[x] == m && (t[x] = 0), s |= f
                }
                if (a) for (y = 0; y < n; y++) if (c[y] == p) {
                    t[y] = i;
                    for (var S = y - 1; S >= 0 && c[S] == w; S--) t[S] = i
                }
            }(d, y, d.length, n);
            for (var x = 0; x < $.length; $[x] = x, x++) ;
            for (T(2, y, $), T(1, y, $), x = 0; x < $.length - 1; x++) n[x] === g ? y[x] = t.AN : y[x] === u && (n[x] > v && n[x] < C || n[x] === f || n[x] === R) ? y[x] = t.ON_R : x > 0 && "ل" === d[x - 1] && /\u0622|\u0623|\u0625|\u0627/.test(d[x]) && (y[x - 1] = y[x] = t.R_H, x++);
            for (d[d.length - 1] === t.DOT && (y[d.length - 1] = t.B), "‫" === d[0] && (y[0] = t.RLE), x = 0; x < $.length; x++) b[x] = y[$[x]];
            return {logicalFromVisual: $, bidiLevels: b}
        }, t.hasBidiCharacters = function (e, t) {
            for (var n = !1, i = 0; i < e.length; i++) t[i] = F(e.charAt(i)), n || t[i] != u && t[i] != v && t[i] != g || (n = !0);
            return n
        }, t.getVisualFromLogicalIdx = function (e, t) {
            for (var n = 0; n < t.logicalFromVisual.length; n++) if (t.logicalFromVisual[n] == e) return n;
            return 0
        }
    })), ace.define("ace/bidihandler", ["require", "exports", "module", "ace/lib/bidiutil", "ace/lib/lang"], (function (e, t, n) {
        var i = e("./lib/bidiutil"), s = e("./lib/lang"), o = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\u202B]/,
            r = function (e) {
                this.session = e, this.bidiMap = {}, this.currentRow = null, this.bidiUtil = i, this.charWidths = [], this.EOL = "¬", this.showInvisibles = !0, this.isRtlDir = !1, this.$isRtl = !1, this.line = "", this.wrapIndent = 0, this.EOF = "¶", this.RLE = "‫", this.contentWidth = 0, this.fontMetrics = null, this.rtlLineOffset = 0, this.wrapOffset = 0, this.isMoveLeftOperation = !1, this.seenBidi = o.test(e.getValue())
            };
        (function () {
            this.isBidiRow = function (e, t, n) {
                return !!this.seenBidi && (e !== this.currentRow && (this.currentRow = e, this.updateRowLine(t, n), this.updateBidiMap()), this.bidiMap.bidiLevels)
            }, this.onChange = function (e) {
                this.seenBidi ? this.currentRow = null : "insert" == e.action && o.test(e.lines.join("\n")) && (this.seenBidi = !0, this.currentRow = null)
            }, this.getDocumentRow = function () {
                var e = 0, t = this.session.$screenRowCache;
                if (t.length) {
                    var n = this.session.$getRowCacheIndex(t, this.currentRow);
                    n >= 0 && (e = this.session.$docRowCache[n])
                }
                return e
            }, this.getSplitIndex = function () {
                var e = 0, t = this.session.$screenRowCache;
                if (t.length) for (var n, i = this.session.$getRowCacheIndex(t, this.currentRow); this.currentRow - e > 0 && (n = this.session.$getRowCacheIndex(t, this.currentRow - e - 1)) === i;) i = n, e++; else e = this.currentRow;
                return e
            }, this.updateRowLine = function (e, t) {
                void 0 === e && (e = this.getDocumentRow());
                var n = e === this.session.getLength() - 1 ? this.EOF : this.EOL;
                if (this.wrapIndent = 0, this.line = this.session.getLine(e), this.isRtlDir = this.$isRtl || this.line.charAt(0) === this.RLE, this.session.$useWrapMode) {
                    var o = this.session.$wrapData[e];
                    o && (void 0 === t && (t = this.getSplitIndex()), t > 0 && o.length ? (this.wrapIndent = o.indent, this.wrapOffset = this.wrapIndent * this.charWidths[i.L], this.line = t < o.length ? this.line.substring(o[t - 1], o[t]) : this.line.substring(o[o.length - 1])) : this.line = this.line.substring(0, o[t]), t == o.length && (this.line += this.showInvisibles ? n : i.DOT))
                } else this.line += this.showInvisibles ? n : i.DOT;
                var r, a = this.session, l = 0;
                this.line = this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g, (function (e, t) {
                    return "\t" === e || a.isFullWidth(e.charCodeAt(0)) ? (r = "\t" === e ? a.getScreenTabSize(t + l) : 2, l += r - 1, s.stringRepeat(i.DOT, r)) : e
                })), this.isRtlDir && (this.fontMetrics.$main.textContent = this.line.charAt(this.line.length - 1) == i.DOT ? this.line.substr(0, this.line.length - 1) : this.line, this.rtlLineOffset = this.contentWidth - this.fontMetrics.$main.getBoundingClientRect().width)
            }, this.updateBidiMap = function () {
                var e = [];
                i.hasBidiCharacters(this.line, e) || this.isRtlDir ? this.bidiMap = i.doBidiReorder(this.line, e, this.isRtlDir) : this.bidiMap = {}
            }, this.markAsDirty = function () {
                this.currentRow = null
            }, this.updateCharacterWidths = function (e) {
                if (this.characterWidth !== e.$characterSize.width) {
                    this.fontMetrics = e;
                    var t = this.characterWidth = e.$characterSize.width, n = e.$measureCharWidth("ה");
                    this.charWidths[i.L] = this.charWidths[i.EN] = this.charWidths[i.ON_R] = t, this.charWidths[i.R] = this.charWidths[i.AN] = n, this.charWidths[i.R_H] = .45 * n, this.charWidths[i.B] = this.charWidths[i.RLE] = 0, this.currentRow = null
                }
            }, this.setShowInvisibles = function (e) {
                this.showInvisibles = e, this.currentRow = null
            }, this.setEolChar = function (e) {
                this.EOL = e
            }, this.setContentWidth = function (e) {
                this.contentWidth = e
            }, this.isRtlLine = function (e) {
                return !!this.$isRtl || (null != e ? this.session.getLine(e).charAt(0) == this.RLE : this.isRtlDir)
            }, this.setRtlDirection = function (e, t) {
                for (var n = e.getCursorPosition(), i = e.selection.getSelectionAnchor().row; i <= n.row; i++) t || e.session.getLine(i).charAt(0) !== e.session.$bidiHandler.RLE ? t && e.session.getLine(i).charAt(0) !== e.session.$bidiHandler.RLE && e.session.doc.insert({
                    column: 0,
                    row: i
                }, e.session.$bidiHandler.RLE) : e.session.doc.removeInLine(i, 0, 1)
            }, this.getPosLeft = function (e) {
                e -= this.wrapIndent;
                var t = this.line.charAt(0) === this.RLE ? 1 : 0,
                    n = e > t ? this.session.getOverwrite() ? e : e - 1 : t,
                    s = i.getVisualFromLogicalIdx(n, this.bidiMap), o = this.bidiMap.bidiLevels, r = 0;
                !this.session.getOverwrite() && e <= t && o[s] % 2 != 0 && s++;
                for (var a = 0; a < s; a++) r += this.charWidths[o[a]];
                return !this.session.getOverwrite() && e > t && o[s] % 2 == 0 && (r += this.charWidths[o[s]]), this.wrapIndent && (r += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset), this.isRtlDir && (r += this.rtlLineOffset), r
            }, this.getSelections = function (e, t) {
                var n, i = this.bidiMap, s = i.bidiLevels, o = [], r = 0, a = Math.min(e, t) - this.wrapIndent,
                    l = Math.max(e, t) - this.wrapIndent, h = !1, c = !1, u = 0;
                this.wrapIndent && (r += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset);
                for (var d, g = 0; g < s.length; g++) d = i.logicalFromVisual[g], n = s[g], (h = d >= a && d < l) && !c ? u = r : !h && c && o.push({
                    left: u,
                    width: r - u
                }), r += this.charWidths[n], c = h;
                if (h && g === s.length && o.push({
                    left: u,
                    width: r - u
                }), this.isRtlDir) for (var f = 0; f < o.length; f++) o[f].left += this.rtlLineOffset;
                return o
            }, this.offsetToCol = function (e) {
                this.isRtlDir && (e -= this.rtlLineOffset);
                var t = 0, n = (e = Math.max(e, 0), 0), i = 0, s = this.bidiMap.bidiLevels, o = this.charWidths[s[i]];
                for (this.wrapIndent && (e -= this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset); e > n + o / 2;) {
                    if (n += o, i === s.length - 1) {
                        o = 0;
                        break
                    }
                    o = this.charWidths[s[++i]]
                }
                return i > 0 && s[i - 1] % 2 != 0 && s[i] % 2 == 0 ? (e < n && i--, t = this.bidiMap.logicalFromVisual[i]) : i > 0 && s[i - 1] % 2 == 0 && s[i] % 2 != 0 ? t = 1 + (e > n ? this.bidiMap.logicalFromVisual[i] : this.bidiMap.logicalFromVisual[i - 1]) : this.isRtlDir && i === s.length - 1 && 0 === o && s[i - 1] % 2 == 0 || !this.isRtlDir && 0 === i && s[i] % 2 != 0 ? t = 1 + this.bidiMap.logicalFromVisual[i] : (i > 0 && s[i - 1] % 2 != 0 && 0 !== o && i--, t = this.bidiMap.logicalFromVisual[i]), 0 === t && this.isRtlDir && t++, t + this.wrapIndent
            }
        }).call(r.prototype), t.BidiHandler = r
    })), ace.define("ace/selection", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/range"], (function (e, t, n) {
        var i = e("./lib/oop"), s = e("./lib/lang"), o = e("./lib/event_emitter").EventEmitter, r = e("./range").Range,
            a = function (e) {
                this.session = e, this.doc = e.getDocument(), this.clearSelection(), this.cursor = this.lead = this.doc.createAnchor(0, 0), this.anchor = this.doc.createAnchor(0, 0), this.$silent = !1;
                var t = this;
                this.cursor.on("change", (function (e) {
                    t.$cursorChanged = !0, t.$silent || t._emit("changeCursor"), t.$isEmpty || t.$silent || t._emit("changeSelection"), t.$keepDesiredColumnOnChange || e.old.column == e.value.column || (t.$desiredColumn = null)
                })), this.anchor.on("change", (function () {
                    t.$anchorChanged = !0, t.$isEmpty || t.$silent || t._emit("changeSelection")
                }))
            };
        (function () {
            i.implement(this, o), this.isEmpty = function () {
                return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column
            }, this.isMultiLine = function () {
                return !this.$isEmpty && this.anchor.row != this.cursor.row
            }, this.getCursor = function () {
                return this.lead.getPosition()
            }, this.setAnchor = function (e, t) {
                this.$isEmpty = !1, this.anchor.setPosition(e, t)
            }, this.setSelectionAnchor = this.setAnchor, this.getAnchor = function () {
                return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition()
            }, this.getSelectionAnchor = this.getAnchor, this.getSelectionLead = function () {
                return this.lead.getPosition()
            }, this.isBackwards = function () {
                var e = this.anchor, t = this.lead;
                return e.row > t.row || e.row == t.row && e.column > t.column
            }, this.getRange = function () {
                var e = this.anchor, t = this.lead;
                return this.$isEmpty ? r.fromPoints(t, t) : this.isBackwards() ? r.fromPoints(t, e) : r.fromPoints(e, t)
            }, this.clearSelection = function () {
                this.$isEmpty || (this.$isEmpty = !0, this._emit("changeSelection"))
            }, this.selectAll = function () {
                this.$setSelection(0, 0, Number.MAX_VALUE, Number.MAX_VALUE)
            }, this.setRange = this.setSelectionRange = function (e, t) {
                var n = t ? e.end : e.start, i = t ? e.start : e.end;
                this.$setSelection(n.row, n.column, i.row, i.column)
            }, this.$setSelection = function (e, t, n, i) {
                if (!this.$silent) {
                    var s = this.$isEmpty, o = this.inMultiSelectMode;
                    this.$silent = !0, this.$cursorChanged = this.$anchorChanged = !1, this.anchor.setPosition(e, t), this.cursor.setPosition(n, i), this.$isEmpty = !r.comparePoints(this.anchor, this.cursor), this.$silent = !1, this.$cursorChanged && this._emit("changeCursor"), (this.$cursorChanged || this.$anchorChanged || s != this.$isEmpty || o) && this._emit("changeSelection")
                }
            }, this.$moveSelection = function (e) {
                var t = this.lead;
                this.$isEmpty && this.setSelectionAnchor(t.row, t.column), e.call(this)
            }, this.selectTo = function (e, t) {
                this.$moveSelection((function () {
                    this.moveCursorTo(e, t)
                }))
            }, this.selectToPosition = function (e) {
                this.$moveSelection((function () {
                    this.moveCursorToPosition(e)
                }))
            }, this.moveTo = function (e, t) {
                this.clearSelection(), this.moveCursorTo(e, t)
            }, this.moveToPosition = function (e) {
                this.clearSelection(), this.moveCursorToPosition(e)
            }, this.selectUp = function () {
                this.$moveSelection(this.moveCursorUp)
            }, this.selectDown = function () {
                this.$moveSelection(this.moveCursorDown)
            }, this.selectRight = function () {
                this.$moveSelection(this.moveCursorRight)
            }, this.selectLeft = function () {
                this.$moveSelection(this.moveCursorLeft)
            }, this.selectLineStart = function () {
                this.$moveSelection(this.moveCursorLineStart)
            }, this.selectLineEnd = function () {
                this.$moveSelection(this.moveCursorLineEnd)
            }, this.selectFileEnd = function () {
                this.$moveSelection(this.moveCursorFileEnd)
            }, this.selectFileStart = function () {
                this.$moveSelection(this.moveCursorFileStart)
            }, this.selectWordRight = function () {
                this.$moveSelection(this.moveCursorWordRight)
            }, this.selectWordLeft = function () {
                this.$moveSelection(this.moveCursorWordLeft)
            }, this.getWordRange = function (e, t) {
                if (void 0 === t) {
                    var n = e || this.lead;
                    e = n.row, t = n.column
                }
                return this.session.getWordRange(e, t)
            }, this.selectWord = function () {
                this.setSelectionRange(this.getWordRange())
            }, this.selectAWord = function () {
                var e = this.getCursor(), t = this.session.getAWordRange(e.row, e.column);
                this.setSelectionRange(t)
            }, this.getLineRange = function (e, t) {
                var n, i = "number" == typeof e ? e : this.lead.row, s = this.session.getFoldLine(i);
                return s ? (i = s.start.row, n = s.end.row) : n = i, !0 === t ? new r(i, 0, n, this.session.getLine(n).length) : new r(i, 0, n + 1, 0)
            }, this.selectLine = function () {
                this.setSelectionRange(this.getLineRange())
            }, this.moveCursorUp = function () {
                this.moveCursorBy(-1, 0)
            }, this.moveCursorDown = function () {
                this.moveCursorBy(1, 0)
            }, this.wouldMoveIntoSoftTab = function (e, t, n) {
                var i = e.column, s = e.column + t;
                return n < 0 && (i = e.column - t, s = e.column), this.session.isTabStop(e) && this.doc.getLine(e.row).slice(i, s).split(" ").length - 1 == t
            }, this.moveCursorLeft = function () {
                var e, t = this.lead.getPosition();
                if (e = this.session.getFoldAt(t.row, t.column, -1)) this.moveCursorTo(e.start.row, e.start.column); else if (0 === t.column) t.row > 0 && this.moveCursorTo(t.row - 1, this.doc.getLine(t.row - 1).length); else {
                    var n = this.session.getTabSize();
                    this.wouldMoveIntoSoftTab(t, n, -1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, -n) : this.moveCursorBy(0, -1)
                }
            }, this.moveCursorRight = function () {
                var e, t = this.lead.getPosition();
                if (e = this.session.getFoldAt(t.row, t.column, 1)) this.moveCursorTo(e.end.row, e.end.column); else if (this.lead.column == this.doc.getLine(this.lead.row).length) this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0); else {
                    var n = this.session.getTabSize();
                    t = this.lead, this.wouldMoveIntoSoftTab(t, n, 1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, n) : this.moveCursorBy(0, 1)
                }
            }, this.moveCursorLineStart = function () {
                var e = this.lead.row, t = this.lead.column, n = this.session.documentToScreenRow(e, t),
                    i = this.session.screenToDocumentPosition(n, 0),
                    s = this.session.getDisplayLine(e, null, i.row, i.column).match(/^\s*/);
                s[0].length == t || this.session.$useEmacsStyleLineStart || (i.column += s[0].length), this.moveCursorToPosition(i)
            }, this.moveCursorLineEnd = function () {
                var e = this.lead, t = this.session.getDocumentLastRowColumnPosition(e.row, e.column);
                if (this.lead.column == t.column) {
                    var n = this.session.getLine(t.row);
                    if (t.column == n.length) {
                        var i = n.search(/\s+$/);
                        i > 0 && (t.column = i)
                    }
                }
                this.moveCursorTo(t.row, t.column)
            }, this.moveCursorFileEnd = function () {
                var e = this.doc.getLength() - 1, t = this.doc.getLine(e).length;
                this.moveCursorTo(e, t)
            }, this.moveCursorFileStart = function () {
                this.moveCursorTo(0, 0)
            }, this.moveCursorLongWordRight = function () {
                var e = this.lead.row, t = this.lead.column, n = this.doc.getLine(e), i = n.substring(t);
                this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0;
                var s = this.session.getFoldAt(e, t, 1);
                if (s) this.moveCursorTo(s.end.row, s.end.column); else {
                    if (this.session.nonTokenRe.exec(i) && (t += this.session.nonTokenRe.lastIndex, this.session.nonTokenRe.lastIndex = 0, i = n.substring(t)), t >= n.length) return this.moveCursorTo(e, n.length), this.moveCursorRight(), void (e < this.doc.getLength() - 1 && this.moveCursorWordRight());
                    this.session.tokenRe.exec(i) && (t += this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(e, t)
                }
            }, this.moveCursorLongWordLeft = function () {
                var e, t = this.lead.row, n = this.lead.column;
                if (e = this.session.getFoldAt(t, n, -1)) this.moveCursorTo(e.start.row, e.start.column); else {
                    var i = this.session.getFoldStringAt(t, n, -1);
                    null == i && (i = this.doc.getLine(t).substring(0, n));
                    var o = s.stringReverse(i);
                    if (this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0, this.session.nonTokenRe.exec(o) && (n -= this.session.nonTokenRe.lastIndex, o = o.slice(this.session.nonTokenRe.lastIndex), this.session.nonTokenRe.lastIndex = 0), n <= 0) return this.moveCursorTo(t, 0), this.moveCursorLeft(), void (t > 0 && this.moveCursorWordLeft());
                    this.session.tokenRe.exec(o) && (n -= this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(t, n)
                }
            }, this.$shortWordEndIndex = function (e) {
                var t, n = 0, i = /\s/, s = this.session.tokenRe;
                if (s.lastIndex = 0, this.session.tokenRe.exec(e)) n = this.session.tokenRe.lastIndex; else {
                    for (; (t = e[n]) && i.test(t);) n++;
                    if (n < 1) for (s.lastIndex = 0; (t = e[n]) && !s.test(t);) if (s.lastIndex = 0, n++, i.test(t)) {
                        if (n > 2) {
                            n--;
                            break
                        }
                        for (; (t = e[n]) && i.test(t);) n++;
                        if (n > 2) break
                    }
                }
                return s.lastIndex = 0, n
            }, this.moveCursorShortWordRight = function () {
                var e = this.lead.row, t = this.lead.column, n = this.doc.getLine(e), i = n.substring(t),
                    s = this.session.getFoldAt(e, t, 1);
                if (s) return this.moveCursorTo(s.end.row, s.end.column);
                if (t == n.length) {
                    var o = this.doc.getLength();
                    do {
                        e++, i = this.doc.getLine(e)
                    } while (e < o && /^\s*$/.test(i));
                    /^\s+/.test(i) || (i = ""), t = 0
                }
                var r = this.$shortWordEndIndex(i);
                this.moveCursorTo(e, t + r)
            }, this.moveCursorShortWordLeft = function () {
                var e, t = this.lead.row, n = this.lead.column;
                if (e = this.session.getFoldAt(t, n, -1)) return this.moveCursorTo(e.start.row, e.start.column);
                var i = this.session.getLine(t).substring(0, n);
                if (0 === n) {
                    do {
                        t--, i = this.doc.getLine(t)
                    } while (t > 0 && /^\s*$/.test(i));
                    n = i.length, /\s+$/.test(i) || (i = "")
                }
                var o = s.stringReverse(i), r = this.$shortWordEndIndex(o);
                return this.moveCursorTo(t, n - r)
            }, this.moveCursorWordRight = function () {
                this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight()
            }, this.moveCursorWordLeft = function () {
                this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft()
            }, this.moveCursorBy = function (e, t) {
                var n, i = this.session.documentToScreenPosition(this.lead.row, this.lead.column);
                if (0 === t && (0 !== e && (this.session.$bidiHandler.isBidiRow(i.row, this.lead.row) ? (n = this.session.$bidiHandler.getPosLeft(i.column), i.column = Math.round(n / this.session.$bidiHandler.charWidths[0])) : n = i.column * this.session.$bidiHandler.charWidths[0]), this.$desiredColumn ? i.column = this.$desiredColumn : this.$desiredColumn = i.column), 0 != e && this.session.lineWidgets && this.session.lineWidgets[this.lead.row]) {
                    var s = this.session.lineWidgets[this.lead.row];
                    e < 0 ? e -= s.rowsAbove || 0 : e > 0 && (e += s.rowCount - (s.rowsAbove || 0))
                }
                var o = this.session.screenToDocumentPosition(i.row + e, i.column, n);
                0 !== e && 0 === t && o.row === this.lead.row && (o.column, this.lead.column), this.moveCursorTo(o.row, o.column + t, 0 === t)
            }, this.moveCursorToPosition = function (e) {
                this.moveCursorTo(e.row, e.column)
            }, this.moveCursorTo = function (e, t, n) {
                var i = this.session.getFoldAt(e, t, 1);
                i && (e = i.start.row, t = i.start.column), this.$keepDesiredColumnOnChange = !0;
                var s = this.session.getLine(e);
                /[\uDC00-\uDFFF]/.test(s.charAt(t)) && s.charAt(t - 1) && (this.lead.row == e && this.lead.column == t + 1 ? t -= 1 : t += 1), this.lead.setPosition(e, t), this.$keepDesiredColumnOnChange = !1, n || (this.$desiredColumn = null)
            }, this.moveCursorToScreen = function (e, t, n) {
                var i = this.session.screenToDocumentPosition(e, t);
                this.moveCursorTo(i.row, i.column, n)
            }, this.detach = function () {
                this.lead.detach(), this.anchor.detach()
            }, this.fromOrientedRange = function (e) {
                this.setSelectionRange(e, e.cursor == e.start), this.$desiredColumn = e.desiredColumn || this.$desiredColumn
            }, this.toOrientedRange = function (e) {
                var t = this.getRange();
                return e ? (e.start.column = t.start.column, e.start.row = t.start.row, e.end.column = t.end.column, e.end.row = t.end.row) : e = t, e.cursor = this.isBackwards() ? e.start : e.end, e.desiredColumn = this.$desiredColumn, e
            }, this.getRangeOfMovements = function (e) {
                var t = this.getCursor();
                try {
                    e(this);
                    var n = this.getCursor();
                    return r.fromPoints(t, n)
                } catch (e) {
                    return r.fromPoints(t, t)
                } finally {
                    this.moveCursorToPosition(t)
                }
            }, this.toJSON = function () {
                if (this.rangeCount) var e = this.ranges.map((function (e) {
                    var t = e.clone();
                    return t.isBackwards = e.cursor == e.start, t
                })); else (e = this.getRange()).isBackwards = this.isBackwards();
                return e
            }, this.fromJSON = function (e) {
                if (null == e.start) {
                    if (this.rangeList && e.length > 1) {
                        this.toSingleRange(e[0]);
                        for (var t = e.length; t--;) {
                            var n = r.fromPoints(e[t].start, e[t].end);
                            e[t].isBackwards && (n.cursor = n.start), this.addRange(n, !0)
                        }
                        return
                    }
                    e = e[0]
                }
                this.rangeList && this.toSingleRange(e), this.setSelectionRange(e, e.isBackwards)
            }, this.isEqual = function (e) {
                if ((e.length || this.rangeCount) && e.length != this.rangeCount) return !1;
                if (!e.length || !this.ranges) return this.getRange().isEqual(e);
                for (var t = this.ranges.length; t--;) if (!this.ranges[t].isEqual(e[t])) return !1;
                return !0
            }
        }).call(a.prototype), t.Selection = a
    })), ace.define("ace/tokenizer", ["require", "exports", "module", "ace/config"], (function (e, t, n) {
        var i = e("./config"), s = 2e3, o = function (e) {
            for (var t in this.states = e, this.regExps = {}, this.matchMappings = {}, this.states) {
                for (var n = this.states[t], i = [], s = 0, o = this.matchMappings[t] = {defaultToken: "text"}, r = "g", a = [], l = 0; l < n.length; l++) {
                    var h = n[l];
                    if (h.defaultToken && (o.defaultToken = h.defaultToken), h.caseInsensitive && -1 === r.indexOf("i") && (r += "i"), h.unicode && -1 === r.indexOf("u") && (r += "u"), null != h.regex) {
                        h.regex instanceof RegExp && (h.regex = h.regex.toString().slice(1, -1));
                        var c = h.regex, u = new RegExp("(?:(" + c + ")|(.))").exec("a").length - 2;
                        Array.isArray(h.token) ? 1 == h.token.length || 1 == u ? h.token = h.token[0] : u - 1 != h.token.length ? (this.reportError("number of classes and regexp groups doesn't match", {
                            rule: h,
                            groupCount: u - 1
                        }), h.token = h.token[0]) : (h.tokenArray = h.token, h.token = null, h.onMatch = this.$arrayTokens) : "function" != typeof h.token || h.onMatch || (h.onMatch = u > 1 ? this.$applyToken : h.token), u > 1 && (/\\\d/.test(h.regex) ? c = h.regex.replace(/\\([0-9]+)/g, (function (e, t) {
                            return "\\" + (parseInt(t, 10) + s + 1)
                        })) : (u = 1, c = this.removeCapturingGroups(h.regex)), h.splitRegex || "string" == typeof h.token || a.push(h)), o[s] = l, s += u, i.push(c), h.onMatch || (h.onMatch = null)
                    }
                }
                i.length || (o[0] = 0, i.push("$")), a.forEach((function (e) {
                    e.splitRegex = this.createSplitterRegexp(e.regex, r)
                }), this), this.regExps[t] = new RegExp("(" + i.join(")|(") + ")|($)", r)
            }
        };
        (function () {
            this.$setMaxTokenCount = function (e) {
                s = 0 | e
            }, this.$applyToken = function (e) {
                var t = this.splitRegex.exec(e).slice(1), n = this.token.apply(this, t);
                if ("string" == typeof n) return [{type: n, value: e}];
                for (var i = [], s = 0, o = n.length; s < o; s++) t[s] && (i[i.length] = {type: n[s], value: t[s]});
                return i
            }, this.$arrayTokens = function (e) {
                if (!e) return [];
                var t = this.splitRegex.exec(e);
                if (!t) return "text";
                for (var n = [], i = this.tokenArray, s = 0, o = i.length; s < o; s++) t[s + 1] && (n[n.length] = {
                    type: i[s],
                    value: t[s + 1]
                });
                return n
            }, this.removeCapturingGroups = function (e) {
                return e.replace(/\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!<]|(\()/g, (function (e, t) {
                    return t ? "(?:" : e
                }))
            }, this.createSplitterRegexp = function (e, t) {
                if (-1 != e.indexOf("(?=")) {
                    var n = 0, i = !1, s = {};
                    e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, (function (e, t, o, r, a, l) {
                        return i ? i = "]" != a : a ? i = !0 : r ? (n == s.stack && (s.end = l + 1, s.stack = -1), n--) : o && (n++, 1 != o.length && (s.stack = n, s.start = l)), e
                    })), null != s.end && /^\)*$/.test(e.substr(s.end)) && (e = e.substring(0, s.start) + e.substr(s.end))
                }
                return "^" != e.charAt(0) && (e = "^" + e), "$" != e.charAt(e.length - 1) && (e += "$"), new RegExp(e, (t || "").replace("g", ""))
            }, this.getLineTokens = function (e, t) {
                if (t && "string" != typeof t) {
                    var n = t.slice(0);
                    "#tmp" === (t = n[0]) && (n.shift(), t = n.shift())
                } else n = [];
                var i = t || "start", o = this.states[i];
                o || (i = "start", o = this.states[i]);
                var r = this.matchMappings[i], a = this.regExps[i];
                a.lastIndex = 0;
                for (var l, h = [], c = 0, u = 0, d = {type: null, value: ""}; l = a.exec(e);) {
                    var g = r.defaultToken, f = null, m = l[0], p = a.lastIndex;
                    if (p - m.length > c) {
                        var v = e.substring(c, p - m.length);
                        d.type == g ? d.value += v : (d.type && h.push(d), d = {type: g, value: v})
                    }
                    for (var w = 0; w < l.length - 2; w++) if (void 0 !== l[w + 1]) {
                        g = (f = o[r[w]]).onMatch ? f.onMatch(m, i, n, e) : f.token, f.next && (i = "string" == typeof f.next ? f.next : f.next(i, n), (o = this.states[i]) || (this.reportError("state doesn't exist", i), i = "start", o = this.states[i]), r = this.matchMappings[i], c = p, (a = this.regExps[i]).lastIndex = p), f.consumeLineEnd && (c = p);
                        break
                    }
                    if (m) if ("string" == typeof g) f && !1 === f.merge || d.type !== g ? (d.type && h.push(d), d = {
                        type: g,
                        value: m
                    }) : d.value += m; else if (g) for (d.type && h.push(d), d = {
                        type: null,
                        value: ""
                    }, w = 0; w < g.length; w++) h.push(g[w]);
                    if (c == e.length) break;
                    if (c = p, u++ > s) {
                        for (u > 2 * e.length && this.reportError("infinite loop with in ace tokenizer", {
                            startState: t,
                            line: e
                        }); c < e.length;) d.type && h.push(d), d = {value: e.substring(c, c += 500), type: "overflow"};
                        i = "start", n = [];
                        break
                    }
                }
                return d.type && h.push(d), n.length > 1 && n[0] !== i && n.unshift("#tmp", i), {
                    tokens: h,
                    state: n.length ? n : i
                }
            }, this.reportError = i.reportError
        }).call(o.prototype), t.Tokenizer = o
    })), ace.define("ace/mode/text_highlight_rules", ["require", "exports", "module", "ace/lib/lang"], (function (e, t, n) {
        var i = e("../lib/lang"), s = function () {
            this.$rules = {start: [{token: "empty_line", regex: "^$"}, {defaultToken: "text"}]}
        };
        (function () {
            this.addRules = function (e, t) {
                if (t) for (var n in e) {
                    for (var i = e[n], s = 0; s < i.length; s++) {
                        var o = i[s];
                        (o.next || o.onMatch) && ("string" == typeof o.next && 0 !== o.next.indexOf(t) && (o.next = t + o.next), o.nextState && 0 !== o.nextState.indexOf(t) && (o.nextState = t + o.nextState))
                    }
                    this.$rules[t + n] = i
                } else for (var n in e) this.$rules[n] = e[n]
            }, this.getRules = function () {
                return this.$rules
            }, this.embedRules = function (e, t, n, s, o) {
                var r = "function" == typeof e ? (new e).getRules() : e;
                if (s) for (var a = 0; a < s.length; a++) s[a] = t + s[a]; else for (var l in s = [], r) s.push(t + l);
                if (this.addRules(r, t), n) {
                    var h = Array.prototype[o ? "push" : "unshift"];
                    for (a = 0; a < s.length; a++) h.apply(this.$rules[s[a]], i.deepCopy(n))
                }
                this.$embeds || (this.$embeds = []), this.$embeds.push(t)
            }, this.getEmbeds = function () {
                return this.$embeds
            };
            var e = function (e, t) {
                return ("start" != e || t.length) && t.unshift(this.nextState, e), this.nextState
            }, t = function (e, t) {
                return t.shift(), t.shift() || "start"
            };
            this.normalizeRules = function () {
                var n = 0, i = this.$rules;
                Object.keys(i).forEach((function s(o) {
                    var r = i[o];
                    r.processed = !0;
                    for (var a = 0; a < r.length; a++) {
                        var l = r[a], h = null;
                        Array.isArray(l) && (h = l, l = {}), !l.regex && l.start && (l.regex = l.start, l.next || (l.next = []), l.next.push({defaultToken: l.token}, {
                            token: l.token + ".end",
                            regex: l.end || l.start,
                            next: "pop"
                        }), l.token = l.token + ".start", l.push = !0);
                        var c = l.next || l.push;
                        if (c && Array.isArray(c)) {
                            var u = l.stateName;
                            u || ("string" != typeof (u = l.token) && (u = u[0] || ""), i[u] && (u += n++)), i[u] = c, l.next = u, s(u)
                        } else "pop" == c && (l.next = t);
                        if (l.push && (l.nextState = l.next || l.push, l.next = e, delete l.push), l.rules) for (var d in l.rules) i[d] ? i[d].push && i[d].push.apply(i[d], l.rules[d]) : i[d] = l.rules[d];
                        var g = "string" == typeof l ? l : l.include;
                        if (g && ("$self" === g && (g = "start"), h = Array.isArray(g) ? g.map((function (e) {
                            return i[e]
                        })) : i[g]), h) {
                            var f = [a, 1].concat(h);
                            l.noEscape && (f = f.filter((function (e) {
                                return !e.next
                            }))), r.splice.apply(r, f), a--
                        }
                        l.keywordMap && (l.token = this.createKeywordMapper(l.keywordMap, l.defaultToken || "text", l.caseInsensitive), delete l.defaultToken)
                    }
                }), this)
            }, this.createKeywordMapper = function (e, t, n, i) {
                var s = Object.create(null);
                return this.$keywordList = [], Object.keys(e).forEach((function (t) {
                    for (var o = e[t].split(i || "|"), r = o.length; r--;) {
                        var a = o[r];
                        this.$keywordList.push(a), n && (a = a.toLowerCase()), s[a] = t
                    }
                }), this), e = null, n ? function (e) {
                    return s[e.toLowerCase()] || t
                } : function (e) {
                    return s[e] || t
                }
            }, this.getKeywords = function () {
                return this.$keywords
            }
        }).call(s.prototype), t.TextHighlightRules = s
    })), ace.define("ace/mode/behaviour", ["require", "exports", "module"], (function (e, t, n) {
        var i = function () {
            this.$behaviours = {}
        };
        (function () {
            this.add = function (e, t, n) {
                switch (void 0) {
                    case this.$behaviours:
                        this.$behaviours = {};
                    case this.$behaviours[e]:
                        this.$behaviours[e] = {}
                }
                this.$behaviours[e][t] = n
            }, this.addBehaviours = function (e) {
                for (var t in e) for (var n in e[t]) this.add(t, n, e[t][n])
            }, this.remove = function (e) {
                this.$behaviours && this.$behaviours[e] && delete this.$behaviours[e]
            }, this.inherit = function (e, t) {
                if ("function" == typeof e) var n = (new e).getBehaviours(t); else n = e.getBehaviours(t);
                this.addBehaviours(n)
            }, this.getBehaviours = function (e) {
                if (e) {
                    for (var t = {}, n = 0; n < e.length; n++) this.$behaviours[e[n]] && (t[e[n]] = this.$behaviours[e[n]]);
                    return t
                }
                return this.$behaviours
            }
        }).call(i.prototype), t.Behaviour = i
    })), ace.define("ace/token_iterator", ["require", "exports", "module", "ace/range"], (function (e, t, n) {
        var i = e("./range").Range, s = function (e, t, n) {
            this.$session = e, this.$row = t, this.$rowTokens = e.getTokens(t);
            var i = e.getTokenAt(t, n);
            this.$tokenIndex = i ? i.index : -1
        };
        (function () {
            this.stepBackward = function () {
                for (this.$tokenIndex -= 1; this.$tokenIndex < 0;) {
                    if (this.$row -= 1, this.$row < 0) return this.$row = 0, null;
                    this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = this.$rowTokens.length - 1
                }
                return this.$rowTokens[this.$tokenIndex]
            }, this.stepForward = function () {
                var e;
                for (this.$tokenIndex += 1; this.$tokenIndex >= this.$rowTokens.length;) {
                    if (this.$row += 1, e || (e = this.$session.getLength()), this.$row >= e) return this.$row = e - 1, null;
                    this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = 0
                }
                return this.$rowTokens[this.$tokenIndex]
            }, this.getCurrentToken = function () {
                return this.$rowTokens[this.$tokenIndex]
            }, this.getCurrentTokenRow = function () {
                return this.$row
            }, this.getCurrentTokenColumn = function () {
                var e = this.$rowTokens, t = this.$tokenIndex, n = e[t].start;
                if (void 0 !== n) return n;
                for (n = 0; t > 0;) n += e[t -= 1].value.length;
                return n
            }, this.getCurrentTokenPosition = function () {
                return {row: this.$row, column: this.getCurrentTokenColumn()}
            }, this.getCurrentTokenRange = function () {
                var e = this.$rowTokens[this.$tokenIndex], t = this.getCurrentTokenColumn();
                return new i(this.$row, t, this.$row, t + e.value.length)
            }
        }).call(s.prototype), t.TokenIterator = s
    })), ace.define("ace/mode/behaviour/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], (function (e, t, n) {
        var i, s = e("../../lib/oop"), o = e("../behaviour").Behaviour, r = e("../../token_iterator").TokenIterator,
            a = e("../../lib/lang"), l = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator"],
            h = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator", "comment"], c = {},
            u = {'"': '"', "'": "'"}, d = function (e) {
                var t = -1;
                if (e.multiSelect && (t = e.selection.index, c.rangeCount != e.multiSelect.rangeCount && (c = {rangeCount: e.multiSelect.rangeCount})), c[t]) return i = c[t];
                i = c[t] = {
                    autoInsertedBrackets: 0,
                    autoInsertedRow: -1,
                    autoInsertedLineEnd: "",
                    maybeInsertedBrackets: 0,
                    maybeInsertedRow: -1,
                    maybeInsertedLineStart: "",
                    maybeInsertedLineEnd: ""
                }
            }, g = function (e, t, n, i) {
                var s = e.end.row - e.start.row;
                return {text: n + t + i, selection: [0, e.start.column + 1, s, e.end.column + (s ? 0 : 1)]}
            }, f = function (e) {
                this.add("braces", "insertion", (function (t, n, s, o, r) {
                    var l = s.getCursorPosition(), h = o.doc.getLine(l.row);
                    if ("{" == r) {
                        d(s);
                        var c = s.getSelectionRange(), u = o.doc.getTextRange(c);
                        if ("" !== u && "{" !== u && s.getWrapBehavioursEnabled()) return g(c, u, "{", "}");
                        if (f.isSaneInsertion(s, o)) return /[\]\}\)]/.test(h[l.column]) || s.inMultiSelectMode || e && e.braces ? (f.recordAutoInsert(s, o, "}"), {
                            text: "{}",
                            selection: [1, 1]
                        }) : (f.recordMaybeInsert(s, o, "{"), {text: "{", selection: [1, 1]})
                    } else if ("}" == r) {
                        if (d(s), "}" == h.substring(l.column, l.column + 1) && null !== o.$findOpeningBracket("}", {
                            column: l.column + 1,
                            row: l.row
                        }) && f.isAutoInsertedClosing(l, h, r)) return f.popAutoInsertedClosing(), {
                            text: "",
                            selection: [1, 1]
                        }
                    } else {
                        if ("\n" == r || "\r\n" == r) {
                            d(s);
                            var m = "";
                            if (f.isMaybeInsertedClosing(l, h) && (m = a.stringRepeat("}", i.maybeInsertedBrackets), f.clearMaybeInsertedClosing()), "}" === h.substring(l.column, l.column + 1)) {
                                var p = o.findMatchingBracket({row: l.row, column: l.column + 1}, "}");
                                if (!p) return null;
                                var v = this.$getIndent(o.getLine(p.row))
                            } else {
                                if (!m) return void f.clearMaybeInsertedClosing();
                                v = this.$getIndent(h)
                            }
                            var w = v + o.getTabString();
                            return {text: "\n" + w + "\n" + v + m, selection: [1, w.length, 1, w.length]}
                        }
                        f.clearMaybeInsertedClosing()
                    }
                })), this.add("braces", "deletion", (function (e, t, n, s, o) {
                    var r = s.doc.getTextRange(o);
                    if (!o.isMultiLine() && "{" == r) {
                        if (d(n), "}" == s.doc.getLine(o.start.row).substring(o.end.column, o.end.column + 1)) return o.end.column++, o;
                        i.maybeInsertedBrackets--
                    }
                })), this.add("parens", "insertion", (function (e, t, n, i, s) {
                    if ("(" == s) {
                        d(n);
                        var o = n.getSelectionRange(), r = i.doc.getTextRange(o);
                        if ("" !== r && n.getWrapBehavioursEnabled()) return g(o, r, "(", ")");
                        if (f.isSaneInsertion(n, i)) return f.recordAutoInsert(n, i, ")"), {text: "()", selection: [1, 1]}
                    } else if (")" == s) {
                        d(n);
                        var a = n.getCursorPosition(), l = i.doc.getLine(a.row);
                        if (")" == l.substring(a.column, a.column + 1) && null !== i.$findOpeningBracket(")", {
                            column: a.column + 1,
                            row: a.row
                        }) && f.isAutoInsertedClosing(a, l, s)) return f.popAutoInsertedClosing(), {
                            text: "",
                            selection: [1, 1]
                        }
                    }
                })), this.add("parens", "deletion", (function (e, t, n, i, s) {
                    var o = i.doc.getTextRange(s);
                    if (!s.isMultiLine() && "(" == o && (d(n), ")" == i.doc.getLine(s.start.row).substring(s.start.column + 1, s.start.column + 2))) return s.end.column++, s
                })), this.add("brackets", "insertion", (function (e, t, n, i, s) {
                    if ("[" == s) {
                        d(n);
                        var o = n.getSelectionRange(), r = i.doc.getTextRange(o);
                        if ("" !== r && n.getWrapBehavioursEnabled()) return g(o, r, "[", "]");
                        if (f.isSaneInsertion(n, i)) return f.recordAutoInsert(n, i, "]"), {text: "[]", selection: [1, 1]}
                    } else if ("]" == s) {
                        d(n);
                        var a = n.getCursorPosition(), l = i.doc.getLine(a.row);
                        if ("]" == l.substring(a.column, a.column + 1) && null !== i.$findOpeningBracket("]", {
                            column: a.column + 1,
                            row: a.row
                        }) && f.isAutoInsertedClosing(a, l, s)) return f.popAutoInsertedClosing(), {
                            text: "",
                            selection: [1, 1]
                        }
                    }
                })), this.add("brackets", "deletion", (function (e, t, n, i, s) {
                    var o = i.doc.getTextRange(s);
                    if (!s.isMultiLine() && "[" == o && (d(n), "]" == i.doc.getLine(s.start.row).substring(s.start.column + 1, s.start.column + 2))) return s.end.column++, s
                })), this.add("string_dquotes", "insertion", (function (e, t, n, i, s) {
                    var o = i.$mode.$quotes || u;
                    if (1 == s.length && o[s]) {
                        if (this.lineCommentStart && -1 != this.lineCommentStart.indexOf(s)) return;
                        d(n);
                        var r = s, a = n.getSelectionRange(), l = i.doc.getTextRange(a);
                        if (!("" === l || 1 == l.length && o[l]) && n.getWrapBehavioursEnabled()) return g(a, l, r, r);
                        if (!l) {
                            var h = n.getCursorPosition(), c = i.doc.getLine(h.row),
                                f = c.substring(h.column - 1, h.column), m = c.substring(h.column, h.column + 1),
                                p = i.getTokenAt(h.row, h.column), v = i.getTokenAt(h.row, h.column + 1);
                            if ("\\" == f && p && /escape/.test(p.type)) return null;
                            var w, $ = p && /string|escape/.test(p.type), b = !v || /string|escape/.test(v.type);
                            if (m == r) (w = $ !== b) && /string\.end/.test(v.type) && (w = !1); else {
                                if ($ && !b) return null;
                                if ($ && b) return null;
                                var y = i.$mode.tokenRe;
                                y.lastIndex = 0;
                                var x = y.test(f);
                                y.lastIndex = 0;
                                var C = y.test(m), S = i.$mode.$pairQuotesAfter;
                                if (!(S && S[r] && S[r].test(f)) && x || C) return null;
                                if (m && !/[\s;,.})\]\\]/.test(m)) return null;
                                var k = c[h.column - 2];
                                if (f == r && (k == r || y.test(k))) return null;
                                w = !0
                            }
                            return {text: w ? r + r : "", selection: [1, 1]}
                        }
                    }
                })), this.add("string_dquotes", "deletion", (function (e, t, n, i, s) {
                    var o = i.$mode.$quotes || u, r = i.doc.getTextRange(s);
                    if (!s.isMultiLine() && o.hasOwnProperty(r) && (d(n), i.doc.getLine(s.start.row).substring(s.start.column + 1, s.start.column + 2) == r)) return s.end.column++, s
                }))
            };
        f.isSaneInsertion = function (e, t) {
            var n = e.getCursorPosition(), i = new r(t, n.row, n.column);
            if (!this.$matchTokenType(i.getCurrentToken() || "text", l)) {
                if (/[)}\]]/.test(e.session.getLine(n.row)[n.column])) return !0;
                var s = new r(t, n.row, n.column + 1);
                if (!this.$matchTokenType(s.getCurrentToken() || "text", l)) return !1
            }
            return i.stepForward(), i.getCurrentTokenRow() !== n.row || this.$matchTokenType(i.getCurrentToken() || "text", h)
        }, f.$matchTokenType = function (e, t) {
            return t.indexOf(e.type || e) > -1
        }, f.recordAutoInsert = function (e, t, n) {
            var s = e.getCursorPosition(), o = t.doc.getLine(s.row);
            this.isAutoInsertedClosing(s, o, i.autoInsertedLineEnd[0]) || (i.autoInsertedBrackets = 0), i.autoInsertedRow = s.row, i.autoInsertedLineEnd = n + o.substr(s.column), i.autoInsertedBrackets++
        }, f.recordMaybeInsert = function (e, t, n) {
            var s = e.getCursorPosition(), o = t.doc.getLine(s.row);
            this.isMaybeInsertedClosing(s, o) || (i.maybeInsertedBrackets = 0), i.maybeInsertedRow = s.row, i.maybeInsertedLineStart = o.substr(0, s.column) + n, i.maybeInsertedLineEnd = o.substr(s.column), i.maybeInsertedBrackets++
        }, f.isAutoInsertedClosing = function (e, t, n) {
            return i.autoInsertedBrackets > 0 && e.row === i.autoInsertedRow && n === i.autoInsertedLineEnd[0] && t.substr(e.column) === i.autoInsertedLineEnd
        }, f.isMaybeInsertedClosing = function (e, t) {
            return i.maybeInsertedBrackets > 0 && e.row === i.maybeInsertedRow && t.substr(e.column) === i.maybeInsertedLineEnd && t.substr(0, e.column) == i.maybeInsertedLineStart
        }, f.popAutoInsertedClosing = function () {
            i.autoInsertedLineEnd = i.autoInsertedLineEnd.substr(1), i.autoInsertedBrackets--
        }, f.clearMaybeInsertedClosing = function () {
            i && (i.maybeInsertedBrackets = 0, i.maybeInsertedRow = -1)
        }, s.inherits(f, o), t.CstyleBehaviour = f
    })), ace.define("ace/unicode", ["require", "exports", "module"], (function (e, t, n) {
        for (var i = [48, 9, 8, 25, 5, 0, 2, 25, 48, 0, 11, 0, 5, 0, 6, 22, 2, 30, 2, 457, 5, 11, 15, 4, 8, 0, 2, 0, 18, 116, 2, 1, 3, 3, 9, 0, 2, 2, 2, 0, 2, 19, 2, 82, 2, 138, 2, 4, 3, 155, 12, 37, 3, 0, 8, 38, 10, 44, 2, 0, 2, 1, 2, 1, 2, 0, 9, 26, 6, 2, 30, 10, 7, 61, 2, 9, 5, 101, 2, 7, 3, 9, 2, 18, 3, 0, 17, 58, 3, 100, 15, 53, 5, 0, 6, 45, 211, 57, 3, 18, 2, 5, 3, 11, 3, 9, 2, 1, 7, 6, 2, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 0, 4, 3, 3, 8, 3, 1, 3, 3, 9, 0, 5, 1, 2, 4, 3, 11, 16, 2, 2, 5, 5, 1, 3, 21, 2, 6, 2, 1, 2, 1, 2, 1, 3, 0, 2, 4, 5, 1, 3, 2, 4, 0, 8, 3, 2, 0, 8, 15, 12, 2, 2, 8, 2, 2, 2, 21, 2, 6, 2, 1, 2, 4, 3, 9, 2, 2, 2, 2, 3, 0, 16, 3, 3, 9, 18, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 3, 8, 3, 1, 3, 2, 9, 1, 5, 1, 2, 4, 3, 9, 2, 0, 17, 1, 2, 5, 4, 2, 2, 3, 4, 1, 2, 0, 2, 1, 4, 1, 4, 2, 4, 11, 5, 4, 4, 2, 2, 3, 3, 0, 7, 0, 15, 9, 18, 2, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 4, 7, 2, 2, 2, 3, 8, 1, 2, 1, 7, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 3, 8, 2, 2, 2, 3, 8, 1, 8, 0, 2, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 15, 4, 7, 2, 2, 2, 3, 10, 0, 9, 3, 3, 9, 11, 5, 3, 1, 2, 17, 4, 23, 2, 8, 2, 0, 3, 6, 4, 0, 5, 5, 2, 0, 2, 7, 19, 1, 14, 57, 6, 14, 2, 9, 40, 1, 2, 0, 3, 1, 2, 0, 3, 0, 7, 3, 2, 6, 2, 2, 2, 0, 2, 0, 3, 1, 2, 12, 2, 2, 3, 4, 2, 0, 2, 5, 3, 9, 3, 1, 35, 0, 24, 1, 7, 9, 12, 0, 2, 0, 2, 0, 5, 9, 2, 35, 5, 19, 2, 5, 5, 7, 2, 35, 10, 0, 58, 73, 7, 77, 3, 37, 11, 42, 2, 0, 4, 328, 2, 3, 3, 6, 2, 0, 2, 3, 3, 40, 2, 3, 3, 32, 2, 3, 3, 6, 2, 0, 2, 3, 3, 14, 2, 56, 2, 3, 3, 66, 5, 0, 33, 15, 17, 84, 13, 619, 3, 16, 2, 25, 6, 74, 22, 12, 2, 6, 12, 20, 12, 19, 13, 12, 2, 2, 2, 1, 13, 51, 3, 29, 4, 0, 5, 1, 3, 9, 34, 2, 3, 9, 7, 87, 9, 42, 6, 69, 11, 28, 4, 11, 5, 11, 11, 39, 3, 4, 12, 43, 5, 25, 7, 10, 38, 27, 5, 62, 2, 28, 3, 10, 7, 9, 14, 0, 89, 75, 5, 9, 18, 8, 13, 42, 4, 11, 71, 55, 9, 9, 4, 48, 83, 2, 2, 30, 14, 230, 23, 280, 3, 5, 3, 37, 3, 5, 3, 7, 2, 0, 2, 0, 2, 0, 2, 30, 3, 52, 2, 6, 2, 0, 4, 2, 2, 6, 4, 3, 3, 5, 5, 12, 6, 2, 2, 6, 67, 1, 20, 0, 29, 0, 14, 0, 17, 4, 60, 12, 5, 0, 4, 11, 18, 0, 5, 0, 3, 9, 2, 0, 4, 4, 7, 0, 2, 0, 2, 0, 2, 3, 2, 10, 3, 3, 6, 4, 5, 0, 53, 1, 2684, 46, 2, 46, 2, 132, 7, 6, 15, 37, 11, 53, 10, 0, 17, 22, 10, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 31, 48, 0, 470, 1, 36, 5, 2, 4, 6, 1, 5, 85, 3, 1, 3, 2, 2, 89, 2, 3, 6, 40, 4, 93, 18, 23, 57, 15, 513, 6581, 75, 20939, 53, 1164, 68, 45, 3, 268, 4, 27, 21, 31, 3, 13, 13, 1, 2, 24, 9, 69, 11, 1, 38, 8, 3, 102, 3, 1, 111, 44, 25, 51, 13, 68, 12, 9, 7, 23, 4, 0, 5, 45, 3, 35, 13, 28, 4, 64, 15, 10, 39, 54, 10, 13, 3, 9, 7, 22, 4, 1, 5, 66, 25, 2, 227, 42, 2, 1, 3, 9, 7, 11171, 13, 22, 5, 48, 8453, 301, 3, 61, 3, 105, 39, 6, 13, 4, 6, 11, 2, 12, 2, 4, 2, 0, 2, 1, 2, 1, 2, 107, 34, 362, 19, 63, 3, 53, 41, 11, 5, 15, 17, 6, 13, 1, 25, 2, 33, 4, 2, 134, 20, 9, 8, 25, 5, 0, 2, 25, 12, 88, 4, 5, 3, 5, 3, 5, 3, 2], s = 0, o = [], r = 0; r < i.length; r += 2) o.push(s += i[r]), i[r + 1] && o.push(45, s += i[r + 1]);
        t.wordChars = String.fromCharCode.apply(null, o)
    })), ace.define("ace/mode/text", ["require", "exports", "module", "ace/config", "ace/tokenizer", "ace/mode/text_highlight_rules", "ace/mode/behaviour/cstyle", "ace/unicode", "ace/lib/lang", "ace/token_iterator", "ace/range"], (function (e, t, n) {
        var i = e("../config"), s = e("../tokenizer").Tokenizer, o = e("./text_highlight_rules").TextHighlightRules,
            r = e("./behaviour/cstyle").CstyleBehaviour, a = e("../unicode"), l = e("../lib/lang"),
            h = e("../token_iterator").TokenIterator, c = e("../range").Range, u = function () {
                this.HighlightRules = o
            };
        (function () {
            this.$defaultBehaviour = new r, this.tokenRe = new RegExp("^[" + a.wordChars + "\\$_]+", "g"), this.nonTokenRe = new RegExp("^(?:[^" + a.wordChars + "\\$_]|\\s])+", "g"), this.getTokenizer = function () {
                return this.$tokenizer || (this.$highlightRules = this.$highlightRules || new this.HighlightRules(this.$highlightRuleConfig), this.$tokenizer = new s(this.$highlightRules.getRules())), this.$tokenizer
            }, this.lineCommentStart = "", this.blockComment = "", this.toggleCommentLines = function (e, t, n, i) {
                var s = t.doc, o = !0, r = !0, a = 1 / 0, h = t.getTabSize(), c = !1;
                if (this.lineCommentStart) {
                    Array.isArray(this.lineCommentStart) ? (m = this.lineCommentStart.map(l.escapeRegExp).join("|"), g = this.lineCommentStart[0]) : (m = l.escapeRegExp(this.lineCommentStart), g = this.lineCommentStart), m = new RegExp("^(\\s*)(?:" + m + ") ?"), c = t.getUseSoftTabs(), w = function (e, t) {
                        var n = e.match(m);
                        if (n) {
                            var i = n[1].length, o = n[0].length;
                            d(e, i, o) || " " != n[0][o - 1] || o--, s.removeInLine(t, i, o)
                        }
                    };
                    var u = g + " ", d = (v = function (e, t) {
                        o && !/\S/.test(e) || (d(e, a, a) ? s.insertInLine({
                            row: t,
                            column: a
                        }, u) : s.insertInLine({row: t, column: a}, g))
                    }, $ = function (e, t) {
                        return m.test(e)
                    }, function (e, t, n) {
                        for (var i = 0; t-- && " " == e.charAt(t);) i++;
                        if (i % h != 0) return !1;
                        for (i = 0; " " == e.charAt(n++);) i++;
                        return h > 2 ? i % h != h - 1 : i % h == 0
                    })
                } else {
                    if (!this.blockComment) return !1;
                    var g = this.blockComment.start, f = this.blockComment.end,
                        m = new RegExp("^(\\s*)(?:" + l.escapeRegExp(g) + ")"),
                        p = new RegExp("(?:" + l.escapeRegExp(f) + ")\\s*$"), v = function (e, t) {
                            $(e, t) || o && !/\S/.test(e) || (s.insertInLine({
                                row: t,
                                column: e.length
                            }, f), s.insertInLine({row: t, column: a}, g))
                        }, w = function (e, t) {
                            var n;
                            (n = e.match(p)) && s.removeInLine(t, e.length - n[0].length, e.length), (n = e.match(m)) && s.removeInLine(t, n[1].length, n[0].length)
                        }, $ = function (e, n) {
                            if (m.test(e)) return !0;
                            for (var i = t.getTokens(n), s = 0; s < i.length; s++) if ("comment" === i[s].type) return !0
                        }
                }

                function b(e) {
                    for (var t = n; t <= i; t++) e(s.getLine(t), t)
                }

                var y = 1 / 0;
                b((function (e, t) {
                    var n = e.search(/\S/);
                    -1 !== n ? (n < a && (a = n), r && !$(e, t) && (r = !1)) : y > e.length && (y = e.length)
                })), a == 1 / 0 && (a = y, o = !1, r = !1), c && a % h != 0 && (a = Math.floor(a / h) * h), b(r ? w : v)
            }, this.toggleBlockComment = function (e, t, n, i) {
                var s = this.blockComment;
                if (s) {
                    !s.start && s[0] && (s = s[0]);
                    var o = (m = new h(t, i.row, i.column)).getCurrentToken();
                    t.selection;
                    var r, a, l = t.selection.toOrientedRange();
                    if (o && /comment/.test(o.type)) {
                        for (var u, d; o && /comment/.test(o.type);) {
                            if (-1 != (p = o.value.indexOf(s.start))) {
                                var g = m.getCurrentTokenRow(), f = m.getCurrentTokenColumn() + p;
                                u = new c(g, f, g, f + s.start.length);
                                break
                            }
                            o = m.stepBackward()
                        }
                        var m;
                        for (o = (m = new h(t, i.row, i.column)).getCurrentToken(); o && /comment/.test(o.type);) {
                            var p;
                            if (-1 != (p = o.value.indexOf(s.end))) {
                                g = m.getCurrentTokenRow(), f = m.getCurrentTokenColumn() + p, d = new c(g, f, g, f + s.end.length);
                                break
                            }
                            o = m.stepForward()
                        }
                        d && t.remove(d), u && (t.remove(u), r = u.start.row, a = -s.start.length)
                    } else a = s.start.length, r = n.start.row, t.insert(n.end, s.end), t.insert(n.start, s.start);
                    l.start.row == r && (l.start.column += a), l.end.row == r && (l.end.column += a), t.selection.fromOrientedRange(l)
                }
            }, this.getNextLineIndent = function (e, t, n) {
                return this.$getIndent(t)
            }, this.checkOutdent = function (e, t, n) {
                return !1
            }, this.autoOutdent = function (e, t, n) {
            }, this.$getIndent = function (e) {
                return e.match(/^\s*/)[0]
            }, this.createWorker = function (e) {
                return null
            }, this.createModeDelegates = function (e) {
                for (var t in this.$embeds = [], this.$modes = {}, e) if (e[t]) {
                    var n = e[t], s = n.prototype.$id, o = i.$modes[s];
                    o || (i.$modes[s] = o = new n), i.$modes[t] || (i.$modes[t] = o), this.$embeds.push(t), this.$modes[t] = o
                }
                var r = ["toggleBlockComment", "toggleCommentLines", "getNextLineIndent", "checkOutdent", "autoOutdent", "transformAction", "getCompletions"];
                for (t = 0; t < r.length; t++) !function (e) {
                    var n = r[t], i = e[n];
                    e[r[t]] = function () {
                        return this.$delegator(n, arguments, i)
                    }
                }(this)
            }, this.$delegator = function (e, t, n) {
                var i = t[0] || "start";
                if ("string" != typeof i) {
                    if (Array.isArray(i[2])) {
                        var s = i[2][i[2].length - 1];
                        if (r = this.$modes[s]) return r[e].apply(r, [i[1]].concat([].slice.call(t, 1)))
                    }
                    i = i[0] || "start"
                }
                for (var o = 0; o < this.$embeds.length; o++) if (this.$modes[this.$embeds[o]]) {
                    var r, a = i.split(this.$embeds[o]);
                    if (!a[0] && a[1]) return t[0] = a[1], (r = this.$modes[this.$embeds[o]])[e].apply(r, t)
                }
                var l = n.apply(this, t);
                return n ? l : void 0
            }, this.transformAction = function (e, t, n, i, s) {
                if (this.$behaviour) {
                    var o = this.$behaviour.getBehaviours();
                    for (var r in o) if (o[r][t]) {
                        var a = o[r][t].apply(this, arguments);
                        if (a) return a
                    }
                }
            }, this.getKeywords = function (e) {
                if (!this.completionKeywords) {
                    var t = this.$tokenizer.rules, n = [];
                    for (var i in t) for (var s = t[i], o = 0, r = s.length; o < r; o++) if ("string" == typeof s[o].token) /keyword|support|storage/.test(s[o].token) && n.push(s[o].regex); else if ("object" == typeof s[o].token) for (var a = 0, l = s[o].token.length; a < l; a++) /keyword|support|storage/.test(s[o].token[a]) && (i = s[o].regex.match(/\(.+?\)/g)[a], n.push(i.substr(1, i.length - 2)));
                    this.completionKeywords = n
                }
                return e ? n.concat(this.$keywordList || []) : this.$keywordList
            }, this.$createKeywordList = function () {
                return this.$highlightRules || this.getTokenizer(), this.$keywordList = this.$highlightRules.$keywordList || []
            }, this.getCompletions = function (e, t, n, i) {
                return (this.$keywordList || this.$createKeywordList()).map((function (e) {
                    return {name: e, value: e, score: 0, meta: "keyword"}
                }))
            }, this.$id = "ace/mode/text"
        }).call(u.prototype), t.Mode = u
    })), ace.define("ace/apply_delta", ["require", "exports", "module"], (function (e, t, n) {
        t.applyDelta = function (e, t, n) {
            var i = t.start.row, s = t.start.column, o = e[i] || "";
            switch (t.action) {
                case"insert":
                    if (1 === t.lines.length) e[i] = o.substring(0, s) + t.lines[0] + o.substring(s); else {
                        var r = [i, 1].concat(t.lines);
                        e.splice.apply(e, r), e[i] = o.substring(0, s) + e[i], e[i + t.lines.length - 1] += o.substring(s)
                    }
                    break;
                case"remove":
                    var a = t.end.column, l = t.end.row;
                    i === l ? e[i] = o.substring(0, s) + o.substring(a) : e.splice(i, l - i + 1, o.substring(0, s) + e[l].substring(a))
            }
        }
    })), ace.define("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], (function (e, t, n) {
        var i = e("./lib/oop"), s = e("./lib/event_emitter").EventEmitter, o = t.Anchor = function (e, t, n) {
            this.$onChange = this.onChange.bind(this), this.attach(e), void 0 === n ? this.setPosition(t.row, t.column) : this.setPosition(t, n)
        };
        (function () {
            function e(e, t, n) {
                var i = n ? e.column <= t.column : e.column < t.column;
                return e.row < t.row || e.row == t.row && i
            }

            i.implement(this, s), this.getPosition = function () {
                return this.$clipPositionToDocument(this.row, this.column)
            }, this.getDocument = function () {
                return this.document
            }, this.$insertRight = !1, this.onChange = function (t) {
                if (!(t.start.row == t.end.row && t.start.row != this.row || t.start.row > this.row)) {
                    var n = function (t, n, i) {
                        var s = "insert" == t.action, o = (s ? 1 : -1) * (t.end.row - t.start.row),
                            r = (s ? 1 : -1) * (t.end.column - t.start.column), a = t.start, l = s ? a : t.end;
                        return e(n, a, i) ? {row: n.row, column: n.column} : e(l, n, !i) ? {
                            row: n.row + o,
                            column: n.column + (n.row == l.row ? r : 0)
                        } : {row: a.row, column: a.column}
                    }(t, {row: this.row, column: this.column}, this.$insertRight);
                    this.setPosition(n.row, n.column, !0)
                }
            }, this.setPosition = function (e, t, n) {
                var i;
                if (i = n ? {
                    row: e,
                    column: t
                } : this.$clipPositionToDocument(e, t), this.row != i.row || this.column != i.column) {
                    var s = {row: this.row, column: this.column};
                    this.row = i.row, this.column = i.column, this._signal("change", {old: s, value: i})
                }
            }, this.detach = function () {
                this.document.off("change", this.$onChange)
            }, this.attach = function (e) {
                this.document = e || this.document, this.document.on("change", this.$onChange)
            }, this.$clipPositionToDocument = function (e, t) {
                var n = {};
                return e >= this.document.getLength() ? (n.row = Math.max(0, this.document.getLength() - 1), n.column = this.document.getLine(n.row).length) : e < 0 ? (n.row = 0, n.column = 0) : (n.row = e, n.column = Math.min(this.document.getLine(n.row).length, Math.max(0, t))), t < 0 && (n.column = 0), n
            }
        }).call(o.prototype)
    })), ace.define("ace/document", ["require", "exports", "module", "ace/lib/oop", "ace/apply_delta", "ace/lib/event_emitter", "ace/range", "ace/anchor"], (function (e, t, n) {
        var i = e("./lib/oop"), s = e("./apply_delta").applyDelta, o = e("./lib/event_emitter").EventEmitter,
            r = e("./range").Range, a = e("./anchor").Anchor, l = function (e) {
                this.$lines = [""], 0 === e.length ? this.$lines = [""] : Array.isArray(e) ? this.insertMergedLines({
                    row: 0,
                    column: 0
                }, e) : this.insert({row: 0, column: 0}, e)
            };
        (function () {
            i.implement(this, o), this.setValue = function (e) {
                var t = this.getLength() - 1;
                this.remove(new r(0, 0, t, this.getLine(t).length)), this.insert({row: 0, column: 0}, e || "")
            }, this.getValue = function () {
                return this.getAllLines().join(this.getNewLineCharacter())
            }, this.createAnchor = function (e, t) {
                return new a(this, e, t)
            }, 0 === "aaa".split(/a/).length ? this.$split = function (e) {
                return e.replace(/\r\n|\r/g, "\n").split("\n")
            } : this.$split = function (e) {
                return e.split(/\r\n|\r|\n/)
            }, this.$detectNewLine = function (e) {
                var t = e.match(/^.*?(\r\n|\r|\n)/m);
                this.$autoNewLine = t ? t[1] : "\n", this._signal("changeNewLineMode")
            }, this.getNewLineCharacter = function () {
                switch (this.$newLineMode) {
                    case"windows":
                        return "\r\n";
                    case"unix":
                        return "\n";
                    default:
                        return this.$autoNewLine || "\n"
                }
            }, this.$autoNewLine = "", this.$newLineMode = "auto", this.setNewLineMode = function (e) {
                this.$newLineMode !== e && (this.$newLineMode = e, this._signal("changeNewLineMode"))
            }, this.getNewLineMode = function () {
                return this.$newLineMode
            }, this.isNewLine = function (e) {
                return "\r\n" == e || "\r" == e || "\n" == e
            }, this.getLine = function (e) {
                return this.$lines[e] || ""
            }, this.getLines = function (e, t) {
                return this.$lines.slice(e, t + 1)
            }, this.getAllLines = function () {
                return this.getLines(0, this.getLength())
            }, this.getLength = function () {
                return this.$lines.length
            }, this.getTextRange = function (e) {
                return this.getLinesForRange(e).join(this.getNewLineCharacter())
            }, this.getLinesForRange = function (e) {
                var t;
                if (e.start.row === e.end.row) t = [this.getLine(e.start.row).substring(e.start.column, e.end.column)]; else {
                    (t = this.getLines(e.start.row, e.end.row))[0] = (t[0] || "").substring(e.start.column);
                    var n = t.length - 1;
                    e.end.row - e.start.row == n && (t[n] = t[n].substring(0, e.end.column))
                }
                return t
            }, this.insertLines = function (e, t) {
                return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."), this.insertFullLines(e, t)
            }, this.removeLines = function (e, t) {
                return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."), this.removeFullLines(e, t)
            }, this.insertNewLine = function (e) {
                return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."), this.insertMergedLines(e, ["", ""])
            }, this.insert = function (e, t) {
                return this.getLength() <= 1 && this.$detectNewLine(t), this.insertMergedLines(e, this.$split(t))
            }, this.insertInLine = function (e, t) {
                var n = this.clippedPos(e.row, e.column), i = this.pos(e.row, e.column + t.length);
                return this.applyDelta({start: n, end: i, action: "insert", lines: [t]}, !0), this.clonePos(i)
            }, this.clippedPos = function (e, t) {
                var n = this.getLength();
                void 0 === e ? e = n : e < 0 ? e = 0 : e >= n && (e = n - 1, t = void 0);
                var i = this.getLine(e);
                return null == t && (t = i.length), {row: e, column: t = Math.min(Math.max(t, 0), i.length)}
            }, this.clonePos = function (e) {
                return {row: e.row, column: e.column}
            }, this.pos = function (e, t) {
                return {row: e, column: t}
            }, this.$clipPosition = function (e) {
                var t = this.getLength();
                return e.row >= t ? (e.row = Math.max(0, t - 1), e.column = this.getLine(t - 1).length) : (e.row = Math.max(0, e.row), e.column = Math.min(Math.max(e.column, 0), this.getLine(e.row).length)), e
            }, this.insertFullLines = function (e, t) {
                var n = 0;
                (e = Math.min(Math.max(e, 0), this.getLength())) < this.getLength() ? (t = t.concat([""]), n = 0) : (t = [""].concat(t), e--, n = this.$lines[e].length), this.insertMergedLines({
                    row: e,
                    column: n
                }, t)
            }, this.insertMergedLines = function (e, t) {
                var n = this.clippedPos(e.row, e.column),
                    i = {row: n.row + t.length - 1, column: (1 == t.length ? n.column : 0) + t[t.length - 1].length};
                return this.applyDelta({start: n, end: i, action: "insert", lines: t}), this.clonePos(i)
            }, this.remove = function (e) {
                var t = this.clippedPos(e.start.row, e.start.column), n = this.clippedPos(e.end.row, e.end.column);
                return this.applyDelta({
                    start: t,
                    end: n,
                    action: "remove",
                    lines: this.getLinesForRange({start: t, end: n})
                }), this.clonePos(t)
            }, this.removeInLine = function (e, t, n) {
                var i = this.clippedPos(e, t), s = this.clippedPos(e, n);
                return this.applyDelta({
                    start: i,
                    end: s,
                    action: "remove",
                    lines: this.getLinesForRange({start: i, end: s})
                }, !0), this.clonePos(i)
            }, this.removeFullLines = function (e, t) {
                e = Math.min(Math.max(0, e), this.getLength() - 1);
                var n = (t = Math.min(Math.max(0, t), this.getLength() - 1)) == this.getLength() - 1 && e > 0,
                    i = t < this.getLength() - 1, s = n ? e - 1 : e, o = n ? this.getLine(s).length : 0,
                    a = i ? t + 1 : t, l = i ? 0 : this.getLine(a).length, h = new r(s, o, a, l),
                    c = this.$lines.slice(e, t + 1);
                return this.applyDelta({
                    start: h.start,
                    end: h.end,
                    action: "remove",
                    lines: this.getLinesForRange(h)
                }), c
            }, this.removeNewLine = function (e) {
                e < this.getLength() - 1 && e >= 0 && this.applyDelta({
                    start: this.pos(e, this.getLine(e).length),
                    end: this.pos(e + 1, 0),
                    action: "remove",
                    lines: ["", ""]
                })
            }, this.replace = function (e, t) {
                return e instanceof r || (e = r.fromPoints(e.start, e.end)), 0 === t.length && e.isEmpty() ? e.start : t == this.getTextRange(e) ? e.end : (this.remove(e), t ? this.insert(e.start, t) : e.start)
            }, this.applyDeltas = function (e) {
                for (var t = 0; t < e.length; t++) this.applyDelta(e[t])
            }, this.revertDeltas = function (e) {
                for (var t = e.length - 1; t >= 0; t--) this.revertDelta(e[t])
            }, this.applyDelta = function (e, t) {
                var n = "insert" == e.action;
                (n ? e.lines.length <= 1 && !e.lines[0] : !r.comparePoints(e.start, e.end)) || (n && e.lines.length > 2e4 ? this.$splitAndapplyLargeDelta(e, 2e4) : (s(this.$lines, e, t), this._signal("change", e)))
            }, this.$safeApplyDelta = function (e) {
                var t = this.$lines.length;
                ("remove" == e.action && e.start.row < t && e.end.row < t || "insert" == e.action && e.start.row <= t) && this.applyDelta(e)
            }, this.$splitAndapplyLargeDelta = function (e, t) {
                for (var n = e.lines, i = n.length - t + 1, s = e.start.row, o = e.start.column, r = 0, a = 0; r < i; r = a) {
                    a += t - 1;
                    var l = n.slice(r, a);
                    l.push(""), this.applyDelta({
                        start: this.pos(s + r, o),
                        end: this.pos(s + a, o = 0),
                        action: e.action,
                        lines: l
                    }, !0)
                }
                e.lines = n.slice(r), e.start.row = s + r, e.start.column = o, this.applyDelta(e, !0)
            }, this.revertDelta = function (e) {
                this.$safeApplyDelta({
                    start: this.clonePos(e.start),
                    end: this.clonePos(e.end),
                    action: "insert" == e.action ? "remove" : "insert",
                    lines: e.lines.slice()
                })
            }, this.indexToPosition = function (e, t) {
                for (var n = this.$lines || this.getAllLines(), i = this.getNewLineCharacter().length, s = t || 0, o = n.length; s < o; s++) if ((e -= n[s].length + i) < 0) return {
                    row: s,
                    column: e + n[s].length + i
                };
                return {row: o - 1, column: e + n[o - 1].length + i}
            }, this.positionToIndex = function (e, t) {
                for (var n = this.$lines || this.getAllLines(), i = this.getNewLineCharacter().length, s = 0, o = Math.min(e.row, n.length), r = t || 0; r < o; ++r) s += n[r].length + i;
                return s + e.column
            }
        }).call(l.prototype), t.Document = l
    })), ace.define("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], (function (e, t, n) {
        var i = e("./lib/oop"), s = e("./lib/event_emitter").EventEmitter, o = function (e, t) {
            this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.tokenizer = e;
            var n = this;
            this.$worker = function () {
                if (n.running) {
                    for (var e = new Date, t = n.currentLine, i = -1, s = n.doc, o = t; n.lines[t];) t++;
                    var r = s.getLength(), a = 0;
                    for (n.running = !1; t < r;) {
                        n.$tokenizeRow(t), i = t;
                        do {
                            t++
                        } while (n.lines[t]);
                        if (++a % 5 == 0 && new Date - e > 20) {
                            n.running = setTimeout(n.$worker, 20);
                            break
                        }
                    }
                    n.currentLine = t, -1 == i && (i = t), o <= i && n.fireUpdateEvent(o, i)
                }
            }
        };
        (function () {
            i.implement(this, s), this.setTokenizer = function (e) {
                this.tokenizer = e, this.lines = [], this.states = [], this.start(0)
            }, this.setDocument = function (e) {
                this.doc = e, this.lines = [], this.states = [], this.stop()
            }, this.fireUpdateEvent = function (e, t) {
                var n = {first: e, last: t};
                this._signal("update", {data: n})
            }, this.start = function (e) {
                this.currentLine = Math.min(e || 0, this.currentLine, this.doc.getLength()), this.lines.splice(this.currentLine, this.lines.length), this.states.splice(this.currentLine, this.states.length), this.stop(), this.running = setTimeout(this.$worker, 700)
            }, this.scheduleStart = function () {
                this.running || (this.running = setTimeout(this.$worker, 700))
            }, this.$updateOnChange = function (e) {
                var t = e.start.row, n = e.end.row - t;
                if (0 === n) this.lines[t] = null; else if ("remove" == e.action) this.lines.splice(t, n + 1, null), this.states.splice(t, n + 1, null); else {
                    var i = Array(n + 1);
                    i.unshift(t, 1), this.lines.splice.apply(this.lines, i), this.states.splice.apply(this.states, i)
                }
                this.currentLine = Math.min(t, this.currentLine, this.doc.getLength()), this.stop()
            }, this.stop = function () {
                this.running && clearTimeout(this.running), this.running = !1
            }, this.getTokens = function (e) {
                return this.lines[e] || this.$tokenizeRow(e)
            }, this.getState = function (e) {
                return this.currentLine == e && this.$tokenizeRow(e), this.states[e] || "start"
            }, this.$tokenizeRow = function (e) {
                var t = this.doc.getLine(e), n = this.states[e - 1], i = this.tokenizer.getLineTokens(t, n, e);
                return this.states[e] + "" != i.state + "" ? (this.states[e] = i.state, this.lines[e + 1] = null, this.currentLine > e + 1 && (this.currentLine = e + 1)) : this.currentLine == e && (this.currentLine = e + 1), this.lines[e] = i.tokens
            }, this.cleanup = function () {
                this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.removeAllListeners()
            }
        }).call(o.prototype), t.BackgroundTokenizer = o
    })), ace.define("ace/search_highlight", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], (function (e, t, n) {
        var i = e("./lib/lang");
        e("./lib/oop");
        var s = e("./range").Range, o = function (e, t, n) {
            this.setRegexp(e), this.clazz = t, this.type = n || "text"
        };
        (function () {
            this.MAX_RANGES = 500, this.setRegexp = function (e) {
                this.regExp + "" != e + "" && (this.regExp = e, this.cache = [])
            }, this.update = function (e, t, n, o) {
                if (this.regExp) for (var r = o.firstRow, a = o.lastRow, l = {}, h = r; h <= a; h++) {
                    var c = this.cache[h];
                    null == c && ((c = i.getMatchOffsets(n.getLine(h), this.regExp)).length > this.MAX_RANGES && (c = c.slice(0, this.MAX_RANGES)), c = c.map((function (e) {
                        return new s(h, e.offset, h, e.offset + e.length)
                    })), this.cache[h] = c.length ? c : "");
                    for (var u = c.length; u--;) {
                        var d = c[u].toScreenRange(n), g = d.toString();
                        l[g] || (l[g] = !0, t.drawSingleLineMarker(e, d, this.clazz, o))
                    }
                }
            }
        }).call(o.prototype), t.SearchHighlight = o
    })), ace.define("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"], (function (e, t, n) {
        var i = e("../range").Range;

        function s(e, t) {
            this.foldData = e, Array.isArray(t) ? this.folds = t : t = this.folds = [t];
            var n = t[t.length - 1];
            this.range = new i(t[0].start.row, t[0].start.column, n.end.row, n.end.column), this.start = this.range.start, this.end = this.range.end, this.folds.forEach((function (e) {
                e.setFoldLine(this)
            }), this)
        }

        (function () {
            this.shiftRow = function (e) {
                this.start.row += e, this.end.row += e, this.folds.forEach((function (t) {
                    t.start.row += e, t.end.row += e
                }))
            }, this.addFold = function (e) {
                if (e.sameRow) {
                    if (e.start.row < this.startRow || e.endRow > this.endRow) throw new Error("Can't add a fold to this FoldLine as it has no connection");
                    this.folds.push(e), this.folds.sort((function (e, t) {
                        return -e.range.compareEnd(t.start.row, t.start.column)
                    })), this.range.compareEnd(e.start.row, e.start.column) > 0 ? (this.end.row = e.end.row, this.end.column = e.end.column) : this.range.compareStart(e.end.row, e.end.column) < 0 && (this.start.row = e.start.row, this.start.column = e.start.column)
                } else if (e.start.row == this.end.row) this.folds.push(e), this.end.row = e.end.row, this.end.column = e.end.column; else {
                    if (e.end.row != this.start.row) throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");
                    this.folds.unshift(e), this.start.row = e.start.row, this.start.column = e.start.column
                }
                e.foldLine = this
            }, this.containsRow = function (e) {
                return e >= this.start.row && e <= this.end.row
            }, this.walk = function (e, t, n) {
                var i, s, o = 0, r = this.folds, a = !0;
                null == t && (t = this.end.row, n = this.end.column);
                for (var l = 0; l < r.length; l++) {
                    if (-1 == (s = (i = r[l]).range.compareStart(t, n))) return void e(null, t, n, o, a);
                    if (!e(null, i.start.row, i.start.column, o, a) && e(i.placeholder, i.start.row, i.start.column, o) || 0 === s) return;
                    a = !i.sameRow, o = i.end.column
                }
                e(null, t, n, o, a)
            }, this.getNextFoldTo = function (e, t) {
                for (var n, i, s = 0; s < this.folds.length; s++) {
                    if (-1 == (i = (n = this.folds[s]).range.compareEnd(e, t))) return {fold: n, kind: "after"};
                    if (0 === i) return {fold: n, kind: "inside"}
                }
                return null
            }, this.addRemoveChars = function (e, t, n) {
                var i, s, o = this.getNextFoldTo(e, t);
                if (o) if (i = o.fold, "inside" == o.kind && i.start.column != t && i.start.row != e) window.console && window.console.log(e, t, i); else if (i.start.row == e) {
                    var r = (s = this.folds).indexOf(i);
                    for (0 === r && (this.start.column += n); r < s.length; r++) {
                        if ((i = s[r]).start.column += n, !i.sameRow) return;
                        i.end.column += n
                    }
                    this.end.column += n
                }
            }, this.split = function (e, t) {
                var n = this.getNextFoldTo(e, t);
                if (!n || "inside" == n.kind) return null;
                var i = n.fold, o = this.folds, r = this.foldData, a = o.indexOf(i), l = o[a - 1];
                this.end.row = l.end.row, this.end.column = l.end.column;
                var h = new s(r, o = o.splice(a, o.length - a));
                return r.splice(r.indexOf(this) + 1, 0, h), h
            }, this.merge = function (e) {
                for (var t = e.folds, n = 0; n < t.length; n++) this.addFold(t[n]);
                var i = this.foldData;
                i.splice(i.indexOf(e), 1)
            }, this.toString = function () {
                var e = [this.range.toString() + ": ["];
                return this.folds.forEach((function (t) {
                    e.push("  " + t.toString())
                })), e.push("]"), e.join("\n")
            }, this.idxToPosition = function (e) {
                for (var t = 0, n = 0; n < this.folds.length; n++) {
                    var i = this.folds[n];
                    if ((e -= i.start.column - t) < 0) return {row: i.start.row, column: i.start.column + e};
                    if ((e -= i.placeholder.length) < 0) return i.start;
                    t = i.end.column
                }
                return {row: this.end.row, column: this.end.column + e}
            }
        }).call(s.prototype), t.FoldLine = s
    })), ace.define("ace/range_list", ["require", "exports", "module", "ace/range"], (function (e, t, n) {
        var i = e("./range").Range.comparePoints, s = function () {
            this.ranges = [], this.$bias = 1
        };
        (function () {
            this.comparePoints = i, this.pointIndex = function (e, t, n) {
                for (var s = this.ranges, o = n || 0; o < s.length; o++) {
                    var r = s[o], a = i(e, r.end);
                    if (!(a > 0)) {
                        var l = i(e, r.start);
                        return 0 === a ? t && 0 !== l ? -o - 2 : o : l > 0 || 0 === l && !t ? o : -o - 1
                    }
                }
                return -o - 1
            }, this.add = function (e) {
                var t = !e.isEmpty(), n = this.pointIndex(e.start, t);
                n < 0 && (n = -n - 1);
                var i = this.pointIndex(e.end, t, n);
                return i < 0 ? i = -i - 1 : i++, this.ranges.splice(n, i - n, e)
            }, this.addList = function (e) {
                for (var t = [], n = e.length; n--;) t.push.apply(t, this.add(e[n]));
                return t
            }, this.substractPoint = function (e) {
                var t = this.pointIndex(e);
                if (t >= 0) return this.ranges.splice(t, 1)
            }, this.merge = function () {
                for (var e, t = [], n = this.ranges, s = (n = n.sort((function (e, t) {
                    return i(e.start, t.start)
                })))[0], o = 1; o < n.length; o++) {
                    e = s, s = n[o];
                    var r = i(e.end, s.start);
                    r < 0 || (0 != r || e.isEmpty() || s.isEmpty()) && (i(e.end, s.end) < 0 && (e.end.row = s.end.row, e.end.column = s.end.column), n.splice(o, 1), t.push(s), s = e, o--)
                }
                return this.ranges = n, t
            }, this.contains = function (e, t) {
                return this.pointIndex({row: e, column: t}) >= 0
            }, this.containsPoint = function (e) {
                return this.pointIndex(e) >= 0
            }, this.rangeAtPoint = function (e) {
                var t = this.pointIndex(e);
                if (t >= 0) return this.ranges[t]
            }, this.clipRows = function (e, t) {
                var n = this.ranges;
                if (n[0].start.row > t || n[n.length - 1].start.row < e) return [];
                var i = this.pointIndex({row: e, column: 0});
                i < 0 && (i = -i - 1);
                var s = this.pointIndex({row: t, column: 0}, i);
                s < 0 && (s = -s - 1);
                for (var o = [], r = i; r < s; r++) o.push(n[r]);
                return o
            }, this.removeAll = function () {
                return this.ranges.splice(0, this.ranges.length)
            }, this.attach = function (e) {
                this.session && this.detach(), this.session = e, this.onChange = this.$onChange.bind(this), this.session.on("change", this.onChange)
            }, this.detach = function () {
                this.session && (this.session.removeListener("change", this.onChange), this.session = null)
            }, this.$onChange = function (e) {
                for (var t = e.start, n = e.end, i = t.row, s = n.row, o = this.ranges, r = 0, a = o.length; r < a && !((c = o[r]).end.row >= i); r++) ;
                if ("insert" == e.action) {
                    for (var l = s - i, h = -t.column + n.column; r < a && !((c = o[r]).start.row > i); r++) if (c.start.row == i && c.start.column >= t.column && (c.start.column == t.column && this.$bias <= 0 || (c.start.column += h, c.start.row += l)), c.end.row == i && c.end.column >= t.column) {
                        if (c.end.column == t.column && this.$bias < 0) continue;
                        c.end.column == t.column && h > 0 && r < a - 1 && c.end.column > c.start.column && c.end.column == o[r + 1].start.column && (c.end.column -= h), c.end.column += h, c.end.row += l
                    }
                } else for (l = i - s, h = t.column - n.column; r < a && !((c = o[r]).start.row > s); r++) c.end.row < s && (i < c.end.row || i == c.end.row && t.column < c.end.column) ? (c.end.row = i, c.end.column = t.column) : c.end.row == s ? c.end.column <= n.column ? (l || c.end.column > t.column) && (c.end.column = t.column, c.end.row = t.row) : (c.end.column += h, c.end.row += l) : c.end.row > s && (c.end.row += l), c.start.row < s && (i < c.start.row || i == c.start.row && t.column < c.start.column) ? (c.start.row = i, c.start.column = t.column) : c.start.row == s ? c.start.column <= n.column ? (l || c.start.column > t.column) && (c.start.column = t.column, c.start.row = t.row) : (c.start.column += h, c.start.row += l) : c.start.row > s && (c.start.row += l);
                if (0 != l && r < a) for (; r < a; r++) {
                    var c;
                    (c = o[r]).start.row += l, c.end.row += l
                }
            }
        }).call(s.prototype), t.RangeList = s
    })), ace.define("ace/edit_session/fold", ["require", "exports", "module", "ace/range_list", "ace/lib/oop"], (function (e, t, n) {
        var i = e("../range_list").RangeList, s = e("../lib/oop"), o = t.Fold = function (e, t) {
            this.foldLine = null, this.placeholder = t, this.range = e, this.start = e.start, this.end = e.end, this.sameRow = e.start.row == e.end.row, this.subFolds = this.ranges = []
        };

        function r(e, t) {
            e.row -= t.row, 0 == e.row && (e.column -= t.column)
        }

        function a(e, t) {
            0 == e.row && (e.column += t.column), e.row += t.row
        }

        s.inherits(o, i), function () {
            this.toString = function () {
                return '"' + this.placeholder + '" ' + this.range.toString()
            }, this.setFoldLine = function (e) {
                this.foldLine = e, this.subFolds.forEach((function (t) {
                    t.setFoldLine(e)
                }))
            }, this.clone = function () {
                var e = this.range.clone(), t = new o(e, this.placeholder);
                return this.subFolds.forEach((function (e) {
                    t.subFolds.push(e.clone())
                })), t.collapseChildren = this.collapseChildren, t
            }, this.addSubFold = function (e) {
                if (!this.range.isEqual(e)) {
                    var t, n;
                    t = e, n = this.start, r(t.start, n), r(t.end, n);
                    for (var i = e.start.row, s = e.start.column, o = 0, a = -1; o < this.subFolds.length && 1 == (a = this.subFolds[o].range.compare(i, s)); o++) ;
                    var l = this.subFolds[o], h = 0;
                    if (0 == a) {
                        if (l.range.containsRange(e)) return l.addSubFold(e);
                        h = 1
                    }
                    i = e.range.end.row, s = e.range.end.column;
                    var c = o;
                    for (a = -1; c < this.subFolds.length && 1 == (a = this.subFolds[c].range.compare(i, s)); c++) ;
                    0 == a && c++;
                    for (var u = this.subFolds.splice(o, c - o, e), d = 0 == a ? u.length - 1 : u.length, g = h; g < d; g++) e.addSubFold(u[g]);
                    return e.setFoldLine(this.foldLine), e
                }
            }, this.restoreRange = function (e) {
                return function (e, t) {
                    a(e.start, t), a(e.end, t)
                }(e, this.start)
            }
        }.call(o.prototype)
    })), ace.define("ace/edit_session/folding", ["require", "exports", "module", "ace/range", "ace/edit_session/fold_line", "ace/edit_session/fold", "ace/token_iterator"], (function (e, t, n) {
        var i = e("../range").Range, s = e("./fold_line").FoldLine, o = e("./fold").Fold,
            r = e("../token_iterator").TokenIterator;
        t.Folding = function () {
            this.getFoldAt = function (e, t, n) {
                var i = this.getFoldLine(e);
                if (!i) return null;
                for (var s = i.folds, o = 0; o < s.length; o++) {
                    var r = s[o].range;
                    if (r.contains(e, t)) {
                        if (1 == n && r.isEnd(e, t) && !r.isEmpty()) continue;
                        if (-1 == n && r.isStart(e, t) && !r.isEmpty()) continue;
                        return s[o]
                    }
                }
            }, this.getFoldsInRange = function (e) {
                var t = e.start, n = e.end, i = this.$foldData, s = [];
                t.column += 1, n.column -= 1;
                for (var o = 0; o < i.length; o++) {
                    var r = i[o].range.compareRange(e);
                    if (2 != r) {
                        if (-2 == r) break;
                        for (var a = i[o].folds, l = 0; l < a.length; l++) {
                            var h = a[l];
                            if (-2 == (r = h.range.compareRange(e))) break;
                            if (2 != r) {
                                if (42 == r) break;
                                s.push(h)
                            }
                        }
                    }
                }
                return t.column -= 1, n.column += 1, s
            }, this.getFoldsInRangeList = function (e) {
                if (Array.isArray(e)) {
                    var t = [];
                    e.forEach((function (e) {
                        t = t.concat(this.getFoldsInRange(e))
                    }), this)
                } else t = this.getFoldsInRange(e);
                return t
            }, this.getAllFolds = function () {
                for (var e = [], t = this.$foldData, n = 0; n < t.length; n++) for (var i = 0; i < t[n].folds.length; i++) e.push(t[n].folds[i]);
                return e
            }, this.getFoldStringAt = function (e, t, n, i) {
                if (!(i = i || this.getFoldLine(e))) return null;
                for (var s, o, r = {end: {column: 0}}, a = 0; a < i.folds.length; a++) {
                    var l = (o = i.folds[a]).range.compareEnd(e, t);
                    if (-1 == l) {
                        s = this.getLine(o.start.row).substring(r.end.column, o.start.column);
                        break
                    }
                    if (0 === l) return null;
                    r = o
                }
                return s || (s = this.getLine(o.start.row).substring(r.end.column)), -1 == n ? s.substring(0, t - r.end.column) : 1 == n ? s.substring(t - r.end.column) : s
            }, this.getFoldLine = function (e, t) {
                var n = this.$foldData, i = 0;
                for (t && (i = n.indexOf(t)), -1 == i && (i = 0); i < n.length; i++) {
                    var s = n[i];
                    if (s.start.row <= e && s.end.row >= e) return s;
                    if (s.end.row > e) return null
                }
                return null
            }, this.getNextFoldLine = function (e, t) {
                var n = this.$foldData, i = 0;
                for (t && (i = n.indexOf(t)), -1 == i && (i = 0); i < n.length; i++) {
                    var s = n[i];
                    if (s.end.row >= e) return s
                }
                return null
            }, this.getFoldedRowCount = function (e, t) {
                for (var n = this.$foldData, i = t - e + 1, s = 0; s < n.length; s++) {
                    var o = n[s], r = o.end.row, a = o.start.row;
                    if (r >= t) {
                        a < t && (a >= e ? i -= t - a : i = 0);
                        break
                    }
                    r >= e && (i -= a >= e ? r - a : r - e + 1)
                }
                return i
            }, this.$addFoldLine = function (e) {
                return this.$foldData.push(e), this.$foldData.sort((function (e, t) {
                    return e.start.row - t.start.row
                })), e
            }, this.addFold = function (e, t) {
                var n, i = this.$foldData, r = !1;
                e instanceof o ? n = e : (n = new o(t, e)).collapseChildren = t.collapseChildren, this.$clipRangeToDocument(n.range);
                var a = n.start.row, l = n.start.column, h = n.end.row, c = n.end.column, u = this.getFoldAt(a, l, 1),
                    d = this.getFoldAt(h, c, -1);
                if (u && d == u) return u.addSubFold(n);
                u && !u.range.isStart(a, l) && this.removeFold(u), d && !d.range.isEnd(h, c) && this.removeFold(d);
                var g = this.getFoldsInRange(n.range);
                g.length > 0 && (this.removeFolds(g), n.collapseChildren || g.forEach((function (e) {
                    n.addSubFold(e)
                })));
                for (var f = 0; f < i.length; f++) {
                    var m = i[f];
                    if (h == m.start.row) {
                        m.addFold(n), r = !0;
                        break
                    }
                    if (a == m.end.row) {
                        if (m.addFold(n), r = !0, !n.sameRow) {
                            var p = i[f + 1];
                            if (p && p.start.row == h) {
                                m.merge(p);
                                break
                            }
                        }
                        break
                    }
                    if (h <= m.start.row) break
                }
                return r || (m = this.$addFoldLine(new s(this.$foldData, n))), this.$useWrapMode ? this.$updateWrapData(m.start.row, m.start.row) : this.$updateRowLengthCache(m.start.row, m.start.row), this.$modified = !0, this._signal("changeFold", {
                    data: n,
                    action: "add"
                }), n
            }, this.addFolds = function (e) {
                e.forEach((function (e) {
                    this.addFold(e)
                }), this)
            }, this.removeFold = function (e) {
                var t = e.foldLine, n = t.start.row, i = t.end.row, s = this.$foldData, o = t.folds;
                if (1 == o.length) s.splice(s.indexOf(t), 1); else if (t.range.isEnd(e.end.row, e.end.column)) o.pop(), t.end.row = o[o.length - 1].end.row, t.end.column = o[o.length - 1].end.column; else if (t.range.isStart(e.start.row, e.start.column)) o.shift(), t.start.row = o[0].start.row, t.start.column = o[0].start.column; else if (e.sameRow) o.splice(o.indexOf(e), 1); else {
                    var r = t.split(e.start.row, e.start.column);
                    (o = r.folds).shift(), r.start.row = o[0].start.row, r.start.column = o[0].start.column
                }
                this.$updating || (this.$useWrapMode ? this.$updateWrapData(n, i) : this.$updateRowLengthCache(n, i)), this.$modified = !0, this._signal("changeFold", {
                    data: e,
                    action: "remove"
                })
            }, this.removeFolds = function (e) {
                for (var t = [], n = 0; n < e.length; n++) t.push(e[n]);
                t.forEach((function (e) {
                    this.removeFold(e)
                }), this), this.$modified = !0
            }, this.expandFold = function (e) {
                this.removeFold(e), e.subFolds.forEach((function (t) {
                    e.restoreRange(t), this.addFold(t)
                }), this), e.collapseChildren > 0 && this.foldAll(e.start.row + 1, e.end.row, e.collapseChildren - 1), e.subFolds = []
            }, this.expandFolds = function (e) {
                e.forEach((function (e) {
                    this.expandFold(e)
                }), this)
            }, this.unfold = function (e, t) {
                var n, s;
                if (null == e) n = new i(0, 0, this.getLength(), 0), null == t && (t = !0); else if ("number" == typeof e) n = new i(e, 0, e, this.getLine(e).length); else if ("row" in e) n = i.fromPoints(e, e); else {
                    if (Array.isArray(e)) return s = [], e.forEach((function (e) {
                        s = s.concat(this.unfold(e))
                    }), this), s;
                    n = e
                }
                for (var o = s = this.getFoldsInRangeList(n); 1 == s.length && i.comparePoints(s[0].start, n.start) < 0 && i.comparePoints(s[0].end, n.end) > 0;) this.expandFolds(s), s = this.getFoldsInRangeList(n);
                if (0 != t ? this.removeFolds(s) : this.expandFolds(s), o.length) return o
            }, this.isRowFolded = function (e, t) {
                return !!this.getFoldLine(e, t)
            }, this.getRowFoldEnd = function (e, t) {
                var n = this.getFoldLine(e, t);
                return n ? n.end.row : e
            }, this.getRowFoldStart = function (e, t) {
                var n = this.getFoldLine(e, t);
                return n ? n.start.row : e
            }, this.getFoldDisplayLine = function (e, t, n, i, s) {
                null == i && (i = e.start.row), null == s && (s = 0), null == t && (t = e.end.row), null == n && (n = this.getLine(t).length);
                var o = this.doc, r = "";
                return e.walk((function (e, t, n, a) {
                    if (!(t < i)) {
                        if (t == i) {
                            if (n < s) return;
                            a = Math.max(s, a)
                        }
                        r += null != e ? e : o.getLine(t).substring(a, n)
                    }
                }), t, n), r
            }, this.getDisplayLine = function (e, t, n, i) {
                var s, o = this.getFoldLine(e);
                return o ? this.getFoldDisplayLine(o, e, t, n, i) : (s = this.doc.getLine(e)).substring(i || 0, t || s.length)
            }, this.$cloneFoldData = function () {
                var e = [];
                return e = this.$foldData.map((function (t) {
                    var n = t.folds.map((function (e) {
                        return e.clone()
                    }));
                    return new s(e, n)
                }))
            }, this.toggleFold = function (e) {
                var t, n, i = this.selection.getRange();
                if (i.isEmpty()) {
                    var s = i.start;
                    if (t = this.getFoldAt(s.row, s.column)) return void this.expandFold(t);
                    (n = this.findMatchingBracket(s)) ? 1 == i.comparePoint(n) ? i.end = n : (i.start = n, i.start.column++, i.end.column--) : (n = this.findMatchingBracket({
                        row: s.row,
                        column: s.column + 1
                    })) ? (1 == i.comparePoint(n) ? i.end = n : i.start = n, i.start.column++) : i = this.getCommentFoldRange(s.row, s.column) || i
                } else {
                    var o = this.getFoldsInRange(i);
                    if (e && o.length) return void this.expandFolds(o);
                    1 == o.length && (t = o[0])
                }
                if (t || (t = this.getFoldAt(i.start.row, i.start.column)), t && t.range.toString() == i.toString()) this.expandFold(t); else {
                    var r = "...";
                    if (!i.isMultiLine()) {
                        if ((r = this.getTextRange(i)).length < 4) return;
                        r = r.trim().substring(0, 2) + ".."
                    }
                    this.addFold(r, i)
                }
            }, this.getCommentFoldRange = function (e, t, n) {
                var s = new r(this, e, t), o = s.getCurrentToken(), a = o && o.type;
                if (o && /^comment|string/.test(a)) {
                    "comment" == (a = a.match(/comment|string/)[0]) && (a += "|doc-start");
                    var l = new RegExp(a), h = new i;
                    if (1 != n) {
                        do {
                            o = s.stepBackward()
                        } while (o && l.test(o.type) && !/^comment.end/.test(o.type));
                        o = s.stepForward()
                    }
                    if (h.start.row = s.getCurrentTokenRow(), h.start.column = s.getCurrentTokenColumn() + (/^comment.start/.test(o.type) ? o.value.length : 2), s = new r(this, e, t), -1 != n) {
                        var c = -1;
                        do {
                            if (o = s.stepForward(), -1 == c) {
                                var u = this.getState(s.$row);
                                l.test(u) || (c = s.$row)
                            } else if (s.$row > c) break
                        } while (o && l.test(o.type) && !/^comment.start/.test(o.type));
                        o = s.stepBackward()
                    } else o = s.getCurrentToken();
                    return h.end.row = s.getCurrentTokenRow(), h.end.column = s.getCurrentTokenColumn(), /^comment.end/.test(o.type) || (h.end.column += o.value.length - 2), h
                }
            }, this.foldAll = function (e, t, n, i) {
                null == n && (n = 1e5);
                var s = this.foldWidgets;
                if (s) {
                    t = t || this.getLength();
                    for (var o = e = e || 0; o < t; o++) if (null == s[o] && (s[o] = this.getFoldWidget(o)), "start" == s[o] && (!i || i(o))) {
                        var r = this.getFoldWidgetRange(o);
                        r && r.isMultiLine() && r.end.row <= t && r.start.row >= e && (o = r.end.row, r.collapseChildren = n, this.addFold("...", r))
                    }
                }
            }, this.foldToLevel = function (e) {
                for (this.foldAll(); e-- > 0;) this.unfold(null, !1)
            }, this.foldAllComments = function () {
                var e = this;
                this.foldAll(null, null, null, (function (t) {
                    for (var n = e.getTokens(t), i = 0; i < n.length; i++) {
                        var s = n[i];
                        if ("text" != s.type || !/^\s+$/.test(s.value)) return !!/comment/.test(s.type)
                    }
                }))
            }, this.$foldStyles = {
                manual: 1,
                markbegin: 1,
                markbeginend: 1
            }, this.$foldStyle = "markbegin", this.setFoldStyle = function (e) {
                if (!this.$foldStyles[e]) throw new Error("invalid fold style: " + e + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
                if (this.$foldStyle != e) {
                    this.$foldStyle = e, "manual" == e && this.unfold();
                    var t = this.$foldMode;
                    this.$setFolding(null), this.$setFolding(t)
                }
            }, this.$setFolding = function (e) {
                this.$foldMode != e && (this.$foldMode = e, this.off("change", this.$updateFoldWidgets), this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets), this._signal("changeAnnotation"), e && "manual" != this.$foldStyle ? (this.foldWidgets = [], this.getFoldWidget = e.getFoldWidget.bind(e, this, this.$foldStyle), this.getFoldWidgetRange = e.getFoldWidgetRange.bind(e, this, this.$foldStyle), this.$updateFoldWidgets = this.updateFoldWidgets.bind(this), this.$tokenizerUpdateFoldWidgets = this.tokenizerUpdateFoldWidgets.bind(this), this.on("change", this.$updateFoldWidgets), this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets)) : this.foldWidgets = null)
            }, this.getParentFoldRangeData = function (e, t) {
                var n = this.foldWidgets;
                if (!n || t && n[e]) return {};
                for (var i, s = e - 1; s >= 0;) {
                    var o = n[s];
                    if (null == o && (o = n[s] = this.getFoldWidget(s)), "start" == o) {
                        var r = this.getFoldWidgetRange(s);
                        if (i || (i = r), r && r.end.row >= e) break
                    }
                    s--
                }
                return {range: -1 !== s && r, firstRange: i}
            }, this.onFoldWidgetClick = function (e, t) {
                var n = {children: (t = t.domEvent).shiftKey, all: t.ctrlKey || t.metaKey, siblings: t.altKey};
                if (!this.$toggleFoldWidget(e, n)) {
                    var i = t.target || t.srcElement;
                    i && /ace_fold-widget/.test(i.className) && (i.className += " ace_invalid")
                }
            }, this.$toggleFoldWidget = function (e, t) {
                if (this.getFoldWidget) {
                    var n = this.getFoldWidget(e), i = this.getLine(e), s = "end" === n ? -1 : 1,
                        o = this.getFoldAt(e, -1 === s ? 0 : i.length, s);
                    if (o) return t.children || t.all ? this.removeFold(o) : this.expandFold(o), o;
                    var r = this.getFoldWidgetRange(e, !0);
                    if (r && !r.isMultiLine() && (o = this.getFoldAt(r.start.row, r.start.column, 1)) && r.isEqual(o.range)) return this.removeFold(o), o;
                    if (t.siblings) {
                        var a = this.getParentFoldRangeData(e);
                        if (a.range) var l = a.range.start.row + 1, h = a.range.end.row;
                        this.foldAll(l, h, t.all ? 1e4 : 0)
                    } else t.children ? (h = r ? r.end.row : this.getLength(), this.foldAll(e + 1, h, t.all ? 1e4 : 0)) : r && (t.all && (r.collapseChildren = 1e4), this.addFold("...", r));
                    return r
                }
            }, this.toggleFoldWidget = function (e) {
                var t = this.selection.getCursor().row;
                t = this.getRowFoldStart(t);
                var n = this.$toggleFoldWidget(t, {});
                if (!n) {
                    var i = this.getParentFoldRangeData(t, !0);
                    if (n = i.range || i.firstRange) {
                        t = n.start.row;
                        var s = this.getFoldAt(t, this.getLine(t).length, 1);
                        s ? this.removeFold(s) : this.addFold("...", n)
                    }
                }
            }, this.updateFoldWidgets = function (e) {
                var t = e.start.row, n = e.end.row - t;
                if (0 === n) this.foldWidgets[t] = null; else if ("remove" == e.action) this.foldWidgets.splice(t, n + 1, null); else {
                    var i = Array(n + 1);
                    i.unshift(t, 1), this.foldWidgets.splice.apply(this.foldWidgets, i)
                }
            }, this.tokenizerUpdateFoldWidgets = function (e) {
                var t = e.data;
                t.first != t.last && this.foldWidgets.length > t.first && this.foldWidgets.splice(t.first, this.foldWidgets.length)
            }
        }
    })), ace.define("ace/edit_session/bracket_match", ["require", "exports", "module", "ace/token_iterator", "ace/range"], (function (e, t, n) {
        var i = e("../token_iterator").TokenIterator, s = e("../range").Range;
        t.BracketMatch = function () {
            this.findMatchingBracket = function (e, t) {
                if (0 == e.column) return null;
                var n = t || this.getLine(e.row).charAt(e.column - 1);
                if ("" == n) return null;
                var i = n.match(/([\(\[\{])|([\)\]\}])/);
                return i ? i[1] ? this.$findClosingBracket(i[1], e) : this.$findOpeningBracket(i[2], e) : null
            }, this.getBracketRange = function (e) {
                var t, n = this.getLine(e.row), i = !0, o = n.charAt(e.column - 1),
                    r = o && o.match(/([\(\[\{])|([\)\]\}])/);
                if (r || (o = n.charAt(e.column), e = {
                    row: e.row,
                    column: e.column + 1
                }, r = o && o.match(/([\(\[\{])|([\)\]\}])/), i = !1), !r) return null;
                if (r[1]) {
                    if (!(a = this.$findClosingBracket(r[1], e))) return null;
                    t = s.fromPoints(e, a), i || (t.end.column++, t.start.column--), t.cursor = t.end
                } else {
                    var a;
                    if (!(a = this.$findOpeningBracket(r[2], e))) return null;
                    t = s.fromPoints(a, e), i || (t.start.column++, t.end.column--), t.cursor = t.start
                }
                return t
            }, this.getMatchingBracketRanges = function (e, t) {
                var n = this.getLine(e.row), i = /([\(\[\{])|([\)\]\}])/, o = !t && n.charAt(e.column - 1),
                    r = o && o.match(i);
                if (r || (o = (void 0 === t || t) && n.charAt(e.column), e = {
                    row: e.row,
                    column: e.column + 1
                }, r = o && o.match(i)), !r) return null;
                var a = new s(e.row, e.column - 1, e.row, e.column),
                    l = r[1] ? this.$findClosingBracket(r[1], e) : this.$findOpeningBracket(r[2], e);
                return l ? [a, new s(l.row, l.column, l.row, l.column + 1)] : [a]
            }, this.$brackets = {
                ")": "(",
                "(": ")",
                "]": "[",
                "[": "]",
                "{": "}",
                "}": "{",
                "<": ">",
                ">": "<"
            }, this.$findOpeningBracket = function (e, t, n) {
                var s = this.$brackets[e], o = 1, r = new i(this, t.row, t.column), a = r.getCurrentToken();
                if (a || (a = r.stepForward()), a) {
                    n || (n = new RegExp("(\\.?" + a.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end)\b/, "(?:start|begin|end)") + ")+"));
                    for (var l = t.column - r.getCurrentTokenColumn() - 2, h = a.value; ;) {
                        for (; l >= 0;) {
                            var c = h.charAt(l);
                            if (c == s) {
                                if (0 == (o -= 1)) return {
                                    row: r.getCurrentTokenRow(),
                                    column: l + r.getCurrentTokenColumn()
                                }
                            } else c == e && (o += 1);
                            l -= 1
                        }
                        do {
                            a = r.stepBackward()
                        } while (a && !n.test(a.type));
                        if (null == a) break;
                        l = (h = a.value).length - 1
                    }
                    return null
                }
            }, this.$findClosingBracket = function (e, t, n) {
                var s = this.$brackets[e], o = 1, r = new i(this, t.row, t.column), a = r.getCurrentToken();
                if (a || (a = r.stepForward()), a) {
                    n || (n = new RegExp("(\\.?" + a.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:start|begin)\b/, "(?:start|begin|end)") + ")+"));
                    for (var l = t.column - r.getCurrentTokenColumn(); ;) {
                        for (var h = a.value, c = h.length; l < c;) {
                            var u = h.charAt(l);
                            if (u == s) {
                                if (0 == (o -= 1)) return {
                                    row: r.getCurrentTokenRow(),
                                    column: l + r.getCurrentTokenColumn()
                                }
                            } else u == e && (o += 1);
                            l += 1
                        }
                        do {
                            a = r.stepForward()
                        } while (a && !n.test(a.type));
                        if (null == a) break;
                        l = 0
                    }
                    return null
                }
            }, this.getMatchingTags = function (e) {
                var t = new i(this, e.row, e.column), n = this.$findTagName(t);
                if (n) return "<" === t.stepBackward().value ? this.$findClosingTag(t, n) : this.$findOpeningTag(t, n)
            }, this.$findTagName = function (e) {
                var t = e.getCurrentToken(), n = !1, i = !1;
                if (t && -1 === t.type.indexOf("tag-name")) do {
                    (t = i ? e.stepBackward() : e.stepForward()) && ("/>" === t.value ? i = !0 : -1 !== t.type.indexOf("tag-name") && (n = !0))
                } while (t && !n);
                return t
            }, this.$findClosingTag = function (e, t) {
                var n, i = t.value, o = t.value, r = 0,
                    a = new s(e.getCurrentTokenRow(), e.getCurrentTokenColumn(), e.getCurrentTokenRow(), e.getCurrentTokenColumn() + 1);
                t = e.stepForward();
                var l = new s(e.getCurrentTokenRow(), e.getCurrentTokenColumn(), e.getCurrentTokenRow(), e.getCurrentTokenColumn() + t.value.length),
                    h = !1;
                do {
                    if (n = t, t = e.stepForward()) {
                        if (">" === t.value && !h) {
                            var c = new s(e.getCurrentTokenRow(), e.getCurrentTokenColumn(), e.getCurrentTokenRow(), e.getCurrentTokenColumn() + 1);
                            h = !0
                        }
                        if (-1 !== t.type.indexOf("tag-name")) {
                            if (o === (i = t.value)) if ("<" === n.value) r++; else if ("</" === n.value && --r < 0) {
                                e.stepBackward();
                                var u = new s(e.getCurrentTokenRow(), e.getCurrentTokenColumn(), e.getCurrentTokenRow(), e.getCurrentTokenColumn() + 2);
                                t = e.stepForward();
                                var d = new s(e.getCurrentTokenRow(), e.getCurrentTokenColumn(), e.getCurrentTokenRow(), e.getCurrentTokenColumn() + t.value.length);
                                if (!(t = e.stepForward()) || ">" !== t.value) return;
                                var g = new s(e.getCurrentTokenRow(), e.getCurrentTokenColumn(), e.getCurrentTokenRow(), e.getCurrentTokenColumn() + 1)
                            }
                        } else o === i && "/>" === t.value && --r < 0 && (g = d = u = new s(e.getCurrentTokenRow(), e.getCurrentTokenColumn(), e.getCurrentTokenRow(), e.getCurrentTokenColumn() + 2), c = new s(l.end.row, l.end.column, l.end.row, l.end.column + 1))
                    }
                } while (t && r >= 0);
                if (a && c && u && g && l && d) return {
                    openTag: new s(a.start.row, a.start.column, c.end.row, c.end.column),
                    closeTag: new s(u.start.row, u.start.column, g.end.row, g.end.column),
                    openTagName: l,
                    closeTagName: d
                }
            }, this.$findOpeningTag = function (e, t) {
                var n = e.getCurrentToken(), i = t.value, o = 0, r = e.getCurrentTokenRow(),
                    a = e.getCurrentTokenColumn(), l = a + 2, h = new s(r, a, r, l);
                e.stepForward();
                var c = new s(e.getCurrentTokenRow(), e.getCurrentTokenColumn(), e.getCurrentTokenRow(), e.getCurrentTokenColumn() + t.value.length);
                if ((t = e.stepForward()) && ">" === t.value) {
                    var u = new s(e.getCurrentTokenRow(), e.getCurrentTokenColumn(), e.getCurrentTokenRow(), e.getCurrentTokenColumn() + 1);
                    e.stepBackward(), e.stepBackward();
                    do {
                        if (t = n, r = e.getCurrentTokenRow(), l = (a = e.getCurrentTokenColumn()) + t.value.length, n = e.stepBackward(), t) if (-1 !== t.type.indexOf("tag-name")) {
                            if (i === t.value) if ("<" === n.value) {
                                if (++o > 0) {
                                    var d = new s(r, a, r, l),
                                        g = new s(e.getCurrentTokenRow(), e.getCurrentTokenColumn(), e.getCurrentTokenRow(), e.getCurrentTokenColumn() + 1);
                                    do {
                                        t = e.stepForward()
                                    } while (t && ">" !== t.value);
                                    var f = new s(e.getCurrentTokenRow(), e.getCurrentTokenColumn(), e.getCurrentTokenRow(), e.getCurrentTokenColumn() + 1)
                                }
                            } else "</" === n.value && o--
                        } else if ("/>" === t.value) {
                            for (var m = 0, p = n; p;) {
                                if (-1 !== p.type.indexOf("tag-name") && p.value === i) {
                                    o--;
                                    break
                                }
                                if ("<" === p.value) break;
                                p = e.stepBackward(), m++
                            }
                            for (var v = 0; v < m; v++) e.stepForward()
                        }
                    } while (n && o <= 0);
                    return g && f && h && u && d && c ? {
                        openTag: new s(g.start.row, g.start.column, f.end.row, f.end.column),
                        closeTag: new s(h.start.row, h.start.column, u.end.row, u.end.column),
                        openTagName: d,
                        closeTagName: c
                    } : void 0
                }
            }
        }
    })), ace.define("ace/edit_session", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/bidihandler", "ace/config", "ace/lib/event_emitter", "ace/selection", "ace/mode/text", "ace/range", "ace/document", "ace/background_tokenizer", "ace/search_highlight", "ace/edit_session/folding", "ace/edit_session/bracket_match"], (function (e, t, n) {
        var i = e("./lib/oop"), s = e("./lib/lang"), o = e("./bidihandler").BidiHandler, r = e("./config"),
            a = e("./lib/event_emitter").EventEmitter, l = e("./selection").Selection, h = e("./mode/text").Mode,
            c = e("./range").Range, u = e("./document").Document, d = e("./background_tokenizer").BackgroundTokenizer,
            g = e("./search_highlight").SearchHighlight, f = function (e, t) {
                this.$breakpoints = [], this.$decorations = [], this.$frontMarkers = {}, this.$backMarkers = {}, this.$markerId = 1, this.$undoSelect = !0, this.$foldData = [], this.id = "session" + ++f.$uid, this.$foldData.toString = function () {
                    return this.join("\n")
                }, this.bgTokenizer = new d((new h).getTokenizer(), this);
                var n = this;
                this.bgTokenizer.on("update", (function (e) {
                    n._signal("tokenizerUpdate", e)
                })), this.on("changeFold", this.onChangeFold.bind(this)), this.$onChange = this.onChange.bind(this), "object" == typeof e && e.getLine || (e = new u(e)), this.setDocument(e), this.selection = new l(this), this.$bidiHandler = new o(this), r.resetOptions(this), this.setMode(t), r._signal("session", this), this.destroyed = !1
            };
        f.$uid = 0, function () {
            i.implement(this, a), this.setDocument = function (e) {
                this.doc && this.doc.off("change", this.$onChange), this.doc = e, e.on("change", this.$onChange, !0), this.bgTokenizer.setDocument(this.getDocument()), this.resetCaches()
            }, this.getDocument = function () {
                return this.doc
            }, this.$resetRowCache = function (e) {
                if (!e) return this.$docRowCache = [], void (this.$screenRowCache = []);
                var t = this.$docRowCache.length, n = this.$getRowCacheIndex(this.$docRowCache, e) + 1;
                t > n && (this.$docRowCache.splice(n, t), this.$screenRowCache.splice(n, t))
            }, this.$getRowCacheIndex = function (e, t) {
                for (var n = 0, i = e.length - 1; n <= i;) {
                    var s = n + i >> 1, o = e[s];
                    if (t > o) n = s + 1; else {
                        if (!(t < o)) return s;
                        i = s - 1
                    }
                }
                return n - 1
            }, this.resetCaches = function () {
                this.$modified = !0, this.$wrapData = [], this.$rowLengthCache = [], this.$resetRowCache(0), this.destroyed || this.bgTokenizer.start(0)
            }, this.onChangeFold = function (e) {
                var t = e.data;
                this.$resetRowCache(t.start.row)
            }, this.onChange = function (e) {
                this.$modified = !0, this.$bidiHandler.onChange(e), this.$resetRowCache(e.start.row);
                var t = this.$updateInternalDataOnChange(e);
                !this.$fromUndo && this.$undoManager && (t && t.length && (this.$undoManager.add({
                    action: "removeFolds",
                    folds: t
                }, this.mergeUndoDeltas), this.mergeUndoDeltas = !0), this.$undoManager.add(e, this.mergeUndoDeltas), this.mergeUndoDeltas = !0, this.$informUndoManager.schedule()), this.bgTokenizer.$updateOnChange(e), this._signal("change", e)
            }, this.setValue = function (e) {
                this.doc.setValue(e), this.selection.moveTo(0, 0), this.$resetRowCache(0), this.setUndoManager(this.$undoManager), this.getUndoManager().reset()
            }, this.getValue = this.toString = function () {
                return this.doc.getValue()
            }, this.getSelection = function () {
                return this.selection
            }, this.getState = function (e) {
                return this.bgTokenizer.getState(e)
            }, this.getTokens = function (e) {
                return this.bgTokenizer.getTokens(e)
            }, this.getTokenAt = function (e, t) {
                var n, i = this.bgTokenizer.getTokens(e), s = 0;
                if (null == t) {
                    var o = i.length - 1;
                    s = this.getLine(e).length
                } else for (o = 0; o < i.length && !((s += i[o].value.length) >= t); o++) ;
                return (n = i[o]) ? (n.index = o, n.start = s - n.value.length, n) : null
            }, this.setUndoManager = function (e) {
                if (this.$undoManager = e, this.$informUndoManager && this.$informUndoManager.cancel(), e) {
                    var t = this;
                    e.addSession(this), this.$syncInformUndoManager = function () {
                        t.$informUndoManager.cancel(), t.mergeUndoDeltas = !1
                    }, this.$informUndoManager = s.delayedCall(this.$syncInformUndoManager)
                } else this.$syncInformUndoManager = function () {
                }
            }, this.markUndoGroup = function () {
                this.$syncInformUndoManager && this.$syncInformUndoManager()
            }, this.$defaultUndoManager = {
                undo: function () {
                }, redo: function () {
                }, hasUndo: function () {
                }, hasRedo: function () {
                }, reset: function () {
                }, add: function () {
                }, addSelection: function () {
                }, startNewGroup: function () {
                }, addSession: function () {
                }
            }, this.getUndoManager = function () {
                return this.$undoManager || this.$defaultUndoManager
            }, this.getTabString = function () {
                return this.getUseSoftTabs() ? s.stringRepeat(" ", this.getTabSize()) : "\t"
            }, this.setUseSoftTabs = function (e) {
                this.setOption("useSoftTabs", e)
            }, this.getUseSoftTabs = function () {
                return this.$useSoftTabs && !this.$mode.$indentWithTabs
            }, this.setTabSize = function (e) {
                this.setOption("tabSize", e)
            }, this.getTabSize = function () {
                return this.$tabSize
            }, this.isTabStop = function (e) {
                return this.$useSoftTabs && e.column % this.$tabSize == 0
            }, this.setNavigateWithinSoftTabs = function (e) {
                this.setOption("navigateWithinSoftTabs", e)
            }, this.getNavigateWithinSoftTabs = function () {
                return this.$navigateWithinSoftTabs
            }, this.$overwrite = !1, this.setOverwrite = function (e) {
                this.setOption("overwrite", e)
            }, this.getOverwrite = function () {
                return this.$overwrite
            }, this.toggleOverwrite = function () {
                this.setOverwrite(!this.$overwrite)
            }, this.addGutterDecoration = function (e, t) {
                this.$decorations[e] || (this.$decorations[e] = ""), this.$decorations[e] += " " + t, this._signal("changeBreakpoint", {})
            }, this.removeGutterDecoration = function (e, t) {
                this.$decorations[e] = (this.$decorations[e] || "").replace(" " + t, ""), this._signal("changeBreakpoint", {})
            }, this.getBreakpoints = function () {
                return this.$breakpoints
            }, this.setBreakpoints = function (e) {
                this.$breakpoints = [];
                for (var t = 0; t < e.length; t++) this.$breakpoints[e[t]] = "ace_breakpoint";
                this._signal("changeBreakpoint", {})
            }, this.clearBreakpoints = function () {
                this.$breakpoints = [], this._signal("changeBreakpoint", {})
            }, this.setBreakpoint = function (e, t) {
                void 0 === t && (t = "ace_breakpoint"), t ? this.$breakpoints[e] = t : delete this.$breakpoints[e], this._signal("changeBreakpoint", {})
            }, this.clearBreakpoint = function (e) {
                delete this.$breakpoints[e], this._signal("changeBreakpoint", {})
            }, this.addMarker = function (e, t, n, i) {
                var s = this.$markerId++, o = {
                    range: e,
                    type: n || "line",
                    renderer: "function" == typeof n ? n : null,
                    clazz: t,
                    inFront: !!i,
                    id: s
                };
                return i ? (this.$frontMarkers[s] = o, this._signal("changeFrontMarker")) : (this.$backMarkers[s] = o, this._signal("changeBackMarker")), s
            }, this.addDynamicMarker = function (e, t) {
                if (e.update) {
                    var n = this.$markerId++;
                    return e.id = n, e.inFront = !!t, t ? (this.$frontMarkers[n] = e, this._signal("changeFrontMarker")) : (this.$backMarkers[n] = e, this._signal("changeBackMarker")), e
                }
            }, this.removeMarker = function (e) {
                var t = this.$frontMarkers[e] || this.$backMarkers[e];
                t && (delete (t.inFront ? this.$frontMarkers : this.$backMarkers)[e], this._signal(t.inFront ? "changeFrontMarker" : "changeBackMarker"))
            }, this.getMarkers = function (e) {
                return e ? this.$frontMarkers : this.$backMarkers
            }, this.highlight = function (e) {
                if (!this.$searchHighlight) {
                    var t = new g(null, "ace_selected-word", "text");
                    this.$searchHighlight = this.addDynamicMarker(t)
                }
                this.$searchHighlight.setRegexp(e)
            }, this.highlightLines = function (e, t, n, i) {
                "number" != typeof t && (n = t, t = e), n || (n = "ace_step");
                var s = new c(e, 0, t, 1 / 0);
                return s.id = this.addMarker(s, n, "fullLine", i), s
            }, this.setAnnotations = function (e) {
                this.$annotations = e, this._signal("changeAnnotation", {})
            }, this.getAnnotations = function () {
                return this.$annotations || []
            }, this.clearAnnotations = function () {
                this.setAnnotations([])
            }, this.$detectNewLine = function (e) {
                var t = e.match(/^.*?(\r?\n)/m);
                this.$autoNewLine = t ? t[1] : "\n"
            }, this.getWordRange = function (e, t) {
                var n = this.getLine(e), i = !1;
                if (t > 0 && (i = !!n.charAt(t - 1).match(this.tokenRe)), i || (i = !!n.charAt(t).match(this.tokenRe)), i) var s = this.tokenRe; else s = /^\s+$/.test(n.slice(t - 1, t + 1)) ? /\s/ : this.nonTokenRe;
                var o = t;
                if (o > 0) {
                    do {
                        o--
                    } while (o >= 0 && n.charAt(o).match(s));
                    o++
                }
                for (var r = t; r < n.length && n.charAt(r).match(s);) r++;
                return new c(e, o, e, r)
            }, this.getAWordRange = function (e, t) {
                for (var n = this.getWordRange(e, t), i = this.getLine(n.end.row); i.charAt(n.end.column).match(/[ \t]/);) n.end.column += 1;
                return n
            }, this.setNewLineMode = function (e) {
                this.doc.setNewLineMode(e)
            }, this.getNewLineMode = function () {
                return this.doc.getNewLineMode()
            }, this.setUseWorker = function (e) {
                this.setOption("useWorker", e)
            }, this.getUseWorker = function () {
                return this.$useWorker
            }, this.onReloadTokenizer = function (e) {
                var t = e.data;
                this.bgTokenizer.start(t.first), this._signal("tokenizerUpdate", e)
            }, this.$modes = r.$modes, this.$mode = null, this.$modeId = null, this.setMode = function (e, t) {
                if (e && "object" == typeof e) {
                    if (e.getTokenizer) return this.$onChangeMode(e);
                    var n = e, i = n.path
                } else i = e || "ace/mode/text";
                if (this.$modes["ace/mode/text"] || (this.$modes["ace/mode/text"] = new h), this.$modes[i] && !n) return this.$onChangeMode(this.$modes[i]), void (t && t());
                this.$modeId = i, r.loadModule(["mode", i], function (e) {
                    if (this.$modeId !== i) return t && t();
                    this.$modes[i] && !n ? this.$onChangeMode(this.$modes[i]) : e && e.Mode && (e = new e.Mode(n), n || (this.$modes[i] = e, e.$id = i), this.$onChangeMode(e)), t && t()
                }.bind(this)), this.$mode || this.$onChangeMode(this.$modes["ace/mode/text"], !0)
            }, this.$onChangeMode = function (e, t) {
                if (t || (this.$modeId = e.$id), this.$mode !== e) {
                    var n = this.$mode;
                    this.$mode = e, this.$stopWorker(), this.$useWorker && this.$startWorker();
                    var i = e.getTokenizer();
                    if (void 0 !== i.on) {
                        var s = this.onReloadTokenizer.bind(this);
                        i.on("update", s)
                    }
                    this.bgTokenizer.setTokenizer(i), this.bgTokenizer.setDocument(this.getDocument()), this.tokenRe = e.tokenRe, this.nonTokenRe = e.nonTokenRe, t || (e.attachToSession && e.attachToSession(this), this.$options.wrapMethod.set.call(this, this.$wrapMethod), this.$setFolding(e.foldingRules), this.bgTokenizer.start(0), this._emit("changeMode", {
                        oldMode: n,
                        mode: e
                    }))
                }
            }, this.$stopWorker = function () {
                this.$worker && (this.$worker.terminate(), this.$worker = null)
            }, this.$startWorker = function () {
                try {
                    this.$worker = this.$mode.createWorker(this)
                } catch (e) {
                    r.warn("Could not load worker", e), this.$worker = null
                }
            }, this.getMode = function () {
                return this.$mode
            }, this.$scrollTop = 0, this.setScrollTop = function (e) {
                this.$scrollTop === e || isNaN(e) || (this.$scrollTop = e, this._signal("changeScrollTop", e))
            }, this.getScrollTop = function () {
                return this.$scrollTop
            }, this.$scrollLeft = 0, this.setScrollLeft = function (e) {
                this.$scrollLeft === e || isNaN(e) || (this.$scrollLeft = e, this._signal("changeScrollLeft", e))
            }, this.getScrollLeft = function () {
                return this.$scrollLeft
            }, this.getScreenWidth = function () {
                return this.$computeWidth(), this.lineWidgets ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth) : this.screenWidth
            }, this.getLineWidgetMaxWidth = function () {
                if (null != this.lineWidgetsWidth) return this.lineWidgetsWidth;
                var e = 0;
                return this.lineWidgets.forEach((function (t) {
                    t && t.screenWidth > e && (e = t.screenWidth)
                })), this.lineWidgetWidth = e
            }, this.$computeWidth = function (e) {
                if (this.$modified || e) {
                    if (this.$modified = !1, this.$useWrapMode) return this.screenWidth = this.$wrapLimit;
                    for (var t = this.doc.getAllLines(), n = this.$rowLengthCache, i = 0, s = 0, o = this.$foldData[s], r = o ? o.start.row : 1 / 0, a = t.length, l = 0; l < a; l++) {
                        if (l > r) {
                            if ((l = o.end.row + 1) >= a) break;
                            r = (o = this.$foldData[s++]) ? o.start.row : 1 / 0
                        }
                        null == n[l] && (n[l] = this.$getStringScreenWidth(t[l])[0]), n[l] > i && (i = n[l])
                    }
                    this.screenWidth = i
                }
            }, this.getLine = function (e) {
                return this.doc.getLine(e)
            }, this.getLines = function (e, t) {
                return this.doc.getLines(e, t)
            }, this.getLength = function () {
                return this.doc.getLength()
            }, this.getTextRange = function (e) {
                return this.doc.getTextRange(e || this.selection.getRange())
            }, this.insert = function (e, t) {
                return this.doc.insert(e, t)
            }, this.remove = function (e) {
                return this.doc.remove(e)
            }, this.removeFullLines = function (e, t) {
                return this.doc.removeFullLines(e, t)
            }, this.undoChanges = function (e, t) {
                if (e.length) {
                    this.$fromUndo = !0;
                    for (var n = e.length - 1; -1 != n; n--) {
                        var i = e[n];
                        "insert" == i.action || "remove" == i.action ? this.doc.revertDelta(i) : i.folds && this.addFolds(i.folds)
                    }
                    !t && this.$undoSelect && (e.selectionBefore ? this.selection.fromJSON(e.selectionBefore) : this.selection.setRange(this.$getUndoSelection(e, !0))), this.$fromUndo = !1
                }
            }, this.redoChanges = function (e, t) {
                if (e.length) {
                    this.$fromUndo = !0;
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        "insert" != i.action && "remove" != i.action || this.doc.$safeApplyDelta(i)
                    }
                    !t && this.$undoSelect && (e.selectionAfter ? this.selection.fromJSON(e.selectionAfter) : this.selection.setRange(this.$getUndoSelection(e, !1))), this.$fromUndo = !1
                }
            }, this.setUndoSelect = function (e) {
                this.$undoSelect = e
            }, this.$getUndoSelection = function (e, t) {
                function n(e) {
                    return t ? "insert" !== e.action : "insert" === e.action
                }

                for (var i, s, o = 0; o < e.length; o++) {
                    var r = e[o];
                    r.start && (i ? n(r) ? (s = r.start, -1 == i.compare(s.row, s.column) && i.setStart(s), s = r.end, 1 == i.compare(s.row, s.column) && i.setEnd(s)) : (s = r.start, -1 == i.compare(s.row, s.column) && (i = c.fromPoints(r.start, r.start))) : i = n(r) ? c.fromPoints(r.start, r.end) : c.fromPoints(r.start, r.start))
                }
                return i
            }, this.replace = function (e, t) {
                return this.doc.replace(e, t)
            }, this.moveText = function (e, t, n) {
                var i = this.getTextRange(e), s = this.getFoldsInRange(e), o = c.fromPoints(t, t);
                if (!n) {
                    this.remove(e);
                    var r = e.start.row - e.end.row;
                    (h = r ? -e.end.column : e.start.column - e.end.column) && (o.start.row == e.end.row && o.start.column > e.end.column && (o.start.column += h), o.end.row == e.end.row && o.end.column > e.end.column && (o.end.column += h)), r && o.start.row >= e.end.row && (o.start.row += r, o.end.row += r)
                }
                if (o.end = this.insert(o.start, i), s.length) {
                    var a = e.start, l = o.start, h = (r = l.row - a.row, l.column - a.column);
                    this.addFolds(s.map((function (e) {
                        return (e = e.clone()).start.row == a.row && (e.start.column += h), e.end.row == a.row && (e.end.column += h), e.start.row += r, e.end.row += r, e
                    })))
                }
                return o
            }, this.indentRows = function (e, t, n) {
                n = n.replace(/\t/g, this.getTabString());
                for (var i = e; i <= t; i++) this.doc.insertInLine({row: i, column: 0}, n)
            }, this.outdentRows = function (e) {
                for (var t = e.collapseRows(), n = new c(0, 0, 0, 0), i = this.getTabSize(), s = t.start.row; s <= t.end.row; ++s) {
                    var o = this.getLine(s);
                    n.start.row = s, n.end.row = s;
                    for (var r = 0; r < i && " " == o.charAt(r); ++r) ;
                    r < i && "\t" == o.charAt(r) ? (n.start.column = r, n.end.column = r + 1) : (n.start.column = 0, n.end.column = r), this.remove(n)
                }
            }, this.$moveLines = function (e, t, n) {
                if (e = this.getRowFoldStart(e), t = this.getRowFoldEnd(t), n < 0) {
                    if ((s = this.getRowFoldStart(e + n)) < 0) return 0;
                    var i = s - e
                } else if (n > 0) {
                    var s;
                    if ((s = this.getRowFoldEnd(t + n)) > this.doc.getLength() - 1) return 0;
                    i = s - t
                } else e = this.$clipRowToDocument(e), i = (t = this.$clipRowToDocument(t)) - e + 1;
                var o = new c(e, 0, t, Number.MAX_VALUE), r = this.getFoldsInRange(o).map((function (e) {
                    return (e = e.clone()).start.row += i, e.end.row += i, e
                })), a = 0 == n ? this.doc.getLines(e, t) : this.doc.removeFullLines(e, t);
                return this.doc.insertFullLines(e + i, a), r.length && this.addFolds(r), i
            }, this.moveLinesUp = function (e, t) {
                return this.$moveLines(e, t, -1)
            }, this.moveLinesDown = function (e, t) {
                return this.$moveLines(e, t, 1)
            }, this.duplicateLines = function (e, t) {
                return this.$moveLines(e, t, 0)
            }, this.$clipRowToDocument = function (e) {
                return Math.max(0, Math.min(e, this.doc.getLength() - 1))
            }, this.$clipColumnToRow = function (e, t) {
                return t < 0 ? 0 : Math.min(this.doc.getLine(e).length, t)
            }, this.$clipPositionToDocument = function (e, t) {
                if (t = Math.max(0, t), e < 0) e = 0, t = 0; else {
                    var n = this.doc.getLength();
                    e >= n ? (e = n - 1, t = this.doc.getLine(n - 1).length) : t = Math.min(this.doc.getLine(e).length, t)
                }
                return {row: e, column: t}
            }, this.$clipRangeToDocument = function (e) {
                e.start.row < 0 ? (e.start.row = 0, e.start.column = 0) : e.start.column = this.$clipColumnToRow(e.start.row, e.start.column);
                var t = this.doc.getLength() - 1;
                return e.end.row > t ? (e.end.row = t, e.end.column = this.doc.getLine(t).length) : e.end.column = this.$clipColumnToRow(e.end.row, e.end.column), e
            }, this.$wrapLimit = 80, this.$useWrapMode = !1, this.$wrapLimitRange = {
                min: null,
                max: null
            }, this.setUseWrapMode = function (e) {
                if (e != this.$useWrapMode) {
                    if (this.$useWrapMode = e, this.$modified = !0, this.$resetRowCache(0), e) {
                        var t = this.getLength();
                        this.$wrapData = Array(t), this.$updateWrapData(0, t - 1)
                    }
                    this._signal("changeWrapMode")
                }
            }, this.getUseWrapMode = function () {
                return this.$useWrapMode
            }, this.setWrapLimitRange = function (e, t) {
                this.$wrapLimitRange.min === e && this.$wrapLimitRange.max === t || (this.$wrapLimitRange = {
                    min: e,
                    max: t
                }, this.$modified = !0, this.$bidiHandler.markAsDirty(), this.$useWrapMode && this._signal("changeWrapMode"))
            }, this.adjustWrapLimit = function (e, t) {
                var n = this.$wrapLimitRange;
                n.max < 0 && (n = {min: t, max: t});
                var i = this.$constrainWrapLimit(e, n.min, n.max);
                return i != this.$wrapLimit && i > 1 && (this.$wrapLimit = i, this.$modified = !0, this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._signal("changeWrapLimit")), !0)
            },this.$constrainWrapLimit = function (e, t, n) {
                return t && (e = Math.max(t, e)), n && (e = Math.min(n, e)), e
            },this.getWrapLimit = function () {
                return this.$wrapLimit
            },this.setWrapLimit = function (e) {
                this.setWrapLimitRange(e, e)
            },this.getWrapLimitRange = function () {
                return {min: this.$wrapLimitRange.min, max: this.$wrapLimitRange.max}
            },this.$updateInternalDataOnChange = function (e) {
                var t = this.$useWrapMode, n = e.action, i = e.start, s = e.end, o = i.row, r = s.row, a = r - o,
                    l = null;
                if (this.$updating = !0, 0 != a) if ("remove" === n) {
                    this[t ? "$wrapData" : "$rowLengthCache"].splice(o, a);
                    var h = this.$foldData;
                    l = this.getFoldsInRange(e), this.removeFolds(l);
                    var c = 0;
                    if (m = this.getFoldLine(s.row)) {
                        m.addRemoveChars(s.row, s.column, i.column - s.column), m.shiftRow(-a);
                        var u = this.getFoldLine(o);
                        u && u !== m && (u.merge(m), m = u), c = h.indexOf(m) + 1
                    }
                    for (; c < h.length; c++) (m = h[c]).start.row >= s.row && m.shiftRow(-a);
                    r = o
                } else {
                    var d = Array(a);
                    d.unshift(o, 0);
                    var g = t ? this.$wrapData : this.$rowLengthCache;
                    if (g.splice.apply(g, d), h = this.$foldData, c = 0, m = this.getFoldLine(o)) {
                        var f = m.range.compareInside(i.row, i.column);
                        0 == f ? (m = m.split(i.row, i.column)) && (m.shiftRow(a), m.addRemoveChars(r, 0, s.column - i.column)) : -1 == f && (m.addRemoveChars(o, 0, s.column - i.column), m.shiftRow(a)), c = h.indexOf(m) + 1
                    }
                    for (; c < h.length; c++) {
                        var m;
                        (m = h[c]).start.row >= o && m.shiftRow(a)
                    }
                } else a = Math.abs(e.start.column - e.end.column), "remove" === n && (l = this.getFoldsInRange(e), this.removeFolds(l), a = -a), (m = this.getFoldLine(o)) && m.addRemoveChars(o, i.column, a);
                return t && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"), this.$updating = !1, t ? this.$updateWrapData(o, r) : this.$updateRowLengthCache(o, r), l
            },this.$updateRowLengthCache = function (e, t, n) {
                this.$rowLengthCache[e] = null, this.$rowLengthCache[t] = null
            },this.$updateWrapData = function (n, i) {
                var s, o, r = this.doc.getAllLines(), a = this.getTabSize(), l = this.$wrapData, h = this.$wrapLimit,
                    c = n;
                for (i = Math.min(i, r.length - 1); c <= i;) (o = this.getFoldLine(c, o)) ? (s = [], o.walk(function (n, i, o, a) {
                    var l;
                    if (null != n) {
                        (l = this.$getDisplayTokens(n, s.length))[0] = e;
                        for (var h = 1; h < l.length; h++) l[h] = t
                    } else l = this.$getDisplayTokens(r[i].substring(a, o), s.length);
                    s = s.concat(l)
                }.bind(this), o.end.row, r[o.end.row].length + 1), l[o.start.row] = this.$computeWrapSplits(s, h, a), c = o.end.row + 1) : (s = this.$getDisplayTokens(r[c]), l[c] = this.$computeWrapSplits(s, h, a), c++)
            };
            var e = 3, t = 4;

            function n(e) {
                return !(e < 4352) && (e >= 4352 && e <= 4447 || e >= 4515 && e <= 4519 || e >= 4602 && e <= 4607 || e >= 9001 && e <= 9002 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12283 || e >= 12288 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12589 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12730 || e >= 12736 && e <= 12771 || e >= 12784 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 13054 || e >= 13056 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 55216 && e <= 55238 || e >= 55243 && e <= 55291 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510)
            }

            this.$computeWrapSplits = function (n, i, s) {
                if (0 == n.length) return [];
                var o = [], r = n.length, a = 0, l = 0, h = this.$wrapAsCode, c = this.$indentedSoftWrap,
                    u = i <= Math.max(2 * s, 8) || !1 === c ? 0 : Math.floor(i / 2);

                function d(e) {
                    for (var t = e - a, i = a; i < e; i++) {
                        var r = n[i];
                        12 !== r && 2 !== r || (t -= 1)
                    }
                    o.length || (g = function () {
                        var e = 0;
                        if (0 === u) return e;
                        if (c) for (var t = 0; t < n.length; t++) {
                            var i = n[t];
                            if (10 == i) e += 1; else {
                                if (11 != i) {
                                    if (12 == i) continue;
                                    break
                                }
                                e += s
                            }
                        }
                        return h && !1 !== c && (e += s), Math.min(e, u)
                    }(), o.indent = g), l += t, o.push(l), a = e
                }

                for (var g = 0; r - a > i - g;) {
                    var f = a + i - g;
                    if (n[f - 1] >= 10 && n[f] >= 10) d(f); else if (n[f] != e && n[f] != t) {
                        for (var m = Math.max(f - (i - (i >> 2)), a - 1); f > m && n[f] < e;) f--;
                        if (h) {
                            for (; f > m && n[f] < e;) f--;
                            for (; f > m && 9 == n[f];) f--
                        } else for (; f > m && n[f] < 10;) f--;
                        f > m ? d(++f) : (2 == n[f = a + i] && f--, d(f - g))
                    } else {
                        for (; f != a - 1 && n[f] != e; f--) ;
                        if (f > a) {
                            d(f);
                            continue
                        }
                        for (f = a + i; f < n.length && n[f] == t; f++) ;
                        if (f == n.length) break;
                        d(f)
                    }
                }
                return o
            }, this.$getDisplayTokens = function (e, t) {
                var i, s = [];
                t = t || 0;
                for (var o = 0; o < e.length; o++) {
                    var r = e.charCodeAt(o);
                    if (9 == r) {
                        i = this.getScreenTabSize(s.length + t), s.push(11);
                        for (var a = 1; a < i; a++) s.push(12)
                    } else 32 == r ? s.push(10) : r > 39 && r < 48 || r > 57 && r < 64 ? s.push(9) : r >= 4352 && n(r) ? s.push(1, 2) : s.push(1)
                }
                return s
            }, this.$getStringScreenWidth = function (e, t, i) {
                if (0 == t) return [0, 0];
                var s, o;
                for (null == t && (t = 1 / 0), i = i || 0, o = 0; o < e.length && (9 == (s = e.charCodeAt(o)) ? i += this.getScreenTabSize(i) : s >= 4352 && n(s) ? i += 2 : i += 1, !(i > t)); o++) ;
                return [i, o]
            }, this.lineWidgets = null, this.getRowLength = function (e) {
                var t = 1;
                return this.lineWidgets && (t += this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0), this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + t : t
            }, this.getRowLineCount = function (e) {
                return this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 : 1
            }, this.getRowWrapIndent = function (e) {
                if (this.$useWrapMode) {
                    var t = this.screenToDocumentPosition(e, Number.MAX_VALUE), n = this.$wrapData[t.row];
                    return n.length && n[0] < t.column ? n.indent : 0
                }
                return 0
            }, this.getScreenLastRowColumn = function (e) {
                var t = this.screenToDocumentPosition(e, Number.MAX_VALUE);
                return this.documentToScreenColumn(t.row, t.column)
            }, this.getDocumentLastRowColumn = function (e, t) {
                var n = this.documentToScreenRow(e, t);
                return this.getScreenLastRowColumn(n)
            }, this.getDocumentLastRowColumnPosition = function (e, t) {
                var n = this.documentToScreenRow(e, t);
                return this.screenToDocumentPosition(n, Number.MAX_VALUE / 10)
            }, this.getRowSplitData = function (e) {
                return this.$useWrapMode ? this.$wrapData[e] : void 0
            }, this.getScreenTabSize = function (e) {
                return this.$tabSize - (e % this.$tabSize | 0)
            }, this.screenToDocumentRow = function (e, t) {
                return this.screenToDocumentPosition(e, t).row
            }, this.screenToDocumentColumn = function (e, t) {
                return this.screenToDocumentPosition(e, t).column
            }, this.screenToDocumentPosition = function (e, t, n) {
                if (e < 0) return {row: 0, column: 0};
                var i, s, o = 0, r = 0, a = 0, l = 0, h = this.$screenRowCache, c = this.$getRowCacheIndex(h, e),
                    u = h.length;
                if (u && c >= 0) {
                    a = h[c], o = this.$docRowCache[c];
                    var d = e > h[u - 1]
                } else d = !u;
                for (var g = this.getLength() - 1, f = this.getNextFoldLine(o), m = f ? f.start.row : 1 / 0; a <= e && !(a + (l = this.getRowLength(o)) > e || o >= g);) a += l, ++o > m && (o = f.end.row + 1, m = (f = this.getNextFoldLine(o, f)) ? f.start.row : 1 / 0), d && (this.$docRowCache.push(o), this.$screenRowCache.push(a));
                if (f && f.start.row <= o) i = this.getFoldDisplayLine(f), o = f.start.row; else {
                    if (a + l <= e || o > g) return {row: g, column: this.getLine(g).length};
                    i = this.getLine(o), f = null
                }
                var p = 0, v = Math.floor(e - a);
                if (this.$useWrapMode) {
                    var w = this.$wrapData[o];
                    w && (s = w[v], v > 0 && w.length && (p = w.indent, r = w[v - 1] || w[w.length - 1], i = i.substring(r)))
                }
                return void 0 !== n && this.$bidiHandler.isBidiRow(a + v, o, v) && (t = this.$bidiHandler.offsetToCol(n)), r += this.$getStringScreenWidth(i, t - p)[1], this.$useWrapMode && r >= s && (r = s - 1), f ? f.idxToPosition(r) : {
                    row: o,
                    column: r
                }
            }, this.documentToScreenPosition = function (e, t) {
                if (void 0 === t) var n = this.$clipPositionToDocument(e.row, e.column); else n = this.$clipPositionToDocument(e, t);
                e = n.row, t = n.column;
                var i, s = 0, o = null;
                (i = this.getFoldAt(e, t, 1)) && (e = i.start.row, t = i.start.column);
                var r, a = 0, l = this.$docRowCache, h = this.$getRowCacheIndex(l, e), c = l.length;
                if (c && h >= 0) {
                    a = l[h], s = this.$screenRowCache[h];
                    var u = e > l[c - 1]
                } else u = !c;
                for (var d = this.getNextFoldLine(a), g = d ? d.start.row : 1 / 0; a < e;) {
                    if (a >= g) {
                        if ((r = d.end.row + 1) > e) break;
                        g = (d = this.getNextFoldLine(r, d)) ? d.start.row : 1 / 0
                    } else r = a + 1;
                    s += this.getRowLength(a), a = r, u && (this.$docRowCache.push(a), this.$screenRowCache.push(s))
                }
                var f = "";
                d && a >= g ? (f = this.getFoldDisplayLine(d, e, t), o = d.start.row) : (f = this.getLine(e).substring(0, t), o = e);
                var m = 0;
                if (this.$useWrapMode) {
                    var p = this.$wrapData[o];
                    if (p) {
                        for (var v = 0; f.length >= p[v];) s++, v++;
                        f = f.substring(p[v - 1] || 0, f.length), m = v > 0 ? p.indent : 0
                    }
                }
                return this.lineWidgets && this.lineWidgets[a] && this.lineWidgets[a].rowsAbove && (s += this.lineWidgets[a].rowsAbove), {
                    row: s,
                    column: m + this.$getStringScreenWidth(f)[0]
                }
            }, this.documentToScreenColumn = function (e, t) {
                return this.documentToScreenPosition(e, t).column
            }, this.documentToScreenRow = function (e, t) {
                return this.documentToScreenPosition(e, t).row
            }, this.getScreenLength = function () {
                var e = 0, t = null;
                if (this.$useWrapMode) for (var n = this.$wrapData.length, i = 0, s = (a = 0, (t = this.$foldData[a++]) ? t.start.row : 1 / 0); i < n;) {
                    var o = this.$wrapData[i];
                    e += o ? o.length + 1 : 1, ++i > s && (i = t.end.row + 1, s = (t = this.$foldData[a++]) ? t.start.row : 1 / 0)
                } else {
                    e = this.getLength();
                    for (var r = this.$foldData, a = 0; a < r.length; a++) e -= (t = r[a]).end.row - t.start.row
                }
                return this.lineWidgets && (e += this.$getWidgetScreenLength()), e
            }, this.$setFontMetrics = function (e) {
                this.$enableVarChar && (this.$getStringScreenWidth = function (t, n, i) {
                    if (0 === n) return [0, 0];
                    var s, o;
                    for (n || (n = 1 / 0), i = i || 0, o = 0; o < t.length && !((i += "\t" === (s = t.charAt(o)) ? this.getScreenTabSize(i) : e.getCharacterWidth(s)) > n); o++) ;
                    return [i, o]
                })
            }, this.destroy = function () {
                this.destroyed || (this.bgTokenizer.setDocument(null), this.bgTokenizer.cleanup(), this.destroyed = !0), this.$stopWorker(), this.removeAllListeners(), this.doc && this.doc.off("change", this.$onChange), this.selection.detach()
            }, this.isFullWidth = n
        }.call(f.prototype), e("./edit_session/folding").Folding.call(f.prototype), e("./edit_session/bracket_match").BracketMatch.call(f.prototype), r.defineOptions(f.prototype, "session", {
            wrap: {
                set: function (e) {
                    if (e && "off" != e ? "free" == e ? e = !0 : "printMargin" == e ? e = -1 : "string" == typeof e && (e = parseInt(e, 10) || !1) : e = !1, this.$wrap != e) if (this.$wrap = e, e) {
                        var t = "number" == typeof e ? e : null;
                        this.setWrapLimitRange(t, t), this.setUseWrapMode(!0)
                    } else this.setUseWrapMode(!1)
                }, get: function () {
                    return this.getUseWrapMode() ? -1 == this.$wrap ? "printMargin" : this.getWrapLimitRange().min ? this.$wrap : "free" : "off"
                }, handlesSet: !0
            }, wrapMethod: {
                set: function (e) {
                    (e = "auto" == e ? "text" != this.$mode.type : "text" != e) != this.$wrapAsCode && (this.$wrapAsCode = e, this.$useWrapMode && (this.$useWrapMode = !1, this.setUseWrapMode(!0)))
                }, initialValue: "auto"
            }, indentedSoftWrap: {
                set: function () {
                    this.$useWrapMode && (this.$useWrapMode = !1, this.setUseWrapMode(!0))
                }, initialValue: !0
            }, firstLineNumber: {
                set: function () {
                    this._signal("changeBreakpoint")
                }, initialValue: 1
            }, useWorker: {
                set: function (e) {
                    this.$useWorker = e, this.$stopWorker(), e && this.$startWorker()
                }, initialValue: !0
            }, useSoftTabs: {initialValue: !0}, tabSize: {
                set: function (e) {
                    (e = parseInt(e)) > 0 && this.$tabSize !== e && (this.$modified = !0, this.$rowLengthCache = [], this.$tabSize = e, this._signal("changeTabSize"))
                }, initialValue: 4, handlesSet: !0
            }, navigateWithinSoftTabs: {initialValue: !1}, foldStyle: {
                set: function (e) {
                    this.setFoldStyle(e)
                }, handlesSet: !0
            }, overwrite: {
                set: function (e) {
                    this._signal("changeOverwrite")
                }, initialValue: !1
            }, newLineMode: {
                set: function (e) {
                    this.doc.setNewLineMode(e)
                }, get: function () {
                    return this.doc.getNewLineMode()
                }, handlesSet: !0
            }, mode: {
                set: function (e) {
                    this.setMode(e)
                }, get: function () {
                    return this.$modeId
                }, handlesSet: !0
            }
        }), t.EditSession = f
    })), ace.define("ace/search", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], (function (e, t, n) {
        var i = e("./lib/lang"), s = e("./lib/oop"), o = e("./range").Range, r = function () {
            this.$options = {}
        };
        (function () {
            this.set = function (e) {
                return s.mixin(this.$options, e), this
            }, this.getOptions = function () {
                return i.copyObject(this.$options)
            }, this.setOptions = function (e) {
                this.$options = e
            }, this.find = function (e) {
                var t = this.$options, n = this.$matchIterator(e, t);
                if (!n) return !1;
                var i = null;
                return n.forEach((function (e, n, s, r) {
                    return i = new o(e, n, s, r), !(n == r && t.start && t.start.start && 0 != t.skipCurrent && i.isEqual(t.start) && (i = null, 1))
                })), i
            }, this.findAll = function (e) {
                var t = this.$options;
                if (!t.needle) return [];
                this.$assembleRegExp(t);
                var n = t.range, s = n ? e.getLines(n.start.row, n.end.row) : e.doc.getAllLines(), r = [], a = t.re;
                if (t.$isMultiLine) {
                    var l, h = a.length, c = s.length - h;
                    e:for (var u = a.offset || 0; u <= c; u++) {
                        for (var d = 0; d < h; d++) if (-1 == s[u + d].search(a[d])) continue e;
                        var g = s[u], f = s[u + h - 1], m = g.length - g.match(a[0])[0].length,
                            p = f.match(a[h - 1])[0].length;
                        l && l.end.row === u && l.end.column > m || (r.push(l = new o(u, m, u + h - 1, p)), h > 2 && (u = u + h - 2))
                    }
                } else for (var v = 0; v < s.length; v++) {
                    var w = i.getMatchOffsets(s[v], a);
                    for (d = 0; d < w.length; d++) {
                        var $ = w[d];
                        r.push(new o(v, $.offset, v, $.offset + $.length))
                    }
                }
                if (n) {
                    var b = n.start.column, y = n.end.column;
                    for (v = 0, d = r.length - 1; v < d && r[v].start.column < b && 0 == r[v].start.row;) v++;
                    for (var x = n.end.row - n.start.row; v < d && r[d].end.column > y && r[d].end.row == x;) d--;
                    for (r = r.slice(v, d + 1), v = 0, d = r.length; v < d; v++) r[v].start.row += n.start.row, r[v].end.row += n.start.row
                }
                return r
            }, this.replace = function (e, t) {
                var n = this.$options, i = this.$assembleRegExp(n);
                if (n.$isMultiLine) return t;
                if (i) {
                    var s = i.exec(e);
                    if (!s || s[0].length != e.length) return null;
                    if (t = e.replace(i, t), n.preserveCase) {
                        t = t.split("");
                        for (var o = Math.min(e.length, e.length); o--;) {
                            var r = e[o];
                            r && r.toLowerCase() != r ? t[o] = t[o].toUpperCase() : t[o] = t[o].toLowerCase()
                        }
                        t = t.join("")
                    }
                    return t
                }
            }, this.$assembleRegExp = function (e, t) {
                if (e.needle instanceof RegExp) return e.re = e.needle;
                var n = e.needle;
                if (!e.needle) return e.re = !1;
                e.regExp || (n = i.escapeRegExp(n)), e.wholeWord && (n = function (e, t) {
                    function n(e) {
                        return /\w/.test(e) || t.regExp ? "\\b" : ""
                    }

                    return n(e[0]) + e + n(e[e.length - 1])
                }(n, e));
                var s = e.caseSensitive ? "gm" : "gmi";
                if (e.$isMultiLine = !t && /[\n\r]/.test(n), e.$isMultiLine) return e.re = this.$assembleMultilineRegExp(n, s);
                try {
                    var o = new RegExp(n, s)
                } catch (e) {
                    o = !1
                }
                return e.re = o
            }, this.$assembleMultilineRegExp = function (e, t) {
                for (var n = e.replace(/\r\n|\r|\n/g, "$\n^").split("\n"), i = [], s = 0; s < n.length; s++) try {
                    i.push(new RegExp(n[s], t))
                } catch (e) {
                    return !1
                }
                return i
            }, this.$matchIterator = function (e, t) {
                var n = this.$assembleRegExp(t);
                if (!n) return !1;
                var i = 1 == t.backwards, s = 0 != t.skipCurrent, o = t.range, r = t.start;
                r || (r = o ? o[i ? "end" : "start"] : e.selection.getRange()), r.start && (r = r[s != i ? "end" : "start"]);
                var a = o ? o.start.row : 0, l = o ? o.end.row : e.getLength() - 1;
                if (i) var h = function (e) {
                    var n = r.row;
                    if (!u(n, r.column, e)) {
                        for (n--; n >= a; n--) if (u(n, Number.MAX_VALUE, e)) return;
                        if (0 != t.wrap) for (n = l, a = r.row; n >= a; n--) if (u(n, Number.MAX_VALUE, e)) return
                    }
                }; else h = function (e) {
                    var n = r.row;
                    if (!u(n, r.column, e)) {
                        for (n += 1; n <= l; n++) if (u(n, 0, e)) return;
                        if (0 != t.wrap) for (n = a, l = r.row; n <= l; n++) if (u(n, 0, e)) return
                    }
                };
                if (t.$isMultiLine) var c = n.length, u = function (t, s, o) {
                    var r = i ? t - c + 1 : t;
                    if (!(r < 0 || r + c > e.getLength())) {
                        var a = e.getLine(r), l = a.search(n[0]);
                        if (!(!i && l < s || -1 === l)) {
                            for (var h = 1; h < c; h++) if (-1 == (a = e.getLine(r + h)).search(n[h])) return;
                            var u = a.match(n[c - 1])[0].length;
                            if (!(i && u > s)) return !!o(r, l, r + c - 1, u) || void 0
                        }
                    }
                }; else u = i ? function (t, i, s) {
                    var o, r = e.getLine(t), a = [], l = 0;
                    for (n.lastIndex = 0; o = n.exec(r);) {
                        var h = o[0].length;
                        if (l = o.index, !h) {
                            if (l >= r.length) break;
                            n.lastIndex = l += 1
                        }
                        if (o.index + h > i) break;
                        a.push(o.index, h)
                    }
                    for (var c = a.length - 1; c >= 0; c -= 2) {
                        var u = a[c - 1];
                        if (s(t, u, t, u + (h = a[c]))) return !0
                    }
                } : function (t, i, s) {
                    var o, r, a = e.getLine(t);
                    for (n.lastIndex = i; r = n.exec(a);) {
                        var l = r[0].length;
                        if (s(t, o = r.index, t, o + l)) return !0;
                        if (!l && (n.lastIndex = o += 1, o >= a.length)) return !1
                    }
                };
                return {forEach: h}
            }
        }).call(r.prototype), t.Search = r
    })), ace.define("ace/keyboard/hash_handler", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], (function (e, t, n) {
        var i = e("../lib/keys"), s = e("../lib/useragent"), o = i.KEY_MODS;

        function r(e, t) {
            this.platform = t || (s.isMac ? "mac" : "win"), this.commands = {}, this.commandKeyBinding = {}, this.addCommands(e), this.$singleCommand = !0
        }

        function a(e, t) {
            r.call(this, e, t), this.$singleCommand = !1
        }

        a.prototype = r.prototype, function () {
            function e(e) {
                return "object" == typeof e && e.bindKey && e.bindKey.position || (e.isDefault ? -100 : 0)
            }

            this.addCommand = function (e) {
                this.commands[e.name] && this.removeCommand(e), this.commands[e.name] = e, e.bindKey && this._buildKeyHash(e)
            }, this.removeCommand = function (e, t) {
                var n = e && ("string" == typeof e ? e : e.name);
                e = this.commands[n], t || delete this.commands[n];
                var i = this.commandKeyBinding;
                for (var s in i) {
                    var o = i[s];
                    if (o == e) delete i[s]; else if (Array.isArray(o)) {
                        var r = o.indexOf(e);
                        -1 != r && (o.splice(r, 1), 1 == o.length && (i[s] = o[0]))
                    }
                }
            }, this.bindKey = function (e, t, n) {
                if ("object" == typeof e && e && (null == n && (n = e.position), e = e[this.platform]), e) return "function" == typeof t ? this.addCommand({
                    exec: t,
                    bindKey: e,
                    name: t.name || e
                }) : void e.split("|").forEach((function (e) {
                    var i = "";
                    if (-1 != e.indexOf(" ")) {
                        var s = e.split(/\s+/);
                        e = s.pop(), s.forEach((function (e) {
                            var t = this.parseKeys(e), n = o[t.hashId] + t.key;
                            i += (i ? " " : "") + n, this._addCommandToBinding(i, "chainKeys")
                        }), this), i += " "
                    }
                    var r = this.parseKeys(e), a = o[r.hashId] + r.key;
                    this._addCommandToBinding(i + a, t, n)
                }), this)
            }, this._addCommandToBinding = function (t, n, i) {
                var s, o = this.commandKeyBinding;
                if (n) if (!o[t] || this.$singleCommand) o[t] = n; else {
                    Array.isArray(o[t]) ? -1 != (s = o[t].indexOf(n)) && o[t].splice(s, 1) : o[t] = [o[t]], "number" != typeof i && (i = e(n));
                    var r = o[t];
                    for (s = 0; s < r.length && !(e(r[s]) > i); s++) ;
                    r.splice(s, 0, n)
                } else delete o[t]
            }, this.addCommands = function (e) {
                e && Object.keys(e).forEach((function (t) {
                    var n = e[t];
                    if (n) {
                        if ("string" == typeof n) return this.bindKey(n, t);
                        "function" == typeof n && (n = {exec: n}), "object" == typeof n && (n.name || (n.name = t), this.addCommand(n))
                    }
                }), this)
            }, this.removeCommands = function (e) {
                Object.keys(e).forEach((function (t) {
                    this.removeCommand(e[t])
                }), this)
            }, this.bindKeys = function (e) {
                Object.keys(e).forEach((function (t) {
                    this.bindKey(t, e[t])
                }), this)
            }, this._buildKeyHash = function (e) {
                this.bindKey(e.bindKey, e)
            }, this.parseKeys = function (e) {
                var t = e.toLowerCase().split(/[\-\+]([\-\+])?/).filter((function (e) {
                    return e
                })), n = t.pop(), s = i[n];
                if (i.FUNCTION_KEYS[s]) n = i.FUNCTION_KEYS[s].toLowerCase(); else {
                    if (!t.length) return {key: n, hashId: -1};
                    if (1 == t.length && "shift" == t[0]) return {key: n.toUpperCase(), hashId: -1}
                }
                for (var o = 0, r = t.length; r--;) {
                    var a = i.KEY_MODS[t[r]];
                    if (null == a) return "undefined" != typeof console && console.error("invalid modifier " + t[r] + " in " + e), !1;
                    o |= a
                }
                return {key: n, hashId: o}
            }, this.findKeyCommand = function (e, t) {
                var n = o[e] + t;
                return this.commandKeyBinding[n]
            }, this.handleKeyboard = function (e, t, n, i) {
                if (!(i < 0)) {
                    var s = o[t] + n, r = this.commandKeyBinding[s];
                    return e.$keyChain && (e.$keyChain += " " + s, r = this.commandKeyBinding[e.$keyChain] || r), !r || "chainKeys" != r && "chainKeys" != r[r.length - 1] ? (e.$keyChain && (t && 4 != t || 1 != n.length ? (-1 == t || i > 0) && (e.$keyChain = "") : e.$keyChain = e.$keyChain.slice(0, -s.length - 1)), {command: r}) : (e.$keyChain = e.$keyChain || s, {command: "null"})
                }
            }, this.getStatusText = function (e, t) {
                return t.$keyChain || ""
            }
        }.call(r.prototype), t.HashHandler = r, t.MultiHashHandler = a
    })), ace.define("ace/commands/command_manager", ["require", "exports", "module", "ace/lib/oop", "ace/keyboard/hash_handler", "ace/lib/event_emitter"], (function (e, t, n) {
        var i = e("../lib/oop"), s = e("../keyboard/hash_handler").MultiHashHandler,
            o = e("../lib/event_emitter").EventEmitter, r = function (e, t) {
                s.call(this, t, e), this.byName = this.commands, this.setDefaultHandler("exec", (function (e) {
                    return e.args ? e.command.exec(e.editor, e.args, e.event, !1) : e.command.exec(e.editor, {}, e.event, !0)
                }))
            };
        i.inherits(r, s), function () {
            i.implement(this, o), this.exec = function (e, t, n) {
                if (Array.isArray(e)) {
                    for (var i = e.length; i--;) if (this.exec(e[i], t, n)) return !0;
                    return !1
                }
                if ("string" == typeof e && (e = this.commands[e]), !e) return !1;
                if (t && t.$readOnly && !e.readOnly) return !1;
                if (0 != this.$checkCommandState && e.isAvailable && !e.isAvailable(t)) return !1;
                var s = {editor: t, command: e, args: n};
                return s.returnValue = this._emit("exec", s), this._signal("afterExec", s), !1 !== s.returnValue
            }, this.toggleRecording = function (e) {
                if (!this.$inReplay) return e && e._emit("changeStatus"), this.recording ? (this.macro.pop(), this.off("exec", this.$addCommandToMacro), this.macro.length || (this.macro = this.oldMacro), this.recording = !1) : (this.$addCommandToMacro || (this.$addCommandToMacro = function (e) {
                    this.macro.push([e.command, e.args])
                }.bind(this)), this.oldMacro = this.macro, this.macro = [], this.on("exec", this.$addCommandToMacro), this.recording = !0)
            }, this.replay = function (e) {
                if (!this.$inReplay && this.macro) {
                    if (this.recording) return this.toggleRecording(e);
                    try {
                        this.$inReplay = !0, this.macro.forEach((function (t) {
                            "string" == typeof t ? this.exec(t, e) : this.exec(t[0], e, t[1])
                        }), this)
                    } finally {
                        this.$inReplay = !1
                    }
                }
            }, this.trimMacro = function (e) {
                return e.map((function (e) {
                    return "string" != typeof e[0] && (e[0] = e[0].name), e[1] || (e = e[0]), e
                }))
            }
        }.call(r.prototype), t.CommandManager = r
    })), ace.define("ace/commands/default_commands", ["require", "exports", "module", "ace/lib/lang", "ace/config", "ace/range"], (function (e, t, n) {
        var i = e("../lib/lang"), s = e("../config"), o = e("../range").Range;

        function r(e, t) {
            return {win: e, mac: t}
        }

        t.commands = [{
            name: "showSettingsMenu",
            description: "Show settings menu",
            bindKey: r("Ctrl-,", "Command-,"),
            exec: function (e) {
                s.loadModule("ace/ext/settings_menu", (function (t) {
                    t.init(e), e.showSettingsMenu()
                }))
            },
            readOnly: !0
        }, {
            name: "goToNextError", description: "Go to next error", bindKey: r("Alt-E", "F4"), exec: function (e) {
                s.loadModule("ace/ext/error_marker", (function (t) {
                    t.showErrorMarker(e, 1)
                }))
            }, scrollIntoView: "animate", readOnly: !0
        }, {
            name: "goToPreviousError",
            description: "Go to previous error",
            bindKey: r("Alt-Shift-E", "Shift-F4"),
            exec: function (e) {
                s.loadModule("ace/ext/error_marker", (function (t) {
                    t.showErrorMarker(e, -1)
                }))
            },
            scrollIntoView: "animate",
            readOnly: !0
        }, {
            name: "selectall", description: "Select all", bindKey: r("Ctrl-A", "Command-A"), exec: function (e) {
                e.selectAll()
            }, readOnly: !0
        }, {
            name: "centerselection", description: "Center selection", bindKey: r(null, "Ctrl-L"), exec: function (e) {
                e.centerSelection()
            }, readOnly: !0
        }, {
            name: "gotoline", description: "Go to line...", bindKey: r("Ctrl-L", "Command-L"), exec: function (e, t) {
                "number" != typeof t || isNaN(t) || e.gotoLine(t), e.prompt({$type: "gotoLine"})
            }, readOnly: !0
        }, {
            name: "fold", bindKey: r("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"), exec: function (e) {
                e.session.toggleFold(!1)
            }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0
        }, {
            name: "unfold",
            bindKey: r("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),
            exec: function (e) {
                e.session.toggleFold(!0)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "toggleFoldWidget", description: "Toggle fold widget", bindKey: r("F2", "F2"), exec: function (e) {
                e.session.toggleFoldWidget()
            }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0
        }, {
            name: "toggleParentFoldWidget",
            description: "Toggle parent fold widget",
            bindKey: r("Alt-F2", "Alt-F2"),
            exec: function (e) {
                e.session.toggleFoldWidget(!0)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "foldall", description: "Fold all", bindKey: r(null, "Ctrl-Command-Option-0"), exec: function (e) {
                e.session.foldAll()
            }, scrollIntoView: "center", readOnly: !0
        }, {
            name: "foldAllComments",
            description: "Fold all comments",
            bindKey: r(null, "Ctrl-Command-Option-0"),
            exec: function (e) {
                e.session.foldAllComments()
            },
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "foldOther", description: "Fold other", bindKey: r("Alt-0", "Command-Option-0"), exec: function (e) {
                e.session.foldAll(), e.session.unfold(e.selection.getAllRanges())
            }, scrollIntoView: "center", readOnly: !0
        }, {
            name: "unfoldall",
            description: "Unfold all",
            bindKey: r("Alt-Shift-0", "Command-Option-Shift-0"),
            exec: function (e) {
                e.session.unfold()
            },
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "findnext", description: "Find next", bindKey: r("Ctrl-K", "Command-G"), exec: function (e) {
                e.findNext()
            }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0
        }, {
            name: "findprevious",
            description: "Find previous",
            bindKey: r("Ctrl-Shift-K", "Command-Shift-G"),
            exec: function (e) {
                e.findPrevious()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "selectOrFindNext",
            description: "Select or find next",
            bindKey: r("Alt-K", "Ctrl-G"),
            exec: function (e) {
                e.selection.isEmpty() ? e.selection.selectWord() : e.findNext()
            },
            readOnly: !0
        }, {
            name: "selectOrFindPrevious",
            description: "Select or find previous",
            bindKey: r("Alt-Shift-K", "Ctrl-Shift-G"),
            exec: function (e) {
                e.selection.isEmpty() ? e.selection.selectWord() : e.findPrevious()
            },
            readOnly: !0
        }, {
            name: "find", description: "Find", bindKey: r("Ctrl-F", "Command-F"), exec: function (e) {
                s.loadModule("ace/ext/searchbox", (function (t) {
                    t.Search(e)
                }))
            }, readOnly: !0
        }, {
            name: "overwrite", description: "Overwrite", bindKey: "Insert", exec: function (e) {
                e.toggleOverwrite()
            }, readOnly: !0
        }, {
            name: "selecttostart",
            description: "Select to start",
            bindKey: r("Ctrl-Shift-Home", "Command-Shift-Home|Command-Shift-Up"),
            exec: function (e) {
                e.getSelection().selectFileStart()
            },
            multiSelectAction: "forEach",
            readOnly: !0,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump"
        }, {
            name: "gotostart",
            description: "Go to start",
            bindKey: r("Ctrl-Home", "Command-Home|Command-Up"),
            exec: function (e) {
                e.navigateFileStart()
            },
            multiSelectAction: "forEach",
            readOnly: !0,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump"
        }, {
            name: "selectup",
            description: "Select up",
            bindKey: r("Shift-Up", "Shift-Up|Ctrl-Shift-P"),
            exec: function (e) {
                e.getSelection().selectUp()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "golineup", description: "Go line up", bindKey: r("Up", "Up|Ctrl-P"), exec: function (e, t) {
                e.navigateUp(t.times)
            }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
        }, {
            name: "selecttoend",
            description: "Select to end",
            bindKey: r("Ctrl-Shift-End", "Command-Shift-End|Command-Shift-Down"),
            exec: function (e) {
                e.getSelection().selectFileEnd()
            },
            multiSelectAction: "forEach",
            readOnly: !0,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump"
        }, {
            name: "gotoend",
            description: "Go to end",
            bindKey: r("Ctrl-End", "Command-End|Command-Down"),
            exec: function (e) {
                e.navigateFileEnd()
            },
            multiSelectAction: "forEach",
            readOnly: !0,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump"
        }, {
            name: "selectdown",
            description: "Select down",
            bindKey: r("Shift-Down", "Shift-Down|Ctrl-Shift-N"),
            exec: function (e) {
                e.getSelection().selectDown()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "golinedown", description: "Go line down", bindKey: r("Down", "Down|Ctrl-N"), exec: function (e, t) {
                e.navigateDown(t.times)
            }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
        }, {
            name: "selectwordleft",
            description: "Select word left",
            bindKey: r("Ctrl-Shift-Left", "Option-Shift-Left"),
            exec: function (e) {
                e.getSelection().selectWordLeft()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "gotowordleft",
            description: "Go to word left",
            bindKey: r("Ctrl-Left", "Option-Left"),
            exec: function (e) {
                e.navigateWordLeft()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selecttolinestart",
            description: "Select to line start",
            bindKey: r("Alt-Shift-Left", "Command-Shift-Left|Ctrl-Shift-A"),
            exec: function (e) {
                e.getSelection().selectLineStart()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "gotolinestart",
            description: "Go to line start",
            bindKey: r("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
            exec: function (e) {
                e.navigateLineStart()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectleft",
            description: "Select left",
            bindKey: r("Shift-Left", "Shift-Left|Ctrl-Shift-B"),
            exec: function (e) {
                e.getSelection().selectLeft()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "gotoleft", description: "Go to left", bindKey: r("Left", "Left|Ctrl-B"), exec: function (e, t) {
                e.navigateLeft(t.times)
            }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
        }, {
            name: "selectwordright",
            description: "Select word right",
            bindKey: r("Ctrl-Shift-Right", "Option-Shift-Right"),
            exec: function (e) {
                e.getSelection().selectWordRight()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "gotowordright",
            description: "Go to word right",
            bindKey: r("Ctrl-Right", "Option-Right"),
            exec: function (e) {
                e.navigateWordRight()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selecttolineend",
            description: "Select to line end",
            bindKey: r("Alt-Shift-Right", "Command-Shift-Right|Shift-End|Ctrl-Shift-E"),
            exec: function (e) {
                e.getSelection().selectLineEnd()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "gotolineend",
            description: "Go to line end",
            bindKey: r("Alt-Right|End", "Command-Right|End|Ctrl-E"),
            exec: function (e) {
                e.navigateLineEnd()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectright",
            description: "Select right",
            bindKey: r("Shift-Right", "Shift-Right"),
            exec: function (e) {
                e.getSelection().selectRight()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "gotoright", description: "Go to right", bindKey: r("Right", "Right|Ctrl-F"), exec: function (e, t) {
                e.navigateRight(t.times)
            }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
        }, {
            name: "selectpagedown", description: "Select page down", bindKey: "Shift-PageDown", exec: function (e) {
                e.selectPageDown()
            }, readOnly: !0
        }, {
            name: "pagedown", description: "Page down", bindKey: r(null, "Option-PageDown"), exec: function (e) {
                e.scrollPageDown()
            }, readOnly: !0
        }, {
            name: "gotopagedown",
            description: "Go to page down",
            bindKey: r("PageDown", "PageDown|Ctrl-V"),
            exec: function (e) {
                e.gotoPageDown()
            },
            readOnly: !0
        }, {
            name: "selectpageup", description: "Select page up", bindKey: "Shift-PageUp", exec: function (e) {
                e.selectPageUp()
            }, readOnly: !0
        }, {
            name: "pageup", description: "Page up", bindKey: r(null, "Option-PageUp"), exec: function (e) {
                e.scrollPageUp()
            }, readOnly: !0
        }, {
            name: "gotopageup", description: "Go to page up", bindKey: "PageUp", exec: function (e) {
                e.gotoPageUp()
            }, readOnly: !0
        }, {
            name: "scrollup", description: "Scroll up", bindKey: r("Ctrl-Up", null), exec: function (e) {
                e.renderer.scrollBy(0, -2 * e.renderer.layerConfig.lineHeight)
            }, readOnly: !0
        }, {
            name: "scrolldown", description: "Scroll down", bindKey: r("Ctrl-Down", null), exec: function (e) {
                e.renderer.scrollBy(0, 2 * e.renderer.layerConfig.lineHeight)
            }, readOnly: !0
        }, {
            name: "selectlinestart", description: "Select line start", bindKey: "Shift-Home", exec: function (e) {
                e.getSelection().selectLineStart()
            }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
        }, {
            name: "selectlineend", description: "Select line end", bindKey: "Shift-End", exec: function (e) {
                e.getSelection().selectLineEnd()
            }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
        }, {
            name: "togglerecording",
            description: "Toggle recording",
            bindKey: r("Ctrl-Alt-E", "Command-Option-E"),
            exec: function (e) {
                e.commands.toggleRecording(e)
            },
            readOnly: !0
        }, {
            name: "replaymacro",
            description: "Replay macro",
            bindKey: r("Ctrl-Shift-E", "Command-Shift-E"),
            exec: function (e) {
                e.commands.replay(e)
            },
            readOnly: !0
        }, {
            name: "jumptomatching",
            description: "Jump to matching",
            bindKey: r("Ctrl-\\|Ctrl-P", "Command-\\"),
            exec: function (e) {
                e.jumpToMatching()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "animate",
            readOnly: !0
        }, {
            name: "selecttomatching",
            description: "Select to matching",
            bindKey: r("Ctrl-Shift-\\|Ctrl-Shift-P", "Command-Shift-\\"),
            exec: function (e) {
                e.jumpToMatching(!0)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "animate",
            readOnly: !0
        }, {
            name: "expandToMatching",
            description: "Expand to matching",
            bindKey: r("Ctrl-Shift-M", "Ctrl-Shift-M"),
            exec: function (e) {
                e.jumpToMatching(!0, !0)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "animate",
            readOnly: !0
        }, {
            name: "passKeysToBrowser", description: "Pass keys to browser", bindKey: r(null, null), exec: function () {
            }, passEvent: !0, readOnly: !0
        }, {
            name: "copy", description: "Copy", exec: function (e) {
            }, readOnly: !0
        }, {
            name: "cut", description: "Cut", exec: function (e) {
                var t = e.$copyWithEmptySelection && e.selection.isEmpty() ? e.selection.getLineRange() : e.selection.getRange();
                e._emit("cut", t), t.isEmpty() || e.session.remove(t), e.clearSelection()
            }, scrollIntoView: "cursor", multiSelectAction: "forEach"
        }, {
            name: "paste", description: "Paste", exec: function (e, t) {
                e.$handlePaste(t)
            }, scrollIntoView: "cursor"
        }, {
            name: "removeline", description: "Remove line", bindKey: r("Ctrl-D", "Command-D"), exec: function (e) {
                e.removeLines()
            }, scrollIntoView: "cursor", multiSelectAction: "forEachLine"
        }, {
            name: "duplicateSelection",
            description: "Duplicate selection",
            bindKey: r("Ctrl-Shift-D", "Command-Shift-D"),
            exec: function (e) {
                e.duplicateSelection()
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEach"
        }, {
            name: "sortlines",
            description: "Sort lines",
            bindKey: r("Ctrl-Alt-S", "Command-Alt-S"),
            exec: function (e) {
                e.sortLines()
            },
            scrollIntoView: "selection",
            multiSelectAction: "forEachLine"
        }, {
            name: "togglecomment",
            description: "Toggle comment",
            bindKey: r("Ctrl-/", "Command-/"),
            exec: function (e) {
                e.toggleCommentLines()
            },
            multiSelectAction: "forEachLine",
            scrollIntoView: "selectionPart"
        }, {
            name: "toggleBlockComment",
            description: "Toggle block comment",
            bindKey: r("Ctrl-Shift-/", "Command-Shift-/"),
            exec: function (e) {
                e.toggleBlockComment()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "selectionPart"
        }, {
            name: "modifyNumberUp",
            description: "Modify number up",
            bindKey: r("Ctrl-Shift-Up", "Alt-Shift-Up"),
            exec: function (e) {
                e.modifyNumber(1)
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEach"
        }, {
            name: "modifyNumberDown",
            description: "Modify number down",
            bindKey: r("Ctrl-Shift-Down", "Alt-Shift-Down"),
            exec: function (e) {
                e.modifyNumber(-1)
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEach"
        }, {
            name: "replace", description: "Replace", bindKey: r("Ctrl-H", "Command-Option-F"), exec: function (e) {
                s.loadModule("ace/ext/searchbox", (function (t) {
                    t.Search(e, !0)
                }))
            }
        }, {
            name: "undo", description: "Undo", bindKey: r("Ctrl-Z", "Command-Z"), exec: function (e) {
                e.undo()
            }
        }, {
            name: "redo",
            description: "Redo",
            bindKey: r("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),
            exec: function (e) {
                e.redo()
            }
        }, {
            name: "copylinesup",
            description: "Copy lines up",
            bindKey: r("Alt-Shift-Up", "Command-Option-Up"),
            exec: function (e) {
                e.copyLinesUp()
            },
            scrollIntoView: "cursor"
        }, {
            name: "movelinesup", description: "Move lines up", bindKey: r("Alt-Up", "Option-Up"), exec: function (e) {
                e.moveLinesUp()
            }, scrollIntoView: "cursor"
        }, {
            name: "copylinesdown",
            description: "Copy lines down",
            bindKey: r("Alt-Shift-Down", "Command-Option-Down"),
            exec: function (e) {
                e.copyLinesDown()
            },
            scrollIntoView: "cursor"
        }, {
            name: "movelinesdown",
            description: "Move lines down",
            bindKey: r("Alt-Down", "Option-Down"),
            exec: function (e) {
                e.moveLinesDown()
            },
            scrollIntoView: "cursor"
        }, {
            name: "del", description: "Delete", bindKey: r("Delete", "Delete|Ctrl-D|Shift-Delete"), exec: function (e) {
                e.remove("right")
            }, multiSelectAction: "forEach", scrollIntoView: "cursor"
        }, {
            name: "backspace",
            description: "Backspace",
            bindKey: r("Shift-Backspace|Backspace", "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),
            exec: function (e) {
                e.remove("left")
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "cut_or_delete", description: "Cut or delete", bindKey: r("Shift-Delete", null), exec: function (e) {
                if (!e.selection.isEmpty()) return !1;
                e.remove("left")
            }, multiSelectAction: "forEach", scrollIntoView: "cursor"
        }, {
            name: "removetolinestart",
            description: "Remove to line start",
            bindKey: r("Alt-Backspace", "Command-Backspace"),
            exec: function (e) {
                e.removeToLineStart()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "removetolineend",
            description: "Remove to line end",
            bindKey: r("Alt-Delete", "Ctrl-K|Command-Delete"),
            exec: function (e) {
                e.removeToLineEnd()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "removetolinestarthard",
            description: "Remove to line start hard",
            bindKey: r("Ctrl-Shift-Backspace", null),
            exec: function (e) {
                var t = e.selection.getRange();
                t.start.column = 0, e.session.remove(t)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "removetolineendhard",
            description: "Remove to line end hard",
            bindKey: r("Ctrl-Shift-Delete", null),
            exec: function (e) {
                var t = e.selection.getRange();
                t.end.column = Number.MAX_VALUE, e.session.remove(t)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "removewordleft",
            description: "Remove word left",
            bindKey: r("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"),
            exec: function (e) {
                e.removeWordLeft()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "removewordright",
            description: "Remove word right",
            bindKey: r("Ctrl-Delete", "Alt-Delete"),
            exec: function (e) {
                e.removeWordRight()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "outdent", description: "Outdent", bindKey: r("Shift-Tab", "Shift-Tab"), exec: function (e) {
                e.blockOutdent()
            }, multiSelectAction: "forEach", scrollIntoView: "selectionPart"
        }, {
            name: "indent", description: "Indent", bindKey: r("Tab", "Tab"), exec: function (e) {
                e.indent()
            }, multiSelectAction: "forEach", scrollIntoView: "selectionPart"
        }, {
            name: "blockoutdent", description: "Block outdent", bindKey: r("Ctrl-[", "Ctrl-["), exec: function (e) {
                e.blockOutdent()
            }, multiSelectAction: "forEachLine", scrollIntoView: "selectionPart"
        }, {
            name: "blockindent", description: "Block indent", bindKey: r("Ctrl-]", "Ctrl-]"), exec: function (e) {
                e.blockIndent()
            }, multiSelectAction: "forEachLine", scrollIntoView: "selectionPart"
        }, {
            name: "insertstring", description: "Insert string", exec: function (e, t) {
                e.insert(t)
            }, multiSelectAction: "forEach", scrollIntoView: "cursor"
        }, {
            name: "inserttext", description: "Insert text", exec: function (e, t) {
                e.insert(i.stringRepeat(t.text || "", t.times || 1))
            }, multiSelectAction: "forEach", scrollIntoView: "cursor"
        }, {
            name: "splitline", description: "Split line", bindKey: r(null, "Ctrl-O"), exec: function (e) {
                e.splitLine()
            }, multiSelectAction: "forEach", scrollIntoView: "cursor"
        }, {
            name: "transposeletters",
            description: "Transpose letters",
            bindKey: r("Alt-Shift-X", "Ctrl-T"),
            exec: function (e) {
                e.transposeLetters()
            },
            multiSelectAction: function (e) {
                e.transposeSelections(1)
            },
            scrollIntoView: "cursor"
        }, {
            name: "touppercase", description: "To uppercase", bindKey: r("Ctrl-U", "Ctrl-U"), exec: function (e) {
                e.toUpperCase()
            }, multiSelectAction: "forEach", scrollIntoView: "cursor"
        }, {
            name: "tolowercase",
            description: "To lowercase",
            bindKey: r("Ctrl-Shift-U", "Ctrl-Shift-U"),
            exec: function (e) {
                e.toLowerCase()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "autoindent", description: "Auto Indent", bindKey: r(null, null), exec: function (e) {
                e.autoIndent()
            }, multiSelectAction: "forEachLine", scrollIntoView: "animate"
        }, {
            name: "expandtoline",
            description: "Expand to line",
            bindKey: r("Ctrl-Shift-L", "Command-Shift-L"),
            exec: function (e) {
                var t = e.selection.getRange();
                t.start.column = t.end.column = 0, t.end.row++, e.selection.setRange(t, !1)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "openlink", bindKey: r("Ctrl+F3", "F3"), exec: function (e) {
                e.openLink()
            }
        }, {
            name: "joinlines", description: "Join lines", bindKey: r(null, null), exec: function (e) {
                for (var t = e.selection.isBackwards(), n = t ? e.selection.getSelectionLead() : e.selection.getSelectionAnchor(), s = t ? e.selection.getSelectionAnchor() : e.selection.getSelectionLead(), r = e.session.doc.getLine(n.row).length, a = e.session.doc.getTextRange(e.selection.getRange()).replace(/\n\s*/, " ").length, l = e.session.doc.getLine(n.row), h = n.row + 1; h <= s.row + 1; h++) {
                    var c = i.stringTrimLeft(i.stringTrimRight(e.session.doc.getLine(h)));
                    0 !== c.length && (c = " " + c), l += c
                }
                s.row + 1 < e.session.doc.getLength() - 1 && (l += e.session.doc.getNewLineCharacter()), e.clearSelection(), e.session.doc.replace(new o(n.row, 0, s.row + 2, 0), l), a > 0 ? (e.selection.moveCursorTo(n.row, n.column), e.selection.selectTo(n.row, n.column + a)) : (r = e.session.doc.getLine(n.row).length > r ? r + 1 : r, e.selection.moveCursorTo(n.row, r))
            }, multiSelectAction: "forEach", readOnly: !0
        }, {
            name: "invertSelection", description: "Invert selection", bindKey: r(null, null), exec: function (e) {
                var t = e.session.doc.getLength() - 1, n = e.session.doc.getLine(t).length,
                    i = e.selection.rangeList.ranges, s = [];
                i.length < 1 && (i = [e.selection.getRange()]);
                for (var r = 0; r < i.length; r++) r == i.length - 1 && (i[r].end.row === t && i[r].end.column === n || s.push(new o(i[r].end.row, i[r].end.column, t, n))), 0 === r ? 0 === i[r].start.row && 0 === i[r].start.column || s.push(new o(0, 0, i[r].start.row, i[r].start.column)) : s.push(new o(i[r - 1].end.row, i[r - 1].end.column, i[r].start.row, i[r].start.column));
                for (e.exitMultiSelectMode(), e.clearSelection(), r = 0; r < s.length; r++) e.selection.addRange(s[r], !1)
            }, readOnly: !0, scrollIntoView: "none"
        }, {
            name: "addLineAfter", description: "Add new line after the current line", exec: function (e) {
                e.selection.clearSelection(), e.navigateLineEnd(), e.insert("\n")
            }, multiSelectAction: "forEach", scrollIntoView: "cursor"
        }, {
            name: "addLineBefore", description: "Add new line before the current line", exec: function (e) {
                e.selection.clearSelection();
                var t = e.getCursorPosition();
                e.selection.moveTo(t.row - 1, Number.MAX_VALUE), e.insert("\n"), 0 === t.row && e.navigateUp()
            }, multiSelectAction: "forEach", scrollIntoView: "cursor"
        }, {
            name: "openCommandPallete",
            description: "Open command palette",
            bindKey: r("F1", "F1"),
            exec: function (e) {
                e.prompt({$type: "commands"})
            },
            readOnly: !0
        }, {
            name: "modeSelect", description: "Change language mode...", bindKey: r(null, null), exec: function (e) {
                e.prompt({$type: "modes"})
            }, readOnly: !0
        }];
        for (var a = 1; a < 9; a++) t.commands.push({
            name: "foldToLevel" + a,
            description: "Fold To Level " + a,
            level: a,
            exec: function (e) {
                e.session.foldToLevel(this.level)
            },
            scrollIntoView: "center",
            readOnly: !0
        })
    })), ace.define("ace/line_widgets", ["require", "exports", "module", "ace/lib/dom"], (function (e, t, n) {
        var i = e("./lib/dom");

        function s(e) {
            this.session = e, this.session.widgetManager = this, this.session.getRowLength = this.getRowLength, this.session.$getWidgetScreenLength = this.$getWidgetScreenLength, this.updateOnChange = this.updateOnChange.bind(this), this.renderWidgets = this.renderWidgets.bind(this), this.measureWidgets = this.measureWidgets.bind(this), this.session._changedWidgets = [], this.$onChangeEditor = this.$onChangeEditor.bind(this), this.session.on("change", this.updateOnChange), this.session.on("changeFold", this.updateOnFold), this.session.on("changeEditor", this.$onChangeEditor)
        }

        (function () {
            this.getRowLength = function (e) {
                var t;
                return t = this.lineWidgets && this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0, this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 + t : 1 + t
            }, this.$getWidgetScreenLength = function () {
                var e = 0;
                return this.lineWidgets.forEach((function (t) {
                    t && t.rowCount && !t.hidden && (e += t.rowCount)
                })), e
            }, this.$onChangeEditor = function (e) {
                this.attach(e.editor)
            }, this.attach = function (e) {
                e && e.widgetManager && e.widgetManager != this && e.widgetManager.detach(), this.editor != e && (this.detach(), this.editor = e, e && (e.widgetManager = this, e.renderer.on("beforeRender", this.measureWidgets), e.renderer.on("afterRender", this.renderWidgets)))
            }, this.detach = function (e) {
                var t = this.editor;
                if (t) {
                    this.editor = null, t.widgetManager = null, t.renderer.off("beforeRender", this.measureWidgets), t.renderer.off("afterRender", this.renderWidgets);
                    var n = this.session.lineWidgets;
                    n && n.forEach((function (e) {
                        e && e.el && e.el.parentNode && (e._inDocument = !1, e.el.parentNode.removeChild(e.el))
                    }))
                }
            }, this.updateOnFold = function (e, t) {
                var n = t.lineWidgets;
                if (n && e.action) {
                    for (var i = e.data, s = i.start.row, o = i.end.row, r = "add" == e.action, a = s + 1; a < o; a++) n[a] && (n[a].hidden = r);
                    n[o] && (r ? n[s] ? n[o].hidden = r : n[s] = n[o] : (n[s] == n[o] && (n[s] = void 0), n[o].hidden = r))
                }
            }, this.updateOnChange = function (e) {
                var t = this.session.lineWidgets;
                if (t) {
                    var n = e.start.row, i = e.end.row - n;
                    if (0 === i) ; else if ("remove" == e.action) {
                        var s = t.splice(n + 1, i);
                        !t[n] && s[s.length - 1] && (t[n] = s.pop()), s.forEach((function (e) {
                            e && this.removeLineWidget(e)
                        }), this), this.$updateRows()
                    } else {
                        var o = new Array(i);
                        t[n] && null != t[n].column && e.start.column > t[n].column && n++, o.unshift(n, 0), t.splice.apply(t, o), this.$updateRows()
                    }
                }
            }, this.$updateRows = function () {
                var e = this.session.lineWidgets;
                if (e) {
                    var t = !0;
                    e.forEach((function (e, n) {
                        if (e) for (t = !1, e.row = n; e.$oldWidget;) e.$oldWidget.row = n, e = e.$oldWidget
                    })), t && (this.session.lineWidgets = null)
                }
            }, this.$registerLineWidget = function (e) {
                this.session.lineWidgets || (this.session.lineWidgets = new Array(this.session.getLength()));
                var t = this.session.lineWidgets[e.row];
                return t && (e.$oldWidget = t, t.el && t.el.parentNode && (t.el.parentNode.removeChild(t.el), t._inDocument = !1)), this.session.lineWidgets[e.row] = e, e
            }, this.addLineWidget = function (e) {
                if (this.$registerLineWidget(e), e.session = this.session, !this.editor) return e;
                var t = this.editor.renderer;
                e.html && !e.el && (e.el = i.createElement("div"), e.el.innerHTML = e.html), e.text && !e.el && (e.el = i.createElement("div"), e.el.textContent = e.text), e.el && (i.addCssClass(e.el, "ace_lineWidgetContainer"), e.className && i.addCssClass(e.el, e.className), e.el.style.position = "absolute", e.el.style.zIndex = 5, t.container.appendChild(e.el), e._inDocument = !0, e.coverGutter || (e.el.style.zIndex = 3), null == e.pixelHeight && (e.pixelHeight = e.el.offsetHeight)), null == e.rowCount && (e.rowCount = e.pixelHeight / t.layerConfig.lineHeight);
                var n = this.session.getFoldAt(e.row, 0);
                if (e.$fold = n, n) {
                    var s = this.session.lineWidgets;
                    e.row != n.end.row || s[n.start.row] ? e.hidden = !0 : s[n.start.row] = e
                }
                return this.session._emit("changeFold", {data: {start: {row: e.row}}}), this.$updateRows(), this.renderWidgets(null, t), this.onWidgetChanged(e), e
            }, this.removeLineWidget = function (e) {
                if (e._inDocument = !1, e.session = null, e.el && e.el.parentNode && e.el.parentNode.removeChild(e.el), e.editor && e.editor.destroy) try {
                    e.editor.destroy()
                } catch (e) {
                }
                if (this.session.lineWidgets) {
                    var t = this.session.lineWidgets[e.row];
                    if (t == e) this.session.lineWidgets[e.row] = e.$oldWidget, e.$oldWidget && this.onWidgetChanged(e.$oldWidget); else for (; t;) {
                        if (t.$oldWidget == e) {
                            t.$oldWidget = e.$oldWidget;
                            break
                        }
                        t = t.$oldWidget
                    }
                }
                this.session._emit("changeFold", {data: {start: {row: e.row}}}), this.$updateRows()
            }, this.getWidgetsAtRow = function (e) {
                for (var t = this.session.lineWidgets, n = t && t[e], i = []; n;) i.push(n), n = n.$oldWidget;
                return i
            }, this.onWidgetChanged = function (e) {
                this.session._changedWidgets.push(e), this.editor && this.editor.renderer.updateFull()
            }, this.measureWidgets = function (e, t) {
                var n = this.session._changedWidgets, i = t.layerConfig;
                if (n && n.length) {
                    for (var s = 1 / 0, o = 0; o < n.length; o++) {
                        var r = n[o];
                        if (r && r.el && r.session == this.session) {
                            if (!r._inDocument) {
                                if (this.session.lineWidgets[r.row] != r) continue;
                                r._inDocument = !0, t.container.appendChild(r.el)
                            }
                            r.h = r.el.offsetHeight, r.fixedWidth || (r.w = r.el.offsetWidth, r.screenWidth = Math.ceil(r.w / i.characterWidth));
                            var a = r.h / i.lineHeight;
                            r.coverLine && (a -= this.session.getRowLineCount(r.row)) < 0 && (a = 0), r.rowCount != a && (r.rowCount = a, r.row < s && (s = r.row))
                        }
                    }
                    s != 1 / 0 && (this.session._emit("changeFold", {data: {start: {row: s}}}), this.session.lineWidgetWidth = null), this.session._changedWidgets = []
                }
            }, this.renderWidgets = function (e, t) {
                var n = t.layerConfig, i = this.session.lineWidgets;
                if (i) {
                    for (var s = Math.min(this.firstRow, n.firstRow), o = Math.max(this.lastRow, n.lastRow, i.length); s > 0 && !i[s];) s--;
                    this.firstRow = n.firstRow, this.lastRow = n.lastRow, t.$cursorLayer.config = n;
                    for (var r = s; r <= o; r++) {
                        var a = i[r];
                        if (a && a.el) if (a.hidden) a.el.style.top = -100 - (a.pixelHeight || 0) + "px"; else {
                            a._inDocument || (a._inDocument = !0, t.container.appendChild(a.el));
                            var l = t.$cursorLayer.getPixelPosition({row: r, column: 0}, !0).top;
                            a.coverLine || (l += n.lineHeight * this.session.getRowLineCount(a.row)), a.el.style.top = l - n.offset + "px";
                            var h = a.coverGutter ? 0 : t.gutterWidth;
                            a.fixedWidth || (h -= t.scrollLeft), a.el.style.left = h + "px", a.fullWidth && a.screenWidth && (a.el.style.minWidth = n.width + 2 * n.padding + "px"), a.fixedWidth ? a.el.style.right = t.scrollBar.getWidth() + "px" : a.el.style.right = ""
                        }
                    }
                }
            }
        }).call(s.prototype), t.LineWidgets = s
    })), ace.define("ace/editor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/keyboard/textinput", "ace/mouse/mouse_handler", "ace/mouse/fold_handler", "ace/keyboard/keybinding", "ace/edit_session", "ace/search", "ace/range", "ace/lib/event_emitter", "ace/commands/command_manager", "ace/commands/default_commands", "ace/config", "ace/token_iterator", "ace/line_widgets", "ace/clipboard"], (function (e, t, n) {
        var i = this && this.__values || function (e) {
                var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], i = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function () {
                        return e && i >= e.length && (e = void 0), {value: e && e[i++], done: !e}
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }, s = e("./lib/oop"), o = e("./lib/dom"), r = e("./lib/lang"), a = e("./lib/useragent"),
            l = e("./keyboard/textinput").TextInput, h = e("./mouse/mouse_handler").MouseHandler,
            c = e("./mouse/fold_handler").FoldHandler, u = e("./keyboard/keybinding").KeyBinding,
            d = e("./edit_session").EditSession, g = e("./search").Search, f = e("./range").Range,
            m = e("./lib/event_emitter").EventEmitter, p = e("./commands/command_manager").CommandManager,
            v = e("./commands/default_commands").commands, w = e("./config"), $ = e("./token_iterator").TokenIterator,
            b = e("./line_widgets").LineWidgets, y = e("./clipboard"), x = function (e, t, n) {
                this.$toDestroy = [];
                var i = e.getContainerElement();
                this.container = i, this.renderer = e, this.id = "editor" + ++x.$uid, this.commands = new p(a.isMac ? "mac" : "win", v), "object" == typeof document && (this.textInput = new l(e.getTextAreaContainer(), this), this.renderer.textarea = this.textInput.getElement(), this.$mouseHandler = new h(this), new c(this)), this.keyBinding = new u(this), this.$search = (new g).set({wrap: !0}), this.$historyTracker = this.$historyTracker.bind(this), this.commands.on("exec", this.$historyTracker), this.$initOperationListeners(), this._$emitInputEvent = r.delayedCall(function () {
                    this._signal("input", {}), this.session && !this.session.destroyed && this.session.bgTokenizer.scheduleStart()
                }.bind(this)), this.on("change", (function (e, t) {
                    t._$emitInputEvent.schedule(31)
                })), this.setSession(t || n && n.session || new d("")), w.resetOptions(this), n && this.setOptions(n), w._signal("editor", this)
            };
        x.$uid = 0, function () {
            s.implement(this, m), this.$initOperationListeners = function () {
                this.commands.on("exec", this.startOperation.bind(this), !0), this.commands.on("afterExec", this.endOperation.bind(this), !0), this.$opResetTimer = r.delayedCall(this.endOperation.bind(this, !0)), this.on("change", function () {
                    this.curOp || (this.startOperation(), this.curOp.selectionBefore = this.$lastSel), this.curOp.docChanged = !0
                }.bind(this), !0), this.on("changeSelection", function () {
                    this.curOp || (this.startOperation(), this.curOp.selectionBefore = this.$lastSel), this.curOp.selectionChanged = !0
                }.bind(this), !0)
            }, this.curOp = null, this.prevOp = {}, this.startOperation = function (e) {
                if (this.curOp) {
                    if (!e || this.curOp.command) return;
                    this.prevOp = this.curOp
                }
                e || (this.previousCommand = null, e = {}), this.$opResetTimer.schedule(), this.curOp = this.session.curOp = {
                    command: e.command || {},
                    args: e.args,
                    scrollTop: this.renderer.scrollTop
                }, this.curOp.selectionBefore = this.selection.toJSON()
            }, this.endOperation = function (e) {
                if (this.curOp && this.session) {
                    if (e && !1 === e.returnValue || !this.session) return this.curOp = null;
                    if (1 == e && this.curOp.command && "mouse" == this.curOp.command.name) return;
                    if (this._signal("beforeEndOperation"), !this.curOp) return;
                    var t = this.curOp.command, n = t && t.scrollIntoView;
                    if (n) {
                        switch (n) {
                            case"center-animate":
                                n = "animate";
                            case"center":
                                this.renderer.scrollCursorIntoView(null, .5);
                                break;
                            case"animate":
                            case"cursor":
                                this.renderer.scrollCursorIntoView();
                                break;
                            case"selectionPart":
                                var i = this.selection.getRange(), s = this.renderer.layerConfig;
                                (i.start.row >= s.lastRow || i.end.row <= s.firstRow) && this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead)
                        }
                        "animate" == n && this.renderer.animateScrolling(this.curOp.scrollTop)
                    }
                    var o = this.selection.toJSON();
                    this.curOp.selectionAfter = o, this.$lastSel = this.selection.toJSON(), this.session.getUndoManager().addSelection(o), this.prevOp = this.curOp, this.curOp = null
                }
            }, this.$mergeableCommands = ["backspace", "del", "insertstring"], this.$historyTracker = function (e) {
                if (this.$mergeUndoDeltas) {
                    var t = this.prevOp, n = this.$mergeableCommands, i = t.command && e.command.name == t.command.name;
                    if ("insertstring" == e.command.name) {
                        var s = e.args;
                        void 0 === this.mergeNextCommand && (this.mergeNextCommand = !0), i = i && this.mergeNextCommand && (!/\s/.test(s) || /\s/.test(t.args)), this.mergeNextCommand = !0
                    } else i = i && -1 !== n.indexOf(e.command.name);
                    "always" != this.$mergeUndoDeltas && Date.now() - this.sequenceStartTime > 2e3 && (i = !1), i ? this.session.mergeUndoDeltas = !0 : -1 !== n.indexOf(e.command.name) && (this.sequenceStartTime = Date.now())
                }
            }, this.setKeyboardHandler = function (e, t) {
                if (e && "string" == typeof e && "ace" != e) {
                    this.$keybindingId = e;
                    var n = this;
                    w.loadModule(["keybinding", e], (function (i) {
                        n.$keybindingId == e && n.keyBinding.setKeyboardHandler(i && i.handler), t && t()
                    }))
                } else this.$keybindingId = null, this.keyBinding.setKeyboardHandler(e), t && t()
            }, this.getKeyboardHandler = function () {
                return this.keyBinding.getKeyboardHandler()
            }, this.setSession = function (e) {
                if (this.session != e) {
                    this.curOp && this.endOperation(), this.curOp = {};
                    var t = this.session;
                    if (t) {
                        this.session.off("change", this.$onDocumentChange), this.session.off("changeMode", this.$onChangeMode), this.session.off("tokenizerUpdate", this.$onTokenizerUpdate), this.session.off("changeTabSize", this.$onChangeTabSize), this.session.off("changeWrapLimit", this.$onChangeWrapLimit), this.session.off("changeWrapMode", this.$onChangeWrapMode), this.session.off("changeFold", this.$onChangeFold), this.session.off("changeFrontMarker", this.$onChangeFrontMarker), this.session.off("changeBackMarker", this.$onChangeBackMarker), this.session.off("changeBreakpoint", this.$onChangeBreakpoint), this.session.off("changeAnnotation", this.$onChangeAnnotation), this.session.off("changeOverwrite", this.$onCursorChange), this.session.off("changeScrollTop", this.$onScrollTopChange), this.session.off("changeScrollLeft", this.$onScrollLeftChange);
                        var n = this.session.getSelection();
                        n.off("changeCursor", this.$onCursorChange), n.off("changeSelection", this.$onSelectionChange)
                    }
                    this.session = e, e ? (this.$onDocumentChange = this.onDocumentChange.bind(this), e.on("change", this.$onDocumentChange), this.renderer.setSession(e), this.$onChangeMode = this.onChangeMode.bind(this), e.on("changeMode", this.$onChangeMode), this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this), e.on("tokenizerUpdate", this.$onTokenizerUpdate), this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer), e.on("changeTabSize", this.$onChangeTabSize), this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this), e.on("changeWrapLimit", this.$onChangeWrapLimit), this.$onChangeWrapMode = this.onChangeWrapMode.bind(this), e.on("changeWrapMode", this.$onChangeWrapMode), this.$onChangeFold = this.onChangeFold.bind(this), e.on("changeFold", this.$onChangeFold), this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this), this.session.on("changeFrontMarker", this.$onChangeFrontMarker), this.$onChangeBackMarker = this.onChangeBackMarker.bind(this), this.session.on("changeBackMarker", this.$onChangeBackMarker), this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this), this.session.on("changeBreakpoint", this.$onChangeBreakpoint), this.$onChangeAnnotation = this.onChangeAnnotation.bind(this), this.session.on("changeAnnotation", this.$onChangeAnnotation), this.$onCursorChange = this.onCursorChange.bind(this), this.session.on("changeOverwrite", this.$onCursorChange), this.$onScrollTopChange = this.onScrollTopChange.bind(this), this.session.on("changeScrollTop", this.$onScrollTopChange), this.$onScrollLeftChange = this.onScrollLeftChange.bind(this), this.session.on("changeScrollLeft", this.$onScrollLeftChange), this.selection = e.getSelection(), this.selection.on("changeCursor", this.$onCursorChange), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.on("changeSelection", this.$onSelectionChange), this.onChangeMode(), this.onCursorChange(), this.onScrollTopChange(), this.onScrollLeftChange(), this.onSelectionChange(), this.onChangeFrontMarker(), this.onChangeBackMarker(), this.onChangeBreakpoint(), this.onChangeAnnotation(), this.session.getUseWrapMode() && this.renderer.adjustWrapLimit(), this.renderer.updateFull()) : (this.selection = null, this.renderer.setSession(e)), this._signal("changeSession", {
                        session: e,
                        oldSession: t
                    }), this.curOp = null, t && t._signal("changeEditor", {oldEditor: this}), e && e._signal("changeEditor", {editor: this}), e && !e.destroyed && e.bgTokenizer.scheduleStart()
                }
            }, this.getSession = function () {
                return this.session
            }, this.setValue = function (e, t) {
                return this.session.doc.setValue(e), t ? 1 == t ? this.navigateFileEnd() : -1 == t && this.navigateFileStart() : this.selectAll(), e
            }, this.getValue = function () {
                return this.session.getValue()
            }, this.getSelection = function () {
                return this.selection
            }, this.resize = function (e) {
                this.renderer.onResize(e)
            }, this.setTheme = function (e, t) {
                this.renderer.setTheme(e, t)
            }, this.getTheme = function () {
                return this.renderer.getTheme()
            }, this.setStyle = function (e) {
                this.renderer.setStyle(e)
            }, this.unsetStyle = function (e) {
                this.renderer.unsetStyle(e)
            }, this.getFontSize = function () {
                return this.getOption("fontSize") || o.computedStyle(this.container).fontSize
            }, this.setFontSize = function (e) {
                this.setOption("fontSize", e)
            }, this.$highlightBrackets = function () {
                if (!this.$highlightPending) {
                    var e = this;
                    this.$highlightPending = !0, setTimeout((function () {
                        e.$highlightPending = !1;
                        var t = e.session;
                        if (t && !t.destroyed) {
                            t.$bracketHighlight && (t.$bracketHighlight.markerIds.forEach((function (e) {
                                t.removeMarker(e)
                            })), t.$bracketHighlight = null);
                            var n = e.getCursorPosition(), i = e.getKeyboardHandler(),
                                s = i && i.$getDirectionForHighlight && i.$getDirectionForHighlight(e),
                                o = t.getMatchingBracketRanges(n, s);
                            if (!o) {
                                var r = new $(t, n.row, n.column).getCurrentToken();
                                if (r && /\b(?:tag-open|tag-name)/.test(r.type)) {
                                    var a = t.getMatchingTags(n);
                                    a && (o = [a.openTagName, a.closeTagName])
                                }
                            }
                            if (!o && t.$mode.getMatching && (o = t.$mode.getMatching(e.session)), o) {
                                var l = "ace_bracket";
                                Array.isArray(o) ? 1 == o.length && (l = "ace_error_bracket") : o = [o], 2 == o.length && (0 == f.comparePoints(o[0].end, o[1].start) ? o = [f.fromPoints(o[0].start, o[1].end)] : 0 == f.comparePoints(o[0].start, o[1].end) && (o = [f.fromPoints(o[1].start, o[0].end)])), t.$bracketHighlight = {
                                    ranges: o,
                                    markerIds: o.map((function (e) {
                                        return t.addMarker(e, l, "text")
                                    }))
                                }, e.getHighlightIndentGuides() && e.renderer.$textLayer.$highlightIndentGuide()
                            } else e.getHighlightIndentGuides() && e.renderer.$textLayer.$highlightIndentGuide()
                        }
                    }), 50)
                }
            }, this.focus = function () {
                this.textInput.focus()
            }, this.isFocused = function () {
                return this.textInput.isFocused()
            }, this.blur = function () {
                this.textInput.blur()
            }, this.onFocus = function (e) {
                this.$isFocused || (this.$isFocused = !0, this.renderer.showCursor(), this.renderer.visualizeFocus(), this._emit("focus", e))
            }, this.onBlur = function (e) {
                this.$isFocused && (this.$isFocused = !1, this.renderer.hideCursor(), this.renderer.visualizeBlur(), this._emit("blur", e))
            }, this.$cursorChange = function () {
                this.renderer.updateCursor(), this.$highlightBrackets(), this.$updateHighlightActiveLine()
            }, this.onDocumentChange = function (e) {
                var t = this.session.$useWrapMode, n = e.start.row == e.end.row ? e.end.row : 1 / 0;
                this.renderer.updateLines(e.start.row, n, t), this._signal("change", e), this.$cursorChange()
            }, this.onTokenizerUpdate = function (e) {
                var t = e.data;
                this.renderer.updateLines(t.first, t.last)
            }, this.onScrollTopChange = function () {
                this.renderer.scrollToY(this.session.getScrollTop())
            }, this.onScrollLeftChange = function () {
                this.renderer.scrollToX(this.session.getScrollLeft())
            }, this.onCursorChange = function () {
                this.$cursorChange(), this._signal("changeSelection")
            }, this.$updateHighlightActiveLine = function () {
                var e, t = this.getSession();
                if (this.$highlightActiveLine && ("line" == this.$selectionStyle && this.selection.isMultiLine() || (e = this.getCursorPosition()), this.renderer.theme && this.renderer.theme.$selectionColorConflict && !this.selection.isEmpty() && (e = !1), !this.renderer.$maxLines || 1 !== this.session.getLength() || this.renderer.$minLines > 1 || (e = !1)), t.$highlightLineMarker && !e) t.removeMarker(t.$highlightLineMarker.id), t.$highlightLineMarker = null; else if (!t.$highlightLineMarker && e) {
                    var n = new f(e.row, e.column, e.row, 1 / 0);
                    n.id = t.addMarker(n, "ace_active-line", "screenLine"), t.$highlightLineMarker = n
                } else e && (t.$highlightLineMarker.start.row = e.row, t.$highlightLineMarker.end.row = e.row, t.$highlightLineMarker.start.column = e.column, t._signal("changeBackMarker"))
            }, this.onSelectionChange = function (e) {
                var t = this.session;
                if (t.$selectionMarker && t.removeMarker(t.$selectionMarker), t.$selectionMarker = null, this.selection.isEmpty()) this.$updateHighlightActiveLine(); else {
                    var n = this.selection.getRange(), i = this.getSelectionStyle();
                    t.$selectionMarker = t.addMarker(n, "ace_selection", i)
                }
                var s = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();
                this.session.highlight(s), this._signal("changeSelection")
            }, this.$getSelectionHighLightRegexp = function () {
                var e = this.session, t = this.getSelectionRange();
                if (!t.isEmpty() && !t.isMultiLine()) {
                    var n = t.start.column, i = t.end.column, s = e.getLine(t.start.row), o = s.substring(n, i);
                    if (!(o.length > 5e3) && /[\w\d]/.test(o)) {
                        var r = this.$search.$assembleRegExp({wholeWord: !0, caseSensitive: !0, needle: o}),
                            a = s.substring(n - 1, i + 1);
                        if (r.test(a)) return r
                    }
                }
            }, this.onChangeFrontMarker = function () {
                this.renderer.updateFrontMarkers()
            }, this.onChangeBackMarker = function () {
                this.renderer.updateBackMarkers()
            }, this.onChangeBreakpoint = function () {
                this.renderer.updateBreakpoints()
            }, this.onChangeAnnotation = function () {
                this.renderer.setAnnotations(this.session.getAnnotations())
            }, this.onChangeMode = function (e) {
                this.renderer.updateText(), this._emit("changeMode", e)
            }, this.onChangeWrapLimit = function () {
                this.renderer.updateFull()
            }, this.onChangeWrapMode = function () {
                this.renderer.onResize(!0)
            }, this.onChangeFold = function () {
                this.$updateHighlightActiveLine(), this.renderer.updateFull()
            }, this.getSelectedText = function () {
                return this.session.getTextRange(this.getSelectionRange())
            }, this.getCopyText = function () {
                var e = this.getSelectedText(), t = this.session.doc.getNewLineCharacter(), n = !1;
                if (!e && this.$copyWithEmptySelection) {
                    n = !0;
                    for (var i = this.selection.getAllRanges(), s = 0; s < i.length; s++) {
                        var o = i[s];
                        s && i[s - 1].start.row == o.start.row || (e += this.session.getLine(o.start.row) + t)
                    }
                }
                var r = {text: e};
                return this._signal("copy", r), y.lineMode = !!n && r.text, r.text
            }, this.onCopy = function () {
                this.commands.exec("copy", this)
            }, this.onCut = function () {
                this.commands.exec("cut", this)
            }, this.onPaste = function (e, t) {
                var n = {text: e, event: t};
                this.commands.exec("paste", this, n)
            }, this.$handlePaste = function (e) {
                "string" == typeof e && (e = {text: e}), this._signal("paste", e);
                var t = e.text, n = t === y.lineMode, i = this.session;
                if (!this.inMultiSelectMode || this.inVirtualSelectionMode) n ? i.insert({
                    row: this.selection.lead.row,
                    column: 0
                }, t) : this.insert(t); else if (n) this.selection.rangeList.ranges.forEach((function (e) {
                    i.insert({row: e.start.row, column: 0}, t)
                })); else {
                    var s = t.split(/\r\n|\r|\n/), o = this.selection.rangeList.ranges,
                        r = !(2 != s.length || s[0] && s[1]);
                    if (s.length != o.length || r) return this.commands.exec("insertstring", this, t);
                    for (var a = o.length; a--;) {
                        var l = o[a];
                        l.isEmpty() || i.remove(l), i.insert(l.start, s[a])
                    }
                }
            }, this.execCommand = function (e, t) {
                return this.commands.exec(e, this, t)
            }, this.insert = function (e, t) {
                var n = this.session, i = n.getMode(), s = this.getCursorPosition();
                if (this.getBehavioursEnabled() && !t) {
                    var o = i.transformAction(n.getState(s.row), "insertion", this, n, e);
                    o && (e !== o.text && (this.inVirtualSelectionMode || (this.session.mergeUndoDeltas = !1, this.mergeNextCommand = !1)), e = o.text)
                }
                if ("\t" == e && (e = this.session.getTabString()), this.selection.isEmpty()) this.session.getOverwrite() && -1 == e.indexOf("\n") && ((r = new f.fromPoints(s, s)).end.column += e.length, this.session.remove(r)); else {
                    var r = this.getSelectionRange();
                    s = this.session.remove(r), this.clearSelection()
                }
                if ("\n" == e || "\r\n" == e) {
                    var a = n.getLine(s.row);
                    if (s.column > a.search(/\S|$/)) {
                        var l = a.substr(s.column).search(/\S|$/);
                        n.doc.removeInLine(s.row, s.column, s.column + l)
                    }
                }
                this.clearSelection();
                var h = s.column, c = n.getState(s.row), u = (a = n.getLine(s.row), i.checkOutdent(c, a, e));
                if (n.insert(s, e), o && o.selection && (2 == o.selection.length ? this.selection.setSelectionRange(new f(s.row, h + o.selection[0], s.row, h + o.selection[1])) : this.selection.setSelectionRange(new f(s.row + o.selection[0], o.selection[1], s.row + o.selection[2], o.selection[3]))), this.$enableAutoIndent) {
                    if (n.getDocument().isNewLine(e)) {
                        var d = i.getNextLineIndent(c, a.slice(0, s.column), n.getTabString());
                        n.insert({row: s.row + 1, column: 0}, d)
                    }
                    u && i.autoOutdent(c, n, s.row)
                }
            }, this.autoIndent = function () {
                var e, t, n = this.session, i = n.getMode();
                if (this.selection.isEmpty()) e = 0, t = n.doc.getLength() - 1; else {
                    var s = this.getSelectionRange();
                    e = s.start.row, t = s.end.row
                }
                for (var o, r, a, l = "", h = "", c = "", u = n.getTabString(), d = e; d <= t; d++) d > 0 && (l = n.getState(d - 1), h = n.getLine(d - 1), c = i.getNextLineIndent(l, h, u)), o = n.getLine(d), c !== (r = i.$getIndent(o)) && (r.length > 0 && (a = new f(d, 0, d, r.length), n.remove(a)), c.length > 0 && n.insert({
                    row: d,
                    column: 0
                }, c)), i.autoOutdent(l, n, d)
            }, this.onTextInput = function (e, t) {
                if (!t) return this.keyBinding.onTextInput(e);
                this.startOperation({command: {name: "insertstring"}});
                var n = this.applyComposition.bind(this, e, t);
                this.selection.rangeCount ? this.forEachSelection(n) : n(), this.endOperation()
            }, this.applyComposition = function (e, t) {
                var n;
                (t.extendLeft || t.extendRight) && ((n = this.selection.getRange()).start.column -= t.extendLeft, n.end.column += t.extendRight, n.start.column < 0 && (n.start.row--, n.start.column += this.session.getLine(n.start.row).length + 1), this.selection.setRange(n), e || n.isEmpty() || this.remove()), !e && this.selection.isEmpty() || this.insert(e, !0), (t.restoreStart || t.restoreEnd) && ((n = this.selection.getRange()).start.column -= t.restoreStart, n.end.column -= t.restoreEnd, this.selection.setRange(n))
            }, this.onCommandKey = function (e, t, n) {
                return this.keyBinding.onCommandKey(e, t, n)
            }, this.setOverwrite = function (e) {
                this.session.setOverwrite(e)
            }, this.getOverwrite = function () {
                return this.session.getOverwrite()
            }, this.toggleOverwrite = function () {
                this.session.toggleOverwrite()
            }, this.setScrollSpeed = function (e) {
                this.setOption("scrollSpeed", e)
            }, this.getScrollSpeed = function () {
                return this.getOption("scrollSpeed")
            }, this.setDragDelay = function (e) {
                this.setOption("dragDelay", e)
            }, this.getDragDelay = function () {
                return this.getOption("dragDelay")
            }, this.setSelectionStyle = function (e) {
                this.setOption("selectionStyle", e)
            }, this.getSelectionStyle = function () {
                return this.getOption("selectionStyle")
            }, this.setHighlightActiveLine = function (e) {
                this.setOption("highlightActiveLine", e)
            }, this.getHighlightActiveLine = function () {
                return this.getOption("highlightActiveLine")
            }, this.setHighlightGutterLine = function (e) {
                this.setOption("highlightGutterLine", e)
            }, this.getHighlightGutterLine = function () {
                return this.getOption("highlightGutterLine")
            }, this.setHighlightSelectedWord = function (e) {
                this.setOption("highlightSelectedWord", e)
            }, this.getHighlightSelectedWord = function () {
                return this.$highlightSelectedWord
            }, this.setAnimatedScroll = function (e) {
                this.renderer.setAnimatedScroll(e)
            }, this.getAnimatedScroll = function () {
                return this.renderer.getAnimatedScroll()
            }, this.setShowInvisibles = function (e) {
                this.renderer.setShowInvisibles(e)
            }, this.getShowInvisibles = function () {
                return this.renderer.getShowInvisibles()
            }, this.setDisplayIndentGuides = function (e) {
                this.renderer.setDisplayIndentGuides(e)
            }, this.getDisplayIndentGuides = function () {
                return this.renderer.getDisplayIndentGuides()
            }, this.setHighlightIndentGuides = function (e) {
                this.renderer.setHighlightIndentGuides(e)
            }, this.getHighlightIndentGuides = function () {
                return this.renderer.getHighlightIndentGuides()
            }, this.setShowPrintMargin = function (e) {
                this.renderer.setShowPrintMargin(e)
            }, this.getShowPrintMargin = function () {
                return this.renderer.getShowPrintMargin()
            }, this.setPrintMarginColumn = function (e) {
                this.renderer.setPrintMarginColumn(e)
            }, this.getPrintMarginColumn = function () {
                return this.renderer.getPrintMarginColumn()
            }, this.setReadOnly = function (e) {
                this.setOption("readOnly", e)
            }, this.getReadOnly = function () {
                return this.getOption("readOnly")
            }, this.setBehavioursEnabled = function (e) {
                this.setOption("behavioursEnabled", e)
            }, this.getBehavioursEnabled = function () {
                return this.getOption("behavioursEnabled")
            }, this.setWrapBehavioursEnabled = function (e) {
                this.setOption("wrapBehavioursEnabled", e)
            }, this.getWrapBehavioursEnabled = function () {
                return this.getOption("wrapBehavioursEnabled")
            }, this.setShowFoldWidgets = function (e) {
                this.setOption("showFoldWidgets", e)
            }, this.getShowFoldWidgets = function () {
                return this.getOption("showFoldWidgets")
            }, this.setFadeFoldWidgets = function (e) {
                this.setOption("fadeFoldWidgets", e)
            }, this.getFadeFoldWidgets = function () {
                return this.getOption("fadeFoldWidgets")
            }, this.remove = function (e) {
                this.selection.isEmpty() && ("left" == e ? this.selection.selectLeft() : this.selection.selectRight());
                var t = this.getSelectionRange();
                if (this.getBehavioursEnabled()) {
                    var n = this.session, i = n.getState(t.start.row),
                        s = n.getMode().transformAction(i, "deletion", this, n, t);
                    if (0 === t.end.column) {
                        var o = n.getTextRange(t);
                        if ("\n" == o[o.length - 1]) {
                            var r = n.getLine(t.end.row);
                            /^\s+$/.test(r) && (t.end.column = r.length)
                        }
                    }
                    s && (t = s)
                }
                this.session.remove(t), this.clearSelection()
            }, this.removeWordRight = function () {
                this.selection.isEmpty() && this.selection.selectWordRight(), this.session.remove(this.getSelectionRange()), this.clearSelection()
            }, this.removeWordLeft = function () {
                this.selection.isEmpty() && this.selection.selectWordLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection()
            }, this.removeToLineStart = function () {
                this.selection.isEmpty() && this.selection.selectLineStart(), this.selection.isEmpty() && this.selection.selectLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection()
            }, this.removeToLineEnd = function () {
                this.selection.isEmpty() && this.selection.selectLineEnd();
                var e = this.getSelectionRange();
                e.start.column == e.end.column && e.start.row == e.end.row && (e.end.column = 0, e.end.row++), this.session.remove(e), this.clearSelection()
            }, this.splitLine = function () {
                this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()), this.clearSelection());
                var e = this.getCursorPosition();
                this.insert("\n"), this.moveCursorToPosition(e)
            }, this.setGhostText = function (e, t) {
                this.session.widgetManager || (this.session.widgetManager = new b(this.session), this.session.widgetManager.attach(this)), this.renderer.setGhostText(e, t)
            },this.removeGhostText = function () {
                this.session.widgetManager && this.renderer.removeGhostText()
            },this.transposeLetters = function () {
                if (this.selection.isEmpty()) {
                    var e = this.getCursorPosition(), t = e.column;
                    if (0 !== t) {
                        var n, i, s = this.session.getLine(e.row);
                        t < s.length ? (n = s.charAt(t) + s.charAt(t - 1), i = new f(e.row, t - 1, e.row, t + 1)) : (n = s.charAt(t - 1) + s.charAt(t - 2), i = new f(e.row, t - 2, e.row, t)), this.session.replace(i, n), this.session.selection.moveToPosition(i.end)
                    }
                }
            },this.toLowerCase = function () {
                var e = this.getSelectionRange();
                this.selection.isEmpty() && this.selection.selectWord();
                var t = this.getSelectionRange(), n = this.session.getTextRange(t);
                this.session.replace(t, n.toLowerCase()), this.selection.setSelectionRange(e)
            },this.toUpperCase = function () {
                var e = this.getSelectionRange();
                this.selection.isEmpty() && this.selection.selectWord();
                var t = this.getSelectionRange(), n = this.session.getTextRange(t);
                this.session.replace(t, n.toUpperCase()), this.selection.setSelectionRange(e)
            },this.indent = function () {
                var e = this.session, t = this.getSelectionRange();
                if (!(t.start.row < t.end.row)) {
                    if (t.start.column < t.end.column) {
                        var n = e.getTextRange(t);
                        if (!/^\s+$/.test(n)) return c = this.$getSelectedRows(), void e.indentRows(c.first, c.last, "\t")
                    }
                    var i = e.getLine(t.start.row), s = t.start, o = e.getTabSize(),
                        a = e.documentToScreenColumn(s.row, s.column);
                    if (this.session.getUseSoftTabs()) var l = o - a % o, h = r.stringRepeat(" ", l); else {
                        for (l = a % o; " " == i[t.start.column - 1] && l;) t.start.column--, l--;
                        this.selection.setSelectionRange(t), h = "\t"
                    }
                    return this.insert(h)
                }
                var c = this.$getSelectedRows();
                e.indentRows(c.first, c.last, "\t")
            },this.blockIndent = function () {
                var e = this.$getSelectedRows();
                this.session.indentRows(e.first, e.last, "\t")
            },this.blockOutdent = function () {
                var e = this.session.getSelection();
                this.session.outdentRows(e.getRange())
            },this.sortLines = function () {
                for (var e = this.$getSelectedRows(), t = this.session, n = [], i = e.first; i <= e.last; i++) n.push(t.getLine(i));
                n.sort((function (e, t) {
                    return e.toLowerCase() < t.toLowerCase() ? -1 : e.toLowerCase() > t.toLowerCase() ? 1 : 0
                }));
                var s = new f(0, 0, 0, 0);
                for (i = e.first; i <= e.last; i++) {
                    var o = t.getLine(i);
                    s.start.row = i, s.end.row = i, s.end.column = o.length, t.replace(s, n[i - e.first])
                }
            },this.toggleCommentLines = function () {
                var e = this.session.getState(this.getCursorPosition().row), t = this.$getSelectedRows();
                this.session.getMode().toggleCommentLines(e, this.session, t.first, t.last)
            },this.toggleBlockComment = function () {
                var e = this.getCursorPosition(), t = this.session.getState(e.row), n = this.getSelectionRange();
                this.session.getMode().toggleBlockComment(t, this.session, n, e)
            },this.getNumberAt = function (e, t) {
                var n = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
                n.lastIndex = 0;
                for (var i = this.session.getLine(e); n.lastIndex < t;) {
                    var s = n.exec(i);
                    if (s.index <= t && s.index + s[0].length >= t) return {
                        value: s[0],
                        start: s.index,
                        end: s.index + s[0].length
                    }
                }
                return null
            },this.modifyNumber = function (e) {
                var t = this.selection.getCursor().row, n = this.selection.getCursor().column,
                    i = new f(t, n - 1, t, n), s = this.session.getTextRange(i);
                if (!isNaN(parseFloat(s)) && isFinite(s)) {
                    var o = this.getNumberAt(t, n);
                    if (o) {
                        var r = o.value.indexOf(".") >= 0 ? o.start + o.value.indexOf(".") + 1 : o.end,
                            a = o.start + o.value.length - r, l = parseFloat(o.value);
                        l *= Math.pow(10, a), r !== o.end && n < r ? e *= Math.pow(10, o.end - n - 1) : e *= Math.pow(10, o.end - n), l += e;
                        var h = (l /= Math.pow(10, a)).toFixed(a), c = new f(t, o.start, t, o.end);
                        this.session.replace(c, h), this.moveCursorTo(t, Math.max(o.start + 1, n + h.length - o.value.length))
                    }
                } else this.toggleWord()
            },this.$toggleWordPairs = [["first", "last"], ["true", "false"], ["yes", "no"], ["width", "height"], ["top", "bottom"], ["right", "left"], ["on", "off"], ["x", "y"], ["get", "set"], ["max", "min"], ["horizontal", "vertical"], ["show", "hide"], ["add", "remove"], ["up", "down"], ["before", "after"], ["even", "odd"], ["in", "out"], ["inside", "outside"], ["next", "previous"], ["increase", "decrease"], ["attach", "detach"], ["&&", "||"], ["==", "!="]],this.toggleWord = function () {
                var e = this.selection.getCursor().row, t = this.selection.getCursor().column;
                this.selection.selectWord();
                var n = this.getSelectedText(), i = this.selection.getWordRange().start.column,
                    s = n.replace(/([a-z]+|[A-Z]+)(?=[A-Z_]|$)/g, "$1 ").split(/\s/), o = t - i - 1;
                o < 0 && (o = 0);
                var a = 0, l = 0, h = this;
                n.match(/[A-Za-z0-9_]+/) && s.forEach((function (t, s) {
                    l = a + t.length, o >= a && o <= l && (n = t, h.selection.clearSelection(), h.moveCursorTo(e, a + i), h.selection.selectTo(e, l + i)), a = l
                }));
                for (var c, u = this.$toggleWordPairs, d = 0; d < u.length; d++) for (var g = u[d], f = 0; f <= 1; f++) {
                    var m = +!f, p = n.match(new RegExp("^\\s?_?(" + r.escapeRegExp(g[f]) + ")\\s?$", "i"));
                    p && n.match(new RegExp("([_]|^|\\s)(" + r.escapeRegExp(p[1]) + ")($|\\s)", "g")) && (c = n.replace(new RegExp(r.escapeRegExp(g[f]), "i"), (function (e) {
                        var t = g[m];
                        return e.toUpperCase() == e ? t = t.toUpperCase() : e.charAt(0).toUpperCase() == e.charAt(0) && (t = t.substr(0, 0) + g[m].charAt(0).toUpperCase() + t.substr(1)), t
                    })), this.insert(c), c = "")
                }
            },this.findLinkAt = function (e, t) {
                var n, s, o = this.session.getLine(e).split(/((?:https?|ftp):\/\/[\S]+)/), r = t;
                r < 0 && (r = 0);
                var a, l = 0, h = 0;
                try {
                    for (var c = i(o), u = c.next(); !u.done; u = c.next()) {
                        var d = u.value;
                        if (h = l + d.length, r >= l && r <= h && d.match(/((?:https?|ftp):\/\/[\S]+)/)) {
                            a = d.replace(/[\s:.,'";}\]]+$/, "");
                            break
                        }
                        l = h
                    }
                } catch (e) {
                    n = {error: e}
                } finally {
                    try {
                        u && !u.done && (s = c.return) && s.call(c)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return a
            },this.openLink = function () {
                var e = this.selection.getCursor(), t = this.findLinkAt(e.row, e.column);
                return t && window.open(t, "_blank"), null != t
            },this.removeLines = function () {
                var e = this.$getSelectedRows();
                this.session.removeFullLines(e.first, e.last), this.clearSelection()
            },this.duplicateSelection = function () {
                var e = this.selection, t = this.session, n = e.getRange(), i = e.isBackwards();
                if (n.isEmpty()) {
                    var s = n.start.row;
                    t.duplicateLines(s, s)
                } else {
                    var o = i ? n.start : n.end, r = t.insert(o, t.getTextRange(n), !1);
                    n.start = o, n.end = r, e.setSelectionRange(n, i)
                }
            },this.moveLinesDown = function () {
                this.$moveLines(1, !1)
            },this.moveLinesUp = function () {
                this.$moveLines(-1, !1)
            },this.moveText = function (e, t, n) {
                return this.session.moveText(e, t, n)
            },this.copyLinesUp = function () {
                this.$moveLines(-1, !0)
            },this.copyLinesDown = function () {
                this.$moveLines(1, !0)
            },this.$moveLines = function (e, t) {
                var n, i, s = this.selection;
                if (!s.inMultiSelectMode || this.inVirtualSelectionMode) {
                    var o = s.toOrientedRange();
                    n = this.$getSelectedRows(o), i = this.session.$moveLines(n.first, n.last, t ? 0 : e), t && -1 == e && (i = 0), o.moveBy(i, 0), s.fromOrientedRange(o)
                } else {
                    var r = s.rangeList.ranges;
                    s.rangeList.detach(this.session), this.inVirtualSelectionMode = !0;
                    for (var a = 0, l = 0, h = r.length, c = 0; c < h; c++) {
                        var u = c;
                        r[c].moveBy(a, 0);
                        for (var d = (n = this.$getSelectedRows(r[c])).first, g = n.last; ++c < h;) {
                            l && r[c].moveBy(l, 0);
                            var f = this.$getSelectedRows(r[c]);
                            if (t && f.first != g) break;
                            if (!t && f.first > g + 1) break;
                            g = f.last
                        }
                        for (c--, a = this.session.$moveLines(d, g, t ? 0 : e), t && -1 == e && (u = c + 1); u <= c;) r[u].moveBy(a, 0), u++;
                        t || (a = 0), l += a
                    }
                    s.fromOrientedRange(s.ranges[0]), s.rangeList.attach(this.session), this.inVirtualSelectionMode = !1
                }
            },this.$getSelectedRows = function (e) {
                return e = (e || this.getSelectionRange()).collapseRows(), {
                    first: this.session.getRowFoldStart(e.start.row),
                    last: this.session.getRowFoldEnd(e.end.row)
                }
            },this.onCompositionStart = function (e) {
                this.renderer.showComposition(e)
            },this.onCompositionUpdate = function (e) {
                this.renderer.setCompositionText(e)
            },this.onCompositionEnd = function () {
                this.renderer.hideComposition()
            },this.getFirstVisibleRow = function () {
                return this.renderer.getFirstVisibleRow()
            },this.getLastVisibleRow = function () {
                return this.renderer.getLastVisibleRow()
            },this.isRowVisible = function (e) {
                return e >= this.getFirstVisibleRow() && e <= this.getLastVisibleRow()
            },this.isRowFullyVisible = function (e) {
                return e >= this.renderer.getFirstFullyVisibleRow() && e <= this.renderer.getLastFullyVisibleRow()
            },this.$getVisibleRowCount = function () {
                return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1
            },this.$moveByPage = function (e, t) {
                var n = this.renderer, i = this.renderer.layerConfig, s = e * Math.floor(i.height / i.lineHeight);
                !0 === t ? this.selection.$moveSelection((function () {
                    this.moveCursorBy(s, 0)
                })) : !1 === t && (this.selection.moveCursorBy(s, 0), this.selection.clearSelection());
                var o = n.scrollTop;
                n.scrollBy(0, s * i.lineHeight), null != t && n.scrollCursorIntoView(null, .5), n.animateScrolling(o)
            },this.selectPageDown = function () {
                this.$moveByPage(1, !0)
            },this.selectPageUp = function () {
                this.$moveByPage(-1, !0)
            },this.gotoPageDown = function () {
                this.$moveByPage(1, !1)
            },this.gotoPageUp = function () {
                this.$moveByPage(-1, !1)
            },this.scrollPageDown = function () {
                this.$moveByPage(1)
            },this.scrollPageUp = function () {
                this.$moveByPage(-1)
            },this.scrollToRow = function (e) {
                this.renderer.scrollToRow(e)
            },this.scrollToLine = function (e, t, n, i) {
                this.renderer.scrollToLine(e, t, n, i)
            },this.centerSelection = function () {
                var e = this.getSelectionRange(), t = {
                    row: Math.floor(e.start.row + (e.end.row - e.start.row) / 2),
                    column: Math.floor(e.start.column + (e.end.column - e.start.column) / 2)
                };
                this.renderer.alignCursor(t, .5)
            },this.getCursorPosition = function () {
                return this.selection.getCursor()
            },this.getCursorPositionScreen = function () {
                return this.session.documentToScreenPosition(this.getCursorPosition())
            },this.getSelectionRange = function () {
                return this.selection.getRange()
            },this.selectAll = function () {
                this.selection.selectAll()
            },this.clearSelection = function () {
                this.selection.clearSelection()
            },this.moveCursorTo = function (e, t) {
                this.selection.moveCursorTo(e, t)
            },this.moveCursorToPosition = function (e) {
                this.selection.moveCursorToPosition(e)
            },this.jumpToMatching = function (e, t) {
                var n = this.getCursorPosition(), i = new $(this.session, n.row, n.column), s = i.getCurrentToken(),
                    o = 0;
                s && -1 !== s.type.indexOf("tag-name") && (s = i.stepBackward());
                var r = s || i.stepForward();
                if (r) {
                    var a, l, h = !1, c = {}, u = n.column - r.start,
                        d = {")": "(", "(": "(", "]": "[", "[": "[", "{": "{", "}": "{"};
                    do {
                        if (r.value.match(/[{}()\[\]]/g)) {
                            for (; u < r.value.length && !h; u++) if (d[r.value[u]]) switch (l = d[r.value[u]] + "." + r.type.replace("rparen", "lparen"), isNaN(c[l]) && (c[l] = 0), r.value[u]) {
                                case"(":
                                case"[":
                                case"{":
                                    c[l]++;
                                    break;
                                case")":
                                case"]":
                                case"}":
                                    c[l]--, -1 === c[l] && (a = "bracket", h = !0)
                            }
                        } else -1 !== r.type.indexOf("tag-name") && (isNaN(c[r.value]) && (c[r.value] = 0), "<" === s.value && o > 1 ? c[r.value]++ : "</" === s.value && c[r.value]--, -1 === c[r.value] && (a = "tag", h = !0));
                        h || (s = r, o++, r = i.stepForward(), u = 0)
                    } while (r && !h);
                    if (a) {
                        var g, m;
                        if ("bracket" === a) (g = this.session.getBracketRange(n)) || (m = (g = new f(i.getCurrentTokenRow(), i.getCurrentTokenColumn() + u - 1, i.getCurrentTokenRow(), i.getCurrentTokenColumn() + u - 1)).start, (t || m.row === n.row && Math.abs(m.column - n.column) < 2) && (g = this.session.getBracketRange(m))); else if ("tag" === a) {
                            if (!r || -1 === r.type.indexOf("tag-name")) return;
                            if (0 === (g = new f(i.getCurrentTokenRow(), i.getCurrentTokenColumn() - 2, i.getCurrentTokenRow(), i.getCurrentTokenColumn() - 2)).compare(n.row, n.column)) {
                                var p = this.session.getMatchingTags(n);
                                p && (p.openTag.contains(n.row, n.column) ? m = (g = p.closeTag).start : (g = p.openTag, m = p.closeTag.start.row === n.row && p.closeTag.start.column === n.column ? g.end : g.start))
                            }
                            m = m || g.start
                        }
                        (m = g && g.cursor || m) && (e ? g && t ? this.selection.setRange(g) : g && g.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(m.row, m.column) : this.selection.moveTo(m.row, m.column))
                    }
                }
            },this.gotoLine = function (e, t, n) {
                this.selection.clearSelection(), this.session.unfold({
                    row: e - 1,
                    column: t || 0
                }), this.exitMultiSelectMode && this.exitMultiSelectMode(), this.moveCursorTo(e - 1, t || 0), this.isRowFullyVisible(e - 1) || this.scrollToLine(e - 1, !0, n)
            },this.navigateTo = function (e, t) {
                this.selection.moveTo(e, t)
            },this.navigateUp = function (e) {
                if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
                    var t = this.selection.anchor.getPosition();
                    return this.moveCursorToPosition(t)
                }
                this.selection.clearSelection(), this.selection.moveCursorBy(-e || -1, 0)
            },this.navigateDown = function (e) {
                if (this.selection.isMultiLine() && this.selection.isBackwards()) {
                    var t = this.selection.anchor.getPosition();
                    return this.moveCursorToPosition(t)
                }
                this.selection.clearSelection(), this.selection.moveCursorBy(e || 1, 0)
            },this.navigateLeft = function (e) {
                if (this.selection.isEmpty()) for (e = e || 1; e--;) this.selection.moveCursorLeft(); else {
                    var t = this.getSelectionRange().start;
                    this.moveCursorToPosition(t)
                }
                this.clearSelection()
            },this.navigateRight = function (e) {
                if (this.selection.isEmpty()) for (e = e || 1; e--;) this.selection.moveCursorRight(); else {
                    var t = this.getSelectionRange().end;
                    this.moveCursorToPosition(t)
                }
                this.clearSelection()
            },this.navigateLineStart = function () {
                this.selection.moveCursorLineStart(), this.clearSelection()
            },this.navigateLineEnd = function () {
                this.selection.moveCursorLineEnd(), this.clearSelection()
            },this.navigateFileEnd = function () {
                this.selection.moveCursorFileEnd(), this.clearSelection()
            },this.navigateFileStart = function () {
                this.selection.moveCursorFileStart(), this.clearSelection()
            },this.navigateWordRight = function () {
                this.selection.moveCursorWordRight(), this.clearSelection()
            },this.navigateWordLeft = function () {
                this.selection.moveCursorWordLeft(), this.clearSelection()
            },this.replace = function (e, t) {
                t && this.$search.set(t);
                var n = this.$search.find(this.session), i = 0;
                return n ? (this.$tryReplace(n, e) && (i = 1), this.selection.setSelectionRange(n), this.renderer.scrollSelectionIntoView(n.start, n.end), i) : i
            },this.replaceAll = function (e, t) {
                t && this.$search.set(t);
                var n = this.$search.findAll(this.session), i = 0;
                if (!n.length) return i;
                var s = this.getSelectionRange();
                this.selection.moveTo(0, 0);
                for (var o = n.length - 1; o >= 0; --o) this.$tryReplace(n[o], e) && i++;
                return this.selection.setSelectionRange(s), i
            },this.$tryReplace = function (e, t) {
                var n = this.session.getTextRange(e);
                return null !== (t = this.$search.replace(n, t)) ? (e.end = this.session.replace(e, t), e) : null
            },this.getLastSearchOptions = function () {
                return this.$search.getOptions()
            },this.find = function (e, t, n) {
                t || (t = {}), "string" == typeof e || e instanceof RegExp ? t.needle = e : "object" == typeof e && s.mixin(t, e);
                var i = this.selection.getRange();
                null == t.needle && ((e = this.session.getTextRange(i) || this.$search.$options.needle) || (i = this.session.getWordRange(i.start.row, i.start.column), e = this.session.getTextRange(i)), this.$search.set({needle: e})), this.$search.set(t), t.start || this.$search.set({start: i});
                var o = this.$search.find(this.session);
                return t.preventScroll ? o : o ? (this.revealRange(o, n), o) : (t.backwards ? i.start = i.end : i.end = i.start, void this.selection.setRange(i))
            },this.findNext = function (e, t) {
                this.find({skipCurrent: !0, backwards: !1}, e, t)
            },this.findPrevious = function (e, t) {
                this.find(e, {skipCurrent: !0, backwards: !0}, t)
            },this.revealRange = function (e, t) {
                this.session.unfold(e), this.selection.setSelectionRange(e);
                var n = this.renderer.scrollTop;
                this.renderer.scrollSelectionIntoView(e.start, e.end, .5), !1 !== t && this.renderer.animateScrolling(n)
            },this.undo = function () {
                this.session.getUndoManager().undo(this.session), this.renderer.scrollCursorIntoView(null, .5)
            },this.redo = function () {
                this.session.getUndoManager().redo(this.session), this.renderer.scrollCursorIntoView(null, .5)
            },this.destroy = function () {
                this.$toDestroy && (this.$toDestroy.forEach((function (e) {
                    e.destroy()
                })), this.$toDestroy = null), this.$mouseHandler && this.$mouseHandler.destroy(), this.renderer.destroy(), this._signal("destroy", this), this.session && this.session.destroy(), this._$emitInputEvent && this._$emitInputEvent.cancel(), this.removeAllListeners()
            },this.setAutoScrollEditorIntoView = function (e) {
                if (e) {
                    var t, n = this, i = !1;
                    this.$scrollAnchor || (this.$scrollAnchor = document.createElement("div"));
                    var s = this.$scrollAnchor;
                    s.style.cssText = "position:absolute", this.container.insertBefore(s, this.container.firstChild);
                    var o = this.on("changeSelection", (function () {
                        i = !0
                    })), r = this.renderer.on("beforeRender", (function () {
                        i && (t = n.renderer.container.getBoundingClientRect())
                    })), a = this.renderer.on("afterRender", (function () {
                        if (i && t && (n.isFocused() || n.searchBox && n.searchBox.isFocused())) {
                            var e = n.renderer, o = e.$cursorLayer.$pixelPos, r = e.layerConfig, a = o.top - r.offset;
                            null != (i = o.top >= 0 && a + t.top < 0 || !(o.top < r.height && o.top + t.top + r.lineHeight > window.innerHeight) && null) && (s.style.top = a + "px", s.style.left = o.left + "px", s.style.height = r.lineHeight + "px", s.scrollIntoView(i)), i = t = null
                        }
                    }));
                    this.setAutoScrollEditorIntoView = function (e) {
                        e || (delete this.setAutoScrollEditorIntoView, this.off("changeSelection", o), this.renderer.off("afterRender", a), this.renderer.off("beforeRender", r))
                    }
                }
            },this.$resetCursorStyle = function () {
                var e = this.$cursorStyle || "ace", t = this.renderer.$cursorLayer;
                t && (t.setSmoothBlinking(/smooth/.test(e)), t.isBlinking = !this.$readOnly && "wide" != e, o.setCssClass(t.element, "ace_slim-cursors", /slim/.test(e)))
            },this.prompt = function (e, t, n) {
                var i = this;
                w.loadModule("ace/ext/prompt", (function (s) {
                    s.prompt(i, e, t, n)
                }))
            }
        }.call(x.prototype), w.defineOptions(x.prototype, "editor", {
            selectionStyle: {
                set: function (e) {
                    this.onSelectionChange(), this._signal("changeSelectionStyle", {data: e})
                }, initialValue: "line"
            },
            highlightActiveLine: {
                set: function () {
                    this.$updateHighlightActiveLine()
                }, initialValue: !0
            },
            highlightSelectedWord: {
                set: function (e) {
                    this.$onSelectionChange()
                }, initialValue: !0
            },
            readOnly: {
                set: function (e) {
                    this.textInput.setReadOnly(e), this.$resetCursorStyle()
                }, initialValue: !1
            },
            copyWithEmptySelection: {
                set: function (e) {
                    this.textInput.setCopyWithEmptySelection(e)
                }, initialValue: !1
            },
            cursorStyle: {
                set: function (e) {
                    this.$resetCursorStyle()
                }, values: ["ace", "slim", "smooth", "wide"], initialValue: "ace"
            },
            mergeUndoDeltas: {values: [!1, !0, "always"], initialValue: !0},
            behavioursEnabled: {initialValue: !0},
            wrapBehavioursEnabled: {initialValue: !0},
            enableAutoIndent: {initialValue: !0},
            autoScrollEditorIntoView: {
                set: function (e) {
                    this.setAutoScrollEditorIntoView(e)
                }
            },
            keyboardHandler: {
                set: function (e) {
                    this.setKeyboardHandler(e)
                }, get: function () {
                    return this.$keybindingId
                }, handlesSet: !0
            },
            value: {
                set: function (e) {
                    this.session.setValue(e)
                }, get: function () {
                    return this.getValue()
                }, handlesSet: !0, hidden: !0
            },
            session: {
                set: function (e) {
                    this.setSession(e)
                }, get: function () {
                    return this.session
                }, handlesSet: !0, hidden: !0
            },
            showLineNumbers: {
                set: function (e) {
                    this.renderer.$gutterLayer.setShowLineNumbers(e), this.renderer.$loop.schedule(this.renderer.CHANGE_GUTTER), e && this.$relativeLineNumbers ? C.attach(this) : C.detach(this)
                }, initialValue: !0
            },
            relativeLineNumbers: {
                set: function (e) {
                    this.$showLineNumbers && e ? C.attach(this) : C.detach(this)
                }
            },
            placeholder: {
                set: function (e) {
                    this.$updatePlaceholder || (this.$updatePlaceholder = function () {
                        var e = this.session && (this.renderer.$composition || this.getValue());
                        if (e && this.renderer.placeholderNode) this.renderer.off("afterRender", this.$updatePlaceholder), o.removeCssClass(this.container, "ace_hasPlaceholder"), this.renderer.placeholderNode.remove(), this.renderer.placeholderNode = null; else if (e || this.renderer.placeholderNode) !e && this.renderer.placeholderNode && (this.renderer.placeholderNode.textContent = this.$placeholder || ""); else {
                            this.renderer.on("afterRender", this.$updatePlaceholder), o.addCssClass(this.container, "ace_hasPlaceholder");
                            var t = o.createElement("div");
                            t.className = "ace_placeholder", t.textContent = this.$placeholder || "", this.renderer.placeholderNode = t, this.renderer.content.appendChild(this.renderer.placeholderNode)
                        }
                    }.bind(this), this.on("input", this.$updatePlaceholder)), this.$updatePlaceholder()
                }
            },
            customScrollbar: "renderer",
            hScrollBarAlwaysVisible: "renderer",
            vScrollBarAlwaysVisible: "renderer",
            highlightGutterLine: "renderer",
            animatedScroll: "renderer",
            showInvisibles: "renderer",
            showPrintMargin: "renderer",
            printMarginColumn: "renderer",
            printMargin: "renderer",
            fadeFoldWidgets: "renderer",
            showFoldWidgets: "renderer",
            displayIndentGuides: "renderer",
            highlightIndentGuides: "renderer",
            showGutter: "renderer",
            fontSize: "renderer",
            fontFamily: "renderer",
            maxLines: "renderer",
            minLines: "renderer",
            scrollPastEnd: "renderer",
            fixedWidthGutter: "renderer",
            theme: "renderer",
            hasCssTransforms: "renderer",
            maxPixelHeight: "renderer",
            useTextareaForIME: "renderer",
            scrollSpeed: "$mouseHandler",
            dragDelay: "$mouseHandler",
            dragEnabled: "$mouseHandler",
            focusTimeout: "$mouseHandler",
            tooltipFollowsMouse: "$mouseHandler",
            firstLineNumber: "session",
            overwrite: "session",
            newLineMode: "session",
            useWorker: "session",
            useSoftTabs: "session",
            navigateWithinSoftTabs: "session",
            tabSize: "session",
            wrap: "session",
            indentedSoftWrap: "session",
            foldStyle: "session",
            mode: "session"
        });
        var C = {
            getText: function (e, t) {
                return (Math.abs(e.selection.lead.row - t) || t + 1 + (t < 9 ? "·" : "")) + ""
            }, getWidth: function (e, t, n) {
                return Math.max(t.toString().length, (n.lastRow + 1).toString().length, 2) * n.characterWidth
            }, update: function (e, t) {
                t.renderer.$loop.schedule(t.renderer.CHANGE_GUTTER)
            }, attach: function (e) {
                e.renderer.$gutterLayer.$renderer = this, e.on("changeSelection", this.update), this.update(null, e)
            }, detach: function (e) {
                e.renderer.$gutterLayer.$renderer == this && (e.renderer.$gutterLayer.$renderer = null), e.off("changeSelection", this.update), this.update(null, e)
            }
        };
        t.Editor = x
    })), ace.define("ace/undomanager", ["require", "exports", "module", "ace/range"], (function (e, t, n) {
        var i = function () {
            this.$maxRev = 0, this.$fromUndo = !1, this.$undoDepth = 1 / 0, this.reset()
        };
        (function () {
            this.addSession = function (e) {
                this.$session = e
            }, this.add = function (e, t, n) {
                if (!this.$fromUndo && e != this.$lastDelta) {
                    if (this.$keepRedoStack || (this.$redoStack.length = 0), !1 === t || !this.lastDeltas) {
                        this.lastDeltas = [];
                        var i = this.$undoStack.length;
                        i > this.$undoDepth - 1 && this.$undoStack.splice(0, i - this.$undoDepth + 1), this.$undoStack.push(this.lastDeltas), e.id = this.$rev = ++this.$maxRev
                    }
                    "remove" != e.action && "insert" != e.action || (this.$lastDelta = e), this.lastDeltas.push(e)
                }
            }, this.addSelection = function (e, t) {
                this.selections.push({value: e, rev: t || this.$rev})
            }, this.startNewGroup = function () {
                return this.lastDeltas = null, this.$rev
            }, this.markIgnored = function (e, t) {
                null == t && (t = this.$rev + 1);
                for (var n = this.$undoStack, i = n.length; i--;) {
                    var s = n[i][0];
                    if (s.id <= e) break;
                    s.id < t && (s.ignore = !0)
                }
                this.lastDeltas = null
            }, this.getSelection = function (e, t) {
                for (var n = this.selections, i = n.length; i--;) {
                    var s = n[i];
                    if (s.rev < e) return t && (s = n[i + 1]), s
                }
            }, this.getRevision = function () {
                return this.$rev
            }, this.getDeltas = function (e, t) {
                null == t && (t = this.$rev + 1);
                for (var n = this.$undoStack, i = null, s = 0, o = n.length; o--;) {
                    var r = n[o][0];
                    if (r.id < t && !i && (i = o + 1), r.id <= e) {
                        s = o + 1;
                        break
                    }
                }
                return n.slice(s, i)
            }, this.getChangedRanges = function (e, t) {
                null == t && (t = this.$rev + 1)
            }, this.getChangedLines = function (e, t) {
                null == t && (t = this.$rev + 1)
            }, this.undo = function (e, t) {
                this.lastDeltas = null;
                var n = this.$undoStack;
                if (function (e, t) {
                    for (var n = t; n--;) {
                        var i = e[n];
                        if (i && !i[0].ignore) {
                            for (; n < t - 1;) {
                                var s = c(e[n], e[n + 1]);
                                e[n] = s[0], e[n + 1] = s[1], n++
                            }
                            return !0
                        }
                    }
                }(n, n.length)) {
                    e || (e = this.$session), this.$redoStackBaseRev !== this.$rev && this.$redoStack.length && (this.$redoStack = []), this.$fromUndo = !0;
                    var i = n.pop(), s = null;
                    return i && (s = e.undoChanges(i, t), this.$redoStack.push(i), this.$syncRev()), this.$fromUndo = !1, s
                }
            }, this.redo = function (e, t) {
                if (this.lastDeltas = null, e || (e = this.$session), this.$fromUndo = !0, this.$redoStackBaseRev != this.$rev) {
                    var n = this.getDeltas(this.$redoStackBaseRev, this.$rev + 1);
                    !function (e, t) {
                        for (var n = 0; n < t.length; n++) for (var i = t[n], s = 0; s < i.length; s++) m(e, i[s])
                    }(this.$redoStack, n), this.$redoStackBaseRev = this.$rev, this.$redoStack.forEach((function (e) {
                        e[0].id = ++this.$maxRev
                    }), this)
                }
                var i = this.$redoStack.pop(), s = null;
                return i && (s = e.redoChanges(i, t), this.$undoStack.push(i), this.$syncRev()), this.$fromUndo = !1, s
            }, this.$syncRev = function () {
                var e = this.$undoStack, t = e[e.length - 1], n = t && t[0].id || 0;
                this.$redoStackBaseRev = n, this.$rev = n
            }, this.reset = function () {
                this.lastDeltas = null, this.$lastDelta = null, this.$undoStack = [], this.$redoStack = [], this.$rev = 0, this.mark = 0, this.$redoStackBaseRev = this.$rev, this.selections = []
            }, this.canUndo = function () {
                return this.$undoStack.length > 0
            }, this.canRedo = function () {
                return this.$redoStack.length > 0
            }, this.bookmark = function (e) {
                null == e && (e = this.$rev), this.mark = e
            }, this.isAtBookmark = function () {
                return this.$rev === this.mark
            }, this.toJSON = function () {
            }, this.fromJSON = function () {
            }, this.hasUndo = this.canUndo, this.hasRedo = this.canRedo, this.isClean = this.isAtBookmark, this.markClean = this.bookmark, this.$prettyPrint = function (e) {
                return e ? a(e) : a(this.$undoStack) + "\n---\n" + a(this.$redoStack)
            }
        }).call(i.prototype);
        var s = e("./range").Range, o = s.comparePoints;

        function r(e) {
            return {row: e.row, column: e.column}
        }

        function a(e) {
            if (e = e || this, Array.isArray(e)) return e.map(a).join("\n");
            var t = "";
            return e.action ? (t = "insert" == e.action ? "+" : "-", t += "[" + e.lines + "]") : e.value && (t = Array.isArray(e.value) ? e.value.map(l).join("\n") : l(e.value)), e.start && (t += l(e)), (e.id || e.rev) && (t += "\t(" + (e.id || e.rev) + ")"), t
        }

        function l(e) {
            return e.start.row + ":" + e.start.column + "=>" + e.end.row + ":" + e.end.column
        }

        function h(e, t) {
            var n = "insert" == e.action, i = "insert" == t.action;
            if (n && i) if (o(t.start, e.end) >= 0) d(t, e, -1); else {
                if (!(o(t.start, e.start) <= 0)) return null;
                d(e, t, 1)
            } else if (n && !i) if (o(t.start, e.end) >= 0) d(t, e, -1); else {
                if (!(o(t.end, e.start) <= 0)) return null;
                d(e, t, -1)
            } else if (!n && i) if (o(t.start, e.start) >= 0) d(t, e, 1); else {
                if (!(o(t.start, e.start) <= 0)) return null;
                d(e, t, 1)
            } else if (!n && !i) if (o(t.start, e.start) >= 0) d(t, e, 1); else {
                if (!(o(t.end, e.start) <= 0)) return null;
                d(e, t, -1)
            }
            return [t, e]
        }

        function c(e, t) {
            for (var n = e.length; n--;) for (var i = 0; i < t.length; i++) if (!h(e[n], t[i])) {
                for (; n < e.length;) {
                    for (; i--;) h(t[i], e[n]);
                    i = t.length, n++
                }
                return [e, t]
            }
            return e.selectionBefore = t.selectionBefore = e.selectionAfter = t.selectionAfter = null, [t, e]
        }

        function u(e, t) {
            var n = "insert" == e.action, i = "insert" == t.action;
            if (n && i) o(e.start, t.start) < 0 ? d(t, e, 1) : d(e, t, 1); else if (n && !i) o(e.start, t.end) >= 0 ? d(e, t, -1) : (o(e.start, t.start) <= 0 || d(e, s.fromPoints(t.start, e.start), -1), d(t, e, 1)); else if (!n && i) o(t.start, e.end) >= 0 ? d(t, e, -1) : (o(t.start, e.start) <= 0 || d(t, s.fromPoints(e.start, t.start), -1), d(e, t, 1)); else if (!n && !i) if (o(t.start, e.end) >= 0) d(t, e, -1); else {
                var r, a;
                if (!(o(t.end, e.start) <= 0)) return o(e.start, t.start) < 0 && (r = e, e = f(e, t.start)), o(e.end, t.end) > 0 && (a = f(e, t.end)), g(t.end, e.start, e.end, -1), a && !r && (e.lines = a.lines, e.start = a.start, e.end = a.end, a = e), [t, r, a].filter(Boolean);
                d(e, t, -1)
            }
            return [t, e]
        }

        function d(e, t, n) {
            g(e.start, t.start, t.end, n), g(e.end, t.start, t.end, n)
        }

        function g(e, t, n, i) {
            e.row == (1 == i ? t : n).row && (e.column += i * (n.column - t.column)), e.row += i * (n.row - t.row)
        }

        function f(e, t) {
            var n = e.lines, i = e.end;
            e.end = r(t);
            var s = e.end.row - e.start.row, o = n.splice(s, n.length), a = s ? t.column : t.column - e.start.column;
            return n.push(o[0].substring(0, a)), o[0] = o[0].substr(a), {
                start: r(t),
                end: i,
                lines: o,
                action: e.action
            }
        }

        function m(e, t) {
            t = function (e) {
                return {start: r(e.start), end: r(e.end), action: e.action, lines: e.lines.slice()}
            }(t);
            for (var n = e.length; n--;) {
                for (var i = e[n], s = 0; s < i.length; s++) {
                    var o = u(i[s], t);
                    t = o[0], 2 != o.length && (o[2] ? (i.splice(s + 1, 1, o[1], o[2]), s++) : o[1] || (i.splice(s, 1), s--))
                }
                i.length || e.splice(n, 1)
            }
            return e
        }

        s.comparePoints, t.UndoManager = i
    })), ace.define("ace/layer/lines", ["require", "exports", "module", "ace/lib/dom"], (function (e, t, n) {
        var i = e("../lib/dom"), s = function (e, t) {
            this.element = e, this.canvasHeight = t || 5e5, this.element.style.height = 2 * this.canvasHeight + "px", this.cells = [], this.cellCache = [], this.$offsetCoefficient = 0
        };
        (function () {
            this.moveContainer = function (e) {
                i.translate(this.element, 0, -e.firstRowScreen * e.lineHeight % this.canvasHeight - e.offset * this.$offsetCoefficient)
            }, this.pageChanged = function (e, t) {
                return Math.floor(e.firstRowScreen * e.lineHeight / this.canvasHeight) !== Math.floor(t.firstRowScreen * t.lineHeight / this.canvasHeight)
            }, this.computeLineTop = function (e, t, n) {
                var i = t.firstRowScreen * t.lineHeight, s = Math.floor(i / this.canvasHeight);
                return n.documentToScreenRow(e, 0) * t.lineHeight - s * this.canvasHeight
            }, this.computeLineHeight = function (e, t, n) {
                return t.lineHeight * n.getRowLineCount(e)
            }, this.getLength = function () {
                return this.cells.length
            }, this.get = function (e) {
                return this.cells[e]
            }, this.shift = function () {
                this.$cacheCell(this.cells.shift())
            }, this.pop = function () {
                this.$cacheCell(this.cells.pop())
            }, this.push = function (e) {
                if (Array.isArray(e)) {
                    this.cells.push.apply(this.cells, e);
                    for (var t = i.createFragment(this.element), n = 0; n < e.length; n++) t.appendChild(e[n].element);
                    this.element.appendChild(t)
                } else this.cells.push(e), this.element.appendChild(e.element)
            }, this.unshift = function (e) {
                if (Array.isArray(e)) {
                    this.cells.unshift.apply(this.cells, e);
                    for (var t = i.createFragment(this.element), n = 0; n < e.length; n++) t.appendChild(e[n].element);
                    this.element.firstChild ? this.element.insertBefore(t, this.element.firstChild) : this.element.appendChild(t)
                } else this.cells.unshift(e), this.element.insertAdjacentElement("afterbegin", e.element)
            }, this.last = function () {
                return this.cells.length ? this.cells[this.cells.length - 1] : null
            }, this.$cacheCell = function (e) {
                e && (e.element.remove(), this.cellCache.push(e))
            }, this.createCell = function (e, t, n, s) {
                var o = this.cellCache.pop();
                if (!o) {
                    var r = i.createElement("div");
                    s && s(r), this.element.appendChild(r), o = {element: r, text: "", row: e}
                }
                return o.row = e, o
            }
        }).call(s.prototype), t.Lines = s
    })), ace.define("ace/layer/gutter", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/layer/lines"], (function (e, t, n) {
        var i = e("../lib/dom"), s = e("../lib/oop"), o = e("../lib/lang"), r = e("../lib/event_emitter").EventEmitter,
            a = e("./lines").Lines, l = function (e) {
                this.element = i.createElement("div"), this.element.className = "ace_layer ace_gutter-layer", e.appendChild(this.element), this.setShowFoldWidgets(this.$showFoldWidgets), this.gutterWidth = 0, this.$annotations = [], this.$updateAnnotations = this.$updateAnnotations.bind(this), this.$lines = new a(this.element), this.$lines.$offsetCoefficient = 1
            };

        function h(e) {
            var t = document.createTextNode("");
            e.appendChild(t);
            var n = i.createElement("span");
            return e.appendChild(n), e
        }

        (function () {
            s.implement(this, r), this.setSession = function (e) {
                this.session && this.session.off("change", this.$updateAnnotations), this.session = e, e && e.on("change", this.$updateAnnotations)
            }, this.addGutterDecoration = function (e, t) {
                window.console && console.warn && console.warn("deprecated use session.addGutterDecoration"), this.session.addGutterDecoration(e, t)
            }, this.removeGutterDecoration = function (e, t) {
                window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration"), this.session.removeGutterDecoration(e, t)
            }, this.setAnnotations = function (e) {
                this.$annotations = [];
                for (var t = 0; t < e.length; t++) {
                    var n = e[t], i = n.row, s = this.$annotations[i];
                    s || (s = this.$annotations[i] = {text: []});
                    var r = n.text;
                    r = r ? o.escapeHTML(r) : n.html || "", -1 === s.text.indexOf(r) && s.text.push(r);
                    var a = n.type, l = n.className;
                    l ? s.className = l : "error" == a ? s.className = " ace_error" : "warning" == a && " ace_error" != s.className ? s.className = " ace_warning" : "info" != a || s.className || (s.className = " ace_info")
                }
            }, this.$updateAnnotations = function (e) {
                if (this.$annotations.length) {
                    var t = e.start.row, n = e.end.row - t;
                    if (0 === n) ; else if ("remove" == e.action) this.$annotations.splice(t, n + 1, null); else {
                        var i = new Array(n + 1);
                        i.unshift(t, 1), this.$annotations.splice.apply(this.$annotations, i)
                    }
                }
            }, this.update = function (e) {
                this.config = e;
                var t = this.session, n = e.firstRow, i = Math.min(e.lastRow + e.gutterOffset, t.getLength() - 1);
                this.oldLastRow = i, this.config = e, this.$lines.moveContainer(e), this.$updateCursorRow();
                for (var s = t.getNextFoldLine(n), o = s ? s.start.row : 1 / 0, r = null, a = -1, l = n; ;) {
                    if (l > o && (l = s.end.row + 1, o = (s = t.getNextFoldLine(l, s)) ? s.start.row : 1 / 0), l > i) {
                        for (; this.$lines.getLength() > a + 1;) this.$lines.pop();
                        break
                    }
                    (r = this.$lines.get(++a)) ? r.row = l : (r = this.$lines.createCell(l, e, this.session, h), this.$lines.push(r)), this.$renderCell(r, e, s, l), l++
                }
                this._signal("afterRender"), this.$updateGutterWidth(e)
            }, this.$updateGutterWidth = function (e) {
                var t = this.session, n = t.gutterRenderer || this.$renderer, i = t.$firstLineNumber,
                    s = this.$lines.last() ? this.$lines.last().text : "";
                (this.$fixedWidth || t.$useWrapMode) && (s = t.getLength() + i - 1);
                var o = n ? n.getWidth(t, s, e) : s.toString().length * e.characterWidth,
                    r = this.$padding || this.$computePadding();
                (o += r.left + r.right) === this.gutterWidth || isNaN(o) || (this.gutterWidth = o, this.element.parentNode.style.width = this.element.style.width = Math.ceil(this.gutterWidth) + "px", this._signal("changeGutterWidth", o))
            }, this.$updateCursorRow = function () {
                if (this.$highlightGutterLine) {
                    var e = this.session.selection.getCursor();
                    this.$cursorRow !== e.row && (this.$cursorRow = e.row)
                }
            }, this.updateLineHighlight = function () {
                if (this.$highlightGutterLine) {
                    var e = this.session.selection.cursor.row;
                    if (this.$cursorRow = e, !this.$cursorCell || this.$cursorCell.row != e) {
                        this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", ""));
                        var t = this.$lines.cells;
                        this.$cursorCell = null;
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            if (i.row >= this.$cursorRow) {
                                if (i.row > this.$cursorRow) {
                                    var s = this.session.getFoldLine(this.$cursorRow);
                                    if (!(n > 0 && s && s.start.row == t[n - 1].row)) break;
                                    i = t[n - 1]
                                }
                                i.element.className = "ace_gutter-active-line " + i.element.className, this.$cursorCell = i;
                                break
                            }
                        }
                    }
                }
            }, this.scrollLines = function (e) {
                var t = this.config;
                if (this.config = e, this.$updateCursorRow(), this.$lines.pageChanged(t, e)) return this.update(e);
                this.$lines.moveContainer(e);
                var n = Math.min(e.lastRow + e.gutterOffset, this.session.getLength() - 1), i = this.oldLastRow;
                if (this.oldLastRow = n, !t || i < e.firstRow) return this.update(e);
                if (n < t.firstRow) return this.update(e);
                if (t.firstRow < e.firstRow) for (var s = this.session.getFoldedRowCount(t.firstRow, e.firstRow - 1); s > 0; s--) this.$lines.shift();
                if (i > n) for (s = this.session.getFoldedRowCount(n + 1, i); s > 0; s--) this.$lines.pop();
                e.firstRow < t.firstRow && this.$lines.unshift(this.$renderLines(e, e.firstRow, t.firstRow - 1)), n > i && this.$lines.push(this.$renderLines(e, i + 1, n)), this.updateLineHighlight(), this._signal("afterRender"), this.$updateGutterWidth(e)
            }, this.$renderLines = function (e, t, n) {
                for (var i = [], s = t, o = this.session.getNextFoldLine(s), r = o ? o.start.row : 1 / 0; s > r && (s = o.end.row + 1, r = (o = this.session.getNextFoldLine(s, o)) ? o.start.row : 1 / 0), !(s > n);) {
                    var a = this.$lines.createCell(s, e, this.session, h);
                    this.$renderCell(a, e, o, s), i.push(a), s++
                }
                return i
            }, this.$renderCell = function (e, t, n, s) {
                var o = e.element, r = this.session, a = o.childNodes[0], l = o.childNodes[1], h = r.$firstLineNumber,
                    c = r.$breakpoints, u = r.$decorations, d = r.gutterRenderer || this.$renderer,
                    g = this.$showFoldWidgets && r.foldWidgets, f = n ? n.start.row : Number.MAX_VALUE,
                    m = "ace_gutter-cell ";
                if (this.$highlightGutterLine && (s == this.$cursorRow || n && s < this.$cursorRow && s >= f && this.$cursorRow <= n.end.row) && (m += "ace_gutter-active-line ", this.$cursorCell != e && (this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", "")), this.$cursorCell = e)), c[s] && (m += c[s]), u[s] && (m += u[s]), this.$annotations[s] && (m += this.$annotations[s].className), o.className != m && (o.className = m), g) {
                    var p = g[s];
                    null == p && (p = g[s] = r.getFoldWidget(s))
                }
                if (p) {
                    m = "ace_fold-widget ace_" + p, "start" == p && s == f && s < n.end.row ? m += " ace_closed" : m += " ace_open", l.className != m && (l.className = m);
                    var v = t.lineHeight + "px";
                    i.setStyle(l.style, "height", v), i.setStyle(l.style, "display", "inline-block")
                } else l && i.setStyle(l.style, "display", "none");
                var w = (d ? d.getText(r, s) : s + h).toString();
                return w !== a.data && (a.data = w), i.setStyle(e.element.style, "height", this.$lines.computeLineHeight(s, t, r) + "px"), i.setStyle(e.element.style, "top", this.$lines.computeLineTop(s, t, r) + "px"), e.text = w, e
            }, this.$fixedWidth = !1, this.$highlightGutterLine = !0, this.$renderer = "", this.setHighlightGutterLine = function (e) {
                this.$highlightGutterLine = e
            }, this.$showLineNumbers = !0, this.$renderer = "", this.setShowLineNumbers = function (e) {
                this.$renderer = !e && {
                    getWidth: function () {
                        return 0
                    }, getText: function () {
                        return ""
                    }
                }
            }, this.getShowLineNumbers = function () {
                return this.$showLineNumbers
            }, this.$showFoldWidgets = !0, this.setShowFoldWidgets = function (e) {
                e ? i.addCssClass(this.element, "ace_folding-enabled") : i.removeCssClass(this.element, "ace_folding-enabled"), this.$showFoldWidgets = e, this.$padding = null
            }, this.getShowFoldWidgets = function () {
                return this.$showFoldWidgets
            }, this.$computePadding = function () {
                if (!this.element.firstChild) return {left: 0, right: 0};
                var e = i.computedStyle(this.element.firstChild);
                return this.$padding = {}, this.$padding.left = (parseInt(e.borderLeftWidth) || 0) + (parseInt(e.paddingLeft) || 0) + 1, this.$padding.right = (parseInt(e.borderRightWidth) || 0) + (parseInt(e.paddingRight) || 0), this.$padding
            }, this.getRegion = function (e) {
                var t = this.$padding || this.$computePadding(), n = this.element.getBoundingClientRect();
                return e.x < t.left + n.left ? "markers" : this.$showFoldWidgets && e.x > n.right - t.right ? "foldWidgets" : void 0
            }
        }).call(l.prototype), t.Gutter = l
    })), ace.define("ace/layer/marker", ["require", "exports", "module", "ace/range", "ace/lib/dom"], (function (e, t, n) {
        var i = e("../range").Range, s = e("../lib/dom"), o = function (e) {
            this.element = s.createElement("div"), this.element.className = "ace_layer ace_marker-layer", e.appendChild(this.element)
        };
        (function () {
            this.$padding = 0, this.setPadding = function (e) {
                this.$padding = e
            }, this.setSession = function (e) {
                this.session = e
            }, this.setMarkers = function (e) {
                this.markers = e
            }, this.elt = function (e, t) {
                var n = -1 != this.i && this.element.childNodes[this.i];
                n ? this.i++ : (n = document.createElement("div"), this.element.appendChild(n), this.i = -1), n.style.cssText = t, n.className = e
            }, this.update = function (e) {
                if (e) {
                    var t;
                    for (var n in this.config = e, this.i = 0, this.markers) {
                        var i = this.markers[n];
                        if (i.range) {
                            var s = i.range.clipRows(e.firstRow, e.lastRow);
                            if (!s.isEmpty()) if (s = s.toScreenRange(this.session), i.renderer) {
                                var o = this.$getTop(s.start.row, e),
                                    r = this.$padding + s.start.column * e.characterWidth;
                                i.renderer(t, s, r, o, e)
                            } else "fullLine" == i.type ? this.drawFullLineMarker(t, s, i.clazz, e) : "screenLine" == i.type ? this.drawScreenLineMarker(t, s, i.clazz, e) : s.isMultiLine() ? "text" == i.type ? this.drawTextMarker(t, s, i.clazz, e) : this.drawMultiLineMarker(t, s, i.clazz, e) : this.drawSingleLineMarker(t, s, i.clazz + " ace_start ace_br15", e)
                        } else i.update(t, this, this.session, e)
                    }
                    if (-1 != this.i) for (; this.i < this.element.childElementCount;) this.element.removeChild(this.element.lastChild)
                }
            }, this.$getTop = function (e, t) {
                return (e - t.firstRowScreen) * t.lineHeight
            }, this.drawTextMarker = function (e, t, n, s, o) {
                for (var r = this.session, a = t.start.row, l = t.end.row, h = a, c = 0, u = 0, d = r.getScreenLastRowColumn(h), g = new i(h, t.start.column, h, u); h <= l; h++) g.start.row = g.end.row = h, g.start.column = h == a ? t.start.column : r.getRowWrapIndent(h), g.end.column = d, c = u, u = d, d = h + 1 < l ? r.getScreenLastRowColumn(h + 1) : h == l ? 0 : t.end.column, this.drawSingleLineMarker(e, g, n + (h == a ? " ace_start" : "") + " ace_br" + ((h == a || h == a + 1 && t.start.column ? 1 : 0) | (c < u ? 2 : 0) | (u > d ? 4 : 0) | (h == l ? 8 : 0)), s, h == l ? 0 : 1, o)
            }, this.drawMultiLineMarker = function (e, t, n, i, s) {
                var o = this.$padding, r = i.lineHeight, a = this.$getTop(t.start.row, i),
                    l = o + t.start.column * i.characterWidth;
                if (s = s || "", this.session.$bidiHandler.isBidiRow(t.start.row) ? ((h = t.clone()).end.row = h.start.row, h.end.column = this.session.getLine(h.start.row).length, this.drawBidiSingleLineMarker(e, h, n + " ace_br1 ace_start", i, null, s)) : this.elt(n + " ace_br1 ace_start", "height:" + r + "px;right:0;top:" + a + "px;left:" + l + "px;" + (s || "")), this.session.$bidiHandler.isBidiRow(t.end.row)) {
                    var h;
                    (h = t.clone()).start.row = h.end.row, h.start.column = 0, this.drawBidiSingleLineMarker(e, h, n + " ace_br12", i, null, s)
                } else {
                    a = this.$getTop(t.end.row, i);
                    var c = t.end.column * i.characterWidth;
                    this.elt(n + " ace_br12", "height:" + r + "px;width:" + c + "px;top:" + a + "px;left:" + o + "px;" + (s || ""))
                }
                if (!((r = (t.end.row - t.start.row - 1) * i.lineHeight) <= 0)) {
                    a = this.$getTop(t.start.row + 1, i);
                    var u = (t.start.column ? 1 : 0) | (t.end.column ? 0 : 8);
                    this.elt(n + (u ? " ace_br" + u : ""), "height:" + r + "px;right:0;top:" + a + "px;left:" + o + "px;" + (s || ""))
                }
            }, this.drawSingleLineMarker = function (e, t, n, i, s, o) {
                if (this.session.$bidiHandler.isBidiRow(t.start.row)) return this.drawBidiSingleLineMarker(e, t, n, i, s, o);
                var r = i.lineHeight, a = (t.end.column + (s || 0) - t.start.column) * i.characterWidth,
                    l = this.$getTop(t.start.row, i), h = this.$padding + t.start.column * i.characterWidth;
                this.elt(n, "height:" + r + "px;width:" + a + "px;top:" + l + "px;left:" + h + "px;" + (o || ""))
            }, this.drawBidiSingleLineMarker = function (e, t, n, i, s, o) {
                var r = i.lineHeight, a = this.$getTop(t.start.row, i), l = this.$padding;
                this.session.$bidiHandler.getSelections(t.start.column, t.end.column).forEach((function (e) {
                    this.elt(n, "height:" + r + "px;width:" + (e.width + (s || 0)) + "px;top:" + a + "px;left:" + (l + e.left) + "px;" + (o || ""))
                }), this)
            }, this.drawFullLineMarker = function (e, t, n, i, s) {
                var o = this.$getTop(t.start.row, i), r = i.lineHeight;
                t.start.row != t.end.row && (r += this.$getTop(t.end.row, i) - o), this.elt(n, "height:" + r + "px;top:" + o + "px;left:0;right:0;" + (s || ""))
            }, this.drawScreenLineMarker = function (e, t, n, i, s) {
                var o = this.$getTop(t.start.row, i), r = i.lineHeight;
                this.elt(n, "height:" + r + "px;top:" + o + "px;left:0;right:0;" + (s || ""))
            }
        }).call(o.prototype), t.Marker = o
    })), ace.define("ace/layer/text", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/layer/lines", "ace/lib/event_emitter"], (function (e, t, n) {
        var i = e("../lib/oop"), s = e("../lib/dom"), o = e("../lib/lang"), r = e("./lines").Lines,
            a = e("../lib/event_emitter").EventEmitter, l = function (e) {
                this.dom = s, this.element = this.dom.createElement("div"), this.element.className = "ace_layer ace_text-layer", e.appendChild(this.element), this.$updateEolChar = this.$updateEolChar.bind(this), this.$lines = new r(this.element)
            };
        (function () {
            i.implement(this, a), this.EOF_CHAR = "¶", this.EOL_CHAR_LF = "¬", this.EOL_CHAR_CRLF = "¤", this.EOL_CHAR = this.EOL_CHAR_LF, this.TAB_CHAR = "—", this.SPACE_CHAR = "·", this.$padding = 0, this.MAX_LINE_LENGTH = 1e4, this.$updateEolChar = function () {
                var e = this.session.doc,
                    t = "\n" == e.getNewLineCharacter() && "windows" != e.getNewLineMode() ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
                if (this.EOL_CHAR != t) return this.EOL_CHAR = t, !0
            }, this.setPadding = function (e) {
                this.$padding = e, this.element.style.margin = "0 " + e + "px"
            }, this.getLineHeight = function () {
                return this.$fontMetrics.$characterSize.height || 0
            }, this.getCharacterWidth = function () {
                return this.$fontMetrics.$characterSize.width || 0
            }, this.$setFontMetrics = function (e) {
                this.$fontMetrics = e, this.$fontMetrics.on("changeCharacterSize", function (e) {
                    this._signal("changeCharacterSize", e)
                }.bind(this)), this.$pollSizeChanges()
            }, this.checkForSizeChanges = function () {
                this.$fontMetrics.checkForSizeChanges()
            }, this.$pollSizeChanges = function () {
                return this.$pollSizeChangesTimer = this.$fontMetrics.$pollSizeChanges()
            }, this.setSession = function (e) {
                this.session = e, e && this.$computeTabString()
            }, this.showInvisibles = !1, this.showSpaces = !1, this.showTabs = !1, this.showEOL = !1, this.setShowInvisibles = function (e) {
                return this.showInvisibles != e && (this.showInvisibles = e, "string" == typeof e ? (this.showSpaces = /tab/i.test(e), this.showTabs = /space/i.test(e), this.showEOL = /eol/i.test(e)) : this.showSpaces = this.showTabs = this.showEOL = e, this.$computeTabString(), !0)
            }, this.displayIndentGuides = !0, this.setDisplayIndentGuides = function (e) {
                return this.displayIndentGuides != e && (this.displayIndentGuides = e, this.$computeTabString(), !0)
            }, this.$highlightIndentGuides = !0, this.setHighlightIndentGuides = function (e) {
                return this.$highlightIndentGuides !== e && (this.$highlightIndentGuides = e, e)
            }, this.$tabStrings = [], this.onChangeTabSize = this.$computeTabString = function () {
                var e = this.session.getTabSize();
                this.tabSize = e;
                for (var t = this.$tabStrings = [0], n = 1; n < e + 1; n++) this.showTabs ? ((i = this.dom.createElement("span")).className = "ace_invisible ace_invisible_tab", i.textContent = o.stringRepeat(this.TAB_CHAR, n), t.push(i)) : t.push(this.dom.createTextNode(o.stringRepeat(" ", n), this.element));
                if (this.displayIndentGuides) {
                    this.$indentGuideRe = /\s\S| \t|\t |\s$/;
                    var i, s = "ace_indent-guide", r = this.showSpaces ? " ace_invisible ace_invisible_space" : "",
                        a = this.showSpaces ? o.stringRepeat(this.SPACE_CHAR, this.tabSize) : o.stringRepeat(" ", this.tabSize),
                        l = this.showTabs ? " ace_invisible ace_invisible_tab" : "",
                        h = this.showTabs ? o.stringRepeat(this.TAB_CHAR, this.tabSize) : a;
                    (i = this.dom.createElement("span")).className = s + r, i.textContent = a, this.$tabStrings[" "] = i, (i = this.dom.createElement("span")).className = s + l, i.textContent = h, this.$tabStrings["\t"] = i
                }
            }, this.updateLines = function (e, t, n) {
                if (this.config.lastRow != e.lastRow || this.config.firstRow != e.firstRow) return this.update(e);
                this.config = e;
                for (var i = Math.max(t, e.firstRow), s = Math.min(n, e.lastRow), o = this.element.childNodes, r = 0, a = e.firstRow; a < i; a++) {
                    if (l = this.session.getFoldLine(a)) {
                        if (l.containsRow(i)) {
                            i = l.start.row;
                            break
                        }
                        a = l.end.row
                    }
                    r++
                }
                for (var l, h = !1, c = (a = i, (l = this.session.getNextFoldLine(a)) ? l.start.row : 1 / 0); a > c && (a = l.end.row + 1, c = (l = this.session.getNextFoldLine(a, l)) ? l.start.row : 1 / 0), !(a > s);) {
                    var u = o[r++];
                    if (u) {
                        this.dom.removeChildren(u), this.$renderLine(u, a, a == c && l), h && (u.style.top = this.$lines.computeLineTop(a, e, this.session) + "px");
                        var d = e.lineHeight * this.session.getRowLength(a) + "px";
                        u.style.height != d && (h = !0, u.style.height = d)
                    }
                    a++
                }
                if (h) for (; r < this.$lines.cells.length;) {
                    var g = this.$lines.cells[r++];
                    g.element.style.top = this.$lines.computeLineTop(g.row, e, this.session) + "px"
                }
            }, this.scrollLines = function (e) {
                var t = this.config;
                if (this.config = e, this.$lines.pageChanged(t, e)) return this.update(e);
                this.$lines.moveContainer(e);
                var n = e.lastRow, i = t ? t.lastRow : -1;
                if (!t || i < e.firstRow) return this.update(e);
                if (n < t.firstRow) return this.update(e);
                if (!t || t.lastRow < e.firstRow) return this.update(e);
                if (e.lastRow < t.firstRow) return this.update(e);
                if (t.firstRow < e.firstRow) for (var s = this.session.getFoldedRowCount(t.firstRow, e.firstRow - 1); s > 0; s--) this.$lines.shift();
                if (t.lastRow > e.lastRow) for (s = this.session.getFoldedRowCount(e.lastRow + 1, t.lastRow); s > 0; s--) this.$lines.pop();
                e.firstRow < t.firstRow && this.$lines.unshift(this.$renderLinesFragment(e, e.firstRow, t.firstRow - 1)), e.lastRow > t.lastRow && this.$lines.push(this.$renderLinesFragment(e, t.lastRow + 1, e.lastRow)), this.$highlightIndentGuide()
            }, this.$renderLinesFragment = function (e, t, n) {
                for (var i = [], o = t, r = this.session.getNextFoldLine(o), a = r ? r.start.row : 1 / 0; o > a && (o = r.end.row + 1, a = (r = this.session.getNextFoldLine(o, r)) ? r.start.row : 1 / 0), !(o > n);) {
                    var l = this.$lines.createCell(o, e, this.session), h = l.element;
                    this.dom.removeChildren(h), s.setStyle(h.style, "height", this.$lines.computeLineHeight(o, e, this.session) + "px"), s.setStyle(h.style, "top", this.$lines.computeLineTop(o, e, this.session) + "px"), this.$renderLine(h, o, o == a && r), this.$useLineGroups() ? h.className = "ace_line_group" : h.className = "ace_line", i.push(l), o++
                }
                return i
            }, this.update = function (e) {
                this.$lines.moveContainer(e), this.config = e;
                for (var t = e.firstRow, n = e.lastRow, i = this.$lines; i.getLength();) i.pop();
                i.push(this.$renderLinesFragment(e, t, n))
            }, this.$textToken = {text: !0, rparen: !0, lparen: !0}, this.$renderToken = function (e, t, n, i) {
                for (var s, r = this, a = /(\t)|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\uFEFF\uFFF9-\uFFFC\u2066\u2067\u2068\u202A\u202B\u202D\u202E\u202C\u2069]+)|(\u3000)|([\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g, l = this.dom.createFragment(this.element), h = 0; s = a.exec(i);) {
                    var c = s[1], u = s[2], d = s[3], g = s[4], f = s[5];
                    if (r.showSpaces || !u) {
                        var m = h != s.index ? i.slice(h, s.index) : "";
                        if (h = s.index + s[0].length, m && l.appendChild(this.dom.createTextNode(m, this.element)), c) {
                            var p = r.session.getScreenTabSize(t + s.index);
                            l.appendChild(r.$tabStrings[p].cloneNode(!0)), t += p - 1
                        } else u ? r.showSpaces ? ((w = this.dom.createElement("span")).className = "ace_invisible ace_invisible_space", w.textContent = o.stringRepeat(r.SPACE_CHAR, u.length), l.appendChild(w)) : l.appendChild(this.com.createTextNode(u, this.element)) : d ? ((w = this.dom.createElement("span")).className = "ace_invisible ace_invisible_space ace_invalid", w.textContent = o.stringRepeat(r.SPACE_CHAR, d.length), l.appendChild(w)) : g ? (t += 1, (w = this.dom.createElement("span")).style.width = 2 * r.config.characterWidth + "px", w.className = r.showSpaces ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk", w.textContent = r.showSpaces ? r.SPACE_CHAR : g, l.appendChild(w)) : f && (t += 1, (w = this.dom.createElement("span")).style.width = 2 * r.config.characterWidth + "px", w.className = "ace_cjk", w.textContent = f, l.appendChild(w))
                    }
                }
                if (l.appendChild(this.dom.createTextNode(h ? i.slice(h) : i, this.element)), this.$textToken[n.type]) e.appendChild(l); else {
                    var v = "ace_" + n.type.replace(/\./g, " ace_"), w = this.dom.createElement("span");
                    "fold" == n.type && (w.style.width = n.value.length * this.config.characterWidth + "px"), w.className = v, w.appendChild(l), e.appendChild(w)
                }
                return t + i.length
            }, this.renderIndentGuide = function (e, t, n) {
                var i = t.search(this.$indentGuideRe);
                if (i <= 0 || i >= n) return t;
                if (" " == t[0]) {
                    for (var s = (i -= i % this.tabSize) / this.tabSize, o = 0; o < s; o++) e.appendChild(this.$tabStrings[" "].cloneNode(!0));
                    return this.$highlightIndentGuide(), t.substr(i)
                }
                if ("\t" == t[0]) {
                    for (o = 0; o < i; o++) e.appendChild(this.$tabStrings["\t"].cloneNode(!0));
                    return this.$highlightIndentGuide(), t.substr(i)
                }
                return this.$highlightIndentGuide(), t
            }, this.$highlightIndentGuide = function () {
                if (this.$highlightIndentGuides && this.displayIndentGuides) {
                    this.$highlightIndentGuideMarker = {indentLevel: void 0, start: void 0, end: void 0, dir: void 0};
                    var e = this.session.doc.$lines;
                    if (e) {
                        var t = this.session.selection.getCursor(),
                            n = /^\s*/.exec(this.session.doc.getLine(t.row))[0].length,
                            i = Math.floor(n / this.tabSize);
                        if (this.$highlightIndentGuideMarker = {
                            indentLevel: i,
                            start: t.row
                        }, this.session.$bracketHighlight) for (var s = this.session.$bracketHighlight.ranges, o = 0; o < s.length; o++) if (t.row !== s[o].start.row) {
                            this.$highlightIndentGuideMarker.end = s[o].start.row, t.row > s[o].start.row ? this.$highlightIndentGuideMarker.dir = -1 : this.$highlightIndentGuideMarker.dir = 1;
                            break
                        }
                        if (!this.$highlightIndentGuideMarker.end && "" !== e[t.row] && t.column === e[t.row].length) for (this.$highlightIndentGuideMarker.dir = 1, o = t.row + 1; o < e.length; o++) {
                            var r = e[o], a = /^\s*/.exec(r)[0].length;
                            if ("" !== r && (this.$highlightIndentGuideMarker.end = o, a <= n)) break
                        }
                        this.$renderHighlightIndentGuide()
                    }
                }
            }, this.$clearActiveIndentGuide = function () {
                for (var e = this.$lines.cells, t = 0; t < e.length; t++) {
                    var n = e[t].element.childNodes;
                    if (n.length > 0) for (var i = 0; i < n.length; i++) if (n[i].classList && n[i].classList.contains("ace_indent-guide-active")) {
                        n[i].classList.remove("ace_indent-guide-active");
                        break
                    }
                }
            }, this.$setIndentGuideActive = function (e, t) {
                if ("" !== this.session.doc.getLine(e.row)) {
                    var n = e.element.childNodes;
                    if (n) {
                        var i = n[t - 1];
                        i && i.classList && i.classList.contains("ace_indent-guide") && i.classList.add("ace_indent-guide-active")
                    }
                }
            }, this.$renderHighlightIndentGuide = function () {
                if (this.$lines) {
                    var e = this.$lines.cells;
                    this.$clearActiveIndentGuide();
                    var t = this.$highlightIndentGuideMarker.indentLevel;
                    if (0 !== t) if (1 === this.$highlightIndentGuideMarker.dir) for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        if (this.$highlightIndentGuideMarker.end && i.row >= this.$highlightIndentGuideMarker.start + 1) {
                            if (i.row >= this.$highlightIndentGuideMarker.end) break;
                            this.$setIndentGuideActive(i, t)
                        }
                    } else for (n = e.length - 1; n >= 0; n--) if (i = e[n], this.$highlightIndentGuideMarker.end && i.row < this.$highlightIndentGuideMarker.start) {
                        if (i.row <= this.$highlightIndentGuideMarker.end) break;
                        this.$setIndentGuideActive(i, t)
                    }
                }
            }, this.$createLineElement = function (e) {
                var t = this.dom.createElement("div");
                return t.className = "ace_line", t.style.height = this.config.lineHeight + "px", t
            }, this.$renderWrappedLine = function (e, t, n) {
                var i = 0, s = 0, r = n[0], a = 0, l = this.$createLineElement();
                e.appendChild(l);
                for (var h = 0; h < t.length; h++) {
                    var c = t[h], u = c.value;
                    if (0 == h && this.displayIndentGuides) {
                        if (i = u.length, !(u = this.renderIndentGuide(l, u, r))) continue;
                        i -= u.length
                    }
                    if (i + u.length < r) a = this.$renderToken(l, a, c, u), i += u.length; else {
                        for (; i + u.length >= r;) a = this.$renderToken(l, a, c, u.substring(0, r - i)), u = u.substring(r - i), i = r, l = this.$createLineElement(), e.appendChild(l), l.appendChild(this.dom.createTextNode(o.stringRepeat(" ", n.indent), this.element)), a = 0, r = n[++s] || Number.MAX_VALUE;
                        0 != u.length && (i += u.length, a = this.$renderToken(l, a, c, u))
                    }
                }
                n[n.length - 1] > this.MAX_LINE_LENGTH && this.$renderOverflowMessage(l, a, null, "", !0)
            }, this.$renderSimpleLine = function (e, t) {
                for (var n = 0, i = 0; i < t.length; i++) {
                    var s = t[i], o = s.value;
                    if (0 != i || !this.displayIndentGuides || (o = this.renderIndentGuide(e, o))) {
                        if (n + o.length > this.MAX_LINE_LENGTH) return this.$renderOverflowMessage(e, n, s, o);
                        n = this.$renderToken(e, n, s, o)
                    }
                }
            }, this.$renderOverflowMessage = function (e, t, n, i, s) {
                n && this.$renderToken(e, t, n, i.slice(0, this.MAX_LINE_LENGTH - t));
                var o = this.dom.createElement("span");
                o.className = "ace_inline_button ace_keyword ace_toggle_wrap", o.textContent = s ? "<hide>" : "<click to see more...>", e.appendChild(o)
            }, this.$renderLine = function (e, t, n) {
                if (n || 0 == n || (n = this.session.getFoldLine(t)), n) var i = this.$getFoldLineTokens(t, n); else i = this.session.getTokens(t);
                var s = e;
                if (i.length) {
                    var o = this.session.getRowSplitData(t);
                    o && o.length ? (this.$renderWrappedLine(e, i, o), s = e.lastChild) : (s = e, this.$useLineGroups() && (s = this.$createLineElement(), e.appendChild(s)), this.$renderSimpleLine(s, i))
                } else this.$useLineGroups() && (s = this.$createLineElement(), e.appendChild(s));
                if (this.showEOL && s) {
                    n && (t = n.end.row);
                    var r = this.dom.createElement("span");
                    r.className = "ace_invisible ace_invisible_eol", r.textContent = t == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, s.appendChild(r)
                }
            }, this.$getFoldLineTokens = function (e, t) {
                var n = this.session, i = [], s = n.getTokens(e);
                return t.walk((function (e, t, o, r, a) {
                    null != e ? i.push({
                        type: "fold",
                        value: e
                    }) : (a && (s = n.getTokens(t)), s.length && function (e, t, n) {
                        for (var s = 0, o = 0; o + e[s].value.length < t;) if (o += e[s].value.length, ++s == e.length) return;
                        for (o != t && ((r = e[s].value.substring(t - o)).length > n - t && (r = r.substring(0, n - t)), i.push({
                            type: e[s].type,
                            value: r
                        }), o = t + r.length, s += 1); o < n && s < e.length;) {
                            var r;
                            (r = e[s].value).length + o > n ? i.push({
                                type: e[s].type,
                                value: r.substring(0, n - o)
                            }) : i.push(e[s]), o += r.length, s += 1
                        }
                    }(s, r, o))
                }), t.end.row, this.session.getLine(t.end.row).length), i
            }, this.$useLineGroups = function () {
                return this.session.getUseWrapMode()
            }, this.destroy = function () {
            }
        }).call(l.prototype), t.Text = l
    })), ace.define("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], (function (e, t, n) {
        var i = e("../lib/dom"), s = function (e) {
            this.element = i.createElement("div"), this.element.className = "ace_layer ace_cursor-layer", e.appendChild(this.element), this.isVisible = !1, this.isBlinking = !0, this.blinkInterval = 1e3, this.smoothBlinking = !1, this.cursors = [], this.cursor = this.addCursor(), i.addCssClass(this.element, "ace_hidden-cursors"), this.$updateCursors = this.$updateOpacity.bind(this)
        };
        (function () {
            this.$updateOpacity = function (e) {
                for (var t = this.cursors, n = t.length; n--;) i.setStyle(t[n].style, "opacity", e ? "" : "0")
            }, this.$startCssAnimation = function () {
                for (var e = this.cursors, t = e.length; t--;) e[t].style.animationDuration = this.blinkInterval + "ms";
                this.$isAnimating = !0, setTimeout(function () {
                    this.$isAnimating && i.addCssClass(this.element, "ace_animate-blinking")
                }.bind(this))
            }, this.$stopCssAnimation = function () {
                this.$isAnimating = !1, i.removeCssClass(this.element, "ace_animate-blinking")
            }, this.$padding = 0, this.setPadding = function (e) {
                this.$padding = e
            }, this.setSession = function (e) {
                this.session = e
            }, this.setBlinking = function (e) {
                e != this.isBlinking && (this.isBlinking = e, this.restartTimer())
            }, this.setBlinkInterval = function (e) {
                e != this.blinkInterval && (this.blinkInterval = e, this.restartTimer())
            }, this.setSmoothBlinking = function (e) {
                e != this.smoothBlinking && (this.smoothBlinking = e, i.setCssClass(this.element, "ace_smooth-blinking", e), this.$updateCursors(!0), this.restartTimer())
            }, this.addCursor = function () {
                var e = i.createElement("div");
                return e.className = "ace_cursor", this.element.appendChild(e), this.cursors.push(e), e
            }, this.removeCursor = function () {
                if (this.cursors.length > 1) {
                    var e = this.cursors.pop();
                    return e.parentNode.removeChild(e), e
                }
            }, this.hideCursor = function () {
                this.isVisible = !1, i.addCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
            }, this.showCursor = function () {
                this.isVisible = !0, i.removeCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
            }, this.restartTimer = function () {
                var e = this.$updateCursors;
                if (clearInterval(this.intervalId), clearTimeout(this.timeoutId), this.$stopCssAnimation(), this.smoothBlinking && (this.$isSmoothBlinking = !1, i.removeCssClass(this.element, "ace_smooth-blinking")), e(!0), this.isBlinking && this.blinkInterval && this.isVisible) if (this.smoothBlinking && (this.$isSmoothBlinking = !0, setTimeout(function () {
                    this.$isSmoothBlinking && i.addCssClass(this.element, "ace_smooth-blinking")
                }.bind(this))), i.HAS_CSS_ANIMATION) this.$startCssAnimation(); else {
                    var t = function () {
                        this.timeoutId = setTimeout((function () {
                            e(!1)
                        }), .6 * this.blinkInterval)
                    }.bind(this);
                    this.intervalId = setInterval((function () {
                        e(!0), t()
                    }), this.blinkInterval), t()
                } else this.$stopCssAnimation()
            }, this.getPixelPosition = function (e, t) {
                if (!this.config || !this.session) return {left: 0, top: 0};
                e || (e = this.session.selection.getCursor());
                var n = this.session.documentToScreenPosition(e);
                return {
                    left: this.$padding + (this.session.$bidiHandler.isBidiRow(n.row, e.row) ? this.session.$bidiHandler.getPosLeft(n.column) : n.column * this.config.characterWidth),
                    top: (n.row - (t ? this.config.firstRowScreen : 0)) * this.config.lineHeight
                }
            }, this.isCursorInView = function (e, t) {
                return e.top >= 0 && e.top < t.maxHeight
            }, this.update = function (e) {
                this.config = e;
                var t = this.session.$selectionMarkers, n = 0, s = 0;
                void 0 !== t && 0 !== t.length || (t = [{cursor: null}]), n = 0;
                for (var o = t.length; n < o; n++) {
                    var r = this.getPixelPosition(t[n].cursor, !0);
                    if (!((r.top > e.height + e.offset || r.top < 0) && n > 1)) {
                        var a = this.cursors[s++] || this.addCursor(), l = a.style;
                        this.drawCursor ? this.drawCursor(a, r, e, t[n], this.session) : this.isCursorInView(r, e) ? (i.setStyle(l, "display", "block"), i.translate(a, r.left, r.top), i.setStyle(l, "width", Math.round(e.characterWidth) + "px"), i.setStyle(l, "height", e.lineHeight + "px")) : i.setStyle(l, "display", "none")
                    }
                }
                for (; this.cursors.length > s;) this.removeCursor();
                var h = this.session.getOverwrite();
                this.$setOverwrite(h), this.$pixelPos = r, this.restartTimer()
            }, this.drawCursor = null, this.$setOverwrite = function (e) {
                e != this.overwrite && (this.overwrite = e, e ? i.addCssClass(this.element, "ace_overwrite-cursors") : i.removeCssClass(this.element, "ace_overwrite-cursors"))
            }, this.destroy = function () {
                clearInterval(this.intervalId), clearTimeout(this.timeoutId)
            }
        }).call(s.prototype), t.Cursor = s
    })), ace.define("ace/scrollbar", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], (function (e, t, n) {
        var i = e("./lib/oop"), s = e("./lib/dom"), o = e("./lib/event"), r = e("./lib/event_emitter").EventEmitter,
            a = 32768, l = function (e) {
                this.element = s.createElement("div"), this.element.className = "ace_scrollbar ace_scrollbar" + this.classSuffix, this.inner = s.createElement("div"), this.inner.className = "ace_scrollbar-inner", this.inner.textContent = " ", this.element.appendChild(this.inner), e.appendChild(this.element), this.setVisible(!1), this.skipEvent = !1, o.addListener(this.element, "scroll", this.onScroll.bind(this)), o.addListener(this.element, "mousedown", o.preventDefault)
            };
        (function () {
            i.implement(this, r), this.setVisible = function (e) {
                this.element.style.display = e ? "" : "none", this.isVisible = e, this.coeff = 1
            }
        }).call(l.prototype);
        var h = function (e, t) {
            l.call(this, e), this.scrollTop = 0, this.scrollHeight = 0, t.$scrollbarWidth = this.width = s.scrollbarWidth(e.ownerDocument), this.inner.style.width = this.element.style.width = (this.width || 15) + 5 + "px", this.$minWidth = 0
        };
        i.inherits(h, l), function () {
            this.classSuffix = "-v", this.onScroll = function () {
                if (!this.skipEvent) {
                    if (this.scrollTop = this.element.scrollTop, 1 != this.coeff) {
                        var e = this.element.clientHeight / this.scrollHeight;
                        this.scrollTop = this.scrollTop * (1 - e) / (this.coeff - e)
                    }
                    this._emit("scroll", {data: this.scrollTop})
                }
                this.skipEvent = !1
            }, this.getWidth = function () {
                return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0)
            }, this.setHeight = function (e) {
                this.element.style.height = e + "px"
            }, this.setInnerHeight = this.setScrollHeight = function (e) {
                this.scrollHeight = e, e > a ? (this.coeff = a / e, e = a) : 1 != this.coeff && (this.coeff = 1), this.inner.style.height = e + "px"
            }, this.setScrollTop = function (e) {
                this.scrollTop != e && (this.skipEvent = !0, this.scrollTop = e, this.element.scrollTop = e * this.coeff)
            }
        }.call(h.prototype);
        var c = function (e, t) {
            l.call(this, e), this.scrollLeft = 0, this.height = t.$scrollbarWidth, this.inner.style.height = this.element.style.height = (this.height || 15) + 5 + "px"
        };
        i.inherits(c, l), function () {
            this.classSuffix = "-h", this.onScroll = function () {
                this.skipEvent || (this.scrollLeft = this.element.scrollLeft, this._emit("scroll", {data: this.scrollLeft})), this.skipEvent = !1
            }, this.getHeight = function () {
                return this.isVisible ? this.height : 0
            }, this.setWidth = function (e) {
                this.element.style.width = e + "px"
            }, this.setInnerWidth = function (e) {
                this.inner.style.width = e + "px"
            }, this.setScrollWidth = function (e) {
                this.inner.style.width = e + "px"
            }, this.setScrollLeft = function (e) {
                this.scrollLeft != e && (this.skipEvent = !0, this.scrollLeft = this.element.scrollLeft = e)
            }
        }.call(c.prototype), t.ScrollBar = h, t.ScrollBarV = h, t.ScrollBarH = c, t.VScrollBar = h, t.HScrollBar = c
    })), ace.define("ace/scrollbar_custom", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], (function (e, t, n) {
        var i = e("./lib/oop"), s = e("./lib/dom"), o = e("./lib/event"), r = e("./lib/event_emitter").EventEmitter;
        s.importCssString(".ace_editor>.ace_sb-v div, .ace_editor>.ace_sb-h div{\n  position: absolute;\n  background: rgba(128, 128, 128, 0.6);\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  border: 1px solid #bbb;\n  border-radius: 2px;\n  z-index: 8;\n}\n.ace_editor>.ace_sb-v, .ace_editor>.ace_sb-h {\n  position: absolute;\n  z-index: 6;\n  background: none;\n  overflow: hidden!important;\n}\n.ace_editor>.ace_sb-v {\n  z-index: 6;\n  right: 0;\n  top: 0;\n  width: 12px;\n}\n.ace_editor>.ace_sb-v div {\n  z-index: 8;\n  right: 0;\n  width: 100%;\n}\n.ace_editor>.ace_sb-h {\n  bottom: 0;\n  left: 0;\n  height: 12px;\n}\n.ace_editor>.ace_sb-h div {\n  bottom: 0;\n  height: 100%;\n}\n.ace_editor>.ace_sb_grabbed {\n  z-index: 8;\n  background: #000;\n}", "ace_scrollbar.css", !1);
        var a = function (e) {
            this.element = s.createElement("div"), this.element.className = "ace_sb" + this.classSuffix, this.inner = s.createElement("div"), this.inner.className = "", this.element.appendChild(this.inner), this.VScrollWidth = 12, this.HScrollHeight = 12, e.appendChild(this.element), this.setVisible(!1), this.skipEvent = !1, o.addMultiMouseDownListener(this.element, [500, 300, 300], this, "onMouseDown")
        };
        (function () {
            i.implement(this, r), this.setVisible = function (e) {
                this.element.style.display = e ? "" : "none", this.isVisible = e, this.coeff = 1
            }
        }).call(a.prototype);
        var l = function (e, t) {
            a.call(this, e), this.scrollTop = 0, this.scrollHeight = 0, this.parent = e, this.width = this.VScrollWidth, this.renderer = t, this.inner.style.width = this.element.style.width = (this.width || 15) + "px", this.$minWidth = 0
        };
        i.inherits(l, a), function () {
            this.classSuffix = "-v", i.implement(this, r), this.onMouseDown = function (e, t) {
                if ("mousedown" === e && 0 === o.getButton(t) && 2 !== t.detail) {
                    if (t.target === this.inner) {
                        var n = this, i = t.clientY, s = t.clientY, r = this.thumbTop;
                        o.capture(this.inner, (function (e) {
                            i = e.clientY
                        }), (function () {
                            clearInterval(a)
                        }));
                        var a = setInterval((function () {
                            if (void 0 !== i) {
                                var e = n.scrollTopFromThumbTop(r + i - s);
                                e !== n.scrollTop && n._emit("scroll", {data: e})
                            }
                        }), 20);
                        return o.preventDefault(t)
                    }
                    var l = t.clientY - this.element.getBoundingClientRect().top - this.thumbHeight / 2;
                    return this._emit("scroll", {data: this.scrollTopFromThumbTop(l)}), o.preventDefault(t)
                }
            }, this.getHeight = function () {
                return this.height
            }, this.scrollTopFromThumbTop = function (e) {
                var t = e * (this.pageHeight - this.viewHeight) / (this.slideHeight - this.thumbHeight);
                return (t >>= 0) < 0 ? t = 0 : t > this.pageHeight - this.viewHeight && (t = this.pageHeight - this.viewHeight), t
            }, this.getWidth = function () {
                return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0)
            }, this.setHeight = function (e) {
                this.height = Math.max(0, e), this.slideHeight = this.height, this.viewHeight = this.height, this.setScrollHeight(this.pageHeight, !0)
            }, this.setInnerHeight = this.setScrollHeight = function (e, t) {
                (this.pageHeight !== e || t) && (this.pageHeight = e, this.thumbHeight = this.slideHeight * this.viewHeight / this.pageHeight, this.thumbHeight > this.slideHeight && (this.thumbHeight = this.slideHeight), this.thumbHeight < 15 && (this.thumbHeight = 15), this.inner.style.height = this.thumbHeight + "px", this.scrollTop > this.pageHeight - this.viewHeight && (this.scrollTop = this.pageHeight - this.viewHeight, this.scrollTop < 0 && (this.scrollTop = 0), this._emit("scroll", {data: this.scrollTop})))
            }, this.setScrollTop = function (e) {
                this.scrollTop = e, e < 0 && (e = 0), this.thumbTop = e * (this.slideHeight - this.thumbHeight) / (this.pageHeight - this.viewHeight), this.inner.style.top = this.thumbTop + "px"
            }
        }.call(l.prototype);
        var h = function (e, t) {
            a.call(this, e), this.scrollLeft = 0, this.scrollWidth = 0, this.height = this.HScrollHeight, this.inner.style.height = this.element.style.height = (this.height || 12) + "px", this.renderer = t
        };
        i.inherits(h, a), function () {
            this.classSuffix = "-h", i.implement(this, r), this.onMouseDown = function (e, t) {
                if ("mousedown" === e && 0 === o.getButton(t) && 2 !== t.detail) {
                    if (t.target === this.inner) {
                        var n = this, i = t.clientX, s = t.clientX, r = this.thumbLeft;
                        o.capture(this.inner, (function (e) {
                            i = e.clientX
                        }), (function () {
                            clearInterval(a)
                        }));
                        var a = setInterval((function () {
                            if (void 0 !== i) {
                                var e = n.scrollLeftFromThumbLeft(r + i - s);
                                e !== n.scrollLeft && n._emit("scroll", {data: e})
                            }
                        }), 20);
                        return o.preventDefault(t)
                    }
                    var l = t.clientX - this.element.getBoundingClientRect().left - this.thumbWidth / 2;
                    return this._emit("scroll", {data: this.scrollLeftFromThumbLeft(l)}), o.preventDefault(t)
                }
            }, this.getHeight = function () {
                return this.isVisible ? this.height : 0
            }, this.scrollLeftFromThumbLeft = function (e) {
                var t = e * (this.pageWidth - this.viewWidth) / (this.slideWidth - this.thumbWidth);
                return (t >>= 0) < 0 ? t = 0 : t > this.pageWidth - this.viewWidth && (t = this.pageWidth - this.viewWidth), t
            }, this.setWidth = function (e) {
                this.width = Math.max(0, e), this.element.style.width = this.width + "px", this.slideWidth = this.width, this.viewWidth = this.width, this.setScrollWidth(this.pageWidth, !0)
            }, this.setInnerWidth = this.setScrollWidth = function (e, t) {
                (this.pageWidth !== e || t) && (this.pageWidth = e, this.thumbWidth = this.slideWidth * this.viewWidth / this.pageWidth, this.thumbWidth > this.slideWidth && (this.thumbWidth = this.slideWidth), this.thumbWidth < 15 && (this.thumbWidth = 15), this.inner.style.width = this.thumbWidth + "px", this.scrollLeft > this.pageWidth - this.viewWidth && (this.scrollLeft = this.pageWidth - this.viewWidth, this.scrollLeft < 0 && (this.scrollLeft = 0), this._emit("scroll", {data: this.scrollLeft})))
            }, this.setScrollLeft = function (e) {
                this.scrollLeft = e, e < 0 && (e = 0), this.thumbLeft = e * (this.slideWidth - this.thumbWidth) / (this.pageWidth - this.viewWidth), this.inner.style.left = this.thumbLeft + "px"
            }
        }.call(h.prototype), t.ScrollBar = l, t.ScrollBarV = l, t.ScrollBarH = h, t.VScrollBar = l, t.HScrollBar = h
    })), ace.define("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], (function (e, t, n) {
        var i = e("./lib/event"), s = function (e, t) {
            this.onRender = e, this.pending = !1, this.changes = 0, this.$recursionLimit = 2, this.window = t || window;
            var n = this;
            this._flush = function (e) {
                n.pending = !1;
                var t = n.changes;
                if (t && (i.blockIdle(100), n.changes = 0, n.onRender(t)), n.changes) {
                    if (n.$recursionLimit-- < 0) return;
                    n.schedule()
                } else n.$recursionLimit = 2
            }
        };
        (function () {
            this.schedule = function (e) {
                this.changes = this.changes | e, this.changes && !this.pending && (i.nextFrame(this._flush), this.pending = !0)
            }, this.clear = function (e) {
                var t = this.changes;
                return this.changes = 0, t
            }
        }).call(s.prototype), t.RenderLoop = s
    })), ace.define("ace/layer/font_metrics", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/event", "ace/lib/useragent", "ace/lib/event_emitter"], (function (e, t, n) {
        var i = e("../lib/oop"), s = e("../lib/dom"), o = e("../lib/lang"), r = e("../lib/event"),
            a = e("../lib/useragent"), l = e("../lib/event_emitter").EventEmitter, h = 512,
            c = "function" == typeof ResizeObserver, u = 200, d = t.FontMetrics = function (e) {
                this.el = s.createElement("div"), this.$setMeasureNodeStyles(this.el.style, !0), this.$main = s.createElement("div"), this.$setMeasureNodeStyles(this.$main.style), this.$measureNode = s.createElement("div"), this.$setMeasureNodeStyles(this.$measureNode.style), this.el.appendChild(this.$main), this.el.appendChild(this.$measureNode), e.appendChild(this.el), this.$measureNode.textContent = o.stringRepeat("X", h), this.$characterSize = {
                    width: 0,
                    height: 0
                }, c ? this.$addObserver() : this.checkForSizeChanges()
            };
        (function () {
            i.implement(this, l), this.$characterSize = {
                width: 0,
                height: 0
            }, this.$setMeasureNodeStyles = function (e, t) {
                e.width = e.height = "auto", e.left = e.top = "0px", e.visibility = "hidden", e.position = "absolute", e.whiteSpace = "pre", a.isIE < 8 ? e["font-family"] = "inherit" : e.font = "inherit", e.overflow = t ? "hidden" : "visible"
            }, this.checkForSizeChanges = function (e) {
                if (void 0 === e && (e = this.$measureSizes()), e && (this.$characterSize.width !== e.width || this.$characterSize.height !== e.height)) {
                    this.$measureNode.style.fontWeight = "bold";
                    var t = this.$measureSizes();
                    this.$measureNode.style.fontWeight = "", this.$characterSize = e, this.charSizes = Object.create(null), this.allowBoldFonts = t && t.width === e.width && t.height === e.height, this._emit("changeCharacterSize", {data: e})
                }
            }, this.$addObserver = function () {
                var e = this;
                this.$observer = new window.ResizeObserver((function (t) {
                    e.checkForSizeChanges()
                })), this.$observer.observe(this.$measureNode)
            }, this.$pollSizeChanges = function () {
                if (this.$pollSizeChangesTimer || this.$observer) return this.$pollSizeChangesTimer;
                var e = this;
                return this.$pollSizeChangesTimer = r.onIdle((function t() {
                    e.checkForSizeChanges(), r.onIdle(t, 500)
                }), 500)
            }, this.setPolling = function (e) {
                e ? this.$pollSizeChanges() : this.$pollSizeChangesTimer && (clearInterval(this.$pollSizeChangesTimer), this.$pollSizeChangesTimer = 0)
            }, this.$measureSizes = function (e) {
                var t = {
                    height: (e || this.$measureNode).clientHeight,
                    width: (e || this.$measureNode).clientWidth / h
                };
                return 0 === t.width || 0 === t.height ? null : t
            }, this.$measureCharWidth = function (e) {
                return this.$main.textContent = o.stringRepeat(e, h), this.$main.getBoundingClientRect().width / h
            }, this.getCharacterWidth = function (e) {
                var t = this.charSizes[e];
                return void 0 === t && (t = this.charSizes[e] = this.$measureCharWidth(e) / this.$characterSize.width), t
            }, this.destroy = function () {
                clearInterval(this.$pollSizeChangesTimer), this.$observer && this.$observer.disconnect(), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el)
            }, this.$getZoom = function e(t) {
                return t && t.parentElement ? (window.getComputedStyle(t).zoom || 1) * e(t.parentElement) : 1
            }, this.$initTransformMeasureNodes = function () {
                var e = function (e, t) {
                    return ["div", {style: "position: absolute;top:" + e + "px;left:" + t + "px;"}]
                };
                this.els = s.buildDom([e(0, 0), e(u, 0), e(0, u), e(u, u)], this.el)
            }, this.transformCoordinates = function (e, t) {
                function n(e, t, n) {
                    var i = e[1] * t[0] - e[0] * t[1];
                    return [(-t[1] * n[0] + t[0] * n[1]) / i, (+e[1] * n[0] - e[0] * n[1]) / i]
                }

                function i(e, t) {
                    return [e[0] - t[0], e[1] - t[1]]
                }

                function s(e, t) {
                    return [e[0] + t[0], e[1] + t[1]]
                }

                function o(e, t) {
                    return [e * t[0], e * t[1]]
                }

                function r(e) {
                    var t = e.getBoundingClientRect();
                    return [t.left, t.top]
                }

                e && (e = o(1 / this.$getZoom(this.el), e)), this.els || this.$initTransformMeasureNodes();
                var a = r(this.els[0]), l = r(this.els[1]), h = r(this.els[2]), c = r(this.els[3]),
                    d = n(i(c, l), i(c, h), i(s(l, h), s(c, a))), g = o(1 + d[0], i(l, a)), f = o(1 + d[1], i(h, a));
                if (t) {
                    var m = t, p = d[0] * m[0] / u + d[1] * m[1] / u + 1, v = s(o(m[0], g), o(m[1], f));
                    return s(o(1 / p / u, v), a)
                }
                var w = i(e, a), $ = n(i(g, o(d[0], w)), i(f, o(d[1], w)), w);
                return o(u, $)
            }
        }).call(d.prototype)
    })), ace.define("ace/css/editor.css", ["require", "exports", "module"], (function (e, t, n) {
n.exports = "\
.ace_br1 {border-top-left-radius    : 3px;}\
.ace_br2 {border-top-right-radius   : 3px;}\
.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}\
.ace_br4 {border-bottom-right-radius: 3px;}\
.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}\
.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}\
.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}\
.ace_br8 {border-bottom-left-radius : 3px;}\n.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}\
.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}\
.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}\
.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\
.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\
.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\
.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}\n\n\n.ace_editor {\n    position: relative;\n    overflow: hidden;\n    padding: 0;\n    font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'Source Code Pro\', \'source-code-pro\', monospace;\n    direction: ltr;\n    text-align: left;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.ace_scroller {\n    position: absolute;\n    overflow: hidden;\n    top: 0;\n    bottom: 0;\n    background-color: inherit;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    cursor: text;\n}\n\n.ace_content {\n    position: absolute;\n    box-sizing: border-box;\n    min-width: 100%;\n    contain: style size layout;\n    font-variant-ligatures: no-common-ligatures;\n}\n\n.ace_dragging .ace_scroller:before{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    content: \'\';\n    background: rgba(250, 250, 250, 0.01);\n    z-index: 1000;\n}\n.ace_dragging.ace_dark .ace_scroller:before{\n    background: rgba(0, 0, 0, 0.01);\n}\n\n.ace_gutter {\n    position: absolute;\n    overflow : hidden;\n    width: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    cursor: default;\n    z-index: 4;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    contain: style size layout;\n}\n\n.ace_gutter-active-line {\n    position: absolute;\n    left: 0;\n    right: 0;\n}\n\n.ace_scroller.ace_scroll-left:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;\n    pointer-events: none;\n}\n\n.ace_gutter-cell {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    padding-left: 19px;\n    padding-right: 6px;\n    background-repeat: no-repeat;\n}\n\n.ace_gutter-cell.ace_error {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3Pb

1000ms;\n    animation-timing-function: ease-in-out;\n    animation-name: blink-ace-animate-smooth;\n}\n    \n@keyframes blink-ace-animate {\n    from, to { opacity: 1; }\n    60% { opacity: 0; }\n}\n\n@keyframes blink-ace-animate-smooth {\n    from, to { opacity: 1; }\n    45% { opacity: 1; }\n    60% { opacity: 0; }\n    85% { opacity: 0; }\n}\n\n.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {\n    position: absolute;\n    z-index: 3;\n}\n\n.ace_marker-layer .ace_selection {\n    position: absolute;\n    z-index: 5;\n}\n\n.ace_marker-layer .ace_bracket {\n    position: absolute;\n    z-index: 6;\n}\n\n.ace_marker-layer .ace_error_bracket {\n    position: absolute;\n    border-bottom: 1px solid #DE5555;\n    border-radius: 0;\n}\n\n.ace_marker-layer .ace_active-line {\n    position: absolute;\n    z-index: 2;\n}\n\n.ace_marker-layer .ace_selected-word {\n    position: absolute;\n    z-index: 4;\n    box-sizing: border-box;\n}\n\n.ace_line .ace_fold {\n    box-sizing: border-box;\n\n    display: inline-block;\n    height: 11px;\n    margin-top: -2px;\n    vertical-align: middle;\n\n    background-image:\n        url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII='),\n        url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=');\n    background-repeat: no-repeat, repeat-x;\n    background-position: center center, top left;\n    color: transparent;\n\n    border: 1px solid black;\n    border-radius: 2px;\n\n    cursor: pointer;\n    pointer-events: auto;\n}\n\n.ace_dark .ace_fold {\n}\n\n.ace_fold:hover{\n    background-image:\n        url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII='),\n        url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC');\n}\n\n.ace_tooltip {\n    background-color: #f5f5f5;\n    border: 1px solid gray;\n    border-radius: 1px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n    color: black;\n    max-width: 100%;\n    padding: 3px 4px;\n    position: fixed;\n    z-index: 999999;\n    box-sizing: border-box;\n    cursor: default;\n    white-space: pre;\n    word-wrap: break-word;\n    line-height: normal;\n    font-style: normal;\n    font-weight: normal;\n    letter-spacing: normal;\n    pointer-events: none;\n}\n\n.ace_tooltip:focus {\n    outline: 1px solid black;\n}\n\n.ace_folding-enabled > .ace_gutter-cell {\n    padding-right: 13px;\n}\n\n.ace_fold-widget {\n    box-sizing: border-box;\n\n    margin: 0 -12px 0 1px;\n    display: none;\n    width: 11px;\n    vertical-align: top;\n\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==');\n    background-repeat: no-repeat;\n    background-position: center;\n\n    border-radius: 3px;\n    \n    border: 1px solid transparent;\n    cursor: pointer;\n}\n\n.ace_folding-enabled .ace_fold-widget {\n    display: inline-block;   \n}\n\n.ace_fold-widget.ace_end {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==');\n}\n\n.ace_fold-widget.ace_closed {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==');\n}\n\n.ace_fold-widget:hover {\n    border: 1px solid rgba(0, 0, 0, 0.3);\n    background-color: rgba(255, 255, 255, 0.2);\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);\n}\n\n.ace_fold-widget:active {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    background-color: rgba(0, 0, 0, 0.05);\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);\n}\n/**\n * Dark version for fold widgets\n */\n.ace_dark .ace_fold-widget {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC');\n}\n.ace_dark .ace_fold-widget.ace_end {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==');\n}\n.ace_dark .ace_fold-widget.ace_closed {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==');\n}\n.ace_dark .ace_fold-widget:hover {\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\n    background-color: rgba(255, 255, 255, 0.1);\n}\n.ace_dark .ace_fold-widget:active {\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\n}\n\n.ace_inline_button {\n    border: 1px solid lightgray;\n    display: inline-block;\n    margin: -1px 8px;\n    padding: 0 5px;\n    pointer-events: auto;\n    cursor: pointer;\n}\n.ace_inline_button:hover {\n    border-color: gray;\n    background: rgba(200,200,200,0.2);\n    display: inline-block;\n    pointer-events: auto;\n}\n\n.ace_fold-widget.ace_invalid {\n    background-color: #FFB4B4;\n    border-color: #DE5555;\n}\n\n.ace_fade-fold-widgets .ace_fold-widget {\n    transition: opacity 0.4s ease 0.05s;\n    opacity: 0;\n}\n\n.ace_fade-fold-widgets:hover .ace_fold-widget {\n    transition: opacity 0.05s ease 0.05s;\n    opacity:1;\n}\n\n.ace_underline {\n    text-decoration: underline;\n}\n\n.ace_bold {\n    font-weight: bold;\n}\n\n.ace_nobold .ace_bold {\n    font-weight: normal;\n}\n\n.ace_italic {\n    font-style: italic;\n}\n\n\n.ace_error-marker {\n    background-color: rgba(255, 0, 0,0.2);\n    position: absolute;\n    z-index: 9;\n}\n\n.ace_highlight-marker {\n    background-color: rgba(255, 255, 0,0.2);\n    position: absolute;\n    z-index: 8;\n}\n\n.ace_mobile-menu {\n    position: absolute;\n    line-height: 1.5;\n    border-radius: 4px;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    background: white;\n    box-shadow: 1px 3px 2px grey;\n    border: 1px solid #dcdcdc;\n    color: black;\n}\n.ace_dark > .ace_mobile-menu {\n    background: #333;\n    color: #ccc;\n    box-shadow: 1px 3px 2px grey;\n    border: 1px solid #444;\n\n}\n.ace_mobile-button {\n    padding: 2px;\n    cursor: pointer;\n    overflow: hidden;\n}\n.ace_mobile-button:hover {\n    background-color: #eee;\n    opacity:1;\n}\n.ace_mobile-button:active {\n    background-color: #ddd;\n}\n\n.ace_placeholder {\n    font-family: arial;\n    transform: scale(0.9);\n    transform-origin: left;\n    white-space: pre;\n    opacity: 0.7;\n    margin: 0 10px;\n}\n\n.ace_ghost_text {\n    opacity: 0.5;\n    font-style: italic;\n    white-space: pre;\n}"
    })), ace.define("ace/layer/decorators", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event_emitter"], (function (e, t, n) {"
        var i = e("../lib/dom"), s = e("../lib/oop"), o = e("../lib/event_emitter").EventEmitter, r = function (e, t) {
            this.canvas = i.createElement("canvas"), this.renderer = t, this.pixelRatio = 1, this.maxHeight = t.layerConfig.maxHeight, this.lineHeight = t.layerConfig.lineHeight, this.canvasHeight = e.parent.scrollHeight, this.heightRatio = this.canvasHeight / this.maxHeight, this.canvasWidth = e.width, this.minDecorationHeight = 2 * this.pixelRatio | 0, this.halfMinDecorationHeight = this.minDecorationHeight / 2 | 0, this.canvas.width = this.canvasWidth, this.canvas.height = this.canvasHeight, this.canvas.style.top = "0px", this.canvas.style.right = "0px", this.canvas.style.zIndex = "7px", this.canvas.style.position = "absolute", this.colors = {}, this.colors.dark = {
                error: "rgba(255, 18, 18, 1)",
                warning: "rgba(18, 136, 18, 1)",
                info: "rgba(18, 18, 136, 1)"
            }, this.colors.light = {
                error: "rgb(255,51,51)",
                warning: "rgb(32,133,72)",
                info: "rgb(35,68,138)"
            }, e.element.appendChild(this.canvas)
        };
        (function () {
            s.implement(this, o), this.$updateDecorators = function (e) {
                var t = !0 === this.renderer.theme.isDark ? this.colors.dark : this.colors.light;
                e && (this.maxHeight = e.maxHeight, this.lineHeight = e.lineHeight, this.canvasHeight = e.height, (e.lastRow + 1) * this.lineHeight < this.canvasHeight ? this.heightRatio = 1 : this.heightRatio = this.canvasHeight / this.maxHeight);
                var n = this.canvas.getContext("2d"), i = this.renderer.session.$annotations;
                if (n.clearRect(0, 0, this.canvas.width, this.canvas.height), i) {
                    var s = {info: 1, warning: 2, error: 3};
                    i.forEach((function (e) {
                        e.priority = s[e.type] || null
                    })), i = i.sort((function (e, t) {
                        return e.priority < t.priority ? -1 : e.priority > t.priority ? 1 : 0
                    }));
                    for (var o = this.renderer.session.$foldData, r = 0; r < i.length; r++) {
                        var a = i[r].row, l = this.compensateFoldRows(a, o),
                            h = Math.round((a - l) * this.lineHeight * this.heightRatio),
                            c = Math.round((a - l) * this.lineHeight * this.heightRatio),
                            u = Math.round(((a - l) * this.lineHeight + this.lineHeight) * this.heightRatio);
                        if (u - c < this.minDecorationHeight) {
                            var d = (c + u) / 2 | 0;
                            d < this.halfMinDecorationHeight ? d = this.halfMinDecorationHeight : d + this.halfMinDecorationHeight > this.canvasHeight && (d = this.canvasHeight - this.halfMinDecorationHeight), c = Math.round(d - this.halfMinDecorationHeight), u = Math.round(d + this.halfMinDecorationHeight)
                        }
                        n.fillStyle = t[i[r].type] || null, n.fillRect(0, h, this.canvasWidth, u - c)
                    }
                }
                var g = this.renderer.session.selection.getCursor();
                g && (l = this.compensateFoldRows(g.row, o), h = Math.round((g.row - l) * this.lineHeight * this.heightRatio), n.fillStyle = "rgba(0, 0, 0, 0.5)", n.fillRect(0, h, this.canvasWidth, 2))
            }, this.compensateFoldRows = function (e, t) {
                var n = 0;
                if (t && t.length > 0) for (var i = 0; i < t.length; i++) e > t[i].start.row && e < t[i].end.row ? n += e - t[i].start.row : e >= t[i].end.row && (n += t[i].end.row - t[i].start.row);
                return n
            }
        }).call(r.prototype), t.Decorator = r
    })), ace.define("ace/virtual_renderer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/config", "ace/layer/gutter", "ace/layer/marker", "ace/layer/text", "ace/layer/cursor", "ace/scrollbar", "ace/scrollbar", "ace/scrollbar_custom", "ace/scrollbar_custom", "ace/renderloop", "ace/layer/font_metrics", "ace/lib/event_emitter", "ace/css/editor.css", "ace/layer/decorators", "ace/lib/useragent"], (function (e, t, n) {
        var i = e("./lib/oop"), s = e("./lib/dom"), o = e("./config"), r = e("./layer/gutter").Gutter,
            a = e("./layer/marker").Marker, l = e("./layer/text").Text, h = e("./layer/cursor").Cursor,
            c = e("./scrollbar").HScrollBar, u = e("./scrollbar").VScrollBar, d = e("./scrollbar_custom").HScrollBar,
            g = e("./scrollbar_custom").VScrollBar, f = e("./renderloop").RenderLoop,
            m = e("./layer/font_metrics").FontMetrics, p = e("./lib/event_emitter").EventEmitter,
            v = e("./css/editor.css"), w = e("./layer/decorators").Decorator, $ = e("./lib/useragent"), b = $.isIE;
        s.importCssString(v, "ace_editor.css", !1);
        var y = function (e, t) {
            var n = this;
            this.container = e || s.createElement("div"), s.addCssClass(this.container, "ace_editor"), s.HI_DPI && s.addCssClass(this.container, "ace_hidpi"), this.setTheme(t), null == o.get("useStrictCSP") && o.set("useStrictCSP", !1), this.$gutter = s.createElement("div"), this.$gutter.className = "ace_gutter", this.container.appendChild(this.$gutter), this.$gutter.setAttribute("aria-hidden", !0), this.scroller = s.createElement("div"), this.scroller.className = "ace_scroller", this.container.appendChild(this.scroller), this.content = s.createElement("div"), this.content.className = "ace_content", this.scroller.appendChild(this.content), this.$gutterLayer = new r(this.$gutter), this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this)), this.$markerBack = new a(this.content);
            var i = this.$textLayer = new l(this.content);
            this.canvas = i.element, this.$markerFront = new a(this.content), this.$cursorLayer = new h(this.content), this.$horizScroll = !1, this.$vScroll = !1, this.scrollBar = this.scrollBarV = new u(this.container, this), this.scrollBarH = new c(this.container, this), this.scrollBarV.on("scroll", (function (e) {
                n.$scrollAnimation || n.session.setScrollTop(e.data - n.scrollMargin.top)
            })), this.scrollBarH.on("scroll", (function (e) {
                n.$scrollAnimation || n.session.setScrollLeft(e.data - n.scrollMargin.left)
            })), this.scrollTop = 0, this.scrollLeft = 0, this.cursorPos = {
                row: 0,
                column: 0
            }, this.$fontMetrics = new m(this.container), this.$textLayer.$setFontMetrics(this.$fontMetrics), this.$textLayer.on("changeCharacterSize", (function (e) {
                n.updateCharacterSize(), n.onResize(!0, n.gutterWidth, n.$size.width, n.$size.height), n._signal("changeCharacterSize", e)
            })), this.$size = {
                width: 0,
                height: 0,
                scrollerHeight: 0,
                scrollerWidth: 0,
                $dirty: !0
            }, this.layerConfig = {
                width: 1,
                padding: 0,
                firstRow: 0,
                firstRowScreen: 0,
                lastRow: 0,
                lineHeight: 0,
                characterWidth: 0,
                minHeight: 1,
                maxHeight: 1,
                offset: 0,
                height: 1,
                gutterOffset: 1
            }, this.scrollMargin = {left: 0, right: 0, top: 0, bottom: 0, v: 0, h: 0}, this.margin = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                v: 0,
                h: 0
            }, this.$keepTextAreaAtCursor = !$.isIOS, this.$loop = new f(this.$renderChanges.bind(this), this.container.ownerDocument.defaultView), this.$loop.schedule(this.CHANGE_FULL), this.updateCharacterSize(), this.setPadding(4), o.resetOptions(this), o._signal("renderer", this)
        };
        (function () {
            this.CHANGE_CURSOR = 1, this.CHANGE_MARKER = 2, this.CHANGE_GUTTER = 4, this.CHANGE_SCROLL = 8, this.CHANGE_LINES = 16, this.CHANGE_TEXT = 32, this.CHANGE_SIZE = 64, this.CHANGE_MARKER_BACK = 128, this.CHANGE_MARKER_FRONT = 256, this.CHANGE_FULL = 512, this.CHANGE_H_SCROLL = 1024, i.implement(this, p), this.updateCharacterSize = function () {
                this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = this.$textLayer.allowBoldFonts, this.setStyle("ace_nobold", !this.$allowBoldFonts)), this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth(), this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight(), this.$updatePrintMargin(), s.setStyle(this.scroller.style, "line-height", this.lineHeight + "px")
            }, this.setSession = function (e) {
                this.session && this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode), this.session = e, e && this.scrollMargin.top && e.getScrollTop() <= 0 && e.setScrollTop(-this.scrollMargin.top), this.$cursorLayer.setSession(e), this.$markerBack.setSession(e), this.$markerFront.setSession(e), this.$gutterLayer.setSession(e), this.$textLayer.setSession(e), e && (this.$loop.schedule(this.CHANGE_FULL), this.session.$setFontMetrics(this.$fontMetrics), this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null, this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this), this.onChangeNewLineMode(), this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode))
            }, this.updateLines = function (e, t, n) {
                if (void 0 === t && (t = 1 / 0), this.$changedLines ? (this.$changedLines.firstRow > e && (this.$changedLines.firstRow = e), this.$changedLines.lastRow < t && (this.$changedLines.lastRow = t)) : this.$changedLines = {
                    firstRow: e,
                    lastRow: t
                }, this.$changedLines.lastRow < this.layerConfig.firstRow) {
                    if (!n) return;
                    this.$changedLines.lastRow = this.layerConfig.lastRow
                }
                this.$changedLines.firstRow > this.layerConfig.lastRow || this.$loop.schedule(this.CHANGE_LINES)
            }, this.onChangeNewLineMode = function () {
                this.$loop.schedule(this.CHANGE_TEXT), this.$textLayer.$updateEolChar(), this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR)
            }, this.onChangeTabSize = function () {
                this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER), this.$textLayer.onChangeTabSize()
            }, this.updateText = function () {
                this.$loop.schedule(this.CHANGE_TEXT)
            }, this.updateFull = function (e) {
                e ? this.$renderChanges(this.CHANGE_FULL, !0) : this.$loop.schedule(this.CHANGE_FULL)
            }, this.updateFontSize = function () {
                this.$textLayer.checkForSizeChanges()
            }, this.$changes = 0, this.$updateSizeAsync = function () {
                this.$loop.pending ? this.$size.$dirty = !0 : this.onResize()
            }, this.onResize = function (e, t, n, i) {
                if (!(this.resizing > 2)) {
                    this.resizing > 0 ? this.resizing++ : this.resizing = e ? 1 : 0;
                    var s = this.container;
                    i || (i = s.clientHeight || s.scrollHeight), n || (n = s.clientWidth || s.scrollWidth);
                    var o = this.$updateCachedSize(e, t, n, i);
                    if (!this.$size.scrollerHeight || !n && !i) return this.resizing = 0;
                    e && (this.$gutterLayer.$padding = null), e ? this.$renderChanges(o | this.$changes, !0) : this.$loop.schedule(o | this.$changes), this.resizing && (this.resizing = 0), this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null, this.$customScrollbar && this.$updateCustomScrollbar(!0)
                }
            }, this.$updateCachedSize = function (e, t, n, i) {
                i -= this.$extraHeight || 0;
                var o = 0, r = this.$size, a = {
                    width: r.width,
                    height: r.height,
                    scrollerHeight: r.scrollerHeight,
                    scrollerWidth: r.scrollerWidth
                };
                if (i && (e || r.height != i) && (r.height = i, o |= this.CHANGE_SIZE, r.scrollerHeight = r.height, this.$horizScroll && (r.scrollerHeight -= this.scrollBarH.getHeight()), this.scrollBarV.setHeight(r.scrollerHeight), this.scrollBarV.element.style.bottom = this.scrollBarH.getHeight() + "px", o |= this.CHANGE_SCROLL), n && (e || r.width != n)) {
                    o |= this.CHANGE_SIZE, r.width = n, null == t && (t = this.$showGutter ? this.$gutter.offsetWidth : 0), this.gutterWidth = t, s.setStyle(this.scrollBarH.element.style, "left", t + "px"), s.setStyle(this.scroller.style, "left", t + this.margin.left + "px"), r.scrollerWidth = Math.max(0, n - t - this.scrollBarV.getWidth() - this.margin.h), s.setStyle(this.$gutter.style, "left", this.margin.left + "px");
                    var l = this.scrollBarV.getWidth() + "px";
                    s.setStyle(this.scrollBarH.element.style, "right", l), s.setStyle(this.scroller.style, "right", l), s.setStyle(this.scroller.style, "bottom", this.scrollBarH.getHeight()), this.scrollBarH.setWidth(r.scrollerWidth), (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || e) && (o |= this.CHANGE_FULL)
                }
                return r.$dirty = !n || !i, o && this._signal("resize", a), o
            }, this.onGutterResize = function (e) {
                var t = this.$showGutter ? e : 0;
                t != this.gutterWidth && (this.$changes |= this.$updateCachedSize(!0, t, this.$size.width, this.$size.height)), this.session.getUseWrapMode() && this.adjustWrapLimit() || this.$size.$dirty ? this.$loop.schedule(this.CHANGE_FULL) : this.$computeLayerConfig()
            }, this.adjustWrapLimit = function () {
                var e = this.$size.scrollerWidth - 2 * this.$padding, t = Math.floor(e / this.characterWidth);
                return this.session.adjustWrapLimit(t, this.$showPrintMargin && this.$printMarginColumn)
            }, this.setAnimatedScroll = function (e) {
                this.setOption("animatedScroll", e)
            }, this.getAnimatedScroll = function () {
                return this.$animatedScroll
            }, this.setShowInvisibles = function (e) {
                this.setOption("showInvisibles", e), this.session.$bidiHandler.setShowInvisibles(e)
            }, this.getShowInvisibles = function () {
                return this.getOption("showInvisibles")
            }, this.getDisplayIndentGuides = function () {
                return this.getOption("displayIndentGuides")
            }, this.setDisplayIndentGuides = function (e) {
                this.setOption("displayIndentGuides", e)
            }, this.getHighlightIndentGuides = function () {
                return this.getOption("highlightIndentGuides")
            }, this.setHighlightIndentGuides = function (e) {
                this.setOption("highlightIndentGuides", e)
            }, this.setShowPrintMargin = function (e) {
                this.setOption("showPrintMargin", e)
            }, this.getShowPrintMargin = function () {
                return this.getOption("showPrintMargin")
            }, this.setPrintMarginColumn = function (e) {
                this.setOption("printMarginColumn", e)
            }, this.getPrintMarginColumn = function () {
                return this.getOption("printMarginColumn")
            }, this.getShowGutter = function () {
                return this.getOption("showGutter")
            }, this.setShowGutter = function (e) {
                return this.setOption("showGutter", e)
            }, this.getFadeFoldWidgets = function () {
                return this.getOption("fadeFoldWidgets")
            }, this.setFadeFoldWidgets = function (e) {
                this.setOption("fadeFoldWidgets", e)
            }, this.setHighlightGutterLine = function (e) {
                this.setOption("highlightGutterLine", e)
            }, this.getHighlightGutterLine = function () {
                return this.getOption("highlightGutterLine")
            }, this.$updatePrintMargin = function () {
                if (this.$showPrintMargin || this.$printMarginEl) {
                    if (!this.$printMarginEl) {
                        var e = s.createElement("div");
                        e.className = "ace_layer ace_print-margin-layer", this.$printMarginEl = s.createElement("div"), this.$printMarginEl.className = "ace_print-margin", e.appendChild(this.$printMarginEl), this.content.insertBefore(e, this.content.firstChild)
                    }
                    var t = this.$printMarginEl.style;
                    t.left = Math.round(this.characterWidth * this.$printMarginColumn + this.$padding) + "px", t.visibility = this.$showPrintMargin ? "visible" : "hidden", this.session && -1 == this.session.$wrap && this.adjustWrapLimit()
                }
            }, this.getContainerElement = function () {
                return this.container
            }, this.getMouseEventTarget = function () {
                return this.scroller
            }, this.getTextAreaContainer = function () {
                return this.container
            }, this.$moveTextAreaToCursor = function () {
                if (!this.$isMousePressed) {
                    var e = this.textarea.style, t = this.$composition;
                    if (this.$keepTextAreaAtCursor || t) {
                        var n = this.$cursorLayer.$pixelPos;
                        if (n) {
                            t && t.markerRange && (n = this.$cursorLayer.getPixelPosition(t.markerRange.start, !0));
                            var i = this.layerConfig, o = n.top, r = n.left;
                            o -= i.offset;
                            var a = t && t.useTextareaForIME ? this.lineHeight : b ? 0 : 1;
                            if (o < 0 || o > i.height - a) s.translate(this.textarea, 0, 0); else {
                                var l = 1, h = this.$size.height - a;
                                if (t) if (t.useTextareaForIME) {
                                    var c = this.textarea.value;
                                    l = this.characterWidth * this.session.$getStringScreenWidth(c)[0]
                                } else o += this.lineHeight + 2; else o += this.lineHeight;
                                (r -= this.scrollLeft) > this.$size.scrollerWidth - l && (r = this.$size.scrollerWidth - l), r += this.gutterWidth + this.margin.left, s.setStyle(e, "height", a + "px"), s.setStyle(e, "width", l + "px"), s.translate(this.textarea, Math.min(r, this.$size.scrollerWidth - l), Math.min(o, h))
                            }
                        }
                    } else s.translate(this.textarea, -100, 0)
                }
            }, this.getFirstVisibleRow = function () {
                return this.layerConfig.firstRow
            }, this.getFirstFullyVisibleRow = function () {
                return this.layerConfig.firstRow + (0 === this.layerConfig.offset ? 0 : 1)
            }, this.getLastFullyVisibleRow = function () {
                var e = this.layerConfig, t = e.lastRow;
                return this.session.documentToScreenRow(t, 0) * e.lineHeight - this.session.getScrollTop() > e.height - e.lineHeight ? t - 1 : t
            }, this.getLastVisibleRow = function () {
                return this.layerConfig.lastRow
            }, this.$padding = null, this.setPadding = function (e) {
                this.$padding = e, this.$textLayer.setPadding(e), this.$cursorLayer.setPadding(e), this.$markerFront.setPadding(e), this.$markerBack.setPadding(e), this.$loop.schedule(this.CHANGE_FULL), this.$updatePrintMargin()
            }, this.setScrollMargin = function (e, t, n, i) {
                var s = this.scrollMargin;
                s.top = 0 | e, s.bottom = 0 | t, s.right = 0 | i, s.left = 0 | n, s.v = s.top + s.bottom, s.h = s.left + s.right, s.top && this.scrollTop <= 0 && this.session && this.session.setScrollTop(-s.top), this.updateFull()
            }, this.setMargin = function (e, t, n, i) {
                var s = this.margin;
                s.top = 0 | e, s.bottom = 0 | t, s.right = 0 | i, s.left = 0 | n, s.v = s.top + s.bottom, s.h = s.left + s.right, this.$updateCachedSize(!0, this.gutterWidth, this.$size.width, this.$size.height), this.updateFull()
            }, this.getHScrollBarAlwaysVisible = function () {
                return this.$hScrollBarAlwaysVisible
            }, this.setHScrollBarAlwaysVisible = function (e) {
                this.setOption("hScrollBarAlwaysVisible", e)
            }, this.getVScrollBarAlwaysVisible = function () {
                return this.$vScrollBarAlwaysVisible
            }, this.setVScrollBarAlwaysVisible = function (e) {
                this.setOption("vScrollBarAlwaysVisible", e)
            }, this.$updateScrollBarV = function () {
                var e = this.layerConfig.maxHeight, t = this.$size.scrollerHeight;
                !this.$maxLines && this.$scrollPastEnd && (e -= (t - this.lineHeight) * this.$scrollPastEnd, this.scrollTop > e - t && (e = this.scrollTop + t, this.scrollBarV.scrollTop = null)), this.scrollBarV.setScrollHeight(e + this.scrollMargin.v), this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top)
            }, this.$updateScrollBarH = function () {
                this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h), this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left)
            }, this.$frozen = !1, this.freeze = function () {
                this.$frozen = !0
            }, this.unfreeze = function () {
                this.$frozen = !1
            }, this.$renderChanges = function (e, t) {
                if (this.$changes && (e |= this.$changes, this.$changes = 0), this.session && this.container.offsetWidth && !this.$frozen && (e || t)) {
                    if (this.$size.$dirty) return this.$changes |= e, this.onResize(!0);
                    this.lineHeight || this.$textLayer.checkForSizeChanges(), this._signal("beforeRender", e), this.session && this.session.$bidiHandler && this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics);
                    var n = this.layerConfig;
                    if (e & this.CHANGE_FULL || e & this.CHANGE_SIZE || e & this.CHANGE_TEXT || e & this.CHANGE_LINES || e & this.CHANGE_SCROLL || e & this.CHANGE_H_SCROLL) {
                        if (e |= this.$computeLayerConfig() | this.$loop.clear(), n.firstRow != this.layerConfig.firstRow && n.firstRowScreen == this.layerConfig.firstRowScreen) {
                            var i = this.scrollTop + (n.firstRow - this.layerConfig.firstRow) * this.lineHeight;
                            i > 0 && (this.scrollTop = i, e |= this.CHANGE_SCROLL, e |= this.$computeLayerConfig() | this.$loop.clear())
                        }
                        n = this.layerConfig, this.$updateScrollBarV(), e & this.CHANGE_H_SCROLL && this.$updateScrollBarH(), s.translate(this.content, -this.scrollLeft, -n.offset);
                        var o = n.width + 2 * this.$padding + "px", r = n.minHeight + "px";
                        s.setStyle(this.content.style, "width", o), s.setStyle(this.content.style, "height", r)
                    }
                    if (e & this.CHANGE_H_SCROLL && (s.translate(this.content, -this.scrollLeft, -n.offset), this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller" : "ace_scroller ace_scroll-left"), e & this.CHANGE_FULL) return this.$changedLines = null, this.$textLayer.update(n), this.$showGutter && this.$gutterLayer.update(n), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(n), this.$markerBack.update(n), this.$markerFront.update(n), this.$cursorLayer.update(n), this.$moveTextAreaToCursor(), void this._signal("afterRender", e);
                    if (e & this.CHANGE_SCROLL) return this.$changedLines = null, e & this.CHANGE_TEXT || e & this.CHANGE_LINES ? this.$textLayer.update(n) : this.$textLayer.scrollLines(n), this.$showGutter && (e & this.CHANGE_GUTTER || e & this.CHANGE_LINES ? this.$gutterLayer.update(n) : this.$gutterLayer.scrollLines(n)), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(n), this.$markerBack.update(n), this.$markerFront.update(n), this.$cursorLayer.update(n), this.$moveTextAreaToCursor(), void this._signal("afterRender", e);
                    e & this.CHANGE_TEXT ? (this.$changedLines = null, this.$textLayer.update(n), this.$showGutter && this.$gutterLayer.update(n), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(n)) : e & this.CHANGE_LINES ? ((this.$updateLines() || e & this.CHANGE_GUTTER && this.$showGutter) && this.$gutterLayer.update(n), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(n)) : e & this.CHANGE_TEXT || e & this.CHANGE_GUTTER ? (this.$showGutter && this.$gutterLayer.update(n), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(n)) : e & this.CHANGE_CURSOR && (this.$highlightGutterLine && this.$gutterLayer.updateLineHighlight(n), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(n)), e & this.CHANGE_CURSOR && (this.$cursorLayer.update(n), this.$moveTextAreaToCursor()), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update(n), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update(n), this._signal("afterRender", e)
                } else this.$changes |= e
            }, this.$autosize = function () {
                var e = this.session.getScreenLength() * this.lineHeight, t = this.$maxLines * this.lineHeight,
                    n = Math.min(t, Math.max((this.$minLines || 1) * this.lineHeight, e)) + this.scrollMargin.v + (this.$extraHeight || 0);
                this.$horizScroll && (n += this.scrollBarH.getHeight()), this.$maxPixelHeight && n > this.$maxPixelHeight && (n = this.$maxPixelHeight);
                var i = !(n <= 2 * this.lineHeight) && e > t;
                if (n != this.desiredHeight || this.$size.height != this.desiredHeight || i != this.$vScroll) {
                    i != this.$vScroll && (this.$vScroll = i, this.scrollBarV.setVisible(i));
                    var s = this.container.clientWidth;
                    this.container.style.height = n + "px", this.$updateCachedSize(!0, this.$gutterWidth, s, n), this.desiredHeight = n, this._signal("autosize")
                }
            }, this.$computeLayerConfig = function () {
                var e = this.session, t = this.$size, n = t.height <= 2 * this.lineHeight,
                    i = this.session.getScreenLength() * this.lineHeight, s = this.$getLongestLine(),
                    o = !n && (this.$hScrollBarAlwaysVisible || t.scrollerWidth - s - 2 * this.$padding < 0),
                    r = this.$horizScroll !== o;
                r && (this.$horizScroll = o, this.scrollBarH.setVisible(o));
                var a = this.$vScroll;
                this.$maxLines && this.lineHeight > 1 && this.$autosize();
                var l = t.scrollerHeight + this.lineHeight,
                    h = !this.$maxLines && this.$scrollPastEnd ? (t.scrollerHeight - this.lineHeight) * this.$scrollPastEnd : 0;
                i += h;
                var c = this.scrollMargin;
                this.session.setScrollTop(Math.max(-c.top, Math.min(this.scrollTop, i - t.scrollerHeight + c.bottom))), this.session.setScrollLeft(Math.max(-c.left, Math.min(this.scrollLeft, s + 2 * this.$padding - t.scrollerWidth + c.right)));
                var u = !n && (this.$vScrollBarAlwaysVisible || t.scrollerHeight - i + h < 0 || this.scrollTop > c.top),
                    d = a !== u;
                d && (this.$vScroll = u, this.scrollBarV.setVisible(u));
                var g, f, m = this.scrollTop % this.lineHeight, p = Math.ceil(l / this.lineHeight) - 1,
                    v = Math.max(0, Math.round((this.scrollTop - m) / this.lineHeight)), w = v + p, $ = this.lineHeight;
                v = e.screenToDocumentRow(v, 0);
                var b = e.getFoldLine(v);
                b && (v = b.start.row), g = e.documentToScreenRow(v, 0), f = e.getRowLength(v) * $, w = Math.min(e.screenToDocumentRow(w, 0), e.getLength() - 1), l = t.scrollerHeight + e.getRowLength(w) * $ + f, m = this.scrollTop - g * $;
                var y = 0;
                return (this.layerConfig.width != s || r) && (y = this.CHANGE_H_SCROLL), (r || d) && (y |= this.$updateCachedSize(!0, this.gutterWidth, t.width, t.height), this._signal("scrollbarVisibilityChanged"), d && (s = this.$getLongestLine())), this.layerConfig = {
                    width: s,
                    padding: this.$padding,
                    firstRow: v,
                    firstRowScreen: g,
                    lastRow: w,
                    lineHeight: $,
                    characterWidth: this.characterWidth,
                    minHeight: l,
                    maxHeight: i,
                    offset: m,
                    gutterOffset: $ ? Math.max(0, Math.ceil((m + t.height - t.scrollerHeight) / $)) : 0,
                    height: this.$size.scrollerHeight
                }, this.session.$bidiHandler && this.session.$bidiHandler.setContentWidth(s - this.$padding), y
            }, this.$updateLines = function () {
                if (this.$changedLines) {
                    var e = this.$changedLines.firstRow, t = this.$changedLines.lastRow;
                    this.$changedLines = null;
                    var n = this.layerConfig;
                    if (!(e > n.lastRow + 1 || t < n.firstRow)) return t === 1 / 0 ? (this.$showGutter && this.$gutterLayer.update(n), void this.$textLayer.update(n)) : (this.$textLayer.updateLines(n, e, t), !0)
                }
            }, this.$getLongestLine = function () {
                var e = this.session.getScreenWidth();
                return this.showInvisibles && !this.session.$useWrapMode && (e += 1), this.$textLayer && e > this.$textLayer.MAX_LINE_LENGTH && (e = this.$textLayer.MAX_LINE_LENGTH + 30), Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(e * this.characterWidth))
            }, this.updateFrontMarkers = function () {
                this.$markerFront.setMarkers(this.session.getMarkers(!0)), this.$loop.schedule(this.CHANGE_MARKER_FRONT)
            }, this.updateBackMarkers = function () {
                this.$markerBack.setMarkers(this.session.getMarkers()), this.$loop.schedule(this.CHANGE_MARKER_BACK)
            }, this.addGutterDecoration = function (e, t) {
                this.$gutterLayer.addGutterDecoration(e, t)
            }, this.removeGutterDecoration = function (e, t) {
                this.$gutterLayer.removeGutterDecoration(e, t)
            }, this.updateBreakpoints = function (e) {
                this.$loop.schedule(this.CHANGE_GUTTER)
            }, this.setAnnotations = function (e) {
                this.$gutterLayer.setAnnotations(e), this.$loop.schedule(this.CHANGE_GUTTER)
            }, this.updateCursor = function () {
                this.$loop.schedule(this.CHANGE_CURSOR)
            }, this.hideCursor = function () {
                this.$cursorLayer.hideCursor()
            }, this.showCursor = function () {
                this.$cursorLayer.showCursor()
            }, this.scrollSelectionIntoView = function (e, t, n) {
                this.scrollCursorIntoView(e, n), this.scrollCursorIntoView(t, n)
            }, this.scrollCursorIntoView = function (e, t, n) {
                if (0 !== this.$size.scrollerHeight) {
                    var i = this.$cursorLayer.getPixelPosition(e), s = i.left, o = i.top, r = n && n.top || 0,
                        a = n && n.bottom || 0;
                    this.$scrollAnimation && (this.$stopAnimation = !0);
                    var l = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;
                    l + r > o ? (t && l + r > o + this.lineHeight && (o -= t * this.$size.scrollerHeight), 0 === o && (o = -this.scrollMargin.top), this.session.setScrollTop(o)) : l + this.$size.scrollerHeight - a < o + this.lineHeight && (t && l + this.$size.scrollerHeight - a < o - this.lineHeight && (o += t * this.$size.scrollerHeight), this.session.setScrollTop(o + this.lineHeight + a - this.$size.scrollerHeight));
                    var h = this.scrollLeft, c = 2 * this.layerConfig.characterWidth;
                    s - c < h ? ((s -= c) < this.$padding + c && (s = -this.scrollMargin.left), this.session.setScrollLeft(s)) : (s += c, h + this.$size.scrollerWidth < s + this.characterWidth ? this.session.setScrollLeft(Math.round(s + this.characterWidth - this.$size.scrollerWidth)) : h <= this.$padding && s - h < this.characterWidth && this.session.setScrollLeft(0))
                }
            }, this.getScrollTop = function () {
                return this.session.getScrollTop()
            }, this.getScrollLeft = function () {
                return this.session.getScrollLeft()
            }, this.getScrollTopRow = function () {
                return this.scrollTop / this.lineHeight
            }, this.getScrollBottomRow = function () {
                return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1)
            }, this.scrollToRow = function (e) {
                this.session.setScrollTop(e * this.lineHeight)
            }, this.alignCursor = function (e, t) {
                "number" == typeof e && (e = {row: e, column: 0});
                var n = this.$cursorLayer.getPixelPosition(e), i = this.$size.scrollerHeight - this.lineHeight,
                    s = n.top - i * (t || 0);
                return this.session.setScrollTop(s), s
            }, this.STEPS = 8, this.$calcSteps = function (e, t) {
                var n, i, s = 0, o = this.STEPS, r = [];
                for (s = 0; s < o; ++s) r.push((n = s / this.STEPS, i = e, (t - e) * (Math.pow(n - 1, 3) + 1) + i));
                return r
            }, this.scrollToLine = function (e, t, n, i) {
                var s = this.$cursorLayer.getPixelPosition({row: e, column: 0}).top;
                t && (s -= this.$size.scrollerHeight / 2);
                var o = this.scrollTop;
                this.session.setScrollTop(s), !1 !== n && this.animateScrolling(o, i)
            }, this.animateScrolling = function (e, t) {
                var n = this.scrollTop;
                if (this.$animatedScroll) {
                    var i = this;
                    if (e != n) {
                        if (this.$scrollAnimation) {
                            var s = this.$scrollAnimation.steps;
                            if (s.length && (e = s[0]) == n) return
                        }
                        var o = i.$calcSteps(e, n);
                        this.$scrollAnimation = {
                            from: e,
                            to: n,
                            steps: o
                        }, clearInterval(this.$timer), i.session.setScrollTop(o.shift()), i.session.$scrollTop = n, this.$timer = setInterval((function () {
                            if (!i.$stopAnimation) return i.session ? void (o.length ? (i.session.setScrollTop(o.shift()), i.session.$scrollTop = n) : null != n ? (i.session.$scrollTop = -1, i.session.setScrollTop(n), n = null) : r()) : clearInterval(i.$timer);
                            r()
                        }), 10)
                    }
                }

                function r() {
                    i.$timer = clearInterval(i.$timer), i.$scrollAnimation = null, i.$stopAnimation = !1, t && t()
                }
            }, this.scrollToY = function (e) {
                this.scrollTop !== e && (this.$loop.schedule(this.CHANGE_SCROLL), this.scrollTop = e)
            }, this.scrollToX = function (e) {
                this.scrollLeft !== e && (this.scrollLeft = e), this.$loop.schedule(this.CHANGE_H_SCROLL)
            }, this.scrollTo = function (e, t) {
                this.session.setScrollTop(t), this.session.setScrollLeft(e)
            }, this.scrollBy = function (e, t) {
                t && this.session.setScrollTop(this.session.getScrollTop() + t), e && this.session.setScrollLeft(this.session.getScrollLeft() + e)
            }, this.isScrollableBy = function (e, t) {
                return t < 0 && this.session.getScrollTop() >= 1 - this.scrollMargin.top || t > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom || e < 0 && this.session.getScrollLeft() >= 1 - this.scrollMargin.left || e > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right || void 0
            }, this.pixelToScreenCoordinates = function (e, t) {
                var n;
                if (this.$hasCssTransforms) {
                    n = {top: 0, left: 0};
                    var i = this.$fontMetrics.transformCoordinates([e, t]);
                    e = i[1] - this.gutterWidth - this.margin.left, t = i[0]
                } else n = this.scroller.getBoundingClientRect();
                var s = e + this.scrollLeft - n.left - this.$padding, o = s / this.characterWidth,
                    r = Math.floor((t + this.scrollTop - n.top) / this.lineHeight),
                    a = this.$blockCursor ? Math.floor(o) : Math.round(o);
                return {row: r, column: a, side: o - a > 0 ? 1 : -1, offsetX: s}
            }, this.screenToTextCoordinates = function (e, t) {
                var n;
                if (this.$hasCssTransforms) {
                    n = {top: 0, left: 0};
                    var i = this.$fontMetrics.transformCoordinates([e, t]);
                    e = i[1] - this.gutterWidth - this.margin.left, t = i[0]
                } else n = this.scroller.getBoundingClientRect();
                var s = e + this.scrollLeft - n.left - this.$padding, o = s / this.characterWidth,
                    r = this.$blockCursor ? Math.floor(o) : Math.round(o),
                    a = Math.floor((t + this.scrollTop - n.top) / this.lineHeight);
                return this.session.screenToDocumentPosition(a, Math.max(r, 0), s)
            }, this.textToScreenCoordinates = function (e, t) {
                var n = this.scroller.getBoundingClientRect(), i = this.session.documentToScreenPosition(e, t),
                    s = this.$padding + (this.session.$bidiHandler.isBidiRow(i.row, e) ? this.session.$bidiHandler.getPosLeft(i.column) : Math.round(i.column * this.characterWidth)),
                    o = i.row * this.lineHeight;
                return {pageX: n.left + s - this.scrollLeft, pageY: n.top + o - this.scrollTop}
            }, this.visualizeFocus = function () {
                s.addCssClass(this.container, "ace_focus")
            },this.visualizeBlur = function () {
                s.removeCssClass(this.container, "ace_focus")
            },this.showComposition = function (e) {
                this.$composition = e, e.cssText || (e.cssText = this.textarea.style.cssText), null == e.useTextareaForIME && (e.useTextareaForIME = this.$useTextareaForIME), this.$useTextareaForIME ? (s.addCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = "", this.$moveTextAreaToCursor(), this.$cursorLayer.element.style.display = "none") : e.markerId = this.session.addMarker(e.markerRange, "ace_composition_marker", "text")
            },this.setCompositionText = function (e) {
                var t = this.session.selection.cursor;
                this.addToken(e, "composition_placeholder", t.row, t.column), this.$moveTextAreaToCursor()
            },this.hideComposition = function () {
                if (this.$composition) {
                    this.$composition.markerId && this.session.removeMarker(this.$composition.markerId), s.removeCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = this.$composition.cssText;
                    var e = this.session.selection.cursor;
                    this.removeExtraToken(e.row, e.column), this.$composition = null, this.$cursorLayer.element.style.display = ""
                }
            },this.setGhostText = function (e, t) {
                var n = this.session.selection.cursor, i = t || {row: n.row, column: n.column};
                this.removeGhostText();
                var s = e.split("\n");
                this.addToken(s[0], "ghost_text", i.row, i.column), this.$ghostText = {
                    text: e,
                    position: {row: i.row, column: i.column}
                }, s.length > 1 && (this.$ghostTextWidget = {
                    text: s.slice(1).join("\n"),
                    row: i.row,
                    column: i.column,
                    className: "ace_ghost_text"
                }, this.session.widgetManager.addLineWidget(this.$ghostTextWidget))
            },this.removeGhostText = function () {
                if (this.$ghostText) {
                    var e = this.$ghostText.position;
                    this.removeExtraToken(e.row, e.column), this.$ghostTextWidget && (this.session.widgetManager.removeLineWidget(this.$ghostTextWidget), this.$ghostTextWidget = null), this.$ghostText = null
                }
            },this.addToken = function (e, t, n, i) {
                var s = this.session;
                s.bgTokenizer.lines[n] = null;
                var o = {type: t, value: e}, r = s.getTokens(n);
                if (null != i && r.length) for (var a = 0, l = 0; l < r.length; l++) {
                    var h = r[l];
                    if (i <= (a += h.value.length)) {
                        var c = h.value.length - (a - i), u = h.value.slice(0, c), d = h.value.slice(c);
                        r.splice(l, 1, {type: h.type, value: u}, o, {type: h.type, value: d});
                        break
                    }
                } else r.push(o);
                this.updateLines(n, n)
            },this.removeExtraToken = function (e, t) {
                this.session.bgTokenizer.lines[e] = null, this.updateLines(e, e)
            },this.setTheme = function (e, t) {
                var n = this;
                if (this.$themeId = e, n._dispatchEvent("themeChange", {theme: e}), e && "string" != typeof e) r(e); else {
                    var i = e || this.$options.theme.initialValue;
                    o.loadModule(["theme", i], r)
                }

                function r(i) {
                    if (n.$themeId != e) return t && t();
                    if (!i || !i.cssClass) throw new Error("couldn't load module " + e + " or it didn't call define");
                    i.$id && (n.$themeId = i.$id), s.importCssString(i.cssText, i.cssClass, n.container), n.theme && s.removeCssClass(n.container, n.theme.cssClass);
                    var o = "padding" in i ? i.padding : "padding" in (n.theme || {}) ? 4 : n.$padding;
                    n.$padding && o != n.$padding && n.setPadding(o), n.$theme = i.cssClass, n.theme = i, s.addCssClass(n.container, i.cssClass), s.setCssClass(n.container, "ace_dark", i.isDark), n.$size && (n.$size.width = 0, n.$updateSizeAsync()), n._dispatchEvent("themeLoaded", {theme: i}), t && t()
                }
            },this.getTheme = function () {
                return this.$themeId
            },this.setStyle = function (e, t) {
                s.setCssClass(this.container, e, !1 !== t)
            },this.unsetStyle = function (e) {
                s.removeCssClass(this.container, e)
            },this.setCursorStyle = function (e) {
                s.setStyle(this.scroller.style, "cursor", e)
            },this.setMouseCursor = function (e) {
                s.setStyle(this.scroller.style, "cursor", e)
            },this.attachToShadowRoot = function () {
                s.importCssString(v, "ace_editor.css", this.container)
            },this.destroy = function () {
                this.freeze(), this.$fontMetrics.destroy(), this.$cursorLayer.destroy(), this.removeAllListeners(), this.container.textContent = ""
            },this.$updateCustomScrollbar = function (e) {
                var t = this;
                this.$horizScroll = this.$vScroll = null, this.scrollBarV.element.remove(), this.scrollBarH.element.remove(), this.$scrollDecorator && delete this.$scrollDecorator, !0 === e ? (this.scrollBarV = new g(this.container, this), this.scrollBarH = new d(this.container, this), this.scrollBarV.setHeight(this.$size.scrollerHeight), this.scrollBarH.setWidth(this.$size.scrollerWidth), this.scrollBarV.addEventListener("scroll", (function (e) {
                    t.$scrollAnimation || t.session.setScrollTop(e.data - t.scrollMargin.top)
                })), this.scrollBarH.addEventListener("scroll", (function (e) {
                    t.$scrollAnimation || t.session.setScrollLeft(e.data - t.scrollMargin.left)
                })), this.$scrollDecorator = new w(this.scrollBarV, this), this.$scrollDecorator.$updateDecorators()) : (this.scrollBarV = new u(this.container, this), this.scrollBarH = new c(this.container, this), this.scrollBarV.addEventListener("scroll", (function (e) {
                    t.$scrollAnimation || t.session.setScrollTop(e.data - t.scrollMargin.top)
                })), this.scrollBarH.addEventListener("scroll", (function (e) {
                    t.$scrollAnimation || t.session.setScrollLeft(e.data - t.scrollMargin.left)
                })))
            }
        }).call(y.prototype), o.defineOptions(y.prototype, "renderer", {
            animatedScroll: {initialValue: !1}, showInvisibles: {
                set: function (e) {
                    this.$textLayer.setShowInvisibles(e) && this.$loop.schedule(this.CHANGE_TEXT)
                }, initialValue: !1
            }, showPrintMargin: {
                set: function () {
                    this.$updatePrintMargin()
                }, initialValue: !0
            }, printMarginColumn: {
                set: function () {
                    this.$updatePrintMargin()
                }, initialValue: 80
            }, printMargin: {
                set: function (e) {
                    "number" == typeof e && (this.$printMarginColumn = e), this.$showPrintMargin = !!e, this.$updatePrintMargin()
                }, get: function () {
                    return this.$showPrintMargin && this.$printMarginColumn
                }
            }, showGutter: {
                set: function (e) {
                    this.$gutter.style.display = e ? "block" : "none", this.$loop.schedule(this.CHANGE_FULL), this.onGutterResize()
                }, initialValue: !0
            }, fadeFoldWidgets: {
                set: function (e) {
                    s.setCssClass(this.$gutter, "ace_fade-fold-widgets", e)
                }, initialValue: !1
            }, showFoldWidgets: {
                set: function (e) {
                    this.$gutterLayer.setShowFoldWidgets(e), this.$loop.schedule(this.CHANGE_GUTTER)
                }, initialValue: !0
            }, displayIndentGuides: {
                set: function (e) {
                    this.$textLayer.setDisplayIndentGuides(e) && this.$loop.schedule(this.CHANGE_TEXT)
                }, initialValue: !0
            }, highlightIndentGuides: {
                set: function (e) {
                    1 == this.$textLayer.setHighlightIndentGuides(e) ? this.$textLayer.$highlightIndentGuide() : this.$textLayer.$clearActiveIndentGuide(this.$textLayer.$lines.cells)
                }, initialValue: !0
            }, highlightGutterLine: {
                set: function (e) {
                    this.$gutterLayer.setHighlightGutterLine(e), this.$loop.schedule(this.CHANGE_GUTTER)
                }, initialValue: !0
            }, hScrollBarAlwaysVisible: {
                set: function (e) {
                    this.$hScrollBarAlwaysVisible && this.$horizScroll || this.$loop.schedule(this.CHANGE_SCROLL)
                }, initialValue: !1
            }, vScrollBarAlwaysVisible: {
                set: function (e) {
                    this.$vScrollBarAlwaysVisible && this.$vScroll || this.$loop.schedule(this.CHANGE_SCROLL)
                }, initialValue: !1
            }, fontSize: {
                set: function (e) {
                    "number" == typeof e && (e += "px"), this.container.style.fontSize = e, this.updateFontSize()
                }, initialValue: 12
            }, fontFamily: {
                set: function (e) {
                    this.container.style.fontFamily = e, this.updateFontSize()
                }
            }, maxLines: {
                set: function (e) {
                    this.updateFull()
                }
            }, minLines: {
                set: function (e) {
                    this.$minLines < 562949953421311 || (this.$minLines = 0), this.updateFull()
                }
            }, maxPixelHeight: {
                set: function (e) {
                    this.updateFull()
                }, initialValue: 0
            }, scrollPastEnd: {
                set: function (e) {
                    e = +e || 0, this.$scrollPastEnd != e && (this.$scrollPastEnd = e, this.$loop.schedule(this.CHANGE_SCROLL))
                }, initialValue: 0, handlesSet: !0
            }, fixedWidthGutter: {
                set: function (e) {
                    this.$gutterLayer.$fixedWidth = !!e, this.$loop.schedule(this.CHANGE_GUTTER)
                }
            }, customScrollbar: {
                set: function (e) {
                    this.$updateCustomScrollbar(e)
                }, initialValue: !1
            }, theme: {
                set: function (e) {
                    this.setTheme(e)
                }, get: function () {
                    return this.$themeId || this.theme
                }, initialValue: "./theme/textmate", handlesSet: !0
            }, hasCssTransforms: {}, useTextareaForIME: {initialValue: !$.isMobile && !$.isIE}
        }), t.VirtualRenderer = y
    })), ace.define("ace/worker/worker_client", ["require", "exports", "module", "ace/lib/oop", "ace/lib/net", "ace/lib/event_emitter", "ace/config"], (function (e, t, n) {
        var i = e("../lib/oop"), s = e("../lib/net"), o = e("../lib/event_emitter").EventEmitter, r = e("../config");

        function a(e) {
            if ("undefined" == typeof Worker) return {
                postMessage: function () {
                }, terminate: function () {
                }
            };
            if (r.get("loadWorkerFromBlob")) {
                var t = function (e) {
                    var t = "importScripts('" + s.qualifyURL(e) + "');";
                    try {
                        return new Blob([t], {type: "application/javascript"})
                    } catch (e) {
                        var n = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder);
                        return n.append(t), n.getBlob("application/javascript")
                    }
                }(e), n = (window.URL || window.webkitURL).createObjectURL(t);
                return new Worker(n)
            }
            return new Worker(e)
        }

        var l = function (e) {
            e.postMessage || (e = this.$createWorkerFromOldConfig.apply(this, arguments)), this.$worker = e, this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.onMessage = this.onMessage.bind(this), this.callbackId = 1, this.callbacks = {}, this.$worker.onmessage = this.onMessage
        };
        (function () {
            i.implement(this, o), this.$createWorkerFromOldConfig = function (t, n, i, s, o) {
                if (e.nameToUrl && !e.toUrl && (e.toUrl = e.nameToUrl), r.get("packaged") || !e.toUrl) s = s || r.moduleUrl(n, "worker"); else {
                    var l = this.$normalizePath;
                    s = s || l(e.toUrl("ace/worker/worker.js", null, "_"));
                    var h = {};
                    t.forEach((function (t) {
                        h[t] = l(e.toUrl(t, null, "_").replace(/(\.js)?(\?.*)?$/, ""))
                    }))
                }
                return this.$worker = a(s), o && this.send("importScripts", o), this.$worker.postMessage({
                    init: !0,
                    tlns: h,
                    module: n,
                    classname: i
                }), this.$worker
            }, this.onMessage = function (e) {
                var t = e.data;
                switch (t.type) {
                    case"event":
                        this._signal(t.name, {data: t.data});
                        break;
                    case"call":
                        var n = this.callbacks[t.id];
                        n && (n(t.data), delete this.callbacks[t.id]);
                        break;
                    case"error":
                        this.reportError(t.data);
                        break;
                    case"log":
                        window.console && console.log && console.log.apply(console, t.data)
                }
            }, this.reportError = function (e) {
                window.console && console.error && console.error(e)
            }, this.$normalizePath = function (e) {
                return s.qualifyURL(e)
            }, this.terminate = function () {
                this._signal("terminate", {}), this.deltaQueue = null, this.$worker.terminate(), this.$worker = null, this.$doc && this.$doc.off("change", this.changeListener), this.$doc = null
            }, this.send = function (e, t) {
                this.$worker.postMessage({command: e, args: t})
            }, this.call = function (e, t, n) {
                if (n) {
                    var i = this.callbackId++;
                    this.callbacks[i] = n, t.push(i)
                }
                this.send(e, t)
            }, this.emit = function (e, t) {
                try {
                    t.data && t.data.err && (t.data.err = {
                        message: t.data.err.message,
                        stack: t.data.err.stack,
                        code: t.data.err.code
                    }), this.$worker && this.$worker.postMessage({event: e, data: {data: t.data}})
                } catch (e) {
                    console.error(e.stack)
                }
            }, this.attachToDocument = function (e) {
                this.$doc && this.terminate(), this.$doc = e, this.call("setValue", [e.getValue()]), e.on("change", this.changeListener, !0)
            }, this.changeListener = function (e) {
                this.deltaQueue || (this.deltaQueue = [], setTimeout(this.$sendDeltaQueue, 0)), "insert" == e.action ? this.deltaQueue.push(e.start, e.lines) : this.deltaQueue.push(e.start, e.end)
            }, this.$sendDeltaQueue = function () {
                var e = this.deltaQueue;
                e && (this.deltaQueue = null, e.length > 50 && e.length > this.$doc.getLength() >> 1 ? this.call("setValue", [this.$doc.getValue()]) : this.emit("change", {data: e}))
            }
        }).call(l.prototype), t.UIWorkerClient = function (e, t, n) {
            var i = null, s = !1, a = Object.create(o), h = [], c = new l({
                messageBuffer: h, terminate: function () {
                }, postMessage: function (e) {
                    h.push(e), i && (s ? setTimeout(u) : u())
                }
            });
            c.setEmitSync = function (e) {
                s = e
            };
            var u = function () {
                var e = h.shift();
                e.command ? i[e.command].apply(i, e.args) : e.event && a._signal(e.event, e.data)
            };
            return a.postMessage = function (e) {
                c.onMessage({data: e})
            }, a.callback = function (e, t) {
                this.postMessage({type: "call", id: t, data: e})
            }, a.emit = function (e, t) {
                this.postMessage({type: "event", name: e, data: t})
            }, r.loadModule(["worker", t], (function (e) {
                for (i = new e[n](a); h.length;) u()
            })), c
        }, t.WorkerClient = l, t.createWorker = a
    })), ace.define("ace/placeholder", ["require", "exports", "module", "ace/range", "ace/lib/event_emitter", "ace/lib/oop"], (function (e, t, n) {
        var i = e("./range").Range, s = e("./lib/event_emitter").EventEmitter, o = e("./lib/oop"),
            r = function (e, t, n, i, s, o) {
                var r = this;
                this.length = t, this.session = e, this.doc = e.getDocument(), this.mainClass = s, this.othersClass = o, this.$onUpdate = this.onUpdate.bind(this), this.doc.on("change", this.$onUpdate, !0), this.$others = i, this.$onCursorChange = function () {
                    setTimeout((function () {
                        r.onCursorChange()
                    }))
                }, this.$pos = n;
                var a = e.getUndoManager().$undoStack || e.getUndoManager().$undostack || {length: -1};
                this.$undoStackDepth = a.length, this.setup(), e.selection.on("changeCursor", this.$onCursorChange)
            };
        (function () {
            o.implement(this, s), this.setup = function () {
                var e = this, t = this.doc, n = this.session;
                this.selectionBefore = n.selection.toJSON(), n.selection.inMultiSelectMode && n.selection.toSingleRange(), this.pos = t.createAnchor(this.$pos.row, this.$pos.column);
                var s = this.pos;
                s.$insertRight = !0, s.detach(), s.markerId = n.addMarker(new i(s.row, s.column, s.row, s.column + this.length), this.mainClass, null, !1), this.others = [], this.$others.forEach((function (n) {
                    var i = t.createAnchor(n.row, n.column);
                    i.$insertRight = !0, i.detach(), e.others.push(i)
                })), n.setUndoSelect(!1)
            }, this.showOtherMarkers = function () {
                if (!this.othersActive) {
                    var e = this.session, t = this;
                    this.othersActive = !0, this.others.forEach((function (n) {
                        n.markerId = e.addMarker(new i(n.row, n.column, n.row, n.column + t.length), t.othersClass, null, !1)
                    }))
                }
            }, this.hideOtherMarkers = function () {
                if (this.othersActive) {
                    this.othersActive = !1;
                    for (var e = 0; e < this.others.length; e++) this.session.removeMarker(this.others[e].markerId)
                }
            }, this.onUpdate = function (e) {
                if (this.$updating) return this.updateAnchors(e);
                var t = e;
                if (t.start.row === t.end.row && t.start.row === this.pos.row) {
                    this.$updating = !0;
                    var n = "insert" === e.action ? t.end.column - t.start.column : t.start.column - t.end.column,
                        s = t.start.column >= this.pos.column && t.start.column <= this.pos.column + this.length + 1,
                        o = t.start.column - this.pos.column;
                    if (this.updateAnchors(e), s && (this.length += n), s && !this.session.$fromUndo) if ("insert" === e.action) for (var r = this.others.length - 1; r >= 0; r--) {
                        var a = {row: (l = this.others[r]).row, column: l.column + o};
                        this.doc.insertMergedLines(a, e.lines)
                    } else if ("remove" === e.action) for (r = this.others.length - 1; r >= 0; r--) {
                        var l;
                        a = {
                            row: (l = this.others[r]).row,
                            column: l.column + o
                        }, this.doc.remove(new i(a.row, a.column, a.row, a.column - n))
                    }
                    this.$updating = !1, this.updateMarkers()
                }
            }, this.updateAnchors = function (e) {
                this.pos.onChange(e);
                for (var t = this.others.length; t--;) this.others[t].onChange(e);
                this.updateMarkers()
            }, this.updateMarkers = function () {
                if (!this.$updating) {
                    var e = this, t = this.session, n = function (n, s) {
                        t.removeMarker(n.markerId), n.markerId = t.addMarker(new i(n.row, n.column, n.row, n.column + e.length), s, null, !1)
                    };
                    n(this.pos, this.mainClass);
                    for (var s = this.others.length; s--;) n(this.others[s], this.othersClass)
                }
            }, this.onCursorChange = function (e) {
                if (!this.$updating && this.session) {
                    var t = this.session.selection.getCursor();
                    t.row === this.pos.row && t.column >= this.pos.column && t.column <= this.pos.column + this.length ? (this.showOtherMarkers(), this._emit("cursorEnter", e)) : (this.hideOtherMarkers(), this._emit("cursorLeave", e))
                }
            }, this.detach = function () {
                this.session.removeMarker(this.pos && this.pos.markerId), this.hideOtherMarkers(), this.doc.off("change", this.$onUpdate), this.session.selection.off("changeCursor", this.$onCursorChange), this.session.setUndoSelect(!0), this.session = null
            }, this.cancel = function () {
                if (-1 !== this.$undoStackDepth) {
                    for (var e = this.session.getUndoManager(), t = (e.$undoStack || e.$undostack).length - this.$undoStackDepth, n = 0; n < t; n++) e.undo(this.session, !0);
                    this.selectionBefore && this.session.selection.fromJSON(this.selectionBefore)
                }
            }
        }).call(r.prototype), t.PlaceHolder = r
    })), ace.define("ace/mouse/multi_select_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], (function (e, t, n) {
        var i = e("../lib/event"), s = e("../lib/useragent");

        function o(e, t) {
            return e.row == t.row && e.column == t.column
        }

        t.onMouseDown = function (e) {
            var t = e.domEvent, n = t.altKey, r = t.shiftKey, a = t.ctrlKey, l = e.getAccelKey(), h = e.getButton();
            if (a && s.isMac && (h = t.button), e.editor.inMultiSelectMode && 2 == h) e.editor.textInput.onContextMenu(e.domEvent); else if (a || n || l) {
                if (0 === h) {
                    var c, u = e.editor, d = u.selection, g = u.inMultiSelectMode, f = e.getDocumentPosition(),
                        m = d.getCursor(), p = e.inSelection() || d.isEmpty() && o(f, m), v = e.x, w = e.y,
                        $ = u.session, b = u.renderer.pixelToScreenCoordinates(v, w), y = b;
                    if (u.$mouseHandler.$enableJumpToDef) a && n || l && n ? c = r ? "block" : "add" : n && u.$blockSelectEnabled && (c = "block"); else if (l && !n) {
                        if (c = "add", !g && r) return
                    } else n && u.$blockSelectEnabled && (c = "block");
                    if (c && s.isMac && t.ctrlKey && u.$mouseHandler.cancelContextMenu(), "add" == c) {
                        if (!g && p) return;
                        if (!g) {
                            var x = d.toOrientedRange();
                            u.addSelectionMarker(x)
                        }
                        var C = d.rangeList.rangeAtPoint(f);
                        u.inVirtualSelectionMode = !0, r && (C = null, x = d.ranges[0] || x, u.removeSelectionMarker(x)), u.once("mouseup", (function () {
                            var e = d.toOrientedRange();
                            C && e.isEmpty() && o(C.cursor, e.cursor) ? d.substractPoint(e.cursor) : (r ? d.substractPoint(x.cursor) : x && (u.removeSelectionMarker(x), d.addRange(x)), d.addRange(e)), u.inVirtualSelectionMode = !1
                        }))
                    } else if ("block" == c) {
                        var S;
                        e.stop(), u.inVirtualSelectionMode = !0;
                        var k = [], A = function () {
                            var e = u.renderer.pixelToScreenCoordinates(v, w),
                                t = $.screenToDocumentPosition(e.row, e.column, e.offsetX);
                            o(y, e) && o(t, d.lead) || (y = e, u.selection.moveToPosition(t), u.renderer.scrollCursorIntoView(), u.removeSelectionMarkers(k), k = d.rectangularRangeBlock(y, b), u.$mouseHandler.$clickSelection && 1 == k.length && k[0].isEmpty() && (k[0] = u.$mouseHandler.$clickSelection.clone()), k.forEach(u.addSelectionMarker, u), u.updateSelectionMarkers())
                        };
                        g && !l ? d.toSingleRange() : !g && l && (S = d.toOrientedRange(), u.addSelectionMarker(S)), r ? b = $.documentToScreenPosition(d.lead) : d.moveToPosition(f), y = {
                            row: -1,
                            column: -1
                        };
                        var L = A;
                        i.capture(u.container, (function (e) {
                            v = e.clientX, w = e.clientY
                        }), (function (e) {
                            A(), clearInterval(R), u.removeSelectionMarkers(k), k.length || (k = [d.toOrientedRange()]), S && (u.removeSelectionMarker(S), d.toSingleRange(S));
                            for (var t = 0; t < k.length; t++) d.addRange(k[t]);
                            u.inVirtualSelectionMode = !1, u.$mouseHandler.$clickSelection = null
                        }));
                        var R = setInterval((function () {
                            L()
                        }), 20);
                        return e.preventDefault()
                    }
                }
            } else 0 === h && e.editor.inMultiSelectMode && e.editor.exitMultiSelectMode()
        }
    })), ace.define("ace/commands/multi_select_commands", ["require", "exports", "module", "ace/keyboard/hash_handler"], (function (e, t, n) {
        t.defaultCommands = [{
            name: "addCursorAbove", description: "Add cursor above", exec: function (e) {
                e.selectMoreLines(-1)
            }, bindKey: {win: "Ctrl-Alt-Up", mac: "Ctrl-Alt-Up"}, scrollIntoView: "cursor", readOnly: !0
        }, {
            name: "addCursorBelow", description: "Add cursor below", exec: function (e) {
                e.selectMoreLines(1)
            }, bindKey: {win: "Ctrl-Alt-Down", mac: "Ctrl-Alt-Down"}, scrollIntoView: "cursor", readOnly: !0
        }, {
            name: "addCursorAboveSkipCurrent", description: "Add cursor above (skip current)", exec: function (e) {
                e.selectMoreLines(-1, !0)
            }, bindKey: {win: "Ctrl-Alt-Shift-Up", mac: "Ctrl-Alt-Shift-Up"}, scrollIntoView: "cursor", readOnly: !0
        }, {
            name: "addCursorBelowSkipCurrent", description: "Add cursor below (skip current)", exec: function (e) {
                e.selectMoreLines(1, !0)
            }, bindKey: {win: "Ctrl-Alt-Shift-Down", mac: "Ctrl-Alt-Shift-Down"}, scrollIntoView: "cursor", readOnly: !0
        }, {
            name: "selectMoreBefore", description: "Select more before", exec: function (e) {
                e.selectMore(-1)
            }, bindKey: {win: "Ctrl-Alt-Left", mac: "Ctrl-Alt-Left"}, scrollIntoView: "cursor", readOnly: !0
        }, {
            name: "selectMoreAfter", description: "Select more after", exec: function (e) {
                e.selectMore(1)
            }, bindKey: {win: "Ctrl-Alt-Right", mac: "Ctrl-Alt-Right"}, scrollIntoView: "cursor", readOnly: !0
        }, {
            name: "selectNextBefore", description: "Select next before", exec: function (e) {
                e.selectMore(-1, !0)
            }, bindKey: {win: "Ctrl-Alt-Shift-Left", mac: "Ctrl-Alt-Shift-Left"}, scrollIntoView: "cursor", readOnly: !0
        }, {
            name: "selectNextAfter",
            description: "Select next after",
            exec: function (e) {
                e.selectMore(1, !0)
            },
            bindKey: {win: "Ctrl-Alt-Shift-Right", mac: "Ctrl-Alt-Shift-Right"},
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "toggleSplitSelectionIntoLines", description: "Split selection into lines", exec: function (e) {
                e.multiSelect.rangeCount > 1 ? e.multiSelect.joinSelections() : e.multiSelect.splitIntoLines()
            }, bindKey: {win: "Ctrl-Alt-L", mac: "Ctrl-Alt-L"}, readOnly: !0
        }, {
            name: "splitSelectionIntoLines", description: "Split into lines", exec: function (e) {
                e.multiSelect.splitIntoLines()
            }, readOnly: !0
        }, {
            name: "alignCursors", description: "Align cursors", exec: function (e) {
                e.alignCursors()
            }, bindKey: {win: "Ctrl-Alt-A", mac: "Ctrl-Alt-A"}, scrollIntoView: "cursor"
        }, {
            name: "findAll", description: "Find all", exec: function (e) {
                e.findAll()
            }, bindKey: {win: "Ctrl-Alt-K", mac: "Ctrl-Alt-G"}, scrollIntoView: "cursor", readOnly: !0
        }], t.multiSelectCommands = [{
            name: "singleSelection",
            description: "Single selection",
            bindKey: "esc",
            exec: function (e) {
                e.exitMultiSelectMode()
            },
            scrollIntoView: "cursor",
            readOnly: !0,
            isAvailable: function (e) {
                return e && e.inMultiSelectMode
            }
        }];
        var i = e("../keyboard/hash_handler").HashHandler;
        t.keyboardHandler = new i(t.multiSelectCommands)
    })), ace.define("ace/multi_select", ["require", "exports", "module", "ace/range_list", "ace/range", "ace/selection", "ace/mouse/multi_select_handler", "ace/lib/event", "ace/lib/lang", "ace/commands/multi_select_commands", "ace/search", "ace/edit_session", "ace/editor", "ace/config"], (function (e, t, n) {
        var i = e("./range_list").RangeList, s = e("./range").Range, o = e("./selection").Selection,
            r = e("./mouse/multi_select_handler").onMouseDown, a = e("./lib/event"), l = e("./lib/lang"),
            h = e("./commands/multi_select_commands");
        t.commands = h.defaultCommands.concat(h.multiSelectCommands);
        var c = new (0, e("./search").Search), u = e("./edit_session").EditSession;
        (function () {
            this.getSelectionMarkers = function () {
                return this.$selectionMarkers
            }
        }).call(u.prototype), function () {
            this.ranges = null, this.rangeList = null, this.addRange = function (e, t) {
                if (e) {
                    if (!this.inMultiSelectMode && 0 === this.rangeCount) {
                        var n = this.toOrientedRange();
                        if (this.rangeList.add(n), this.rangeList.add(e), 2 != this.rangeList.ranges.length) return this.rangeList.removeAll(), t || this.fromOrientedRange(e);
                        this.rangeList.removeAll(), this.rangeList.add(n), this.$onAddRange(n)
                    }
                    e.cursor || (e.cursor = e.end);
                    var i = this.rangeList.add(e);
                    return this.$onAddRange(e), i.length && this.$onRemoveRange(i), this.rangeCount > 1 && !this.inMultiSelectMode && (this._signal("multiSelect"), this.inMultiSelectMode = !0, this.session.$undoSelect = !1, this.rangeList.attach(this.session)), t || this.fromOrientedRange(e)
                }
            }, this.toSingleRange = function (e) {
                e = e || this.ranges[0];
                var t = this.rangeList.removeAll();
                t.length && this.$onRemoveRange(t), e && this.fromOrientedRange(e)
            }, this.substractPoint = function (e) {
                var t = this.rangeList.substractPoint(e);
                if (t) return this.$onRemoveRange(t), t[0]
            }, this.mergeOverlappingRanges = function () {
                var e = this.rangeList.merge();
                e.length && this.$onRemoveRange(e)
            }, this.$onAddRange = function (e) {
                this.rangeCount = this.rangeList.ranges.length, this.ranges.unshift(e), this._signal("addRange", {range: e})
            }, this.$onRemoveRange = function (e) {
                if (this.rangeCount = this.rangeList.ranges.length, 1 == this.rangeCount && this.inMultiSelectMode) {
                    var t = this.rangeList.ranges.pop();
                    e.push(t), this.rangeCount = 0
                }
                for (var n = e.length; n--;) {
                    var i = this.ranges.indexOf(e[n]);
                    this.ranges.splice(i, 1)
                }
                this._signal("removeRange", {ranges: e}), 0 === this.rangeCount && this.inMultiSelectMode && (this.inMultiSelectMode = !1, this._signal("singleSelect"), this.session.$undoSelect = !0, this.rangeList.detach(this.session)), (t = t || this.ranges[0]) && !t.isEqual(this.getRange()) && this.fromOrientedRange(t)
            }, this.$initRangeList = function () {
                this.rangeList || (this.rangeList = new i, this.ranges = [], this.rangeCount = 0)
            }, this.getAllRanges = function () {
                return this.rangeCount ? this.rangeList.ranges.concat() : [this.getRange()]
            }, this.splitIntoLines = function () {
                for (var e = this.ranges.length ? this.ranges : [this.getRange()], t = [], n = 0; n < e.length; n++) {
                    var i = e[n], o = i.start.row, r = i.end.row;
                    if (o === r) t.push(i.clone()); else {
                        for (t.push(new s(o, i.start.column, o, this.session.getLine(o).length)); ++o < r;) t.push(this.getLineRange(o, !0));
                        t.push(new s(r, 0, r, i.end.column))
                    }
                    0 != n || this.isBackwards() || (t = t.reverse())
                }
                for (this.toSingleRange(), n = t.length; n--;) this.addRange(t[n])
            }, this.joinSelections = function () {
                var e = this.rangeList.ranges, t = e[e.length - 1], n = s.fromPoints(e[0].start, t.end);
                this.toSingleRange(), this.setSelectionRange(n, t.cursor == t.start)
            }, this.toggleBlockSelection = function () {
                if (this.rangeCount > 1) {
                    var e = this.rangeList.ranges, t = e[e.length - 1], n = s.fromPoints(e[0].start, t.end);
                    this.toSingleRange(), this.setSelectionRange(n, t.cursor == t.start)
                } else {
                    var i = this.session.documentToScreenPosition(this.cursor),
                        o = this.session.documentToScreenPosition(this.anchor);
                    this.rectangularRangeBlock(i, o).forEach(this.addRange, this)
                }
            }, this.rectangularRangeBlock = function (e, t, n) {
                var i = [], o = e.column < t.column;
                if (o) var r = e.column, a = t.column, l = e.offsetX,
                    h = t.offsetX; else r = t.column, a = e.column, l = t.offsetX, h = e.offsetX;
                var c, u, d, g = e.row < t.row;
                if (g) var f = e.row, m = t.row; else f = t.row, m = e.row;
                r < 0 && (r = 0), f < 0 && (f = 0), f == m && (n = !0);
                for (var p = f; p <= m; p++) {
                    var v = s.fromPoints(this.session.screenToDocumentPosition(p, r, l), this.session.screenToDocumentPosition(p, a, h));
                    if (v.isEmpty()) {
                        if (c && (u = v.end, d = c, u.row == d.row && u.column == d.column)) break;
                        c = v.end
                    }
                    v.cursor = o ? v.start : v.end, i.push(v)
                }
                if (g && i.reverse(), !n) {
                    for (var w = i.length - 1; i[w].isEmpty() && w > 0;) w--;
                    if (w > 0) for (var $ = 0; i[$].isEmpty();) $++;
                    for (var b = w; b >= $; b--) i[b].isEmpty() && i.splice(b, 1)
                }
                return i
            }
        }.call(o.prototype);
        var d = e("./editor").Editor;

        function g(e) {
            e.$multiselectOnSessionChange || (e.$onAddRange = e.$onAddRange.bind(e), e.$onRemoveRange = e.$onRemoveRange.bind(e), e.$onMultiSelect = e.$onMultiSelect.bind(e), e.$onSingleSelect = e.$onSingleSelect.bind(e), e.$multiselectOnSessionChange = t.onSessionChange.bind(e), e.$checkMultiselectChange = e.$checkMultiselectChange.bind(e), e.$multiselectOnSessionChange(e), e.on("changeSession", e.$multiselectOnSessionChange), e.on("mousedown", r), e.commands.addCommands(h.defaultCommands), function (e) {
                if (e.textInput) {
                    var t = e.textInput.getElement(), n = !1;
                    a.addListener(t, "keydown", (function (t) {
                        var s = 18 == t.keyCode && !(t.ctrlKey || t.shiftKey || t.metaKey);
                        e.$blockSelectEnabled && s ? n || (e.renderer.setMouseCursor("crosshair"), n = !0) : n && i()
                    }), e), a.addListener(t, "keyup", i, e), a.addListener(t, "blur", i, e)
                }

                function i(t) {
                    n && (e.renderer.setMouseCursor(""), n = !1)
                }
            }(e))
        }

        (function () {
            this.updateSelectionMarkers = function () {
                this.renderer.updateCursor(), this.renderer.updateBackMarkers()
            }, this.addSelectionMarker = function (e) {
                e.cursor || (e.cursor = e.end);
                var t = this.getSelectionStyle();
                return e.marker = this.session.addMarker(e, "ace_selection", t), this.session.$selectionMarkers.push(e), this.session.selectionMarkerCount = this.session.$selectionMarkers.length, e
            }, this.removeSelectionMarker = function (e) {
                if (e.marker) {
                    this.session.removeMarker(e.marker);
                    var t = this.session.$selectionMarkers.indexOf(e);
                    -1 != t && this.session.$selectionMarkers.splice(t, 1), this.session.selectionMarkerCount = this.session.$selectionMarkers.length
                }
            }, this.removeSelectionMarkers = function (e) {
                for (var t = this.session.$selectionMarkers, n = e.length; n--;) {
                    var i = e[n];
                    if (i.marker) {
                        this.session.removeMarker(i.marker);
                        var s = t.indexOf(i);
                        -1 != s && t.splice(s, 1)
                    }
                }
                this.session.selectionMarkerCount = t.length
            }, this.$onAddRange = function (e) {
                this.addSelectionMarker(e.range), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
            }, this.$onRemoveRange = function (e) {
                this.removeSelectionMarkers(e.ranges), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
            }, this.$onMultiSelect = function (e) {
                this.inMultiSelectMode || (this.inMultiSelectMode = !0, this.setStyle("ace_multiselect"), this.keyBinding.addKeyboardHandler(h.keyboardHandler), this.commands.setDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers())
            }, this.$onSingleSelect = function (e) {
                this.session.multiSelect.inVirtualMode || (this.inMultiSelectMode = !1, this.unsetStyle("ace_multiselect"), this.keyBinding.removeKeyboardHandler(h.keyboardHandler), this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers(), this._emit("changeSelection"))
            }, this.$onMultiSelectExec = function (e) {
                var t = e.command, n = e.editor;
                if (n.multiSelect) {
                    if (t.multiSelectAction) "forEach" == t.multiSelectAction ? i = n.forEachSelection(t, e.args) : "forEachLine" == t.multiSelectAction ? i = n.forEachSelection(t, e.args, !0) : "single" == t.multiSelectAction ? (n.exitMultiSelectMode(), i = t.exec(n, e.args || {})) : i = t.multiSelectAction(n, e.args || {}); else {
                        var i = t.exec(n, e.args || {});
                        n.multiSelect.addRange(n.multiSelect.toOrientedRange()), n.multiSelect.mergeOverlappingRanges()
                    }
                    return i
                }
            }, this.forEachSelection = function (e, t, n) {
                if (!this.inVirtualSelectionMode) {
                    var i, s = n && n.keepOrder, r = 1 == n || n && n.$byLines, a = this.session, l = this.selection,
                        h = l.rangeList, c = (s ? l : h).ranges;
                    if (!c.length) return e.exec ? e.exec(this, t || {}) : e(this, t || {});
                    var u = l._eventRegistry;
                    l._eventRegistry = {};
                    var d = new o(a);
                    this.inVirtualSelectionMode = !0;
                    for (var g = c.length; g--;) {
                        if (r) for (; g > 0 && c[g].start.row == c[g - 1].end.row;) g--;
                        d.fromOrientedRange(c[g]), d.index = g, this.selection = a.selection = d;
                        var f = e.exec ? e.exec(this, t || {}) : e(this, t || {});
                        i || void 0 === f || (i = f), d.toOrientedRange(c[g])
                    }
                    d.detach(), this.selection = a.selection = l, this.inVirtualSelectionMode = !1, l._eventRegistry = u, l.mergeOverlappingRanges(), l.ranges[0] && l.fromOrientedRange(l.ranges[0]);
                    var m = this.renderer.$scrollAnimation;
                    return this.onCursorChange(), this.onSelectionChange(), m && m.from == m.to && this.renderer.animateScrolling(m.from), i
                }
            }, this.exitMultiSelectMode = function () {
                this.inMultiSelectMode && !this.inVirtualSelectionMode && this.multiSelect.toSingleRange()
            }, this.getSelectedText = function () {
                var e = "";
                if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                    for (var t = this.multiSelect.rangeList.ranges, n = [], i = 0; i < t.length; i++) n.push(this.session.getTextRange(t[i]));
                    var s = this.session.getDocument().getNewLineCharacter();
                    (e = n.join(s)).length == (n.length - 1) * s.length && (e = "")
                } else this.selection.isEmpty() || (e = this.session.getTextRange(this.getSelectionRange()));
                return e
            }, this.$checkMultiselectChange = function (e, t) {
                if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                    var n = this.multiSelect.ranges[0];
                    if (this.multiSelect.isEmpty() && t == this.multiSelect.anchor) return;
                    var i = t == this.multiSelect.anchor ? n.cursor == n.start ? n.end : n.start : n.cursor;
                    i.row != t.row || this.session.$clipPositionToDocument(i.row, i.column).column != t.column ? this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange()) : this.multiSelect.mergeOverlappingRanges()
                }
            }, this.findAll = function (e, t, n) {
                if ((t = t || {}).needle = e || t.needle, null == t.needle) {
                    var i = this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange();
                    t.needle = this.session.getTextRange(i)
                }
                this.$search.set(t);
                var s = this.$search.findAll(this.session);
                if (!s.length) return 0;
                var o = this.multiSelect;
                n || o.toSingleRange(s[0]);
                for (var r = s.length; r--;) o.addRange(s[r], !0);
                return i && o.rangeList.rangeAtPoint(i.start) && o.addRange(i, !0), s.length
            }, this.selectMoreLines = function (e, t) {
                var n = this.selection.toOrientedRange(), i = n.cursor == n.end,
                    o = this.session.documentToScreenPosition(n.cursor);
                this.selection.$desiredColumn && (o.column = this.selection.$desiredColumn);
                var r, a = this.session.screenToDocumentPosition(o.row + e, o.column);
                if (n.isEmpty()) h = a; else var l = this.session.documentToScreenPosition(i ? n.end : n.start),
                    h = this.session.screenToDocumentPosition(l.row + e, l.column);
                if (i ? (r = s.fromPoints(a, h)).cursor = r.start : (r = s.fromPoints(h, a)).cursor = r.end, r.desiredColumn = o.column, this.selection.inMultiSelectMode) {
                    if (t) var c = n.cursor
                } else this.selection.addRange(n);
                this.selection.addRange(r), c && this.selection.substractPoint(c)
            }, this.transposeSelections = function (e) {
                for (var t = this.session, n = t.multiSelect, i = n.ranges, s = i.length; s--;) if ((a = i[s]).isEmpty()) {
                    var o = t.getWordRange(a.start.row, a.start.column);
                    a.start.row = o.start.row, a.start.column = o.start.column, a.end.row = o.end.row, a.end.column = o.end.column
                }
                n.mergeOverlappingRanges();
                var r = [];
                for (s = i.length; s--;) {
                    var a = i[s];
                    r.unshift(t.getTextRange(a))
                }
                for (e < 0 ? r.unshift(r.pop()) : r.push(r.shift()), s = i.length; s--;) o = (a = i[s]).clone(), t.replace(a, r[s]), a.start.row = o.start.row, a.start.column = o.start.column;
                n.fromOrientedRange(n.ranges[0])
            }, this.selectMore = function (e, t, n) {
                var i = this.session, s = i.multiSelect.toOrientedRange();
                if (!s.isEmpty() || ((s = i.getWordRange(s.start.row, s.start.column)).cursor = -1 == e ? s.start : s.end, this.multiSelect.addRange(s), !n)) {
                    var o = i.getTextRange(s), r = function (e, t, n) {
                        return c.$options.wrap = !0, c.$options.needle = t, c.$options.backwards = -1 == n, c.find(e)
                    }(i, o, e);
                    r && (r.cursor = -1 == e ? r.start : r.end, this.session.unfold(r), this.multiSelect.addRange(r), this.renderer.scrollCursorIntoView(null, .5)), t && this.multiSelect.substractPoint(s.cursor)
                }
            }, this.alignCursors = function () {
                var e = this.session, t = e.multiSelect, n = t.ranges, i = -1, o = n.filter((function (e) {
                    if (e.cursor.row == i) return !0;
                    i = e.cursor.row
                }));
                if (n.length && o.length != n.length - 1) {
                    o.forEach((function (e) {
                        t.substractPoint(e.cursor)
                    }));
                    var r = 0, a = 1 / 0, h = n.map((function (t) {
                        var n = t.cursor, i = e.getLine(n.row).substr(n.column).search(/\S/g);
                        return -1 == i && (i = 0), n.column > r && (r = n.column), i < a && (a = i), i
                    }));
                    n.forEach((function (t, n) {
                        var i = t.cursor, o = r - i.column, c = h[n] - a;
                        o > c ? e.insert(i, l.stringRepeat(" ", o - c)) : e.remove(new s(i.row, i.column, i.row, i.column - o + c)), t.start.column = t.end.column = r, t.start.row = t.end.row = i.row, t.cursor = t.end
                    })), t.fromOrientedRange(n[0]), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
                } else {
                    var c = this.selection.getRange(), u = c.start.row, d = c.end.row, g = u == d;
                    if (g) {
                        var f, m = this.session.getLength();
                        do {
                            f = this.session.getLine(d)
                        } while (/[=:]/.test(f) && ++d < m);
                        do {
                            f = this.session.getLine(u)
                        } while (/[=:]/.test(f) && --u > 0);
                        u < 0 && (u = 0), d >= m && (d = m - 1)
                    }
                    var p = this.session.removeFullLines(u, d);
                    p = this.$reAlignText(p, g), this.session.insert({
                        row: u,
                        column: 0
                    }, p.join("\n") + "\n"), g || (c.start.column = 0, c.end.column = p[p.length - 1].length), this.selection.setRange(c)
                }
            }, this.$reAlignText = function (e, t) {
                var n, i, s, o = !0, r = !0;
                return e.map((function (e) {
                    var t = e.match(/(\s*)(.*?)(\s*)([=:].*)/);
                    return t ? null == n ? (n = t[1].length, i = t[2].length, s = t[3].length, t) : (n + i + s != t[1].length + t[2].length + t[3].length && (r = !1), n != t[1].length && (o = !1), n > t[1].length && (n = t[1].length), i < t[2].length && (i = t[2].length), s > t[3].length && (s = t[3].length), t) : [e]
                })).map(t ? h : o ? r ? function (e) {
                    return e[2] ? a(n + i - e[2].length) + e[2] + a(s) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
                } : h : function (e) {
                    return e[2] ? a(n) + e[2] + a(s) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
                });

                function a(e) {
                    return l.stringRepeat(" ", e)
                }

                function h(e) {
                    return e[2] ? a(n) + e[2] + a(i - e[2].length + s) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
                }
            }
        }).call(d.prototype), t.onSessionChange = function (e) {
            var t = e.session;
            t && !t.multiSelect && (t.$selectionMarkers = [], t.selection.$initRangeList(), t.multiSelect = t.selection), this.multiSelect = t && t.multiSelect;
            var n = e.oldSession;
            n && (n.multiSelect.off("addRange", this.$onAddRange), n.multiSelect.off("removeRange", this.$onRemoveRange), n.multiSelect.off("multiSelect", this.$onMultiSelect), n.multiSelect.off("singleSelect", this.$onSingleSelect), n.multiSelect.lead.off("change", this.$checkMultiselectChange), n.multiSelect.anchor.off("change", this.$checkMultiselectChange)), t && (t.multiSelect.on("addRange", this.$onAddRange), t.multiSelect.on("removeRange", this.$onRemoveRange), t.multiSelect.on("multiSelect", this.$onMultiSelect), t.multiSelect.on("singleSelect", this.$onSingleSelect), t.multiSelect.lead.on("change", this.$checkMultiselectChange), t.multiSelect.anchor.on("change", this.$checkMultiselectChange)), t && this.inMultiSelectMode != t.selection.inMultiSelectMode && (t.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect())
        }, t.MultiSelect = g, e("./config").defineOptions(d.prototype, "editor", {
            enableMultiselect: {
                set: function (e) {
                    g(this), e ? (this.on("changeSession", this.$multiselectOnSessionChange), this.on("mousedown", r)) : (this.off("changeSession", this.$multiselectOnSessionChange), this.off("mousedown", r))
                }, value: !0
            }, enableBlockSelect: {
                set: function (e) {
                    this.$blockSelectEnabled = e
                }, value: !0
            }
        })
    })), ace.define("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"], (function (e, t, n) {
        var i = e("../../range").Range, s = t.FoldMode = function () {
        };
        (function () {
            this.foldingStartMarker = null, this.foldingStopMarker = null, this.getFoldWidget = function (e, t, n) {
                var i = e.getLine(n);
                return this.foldingStartMarker.test(i) ? "start" : "markbeginend" == t && this.foldingStopMarker && this.foldingStopMarker.test(i) ? "end" : ""
            }, this.getFoldWidgetRange = function (e, t, n) {
                return null
            }, this.indentationBlock = function (e, t, n) {
                var s = /\S/, o = e.getLine(t), r = o.search(s);
                if (-1 != r) {
                    for (var a = n || o.length, l = e.getLength(), h = t, c = t; ++t < l;) {
                        var u = e.getLine(t).search(s);
                        if (-1 != u) {
                            if (u <= r) {
                                var d = e.getTokenAt(t, 0);
                                if (!d || "string" !== d.type) break
                            }
                            c = t
                        }
                    }
                    if (c > h) {
                        var g = e.getLine(c).length;
                        return new i(h, a, c, g)
                    }
                }
            }, this.openingBracketBlock = function (e, t, n, s, o) {
                var r = {row: n, column: s + 1}, a = e.$findClosingBracket(t, r, o);
                if (a) {
                    var l = e.foldWidgets[a.row];
                    return null == l && (l = e.getFoldWidget(a.row)), "start" == l && a.row > r.row && (a.row--, a.column = e.getLine(a.row).length), i.fromPoints(r, a)
                }
            }, this.closingBracketBlock = function (e, t, n, s, o) {
                var r = {row: n, column: s}, a = e.$findOpeningBracket(t, r);
                if (a) return a.column++, r.column--, i.fromPoints(a, r)
            }
        }).call(s.prototype)
    })), ace.define("ace/ext/error_marker", ["require", "exports", "module", "ace/line_widgets", "ace/lib/dom", "ace/range"], (function (e, t, n) {
        var i = e("../line_widgets").LineWidgets, s = e("../lib/dom"), o = e("../range").Range;
        t.showErrorMarker = function (e, t) {
            var n = e.session;
            n.widgetManager || (n.widgetManager = new i(n), n.widgetManager.attach(e));
            var r = e.getCursorPosition(), a = r.row, l = n.widgetManager.getWidgetsAtRow(a).filter((function (e) {
                return "errorMarker" == e.type
            }))[0];
            l ? l.destroy() : a -= t;
            var h, c = function (e, t, n) {
                var i = e.getAnnotations().sort(o.comparePoints);
                if (i.length) {
                    var s = function (e, t, n) {
                        for (var i = 0, s = e.length - 1; i <= s;) {
                            var o = i + s >> 1, r = n(t, e[o]);
                            if (r > 0) i = o + 1; else {
                                if (!(r < 0)) return o;
                                s = o - 1
                            }
                        }
                        return -(i + 1)
                    }(i, {row: t, column: -1}, o.comparePoints);
                    s < 0 && (s = -s - 1), s >= i.length ? s = n > 0 ? 0 : i.length - 1 : 0 === s && n < 0 && (s = i.length - 1);
                    var r = i[s];
                    if (r && n) {
                        if (r.row === t) {
                            do {
                                r = i[s += n]
                            } while (r && r.row === t);
                            if (!r) return i.slice()
                        }
                        var a = [];
                        t = r.row;
                        do {
                            a[n < 0 ? "unshift" : "push"](r), r = i[s += n]
                        } while (r && r.row == t);
                        return a.length && a
                    }
                }
            }(n, a, t);
            if (c) {
                var u = c[0];
                r.column = (u.pos && "number" != typeof u.column ? u.pos.sc : u.column) || 0, r.row = u.row, h = e.renderer.$gutterLayer.$annotations[r.row]
            } else {
                if (l) return;
                h = {text: ["Looks good!"], className: "ace_ok"}
            }
            e.session.unfold(r.row), e.selection.moveToPosition(r);
            var d = {row: r.row, fixedWidth: !0, coverGutter: !0, el: s.createElement("div"), type: "errorMarker"},
                g = d.el.appendChild(s.createElement("div")), f = d.el.appendChild(s.createElement("div"));
            f.className = "error_widget_arrow " + h.className;
            var m = e.renderer.$cursorLayer.getPixelPosition(r).left;
            f.style.left = m + e.renderer.gutterWidth - 5 + "px", d.el.className = "error_widget_wrapper", g.className = "error_widget " + h.className, g.innerHTML = h.text.join("<br>"), g.appendChild(s.createElement("div"));
            var p = function (e, t, n) {
                if (0 === t && ("esc" === n || "return" === n)) return d.destroy(), {command: "null"}
            };
            d.destroy = function () {
                e.$mouseHandler.isMousePressed || (e.keyBinding.removeKeyboardHandler(p), n.widgetManager.removeLineWidget(d), e.off("changeSelection", d.destroy), e.off("changeSession", d.destroy), e.off("mouseup", d.destroy), e.off("change", d.destroy))
            }, e.keyBinding.addKeyboardHandler(p), e.on("changeSelection", d.destroy), e.on("changeSession", d.destroy), e.on("mouseup", d.destroy), e.on("change", d.destroy), e.session.widgetManager.addLineWidget(d), d.el.onmousedown = e.focus.bind(e), e.renderer.scrollCursorIntoView(null, .5, {bottom: d.el.offsetHeight})
        }, s.importCssString("\n    .error_widget_wrapper {\n        background: inherit;\n        color: inherit;\n        border:none\n    }\n    .error_widget {\n        border-top: solid 2px;\n        border-bottom: solid 2px;\n        margin: 5px 0;\n        padding: 10px 40px;\n        white-space: pre-wrap;\n    }\n    .error_widget.ace_error, .error_widget_arrow.ace_error{\n        border-color: #ff5a5a\n    }\n    .error_widget.ace_warning, .error_widget_arrow.ace_warning{\n        border-color: #F1D817\n    }\n    .error_widget.ace_info, .error_widget_arrow.ace_info{\n        border-color: #5a5a5a\n    }\n    .error_widget.ace_ok, .error_widget_arrow.ace_ok{\n        border-color: #5aaa5a\n    }\n    .error_widget_arrow {\n        position: absolute;\n        border: solid 5px;\n        border-top-color: transparent!important;\n        border-right-color: transparent!important;\n        border-left-color: transparent!important;\n        top: -5px;\n    }\n", "error_marker.css", !1)
    })), ace.define("ace/ace", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/range", "ace/editor", "ace/edit_session", "ace/undomanager", "ace/virtual_renderer", "ace/worker/worker_client", "ace/keyboard/hash_handler", "ace/placeholder", "ace/multi_select", "ace/mode/folding/fold_mode", "ace/theme/textmate", "ace/ext/error_marker", "ace/config", "ace/loader_build"], (function (e, t, n) {
        e("./loader_build")(t);
        var i = e("./lib/dom"), s = e("./lib/event"), o = e("./range").Range, r = e("./editor").Editor,
            a = e("./edit_session").EditSession, l = e("./undomanager").UndoManager,
            h = e("./virtual_renderer").VirtualRenderer;
        e("./worker/worker_client"), e("./keyboard/hash_handler"), e("./placeholder"), e("./multi_select"), e("./mode/folding/fold_mode"), e("./theme/textmate"), e("./ext/error_marker"), t.config = e("./config"), t.edit = function (e, n) {
            if ("string" == typeof e) {
                var o = e;
                if (!(e = document.getElementById(o))) throw new Error("ace.edit can't find div #" + o)
            }
            if (e && e.env && e.env.editor instanceof r) return e.env.editor;
            var a = "";
            if (e && /input|textarea/i.test(e.tagName)) {
                var l = e;
                a = l.value, e = i.createElement("pre"), l.parentNode.replaceChild(e, l)
            } else e && (a = e.textContent, e.innerHTML = "");
            var c = t.createEditSession(a), u = new r(new h(e), c, n),
                d = {document: c, editor: u, onResize: u.resize.bind(u, null)};
            return l && (d.textarea = l), s.addListener(window, "resize", d.onResize), u.on("destroy", (function () {
                s.removeListener(window, "resize", d.onResize), d.editor.container.env = null
            })), u.container.env = u.env = d, u
        }, t.createEditSession = function (e, t) {
            var n = new a(e, t);
            return n.setUndoManager(new l), n
        }, t.Range = o, t.Editor = r, t.EditSession = a, t.UndoManager = l, t.VirtualRenderer = h, t.version = t.config.version
    })), ace.require(["ace/ace"], (function (e) {
        for (var t in e && (e.config.init(!0), e.define = ace.define), window.ace || (window.ace = e), e) e.hasOwnProperty(t) && (window.ace[t] = e[t]);
        window.ace.default = window.ace, gt && (gt.exports = window.ace)
    }));
    var mt = ft;

    function pt(t) {
        let n;
        return {
            c() {
                n = p("div"), y(n, "id", "editor"), y(n, "class", "svelte-1c4bs2p")
            }, m(e, i) {
                g(e, n, i), t[4](n)
            }, p: e, i: e, o: e, d(e) {
                e && f(n), t[4](null)
            }
        }
    }

    function vt(e, t, n) {
        let i, s, {text: o} = t;
        return M((() => {
            n(3, s = mt.edit(i, {
                mode: "ace/mode/text",
                selectionStyle: "text",
                readOnly: !0,
                showFoldWidgets: !1,
                showPrintMargin: !1,
                showInvisibles: !1,
                behavioursEnabled: !1,
                vScrollBarAlwaysVisible: !0,
                useSoftTabs: !1
            })), s.session.setUseWrapMode(!0), s.setValue(o), s.selection.setRange(new mt.Range(0, 0, 0, 0))
        })), e.$$set = e => {
            "text" in e && n(1, o = e.text)
        }, e.$$.update = () => {
            10 & e.$$.dirty && s && (s.setValue(o), s.selection.setRange(new mt.Range(0, 0, 0, 0)))
        }, [i, o, function (e, t) {
            if (s) {
                const n = s.session.doc.indexToPosition(e), i = s.session.doc.indexToPosition(t),
                    o = new mt.Range(n.row, n.column, i.row, i.column);
                s.selection.setRange(o), s.scrollToLine(Math.round((n.row + i.row) / 2), !0, !0, (() => {
                }))
            }
        }, s, function (e) {
            F[e ? "unshift" : "push"]((() => {
                i = e, n(0, i)
            }))
        }]
    }

    class wt extends ie {
        constructor(e) {
            super(), ne(this, e, vt, pt, o, {text: 1, navigate: 2})
        }

        get navigate() {
            return this.$$.ctx[2]
        }
    }

    class $t extends ie {
        constructor(e) {
            super(), ne(this, e, null, null, o, {})
        }
    }

    function bt(e, t, n) {
        const i = e.slice();
        return i[15] = t[n], i
    }

    function yt(e) {
        let t;
        return {
            c() {
                t = p("span"), t.textContent = "-", y(t, "class", "text-orange-500 font-bold mr-1")
            }, m(e, n) {
                g(e, t, n)
            }, d(e) {
                e && f(t)
            }
        }
    }

    function xt(e) {
        let t;
        return {
            c() {
                t = p("span"), t.textContent = "+", y(t, "class", "text-blue-600 font-bold mr-1")
            }, m(e, n) {
                g(e, t, n)
            }, d(e) {
                e && f(t)
            }
        }
    }

    function Ct(e) {
        let t, n, i, s, o, r, a, l = e[15].searchResult.text + "";

        function h(e, t) {
            return e[15].weight > 0 ? xt : e[15].weight < 0 ? yt : void 0
        }

        let c = h(e), u = c && c(e);

        function m() {
            return e[12](e[15])
        }

        return {
            c() {
                t = p("button"), u && u.c(), n = w(), i = v(l), s = w(), y(t, "class", "w-64 max-sm:w-40 truncate monospace rounded px-2 inline-block mr-2 mb-2 cursor"), y(t, "title", o = `${e[15].file.basename}: ${e[15].searchResult.text}`), A(t, "bg-blue-200", e[15].weight > 0), A(t, "bg-orange-200", e[15].weight < 0)
            }, m(e, o) {
                g(e, t, o), u && u.m(t, null), d(t, n), d(t, i), d(t, s), r || (a = b(t, "click", m), r = !0)
            }, p(s, r) {
                c !== (c = h(e = s)) && (u && u.d(1), u = c && c(e), u && (u.c(), u.m(t, n))), 2 & r && l !== (l = e[15].searchResult.text + "") && C(i, l), 2 & r && o !== (o = `${e[15].file.basename}: ${e[15].searchResult.text}`) && y(t, "title", o), 2 & r && A(t, "bg-blue-200", e[15].weight > 0), 2 & r && A(t, "bg-orange-200", e[15].weight < 0)
            }, d(e) {
                e && f(t), u && u.d(), r = !1, a()
            }
        }
    }

    function St(t) {
        let n, s, o, r, a, l, h, c, u, v = t[1], $ = [];
        for (let e = 0; e < v.length; e += 1) $[e] = Ct(bt(t, v, e));
        return {
            c() {
                n = p("div"), s = p("div"), o = p("input"), r = w(), a = p("button"), a.textContent = "Search", l = w(), h = p("div");
                for (let e = 0; e < $.length; e += 1) $[e].c();
                y(o, "class", "bg-white py-2 px-4 pl-12 font-mono w-full rounded border-black border"), y(o, "placeholder", "Search"), A(o, "bg-yellow-50", t[3]), A(o, "border-yellow-600", t[3]), A(o, "border-dashed", t[3]), y(a, "class", "search-button svelte-1e6q0wp"), y(s, "class", "flex items-center relative flex-1"), y(h, "class", "max-h-24 overflow-y-auto -mb-2 mt-2"), y(n, "class", "flex flex-1 flex-col")
            }, m(e, i) {
                g(e, n, i), d(n, s), d(s, o), S(o, t[0]), d(s, r), d(s, a), d(n, l), d(n, h);
                for (let e = 0; e < $.length; e += 1) $[e] && $[e].m(h, null);
                t[13](h), c || (u = [b(o, "input", t[10]), b(o, "keydown", t[11]), b(a, "click", t[5])], c = !0)
            }, p(e, [t]) {
                if (1 & t && o.value !== e[0] && S(o, e[0]), 8 & t && A(o, "bg-yellow-50", e[3]), 8 & t && A(o, "border-yellow-600", e[3]), 8 & t && A(o, "border-dashed", e[3]), 18 & t) {
                    let n;
                    for (v = e[1], n = 0; n < v.length; n += 1) {
                        const i = bt(e, v, n);
                        $[n] ? $[n].p(i, t) : ($[n] = Ct(i), $[n].c(), $[n].m(h, null))
                    }
                    for (; n < $.length; n += 1) $[n].d(1);
                    $.length = v.length
                }
            }, i: e, o: e, d(e) {
                e && f(n), m($, e), t[13](null), c = !1, i(u)
            }
        }
    }

    function kt(e, t, n) {
        let i, s, o;
        const r = E();
        let {preferences: a} = t;

        function l(...e) {
            return JSON.stringify({query: c, preferences: i || []})
        }

        let h, c = "", u = l();

        function d() {
            r("search", c), n(8, u = s)
        }

        return e.$$set = e => {
            "preferences" in e && n(6, a = e.preferences)
        }, e.$$.update = () => {
            64 & e.$$.dirty && n(1, i = Object.values(a).filter((e => 0 !== e.weight))), 3 & e.$$.dirty && n(9, s = l()), 768 & e.$$.dirty && n(3, o = s !== u)
        }, [c, i, h, o, r, d, a, async function () {
            null != h && (await D(), n(2, h.scrollTop = h.scrollHeight, h))
        }, u, s, function () {
            c = this.value, n(0, c)
        }, e => {
            "Enter" === e.key && d()
        }, e => r("setPreference", {...e, weight: 0}), function (e) {
            F[e ? "unshift" : "push"]((() => {
                h = e, n(2, h)
            }))
        }]
    }

    class At extends ie {
        constructor(e) {
            super(), ne(this, e, kt, St, o, {preferences: 6, scrollToBottomOfPreferences: 7})
        }

        get scrollToBottomOfPreferences() {
            return this.$$.ctx[7]
        }
    }

    function Lt(t) {
        let n, i, s, o, r;
        return {
            c() {
                n = p("img"), y(n, "draggable", "false"), y(n, "class", "absolute left-0 top-0 right-0 bottom-0 w-full h-full object-contain select-none pointer-events-none"), l(n.src, i = t[3](t[1][t[2]])) || y(n, "src", i), y(n, "alt", s = "Page " + (t[0] + 1))
            }, m(e, i) {
                g(e, n, i), o || (r = b(n, "load", t[4]), o = !0)
            }, p(e, [t]) {
                6 & t && !l(n.src, i = e[3](e[1][e[2]])) && y(n, "src", i), 1 & t && s !== (s = "Page " + (e[0] + 1)) && y(n, "alt", s)
            }, i: e, o: e, d(e) {
                e && f(n), o = !1, r()
            }
        }
    }

    function Rt(e, t, n) {
        let {file: i} = t, {pageNumber: s} = t, {scales: o} = t, r = 0;
        return e.$$set = e => {
            "file" in e && n(5, i = e.file), "pageNumber" in e && n(0, s = e.pageNumber), "scales" in e && n(1, o = e.scales)
        }, [s, o, r, function (e) {
            return `/api/pdfpage?filename=${encodeURIComponent(i.filename)}&page=${s}&scale=${e}`
        }, function () {
            r !== o.length - 1 && n(2, r++, r)
        }, i]
    }

    class Mt extends ie {
        constructor(e) {
            super(), ne(this, e, Rt, Lt, o, {file: 5, pageNumber: 0, scales: 1})
        }
    }

    var Et = {};
    !function (e, t) {
        e.exports = function () {
            function e(e, i, s, o, r) {
                !function e(n, i, s, o, r) {
                    for (; o > s;) {
                        if (o - s > 600) {
                            var a = o - s + 1, l = i - s + 1, h = Math.log(a), c = .5 * Math.exp(2 * h / 3),
                                u = .5 * Math.sqrt(h * c * (a - c) / a) * (l - a / 2 < 0 ? -1 : 1);
                            e(n, i, Math.max(s, Math.floor(i - l * c / a + u)), Math.min(o, Math.floor(i + (a - l) * c / a + u)), r)
                        }
                        var d = n[i], g = s, f = o;
                        for (t(n, s, i), r(n[o], d) > 0 && t(n, s, o); g < f;) {
                            for (t(n, g, f), g++, f--; r(n[g], d) < 0;) g++;
                            for (; r(n[f], d) > 0;) f--
                        }
                        0 === r(n[s], d) ? t(n, s, f) : t(n, ++f, o), f <= i && (s = f + 1), i <= f && (o = f - 1)
                    }
                }(e, i, s || 0, o || e.length - 1, r || n)
            }

            function t(e, t, n) {
                var i = e[t];
                e[t] = e[n], e[n] = i
            }

            function n(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            }

            var i = function (e) {
                void 0 === e && (e = 9), this._maxEntries = Math.max(4, e), this._minEntries = Math.max(2, Math.ceil(.4 * this._maxEntries)), this.clear()
            };

            function s(e, t, n) {
                if (!n) return t.indexOf(e);
                for (var i = 0; i < t.length; i++) if (n(e, t[i])) return i;
                return -1
            }

            function o(e, t) {
                r(e, 0, e.children.length, t, e)
            }

            function r(e, t, n, i, s) {
                s || (s = f(null)), s.minX = 1 / 0, s.minY = 1 / 0, s.maxX = -1 / 0, s.maxY = -1 / 0;
                for (var o = t; o < n; o++) {
                    var r = e.children[o];
                    a(s, e.leaf ? i(r) : r)
                }
                return s
            }

            function a(e, t) {
                return e.minX = Math.min(e.minX, t.minX), e.minY = Math.min(e.minY, t.minY), e.maxX = Math.max(e.maxX, t.maxX), e.maxY = Math.max(e.maxY, t.maxY), e
            }

            function l(e, t) {
                return e.minX - t.minX
            }

            function h(e, t) {
                return e.minY - t.minY
            }

            function c(e) {
                return (e.maxX - e.minX) * (e.maxY - e.minY)
            }

            function u(e) {
                return e.maxX - e.minX + (e.maxY - e.minY)
            }

            function d(e, t) {
                return e.minX <= t.minX && e.minY <= t.minY && t.maxX <= e.maxX && t.maxY <= e.maxY
            }

            function g(e, t) {
                return t.minX <= e.maxX && t.minY <= e.maxY && t.maxX >= e.minX && t.maxY >= e.minY
            }

            function f(e) {
                return {children: e, height: 1, leaf: !0, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0}
            }

            function m(t, n, i, s, o) {
                for (var r = [n, i]; r.length;) if (!((i = r.pop()) - (n = r.pop()) <= s)) {
                    var a = n + Math.ceil((i - n) / s / 2) * s;
                    e(t, a, n, i, o), r.push(n, a, a, i)
                }
            }

            return i.prototype.all = function () {
                return this._all(this.data, [])
            }, i.prototype.search = function (e) {
                var t = this.data, n = [];
                if (!g(e, t)) return n;
                for (var i = this.toBBox, s = []; t;) {
                    for (var o = 0; o < t.children.length; o++) {
                        var r = t.children[o], a = t.leaf ? i(r) : r;
                        g(e, a) && (t.leaf ? n.push(r) : d(e, a) ? this._all(r, n) : s.push(r))
                    }
                    t = s.pop()
                }
                return n
            }, i.prototype.collides = function (e) {
                var t = this.data;
                if (!g(e, t)) return !1;
                for (var n = []; t;) {
                    for (var i = 0; i < t.children.length; i++) {
                        var s = t.children[i], o = t.leaf ? this.toBBox(s) : s;
                        if (g(e, o)) {
                            if (t.leaf || d(e, o)) return !0;
                            n.push(s)
                        }
                    }
                    t = n.pop()
                }
                return !1
            }, i.prototype.load = function (e) {
                if (!e || !e.length) return this;
                if (e.length < this._minEntries) {
                    for (var t = 0; t < e.length; t++) this.insert(e[t]);
                    return this
                }
                var n = this._build(e.slice(), 0, e.length - 1, 0);
                if (this.data.children.length) if (this.data.height === n.height) this._splitRoot(this.data, n); else {
                    if (this.data.height < n.height) {
                        var i = this.data;
                        this.data = n, n = i
                    }
                    this._insert(n, this.data.height - n.height - 1, !0)
                } else this.data = n;
                return this
            }, i.prototype.insert = function (e) {
                return e && this._insert(e, this.data.height - 1), this
            }, i.prototype.clear = function () {
                return this.data = f([]), this
            }, i.prototype.remove = function (e, t) {
                if (!e) return this;
                for (var n, i, o, r = this.data, a = this.toBBox(e), l = [], h = []; r || l.length;) {
                    if (r || (r = l.pop(), i = l[l.length - 1], n = h.pop(), o = !0), r.leaf) {
                        var c = s(e, r.children, t);
                        if (-1 !== c) return r.children.splice(c, 1), l.push(r), this._condense(l), this
                    }
                    o || r.leaf || !d(r, a) ? i ? (n++, r = i.children[n], o = !1) : r = null : (l.push(r), h.push(n), n = 0, i = r, r = r.children[0])
                }
                return this
            }, i.prototype.toBBox = function (e) {
                return e
            }, i.prototype.compareMinX = function (e, t) {
                return e.minX - t.minX
            }, i.prototype.compareMinY = function (e, t) {
                return e.minY - t.minY
            }, i.prototype.toJSON = function () {
                return this.data
            }, i.prototype.fromJSON = function (e) {
                return this.data = e, this
            }, i.prototype._all = function (e, t) {
                for (var n = []; e;) e.leaf ? t.push.apply(t, e.children) : n.push.apply(n, e.children), e = n.pop();
                return t
            }, i.prototype._build = function (e, t, n, i) {
                var s, r = n - t + 1, a = this._maxEntries;
                if (r <= a) return o(s = f(e.slice(t, n + 1)), this.toBBox), s;
                i || (i = Math.ceil(Math.log(r) / Math.log(a)), a = Math.ceil(r / Math.pow(a, i - 1))), (s = f([])).leaf = !1, s.height = i;
                var l = Math.ceil(r / a), h = l * Math.ceil(Math.sqrt(a));
                m(e, t, n, h, this.compareMinX);
                for (var c = t; c <= n; c += h) {
                    var u = Math.min(c + h - 1, n);
                    m(e, c, u, l, this.compareMinY);
                    for (var d = c; d <= u; d += l) {
                        var g = Math.min(d + l - 1, u);
                        s.children.push(this._build(e, d, g, i - 1))
                    }
                }
                return o(s, this.toBBox), s
            }, i.prototype._chooseSubtree = function (e, t, n, i) {
                for (; i.push(t), !t.leaf && i.length - 1 !== n;) {
                    for (var s = 1 / 0, o = 1 / 0, r = void 0, a = 0; a < t.children.length; a++) {
                        var l = t.children[a], h = c(l),
                            u = (d = e, g = l, (Math.max(g.maxX, d.maxX) - Math.min(g.minX, d.minX)) * (Math.max(g.maxY, d.maxY) - Math.min(g.minY, d.minY)) - h);
                        u < o ? (o = u, s = h < s ? h : s, r = l) : u === o && h < s && (s = h, r = l)
                    }
                    t = r || t.children[0]
                }
                var d, g;
                return t
            }, i.prototype._insert = function (e, t, n) {
                var i = n ? e : this.toBBox(e), s = [], o = this._chooseSubtree(i, this.data, t, s);
                for (o.children.push(e), a(o, i); t >= 0 && s[t].children.length > this._maxEntries;) this._split(s, t), t--;
                this._adjustParentBBoxes(i, s, t)
            }, i.prototype._split = function (e, t) {
                var n = e[t], i = n.children.length, s = this._minEntries;
                this._chooseSplitAxis(n, s, i);
                var r = this._chooseSplitIndex(n, s, i), a = f(n.children.splice(r, n.children.length - r));
                a.height = n.height, a.leaf = n.leaf, o(n, this.toBBox), o(a, this.toBBox), t ? e[t - 1].children.push(a) : this._splitRoot(n, a)
            }, i.prototype._splitRoot = function (e, t) {
                this.data = f([e, t]), this.data.height = e.height + 1, this.data.leaf = !1, o(this.data, this.toBBox)
            }, i.prototype._chooseSplitIndex = function (e, t, n) {
                for (var i, s, o, a, l, h, u, d = 1 / 0, g = 1 / 0, f = t; f <= n - t; f++) {
                    var m = r(e, 0, f, this.toBBox), p = r(e, f, n, this.toBBox),
                        v = (s = m, o = p, a = void 0, l = void 0, h = void 0, u = void 0, a = Math.max(s.minX, o.minX), l = Math.max(s.minY, o.minY), h = Math.min(s.maxX, o.maxX), u = Math.min(s.maxY, o.maxY), Math.max(0, h - a) * Math.max(0, u - l)),
                        w = c(m) + c(p);
                    v < d ? (d = v, i = f, g = w < g ? w : g) : v === d && w < g && (g = w, i = f)
                }
                return i || n - t
            }, i.prototype._chooseSplitAxis = function (e, t, n) {
                var i = e.leaf ? this.compareMinX : l, s = e.leaf ? this.compareMinY : h;
                this._allDistMargin(e, t, n, i) < this._allDistMargin(e, t, n, s) && e.children.sort(i)
            }, i.prototype._allDistMargin = function (e, t, n, i) {
                e.children.sort(i);
                for (var s = this.toBBox, o = r(e, 0, t, s), l = r(e, n - t, n, s), h = u(o) + u(l), c = t; c < n - t; c++) {
                    var d = e.children[c];
                    a(o, e.leaf ? s(d) : d), h += u(o)
                }
                for (var g = n - t - 1; g >= t; g--) {
                    var f = e.children[g];
                    a(l, e.leaf ? s(f) : f), h += u(l)
                }
                return h
            }, i.prototype._adjustParentBBoxes = function (e, t, n) {
                for (var i = n; i >= 0; i--) a(t[i], e)
            }, i.prototype._condense = function (e) {
                for (var t = e.length - 1, n = void 0; t >= 0; t--) 0 === e[t].children.length ? t > 0 ? (n = e[t - 1].children).splice(n.indexOf(e[t]), 1) : this.clear() : o(e[t], this.toBBox)
            }, i
        }()
    }({
        get exports() {
            return Et
        }, set exports(e) {
            Et = e
        }
    });
    var Tt = Et;

    function _t(e) {
        switch (e) {
            case"left":
                return e => It(e, "x0");
            case"right":
                return e => It(e, "x1");
            case"up":
                return e => It(e, "y0");
            case"down":
                return e => It(e, "y1")
        }
    }

    function Ft(e, t, n, i, s, o) {
        const r = function (e) {
            switch (e) {
                case"left":
                    return "right";
                case"right":
                    return "left";
                case"up":
                    return "down";
                case"down":
                    return "up"
            }
        }(o), a = _t(o), l = _t(r);
        let h = "right" === r || "down" === r ? [0, null] : "left" === r ? [e, null] : [t, null];
        const c = 0 === h[0] ? "max" : "min";
        for (const e of s) e.i !== i && ("max" === c && l(e.char) > a(n) && a(e.char) < l(n) || "min" === c && l(e.char) < a(n) && a(e.char) > l(n) || ("max" === c && l(e.char) > h[0] && (h = [l(e.char), e.char]), "min" === c && l(e.char) < h[0] && (h = [l(e.char), e.char])));
        return [(u = "max" === c ? a(n) - h[0] : h[0] - a(n), Math.max(0, u)), h[1]];
        var u
    }

    function It(e, t) {
        return "x0" === t ? e[1].x0 - (e[1].lpad || 0) : "x1" === t ? e[1].x1 + (e[1].rpad || 0) : "y0" === t ? e[1].y0 - (e[1].tpad || 0) : "y1" === t ? e[1].y1 + (e[1].bpad || 0) : void 0
    }

    function Ot(e, t) {
        const n = Math.min(It(e, "y0"), It(t, "y0")), i = Math.max(It(e, "y1"), It(t, "y1"));
        e[1].y0 = n, e[1].y1 = i, t[1].y0 = n, t[1].y1 = i
    }

    function Wt(e, t, n, i, s, o) {
        if ("left" === o) {
            const r = It(i, "x0"), a = It(i, "y0"), l = It(i, "y1"), h = 0, [c, u] = Ft(e, t, i, s, n.search({
                minX: h,
                minY: a,
                maxX: r,
                maxY: l
            }), o);
            i[1].lpad = c, u && Ot(i, u)
        } else if ("right" === o) {
            const r = It(i, "x1"), a = It(i, "y0"), l = It(i, "y1"), h = e, [c, u] = Ft(e, t, i, s, n.search({
                minX: r,
                minY: a,
                maxX: h,
                maxY: l
            }), o);
            i[1].rpad = c, u && Ot(i, u)
        } else if ("up" === o) {
            const r = It(i, "x0"), a = It(i, "x1"), l = It(i, "y0"), h = 0;
            i[1].tpad = Ft(e, t, i, s, n.search({minX: r, minY: h, maxX: a, maxY: l}), o)[0]
        } else if ("down" === o) {
            const r = It(i, "x0"), a = It(i, "x1"), l = It(i, "y1"), h = t;
            i[1].bpad = Ft(e, t, i, s, n.search({minX: r, minY: l, maxX: a, maxY: h}), o)[0]
        }
    }

    function Bt(e, t, n, i, s) {
        for (let o = 0; o < n.length; o++) Wt(e, t, i, n[o], o, s)
    }

    function Ht(e, t, n) {
        const i = function (e) {
            const t = new Tt;
            for (let n = 0; n < e.length; n++) {
                const i = e[n], s = i[1].x0, o = i[1].y0, r = i[1].x1, a = i[1].y1;
                t.insert({minX: s, minY: o, maxX: r, maxY: a, char: i, i: n})
            }
            return t
        }(n);
        return Bt(e, t, n, i, "right"), Bt(e, t, n, i, "left"), Bt(e, t, n, i, "up"), Bt(e, t, n, i, "down"), n
    }

    function Dt(e, t, n) {
        const i = e.slice();
        return i[19] = t[n], i[21] = n, i
    }

    function Pt(e) {
        let t, n, i, s, o = e[19][0] + "";
        return {
            c() {
                t = p("div"), n = p("span"), i = v(o), s = w(), y(n, "class", "inline-block whitespace-pre origin-top-left select-all svelte-lziqhb"), k(n, "font-family", "monospace"), k(n, "font-size", zt + "px"), k(n, "transform", "scale(" + (e[19][1].x1 - e[19][1].x0) / e[4] / e[19][0].length * e[1] + ", " + (e[19][1].y1 - e[19][1].y0) / e[5] * e[1] + ")"), A(n, "page-highlight", e[2].includes(e[21])), y(t, "class", "absolute content-box text-transparent"), k(t, "left", (e[19][1].x0 - (e[19][1].lpad || 0)) * e[1] + "px"), k(t, "top", (e[0].page_height - e[19][1].y1 - (e[19][1].bpad || 0)) * e[1] + "px"), k(t, "width", (e[19][1].x1 - e[19][1].x0 + (e[19][1].lpad || 0) + (e[19][1].rpad || 0)) * e[1] + "px"), k(t, "height", (e[19][1].y1 - e[19][1].y0 + (e[19][1].bpad || 0) + (e[19][1].tpad || 0)) * e[1] + "px"), k(t, "padding-left", (e[19][1].lpad || 0) * e[1] + "px"), k(t, "padding-right", (e[19][1].rpad || 0) * e[1] + "px"), k(t, "padding-bottom", (e[19][1].tpad || 0) * e[1] + "px"), k(t, "padding-top", (e[19][1].bpad || 0) * e[1] + "px")
            }, m(e, o) {
                g(e, t, o), d(t, n), d(n, i), d(t, s)
            }, p(e, s) {
                64 & s && o !== (o = e[19][0] + "") && C(i, o), 114 & s && k(n, "transform", "scale(" + (e[19][1].x1 - e[19][1].x0) / e[4] / e[19][0].length * e[1] + ", " + (e[19][1].y1 - e[19][1].y0) / e[5] * e[1] + ")"), 4 & s && A(n, "page-highlight", e[2].includes(e[21])), 66 & s && k(t, "left", (e[19][1].x0 - (e[19][1].lpad || 0)) * e[1] + "px"), 67 & s && k(t, "top", (e[0].page_height - e[19][1].y1 - (e[19][1].bpad || 0)) * e[1] + "px"), 66 & s && k(t, "width", (e[19][1].x1 - e[19][1].x0 + (e[19][1].lpad || 0) + (e[19][1].rpad || 0)) * e[1] + "px"), 66 & s && k(t, "height", (e[19][1].y1 - e[19][1].y0 + (e[19][1].bpad || 0) + (e[19][1].tpad || 0)) * e[1] + "px"), 66 & s && k(t, "padding-left", (e[19][1].lpad || 0) * e[1] + "px"), 66 & s && k(t, "padding-right", (e[19][1].rpad || 0) * e[1] + "px"), 66 & s && k(t, "padding-bottom", (e[19][1].tpad || 0) * e[1] + "px"), 66 & s && k(t, "padding-top", (e[19][1].bpad || 0) * e[1] + "px")
            }, d(e) {
                e && f(t)
            }
        }
    }

    function Nt(t) {
        let n, i = t[6], s = [];
        for (let e = 0; e < i.length; e += 1) s[e] = Pt(Dt(t, i, e));
        return {
            c() {
                n = p("div");
                for (let e = 0; e < s.length; e += 1) s[e].c();
                y(n, "class", "absolute left-0 top-0 right-0 bottom-0")
            }, m(e, i) {
                g(e, n, i);
                for (let e = 0; e < s.length; e += 1) s[e] && s[e].m(n, null);
                t[13](n)
            }, p(e, [t]) {
                if (119 & t) {
                    let o;
                    for (i = e[6], o = 0; o < i.length; o += 1) {
                        const r = Dt(e, i, o);
                        s[o] ? s[o].p(r, t) : (s[o] = Pt(r), s[o].c(), s[o].m(n, null))
                    }
                    for (; o < s.length; o += 1) s[o].d(1);
                    s.length = i.length
                }
            }, i: e, o: e, d(e) {
                e && f(n), m(s, e), t[13](null)
            }
        }
    }

    const zt = 16;

    function Vt(e, t, n) {
        let i, s,
            o, {file: r} = t, {pageNumber: a} = t, {position: l} = t, {selectedOffset: h} = t, {zoom: c} = t, {scrollHighlights: u} = t;
        let d, g = [];
        let f = 10, m = 24;
        return M((async () => {
            const e = document.createElement("span");
            e.textContent = "m", e.style.position = "absolute", e.style.visibility = "hidden", e.style.whiteSpace = "pre", e.style.fontFamily = "monospace", e.style.fontSize = `${zt}px`, d.appendChild(e);
            const t = e.getBoundingClientRect();
            n(4, f = t.width), n(5, m = t.height), d.removeChild(e);
            const i = await fetch(`/api/pdfchars?filename=${encodeURIComponent(r.filename)}&page=${a}`),
                s = await i.json();
            n(11, g = s.map((e => [e[0], {x0: e[1][0], y0: e[1][1], x1: e[1][2], y1: e[1][3]}])))
        })), e.$$set = e => {
            "file" in e && n(8, r = e.file), "pageNumber" in e && n(9, a = e.pageNumber), "position" in e && n(0, l = e.position), "selectedOffset" in e && n(10, h = e.selectedOffset), "zoom" in e && n(1, c = e.zoom), "scrollHighlights" in e && n(7, u = e.scrollHighlights)
        }, e.$$.update = () => {
            2048 & e.$$.dirty && n(12, i = function (e) {
                const t = [], n = e => /\s/.test(e[0]), i = [];
                let s = [], o = null, r = null;
                const a = (e, n, s) => {
                    t.push(e), i.push([n, s])
                }, l = (e, t) => {
                    null == o && (o = t), r = t + 1, s.push(e)
                }, h = e => {
                    let t;
                    for (const n of e) (null == t || n < t) && (t = n);
                    return t
                }, c = e => {
                    let t;
                    for (const n of e) (null == t || n > t) && (t = n);
                    return t
                }, u = () => {
                    if (0 == s.length || null == o || null == r) return;
                    const e = s.map((e => e[0])).join(""), t = h(s.map((e => e[1].x0))), n = c(s.map((e => e[1].x1))),
                        i = h(s.map((e => e[1].y0))), l = c(s.map((e => e[1].y1)));
                    a([e, {x0: t, x1: n, y0: i, y1: l}], o, r), s = [], o = null, r = null
                };
                for (let t = 0; t < e.length; t++) {
                    const i = e[t];
                    n(i) ? (u(), a(i, t, t + 1)) : l(i, t)
                }
                return u(), [t, i]
            }(function (e) {
                return e.map((e => [e[0], Object.assign({}, e[1])]))
            }(g))), 4097 & e.$$.dirty && n(6, s = Ht(l.page_width, l.page_height, i[0])), 5121 & e.$$.dirty && n(2, o = null == h ? [] : function (e, t, n) {
                return e[1].map(((e, t) => [t, e])).filter((e => e[1][0] >= t && e[1][1] <= n)).map((e => e[0]))
            }(i, h[0] - l.char_index, h[1] - l.char_index)), 132 & e.$$.dirty && u && async function (...e) {
                await D();
                const t = document.querySelectorAll(".page-highlight");
                0 != t.length && (t[0].scrollIntoView({block: "center"}), n(7, u = !1))
            }()
        }, [l, c, o, d, f, m, s, u, r, a, h, g, i, function (e) {
            F[e ? "unshift" : "push"]((() => {
                d = e, n(3, d)
            }))
        }]
    }

    class Ut extends ie {
        constructor(e) {
            super(), ne(this, e, Vt, Nt, o, {
                file: 8,
                pageNumber: 9,
                position: 0,
                selectedOffset: 10,
                zoom: 1,
                scrollHighlights: 7
            })
        }
    }

    function Gt(e) {
        let t, n, i, s, o;

        function r(t) {
            e[10](t)
        }

        t = new Mt({props: {file: e[1], pageNumber: e[3], scales: [.25, 2]}});
        let a = {file: e[1], position: e[2], pageNumber: e[3], selectedOffset: e[4], zoom: e[5]};
        return void 0 !== e[0] && (a.scrollHighlights = e[0]), i = new Ut({props: a}), F.push((() => J(i, "scrollHighlights", r))), {
            c() {
                Z(t.$$.fragment), n = w(), Z(i.$$.fragment)
            }, m(e, s) {
                ee(t, e, s), g(e, n, s), ee(i, e, s), o = !0
            }, p(e, n) {
                const o = {};
                2 & n && (o.file = e[1]), 8 & n && (o.pageNumber = e[3]), t.$set(o);
                const r = {};
                2 & n && (r.file = e[1]), 4 & n && (r.position = e[2]), 8 & n && (r.pageNumber = e[3]), 16 & n && (r.selectedOffset = e[4]), 32 & n && (r.zoom = e[5]), !s && 1 & n && (s = !0, r.scrollHighlights = e[0], N((() => s = !1))), i.$set(r)
            }, i(e) {
                o || (q(t.$$.fragment, e), q(i.$$.fragment, e), o = !0)
            }, o(e) {
                Q(t.$$.fragment, e), Q(i.$$.fragment, e), o = !1
            }, d(e) {
                te(t, e), e && f(n), te(i, e)
            }
        }
    }

    function Kt(e) {
        let t, n, s, o, r = e[6] && e[7] && Gt(e);
        return {
            c() {
                t = p("div"), r && r.c(), y(t, "class", "bg-white bg-contain relative"), k(t, "width", e[2].page_width * e[5] + "px"), k(t, "height", e[2].page_height * e[5] + "px"), k(t, "margin", jt * e[5] + "px auto " + jt * e[5] + "px auto")
            }, m(i, a) {
                g(i, t, a), r && r.m(t, null), n = !0, s || (o = [u(be.call(null, t, e[9])), b(t, "inview_change", e[11])], s = !0)
            }, p(e, [i]) {
                e[6] && e[7] ? r ? (r.p(e, i), 192 & i && q(r, 1)) : (r = Gt(e), r.c(), q(r, 1), r.m(t, null)) : r && (Y(), Q(r, 1, 1, (() => {
                    r = null
                })), X()), (!n || 36 & i) && k(t, "width", e[2].page_width * e[5] + "px"), (!n || 36 & i) && k(t, "height", e[2].page_height * e[5] + "px"), (!n || 32 & i) && k(t, "margin", jt * e[5] + "px auto " + jt * e[5] + "px auto")
            }, i(e) {
                n || (q(r), n = !0)
            }, o(e) {
                Q(r), n = !1
            }, d(e) {
                e && f(t), r && r.d(), s = !1, i(o)
            }
        }
    }

    const jt = 16;

    function Yt(e, t, n) {
        const i = E();
        let {file: s} = t, {position: o} = t, {pageNumber: r} = t, {selectedOffset: a} = t, {zoom: l} = t, {scrollHighlights: h} = t,
            c = !1, u = !1;
        return e.$$set = e => {
            "file" in e && n(1, s = e.file), "position" in e && n(2, o = e.position), "pageNumber" in e && n(3, r = e.pageNumber), "selectedOffset" in e && n(4, a = e.selectedOffset), "zoom" in e && n(5, l = e.zoom), "scrollHighlights" in e && n(0, h = e.scrollHighlights)
        }, e.$$.update = () => {
            64 & e.$$.dirty && (c ? setTimeout((() => {
                n(7, u = !0)
            }), 100) : n(7, u = !1))
        }, [h, s, o, r, a, l, c, u, i, {rootMargin: "50px"}, function (e) {
            h = e, n(0, h)
        }, e => {
            n(6, c = e.detail.inView), i("inview", {isInView: c, pageNumber: r})
        }]
    }

    class Xt extends ie {
        constructor(e) {
            super(), ne(this, e, Yt, Kt, o, {
                file: 1,
                position: 2,
                pageNumber: 3,
                selectedOffset: 4,
                zoom: 5,
                scrollHighlights: 0
            })
        }
    }

    function qt(e, t, n) {
        const i = e.slice();
        return i[23] = t[n], i[25] = n, i
    }

    function Qt(e) {
        let t, n, i;

        function s(t) {
            e[16](t)
        }

        let o = {file: e[1], pageNumber: e[25], position: e[23], selectedOffset: e[5], zoom: e[4]};
        return void 0 !== e[6] && (o.scrollHighlights = e[6]), t = new Xt({props: o}), F.push((() => J(t, "scrollHighlights", s))), t.$on("inview", e[17]), {
            c() {
                Z(t.$$.fragment)
            }, m(e, n) {
                ee(t, e, n), i = !0
            }, p(e, i) {
                const s = {};
                2 & i && (s.file = e[1]), 1 & i && (s.position = e[23]), 32 & i && (s.selectedOffset = e[5]), 16 & i && (s.zoom = e[4]), !n && 64 & i && (n = !0, s.scrollHighlights = e[6], N((() => n = !1))), t.$set(s)
            }, i(e) {
                i || (q(t.$$.fragment, e), i = !0)
            }, o(e) {
                Q(t.$$.fragment, e), i = !1
            }, d(e) {
                te(t, e)
            }
        }
    }

    function Jt(e) {
        let t, n, s, o, r, a, l, h, c, u, m, $, A, L;
        return {
            c() {
                t = p("div"), n = p("div"), s = p("div"), o = p("button"), o.textContent = "+", r = p("br"), a = w(), l = p("button"), l.textContent = "-", h = w(), c = p("div"), u = p("input"), m = v("/"), $ = v(e[7]), y(o, "class", "w-8 h-8 align-middle"), y(l, "class", "w-8 h-8 align-middle"), y(s, "class", "bg-slate-100 border-2 border-black text-center font-mono font-bold text-2xl inline-block"), y(n, "class", "text-left"), y(u, "class", "border border-gray-300 mr-1 pl-1"), k(u, "width", "7ch"), y(u, "type", "number"), y(u, "size", "4"), y(u, "min", "1"), y(u, "max", e[7]), y(c, "class", "bg-slate-100 border-2 border-black font-mono font-bold text-sm mt-2 p-2"), y(t, "class", "absolute left-2 bottom-2")
            }, m(i, f) {
                g(i, t, f), d(t, n), d(n, s), d(s, o), d(s, r), d(s, a), d(s, l), d(t, h), d(t, c), d(c, u), S(u, e[3]), d(c, m), d(c, $), A || (L = [b(o, "click", e[19]), b(l, "click", e[20]), b(u, "input", e[21]), b(u, "input", e[11])], A = !0)
            }, p(e, t) {
                128 & t && y(u, "max", e[7]), 8 & t && x(u.value) !== e[3] && S(u, e[3]), 128 & t && C($, e[7])
            }, d(e) {
                e && f(t), A = !1, i(L)
            }
        }
    }

    function Zt(e) {
        let t, n, i, s, o, r, a, l = e[0], h = [];
        for (let t = 0; t < l.length; t += 1) h[t] = Qt(qt(e, l, t));
        const c = e => Q(h[e], 1, 1, (() => {
            h[e] = null
        }));
        let u = e[7] > 0 && Jt(e);
        return {
            c() {
                t = p("div"), n = p("div"), i = p("div");
                for (let e = 0; e < h.length; e += 1) h[e].c();
                s = w(), u && u.c(), y(i, "class", "absolute left-0 top-0 right-0 bottom-0 bg-gray-400 w-full h-full overflow-auto"), y(n, "class", "absolute left-0 top-0 right-0 bottom-0"), y(t, "class", "relative flex-1")
            }, m(l, c) {
                g(l, t, c), d(t, n), d(n, i);
                for (let e = 0; e < h.length; e += 1) h[e] && h[e].m(i, null);
                e[18](i), d(n, s), u && u.m(n, null), o = !0, r || (a = b(i, "scroll", e[10]), r = !0)
            }, p(e, [t]) {
                if (627 & t) {
                    let n;
                    for (l = e[0], n = 0; n < l.length; n += 1) {
                        const s = qt(e, l, n);
                        h[n] ? (h[n].p(s, t), q(h[n], 1)) : (h[n] = Qt(s), h[n].c(), q(h[n], 1), h[n].m(i, null))
                    }
                    for (Y(), n = l.length; n < h.length; n += 1) c(n);
                    X()
                }
                e[7] > 0 ? u ? u.p(e, t) : (u = Jt(e), u.c(), u.m(n, null)) : u && (u.d(1), u = null)
            }, i(e) {
                if (!o) {
                    for (let e = 0; e < l.length; e += 1) q(h[e]);
                    o = !0
                }
            }, o(e) {
                h = h.filter(Boolean);
                for (let e = 0; e < h.length; e += 1) Q(h[e]);
                o = !1
            }, d(n) {
                n && f(t), m(h, n), e[18](null), u && u.d(), r = !1, a()
            }
        }
    }

    function en(e, t, n) {
        let i, s, o, r, {positions: a} = t, {file: l} = t, h = 1, c = 1, u = null, d = {};

        async function g(e) {
            if (e > 4 || e < .4) return;
            const t = c;
            let i = r.scrollTop;
            n(4, c = e), await D(), n(2, r.scrollTop = i * (e / t), r)
        }

        let f = !1;

        function m({isInView: e, pageNumber: t}) {
            n(13, d[t] = e, d), n(13, d = Object.assign({}, d))
        }

        function p() {
            const e = window.innerHeight;
            for (const [t, i] of o) {
                if (null == i) continue;
                if (i.getBoundingClientRect().bottom >= e / 2) return void n(3, h = t + 1)
            }
            o.length > 0 && n(3, h = o[0][0] + 1)
        }

        return e.$$set = e => {
            "positions" in e && n(0, a = e.positions), "file" in e && n(1, l = e.file)
        }, e.$$.update = () => {
            1 & e.$$.dirty && n(7, i = a.length), 8192 & e.$$.dirty && n(15, s = Object.entries(d).filter((([e, t]) => t)).sort((([e, t], [n, i]) => parseInt(e) - parseInt(n)))), 32772 & e.$$.dirty && n(14, o = s.map((([e, t]) => [parseInt(e), r.children[parseInt(e)]]))), 16384 & e.$$.dirty && o.length > 0 && p()
        }, [a, l, r, h, c, u, f, i, g, m, p, function () {
            const e = r.children[h - 1];
            null != e && e.scrollIntoView()
        }, function (e, t) {
            n(5, u = [e, t]);
            const [i, s] = function (e) {
                let t = 0;
                for (; t < a.length; t++) if (e < a[t].char_index) return [t - 1, e - a[t - 1].char_index];
                return [t - 1, e - a[t - 1].char_index]
            }(e);
            r.children[i].scrollIntoView(), n(6, f = !0)
        }, d, o, s, function (e) {
            f = e, n(6, f)
        }, e => m(e.detail), function (e) {
            F[e ? "unshift" : "push"]((() => {
                r = e, n(2, r)
            }))
        }, () => g(c + .1), () => g(c - .1), function () {
            h = x(this.value), n(3, h)
        }]
    }

    class tn extends ie {
        constructor(e) {
            super(), ne(this, e, en, Zt, o, {positions: 0, file: 1, navigate: 12})
        }

        get navigate() {
            return this.$$.ctx[12]
        }
    }

    function nn(e, t, n) {
        const i = e.slice();
        return i[4] = t[n], i[6] = n, i
    }

    function sn(e) {
        let t, n, i, s, o, r = e[4].basename + "";

        function a() {
            return e[3](e[6])
        }

        return {
            c() {
                t = p("button"), n = v(r), i = w(), t.disabled = e[2], y(t, "class", "text-xs rounded py-1 px-2 mr-2 border border-transparent svelte-vh72j9"), A(t, "active-tab", e[6] === e[0])
            }, m(e, r) {
                g(e, t, r), d(t, n), d(t, i), s || (o = b(t, "click", a), s = !0)
            }, p(i, s) {
                e = i, 2 & s && r !== (r = e[4].basename + "") && C(n, r), 4 & s && (t.disabled = e[2]), 1 & s && A(t, "active-tab", e[6] === e[0])
            }, d(e) {
                e && f(t), s = !1, o()
            }
        }
    }

    function on(t) {
        let n, i, s, o = t[1], r = [];
        for (let e = 0; e < o.length; e += 1) r[e] = sn(nn(t, o, e));
        return {
            c() {
                n = p("div"), i = p("div"), s = p("div");
                for (let e = 0; e < r.length; e += 1) r[e].c();
                y(s, "class", "inline-flex flex-nowrap flex-row items-center h-full pl-2"), y(i, "class", "absolute left-0 top-0 right-0 bottom-0 overflow-x-auto thin-scroll svelte-vh72j9"), y(n, "class", "flex flex-row border-b-4 border-black relative h-10")
            }, m(e, t) {
                g(e, n, t), d(n, i), d(i, s);
                for (let e = 0; e < r.length; e += 1) r[e] && r[e].m(s, null)
            }, p(e, [t]) {
                if (7 & t) {
                    let n;
                    for (o = e[1], n = 0; n < o.length; n += 1) {
                        const i = nn(e, o, n);
                        r[n] ? r[n].p(i, t) : (r[n] = sn(i), r[n].c(), r[n].m(s, null))
                    }
                    for (; n < r.length; n += 1) r[n].d(1);
                    r.length = o.length
                }
            }, i: e, o: e, d(e) {
                e && f(n), m(r, e)
            }
        }
    }

    function rn(e, t, n) {
        let {files: i} = t, {index: s} = t, {disabled: o} = t;
        return e.$$set = e => {
            "files" in e && n(1, i = e.files), "index" in e && n(0, s = e.index), "disabled" in e && n(2, o = e.disabled)
        }, [s, i, o, e => n(0, s = e)]
    }

    class an extends ie {
        constructor(e) {
            super(), ne(this, e, rn, on, o, {files: 1, index: 0, disabled: 2})
        }
    }

    function ln(t) {
        let n;
        return {
            c() {
                n = p("div"), n.textContent = "Loading...", y(n, "class", "text-gray-600 ml-2 mt-2 text-sm")
            }, m(e, t) {
                g(e, n, t)
            }, p: e, i: e, o: e, d(e) {
                e && f(n)
            }
        }
    }

    function hn(e) {
        let t, n, i, s, o, r, a;

        function l(t) {
            e[27](t)
        }

        let h = {disabled: e[5], files: e[0]};
        void 0 !== e[1] && (h.index = e[1]), t = new an({props: h}), F.push((() => J(t, "index", l)));
        const c = [un, cn], u = [];

        function d(e, t) {
            return "text" === e[2].filetype ? 0 : "pdf" === e[2].filetype ? 1 : -1
        }

        return ~(s = d(e)) && (o = u[s] = c[s](e)), {
            c() {
                Z(t.$$.fragment), i = w(), o && o.c(), r = $()
            }, m(e, n) {
                ee(t, e, n), g(e, i, n), ~s && u[s].m(e, n), g(e, r, n), a = !0
            }, p(e, i) {
                const a = {};
                32 & i[0] && (a.disabled = e[5]), 1 & i[0] && (a.files = e[0]), !n && 2 & i[0] && (n = !0, a.index = e[1], N((() => n = !1))), t.$set(a);
                let l = s;
                s = d(e), s === l ? ~s && u[s].p(e, i) : (o && (Y(), Q(u[l], 1, 1, (() => {
                    u[l] = null
                })), X()), ~s ? (o = u[s], o ? o.p(e, i) : (o = u[s] = c[s](e), o.c()), q(o, 1), o.m(r.parentNode, r)) : o = null)
            }, i(e) {
                a || (q(t.$$.fragment, e), q(o), a = !0)
            }, o(e) {
                Q(t.$$.fragment, e), Q(o), a = !1
            }, d(e) {
                te(t, e), e && f(i), ~s && u[s].d(e), e && f(r)
            }
        }
    }

    function cn(e) {
        let t, n, i = {file: e[2], positions: e[4]};
        return t = new tn({props: i}), e[29](t), {
            c() {
                Z(t.$$.fragment)
            }, m(e, i) {
                ee(t, e, i), n = !0
            }, p(e, n) {
                const i = {};
                4 & n[0] && (i.file = e[2]), 16 & n[0] && (i.positions = e[4]), t.$set(i)
            }, i(e) {
                n || (q(t.$$.fragment, e), n = !0)
            }, o(e) {
                Q(t.$$.fragment, e), n = !1
            }, d(n) {
                e[29](null), te(t, n)
            }
        }
    }

    function un(e) {
        let t, n, i = {text: null == e[3] ? "Loading..." : e[3]};
        return t = new wt({props: i}), e[28](t), {
            c() {
                Z(t.$$.fragment)
            }, m(e, i) {
                ee(t, e, i), n = !0
            }, p(e, n) {
                const i = {};
                8 & n[0] && (i.text = null == e[3] ? "Loading..." : e[3]), t.$set(i)
            }, i(e) {
                n || (q(t.$$.fragment, e), n = !0)
            }, o(e) {
                Q(t.$$.fragment, e), n = !1
            }, d(n) {
                e[28](null), te(t, n)
            }
        }
    }

    function dn(e) {
        let t, n, i, s, o, r, a, l, h, c, u, m, v, $, b, x, C, S;
        t = new $t({});
        let k = {preferences: e[8]};

        function A(t) {
            e[23](t)
        }

        a = new At({props: k}), e[20](a), a.$on("setPreference", e[21]), a.$on("search", e[22]);
        let L = {unsearched: e[6], preferences: e[8], activeFile: e[2], filesByPath: e[14], searchResultSet: e[9]};
        void 0 !== e[13] && (L.sidebarExpanded = e[13]), c = new dt({props: L}), F.push((() => J(c, "sidebarExpanded", A))), e[24](c), c.$on("setPreference", e[25]), c.$on("navigate", e[26]);
        const R = [hn, ln], M = [];

        function E(e, t) {
            return null != e[2] ? 0 : 1
        }

        return $ = E(e), b = M[$] = R[$](e), {
            c() {
                Z(t.$$.fragment), n = w(), i = p("main"), s = p("header"), o = p("h1"), o.textContent = "Semantra", r = w(), Z(a.$$.fragment), l = w(), h = p("article"), Z(c.$$.fragment), m = w(), v = p("div"), b.c(), x = w(), C = p("footer"), C.innerHTML = '<a class="underline" href="https://lex-liberalis.onrender.com/TnC.txt" target="_blank"> Terms and Conditions </a><a class="underline" href="https://lex-liberalis.onrender.com/PrivacyPolicy.txt" target="_blank"> Privacy Policy </a> <a class="underline" href="https://lex-liberalis.onrender.com/CopyrightNotice.txt" target="_blank"> Copyright Notice </a> \n    <a class="underline" href="https://github.com/freedmand/semantra" target="_blank">Source code</a>', y(o, "class", "text-3xl font-mono font-bold inline-flex pr-6 mt-1"), y(s, "class", "flex flex-row border-b-4 border-black py-4 px-8 max-lg:px-4 items-start"), y(v, "class", "flex flex-col flex-1"), y(h, "class", "flex flex-1 flex-row relative items-stretch"), y(C, "class", "bg-black text-white py-1 px-4 text-sm"), y(i, "class", "flex flex-col h-full bg-slate-100")
            }, m(e, u) {
                ee(t, e, u), g(e, n, u), g(e, i, u), d(i, s), d(s, o), d(s, r), ee(a, s, null), d(i, l), d(i, h), ee(c, h, null), d(h, m), d(h, v), M[$].m(v, null), d(i, x), d(i, C), S = !0
            }, p(e, t) {
                const n = {};
                256 & t[0] && (n.preferences = e[8]), a.$set(n);
                const i = {};
                64 & t[0] && (i.unsearched = e[6]), 256 & t[0] && (i.preferences = e[8]), 4 & t[0] && (i.activeFile = e[2]), 16384 & t[0] && (i.filesByPath = e[14]), 512 & t[0] && (i.searchResultSet = e[9]), !u && 8192 & t[0] && (u = !0, i.sidebarExpanded = e[13], N((() => u = !1))), c.$set(i);
                let s = $;
                $ = E(e), $ === s ? M[$].p(e, t) : (Y(), Q(M[s], 1, 1, (() => {
                    M[s] = null
                })), X(), b = M[$], b ? b.p(e, t) : (b = M[$] = R[$](e), b.c()), q(b, 1), b.m(v, null))
            }, i(e) {
                S || (q(t.$$.fragment, e), q(a.$$.fragment, e), q(c.$$.fragment, e), q(b), S = !0)
            }, o(e) {
                Q(t.$$.fragment, e), Q(a.$$.fragment, e), Q(c.$$.fragment, e), Q(b), S = !1
            }, d(s) {
                te(t, s), s && f(n), s && f(i), e[20](null), te(a), e[24](null), te(c), M[$].d()
            }
        }
    }

    function gn(e) {
        const t = /([\+\-]?\d*\.?\d*\s*)?([^\+\-]+)/g, n = [];
        let i;
        for (; null !== (i = t.exec(e));) {
            const e = parseFloat(i[1]) || (i[1] && i[1].includes("-") ? -1 : 1), t = i[2].trim();
            n.push({query: t, weight: e})
        }
        return n
    }

    function fn(e, t, n) {
        let i, s, o, r, a, l = [], h = 0, c = [], u = null, d = [], g = !1, f = !0, m = {};
        let p, v, w, $ = {results: [], sort: "asc"};

        function b() {
            a && a.scrollToTop()
        }

        async function y(e) {
            const t = Object.values(m).filter((e => 0 !== e.weight)).map((e => Object.assign({}, e)));
            if ("" === e.trim() && 0 === t.length) return n(9, $ = []), void b();
            const i = gn(e), s = .61803398875, o = 1 - s,
                r = i.filter((e => e.weight > 0)).length + t.filter((e => e.weight > 0)).length,
                a = i.filter((e => e.weight < 0)).length + t.filter((e => e.weight < 0)).length;
            for (const e of i) e.weight > 0 ? e.weight *= s / r : e.weight < 0 && (e.weight *= o / a);
            for (const e of t) e.weight > 0 ? e.weight *= s / r : e.weight < 0 && (e.weight *= o / a);
            const l = await fetch("/api/query", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({queries: i, preferences: t})
            });
            n(9, $ = await l.json()), n(13, A = !0), b(), n(6, f = !1)
        }



        M((async () => {

            const e = await fetch("/api/files");
            n(0, l = await e.json())
        }));
        let x = null;

        async function C() {
            if (null == x) return;
            n(13, A = !1), p ? p.navigate(r[x.searchResult.offset[0]], r[x.searchResult.offset[1]]) : v && v.navigate(r[x.searchResult.offset[0]], r[x.searchResult.offset[1]]), x = null, await D();
            const e = document.querySelector(".active-tab");
            e && e.scrollIntoView({inline: "center"})
        }

        async function S(e) {
            x = e;
            const t = o[e.file.filename];
            t !== h ? n(1, h = t) : C()
        }

        function k(e) {
            n(8, m[se(e.file, e.searchResult)] = e, m), null != w && w.scrollToBottomOfPreferences()
        }

        let A = !0;
        return e.$$.update = () => {
            3 & e.$$.dirty[0] && n(2, i = h < l.length ? l[h] : null), 1 & e.$$.dirty[0] && n(14, s = Object.fromEntries(l.map((e => [e.filename, e])))), 1 & e.$$.dirty[0] && (o = Object.fromEntries(l.map(((e, t) => [e.filename, t])))), 4 & e.$$.dirty[0] && async function (e) {
                if (n(19, c = []), n(3, u = null), n(4, d = []), null == e) return;
                n(5, g = !0);
                const t = await fetch(`/api/text?filename=${encodeURIComponent(e.filename)}`);
                if (n(19, c = await t.json()), n(3, u = c.join("")), "pdf" === e.filetype) {
                    const t = await fetch(`/api/pdfpositions?filename=${encodeURIComponent(e.filename)}`);
                    n(4, d = await t.json())
                }
                await D(), C(), n(5, g = !1)
            }(i), 524288 & e.$$.dirty[0] && (r = c.reduce(((e, t) => {
                const n = e[e.length - 1];
                return e.push(n + t.length), e
            }), [0]))
        }, [l, h, i, u, d, g, f, a, m, $, p, v, w, A, s, y, S, k, gn, c, function (e) {
            F[e ? "unshift" : "push"]((() => {
                w = e, n(12, w)
            }))
        }, e => k(e.detail), e => y(e.detail), function (e) {
            A = e, n(13, A)
        }, function (e) {
            F[e ? "unshift" : "push"]((() => {
                a = e, n(7, a)
            }))
        }, e => k(e.detail), e => S(e.detail), function (e) {
            h = e, n(1, h)
        }, function (e) {
            F[e ? "unshift" : "push"]((() => {
                p = e, n(10, p)
            }))
        }, function (e) {
            F[e ? "unshift" : "push"]((() => {
                v = e, n(11, v)
            }))
        }]
    }

    return new class extends ie {
        constructor(e) {
            super(), ne(this, e, fn, dn, o, {parseQuery: 18}, null, [-1, -1])
        }

        get parseQuery() {
            return gn
        }
        async handleDropdownChange(val) {

            await this.callFilesAPI(val);
            console.log(val)
        }

        async  callFilesAPI(foldername) {
            const response = await fetch("/api/files?foldername="+foldername);
            n(0, l = await response.json());
        }

    }({target: document.body})
}();
//# sourceMappingURL=bundle.js.map
function handleDropdownChange(event) {
    app.handleDropdownChange(val);
}