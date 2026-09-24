import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/site/PageHeader";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { guides } from "@/lib/guides";
import { tools } from "@/lib/tools";
import { glossary } from "@/lib/glossary";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "HR, Payroll & Compliance Resources for India",
  description:
    "Guides, calculators, a glossary and articles on Indian HR, payroll and compliance: choosing an HRMS, implementation, data migration, PF, ESI, TDS, gratuity and more.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Resources", href: "/resources" }]} />
      <PageHeader
        eyebrow="Resources"
        title="HR, payroll and compliance resources"
        sub="Practical guides, free calculators and plain definitions for HR, payroll and finance teams in India."
      />

      <section className="py-14">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-ink">Guides</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {guides.map((g) => (
              <Link
                key={g.slug}
                href={`/${g.slug}`}
                className="group rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] transition-colors hover:border-brand/40"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">{g.eyebrow}</span>
                <h3 className="mt-1 text-lg font-semibold text-ink group-hover:text-brand">{g.h1}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{g.description}</p>
              </Link>
            ))}
            <Link
              href="/india-payroll"
              className="group rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] transition-colors hover:border-brand/40"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">Statutory guide</span>
              <h3 className="mt-1 text-lg font-semibold text-ink group-hover:text-brand">India payroll: PF, ESI, PT, LWF, TDS and Form 16</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                The rules, due dates and sources for each statutory requirement, and how NeevHR handles them.
              </p>
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface-soft py-14">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink">Free calculators</h2>
            <ul className="mt-5 space-y-2">
              {tools.map((t) => (
                <li key={t.slug}>
                  <Link href={`/tools/${t.slug}`} className="inline-flex items-center gap-2 text-[15px] font-medium text-ink hover:text-brand">
                    <Icon name="chart" className="h-4 w-4 text-brand" />
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink">HR &amp; payroll glossary</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {glossary.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/glossary/${g.slug}`}
                    className="inline-block rounded-full border border-line bg-white px-3 py-1.5 text-sm font-medium text-body hover:border-brand/40 hover:text-brand"
                  >
                    {g.term}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/glossary" className="mt-4 inline-block text-sm font-semibold text-brand hover:text-brand-dark">
              Full glossary →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink">Articles</h2>
            <p className="mt-2 text-[15px] text-body">
              In-depth articles on EPF, ESI, professional tax, gratuity, TDS, Form 16, leave, POSH, DPDP and more.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/blog" className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">
              Read the blog
            </Link>
            <Link href="/faq" className="rounded-xl border border-line px-5 py-2.5 text-sm font-semibold text-ink hover:border-brand/40">
              FAQ
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
