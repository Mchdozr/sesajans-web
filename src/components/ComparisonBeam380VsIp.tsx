"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/CTABanner";
import { products } from "@/lib/products";

const beam380 = products.find((p) => p.slug === "beam-king-380")!;
const beamIp = products.find((p) => p.slug === "beam-king-ip")!;

const rows = [
  ["Kullanım", "Kapalı mekân konser, kulüp", "Açık hava, festival, IP65"],
  ["Güç", "380W", "380W"],
  ["Koruma", "IP20", "IP66"],
  ["Beam açısı", "2°", "2°"],
  ["Öne çıkan", "Prizma, gobo seti", "Yağmur/toz dayanımı"],
];

export function ComparisonContent() {
  return (
    <>
      <PageHeader
        eyebrow="Karşılaştırma"
        title="Beam King 380 vs Beam King IP"
        description="Kapalı mekân beam ile IP66 dış mekân beam arasında doğru seçimi yapın."
        breadcrumb={[
          { name: "Karşılaştırma", path: "/karsilastirma/beam-king-380-vs-ip" },
        ]}
      />
      <section className="py-12 sm:py-16">
        <Container>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-ink-muted">
            <strong>Beam King 380</strong> kapalı salon, gece kulübü ve stüdyo uygulamaları için
            optimize edilmiştir. <strong>Beam King IP</strong> ise IP66 koruma sınıfıyla festival,
            açık hava konseri ve geçici dış mekân kurulumlarında güvenilir çalışır.
          </p>
          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-theme">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface-elevated/80">
                <tr>
                  <th className="px-4 py-3 font-semibold text-ink">Özellik</th>
                  <th className="px-4 py-3 font-semibold text-brand">
                    <Link href={`/urunler/${beam380.slug}`}>{beam380.name}</Link>
                  </th>
                  <th className="px-4 py-3 font-semibold text-brand">
                    <Link href={`/urunler/${beamIp.slug}`}>{beamIp.name}</Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, a, b]) => (
                  <tr key={label} className="border-t border-theme">
                    <td className="px-4 py-3 font-medium text-ink">{label}</td>
                    <td className="px-4 py-3 text-ink-muted">{a}</td>
                    <td className="px-4 py-3 text-ink-muted">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-sm text-ink-muted">
            Detaylı teknik özellikler için ürün sayfalarını inceleyin veya{" "}
            <Link href="/iletisim" className="font-medium text-brand hover:underline">
              teklif alın
            </Link>
            .
          </p>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}
