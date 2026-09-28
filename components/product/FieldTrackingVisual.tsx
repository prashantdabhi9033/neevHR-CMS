import { ProductFrame, StatTile } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Rows, Tag, Toast } from "@/components/showcase/parts";

// Mirrors the product's live field map: a polygon geofence (Naroda GIDC) and a circular one (Vatva
// warehouse), worker pins coloured green (inside) / red (outside) / grey (stale), and the trail of the
// worker who left the boundary. Lifted pieces: the out-of-boundary alert, an offline buffer syncing on
// reconnect, and duty-hours-only tracking with consent.
const pins = [
  { x: 92, y: 70, tone: "#059669" },
  { x: 140, y: 96, tone: "#059669" },
  { x: 186, y: 60, tone: "#059669" },
  { x: 112, y: 122, tone: "#059669" },
  { x: 206, y: 102, tone: "#059669" },
  { x: 160, y: 42, tone: "#94a3b8" },
  { x: 298, y: 92, tone: "#059669" },
  { x: 318, y: 110, tone: "#059669" },
  { x: 30, y: 168, tone: "#dc2626" },
];

// Lifted pieces: the alert decision, the offline-buffer sync, the tracking policy.
const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 100 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Out-of-boundary alert" title="Manish Patel left Naroda GIDC" meta="Since 11:42 · 23 min · 1.8 km outside" tag={<Tag tone="error">Open</Tag>}>
        <Rows rows={[["11:05", "Inside · Plot 214 visit"], ["11:42", "Crossed west boundary"], ["12:05", "Stationary · 1.8 km out"]]} />
        <Actions primary="Acknowledge" secondary="Replay trail" tone="brand" />
      </FloatCard>
    ),
  },
  {
    width: 290,
    pos: { left: 0, bottom: 22 },
    look: "glass",
    node: <Toast tone="info" glyph="↻" title="Kiran Solanki back online" sub="46 buffered points since 10:15" />,
  },
  {
    width: 270,
    pos: { left: 262, top: 0 },
    node: <Chip badge="GPS" tone="success" title="Duty hours only" sub="09:30-18:30 · consent 38 of 38" />,
  },
];

export function FieldTrackingVisual() {
  return (
    <ProductFrame
      title="NeevHR · Field tracking · Ahmedabad zone · 28 Sep 2026"
      floaters={floaters}
      actions={<><WinButton>Alert rules</WinButton><WinButton primary>Draw geofence</WinButton></>}
    >
      <Soft className="grid grid-cols-3 gap-4">
        <StatTile label="On duty" value="33" sub="of 38 field staff" />
        <StatTile label="Inside boundary" value="31" tone="accent" sub="live" />
        <StatTile label="Open alerts" value="2" sub="1 outside · 1 no signal" />
      </Soft>

      <div className="mt-4 overflow-hidden rounded-xl border border-line bg-[#eef2f7]">
        <svg viewBox="0 0 360 180" className="block w-full" role="img" aria-label="Live field map with geofences">
          {/* faux streets */}
          <g stroke="#dbe3ee" strokeWidth="6">
            <path d="M0 50 H360" /><path d="M0 132 H360" />
            <path d="M70 0 V180" /><path d="M240 0 V180" /><path d="M335 0 V180" />
          </g>
          {/* polygon geofence */}
          <polygon
            points="40,28 215,20 250,118 58,140"
            fill="rgba(21,20,123,0.08)"
            stroke="var(--color-brand)"
            strokeWidth="1.6"
            strokeDasharray="5 4"
          />
          <text x="46" y="38" fontSize="7" fontWeight="600" fill="var(--color-brand)">Naroda GIDC</text>
          {/* circular geofence */}
          <circle cx="305" cy="98" r="38" fill="rgba(21,20,123,0.08)" stroke="var(--color-brand)" strokeWidth="1.6" strokeDasharray="5 4" />
          <text x="283" y="54" fontSize="7" fontWeight="600" fill="var(--color-brand)">Vatva warehouse</text>
          {/* trail of the worker who left the boundary */}
          <path d="M112 122 L84 146 L52 156 L30 164" fill="none" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="3 3" />
          {/* pins */}
          {pins.map((p, i) => (
            <g key={i}>
              <path d={`M${p.x} ${p.y} c-6 -8 -6 -14 0 -20 c6 6 6 12 0 20`} transform="translate(0,-4)" fill={p.tone} />
              <circle cx={p.x} cy={p.y - 16} r="3.5" fill="#fff" />
            </g>
          ))}
          <text x="40" y="176" fontSize="7" fontWeight="600" fill="#dc2626">Manish P.</text>
        </svg>
      </div>
      <Soft className="mt-2 flex gap-4 text-[11px] text-body">
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#059669]" /> Inside</span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#dc2626]" /> Outside</span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#94a3b8]" /> Stale</span>
      </Soft>
    </ProductFrame>
  );
}
