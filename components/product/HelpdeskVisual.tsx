import { Avatar, Card, VisualStage } from "@/components/visuals/Stage";

// A helpdesk ticket is a conversation racing a clock, so the image is one open ticket's thread (employee
// on the left, HR agent on the right, the agent's reply half written from a canned response) on a sky
// time-grid, with the SLA ring counting down beside it and the live queue it was picked from. The SLA
// ring: 8h resolution target for High, 3h gone, due in 5h (37.5% used). Queue: 46 open, 3 breaching.

const queue = [
  { ref: "HD-4821", subj: "HRA exemption missing on payslip", cat: "Payroll", sla: "due in 5h", breach: false, on: true },
  { ref: "HD-4820", subj: "VPN access request", cat: "IT & Access", sla: "overdue 1h", breach: true, esc: true },
  { ref: "HD-4817", subj: "Leave balance query", cat: "Leave", sla: "due in 7h", breach: false },
  { ref: "HD-4814", subj: "Address proof letter", cat: "Letters", sla: "due in 26h", breach: false },
  { ref: "HD-4812", subj: "Laptop replacement", cat: "IT & Access", sla: "overdue 2h", breach: true },
  { ref: "HD-4809", subj: "UAN not linked to PF account", cat: "PF & Statutory", sla: "due in 30h", breach: false },
];

const thread = [
  {
    by: "Pooja Iyer",
    at: "3h ago",
    agent: false,
    text: "My September payslip does not show the HRA exemption for the rent receipts I uploaded on 12 Sep.",
  },
  {
    by: "Suresh Nair",
    at: "2h ago",
    agent: true,
    text: "Hi Pooja, your receipts were verified on 26 Sep, after the September payroll cut-off, so the exemption applies from the October run.",
  },
  { by: "Pooja Iyer", at: "1h ago", agent: false, text: "Thanks. Will the extra TDS deducted in September be adjusted?" },
];

const R = 30;
const C = 2 * Math.PI * R;
const USED = 3 / 8;

function SlaRing() {
  return (
    <div className="flex items-center gap-3">
      <svg width="76" height="76" viewBox="0 0 76 76" role="img" aria-label="SLA: due in 5 hours of an 8 hour target">
        <circle cx="38" cy="38" r={R} fill="none" stroke="#E2E8F0" strokeWidth="7" />
        <circle
          cx="38"
          cy="38"
          r={R}
          fill="none"
          stroke="#0EA5E9"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={`${C * (1 - USED)} ${C}`}
          transform="rotate(-90 38 38)"
        />
        <text x="38" y="37" textAnchor="middle" fontSize="16" fontWeight="700" fill="#24242B" className="tnum">
          5h
        </text>
        <text x="38" y="50" textAnchor="middle" fontSize="10.5" fill="#64748B">
          left
        </text>
      </svg>
      <div>
        <p className="tnum text-[13px] font-semibold text-ink">due in 5h</p>
        <p className="whitespace-nowrap text-[11px] text-slate-500">Resolution SLA · 8h</p>
      </div>
    </div>
  );
}

