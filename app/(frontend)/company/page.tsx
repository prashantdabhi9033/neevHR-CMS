import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/site/PageHeader";

export const metadata: Metadata = {
  alternates: { canonical: "/company" },
  title: "Company",
  description:
    "NeevHR is a new-generation, India-first HRMS founded by an HR practitioner. Built by HR people, for HR teams.",
};

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Company"
        title="Built by HR people, for HR teams"
        sub="NeevHR is a modern, India-first HR and payroll platform, built by HR practitioners who wanted the system they always wished they had while running HR themselves."
      />
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6 text-[15px] leading-relaxed text-body">
            <div>
              <h2 className="text-xl font-semibold text-ink">Why we exist</h2>
              <p className="mt-3">
                Indian companies are stuck between spreadsheets and point tools
                on one side, and heavy global suites that need certified
                consultants and year-long rollouts on the other. NeevHR is built
                for the gap in between: growing and enterprise companies that
                need process discipline and statutory accuracy without the
                overhead.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-ink">Who is behind it</h2>
              <p className="mt-3">
                NeevHR is founded by an HR practitioner with 15 years of
                hands-on HR experience, alongside a background in pre-sales and
                solution consulting. That means the product is shaped by how
                Indian HR and payroll actually work day to day, statutory names,
                lifecycle stages and edge cases included, not by a generic
                global template.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-ink">Where we&apos;re headed</h2>
              <p className="mt-3">
                We are building NeevHR into the most configurable,
                statutory-accurate HR and payroll platform for India, and
                hardening it with every release. If you are an HR or finance
                leader who wants a platform shaped around how Indian HR actually
                works, this is a good time to talk to us.
              </p>
            </div>
          </div>
          <aside className="h-fit rounded-2xl border border-line bg-surface-soft p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">
              What we believe
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-body">
              <li>
                <span className="font-semibold text-ink">
                  Configuration over customization.
                </span>{" "}
                Every policy is a rule set, not a code change.
              </li>
              <li>
                <span className="font-semibold text-ink">
                  One employee record.
                </span>{" "}
                Effective-dated history that you can report on as of any date.
              </li>
              <li>
                <span className="font-semibold text-ink">
                  Analytics everywhere.
                </span>{" "}
                Every list becomes a report, every report a chart.
              </li>
            </ul>
            <div className="mt-6">
              <Button href="/demo" className="w-full">
                Talk to us
              </Button>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
