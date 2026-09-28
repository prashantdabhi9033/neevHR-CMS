import { Phone, VisualStage } from "@/components/visuals/Stage";

// Employee self-service is the NeevHR mobile app, so the image IS the app: real screens rendered from
// the Flutter app (mobile/test/marketing/capture_screens_test.dart, demo data) in three phones. Home in
// front, the two screens employees open most, attendance and payslips, either side.
// Re-capture: cd mobile && flutter test test/marketing/capture_screens_test.dart

export const ESS_SCREENS = {
  home: { src: "/mobile/ess-home.png", title: "Home", body: "Leave balance, today's status, approvals and HR reminders at a glance." },
  attendance: { src: "/mobile/ess-attendance.png", title: "Attendance", body: "Punch in and out, and see the month: present, WFH, leave and late marks." },
  leave: { src: "/mobile/ess-leave.png", title: "Leave", body: "Live balances by leave type and the status of every request." },
  applyLeave: { src: "/mobile/ess-apply_leave.png", title: "Apply leave", body: "Pick the type and dates, add a reason and submit for approval." },
  payslips: { src: "/mobile/ess-payslips.png", title: "Payslips", body: "Every month's net pay, one tap from the full breakdown." },
  payslipDetail: { src: "/mobile/ess-payslip_detail.png", title: "Payslip detail", body: "Earnings, PF, PT and TDS deductions, and net pay for the month." },
  approvals: { src: "/mobile/ess-approvals.png", title: "Approvals", body: "Managers approve their team's requests from one inbox." },
  expenses: { src: "/mobile/ess-expenses.png", title: "Expenses", body: "Claim expenses against policy and track reimbursement." },
} as const;

export function MobileVisual() {
  return (
    <VisualStage
      width={760}
      estHeight={660}
      backdrop="lilac"
      padding={36}
      label="Screens from the NeevHR mobile app: home, attendance and payslips."
    >
      <div className="relative mx-auto h-[560px] w-[640px]">
        <div className="absolute left-0 top-[64px]" style={{ transform: "rotate(-7deg)" }}>
          <Phone
            src={ESS_SCREENS.attendance.src}
            alt="NeevHR app attendance screen: checked in at 09:12 with the month's summary."
            width={218}
            eager
          />
        </div>
        <div className="absolute right-0 top-[64px]" style={{ transform: "rotate(7deg)" }}>
          <Phone
            src={ESS_SCREENS.payslips.src}
            alt="NeevHR app payslips screen: monthly net pay of ₹78,940."
            width={218}
            eager
          />
        </div>
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
          <Phone
            src={ESS_SCREENS.home.src}
            alt="NeevHR app home screen: leave balance, present today, pending approvals."
            width={250}
            eager
          />
        </div>
      </div>
    </VisualStage>
  );
}
