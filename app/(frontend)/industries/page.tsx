import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  alternates: { canonical: "/industries" },
  title: "Industries",
  description:
    "NeevHR works across Indian industries: manufacturing, IT and ITES, retail, healthcare, BFSI, logistics, pharma, hospitality and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Built for how your industry actually runs HR"
        sub="Every industry has its own shifts, compliance and workforce mix. NeevHR configures to yours, no code and no country pack."
      />
      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)] transition-colors hover:border-brand/40"
              >
                <h2 className="text-lg font-semibold text-ink group-hover:text-brand">
                  {i.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                  {i.tagline}
                </p>
                <span className="mt-4 text-sm font-semibold text-brand">
                  See how NeevHR fits →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
