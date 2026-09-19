import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { TakeHomeCalculator } from "@/components/tools/TakeHomeCalculator";
import { toolBySlug } from "@/lib/tools";

const t = toolBySlug["take-home-salary-calculator"];

export const metadata: Metadata = {
  alternates: { canonical: "/tools/take-home-salary-calculator" },
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
          <p className="font-semibold text-ink">How take-home is estimated</p>
          <p className="mt-2">
            We assume a standard structure where Basic is 40% or 50% of CTC.
            Employer PF (12% of Basic, capped at the ₹15,000 wage ceiling) and
            gratuity (4.81% of Basic) are part of CTC, so they are removed to get
            gross pay. From gross we deduct employee PF, professional tax and an
            estimated TDS under the new regime (₹75,000 standard deduction and
            the Section 87A rebate). This is indicative, not tax advice.
          </p>
        </>
      }
    >
      <TakeHomeCalculator />
    </ToolLayout>
  );
}
