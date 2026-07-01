export const site = {
  name: "sesajans.com.tr",
  brand: "SESAJANS",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sesajans.com.tr",
  description:
    "Profesyonel sahne ve etkinlik aydınlatma çözümleri. Moving head, blinder, strobe ve LED bar ürünleri; kurulum, teknik destek ve proje danışmanlığı.",
  slogan: "Sahneyi aydınlatan profesyonel çözümler",
  phone: "+902121234567",
  phoneDisplay: "+90 212 123 45 67",
  email: process.env.CONTACT_EMAIL ?? "info@sesajans.com.tr",
  whatsapp: "902121234567",
  address: "Maslak, Sarıyer / İstanbul, Türkiye",
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

export const mainNav = [
  { label: "Anasayfa", href: "/" },
  { label: "Ürünler", href: "/urunler" },
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
