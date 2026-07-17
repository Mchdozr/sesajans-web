import type { ProductCategory } from "./categories";

export type ProductSpec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: ProductCategory;
  tagline: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  gallery: string[];
  videos?: string[];
  pdf?: string;
  intro: string;
  highlights: string[];
  specs: ProductSpec[];
  useCases: string[];
  faqs: { q: string; a: string }[];
  keywords: string[];
  ipRating?: string;
};

/**
 * PDF katalog yayın listesi: public/downloads/<slug>/katalog.pdf dosyası
 * eklendikten sonra slug'ı buraya yaz — ürün sayfasında indirme butonu açılır.
 */
const PUBLISHED_PDF_SLUGS = new Set<string>([]);

const commercialFaqs = (name: string): Product["faqs"] => [
  {
    q: `${name} fiyatı nasıl alınır?`,
    a: `Liste fiyatı proje kapsamına göre değişir. Adet, kurulum ve opsiyonlara göre ücretsiz fiyat teklifi için iletişim formundan veya WhatsApp üzerinden bize ulaşın. SESAJANS Türkiye distribütörü olarak stok ve teslimat planını birlikte netleştiririz.`,
  },
  {
    q: `${name} satılık mı, kiralama da var mı?`,
    a: `Evet. Satış ve etkinlik bazlı kiralama seçenekleri sunuyoruz. Kısa süreli etkinliklerde kiralama, kalıcı kurulumlarda satış tercih edilir. Hangisinin size uygun olduğunu birlikte değerlendiririz.`,
  },
];

/** Yalnızca temizlenmiş spec-sheet.png galeride; üretici PDF'i yayın listesindeyse linklenir. */
function publishProduct(product: Product): Product {
  const gallery = product.gallery.filter(
    (src) => !src.toLowerCase().endsWith(".png") || src.endsWith("/spec-sheet.png"),
  );

  const keywords = Array.from(
    new Set([
      product.name.toLocaleLowerCase("tr"),
      `${product.name.toLocaleLowerCase("tr")} fiyat`,
      `${product.name.toLocaleLowerCase("tr")} satın al`,
      `${product.name.toLocaleLowerCase("tr")} teklif`,
      ...product.keywords,
    ]),
  );

  return {
    ...product,
    gallery: gallery.length > 0 ? gallery : [product.image],
    pdf: PUBLISHED_PDF_SLUGS.has(product.slug) ? product.pdf : undefined,
    keywords,
    faqs: [...product.faqs, ...commercialFaqs(product.name)],
    excerpt: `${product.excerpt} Türkiye distribütörü SESAJANS'tan ücretsiz fiyat teklifi alın.`,
  };
}

