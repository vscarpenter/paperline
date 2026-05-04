// Paperline — Component Library
// All components use the --pl-* tokens from paperline.css
// Components are intentionally headless-ish: small, composable, no deps beyond React.

import React, { useState } from "react";
import { I } from "./icons.jsx";

/* ============================================================
   Buttons
   ============================================================ */
const PLButton = ({ kind = "primary", size = "md", icon: IconComp, iconRight, children, disabled, fullWidth, ...rest }) => {
  const sizes = {
    sm: { p: "5px 10px", fs: 12,  ic: 13, gap: 5, h: 28 },
    md: { p: "8px 14px", fs: 12.5, ic: 14, gap: 6, h: 34 },
    lg: { p: "10px 18px", fs: 13.5, ic: 15, gap: 7, h: 40 },
  };
  const kinds = {
    primary:   { bg: "var(--pl-accent-500)", color: "var(--pl-accent-ink)", border: "var(--pl-accent-600)", shadow: "var(--pl-shadow-sm)" },
    secondary: { bg: "var(--pl-paper-card)", color: "var(--pl-ink-2)",     border: "var(--pl-hairline-strong)", shadow: "var(--pl-shadow-xs)" },
    ghost:     { bg: "transparent",          color: "var(--pl-ink-2)",     border: "transparent", shadow: "none" },
    danger:    { bg: "var(--pl-paper-card)", color: "var(--pl-danger-500)",border: "var(--pl-hairline-strong)", shadow: "var(--pl-shadow-xs)" },
    accentSoft:{ bg: "var(--pl-accent-50)",  color: "var(--pl-accent-700)",border: "var(--pl-accent-100)", shadow: "none" },
  };
  const s = sizes[size]; const k = kinds[kind];
  return (
    <button disabled={disabled} style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: s.gap,
      padding: s.p, height: s.h, width: fullWidth ? "100%" : "auto",
      background: k.bg, color: k.color,
      border: `1px solid ${k.border}`, borderRadius: 8,
      fontSize: s.fs, fontWeight: 600, fontFamily: "var(--pl-font-sans)",
      letterSpacing: 0, cursor: disabled ? "not-allowed" : "pointer",
      boxShadow: k.shadow, opacity: disabled ? 0.5 : 1,
      transition: "background var(--pl-dur-1) var(--pl-ease), box-shadow var(--pl-dur-1)",
    }} {...rest}>
      {IconComp && <IconComp size={s.ic} />}
      {children}
      {iconRight && React.createElement(iconRight, { size: s.ic })}
    </button>
  );
};

/* ============================================================
   Inputs
   ============================================================ */
const PLInput = ({ icon: IconComp, suffix, placeholder, value, onChange, type = "text", error }) => (
  <label style={{
    display: "flex", alignItems: "center", gap: 8,
    padding: "9px 12px",
    background: "var(--pl-paper-card)",
    border: `1px solid ${error ? "var(--pl-danger-500)" : "var(--pl-hairline-strong)"}`,
    borderRadius: 8, boxShadow: "var(--pl-shadow-xs)",
    transition: "border-color var(--pl-dur-1), box-shadow var(--pl-dur-1)",
  }}>
    {IconComp && <IconComp size={15} style={{ color: "var(--pl-ink-4)", flexShrink: 0 }} />}
    <input
      type={type} value={value} onChange={onChange} placeholder={placeholder}
      style={{
        flex: 1, border: "none", outline: "none", background: "transparent",
        fontSize: 13, color: "var(--pl-ink-1)", fontFamily: "var(--pl-font-sans)",
      }}
    />
    {suffix}
  </label>
);

const PLTextarea = ({ placeholder, value, onChange, rows = 3 }) => (
  <textarea rows={rows} value={value} onChange={onChange} placeholder={placeholder} style={{
    width: "100%", padding: "10px 12px",
    background: "var(--pl-paper-card)", border: "1px solid var(--pl-hairline-strong)",
    borderRadius: 8, boxShadow: "var(--pl-shadow-xs)",
    fontSize: 13, color: "var(--pl-ink-1)", fontFamily: "var(--pl-font-sans)",
    lineHeight: 1.55, resize: "vertical", outline: "none",
  }} />
);

/* ============================================================
   Toggle / Checkbox / Radio
   ============================================================ */
