function envOr(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

const PHONE_E164 = "+905498002510";
const PHONE_DISPLAY = "0549 800 25 10";
const WHATSAPP_E164 = "905498002510";

export const site = {
  name: "sesajans.com.tr",
  brand: "SESAJANS",
  titleTagline: "Profesyonel Sahne ve Etkinlik Aydınlatma",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sesajans.com.tr",
  /** Alternate domains that 301 to primary (see vercel.json). */
  alternateDomains: [
    "https://sesajans.com",
    "https://www.sesajans.com",
    "https://www.sesajans.com.tr",
  ] as const,
  description:
    "Profesyonel sahne ve etkinlik aydınlatma çözümleri. Moving head, blinder, strobe ve LED bar ürünleri; kurulum, teknik destek ve proje danışmanlığı.",
  slogan: "Sahneyi aydınlatan profesyonel çözümler",
  phone: envOr(process.env.NEXT_PUBLIC_PHONE, PHONE_E164),
  phoneDisplay: envOr(process.env.NEXT_PUBLIC_PHONE_DISPLAY, PHONE_DISPLAY),
  email: envOr(process.env.CONTACT_EMAIL, "info@sesajans.com.tr"),
  whatsapp: envOr(process.env.NEXT_PUBLIC_WHATSAPP, WHATSAPP_E164),
  addressLine: "Halide Edip Adıvar Mah. Gül 2 Sk. No:10",
  addressDistrict: "Şişli",
  addressCity: "İstanbul",
  postalCode: "34382",
  address: "Halide Edip Adıvar Mah. Gül 2 Sk. No:10, 34382 Şişli/İstanbul, Türkiye",
  addressUrl:
    "https://www.google.com/maps/search/?api=1&query=Halide+Edip+Ad%C4%B1var+Mah.+G%C3%BCl+2+Sk.+No%3A10%2C+34382+%C5%9Ei%C5%9Fli%2F%C4%B0stanbul%2C+T%C3%BCrkiye",
  locale: "tr-TR",
  foundedYear: 2012,
  social: {
    instagram: "https://instagram.com/sesajans",
    linkedin: "https://linkedin.com/company/sesajans",
    youtube: "https://youtube.com/@sesajans",
  },
  stats: {
    experience: "12+",
    products: "9+",
    projects: "500+",
    support: "7/24",
  },
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
      opens: "08:30",
      closes: "18:30",
    },
    {
      days: ["Saturday"] as const,
      opens: "09:00",
      closes: "13:30",
    },
  ],
} as const;

export const socialLinks = [
  { label: "Instagram", href: site.social.instagram },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "WhatsApp", href: `https://wa.me/${site.whatsapp}` },
] as const;

export const mainNav = [
  { label: "Anasayfa", href: "/" },
  { label: "Ürünler", href: "/urunler" },
  { label: "Blog", href: "/blog" },
  { label: "Kullanım Alanları", href: "/kullanim-alanlari" },
  { label: "Projeler", href: "/projeler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "SSS", href: "/sss" },
  { label: "İletişim", href: "/iletisim" },
];

export const footerNav = {
  urunler: {
    title: "Ürünler",
    links: [
      { label: "Beam King 380", href: "/urunler/beam-king-380" },
      { label: "Beam King IP", href: "/urunler/beam-king-ip" },
      { label: "Blinder 400 IP", href: "/urunler/blinder-400-ip" },
      { label: "Blinder 800 IP", href: "/urunler/blinder-800-ip" },
      { label: "Diamond Line 1240 Eco", href: "/urunler/diamond-line-1240-eco" },
      { label: "LED Beam Wash 150", href: "/urunler/led-beam-wash-150" },
      { label: "Wash 3715", href: "/urunler/wash-3715" },
      { label: "Strike Pro IP", href: "/urunler/strike-pro-ip" },
      { label: "Tornado IP", href: "/urunler/tornado-ip" },
      { label: "Tüm Ürünler", href: "/urunler" },
    ],
  },
  kurumsal: {
    title: "Kurumsal",
    links: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Blog", href: "/blog" },
      { label: "Projeler", href: "/projeler" },
      { label: "Kullanım Alanları", href: "/kullanim-alanlari" },
      { label: "İstanbul Aydınlatma", href: "/istanbul-sahne-aydinlatma" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
  destek: {
    title: "Destek",
    links: [
      { label: "Sık Sorulan Sorular", href: "/sss" },
      { label: "Teklif Al", href: "/iletisim" },
    ],
  },
  yasal: {
    title: "Yasal",
    links: [
      { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
      { label: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma-metni" },
      { label: "Çerez Politikası", href: "/cerez-politikasi" },
      { label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
    ],
  },
};
