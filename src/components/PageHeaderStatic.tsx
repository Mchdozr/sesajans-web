import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export function PageHeaderStatic({
  eyebrow,
  title,
  description,
  breadcrumb,
  homeLabel = "Ana Sayfa",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: { name: string; path: string }[];
  homeLabel?: string;
}) {
  const breadcrumbItems = breadcrumb
    ? [{ name: homeLabel, path: "/" }, ...breadcrumb]
    : null;

  return (
    <div className="border-b border-theme bg-surface-deep/80">
      {breadcrumbItems && <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />}
      <Container className="py-12 sm:py-16">
        {breadcrumb && (
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex flex-wrap items-center gap-1 text-sm text-ink-muted"
          >
            <Link href="/" className="hover:text-brand">
              {homeLabel}
            </Link>
            {breadcrumb.map((item) => (
              <span key={item.path} className="flex items-center gap-1">
                <ChevronRight className="h-4 w-4" />
                {item.path === breadcrumb[breadcrumb.length - 1].path ? (
                  <span className="text-ink">{item.name}</span>
                ) : (
                  <Link href={item.path} className="hover:text-brand">
                    {item.name}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">{eyebrow}</p>
        )}
        <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </div>
  );
}
