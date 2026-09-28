import type { CSSProperties } from "react";
import { Avatar, Card, VisualStage } from "@/components/visuals/Stage";

// Recruitment means candidates MOVING through stages, so the image is the pipeline board itself on a
// dotted canvas: the product's five columns (Applied, Screening, Interview, Offer, Joined) with real
// card content (requisition, source, match score, days in stage), one card mid-drag from Applied into
// Screening (the board's own first-class move) and the panel's scorecard opened from an Interview card.
// Column counts: 48 + 19 + 7 + 2 + 1 = 77 active candidates across 3 open requisitions.

type Cand = { name: string; req: string; source: string; score: number; days: number };

const COL_W = 172;
const COL_GAP = 15;
const COL_H = 480;

const columns: { name: string; accent: string; count: number; cards: Cand[] }[] = [
  {
    name: "Applied",
    accent: "#94A3B8",
    count: 48,
    cards: [
      { name: "Aditya Kulkarni", req: "Senior Engineer", source: "Naukri", score: 82, days: 2 },
      { name: "Ritu Sharma", req: "Payroll Executive", source: "LinkedIn", score: 64, days: 1 },
      { name: "Manish Patel", req: "Sales Manager (West)", source: "Walk-in", score: 38, days: 3 },
      { name: "Zoya Siddiqui", req: "Senior Engineer", source: "Campus", score: 71, days: 0 },
    ],
  },
  {
    name: "Screening",
    accent: "#0EA5E9",
    count: 19,
    cards: [
      { name: "Vikas Nair", req: "Sales Manager (West)", source: "Referral", score: 76, days: 4 },
      { name: "Tanvi Deshmukh", req: "Payroll Executive", source: "Naukri", score: 58, days: 9 },
    ],
  },
  {
    name: "Interview",
    accent: "#5B45E8",
    count: 7,
    cards: [
      { name: "Karan Verma", req: "Senior Engineer", source: "Referral", score: 74, days: 5 },
      { name: "Sneha Gupta", req: "Sales Manager (West)", source: "LinkedIn", score: 88, days: 3 },
    ],
  },
  {
    name: "Offer",
    accent: "#F59E0B",
    count: 2,
    cards: [
      { name: "Neel Mishra", req: "Sales Manager (West)", source: "Agency", score: 91, days: 2 },
      { name: "Farhan Qureshi", req: "Senior Engineer", source: "Naukri", score: 79, days: 1 },
    ],
  },
  {
    name: "Joined",
    accent: "#10B981",
    count: 1,
    cards: [{ name: "Priya Chauhan", req: "Payroll Executive", source: "Referral", score: 85, days: 6 }],
  },
];

function scoreTone(p: number) {
  if (p >= 70) return "bg-emerald-50 text-emerald-700 ring-emerald-200";
  if (p >= 40) return "bg-amber-50 text-amber-700 ring-amber-200";
  return "bg-red-50 text-red-600 ring-red-200";
}

