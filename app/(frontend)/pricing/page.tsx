import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/site/PageHeader";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/site/Faq";
import { TrackView } from "@/components/site/TrackView";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "HRMS Pricing India | NeevHR",
  absoluteTitle: true,
  description:
    "NeevHR pricing is based on employee count, modules, implementation and integrations, in INR. See what the Core, Growth and Enterprise editions include.",
  path: "/pricing",
});

// Edition contents are the owner's commercial packaging; keep the
// allocation of modules to editions unchanged unless the owner decides.
const editions = [
  {
    name: "Core",
    for: "Get the foundation live",
    features: [
      "Employee records & onboarding",
      "Attendance & leave",
      "Payroll with PF, ESI, PT, LWF, TDS and statutory outputs",
      "Employee self-service on the web (mobile app coming soon)",
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

const clarity = [
  { t: "How pricing is set", b: "Pricing is based on employee count, modules, implementation requirements and integrations." },
  { t: "Currency and billing", b: "Priced in INR. Billing frequency is agreed in your quote." },
  { t: "Payroll", b: "Payroll with Indian statutory compliance is included from the Core edition." },
  { t: "Implementation", b: "Implementation scope and any fee are set out in the quote, based on entities, data migration and integrations." },
  { t: "Integrations", b: "Standard integrations (biometric ADMS, CSV import and export, API keys, webhooks) are part of the platform. Any custom integration work is quoted separately." },
  { t: "Support", b: "The support model during implementation and after go-live is described in your quote." },
  { t: "Minimum size", b: "NeevHR is designed for organisations from about 100 employees. Tell us your headcount and we will advise." },
  { t: "Trial", b: "We run a guided demo on a structure close to yours. A trial or pilot can be discussed for your case." },
];

const pricingFaqs = [
  {
    q: "Why is NeevHR pricing not listed publicly?",
    a: "Price depends on employee count, modules, implementation requirements and integrations, which vary a lot between companies. We prepare a quote in INR once we understand your setup.",
  },
  {
    q: "Is payroll included?",
    a: "Yes. Payroll with PF, ESI, PT, LWF and TDS, and the statutory output files, are part of the Core edition.",
  },
  {
    q: "Is there a per-module fee?",
    a: "No. NeevHR is packaged in editions, so you are not assembling a price module by module.",
  },
  {
    q: "Is there an implementation fee?",
    a: "Implementation scope and any fee are stated in the quote. They depend on the number of entities, the data to migrate and integrations.",
  },
  {
    q: "Is the mobile app included?",
    a: "The NeevHR mobile app is coming soon. Web self-service is included today.",
  },
  {
    q: "How long does it take to go live?",
    a: site.implementation,
  },
];

export default function PricingPage() {
  return (
    <>
      <TrackView event="pricing_view" />
      <Breadcrumbs items={[{ name: "Pricing", href: "/pricing" }]} />
      <PageHeader
        eyebrow="Pricing"
        title="HRMS pricing, sized to your company"
        sub="Pricing is based on employee count, modules, implementation requirements and integrations. Pick the edition that fits, and we will prepare a quote in INR."
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
                <h2 className="text-lg font-bold text-ink">{e.name}</h2>
                <p className="mt-1 text-sm text-muted">{e.for}</p>
                <ul className="mt-5 flex-1 space-y-3">
                  {e.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-body">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
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

          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight text-ink">What to expect in a quote</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {clarity.map((c) => (
                <div key={c.t} className="rounded-2xl border border-line bg-surface-soft p-5">
                  <h3 className="text-[15px] font-semibold text-ink">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{c.b}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="border-t border-line bg-surface-soft">
        <Faq items={pricingFaqs} withSchema heading="Pricing questions" />
      </section>
    </>
  );
}
