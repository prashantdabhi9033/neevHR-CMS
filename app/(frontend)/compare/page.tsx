import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/site/PageHeader";
import Link from "next/link";
import { differentiators } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { pageMeta, LAST_REVIEWED } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "HRMS Comparison: NeevHR vs Suites, Point Tools & Spreadsheets",
  description:
    "Compare HRMS approaches for Indian companies: global tier-one suites, point tools and spreadsheets, and an India-first HRMS like NeevHR, plus a checklist for evaluating vendors.",
  path: "/compare",
});

const checklist = [
  { t: "Payroll and statutory depth", b: "Are PF, ESI, PT, LWF and TDS calculated natively? Which filing files (ECR, ESI, Form 24Q, Form 16) are generated, and which steps stay manual?" },
  { t: "Attendance inputs", b: "Which biometric devices and protocols are supported, and how do LOP and overtime reach payroll?" },
  { t: "One record or many", b: "Do modules share one employee record with dated history, or sync between separate systems?" },
  { t: "Configuration", b: "Can your HR admin change policies, or does every change need the vendor or a consultant?" },
  { t: "Security", b: "How is your data isolated, encrypted and audited? Where is it hosted? Which certifications are actually held?" },
  { t: "Implementation", b: "What is included, how is data migrated and reconciled, and what timeline is realistic for your size?" },
  { t: "Pricing", b: "Is pricing per employee, per module or by edition, and what do implementation and integrations cost?" },
  { t: "Mobile and self-service", b: "What can employees do themselves today, and is the mobile app live in the stores?" },
];

const rows: { dim: string; neev: string; tier1: string; point: string }[] = [
  {
    dim: "Built for",
    neev: "Growing and mid-market companies in India",
    tier1: "Large global enterprises",
    point: "Small teams or a single function",
  },
  {
    dim: "India statutory",
    neev: "PF, ESI, PT, LWF, TDS, gratuity, bonus and DPDP in the core",
    tier1: "Via country packs and add-ons",
    point: "Partial, varies by tool",
  },
  {
    dim: "Implementation",
    neev: "Typically 4 to 8 weeks",
    tier1: "Several months to over a year",
    point: "Fast, but limited scope",
  },
  {
    dim: "Who configures it",
    neev: "A trained HR admin",
    tier1: "Certified consultants",
    point: "HR admin, where configurable",
  },
  {
    dim: "Scope",
    neev: "Full lifecycle on one employee record",
    tier1: "Full lifecycle, high complexity",
    point: "One or two functions, siloed data",
  },
  {
    dim: "Commercials",
    neev: "Edition-based pricing in INR",
    tier1: "Enterprise pricing",
    point: "Low, but adds up across tools",
  },
];

export default function ComparePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "HRMS comparison", href: "/compare" }]} />
      <PageHeader
        eyebrow="HRMS comparison"
        title="HRMS comparison: which approach fits an Indian company?"
        sub="Global suites are powerful but heavy and consultant-led. Point tools and spreadsheets are quick but shallow and siloed. NeevHR is built for the gap in between."
      />

      {/* Comparison table */}
      <section className="py-14 lg:py-16">
        <Container>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-surface-soft">
                  <th className="px-5 py-4 font-semibold text-muted">
                    Consideration
                  </th>
                  <th className="px-5 py-4 font-bold text-brand">NeevHR</th>
                  <th className="px-5 py-4 font-semibold text-ink">
                    Global tier-one suites
                  </th>
                  <th className="px-5 py-4 font-semibold text-ink">
                    Point tools & spreadsheets
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.dim} className="border-t border-line align-top">
                    <td className="px-5 py-4 font-medium text-ink">{r.dim}</td>
                    <td className="bg-brand-tint/40 px-5 py-4 text-body">
                      {r.neev}
                    </td>
                    <td className="px-5 py-4 text-muted">{r.tier1}</td>
                    <td className="px-5 py-4 text-muted">{r.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted">
            A general characterisation of common approaches, not a claim about
            any specific vendor. Implementation time for NeevHR is typically 4
            to 8 weeks, depending on employee count, data quality, integrations
            and payroll complexity. Last reviewed: {LAST_REVIEWED}.
          </p>
        </Container>
      </section>

      {/* Evaluation checklist */}
      <section className="border-t border-line py-16 lg:py-20">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-ink">
            How to compare HRMS vendors
          </h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-body">
            Ask every vendor, including us, the same questions and ask to see
            the answer in the product. See the full{" "}
            <Link href="/best-hrms-software-india" className="font-medium text-brand hover:text-brand-dark">
              HRMS selection guide for India
            </Link>
            .
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {checklist.map((c) => (
              <div key={c.t} className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                <h3 className="text-[15px] font-semibold text-ink">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{c.b}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Differentiators */}
      <section className="border-t border-line bg-surface-soft py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-tint text-brand">
                  <Icon name={d.icon} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/demo" size="lg">
              Book a Demo
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
