import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/site/Reveal";
import { taxonomy } from "@/lib/taxonomy";
import { compliancePoints } from "@/lib/site";

// Home page sections. Every claim here matches a product page or the security page; keep them in step.

const trustPoints = [
  { label: "Data hosted in India (Mumbai)", href: "/security" },
  { label: "Built for the DPDP Act 2023", href: "/dpdp" },
  { label: "ECR, Form 24Q and Form 16 from each run", href: "/india-payroll" },
  { label: "Employee screens in Hindi", href: "/mobile" },
  { label: "Approvals from Slack, Teams and WhatsApp", href: "/features/approval-channels" },
];

export function TrustStrip() {
  return (
    <section aria-label="At a glance" className="border-b border-line bg-surface-soft">
      <Container wide>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4">
          {trustPoints.map((t) => (
            <li key={t.label}>
              <Link href={t.href} className="flex items-center gap-2 text-[13px] font-medium text-body transition-colors hover:text-brand">
                <Icon name="check" className="h-4 w-4 shrink-0 text-accent" />
                {t.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

// One module list for the home page: the same taxonomy as /hrms, set as compact link rows.
export function ModuleOverview() {
  return (
    <section id="hrms" className="scroll-mt-16 border-b border-line py-16 lg:py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Complete HRMS</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Complete HRMS for the Entire Employee Lifecycle
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-body">
            Manage your workforce from hiring to exit on one platform. NeevHR connects employee records,
            onboarding, attendance, leave, payroll, recruitment, performance, expenses, compliance and
            employee self-service through a single employee record.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {taxonomy.map((g) => (
            <div key={g.group}>
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-tint text-brand">
                  <Icon name={g.icon} className="h-4 w-4" />
                </span>
                <h3 className="text-base font-semibold text-ink">{g.group}</h3>
              </div>
              <ul className="mt-3 flex flex-wrap gap-1.5 text-[13px]">
                {g.items.map((it) => (
                  <li key={it.name}>
                    {it.href ? (
                      <Link
                        href={it.href}
                        className="chip-link"
                      >
                        {it.name}
                      </Link>
                    ) : (
                      <span className="inline-block rounded-full border border-line px-2.5 py-0.5 text-body">{it.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted">
          New to HRMS?{" "}
          <Link href="/hrms#what-is-hrms" className="font-medium text-brand hover:text-brand-dark">
            Read what an HRMS is
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}

const differentiators = [
  {
    icon: "flag",
    title: "Built for India",
    body: "PF, ESI, PT, LWF and TDS, gratuity, bonus and the DPDP Act 2023 are built into the product, not added on as a country pack, with state-wise PT and LWF tables.",
  },
  {
    icon: "users",
    title: "A complete profile for each employee, with every change on record",
    body: "Every promotion, transfer and pay change is saved with its date. Nothing is overwritten, so you can see payroll, reports and org charts as they were on any past date.",
  },
  {
    icon: "sliders",
    title: "Your HR admin customises it",
    body: "Your HR admin can customise all policies and workflows for each employee group: leave, attendance, pay, expense, appraisal, approval chains and custom fields. No code and no consultant.",
  },
  {
    icon: "chart",
    title: "Hindi for employees",
    body: "Every self-service page and the mobile app are in Hindi, and the AI assistant replies in Hindi or Gujarati. Admin screens are in English.",
  },
];

const comparisonRows = [
  { dim: "Built for", neev: "Growing & mid-market India", tier1: "Large global enterprises", point: "One team or function" },
  { dim: "India statutory", neev: "PF, ESI, PT and TDS built in", tier1: "Add-on or partner", point: "Manual or partial" },
  { dim: "Go live", neev: "Guided, run by your own HR team", tier1: "Long, consultant-led projects", point: "Quick, but limited" },
  { dim: "Configured by", neev: "Your trained HR admin", tier1: "Certified consultant", point: "Limited options" },
];

// Why NeevHR: the differentiators, the comparison and statutory compliance in one section.
export function WhyNeevhrSection() {
  return (
    <section id="why" className="scroll-mt-16 border-b border-line bg-surface-soft py-16 lg:py-20">
      <Container>
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Why NeevHR</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Built for the way India runs HR</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-body">
            The depth to run payroll and compliance at scale, with the clarity of a modern platform, and none of
            the cost, consultants or year-long rollout of a tier-one suite.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((v, i) => (
            <Reveal key={v.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint text-brand">
                  <Icon name={v.icon} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-line bg-white shadow-[var(--shadow-card)]">
              <table className="w-full min-w-[560px] text-left text-sm">
                <caption className="sr-only">How NeevHR compares to tier-one suites and point tools</caption>
                <thead>
                  <tr className="border-b border-line bg-surface-soft text-ink">
                    <th scope="col" className="px-4 py-3 font-semibold">What matters</th>
                    <th scope="col" className="px-4 py-3 font-semibold text-brand">NeevHR</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Tier-one suites</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Point tools</th>
                  </tr>
                </thead>
                <tbody className="text-body">
                  {comparisonRows.map((r) => (
                    <tr key={r.dim} className="border-b border-line last:border-0">
                      <th scope="row" className="px-4 py-3 font-medium text-ink">{r.dim}</th>
                      <td className="px-4 py-3 font-medium text-ink">{r.neev}</td>
                      <td className="px-4 py-3">{r.tier1}</td>
                      <td className="px-4 py-3">{r.point}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-muted">
              See the{" "}
              <Link href="/compare" className="font-medium text-brand hover:text-brand-dark">full comparison</Link>.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div id="compliance" className="scroll-mt-16 rounded-2xl bg-ink p-6 text-white">
              <h3 className="text-lg font-semibold">How does NeevHR handle India statutory compliance?</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                PF, ESI, PT, LWF and TDS are calculated in every payroll run, and the filing outputs are generated
                from it: PF ECR, the ESIC contribution file, challans, the Form 24Q return file and Form 16.
                Statutory tables are configurable, so a rate change is a settings update, not a code change.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {compliancePoints.map((c) => (
                  <li key={c} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-[13px] font-medium">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-accent" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-white/50">
                Built to the rules published by{" "}
                <a href="https://www.epfindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-2 hover:underline">EPFO</a>,{" "}
                <a href="https://www.esic.gov.in/" target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-2 hover:underline">ESIC</a>, the{" "}
                <a href="https://www.incometax.gov.in/" target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-2 hover:underline">Income Tax Department</a>{" "}
                and the{" "}
                <a href="https://www.meity.gov.in/data-protection-framework" target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-2 hover:underline">DPDP Act 2023</a>.{" "}
                <Link href="/india-payroll" className="font-semibold text-white hover:text-accent">India payroll →</Link>
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

const integrations = [
  { title: "Biometric devices", body: "Punches over the ADMS (iClock) push protocol used by many eSSL, ZKTeco and Matrix devices.", href: "/integrations" },
  { title: "Bank salary files", body: "Files for HDFC, ICICI, SBI, Axis and Kotak, or a generic file, with NEFT or RTGS by amount.", href: "/integrations" },
  { title: "Tally Prime and Zoho Books", body: "Vouchers and journals from published payroll, as files your accounts team imports.", href: "/integrations" },
  { title: "Slack, Teams and WhatsApp", body: "Approve or reject requests from the apps your people use, connected per company.", href: "/features/approval-channels" },
  { title: "Sign in with Google", body: "Your company's own accounts. Sign in with Microsoft is built and being switched on.", href: "/security#sign-in" },
  { title: "API and webhooks", body: "Scoped API keys and signed outbound webhooks, plus CSV import and export.", href: "/integrations" },
];

const securityPoints = [
  "Hosted in India, on servers in Mumbai",
  "Each company's data kept separate inside the database",
  "PAN, Aadhaar, UAN and bank details encrypted at field level",
  "Role-based access with data scopes and field masking",
  "MFA, enforceable per company",
  "Audit log of administrative and payroll changes",
  "Database backups with a documented restore procedure",
  "DPDP Act 2023: consent, data principal requests and retention",
  "When an AI feature is used, what it needs goes to the AI provider, which may process it outside India",
];

export function IntegrationsSecuritySection() {
  return (
    <section id="integrations" className="scroll-mt-16 border-b border-line py-16 lg:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Integrations</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Fits the tools you already use</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {integrations.map((x) => (
              <li key={x.title}>
                <Link href={x.href} className="block h-full rounded-xl border border-line bg-white p-4 transition-colors hover:border-brand/40">
                  <span className="text-[15px] font-semibold text-ink">{x.title}</span>
                  <p className="mt-1 text-sm leading-relaxed text-body">{x.body}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/integrations" className="mt-5 inline-block text-sm font-semibold text-brand hover:text-brand-dark">
            All integrations →
          </Link>
        </Reveal>
        <Reveal delay={80}>
          <div id="security" className="scroll-mt-16 h-full rounded-2xl bg-ink p-7 text-white">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
              <Icon name="shield" className="h-4 w-4" />
              Security and your data
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">Your employee data is protected and hosted in India</h2>
            <ul className="mt-6 space-y-2.5">
              {securityPoints.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-white/80">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
              <Link href="/security" className="text-white hover:text-accent">Security & compliance →</Link>
              <Link href="/dpdp" className="text-white hover:text-accent">DPDP Act 2023 →</Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
