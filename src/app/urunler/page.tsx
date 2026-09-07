import { Suspense } from "react";
import type { Metadata } from "next";
import { ProductsContent } from "@/components/ProductsContent";
import { PageHeaderStatic } from "@/components/PageHeaderStatic";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, itemListJsonLd } from "@/lib/seo";
import { products } from "@/lib/products";
import { site } from "@/lib/site";
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
  const productListJsonLd = itemListJsonLd(
    products.map((p) => ({
      name: p.name,
      url: `${site.url}/urunler/${p.slug}`,
      image: `${site.url}${p.image}`,
    })),
  );

  return (
    <>
      <JsonLd data={productListJsonLd} />
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
