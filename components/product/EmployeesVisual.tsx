import { ProductFrame, StatTile } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Rows, Tag, Toast } from "@/components/showcase/parts";

// Mirrors the product's employee-360 pay progression: a step-line of CTC over time with purple
// promotion pins, beside the effective-dated job & timeline. Lifted pieces: a scheduled promotion
// saved as a dated event, a mass transfer and a PII-safe (CTC-redacted) directory export.
const pts = [
  { yr: "2021", ctc: 6.5, promo: false },
  { yr: "2022", ctc: 7.2, promo: false },
  { yr: "2023", ctc: 9.0, promo: true },
  { yr: "2024", ctc: 9.8, promo: false },
  { yr: "2025", ctc: 12.5, promo: true },
  { yr: "2026", ctc: 13.4, promo: false },
];
const W = 300;
const H = 110;
const maxC = 15;
const stepX = W / (pts.length - 1);
const y = (c: number) => H - (c / maxC) * (H - 12);

// Step path (step-end).
let d = `M 0 ${y(pts[0].ctc)}`;
for (let i = 1; i < pts.length; i++) {
  d += ` L ${i * stepX} ${y(pts[i - 1].ctc)} L ${i * stepX} ${y(pts[i].ctc)}`;
}

// The same events as the chart, newest first: every change is a dated row, never an overwrite.
const timeline = [
  ["01 Apr 2026", "Pay revision", "₹13.4 L"],
  ["01 Apr 2025", "Promoted · Senior Engineer", "₹12.5 L"],
  ["01 Apr 2024", "Pay revision", "₹9.8 L"],
  ["01 Apr 2023", "Promoted · Engineer II", "₹9.0 L"],
  ["01 Apr 2022", "Pay revision", "₹7.2 L"],
  ["05 Jul 2021", "Joined · Engineer", "₹6.5 L"],
];

const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 80 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Effective-dated change" title="Promotion to Lead Engineer" meta="Aditi Rao · effective 01 Oct 2026" tag={<Tag tone="brand">Scheduled</Tag>}>
        <Rows
          rows={[
            ["Grade", "L3 → L4"],
            ["Annual CTC", "₹13.4 L → ₹15.3 L"],
            ["Previous record", "Kept for as-of reports"],
          ]}
          total={["Increase", "+14.2%"]}
        />
        <Actions primary="Save dated event" secondary="History" tone="brand" />
      </FloatCard>
    ),
  },
  {
    width: 280,
    pos: { left: 0, bottom: 22 },
    look: "glass",
    node: <Toast title="Mass transfer applied" sub="12 employees · Pune office from 01 Oct 2026" />,
  },
  {
    width: 270,
    pos: { left: 250, top: 0 },
    node: <Chip badge="CSV" tone="info" title="Directory export ready" sub="201 rows · CTC redacted for your role" />,
  },
];

export function EmployeesVisual() {
  return (
    <ProductFrame
      title="NeevHR · Employee 360 · Aditi Rao"
      floaters={floaters}
      actions={<><WinButton>Bulk actions</WinButton><WinButton primary>Add event</WinButton></>}
    >
      <div className="flex items-center gap-3 rounded-xl border border-line bg-white p-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-sm font-semibold text-white">AR</span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-ink">Aditi Rao</p>
          <p className="text-xs text-muted">Senior Engineer · Engineering · EMP-0142 · joined 05 Jul 2021</p>
        </div>
      </div>
      <Soft className="mt-3 flex gap-1.5 text-[11px] font-medium">
        {["Overview", "Job & timeline", "Compensation", "Statutory & bank", "Documents", "Assets"].map((t) => (
          <span
            key={t}
            className={`rounded-md px-2.5 py-1 ${t === "Job & timeline" ? "bg-brand-tint text-brand" : "text-muted"}`}
          >
            {t}
          </span>
        ))}
      </Soft>

      <div className="mt-3 grid grid-cols-[400px_1fr] gap-6">
        <div className="rounded-xl border border-line bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-ink">Pay & promotion progression</p>
            <span className="tnum text-xs text-muted">₹13.4 LPA</span>
          </div>
          <svg viewBox={`0 0 ${W} ${H + 8}`} className="mt-2 w-full" role="img" aria-label="CTC progression">
            <path d={`${d} L ${W} ${H} L 0 ${H} Z`} fill="var(--color-brand)" opacity={0.06} />
            <path d={d} fill="none" stroke="var(--color-brand)" strokeWidth={2} />
            {pts.map((p, i) => (
              <g key={p.yr}>
                <circle cx={i * stepX} cy={y(p.ctc)} r={3} fill="var(--color-brand)" />
                {p.promo && (
                  <circle cx={i * stepX} cy={y(p.ctc)} r={6} fill="none" stroke="#7c3aed" strokeWidth={2} />
                )}
              </g>
            ))}
          </svg>
          <div className="tnum mt-1 flex justify-between text-[10px] text-muted">
            {pts.map((p) => (
              <span key={p.yr}>{p.yr}</span>
            ))}
          </div>
          <div className="mt-2 flex gap-4 text-[11px] text-muted">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-3 rounded-sm bg-brand" /> CTC
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full border-2 border-[#7c3aed]" /> Promotion
            </span>
          </div>
        </div>

        <Soft strong className="rounded-xl border border-line bg-white p-4">
          <p className="text-sm font-semibold text-ink">Job & timeline</p>
          <ul className="mt-2 space-y-2">
            {timeline.map(([date, what, ctc]) => (
              <li key={date} className="text-[11px]">
                <p className="text-muted">{date}</p>
                <p className="flex justify-between gap-2 font-medium text-ink">
                  <span className="truncate">{what}</span>
                  <span className="tnum">{ctc}</span>
                </p>
              </li>
            ))}
          </ul>
        </Soft>
      </div>

      <Soft className="mt-4 grid grid-cols-3 gap-4">
        <StatTile label="Active headcount" value="201" sub="+4 this month" tone="accent" />
        <StatTile label="Avg tenure" value="3.4 yrs" />
        <StatTile label="Profiles complete" value="96%" />
      </Soft>
    </ProductFrame>
  );
}
