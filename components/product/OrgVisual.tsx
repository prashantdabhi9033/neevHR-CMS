import { ProductFrame } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Rows, Tag, Toast } from "@/components/showcase/parts";

// The reporting tree (CEO, VPs, their managers) with one manager mid-drag. Lifted pieces: the
// drag-to-reassign confirmation, an as-of-date rebuild of the org and open seats from the plan.
// Reports read "direct / total"; the three VP subtrees plus the VPs make up the CEO's 200.

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
      className={`w-[124px] rounded-xl border bg-white p-2.5 text-center shadow-sm ${
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

const vps = [
  {
    i: "ID", n: "Isha Desai", r: "VP Engineering", c: "5 / 84",
    team: [["Tanvi Joshi", "Eng Manager"], ["Nikhil Rao", "Pre-sales lead"]], more: 3,
  },
  {
    i: "JS", n: "Jay Shukla", r: "VP Sales", c: "4 / 52",
    team: [["Priya Iyer", "Regional Sales"], ["Varun Sethi", "Inside Sales"]], more: 2,
  },
  {
    i: "KV", n: "Komal Verma", r: "VP Operations", c: "6 / 61",
    team: [["Deepa Menon", "Plant Ops"], ["Harsh Vora", "Supply chain"]], more: 4,
  },
];

const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 84 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Drag to reassign" title="Move Nikhil Rao to Jay Shukla" meta="Pre-sales lead · 3 direct reports move with him" tag={<Tag tone="warning">Unsaved</Tag>}>
        <Rows
          rows={[
            ["From", "Isha Desai · VP Engineering"],
            ["To", "Jay Shukla · VP Sales"],
            ["Span after move", "Isha 4 · Jay 5"],
            ["Effective", "01 Oct 2026"],
          ]}
        />
        <Actions primary="Confirm move" secondary="Cancel" tone="brand" />
      </FloatCard>
    ),
  },
  {
    width: 285,
    pos: { left: 0, bottom: 22 },
    look: "glass",
    node: <Toast tone="info" glyph="↺" title="Org rebuilt as of 31 Mar 2026" sub="From reporting-line history · 194 people" />,
  },
  {
    width: 270,
    pos: { left: 250, top: 0 },
    node: <Chip badge="+26" title="Open seats from plan" sub="Engineering 13 · Operations 7 · Sales 6" />,
  },
];

export function OrgVisual() {
  return (
    <ProductFrame
      title="NeevHR · Org chart · Aikyora Pvt Ltd"
      floaters={floaters}
      actions={<><WinButton>As of date</WinButton><WinButton primary>Export</WinButton></>}
    >
      <div className="grid grid-cols-[410px_1fr] gap-6">
        <div className="flex flex-col items-center py-1">
          <Node initials="MB" name="Meera Batra" role="CEO" reports="3 / 200 reports" root />
          <div className="h-4 w-px bg-slate-300" />
          <div className="relative flex w-full justify-center">
            <div className="absolute top-0 h-px bg-slate-300" style={{ left: "16%", right: "16%" }} />
          </div>
          <div className="flex w-full justify-between">
            {vps.map((x) => (
              <div key={x.i} className="flex flex-col items-center">
                <div className="h-4 w-px bg-slate-300" />
                <Node initials={x.i} name={x.n} role={x.r} reports={`${x.c} reports`} />
                <div className="h-3 w-px bg-slate-300" />
                <div className="w-[124px] space-y-1.5">
                  {x.team.map(([name, role]) => {
                    const moving = name === "Nikhil Rao";
                    return (
                      <div
                        key={name}
                        className={`rounded-lg px-2 py-1.5 ${
                          moving
                            ? "border border-dashed border-brand-soft bg-brand-tint shadow-md"
                            : "border border-line bg-white"
                        }`}
                      >
                        <p className="truncate text-[11px] font-semibold text-ink">{name}</p>
                        <p className="truncate text-[9.5px] text-muted">{role}</p>
                      </div>
                    );
                  })}
                  <p className="text-center text-[10px] font-medium text-muted">+{x.more} more</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Soft strong className="rounded-xl border border-line bg-white p-4">
          <p className="text-sm font-semibold text-ink">View</p>
          <div className="mt-2 space-y-1.5 text-[11px]">
            {[
              ["Entity", "Aikyora Pvt Ltd"],
              ["Mode", "Consolidated"],
              ["As of", "28 Sep 2026"],
              ["Dotted lines", "Shown"],
            ].map(([k, v]) => (
              <p key={k} className="flex justify-between gap-2">
                <span className="text-muted">{k}</span>
                <span className="font-medium text-ink">{v}</span>
              </p>
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold text-ink">Widest spans</p>
          <div className="mt-2 space-y-1.5 text-[11px]">
            {[
              ["Komal Verma", "6"],
              ["Isha Desai", "5"],
              ["Jay Shukla", "4"],
            ].map(([k, v]) => (
              <p key={k} className="flex justify-between gap-2">
                <span className="text-body">{k}</span>
                <span className="tnum font-semibold text-ink">{v}</span>
              </p>
            ))}
          </div>
        </Soft>
      </div>

      <Soft className="mt-4 grid grid-cols-3 gap-2 text-center">
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
      </Soft>
    </ProductFrame>
  );
}
