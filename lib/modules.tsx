import type { ComponentType } from "react";
import { PayrollVisual } from "@/components/product/PayrollVisual";
import { AttendanceVisual } from "@/components/product/AttendanceVisual";
import { LeaveVisual } from "@/components/product/LeaveVisual";
import { PerformanceVisual } from "@/components/product/PerformanceVisual";
import { RecruitmentVisual } from "@/components/product/RecruitmentVisual";
import { OnboardingVisual } from "@/components/product/OnboardingVisual";

export type ModuleContent = {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  intro: string;
  capabilities: { title: string; body: string }[];
  configPoints: string[];
  reports: string[];
  related: string[];
  Visual: ComponentType;
};

export const modules: Record<string, ModuleContent> = {
  payroll: {
    slug: "payroll",
    name: "Payroll",
    eyebrow: "Payroll & compliance",
    title: "Payroll that is statutory-accurate, on time, every cycle",
    intro:
      "Run payroll for thousands of employees with PF, ESI, PT and TDS handled in the core. Configure pay structures once, and let LOP, arrears, loans and reimbursements flow in automatically, with a full audit trail behind every rupee.",
    capabilities: [
      { title: "Configurable pay structures", body: "Define earnings and deductions as components, group them into structures, and assign to employee groups. No code per grade or entity." },
      { title: "India statutory built in", body: "PF (with the Rs 15,000 ceiling), ESI up to Rs 21,000 gross, Professional Tax by state, LWF and TDS, with ECR, challan and Form 16 outputs." },
      { title: "LOP, arrears & loans", body: "Loss of pay reduces the statutory base correctly, arrears recompute cleanly, and loan EMIs appear on the payslip only when active." },
      { title: "Bank-ready disbursement", body: "Generate NEFT and RTGS files and a JV for finance, with a payroll register and per-component YTD." },
    ],
    configPoints: [
      "Pay structures & components per employee group",
      "PF contribution basis election per financial year",
      "State-wise PT and LWF slabs",
      "Pay frequency: monthly, semi-monthly, fortnightly or weekly",
      "Period lock and approval before release",
    ],
    reports: [
      "Payroll register & salary sheet",
      "PF ECR, ESI and PT challans",
      "Form 24Q and Form 16",
      "Payroll exception & anomaly report",
    ],
    related: ["attendance", "leave"],
    Visual: PayrollVisual,
  },
  attendance: {
    slug: "attendance",
    name: "Attendance",
    eyebrow: "Time & attendance",
    title: "From biometric punches to a clean, payroll-ready day",
    intro:
      "Capture attendance from biometric devices, web and mobile, apply your shift and grace rules, and close each day into numbers payroll can trust, with regularisation and approvals where they belong.",
    capabilities: [
      { title: "Biometric device ingestion", body: "Punches stream in from your devices with live device health, deduplicated and mapped to the right employee and shift." },
      { title: "Configurable day-close", body: "Grace windows, half-day and short-day rules, and a configurable day-close turn raw punches into present, absent, late and overtime." },
      { title: "Regularisation & approvals", body: "Employees raise regularisation for missed punches; managers approve in the same inbox as every other request." },
      { title: "Overtime & premiums", body: "Per-shift overtime and wage-bearing allowances feed straight into payroll." },
    ],
    configPoints: [
      "Shifts, grace windows and week-off policies",
      "Day-close rules per employee group",
      "Regularisation limits and approval chain",
      "Overtime and shift-allowance rules",
    ],
    reports: [
      "Daily & monthly attendance register",
      "Late, early-out and overtime summary",
      "Device health & missed-punch report",
      "Muster roll",
    ],
    related: ["leave", "payroll"],
    Visual: AttendanceVisual,
  },
  leave: {
    slug: "leave",
    name: "Leave",
    eyebrow: "Time & attendance",
    title: "Leave policies configured once, applied everywhere",
    intro:
      "Model every leave type your company runs, with accrual, proration, carry-forward and encashment as rules, not spreadsheets. Employees see live balances; managers approve in a click.",
    capabilities: [
      { title: "Any leave type", body: "Casual, sick, earned, maternity, paternity and your own custom types, each with its own accrual and rules." },
      { title: "Accrual & proration", body: "Monthly or annual accrual, proration for joiners and leavers, carry-forward caps and encashment on exit." },
      { title: "Live balances", body: "Employees always see what they have; applications check eligibility at apply and again at approval." },
      { title: "Holiday calendars", body: "Location-aware holiday calendars and week-off policies keep balances and payroll honest." },
    ],
    configPoints: [
      "Leave types, accrual and carry-forward rules",
      "Proration for mid-cycle joiners and leavers",
      "Approval chain per leave type",
      "Location-wise holiday calendars",
    ],
    reports: [
      "Leave balance & liability report",
      "Leave trends by team and type",
      "Encashment and lapse summary",
    ],
    related: ["attendance", "payroll"],
    Visual: LeaveVisual,
  },
  performance: {
    slug: "performance",
    name: "Performance",
    eyebrow: "Talent",
    title: "Reviews and increments on the same employee record",
    intro:
      "Set weighted goals, run appraisal cycles, and turn ratings into increment and bonus decisions, with the right sign-off authority at every step and a full decision trail.",
    capabilities: [
      { title: "Weighted goals", body: "Goals carry weights that sum to the employee's plan; weighted achievement rolls up automatically." },
      { title: "Multi-stage cycles", body: "Self, manager and final review with role-aware access, so each reviewer sees exactly what they should." },
      { title: "Increment & bonus", body: "Ratings map to increment and bonus matrices, configurable per department, with final sign-off repricing the number." },
      { title: "Continuous feedback", body: "One-on-one check-ins and peer feedback feed the review instead of a once-a-year scramble." },
    ],
    configPoints: [
      "Goal templates and weightings",
      "Review stages and sign-off authority",
      "Increment and bonus matrices per department",
      "Eligibility for mid-cycle joiners",
    ],
    reports: [
      "Rating distribution & calibration",
      "Increment and bonus cost model",
      "Multi-year performance history",
    ],
    related: ["recruitment"],
    Visual: PerformanceVisual,
  },
  onboarding: {
    slug: "onboarding",
    name: "Onboarding",
    eyebrow: "Core HR",
    title: "New hires productive from day one, not week three",
    intro:
      "Turn an accepted offer into a ready employee. Collect documents, capture statutory and bank details, issue assets and assign a buddy, all as a guided, trackable journey the new joiner and HR share.",
    capabilities: [
      { title: "Guided joining journey", body: "A stage-by-stage checklist for HR and the candidate, so nothing slips between offer and day one." },
      { title: "Dynamic intake forms", body: "Collect exactly the fields your policy needs, with statutory, bank and personal details captured once and reused." },
      { title: "Assets & buddy", body: "Reserve and issue assets, assign a department buddy, and confirm the workstation before the joiner arrives." },
      { title: "Policy acknowledgement", body: "Admin-authored policies the candidate reads and acknowledges, recorded for audit." },
    ],
    configPoints: [
      "Joining stages and checklist per role",
      "Intake form fields (work vs personal email, statutory, bank)",
      "Asset categories and issue workflow",
      "Policies requiring acknowledgement",
    ],
    reports: [
      "Onboarding status by joiner",
      "Pending documents & tasks",
      "Time-to-productive",
    ],
    related: ["recruitment", "payroll"],
    Visual: OnboardingVisual,
  },
  recruitment: {
    slug: "recruitment",
    name: "Recruitment",
    eyebrow: "Talent",
    title: "From requisition to a signed offer, then straight to onboarding",
    intro:
      "Raise requisitions, run interview panels, and release offers with the approved compensation, then hand the new hire to onboarding without re-keying a thing.",
    capabilities: [
      { title: "Requisitions & approvals", body: "Managers raise requisitions for their own departments; a validation gate opens the role only when it is ready." },
      { title: "Pipeline & panels", body: "Move candidates through configurable stages, schedule interview rounds and panels, and collect structured feedback." },
      { title: "Offers with a trail", body: "Offers show the approved compensation, carry a validity date, and keep a full history of every version." },
      { title: "Hire to onboard", body: "An accepted offer flows into onboarding, so the employee record starts clean on day one." },
    ],
    configPoints: [
      "Requisition approval chain",
      "Candidate sources and pipeline stages",
      "Interview rounds and panel composition",
      "Default offer validity",
    ],
    reports: [
      "Pipeline & funnel conversion",
      "Time-to-hire and offer acceptance",
      "Source effectiveness",
    ],
    related: ["performance"],
    Visual: RecruitmentVisual,
  },
};

export const moduleList = Object.values(modules);
