import { SVGProps } from "react";

// Minimal line-icon set (indigo/emerald via currentColor). Stroke style, 24-grid.
const paths: Record<string, React.ReactNode> = {
  flag: (
    <>
      <path d="M4 22V4" />
      <path d="M4 4h13l-2 4 2 4H4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.5a3 3 0 0 1 0 5" />
      <path d="M17 14a6 6 0 0 1 4 6" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  sliders: (
    <>
      <path d="M4 6h10M18 6h2" />
      <circle cx="16" cy="6" r="2" />
      <path d="M4 12h4M12 12h8" />
      <circle cx="10" cy="12" r="2" />
      <path d="M4 18h10M18 18h2" />
      <circle cx="16" cy="18" r="2" />
    </>
  ),
  check: <path d="m5 12 4.5 4.5L19 7" />,
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chart: (
    <>
      <path d="M4 4v16h16" />
      <path d="M8 15l3-4 3 2 4-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  wallet: (
    <>
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3" />
      <rect x="4" y="8" width="16" height="11" rx="2.5" />
      <path d="M16 13.5h1.5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  sparkle: (
    <path d="M12 3.5 13.8 9l5.7 1.5-5.7 1.7L12 18l-1.8-5.8-5.7-1.7L10.2 9 12 3.5Z" />
  ),
  layers: (
    <>
      <path d="m12 4 8.5 4.5L12 13 3.5 8.5 12 4Z" />
      <path d="m3.5 12.5 8.5 4.5 8.5-4.5" />
      <path d="m3.5 16.5 8.5 4.5 8.5-4.5" />
    </>
  ),
  book: (
    <>
      <path d="M5 4.5h9.5A3.5 3.5 0 0 1 18 8v11.5H8.5A3.5 3.5 0 0 1 5 16V4.5Z" />
      <path d="M5 16a3.5 3.5 0 0 1 3.5-3.5H18" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-5 w-5",
  ...props
}: { name: keyof typeof paths | string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {paths[name] ?? null}
    </svg>
  );
}