function CandCard({ c, ghost = false, className = "", style }: { c: Cand; ghost?: boolean; className?: string; style?: CSSProperties }) {
  const stalled = c.days >= 7;
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.05)] ${ghost ? "opacity-45" : ""} ${className}`}
      style={style}
    >
      <p className="truncate text-[12.5px] font-semibold text-ink">{c.name}</p>
      <p className="truncate text-[11px] text-slate-500">{c.req}</p>
      <div className="mt-2 flex items-center gap-1.5">
        <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10.5px] font-medium text-slate-600">{c.source}</span>
        <span className={`tnum rounded-md px-1.5 py-0.5 text-[10.5px] font-semibold ring-1 ${scoreTone(c.score)}`}>{c.score}%</span>
        <span className={`tnum ml-auto flex items-center gap-1 text-[11px] ${stalled ? "font-semibold text-red-600" : "text-slate-400"}`}>
          {stalled && (
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
              <circle cx="6" cy="6.5" r="4.6" stroke="currentColor" strokeWidth="1.4" />
              <path d="M6 4v2.6l1.6 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          )}
          {c.days}d
        </span>
      </div>
    </div>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <span className="flex gap-[2px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="10" height="10" viewBox="0 0 10 10" aria-hidden>
          <path
            d="M5 .6l1.3 2.8 3 .3-2.3 2 .7 3L5 7.2 2.3 8.7l.7-3-2.3-2 3-.3z"
            fill={i < n ? "#F59E0B" : "#E2E8F0"}
          />
        </svg>
      ))}
    </span>
  );
}

function Header() {
  return (
    <div className="flex items-center gap-3">
      <div className="mr-auto">
        <p className="text-[19px] font-bold tracking-tight text-ink">Hiring pipeline</p>
        <p className="text-[12px] text-slate-500">77 active candidates · 3 open requisitions · Aikyora Pvt Ltd</p>
      </div>
      <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[12px] text-slate-600">
        Requisition <b className="font-semibold text-ink">All open</b>
      </span>
      <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[12px] text-slate-600">
        Source <b className="font-semibold text-ink">All</b>
      </span>
      <span className="flex rounded-lg bg-slate-200/70 p-0.5 text-[12px] font-semibold">
        <span className="rounded-md px-3 py-1 text-slate-500">Table</span>
        <span className="rounded-md bg-white px-3 py-1 text-ink shadow-sm">Board</span>
      </span>
    </div>
  );
}

export function RecruitmentVisual() {
  const dragged = columns[0].cards[0];
  return (
    <VisualStage
      width={1000}
      estHeight={640}
      backdrop="canvas"
      label="A NeevHR recruitment pipeline board with Applied, Screening, Interview, Offer and Joined columns, a candidate being dragged into Screening and an interview scorecard."
    >
      <Header />

      <div className="relative mt-5" style={{ height: COL_H }}>
        <div className="flex" style={{ gap: COL_GAP }}>
          {columns.map((col, ci) => {
            const over = ci === 1;
            return (
              <div
                key={col.name}
                className={`relative overflow-hidden rounded-2xl p-2 ${
                  over ? "border-[1.5px] border-dashed border-[#5B45E8] bg-[#EEEAFE]/70" : "border border-slate-200 bg-white/70"
                }`}
                style={{ width: COL_W, height: COL_H }}
              >
                <div className="flex items-center justify-between px-1.5 pb-2 pt-1">
                  <span className="flex items-center gap-1.5 text-[12.5px] font-semibold text-ink">
                    <span className="h-2 w-2 rounded-[3px]" style={{ background: col.accent }} />
                    {col.name}
                  </span>
                  <span className="tnum rounded-md border border-slate-200 bg-white px-1.5 text-[11px] font-semibold text-slate-600">{col.count}</span>
                </div>
                <div className="flex flex-col gap-2">
                  {col.cards.map((c, i) => (
                    <CandCard key={c.name} c={c} ghost={ci === 0 && i === 0} />
                  ))}
                  {over && (
                    <div className="grid h-[70px] place-items-center rounded-xl border-[1.5px] border-dashed border-[#5B45E8]/50 text-[11px] font-semibold text-[#4A34D1]">
                      Drop to move to Screening
                    </div>
                  )}
                </div>
                {col.count > col.cards.length && (
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F7F7FB] to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        {/* The card being dragged: lifted, tilted, on its way from Applied to Screening. */}
        <div className="absolute" style={{ left: 150, top: 238, width: 160 }}>
          <CandCard
            c={dragged}
            className="border-[#5B45E8]/40"
            style={{
              transform: "rotate(-5deg)",
              boxShadow: "0 26px 40px -16px rgba(21,20,123,0.45), 0 4px 10px rgba(21,20,123,0.12)",
            }}
          />
          <svg className="absolute -bottom-4 right-3" width="20" height="22" viewBox="0 0 20 22" aria-hidden>
            <path d="M3 2l13 9.5-6 .8 3.2 6.6-2.6 1.2-3.2-6.6L3 17.5z" fill="#24242B" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Panel scorecard opened from Sneha's Interview card. */}
        <svg className="absolute" style={{ left: 2 * (COL_W + COL_GAP) + 86, top: 196 }} width="2" height="22" aria-hidden>
          <line x1="1" y1="0" x2="1" y2="22" stroke="#5B45E8" strokeWidth="1.5" strokeDasharray="3 4" />
        </svg>
        <Card className="absolute p-4" style={{ left: 2 * (COL_W + COL_GAP) - 20, top: 218, width: 300 }}>
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#5B45E8]">Round 2 · Functional</p>
              <p className="mt-0.5 text-[14px] font-bold text-ink">Sneha Gupta</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">Strong yes</span>
          </div>
          <div className="mt-2.5 flex items-center gap-2.5">
            <Avatar initials="RD" size={26} />
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-semibold text-ink">Rohan Desai</p>
              <p className="text-[10.5px] text-slate-500">Interviewer · 26 Sep 2026</p>
            </div>
            <Stars n={5} />
          </div>
          <div className="mt-2.5 space-y-1 rounded-xl bg-slate-50 px-3 py-2.5 ring-1 ring-slate-100">
            {[
              ["Technical", 4],
              ["Communication", 5],
              ["Problem solving", 4],
              ["Team fit", 5],
            ].map(([k, n]) => (
              <div key={k} className="flex items-center justify-between text-[11.5px] text-slate-600">
                <span>{k}</span>
                <Stars n={n as number} />
              </div>
            ))}
          </div>
          <p className="mt-2 text-[11.5px] leading-snug text-slate-600">
            <b className="font-semibold text-ink">Strengths:</b> Owns a ₹4 Cr West territory; strong channel-partner plan.
          </p>
        </Card>
      </div>
    </VisualStage>
  );
}
