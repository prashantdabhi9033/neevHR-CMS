import { ToolLayout, toolMetadata } from "@/components/tools/ToolLayout";
import { LeaveEncashmentCalculator } from "@/components/tools/LeaveEncashmentCalculator";

export const metadata = toolMetadata("leave-encashment-calculator");

export default function Page() {
  return (
    <ToolLayout slug="leave-encashment-calculator">
      <LeaveEncashmentCalculator />
    </ToolLayout>
  );
}
