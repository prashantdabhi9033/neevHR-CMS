import { Card, VisualStage } from "@/components/visuals/Stage";

// Three message cards, one per app, each as NeevHR sends it (approvals/channels/channel-clients): the request line only,
// no reason or details, with Approve and Reject. A money request only gets Open in NeevHR. No app logos: these are samples.

function Button({ kind = "plain", children }: { kind?: "plain" | "go"; children: React.ReactNode }) {
  return <span className={`rounded-md px-2.5 py-1 text-[12px] font-semibold ${kind === "go" ? "bg-[#15147B] text-white" : "border border-slate-200 text-ink"}`}>{children}</span>;
}

function Message({ app, line, sub, children }: { app: string; line: string; sub: string; children: React.ReactNode }) {
  return (
    <Card className="px-4 py-3.5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#5B45E8]">{app}</p>
      <p className="mt-1.5 text-[14px] font-semibold leading-snug text-ink">{line}</p>
      <p className="mt-0.5 text-[12px] text-slate-500">{sub}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">{children}</div>
    </Card>
  );
}

export function ApprovalChannelsVisual() {
  return (
    <VisualStage
      backdrop="mint"
      width={760}
      estHeight={560}
      label="Sample approval messages in Slack, Microsoft Teams and WhatsApp, each with Approve and Reject, and a fourth, a money request, with only Open in NeevHR."
    >
      <div className="grid grid-cols-2 gap-3.5">
        <Message app="Slack direct message" line="Leave from Rohan Mehta" sub="05 Nov 2026 to 06 Nov 2026">
          <Button kind="go">Approve</Button>
          <Button>Reject</Button>
          <Button>Open in NeevHR</Button>
        </Message>
        <Message app="Microsoft Teams chat" line="Regularisation from Isha Gupta" sub="28 Oct 2026">
          <Button kind="go">Approve</Button>
          <Button>Reject</Button>
          <Button>Open in NeevHR</Button>
        </Message>
        <Message app="WhatsApp template message" line="Approval request: overtime from Ajay Thakur" sub="To the mobile number on the approver's profile">
          <Button kind="go">Approve</Button>
          <Button>Review or reject</Button>
        </Message>
        <Message app="Money, pay, maker-checker" line="Open in NeevHR" sub="No details in the message: these are decided in NeevHR">
          <Button>Open in NeevHR</Button>
        </Message>
      </div>
      <Card className="mt-3.5 px-4 py-3.5">
        <p className="text-[13px] font-bold text-ink">Slack, Teams and WhatsApp approvals</p>
        <div className="mt-2 grid grid-cols-3 gap-2.5 text-[12px]">
          {[
            ["Slack", "Off until tested"],
            ["Microsoft Teams", "Off until tested"],
            ["WhatsApp", "Off until tested"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg bg-[#F7F7FB] px-3 py-2">
              <p className="font-semibold text-ink">{k}</p>
              <p className="text-slate-500">{v}</p>
              <p className="mt-1 font-medium text-[#4A34D1]">Setup guide</p>
            </div>
          ))}
        </div>
      </Card>
    </VisualStage>
  );
}
