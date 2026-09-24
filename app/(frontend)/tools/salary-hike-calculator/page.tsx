import { ToolLayout, toolMetadata } from "@/components/tools/ToolLayout";
import { HikeCalculator } from "@/components/tools/HikeCalculator";

export const metadata = toolMetadata("salary-hike-calculator");

export default function Page() {
  return (
    <ToolLayout slug="salary-hike-calculator">
      <HikeCalculator />
    </ToolLayout>
  );
}
