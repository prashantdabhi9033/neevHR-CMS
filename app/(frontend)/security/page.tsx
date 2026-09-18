import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/site/PageHeader";
import { compliancePoints } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security & compliance",
  description:
    "How NeevHR protects employee data: row-level tenant isolation, role-based access, audit trail, encryption, India data residency and DPDP Act 2023 alignment.",
};

const controls = [
  { title: "Tenant isolation", body: "Row-level isolation keeps every company's data separate, enforced at the data layer, not just the application." },
  { title: "Role-based access", body: "Fine-grained RBAC with data scopes, time-bound grants and separation-of-duties checks on sensitive actions." },
  { title: "Field-level security", body: "Sensitive fields can be masked by role and module, so people see only what they should." },
  { title: "Audit trail", body: "Every change is recorded and effective-dated, and reportable as of any date for a complete history." },
  { title: "Encryption", body: "Data is encrypted in transit and at rest." },
  { title: "Access controls", body: "Optional login IP allowlisting and a server-side MFA gate for administrative access." },
  { title: "Retention & legal hold", body: "Configurable retention schedules with legal hold, so data is kept and removed by policy." },
  { title: "DPDP rights", body: "Consent capture and data-principal rights (access, correction, erasure) for the DPDP Act 2023." },
];

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Security & compliance"
        title="Employee data protected by design"
        sub="Security and India compliance are built into the platform, not bolted on. Here is how NeevHR keeps your people data safe and your filings accurate."
      />

      {/* Controls */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {controls.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-tint text-brand">
                  <Icon name="shield" />
                </span>
                <h3 className="mt-4 text-[15px] font-semibold text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Statutory + residency */}
      <section className="border-y border-line bg-ink py-16 text-white lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
              <Icon name="flag" className="h-4 w-4 text-accent" />
              India data residency
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight">
              Built for Indian law, filed the Indian way
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/70">
              Statutory thresholds, returns and challans follow Indian
              regulation and are kept current. Your data stays in India, and the
              DPDP Act 2023 governs how it is handled.
            </p>
            <div className="mt-8">
              <Button href="/demo" variant="secondary">
                Talk to us about security
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {compliancePoints.map((c) => (
              <div
                key={c}
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium"
              >
                <Icon name="check" className="h-4 w-4 shrink-0 text-accent" />
                {c}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl text-center">
          <p className="text-sm text-muted">
            As an early-stage company we are transparent about our roadmap:
            formal certifications are planned as we grow. We are happy to walk
            your IT and security teams through our current controls in detail.
          </p>
        </Container>
      </section>
    </>
  );
}
