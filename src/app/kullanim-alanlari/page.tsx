import type { Metadata } from "next";
import { UseCasesContent } from "@/components/UseCasesContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kullanım Alanları",
  description: "Konser, festival, kulüp, TV stüdyosu ve mimari aydınlatma çözümleri.",
  path: "/kullanim-alanlari",
});

export default function KullanimAlanlariPage() {
  return <UseCasesContent />;
}
