import { ToolLayout, toolMetadata } from "@/components/tools/ToolLayout";
import { PtCalculator } from "@/components/tools/PtCalculator";

export const metadata = toolMetadata("professional-tax-calculator");

export default function Page() {
  return (
    <ToolLayout slug="professional-tax-calculator">
      <PtCalculator />
    </ToolLayout>
  );
}
