// Payroll compliance calendar, FY 2026-27 (April 2026 to March 2027, with the returns that fall due after
// it). One source for the calendar page and its .ics download, so the two never disagree. National
// dates only; state PT and LWF dates come from lib/states.ts and are described on the page, because
// they vary by state, by employer size and by local body.

export type CalendarEvent = {
  /** ISO date the item is due (YYYY-MM-DD). */
  date: string;
  title: string;
  detail: string;
  kind: "pf" | "esi" | "tds" | "return" | "certificate";
};

export const CALENDAR_REVIEWED = "03 Nov 2026";
export const CALENDAR_REVIEWED_ISO = "2026-11-03";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function iso(y: number, m: number, d: number) {
  return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

/** Wage months of FY 2026-27: April 2026 to March 2027. */
const WAGE_MONTHS: { y: number; m: number }[] = Array.from({ length: 12 }, (_, i) => {
  const m = ((3 + i) % 12) + 1;
  return { y: m >= 4 ? 2026 : 2027, m };
});

function next(y: number, m: number) {
  return m === 12 ? { y: y + 1, m: 1 } : { y, m: m + 1 };
}

export const calendarEvents: CalendarEvent[] = ([
  ...WAGE_MONTHS.flatMap(({ y, m }): CalendarEvent[] => {
    const n = next(y, m);
    const wage = `${MONTHS[m - 1]} ${y}`;
    return [
      {
        date: iso(n.y, n.m, 15),
        title: `PF (ECR) for ${wage} wages`,
        detail: `EPF, EPS, EDLI and admin charges for ${wage} wages, through the ECR on the EPFO unified portal.`,
        kind: "pf" as const,
      },
      {
        date: iso(n.y, n.m, 15),
        title: `ESI for ${wage} wages`,
        detail: `Employee 0.75% and employer 3.25% ESI contribution for ${wage} wages, through the ESIC portal.`,
        kind: "esi" as const,
      },
      {
        date: m === 3 ? iso(n.y, 4, 30) : iso(n.y, n.m, 7),
        title: `TDS on salary deducted in ${wage}`,
        detail:
          m === 3
            ? "Tax deducted in March is due by 30 April, not the 7th."
            : `Deposit the salary TDS deducted in ${wage} by the 7th of the next month.`,
        kind: "tds" as const,
      },
    ];
  }),
  { date: "2026-07-31", title: "Form 138 (earlier 24Q), Q1 April to June 2026", detail: "Quarterly statement of TDS on salary for April to June 2026.", kind: "return" },
  { date: "2026-10-31", title: "Form 138 (earlier 24Q), Q2 July to September 2026", detail: "Quarterly statement of TDS on salary for July to September 2026.", kind: "return" },
  { date: "2027-01-31", title: "Form 138 (earlier 24Q), Q3 October to December 2026", detail: "Quarterly statement of TDS on salary for October to December 2026.", kind: "return" },
  { date: "2027-05-31", title: "Form 138 (earlier 24Q), Q4 January to March 2027", detail: "Quarterly statement of TDS on salary for January to March 2027, with the annual salary detail.", kind: "return" },
  { date: "2027-06-15", title: "Form 130 (earlier Form 16) to employees, Tax Year 2026-27", detail: "Issue the salary TDS certificate for Tax Year 2026-27 to each employee.", kind: "certificate" },
] as CalendarEvent[]).sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : a.kind.localeCompare(b.kind)));

/** "15 May 2026" from "2026-05-15". */
export function displayDate(isoDate: string) {
  const [y, m, d] = isoDate.split("-").map(Number);
  return `${String(d).padStart(2, "0")} ${MONTHS[m - 1].slice(0, 3)} ${y}`;
}

// RFC 5545 text escaping and 75-octet line folding.
function esc(s: string) {
  return s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}
function fold(line: string) {
  const bytes = new TextEncoder().encode(line);
  if (bytes.length <= 75) return line;
  const out: string[] = [];
  let cur = "";
  let curLen = 0;
  for (const ch of line) {
    const l = new TextEncoder().encode(ch).length;
    if (curLen + l > (out.length ? 74 : 75)) {
      out.push(cur);
      cur = "";
      curLen = 0;
    }
    cur += ch;
    curLen += l;
  }
  out.push(cur);
  return out.join("\r\n ");
}

/** The whole calendar as an iCalendar file: all-day events, one per due item. */
export function calendarIcs(pageUrl: string): string {
  const stamp = `${CALENDAR_REVIEWED_ISO.replace(/-/g, "")}T000000Z`;
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//NeevHR//Payroll compliance calendar FY 2026-27//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Payroll compliance FY 2026-27 (NeevHR)",
    "X-WR-TIMEZONE:Asia/Kolkata",
  ];
  calendarEvents.forEach((e, i) => {
    const day = e.date.replace(/-/g, "");
    const [y, m, d] = e.date.split("-").map(Number);
    const end = new Date(Date.UTC(y, m - 1, d + 1)).toISOString().slice(0, 10).replace(/-/g, "");
    lines.push(
      "BEGIN:VEVENT",
      `UID:${day}-${e.kind}-${i}@neevhr.com`,
      `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${day}`,
      `DTEND;VALUE=DATE:${end}`,
      `SUMMARY:${esc(e.title)}`,
      `DESCRIPTION:${esc(`${e.detail} Statutory due date; check the official portal for any extension. ${pageUrl}`)}`,
      "TRANSP:TRANSPARENT",
      "END:VEVENT"
    );
  });
  lines.push("END:VCALENDAR");
  return lines.map(fold).join("\r\n") + "\r\n";
}