const PLToggle = ({ checked, onChange, label }) => (
  <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: 13, color: "var(--pl-ink-2)" }}>
    <span style={{
      position: "relative", width: 32, height: 18,
      background: checked ? "var(--pl-accent-500)" : "var(--pl-paper-2)",
      border: `1px solid ${checked ? "var(--pl-accent-600)" : "var(--pl-hairline-strong)"}`,
      borderRadius: 999, transition: "background var(--pl-dur-2), border-color var(--pl-dur-2)",
      flexShrink: 0,
    }}>
      <span style={{
        position: "absolute", top: 1, left: checked ? 14 : 1,
        width: 14, height: 14, borderRadius: 999,
        background: "var(--pl-paper-card)",
        boxShadow: "var(--pl-shadow-sm)",
        transition: "left var(--pl-dur-2) var(--pl-ease)",
      }} />
    </span>
    {label}
    <input type="checkbox" checked={checked} onChange={onChange} style={{ display: "none" }} />
  </label>
);

const PLCheckbox = ({ checked, onChange, label, indeterminate }) => (
  <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: 13, color: "var(--pl-ink-2)" }}>
    <span style={{
      width: 16, height: 16,
      background: checked ? "var(--pl-accent-500)" : "var(--pl-paper-card)",
      border: `1px solid ${checked ? "var(--pl-accent-600)" : "var(--pl-hairline-strong)"}`,
      borderRadius: 4,
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
      transition: "all var(--pl-dur-1)",
    }}>
      {checked && !indeterminate && <I.Check size={11} strokeWidth={2.4} style={{ color: "var(--pl-accent-ink)" }} />}
      {indeterminate && <span style={{ width: 8, height: 1.6, background: "var(--pl-accent-ink)" }} />}
    </span>
    {label}
  </label>
);

const PLRadio = ({ checked, onChange, label }) => (
  <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: 13, color: "var(--pl-ink-2)" }}>
    <span style={{
      width: 16, height: 16, borderRadius: 999,
      background: "var(--pl-paper-card)",
      border: `1px solid ${checked ? "var(--pl-accent-500)" : "var(--pl-hairline-strong)"}`,
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      {checked && <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--pl-accent-500)" }} />}
    </span>
    {label}
  </label>
);

/* ============================================================
   Badge / Chip / Tag
   ============================================================ */
const PLBadge = ({ tone = "neutral", children, dot }) => {
  const tones = {
    neutral: { bg: "var(--pl-paper-1)", fg: "var(--pl-ink-3)",      d: "var(--pl-ink-4)" },
    accent:  { bg: "var(--pl-accent-50)", fg: "var(--pl-accent-700)", d: "var(--pl-accent-500)" },
    ok:      { bg: "var(--pl-ok-50)",     fg: "var(--pl-ok-700)",     d: "var(--pl-ok-500)" },
    warn:    { bg: "var(--pl-warn-50)",   fg: "var(--pl-warn-700)",   d: "var(--pl-warn-500)" },
    danger:  { bg: "var(--pl-danger-50)", fg: "var(--pl-danger-700)", d: "var(--pl-danger-500)" },
    info:    { bg: "var(--pl-info-50)",   fg: "var(--pl-info-500)",   d: "var(--pl-info-500)" },
  };
  const t = tones[tone];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "3px 8px 3px 7px",
      background: t.bg, color: t.fg,
      borderRadius: 999,
      fontSize: 11, fontWeight: 500,
      lineHeight: 1.4,
      border: "1px solid var(--pl-hairline)",
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: 999, background: t.d }} />}
      {children}
    </span>
  );
};

const PLTag = ({ children }) => (
  <span style={{
    display: "inline-flex", alignItems: "center",
    padding: "2px 7px",
    background: "var(--pl-paper-1)", color: "var(--pl-ink-3)",
    border: "1px solid var(--pl-hairline)",
    borderRadius: 4,
    fontSize: 11, fontWeight: 500, fontFamily: "var(--pl-font-mono)",
  }}>{children}</span>
);

/* ============================================================
   Card / Surface
   ============================================================ */
const PLCard = ({ children, padding = 20, lifted, hover, ...rest }) => (
  <div style={{
    background: "var(--pl-paper-card)",
    border: "1px solid var(--pl-hairline)",
    borderRadius: 12,
    padding,
    boxShadow: lifted ? "var(--pl-shadow-md)" : "var(--pl-shadow-sm)",
    transition: "box-shadow var(--pl-dur-2), transform var(--pl-dur-2)",
    ...rest.style,
  }} {...rest}>{children}</div>
);

/* ============================================================
   Avatar
   ============================================================ */
