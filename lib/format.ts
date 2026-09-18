// Indian-format currency and number helpers.
export function inr(n: number): string {
  if (!isFinite(n)) return "₹0";
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

export function num(n: number): string {
  return Math.round(n).toLocaleString("en-IN");
}
