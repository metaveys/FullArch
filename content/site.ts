import { buildWhatsappUrl } from "../lib/whatsapp";

export const siteConfig = {
  locale: "tr",
  name: "FullArch Dental Lab",
  phone: "+905461244212",
  phoneDisplay: "+90 546 124 42 12",
  email: "fullarch.dentallab1@gmail.com",
  whatsappBase: "https://wa.me/905461244212",
  get whatsappUrl() {
    return buildWhatsappUrl(
      this.whatsappBase,
      "Merhaba, laboratuvarımız için implant üst yapı çözümleriniz hakkında termin ve teklif rica ediyorum."
    );
  },
  url: "https://fullarchdentallab.com",
  address: "İstanbul, Türkiye"
};

export type CtaGroup = {
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  tertiary: { label: string; href: string };
};

export const globalCtas: CtaGroup = {
  primary: {
    label: "Teklif Al / Termin Sor",
    href: "/iletisim"
  },
  secondary: {
    label: "WhatsApp’tan Hemen Yaz",
    href: siteConfig.whatsappUrl
  },
  tertiary: {
    label: "Teknik Dosya Gönder (Exocad/Blender)",
    href: "/iletisim"
  }
};

export const homePage = {
  slug: "/",
  title:
    "Laboratuvarlar için premium titanyum çözümler: mikron hassasiyet, hızlı termin, 7/24 teknik destek.",
  description:
    "CE / ISO / FDA sertifikalı üretim. CAD/CAM uyumlu, Exocad & Blender tasarım süreci tarafımızdan yönetilir. İstanbul içi aynı gün, Türkiye geneli 24 saat kargo.",
  hero: {
    eyebrow: "Premium implant üst yapı üretimi",
    heading:
      "Laboratuvarlar için premium titanyum çözümler: mikron hassasiyet, hızlı termin, 7/24 teknik destek.",
    subheading:
      "CE / ISO / FDA sertifikalı üretim. CAD/CAM uyumlu, Exocad & Blender tasarım süreci tarafımızdan yönetilir. İstanbul içi aynı gün, Türkiye geneli 24 saat kargo.",
    bullets: [
      "Mikron düzeyi tolerans yaklaşımı ve tekrarlanabilir uyum",
      "Laboratuvar odaklı üretim disiplini ve hızlı termin yönetimi",
      "Doğrudan mühendis ve teknik ekipten 7/24 operasyon desteği"
    ]
  },
  usp: {
    items: [
      {
        title: "Mikron Düzeyinde Hassasiyet",
        description:
          "Her parça, mikron düzeyi tolerans yaklaşımı ile ölçümlenerek üretilir ve laboratuvar iş akışınıza tekrarlanabilir uyum hedefiyle girer."
      },
      {
        title: "Thread Tasarımı + İleri Yüzey Teknolojisi",
        description:
          "Optimize edilmiş thread geometrisi, sulu kazıma ve ileri yüzey teknolojileriyle mekanik stabilite, tork aktarımı ve yüzey temizliği odağında tasarlanır."
      },
      {
        title: "Doğrudan Teknik Ekipten 7/24 Destek",
        description:
          "Arada müşteri temsilcisi olmadan, dosya analizi ve vaka bazlı tüm teknik sorularınızda doğrudan mühendis ve teknik ekiple iletişim kurarsınız."
      }
    ]
  },
  productIntro: {
    title: "Titanyum çözümleriniz tek ekranda",
    description:
      "İmplant üst yapı üretimi yapan diş laboratuvarları için tasarlanmış ürün gamı. Her ürün grubu; CAD/CAM uyumu, termin hızı ve tekrarlanabilir hassasiyet odağıyla kurgulandı."
  },
  cadCamFlow: {
    title: "CAD/CAM süreci: baştan sona laboratuvar odaklı",
    steps: [
      {
        title: "1. Dosya & vaka bilgisi",
        description:
          "Exocad / Blender dosyalarınızı ve vaka bilgisini güvenli kanallardan iletin. Gerekirse planlama toplantısı yapalım."
      },
      {
        title: "2. Tasarım & revizyon",
        description:
          "Tasarım ekibimiz Exocad / Blender üzerinde tasarımı oluşturur, ekran görüntüleriyle birlikte onayınıza sunar."
      },
      {
        title: "3. Üretim & kalite kontrol",
        description:
          "Mikron düzeyinde ölçüm, yüzey işlemleri ve son kontroller tamamlanarak her parça işaretlenir ve izlenebilir hale getirilir."
      },
      {
        title: "4. Teslim & operasyon desteği",
        description:
          "İstanbul içi aynı gün, Türkiye geneli 24 saat içinde sevkiyat. Operasyon tamamlanana kadar teknik ekip yanınızdadır."
      }
    ]
  },
  capacityBlock: {
    title: "Üretim kapasitesi ve operasyon desteği",
    description:
      "Seri implant üst yapı üretimi yapan laboratuvarlar için tasarlanmış üretim kapasitesi, planlı termin yönetimi ve vaka kapanışına kadar devam eden teknik destek modeli.",
    bullets: [
      "Yüksek üretim kapasitesi ve planlı termin takvimi",
      "Her lot için izlenebilirlik ve kayıtlı kalite kontrol verisi",
      "Operasyon bitene kadar; telefon, WhatsApp ve uzaktan bağlantı ile teknik ekip desteği"
    ]
  }
};

