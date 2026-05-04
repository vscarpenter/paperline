// src/icons.jsx
import { jsx, jsxs } from "react/jsx-runtime";
var Icon = ({ children, size = 18, strokeWidth = 1.6, style, label, ...rest }) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: label ? "img" : void 0,
    "aria-label": label || void 0,
    "aria-hidden": label ? void 0 : true,
    focusable: "false",
    style: { display: "inline-block", flexShrink: 0, ...style },
    ...rest,
    children
  }
);
var I = {
  Search: (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
    /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ jsx("path", { d: "m20 20-3.5-3.5" })
  ] }),
  Filter: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M3 5h18M6 12h12M10 19h4" }) }),
  Plus: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M12 5v14M5 12h14" }) }),
  ChevLeft: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "m15 6-6 6 6 6" }) }),
  ChevRight: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "m9 6 6 6-6 6" }) }),
  ChevDown: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "m6 9 6 6 6-6" }) }),
  ChevUp: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "m6 15 6-6 6 6" }) }),
  More: (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
    /* @__PURE__ */ jsx("circle", { cx: "5", cy: "12", r: "1.2" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "1.2" }),
    /* @__PURE__ */ jsx("circle", { cx: "19", cy: "12", r: "1.2" })
  ] }),
  Calendar: (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
    /* @__PURE__ */ jsx("rect", { x: "3", y: "5", width: "18", height: "16", rx: "2" }),
    /* @__PURE__ */ jsx("path", { d: "M3 10h18M8 3v4M16 3v4" })
  ] }),
  Tag: (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
    /* @__PURE__ */ jsx("path", { d: "M20.6 13.4 13 21a2 2 0 0 1-2.8 0L3 13.8V4h9.8l7.8 7.8a2 2 0 0 1 0 2.8z" }),
    /* @__PURE__ */ jsx("circle", { cx: "8", cy: "9", r: "1.4" })
  ] }),
  Flag: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M4 22V4M4 4h13l-2 4 2 4H4" }) }),
  Check: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "m4 12 5 5L20 6" }) }),
  X: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M18 6 6 18M6 6l12 12" }) }),
  Edit: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M4 20h4l11-11-4-4L4 16v4z" }) }),
  Share: (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
    /* @__PURE__ */ jsx("circle", { cx: "6", cy: "12", r: "2.6" }),
    /* @__PURE__ */ jsx("circle", { cx: "18", cy: "6", r: "2.6" }),
    /* @__PURE__ */ jsx("circle", { cx: "18", cy: "18", r: "2.6" }),
    /* @__PURE__ */ jsx("path", { d: "m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6" })
  ] }),
  Move: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M5 9 2 12l3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20" }) }),
  Archive: (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
    /* @__PURE__ */ jsx("rect", { x: "3", y: "4", width: "18", height: "4", rx: "1" }),
    /* @__PURE__ */ jsx("path", { d: "M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8M10 13h4" })
  ] }),
  Trash: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M4 7h16M9 7V4h6v3M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13M10 11v6M14 11v6" }) }),
  Inbox: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M3 13h5l1 3h6l1-3h5M5 4h14l2 9v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6z" }) }),
  Layers: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "m12 3 9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 18l9 5 9-5" }) }),
  Briefcase: (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
    /* @__PURE__ */ jsx("rect", { x: "3", y: "7", width: "18", height: "14", rx: "2" }),
    /* @__PURE__ */ jsx("path", { d: "M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" })
  ] }),
  Rocket: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M14 4c4 0 6 2 6 6-2 0-4 1-6 3l-3-3c2-2 3-4 3-6zM5 19c0-3 2-5 5-5l-3-3c-3 0-5 2-5 5l3 3zM14 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" }) }),
  Megaphone: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M3 11v2a2 2 0 0 0 2 2h2l8 5V4l-8 5H5a2 2 0 0 0-2 2zM18 8a4 4 0 0 1 0 8" }) }),
  Home: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1v-9z" }) }),
  Sprout: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M12 21v-7M12 14c0-4 3-7 7-7-1 4-3 7-7 7zM12 14C12 11 9 8 5 8c1 4 3 6 7 6z" }) }),
  Book: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M4 4v15a2 2 0 0 0 2 2h14V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zM4 17h14" }) }),
  Sparkles: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" }) }),
  Settings: (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ jsx("path", { d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" })
  ] }),
  Help: (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ jsx("path", { d: "M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4M12 17.5h.01" })
  ] }),
  Info: (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ jsx("path", { d: "M12 8h.01M11 12h1v5h1" })
  ] }),
  Shield: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z" }) }),
  Download: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M12 4v12M7 11l5 5 5-5M5 21h14" }) }),
  Upload: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M12 20V8M7 13l5-5 5 5M5 21h14" }) }),
  Sun: (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ jsx("path", { d: "M12 3v2M12 19v2M3 12h2M19 12h2M5.5 5.5l1.5 1.5M17 17l1.5 1.5M5.5 18.5 7 17M17 7l1.5-1.5" })
  ] }),
  Moon: (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" }) }),
  Clock: (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ jsx("path", { d: "M12 7v5l3 2" })
  ] }),
  Alert: (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
    /* @__PURE__ */ jsx("path", { d: "m12 3 10 18H2L12 3z" }),
    /* @__PURE__ */ jsx("path", { d: "M12 10v4M12 17.5h.01" })
  ] }),
  GripDots: (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
    /* @__PURE__ */ jsx("circle", { cx: "9", cy: "6", r: "1" }),
    /* @__PURE__ */ jsx("circle", { cx: "15", cy: "6", r: "1" }),
    /* @__PURE__ */ jsx("circle", { cx: "9", cy: "12", r: "1" }),
    /* @__PURE__ */ jsx("circle", { cx: "15", cy: "12", r: "1" }),
    /* @__PURE__ */ jsx("circle", { cx: "9", cy: "18", r: "1" }),
    /* @__PURE__ */ jsx("circle", { cx: "15", cy: "18", r: "1" })
  ] }),
  Logo: (p) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 28 28", width: p?.size ?? 24, height: p?.size ?? 24, ...p, children: [
    /* @__PURE__ */ jsx("rect", { x: "0.5", y: "0.5", width: "27", height: "27", rx: "7", fill: "url(#cg)" }),
    /* @__PURE__ */ jsx("rect", { x: "0.5", y: "0.5", width: "27", height: "27", rx: "7", fill: "none", stroke: "rgba(0,0,0,0.18)" }),
    /* @__PURE__ */ jsx("path", { d: "M7 9.5h6.5M7 14h10M7 18.5h7.5", stroke: "#FFFEFB", strokeWidth: "1.8", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "cg", x1: "0", y1: "0", x2: "28", y2: "28", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "#8E62AB" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#553A6C" })
    ] }) })
  ] })
};
if (typeof window !== "undefined") {
  window.I = I;
}
export {
  I,
  Icon
};
