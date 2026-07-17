import type { Metadata } from "next";
import { BayiContent } from "@/components/BayiContent";
import { JsonLd } from "@/components/JsonLd";
import { bayiFaqs } from "@/lib/bayi";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sahne Aydınlatma Distribütörü & Bayi | Fiyat Teklifi",
  description:
    "Moving head, blinder, strobe ve LED bar Türkiye distribütörü SESAJANS. Stoktan satış, kurulum ve ücretsiz fiyat teklifi — Şişli/İstanbul.",
  path: "/bayi",
  keywords: [
    "sahne aydınlatma distribütörü",
    "moving head bayi türkiye",
    "sesajans bayi",
    "sahne ışığı satışı",
    "profesyonel aydınlatma distribütör",
  ],
});

export default function BayiPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(bayiFaqs)} />
      <BayiContent />
    </>
  );
}
