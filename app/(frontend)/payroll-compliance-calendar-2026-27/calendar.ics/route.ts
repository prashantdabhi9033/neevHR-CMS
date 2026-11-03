import { calendarIcs } from "@/lib/compliance-calendar";
import { site } from "@/lib/site";

// The calendar page's download: national payroll due dates for FY 2026-27 as an iCalendar file.
export const dynamic = "force-static";

export function GET() {
  return new Response(calendarIcs(`${site.url}/payroll-compliance-calendar-2026-27`), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="neevhr-payroll-compliance-2026-27.ics"',
      "Cache-Control": "public, max-age=86400",
    },
  });
}
