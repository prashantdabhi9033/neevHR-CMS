import { ToolLayout, toolMetadata } from "@/components/tools/ToolLayout";
import { CtcCalculator } from "@/components/tools/CtcCalculator";

export const metadata = toolMetadata("ctc-calculator");

export default function Page() {
  return (
    <ToolLayout slug="ctc-calculator">
      <CtcCalculator />
    </ToolLayout>
  );
}
