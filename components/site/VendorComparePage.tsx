import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/site/Faq";
import { JsonLd } from "@/components/site/JsonLd";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { competitors, type Competitor } from "@/lib/competitors";

export function vendorMetadata(c: Competitor): Metadata {
  return pageMeta({
    title: `NeevHR vs ${c.name}: Factual HRMS Comparison (${c.checkedMonth})`,
    description: c.metaDesc,
    path: `/neevhr-vs-${c.slug}`,
    type: "article",
    modifiedTime: c.checkedIso,
  });
}

// Factual side-by-side (spec §14): NeevHR's verified capabilities against
// what the other vendor documents publicly, each row with a source link and
// the date checked. No "better than" claims.
export function VendorComparePage({ c }: { c: Competitor }) {
  const url = `${site.url}/neevhr-vs-${c.slug}`;
  const others = competitors.filter((o) => o.slug !== c.slug);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `NeevHR vs ${c.name}`,
          description: c.metaDesc,
          dateModified: c.checkedIso,
          author: { "@type": "Organization", name: site.name, url: site.url },
          publisher: { "@id": `${site.url}/#organization` },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          inLanguage: "en-IN",
        }}
      />
      <Breadcrumbs
        items={[
          { name: "HRMS comparison", href: "/compare" },
          { name: `NeevHR vs ${c.name}`, href: `/neevhr-vs-${c.slug}` },
        ]}
      />
      <article className="pb-6 pt-8">
        <Container className="max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Comparison</span>
          <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            NeevHR vs {c.name}
          </h1>
          <p className="mt-3 text-sm text-muted">
            Information about {c.name} checked on {c.checked} from {c.name}&apos;s own public website. Products change; confirm current details with each vendor.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-body">{c.intro}</p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[680px] text-left text-sm">
              <caption className="sr-only">NeevHR and {c.name} capabilities</caption>
              <thead>
                <tr className="bg-surface-soft">
                  <th scope="col" className="w-44 px-4 py-3 font-semibold text-ink">Capability</th>
                  <th scope="col" className="px-4 py-3 font-semibold text-brand">NeevHR</th>
                  <th scope="col" className="px-4 py-3 font-semibold text-ink">{c.name} (publicly documented)</th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map((r) => (
                  <tr key={r.capability} className="border-t border-line align-top">
                    <th scope="row" className="px-4 py-3 font-medium text-ink">{r.capability}</th>
                    <td className="bg-brand-tint/30 px-4 py-3 text-body">{r.neevhr}</td>
                    <td className="px-4 py-3 text-body">
                      {r.them}
                      {r.source && (
                        <>
                          {" "}
                          <a href={r.source} target="_blank" rel="noopener noreferrer nofollow" className="whitespace-nowrap text-xs text-brand hover:underline">
                            Source
                          </a>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <section className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
              <h2 className="text-lg font-bold text-ink">When {c.name} may suit you</h2>
              <ul className="mt-3 space-y-2">
                {c.themFit.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-body">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint/40 p-6">
              <h2 className="text-lg font-bold text-ink">When NeevHR may suit you</h2>
              <ul className="mt-3 space-y-2">
                {c.neevFit.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-body">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-ink">How to decide</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              Ask both vendors to run one month of your own payroll, with your structures, states and
              attendance rules, and compare the statutory outputs line by line. Use our{" "}
              <Link href="/compare" className="font-medium text-brand hover:text-brand-dark">HRMS evaluation checklist</Link>{" "}
              and the{" "}
              <Link href="/best-hrms-software-india" className="font-medium text-brand hover:text-brand-dark">HRMS selection guide</Link>.
            </p>
            <p className="mt-4 text-xs text-muted">
              {c.name} is a trademark of its owner. NeevHR is not affiliated with {c.name}. This page
              summarises publicly available information and is not a statement about {c.name}&apos;s
              product beyond what its own website documents.
            </p>
          </section>
        </Container>
      </article>

      {c.faqs.length > 0 && (
        <div className="border-t border-line bg-surface-soft">
          <Faq items={c.faqs} withSchema heading={`NeevHR vs ${c.name}: FAQs`} />
        </div>
      )}

      <section className="py-14">
        <Container className="max-w-4xl">
          <p className="text-sm text-muted">
            Other comparisons:{" "}
            {others.map((o, i) => (
              <span key={o.slug}>
                {i > 0 && " · "}
                <Link href={`/neevhr-vs-${o.slug}`} className="text-brand hover:text-brand-dark">NeevHR vs {o.name}</Link>
              </span>
            ))}
            {" · "}
            <Link href="/neevhr-alternatives" className="text-brand hover:text-brand-dark">HRMS alternatives in India</Link>
          </p>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-brand px-7 py-7 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-lg font-bold text-white">See NeevHR on your own payroll</p>
              <p className="mt-1 text-sm text-white/80">Compare outputs on your structures, not on slides.</p>
            </div>
            <Button href="/demo" variant="inverse">
              Book a Demo
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
