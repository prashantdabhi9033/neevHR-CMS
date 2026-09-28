import type { ReactNode } from "react";
import { Avatar, Card, Eyebrow, Paper, VisualStage } from "@/components/visuals/Stage";

// Exit MEANS many teams closing their part of one person's departure, in parallel, against a clock. So
// the image is a swimlane chart: resignation and notice to the last working day, the approval chain, and
// one lane per clearance (IT, Finance, the manager's handover, HR & admin) ticking off, then the F&F and
// the relieving and experience letters after the LWD. Vikram Shah: resigned 29 Aug 2026, 60 days' notice
// (due 28 Oct), released 20 Oct = 52 days served, 8 short. Net F&F ₹1,64,233 (see the F&F visual).

// Time axis: 25 Aug to 30 Oct 2026 across the track.
const TRACK = 356;
const DAYS = 66;
const px = (dayFrom25Aug: number) => (dayFrom25Aug / DAYS) * TRACK;
const D = {
  resigned: 4, // 29 Aug
  mgr: 7, // 01 Sep
  head: 8, // 02 Sep
  hr: 9, // 03 Sep
  dispatch: 49, // 13 Oct
  fin: 51, // 15 Oct
  handover: 53, // 17 Oct
  lwd: 56, // 20 Oct
  due: 64, // 28 Oct
};
const ticks = [
  { d: 7, l: "01 Sep" },
  { d: 21, l: "15 Sep" },
  { d: 37, l: "01 Oct" },
  { d: 51, l: "15 Oct" },
];

const LANE_H = 54;

function Lane({ label, owner, children }: { label: string; owner: string; children: ReactNode }) {
  return (
    <div className="flex border-t border-emerald-900/[0.07]" style={{ height: LANE_H }}>
      <div className="flex w-[142px] shrink-0 flex-col justify-center pr-3">
        <p className="text-[12px] font-semibold leading-tight text-ink">{label}</p>
        <p className="text-[10.5px] text-slate-500">{owner}</p>
      </div>
      <div className="relative" style={{ width: TRACK }}>
        {children}
      </div>
    </div>
  );
}

function Bar({ from, to, done = true, label }: { from: number; to: number; done?: boolean; label: string }) {
  return (
    <>
      <span
        className="absolute text-right text-[10.5px] leading-tight text-slate-600"
        style={{ right: TRACK - px(from) + 8, top: LANE_H / 2 - 7, whiteSpace: "nowrap" }}
      >
        {label}
      </span>
      <span
        className={`absolute h-3 rounded-full ${done ? "bg-[#10B981]" : "bg-[#E88938]"}`}
        style={{ left: px(from), width: px(to) - px(from), top: LANE_H / 2 - 6 }}
      />
      <span
        className="absolute grid h-[18px] w-[18px] place-items-center rounded-full bg-[#10B981] text-[10px] font-bold text-white ring-2 ring-white"
        style={{ left: px(to) - 9, top: LANE_H / 2 - 9 }}
      >
        ✓
      </span>
    </>
  );
}

