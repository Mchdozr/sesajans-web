import Image from "next/image";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/Container";
import { PageHeaderStatic } from "@/components/PageHeaderStatic";
import { ProductCard } from "@/components/ProductCard";
import { CTABanner } from "@/components/CTABanner";
import { RelatedContent } from "@/components/RelatedContent";
import type { Project } from "@/lib/projects";
import { getProjectRelatedGroups } from "@/lib/internal-links";
import { categories } from "@/lib/categories";

export function ProjectDetailContent({ project }: { project: Project }) {
  const cat = categories[project.category];
  const relatedGroups = getProjectRelatedGroups(project.slug);

  return (
    <>
      <PageHeaderStatic
        eyebrow={`${project.year} · ${project.city}`}
        title={project.title}
        description={project.summary}
        breadcrumb={[
          { name: "Projeler", path: "/projeler" },
          { name: project.title, path: `/projeler/${project.slug}` },
        ]}
      />

      <section className="py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-theme">
              <Image
                src={project.images[0]}
                alt={`${project.title} — ${project.venue}`}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-brand">{cat.label}</p>
                <p className="mt-2 text-ink-muted">
                  <strong className="text-ink">Mekân:</strong> {project.venue}, {project.city}
                </p>
              </div>
              <p className="leading-relaxed text-ink-muted">{project.detail}</p>
              <div>
                <h2 className="font-display font-bold text-ink">Zorluklar</h2>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-ink-muted">
                  {project.challenges.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display font-bold text-ink">Çözümler</h2>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-ink-muted">
                  {project.solutions.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {project.images.length > 1 && (
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {project.images.slice(1).map((src) => (
                <div key={src} className="relative aspect-video overflow-hidden rounded-xl border border-theme">
                  <Image src={src} alt={project.title} fill className="object-cover" sizes="33vw" />
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className="border-y border-theme bg-surface-deep/40 py-16">
        <Container>
          <SectionHeading eyebrow="Ekipman" title="Kullanılan ürünler" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.productSlugs.map((slug) => (
              <ProductCard key={slug} slug={slug} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm">
            <Link href="/projeler" className="font-semibold text-brand hover:underline">
              ← Tüm projeler
            </Link>
          </p>
        </Container>
      </section>

      <RelatedContent groups={relatedGroups} />

      <CTABanner />
    </>
  );
}
