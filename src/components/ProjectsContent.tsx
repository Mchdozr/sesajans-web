"use client";

import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { ProjectGallery } from "@/components/ProjectGallery";
import { CTABanner } from "@/components/CTABanner";
import { useI18n } from "@/lib/i18n/context";

export function ProjectsContent() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader
        eyebrow={t.projectsPage.eyebrow}
        title={t.projectsPage.title}
        description={t.projectsPage.description}
        breadcrumb={[{ name: t.nav.projects, path: "/projeler" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div
            role="status"
            className="mb-10 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-5 py-4 text-sm leading-relaxed text-ink-muted"
          >
            {t.projectsPage.disclaimer}
          </div>
          <ProjectGallery />
        </Container>
      </section>
      <CTABanner />
    </>
  );
}
