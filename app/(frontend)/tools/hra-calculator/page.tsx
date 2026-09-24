import { ToolLayout, toolMetadata } from "@/components/tools/ToolLayout";
import { HraCalculator } from "@/components/tools/HraCalculator";

export const metadata = toolMetadata("hra-calculator");

export default function Page() {
  return (
    <ToolLayout slug="hra-calculator">
      <HraCalculator />
    </ToolLayout>
  );
}
