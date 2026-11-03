import { GuidePage, guideMetadata } from "@/components/site/GuidePage";
import { guideBySlug } from "@/lib/guides";

const g = guideBySlug["payroll-compliance-calendar-2026-27"];

export const metadata = guideMetadata(g);

export default function Page() {
  return <GuidePage g={g} />;
}
