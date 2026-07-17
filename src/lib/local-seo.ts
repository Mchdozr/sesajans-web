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

export const antalyaLanding: CityLanding = {
  slug: "antalya-sahne-aydinlatma",
  path: "/antalya-sahne-aydinlatma",
  city: "Antalya",
  title: "Antalya Sahne Aydınlatma",
  seoTitle: "Antalya Sahne Aydınlatma — SESAJANS",
  seoDescription:
    "Antalya festival, konser, düğün ve otel etkinlik sahne aydınlatması. IP66 dış mekân beam, blinder ve efekt çözümleri.",
  intro:
    "SESAJANS, Antalya ve Akdeniz bölgesinde yaz festivali, açık hava konser, otel etkinliği ve düğün prodüksiyonları için profesyonel sahne aydınlatma ekipmanı ve kurulum hizmeti sunar. Konyaaltı festival referansımızla sahilde ve açık alanda IP korumalı çözümler sağlıyoruz.",
  sections: [
    {
      title: "Antalya'da hizmet alanları",
      body: "Muratpaşa, Konyaaltı, Lara, Kepez ve tüm Antalya genelinde; sahil etkinlik alanları, otel amfileri, düğün salonları ve açık hava festivallerine yönelik kurulum ve satış desteği veriyoruz.",
    },
    {
      title: "Popüler çözümler",
      body: "Yaz festivali ve sahil konserlerinde Beam King IP uzun mesafe vurgu; Tornado IP çok başlı efekt; Blinder 400 IP ön hat patlama efekti yoğun talep görür. Otel düğünlerinde Wash 3715 ve Diamond Line 1240 Eco kombinasyonu tercih edilir.",
    },
    {
      title: "Referans projeler",
      body: "Antalya Yaz Festivali ana sahne projemizde üç günlük festival boyunca IP65+ ürünlerle kesintisiz teknik destek sağlandı. Detayları projeler sayfamızda inceleyebilirsiniz.",
    },
  ],
  faqs: [
    {
      q: "Antalya sahil festivali için hangi ürünler?",
      a: "Tuzlu hava ve kumsal zemin için IP66 Beam King IP, Tornado IP ve Blinder 400 IP önerilir.",
    },
    {
      q: "Antalya'ya teslimat süresi?",
      a: "Stoktan ürünler için 2–4 iş günü lojistik planlanır; festival sezonunda erken rezervasyon önerilir.",
    },
    {
      q: "Otel etkinliği için keşif yapılıyor mu?",
      a: "Evet, otel ve açık alan projelerinde sahada veya online keşif ile fixture planı hazırlanır.",
    },
  ],
  keywords: ["antalya sahne aydınlatma", "antalya festival ışığı", "antalya moving head", "akdeniz aydınlatma"],
  productSlugs: ["beam-king-ip", "tornado-ip", "blinder-400-ip"],
};

export const bursaLanding: CityLanding = {
  slug: "bursa-sahne-aydinlatma",
  path: "/bursa-sahne-aydinlatma",
  city: "Bursa",
  title: "Bursa Sahne Aydınlatma",
  seoTitle: "Bursa Sahne Aydınlatma — SESAJANS",
  seoDescription:
    "Bursa tiyatro, konser, düğün ve kurumsal etkinlik sahne aydınlatması. Wash moving head, beam ve LED bar çözümleri.",
  intro:
    "SESAJANS, Bursa ve Marmara bölgesinde tiyatro salonu, kültür merkezi, düğün ve kurumsal etkinlikler için profesyonel sahne aydınlatma çözümleri sunar. Bursa Tiyatro Salonu wash sistemi referansımızla sessiz ve homojen salon aydınlatması konusunda deneyimliyiz.",
  sections: [
    {
      title: "Bursa'da hizmet alanları",
      body: "Osmangazi, Nilüfer, Yıldırım ve tüm Bursa genelinde; kültür merkezleri, konferans salonları, otel balo salonları ve açık hava etkinlik alanlarına kurulum ve satış desteği sağlıyoruz.",
    },
    {
      title: "Popüler çözümler",
      body: "Tiyatro ve konferans salonlarında Wash 3715 RGBW zoom wash ile homojen sahne yıkaması; düğün salonlarında LED Beam Wash 150 ve Diamond Line 1240 Eco; açık hava etkinliklerde Beam King IP ve Blinder 800 IP kombinasyonu tercih edilir.",
    },
    {
      title: "Referans projeler",
      body: "Kent Meydanı Kültür Merkezi tiyatro salonu projemizde 400 kişilik salonda sessiz wash moving head sistemi kuruldu. Operatör eğitimi ve preset sahne görünümleri dahil teslim edildi.",
    },
  ],
  faqs: [
    {
      q: "Bursa tiyatro salonu için hangi ürünler?",
      a: "Wash 3715 geniş zoom açısı ve sessiz fan profili ile 400–800 kişilik salonlar için idealdir.",
    },
    {
      q: "Bursa'ya kurulum yapılıyor mu?",
      a: "Evet, proje kapsamına göre sahada montaj, adresleme ve devreye alma ekibimiz görevlendirilir.",
    },
    {
      q: "Kiralama seçeneği var mı?",
      a: "Evet, düğün ve kurumsal etkinlikler için kısa süreli kiralama paketleri sunulur.",
    },
  ],
  keywords: ["bursa sahne aydınlatma", "bursa tiyatro ışığı", "bursa moving head", "bursa etkinlik aydınlatma"],
  productSlugs: ["wash-3715", "led-beam-wash-150", "beam-king-ip"],
};

