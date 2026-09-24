import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/site/StoreBadges";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/site/Faq";
import { MobileVisual } from "@/components/product/MobileVisual";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Employee Self Service (ESS) Software | NeevHR",
  absoluteTitle: true,
  description:
    "NeevHR employee self-service: attendance, leave, payslips, Form 16, tax declarations, expenses, loans and approvals on the web today. The NeevHR mobile app is coming soon.",
  path: "/mobile",
});

// Web self-service is live; the mobile app is built but not yet in the
// stores, so it is presented as coming soon everywhere (spec §21).
const available = [
  { title: "Attendance", body: "See daily attendance and raise regularisation requests." },
  { title: "Leave", body: "Check live balances, apply for leave and track approvals." },
  { title: "Payslips and Form 16", body: "View and download payslips and Form 16 without emailing HR." },
  { title: "Tax declarations", body: "Declare investments, upload proofs and choose the tax regime within the window." },
  { title: "Expenses and loans", body: "Submit claims with receipts and apply for loans within policy." },
  { title: "Approvals inbox", body: "Managers see everything awaiting them, from leave to expenses, in one inbox." },
  { title: "Helpdesk and surveys", body: "Raise HR tickets and respond to surveys." },
  { title: "My data", body: "Make data principal requests under the DPDP Act 2023." },
];

const faqs = [
  {
    q: "Is there a NeevHR mobile app?",
    a: "The NeevHR mobile app is coming soon. It will let employees manage attendance, leave, payslips and approvals from their mobile devices. Web self-service is available today and works in a phone browser.",
  },
  {
    q: "What can employees do in self-service today?",
    a: "Check attendance and raise corrections, apply for leave, download payslips and Form 16, submit tax declarations and proofs, claim expenses, apply for loans, raise helpdesk tickets and act on approvals.",
  },
  {
    q: "Is self-service available in Hindi?",
    a: "Not yet. Self-service is in English today; a Hindi interface is planned.",
  },
];

export default function MobilePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Employee self-service", href: "/mobile" }]} />
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <Container className="relative grid items-center gap-12 py-12 lg:grid-cols-[1.05fr_1fr] lg:py-16">
          <div className="animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Employee self-service
            </span>
            <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              Employee Self Service for every employee
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">
              Employees handle attendance, leave, payslips, tax declarations
              and requests themselves, and managers approve from one inbox.
              Self-service runs on the web today. NeevHR&apos;s upcoming mobile
              app will allow employees to manage attendance, leave, payslips
              and approvals from their mobile devices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/demo" size="lg">
                Book a Demo
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href="/hrms" variant="secondary" size="lg">
                Explore HRMS Features
              </Button>
            </div>
            <StoreBadges className="mt-8" />
          </div>
          <div className="animate-fade-up">
            <MobileVisual />
            <p className="mt-4 text-center text-xs text-muted">
              Preview of the upcoming mobile app, shown with illustrative data.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-ink">Available in web self-service today</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {available.map((f) => (
              <div key={f.title} className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-tint text-brand">
                  <Icon name="check" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{f.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Related:{" "}
            <Link href="/glossary/employee-self-service" className="text-brand hover:text-brand-dark">What is employee self-service?</Link>
            {" · "}
            <Link href="/features/leave" className="text-brand hover:text-brand-dark">Leave</Link>
            {" · "}
            <Link href="/features/attendance" className="text-brand hover:text-brand-dark">Attendance</Link>
          </p>
        </Container>
      </section>
      <section className="border-t border-line bg-surface-soft">
        <Faq items={faqs} withSchema heading="Self-service questions" />
      </section>
    </>
  );
}
