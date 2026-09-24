import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Disclaimer } from "@/components/site/Disclaimer";
import { Faq } from "@/components/site/Faq";
import { JsonLd } from "@/components/site/JsonLd";
import { pageMeta, LAST_REVIEWED, LAST_REVIEWED_ISO } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "India Payroll Software: PF, ESI, PT, LWF, TDS & Form 16",
  description:
    "Run Indian payroll with EPF, ESI, professional tax, LWF, TDS, Form 24Q, Form 16, gratuity and statutory bonus in one system. Rules, due dates and how NeevHR handles each.",
  path: "/india-payroll",
});

type Section = {
  id: string;
  title: string;
  rule: string[];
  neevhr: string[];
  links: { label: string; href: string }[];
};

const EPFO = { label: "EPFO", href: "https://www.epfindia.gov.in/" };
const ESIC = { label: "ESIC", href: "https://www.esic.gov.in/" };
const ITD = { label: "Income Tax Department", href: "https://www.incometax.gov.in/" };
const TIN = { label: "Protean (TIN-NSDL) e-TDS", href: "https://www.protean-tinpan.com/" };
const MOLE = { label: "Ministry of Labour & Employment", href: "https://labour.gov.in/" };

const sections: Section[] = [
  {
    id: "epf",
    title: "EPF / PF",
    rule: [
      "Employee and employer each contribute 12% of PF wages (basic plus DA). Of the employer's share, 8.33% goes to EPS on wages up to the ceiling (at most ₹2,083 a month).",
      "The wage ceiling is ₹25,000 a month from 17 September 2026 (it was ₹15,000), and employees earning up to ₹25,000 are now covered compulsorily. Employers may contribute on higher actual wages. EPFO guidance on applying the change within September 2026 was awaited at the time of review.",
      "EPF now runs under the EPF Scheme 2026, EPS 2026 and EDLI Scheme 2026, framed under the Code on Social Security, 2020.",
      "Employers also pay EDLI (0.5%) and administration charges (0.5%).",
      "Contributions and the ECR are due by the 15th of the following month.",
    ],
    neevhr: [
      "Calculates employee PF, EPS, EPF, EDLI and admin charges, with voluntary PF.",
      "Supports a capped or actual-basic PF basis, elected per financial year.",
      "Reduces PF wages for LOP and includes arrears.",
      "Generates the ECR text file and PF challan split by account.",
    ],
    links: [
      { label: "PF calculator", href: "/tools/pf-calculator" },
      { label: "EPF explained", href: "/blog/epf-explained-contribution-uan-withdrawal" },
    ],
  },
  {
    id: "esi",
    title: "ESI",
    rule: [
      "Applies to employees with gross wages up to ₹21,000 a month (₹25,000 for persons with disability) in covered establishments.",
      "Employee contribution 0.75% and employer contribution 3.25% of gross wages.",
      "Coverage is fixed for each contribution period: April to September and October to March.",
      "Contributions are due by the 15th of the following month.",
    ],
    neevhr: [
      "Tests eligibility on gross wages and holds coverage for the contribution period.",
      "Reduces ESI wages for LOP and includes arrears.",
      "Generates the ESIC monthly contribution upload file.",
    ],
    links: [
      { label: "ESI calculator", href: "/tools/esi-calculator" },
      { label: "ESI explained", href: "/blog/esi-explained-eligibility-benefits-contribution" },
    ],
  },
  {
    id: "pt",
    title: "Professional Tax",
    rule: [
      "Levied by states under Article 276 of the Constitution, capped at ₹2,500 per person a year.",
      "Slabs, deduction months and return frequency differ by state; some states do not levy PT.",
    ],
    neevhr: [
      "Calculates PT per employee from the slab table for their work-location state.",
      "Keeps state slabs in configurable tables, so a change is a settings update.",
      "Produces PT challan and return data per state.",
    ],
    links: [{ label: "Professional Tax by state", href: "/blog/professional-tax-by-state-india" }],
  },
  {
    id: "lwf",
    title: "Labour Welfare Fund",
    rule: [
      "State Labour Welfare Fund Acts set employee and employer contributions and frequency (monthly, half-yearly or annual).",
      "Not every state has an LWF Act.",
    ],
    neevhr: [
      "Deducts LWF in the months each state specifies, from configurable state tables.",
      "Generates LWF challan data.",
    ],
    links: [{ label: "What is LWF?", href: "/glossary/lwf" }],
  },
  {
    id: "tds",
    title: "TDS on salary",
    rule: [
      "Employers deduct tax from salary based on the employee's estimated annual income under the regime they choose (old or new).",
      "From 1 April 2026 the Income-tax Act, 2025 replaces the Income-tax Act, 1961. Section and form numbers are renumbered; familiar names are used on this page.",
      "Tax deducted is due by the 7th of the following month (30 April for March).",
    ],
    neevhr: [
      "Projects annual TDS under the old or new regime, with surcharge, rebate and marginal relief.",
      "Collects investment declarations and proofs in a configurable window, with HR verification.",
      "Accounts for previous-employer income for mid-year joiners.",
      "Generates the TDS challan and captures challan numbers.",
    ],
    links: [
      { label: "TDS: old vs new regime", href: "/blog/tds-on-salary-old-vs-new-regime-fy-2026-27" },
      { label: "HRA calculator", href: "/tools/hra-calculator" },
    ],
  },
  {
    id: "form-24q",
    title: "Form 24Q",
    rule: [
      "The quarterly TDS return for salary, filed through the e-TDS system.",
      "Commonly due by 31 July, 31 October, 31 January and 31 May for the four quarters.",
      "The fourth-quarter return carries annual salary details (Annexure II).",
    ],
    neevhr: [
      "Generates the Form 24Q return text file in the NSDL FVU format, with Annexure II in Q4 and Form 27A.",
      "Validate the file with the government file validation utility before filing.",
    ],
    links: [{ label: "Form 16 explained", href: "/blog/form-16-explained" }],
  },
  {
    id: "form-16",
    title: "Form 16",
    rule: [
      "The annual certificate of salary and tax deducted, issued to employees after the financial year, commonly by 15 June.",
      "Part A reflects tax deposited as per TRACES; Part B details salary and deductions.",
    ],
    neevhr: [
      "Generates Form 16 Part A and Part B as employer-issued PDFs, with Form 12BA for perquisites.",
      "Employees download Form 16 from self-service.",
    ],
    links: [{ label: "Form 16 explained", href: "/blog/form-16-explained" }],
  },
  {
    id: "gratuity",
    title: "Gratuity",
    rule: [
      "Payable after five years of continuous service (one year for fixed-term employees under the Code on Social Security, 2020, in force from 21 November 2025).",
      "15 × last drawn wages × completed years ÷ 26, up to ₹20 lakh.",
    ],
    neevhr: [
      "Computes gratuity in full and final settlement with the ceiling, and a forfeiture approval workflow.",
      "Posts a monthly gratuity provision to the payroll journal.",
    ],
    links: [
      { label: "Gratuity calculator", href: "/tools/gratuity-calculator" },
      { label: "Gratuity in India", href: "/blog/gratuity-in-india-eligibility-formula-tax" },
    ],
  },
  {
    id: "bonus",
    title: "Statutory bonus",
    rule: [
      "Employees earning up to ₹21,000 a month are eligible; bonus is 8.33% to 20% of the calculation wage (₹7,000 or the minimum wage, if higher).",
      "Covered by the Code on Wages, 2019, in force from 21 November 2025.",
    ],
    neevhr: [
      "Runs an annual bonus payout with eligibility and calculation ceilings and the statutory forms.",
      "Supports a monthly bonus provision and pro-rata bonus in full and final settlement.",
    ],
    links: [
      { label: "Bonus calculator", href: "/tools/bonus-calculator" },
      { label: "Statutory bonus explained", href: "/blog/statutory-bonus-payment-of-bonus-act" },
    ],
  },
  {
    id: "state-rules",
    title: "State-specific payroll rules",
    rule: [
      "Professional tax, Labour Welfare Fund, minimum wages and Shops and Establishments rules are set by each state.",
      "An employee's work location, not the head office, decides which state rules apply.",
    ],
    neevhr: [
      "Applies PT and LWF from the employee's work location on the effective-dated record.",
      "Holds state statutory tables as configurable settings that can be exported, reviewed and imported.",
      "Flags minimum-wage shortfalls in the payroll exception report.",
    ],
    links: [{ label: "Minimum wages in India", href: "/blog/minimum-wages-in-india-explained" }],
  },
  {
    id: "reports",
    title: "Payroll reports",
    rule: [
      "Employers keep wage registers and statutory records, and reconcile payroll to the books every month.",
    ],
    neevhr: [
      "Salary register with components itemised from your structures, and per-component year-to-date.",
      "Balanced journal voucher CSV with GL mapping and cost-centre split.",
      "Payroll exception report of anomaly and statutory checks after compute.",
    ],
    links: [{ label: "Reports & analytics", href: "/features/reports" }],
  },
  {
    id: "workflows",
    title: "Compliance workflows",
    rule: [
      "Most statutory deposits and returns have fixed monthly or quarterly due dates, with interest or damages for delay.",
    ],
    neevhr: [
      "An obligation register and filing calendar of what is due, filed, pending and overdue.",
      "Returns tracked from draft to filed, with portal references recorded.",
      "Period locks once a payroll month is closed.",
    ],
    links: [{ label: "Statutory compliance module", href: "/features/compliance" }],
  },
];

