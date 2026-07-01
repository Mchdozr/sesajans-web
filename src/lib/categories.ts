export type ProductCategory =
  | "moving-head-beam"
  | "moving-head-wash"
  | "blinder-strobe"
  | "led-bar";

export const categories: Record<
  ProductCategory,
  { label: string; description: string }
> = {
  "moving-head-beam": {
    label: "Moving Head Beam",
    description: "Keskin beam efektleri ve prizma çözümleri",
  },
  "moving-head-wash": {
    label: "Moving Head Wash",
    description: "Geniş alan yıkama ve zoom beam çözümleri",
  },
  "blinder-strobe": {
    label: "Blinder & Strobe",
    description: "Yüksek çıkışlı blinder ve strobe sistemleri",
  },
  "led-bar": {
    label: "LED Bar & Efekt",
    description: "Linear bar ve çok başlı efekt üniteleri",
  },
};
