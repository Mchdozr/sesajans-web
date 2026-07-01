import type { Metadata } from "next";
import { SssContent } from "@/components/SssContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sık Sorulan Sorular",
  description: "Sahne aydınlatma ürünleri ve hizmetler hakkında sık sorulan sorular.",
  path: "/sss",
});

export default function SssPage() {
  return <SssContent />;
}
