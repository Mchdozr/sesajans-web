import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { products } from "@/lib/products";
import { categorySlugs } from "@/lib/categories";
import { getAllBlogPosts } from "@/lib/blog";
import { useCaseSlugs } from "@/lib/use-cases";
import { projects } from "@/lib/projects";
import { cityLandings } from "@/lib/local-seo";
import { comparisons } from "@/lib/comparisons";
import { glossaryTerms } from "@/lib/glossary";

const STATIC_LAST_MODIFIED = new Date("2026-07-02");

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
    "/karsilastirma",
    "/sozluk",
    "/gizlilik-politikasi",
    "/kvkk-aydinlatma-metni",
    "/cerez-politikasi",
    "/kullanim-kosullari",
    ...cityLandings.map((c) => c.path),
  ];

  const blogPosts = getAllBlogPosts();

  return [
    ...staticPages.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path.includes("sahne-aydinlatma") ? 0.9 : 0.8,
    })),
    ...categorySlugs.map((slug) => ({
      url: `${site.url}/urunler/kategori/${slug}`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...useCaseSlugs.map((slug) => ({
      url: `${site.url}/kullanim-alanlari/${slug}`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),
    ...comparisons.map((c) => ({
      url: `${site.url}${c.path}`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...glossaryTerms.map((t) => ({
      url: `${site.url}/sozluk/${t.slug}`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.78,
    })),
    ...projects.map((p) => ({
      url: `${site.url}/projeler/${p.slug}`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: "yearly" as const,
      priority: 0.78,
    })),
    ...products.map((p) => ({
      url: `${site.url}/urunler/${p.slug}`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...blogPosts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.dateModified ?? post.date),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
  ];
}
