"use client";

import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/CTABanner";
import { RelatedContent } from "@/components/RelatedContent";
import { useI18n } from "@/lib/i18n/context";
import { getBlogRelatedGroups } from "@/lib/internal-links";
import type { BlogPost } from "@/lib/blog";

export function BlogPostContent({ post }: { post: BlogPost }) {
  const { t } = useI18n();
  const relatedGroups = getBlogRelatedGroups(post.slug);

  return (
    <>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        description={post.description}
        breadcrumb={[
          { name: t.nav.blog, path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <article className="py-12 sm:py-16">
        <Container>
          <div className="blog-content mx-auto max-w-3xl">
            <p className="text-sm text-ink-muted">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("tr-TR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </p>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="mt-8 font-display text-xl font-bold text-ink">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-6 font-display text-lg font-semibold text-ink">{children}</h3>
                ),
                img: ({ src, alt }) => {
                  if (!src || typeof src !== "string") return null;
                  return (
                    <span className="my-6 block overflow-hidden rounded-2xl border border-theme">
                      <Image
                        src={src}
                        alt={alt?.trim() ? alt : post.title}
                        width={1200}
                        height={675}
                        className="h-auto w-full object-cover"
                      />
                    </span>
                  );
                },
                p: ({ children }) => (
                  <p className="mt-4 leading-relaxed text-ink-muted">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-muted">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="mt-4 list-decimal space-y-2 pl-5 text-ink-muted">{children}</ol>
                ),
                li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
                a: ({ href, children }) => (
                  <Link href={href ?? "#"} className="font-medium text-brand hover:underline">
                    {children}
                  </Link>
                ),
                table: ({ children }) => (
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full border-collapse text-sm">{children}</table>
                  </div>
                ),
                th: ({ children }) => (
                  <th className="border border-theme bg-surface-elevated px-3 py-2 text-left font-semibold text-ink">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border border-theme px-3 py-2 text-ink-muted">{children}</td>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
          <div className="mx-auto mt-10 max-w-3xl border-t border-theme pt-6">
            <Link href="/blog" className="text-sm font-semibold text-brand hover:underline">
              ← {t.blogPage.allPosts}
            </Link>
          </div>
        </Container>
      </article>
      <RelatedContent groups={relatedGroups} />
      <CTABanner />
    </>
  );
}
