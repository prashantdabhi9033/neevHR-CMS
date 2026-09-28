import { ProductFrame, StatTile } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Rows, Steps, Tag, Toast } from "@/components/showcase/parts";

// Mirrors the product's statutory compliance register: obligations with due dates, statute tags and
// filing status, beside the filing calendar. Scene date: 09 Oct 2026.
// Lifted pieces: the Q2 24Q return in review, the paid TDS challan and the ready PF ECR file.
const statuteTone: Record<string, string> = {
  PF: "bg-blue-100 text-blue-700",
  ESI: "bg-slate-200 text-slate-700",
  PT: "bg-purple-100 text-purple-700",
  LWF: "bg-cyan-100 text-cyan-700",
  TDS: "bg-indigo-100 text-indigo-700",
};

const rows = [
  { due: "07 Oct 2026", st: "TDS", ob: "Challan · Sep 2026", amt: "9,84,200", status: "Paid", tone: "text-success-dark" },
  { due: "15 Oct 2026", st: "PF", ob: "ECR · Sep 2026", amt: "12,46,900", status: "Due", tone: "text-amber-600" },
  { due: "15 Oct 2026", st: "ESI", ob: "Contribution · Sep 2026", amt: "21,600", status: "Due", tone: "text-amber-600" },
  { due: "20 Oct 2026", st: "PT", ob: "Challan · Karnataka", amt: "40,000", status: "Upcoming", tone: "text-muted" },
  { due: "31 Oct 2026", st: "TDS", ob: "24Q return · Q2", amt: "29,12,600", status: "In review", tone: "text-brand" },
  { due: "15 Sep 2026", st: "PF", ob: "ECR · Aug 2026", amt: "12,11,700", status: "Filed", tone: "text-success-dark" },
];

// October 2026 starts on a Thursday (Mon-first grid: 3 leading blanks).
const marks: Record<number, string> = { 7: "bg-success", 15: "bg-amber-400", 20: "bg-slate-300", 31: "bg-brand" };
const cal: number[] = [0, 0, 0, ...Array.from({ length: 31 }, (_, i) => i + 1)];

const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 96 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Quarterly TDS return" title="24Q · Q2 FY 2026-27" meta="Jul-Sep 2026 · due 31 Oct 2026" tag={<Tag tone="brand">Review</Tag>}>
        <Steps steps={["Draft", "Prepare", "Review", "Filed"]} at={2} />
        <div className="mt-3.5">
          <Rows
            rows={[["Jul 2026 challan", "₹9,57,000"], ["Aug 2026 challan", "₹9,71,400"], ["Sep 2026 challan", "₹9,84,200"]]}
            total={["Tax deposited", "₹29,12,600"]}
          />
        </div>
        <Actions primary="Generate return file" secondary="Mark filed" tone="brand" />
      </FloatCard>
    ),
  },
  {
    width: 280,
    pos: { left: 0, bottom: 22 },
    look: "glass",
    node: <Toast title="TDS challan paid · Sep 2026" sub="₹9,84,200 · BSR code and challan no. recorded" />,
  },
  {
    width: 260,
    pos: { left: 260, top: 0 },
    node: <Chip badge="ECR" tone="info" title="PF ECR file ready" sub="Sep 2026 · due 15 Oct 2026" />,
  },
];

export function ComplianceVisual() {
  return (
    <ProductFrame
      title="NeevHR · Compliance · FY 2026-27"
      floaters={floaters}
      actions={<><WinButton>Filing calendar</WinButton><WinButton primary>New return</WinButton></>}
    >
      <Soft className="grid grid-cols-3 gap-4">
        <StatTile label="Due by 15 Oct 2026" value="₹12.7 L" sub="PF ECR · ESI" />
        <StatTile label="Filed on time" value="27" sub="Apr-Sep 2026" tone="accent" />
        <StatTile label="Form 16 · FY 2025-26" value="188" sub="Part A + B issued" />
      </Soft>

      <div className="mt-4 grid grid-cols-[1fr_224px] gap-4">
        <div className="overflow-hidden rounded-xl border border-line bg-white">
          <table className="w-full text-left text-[12px]">
            <thead>
              <tr className="bg-surface-soft text-[10px] uppercase text-muted">
                <th className="px-2 py-2 font-semibold">Due</th>
                <th className="px-2 py-2 font-semibold">Obligation</th>
                <th className="px-2 py-2 text-right font-semibold">Amount</th>
                <th className="px-2 py-2 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={`border-t border-line ${i === rows.length - 1 ? "opacity-60" : ""}`}>
                  <td className="tnum whitespace-nowrap px-2 py-2 text-ink">{r.due}</td>
                  <td className="px-2 py-2 text-body">
                    <span className={`mr-1.5 rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${statuteTone[r.st]}`}>{r.st}</span>
                    {r.ob}
                  </td>
                  <td className="tnum whitespace-nowrap px-2 py-2 text-right text-ink">₹{r.amt}</td>
                  <td className={`px-2 py-2 text-[11px] font-semibold ${r.tone}`}>{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Soft strong className="rounded-xl border border-line bg-white p-3">
          <p className="text-xs font-semibold text-ink">October 2026</p>
          <div className="mt-2 grid grid-cols-7 gap-1 text-center text-[9px] text-muted">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span key={i} className="font-semibold">{d}</span>
            ))}
            {cal.map((d, i) => (
              <span key={i} className="tnum relative py-1 text-[10px] text-body">
                {d || ""}
                {marks[d] && <span className={`absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full ${marks[d]}`} />}
              </span>
            ))}
          </div>
          <div className="mt-2 space-y-1 text-[10px] text-muted">
            <p>● 1 paid · 2 due · 1 upcoming</p>
            <p>● 24Q Q2 in review</p>
          </div>
        </Soft>
      </div>
    </ProductFrame>
  );
}
