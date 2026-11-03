// Statutory figures shared by the calculators. Change a value here when the
// law changes, then update the worked examples in lib/tools.ts and
// lib/glossary.ts and the review date in lib/seo.ts.

/** EPF wage ceiling per month, from 17 Sep 2026 (S.O. 5109(E)). Earlier rows were lower. */
export const PF_WAGE_CEILING = 25000;
/**
 * EPS wage ceiling per month. From 17 Sep 2026 it follows the PF wage ceiling of ₹25,000 (owner decision,
 * 03 Nov 2026), so employer EPS is at most ₹2,083 a month; ₹15,000 (₹1,250) before. The Central Government's
 * 1.16% share stays on ₹15,000 under G.S.R. 890(E) and is not an employer deduction.
 */
export const EPS_WAGE_CEILING = 25000;
