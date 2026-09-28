import { Avatar, Card, Eyebrow, VisualStage } from "@/components/visuals/Stage";

// Positions MEANS approved seats that exist whether or not someone sits in them. So the image is a seat
// map: each department a block of seats (filled, on notice, open, frozen), budgeted vs filled on each
// block, and a zoom on one row of Sales where a vacant seat is linked to the requisition hiring for it.
// 216 seats = Eng 86 + Ops 64 + Sales 55 + Support 11; filled 79+59+52+11 = 201 (6 on notice);
// open 6+3+3+0 = 12; frozen 1+2+0+0 = 3. Vacancy 12 / 216 = 5.6%.

type Seat = "filled" | "notice" | "open" | "frozen";

const depts = [
  { name: "Engineering", filled: 79, notice: 2, open: 6, frozen: 1 },
  { name: "Sales", filled: 52, notice: 2, open: 3, frozen: 0 },
  { name: "Support", filled: 11, notice: 1, open: 0, frozen: 0 },
  { name: "Operations", filled: 59, notice: 1, open: 3, frozen: 2 },
];

const COLS = 12;
const S = 15;
const GAP = 3;

function seatsOf(d: (typeof depts)[number]): Seat[] {
  // On-notice seats are filled seats; they sit just before the vacancies so the row reads as a forecast.
  return [
    ...Array<Seat>(d.filled - d.notice).fill("filled"),
    ...Array<Seat>(d.notice).fill("notice"),
    ...Array<Seat>(d.open).fill("open"),
    ...Array<Seat>(d.frozen).fill("frozen"),
  ];
}

function SeatSquare({ s }: { s: Seat }) {
  const base = "block rounded-[4px]";
  if (s === "filled") return <span className={`${base} bg-[#15147B]`} style={{ width: S, height: S }} />;
  if (s === "notice") return <span className={`${base} bg-[#F59E0B]`} style={{ width: S, height: S }} />;
  if (s === "open") return <span className={`${base} border-[1.5px] border-dashed border-[#10B981] bg-white`} style={{ width: S, height: S }} />;
  return (
    <span
      className={`${base} bg-slate-200`}
      style={{
        width: S,
        height: S,
        backgroundImage: "repeating-linear-gradient(45deg, rgba(100,116,139,0.45) 0 2px, transparent 2px 5px)",
      }}
    />
  );
}

