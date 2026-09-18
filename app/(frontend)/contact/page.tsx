import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/site/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the NeevHR team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let us talk"
        sub="Whether you want a demo, have a question about compliance, or want to shape the roadmap, we would love to hear from you."
      />
      <section className="py-16">
        <Container className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
            <h2 className="text-lg font-semibold text-ink">Email us</h2>
            <p className="mt-2 text-sm text-body">
              For sales, support or partnerships.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block text-sm font-semibold text-brand hover:text-brand-dark"
            >
              {site.email}
            </a>
          </div>
          <div className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
            <h2 className="text-lg font-semibold text-ink">See it live</h2>
            <p className="mt-2 text-sm text-body">
              The fastest way to understand NeevHR is a tailored walkthrough.
            </p>
            <div className="mt-4">
              <Button href="/demo">Book a demo</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
