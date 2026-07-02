export type CityLanding = {
  slug: string;
  path: string;
  city: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  sections: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  keywords: string[];
  productSlugs: string[];
};

export const istanbulLanding: CityLanding = {
  slug: "istanbul-sahne-aydinlatma",
  path: "/istanbul-sahne-aydinlatma",
  city: "İstanbul",
  title: "İstanbul Sahne Aydınlatma",
  seoTitle: "İstanbul Sahne Aydınlatma — SESAJANS Şişli",
  seoDescription:
    "İstanbul konser, festival, düğün ve kurumsal etkinlik sahne aydınlatması. Şişli merkezli distribütör, kurulum ve teknik destek.",
  intro:
    "SESAJANS, İstanbul ve Marmara bölgesinde profesyonel sahne aydınlatma distribütörü olarak moving head, blinder, strobe ve LED bar çözümleri sunar. Şişli merkez ofisimizden keşif, teklif, kurulum ve satış sonrası destek sağlıyoruz.",
  sections: [
    {
      title: "Hizmet verdiğimiz İstanbul ilçeleri",
      body: "Şişli, Beşiktaş, Kadıköy, Üsküdar, Bakırköy, Beyoğlu, Sarıyer, Ataşehir, Maltepe ve tüm İstanbul genelinde konser salonu, otel, fuar alanı ve açık hava mekânlarına hizmet veriyoruz.",
    },
    {
      title: "Ürün ve hizmet kapsamı",
      body: "Moving head beam ve wash, IP66 dış mekân üniteleri, blinder-strobe, LED bar, DMX programlama, truss danışmanlığı, operatör eğitimi ve acil kiralama desteği.",
    },
    {
      title: "Neden SESAJANS?",
      body: "12+ yıl sektör tecrübesi, 500+ tamamlanan proje, stoktan hızlı teslimat, garanti ve yerel teknik servis. Harbiye, Kültür Merkezi ve fuar alanı referanslarımızı projeler sayfamızda inceleyebilirsiniz.",
    },
  ],
  faqs: [
    {
      q: "İstanbul içi keşif ücretsiz mi?",
      a: "Evet, proje kapsamına göre ücretsiz keşif ve fixture önerisi sunuyoruz.",
    },
    {
      q: "Acil etkinlik için kiralama var mı?",
      a: "Stok durumuna göre kısa süreli kiralama ve operatörlü paketler mevcuttur.",
    },
    {
      q: "Ofis adresiniz nerede?",
      a: "Halide Edip Adıvar Mah. Gül 2 Sk. No:10, 34382 Şişli/İstanbul.",
    },
  ],
  keywords: [
    "istanbul sahne aydınlatma",
    "şişli aydınlatma",
    "istanbul moving head",
    "konser ışığı istanbul",
  ],
  productSlugs: ["beam-king-ip", "wash-3715", "blinder-800-ip"],
};

