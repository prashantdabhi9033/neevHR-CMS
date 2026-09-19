import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { HraCalculator } from "@/components/tools/HraCalculator";
import { toolBySlug } from "@/lib/tools";

const t = toolBySlug["hra-calculator"];

export const metadata: Metadata = {
  alternates: { canonical: "/tools/hra-calculator" },
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
          <p className="font-semibold text-ink">How the HRA exemption works</p>
          <p className="mt-2">
            Under Section 10(13A) of the Income Tax Act (old regime), the exempt
            house rent allowance is the <strong>least</strong> of three amounts:
            the actual HRA received, rent paid minus 10% of Basic + DA, and 50%
            of Basic + DA for metro cities (40% for non-metro). Anything above
            that is taxable. This is indicative and does not constitute tax
            advice.
          </p>
        </>
      }
    >
      <HraCalculator />
    </ToolLayout>
  );
}
