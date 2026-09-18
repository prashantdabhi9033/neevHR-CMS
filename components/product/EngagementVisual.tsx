import { ProductFrame, StatTile } from "./ProductFrame";

const series = [22, 28, 26, 34, 38, 42]; // eNPS over months
const months = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];
const W = 300;
const H = 90;
const max = 50;
const stepX = W / (series.length - 1);
const y = (v: number) => H - (v / max) * (H - 10);
let d = `M 0 ${y(series[0])}`;
series.slice(1).forEach((v, i) => (d += ` L ${(i + 1) * stepX} ${y(v)}`));

export function EngagementVisual() {
  return (
    <ProductFrame title="NeevHR · Engagement">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile label="eNPS" value="+42" sub="+4 vs last wave" tone="accent" />
        <StatTile label="Pulse participation" value="87%" />
        <StatTile label="Kudos this month" value="312" />
      </div>

      <div className="mt-4 rounded-xl border border-line p-4">
        <p className="text-sm font-semibold text-ink">eNPS trend</p>
        <svg viewBox={`0 0 ${W} ${H + 16}`} className="mt-2 w-full" role="img" aria-label="eNPS trend">
          <path d={`${d} L ${W} ${H} L 0 ${H} Z`} fill="var(--color-brand)" opacity={0.07} />
          <path d={d} fill="none" stroke="var(--color-brand)" strokeWidth={2.5} strokeLinecap="round" />
          {series.map((v, i) => (
            <circle key={i} cx={i * stepX} cy={y(v)} r={3} fill="var(--color-brand)" />
          ))}
          {months.map((m, i) => (
            <text key={m} x={i * stepX} y={H + 13} textAnchor="middle" fontSize="9" className="fill-muted">{m}</text>
          ))}
        </svg>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-xl border border-line bg-surface-soft px-4 py-2.5">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-accent-tint text-sm">🎉</span>
        <p className="text-xs text-body">
          <span className="font-semibold text-ink">Kudos</span> to Ananya for shipping the payroll release
        </p>
      </div>
    </ProductFrame>
  );
}