export const productCategories = [
  {
    slug: "titanium",
    name: "Titanium",
    short: "Titanyum çözümler",
    description:
      "Laboratuvarların günlük implant üst yapı üretiminde kullandığı, mikron hassasiyet hedefli titanyum blok ve komponent çözümleri."
  },
  {
    slug: "imax",
    name: "EMAX",
    short: "Yüksek stabilite platform",
    description:
      "Full arch ve kompleks vaka planlamalarında, stabilite ve uyum odaklı tasarlanmış EMAX titanyum altyapı çözümleri."
  },
  {
    slug: "toronto",
    name: "Toronto",
    short: "Toronto bar çözümleri",
    description:
      "Toronto tipi bar restorasyonlarında uyum, tork aktarımı ve operasyon sonrası kontrol kolaylığı sağlayan titanyum bar çözümleri."
  },
  {
    slug: "all-on-four",
    name: "All-on-Four",
    short: "All-on-Four altyapı",
    description:
      "All-on-Four vakalarında açılı implantlar ve seviye farklılıkları için optimize edilmiş, CAD/CAM uyumlu altyapı çözümleri."
  },
  {
    slug: "all-on-six",
    name: "All-on-Six",
    short: "All-on-Six altyapı",
    description:
      "All-on-Six planlamalarında uzun vadeli stabilite ve tekrarlanabilir uyum hedefiyle tasarlanan implant üst yapı altyapıları."
  },
  {
    slug: "custom-abutment",
    name: "Custom Abutment",
    short: "Kişiye özel abutment",
    description:
      "Vaka bazlı, dişeti profili ve oküzal tasarım gereksinimlerinize göre kişiye özel abutment üretim çözümleri."
  }
] as const;

export type ProductSlug = (typeof productCategories)[number]["slug"];

export const productDetails: Record<
  ProductSlug,
  {
    pageTitle: string;
    metaDescription: string;
    hero: { title: string; subtitle: string; bullets: string[] };
    usage: string;
    advantages: string[];
    cadCam: string;
    delivery: string;
    support: string;
  }
