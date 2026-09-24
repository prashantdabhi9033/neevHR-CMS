import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/site/Faq";
import { JsonLd } from "@/components/site/JsonLd";
import { Reveal } from "@/components/site/Reveal";
import { TaxonomyGrid, OneRecordSection } from "@/components/home/HrmsSections";
import { PayrollVisual } from "@/components/product/PayrollVisual";
import { AttendanceVisual } from "@/components/product/AttendanceVisual";
import { pageMeta } from "@/lib/seo";
import { site, implementationSteps } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "HRMS Software for Indian Companies",
  description:
    "Explore NeevHR HRMS software for Indian companies. Manage employee records, attendance, leave, payroll, recruitment, performance, expenses, compliance and employee self-service.",
  path: "/hrms",
});

type Block = {
  id: string;
  title: string;
  body: string;
  points: string[];
  links: { label: string; href: string }[];
};

const blocks: Block[] = [
  {
    id: "employee-management",
    title: "Employee management",
    body: "Every employee has one record that holds job, pay, statutory IDs, bank details, documents, assets and history. Changes are dated events, so the record can be read as it stood on any date.",
    points: [
      "Employee 360 profile with job, pay, statutory and documents",
      "Multiple legal entities, locations, departments, grades and cost centres",
      "Bulk transfers, manager changes and mass separations",
      "Custom fields governed by a catalog",
    ],
    links: [
      { label: "Employee records", href: "/features/employees" },
      { label: "Org chart", href: "/features/org-chart" },
      { label: "Onboarding", href: "/features/onboarding" },
    ],
  },
  {
    id: "attendance",
    title: "Attendance",
    body: "Punches arrive from biometric devices, web check-in or file import. Shift, grace and overtime rules turn them into a closed attendance day that payroll can use without rework.",
    points: [
      "Biometric punches over the ADMS (iClock) push protocol",
      "Shifts, rosters, weekly-off policies and overtime rules",
      "Regularisation requests with approvals and period locks",
      "Loss of pay derived from attendance and leave",
    ],
    links: [
      { label: "Attendance", href: "/features/attendance" },
      { label: "Shifts & roster", href: "/features/rostering" },
      { label: "Timesheets", href: "/features/timesheets" },
    ],
  },
  {
    id: "leave",
    title: "Leave",
    body: "Leave types, accrual, proration, carry-forward and encashment are rules you configure and assign to employee groups. Approved leave flows straight into attendance and payroll.",
    points: [
      "Configurable leave types and accrual rules",
      "Holiday calendars by location, with restricted holidays",
      "Approval chains per leave type",
      "Balances visible to employees in self-service",
    ],
    links: [
      { label: "Leave management", href: "/features/leave" },
      { label: "Holiday calendar", href: "/features/holidays" },
    ],
  },
  {
    id: "payroll",
    title: "Payroll",
    body: "Monthly payroll runs from configurable pay structures, attendance and leave inputs, loans, reimbursements and variable pay, through compute, verify, approve and publish.",
    points: [
      "Salary structures assigned by group, with effective-dated revisions",
      "Arrears, LOP and LOP reversal, loans and variable pay",
      "Payslip PDFs, salary register and journal voucher export",
      "Bank payment files in generic and bank-specific CSV layouts",
    ],
    links: [
      { label: "Payroll software", href: "/payroll" },
      { label: "India payroll", href: "/india-payroll" },
    ],
  },
  {
    id: "recruitment",
    title: "Recruitment",
    body: "Requisitions, candidate pipelines, interview panels, feedback and offers are managed inside NeevHR, and an accepted offer becomes an onboarding journey without re-keying.",
    points: [
      "Requisitions with approval and validation",
      "Pipeline board, interview scheduling and panel feedback",
      "Offers that carry the approved compensation",
      "Referrals and a talent pool",
    ],
    links: [{ label: "Recruitment", href: "/features/recruitment" }],
  },
  {
    id: "performance",
    title: "Performance",
    body: "Goals, reviews and 360 feedback run in configurable cycles. Ratings feed compensation decisions, with sign-off by the right authority.",
    points: [
      "Weighted goals and review cycles",
      "360 feedback and a 9-box talent view",
      "Rating distribution view for calibration discussions",
      "Increment and bonus decisions linked to ratings",
    ],
    links: [
      { label: "Performance management", href: "/features/performance" },
      { label: "Compensation", href: "/features/compensation" },
    ],
  },
  {
    id: "expenses",
    title: "Expenses",
    body: "Employees claim expenses against policy, managers approve, and reimbursement is paid through payroll, with separation of duties between approver and payer.",
    points: [
      "Policy-based claims with receipts",
      "Partial sanction and approval chains",
      "Reimbursement through payroll",
      "Travel requests with approvals",
    ],
    links: [
      { label: "Expenses", href: "/features/expenses" },
      { label: "Travel", href: "/features/travel" },
    ],
  },
  {
    id: "compliance",
    title: "Compliance",
    body: "Indian statutory calculations and filing outputs are generated from the same payroll run, with configurable statutory tables and DPDP Act 2023 privacy controls.",
    points: [
      "PF, ESI, PT, LWF and TDS calculations",
      "PF ECR, ESIC contribution file, challans",
      "Form 24Q return file and Form 16",
      "Gratuity, statutory bonus and full & final settlement",
    ],
    links: [
      { label: "Statutory compliance", href: "/features/compliance" },
      { label: "India payroll", href: "/india-payroll" },
    ],
  },
  {
    id: "self-service",
    title: "Employee self service",
    body: "Employees see their attendance, leave balances, payslips and tax declarations and raise requests themselves. Managers act on everything awaiting them from one inbox.",
    points: [
      "Leave, regularisation, expense and profile-change requests",
      "Payslips, Form 16 and tax declarations with proofs",
      "Helpdesk tickets and surveys",
      "Mobile app: coming soon",
    ],
    links: [{ label: "Self-service & mobile", href: "/mobile" }],
  },
  {
    id: "analytics",
    title: "HR analytics",
    body: "A catalog of reports across modules, persona dashboards and a self-serve report builder, with drill-down from charts to the records behind them.",
    points: [
      "Headcount, attrition, attendance and payroll reports",
      "Report builder with group-by and aggregation",
      "Scheduled reports by email",
      "Rule-based attrition risk with visible reasons",
    ],
    links: [{ label: "Reports & analytics", href: "/features/reports" }],
  },
];

