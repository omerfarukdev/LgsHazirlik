// Ders → ünite → konu ağacı. Kaynak: 2018 öğretim programları (Türkçe 2019) ve
// planlama/arastirma-mufredat.md. Konu id'leri SABİTTİR; öğrencinin kayıtları bunlara bağlıdır.
// "ay": okulda yaklaşık işleniş zamanı (ikincil kaynaklı yıllık plan; okula göre 1-3 hafta kayabilir).
window.LGS_KONULAR = [
  {
    id: "matematik", ad: "Matematik", ikon: "📐", onek: "mat", soru: 20, katsayi: 4,
    uniteler: [
      { id: "mat-u1", ad: "1. Ünite", konular: [
        { id: "carpanlar-katlar", ad: "Çarpanlar ve Katlar", lgs: "1", ay: "Eylül" },
        { id: "uslu-ifadeler", ad: "Üslü İfadeler", lgs: "2", ay: "Eylül – Ekim" }
      ] },
      { id: "mat-u2", ad: "2. Ünite", konular: [
        { id: "karekoklu-ifadeler", ad: "Kareköklü İfadeler", lgs: "3", ay: "Ekim – Kasım" },
        { id: "veri-analizi", ad: "Veri Analizi", lgs: "1", ay: "Aralık" }
      ] },
      { id: "mat-u3", ad: "3. Ünite", konular: [
        { id: "olasilik", ad: "Basit Olayların Olma Olasılığı", lgs: "1", ay: "Aralık" },
        { id: "cebirsel-ifadeler", ad: "Cebirsel İfadeler ve Özdeşlikler", lgs: "2", ay: "Ocak" }
      ] },
      { id: "mat-u4", ad: "4. Ünite", konular: [
        { id: "dogrusal-denklemler", ad: "Doğrusal Denklemler", lgs: "3-4", ay: "Şubat – Mart" },
        { id: "esitsizlikler", ad: "Eşitsizlikler", lgs: "2", ay: "Mart – Nisan" }
      ] },
      { id: "mat-u5", ad: "5. Ünite", konular: [
        { id: "ucgenler", ad: "Üçgenler", lgs: "2", ay: "Nisan" },
        { id: "eslik-benzerlik", ad: "Eşlik ve Benzerlik", lgs: "1", ay: "Mayıs" }
      ] },
      { id: "mat-u6", ad: "6. Ünite", konular: [
        { id: "donusum-geometrisi", ad: "Dönüşüm Geometrisi", lgs: "1", ay: "Mayıs" },
        { id: "geometrik-cisimler", ad: "Geometrik Cisimler", lgs: "1", ay: "Haziran" }
      ] }
    ]
  },
  {
    id: "fen", ad: "Fen Bilimleri", ikon: "🔬", onek: "fen", soru: 20, katsayi: 4,
    uniteler: [
      { id: "fen-u1", ad: "1. Ünite: Mevsimler ve İklim", konular: [
        { id: "mevsimlerin-olusumu", ad: "Mevsimlerin Oluşumu", lgs: "1", ay: "Eylül" },
        { id: "iklim-hava-hareketleri", ad: "İklim ve Hava Hareketleri", lgs: "0-1", ay: "Eylül – Ekim" }
      ] },
      { id: "fen-u2", ad: "2. Ünite: DNA ve Genetik Kod", konular: [
        { id: "dna-genetik-kod", ad: "DNA ve Genetik Kod", lgs: "1", ay: "Ekim" },
        { id: "kalitim", ad: "Kalıtım", lgs: "1-2", ay: "Ekim" },
        { id: "mutasyon-modifikasyon", ad: "Mutasyon ve Modifikasyon", lgs: "0-1", ay: "Kasım" },
        { id: "adaptasyon", ad: "Adaptasyon", lgs: "0-1", ay: "Kasım" },
        { id: "biyoteknoloji", ad: "Biyoteknoloji", lgs: "0-1", ay: "Kasım" }
      ] },
      { id: "fen-u3", ad: "3. Ünite: Basınç", konular: [
        { id: "kati-basinci", ad: "Katı Basıncı", lgs: "1", ay: "Kasım" },
        { id: "sivi-gaz-basinci", ad: "Sıvı ve Gaz Basıncı", lgs: "1", ay: "Aralık" }
      ] },
      { id: "fen-u4", ad: "4. Ünite: Madde ve Endüstri", konular: [
        { id: "periyodik-sistem", ad: "Periyodik Sistem", lgs: "1", ay: "Aralık" },
        { id: "fiziksel-kimyasal-degisim", ad: "Fiziksel ve Kimyasal Değişimler", lgs: "1", ay: "Aralık" },
        { id: "kimyasal-tepkimeler", ad: "Kimyasal Tepkimeler", lgs: "1", ay: "Ocak" },
        { id: "asitler-bazlar", ad: "Asitler ve Bazlar", lgs: "1", ay: "Ocak" },
        { id: "isi-madde", ad: "Maddenin Isı ile Etkileşimi", lgs: "1", ay: "Ocak – Şubat" },
        { id: "kimya-endustrisi", ad: "Türkiye'de Kimya Endüstrisi", lgs: "0-1", ay: "Şubat" }
      ] },
      { id: "fen-u5", ad: "5. Ünite: Basit Makineler", konular: [
        { id: "basit-makineler", ad: "Basit Makineler", lgs: "2", ay: "Şubat" }
      ] },
      { id: "fen-u6", ad: "6. Ünite: Enerji Dönüşümleri ve Çevre Bilimi", konular: [
        { id: "besin-zinciri", ad: "Besin Zinciri ve Enerji Akışı", lgs: "1", ay: "Mart" },
        { id: "fotosentez-solunum", ad: "Enerji Dönüşümleri (Fotosentez ve Solunum)", lgs: "1-2", ay: "Mart" },
        { id: "madde-donguleri", ad: "Madde Döngüleri ve Çevre Sorunları", lgs: "1", ay: "Nisan" },
        { id: "surdurulebilir-kalkinma", ad: "Sürdürülebilir Kalkınma", lgs: "0-1", ay: "Nisan" }
      ] },
      { id: "fen-u7", ad: "7. Ünite: Elektrik Yükleri ve Elektrik Enerjisi", konular: [
        { id: "elektriklenme", ad: "Elektrik Yükleri ve Elektriklenme", lgs: "1", ay: "Nisan" },
        { id: "elektrik-yuklu-cisimler", ad: "Elektrik Yüklü Cisimler", lgs: "1", ay: "Mayıs" },
        { id: "elektrik-enerjisi-donusumu", ad: "Elektrik Enerjisinin Dönüşümü", lgs: "1", ay: "Mayıs" }
      ] }
    ]
  },
  {
    id: "turkce", ad: "Türkçe", ikon: "📖", onek: "tur", soru: 20, katsayi: 4,
    uniteler: [
      { id: "tur-u1", ad: "Anlam ve Okuma (yıl boyu açık)", konular: [
        { id: "sozcukte-anlam", ad: "Sözcükte Anlam", lgs: "1-2", ay: "Yıl boyu" },
        { id: "cumlede-anlam", ad: "Cümlede Anlam", lgs: "2-3", ay: "Yıl boyu" },
        // rutin: kademeli konu testi yoktur; bütün sorular günlük paragraf havuzundadır.
        // Paragraf öğrenilip bitirilen bir konu değil, her gün beslenen bir beceridir ve
        // okuma hızı üzerinden Fen ile Matematiği de etkiler.
        { id: "paragrafta-anlam", ad: "Paragrafta Anlam", lgs: "6-11", ay: "Yıl boyu", rutin: true },
        { id: "soz-sanatlari", ad: "Söz Sanatları", lgs: "0-1", ay: "Yıl boyu" },
        { id: "metin-turleri", ad: "Metin Türleri", lgs: "1", ay: "Yıl boyu" },
        { id: "gorsel-grafik-okuma", ad: "Görsel ve Grafik Okuma", lgs: "3-5", ay: "Yıl boyu" },
        { id: "sozel-mantik", ad: "Sözel Mantık", lgs: "3-5", ay: "Yıl boyu" }
      ] },
      { id: "tur-u2", ad: "Yazım ve Noktalama (yıl boyu açık)", konular: [
        { id: "yazim-kurallari", ad: "Yazım Kuralları", lgs: "1", ay: "Yıl boyu" },
        { id: "noktalama", ad: "Noktalama İşaretleri", lgs: "1", ay: "Yıl boyu" }
      ] },
      { id: "tur-u3", ad: "Dil Bilgisi", konular: [
        { id: "fiilimsiler", ad: "Fiilimsiler", lgs: "0-1", ay: "Eylül – Ekim" },
        { id: "cumlenin-ogeleri", ad: "Cümlenin Ögeleri", lgs: "0-1", ay: "Ekim – Aralık" },
        { id: "cumle-turleri", ad: "Cümle Türleri", lgs: "0-1", ay: "Aralık – Mart" },
        { id: "fiilde-cati", ad: "Fiilde Çatı", lgs: "0-1", ay: "Mart – Nisan" },
        { id: "anlatim-bozukluklari", ad: "Anlatım Bozuklukları", lgs: "0-2", ay: "Nisan – Mayıs" }
      ] }
    ]
  },
  {
    id: "inkilap", ad: "İnkılap Tarihi", ikon: "🏛️", onek: "ink", soru: 10, katsayi: 1,
    uniteler: [
      { id: "ink-u1", ad: "Üniteler", konular: [
        { id: "ink-1-kahraman", ad: "1. Bir Kahraman Doğuyor", lgs: "1", ay: "Eylül – Ekim" },
        { id: "ink-2-milli-uyanis", ad: "2. Millî Uyanış: Bağımsızlık Yolunda Atılan Adımlar", lgs: "2-3", ay: "Ekim – Aralık" },
        { id: "ink-3-milli-destan", ad: "3. Millî Bir Destan: Ya İstiklal Ya Ölüm!", lgs: "2", ay: "Aralık – Şubat" },
        { id: "ink-4-ataturkculuk", ad: "4. Atatürkçülük ve Çağdaşlaşan Türkiye", lgs: "2-4", ay: "Şubat – Nisan" },
        { id: "ink-5-demokratiklesme", ad: "5. Demokratikleşme Çabaları", lgs: "0-1", ay: "Nisan" },
        { id: "ink-6-dis-politika", ad: "6. Atatürk Dönemi Türk Dış Politikası", lgs: "0-1", ay: "Mayıs" },
        { id: "ink-7-olum-sonrasi", ad: "7. Atatürk'ün Ölümü ve Sonrası", lgs: "0-1", ay: "Mayıs – Haziran" }
      ] }
    ]
  },
  {
    id: "din", ad: "Din Kültürü", ikon: "🕌", onek: "din", soru: 10, katsayi: 1,
    uniteler: [
      { id: "din-u1", ad: "Üniteler", konular: [
        { id: "din-1-kader", ad: "1. Kader İnancı", lgs: "2", ay: "Eylül – Ekim" },
        { id: "din-2-zekat-sadaka", ad: "2. Zekât ve Sadaka", lgs: "2", ay: "Kasım – Aralık" },
        { id: "din-3-din-hayat", ad: "3. Din ve Hayat", lgs: "2", ay: "Ocak – Mart" },
        { id: "din-4-ornek", ad: "4. Hz. Muhammed'in Örnekliği", lgs: "2", ay: "Mart – Mayıs" },
        { id: "din-5-kuran", ad: "5. Kur'an-ı Kerim ve Özellikleri", lgs: "2", ay: "Mayıs – Haziran" }
      ] }
    ]
  },
  {
    id: "ingilizce", ad: "İngilizce", ikon: "🌍", onek: "ing", soru: 10, katsayi: 1,
    uniteler: [
      { id: "ing-u1", ad: "Units", konular: [
        { id: "ing-1-friendship", ad: "1. Friendship", lgs: "1-2", ay: "Eylül" },
        { id: "ing-2-teen-life", ad: "2. Teen Life", lgs: "1", ay: "Ekim" },
        { id: "ing-3-kitchen", ad: "3. In the Kitchen", lgs: "1", ay: "Kasım" },
        { id: "ing-4-phone", ad: "4. On the Phone", lgs: "1", ay: "Aralık" },
        { id: "ing-5-internet", ad: "5. The Internet", lgs: "1", ay: "Ocak" },
        { id: "ing-6-adventures", ad: "6. Adventures", lgs: "1", ay: "Şubat" },
        { id: "ing-7-tourism", ad: "7. Tourism", lgs: "1", ay: "Mart" },
        { id: "ing-8-chores", ad: "8. Chores", lgs: "1", ay: "Nisan" },
        { id: "ing-9-science", ad: "9. Science", lgs: "1", ay: "Mayıs" },
        { id: "ing-10-natural-forces", ad: "10. Natural Forces", lgs: "1", ay: "Mayıs – Haziran" }
      ] }
    ]
  }
];
