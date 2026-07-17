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
    buyVsRent: string;
    faqs: { q: string; a: string }[];
    keywords: string[];
  }
> = {
  "moving-head-beam": {
    label: "Moving Head Beam",
    description: "Keskin beam efektleri ve prizma çözümleri",
    seoTitle: "Moving Head Beam Satın Al | Fiyat Teklifi Türkiye",
    seoDescription:
      "Moving head beam satın al: Beam King 380 ve IP66 Beam King IP. Konser ve festival için fiyat teklifi, stok ve kurulum — SESAJANS Türkiye distribütörü.",
    seoContent:
      "Moving head beam üniteleri, dar ışık demeti ve prizma efektleriyle sahne üzerinde uzun mesafeli vurgu sağlar. SESAJANS portföyünde kapalı mekân için Beam King 380 ve dış mekân için IP66 korumalı Beam King IP modelleri bulunur. Konser truss kurulumları, gece kulübü efektleri ve mimari projeksiyon uygulamalarında tercih edilir.\n\nBeam seçiminde sahne derinliği, seyirci mesafesi ve IP koruma sınıfı kritik kriterlerdir. DMX512/RDM kontrol, yüksek çıkış gücü ve zengin gobo-prizma setleri prodüksiyon ekiplerine esneklik sunar. Satın alma veya kiralama kararını proje takviminize göre birlikte netleştiriyoruz; ücretsiz fiyat teklifi için iletişime geçin.",
    buyVsRent:
      "Kalıcı kulüp veya salon envanteri için satış; tek gecelik konser ve festival için kiralama genellikle daha ekonomiktir. Her iki modelde de keşif sonrası teklif hazırlanır.",
    faqs: [
      {
        q: "Moving head beam fiyatı nasıl belirlenir?",
        a: "Model, adet, IP sınıfı ve kurulum kapsamına göre proje bazlı teklif verilir. Liste fiyatı yerine ihtiyaca özel fiyat teklifi sunuyoruz.",
      },
      {
        q: "Beam King 380 mi Beam King IP mi almalıyım?",
        a: "Kapalı mekân için Beam King 380, açık hava ve yağmur riski olan sahneler için Beam King IP tercih edilir. Karşılaştırma sayfamızdan farkları inceleyebilirsiniz.",
      },
      {
        q: "Türkiye genelinde teslimat var mı?",
        a: "Evet. SESAJANS Şişli stoklu çalışır; Türkiye geneline lojistik ve kurulum desteği sağlanır.",
      },
    ],
    keywords: [
      "moving head beam",
      "beam satın al",
      "beam fiyat",
      "konser beam",
      "dmx beam",
      "beam moving head türkiye",
    ],
  },
  "moving-head-wash": {
    label: "Moving Head Wash",
    description: "Geniş alan yıkama ve zoom beam çözümleri",
    seoTitle: "Moving Head Wash Satın Al | Fiyat Teklifi Türkiye",
    seoDescription:
      "Wash moving head satın al: Wash 3715 ve LED Beam Wash 150. Sahne yıkama için fiyat teklifi ve kurulum — SESAJANS.",
    seoContent:
      "Moving head wash üniteleri geniş alan aydınlatması ve renk karışımı için idealdir. Wash 3715 ile 37×15W RGBW zoom wash, LED Beam Wash 150 ile kompakt kulüp uygulamaları mümkündür. Tiyatro, TV stüdyosu ve konser sahnelerinde ana wash veya efekt katmanı olarak kullanılır.\n\nMotorlu zoom, sessiz fan ve yüksek renk karışım hassasiyeti profesyonel prodüksiyonların temel gereksinimleridir. Stoktan satış ve etkinlik kiralama seçenekleriyle ücretsiz fiyat teklifi alabilirsiniz.",
    buyVsRent:
      "Salon ve tiyatro gibi sabit mekânlarda satış; düğün ve kısa etkinliklerde wash kiralama paketi daha uygundur.",
    faqs: [
      {
        q: "Wash 3715 fiyat teklifi nasıl alınır?",
        a: "İletişim formundan ürünü seçerek veya /bayi sayfasından bize ulaşın; proje ölçünüze göre teklif hazırlanır.",
      },
      {
        q: "Kulüp için hangi wash yeterli?",
        a: "Düşük tavanlı mekânlarda LED Beam Wash 150; 400+ kişilik salonlarda Wash 3715 önerilir.",
      },
      {
        q: "Satın alma sonrası kurulum var mı?",
        a: "Evet. Montaj, DMX adresleme ve preset programlama teklife eklenebilir.",
      },
    ],
    keywords: [
      "moving head wash",
      "wash satın al",
      "wash fiyat",
      "rgbw wash",
      "sahne wash",
    ],
  },
  "blinder-strobe": {
    label: "Blinder & Strobe",
    description: "Yüksek çıkışlı blinder ve strobe sistemleri",
    seoTitle: "Blinder ve Strobe Satın Al | Fiyat Teklifi",
    seoDescription:
      "IP65 blinder ve strobe satın al: Blinder 400/800 IP, Strike Pro IP. Festival ve konser için fiyat teklifi — SESAJANS.",
    seoContent:
      "Blinder ve strobe üniteleri sahne üzerinde güçlü vurgu, göz kamaştırma efekti ve ritim senkronizasyonu sağlar. Blinder 400 IP ve Blinder 800 IP yüksek çıkışlı LED blinder çözümleri sunarken; Strike Pro IP strobe ile festival ve açık hava konserlerinde kullanılır.\n\nIP koruma sınıfı, soğuk iklim dayanımı ve DMX kontrol ile zorlu saha koşullarına uyumludur. Satış ve kiralama için ücretsiz fiyat teklifi sunuyoruz.",
    buyVsRent:
      "Sık kullanılan stadyum/ön hat için satış; seyrek festival işlerinde strobe/blinder kiralama maliyet avantajı sağlar.",
    faqs: [
      {
        q: "Blinder 800 IP fiyatı nedir?",
        a: "Proje ve adede göre değişir. Ücretsiz fiyat teklifi için iletişim formunu kullanın; liste fiyatı yayınlamıyoruz.",
      },
      {
        q: "Blinder ile strobe farkı nedir?",
        a: "Blinder ön hat vurgusu, strobe ritimli flaş efekti üretir. Çoğu konserde ikisi birlikte kullanılır.",
      },
      {
        q: "Dış mekânda hangisini almalıyım?",
        a: "IP65/IP66 korumalı Blinder 400/800 IP ve Strike Pro IP dış mekân için uygundur.",
      },
    ],
    keywords: [
      "blinder satın al",
      "strobe fiyat",
      "ip65 blinder",
      "festival strobe",
      "blinder aydınlatma",
    ],
  },
  "led-bar": {
    label: "LED Bar & Efekt",
    description: "Linear bar ve çok başlı efekt üniteleri",
    seoTitle: "LED Bar Satın Al | Fiyat Teklifi Türkiye",
    seoDescription:
      "LED bar ve moving bar satın al: Diamond Line 1240 Eco, Tornado IP. Fuar ve konser için fiyat teklifi — SESAJANS.",
    seoContent:
      "LED bar ve linear efekt üniteleri fuar standları, konser dekorasyonu ve mimari çizgi aydınlatmada modüler çözümler sunar. Diamond Line 1240 Eco birleştirilebilir yapısıyla uzun mesafe linear aydınlatma sağlar; Tornado IP çok başlı hareketli efekt üretir.\n\nEnerji verimliliği, hızlı kurulum ve pixel mapping uyumluluğu ile prodüksiyon ekiplerinin tercih ettiği segmenttir. Stok ve kurulum dahil fiyat teklifi için bize ulaşın.",
    buyVsRent:
      "Kalıcı stand ve dekor için Diamond Line satışı; festival yan efekt için Tornado IP kiralama veya satış seçenekleri değerlendirilir.",
    faqs: [
      {
        q: "LED bar fiyat teklifi nasıl alınır?",
        a: "Metre/modül adedi ve kontrol ihtiyacına göre teklif hazırlanır. İletişim formundan ürün seçerek yazın.",
      },
      {
        q: "Tornado IP dış mekânda kullanılır mı?",
        a: "Evet, IP65 koruma ile açık hava festival ve konserlerde kullanılabilir.",
      },
      {
        q: "Fuar standı için hangi model?",
        a: "Kesintisiz çizgi için Diamond Line 1240 Eco; hareketli dikkat çekici efekt için Tornado IP.",
      },
    ],
    keywords: [
      "led bar satın al",
      "led bar fiyat",
      "linear led",
      "fuar aydınlatma",
      "moving led bar",
    ],
  },
};

export const categorySlugs = Object.keys(categories) as ProductCategory[];
