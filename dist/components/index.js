import { createRequire } from 'module';

createRequire(import.meta.url);
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, o2, r2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/FoldNav.tsx
var FoldNav_default = (() => {
  const FoldNav = ({ fileData }) => {
    const slug = fileData.slug ?? "";
    const depth = slug.split("/").length - 1;
    const prefix = depth > 0 ? "../".repeat(depth) : "./";
    return /* @__PURE__ */ u2("div", { class: "fold-nav-wrap", children: [
      /* @__PURE__ */ u2("input", { type: "checkbox", id: "fold-nav-toggle", class: "fold-nav-toggle" }),
      /* @__PURE__ */ u2("label", { for: "fold-nav-toggle", class: "fold-nav-button", "aria-label": "Menu", children: /* @__PURE__ */ u2("span", { class: "fold-nav-z", children: "z" }) }),
      /* @__PURE__ */ u2("nav", { class: "fold-nav-panel", children: [
        /* @__PURE__ */ u2("img", { src: `${prefix}static/fold-nav-banana.png`, class: "fold-nav-banana", alt: "" }),
        /* @__PURE__ */ u2("a", { href: prefix, class: "fold-nav-link fold-nav-link-1", children: "Home" }),
        /* @__PURE__ */ u2("a", { href: `${prefix}sources`, class: "fold-nav-link fold-nav-link-2", children: "Sources" }),
        /* @__PURE__ */ u2("a", { href: `${prefix}ideas`, class: "fold-nav-link fold-nav-link-3", children: "Ideas" }),
        /* @__PURE__ */ u2("a", { href: `${prefix}publications`, class: "fold-nav-link fold-nav-link-4", children: "Publications" }),
        /* @__PURE__ */ u2("a", { href: `${prefix}bibliography`, class: "fold-nav-link fold-nav-link-5", children: "Bibliography" }),
        /* @__PURE__ */ u2("a", { href: `${prefix}map`, class: "fold-nav-link fold-nav-link-6", children: "Map" }),
        /* @__PURE__ */ u2("a", { href: `${prefix}about`, class: "fold-nav-link fold-nav-link-7", children: "About" })
      ] })
    ] });
  };
  return FoldNav;
});

export { FoldNav_default as FoldNav };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map