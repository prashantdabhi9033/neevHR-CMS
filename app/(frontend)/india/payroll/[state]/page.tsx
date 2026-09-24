import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Disclaimer } from "@/components/site/Disclaimer";
import { Faq } from "@/components/site/Faq";
import { JsonLd } from "@/components/site/JsonLd";
import { states, stateBySlug } from "@/lib/states";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

type Params = { params: Promise<{ state: string }> };

export function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { state } = await params;
  const s = stateBySlug[state];
  if (!s) return { title: "State not found", robots: { index: false } };
  return pageMeta({
    title: `${s.name} Payroll Guide: Professional Tax, LWF & Rules`,
    description: s.summary,
    path: `/india/payroll/${s.slug}`,
    type: "article",
    modifiedTime: s.reviewedIso,
  });
}

function Table({ head, rows, caption }: { head: string[]; rows: string[][]; caption: string }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
      <table className="w-full min-w-[420px] text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="bg-surface-soft">
            {head.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 font-semibold text-ink">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="tnum">
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-line align-top">
              {r.map((c, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="px-4 py-3 font-medium text-ink">
                    {c}
                  </th>
                ) : (
                  <td key={j} className="px-4 py-3 text-body">
                    {c}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function StatePayrollPage({ params }: Params) {
  const { state } = await params;
  const s = stateBySlug[state];
  if (!s) notFound();
  const url = `${site.url}/india/payroll/${s.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `${s.name} payroll guide`,
          description: s.summary,
          dateModified: s.reviewedIso,
          author: { "@type": "Organization", name: site.name, url: site.url },
          publisher: { "@id": `${site.url}/#organization` },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          about: { "@type": "AdministrativeArea", name: s.name, containedInPlace: { "@type": "Country", name: "India" } },
          inLanguage: "en-IN",
        }}
      />
      <Breadcrumbs
        items={[
          { name: "India payroll", href: "/india-payroll" },
          { name: s.name, href: `/india/payroll/${s.slug}` },
        ]}
      />
      <article className="pb-6 pt-8">
        <Container className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            State payroll guide
          </span>
          <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            {s.name} payroll: professional tax, LWF and state rules
          </h1>
          <p className="mt-3 text-sm text-muted">Last reviewed: {s.reviewed} · Author: {site.name} team</p>
          <p className="mt-5 text-lg leading-relaxed text-body">{s.summary}</p>

          <section className="mt-10">
            <h2 className="text-2xl font-bold tracking-tight text-ink">Professional Tax in {s.name}</h2>
            {s.pt.body.map((p) => (
              <p key={p} className="mt-4 text-[15px] leading-relaxed text-body">{p}</p>
            ))}
            {s.pt.slabs && (
              <Table caption={`${s.name} professional tax slabs`} head={s.pt.slabHead ?? ["Monthly salary", "PT per month"]} rows={s.pt.slabs} />
            )}
            {s.pt.facts && (
              <Table caption={`${s.name} professional tax facts`} head={["Item", "Detail"]} rows={s.pt.facts} />
            )}
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-ink">Labour Welfare Fund in {s.name}</h2>
            {s.lwf.body.map((p) => (
              <p key={p} className="mt-4 text-[15px] leading-relaxed text-body">{p}</p>
            ))}
            {s.lwf.facts && (
              <Table caption={`${s.name} labour welfare fund`} head={["Item", "Detail"]} rows={s.lwf.facts} />
            )}
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-ink">Minimum wages in {s.name}</h2>
            {s.minWage.map((p) => (
              <p key={p} className="mt-4 text-[15px] leading-relaxed text-body">{p}</p>
            ))}
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-ink">Shops and establishments and other considerations</h2>
            <ul className="mt-4 space-y-2.5">
              {s.other.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-body">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {o}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 rounded-2xl border border-brand/20 bg-brand-tint/40 p-6">
            <h2 className="text-lg font-bold text-ink">Running {s.name} payroll in NeevHR</h2>
            <ul className="mt-3 space-y-2">
              {s.neevhr.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-body">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <Disclaimer className="mt-10" reviewed={s.reviewed} sources={s.sources} />

          <nav aria-label="Other state guides" className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">Other state payroll guides</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {states
                .filter((o) => o.slug !== s.slug)
                .map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/india/payroll/${o.slug}`}
                      className="inline-block rounded-full border border-line bg-white px-3 py-1.5 text-sm font-medium text-body hover:border-brand/40 hover:text-brand"
                    >
                      {o.name}
                    </Link>
                  </li>
                ))}
            </ul>
            <p className="mt-4 text-sm text-muted">
              See also:{" "}
              <Link href="/india-payroll" className="text-brand hover:text-brand-dark">India payroll overview</Link>
              {" · "}
              <Link href="/blog/professional-tax-by-state-india" className="text-brand hover:text-brand-dark">Professional Tax by state</Link>
              {" · "}
              <Link href="/glossary/lwf" className="text-brand hover:text-brand-dark">What is LWF?</Link>
            </p>
          </nav>
        </Container>
      </article>

      {s.faqs.length > 0 && (
        <div className="border-t border-line bg-surface-soft">
          <Faq items={s.faqs} withSchema heading={`${s.name} payroll: FAQs`} />
        </div>
      )}

      <section className="py-14">
        <Container className="max-w-3xl">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-brand px-7 py-7 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-lg font-bold text-white">Run multi-state payroll on one platform</p>
              <p className="mt-1 text-sm text-white/80">PT and LWF by work location, with PF, ESI and TDS in the same run.</p>
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
