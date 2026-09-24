import { ToolLayout, toolMetadata } from "@/components/tools/ToolLayout";
import { OvertimeCalculator } from "@/components/tools/OvertimeCalculator";

export const metadata = toolMetadata("overtime-calculator");

export default function Page() {
  return (
    <ToolLayout slug="overtime-calculator">
      <OvertimeCalculator />
    </ToolLayout>
  );
}
