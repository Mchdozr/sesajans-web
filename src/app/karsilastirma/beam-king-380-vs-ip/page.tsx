import type { Metadata } from "next";
import { ComparisonContent } from "@/components/ComparisonBeam380VsIp";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Beam King 380 vs Beam King IP — Karşılaştırma",
  description:
    "Kapalı mekân Beam King 380 ile IP66 Beam King IP farkları. Konser, festival ve kulüp için doğru beam moving head seçimi.",
  path: "/karsilastirma/beam-king-380-vs-ip",
  keywords: ["beam king 380", "beam king ip", "ip66 beam", "moving head karşılaştırma"],
});

const faqs = [
  {
    q: "Açık hava konserinde Beam King 380 kullanılır mı?",
    a: "Hayır. Açık hava ve festival için IP66 korumalı Beam King IP tercih edilmelidir.",
  },
  {
    q: "Beam King 380 ve IP aynı DMX kanal yapısına sahip mi?",
    a: "Her iki model de DMX512/RDM destekler; detaylı kanal listesi ürün sayfalarında yer alır.",
  },
] as const;

export default function ComparisonPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <ComparisonContent />
    </>
  );
}
