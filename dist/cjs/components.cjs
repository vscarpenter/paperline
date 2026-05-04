var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components.jsx
var components_exports = {};
__export(components_exports, {
  PLAlert: () => PLAlert,
  PLAvatar: () => PLAvatar,
  PLAvatarGroup: () => PLAvatarGroup,
  PLBadge: () => PLBadge,
  PLBreadcrumbs: () => PLBreadcrumbs,
  PLButton: () => PLButton,
  PLCard: () => PLCard,
  PLCheckbox: () => PLCheckbox,
  PLCluster: () => PLCluster,
  PLDivider: () => PLDivider,
  PLEmptyState: () => PLEmptyState,
  PLField: () => PLField,
  PLGrid: () => PLGrid,
  PLInput: () => PLInput,
  PLMenu: () => PLMenu,
  PLModal: () => PLModal,
  PLPagination: () => PLPagination,
  PLProgress: () => PLProgress,
  PLRadio: () => PLRadio,
  PLSelect: () => PLSelect,
  PLSkeleton: () => PLSkeleton,
  PLSpinner: () => PLSpinner,
  PLStack: () => PLStack,
  PLStat: () => PLStat,
  PLTable: () => PLTable,
  PLTabs: () => PLTabs,
  PLTag: () => PLTag,
  PLTextarea: () => PLTextarea,
  PLToast: () => PLToast,
  PLToggle: () => PLToggle,
  PLTooltip: () => PLTooltip
});
module.exports = __toCommonJS(components_exports);
var import_react = __toESM(require("react"), 1);

// src/icons.jsx
var import_jsx_runtime = require("react/jsx-runtime");
var Icon = ({ children, size = 18, strokeWidth = 1.6, style, label, ...rest }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  Search: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...p, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m20 20-3.5-3.5" })
  ] }),
  Filter: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 5h18M6 12h12M10 19h4" }) }),
  Plus: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 5v14M5 12h14" }) }),
  ChevLeft: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m15 6-6 6 6 6" }) }),
  ChevRight: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m9 6 6 6-6 6" }) }),
  ChevDown: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m6 9 6 6 6-6" }) }),
  ChevUp: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m6 15 6-6 6 6" }) }),
  More: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...p, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "5", cy: "12", r: "1.2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "1.2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "19", cy: "12", r: "1.2" })
  ] }),
  Calendar: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...p, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "3", y: "5", width: "18", height: "16", rx: "2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 10h18M8 3v4M16 3v4" })
  ] }),
  Tag: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...p, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.6 13.4 13 21a2 2 0 0 1-2.8 0L3 13.8V4h9.8l7.8 7.8a2 2 0 0 1 0 2.8z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "8", cy: "9", r: "1.4" })
  ] }),
  Flag: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 22V4M4 4h13l-2 4 2 4H4" }) }),
  Check: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m4 12 5 5L20 6" }) }),
  X: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 6 6 18M6 6l12 12" }) }),
  Edit: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 20h4l11-11-4-4L4 16v4z" }) }),
  Share: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...p, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "6", cy: "12", r: "2.6" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "18", cy: "6", r: "2.6" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "18", cy: "18", r: "2.6" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6" })
  ] }),
  Move: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 9 2 12l3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20" }) }),
  Archive: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...p, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "3", y: "4", width: "18", height: "4", rx: "1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8M10 13h4" })
  ] }),
  Trash: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 7h16M9 7V4h6v3M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13M10 11v6M14 11v6" }) }),
  Inbox: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 13h5l1 3h6l1-3h5M5 4h14l2 9v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6z" }) }),
  Layers: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 3 9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 18l9 5 9-5" }) }),
  Briefcase: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...p, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "3", y: "7", width: "18", height: "14", rx: "2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" })
  ] }),
  Rocket: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 4c4 0 6 2 6 6-2 0-4 1-6 3l-3-3c2-2 3-4 3-6zM5 19c0-3 2-5 5-5l-3-3c-3 0-5 2-5 5l3 3zM14 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" }) }),
  Megaphone: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 11v2a2 2 0 0 0 2 2h2l8 5V4l-8 5H5a2 2 0 0 0-2 2zM18 8a4 4 0 0 1 0 8" }) }),
  Home: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1v-9z" }) }),
  Sprout: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21v-7M12 14c0-4 3-7 7-7-1 4-3 7-7 7zM12 14C12 11 9 8 5 8c1 4 3 6 7 6z" }) }),
  Book: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 4v15a2 2 0 0 0 2 2h14V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zM4 17h14" }) }),
  Sparkles: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" }) }),
  Settings: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...p, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" })
  ] }),
  Help: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...p, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4M12 17.5h.01" })
  ] }),
  Info: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...p, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 8h.01M11 12h1v5h1" })
  ] }),
  Shield: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z" }) }),
  Download: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 4v12M7 11l5 5 5-5M5 21h14" }) }),
  Upload: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 20V8M7 13l5-5 5 5M5 21h14" }) }),
  Sun: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...p, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3v2M12 19v2M3 12h2M19 12h2M5.5 5.5l1.5 1.5M17 17l1.5 1.5M5.5 18.5 7 17M17 7l1.5-1.5" })
  ] }),
  Moon: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...p, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" }) }),
  Clock: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...p, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 7v5l3 2" })
  ] }),
  Alert: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...p, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 3 10 18H2L12 3z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 10v4M12 17.5h.01" })
  ] }),
  GripDots: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...p, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "9", cy: "6", r: "1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "15", cy: "6", r: "1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "9", cy: "12", r: "1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "15", cy: "12", r: "1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "9", cy: "18", r: "1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "15", cy: "18", r: "1" })
  ] }),
  Logo: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 28 28", width: p?.size ?? 24, height: p?.size ?? 24, ...p, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0.5", y: "0.5", width: "27", height: "27", rx: "7", fill: "url(#cg)" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "0.5", y: "0.5", width: "27", height: "27", rx: "7", fill: "none", stroke: "rgba(0,0,0,0.18)" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 9.5h6.5M7 14h10M7 18.5h7.5", stroke: "#FFFEFB", strokeWidth: "1.8", strokeLinecap: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", { id: "cg", x1: "0", y1: "0", x2: "28", y2: "28", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "0", stopColor: "#8E62AB" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "1", stopColor: "#553A6C" })
    ] }) })
  ] })
};
if (typeof window !== "undefined") {
  window.I = I;
}

