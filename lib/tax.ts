// Indicative salary income-tax for the free calculators (tax year 2026-27).
// One implementation shared by the TDS and take-home calculators so the two
// never disagree. Figures: see lib/tools.ts sources and the review date.

type Slab = [upTo: number, rate: number];

const NEW_SLABS: Slab[] = [
  [400000, 0],
  [800000, 0.05],
  [1200000, 0.1],
  [1600000, 0.15],
  [2000000, 0.2],
  [2400000, 0.25],
  [Infinity, 0.3],
];

const OLD_SLABS: Slab[] = [
  [250000, 0],
  [500000, 0.05],
  [1000000, 0.2],
  [Infinity, 0.3],
];

export const NEW_STD_DEDUCTION = 75000;
export const OLD_STD_DEDUCTION = 50000;
const NEW_REBATE_LIMIT = 1200000;
const OLD_REBATE_LIMIT = 500000;
const OLD_REBATE_MAX = 12500;
const CESS = 0.04;

function slabTax(income: number, slabs: Slab[]): number {
  let tax = 0;
  let prev = 0;
  for (const [upTo, rate] of slabs) {
    if (income <= prev) break;
    tax += (Math.min(income, upTo) - prev) * rate;
    prev = upTo;
  }
  return tax;
}

// Surcharge with marginal relief at each threshold: the extra tax + surcharge
// from crossing a threshold cannot exceed the income above that threshold.
function withSurcharge(income: number, tax: number, slabs: Slab[], regime: "new" | "old"): number {
  const bands: [number, number][] =
    regime === "new"
      ? [[20000000, 0.25], [10000000, 0.15], [5000000, 0.1]]
      : [[50000000, 0.37], [20000000, 0.25], [10000000, 0.15], [5000000, 0.1]];
  for (let i = 0; i < bands.length; i++) {
    const [threshold, rate] = bands[i];
    if (income > threshold) {
      const full = tax * (1 + rate);
      const lowerRate = bands[i + 1]?.[1] ?? 0;
      const atThreshold = slabTax(threshold, slabs) * (1 + lowerRate);
      return Math.min(full, atThreshold + (income - threshold));
    }
  }
  return tax;
}

export type TaxResult = {
  taxable: number;
  baseTax: number;
  rebate: number;
  surchargeAndTax: number;
  cess: number;
  total: number;
};

/** New regime: `taxable` is after the ₹75,000 standard deduction. */
export function newRegimeTax(taxable: number): TaxResult {
  const t = Math.max(0, taxable);
  const baseTax = slabTax(t, NEW_SLABS);
  let afterRebate = baseTax;
  if (t <= NEW_REBATE_LIMIT) afterRebate = 0;
  // Marginal relief: tax just above ₹12 lakh cannot exceed the excess income.
  else afterRebate = Math.min(baseTax, t - NEW_REBATE_LIMIT);
  const surchargeAndTax = withSurcharge(t, afterRebate, NEW_SLABS, "new");
  const cess = surchargeAndTax * CESS;
  return {
    taxable: t,
    baseTax,
    rebate: baseTax - afterRebate,
    surchargeAndTax,
    cess,
    total: surchargeAndTax + cess,
  };
}

/** Old regime: `taxable` is after standard deduction and all deductions. */
export function oldRegimeTax(taxable: number): TaxResult {
  const t = Math.max(0, taxable);
  const baseTax = slabTax(t, OLD_SLABS);
  const rebate = t <= OLD_REBATE_LIMIT ? Math.min(baseTax, OLD_REBATE_MAX) : 0;
  const afterRebate = baseTax - rebate;
  const surchargeAndTax = withSurcharge(t, afterRebate, OLD_SLABS, "old");
  const cess = surchargeAndTax * CESS;
  return {
    taxable: t,
    baseTax,
    rebate,
    surchargeAndTax,
    cess,
    total: surchargeAndTax + cess,
  };
}
