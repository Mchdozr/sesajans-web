import { ImageResponse } from "next/og";
import { getBlogSlugs, getBlogPost } from "@/lib/blog";
import { site } from "@/lib/site";

export const alt = `${site.brand} Blog`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

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
            {`${site.brand} BLOG`}
          </div>
          {post?.category ? (
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
              {post.category}
            </div>
          ) : null}
        </div>

        <div
          style={{
            fontSize: post && post.title.length > 60 ? 54 : 64,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: 1050,
          }}
        >
          {post?.title ?? `${site.brand} Blog`}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 22, color: "#71717a" }}>sesajans.com.tr/blog</div>
          <div style={{ fontSize: 22, color: "#F46F2C", fontWeight: 600 }}>
            Sahne Aydınlatma Rehberleri
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
