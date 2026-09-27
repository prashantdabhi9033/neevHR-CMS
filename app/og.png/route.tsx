import { ImageResponse } from "next/og";
import { BRAND, WORDMARK_RATIO, svgDataUri, wordmarkSvg } from "@/lib/brand";

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
            `linear-gradient(135deg, ${BRAND.night} 0%, ${BRAND.blue} 55%, ${BRAND.pebble} 100%)`,
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={svgDataUri(wordmarkSvg("#FFFFFF"))}
            height={64}
            width={Math.round(64 * WORDMARK_RATIO)}
            alt="NeevHR"
          />
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
              color: BRAND.mist,
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
            color: "#E7E6F8",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              background: BRAND.orange,
            }}
          />
          HR built on a stronger foundation · www.neevhr.com
        </div>
      </div>
    ),
    { ...size },
  );
}
