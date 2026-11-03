// Shared by the demo form and the lead popup. Kept apart from DemoForm so the
// popup, which loads on every page, does not pull the whole form into its chunk.
export const sizes = [
  "Under 100",
  "100 - 500",
  "500 - 1,000",
  "1,000 - 2,500",
  "2,500 - 5,000",
  "5,000+",
];

export type Intent = "demo" | "quote";
