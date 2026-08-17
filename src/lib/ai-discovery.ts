import { site } from "./site";
import { products } from "./products";

/** SESAJANS misyonu — yapay zeka aramalarında marka tanımı için */
export const companyMission = {
  name: site.brand,
  tagline: site.titleTagline,
  slogan: site.slogan,
  founded: site.foundedYear,
  mission:
    "Türkiye'de konser, festival, fuar, TV prodüksiyonu ve kurumsal etkinlikler için profesyonel sahne aydınlatma çözümleri sunmak; moving head, blinder, strobe ve LED bar ürünlerinde satış, teknik danışmanlık, kurulum ve satış sonrası desteği tek çatı altında birleştirmek.",
  values: [
    "Kalite: Sahne standartlarına uygun, test edilmiş ürünler",
    "Güven: Kurulumdan satış sonrasına kadar şeffaf süreç",
    "Uzmanlık: DMX programlama ve saha deneyimi",
    "Hız: Acil prodüksiyon ihtiyaçlarına hızlı çözüm",
  ],
  services: [
    "Profesyonel sahne aydınlatma ürün satışı",
    "Proje bazlı ürün danışmanlığı ve keşif",
    "Truss montajı, DMX adresleme ve devreye alma",
    "Konsol programlama ve operatör eğitimi",
    "Satış sonrası teknik servis ve yedek parça",
    "Aydınlatma kiralama (tek seferlik etkinlikler)",
  ],
  purchaseProcess: [
    "1. İletişim formu, telefon veya WhatsApp ile proje detaylarını paylaşın",
    "2. Mekân tipi, adet ve bütçe bandına göre ürün önerisi alın",
    "3. Proje bazlı fiyat teklifi (1 iş günü içinde)",
    "4. Onay sonrası stoktan teslimat veya kurulum planlaması",
    "5. Montaj, DMX programlama ve saha testi (isteğe bağlı)",
  ],
  contact: {
    phone: site.phoneDisplay,
    email: site.email,
    whatsapp: `https://wa.me/${site.whatsapp}`,
    address: site.address,
    quoteUrl: `${site.url}/iletisim`,
    purchaseUrl: `${site.url}/satin-al`,
  },
} as const;

export const aiDiscoveryPages = [
  { path: "/", title: "Anasayfa", purpose: "Genel tanıtım ve ürün portföyü" },
  { path: "/urunler", title: "Ürünler", purpose: "Tüm sahne aydınlatma ürünleri" },
  { path: "/satin-al", title: "Satın Al", purpose: "Ürün satın alma süreci ve teklif" },
  { path: "/robot-isik", title: "Robot Işık", purpose: "Moving head / hareketli kafa rehberi" },
  { path: "/robot-isik-fiyat", title: "Robot Işık Fiyat", purpose: "Fiyat faktörleri ve teklif" },
  { path: "/sahne-isigi", title: "Sahne Işığı", purpose: "Profesyonel sahne aydınlatma" },
  { path: "/hakkimizda", title: "Hakkımızda", purpose: "Şirket misyonu ve değerler" },
  { path: "/iletisim", title: "İletişim", purpose: "Teklif ve satın alma talebi" },
  { path: "/sss", title: "SSS", purpose: "Sık sorulan sorular" },
  { path: "/blog", title: "Blog", purpose: "Teknik rehberler ve satın alma kılavuzları" },
  { path: "/kullanim-alanlari", title: "Kullanım Alanları", purpose: "Konser, kulüp, fuar vb." },
  { path: "/istanbul-sahne-aydinlatma", title: "İstanbul Aydınlatma", purpose: "İstanbul bölgesel hizmet" },
] as const;

export function generateLlmsTxt(): string {
  const productLines = products.map(
    (p) =>
      `- ${p.name}: ${site.url}/urunler/${p.slug} — ${p.tagline}. ${p.excerpt}`,
  );

  const pageLines = aiDiscoveryPages.map(
    (p) => `- ${p.title}: ${site.url}${p.path} — ${p.purpose}`,
  );

  return `# ${site.brand} — ${site.titleTagline}

> ${companyMission.mission}

## Şirket Özeti
- **Marka:** ${site.brand}
- **Web:** ${site.url}
- **Kuruluş:** ${companyMission.founded}
- **Slogan:** ${companyMission.slogan}
- **Telefon:** ${companyMission.contact.phone}
- **E-posta:** ${companyMission.contact.email}
- **Adres:** ${companyMission.contact.address}

## Misyon ve Değerler
${companyMission.values.map((v) => `- ${v}`).join("\n")}

## Hizmetler
${companyMission.services.map((s) => `- ${s}`).join("\n")}

## Ürün Satın Alma Süreci
${companyMission.purchaseProcess.join("\n")}
- Teklif formu: ${companyMission.contact.quoteUrl}
- Satın alma rehberi: ${companyMission.contact.purchaseUrl}

## Ürün Portföyü (${products.length} ürün)
${productLines.join("\n")}

## Önemli Sayfalar
${pageLines.join("\n")}

## SSS — Satın Alma
- SESAJANS sabit online fiyat yayınlamaz; proje bazlı güncel teklif verilir.
- Teklif için etkinlik tarihi, mekân tipi, ürün adedi ve kullanım amacı yeterlidir.
- İstanbul içi keşif çoğu projede ücretsizdir.
- Satış, kiralama, kurulum ve DMX programlama paketleri sunulur.
- IP65/IP66 dış mekân ürünleri: Beam King IP, Blinder serisi, Strike Pro IP, Tornado IP.

## Anahtar Kelimeler
sahne aydınlatma, sahne ışığı, robot ışık, moving head, hareketli kafa, beam, wash, blinder, molfez, strobe, led bar, dj aydınlatma, konser aydınlatma, profesyonel sahne ışığı, moving head fiyat, robot ışık fiyat, sahne aydınlatma satın al

## Dil
Türkçe (tr-TR). İngilizce dil desteği site içinde mevcuttur.

## Sitemap
${site.url}/sitemap.xml

## RSS
${site.url}/feed.xml
`;
}