function Queue() {
  return (
    <Card className="overflow-hidden">
      <div className="border-b border-slate-100 px-4 py-3">
        <p className="text-[13px] font-bold text-ink">Ticket queue</p>
        <div className="mt-1.5 flex gap-3 text-[11px]">
          <span className="text-slate-500">
            Open <b className="tnum text-ink">46</b>
          </span>
          <span className="text-slate-500">
            Breaching SLA <b className="tnum text-red-600">3</b>
          </span>
        </div>
      </div>
      <div className="divide-y divide-slate-100">
        {queue.map((t) => (
          <div key={t.ref} className={`relative px-4 py-2.5 ${t.on ? "bg-sky-50" : t.breach ? "bg-red-50/50" : ""}`}>
            {t.on && <span className="absolute inset-y-0 left-0 w-[3px] bg-[#0EA5E9]" />}
            <div className="flex items-center justify-between">
              <span className="tnum text-[11px] font-semibold text-slate-500">{t.ref}</span>
              <span className={`tnum text-[10.5px] font-semibold ${t.breach ? "text-red-600" : "text-slate-500"}`}>{t.sla}</span>
            </div>
            <p className="mt-0.5 truncate text-[12px] font-medium text-ink">{t.subj}</p>
            <div className="mt-1 flex items-center gap-1.5">
              <span className="rounded bg-slate-100 px-1.5 py-px text-[10.5px] text-slate-600">{t.cat}</span>
              {t.esc && <span className="rounded bg-orange-100 px-1.5 py-px text-[10.5px] font-semibold text-orange-700">Escalated</span>}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function Ticket() {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="tnum text-[11px] font-semibold text-slate-500">HD-4821, Payroll</p>
          <p className="mt-0.5 text-[16px] font-bold leading-snug text-ink">HRA exemption missing on September payslip</p>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className="rounded-md bg-indigo-50 px-1.5 py-0.5 text-[10.5px] font-semibold text-indigo-700 ring-1 ring-indigo-200">Payroll</span>
            <span className="rounded-md bg-sky-50 px-1.5 py-0.5 text-[10.5px] font-semibold text-sky-700 ring-1 ring-sky-200">In progress</span>
            <span className="rounded-md bg-red-50 px-1.5 py-0.5 text-[10.5px] font-semibold text-red-600 ring-1 ring-red-200">High priority</span>
            <span className="text-[11px] text-slate-400">Opened 3h ago</span>
          </div>
        </div>
        <SlaRing />
      </div>

      <div className="mt-4 space-y-3 border-t border-slate-100 pt-4">
        {thread.map((m, i) => (
          <div key={i} className={`flex items-end gap-2 ${m.agent ? "flex-row-reverse" : ""}`}>
            <Avatar initials={m.by === "Suresh Nair" ? "SN" : "PI"} size={26} />
            <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 ${m.agent ? "rounded-br-md bg-[#15147B] text-white" : "rounded-bl-md bg-slate-100 text-ink"}`}>
              <p className={`text-[10.5px] font-semibold ${m.agent ? "text-[#A9A8E8]" : "text-slate-500"}`}>
                {m.by} · {m.at}
              </p>
              <p className="mt-0.5 text-[12.5px] leading-snug">{m.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-[#0EA5E9]/50 bg-white p-3 ring-4 ring-sky-100">
        <p className="text-[12.5px] leading-snug text-ink">
          Yes. Your annual tax is re-projected every payroll run, so the excess from September reduces your TDS from October to March.
          <span className="ml-0.5 inline-block h-[14px] w-[1.5px] translate-y-[2px] bg-[#0EA5E9]" />
        </p>
        <div className="mt-2.5 flex items-center gap-2">
          <span className="rounded-lg bg-[#15147B] px-3 py-1.5 text-[11.5px] font-semibold text-white">Send reply</span>
          <span className="rounded-lg border border-slate-200 px-3 py-1.5 text-[11.5px] font-semibold text-slate-600">Canned response</span>
          <span className="ml-auto flex items-center gap-2 text-[11px] text-slate-500">
            Assignee
            <span className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-2 py-1 font-semibold text-ink">
              <Avatar initials="SN" size={18} />
              Suresh Nair
            </span>
          </span>
        </div>
      </div>
      <p className="mt-3 text-[11px] text-slate-500">
        SLA for High: first response 1h · escalates to <b className="font-semibold text-slate-700">HR Ops Lead</b> after 6h · resolve in 8h
      </p>
    </Card>
  );
}

export function HelpdeskVisual() {
  return (
    <VisualStage
      width={880}
      estHeight={640}
      backdrop="sky"
      label="A NeevHR helpdesk ticket conversation between an employee and an HR agent, with the SLA countdown ring, assignee and the ticket queue."
    >
      <div className="grid grid-cols-[236px_1fr] items-start gap-5">
        <div className="pt-8">
          <Queue />
        </div>
        <Ticket />
      </div>
    </VisualStage>
  );
}
