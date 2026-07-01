"use client";

import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function LegalLayout({
  title,
  path,
  children,
}: {
  title: string;
  path: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader title={title} breadcrumb={[{ name: title, path }]} />
      <section className="py-16">
        <Container>
          <div className="legal-content mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-ink-muted [&_strong]:text-ink [&_h2]:mt-6 [&_h2]:font-display [&_h2]:text-base [&_h2]:font-bold [&_h2]:text-ink [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
            {children}
            <p className="pt-8 text-xs text-ink-muted">
              Son güncelleme: {new Date().getFullYear()} — {site.brand}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
