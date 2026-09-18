import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { GratuityCalculator } from "@/components/tools/GratuityCalculator";
import { toolBySlug } from "@/lib/tools";

const t = toolBySlug["gratuity-calculator"];

export const metadata: Metadata = {
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
          <p className="font-semibold text-ink">How gratuity is calculated</p>
          <p className="mt-2">
            For establishments covered by the Payment of Gratuity Act, 1972,
            gratuity is <strong>15 × last drawn salary × years of service ÷ 26</strong>,
            where salary means Basic + Dearness Allowance. An employee is
            generally eligible after 5 years of continuous service, and any part
            of a year of 6 months or more counts as a full year. The maximum
            gratuity payable is ₹20,00,000. Figures here are indicative.
          </p>
        </>
      }
    >
      <GratuityCalculator />
    </ToolLayout>
  );
}
