import type { KeywordHubPath } from "./seo-keywords";

export type KeywordHub = {
  path: KeywordHubPath;
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  sections: { title: string; body: string; image?: string; imageAlt?: string }[];
  faqs: { q: string; a: string }[];
  keywords: string[];
  productSlugs: string[];
  categorySlugs?: string[];
  relatedBlogSlugs: string[];
  relatedPaths: { label: string; href: string }[];
};

export const keywordHubs: KeywordHub[] = [
  {
    path: "/robot-isik",
    slug: "robot-isik",
    title: "Robot Işık / Moving Head",
    seoTitle: "Robot Işık & Moving Head — Profesyonel Hareketli Kafa",
    seoDescription:
      "Robot ışık (moving head / hareketli kafa) çözümleri: beam, wash, blinder ve LED bar. SESAJANS ile teklif alın, kurulum ve DMX desteği.",
    eyebrow: "Moving Head",
    h1: "Robot Işık (Moving Head) Sistemleri",
    intro:
      "Robot ışık, sektörde moving head veya hareketli kafa olarak da bilinen profesyonel sahne aydınlatma fixture’ıdır. Pan/tilt motorları, renk, gobo ve zoom ile sahne üzerinde dinamik ışık demetleri üretir. SESAJANS; konser, festival, kulüp, düğün ve TV projeleri için beam, wash ve hibrit robot ışık portföyü sunar.",
    heroImage: "/products/beam-king-380/image-04.jpg",
    heroImageAlt: "SESAJANS robot ışık — Beam King 380 moving head",
    sections: [
      {
        title: "Robot ışık nedir?",
        body: "Robot ışık (hareketli kafa), sabit spot’un aksine motorlu pan ve tilt ile ışığı sahne üzerinde yönlendirebilen DMX kontrollü bir ünitedir. Beam modelleri dar ve keskin demet; wash modelleri geniş renk yıkaması; hibrit modeller her iki ihtiyacı bir arada karşılar. Spot moving head arayan kullanıcılar genelde beam veya zoom’lu wash segmentine yönlendirilir.",
        image: "/products/beam-king-ip/image-01.webp",
        imageAlt: "Beam King IP dış mekân robot ışık",
      },
      {
        title: "Hangi robot ışık size uygun?",
        body: "Kapalı kulüp ve küçük sahne için kompakt LED Beam Wash 150; tiyatro ve TV için yüksek CRI Wash 3715; konser ve festival ana truss için Beam King 380 veya IP66 Beam King IP tercih edilir. Dış mekân projelerinde IP65/IP66 koruma zorunludur. Adet ve güç planı için ücretsiz keşif ve teklif sunuyoruz.",
        image: "/products/wash-3715/image-01.jpg",
        imageAlt: "Wash 3715 robot boyama ışık",
      },
      {
        title: "Kurulum ve DMX desteği",
        body: "SESAJANS yalnızca ürün satmaz: truss montajı, DMX adresleme, Art-Net universe planı, konsol programlama ve operatör eğitimi dahil anahtar teslim çözümler sağlar. İstanbul Şişli merkezli stok ile hızlı teslimat ve yerel teknik servis sunulur.",
        image: "/products/led-beam-wash-150/image-01.jpg",
        imageAlt: "LED Beam Wash 150 kompakt moving head",
      },
    ],
    faqs: [
      {
        q: "Robot ışık ile moving head aynı mı?",
        a: "Evet. Türkiye’de yaygın olarak ‘robot ışık’ veya ‘hareketli kafa’ denir; uluslararası terim moving head’dir. Hepsi aynı ürün ailesini ifade eder.",
      },
      {
        q: "Beam mi wash mi almalıyım?",
        a: "Uzun mesafe vurgu ve prizma efekti için beam; sahne/yüz yıkama ve renk için wash. Çoğu profesyonel sahne her iki katmanı birlikte kullanır.",
      },
      {
        q: "Robot ışık fiyatı neye göre değişir?",
        a: "Watt, LED/lamba tipi, IP sınıfı, zoom/gobo/prizma özellikleri ve adet. Güncel fiyat için proje detayınızla teklif alın.",
      },
      {
        q: "Kurulum dahil mi?",
        a: "İsteğe bağlıdır. Satış, montaj, DMX programlama ve operatörlü paketler sunuyoruz.",
      },
    ],
    keywords: [
      "robot ışık",
      "moving head",
      "hareketli kafa",
      "robot ışık sistemi",
      "spot moving head",
      "profesyonel robot ışık",
    ],
    productSlugs: [
      "beam-king-380",
      "beam-king-ip",
      "wash-3715",
      "led-beam-wash-150",
      "tornado-ip",
    ],
    categorySlugs: ["moving-head-beam", "moving-head-wash"],
    relatedBlogSlugs: [
      "robot-isik-nasil-secilir",
      "moving-head-fiyat-rehberi",
      "beam-vs-wash-satinalma",
      "moving-head-beam-rehberi",
    ],
    relatedPaths: [
      { label: "Robot ışık fiyat / teklif", href: "/robot-isik-fiyat" },
      { label: "Tüm ürünler", href: "/urunler" },
      { label: "Beam kategorisi", href: "/urunler/kategori/moving-head-beam" },
      { label: "Wash kategorisi", href: "/urunler/kategori/moving-head-wash" },
    ],
  },
  {
    path: "/robot-isik-fiyat",
    slug: "robot-isik-fiyat",
    title: "Robot Işık Fiyatı",
    seoTitle: "Robot Işık Fiyatı & Moving Head Teklif — SESAJANS",
    seoDescription:
      "Robot ışık ve moving head fiyatını etkileyen faktörler. Güncel teklif için SESAJANS’a ulaşın — sabit liste fiyatı yok, proje bazlı teklif.",
    eyebrow: "Fiyat & Teklif",
    h1: "Robot Işık Fiyatı ve Moving Head Teklifi",
    intro:
      "Robot ışık (moving head) fiyatı; güç, optik özellikler, IP koruma ve sipariş adedine göre değişir. SESAJANS sabit online fiyat yayınlamaz: projenize özel güncel fiyat teklifi hazırlarız. Bu sayfa maliyet kalemlerini şeffafça açıklar ve teklif sürecini hızlandırır.",
    heroImage: "/products/beam-king-ip/image-01.webp",
    heroImageAlt: "IP66 beam — robot ışık fiyat teklifi",
    sections: [
      {
        title: "Fiyatı belirleyen başlıca faktörler",
        body: "Işık kaynağı (LED vs discharge), watt çıkışı, beam/wash/hibrit tip, zoom-gobo-prizma seti, IP20/IP65/IP66 koruma, pan infinity ve ağ protokolleri (Art-Net, CRMX) fiyatı etkiler. Dış mekân IP66 üniteler kapalı mekân modellerine göre daha yüksek yatırım gerektirir.",
        image: "/products/beam-king-380/image-05.jpg",
        imageAlt: "Beam King 380 — fiyatı etkileyen optik özellikler",
      },
      {
        title: "Paket örnekleri (yönlendirme)",
        body: "Kulüp paketi: 4–8 kompakt wash/beam. Orta konser: 12–20 beam + wash katmanı + ön hat blinder. Festival: IP65+ beam/blinder/strobe + yedek ünite. Kesin kalem ve adet keşif sonrası netleşir; kiralama seçeneği de sunulur.",
        image: "/products/blinder-800-ip/image-01.jpg",
        imageAlt: "Blinder 800 IP festival paket örneği",
      },
      {
        title: "Teklif nasıl alınır?",
        body: "Mekân tipi, tarih, açık/kapalı alan, tahmini adet ve bütçe bandını paylaşın. 1 iş günü içinde ürün önerisi ve fiyat teklifi ile dönüş yaparız. İstanbul içi keşif çoğu projede ücretsizdir.",
        image: "/products/wash-3715/image-01.jpg",
        imageAlt: "Wash 3715 — teklif sürecinde önerilen ürün",
      },
    ],
    faqs: [
      {
        q: "Sitede ürün fiyatı neden yok?",
        a: "Döviz, stok ve proje konfigürasyonu nedeniyle liste fiyatı yanıltıcı olabilir. Güncel ve doğru teklifi iletişim formundan alırsınız.",
      },
      {
        q: "Moving head fiyat aralığı nedir?",
        a: "Giriş seviyesi LED modeller ile turne sınıfı IP66 beam arasında geniş bir aralık vardır. İhtiyacınıza göre bandı teklifte netleştiririz.",
      },
      {
        q: "Kiralama mı satın alma mı daha uygun?",
        a: "Tek seferlik etkinlikte kiralama; sürekli kullanılan mekânlarda satın alma genelde daha ekonomiktir. Karşılaştırma için bize yazın.",
      },
      {
        q: "Kurulum ücreti fiyata dahil mi?",
        a: "Teklifte ürün, lojistik ve kurulum kalemleri ayrı satırlarda gösterilir; isteğe göre paketlenebilir.",
      },
    ],
    keywords: [
      "robot ışık fiyat",
      "moving head fiyat",
      "robot ışık teklif",
      "sahne aydınlatma fiyat",
      "beam moving head fiyat",
      "moving head satın al",
    ],
    productSlugs: [
      "beam-king-380",
      "beam-king-ip",
      "wash-3715",
      "led-beam-wash-150",
      "blinder-800-ip",
    ],
    relatedBlogSlugs: [
      "moving-head-fiyat-rehberi",
      "sahne-aydinlatma-butce-2026",
      "aydinlatma-kiralama-vs-satinalma",
      "robot-isik-nasil-secilir",
    ],
    relatedPaths: [
      { label: "Robot ışık hub", href: "/robot-isik" },
      { label: "İletişim / teklif formu", href: "/iletisim" },
      { label: "Kiralama", href: "/kullanim-alanlari/aydinlatma-kiralama" },
    ],
  },
  {
    path: "/sahne-isigi",
    slug: "sahne-isigi",
    title: "Sahne Işığı",
    seoTitle: "Sahne Işığı & Profesyonel Sahne Aydınlatma — SESAJANS",
    seoDescription:
      "Sahne ışığı sistemleri: moving head, blinder, strobe, LED bar. Konser, tiyatro, düğün ve TV için SESAJANS profesyonel aydınlatma.",
    eyebrow: "Sahne Aydınlatma",
    h1: "Sahne Işığı ve Profesyonel Aydınlatma",
    intro:
      "Sahne ışığı; konser, tiyatro, düğün, fuar ve TV stüdyolarında atmosfer, vurgu ve görünürlük sağlayan profesyonel aydınlatma sistemidir. SESAJANS, beam/wash moving head, blinder-strobe ve LED bar ile uçtan uca sahne aydınlatma çözümleri sunar.",
    heroImage: "/products/strike-pro-ip/image-01.jpg",
    heroImageAlt: "Strike Pro IP ile profesyonel sahne ışığı",
    sections: [
      {
        title: "Sahne ışığı katmanları",
        body: "Profesyonel sahne genelde üç katman kullanır: wash (genel yıkama), beam (vurgu ve efekt), blinder/strobe (ön hat patlama). LED bar ise dekor ve çizgi aydınlatmada tamamlayıcıdır. Doğru denge, seyirci deneyimini ve kamera görüntüsünü belirler.",
        image: "/products/beam-king-380/image-04.jpg",
        imageAlt: "Beam katmanı — sahne vurgu ışığı",
      },
      {
        title: "Kullanım alanları",
        body: "Konser ve festival, gece kulübü, düğün, TV/stüdyo, fuar/lansman, tiyatro, mimari ve stadyum uygulamalarında farklı fixture setleri gerekir. Kullanım alanları sayfalarımızda senaryo bazlı öneriler bulabilirsiniz.",
        image: "/products/diamond-line-1240-eco/image-01.jpg",
        imageAlt: "LED bar — sahne dekor ve çizgi aydınlatma",
      },
      {
        title: "Neden SESAJANS?",
        body: "12+ yıl tecrübe, 500+ proje, Şişli stok, DMX programlama ve satış sonrası destek. Ürün seçiminden sahaya devreye almaya kadar tek muhatap.",
        image: "/products/blinder-400-ip/image-03.jpg",
        imageAlt: "Blinder 400 IP — SESAJANS sahne çözümü",
      },
    ],
    faqs: [
      {
        q: "Sahne ışığı ile sahne aydınlatma aynı mı?",
        a: "Evet; ‘sahne ışığı’ günlük dilde, ‘sahne aydınlatma’ daha kurumsal kullanımda tercih edilir.",
      },
      {
        q: "Küçük salon için ne kadar ekipman gerekir?",
        a: "Salon büyüklüğü, tavan yüksekliği ve etkinlik tipine göre değişir. Ücretsiz keşif ile adet planı çıkarırız.",
      },
      {
        q: "Teklif almak ücretsiz mi?",
        a: "Evet. Ürün önerisi ve fiyat teklifi ücretsizdir.",
      },
    ],
    keywords: [
      "sahne ışığı",
      "sahne aydınlatma",
      "profesyonel sahne ışığı",
      "konser ışığı",
      "sahne ışık sistemi",
      "etkinlik aydınlatma",
    ],
    productSlugs: [
      "beam-king-380",
      "wash-3715",
      "blinder-400-ip",
      "diamond-line-1240-eco",
      "strike-pro-ip",
    ],
    categorySlugs: [
      "moving-head-beam",
      "moving-head-wash",
      "blinder-strobe",
      "led-bar",
    ],
    relatedBlogSlugs: [
      "sahne-aydinlatma-rehberi",
      "profesyonel-sahne-isigi-rehberi",
      "sahne-aydinlatma-butce-2026",
      "konser-aydinlatma-rehberi",
    ],
    relatedPaths: [
      { label: "Robot ışık", href: "/robot-isik" },
      { label: "Kullanım alanları", href: "/kullanim-alanlari" },
      { label: "Tüm ürünler", href: "/urunler" },
    ],
  },
  {
    path: "/molfez",
    slug: "molfez",
    title: "Molfez / Blinder",
    seoTitle: "Molfez (Blinder) Aydınlatma — LED Blinder & Strobe",
    seoDescription:
      "Molfez nedir? LED blinder ve strobe ile sahne önü patlama efekti. Blinder 400/800 IP, Strike Pro IP — SESAJANS teklif.",
    eyebrow: "Blinder & Strobe",
    h1: "Molfez (Blinder) ve Strobe Aydınlatma",
    intro:
      "Molfez, Türkiye sahne sektöründe blinder (seyirci/ön hat kör edici ışık) için yaygın kullanılan jargondur. Yüksek çıkışlı LED blinder ve strobe üniteleri konser, festival ve TV’de ritim vurgusu ve seyirci etkileşimi yaratır. SESAJANS IP65 korumalı Blinder 400/800 IP ve Strike Pro IP çözümleri sunar.",
    heroImage: "/products/blinder-800-ip/image-01.jpg",
    heroImageAlt: "Blinder 800 IP molfez aydınlatma",
    sections: [
      {
        title: "Molfez ile strobe farkı",
        body: "Molfez/blinder genelde geniş field açılı, sıcak veya RGBW güçlü yıkama/patlama efekti verir. Strobe ise yüksek frekanslı flaş ve pixel segment kontrolü ile ritim odaklıdır. Strike Pro IP her iki ihtiyacı tek gövdede birleştirir.",
        image: "/products/strike-pro-ip/image-01.jpg",
        imageAlt: "Strike Pro IP strobe ve wash",
      },
      {
        title: "Kaç adet molfez gerekir?",
        body: "Sahne genişliği ve izleme mesafesine göre 2–4 ünite küçük sahne; 6–12+ ünite büyük festival ön hattı için tipiktir. Blinder 400 kompakt, Blinder 800 büyük mesafe için tercih edilir.",
        image: "/products/blinder-400-ip/image-03.jpg",
        imageAlt: "Blinder 400 IP kompakt molfez",
      },
      {
        title: "Dış mekân kullanımı",
        body: "Açık hava konser ve stadyumda IP65 zorunludur. SESAJANS blinder/strobe portföyünün tamamı dış mekân uyumludur.",
        image: "/products/blinder-800-ip/image-02.jpg",
        imageAlt: "IP65 blinder dış mekân kullanımı",
      },
    ],
    faqs: [
      {
        q: "Molfez ile blinder aynı şey mi?",
        a: "Evet. ‘Molfez’ veya ‘mollfaze’ sektör jargonudur; doğru teknik terim blinder’dır.",
      },
      {
        q: "Molfez fiyatı nasıl alınır?",
        a: "Adet, LED tipi (WW/CW/RGBW) ve kurulum ihtiyacına göre teklif hazırlarız. İletişim formundan yazın.",
      },
      {
        q: "TV çekiminde strobe titreme yapar mı?",
        a: "Strike Pro IP flicker-free PWM ile yayın uyumludur. Çekim frekansına göre ayarlanır.",
      },
    ],
    keywords: [
      "molfez",
      "led molfez",
      "led blinder",
      "blinder aydınlatma",
      "strobe sahne",
      "ip65 blinder",
      "molfez fiyat",
    ],
    productSlugs: ["blinder-400-ip", "blinder-800-ip", "strike-pro-ip"],
    categorySlugs: ["blinder-strobe"],
    relatedBlogSlugs: [
      "blinder-molfez-rehberi",
      "blinder-strobe-rehberi",
      "blinder-vs-strobe-farki",
    ],
    relatedPaths: [
      { label: "Blinder & Strobe kategorisi", href: "/urunler/kategori/blinder-strobe" },
      { label: "Fiyat / teklif", href: "/robot-isik-fiyat" },
      { label: "Karşılaştırma", href: "/karsilastirma" },
    ],
  },
  {
    path: "/dj-aydinlatma",
    slug: "dj-aydinlatma",
    title: "DJ Aydınlatma",
    seoTitle: "DJ Işık & Kulüp Aydınlatma Sistemleri — SESAJANS",
    seoDescription:
      "DJ ışık ve gece kulübü aydınlatma: kompakt moving head, wash, LED bar. Bar, kulüp ve etkinlik paketleri — teklif alın.",
    eyebrow: "DJ & Kulüp",
    h1: "DJ Işık ve Kulüp Aydınlatma",
    intro:
      "DJ ışık sistemleri; bar, gece kulübü ve özel etkinliklerde müzikle senkron atmosfer yaratır. Kompakt robot ışık, zoom wash ve LED bar kombinasyonları düşük tavanlı mekânlarda yüksek etki sağlar. SESAJANS kulüp ve DJ setup’ları için seçim, kurulum ve DMX desteği sunar.",
    heroImage: "/products/led-beam-wash-150/image-01.jpg",
    heroImageAlt: "LED Beam Wash 150 — DJ ve kulüp ışığı",
    sections: [
      {
        title: "DJ / kulüp için doğru fixture",
        body: "LED Beam Wash 150 hafif gövde ve 7°–45° zoom ile kulüp tavınına uygundur. Beam King 380 orta-büyük DJ sahnesinde keskin beam sağlar. Diamond Line LED bar booth ve dekor çizgisi için idealdir.",
        image: "/products/beam-king-380/image-06.jpg",
        imageAlt: "Beam King 380 kulüp beam",
      },
      {
        title: "Ses aktif ve DMX",
        body: "Küçük mekânlarda ses tetiklemeli modlar hızlı kurulum sağlar; profesyonel kulüplerde DMX/konsol kontrolü önerilir. SESAJANS her iki senaryoyu da destekler.",
        image: "/products/led-beam-wash-150/image-02.jpg",
        imageAlt: "LED Beam Wash 150 DMX kontrol",
      },
      {
        title: "Paket ve teklif",
        body: "Booth + dans alanı + bar hattı için adetli paket önerisi hazırlarız. Satın alma veya kısa süreli kiralama seçenekleri mevcuttur.",
        image: "/products/diamond-line-1240-eco/image-01.jpg",
        imageAlt: "Diamond Line LED bar DJ booth dekor",
      },
    ],
    faqs: [
      {
        q: "DJ ışık ile moving head farkı nedir?",
        a: "DJ ışık genel bir ihtiyaç tanımıdır; çözümün büyük kısmı moving head (robot ışık), wash ve efekt ünitelerinden oluşur.",
      },
      {
        q: "Küçük bar için minimum set nedir?",
        a: "Genelde 2–4 kompakt wash/beam + opsiyonel LED bar yeterlidir. Mekân ölçüsüne göre netleştiririz.",
      },
      {
        q: "Kurulum ve programlama yapıyor musunuz?",
        a: "Evet. Montaj, adresleme ve temel show programı dahil paketler sunuyoruz.",
      },
    ],
    keywords: [
      "dj ışık",
      "dj aydınlatma",
      "kulüp aydınlatma",
      "gece kulübü aydınlatma",
      "bar sahne ışığı",
      "dj ışık fiyat",
    ],
    productSlugs: [
      "led-beam-wash-150",
      "beam-king-380",
      "diamond-line-1240-eco",
      "wash-3715",
    ],
    relatedBlogSlugs: [
      "dj-kulup-isik-sistemi",
      "wash-moving-head-rehberi",
      "robot-isik-nasil-secilir",
    ],
    relatedPaths: [
      { label: "Gece kulübü kullanım alanı", href: "/kullanim-alanlari/gece-kulubu" },
      { label: "Robot ışık", href: "/robot-isik" },
      { label: "Teklif al", href: "/iletisim" },
    ],
  },
  {
    path: "/satin-al",
    slug: "satin-al",
    title: "Sahne Aydınlatma Satın Al",
    seoTitle: "Sahne Aydınlatma Satın Al — Moving Head & Robot Işık | SESAJANS",
    seoDescription:
      "Profesyonel sahne aydınlatma ürünlerini satın alın: moving head, beam, wash, blinder, strobe, LED bar. Proje bazlı teklif, stoktan teslimat, kurulum ve DMX desteği — SESAJANS.",
    eyebrow: "Satın Alma",
    h1: "Profesyonel Sahne Aydınlatma Satın Alın",
    intro:
      "SESAJANS olarak moving head (robot ışık), beam, wash, blinder, strobe ve LED bar ürünlerini doğrudan satış modeliyle sunuyoruz. Konser, festival, gece kulübü, fuar ve kurumsal etkinlik projeleriniz için doğru ürünü seçmenize yardımcı olur; stoktan hızlı teslimat, kurulum ve DMX programlama desteği sağlarız. Sabit online fiyat yerine projenize özel güncel teklif hazırlarız.",
    heroImage: "/products/beam-king-380/image-04.jpg",
    heroImageAlt: "SESAJANS profesyonel sahne aydınlatma satın alma",
    sections: [
      {
        title: "Neden SESAJANS'dan satın almalısınız?",
        body: "2012'den bu yana Türkiye genelinde konser, festival, TV prodüksiyonu ve kurumsal etkinlikler için profesyonel sahne aydınlatma çözümleri sunuyoruz. Yalnızca ürün satmıyoruz: mekânınıza göre ürün seçimi, truss montajı, DMX adresleme, konsol programlama ve operatör eğitimi dahil anahtar teslim paketler sunuyoruz. İstanbul Şişli merkezli stok ile hızlı teslimat ve yerel teknik servis avantajı sağlıyoruz.",
        image: "/products/wash-3715/image-01.jpg",
        imageAlt: "Wash 3715 — profesyonel sahne aydınlatma",
      },
      {
        title: "Satın alma süreci",
        body: "1) İletişim formu, telefon veya WhatsApp ile proje detaylarınızı paylaşın. 2) Mekân tipi, adet ve bütçe bandına göre ürün önerisi alın. 3) 1 iş günü içinde proje bazlı fiyat teklifi. 4) Onay sonrası stoktan teslimat veya kurulum planlaması. 5) İsteğe bağlı montaj, DMX programlama ve saha testi. İstanbul içi keşif çoğu projede ücretsizdir.",
        image: "/products/beam-king-ip/image-01.webp",
        imageAlt: "Beam King IP — satın alma süreci",
      },
      {
        title: "Hangi ürünleri satıyoruz?",
        body: "Beam moving head (Beam King 380, Beam King IP), wash moving head (Wash 3715, LED Beam Wash 150), blinder/strobe (Blinder 400 IP, Blinder 800 IP, Strike Pro IP), LED bar (Diamond Line 1240 Eco, Tornado IP) ve efekt üniteleri. İç mekân ve dış mekân (IP65/IP66) seçenekleri mevcuttur. Tek seferlik etkinlikler için kiralama alternatifi de sunulur.",
        image: "/products/blinder-800-ip/image-01.jpg",
        imageAlt: "Blinder 800 IP — blinder satın alma",
      },
    ],
    faqs: [
      {
        q: "SESAJANS'tan nasıl ürün satın alabilirim?",
        a: "İletişim formu, telefon (+90 530 405 67 68) veya WhatsApp üzerinden proje detaylarınızı paylaşın. 1 iş günü içinde ürün önerisi ve fiyat teklifi ile dönüş yaparız.",
      },
      {
        q: "Sitede neden fiyat göremiyorum?",
        a: "Döviz, stok ve proje konfigürasyonu nedeniyle sabit liste fiyatı yanıltıcı olabilir. Her teklif projenize özel hazırlanır.",
      },
      {
        q: "Kurulum dahil satın alabilir miyim?",
        a: "Evet. Ürün satışı, truss montajı, DMX programlama ve operatör eğitimi paket olarak sunulabilir.",
      },
      {
        q: "Hangi şehirlere teslimat yapıyorsunuz?",
        a: "Türkiye genelinde proje bazlı teslimat ve montaj koordinasyonu yapıyoruz. İstanbul ve çevre illere hızlı saha desteği sağlıyoruz.",
      },
      {
        q: "Satın alma mı kiralama mı daha uygun?",
        a: "Tek seferlik etkinliklerde kiralama; sürekli kullanılan mekânlarda satın alma genelde daha ekonomiktir. Projenize göre danışmanlık sunuyoruz.",
      },
      {
        q: "Garanti ve satış sonrası destek var mı?",
        a: "Evet. Yedek parça, firmware güncelleme ve teknik servis ile uzun vadeli iş ortaklığı hedefliyoruz.",
      },
    ],
    keywords: [
      "sahne aydınlatma satın al",
      "moving head satın al",
      "robot ışık satın al",
      "profesyonel sahne ışığı satın al",
      "beam moving head satın al",
      "sahne aydınlatma teklif",
      "sesajans satın al",
    ],
    productSlugs: [
      "beam-king-380",
      "beam-king-ip",
      "wash-3715",
      "led-beam-wash-150",
      "blinder-400-ip",
      "blinder-800-ip",
      "diamond-line-1240-eco",
      "strike-pro-ip",
      "tornado-ip",
    ],
    relatedBlogSlugs: [
      "moving-head-fiyat-rehberi",
      "aydinlatma-kiralama-vs-satinalma",
      "beam-vs-wash-satinalma",
      "robot-isik-nasil-secilir",
    ],
    relatedPaths: [
      { label: "Tüm ürünler", href: "/urunler" },
      { label: "Robot ışık fiyat", href: "/robot-isik-fiyat" },
      { label: "İletişim / teklif", href: "/iletisim" },
      { label: "Hakkımızda", href: "/hakkimizda" },
    ],
  },
];

export function getKeywordHub(slug: string): KeywordHub | undefined {
  return keywordHubs.find((h) => h.slug === slug);
}

export function getKeywordHubByPath(path: string): KeywordHub | undefined {
  return keywordHubs.find((h) => h.path === path);
}
