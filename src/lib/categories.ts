export type ProductCategory =
  | "moving-head-beam"
  | "moving-head-wash"
  | "blinder-strobe"
  | "led-bar";

export const categories: Record<
  ProductCategory,
  {
    label: string;
    description: string;
    seoTitle: string;
    seoDescription: string;
    seoContent: string;
    keywords: string[];
  }
> = {
  "moving-head-beam": {
    label: "Moving Head Beam",
    description: "Keskin beam efektleri ve prizma çözümleri",
    seoTitle: "Moving Head Beam Aydınlatma Ürünleri",
    seoDescription:
      "Konser, festival ve kulüp sahnesi için profesyonel beam moving head ürünleri. IP20 ve IP66 dış mekân seçenekleri.",
    seoContent:
      "Moving head beam üniteleri, dar ışık demeti ve prizma efektleriyle sahne üzerinde uzun mesafeli vurgu sağlar. SESAJANS portföyünde kapalı mekân için Beam King 380 ve dış mekân için IP66 korumalı Beam King IP modelleri bulunur. Konser truss kurulumları, gece kulübü efektleri ve mimari projeksiyon uygulamalarında tercih edilir. DMX512/RDM kontrol, yüksek çıkış gücü ve zengin gobo-prizma setleri ile prodüksiyon ekiplerine esneklik sunar.",
    keywords: ["moving head beam", "beam aydınlatma", "konser beam", "dmx beam"],
  },
  "moving-head-wash": {
    label: "Moving Head Wash",
    description: "Geniş alan yıkama ve zoom beam çözümleri",
    seoTitle: "Moving Head Wash Aydınlatma Ürünleri",
    seoDescription:
      "Sahne yıkama ve zoom beam çözümleri. Wash 3715 ve LED Beam Wash 150 ile esnek moving head wash portföyü.",
    seoContent:
      "Moving head wash üniteleri geniş alan aydınlatması ve renk karışımı için idealdir. Wash 3715 ile 37×15W RGBW zoom wash, LED Beam Wash 150 ile kompakt kulüp uygulamaları mümkündür. Tiyatro, TV stüdyosu ve konser sahnelerinde ana wash veya efekt katmanı olarak kullanılır. Motorlu zoom, sessiz fan ve yüksek renk karışım hassasiyeti profesyonel prodüksiyonların temel gereksinimleridir.",
    keywords: ["moving head wash", "wash aydınlatma", "rgbw wash", "sahne wash"],
  },
  "blinder-strobe": {
    label: "Blinder & Strobe",
    description: "Yüksek çıkışlı blinder ve strobe sistemleri",
    seoTitle: "Blinder ve Strobe Aydınlatma Ürünleri",
    seoDescription:
      "IP65/IP66 blinder ve strobe çözümleri. Blinder 400/800 IP, Strike Pro IP ve Tornado IP ile dış mekân sahne aydınlatması.",
    seoContent:
      "Blinder ve strobe üniteleri sahne üzerinde güçlü vurgu, göz kamaştırma efekti ve ritim senkronizasyonu sağlar. Blinder 400 IP ve Blinder 800 IP yüksek çıkışlı LED blinder çözümleri sunarken; Strike Pro IP strobe ve Tornado IP çok başlı efekt üniteleri ile festival ve açık hava konserlerinde kullanılır. IP koruma sınıfı, soğuk iklim dayanımı ve DMX kontrol ile zorlu saha koşullarına uyumludur.",
    keywords: ["blinder aydınlatma", "strobe sahne", "ip65 blinder", "festival strobe"],
  },
  "led-bar": {
    label: "LED Bar & Efekt",
    description: "Linear bar ve çok başlı efekt üniteleri",
    seoTitle: "LED Bar ve Efekt Aydınlatma Ürünleri",
    seoDescription:
      "Birleştirilebilir LED bar ve linear efekt çözümleri. Diamond Line 1240 Eco ile fuar, konser ve mimari çizgi aydınlatma.",
    seoContent:
      "LED bar ve linear efekt üniteleri fuar standları, konser dekorasyonu ve mimari çizgi aydınlatmada modüler çözümler sunar. Diamond Line 1240 Eco birleştirilebilir yapısıyla uzun mesafe linear aydınlatma sağlar. Enerji verimliliği, hızlı kurulum ve pixel mapping uyumluluğu ile prodüksiyon ekiplerinin tercih ettiği segmenttir.",
    keywords: ["led bar", "linear led", "fuar aydınlatma", "led efekt bar"],
  },
};

export const categorySlugs = Object.keys(categories) as ProductCategory[];