> = {
  titanium: {
    pageTitle: "Titanium – Laboratuvarlar için titanyum çözümler",
    metaDescription:
      "Mikron düzeyi tolerans yaklaşımıyla üretilen titanyum çözümler. CAD/CAM uyumlu, hızlı terminli, CE / ISO / FDA sertifikalı üretim.",
    hero: {
      title: "Titanium: günlük vaka akışınız için stabil titanyum çözümler",
      subtitle:
        "Implant üst yapı üretimi yapan laboratuvarlar için tasarlanmış, mikron düzeyinde hassasiyet hedefli titanyum komponent ve blok çözümleri.",
      bullets: [
        "Standart ve kompleks vakalar için geniş ürün yelpazesi",
        "CAD/CAM uyumlu tasarım ve tekrarlanabilir uyum yaklaşımı",
        "Hızlı termin, izlenebilir kalite kontrol ve teknik destek"
      ]
    },
    usage:
      "Günlük implant üst yapı iş akışında, standart konik veya düz bağlantılı implant sistemleri için titanyum altyapı gerektiren tüm vakalarda kullanılır.",
    advantages: [
      "Mikron düzeyi ölçüm ve kontrol adımları ile üretilen titanyum çözümler",
      "Yüksek malzeme saflığı ve yüzey temizliği odaklı proses yönetimi",
      "Seri üretim hacimlerinde dahi stabil kalite ve tekrarlanabilir hassasiyet",
      "Laboratuvar iş akışına uyumlu paketleme ve işaretleme"
    ],
    cadCam:
      "Exocad ve Blender bazlı tasarım dosyalarınız, teknik ekibimiz tarafından laboratuvar iş akışınıza uygun şekilde yorumlanır. Gerektiğinde tasarım sürecini tamamen biz üstlenerek ekran görüntüleri ve kısa notlarla onayınıza sunarız.",
    delivery:
      "İstanbul içi aynı gün, Türkiye geneli 24 saat içinde kargo organizasyonu yapılır. Planlı üretim takvimi ile terminleriniz önceden netleştirilir.",
    support:
      "Operasyon tamamlanana kadar, torque değerleri, pasif uyum kontrolü ve sonraki vaka için iyileştirme önerileri konusunda teknik ekibimizle direkt iletişim kurabilirsiniz."
  },
  imax: {
    pageTitle: "EMAX – Full arch için yüksek stabilite platform çözümleri",
    metaDescription:
      "Full arch ve kompleks vakalar için EMAX titanyum altyapılar. Optimize thread tasarımı ve mikron düzeyi hassasiyet hedefi.",
    hero: {
      title: "EMAX: full arch vakalar için yüksek stabilite platform çözümleri",
      subtitle:
        "Özellikle full arch ve yüksek kuvvet aktarımı gerektiren vakalar için tasarlanmış, thread geometrisi ve yüzey karakteri optimize edilmiş titanyum altyapılar.",
      bullets: [
        "Full arch ve kompleks vakalarda stabilite odaklı tasarım",
        "Thread ve platform geometrisiyle optimize edilen kuvvet aktarımı",
        "Exocad & Blender tabanlı planlama ve revizyon yönetimi"
      ]
    },
    usage:
      "Full arch restorasyonlar, yüksek çiğneme kuvveti ve uzun köprü açıklığı içeren vakalar, implant sayısı sınırlı ama yük dağılımının kritik olduğu durumlar.",
    advantages: [
      "Thread ve platform tasarımı, yük dağılımı ve tork stabilitesi odağıyla optimize edilir",
      "Yüksek üretim kapasitesiyle, çoklu full arch vakaları için planlı termin yönetimi",
      "Gövde ve bağlantı bölgelerinde mikron düzeyi tolerans hedefi"
    ],
    cadCam:
      "EMAX vakalarında, Exocad / Blender ortamında vaka planlamasını teknik ekibimizle birlikte kurgulayabilirsiniz. Gerekirse dijital toplantı ile canlı planlama desteği sağlanır.",
    delivery:
      "Full arch vakalar için önceden planlanan üretim takvimi üzerinden terminler netleştirilir. İstanbul içi aynı gün; Türkiye geneli 24 saat kargo prensibi korunur.",
    support:
      "Operasyon öncesi planlama, prova sonrası revizyon ve final teslim sürecinde teknik ekibimiz, hem dosya hem de klinik geri bildirimler üzerinden yanınızdadır."
  },
  toronto: {
    pageTitle: "Toronto – Toronto bar restorasyonları için titanyum çözümler",
    metaDescription:
      "Toronto tipi bar restorasyonlarında uyum, tork aktarımı ve kontrol kolaylığı sağlayan titanyum bar çözümleri.",
    hero: {
      title: "Toronto: bar restorasyonları için hassas titanyum altyapılar",
      subtitle:
        "Toronto tipi bar restorasyonlarında vidalama torku, pasif uyum ve kontrol kolaylığını birlikte ele alan titanyum bar çözümleri.",
      bullets: [
        "Bar tasarımında pasif uyum ve kontrol odaklı yaklaşım",
        "Mikron düzeyi oturma yüzeyi ve bağlantı bölgeleri",
        "Operasyon sonrası revizyon ve kontrol desteği"
      ]
    },
    usage:
      "Toronto tipi vidalı bar restorasyonları, uzun süreli kontrol gerektiren implant üst yapı vakaları, tekrar sökülüp takılabilen bar tasarımlarında.",
    advantages: [
      "Bar geometrisi, implant konumuna ve klinik beklentiye göre optimize edilir",
      "Vidalama torku ve oturma hissine yönelik tekrarlanabilir uyum yaklaşımı",
      "CAD/CAM tabanlı iş akışında, bar üzeri protez ekipleriyle uyumlu üretim disiplini"
    ],
    cadCam:
      "Exocad / Blender ortamında Toronto bar tasarımlarını ekibimizle birlikte çalışabilir veya tasarımı tamamen bize devredebilirsiniz. Onay öncesi detaylı ekran görüntüleri ve kritik kesit analizleri paylaşılır.",
    delivery:
      "Planlanan operasyon tarihine göre terminleriniz öne alınır. İstanbul içi aynı gün, diğer şehirler için 24 saat içinde kargo hedeflenir.",
    support:
      "Prova, sıkma ve uzun dönem kontrol süreçlerinde teknik ekibimizle; tork değerleri, vida seçimi ve revizyon opsiyonları üzerine vaka bazlı çalışma imkânı sunulur."
  },
  "all-on-four": {
    pageTitle: "All-on-Four – All-on-Four vakalar için altyapı çözümleri",
    metaDescription:
      "All-on-Four vakalarında açılı implant ve seviye farklılıklarına uyumlu, CAD/CAM tabanlı titanyum altyapı çözümleri.",
    hero: {
      title: "All-on-Four: açılı implant vakalarına uyumlu altyapı tasarımı",
      subtitle:
        "All-on-Four planlamalarında açı, seviye ve yumuşak doku beklentilerini birlikte ele alan, CAD/CAM uyumlu titanyum altyapılar.",
      bullets: [
        "Açılı implantlar ve seviye farkları için optimize altyapı",
        "CAD/CAM tabanlı planlama ve revizyon yönetimi",
        "Operasyon öncesi ve sonrası teknik destek"
      ]
    },
    usage:
      "All-on-Four konseptiyle planlanan tam çene restorasyonlar, açılı posterior implantlar ve sınırlı kemik hacminde yapılan vakalar.",
    advantages: [
      "Implant açı ve seviyelerine göre kontrollü oturma ve kuvvet aktarımı",
      "Klinik ekiple uyumlu olacak şekilde tasarlanan çıkış profilleri",
      "Tekrarlanabilir hassasiyet hedefiyle üretim ve kontrol"
    ],
    cadCam:
      "All-on-Four vakalarında, dijital wax-up, implant yerleşimi ve bar/altyapı tasarımı Exocad / Blender ortamında teknik ekibimizle birlikte planlanır. Revizyonlar hızlı döngülerle yönetilir.",
    delivery:
      "Operasyon tarihine göre terminler önceliklendirilir. İstanbul içi aynı gün, Türkiye geneli 24 saat içinde sevkiyat kurgulanır.",
    support:
      "Operasyon öncesi prova, multi-unit seçimi, açı düzeltici komponentler ve final restorasyon süreçlerinde teknik ekibimizle doğrudan iletişimde kalırsınız."
  },
  "all-on-six": {
    pageTitle: "All-on-Six – All-on-Six vakalar için altyapı çözümleri",
    metaDescription:
      "All-on-Six planlamalarında uzun vadeli stabilite ve hassasiyet hedefli titanyum altyapılar.",
    hero: {
      title: "All-on-Six: uzun vadeli stabilite için planlı altyapı",
      subtitle:
        "All-on-Six restorasyonlarda implant dağılımı, köprü açıklıkları ve yük paylaşımı odağında tasarlanmış titanyum altyapılar.",
      bullets: [
        "All-on-Six konseptine özel yük dağılımı yaklaşımı",
        "Mikron düzeyi tolerans hedefli bağlantı yüzeyleri",
        "Planlı termin ve vaka bazlı teknik destek"
      ]
    },
    usage:
      "All-on-Six konseptinde planlanan tam çene restorasyonlar, uzun köprü açıklıkları ve çoklu implantlı tam ark vakalar.",
    advantages: [
      "İmplant sayısı ve konumuna göre dengeli yük dağılımı kurgusu",
      "Uzun dönem kontrol ve revizyonlara uygun altyapı tasarımı",
      "Seri All-on-Six vakaları yürüten laboratuvarlar için kapasite yönetimi"
    ],
    cadCam:
      "All-on-Six vakalarında, Exocad / Blender dosyalarınız üzerinden hem planlama hem de son tasarım teknik ekibimiz tarafından yapılandırılır. Gerekirse klinik ekip de sürece dahil edilir.",
    delivery:
      "Operasyon takvimine paralel olacak şekilde üretim planlanır. İstanbul içi aynı gün; diğer şehirler için 24 saatlik sevkiyat hedeflenir.",
    support:
      "Vaka kapanışına kadar, prova, ara kontrol ve final teslim aşamalarında teknik ekibimizle doğrudan iletişim imkânı sunulur."
  },
  "custom-abutment": {
    pageTitle: "Custom Abutment – Kişiye özel abutment çözümleri",
    metaDescription:
      "Dişeti profili, estetik beklenti ve fonksiyonel gereksinimlere göre kişiye özel abutment üretim çözümleri.",
    hero: {
      title: "Custom Abutment: her vaka için kişiye özel abutment tasarımı",
      subtitle:
        "Dişeti profili, emergence profile ve estetik beklentileri birlikte ele alan, vaka bazlı kişiye özel abutment üretim çözümleri.",
      bullets: [
        "Vaka bazlı dişeti ve oküzal tasarım uyumu",
        "CAD/CAM dosyaları üzerinden kişiye özel tasarım",
        "Revizyon ve kontrol odaklı üretim yaklaşımı"
      ]
    },
    usage:
      "Özellikle estetik bölge vakaları, yumuşak doku yönetimi gerektiren durumlar ve standart abutment’ların yetersiz kaldığı özel vakalar.",
    advantages: [
      "Dişeti profili, oküzal yük ve estetik hedeflerin birlikte planlandığı tasarım yaklaşımı",
      "Her vaka için kayıt altına alınan tasarım parametreleri ve revizyon geçmişi",
      "Laboratuvar ve klinik ekip arasındaki bilgi akışını destekleyen raporlanabilir süreç"
    ],
    cadCam:
      "Exocad / Blender ortamında hazırlanan veya tarayıcı çıkışı olarak gönderilen veriler üzerinden kişiye özel abutment tasarımı yapılır. Gerekirse prova aşamasında revizyon imkânı sunulur.",
    delivery:
      "Custom abutment vakalarında da İstanbul içi aynı gün; Türkiye geneli 24 saat kargo prensibi korunur. Kritik vakalar için önceliklendirilmiş terminler planlanabilir.",
    support:
      "Operasyon öncesi planlama, prova aşaması ve final restorasyon tamamlanana kadar teknik ekibimiz vaka bazlı görev alır."
  }
};

