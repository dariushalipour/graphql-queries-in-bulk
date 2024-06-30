var ng = Object.defineProperty;
var tg = (s, u, r) => u in s ? ng(s, u, { enumerable: !0, configurable: !0, writable: !0, value: r }) : s[u] = r;
var hn = (s, u, r) => tg(s, typeof u != "symbol" ? u + "" : u, r);
var It = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Or = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Or.exports;
(function(s, u) {
  (function() {
    var r, l = "4.17.21", c = 200, _ = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", I = "Expected a function", P = "Invalid `variable` option passed into `_.template`", L = "__lodash_hash_undefined__", R = 500, k = "__lodash_placeholder__", Y = 1, X = 2, fe = 4, K = 1, Ee = 2, ge = 1, he = 2, jn = 4, ue = 8, me = 16, Ie = 32, en = 64, Fe = 128, et = 256, br = 512, sa = 30, ua = "...", oa = 800, aa = 16, us = 1, fa = 2, ca = 3, In = 1 / 0, pn = 9007199254740991, la = 17976931348623157e292, Ct = NaN, Qe = 4294967295, ha = Qe - 1, pa = Qe >>> 1, da = [
      ["ary", Fe],
      ["bind", ge],
      ["bindKey", he],
      ["curry", ue],
      ["curryRight", me],
      ["flip", br],
      ["partial", Ie],
      ["partialRight", en],
      ["rearg", et]
    ], Fn = "[object Arguments]", Dt = "[object Array]", ga = "[object AsyncFunction]", nt = "[object Boolean]", tt = "[object Date]", _a = "[object DOMException]", bt = "[object Error]", Rt = "[object Function]", os = "[object GeneratorFunction]", $e = "[object Map]", rt = "[object Number]", va = "[object Null]", nn = "[object Object]", as = "[object Promise]", Ea = "[object Proxy]", it = "[object RegExp]", qe = "[object Set]", st = "[object String]", Lt = "[object Symbol]", ma = "[object Undefined]", ut = "[object WeakMap]", xa = "[object WeakSet]", ot = "[object ArrayBuffer]", Pn = "[object DataView]", Rr = "[object Float32Array]", Lr = "[object Float64Array]", Fr = "[object Int8Array]", Pr = "[object Int16Array]", Br = "[object Int32Array]", Mr = "[object Uint8Array]", Ur = "[object Uint8ClampedArray]", kr = "[object Uint16Array]", Wr = "[object Uint32Array]", Ta = /\b__p \+= '';/g, Aa = /\b(__p \+=) '' \+/g, Ia = /(__e\(.*?\)|\b__t\)) \+\n'';/g, fs = /&(?:amp|lt|gt|quot|#39);/g, cs = /[&<>"']/g, ya = RegExp(fs.source), Na = RegExp(cs.source), Oa = /<%-([\s\S]+?)%>/g, wa = /<%([\s\S]+?)%>/g, ls = /<%=([\s\S]+?)%>/g, Sa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ca = /^\w*$/, Da = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Vr = /[\\^$.*+?()[\]{}|]/g, ba = RegExp(Vr.source), Gr = /^\s+/, Ra = /\s/, La = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Fa = /\{\n\/\* \[wrapped with (.+)\] \*/, Pa = /,? & /, Ba = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ma = /[()=,{}\[\]\/\s]/, Ua = /\\(\\)?/g, ka = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, hs = /\w*$/, Wa = /^[-+]0x[0-9a-f]+$/i, Va = /^0b[01]+$/i, Ga = /^\[object .+?Constructor\]$/, $a = /^0o[0-7]+$/i, qa = /^(?:0|[1-9]\d*)$/, Ya = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ft = /($^)/, Ha = /['\n\r\u2028\u2029\\]/g, Pt = "\\ud800-\\udfff", za = "\\u0300-\\u036f", Ja = "\\ufe20-\\ufe2f", Xa = "\\u20d0-\\u20ff", ps = za + Ja + Xa, ds = "\\u2700-\\u27bf", gs = "a-z\\xdf-\\xf6\\xf8-\\xff", Qa = "\\xac\\xb1\\xd7\\xf7", Ka = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Za = "\\u2000-\\u206f", ja = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", _s = "A-Z\\xc0-\\xd6\\xd8-\\xde", vs = "\\ufe0e\\ufe0f", Es = Qa + Ka + Za + ja, $r = "['’]", ef = "[" + Pt + "]", ms = "[" + Es + "]", Bt = "[" + ps + "]", xs = "\\d+", nf = "[" + ds + "]", Ts = "[" + gs + "]", As = "[^" + Pt + Es + xs + ds + gs + _s + "]", qr = "\\ud83c[\\udffb-\\udfff]", tf = "(?:" + Bt + "|" + qr + ")", Is = "[^" + Pt + "]", Yr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Hr = "[\\ud800-\\udbff][\\udc00-\\udfff]", Bn = "[" + _s + "]", ys = "\\u200d", Ns = "(?:" + Ts + "|" + As + ")", rf = "(?:" + Bn + "|" + As + ")", Os = "(?:" + $r + "(?:d|ll|m|re|s|t|ve))?", ws = "(?:" + $r + "(?:D|LL|M|RE|S|T|VE))?", Ss = tf + "?", Cs = "[" + vs + "]?", sf = "(?:" + ys + "(?:" + [Is, Yr, Hr].join("|") + ")" + Cs + Ss + ")*", uf = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", of = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ds = Cs + Ss + sf, af = "(?:" + [nf, Yr, Hr].join("|") + ")" + Ds, ff = "(?:" + [Is + Bt + "?", Bt, Yr, Hr, ef].join("|") + ")", cf = RegExp($r, "g"), lf = RegExp(Bt, "g"), zr = RegExp(qr + "(?=" + qr + ")|" + ff + Ds, "g"), hf = RegExp([
      Bn + "?" + Ts + "+" + Os + "(?=" + [ms, Bn, "$"].join("|") + ")",
      rf + "+" + ws + "(?=" + [ms, Bn + Ns, "$"].join("|") + ")",
      Bn + "?" + Ns + "+" + Os,
      Bn + "+" + ws,
      of,
      uf,
      xs,
      af
    ].join("|"), "g"), pf = RegExp("[" + ys + Pt + ps + vs + "]"), df = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, gf = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], _f = -1, j = {};
    j[Rr] = j[Lr] = j[Fr] = j[Pr] = j[Br] = j[Mr] = j[Ur] = j[kr] = j[Wr] = !0, j[Fn] = j[Dt] = j[ot] = j[nt] = j[Pn] = j[tt] = j[bt] = j[Rt] = j[$e] = j[rt] = j[nn] = j[it] = j[qe] = j[st] = j[ut] = !1;
    var Z = {};
    Z[Fn] = Z[Dt] = Z[ot] = Z[Pn] = Z[nt] = Z[tt] = Z[Rr] = Z[Lr] = Z[Fr] = Z[Pr] = Z[Br] = Z[$e] = Z[rt] = Z[nn] = Z[it] = Z[qe] = Z[st] = Z[Lt] = Z[Mr] = Z[Ur] = Z[kr] = Z[Wr] = !0, Z[bt] = Z[Rt] = Z[ut] = !1;
    var vf = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Ef = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, mf = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, xf = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Tf = parseFloat, Af = parseInt, bs = typeof It == "object" && It && It.Object === Object && It, If = typeof self == "object" && self && self.Object === Object && self, pe = bs || If || Function("return this")(), Jr = u && !u.nodeType && u, yn = Jr && !0 && s && !s.nodeType && s, Rs = yn && yn.exports === Jr, Xr = Rs && bs.process, Pe = function() {
      try {
        var d = yn && yn.require && yn.require("util").types;
        return d || Xr && Xr.binding && Xr.binding("util");
      } catch {
      }
    }(), Ls = Pe && Pe.isArrayBuffer, Fs = Pe && Pe.isDate, Ps = Pe && Pe.isMap, Bs = Pe && Pe.isRegExp, Ms = Pe && Pe.isSet, Us = Pe && Pe.isTypedArray;
    function Se(d, E, v) {
      switch (v.length) {
        case 0:
          return d.call(E);
        case 1:
          return d.call(E, v[0]);
        case 2:
          return d.call(E, v[0], v[1]);
        case 3:
          return d.call(E, v[0], v[1], v[2]);
      }
      return d.apply(E, v);
    }
    function yf(d, E, v, N) {
      for (var F = -1, H = d == null ? 0 : d.length; ++F < H; ) {
        var oe = d[F];
        E(N, oe, v(oe), d);
      }
      return N;
    }
    function Be(d, E) {
      for (var v = -1, N = d == null ? 0 : d.length; ++v < N && E(d[v], v, d) !== !1; )
        ;
      return d;
    }
    function Nf(d, E) {
      for (var v = d == null ? 0 : d.length; v-- && E(d[v], v, d) !== !1; )
        ;
      return d;
    }
    function ks(d, E) {
      for (var v = -1, N = d == null ? 0 : d.length; ++v < N; )
        if (!E(d[v], v, d))
          return !1;
      return !0;
    }
    function dn(d, E) {
      for (var v = -1, N = d == null ? 0 : d.length, F = 0, H = []; ++v < N; ) {
        var oe = d[v];
        E(oe, v, d) && (H[F++] = oe);
      }
      return H;
    }
    function Mt(d, E) {
      var v = d == null ? 0 : d.length;
      return !!v && Mn(d, E, 0) > -1;
    }
    function Qr(d, E, v) {
      for (var N = -1, F = d == null ? 0 : d.length; ++N < F; )
        if (v(E, d[N]))
          return !0;
      return !1;
    }
    function ee(d, E) {
      for (var v = -1, N = d == null ? 0 : d.length, F = Array(N); ++v < N; )
        F[v] = E(d[v], v, d);
      return F;
    }
    function gn(d, E) {
      for (var v = -1, N = E.length, F = d.length; ++v < N; )
        d[F + v] = E[v];
      return d;
    }
    function Kr(d, E, v, N) {
      var F = -1, H = d == null ? 0 : d.length;
      for (N && H && (v = d[++F]); ++F < H; )
        v = E(v, d[F], F, d);
      return v;
    }
    function Of(d, E, v, N) {
      var F = d == null ? 0 : d.length;
      for (N && F && (v = d[--F]); F--; )
        v = E(v, d[F], F, d);
      return v;
    }
    function Zr(d, E) {
      for (var v = -1, N = d == null ? 0 : d.length; ++v < N; )
        if (E(d[v], v, d))
          return !0;
      return !1;
    }
    var wf = jr("length");
    function Sf(d) {
      return d.split("");
    }
    function Cf(d) {
      return d.match(Ba) || [];
    }
    function Ws(d, E, v) {
      var N;
      return v(d, function(F, H, oe) {
        if (E(F, H, oe))
          return N = H, !1;
      }), N;
    }
    function Ut(d, E, v, N) {
      for (var F = d.length, H = v + (N ? 1 : -1); N ? H-- : ++H < F; )
        if (E(d[H], H, d))
          return H;
      return -1;
    }
    function Mn(d, E, v) {
      return E === E ? Vf(d, E, v) : Ut(d, Vs, v);
    }
    function Df(d, E, v, N) {
      for (var F = v - 1, H = d.length; ++F < H; )
        if (N(d[F], E))
          return F;
      return -1;
    }
    function Vs(d) {
      return d !== d;
    }
    function Gs(d, E) {
      var v = d == null ? 0 : d.length;
      return v ? ni(d, E) / v : Ct;
    }
    function jr(d) {
      return function(E) {
        return E == null ? r : E[d];
      };
    }
    function ei(d) {
      return function(E) {
        return d == null ? r : d[E];
      };
    }
    function $s(d, E, v, N, F) {
      return F(d, function(H, oe, Q) {
        v = N ? (N = !1, H) : E(v, H, oe, Q);
      }), v;
    }
    function bf(d, E) {
      var v = d.length;
      for (d.sort(E); v--; )
        d[v] = d[v].value;
      return d;
    }
    function ni(d, E) {
      for (var v, N = -1, F = d.length; ++N < F; ) {
        var H = E(d[N]);
        H !== r && (v = v === r ? H : v + H);
      }
      return v;
    }
    function ti(d, E) {
      for (var v = -1, N = Array(d); ++v < d; )
        N[v] = E(v);
      return N;
    }
    function Rf(d, E) {
      return ee(E, function(v) {
        return [v, d[v]];
      });
    }
    function qs(d) {
      return d && d.slice(0, Js(d) + 1).replace(Gr, "");
    }
    function Ce(d) {
      return function(E) {
        return d(E);
      };
    }
    function ri(d, E) {
      return ee(E, function(v) {
        return d[v];
      });
    }
    function at(d, E) {
      return d.has(E);
    }
    function Ys(d, E) {
      for (var v = -1, N = d.length; ++v < N && Mn(E, d[v], 0) > -1; )
        ;
      return v;
    }
    function Hs(d, E) {
      for (var v = d.length; v-- && Mn(E, d[v], 0) > -1; )
        ;
      return v;
    }
    function Lf(d, E) {
      for (var v = d.length, N = 0; v--; )
        d[v] === E && ++N;
      return N;
    }
    var Ff = ei(vf), Pf = ei(Ef);
    function Bf(d) {
      return "\\" + xf[d];
    }
    function Mf(d, E) {
      return d == null ? r : d[E];
    }
    function Un(d) {
      return pf.test(d);
    }
    function Uf(d) {
      return df.test(d);
    }
    function kf(d) {
      for (var E, v = []; !(E = d.next()).done; )
        v.push(E.value);
      return v;
    }
    function ii(d) {
      var E = -1, v = Array(d.size);
      return d.forEach(function(N, F) {
        v[++E] = [F, N];
      }), v;
    }
    function zs(d, E) {
      return function(v) {
        return d(E(v));
      };
    }
    function _n(d, E) {
      for (var v = -1, N = d.length, F = 0, H = []; ++v < N; ) {
        var oe = d[v];
        (oe === E || oe === k) && (d[v] = k, H[F++] = v);
      }
      return H;
    }
    function kt(d) {
      var E = -1, v = Array(d.size);
      return d.forEach(function(N) {
        v[++E] = N;
      }), v;
    }
    function Wf(d) {
      var E = -1, v = Array(d.size);
      return d.forEach(function(N) {
        v[++E] = [N, N];
      }), v;
    }
    function Vf(d, E, v) {
      for (var N = v - 1, F = d.length; ++N < F; )
        if (d[N] === E)
          return N;
      return -1;
    }
    function Gf(d, E, v) {
      for (var N = v + 1; N--; )
        if (d[N] === E)
          return N;
      return N;
    }
    function kn(d) {
      return Un(d) ? qf(d) : wf(d);
    }
    function Ye(d) {
      return Un(d) ? Yf(d) : Sf(d);
    }
    function Js(d) {
      for (var E = d.length; E-- && Ra.test(d.charAt(E)); )
        ;
      return E;
    }
    var $f = ei(mf);
    function qf(d) {
      for (var E = zr.lastIndex = 0; zr.test(d); )
        ++E;
      return E;
    }
    function Yf(d) {
      return d.match(zr) || [];
    }
    function Hf(d) {
      return d.match(hf) || [];
    }
    var zf = function d(E) {
      E = E == null ? pe : Wn.defaults(pe.Object(), E, Wn.pick(pe, gf));
      var v = E.Array, N = E.Date, F = E.Error, H = E.Function, oe = E.Math, Q = E.Object, si = E.RegExp, Jf = E.String, Me = E.TypeError, Wt = v.prototype, Xf = H.prototype, Vn = Q.prototype, Vt = E["__core-js_shared__"], Gt = Xf.toString, J = Vn.hasOwnProperty, Qf = 0, Xs = function() {
        var e = /[^.]+$/.exec(Vt && Vt.keys && Vt.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), $t = Vn.toString, Kf = Gt.call(Q), Zf = pe._, jf = si(
        "^" + Gt.call(J).replace(Vr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), qt = Rs ? E.Buffer : r, vn = E.Symbol, Yt = E.Uint8Array, Qs = qt ? qt.allocUnsafe : r, Ht = zs(Q.getPrototypeOf, Q), Ks = Q.create, Zs = Vn.propertyIsEnumerable, zt = Wt.splice, js = vn ? vn.isConcatSpreadable : r, ft = vn ? vn.iterator : r, Nn = vn ? vn.toStringTag : r, Jt = function() {
        try {
          var e = Dn(Q, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), ec = E.clearTimeout !== pe.clearTimeout && E.clearTimeout, nc = N && N.now !== pe.Date.now && N.now, tc = E.setTimeout !== pe.setTimeout && E.setTimeout, Xt = oe.ceil, Qt = oe.floor, ui = Q.getOwnPropertySymbols, rc = qt ? qt.isBuffer : r, eu = E.isFinite, ic = Wt.join, sc = zs(Q.keys, Q), ae = oe.max, _e = oe.min, uc = N.now, oc = E.parseInt, nu = oe.random, ac = Wt.reverse, oi = Dn(E, "DataView"), ct = Dn(E, "Map"), ai = Dn(E, "Promise"), Gn = Dn(E, "Set"), lt = Dn(E, "WeakMap"), ht = Dn(Q, "create"), Kt = lt && new lt(), $n = {}, fc = bn(oi), cc = bn(ct), lc = bn(ai), hc = bn(Gn), pc = bn(lt), Zt = vn ? vn.prototype : r, pt = Zt ? Zt.valueOf : r, tu = Zt ? Zt.toString : r;
      function a(e) {
        if (te(e) && !B(e) && !(e instanceof G)) {
          if (e instanceof Ue)
            return e;
          if (J.call(e, "__wrapped__"))
            return ro(e);
        }
        return new Ue(e);
      }
      var qn = /* @__PURE__ */ function() {
        function e() {
        }
        return function(n) {
          if (!ne(n))
            return {};
          if (Ks)
            return Ks(n);
          e.prototype = n;
          var t = new e();
          return e.prototype = r, t;
        };
      }();
      function jt() {
      }
      function Ue(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      a.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Oa,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: wa,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: ls,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: a
        }
      }, a.prototype = jt.prototype, a.prototype.constructor = a, Ue.prototype = qn(jt.prototype), Ue.prototype.constructor = Ue;
      function G(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Qe, this.__views__ = [];
      }
      function dc() {
        var e = new G(this.__wrapped__);
        return e.__actions__ = ye(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = ye(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = ye(this.__views__), e;
      }
      function gc() {
        if (this.__filtered__) {
          var e = new G(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function _c() {
        var e = this.__wrapped__.value(), n = this.__dir__, t = B(e), i = n < 0, o = t ? e.length : 0, f = Sl(0, o, this.__views__), h = f.start, p = f.end, g = p - h, m = i ? p : h - 1, x = this.__iteratees__, A = x.length, y = 0, w = _e(g, this.__takeCount__);
        if (!t || !i && o == g && w == g)
          return Ou(e, this.__actions__);
        var D = [];
        e:
          for (; g-- && y < w; ) {
            m += n;
            for (var U = -1, b = e[m]; ++U < A; ) {
              var V = x[U], q = V.iteratee, Re = V.type, Ae = q(b);
              if (Re == fa)
                b = Ae;
              else if (!Ae) {
                if (Re == us)
                  continue e;
                break e;
              }
            }
            D[y++] = b;
          }
        return D;
      }
      G.prototype = qn(jt.prototype), G.prototype.constructor = G;
      function On(e) {
        var n = -1, t = e == null ? 0 : e.length;
        for (this.clear(); ++n < t; ) {
          var i = e[n];
          this.set(i[0], i[1]);
        }
      }
      function vc() {
        this.__data__ = ht ? ht(null) : {}, this.size = 0;
      }
      function Ec(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function mc(e) {
        var n = this.__data__;
        if (ht) {
          var t = n[e];
          return t === L ? r : t;
        }
        return J.call(n, e) ? n[e] : r;
      }
      function xc(e) {
        var n = this.__data__;
        return ht ? n[e] !== r : J.call(n, e);
      }
      function Tc(e, n) {
        var t = this.__data__;
        return this.size += this.has(e) ? 0 : 1, t[e] = ht && n === r ? L : n, this;
      }
      On.prototype.clear = vc, On.prototype.delete = Ec, On.prototype.get = mc, On.prototype.has = xc, On.prototype.set = Tc;
      function tn(e) {
        var n = -1, t = e == null ? 0 : e.length;
        for (this.clear(); ++n < t; ) {
          var i = e[n];
          this.set(i[0], i[1]);
        }
      }
      function Ac() {
        this.__data__ = [], this.size = 0;
      }
      function Ic(e) {
        var n = this.__data__, t = er(n, e);
        if (t < 0)
          return !1;
        var i = n.length - 1;
        return t == i ? n.pop() : zt.call(n, t, 1), --this.size, !0;
      }
      function yc(e) {
        var n = this.__data__, t = er(n, e);
        return t < 0 ? r : n[t][1];
      }
      function Nc(e) {
        return er(this.__data__, e) > -1;
      }
      function Oc(e, n) {
        var t = this.__data__, i = er(t, e);
        return i < 0 ? (++this.size, t.push([e, n])) : t[i][1] = n, this;
      }
      tn.prototype.clear = Ac, tn.prototype.delete = Ic, tn.prototype.get = yc, tn.prototype.has = Nc, tn.prototype.set = Oc;
      function rn(e) {
        var n = -1, t = e == null ? 0 : e.length;
        for (this.clear(); ++n < t; ) {
          var i = e[n];
          this.set(i[0], i[1]);
        }
      }
      function wc() {
        this.size = 0, this.__data__ = {
          hash: new On(),
          map: new (ct || tn)(),
          string: new On()
        };
      }
      function Sc(e) {
        var n = hr(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function Cc(e) {
        return hr(this, e).get(e);
      }
      function Dc(e) {
        return hr(this, e).has(e);
      }
      function bc(e, n) {
        var t = hr(this, e), i = t.size;
        return t.set(e, n), this.size += t.size == i ? 0 : 1, this;
      }
      rn.prototype.clear = wc, rn.prototype.delete = Sc, rn.prototype.get = Cc, rn.prototype.has = Dc, rn.prototype.set = bc;
      function wn(e) {
        var n = -1, t = e == null ? 0 : e.length;
        for (this.__data__ = new rn(); ++n < t; )
          this.add(e[n]);
      }
      function Rc(e) {
        return this.__data__.set(e, L), this;
      }
      function Lc(e) {
        return this.__data__.has(e);
      }
      wn.prototype.add = wn.prototype.push = Rc, wn.prototype.has = Lc;
      function He(e) {
        var n = this.__data__ = new tn(e);
        this.size = n.size;
      }
      function Fc() {
        this.__data__ = new tn(), this.size = 0;
      }
      function Pc(e) {
        var n = this.__data__, t = n.delete(e);
        return this.size = n.size, t;
      }
      function Bc(e) {
        return this.__data__.get(e);
      }
      function Mc(e) {
        return this.__data__.has(e);
      }
      function Uc(e, n) {
        var t = this.__data__;
        if (t instanceof tn) {
          var i = t.__data__;
          if (!ct || i.length < c - 1)
            return i.push([e, n]), this.size = ++t.size, this;
          t = this.__data__ = new rn(i);
        }
        return t.set(e, n), this.size = t.size, this;
      }
      He.prototype.clear = Fc, He.prototype.delete = Pc, He.prototype.get = Bc, He.prototype.has = Mc, He.prototype.set = Uc;
      function ru(e, n) {
        var t = B(e), i = !t && Rn(e), o = !t && !i && An(e), f = !t && !i && !o && Jn(e), h = t || i || o || f, p = h ? ti(e.length, Jf) : [], g = p.length;
        for (var m in e)
          (n || J.call(e, m)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
          (m == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          o && (m == "offset" || m == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          f && (m == "buffer" || m == "byteLength" || m == "byteOffset") || // Skip index properties.
          an(m, g))) && p.push(m);
        return p;
      }
      function iu(e) {
        var n = e.length;
        return n ? e[mi(0, n - 1)] : r;
      }
      function kc(e, n) {
        return pr(ye(e), Sn(n, 0, e.length));
      }
      function Wc(e) {
        return pr(ye(e));
      }
      function fi(e, n, t) {
        (t !== r && !ze(e[n], t) || t === r && !(n in e)) && sn(e, n, t);
      }
      function dt(e, n, t) {
        var i = e[n];
        (!(J.call(e, n) && ze(i, t)) || t === r && !(n in e)) && sn(e, n, t);
      }
      function er(e, n) {
        for (var t = e.length; t--; )
          if (ze(e[t][0], n))
            return t;
        return -1;
      }
      function Vc(e, n, t, i) {
        return En(e, function(o, f, h) {
          n(i, o, t(o), h);
        }), i;
      }
      function su(e, n) {
        return e && Ze(n, ce(n), e);
      }
      function Gc(e, n) {
        return e && Ze(n, Oe(n), e);
      }
      function sn(e, n, t) {
        n == "__proto__" && Jt ? Jt(e, n, {
          configurable: !0,
          enumerable: !0,
          value: t,
          writable: !0
        }) : e[n] = t;
      }
      function ci(e, n) {
        for (var t = -1, i = n.length, o = v(i), f = e == null; ++t < i; )
          o[t] = f ? r : qi(e, n[t]);
        return o;
      }
      function Sn(e, n, t) {
        return e === e && (t !== r && (e = e <= t ? e : t), n !== r && (e = e >= n ? e : n)), e;
      }
      function ke(e, n, t, i, o, f) {
        var h, p = n & Y, g = n & X, m = n & fe;
        if (t && (h = o ? t(e, i, o, f) : t(e)), h !== r)
          return h;
        if (!ne(e))
          return e;
        var x = B(e);
        if (x) {
          if (h = Dl(e), !p)
            return ye(e, h);
        } else {
          var A = ve(e), y = A == Rt || A == os;
          if (An(e))
            return Cu(e, p);
          if (A == nn || A == Fn || y && !o) {
            if (h = g || y ? {} : Ju(e), !p)
              return g ? ml(e, Gc(h, e)) : El(e, su(h, e));
          } else {
            if (!Z[A])
              return o ? e : {};
            h = bl(e, A, p);
          }
        }
        f || (f = new He());
        var w = f.get(e);
        if (w)
          return w;
        f.set(e, h), yo(e) ? e.forEach(function(b) {
          h.add(ke(b, n, t, b, e, f));
        }) : Ao(e) && e.forEach(function(b, V) {
          h.set(V, ke(b, n, t, V, e, f));
        });
        var D = m ? g ? Di : Ci : g ? Oe : ce, U = x ? r : D(e);
        return Be(U || e, function(b, V) {
          U && (V = b, b = e[V]), dt(h, V, ke(b, n, t, V, e, f));
        }), h;
      }
      function $c(e) {
        var n = ce(e);
        return function(t) {
          return uu(t, e, n);
        };
      }
      function uu(e, n, t) {
        var i = t.length;
        if (e == null)
          return !i;
        for (e = Q(e); i--; ) {
          var o = t[i], f = n[o], h = e[o];
          if (h === r && !(o in e) || !f(h))
            return !1;
        }
        return !0;
      }
      function ou(e, n, t) {
        if (typeof e != "function")
          throw new Me(I);
        return Tt(function() {
          e.apply(r, t);
        }, n);
      }
      function gt(e, n, t, i) {
        var o = -1, f = Mt, h = !0, p = e.length, g = [], m = n.length;
        if (!p)
          return g;
        t && (n = ee(n, Ce(t))), i ? (f = Qr, h = !1) : n.length >= c && (f = at, h = !1, n = new wn(n));
        e:
          for (; ++o < p; ) {
            var x = e[o], A = t == null ? x : t(x);
            if (x = i || x !== 0 ? x : 0, h && A === A) {
              for (var y = m; y--; )
                if (n[y] === A)
                  continue e;
              g.push(x);
            } else f(n, A, i) || g.push(x);
          }
        return g;
      }
      var En = Fu(Ke), au = Fu(hi, !0);
      function qc(e, n) {
        var t = !0;
        return En(e, function(i, o, f) {
          return t = !!n(i, o, f), t;
        }), t;
      }
      function nr(e, n, t) {
        for (var i = -1, o = e.length; ++i < o; ) {
          var f = e[i], h = n(f);
          if (h != null && (p === r ? h === h && !be(h) : t(h, p)))
            var p = h, g = f;
        }
        return g;
      }
      function Yc(e, n, t, i) {
        var o = e.length;
        for (t = M(t), t < 0 && (t = -t > o ? 0 : o + t), i = i === r || i > o ? o : M(i), i < 0 && (i += o), i = t > i ? 0 : Oo(i); t < i; )
          e[t++] = n;
        return e;
      }
      function fu(e, n) {
        var t = [];
        return En(e, function(i, o, f) {
          n(i, o, f) && t.push(i);
        }), t;
      }
      function de(e, n, t, i, o) {
        var f = -1, h = e.length;
        for (t || (t = Ll), o || (o = []); ++f < h; ) {
          var p = e[f];
          n > 0 && t(p) ? n > 1 ? de(p, n - 1, t, i, o) : gn(o, p) : i || (o[o.length] = p);
        }
        return o;
      }
      var li = Pu(), cu = Pu(!0);
      function Ke(e, n) {
        return e && li(e, n, ce);
      }
      function hi(e, n) {
        return e && cu(e, n, ce);
      }
      function tr(e, n) {
        return dn(n, function(t) {
          return fn(e[t]);
        });
      }
      function Cn(e, n) {
        n = xn(n, e);
        for (var t = 0, i = n.length; e != null && t < i; )
          e = e[je(n[t++])];
        return t && t == i ? e : r;
      }
      function lu(e, n, t) {
        var i = n(e);
        return B(e) ? i : gn(i, t(e));
      }
      function xe(e) {
        return e == null ? e === r ? ma : va : Nn && Nn in Q(e) ? wl(e) : Wl(e);
      }
      function pi(e, n) {
        return e > n;
      }
      function Hc(e, n) {
        return e != null && J.call(e, n);
      }
      function zc(e, n) {
        return e != null && n in Q(e);
      }
      function Jc(e, n, t) {
        return e >= _e(n, t) && e < ae(n, t);
      }
      function di(e, n, t) {
        for (var i = t ? Qr : Mt, o = e[0].length, f = e.length, h = f, p = v(f), g = 1 / 0, m = []; h--; ) {
          var x = e[h];
          h && n && (x = ee(x, Ce(n))), g = _e(x.length, g), p[h] = !t && (n || o >= 120 && x.length >= 120) ? new wn(h && x) : r;
        }
        x = e[0];
        var A = -1, y = p[0];
        e:
          for (; ++A < o && m.length < g; ) {
            var w = x[A], D = n ? n(w) : w;
            if (w = t || w !== 0 ? w : 0, !(y ? at(y, D) : i(m, D, t))) {
              for (h = f; --h; ) {
                var U = p[h];
                if (!(U ? at(U, D) : i(e[h], D, t)))
                  continue e;
              }
              y && y.push(D), m.push(w);
            }
          }
        return m;
      }
      function Xc(e, n, t, i) {
        return Ke(e, function(o, f, h) {
          n(i, t(o), f, h);
        }), i;
      }
      function _t(e, n, t) {
        n = xn(n, e), e = Zu(e, n);
        var i = e == null ? e : e[je(Ve(n))];
        return i == null ? r : Se(i, e, t);
      }
      function hu(e) {
        return te(e) && xe(e) == Fn;
      }
      function Qc(e) {
        return te(e) && xe(e) == ot;
      }
      function Kc(e) {
        return te(e) && xe(e) == tt;
      }
      function vt(e, n, t, i, o) {
        return e === n ? !0 : e == null || n == null || !te(e) && !te(n) ? e !== e && n !== n : Zc(e, n, t, i, vt, o);
      }
      function Zc(e, n, t, i, o, f) {
        var h = B(e), p = B(n), g = h ? Dt : ve(e), m = p ? Dt : ve(n);
        g = g == Fn ? nn : g, m = m == Fn ? nn : m;
        var x = g == nn, A = m == nn, y = g == m;
        if (y && An(e)) {
          if (!An(n))
            return !1;
          h = !0, x = !1;
        }
        if (y && !x)
          return f || (f = new He()), h || Jn(e) ? Yu(e, n, t, i, o, f) : Nl(e, n, g, t, i, o, f);
        if (!(t & K)) {
          var w = x && J.call(e, "__wrapped__"), D = A && J.call(n, "__wrapped__");
          if (w || D) {
            var U = w ? e.value() : e, b = D ? n.value() : n;
            return f || (f = new He()), o(U, b, t, i, f);
          }
        }
        return y ? (f || (f = new He()), Ol(e, n, t, i, o, f)) : !1;
      }
      function jc(e) {
        return te(e) && ve(e) == $e;
      }
      function gi(e, n, t, i) {
        var o = t.length, f = o, h = !i;
        if (e == null)
          return !f;
        for (e = Q(e); o--; ) {
          var p = t[o];
          if (h && p[2] ? p[1] !== e[p[0]] : !(p[0] in e))
            return !1;
        }
        for (; ++o < f; ) {
          p = t[o];
          var g = p[0], m = e[g], x = p[1];
          if (h && p[2]) {
            if (m === r && !(g in e))
              return !1;
          } else {
            var A = new He();
            if (i)
              var y = i(m, x, g, e, n, A);
            if (!(y === r ? vt(x, m, K | Ee, i, A) : y))
              return !1;
          }
        }
        return !0;
      }
      function pu(e) {
        if (!ne(e) || Pl(e))
          return !1;
        var n = fn(e) ? jf : Ga;
        return n.test(bn(e));
      }
      function el(e) {
        return te(e) && xe(e) == it;
      }
      function nl(e) {
        return te(e) && ve(e) == qe;
      }
      function tl(e) {
        return te(e) && mr(e.length) && !!j[xe(e)];
      }
      function du(e) {
        return typeof e == "function" ? e : e == null ? we : typeof e == "object" ? B(e) ? vu(e[0], e[1]) : _u(e) : Mo(e);
      }
      function _i(e) {
        if (!xt(e))
          return sc(e);
        var n = [];
        for (var t in Q(e))
          J.call(e, t) && t != "constructor" && n.push(t);
        return n;
      }
      function rl(e) {
        if (!ne(e))
          return kl(e);
        var n = xt(e), t = [];
        for (var i in e)
          i == "constructor" && (n || !J.call(e, i)) || t.push(i);
        return t;
      }
      function vi(e, n) {
        return e < n;
      }
      function gu(e, n) {
        var t = -1, i = Ne(e) ? v(e.length) : [];
        return En(e, function(o, f, h) {
          i[++t] = n(o, f, h);
        }), i;
      }
      function _u(e) {
        var n = Ri(e);
        return n.length == 1 && n[0][2] ? Qu(n[0][0], n[0][1]) : function(t) {
          return t === e || gi(t, e, n);
        };
      }
      function vu(e, n) {
        return Fi(e) && Xu(n) ? Qu(je(e), n) : function(t) {
          var i = qi(t, e);
          return i === r && i === n ? Yi(t, e) : vt(n, i, K | Ee);
        };
      }
      function rr(e, n, t, i, o) {
        e !== n && li(n, function(f, h) {
          if (o || (o = new He()), ne(f))
            il(e, n, h, t, rr, i, o);
          else {
            var p = i ? i(Bi(e, h), f, h + "", e, n, o) : r;
            p === r && (p = f), fi(e, h, p);
          }
        }, Oe);
      }
      function il(e, n, t, i, o, f, h) {
        var p = Bi(e, t), g = Bi(n, t), m = h.get(g);
        if (m) {
          fi(e, t, m);
          return;
        }
        var x = f ? f(p, g, t + "", e, n, h) : r, A = x === r;
        if (A) {
          var y = B(g), w = !y && An(g), D = !y && !w && Jn(g);
          x = g, y || w || D ? B(p) ? x = p : re(p) ? x = ye(p) : w ? (A = !1, x = Cu(g, !0)) : D ? (A = !1, x = Du(g, !0)) : x = [] : At(g) || Rn(g) ? (x = p, Rn(p) ? x = wo(p) : (!ne(p) || fn(p)) && (x = Ju(g))) : A = !1;
        }
        A && (h.set(g, x), o(x, g, i, f, h), h.delete(g)), fi(e, t, x);
      }
      function Eu(e, n) {
        var t = e.length;
        if (t)
          return n += n < 0 ? t : 0, an(n, t) ? e[n] : r;
      }
      function mu(e, n, t) {
        n.length ? n = ee(n, function(f) {
          return B(f) ? function(h) {
            return Cn(h, f.length === 1 ? f[0] : f);
          } : f;
        }) : n = [we];
        var i = -1;
        n = ee(n, Ce(C()));
        var o = gu(e, function(f, h, p) {
          var g = ee(n, function(m) {
            return m(f);
          });
          return { criteria: g, index: ++i, value: f };
        });
        return bf(o, function(f, h) {
          return vl(f, h, t);
        });
      }
      function sl(e, n) {
        return xu(e, n, function(t, i) {
          return Yi(e, i);
        });
      }
      function xu(e, n, t) {
        for (var i = -1, o = n.length, f = {}; ++i < o; ) {
          var h = n[i], p = Cn(e, h);
          t(p, h) && Et(f, xn(h, e), p);
        }
        return f;
      }
      function ul(e) {
        return function(n) {
          return Cn(n, e);
        };
      }
      function Ei(e, n, t, i) {
        var o = i ? Df : Mn, f = -1, h = n.length, p = e;
        for (e === n && (n = ye(n)), t && (p = ee(e, Ce(t))); ++f < h; )
          for (var g = 0, m = n[f], x = t ? t(m) : m; (g = o(p, x, g, i)) > -1; )
            p !== e && zt.call(p, g, 1), zt.call(e, g, 1);
        return e;
      }
      function Tu(e, n) {
        for (var t = e ? n.length : 0, i = t - 1; t--; ) {
          var o = n[t];
          if (t == i || o !== f) {
            var f = o;
            an(o) ? zt.call(e, o, 1) : Ai(e, o);
          }
        }
        return e;
      }
      function mi(e, n) {
        return e + Qt(nu() * (n - e + 1));
      }
      function ol(e, n, t, i) {
        for (var o = -1, f = ae(Xt((n - e) / (t || 1)), 0), h = v(f); f--; )
          h[i ? f : ++o] = e, e += t;
        return h;
      }
      function xi(e, n) {
        var t = "";
        if (!e || n < 1 || n > pn)
          return t;
        do
          n % 2 && (t += e), n = Qt(n / 2), n && (e += e);
        while (n);
        return t;
      }
      function W(e, n) {
        return Mi(Ku(e, n, we), e + "");
      }
      function al(e) {
        return iu(Xn(e));
      }
      function fl(e, n) {
        var t = Xn(e);
        return pr(t, Sn(n, 0, t.length));
      }
      function Et(e, n, t, i) {
        if (!ne(e))
          return e;
        n = xn(n, e);
        for (var o = -1, f = n.length, h = f - 1, p = e; p != null && ++o < f; ) {
          var g = je(n[o]), m = t;
          if (g === "__proto__" || g === "constructor" || g === "prototype")
            return e;
          if (o != h) {
            var x = p[g];
            m = i ? i(x, g, p) : r, m === r && (m = ne(x) ? x : an(n[o + 1]) ? [] : {});
          }
          dt(p, g, m), p = p[g];
        }
        return e;
      }
      var Au = Kt ? function(e, n) {
        return Kt.set(e, n), e;
      } : we, cl = Jt ? function(e, n) {
        return Jt(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: zi(n),
          writable: !0
        });
      } : we;
      function ll(e) {
        return pr(Xn(e));
      }
      function We(e, n, t) {
        var i = -1, o = e.length;
        n < 0 && (n = -n > o ? 0 : o + n), t = t > o ? o : t, t < 0 && (t += o), o = n > t ? 0 : t - n >>> 0, n >>>= 0;
        for (var f = v(o); ++i < o; )
          f[i] = e[i + n];
        return f;
      }
      function hl(e, n) {
        var t;
        return En(e, function(i, o, f) {
          return t = n(i, o, f), !t;
        }), !!t;
      }
      function ir(e, n, t) {
        var i = 0, o = e == null ? i : e.length;
        if (typeof n == "number" && n === n && o <= pa) {
          for (; i < o; ) {
            var f = i + o >>> 1, h = e[f];
            h !== null && !be(h) && (t ? h <= n : h < n) ? i = f + 1 : o = f;
          }
          return o;
        }
        return Ti(e, n, we, t);
      }
      function Ti(e, n, t, i) {
        var o = 0, f = e == null ? 0 : e.length;
        if (f === 0)
          return 0;
        n = t(n);
        for (var h = n !== n, p = n === null, g = be(n), m = n === r; o < f; ) {
          var x = Qt((o + f) / 2), A = t(e[x]), y = A !== r, w = A === null, D = A === A, U = be(A);
          if (h)
            var b = i || D;
          else m ? b = D && (i || y) : p ? b = D && y && (i || !w) : g ? b = D && y && !w && (i || !U) : w || U ? b = !1 : b = i ? A <= n : A < n;
          b ? o = x + 1 : f = x;
        }
        return _e(f, ha);
      }
      function Iu(e, n) {
        for (var t = -1, i = e.length, o = 0, f = []; ++t < i; ) {
          var h = e[t], p = n ? n(h) : h;
          if (!t || !ze(p, g)) {
            var g = p;
            f[o++] = h === 0 ? 0 : h;
          }
        }
        return f;
      }
      function yu(e) {
        return typeof e == "number" ? e : be(e) ? Ct : +e;
      }
      function De(e) {
        if (typeof e == "string")
          return e;
        if (B(e))
          return ee(e, De) + "";
        if (be(e))
          return tu ? tu.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -In ? "-0" : n;
      }
      function mn(e, n, t) {
        var i = -1, o = Mt, f = e.length, h = !0, p = [], g = p;
        if (t)
          h = !1, o = Qr;
        else if (f >= c) {
          var m = n ? null : Il(e);
          if (m)
            return kt(m);
          h = !1, o = at, g = new wn();
        } else
          g = n ? [] : p;
        e:
          for (; ++i < f; ) {
            var x = e[i], A = n ? n(x) : x;
            if (x = t || x !== 0 ? x : 0, h && A === A) {
              for (var y = g.length; y--; )
                if (g[y] === A)
                  continue e;
              n && g.push(A), p.push(x);
            } else o(g, A, t) || (g !== p && g.push(A), p.push(x));
          }
        return p;
      }
      function Ai(e, n) {
        return n = xn(n, e), e = Zu(e, n), e == null || delete e[je(Ve(n))];
      }
      function Nu(e, n, t, i) {
        return Et(e, n, t(Cn(e, n)), i);
      }
      function sr(e, n, t, i) {
        for (var o = e.length, f = i ? o : -1; (i ? f-- : ++f < o) && n(e[f], f, e); )
          ;
        return t ? We(e, i ? 0 : f, i ? f + 1 : o) : We(e, i ? f + 1 : 0, i ? o : f);
      }
      function Ou(e, n) {
        var t = e;
        return t instanceof G && (t = t.value()), Kr(n, function(i, o) {
          return o.func.apply(o.thisArg, gn([i], o.args));
        }, t);
      }
      function Ii(e, n, t) {
        var i = e.length;
        if (i < 2)
          return i ? mn(e[0]) : [];
        for (var o = -1, f = v(i); ++o < i; )
          for (var h = e[o], p = -1; ++p < i; )
            p != o && (f[o] = gt(f[o] || h, e[p], n, t));
        return mn(de(f, 1), n, t);
      }
      function wu(e, n, t) {
        for (var i = -1, o = e.length, f = n.length, h = {}; ++i < o; ) {
          var p = i < f ? n[i] : r;
          t(h, e[i], p);
        }
        return h;
      }
      function yi(e) {
        return re(e) ? e : [];
      }
      function Ni(e) {
        return typeof e == "function" ? e : we;
      }
      function xn(e, n) {
        return B(e) ? e : Fi(e, n) ? [e] : to(z(e));
      }
      var pl = W;
      function Tn(e, n, t) {
        var i = e.length;
        return t = t === r ? i : t, !n && t >= i ? e : We(e, n, t);
      }
      var Su = ec || function(e) {
        return pe.clearTimeout(e);
      };
      function Cu(e, n) {
        if (n)
          return e.slice();
        var t = e.length, i = Qs ? Qs(t) : new e.constructor(t);
        return e.copy(i), i;
      }
      function Oi(e) {
        var n = new e.constructor(e.byteLength);
        return new Yt(n).set(new Yt(e)), n;
      }
      function dl(e, n) {
        var t = n ? Oi(e.buffer) : e.buffer;
        return new e.constructor(t, e.byteOffset, e.byteLength);
      }
      function gl(e) {
        var n = new e.constructor(e.source, hs.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function _l(e) {
        return pt ? Q(pt.call(e)) : {};
      }
      function Du(e, n) {
        var t = n ? Oi(e.buffer) : e.buffer;
        return new e.constructor(t, e.byteOffset, e.length);
      }
      function bu(e, n) {
        if (e !== n) {
          var t = e !== r, i = e === null, o = e === e, f = be(e), h = n !== r, p = n === null, g = n === n, m = be(n);
          if (!p && !m && !f && e > n || f && h && g && !p && !m || i && h && g || !t && g || !o)
            return 1;
          if (!i && !f && !m && e < n || m && t && o && !i && !f || p && t && o || !h && o || !g)
            return -1;
        }
        return 0;
      }
      function vl(e, n, t) {
        for (var i = -1, o = e.criteria, f = n.criteria, h = o.length, p = t.length; ++i < h; ) {
          var g = bu(o[i], f[i]);
          if (g) {
            if (i >= p)
              return g;
            var m = t[i];
            return g * (m == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function Ru(e, n, t, i) {
        for (var o = -1, f = e.length, h = t.length, p = -1, g = n.length, m = ae(f - h, 0), x = v(g + m), A = !i; ++p < g; )
          x[p] = n[p];
        for (; ++o < h; )
          (A || o < f) && (x[t[o]] = e[o]);
        for (; m--; )
          x[p++] = e[o++];
        return x;
      }
      function Lu(e, n, t, i) {
        for (var o = -1, f = e.length, h = -1, p = t.length, g = -1, m = n.length, x = ae(f - p, 0), A = v(x + m), y = !i; ++o < x; )
          A[o] = e[o];
        for (var w = o; ++g < m; )
          A[w + g] = n[g];
        for (; ++h < p; )
          (y || o < f) && (A[w + t[h]] = e[o++]);
        return A;
      }
      function ye(e, n) {
        var t = -1, i = e.length;
        for (n || (n = v(i)); ++t < i; )
          n[t] = e[t];
        return n;
      }
      function Ze(e, n, t, i) {
        var o = !t;
        t || (t = {});
        for (var f = -1, h = n.length; ++f < h; ) {
          var p = n[f], g = i ? i(t[p], e[p], p, t, e) : r;
          g === r && (g = e[p]), o ? sn(t, p, g) : dt(t, p, g);
        }
        return t;
      }
      function El(e, n) {
        return Ze(e, Li(e), n);
      }
      function ml(e, n) {
        return Ze(e, Hu(e), n);
      }
      function ur(e, n) {
        return function(t, i) {
          var o = B(t) ? yf : Vc, f = n ? n() : {};
          return o(t, e, C(i, 2), f);
        };
      }
      function Yn(e) {
        return W(function(n, t) {
          var i = -1, o = t.length, f = o > 1 ? t[o - 1] : r, h = o > 2 ? t[2] : r;
          for (f = e.length > 3 && typeof f == "function" ? (o--, f) : r, h && Te(t[0], t[1], h) && (f = o < 3 ? r : f, o = 1), n = Q(n); ++i < o; ) {
            var p = t[i];
            p && e(n, p, i, f);
          }
          return n;
        });
      }
      function Fu(e, n) {
        return function(t, i) {
          if (t == null)
            return t;
          if (!Ne(t))
            return e(t, i);
          for (var o = t.length, f = n ? o : -1, h = Q(t); (n ? f-- : ++f < o) && i(h[f], f, h) !== !1; )
            ;
          return t;
        };
      }
      function Pu(e) {
        return function(n, t, i) {
          for (var o = -1, f = Q(n), h = i(n), p = h.length; p--; ) {
            var g = h[e ? p : ++o];
            if (t(f[g], g, f) === !1)
              break;
          }
          return n;
        };
      }
      function xl(e, n, t) {
        var i = n & ge, o = mt(e);
        function f() {
          var h = this && this !== pe && this instanceof f ? o : e;
          return h.apply(i ? t : this, arguments);
        }
        return f;
      }
      function Bu(e) {
        return function(n) {
          n = z(n);
          var t = Un(n) ? Ye(n) : r, i = t ? t[0] : n.charAt(0), o = t ? Tn(t, 1).join("") : n.slice(1);
          return i[e]() + o;
        };
      }
      function Hn(e) {
        return function(n) {
          return Kr(Po(Fo(n).replace(cf, "")), e, "");
        };
      }
      function mt(e) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new e();
            case 1:
              return new e(n[0]);
            case 2:
              return new e(n[0], n[1]);
            case 3:
              return new e(n[0], n[1], n[2]);
            case 4:
              return new e(n[0], n[1], n[2], n[3]);
            case 5:
              return new e(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var t = qn(e.prototype), i = e.apply(t, n);
          return ne(i) ? i : t;
        };
      }
      function Tl(e, n, t) {
        var i = mt(e);
        function o() {
          for (var f = arguments.length, h = v(f), p = f, g = zn(o); p--; )
            h[p] = arguments[p];
          var m = f < 3 && h[0] !== g && h[f - 1] !== g ? [] : _n(h, g);
          if (f -= m.length, f < t)
            return Vu(
              e,
              n,
              or,
              o.placeholder,
              r,
              h,
              m,
              r,
              r,
              t - f
            );
          var x = this && this !== pe && this instanceof o ? i : e;
          return Se(x, this, h);
        }
        return o;
      }
      function Mu(e) {
        return function(n, t, i) {
          var o = Q(n);
          if (!Ne(n)) {
            var f = C(t, 3);
            n = ce(n), t = function(p) {
              return f(o[p], p, o);
            };
          }
          var h = e(n, t, i);
          return h > -1 ? o[f ? n[h] : h] : r;
        };
      }
      function Uu(e) {
        return on(function(n) {
          var t = n.length, i = t, o = Ue.prototype.thru;
          for (e && n.reverse(); i--; ) {
            var f = n[i];
            if (typeof f != "function")
              throw new Me(I);
            if (o && !h && lr(f) == "wrapper")
              var h = new Ue([], !0);
          }
          for (i = h ? i : t; ++i < t; ) {
            f = n[i];
            var p = lr(f), g = p == "wrapper" ? bi(f) : r;
            g && Pi(g[0]) && g[1] == (Fe | ue | Ie | et) && !g[4].length && g[9] == 1 ? h = h[lr(g[0])].apply(h, g[3]) : h = f.length == 1 && Pi(f) ? h[p]() : h.thru(f);
          }
          return function() {
            var m = arguments, x = m[0];
            if (h && m.length == 1 && B(x))
              return h.plant(x).value();
            for (var A = 0, y = t ? n[A].apply(this, m) : x; ++A < t; )
              y = n[A].call(this, y);
            return y;
          };
        });
      }
      function or(e, n, t, i, o, f, h, p, g, m) {
        var x = n & Fe, A = n & ge, y = n & he, w = n & (ue | me), D = n & br, U = y ? r : mt(e);
        function b() {
          for (var V = arguments.length, q = v(V), Re = V; Re--; )
            q[Re] = arguments[Re];
          if (w)
            var Ae = zn(b), Le = Lf(q, Ae);
          if (i && (q = Ru(q, i, o, w)), f && (q = Lu(q, f, h, w)), V -= Le, w && V < m) {
            var ie = _n(q, Ae);
            return Vu(
              e,
              n,
              or,
              b.placeholder,
              t,
              q,
              ie,
              p,
              g,
              m - V
            );
          }
          var Je = A ? t : this, ln = y ? Je[e] : e;
          return V = q.length, p ? q = Vl(q, p) : D && V > 1 && q.reverse(), x && g < V && (q.length = g), this && this !== pe && this instanceof b && (ln = U || mt(ln)), ln.apply(Je, q);
        }
        return b;
      }
      function ku(e, n) {
        return function(t, i) {
          return Xc(t, e, n(i), {});
        };
      }
      function ar(e, n) {
        return function(t, i) {
          var o;
          if (t === r && i === r)
            return n;
          if (t !== r && (o = t), i !== r) {
            if (o === r)
              return i;
            typeof t == "string" || typeof i == "string" ? (t = De(t), i = De(i)) : (t = yu(t), i = yu(i)), o = e(t, i);
          }
          return o;
        };
      }
      function wi(e) {
        return on(function(n) {
          return n = ee(n, Ce(C())), W(function(t) {
            var i = this;
            return e(n, function(o) {
              return Se(o, i, t);
            });
          });
        });
      }
      function fr(e, n) {
        n = n === r ? " " : De(n);
        var t = n.length;
        if (t < 2)
          return t ? xi(n, e) : n;
        var i = xi(n, Xt(e / kn(n)));
        return Un(n) ? Tn(Ye(i), 0, e).join("") : i.slice(0, e);
      }
      function Al(e, n, t, i) {
        var o = n & ge, f = mt(e);
        function h() {
          for (var p = -1, g = arguments.length, m = -1, x = i.length, A = v(x + g), y = this && this !== pe && this instanceof h ? f : e; ++m < x; )
            A[m] = i[m];
          for (; g--; )
            A[m++] = arguments[++p];
          return Se(y, o ? t : this, A);
        }
        return h;
      }
      function Wu(e) {
        return function(n, t, i) {
          return i && typeof i != "number" && Te(n, t, i) && (t = i = r), n = cn(n), t === r ? (t = n, n = 0) : t = cn(t), i = i === r ? n < t ? 1 : -1 : cn(i), ol(n, t, i, e);
        };
      }
      function cr(e) {
        return function(n, t) {
          return typeof n == "string" && typeof t == "string" || (n = Ge(n), t = Ge(t)), e(n, t);
        };
      }
      function Vu(e, n, t, i, o, f, h, p, g, m) {
        var x = n & ue, A = x ? h : r, y = x ? r : h, w = x ? f : r, D = x ? r : f;
        n |= x ? Ie : en, n &= ~(x ? en : Ie), n & jn || (n &= ~(ge | he));
        var U = [
          e,
          n,
          o,
          w,
          A,
          D,
          y,
          p,
          g,
          m
        ], b = t.apply(r, U);
        return Pi(e) && ju(b, U), b.placeholder = i, eo(b, e, n);
      }
      function Si(e) {
        var n = oe[e];
        return function(t, i) {
          if (t = Ge(t), i = i == null ? 0 : _e(M(i), 292), i && eu(t)) {
            var o = (z(t) + "e").split("e"), f = n(o[0] + "e" + (+o[1] + i));
            return o = (z(f) + "e").split("e"), +(o[0] + "e" + (+o[1] - i));
          }
          return n(t);
        };
      }
      var Il = Gn && 1 / kt(new Gn([, -0]))[1] == In ? function(e) {
        return new Gn(e);
      } : Qi;
      function Gu(e) {
        return function(n) {
          var t = ve(n);
          return t == $e ? ii(n) : t == qe ? Wf(n) : Rf(n, e(n));
        };
      }
      function un(e, n, t, i, o, f, h, p) {
        var g = n & he;
        if (!g && typeof e != "function")
          throw new Me(I);
        var m = i ? i.length : 0;
        if (m || (n &= ~(Ie | en), i = o = r), h = h === r ? h : ae(M(h), 0), p = p === r ? p : M(p), m -= o ? o.length : 0, n & en) {
          var x = i, A = o;
          i = o = r;
        }
        var y = g ? r : bi(e), w = [
          e,
          n,
          t,
          i,
          o,
          x,
          A,
          f,
          h,
          p
        ];
        if (y && Ul(w, y), e = w[0], n = w[1], t = w[2], i = w[3], o = w[4], p = w[9] = w[9] === r ? g ? 0 : e.length : ae(w[9] - m, 0), !p && n & (ue | me) && (n &= ~(ue | me)), !n || n == ge)
          var D = xl(e, n, t);
        else n == ue || n == me ? D = Tl(e, n, p) : (n == Ie || n == (ge | Ie)) && !o.length ? D = Al(e, n, t, i) : D = or.apply(r, w);
        var U = y ? Au : ju;
        return eo(U(D, w), e, n);
      }
      function $u(e, n, t, i) {
        return e === r || ze(e, Vn[t]) && !J.call(i, t) ? n : e;
      }
      function qu(e, n, t, i, o, f) {
        return ne(e) && ne(n) && (f.set(n, e), rr(e, n, r, qu, f), f.delete(n)), e;
      }
      function yl(e) {
        return At(e) ? r : e;
      }
      function Yu(e, n, t, i, o, f) {
        var h = t & K, p = e.length, g = n.length;
        if (p != g && !(h && g > p))
          return !1;
        var m = f.get(e), x = f.get(n);
        if (m && x)
          return m == n && x == e;
        var A = -1, y = !0, w = t & Ee ? new wn() : r;
        for (f.set(e, n), f.set(n, e); ++A < p; ) {
          var D = e[A], U = n[A];
          if (i)
            var b = h ? i(U, D, A, n, e, f) : i(D, U, A, e, n, f);
          if (b !== r) {
            if (b)
              continue;
            y = !1;
            break;
          }
          if (w) {
            if (!Zr(n, function(V, q) {
              if (!at(w, q) && (D === V || o(D, V, t, i, f)))
                return w.push(q);
            })) {
              y = !1;
              break;
            }
          } else if (!(D === U || o(D, U, t, i, f))) {
            y = !1;
            break;
          }
        }
        return f.delete(e), f.delete(n), y;
      }
      function Nl(e, n, t, i, o, f, h) {
        switch (t) {
          case Pn:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case ot:
            return !(e.byteLength != n.byteLength || !f(new Yt(e), new Yt(n)));
          case nt:
          case tt:
          case rt:
            return ze(+e, +n);
          case bt:
            return e.name == n.name && e.message == n.message;
          case it:
          case st:
            return e == n + "";
          case $e:
            var p = ii;
          case qe:
            var g = i & K;
            if (p || (p = kt), e.size != n.size && !g)
              return !1;
            var m = h.get(e);
            if (m)
              return m == n;
            i |= Ee, h.set(e, n);
            var x = Yu(p(e), p(n), i, o, f, h);
            return h.delete(e), x;
          case Lt:
            if (pt)
              return pt.call(e) == pt.call(n);
        }
        return !1;
      }
      function Ol(e, n, t, i, o, f) {
        var h = t & K, p = Ci(e), g = p.length, m = Ci(n), x = m.length;
        if (g != x && !h)
          return !1;
        for (var A = g; A--; ) {
          var y = p[A];
          if (!(h ? y in n : J.call(n, y)))
            return !1;
        }
        var w = f.get(e), D = f.get(n);
        if (w && D)
          return w == n && D == e;
        var U = !0;
        f.set(e, n), f.set(n, e);
        for (var b = h; ++A < g; ) {
          y = p[A];
          var V = e[y], q = n[y];
          if (i)
            var Re = h ? i(q, V, y, n, e, f) : i(V, q, y, e, n, f);
          if (!(Re === r ? V === q || o(V, q, t, i, f) : Re)) {
            U = !1;
            break;
          }
          b || (b = y == "constructor");
        }
        if (U && !b) {
          var Ae = e.constructor, Le = n.constructor;
          Ae != Le && "constructor" in e && "constructor" in n && !(typeof Ae == "function" && Ae instanceof Ae && typeof Le == "function" && Le instanceof Le) && (U = !1);
        }
        return f.delete(e), f.delete(n), U;
      }
      function on(e) {
        return Mi(Ku(e, r, uo), e + "");
      }
      function Ci(e) {
        return lu(e, ce, Li);
      }
      function Di(e) {
        return lu(e, Oe, Hu);
      }
      var bi = Kt ? function(e) {
        return Kt.get(e);
      } : Qi;
      function lr(e) {
        for (var n = e.name + "", t = $n[n], i = J.call($n, n) ? t.length : 0; i--; ) {
          var o = t[i], f = o.func;
          if (f == null || f == e)
            return o.name;
        }
        return n;
      }
      function zn(e) {
        var n = J.call(a, "placeholder") ? a : e;
        return n.placeholder;
      }
      function C() {
        var e = a.iteratee || Ji;
        return e = e === Ji ? du : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function hr(e, n) {
        var t = e.__data__;
        return Fl(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
      }
      function Ri(e) {
        for (var n = ce(e), t = n.length; t--; ) {
          var i = n[t], o = e[i];
          n[t] = [i, o, Xu(o)];
        }
        return n;
      }
      function Dn(e, n) {
        var t = Mf(e, n);
        return pu(t) ? t : r;
      }
      function wl(e) {
        var n = J.call(e, Nn), t = e[Nn];
        try {
          e[Nn] = r;
          var i = !0;
        } catch {
        }
        var o = $t.call(e);
        return i && (n ? e[Nn] = t : delete e[Nn]), o;
      }
      var Li = ui ? function(e) {
        return e == null ? [] : (e = Q(e), dn(ui(e), function(n) {
          return Zs.call(e, n);
        }));
      } : Ki, Hu = ui ? function(e) {
        for (var n = []; e; )
          gn(n, Li(e)), e = Ht(e);
        return n;
      } : Ki, ve = xe;
      (oi && ve(new oi(new ArrayBuffer(1))) != Pn || ct && ve(new ct()) != $e || ai && ve(ai.resolve()) != as || Gn && ve(new Gn()) != qe || lt && ve(new lt()) != ut) && (ve = function(e) {
        var n = xe(e), t = n == nn ? e.constructor : r, i = t ? bn(t) : "";
        if (i)
          switch (i) {
            case fc:
              return Pn;
            case cc:
              return $e;
            case lc:
              return as;
            case hc:
              return qe;
            case pc:
              return ut;
          }
        return n;
      });
      function Sl(e, n, t) {
        for (var i = -1, o = t.length; ++i < o; ) {
          var f = t[i], h = f.size;
          switch (f.type) {
            case "drop":
              e += h;
              break;
            case "dropRight":
              n -= h;
              break;
            case "take":
              n = _e(n, e + h);
              break;
            case "takeRight":
              e = ae(e, n - h);
              break;
          }
        }
        return { start: e, end: n };
      }
      function Cl(e) {
        var n = e.match(Fa);
        return n ? n[1].split(Pa) : [];
      }
      function zu(e, n, t) {
        n = xn(n, e);
        for (var i = -1, o = n.length, f = !1; ++i < o; ) {
          var h = je(n[i]);
          if (!(f = e != null && t(e, h)))
            break;
          e = e[h];
        }
        return f || ++i != o ? f : (o = e == null ? 0 : e.length, !!o && mr(o) && an(h, o) && (B(e) || Rn(e)));
      }
      function Dl(e) {
        var n = e.length, t = new e.constructor(n);
        return n && typeof e[0] == "string" && J.call(e, "index") && (t.index = e.index, t.input = e.input), t;
      }
      function Ju(e) {
        return typeof e.constructor == "function" && !xt(e) ? qn(Ht(e)) : {};
      }
      function bl(e, n, t) {
        var i = e.constructor;
        switch (n) {
          case ot:
            return Oi(e);
          case nt:
          case tt:
            return new i(+e);
          case Pn:
            return dl(e, t);
          case Rr:
          case Lr:
          case Fr:
          case Pr:
          case Br:
          case Mr:
          case Ur:
          case kr:
          case Wr:
            return Du(e, t);
          case $e:
            return new i();
          case rt:
          case st:
            return new i(e);
          case it:
            return gl(e);
          case qe:
            return new i();
          case Lt:
            return _l(e);
        }
      }
      function Rl(e, n) {
        var t = n.length;
        if (!t)
          return e;
        var i = t - 1;
        return n[i] = (t > 1 ? "& " : "") + n[i], n = n.join(t > 2 ? ", " : " "), e.replace(La, `{
/* [wrapped with ` + n + `] */
`);
      }
      function Ll(e) {
        return B(e) || Rn(e) || !!(js && e && e[js]);
      }
      function an(e, n) {
        var t = typeof e;
        return n = n ?? pn, !!n && (t == "number" || t != "symbol" && qa.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function Te(e, n, t) {
        if (!ne(t))
          return !1;
        var i = typeof n;
        return (i == "number" ? Ne(t) && an(n, t.length) : i == "string" && n in t) ? ze(t[n], e) : !1;
      }
      function Fi(e, n) {
        if (B(e))
          return !1;
        var t = typeof e;
        return t == "number" || t == "symbol" || t == "boolean" || e == null || be(e) ? !0 : Ca.test(e) || !Sa.test(e) || n != null && e in Q(n);
      }
      function Fl(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function Pi(e) {
        var n = lr(e), t = a[n];
        if (typeof t != "function" || !(n in G.prototype))
          return !1;
        if (e === t)
          return !0;
        var i = bi(t);
        return !!i && e === i[0];
      }
      function Pl(e) {
        return !!Xs && Xs in e;
      }
      var Bl = Vt ? fn : Zi;
      function xt(e) {
        var n = e && e.constructor, t = typeof n == "function" && n.prototype || Vn;
        return e === t;
      }
      function Xu(e) {
        return e === e && !ne(e);
      }
      function Qu(e, n) {
        return function(t) {
          return t == null ? !1 : t[e] === n && (n !== r || e in Q(t));
        };
      }
      function Ml(e) {
        var n = vr(e, function(i) {
          return t.size === R && t.clear(), i;
        }), t = n.cache;
        return n;
      }
      function Ul(e, n) {
        var t = e[1], i = n[1], o = t | i, f = o < (ge | he | Fe), h = i == Fe && t == ue || i == Fe && t == et && e[7].length <= n[8] || i == (Fe | et) && n[7].length <= n[8] && t == ue;
        if (!(f || h))
          return e;
        i & ge && (e[2] = n[2], o |= t & ge ? 0 : jn);
        var p = n[3];
        if (p) {
          var g = e[3];
          e[3] = g ? Ru(g, p, n[4]) : p, e[4] = g ? _n(e[3], k) : n[4];
        }
        return p = n[5], p && (g = e[5], e[5] = g ? Lu(g, p, n[6]) : p, e[6] = g ? _n(e[5], k) : n[6]), p = n[7], p && (e[7] = p), i & Fe && (e[8] = e[8] == null ? n[8] : _e(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = o, e;
      }
      function kl(e) {
        var n = [];
        if (e != null)
          for (var t in Q(e))
            n.push(t);
        return n;
      }
      function Wl(e) {
        return $t.call(e);
      }
      function Ku(e, n, t) {
        return n = ae(n === r ? e.length - 1 : n, 0), function() {
          for (var i = arguments, o = -1, f = ae(i.length - n, 0), h = v(f); ++o < f; )
            h[o] = i[n + o];
          o = -1;
          for (var p = v(n + 1); ++o < n; )
            p[o] = i[o];
          return p[n] = t(h), Se(e, this, p);
        };
      }
      function Zu(e, n) {
        return n.length < 2 ? e : Cn(e, We(n, 0, -1));
      }
      function Vl(e, n) {
        for (var t = e.length, i = _e(n.length, t), o = ye(e); i--; ) {
          var f = n[i];
          e[i] = an(f, t) ? o[f] : r;
        }
        return e;
      }
      function Bi(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var ju = no(Au), Tt = tc || function(e, n) {
        return pe.setTimeout(e, n);
      }, Mi = no(cl);
      function eo(e, n, t) {
        var i = n + "";
        return Mi(e, Rl(i, Gl(Cl(i), t)));
      }
      function no(e) {
        var n = 0, t = 0;
        return function() {
          var i = uc(), o = aa - (i - t);
          if (t = i, o > 0) {
            if (++n >= oa)
              return arguments[0];
          } else
            n = 0;
          return e.apply(r, arguments);
        };
      }
      function pr(e, n) {
        var t = -1, i = e.length, o = i - 1;
        for (n = n === r ? i : n; ++t < n; ) {
          var f = mi(t, o), h = e[f];
          e[f] = e[t], e[t] = h;
        }
        return e.length = n, e;
      }
      var to = Ml(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(Da, function(t, i, o, f) {
          n.push(o ? f.replace(Ua, "$1") : i || t);
        }), n;
      });
      function je(e) {
        if (typeof e == "string" || be(e))
          return e;
        var n = e + "";
        return n == "0" && 1 / e == -In ? "-0" : n;
      }
      function bn(e) {
        if (e != null) {
          try {
            return Gt.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Gl(e, n) {
        return Be(da, function(t) {
          var i = "_." + t[0];
          n & t[1] && !Mt(e, i) && e.push(i);
        }), e.sort();
      }
      function ro(e) {
        if (e instanceof G)
          return e.clone();
        var n = new Ue(e.__wrapped__, e.__chain__);
        return n.__actions__ = ye(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function $l(e, n, t) {
        (t ? Te(e, n, t) : n === r) ? n = 1 : n = ae(M(n), 0);
        var i = e == null ? 0 : e.length;
        if (!i || n < 1)
          return [];
        for (var o = 0, f = 0, h = v(Xt(i / n)); o < i; )
          h[f++] = We(e, o, o += n);
        return h;
      }
      function ql(e) {
        for (var n = -1, t = e == null ? 0 : e.length, i = 0, o = []; ++n < t; ) {
          var f = e[n];
          f && (o[i++] = f);
        }
        return o;
      }
      function Yl() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = v(e - 1), t = arguments[0], i = e; i--; )
          n[i - 1] = arguments[i];
        return gn(B(t) ? ye(t) : [t], de(n, 1));
      }
      var Hl = W(function(e, n) {
        return re(e) ? gt(e, de(n, 1, re, !0)) : [];
      }), zl = W(function(e, n) {
        var t = Ve(n);
        return re(t) && (t = r), re(e) ? gt(e, de(n, 1, re, !0), C(t, 2)) : [];
      }), Jl = W(function(e, n) {
        var t = Ve(n);
        return re(t) && (t = r), re(e) ? gt(e, de(n, 1, re, !0), r, t) : [];
      });
      function Xl(e, n, t) {
        var i = e == null ? 0 : e.length;
        return i ? (n = t || n === r ? 1 : M(n), We(e, n < 0 ? 0 : n, i)) : [];
      }
      function Ql(e, n, t) {
        var i = e == null ? 0 : e.length;
        return i ? (n = t || n === r ? 1 : M(n), n = i - n, We(e, 0, n < 0 ? 0 : n)) : [];
      }
      function Kl(e, n) {
        return e && e.length ? sr(e, C(n, 3), !0, !0) : [];
      }
      function Zl(e, n) {
        return e && e.length ? sr(e, C(n, 3), !0) : [];
      }
      function jl(e, n, t, i) {
        var o = e == null ? 0 : e.length;
        return o ? (t && typeof t != "number" && Te(e, n, t) && (t = 0, i = o), Yc(e, n, t, i)) : [];
      }
      function io(e, n, t) {
        var i = e == null ? 0 : e.length;
        if (!i)
          return -1;
        var o = t == null ? 0 : M(t);
        return o < 0 && (o = ae(i + o, 0)), Ut(e, C(n, 3), o);
      }
      function so(e, n, t) {
        var i = e == null ? 0 : e.length;
        if (!i)
          return -1;
        var o = i - 1;
        return t !== r && (o = M(t), o = t < 0 ? ae(i + o, 0) : _e(o, i - 1)), Ut(e, C(n, 3), o, !0);
      }
      function uo(e) {
        var n = e == null ? 0 : e.length;
        return n ? de(e, 1) : [];
      }
      function eh(e) {
        var n = e == null ? 0 : e.length;
        return n ? de(e, In) : [];
      }
      function nh(e, n) {
        var t = e == null ? 0 : e.length;
        return t ? (n = n === r ? 1 : M(n), de(e, n)) : [];
      }
      function th(e) {
        for (var n = -1, t = e == null ? 0 : e.length, i = {}; ++n < t; ) {
          var o = e[n];
          i[o[0]] = o[1];
        }
        return i;
      }
      function oo(e) {
        return e && e.length ? e[0] : r;
      }
      function rh(e, n, t) {
        var i = e == null ? 0 : e.length;
        if (!i)
          return -1;
        var o = t == null ? 0 : M(t);
        return o < 0 && (o = ae(i + o, 0)), Mn(e, n, o);
      }
      function ih(e) {
        var n = e == null ? 0 : e.length;
        return n ? We(e, 0, -1) : [];
      }
      var sh = W(function(e) {
        var n = ee(e, yi);
        return n.length && n[0] === e[0] ? di(n) : [];
      }), uh = W(function(e) {
        var n = Ve(e), t = ee(e, yi);
        return n === Ve(t) ? n = r : t.pop(), t.length && t[0] === e[0] ? di(t, C(n, 2)) : [];
      }), oh = W(function(e) {
        var n = Ve(e), t = ee(e, yi);
        return n = typeof n == "function" ? n : r, n && t.pop(), t.length && t[0] === e[0] ? di(t, r, n) : [];
      });
      function ah(e, n) {
        return e == null ? "" : ic.call(e, n);
      }
      function Ve(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : r;
      }
      function fh(e, n, t) {
        var i = e == null ? 0 : e.length;
        if (!i)
          return -1;
        var o = i;
        return t !== r && (o = M(t), o = o < 0 ? ae(i + o, 0) : _e(o, i - 1)), n === n ? Gf(e, n, o) : Ut(e, Vs, o, !0);
      }
      function ch(e, n) {
        return e && e.length ? Eu(e, M(n)) : r;
      }
      var lh = W(ao);
      function ao(e, n) {
        return e && e.length && n && n.length ? Ei(e, n) : e;
      }
      function hh(e, n, t) {
        return e && e.length && n && n.length ? Ei(e, n, C(t, 2)) : e;
      }
      function ph(e, n, t) {
        return e && e.length && n && n.length ? Ei(e, n, r, t) : e;
      }
      var dh = on(function(e, n) {
        var t = e == null ? 0 : e.length, i = ci(e, n);
        return Tu(e, ee(n, function(o) {
          return an(o, t) ? +o : o;
        }).sort(bu)), i;
      });
      function gh(e, n) {
        var t = [];
        if (!(e && e.length))
          return t;
        var i = -1, o = [], f = e.length;
        for (n = C(n, 3); ++i < f; ) {
          var h = e[i];
          n(h, i, e) && (t.push(h), o.push(i));
        }
        return Tu(e, o), t;
      }
      function Ui(e) {
        return e == null ? e : ac.call(e);
      }
      function _h(e, n, t) {
        var i = e == null ? 0 : e.length;
        return i ? (t && typeof t != "number" && Te(e, n, t) ? (n = 0, t = i) : (n = n == null ? 0 : M(n), t = t === r ? i : M(t)), We(e, n, t)) : [];
      }
      function vh(e, n) {
        return ir(e, n);
      }
      function Eh(e, n, t) {
        return Ti(e, n, C(t, 2));
      }
      function mh(e, n) {
        var t = e == null ? 0 : e.length;
        if (t) {
          var i = ir(e, n);
          if (i < t && ze(e[i], n))
            return i;
        }
        return -1;
      }
      function xh(e, n) {
        return ir(e, n, !0);
      }
      function Th(e, n, t) {
        return Ti(e, n, C(t, 2), !0);
      }
      function Ah(e, n) {
        var t = e == null ? 0 : e.length;
        if (t) {
          var i = ir(e, n, !0) - 1;
          if (ze(e[i], n))
            return i;
        }
        return -1;
      }
      function Ih(e) {
        return e && e.length ? Iu(e) : [];
      }
      function yh(e, n) {
        return e && e.length ? Iu(e, C(n, 2)) : [];
      }
      function Nh(e) {
        var n = e == null ? 0 : e.length;
        return n ? We(e, 1, n) : [];
      }
      function Oh(e, n, t) {
        return e && e.length ? (n = t || n === r ? 1 : M(n), We(e, 0, n < 0 ? 0 : n)) : [];
      }
      function wh(e, n, t) {
        var i = e == null ? 0 : e.length;
        return i ? (n = t || n === r ? 1 : M(n), n = i - n, We(e, n < 0 ? 0 : n, i)) : [];
      }
      function Sh(e, n) {
        return e && e.length ? sr(e, C(n, 3), !1, !0) : [];
      }
      function Ch(e, n) {
        return e && e.length ? sr(e, C(n, 3)) : [];
      }
      var Dh = W(function(e) {
        return mn(de(e, 1, re, !0));
      }), bh = W(function(e) {
        var n = Ve(e);
        return re(n) && (n = r), mn(de(e, 1, re, !0), C(n, 2));
      }), Rh = W(function(e) {
        var n = Ve(e);
        return n = typeof n == "function" ? n : r, mn(de(e, 1, re, !0), r, n);
      });
      function Lh(e) {
        return e && e.length ? mn(e) : [];
      }
      function Fh(e, n) {
        return e && e.length ? mn(e, C(n, 2)) : [];
      }
      function Ph(e, n) {
        return n = typeof n == "function" ? n : r, e && e.length ? mn(e, r, n) : [];
      }
      function ki(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = dn(e, function(t) {
          if (re(t))
            return n = ae(t.length, n), !0;
        }), ti(n, function(t) {
          return ee(e, jr(t));
        });
      }
      function fo(e, n) {
        if (!(e && e.length))
          return [];
        var t = ki(e);
        return n == null ? t : ee(t, function(i) {
          return Se(n, r, i);
        });
      }
      var Bh = W(function(e, n) {
        return re(e) ? gt(e, n) : [];
      }), Mh = W(function(e) {
        return Ii(dn(e, re));
      }), Uh = W(function(e) {
        var n = Ve(e);
        return re(n) && (n = r), Ii(dn(e, re), C(n, 2));
      }), kh = W(function(e) {
        var n = Ve(e);
        return n = typeof n == "function" ? n : r, Ii(dn(e, re), r, n);
      }), Wh = W(ki);
      function Vh(e, n) {
        return wu(e || [], n || [], dt);
      }
      function Gh(e, n) {
        return wu(e || [], n || [], Et);
      }
      var $h = W(function(e) {
        var n = e.length, t = n > 1 ? e[n - 1] : r;
        return t = typeof t == "function" ? (e.pop(), t) : r, fo(e, t);
      });
      function co(e) {
        var n = a(e);
        return n.__chain__ = !0, n;
      }
      function qh(e, n) {
        return n(e), e;
      }
      function dr(e, n) {
        return n(e);
      }
      var Yh = on(function(e) {
        var n = e.length, t = n ? e[0] : 0, i = this.__wrapped__, o = function(f) {
          return ci(f, e);
        };
        return n > 1 || this.__actions__.length || !(i instanceof G) || !an(t) ? this.thru(o) : (i = i.slice(t, +t + (n ? 1 : 0)), i.__actions__.push({
          func: dr,
          args: [o],
          thisArg: r
        }), new Ue(i, this.__chain__).thru(function(f) {
          return n && !f.length && f.push(r), f;
        }));
      });
      function Hh() {
        return co(this);
      }
      function zh() {
        return new Ue(this.value(), this.__chain__);
      }
      function Jh() {
        this.__values__ === r && (this.__values__ = No(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? r : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function Xh() {
        return this;
      }
      function Qh(e) {
        for (var n, t = this; t instanceof jt; ) {
          var i = ro(t);
          i.__index__ = 0, i.__values__ = r, n ? o.__wrapped__ = i : n = i;
          var o = i;
          t = t.__wrapped__;
        }
        return o.__wrapped__ = e, n;
      }
      function Kh() {
        var e = this.__wrapped__;
        if (e instanceof G) {
          var n = e;
          return this.__actions__.length && (n = new G(this)), n = n.reverse(), n.__actions__.push({
            func: dr,
            args: [Ui],
            thisArg: r
          }), new Ue(n, this.__chain__);
        }
        return this.thru(Ui);
      }
      function Zh() {
        return Ou(this.__wrapped__, this.__actions__);
      }
      var jh = ur(function(e, n, t) {
        J.call(e, t) ? ++e[t] : sn(e, t, 1);
      });
      function ep(e, n, t) {
        var i = B(e) ? ks : qc;
        return t && Te(e, n, t) && (n = r), i(e, C(n, 3));
      }
      function np(e, n) {
        var t = B(e) ? dn : fu;
        return t(e, C(n, 3));
      }
      var tp = Mu(io), rp = Mu(so);
      function ip(e, n) {
        return de(gr(e, n), 1);
      }
      function sp(e, n) {
        return de(gr(e, n), In);
      }
      function up(e, n, t) {
        return t = t === r ? 1 : M(t), de(gr(e, n), t);
      }
      function lo(e, n) {
        var t = B(e) ? Be : En;
        return t(e, C(n, 3));
      }
      function ho(e, n) {
        var t = B(e) ? Nf : au;
        return t(e, C(n, 3));
      }
      var op = ur(function(e, n, t) {
        J.call(e, t) ? e[t].push(n) : sn(e, t, [n]);
      });
      function ap(e, n, t, i) {
        e = Ne(e) ? e : Xn(e), t = t && !i ? M(t) : 0;
        var o = e.length;
        return t < 0 && (t = ae(o + t, 0)), xr(e) ? t <= o && e.indexOf(n, t) > -1 : !!o && Mn(e, n, t) > -1;
      }
      var fp = W(function(e, n, t) {
        var i = -1, o = typeof n == "function", f = Ne(e) ? v(e.length) : [];
        return En(e, function(h) {
          f[++i] = o ? Se(n, h, t) : _t(h, n, t);
        }), f;
      }), cp = ur(function(e, n, t) {
        sn(e, t, n);
      });
      function gr(e, n) {
        var t = B(e) ? ee : gu;
        return t(e, C(n, 3));
      }
      function lp(e, n, t, i) {
        return e == null ? [] : (B(n) || (n = n == null ? [] : [n]), t = i ? r : t, B(t) || (t = t == null ? [] : [t]), mu(e, n, t));
      }
      var hp = ur(function(e, n, t) {
        e[t ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function pp(e, n, t) {
        var i = B(e) ? Kr : $s, o = arguments.length < 3;
        return i(e, C(n, 4), t, o, En);
      }
      function dp(e, n, t) {
        var i = B(e) ? Of : $s, o = arguments.length < 3;
        return i(e, C(n, 4), t, o, au);
      }
      function gp(e, n) {
        var t = B(e) ? dn : fu;
        return t(e, Er(C(n, 3)));
      }
      function _p(e) {
        var n = B(e) ? iu : al;
        return n(e);
      }
      function vp(e, n, t) {
        (t ? Te(e, n, t) : n === r) ? n = 1 : n = M(n);
        var i = B(e) ? kc : fl;
        return i(e, n);
      }
      function Ep(e) {
        var n = B(e) ? Wc : ll;
        return n(e);
      }
      function mp(e) {
        if (e == null)
          return 0;
        if (Ne(e))
          return xr(e) ? kn(e) : e.length;
        var n = ve(e);
        return n == $e || n == qe ? e.size : _i(e).length;
      }
      function xp(e, n, t) {
        var i = B(e) ? Zr : hl;
        return t && Te(e, n, t) && (n = r), i(e, C(n, 3));
      }
      var Tp = W(function(e, n) {
        if (e == null)
          return [];
        var t = n.length;
        return t > 1 && Te(e, n[0], n[1]) ? n = [] : t > 2 && Te(n[0], n[1], n[2]) && (n = [n[0]]), mu(e, de(n, 1), []);
      }), _r = nc || function() {
        return pe.Date.now();
      };
      function Ap(e, n) {
        if (typeof n != "function")
          throw new Me(I);
        return e = M(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function po(e, n, t) {
        return n = t ? r : n, n = e && n == null ? e.length : n, un(e, Fe, r, r, r, r, n);
      }
      function go(e, n) {
        var t;
        if (typeof n != "function")
          throw new Me(I);
        return e = M(e), function() {
          return --e > 0 && (t = n.apply(this, arguments)), e <= 1 && (n = r), t;
        };
      }
      var Wi = W(function(e, n, t) {
        var i = ge;
        if (t.length) {
          var o = _n(t, zn(Wi));
          i |= Ie;
        }
        return un(e, i, n, t, o);
      }), _o = W(function(e, n, t) {
        var i = ge | he;
        if (t.length) {
          var o = _n(t, zn(_o));
          i |= Ie;
        }
        return un(n, i, e, t, o);
      });
      function vo(e, n, t) {
        n = t ? r : n;
        var i = un(e, ue, r, r, r, r, r, n);
        return i.placeholder = vo.placeholder, i;
      }
      function Eo(e, n, t) {
        n = t ? r : n;
        var i = un(e, me, r, r, r, r, r, n);
        return i.placeholder = Eo.placeholder, i;
      }
      function mo(e, n, t) {
        var i, o, f, h, p, g, m = 0, x = !1, A = !1, y = !0;
        if (typeof e != "function")
          throw new Me(I);
        n = Ge(n) || 0, ne(t) && (x = !!t.leading, A = "maxWait" in t, f = A ? ae(Ge(t.maxWait) || 0, n) : f, y = "trailing" in t ? !!t.trailing : y);
        function w(ie) {
          var Je = i, ln = o;
          return i = o = r, m = ie, h = e.apply(ln, Je), h;
        }
        function D(ie) {
          return m = ie, p = Tt(V, n), x ? w(ie) : h;
        }
        function U(ie) {
          var Je = ie - g, ln = ie - m, Uo = n - Je;
          return A ? _e(Uo, f - ln) : Uo;
        }
        function b(ie) {
          var Je = ie - g, ln = ie - m;
          return g === r || Je >= n || Je < 0 || A && ln >= f;
        }
        function V() {
          var ie = _r();
          if (b(ie))
            return q(ie);
          p = Tt(V, U(ie));
        }
        function q(ie) {
          return p = r, y && i ? w(ie) : (i = o = r, h);
        }
        function Re() {
          p !== r && Su(p), m = 0, i = g = o = p = r;
        }
        function Ae() {
          return p === r ? h : q(_r());
        }
        function Le() {
          var ie = _r(), Je = b(ie);
          if (i = arguments, o = this, g = ie, Je) {
            if (p === r)
              return D(g);
            if (A)
              return Su(p), p = Tt(V, n), w(g);
          }
          return p === r && (p = Tt(V, n)), h;
        }
        return Le.cancel = Re, Le.flush = Ae, Le;
      }
      var Ip = W(function(e, n) {
        return ou(e, 1, n);
      }), yp = W(function(e, n, t) {
        return ou(e, Ge(n) || 0, t);
      });
      function Np(e) {
        return un(e, br);
      }
      function vr(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new Me(I);
        var t = function() {
          var i = arguments, o = n ? n.apply(this, i) : i[0], f = t.cache;
          if (f.has(o))
            return f.get(o);
          var h = e.apply(this, i);
          return t.cache = f.set(o, h) || f, h;
        };
        return t.cache = new (vr.Cache || rn)(), t;
      }
      vr.Cache = rn;
      function Er(e) {
        if (typeof e != "function")
          throw new Me(I);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, n[0]);
            case 2:
              return !e.call(this, n[0], n[1]);
            case 3:
              return !e.call(this, n[0], n[1], n[2]);
          }
          return !e.apply(this, n);
        };
      }
      function Op(e) {
        return go(2, e);
      }
      var wp = pl(function(e, n) {
        n = n.length == 1 && B(n[0]) ? ee(n[0], Ce(C())) : ee(de(n, 1), Ce(C()));
        var t = n.length;
        return W(function(i) {
          for (var o = -1, f = _e(i.length, t); ++o < f; )
            i[o] = n[o].call(this, i[o]);
          return Se(e, this, i);
        });
      }), Vi = W(function(e, n) {
        var t = _n(n, zn(Vi));
        return un(e, Ie, r, n, t);
      }), xo = W(function(e, n) {
        var t = _n(n, zn(xo));
        return un(e, en, r, n, t);
      }), Sp = on(function(e, n) {
        return un(e, et, r, r, r, n);
      });
      function Cp(e, n) {
        if (typeof e != "function")
          throw new Me(I);
        return n = n === r ? n : M(n), W(e, n);
      }
      function Dp(e, n) {
        if (typeof e != "function")
          throw new Me(I);
        return n = n == null ? 0 : ae(M(n), 0), W(function(t) {
          var i = t[n], o = Tn(t, 0, n);
          return i && gn(o, i), Se(e, this, o);
        });
      }
      function bp(e, n, t) {
        var i = !0, o = !0;
        if (typeof e != "function")
          throw new Me(I);
        return ne(t) && (i = "leading" in t ? !!t.leading : i, o = "trailing" in t ? !!t.trailing : o), mo(e, n, {
          leading: i,
          maxWait: n,
          trailing: o
        });
      }
      function Rp(e) {
        return po(e, 1);
      }
      function Lp(e, n) {
        return Vi(Ni(n), e);
      }
      function Fp() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return B(e) ? e : [e];
      }
      function Pp(e) {
        return ke(e, fe);
      }
      function Bp(e, n) {
        return n = typeof n == "function" ? n : r, ke(e, fe, n);
      }
      function Mp(e) {
        return ke(e, Y | fe);
      }
      function Up(e, n) {
        return n = typeof n == "function" ? n : r, ke(e, Y | fe, n);
      }
      function kp(e, n) {
        return n == null || uu(e, n, ce(n));
      }
      function ze(e, n) {
        return e === n || e !== e && n !== n;
      }
      var Wp = cr(pi), Vp = cr(function(e, n) {
        return e >= n;
      }), Rn = hu(/* @__PURE__ */ function() {
        return arguments;
      }()) ? hu : function(e) {
        return te(e) && J.call(e, "callee") && !Zs.call(e, "callee");
      }, B = v.isArray, Gp = Ls ? Ce(Ls) : Qc;
      function Ne(e) {
        return e != null && mr(e.length) && !fn(e);
      }
      function re(e) {
        return te(e) && Ne(e);
      }
      function $p(e) {
        return e === !0 || e === !1 || te(e) && xe(e) == nt;
      }
      var An = rc || Zi, qp = Fs ? Ce(Fs) : Kc;
      function Yp(e) {
        return te(e) && e.nodeType === 1 && !At(e);
      }
      function Hp(e) {
        if (e == null)
          return !0;
        if (Ne(e) && (B(e) || typeof e == "string" || typeof e.splice == "function" || An(e) || Jn(e) || Rn(e)))
          return !e.length;
        var n = ve(e);
        if (n == $e || n == qe)
          return !e.size;
        if (xt(e))
          return !_i(e).length;
        for (var t in e)
          if (J.call(e, t))
            return !1;
        return !0;
      }
      function zp(e, n) {
        return vt(e, n);
      }
      function Jp(e, n, t) {
        t = typeof t == "function" ? t : r;
        var i = t ? t(e, n) : r;
        return i === r ? vt(e, n, r, t) : !!i;
      }
      function Gi(e) {
        if (!te(e))
          return !1;
        var n = xe(e);
        return n == bt || n == _a || typeof e.message == "string" && typeof e.name == "string" && !At(e);
      }
      function Xp(e) {
        return typeof e == "number" && eu(e);
      }
      function fn(e) {
        if (!ne(e))
          return !1;
        var n = xe(e);
        return n == Rt || n == os || n == ga || n == Ea;
      }
      function To(e) {
        return typeof e == "number" && e == M(e);
      }
      function mr(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pn;
      }
      function ne(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function te(e) {
        return e != null && typeof e == "object";
      }
      var Ao = Ps ? Ce(Ps) : jc;
      function Qp(e, n) {
        return e === n || gi(e, n, Ri(n));
      }
      function Kp(e, n, t) {
        return t = typeof t == "function" ? t : r, gi(e, n, Ri(n), t);
      }
      function Zp(e) {
        return Io(e) && e != +e;
      }
      function jp(e) {
        if (Bl(e))
          throw new F(_);
        return pu(e);
      }
      function ed(e) {
        return e === null;
      }
      function nd(e) {
        return e == null;
      }
      function Io(e) {
        return typeof e == "number" || te(e) && xe(e) == rt;
      }
      function At(e) {
        if (!te(e) || xe(e) != nn)
          return !1;
        var n = Ht(e);
        if (n === null)
          return !0;
        var t = J.call(n, "constructor") && n.constructor;
        return typeof t == "function" && t instanceof t && Gt.call(t) == Kf;
      }
      var $i = Bs ? Ce(Bs) : el;
      function td(e) {
        return To(e) && e >= -pn && e <= pn;
      }
      var yo = Ms ? Ce(Ms) : nl;
      function xr(e) {
        return typeof e == "string" || !B(e) && te(e) && xe(e) == st;
      }
      function be(e) {
        return typeof e == "symbol" || te(e) && xe(e) == Lt;
      }
      var Jn = Us ? Ce(Us) : tl;
      function rd(e) {
        return e === r;
      }
      function id(e) {
        return te(e) && ve(e) == ut;
      }
      function sd(e) {
        return te(e) && xe(e) == xa;
      }
      var ud = cr(vi), od = cr(function(e, n) {
        return e <= n;
      });
      function No(e) {
        if (!e)
          return [];
        if (Ne(e))
          return xr(e) ? Ye(e) : ye(e);
        if (ft && e[ft])
          return kf(e[ft]());
        var n = ve(e), t = n == $e ? ii : n == qe ? kt : Xn;
        return t(e);
      }
      function cn(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Ge(e), e === In || e === -In) {
          var n = e < 0 ? -1 : 1;
          return n * la;
        }
        return e === e ? e : 0;
      }
      function M(e) {
        var n = cn(e), t = n % 1;
        return n === n ? t ? n - t : n : 0;
      }
      function Oo(e) {
        return e ? Sn(M(e), 0, Qe) : 0;
      }
      function Ge(e) {
        if (typeof e == "number")
          return e;
        if (be(e))
          return Ct;
        if (ne(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = ne(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = qs(e);
        var t = Va.test(e);
        return t || $a.test(e) ? Af(e.slice(2), t ? 2 : 8) : Wa.test(e) ? Ct : +e;
      }
      function wo(e) {
        return Ze(e, Oe(e));
      }
      function ad(e) {
        return e ? Sn(M(e), -pn, pn) : e === 0 ? e : 0;
      }
      function z(e) {
        return e == null ? "" : De(e);
      }
      var fd = Yn(function(e, n) {
        if (xt(n) || Ne(n)) {
          Ze(n, ce(n), e);
          return;
        }
        for (var t in n)
          J.call(n, t) && dt(e, t, n[t]);
      }), So = Yn(function(e, n) {
        Ze(n, Oe(n), e);
      }), Tr = Yn(function(e, n, t, i) {
        Ze(n, Oe(n), e, i);
      }), cd = Yn(function(e, n, t, i) {
        Ze(n, ce(n), e, i);
      }), ld = on(ci);
      function hd(e, n) {
        var t = qn(e);
        return n == null ? t : su(t, n);
      }
      var pd = W(function(e, n) {
        e = Q(e);
        var t = -1, i = n.length, o = i > 2 ? n[2] : r;
        for (o && Te(n[0], n[1], o) && (i = 1); ++t < i; )
          for (var f = n[t], h = Oe(f), p = -1, g = h.length; ++p < g; ) {
            var m = h[p], x = e[m];
            (x === r || ze(x, Vn[m]) && !J.call(e, m)) && (e[m] = f[m]);
          }
        return e;
      }), dd = W(function(e) {
        return e.push(r, qu), Se(Co, r, e);
      });
      function gd(e, n) {
        return Ws(e, C(n, 3), Ke);
      }
      function _d(e, n) {
        return Ws(e, C(n, 3), hi);
      }
      function vd(e, n) {
        return e == null ? e : li(e, C(n, 3), Oe);
      }
      function Ed(e, n) {
        return e == null ? e : cu(e, C(n, 3), Oe);
      }
      function md(e, n) {
        return e && Ke(e, C(n, 3));
      }
      function xd(e, n) {
        return e && hi(e, C(n, 3));
      }
      function Td(e) {
        return e == null ? [] : tr(e, ce(e));
      }
      function Ad(e) {
        return e == null ? [] : tr(e, Oe(e));
      }
      function qi(e, n, t) {
        var i = e == null ? r : Cn(e, n);
        return i === r ? t : i;
      }
      function Id(e, n) {
        return e != null && zu(e, n, Hc);
      }
      function Yi(e, n) {
        return e != null && zu(e, n, zc);
      }
      var yd = ku(function(e, n, t) {
        n != null && typeof n.toString != "function" && (n = $t.call(n)), e[n] = t;
      }, zi(we)), Nd = ku(function(e, n, t) {
        n != null && typeof n.toString != "function" && (n = $t.call(n)), J.call(e, n) ? e[n].push(t) : e[n] = [t];
      }, C), Od = W(_t);
      function ce(e) {
        return Ne(e) ? ru(e) : _i(e);
      }
      function Oe(e) {
        return Ne(e) ? ru(e, !0) : rl(e);
      }
      function wd(e, n) {
        var t = {};
        return n = C(n, 3), Ke(e, function(i, o, f) {
          sn(t, n(i, o, f), i);
        }), t;
      }
      function Sd(e, n) {
        var t = {};
        return n = C(n, 3), Ke(e, function(i, o, f) {
          sn(t, o, n(i, o, f));
        }), t;
      }
      var Cd = Yn(function(e, n, t) {
        rr(e, n, t);
      }), Co = Yn(function(e, n, t, i) {
        rr(e, n, t, i);
      }), Dd = on(function(e, n) {
        var t = {};
        if (e == null)
          return t;
        var i = !1;
        n = ee(n, function(f) {
          return f = xn(f, e), i || (i = f.length > 1), f;
        }), Ze(e, Di(e), t), i && (t = ke(t, Y | X | fe, yl));
        for (var o = n.length; o--; )
          Ai(t, n[o]);
        return t;
      });
      function bd(e, n) {
        return Do(e, Er(C(n)));
      }
      var Rd = on(function(e, n) {
        return e == null ? {} : sl(e, n);
      });
      function Do(e, n) {
        if (e == null)
          return {};
        var t = ee(Di(e), function(i) {
          return [i];
        });
        return n = C(n), xu(e, t, function(i, o) {
          return n(i, o[0]);
        });
      }
      function Ld(e, n, t) {
        n = xn(n, e);
        var i = -1, o = n.length;
        for (o || (o = 1, e = r); ++i < o; ) {
          var f = e == null ? r : e[je(n[i])];
          f === r && (i = o, f = t), e = fn(f) ? f.call(e) : f;
        }
        return e;
      }
      function Fd(e, n, t) {
        return e == null ? e : Et(e, n, t);
      }
      function Pd(e, n, t, i) {
        return i = typeof i == "function" ? i : r, e == null ? e : Et(e, n, t, i);
      }
      var bo = Gu(ce), Ro = Gu(Oe);
      function Bd(e, n, t) {
        var i = B(e), o = i || An(e) || Jn(e);
        if (n = C(n, 4), t == null) {
          var f = e && e.constructor;
          o ? t = i ? new f() : [] : ne(e) ? t = fn(f) ? qn(Ht(e)) : {} : t = {};
        }
        return (o ? Be : Ke)(e, function(h, p, g) {
          return n(t, h, p, g);
        }), t;
      }
      function Md(e, n) {
        return e == null ? !0 : Ai(e, n);
      }
      function Ud(e, n, t) {
        return e == null ? e : Nu(e, n, Ni(t));
      }
      function kd(e, n, t, i) {
        return i = typeof i == "function" ? i : r, e == null ? e : Nu(e, n, Ni(t), i);
      }
      function Xn(e) {
        return e == null ? [] : ri(e, ce(e));
      }
      function Wd(e) {
        return e == null ? [] : ri(e, Oe(e));
      }
      function Vd(e, n, t) {
        return t === r && (t = n, n = r), t !== r && (t = Ge(t), t = t === t ? t : 0), n !== r && (n = Ge(n), n = n === n ? n : 0), Sn(Ge(e), n, t);
      }
      function Gd(e, n, t) {
        return n = cn(n), t === r ? (t = n, n = 0) : t = cn(t), e = Ge(e), Jc(e, n, t);
      }
      function $d(e, n, t) {
        if (t && typeof t != "boolean" && Te(e, n, t) && (n = t = r), t === r && (typeof n == "boolean" ? (t = n, n = r) : typeof e == "boolean" && (t = e, e = r)), e === r && n === r ? (e = 0, n = 1) : (e = cn(e), n === r ? (n = e, e = 0) : n = cn(n)), e > n) {
          var i = e;
          e = n, n = i;
        }
        if (t || e % 1 || n % 1) {
          var o = nu();
          return _e(e + o * (n - e + Tf("1e-" + ((o + "").length - 1))), n);
        }
        return mi(e, n);
      }
      var qd = Hn(function(e, n, t) {
        return n = n.toLowerCase(), e + (t ? Lo(n) : n);
      });
      function Lo(e) {
        return Hi(z(e).toLowerCase());
      }
      function Fo(e) {
        return e = z(e), e && e.replace(Ya, Ff).replace(lf, "");
      }
      function Yd(e, n, t) {
        e = z(e), n = De(n);
        var i = e.length;
        t = t === r ? i : Sn(M(t), 0, i);
        var o = t;
        return t -= n.length, t >= 0 && e.slice(t, o) == n;
      }
      function Hd(e) {
        return e = z(e), e && Na.test(e) ? e.replace(cs, Pf) : e;
      }
      function zd(e) {
        return e = z(e), e && ba.test(e) ? e.replace(Vr, "\\$&") : e;
      }
      var Jd = Hn(function(e, n, t) {
        return e + (t ? "-" : "") + n.toLowerCase();
      }), Xd = Hn(function(e, n, t) {
        return e + (t ? " " : "") + n.toLowerCase();
      }), Qd = Bu("toLowerCase");
      function Kd(e, n, t) {
        e = z(e), n = M(n);
        var i = n ? kn(e) : 0;
        if (!n || i >= n)
          return e;
        var o = (n - i) / 2;
        return fr(Qt(o), t) + e + fr(Xt(o), t);
      }
      function Zd(e, n, t) {
        e = z(e), n = M(n);
        var i = n ? kn(e) : 0;
        return n && i < n ? e + fr(n - i, t) : e;
      }
      function jd(e, n, t) {
        e = z(e), n = M(n);
        var i = n ? kn(e) : 0;
        return n && i < n ? fr(n - i, t) + e : e;
      }
      function e0(e, n, t) {
        return t || n == null ? n = 0 : n && (n = +n), oc(z(e).replace(Gr, ""), n || 0);
      }
      function n0(e, n, t) {
        return (t ? Te(e, n, t) : n === r) ? n = 1 : n = M(n), xi(z(e), n);
      }
      function t0() {
        var e = arguments, n = z(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var r0 = Hn(function(e, n, t) {
        return e + (t ? "_" : "") + n.toLowerCase();
      });
      function i0(e, n, t) {
        return t && typeof t != "number" && Te(e, n, t) && (n = t = r), t = t === r ? Qe : t >>> 0, t ? (e = z(e), e && (typeof n == "string" || n != null && !$i(n)) && (n = De(n), !n && Un(e)) ? Tn(Ye(e), 0, t) : e.split(n, t)) : [];
      }
      var s0 = Hn(function(e, n, t) {
        return e + (t ? " " : "") + Hi(n);
      });
      function u0(e, n, t) {
        return e = z(e), t = t == null ? 0 : Sn(M(t), 0, e.length), n = De(n), e.slice(t, t + n.length) == n;
      }
      function o0(e, n, t) {
        var i = a.templateSettings;
        t && Te(e, n, t) && (n = r), e = z(e), n = Tr({}, n, i, $u);
        var o = Tr({}, n.imports, i.imports, $u), f = ce(o), h = ri(o, f), p, g, m = 0, x = n.interpolate || Ft, A = "__p += '", y = si(
          (n.escape || Ft).source + "|" + x.source + "|" + (x === ls ? ka : Ft).source + "|" + (n.evaluate || Ft).source + "|$",
          "g"
        ), w = "//# sourceURL=" + (J.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++_f + "]") + `
`;
        e.replace(y, function(b, V, q, Re, Ae, Le) {
          return q || (q = Re), A += e.slice(m, Le).replace(Ha, Bf), V && (p = !0, A += `' +
__e(` + V + `) +
'`), Ae && (g = !0, A += `';
` + Ae + `;
__p += '`), q && (A += `' +
((__t = (` + q + `)) == null ? '' : __t) +
'`), m = Le + b.length, b;
        }), A += `';
`;
        var D = J.call(n, "variable") && n.variable;
        if (!D)
          A = `with (obj) {
` + A + `
}
`;
        else if (Ma.test(D))
          throw new F(P);
        A = (g ? A.replace(Ta, "") : A).replace(Aa, "$1").replace(Ia, "$1;"), A = "function(" + (D || "obj") + `) {
` + (D ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (p ? ", __e = _.escape" : "") + (g ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + A + `return __p
}`;
        var U = Bo(function() {
          return H(f, w + "return " + A).apply(r, h);
        });
        if (U.source = A, Gi(U))
          throw U;
        return U;
      }
      function a0(e) {
        return z(e).toLowerCase();
      }
      function f0(e) {
        return z(e).toUpperCase();
      }
      function c0(e, n, t) {
        if (e = z(e), e && (t || n === r))
          return qs(e);
        if (!e || !(n = De(n)))
          return e;
        var i = Ye(e), o = Ye(n), f = Ys(i, o), h = Hs(i, o) + 1;
        return Tn(i, f, h).join("");
      }
      function l0(e, n, t) {
        if (e = z(e), e && (t || n === r))
          return e.slice(0, Js(e) + 1);
        if (!e || !(n = De(n)))
          return e;
        var i = Ye(e), o = Hs(i, Ye(n)) + 1;
        return Tn(i, 0, o).join("");
      }
      function h0(e, n, t) {
        if (e = z(e), e && (t || n === r))
          return e.replace(Gr, "");
        if (!e || !(n = De(n)))
          return e;
        var i = Ye(e), o = Ys(i, Ye(n));
        return Tn(i, o).join("");
      }
      function p0(e, n) {
        var t = sa, i = ua;
        if (ne(n)) {
          var o = "separator" in n ? n.separator : o;
          t = "length" in n ? M(n.length) : t, i = "omission" in n ? De(n.omission) : i;
        }
        e = z(e);
        var f = e.length;
        if (Un(e)) {
          var h = Ye(e);
          f = h.length;
        }
        if (t >= f)
          return e;
        var p = t - kn(i);
        if (p < 1)
          return i;
        var g = h ? Tn(h, 0, p).join("") : e.slice(0, p);
        if (o === r)
          return g + i;
        if (h && (p += g.length - p), $i(o)) {
          if (e.slice(p).search(o)) {
            var m, x = g;
            for (o.global || (o = si(o.source, z(hs.exec(o)) + "g")), o.lastIndex = 0; m = o.exec(x); )
              var A = m.index;
            g = g.slice(0, A === r ? p : A);
          }
        } else if (e.indexOf(De(o), p) != p) {
          var y = g.lastIndexOf(o);
          y > -1 && (g = g.slice(0, y));
        }
        return g + i;
      }
      function d0(e) {
        return e = z(e), e && ya.test(e) ? e.replace(fs, $f) : e;
      }
      var g0 = Hn(function(e, n, t) {
        return e + (t ? " " : "") + n.toUpperCase();
      }), Hi = Bu("toUpperCase");
      function Po(e, n, t) {
        return e = z(e), n = t ? r : n, n === r ? Uf(e) ? Hf(e) : Cf(e) : e.match(n) || [];
      }
      var Bo = W(function(e, n) {
        try {
          return Se(e, r, n);
        } catch (t) {
          return Gi(t) ? t : new F(t);
        }
      }), _0 = on(function(e, n) {
        return Be(n, function(t) {
          t = je(t), sn(e, t, Wi(e[t], e));
        }), e;
      });
      function v0(e) {
        var n = e == null ? 0 : e.length, t = C();
        return e = n ? ee(e, function(i) {
          if (typeof i[1] != "function")
            throw new Me(I);
          return [t(i[0]), i[1]];
        }) : [], W(function(i) {
          for (var o = -1; ++o < n; ) {
            var f = e[o];
            if (Se(f[0], this, i))
              return Se(f[1], this, i);
          }
        });
      }
      function E0(e) {
        return $c(ke(e, Y));
      }
      function zi(e) {
        return function() {
          return e;
        };
      }
      function m0(e, n) {
        return e == null || e !== e ? n : e;
      }
      var x0 = Uu(), T0 = Uu(!0);
      function we(e) {
        return e;
      }
      function Ji(e) {
        return du(typeof e == "function" ? e : ke(e, Y));
      }
      function A0(e) {
        return _u(ke(e, Y));
      }
      function I0(e, n) {
        return vu(e, ke(n, Y));
      }
      var y0 = W(function(e, n) {
        return function(t) {
          return _t(t, e, n);
        };
      }), N0 = W(function(e, n) {
        return function(t) {
          return _t(e, t, n);
        };
      });
      function Xi(e, n, t) {
        var i = ce(n), o = tr(n, i);
        t == null && !(ne(n) && (o.length || !i.length)) && (t = n, n = e, e = this, o = tr(n, ce(n)));
        var f = !(ne(t) && "chain" in t) || !!t.chain, h = fn(e);
        return Be(o, function(p) {
          var g = n[p];
          e[p] = g, h && (e.prototype[p] = function() {
            var m = this.__chain__;
            if (f || m) {
              var x = e(this.__wrapped__), A = x.__actions__ = ye(this.__actions__);
              return A.push({ func: g, args: arguments, thisArg: e }), x.__chain__ = m, x;
            }
            return g.apply(e, gn([this.value()], arguments));
          });
        }), e;
      }
      function O0() {
        return pe._ === this && (pe._ = Zf), this;
      }
      function Qi() {
      }
      function w0(e) {
        return e = M(e), W(function(n) {
          return Eu(n, e);
        });
      }
      var S0 = wi(ee), C0 = wi(ks), D0 = wi(Zr);
      function Mo(e) {
        return Fi(e) ? jr(je(e)) : ul(e);
      }
      function b0(e) {
        return function(n) {
          return e == null ? r : Cn(e, n);
        };
      }
      var R0 = Wu(), L0 = Wu(!0);
      function Ki() {
        return [];
      }
      function Zi() {
        return !1;
      }
      function F0() {
        return {};
      }
      function P0() {
        return "";
      }
      function B0() {
        return !0;
      }
      function M0(e, n) {
        if (e = M(e), e < 1 || e > pn)
          return [];
        var t = Qe, i = _e(e, Qe);
        n = C(n), e -= Qe;
        for (var o = ti(i, n); ++t < e; )
          n(t);
        return o;
      }
      function U0(e) {
        return B(e) ? ee(e, je) : be(e) ? [e] : ye(to(z(e)));
      }
      function k0(e) {
        var n = ++Qf;
        return z(e) + n;
      }
      var W0 = ar(function(e, n) {
        return e + n;
      }, 0), V0 = Si("ceil"), G0 = ar(function(e, n) {
        return e / n;
      }, 1), $0 = Si("floor");
      function q0(e) {
        return e && e.length ? nr(e, we, pi) : r;
      }
      function Y0(e, n) {
        return e && e.length ? nr(e, C(n, 2), pi) : r;
      }
      function H0(e) {
        return Gs(e, we);
      }
      function z0(e, n) {
        return Gs(e, C(n, 2));
      }
      function J0(e) {
        return e && e.length ? nr(e, we, vi) : r;
      }
      function X0(e, n) {
        return e && e.length ? nr(e, C(n, 2), vi) : r;
      }
      var Q0 = ar(function(e, n) {
        return e * n;
      }, 1), K0 = Si("round"), Z0 = ar(function(e, n) {
        return e - n;
      }, 0);
      function j0(e) {
        return e && e.length ? ni(e, we) : 0;
      }
      function eg(e, n) {
        return e && e.length ? ni(e, C(n, 2)) : 0;
      }
      return a.after = Ap, a.ary = po, a.assign = fd, a.assignIn = So, a.assignInWith = Tr, a.assignWith = cd, a.at = ld, a.before = go, a.bind = Wi, a.bindAll = _0, a.bindKey = _o, a.castArray = Fp, a.chain = co, a.chunk = $l, a.compact = ql, a.concat = Yl, a.cond = v0, a.conforms = E0, a.constant = zi, a.countBy = jh, a.create = hd, a.curry = vo, a.curryRight = Eo, a.debounce = mo, a.defaults = pd, a.defaultsDeep = dd, a.defer = Ip, a.delay = yp, a.difference = Hl, a.differenceBy = zl, a.differenceWith = Jl, a.drop = Xl, a.dropRight = Ql, a.dropRightWhile = Kl, a.dropWhile = Zl, a.fill = jl, a.filter = np, a.flatMap = ip, a.flatMapDeep = sp, a.flatMapDepth = up, a.flatten = uo, a.flattenDeep = eh, a.flattenDepth = nh, a.flip = Np, a.flow = x0, a.flowRight = T0, a.fromPairs = th, a.functions = Td, a.functionsIn = Ad, a.groupBy = op, a.initial = ih, a.intersection = sh, a.intersectionBy = uh, a.intersectionWith = oh, a.invert = yd, a.invertBy = Nd, a.invokeMap = fp, a.iteratee = Ji, a.keyBy = cp, a.keys = ce, a.keysIn = Oe, a.map = gr, a.mapKeys = wd, a.mapValues = Sd, a.matches = A0, a.matchesProperty = I0, a.memoize = vr, a.merge = Cd, a.mergeWith = Co, a.method = y0, a.methodOf = N0, a.mixin = Xi, a.negate = Er, a.nthArg = w0, a.omit = Dd, a.omitBy = bd, a.once = Op, a.orderBy = lp, a.over = S0, a.overArgs = wp, a.overEvery = C0, a.overSome = D0, a.partial = Vi, a.partialRight = xo, a.partition = hp, a.pick = Rd, a.pickBy = Do, a.property = Mo, a.propertyOf = b0, a.pull = lh, a.pullAll = ao, a.pullAllBy = hh, a.pullAllWith = ph, a.pullAt = dh, a.range = R0, a.rangeRight = L0, a.rearg = Sp, a.reject = gp, a.remove = gh, a.rest = Cp, a.reverse = Ui, a.sampleSize = vp, a.set = Fd, a.setWith = Pd, a.shuffle = Ep, a.slice = _h, a.sortBy = Tp, a.sortedUniq = Ih, a.sortedUniqBy = yh, a.split = i0, a.spread = Dp, a.tail = Nh, a.take = Oh, a.takeRight = wh, a.takeRightWhile = Sh, a.takeWhile = Ch, a.tap = qh, a.throttle = bp, a.thru = dr, a.toArray = No, a.toPairs = bo, a.toPairsIn = Ro, a.toPath = U0, a.toPlainObject = wo, a.transform = Bd, a.unary = Rp, a.union = Dh, a.unionBy = bh, a.unionWith = Rh, a.uniq = Lh, a.uniqBy = Fh, a.uniqWith = Ph, a.unset = Md, a.unzip = ki, a.unzipWith = fo, a.update = Ud, a.updateWith = kd, a.values = Xn, a.valuesIn = Wd, a.without = Bh, a.words = Po, a.wrap = Lp, a.xor = Mh, a.xorBy = Uh, a.xorWith = kh, a.zip = Wh, a.zipObject = Vh, a.zipObjectDeep = Gh, a.zipWith = $h, a.entries = bo, a.entriesIn = Ro, a.extend = So, a.extendWith = Tr, Xi(a, a), a.add = W0, a.attempt = Bo, a.camelCase = qd, a.capitalize = Lo, a.ceil = V0, a.clamp = Vd, a.clone = Pp, a.cloneDeep = Mp, a.cloneDeepWith = Up, a.cloneWith = Bp, a.conformsTo = kp, a.deburr = Fo, a.defaultTo = m0, a.divide = G0, a.endsWith = Yd, a.eq = ze, a.escape = Hd, a.escapeRegExp = zd, a.every = ep, a.find = tp, a.findIndex = io, a.findKey = gd, a.findLast = rp, a.findLastIndex = so, a.findLastKey = _d, a.floor = $0, a.forEach = lo, a.forEachRight = ho, a.forIn = vd, a.forInRight = Ed, a.forOwn = md, a.forOwnRight = xd, a.get = qi, a.gt = Wp, a.gte = Vp, a.has = Id, a.hasIn = Yi, a.head = oo, a.identity = we, a.includes = ap, a.indexOf = rh, a.inRange = Gd, a.invoke = Od, a.isArguments = Rn, a.isArray = B, a.isArrayBuffer = Gp, a.isArrayLike = Ne, a.isArrayLikeObject = re, a.isBoolean = $p, a.isBuffer = An, a.isDate = qp, a.isElement = Yp, a.isEmpty = Hp, a.isEqual = zp, a.isEqualWith = Jp, a.isError = Gi, a.isFinite = Xp, a.isFunction = fn, a.isInteger = To, a.isLength = mr, a.isMap = Ao, a.isMatch = Qp, a.isMatchWith = Kp, a.isNaN = Zp, a.isNative = jp, a.isNil = nd, a.isNull = ed, a.isNumber = Io, a.isObject = ne, a.isObjectLike = te, a.isPlainObject = At, a.isRegExp = $i, a.isSafeInteger = td, a.isSet = yo, a.isString = xr, a.isSymbol = be, a.isTypedArray = Jn, a.isUndefined = rd, a.isWeakMap = id, a.isWeakSet = sd, a.join = ah, a.kebabCase = Jd, a.last = Ve, a.lastIndexOf = fh, a.lowerCase = Xd, a.lowerFirst = Qd, a.lt = ud, a.lte = od, a.max = q0, a.maxBy = Y0, a.mean = H0, a.meanBy = z0, a.min = J0, a.minBy = X0, a.stubArray = Ki, a.stubFalse = Zi, a.stubObject = F0, a.stubString = P0, a.stubTrue = B0, a.multiply = Q0, a.nth = ch, a.noConflict = O0, a.noop = Qi, a.now = _r, a.pad = Kd, a.padEnd = Zd, a.padStart = jd, a.parseInt = e0, a.random = $d, a.reduce = pp, a.reduceRight = dp, a.repeat = n0, a.replace = t0, a.result = Ld, a.round = K0, a.runInContext = d, a.sample = _p, a.size = mp, a.snakeCase = r0, a.some = xp, a.sortedIndex = vh, a.sortedIndexBy = Eh, a.sortedIndexOf = mh, a.sortedLastIndex = xh, a.sortedLastIndexBy = Th, a.sortedLastIndexOf = Ah, a.startCase = s0, a.startsWith = u0, a.subtract = Z0, a.sum = j0, a.sumBy = eg, a.template = o0, a.times = M0, a.toFinite = cn, a.toInteger = M, a.toLength = Oo, a.toLower = a0, a.toNumber = Ge, a.toSafeInteger = ad, a.toString = z, a.toUpper = f0, a.trim = c0, a.trimEnd = l0, a.trimStart = h0, a.truncate = p0, a.unescape = d0, a.uniqueId = k0, a.upperCase = g0, a.upperFirst = Hi, a.each = lo, a.eachRight = ho, a.first = oo, Xi(a, function() {
        var e = {};
        return Ke(a, function(n, t) {
          J.call(a.prototype, t) || (e[t] = n);
        }), e;
      }(), { chain: !1 }), a.VERSION = l, Be(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        a[e].placeholder = a;
      }), Be(["drop", "take"], function(e, n) {
        G.prototype[e] = function(t) {
          t = t === r ? 1 : ae(M(t), 0);
          var i = this.__filtered__ && !n ? new G(this) : this.clone();
          return i.__filtered__ ? i.__takeCount__ = _e(t, i.__takeCount__) : i.__views__.push({
            size: _e(t, Qe),
            type: e + (i.__dir__ < 0 ? "Right" : "")
          }), i;
        }, G.prototype[e + "Right"] = function(t) {
          return this.reverse()[e](t).reverse();
        };
      }), Be(["filter", "map", "takeWhile"], function(e, n) {
        var t = n + 1, i = t == us || t == ca;
        G.prototype[e] = function(o) {
          var f = this.clone();
          return f.__iteratees__.push({
            iteratee: C(o, 3),
            type: t
          }), f.__filtered__ = f.__filtered__ || i, f;
        };
      }), Be(["head", "last"], function(e, n) {
        var t = "take" + (n ? "Right" : "");
        G.prototype[e] = function() {
          return this[t](1).value()[0];
        };
      }), Be(["initial", "tail"], function(e, n) {
        var t = "drop" + (n ? "" : "Right");
        G.prototype[e] = function() {
          return this.__filtered__ ? new G(this) : this[t](1);
        };
      }), G.prototype.compact = function() {
        return this.filter(we);
      }, G.prototype.find = function(e) {
        return this.filter(e).head();
      }, G.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, G.prototype.invokeMap = W(function(e, n) {
        return typeof e == "function" ? new G(this) : this.map(function(t) {
          return _t(t, e, n);
        });
      }), G.prototype.reject = function(e) {
        return this.filter(Er(C(e)));
      }, G.prototype.slice = function(e, n) {
        e = M(e);
        var t = this;
        return t.__filtered__ && (e > 0 || n < 0) ? new G(t) : (e < 0 ? t = t.takeRight(-e) : e && (t = t.drop(e)), n !== r && (n = M(n), t = n < 0 ? t.dropRight(-n) : t.take(n - e)), t);
      }, G.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, G.prototype.toArray = function() {
        return this.take(Qe);
      }, Ke(G.prototype, function(e, n) {
        var t = /^(?:filter|find|map|reject)|While$/.test(n), i = /^(?:head|last)$/.test(n), o = a[i ? "take" + (n == "last" ? "Right" : "") : n], f = i || /^find/.test(n);
        o && (a.prototype[n] = function() {
          var h = this.__wrapped__, p = i ? [1] : arguments, g = h instanceof G, m = p[0], x = g || B(h), A = function(V) {
            var q = o.apply(a, gn([V], p));
            return i && y ? q[0] : q;
          };
          x && t && typeof m == "function" && m.length != 1 && (g = x = !1);
          var y = this.__chain__, w = !!this.__actions__.length, D = f && !y, U = g && !w;
          if (!f && x) {
            h = U ? h : new G(this);
            var b = e.apply(h, p);
            return b.__actions__.push({ func: dr, args: [A], thisArg: r }), new Ue(b, y);
          }
          return D && U ? e.apply(this, p) : (b = this.thru(A), D ? i ? b.value()[0] : b.value() : b);
        });
      }), Be(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var n = Wt[e], t = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", i = /^(?:pop|shift)$/.test(e);
        a.prototype[e] = function() {
          var o = arguments;
          if (i && !this.__chain__) {
            var f = this.value();
            return n.apply(B(f) ? f : [], o);
          }
          return this[t](function(h) {
            return n.apply(B(h) ? h : [], o);
          });
        };
      }), Ke(G.prototype, function(e, n) {
        var t = a[n];
        if (t) {
          var i = t.name + "";
          J.call($n, i) || ($n[i] = []), $n[i].push({ name: n, func: t });
        }
      }), $n[or(r, he).name] = [{
        name: "wrapper",
        func: r
      }], G.prototype.clone = dc, G.prototype.reverse = gc, G.prototype.value = _c, a.prototype.at = Yh, a.prototype.chain = Hh, a.prototype.commit = zh, a.prototype.next = Jh, a.prototype.plant = Qh, a.prototype.reverse = Kh, a.prototype.toJSON = a.prototype.valueOf = a.prototype.value = Zh, a.prototype.first = a.prototype.head, ft && (a.prototype[ft] = Xh), a;
    }, Wn = zf();
    yn ? ((yn.exports = Wn)._ = Wn, Jr._ = Wn) : pe._ = Wn;
  }).call(It);
})(Or, Or.exports);
var Ot = Or.exports, wr = function() {
  return wr = Object.assign || function(u) {
    for (var r, l = 1, c = arguments.length; l < c; l++) {
      r = arguments[l];
      for (var _ in r) Object.prototype.hasOwnProperty.call(r, _) && (u[_] = r[_]);
    }
    return u;
  }, wr.apply(this, arguments);
};
function Ir(s, u) {
  if (!!!s)
    throw new Error(u);
}
function rg(s) {
  return typeof s == "object" && s !== null;
}
function ig(s, u) {
  if (!!!s)
    throw new Error(
      "Unexpected invariant triggered."
    );
}
const sg = /\r\n|[\n\r]/g;
function es(s, u) {
  let r = 0, l = 1;
  for (const c of s.body.matchAll(sg)) {
    if (typeof c.index == "number" || ig(!1), c.index >= u)
      break;
    r = c.index + c[0].length, l += 1;
  }
  return {
    line: l,
    column: u + 1 - r
  };
}
function ug(s) {
  return qo(
    s.source,
    es(s.source, s.start)
  );
}
function qo(s, u) {
  const r = s.locationOffset.column - 1, l = "".padStart(r) + s.body, c = u.line - 1, _ = s.locationOffset.line - 1, I = u.line + _, P = u.line === 1 ? r : 0, L = u.column + P, R = `${s.name}:${I}:${L}
`, k = l.split(/\r\n|[\n\r]/g), Y = k[c];
  if (Y.length > 120) {
    const X = Math.floor(L / 80), fe = L % 80, K = [];
    for (let Ee = 0; Ee < Y.length; Ee += 80)
      K.push(Y.slice(Ee, Ee + 80));
    return R + ko([
      [`${I} |`, K[0]],
      ...K.slice(1, X + 1).map((Ee) => ["|", Ee]),
      ["|", "^".padStart(fe)],
      ["|", K[X + 1]]
    ]);
  }
  return R + ko([
    // Lines specified like this: ["prefix", "string"],
    [`${I - 1} |`, k[c - 1]],
    [`${I} |`, Y],
    ["|", "^".padStart(L)],
    [`${I + 1} |`, k[c + 1]]
  ]);
}
function ko(s) {
  const u = s.filter(([l, c]) => c !== void 0), r = Math.max(...u.map(([l]) => l.length));
  return u.map(([l, c]) => l.padStart(r) + (c ? " " + c : "")).join(`
`);
}
function og(s) {
  const u = s[0];
  return u == null || "kind" in u || "length" in u ? {
    nodes: u,
    source: s[1],
    positions: s[2],
    path: s[3],
    originalError: s[4],
    extensions: s[5]
  } : u;
}
class is extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
  /**
   * The original error thrown from a field resolver during execution.
   */
  /**
   * Extension fields to add to the formatted error.
   */
  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(u, ...r) {
    var l, c, _;
    const { nodes: I, source: P, positions: L, path: R, originalError: k, extensions: Y } = og(r);
    super(u), this.name = "GraphQLError", this.path = R ?? void 0, this.originalError = k ?? void 0, this.nodes = Wo(
      Array.isArray(I) ? I : I ? [I] : void 0
    );
    const X = Wo(
      (l = this.nodes) === null || l === void 0 ? void 0 : l.map((K) => K.loc).filter((K) => K != null)
    );
    this.source = P ?? (X == null || (c = X[0]) === null || c === void 0 ? void 0 : c.source), this.positions = L ?? (X == null ? void 0 : X.map((K) => K.start)), this.locations = L && P ? L.map((K) => es(P, K)) : X == null ? void 0 : X.map((K) => es(K.source, K.start));
    const fe = rg(
      k == null ? void 0 : k.extensions
    ) ? k == null ? void 0 : k.extensions : void 0;
    this.extensions = (_ = Y ?? fe) !== null && _ !== void 0 ? _ : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
      message: {
        writable: !0,
        enumerable: !0
      },
      name: {
        enumerable: !1
      },
      nodes: {
        enumerable: !1
      },
      source: {
        enumerable: !1
      },
      positions: {
        enumerable: !1
      },
      originalError: {
        enumerable: !1
      }
    }), k != null && k.stack ? Object.defineProperty(this, "stack", {
      value: k.stack,
      writable: !0,
      configurable: !0
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, is) : Object.defineProperty(this, "stack", {
      value: Error().stack,
      writable: !0,
      configurable: !0
    });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let u = this.message;
    if (this.nodes)
      for (const r of this.nodes)
        r.loc && (u += `

` + ug(r.loc));
    else if (this.source && this.locations)
      for (const r of this.locations)
        u += `

` + qo(this.source, r);
    return u;
  }
  toJSON() {
    const u = {
      message: this.message
    };
    return this.locations != null && (u.locations = this.locations), this.path != null && (u.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (u.extensions = this.extensions), u;
  }
}
function Wo(s) {
  return s === void 0 || s.length === 0 ? void 0 : s;
}
function le(s, u, r) {
  return new is(`Syntax Error: ${r}`, {
    source: s,
    positions: [u]
  });
}
class ag {
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The Token at which this Node begins.
   */
  /**
   * The Token at which this Node ends.
   */
  /**
   * The Source document the AST represents.
   */
  constructor(u, r, l) {
    this.start = u.start, this.end = r.end, this.startToken = u, this.endToken = r, this.source = l;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  }
}
class Yo {
  /**
   * The kind of Token.
   */
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The 1-indexed line number on which this Token appears.
   */
  /**
   * The 1-indexed column number at which this Token begins.
   */
  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */
  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  constructor(u, r, l, c, _, I) {
    this.kind = u, this.start = r, this.end = l, this.line = c, this.column = _, this.value = I, this.prev = null, this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }
}
const Ho = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
}, fg = new Set(Object.keys(Ho));
function Vo(s) {
  const u = s == null ? void 0 : s.kind;
  return typeof u == "string" && fg.has(u);
}
var Qn;
(function(s) {
  s.QUERY = "query", s.MUTATION = "mutation", s.SUBSCRIPTION = "subscription";
})(Qn || (Qn = {}));
var ns;
(function(s) {
  s.QUERY = "QUERY", s.MUTATION = "MUTATION", s.SUBSCRIPTION = "SUBSCRIPTION", s.FIELD = "FIELD", s.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", s.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", s.INLINE_FRAGMENT = "INLINE_FRAGMENT", s.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", s.SCHEMA = "SCHEMA", s.SCALAR = "SCALAR", s.OBJECT = "OBJECT", s.FIELD_DEFINITION = "FIELD_DEFINITION", s.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", s.INTERFACE = "INTERFACE", s.UNION = "UNION", s.ENUM = "ENUM", s.ENUM_VALUE = "ENUM_VALUE", s.INPUT_OBJECT = "INPUT_OBJECT", s.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(ns || (ns = {}));
var S;
(function(s) {
  s.NAME = "Name", s.DOCUMENT = "Document", s.OPERATION_DEFINITION = "OperationDefinition", s.VARIABLE_DEFINITION = "VariableDefinition", s.SELECTION_SET = "SelectionSet", s.FIELD = "Field", s.ARGUMENT = "Argument", s.FRAGMENT_SPREAD = "FragmentSpread", s.INLINE_FRAGMENT = "InlineFragment", s.FRAGMENT_DEFINITION = "FragmentDefinition", s.VARIABLE = "Variable", s.INT = "IntValue", s.FLOAT = "FloatValue", s.STRING = "StringValue", s.BOOLEAN = "BooleanValue", s.NULL = "NullValue", s.ENUM = "EnumValue", s.LIST = "ListValue", s.OBJECT = "ObjectValue", s.OBJECT_FIELD = "ObjectField", s.DIRECTIVE = "Directive", s.NAMED_TYPE = "NamedType", s.LIST_TYPE = "ListType", s.NON_NULL_TYPE = "NonNullType", s.SCHEMA_DEFINITION = "SchemaDefinition", s.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", s.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", s.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", s.FIELD_DEFINITION = "FieldDefinition", s.INPUT_VALUE_DEFINITION = "InputValueDefinition", s.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", s.UNION_TYPE_DEFINITION = "UnionTypeDefinition", s.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", s.ENUM_VALUE_DEFINITION = "EnumValueDefinition", s.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", s.DIRECTIVE_DEFINITION = "DirectiveDefinition", s.SCHEMA_EXTENSION = "SchemaExtension", s.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", s.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", s.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", s.UNION_TYPE_EXTENSION = "UnionTypeExtension", s.ENUM_TYPE_EXTENSION = "EnumTypeExtension", s.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(S || (S = {}));
function ts(s) {
  return s === 9 || s === 32;
}
function wt(s) {
  return s >= 48 && s <= 57;
}
function zo(s) {
  return s >= 97 && s <= 122 || // A-Z
  s >= 65 && s <= 90;
}
function Jo(s) {
  return zo(s) || s === 95;
}
function cg(s) {
  return zo(s) || wt(s) || s === 95;
}
function lg(s) {
  var u;
  let r = Number.MAX_SAFE_INTEGER, l = null, c = -1;
  for (let I = 0; I < s.length; ++I) {
    var _;
    const P = s[I], L = hg(P);
    L !== P.length && (l = (_ = l) !== null && _ !== void 0 ? _ : I, c = I, I !== 0 && L < r && (r = L));
  }
  return s.map((I, P) => P === 0 ? I : I.slice(r)).slice(
    (u = l) !== null && u !== void 0 ? u : 0,
    c + 1
  );
}
function hg(s) {
  let u = 0;
  for (; u < s.length && ts(s.charCodeAt(u)); )
    ++u;
  return u;
}
function pg(s, u) {
  const r = s.replace(/"""/g, '\\"""'), l = r.split(/\r\n|[\n\r]/g), c = l.length === 1, _ = l.length > 1 && l.slice(1).every((fe) => fe.length === 0 || ts(fe.charCodeAt(0))), I = r.endsWith('\\"""'), P = s.endsWith('"') && !I, L = s.endsWith("\\"), R = P || L, k = (
    // add leading and trailing new lines only if it improves readability
    !c || s.length > 70 || R || _ || I
  );
  let Y = "";
  const X = c && ts(s.charCodeAt(0));
  return (k && !X || _) && (Y += `
`), Y += r, (k || R) && (Y += `
`), '"""' + Y + '"""';
}
var T;
(function(s) {
  s.SOF = "<SOF>", s.EOF = "<EOF>", s.BANG = "!", s.DOLLAR = "$", s.AMP = "&", s.PAREN_L = "(", s.PAREN_R = ")", s.SPREAD = "...", s.COLON = ":", s.EQUALS = "=", s.AT = "@", s.BRACKET_L = "[", s.BRACKET_R = "]", s.BRACE_L = "{", s.PIPE = "|", s.BRACE_R = "}", s.NAME = "Name", s.INT = "Int", s.FLOAT = "Float", s.STRING = "String", s.BLOCK_STRING = "BlockString", s.COMMENT = "Comment";
})(T || (T = {}));
class dg {
  /**
   * The previously focused non-ignored token.
   */
  /**
   * The currently focused non-ignored token.
   */
  /**
   * The (1-indexed) line containing the current token.
   */
  /**
   * The character offset at which the current line begins.
   */
  constructor(u) {
    const r = new Yo(T.SOF, 0, 0, 0, 0);
    this.source = u, this.lastToken = r, this.token = r, this.line = 1, this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */
  advance() {
    return this.lastToken = this.token, this.token = this.lookahead();
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  lookahead() {
    let u = this.token;
    if (u.kind !== T.EOF)
      do
        if (u.next)
          u = u.next;
        else {
          const r = _g(this, u.end);
          u.next = r, r.prev = u, u = r;
        }
      while (u.kind === T.COMMENT);
    return u;
  }
}
function gg(s) {
  return s === T.BANG || s === T.DOLLAR || s === T.AMP || s === T.PAREN_L || s === T.PAREN_R || s === T.SPREAD || s === T.COLON || s === T.EQUALS || s === T.AT || s === T.BRACKET_L || s === T.BRACKET_R || s === T.BRACE_L || s === T.PIPE || s === T.BRACE_R;
}
function Zn(s) {
  return s >= 0 && s <= 55295 || s >= 57344 && s <= 1114111;
}
function Cr(s, u) {
  return Xo(s.charCodeAt(u)) && Qo(s.charCodeAt(u + 1));
}
function Xo(s) {
  return s >= 55296 && s <= 56319;
}
function Qo(s) {
  return s >= 56320 && s <= 57343;
}
function Ln(s, u) {
  const r = s.source.body.codePointAt(u);
  if (r === void 0)
    return T.EOF;
  if (r >= 32 && r <= 126) {
    const l = String.fromCodePoint(r);
    return l === '"' ? `'"'` : `"${l}"`;
  }
  return "U+" + r.toString(16).toUpperCase().padStart(4, "0");
}
function se(s, u, r, l, c) {
  const _ = s.line, I = 1 + r - s.lineStart;
  return new Yo(u, r, l, _, I, c);
}
function _g(s, u) {
  const r = s.source.body, l = r.length;
  let c = u;
  for (; c < l; ) {
    const _ = r.charCodeAt(c);
    switch (_) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++c;
        continue;
      case 10:
        ++c, ++s.line, s.lineStart = c;
        continue;
      case 13:
        r.charCodeAt(c + 1) === 10 ? c += 2 : ++c, ++s.line, s.lineStart = c;
        continue;
      case 35:
        return vg(s, c);
      case 33:
        return se(s, T.BANG, c, c + 1);
      case 36:
        return se(s, T.DOLLAR, c, c + 1);
      case 38:
        return se(s, T.AMP, c, c + 1);
      case 40:
        return se(s, T.PAREN_L, c, c + 1);
      case 41:
        return se(s, T.PAREN_R, c, c + 1);
      case 46:
        if (r.charCodeAt(c + 1) === 46 && r.charCodeAt(c + 2) === 46)
          return se(s, T.SPREAD, c, c + 3);
        break;
      case 58:
        return se(s, T.COLON, c, c + 1);
      case 61:
        return se(s, T.EQUALS, c, c + 1);
      case 64:
        return se(s, T.AT, c, c + 1);
      case 91:
        return se(s, T.BRACKET_L, c, c + 1);
      case 93:
        return se(s, T.BRACKET_R, c, c + 1);
      case 123:
        return se(s, T.BRACE_L, c, c + 1);
      case 124:
        return se(s, T.PIPE, c, c + 1);
      case 125:
        return se(s, T.BRACE_R, c, c + 1);
      case 34:
        return r.charCodeAt(c + 1) === 34 && r.charCodeAt(c + 2) === 34 ? Ig(s, c) : mg(s, c);
    }
    if (wt(_) || _ === 45)
      return Eg(s, c, _);
    if (Jo(_))
      return yg(s, c);
    throw le(
      s.source,
      c,
      _ === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : Zn(_) || Cr(r, c) ? `Unexpected character: ${Ln(s, c)}.` : `Invalid character: ${Ln(s, c)}.`
    );
  }
  return se(s, T.EOF, l, l);
}
function vg(s, u) {
  const r = s.source.body, l = r.length;
  let c = u + 1;
  for (; c < l; ) {
    const _ = r.charCodeAt(c);
    if (_ === 10 || _ === 13)
      break;
    if (Zn(_))
      ++c;
    else if (Cr(r, c))
      c += 2;
    else
      break;
  }
  return se(
    s,
    T.COMMENT,
    u,
    c,
    r.slice(u + 1, c)
  );
}
function Eg(s, u, r) {
  const l = s.source.body;
  let c = u, _ = r, I = !1;
  if (_ === 45 && (_ = l.charCodeAt(++c)), _ === 48) {
    if (_ = l.charCodeAt(++c), wt(_))
      throw le(
        s.source,
        c,
        `Invalid number, unexpected digit after 0: ${Ln(
          s,
          c
        )}.`
      );
  } else
    c = ji(s, c, _), _ = l.charCodeAt(c);
  if (_ === 46 && (I = !0, _ = l.charCodeAt(++c), c = ji(s, c, _), _ = l.charCodeAt(c)), (_ === 69 || _ === 101) && (I = !0, _ = l.charCodeAt(++c), (_ === 43 || _ === 45) && (_ = l.charCodeAt(++c)), c = ji(s, c, _), _ = l.charCodeAt(c)), _ === 46 || Jo(_))
    throw le(
      s.source,
      c,
      `Invalid number, expected digit but got: ${Ln(
        s,
        c
      )}.`
    );
  return se(
    s,
    I ? T.FLOAT : T.INT,
    u,
    c,
    l.slice(u, c)
  );
}
function ji(s, u, r) {
  if (!wt(r))
    throw le(
      s.source,
      u,
      `Invalid number, expected digit but got: ${Ln(
        s,
        u
      )}.`
    );
  const l = s.source.body;
  let c = u + 1;
  for (; wt(l.charCodeAt(c)); )
    ++c;
  return c;
}
function mg(s, u) {
  const r = s.source.body, l = r.length;
  let c = u + 1, _ = c, I = "";
  for (; c < l; ) {
    const P = r.charCodeAt(c);
    if (P === 34)
      return I += r.slice(_, c), se(s, T.STRING, u, c + 1, I);
    if (P === 92) {
      I += r.slice(_, c);
      const L = r.charCodeAt(c + 1) === 117 ? r.charCodeAt(c + 2) === 123 ? xg(s, c) : Tg(s, c) : Ag(s, c);
      I += L.value, c += L.size, _ = c;
      continue;
    }
    if (P === 10 || P === 13)
      break;
    if (Zn(P))
      ++c;
    else if (Cr(r, c))
      c += 2;
    else
      throw le(
        s.source,
        c,
        `Invalid character within String: ${Ln(
          s,
          c
        )}.`
      );
  }
  throw le(s.source, c, "Unterminated string.");
}
function xg(s, u) {
  const r = s.source.body;
  let l = 0, c = 3;
  for (; c < 12; ) {
    const _ = r.charCodeAt(u + c++);
    if (_ === 125) {
      if (c < 5 || !Zn(l))
        break;
      return {
        value: String.fromCodePoint(l),
        size: c
      };
    }
    if (l = l << 4 | Nt(_), l < 0)
      break;
  }
  throw le(
    s.source,
    u,
    `Invalid Unicode escape sequence: "${r.slice(
      u,
      u + c
    )}".`
  );
}
function Tg(s, u) {
  const r = s.source.body, l = Go(r, u + 2);
  if (Zn(l))
    return {
      value: String.fromCodePoint(l),
      size: 6
    };
  if (Xo(l) && r.charCodeAt(u + 6) === 92 && r.charCodeAt(u + 7) === 117) {
    const c = Go(r, u + 8);
    if (Qo(c))
      return {
        value: String.fromCodePoint(l, c),
        size: 12
      };
  }
  throw le(
    s.source,
    u,
    `Invalid Unicode escape sequence: "${r.slice(u, u + 6)}".`
  );
}
function Go(s, u) {
  return Nt(s.charCodeAt(u)) << 12 | Nt(s.charCodeAt(u + 1)) << 8 | Nt(s.charCodeAt(u + 2)) << 4 | Nt(s.charCodeAt(u + 3));
}
function Nt(s) {
  return s >= 48 && s <= 57 ? s - 48 : s >= 65 && s <= 70 ? s - 55 : s >= 97 && s <= 102 ? s - 87 : -1;
}
function Ag(s, u) {
  const r = s.source.body;
  switch (r.charCodeAt(u + 1)) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: `
`,
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw le(
    s.source,
    u,
    `Invalid character escape sequence: "${r.slice(
      u,
      u + 2
    )}".`
  );
}
function Ig(s, u) {
  const r = s.source.body, l = r.length;
  let c = s.lineStart, _ = u + 3, I = _, P = "";
  const L = [];
  for (; _ < l; ) {
    const R = r.charCodeAt(_);
    if (R === 34 && r.charCodeAt(_ + 1) === 34 && r.charCodeAt(_ + 2) === 34) {
      P += r.slice(I, _), L.push(P);
      const k = se(
        s,
        T.BLOCK_STRING,
        u,
        _ + 3,
        // Return a string of the lines joined with U+000A.
        lg(L).join(`
`)
      );
      return s.line += L.length - 1, s.lineStart = c, k;
    }
    if (R === 92 && r.charCodeAt(_ + 1) === 34 && r.charCodeAt(_ + 2) === 34 && r.charCodeAt(_ + 3) === 34) {
      P += r.slice(I, _), I = _ + 1, _ += 4;
      continue;
    }
    if (R === 10 || R === 13) {
      P += r.slice(I, _), L.push(P), R === 13 && r.charCodeAt(_ + 1) === 10 ? _ += 2 : ++_, P = "", I = _, c = _;
      continue;
    }
    if (Zn(R))
      ++_;
    else if (Cr(r, _))
      _ += 2;
    else
      throw le(
        s.source,
        _,
        `Invalid character within String: ${Ln(
          s,
          _
        )}.`
      );
  }
  throw le(s.source, _, "Unterminated string.");
}
function yg(s, u) {
  const r = s.source.body, l = r.length;
  let c = u + 1;
  for (; c < l; ) {
    const _ = r.charCodeAt(c);
    if (cg(_))
      ++c;
    else
      break;
  }
  return se(
    s,
    T.NAME,
    u,
    c,
    r.slice(u, c)
  );
}
const Ng = 10, Ko = 2;
function ss(s) {
  return Dr(s, []);
}
function Dr(s, u) {
  switch (typeof s) {
    case "string":
      return JSON.stringify(s);
    case "function":
      return s.name ? `[function ${s.name}]` : "[function]";
    case "object":
      return Og(s, u);
    default:
      return String(s);
  }
}
function Og(s, u) {
  if (s === null)
    return "null";
  if (u.includes(s))
    return "[Circular]";
  const r = [...u, s];
  if (wg(s)) {
    const l = s.toJSON();
    if (l !== s)
      return typeof l == "string" ? l : Dr(l, r);
  } else if (Array.isArray(s))
    return Cg(s, r);
  return Sg(s, r);
}
function wg(s) {
  return typeof s.toJSON == "function";
}
function Sg(s, u) {
  const r = Object.entries(s);
  return r.length === 0 ? "{}" : u.length > Ko ? "[" + Dg(s) + "]" : "{ " + r.map(
    ([c, _]) => c + ": " + Dr(_, u)
  ).join(", ") + " }";
}
function Cg(s, u) {
  if (s.length === 0)
    return "[]";
  if (u.length > Ko)
    return "[Array]";
  const r = Math.min(Ng, s.length), l = s.length - r, c = [];
  for (let _ = 0; _ < r; ++_)
    c.push(Dr(s[_], u));
  return l === 1 ? c.push("... 1 more item") : l > 1 && c.push(`... ${l} more items`), "[" + c.join(", ") + "]";
}
function Dg(s) {
  const u = Object.prototype.toString.call(s).replace(/^\[object /, "").replace(/]$/, "");
  if (u === "Object" && typeof s.constructor == "function") {
    const r = s.constructor.name;
    if (typeof r == "string" && r !== "")
      return r;
  }
  return u;
}
const bg = globalThis.process && // eslint-disable-next-line no-undef
process.env.NODE_ENV === "production", Rg = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  bg ? function(u, r) {
    return u instanceof r;
  } : function(u, r) {
    if (u instanceof r)
      return !0;
    if (typeof u == "object" && u !== null) {
      var l;
      const c = r.prototype[Symbol.toStringTag], _ = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in u ? u[Symbol.toStringTag] : (l = u.constructor) === null || l === void 0 ? void 0 : l.name
      );
      if (c === _) {
        const I = ss(u);
        throw new Error(`Cannot use ${c} "${I}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
      }
    }
    return !1;
  }
);
class Zo {
  constructor(u, r = "GraphQL request", l = {
    line: 1,
    column: 1
  }) {
    typeof u == "string" || Ir(!1, `Body must be a string. Received: ${ss(u)}.`), this.body = u, this.name = r, this.locationOffset = l, this.locationOffset.line > 0 || Ir(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || Ir(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function Lg(s) {
  return Rg(s, Zo);
}
function jo(s, u) {
  return new Fg(s, u).parseDocument();
}
class Fg {
  constructor(u, r = {}) {
    const l = Lg(u) ? u : new Zo(u);
    this._lexer = new dg(l), this._options = r, this._tokenCounter = 0;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const u = this.expectToken(T.NAME);
    return this.node(u, {
      kind: S.NAME,
      value: u.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: S.DOCUMENT,
      definitions: this.many(
        T.SOF,
        this.parseDefinition,
        T.EOF
      )
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  parseDefinition() {
    if (this.peek(T.BRACE_L))
      return this.parseOperationDefinition();
    const u = this.peekDescription(), r = u ? this._lexer.lookahead() : this._lexer.token;
    if (r.kind === T.NAME) {
      switch (r.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (u)
        throw le(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      switch (r.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(r);
  }
  // Implements the parsing rules in the Operations section.
  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  parseOperationDefinition() {
    const u = this._lexer.token;
    if (this.peek(T.BRACE_L))
      return this.node(u, {
        kind: S.OPERATION_DEFINITION,
        operation: Qn.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    const r = this.parseOperationType();
    let l;
    return this.peek(T.NAME) && (l = this.parseName()), this.node(u, {
      kind: S.OPERATION_DEFINITION,
      operation: r,
      name: l,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */
  parseOperationType() {
    const u = this.expectToken(T.NAME);
    switch (u.value) {
      case "query":
        return Qn.QUERY;
      case "mutation":
        return Qn.MUTATION;
      case "subscription":
        return Qn.SUBSCRIPTION;
    }
    throw this.unexpected(u);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      T.PAREN_L,
      this.parseVariableDefinition,
      T.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: S.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(T.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(T.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const u = this._lexer.token;
    return this.expectToken(T.DOLLAR), this.node(u, {
      kind: S.VARIABLE,
      name: this.parseName()
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: S.SELECTION_SET,
      selections: this.many(
        T.BRACE_L,
        this.parseSelection,
        T.BRACE_R
      )
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  parseSelection() {
    return this.peek(T.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const u = this._lexer.token, r = this.parseName();
    let l, c;
    return this.expectOptionalToken(T.COLON) ? (l = r, c = this.parseName()) : c = r, this.node(u, {
      kind: S.FIELD,
      alias: l,
      name: c,
      arguments: this.parseArguments(!1),
      directives: this.parseDirectives(!1),
      selectionSet: this.peek(T.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(u) {
    const r = u ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(T.PAREN_L, r, T.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(u = !1) {
    const r = this._lexer.token, l = this.parseName();
    return this.expectToken(T.COLON), this.node(r, {
      kind: S.ARGUMENT,
      name: l,
      value: this.parseValueLiteral(u)
    });
  }
  parseConstArgument() {
    return this.parseArgument(!0);
  }
  // Implements the parsing rules in the Fragments section.
  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  parseFragment() {
    const u = this._lexer.token;
    this.expectToken(T.SPREAD);
    const r = this.expectOptionalKeyword("on");
    return !r && this.peek(T.NAME) ? this.node(u, {
      kind: S.FRAGMENT_SPREAD,
      name: this.parseFragmentName(),
      directives: this.parseDirectives(!1)
    }) : this.node(u, {
      kind: S.INLINE_FRAGMENT,
      typeCondition: r ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  parseFragmentDefinition() {
    const u = this._lexer.token;
    return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(u, {
      kind: S.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      variableDefinitions: this.parseVariableDefinitions(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    }) : this.node(u, {
      kind: S.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentName : Name but not `on`
   */
  parseFragmentName() {
    if (this._lexer.token.value === "on")
      throw this.unexpected();
    return this.parseName();
  }
  // Implements the parsing rules in the Values section.
  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseValueLiteral(u) {
    const r = this._lexer.token;
    switch (r.kind) {
      case T.BRACKET_L:
        return this.parseList(u);
      case T.BRACE_L:
        return this.parseObject(u);
      case T.INT:
        return this.advanceLexer(), this.node(r, {
          kind: S.INT,
          value: r.value
        });
      case T.FLOAT:
        return this.advanceLexer(), this.node(r, {
          kind: S.FLOAT,
          value: r.value
        });
      case T.STRING:
      case T.BLOCK_STRING:
        return this.parseStringLiteral();
      case T.NAME:
        switch (this.advanceLexer(), r.value) {
          case "true":
            return this.node(r, {
              kind: S.BOOLEAN,
              value: !0
            });
          case "false":
            return this.node(r, {
              kind: S.BOOLEAN,
              value: !1
            });
          case "null":
            return this.node(r, {
              kind: S.NULL
            });
          default:
            return this.node(r, {
              kind: S.ENUM,
              value: r.value
            });
        }
      case T.DOLLAR:
        if (u)
          if (this.expectToken(T.DOLLAR), this._lexer.token.kind === T.NAME) {
            const l = this._lexer.token.value;
            throw le(
              this._lexer.source,
              r.start,
              `Unexpected variable "$${l}" in constant value.`
            );
          } else
            throw this.unexpected(r);
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(!0);
  }
  parseStringLiteral() {
    const u = this._lexer.token;
    return this.advanceLexer(), this.node(u, {
      kind: S.STRING,
      value: u.value,
      block: u.kind === T.BLOCK_STRING
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  parseList(u) {
    const r = () => this.parseValueLiteral(u);
    return this.node(this._lexer.token, {
      kind: S.LIST,
      values: this.any(T.BRACKET_L, r, T.BRACKET_R)
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */
  parseObject(u) {
    const r = () => this.parseObjectField(u);
    return this.node(this._lexer.token, {
      kind: S.OBJECT,
      fields: this.any(T.BRACE_L, r, T.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(u) {
    const r = this._lexer.token, l = this.parseName();
    return this.expectToken(T.COLON), this.node(r, {
      kind: S.OBJECT_FIELD,
      name: l,
      value: this.parseValueLiteral(u)
    });
  }
  // Implements the parsing rules in the Directives section.
  /**
   * Directives[Const] : Directive[?Const]+
   */
  parseDirectives(u) {
    const r = [];
    for (; this.peek(T.AT); )
      r.push(this.parseDirective(u));
    return r;
  }
  parseConstDirectives() {
    return this.parseDirectives(!0);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */
  parseDirective(u) {
    const r = this._lexer.token;
    return this.expectToken(T.AT), this.node(r, {
      kind: S.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(u)
    });
  }
  // Implements the parsing rules in the Types section.
  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  parseTypeReference() {
    const u = this._lexer.token;
    let r;
    if (this.expectOptionalToken(T.BRACKET_L)) {
      const l = this.parseTypeReference();
      this.expectToken(T.BRACKET_R), r = this.node(u, {
        kind: S.LIST_TYPE,
        type: l
      });
    } else
      r = this.parseNamedType();
    return this.expectOptionalToken(T.BANG) ? this.node(u, {
      kind: S.NON_NULL_TYPE,
      type: r
    }) : r;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: S.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(T.STRING) || this.peek(T.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  parseDescription() {
    if (this.peekDescription())
      return this.parseStringLiteral();
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */
  parseSchemaDefinition() {
    const u = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("schema");
    const l = this.parseConstDirectives(), c = this.many(
      T.BRACE_L,
      this.parseOperationTypeDefinition,
      T.BRACE_R
    );
    return this.node(u, {
      kind: S.SCHEMA_DEFINITION,
      description: r,
      directives: l,
      operationTypes: c
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  parseOperationTypeDefinition() {
    const u = this._lexer.token, r = this.parseOperationType();
    this.expectToken(T.COLON);
    const l = this.parseNamedType();
    return this.node(u, {
      kind: S.OPERATION_TYPE_DEFINITION,
      operation: r,
      type: l
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  parseScalarTypeDefinition() {
    const u = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("scalar");
    const l = this.parseName(), c = this.parseConstDirectives();
    return this.node(u, {
      kind: S.SCALAR_TYPE_DEFINITION,
      description: r,
      name: l,
      directives: c
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  parseObjectTypeDefinition() {
    const u = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("type");
    const l = this.parseName(), c = this.parseImplementsInterfaces(), _ = this.parseConstDirectives(), I = this.parseFieldsDefinition();
    return this.node(u, {
      kind: S.OBJECT_TYPE_DEFINITION,
      description: r,
      name: l,
      interfaces: c,
      directives: _,
      fields: I
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(T.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      T.BRACE_L,
      this.parseFieldDefinition,
      T.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const u = this._lexer.token, r = this.parseDescription(), l = this.parseName(), c = this.parseArgumentDefs();
    this.expectToken(T.COLON);
    const _ = this.parseTypeReference(), I = this.parseConstDirectives();
    return this.node(u, {
      kind: S.FIELD_DEFINITION,
      description: r,
      name: l,
      arguments: c,
      type: _,
      directives: I
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  parseArgumentDefs() {
    return this.optionalMany(
      T.PAREN_L,
      this.parseInputValueDef,
      T.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const u = this._lexer.token, r = this.parseDescription(), l = this.parseName();
    this.expectToken(T.COLON);
    const c = this.parseTypeReference();
    let _;
    this.expectOptionalToken(T.EQUALS) && (_ = this.parseConstValueLiteral());
    const I = this.parseConstDirectives();
    return this.node(u, {
      kind: S.INPUT_VALUE_DEFINITION,
      description: r,
      name: l,
      type: c,
      defaultValue: _,
      directives: I
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  parseInterfaceTypeDefinition() {
    const u = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("interface");
    const l = this.parseName(), c = this.parseImplementsInterfaces(), _ = this.parseConstDirectives(), I = this.parseFieldsDefinition();
    return this.node(u, {
      kind: S.INTERFACE_TYPE_DEFINITION,
      description: r,
      name: l,
      interfaces: c,
      directives: _,
      fields: I
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  parseUnionTypeDefinition() {
    const u = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("union");
    const l = this.parseName(), c = this.parseConstDirectives(), _ = this.parseUnionMemberTypes();
    return this.node(u, {
      kind: S.UNION_TYPE_DEFINITION,
      description: r,
      name: l,
      directives: c,
      types: _
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  parseUnionMemberTypes() {
    return this.expectOptionalToken(T.EQUALS) ? this.delimitedMany(T.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  parseEnumTypeDefinition() {
    const u = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("enum");
    const l = this.parseName(), c = this.parseConstDirectives(), _ = this.parseEnumValuesDefinition();
    return this.node(u, {
      kind: S.ENUM_TYPE_DEFINITION,
      description: r,
      name: l,
      directives: c,
      values: _
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */
  parseEnumValuesDefinition() {
    return this.optionalMany(
      T.BRACE_L,
      this.parseEnumValueDefinition,
      T.BRACE_R
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const u = this._lexer.token, r = this.parseDescription(), l = this.parseEnumValueName(), c = this.parseConstDirectives();
    return this.node(u, {
      kind: S.ENUM_VALUE_DEFINITION,
      description: r,
      name: l,
      directives: c
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null")
      throw le(
        this._lexer.source,
        this._lexer.token.start,
        `${Ar(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  parseInputObjectTypeDefinition() {
    const u = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("input");
    const l = this.parseName(), c = this.parseConstDirectives(), _ = this.parseInputFieldsDefinition();
    return this.node(u, {
      kind: S.INPUT_OBJECT_TYPE_DEFINITION,
      description: r,
      name: l,
      directives: c,
      fields: _
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */
  parseInputFieldsDefinition() {
    return this.optionalMany(
      T.BRACE_L,
      this.parseInputValueDef,
      T.BRACE_R
    );
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  parseTypeSystemExtension() {
    const u = this._lexer.lookahead();
    if (u.kind === T.NAME)
      switch (u.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    throw this.unexpected(u);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */
  parseSchemaExtension() {
    const u = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("schema");
    const r = this.parseConstDirectives(), l = this.optionalMany(
      T.BRACE_L,
      this.parseOperationTypeDefinition,
      T.BRACE_R
    );
    if (r.length === 0 && l.length === 0)
      throw this.unexpected();
    return this.node(u, {
      kind: S.SCHEMA_EXTENSION,
      directives: r,
      operationTypes: l
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  parseScalarTypeExtension() {
    const u = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    const r = this.parseName(), l = this.parseConstDirectives();
    if (l.length === 0)
      throw this.unexpected();
    return this.node(u, {
      kind: S.SCALAR_TYPE_EXTENSION,
      name: r,
      directives: l
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  parseObjectTypeExtension() {
    const u = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("type");
    const r = this.parseName(), l = this.parseImplementsInterfaces(), c = this.parseConstDirectives(), _ = this.parseFieldsDefinition();
    if (l.length === 0 && c.length === 0 && _.length === 0)
      throw this.unexpected();
    return this.node(u, {
      kind: S.OBJECT_TYPE_EXTENSION,
      name: r,
      interfaces: l,
      directives: c,
      fields: _
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  parseInterfaceTypeExtension() {
    const u = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("interface");
    const r = this.parseName(), l = this.parseImplementsInterfaces(), c = this.parseConstDirectives(), _ = this.parseFieldsDefinition();
    if (l.length === 0 && c.length === 0 && _.length === 0)
      throw this.unexpected();
    return this.node(u, {
      kind: S.INTERFACE_TYPE_EXTENSION,
      name: r,
      interfaces: l,
      directives: c,
      fields: _
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  parseUnionTypeExtension() {
    const u = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("union");
    const r = this.parseName(), l = this.parseConstDirectives(), c = this.parseUnionMemberTypes();
    if (l.length === 0 && c.length === 0)
      throw this.unexpected();
    return this.node(u, {
      kind: S.UNION_TYPE_EXTENSION,
      name: r,
      directives: l,
      types: c
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  parseEnumTypeExtension() {
    const u = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("enum");
    const r = this.parseName(), l = this.parseConstDirectives(), c = this.parseEnumValuesDefinition();
    if (l.length === 0 && c.length === 0)
      throw this.unexpected();
    return this.node(u, {
      kind: S.ENUM_TYPE_EXTENSION,
      name: r,
      directives: l,
      values: c
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  parseInputObjectTypeExtension() {
    const u = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("input");
    const r = this.parseName(), l = this.parseConstDirectives(), c = this.parseInputFieldsDefinition();
    if (l.length === 0 && c.length === 0)
      throw this.unexpected();
    return this.node(u, {
      kind: S.INPUT_OBJECT_TYPE_EXTENSION,
      name: r,
      directives: l,
      fields: c
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */
  parseDirectiveDefinition() {
    const u = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken(T.AT);
    const l = this.parseName(), c = this.parseArgumentDefs(), _ = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const I = this.parseDirectiveLocations();
    return this.node(u, {
      kind: S.DIRECTIVE_DEFINITION,
      description: r,
      name: l,
      arguments: c,
      repeatable: _,
      locations: I
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  parseDirectiveLocations() {
    return this.delimitedMany(T.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  parseDirectiveLocation() {
    const u = this._lexer.token, r = this.parseName();
    if (Object.prototype.hasOwnProperty.call(ns, r.value))
      return r;
    throw this.unexpected(u);
  }
  // Core parsing utility functions
  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */
  node(u, r) {
    return this._options.noLocation !== !0 && (r.loc = new ag(
      u,
      this._lexer.lastToken,
      this._lexer.source
    )), r;
  }
  /**
   * Determines if the next token is of a given kind
   */
  peek(u) {
    return this._lexer.token.kind === u;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectToken(u) {
    const r = this._lexer.token;
    if (r.kind === u)
      return this.advanceLexer(), r;
    throw le(
      this._lexer.source,
      r.start,
      `Expected ${ea(u)}, found ${Ar(r)}.`
    );
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalToken(u) {
    return this._lexer.token.kind === u ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectKeyword(u) {
    const r = this._lexer.token;
    if (r.kind === T.NAME && r.value === u)
      this.advanceLexer();
    else
      throw le(
        this._lexer.source,
        r.start,
        `Expected "${u}", found ${Ar(r)}.`
      );
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(u) {
    const r = this._lexer.token;
    return r.kind === T.NAME && r.value === u ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(u) {
    const r = u ?? this._lexer.token;
    return le(
      this._lexer.source,
      r.start,
      `Unexpected ${Ar(r)}.`
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  any(u, r, l) {
    this.expectToken(u);
    const c = [];
    for (; !this.expectOptionalToken(l); )
      c.push(r.call(this));
    return c;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  optionalMany(u, r, l) {
    if (this.expectOptionalToken(u)) {
      const c = [];
      do
        c.push(r.call(this));
      while (!this.expectOptionalToken(l));
      return c;
    }
    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  many(u, r, l) {
    this.expectToken(u);
    const c = [];
    do
      c.push(r.call(this));
    while (!this.expectOptionalToken(l));
    return c;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  delimitedMany(u, r) {
    this.expectOptionalToken(u);
    const l = [];
    do
      l.push(r.call(this));
    while (this.expectOptionalToken(u));
    return l;
  }
  advanceLexer() {
    const { maxTokens: u } = this._options, r = this._lexer.advance();
    if (u !== void 0 && r.kind !== T.EOF && (++this._tokenCounter, this._tokenCounter > u))
      throw le(
        this._lexer.source,
        r.start,
        `Document contains more that ${u} tokens. Parsing aborted.`
      );
  }
}
function Ar(s) {
  const u = s.value;
  return ea(s.kind) + (u != null ? ` "${u}"` : "");
}
function ea(s) {
  return gg(s) ? `"${s}"` : s;
}
function Pg(s) {
  return `"${s.replace(Bg, Mg)}"`;
}
const Bg = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Mg(s) {
  return Ug[s.charCodeAt(0)];
}
const Ug = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 2F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 3F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 4F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  // 5F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 6F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
], kg = Object.freeze({});
function na(s, u, r = Ho) {
  const l = /* @__PURE__ */ new Map();
  for (const he of Object.values(S))
    l.set(he, Wg(u, he));
  let c, _ = Array.isArray(s), I = [s], P = -1, L = [], R = s, k, Y;
  const X = [], fe = [];
  do {
    P++;
    const he = P === I.length, jn = he && L.length !== 0;
    if (he) {
      if (k = fe.length === 0 ? void 0 : X[X.length - 1], R = Y, Y = fe.pop(), jn)
        if (_) {
          R = R.slice();
          let me = 0;
          for (const [Ie, en] of L) {
            const Fe = Ie - me;
            en === null ? (R.splice(Fe, 1), me++) : R[Fe] = en;
          }
        } else {
          R = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(R)
          );
          for (const [me, Ie] of L)
            R[me] = Ie;
        }
      P = c.index, I = c.keys, L = c.edits, _ = c.inArray, c = c.prev;
    } else if (Y) {
      if (k = _ ? P : I[P], R = Y[k], R == null)
        continue;
      X.push(k);
    }
    let ue;
    if (!Array.isArray(R)) {
      var K, Ee;
      Vo(R) || Ir(!1, `Invalid AST Node: ${ss(R)}.`);
      const me = he ? (K = l.get(R.kind)) === null || K === void 0 ? void 0 : K.leave : (Ee = l.get(R.kind)) === null || Ee === void 0 ? void 0 : Ee.enter;
      if (ue = me == null ? void 0 : me.call(u, R, k, Y, X, fe), ue === kg)
        break;
      if (ue === !1) {
        if (!he) {
          X.pop();
          continue;
        }
      } else if (ue !== void 0 && (L.push([k, ue]), !he))
        if (Vo(ue))
          R = ue;
        else {
          X.pop();
          continue;
        }
    }
    if (ue === void 0 && jn && L.push([k, R]), he)
      X.pop();
    else {
      var ge;
      c = {
        inArray: _,
        index: P,
        keys: I,
        edits: L,
        prev: c
      }, _ = Array.isArray(R), I = _ ? R : (ge = r[R.kind]) !== null && ge !== void 0 ? ge : [], P = -1, L = [], Y && fe.push(Y), Y = R;
    }
  } while (c !== void 0);
  return L.length !== 0 ? L[L.length - 1][1] : s;
}
function Wg(s, u) {
  const r = s[u];
  return typeof r == "object" ? r : typeof r == "function" ? {
    enter: r,
    leave: void 0
  } : {
    enter: s.enter,
    leave: s.leave
  };
}
function ta(s) {
  return na(s, Gg);
}
const Vg = 80, Gg = {
  Name: {
    leave: (s) => s.value
  },
  Variable: {
    leave: (s) => "$" + s.name
  },
  // Document
  Document: {
    leave: (s) => O(s.definitions, `

`)
  },
  OperationDefinition: {
    leave(s) {
      const u = $("(", O(s.variableDefinitions, ", "), ")"), r = O(
        [
          s.operation,
          O([s.name, u]),
          O(s.directives, " ")
        ],
        " "
      );
      return (r === "query" ? "" : r + " ") + s.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: s, type: u, defaultValue: r, directives: l }) => s + ": " + u + $(" = ", r) + $(" ", O(l, " "))
  },
  SelectionSet: {
    leave: ({ selections: s }) => Xe(s)
  },
  Field: {
    leave({ alias: s, name: u, arguments: r, directives: l, selectionSet: c }) {
      const _ = $("", s, ": ") + u;
      let I = _ + $("(", O(r, ", "), ")");
      return I.length > Vg && (I = _ + $(`(
`, yr(O(r, `
`)), `
)`)), O([I, O(l, " "), c], " ");
    }
  },
  Argument: {
    leave: ({ name: s, value: u }) => s + ": " + u
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: s, directives: u }) => "..." + s + $(" ", O(u, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: s, directives: u, selectionSet: r }) => O(
      [
        "...",
        $("on ", s),
        O(u, " "),
        r
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: s, typeCondition: u, variableDefinitions: r, directives: l, selectionSet: c }) => (
      // or removed in the future.
      `fragment ${s}${$("(", O(r, ", "), ")")} on ${u} ${$("", O(l, " "), " ")}` + c
    )
  },
  // Value
  IntValue: {
    leave: ({ value: s }) => s
  },
  FloatValue: {
    leave: ({ value: s }) => s
  },
  StringValue: {
    leave: ({ value: s, block: u }) => u ? pg(s) : Pg(s)
  },
  BooleanValue: {
    leave: ({ value: s }) => s ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value: s }) => s
  },
  ListValue: {
    leave: ({ values: s }) => "[" + O(s, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: s }) => "{" + O(s, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: s, value: u }) => s + ": " + u
  },
  // Directive
  Directive: {
    leave: ({ name: s, arguments: u }) => "@" + s + $("(", O(u, ", "), ")")
  },
  // Type
  NamedType: {
    leave: ({ name: s }) => s
  },
  ListType: {
    leave: ({ type: s }) => "[" + s + "]"
  },
  NonNullType: {
    leave: ({ type: s }) => s + "!"
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description: s, directives: u, operationTypes: r }) => $("", s, `
`) + O(["schema", O(u, " "), Xe(r)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: s, type: u }) => s + ": " + u
  },
  ScalarTypeDefinition: {
    leave: ({ description: s, name: u, directives: r }) => $("", s, `
`) + O(["scalar", u, O(r, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: s, name: u, interfaces: r, directives: l, fields: c }) => $("", s, `
`) + O(
      [
        "type",
        u,
        $("implements ", O(r, " & ")),
        O(l, " "),
        Xe(c)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: s, name: u, arguments: r, type: l, directives: c }) => $("", s, `
`) + u + ($o(r) ? $(`(
`, yr(O(r, `
`)), `
)`) : $("(", O(r, ", "), ")")) + ": " + l + $(" ", O(c, " "))
  },
  InputValueDefinition: {
    leave: ({ description: s, name: u, type: r, defaultValue: l, directives: c }) => $("", s, `
`) + O(
      [u + ": " + r, $("= ", l), O(c, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: s, name: u, interfaces: r, directives: l, fields: c }) => $("", s, `
`) + O(
      [
        "interface",
        u,
        $("implements ", O(r, " & ")),
        O(l, " "),
        Xe(c)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: s, name: u, directives: r, types: l }) => $("", s, `
`) + O(
      ["union", u, O(r, " "), $("= ", O(l, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: s, name: u, directives: r, values: l }) => $("", s, `
`) + O(["enum", u, O(r, " "), Xe(l)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: s, name: u, directives: r }) => $("", s, `
`) + O([u, O(r, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: s, name: u, directives: r, fields: l }) => $("", s, `
`) + O(["input", u, O(r, " "), Xe(l)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: s, name: u, arguments: r, repeatable: l, locations: c }) => $("", s, `
`) + "directive @" + u + ($o(r) ? $(`(
`, yr(O(r, `
`)), `
)`) : $("(", O(r, ", "), ")")) + (l ? " repeatable" : "") + " on " + O(c, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: s, operationTypes: u }) => O(
      ["extend schema", O(s, " "), Xe(u)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: s, directives: u }) => O(["extend scalar", s, O(u, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: s, interfaces: u, directives: r, fields: l }) => O(
      [
        "extend type",
        s,
        $("implements ", O(u, " & ")),
        O(r, " "),
        Xe(l)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: s, interfaces: u, directives: r, fields: l }) => O(
      [
        "extend interface",
        s,
        $("implements ", O(u, " & ")),
        O(r, " "),
        Xe(l)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: s, directives: u, types: r }) => O(
      [
        "extend union",
        s,
        O(u, " "),
        $("= ", O(r, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: s, directives: u, values: r }) => O(["extend enum", s, O(u, " "), Xe(r)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: s, directives: u, fields: r }) => O(["extend input", s, O(u, " "), Xe(r)], " ")
  }
};
function O(s, u = "") {
  var r;
  return (r = s == null ? void 0 : s.filter((l) => l).join(u)) !== null && r !== void 0 ? r : "";
}
function Xe(s) {
  return $(`{
`, yr(O(s, `
`)), `
}`);
}
function $(s, u, r = "") {
  return u != null && u !== "" ? s + u + r : "";
}
function yr(s) {
  return $("  ", s.replace(/\n/g, `
  `));
}
function $o(s) {
  var u;
  return (u = s == null ? void 0 : s.some((r) => r.includes(`
`))) !== null && u !== void 0 ? u : !1;
}
var Nr = /* @__PURE__ */ new Map(), rs = /* @__PURE__ */ new Map(), ra = !0, Sr = !1;
function ia(s) {
  return s.replace(/[\s,]+/g, " ").trim();
}
function $g(s) {
  return ia(s.source.body.substring(s.start, s.end));
}
function qg(s) {
  var u = /* @__PURE__ */ new Set(), r = [];
  return s.definitions.forEach(function(l) {
    if (l.kind === "FragmentDefinition") {
      var c = l.name.value, _ = $g(l.loc), I = rs.get(c);
      I && !I.has(_) ? ra && console.warn("Warning: fragment with name " + c + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : I || rs.set(c, I = /* @__PURE__ */ new Set()), I.add(_), u.has(_) || (u.add(_), r.push(l));
    } else
      r.push(l);
  }), wr(wr({}, s), { definitions: r });
}
function Yg(s) {
  var u = new Set(s.definitions);
  u.forEach(function(l) {
    l.loc && delete l.loc, Object.keys(l).forEach(function(c) {
      var _ = l[c];
      _ && typeof _ == "object" && u.add(_);
    });
  });
  var r = s.loc;
  return r && (delete r.startToken, delete r.endToken), s;
}
function Hg(s) {
  var u = ia(s);
  if (!Nr.has(u)) {
    var r = jo(s, {
      experimentalFragmentVariables: Sr,
      allowLegacyFragmentVariables: Sr
    });
    if (!r || r.kind !== "Document")
      throw new Error("Not a valid GraphQL document.");
    Nr.set(u, Yg(qg(r)));
  }
  return Nr.get(u);
}
function Kn(s) {
  for (var u = [], r = 1; r < arguments.length; r++)
    u[r - 1] = arguments[r];
  typeof s == "string" && (s = [s]);
  var l = s[0];
  return u.forEach(function(c, _) {
    c && c.kind === "Document" ? l += c.loc.source.body : l += c, l += s[_ + 1];
  }), Hg(l);
}
function zg() {
  Nr.clear(), rs.clear();
}
function Jg() {
  ra = !1;
}
function Xg() {
  Sr = !0;
}
function Qg() {
  Sr = !1;
}
var yt = {
  gql: Kn,
  resetCaches: zg,
  disableFragmentWarnings: Jg,
  enableExperimentalFragmentVariables: Xg,
  disableExperimentalFragmentVariables: Qg
};
(function(s) {
  s.gql = yt.gql, s.resetCaches = yt.resetCaches, s.disableFragmentWarnings = yt.disableFragmentWarnings, s.enableExperimentalFragmentVariables = yt.enableExperimentalFragmentVariables, s.disableExperimentalFragmentVariables = yt.disableExperimentalFragmentVariables;
})(Kn || (Kn = {}));
Kn.default = Kn;
class St {
  constructor(u, r, l, c) {
    this.operationName = u, this.documentNode = r, this.variables = l, this.sourceMap = c;
  }
  static fromString(u) {
    const { operationName: r, query: l, variables: c } = JSON.parse(u);
    return new St(
      r ?? null,
      jo(l),
      c ?? null,
      null
    );
  }
  getOperationDefinition(u = this.documentNode) {
    const r = u.definitions.find(
      (l) => l.kind === S.OPERATION_DEFINITION
    );
    if (!r)
      throw new Error("OperationDefinitionNode should be available");
    return r;
  }
  getOperationName() {
    var u;
    return ((u = this.getOperationDefinition().name) == null ? void 0 : u.value) ?? null;
  }
  isQuery() {
    return this.getOperationDefinition().operation === "query";
  }
  hasOnlyOneDefinition() {
    return this.documentNode.definitions.length === 1;
  }
  canGetNamespaced() {
    return this.isQuery() && this.hasOnlyOneDefinition();
  }
  getFields(u = this.documentNode) {
    return this.getOperationDefinition(
      u
    ).selectionSet.selections.filter(
      (r) => r.kind === S.FIELD
    );
  }
  getVariableDefinitions(u = this.documentNode) {
    return [
      ...this.getOperationDefinition(u).variableDefinitions ?? []
    ];
  }
  getWithNamespacedVariables(u, r, l) {
    return na(u, {
      Variable(c) {
        return {
          ...c,
          name: {
            kind: S.NAME,
            value: l.getNamespacedVariableName(
              r,
              c.name.value
            )
          }
        };
      }
    });
  }
  getWithNamespacedFields(u, r, l) {
    const c = this.getOperationDefinition(u);
    return {
      ...u,
      definitions: [
        {
          ...c,
          selectionSet: {
            ...c.selectionSet,
            selections: this.getFields(u).map((_) => {
              var I;
              return {
                ..._,
                alias: {
                  kind: S.NAME,
                  value: l.newNamespacedFieldName(
                    r,
                    ((I = _.alias) == null ? void 0 : I.value) ?? _.name.value
                  )
                }
              };
            })
          }
        }
      ]
    };
  }
  namespaced(u, r) {
    const l = [
      this.getWithNamespacedVariables.bind(this),
      this.getWithNamespacedFields.bind(this)
    ].reduce(
      (_, I) => I(_, u, r),
      this.documentNode
    ), c = this.variables && Object.fromEntries(
      Object.entries(this.variables).map(([_, I]) => [
        r.getNamespacedVariableName(u, _),
        I
      ])
    );
    return new St(
      this.operationName,
      l,
      c,
      r
    );
  }
  toPlainObject() {
    return Object.fromEntries(
      [
        ["operationName", this.operationName],
        ["query", ta(this.documentNode)],
        ["variables", this.variables]
      ].filter(([u, r]) => !!r)
    );
  }
  toString() {
    return JSON.stringify(this.toPlainObject());
  }
}
class Kg {
  constructor() {
    hn(this, "variables", {});
    hn(this, "fields", {});
  }
  newNamespacedFieldName(u, r) {
    const l = this.fields[u] ?? [], c = l.length, _ = ["r", u, "f", c].join("");
    return this.fields = {
      ...this.fields,
      [u]: [...l, { source: r, namespaced: _ }]
    }, _;
  }
  getNamespacedVariableName(u, r) {
    const l = this.variables[u] ?? [], c = l.find(
      (P) => P.source === r
    );
    if (c)
      return c.namespaced;
    const _ = l.length, I = ["r", u, "v", _].join("");
    return this.variables = {
      ...this.variables,
      [u]: [
        ...l,
        { source: r, namespaced: I }
      ]
    }, I;
  }
  getSourceFieldName(u, r) {
    var l;
    return ((l = this.fields[u].find(
      ({ namespaced: c }) => c === r
    )) == null ? void 0 : l.source) ?? null;
  }
  getSourceResponseErrors(u, r) {
    const l = (r ?? []).flatMap((c) => {
      const _ = this.getSourceFieldName(u, c.path[0]);
      return _ ? [
        {
          ...c,
          path: [_, ...c.path.slice(1)]
        }
      ] : [];
    });
    return l.length > 0 ? l : void 0;
  }
  getSourceResponseData(u, r) {
    const l = this.fields[u];
    if (!l)
      throw new Error(
        `requestId "${u}" is not found. fields source map: ${JSON.stringify(this.fields)}`
      );
    return Object.fromEntries(
      l.map(({ source: c, namespaced: _ }) => [
        c,
        r[_]
      ])
    );
  }
}
class Zg {
  constructor(u) {
    hn(this, "payloads");
    hn(this, "sourceMap", new Kg());
    this.payloads = u.map(
      (r, l) => St.fromString(r).namespaced(
        String(l),
        this.sourceMap
      )
    );
  }
  execute() {
    const u = Kn`
			query BundledQuery($y: String!) {
				x
			}
		`, r = u.definitions[0], l = {
      ...u,
      definitions: [
        {
          ...r,
          variableDefinitions: this.payloads.flatMap(
            (I) => I.getVariableDefinitions()
          ),
          selectionSet: {
            ...r.selectionSet,
            selections: this.payloads.flatMap((I) => I.getFields())
          }
        }
      ]
    }, c = this.payloads.flatMap(
      (I) => I.variables ? Object.entries(I.variables) : []
    ), _ = c.length > 0 ? Object.fromEntries(c) : null;
    return {
      output: JSON.stringify(
        Ot.omitBy(
          {
            operationName: "BundledQuery",
            query: ta(l),
            variables: _
          },
          Ot.isNil
        )
      ),
      sourceMap: this.sourceMap
    };
  }
}
class e_ {
  constructor(u) {
    hn(this, "fetchFunc");
    hn(this, "requests", []);
    hn(this, "responsePromises", []);
    hn(this, "softExecute");
    this.fetchFunc = u.fetchFunc, this.softExecute = Ot.debounce(
      this.execute.bind(this),
      u.bundlingIntervalMs
    );
  }
  async submitRequest(u) {
    return await this.canGetBundled(u) ? (this.requests.push(u), this.softExecute(), new Promise((l, c) => {
      this.responsePromises.push([l, c]);
    })) : this.fetchFunc(u);
  }
  async canGetBundled(u) {
    const r = await u.clone().text();
    return St.fromString(r).canGetNamespaced();
  }
  popAllRequests() {
    const u = [...this.requests];
    return this.requests = [], u;
  }
  async execute() {
    const u = this.popAllRequests();
    if (u.length === 0)
      return;
    const [r] = u, l = await Promise.all(u.map((L) => L.clone().text())), { output: c, sourceMap: _ } = new Zg(l).execute(), P = await (await this.fetchFunc(
      new Request(r.url, {
        method: r.method,
        headers: r.headers,
        body: c
      })
    )).json();
    P.data ? this.responsePromises.forEach(([L], R) => {
      const k = _.getSourceResponseData(
        String(R),
        P.data ?? {}
      ), Y = _.getSourceResponseErrors(
        String(R),
        P.errors
      ), X = JSON.stringify(
        Ot.omitBy({ errors: Y, data: k }, Ot.isUndefined)
      );
      L(new Response(X));
    }) : this.responsePromises.forEach(([L, R], k) => {
      this.fetchFunc(u[k]).then(L, R);
    });
  }
  forceExecute() {
    return this.softExecute.cancel(), this.execute();
  }
}
export {
  e_ as ServerProxy
};
