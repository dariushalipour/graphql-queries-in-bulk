var ng = Object.defineProperty;
var tg = (s, u, r) => u in s ? ng(s, u, { enumerable: !0, configurable: !0, writable: !0, value: r }) : s[u] = r;
var An = (s, u, r) => tg(s, typeof u != "symbol" ? u + "" : u, r);
var Nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Or = { exports: {} };
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
    var r, l = "4.17.21", c = 200, _ = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", A = "Expected a function", D = "Invalid `variable` option passed into `_.template`", L = "__lodash_hash_undefined__", F = 500, U = "__lodash_placeholder__", q = 1, X = 2, fe = 4, K = 1, me = 2, ge = 1, he = 2, et = 4, ue = 8, Ee = 16, Ie = 32, en = 64, Fe = 128, nt = 256, br = 512, sa = 30, ua = "...", oa = 800, aa = 16, os = 1, fa = 2, ca = 3, In = 1 / 0, hn = 9007199254740991, la = 17976931348623157e292, Dt = NaN, Qe = 4294967295, ha = Qe - 1, pa = Qe >>> 1, da = [
      ["ary", Fe],
      ["bind", ge],
      ["bindKey", he],
      ["curry", ue],
      ["curryRight", Ee],
      ["flip", br],
      ["partial", Ie],
      ["partialRight", en],
      ["rearg", nt]
    ], Pn = "[object Arguments]", Ct = "[object Array]", ga = "[object AsyncFunction]", tt = "[object Boolean]", rt = "[object Date]", _a = "[object DOMException]", bt = "[object Error]", Rt = "[object Function]", as = "[object GeneratorFunction]", $e = "[object Map]", it = "[object Number]", va = "[object Null]", nn = "[object Object]", fs = "[object Promise]", ma = "[object Proxy]", st = "[object RegExp]", Ye = "[object Set]", ut = "[object String]", Lt = "[object Symbol]", Ea = "[object Undefined]", ot = "[object WeakMap]", xa = "[object WeakSet]", at = "[object ArrayBuffer]", Bn = "[object DataView]", Rr = "[object Float32Array]", Lr = "[object Float64Array]", Fr = "[object Int8Array]", Pr = "[object Int16Array]", Br = "[object Int32Array]", Mr = "[object Uint8Array]", kr = "[object Uint8ClampedArray]", Ur = "[object Uint16Array]", Wr = "[object Uint32Array]", Ta = /\b__p \+= '';/g, Aa = /\b(__p \+=) '' \+/g, Ia = /(__e\(.*?\)|\b__t\)) \+\n'';/g, cs = /&(?:amp|lt|gt|quot|#39);/g, ls = /[&<>"']/g, Na = RegExp(cs.source), ya = RegExp(ls.source), Oa = /<%-([\s\S]+?)%>/g, wa = /<%([\s\S]+?)%>/g, hs = /<%=([\s\S]+?)%>/g, Sa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Da = /^\w*$/, Ca = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Gr = /[\\^$.*+?()[\]{}|]/g, ba = RegExp(Gr.source), Vr = /^\s+/, Ra = /\s/, La = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Fa = /\{\n\/\* \[wrapped with (.+)\] \*/, Pa = /,? & /, Ba = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ma = /[()=,{}\[\]\/\s]/, ka = /\\(\\)?/g, Ua = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ps = /\w*$/, Wa = /^[-+]0x[0-9a-f]+$/i, Ga = /^0b[01]+$/i, Va = /^\[object .+?Constructor\]$/, $a = /^0o[0-7]+$/i, Ya = /^(?:0|[1-9]\d*)$/, qa = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ft = /($^)/, Ha = /['\n\r\u2028\u2029\\]/g, Pt = "\\ud800-\\udfff", za = "\\u0300-\\u036f", Ja = "\\ufe20-\\ufe2f", Xa = "\\u20d0-\\u20ff", ds = za + Ja + Xa, gs = "\\u2700-\\u27bf", _s = "a-z\\xdf-\\xf6\\xf8-\\xff", Qa = "\\xac\\xb1\\xd7\\xf7", Ka = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Za = "\\u2000-\\u206f", ja = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", vs = "A-Z\\xc0-\\xd6\\xd8-\\xde", ms = "\\ufe0e\\ufe0f", Es = Qa + Ka + Za + ja, $r = "['’]", ef = "[" + Pt + "]", xs = "[" + Es + "]", Bt = "[" + ds + "]", Ts = "\\d+", nf = "[" + gs + "]", As = "[" + _s + "]", Is = "[^" + Pt + Es + Ts + gs + _s + vs + "]", Yr = "\\ud83c[\\udffb-\\udfff]", tf = "(?:" + Bt + "|" + Yr + ")", Ns = "[^" + Pt + "]", qr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Hr = "[\\ud800-\\udbff][\\udc00-\\udfff]", Mn = "[" + vs + "]", ys = "\\u200d", Os = "(?:" + As + "|" + Is + ")", rf = "(?:" + Mn + "|" + Is + ")", ws = "(?:" + $r + "(?:d|ll|m|re|s|t|ve))?", Ss = "(?:" + $r + "(?:D|LL|M|RE|S|T|VE))?", Ds = tf + "?", Cs = "[" + ms + "]?", sf = "(?:" + ys + "(?:" + [Ns, qr, Hr].join("|") + ")" + Cs + Ds + ")*", uf = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", of = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", bs = Cs + Ds + sf, af = "(?:" + [nf, qr, Hr].join("|") + ")" + bs, ff = "(?:" + [Ns + Bt + "?", Bt, qr, Hr, ef].join("|") + ")", cf = RegExp($r, "g"), lf = RegExp(Bt, "g"), zr = RegExp(Yr + "(?=" + Yr + ")|" + ff + bs, "g"), hf = RegExp([
      Mn + "?" + As + "+" + ws + "(?=" + [xs, Mn, "$"].join("|") + ")",
      rf + "+" + Ss + "(?=" + [xs, Mn + Os, "$"].join("|") + ")",
      Mn + "?" + Os + "+" + ws,
      Mn + "+" + Ss,
      of,
      uf,
      Ts,
      af
    ].join("|"), "g"), pf = RegExp("[" + ys + Pt + ds + ms + "]"), df = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, gf = [
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
    j[Rr] = j[Lr] = j[Fr] = j[Pr] = j[Br] = j[Mr] = j[kr] = j[Ur] = j[Wr] = !0, j[Pn] = j[Ct] = j[at] = j[tt] = j[Bn] = j[rt] = j[bt] = j[Rt] = j[$e] = j[it] = j[nn] = j[st] = j[Ye] = j[ut] = j[ot] = !1;
    var Z = {};
    Z[Pn] = Z[Ct] = Z[at] = Z[Bn] = Z[tt] = Z[rt] = Z[Rr] = Z[Lr] = Z[Fr] = Z[Pr] = Z[Br] = Z[$e] = Z[it] = Z[nn] = Z[st] = Z[Ye] = Z[ut] = Z[Lt] = Z[Mr] = Z[kr] = Z[Ur] = Z[Wr] = !0, Z[bt] = Z[Rt] = Z[ot] = !1;
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
    }, mf = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Ef = {
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
    }, Tf = parseFloat, Af = parseInt, Rs = typeof Nt == "object" && Nt && Nt.Object === Object && Nt, If = typeof self == "object" && self && self.Object === Object && self, pe = Rs || If || Function("return this")(), Jr = u && !u.nodeType && u, Nn = Jr && !0 && s && !s.nodeType && s, Ls = Nn && Nn.exports === Jr, Xr = Ls && Rs.process, Pe = function() {
      try {
        var d = Nn && Nn.require && Nn.require("util").types;
        return d || Xr && Xr.binding && Xr.binding("util");
      } catch {
      }
    }(), Fs = Pe && Pe.isArrayBuffer, Ps = Pe && Pe.isDate, Bs = Pe && Pe.isMap, Ms = Pe && Pe.isRegExp, ks = Pe && Pe.isSet, Us = Pe && Pe.isTypedArray;
    function Se(d, m, v) {
      switch (v.length) {
        case 0:
          return d.call(m);
        case 1:
          return d.call(m, v[0]);
        case 2:
          return d.call(m, v[0], v[1]);
        case 3:
          return d.call(m, v[0], v[1], v[2]);
      }
      return d.apply(m, v);
    }
    function Nf(d, m, v, y) {
      for (var P = -1, H = d == null ? 0 : d.length; ++P < H; ) {
        var oe = d[P];
        m(y, oe, v(oe), d);
      }
      return y;
    }
    function Be(d, m) {
      for (var v = -1, y = d == null ? 0 : d.length; ++v < y && m(d[v], v, d) !== !1; )
        ;
      return d;
    }
    function yf(d, m) {
      for (var v = d == null ? 0 : d.length; v-- && m(d[v], v, d) !== !1; )
        ;
      return d;
    }
    function Ws(d, m) {
      for (var v = -1, y = d == null ? 0 : d.length; ++v < y; )
        if (!m(d[v], v, d))
          return !1;
      return !0;
    }
    function pn(d, m) {
      for (var v = -1, y = d == null ? 0 : d.length, P = 0, H = []; ++v < y; ) {
        var oe = d[v];
        m(oe, v, d) && (H[P++] = oe);
      }
      return H;
    }
    function Mt(d, m) {
      var v = d == null ? 0 : d.length;
      return !!v && kn(d, m, 0) > -1;
    }
    function Qr(d, m, v) {
      for (var y = -1, P = d == null ? 0 : d.length; ++y < P; )
        if (v(m, d[y]))
          return !0;
      return !1;
    }
    function ee(d, m) {
      for (var v = -1, y = d == null ? 0 : d.length, P = Array(y); ++v < y; )
        P[v] = m(d[v], v, d);
      return P;
    }
    function dn(d, m) {
      for (var v = -1, y = m.length, P = d.length; ++v < y; )
        d[P + v] = m[v];
      return d;
    }
    function Kr(d, m, v, y) {
      var P = -1, H = d == null ? 0 : d.length;
      for (y && H && (v = d[++P]); ++P < H; )
        v = m(v, d[P], P, d);
      return v;
    }
    function Of(d, m, v, y) {
      var P = d == null ? 0 : d.length;
      for (y && P && (v = d[--P]); P--; )
        v = m(v, d[P], P, d);
      return v;
    }
    function Zr(d, m) {
      for (var v = -1, y = d == null ? 0 : d.length; ++v < y; )
        if (m(d[v], v, d))
          return !0;
      return !1;
    }
    var wf = jr("length");
    function Sf(d) {
      return d.split("");
    }
    function Df(d) {
      return d.match(Ba) || [];
    }
    function Gs(d, m, v) {
      var y;
      return v(d, function(P, H, oe) {
        if (m(P, H, oe))
          return y = H, !1;
      }), y;
    }
    function kt(d, m, v, y) {
      for (var P = d.length, H = v + (y ? 1 : -1); y ? H-- : ++H < P; )
        if (m(d[H], H, d))
          return H;
      return -1;
    }
    function kn(d, m, v) {
      return m === m ? Gf(d, m, v) : kt(d, Vs, v);
    }
    function Cf(d, m, v, y) {
      for (var P = v - 1, H = d.length; ++P < H; )
        if (y(d[P], m))
          return P;
      return -1;
    }
    function Vs(d) {
      return d !== d;
    }
    function $s(d, m) {
      var v = d == null ? 0 : d.length;
      return v ? ni(d, m) / v : Dt;
    }
    function jr(d) {
      return function(m) {
        return m == null ? r : m[d];
      };
    }
    function ei(d) {
      return function(m) {
        return d == null ? r : d[m];
      };
    }
    function Ys(d, m, v, y, P) {
      return P(d, function(H, oe, Q) {
        v = y ? (y = !1, H) : m(v, H, oe, Q);
      }), v;
    }
    function bf(d, m) {
      var v = d.length;
      for (d.sort(m); v--; )
        d[v] = d[v].value;
      return d;
    }
    function ni(d, m) {
      for (var v, y = -1, P = d.length; ++y < P; ) {
        var H = m(d[y]);
        H !== r && (v = v === r ? H : v + H);
      }
      return v;
    }
    function ti(d, m) {
      for (var v = -1, y = Array(d); ++v < d; )
        y[v] = m(v);
      return y;
    }
    function Rf(d, m) {
      return ee(m, function(v) {
        return [v, d[v]];
      });
    }
    function qs(d) {
      return d && d.slice(0, Xs(d) + 1).replace(Vr, "");
    }
    function De(d) {
      return function(m) {
        return d(m);
      };
    }
    function ri(d, m) {
      return ee(m, function(v) {
        return d[v];
      });
    }
    function ft(d, m) {
      return d.has(m);
    }
    function Hs(d, m) {
      for (var v = -1, y = d.length; ++v < y && kn(m, d[v], 0) > -1; )
        ;
      return v;
    }
    function zs(d, m) {
      for (var v = d.length; v-- && kn(m, d[v], 0) > -1; )
        ;
      return v;
    }
    function Lf(d, m) {
      for (var v = d.length, y = 0; v--; )
        d[v] === m && ++y;
      return y;
    }
    var Ff = ei(vf), Pf = ei(mf);
    function Bf(d) {
      return "\\" + xf[d];
    }
    function Mf(d, m) {
      return d == null ? r : d[m];
    }
    function Un(d) {
      return pf.test(d);
    }
    function kf(d) {
      return df.test(d);
    }
    function Uf(d) {
      for (var m, v = []; !(m = d.next()).done; )
        v.push(m.value);
      return v;
    }
    function ii(d) {
      var m = -1, v = Array(d.size);
      return d.forEach(function(y, P) {
        v[++m] = [P, y];
      }), v;
    }
    function Js(d, m) {
      return function(v) {
        return d(m(v));
      };
    }
    function gn(d, m) {
      for (var v = -1, y = d.length, P = 0, H = []; ++v < y; ) {
        var oe = d[v];
        (oe === m || oe === U) && (d[v] = U, H[P++] = v);
      }
      return H;
    }
    function Ut(d) {
      var m = -1, v = Array(d.size);
      return d.forEach(function(y) {
        v[++m] = y;
      }), v;
    }
    function Wf(d) {
      var m = -1, v = Array(d.size);
      return d.forEach(function(y) {
        v[++m] = [y, y];
      }), v;
    }
    function Gf(d, m, v) {
      for (var y = v - 1, P = d.length; ++y < P; )
        if (d[y] === m)
          return y;
      return -1;
    }
    function Vf(d, m, v) {
      for (var y = v + 1; y--; )
        if (d[y] === m)
          return y;
      return y;
    }
    function Wn(d) {
      return Un(d) ? Yf(d) : wf(d);
    }
    function qe(d) {
      return Un(d) ? qf(d) : Sf(d);
    }
    function Xs(d) {
      for (var m = d.length; m-- && Ra.test(d.charAt(m)); )
        ;
      return m;
    }
    var $f = ei(Ef);
    function Yf(d) {
      for (var m = zr.lastIndex = 0; zr.test(d); )
        ++m;
      return m;
    }
    function qf(d) {
      return d.match(zr) || [];
    }
    function Hf(d) {
      return d.match(hf) || [];
    }
    var zf = function d(m) {
      m = m == null ? pe : Gn.defaults(pe.Object(), m, Gn.pick(pe, gf));
      var v = m.Array, y = m.Date, P = m.Error, H = m.Function, oe = m.Math, Q = m.Object, si = m.RegExp, Jf = m.String, Me = m.TypeError, Wt = v.prototype, Xf = H.prototype, Vn = Q.prototype, Gt = m["__core-js_shared__"], Vt = Xf.toString, J = Vn.hasOwnProperty, Qf = 0, Qs = function() {
        var e = /[^.]+$/.exec(Gt && Gt.keys && Gt.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), $t = Vn.toString, Kf = Vt.call(Q), Zf = pe._, jf = si(
        "^" + Vt.call(J).replace(Gr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Yt = Ls ? m.Buffer : r, _n = m.Symbol, qt = m.Uint8Array, Ks = Yt ? Yt.allocUnsafe : r, Ht = Js(Q.getPrototypeOf, Q), Zs = Q.create, js = Vn.propertyIsEnumerable, zt = Wt.splice, eu = _n ? _n.isConcatSpreadable : r, ct = _n ? _n.iterator : r, yn = _n ? _n.toStringTag : r, Jt = function() {
        try {
          var e = Cn(Q, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), ec = m.clearTimeout !== pe.clearTimeout && m.clearTimeout, nc = y && y.now !== pe.Date.now && y.now, tc = m.setTimeout !== pe.setTimeout && m.setTimeout, Xt = oe.ceil, Qt = oe.floor, ui = Q.getOwnPropertySymbols, rc = Yt ? Yt.isBuffer : r, nu = m.isFinite, ic = Wt.join, sc = Js(Q.keys, Q), ae = oe.max, _e = oe.min, uc = y.now, oc = m.parseInt, tu = oe.random, ac = Wt.reverse, oi = Cn(m, "DataView"), lt = Cn(m, "Map"), ai = Cn(m, "Promise"), $n = Cn(m, "Set"), ht = Cn(m, "WeakMap"), pt = Cn(Q, "create"), Kt = ht && new ht(), Yn = {}, fc = bn(oi), cc = bn(lt), lc = bn(ai), hc = bn($n), pc = bn(ht), Zt = _n ? _n.prototype : r, dt = Zt ? Zt.valueOf : r, ru = Zt ? Zt.toString : r;
      function a(e) {
        if (te(e) && !B(e) && !(e instanceof V)) {
          if (e instanceof ke)
            return e;
          if (J.call(e, "__wrapped__"))
            return io(e);
        }
        return new ke(e);
      }
      var qn = /* @__PURE__ */ function() {
        function e() {
        }
        return function(n) {
          if (!ne(n))
            return {};
          if (Zs)
            return Zs(n);
          e.prototype = n;
          var t = new e();
          return e.prototype = r, t;
        };
      }();
      function jt() {
      }
      function ke(e, n) {
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
        interpolate: hs,
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
      }, a.prototype = jt.prototype, a.prototype.constructor = a, ke.prototype = qn(jt.prototype), ke.prototype.constructor = ke;
      function V(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Qe, this.__views__ = [];
      }
      function dc() {
        var e = new V(this.__wrapped__);
        return e.__actions__ = Ne(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Ne(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Ne(this.__views__), e;
      }
      function gc() {
        if (this.__filtered__) {
          var e = new V(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function _c() {
        var e = this.__wrapped__.value(), n = this.__dir__, t = B(e), i = n < 0, o = t ? e.length : 0, f = Sl(0, o, this.__views__), h = f.start, p = f.end, g = p - h, E = i ? p : h - 1, x = this.__iteratees__, I = x.length, N = 0, w = _e(g, this.__takeCount__);
        if (!t || !i && o == g && w == g)
          return wu(e, this.__actions__);
        var b = [];
        e:
          for (; g-- && N < w; ) {
            E += n;
            for (var k = -1, R = e[E]; ++k < I; ) {
              var G = x[k], Y = G.iteratee, Re = G.type, Ae = Y(R);
              if (Re == fa)
                R = Ae;
              else if (!Ae) {
                if (Re == os)
                  continue e;
                break e;
              }
            }
            b[N++] = R;
          }
        return b;
      }
      V.prototype = qn(jt.prototype), V.prototype.constructor = V;
      function On(e) {
        var n = -1, t = e == null ? 0 : e.length;
        for (this.clear(); ++n < t; ) {
          var i = e[n];
          this.set(i[0], i[1]);
        }
      }
      function vc() {
        this.__data__ = pt ? pt(null) : {}, this.size = 0;
      }
      function mc(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function Ec(e) {
        var n = this.__data__;
        if (pt) {
          var t = n[e];
          return t === L ? r : t;
        }
        return J.call(n, e) ? n[e] : r;
      }
      function xc(e) {
        var n = this.__data__;
        return pt ? n[e] !== r : J.call(n, e);
      }
      function Tc(e, n) {
        var t = this.__data__;
        return this.size += this.has(e) ? 0 : 1, t[e] = pt && n === r ? L : n, this;
      }
      On.prototype.clear = vc, On.prototype.delete = mc, On.prototype.get = Ec, On.prototype.has = xc, On.prototype.set = Tc;
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
      function Nc(e) {
        var n = this.__data__, t = er(n, e);
        return t < 0 ? r : n[t][1];
      }
      function yc(e) {
        return er(this.__data__, e) > -1;
      }
      function Oc(e, n) {
        var t = this.__data__, i = er(t, e);
        return i < 0 ? (++this.size, t.push([e, n])) : t[i][1] = n, this;
      }
      tn.prototype.clear = Ac, tn.prototype.delete = Ic, tn.prototype.get = Nc, tn.prototype.has = yc, tn.prototype.set = Oc;
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
          map: new (lt || tn)(),
          string: new On()
        };
      }
      function Sc(e) {
        var n = hr(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function Dc(e) {
        return hr(this, e).get(e);
      }
      function Cc(e) {
        return hr(this, e).has(e);
      }
      function bc(e, n) {
        var t = hr(this, e), i = t.size;
        return t.set(e, n), this.size += t.size == i ? 0 : 1, this;
      }
      rn.prototype.clear = wc, rn.prototype.delete = Sc, rn.prototype.get = Dc, rn.prototype.has = Cc, rn.prototype.set = bc;
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
      function kc(e, n) {
        var t = this.__data__;
        if (t instanceof tn) {
          var i = t.__data__;
          if (!lt || i.length < c - 1)
            return i.push([e, n]), this.size = ++t.size, this;
          t = this.__data__ = new rn(i);
        }
        return t.set(e, n), this.size = t.size, this;
      }
      He.prototype.clear = Fc, He.prototype.delete = Pc, He.prototype.get = Bc, He.prototype.has = Mc, He.prototype.set = kc;
      function iu(e, n) {
        var t = B(e), i = !t && Rn(e), o = !t && !i && Tn(e), f = !t && !i && !o && Xn(e), h = t || i || o || f, p = h ? ti(e.length, Jf) : [], g = p.length;
        for (var E in e)
          (n || J.call(e, E)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
          (E == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          o && (E == "offset" || E == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          f && (E == "buffer" || E == "byteLength" || E == "byteOffset") || // Skip index properties.
          an(E, g))) && p.push(E);
        return p;
      }
      function su(e) {
        var n = e.length;
        return n ? e[Ei(0, n - 1)] : r;
      }
      function Uc(e, n) {
        return pr(Ne(e), Sn(n, 0, e.length));
      }
      function Wc(e) {
        return pr(Ne(e));
      }
      function fi(e, n, t) {
        (t !== r && !ze(e[n], t) || t === r && !(n in e)) && sn(e, n, t);
      }
      function gt(e, n, t) {
        var i = e[n];
        (!(J.call(e, n) && ze(i, t)) || t === r && !(n in e)) && sn(e, n, t);
      }
      function er(e, n) {
        for (var t = e.length; t--; )
          if (ze(e[t][0], n))
            return t;
        return -1;
      }
      function Gc(e, n, t, i) {
        return vn(e, function(o, f, h) {
          n(i, o, t(o), h);
        }), i;
      }
      function uu(e, n) {
        return e && Ze(n, ce(n), e);
      }
      function Vc(e, n) {
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
          o[t] = f ? r : Yi(e, n[t]);
        return o;
      }
      function Sn(e, n, t) {
        return e === e && (t !== r && (e = e <= t ? e : t), n !== r && (e = e >= n ? e : n)), e;
      }
      function Ue(e, n, t, i, o, f) {
        var h, p = n & q, g = n & X, E = n & fe;
        if (t && (h = o ? t(e, i, o, f) : t(e)), h !== r)
          return h;
        if (!ne(e))
          return e;
        var x = B(e);
        if (x) {
          if (h = Cl(e), !p)
            return Ne(e, h);
        } else {
          var I = ve(e), N = I == Rt || I == as;
          if (Tn(e))
            return Cu(e, p);
          if (I == nn || I == Pn || N && !o) {
            if (h = g || N ? {} : Xu(e), !p)
              return g ? El(e, Vc(h, e)) : ml(e, uu(h, e));
          } else {
            if (!Z[I])
              return o ? e : {};
            h = bl(e, I, p);
          }
        }
        f || (f = new He());
        var w = f.get(e);
        if (w)
          return w;
        f.set(e, h), yo(e) ? e.forEach(function(R) {
          h.add(Ue(R, n, t, R, e, f));
        }) : Io(e) && e.forEach(function(R, G) {
          h.set(G, Ue(R, n, t, G, e, f));
        });
        var b = E ? g ? Ci : Di : g ? Oe : ce, k = x ? r : b(e);
        return Be(k || e, function(R, G) {
          k && (G = R, R = e[G]), gt(h, G, Ue(R, n, t, G, e, f));
        }), h;
      }
      function $c(e) {
        var n = ce(e);
        return function(t) {
          return ou(t, e, n);
        };
      }
      function ou(e, n, t) {
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
      function au(e, n, t) {
        if (typeof e != "function")
          throw new Me(A);
        return At(function() {
          e.apply(r, t);
        }, n);
      }
      function _t(e, n, t, i) {
        var o = -1, f = Mt, h = !0, p = e.length, g = [], E = n.length;
        if (!p)
          return g;
        t && (n = ee(n, De(t))), i ? (f = Qr, h = !1) : n.length >= c && (f = ft, h = !1, n = new wn(n));
        e:
          for (; ++o < p; ) {
            var x = e[o], I = t == null ? x : t(x);
            if (x = i || x !== 0 ? x : 0, h && I === I) {
              for (var N = E; N--; )
                if (n[N] === I)
                  continue e;
              g.push(x);
            } else f(n, I, i) || g.push(x);
          }
        return g;
      }
      var vn = Pu(Ke), fu = Pu(hi, !0);
      function Yc(e, n) {
        var t = !0;
        return vn(e, function(i, o, f) {
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
      function qc(e, n, t, i) {
        var o = e.length;
        for (t = M(t), t < 0 && (t = -t > o ? 0 : o + t), i = i === r || i > o ? o : M(i), i < 0 && (i += o), i = t > i ? 0 : wo(i); t < i; )
          e[t++] = n;
        return e;
      }
      function cu(e, n) {
        var t = [];
        return vn(e, function(i, o, f) {
          n(i, o, f) && t.push(i);
        }), t;
      }
      function de(e, n, t, i, o) {
        var f = -1, h = e.length;
        for (t || (t = Ll), o || (o = []); ++f < h; ) {
          var p = e[f];
          n > 0 && t(p) ? n > 1 ? de(p, n - 1, t, i, o) : dn(o, p) : i || (o[o.length] = p);
        }
        return o;
      }
      var li = Bu(), lu = Bu(!0);
      function Ke(e, n) {
        return e && li(e, n, ce);
      }
      function hi(e, n) {
        return e && lu(e, n, ce);
      }
      function tr(e, n) {
        return pn(n, function(t) {
          return fn(e[t]);
        });
      }
      function Dn(e, n) {
        n = En(n, e);
        for (var t = 0, i = n.length; e != null && t < i; )
          e = e[je(n[t++])];
        return t && t == i ? e : r;
      }
      function hu(e, n, t) {
        var i = n(e);
        return B(e) ? i : dn(i, t(e));
      }
      function xe(e) {
        return e == null ? e === r ? Ea : va : yn && yn in Q(e) ? wl(e) : Wl(e);
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
        for (var i = t ? Qr : Mt, o = e[0].length, f = e.length, h = f, p = v(f), g = 1 / 0, E = []; h--; ) {
          var x = e[h];
          h && n && (x = ee(x, De(n))), g = _e(x.length, g), p[h] = !t && (n || o >= 120 && x.length >= 120) ? new wn(h && x) : r;
        }
        x = e[0];
        var I = -1, N = p[0];
        e:
          for (; ++I < o && E.length < g; ) {
            var w = x[I], b = n ? n(w) : w;
            if (w = t || w !== 0 ? w : 0, !(N ? ft(N, b) : i(E, b, t))) {
              for (h = f; --h; ) {
                var k = p[h];
                if (!(k ? ft(k, b) : i(e[h], b, t)))
                  continue e;
              }
              N && N.push(b), E.push(w);
            }
          }
        return E;
      }
      function Xc(e, n, t, i) {
        return Ke(e, function(o, f, h) {
          n(i, t(o), f, h);
        }), i;
      }
      function vt(e, n, t) {
        n = En(n, e), e = ju(e, n);
        var i = e == null ? e : e[je(Ge(n))];
        return i == null ? r : Se(i, e, t);
      }
      function pu(e) {
        return te(e) && xe(e) == Pn;
      }
      function Qc(e) {
        return te(e) && xe(e) == at;
      }
      function Kc(e) {
        return te(e) && xe(e) == rt;
      }
      function mt(e, n, t, i, o) {
        return e === n ? !0 : e == null || n == null || !te(e) && !te(n) ? e !== e && n !== n : Zc(e, n, t, i, mt, o);
      }
      function Zc(e, n, t, i, o, f) {
        var h = B(e), p = B(n), g = h ? Ct : ve(e), E = p ? Ct : ve(n);
        g = g == Pn ? nn : g, E = E == Pn ? nn : E;
        var x = g == nn, I = E == nn, N = g == E;
        if (N && Tn(e)) {
          if (!Tn(n))
            return !1;
          h = !0, x = !1;
        }
        if (N && !x)
          return f || (f = new He()), h || Xn(e) ? Hu(e, n, t, i, o, f) : yl(e, n, g, t, i, o, f);
        if (!(t & K)) {
          var w = x && J.call(e, "__wrapped__"), b = I && J.call(n, "__wrapped__");
          if (w || b) {
            var k = w ? e.value() : e, R = b ? n.value() : n;
            return f || (f = new He()), o(k, R, t, i, f);
          }
        }
        return N ? (f || (f = new He()), Ol(e, n, t, i, o, f)) : !1;
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
          var g = p[0], E = e[g], x = p[1];
          if (h && p[2]) {
            if (E === r && !(g in e))
              return !1;
          } else {
            var I = new He();
            if (i)
              var N = i(E, x, g, e, n, I);
            if (!(N === r ? mt(x, E, K | me, i, I) : N))
              return !1;
          }
        }
        return !0;
      }
      function du(e) {
        if (!ne(e) || Pl(e))
          return !1;
        var n = fn(e) ? jf : Va;
        return n.test(bn(e));
      }
      function el(e) {
        return te(e) && xe(e) == st;
      }
      function nl(e) {
        return te(e) && ve(e) == Ye;
      }
      function tl(e) {
        return te(e) && Er(e.length) && !!j[xe(e)];
      }
      function gu(e) {
        return typeof e == "function" ? e : e == null ? we : typeof e == "object" ? B(e) ? mu(e[0], e[1]) : vu(e) : ko(e);
      }
      function _i(e) {
        if (!Tt(e))
          return sc(e);
        var n = [];
        for (var t in Q(e))
          J.call(e, t) && t != "constructor" && n.push(t);
        return n;
      }
      function rl(e) {
        if (!ne(e))
          return Ul(e);
        var n = Tt(e), t = [];
        for (var i in e)
          i == "constructor" && (n || !J.call(e, i)) || t.push(i);
        return t;
      }
      function vi(e, n) {
        return e < n;
      }
      function _u(e, n) {
        var t = -1, i = ye(e) ? v(e.length) : [];
        return vn(e, function(o, f, h) {
          i[++t] = n(o, f, h);
        }), i;
      }
      function vu(e) {
        var n = Ri(e);
        return n.length == 1 && n[0][2] ? Ku(n[0][0], n[0][1]) : function(t) {
          return t === e || gi(t, e, n);
        };
      }
      function mu(e, n) {
        return Fi(e) && Qu(n) ? Ku(je(e), n) : function(t) {
          var i = Yi(t, e);
          return i === r && i === n ? qi(t, e) : mt(n, i, K | me);
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
        var p = Bi(e, t), g = Bi(n, t), E = h.get(g);
        if (E) {
          fi(e, t, E);
          return;
        }
        var x = f ? f(p, g, t + "", e, n, h) : r, I = x === r;
        if (I) {
          var N = B(g), w = !N && Tn(g), b = !N && !w && Xn(g);
          x = g, N || w || b ? B(p) ? x = p : re(p) ? x = Ne(p) : w ? (I = !1, x = Cu(g, !0)) : b ? (I = !1, x = bu(g, !0)) : x = [] : It(g) || Rn(g) ? (x = p, Rn(p) ? x = So(p) : (!ne(p) || fn(p)) && (x = Xu(g))) : I = !1;
        }
        I && (h.set(g, x), o(x, g, i, f, h), h.delete(g)), fi(e, t, x);
      }
      function Eu(e, n) {
        var t = e.length;
        if (t)
          return n += n < 0 ? t : 0, an(n, t) ? e[n] : r;
      }
      function xu(e, n, t) {
        n.length ? n = ee(n, function(f) {
          return B(f) ? function(h) {
            return Dn(h, f.length === 1 ? f[0] : f);
          } : f;
        }) : n = [we];
        var i = -1;
        n = ee(n, De(C()));
        var o = _u(e, function(f, h, p) {
          var g = ee(n, function(E) {
            return E(f);
          });
          return { criteria: g, index: ++i, value: f };
        });
        return bf(o, function(f, h) {
          return vl(f, h, t);
        });
      }
      function sl(e, n) {
        return Tu(e, n, function(t, i) {
          return qi(e, i);
        });
      }
      function Tu(e, n, t) {
        for (var i = -1, o = n.length, f = {}; ++i < o; ) {
          var h = n[i], p = Dn(e, h);
          t(p, h) && Et(f, En(h, e), p);
        }
        return f;
      }
      function ul(e) {
        return function(n) {
          return Dn(n, e);
        };
      }
      function mi(e, n, t, i) {
        var o = i ? Cf : kn, f = -1, h = n.length, p = e;
        for (e === n && (n = Ne(n)), t && (p = ee(e, De(t))); ++f < h; )
          for (var g = 0, E = n[f], x = t ? t(E) : E; (g = o(p, x, g, i)) > -1; )
            p !== e && zt.call(p, g, 1), zt.call(e, g, 1);
        return e;
      }
      function Au(e, n) {
        for (var t = e ? n.length : 0, i = t - 1; t--; ) {
          var o = n[t];
          if (t == i || o !== f) {
            var f = o;
            an(o) ? zt.call(e, o, 1) : Ai(e, o);
          }
        }
        return e;
      }
      function Ei(e, n) {
        return e + Qt(tu() * (n - e + 1));
      }
      function ol(e, n, t, i) {
        for (var o = -1, f = ae(Xt((n - e) / (t || 1)), 0), h = v(f); f--; )
          h[i ? f : ++o] = e, e += t;
        return h;
      }
      function xi(e, n) {
        var t = "";
        if (!e || n < 1 || n > hn)
          return t;
        do
          n % 2 && (t += e), n = Qt(n / 2), n && (e += e);
        while (n);
        return t;
      }
      function W(e, n) {
        return Mi(Zu(e, n, we), e + "");
      }
      function al(e) {
        return su(Qn(e));
      }
      function fl(e, n) {
        var t = Qn(e);
        return pr(t, Sn(n, 0, t.length));
      }
      function Et(e, n, t, i) {
        if (!ne(e))
          return e;
        n = En(n, e);
        for (var o = -1, f = n.length, h = f - 1, p = e; p != null && ++o < f; ) {
          var g = je(n[o]), E = t;
          if (g === "__proto__" || g === "constructor" || g === "prototype")
            return e;
          if (o != h) {
            var x = p[g];
            E = i ? i(x, g, p) : r, E === r && (E = ne(x) ? x : an(n[o + 1]) ? [] : {});
          }
          gt(p, g, E), p = p[g];
        }
        return e;
      }
      var Iu = Kt ? function(e, n) {
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
        return pr(Qn(e));
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
        return vn(e, function(i, o, f) {
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
        for (var h = n !== n, p = n === null, g = be(n), E = n === r; o < f; ) {
          var x = Qt((o + f) / 2), I = t(e[x]), N = I !== r, w = I === null, b = I === I, k = be(I);
          if (h)
            var R = i || b;
          else E ? R = b && (i || N) : p ? R = b && N && (i || !w) : g ? R = b && N && !w && (i || !k) : w || k ? R = !1 : R = i ? I <= n : I < n;
          R ? o = x + 1 : f = x;
        }
        return _e(f, ha);
      }
      function Nu(e, n) {
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
        return typeof e == "number" ? e : be(e) ? Dt : +e;
      }
      function Ce(e) {
        if (typeof e == "string")
          return e;
        if (B(e))
          return ee(e, Ce) + "";
        if (be(e))
          return ru ? ru.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -In ? "-0" : n;
      }
      function mn(e, n, t) {
        var i = -1, o = Mt, f = e.length, h = !0, p = [], g = p;
        if (t)
          h = !1, o = Qr;
        else if (f >= c) {
          var E = n ? null : Il(e);
          if (E)
            return Ut(E);
          h = !1, o = ft, g = new wn();
        } else
          g = n ? [] : p;
        e:
          for (; ++i < f; ) {
            var x = e[i], I = n ? n(x) : x;
            if (x = t || x !== 0 ? x : 0, h && I === I) {
              for (var N = g.length; N--; )
                if (g[N] === I)
                  continue e;
              n && g.push(I), p.push(x);
            } else o(g, I, t) || (g !== p && g.push(I), p.push(x));
          }
        return p;
      }
      function Ai(e, n) {
        return n = En(n, e), e = ju(e, n), e == null || delete e[je(Ge(n))];
      }
      function Ou(e, n, t, i) {
        return Et(e, n, t(Dn(e, n)), i);
      }
      function sr(e, n, t, i) {
        for (var o = e.length, f = i ? o : -1; (i ? f-- : ++f < o) && n(e[f], f, e); )
          ;
        return t ? We(e, i ? 0 : f, i ? f + 1 : o) : We(e, i ? f + 1 : 0, i ? o : f);
      }
      function wu(e, n) {
        var t = e;
        return t instanceof V && (t = t.value()), Kr(n, function(i, o) {
          return o.func.apply(o.thisArg, dn([i], o.args));
        }, t);
      }
      function Ii(e, n, t) {
        var i = e.length;
        if (i < 2)
          return i ? mn(e[0]) : [];
        for (var o = -1, f = v(i); ++o < i; )
          for (var h = e[o], p = -1; ++p < i; )
            p != o && (f[o] = _t(f[o] || h, e[p], n, t));
        return mn(de(f, 1), n, t);
      }
      function Su(e, n, t) {
        for (var i = -1, o = e.length, f = n.length, h = {}; ++i < o; ) {
          var p = i < f ? n[i] : r;
          t(h, e[i], p);
        }
        return h;
      }
      function Ni(e) {
        return re(e) ? e : [];
      }
      function yi(e) {
        return typeof e == "function" ? e : we;
      }
      function En(e, n) {
        return B(e) ? e : Fi(e, n) ? [e] : ro(z(e));
      }
      var pl = W;
      function xn(e, n, t) {
        var i = e.length;
        return t = t === r ? i : t, !n && t >= i ? e : We(e, n, t);
      }
      var Du = ec || function(e) {
        return pe.clearTimeout(e);
      };
      function Cu(e, n) {
        if (n)
          return e.slice();
        var t = e.length, i = Ks ? Ks(t) : new e.constructor(t);
        return e.copy(i), i;
      }
      function Oi(e) {
        var n = new e.constructor(e.byteLength);
        return new qt(n).set(new qt(e)), n;
      }
      function dl(e, n) {
        var t = n ? Oi(e.buffer) : e.buffer;
        return new e.constructor(t, e.byteOffset, e.byteLength);
      }
      function gl(e) {
        var n = new e.constructor(e.source, ps.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function _l(e) {
        return dt ? Q(dt.call(e)) : {};
      }
      function bu(e, n) {
        var t = n ? Oi(e.buffer) : e.buffer;
        return new e.constructor(t, e.byteOffset, e.length);
      }
      function Ru(e, n) {
        if (e !== n) {
          var t = e !== r, i = e === null, o = e === e, f = be(e), h = n !== r, p = n === null, g = n === n, E = be(n);
          if (!p && !E && !f && e > n || f && h && g && !p && !E || i && h && g || !t && g || !o)
            return 1;
          if (!i && !f && !E && e < n || E && t && o && !i && !f || p && t && o || !h && o || !g)
            return -1;
        }
        return 0;
      }
      function vl(e, n, t) {
        for (var i = -1, o = e.criteria, f = n.criteria, h = o.length, p = t.length; ++i < h; ) {
          var g = Ru(o[i], f[i]);
          if (g) {
            if (i >= p)
              return g;
            var E = t[i];
            return g * (E == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function Lu(e, n, t, i) {
        for (var o = -1, f = e.length, h = t.length, p = -1, g = n.length, E = ae(f - h, 0), x = v(g + E), I = !i; ++p < g; )
          x[p] = n[p];
        for (; ++o < h; )
          (I || o < f) && (x[t[o]] = e[o]);
        for (; E--; )
          x[p++] = e[o++];
        return x;
      }
      function Fu(e, n, t, i) {
        for (var o = -1, f = e.length, h = -1, p = t.length, g = -1, E = n.length, x = ae(f - p, 0), I = v(x + E), N = !i; ++o < x; )
          I[o] = e[o];
        for (var w = o; ++g < E; )
          I[w + g] = n[g];
        for (; ++h < p; )
          (N || o < f) && (I[w + t[h]] = e[o++]);
        return I;
      }
      function Ne(e, n) {
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
          g === r && (g = e[p]), o ? sn(t, p, g) : gt(t, p, g);
        }
        return t;
      }
      function ml(e, n) {
        return Ze(e, Li(e), n);
      }
      function El(e, n) {
        return Ze(e, zu(e), n);
      }
      function ur(e, n) {
        return function(t, i) {
          var o = B(t) ? Nf : Gc, f = n ? n() : {};
          return o(t, e, C(i, 2), f);
        };
      }
      function Hn(e) {
        return W(function(n, t) {
          var i = -1, o = t.length, f = o > 1 ? t[o - 1] : r, h = o > 2 ? t[2] : r;
          for (f = e.length > 3 && typeof f == "function" ? (o--, f) : r, h && Te(t[0], t[1], h) && (f = o < 3 ? r : f, o = 1), n = Q(n); ++i < o; ) {
            var p = t[i];
            p && e(n, p, i, f);
          }
          return n;
        });
      }
      function Pu(e, n) {
        return function(t, i) {
          if (t == null)
            return t;
          if (!ye(t))
            return e(t, i);
          for (var o = t.length, f = n ? o : -1, h = Q(t); (n ? f-- : ++f < o) && i(h[f], f, h) !== !1; )
            ;
          return t;
        };
      }
      function Bu(e) {
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
        var i = n & ge, o = xt(e);
        function f() {
          var h = this && this !== pe && this instanceof f ? o : e;
          return h.apply(i ? t : this, arguments);
        }
        return f;
      }
      function Mu(e) {
        return function(n) {
          n = z(n);
          var t = Un(n) ? qe(n) : r, i = t ? t[0] : n.charAt(0), o = t ? xn(t, 1).join("") : n.slice(1);
          return i[e]() + o;
        };
      }
      function zn(e) {
        return function(n) {
          return Kr(Bo(Po(n).replace(cf, "")), e, "");
        };
      }
      function xt(e) {
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
        var i = xt(e);
        function o() {
          for (var f = arguments.length, h = v(f), p = f, g = Jn(o); p--; )
            h[p] = arguments[p];
          var E = f < 3 && h[0] !== g && h[f - 1] !== g ? [] : gn(h, g);
          if (f -= E.length, f < t)
            return Vu(
              e,
              n,
              or,
              o.placeholder,
              r,
              h,
              E,
              r,
              r,
              t - f
            );
          var x = this && this !== pe && this instanceof o ? i : e;
          return Se(x, this, h);
        }
        return o;
      }
      function ku(e) {
        return function(n, t, i) {
          var o = Q(n);
          if (!ye(n)) {
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
          var t = n.length, i = t, o = ke.prototype.thru;
          for (e && n.reverse(); i--; ) {
            var f = n[i];
            if (typeof f != "function")
              throw new Me(A);
            if (o && !h && lr(f) == "wrapper")
              var h = new ke([], !0);
          }
          for (i = h ? i : t; ++i < t; ) {
            f = n[i];
            var p = lr(f), g = p == "wrapper" ? bi(f) : r;
            g && Pi(g[0]) && g[1] == (Fe | ue | Ie | nt) && !g[4].length && g[9] == 1 ? h = h[lr(g[0])].apply(h, g[3]) : h = f.length == 1 && Pi(f) ? h[p]() : h.thru(f);
          }
          return function() {
            var E = arguments, x = E[0];
            if (h && E.length == 1 && B(x))
              return h.plant(x).value();
            for (var I = 0, N = t ? n[I].apply(this, E) : x; ++I < t; )
              N = n[I].call(this, N);
            return N;
          };
        });
      }
      function or(e, n, t, i, o, f, h, p, g, E) {
        var x = n & Fe, I = n & ge, N = n & he, w = n & (ue | Ee), b = n & br, k = N ? r : xt(e);
        function R() {
          for (var G = arguments.length, Y = v(G), Re = G; Re--; )
            Y[Re] = arguments[Re];
          if (w)
            var Ae = Jn(R), Le = Lf(Y, Ae);
          if (i && (Y = Lu(Y, i, o, w)), f && (Y = Fu(Y, f, h, w)), G -= Le, w && G < E) {
            var ie = gn(Y, Ae);
            return Vu(
              e,
              n,
              or,
              R.placeholder,
              t,
              Y,
              ie,
              p,
              g,
              E - G
            );
          }
          var Je = I ? t : this, ln = N ? Je[e] : e;
          return G = Y.length, p ? Y = Gl(Y, p) : b && G > 1 && Y.reverse(), x && g < G && (Y.length = g), this && this !== pe && this instanceof R && (ln = k || xt(ln)), ln.apply(Je, Y);
        }
        return R;
      }
      function Wu(e, n) {
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
            typeof t == "string" || typeof i == "string" ? (t = Ce(t), i = Ce(i)) : (t = yu(t), i = yu(i)), o = e(t, i);
          }
          return o;
        };
      }
      function wi(e) {
        return on(function(n) {
          return n = ee(n, De(C())), W(function(t) {
            var i = this;
            return e(n, function(o) {
              return Se(o, i, t);
            });
          });
        });
      }
      function fr(e, n) {
        n = n === r ? " " : Ce(n);
        var t = n.length;
        if (t < 2)
          return t ? xi(n, e) : n;
        var i = xi(n, Xt(e / Wn(n)));
        return Un(n) ? xn(qe(i), 0, e).join("") : i.slice(0, e);
      }
      function Al(e, n, t, i) {
        var o = n & ge, f = xt(e);
        function h() {
          for (var p = -1, g = arguments.length, E = -1, x = i.length, I = v(x + g), N = this && this !== pe && this instanceof h ? f : e; ++E < x; )
            I[E] = i[E];
          for (; g--; )
            I[E++] = arguments[++p];
          return Se(N, o ? t : this, I);
        }
        return h;
      }
      function Gu(e) {
        return function(n, t, i) {
          return i && typeof i != "number" && Te(n, t, i) && (t = i = r), n = cn(n), t === r ? (t = n, n = 0) : t = cn(t), i = i === r ? n < t ? 1 : -1 : cn(i), ol(n, t, i, e);
        };
      }
      function cr(e) {
        return function(n, t) {
          return typeof n == "string" && typeof t == "string" || (n = Ve(n), t = Ve(t)), e(n, t);
        };
      }
      function Vu(e, n, t, i, o, f, h, p, g, E) {
        var x = n & ue, I = x ? h : r, N = x ? r : h, w = x ? f : r, b = x ? r : f;
        n |= x ? Ie : en, n &= ~(x ? en : Ie), n & et || (n &= ~(ge | he));
        var k = [
          e,
          n,
          o,
          w,
          I,
          b,
          N,
          p,
          g,
          E
        ], R = t.apply(r, k);
        return Pi(e) && eo(R, k), R.placeholder = i, no(R, e, n);
      }
      function Si(e) {
        var n = oe[e];
        return function(t, i) {
          if (t = Ve(t), i = i == null ? 0 : _e(M(i), 292), i && nu(t)) {
            var o = (z(t) + "e").split("e"), f = n(o[0] + "e" + (+o[1] + i));
            return o = (z(f) + "e").split("e"), +(o[0] + "e" + (+o[1] - i));
          }
          return n(t);
        };
      }
      var Il = $n && 1 / Ut(new $n([, -0]))[1] == In ? function(e) {
        return new $n(e);
      } : Qi;
      function $u(e) {
        return function(n) {
          var t = ve(n);
          return t == $e ? ii(n) : t == Ye ? Wf(n) : Rf(n, e(n));
        };
      }
      function un(e, n, t, i, o, f, h, p) {
        var g = n & he;
        if (!g && typeof e != "function")
          throw new Me(A);
        var E = i ? i.length : 0;
        if (E || (n &= ~(Ie | en), i = o = r), h = h === r ? h : ae(M(h), 0), p = p === r ? p : M(p), E -= o ? o.length : 0, n & en) {
          var x = i, I = o;
          i = o = r;
        }
        var N = g ? r : bi(e), w = [
          e,
          n,
          t,
          i,
          o,
          x,
          I,
          f,
          h,
          p
        ];
        if (N && kl(w, N), e = w[0], n = w[1], t = w[2], i = w[3], o = w[4], p = w[9] = w[9] === r ? g ? 0 : e.length : ae(w[9] - E, 0), !p && n & (ue | Ee) && (n &= ~(ue | Ee)), !n || n == ge)
          var b = xl(e, n, t);
        else n == ue || n == Ee ? b = Tl(e, n, p) : (n == Ie || n == (ge | Ie)) && !o.length ? b = Al(e, n, t, i) : b = or.apply(r, w);
        var k = N ? Iu : eo;
        return no(k(b, w), e, n);
      }
      function Yu(e, n, t, i) {
        return e === r || ze(e, Vn[t]) && !J.call(i, t) ? n : e;
      }
      function qu(e, n, t, i, o, f) {
        return ne(e) && ne(n) && (f.set(n, e), rr(e, n, r, qu, f), f.delete(n)), e;
      }
      function Nl(e) {
        return It(e) ? r : e;
      }
      function Hu(e, n, t, i, o, f) {
        var h = t & K, p = e.length, g = n.length;
        if (p != g && !(h && g > p))
          return !1;
        var E = f.get(e), x = f.get(n);
        if (E && x)
          return E == n && x == e;
        var I = -1, N = !0, w = t & me ? new wn() : r;
        for (f.set(e, n), f.set(n, e); ++I < p; ) {
          var b = e[I], k = n[I];
          if (i)
            var R = h ? i(k, b, I, n, e, f) : i(b, k, I, e, n, f);
          if (R !== r) {
            if (R)
              continue;
            N = !1;
            break;
          }
          if (w) {
            if (!Zr(n, function(G, Y) {
              if (!ft(w, Y) && (b === G || o(b, G, t, i, f)))
                return w.push(Y);
            })) {
              N = !1;
              break;
            }
          } else if (!(b === k || o(b, k, t, i, f))) {
            N = !1;
            break;
          }
        }
        return f.delete(e), f.delete(n), N;
      }
      function yl(e, n, t, i, o, f, h) {
        switch (t) {
          case Bn:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case at:
            return !(e.byteLength != n.byteLength || !f(new qt(e), new qt(n)));
          case tt:
          case rt:
          case it:
            return ze(+e, +n);
          case bt:
            return e.name == n.name && e.message == n.message;
          case st:
          case ut:
            return e == n + "";
          case $e:
            var p = ii;
          case Ye:
            var g = i & K;
            if (p || (p = Ut), e.size != n.size && !g)
              return !1;
            var E = h.get(e);
            if (E)
              return E == n;
            i |= me, h.set(e, n);
            var x = Hu(p(e), p(n), i, o, f, h);
            return h.delete(e), x;
          case Lt:
            if (dt)
              return dt.call(e) == dt.call(n);
        }
        return !1;
      }
      function Ol(e, n, t, i, o, f) {
        var h = t & K, p = Di(e), g = p.length, E = Di(n), x = E.length;
        if (g != x && !h)
          return !1;
        for (var I = g; I--; ) {
          var N = p[I];
          if (!(h ? N in n : J.call(n, N)))
            return !1;
        }
        var w = f.get(e), b = f.get(n);
        if (w && b)
          return w == n && b == e;
        var k = !0;
        f.set(e, n), f.set(n, e);
        for (var R = h; ++I < g; ) {
          N = p[I];
          var G = e[N], Y = n[N];
          if (i)
            var Re = h ? i(Y, G, N, n, e, f) : i(G, Y, N, e, n, f);
          if (!(Re === r ? G === Y || o(G, Y, t, i, f) : Re)) {
            k = !1;
            break;
          }
          R || (R = N == "constructor");
        }
        if (k && !R) {
          var Ae = e.constructor, Le = n.constructor;
          Ae != Le && "constructor" in e && "constructor" in n && !(typeof Ae == "function" && Ae instanceof Ae && typeof Le == "function" && Le instanceof Le) && (k = !1);
        }
        return f.delete(e), f.delete(n), k;
      }
      function on(e) {
        return Mi(Zu(e, r, oo), e + "");
      }
      function Di(e) {
        return hu(e, ce, Li);
      }
      function Ci(e) {
        return hu(e, Oe, zu);
      }
      var bi = Kt ? function(e) {
        return Kt.get(e);
      } : Qi;
      function lr(e) {
        for (var n = e.name + "", t = Yn[n], i = J.call(Yn, n) ? t.length : 0; i--; ) {
          var o = t[i], f = o.func;
          if (f == null || f == e)
            return o.name;
        }
        return n;
      }
      function Jn(e) {
        var n = J.call(a, "placeholder") ? a : e;
        return n.placeholder;
      }
      function C() {
        var e = a.iteratee || Ji;
        return e = e === Ji ? gu : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function hr(e, n) {
        var t = e.__data__;
        return Fl(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
      }
      function Ri(e) {
        for (var n = ce(e), t = n.length; t--; ) {
          var i = n[t], o = e[i];
          n[t] = [i, o, Qu(o)];
        }
        return n;
      }
      function Cn(e, n) {
        var t = Mf(e, n);
        return du(t) ? t : r;
      }
      function wl(e) {
        var n = J.call(e, yn), t = e[yn];
        try {
          e[yn] = r;
          var i = !0;
        } catch {
        }
        var o = $t.call(e);
        return i && (n ? e[yn] = t : delete e[yn]), o;
      }
      var Li = ui ? function(e) {
        return e == null ? [] : (e = Q(e), pn(ui(e), function(n) {
          return js.call(e, n);
        }));
      } : Ki, zu = ui ? function(e) {
        for (var n = []; e; )
          dn(n, Li(e)), e = Ht(e);
        return n;
      } : Ki, ve = xe;
      (oi && ve(new oi(new ArrayBuffer(1))) != Bn || lt && ve(new lt()) != $e || ai && ve(ai.resolve()) != fs || $n && ve(new $n()) != Ye || ht && ve(new ht()) != ot) && (ve = function(e) {
        var n = xe(e), t = n == nn ? e.constructor : r, i = t ? bn(t) : "";
        if (i)
          switch (i) {
            case fc:
              return Bn;
            case cc:
              return $e;
            case lc:
              return fs;
            case hc:
              return Ye;
            case pc:
              return ot;
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
      function Dl(e) {
        var n = e.match(Fa);
        return n ? n[1].split(Pa) : [];
      }
      function Ju(e, n, t) {
        n = En(n, e);
        for (var i = -1, o = n.length, f = !1; ++i < o; ) {
          var h = je(n[i]);
          if (!(f = e != null && t(e, h)))
            break;
          e = e[h];
        }
        return f || ++i != o ? f : (o = e == null ? 0 : e.length, !!o && Er(o) && an(h, o) && (B(e) || Rn(e)));
      }
      function Cl(e) {
        var n = e.length, t = new e.constructor(n);
        return n && typeof e[0] == "string" && J.call(e, "index") && (t.index = e.index, t.input = e.input), t;
      }
      function Xu(e) {
        return typeof e.constructor == "function" && !Tt(e) ? qn(Ht(e)) : {};
      }
      function bl(e, n, t) {
        var i = e.constructor;
        switch (n) {
          case at:
            return Oi(e);
          case tt:
          case rt:
            return new i(+e);
          case Bn:
            return dl(e, t);
          case Rr:
          case Lr:
          case Fr:
          case Pr:
          case Br:
          case Mr:
          case kr:
          case Ur:
          case Wr:
            return bu(e, t);
          case $e:
            return new i();
          case it:
          case ut:
            return new i(e);
          case st:
            return gl(e);
          case Ye:
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
        return B(e) || Rn(e) || !!(eu && e && e[eu]);
      }
      function an(e, n) {
        var t = typeof e;
        return n = n ?? hn, !!n && (t == "number" || t != "symbol" && Ya.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function Te(e, n, t) {
        if (!ne(t))
          return !1;
        var i = typeof n;
        return (i == "number" ? ye(t) && an(n, t.length) : i == "string" && n in t) ? ze(t[n], e) : !1;
      }
      function Fi(e, n) {
        if (B(e))
          return !1;
        var t = typeof e;
        return t == "number" || t == "symbol" || t == "boolean" || e == null || be(e) ? !0 : Da.test(e) || !Sa.test(e) || n != null && e in Q(n);
      }
      function Fl(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function Pi(e) {
        var n = lr(e), t = a[n];
        if (typeof t != "function" || !(n in V.prototype))
          return !1;
        if (e === t)
          return !0;
        var i = bi(t);
        return !!i && e === i[0];
      }
      function Pl(e) {
        return !!Qs && Qs in e;
      }
      var Bl = Gt ? fn : Zi;
      function Tt(e) {
        var n = e && e.constructor, t = typeof n == "function" && n.prototype || Vn;
        return e === t;
      }
      function Qu(e) {
        return e === e && !ne(e);
      }
      function Ku(e, n) {
        return function(t) {
          return t == null ? !1 : t[e] === n && (n !== r || e in Q(t));
        };
      }
      function Ml(e) {
        var n = vr(e, function(i) {
          return t.size === F && t.clear(), i;
        }), t = n.cache;
        return n;
      }
      function kl(e, n) {
        var t = e[1], i = n[1], o = t | i, f = o < (ge | he | Fe), h = i == Fe && t == ue || i == Fe && t == nt && e[7].length <= n[8] || i == (Fe | nt) && n[7].length <= n[8] && t == ue;
        if (!(f || h))
          return e;
        i & ge && (e[2] = n[2], o |= t & ge ? 0 : et);
        var p = n[3];
        if (p) {
          var g = e[3];
          e[3] = g ? Lu(g, p, n[4]) : p, e[4] = g ? gn(e[3], U) : n[4];
        }
        return p = n[5], p && (g = e[5], e[5] = g ? Fu(g, p, n[6]) : p, e[6] = g ? gn(e[5], U) : n[6]), p = n[7], p && (e[7] = p), i & Fe && (e[8] = e[8] == null ? n[8] : _e(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = o, e;
      }
      function Ul(e) {
        var n = [];
        if (e != null)
          for (var t in Q(e))
            n.push(t);
        return n;
      }
      function Wl(e) {
        return $t.call(e);
      }
      function Zu(e, n, t) {
        return n = ae(n === r ? e.length - 1 : n, 0), function() {
          for (var i = arguments, o = -1, f = ae(i.length - n, 0), h = v(f); ++o < f; )
            h[o] = i[n + o];
          o = -1;
          for (var p = v(n + 1); ++o < n; )
            p[o] = i[o];
          return p[n] = t(h), Se(e, this, p);
        };
      }
      function ju(e, n) {
        return n.length < 2 ? e : Dn(e, We(n, 0, -1));
      }
      function Gl(e, n) {
        for (var t = e.length, i = _e(n.length, t), o = Ne(e); i--; ) {
          var f = n[i];
          e[i] = an(f, t) ? o[f] : r;
        }
        return e;
      }
      function Bi(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var eo = to(Iu), At = tc || function(e, n) {
        return pe.setTimeout(e, n);
      }, Mi = to(cl);
      function no(e, n, t) {
        var i = n + "";
        return Mi(e, Rl(i, Vl(Dl(i), t)));
      }
      function to(e) {
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
          var f = Ei(t, o), h = e[f];
          e[f] = e[t], e[t] = h;
        }
        return e.length = n, e;
      }
      var ro = Ml(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(Ca, function(t, i, o, f) {
          n.push(o ? f.replace(ka, "$1") : i || t);
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
            return Vt.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Vl(e, n) {
        return Be(da, function(t) {
          var i = "_." + t[0];
          n & t[1] && !Mt(e, i) && e.push(i);
        }), e.sort();
      }
      function io(e) {
        if (e instanceof V)
          return e.clone();
        var n = new ke(e.__wrapped__, e.__chain__);
        return n.__actions__ = Ne(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
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
      function Yl(e) {
        for (var n = -1, t = e == null ? 0 : e.length, i = 0, o = []; ++n < t; ) {
          var f = e[n];
          f && (o[i++] = f);
        }
        return o;
      }
      function ql() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = v(e - 1), t = arguments[0], i = e; i--; )
          n[i - 1] = arguments[i];
        return dn(B(t) ? Ne(t) : [t], de(n, 1));
      }
      var Hl = W(function(e, n) {
        return re(e) ? _t(e, de(n, 1, re, !0)) : [];
      }), zl = W(function(e, n) {
        var t = Ge(n);
        return re(t) && (t = r), re(e) ? _t(e, de(n, 1, re, !0), C(t, 2)) : [];
      }), Jl = W(function(e, n) {
        var t = Ge(n);
        return re(t) && (t = r), re(e) ? _t(e, de(n, 1, re, !0), r, t) : [];
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
        return o ? (t && typeof t != "number" && Te(e, n, t) && (t = 0, i = o), qc(e, n, t, i)) : [];
      }
      function so(e, n, t) {
        var i = e == null ? 0 : e.length;
        if (!i)
          return -1;
        var o = t == null ? 0 : M(t);
        return o < 0 && (o = ae(i + o, 0)), kt(e, C(n, 3), o);
      }
      function uo(e, n, t) {
        var i = e == null ? 0 : e.length;
        if (!i)
          return -1;
        var o = i - 1;
        return t !== r && (o = M(t), o = t < 0 ? ae(i + o, 0) : _e(o, i - 1)), kt(e, C(n, 3), o, !0);
      }
      function oo(e) {
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
      function ao(e) {
        return e && e.length ? e[0] : r;
      }
      function rh(e, n, t) {
        var i = e == null ? 0 : e.length;
        if (!i)
          return -1;
        var o = t == null ? 0 : M(t);
        return o < 0 && (o = ae(i + o, 0)), kn(e, n, o);
      }
      function ih(e) {
        var n = e == null ? 0 : e.length;
        return n ? We(e, 0, -1) : [];
      }
      var sh = W(function(e) {
        var n = ee(e, Ni);
        return n.length && n[0] === e[0] ? di(n) : [];
      }), uh = W(function(e) {
        var n = Ge(e), t = ee(e, Ni);
        return n === Ge(t) ? n = r : t.pop(), t.length && t[0] === e[0] ? di(t, C(n, 2)) : [];
      }), oh = W(function(e) {
        var n = Ge(e), t = ee(e, Ni);
        return n = typeof n == "function" ? n : r, n && t.pop(), t.length && t[0] === e[0] ? di(t, r, n) : [];
      });
      function ah(e, n) {
        return e == null ? "" : ic.call(e, n);
      }
      function Ge(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : r;
      }
      function fh(e, n, t) {
        var i = e == null ? 0 : e.length;
        if (!i)
          return -1;
        var o = i;
        return t !== r && (o = M(t), o = o < 0 ? ae(i + o, 0) : _e(o, i - 1)), n === n ? Vf(e, n, o) : kt(e, Vs, o, !0);
      }
      function ch(e, n) {
        return e && e.length ? Eu(e, M(n)) : r;
      }
      var lh = W(fo);
      function fo(e, n) {
        return e && e.length && n && n.length ? mi(e, n) : e;
      }
      function hh(e, n, t) {
        return e && e.length && n && n.length ? mi(e, n, C(t, 2)) : e;
      }
      function ph(e, n, t) {
        return e && e.length && n && n.length ? mi(e, n, r, t) : e;
      }
      var dh = on(function(e, n) {
        var t = e == null ? 0 : e.length, i = ci(e, n);
        return Au(e, ee(n, function(o) {
          return an(o, t) ? +o : o;
        }).sort(Ru)), i;
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
        return Au(e, o), t;
      }
      function ki(e) {
        return e == null ? e : ac.call(e);
      }
      function _h(e, n, t) {
        var i = e == null ? 0 : e.length;
        return i ? (t && typeof t != "number" && Te(e, n, t) ? (n = 0, t = i) : (n = n == null ? 0 : M(n), t = t === r ? i : M(t)), We(e, n, t)) : [];
      }
      function vh(e, n) {
        return ir(e, n);
      }
      function mh(e, n, t) {
        return Ti(e, n, C(t, 2));
      }
      function Eh(e, n) {
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
        return e && e.length ? Nu(e) : [];
      }
      function Nh(e, n) {
        return e && e.length ? Nu(e, C(n, 2)) : [];
      }
      function yh(e) {
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
      function Dh(e, n) {
        return e && e.length ? sr(e, C(n, 3)) : [];
      }
      var Ch = W(function(e) {
        return mn(de(e, 1, re, !0));
      }), bh = W(function(e) {
        var n = Ge(e);
        return re(n) && (n = r), mn(de(e, 1, re, !0), C(n, 2));
      }), Rh = W(function(e) {
        var n = Ge(e);
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
      function Ui(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = pn(e, function(t) {
          if (re(t))
            return n = ae(t.length, n), !0;
        }), ti(n, function(t) {
          return ee(e, jr(t));
        });
      }
      function co(e, n) {
        if (!(e && e.length))
          return [];
        var t = Ui(e);
        return n == null ? t : ee(t, function(i) {
          return Se(n, r, i);
        });
      }
      var Bh = W(function(e, n) {
        return re(e) ? _t(e, n) : [];
      }), Mh = W(function(e) {
        return Ii(pn(e, re));
      }), kh = W(function(e) {
        var n = Ge(e);
        return re(n) && (n = r), Ii(pn(e, re), C(n, 2));
      }), Uh = W(function(e) {
        var n = Ge(e);
        return n = typeof n == "function" ? n : r, Ii(pn(e, re), r, n);
      }), Wh = W(Ui);
      function Gh(e, n) {
        return Su(e || [], n || [], gt);
      }
      function Vh(e, n) {
        return Su(e || [], n || [], Et);
      }
      var $h = W(function(e) {
        var n = e.length, t = n > 1 ? e[n - 1] : r;
        return t = typeof t == "function" ? (e.pop(), t) : r, co(e, t);
      });
      function lo(e) {
        var n = a(e);
        return n.__chain__ = !0, n;
      }
      function Yh(e, n) {
        return n(e), e;
      }
      function dr(e, n) {
        return n(e);
      }
      var qh = on(function(e) {
        var n = e.length, t = n ? e[0] : 0, i = this.__wrapped__, o = function(f) {
          return ci(f, e);
        };
        return n > 1 || this.__actions__.length || !(i instanceof V) || !an(t) ? this.thru(o) : (i = i.slice(t, +t + (n ? 1 : 0)), i.__actions__.push({
          func: dr,
          args: [o],
          thisArg: r
        }), new ke(i, this.__chain__).thru(function(f) {
          return n && !f.length && f.push(r), f;
        }));
      });
      function Hh() {
        return lo(this);
      }
      function zh() {
        return new ke(this.value(), this.__chain__);
      }
      function Jh() {
        this.__values__ === r && (this.__values__ = Oo(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? r : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function Xh() {
        return this;
      }
      function Qh(e) {
        for (var n, t = this; t instanceof jt; ) {
          var i = io(t);
          i.__index__ = 0, i.__values__ = r, n ? o.__wrapped__ = i : n = i;
          var o = i;
          t = t.__wrapped__;
        }
        return o.__wrapped__ = e, n;
      }
      function Kh() {
        var e = this.__wrapped__;
        if (e instanceof V) {
          var n = e;
          return this.__actions__.length && (n = new V(this)), n = n.reverse(), n.__actions__.push({
            func: dr,
            args: [ki],
            thisArg: r
          }), new ke(n, this.__chain__);
        }
        return this.thru(ki);
      }
      function Zh() {
        return wu(this.__wrapped__, this.__actions__);
      }
      var jh = ur(function(e, n, t) {
        J.call(e, t) ? ++e[t] : sn(e, t, 1);
      });
      function ep(e, n, t) {
        var i = B(e) ? Ws : Yc;
        return t && Te(e, n, t) && (n = r), i(e, C(n, 3));
      }
      function np(e, n) {
        var t = B(e) ? pn : cu;
        return t(e, C(n, 3));
      }
      var tp = ku(so), rp = ku(uo);
      function ip(e, n) {
        return de(gr(e, n), 1);
      }
      function sp(e, n) {
        return de(gr(e, n), In);
      }
      function up(e, n, t) {
        return t = t === r ? 1 : M(t), de(gr(e, n), t);
      }
      function ho(e, n) {
        var t = B(e) ? Be : vn;
        return t(e, C(n, 3));
      }
      function po(e, n) {
        var t = B(e) ? yf : fu;
        return t(e, C(n, 3));
      }
      var op = ur(function(e, n, t) {
        J.call(e, t) ? e[t].push(n) : sn(e, t, [n]);
      });
      function ap(e, n, t, i) {
        e = ye(e) ? e : Qn(e), t = t && !i ? M(t) : 0;
        var o = e.length;
        return t < 0 && (t = ae(o + t, 0)), xr(e) ? t <= o && e.indexOf(n, t) > -1 : !!o && kn(e, n, t) > -1;
      }
      var fp = W(function(e, n, t) {
        var i = -1, o = typeof n == "function", f = ye(e) ? v(e.length) : [];
        return vn(e, function(h) {
          f[++i] = o ? Se(n, h, t) : vt(h, n, t);
        }), f;
      }), cp = ur(function(e, n, t) {
        sn(e, t, n);
      });
      function gr(e, n) {
        var t = B(e) ? ee : _u;
        return t(e, C(n, 3));
      }
      function lp(e, n, t, i) {
        return e == null ? [] : (B(n) || (n = n == null ? [] : [n]), t = i ? r : t, B(t) || (t = t == null ? [] : [t]), xu(e, n, t));
      }
      var hp = ur(function(e, n, t) {
        e[t ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function pp(e, n, t) {
        var i = B(e) ? Kr : Ys, o = arguments.length < 3;
        return i(e, C(n, 4), t, o, vn);
      }
      function dp(e, n, t) {
        var i = B(e) ? Of : Ys, o = arguments.length < 3;
        return i(e, C(n, 4), t, o, fu);
      }
      function gp(e, n) {
        var t = B(e) ? pn : cu;
        return t(e, mr(C(n, 3)));
      }
      function _p(e) {
        var n = B(e) ? su : al;
        return n(e);
      }
      function vp(e, n, t) {
        (t ? Te(e, n, t) : n === r) ? n = 1 : n = M(n);
        var i = B(e) ? Uc : fl;
        return i(e, n);
      }
      function mp(e) {
        var n = B(e) ? Wc : ll;
        return n(e);
      }
      function Ep(e) {
        if (e == null)
          return 0;
        if (ye(e))
          return xr(e) ? Wn(e) : e.length;
        var n = ve(e);
        return n == $e || n == Ye ? e.size : _i(e).length;
      }
      function xp(e, n, t) {
        var i = B(e) ? Zr : hl;
        return t && Te(e, n, t) && (n = r), i(e, C(n, 3));
      }
      var Tp = W(function(e, n) {
        if (e == null)
          return [];
        var t = n.length;
        return t > 1 && Te(e, n[0], n[1]) ? n = [] : t > 2 && Te(n[0], n[1], n[2]) && (n = [n[0]]), xu(e, de(n, 1), []);
      }), _r = nc || function() {
        return pe.Date.now();
      };
      function Ap(e, n) {
        if (typeof n != "function")
          throw new Me(A);
        return e = M(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function go(e, n, t) {
        return n = t ? r : n, n = e && n == null ? e.length : n, un(e, Fe, r, r, r, r, n);
      }
      function _o(e, n) {
        var t;
        if (typeof n != "function")
          throw new Me(A);
        return e = M(e), function() {
          return --e > 0 && (t = n.apply(this, arguments)), e <= 1 && (n = r), t;
        };
      }
      var Wi = W(function(e, n, t) {
        var i = ge;
        if (t.length) {
          var o = gn(t, Jn(Wi));
          i |= Ie;
        }
        return un(e, i, n, t, o);
      }), vo = W(function(e, n, t) {
        var i = ge | he;
        if (t.length) {
          var o = gn(t, Jn(vo));
          i |= Ie;
        }
        return un(n, i, e, t, o);
      });
      function mo(e, n, t) {
        n = t ? r : n;
        var i = un(e, ue, r, r, r, r, r, n);
        return i.placeholder = mo.placeholder, i;
      }
      function Eo(e, n, t) {
        n = t ? r : n;
        var i = un(e, Ee, r, r, r, r, r, n);
        return i.placeholder = Eo.placeholder, i;
      }
      function xo(e, n, t) {
        var i, o, f, h, p, g, E = 0, x = !1, I = !1, N = !0;
        if (typeof e != "function")
          throw new Me(A);
        n = Ve(n) || 0, ne(t) && (x = !!t.leading, I = "maxWait" in t, f = I ? ae(Ve(t.maxWait) || 0, n) : f, N = "trailing" in t ? !!t.trailing : N);
        function w(ie) {
          var Je = i, ln = o;
          return i = o = r, E = ie, h = e.apply(ln, Je), h;
        }
        function b(ie) {
          return E = ie, p = At(G, n), x ? w(ie) : h;
        }
        function k(ie) {
          var Je = ie - g, ln = ie - E, Uo = n - Je;
          return I ? _e(Uo, f - ln) : Uo;
        }
        function R(ie) {
          var Je = ie - g, ln = ie - E;
          return g === r || Je >= n || Je < 0 || I && ln >= f;
        }
        function G() {
          var ie = _r();
          if (R(ie))
            return Y(ie);
          p = At(G, k(ie));
        }
        function Y(ie) {
          return p = r, N && i ? w(ie) : (i = o = r, h);
        }
        function Re() {
          p !== r && Du(p), E = 0, i = g = o = p = r;
        }
        function Ae() {
          return p === r ? h : Y(_r());
        }
        function Le() {
          var ie = _r(), Je = R(ie);
          if (i = arguments, o = this, g = ie, Je) {
            if (p === r)
              return b(g);
            if (I)
              return Du(p), p = At(G, n), w(g);
          }
          return p === r && (p = At(G, n)), h;
        }
        return Le.cancel = Re, Le.flush = Ae, Le;
      }
      var Ip = W(function(e, n) {
        return au(e, 1, n);
      }), Np = W(function(e, n, t) {
        return au(e, Ve(n) || 0, t);
      });
      function yp(e) {
        return un(e, br);
      }
      function vr(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new Me(A);
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
      function mr(e) {
        if (typeof e != "function")
          throw new Me(A);
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
        return _o(2, e);
      }
      var wp = pl(function(e, n) {
        n = n.length == 1 && B(n[0]) ? ee(n[0], De(C())) : ee(de(n, 1), De(C()));
        var t = n.length;
        return W(function(i) {
          for (var o = -1, f = _e(i.length, t); ++o < f; )
            i[o] = n[o].call(this, i[o]);
          return Se(e, this, i);
        });
      }), Gi = W(function(e, n) {
        var t = gn(n, Jn(Gi));
        return un(e, Ie, r, n, t);
      }), To = W(function(e, n) {
        var t = gn(n, Jn(To));
        return un(e, en, r, n, t);
      }), Sp = on(function(e, n) {
        return un(e, nt, r, r, r, n);
      });
      function Dp(e, n) {
        if (typeof e != "function")
          throw new Me(A);
        return n = n === r ? n : M(n), W(e, n);
      }
      function Cp(e, n) {
        if (typeof e != "function")
          throw new Me(A);
        return n = n == null ? 0 : ae(M(n), 0), W(function(t) {
          var i = t[n], o = xn(t, 0, n);
          return i && dn(o, i), Se(e, this, o);
        });
      }
      function bp(e, n, t) {
        var i = !0, o = !0;
        if (typeof e != "function")
          throw new Me(A);
        return ne(t) && (i = "leading" in t ? !!t.leading : i, o = "trailing" in t ? !!t.trailing : o), xo(e, n, {
          leading: i,
          maxWait: n,
          trailing: o
        });
      }
      function Rp(e) {
        return go(e, 1);
      }
      function Lp(e, n) {
        return Gi(yi(n), e);
      }
      function Fp() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return B(e) ? e : [e];
      }
      function Pp(e) {
        return Ue(e, fe);
      }
      function Bp(e, n) {
        return n = typeof n == "function" ? n : r, Ue(e, fe, n);
      }
      function Mp(e) {
        return Ue(e, q | fe);
      }
      function kp(e, n) {
        return n = typeof n == "function" ? n : r, Ue(e, q | fe, n);
      }
      function Up(e, n) {
        return n == null || ou(e, n, ce(n));
      }
      function ze(e, n) {
        return e === n || e !== e && n !== n;
      }
      var Wp = cr(pi), Gp = cr(function(e, n) {
        return e >= n;
      }), Rn = pu(/* @__PURE__ */ function() {
        return arguments;
      }()) ? pu : function(e) {
        return te(e) && J.call(e, "callee") && !js.call(e, "callee");
      }, B = v.isArray, Vp = Fs ? De(Fs) : Qc;
      function ye(e) {
        return e != null && Er(e.length) && !fn(e);
      }
      function re(e) {
        return te(e) && ye(e);
      }
      function $p(e) {
        return e === !0 || e === !1 || te(e) && xe(e) == tt;
      }
      var Tn = rc || Zi, Yp = Ps ? De(Ps) : Kc;
      function qp(e) {
        return te(e) && e.nodeType === 1 && !It(e);
      }
      function Hp(e) {
        if (e == null)
          return !0;
        if (ye(e) && (B(e) || typeof e == "string" || typeof e.splice == "function" || Tn(e) || Xn(e) || Rn(e)))
          return !e.length;
        var n = ve(e);
        if (n == $e || n == Ye)
          return !e.size;
        if (Tt(e))
          return !_i(e).length;
        for (var t in e)
          if (J.call(e, t))
            return !1;
        return !0;
      }
      function zp(e, n) {
        return mt(e, n);
      }
      function Jp(e, n, t) {
        t = typeof t == "function" ? t : r;
        var i = t ? t(e, n) : r;
        return i === r ? mt(e, n, r, t) : !!i;
      }
      function Vi(e) {
        if (!te(e))
          return !1;
        var n = xe(e);
        return n == bt || n == _a || typeof e.message == "string" && typeof e.name == "string" && !It(e);
      }
      function Xp(e) {
        return typeof e == "number" && nu(e);
      }
      function fn(e) {
        if (!ne(e))
          return !1;
        var n = xe(e);
        return n == Rt || n == as || n == ga || n == ma;
      }
      function Ao(e) {
        return typeof e == "number" && e == M(e);
      }
      function Er(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= hn;
      }
      function ne(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function te(e) {
        return e != null && typeof e == "object";
      }
      var Io = Bs ? De(Bs) : jc;
      function Qp(e, n) {
        return e === n || gi(e, n, Ri(n));
      }
      function Kp(e, n, t) {
        return t = typeof t == "function" ? t : r, gi(e, n, Ri(n), t);
      }
      function Zp(e) {
        return No(e) && e != +e;
      }
      function jp(e) {
        if (Bl(e))
          throw new P(_);
        return du(e);
      }
      function ed(e) {
        return e === null;
      }
      function nd(e) {
        return e == null;
      }
      function No(e) {
        return typeof e == "number" || te(e) && xe(e) == it;
      }
      function It(e) {
        if (!te(e) || xe(e) != nn)
          return !1;
        var n = Ht(e);
        if (n === null)
          return !0;
        var t = J.call(n, "constructor") && n.constructor;
        return typeof t == "function" && t instanceof t && Vt.call(t) == Kf;
      }
      var $i = Ms ? De(Ms) : el;
      function td(e) {
        return Ao(e) && e >= -hn && e <= hn;
      }
      var yo = ks ? De(ks) : nl;
      function xr(e) {
        return typeof e == "string" || !B(e) && te(e) && xe(e) == ut;
      }
      function be(e) {
        return typeof e == "symbol" || te(e) && xe(e) == Lt;
      }
      var Xn = Us ? De(Us) : tl;
      function rd(e) {
        return e === r;
      }
      function id(e) {
        return te(e) && ve(e) == ot;
      }
      function sd(e) {
        return te(e) && xe(e) == xa;
      }
      var ud = cr(vi), od = cr(function(e, n) {
        return e <= n;
      });
      function Oo(e) {
        if (!e)
          return [];
        if (ye(e))
          return xr(e) ? qe(e) : Ne(e);
        if (ct && e[ct])
          return Uf(e[ct]());
        var n = ve(e), t = n == $e ? ii : n == Ye ? Ut : Qn;
        return t(e);
      }
      function cn(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Ve(e), e === In || e === -In) {
          var n = e < 0 ? -1 : 1;
          return n * la;
        }
        return e === e ? e : 0;
      }
      function M(e) {
        var n = cn(e), t = n % 1;
        return n === n ? t ? n - t : n : 0;
      }
      function wo(e) {
        return e ? Sn(M(e), 0, Qe) : 0;
      }
      function Ve(e) {
        if (typeof e == "number")
          return e;
        if (be(e))
          return Dt;
        if (ne(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = ne(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = qs(e);
        var t = Ga.test(e);
        return t || $a.test(e) ? Af(e.slice(2), t ? 2 : 8) : Wa.test(e) ? Dt : +e;
      }
      function So(e) {
        return Ze(e, Oe(e));
      }
      function ad(e) {
        return e ? Sn(M(e), -hn, hn) : e === 0 ? e : 0;
      }
      function z(e) {
        return e == null ? "" : Ce(e);
      }
      var fd = Hn(function(e, n) {
        if (Tt(n) || ye(n)) {
          Ze(n, ce(n), e);
          return;
        }
        for (var t in n)
          J.call(n, t) && gt(e, t, n[t]);
      }), Do = Hn(function(e, n) {
        Ze(n, Oe(n), e);
      }), Tr = Hn(function(e, n, t, i) {
        Ze(n, Oe(n), e, i);
      }), cd = Hn(function(e, n, t, i) {
        Ze(n, ce(n), e, i);
      }), ld = on(ci);
      function hd(e, n) {
        var t = qn(e);
        return n == null ? t : uu(t, n);
      }
      var pd = W(function(e, n) {
        e = Q(e);
        var t = -1, i = n.length, o = i > 2 ? n[2] : r;
        for (o && Te(n[0], n[1], o) && (i = 1); ++t < i; )
          for (var f = n[t], h = Oe(f), p = -1, g = h.length; ++p < g; ) {
            var E = h[p], x = e[E];
            (x === r || ze(x, Vn[E]) && !J.call(e, E)) && (e[E] = f[E]);
          }
        return e;
      }), dd = W(function(e) {
        return e.push(r, qu), Se(Co, r, e);
      });
      function gd(e, n) {
        return Gs(e, C(n, 3), Ke);
      }
      function _d(e, n) {
        return Gs(e, C(n, 3), hi);
      }
      function vd(e, n) {
        return e == null ? e : li(e, C(n, 3), Oe);
      }
      function md(e, n) {
        return e == null ? e : lu(e, C(n, 3), Oe);
      }
      function Ed(e, n) {
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
      function Yi(e, n, t) {
        var i = e == null ? r : Dn(e, n);
        return i === r ? t : i;
      }
      function Id(e, n) {
        return e != null && Ju(e, n, Hc);
      }
      function qi(e, n) {
        return e != null && Ju(e, n, zc);
      }
      var Nd = Wu(function(e, n, t) {
        n != null && typeof n.toString != "function" && (n = $t.call(n)), e[n] = t;
      }, zi(we)), yd = Wu(function(e, n, t) {
        n != null && typeof n.toString != "function" && (n = $t.call(n)), J.call(e, n) ? e[n].push(t) : e[n] = [t];
      }, C), Od = W(vt);
      function ce(e) {
        return ye(e) ? iu(e) : _i(e);
      }
      function Oe(e) {
        return ye(e) ? iu(e, !0) : rl(e);
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
      var Dd = Hn(function(e, n, t) {
        rr(e, n, t);
      }), Co = Hn(function(e, n, t, i) {
        rr(e, n, t, i);
      }), Cd = on(function(e, n) {
        var t = {};
        if (e == null)
          return t;
        var i = !1;
        n = ee(n, function(f) {
          return f = En(f, e), i || (i = f.length > 1), f;
        }), Ze(e, Ci(e), t), i && (t = Ue(t, q | X | fe, Nl));
        for (var o = n.length; o--; )
          Ai(t, n[o]);
        return t;
      });
      function bd(e, n) {
        return bo(e, mr(C(n)));
      }
      var Rd = on(function(e, n) {
        return e == null ? {} : sl(e, n);
      });
      function bo(e, n) {
        if (e == null)
          return {};
        var t = ee(Ci(e), function(i) {
          return [i];
        });
        return n = C(n), Tu(e, t, function(i, o) {
          return n(i, o[0]);
        });
      }
      function Ld(e, n, t) {
        n = En(n, e);
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
      var Ro = $u(ce), Lo = $u(Oe);
      function Bd(e, n, t) {
        var i = B(e), o = i || Tn(e) || Xn(e);
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
      function kd(e, n, t) {
        return e == null ? e : Ou(e, n, yi(t));
      }
      function Ud(e, n, t, i) {
        return i = typeof i == "function" ? i : r, e == null ? e : Ou(e, n, yi(t), i);
      }
      function Qn(e) {
        return e == null ? [] : ri(e, ce(e));
      }
      function Wd(e) {
        return e == null ? [] : ri(e, Oe(e));
      }
      function Gd(e, n, t) {
        return t === r && (t = n, n = r), t !== r && (t = Ve(t), t = t === t ? t : 0), n !== r && (n = Ve(n), n = n === n ? n : 0), Sn(Ve(e), n, t);
      }
      function Vd(e, n, t) {
        return n = cn(n), t === r ? (t = n, n = 0) : t = cn(t), e = Ve(e), Jc(e, n, t);
      }
      function $d(e, n, t) {
        if (t && typeof t != "boolean" && Te(e, n, t) && (n = t = r), t === r && (typeof n == "boolean" ? (t = n, n = r) : typeof e == "boolean" && (t = e, e = r)), e === r && n === r ? (e = 0, n = 1) : (e = cn(e), n === r ? (n = e, e = 0) : n = cn(n)), e > n) {
          var i = e;
          e = n, n = i;
        }
        if (t || e % 1 || n % 1) {
          var o = tu();
          return _e(e + o * (n - e + Tf("1e-" + ((o + "").length - 1))), n);
        }
        return Ei(e, n);
      }
      var Yd = zn(function(e, n, t) {
        return n = n.toLowerCase(), e + (t ? Fo(n) : n);
      });
      function Fo(e) {
        return Hi(z(e).toLowerCase());
      }
      function Po(e) {
        return e = z(e), e && e.replace(qa, Ff).replace(lf, "");
      }
      function qd(e, n, t) {
        e = z(e), n = Ce(n);
        var i = e.length;
        t = t === r ? i : Sn(M(t), 0, i);
        var o = t;
        return t -= n.length, t >= 0 && e.slice(t, o) == n;
      }
      function Hd(e) {
        return e = z(e), e && ya.test(e) ? e.replace(ls, Pf) : e;
      }
      function zd(e) {
        return e = z(e), e && ba.test(e) ? e.replace(Gr, "\\$&") : e;
      }
      var Jd = zn(function(e, n, t) {
        return e + (t ? "-" : "") + n.toLowerCase();
      }), Xd = zn(function(e, n, t) {
        return e + (t ? " " : "") + n.toLowerCase();
      }), Qd = Mu("toLowerCase");
      function Kd(e, n, t) {
        e = z(e), n = M(n);
        var i = n ? Wn(e) : 0;
        if (!n || i >= n)
          return e;
        var o = (n - i) / 2;
        return fr(Qt(o), t) + e + fr(Xt(o), t);
      }
      function Zd(e, n, t) {
        e = z(e), n = M(n);
        var i = n ? Wn(e) : 0;
        return n && i < n ? e + fr(n - i, t) : e;
      }
      function jd(e, n, t) {
        e = z(e), n = M(n);
        var i = n ? Wn(e) : 0;
        return n && i < n ? fr(n - i, t) + e : e;
      }
      function e0(e, n, t) {
        return t || n == null ? n = 0 : n && (n = +n), oc(z(e).replace(Vr, ""), n || 0);
      }
      function n0(e, n, t) {
        return (t ? Te(e, n, t) : n === r) ? n = 1 : n = M(n), xi(z(e), n);
      }
      function t0() {
        var e = arguments, n = z(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var r0 = zn(function(e, n, t) {
        return e + (t ? "_" : "") + n.toLowerCase();
      });
      function i0(e, n, t) {
        return t && typeof t != "number" && Te(e, n, t) && (n = t = r), t = t === r ? Qe : t >>> 0, t ? (e = z(e), e && (typeof n == "string" || n != null && !$i(n)) && (n = Ce(n), !n && Un(e)) ? xn(qe(e), 0, t) : e.split(n, t)) : [];
      }
      var s0 = zn(function(e, n, t) {
        return e + (t ? " " : "") + Hi(n);
      });
      function u0(e, n, t) {
        return e = z(e), t = t == null ? 0 : Sn(M(t), 0, e.length), n = Ce(n), e.slice(t, t + n.length) == n;
      }
      function o0(e, n, t) {
        var i = a.templateSettings;
        t && Te(e, n, t) && (n = r), e = z(e), n = Tr({}, n, i, Yu);
        var o = Tr({}, n.imports, i.imports, Yu), f = ce(o), h = ri(o, f), p, g, E = 0, x = n.interpolate || Ft, I = "__p += '", N = si(
          (n.escape || Ft).source + "|" + x.source + "|" + (x === hs ? Ua : Ft).source + "|" + (n.evaluate || Ft).source + "|$",
          "g"
        ), w = "//# sourceURL=" + (J.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++_f + "]") + `
`;
        e.replace(N, function(R, G, Y, Re, Ae, Le) {
          return Y || (Y = Re), I += e.slice(E, Le).replace(Ha, Bf), G && (p = !0, I += `' +
__e(` + G + `) +
'`), Ae && (g = !0, I += `';
` + Ae + `;
__p += '`), Y && (I += `' +
((__t = (` + Y + `)) == null ? '' : __t) +
'`), E = Le + R.length, R;
        }), I += `';
`;
        var b = J.call(n, "variable") && n.variable;
        if (!b)
          I = `with (obj) {
` + I + `
}
`;
        else if (Ma.test(b))
          throw new P(D);
        I = (g ? I.replace(Ta, "") : I).replace(Aa, "$1").replace(Ia, "$1;"), I = "function(" + (b || "obj") + `) {
` + (b ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (p ? ", __e = _.escape" : "") + (g ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + I + `return __p
}`;
        var k = Mo(function() {
          return H(f, w + "return " + I).apply(r, h);
        });
        if (k.source = I, Vi(k))
          throw k;
        return k;
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
        if (!e || !(n = Ce(n)))
          return e;
        var i = qe(e), o = qe(n), f = Hs(i, o), h = zs(i, o) + 1;
        return xn(i, f, h).join("");
      }
      function l0(e, n, t) {
        if (e = z(e), e && (t || n === r))
          return e.slice(0, Xs(e) + 1);
        if (!e || !(n = Ce(n)))
          return e;
        var i = qe(e), o = zs(i, qe(n)) + 1;
        return xn(i, 0, o).join("");
      }
      function h0(e, n, t) {
        if (e = z(e), e && (t || n === r))
          return e.replace(Vr, "");
        if (!e || !(n = Ce(n)))
          return e;
        var i = qe(e), o = Hs(i, qe(n));
        return xn(i, o).join("");
      }
      function p0(e, n) {
        var t = sa, i = ua;
        if (ne(n)) {
          var o = "separator" in n ? n.separator : o;
          t = "length" in n ? M(n.length) : t, i = "omission" in n ? Ce(n.omission) : i;
        }
        e = z(e);
        var f = e.length;
        if (Un(e)) {
          var h = qe(e);
          f = h.length;
        }
        if (t >= f)
          return e;
        var p = t - Wn(i);
        if (p < 1)
          return i;
        var g = h ? xn(h, 0, p).join("") : e.slice(0, p);
        if (o === r)
          return g + i;
        if (h && (p += g.length - p), $i(o)) {
          if (e.slice(p).search(o)) {
            var E, x = g;
            for (o.global || (o = si(o.source, z(ps.exec(o)) + "g")), o.lastIndex = 0; E = o.exec(x); )
              var I = E.index;
            g = g.slice(0, I === r ? p : I);
          }
        } else if (e.indexOf(Ce(o), p) != p) {
          var N = g.lastIndexOf(o);
          N > -1 && (g = g.slice(0, N));
        }
        return g + i;
      }
      function d0(e) {
        return e = z(e), e && Na.test(e) ? e.replace(cs, $f) : e;
      }
      var g0 = zn(function(e, n, t) {
        return e + (t ? " " : "") + n.toUpperCase();
      }), Hi = Mu("toUpperCase");
      function Bo(e, n, t) {
        return e = z(e), n = t ? r : n, n === r ? kf(e) ? Hf(e) : Df(e) : e.match(n) || [];
      }
      var Mo = W(function(e, n) {
        try {
          return Se(e, r, n);
        } catch (t) {
          return Vi(t) ? t : new P(t);
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
            throw new Me(A);
          return [t(i[0]), i[1]];
        }) : [], W(function(i) {
          for (var o = -1; ++o < n; ) {
            var f = e[o];
            if (Se(f[0], this, i))
              return Se(f[1], this, i);
          }
        });
      }
      function m0(e) {
        return $c(Ue(e, q));
      }
      function zi(e) {
        return function() {
          return e;
        };
      }
      function E0(e, n) {
        return e == null || e !== e ? n : e;
      }
      var x0 = Uu(), T0 = Uu(!0);
      function we(e) {
        return e;
      }
      function Ji(e) {
        return gu(typeof e == "function" ? e : Ue(e, q));
      }
      function A0(e) {
        return vu(Ue(e, q));
      }
      function I0(e, n) {
        return mu(e, Ue(n, q));
      }
      var N0 = W(function(e, n) {
        return function(t) {
          return vt(t, e, n);
        };
      }), y0 = W(function(e, n) {
        return function(t) {
          return vt(e, t, n);
        };
      });
      function Xi(e, n, t) {
        var i = ce(n), o = tr(n, i);
        t == null && !(ne(n) && (o.length || !i.length)) && (t = n, n = e, e = this, o = tr(n, ce(n)));
        var f = !(ne(t) && "chain" in t) || !!t.chain, h = fn(e);
        return Be(o, function(p) {
          var g = n[p];
          e[p] = g, h && (e.prototype[p] = function() {
            var E = this.__chain__;
            if (f || E) {
              var x = e(this.__wrapped__), I = x.__actions__ = Ne(this.__actions__);
              return I.push({ func: g, args: arguments, thisArg: e }), x.__chain__ = E, x;
            }
            return g.apply(e, dn([this.value()], arguments));
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
      var S0 = wi(ee), D0 = wi(Ws), C0 = wi(Zr);
      function ko(e) {
        return Fi(e) ? jr(je(e)) : ul(e);
      }
      function b0(e) {
        return function(n) {
          return e == null ? r : Dn(e, n);
        };
      }
      var R0 = Gu(), L0 = Gu(!0);
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
        if (e = M(e), e < 1 || e > hn)
          return [];
        var t = Qe, i = _e(e, Qe);
        n = C(n), e -= Qe;
        for (var o = ti(i, n); ++t < e; )
          n(t);
        return o;
      }
      function k0(e) {
        return B(e) ? ee(e, je) : be(e) ? [e] : Ne(ro(z(e)));
      }
      function U0(e) {
        var n = ++Qf;
        return z(e) + n;
      }
      var W0 = ar(function(e, n) {
        return e + n;
      }, 0), G0 = Si("ceil"), V0 = ar(function(e, n) {
        return e / n;
      }, 1), $0 = Si("floor");
      function Y0(e) {
        return e && e.length ? nr(e, we, pi) : r;
      }
      function q0(e, n) {
        return e && e.length ? nr(e, C(n, 2), pi) : r;
      }
      function H0(e) {
        return $s(e, we);
      }
      function z0(e, n) {
        return $s(e, C(n, 2));
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
      return a.after = Ap, a.ary = go, a.assign = fd, a.assignIn = Do, a.assignInWith = Tr, a.assignWith = cd, a.at = ld, a.before = _o, a.bind = Wi, a.bindAll = _0, a.bindKey = vo, a.castArray = Fp, a.chain = lo, a.chunk = $l, a.compact = Yl, a.concat = ql, a.cond = v0, a.conforms = m0, a.constant = zi, a.countBy = jh, a.create = hd, a.curry = mo, a.curryRight = Eo, a.debounce = xo, a.defaults = pd, a.defaultsDeep = dd, a.defer = Ip, a.delay = Np, a.difference = Hl, a.differenceBy = zl, a.differenceWith = Jl, a.drop = Xl, a.dropRight = Ql, a.dropRightWhile = Kl, a.dropWhile = Zl, a.fill = jl, a.filter = np, a.flatMap = ip, a.flatMapDeep = sp, a.flatMapDepth = up, a.flatten = oo, a.flattenDeep = eh, a.flattenDepth = nh, a.flip = yp, a.flow = x0, a.flowRight = T0, a.fromPairs = th, a.functions = Td, a.functionsIn = Ad, a.groupBy = op, a.initial = ih, a.intersection = sh, a.intersectionBy = uh, a.intersectionWith = oh, a.invert = Nd, a.invertBy = yd, a.invokeMap = fp, a.iteratee = Ji, a.keyBy = cp, a.keys = ce, a.keysIn = Oe, a.map = gr, a.mapKeys = wd, a.mapValues = Sd, a.matches = A0, a.matchesProperty = I0, a.memoize = vr, a.merge = Dd, a.mergeWith = Co, a.method = N0, a.methodOf = y0, a.mixin = Xi, a.negate = mr, a.nthArg = w0, a.omit = Cd, a.omitBy = bd, a.once = Op, a.orderBy = lp, a.over = S0, a.overArgs = wp, a.overEvery = D0, a.overSome = C0, a.partial = Gi, a.partialRight = To, a.partition = hp, a.pick = Rd, a.pickBy = bo, a.property = ko, a.propertyOf = b0, a.pull = lh, a.pullAll = fo, a.pullAllBy = hh, a.pullAllWith = ph, a.pullAt = dh, a.range = R0, a.rangeRight = L0, a.rearg = Sp, a.reject = gp, a.remove = gh, a.rest = Dp, a.reverse = ki, a.sampleSize = vp, a.set = Fd, a.setWith = Pd, a.shuffle = mp, a.slice = _h, a.sortBy = Tp, a.sortedUniq = Ih, a.sortedUniqBy = Nh, a.split = i0, a.spread = Cp, a.tail = yh, a.take = Oh, a.takeRight = wh, a.takeRightWhile = Sh, a.takeWhile = Dh, a.tap = Yh, a.throttle = bp, a.thru = dr, a.toArray = Oo, a.toPairs = Ro, a.toPairsIn = Lo, a.toPath = k0, a.toPlainObject = So, a.transform = Bd, a.unary = Rp, a.union = Ch, a.unionBy = bh, a.unionWith = Rh, a.uniq = Lh, a.uniqBy = Fh, a.uniqWith = Ph, a.unset = Md, a.unzip = Ui, a.unzipWith = co, a.update = kd, a.updateWith = Ud, a.values = Qn, a.valuesIn = Wd, a.without = Bh, a.words = Bo, a.wrap = Lp, a.xor = Mh, a.xorBy = kh, a.xorWith = Uh, a.zip = Wh, a.zipObject = Gh, a.zipObjectDeep = Vh, a.zipWith = $h, a.entries = Ro, a.entriesIn = Lo, a.extend = Do, a.extendWith = Tr, Xi(a, a), a.add = W0, a.attempt = Mo, a.camelCase = Yd, a.capitalize = Fo, a.ceil = G0, a.clamp = Gd, a.clone = Pp, a.cloneDeep = Mp, a.cloneDeepWith = kp, a.cloneWith = Bp, a.conformsTo = Up, a.deburr = Po, a.defaultTo = E0, a.divide = V0, a.endsWith = qd, a.eq = ze, a.escape = Hd, a.escapeRegExp = zd, a.every = ep, a.find = tp, a.findIndex = so, a.findKey = gd, a.findLast = rp, a.findLastIndex = uo, a.findLastKey = _d, a.floor = $0, a.forEach = ho, a.forEachRight = po, a.forIn = vd, a.forInRight = md, a.forOwn = Ed, a.forOwnRight = xd, a.get = Yi, a.gt = Wp, a.gte = Gp, a.has = Id, a.hasIn = qi, a.head = ao, a.identity = we, a.includes = ap, a.indexOf = rh, a.inRange = Vd, a.invoke = Od, a.isArguments = Rn, a.isArray = B, a.isArrayBuffer = Vp, a.isArrayLike = ye, a.isArrayLikeObject = re, a.isBoolean = $p, a.isBuffer = Tn, a.isDate = Yp, a.isElement = qp, a.isEmpty = Hp, a.isEqual = zp, a.isEqualWith = Jp, a.isError = Vi, a.isFinite = Xp, a.isFunction = fn, a.isInteger = Ao, a.isLength = Er, a.isMap = Io, a.isMatch = Qp, a.isMatchWith = Kp, a.isNaN = Zp, a.isNative = jp, a.isNil = nd, a.isNull = ed, a.isNumber = No, a.isObject = ne, a.isObjectLike = te, a.isPlainObject = It, a.isRegExp = $i, a.isSafeInteger = td, a.isSet = yo, a.isString = xr, a.isSymbol = be, a.isTypedArray = Xn, a.isUndefined = rd, a.isWeakMap = id, a.isWeakSet = sd, a.join = ah, a.kebabCase = Jd, a.last = Ge, a.lastIndexOf = fh, a.lowerCase = Xd, a.lowerFirst = Qd, a.lt = ud, a.lte = od, a.max = Y0, a.maxBy = q0, a.mean = H0, a.meanBy = z0, a.min = J0, a.minBy = X0, a.stubArray = Ki, a.stubFalse = Zi, a.stubObject = F0, a.stubString = P0, a.stubTrue = B0, a.multiply = Q0, a.nth = ch, a.noConflict = O0, a.noop = Qi, a.now = _r, a.pad = Kd, a.padEnd = Zd, a.padStart = jd, a.parseInt = e0, a.random = $d, a.reduce = pp, a.reduceRight = dp, a.repeat = n0, a.replace = t0, a.result = Ld, a.round = K0, a.runInContext = d, a.sample = _p, a.size = Ep, a.snakeCase = r0, a.some = xp, a.sortedIndex = vh, a.sortedIndexBy = mh, a.sortedIndexOf = Eh, a.sortedLastIndex = xh, a.sortedLastIndexBy = Th, a.sortedLastIndexOf = Ah, a.startCase = s0, a.startsWith = u0, a.subtract = Z0, a.sum = j0, a.sumBy = eg, a.template = o0, a.times = M0, a.toFinite = cn, a.toInteger = M, a.toLength = wo, a.toLower = a0, a.toNumber = Ve, a.toSafeInteger = ad, a.toString = z, a.toUpper = f0, a.trim = c0, a.trimEnd = l0, a.trimStart = h0, a.truncate = p0, a.unescape = d0, a.uniqueId = U0, a.upperCase = g0, a.upperFirst = Hi, a.each = ho, a.eachRight = po, a.first = ao, Xi(a, function() {
        var e = {};
        return Ke(a, function(n, t) {
          J.call(a.prototype, t) || (e[t] = n);
        }), e;
      }(), { chain: !1 }), a.VERSION = l, Be(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        a[e].placeholder = a;
      }), Be(["drop", "take"], function(e, n) {
        V.prototype[e] = function(t) {
          t = t === r ? 1 : ae(M(t), 0);
          var i = this.__filtered__ && !n ? new V(this) : this.clone();
          return i.__filtered__ ? i.__takeCount__ = _e(t, i.__takeCount__) : i.__views__.push({
            size: _e(t, Qe),
            type: e + (i.__dir__ < 0 ? "Right" : "")
          }), i;
        }, V.prototype[e + "Right"] = function(t) {
          return this.reverse()[e](t).reverse();
        };
      }), Be(["filter", "map", "takeWhile"], function(e, n) {
        var t = n + 1, i = t == os || t == ca;
        V.prototype[e] = function(o) {
          var f = this.clone();
          return f.__iteratees__.push({
            iteratee: C(o, 3),
            type: t
          }), f.__filtered__ = f.__filtered__ || i, f;
        };
      }), Be(["head", "last"], function(e, n) {
        var t = "take" + (n ? "Right" : "");
        V.prototype[e] = function() {
          return this[t](1).value()[0];
        };
      }), Be(["initial", "tail"], function(e, n) {
        var t = "drop" + (n ? "" : "Right");
        V.prototype[e] = function() {
          return this.__filtered__ ? new V(this) : this[t](1);
        };
      }), V.prototype.compact = function() {
        return this.filter(we);
      }, V.prototype.find = function(e) {
        return this.filter(e).head();
      }, V.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, V.prototype.invokeMap = W(function(e, n) {
        return typeof e == "function" ? new V(this) : this.map(function(t) {
          return vt(t, e, n);
        });
      }), V.prototype.reject = function(e) {
        return this.filter(mr(C(e)));
      }, V.prototype.slice = function(e, n) {
        e = M(e);
        var t = this;
        return t.__filtered__ && (e > 0 || n < 0) ? new V(t) : (e < 0 ? t = t.takeRight(-e) : e && (t = t.drop(e)), n !== r && (n = M(n), t = n < 0 ? t.dropRight(-n) : t.take(n - e)), t);
      }, V.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, V.prototype.toArray = function() {
        return this.take(Qe);
      }, Ke(V.prototype, function(e, n) {
        var t = /^(?:filter|find|map|reject)|While$/.test(n), i = /^(?:head|last)$/.test(n), o = a[i ? "take" + (n == "last" ? "Right" : "") : n], f = i || /^find/.test(n);
        o && (a.prototype[n] = function() {
          var h = this.__wrapped__, p = i ? [1] : arguments, g = h instanceof V, E = p[0], x = g || B(h), I = function(G) {
            var Y = o.apply(a, dn([G], p));
            return i && N ? Y[0] : Y;
          };
          x && t && typeof E == "function" && E.length != 1 && (g = x = !1);
          var N = this.__chain__, w = !!this.__actions__.length, b = f && !N, k = g && !w;
          if (!f && x) {
            h = k ? h : new V(this);
            var R = e.apply(h, p);
            return R.__actions__.push({ func: dr, args: [I], thisArg: r }), new ke(R, N);
          }
          return b && k ? e.apply(this, p) : (R = this.thru(I), b ? i ? R.value()[0] : R.value() : R);
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
      }), Ke(V.prototype, function(e, n) {
        var t = a[n];
        if (t) {
          var i = t.name + "";
          J.call(Yn, i) || (Yn[i] = []), Yn[i].push({ name: n, func: t });
        }
      }), Yn[or(r, he).name] = [{
        name: "wrapper",
        func: r
      }], V.prototype.clone = dc, V.prototype.reverse = gc, V.prototype.value = _c, a.prototype.at = qh, a.prototype.chain = Hh, a.prototype.commit = zh, a.prototype.next = Jh, a.prototype.plant = Qh, a.prototype.reverse = Kh, a.prototype.toJSON = a.prototype.valueOf = a.prototype.value = Zh, a.prototype.first = a.prototype.head, ct && (a.prototype[ct] = Xh), a;
    }, Gn = zf();
    Nn ? ((Nn.exports = Gn)._ = Gn, Jr._ = Gn) : pe._ = Gn;
  }).call(Nt);
})(Or, Or.exports);
var wt = Or.exports;
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
  const r = s.locationOffset.column - 1, l = "".padStart(r) + s.body, c = u.line - 1, _ = s.locationOffset.line - 1, A = u.line + _, D = u.line === 1 ? r : 0, L = u.column + D, F = `${s.name}:${A}:${L}
`, U = l.split(/\r\n|[\n\r]/g), q = U[c];
  if (q.length > 120) {
    const X = Math.floor(L / 80), fe = L % 80, K = [];
    for (let me = 0; me < q.length; me += 80)
      K.push(q.slice(me, me + 80));
    return F + Wo([
      [`${A} |`, K[0]],
      ...K.slice(1, X + 1).map((me) => ["|", me]),
      ["|", "^".padStart(fe)],
      ["|", K[X + 1]]
    ]);
  }
  return F + Wo([
    // Lines specified like this: ["prefix", "string"],
    [`${A - 1} |`, U[c - 1]],
    [`${A} |`, q],
    ["|", "^".padStart(L)],
    [`${A + 1} |`, U[c + 1]]
  ]);
}
function Wo(s) {
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
class ss extends Error {
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
    const { nodes: A, source: D, positions: L, path: F, originalError: U, extensions: q } = og(r);
    super(u), this.name = "GraphQLError", this.path = F ?? void 0, this.originalError = U ?? void 0, this.nodes = Go(
      Array.isArray(A) ? A : A ? [A] : void 0
    );
    const X = Go(
      (l = this.nodes) === null || l === void 0 ? void 0 : l.map((K) => K.loc).filter((K) => K != null)
    );
    this.source = D ?? (X == null || (c = X[0]) === null || c === void 0 ? void 0 : c.source), this.positions = L ?? (X == null ? void 0 : X.map((K) => K.start)), this.locations = L && D ? L.map((K) => es(D, K)) : X == null ? void 0 : X.map((K) => es(K.source, K.start));
    const fe = rg(
      U == null ? void 0 : U.extensions
    ) ? U == null ? void 0 : U.extensions : void 0;
    this.extensions = (_ = q ?? fe) !== null && _ !== void 0 ? _ : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
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
    }), U != null && U.stack ? Object.defineProperty(this, "stack", {
      value: U.stack,
      writable: !0,
      configurable: !0
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, ss) : Object.defineProperty(this, "stack", {
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
function Go(s) {
  return s === void 0 || s.length === 0 ? void 0 : s;
}
function le(s, u, r) {
  return new ss(`Syntax Error: ${r}`, {
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
class Ho {
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
  constructor(u, r, l, c, _, A) {
    this.kind = u, this.start = r, this.end = l, this.line = c, this.column = _, this.value = A, this.prev = null, this.next = null;
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
const zo = {
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
}, fg = new Set(Object.keys(zo));
function Vo(s) {
  const u = s == null ? void 0 : s.kind;
  return typeof u == "string" && fg.has(u);
}
var Kn;
(function(s) {
  s.QUERY = "query", s.MUTATION = "mutation", s.SUBSCRIPTION = "subscription";
})(Kn || (Kn = {}));
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
function St(s) {
  return s >= 48 && s <= 57;
}
function Jo(s) {
  return s >= 97 && s <= 122 || // A-Z
  s >= 65 && s <= 90;
}
function Xo(s) {
  return Jo(s) || s === 95;
}
function cg(s) {
  return Jo(s) || St(s) || s === 95;
}
function lg(s) {
  var u;
  let r = Number.MAX_SAFE_INTEGER, l = null, c = -1;
  for (let A = 0; A < s.length; ++A) {
    var _;
    const D = s[A], L = hg(D);
    L !== D.length && (l = (_ = l) !== null && _ !== void 0 ? _ : A, c = A, A !== 0 && L < r && (r = L));
  }
  return s.map((A, D) => D === 0 ? A : A.slice(r)).slice(
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
  const r = s.replace(/"""/g, '\\"""'), l = r.split(/\r\n|[\n\r]/g), c = l.length === 1, _ = l.length > 1 && l.slice(1).every((fe) => fe.length === 0 || ts(fe.charCodeAt(0))), A = r.endsWith('\\"""'), D = s.endsWith('"') && !A, L = s.endsWith("\\"), F = D || L, U = (
    // add leading and trailing new lines only if it improves readability
    !c || s.length > 70 || F || _ || A
  );
  let q = "";
  const X = c && ts(s.charCodeAt(0));
  return (U && !X || _) && (q += `
`), q += r, (U || F) && (q += `
`), '"""' + q + '"""';
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
    const r = new Ho(T.SOF, 0, 0, 0, 0);
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
function jn(s) {
  return s >= 0 && s <= 55295 || s >= 57344 && s <= 1114111;
}
function Dr(s, u) {
  return Qo(s.charCodeAt(u)) && Ko(s.charCodeAt(u + 1));
}
function Qo(s) {
  return s >= 55296 && s <= 56319;
}
function Ko(s) {
  return s >= 56320 && s <= 57343;
}
function Fn(s, u) {
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
  const _ = s.line, A = 1 + r - s.lineStart;
  return new Ho(u, r, l, _, A, c);
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
        return r.charCodeAt(c + 1) === 34 && r.charCodeAt(c + 2) === 34 ? Ig(s, c) : Eg(s, c);
    }
    if (St(_) || _ === 45)
      return mg(s, c, _);
    if (Xo(_))
      return Ng(s, c);
    throw le(
      s.source,
      c,
      _ === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : jn(_) || Dr(r, c) ? `Unexpected character: ${Fn(s, c)}.` : `Invalid character: ${Fn(s, c)}.`
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
    if (jn(_))
      ++c;
    else if (Dr(r, c))
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
function mg(s, u, r) {
  const l = s.source.body;
  let c = u, _ = r, A = !1;
  if (_ === 45 && (_ = l.charCodeAt(++c)), _ === 48) {
    if (_ = l.charCodeAt(++c), St(_))
      throw le(
        s.source,
        c,
        `Invalid number, unexpected digit after 0: ${Fn(
          s,
          c
        )}.`
      );
  } else
    c = ji(s, c, _), _ = l.charCodeAt(c);
  if (_ === 46 && (A = !0, _ = l.charCodeAt(++c), c = ji(s, c, _), _ = l.charCodeAt(c)), (_ === 69 || _ === 101) && (A = !0, _ = l.charCodeAt(++c), (_ === 43 || _ === 45) && (_ = l.charCodeAt(++c)), c = ji(s, c, _), _ = l.charCodeAt(c)), _ === 46 || Xo(_))
    throw le(
      s.source,
      c,
      `Invalid number, expected digit but got: ${Fn(
        s,
        c
      )}.`
    );
  return se(
    s,
    A ? T.FLOAT : T.INT,
    u,
    c,
    l.slice(u, c)
  );
}
function ji(s, u, r) {
  if (!St(r))
    throw le(
      s.source,
      u,
      `Invalid number, expected digit but got: ${Fn(
        s,
        u
      )}.`
    );
  const l = s.source.body;
  let c = u + 1;
  for (; St(l.charCodeAt(c)); )
    ++c;
  return c;
}
function Eg(s, u) {
  const r = s.source.body, l = r.length;
  let c = u + 1, _ = c, A = "";
  for (; c < l; ) {
    const D = r.charCodeAt(c);
    if (D === 34)
      return A += r.slice(_, c), se(s, T.STRING, u, c + 1, A);
    if (D === 92) {
      A += r.slice(_, c);
      const L = r.charCodeAt(c + 1) === 117 ? r.charCodeAt(c + 2) === 123 ? xg(s, c) : Tg(s, c) : Ag(s, c);
      A += L.value, c += L.size, _ = c;
      continue;
    }
    if (D === 10 || D === 13)
      break;
    if (jn(D))
      ++c;
    else if (Dr(r, c))
      c += 2;
    else
      throw le(
        s.source,
        c,
        `Invalid character within String: ${Fn(
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
      if (c < 5 || !jn(l))
        break;
      return {
        value: String.fromCodePoint(l),
        size: c
      };
    }
    if (l = l << 4 | Ot(_), l < 0)
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
  const r = s.source.body, l = $o(r, u + 2);
  if (jn(l))
    return {
      value: String.fromCodePoint(l),
      size: 6
    };
  if (Qo(l) && r.charCodeAt(u + 6) === 92 && r.charCodeAt(u + 7) === 117) {
    const c = $o(r, u + 8);
    if (Ko(c))
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
function $o(s, u) {
  return Ot(s.charCodeAt(u)) << 12 | Ot(s.charCodeAt(u + 1)) << 8 | Ot(s.charCodeAt(u + 2)) << 4 | Ot(s.charCodeAt(u + 3));
}
function Ot(s) {
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
  let c = s.lineStart, _ = u + 3, A = _, D = "";
  const L = [];
  for (; _ < l; ) {
    const F = r.charCodeAt(_);
    if (F === 34 && r.charCodeAt(_ + 1) === 34 && r.charCodeAt(_ + 2) === 34) {
      D += r.slice(A, _), L.push(D);
      const U = se(
        s,
        T.BLOCK_STRING,
        u,
        _ + 3,
        // Return a string of the lines joined with U+000A.
        lg(L).join(`
`)
      );
      return s.line += L.length - 1, s.lineStart = c, U;
    }
    if (F === 92 && r.charCodeAt(_ + 1) === 34 && r.charCodeAt(_ + 2) === 34 && r.charCodeAt(_ + 3) === 34) {
      D += r.slice(A, _), A = _ + 1, _ += 4;
      continue;
    }
    if (F === 10 || F === 13) {
      D += r.slice(A, _), L.push(D), F === 13 && r.charCodeAt(_ + 1) === 10 ? _ += 2 : ++_, D = "", A = _, c = _;
      continue;
    }
    if (jn(F))
      ++_;
    else if (Dr(r, _))
      _ += 2;
    else
      throw le(
        s.source,
        _,
        `Invalid character within String: ${Fn(
          s,
          _
        )}.`
      );
  }
  throw le(s.source, _, "Unterminated string.");
}
function Ng(s, u) {
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
const yg = 10, Zo = 2;
function us(s) {
  return Cr(s, []);
}
function Cr(s, u) {
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
      return typeof l == "string" ? l : Cr(l, r);
  } else if (Array.isArray(s))
    return Dg(s, r);
  return Sg(s, r);
}
function wg(s) {
  return typeof s.toJSON == "function";
}
function Sg(s, u) {
  const r = Object.entries(s);
  return r.length === 0 ? "{}" : u.length > Zo ? "[" + Cg(s) + "]" : "{ " + r.map(
    ([c, _]) => c + ": " + Cr(_, u)
  ).join(", ") + " }";
}
function Dg(s, u) {
  if (s.length === 0)
    return "[]";
  if (u.length > Zo)
    return "[Array]";
  const r = Math.min(yg, s.length), l = s.length - r, c = [];
  for (let _ = 0; _ < r; ++_)
    c.push(Cr(s[_], u));
  return l === 1 ? c.push("... 1 more item") : l > 1 && c.push(`... ${l} more items`), "[" + c.join(", ") + "]";
}
function Cg(s) {
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
        const A = us(u);
        throw new Error(`Cannot use ${c} "${A}" from another module or realm.

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
class jo {
  constructor(u, r = "GraphQL request", l = {
    line: 1,
    column: 1
  }) {
    typeof u == "string" || Ir(!1, `Body must be a string. Received: ${us(u)}.`), this.body = u, this.name = r, this.locationOffset = l, this.locationOffset.line > 0 || Ir(
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
  return Rg(s, jo);
}
function ea(s, u) {
  return new Fg(s, u).parseDocument();
}
class Fg {
  constructor(u, r = {}) {
    const l = Lg(u) ? u : new jo(u);
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
        operation: Kn.QUERY,
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
        return Kn.QUERY;
      case "mutation":
        return Kn.MUTATION;
      case "subscription":
        return Kn.SUBSCRIPTION;
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
    const l = this.parseName(), c = this.parseImplementsInterfaces(), _ = this.parseConstDirectives(), A = this.parseFieldsDefinition();
    return this.node(u, {
      kind: S.OBJECT_TYPE_DEFINITION,
      description: r,
      name: l,
      interfaces: c,
      directives: _,
      fields: A
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
    const _ = this.parseTypeReference(), A = this.parseConstDirectives();
    return this.node(u, {
      kind: S.FIELD_DEFINITION,
      description: r,
      name: l,
      arguments: c,
      type: _,
      directives: A
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
    const A = this.parseConstDirectives();
    return this.node(u, {
      kind: S.INPUT_VALUE_DEFINITION,
      description: r,
      name: l,
      type: c,
      defaultValue: _,
      directives: A
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  parseInterfaceTypeDefinition() {
    const u = this._lexer.token, r = this.parseDescription();
    this.expectKeyword("interface");
    const l = this.parseName(), c = this.parseImplementsInterfaces(), _ = this.parseConstDirectives(), A = this.parseFieldsDefinition();
    return this.node(u, {
      kind: S.INTERFACE_TYPE_DEFINITION,
      description: r,
      name: l,
      interfaces: c,
      directives: _,
      fields: A
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
    const A = this.parseDirectiveLocations();
    return this.node(u, {
      kind: S.DIRECTIVE_DEFINITION,
      description: r,
      name: l,
      arguments: c,
      repeatable: _,
      locations: A
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
      `Expected ${na(u)}, found ${Ar(r)}.`
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
  return na(s.kind) + (u != null ? ` "${u}"` : "");
}
function na(s) {
  return gg(s) ? `"${s}"` : s;
}
function Pg(s) {
  return `"${s.replace(Bg, Mg)}"`;
}
const Bg = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Mg(s) {
  return kg[s.charCodeAt(0)];
}
const kg = [
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
], Ug = Object.freeze({});
function rs(s, u, r = zo) {
  const l = /* @__PURE__ */ new Map();
  for (const he of Object.values(S))
    l.set(he, Wg(u, he));
  let c, _ = Array.isArray(s), A = [s], D = -1, L = [], F = s, U, q;
  const X = [], fe = [];
  do {
    D++;
    const he = D === A.length, et = he && L.length !== 0;
    if (he) {
      if (U = fe.length === 0 ? void 0 : X[X.length - 1], F = q, q = fe.pop(), et)
        if (_) {
          F = F.slice();
          let Ee = 0;
          for (const [Ie, en] of L) {
            const Fe = Ie - Ee;
            en === null ? (F.splice(Fe, 1), Ee++) : F[Fe] = en;
          }
        } else {
          F = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(F)
          );
          for (const [Ee, Ie] of L)
            F[Ee] = Ie;
        }
      D = c.index, A = c.keys, L = c.edits, _ = c.inArray, c = c.prev;
    } else if (q) {
      if (U = _ ? D : A[D], F = q[U], F == null)
        continue;
      X.push(U);
    }
    let ue;
    if (!Array.isArray(F)) {
      var K, me;
      Vo(F) || Ir(!1, `Invalid AST Node: ${us(F)}.`);
      const Ee = he ? (K = l.get(F.kind)) === null || K === void 0 ? void 0 : K.leave : (me = l.get(F.kind)) === null || me === void 0 ? void 0 : me.enter;
      if (ue = Ee == null ? void 0 : Ee.call(u, F, U, q, X, fe), ue === Ug)
        break;
      if (ue === !1) {
        if (!he) {
          X.pop();
          continue;
        }
      } else if (ue !== void 0 && (L.push([U, ue]), !he))
        if (Vo(ue))
          F = ue;
        else {
          X.pop();
          continue;
        }
    }
    if (ue === void 0 && et && L.push([U, F]), he)
      X.pop();
    else {
      var ge;
      c = {
        inArray: _,
        index: D,
        keys: A,
        edits: L,
        prev: c
      }, _ = Array.isArray(F), A = _ ? F : (ge = r[F.kind]) !== null && ge !== void 0 ? ge : [], D = -1, L = [], q && fe.push(q), q = F;
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
  return rs(s, Vg);
}
const Gg = 80, Vg = {
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
      let A = _ + $("(", O(r, ", "), ")");
      return A.length > Gg && (A = _ + $(`(
`, Nr(O(r, `
`)), `
)`)), O([A, O(l, " "), c], " ");
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
`) + u + (Yo(r) ? $(`(
`, Nr(O(r, `
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
`) + "directive @" + u + (Yo(r) ? $(`(
`, Nr(O(r, `
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
`, Nr(O(s, `
`)), `
}`);
}
function $(s, u, r = "") {
  return u != null && u !== "" ? s + u + r : "";
}
function Nr(s) {
  return $("  ", s.replace(/\n/g, `
  `));
}
function Yo(s) {
  var u;
  return (u = s == null ? void 0 : s.some((r) => r.includes(`
`))) !== null && u !== void 0 ? u : !1;
}
var wr = function() {
  return wr = Object.assign || function(u) {
    for (var r, l = 1, c = arguments.length; l < c; l++) {
      r = arguments[l];
      for (var _ in r) Object.prototype.hasOwnProperty.call(r, _) && (u[_] = r[_]);
    }
    return u;
  }, wr.apply(this, arguments);
};
var yr = /* @__PURE__ */ new Map(), is = /* @__PURE__ */ new Map(), ra = !0, Sr = !1;
function ia(s) {
  return s.replace(/[\s,]+/g, " ").trim();
}
function $g(s) {
  return ia(s.source.body.substring(s.start, s.end));
}
function Yg(s) {
  var u = /* @__PURE__ */ new Set(), r = [];
  return s.definitions.forEach(function(l) {
    if (l.kind === "FragmentDefinition") {
      var c = l.name.value, _ = $g(l.loc), A = is.get(c);
      A && !A.has(_) ? ra && console.warn("Warning: fragment with name " + c + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : A || is.set(c, A = /* @__PURE__ */ new Set()), A.add(_), u.has(_) || (u.add(_), r.push(l));
    } else
      r.push(l);
  }), wr(wr({}, s), { definitions: r });
}
function qg(s) {
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
  if (!yr.has(u)) {
    var r = ea(s, {
      experimentalFragmentVariables: Sr,
      allowLegacyFragmentVariables: Sr
    });
    if (!r || r.kind !== "Document")
      throw new Error("Not a valid GraphQL document.");
    yr.set(u, qg(Yg(r)));
  }
  return yr.get(u);
}
function Zn(s) {
  for (var u = [], r = 1; r < arguments.length; r++)
    u[r - 1] = arguments[r];
  typeof s == "string" && (s = [s]);
  var l = s[0];
  return u.forEach(function(c, _) {
    c && c.kind === "Document" ? l += c.loc.source.body : l += c, l += s[_ + 1];
  }), Hg(l);
}
function zg() {
  yr.clear(), is.clear();
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
  gql: Zn,
  resetCaches: zg,
  disableFragmentWarnings: Jg,
  enableExperimentalFragmentVariables: Xg,
  disableExperimentalFragmentVariables: Qg
};
(function(s) {
  s.gql = yt.gql, s.resetCaches = yt.resetCaches, s.disableFragmentWarnings = yt.disableFragmentWarnings, s.enableExperimentalFragmentVariables = yt.enableExperimentalFragmentVariables, s.disableExperimentalFragmentVariables = yt.disableExperimentalFragmentVariables;
})(Zn || (Zn = {}));
Zn.default = Zn;
class Ln {
  constructor(u, r, l, c) {
    this.operationName = u, this.documentNode = r, this.variables = l, this.sourceMap = c;
  }
  static getFragmentDefinitionByName(u, r) {
    const l = u.definitions.find(
      (c) => c.kind === S.FRAGMENT_DEFINITION && c.name.value === r
    );
    if (!l)
      throw new Error(`Fragment "${r}" not found.`);
    return l;
  }
  static withInlinedFragments(u) {
    const r = rs(u, {
      SelectionSet: (l) => {
        const c = l.selections.flatMap((D) => D.kind === S.FRAGMENT_SPREAD ? [...Ln.getFragmentDefinitionByName(
          u,
          D.name.value
        ).selectionSet.selections] : [D]), _ = {}, A = [];
        for (const D of c)
          D.kind === S.FIELD ? _[D.name.value] || (_[D.name.value] = !0, A.push(D)) : A.push(D);
        return {
          ...l,
          selections: A
        };
      }
    });
    return {
      ...r,
      definitions: r.definitions.filter(
        (l) => l.kind !== S.FRAGMENT_DEFINITION
      )
    };
  }
  static fromString(u) {
    const { operationName: r, query: l, variables: c } = JSON.parse(u), _ = Ln.withInlinedFragments(ea(l));
    return new Ln(
      r ?? null,
      _,
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
    return rs(u, {
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
              var A;
              return {
                ..._,
                alias: {
                  kind: S.NAME,
                  value: l.newNamespacedFieldName(
                    r,
                    ((A = _.alias) == null ? void 0 : A.value) ?? _.name.value
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
      (_, A) => A(_, u, r),
      this.documentNode
    ), c = this.variables && Object.fromEntries(
      Object.entries(this.variables).map(([_, A]) => [
        r.getNamespacedVariableName(u, _),
        A
      ])
    );
    return new Ln(
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
    An(this, "variables", {});
    An(this, "fields", {});
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
      (D) => D.source === r
    );
    if (c)
      return c.namespaced;
    const _ = l.length, A = ["r", u, "v", _].join("");
    return this.variables = {
      ...this.variables,
      [u]: [
        ...l,
        { source: r, namespaced: A }
      ]
    }, A;
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
    An(this, "payloads");
    An(this, "sourceMap", new Kg());
    this.payloads = u.map(
      (r, l) => Ln.fromString(r).namespaced(
        String(l),
        this.sourceMap
      )
    );
  }
  execute() {
    const u = Zn`
			query BundledQuery($y: String!) {
				x
			}
		`, r = u.definitions[0], l = {
      ...u,
      definitions: [
        {
          ...r,
          variableDefinitions: this.payloads.flatMap(
            (A) => A.getVariableDefinitions()
          ),
          selectionSet: {
            ...r.selectionSet,
            selections: this.payloads.flatMap((A) => A.getFields())
          }
        }
      ]
    }, c = this.payloads.flatMap(
      (A) => A.variables ? Object.entries(A.variables) : []
    ), _ = c.length > 0 ? Object.fromEntries(c) : null;
    return {
      output: JSON.stringify(
        wt.omitBy(
          {
            operationName: "BundledQuery",
            query: ta(l),
            variables: _
          },
          wt.isNil
        )
      ),
      sourceMap: this.sourceMap
    };
  }
}
class e_ {
  constructor(u) {
    An(this, "fetchFunc");
    An(this, "tasks", []);
    An(this, "softExecute");
    this.fetchFunc = u.fetchFunc, this.softExecute = wt.debounce(
      this.execute.bind(this),
      u.bundlingIntervalMs
    );
  }
  async submitRequest(u) {
    if (!await this.canGetBundled(u))
      return this.fetchFunc(u);
    const l = new Promise((c, _) => {
      this.tasks.push({ request: u, resolve: c, reject: _ });
    });
    return this.softExecute(), l;
  }
  async canGetBundled(u) {
    const r = await u.clone().text();
    return Ln.fromString(r).canGetNamespaced();
  }
  popAllTasks() {
    const u = [...this.tasks];
    return this.tasks = [], { tasks: u };
  }
  async execute() {
    const { tasks: u } = this.popAllTasks();
    if (u.length === 0)
      return;
    const [r] = u, l = await Promise.all(
      u.map(({ request: L }) => L.clone().text())
    ), { output: c, sourceMap: _ } = new Zg(l).execute(), D = await (await this.fetchFunc(
      new Request(r.request.url, {
        method: r.request.method,
        headers: r.request.headers,
        body: c
      })
    )).json();
    if (D.data)
      u.forEach(({ resolve: L }, F) => {
        const U = _.getSourceResponseData(
          String(F),
          D.data ?? {}
        ), q = _.getSourceResponseErrors(
          String(F),
          D.errors
        ), X = JSON.stringify(
          wt.omitBy({ errors: q, data: U }, wt.isUndefined)
        );
        L(new Response(X));
      });
    else
      for (const { request: L, resolve: F, reject: U } of u)
        this.fetchFunc(L).then(F, U);
  }
  forceExecute() {
    return this.softExecute.cancel(), this.execute();
  }
}
export {
  e_ as ServerProxy
};