const PLAvatar = ({ name = "JD", size = 32, src, color = "var(--pl-cat-plum)" }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    width: size, height: size, borderRadius: 999,
    background: src ? "transparent" : `color-mix(in oklab, ${color}, var(--pl-paper-1) 70%)`,
    color: color,
    border: "1px solid var(--pl-hairline)",
    fontSize: size * 0.4, fontWeight: 600,
    fontFamily: "var(--pl-font-sans)",
    overflow: "hidden", flexShrink: 0,
  }}>
    {src ? <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : name.slice(0, 2).toUpperCase()}
  </span>
);

/* ============================================================
   Progress
   ============================================================ */
const PLProgress = ({ value = 0, label, accent = "var(--pl-accent-500)" }) => (
  <div>
    {label && (
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--pl-ink-3)", marginBottom: 6 }}>
        <span style={{ fontWeight: 500 }}>{label}</span>
        <span className="pl-mono" style={{ fontWeight: 600, color: "var(--pl-ink-2)" }}>{value}%</span>
      </div>
    )}
    <div style={{ height: 4, background: "var(--pl-paper-2)", borderRadius: 999, overflow: "hidden" }}>
      <div style={{
        height: "100%", width: `${value}%`,
        background: `linear-gradient(90deg, var(--pl-accent-400), ${accent})`,
        borderRadius: 999, transition: "width var(--pl-dur-3) var(--pl-ease)",
      }} />
    </div>
  </div>
);

/* ============================================================
   Alert / Callout
   ============================================================ */
const PLAlert = ({ tone = "info", title, children, icon: IconComp }) => {
  const tones = {
    info:   { bg: "var(--pl-info-50)",   bd: "var(--pl-info-200)",   fg: "var(--pl-info-500)" },
    ok:     { bg: "var(--pl-ok-50)",     bd: "var(--pl-ok-200)",     fg: "var(--pl-ok-700)" },
    warn:   { bg: "var(--pl-warn-50)",   bd: "var(--pl-warn-200)",   fg: "var(--pl-warn-700)" },
    danger: { bg: "var(--pl-danger-50)", bd: "var(--pl-danger-200)", fg: "var(--pl-danger-700)" },
  };
  const t = tones[tone];
  const Default = { info: I.Info, ok: I.Check, warn: I.Alert, danger: I.Alert }[tone];
  const Use = IconComp || Default;
  return (
    <div style={{
      display: "flex", gap: 12,
      padding: "12px 14px",
      background: t.bg, color: t.fg,
      border: `1px solid ${t.bd}`,
      borderLeft: `3px solid ${t.fg}`,
      borderRadius: 8,
    }}>
      <Use size={16} style={{ marginTop: 2, flexShrink: 0 }} />
      <div style={{ flex: 1, color: "var(--pl-ink-2)" }}>
        {title && <div style={{ fontSize: 13, fontWeight: 600, color: t.fg }}>{title}</div>}
        <div style={{ fontSize: 12.5, lineHeight: 1.55, marginTop: title ? 2 : 0 }}>{children}</div>
      </div>
    </div>
  );
};

/* ============================================================
   Tabs
   ============================================================ */
const PLTabs = ({ items, value, onChange }) => (
  <div style={{
    display: "inline-flex", gap: 2, padding: 3,
    background: "var(--pl-paper-1)",
    border: "1px solid var(--pl-hairline)",
    borderRadius: 8,
  }}>
    {items.map(it => (
      <button key={it.value} onClick={() => onChange(it.value)} style={{
        padding: "5px 12px", border: "none",
        background: value === it.value ? "var(--pl-paper-card)" : "transparent",
        color: value === it.value ? "var(--pl-ink-1)" : "var(--pl-ink-3)",
        boxShadow: value === it.value ? "var(--pl-shadow-xs)" : "none",
        borderRadius: 6, cursor: "pointer",
        fontSize: 12, fontWeight: 600, fontFamily: "var(--pl-font-sans)",
        transition: "all var(--pl-dur-1)",
      }}>{it.label}</button>
    ))}
  </div>
);

/* ============================================================
   Stat tile
   ============================================================ */