export function ExitVisual() {
  return (
    <VisualStage
      width={880}
      estHeight={640}
      backdrop="mint"
      label="A NeevHR exit shown as swimlanes: resignation and notice to the last working day, approvals, parallel IT, finance, manager handover and HR clearances, then full and final settlement and relieving and experience letters."
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <Avatar initials="VS" size={48} ring />
          <div>
            <Eyebrow>Separation · resignation</Eyebrow>
            <p className="mt-0.5 text-[18px] font-bold tracking-tight text-ink">Vikram Shah</p>
            <p className="text-[12px] text-slate-500">Regional Sales Manager · Sales · EMP-0087</p>
          </div>
        </div>
        <div className="flex gap-2.5">
          {[
            ["Notice", "60 days"],
            ["Served", "52 days"],
            ["LWD", "20 Oct 2026"],
            ["Clearances", "4 / 4"],
          ].map(([k, v]) => (
            <Card key={k} className="px-3.5 py-2">
              <p className="text-[10.5px] text-slate-500">{k}</p>
              <p className="tnum text-[13.5px] font-semibold text-ink">{v}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-start gap-6">
        <Card className="px-5 pb-3 pt-4">
          {/* axis */}
          <div className="flex">
            <div className="w-[142px] shrink-0" />
            <div className="relative h-6" style={{ width: TRACK }}>
              {ticks.map((t) => (
                <span key={t.l} className="tnum absolute -translate-x-1/2 text-[10.5px] text-slate-400" style={{ left: px(t.d) }}>
                  {t.l}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* gridlines, dispatch line and LWD line across all lanes */}
            <div className="pointer-events-none absolute inset-y-0 left-[142px]" style={{ width: TRACK }}>
              {ticks.map((t) => (
                <span key={t.l} className="absolute inset-y-0 w-px bg-emerald-900/[0.06]" style={{ left: px(t.d) }} />
              ))}
              <span className="absolute w-0 border-l-2 border-dashed border-[#5B45E8]/50" style={{ left: px(D.dispatch), top: LANE_H * 2, bottom: 0 }} />
              <span className="absolute inset-y-0 w-[2px] bg-[#15147B]" style={{ left: px(D.lwd) }} />
            </div>

            <Lane label="Resignation & notice" owner="Employee">
              <span className="absolute h-3 w-3 rotate-45 bg-[#15147B]" style={{ left: px(D.resigned) - 6, top: LANE_H / 2 - 6 }} />
              <span
                className="absolute h-3 rounded-full bg-[#15147B]/80"
                style={{ left: px(D.resigned), width: px(D.lwd) - px(D.resigned), top: LANE_H / 2 - 6 }}
              />
              <span
                className="absolute h-3 rounded-r-full border-2 border-dashed border-[#E88938] bg-[#FFF4EA]"
                style={{ left: px(D.lwd), width: px(D.due) - px(D.lwd), top: LANE_H / 2 - 6 }}
              />
              <span className="absolute text-[10.5px] font-semibold text-white" style={{ left: px(D.resigned) + 10, top: LANE_H / 2 - 7 }}>
                Resigned 29 Aug · notice served
              </span>
              <span className="tnum absolute whitespace-nowrap text-[10.5px] text-[#B45309]" style={{ right: TRACK - px(D.lwd) + 6, top: LANE_H / 2 + 8 }}>
                8 days short of 28 Oct
              </span>
            </Lane>

            <Lane label="Approvals" owner="Manager · Dept head · HR">
              {[D.mgr, D.head, D.hr].map((d) => (
                <span
                  key={d}
                  className="absolute grid h-[18px] w-[18px] place-items-center rounded-full bg-[#10B981] text-[10px] font-bold text-white ring-2 ring-white"
                  style={{ left: px(d) - 9 + (d - D.mgr) * 10, top: LANE_H / 2 - 9 }}
                >
                  ✓
                </span>
              ))}
              <span className="absolute whitespace-nowrap text-[10.5px] text-slate-600" style={{ left: px(D.hr) + 34, top: LANE_H / 2 - 7 }}>
                Accepted 03 Sep · early release approved
              </span>
            </Lane>

            <Lane label="IT & systems access" owner="IT">
              <Bar from={D.dispatch} to={D.lwd} label="Laptop DELL-3310 returned" />
            </Lane>
            <Lane label="Finance dues" owner="Finance">
              <Bar from={D.dispatch} to={D.fin} label="Loan ₹18,500 to F&F" />
            </Lane>
            <Lane label="Knowledge handover" owner="Reporting manager">
              <Bar from={D.dispatch} to={D.handover} label="Handed over to Isha Desai" />
            </Lane>
            <Lane label="HR & admin formalities" owner="HR">
              <Bar from={D.dispatch} to={D.lwd} label="Exit interview · ID card" />
            </Lane>
          </div>

          <div className="mt-1 flex gap-4 pl-[142px] text-[10.5px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-0 border-l-2 border-dashed border-[#5B45E8]/60" /> Clearance dispatched 13 Oct · parallel
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-[2px] bg-[#15147B]" /> Last working day
            </span>
          </div>
        </Card>

        <div className="flex flex-1 flex-col">
          <div className="flex items-center gap-2 pb-2 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#047857]">
            <span className="h-[2px] w-6 bg-[#047857]" /> After the LWD
          </div>
          <Card className="p-4">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-[#5B45E8]">Full & final</p>
            <p className="tnum mt-1 text-[22px] font-bold text-[#15147B]">₹1,64,233</p>
            <p className="text-[10.5px] text-slate-500">Net settlement · October F&F run</p>
            <ol className="mt-3 space-y-2 border-l-2 border-[#10B981]/40 pl-3 text-[11px]">
              {[
                ["Computed", "22 Oct", "From the sealed worksheet"],
                ["Signed off", "27 Oct", "Neha Joshi"],
                ["Settled", "30 Oct", "Arun Menon"],
              ].map(([k, v, who]) => (
                <li key={k} className="relative">
                  <span className="absolute -left-[17px] top-[4px] h-2 w-2 rounded-full bg-[#10B981] ring-2 ring-white" />
                  <p className="flex justify-between gap-2">
                    <span className="font-semibold text-ink">{k}</span>
                    <span className="tnum text-slate-500">{v}</span>
                  </p>
                  <p className="text-[10.5px] text-slate-500">{who}</p>
                </li>
              ))}
            </ol>
            <p className="mt-2.5 text-[10.5px] leading-snug text-slate-500">The approver who signs off cannot also settle.</p>
          </Card>

          <div className="relative mt-4 h-[168px]">
            <Paper rotate={-5} className="absolute left-0 top-4 w-[176px] p-3.5">
              <Letter title="Experience letter" />
            </Paper>
            <Paper rotate={3} className="absolute right-0 top-0 w-[176px] p-3.5">
              <Letter title="Relieving letter" />
            </Paper>
          </div>
          <p className="mt-1 text-[10.5px] text-slate-500">Generated from the exit record, filed to the vault.</p>
        </div>
      </div>
    </VisualStage>
  );
}

function Letter({ title }: { title: string }) {
  return (
    <>
      <p className="text-[10.5px] font-bold text-[#15147B]">Aikyora Pvt Ltd</p>
      <p className="mt-1.5 text-[11px] font-semibold text-ink">{title}</p>
      <div className="mt-2 space-y-1">
        {[100, 92, 96, 70, 88].map((w, i) => (
          <span key={i} className="block h-[3px] rounded bg-slate-200" style={{ width: `${w}%` }} />
        ))}
      </div>
      <p className="mt-2 text-[10.5px] text-slate-500">Vikram Shah · 20 Oct 2026</p>
    </>
  );
}
