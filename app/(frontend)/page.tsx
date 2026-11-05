import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { DashboardShowcase } from "@/components/showcase/DashboardShowcase";
import { FeatureSection, type Feature } from "@/components/home/FeatureSection";
import { Reveal } from "@/components/site/Reveal";
import { Faq } from "@/components/site/Faq";
import { PayrollVisual } from "@/components/product/PayrollVisual";
import { AttendanceVisual } from "@/components/product/AttendanceVisual";
import { PerformanceVisual } from "@/components/product/PerformanceVisual";
import { WhatIsNeevhrSection } from "@/components/home/HrmsSections";
import {
  IntegrationsSecuritySection,
  ModuleOverview,
  TrustStrip,
  WhyNeevhrSection,
} from "@/components/home/HomeSections";
import { JsonLd } from "@/components/site/JsonLd";
import { Testimonials } from "@/components/home/Testimonials";
import { PhotoHero } from "@/components/home/PhotoHero";
import { AiModulesHome } from "@/components/ai/AiModulesSection";
import { pageMeta, pageDateISO } from "@/lib/seo";
import { implementationSteps, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "HRMS & Payroll Software in India, AI Enabled | NeevHR",
  absoluteTitle: true,
  description:
    "NeevHR is an India-first HRMS and payroll platform for growing businesses. Manage employees, attendance, leave, payroll, recruitment, performance and statutory compliance in one system, fully AI enabled, with AI inside each module.",
  path: "/",
});

// Three modules shown in depth; the rest are one click away in the links under them.
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
];

const moreModules = [
  { label: "Recruitment", href: "/features/recruitment" },
  { label: "Leave", href: "/features/leave" },
  { label: "Employee self-service and mobile", href: "/mobile" },
  { label: "Reports & analytics", href: "/features/reports" },
  { label: "Expenses", href: "/features/expenses" },
  { label: "Exit and F&F", href: "/features/exit" },
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
      "AI assistant that answers within each person's access",
      "AI inside each module: resume match, payroll change explanation, receipt and tax proof reading, helpdesk drafts, report from a sentence",
      "OKR and goal cascade",
      "Disciplinary cases",
      "POSH complaint route for the Internal Committee",
      "Approvals from Slack, Microsoft Teams and WhatsApp, connected per company",
    ],
  };
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/#webpage`,
    url: site.url,
    name: "NeevHR - India-first HRMS & Payroll Software with AI",
    description: site.metaDescription,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#software` },
    inLanguage: "en-IN",
    datePublished: "2026-09-01",
    dateModified: pageDateISO(""),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".hero-intro"],
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={webPageJsonLd} />

      <PhotoHero />

      <TrustStrip />

      <WhatIsNeevhrSection />

      {/* The product, right under the first block. */}
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <Container className="relative">
          <h2 className="sr-only">The NeevHR dashboard</h2>
          {/* Breaks out of the text container so the dashboard scene shows large and readable. */}
          <div className="relative left-1/2 w-[min(1360px,calc(100vw-24px))] -translate-x-1/2 py-12 lg:py-16">
            <Reveal>
              <DashboardShowcase />
            </Reveal>
          </div>
        </Container>
      </section>

      <ModuleOverview />

      {/* Feature sections */}
      <section id="modules" className="scroll-mt-16 border-b border-line">
        <Container className="pt-16 text-center lg:pt-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              One platform
            </span>
            <h2 className="mx-auto mt-2 max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Unify people, pay and processes, without the silos
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-body">
              More than 30 modules work on the same employee profile, so a change
              made once updates everywhere it is needed. Three of them below.
            </p>
          </Reveal>
        </Container>

        {features.map((f, i) => (
          <FeatureSection key={f.eyebrow} feature={f} flip={i % 2 === 1} compact />
        ))}

        <Container className="pb-16 text-center lg:pb-20">
          <ul className="flex flex-wrap justify-center gap-2">
            {moreModules.map((m) => (
              <li key={m.href}>
                <Link
                  href={m.href}
                  className="inline-block rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium text-body transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {m.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href="/features" variant="secondary" size="lg">
              See all modules
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      <AiModulesHome />

      <WhyNeevhrSection />

      <IntegrationsSecuritySection />

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
            <p className="mt-2 text-sm text-body">
              Moving from Excel or another HRMS? Employee master, org structure, documents, leave and loan balances
              and year-to-date payroll come across from CSV with a dry run.{" "}
              <Link href="/switch-from-excel" className="font-medium text-brand hover:text-brand-dark">
                From Excel
              </Link>
              {" · "}
              <Link href="/switch-from-legacy-hrms" className="font-medium text-brand hover:text-brand-dark">
                From another HRMS
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

      <Testimonials />

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
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                  <Button href="/demo" size="lg" variant="inverse">
                    Book a demo
                    <Icon name="arrow" className="h-4 w-4" />
                  </Button>
                  <Link href="/pricing" className="text-sm font-semibold text-white hover:text-white/80">
                    See editions →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
