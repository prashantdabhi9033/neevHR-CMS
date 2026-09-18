import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { HeroVisual } from "@/components/home/HeroVisual";
import {
  compliancePoints,
  differentiators,
  implementationSteps,
  moduleMap,
  site,
} from "@/lib/site";

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-brand shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              India-only HRMS · built for 500 to 5,000 employees
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              The HR foundation your{" "}
              <span className="text-brand">growing team</span> can build on.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">
              NeevHR brings payroll, attendance, leave, performance and
              recruitment into one configurable platform, with India&apos;s
              statutory rules in the core. Live in 4 to 8 weeks, run by your own
              HR admin.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/demo" size="lg">
                Book a demo
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href="/#modules" variant="secondary" size="lg">
                Explore the platform
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {[
                "PF, ESI, PT & TDS accuracy",
                "4 to 8 week rollout",
                "Configurable, no consultant needed",
              ].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <Icon name="check" className="h-4 w-4 text-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-fade-up lg:pl-4">
            <HeroVisual />
          </div>
        </Container>
      </section>

      {/* Differentiators */}
      <section id="why" className="scroll-mt-16 border-b border-line bg-surface-soft py-20">
        <Container>
          <SectionHead
            eyebrow="Why NeevHR"
            title="A best-of-breed platform, sized for the Indian mid-market"
            sub="Enough depth to run real HR and payroll at scale, without the cost, the consultants, or the multi-year rollout of a tier-one suite."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                <p className="mt-2 text-sm leading-relaxed text-body">{d.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Modules */}
      <section id="modules" className="scroll-mt-16 py-20">
        <Container>
          <SectionHead
            eyebrow="One platform"
            title="Everything HR, on one employee record"
            sub="Every employment change is a dated event on a single timeline. Configure each module as a rule set and assign it to employee groups, no code changes per business unit."
          />
          <div className="mt-12 space-y-10">
            {moduleMap.map((grp) => (
              <div key={grp.group}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">
                    {grp.group}
                  </h3>
                  <p className="text-sm text-muted">{grp.blurb}</p>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {grp.modules.map((m) => {
                    const inner = (
                      <>
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-[15px] font-semibold text-ink">
                            {m.name}
                          </h4>
                          {m.slug && (
                            <span className="text-xs font-semibold text-brand opacity-0 transition-opacity group-hover:opacity-100">
                              View →
                            </span>
                          )}
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-body">
                          {m.desc}
                        </p>
                      </>
                    );
                    const cls =
                      "group block rounded-xl border border-line bg-white p-5 transition-colors hover:border-brand/40 hover:bg-brand-tint/40";
                    return m.slug ? (
                      <Link key={m.name} href={`/product/${m.slug}`} className={cls}>
                        {inner}
                      </Link>
                    ) : (
                      <div key={m.name} className={cls}>
                        {inner}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Compliance */}
      <section
        id="compliance"
        className="scroll-mt-16 border-y border-line bg-ink py-20 text-white"
      >
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
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
            <div className="mt-8">
              <Button href="/demo" variant="secondary">
                See how compliance works
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
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
        </Container>
      </section>

      {/* Implementation */}
      <section className="py-20">
        <Container>
          <SectionHead
            eyebrow="Implementation"
            title="From kickoff to first live payroll in 4 to 8 weeks"
            sub="A focused rollout your HR admin can own, benchmarked against your current process before you go live."
          />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {implementationSteps.map((s, i) => (
              <li
                key={s.title}
                className="relative rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
                  {s.week}
                </span>
                <div className="mt-1 flex items-center gap-2">
                  <span className="tnum grid h-7 w-7 place-items-center rounded-full bg-brand text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-base font-semibold text-ink">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-body">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="pb-24">
        <Container>
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
        </Container>
      </section>
    </>
  );
}

function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-semibold uppercase tracking-wider text-brand">
        {eyebrow}
      </span>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-[15px] leading-relaxed text-body">{sub}</p>
    </div>
  );
}
