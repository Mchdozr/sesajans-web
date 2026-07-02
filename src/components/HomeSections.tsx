import Link from "next/link";
import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { getAllBlogPosts } from "@/lib/blog";
import { useCases } from "@/lib/use-cases";
import { ArrowRight } from "lucide-react";

export function HomeBlogPreview() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <section className="border-y border-theme bg-surface-deep/40 py-20">
      <Container>
        <SectionHeading
          eyebrow="Blog"
          title="Aydınlatma rehberleri"
          description="Ürün seçimi, kurulum ve proje planlama hakkında uzman içerikler."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="glow-border overflow-hidden rounded-2xl border border-theme bg-surface-elevated/80"
            >
              {post.image && (
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
              )}
              <div className="p-5">
                <p className="text-xs font-semibold text-brand">{post.category}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-ink">
                  <Link href={`/blog/${post.slug}`} className="hover:text-brand">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-ink-muted">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/blog" variant="outline">
            Tüm yazılar <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function HomeUseCasesPreview() {
  const items = useCases.slice(0, 6);

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Kullanım Alanları"
          title="Her etkinlik için doğru çözüm"
          description="Konserden düğüne, fuardan tiyatroya özel aydınlatma paketleri."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((uc) => (
            <Link
              key={uc.slug}
              href={`/kullanim-alanlari/${uc.slug}`}
              className="glow-border rounded-2xl border border-theme bg-surface-elevated/80 p-5 transition-colors hover:border-brand/40"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                {uc.eyebrow}
              </p>
              <h3 className="mt-2 font-display font-bold text-ink">{uc.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-ink-muted">{uc.intro}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand">
                Detaylı rehber →
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/kullanim-alanlari" className="font-semibold text-brand hover:underline">
            Tüm kullanım alanları
          </Link>
          <Link
            href="/istanbul-sahne-aydinlatma"
            className="font-semibold text-brand hover:underline"
          >
            İstanbul sahne aydınlatma →
          </Link>
        </div>
      </Container>
    </section>
  );
}
