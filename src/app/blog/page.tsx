import type { Metadata } from "next";
import { BlogListContent } from "@/components/BlogListContent";
import { buildMetadata } from "@/lib/seo";
import { getAllBlogPosts } from "@/lib/blog";

const POSTS_PER_PAGE = 6;

export const metadata: Metadata = buildMetadata({
  title: "Aydınlatma Rehberleri ve Blog",
  description:
    "Sahne aydınlatma seçimi, IP koruma, DMX kurulumu ve ürün karşılaştırmaları hakkında uzman blog yazıları.",
  path: "/blog",
  keywords: ["sahne aydınlatma blog", "moving head rehber", "dmx kurulum"],
});

type BlogPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page: pageParam } = await searchParams;
  const posts = getAllBlogPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const parsed = Number.parseInt(pageParam ?? "1", 10);
  const currentPage = Number.isFinite(parsed)
    ? Math.min(Math.max(parsed, 1), totalPages)
    : 1;
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(start, start + POSTS_PER_PAGE);

  return (
    <BlogListContent
      posts={paginatedPosts}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
