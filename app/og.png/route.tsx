import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

const size = { width: 1200, height: 630 };

// Stable URL (/og.png) for the shared Open Graph / X card image. A file-based
// opengraph-image inside the (frontend) route group gets a hashed path, which
// per-page metadata cannot reference reliably.
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #312e81 0%, #4338ca 55%, #4f46e5 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#4338ca",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            N
          </div>
          <div style={{ fontSize: 40, fontWeight: 700 }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 980,
            }}
          >
            India-first HRMS & Payroll Software
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: "#c7d2fe",
              maxWidth: 940,
            }}
          >
            Employees, attendance, leave, payroll with PF, ESI, PT and TDS,
            recruitment and performance, on one platform.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            color: "#e0e7ff",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              background: "#10b981",
            }}
          />
          HR built on a stronger foundation · www.neevhr.com
        </div>
      </div>
    ),
    { ...size },
  );
}
