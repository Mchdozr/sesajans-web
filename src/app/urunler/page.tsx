import { Suspense } from "react";
import type { Metadata } from "next";
import { ProductsContent } from "@/components/ProductsContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Profesyonel Sahne Aydınlatma Ürünleri",
  description:
    "Moving head beam ve wash, blinder, strobe ve LED bar ürünleri. IP65 dış mekân ve kapalı mekân çözümleri.",
  path: "/urunler",
  keywords: ["sahne aydınlatma ürünleri", "moving head", "led blinder"],
});

export default function UrunlerPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  );
}
