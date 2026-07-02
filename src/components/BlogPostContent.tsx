"use client";

import { useCallback, useMemo, useState } from "react";
import { ZoomIn } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeUnwrapImages from "rehype-unwrap-images";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/CTABanner";
import { RelatedContent } from "@/components/RelatedContent";
import { ImageLightbox } from "@/components/ImageLightbox";
import { useI18n } from "@/lib/i18n/context";
import { getBlogRelatedGroups } from "@/lib/internal-links";
import type { BlogPost } from "@/lib/blog";
import type { Element } from "hast";

function resolveImageSrc(src: unknown, node?: Element): string | null {
  if (typeof src === "string") {
    const trimmed = src.trim();
    if (trimmed) return trimmed;
  }
  const prop = node?.properties?.src;
  if (typeof prop === "string") {
    const trimmed = prop.trim();
    if (trimmed) return trimmed;
  }
  return null;
}

function extractBlogImages(content: string): string[] {
  const urls: string[] = [];
  const regex = /!\[[^\]]*\]\(([^)]+)\)/g;
  let match = regex.exec(content);
  while (match) {
    const url = match[1]?.trim();
    if (url) urls.push(url);
    match = regex.exec(content);
  }
  return urls;
}

function BlogImage({
  src,
  alt,
  title,
  onZoom,
  zoomLabel,
}: {
  src: string;
  alt?: string;
  title: string;
  onZoom: () => void;
  zoomLabel: string;
}) {
  const caption = alt?.trim();

  return (
    <span className="my-6 block">
      <button
        type="button"
        onClick={onZoom}
        className="group relative mx-auto block max-w-xl cursor-zoom-in overflow-hidden rounded-xl border border-theme bg-surface-elevated/50 p-2 transition-colors hover:border-brand/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        aria-label={zoomLabel}
      >
        <Image
          src={src}
          alt={caption || title}
          width={800}
          height={500}
          sizes="(max-width: 768px) 100vw, 672px"
          className="pointer-events-none mx-auto h-auto max-h-56 w-full object-contain sm:max-h-64 md:max-h-72 md:transition-transform md:duration-200 md:group-hover:scale-[1.02]"
        />
        <span className="pointer-events-none absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg bg-black/50 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 md:opacity-80">
          <ZoomIn className="h-4 w-4" />
        </span>
      </button>
      {caption ? (
        <span className="mt-2 block text-center text-xs text-ink-muted">{caption}</span>
      ) : null}
    </span>
  );
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  const { t } = useI18n();
  const relatedGroups = getBlogRelatedGroups(post.slug);
  const images = useMemo(() => extractBlogImages(post.content), [post.content]);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const lightboxIndex = lightboxSrc ? images.indexOf(lightboxSrc) : null;

  const openLightbox = useCallback((src: string) => {
    if (!images.includes(src)) return;
    setLightboxSrc(src);
  }, [images]);

  const markdownComponents = useMemo((): Components => {
    return {
      h2: ({ children }) => (
        <h2 className="mt-8 font-display text-xl font-bold text-ink">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="mt-6 font-display text-lg font-semibold text-ink">{children}</h3>
      ),
      figure: ({ children }) => <div className="my-6">{children}</div>,
      img: ({ src, alt, node }) => {
        const resolved = resolveImageSrc(src, node);
        if (!resolved) return null;
        return (
          <BlogImage
            src={resolved}
            alt={alt}
            title={post.title}
            zoomLabel={t.common.zoomImage}
            onZoom={() => openLightbox(resolved)}
          />
        );
      },
      p: ({ children }) => <p className="mt-4 leading-relaxed text-ink-muted">{children}</p>,
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
    };
  }, [openLightbox, post.title, t.common.zoomImage]);

  return (
    <>
      {images.length > 0 ? (
        <ImageLightbox
          images={images}
          index={lightboxIndex}
          alt={post.title}
          closeLabel={t.common.close}
          onClose={() => setLightboxSrc(null)}
          onIndexChange={(index) => setLightboxSrc(images[index] ?? null)}
        />
      ) : null}
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
              <time dateTime={post.date} suppressHydrationWarning>
                {new Date(post.date).toLocaleDateString("tr-TR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </p>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeUnwrapImages]}
              components={markdownComponents}
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
