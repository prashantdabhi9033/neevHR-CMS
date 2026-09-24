import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { HeroVisual } from "@/components/home/HeroVisual";
import { FeatureSection, type Feature } from "@/components/home/FeatureSection";
import { Reveal } from "@/components/site/Reveal";
import { Faq } from "@/components/site/Faq";
import { PayrollVisual } from "@/components/product/PayrollVisual";
import { AttendanceVisual } from "@/components/product/AttendanceVisual";
import { PerformanceVisual } from "@/components/product/PerformanceVisual";
import { RecruitmentVisual } from "@/components/product/RecruitmentVisual";
import { MobileVisual } from "@/components/product/MobileVisual";
import { ReportsVisual } from "@/components/product/ReportsVisual";
import {
  CompleteHrmsSection,
  OneRecordSection,
  SizeSection,
  WhatIsHrmsSection,
} from "@/components/home/HrmsSections";
import { JsonLd } from "@/components/site/JsonLd";
import { pageMeta } from "@/lib/seo";
import {
  compliancePoints,
  implementationSteps,
  platformCapabilities,
  site,
} from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "NeevHR - India-first HRMS & Payroll Software",
  absoluteTitle: true,
  description:
    "NeevHR is an India-first HRMS and payroll platform for growing businesses. Manage employees, attendance, leave, payroll, recruitment, performance and statutory compliance in one system.",
  path: "/",
});

const comparisonRows = [
  {
    dim: "Built for",
    neev: "Growing & mid-market India",
    tier1: "Large global enterprises",
    point: "One team or function",
  },
  {
    dim: "India statutory",
    neev: "PF, ESI, PT, TDS in the core",
    tier1: "Add-on or partner",
    point: "Manual or partial",
  },
  {
    dim: "Go live",
    neev: "Typically 4 to 8 weeks",
    tier1: "Often several months",
    point: "Fast, but limited",
  },
  {
    dim: "Configured by",
    neev: "Your trained HR admin",
    tier1: "Certified consultant",
    point: "Limited options",
  },
];

const valueProps = [
  {
    icon: "flag",
    title: "Built for India, only India",
    body: "PF, ESI, PT, LWF and TDS, gratuity, bonus and the DPDP Act 2023 live in the core, not a country pack bolted on. INR, the India financial year and state-wise PT and LWF tables throughout.",
  },
  {
    icon: "users",
    title: "One employee record, effective-dated",
    body: "Every promotion, transfer and pay change is a dated event on a single timeline. Nothing is overwritten, so you can run payroll, reports and org charts exactly as they stood on any date.",
  },
  {
    icon: "sliders",
    title: "Configuration over customization",
    body: "Leave, attendance, payroll, expense and appraisal are configurable rule sets your HR admin assigns to employee groups, in plain language. A new policy or business unit needs no code and no consultant.",
  },
  {
    icon: "bolt",
    title: "Implemented in weeks",
    body: "Guided migration moves your employee master, opening balances and documents across with dry-run validation. You run a parallel payroll cycle to reconcile, then go live. A typical implementation takes 4 to 8 weeks, depending on employee count, data quality, integrations and payroll complexity.",
  },
];

