export type GlossaryTerm = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  definition: string;
  sections: { title: string; body: string }[];
  relatedLinks: { label: string; href: string }[];
  keywords: string[];
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "dmx512-nedir",
    title: "DMX512 Nedir?",
    seoTitle: "DMX512 Nedir? Sahne Aydınlatma Protokolü",
    seoDescription:
      "DMX512 sahne aydınlatma kontrol protokolü nedir? Universe, kanal ve adresleme temelleri.",
    definition:
      "DMX512 (Digital Multiplex), sahne aydınlatma ve efekt cihazlarını tek bir kontrol hattı üzerinden yönetmek için kullanılan endüstri standardı dijital protokoldür.",
    sections: [
      {
        title: "Nasıl çalışır?",
        body: "Bir DMX konsol veya yazılım, 512 kanallık veri paketlerini (universe) XLR veya RJ45 hat üzerinden fixture'lara iletir. Her kanal 0–255 arası değer alır; örneğin kanal 1 dimmer, kanal 2 pan hızı olabilir.",
      },
      {
        title: "Universe ve adresleme",
        body: "Bir universe 512 kanal içerir. Moving head'ler 17–37 kanal kullanabilir; doğru adresleme çakışmayı önler. Büyük kurulumlarda birden fazla universe ve Art-Net ağ geçidi kullanılır.",
      },
      {
        title: "SESAJANS uygulaması",
        body: "Kurulum projelerimizde adresleme planı, patch listesi ve konsol programlama dahil anahtar teslim DMX altyapısı sunuyoruz.",
      },
    ],
    relatedLinks: [
      { label: "DMX kurulum rehberi", href: "/blog/dmx-aydinlatma-kurulumu" },
      { label: "Art-Net nedir?", href: "/sozluk/art-net-nedir" },
      { label: "Ürünler", href: "/urunler" },
    ],
    keywords: ["dmx512", "dmx nedir", "sahne aydınlatma protokolü", "dmx universe"],
  },
  {
    slug: "moving-head-nedir",
    title: "Moving Head Nedir?",
    seoTitle: "Moving Head Nedir? Beam, Wash ve Spot Farkı",
    seoDescription:
      "Moving head sahne ışığı nedir? Beam, wash ve spot moving head türleri ve kullanım alanları.",
    definition:
      "Moving head, pan ve tilt eksenlerinde hareket edebilen, lens ve efekt tekerlekleriyle yönlendirilebilir profesyonel sahne aydınlatma ünitesidir.",
    sections: [
      {
        title: "Türler",
        body: "Beam moving head dar demet (2°–4°) ile uzun mesafe vurgu üretir. Wash moving head geniş açılı homojen yıkama sağlar. Spot/hybrid modeller gobo ve zoom ile çok yönlü kullanılır.",
      },
      {
        title: "Kullanım alanları",
        body: "Konser, festival, tiyatro, gece kulübü, TV stüdyosu ve kurumsal etkinliklerde truss üzerinde konumlandırılır. DMX ile programlanır.",
      },
      {
        title: "SESAJANS portföyü",
        body: "Beam King, Wash 3715, LED Beam Wash 150 ve Tornado IP modelleri farklı ölçek ve mekân ihtiyaçlarına göre seçilebilir.",
      },
    ],
    relatedLinks: [
      { label: "Moving head beam rehberi", href: "/blog/moving-head-beam-rehberi" },
      { label: "Wash moving head rehberi", href: "/blog/wash-moving-head-rehberi" },
      { label: "Konser aydınlatma", href: "/kullanim-alanlari/konser-festival" },
    ],
    keywords: ["moving head nedir", "beam moving head", "wash moving head", "sahne ışığı"],
  },
  {
    slug: "ip-koruma-sinifi-nedir",
    title: "IP Koruma Sınıfı Nedir?",
    seoTitle: "IP Koruma Sınıfı Nedir? IP65 ve IP66 Farkı",
    seoDescription:
      "IP65 ve IP66 koruma sınıfları ne anlama gelir? Dış mekân sahne aydınlatması için IP seçimi.",
    definition:
      "IP (Ingress Protection) kodu, elektrikli ekipmanın toz ve suya karşı koruma düzeyini tanımlayan uluslararası standarttır.",
    sections: [
      {
        title: "IP65 vs IP66",
        body: "IP65 toz geçirmez ve düşük basınçlı su jetlerine dayanıklıdır. IP66 güçlü su jetlerine ve geçici daldırmaya karşı daha yüksek koruma sunar. Açık hava konser ve festivalde IP65+ tercih edilir.",
      },
      {
        title: "IP20 ne demek?",
        body: "IP20 kapalı mekân kullanımı içindir; toz ve nem koruması sınırlıdır. Salon, kulüp ve stüdyo fixture'ları genelde IP20 sınıfındadır.",
      },
      {
        title: "Doğru seçim",
        body: "Dış mekân prodüksiyonlarında Beam King IP, Blinder 800 IP ve Strike Pro IP gibi IP66 modeller güvenilir çalışma sağlar.",
      },
    ],
    relatedLinks: [
      { label: "IP66 beam rehberi", href: "/blog/ip66-beam-rehberi" },
      { label: "Beam King 380 vs IP", href: "/karsilastirma/beam-king-380-vs-ip" },
      { label: "Dış mekân beam seçimi", href: "/blog/ip66-dis-mekan-beam-secimi" },
    ],
    keywords: ["ip66", "ip65", "ip koruma sınıfı", "dış mekân aydınlatma"],
  },
  {
    slug: "art-net-nedir",
    title: "Art-Net Nedir?",
    seoTitle: "Art-Net Nedir? Ağ Tabanlı DMX Kontrolü",
    seoDescription:
      "Art-Net protokolü nedir? Büyük sahne kurulumlarında DMX over Ethernet kullanımı.",
    definition:
      "Art-Net, DMX512 verisini Ethernet ağı üzerinden ileten açık protokoldür; büyük kurulumlarda çoklu universe yönetimini kolaylaştırır.",
    sections: [
      {
        title: "DMX'ten farkı",
        body: "Klasik DMX hat başına bir universe (512 kanal) taşır. Art-Net tek bir ağ kablosuyla onlarca universe iletilebilir; uzun mesafe ve karmaşık patch listelerinde avantaj sağlar.",
      },
      {
        title: "Ne zaman gerekir?",
        body: "50+ fixture, çoklu sahne veya uzak FOH konsol kurulumlarında Art-Net node veya doğrudan Art-Net destekli fixture'lar kullanılır.",
      },
      {
        title: "SESAJANS desteği",
        body: "Festival ve arena projelerinde Art-Net ağ tasarımı, node konfigürasyonu ve yedekleme planı dahil teknik danışmanlık sunuyoruz.",
      },
    ],
    relatedLinks: [
      { label: "DMX512 nedir?", href: "/sozluk/dmx512-nedir" },
      { label: "DMX kurulum rehberi", href: "/blog/dmx-aydinlatma-kurulumu" },
      { label: "Arena aydınlatma rehberi", href: "/blog/arena-stadyum-aydinlatma-rehberi" },
    ],
    keywords: ["art-net", "dmx over ethernet", "sahne ağ kontrolü", "universe"],
  },
  {
    slug: "blinder-strobe-nedir",
    title: "Blinder ve Strobe Nedir?",
    seoTitle: "Blinder ve Strobe Nedir? Sahne Efekt Işıkları",
    seoDescription:
      "Blinder ve strobe sahne ışıkları ne işe yarar? Konser ve etkinliklerde kullanım farkları.",
    definition:
      "Blinder yüksek çıkışlı ön vurgu ışığıdır; strobe ise hızlı flaş efekti üreterek ritim ve enerji yaratır.",
    sections: [
      {
        title: "Blinder kullanımı",
        body: "Sahne ön hattında sanatçı vurgusu, drop anları ve seyirci alanına yönelik güçlü beyaz veya renkli ışık patlaması için kullanılır. Blinder 400 IP ve 800 IP dış mekâna uygundur.",
      },
      {
        title: "Strobe kullanımı",
        body: "Strike Pro IP gibi strobe üniteleri müzik ritmiyle senkronize flaş efekti üretir. Blinder'dan farklı olarak kısa süreli yüksek frekanslı patlama odaklıdır.",
      },
      {
        title: "Kombinasyon",
        body: "Profesyonel konser kurulumlarında blinder ön hat, strobe yan ve arka efekt hatlarında birlikte programlanır.",
      },
    ],
    relatedLinks: [
      { label: "Blinder vs strobe farkı", href: "/blog/blinder-vs-strobe-farki" },
      { label: "Blinder strobe rehberi", href: "/blog/blinder-strobe-rehberi" },
      { label: "Blinder 400 vs 800", href: "/karsilastirma/blinder-400-ip-vs-800-ip" },
    ],
    keywords: ["blinder nedir", "strobe nedir", "sahne efekt ışığı", "konser blinder"],
  },
];

export const glossarySlugs = glossaryTerms.map((t) => t.slug);

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}
