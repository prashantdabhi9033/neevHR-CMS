import { ToolLayout, toolMetadata } from "@/components/tools/ToolLayout";
import { EsiCalculator } from "@/components/tools/EsiCalculator";

export const metadata = toolMetadata("esi-calculator");

export default function Page() {
  return (
    <ToolLayout slug="esi-calculator">
      <EsiCalculator />
    </ToolLayout>
  );
}
