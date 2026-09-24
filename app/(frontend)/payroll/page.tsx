import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/site/Faq";
import { JsonLd } from "@/components/site/JsonLd";
import { Reveal } from "@/components/site/Reveal";
import { PayrollVisual } from "@/components/product/PayrollVisual";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Payroll Software for Indian Companies | PF, ESI, TDS | NeevHR",
  absoluteTitle: true,
  description:
    "Run Indian payroll with PF, ESI, PT and TDS workflows. Automate salary processing, attendance inputs, deductions, payroll reports and statutory outputs with NeevHR.",
  path: "/payroll",
});

// Every row is verified against the product code (24 Sep 2026).
const capabilities: { name: string; detail: string; href?: string }[] = [
  { name: "PF / EPF", detail: "Employee and employer PF, EPS split, EDLI and admin charges; ₹15,000 ceiling or actual basic, elected per financial year.", href: "/glossary/pf" },
  { name: "ESI", detail: "Eligibility on gross wages up to ₹21,000, employee 0.75% and employer 3.25%, contribution-period aware.", href: "/glossary/esi" },
  { name: "Professional Tax", detail: "Per-state slabs from configurable tables, applied by work location.", href: "/glossary/pt" },
  { name: "Labour Welfare Fund", detail: "Monthly, half-yearly or annual deductions per state, with LWF challan.", href: "/glossary/lwf" },
  { name: "TDS", detail: "Old and new regime projection with declarations, proofs, HRA, previous-employer income, surcharge and marginal relief." },
  { name: "Form 16", detail: "Part A and Part B generated as employer-issued PDFs, with Form 12BA." },
  { name: "Form 24Q", detail: "Quarterly return text file in the NSDL FVU format, with Annexure II in Q4 and Form 27A. Validate with the government utility before filing." },
  { name: "ECR", detail: "EPFO ECR text file generated from the published payroll run." },
  { name: "Challans", detail: "PF challan by account, TDS challan (ITNS 281) with challan-number capture, PT and LWF challans. Payment itself is made on the government portals." },
  { name: "Payroll registers", detail: "Salary register on screen and as CSV, with components itemised from your pay structures." },
  { name: "Bank payment files", detail: "CSV in a generic layout and layouts for HDFC, ICICI, SBI, Axis and Kotak, with NEFT or RTGS chosen by amount." },
  { name: "Gratuity", detail: "Computed in full and final settlement with the ₹20 lakh ceiling, plus a monthly provision posted to the journal.", href: "/glossary/gratuity" },
  { name: "Bonus", detail: "Annual statutory bonus run at 8.33% to 20%, with eligibility and calculation ceilings and the statutory forms." },
  { name: "Arrears", detail: "Backdated and mid-month revisions produce arrears that flow into PF and ESI." },
  { name: "LOP", detail: "Loss of pay from attendance and leave reduces statutory wages, and can be reversed in a later month.", href: "/glossary/lop" },
  { name: "Loans", detail: "Multiple loans per employee with EMI recovery in payroll, foreclosure, write-off and recovery in F&F." },
  { name: "Variable pay", detail: "Incentive plans with caps, frequency, CSV upload and approval before payroll." },
  { name: "Full & final settlement", detail: "Salary to the last day, leave encashment, gratuity, bonus and recoveries on one worksheet.", href: "/glossary/full-and-final-settlement" },
];

const workflow = [
  { t: "Inputs", b: "Attendance, leave, LOP, new joiners, exits, arrears, loans, reimbursements and variable pay are gathered for the period." },
  { t: "Compute", b: "Earnings, deductions, PF, ESI, PT, LWF and TDS are calculated for every employee from their effective-dated structure." },
  { t: "Verify", b: "A post-compute exception report flags anomalies and statutory mismatches for review." },
  { t: "Approve", b: "The run goes through its approval chain. The person who computed or verified it cannot approve it." },
  { t: "Publish", b: "Payslips are released, and bank files, ECR, ESI file, challans, register and journal voucher are generated." },
];

const payrollFaqs = [
  {
    q: "What does NeevHR payroll software do?",
    a: "It runs monthly salary processing for Indian companies: earnings and deductions from configurable pay structures, attendance and leave inputs, LOP, arrears, loans, variable pay, and statutory PF, ESI, PT, LWF and TDS, followed by payslips, bank files and statutory outputs.",
  },
  {
    q: "Is NeevHR payroll connected to attendance and leave?",
    a: "Yes. Payroll reads closed attendance and approved leave from the same employee record, so LOP and overtime do not have to be re-entered.",
  },
  {
    q: "Can we have different salary structures for different groups?",
    a: "Yes. Pay structures and components are configured and assigned to employee groups, and revisions are effective-dated.",
  },
  {
    q: "Does NeevHR file returns on government portals for us?",
    a: "No. NeevHR generates the files and challans (ECR, ESI contribution file, Form 24Q return file, challans). Your team uploads them and makes payments on the government portals.",
  },
  {
    q: "Does NeevHR generate Form 16?",
    a: "Yes. Form 16 Part A and Part B are generated as employer-issued PDFs. Part A downloaded from TRACES remains the official source for tax deposited.",
  },
  {
    q: "Can we pay salaries directly from NeevHR?",
    a: "NeevHR generates bank payment files for upload to your bank. It does not move money itself.",
  },
  {
    q: "Does NeevHR export to our accounting system?",
    a: "Yes, as a balanced journal voucher CSV with GL code mapping and cost-centre split. A direct Tally connector is not available.",
  },
  {
    q: "What happens if an employee joins or leaves mid-month?",
    a: "Pay is prorated for payable days. Future-dated joiners are excluded until their joining date, and leavers are settled through full and final settlement.",
  },
];

