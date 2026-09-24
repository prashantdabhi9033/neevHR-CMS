import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/site/PageHeader";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { JsonLd } from "@/components/site/JsonLd";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "About NeevHR: India-first HRMS & Payroll Software",
  description:
    "NeevHR is an India-first HRMS and payroll software platform for growing and mid-market Indian businesses, built by HR practitioners. Who we serve, what we build and how to reach us.",
  path: "/company",
});

const capabilities = [
  "HR", "Payroll", "Attendance", "Leave", "Recruitment", "Performance",
  "Expenses", "Compliance", "Analytics", "Employee Self Service",
];

export default function CompanyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${site.url}/company`,
          name: "About NeevHR",
          mainEntity: { "@id": `${site.url}/#organization` },
          inLanguage: "en-IN",
        }}
      />
      <Breadcrumbs items={[{ name: "Company", href: "/company" }]} />
      <PageHeader
        eyebrow="Company"
        title="About NeevHR"
        sub={site.entity}
      />
      <section className="py-16">
        <Container className="max-w-3xl">
          <div className="space-y-8 text-[15px] leading-relaxed text-body">
            <div>
              <h2 className="text-xl font-semibold text-ink">Why NeevHR exists</h2>
              <p className="mt-3">
                Indian companies are often stuck between spreadsheets and point
                tools on one side, and heavy global suites that need certified
                consultants and long rollouts on the other. NeevHR is built for
                the gap in between: growing and mid-market companies that need
                process discipline and statutory accuracy without the overhead.
              </p>
              <p className="mt-3">
                &ldquo;Neev&rdquo; means foundation. The idea is simple: HR,
                payroll and compliance work better when they are built on one
                accurate employee record.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-ink">Who builds it</h2>
              <p className="mt-3">
                NeevHR was founded by an HR practitioner with 15 years of
                hands-on HR experience and a background in pre-sales and
                solution consulting. The product is shaped by how Indian HR and
                payroll actually work day to day: statutory names, lifecycle
                stages and edge cases included.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-ink">What we build</h2>
              <p className="mt-3">
                One platform that covers the employee lifecycle from hiring to
                exit, with Indian payroll at its core:
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {capabilities.map((c) => (
                  <li key={c} className="inline-flex items-center gap-1.5 rounded-lg bg-surface-soft px-3 py-1.5 text-sm text-body">
                    <Icon name="check" className="h-3.5 w-3.5 text-accent" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Explore the <Link href="/hrms" className="font-medium text-brand hover:text-brand-dark">HRMS</Link>,{" "}
                <Link href="/payroll" className="font-medium text-brand hover:text-brand-dark">payroll software</Link> and{" "}
                <Link href="/security" className="font-medium text-brand hover:text-brand-dark">security</Link> pages for detail.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-ink">What we believe</h2>
              <ul className="mt-3 space-y-3">
                <li>
                  <span className="font-semibold text-ink">Configuration over customization.</span>{" "}
                  Every policy is a rule set assigned to employee groups, not a code change.
                </li>
                <li>
                  <span className="font-semibold text-ink">One employee record.</span>{" "}
                  Effective-dated history you can report on as of any date.
                </li>
                <li>
                  <span className="font-semibold text-ink">Analytics everywhere.</span>{" "}
                  Every list can become a report, and reports drill to records.
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/demo">Book a Demo</Button>
              <Button href="/contact" variant="secondary">
                Contact us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
