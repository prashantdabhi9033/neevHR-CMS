import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/site/PageHeader";
import { differentiators } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why NeevHR",
  description:
    "How NeevHR compares to global tier-one HR suites and to point tools and spreadsheets, for Indian mid-market companies that need statutory accuracy without the overhead.",
};

const rows: { dim: string; neev: string; tier1: string; point: string }[] = [
  {
    dim: "Built for",
    neev: "Indian mid-market, 500 to 5,000 employees",
    tier1: "Large global enterprises",
    point: "Small teams or a single function",
  },
  {
    dim: "India statutory",
    neev: "PF, ESI, PT, LWF, TDS, gratuity, POSH, DPDP in the core",
    tier1: "Via country packs and add-ons",
    point: "Partial, varies by tool",
  },
  {
    dim: "Implementation",
    neev: "4 to 8 weeks",
    tier1: "Several months to over a year",
    point: "Fast, but limited scope",
  },
  {
    dim: "Who configures it",
    neev: "A trained HR admin",
    tier1: "Certified consultants",
    point: "HR admin, where configurable",
  },
  {
    dim: "Scope",
    neev: "Full lifecycle on one employee record",
    tier1: "Full lifecycle, high complexity",
    point: "One or two functions, siloed data",
  },
  {
    dim: "Commercials",
    neev: "Mid-market pricing, edition-based",
    tier1: "Enterprise pricing",
    point: "Low, but adds up across tools",
  },
];

export default function ComparePage() {
  return (
    <>
      <PageHeader
        eyebrow="Why NeevHR"
        title="The middle ground Indian mid-market teams were missing"
        sub="Global suites are powerful but heavy and consultant-led. Point tools and spreadsheets are quick but shallow and siloed. NeevHR is built for the gap in between."
      />

      {/* Comparison table */}
      <section className="py-14 lg:py-16">
        <Container>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-surface-soft">
                  <th className="px-5 py-4 font-semibold text-muted">
                    Consideration
                  </th>
                  <th className="px-5 py-4 font-bold text-brand">NeevHR</th>
                  <th className="px-5 py-4 font-semibold text-ink">
                    Global tier-one suites
                  </th>
                  <th className="px-5 py-4 font-semibold text-ink">
                    Point tools & spreadsheets
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.dim} className="border-t border-line align-top">
                    <td className="px-5 py-4 font-medium text-ink">{r.dim}</td>
                    <td className="bg-brand-tint/40 px-5 py-4 text-body">
                      {r.neev}
                    </td>
                    <td className="px-5 py-4 text-muted">{r.tier1}</td>
                    <td className="px-5 py-4 text-muted">{r.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted">
            A fair characterisation of common approaches, not a claim about any
            specific vendor. NeevHR is benchmarked against leading Indian and
            global HR platforms.
          </p>
        </Container>
      </section>

      {/* Differentiators */}
      <section className="border-t border-line bg-surface-soft py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-tint text-brand">
                  <Icon name={d.icon} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/demo" size="lg">
              Book a demo
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
