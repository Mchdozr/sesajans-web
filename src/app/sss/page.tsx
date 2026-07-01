import type { Metadata } from "next";
import { SssContent } from "@/components/SssContent";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { getSssFaqs } from "@/lib/sss-faqs";

export const metadata: Metadata = buildMetadata({
  title: "Sık Sorulan Sorular",
  description: "Sahne aydınlatma ürünleri ve hizmetler hakkında sık sorulan sorular.",
  path: "/sss",
});

export default function SssPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(getSssFaqs())} />
      <SssContent />
    </>
  );
}
