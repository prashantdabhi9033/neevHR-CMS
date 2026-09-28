import { Eyebrow, Paper, VisualStage } from "@/components/visuals/Stage";

// A holiday calendar means the whole year, decided once per location. So the image is a wall calendar of
// FY 2026-27 (Apr 2026 to Mar 2027) as printed paper: twelve mini months with holiday dots for the Pune
// calendar, the Pune and Bengaluru lists side by side where they differ, and the restricted-holiday quota
// (2 a year, both picked). Pune: 5 company-wide + 3 location days = 8 holidays, plus 2 restricted = 10.

type Kind = "all" | "loc" | "rh";
const holidays: { d: string; name: string; kind: Kind }[] = [
  { d: "2026-04-14", name: "Ambedkar Jayanti", kind: "loc" },
  { d: "2026-05-01", name: "Maharashtra Day", kind: "loc" },
  { d: "2026-08-15", name: "Independence Day", kind: "all" },
  { d: "2026-08-28", name: "Raksha Bandhan", kind: "rh" },
  { d: "2026-09-14", name: "Ganesh Chaturthi", kind: "loc" },
  { d: "2026-10-02", name: "Gandhi Jayanti", kind: "all" },
  { d: "2026-10-20", name: "Dussehra", kind: "all" },
  { d: "2026-11-24", name: "Guru Nanak Jayanti", kind: "rh" },
  { d: "2026-12-25", name: "Christmas", kind: "all" },
  { d: "2027-01-26", name: "Republic Day", kind: "all" },
];
const byDate = new Map(holidays.map((h) => [h.d, h]));
const DOT: Record<Kind, string> = { all: "#15147B", loc: "#E88938", rh: "#5B45E8" };

const MONTHS = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
const pad = (n: number) => String(n).padStart(2, "0");

function MiniMonth({ index }: { index: number }) {
  const year = index < 9 ? 2026 : 2027;
  const m = (index + 3) % 12; // 0-based calendar month
  const first = new Date(Date.UTC(year, m, 1)).getUTCDay(); // 0 = Sunday
  const lead = (first + 6) % 7; // Monday-first grid
  const len = new Date(Date.UTC(year, m + 1, 0)).getUTCDate();
  const cells: (number | null)[] = [...Array.from({ length: lead }, () => null), ...Array.from({ length: len }, (_, i) => i + 1)];
  const past = index <= 5; // Apr to Sep 2026 are behind the scene date (28 Sep 2026)
  return (
    <div>
      <p className="mb-1 flex items-baseline justify-between text-[11.5px] font-bold text-ink">
        {MONTHS[index]}
        <span className="text-[10.5px] font-medium text-slate-400">{year}</span>
      </p>
      <div className="grid grid-cols-7 gap-y-[1px] text-center">
        {cells.map((d, i) => {
          if (d === null) return <span key={i} />;
          const h = byDate.get(`${year}-${pad(m + 1)}-${pad(d)}`);
          const weekend = i % 7 >= 5;
          return (
            <span
              key={i}
              className={`tnum mx-auto grid h-[18px] w-[18px] place-items-center rounded-full text-[10.5px] leading-none ${
                h ? "font-bold text-white" : weekend ? "text-slate-300" : past ? "text-slate-400" : "text-slate-600"
              }`}
              style={h ? { background: DOT[h.kind] } : undefined}
            >
              {d}
            </span>
          );
        })}
      </div>
    </div>
  );
}

const pune = [
  ["14 Apr", "Ambedkar Jayanti"],
  ["01 May", "Maharashtra Day"],
  ["14 Sep", "Ganesh Chaturthi"],
];
const blr = [
  ["01 May", "May Day"],
  ["14 Sep", "Ganesh Chaturthi"],
  ["01 Nov", "Kannada Rajyotsava"],
  ["14 Jan", "Makara Sankranti"],
];

