import { ImageResponse } from "next/og";
import { products, getProduct } from "@/lib/products";
import { site } from "@/lib/site";

export const alt = `${site.brand} — Ürün`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

const categoryLabels: Record<string, string> = {
  "moving-head-beam": "Moving Head Beam",
  "moving-head-wash": "Moving Head Wash",
  "blinder-strobe": "Blinder & Strobe",
  "led-bar": "LED Bar",
};

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #111118 0%, #1a1a24 55%, #2a1810 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
              fontSize: 20,
              fontWeight: 600,
              color: "#F46F2C",
              border: "1px solid rgba(244,111,44,0.5)",
              borderRadius: 999,
              padding: "8px 24px",
              background: "rgba(244,111,44,0.1)",
            }}
          >
            {categoryLabels[product?.category ?? ""] ?? "Ürün"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              maxWidth: 1000,
            }}
          >
            {product?.name ?? site.brand}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 30,
              color: "#a1a1aa",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            {product?.tagline ?? site.slogan}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 22, color: "#71717a" }}>sesajans.com.tr/urunler</div>
          <div style={{ fontSize: 22, color: "#F46F2C", fontWeight: 600 }}>
            Profesyonel Sahne Aydınlatma
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
