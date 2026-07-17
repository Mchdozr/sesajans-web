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
    seoTitle: "Beam King 380 vs Beam King IP — Hangisini Almalısınız? | Ücretsiz Teklif",
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
    seoTitle: "Wash 3715 vs LED Beam Wash 150 — Hangisini Almalısınız? | Ücretsiz Teklif",
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
    seoTitle: "Blinder 400 IP vs Blinder 800 IP — Hangisini Almalısınız? | Ücretsiz Teklif",
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
    seoTitle: "Beam King IP vs Tornado IP — Hangisini Almalısınız? | Ücretsiz Teklif",
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
  {
    slug: "strike-pro-ip-vs-blinder-800-ip",
    path: "/karsilastirma/strike-pro-ip-vs-blinder-800-ip",
    seoTitle: "Strike Pro IP vs Blinder 800 IP — Hangisini Almalısınız? | Ücretsiz Teklif",
    seoDescription:
      "Strobe/wash hibrit Strike Pro IP ile yüksek güç Blinder 800 IP farkları. Festival ve stadyum ön hat seçimi.",
    title: "Strike Pro IP vs Blinder 800 IP",
    description: "Hibrit strobe/wash ile klasik yüksek güç blinder arasında seçim rehberi.",
    intro:
      "Strike Pro IP tek gövdede strobe, wash ve pixel efektini birleştirir; RGB panel ve cool-white tüpleriyle çok katmanlı programlamaya uygundur. Blinder 800 IP ise dört lensli klasik blinder mimarisiyle maksimum ön hat vurgusu ve seyirci patlaması üretir.",
    productASlug: "strike-pro-ip",
    productBSlug: "blinder-800-ip",
    rows: [
      ["Tip", "Strobe + wash 2in1", "4 lens blinder"],
      ["LED", "784 RGB + 392 CW", "4 × 200W (WW/CW/RGBW)"],
      ["Çıkış", "71.620 lm'ye kadar", "800W yüksek güç"],
      ["Tilt", "180° elektrikli", "Sabit (bracket açısı)"],
      ["Pixel kontrol", "97 kanala kadar segment", "16/20 kanal RGBW"],
      ["Koruma", "IP65", "IP65"],
      ["Ağırlık", "10.8 kg", "16 kg"],
    ],
    faqs: [
      {
        q: "TV çekimli festivalde hangisi öncelikli?",
        a: "Strike Pro IP 25 kHz flicker-free PWM ile kamera uyumludur; yayınlı işlerde öncelik ondadır. Blinder 800 IP seyirci vurgusu için eklenir.",
      },
      {
        q: "İkisi aynı hatta birlikte kullanılır mı?",
        a: "Evet. Ön truss'ta blinder + strobe katmanı klasik konser reçetesidir; drop anlarında birlikte tetiklenir.",
      },
    ],
    keywords: ["strike pro ip", "blinder 800 ip", "strobe blinder karşılaştırma", "festival ön hat"],
  },
  {
    slug: "diamond-line-1240-eco-vs-tornado-ip",
    path: "/karsilastirma/diamond-line-1240-eco-vs-tornado-ip",
    seoTitle: "Diamond Line 1240 Eco vs Tornado IP — Hangisini Almalısınız? | Ücretsiz Teklif",
    seoDescription:
      "Sabit modüler LED bar ile 5 başlı moving LED bar farkları. Dekor, fuar ve festival için LED bar seçimi.",
    title: "Diamond Line 1240 Eco vs Tornado IP",
    description: "Sabit çizgi aydınlatma ile hareketli çok başlı bar arasında seçim.",
    intro:
      "Diamond Line 1240 Eco modüler yapısıyla uzun kesintisiz çizgiler kurarak dekor ve mimari vurguda öne çıkar. Tornado IP ise beş bağımsız hareketli başı, zoom ve halka LED'leriyle dinamik şov efektleri üretir.",
    productASlug: "diamond-line-1240-eco",
    productBSlug: "tornado-ip",
    rows: [
      ["Tip", "Sabit linear LED bar", "5 başlı moving bar"],
      ["LED", "12 × 40W RGBW", "5 × 120W RGBWL + 120 RGB halka"],
      ["Hareket", "Tilt (sınırlı)", "Pan 59° / Tilt 221° her başta"],
      ["Zoom", "Sabit optik", "3° – 30° motorlu"],
      ["Koruma", "Kapalı alan öncelikli", "IP65 dış mekân"],
      ["Ağırlık", "Modül başına hafif", "30 kg"],
      ["İdeal görev", "Dekor çizgisi, stand", "Şov efekti, festival"],
    ],
    faqs: [
      {
        q: "Fuar standı için hangisi?",
        a: "Kesintisiz çizgi ve logo altı vurgu için Diamond Line; stand üzerinde hareketli dikkat çekici efekt isteniyorsa Tornado IP.",
      },
      {
        q: "Dış mekân sahnede Diamond Line kullanılır mı?",
        a: "Öncelikli kullanım alanı kapalı mekândır. Açık hava için IP65 korumalı Tornado IP önerilir.",
      },
    ],
    keywords: ["diamond line", "tornado ip", "led bar karşılaştırma", "moving bar"],
  },
  {
    slug: "wash-3715-vs-beam-king-380",
    path: "/karsilastirma/wash-3715-vs-beam-king-380",
    seoTitle: "Wash 3715 vs Beam King 380 — Hangisini Almalısınız? | Ücretsiz Teklif",
    seoDescription:
      "Wash moving head ile beam moving head hangi görevde? Salon ve konser kurulumunda katman seçimi.",
    title: "Wash 3715 vs Beam King 380",
    description: "Yıkama katmanı ile vurgu katmanı arasındaki görev ayrımını öğrenin.",
    intro:
      "Bu iki ünite rakip değil, tamamlayıcıdır: Wash 3715 sahneyi ve sanatçıyı homojen renkle boyar; Beam King 380 dar demetiyle hava efekti ve vurgu üretir. Karşılaştırma, hangi görev için hangi sınıfın doğru olduğunu netleştirir.",
    productASlug: "wash-3715",
    productBSlug: "beam-king-380",
    rows: [
      ["Sınıf", "Wash moving head", "Beam moving head"],
      ["Işık kaynağı", "37 × 15W RGBW LED", "380W discharge"],
      ["Açı", "10° – 60° zoom", "2° sabit dar beam"],
      ["Renk", "RGBW karışım + makro", "14 renk tekerleği"],
      ["Efekt", "Halka kontrolü", "13 gobo + 4 prizma"],
      ["Görev", "Yüz ışığı, sahne boyama", "Hava demeti, vurgu"],
      ["Ağırlık", "19.5 kg", "13.2 kg"],
    ],
    faqs: [
      {
        q: "Tek tip alacaksam hangisi?",
        a: "Salon/nikah gibi genel aydınlatma ağırlıklı işlerde Wash 3715; kulüp ve konser efekt ağırlıklı işlerde Beam King 380. Çoğu sahnede ikisi katman olarak birlikte kullanılır.",
      },
      {
        q: "Beam sanatçı yüzü aydınlatır mı?",
        a: "2° demet yüz ışığı için uygun değildir; gözü alır ve dar alan aydınlatır. Yüz ışığı wash sınıfının görevidir.",
      },
    ],
    keywords: ["wash vs beam", "wash 3715", "beam king 380", "sahne katman planı"],
  },
  {
    slug: "beam-king-380-vs-led-beam-wash-150",
    path: "/karsilastirma/beam-king-380-vs-led-beam-wash-150",
    seoTitle: "Beam King 380 vs LED Beam Wash 150 — Hangisini Almalısınız? | Ücretsiz Teklif",
    seoDescription:
      "Discharge beam ile kompakt LED beam/wash farkları. Kulüp ve küçük sahne için doğru moving head.",
    title: "Beam King 380 vs LED Beam Wash 150",
    description: "Güçlü discharge beam ile kompakt LED hybrid arasında kulüp seçimi.",
    intro:
      "Beam King 380 discharge kaynaklı keskin demeti ve zengin efekt setiyle klasik beam deneyimi sunar. LED Beam Wash 150 ise 6 kg gövdesi, LED kaynağı ve zoom'uyla düşük tavanlı mekânlarda iki görevi tek ünitede birleştirir.",
    productASlug: "beam-king-380",
    productBSlug: "led-beam-wash-150",
    rows: [
      ["Kaynak", "380W discharge", "7 × 40W RGBW LED"],
      ["Açı", "2° sabit", "7° – 45° zoom"],
      ["Efekt", "14 renk, 13 gobo, 4 prizma", "RGBW karışım, ayarlanabilir beyaz"],
      ["Kaynak ömrü", "3500 saat lamba", "50.000 saat LED"],
      ["Ağırlık", "13.2 kg", "6 kg"],
      ["Güç tüketimi", "~380W+", "250W"],
      ["İdeal mekân", "Kulüp ana efekt, konser", "Bar, küçük kulüp, düğün"],
    ],
    faqs: [
      {
        q: "Lamba değişim maliyeti fark yaratır mı?",
        a: "Evet. Discharge lambalar 3500 saat ömürlüdür ve periyodik değişim gerektirir; LED kaynak 50.000 saatle bakım maliyetini düşürür.",
      },
      {
        q: "Hangisinin demeti daha keskin?",
        a: "Beam King 380'in 2° discharge demeti belirgin şekilde daha yoğundur. Beam Wash 150'nin 7° dar ucu kompakt mekânlarda yeterli beam hissi verir.",
      },
    ],
    keywords: ["beam king 380", "led beam wash 150", "kulüp moving head", "discharge vs led"],
  },
  {
    slug: "strike-pro-ip-vs-tornado-ip",
    path: "/karsilastirma/strike-pro-ip-vs-tornado-ip",
    seoTitle: "Strike Pro IP vs Tornado IP — Hangisini Almalısınız? | Ücretsiz Teklif",
    seoDescription:
      "Açık hava efekt katmanında strobe/wash hibrit mi, çok başlı moving bar mı? Festival efekt seçimi.",
    title: "Strike Pro IP vs Tornado IP",
    description: "Dış mekân efekt katmanı için iki farklı yaklaşımın karşılaştırması.",
    intro:
      "İkisi de IP65 korumalı efekt üniteleridir ama karakterleri farklıdır: Strike Pro IP yüksek lümenli strobe/wash patlamaları üretir; Tornado IP hareketli beş başı ve zoom'uyla akışkan, kinetik efektler sunar.",
    productASlug: "strike-pro-ip",
    productBSlug: "tornado-ip",
    rows: [
      ["Tip", "Strobe + wash panel", "5 başlı moving bar"],
      ["Çıkış", "71.620 lm", "13.000 lm"],
      ["Hareket", "180° tilt", "Pan 59° / Tilt 221° her başta"],
      ["Zoom", "Sabit geniş açı", "3° – 30° motorlu"],
      ["Pixel", "42 segment", "Baş + halka bağımsız"],
      ["Güç", "1400W", "800W"],
      ["Karakter", "Patlama, doldurma", "Kinetik, akışkan dalga"],
    ],
    faqs: [
      {
        q: "Festival yan kulesinde hangisi?",
        a: "Seyirciye dönük enerji patlaması için Strike Pro IP; sahne üstü/arka katmanda hareketli dalga efekti için Tornado IP tercih edilir.",
      },
      {
        q: "İkisini aynı şovda kombinlemek mantıklı mı?",
        a: "Evet. Tornado sürekli kinetik doku üretirken Strike Pro drop anlarında patlama katmanı ekler; birlikte tam efekt paleti oluşturur.",
      },
    ],
    keywords: ["strike pro ip", "tornado ip", "festival efekt", "ip65 efekt karşılaştırma"],
  },
  {
    slug: "blinder-400-ip-vs-strike-pro-ip",
    path: "/karsilastirma/blinder-400-ip-vs-strike-pro-ip",
    seoTitle: "Blinder 400 IP vs Strike Pro IP — Hangisini Almalısınız? | Ücretsiz Teklif",
    seoDescription:
      "Kompakt blinder ile yüksek çıkışlı strobe/wash hibrit farkları. Orta ölçek sahne ön hat seçimi.",
    title: "Blinder 400 IP vs Strike Pro IP",
    description: "Bütçe dostu ön hat ile amiral gemisi efekt paneli arasında seçim.",
    intro:
      "Blinder 400 IP hafif gövdesi ve düşük güç tüketimiyle orta ölçekli sahnelerin pratik ön hat çözümüdür. Strike Pro IP ise çok daha yüksek çıkış, pixel kontrol ve strobe yeteneğiyle büyük prodüksiyon standardıdır.",
    productASlug: "blinder-400-ip",
    productBSlug: "strike-pro-ip",
    rows: [
      ["Tip", "2 lens blinder", "Strobe + wash panel"],
      ["LED", "2 × 200W", "784 RGB + 392 CW"],
      ["Güç", "400W", "1400W"],
      ["Strobe", "1 – 20 Hz", "0 – 30 Hz + pixel"],
      ["Ağırlık", "6 kg", "10.8 kg"],
      ["Çalışma sıcaklığı", "-40°C ~ 45°C", "Standart dış mekân"],
      ["İdeal ölçek", "Fuar, orta sahne", "Festival, arena, TV"],
    ],
    faqs: [
      {
        q: "Düğün ve lansman için Strike Pro fazla mı?",
        a: "Çoğu salon işinde Blinder 400 IP yeterli ve ekonomiktir. Strike Pro IP, seyirci kapasitesi ve prodüksiyon beklentisi yükseldiğinde devreye girer.",
      },
      {
        q: "Soğuk hava dayanımı kimde daha iyi?",
        a: "Blinder 400 IP -40°C'ye kadar sertifikalıdır; kış dış mekân etkinliklerinde öne çıkar.",
      },
    ],
    keywords: ["blinder 400 ip", "strike pro ip", "ön hat karşılaştırma", "sahne blinder seçimi"],
  },
];

export const comparisonSlugs = comparisons.map((c) => c.slug);

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
