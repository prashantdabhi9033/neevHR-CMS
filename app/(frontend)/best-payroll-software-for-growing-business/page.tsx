import { GuidePage, guideMetadata } from "@/components/site/GuidePage";
import { guideBySlug } from "@/lib/guides";

const g = guideBySlug["best-payroll-software-for-growing-business"];

export const metadata = guideMetadata(g);

export default function Page() {
  return <GuidePage g={g} />;
}
