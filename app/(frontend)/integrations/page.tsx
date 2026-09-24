import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/site/PageHeader";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/site/Faq";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "HRMS Integrations: Biometric, API, Webhooks & Bank Files",
  description:
    "NeevHR integrations available today: biometric devices over ADMS, email, SMS and WhatsApp, CSV import and export, API keys, signed webhooks, bank payment files and payroll journal export.",
  path: "/integrations",
});

// Only integrations that work today (verified 24 Sep 2026). Planned items are
// not listed as available.
const groups = [
  {
    title: "Biometric attendance devices",
    body: "Punches arrive over the ADMS (iClock) push protocol used by many eSSL, ZKTeco and Matrix devices. Devices are registered by serial number and mapped to employees. Compatibility is confirmed for your models during implementation.",
    items: ["ADMS push ingestion", "Device last-seen status", "Punch file import", "API-key punch ingest"],
  },
  {
    title: "Banks and accounting",
    body: "Salary payment files for upload to your bank, and a balanced payroll journal voucher for your accounting system. NeevHR does not move money or post directly into accounting software.",
    items: ["Bank files: generic, HDFC, ICICI, SBI, Axis, Kotak (CSV)", "NEFT or RTGS by amount", "Journal voucher CSV with GL mapping", "Cost-centre split"],
  },
  {
    title: "Statutory portals",
    body: "Files in the formats the government portals accept, generated from the published payroll run, for your team to upload.",
    items: ["EPFO ECR", "ESIC contribution file", "Form 24Q (FVU text format)", "Challans"],
  },
  {
    title: "Messaging channels",
    body: "Notifications reach employees on the channels they use, from one dispatcher. Each channel uses your own provider account.",
    items: ["Email", "SMS (MSG91 or Twilio)", "WhatsApp (Meta Cloud API)", "Browser push"],
  },
  {
    title: "API and webhooks",
    body: "Connect your own systems with scoped API keys that act as service principals, and receive HMAC-signed outbound webhooks with retries. API documentation is shared with customers during implementation.",
    items: ["Scoped API keys", "HMAC-signed webhooks", "Retries with backoff", "Audited API activity"],
  },
  {
    title: "Data import and export",
    body: "Bring data in with validation and take it out whenever you need it, without lock-in.",
    items: ["CSV import with dry-run", "Opening balances import", "Export from lists and reports", "Scheduled email reports"],
  },
];

const faqs = [
  {
    q: "Does NeevHR have an API?",
    a: "Yes. Scoped API keys let your systems call NeevHR as a service principal, and outbound webhooks notify your systems of events. API documentation is shared with customers during implementation.",
  },
  {
    q: "Which biometric devices are supported?",
    a: "Devices that support the ADMS (iClock) push protocol, used by many eSSL, ZKTeco and Matrix models, plus punch file import for others. We confirm your models during implementation.",
  },
  {
    q: "Does NeevHR integrate with Tally?",
    a: "Not directly. NeevHR exports a balanced payroll journal voucher as CSV with GL code mapping, which accounting teams import.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Integrations", href: "/integrations" }]} />
      <PageHeader
        eyebrow="Integrations"
        title="Integrations that work today"
        sub="NeevHR connects to biometric devices, banks, statutory portals, messaging channels and your own systems. Everything listed here is available now."
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {groups.map((g) => (
              <div key={g.title} className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
                <h2 className="text-lg font-semibold text-ink">{g.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-body">{g.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <li key={i} className="inline-flex items-center gap-1.5 rounded-lg bg-surface-soft px-3 py-1.5 text-xs font-medium text-body">
                      <Icon name="check" className="h-3.5 w-3.5 text-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-white px-8 py-8 text-center shadow-[var(--shadow-card)] sm:flex-row sm:text-left">
            <div>
              <h2 className="text-lg font-semibold text-ink">Need a specific integration?</h2>
              <p className="mt-1 text-sm text-body">
                Tell us what you run today and we will show what connects now. See also{" "}
                <Link href="/security" className="text-brand hover:text-brand-dark">security</Link>.
              </p>
            </div>
            <Button href="/demo">Talk to us</Button>
          </div>
        </Container>
      </section>
      <section className="border-t border-line bg-surface-soft">
        <Faq items={faqs} withSchema heading="Integration questions" />
      </section>
    </>
  );
}
