import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { BonusCalculator } from "@/components/tools/BonusCalculator";
import { toolBySlug } from "@/lib/tools";

const t = toolBySlug["bonus-calculator"];

export const metadata: Metadata = {
  alternates: { canonical: "/tools/bonus-calculator" },
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
          <p className="font-semibold text-ink">How statutory bonus works</p>
          <p className="mt-2">
            Under the Payment of Bonus Act, 1965, employees earning up to
            ₹21,000 per month (Basic + DA) are eligible. Bonus is a minimum of
            8.33% and a maximum of 20% of the calculation wage, where the
            calculation wage is the lower of Basic + DA and ₹7,000 (or the
            minimum wage for the employment, whichever is higher), for each
            month worked. Figures here are indicative.
          </p>
        </>
      }
    >
      <BonusCalculator />
    </ToolLayout>
  );
}
