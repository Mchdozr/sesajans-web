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
    seoTitle: "Moving Head Beam / Beam Robot Işık Ürünleri",
    seoDescription:
      "Konser, festival ve kulüp için profesyonel beam moving head (beam robot ışık). IP20 ve IP66 seçenekleri — fiyat teklifi alın.",
    seoContent:
      "Moving head beam üniteleri, dar ışık demeti ve prizma efektleriyle sahne üzerinde uzun mesafeli vurgu sağlar. SESAJANS portföyünde kapalı mekân için Beam King 380 ve dış mekân için IP66 korumalı Beam King IP modelleri bulunur. Konser truss kurulumları, gece kulübü efektleri ve mimari projeksiyon uygulamalarında tercih edilir. DMX512/RDM kontrol, yüksek çıkış gücü ve zengin gobo-prizma setleri ile prodüksiyon ekiplerine esneklik sunar. Beam seçiminde sahne derinliği, seyirci mesafesi ve IP koruma sınıfı kritik kriterlerdir. Güncel beam moving head fiyatı için ücretsiz teklif isteyin.",
    keywords: [
      "moving head beam",
      "beam aydınlatma",
      "konser beam",
      "dmx beam",
      "beam robot ışık",
      "beam moving head fiyat",
      "380w beam",
      "ip66 beam",
    ],
  },
  "moving-head-wash": {
    label: "Moving Head Wash",
    description: "Geniş alan yıkama ve zoom beam çözümleri",
    seoTitle: "Moving Head Wash / Robot Boyama Işık Ürünleri",
    seoDescription:
      "Sahne yıkama ve zoom wash. Wash 3715 ve LED Beam Wash 150 — robot boyama ışık fiyat teklifi SESAJANS.",
    seoContent:
      "Moving head wash (robot boyama ışık) üniteleri geniş alan aydınlatması ve renk karışımı için idealdir. Wash 3715 ile 37×15W RGBW zoom wash, LED Beam Wash 150 ile kompakt kulüp uygulamaları mümkündür. Tiyatro, TV stüdyosu ve konser sahnelerinde ana wash veya efekt katmanı olarak kullanılır. Motorlu zoom, sessiz fan ve yüksek renk karışım hassasiyeti profesyonel prodüksiyonların temel gereksinimleridir. Wash moving head fiyatı adet ve konfigürasyona göre teklif edilir.",
    keywords: [
      "moving head wash",
      "wash aydınlatma",
      "rgbw wash",
      "sahne wash",
      "robot boyama ışık",
      "boyama ışık",
      "wash moving head fiyat",
      "wash zoom",
    ],
  },
  "blinder-strobe": {
    label: "Blinder & Strobe",
    description: "Yüksek çıkışlı blinder ve strobe sistemleri",
    seoTitle: "Blinder, Molfez ve Strobe Aydınlatma Ürünleri",
    seoDescription:
      "IP65 blinder (molfez) ve strobe. Blinder 400/800 IP, Strike Pro IP — festival ve konser için teklif alın.",
    seoContent:
      "Blinder (molfez) ve strobe üniteleri sahne üzerinde güçlü vurgu, göz kamaştırma efekti ve ritim senkronizasyonu sağlar. Blinder 400 IP ve Blinder 800 IP yüksek çıkışlı LED blinder çözümleri sunarken; Strike Pro IP strobe ve Tornado IP çok başlı efekt üniteleri ile festival ve açık hava konserlerinde kullanılır. IP koruma sınıfı, soğuk iklim dayanımı ve DMX kontrol ile zorlu saha koşullarına uyumludur. Molfez / blinder fiyat teklifi için iletişime geçin.",
    keywords: [
      "blinder aydınlatma",
      "strobe sahne",
      "ip65 blinder",
      "festival strobe",
      "molfez",
      "led molfez",
      "led blinder",
      "blinder fiyat",
      "molfez fiyat",
    ],
  },
  "led-bar": {
    label: "LED Bar & Efekt",
    description: "Linear bar ve çok başlı efekt üniteleri",
    seoTitle: "LED Bar Sahne ve Efekt Aydınlatma Ürünleri",
    seoDescription:
      "Birleştirilebilir LED bar ve moving LED bar. Diamond Line 1240 Eco, Tornado IP — fuar ve konser için teklif.",
    seoContent:
      "LED bar ve linear efekt üniteleri fuar standları, konser dekorasyonu ve mimari çizgi aydınlatmada modüler çözümler sunar. Diamond Line 1240 Eco birleştirilebilir yapısıyla uzun mesafe linear aydınlatma sağlar. Tornado IP ise 5 başlı moving LED bar ile dış mekân efektleri üretir. Enerji verimliliği, hızlı kurulum ve pixel mapping uyumluluğu ile prodüksiyon ekiplerinin tercih ettiği segmenttir. LED bar fiyatı proje uzunluğuna göre teklif edilir.",
    keywords: [
      "led bar",
      "linear led",
      "fuar aydınlatma",
      "led efekt bar",
      "led bar sahne",
      "moving led bar",
      "led bar fiyat",
    ],
  },
};

export const categorySlugs = Object.keys(categories) as ProductCategory[];
