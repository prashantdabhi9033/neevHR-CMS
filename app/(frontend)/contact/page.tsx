import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/site/PageHeader";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { JsonLd } from "@/components/site/JsonLd";
import { SocialIcon } from "@/components/site/SocialIcon";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact NeevHR: Sales, Support & Demos",
  description:
    "Contact the NeevHR team by email or phone for a demo, a quote, support or partnership. India-first HRMS and payroll software.",
  path: "/contact",
});

export default function ContactPage() {
  const tel = site.phone.replace(/\s/g, "");
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${site.url}/contact`,
          name: "Contact NeevHR",
          mainEntity: { "@id": `${site.url}/#organization` },
        }}
      />
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <PageHeader
        eyebrow="Contact"
        title="Contact NeevHR"
        sub="A demo, a quote, a compliance question, support or partnership. Tell us what you need and the right person will get back to you within one business day."
      />
      <section className="py-16">
        <Container className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
            <h2 className="text-lg font-semibold text-ink">Sales and support</h2>
            <p className="mt-2 text-sm text-body">Email or call us.</p>
            <a href={`mailto:${site.email}`} className="mt-3 block text-sm font-semibold text-brand hover:text-brand-dark">
              {site.email}
            </a>
            <a href={`tel:${tel}`} className="mt-1 block text-sm font-semibold text-brand hover:text-brand-dark">
              {site.phone}
            </a>
          </div>
          <div className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
            <h2 className="text-lg font-semibold text-ink">Book a demo or quote</h2>
            <p className="mt-2 text-sm text-body">
              Use the form to share your employee count and requirements, and
              we will prepare the session or quote.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button href="/demo">Book a Demo</Button>
              <Button href="/demo?intent=quote" variant="secondary">Get a quote</Button>
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
            <h2 className="text-lg font-semibold text-ink">Follow NeevHR</h2>
            <ul className="mt-3 space-y-2">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-body hover:text-brand"
                  >
                    <SocialIcon name={s.icon} className="h-4 w-4" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
