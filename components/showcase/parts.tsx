import type { ReactNode } from "react";

// Building blocks for floater cards (the lifted pieces of a showcase scene). Floaters get their
// emboss / glass surface from ShowcaseStage; these only lay out the content inside it.

export type Tone = "success" | "brand" | "warning" | "error" | "info" | "muted";

const TONE: Record<Tone, { solid: string; soft: string; text: string }> = {
  success: { solid: "#10B981", soft: "#ECFDF5", text: "#047857" },
  brand: { solid: "#5B45E8", soft: "#EEEAFE", text: "#4A34D1" },
  warning: { solid: "#F59E0B", soft: "#FFFBEB", text: "#B45309" },
  error: { solid: "#EF4444", soft: "#FEF2F2", text: "#B91C1C" },
  info: { solid: "#0EA5E9", soft: "#F0F9FF", text: "#0369A1" },
  muted: { solid: "#94A3B8", soft: "#F1F5F9", text: "#475569" },
};

export const toneOf = (t: Tone) => TONE[t];

/** Notification row: round glyph + title + one line. Pair with look: "glass". */
export function Toast({ tone = "success", glyph = "✓", title, sub }: { tone?: Tone; glyph?: string; title: string; sub: string }) {
  const c = TONE[tone];
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-[14px] font-bold text-white" style={{ background: c.solid }}>
        {glyph}
      </span>
      <div className="min-w-0">
        <p className="text-[13px] font-semibold leading-snug text-ink">{title}</p>
        <p className="mt-0.5 text-[11px] leading-snug text-slate-600">{sub}</p>
      </div>
    </div>
  );
}

/** Compact chip: a coloured badge block + title + line. */
export function Chip({ badge, tone = "brand", title, sub }: { badge: string; tone?: Tone; title: string; sub: string }) {
  const c = TONE[tone];
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[11px] font-bold text-white" style={{ background: `linear-gradient(135deg, ${c.solid}, #15147B)` }}>
        {badge}
      </span>
      <div className="min-w-0">
        <p className="text-[13px] font-semibold leading-snug text-ink">{title}</p>
        <p className="mt-0.5 text-[11px] leading-snug text-slate-500">{sub}</p>
      </div>
    </div>
  );
}

/** Standard lifted card: optional eyebrow, title, meta line, optional right tag, then content. */
export function FloatCard({
  eyebrow, title, meta, tag, children,
}: {
  eyebrow?: string; title: string; meta?: string; tag?: ReactNode; children?: ReactNode;
}) {
  return (
    <div className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          {eyebrow && <p className="text-[10.5px] font-semibold uppercase tracking-wider text-[#5B45E8]">{eyebrow}</p>}
          <p className={`${eyebrow ? "mt-1" : ""} text-[15px] font-bold leading-snug text-ink`}>{title}</p>
          {meta && <p className="mt-0.5 text-[11.5px] text-slate-500">{meta}</p>}
        </div>
        {tag}
      </div>
      {children && <div className="mt-3.5">{children}</div>}
    </div>
  );
}

/** Small rounded status tag. */
export function Tag({ tone = "muted", children }: { tone?: Tone; children: ReactNode }) {
  const c = TONE[tone];
  return (
    <span className="shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-[10.5px] font-semibold" style={{ background: c.soft, color: c.text }}>
      {children}
    </span>
  );
}

/** Label / value rows, optionally with a bold total row. */
export function Rows({ rows, total }: { rows: [string, string][]; total?: [string, string] }) {
  return (
    <div className="space-y-1.5 rounded-xl bg-slate-50/80 p-3 ring-1 ring-slate-100">
      {rows.map(([k, v]) => (
        <div key={k} className="flex justify-between gap-3 text-[12px]">
          <span className="text-slate-500">{k}</span>
          <span className="tnum font-medium text-slate-700">{v}</span>
        </div>
      ))}
      {total && (
        <div className="!mt-2.5 flex items-baseline justify-between border-t border-dashed border-slate-200 pt-2.5">
          <span className="text-[12.5px] font-semibold text-ink">{total[0]}</span>
          <span className="tnum text-[18px] font-bold text-ink">{total[1]}</span>
        </div>
      )}
    </div>
  );
}

/** Primary (+ optional secondary) action buttons. */
export function Actions({ primary, secondary, tone = "success" }: { primary: string; secondary?: string; tone?: Tone }) {
  const c = TONE[tone];
  return (
    <div className="mt-3.5 flex items-center gap-2">
      <span
        className="flex-1 rounded-xl py-2 text-center text-[12.5px] font-semibold text-white"
        style={{ background: c.solid, boxShadow: `0 6px 16px -6px ${c.solid}, inset 0 1px 0 rgba(255,255,255,0.35)` }}
      >
        {primary}
      </span>
      {secondary && (
        <span className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-[12.5px] font-semibold text-slate-600">{secondary}</span>
      )}
    </div>
  );
}

/** Initials avatar. */
export function Avatar({ initials, tone = "brand", size = 32 }: { initials: string; tone?: Tone; size?: number }) {
  const c = TONE[tone];
  return (
    <span className="grid shrink-0 place-items-center rounded-full font-semibold" style={{ width: size, height: size, fontSize: size * 0.36, background: c.soft, color: c.text }}>
      {initials}
    </span>
  );
}

/** Big number with a label and an optional delta line. */
export function Metric({ label, value, delta, tone = "success" }: { label: string; value: string; delta?: string; tone?: Tone }) {
  return (
    <div className="px-5 py-4">
      <p className="text-[11.5px] font-medium text-slate-500">{label}</p>
      <p className="tnum mt-1 text-[26px] font-bold leading-none tracking-tight text-ink">{value}</p>
      {delta && <p className="mt-1.5 text-[11.5px] font-semibold" style={{ color: TONE[tone].text }}>{delta}</p>}
    </div>
  );
}

/** Horizontal progress bar. */
export function Bar({ pct, tone = "brand" }: { pct: number; tone?: Tone }) {
  return (
    <div className="h-2 rounded-full bg-slate-100">
      <div className="h-2 rounded-full" style={{ width: `${Math.min(100, pct)}%`, background: TONE[tone].solid }} />
    </div>
  );
}

/** Step tracker (Compute -> Verify -> Approve -> Publish style). `at` = index of the current step. */
export function Steps({ steps, at }: { steps: string[]; at: number }) {
  return (
    <div className="relative flex">
      <span className="absolute top-3 h-0.5 bg-slate-200" style={{ left: `${50 / steps.length}%`, right: `${50 / steps.length}%` }} />
      <span className="absolute top-3 h-0.5 bg-[#10B981]" style={{ left: `${50 / steps.length}%`, width: `${(100 / steps.length) * at}%` }} />
      {steps.map((s, i) => (
        <div key={s} className="relative flex flex-1 flex-col items-center gap-1.5">
          <span
            className={`grid h-6 w-6 place-items-center rounded-full text-[11px] font-bold ${
              i < at ? "bg-[#10B981] text-white" : i === at ? "bg-[#5B45E8] text-white ring-4 ring-[#5B45E8]/20" : "border-2 border-slate-200 bg-white text-slate-400"
            }`}
          >
            {i < at ? "✓" : ""}
          </span>
          <span className={`text-[10.5px] font-medium ${i > at ? "text-slate-400" : "text-slate-700"}`}>{s}</span>
        </div>
      ))}
    </div>
  );
}
