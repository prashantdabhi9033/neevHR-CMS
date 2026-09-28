import { Card, Eyebrow, VisualStage } from "@/components/visuals/Stage";

// Field tracking means knowing where a field team is during duty hours and when someone leaves the area.
// So the map IS the image: full-bleed streets with a polygon geofence (Naroda GIDC) and a circle geofence
// (Vatva warehouse), one worker's breadcrumb trail crossing out of the boundary, live pins, and the two
// open alerts (out of boundary, over-stay). Scale: 100 px = 1 km, so the 178 px from the crossing point
// to the stop is about 1.8 km. Live: 31 inside + 1 outside + 1 stale = 33 sharing of 38 field workers.

const W = 880;
const H = 600;
const naroda = "360,92 596,70 646,236 402,274";
const vatva = { cx: 704, cy: 452, r: 92 };

const trail: { x: number; y: number; t?: string }[] = [
  { x: 566, y: 196, t: "10:15" },
  { x: 540, y: 214 },
  { x: 520, y: 232, t: "11:05" },
  { x: 488, y: 244 },
  { x: 456, y: 256, t: "11:30" },
  { x: 396, y: 264, t: "11:42" },
  { x: 346, y: 284 },
  { x: 292, y: 304 },
  { x: 232, y: 330, t: "12:05" },
];
const inside = [
  [430, 128], [482, 110], [548, 104], [586, 150], [470, 176], [520, 146], [612, 206], [436, 214],
  [660, 420], [742, 430], [690, 492], [728, 500],
];
const stale = [[410, 160]];
const OVERSTAY = { x: 752, y: 470 };

function Pin({ x, y, fill, big = false }: { x: number; y: number; fill: string; big?: boolean }) {
  const s = big ? 1.35 : 1;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <ellipse cx="0" cy="1" rx="5" ry="2" fill="rgba(15,23,42,0.18)" />
      <path d="M0 0 C -8 -10 -9 -14 -9 -18 A9 9 0 1 1 9 -18 C 9 -14 8 -10 0 0 Z" fill={fill} stroke="#fff" strokeWidth="1.6" />
      <circle cx="0" cy="-18" r="3.4" fill="#fff" />
    </g>
  );
}

function MapSvg() {
  const path = trail.map((p, i) => `${i ? "L" : "M"}${p.x} ${p.y}`).join(" ");
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="block" role="img" aria-label="Live field map with geofences and a trail">
      <rect width={W} height={H} fill="#EDF1F6" />
      {/* city blocks */}
      <g fill="#E3E9F1">
        {Array.from({ length: 9 }).map((_, c) =>
          Array.from({ length: 6 }).map((__, r) => (
            <rect key={`${c}-${r}`} x={16 + c * 98} y={14 + r * 100} width={82} height={84} rx={6} />
          )),
        )}
      </g>
      {/* river */}
      <path d="M-10 420 C 60 380, 90 470, 150 520 S 220 610, 250 620" stroke="#CFE3F5" strokeWidth="34" fill="none" />
      {/* parks */}
      <rect x="114" y="114" width="82" height="84" rx="6" fill="#DDEFE3" />
      <rect x="506" y="514" width="82" height="70" rx="6" fill="#DDEFE3" />
      {/* roads */}
      <g stroke="#FFFFFF" strokeLinecap="round" fill="none">
        <path d="M0 306 C 200 300, 420 250, 880 330" strokeWidth="14" />
        <path d="M300 0 C 320 200, 340 400, 330 600" strokeWidth="12" />
        <path d="M0 106 H880" strokeWidth="7" />
        <path d="M0 506 H880" strokeWidth="7" />
        <path d="M600 0 V600" strokeWidth="7" />
        <path d="M110 0 V600" strokeWidth="6" />
      </g>
      <text x="846" y="322" textAnchor="end" fontSize="11" fontWeight="600" fill="#94A3B8">SP Ring Road</text>
      <text x="316" y="590" fontSize="11" fontWeight="600" fill="#94A3B8" transform="rotate(-88 316 590)">NH 48</text>

      {/* geofences */}
      <polygon points={naroda} fill="rgba(21,20,123,0.09)" stroke="#15147B" strokeWidth="2" strokeDasharray="7 5" />
      <circle cx={vatva.cx} cy={vatva.cy} r={vatva.r} fill="rgba(21,20,123,0.09)" stroke="#15147B" strokeWidth="2" strokeDasharray="7 5" />
      <g>
        <rect x="372" y="78" width="104" height="22" rx="11" fill="#15147B" />
        <text x="424" y="93" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">Naroda GIDC</text>
        <rect x={vatva.cx - 62} y={vatva.cy - vatva.r - 12} width="124" height="22" rx="11" fill="#15147B" />
        <text x={vatva.cx} y={vatva.cy - vatva.r + 3} textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">Vatva warehouse</text>
      </g>

      {/* breadcrumb trail */}
      <path d={path} stroke="#fff" strokeWidth="7" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      <path d={path} stroke="#DC2626" strokeWidth="3" fill="none" strokeDasharray="6 5" strokeLinejoin="round" strokeLinecap="round" />
      {trail.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={p.t ? 4.5 : 3} fill="#fff" stroke="#DC2626" strokeWidth="2" />
          {p.t && i < trail.length - 1 && (
            <text x={p.x} y={p.y + 19} textAnchor="middle" fontSize="11" fontWeight="600" fill="#991B1B">
              {p.t}
            </text>
          )}
        </g>
      ))}
      {/* boundary crossing marker */}
      <circle cx="396" cy="264" r="10" fill="none" stroke="#DC2626" strokeWidth="1.5" opacity="0.5" />

      {/* over-stay halo */}
      <circle cx={OVERSTAY.x} cy={OVERSTAY.y - 14} r="26" fill="rgba(245,158,11,0.18)" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" />

      {inside.map(([x, y], i) => (
        <Pin key={i} x={x} y={y} fill="#059669" />
      ))}
      {stale.map(([x, y], i) => (
        <Pin key={i} x={x} y={y} fill="#94A3B8" />
      ))}
      <Pin x={OVERSTAY.x} y={OVERSTAY.y} fill="#F59E0B" />
      <Pin x={232} y={330} fill="#DC2626" big />
      <g>
        <rect x="170" y="340" width="124" height="22" rx="11" fill="#DC2626" />
        <text x="232" y="355" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">Manish P. · 12:05</text>
      </g>

      {/* scale + north */}
      <g transform="translate(470 566)">
        <rect x="-8" y="-16" width="164" height="30" rx="8" fill="rgba(255,255,255,0.85)" />
        <path d="M0 4 V8 H100 V4" stroke="#334155" strokeWidth="1.6" fill="none" />
        <text x="108" y="9" fontSize="11" fontWeight="600" fill="#334155">1 km</text>
        <text x="140" y="9" fontSize="11" fontWeight="700" fill="#334155">N↑</text>
      </g>
    </svg>
  );
}

