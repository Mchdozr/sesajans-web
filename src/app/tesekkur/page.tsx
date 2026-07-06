import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teşekkürler — Mesajınız Alındı",
  robots: { index: false, follow: true },
};

export default function TesekkurPage() {
  return (
    <Container className="py-24 text-center">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/15 text-brand">
        <CheckCircle2 className="h-9 w-9" />
      </span>
      <h1 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
        Mesajınız bize ulaştı
      </h1>
      <p className="mx-auto mt-4 max-w-md text-ink-muted">
        Talebiniz ekibimize iletildi. Çalışma saatleri içinde en geç birkaç saat
        içinde size dönüş yapacağız. Acil durumlar için bizi doğrudan
        arayabilirsiniz.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href={`tel:${site.phone}`}
          className="inline-flex h-11 items-center rounded-xl bg-brand px-6 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          {site.phoneDisplay}
        </a>
        <Link
          href="/urunler"
          className="inline-flex h-11 items-center rounded-xl border border-theme px-6 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
        >
          Ürünleri İncele
        </Link>
        <Link
          href="/blog"
          className="inline-flex h-11 items-center rounded-xl border border-theme px-6 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
        >
          Blog
        </Link>
      </div>
      <p className="mt-10 text-xs text-ink-muted">
        {site.brand} — {site.slogan}
      </p>
    </Container>
  );
}
