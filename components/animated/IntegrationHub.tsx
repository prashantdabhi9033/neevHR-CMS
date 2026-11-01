"use client";

import { BrandMark } from "@/components/brand/BrandMark";
import { useOnScreenSteps } from "@/components/visuals/useOnScreenSteps";
import { SampleFrame } from "./Frame";

// What comes in and what goes out, and how: a live connection, or a file your team moves. It never suggests a live link
// to a bank, a government portal or an accounting product, because there is none.
const incoming = [
  { t: "Biometric devices", b: "Punches over ADMS push" },
  { t: "Your website", b: "Job applications" },
  { t: "Your systems", b: "Scoped API keys" },
  { t: "CSV files", b: "Import with a dry run" },
];
const outgoing = [
  { t: "Bank", b: "NEFT and RTGS file you upload" },
  { t: "EPFO, ESIC, income tax", b: "ECR, ESIC and Form 24Q files you upload" },
  { t: "Tally Prime, Zoho Books", b: "Files you import" },
  { t: "Slack, Teams, WhatsApp, email", b: "Messages and approvals, once connected" },
  { t: "Your systems", b: "Signed webhooks" },
];
const steps = incoming.length + outgoing.length;

function Item({ t, b, on, side }: { t: string; b: string; on: boolean; side: "in" | "out" }) {
  return (
    <li className={`relative rounded-xl px-3 py-2 ring-1 transition-colors duration-300 ${on ? "bg-brand-tint ring-brand/30" : "bg-white ring-line"}`}>
      <p className="text-[13px] font-semibold text-ink">{t}</p>
      <p className="text-xs leading-snug text-muted">{b}</p>
      <span
        className={`absolute top-1/2 hidden h-px w-6 bg-line md:block ${side === "in" ? "-right-6" : "-left-6"}`}
      >
        <span className={`absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-brand transition-all duration-700 ${on ? "opacity-100" : "opacity-0"} ${on ? "left-[17px]" : "left-0"}`} />
      </span>
    </li>
  );
}

export function IntegrationHub({ className = "" }: { className?: string }) {
  const { ref, step } = useOnScreenSteps<HTMLDivElement>(steps, 1000, 1600);
  return (
    <div ref={ref} className={className}>
      <SampleFrame
        sample={false}
        title="What connects to NeevHR, and how"
        label="A map of NeevHR integrations. Punches, website applications, API calls and CSV files come in. Bank files, statutory files and accounting files go out as files your team uploads. Messages and webhooks go out once connected."
        note="Files stay files: NeevHR does not move money or post to a portal or an accounting product by itself."
      >
        <div className="mt-4 grid items-center gap-4 md:grid-cols-[1fr_128px_1fr] md:gap-6">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted">Comes in</p>
            <ul className="space-y-2">
              {incoming.map((x, i) => <Item key={x.t} {...x} on={i === step} side="in" />)}
            </ul>
          </div>
          <div className="order-first mx-auto grid h-24 w-24 place-items-center rounded-2xl bg-brand text-white shadow-[var(--shadow-float)] md:order-none md:h-32 md:w-32">
            <BrandMark tone="white" height={22} href={null} />
          </div>
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted">Goes out</p>
            <ul className="space-y-2">
              {outgoing.map((x, i) => <Item key={x.t} {...x} on={i + incoming.length === step} side="out" />)}
            </ul>
          </div>
        </div>
      </SampleFrame>
    </div>
  );
}
