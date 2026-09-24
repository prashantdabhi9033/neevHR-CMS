import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/site/PageHeader";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Disclaimer } from "@/components/site/Disclaimer";
import { Faq } from "@/components/site/Faq";
import { JsonLd } from "@/components/site/JsonLd";
import { CalcTracker } from "@/components/tools/CalcTracker";
import { tools, toolBySlug } from "@/lib/tools";
import { pageMeta, LAST_REVIEWED_ISO } from "@/lib/seo";
import { site } from "@/lib/site";

export function toolMetadata(slug: string): Metadata {
  const t = toolBySlug[slug];
  return pageMeta({
    title: t.seoTitle,
    description: t.metaDesc,
    path: `/tools/${slug}`,
  });
}

// Shared shell for every calculator page: calculator, explanation, formula,
// worked example, common mistakes, FAQ, related reading, CTA, review date and
// sources, all driven by lib/tools.ts.
export function ToolLayout({
  slug,
  children,
}: {
  slug: string;
  children: ReactNode;
}) {
  const t = toolBySlug[slug];
  const others = tools.filter((x) => x.slug !== slug);
  const url = `${site.url}/tools/${slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: `${t.name} by ${site.name}`,
          url,
          description: t.metaDesc,
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web",
          isAccessibleForFree: true,
          offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
          dateModified: LAST_REVIEWED_ISO,
          publisher: { "@id": `${site.url}/#organization` },
          inLanguage: "en-IN",
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Free tools", href: "/tools" },
          { name: t.name, href: `/tools/${slug}` },
        ]}
      />
      <PageHeader eyebrow="Free HR tools" title={t.name} sub={t.tagline} />

      <section className="py-12 lg:py-16">
        <Container className="max-w-4xl">
          <CalcTracker tool={slug}>{children}</CalcTracker>

          <div className="prose-neev mt-12">
            <h2>How it works</h2>
            {t.explanation.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
                Formula
              </h2>
              <ul className="mt-3 space-y-2">
                {t.formula.map((f) => (
                  <li key={f} className="tnum text-sm leading-relaxed text-body">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
                Worked example
              </h2>
              <p className="mt-3 text-sm font-semibold text-ink">{t.example.title}</p>
              <ul className="mt-2 space-y-2">
                {t.example.lines.map((l) => (
                  <li key={l} className="tnum flex items-start gap-2 text-sm text-body">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-line bg-surface-soft p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
              Common mistakes to avoid
            </h2>
            <ul className="mt-3 space-y-2">
              {t.mistakes.map((m) => (
                <li key={m} className="flex items-start gap-2.5 text-sm text-body">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {t.statutory && <Disclaimer sources={t.sources} className="mt-8" />}
        </Container>
      </section>

      <section className="border-y border-line bg-surface-soft">
        <Faq items={t.faqs} withSchema heading={`${t.name}: FAQs`} />
      </section>

      <section className="py-12 lg:py-16">
        <Container className="max-w-4xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
            Related reading
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {t.related.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="block rounded-xl border border-line bg-white px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {r.label} →
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-brand px-7 py-7 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-lg font-bold text-white">
                NeevHR runs these calculations for your whole payroll
              </p>
              <p className="mt-1 text-sm text-white/80">
                PF, ESI, PT, TDS, gratuity and bonus computed from one employee record every cycle.
              </p>
            </div>
            <Button href="/demo" variant="inverse">
              Book a demo
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
              More free tools
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/tools/${o.slug}`}
                  className="group rounded-xl border border-line bg-white p-5 transition-colors hover:border-brand/40 hover:bg-brand-tint/40"
                >
                  <h3 className="text-[15px] font-semibold text-ink group-hover:text-brand">
                    {o.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-body">{o.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
