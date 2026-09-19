// Ders → ünite → konu ağacı. Kaynak: 2018 öğretim programları (Türkçe 2019) ve
// planlama/arastirma-mufredat.md. Konu id'leri SABİTTİR; öğrencinin kayıtları bunlara bağlıdır.
// "ay": okulda yaklaşık işleniş zamanı (ikincil kaynaklı yıllık plan; okula göre 1-3 hafta kayabilir).
window.LGS_KONULAR = [
  {
    id: "matematik", ad: "Matematik", ikon: "📐", onek: "mat", soru: 20, katsayi: 4,
    uniteler: [
      { ad: "1. Ünite", konular: [
        { id: "carpanlar-katlar", ad: "Çarpanlar ve Katlar", ay: "Eylül" },
        { id: "uslu-ifadeler", ad: "Üslü İfadeler", ay: "Eylül – Ekim" }
      ] },
      { ad: "2. Ünite", konular: [
        { id: "karekoklu-ifadeler", ad: "Kareköklü İfadeler", ay: "Ekim – Kasım" },
        { id: "veri-analizi", ad: "Veri Analizi", ay: "Aralık" }
      ] },
      { ad: "3. Ünite", konular: [
        { id: "olasilik", ad: "Basit Olayların Olma Olasılığı", ay: "Aralık" },
        { id: "cebirsel-ifadeler", ad: "Cebirsel İfadeler ve Özdeşlikler", ay: "Ocak" }
      ] },
      { ad: "4. Ünite", konular: [
        { id: "dogrusal-denklemler", ad: "Doğrusal Denklemler", ay: "Şubat – Mart" },
        { id: "esitsizlikler", ad: "Eşitsizlikler", ay: "Mart – Nisan" }
      ] },
      { ad: "5. Ünite", konular: [
        { id: "ucgenler", ad: "Üçgenler", ay: "Nisan" },
        { id: "eslik-benzerlik", ad: "Eşlik ve Benzerlik", ay: "Mayıs" }
      ] },
      { ad: "6. Ünite", konular: [
        { id: "donusum-geometrisi", ad: "Dönüşüm Geometrisi", ay: "Mayıs" },
        { id: "geometrik-cisimler", ad: "Geometrik Cisimler", ay: "Haziran" }
      ] }
    ]
  },
  {
    id: "fen", ad: "Fen Bilimleri", ikon: "🔬", onek: "fen", soru: 20, katsayi: 4,
    uniteler: [
      { ad: "1. Ünite: Mevsimler ve İklim", konular: [
        { id: "mevsimlerin-olusumu", ad: "Mevsimlerin Oluşumu", ay: "Eylül" },
        { id: "iklim-hava-hareketleri", ad: "İklim ve Hava Hareketleri", ay: "Eylül – Ekim" }
      ] },
      { ad: "2. Ünite: DNA ve Genetik Kod", konular: [
        { id: "dna-genetik-kod", ad: "DNA ve Genetik Kod", ay: "Ekim" },
        { id: "kalitim", ad: "Kalıtım", ay: "Ekim" },
        { id: "mutasyon-modifikasyon", ad: "Mutasyon ve Modifikasyon", ay: "Kasım" },
        { id: "adaptasyon", ad: "Adaptasyon", ay: "Kasım" },
        { id: "biyoteknoloji", ad: "Biyoteknoloji", ay: "Kasım" }
      ] },
      { ad: "3. Ünite: Basınç", konular: [
        { id: "kati-basinci", ad: "Katı Basıncı", ay: "Kasım" },
        { id: "sivi-gaz-basinci", ad: "Sıvı ve Gaz Basıncı", ay: "Aralık" }
      ] },
      { ad: "4. Ünite: Madde ve Endüstri", konular: [
        { id: "periyodik-sistem", ad: "Periyodik Sistem", ay: "Aralık" },
        { id: "fiziksel-kimyasal-degisim", ad: "Fiziksel ve Kimyasal Değişimler", ay: "Aralık" },
        { id: "kimyasal-tepkimeler", ad: "Kimyasal Tepkimeler", ay: "Ocak" },
        { id: "asitler-bazlar", ad: "Asitler ve Bazlar", ay: "Ocak" },
        { id: "isi-madde", ad: "Maddenin Isı ile Etkileşimi", ay: "Ocak – Şubat" },
        { id: "kimya-endustrisi", ad: "Türkiye'de Kimya Endüstrisi", ay: "Şubat" }
      ] },
      { ad: "5. Ünite: Basit Makineler", konular: [
        { id: "basit-makineler", ad: "Basit Makineler", ay: "Şubat" }
      ] },
      { ad: "6. Ünite: Enerji Dönüşümleri ve Çevre Bilimi", konular: [
        { id: "besin-zinciri", ad: "Besin Zinciri ve Enerji Akışı", ay: "Mart" },
        { id: "fotosentez-solunum", ad: "Enerji Dönüşümleri (Fotosentez ve Solunum)", ay: "Mart" },
        { id: "madde-donguleri", ad: "Madde Döngüleri ve Çevre Sorunları", ay: "Nisan" },
        { id: "surdurulebilir-kalkinma", ad: "Sürdürülebilir Kalkınma", ay: "Nisan" }
      ] },
      { ad: "7. Ünite: Elektrik Yükleri ve Elektrik Enerjisi", konular: [
        { id: "elektriklenme", ad: "Elektrik Yükleri ve Elektriklenme", ay: "Nisan" },
        { id: "elektrik-yuklu-cisimler", ad: "Elektrik Yüklü Cisimler", ay: "Mayıs" },
        { id: "elektrik-enerjisi-donusumu", ad: "Elektrik Enerjisinin Dönüşümü", ay: "Mayıs" }
      ] }
    ]
  },
  {
    id: "turkce", ad: "Türkçe", ikon: "📖", onek: "tur", soru: 20, katsayi: 4,
    uniteler: [
      { ad: "Anlam ve Okuma (yıl boyu açık)", konular: [
        { id: "sozcukte-anlam", ad: "Sözcükte Anlam", ay: "Yıl boyu" },
        { id: "cumlede-anlam", ad: "Cümlede Anlam", ay: "Yıl boyu" },
        // rutin: kademeli konu testi yoktur; bütün sorular günlük paragraf havuzundadır.
        // Paragraf öğrenilip bitirilen bir konu değil, her gün beslenen bir beceridir ve
        // okuma hızı üzerinden Fen ile Matematiği de etkiler.
        { id: "paragrafta-anlam", ad: "Paragrafta Anlam", ay: "Yıl boyu", rutin: true },
        { id: "soz-sanatlari", ad: "Söz Sanatları", ay: "Yıl boyu" },
        { id: "metin-turleri", ad: "Metin Türleri", ay: "Yıl boyu" },
        { id: "gorsel-grafik-okuma", ad: "Görsel ve Grafik Okuma", ay: "Yıl boyu" },
        { id: "sozel-mantik", ad: "Sözel Mantık", ay: "Yıl boyu" }
      ] },
      { ad: "Yazım ve Noktalama (yıl boyu açık)", konular: [
        { id: "yazim-kurallari", ad: "Yazım Kuralları", ay: "Yıl boyu" },
        { id: "noktalama", ad: "Noktalama İşaretleri", ay: "Yıl boyu" }
      ] },
      { ad: "Dil Bilgisi", konular: [
        { id: "fiilimsiler", ad: "Fiilimsiler", ay: "Eylül – Ekim" },
        { id: "cumlenin-ogeleri", ad: "Cümlenin Ögeleri", ay: "Ekim – Aralık" },
        { id: "cumle-turleri", ad: "Cümle Türleri", ay: "Aralık – Mart" },
        { id: "fiilde-cati", ad: "Fiilde Çatı", ay: "Mart – Nisan" },
        { id: "anlatim-bozukluklari", ad: "Anlatım Bozuklukları", ay: "Nisan – Mayıs" }
      ] }
    ]
  },
  {
    id: "inkilap", ad: "İnkılap Tarihi", ikon: "🏛️", onek: "ink", soru: 10, katsayi: 1,
    uniteler: [
      { ad: "Üniteler", konular: [
        { id: "ink-1-kahraman", ad: "1. Bir Kahraman Doğuyor", ay: "Eylül – Ekim" },
        { id: "ink-2-milli-uyanis", ad: "2. Millî Uyanış: Bağımsızlık Yolunda Atılan Adımlar", ay: "Ekim – Aralık" },
        { id: "ink-3-milli-destan", ad: "3. Millî Bir Destan: Ya İstiklal Ya Ölüm!", ay: "Aralık – Şubat" },
        { id: "ink-4-ataturkculuk", ad: "4. Atatürkçülük ve Çağdaşlaşan Türkiye", ay: "Şubat – Nisan" },
        { id: "ink-5-demokratiklesme", ad: "5. Demokratikleşme Çabaları", ay: "Nisan" },
        { id: "ink-6-dis-politika", ad: "6. Atatürk Dönemi Türk Dış Politikası", ay: "Mayıs" },
        { id: "ink-7-olum-sonrasi", ad: "7. Atatürk'ün Ölümü ve Sonrası", ay: "Mayıs – Haziran" }
      ] }
    ]
  },
  {
    id: "din", ad: "Din Kültürü", ikon: "🕌", onek: "din", soru: 10, katsayi: 1,
    uniteler: [
      { ad: "Üniteler", konular: [
        { id: "din-1-kader", ad: "1. Kader İnancı", ay: "Eylül – Ekim" },
        { id: "din-2-zekat-sadaka", ad: "2. Zekât ve Sadaka", ay: "Kasım – Aralık" },
        { id: "din-3-din-hayat", ad: "3. Din ve Hayat", ay: "Ocak – Mart" },
        { id: "din-4-ornek", ad: "4. Hz. Muhammed'in Örnekliği", ay: "Mart – Mayıs" },
        { id: "din-5-kuran", ad: "5. Kur'an-ı Kerim ve Özellikleri", ay: "Mayıs – Haziran" }
      ] }
    ]
  },
  {
    id: "ingilizce", ad: "İngilizce", ikon: "🌍", onek: "ing", soru: 10, katsayi: 1,
    uniteler: [
      { ad: "Units", konular: [
        { id: "ing-1-friendship", ad: "1. Friendship", ay: "Eylül" },
        { id: "ing-2-teen-life", ad: "2. Teen Life", ay: "Ekim" },
        { id: "ing-3-kitchen", ad: "3. In the Kitchen", ay: "Kasım" },
        { id: "ing-4-phone", ad: "4. On the Phone", ay: "Aralık" },
        { id: "ing-5-internet", ad: "5. The Internet", ay: "Ocak" },
        { id: "ing-6-adventures", ad: "6. Adventures", ay: "Şubat" },
        { id: "ing-7-tourism", ad: "7. Tourism", ay: "Mart" },
        { id: "ing-8-chores", ad: "8. Chores", ay: "Nisan" },
        { id: "ing-9-science", ad: "9. Science", ay: "Mayıs" },
        { id: "ing-10-natural-forces", ad: "10. Natural Forces", ay: "Mayıs – Haziran" }
      ] }
    ]
  }
];