function LocList({ title, count, rows, active }: { title: string; count: string; rows: string[][]; active?: boolean }) {
  return (
    <div className={`rounded-xl p-3 ${active ? "bg-white ring-2 ring-[#E88938]" : "bg-white/60 ring-1 ring-slate-200"}`}>
      <p className="text-[12px] font-semibold text-ink">{title}</p>
      <p className="text-[10.5px] text-slate-400">{count}</p>
      <div className="mt-1.5 space-y-1">
        {rows.map(([d, n]) => (
          <p key={d + n} className="flex gap-2 text-[11px] text-slate-600">
            <span className="tnum w-11 shrink-0 font-semibold text-ink">{d}</span>
            {n}
          </p>
        ))}
      </div>
    </div>
  );
}

export function HolidaysVisual() {
  return (
    <VisualStage
      backdrop="cream"
      estHeight={640}
      padding={40}
      label="A NeevHR holiday calendar for FY 2026-27 printed as a wall calendar: twelve months with holidays marked for the Pune location, how the Pune and Bengaluru lists differ, and two of two restricted holidays picked."
    >
      <div className="grid grid-cols-[1fr_204px] gap-5">
        <Paper className="relative px-6 pb-5 pt-7">
          {/* binder rings */}
          <div className="absolute inset-x-0 -top-2 flex justify-center gap-24" aria-hidden>
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-5 w-2.5 rounded-full bg-gradient-to-b from-slate-400 to-slate-600 shadow" />
            ))}
          </div>
          <div className="flex items-end justify-between">
            <div>
              <Eyebrow>Holiday calendar · Pune</Eyebrow>
              <p className="mt-1 text-[22px] font-bold tracking-tight text-ink">FY 2026-27</p>
            </div>
            <div className="flex gap-1.5">
              {["Pune", "Bengaluru", "Ahmedabad", "All locations"].map((l, i) => (
                <span
                  key={l}
                  className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${i === 0 ? "bg-[#15147B] text-white" : "bg-slate-100 text-slate-500"}`}
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-x-7 gap-y-3.5">
            {MONTHS.map((_, i) => (
              <MiniMonth key={i} index={i} />
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 border-t border-slate-100 pt-3 text-[11px] text-slate-600">
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full" style={{ background: DOT.all }} /> Company-wide · 5</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full" style={{ background: DOT.loc }} /> Pune only · 3</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full" style={{ background: DOT.rh }} /> Restricted, picked · 2</span>
          </div>
        </Paper>

        <div className="flex flex-col gap-3">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#5B45E8]">Where the lists differ</p>
          <LocList title="Pune · Maharashtra" count="3 location days" rows={pune} active />
          <LocList title="Bengaluru · Karnataka" count="4 location days" rows={blr} />

          <div className="mt-1 rounded-xl bg-[#15147B] p-3.5 text-white">
            <div className="flex items-baseline justify-between">
              <p className="text-[12px] font-semibold">Restricted holidays</p>
              <p className="tnum text-[18px] font-bold">
                2<span className="text-[12px] font-medium text-[#A9A8E8]"> of 2</span>
              </p>
            </div>
            <div className="mt-2 flex gap-1">
              <span className="h-1.5 flex-1 rounded-full bg-[#E88938]" />
              <span className="h-1.5 flex-1 rounded-full bg-[#E88938]" />
            </div>
            <div className="mt-2.5 space-y-1.5 text-[11px]">
              {[
                ["Raksha Bandhan", "28 Aug 2026 · taken", false],
                ["Guru Nanak Jayanti", "24 Nov 2026 · picked", false],
                ["Good Friday", "26 Mar 2027 · quota full", true],
              ].map(([n, d, off]) => (
                <div key={n as string} className={off ? "text-white/45" : ""}>
                  <p className="font-semibold">{n}</p>
                  <p className={`tnum text-[10.5px] ${off ? "" : "text-[#A9A8E8]"}`}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </VisualStage>
  );
}
