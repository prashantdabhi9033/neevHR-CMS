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
  compliancePoints,
  implementationSteps,
  platformCapabilities,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const valueProps = [
  {
    icon: "flag",
    title: "Built for India, only India",
    body: "PF, ESI, PT, LWF and TDS, gratuity, bonus, POSH and the DPDP Act 2023 live in the core, not a country pack bolted on. INR, the India financial year and state-wise statutory rules throughout, kept current with the law.",
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
    title: "Live in 4 to 8 weeks",
    body: "Guided migration moves your employee master, balances and documents across cleanly. You run a parallel payroll cycle to reconcile, then go live, in weeks, not quarters.",
  },
];

const features: Feature[] = [
  {
    eyebrow: "Payroll",
    title: "Run payroll accurately, every single cycle",
    body: "Attendance, leave and salary inputs sync into a five-stage run. PF at the ₹15,000 ceiling, ESI to ₹21,000 gross, state PT and TDS are computed at current rates, with a last-net versus this-net check before you approve and a full audit trail behind every rupee.",
    highlights: [
      "Configurable pay structures assigned to employee groups",
      "LOP, arrears and loan EMIs flow in automatically",
      "NEFT and RTGS files, register, ECR, challans and Form 16",
    ],
    href: "/features/payroll",
    Visual: PayrollVisual,
  },
  {
    eyebrow: "Time & attendance",
    title: "Turn every punch into a payroll-ready day",
    body: "Capture attendance from biometric devices, web and mobile, apply your shift and grace rules, and close each day into numbers payroll can trust. Regularisation and overtime are approved in the same inbox as everything else.",
    highlights: [
      "Biometric device ingestion with live health monitoring",
      "Configurable day-close, grace and overtime rules",
      "Pay-at-risk surfaces before payroll runs",
    ],
    href: "/features/attendance",
    Visual: AttendanceVisual,
  },
  {
    eyebrow: "Performance",
    title: "Reviews, calibration and increments on one record",
    body: "Set weighted goals, gather 360 feedback, and calibrate talent on a 9-box grid and a rating bell curve, so ratings stay honest. Sign-off maps straight to increment and bonus decisions, with the right authority at every step.",
    highlights: [
      "Weighted goals with a 100% validator",
      "360 feedback, 9-box and bell-curve calibration",
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
    title: "HR in every employee's pocket",
    body: "Self-service should not need a desk. Employees punch attendance, apply for leave, view payslips and act on approvals from a mobile app, in English and Hindi, while managers approve on the go.",
    highlights: [
      "Attendance, leave, payslips and approvals on mobile",
      "A unified inbox of everything awaiting you",
      "First-class in English and Hindi",
    ],
    href: "/mobile",
    Visual: MobileVisual,
  },
  {
    eyebrow: "Analytics",
    title: "Every list a report, every report a chart",
    body: "A report catalog across every module plus a self-serve builder. Pick a dataset, group and aggregate, visualise it, and drill from any chart straight to the underlying records, then export to CSV, Excel or PDF.",
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
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    description: site.description,
    offers: { "@type": "Offer", priceCurrency: "INR" },
    areaServed: "IN",
  };
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/#webpage`,
    url: site.url,
    name: `${site.name} - India-first HRMS for growing teams`,
    isPartOf: { "@id": `${site.url}/#website` },
    inLanguage: "en-IN",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".hero-intro"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="pointer-events-none absolute -top-48 left-1/2 h-[620px] w-[960px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand/15 via-brand-soft/10 to-accent/10 blur-3xl" />
        <Container className="relative pt-16 text-center lg:pt-24">
          <div className="animate-fade-up mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]">
              One platform to run{" "}
              <span className="text-brand">all of HR</span>, the India way.
            </h1>
            <p className="hero-intro mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-body">
              NeevHR is a configurable, India-only HRMS that brings payroll,
              attendance, leave, performance and recruitment onto one
              effective-dated employee record, with India&apos;s statutory rules
              (PF, ESI, PT and TDS) in the core. Built for companies with 500 to
              5,000 employees, it goes live in 4 to 8 weeks and is run by your
              own HR admin.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/demo" size="lg">
                Book a demo
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href="/features" variant="secondary" size="lg">
                Explore the platform
              </Button>
            </div>
            <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
              {[
                "PF, ESI, PT & TDS accuracy",
                "20+ modules, one record",
                "Web & mobile self-service",
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

      {/* Value props */}
      <section id="why" className="scroll-mt-16 border-b border-line bg-surface-soft py-20">
        <Container>
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Why NeevHR
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Built the way Indian HR actually works
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              Enough depth to run real HR and payroll at scale, with the ease of
              a modern platform, and none of the cost, consultants or year-long
              rollout of a tier-one suite.
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
              Twenty-plus modules on one employee record, so a change in one
              place flows everywhere it is needed. Here are a few of them.
            </p>
          </Reveal>
        </Container>

        {features.map((f, i) => (
          <FeatureSection key={f.eyebrow} feature={f} flip={i % 2 === 1} />
        ))}

        <Container className="pb-20 text-center">
          <Button href="/features" variant="secondary" size="lg">
            See all 20+ modules
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
              Compliance is in the core, not an afterthought
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/70">
              Statutory thresholds, returns and challans are built for Indian
              law and kept current. Row-level tenant isolation and the DPDP Act
              2023 protect employee data by design.
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
              From kickoff to first live payroll in 4 to 8 weeks
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              A focused rollout your HR admin can own, benchmarked against your
              current process before you go live.
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
