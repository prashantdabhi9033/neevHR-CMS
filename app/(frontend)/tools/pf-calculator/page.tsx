import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { PfCalculator } from "@/components/tools/PfCalculator";
import { toolBySlug } from "@/lib/tools";

const t = toolBySlug["pf-calculator"];

export const metadata: Metadata = {
  alternates: { canonical: "/tools/pf-calculator" },
  title: t.name,
  description: t.metaDesc,
};

export default function Page() {
  return (
    <ToolLayout
      slug={t.slug}
      name={t.name}
      tagline={t.tagline}
      note={
        <>
          <p className="font-semibold text-ink">How PF is calculated</p>
          <p className="mt-2">
            Both employee and employer contribute <strong>12%</strong> of PF
            wages (Basic + DA). Many employers cap PF wages at the statutory
            ceiling of ₹15,000, making the minimum contribution ₹1,800. The
            employer&apos;s 12% splits into EPS (8.33% of wages, up to ₹1,250)
            and EPF (the remainder). EDLI and administrative charges (about
            0.5%) are additional. Figures here are indicative.
          </p>
        </>
      }
    >
      <PfCalculator />
    </ToolLayout>
  );
}
