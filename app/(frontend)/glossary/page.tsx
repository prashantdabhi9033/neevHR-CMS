import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { JsonLd } from "@/components/site/JsonLd";
import { glossary } from "@/lib/glossary";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "HR & Payroll Glossary for India",
  description:
    "Plain-English definitions of Indian HR and payroll terms: HRMS, PF, ESI, PT, LWF, gratuity, CTC, gross and net salary, HRA, LOP and full and final settlement, with worked examples.",
  path: "/glossary",
});

export default function GlossaryPage() {
  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term));
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "NeevHR HR & Payroll Glossary",
          url: `${site.url}/glossary`,
          hasDefinedTerm: sorted.map((g) => ({
            "@type": "DefinedTerm",
            name: g.full ? `${g.term} (${g.full})` : g.term,
            description: g.short,
            url: `${site.url}/glossary/${g.slug}`,
          })),
        }}
      />
      <Breadcrumbs items={[{ name: "Glossary", href: "/glossary" }]} />
      <PageHeader
        eyebrow="Resources"
        title="HR & payroll glossary for India"
        sub="Clear definitions of the terms Indian HR, payroll and finance teams use every month, each with a worked example and links to the calculators and guides that go deeper."
      />
      <section className="py-14 lg:py-16">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/glossary/${g.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] transition-colors hover:border-brand/40"
                >
                  <h2 className="text-base font-semibold text-ink group-hover:text-brand">
                    {g.term}
                    {g.full && (
                      <span className="block text-xs font-medium text-muted">{g.full}</span>
                    )}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{g.short}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
