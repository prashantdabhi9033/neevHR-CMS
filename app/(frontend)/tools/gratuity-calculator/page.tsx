import { ToolLayout, toolMetadata } from "@/components/tools/ToolLayout";
import { GratuityCalculator } from "@/components/tools/GratuityCalculator";

export const metadata = toolMetadata("gratuity-calculator");

export default function Page() {
  return (
    <ToolLayout slug="gratuity-calculator">
      <GratuityCalculator />
    </ToolLayout>
  );
}