function LivePanel() {
  const tiles: [string, string, string][] = [
    ["Field workers", "38", "text-ink"],
    ["Inside area", "31", "text-[#047857]"],
    ["Outside area", "1", "text-[#DC2626]"],
    ["Open alerts", "2", "text-[#B45309]"],
  ];
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <Eyebrow>Live map · Ahmedabad</Eyebrow>
        <span className="flex items-center gap-1.5 text-[10.5px] font-semibold text-[#047857]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" /> 12:07
        </span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {tiles.map(([l, v, c]) => (
          <div key={l} className="rounded-lg bg-slate-50 px-2.5 py-2">
            <p className={`tnum text-[18px] font-bold leading-none ${c}`}>{v}</p>
            <p className="mt-1 text-[10.5px] text-slate-500">{l}</p>
          </div>
        ))}
      </div>
      <p className="mt-2.5 flex items-center gap-1.5 text-[10.5px] text-slate-500">
        <span className="h-2 w-2 rounded-full bg-slate-400" /> 1 stale · duty hours 09:30-18:30
      </p>
    </Card>
  );
}

function BoundaryAlert() {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#DC2626]">Out of boundary</p>
          <p className="mt-1 text-[14px] font-bold text-ink">Manish Patel left Naroda GIDC</p>
          <p className="text-[11px] text-slate-500">Crossed 11:42 · 1.8 km outside at 12:05</p>
        </div>
        <span className="rounded-full bg-red-50 px-2 py-0.5 text-[10.5px] font-semibold text-[#DC2626]">Open</span>
      </div>
      <div className="mt-3 flex gap-2">
        <span className="flex-1 rounded-lg bg-[#15147B] py-2 text-center text-[11.5px] font-semibold text-white">Acknowledge</span>
        <span className="rounded-lg border border-slate-200 px-3 py-2 text-[11.5px] font-semibold text-slate-600">View trail</span>
      </div>
    </Card>
  );
}

function OverstayAlert() {
  return (
    <Card className="flex items-center gap-3 p-3.5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-amber-100 text-[12px] font-bold text-[#B45309]">52m</span>
      <div className="min-w-0">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#B45309]">Over-stay</p>
        <p className="text-[12.5px] font-semibold text-ink">Kiran Solanki · one spot 52 min</p>
        <p className="text-[11px] text-slate-500">Max stay at one spot 45 min · Vatva</p>
      </div>
    </Card>
  );
}

export function FieldTrackingVisual() {
  return (
    <VisualStage
      backdrop="canvas"
      estHeight={H}
      padding={0}
      label="A live field map of Ahmedabad with a polygon geofence around Naroda GIDC and a circular one around the Vatva warehouse, one worker's trail leaving the boundary, live worker pins, and out-of-boundary and over-stay alerts."
    >
      <div className="relative" style={{ width: W, height: H }}>
        <MapSvg />
        <div className="absolute left-6 top-6 w-[250px]">
          <LivePanel />
        </div>
        <div className="absolute bottom-6 left-6 w-[304px]">
          <BoundaryAlert />
        </div>
        <div className="absolute right-6 top-6 w-[300px]">
          <OverstayAlert />
        </div>
        <div className="absolute right-6 top-[116px] flex gap-3 rounded-full bg-white/85 px-3 py-1.5 text-[10.5px] text-slate-600">
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[#059669]" /> Inside area</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[#DC2626]" /> Outside area</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-slate-400" /> Stale</span>
        </div>
      </div>
    </VisualStage>
  );
}
