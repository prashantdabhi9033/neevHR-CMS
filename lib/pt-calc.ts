// Professional tax slabs for the calculator, as numbers. The words, sources and review dates live in
// lib/states.ts (the state guides). Change both together: every slab here must match the slab table
// shown on that state's guide.

/** A monthly slab: tax applies when salary is above `over` (and up to the next slab). */
type MonthlySlab = { over: number; tax: number; february?: number };

export type PtState =
  | { slug: string; name: string; kind: "none"; note: string }
  | { slug: string; name: string; kind: "monthly"; slabs: MonthlySlab[]; women?: MonthlySlab[]; note?: string }
  | { slug: string; name: string; kind: "half-yearly"; slabs: { over: number; tax: number }[]; note: string };

export const ptStates: PtState[] = [
  { slug: "gujarat", name: "Gujarat", kind: "monthly", slabs: [{ over: 0, tax: 0 }, { over: 12000, tax: 200 }] },
  {
    slug: "maharashtra",
    name: "Maharashtra",
    kind: "monthly",
    slabs: [{ over: 0, tax: 0 }, { over: 7500, tax: 175 }, { over: 10000, tax: 200, february: 300 }],
    women: [{ over: 0, tax: 0 }, { over: 25000, tax: 200, february: 300 }],
  },
  {
    slug: "karnataka",
    name: "Karnataka",
    kind: "monthly",
    // "Below ₹25,000: nil; ₹25,000 and above": the slab starts at ₹25,000 itself.
    slabs: [{ over: 0, tax: 0 }, { over: 24999.99, tax: 200, february: 300 }],
  },
  { slug: "telangana", name: "Telangana", kind: "monthly", slabs: [{ over: 0, tax: 0 }, { over: 15000, tax: 150 }, { over: 20000, tax: 200 }] },
  {
    slug: "west-bengal",
    name: "West Bengal",
    kind: "monthly",
    slabs: [{ over: 0, tax: 0 }, { over: 10000, tax: 110 }, { over: 15000, tax: 130 }, { over: 25000, tax: 150 }, { over: 40000, tax: 200 }],
    note: "The schedule in force since April 2014. A proposed new schedule from 1 October 2026 was not final when reviewed.",
  },
  {
    slug: "tamil-nadu",
    name: "Tamil Nadu (Chennai)",
    kind: "half-yearly",
    slabs: [{ over: 0, tax: 0 }, { over: 21000, tax: 180 }, { over: 30000, tax: 425 }, { over: 45000, tax: 930 }, { over: 60000, tax: 1025 }, { over: 75000, tax: 1250 }],
    note: "Greater Chennai Corporation slab on half-yearly income. Other local bodies set their own rates.",
  },
  {
    slug: "kerala",
    name: "Kerala",
    kind: "half-yearly",
    slabs: [{ over: 0, tax: 0 }, { over: 11999, tax: 320 }, { over: 17999, tax: 450 }, { over: 29999, tax: 600 }, { over: 44999, tax: 750 }, { over: 99999, tax: 1000 }, { over: 124999, tax: 1250 }],
    note: "Slab on half-yearly income, revised from 1 October 2024. The local body where the establishment is collects it.",
  },
  { slug: "delhi", name: "Delhi", kind: "none", note: "Delhi does not levy professional tax." },
  { slug: "haryana", name: "Haryana", kind: "none", note: "Haryana does not levy professional tax." },
  { slug: "uttar-pradesh", name: "Uttar Pradesh", kind: "none", note: "Uttar Pradesh does not levy professional tax." },
  { slug: "rajasthan", name: "Rajasthan", kind: "none", note: "Professional tax is not levied on salaried employees in Rajasthan." },
];

function pick<T extends { over: number }>(slabs: T[], amount: number): T {
  let hit = slabs[0];
  for (const s of slabs) if (amount > s.over) hit = s;
  return hit;
}

export type PtResult = {
  /** Usual monthly deduction (for half-yearly states, the half-yearly amount spread is not used). */
  monthly: number;
  february: number;
  halfYearly: number;
  annual: number;
};

/** PT for one employee. `monthlySalary` is gross monthly salary in rupees. */
export function professionalTax(state: PtState, monthlySalary: number, gender: "man" | "woman" = "man"): PtResult {
  const salary = Math.max(0, monthlySalary);
  if (state.kind === "none") return { monthly: 0, february: 0, halfYearly: 0, annual: 0 };
  if (state.kind === "half-yearly") {
    const half = pick(state.slabs, salary * 6).tax;
    return { monthly: 0, february: 0, halfYearly: half, annual: half * 2 };
  }
  const slabs = gender === "woman" && state.women ? state.women : state.slabs;
  const s = pick(slabs, salary);
  const feb = s.february ?? s.tax;
  return { monthly: s.tax, february: feb, halfYearly: 0, annual: s.tax * 11 + feb };
}
