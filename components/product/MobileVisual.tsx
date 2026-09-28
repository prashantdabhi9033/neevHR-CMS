import { Icon } from "@/components/ui/Icon";
import { AppWindow, ShowcaseStage, Soft, type Floater } from "@/components/showcase/Showcase";
import { Actions, FloatCard, Tag, Toast } from "@/components/showcase/parts";

// Employee self-service app, in the site's layered format: the phone is the focal screen, the same data
// on the web app sits blurred behind it, and the moments employees use most are lifted out as cards.
// Illustrative data; the app itself is an upcoming release (the page says so).
const tiles = [
  { label: "Attendance", value: "In · 09:32" },
  { label: "Leave", value: "10 left" },
  { label: "Payslip", value: "Sep 2026" },
  { label: "Approvals", value: "3 pending" },
];

const floaters: Floater[] = [
  {
    width: 250,
    pos: { left: 0, top: 150 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Apply leave" title="Casual leave · 2 days" meta="09-10 Oct 2026 · 10 of 12 left" tag={<Tag tone="brand">CL</Tag>}>
        <p className="rounded-lg bg-slate-50 px-3 py-2 text-[11.5px] text-slate-600 ring-1 ring-slate-100">Family function in Nashik</p>
        <Actions primary="Submit" tone="brand" />
      </FloatCard>
    ),
  },
  {
    width: 260,
    pos: { right: 0, top: 70 },
    look: "glass",
    node: <Toast tone="brand" glyph="₹" title="Sep 2026 payslip ready" sub="Net pay ₹78,940 · tap to view" />,
  },
  {
    width: 240,
    pos: { right: 10, bottom: 90 },
    node: <Toast title="Leave approved" sub="Rohan Nair · 24-25 Sep 2026" />,
  },
];

function Phone() {
  return (
    <div className="w-[270px] rounded-[2.4rem] border-[7px] border-[#1c1c22] bg-[#1c1c22] p-1.5 shadow-[0_60px_100px_-30px_rgba(12,11,74,0.6),inset_0_1px_0_rgba(255,255,255,0.15)]">
      <div className="overflow-hidden rounded-[1.9rem] bg-slate-50">
        <div className="bg-gradient-to-br from-[#0C0B4A] via-[#15147B] to-[#5B45E8] px-4 pb-5 pt-6 text-white">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-white/75">Good morning</span>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20 text-[10px] font-semibold">RS</span>
          </div>
          <p className="mt-1 text-[17px] font-bold">Rupal Sharma</p>
          <span className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-[13px] font-semibold text-[#15147B]">
            <span className="h-2 w-2 rounded-full bg-success" />
            Punch out
          </span>
          <p className="mt-2 text-center text-[10px] text-white/70">Punched in at 09:32 · 6h 14m today</p>
        </div>
        <div className="grid grid-cols-2 gap-2.5 p-3">
          {tiles.map((t) => (
            <div key={t.label} className="rounded-xl border border-slate-200 bg-white p-3">
              <p className="text-[10.5px] text-slate-500">{t.label}</p>
              <p className="tnum mt-0.5 text-[13px] font-semibold text-ink">{t.value}</p>
            </div>
          ))}
        </div>
        <div className="px-3 pb-3">
          <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3">
            <div>
              <p className="text-[10.5px] text-slate-500">Latest payslip</p>
              <p className="tnum text-[13px] font-semibold text-ink">₹78,940</p>
            </div>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-success-tint text-success-dark">
              <Icon name="arrow" className="h-4 w-4" />
            </span>
          </div>
        </div>
        <div className="flex justify-around border-t border-slate-200 bg-white py-2.5">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`h-1.5 w-6 rounded-full ${i === 0 ? "bg-[#5B45E8]" : "bg-slate-200"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function MobileVisual() {
  return (
    <ShowcaseStage
      width={720}
      estHeight={700}
      bleed={{ top: 30, right: 30, bottom: 40, left: 30 }}
      floaters={floaters}
      label="The NeevHR employee app: punch in and out, leave balance, payslip and approvals."
    >
      <div className="relative h-[590px]">
        {/* the same data on the web app, set back in soft focus */}
        <Soft strong className="absolute left-0 right-0 top-10">
          <AppWindow module="My space" heading="Good morning, Rupal" sub="Monday, 28 Sep 2026">
            <div className="grid grid-cols-3 gap-3">
              {["Attendance", "Leave balance", "Payslips", "Holidays", "Approvals", "Documents"].map((t) => (
                <div key={t} className="h-[88px] rounded-xl border border-slate-200 bg-white p-3">
                  <p className="text-[12px] font-medium text-slate-600">{t}</p>
                  <div className="mt-3 h-2 w-2/3 rounded bg-slate-100" />
                  <div className="mt-2 h-2 w-1/2 rounded bg-slate-100" />
                </div>
              ))}
            </div>
            <div className="mt-3 h-[150px] rounded-xl border border-slate-200 bg-white" />
          </AppWindow>
        </Soft>
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <Phone />
        </div>
      </div>
    </ShowcaseStage>
  );
}