// src/components.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
var PLButton = ({
  kind = "primary",
  size = "md",
  icon: IconComp,
  iconRight,
  children,
  disabled,
  fullWidth,
  type = "button",
  className = "",
  "aria-label": ariaLabel,
  ...rest
}) => {
  const sizes = {
    sm: { p: "5px 10px", fs: 12, ic: 13, gap: 5, h: 28 },
    md: { p: "8px 14px", fs: 12.5, ic: 14, gap: 6, h: 34 },
    lg: { p: "10px 18px", fs: 13.5, ic: 15, gap: 7, h: 40 }
  };
  const kinds = {
    primary: { bg: "var(--pl-accent-500)", color: "var(--pl-accent-ink)", border: "var(--pl-accent-600)", shadow: "var(--pl-shadow-sm)" },
    secondary: { bg: "var(--pl-paper-card)", color: "var(--pl-ink-2)", border: "var(--pl-hairline-strong)", shadow: "var(--pl-shadow-xs)" },
    ghost: { bg: "transparent", color: "var(--pl-ink-2)", border: "transparent", shadow: "none" },
    danger: { bg: "var(--pl-paper-card)", color: "var(--pl-danger-500)", border: "var(--pl-hairline-strong)", shadow: "var(--pl-shadow-xs)" },
    accentSoft: { bg: "var(--pl-accent-50)", color: "var(--pl-accent-700)", border: "var(--pl-accent-100)", shadow: "none" }
  };
  const s = sizes[size];
  const k = kinds[kind];
  const iconOnly = !children && (IconComp || iconRight);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "button",
    {
      type,
      disabled,
      "aria-label": ariaLabel || (iconOnly ? "button" : void 0),
      className: `pl-btn pl-btn--${kind} ${className}`.trim(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        padding: s.p,
        height: s.h,
        width: fullWidth ? "100%" : "auto",
        background: k.bg,
        color: k.color,
        border: `1px solid ${k.border}`,
        borderRadius: 8,
        fontSize: s.fs,
        fontWeight: 600,
        fontFamily: "var(--pl-font-sans)",
        letterSpacing: 0,
        cursor: disabled ? "not-allowed" : "pointer",
        boxShadow: k.shadow,
        opacity: disabled ? 0.5 : 1,
        transition: "background var(--pl-dur-1) var(--pl-ease), box-shadow var(--pl-dur-1)"
      },
      ...rest,
      children: [
        IconComp && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconComp, { size: s.ic }),
        children,
        iconRight && import_react.default.createElement(iconRight, { size: s.ic })
      ]
    }
  );
};
var PLInput = ({ icon: IconComp, suffix, placeholder, value, onChange, type = "text", error, id, disabled, ...rest }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: "pl-field", style: {
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "9px 12px",
  background: disabled ? "var(--pl-field-disabled-bg)" : "var(--pl-field-bg)",
  border: `1px solid ${error ? "var(--pl-danger-500)" : "var(--pl-field-border)"}`,
  borderRadius: 8,
  boxShadow: "var(--pl-shadow-xs)",
  transition: "border-color var(--pl-dur-1), box-shadow var(--pl-dur-1)",
  opacity: disabled ? 0.6 : 1
}, children: [
  IconComp && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconComp, { size: 15, style: { color: "var(--pl-ink-4)", flexShrink: 0 } }),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "input",
    {
      id,
      type,
      value,
      onChange,
      placeholder,
      disabled,
      "aria-invalid": error ? true : void 0,
      style: {
        flex: 1,
        border: "none",
        outline: "none",
        background: "transparent",
        fontSize: 13,
        color: "var(--pl-field-text)",
        fontFamily: "var(--pl-font-sans)",
        minWidth: 0
      },
      ...rest
    }
  ),
  suffix
] });
var PLTextarea = ({ placeholder, value, onChange, rows = 3, error, id, disabled, ...rest }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "textarea",
  {
    id,
    rows,
    value,
    onChange,
    placeholder,
    disabled,
    "aria-invalid": error ? true : void 0,
    className: "pl-field",
    style: {
      width: "100%",
      padding: "10px 12px",
      background: disabled ? "var(--pl-field-disabled-bg)" : "var(--pl-field-bg)",
      border: `1px solid ${error ? "var(--pl-danger-500)" : "var(--pl-field-border)"}`,
      borderRadius: 8,
      boxShadow: "var(--pl-shadow-xs)",
      fontSize: 13,
      color: "var(--pl-field-text)",
      fontFamily: "var(--pl-font-sans)",
      lineHeight: 1.55,
      resize: "vertical",
      outline: "none",
      opacity: disabled ? 0.6 : 1
    },
    ...rest
  }
);
var PLSelect = ({ value, onChange, options = [], placeholder, id, disabled, error, ...rest }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "pl-field", style: {
  display: "flex",
  alignItems: "center",
  gap: 6,
  padding: "0 10px 0 12px",
  background: disabled ? "var(--pl-field-disabled-bg)" : "var(--pl-field-bg)",
  border: `1px solid ${error ? "var(--pl-danger-500)" : "var(--pl-field-border)"}`,
  borderRadius: 8,
  boxShadow: "var(--pl-shadow-xs)",
  height: 34,
  transition: "border-color var(--pl-dur-1)",
  opacity: disabled ? 0.6 : 1
}, children: [
  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "select",
    {
      id,
      value,
      onChange,
      disabled,
      "aria-invalid": error ? true : void 0,
      style: {
        flex: 1,
        border: "none",
        outline: "none",
        background: "transparent",
        fontSize: 13,
        color: "var(--pl-field-text)",
        fontFamily: "var(--pl-font-sans)",
        appearance: "none",
        paddingRight: 4,
        cursor: disabled ? "not-allowed" : "pointer"
      },
      ...rest,
      children: [
        placeholder && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "", children: placeholder }),
        options.map((o) => typeof o === "string" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: o, children: o }, o) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: o.value, disabled: o.disabled, children: o.label }, o.value))
      ]
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(I.ChevDown, { size: 14, style: { color: "var(--pl-ink-4)" } })
] });
var PLToggle = ({ checked, onChange, label, disabled, id, name }) => {
  const auto = (0, import_react.useId)();
  const inputId = id || auto;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { htmlFor: inputId, className: "pl-toggle", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    cursor: disabled ? "not-allowed" : "pointer",
    fontSize: 13,
    color: "var(--pl-ink-2)",
    opacity: disabled ? 0.6 : 1
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "input",
      {
        id: inputId,
        name,
        type: "checkbox",
        role: "switch",
        className: "pl-sr-only",
        checked: !!checked,
        onChange,
        disabled
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-hidden": "true", className: "pl-toggle-track", style: {
      position: "relative",
      width: 32,
      height: 18,
      background: checked ? "var(--pl-accent-500)" : "var(--pl-paper-2)",
      border: `1px solid ${checked ? "var(--pl-accent-600)" : "var(--pl-hairline-strong)"}`,
      borderRadius: 999,
      transition: "background var(--pl-dur-2), border-color var(--pl-dur-2)",
      flexShrink: 0
    }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: {
      position: "absolute",
      top: 1,
      left: checked ? 14 : 1,
      width: 14,
      height: 14,
      borderRadius: 999,
      background: "var(--pl-paper-card)",
      boxShadow: "var(--pl-shadow-sm)",
      transition: "left var(--pl-dur-2) var(--pl-ease)"
    } }) }),
    label
  ] });
};
var PLCheckbox = ({ checked, onChange, label, indeterminate, disabled, id, name, value }) => {
  const auto = (0, import_react.useId)();
  const inputId = id || auto;
  const ref = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (ref.current) ref.current.indeterminate = !!indeterminate;
  }, [indeterminate]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { htmlFor: inputId, className: "pl-checkbox", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    cursor: disabled ? "not-allowed" : "pointer",
    fontSize: 13,
    color: "var(--pl-ink-2)",
    opacity: disabled ? 0.6 : 1
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "input",
      {
        ref,
        id: inputId,
        name,
        value,
        type: "checkbox",
        className: "pl-sr-only",
        checked: !!checked,
        onChange,
        disabled
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { "aria-hidden": "true", className: "pl-checkbox-box", style: {
      width: 16,
      height: 16,
      background: checked || indeterminate ? "var(--pl-accent-500)" : "var(--pl-paper-card)",
      border: `1px solid ${checked || indeterminate ? "var(--pl-accent-600)" : "var(--pl-hairline-strong)"}`,
      borderRadius: 4,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      transition: "all var(--pl-dur-1)"
    }, children: [
      checked && !indeterminate && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(I.Check, { size: 11, strokeWidth: 2.4, style: { color: "var(--pl-accent-ink)" } }),
      indeterminate && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { width: 8, height: 1.6, background: "var(--pl-accent-ink)" } })
    ] }),
    label
  ] });
};
var PLRadio = ({ checked, onChange, label, disabled, id, name, value }) => {
  const auto = (0, import_react.useId)();
  const inputId = id || auto;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { htmlFor: inputId, className: "pl-radio", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    cursor: disabled ? "not-allowed" : "pointer",
    fontSize: 13,
    color: "var(--pl-ink-2)",
    opacity: disabled ? 0.6 : 1
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "input",
      {
        id: inputId,
        name,
        value,
        type: "radio",
        className: "pl-sr-only",
        checked: !!checked,
        onChange,
        disabled
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-hidden": "true", className: "pl-radio-dot", style: {
      width: 16,
      height: 16,
      borderRadius: 999,
      background: "var(--pl-paper-card)",
      border: `1px solid ${checked ? "var(--pl-accent-500)" : "var(--pl-hairline-strong)"}`,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }, children: checked && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { width: 8, height: 8, borderRadius: 999, background: "var(--pl-accent-500)" } }) }),
    label
  ] });
};
var PLField = ({ label, helper, error, required, children, id }) => {
  const auto = (0, import_react.useId)();
  const inputId = id || auto;
  const helperId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;
  const child = import_react.default.Children.only(children);
  const cloned = import_react.default.cloneElement(child, {
    id: inputId,
    "aria-describedby": [helper && helperId, error && errorId].filter(Boolean).join(" ") || void 0,
    "aria-required": required || void 0,
    error: error ? true : child.props.error
  });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { htmlFor: inputId, style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--pl-ink-2)",
      fontFamily: "var(--pl-font-sans)"
    }, children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-hidden": "true", style: { color: "var(--pl-danger-500)", marginLeft: 3 }, children: "*" })
    ] }),
    cloned,
    helper && !error && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { id: helperId, style: { fontSize: 11.5, color: "var(--pl-ink-3)" }, children: helper }),
    error && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { id: errorId, style: { fontSize: 11.5, color: "var(--pl-danger-500)" }, children: error })
  ] });
};
var PLBadge = ({ tone = "neutral", children, dot }) => {
  const tones = {
    neutral: { bg: "var(--pl-paper-1)", fg: "var(--pl-ink-3)", d: "var(--pl-ink-4)" },
    accent: { bg: "var(--pl-accent-50)", fg: "var(--pl-accent-700)", d: "var(--pl-accent-500)" },
    ok: { bg: "var(--pl-ok-50)", fg: "var(--pl-ok-700)", d: "var(--pl-ok-500)" },
    warn: { bg: "var(--pl-warn-50)", fg: "var(--pl-warn-700)", d: "var(--pl-warn-500)" },
    danger: { bg: "var(--pl-danger-50)", fg: "var(--pl-danger-700)", d: "var(--pl-danger-500)" },
    info: { bg: "var(--pl-info-50)", fg: "var(--pl-info-500)", d: "var(--pl-info-500)" }
  };
  const t = tones[tone];
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "3px 8px 3px 7px",
    background: t.bg,
    color: t.fg,
    borderRadius: 999,
    fontSize: 11,
    fontWeight: 500,
    lineHeight: 1.4,
    border: "1px solid var(--pl-hairline)"
  }, children: [
    dot && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-hidden": "true", style: { width: 6, height: 6, borderRadius: 999, background: t.d } }),
    children
  ] });
};
var PLTag = ({ children, onRemove }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { style: {
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
  padding: "2px 7px",
  background: "var(--pl-paper-1)",
  color: "var(--pl-ink-3)",
  border: "1px solid var(--pl-hairline)",
  borderRadius: 4,
  fontSize: 11,
  fontWeight: 500,
  fontFamily: "var(--pl-font-mono)"
}, children: [
  children,
  onRemove && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "button",
    {
      type: "button",
      onClick: onRemove,
      "aria-label": "Remove tag",
      className: "pl-iconbtn",
      style: {
        background: "none",
        border: "none",
        padding: 0,
        marginLeft: 2,
        cursor: "pointer",
        color: "var(--pl-ink-4)",
        display: "inline-flex"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(I.X, { size: 11 })
    }
  )
] });
var PLCard = ({ children, padding = 20, lifted, ...rest }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: {
  background: "var(--pl-paper-card)",
  border: "1px solid var(--pl-hairline)",
  borderRadius: 12,
  padding,
  boxShadow: lifted ? "var(--pl-shadow-md)" : "var(--pl-shadow-sm)",
  transition: "box-shadow var(--pl-dur-2), transform var(--pl-dur-2)",
  ...rest.style
}, ...rest, children });
var PLDivider = ({ orientation = "horizontal", label }) => {
  if (orientation === "vertical") {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-hidden": "true", style: {
      display: "inline-block",
      width: 1,
      alignSelf: "stretch",
      background: "var(--pl-hairline-strong)",
      margin: "0 4px"
    } });
  }
  if (label) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { role: "separator", "aria-orientation": "horizontal", style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: "var(--pl-ink-4)"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { flex: 1, height: 1, background: "var(--pl-hairline-strong)" } }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { fontSize: 11, fontWeight: 600, letterSpacing: 0.08, textTransform: "uppercase" }, children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { flex: 1, height: 1, background: "var(--pl-hairline-strong)" } })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("hr", { role: "separator", style: { border: "none", height: 1, background: "var(--pl-hairline-strong)", margin: 0 } });
};
var initials = (name) => (name || "").trim().split(/\s+/).slice(0, 2).map((s) => s[0]?.toUpperCase() || "").join("");
var PLAvatar = ({ name, size = 32, src, color = "var(--pl-cat-plum)", alt }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: size,
  height: size,
  borderRadius: 999,
  background: src ? "transparent" : `color-mix(in oklab, ${color}, var(--pl-paper-1) 70%)`,
  color,
  border: "1px solid var(--pl-hairline)",
  fontSize: size * 0.4,
  fontWeight: 600,
  fontFamily: "var(--pl-font-sans)",
  overflow: "hidden",
  flexShrink: 0
}, children: src ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src, alt: alt ?? name ?? "", style: { width: "100%", height: "100%", objectFit: "cover" } }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-hidden": !alt && !name, children: initials(name) }) });
var PLAvatarGroup = ({ people, max = 3 }) => {
  const shown = people.slice(0, max);
  const extra = people.length - max;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "inline-flex" }, children: [
    shown.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { marginLeft: i ? -8 : 0, border: "2px solid var(--pl-paper-card)", borderRadius: 999 }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(PLAvatar, { name: p.name, color: p.color, src: p.src, size: 28 }) }, i)),
    extra > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { style: {
      marginLeft: -8,
      width: 28,
      height: 28,
      borderRadius: 999,
      background: "var(--pl-paper-2)",
      border: "2px solid var(--pl-paper-card)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 10.5,
      fontWeight: 600,
      color: "var(--pl-ink-3)"
    }, children: [
      "+",
      extra
    ] })
  ] });
};
var PLProgress = ({ value = 0, label, accent = "var(--pl-accent-500)" }) => {
  const v = clamp(Number(value) || 0, 0, 100);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--pl-ink-3)", marginBottom: 6 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { fontWeight: 500 }, children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "pl-mono", style: { fontWeight: 600, color: "var(--pl-ink-2)" }, children: [
        v,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        role: "progressbar",
        "aria-valuenow": v,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": label,
        style: { height: 4, background: "var(--pl-paper-2)", borderRadius: 999, overflow: "hidden" },
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: {
          height: "100%",
          width: `${v}%`,
          background: `linear-gradient(90deg, var(--pl-accent-400), ${accent})`,
          borderRadius: 999,
          transition: "width var(--pl-dur-3) var(--pl-ease)"
        } })
      }
    )
  ] });
};
var PLSpinner = ({ size = 16, label = "Loading" }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { role: "status", "aria-label": label, style: { display: "inline-flex", color: "var(--pl-accent-500)" }, children: [
  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      style: { animation: "pl-spin 0.8s linear infinite" },
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeOpacity: "0.2", strokeWidth: "2.4" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M21 12a9 9 0 0 0-9-9", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round" })
      ]
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "pl-sr-only", children: label })
] });
var PLSkeleton = ({ width = "100%", height = 12, radius = 4, style }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-hidden": "true", style: {
  display: "block",
  width,
  height,
  borderRadius: radius,
  background: "linear-gradient(90deg, var(--pl-paper-1) 0%, var(--pl-paper-2) 50%, var(--pl-paper-1) 100%)",
  backgroundSize: "200% 100%",
  animation: "pl-skeleton 1.4s ease-in-out infinite",
  ...style
} });
var PLAlert = ({ tone = "info", title, children, icon: IconComp }) => {
  const tones = {
    info: { bg: "var(--pl-info-50)", bd: "var(--pl-info-200)", fg: "var(--pl-info-500)" },
    ok: { bg: "var(--pl-ok-50)", bd: "var(--pl-ok-200)", fg: "var(--pl-ok-700)" },
    warn: { bg: "var(--pl-warn-50)", bd: "var(--pl-warn-200)", fg: "var(--pl-warn-700)" },
    danger: { bg: "var(--pl-danger-50)", bd: "var(--pl-danger-200)", fg: "var(--pl-danger-700)" }
  };
  const t = tones[tone];
  const Default = { info: I.Info, ok: I.Check, warn: I.Alert, danger: I.Alert }[tone];
  const Use = IconComp || Default;
  const role = tone === "danger" || tone === "warn" ? "alert" : "status";
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { role, style: {
    display: "flex",
    gap: 12,
    padding: "12px 14px",
    background: t.bg,
    color: t.fg,
    border: `1px solid ${t.bd}`,
    borderLeft: `3px solid ${t.fg}`,
    borderRadius: 8
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Use, { size: 16, style: { marginTop: 2, flexShrink: 0 } }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { flex: 1, color: "var(--pl-ink-2)" }, children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { fontSize: 13, fontWeight: 600, color: t.fg }, children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { fontSize: 12.5, lineHeight: 1.55, marginTop: title ? 2 : 0 }, children })
    ] })
  ] });
};
var PLEmptyState = ({ icon: IconComp = I.Inbox, title, description, action }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "32px 24px",
  gap: 8,
  background: "var(--pl-paper-card)",
  border: "1px dashed var(--pl-hairline-strong)",
  borderRadius: 12
}, children: [
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: {
    width: 44,
    height: 44,
    borderRadius: 999,
    background: "var(--pl-paper-1)",
    color: "var(--pl-ink-3)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconComp, { size: 22 }) }),
  title && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "pl-serif", style: { fontSize: 18, color: "var(--pl-ink-1)" }, children: title }),
  description && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { fontSize: 12.5, color: "var(--pl-ink-3)", maxWidth: 360 }, children: description }),
  action && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { marginTop: 6 }, children: action })
] });
var PLTabs = ({ items, value, onChange, label = "Tabs" }) => {
  const onKey = (e, idx) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    let next = idx;
    if (e.key === "ArrowRight") next = (idx + 1) % items.length;
    else if (e.key === "ArrowLeft") next = (idx - 1 + items.length) % items.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = items.length - 1;
    onChange(items[next].value);
    e.currentTarget.parentElement.querySelectorAll("[role='tab']")[next]?.focus();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { role: "tablist", "aria-label": label, style: {
    display: "inline-flex",
    gap: 2,
    padding: 3,
    background: "var(--pl-paper-1)",
    border: "1px solid var(--pl-hairline)",
    borderRadius: 8
  }, children: items.map((it, i) => {
    const active = value === it.value;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "button",
      {
        role: "tab",
        "aria-selected": active,
        tabIndex: active ? 0 : -1,
        onClick: () => onChange(it.value),
        onKeyDown: (e) => onKey(e, i),
        className: "pl-tab",
        style: {
          padding: "5px 12px",
          border: "none",
          background: active ? "var(--pl-paper-card)" : "transparent",
          color: active ? "var(--pl-ink-1)" : "var(--pl-ink-3)",
          boxShadow: active ? "var(--pl-shadow-xs)" : "none",
          borderRadius: 6,
          cursor: "pointer",
          fontSize: 12,
          fontWeight: 600,
          fontFamily: "var(--pl-font-sans)",
          transition: "all var(--pl-dur-1)"
        },
        children: it.label
      },
      it.value
    );
  }) });
};
var PLStat = ({ label, value, delta, tone = "neutral" }) => {
  const tones = {
    neutral: "var(--pl-ink-2)",
    ok: "var(--pl-ok-500)",
    warn: "var(--pl-warn-500)",
    danger: "var(--pl-danger-500)",
    info: "var(--pl-info-500)",
    accent: "var(--pl-accent-500)"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: {
    padding: "14px 16px",
    background: "var(--pl-paper-card)",
    border: "1px solid var(--pl-hairline-strong)",
    borderRadius: 10,
    boxShadow: "var(--pl-shadow-xs)"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "pl-eyebrow", style: { fontSize: 10 }, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", alignItems: "baseline", gap: 8, marginTop: 4 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "pl-serif", style: { fontSize: 28, color: tones[tone] || tones.neutral, letterSpacing: -0.02 }, children: value }),
      delta && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "pl-mono", style: { fontSize: 11, color: delta.startsWith("+") ? "var(--pl-ok-500)" : "var(--pl-danger-500)", fontWeight: 600 }, children: delta })
    ] })
  ] });
};
var PLTable = ({ columns, rows, caption }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: {
  background: "var(--pl-paper-card)",
  border: "1px solid var(--pl-hairline-strong)",
  borderRadius: 10,
  overflow: "hidden",
  boxShadow: "var(--pl-shadow-xs)"
}, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: 13 }, children: [
  caption && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("caption", { className: "pl-sr-only", children: caption }),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tr", { style: { background: "var(--pl-paper-1)", borderBottom: "1px solid var(--pl-hairline-strong)" }, children: columns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("th", { scope: "col", style: {
    textAlign: "left",
    padding: "10px 14px",
    fontSize: 10.5,
    letterSpacing: 0.14,
    textTransform: "uppercase",
    color: "var(--pl-ink-4)",
    fontWeight: 600
  }, children: c.label }, c.key)) }) }),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tbody", { children: rows.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tr", { style: { borderBottom: i < rows.length - 1 ? "1px solid var(--pl-hairline)" : "none" }, children: columns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { style: { padding: "12px 14px", color: "var(--pl-ink-2)" }, children: c.render ? c.render(r) : r[c.key] }, c.key)) }, i)) })
] }) });
var PLToast = ({ tone = "neutral", icon: IconComp, title, action, duration = 0, onDismiss }) => {
  const [visible, setVisible] = (0, import_react.useState)(true);
  (0, import_react.useEffect)(() => {
    if (!duration) return;
    const t2 = setTimeout(() => {
      setVisible(false);
      onDismiss?.();
    }, duration);
    return () => clearTimeout(t2);
  }, [duration, onDismiss]);
  if (!visible) return null;
  const tones = {
    neutral: { fg: "var(--pl-ink-2)", d: "var(--pl-ink-4)" },
    ok: { fg: "var(--pl-ok-700)", d: "var(--pl-ok-500)" },
    danger: { fg: "var(--pl-danger-700)", d: "var(--pl-danger-500)" }
  };
  const t = tones[tone];
  const role = tone === "danger" ? "alert" : "status";
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { role, "aria-live": tone === "danger" ? "assertive" : "polite", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 14px",
    background: "var(--pl-paper-card)",
    border: "1px solid var(--pl-hairline-strong)",
    borderRadius: 10,
    boxShadow: "var(--pl-shadow-lg)"
  }, children: [
    IconComp && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconComp, { size: 15, style: { color: t.d } }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { fontSize: 13, fontWeight: 500, color: t.fg }, children: title }),
    action && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "button",
      {
        type: "button",
        onClick: action.onClick,
        className: "pl-btn",
        style: {
          marginLeft: 8,
          padding: "2px 8px",
          background: "none",
          border: "none",
          fontSize: 11.5,
          fontWeight: 600,
          color: "var(--pl-accent-500)",
          cursor: "pointer",
          borderLeft: "1px solid var(--pl-hairline)"
        },
        children: action.label
      }
    )
  ] });
};
var PLStack = ({ gap = 12, align = "stretch", as: Tag = "div", children, style, ...rest }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tag, { style: { display: "flex", flexDirection: "column", gap, alignItems: align, ...style }, ...rest, children });
var PLCluster = ({ gap = 8, align = "center", justify = "flex-start", wrap = true, as: Tag = "div", children, style, ...rest }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tag, { style: {
  display: "flex",
  flexDirection: "row",
  flexWrap: wrap ? "wrap" : "nowrap",
  gap,
  alignItems: align,
  justifyContent: justify,
  ...style
}, ...rest, children });
var PLGrid = ({ cols = 3, gap = 16, minCol, as: Tag = "div", children, style, ...rest }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tag, { style: {
  display: "grid",
  gridTemplateColumns: minCol ? `repeat(auto-fill, minmax(${typeof minCol === "number" ? `${minCol}px` : minCol}, 1fr))` : `repeat(${cols}, minmax(0, 1fr))`,
  gap,
  ...style
}, ...rest, children });
var PLBreadcrumbs = ({ items }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("nav", { "aria-label": "Breadcrumb", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ol", { style: {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 6,
  listStyle: "none",
  padding: 0,
  margin: 0,
  fontSize: 12,
  color: "var(--pl-ink-3)",
  fontFamily: "var(--pl-font-sans)"
}, children: items.map((it, i) => {
  const last = i === items.length - 1;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("li", { style: { display: "inline-flex", alignItems: "center", gap: 6 }, children: [
    it.href && !last ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { href: it.href, className: "pl-link", style: { color: "var(--pl-ink-2)", textDecoration: "none", fontWeight: 500 }, children: it.label }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-current": last ? "page" : void 0, style: { color: last ? "var(--pl-ink-1)" : "var(--pl-ink-3)", fontWeight: last ? 600 : 500 }, children: it.label }),
    !last && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(I.ChevRight, { size: 12, style: { color: "var(--pl-ink-4)" } })
  ] }, i);
}) }) });
var PLPagination = ({ page = 1, total, onChange }) => {
  const go = (p) => onChange(clamp(p, 1, total));
  const buttons = [];
  const pushBtn = (p, key = p) => buttons.push(
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "button",
      {
        type: "button",
        onClick: () => go(p),
        "aria-current": page === p ? "page" : void 0,
        className: "pl-page-btn",
        style: {
          minWidth: 28,
          height: 28,
          padding: "0 8px",
          background: page === p ? "var(--pl-accent-500)" : "var(--pl-paper-card)",
          color: page === p ? "var(--pl-accent-ink)" : "var(--pl-ink-2)",
          border: `1px solid ${page === p ? "var(--pl-accent-600)" : "var(--pl-hairline-strong)"}`,
          borderRadius: 6,
          cursor: "pointer",
          fontSize: 12,
          fontWeight: 600,
          fontFamily: "var(--pl-font-sans)"
        },
        children: p
      },
      key
    )
  );
  const window2 = 1;
  const pages = new Set([1, total, page - window2, page, page + window2].filter((p) => p >= 1 && p <= total));
  const sorted = [...pages].sort((a, b) => a - b);
  let prev = 0;
  for (const p of sorted) {
    if (p - prev > 1) buttons.push(/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { color: "var(--pl-ink-4)", padding: "0 4px" }, children: "\u2026" }, `g${p}`));
    pushBtn(p);
    prev = p;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("nav", { "aria-label": "Pagination", style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "button",
      {
        type: "button",
        onClick: () => go(page - 1),
        disabled: page <= 1,
        "aria-label": "Previous page",
        className: "pl-page-btn",
        style: {
          width: 28,
          height: 28,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--pl-paper-card)",
          color: "var(--pl-ink-2)",
          border: "1px solid var(--pl-hairline-strong)",
          borderRadius: 6,
          cursor: page <= 1 ? "not-allowed" : "pointer",
          opacity: page <= 1 ? 0.5 : 1
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(I.ChevLeft, { size: 14 })
      }
    ),
    buttons,
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "button",
      {
        type: "button",
        onClick: () => go(page + 1),
        disabled: page >= total,
        "aria-label": "Next page",
        className: "pl-page-btn",
        style: {
          width: 28,
          height: 28,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--pl-paper-card)",
          color: "var(--pl-ink-2)",
          border: "1px solid var(--pl-hairline-strong)",
          borderRadius: 6,
          cursor: page >= total ? "not-allowed" : "pointer",
          opacity: page >= total ? 0.5 : 1
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(I.ChevRight, { size: 14 })
      }
    )
  ] });
};
var PLTooltip = ({ label, side = "top", children }) => {
  const id = (0, import_react.useId)();
  const offsets = {
    top: { bottom: "calc(100% + 6px)", left: "50%", transform: "translateX(-50%)" },
    bottom: { top: "calc(100% + 6px)", left: "50%", transform: "translateX(-50%)" },
    left: { right: "calc(100% + 6px)", top: "50%", transform: "translateY(-50%)" },
    right: { left: "calc(100% + 6px)", top: "50%", transform: "translateY(-50%)" }
  };
  const child = import_react.default.Children.only(children);
  const cloned = import_react.default.cloneElement(child, { "aria-describedby": id });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { style: { position: "relative", display: "inline-flex" }, className: "pl-tooltip-host", children: [
    cloned,
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "span",
      {
        role: "tooltip",
        id,
        style: {
          position: "absolute",
          ...offsets[side],
          padding: "4px 8px",
          background: "var(--pl-ink-1)",
          color: "var(--pl-paper-card)",
          fontSize: 11,
          fontWeight: 500,
          fontFamily: "var(--pl-font-sans)",
          borderRadius: 4,
          whiteSpace: "nowrap",
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity var(--pl-dur-1)",
          zIndex: "var(--pl-z-tooltip)"
        },
        children: label
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("style", { children: `.pl-tooltip-host:hover [role="tooltip"], .pl-tooltip-host:focus-within [role="tooltip"] { opacity: 1 !important; }` })
  ] });
};
var PLMenu = ({ trigger, items, align = "left", onSelect }) => {
  const [open, setOpen] = (0, import_react.useState)(false);
  const ref = (0, import_react.useRef)(null);
  const triggerWrapRef = (0, import_react.useRef)(null);
  const focusTrigger = () => triggerWrapRef.current?.querySelector("button, [href], [tabindex]")?.focus();
  (0, import_react.useEffect)(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target) && !triggerWrapRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        focusTrigger();
      }
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  const triggerEl = import_react.default.cloneElement(trigger, {
    onClick: (e) => {
      trigger.props.onClick?.(e);
      setOpen((o) => !o);
    },
    "aria-haspopup": "menu",
    "aria-expanded": open
  });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { style: { position: "relative", display: "inline-flex" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { ref: triggerWrapRef, style: { display: "inline-flex" }, children: triggerEl }),
    open && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref, role: "menu", style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      [align === "right" ? "right" : "left"]: 0,
      minWidth: 160,
      padding: 4,
      background: "var(--pl-paper-card)",
      border: "1px solid var(--pl-hairline-strong)",
      borderRadius: 8,
      boxShadow: "var(--pl-shadow-lg)",
      zIndex: "var(--pl-z-dropdown)"
    }, children: items.map((it, i) => it.divider ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { role: "separator", style: { height: 1, background: "var(--pl-hairline)", margin: "4px 0" } }, `d${i}`) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "button",
      {
        type: "button",
        role: "menuitem",
        disabled: it.disabled,
        onClick: () => {
          onSelect?.(it.value, it);
          it.onClick?.();
          setOpen(false);
          focusTrigger();
        },
        className: "pl-menu-item",
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          width: "100%",
          padding: "6px 10px",
          border: "none",
          background: "transparent",
          color: it.danger ? "var(--pl-danger-500)" : "var(--pl-ink-2)",
          fontSize: 12.5,
          fontWeight: 500,
          fontFamily: "var(--pl-font-sans)",
          borderRadius: 6,
          cursor: it.disabled ? "not-allowed" : "pointer",
          textAlign: "left",
          opacity: it.disabled ? 0.5 : 1
        },
        onMouseEnter: (e) => {
          if (!it.disabled) e.currentTarget.style.background = "var(--pl-paper-1)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.background = "transparent";
        },
        children: [
          it.icon && import_react.default.createElement(it.icon, { size: 14 }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { flex: 1 }, children: it.label }),
          it.shortcut && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "pl-mono", style: { fontSize: 10.5, color: "var(--pl-ink-4)" }, children: it.shortcut })
        ]
      },
      it.value || i
    )) })
  ] });
};
var PLModal = ({ open, onClose, title, description, children, footer, size = "md", closeOnOverlay = true }) => {
  const ref = (0, import_react.useRef)(null);
  const labelId = (0, import_react.useId)();
  const descId = (0, import_react.useId)();
  const lastFocused = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (!open) return;
    lastFocused.current = document.activeElement;
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose?.();
        return;
      }
      if (e.key !== "Tab" || !ref.current) return;
      const focusables = ref.current.querySelectorAll(
        'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setTimeout(() => ref.current?.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')?.focus(), 0);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      lastFocused.current?.focus?.();
    };
  }, [open, onClose]);
  if (!open) return null;
  const widths = { sm: 360, md: 480, lg: 640, xl: 820 };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      onMouseDown: (e) => {
        if (closeOnOverlay && e.target === e.currentTarget) onClose?.();
      },
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(28,26,23,0.42)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        zIndex: "var(--pl-z-modal)"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "div",
        {
          ref,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": title ? labelId : void 0,
          "aria-describedby": description ? descId : void 0,
          style: {
            width: "100%",
            maxWidth: widths[size] || widths.md,
            maxHeight: "calc(100vh - 40px)",
            background: "var(--pl-paper-card)",
            border: "1px solid var(--pl-hairline-strong)",
            borderRadius: 12,
            boxShadow: "var(--pl-shadow-xl)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          },
          children: [
            (title || onClose) && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: {
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              padding: "16px 20px",
              borderBottom: "1px solid var(--pl-hairline)"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { flex: 1 }, children: [
                title && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { id: labelId, className: "pl-serif", style: { fontSize: 20, color: "var(--pl-ink-1)" }, children: title }),
                description && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { id: descId, style: { fontSize: 12.5, color: "var(--pl-ink-3)", marginTop: 2 }, children: description })
              ] }),
              onClose && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  "aria-label": "Close dialog",
                  className: "pl-iconbtn",
                  style: {
                    background: "transparent",
                    border: "none",
                    padding: 6,
                    borderRadius: 6,
                    cursor: "pointer",
                    color: "var(--pl-ink-3)",
                    display: "inline-flex"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(I.X, { size: 16 })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { padding: 20, overflow: "auto", color: "var(--pl-ink-2)", fontSize: 13.5, lineHeight: 1.55 }, children }),
            footer && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: {
              display: "flex",
              justifyContent: "flex-end",
              gap: 8,
              padding: "12px 20px",
              borderTop: "1px solid var(--pl-hairline)",
              background: "var(--pl-paper-1)"
            }, children: footer })
          ]
        }
      )
    }
  );
};
if (typeof window !== "undefined") {
  Object.assign(window, {
    PLButton,
    PLInput,
    PLTextarea,
    PLSelect,
    PLToggle,
    PLCheckbox,
    PLRadio,
    PLField,
    PLBadge,
    PLTag,
    PLCard,
    PLDivider,
    PLAvatar,
    PLAvatarGroup,
    PLProgress,
    PLSpinner,
    PLSkeleton,
    PLAlert,
    PLEmptyState,
    PLTabs,
    PLStat,
    PLTable,
    PLToast,
    PLStack,
    PLCluster,
    PLGrid,
    PLBreadcrumbs,
    PLPagination,
    PLTooltip,
    PLMenu,
    PLModal
  });
}
