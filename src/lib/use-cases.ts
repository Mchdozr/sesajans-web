import type { ProductCategory } from "./categories";

export type UseCase = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  intro: string;
  body: string;
  highlights: string[];
  recommendedProductSlugs: string[];
  categorySlug: ProductCategory;
  relatedBlogSlugs: string[];
  faqs: { q: string; a: string }[];
  keywords: string[];
};

export const useCases: UseCase[] = [
  {
    slug: "konser-festival",
    title: "Konser ve Festival Aydınlatması",
    seoTitle: "Konser ve Festival Sahne Aydınlatması",
    seoDescription:
      "Açık hava ve kapalı mekân konser, festival ana sahne aydınlatması. IP66 beam, blinder, strobe ve wash çözümleri.",
    eyebrow: "Konser & Festival",
    intro:
      "Binlerce seyircili konser ve çok günlük festival prodüksiyonlarında beam, wash, blinder ve strobe katmanları sahne derinliği ve enerji yaratır.",
    body: "Ana truss hattında **Beam King IP** ve **Beam King 380** ile uzun mesafe vurgu; yan kulelerde **Wash 3715** ile homojen yıkama; ön hatta **Blinder 800 IP** ve **Strike Pro IP** ile ritim senkronizasyonu kurulur. Dış mekân prodüksiyonlarında IP66 koruma, soğuk iklim fan profili ve hızlı servis erişimi operasyonel süreklilik sağlar. SESAJANS; fixture listesi, DMX universe planı, programlama ve saha testi dahil anahtar teslim kurulum sunar.",
    highlights: [
      "IP66 açık hava beam ve blinder portföyü",
      "Truss ağırlık ve güç bütçesi danışmanlığı",
      "DMX / Art-Net adresleme ve konsol programlama",
      "Festival çoklu sahne koordinasyonu",
    ],
    recommendedProductSlugs: ["beam-king-ip", "blinder-800-ip", "wash-3715", "strike-pro-ip"],
    categorySlug: "moving-head-beam",
    relatedBlogSlugs: ["moving-head-konser-kurulumu", "festival-aydinlatma-butce-planlama", "ip66-dis-mekan-beam-secimi"],
    faqs: [
      { q: "Açık hava konserinde kaç beam gerekir?", a: "Sahne genişliği ve seyirci mesafesine göre değişir; tipik ana sahne için 8–24 beam aralığı planlanır. Ücretsiz keşif için iletişime geçin." },
      { q: "Festival kurulum süresi ne kadar?", a: "Sahne büyüklüğüne göre 1–3 gün montaj ve programlama öngörülür." },
    ],
    keywords: ["konser aydınlatma", "festival sahne ışığı", "açık hava beam"],
  },
  {
    slug: "gece-kulubu",
    title: "Gece Kulübü ve Bar Aydınlatması",
    seoTitle: "Gece Kulübü ve Bar Sahne Aydınlatması",
    seoDescription:
      "Kompakt kulüp sahnesi için beam, wash ve efekt moving head çözümleri. DMX programlama ve devreye alma.",
    eyebrow: "Gece Kulübü",
    intro:
      "Düşük tavanlı mekânlarda kompakt fixture'lar, hızlı hareket ve yoğun renk karışımı atmosferin temelidir.",
    body: "**LED Beam Wash 150** ve **Beam King 380** kombinasyonu küçük sahne alanlarında maksimum etki sağlar. **Tornado IP** çok başlı efekt ünitesi dans pisti ve VIP alan vurgusu için kullanılır. Sessiz fan modu, kompakt truss adaptörleri ve hazır DMX şov kütüphanesi ile hızlı devreye alma mümkündür.",
    highlights: ["Kompakt moving head seçenekleri", "Hazır efekt programları", "Sessiz çalışma profili", "Kulüp DMX eğitimi"],
    recommendedProductSlugs: ["led-beam-wash-150", "beam-king-380", "tornado-ip"],
    categorySlug: "moving-head-beam",
    relatedBlogSlugs: ["moving-head-beam-rehberi", "dmx-aydinlatma-kurulumu"],
    faqs: [
      { q: "Küçük kulüp için minimum ekipman?", a: "4–8 moving head (beam + wash karışımı) çoğu 200 m² altı mekân için yeterlidir." },
    ],
    keywords: ["gece kulübü aydınlatma", "kulüp moving head", "bar sahne ışığı"],
  },
  {
    slug: "dugun-etkinlik",
    title: "Düğün ve Özel Etkinlik Aydınlatması",
    seoTitle: "Düğün ve Özel Etkinlik Aydınlatması",
    seoDescription:
      "Düğün, nişan ve kurumsal davet aydınlatması. Wash, LED bar ve dekoratif efekt çözümleri.",
    eyebrow: "Düğün & Etkinlik",
    intro:
      "Özel günlerde sıcak renk tonları, yumuşak wash geçişleri ve dekoratif linear aydınlatma misafir deneyimini yükseltir.",
    body: "**Wash 3715** ile salon genel aydınlatması; **Diamond Line 1240 Eco** ile sahne arkası ve dekor çizgileri; **LED Beam Wash 150** ile dans pisti vurgusu sağlanır. Dimmer kontrollü geçişler, kablosuz DMX ve hızlı kurulum-söküm paketleri düğün organizatörleri için idealdir.",
    highlights: ["Sıcak beyaz ve pastel renk paleti", "Hızlı kurulum paketleri", "Salon ve açık alan seçenekleri", "Operatör desteği"],
    recommendedProductSlugs: ["wash-3715", "diamond-line-1240-eco", "led-beam-wash-150"],
    categorySlug: "moving-head-wash",
    relatedBlogSlugs: ["sahne-aydinlatma-rehberi"],
    faqs: [
      { q: "Düğün salonu için kiralama mümkün mü?", a: "Evet, etkinlik tarihine göre kiralama ve operatörlü paket sunuyoruz." },
    ],
    keywords: ["düğün aydınlatma", "etkinlik wash", "salon sahne ışığı"],
  },
  {
    slug: "tv-studyo",
    title: "TV ve Stüdyo Aydınlatması",
    seoTitle: "TV ve Stüdyo Sahne Aydınlatması",
    seoDescription:
      "Flicker-free, yüksek CRI wash moving head çözümleri. TV yayını ve stüdyo prodüksiyonları için.",
    eyebrow: "TV & Stüdyo",
    intro: "Yayın ortamlarında titreme önleme, yüksek renk doğruluğu ve sessiz fan kritik gereksinimlerdir.",
    body: "**Wash 3715** RGBW zoom wash ünitesi stüdyo ana ışık ve fill katmanı olarak kullanılır. Yüksek frekanslı LED sürücü, düşük gürültü fan profili ve hassas dimmer eğrisi yayın kalitesini korur. Truss entegrasyonu ve DMX/RDM ağ yönetimi ile çok kamera prodüksiyonlarına uyumludur.",
    highlights: ["Flicker-free LED sürücü", "Yüksek CRI renk karışımı", "Sessiz fan modu", "RDM cihaz yönetimi"],
    recommendedProductSlugs: ["wash-3715", "led-beam-wash-150"],
    categorySlug: "moving-head-wash",
    relatedBlogSlugs: ["sahne-aydinlatma-rehberi", "dmx-aydinlatma-kurulumu"],
    faqs: [
      { q: "TV yayını için flicker testi yapılıyor mu?", a: "Evet, kurulum sonrası kamera testi ile titreme kontrolü yapılır." },
    ],
    keywords: ["stüdyo aydınlatma", "tv wash", "flicker free moving head"],
  },
  {
    slug: "fuar-lansman",
    title: "Fuar ve Lansman Aydınlatması",
    seoTitle: "Fuar Standı ve Lansman Aydınlatması",
    seoDescription:
      "Fuar standı, ürün lansmanı ve kurumsal etkinlik linear LED bar ve blinder çözümleri.",
    eyebrow: "Fuar & Lansman",
    intro: "Marka alanını öne çıkaran linear bar, spot vurgu ve dinamik renk geçişleri ziyaretçi dikkatini çeker.",
    body: "**Diamond Line 1240 Eco** birleştirilebilir yapısıyla stand çevresi ve ürün vitrininde linear aydınlatma sağlar. **Blinder 400 IP** ve **LED Beam Wash 150** ile sahne sunumu ve konuşmacı vurgusu oluşturulur. Hızlı montaj, taşınabilir kasa ve önceden programlanmış şovlar fuar takvimine uyum sağlar.",
    highlights: ["Modüler LED bar sistemleri", "Hızlı stand kurulumu", "Marka renk programlama", "Lansman sahne paketleri"],
    recommendedProductSlugs: ["diamond-line-1240-eco", "blinder-400-ip", "led-beam-wash-150"],
    categorySlug: "led-bar",
    relatedBlogSlugs: ["led-bar-sahne-rehberi", "sahne-aydinlatma-rehberi"],
    faqs: [
      { q: "Fuar standı için minimum süre?", a: "Stand alanına göre 4–8 saat kurulum yeterlidir; önceden programlama ile süre kısalır." },
    ],
    keywords: ["fuar aydınlatma", "lansman led bar", "stand aydınlatması"],
  },
  {
    slug: "tiyatro-salon",
    title: "Tiyatro ve Salon Aydınlatması",
    seoTitle: "Tiyatro ve Konferans Salonu Aydınlatması",
    seoDescription:
      "Tiyatro, opera ve konferans salonları için sessiz wash moving head ve hassas dimmer çözümleri.",
    eyebrow: "Tiyatro & Salon",
    intro: "Sahne sanatlarında homojen wash, geniş zoom aralığı ve akustik uyumlu sessiz çalışma önceliklidir.",
    body: "**Wash 3715** 37×15W RGBW zoom wash ile 400–1200 kişilik salonlarda eşit aydınlatma sağlanır. Geniş pan/tilt açısı, yumuşak edge ve preset sahne görünümleri dramatik geçişleri destekler. FOH konsol entegrasyonu ve operatör eğitimi dahil projeler sunuyoruz.",
    highlights: ["Sessiz fan ve düşük titreşim", "Geniş zoom wash açısı", "Preset sahne görünümleri", "Operatör eğitimi"],
    recommendedProductSlugs: ["wash-3715"],
    categorySlug: "moving-head-wash",
    relatedBlogSlugs: ["wash-moving-head-rehberi", "sahne-aydinlatma-rehberi"],
    faqs: [
      { q: "Salon tavan yüksekliği yeterli değilse?", a: "Kompakt **LED Beam Wash 150** alternatif olarak değerlendirilir." },
    ],
    keywords: ["tiyatro aydınlatma", "salon wash", "sahne yıkama ışığı"],
  },
  {
    slug: "mimari-aydinlatma",
    title: "Mimari ve Dış Cephe Aydınlatması",
    seoTitle: "Mimari ve Dış Cephe Aydınlatma Çözümleri",
    seoDescription:
      "Bina cephesi, anıt ve açık alan mimari vurgu için IP65/IP66 blinder ve beam çözümleri.",
    eyebrow: "Mimari",
    intro: "Yapısal hatları vurgulayan uzun mesafe beam ve yüksek çıkışlı blinder dış mekân projelerinin temelidir.",
    body: "**Beam King IP** uzun mesafe dar demet ile cephe hatlarını vurgular; **Blinder 800 IP** geniş alan yıkama ve etkinlik vurgusu sağlar. IP66 koruma, UV dayanımlı lens ve uzaktan DMX kontrolü ile kalıcı kurulumlara uygundur.",
    highlights: ["IP66 dış mekân dayanımı", "Uzun mesafe beam projeksiyon", "Kalıcı ve geçici kurulum", "Uzaktan izleme ve bakım"],
    recommendedProductSlugs: ["beam-king-ip", "blinder-800-ip", "blinder-400-ip"],
    categorySlug: "blinder-strobe",
    relatedBlogSlugs: ["ip66-beam-rehberi", "ip66-dis-mekan-beam-secimi"],
    faqs: [
      { q: "Kalıcı mimari kurulum yapılıyor mu?", a: "Evet, statik montaj, kablolama ve bakım planı dahil projeler üretiyoruz." },
    ],
    keywords: ["mimari aydınlatma", "dış cephe ışık", "ip66 mimari"],
  },
  {
    slug: "stadyum-arena",
    title: "Stadyum ve Arena Aydınlatması",
    seoTitle: "Stadyum ve Arena Sahne Aydınlatması",
    seoDescription:
      "Büyük kapasiteli stadyum ve arena konserleri için yüksek güç beam, blinder ve wash çözümleri.",
    eyebrow: "Stadyum & Arena",
    intro:
      "10.000+ seyircili açık ve kapalı arena prodüksiyonlarında uzun mesafe beam, yüksek çıkış blinder ve geniş wash katmanları zorunludur.",
    body: "Ana truss'ta **Beam King IP** uzun atış mesafesiyle sahne merkezini vurgular; ön hatta **Blinder 800 IP** seyirci alanına güçlü patlama efekti sağlar. **Wash 3715** tribün ve sahne genel aydınlatmasında homojen renk yıkaması üretir. Art-Net ağ altyapısı, yedek universe ve hızlı servis planı arena operasyonlarında kritiktir.",
    highlights: [
      "Uzun mesafe IP66 beam portföyü",
      "Yüksek güç blinder ön hat",
      "Art-Net çoklu universe planı",
      "Arena referans deneyimi",
    ],
    recommendedProductSlugs: ["beam-king-ip", "blinder-800-ip", "wash-3715", "strike-pro-ip"],
    categorySlug: "moving-head-beam",
    relatedBlogSlugs: ["arena-stadyum-aydinlatma-rehberi", "konser-aydinlatma-rehberi", "festival-aydinlatma-butce-planlama"],
    faqs: [
      { q: "Stadyum kurulumu kaç gün sürer?", a: "Sahne ölçeğine göre 3–7 gün montaj ve programlama planlanır." },
      { q: "Yağmurda çalışır mı?", a: "IP66 modeller yağmur ve toz koşullarında güvenle çalışır." },
    ],
    keywords: ["stadyum aydınlatma", "arena konser ışığı", "büyük sahne beam"],
  },
  {
    slug: "aydinlatma-kiralama",
    title: "Aydınlatma Kiralama Hizmeti",
    seoTitle: "Sahne Aydınlatma Kiralama — Etkinlik Paketleri",
    seoDescription:
      "Konser, düğün ve kurumsal etkinlik için moving head kiralama. Operatörlü ve operatörsüz paketler.",
    eyebrow: "Kiralama",
    intro:
      "Tek seferlik etkinlikler için satın alma yerine kiralama ekonomik ve pratik bir seçenektir.",
    body: "SESAJANS stoktan beam, wash, blinder, strobe ve LED bar kiralama paketleri sunar. Paket içeriği etkinlik türüne göre özelleştirilir; DMX programlama, operatör ve lojistik dahil anahtar teslim çözümler mevcuttur. Kurulum-söküm süreleri düğün ve fuar takvimlerine göre planlanır.",
    highlights: ["Günlük / haftalık kiralama", "Operatörlü paket seçenekleri", "Hızlı kurulum-söküm", "Stoktan anında rezervasyon"],
    recommendedProductSlugs: ["beam-king-380", "wash-3715", "led-beam-wash-150", "diamond-line-1240-eco"],
    categorySlug: "moving-head-wash",
    relatedBlogSlugs: ["festival-aydinlatma-butce-planlama", "sahne-aydinlatma-rehberi"],
    faqs: [
      { q: "Minimum kiralama süresi?", a: "Çoğu etkinlik için 1 gün kiralama yeterlidir; festival paketleri çok günlük planlanır." },
      { q: "Operatör dahil mi?", a: "İsteğe bağlı operatörlü paketler sunuyoruz." },
    ],
    keywords: ["aydınlatma kiralama", "moving head kiralama", "etkinlik ışık kiralama"],
  },
];

export const useCaseSlugs = useCases.map((u) => u.slug);

export function getUseCase(slug: string): UseCase | undefined {
  return useCases.find((u) => u.slug === slug);
}
