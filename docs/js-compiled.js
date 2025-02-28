var g, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
  if (c.get || c.set) {
    throw new TypeError("ES3 does not support getters and setters.");
  }
  a != Array.prototype && a != Object.prototype && (a[b] = c.value);
}, h = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
var MAC_DEF_OFFSET = 3;
var WINDOWS_DEF_OFFSET = 5;
var offset = /windows|win32/i.test(navigator.userAgent) ? WINDOWS_DEF_OFFSET : MAC_DEF_OFFSET;
var updoun = Number((1 / offset).toFixed(2)) + 0.01
function ba() {
  ba = function () {
  };
  h.Symbol || (h.Symbol = ca);
}
var da = 0;
function ca(a) {
  return "jscomp_symbol_" + (a || "") + da++;
}
function m() {
  ba();
  var a = h.Symbol.iterator;
  a || (a = h.Symbol.iterator = h.Symbol("iterator"));
  "function" != typeof Array.prototype[a] && aa(Array.prototype, a, {
    configurable: !0, writable: !0, value: function () {
      return ea(this);
    }
  });
  m = function () {
  };
}
function ea(a) {
  var b = 0;
  return fa(function () {
    return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
  });
}
function fa(a) {
  m();
  a = { next: a };
  a[h.Symbol.iterator] = function () {
    return this;
  };
  return a;
}
function n(a) {
  m();
  var b = a[Symbol.iterator];
  return b ? b.call(a) : ea(a);
}
function p(a, b) {
  this.x = a;
  this.y = b;
}
function r(a, b) {
  var c = a.originalEvent.touches[void 0 === b ? 0 : b];
  return new p(c.pageX, c.pageY);
}
function t(a, b) {
  return !!b && a.x == b.x && a.y == b.y;
}
function u(a, b) {
  return new p(a.x - b.x, a.y - b.y);
}
g = p.prototype;
g.add = function (a) {
  return new p(this.x + a.x, this.y + a.y);
};
g.clone = function () {
  return new p(this.x, this.y);
};
g.length = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};
g.scale = function (a) {
  return new p(this.x * a, this.y * a);
};
function v(a) {
  return new p(a.x, a.y - 1);
}
function w(a) {
  return new p(a.x, a.y + 1);
}
function x(a) {
  return new p(a.x - 1, a.y);
}
g.right = function (a) {
  return new p(this.x + (void 0 === a ? 1 : a), this.y);
};
var y = ["+", "\u2012", "\u2013", "-", "|"], z = [">", "<", "^", "v"], ga = y.concat(z), B = "ontouchstart" in window || "onmsgesturechange" in window, C = new p(-1, 0), D = new p(1, 0), F = new p(0, -1), G = new p(0, 1), H = [C, D, F, G];
function I(a, b) {
  this.a = Math.min(a.x, b.x);
  this.b = Math.min(a.y, b.y);
  this.c = Math.max(a.x, b.x);
  this.f = Math.max(a.y, b.y);
}
function ha(a) {
  return new p(a.a, a.b);
}
I.prototype.contains = function (a) {
  return a.x >= this.a && a.x <= this.c && a.y >= this.b && a.y <= this.f;
};
function ia() {
  this.a = this.value = null;
}
function J(a) {
  return null != a.a ? a.a : a.value;
}
function K(a) {
  return ga.includes(J(a));
}
function M(a) {
  return null == a.value && null == a.a;
}
function ja(a, b, c, e) {
  this.a = a;
  this.right = b;
  this.c = c;
  this.b = e;
  this.h = this.f = this.l = this.g = !1;
}
function N(a) {
  return a.a + a.right + a.c + a.b;
}
function ka(a, b) {
  this.position = a;
  this.value = b;
}
function la(a, b) {
  this.position = a;
  this.a = b;
}
; function O(a) {
  for (var b = 0; b < a.a.length; b++) {
    for (var c = 0; c < a.a[b].length; c++) {
      null != J(a.a[b][c]) && P(a, new p(b, c), "\u2009");
    }
  }
  Q(a);
}
function R(a, b) {
  return a.a[b.x][b.y];
}
function P(a, b, c) {
  var e = R(a, b);
  a.b.push(new la(b, e));
  e.a = c;
  a.c = !0;
}
function ma(a, b, c) {
  J(R(a, b)) != c && P(a, b, c);
}
function S(a) {
  for (var b = n(a.b), c = b.next(); !c.done; c = b.next()) {
    c.value.a.a = null;
  }
  a.b.length = 0;
}
function na(a, b) {
  var c = R(a, b), e = null != c.a ? c.a : c.value, d = y.includes(e), f = z.includes(e);
  if (!d && !f) {
    return e;
  }
  c = T(a, b);
  if (d && c.a && c.right && !c.c && !c.b) {
    return "-";
  }
  if (d && !c.a && !c.right && c.c && c.b) {
    return "|";
  }
  if (4 == N(c)) {
    return "-";
  }
  if (f && 3 == N(c)) {
    if (!c.a) {
      return "<";
    }
    if (!c.c) {
      return "^";
    }
    if (!c.b) {
      return "v";
    }
    if (!c.right) {
      return ">";
    }
  }
  if ((d || f) && 3 == N(c)) {
    c.g = K(R(a, v(x(b))));
    c.l = K(R(a, v(b.right())));
    c.f = K(R(a, w(x(b))));
    c.h = K(R(a, w(b.right())));
    if (!c.right && c.g && c.f || !c.a && c.l && c.h) {
      return "|";
    }
    if (!c.b && c.g && c.l || !c.c && c.h && c.f) {
      return "-";
    }
    e = M(R(a, v(x(b))));
    d = M(R(a, v(b.right())));
    if (c.c && c.a && c.right && (!e || !d)) {
      return "-";
    }
    e = M(R(a, w(x(b))));
    d = M(R(a, w(b.right())));
    return !(c.b && c.a && c.right) || e && d ? "+" : "-";
  }
  if (f && 1 == N(c)) {
    if (c.a) {
      return ">";
    }
    if (c.c) {
      return "v";
    }
    if (c.b) {
      return "^";
    }
    if (c.right) {
      return "<";
    }
  }
  return e;
}
function T(a, b) {
  var c = K(R(a, x(b))), e = K(R(a, b.right())), d = K(R(a, v(b))), f = K(R(a, w(b)));
  return new ja(c, e, d, f);
}
function Q(a, b) {
  var c = [], e = a.b.map(function (a) {
    return a.position.x.toString() + a.position.y.toString();
  }), d = a.b.filter(function (a, c) {
    return e.indexOf(e[c]) == c;
  });
  a.b.length = 0;
  for (var d = n(d), f = d.next(); !f.done; f = d.next()) {
    var k = f.value, f = k.position, k = k.a;
    c.push(new ka(f, null != k.value ? k.value : " "));
    var l = J(k);
    if ("\u2009" == l || " " == l) {
      l = null;
    }
    K(k) && (l = na(a, f));
    k.a = null;
    k.value = l;
  }
  d = b ? a.f : a.g;
  0 < c.length && (50 < d.length && d.shift(), d.push(c));
  a.c = !0;
}
function oa(a) {
  if (a.g.length) {
    for (var b = a.g.pop(), b = n(b), c = b.next(); !c.done; c = b.next()) {
      c = c.value, P(a, c.position, c.value);
    }
    Q(a, !0);
  }
}
function pa(a) {
  if (a.f.length) {
    for (var b = a.f.pop(), b = n(b), c = b.next(); !c.done; c = b.next()) {
      c = c.value, P(a, c.position, c.value);
    }
    Q(a);
  }
}
function U(a) {
  for (var b = new p(Number.MAX_VALUE, Number.MAX_VALUE), c = new p(-1, -1), e = 0; e < a.a.length; e++) {
    for (var d = 0; d < a.a[e].length; d++) {
      null != J(a.a[e][d]) && (e < b.x && (b.x = e), d < b.y && (b.y = d), e > c.x && (c.x = e), d > c.y && (c.y = d));
    }
  }
  if (0 > c.x) {
    return "";
  }
  for (var f = "", d = b.y; d <= c.y; d++) {
    var q = 0;
    var m = 0;
    var count = 0;
    for (var k = "", e = b.x; e <= c.x; e++) {
      var l = na(a, new p(e, d));

      if (/[\u4E00-\u9FA5]/.test(l)) {
        q += updoun;
        e++;
      } else {
        count = Math.round(q)
        for (m = 0; m < count; m++) {
          k += ' ';
        }
        q -= m;
      }

      k = k + (null == l || "\u2009" == l ? " " : l);
    }

    f += k.replace(/\s+$/, "") + "\n";
  }
  return f;
}
function qa(a, b, c) {
  b = b.split("\n");
  for (var e = new p(0, Math.round(b.length / 2)), d = 0; d < b.length; d++) {
    e.x = Math.max(e.x, Math.round(b[d].length / 2));
  }
  for (d = 0; d < b.length; d++) {
    for (var f = b[d], k = 0; k < f.length; k++) {
      var l = f.charAt(k);
      y.includes(l) && (l = "+");
      P(a, u((new p(k, d)).add(c), e), l);
    }
  }
}
; function V(a, b, c, e, d) {
  d = void 0 === d ? "+" : d;
  var f = new I(b, c), k = f.a, l = f.b, A = f.c, f = f.f, E = e ? c.x : b.x;
  for (e = e ? b.y : c.y; k++ < A;) {
    var q = new p(k, e), L = T(a, new p(k, e));
    " " == d && 2 == L.c + L.b || ma(a, q, d);
  }
  for (; l++ < f;) {
    q = new p(E, l), L = T(a, new p(E, l)), " " == d && 2 == L.a + L.right || ma(a, q, d);
  }
  P(a, b, d);
  P(a, c, d);
  ma(a, new p(E, e), d);
}
; function ra(a) {
  this.a = a;
  this.b = null;
}
g = ra.prototype;
g.start = function (a) {
  this.b = a;
};
g.i = function (a) {
  S(this.a);
  V(this.a, this.b, a, !0);
  V(this.a, this.b, a, !1);
};
g.m = function () {
  Q(this.a);
};
g.o = function () {
  return "crosshair";
};
g.j = function () {
};
function sa(a) {
  a.b.width = document.documentElement.clientWidth;
  a.b.height = document.documentElement.clientHeight;
  a.f = !0;
}
function ta(a) {
  if (a.f || a.g.c) {
    a.f = !1, a.g.c = !1, ua(a);
  }
  window.requestAnimationFrame(function () {
    ta(a);
  });
}
function ua(a) {
  var b = a.context;
  b.setTransform(1, 0, 0, 1, 0, 0);
  b.clearRect(0, 0, a.b.width, a.b.height);
  b.scale(a.c, a.c);
  b.translate(a.b.width / 2 / a.c, a.b.height / 2 / a.c);
  var c = u(W(a, new p(0, 0)), new p(3, 3)), e = W(a, new p(a.b.width, a.b.height)).add(new p(3, 3));
  c.x = Math.max(0, Math.min(c.x, 2E3));
  e.x = Math.max(0, Math.min(e.x, 2E3));
  c.y = Math.max(0, Math.min(c.y, 600));
  e.y = Math.max(0, Math.min(e.y, 600));
  b.lineWidth = "1";
  b.strokeStyle = "#EEEEEE";
  b.beginPath();
  for (var d = c.x; d < e.x; d++) {
    b.moveTo(9 * d - a.a.x, 0 - a.a.y), b.lineTo(9 * d - a.a.x, 17 * a.g.a.length - a.a.y);
  }
  for (d = c.y; d < e.y; d++) {
    b.moveTo(0 - a.a.x, 17 * d - a.a.y), b.lineTo(9 * a.g.a.length - a.a.x, 17 * d - a.a.y);
  }
  a.context.stroke();
  d = !a.h;
  b.font = "15px Courier New";
  for (var f = c.x; f < e.x; f++) {
    for (var k = c.y; k < e.y; k++) {
      var l = R(a.g, new p(f, k));
      if (K(l) || null != l.a && " " != J(l)) {
        a.context.fillStyle = null != l.a ? "#DEF" : "#F5F5F5", b.fillRect(9 * f - a.a.x, 17 * (k - 1) - a.a.y, 9, 17);
      }
      var A = na(a.g, new p(f, k));
      null == A || K(l) && !d || (a.context.fillStyle = "#000000", b.fillText(A, 9 * f - a.a.x, 17 * k - a.a.y - 3));
    }
  }
  if (a.h) {
    b.lineWidth = "1";
    b.strokeStyle = "#000000";
    b.beginPath();
    for (d = c.x; d < e.x; d++) {
      for (l = !1, f = c.y; f < e.y; f++) {
        k = R(a.g, new p(d, f)), K(k) && f != e.y - 1 || !l || (b.moveTo(9 * d - a.a.x + 4.5, 17 * l - a.a.y - 8.5), b.lineTo(9 * d - a.a.x + 4.5, 17 * (f - 1) - a.a.y - 8.5), l = !1), K(k) && !l && (l = f);
      }
    }
    for (f = c.y; f < e.y; f++) {
      for (l = !1, d = c.x; d < e.x; d++) {
        k = R(a.g, new p(d, f)), K(k) && d != e.x - 1 || !l || (b.moveTo(9 * l - a.a.x + 4.5, 17 * f - a.a.y - 8.5), b.lineTo(9 * (d - 1) - a.a.x + 4.5, 17 * f - a.a.y - 8.5), l = !1), K(k) && !l && (l = d);
      }
    }
    a.context.stroke();
  }
}
function W(a, b) {
  var c = new p((b.x - a.b.width / 2) / a.c + a.a.x, (b.y - a.b.height / 2) / a.c + a.a.y);
  return new p(Math.min(Math.max(1, Math.round((c.x - 4.5) / 9)), 1998), Math.min(Math.max(1, Math.round((c.y + 8.5) / 17)), 598));
}
; function X(a) {
  this.c = a;
  this.a = this.b = null;
}
g = X.prototype;
g.start = function (a) {
  this.b = a;
  this.i(a);
};
g.i = function (a) {
  S(this.c);
  this.a = a;
  a = Math.min(this.b.y, this.a.y);
  for (var b = Math.max(this.b.x, this.a.x), c = Math.max(this.b.y, this.a.y), e = Math.min(this.b.x, this.a.x); e <= b; e++) {
    for (var d = a; d <= c; d++) {
      P(this.c, new p(e, d), "\u2009");
    }
  }
};
g.m = function () {
  Q(this.c);
};
g.o = function () {
  return "crosshair";
};
g.j = function () {
};
function va(a, b) {
  this.a = a;
  this.c = b;
  this.b = null;
}
g = va.prototype;
g.start = function (a) {
  this.b = a;
};
g.i = function (a) {
  S(this.a);
  var b = T(this.a, this.b), c = T(this.a, a);
  V(this.a, this.b, a, b.c && b.b || c.a && c.right);
  this.c && P(this.a, a, c.c ? "^" : c.b ? "v" : c.a ? "<" : ">");
};
g.m = function () {
  Q(this.a);
};
g.o = function () {
  return "crosshair";
};
g.j = function () {
};
function wa(a) {
  this.c = a;
  this.g = this.f = this.b = this.a = null;
  this.h = !0;
  this.l = [];
}
g = wa.prototype;
g.start = function (a) {
  this.a && this.b && (new I(this.a, this.b)).contains(a) ? (this.f = a, xa(this), ya(this, a)) : (this.a = a, this.b = null, this.h = !1, this.i(a));
};
function xa(a) {
  var b = a.c.b.filter(function (a) {
    return null != J(a.a) && "\u2009" != J(a.a);
  }), c = ha(new I(a.a, a.b));
  a.l = b.map(function (a) {
    return new ka(u(a.position, c), J(a.a));
  });
}
g.i = function (a) {
  if (this.f) {
    ya(this, a);
  } else {
    if (1 != this.h) {
      this.b = a;
      S(this.c);
      a = new I(this.a, a);
      for (var b = a.a; b <= a.c; b++) {
        for (var c = a.b; c <= a.f; c++) {
          var e = new p(b, c), d = J(R(this.c, e));
          P(this.c, e, null == d ? "\u2009" : d);
        }
      }
    }
  }
};
function ya(a, b) {
  a.g = b;
  S(a.c);
  var c = new X(a.c);
  c.start(a.a);
  c.i(a.b);
  c = u(a.g, a.f).add(ha(new I(a.a, a.b)));
  za(a, c);
}
function za(a, b) {
  for (var c = n(a.l), e = c.next(); !e.done; e = c.next()) {
    var e = e.value, d = e.value;
    P(a.c, e.position.add(b), d);
  }
}
g.m = function () {
  this.f && (Q(this.c), this.b = this.a = null);
  this.g = this.f = null;
  this.h = !0;
};
g.o = function (a) {
  return this.a && this.b && (new I(this.a, this.b)).contains(a) ? "pointer" : "default";
};
g.j = function (a) {
  if (this.a && this.b && ("<copy>" != a && "<cut>" != a || xa(this), "<cut>" == a)) {
    var b = new X(this.c);
    b.start(this.a);
    b.i(this.b);
    Q(this.c);
  }
  "<paste>" == a && (za(this, this.a), Q(this.c));
};
function Aa(a) {
  this.b = a;
  this.c = this.a = null;
}
g = Aa.prototype;
g.start = function (a) {
  Q(this.b);
  $("#text-tool-input").val("");
  this.a = a;
  a = J(R(this.b, this.a));
  P(this.b, this.a, null == a ? "\u2009" : a);
};
g.i = function () {
};
g.m = function () {
  null != this.a && (this.c = this.a, this.a = null, $("#text-tool-widget").hide(0, function () {
    $("#text-tool-widget").show(0, function () {
      $("#text-tool-input").focus();
    });
  }));
};
g.o = function () {
  return "pointer";
};
g.j = function () {
  var a = $("#text-tool-input").val();
  S(this.b);
  for (var b = this.b, c = this.c, e = 0, d = 0, a = n(a), f = a.next(); !f.done; f = a.next()) {
    f = f.value;
    if ("\n" == f) {
      (d++, e = 0);
      continue
    };

    if (/[\u4E00-\u9FA5]/g.test(f)) {
      (P(b, c.add(new p(e, d)), f), e += 2);
      continue
    }

    (P(b, c.add(new p(e, d)), f), e++);
  }
};
function Ba(a) {
  this.a = a;
  this.b = null;
  this.c = [];
}
g = Ba.prototype;
g.start = function (a) {
  var b;
  if (B) {
    if (K(R(this.a, a))) {
      b = a;
    } else {
      var c = H.concat([C.add(F), C.add(G), D.add(F), D.add(G)]);
      b = null;
      for (var e = 0, c = n(c), d = c.next(); !d.done; d = c.next()) {
        var d = d.value, f = a.add(d), k = N(T(this.a, f));
        K(R(this.a, f)) && k > e && (b = d, e = k);
      }
      b = null == b ? a : a.add(b);
    }
  } else {
    b = a;
  }
  this.b = b;
  this.c = [];
  if (K(R(this.a, this.b))) {
    T(this.a, this.b);
    b = [];
    e = n(H);
    for (c = e.next(); !c.done; c = e.next()) {
      for (c = c.value, d = Ca(this, this.b, c), d = n(d), f = d.next(); !f.done; f = d.next()) {
        var f = f.value, k = 0 != c.x, l = -1 != z.indexOf(J(R(this.a, a))), A = -1 != z.indexOf(J(R(this.a, f)));
        if (1 == N(T(this.a, f))) {
          b.push({ position: f, s: k, v: l, u: A });
        } else {
          for (var E = n(H), q = E.next(); !q.done; q = E.next()) {
            q = q.value, 0 != c.add(q).length() && 2 != c.add(q).length() && (q = Ca(this, f, q), q.length && (q = q[0], b.push({ position: q, s: k, v: l, w: A, u: -1 != z.indexOf(J(R(this.a, q))) })));
          }
        }
      }
    }
    this.c = b;
    this.i(this.b);
  }
};
g.i = function (a) {
  S(this.a);
  for (var b = n(this.c), c = b.next(); !c.done; c = b.next()) {
    c = c.value, V(this.a, this.b, c.position, c.s, " ");
  }
  b = n(this.c);
  for (c = b.next(); !c.done; c = b.next()) {
    c = c.value, V(this.a, a, c.position, c.s);
  }
  b = n(this.c);
  for (c = b.next(); !c.done; c = b.next()) {
    c = c.value, c.v && P(this.a, a, "^"), c.u && P(this.a, c.position, "^"), c.w && P(this.a, new p(c.s ? c.position.x : a.x, c.s ? a.y : c.position.y), "^");
  }
};
g.m = function () {
  Q(this.a);
};
function Ca(a, b, c) {
  for (var e = b.clone(), d = []; ;) {
    var f = e.add(c);
    if (!K(R(a.a, f))) {
      return t(b, e) || d.push(e), d;
    }
    e = f;
    3 == N(T(a.a, e)) && d.push(e);
  }
}
g.o = function (a) {
  return K(R(this.a, a)) ? "pointer" : "default";
};
g.j = function () {
};
function Da(a, b) {
  this.a = a;
  this.value = b;
  B && ($("#freeform-tool-input").val(""), $("#freeform-tool-input").hide(0, function () {
    $("#freeform-tool-input").show(0, function () {
      $("#freeform-tool-input").focus();
    });
  }));
}
g = Da.prototype;
g.start = function (a) {
  P(this.a, a, this.value);
};
g.i = function (a) {
  P(this.a, a, this.value);
};
g.m = function () {
  Q(this.a);
};
g.o = function () {
  return "crosshair";
};
g.j = function (a) {
  B && (this.value = $("#freeform-tool-input").val().substr(0, 1), $("#freeform-tool-input").blur(), $("#freeform-tool-input").hide(0));
  1 == a.length && (this.value = a);
};
function replaceImporterText(val) {
  var ls = val.replace(/\r\n/g, '\n').split('\n'); // 过滤windows的换行符
  var f = '';
  for (var ln of ls) {
    var q = 0;
    for (var i = 0, l = ln.length, c = ln.charAt(i); i < l; i++, c = ln.charAt(i)) {
      // 如果当前字符为空格并且满足回退条件
      if (/\s/.test(c) && Math.round(q)) {
        q--;
      } else if (/[\u4E00-\u9FA5]/.test(c)) {
        f += c + ' ';
        q += updoun;
      } else {
        f += c
      }
    }

    f += '\n';
  }

  return f;
}
function Ea(a, b) {
  var c = W(a.a, b);
  a.f || (a.f = c);
  t(c, a.f) || (a.a.b.style.cursor = a.c.o(c));
  2 != a.mode || t(c, a.f) || a.c.i(c);
  if (1 == a.mode) {
    var e = a.a, d = a.h.add(u(a.g, b).scale(1 / a.a.c));
    e.a = d;
    e.f = !0;
  }
  a.f = c;
}
function Y(a) {
  2 == a.mode && a.c.m();
  a.mode = 0;
  a.g = null;
  a.h = null;
  a.f = null;
}
function Fa(a) {
  $(window).resize(function () {
    sa(a.a);
  });
  $("#draw-tools > button.tool").click(function (b) {
    $("#text-tool-widget").hide(0);
    b = b.target.id;
    $("#draw-tools > button.tool").removeClass("active");
    $("#" + b).toggleClass("active");
    $(".dialog").removeClass("visible");
    "box-button" == b && (a.c = new ra(a.b));
    "line-button" == b && (a.c = new va(a.b, !1));
    "arrow-button" == b && (a.c = new va(a.b, !0));
    "freeform-button" == b && (a.c = new Da(a.b, "X"));
    "erase-button" == b && (a.c = new X(a.b));
    "move-button" == b && (a.c = new Ba(a.b));
    "text-button" == b && (a.c = new Aa(a.b));
    "select-button" == b && (a.c = new wa(a.b));
    Q(a.b);
    a.a.b.focus();
  });
  $("#file-tools > button.tool").click(function (b) {
    b = b.target.id;
    $(".dialog").removeClass("visible");
    $("#" + b + "-dialog").toggleClass("visible");
    "import-button" == b && ($("#import-area").val(""), $("#import-area").focus());
    "export-button" == b && ($("#export-area").val(U(a.b)), $("#export-area").select());
    "clear-button" == b && O(a.b);
    "undo-button" == b && oa(a.b);
    "redo-button" == b && pa(a.b);
  });
  $("button.close-dialog-button").click(function () {
    $(".dialog").removeClass("visible");
  });
  $("#import-submit-button").click(function () {
    console.log(replaceImporterText($("#import-area").val()));
    O(a.b);
    qa(a.b, replaceImporterText($("#import-area").val()), W(a.a, new p(a.a.b.width / 2, a.a.b.height / 2)));
    Q(a.b);
    $("#import-area").val("");
    $(".dialog").removeClass("visible");
  });
  $("#use-lines-button").click(function () {
    $(".dialog").removeClass("visible");
    var b = a.a;
    b.h = !0;
    b.f = !0;
  });
  $("#use-ascii-button").click(function () {
    $(".dialog").removeClass("visible");
    var b = a.a;
    b.h = !1;
    b.f = !0;
  });
  $(window).keypress(function (b) {
    b.ctrlKey || b.metaKey || 13 == b.keyCode || a.c.j(String.fromCharCode(b.keyCode));
  });
  $(window).keydown(function (b) {
    var c = null;
    if (b.ctrlKey || b.metaKey) {
      67 == b.keyCode && (c = "<copy>"), 86 == b.keyCode && (c = "<paste>"), 90 == b.keyCode && oa(a.b), 89 == b.keyCode && pa(a.b), 88 == b.keyCode && (c = "<cut>");
    }
    8 == b.keyCode && (c = "<backspace>");
    13 == b.keyCode && (c = "<enter>");
    38 == b.keyCode && (c = "<up>");
    40 == b.keyCode && (c = "<down>");
    37 == b.keyCode && (c = "<left>");
    39 == b.keyCode && (c = "<right>");
    null != c && a.c.j(c);
  });
  $("#text-tool-input, #freeform-tool-input").keyup(function () {
    a.c.j("");
  });
  $("#text-tool-input, #freeform-tool-input").change(function () {
    a.c.j("");
  });
  $("#text-tool-close").click(function () {
    $("#text-tool-widget").hide();
    Q(a.b);
  });
  $("#callstack-button").click(function(b) {
    $("#draw-tools > button.tool").removeClass("active");
    $("#callstack-button").addClass("active");
    $(".dialog").removeClass("visible");
    a.c = new CallStackTool(a.b);
    Q(a.b);
    a.a.b.focus();
  });
}
; function Ga(a, b) {
  // window.gapi.auth.authorize({client_id:"125643747010-9s9n1ne2fnnuh5v967licfkt83r4vba5.apps.googleusercontent.com", scope:"https://www.googleapis.com/auth/drive", A:b}, function(c) {
  //   !c || c.error || a.f || (a.f = !0, $("#drive-button").addClass("active"), window.setTimeout(function() {
  //     Ha(a);
  //   }, 500));
  // });
}
function Ia(a) {
  window.gapi && window.gapi.auth && window.gapi.auth.authorize ? Ga(a, !0) : window.setTimeout(function () {
    Ia(a);
  }, 500);
}
function Ja(a) {
  window.setTimeout(function () {
    a.f ? Ka(a) : (Ga(a, !0), Ja(a));
  }, 1E3);
}
function La(a, b) {
  a.a = b;
  $("#drive-filename").text(b.title);
  window.location.hash = b.id;
}
function Ka(a) {
  $("#drive-dialog").addClass("visible");
  var b = U(a.b);
  5 < b.length && b != a.c && Z(a);
  Ma();
}
function Ma() {
  Na(window.gapi.client.request({ path: "/drive/v2/files", params: { q: "mimeType = 'text/plain' and trashed = false" }, method: "GET" }), function (a) {
    $("#drive-file-list").children().remove();
    a = a.items;
    for (var b in a) {
      var c = document.createElement("li"), e = document.createElement("a");
      c.appendChild(e);
      e.href = "#" + a[b].id;
      $(e).click(function () {
        $("#drive-dialog").removeClass("visible");
      });
      e.innerHTML = a[b].title;
      $("#drive-file-list").append(c);
    }
  });
}
function Na(a, b) {
  try {
    a.execute(function (a) {
      a.error || b(a);
    });
  } catch (c) {
  }
}
function Oa(a) {
  U(a.b) != a.c && a.a && a.a.editable && Z(a);
  window.setTimeout(function () {
    Oa(a);
  }, 5E3);
}
function Z(a) {
  var b = U(a.b);
  $("#drive-save-state").text("Saving...");
  Na(Pa(a, b), function (c) {
    La(a, c);
    $("#drive-save-state").text("Saved");
    a.c = b;
  });
}
function Ha(a) {
  1 < window.location.hash.length && ($("#drive-save-state").text("Loading..."), Na(window.gapi.client.request({ path: "/drive/v2/files/" + window.location.hash.substr(1, window.location.hash.length - 1), method: "GET" }), function (b) {
    La(a, b);
    Qa(a);
  }));
}
function Qa(a) {
  Ra(a.a.downloadUrl, function (b) {
    $("#drive-save-state").text("Loaded");
    O(a.b);
    qa(a.b, b, W(a.g, new p(a.g.b.width / 2, a.g.b.height / 2)));
    Q(a.b);
    a.c = U(a.b);
  });
}
function Pa(a, b) {
  var c = "\r\n---------314159265358979323846\r\nContent-Type: application/json\r\n\r\n" + JSON.stringify({ title: a.a ? a.a.title : "Untitled ASCII Diagram", mimeType: "text/plain" }) + "\r\n---------314159265358979323846\r\nContent-Type: text/plain\r\n\r\n" + b + "\r\n---------314159265358979323846--";
  return window.gapi.client.request({ method: a.a ? "PUT" : "POST", path: "/upload/drive/v2/files" + (a.a ? "/" + a.a.id : ""), params: { uploadType: "multipart" }, headers: { "Content-Type": 'multipart/mixed; boundary="-------314159265358979323846"' }, body: c });
}
function Ra(a, b) {
  var c = window.gapi.auth.getToken().access_token, e = new XMLHttpRequest;
  e.open("GET", a);
  e.setRequestHeader("Authorization", "Bearer " + c);
  e.onload = function () {
    b(e.responseText);
  };
  e.onerror = function () {
    b(null);
  };
  e.send();
}
; function Sa(a) {
  var b = $(a.a.a.b);
  b.on("mousewheel", function (c) {
    c = a.a.a.c * (0 < c.originalEvent.wheelDelta ? 1.1 : .9);
    c = Math.max(Math.min(c, 5), .2);
    var b = a.a.a;
    b.c = c;
    b.f = !0;
  });
  b.mousedown(function (c) {
    if (c.ctrlKey || c.metaKey) {
      var b = a.a;
      c = new p(c.clientX, c.clientY);
      b.mode = 1;
      b.g = c;
      b.h = b.a.a;
    } else {
      b = a.a, c = new p(c.clientX, c.clientY), b.mode = 2, b.c.start(W(b.a, c));
    }
  });
  b.mouseup(function () {
    Y(a.a);
  });
  b.mouseleave(function () {
    Y(a.a);
  });
  b.mousemove(function (c) {
    Ea(a.a, new p(c.clientX, c.clientY));
  });
}
function Ta(a, b) {
  a.f = b;
  a.h = $.now();
  a.b = !1;
  window.setTimeout(function () {
    if (!a.b && !a.c && a.f) {
      var c = a.a;
      c.mode = 2;
      c.c.start(W(c.a, b));
    }
  }, 150);
}
function Ua(a) {
  var b = $(a.a.a.b);
  b.on("touchstart", function (c) {
    c.preventDefault();
    if (1 == c.originalEvent.touches.length) {
      Ta(a, r(c));
    } else {
      if (1 < c.originalEvent.touches.length) {
        var b = r(c, 0);
        c = r(c, 1);
        Y(a.a);
        a.c = !0;
        a.b = !1;
        a.l = u(b, c).length();
        a.g = a.a.a.c;
      }
    }
  });
  b.on("touchmove", function (c) {
    c.preventDefault();
    if (1 == c.originalEvent.touches.length) {
      c = r(c);
      if (!a.b && 150 > $.now() - a.h && 6 < u(c, a.f).length()) {
        a.b = !0;
        var b = a.a;
        b.mode = 1;
        b.g = c;
        b.h = b.a.a;
      }
      Ea(a.a, c);
    } else {
      1 < c.originalEvent.touches.length && a.c && (c = a.g * u(r(c, 0), r(c, 1)).length() / a.l, c = Math.max(Math.min(c, 5), .5), b = a.a.a, b.c = c, b.f = !0);
    }
  });
  b.on("touchend", function (b) {
    b.preventDefault();
    a.b = !1;
    a.c = !1;
    a.f = null;
    Y(a.a);
  });
}
; var Va = new function () {
  this.a = Array(2E3);
  this.b = [];
  this.c = !0;
  this.g = [];
  this.f = [];
  for (var a = 0; a < this.a.length; a++) {
    this.a[a] = Array(600);
    for (var b = 0; b < this.a[a].length; b++) {
      this.a[a][b] = new ia;
    }
  }
}, Wa = new function (a) {
  this.g = a;
  this.b = document.getElementById("ascii-canvas");
  this.context = this.b.getContext("2d");
  this.c = 1;
  this.a = new p(9E3, 5100);
  this.f = !0;
  this.h = !1;
  sa(this);
}(Va), Xa = new function (a, b) {
  this.a = a;
  this.b = b;
  this.c = new ra(b);
  this.mode = 0;
  this.f = null;
  Fa(this);
}(Wa, Va);
new function (a) {
  this.a = a;
  this.c = this.b = !1;
  Ua(this);
}(Xa);
new function (a) {
  this.a = a;
  Sa(this);
}(Xa);
new function (a, b) {
  var c = this;
  this.f = !1;
  this.b = a;
  this.g = b;
  this.a = null;
  this.c = "";
  Ia(this);
  $("#drive-button").click(function () {
    c.f ? Ka(c) : (Ga(c, !1), Ja(c));
  });
  $("#drive-filename").click(function () {
    var a = "" + $("#drive-filename").text(), a = prompt("Enter new filename:", a);
    c.a.title = a;
    Z(c);
    Ma();
  });
  Oa(this);
  $(window).on("hashchange", function () {
    Ha(c);
  });
  $("#drive-new-file-button").click(function () {
    c.a = null;
    O(c.b);
    window.location.hash = "";
    Z(c);
    $("#drive-dialog").removeClass("visible");
  });
}(Va, Wa);
ta(Wa);

