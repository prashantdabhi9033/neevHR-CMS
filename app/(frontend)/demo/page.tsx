import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { DemoForm, type Intent } from "@/components/demo/DemoForm";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TrackView } from "@/components/site/TrackView";
import { pageMeta } from "@/lib/seo";

type Search = { searchParams: Promise<{ intent?: string }> };

const intents: Record<
  Intent,
  { eyebrow: string; title: string; lead: string; points: string[] }
> = {
  demo: {
    eyebrow: "Book a demo",
    title: "See NeevHR in Action",
    lead: "See how NeevHR manages employees, attendance, leave, payroll, compliance and employee self-service in one platform.",
    points: [
      "A walkthrough shaped around your headcount and pay structure",
      "How PF, ESI, PT, LWF and TDS are handled end to end",
      "Attendance, leave and approval flows for your teams",
      "An implementation plan based on your data and integrations",
    ],
  },
  quote: {
    eyebrow: "Get a quote",
    title: "Get a quote for your team",
    lead: "Tell us about your team, and we will put together edition and pricing options sized to your headcount and scope, in INR.",
    points: [
      "Pricing sized to your headcount and edition",
      "What is included at each edition, no per-module maze",
      "Implementation scope based on your entities, data and integrations",
      "Answers on PF, ESI, PT, TDS and DPDP compliance",
    ],
  },
};

function toIntent(v?: string): Intent {
  return v === "quote" ? "quote" : "demo";
}

export async function generateMetadata({
  searchParams,
}: Search): Promise<Metadata> {
  const intent = toIntent((await searchParams).intent);
  const isQuote = intent === "quote";
  return pageMeta({
    title: isQuote ? "Get an HRMS Quote" : "Book an HRMS Demo",
    description: isQuote
      ? "Get a NeevHR quote in INR, based on your employee count, modules, implementation requirements and integrations."
      : "See NeevHR in action: employees, attendance, leave, payroll with PF, ESI, PT and TDS, compliance and self-service in one India-first HRMS.",
    path: "/demo",
  });
}

export default async function DemoPage({ searchParams }: Search) {
  const intent = toIntent((await searchParams).intent);
  const c = intents[intent];

  return (
    <>
    <TrackView event={intent === "quote" ? "quote_view" : "demo_view"} />
    <Breadcrumbs items={[{ name: intent === "quote" ? "Get a quote" : "Book a demo", href: "/demo" }]} />
    <section className="border-b border-line bg-surface-soft py-12 lg:py-16">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <div className="lg:pt-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            {c.eyebrow}
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {c.title}
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-body">
            {c.lead}
          </p>
          <ul className="mt-8 space-y-3">
            {c.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-body">
                <Icon
                  name="check"
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <DemoForm intent={intent} />
      </Container>
    </section>
    </>
  );
}
