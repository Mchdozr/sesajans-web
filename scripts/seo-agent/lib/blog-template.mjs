/**
 * Profesyonel blog şablonu — SEO ajanı yeni yazılar için kullanır.
 * Stub yerine yapılandırılmış, düzenlenmeye hazır içerik üretir.
 */
export function buildBlogMdx(topic, config) {
  const today = new Date().toISOString().slice(0, 10);
  const brand = config.brand ?? "SESAJANS";
  const keyword = topic.keyword;
  const title = topic.title;
  const slug = topic.slug;

  const relatedProduct = pickProduct(keyword);
  const image = relatedProduct.image;

  return `---
title: "${title}"
description: "${keyword} için ${brand} uzman rehberi: ürün seçimi, kurulum ipuçları ve proje danışmanlığı."
date: "${today}"
category: "Rehber"
keywords: ["${keyword}", "sesajans", "sahne aydınlatma", "${relatedProduct.slug}"]
image: "${image}"
---

**${keyword}** konusunda doğru ürün ve kurulum kararı; konser, festival ve kurumsal etkinliklerde görsel kaliteyi doğrudan belirler. ${brand}, moving head, blinder, strobe ve LED bar portföyüyle profesyonel sahne aydınlatma çözümleri sunar.

![${relatedProduct.name} sahne aydınlatma](${image})

## ${keyword} nedir?

${keyword}, profesyonel sahne prodüksiyonlarında sık tercih edilen bir aydınlatma kategorisidir. Doğru fixture seçimi; mekân ölçüsü, iç/dış mekân koşulları ve DMX altyapısına göre yapılmalıdır.

## Teknik seçim kriterleri

- **Güç ve çıkış:** Sahne derinliği ve seyirci mesafesine göre watt sınıfı
- **IP koruma:** Dış mekân için IP65/IP66 zorunlu
- **DMX / Art-Net:** Universe kapasitesi ve adres planı
- **Truss montajı:** Ağırlık, pan/tilt hızı ve kablo yönetimi

## Önerilen ürün: ${relatedProduct.name}

[${relatedProduct.name}](/urunler/${relatedProduct.slug}) portföyümüzde ${keyword} ihtiyacı için öne çıkan çözümdür. Detaylı teknik özellikler ve katalog için ürün sayfasını inceleyin.

| Kriter | Öneri |
|--------|-------|
| Kapalı mekân | Beam / wash moving head |
| Açık hava | IP66 beam ve blinder |
| Ritim efekti | Strobe + blinder katmanı |

## Kurulum ve devreye alma

${brand} olarak truss montajı, DMX adresleme, konsol programlama ve saha testi hizmeti sunuyoruz. Kurulum öncesi mekân planı ve fixture listesi paylaşımı süreci hızlandırır.

## İlgili rehberler

- [Sahne aydınlatma rehberi](/blog/sahne-aydinlatma-rehberi)
- [DMX aydınlatma kurulumu](/blog/dmx-aydinlatma-kurulumu)
- [Festival bütçe planlama](/blog/festival-aydinlatma-butce-planlama)

[Ürünlerimizi inceleyin](/urunler) veya [ücretsiz teklif alın](/iletisim).

**S: ${keyword} için hangi ürünü önerirsiniz?**  
C: Proje detaylarına göre [${relatedProduct.name}](/urunler/${relatedProduct.slug}) veya portföydeki diğer modeller değerlendirilir.

**S: Kurulum desteği var mı?**  
C: Evet. ${brand} DMX programlama ve devreye alma hizmeti sunar.

**S: Katalog nereden indirilir?**  
C: İlgili [ürün sayfasından](/urunler/${relatedProduct.slug}) PDF kataloğa ulaşabilirsiniz.
`;
}

function pickProduct(keyword) {
  const k = keyword.toLowerCase();
  if (k.includes("ip66") || k.includes("dış") || k.includes("dis")) {
    return { slug: "beam-king-ip", name: "Beam King IP", image: "/products/beam-king-ip/image-01.webp" };
  }
  if (k.includes("blinder")) {
    return { slug: "blinder-800-ip", name: "Blinder 800 IP", image: "/products/blinder-800-ip/image-01.jpg" };
  }
  if (k.includes("strobe")) {
    return { slug: "strike-pro-ip", name: "Strike Pro IP", image: "/products/strike-pro-ip/image-01.jpg" };
  }
  if (k.includes("wash")) {
    return { slug: "wash-3715", name: "Wash 3715", image: "/products/wash-3715/image-01.jpg" };
  }
  if (k.includes("dmx")) {
    return { slug: "beam-king-380", name: "Beam King 380", image: "/products/beam-king-380/image-04.jpg" };
  }
  if (k.includes("festival") || k.includes("bütçe") || k.includes("butce")) {
    return { slug: "beam-king-ip", name: "Beam King IP", image: "/products/beam-king-ip/image-02.webp" };
  }
  if (k.includes("led bar") || k.includes("bar")) {
    return { slug: "diamond-line-1240-eco", name: "Diamond Line 1240 Eco", image: "/products/diamond-line-1240-eco/image-01.jpg" };
  }
  return { slug: "beam-king-380", name: "Beam King 380", image: "/products/beam-king-380/image-04.jpg" };
}
