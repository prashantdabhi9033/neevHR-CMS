import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { JsonLd } from "@/components/site/JsonLd";
import { faqGroups } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "NeevHR FAQ: HRMS, Payroll, Attendance & Security",
  description:
    "Answers about NeevHR: who it is for, PF, ESI, PT, TDS, Form 16 and 24Q, biometric attendance, data security, MFA, hosting, implementation and data migration.",
  path: "/faq",
});

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function FaqPage() {
  const all = faqGroups.flatMap((g) => g.items);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: all.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <Breadcrumbs items={[{ name: "FAQ", href: "/faq" }]} />
      <PageHeader
        eyebrow="FAQ"
        title="NeevHR frequently asked questions"
        sub="Straight answers on the product, Indian payroll, attendance, security and implementation. If yours is not here, book a demo and we will answer it for your setup."
      />
      <section className="py-14 lg:py-16">
        <Container className="max-w-3xl">
          <nav aria-label="FAQ sections" className="flex flex-wrap gap-2">
            {faqGroups.map((g) => (
              <a
                key={g.group}
                href={`#${slug(g.group)}`}
                className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-body hover:border-brand/40 hover:text-brand"
              >
                {g.group}
              </a>
            ))}
          </nav>
          {faqGroups.map((g) => (
            <div key={g.group} id={slug(g.group)} className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-ink">{g.group}</h2>
              <div className="mt-5 divide-y divide-line rounded-2xl border border-line bg-white">
                {g.items.map((f) => (
                  <details key={f.q} className="group px-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[15px] font-semibold text-ink marker:content-none">
                      <h3 className="text-[15px] font-semibold">{f.q}</h3>
                      <span
                        aria-hidden="true"
                        className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line text-muted transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="pb-5 text-sm leading-relaxed text-body">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
          <p className="mt-12 text-sm text-muted">
            Still have a question?{" "}
            <Link href="/demo" className="font-medium text-brand hover:text-brand-dark">
              Book a demo
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-medium text-brand hover:text-brand-dark">
              contact us
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