export const technologyPage = {
  title: "Teknoloji – Yüzey teknolojisi, thread tasarımı ve mikron hassasiyet",
  description:
    "Yüzey teknolojisi, thread tasarımı, sulu kazıma ve mikron düzeyinde kalite kontrol süreçleriyle implant üst yapı üretiminde premium yaklaşım.",
  hero: {
    heading: "Mikron düzeyinde hassasiyet için teknoloji odaklı üretim disiplini",
    subheading:
      "Thread tasarımı, ileri yüzey işlemleri, sulu kazıma ve tam izlenebilir kalite kontrol ile implant üst yapılarınız için stabil ve tekrarlanabilir sonuçlar hedefliyoruz.",
    bullets: [
      "Mikron düzeyi tolerans hedefi ve kayıtlı ölçüm verileri",
      "Thread ve yüzey tasarımında mekanik ve biyomekanik denge",
      "Tam izlenebilir lot yönetimi ve dokümantasyon"
    ]
  }
};

export const cadCamPage = {
  title: "CAD/CAM & Tasarım Süreci – Exocad ve Blender uyumlu iş akışı",
  description:
    "Exocad ve Blender tabanlı tasarım akışı, dosya gönderimi, revizyon, üretim, kontrol ve teslim süreçleriyle uçtan uca CAD/CAM yönetimi.",
  hero: {
    heading: "CAD/CAM sürecinizi uçtan uca teknik ekibimiz yönetsin",
    subheading:
      "Exocad ve Blender uyumlu dosya gönderiminden tasarım revizyonuna, üretim ve son kontrole kadar tüm süreç, laboratuvar odaklı olarak teknik ekibimiz tarafından yürütülür.",
    bullets: [
      "Exocad / Blender dosyalarınız için güvenli gönderim ve analiz",
      "Onaylı revizyon döngüleri ile şeffaf tasarım süreci",
      "Üretim öncesi ve sonrası kalite kontrol raporları"
    ]
  },
  faq: [
    {
      q: "Exocad dosyasını nasıl göndermeliyim?",
      a: "Exocad proje dosyanızı (.dentalProject ve ilişkili klasör) sıkıştırılmış şekilde belirlediğimiz güvenli paylaşım kanalları veya tercih ettiğiniz bulut linki üzerinden iletebilirsiniz. Dosyayı alır almaz teknik ekibimiz vaka analizi yapar ve gerekli ise kısa bir planlama notu ile size geri döner."
    },
    {
      q: "Blender dosyalarıyla nasıl çalışıyorsunuz?",
      a: "Blender tabanlı tasarımlarınızı da orijinal proje dosyaları ve export alınmış .stl verileriyle birlikte alıyoruz. Gerekirse Exocad tarafına aktarım ve yeniden konumlandırma süreçlerini de teknik ekibimiz üstlenir."
    }
  ]
};

