import { ProductFrame } from "./ProductFrame";

function Node({
  initials,
  name,
  role,
  reports,
  root = false,
}: {
  initials: string;
  name: string;
  role: string;
  reports: string;
  root?: boolean;
}) {
  return (
    <div
      className={`w-[132px] rounded-xl border bg-white p-2.5 text-center shadow-sm ${
        root ? "border-brand ring-1 ring-brand/30" : "border-line"
      }`}
    >
      <span className="mx-auto grid h-8 w-8 place-items-center rounded-full bg-brand-tint text-[11px] font-semibold text-brand">
        {initials}
      </span>
      <p className="mt-1.5 truncate text-[12px] font-semibold text-ink">{name}</p>
      <p className="truncate text-[10px] text-muted">{role}</p>
      <span className="mt-1 inline-block rounded-md bg-surface-soft px-1.5 py-0.5 text-[9px] font-semibold text-body">
        {reports}
      </span>
    </div>
  );
}

export function OrgVisual() {
  return (
    <ProductFrame title="NeevHR · Org chart · Aikyora Pvt Ltd">
      <div className="flex flex-col items-center py-2">
        <Node initials="MB" name="Meera Batra" role="CEO" reports="6 / 201 reports" root />
        <div className="h-4 w-px bg-slate-300" />
        <div className="relative flex w-full justify-center">
          <div className="absolute top-0 h-px bg-slate-300" style={{ left: "16%", right: "16%" }} />
        </div>
        <div className="flex w-full justify-between gap-2 px-2">
          {[
            { i: "ID", n: "Isha Desai", r: "VP Engineering", c: "5 / 84" },
            { i: "JS", n: "Jay Shukla", r: "VP Sales", c: "4 / 52" },
            { i: "KV", n: "Komal Verma", r: "VP Operations", c: "6 / 63" },
          ].map((x) => (
            <div key={x.i} className="flex flex-col items-center">
              <div className="h-4 w-px bg-slate-300" />
              <Node initials={x.i} name={x.n} role={x.r} reports={`${x.c} reports`} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2 text-center">
        {[
          ["Headcount", "201"],
          ["Org layers", "5"],
          ["Avg span", "4.2"],
        ].map(([l, v]) => (
          <div key={l} className="rounded-lg bg-surface-soft py-2">
            <p className="tnum text-sm font-bold text-ink">{v}</p>
            <p className="text-[10px] text-muted">{l}</p>
          </div>
        ))}
      </div>
    </ProductFrame>
  );
}
