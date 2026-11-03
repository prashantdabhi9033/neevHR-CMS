import { ChooseAndSwitch } from "@/components/site/ChooseAndSwitch";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/site/Faq";
import { TrackView } from "@/components/site/TrackView";
import { CompareTable } from "@/components/pricing/CompareTable";
import { EditionFinder } from "@/components/pricing/EditionFinder";
import { EditionPlans } from "@/components/pricing/EditionPlans";
import { AiCreditsFlow } from "@/components/pricing/AiCreditsFlow";
import { pageMeta, softwareJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/site/JsonLd";
import { site } from "@/lib/site";
import {
  aiCreditPoints,
  everyEdition,
  featureCount,
  pricingFaqs,
  quoteFactors,
  quoteSteps,
} from "@/lib/pricing";

export const metadata: Metadata = pageMeta({
  title: "HRMS Pricing India: Core, Growth, Enterprise | NeevHR",
  absoluteTitle: true,
  description:
    "HRMS and payroll software pricing in INR, by employee count and edition. Compare Core, Growth and Enterprise feature by feature, and see how AI credits work.",
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
      <JsonLd data={softwareJsonLd(site.description)} />
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
            {["PF, ESI, PT, LWF and TDS in every edition", "No per-module licensing", "Guided go-live", "Fully AI enabled, on prepaid credits", "Data hosted in India"].map((c) => (
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
          <p className="mt-6 text-center text-sm text-body">
            Want it side by side?{" "}
            <a href="#compare" className="font-semibold text-brand hover:underline">Compare every feature</a>
            {" or "}
            <a href="#ai-credits" className="font-semibold text-brand hover:underline">see how AI credits work</a>.
          </p>

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

      {/* AI on credits */}
      <section id="ai-credits" className="scroll-mt-16 border-t border-line py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <SectionHead
              eyebrow="AI on prepaid credits"
              title="AI is not a price per employee"
              sub="NeevHR is fully AI enabled. AI is charged separately from your edition: it is switched on per module and paid from one prepaid balance."
            />
            <ul className="mt-7 grid gap-5 sm:grid-cols-2">
              {aiCreditPoints.map((p) => (
                <li key={p.title} className="flex gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-tint text-brand">
                    <Icon name={p.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{p.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-body">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/features/ai-assistant" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
              See every AI feature and what it sends <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <AiCreditsFlow />
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

      <ChooseAndSwitch />
    </>
  );
}
