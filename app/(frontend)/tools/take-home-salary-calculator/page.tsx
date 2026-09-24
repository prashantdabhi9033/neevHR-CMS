import { ToolLayout, toolMetadata } from "@/components/tools/ToolLayout";
import { TakeHomeCalculator } from "@/components/tools/TakeHomeCalculator";

export const metadata = toolMetadata("take-home-salary-calculator");

export default function Page() {
  return (
    <ToolLayout slug="take-home-salary-calculator">
      <TakeHomeCalculator />
    </ToolLayout>
  );
}
