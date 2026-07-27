/**
 * SESAJANS SEO anahtar kelime envanteri.
 * Primary kelimeler en az bir URL'ye map edilmelidir.
 */

export type KeywordCluster = {
  id: string;
  primary: string[];
  secondary: string[];
  commercial: string[];
  vernacular: string[];
  targetPaths: string[];
};

export const keywordHubPaths = [
  "/robot-isik",
  "/robot-isik-fiyat",
  "/sahne-isigi",
  "/molfez",
  "/dj-aydinlatma",
] as const;

export type KeywordHubPath = (typeof keywordHubPaths)[number];

export const keywordClusters: KeywordCluster[] = [
  {
    id: "sahne",
    primary: ["sahne aydınlatma", "sahne ışığı", "profesyonel sahne ışığı"],
    secondary: ["etkinlik aydınlatma", "konser ışığı", "sahne ışık sistemi"],
    commercial: ["sahne aydınlatma fiyat", "sahne ışığı teklif"],
    vernacular: ["sahne ışığı", "konser ışığı"],
    targetPaths: ["/", "/sahne-isigi", "/blog/sahne-aydinlatma-rehberi"],
  },
  {
    id: "moving-head",
    primary: ["moving head", "robot ışık", "hareketli kafa"],
    secondary: ["robot ışık sistemi", "spot moving head", "moving head robot"],
    commercial: ["robot ışık fiyat", "moving head fiyat", "moving head teklif"],
    vernacular: ["robot ışık", "hareketli kafa"],
    targetPaths: ["/robot-isik", "/robot-isik-fiyat", "/urunler"],
  },
  {
    id: "beam",
    primary: ["moving head beam", "beam robot ışık", "ip66 beam"],
    secondary: ["380w beam", "dmx beam", "konser beam"],
    commercial: ["beam moving head fiyat", "beam moving head satın al"],
    vernacular: ["beam robot ışık"],
    targetPaths: [
      "/urunler/kategori/moving-head-beam",
      "/urunler/beam-king-380",
      "/urunler/beam-king-ip",
    ],
  },
  {
    id: "wash",
    primary: ["wash moving head", "robot boyama ışık", "wash zoom"],
    secondary: ["rgbw wash", "sahne wash", "boyama ışık"],
    commercial: ["wash moving head fiyat", "robot boyama ışık fiyat"],
    vernacular: ["robot boyama ışık", "boyama ışık"],
    targetPaths: [
      "/urunler/kategori/moving-head-wash",
      "/urunler/wash-3715",
      "/urunler/led-beam-wash-150",
    ],
  },
  {
    id: "blinder-strobe",
    primary: ["led blinder", "molfez", "strobe sahne"],
    secondary: ["ip65 blinder", "festival strobe", "led molfez"],
    commercial: ["blinder fiyat", "molfez fiyat", "strobe teklif"],
    vernacular: ["molfez", "led molfez"],
    targetPaths: ["/molfez", "/urunler/kategori/blinder-strobe"],
  },
  {
    id: "led-bar",
    primary: ["led bar", "led bar sahne", "linear led"],
    secondary: ["moving led bar", "led efekt bar", "fuar aydınlatma"],
    commercial: ["led bar fiyat", "led bar teklif"],
    vernacular: ["led bar sahne"],
    targetPaths: ["/urunler/kategori/led-bar", "/urunler/diamond-line-1240-eco"],
  },
  {
    id: "dj-kulup",
    primary: ["dj ışık", "dj aydınlatma", "kulüp aydınlatma"],
    secondary: ["gece kulübü aydınlatma", "bar sahne ışığı"],
    commercial: ["dj ışık fiyat", "kulüp aydınlatma teklif"],
    vernacular: ["dj ışık"],
    targetPaths: ["/dj-aydinlatma", "/kullanim-alanlari/gece-kulubu"],
  },
  {
    id: "kiralama",
    primary: ["aydınlatma kiralama", "moving head kiralama"],
    secondary: ["etkinlik ışık kiralama", "sahne ışığı kiralama"],
    commercial: ["aydınlatma kiralama fiyat"],
    vernacular: [],
    targetPaths: ["/kullanim-alanlari/aydinlatma-kiralama"],
  },
  {
    id: "istanbul",
    primary: ["istanbul sahne aydınlatma", "istanbul robot ışık", "istanbul moving head"],
    secondary: ["şişli sahne aydınlatma", "şişli aydınlatma"],
    commercial: ["istanbul sahne aydınlatma fiyat"],
    vernacular: ["istanbul robot ışık"],
    targetPaths: ["/istanbul-sahne-aydinlatma"],
  },
];

/** Ürün slug → ek SEO kelimeleri */
export const productKeywordMap: Record<string, string[]> = {
  "beam-king-380": [
    "beam king 380 fiyat",
    "beam king 380 teklif",
    "380w beam",
    "robot ışık beam",
  ],
  "beam-king-ip": [
    "beam king ip fiyat",
    "beam king ip teklif",
    "ip66 beam",
    "dış mekan robot ışık",
  ],
  "blinder-400-ip": [
    "blinder 400 fiyat",
    "blinder 400 teklif",
    "molfez",
    "led molfez",
  ],
  "blinder-800-ip": [
    "blinder 800 fiyat",
    "blinder 800 teklif",
    "molfez",
    "800w blinder",
  ],
  "diamond-line-1240-eco": [
    "diamond line fiyat",
    "diamond line teklif",
    "led bar fiyat",
  ],
  "led-beam-wash-150": [
    "led beam wash 150 fiyat",
    "led beam wash 150 teklif",
    "robot boyama ışık",
    "dj ışık",
  ],
  "strike-pro-ip": [
    "strike pro fiyat",
    "strike pro teklif",
    "led strobe fiyat",
  ],
  "tornado-ip": [
    "tornado ip fiyat",
    "tornado ip teklif",
    "moving led bar",
  ],
  "wash-3715": [
    "wash 3715 fiyat",
    "wash 3715 teklif",
    "robot boyama ışık",
    "wash moving head fiyat",
  ],
};

/** seo-agent seed listesi */
export const seedKeywords = [
  ...new Set(
    keywordClusters.flatMap((c) => [
      ...c.primary,
      ...c.commercial.slice(0, 2),
      ...c.vernacular,
    ]),
  ),
];

export function getPrimaryKeywords(): string[] {
  return keywordClusters.flatMap((c) => c.primary);
}

export function getKeywordCoverage(): { keyword: string; paths: string[] }[] {
  return keywordClusters.flatMap((c) =>
    c.primary.map((keyword) => ({ keyword, paths: c.targetPaths })),
  );
}
