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
    category: "moving-head-wash",
  },
];

export const projectCategoryFilters = Array.from(
  new Set(projects.map((p) => p.category)),
) as ProductCategory[];