export const ankaraLanding: CityLanding = {
  slug: "ankara-sahne-aydinlatma",
  path: "/ankara-sahne-aydinlatma",
  city: "Ankara",
  title: "Ankara Sahne Aydınlatma",
  seoTitle: "Ankara Sahne Aydınlatma — SESAJANS",
  seoDescription:
    "Ankara konser, kongre, düğün ve kurumsal etkinlik sahne aydınlatması. Moving head, wash, blinder ve LED bar çözümleri.",
  intro:
    "SESAJANS, Ankara ve çevre illerde konser salonu, kongre merkezi, otel balo salonu ve açık hava etkinlikleri için profesyonel sahne aydınlatma ekipmanı ve kurulum hizmeti sunar. İstanbul merkezli stok ve lojistik ağımızla Ankara projelerine hızlı teslimat sağlıyoruz.",
  sections: [
    {
      title: "Ankara'da hizmet alanları",
      body: "Çankaya, Yenimahalle, Keçiören, Mamak ve tüm Ankara genelinde; Congresium, ATO Congresium, otel ve fuar alanlarına yönelik kurulum ve satış desteği veriyoruz.",
    },
    {
      title: "Popüler çözümler",
      body: "Kongre ve gala gecelerinde Wash 3715 homojen yıkama; açık hava konserlerde Beam King IP ve Blinder 800 IP; düğün salonlarında LED Beam Wash 150 ve Diamond Line LED bar kombinasyonları tercih edilir.",
    },
    {
      title: "Teknik destek",
      body: "DMX programlama, operatör eğitimi, kiralama ve satış sonrası garanti hizmetleri Ankara projelerine uzaktan ve sahada desteklenir.",
    },
  ],
  faqs: [
    {
      q: "Ankara'ya teslimat süresi ne kadar?",
      a: "Stoktan ürünler için 1–3 iş günü lojistik planlanır; büyük projelerde önceden rezervasyon önerilir.",
    },
    {
      q: "Ankara'da kurulum yapıyor musunuz?",
      a: "Evet. Proje kapsamına göre sahada montaj, adresleme ve devreye alma ekibimiz görevlendirilir.",
    },
    {
      q: "Kongre salonu için hangi ürünler uygun?",
      a: "Wash 3715 ve LED Beam Wash 150 kombinasyonu çoğu kongre ve balo salonu için yeterlidir.",
    },
  ],
  keywords: ["ankara sahne aydınlatma", "ankara moving head", "ankara konser ışığı", "ankara etkinlik aydınlatma"],
  productSlugs: ["wash-3715", "beam-king-ip", "diamond-line-1240-eco"],
};

export const izmirLanding: CityLanding = {
  slug: "izmir-sahne-aydinlatma",
  path: "/izmir-sahne-aydinlatma",
  city: "İzmir",
  title: "İzmir Sahne Aydınlatma",
  seoTitle: "İzmir Sahne Aydınlatma — SESAJANS",
  seoDescription:
    "İzmir festival, konser, düğün ve fuar sahne aydınlatması. IP66 dış mekân ve moving head çözümleri.",
  intro:
    "SESAJANS, İzmir ve Ege bölgesinde festival, açık hava konser, düğün ve fuar etkinlikleri için beam, wash, blinder ve LED bar portföyü sunar. Kordon, Alsancak, Bornova ve fuar alanı projelerinde deneyimli ekibimizle hizmet veriyoruz.",
  sections: [
    {
      title: "İzmir etkinlik profili",
      body: "Yaz festivali, açık hava konseri ve sahil etkinliklerinde IP66 korumalı Beam King IP, Strike Pro IP ve Blinder 800 IP yoğun talep görür. Kapalı mekân kulüp ve düğün salonlarında kompakt moving head çözümleri öne çıkar.",
    },
    {
      title: "Bölgesel hizmet",
      body: "İzmir, Manisa, Aydın ve Muğla projelerine lojistik ve sahada kurulum desteği sağlanır. Keşif ve fixture listesi için uzaktan danışmanlık ücretsizdir.",
    },
    {
      title: "Referans alanlar",
      body: "Fuar, festival ana sahne, otel düğünü ve kurumsal lansman projelerimizi referans olarak paylaşabiliriz.",
    },
  ],
  faqs: [
    {
      q: "İzmir açık hava festivali için hangi ürünler?",
      a: "Beam King IP ana truss, Blinder 800 IP ön hat, Wash 3715 genel yıkama ve Strike Pro IP strobe katmanı önerilir.",
    },
    {
      q: "İzmir'e keşif geliyor musunuz?",
      a: "Proje büyüklüğüne göre sahada keşif veya online görüşme ile fixture planı hazırlanır.",
    },
    {
      q: "Kiralama mümkün mü?",
      a: "Evet, etkinlik tarihine göre kiralama ve operatörlü paketler sunulur.",
    },
  ],
  keywords: ["izmir sahne aydınlatma", "izmir festival ışığı", "izmir moving head", "ege aydınlatma"],
  productSlugs: ["beam-king-ip", "strike-pro-ip", "blinder-800-ip"],
};

export const cityLandings = [istanbulLanding, ankaraLanding, izmirLanding];

export function getCityLanding(slug: string): CityLanding | undefined {
  return cityLandings.find((c) => c.slug === slug);
}
