import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand">404</p>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
        Sayfa bulunamadı
      </h1>
      <p className="mx-auto mt-4 max-w-md text-ink-muted">
        Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfadan veya ürün
        kataloğundan devam edebilirsiniz.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center rounded-xl bg-brand px-6 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          Ana Sayfa
        </Link>
        <Link
          href="/urunler"
          className="inline-flex h-11 items-center rounded-xl border border-theme px-6 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
        >
          Ürünler
        </Link>
        <Link
          href="/iletisim"
          className="inline-flex h-11 items-center rounded-xl border border-theme px-6 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
        >
          İletişim
        </Link>
      </div>
      <p className="mt-10 text-xs text-ink-muted">{site.brand} — {site.url}</p>
    </Container>
  );
}
