import { ToolLayout, toolMetadata } from "@/components/tools/ToolLayout";
import { NoticePeriodCalculator } from "@/components/tools/NoticePeriodCalculator";

export const metadata = toolMetadata("notice-period-calculator");

export default function Page() {
  return (
    <ToolLayout slug="notice-period-calculator">
      <NoticePeriodCalculator />
    </ToolLayout>
  );
}