export const qualityPage = {
  title: "Kalite & Sertifikalar – CE, ISO, FDA ve izlenebilirlik",
  description:
    "CE, ISO ve FDA sertifikaları, izlenebilir üretim yapısı ve mikron düzeyinde kalite kontrol yaklaşımıyla premium segmentte konumlanıyoruz.",
  hero: {
    heading: "Kalite, sertifikasyon ve izlenebilirlik: üretim disiplinimizin temeli",
    subheading:
      "CE, ISO ve FDA sertifikalarımız; izlenebilir üretim yapısı, kayıtlı kalite kontrol verisi ve mikron düzeyi tolerans yaklaşımı ile desteklenir.",
    bullets: [
      "CE / ISO / FDA sertifikalı üretim altyapısı",
      "Her lot için izlenebilirlik ve kayıtlı kalite kontrol verisi",
      "Laboratuvar odaklı raporlama ve dokümantasyon"
    ]
  }
};

export const deliveryPage = {
  title: "Teslimat & Operasyon Desteği – İstanbul aynı gün, Türkiye 24 saat",
  description:
    "İstanbul içi aynı gün teslim, Türkiye geneli 24 saat kargo ve operasyon tamamlanana kadar süren teknik destek modeli.",
  hero: {
    heading: "Teslimat hızını operasyon desteği ile birleştiriyoruz",
    subheading:
      "İstanbul içi aynı gün, Türkiye geneli 24 saat kargo hedefiyle üretim planımızı kuruyor; operasyon tamamlanana kadar teknik ekip desteğini kesmiyoruz.",
    bullets: [
      "İstanbul içi aynı gün, Türkiye geneli 24 saat kargo hedefi",
      "Planlı termin takvimi ve kapasite yönetimi",
      "Operasyon bitene kadar süren 7/24 teknik destek"
    ]
  }
};

