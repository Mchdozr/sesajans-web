import type { Metadata } from "next";
import { BlogListContent } from "@/components/BlogListContent";
import { buildMetadata } from "@/lib/seo";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  title: "Aydınlatma Rehberleri ve Blog",
  description:
    "Sahne aydınlatma seçimi, IP koruma, DMX kurulumu ve ürün karşılaştırmaları hakkında uzman blog yazıları.",
  path: "/blog",
  keywords: ["sahne aydınlatma blog", "moving head rehber", "dmx kurulum"],
});

export default function BlogPage() {
  const posts = getAllBlogPosts();
  return <BlogListContent posts={posts} />;
}
