import { Avatar, Card, Paper, VisualStage } from "@/components/visuals/Stage";

// An asset is a physical thing that passes from hand to hand, so the image is the thing and its chain of
// custody on a dotted canvas: the printed asset tag (tag, model, serial) and the custody timeline from the
// asset's own event log (registered, issued, returned needing repair with condition photos, repair out
// and back, reissued), with warranty and book value beside it. Book value: ₹1,80,000 over 3 years
// straight-line = ₹5,000 a month; Mar 2025 to Sep 2026 is 18 months, so ₹1,80,000 - ₹90,000 = ₹90,000.

type Ev = { title: string; date: string; note: string; person?: string; dot: string; photos?: boolean; now?: boolean };

const events: Ev[] = [
  { title: "Registered", date: "18 Mar 2025", note: "Laptop · Apple MacBook Pro 14", dot: "#94A3B8" },
  { title: "Issued", date: "24 Mar 2025", note: "Condition Good", person: "Ishita Gandhi", dot: "#10B981" },
  { title: "Returned · needs repair", date: "02 Sep 2026", note: "Keyboard keys unresponsive · held as damaged", dot: "#EF4444", photos: true },
  { title: "Sent for repair", date: "04 Sep 2026", note: "Authorised service centre · warranty claim", dot: "#F59E0B" },
  { title: "Back from repair", date: "24 Sep 2026", note: "Keyboard replaced · repair cost ₹0", dot: "#0EA5E9" },
  { title: "Issued", date: "28 Sep 2026", note: "Condition Good", person: "Rohan Nair", dot: "#5B45E8", now: true },
];

const AREA_H = 318;
const LINE_Y = 160;
const STEP = 130;
const X0 = 74;

