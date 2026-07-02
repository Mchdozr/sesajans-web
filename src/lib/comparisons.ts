export type Comparison = {
  slug: string;
  path: string;
  seoTitle: string;
  seoDescription: string;
  title: string;
  description: string;
  intro: string;
  productASlug: string;
  productBSlug: string;
  rows: [label: string, valueA: string, valueB: string][];
  faqs: { q: string; a: string }[];
  keywords: string[];
};

export const comparisons: Comparison[] = [
  {
    slug: "beam-king-380-vs-ip",
    path: "/karsilastirma/beam-king-380-vs-ip",
    seoTitle: "Beam King 380 vs Beam King IP — Karşılaştırma",
    seoDescription:
      "Kapalı mekân Beam King 380 ile IP66 Beam King IP farkları. Konser, festival ve kulüp için doğru beam moving head seçimi.",
    title: "Beam King 380 vs Beam King IP",
    description: "Kapalı mekân beam ile IP66 dış mekân beam arasında doğru seçimi yapın.",
    intro:
      "Beam King 380 kapalı salon, gece kulübü ve stüdyo uygulamaları için optimize edilmiştir. Beam King IP ise IP66 koruma sınıfıyla festival, açık hava konseri ve geçici dış mekân kurulumlarında güvenilir çalışır.",
    productASlug: "beam-king-380",
    productBSlug: "beam-king-ip",
    rows: [
      ["Kullanım", "Kapalı mekân konser, kulüp", "Açık hava, festival, IP65+"],
      ["Güç", "380W", "420W"],
      ["Koruma", "IP20", "IP66"],
      ["Beam açısı", "2°", "2°"],
      ["Öne çıkan", "Prizma, gobo seti", "CMY, yağmur/toz dayanımı"],
    ],
    faqs: [
      {
        q: "Açık hava konserinde Beam King 380 kullanılır mı?",
        a: "Hayır. Açık hava ve festival için IP66 korumalı Beam King IP tercih edilmelidir.",
      },
      {
        q: "Her iki model de DMX destekler mi?",
        a: "Evet. DMX512 ve RDM protokollerini destekler; kanal listesi ürün sayfalarında yer alır.",
      },
    ],
    keywords: ["beam king 380", "beam king ip", "ip66 beam", "moving head karşılaştırma"],
  },
  {
    slug: "wash-3715-vs-led-beam-wash-150",
    path: "/karsilastirma/wash-3715-vs-led-beam-wash-150",
    seoTitle: "Wash 3715 vs LED Beam Wash 150 — Karşılaştırma",
    seoDescription:
      "Profesyonel Wash 3715 ile kompakt LED Beam Wash 150 farkları. Salon, konser ve kulüp için doğru wash moving head seçimi.",
    title: "Wash 3715 vs LED Beam Wash 150",
    description: "Büyük sahne wash ile kompakt beam/wash hybrid arasında seçim rehberi.",
    intro:
      "Wash 3715 yüksek CRI ve geniş zoom ile orta-büyük salon ve konser sahnesinde homojen yıkama sağlar. LED Beam Wash 150 kompakt gövde ve beam/wash çift modu ile kulüp ve düşük tavanlı mekânlar için idealdir.",
    productASlug: "wash-3715",
    productBSlug: "led-beam-wash-150",
    rows: [
      ["LED", "37 × 15W RGBW high CRI", "7 × 40W RGBW"],
      ["Zoom", "10° – 60°", "7° – 45°"],
      ["Güç", "500W", "~280W"],
      ["Ağırlık", "19.5 kg", "6 kg"],
      ["İdeal mekân", "Konser, tiyatro, salon", "Kulüp, bar, küçük sahne"],
    ],
    faqs: [
      {
        q: "Kulüp için Wash 3715 fazla mı güçlü?",
        a: "Düşük tavanlı mekânlarda LED Beam Wash 150 daha pratik; Wash 3715 400+ kişilik salonlarda tercih edilir.",
      },
      {
        q: "İkisini birlikte kullanabilir miyim?",
        a: "Evet. Wash 3715 genel yıkama, Beam Wash 150 ön vurgu ve efekt katmanı olarak kombinlenebilir.",
      },
    ],
    keywords: ["wash 3715", "led beam wash 150", "wash moving head", "sahne yıkama"],
  },
  {
    slug: "blinder-400-ip-vs-800-ip",
    path: "/karsilastirma/blinder-400-ip-vs-800-ip",
    seoTitle: "Blinder 400 IP vs Blinder 800 IP — Karşılaştırma",
    seoDescription:
      "Kompakt Blinder 400 IP ile güçlü Blinder 800 IP farkları. Fuar, konser ve mimari aydınlatma için blinder seçimi.",
    title: "Blinder 400 IP vs Blinder 800 IP",
    description: "Orta ölçekli blinder ile stadyum sınıfı blinder arasında doğru seçim.",
    intro:
      "Blinder 400 IP fuar standı ve orta ölçekli sahne ön hattı için taşınabilir çözüm sunar. Blinder 800 IP yüksek çıkış gücü ve geniş kapsama alanıyla büyük konser, stadyum ve mimari projelerde tercih edilir.",
    productASlug: "blinder-400-ip",
    productBSlug: "blinder-800-ip",
    rows: [
      ["Kullanım", "Fuar, lansman, orta sahne", "Stadyum, festival, mimari"],
      ["Koruma", "IP65/IP66", "IP66"],
      ["Taşınabilirlik", "Kompakt, hızlı kurulum", "Truss / sabit montaj"],
      ["Çıkış", "Orta güç blinder", "Yüksek güç blinder"],
      ["Öne çıkan", "Stand ve küçük sahne", "Uzun mesafe vurgu"],
    ],
    faqs: [
      {
        q: "Fuar standı için hangisi yeterli?",
        a: "Çoğu stand ve lansman sahnesi için Blinder 400 IP yeterlidir; 500+ kişilik açık alanlarda 800 IP değerlendirilir.",
      },
      {
        q: "Dış mekânda ikisi de kullanılır mı?",
        a: "Her iki model de IP koruma sınıfıyla dış mekân etkinliklerine uygundur; yağmur ve toz koşullarında test edilmiştir.",
      },
    ],
    keywords: ["blinder 400 ip", "blinder 800 ip", "blinder karşılaştırma", "sahne blinder"],
  },
  {
    slug: "beam-king-ip-vs-tornado-ip",
    path: "/karsilastirma/beam-king-ip-vs-tornado-ip",
    seoTitle: "Beam King IP vs Tornado IP — Karşılaştırma",
    seoDescription:
      "Tek başlı beam ile çok başlı efekt ünitesi karşılaştırması. Festival ve kulüp için Beam King IP mi Tornado IP mi?",
    title: "Beam King IP vs Tornado IP",
    description: "Uzun mesafe beam ile çok başlı efekt moving head arasında seçim.",
    intro:
      "Beam King IP uzun mesafe dar demet ve gobo/prizma efektleriyle ana truss hattında vurgu üretir. Tornado IP çok başlı yapısıyla dans pisti, yan sahne ve dekoratif efekt katmanlarında geniş kapsama sağlar.",
    productASlug: "beam-king-ip",
    productBSlug: "tornado-ip",
    rows: [
      ["Tip", "Tek başlı beam", "Çok başlı efekt"],
      ["Görev", "Uzun mesafe vurgu", "Geniş alan efekti"],
      ["Koruma", "IP66", "IP65"],
      ["İdeal konum", "Ana truss, ön hat", "Yan kule, dekor hattı"],
      ["Öne çıkan", "CMY, prizma, gobo", "Çoklu lens, hızlı hareket"],
    ],
    faqs: [
      {
        q: "Festivalde hangisinden daha fazla gerekir?",
        a: "Ana sahne için Beam King IP; yan efekt ve atmosfer için Tornado IP. Çoğu prodüksiyonda ikisi birlikte kullanılır.",
      },
      {
        q: "Kulüp için sadece Tornado yeterli mi?",
        a: "Küçük kulüplerde Tornado tek başına yeterli olabilir; ön vurgu için Beam King 380 veya Beam Wash 150 eklenebilir.",
      },
    ],
    keywords: ["beam king ip", "tornado ip", "efekt moving head", "festival beam"],
  },
];

export const comparisonSlugs = comparisons.map((c) => c.slug);

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
