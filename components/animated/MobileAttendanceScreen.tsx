"use client";

import { useOnScreenSteps } from "@/components/visuals/useOnScreenSteps";
import { Panel, SampleFrame, Stack, Tick } from "./Frame";

// A CSS phone, not a picture: a geofenced punch, then a QR punch at a kiosk, in the app's own words (Punch in, Scan QR to punch).
const captions = [
  { t: "Checking location", b: "The app reads the phone's location for the punch." },
  { t: "Inside the geofence", b: "The boundary your company set for this site." },
  { t: "Punched in", b: "The punch goes straight into the day's attendance." },
  { t: "Scan QR to punch", b: "At a kiosk with a code that changes every 30 seconds, or a printed poster." },
  { t: "QR punch recorded", b: "With the point's name, and its geofence where you set one." },
];

function GeoMap({ inside }: { inside: boolean }) {
  return (
    <div className="relative mx-auto h-[136px] w-full overflow-hidden rounded-xl bg-[#EEF4FF]">
      <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(to right, rgba(21,20,123,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(21,20,123,0.07) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className={`absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed transition-colors duration-500 ${inside ? "border-accent bg-accent/15" : "border-brand-soft bg-brand-soft/10"}`} />
      <div
        className="absolute left-0 top-0 h-3.5 w-3.5 rounded-full bg-brand ring-4 ring-white transition-transform duration-1000 ease-out"
        style={{ transform: inside ? "translate(102px, 60px)" : "translate(24px, 18px)" }}
      />
    </div>
  );
}

export function MobileAttendanceScreen({ className = "" }: { className?: string }) {
  const { ref, step } = useOnScreenSteps<HTMLDivElement>(captions.length, 2100, 3200);
  const inside = step >= 1;
  const punched = step >= 2;
  const qr = step >= 3;
  return (
    <div ref={ref} className={className}>
      <SampleFrame
        title="Punching in from the NeevHR mobile app"
        label="A sample of the mobile attendance screen. The phone checks its location, shows it is inside the geofence, and the employee punches in. Then a QR code at a kiosk is scanned to record a punch."
        note="Sample screen. Geofenced punch and Scan QR are built into the NeevHR mobile app, whose release to Google Play and the App Store is pending."
      >
        <div className="mt-4 grid items-center gap-5 sm:grid-cols-[250px_1fr] sm:gap-7">
          <div className="mx-auto w-[236px] rounded-[34px] bg-ink p-2 shadow-[var(--shadow-float)]">
            <div className="overflow-hidden rounded-[27px] bg-white px-3.5 pb-4 pt-3">
              <div className="mx-auto h-1.5 w-14 rounded-full bg-surface-soft" />
              <p className="mt-3 text-sm font-bold text-ink">Attendance</p>
              <p className="text-[11px] text-muted">Today, 01 Nov 2026 · General shift</p>
              <Stack className="mt-3">
                <Panel on={!qr}>
                  <GeoMap inside={inside} />
                  <p className="mt-2 text-center text-[11px] font-medium text-body">{inside ? "Inside Surat Plant" : "Checking location"}</p>
                </Panel>
                <Panel on={qr}>
                  <div className="relative mx-auto grid h-[136px] w-[136px] place-items-center overflow-hidden rounded-xl bg-ink">
                    <div className="grid grid-cols-5 gap-1 rounded bg-white p-1.5">
                      {[1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1].map((c, i) => (
                        <span key={i} className={`h-3 w-3 ${c ? "bg-ink" : "bg-white"}`} />
                      ))}
                    </div>
                    {step === 3 && <span className="ai-scan absolute inset-x-1 top-0 h-6 bg-gradient-to-b from-transparent to-accent/60" />}
                  </div>
                  <p className="mt-2 text-center text-[11px] font-medium text-body">{step === 4 ? "Gate 2 kiosk" : "Point the camera at the code"}</p>
                </Panel>
              </Stack>
              <div className={`mt-3 rounded-xl py-2.5 text-center text-sm font-semibold text-white transition-colors duration-300 ${step === 2 || step === 4 ? "bg-success-dark" : "bg-brand"}`}>
                {step === 4 ? "Recorded 09:34" : qr ? "Scan QR to punch" : punched ? "Punched in 09:32" : "Punch in"}
              </div>
              <div className="mt-3 grid grid-cols-3 gap-1.5 text-center">
                {[["18", "Present"], ["1", "Leave"], ["0", "LOP"]].map(([v, k]) => (
                  <div key={k} className="rounded-lg bg-surface-soft py-1.5">
                    <p className="tnum text-sm font-bold text-ink">{v}</p>
                    <p className="text-[10px] text-muted">{k}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ol className="space-y-2">
            {captions.map((c, i) => (
              <li key={c.t} className={`flex items-start gap-2.5 rounded-xl px-3 py-2 ring-1 transition-colors duration-300 ${i === step ? "bg-brand-tint ring-brand/25" : "ring-transparent"}`}>
                <Tick on={i <= step} />
                <span className="min-w-0">
                  <span className="block text-[13px] font-semibold text-ink">{c.t}</span>
                  <span className="block text-xs leading-relaxed text-muted">{c.b}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </SampleFrame>
    </div>
  );
}