const hrmsFaqs = [
  {
    q: "What is HRMS software?",
    a: "HRMS (Human Resource Management System) software manages employee records, attendance, leave, payroll, recruitment, performance, documents and HR reporting from one central system.",
  },
  {
    q: "What is the difference between HRMS and HRIS?",
    a: "An HRIS is mainly a system of record for employee data. An HRMS usually adds operational processes such as attendance, leave, payroll and performance on top of that record. Vendors use the terms loosely, so compare capabilities rather than labels.",
  },
  {
    q: "What should an HRMS include for an Indian company?",
    a: "At minimum: an employee master, attendance and leave, payroll with PF, ESI, PT, LWF and TDS, statutory filing outputs, employee self-service, approvals and reports. Growing companies usually add recruitment, performance, expenses and exit with full and final settlement.",
  },
  {
    q: "Is NeevHR an HRMS or a payroll software?",
    a: "Both. NeevHR is an HRMS with payroll built in, so attendance, leave and employee changes flow into payroll from the same employee record.",
  },
  {
    q: "Who is NeevHR built for?",
    a: "Indian organisations of roughly 100 to several thousand employees that have outgrown spreadsheets and disconnected tools.",
  },
  {
    q: "Does NeevHR support multiple legal entities and locations?",
    a: "Yes. Several legal entities, locations, business units and departments can run in one account, with state rules such as PT and LWF applied by work location.",
  },
  {
    q: "Can policies be configured without code?",
    a: "Yes. Leave, attendance, shifts, pay structures, expense and appraisal policies are configured in settings and assigned to employee groups.",
  },
  {
    q: "Does NeevHR handle PF, ESI, PT, LWF and TDS?",
    a: "Yes. They are calculated in each payroll run, and the PF ECR, ESIC contribution file, challans, Form 24Q return file and Form 16 are generated.",
  },
  {
    q: "Does NeevHR integrate with biometric attendance devices?",
    a: "Yes. It accepts punches over the ADMS (iClock) push protocol used by many eSSL, ZKTeco and Matrix devices, and through punch file import. Device compatibility is confirmed during implementation.",
  },
  {
    q: "Does NeevHR have a mobile app?",
    a: "The mobile app is coming soon. Employee self-service is available on the web today.",
  },
  {
    q: "How secure is employee data in NeevHR?",
    a: "Company data is isolated with Postgres row-level security, sensitive identifiers are encrypted at field level, access is role-based with data scopes, MFA is available, changes are audit-logged, and data is hosted in India.",
  },
  {
    q: "Does NeevHR support the DPDP Act 2023?",
    a: "NeevHR provides consent records, data principal requests (access, correction, erasure, grievance, nomination), retention schedules and legal hold to support your DPDP Act 2023 obligations.",
  },
  {
    q: "Does NeevHR integrate with other systems?",
    a: "Yes, through scoped API keys, signed outbound webhooks, CSV import and export, and a payroll journal voucher export for accounting. A direct Tally connector and single sign-on are not available today.",
  },
  {
    q: "How long does HRMS implementation take?",
    a: `${site.implementation} It usually covers configuration, data migration, a parallel payroll run and go-live.`,
  },
  {
    q: "Can we migrate from Excel or another HRMS?",
    a: "Yes. Employee master data, org structure, documents, leave balances, loan balances and year-to-date payroll opening balances are imported from CSV with dry-run validation.",
  },
  {
    q: "How is NeevHR priced?",
    a: "Pricing is based on employee count, modules, implementation requirements and integrations, in INR, with edition-based packaging.",
  },
  {
    q: "Is NeevHR available in Hindi?",
    a: "Not yet. The interface is in English today, and a Hindi interface is planned.",
  },
  {
    q: "Can we see NeevHR before deciding?",
    a: "Yes. Book a demo and we will walk through NeevHR using a structure close to your own policies and pay setup.",
  },
];