function DeptBlock({ d, lens }: { d: (typeof depts)[number]; lens?: [number, number] }) {
  const seats = seatsOf(d);
  const total = seats.length;
  const lensRow = lens ? Math.floor(lens[0] / COLS) : -1;
  return (
    <Card className="p-4">
      <div className="flex items-baseline justify-between">
        <p className="text-[13.5px] font-semibold text-ink">{d.name}</p>
        <p className="tnum text-[12px] text-slate-500">
          <b className="text-ink">{d.filled}</b> / {total} seats filled
        </p>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-[#15147B]" style={{ width: `${(d.filled / total) * 100}%` }} />
      </div>
      <div className="relative mt-3 grid" style={{ gridTemplateColumns: `repeat(${COLS}, ${S}px)`, gap: GAP }}>
        {seats.map((s, i) => (
          <SeatSquare key={i} s={s} />
        ))}
        {lens && (
          <span
            className="pointer-events-none absolute rounded-md border-2 border-[#5B45E8] bg-[#5B45E8]/5"
            style={{
              left: (lens[0] % COLS) * (S + GAP) - 4,
              top: lensRow * (S + GAP) - 4,
              width: (lens[1] - lens[0] + 1) * (S + GAP) - GAP + 8,
              height: S + 8,
            }}
          />
        )}
      </div>
      <p className="tnum mt-2.5 text-[10.5px] text-slate-500">
        {d.notice} on notice · {d.open} open{d.frozen ? ` · ${d.frozen} frozen` : ""}
      </p>
    </Card>
  );
}

// The zoomed Sales row: seats 49 to 54 of the Sales block.
const zoom: { code: string; who?: string; initials?: string; state: Seat; note: string }[] = [
  { code: "POS-0181", who: "Anjali Deshmukh", initials: "AD", state: "filled", note: "Filled" },
  { code: "POS-0182", who: "Rohan Nair", initials: "RN", state: "notice", note: "LWD 31 Oct" },
  { code: "POS-0183", who: "Karan Malhotra", initials: "KM", state: "notice", note: "LWD 14 Nov" },
  { code: "POS-0187", state: "open", note: "Hiring" },
  { code: "POS-0188", state: "open", note: "Open" },
  { code: "POS-0189", state: "open", note: "Open" },
];

function ZoomSeat({ z }: { z: (typeof zoom)[number] }) {
  const linked = z.code === "POS-0187";
  return (
    <div className="flex flex-col items-center">
      <div
        className={`grid h-[58px] w-[62px] place-items-center rounded-xl ${
          z.state === "open"
            ? `border-2 border-dashed ${linked ? "border-[#5B45E8] bg-[#F4F3FE]" : "border-[#10B981]/70 bg-white"}`
            : z.state === "notice"
              ? "bg-[#FFF7E6] ring-2 ring-[#F59E0B]"
              : "bg-[#F4F3FE]"
        }`}
      >
        {z.initials ? (
          <Avatar initials={z.initials} size={30} />
        ) : (
          <span className={`text-[10.5px] font-semibold ${linked ? "text-[#4A34D1]" : "text-[#047857]"}`}>Vacant</span>
        )}
      </div>
      <p className="tnum mt-1 text-[10.5px] font-semibold text-ink">{z.code}</p>
      <p className={`text-[10.5px] ${z.state === "notice" ? "text-[#B45309]" : "text-slate-500"}`}>{z.note}</p>
    </div>
  );
}

export function PositionsVisual() {
  const [eng, sales, support, ops] = depts;
  return (
    <VisualStage
      width={880}
      estHeight={640}
      backdrop="canvas"
      label="A NeevHR seat map of 216 approved positions by department, showing filled, on-notice, open and frozen seats, with one vacant Sales seat linked to the requisition hiring for it."
    >
      <div className="flex items-end justify-between">
        <div>
          <Eyebrow>Establishment · Aikyora Pvt Ltd</Eyebrow>
          <p className="mt-1 text-[20px] font-bold tracking-tight text-ink">216 approved seats</p>
          <p className="tnum text-[12px] text-slate-500">201 filled · 12 open · 3 frozen · vacancy 5.6%</p>
        </div>
        <div className="flex gap-4 text-[11px] text-slate-600">
          {(
            [
              ["filled", "Filled"],
              ["notice", "On notice"],
              ["open", "Open"],
              ["frozen", "Frozen"],
            ] as [Seat, string][]
          ).map(([s, l]) => (
            <span key={s} className="flex items-center gap-1.5">
              <SeatSquare s={s} />
              {l}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-[252px_252px_1fr] gap-5">
        <div className="flex flex-col gap-5">
          <DeptBlock d={eng} />
          <DeptBlock d={support} />
          <Card className="p-4">
            <p className="text-[12.5px] font-semibold text-ink">Seat states</p>
            <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[10.5px] font-semibold">
              {[
                ["Open", "bg-emerald-50 text-emerald-700"],
                ["Filled", "bg-[#EEEAFE] text-[#4A34D1]"],
                ["On notice", "bg-amber-50 text-amber-800"],
                ["Frozen", "bg-slate-100 text-slate-600"],
                ["Closed", "bg-slate-100 text-slate-500"],
              ].map(([l, c]) => (
                <span key={l} className={`rounded px-1.5 py-0.5 ${c}`}>
                  {l}
                </span>
              ))}
            </div>
            <p className="mt-2 text-[10.5px] leading-snug text-slate-500">Freeze puts an open seat on budget hold; unfreeze reopens it.</p>
          </Card>
        </div>
        <div className="flex flex-col gap-5">
          <DeptBlock d={sales} lens={[49, 54]} />
          <DeptBlock d={ops} />
        </div>

        <div className="relative">
          {/* Leader from the lens on the Sales block into the zoomed row. */}
          <svg className="absolute -left-5 top-[120px]" width={26} height={40} viewBox="0 0 26 40" fill="none" aria-hidden>
            <path d="M0 20 H26" stroke="#5B45E8" strokeWidth={2} strokeDasharray="3 3" />
            <circle cx={23} cy={20} r={3} fill="#5B45E8" />
          </svg>
          <Card className="mt-[40px] p-4">
            <p className="text-[12.5px] font-semibold text-ink">Sales · last row</p>
            <p className="text-[10.5px] text-slate-500">Budgeted seat by seat, whoever holds it</p>
            <div className="mt-3 grid grid-cols-3 gap-x-2 gap-y-3">
              {zoom.map((z) => (
                <ZoomSeat key={z.code} z={z} />
              ))}
            </div>
          </Card>

          <div className="flex justify-center py-1.5">
            <svg width={20} height={30} viewBox="0 0 20 30" fill="none" aria-hidden>
              <path d="M10 0 V26" stroke="#5B45E8" strokeWidth={2} strokeDasharray="3 3" />
              <path d="M5 21 L10 27 L15 21" stroke="#5B45E8" strokeWidth={2} />
            </svg>
          </div>

          <Card className="p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-[#5B45E8]">Requisition #4C19A2</p>
                <p className="mt-0.5 text-[13.5px] font-semibold text-ink">Sales Executive</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10.5px] font-semibold text-emerald-700">Approved</span>
            </div>
            <div className="mt-2.5 space-y-1.5 text-[11.5px]">
              {[
                ["Seat", "POS-0187 · 1.00 FTE"],
                ["Budget", "₹7,20,000 / yr"],
                ["Location", "Pune · 1 opening"],
                ["Pipeline", "9 candidates"],
              ].map(([k, v]) => (
                <p key={k} className="flex justify-between gap-2">
                  <span className="text-slate-500">{k}</span>
                  <span className="tnum font-medium text-ink">{v}</span>
                </p>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </VisualStage>
  );
}
