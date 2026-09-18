import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { DemoForm } from "@/components/demo/DemoForm";

export const metadata: Metadata = {
  title: "Book a demo",
  description:
    "Book a personalised NeevHR walkthrough. See India-compliant payroll, attendance, leave and performance mapped to how your team runs HR.",
};

const points = [
  "A walkthrough on your headcount and pay structure",
  "How PF, ESI, PT and TDS are handled end to end",
  "Attendance, leave and approval flows for your teams",
  "A realistic 4 to 8 week implementation plan",
];

export default function DemoPage() {
  return (
    <section className="border-b border-line bg-surface-soft py-16 lg:py-20">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <div className="lg:pt-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Book a demo
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            See NeevHR on your own numbers
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-body">
            Tell us a little about your team. We will tailor the session to your
            size, structure and statutory needs, no generic slide deck.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
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
        <DemoForm />
      </Container>
    </section>
  );
}
