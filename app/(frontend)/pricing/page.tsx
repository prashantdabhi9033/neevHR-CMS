import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/site/PageHeader";

export const metadata: Metadata = {
  alternates: { canonical: "/pricing" },
  title: "Pricing",
  description:
    "NeevHR uses simple, edition-based packaging priced in INR, not a per-module licensing maze. Talk to us for a quote.",
};

const editions = [
  {
    name: "Core",
    for: "Get the foundation live",
    features: [
      "Employee records & onboarding",
      "Attendance & leave",
      "Payroll with PF, ESI, PT, TDS",
      "Employee self-service & mobile",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    for: "Add talent & analytics",
    features: [
      "Everything in Core",
      "Performance & goals",
      "Recruitment & onboarding handover",
      "Analytics & report builder",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    for: "Full platform & control",
    features: [
      "Everything in Growth",
      "Advanced workflows & RBAC",
      "Expenses, FBP & benefits",
      "Priority implementation support",
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple, edition-based pricing"
        sub="No per-module licensing maze. Pick an edition sized to where you are, priced in INR. Final pricing depends on headcount and scope, so let us put together a quote."
      />
      <section className="py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {editions.map((e) => (
              <div
                key={e.name}
                className={`flex flex-col rounded-2xl border p-7 ${
                  e.highlight
                    ? "border-brand bg-white shadow-[var(--shadow-float)]"
                    : "border-line bg-white shadow-[var(--shadow-card)]"
                }`}
              >
                {e.highlight && (
                  <span className="mb-3 inline-flex w-fit rounded-full bg-brand-tint px-3 py-1 text-xs font-semibold text-brand">
                    Recommended
                  </span>
                )}
                <h3 className="text-lg font-bold text-ink">{e.name}</h3>
                <p className="mt-1 text-sm text-muted">{e.for}</p>
                <ul className="mt-5 flex-1 space-y-3">
                  {e.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-body"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button
                    href="/demo?intent=quote"
                    variant={e.highlight ? "primary" : "secondary"}
                    className="w-full"
                  >
                    Get a quote
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Implementation is a focused 4 to 8 week engagement. No hidden
            per-consultant fees.
          </p>
        </Container>
      </section>
    </>
  );
}
