import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/site/Faq";
import { JsonLd } from "@/components/site/JsonLd";
import { pageMeta, LAST_REVIEWED, LAST_REVIEWED_ISO, OG_IMAGE } from "@/lib/seo";
import { site } from "@/lib/site";
import type { Guide } from "@/lib/guides";

export function guideMetadata(g: Guide): Metadata {
  return pageMeta({
    title: g.seoTitle,
    description: g.description,
    path: `/${g.slug}`,
    type: "article",
    publishedTime: g.published,
    modifiedTime: LAST_REVIEWED_ISO,
    authors: [site.name],
  });
}

// Long-form guide template: H1, lead, table of contents, sections (prose,
// bullets, optional steps or table), FAQ, related links and CTA, with Article
// and Breadcrumb structured data and visible published/updated/author lines.
export function GuidePage({ g }: { g: Guide }) {
  const url = `${site.url}/${g.slug}`;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: g.h1,
          description: g.description,
          image: [OG_IMAGE.url],
          datePublished: g.published,
          dateModified: LAST_REVIEWED_ISO,
          author: { "@type": "Organization", name: site.name, url: site.url },
          publisher: { "@id": `${site.url}/#organization` },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          inLanguage: "en-IN",
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Resources", href: "/resources" },
          { name: g.crumb, href: `/${g.slug}` },
        ]}
      />
      <article className="pb-4 pt-8">
        <Container className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            {g.eyebrow}
          </span>
          <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            {g.h1}
          </h1>
          <p className="mt-4 text-sm text-muted">
            Published: {new Date(g.published).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
            {" · "}Updated: {LAST_REVIEWED}
            {" · "}Author: {site.name} team
          </p>
          <p className="mt-5 text-lg leading-relaxed text-body">{g.lead}</p>

          <nav aria-label="On this page" className="mt-8 rounded-2xl border border-line bg-surface-soft p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">On this page</p>
            <ol className="mt-3 space-y-1.5">
              {g.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-sm text-body hover:text-brand">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {g.sections.map((s) => (
            <section key={s.id} id={s.id} className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-ink">{s.title}</h2>
              {s.body?.map((p) => (
                <p key={p} className="mt-4 text-[15px] leading-relaxed text-body">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="mt-4 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-body">
                      <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {s.steps && (
                <ol className="mt-5 space-y-3">
                  {s.steps.map((st, i) => (
                    <li key={st.t} className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-card)]">
                      <span className="tnum grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="text-[15px] font-semibold text-ink">{st.t}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-body">{st.b}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
              {s.table && (
                <div className="mt-5 overflow-x-auto rounded-2xl border border-line">
                  <table className="w-full min-w-[520px] text-left text-sm">
                    <thead>
                      <tr className="bg-surface-soft">
                        {s.table.head.map((h) => (
                          <th key={h} scope="col" className="px-4 py-3 font-semibold text-ink">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((r) => (
                        <tr key={r[0]} className="border-t border-line align-top">
                          {r.map((c, i) =>
                            i === 0 ? (
                              <th key={i} scope="row" className="px-4 py-3 font-medium text-ink">
                                {c}
                              </th>
                            ) : (
                              <td key={i} className="px-4 py-3 text-body">
                                {c}
                              </td>
                            )
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </Container>
      </article>

      {g.faqs.length > 0 && (
        <div className="mt-8 border-t border-line bg-surface-soft">
          <Faq items={g.faqs} withSchema heading="Frequently asked questions" />
        </div>
      )}

      <section className="py-14">
        <Container className="max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">Related</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {g.related.map((r) => (
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
              <p className="text-lg font-bold text-white">{g.cta}</p>
              <p className="mt-1 text-sm text-white/80">A walkthrough on your own policies and data.</p>
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
