// Batch 2 articles (SEO spec §16, §76), one file per article. Regenerate this
// index when adding a file: every default export is a SeedPost.
import type { SeedPost } from "../posts";
import ecr_explained from "./ecr-explained";
import employee_onboarding_checklist from "./employee-onboarding-checklist";
import employee_vs_employer_pf_contribution from "./employee-vs-employer-pf-contribution";
import esi_eligibility from "./esi-eligibility";
import form_24q_explained from "./form-24q-explained";
import hrms_cost_in_india from "./hrms-cost-in-india";
import hrms_for_1000_employees from "./hrms-for-1000-employees";
import hrms_for_500_employees from "./hrms-for-500-employees";
import hrms_security_checklist from "./hrms-security-checklist";
import hrms_vs_hris from "./hrms-vs-hris";
import leave_management_guide from "./leave-management-guide";
import monthly_payroll_checklist from "./monthly-payroll-checklist";
import payroll_compliance_checklist_india from "./payroll-compliance-checklist-india";
import payroll_reconciliation_guide from "./payroll-reconciliation-guide";
import payroll_software_vs_manual_payroll from "./payroll-software-vs-manual-payroll";
import salary_tds_explained from "./salary-tds-explained";
import uan_explained from "./uan-explained";
import what_is_hrms_software from "./what-is-hrms-software";
import what_should_an_hrms_include from "./what-should-an-hrms-include";

// Batch 3 articles (06 Oct 2026).
import bell_curve_performance_appraisal from "./bell-curve-performance-appraisal";
import comp_off_policy from "./comp-off-policy";
import contract_labour_compliance_principal_employer from "./contract-labour-compliance-principal-employer";
import employee_attrition_rate from "./employee-attrition-rate";
import employee_background_verification_india from "./employee-background-verification-india";
import hybrid_work_attendance_policy from "./hybrid-work-attendance-policy";
import labour_codes_wage_definition_fifty_percent_rule from "./labour-codes-wage-definition-50-percent-rule";
import labour_welfare_fund_state_wise from "./labour-welfare-fund-state-wise";
import merit_increase_matrix from "./merit-increase-matrix";
import offer_letter_vs_appointment_letter from "./offer-letter-vs-appointment-letter";
import payslip_format_india from "./payslip-format-india";
import performance_appraisal_process from "./performance-appraisal-process";
import prorated_salary_mid_month_joiners_leavers from "./prorated-salary-mid-month-joiners-leavers";
import reduce_offer_dropouts from "./reduce-offer-dropouts";
import relieving_letter_vs_experience_letter from "./relieving-letter-vs-experience-letter";
import salary_advance_employee_loan_policy from "./salary-advance-employee-loan-policy";
import salary_arrears_calculation from "./salary-arrears-calculation";
import shift_management_and_rostering from "./shift-management-and-rostering";
import shops_and_establishments_act_registration from "./shops-and-establishments-act-registration";
import wage_payment_deadlines_and_deductions from "./wage-payment-deadlines-and-deductions";

// Batch 4 articles (17 Oct 2026): HRMS buyer-intent and HR operations topics.
import hrms_rfp_vendor_evaluation_questions from "./hrms-rfp-vendor-evaluation-questions";
import hrms_roi_business_case from "./hrms-roi-business-case";
import cloud_hrms_vs_on_premise from "./cloud-hrms-vs-on-premise";
import hr_helpdesk_employee_query_management from "./hr-helpdesk-employee-query-management";
import hr_metrics_and_kpis from "./hr-metrics-and-kpis";
import biometric_attendance_integration from "./biometric-attendance-integration";
import geo_fencing_attendance_field_staff from "./geo-fencing-attendance-field-staff";
import employee_handbook_hr_policies_india from "./employee-handbook-hr-policies-india";
import leave_encashment_tax_exemption from "./leave-encashment-tax-exemption";
import three_sixty_degree_feedback from "./360-degree-feedback";
import okr_vs_kpi from "./okr-vs-kpi";
import nine_box_grid_succession_planning from "./nine-box-grid-succession-planning";
import employee_engagement_survey_questions from "./employee-engagement-survey-questions";
import exit_interview_questions from "./exit-interview-questions";
import employee_offboarding_checklist from "./employee-offboarding-checklist";
import applicant_tracking_system_guide from "./applicant-tracking-system-guide";
import flexible_benefit_plan_india from "./flexible-benefit-plan-india";
import investment_declaration_proof_submission from "./investment-declaration-proof-submission";
import expense_reimbursement_policy from "./expense-reimbursement-policy";
import hr_audit_checklist_india from "./hr-audit-checklist-india";

