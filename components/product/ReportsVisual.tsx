import { ProductFrame } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Avatar, Chip, FloatCard, Tag, Toast, type Tone } from "@/components/showcase/parts";

// Designed report-builder mock: headcount by department as a donut, with the report catalog behind.
// Lifted pieces: the drill-down from the Sales slice to its 40 records, a password-protected PDF export,
// and the builder's five datasets. 201 employees: 81 + 50 + 40 + 30.
const segs = [
  { label: "Engineering", n: 81, color: "var(--color-brand)" },
  { label: "Operations", n: 50, color: "var(--color-brand-soft)" },
  { label: "Sales", n: 40, color: "var(--color-success)" },
  { label: "Support", n: 30, color: "#f59e0b" },
];
const TOTAL = segs.reduce((a, s) => a + s.n, 0);
const SELECTED = "Sales";
const C = 2 * Math.PI * 40;
let acc = 0;
const arcs = segs.map((s) => {
  const len = (s.n / TOTAL) * C;
  const arc = { ...s, dash: `${len} ${C - len}`, offset: -acc };
  acc += len;
  return arc;
});

const drill: { name: string; initials: string; role: string; city: string; tone: Tone }[] = [
  { name: "Rohan Desai", initials: "RD", role: "Regional Sales Head", city: "Mumbai", tone: "brand" },
  { name: "Neha Agarwal", initials: "NA", role: "Account Manager", city: "Pune", tone: "success" },
  { name: "Siddharth Bhatt", initials: "SB", role: "Sales Executive", city: "Ahmedabad", tone: "warning" },
];

const catalog = [
  { name: "Headcount & cost", mod: "Employees" },
  { name: "Salary register", mod: "Payroll" },
  { name: "Leave balances", mod: "Leave" },
  { name: "Expense claims by category", mod: "Expenses" },
  { name: "Asset register", mod: "Assets" },
];

const floaters: Floater[] = [
  {
    width: 300,
    pos: { right: 0, top: 150 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Drill-down · Sales slice" title="40 employees" meta="Employees dataset · as of 28 Sep 2026" tag={<Tag tone="success">20%</Tag>}>
        <div className="space-y-2 rounded-xl bg-slate-50/80 p-3 ring-1 ring-slate-100">
          {drill.map((p) => (
            <div key={p.name} className="flex items-center gap-2.5">
              <Avatar initials={p.initials} tone={p.tone} size={28} />
              <div className="min-w-0">
                <p className="truncate text-[12px] font-semibold text-ink">{p.name}</p>
                <p className="truncate text-[10.5px] text-slate-500">{p.role} · {p.city}</p>
              </div>
            </div>
          ))}
          <p className="pt-0.5 text-[11px] font-medium text-slate-500">+ 37 more records</p>
        </div>
        <Actions primary="Export to Excel" secondary="Open list" tone="brand" />
      </FloatCard>
    ),
  },
  {
    width: 280,
    pos: { left: 0, bottom: 24 },
    look: "glass",
    node: <Toast tone="brand" glyph="↓" title="PDF exported" sub="Password-protected · Headcount" />,
  },
  {
    width: 280,
    pos: { left: 250, top: 0 },
    node: <Chip badge="5" title="Employee · leave · payroll" sub="expense · asset datasets" />,
  },
];

export function ReportsVisual() {
  return (
    <ProductFrame title="NeevHR · Reports · Custom report builder" floaters={floaters} actions={<><WinButton>Save view</WinButton><WinButton primary>Export</WinButton></>}>
      <div className="mb-4 flex flex-wrap gap-2">
        {["Dataset: Employees", "Group by: Department", "Metric: Headcount", "Chart: Donut"].map((t) => (
          <span key={t} className="rounded-lg bg-brand-tint px-2.5 py-1 text-[11px] font-medium text-brand">
            {t}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-[1.15fr_1fr] gap-4">
        <div className="rounded-xl border border-line bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-ink">Headcount by department</p>
            <span className="tnum text-xs text-muted">{TOTAL} employees</span>
          </div>
          <div className="relative mx-auto mt-4 h-44 w-44">
            <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90" role="img" aria-label="Headcount by department donut">
              {arcs.map((a) => (
                <circle
                  key={a.label}
                  cx="50" cy="50" r="40"
                  fill="none"
                  stroke={a.color}
                  strokeWidth={a.label === SELECTED ? 17 : 13}
                  opacity={a.label === SELECTED ? 1 : 0.85}
                  strokeDasharray={a.dash}
                  strokeDashoffset={a.offset}
                />
              ))}
            </svg>
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <p className="tnum text-[22px] font-bold leading-none text-ink">{TOTAL}</p>
                <p className="mt-1 text-[10px] text-muted">Headcount</p>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-1.5">
            {segs.map((s) => (
              <div
                key={s.label}
                className={`flex items-center justify-between rounded-md px-2 py-1 text-[12.5px] ${s.label === SELECTED ? "bg-success-tint" : ""}`}
              >
                <span className="flex items-center gap-2 text-body">
                  <span className="h-2.5 w-2.5 rounded-sm" style={{ background: s.color }} />
                  {s.label}
                </span>
                <span className="tnum font-semibold text-ink">
                  {s.n} <span className="font-medium text-muted">· {Math.round((s.n / TOTAL) * 100)}%</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <Soft className="rounded-xl border border-line bg-white p-4">
          <p className="text-sm font-semibold text-ink">Report catalog</p>
          <div className="mt-3 divide-y divide-line">
            {catalog.map((c) => (
              <div key={c.name} className="flex items-center justify-between py-2.5 text-[12px]">
                <span className="font-medium text-ink">{c.name}</span>
                <span className="rounded-md bg-surface-soft px-1.5 py-0.5 text-[10px] font-semibold text-muted">{c.mod}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-muted">Every list becomes a report; click any slice to drill to the records.</p>
        </Soft>
      </div>
    </ProductFrame>
  );
}
