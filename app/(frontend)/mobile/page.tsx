import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/site/StoreBadges";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Faq } from "@/components/site/Faq";
import { ESS_SCREENS, MobileVisual } from "@/components/product/MobileVisual";
import { Phone } from "@/components/visuals/Stage";
import { pageMeta } from "@/lib/seo";
import { MobileAttendanceScreen } from "@/components/animated/MobileAttendanceScreen";

export const metadata: Metadata = pageMeta({
  title: "Employee Self Service and HRMS Mobile App | NeevHR",
  absoluteTitle: true,
  description:
    "NeevHR employee self-service: attendance, leave, payslips, Form 16, tax declarations, expenses, loans and approvals on the web today. A mobile app is also built for Android and iPhone.",
  path: "/mobile",
});

// Web self-service is live. The mobile app is built but not yet in the stores
// (Doc/PENDING-ITEMS.md REL-013 to REL-015), and every mention says exactly that.
const available = [
  { title: "Attendance", body: "See daily attendance and raise regularisation requests." },
  { title: "Leave", body: "Check live balances, apply for leave and track approvals." },
  { title: "Payslips and Form 16", body: "View and download payslips and Form 16 without emailing HR." },
  { title: "Tax declarations", body: "Declare investments, upload proofs and choose the tax regime within the window." },
  { title: "Expenses and loans", body: "Submit claims with receipts and apply for loans within policy." },
  { title: "Approvals inbox", body: "Managers see everything awaiting them, from leave to expenses, in one inbox." },
  { title: "Helpdesk and surveys", body: "Raise HR tickets and respond to surveys." },
  { title: "Why this amount", body: "See how a payslip figure was reached." },
  { title: "Internal jobs and ID card", body: "See open roles inside the company and view your ID card." },
  { title: "Hindi", body: "Every self-service page is available in Hindi." },
  { title: "Set by your company", body: "Your HR can hide self-service pages by role and entity." },
  { title: "My data", body: "Make data principal requests under the DPDP Act 2023." },
];

const faqs = [
  {
    q: "Is there a NeevHR mobile app?",
    a: "Yes, it is built for Android and iPhone. Web self-service is available today and works in a phone browser.",
  },
  {
    q: "What can employees do in self-service today?",
    a: "Check attendance and raise corrections, apply for leave, download payslips and Form 16, submit tax declarations and proofs, claim expenses, apply for loans, raise helpdesk tickets and act on approvals.",
  },
  {
    q: "What is in the mobile app?",
    a: "Geofenced and QR punch, attendance, leave, payslips, tax, expenses and travel advance, loans, helpdesk, internal jobs, 1:1 meetings, My ID card, approvals, field tracking, the AI assistant, and Sign in with Google or Microsoft. The app screens are in English.",
  },
  {
    q: "What stays on the web?",
    a: "Admin and HR screens, and these for employees and managers: learning, assets, travel requests, the org chart, team insights, delegation, the POSH complaint route, goal cascade, and editing 1:1 notes.",
  },
  {
    q: "Is self-service available in Hindi?",
    a: "Yes, for employees. Every self-service page is available in Hindi, and the AI assistant replies in Hindi or Gujarati. Admin screens and the mobile app are in English today.",
  },
];

export default function MobilePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Employee self-service", href: "/mobile" }]} />
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <Container wide className="relative grid items-center gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
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
              Self-service runs on the web today, including in a phone browser.
              The NeevHR mobile app is built for Android and iPhone.
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
              Screens from the NeevHR mobile app, shown with illustrative data.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-[#F3F0FF] py-16 lg:py-20">
        <Container>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Inside the app</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">The screens employees use every day</h2>
          <p className="mt-3 max-w-2xl text-body">
            These are real screens from the NeevHR mobile app, rendered with demo data. The app is
            built for Android and iPhone; these features also run in web self-service today.
          </p>
        </Container>
        <div className="mt-10 flex snap-x snap-mandatory gap-8 overflow-x-auto px-4 pb-4 sm:px-6 lg:justify-center lg:overflow-visible">
          {[ESS_SCREENS.leave, ESS_SCREENS.applyLeave, ESS_SCREENS.payslipDetail, ESS_SCREENS.approvals, ESS_SCREENS.expenses].map((s) => (
            <figure key={s.src} className="w-[200px] shrink-0 snap-center">
              <Phone src={s.src} alt={`NeevHR mobile app ${s.title} screen`} width={200} />
              <figcaption className="mt-5">
                <p className="text-sm font-semibold text-ink">{s.title}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-body">{s.body}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-b border-line py-16 lg:py-20">
        <Container className="grid items-center gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Attendance on the phone</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">Punch in from the site, not the desk</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-body">
              For staff who are not at a desk, the app takes a punch inside the geofence you set, or from a QR code at the site.
              Field staff can also share their location during duty hours, with consent.
            </p>
          </div>
          <MobileAttendanceScreen />
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