const catalog: Product[] = [
  {
    slug: "beam-king-380",
    name: "Beam King 380",
    shortName: "Beam 380",
    category: "moving-head-beam",
    tagline: "Güçlü beam moving head · prizma kralı",
    excerpt:
      "380W beam moving head; 2° dar beam, 14 renk tekerleği, 13 gobo ve 4 prizma ile konser ve kulüp sahne efektleri için ideal.",
    image: "/products/beam-king-380/image-04.jpg",
    imageAlt: "Beam King 380 profesyonel beam moving head aydınlatma",
    gallery: [
      "/products/beam-king-380/image-04.jpg",
      "/products/beam-king-380/image-05.jpg",
      "/products/beam-king-380/image-06.jpg",
      "/products/beam-king-380/image-07.jpg",
      "/products/beam-king-380/spec-sheet.png",
    ],
    videos: [
      "/products/beam-king-380/video-01.mp4",
      "/products/beam-king-380/video-02.mp4",
      "/products/beam-king-380/video-03.mp4",
    ],
    pdf: "/downloads/beam-king-380/katalog.pdf",
    intro:
      "Beam King 380, sahne ve etkinlik prodüksiyonları için tasarlanmış profesyonel bir beam moving head ünitesidir. 380W güç kaynağı, 2° ultra dar beam açısı ve zengin efekt seti ile uzun mesafede keskin ışık demetleri üretir. Konser, festival, gece kulübü ve TV stüdyosu uygulamalarında güvenilir performans sunar.",
    highlights: [
      "380W ışık kaynağı (opsiyonel 420W)",
      "2° dar beam · 152mm lens",
      "14 renk + 13 sabit gobo · 4 prizma",
      "Pan 540° / Tilt 270° · 16-bit tarama",
      "DMX512/RDM · 17 kanal",
    ],
    specs: [
      { label: "Işık Kaynağı", value: "380W (opsiyonel 420W)" },
      { label: "Renk Sıcaklığı", value: "7800K" },
      { label: "Ömür", value: "3500 saat" },
      { label: "Beam Açısı", value: "2°" },
      { label: "Lens Çapı", value: "152 mm" },
      { label: "Renk Tekerleği", value: "14 renk + open" },
      { label: "Gobo", value: "13 sabit gobo + open" },
      { label: "Prizma", value: "4 çeşit, çift yönlü dönüş" },
      { label: "Kontrol", value: "DMX512 / RDM · 17CH" },
      { label: "Güç", value: "AC 100–240V · 380W" },
      { label: "Hareket", value: "Pan 540° / Tilt 270°" },
      { label: "IP Koruma", value: "IP20" },
      { label: "Boyut", value: "316.5 × 252.6 × 538.4 mm" },
      { label: "Ağırlık", value: "13.2 kg" },
    ],
    useCases: ["Konser & festival", "Gece kulübü", "TV stüdyosu", "Fuar & lansman"],
    faqs: [
      {
        q: "Beam King 380 hangi mekânlar için uygundur?",
        a: "Kapalı mekân sahne, kulüp ve stüdyo uygulamaları için tasarlanmıştır. IP20 koruma sınıfı nedeniyle dış mekân kullanımı önerilmez.",
      },
      {
        q: "DMX kanal sayısı kaçtır?",
        a: "Standart çalışma modu 17 kanaldır. DMX512 ve RDM protokollerini destekler.",
      },
      {
        q: "Kurulum desteği veriyor musunuz?",
        a: "Evet. SESAJANS olarak truss montajı, DMX programlama ve devreye alma hizmeti sunuyoruz. Teklif için iletişime geçin.",
      },
    ],
    keywords: ["beam moving head", "380w beam", "sahne aydınlatma", "dmx beam"],
    ipRating: "IP20",
  },
  {
    slug: "beam-king-ip",
    name: "Beam King IP",
    shortName: "Beam IP",
    category: "moving-head-beam",
    tagline: "Dış mekân beam · Pan Infinity · CMY renk",
    excerpt:
      "IP66 gövde, 420W kaynak, CMY karışım, 17 gobo ve 6 prizma ile açık hava konser ve mimari aydınlatma için üst segment beam çözümü.",
    image: "/products/beam-king-ip/image-01.webp",
    imageAlt: "Beam King IP dış mekân beam moving head",
    gallery: [
      "/products/beam-king-ip/image-01.webp",
      "/products/beam-king-ip/image-02.webp",
      "/products/beam-king-ip/image-03.webp",
      "/products/beam-king-ip/image-04.webp",
      "/products/beam-king-ip/image-05.webp",
      "/products/beam-king-ip/spec-sheet.png",
    ],
    pdf: "/downloads/beam-king-ip/katalog.pdf",
    intro:
      "Beam King IP, zorlu dış mekân koşullarına dayanıklı premium beam moving head serisidir. Magnesium-alüminyum IP66 gövde, sonsuz pan hareketi ve CMY renk karışım sistemi ile büyük ölçekli etkinliklerde üstün performans sağlar. 1.7° ultra dar beam ve 15 farklı prizma efekti ile mimari projeksiyon ve açık hava konserlerinde tercih edilir.",
    highlights: [
      "Philips 420W LL kaynak · CRI 77",
      "CMY + CTO 3600–6600K",
      "Pan Infinity / Tilt 270°",
      "IP66 magnezyum-alüminyum gövde",
      "Art-Net / CRMX opsiyonel",
    ],
    specs: [
      { label: "Işık Kaynağı", value: "Philips 420W LL (opsiyonel Ushio 450W)" },
      { label: "CRI", value: "77" },
      { label: "Beam Açısı", value: "1.7°" },
      { label: "Lens Çapı", value: "180 mm" },
      { label: "Renk Sistemi", value: "12 dichroic + CMY + CTO" },
      { label: "Gobo", value: "17 sabit gobo" },
      { label: "Prizma", value: "6 çeşit · 15 efekt kombinasyonu" },
      { label: "Frost", value: "15° linear heavy frost" },
      { label: "Kontrol", value: "DMX512/RDM · 18/29/30CH" },
      { label: "Güç", value: "AC 100–240V · 600W" },
      { label: "Hareket", value: "Pan ∞ / Tilt 270° · 16-bit" },
      { label: "IP Koruma", value: "IP66" },
      { label: "Boyut", value: "386 × 290 × 684 mm" },
      { label: "Ağırlık", value: "26 kg" },
    ],
    useCases: ["Açık hava konser", "Mimari projeksiyon", "Festival", "Büyük arena"],
    faqs: [
      {
        q: "Beam King IP yağmurda kullanılabilir mi?",
        a: "IP66 gövde toz ve güçlü su jetlerine karşı koruma sağlar. Profesyonel dış mekân etkinliklerinde güvenle kullanılabilir.",
      },
      {
        q: "Pan Infinity ne anlama geliyor?",
        a: "Ünite sürekli dönüş yapabilir; kablo sarma limiti olmadan 360°+ pan hareketi mümkündür.",
      },
      {
        q: "Ağ üzerinden kontrol edilebilir mi?",
        a: "DMX512/RDM standarttır. Art-Net ve CRMX protokolleri opsiyonel olarak desteklenir.",
      },
    ],
    keywords: ["ip66 beam", "dış mekan moving head", "cmy beam", "açık hava aydınlatma"],
    ipRating: "IP66",
  },
  {
    slug: "blinder-400-ip",
    name: "Blinder 400 IP",
    shortName: "Blinder 400",
    category: "blinder-strobe",
    tagline: "Kompakt IP65 blinder · 2×200W LED",
    excerpt:
      "2×200W LED blinder; 50° beam, IP65 koruma ve -40°C'ye kadar çalışma ile dış mekân sahne ve mimari uygulamalar.",
    image: "/products/blinder-400-ip/image-03.jpg",
    imageAlt: "Blinder 400 IP profesyonel LED blinder",
    gallery: [
      "/products/blinder-400-ip/image-03.jpg",
      "/products/blinder-400-ip/image-01.jpg",
      "/products/blinder-400-ip/image-02.jpg",
      "/products/blinder-400-ip/image-04.jpg",
      "/products/blinder-400-ip/image-05.jpg",
      "/products/blinder-400-ip/image-06.jpg",
      "/products/blinder-400-ip/image-07.jpg",
      "/products/blinder-400-ip/image-08.jpg",
      "/products/blinder-400-ip/spec-sheet.png",
    ],
    intro:
      "Blinder 400 IP, kompakt gövdesinde yüksek çıkışlı blinder performansı sunan IP65 sınıfı bir LED ünitesidir. İki adet 200W LED modülü ile sahne önü aydınlatma, mimari vurgu ve stadyum efektleri için idealdir. OLED ekran, DMX512/RDM kontrolü ve geniş sıcaklık aralığı ile profesyonel prodüksiyonlara uyumludur.",
    highlights: [
      "2 × 200W LED (WW/CW/RGBW opsiyon)",
      "IP65 · -40°C ile 45°C çalışma",
      "50° beam · 93° field angle",
      "OLED ekran · DMX512/RDM",
      "Döküm alüminyum gövde · 6 kg",
    ],
    specs: [
      { label: "LED", value: "2 × 200W (WW/CW/RGBW opsiyon)" },
      { label: "Beam Açısı", value: "50° (15° optik lens ile)" },
      { label: "Field Açısı", value: "93°" },
      { label: "LED Ömrü", value: "50.000 saat" },
      { label: "Strobe", value: "1 – 20 Hz" },
      { label: "Kontrol", value: "DMX512/RDM · 4/8/5/6 CH" },
      { label: "Güç", value: "AC 110–240V · 400W" },
      { label: "IP Koruma", value: "IP65" },
      { label: "Çalışma Sıcaklığı", value: "-40°C ~ 45°C" },
      { label: "Boyut", value: "403 × 195 × 298 mm" },
      { label: "Ağırlık", value: "6 kg" },
    ],
    useCases: ["Sahne önü blinder", "Stadyum", "Mimari aydınlatma", "Dış mekân etkinlik"],
    faqs: [
      {
        q: "Blinder 400 IP RGBW versiyonu var mı?",
        a: "Evet. WW, CW, WW+CW ve RGBW LED konfigürasyonları mevcuttur. Projenize göre doğru versiyonu birlikte seçelim.",
      },
      {
        q: "DMX kanal modları nelerdir?",
        a: "RGBW için 4/8 kanal, WW için 1/5 kanal, WW+CW için 2/6 kanal modları desteklenir.",
      },
      {
        q: "Montaj nasıl yapılır?",
        a: "Omega bracket ile truss veya duvar montajı mümkündür. Güvenlik halatı bağlantı noktası standart olarak mevcuttur.",
      },
    ],
    keywords: ["blinder 400", "ip65 blinder", "led blinder", "sahne blinder"],
    ipRating: "IP65",
  },
  {
    slug: "blinder-800-ip",
    name: "Blinder 800 IP",
    shortName: "Blinder 800",
    category: "blinder-strobe",
    tagline: "4 lens yüksek güç blinder · IP65",
    excerpt:
      "4×200W LED, 800W toplam güç ve IP65 koruma ile büyük sahne ve açık hava blinder uygulamaları için profesyonel çözüm.",
    image: "/products/blinder-800-ip/image-01.jpg",
    imageAlt: "Blinder 800 IP 4 lens LED blinder",
    gallery: [
      "/products/blinder-800-ip/image-01.jpg",
      "/products/blinder-800-ip/image-02.jpg",
      "/products/blinder-800-ip/image-03.jpg",
      "/products/blinder-800-ip/image-04.jpg",
      "/products/blinder-800-ip/spec-sheet.png",
    ],
    intro:
      "Blinder 800 IP, dört adet 200W LED modülü ile toplam 800W çıkış gücü sunan üst segment bir blinder ünitesidir. Geniş 93° field açısı ve IP65 koruma sınıfı sayesinde stadyum, festival ve büyük açık hava prodüksiyonlarında güçlü ve homojen ışık demeti üretir.",
    highlights: [
      "4 × 200W LED modül",
      "800W toplam güç",
      "IP65 · döküm alüminyum gövde",
      "16/20 kanal RGBW kontrol",
      "OLED ekran · akıllı fan kontrolü",
    ],
    specs: [
      { label: "LED", value: "4 × 200W (WW/CW/RGBW opsiyon)" },
      { label: "Beam Açısı", value: "50° (15° optik lens ile)" },
      { label: "Field Açısı", value: "93°" },
      { label: "LED Ömrü", value: "50.000 saat" },
      { label: "Strobe", value: "1 – 20 Hz" },
      { label: "Kontrol", value: "DMX512/RDM · 16/20/8/12 CH" },
      { label: "Güç", value: "AC 110–240V · 800W" },
      { label: "IP Koruma", value: "IP65" },
      { label: "Boyut", value: "403 × 320 × 395 mm" },
      { label: "Ağırlık", value: "16 kg" },
    ],
    useCases: ["Büyük sahne", "Stadyum & arena", "Festival", "TV prodüksiyon"],
    faqs: [
      {
        q: "Blinder 400 ile 800 arasındaki fark nedir?",
        a: "Blinder 800 dört LED modülü ile iki kat güç ve daha geniş kapsama alanı sunar. Büyük sahne ve uzak izleme mesafeleri için önerilir.",
      },
      {
        q: "Dış mekânda kullanılabilir mi?",
        a: "IP65 koruma sınıfı ile yağmur ve toza karşı dayanıklıdır. -40°C ile 45°C arasında çalışır.",
      },
      {
        q: "Flight case seçeneği var mı?",
        a: "4-in-1 flight case paketleme seçeneği mevcuttur. Lojistik planlaması için teklif alabilirsiniz.",
      },
    ],
    keywords: ["blinder 800", "800w blinder", "ip65 led blinder"],
    ipRating: "IP65",
  },
  {
    slug: "diamond-line-1240-eco",
    name: "Diamond Line 1240 Eco",
    shortName: "Diamond Line",
    category: "led-bar",
    tagline: "Modüler linear LED bar · enerji verimli",
    excerpt:
      "Birleştirilebilir linear LED bar; konser, fuar ve mimari çizgi aydınlatma için kompakt, modüler ve enerji verimli çözüm.",
    image: "/products/diamond-line-1240-eco/image-01.jpg",
    imageAlt: "Diamond Line 1240 Eco linear LED bar aydınlatma",
    gallery: [
      "/products/diamond-line-1240-eco/image-01.jpg",
      "/products/diamond-line-1240-eco/image-03.jpg",
      "/products/diamond-line-1240-eco/image-04.jpg",
      "/products/diamond-line-1240-eco/image-05.jpg",
    ],
    videos: ["/products/diamond-line-1240-eco/video-02.mp4"],
    intro:
      "Diamond Line 1240 Eco, modüler yapısıyla uzun mesafe linear aydınlatma ihtiyaçlarına cevap veren enerji verimli bir LED bar serisidir. Birimler birbirine kolayca eklenerek farklı uzunluklarda çizgi aydınlatma oluşturulabilir. Kompakt gövde, profesyonel power/data konnektörleri ve truss montaj uyumluluğu ile fuar standları, konser dekorları ve mimari vurgu uygulamalarında kullanılır.",
    highlights: [
      "Modüler · birleştirilebilir tasarım",
      "RGBW tam renk kontrolü",
      "Tilt hareket · zoom efekt",
      "Art-Net ağ kontrolü",
      "Enerji verimli Eco serisi",
    ],
    specs: [
      { label: "Tip", value: "Linear LED bar · modüler" },
      { label: "LED", value: "12 × 40W RGBW 4in1" },
      { label: "Güç", value: "~500W (tahmini)" },
      { label: "Voltaj", value: "AC 100–240V 50/60Hz" },
      { label: "Kontrol", value: "DMX512 · Art-Net" },
      { label: "Özellikler", value: "Tilt · zoom · modüler birleştirme" },
      { label: "Montaj", value: "Truss / zemin · omega bracket" },
      { label: "Konnektör", value: "PowerCON in/out" },
      { label: "Kullanım", value: "İç ve kapalı alan öncelikli" },
    ],
    useCases: ["Fuar standı", "Konser dekor", "Mimari çizgi aydınlatma", "Sahne zemin efekti"],
    faqs: [
      {
        q: "Kaç metre uzunluğa kadar birleştirilebilir?",
        a: "Modüler yapı sayesinde proje ihtiyacına göre birden fazla ünite zincirlenir. Kesin konfigürasyon için proje ölçünüzü paylaşın.",
      },
      {
        q: "Diamond Line dış mekânda kullanılır mı?",
        a: "Öncelikli kullanım alanı kapalı mekân ve kontrollü ortamlardır. Dış mekân projeleri için IP65 alternatiflerimizi inceleyebilirsiniz.",
      },
      {
        q: "DMX adresleme nasıl yapılır?",
        a: "Her modül bağımsız DMX adresi alabilir veya pixel mapping ile ağ üzerinden kontrol edilebilir.",
      },
    ],
    keywords: ["led bar", "linear led", "modüler led bar", "fuar aydınlatma"],
  },
  {
    slug: "led-beam-wash-150",
    name: "LED Beam Wash 150",
    shortName: "Beam Wash 150",
    category: "moving-head-wash",
    tagline: "7×40W RGBW · 7°–45° zoom beam/wash",
    excerpt:
      "Kompakt 6 kg gövdede 7×40W RGBW LED, motorlu zoom ve beam/wash çift mod; kulüp ve küçük sahne için çok yönlü moving head.",
    image: "/products/led-beam-wash-150/image-01.jpg",
    imageAlt: "LED Beam Wash 150 zoom moving head",
    gallery: [
      "/products/led-beam-wash-150/image-01.jpg",
      "/products/led-beam-wash-150/image-02.jpg",
      "/products/led-beam-wash-150/image-03.jpg",
      "/products/led-beam-wash-150/image-04.jpg",
      "/products/led-beam-wash-150/image-05.jpg",
      "/products/led-beam-wash-150/image-06.jpg",
      "/products/led-beam-wash-150/image-07.jpg",
      "/products/led-beam-wash-150/image-08.jpg",
      "/products/led-beam-wash-150/spec-sheet.png",
    ],
    pdf: "/downloads/led-beam-wash-150/katalog.pdf",
    intro:
      "LED Beam Wash 150, kompakt boyutlarına rağmen güçlü ışık çıkışı sunan çok yönlü bir moving head ünitesidir. 7 adet 40W RGBW 4in1 LED, 7° ile 45° arası motorlu zoom ve beam/wash çift kullanım modu ile bar, kulüp ve küçük-orta ölçekli sahne uygulamalarında esneklik sağlar.",
    highlights: [
      "7 × 40W RGBW 4in1 LED",
      "7° – 45° motorlu zoom",
      "2800K – 8000K renk sıcaklığı",
      "DMX512/RDM · 17 kanal",
      "Sadece 6 kg · IP20",
    ],
    specs: [
      { label: "LED", value: "7 × 40W RGBW 4in1" },
      { label: "LED Ömrü", value: "50.000 saat" },
      { label: "Zoom", value: "7° – 45°" },
      { label: "Renk Sıcaklığı", value: "2800K – 8000K" },
      { label: "Strobe", value: "1 – 25 Hz" },
      { label: "Kontrol", value: "DMX512/RDM · 17CH" },
      { label: "Güç", value: "AC 90–240V · 250W" },
      { label: "Hareket", value: "Pan 540° / Tilt 270°" },
      { label: "IP Koruma", value: "IP20" },
      { label: "Boyut", value: "195 × 166 × 334 mm" },
      { label: "Ağırlık", value: "6 kg" },
    ],
    useCases: ["Bar & kulüp", "Düğün & etkinlik", "Küçük konser", "Showroom"],
    faqs: [
      {
        q: "Beam ve wash modu arasında nasıl geçiş yapılır?",
        a: "Motorlu zoom sistemi 7° dar beam ile 45° geniş wash arasında sürekli ayarlanabilir. DMX üzerinden zoom kanalı ile kontrol edilir.",
      },
      {
        q: "Ses aktif mod var mı?",
        a: "Evet. DMX, master-slave, auto run ve müzik tetiklemeli modlar desteklenir.",
      },
      {
        q: "Kulüp tavan montajına uygun mu?",
        a: "6 kg ağırlığı ve kompakt boyutları ile düşük tavanlı mekânlara uygundur. Güvenlik halatı kullanımı zorunludur.",
      },
    ],
    keywords: ["beam wash 150", "zoom moving head", "rgbw moving head", "kulüp aydınlatma"],
    ipRating: "IP20",
  },
  {
    slug: "strike-pro-ip",
    name: "Strike Pro IP",
    shortName: "Strike Pro",
    category: "blinder-strobe",
    tagline: "Strobe + wash 2in1 · 71.620 lumen · IP65",
    excerpt:
      "784 RGB + 392 cool-white LED, 180° tilt ve 1400W güç ile büyük sahne strobe/wash kombinasyonu; flicker-free TV çekimi uyumlu.",
    image: "/products/strike-pro-ip/image-01.jpg",
    imageAlt: "Strike Pro IP profesyonel strobe aydınlatma",
    gallery: [
      "/products/strike-pro-ip/image-01.jpg",
      "/products/strike-pro-ip/image-02.jpg",
      "/products/strike-pro-ip/image-03.jpg",
      "/products/strike-pro-ip/image-04.jpg",
      "/products/strike-pro-ip/image-05.jpg",
      "/products/strike-pro-ip/spec-sheet.png",
    ],
    pdf: "/downloads/strike-pro-ip/katalog.pdf",
    intro:
      "Strike Pro IP, strobe ve wash fonksiyonlarını tek gövdede birleştiren yüksek çıkışlı bir LED ünitesidir. 71.620 lumen'e kadar çıkış, 180° elektrikli tilt ve IP65 koruma ile büyük konser, festival ve TV prodüksiyonlarında güçlü efektler üretir. 25 kHz'e kadar ayarlanabilir PWM frekansı sayesinde kamera çekimlerinde titreme oluşturmaz.",
    highlights: [
      "71.620 lumen'e kadar çıkış",
      "784 RGB + 392 cool-white LED",
      "180° elektrikli tilt",
      "IP65 · flicker-free 25 kHz PWM",
      "DMX/Art-Net/sACN · 97 kanala kadar",
    ],
    specs: [
      { label: "Panel LED", value: "784 × 1.5W RGB 3in1 (14 segment)" },
      { label: "Tube LED", value: "392 × 2W cool-white (28 segment)" },
      { label: "Lumen", value: "71.620 lm'ye kadar" },
      { label: "Renk Sıcaklığı", value: "~6000K" },
      { label: "Beam Açısı", value: "98°×57° / 95°×50°" },
      { label: "Tilt", value: "180° elektrikli" },
      { label: "Strobe", value: "0 – 30 Hz" },
      { label: "Kontrol", value: "DMX/RDM/Art-Net/sACN · 8–97CH" },
      { label: "Güç", value: "100–240V AC · 1400W" },
      { label: "IP Koruma", value: "IP65" },
      { label: "Boyut", value: "406 × 334 × 147 mm" },
      { label: "Ağırlık", value: "10.8 kg" },
    ],
    useCases: ["Büyük konser", "Festival", "TV & film çekimi", "Açık hava etkinlik"],
    faqs: [
      {
        q: "TV çekiminde titreme yapar mı?",
        a: "25 kHz'e kadar ayarlanabilir PWM frekansı ile flicker-free çekim uyumludur. Stüdyo ve yayın prodüksiyonlarında güvenle kullanılır.",
      },
      {
        q: "Pixel kontrolü mümkün mü?",
        a: "Evet. 97 kanal modunda segment bazlı pixel kontrol desteklenir.",
      },
      {
        q: "Zemin ve truss montajı var mı?",
        a: "Kauçuk ayak ile zemin kullanımı ve omega bracket ile truss asma seçenekleri mevcuttur.",
      },
    ],
    keywords: ["strike pro", "ip65 strobe", "led strobe", "konser strobe"],
    ipRating: "IP65",
  },
  {
    slug: "tornado-ip",
    name: "Tornado IP",
    shortName: "Tornado",
    category: "led-bar",
    tagline: "5 başlı moving LED bar · IP65",
    excerpt:
      "5×120W RGBWL + 120×0.5W RGB halka LED, 3°–30° zoom ve IP65 koruma ile dış mekân moving bar efektleri.",
    image: "/products/tornado-ip/image-01.jpg",
    imageAlt: "Tornado IP 5 başlı moving LED bar",
    gallery: [
      "/products/tornado-ip/image-01.jpg",
      "/products/tornado-ip/image-02.jpg",
      "/products/tornado-ip/image-03.jpg",
      "/products/tornado-ip/image-04.jpg",
      "/products/tornado-ip/image-05.jpg",
      "/products/tornado-ip/image-06.jpg",
      "/products/tornado-ip/image-07.jpg",
      "/products/tornado-ip/image-08.jpg",
      "/products/tornado-ip/spec-sheet.png",
    ],
    pdf: "/downloads/tornado-ip/katalog.pdf",
    intro:
      "Tornado IP, beş bağımsız moving head'li yenilikçi bir LED bar ünitesidir. Her başta 120W RGBWL LED ve etrafında 24 adet RGB halka LED bulunur. 3°–30° motorlu zoom, IP65 koruma ve 13.000 lumen çıkış ile açık hava festival, mimari ve büyük sahne prodüksiyonlarında çarpıcı efektler oluşturur.",
    highlights: [
      "5 × 120W RGBWL + 120 × 0.5W RGB halka",
      "13.000 lumen çıkış",
      "3° – 30° motorlu zoom",
      "IP65 · dış mekân kullanımı",
      "DMX · 21–170 kanal modları",
    ],
    specs: [
      { label: "Ana LED", value: "5 × 120W RGBWL 4in1" },
      { label: "Halka LED", value: "120 × 0.5W RGB" },
      { label: "Lumen", value: "13.000 lm" },
      { label: "Beam Açısı", value: "3° – 30°" },
      { label: "Field Açısı", value: "4° – 35°" },
      { label: "Kontrol", value: "DMX512/RDM · 21–170CH" },
      { label: "Güç", value: "AC 100–240V · 800W" },
      { label: "Hareket", value: "Pan 59° / Tilt 221° · 16-bit" },
      { label: "IP Koruma", value: "IP65" },
      { label: "Boyut", value: "1019 × 206 × 396 mm" },
      { label: "Ağırlık", value: "30 kg" },
    ],
    useCases: ["Açık hava festival", "Büyük konser", "Mimari mapping", "Fuar ana sahne"],
    faqs: [
      {
        q: "Her baş bağımsız kontrol edilebilir mi?",
        a: "Evet. 170 kanal modunda her baş ve halka LED'ler bağımsız kontrol edilebilir.",
      },
      {
        q: "Tornado IP dış mekânda dayanıklı mı?",
        a: "IP65 koruma sınıfı toz ve suya karşı koruma sağlar. Profesyonel dış mekân etkinliklerinde kullanılabilir.",
      },
      {
        q: "Montaj ağırlığı nedir?",
        a: "Ünite 30 kg ağırlığındadır. Truss kapasitesi ve güvenlik halatı kullanımı zorunludur.",
      },
    ],
    keywords: ["tornado ip", "moving led bar", "ip65 led bar", "5 head bar"],
    ipRating: "IP65",
  },
  {
    slug: "wash-3715",
    name: "Wash 3715",
    shortName: "Wash 3715",
    category: "moving-head-wash",
    tagline: "37×15W RGBW · 10°–60° zoom wash",
    excerpt:
      "37 adet 15W RGBW high CRI LED, 10°–60° elektronik zoom ve 500W güç ile profesyonel wash moving head.",
    image: "/products/wash-3715/image-01.jpg",
    imageAlt: "Wash 3715 profesyonel wash moving head",
    gallery: [
      "/products/wash-3715/image-01.jpg",
      "/products/wash-3715/image-02.jpg",
      "/products/wash-3715/image-03.jpg",
      "/products/wash-3715/image-04.jpg",
      "/products/wash-3715/spec-sheet.png",
    ],
    intro:
      "Wash 3715, yüksek CRI'lı 37 adet 15W RGBW LED ile homojen ve canlı renk yıkama efektleri üreten profesyonel bir wash moving head'dir. 10° ile 60° arası elektronik zoom, halka kontrolü ve zengin DMX kanal seçenekleri ile konser, tiyatro ve kurumsal etkinliklerde üstün renk performansı sunar.",
    highlights: [
      "37 × 15W RGBW high CRI LED",
      "10° – 60° elektronik zoom",
      "Halka kontrolü · renk makro efektleri",
      "DMX/RDM · 37 kanala kadar",
      "LCD ekran · firmware güncelleme",
    ],
    specs: [
      { label: "LED", value: "37 × 15W RGBW 4in1 high CRI" },
      { label: "Zoom", value: "10° – 60° elektronik" },
      { label: "Dimmer", value: "0–100% smooth" },
      { label: "Strobe", value: "Değişken hız" },
      { label: "Kontrol", value: "DMX/RDM · 37/21/15/10/11/25 CH" },
      { label: "Güç", value: "AC 100–240V · 500W" },
      { label: "Hareket", value: "Pan 540° / Tilt 270° · 16-bit" },
      { label: "IP Koruma", value: "IP20" },
      { label: "Boyut", value: "430 × 246 × 512 mm" },
      { label: "Ağırlık", value: "19.5 kg" },
    ],
    useCases: ["Konser & festival", "Tiyatro", "Kurumsal etkinlik", "TV stüdyosu"],
    faqs: [
      {
        q: "Wash 3715 tiyatro için uygun mu?",
        a: "Yüksek CRI LED'ler ve sessiz fan modu ile tiyatro ve stüdyo uygulamalarına uygundur.",
      },
      {
        q: "Kaç DMX kanal modu var?",
        a: "37, 21, 15, 10, 11 ve 25 kanal modları desteklenir. Proje ihtiyacına göre en verimli mod seçilir.",
      },
      {
        q: "Zoom sahne üzerinde ne işe yarar?",
        a: "10° dar açıda noktasal vurgu, 60° geniş açıda sahne yıkama efekti üretir. Tek ünite ile çok yönlü kullanım sağlar.",
      },
    ],
    keywords: ["wash 3715", "37x15w wash", "rgbw moving head", "wash zoom"],
    ipRating: "IP20",
  },
];

export const products: Product[] = catalog.map(publishProduct);

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory) {
  return products.filter((p) => p.category === category);
}

const galleryAltLabels = [
  "sahne kurulumu",
  "canlı performans görüntüsü",
  "ışık efekti",
  "truss montajı",
  "sahne aydınlatma detayı",
  "etkinlik aydınlatması",
  "ürün yakın çekim",
  "efekt gösterimi",
  "profesyonel uygulama",
];

export function getGalleryAlt(
  product: Pick<Product, "name" | "imageAlt" | "gallery">,
  index: number,
): string {
  const src = product.gallery[index];
  if (src?.endsWith("/spec-sheet.png")) {
    return `${product.name} teknik özellik sayfası — SESAJANS`;
  }
  if (index === 0) return product.imageAlt;
  const label = galleryAltLabels[index % galleryAltLabels.length];
  return `${product.name} ${label} — SESAJANS profesyonel sahne aydınlatma`;
}
