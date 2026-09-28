import { ProductFrame } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Rows, Steps, Tag, Toast } from "@/components/showcase/parts";

// Designed holiday master for FY 2026-27: national days plus location-specific ones, typed the Indian way.
// Lifted pieces: an atomic CSV import at its dry-run step, the calendar change reaching attendance and
// leave, and a location scheme mapped to its employees.
const typeTone: Record<string, string> = {
  Public: "bg-red-100 text-red-700",
  Optional: "bg-amber-100 text-amber-700",
  Restricted: "bg-blue-100 text-blue-700",
};
const rows = [
  ["02 Oct 2026", "Fri", "Gandhi Jayanti", "Public", "All"],
  ["20 Oct 2026", "Tue", "Dussehra", "Public", "All"],
  ["24 Nov 2026", "Tue", "Guru Nanak Jayanti", "Restricted", "All"],
  ["25 Dec 2026", "Fri", "Christmas", "Public", "All"],
  ["01 Jan 2027", "Fri", "New Year's Day", "Optional", "Bengaluru"],
  ["14 Jan 2027", "Thu", "Uttarayan", "Public", "Ahmedabad"],
  ["26 Jan 2027", "Tue", "Republic Day", "Public", "All"],
];
const locations = ["All locations", "Ahmedabad", "Bengaluru", "Pune"];

// Lifted pieces: the import dry run, the downstream sync, the Bengaluru scheme.
const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 100 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Import · dry run" title="holidays-FY2026-27.csv" meta="All rows validated · nothing saved yet" tag={<Tag tone="info">Preview</Tag>}>
        <Steps steps={["Upload", "Dry run", "Import"]} at={1} />
        <div className="mt-3.5">
          <Rows rows={[["New holidays", "14"], ["Updated", "4"], ["Errors", "0"]]} total={["Ready to import", "18 rows"]} />
        </div>
        <p className="mt-2.5 text-[11.5px] text-slate-500">All or nothing: one bad row and no row is saved.</p>
        <Actions primary="Import 18 rows" secondary="Cancel" tone="brand" />
      </FloatCard>
    ),
  },
  {
    width: 290,
    pos: { left: 0, bottom: 20 },
    look: "glass",
    node: <Toast title="Attendance & leave updated" sub="Gandhi Jayanti · 201 employees" />,
  },
  {
    width: 270,
    pos: { left: 262, top: 0 },
    node: <Chip badge="BLR" title="Bengaluru scheme" sub="64 employees · national + local" />,
  },
];

export function HolidaysVisual() {
  return (
    <ProductFrame
      title="NeevHR · Holiday calendar · FY 2026-27"
      floaters={floaters}
      actions={<><WinButton>Import</WinButton><WinButton primary>Add holiday</WinButton></>}
    >
      <Soft className="mb-3 flex gap-2">
        {locations.map((l, i) => (
          <span
            key={l}
            className={`rounded-lg px-3 py-1.5 text-[12px] font-medium ${
              i === 0 ? "bg-brand text-white" : "border border-line bg-white text-body"
            }`}
          >
            {l}
          </span>
        ))}
      </Soft>

      <div className="overflow-hidden rounded-xl border border-line bg-white">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="bg-surface-soft text-[10px] uppercase text-muted">
              <th className="px-3 py-2 font-semibold">Date</th>
              <th className="px-3 py-2 font-semibold">Day</th>
              <th className="px-3 py-2 font-semibold">Holiday</th>
              <th className="px-3 py-2 font-semibold">Type</th>
              <th className="px-3 py-2 font-semibold">Location</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[2]} className="border-t border-line">
                <td className="tnum whitespace-nowrap px-3 py-2.5 font-semibold text-ink">{r[0]}</td>
                <td className="px-3 py-2.5 text-muted">{r[1]}</td>
                <td className="px-3 py-2.5 text-body">{r[2]}</td>
                <td className="px-3 py-2.5">
                  <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${typeTone[r[3]]}`}>{r[3]}</span>
                </td>
                <td className="px-3 py-2.5">
                  <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-medium ${r[4] === "All" ? "bg-purple-100 text-purple-700" : "bg-surface-soft text-body"}`}>
                    {r[4]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Soft className="mt-3 flex flex-wrap gap-3 text-[11px] text-body">
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-red-400" /> Public</span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-amber-400" /> Optional</span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-blue-400" /> Restricted (RH)</span>
      </Soft>
    </ProductFrame>
  );
}