const toc = [
  { id: "features", label: "HRMS features" },
  ...blocks.map((b) => ({ id: b.id, label: b.title })),
  { id: "security", label: "Security" },
  { id: "integrations", label: "Integrations" },
  { id: "implementation", label: "Implementation" },
  { id: "faq", label: "FAQ" },
];

export default function HrmsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: `${site.url}/hrms`,
          name: "HRMS Software for Indian Companies",
          description: metadata.description,
          isPartOf: { "@id": `${site.url}/#website` },
          about: { "@id": `${site.url}/#software` },
          dateModified: "2026-09-24",
          inLanguage: "en-IN",
        }}
      />
      <Breadcrumbs items={[{ name: "HRMS", href: "/hrms" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <Container className="relative grid items-center gap-12 py-12 lg:grid-cols-[1fr_1.05fr] lg:py-16">
          <div className="animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              HRMS
            </span>
            <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              HRMS Software for Indian Companies
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">
              NeevHR is an India-first Human Resource Management System (HRMS)
              that brings employee management, attendance, leave, payroll,
              recruitment, performance, expenses, compliance and employee
              self-service into one platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/demo" size="lg">
                Book a Demo
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                See pricing
              </Button>
            </div>
          </div>
          <div className="animate-fade-up lg:pl-4">
            <AttendanceVisual />
          </div>
        </Container>
      </section>

      {/* TOC */}
      <nav aria-label="On this page" className="border-b border-line bg-surface-soft">
        <Container className="flex gap-2 overflow-x-auto py-3">
          {toc.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="shrink-0 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-body hover:border-brand/40 hover:text-brand"
            >
              {t.label}
            </a>
          ))}
        </Container>
      </nav>

      {/* 1. Features */}
      <section id="features" className="scroll-mt-20 py-16 lg:py-20">
        <Container>
          <Reveal className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              HRMS features
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              More than 30 modules run on one employee record, grouped below.
              Every item links to a page with the detail.
            </p>
          </Reveal>
          <TaxonomyGrid />
        </Container>
      </section>

      <OneRecordSection />

      {/* 2 to 11. Module blocks */}
      {blocks.map((b, i) => (
        <section
          key={b.id}
          id={b.id}
          className={`scroll-mt-20 border-b border-line py-14 lg:py-16 ${i % 2 === 0 ? "bg-surface-soft" : "bg-white"}`}
        >
          <Container className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {b.title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-body">{b.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {b.links.map((l) => (
                  <Link
                    key={l.href + l.label}
                    href={l.href}
                    className="rounded-xl border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    {l.label} →
                  </Link>
                ))}
              </div>
            </Reveal>
            <Reveal delay={60}>
              {b.id === "payroll" ? (
                <PayrollVisual />
              ) : (
                <ul className="space-y-3 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-body">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </Container>
        </section>
      ))}

      {/* 12. Security */}
      <section id="security" className="scroll-mt-20 border-b border-line bg-ink py-16 text-white lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Security</h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/70">
              Employee and payroll data is among the most sensitive a company
              holds. NeevHR protects it at the database, application and
              access layers, and hosts it in India.
            </p>
            <div className="mt-6">
              <Button href="/security" variant="inverse">
                Security & compliance
              </Button>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Postgres row-level tenant isolation",
              "Field-level encryption of PAN, Aadhaar and bank details",
              "RBAC with data scopes and field masking",
              "TOTP MFA, enforceable per company",
              "Audit log of administrative and payroll changes",
              "DPDP consent, data principal requests, retention",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {t}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 13. Integrations */}
      <section id="integrations" className="scroll-mt-20 border-b border-line py-16 lg:py-20">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-ink">Integrations</h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-body">
            NeevHR connects to the systems around HR through open, documented
            mechanisms. Only integrations available today are listed.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Biometric devices", b: "ADMS (iClock) push and punch file import." },
              { t: "Messaging", b: "Email, SMS, WhatsApp and browser push, with your provider accounts." },
              { t: "API & webhooks", b: "Scoped API keys and HMAC-signed outbound webhooks." },
              { t: "Finance & banks", b: "Journal voucher CSV and bank payment files." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-card)]">
                <h3 className="text-[15px] font-semibold text-ink">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{x.b}</p>
              </div>
            ))}
          </div>
          <Link href="/integrations" className="mt-6 inline-block text-sm font-semibold text-brand hover:text-brand-dark">
            All integrations →
          </Link>
        </Container>
      </section>

      {/* 14. Implementation */}
      <section id="implementation" className="scroll-mt-20 border-b border-line bg-surface-soft py-16 lg:py-20">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-ink">Implementation</h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-body">
            {site.implementation} Your HR administrator owns the configuration
            once you are live.
          </p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {implementationSteps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-card)]">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
                  {s.week}
                </span>
                <h3 className="mt-1 text-[15px] font-semibold text-ink">
                  {i + 1}. {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <Link href="/hrms-implementation" className="text-brand hover:text-brand-dark">
              Implementation guide →
            </Link>
            <Link href="/hrms-data-migration" className="text-brand hover:text-brand-dark">
              Data migration →
            </Link>
            <Link href="/switch-from-excel" className="text-brand hover:text-brand-dark">
              Switching from Excel →
            </Link>
          </div>
        </Container>
      </section>

      {/* 15. FAQ */}
      <div id="faq" className="scroll-mt-20">
        <Faq items={hrmsFaqs} withSchema heading="HRMS software: frequently asked questions" />
      </div>

      {/* 16. CTA */}
      <section className="pb-20">
        <Container>
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl bg-brand px-8 py-12 text-center shadow-[var(--shadow-float)] sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                See the NeevHR HRMS on your own policies
              </h2>
              <p className="mt-2 text-sm text-white/80">
                A walkthrough mapped to your entities, pay structures and approval flows.
              </p>
            </div>
            <Button href="/demo" size="lg" variant="inverse">
              Book a Demo
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
