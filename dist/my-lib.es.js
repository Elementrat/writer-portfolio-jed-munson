function h() {
}
function Q(t) {
  return t();
}
function I() {
  return /* @__PURE__ */ Object.create(null);
}
function E(t) {
  t.forEach(Q);
}
function ee(t) {
  return typeof t == "function";
}
function S(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function te(t) {
  return Object.keys(t).length === 0;
}
function p(t, e) {
  t.appendChild(e);
}
function w(t, e, n) {
  t.insertBefore(e, n || null);
}
function m(t) {
  t.parentNode.removeChild(t);
}
function O(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function g(t) {
  return document.createElement(t);
}
function x(t) {
  return document.createTextNode(t);
}
function _() {
  return x(" ");
}
function ne() {
  return x("");
}
function y(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function le(t) {
  return Array.from(t.childNodes);
}
function J(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
let L;
function j(t) {
  L = t;
}
const v = [], K = [], T = [], H = [], se = Promise.resolve();
let B = !1;
function oe() {
  B || (B = !0, se.then(X));
}
function D(t) {
  T.push(t);
}
const N = /* @__PURE__ */ new Set();
let F = 0;
function X() {
  const t = L;
  do {
    for (; F < v.length; ) {
      const e = v[F];
      F++, j(e), ie(e.$$);
    }
    for (j(null), v.length = 0, F = 0; K.length; )
      K.pop()();
    for (let e = 0; e < T.length; e += 1) {
      const n = T[e];
      N.has(n) || (N.add(n), n());
    }
    T.length = 0;
  } while (v.length);
  for (; H.length; )
    H.pop()();
  B = !1, N.clear(), j(t);
}
function ie(t) {
  if (t.fragment !== null) {
    t.update(), E(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(D);
  }
}
const z = /* @__PURE__ */ new Set();
let re;
function b(t, e) {
  t && t.i && (z.delete(t), t.i(e));
}
function P(t, e, n, l) {
  if (t && t.o) {
    if (z.has(t))
      return;
    z.add(t), re.c.push(() => {
      z.delete(t), l && (n && t.d(1), l());
    }), t.o(e);
  } else
    l && l();
}
function R(t) {
  t && t.c();
}
function $(t, e, n, l) {
  const { fragment: o, on_mount: u, on_destroy: i, after_update: a } = t.$$;
  o && o.m(e, n), l || D(() => {
    const s = u.map(Q).filter(ee);
    i ? i.push(...s) : E(s), t.$$.on_mount = [];
  }), a.forEach(D);
}
function k(t, e) {
  const n = t.$$;
  n.fragment !== null && (E(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ae(t, e) {
  t.$$.dirty[0] === -1 && (v.push(t), oe(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function M(t, e, n, l, o, u, i, a = [-1]) {
  const s = L;
  j(t);
  const r = t.$$ = {
    fragment: null,
    ctx: null,
    props: u,
    update: h,
    not_equal: o,
    bound: I(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    callbacks: I(),
    dirty: a,
    skip_bound: !1,
    root: e.target || s.$$.root
  };
  i && i(r.root);
  let d = !1;
  if (r.ctx = n ? n(t, e.props || {}, (c, f, ...C) => {
    const W = C.length ? C[0] : f;
    return r.ctx && o(r.ctx[c], r.ctx[c] = W) && (!r.skip_bound && r.bound[c] && r.bound[c](W), d && ae(t, c)), f;
  }) : [], r.update(), d = !0, E(r.before_update), r.fragment = l ? l(r.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = le(e.target);
      r.fragment && r.fragment.l(c), c.forEach(m);
    } else
      r.fragment && r.fragment.c();
    e.intro && b(t.$$.fragment), $(t, e.target, e.anchor, e.customElement), X();
  }
  j(s);
}
class A {
  $destroy() {
    k(this, 1), this.$destroy = h;
  }
  $on(e, n) {
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(n), () => {
      const o = l.indexOf(n);
      o !== -1 && l.splice(o, 1);
    };
  }
  $set(e) {
    this.$$set && !te(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function ue(t) {
  let e, n;
  return {
    c() {
      e = _(), n = g("div"), n.innerHTML = '<h1 class="name">Jed Munson</h1>', document.title = "Jed Munson", y(n, "class", "header svelte-nsas8o");
    },
    m(l, o) {
      w(l, e, o), w(l, n, o);
    },
    p: h,
    i: h,
    o: h,
    d(l) {
      l && m(e), l && m(n);
    }
  };
}
class ce extends A {
  constructor(e) {
    super(), M(this, e, null, ue, S, {});
  }
}
function de(t) {
  let e;
  return {
    c() {
      e = g("div"), e.innerHTML = '<div class="contact svelte-1b0djy3"><a href="mailto:munsonjed@gmail.com" class="svelte-1b0djy3">munsonjed[at]gmail.com</a></div>', y(e, "class", "footer svelte-1b0djy3");
    },
    m(n, l) {
      w(n, e, l);
    },
    p: h,
    i: h,
    o: h,
    d(n) {
      n && m(e);
    }
  };
}
class fe extends A {
  constructor(e) {
    super(), M(this, e, null, de, S, {});
  }
}
function U(t, e, n) {
  const l = t.slice();
  return l[2] = e[n], l;
}
function G(t, e, n) {
  const l = t.slice();
  return l[5] = e[n], l;
}
function V(t, e, n) {
  const l = t.slice();
  return l[8] = e[n], l;
}
function q(t) {
  let e, n, l = t[8].title + "", o, u;
  return {
    c() {
      e = g("li"), n = g("a"), o = x(l), y(n, "href", u = t[8].url), y(n, "target", "_blank");
    },
    m(i, a) {
      w(i, e, a), p(e, n), p(n, o);
    },
    p(i, a) {
      a & 1 && l !== (l = i[8].title + "") && J(o, l), a & 1 && u !== (u = i[8].url) && y(n, "href", u);
    },
    d(i) {
      i && m(e);
    }
  };
}
function Y(t) {
  let e, n = t[5] + "", l, o, u, i = t[2].years[t[5]], a = [];
  for (let s = 0; s < i.length; s += 1)
    a[s] = q(V(t, i, s));
  return {
    c() {
      e = g("h4"), l = x(n), o = _(), u = g("ul");
      for (let s = 0; s < a.length; s += 1)
        a[s].c();
    },
    m(s, r) {
      w(s, e, r), p(e, l), w(s, o, r), w(s, u, r);
      for (let d = 0; d < a.length; d += 1)
        a[d].m(u, null);
    },
    p(s, r) {
      if (r & 1 && n !== (n = s[5] + "") && J(l, n), r & 1) {
        i = s[2].years[s[5]];
        let d;
        for (d = 0; d < i.length; d += 1) {
          const c = V(s, i, d);
          a[d] ? a[d].p(c, r) : (a[d] = q(c), a[d].c(), a[d].m(u, null));
        }
        for (; d < a.length; d += 1)
          a[d].d(1);
        a.length = i.length;
      }
    },
    d(s) {
      s && m(e), s && m(o), s && m(u), O(a, s);
    }
  };
}
function Z(t) {
  let e, n, l = t[2].title + "", o, u, i, a = Object.keys(t[2].years).sort(t[1]), s = [];
  for (let r = 0; r < a.length; r += 1)
    s[r] = Y(G(t, a, r));
  return {
    c() {
      e = g("section"), n = g("h3"), o = x(l), u = _();
      for (let r = 0; r < s.length; r += 1)
        s[r].c();
      i = _(), y(n, "class", "section-title"), y(e, "class", "svelte-cthkyg");
    },
    m(r, d) {
      w(r, e, d), p(e, n), p(n, o), p(e, u);
      for (let c = 0; c < s.length; c += 1)
        s[c].m(e, null);
      p(e, i);
    },
    p(r, d) {
      if (d & 1 && l !== (l = r[2].title + "") && J(o, l), d & 1) {
        a = Object.keys(r[2].years).sort(r[1]);
        let c;
        for (c = 0; c < a.length; c += 1) {
          const f = G(r, a, c);
          s[c] ? s[c].p(f, d) : (s[c] = Y(f), s[c].c(), s[c].m(e, i));
        }
        for (; c < s.length; c += 1)
          s[c].d(1);
        s.length = a.length;
      }
    },
    d(r) {
      r && m(e), O(s, r);
    }
  };
}
function he(t) {
  let e, n = t[0], l = [];
  for (let o = 0; o < n.length; o += 1)
    l[o] = Z(U(t, n, o));
  return {
    c() {
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      e = ne();
    },
    m(o, u) {
      for (let i = 0; i < l.length; i += 1)
        l[i].m(o, u);
      w(o, e, u);
    },
    p(o, [u]) {
      if (u & 1) {
        n = o[0];
        let i;
        for (i = 0; i < n.length; i += 1) {
          const a = U(o, n, i);
          l[i] ? l[i].p(a, u) : (l[i] = Z(a), l[i].c(), l[i].m(e.parentNode, e));
        }
        for (; i < l.length; i += 1)
          l[i].d(1);
        l.length = n.length;
      }
    },
    i: h,
    o: h,
    d(o) {
      O(l, o), o && m(e);
    }
  };
}
function pe(t, e, n) {
  let l = [
    {
      title: "Collection",
      publications: [
        {
          title: "Commentary on the Birds [Rescue Press, forthcoming]",
          url: "https://rescuepress.co/news/open-reading-period-selections",
          date: "2023"
        }
      ]
    },
    {
      title: "Chapbooks",
      publications: [
        {
          title: "Newsflash Under Fire, Over the Shoulder [Ugly Duckling Presse]",
          url: "https://uglyducklingpresse.org/publications/newsflash-under-fire-over-the-shoulder/",
          date: "2021"
        },
        {
          title: "Silts [above/ground press]",
          url: "https://abovegroundpress.blogspot.com/2022/06/new-from-aboveground-press-silts-by-jed.html",
          date: "2022"
        },
        {
          title: "Minesweeper [New Michigan Press / DIAGRAM, forthcoming]",
          url: "http://thediagram.com/contest.html",
          date: "2023"
        }
      ]
    },
    {
      title: "Poems",
      publications: [
        {
          title: "Chinese Water Torture Cell & Others [Vestiges]",
          url: "https://blacksunlit.com/vestiges-06-aporia/",
          date: "2022"
        },
        {
          title: "Continuously Variable Transmission & One Such Parochial View [Dream Pop Journal]",
          url: "https://www.dreampoppress.net/jed-munson/",
          date: "2022"
        },
        {
          title: "Mouse on the Keys [periodicities: a journal of poetry and poetics]",
          url: "https://periodicityjournal.blogspot.com/2022/09/jed-munson-mouse-on-keys.html",
          date: "2022"
        },
        {
          title: "Symposium in the Trees [Oxford Review of Books]",
          url: "https://www.the-orb.org/post/symposium-in-the-trees",
          date: "2022"
        },
        {
          title: "Two sonnets [Image Journal, forthcoming]",
          url: "",
          date: "2022"
        },
        {
          title: "Nine Silts [Mitos Magaz\xEDn]",
          url: "https://mitosmag.squarespace.com/aguas/nine-silts",
          date: "2022"
        },
        {
          title: "Five Silts [Annulet: A Journal of Poetics]",
          url: "https://annuletpoeticsjournal.com/Jed-Munson-from-Silts",
          date: "2022"
        },
        {
          title: "G-D & Semblance of Rigor [The Quarterless Review]",
          url: "https://thequarterlessreview.com/Jed-Munson",
          date: "2021"
        },
        {
          title: "Six Silts [A)GLIMPSE)OF)]",
          url: "https://aglimpseof.net/2021/10/26/the-symbiosis-issue-jed-munson/",
          date: "2021"
        },
        {
          title: "Leveler [Zone 3]",
          url: "https://www.zone3press.com/issues/show/fall-2021",
          date: "2022"
        },
        {
          title: "Minesweeper & others [Conjunctions]",
          url: "http://www.conjunctions.com/online/article/jed-munson-10-20-2021",
          date: "2021"
        },
        {
          title: "Metallurgy [P-QUEUE]",
          url: "https://pqueue.wordpress.com/",
          date: "2021"
        },
        {
          title: "The Bird Confluence / Commentary on the Birds [Entropy]",
          url: "https://entropymag.org/the-birds-a-poem-28/",
          date: "2021"
        },
        {
          title: "Ambient Noise in Sharp Relief [Diode Poetry Journal]",
          url: "http://diodepoetry.com/munson_jed/",
          date: "2021"
        },
        {
          title: "Newsflash Under Fire, Over the Shoulder [Enclave]",
          url: "http://enclave.entropymag.org/finalpoem-from-jed-munson/",
          date: "2021"
        }
      ]
    },
    {
      title: "Essays",
      publications: [
        {
          title: "On Silts [periodicities: a journal of poetry and poetics]",
          url: "https://periodicityjournal.blogspot.com/2022/07/jed-munson-on-silts.html",
          date: "2022"
        },
        {
          title: "A Personal Statement to My Understanding [Afternoon visitor]",
          url: "https://www.afternoonvisitor.com/jed-munson",
          date: "2022"
        },
        {
          title: "You Were There [Bat City Review]",
          url: "http://www.batcityreview.org/issue-18",
          date: "2022"
        },
        {
          title: "Two Views on Encounter and Impasse [Full Stop]",
          url: "https://www.full-stop.net/2022/01/25/features/essays/jed-munson/two-views-on-encounter-and-impasse/",
          date: "2022"
        },
        {
          title: "Love in the Korean Demilitarized Zone [Full Stop]",
          url: "https://www.full-stop.net/2021/07/16/features/essays/jed-munson/love-in-the-korean-demilitarized-zone/",
          date: "2021"
        }
      ]
    },
    {
      title: "Reviews",
      publications: [
        {
          title: "Plans for Sentences by Renee Gladman [Brooklyn Review]",
          url: "https://www.bkreview.org/poetry/a-review-of-renee-gladmans-plans-for-sentences/",
          date: "2022"
        },
        {
          title: "Nuclear Family by Joseph Han [Hyphen]",
          url: "https://hyphenmagazine.com/blog/2022/07/zones-explosion",
          date: "2022"
        },
        {
          title: "Tastes Like War by Grace M. Cho [Full Stop]",
          url: "https://www.full-stop.net/2021/05/28/reviews/jed-munson/tastes-like-war-grace-m-cho/",
          date: "2021"
        },
        {
          title: "Some Girls Walk into the Country They Are From by Sawako Nakayasu [Full Stop]",
          url: "https://www.full-stop.net/2021/03/31/reviews/jed-munson/some-girls-walk-into-the-country-they-are-from-sawako-nakayasu/",
          date: "2021"
        },
        {
          title: "A Bed for the King\u2019s Daughter by Shahla Ujayli, translated by Sawad Hussain [Chicago Review of Books]",
          url: "https://chireviewofbooks.com/2021/01/21/a-bed-for-the-kings-daughter/",
          date: "2021"
        },
        {
          title: "Sansei and Sensibility by Karen Tei Yamashita [Full Stop]",
          url: "https://www.full-stop.net/2020/10/27/reviews/jed-munson/sansei-and-sensibility-karen-tei-yamashita/",
          date: "2020"
        },
        {
          title: "RENDANG by Will Harris [Entropy]",
          url: "https://entropymag.org/rendang-will-harris/",
          date: "2020"
        },
        {
          title: "DMZ Colony by Don Mee Choi [Chicago Review of Books]",
          url: "https://chireviewofbooks.com/2020/05/04/dmz-colony-don-mee-choi/",
          date: "2020"
        }
      ]
    },
    {
      title: "Interviews",
      publications: [
        {
          title: "Louise Akers on Alien Year [Full Stop]",
          url: "https://www.full-stop.net/2022/01/27/interviews/jed-munson/louise-akers/",
          date: "2022"
        },
        {
          title: "In Conversation with Lewis Freedman [Full Stop, forthcoming]",
          url: "",
          date: "2022"
        },
        {
          title: "David Karashima on Who We\u2019re Reading When We\u2019re Reading Murakami [Full Stop]",
          url: "https://www.full-stop.net/2020/09/02/interviews/jed-munson/david-karashima/",
          date: "2020"
        },
        {
          title: "Srikanth Reddy on Underworld Lit [Full Stop]",
          url: "https://www.full-stop.net/2020/07/29/interviews/jed-munson/srikanth-reddy/",
          date: "2020"
        },
        {
          title: "Percival Everett on Telephone [Full Stop]",
          url: "https://www.full-stop.net/2020/05/11/interviews/jed-munson/percival-everett/",
          date: "2020"
        }
      ]
    }
  ];
  return l = l.map((u) => {
    const i = u.publications.reduce(
      (a, s) => (a[s.date] || (a[s.date] = []), a[s.date].push(s), a),
      {}
    );
    return { ...u, years: i };
  }), [l, (u, i) => Number(i) - Number(u)];
}
class me extends A {
  constructor(e) {
    super(), M(this, e, pe, he, S, {});
  }
}
function ge(t) {
  let e;
  return {
    c() {
      e = g("div"), e.innerHTML = `<a href="https://abovegroundpress.blogspot.com/" target="_blank" class="featured-image silts svelte-9uzgyu"></a> 

	<div class="caption svelte-9uzgyu">Design by Kyuwon Kim</div> 

	
	<a href="https://uglyducklingpresse.org/publications/newsflash-under-fire-over-the-shoulder/" target="_blank" class="featured-image svelte-9uzgyu"></a> 
	<div class="caption svelte-9uzgyu">Design by
		<a href="" target="_blank">Ainee Jeong</a></div> 

	<div class="bio-image svelte-9uzgyu" alt="Jed Munson Profile"></div> 
	<div class="caption svelte-9uzgyu">Photo by
		<a href="" target="_blank">Keumji Son</a></div> 
	<div class="bio-text svelte-9uzgyu">I&#39;m a Korean American writer and editor from Wisconsin. I graduated from Wesleyan in 2019 and
		did a Fulbright in South Korea in 2021. Right now I&#39;m a fellow at the Library of America and a
		student at Brooklyn College, where I help with <a href="https://www.bkreview.org/category/poetry/" target="_blank" class="svelte-9uzgyu">The Brooklyn Review.</a>

		Always open to collaborations!</div>`, y(e, "class", "bio svelte-9uzgyu");
    },
    m(n, l) {
      w(n, e, l);
    },
    p: h,
    i: h,
    o: h,
    d(n) {
      n && m(e);
    }
  };
}
class we extends A {
  constructor(e) {
    super(), M(this, e, null, ge, S, {});
  }
}
function ye(t) {
  let e, n, l, o, u, i, a, s, r, d, c;
  return n = new ce({}), u = new me({}), s = new we({}), d = new fe({}), {
    c() {
      e = g("div"), R(n.$$.fragment), l = _(), o = g("div"), R(u.$$.fragment), i = _(), a = g("div"), R(s.$$.fragment), r = _(), R(d.$$.fragment), y(o, "class", "primary"), y(a, "class", "secondary"), y(e, "class", "app");
    },
    m(f, C) {
      w(f, e, C), $(n, e, null), p(e, l), p(e, o), $(u, o, null), p(e, i), p(e, a), $(s, a, null), p(e, r), $(d, e, null), c = !0;
    },
    p: h,
    i(f) {
      c || (b(n.$$.fragment, f), b(u.$$.fragment, f), b(s.$$.fragment, f), b(d.$$.fragment, f), c = !0);
    },
    o(f) {
      P(n.$$.fragment, f), P(u.$$.fragment, f), P(s.$$.fragment, f), P(d.$$.fragment, f), c = !1;
    },
    d(f) {
      f && m(e), k(n), k(u), k(s), k(d);
    }
  };
}
class _e extends A {
  constructor(e) {
    super(), M(this, e, null, ye, S, {});
  }
}
export {
  _e as default
};
