import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostContent } from "@/components/BlogPostContent";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, articleJsonLd } from "@/lib/seo";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image?.trim() ? post.image : undefined,
    keywords: post.keywords,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.description,
          slug: post.slug,
          date: post.date,
          dateModified: post.dateModified,
          image: post.image?.trim() ? post.image : undefined,
        })}
      />
      <BlogPostContent post={post} />
    </>
  );
}
