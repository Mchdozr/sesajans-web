import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.brand} — ${site.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(135deg, #111118 0%, #1a1a24 50%, #2a1810 100%)",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#F46F2C",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          {site.brand}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 52,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          {site.slogan}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            color: "#a1a1aa",
            maxWidth: 800,
            lineHeight: 1.5,
          }}
        >
          Moving head, blinder, strobe ve LED bar — profesyonel sahne aydınlatma
        </div>
      </div>
    ),
    { ...size },
  );
}