const PLStat = ({ label, value, delta, tone = "neutral" }) => {
  const tones = {
    neutral: "var(--pl-ink-2)",
    ok: "var(--pl-ok-500)", warn: "var(--pl-warn-500)",
    danger: "var(--pl-danger-500)", info: "var(--pl-info-500)",
    accent: "var(--pl-accent-500)",
  };
  return (
    <div style={{
      padding: "14px 16px",
      background: "var(--pl-paper-card)",
      border: "1px solid var(--pl-hairline-strong)",
      borderRadius: 10, boxShadow: "var(--pl-shadow-xs)",
    }}>
      <div className="pl-eyebrow" style={{ fontSize: 10 }}>{label}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 4 }}>
        <span className="pl-serif" style={{ fontSize: 28, color: tones[tone] || tones.neutral, letterSpacing: -0.02 }}>{value}</span>
        {delta && (
          <span className="pl-mono" style={{ fontSize: 11, color: delta.startsWith("+") ? "var(--pl-ok-500)" : "var(--pl-danger-500)", fontWeight: 600 }}>
            {delta}
          </span>
        )}
      </div>
    </div>
  );
};

/* ============================================================
   Avatar list / Table
   ============================================================ */
const PLTable = ({ columns, rows }) => (
  <div style={{
    background: "var(--pl-paper-card)",
    border: "1px solid var(--pl-hairline-strong)",
    borderRadius: 10, overflow: "hidden",
    boxShadow: "var(--pl-shadow-xs)",
  }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
      <thead>
        <tr style={{ background: "var(--pl-paper-1)", borderBottom: "1px solid var(--pl-hairline-strong)" }}>
          {columns.map(c => (
            <th key={c.key} style={{
              textAlign: "left", padding: "10px 14px",
              fontSize: 10.5, letterSpacing: 0.14, textTransform: "uppercase",
              color: "var(--pl-ink-4)", fontWeight: 600,
            }}>{c.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--pl-hairline)" : "none" }}>
            {columns.map(c => (
              <td key={c.key} style={{ padding: "12px 14px", color: "var(--pl-ink-2)" }}>
                {c.render ? c.render(r) : r[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ============================================================
   Toast / Snackbar
   ============================================================ */
const PLToast = ({ tone = "neutral", icon: IconComp, title, action }) => {
  const tones = {
    neutral: { fg: "var(--pl-ink-2)", d: "var(--pl-ink-4)" },
    ok: { fg: "var(--pl-ok-700)", d: "var(--pl-ok-500)" },
    danger: { fg: "var(--pl-danger-700)", d: "var(--pl-danger-500)" },
  };
  const t = tones[tone];
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      padding: "10px 14px",
      background: "var(--pl-paper-card)",
      border: "1px solid var(--pl-hairline-strong)",
      borderRadius: 10, boxShadow: "var(--pl-shadow-lg)",
    }}>
      {IconComp && <IconComp size={15} style={{ color: t.d }} />}
      <span style={{ fontSize: 13, fontWeight: 500, color: t.fg }}>{title}</span>
      {action && <span style={{
        marginLeft: 8, padding: "2px 8px",
        fontSize: 11.5, fontWeight: 600, color: "var(--pl-accent-500)",
        cursor: "pointer", borderLeft: "1px solid var(--pl-hairline)",
      }}>{action}</span>}
    </div>
  );
};

/* ============================================================
   Avatar group
   ============================================================ */
const PLAvatarGroup = ({ people, max = 3 }) => {
  const shown = people.slice(0, max);
  const extra = people.length - max;
  return (
    <div style={{ display: "inline-flex" }}>
      {shown.map((p, i) => (
        <div key={i} style={{ marginLeft: i ? -8 : 0, border: "2px solid var(--pl-paper-card)", borderRadius: 999 }}>
          <PLAvatar name={p.name} color={p.color} size={28} />
        </div>
      ))}
      {extra > 0 && (
        <span style={{
          marginLeft: -8, width: 28, height: 28, borderRadius: 999,
          background: "var(--pl-paper-2)", border: "2px solid var(--pl-paper-card)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          fontSize: 10.5, fontWeight: 600, color: "var(--pl-ink-3)",
        }}>+{extra}</span>
      )}
    </div>
  );
};

export {
  PLButton,
  PLInput,
  PLTextarea,
  PLToggle,
  PLCheckbox,
  PLRadio,
  PLBadge,
  PLTag,
  PLCard,
  PLAvatar,
  PLAvatarGroup,
  PLProgress,
  PLAlert,
  PLTabs,
  PLStat,
  PLTable,
  PLToast,
};

if (typeof window !== "undefined") {
  Object.assign(window, {
    PLButton, PLInput, PLTextarea, PLToggle, PLCheckbox, PLRadio,
    PLBadge, PLTag, PLCard, PLAvatar, PLAvatarGroup, PLProgress,
    PLAlert, PLTabs, PLStat, PLTable, PLToast,
  });
}