export const faqPage = {
  title: "SSS – Diş laboratuvarlarının en sık sorduğu sorular",
  description:
    "Exocad dosya gönderimi, revizyon süreci, teslimat, custom abutment gereksinimleri ve operasyon desteği hakkında sık sorulan sorular.",
  hero: {
    heading: "Sık sorulan sorular: süreçleri netleştiren cevaplar",
    subheading:
      "CAD/CAM süreci, teslimat, custom abutment gereksinimleri ve teknik destek modeliyle ilgili laboratuvarlardan sıkça gelen soruları derledik.",
    bullets: [
      "Dosya gönderim ve revizyon akışı",
      "Teslimat ve termin beklentileri",
      "Operasyon boyunca teknik destek modeli"
    ]
  },
  items: [
    {
      q: "Exocad dosyasını nasıl göndermeliyim?",
      a: "Exocad proje dosyanızı (.dentalProject ve ilişkili klasör) sıkıştırılmış şekilde belirlediğimiz güvenli paylaşım kanalları veya kendi bulut linkiniz üzerinden iletebilirsiniz. Dosya geldiğinde, teknik ekibimiz ön analiz yaparak gerekirse kısa bir planlama notu ile size geri döner."
    },
    {
      q: "Revizyon süresi ve onay süreci nasıl işliyor?",
      a: "İlk taslak; vaka yoğunluğunuza ve vaka tipine göre genellikle aynı gün veya ertesi iş günü hazırlanır. Onayınız öncesinde Exocad / Blender ekran görüntüleri ve kritik kesit analizleri paylaşılır. Revizyonlar, iş yoğunluğunuza göre önceliklendirilerek kısa döngülerle tamamlanır."
    },
    {
      q: "İstanbul aynı gün teslim nasıl planlanıyor?",
      a: "İstanbul içi vakalar için, gün içi belirli saatlere kadar onaylanan tasarımlar aynı gün üretime alınır ve kuryeye teslim edilir. Planlanan operasyon saatine göre size özel teslim penceresi tanımlanır ve paylaşılır."
    },
    {
      q: "24 saat kargo hangi saat aralığında geçerli?",
      a: "Türkiye geneli için, standart iş günlerinde belirlediğimiz saatten önce onaylanan tasarımlar aynı gün kargoya verilir ve büyük çoğunlukla 24 saat içinde teslim edilir. Uzak bölge ve kargo yoğunluğu gibi istisnalar için önceden bilgi paylaşırız."
    },
    {
      q: "Custom abutment için gerekli bilgiler nelerdir?",
      a: "İlgili implant sistemi, dişeti yüksekliği, estetik beklenti seviyesi, geçici restorasyon durumu ve jinjival profille ilgili beklentileriniz bizim için kritik veriler. Exocad / tarayıcı verisiyle birlikte bu bilgileri ilettiğinizde, tasarımı bu çerçevede şekillendiriyoruz."
    },
    {
      q: "CAD/CAM uyumluluğu neyi kapsar?",
      a: "Exocad ve Blender ortamlarında sorunsuz çalışabilecek kütüphane yapıları, bağlanma yüzeyleri ve üretim parametrelerini kapsar. Tasarım sırasında, hem yazılım tarafındaki teknik gereklilikleri hem de klinik beklentileri birlikte ele alıyoruz."
    },
    {
      q: "Operasyon tamamlanana kadar destek nasıl verilir?",
      a: "Vaka açılışından operasyonun tamamlanmasına kadar; telefon, WhatsApp ve gerektiğinde uzaktan bağlantı ile teknik ekibimiz devrededir. Gerekirse klinikteki ekip ile doğrudan iletişime geçerek vaka bazlı destek sağlarız."
    },
    {
      q: "Sertifikalar ve kalite kontrol yaklaşımınız nedir?",
      a: "CE, ISO ve FDA sertifikalarına sahip bir üretim yapısı üzerinde çalışıyoruz. Her lot için ölçüm sonuçları ve yüzey kontrolleri kayıt altına alınır, izlenebilirlik odağında raporlanır."
    },
    {
      q: "All-on-Four / Six planlamasında süreç nasıl ilerler?",
      a: "All-on-Four ve All-on-Six vakalarında, implant yerleşimi, açı, seviye ve yük paylaşımını birlikte planlarız. Gerekirse dijital toplantı ile Exocad / Blender ekranı üzerinden canlı planlama yapar, sonrasında tasarım ve üretim süreçlerini devralırız."
    },
    {
      q: "Toronto ve EMAX için önerilen iş akışı nedir?",
      a: "Toronto ve EMAX vakalarında; önce vaka bilgisini ve mevcut klinik fotoğrafları alır, ardından dijital wax-up ve bar/altyapı tasarımını Exocad / Blender ortamında kurgularız. Onayınız sonrası üretim, kalite kontrol ve teslim aşamalarını planlı bir takvim üzerinden yürütürüz."
    }
  ]
};

