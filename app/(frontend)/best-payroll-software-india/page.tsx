import { GuidePage, guideMetadata } from "@/components/site/GuidePage";
import { guideBySlug } from "@/lib/guides";

const g = guideBySlug["best-payroll-software-india"];

export const metadata = guideMetadata(g);

export default function Page() {
  return <GuidePage g={g} />;
}