// Batch 5 articles (27 Oct 2026): 30 new topics, none overlapping batches 1 to 4.
import loss_of_pay_lop_calculation from "./loss-of-pay-lop-calculation";
import late_coming_policy_grace_period from "./late-coming-policy-grace-period";
import absenteeism_rate_bradford_factor from "./absenteeism-rate-bradford-factor";
import sandwich_leave_rule from "./sandwich-leave-rule";
import holiday_list_policy_india from "./holiday-list-policy-india";
import year_end_leave_carry_forward_lapse from "./year-end-leave-carry-forward-lapse";
import four_labour_codes_summary from "./four-labour-codes-summary";
import fixed_term_employment_labour_codes from "./fixed-term-employment-labour-codes";
import gig_platform_workers_social_security from "./gig-platform-workers-social-security";
import standing_orders_industrial_relations_code from "./standing-orders-industrial-relations-code";
import grievance_redressal_committee from "./grievance-redressal-committee";
import retrenchment_layoff_compensation from "./retrenchment-layoff-compensation";
import statutory_registers_labour_codes from "./statutory-registers-labour-codes";
import hr_records_retention_india from "./hr-records-retention-india";
import night_shift_women_employees from "./night-shift-women-employees";
import apprentices_act_apprentice_hiring from "./apprentices-act-apprentice-hiring";
import disciplinary_action_domestic_enquiry from "./disciplinary-action-domestic-enquiry";
import moonlighting_policy from "./moonlighting-policy";
import employee_referral_programme from "./employee-referral-programme";
import structured_interview_scorecard from "./structured-interview-scorecard";
import campus_hiring_freshers from "./campus-hiring-freshers";
import performance_improvement_plan from "./performance-improvement-plan";
import promotion_policy from "./promotion-policy";
import enps_employee_net_promoter_score from "./enps-employee-net-promoter-score";
import variable_pay_incentive_plan from "./variable-pay-incentive-plan";
import pay_equity_gender_pay_gap from "./pay-equity-gender-pay-gap";
import perquisite_valuation_salary from "./perquisite-valuation-salary";
import esop_taxation_employees from "./esop-taxation-employees";
import interns_stipend_payroll from "./interns-stipend-payroll";
import salary_disbursement_bank_file from "./salary-disbursement-bank-file";

export const articleBatch2: SeedPost[] = [
  ecr_explained,
  employee_onboarding_checklist,
  employee_vs_employer_pf_contribution,
  esi_eligibility,
  form_24q_explained,
  hrms_cost_in_india,
  hrms_for_1000_employees,
  hrms_for_500_employees,
  hrms_security_checklist,
  hrms_vs_hris,
  leave_management_guide,
  monthly_payroll_checklist,
  payroll_compliance_checklist_india,
  payroll_reconciliation_guide,
  payroll_software_vs_manual_payroll,
  salary_tds_explained,
  uan_explained,
  what_is_hrms_software,
  what_should_an_hrms_include,
];

export const articleBatch3: SeedPost[] = [
  bell_curve_performance_appraisal,
  comp_off_policy,
  contract_labour_compliance_principal_employer,
  employee_attrition_rate,
  employee_background_verification_india,
  hybrid_work_attendance_policy,
  labour_codes_wage_definition_fifty_percent_rule,
  labour_welfare_fund_state_wise,
  merit_increase_matrix,
  offer_letter_vs_appointment_letter,
  payslip_format_india,
  performance_appraisal_process,
  prorated_salary_mid_month_joiners_leavers,
  reduce_offer_dropouts,
  relieving_letter_vs_experience_letter,
  salary_advance_employee_loan_policy,
  salary_arrears_calculation,
  shift_management_and_rostering,
  shops_and_establishments_act_registration,
  wage_payment_deadlines_and_deductions,
];

export const articleBatch4: SeedPost[] = [
  hrms_rfp_vendor_evaluation_questions,
  hrms_roi_business_case,
  cloud_hrms_vs_on_premise,
  hr_helpdesk_employee_query_management,
  hr_metrics_and_kpis,
  biometric_attendance_integration,
  geo_fencing_attendance_field_staff,
  employee_handbook_hr_policies_india,
  leave_encashment_tax_exemption,
  three_sixty_degree_feedback,
  okr_vs_kpi,
  nine_box_grid_succession_planning,
  employee_engagement_survey_questions,
  exit_interview_questions,
  employee_offboarding_checklist,
  applicant_tracking_system_guide,
  flexible_benefit_plan_india,
  investment_declaration_proof_submission,
  expense_reimbursement_policy,
  hr_audit_checklist_india,
];

export const articleBatch5: SeedPost[] = [
  loss_of_pay_lop_calculation,
  late_coming_policy_grace_period,
  absenteeism_rate_bradford_factor,
  sandwich_leave_rule,
  holiday_list_policy_india,
  year_end_leave_carry_forward_lapse,
  four_labour_codes_summary,
  fixed_term_employment_labour_codes,
  gig_platform_workers_social_security,
  standing_orders_industrial_relations_code,
  grievance_redressal_committee,
  retrenchment_layoff_compensation,
  statutory_registers_labour_codes,
  hr_records_retention_india,
  night_shift_women_employees,
  apprentices_act_apprentice_hiring,
  disciplinary_action_domestic_enquiry,
  moonlighting_policy,
  employee_referral_programme,
  structured_interview_scorecard,
  campus_hiring_freshers,
  performance_improvement_plan,
  promotion_policy,
  enps_employee_net_promoter_score,
  variable_pay_incentive_plan,
  pay_equity_gender_pay_gap,
  perquisite_valuation_salary,
  esop_taxation_employees,
  interns_stipend_payroll,
  salary_disbursement_bank_file,
];
