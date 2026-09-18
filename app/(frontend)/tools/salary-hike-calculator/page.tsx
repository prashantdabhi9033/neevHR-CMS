import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { HikeCalculator } from "@/components/tools/HikeCalculator";
import { toolBySlug } from "@/lib/tools";

const t = toolBySlug["salary-hike-calculator"];

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
          <p className="font-semibold text-ink">How the hike is calculated</p>
          <p className="mt-2">
            The percentage hike is the increase divided by your current salary:
            <strong> (new − current) ÷ current × 100</strong>. Switch the mode to
            work the other way and find the new salary from a hike percentage:
            <strong> current × (1 + hike ÷ 100)</strong>. This works on annual
            CTC; your actual in-hand change also depends on the new salary
            structure and tax.
          </p>
        </>
      }
    >
      <HikeCalculator />
    </ToolLayout>
  );
}
