import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/site/Faq";
import { TrackView } from "@/components/site/TrackView";
import { CompareTable } from "@/components/pricing/CompareTable";
import { EditionFinder } from "@/components/pricing/EditionFinder";
import { EditionPlans } from "@/components/pricing/EditionPlans";
import { pageMeta } from "@/lib/seo";
import {
  everyEdition,
  featureCount,
  pricingFaqs,
  quoteFactors,
  quoteSteps,
} from "@/lib/pricing";

export const metadata: Metadata = pageMeta({
  title: "HRMS Pricing India | NeevHR",
  absoluteTitle: true,
  description:
    "NeevHR pricing in INR, based on employee count and edition. Compare what the Core, Growth and Enterprise editions include, feature by feature.",
  path: "/pricing",
});

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-semibold uppercase tracking-wider text-accent-dark">{eyebrow}</span>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h2>
      {sub && <p className="mt-3 text-[15px] leading-relaxed text-body">{sub}</p>}
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <TrackView event="pricing_view" />
      <Breadcrumbs items={[{ name: "Pricing", href: "/pricing" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-surface-soft pb-28 pt-14 lg:pt-16">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
        <Container className="relative text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Pricing</span>
          <h1 className="mx-auto mt-2 max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-5xl">
            One platform, three editions, priced for your headcount
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-body sm:text-base">
            Every edition carries India statutory payroll. Pick the edition that fits today, compare all {featureCount} features
            below, and we will prepare a quote in INR.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {["PF, ESI, PT, LWF and TDS in every edition", "No per-module licensing", "Live in 4 to 8 weeks", "Data hosted in India"].map((c) => (
              <span key={c} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-body ring-1 ring-line">
                <Icon name="check" className="h-3.5 w-3.5 text-accent" strokeWidth={2.2} />
                {c}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Edition cards */}
      <section className="pb-16">
        <Container>
          <div className="-mt-20">
            <EditionPlans />
          </div>

          {/* In every edition */}
          <div className="mt-14 rounded-2xl border border-line bg-cream/60 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-ink">Included in every edition</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {everyEdition.map((x) => (
                <div key={x.title} className="flex gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-brand ring-1 ring-line">
                    <Icon name={x.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{x.title}</p>
                    <p className="mt-0.5 text-sm text-body">{x.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Finder */}
      <section className="border-t border-line bg-surface-soft py-16">
        <Container>
          <SectionHead
            eyebrow="Edition finder"
            title="Not sure which edition fits?"
            sub="Tick what your HR team needs. We show the edition that covers all of it."
          />
          <div className="mt-8">
            <EditionFinder />
          </div>
        </Container>
      </section>

      {/* Full comparison */}
      <section id="compare" className="scroll-mt-16 py-16">
        <Container>
          <SectionHead
            eyebrow="Compare editions"
            title="Every feature, edition by edition"
            sub="Search for what matters to you, or switch on differences only to see what each edition adds."
          />
          <div className="mt-8">
            <CompareTable />
          </div>
        </Container>
      </section>

      {/* How the quote works */}
      <section className="border-t border-line bg-surface-soft py-16">
        <Container>
          <SectionHead eyebrow="Your quote" title="From first call to go-live" />
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quoteSteps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-line bg-white p-5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-sm font-bold text-white">{i + 1}</span>
                <h3 className="mt-4 text-[15px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-body">{s.body}</p>
              </li>
            ))}
          </ol>

          <h3 className="mt-14 text-lg font-bold text-ink">What to expect in a quote</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quoteFactors.map((c) => (
              <div key={c.t} className="rounded-2xl border border-line bg-white p-5">
                <h4 className="text-[15px] font-semibold text-ink">{c.t}</h4>
                <p className="mt-2 text-sm leading-relaxed text-body">{c.b}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <p className="text-[15px] text-body">Ready to size it for your team?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/demo?intent=quote" size="lg">Get a quote</Button>
              <Button href="/demo" variant="secondary" size="lg">Book a demo</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <Faq items={pricingFaqs} withSchema heading="Pricing questions" />
      </section>
    </>
  );
}
