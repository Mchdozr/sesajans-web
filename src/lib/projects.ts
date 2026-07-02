import type { ProductCategory } from "./categories";

export type Project = {
  slug: string;
  title: string;
  venue: string;
  city: string;
  year: number;
  client?: string;
  productSlugs: string[];
  images: string[];
  summary: string;
  detail: string;
  challenges: string[];
  solutions: string[];
  category: ProductCategory;
};

export const projects: Project[] = [
  {
    slug: "istanbul-acikhava-konser-2024",
    title: "İstanbul Açık Hava Konseri",
    venue: "Harbiye Cemil Topuzlu Açıkhava Tiyatrosu",
    city: "İstanbul",
    year: 2024,
    productSlugs: ["beam-king-ip", "blinder-800-ip", "strike-pro-ip"],
    images: [
      "/products/beam-king-ip/image-01.webp",
      "/products/blinder-800-ip/image-01.jpg",
      "/products/strike-pro-ip/image-01.jpg",
    ],
    summary:
      "Ana sahne truss kurulumunda IP66 beam ve blinder kombinasyonu ile 8.000 kişilik açık hava konser aydınlatması.",
    detail:
      "Harbiye açıkhava tiyatrosu ana sahnesinde 18× Beam King IP, 8× Blinder 800 IP ve 6× Strike Pro IP ile üç katmanlı aydınlatma tasarımı uygulandı. Ön truss beam hattı sanatçı vurgusu, orta hat wash fill ve ön blinder-strobe hattı ritim senkronizasyonu için kullanıldı.",
    challenges: [
      "Açık hava nem ve yağış riski",
      "Geniş seyirci alanı için yeterli ışık çıkışı",
      "Kısıtlı kurulum süresi",
    ],
    solutions: [
      "IP66 fixture ile hava koşullarına dayanım",
      "420W beam ile 80 m+ etkili mesafe",
      "Önceden programlanmış DMX şov ve hızlı adresleme",
    ],
    category: "moving-head-beam",
  },
  {
    slug: "antalya-festival-sahne-2023",
    title: "Antalya Yaz Festivali Ana Sahne",
    venue: "Konyaaltı Sahil Etkinlik Alanı",
    city: "Antalya",
    year: 2023,
    productSlugs: ["tornado-ip", "beam-king-ip", "blinder-400-ip"],
    images: [
      "/products/tornado-ip/image-01.jpg",
      "/products/beam-king-ip/image-03.webp",
      "/products/blinder-400-ip/image-02.jpg",
    ],
    summary:
      "Çok günlük festival prodüksiyonunda strobe, beam ve blinder katmanları ile gece programı aydınlatma tasarımı.",
    detail:
      "Ana sahne ve dans pisti çevresinde Tornado IP çok başlı efekt, Beam King IP uzun mesafe vurgu ve Blinder 400 IP ön hat aydınlatması kuruldu. Üç günlük festival boyunca 7/24 teknik ekip desteği sağlandı.",
    challenges: ["Kumsal zemin ve tuzlu hava", "Gece-gündüz farklı program akışı", "Çoklu sanatçı geçiş süreleri"],
    solutions: ["IP65+ koruma sınıfı ürünler", "Sahne preset kütüphanesi", "Yedek fixture stoğu"],
    category: "blinder-strobe",
  },
  {
    slug: "izmir-fuar-standi-2024",
    title: "İzmir Fuar Stand Aydınlatması",
    venue: "Fuar İzmir",
    city: "İzmir",
    year: 2024,
    productSlugs: ["diamond-line-1240-eco", "led-beam-wash-150"],
    images: [
      "/products/diamond-line-1240-eco/image-01.jpg",
      "/products/led-beam-wash-150/image-02.jpg",
    ],
    summary:
      "Kurumsal lansman standında linear LED bar ve kompakt wash moving head ile marka alanı vurgusu.",
    detail:
      "120 m² stand alanında Diamond Line 1240 Eco ile çevre aydınlatması, sunum alanında LED Beam Wash 150 ile konuşmacı vurgusu tasarlandı. Marka renk kodlarına özel DMX program hazırlandı.",
    challenges: ["Düşük tavan yüksekliği", "Günlük program tekrarı", "Hızlı kurulum-söküm"],
    solutions: ["Kompakt wash moving head", "Önceden kayıtlı renk sahneleri", "Modüler LED bar bağlantısı"],
    category: "led-bar",
  },
  {
    slug: "ankara-kulup-kurulum-2023",
    title: "Ankara Gece Kulübü Sahne Yenileme",
    venue: "Çankaya",
    city: "Ankara",
    year: 2023,
    productSlugs: ["beam-king-380", "led-beam-wash-150"],
    images: [
      "/products/beam-king-380/image-04.jpg",
      "/products/led-beam-wash-150/image-01.jpg",
    ],
    summary:
      "Kompakt sahne alanında beam ve wash moving head kombinasyonu; DMX programlama ve devreye alma dahil.",
    detail:
      "8× Beam King 380 ve 6× LED Beam Wash 150 ile dans pisti ve DJ kabini aydınlatması yenilendi. Haftalık şov programı güncelleme desteği verildi.",
    challenges: ["Düşük tavan", "Yoğun duman makinesi kullanımı", "Sessiz çalışma gereksinimi"],
    solutions: ["Kompakt fixture seçimi", "Hızlı pan/tilt hareket profili", "Düşük gürültü fan modu"],
    category: "moving-head-beam",
  },
  {
    slug: "bursa-tiyatro-salonu-2024",
    title: "Bursa Tiyatro Salonu Wash Sistemi",
    venue: "Kent Meydanı Kültür Merkezi",
    city: "Bursa",
    year: 2024,
    productSlugs: ["wash-3715"],
    images: [
      "/products/wash-3715/image-01.jpg",
      "/products/wash-3715/image-03.jpg",
    ],
    summary:
      "400 kişilik salonda RGBW zoom wash moving head ile sessiz ve homojen sahne yıkama aydınlatması.",
    detail:
      "12× Wash 3715 ünitesi FOH ve sahne üstü truss'ta homojen yıkama sağlayacak şekilde konumlandırıldı. Opera ve konser modları için ayrı DMX preset setleri oluşturuldu.",
    challenges: ["Akustik hassasiyet", "Geniş zoom aralığı ihtiyacı", "Düşük ışık seviyesi sahneleri"],
    solutions: ["Sessiz fan profili", "37×15W RGBW zoom", "Hassas 16-bit dimmer"],
    category: "moving-head-wash",
  },
  {
    slug: "izmir-dugun-salonu-2024",
    title: "İzmir Düğün Salonu Aydınlatması",
    venue: "Alsancak Düğün Salonu",
    city: "İzmir",
    year: 2024,
    productSlugs: ["wash-3715", "diamond-line-1240-eco", "led-beam-wash-150"],
    images: [
      "/products/wash-3715/image-02.jpg",
      "/products/diamond-line-1240-eco/image-03.jpg",
    ],
    summary:
      "600 kişilik düğün salonunda wash, LED bar ve efekt moving head ile sıcak tonlu atmosfer aydınlatması.",
    detail:
      "Salon tavan truss'ında 10× Wash 3715 genel aydınlatma, sahne arkasında Diamond Line 1240 Eco dekor çizgisi ve dans pistinde LED Beam Wash 150 vurgu olarak konumlandırıldı.",
    challenges: ["Sıcak beyaz renk tutarlılığı", "Hızlı program değişimi", "Misafir fotoğraf çekimi için parlaklık kontrolü"],
    solutions: ["RGBW karışım kalibrasyonu", "Kablosuz DMX kumanda", "Dimmer preset senaryoları"],
    category: "moving-head-wash",
  },
  {
    slug: "istanbul-kurumsal-lansman-2025",
    title: "İstanbul Kurumsal Lansman",
    venue: "Haliç Kongre Merkezi",
    city: "İstanbul",
    year: 2025,
    productSlugs: ["beam-king-380", "blinder-400-ip", "diamond-line-1240-eco"],
    images: [
      "/products/beam-king-380/image-04.jpg",
      "/products/blinder-400-ip/image-01.jpg",
    ],
    summary:
      "Kurumsal ürün lansmanında beam, blinder ve linear bar ile sahne ve LED ekran çevresi aydınlatması.",
    detail:
      "Ana sahne truss'ında Beam King 380 ile logo projeksiyonu, Blinder 400 IP ile konuşmacı vurgusu ve LED ekran çerçevesinde Diamond Line bar uygulandı.",
    challenges: ["Televizyon yayını için flicker", "Kısa provalı süre", "Marka renk doğruluğu"],
    solutions: ["Flicker-free mod testi", "Önceden hazır DMX dosyası", "Renk kalibrasyonu"],
    category: "moving-head-beam",
  },
];

export const projectCategoryFilters = Array.from(
  new Set(projects.map((p) => p.category)),
) as ProductCategory[];
