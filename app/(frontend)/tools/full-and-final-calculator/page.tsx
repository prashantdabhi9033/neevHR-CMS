import { ToolLayout, toolMetadata } from "@/components/tools/ToolLayout";
import { FnfCalculator } from "@/components/tools/FnfCalculator";

export const metadata = toolMetadata("full-and-final-calculator");

export default function Page() {
  return (
    <ToolLayout slug="full-and-final-calculator">
      <FnfCalculator />
    </ToolLayout>
  );
}
