"use client";

import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";
import { RelatedContent } from "@/components/RelatedContent";
import { seoHubLinks } from "@/lib/internal-links";
import { useI18n } from "@/lib/i18n/context";
import type { BlogPost } from "@/lib/blog";

export function BlogListContent({ posts }: { posts: BlogPost[] }) {
  const { t } = useI18n();

  return (
    <>
      <PageHeader
        eyebrow={t.blogPage.eyebrow}
        title={t.blogPage.title}
        description={t.blogPage.description}
        breadcrumb={[{ name: t.nav.blog, path: "/blog" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <article className="glow-border flex h-full flex-col overflow-hidden rounded-2xl border border-theme bg-surface-elevated/80">
                  {post.image && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width:768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                      {post.category}
                    </p>
                    <h2 className="mt-2 font-display text-lg font-bold text-ink">
                      <Link href={`/blog/${post.slug}`} className="hover:text-brand">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-3">
                      {post.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-ink-muted">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("tr-TR")}
                      </time>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="font-semibold text-brand hover:underline"
                      >
                        {t.blogPage.readMore} →
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <RelatedContent groups={seoHubLinks} title="SEO rehber merkezleri" />
      <CTABanner />
    </>
  );
}
