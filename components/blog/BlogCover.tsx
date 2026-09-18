import { categoryOf } from "@/lib/blog";

// Category-specific illustrated cover (designed SVG art, not a flat gradient).
function Motif({ category }: { category: string }) {
  const white = "rgba(255,255,255,0.9)";
  const soft = "rgba(255,255,255,0.16)";
  const softer = "rgba(255,255,255,0.10)";

  switch (categoryOf(category).label) {
    case "Payroll":
      return (
        <g>
          <rect x="212" y="34" width="150" height="92" rx="10" fill={white} opacity="0.95" />
          <rect x="226" y="48" width="70" height="8" rx="4" fill="#4338ca" opacity="0.35" />
          <rect x="226" y="66" width="122" height="6" rx="3" fill="#94a3b8" />
          <rect x="226" y="80" width="122" height="6" rx="3" fill="#94a3b8" />
          <rect x="226" y="98" width="60" height="14" rx="4" fill="#10b981" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={40 + i * 34} y={120 - i * 14} width="22" height={20 + i * 14} rx="4" fill={soft} />
          ))}
          <circle cx="70" cy="52" r="22" fill={softer} />
          <text x="70" y="60" textAnchor="middle" fontSize="24" fontWeight="700" fill={white}>₹</text>
        </g>
      );
    case "Compliance":
      return (
        <g>
          <path d="M300 26 l40 16 v34 c0 30 -20 46 -40 56 c-20 -10 -40 -26 -40 -56 v-34 z" fill={white} opacity="0.95" />
          <path d="M282 74 l12 12 22 -24" fill="none" stroke="#059669" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="40" y="40" width="120" height="94" rx="8" fill={soft} />
          <rect x="56" y="58" width="70" height="7" rx="3" fill={white} />
          <rect x="56" y="76" width="88" height="6" rx="3" fill={softer} />
          <rect x="56" y="92" width="88" height="6" rx="3" fill={softer} />
          <rect x="56" y="108" width="54" height="6" rx="3" fill={softer} />
        </g>
      );
    case "Attendance & leave":
      return (
        <g>
          <rect x="210" y="34" width="150" height="104" rx="10" fill={white} opacity="0.95" />
          <rect x="210" y="34" width="150" height="24" rx="10" fill="#0891b2" opacity="0.5" />
          {Array.from({ length: 20 }).map((_, i) => {
            const c = i % 5, r = Math.floor(i / 5);
            const on = [2, 6, 7, 11, 13, 18].includes(i);
            return <rect key={i} x={222 + c * 27} y={66 + r * 17} width="18" height="12" rx="3" fill={on ? "#22d3ee" : softer} />;
          })}
          <circle cx="86" cy="84" r="40" fill="none" stroke={soft} strokeWidth="10" />
          <path d="M86 84 v-26 M86 84 l18 10" stroke={white} strokeWidth="6" strokeLinecap="round" fill="none" />
        </g>
      );
    case "Performance":
      return (
        <g>
          {[30, 52, 74, 52, 30].map((h, i) => (
            <rect key={i} x={60 + i * 34} y={130 - h} width="24" height={h} rx="4" fill={soft} />
          ))}
          <path d="M60 100 Q 128 40 196 100" fill="none" stroke={white} strokeWidth="5" strokeLinecap="round" />
          {[0, 1, 2, 3, 4].map((i) => (
            <circle key={i} cx={72 + i * 34} cy={i === 2 ? 56 : i === 1 || i === 3 ? 74 : 96} r="5" fill={white} />
          ))}
          <path d="M250 118 l24 -30 20 14 34 -44" fill="none" stroke={white} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
        </g>
      );
    case "Recruitment":
      return (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <path key={i} d={`M${70 + i * 6} ${44 + i * 22} h${180 - i * 12} l-20 18 h${-140 + i * 24} z`} fill={i % 2 ? softer : soft} />
          ))}
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={300} cy={54 + i * 30} r="12" fill={white} opacity={0.9 - i * 0.25} />
          ))}
        </g>
      );
    case "Product":
      return (
        <g>
          <rect x="70" y="40" width="220" height="96" rx="12" fill={white} opacity="0.95" />
          <rect x="70" y="40" width="220" height="22" rx="12" fill="#4338ca" opacity="0.4" />
          <rect x="86" y="74" width="60" height="44" rx="6" fill="#eef2ff" />
          <rect x="156" y="74" width="60" height="44" rx="6" fill="#ecfdf5" />
          <rect x="226" y="74" width="48" height="44" rx="6" fill="#eef2ff" />
        </g>
      );
    default: // HR strategy: connected nodes
      return (
        <g>
          <line x1="180" y1="50" x2="110" y2="96" stroke={soft} strokeWidth="4" />
          <line x1="180" y1="50" x2="250" y2="96" stroke={soft} strokeWidth="4" />
          <line x1="110" y1="96" x2="80" y2="132" stroke={soft} strokeWidth="4" />
          <line x1="250" y1="96" x2="300" y2="132" stroke={soft} strokeWidth="4" />
          {[[180, 50], [110, 96], [250, 96], [80, 132], [300, 132]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i === 0 ? 20 : 14} fill={white} opacity={0.9} />
          ))}
        </g>
      );
  }
}

export function BlogCover({
  category,
  title,
  banner = false,
}: {
  category?: string | null;
  title?: string;
  banner?: boolean;
}) {
  const c = categoryOf(category);
  return (
    <div
      className={`relative overflow-hidden ${banner ? "rounded-2xl" : "aspect-[16/10]"}`}
    >
      <svg
        viewBox="0 0 400 170"
        className={`h-full w-full ${banner ? "aspect-[40/17]" : ""}`}
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label={`${c.label} illustration`}
      >
        <defs>
          <linearGradient id={`bg-${c.label.replace(/\W/g, "")}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={c.from} />
            <stop offset="1" stopColor={c.to} />
          </linearGradient>
        </defs>
        <rect width="400" height="170" fill={`url(#bg-${c.label.replace(/\W/g, "")})`} />
        <circle cx="360" cy="20" r="70" fill="rgba(255,255,255,0.08)" />
        <circle cx="30" cy="160" r="60" fill="rgba(255,255,255,0.06)" />
        <Motif category={category ?? "hr-strategy"} />
      </svg>
      <span className="absolute bottom-4 left-4 rounded-full bg-white/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
        {c.label}
      </span>
      {banner && title && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-5 pt-16">
          <h1 className="max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl">
            {title}
          </h1>
        </div>
      )}
    </div>
  );
}
