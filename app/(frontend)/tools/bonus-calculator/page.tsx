import { ToolLayout, toolMetadata } from "@/components/tools/ToolLayout";
import { BonusCalculator } from "@/components/tools/BonusCalculator";

export const metadata = toolMetadata("bonus-calculator");

export default function Page() {
  return (
    <ToolLayout slug="bonus-calculator">
      <BonusCalculator />
    </ToolLayout>
  );
}
