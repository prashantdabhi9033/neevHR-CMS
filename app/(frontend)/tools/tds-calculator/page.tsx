import { ToolLayout, toolMetadata } from "@/components/tools/ToolLayout";
import { TdsCalculator } from "@/components/tools/TdsCalculator";

export const metadata = toolMetadata("tds-calculator");

export default function Page() {
  return (
    <ToolLayout slug="tds-calculator">
      <TdsCalculator />
    </ToolLayout>
  );
}
