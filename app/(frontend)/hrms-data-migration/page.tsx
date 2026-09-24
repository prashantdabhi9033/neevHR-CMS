import { GuidePage, guideMetadata } from "@/components/site/GuidePage";
import { guideBySlug } from "@/lib/guides";

const g = guideBySlug["hrms-data-migration"];

export const metadata = guideMetadata(g);

export default function Page() {
  return <GuidePage g={g} />;
}
