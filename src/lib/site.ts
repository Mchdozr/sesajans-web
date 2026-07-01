export const site = {
  name: "sesajans.com.tr",
  brand: "SESAJANS",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sesajans.com.tr",
  description:
    "Profesyonel sahne ve etkinlik aydınlatma çözümleri. Moving head, blinder, strobe ve LED bar ürünleri; kurulum, teknik destek ve proje danışmanlığı.",
  slogan: "Sahneyi aydınlatan profesyonel çözümler",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+902121234567",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "+90 212 123 45 67",
  email: process.env.CONTACT_EMAIL ?? "info@sesajans.com.tr",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "902121234567",
  addressLine: "Maslak Mah. Büyükdere Cad. No:245",
  addressDistrict: "Sarıyer",
  addressCity: "İstanbul",
  postalCode: "34398",
  address: "Maslak Mah. Büyükdere Cad. No:245, Sarıyer / İstanbul",
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
} as const;

export const socialLinks = [
  { label: "Instagram", href: site.social.instagram },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "YouTube", href: site.social.youtube },
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
