export type Tool = {
  slug: string;
  name: string;
  tagline: string;
  metaDesc: string;
};

export const tools: Tool[] = [
  {
    slug: "gratuity-calculator",
    name: "Gratuity calculator",
    tagline: "Estimate the gratuity payable under the Payment of Gratuity Act, 1972.",
    metaDesc:
      "Free gratuity calculator for India. Estimate gratuity payable from last drawn salary and years of service under the Payment of Gratuity Act, 1972.",
  },
  {
    slug: "hra-calculator",
    name: "HRA exemption calculator",
    tagline: "Work out your house rent allowance exemption under Section 10(13A).",
    metaDesc:
      "Free HRA exemption calculator for India. Find your tax-exempt house rent allowance under Section 10(13A) from basic, HRA, rent and city.",
  },
  {
    slug: "pf-calculator",
    name: "PF calculator",
    tagline: "Estimate monthly EPF contributions at 12% for employee and employer.",
    metaDesc:
      "Free EPF / PF calculator for India. Estimate employee and employer provident fund contributions at 12% with the ₹15,000 wage ceiling.",
  },
  {
    slug: "take-home-salary-calculator",
    name: "Take-home salary calculator",
    tagline: "Estimate monthly in-hand pay from your annual CTC.",
    metaDesc:
      "Free take-home salary calculator for India. Estimate monthly in-hand pay from annual CTC after PF, professional tax and TDS (new regime).",
  },
  {
    slug: "bonus-calculator",
    name: "Statutory bonus calculator",
    tagline: "Estimate annual bonus under the Payment of Bonus Act, 1965.",
    metaDesc:
      "Free statutory bonus calculator for India. Estimate annual bonus at 8.33% to 20% under the Payment of Bonus Act, 1965.",
  },
  {
    slug: "salary-hike-calculator",
    name: "Salary hike calculator",
    tagline: "Work out your percentage hike, or your new salary after a raise.",
    metaDesc:
      "Free salary hike calculator. Find your percentage increment from current and new salary, or the new salary from a hike percentage.",
  },
];

export const toolBySlug = Object.fromEntries(tools.map((t) => [t.slug, t]));
