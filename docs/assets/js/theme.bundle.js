! function(t) {
    function e(e) {
        for (var n, i, u = e[0], c = e[1], l = e[2], s = 0, f = []; s < u.length; s++) i = u[s], Object.prototype.hasOwnProperty.call(r, i) && r[i] && f.push(r[i][0]), r[i] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
        for (d && d(e); f.length;) f.shift()();
        return a.push.apply(a, l || []), o()
    }

    function o() {
        for (var t, e = 0; e < a.length; e++) {
            for (var o = a[e], n = !0, u = 1; u < o.length; u++) {
                var c = o[u];
                0 !== r[c] && (n = !1)
            }
            n && (a.splice(e--, 1), t = i(i.s = o[0]))
        }
        return t
    }
    var n = {},
        r = {
            1: 0
        },
        a = [];

    function i(e) {
        if (n[e]) return n[e].exports;
        var o = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = t, i.c = n, i.d = function(t, e, o) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (i.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) i.d(o, n, function(e) {
                return t[e]
            }.bind(null, n));
        return o
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "";
    var u = window.webpackJsonp = window.webpackJsonp || [],
        c = u.push.bind(u);
    u.push = e, u = u.slice();
    for (var l = 0; l < u.length; l++) e(u[l]);
    var d = c;
    a.push([6, 2]), o()
}([, , , , , , function(t, e, o) {
    o(12), t.exports = o(10)
}, function(t, e) {
    ! function() {
        const t = document.querySelector("#portfolioModal");

        function e({
            target: t,
            value: e
        }) {
            t && e && (t.textContent = e)
        }
        t&&t.addEventListener("show.bs.modal",(function(o){
  const n=o.relatedTarget;
  // Check if the clicked element or its parent is the PDF link
  if (n && (n.classList.contains('pdf-link') || n.closest('.pdf-link'))) {
    // If it's the PDF link, do nothing and let the default <a> tag behavior occur
    return;
  }
  const r=t.querySelector("img"),
  a=n.getAttribute("data-portfolio-img"),
  i=t.querySelector(".intro h3"),
  u=n.getAttribute("data-portfolio-title"),
  c=t.querySelector(".intro p"),
  l=n.getAttribute("data-portfolio-description"),
  d=t.querySelector(".client p.text-muted"),
  s=n.getAttribute("data-portfolio-client"),
  f=t.querySelector(".category p.text-muted"),
  p=n.getAttribute("data-portfolio-category");
  r&&a&&r.setAttribute("src",a),
  e({target:i,value:u}),
  e({target:c,value:l}),
  e({target:d,value:s}),
  e({target:f,value:p})
}))
    }()
}, function(t, e) {
    ! function() {
        const t = document.querySelectorAll(".btn-toggle-slideout"),
            e = document.querySelector(".slideout-bg"),
            o = document.querySelectorAll(".slideout-navlink");

        function n() {
            document.body.classList.toggle("slideout-active")
        }
        t.forEach(t => {
            t.addEventListener("click", (function() {
                n()
            }))
        }), e.addEventListener("click", (function() {
            n()
        })), o.forEach(t => {
            t.addEventListener("click", (function(t) {
                ! function(t) {
                    t.preventDefault();
                    const e = !!(t.target && t.target.dataset && t.target.dataset.target) && t.target.dataset.target;
                    e && (n(), setTimeout(() => {
                        const t = document.querySelector(e);
                        t && t.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }, 2e3))
                }(t)
            }))
        })
    }()
}, function(t, e) {
    window.addEventListener("load", (function() {
        document.body.classList.add("page-loaded")
    }))
}, function(t, e, o) {}, , function(t, e, o) {
    "use strict";
    o.r(e);
    o(11);
    var n = o(3),
        r = o.n(n);
    document.addEventListener("DOMContentLoaded", () => {
        r.a.init({
            duration: 700,
            easing: "ease-out-quad",
            once: !0,
            mirror: !1,
            startEvent: "load",
            disable: "mobile"
        })
    });
    o(7), o(8);
    var a = o(27),
        i = o(16),
        u = o(17),
        c = o(18),
        l = o(19),
        d = o(20),
        s = o(21),
        f = o(22),
        p = o(23),
        g = o(24),
        v = o(25),
        b = o(26);
    a.a.use([i.a, u.a, c.a, l.a, d.a, s.a, f.a, p.a, g.a, v.a, b.a]), document.addEventListener("DOMContentLoaded", () => {
        (document.querySelectorAll("[data-swiper]") || []).forEach(t => {
            let e = t.dataset && t.dataset.options ? JSON.parse(t.dataset.options) : {};
            new a.a(t, e)
        })
    });
    o(9)
}]);