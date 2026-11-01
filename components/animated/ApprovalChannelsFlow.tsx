"use client";

import { useOnScreenSteps } from "@/components/visuals/useOnScreenSteps";
import { Panel, SampleFrame, Stack, Tick } from "./Frame";

// One request type per channel, as NeevHR sends it (see components/product/ApprovalChannelsVisual). Each scene shows the
// message, then the decision on the same record. A money request carries no details and only opens in NeevHR.
const scenes = [
  { app: "Slack", where: "Direct message", line: "Leave from Rohan Mehta", sub: "05 Nov 2026 to 06 Nov 2026", actions: ["Approve", "Reject", "Open in NeevHR"], result: "Approved from Slack" },
  { app: "Teams", where: "Chat", line: "Regularisation from Isha Gupta", sub: "28 Oct 2026", actions: ["Approve", "Reject", "Open in NeevHR"], result: "Rejected, with a reason on the confirm page" },
  { app: "WhatsApp", where: "Template message", line: "Approval request: overtime from Ajay Thakur", sub: "To the number on the approver's profile", actions: ["Approve", "Review or reject"], result: "Approved from WhatsApp" },
  { app: "Email", where: "Request email", line: "Leave from Meera Nair", sub: "12 Nov 2026", actions: ["Approve", "Reject"], result: "Approved after the confirm page" },
  { app: "Money and pay", where: "Any channel", line: "A request is waiting for you", sub: "No details in the message", actions: ["Open in NeevHR"], result: "Decided after signing in to NeevHR" },
];

export function ApprovalChannelsFlow({ className = "" }: { className?: string }) {
  const { ref, step } = useOnScreenSteps<HTMLDivElement>(scenes.length * 2, 1700, 2400);
  const scene = Math.floor(step / 2);
  const decided = step % 2 === 1;
  return (
    <div ref={ref} className={className}>
      <SampleFrame
        title="One approval, wherever the approver is"
        label="A sample approval moving across channels: a leave request approved in Slack, a regularisation rejected in Teams, overtime approved in WhatsApp, leave approved from email, and a money request that only opens in NeevHR. Every decision lands on the same approval record."
        note="Sample messages. Each channel stays off until your company connects it with its own app or business account and a Company Admin switches it on."
      >
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {scenes.map((s, i) => (
            <li key={s.app} className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-300 ${i === scene ? "bg-brand text-white" : "bg-surface-soft text-muted ring-1 ring-line"}`}>{s.app}</li>
          ))}
        </ul>
        <div className="mt-4 grid gap-4 md:grid-cols-[1.25fr_1fr]">
          <Stack className="rounded-xl bg-surface-soft p-4">
            {scenes.map((s, i) => (
              <Panel key={s.app} on={i === scene}>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-soft">{s.app === "Money and pay" ? s.where : `${s.app}, ${s.where.toLowerCase()}`}</p>
                <p className="mt-1.5 text-sm font-semibold leading-snug text-ink">{s.line}</p>
                <p className="mt-0.5 text-xs text-muted">{s.sub}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {s.actions.map((a, j) => (
                    <span
                      key={a}
                      className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all duration-300 ${
                        j === 0 ? (decided && i === scene ? "scale-95 bg-success-dark text-white" : "bg-brand text-white") : "bg-white text-ink ring-1 ring-line"
                      }`}
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </Panel>
            ))}
          </Stack>
          <div className="rounded-xl p-4 ring-1 ring-line">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">The approval record</p>
            <ul className="mt-3 space-y-3 text-[13px]">
              <li className="flex items-start gap-2.5 text-ink"><Tick on /><span>Request sent to the approver</span></li>
              <li className={`flex items-start gap-2.5 transition-colors duration-300 ${decided ? "text-ink" : "text-muted"}`}>
                <Tick on={decided} />
                <Stack className="min-w-0 flex-1">
                  <span className={decided ? "opacity-0" : "opacity-100"}>Waiting for the decision</span>
                  <Stack>
                    {scenes.map((s, i) => (
                      <span key={s.app} className={`transition-opacity duration-300 ${decided && i === scene ? "opacity-100" : "opacity-0"}`}>{s.result}</span>
                    ))}
                  </Stack>
                </Stack>
              </li>
              <li className={`flex items-start gap-2.5 transition-colors duration-300 ${decided ? "text-ink" : "text-muted"}`}><Tick on={decided} /><span>Written to the audit trail</span></li>
            </ul>
          </div>
        </div>
      </SampleFrame>
    </div>
  );
}