export const adanaLanding: CityLanding = {
  slug: "adana-sahne-aydinlatma",
  path: "/adana-sahne-aydinlatma",
  city: "Adana",
  title: "Adana Sahne Aydınlatma",
  seoTitle: "Adana Sahne Aydınlatma — SESAJANS",
  seoDescription:
    "Adana konser, festival, düğün ve kurumsal etkinlik sahne aydınlatması. Moving head, blinder ve IP65 dış mekân çözümleri.",
  intro:
    "SESAJANS, Adana ve Çukurova bölgesinde açık hava konseri, festival, düğün ve kurumsal etkinlikler için profesyonel sahne aydınlatma ekipmanı ve kurulum hizmeti sunar. Sıcak iklim koşullarına uygun soğutma profilli üniteler ve IP korumalı dış mekân çözümleriyle bölge projelerine destek veriyoruz.",
  sections: [
    {
      title: "Adana'da hizmet alanları",
      body: "Seyhan, Çukurova, Yüreğir, Sarıçam ve tüm Adana genelinde; Merkez Park etkinlik alanları, kongre merkezleri, otel balo salonları ve açık hava festival sahnelerine kurulum ve satış desteği sağlıyoruz. Mersin ve Osmaniye projelerine de aynı lojistik hatla ulaşıyoruz.",
    },
    {
      title: "Popüler çözümler",
      body: "Açık hava festival ve portakal çiçeği dönemi etkinliklerinde Beam King IP ve Blinder 800 IP; düğün ve balo salonlarında LED Beam Wash 150 ile Wash 3715; sahne dekorunda Diamond Line 1240 Eco tercih edilir. Yüksek yaz sıcaklıklarında fixture soğutma ve güç planlaması projeye dahil edilir.",
    },
    {
      title: "Teknik destek",
      body: "DMX adresleme, konsol programlama, operatör eğitimi ve satış sonrası garanti hizmetleri Adana projelerinde uzaktan ve sahada desteklenir. Festival sezonu için erken rezervasyon önerilir.",
    },
  ],
  faqs: [
    {
      q: "Adana açık hava konseri için hangi ürünler uygun?",
      a: "Ana truss için Beam King IP, ön hat için Blinder 800 IP, genel yıkama için Wash 3715 önerilir. Yaz etkinliklerinde IP65+ koruma standarttır.",
    },
    {
      q: "Adana'ya teslimat süresi ne kadar?",
      a: "Stoktan ürünler için 2–4 iş günü lojistik planlanır; büyük projelerde önceden rezervasyon önerilir.",
    },
    {
      q: "Sahada kurulum yapıyor musunuz?",
      a: "Evet. Proje kapsamına göre montaj, adresleme ve devreye alma ekibimiz Adana'da görevlendirilir.",
    },
  ],
  keywords: ["adana sahne aydınlatma", "adana konser ışığı", "adana moving head", "çukurova etkinlik aydınlatma"],
  productSlugs: ["beam-king-ip", "blinder-800-ip", "wash-3715"],
};

