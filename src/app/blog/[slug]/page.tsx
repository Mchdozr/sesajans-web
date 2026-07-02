import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostContent } from "@/components/BlogPostContent";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, articleJsonLd, faqJsonLd } from "@/lib/seo";
import { countWords, extractBlogFaqs, getBlogPost, getBlogSlugs } from "@/lib/blog";

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

  const faqs = extractBlogFaqs(post.content);
  const jsonLdData = [
    articleJsonLd({
      title: post.title,
      description: post.description,
      slug: post.slug,
      date: post.date,
      dateModified: post.dateModified,
      image: post.image?.trim() ? post.image : undefined,
      wordCount: countWords(post.content),
      articleSection: post.category,
    }),
    ...(faqs.length > 0 ? [faqJsonLd(faqs)] : []),
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />
      <BlogPostContent post={post} />
    </>
  );
}
