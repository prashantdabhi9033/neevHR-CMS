import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/site/PageHeader";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Free HR & payroll tools",
  description:
    "Free India HR and payroll calculators from NeevHR: gratuity, HRA exemption and PF contribution calculators.",
};

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free HR tools"
        title="Free calculators for Indian HR and payroll"
        sub="Quick, accurate India-specific calculators. No sign-up, no catch."
      />
      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t) => (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)] transition-colors hover:border-brand/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-tint text-brand">
                  <Icon name="chart" />
                </span>
                <h2 className="mt-4 text-lg font-semibold text-ink group-hover:text-brand">
                  {t.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                  {t.tagline}
                </p>
                <span className="mt-4 text-sm font-semibold text-brand">
                  Open calculator →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