export const gaziantepLanding: CityLanding = {
  slug: "gaziantep-sahne-aydinlatma",
  path: "/gaziantep-sahne-aydinlatma",
  city: "Gaziantep",
  title: "Gaziantep Sahne Aydınlatma",
  seoTitle: "Gaziantep Sahne Aydınlatma — SESAJANS",
  seoDescription:
    "Gaziantep düğün, konser, fuar ve kurumsal etkinlik sahne aydınlatması. Moving head, LED bar ve blinder çözümleri.",
  intro:
    "SESAJANS, Gaziantep ve Güneydoğu Anadolu bölgesinde düğün salonu, fuar, konser ve kurumsal etkinlik prodüksiyonları için profesyonel sahne aydınlatma çözümleri sunar. Bölgenin güçlü düğün ve fuar ekonomisine uygun kompakt ve yüksek etkili fixture paketleriyle hizmet veriyoruz.",
  sections: [
    {
      title: "Gaziantep'te hizmet alanları",
      body: "Şahinbey, Şehitkamil ve tüm Gaziantep genelinde; düğün salonları, Ortadoğu Fuar Merkezi etkinlikleri, otel baloları ve açık hava konser alanlarına kurulum ve satış desteği sağlıyoruz. Şanlıurfa ve Kahramanmaraş projelerine de aynı hatla ulaşıyoruz.",
    },
    {
      title: "Popüler çözümler",
      body: "Düğün salonlarında LED Beam Wash 150 ve Diamond Line 1240 Eco kombinasyonu ekonomik ve etkili bir paket sunar. Fuar standlarında Blinder 400 IP vurgu aydınlatması; açık hava konserlerde Beam King IP ve Strike Pro IP tercih edilir.",
    },
    {
      title: "Teknik destek",
      body: "Fixture seçimi, DMX programlama ve operatör eğitimi uzaktan danışmanlıkla; kurulum ve devreye alma sahada ekiplerimizle yürütülür. Düğün sezonu öncesi paket teklifleri için erken iletişim önerilir.",
    },
  ],
  faqs: [
    {
      q: "Düğün salonu için ekonomik paket var mı?",
      a: "LED Beam Wash 150 + Diamond Line 1240 Eco kombinasyonu çoğu düğün salonu için yeterli ve bütçe dostudur. Salon ölçünüze göre adet planı çıkarıyoruz.",
    },
    {
      q: "Gaziantep'e teslimat süresi ne kadar?",
      a: "Stoktan ürünler için 2–4 iş günü lojistik planlanır.",
    },
    {
      q: "Fuar standı aydınlatması yapıyor musunuz?",
      a: "Evet. Stand ölçüsüne göre blinder, LED bar ve vurgu aydınlatma planı hazırlanır; kurulum dahil teslim edilir.",
    },
  ],
  keywords: ["gaziantep sahne aydınlatma", "gaziantep düğün ışığı", "gaziantep moving head", "gaziantep fuar aydınlatma"],
  productSlugs: ["led-beam-wash-150", "diamond-line-1240-eco", "blinder-400-ip"],
};

export const kocaeliLanding: CityLanding = {
  slug: "kocaeli-sahne-aydinlatma",
  path: "/kocaeli-sahne-aydinlatma",
  city: "Kocaeli",
  title: "Kocaeli Sahne Aydınlatma",
  seoTitle: "Kocaeli Sahne Aydınlatma — SESAJANS",
  seoDescription:
    "Kocaeli ve İzmit konser, kurumsal etkinlik, fuar ve düğün sahne aydınlatması. Moving head, wash ve blinder çözümleri.",
  intro:
    "SESAJANS, Kocaeli, İzmit ve Doğu Marmara bölgesinde kurumsal etkinlik, fabrika lansmanı, konser ve düğün prodüksiyonları için profesyonel sahne aydınlatma çözümleri sunar. İstanbul merkez ofisimize yakınlık sayesinde Kocaeli projelerine aynı gün keşif ve hızlı teslimat sağlıyoruz.",
  sections: [
    {
      title: "Kocaeli'de hizmet alanları",
      body: "İzmit, Gebze, Darıca, Körfez, Gölcük ve tüm Kocaeli genelinde; kongre merkezleri, sanayi tesisleri, otel balo salonları, Seka Park etkinlik alanları ve açık hava sahnelerine kurulum ve satış desteği veriyoruz. Sakarya ve Yalova projelerine de aynı hatla ulaşıyoruz.",
    },
    {
      title: "Popüler çözümler",
      body: "Sanayi bölgesi kurumsal lansmanlarında Wash 3715 yüksek CRI yüz ışığı ve Diamond Line 1240 Eco dekor çizgisi; açık hava konser ve festival etkinliklerinde Beam King IP, Tornado IP ve Blinder 800 IP kombinasyonu tercih edilir.",
    },
    {
      title: "Hızlı lojistik avantajı",
      body: "İstanbul Şişli merkezli stok yapımız sayesinde Kocaeli projelerine 1 iş günü içinde teslimat ve aynı hafta kurulum planlanabilir. Acil etkinlikler için kiralama destekli çözümler sunulur.",
    },
  ],
  faqs: [
    {
      q: "Kocaeli'ye keşif geliyor musunuz?",
      a: "Evet. İstanbul'a yakınlık sayesinde çoğu Kocaeli projesinde ücretsiz sahada keşif yapılır.",
    },
    {
      q: "Kurumsal lansman için hangi ürünler uygun?",
      a: "Wash 3715 sahne ve konuşmacı aydınlatması, Diamond Line 1240 Eco dekor vurgusu, LED Beam Wash 150 efekt katmanı için önerilir.",
    },
    {
      q: "Teslimat süresi ne kadar?",
      a: "Stoktan ürünler için 1 iş günü içinde teslimat planlanabilir; kurulumlu projelerde tarih rezervasyonu önerilir.",
    },
  ],
  keywords: ["kocaeli sahne aydınlatma", "izmit etkinlik ışığı", "gebze aydınlatma", "kocaeli moving head"],
  productSlugs: ["wash-3715", "diamond-line-1240-eco", "beam-king-ip"],
};

export const cityLandings = [
  istanbulLanding,
  ankaraLanding,
  izmirLanding,
  antalyaLanding,
  bursaLanding,
  adanaLanding,
  gaziantepLanding,
  kocaeliLanding,
];

export function getCityLanding(slug: string): CityLanding | undefined {
  return cityLandings.find((c) => c.slug === slug);
}
