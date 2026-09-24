import { ToolLayout, toolMetadata } from "@/components/tools/ToolLayout";
import { PfCalculator } from "@/components/tools/PfCalculator";

export const metadata = toolMetadata("pf-calculator");

export default function Page() {
  return (
    <ToolLayout slug="pf-calculator">
      <PfCalculator />
    </ToolLayout>
  );
}
