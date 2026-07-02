import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/Container";
import type { RelatedLinkGroup } from "@/lib/internal-links";

export function RelatedContent({
  groups,
  title = "İlgili içerikler",
  description = "Bu sayfayla bağlantılı rehberler, ürünler ve hizmetler.",
}: {
  groups: RelatedLinkGroup[];
  title?: string;
  description?: string;
}) {
  const visible = groups.filter((g) => g.links.length > 0);
  if (visible.length === 0) return null;

  return (
    <section className="border-t border-theme bg-surface-deep/40 py-16">
      <Container>
        <SectionHeading title={title} description={description} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-theme bg-surface-elevated/80 p-5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-ink hover:text-brand"
                    >
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
