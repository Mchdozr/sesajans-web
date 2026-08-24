import { Suspense } from "react";
import type { Metadata } from "next";
import { ProductsContent } from "@/components/ProductsContent";
import { PageHeaderStatic } from "@/components/PageHeaderStatic";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, itemListJsonLd } from "@/lib/seo";
import { dictionary as tr } from "@/lib/i18n/dictionaries/tr";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Sahne Aydınlatma Ürünleri — Satın Al | Fiyat Teklifi",
  description:
    "Moving head beam ve wash, blinder, strobe ve LED bar satın alın. IP65/IP66 dış mekân çözümleri. SESAJANS ücretsiz fiyat teklifi ve kurulum desteği.",
  path: "/urunler",
  keywords: [
    "sahne aydınlatma ürünleri",
    "moving head satın al",
    "robot ışık fiyat",
    "led blinder",
    "sahne ışığı teklif",
  ],
});

const productListJsonLd = itemListJsonLd(
  products.map((p) => ({
    name: p.name,
    url: `${site.url}/urunler/${p.slug}`,
    description: p.excerpt,
    image: `${site.url}${p.image}`,
  })),
);

export default function UrunlerPage() {
  const { productsPage } = tr;

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
