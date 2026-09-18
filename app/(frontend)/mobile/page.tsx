import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { MobileVisual } from "@/components/product/MobileVisual";

export const metadata: Metadata = {
  title: "Mobile app",
  description:
    "The NeevHR employee self-service mobile app: punch attendance, apply for leave, view payslips, act on approvals and more, from any phone.",
};

const features = [
  { title: "Attendance on the go", body: "Punch in and out, view your attendance and raise regularisation from your phone." },
  { title: "Leave in a few taps", body: "Check live balances and apply for leave; managers approve from the same app." },
  { title: "Payslips anywhere", body: "View and download payslips and tax details without emailing HR." },
  { title: "Approvals inbox", body: "Everything awaiting you, from leave to expenses, in one unified inbox." },
  { title: "Requests & helpdesk", body: "Raise requests, track tickets and get answers, all self-service." },
  { title: "In English and Hindi", body: "A first-class experience for every employee, in the language they prefer." },
];

export default function MobilePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-20">
          <div className="animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Mobile app
            </span>
            <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              HR in every employee&apos;s pocket
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">
              Self-service should not need a desk. The NeevHR mobile app puts
              attendance, leave, payslips and approvals on every employee&apos;s
              phone, in English and Hindi.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/demo" size="lg">
                Book a demo
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href="/product" variant="secondary" size="lg">
                Explore the platform
              </Button>
            </div>
          </div>
          <div className="animate-fade-up">
            <MobileVisual />
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-tint text-brand">
                  <Icon name="check" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