const features: Feature[] = [
  {
    eyebrow: "Payroll",
    title: "Run payroll accurately, every single cycle",
    body: "Attendance, leave and salary inputs flow into a run that moves from compute to verify, approve and publish, and the person who computed a run cannot approve it. PF with the ₹25,000 wage ceiling, ESI on gross up to ₹21,000, state PT, LWF and TDS are calculated in the same run, with an audit trail behind every change.",
    highlights: [
      "Configurable pay structures assigned to employee groups",
      "LOP, arrears and loan EMIs flow in automatically",
      "Bank files, salary register, ECR, challans, Form 24Q and Form 16",
    ],
    href: "/payroll",
    Visual: PayrollVisual,
  },
  {
    eyebrow: "Time & attendance",
    title: "Turn every punch into a payroll-ready day",
    body: "Capture attendance from biometric devices and the web, apply your shift and grace rules, and close each day into numbers payroll can trust. Regularisation and overtime are approved in the same inbox as everything else.",
    highlights: [
      "Biometric punches over the ADMS push protocol",
      "Configurable day-close, grace and overtime rules",
      "Pay-at-risk surfaces before payroll runs",
    ],
    href: "/features/attendance",
    Visual: AttendanceVisual,
  },
  {
    eyebrow: "Performance",
    title: "Reviews, calibration and increments on one record",
    body: "Set weighted goals, gather 360 feedback, and review talent on a 9-box grid and a rating distribution curve. Final sign-off maps straight to increment and bonus decisions, with the right authority at every step.",
    highlights: [
      "Weighted goals with a 100% validator",
      "360 feedback, 9-box and rating distribution",
      "Ratings reprice increments at final sign-off",
    ],
    href: "/features/performance",
    Visual: PerformanceVisual,
  },
  {
    eyebrow: "Recruitment",
    title: "Hire faster, and onboard from day one",
    body: "Move candidates from requisition to a signed offer in one flow, with interview panels, structured feedback and offers that carry the approved compensation. An accepted offer becomes an onboarding journey without re-keying a thing.",
    highlights: [
      "Requisitions with a validation gate",
      "Pipeline board, panels and offer history",
      "Hire-to-onboard handover into the employee record",
    ],
    href: "/features/recruitment",
    Visual: RecruitmentVisual,
  },
  {
    eyebrow: "Employee experience",
    title: "Self-service for every employee",
    body: "Employees check attendance, apply for leave, download payslips, submit tax declarations and claim expenses themselves, while managers act on approvals from one inbox. The NeevHR mobile app is coming soon.",
    highlights: [
      "Attendance, leave, payslips and tax declarations",
      "A unified inbox of everything awaiting you",
      "Mobile app: coming soon",
    ],
    href: "/mobile",
    Visual: MobileVisual,
  },
  {
    eyebrow: "Analytics",
    title: "Every list a report, every report a chart",
    body: "A report catalog across modules plus a self-serve builder. Pick a dataset, group and aggregate, visualise it, and drill from a chart to the underlying records, then export it or schedule it by email.",
    highlights: [
      "Report builder with group-by and aggregate",
      "Drill from any chart to the records behind it",
      "Dashboards for every persona",
    ],
    href: "/features/reports",
    Visual: ReportsVisual,
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${site.url}/#software`,
    name: site.name,
    url: site.url,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Human Resource Management Software",
    operatingSystem: "Web",
    description: site.description,
    areaServed: { "@type": "Country", name: "India" },
    inLanguage: "en-IN",
    publisher: { "@id": `${site.url}/#organization` },
    featureList: [
      "Employee management with effective-dated history",
      "Attendance, shifts, rosters and biometric integration",
      "Leave management",
      "Payroll with PF, ESI, PT, LWF and TDS",
      "PF ECR, ESI return, challans, Form 24Q and Form 16",
      "Recruitment and onboarding",
      "Performance and compensation",
      "Expenses, loans and variable pay",
      "Employee self-service",
      "HR reports and dashboards",
    ],
  };
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/#webpage`,
    url: site.url,
    name: "NeevHR - India-first HRMS & Payroll Software",
    description: site.metaDescription,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#software` },
    inLanguage: "en-IN",
    datePublished: "2026-09-01",
    dateModified: "2026-09-24",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".hero-intro"],
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={webPageJsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="pointer-events-none absolute -top-48 left-1/2 h-[620px] w-[960px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand/15 via-brand-soft/10 to-accent/10 blur-3xl" />
        <Container className="relative pt-16 text-center lg:pt-24">
          <div className="animate-fade-up mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">
              {site.tagline}
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              India-first HRMS &amp; Payroll Software for{" "}
              <span className="text-brand">Growing Businesses</span>
            </h1>
            <p className="hero-intro mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-body">
              NeevHR is a complete HRMS platform for employee management,
              attendance, leave, payroll, recruitment, performance, expenses
              and statutory compliance. Built for Indian companies with payroll
              and HR workflows at the core.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/demo" size="lg">
                Book a Demo
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href="/hrms" variant="secondary" size="lg">
                Explore HRMS Features
              </Button>
            </div>
            <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
              {[
                "PF, ESI, PT, LWF & TDS",
                "One effective-dated employee record",
                "Data hosted in India",
              ].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <Icon name="check" className="h-4 w-4 text-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <Reveal className="mx-auto mt-14 max-w-5xl pb-16 lg:mt-16 lg:pb-20">
            <HeroVisual />
          </Reveal>
        </Container>
      </section>

      <CompleteHrmsSection />
      <WhatIsHrmsSection />
      <OneRecordSection />
      <SizeSection />

      {/* Value props */}
      <section id="why" className="scroll-mt-16 border-b border-line bg-surface-soft py-20">
        <Container>
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Why NeevHR
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Built for the way India runs HR
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              The depth to run payroll and compliance at scale, with the clarity
              of a modern platform, and none of the cost, consultants or
              year-long rollout of a tier-one suite.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {valueProps.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-tint text-brand">
                    <Icon name={v.icon} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-body">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <div className="overflow-x-auto rounded-2xl border border-line bg-white shadow-[var(--shadow-card)]">
              <table className="w-full min-w-[560px] text-left text-sm">
                <caption className="sr-only">
                  How NeevHR compares to tier-one suites and point tools
                </caption>
                <thead>
                  <tr className="border-b border-line bg-surface-soft text-ink">
                    <th scope="col" className="px-5 py-3 font-semibold">What matters</th>
                    <th scope="col" className="px-5 py-3 font-semibold text-brand">NeevHR</th>
                    <th scope="col" className="px-5 py-3 font-semibold">Tier-one suites</th>
                    <th scope="col" className="px-5 py-3 font-semibold">Point tools</th>
                  </tr>
                </thead>
                <tbody className="text-body">
                  {comparisonRows.map((r) => (
                    <tr key={r.dim} className="border-b border-line last:border-0">
                      <th scope="row" className="px-5 py-3 font-medium text-ink">{r.dim}</th>
                      <td className="px-5 py-3 font-medium text-ink">{r.neev}</td>
                      <td className="px-5 py-3">{r.tier1}</td>
                      <td className="px-5 py-3">{r.point}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-muted">
              See the{" "}
              <Link href="/compare" className="font-medium text-brand hover:text-brand-dark">
                full comparison
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Feature sections */}
      <section id="modules" className="scroll-mt-16 border-b border-line">
        <Container className="pt-20 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              One platform
            </span>
            <h2 className="mx-auto mt-2 max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Unify people, pay and processes, without the silos
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-body">
              More than 30 modules share one employee record, so a change made
              once flows everywhere it belongs. A few of them below.
            </p>
          </Reveal>
        </Container>

        {features.map((f, i) => (
          <FeatureSection key={f.eyebrow} feature={f} flip={i % 2 === 1} />
        ))}

        <Container className="pb-20 text-center">
          <Button href="/features" variant="secondary" size="lg">
            See all modules
            <Icon name="arrow" className="h-4 w-4" />
          </Button>
        </Container>
      </section>

      {/* Platform capabilities */}
      <section className="border-b border-line bg-surface-soft py-20">
        <Container>
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Platform underneath
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Configurable by design, governed by default
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              The same cross-cutting platform powers every module, so
              configuration, access and audit work the same way everywhere.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platformCapabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 50}>
                <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                  <h3 className="text-base font-semibold text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Compliance */}
      <section
        id="compliance"
        className="scroll-mt-16 border-b border-line bg-ink py-20 text-white"
      >
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
              <Icon name="shield" className="h-4 w-4 text-accent" />
              India statutory compliance
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              How does NeevHR handle India statutory compliance?
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/70">
              PF, ESI, PT, LWF and TDS are calculated in every payroll run, and
              the filing outputs are generated from it: PF ECR, the ESIC
              contribution file, challans, the Form 24Q return file and Form 16.
              Statutory tables are configurable, so a rate change is a settings
              update, not a code change.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/security" variant="inverse">
                See security & compliance
              </Button>
              <Button
                href="/compare"
                className="bg-white/10 text-white hover:bg-white/15"
              >
                Why NeevHR
              </Button>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="grid grid-cols-2 gap-3">
              {compliancePoints.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium"
                >
                  <Icon name="check" className="h-4 w-4 shrink-0 text-accent" />
                  {c}
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-white/50">
              Built to the rules published by{" "}
              <a href="https://www.epfindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-2 hover:underline">EPFO</a>,{" "}
              <a href="https://www.esic.gov.in/" target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-2 hover:underline">ESIC</a>,{" "}
              the{" "}
              <a href="https://www.incometax.gov.in/" target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-2 hover:underline">Income Tax Department</a>{" "}
              and the{" "}
              <a href="https://www.meity.gov.in/data-protection-framework" target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-2 hover:underline">DPDP Act 2023</a>.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Implementation */}
      <section className="border-b border-line py-20">
        <Container>
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Implementation
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              From kickoff to first live payroll
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              A focused rollout your HR admin can own, reconciled against your
              current process before you go live. {site.implementation}
            </p>
            <p className="mt-3 text-sm">
              <Link href="/hrms-implementation" className="font-medium text-brand hover:text-brand-dark">
                Read the implementation guide
              </Link>
              {" · "}
              <Link href="/hrms-data-migration" className="font-medium text-brand hover:text-brand-dark">
                How data migration works
              </Link>
            </p>
          </Reveal>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {implementationSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <li className="relative h-full rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
                    {s.week}
                  </span>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="tnum grid h-7 w-7 place-items-center rounded-full bg-brand text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <h3 className="text-base font-semibold text-ink">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {s.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-line bg-surface-soft">
        <Faq withSchema />
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-brand px-8 py-14 text-center shadow-[var(--shadow-float)] sm:px-12">
              <div className="bg-grid absolute inset-0 opacity-20" />
              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  See NeevHR on your own numbers
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-white/80">
                  Book a walkthrough and we will show payroll, attendance and
                  approvals mapped to how your team actually runs HR.
                </p>
                <div className="mt-8 flex justify-center">
                  <Button href="/demo" size="lg" variant="inverse">
                    Book a demo
                    <Icon name="arrow" className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
