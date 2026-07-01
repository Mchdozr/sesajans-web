import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/urunler",
    "/projeler",
    "/hakkimizda",
    "/iletisim",
    "/sss",
    "/kullanim-alanlari",
    "/gizlilik-politikasi",
    "/kvkk-aydinlatma-metni",
    "/cerez-politikasi",
    "/kullanim-kosullari",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...products.map((p) => ({
      url: `${site.url}/urunler/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
