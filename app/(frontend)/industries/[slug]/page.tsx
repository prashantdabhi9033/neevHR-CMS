import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/site/Faq";
import { industries, industryBySlug } from "@/lib/industries";
import { pageMeta } from "@/lib/seo";
import { moduleHref } from "@/lib/module-nav";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const ind = industryBySlug[slug];
  if (!ind) return { title: "Industry not found", robots: { index: false } };
  return pageMeta({
    title: ind.h1,
    description: ind.intro.length > 160 ? `${ind.intro.slice(0, 157).replace(/\s+\S*$/, "")}...` : ind.intro,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryPage({ params }: Params) {
  const { slug } = await params;
  const ind = industryBySlug[slug];
  if (!ind) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Industries", href: "/industries" },
          { name: ind.name, href: `/industries/${slug}` },
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[440px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand/12 via-brand-soft/8 to-accent/10 blur-3xl" />
        <Container className="relative py-16 text-center lg:py-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Industries
          </span>
          <h1 className="mx-auto mt-2 max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {ind.h1}
          </h1>
          <p className="mt-3 text-base font-semibold text-brand">{ind.tagline}</p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-body">
            {ind.intro}
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href="/demo" size="lg">
              Book a Demo
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
            <Button href="/hrms" variant="secondary" size="lg">
              Explore HRMS Features
            </Button>
          </div>
        </Container>
      </section>

      {/* Overview + relevant features */}
      <section className="border-b border-line py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink">
              HR for {ind.name.toLowerCase()}, in practice
            </h2>
            {ind.overview.map((p) => (
              <p key={p} className="mt-4 text-[15px] leading-relaxed text-body">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={60}>
            <div className="rounded-2xl border border-line bg-surface-soft p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">
                Relevant NeevHR features
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {ind.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-body">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Challenges */}
      <section className="py-16 lg:py-20">
        <Container>
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              What we solve
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">
              The HR challenges of {ind.name.toLowerCase()}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {ind.challenges.map((c, i) => (
              <Reveal key={c} delay={i * 60}>
                <div className="flex items-start gap-3 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-tint text-brand">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <p className="text-[15px] leading-relaxed text-body">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Modules that matter */}
      <section className="border-y border-line bg-surface-soft py-16 lg:py-20">
        <Container>
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Modules that matter here
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">
              Configured for {ind.name.toLowerCase()}, out of one platform
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {ind.modules.map((m, i) => (
              <Reveal key={m.slug} delay={i * 60}>
                <Link
                  href={moduleHref(m.slug)}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] transition-colors hover:border-brand/40"
                >
                  <h3 className="text-base font-semibold text-ink group-hover:text-brand">
                    {m.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                    {m.why}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-brand">
                    Explore {m.name.toLowerCase()} →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Faq items={ind.faqs} withSchema heading={`${ind.name}: HRMS questions`} />

      <section className="pb-4">
        <Container className="text-center text-sm text-muted">
          Other industries:{" "}
          {industries
            .filter((o) => o.slug !== slug)
            .map((o, i) => (
              <span key={o.slug}>
                {i > 0 && " · "}
                <Link href={`/industries/${o.slug}`} className="hover:text-brand">
                  {o.name}
                </Link>
              </span>
            ))}
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl bg-brand px-8 py-12 text-center shadow-[var(--shadow-float)] sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                See NeevHR for {ind.name.toLowerCase()}
              </h2>
              <p className="mt-2 text-sm text-white/80">
                A walkthrough mapped to how your teams actually work.
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
