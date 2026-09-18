import { ProductFrame, StatTile } from "./ProductFrame";

// Mirrors the product's live field map: a geofence with worker pins coloured
// green (inside) / red (outside) / grey (stale).
const pins = [
  { x: 120, y: 90, tone: "#059669" },
  { x: 200, y: 130, tone: "#059669" },
  { x: 250, y: 70, tone: "#dc2626" },
  { x: 90, y: 150, tone: "#059669" },
  { x: 300, y: 150, tone: "#94a3b8" },
];

export function FieldTrackingVisual() {
  return (
    <ProductFrame title="NeevHR · Field tracking · Ahmedabad zone">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile label="Field workers" value="38" />
        <StatTile label="Inside area" value="31" tone="accent" />
        <StatTile label="Open alerts" value="2" />
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-line bg-[#eef2f7]">
        <svg viewBox="0 0 360 220" className="w-full" role="img" aria-label="Field map">
          {/* faux streets */}
          <g stroke="#dbe3ee" strokeWidth="6">
            <path d="M0 60 H360" /><path d="M0 150 H360" />
            <path d="M80 0 V220" /><path d="M270 0 V220" />
          </g>
          {/* geofence */}
          <polygon
            points="70,50 280,40 300,160 90,175"
            fill="rgba(67,56,202,0.10)"
            stroke="var(--color-brand)"
            strokeWidth="2"
            strokeDasharray="5 4"
          />
          {/* pins */}
          {pins.map((p, i) => (
            <g key={i}>
              <path
                d={`M${p.x} ${p.y} c-6 -8 -6 -14 0 -20 c6 6 6 12 0 20`}
                transform={`translate(0,-4)`}
                fill={p.tone}
              />
              <circle cx={p.x} cy={p.y - 16} r="3.5" fill="#fff" />
            </g>
          ))}
        </svg>
      </div>
      <div className="mt-2 flex gap-4 text-[11px] text-body">
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#059669]" /> Inside</span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#dc2626]" /> Outside</span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#94a3b8]" /> Stale</span>
      </div>
    </ProductFrame>
  );
}
