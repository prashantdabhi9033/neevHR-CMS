import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { DemoForm, type Intent } from "@/components/demo/DemoForm";

type Search = { searchParams: Promise<{ intent?: string }> };

const intents: Record<
  Intent,
  { eyebrow: string; title: string; lead: string; points: string[] }
> = {
  demo: {
    eyebrow: "Book a demo",
    title: "See NeevHR on your own numbers",
    lead: "Tell us a little about your team. We will tailor the session to your size, structure and statutory needs, no generic slide deck.",
    points: [
      "A walkthrough on your headcount and pay structure",
      "How PF, ESI, PT and TDS are handled end to end",
      "Attendance, leave and approval flows for your teams",
      "A realistic 4 to 8 week implementation plan",
    ],
  },
  quote: {
    eyebrow: "Get a quote",
    title: "Get a quote for your team",
    lead: "Tell us a little about your team. We will put together edition and pricing options sized to your headcount and scope, in INR.",
    points: [
      "Pricing sized to your headcount and edition",
      "What is included at each edition, no per-module maze",
      "Implementation and onboarding scope for 4 to 8 weeks",
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
  return {
    alternates: { canonical: "/demo" },
    title: isQuote ? "Get a quote" : "Book a demo",
    description: isQuote
      ? "Get a tailored NeevHR quote for your team, sized to your headcount and scope, in INR. India-compliant payroll, attendance, leave and performance."
      : "Book a personalised NeevHR walkthrough. See India-compliant payroll, attendance, leave and performance mapped to how your team runs HR.",
  };
}

export default async function DemoPage({ searchParams }: Search) {
  const intent = toIntent((await searchParams).intent);
  const c = intents[intent];

  return (
    <section className="border-b border-line bg-surface-soft py-16 lg:py-20">
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
  );
}