export default function PayrollPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: `${site.url}/payroll`,
          name: "Payroll Software for Indian Companies",
          description: metadata.description,
          isPartOf: { "@id": `${site.url}/#website` },
          about: { "@id": `${site.url}/#software` },
          dateModified: "2026-09-24",
          inLanguage: "en-IN",
        }}
      />
      <Breadcrumbs
        items={[
          { name: "HRMS", href: "/hrms" },
          { name: "Payroll", href: "/payroll" },
        ]}
      />

      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <Container className="relative grid items-center gap-12 py-12 lg:grid-cols-[1fr_1.05fr] lg:py-16">
          <div className="animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Payroll
            </span>
            <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Payroll Software for Indian Companies
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">
              NeevHR payroll software automates monthly salary processing,
              earnings and deductions, attendance inputs, leave, LOP, arrears,
              loans, variable pay and statutory calculations for Indian
              businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/demo" size="lg">
                Book a Demo
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href="/india-payroll" variant="secondary" size="lg">
                India statutory guide
              </Button>
            </div>
          </div>
          <div className="animate-fade-up lg:pl-4">
            <PayrollVisual />
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <Reveal className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              What NeevHR payroll supports
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              Each item below is available in the product today. Where a
              limitation matters, it is stated.
            </p>
          </Reveal>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line bg-white shadow-[var(--shadow-card)]">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">Payroll capabilities supported by NeevHR</caption>
              <thead>
                <tr className="border-b border-line bg-surface-soft text-ink">
                  <th scope="col" className="w-48 px-5 py-3 font-semibold">Capability</th>
                  <th scope="col" className="px-5 py-3 font-semibold">How NeevHR handles it</th>
                </tr>
              </thead>
              <tbody className="text-body">
                {capabilities.map((c) => (
                  <tr key={c.name} className="border-b border-line align-top last:border-0">
                    <th scope="row" className="px-5 py-3 font-medium text-ink">
                      <span className="inline-flex items-center gap-2">
                        <Icon name="check" className="h-4 w-4 shrink-0 text-accent" />
                        {c.href ? (
                          <Link href={c.href} className="hover:text-brand">{c.name}</Link>
                        ) : (
                          c.name
                        )}
                      </span>
                    </th>
                    <td className="px-5 py-3">{c.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface-soft py-16 lg:py-20">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-ink">How a payroll run works</h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {workflow.map((w, i) => (
              <li key={w.t} className="rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-card)]">
                <span className="tnum grid h-7 w-7 place-items-center rounded-full bg-brand text-xs font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-3 text-[15px] font-semibold text-ink">{w.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{w.b}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Who uses it", b: "Payroll teams run cycles, HR manages structures and inputs, finance approves and reconciles, and employees see payslips and tax details in self-service." },
            { t: "Controls", b: "Separation of duties between compute, verify and approve, period locks, an audit log, and an input fingerprint so a run cannot be approved on stale data." },
            { t: "Related modules", b: "Attendance, leave, loans, expenses, variable pay, benefits and exit all feed payroll from the same employee record." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
              <h2 className="text-lg font-semibold text-ink">{x.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-body">{x.b}</p>
            </div>
          ))}
        </Container>
        <Container className="mt-8 flex flex-wrap gap-3">
          {[
            { l: "India payroll & statutory", h: "/india-payroll" },
            { l: "Statutory compliance", h: "/features/compliance" },
            { l: "Attendance", h: "/features/attendance" },
            { l: "Loans & advances", h: "/features/loans" },
            { l: "Variable pay", h: "/features/variable-pay" },
            { l: "Exit & F&F", h: "/features/exit" },
            { l: "PF calculator", h: "/tools/pf-calculator" },
            { l: "Monthly payroll process", h: "/blog/monthly-payroll-process-step-by-step" },
          ].map((x) => (
            <Link
              key={x.h}
              href={x.h}
              className="rounded-xl border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
            >
              {x.l} →
            </Link>
          ))}
        </Container>
      </section>

      <section className="border-t border-line bg-surface-soft">
        <Faq items={payrollFaqs} withSchema heading="Payroll software: frequently asked questions" />
      </section>

      <section className="py-16">
        <Container>
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl bg-brand px-8 py-12 text-center shadow-[var(--shadow-float)] sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Run a parallel payroll on NeevHR
              </h2>
              <p className="mt-2 text-sm text-white/80">
                See your own structures computed side by side with your current process.
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
