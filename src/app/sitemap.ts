import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { products } from "@/lib/products";
import { categorySlugs } from "@/lib/categories";
import { getAllBlogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/urunler",
    "/blog",
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

  const blogPosts = getAllBlogPosts();

  return [
    ...staticPages.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...categorySlugs.map((slug) => ({
      url: `${site.url}/urunler/kategori/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...products.map((p) => ({
      url: `${site.url}/urunler/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...blogPosts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
  ];
}
