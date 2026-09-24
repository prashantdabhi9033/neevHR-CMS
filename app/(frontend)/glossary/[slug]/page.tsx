import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Disclaimer } from "@/components/site/Disclaimer";
import { JsonLd } from "@/components/site/JsonLd";
import { glossary, glossaryBySlug } from "@/lib/glossary";
import { pageMeta, LAST_REVIEWED_ISO } from "@/lib/seo";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return glossary.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const g = glossaryBySlug[slug];
  if (!g) return { title: "Term not found", robots: { index: false } };
  // Expanded name in the title only when it still fits in ~60 characters.
  const long = g.full ? `What is ${g.term} (${g.full})? Meaning & Example` : "";
  const title =
    long && long.length <= 58 ? long : `What is ${g.term}? Meaning, Formula & Example`;
  return pageMeta({
    title: title.length <= 58 ? title : `What is ${g.term}? Meaning & Example`,
    description: g.short,
    path: `/glossary/${slug}`,
  });
}

export default async function GlossaryTermPage({ params }: Params) {
  const { slug } = await params;
  const g = glossaryBySlug[slug];
  if (!g) notFound();
  const url = `${site.url}/glossary/${slug}`;

  const termJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${url}#term`,
    name: g.full ? `${g.term} (${g.full})` : g.term,
    description: g.short,
    url,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "NeevHR HR & Payroll Glossary",
      url: `${site.url}/glossary`,
    },
  };
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    name: `What is ${g.term}?`,
    dateModified: LAST_REVIEWED_ISO,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${url}#term` },
    inLanguage: "en-IN",
  };

  return (
    <>
      <JsonLd data={termJsonLd} />
      <JsonLd data={pageJsonLd} />
      <Breadcrumbs
        items={[
          { name: "Glossary", href: "/glossary" },
          { name: g.term, href: `/glossary/${slug}` },
        ]}
      />
      <article className="pb-16 pt-8 lg:pb-20">
        <Container className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            HR &amp; payroll glossary
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            What is {g.term}?
            {g.full && (
              <span className="mt-1 block text-xl font-semibold text-muted sm:text-2xl">
                {g.full}
              </span>
            )}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-body">{g.short}</p>

          <div className="prose-neev mt-10">
            <h2>Definition</h2>
            <p>{g.definition}</p>

            <h2>How it works</h2>
            <ul>
              {g.howItWorks.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <h2>Why HR and payroll teams care</h2>
            <p>{g.whyHrCares}</p>

            <h2>Example</h2>
          </div>
          <div className="mt-4 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
            <p className="text-sm font-semibold text-ink">{g.example.title}</p>
            <ul className="mt-3 space-y-2">
              {g.example.lines.map((l) => (
                <li key={l} className="tnum flex items-start gap-2.5 text-sm text-body">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {l}
                </li>
              ))}
            </ul>
          </div>

          <section className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-surface-soft p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
                {g.term} in NeevHR
              </h2>
              <ul className="mt-3 space-y-2">
                {g.product.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="text-sm font-medium text-ink hover:text-brand">
                      {p.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-surface-soft p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
                Related reading
              </h2>
              <ul className="mt-3 space-y-2">
                {g.related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="text-sm font-medium text-ink hover:text-brand">
                      {r.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {g.statutory && <Disclaimer sources={g.sources} className="mt-10" />}

          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-brand px-7 py-7 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-lg font-bold text-white">
                See how NeevHR handles {g.term} in payroll and HR
              </p>
              <p className="mt-1 text-sm text-white/80">
                A walkthrough on your own policies and pay structures.
              </p>
            </div>
            <Button href="/demo" variant="inverse">
              Book a demo
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </article>
    </>
  );
}
