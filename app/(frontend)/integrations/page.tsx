import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/site/PageHeader";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "How NeevHR connects to your world: biometric attendance devices, email, SMS and WhatsApp notifications, bulk CSV import and export, and API access.",
};

const groups = [
  {
    title: "Biometric attendance devices",
    body: "Ingest punches directly from your biometric devices with live device health monitoring, deduplication and automatic mapping to the right employee and shift.",
    items: ["Device push (ADMS) ingestion", "Live device health & last-seen", "Automatic shift mapping"],
  },
  {
    title: "Communication channels",
    body: "Reach employees on the channel they actually use, driven by a single notification engine.",
    items: ["Email", "SMS (provider-agnostic)", "WhatsApp (Cloud API)", "Browser web push"],
  },
  {
    title: "Data import & export",
    body: "Move data in and out without lock-in. Bulk import with dry-run validation, and export from every list.",
    items: ["Bulk CSV import with validation", "Employee & document migration", "Export from any report"],
  },
  {
    title: "API access",
    body: "Connect NeevHR to your own systems programmatically with scoped API keys that act as service principals.",
    items: ["Scoped API keys", "Service-principal access", "Auditable API activity"],
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Integrations"
        title="Connected to the tools your HR already runs on"
        sub="NeevHR connects to your biometric devices and communication channels, and moves data cleanly in and out. Here is exactly what is available today."
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {groups.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]"
              >
                <h2 className="text-lg font-semibold text-ink">{g.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {g.body}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <li
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-surface-soft px-3 py-1.5 text-xs font-medium text-body"
                    >
                      <Icon name="check" className="h-3.5 w-3.5 text-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-surface-soft px-8 py-8 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-semibold text-ink">
                Need a specific integration?
              </h3>
              <p className="mt-1 text-sm text-body">
                Tell us what you run and we will talk you through the options
                honestly, including what is on our roadmap.
              </p>
            </div>
            <Button href="/demo">Talk to us</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