export const contactPage = {
  title: "İletişim & Teklif Al – Teknik ekibe doğrudan ulaşın",
  description:
    "Teklif, termin, dosya gönderimi ve teknik soru talepleriniz için formu doldurun veya WhatsApp / telefon üzerinden doğrudan teknik ekiple iletişime geçin.",
  hero: {
    heading: "Teknik ekibe doğrudan ulaşın, vakalarınızı birlikte planlayalım",
    subheading:
      "Teklif, termin, dosya gönderimi ve teknik sorularınız için formu doldurun; veya WhatsApp ve telefon üzerinden doğrudan teknik ekibimize ulaşın.",
    bullets: [
      "Laboratuvar odaklı hızlı geri dönüş",
      "Vaka bazlı teknik öneriler ve planlama desteği",
      "Dosya gönderimi ve revizyon sürecine anında dahil olma"
    ]
  },
  form: {
    fields: [
      { name: "fullName", label: "Ad Soyad", type: "text", required: true },
      {
        name: "lab",
        label: "Firma / Laboratuvar",
        type: "text",
        required: true
      },
      { name: "phone", label: "Telefon", type: "tel", required: true },
      { name: "email", label: "E-posta", type: "email", required: true },
      { name: "city", label: "Şehir", type: "text", required: true },
      {
        name: "product",
        label: "İlgilendiğiniz Ürün",
        type: "select",
        required: false,
        options: [
          "Titanium",
          "EMAX",
          "Toronto",
          "All-on-Four",
          "All-on-Six",
          "Custom Abutment",
          "Diğer / Kararsız"
        ]
      },
      {
        name: "message",
        label: "Mesajınız / Vaka Bilgisi",
        type: "textarea",
        required: true
      },
      {
        name: "file",
        label: "Dosya yükleme (opsiyonel – Exocad / Blender / STL)",
        type: "file",
        required: false
      }
    ],
    thankYouTitle: "Talebiniz alındı.",
    thankYouBody:
      "Teknik ekibimiz, ilettiğiniz bilgiler ve varsa dosyalar üzerinden en kısa sürede sizinle iletişime geçecek. İsterseniz hemen WhatsApp üzerinden de yazabilirsiniz."
  }
};


