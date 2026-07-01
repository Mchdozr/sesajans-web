"use client";

import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader title={title} breadcrumb={[{ name: title, path: "#" }]} />
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-ink-muted [&_strong]:text-ink">
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
