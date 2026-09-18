import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { modules, moduleList } from "@/lib/modules";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return moduleList.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const m = modules[slug];
  if (!m) return { title: "Module not found" };
  return {
    title: `${m.name} software for India`,
    description: m.intro,
    openGraph: { title: `${m.name} · NeevHR`, description: m.intro },
  };
}

export default async function ModulePage({ params }: Params) {
  const { slug } = await params;
  const m = modules[slug];
  if (!m) notFound();
  const Visual = m.Visual;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
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
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/demo" size="lg">
                Book a demo
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href="/#modules" variant="secondary" size="lg">
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
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Key capabilities
          </span>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight text-ink">
            What {m.name.toLowerCase()} does in NeevHR
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {m.capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-tint text-accent-dark">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{c.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Config + Reports */}
      <section className="border-y border-line bg-surface-soft py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
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
          </div>
          <div>
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
          </div>
        </Container>
      </section>

      {/* Related + CTA */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-ink">Explore related modules</h2>
              <p className="mt-1 text-sm text-muted">
                One platform, one employee record.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {m.related.map((slug) => (
                <Link
                  key={slug}
                  href={`/product/${slug}`}
                  className="rounded-xl border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {modules[slug].name} →
                </Link>
              ))}
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