// 添加新的调用栈工具类
function CallStackTool(a) {
  this.b = a;  // canvas context
  this.currentPos = null;  // 当前位置
  this.startPos = null;   // 起始位置
  this.text = '';        // 当前文本
}

CallStackTool.prototype = {
  start: function(pos) {
    this.startPos = pos;
    this.currentPos = pos;
    $("#callstack-input").val("");
    $("#callstack-widget").show().find("input").focus();
  },

  i: function() { /* 移动时的处理 */ },
  
  m: function() { /* 结束时的处理 */ },
  
  o: function() {
    return "pointer";  // 鼠标样式
  },

  j: function() {
    var text = $("#callstack-input").val();
    if(!text) return;
    
    S(this.b); // 清除临时状态
    
    var lines = text.split('\n');
    var currentX = this.startPos.x;
    var currentY = this.startPos.y;
    
    for(var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var indent = line.search(/\S/);
      if(indent < 0) indent = 0;
      
      // 绘制垂直连接线
      if(indent > 0) {
        for(var j = 0; j < indent; j++) {
          P(this.b, new p(currentX + j, currentY - 1), "|");
        }
        // 绘制水平连接线
        P(this.b, new p(currentX + indent - 1, currentY), "+");
        for(var j = 0; j < 30; j++) {
          P(this.b, new p(currentX + indent + j, currentY), "-");
        }
        P(this.b, new p(currentX + indent + 30, currentY), ">");
      }
      
      // 写入文本
      var content = line.trim();
      for(var j = 0; j < content.length; j++) {
        var char = content.charAt(j);
        if(/[\u4E00-\u9FA5]/.test(char)) {
          P(this.b, new p(currentX + indent + 31 + j*2, currentY), char);
        } else {
          P(this.b, new p(currentX + indent + 31 + j, currentY), char);
        }
      }
      
      currentY += 2; // 行间距
    }
    
    Q(this.b);
  }
};

