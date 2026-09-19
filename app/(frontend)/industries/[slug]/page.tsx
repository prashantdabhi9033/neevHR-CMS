import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/site/Reveal";
import { industries, industryBySlug } from "@/lib/industries";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const ind = industryBySlug[slug];
  if (!ind) return { title: "Industry not found", robots: { index: false } };
  return {
    title: `HRMS for ${ind.name}`,
    description: ind.intro,
    alternates: { canonical: `/industries/${slug}` },
    openGraph: {
      title: `NeevHR for ${ind.name}`,
      description: ind.intro,
      url: `${site.url}/industries/${slug}`,
    },
  };
}

export default async function IndustryPage({ params }: Params) {
  const { slug } = await params;
  const ind = industryBySlug[slug];
  if (!ind) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${site.url}/industries` },
      { "@type": "ListItem", position: 3, name: ind.name, item: `${site.url}/industries/${slug}` },
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
        <Container className="relative py-16 text-center lg:py-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            NeevHR for {ind.name}
          </span>
          <h1 className="mx-auto mt-2 max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {ind.tagline}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-body">
            {ind.intro}
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href="/demo" size="lg">
              Book a demo
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
            <Button href="/features" variant="secondary" size="lg">
              Explore the platform
            </Button>
          </div>
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
                  href={`/features/${m.slug}`}
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
