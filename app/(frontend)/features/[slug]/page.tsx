import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/site/Reveal";
import { modules, moduleList } from "@/lib/modules";
import { moduleGroups } from "@/lib/module-nav";
import { differentiators, site } from "@/lib/site";

const navLookup = Object.fromEntries(
  moduleGroups.flatMap((g) =>
    g.items.map((i) => [i.slug, { name: i.name, href: i.href ?? `/features/${i.slug}` }])
  )
) as Record<string, { name: string; href: string }>;

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return moduleList.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const m = modules[slug];
  if (!m) return { title: "Module not found", robots: { index: false } };
  return {
    title: `${m.name} software for India`,
    description: m.intro,
    alternates: { canonical: `/features/${slug}` },
    openGraph: {
      title: `${m.name} · NeevHR`,
      description: m.intro,
      url: `${site.url}/features/${slug}`,
    },
  };
}

export default async function ModulePage({ params }: Params) {
  const { slug } = await params;
  const m = modules[slug];
  if (!m) notFound();
  const Visual = m.Visual;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Product", item: `${site.url}/features` },
      { "@type": "ListItem", position: 3, name: m.name, item: `${site.url}/features/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[440px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand/12 via-brand-soft/8 to-accent/10 blur-3xl" />
        <Container className="relative grid items-center gap-12 py-14 lg:grid-cols-[1fr_1.05fr] lg:py-20">
          <div className="animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              {m.eyebrow}
            </span>
            <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              {m.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">
              {m.intro}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {m.capabilities.slice(0, 3).map((c) => (
                <li key={c.title} className="inline-flex items-center gap-1.5">
                  <Icon name="check" className="h-4 w-4 text-accent" />
                  {c.title}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/demo" size="lg">
                Book a demo
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href="/features" variant="secondary" size="lg">
                All modules
              </Button>
            </div>
          </div>
          <div className="animate-fade-up lg:pl-4">
            <Visual />
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-20">
        <Container>
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Key capabilities
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">
              What {m.name.toLowerCase()} does in NeevHR
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {m.capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-tint text-accent-dark">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Config + Reports */}
      <section className="border-y border-line bg-surface-soft py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
              <Icon name="sliders" className="h-4 w-4" />
              Configuration points
            </span>
            <p className="mt-2 text-sm text-muted">
              Set as rule sets by your HR admin, assigned to employee groups.
            </p>
            <ul className="mt-5 space-y-3">
              {m.configPoints.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-body">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
              <Icon name="chart" className="h-4 w-4" />
              Reports & analytics
            </span>
            <p className="mt-2 text-sm text-muted">
              Every list becomes a report; every report a chart that drills to
              records.
            </p>
            <ul className="mt-5 space-y-3">
              {m.reports.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-body">
                  <Icon
                    name="check"
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Platform band */}
      <section className="py-16 lg:py-20">
        <Container>
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Built on the NeevHR platform
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">
              {m.name} does not run in a silo
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              Like every module, it sits on one effective-dated employee record,
              with India&apos;s statutory rules, configuration and governance
              shared across the platform.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint text-brand">
                    <Icon name={d.icon} />
                  </span>
                  <h3 className="mt-4 text-[15px] font-semibold text-ink">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {d.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Related + CTA */}
      <section className="border-t border-line py-16 lg:py-20">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-ink">Explore related modules</h2>
              <p className="mt-1 text-sm text-muted">
                One platform, one employee record.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {m.related.map((slug) => {
                const rel = navLookup[slug];
                if (!rel) return null;
                return (
                  <Link
                    key={slug}
                    href={rel.href}
                    className="rounded-xl border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    {rel.name} →
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl bg-brand px-8 py-10 text-center shadow-[var(--shadow-float)] sm:flex-row sm:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white">
                See {m.name.toLowerCase()} on your own data
              </h3>
              <p className="mt-2 text-sm text-white/80">
                A tailored walkthrough for your team, no generic deck.
              </p>
            </div>
            <Button href="/demo" size="lg" variant="inverse">
              Book a demo
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
