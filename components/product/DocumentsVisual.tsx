import type { ReactNode } from "react";
import { ProductFrame } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Tag, Toast } from "@/components/showcase/parts";
import { Icon } from "@/components/ui/Icon";

// The document vault with verification status and expiry tracking. Lifted pieces: a server-side
// mail-merge run of increment letters, a tamper-proof check on an issued letter and policy
// acknowledgement. Vault totals: 1,846 = 1,792 verified + 54 pending; 14 expiring in 90 days.
const catTone: Record<string, string> = {
  KYC: "bg-blue-100 text-blue-700",
  Contract: "bg-purple-100 text-purple-700",
  Letter: "bg-indigo-100 text-indigo-700",
  "Form 16": "bg-emerald-100 text-emerald-700",
  Certificate: "bg-slate-200 text-slate-600",
};
const rows = [
  { doc: "PAN card", cat: "KYC", who: "Ishita Gandhi", verified: true },
  { doc: "Appointment letter", cat: "Letter", who: "Rohan Nair", verified: true },
  { doc: "Contract (FTC)", cat: "Contract", who: "Neel Mishra", verified: false },
  { doc: "Form 16 · FY 2025-26", cat: "Form 16", who: "Kavya Mehta", verified: true },
  { doc: "Degree certificate", cat: "Certificate", who: "Aman Bhatt", verified: false },
];
const expiring = [
  ["Contract (FTC)", "Neel Mishra", "30 Nov 2026"],
  ["Driving licence", "Suresh Yadav", "14 Dec 2026"],
  ["First-aid certificate", "Pooja Singh", "09 Jan 2027"],
];

function Token({ children }: { children: ReactNode }) {
  return <span className="rounded bg-[#EEEAFE] px-1 font-semibold text-[#4A34D1]">{children}</span>;
}

const floaters: Floater[] = [
  {
    width: 330,
    pos: { right: 0, top: 80 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Letter generation" title="Increment letters · Oct 2026" meta="Mail-merge · 38 employees · template v4" tag={<Tag tone="brand">Ready</Tag>}>
        <div className="rounded-xl bg-slate-50/80 p-3 text-[11.5px] leading-relaxed text-slate-600 ring-1 ring-slate-100">
          Dear <Token>Kavya</Token>, your annual CTC is revised to <Token>₹26,40,000</Token> with effect from{" "}
          <Token>01 Oct 2026</Token>.
        </div>
        <p className="mt-2 text-[11px] text-slate-500">Each letter is filed to the employee&apos;s vault and sealed against edits.</p>
        <Actions primary="Generate 38 letters" secondary="Preview" tone="brand" />
      </FloatCard>
    ),
  },
  {
    width: 285,
    pos: { left: 0, bottom: 22 },
    look: "glass",
    node: <Toast title="Letter verified as original" sub="Appointment letter · Rohan Nair · unaltered" />,
  },
  {
    width: 260,
    pos: { left: 260, top: 0 },
    node: <Chip badge="92%" tone="success" title="POSH policy 2026" sub="185 of 201 acknowledged" />,
  },
];

export function DocumentsVisual() {
  return (
    <ProductFrame
      title="NeevHR · Documents · Vault"
      floaters={floaters}
      actions={<><WinButton>Upload</WinButton><WinButton primary>Generate letters</WinButton></>}
    >
      <div className="grid grid-cols-[410px_1fr] gap-6">
        <div className="overflow-hidden rounded-xl border border-line bg-white">
          <table className="w-full text-left text-[12.5px]">
            <thead>
              <tr className="bg-surface-soft text-[10px] uppercase text-muted">
                <th className="px-3 py-2 font-semibold">Document</th>
                <th className="px-3 py-2 font-semibold">Employee</th>
                <th className="px-3 py-2" />
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.doc} className="border-t border-line">
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      <span className="grid h-5 w-4 shrink-0 place-items-center rounded-sm bg-red-100 text-[8px] font-bold text-red-600">
                        PDF
                      </span>
                      <div className="min-w-0">
                        <p className="truncate font-medium text-ink">{r.doc}</p>
                        <span className={`rounded px-1 py-px text-[9.5px] font-semibold ${catTone[r.cat]}`}>{r.cat}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-body">{r.who}</td>
                  <td className="px-3 py-2 text-right">
                    {r.verified ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-success-dark">
                        <Icon name="check" className="h-3.5 w-3.5" /> Verified
                      </span>
                    ) : (
                      <span className="text-[11px] text-muted">Pending</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Soft strong className="rounded-xl border border-line bg-white p-4">
          <p className="text-sm font-semibold text-ink">Expiring in 90 days</p>
          <ul className="mt-3 space-y-2.5">
            {expiring.map(([doc, who, date]) => (
              <li key={doc} className="text-[11px]">
                <p className="font-medium text-ink">{doc}</p>
                <p className="flex justify-between gap-2 text-muted">
                  <span className="truncate">{who}</span>
                  <span className="tnum text-amber-600">{date}</span>
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[10px] font-medium text-muted">+11 more</p>
        </Soft>
      </div>

      <Soft className="mt-4 grid grid-cols-4 gap-2 text-center">
        {[
          ["1,846", "Documents"],
          ["1,792", "Verified"],
          ["54", "Pending"],
          ["14", "Expiring"],
        ].map(([v, l]) => (
          <div key={l} className="rounded-lg bg-surface-soft py-2">
            <p className="tnum text-sm font-bold text-ink">{v}</p>
            <p className="text-[10px] text-muted">{l}</p>
          </div>
        ))}
      </Soft>
    </ProductFrame>
  );
}
