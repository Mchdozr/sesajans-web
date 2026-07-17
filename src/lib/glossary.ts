export type GlossaryTerm = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  definition: string;
  sections: { title: string; body: string }[];
  relatedLinks: { label: string; href: string }[];
  keywords: string[];
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "dmx512-nedir",
    title: "DMX512 Nedir?",
    seoTitle: "DMX512 Nedir? Sahne Aydınlatma Protokolü",
    seoDescription:
      "DMX512 sahne aydınlatma kontrol protokolü nedir? Universe, kanal ve adresleme temelleri.",
    definition:
      "DMX512 (Digital Multiplex), sahne aydınlatma ve efekt cihazlarını tek bir kontrol hattı üzerinden yönetmek için kullanılan endüstri standardı dijital protokoldür.",
    sections: [
      {
        title: "Nasıl çalışır?",
        body: "Bir DMX konsol veya yazılım, 512 kanallık veri paketlerini (universe) XLR veya RJ45 hat üzerinden fixture'lara iletir. Her kanal 0–255 arası değer alır; örneğin kanal 1 dimmer, kanal 2 pan hızı olabilir.",
      },
      {
        title: "Universe ve adresleme",
        body: "Bir universe 512 kanal içerir. Moving head'ler 17–37 kanal kullanabilir; doğru adresleme çakışmayı önler. Büyük kurulumlarda birden fazla universe ve Art-Net ağ geçidi kullanılır.",
      },
      {
        title: "SESAJANS uygulaması",
        body: "Kurulum projelerimizde adresleme planı, patch listesi ve konsol programlama dahil anahtar teslim DMX altyapısı sunuyoruz.",
      },
    ],
    relatedLinks: [
      { label: "DMX kurulum rehberi", href: "/blog/dmx-aydinlatma-kurulumu" },
      { label: "Art-Net nedir?", href: "/sozluk/art-net-nedir" },
      { label: "Ürünler", href: "/urunler" },
    ],
    keywords: ["dmx512", "dmx nedir", "sahne aydınlatma protokolü", "dmx universe"],
  },
  {
    slug: "moving-head-nedir",
    title: "Moving Head Nedir?",
    seoTitle: "Moving Head Nedir? Beam, Wash ve Spot Farkı",
    seoDescription:
      "Moving head sahne ışığı nedir? Beam, wash ve spot moving head türleri ve kullanım alanları.",
    definition:
      "Moving head, pan ve tilt eksenlerinde hareket edebilen, lens ve efekt tekerlekleriyle yönlendirilebilir profesyonel sahne aydınlatma ünitesidir.",
    sections: [
      {
        title: "Türler",
        body: "Beam moving head dar demet (2°–4°) ile uzun mesafe vurgu üretir. Wash moving head geniş açılı homojen yıkama sağlar. Spot/hybrid modeller gobo ve zoom ile çok yönlü kullanılır.",
      },
      {
        title: "Kullanım alanları",
        body: "Konser, festival, tiyatro, gece kulübü, TV stüdyosu ve kurumsal etkinliklerde truss üzerinde konumlandırılır. DMX ile programlanır.",
      },
      {
        title: "SESAJANS portföyü",
        body: "Beam King, Wash 3715, LED Beam Wash 150 ve Tornado IP modelleri farklı ölçek ve mekân ihtiyaçlarına göre seçilebilir.",
      },
    ],
    relatedLinks: [
      { label: "Moving head beam rehberi", href: "/blog/moving-head-beam-rehberi" },
      { label: "Wash moving head rehberi", href: "/blog/wash-moving-head-rehberi" },
      { label: "Konser aydınlatma", href: "/kullanim-alanlari/konser-festival" },
    ],
    keywords: ["moving head nedir", "beam moving head", "wash moving head", "sahne ışığı"],
  },
  {
    slug: "ip-koruma-sinifi-nedir",
    title: "IP Koruma Sınıfı Nedir?",
    seoTitle: "IP Koruma Sınıfı Nedir? IP65 ve IP66 Farkı",
    seoDescription:
      "IP65 ve IP66 koruma sınıfları ne anlama gelir? Dış mekân sahne aydınlatması için IP seçimi.",
    definition:
      "IP (Ingress Protection) kodu, elektrikli ekipmanın toz ve suya karşı koruma düzeyini tanımlayan uluslararası standarttır.",
    sections: [
      {
        title: "IP65 vs IP66",
        body: "IP65 toz geçirmez ve düşük basınçlı su jetlerine dayanıklıdır. IP66 güçlü su jetlerine ve geçici daldırmaya karşı daha yüksek koruma sunar. Açık hava konser ve festivalde IP65+ tercih edilir.",
      },
      {
        title: "IP20 ne demek?",
        body: "IP20 kapalı mekân kullanımı içindir; toz ve nem koruması sınırlıdır. Salon, kulüp ve stüdyo fixture'ları genelde IP20 sınıfındadır.",
      },
      {
        title: "Doğru seçim",
        body: "Dış mekân prodüksiyonlarında Beam King IP, Blinder 800 IP ve Strike Pro IP gibi IP66 modeller güvenilir çalışma sağlar.",
      },
    ],
    relatedLinks: [
      { label: "IP66 beam rehberi", href: "/blog/ip66-beam-rehberi" },
      { label: "Beam King 380 vs IP", href: "/karsilastirma/beam-king-380-vs-ip" },
      { label: "Dış mekân beam seçimi", href: "/blog/ip66-dis-mekan-beam-secimi" },
    ],
    keywords: ["ip66", "ip65", "ip koruma sınıfı", "dış mekân aydınlatma"],
  },
  {
    slug: "art-net-nedir",
    title: "Art-Net Nedir?",
    seoTitle: "Art-Net Nedir? Ağ Tabanlı DMX Kontrolü",
    seoDescription:
      "Art-Net protokolü nedir? Büyük sahne kurulumlarında DMX over Ethernet kullanımı.",
    definition:
      "Art-Net, DMX512 verisini Ethernet ağı üzerinden ileten açık protokoldür; büyük kurulumlarda çoklu universe yönetimini kolaylaştırır.",
    sections: [
      {
        title: "DMX'ten farkı",
        body: "Klasik DMX hat başına bir universe (512 kanal) taşır. Art-Net tek bir ağ kablosuyla onlarca universe iletilebilir; uzun mesafe ve karmaşık patch listelerinde avantaj sağlar.",
      },
      {
        title: "Ne zaman gerekir?",
        body: "50+ fixture, çoklu sahne veya uzak FOH konsol kurulumlarında Art-Net node veya doğrudan Art-Net destekli fixture'lar kullanılır.",
      },
      {
        title: "SESAJANS desteği",
        body: "Festival ve arena projelerinde Art-Net ağ tasarımı, node konfigürasyonu ve yedekleme planı dahil teknik danışmanlık sunuyoruz.",
      },
    ],
    relatedLinks: [
      { label: "DMX512 nedir?", href: "/sozluk/dmx512-nedir" },
      { label: "DMX kurulum rehberi", href: "/blog/dmx-aydinlatma-kurulumu" },
      { label: "Arena aydınlatma rehberi", href: "/blog/arena-stadyum-aydinlatma-rehberi" },
    ],
    keywords: ["art-net", "dmx over ethernet", "sahne ağ kontrolü", "universe"],
  },
  {
    slug: "blinder-strobe-nedir",
    title: "Blinder ve Strobe Nedir?",
    seoTitle: "Blinder ve Strobe Nedir? Sahne Efekt Işıkları",
    seoDescription:
      "Blinder ve strobe sahne ışıkları ne işe yarar? Konser ve etkinliklerde kullanım farkları.",
    definition:
      "Blinder yüksek çıkışlı ön vurgu ışığıdır; strobe ise hızlı flaş efekti üreterek ritim ve enerji yaratır.",
    sections: [
      {
        title: "Blinder kullanımı",
        body: "Sahne ön hattında sanatçı vurgusu, drop anları ve seyirci alanına yönelik güçlü beyaz veya renkli ışık patlaması için kullanılır. Blinder 400 IP ve 800 IP dış mekâna uygundur.",
      },
      {
        title: "Strobe kullanımı",
        body: "Strike Pro IP gibi strobe üniteleri müzik ritmiyle senkronize flaş efekti üretir. Blinder'dan farklı olarak kısa süreli yüksek frekanslı patlama odaklıdır.",
      },
      {
        title: "Kombinasyon",
        body: "Profesyonel konser kurulumlarında blinder ön hat, strobe yan ve arka efekt hatlarında birlikte programlanır.",
      },
    ],
    relatedLinks: [
      { label: "Blinder vs strobe farkı", href: "/blog/blinder-vs-strobe-farki" },
      { label: "Blinder strobe rehberi", href: "/blog/blinder-strobe-rehberi" },
      { label: "Blinder 400 vs 800", href: "/karsilastirma/blinder-400-ip-vs-800-ip" },
    ],
    keywords: ["blinder nedir", "strobe nedir", "sahne efekt ışığı", "konser blinder"],
  },
  {
    slug: "gobo-nedir",
    title: "Gobo Nedir?",
    seoTitle: "Gobo Nedir? Sahne Işığında Desen Projeksiyonu",
    seoDescription:
      "Gobo diski nedir, moving head'lerde nasıl kullanılır? Sabit ve döner gobo farkı, desen projeksiyonu temelleri.",
    definition:
      "Gobo, ışık demetinin önüne yerleştirilen metal veya cam şablondur; sahneye ve yüzeylere desen, logo veya doku yansıtmak için kullanılır.",
    sections: [
      {
        title: "Sabit ve döner gobo",
        body: "Sabit gobo tekerleği önceden tanımlı desenler sunar; döner (rotating) gobo tekerleği desenleri kendi ekseninde döndürerek hareketli doku efektleri üretir. Beam moving head'lerde genelde sabit gobo seti bulunur.",
      },
      {
        title: "Kullanım alanları",
        body: "Konserde atmosfer dokusu, kurumsal etkinlikte logo projeksiyonu, tiyatroda pencere/yaprak gibi doğal desen simülasyonu için kullanılır. Prizma ile kombinlendiğinde desen çoğaltılır.",
      },
      {
        title: "SESAJANS portföyünde gobo",
        body: "Beam King 380 13 sabit gobo, Beam King IP 17 sabit gobo sunar. Gobo ve prizma kombinasyonlarıyla festival sahnelerinde zengin hava efektleri programlıyoruz.",
      },
    ],
    relatedLinks: [
      { label: "Moving head nedir?", href: "/sozluk/moving-head-nedir" },
      { label: "Prizma nedir?", href: "/sozluk/prizma-nedir" },
      { label: "Beam King 380", href: "/urunler/beam-king-380" },
    ],
    keywords: ["gobo nedir", "gobo diski", "desen projeksiyon", "sahne gobo"],
  },
  {
    slug: "truss-nedir",
    title: "Truss Nedir?",
    seoTitle: "Truss Nedir? Sahne Işık Askı Sistemleri",
    seoDescription:
      "Truss sistemi nedir? Sahne aydınlatmasında alüminyum kafes yapıların seçimi, yük hesabı ve güvenlik temelleri.",
    definition:
      "Truss, sahne ekipmanlarını (ışık, ses, LED ekran) asmak için kullanılan modüler alüminyum kafes taşıyıcı sistemdir.",
    sections: [
      {
        title: "Türleri",
        body: "Kare (box) truss en yaygın tiptir; üçgen ve düz (ladder) truss hafif yükler için tercih edilir. Ground support sistemleri kule ve motor kombinasyonuyla bağımsız ayakta duran yapılar kurar.",
      },
      {
        title: "Yük ve güvenlik",
        body: "Her truss açıklığının maksimum yük tablosu vardır; fixture ağırlığı, kablolama ve dinamik yükler birlikte hesaplanır. Güvenlik halatı (safety) her asılı ünitede zorunludur.",
      },
      {
        title: "Planlama desteği",
        body: "SESAJANS projelerinde fixture yerleşimine göre truss açıklığı, motor noktası ve yük dağılım planı hazırlanır; kurulum ekibiyle sahada devreye alınır.",
      },
    ],
    relatedLinks: [
      { label: "Truss planlama rehberi", href: "/blog/truss-planlama-sahne-isigi" },
      { label: "Rigging nedir?", href: "/sozluk/rigging-nedir" },
      { label: "Konser aydınlatma", href: "/kullanim-alanlari/konser-festival" },
    ],
    keywords: ["truss nedir", "sahne truss", "alüminyum truss", "truss sistemi"],
  },
  {
    slug: "beam-nedir",
    title: "Beam Işık Nedir?",
    seoTitle: "Beam Işık Nedir? Dar Açılı Sahne Vurgu Işığı",
    seoDescription:
      "Beam moving head nedir, wash ve spottan farkı ne? Dar beam açısının konser ve festivaldeki rolü.",
    definition:
      "Beam, 1°–4° gibi çok dar açıyla yoğun ve keskin ışık demeti üreten sahne ışığı tipidir; uzun mesafede görünür 'ışık çubuğu' efekti verir.",
    sections: [
      {
        title: "Beam'i özel yapan nedir?",
        body: "Dar açı sayesinde ışık havada belirgin bir kolon oluşturur. Sis/haze ile birlikte kullanıldığında hareketli demetler seyirci üzerinde güçlü görsel etki bırakır. Prizma ve gobo ile demet çoğaltılır.",
      },
      {
        title: "Wash ve spot farkı",
        body: "Wash geniş alan boyar, spot orta açıyla desen odaklıdır; beam ise en dar açıyla vurgu ve hava efektine odaklanır. Modern hybrid üniteler üç modu tek gövdede sunabilir.",
      },
      {
        title: "Ürün seçimi",
        body: "Kapalı mekân için Beam King 380 (2°), açık hava ve arena için IP66 korumalı Beam King IP (1.7°) portföyümüzün beam sınıfı çözümleridir.",
      },
    ],
    relatedLinks: [
      { label: "Moving head beam rehberi", href: "/blog/moving-head-beam-rehberi" },
      { label: "Beam King 380 vs IP", href: "/karsilastirma/beam-king-380-vs-ip" },
      { label: "Wash nedir?", href: "/sozluk/wash-nedir" },
    ],
    keywords: ["beam nedir", "beam moving head", "dar açı ışık", "konser beam"],
  },
  {
    slug: "wash-nedir",
    title: "Wash Işık Nedir?",
    seoTitle: "Wash Işık Nedir? Homojen Sahne Yıkama Aydınlatması",
    seoDescription:
      "Wash moving head nedir, ne işe yarar? Sahne yıkama, renk doygunluğu ve zoom aralığı seçimi.",
    definition:
      "Wash, sahneyi veya bir alanı homojen ve yumuşak geçişli renkle 'yıkayan' geniş açılı sahne ışığı tipidir.",
    sections: [
      {
        title: "Nerede kullanılır?",
        body: "Sahne genel aydınlatması, sanatçı yüz ışığı, dekor renklendirme ve seyirci alanı atmosferinde temel katmandır. Tiyatro ve TV'de yüksek CRI wash üniteleri renk doğruluğu için kritiktir.",
      },
      {
        title: "Zoom aralığı",
        body: "10°–60° gibi geniş zoom aralığı tek üniteyle hem noktasal vurgu hem tam sahne yıkama sağlar. LED sayısı ve ünite gücü kapsama alanını belirler.",
      },
      {
        title: "Ürün seçimi",
        body: "Wash 3715 (37×15W, yüksek CRI) orta-büyük salonlar için; kompakt LED Beam Wash 150 kulüp ve düşük tavanlı mekânlar için idealdir.",
      },
    ],
    relatedLinks: [
      { label: "Wash moving head rehberi", href: "/blog/wash-moving-head-rehberi" },
      { label: "Wash 3715 vs Beam Wash 150", href: "/karsilastirma/wash-3715-vs-led-beam-wash-150" },
      { label: "Beam nedir?", href: "/sozluk/beam-nedir" },
    ],
    keywords: ["wash nedir", "wash moving head", "sahne yıkama ışığı", "rgbw wash"],
  },
  {
    slug: "rdm-nedir",
    title: "RDM Nedir?",
    seoTitle: "RDM Nedir? DMX Üzerinden Çift Yönlü Cihaz Yönetimi",
    seoDescription:
      "RDM (Remote Device Management) protokolü nedir? DMX hattı üzerinden uzaktan adresleme ve cihaz izleme.",
    definition:
      "RDM (Remote Device Management), standart DMX512 hattı üzerinden fixture'larla çift yönlü iletişim kurarak uzaktan adresleme, mod değiştirme ve durum izleme sağlayan protokoldür.",
    sections: [
      {
        title: "DMX'e ne ekler?",
        body: "Klasik DMX tek yönlüdür; konsol veri gönderir ama cihazdan yanıt alamaz. RDM ile fixture'ın DMX adresi, kanal modu, lamba saati ve sıcaklık bilgisi uzaktan okunup değiştirilebilir.",
      },
      {
        title: "Sahada avantajı",
        body: "Truss'a asılmış üniteye merdivenle çıkmadan adres değiştirme, arıza öncesi sıcaklık uyarısı ve hızlı devreye alma sağlar. Büyük kurulumlarda kurulum süresini ciddi kısaltır.",
      },
      {
        title: "SESAJANS ürünlerinde RDM",
        body: "Beam King, Wash 3715, LED Beam Wash 150, Blinder ve Strike Pro IP dahil portföyümüzün tamamına yakını DMX512/RDM destekler.",
      },
    ],
    relatedLinks: [
      { label: "DMX512 nedir?", href: "/sozluk/dmx512-nedir" },
      { label: "DMX adresleme nedir?", href: "/sozluk/dmx-adresleme-nedir" },
      { label: "DMX kurulum rehberi", href: "/blog/dmx-aydinlatma-kurulumu" },
    ],
    keywords: ["rdm nedir", "remote device management", "dmx rdm", "uzaktan adresleme"],
  },
  {
    slug: "sacn-nedir",
    title: "sACN Nedir?",
    seoTitle: "sACN Nedir? E1.31 Ağ Tabanlı Aydınlatma Protokolü",
    seoDescription:
      "sACN (E1.31) protokolü nedir, Art-Net'ten farkı ne? Büyük kurulumlarda ağ üzerinden DMX taşıma.",
    definition:
      "sACN (Streaming ACN, E1.31), DMX verisini Ethernet ağı üzerinden multicast olarak taşıyan ANSI standardı protokoldür.",
    sections: [
      {
        title: "Art-Net ile farkı",
        body: "Her ikisi de DMX over Ethernet çözümüdür. sACN resmi ANSI standardıdır, multicast yapısıyla ağ trafiğini verimli yönetir ve öncelik (priority) desteğiyle yedekli konsol senaryolarına uygundur.",
      },
      {
        title: "Ne zaman tercih edilir?",
        body: "Çok universe'li arena/stadyum kurulumları, yedekli FOH+monitor konsol mimarileri ve medya sunucusu entegrasyonlarında sACN yaygındır. Modern üst segment fixture'lar genelde her iki protokolü destekler.",
      },
      {
        title: "Uygulama",
        body: "Strike Pro IP gibi ünitelerimiz DMX/RDM yanında Art-Net ve sACN girişini doğrudan destekler; node ihtiyacını azaltır.",
      },
    ],
    relatedLinks: [
      { label: "Art-Net nedir?", href: "/sozluk/art-net-nedir" },
      { label: "DMX512 nedir?", href: "/sozluk/dmx512-nedir" },
      { label: "Arena aydınlatma rehberi", href: "/blog/arena-stadyum-aydinlatma-rehberi" },
    ],
    keywords: ["sacn nedir", "e1.31", "streaming acn", "dmx over ethernet"],
  },
  {
    slug: "pan-tilt-nedir",
    title: "Pan ve Tilt Nedir?",
    seoTitle: "Pan ve Tilt Nedir? Moving Head Hareket Eksenleri",
    seoDescription:
      "Moving head'lerde pan ve tilt ne demek? 16-bit hassasiyet, hız ve Pan Infinity özelliği.",
    definition:
      "Pan, moving head'in yatay (sağa-sola) dönüşü; tilt ise dikey (yukarı-aşağı) hareketidir. Bu iki eksen ışığın sahnedeki konumunu belirler.",
    sections: [
      {
        title: "Tipik değerler",
        body: "Standart üniteler Pan 540° / Tilt 270° sunar. Pan Infinity özellikli modeller (ör. Beam King IP) sınırsız dönüş yapabilir; sürekli dairesel efektlerde kablo sarma limiti yoktur.",
      },
      {
        title: "16-bit hassasiyet",
        body: "8-bit kontrolde eksen 256 adıma bölünür; 16-bit modda 65.536 adım ile milimetrik konumlama ve akıcı yavaş hareketler mümkün olur. Uzun mesafeli beam işlerinde fark belirgindir.",
      },
      {
        title: "Programlama ipucu",
        body: "Pozisyon preset'leri (sahne merkezi, solist, seyirci taraması) konsolda kaydedilir; şov sırasında hızlı geçiş sağlar. Kurulumlarımızda temel pozisyon paleti teslim kapsamındadır.",
      },
    ],
    relatedLinks: [
      { label: "Moving head nedir?", href: "/sozluk/moving-head-nedir" },
      { label: "Moving head konser kurulumu", href: "/blog/moving-head-konser-kurulumu" },
      { label: "Beam King IP", href: "/urunler/beam-king-ip" },
    ],
    keywords: ["pan tilt nedir", "moving head hareket", "pan infinity", "16-bit hareket"],
  },
  {
    slug: "zoom-nedir",
    title: "Zoom (Işık Açısı) Nedir?",
    seoTitle: "Sahne Işığında Zoom Nedir? Motorlu Açı Kontrolü",
    seoDescription:
      "Moving head zoom özelliği nedir? Beam-wash geçişi, zoom aralığı seçimi ve kullanım senaryoları.",
    definition:
      "Zoom, fixture'ın ışık çıkış açısını motorlu olarak daraltıp genişletme özelliğidir; tek üniteyle hem dar vurgu hem geniş yıkama yapılmasını sağlar.",
    sections: [
      {
        title: "Neden önemli?",
        body: "7°–45° zoom'lu bir ünite dar açıda beam gibi vurgu yapar, geniş açıda wash görevi görür. Envanter ve truss yükü azalır; küçük prodüksiyonlarda esneklik artar.",
      },
      {
        title: "Optik kalite",
        body: "Zoom aralığının uçlarında homojenlik (hot-spot olmaması) optik tasarıma bağlıdır. Yüksek CRI ve kaliteli lens grubu renk ve alan geçişlerinde fark yaratır.",
      },
      {
        title: "Portföyde zoom",
        body: "LED Beam Wash 150 (7°–45°), Wash 3715 (10°–60°) ve Tornado IP (3°–30°) farklı zoom aralıklarıyla mekân ölçeğine göre seçilir.",
      },
    ],
    relatedLinks: [
      { label: "Wash nedir?", href: "/sozluk/wash-nedir" },
      { label: "LED Beam Wash 150", href: "/urunler/led-beam-wash-150" },
      { label: "Wash 3715", href: "/urunler/wash-3715" },
    ],
    keywords: ["zoom nedir", "motorlu zoom", "ışık açısı", "beam wash geçişi"],
  },
  {
    slug: "prizma-nedir",
    title: "Prizma Nedir?",
    seoTitle: "Prizma Nedir? Sahne Işığında Demet Çoğaltma Efekti",
    seoDescription:
      "Moving head prizma efekti nedir? 3-facet, 8-facet ve linear prizma farkları, gobo ile kombinasyon.",
    definition:
      "Prizma, ışık demetini optik olarak çoğaltan ve döndürebilen efekt elemanıdır; tek demeti 3, 8 veya daha fazla paralel/dairesel demete böler.",
    sections: [
      {
        title: "Prizma tipleri",
        body: "Dairesel (3/8/16-facet) prizmalar demeti radyal çoğaltır; linear prizma yatay yelpaze etkisi verir. Çift prizma katmanı olan ünitelerde kombinasyonlar (ör. 15 efekt) elde edilir.",
      },
      {
        title: "Gobo ile kullanım",
        body: "Prizma + gobo kombinasyonu deseni çoğaltarak hava ve yüzey efektlerini zenginleştirir. Döner prizma hızı müzik ritmine göre programlanır.",
      },
      {
        title: "Ürünlerde prizma",
        body: "Beam King 380 4 prizma, Beam King IP 6 prizma (15 kombinasyon) sunar; festival ana sahne programlamalarında yoğun kullanılır.",
      },
    ],
    relatedLinks: [
      { label: "Gobo nedir?", href: "/sozluk/gobo-nedir" },
      { label: "Beam nedir?", href: "/sozluk/beam-nedir" },
      { label: "Beam King 380", href: "/urunler/beam-king-380" },
    ],
    keywords: ["prizma nedir", "prism efekti", "demet çoğaltma", "8 facet prizma"],
  },
  {
    slug: "dimmer-nedir",
    title: "Dimmer Nedir?",
    seoTitle: "Dimmer Nedir? Sahne Işığında Parlaklık Kontrolü",
    seoDescription:
      "Dimmer ve dimmer eğrisi nedir? LED fixture'larda smooth dimming, 16-bit dimmer ve PWM ilişkisi.",
    definition:
      "Dimmer, ışık çıkışının parlaklığını 0–100% arasında kontrol eden fonksiyondur; sahne ışığının en temel kanalıdır.",
    sections: [
      {
        title: "Dimmer eğrileri",
        body: "Linear, square ve S-curve eğrileri fade hissini belirler. Yavaş sahne geçişlerinde S-curve daha doğal algılanır; konsol veya fixture menüsünden seçilir.",
      },
      {
        title: "LED'de dimming",
        body: "LED üniteler PWM ile kısılır. Düşük PWM frekansı kamerada titremeye (flicker) yol açar; yayın işlerinde yüksek frekanslı (ör. 25 kHz) flicker-free modlar tercih edilir.",
      },
      {
        title: "16-bit dimmer",
        body: "İnce fade'lerde basamaklanmayı önlemek için üst segment üniteler 16-bit dimmer kanalı sunar; tiyatro ve TV'de standarttır.",
      },
    ],
    relatedLinks: [
      { label: "Renk sıcaklığı nedir?", href: "/sozluk/renk-sicakligi-nedir" },
      { label: "Strike Pro IP (flicker-free)", href: "/urunler/strike-pro-ip" },
      { label: "DMX512 nedir?", href: "/sozluk/dmx512-nedir" },
    ],
    keywords: ["dimmer nedir", "dimmer eğrisi", "pwm dimming", "flicker free"],
  },
  {
    slug: "renk-sicakligi-nedir",
    title: "Renk Sıcaklığı Nedir?",
    seoTitle: "Renk Sıcaklığı Nedir? Kelvin ve CRI Rehberi",
    seoDescription:
      "Kelvin cinsinden renk sıcaklığı ve CRI nedir? Sahne ve etkinlik aydınlatmasında doğru beyaz seçimi.",
    definition:
      "Renk sıcaklığı, beyaz ışığın sıcak (amber) ile soğuk (mavi) arasındaki tonunu Kelvin (K) cinsinden tanımlar; CRI ise ışığın renkleri doğru gösterme kabiliyetidir.",
    sections: [
      {
        title: "Tipik değerler",
        body: "2700–3200K sıcak beyaz (salon, düğün ambiyansı), 5600–6500K gün ışığı/soğuk beyaz (TV, spor, endüstriyel). Sahne fixture'larında CTO filtresi soğuk kaynağı sıcaklaştırır.",
      },
      {
        title: "CRI neden kritik?",
        body: "CRI 90+ kaynaklar cilt tonu ve kostüm renklerini doğru gösterir; TV ve tiyatroda şarttır. Konser efekt ışığında CRI daha esnek değerlendirilir.",
      },
      {
        title: "Ürün örnekleri",
        body: "LED Beam Wash 150 2800–8000K ayarlanabilir beyaz sunar; Wash 3715 yüksek CRI LED'leriyle yüz ışığında doğal ton sağlar.",
      },
    ],
    relatedLinks: [
      { label: "Dimmer nedir?", href: "/sozluk/dimmer-nedir" },
      { label: "Wash 3715", href: "/urunler/wash-3715" },
      { label: "Kurumsal lansman rehberi", href: "/blog/kurumsal-lansman-aydinlatma-rehberi" },
    ],
    keywords: ["renk sıcaklığı", "kelvin nedir", "cri nedir", "sıcak beyaz soğuk beyaz"],
  },
  {
    slug: "lumen-luks-nedir",
    title: "Lümen ve Lüks Nedir?",
    seoTitle: "Lümen ve Lüks Nedir? Sahne Işığında Parlaklık Ölçümü",
    seoDescription:
      "Lümen, lüks ve candela farkı nedir? Sahne aydınlatmasında ışık çıkışı nasıl karşılaştırılır?",
    definition:
      "Lümen (lm) kaynağın toplam ışık çıkışını, lüks (lx) ise birim yüzeye düşen ışık miktarını ölçer; candela demetin yoğunluğunu ifade eder.",
    sections: [
      {
        title: "Hangisi ne zaman?",
        body: "Wash ve blinder karşılaştırmasında toplam lümen anlamlıdır. Beam ünitelerde dar açı nedeniyle merkez lüks (veya candela) değeri gerçek performansı daha iyi gösterir.",
      },
      {
        title: "Watt yanılgısı",
        body: "Güç (W) tüketimi gösterir, çıkışı garanti etmez. LED verimi, optik tasarım ve açı aynı watt'ta çok farklı parlaklık üretebilir; spec karşılaştırmasında lümen/lüks + açı birlikte okunmalıdır.",
      },
      {
        title: "Örnek",
        body: "Strike Pro IP 71.620 lm toplam çıkış ile geniş alan doldururken, 1.7° Beam King IP düşük toplam lümene rağmen kilometrelerce görünür demet üretir.",
      },
    ],
    relatedLinks: [
      { label: "Beam nedir?", href: "/sozluk/beam-nedir" },
      { label: "Strike Pro IP", href: "/urunler/strike-pro-ip" },
      { label: "Festival bütçe planlama", href: "/blog/festival-aydinlatma-butce-planlama" },
    ],
    keywords: ["lümen nedir", "lüks nedir", "candela", "ışık çıkışı karşılaştırma"],
  },
  {
    slug: "dmx-adresleme-nedir",
    title: "DMX Adresleme Nedir?",
    seoTitle: "DMX Adresleme Nedir? Fixture Adres Planı Rehberi",
    seoDescription:
      "DMX adresi nasıl belirlenir? Kanal modu, patch listesi ve çakışmasız adres planlama temelleri.",
    definition:
      "DMX adresleme, her fixture'a universe içinde başlangıç kanalı atama işlemidir; konsolun doğru cihaza doğru veriyi göndermesini sağlar.",
    sections: [
      {
        title: "Nasıl hesaplanır?",
        body: "Fixture'ın kanal modu kadar alan kaplar: 17 kanallı bir beam adres 1'deyse, ikinci ünite en erken 18'den başlar. Çakışan adresler iki ünitenin aynı komutu almasına yol açar.",
      },
      {
        title: "Patch listesi",
        body: "Kurulum öncesi tüm üniteler, modları ve adresleri tablo halinde planlanır (patch listesi). RDM destekli sistemlerde adresler uzaktan da atanabilir.",
      },
      {
        title: "Pratik ipucu",
        body: "Aynı model üniteleri onar/yirmişer bloklara adreslemek (1, 21, 41…) hem okunaklıdır hem gelecekte mod değişikliğine alan bırakır. Projelerimizde patch listesi teslim dokümanına dahildir.",
      },
    ],
    relatedLinks: [
      { label: "DMX512 nedir?", href: "/sozluk/dmx512-nedir" },
      { label: "RDM nedir?", href: "/sozluk/rdm-nedir" },
      { label: "DMX universe planlama", href: "/blog/dmx-universe-planlama-rehberi" },
    ],
    keywords: ["dmx adresleme", "dmx adresi", "patch listesi", "kanal modu"],
  },
  {
    slug: "fixture-nedir",
    title: "Fixture Nedir?",
    seoTitle: "Fixture Nedir? Sahne Aydınlatma Cihazı Terimi",
    seoDescription:
      "Sahne aydınlatmasında fixture ne demek? Fixture tipleri, kütüphane (profile) kavramı ve seçim kriterleri.",
    definition:
      "Fixture, sahne aydınlatmasında kullanılan her tür ışık cihazının genel adıdır: moving head, blinder, strobe, LED bar, par vb.",
    sections: [
      {
        title: "Fixture profile",
        body: "Konsollar her fixture'ı kanal haritasını tanımlayan 'profile/personality' dosyasıyla tanır. Doğru profile seçimi pan/tilt, renk ve efekt kanallarının doğru eşleşmesini sağlar.",
      },
      {
        title: "Tip seçimi",
        body: "Görev katmanına göre seçilir: vurgu için beam, boyama için wash, ritim için strobe/blinder, çizgi ve dekor için LED bar. Mekân, izleyici mesafesi ve IP ihtiyacı belirleyicidir.",
      },
      {
        title: "Envanter yaklaşımı",
        body: "SESAJANS portföyü dört kategoriye ayrılır: moving head beam, moving head wash, blinder-strobe ve LED bar; proje bazında karma fixture listesi öneriyoruz.",
      },
    ],
    relatedLinks: [
      { label: "Moving head nedir?", href: "/sozluk/moving-head-nedir" },
      { label: "Tüm ürünler", href: "/urunler" },
      { label: "Sahne aydınlatma rehberi", href: "/blog/sahne-aydinlatma-rehberi" },
    ],
    keywords: ["fixture nedir", "sahne cihazı", "fixture profile", "ışık envanteri"],
  },
  {
    slug: "rigging-nedir",
    title: "Rigging Nedir?",
    seoTitle: "Rigging Nedir? Sahne Askı ve Güvenlik Sistemleri",
    seoDescription:
      "Sahne rigging'i nedir? Motor, askı noktası, yük hesabı ve güvenlik standartları temelleri.",
    definition:
      "Rigging, sahne ekipmanlarının truss, motor ve askı donanımlarıyla güvenli biçimde yükseğe asılması işi ve disiplinidir.",
    sections: [
      {
        title: "Temel bileşenler",
        body: "Elektrikli zincir motorlar (hoist), çelik sapan (steel), shackle, clamp ve güvenlik halatları rigging'in temel donanımıdır. Her bileşenin sertifikalı çalışma yükü (WLL) vardır.",
      },
      {
        title: "Yük hesabı",
        body: "Fixture + kablo + truss öz ağırlığı toplam yükü oluşturur; motor ve askı noktası kapasitesi payla birlikte hesaplanır. Tavan/çatı askı noktaları venue yetkilisiyle doğrulanır.",
      },
      {
        title: "Güvenlik kültürü",
        body: "Asılı her ünitede ikincil güvenlik halatı zorunludur. Kurulumlarımızda rigging planı, yük dağılımı ve kontrol listesi standart teslim dokümanlarıdır.",
      },
    ],
    relatedLinks: [
      { label: "Truss nedir?", href: "/sozluk/truss-nedir" },
      { label: "Truss planlama rehberi", href: "/blog/truss-planlama-sahne-isigi" },
      { label: "Moving head konser kurulumu", href: "/blog/moving-head-konser-kurulumu" },
    ],
    keywords: ["rigging nedir", "sahne askı", "zincir motor", "yük hesabı"],
  },
];

export const glossarySlugs = glossaryTerms.map((t) => t.slug);

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}