const faqs = [
  {
    q: "Which statutory deductions does Indian payroll involve?",
    a: "Typically employee PF, ESI (for eligible employees), professional tax (in states that levy it), Labour Welfare Fund (in states that have it) and TDS. Employers also contribute PF, EPS, EDLI, admin charges and ESI.",
  },
  {
    q: "Does NeevHR keep statutory rates up to date?",
    a: "Statutory rates and state slabs are held in configurable tables so they can be updated without a code change. Review them when rules change, and confirm with the relevant authority.",
  },
  {
    q: "Do the Labour Codes change payroll?",
    a: "The four Labour Codes came into force on 21 November 2025. They change definitions such as wages (the 50% rule), gratuity for fixed-term employees and wage payment timelines. State and central rules are still being finalised in places, so check the rules that apply to you.",
  },
  {
    q: "Does NeevHR file PF, ESI and TDS returns for us?",
    a: "NeevHR generates the files and challans. Upload and payment happen on the EPFO, ESIC and income tax portals.",
  },
];

export default function IndiaPayrollPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: `${site.url}/india-payroll`,
          name: "India Payroll Software",
          description: metadata.description,
          isPartOf: { "@id": `${site.url}/#website` },
          about: { "@id": `${site.url}/#software` },
          dateModified: LAST_REVIEWED_ISO,
          inLanguage: "en-IN",
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Payroll", href: "/payroll" },
          { name: "India payroll", href: "/india-payroll" },
        ]}
      />

      <section className="border-b border-line bg-surface-soft py-12 lg:py-16">
        <Container className="max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            India payroll
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            India Payroll Software
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-body">
            Run payroll according to applicable Indian salary, tax and statutory
            requirements. NeevHR brings salary structures, attendance, leave,
            deductions, statutory contributions, tax calculations, payroll
            approvals and payroll reporting into one system.
          </p>
          <p className="mt-3 text-sm text-muted">Last reviewed: {LAST_REVIEWED}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/demo" size="lg">
              Book a Demo
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
            <Button href="/payroll" variant="secondary" size="lg">
              Payroll software overview
            </Button>
          </div>
          <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-body hover:border-brand/40 hover:text-brand"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <section className="py-14 lg:py-16">
        <Container className="max-w-4xl space-y-12">
          {sections.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-ink">{s.title}</h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-line bg-white p-5">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                    The requirement
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {s.rule.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-brand/20 bg-brand-tint/40 p-5">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-brand">
                    In NeevHR
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {s.neevhr.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                {s.links.map((l) => (
                  <Link key={l.href} href={l.href} className="text-sm font-medium text-brand hover:text-brand-dark">
                    {l.label} →
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Disclaimer sources={[EPFO, ESIC, ITD, TIN, MOLE]} />
        </Container>
      </section>

      <section className="border-t border-line bg-surface-soft">
        <Faq items={faqs} withSchema heading="India payroll: common questions" />
      </section>

      <section className="py-16">
        <Container>
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl bg-brand px-8 py-12 text-center shadow-[var(--shadow-float)] sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                See Indian payroll run end to end
              </h2>
              <p className="mt-2 text-sm text-white/80">
                From attendance to ECR, challans, Form 24Q and Form 16.
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
