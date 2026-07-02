import { Suspense } from "react";
import type { Metadata } from "next";
import { ProductsContent } from "@/components/ProductsContent";
import { PageHeaderStatic } from "@/components/PageHeaderStatic";
import { buildMetadata } from "@/lib/seo";
import { dictionary as tr } from "@/lib/i18n/dictionaries/tr";

export const metadata: Metadata = buildMetadata({
  title: "Profesyonel Sahne Aydınlatma Ürünleri",
  description:
    "Moving head beam ve wash, blinder, strobe ve LED bar ürünleri. IP65 dış mekân ve kapalı mekân çözümleri.",
  path: "/urunler",
  keywords: ["sahne aydınlatma ürünleri", "moving head", "led blinder"],
});

export default function UrunlerPage() {
  const { productsPage } = tr;

  return (
    <>
      <PageHeaderStatic
        eyebrow={productsPage.eyebrow}
        title={productsPage.title}
        description={productsPage.description}
        breadcrumb={[{ name: tr.nav.products, path: "/urunler" }]}
        homeLabel={tr.common.home}
      />
      <Suspense>
        <ProductsContent />
      </Suspense>
    </>
  );
}