function Tag() {
  return (
    <Paper rotate={-2.5} className="overflow-hidden" style={{ width: 330 }}>
      <div className="flex items-center justify-between bg-[#15147B] px-4 py-2">
        <p className="text-[11px] font-bold tracking-wide text-white">Aikyora Pvt Ltd</p>
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#A9A8E8]">Asset tag</p>
      </div>
      <div className="px-4 pb-4 pt-3">
        <p className="font-mono text-[34px] font-bold leading-none tracking-[0.06em] text-ink">LAP-4471</p>
        <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-dashed border-slate-200 pt-3">
          {[
            ["Model", "MacBook Pro 14"],
            ["Brand", "Apple"],
            ["Serial no.", "C02XK4471"],
            ["Category", "Laptop"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="text-[10.5px] uppercase tracking-wider text-slate-400">{k}</p>
              <p className="font-mono text-[12.5px] font-semibold text-ink">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </Paper>
  );
}

function Now() {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-3">
        <Avatar initials="RN" size={40} />
        <div className="min-w-0 flex-1">
          <p className="text-[11px] text-slate-500">With</p>
          <p className="text-[15px] font-bold text-ink">Rohan Nair</p>
        </div>
        <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-blue-700 ring-1 ring-blue-200">Assigned</span>
        <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">Good</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-slate-100 pt-4">
        <div>
          <p className="text-[10.5px] uppercase tracking-wider text-slate-400">Warranty</p>
          <p className="mt-0.5 text-[12.5px] font-semibold text-emerald-600">In warranty</p>
          <p className="tnum text-[11px] text-slate-500">till 17 Mar 2028</p>
        </div>
        <div>
          <p className="text-[10.5px] uppercase tracking-wider text-slate-400">Cost</p>
          <p className="tnum mt-0.5 text-[12.5px] font-semibold text-ink">₹1,80,000</p>
          <p className="text-[11px] text-slate-500">3 yrs · straight-line</p>
        </div>
        <div>
          <p className="text-[10.5px] uppercase tracking-wider text-slate-400">Book value</p>
          <p className="tnum mt-0.5 text-[18px] font-bold leading-tight text-[#15147B]">₹90,000</p>
          <p className="tnum text-[11px] text-slate-500">after 18 months</p>
        </div>
      </div>
      <p className="tnum mt-3 text-[11px] text-slate-500">Lifetime repair cost ₹0 · 1 repair under warranty</p>
    </Card>
  );
}

function Photo({ tilt }: { tilt: number }) {
  return (
    <span
      className="grid h-9 w-11 place-items-center rounded-md bg-slate-700 ring-2 ring-white"
      style={{ transform: `rotate(${tilt}deg)` }}
      aria-hidden
    >
      <svg width="30" height="18" viewBox="0 0 30 18">
        {Array.from({ length: 3 }).map((_, r) =>
          Array.from({ length: 6 }).map((__, c) => (
            <rect key={`${r}-${c}`} x={1 + c * 4.8} y={2 + r * 5} width="3.8" height="3.8" rx="0.8" fill={r === 1 && c === 3 ? "#EF4444" : "#CBD5E1"} />
          )),
        )}
      </svg>
    </span>
  );
}

function Chain() {
  const last = X0 + (events.length - 1) * STEP;
  return (
    <div className="relative" style={{ height: AREA_H }}>
      <svg className="absolute inset-0" width="800" height={AREA_H} aria-hidden>
        <line x1={X0} x2={last} y1={LINE_Y} y2={LINE_Y} stroke="#CBD5E1" strokeWidth="2" />
        <line x1={last} x2={last + 44} y1={LINE_Y} y2={LINE_Y} stroke="#5B45E8" strokeWidth="3" strokeDasharray="4 5" />
      </svg>
      {events.map((e, i) => {
        const x = X0 + i * STEP;
        const up = i % 2 === 0;
        return (
          <div key={i}>
            <span
              className={`absolute grid place-items-center rounded-full ring-4 ring-white ${e.now ? "h-5 w-5" : "h-3.5 w-3.5"}`}
              style={{ left: x, top: LINE_Y, transform: "translate(-50%, -50%)", background: e.dot }}
            />
            <span
              className="absolute w-px bg-slate-300"
              style={{ left: x, top: up ? LINE_Y - 18 : LINE_Y + 8, height: 10 }}
            />
            <div
              className={`absolute rounded-xl border bg-white px-3 py-2.5 shadow-[0_10px_24px_-16px_rgba(21,20,123,0.5)] ${
                e.now ? "border-[#5B45E8] ring-4 ring-[#5B45E8]/15" : "border-slate-200"
              }`}
              style={{ left: x - 72, width: 144, ...(up ? { bottom: AREA_H - LINE_Y + 18 } : { top: LINE_Y + 18 }) }}
            >
              <p className="tnum text-[10.5px] font-semibold text-slate-400">{e.date}</p>
              <p className="text-[12px] font-bold leading-snug text-ink">{e.title}</p>
              {e.person && (
                <p className="mt-1 flex items-center gap-1.5 text-[11.5px] font-semibold text-ink">
                  <Avatar initials={e.person.split(" ").map((w) => w[0]).join("")} size={18} />
                  {e.person}
                </p>
              )}
              <p className="mt-0.5 text-[11px] leading-snug text-slate-500">{e.note}</p>
              {e.photos && (
                <div className="mt-2 flex items-center gap-1">
                  <Photo tilt={-4} />
                  <Photo tilt={3} />
                  <span className="ml-1 text-[10.5px] text-slate-400">2 photos</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function AssetsVisual() {
  return (
    <VisualStage
      width={880}
      estHeight={620}
      backdrop="canvas"
      label="A NeevHR asset tag for laptop LAP-4471 and its custody timeline from registration through issue, a repair return with condition photos, repair and reissue, with warranty and book value."
    >
      <div className="grid grid-cols-[360px_1fr] items-center gap-6">
        <div className="pl-3">
          <Tag />
        </div>
        <Now />
      </div>
      <p className="mt-8 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#5B45E8]">Custody history · LAP-4471</p>
      <div className="mt-2">
        <Chain />
      </div>
    </VisualStage>
  );
}
