// 2026-2027 haftalık konu takvimi. Kaynak: MEB yıllık planları (planlama/kaynaklar/plan-*.txt).
// Okuldan okula 1-2 hafta kayabilir; uygulama bunu "yaklaşık" olarak kullanır.
// hafta: { no, bas: "YYYY-MM-DD", bit: "YYYY-MM-DD", tatil?: true, konu: { ders: konuId | null } }
//
// no: takvimdeki sıra (1..40), tatil haftaları dâhil. Planlardaki "13. Hafta" numarası
// tatiller sayılmadığı için 3 hafta geride kalır; eşleşme tarihe göre yapılmalıdır.
// konu değeri null ise o hafta plana göre konu işlenmiyor (sosyal etkinlik, bilim şenliği vb.).
window.LGS_TAKVIM = [
  { no: 1, bas: "2026-09-14", bit: "2026-09-18", konu: {
      turkce: "fiilimsiler", matematik: "carpanlar-katlar", fen: "mevsimlerin-olusumu",
      inkilap: "ink-1-kahraman", din: "din-1-kader", ingilizce: "ing-1-friendship" } },
  { no: 2, bas: "2026-09-21", bit: "2026-09-25", konu: {
      turkce: "fiilimsiler", matematik: "carpanlar-katlar", fen: "mevsimlerin-olusumu",
      inkilap: "ink-1-kahraman", din: "din-1-kader", ingilizce: "ing-1-friendship" } },
  { no: 3, bas: "2026-09-28", bit: "2026-10-02", konu: {
      turkce: "fiilimsiler", matematik: "uslu-ifadeler", fen: "iklim-hava-hareketleri",
      inkilap: "ink-1-kahraman", din: "din-1-kader", ingilizce: "ing-1-friendship" } },
  { no: 4, bas: "2026-10-05", bit: "2026-10-09", konu: {
      turkce: "fiilimsiler", matematik: "uslu-ifadeler", fen: "iklim-hava-hareketleri",
      inkilap: "ink-1-kahraman", din: "din-1-kader", ingilizce: "ing-2-teen-life" } },
  { no: 5, bas: "2026-10-12", bit: "2026-10-16", konu: {
      turkce: "cumlenin-ogeleri", matematik: "uslu-ifadeler", fen: "dna-genetik-kod",
      inkilap: "ink-2-milli-uyanis", din: "din-1-kader", ingilizce: "ing-2-teen-life" } },
  { no: 6, bas: "2026-10-19", bit: "2026-10-23", konu: {
      turkce: "cumlenin-ogeleri", matematik: "karekoklu-ifadeler", fen: "kalitim",
      inkilap: "ink-2-milli-uyanis", din: "din-1-kader", ingilizce: "ing-2-teen-life" } },
  { no: 7, bas: "2026-10-26", bit: "2026-10-30", konu: {
      turkce: "cumlenin-ogeleri", matematik: "karekoklu-ifadeler", fen: "kalitim",
      inkilap: "ink-2-milli-uyanis", din: "din-1-kader", ingilizce: "ing-3-kitchen" } },
  { no: 8, bas: "2026-11-02", bit: "2026-11-06", konu: {
      turkce: "cumlenin-ogeleri", matematik: "karekoklu-ifadeler", fen: "mutasyon-modifikasyon",
      inkilap: "ink-2-milli-uyanis", din: "din-2-zekat-sadaka", ingilizce: "ing-3-kitchen" } },
  { no: 9, bas: "2026-11-09", bit: "2026-11-13", konu: {
      turkce: "cumlenin-ogeleri", matematik: "karekoklu-ifadeler", fen: "biyoteknoloji",
      inkilap: "ink-2-milli-uyanis", din: "din-2-zekat-sadaka", ingilizce: "ing-3-kitchen" } },

  // 1. ara tatil
  { no: 10, bas: "2026-11-16", bit: "2026-11-20", tatil: true, konu: {} },

  { no: 11, bas: "2026-11-23", bit: "2026-11-27", konu: {
      turkce: "cumlenin-ogeleri", matematik: "karekoklu-ifadeler", fen: "kati-basinci",
      inkilap: "ink-2-milli-uyanis", din: "din-2-zekat-sadaka", ingilizce: "ing-3-kitchen" } },
  { no: 12, bas: "2026-11-30", bit: "2026-12-04", konu: {
      turkce: "cumlenin-ogeleri", matematik: "veri-analizi", fen: "sivi-gaz-basinci",
      inkilap: "ink-2-milli-uyanis", din: "din-2-zekat-sadaka", ingilizce: "ing-4-phone" } },
  { no: 13, bas: "2026-12-07", bit: "2026-12-11", konu: {
      turkce: "cumlenin-ogeleri", matematik: "veri-analizi", fen: "sivi-gaz-basinci",
      inkilap: "ink-2-milli-uyanis", din: "din-2-zekat-sadaka", ingilizce: "ing-4-phone" } },
  { no: 14, bas: "2026-12-14", bit: "2026-12-18", konu: {
      turkce: "paragrafta-anlam", matematik: "veri-analizi", fen: "periyodik-sistem",
      inkilap: "ink-2-milli-uyanis", din: "din-2-zekat-sadaka", ingilizce: "ing-4-phone" } },
  { no: 15, bas: "2026-12-21", bit: "2026-12-25", konu: {
      turkce: "cumle-turleri", matematik: "olasilik", fen: "fiziksel-kimyasal-degisim",
      inkilap: "ink-3-milli-destan", din: "din-2-zekat-sadaka", ingilizce: "ing-4-phone" } },
  { no: 16, bas: "2026-12-28", bit: "2027-01-01", konu: {
      turkce: "cumle-turleri", matematik: "olasilik", fen: "kimyasal-tepkimeler",
      inkilap: "ink-3-milli-destan", din: "din-3-din-hayat", ingilizce: "ing-5-internet" } },
  // Türkçe planında 16. hafta satırı boş (konu/kazanım yazılmamış) → null.
  { no: 17, bas: "2027-01-04", bit: "2027-01-08", konu: {
      turkce: null, matematik: "cebirsel-ifadeler", fen: "asitler-bazlar",
      inkilap: "ink-3-milli-destan", din: "din-3-din-hayat", ingilizce: "ing-5-internet" } },
  { no: 18, bas: "2027-01-11", bit: "2027-01-15", konu: {
      turkce: "cumle-turleri", matematik: "cebirsel-ifadeler", fen: "asitler-bazlar",
      inkilap: "ink-3-milli-destan", din: "din-3-din-hayat", ingilizce: "ing-5-internet" } },
  // Din Kültürü planında 18. hafta "sosyal etkinlik" → null.
  { no: 19, bas: "2027-01-18", bit: "2027-01-22", konu: {
      turkce: "cumle-turleri", matematik: "cebirsel-ifadeler", fen: "isi-madde",
      inkilap: "ink-3-milli-destan", din: null, ingilizce: "ing-5-internet" } },

  // Yarıyıl tatili (iki hafta)
  { no: 20, bas: "2027-01-25", bit: "2027-02-05", tatil: true, konu: {} },

  { no: 21, bas: "2027-02-08", bit: "2027-02-12", konu: {
      turkce: "cumle-turleri", matematik: "dogrusal-denklemler", fen: "kimya-endustrisi",
      inkilap: "ink-3-milli-destan", din: "din-3-din-hayat", ingilizce: "ing-6-adventures" } },
  { no: 22, bas: "2027-02-15", bit: "2027-02-19", konu: {
      turkce: "cumle-turleri", matematik: "dogrusal-denklemler", fen: "basit-makineler",
      inkilap: "ink-3-milli-destan", din: "din-3-din-hayat", ingilizce: "ing-6-adventures" } },
  { no: 23, bas: "2027-02-22", bit: "2027-02-26", konu: {
      turkce: "cumle-turleri", matematik: "dogrusal-denklemler", fen: "basit-makineler",
      inkilap: "ink-4-ataturkculuk", din: "din-3-din-hayat", ingilizce: "ing-6-adventures" } },
  { no: 24, bas: "2027-03-01", bit: "2027-03-05", konu: {
      turkce: "cumle-turleri", matematik: "dogrusal-denklemler", fen: "besin-zinciri",
      inkilap: "ink-4-ataturkculuk", din: "din-3-din-hayat", ingilizce: "ing-7-tourism" } },

  // 2. ara tatil (Ramazan Bayramı ile aynı haftaya denk geliyor)
  { no: 25, bas: "2027-03-08", bit: "2027-03-12", tatil: true, konu: {} },

  { no: 26, bas: "2027-03-15", bit: "2027-03-19", konu: {
      turkce: "fiilde-cati", matematik: "dogrusal-denklemler", fen: "fotosentez-solunum",
      inkilap: "ink-4-ataturkculuk", din: "din-4-ornek", ingilizce: "ing-7-tourism" } },
  { no: 27, bas: "2027-03-22", bit: "2027-03-26", konu: {
      turkce: "fiilde-cati", matematik: "dogrusal-denklemler", fen: "fotosentez-solunum",
      inkilap: "ink-4-ataturkculuk", din: "din-4-ornek", ingilizce: "ing-7-tourism" } },
  { no: 28, bas: "2027-03-29", bit: "2027-04-02", konu: {
      turkce: "fiilde-cati", matematik: "esitsizlikler", fen: "madde-donguleri",
      inkilap: "ink-4-ataturkculuk", din: "din-4-ornek", ingilizce: "ing-7-tourism" } },
  { no: 29, bas: "2027-04-05", bit: "2027-04-09", konu: {
      turkce: "fiilde-cati", matematik: "esitsizlikler", fen: "madde-donguleri",
      inkilap: "ink-4-ataturkculuk", din: "din-4-ornek", ingilizce: "ing-8-chores" } },
  { no: 30, bas: "2027-04-12", bit: "2027-04-16", konu: {
      turkce: "fiilde-cati", matematik: "ucgenler", fen: "surdurulebilir-kalkinma",
      inkilap: "ink-5-demokratiklesme", din: "din-4-ornek", ingilizce: "ing-8-chores" } },
  { no: 31, bas: "2027-04-19", bit: "2027-04-23", konu: {
      turkce: "anlatim-bozukluklari", matematik: "ucgenler", fen: "elektriklenme",
      inkilap: "ink-5-demokratiklesme", din: "din-4-ornek", ingilizce: "ing-8-chores" } },
  { no: 32, bas: "2027-04-26", bit: "2027-04-30", konu: {
      turkce: "anlatim-bozukluklari", matematik: "ucgenler", fen: "elektriklenme",
      inkilap: "ink-5-demokratiklesme", din: "din-4-ornek", ingilizce: "ing-9-science" } },
  { no: 33, bas: "2027-05-03", bit: "2027-05-07", konu: {
      turkce: "anlatim-bozukluklari", matematik: "ucgenler", fen: "elektrik-yuklu-cisimler",
      inkilap: "ink-6-dis-politika", din: "din-4-ornek", ingilizce: "ing-9-science" } },
  { no: 34, bas: "2027-05-10", bit: "2027-05-14", konu: {
      turkce: "anlatim-bozukluklari", matematik: "eslik-benzerlik", fen: "elektrik-yuklu-cisimler",
      inkilap: "ink-6-dis-politika", din: "din-5-kuran", ingilizce: "ing-9-science" } },
  // Kurban Bayramı bu haftaya denk geliyor; planlar yine de konu işletiyor.
  { no: 35, bas: "2027-05-17", bit: "2027-05-21", konu: {
      turkce: "yazim-kurallari", matematik: "donusum-geometrisi", fen: "elektrik-enerjisi-donusumu",
      inkilap: "ink-6-dis-politika", din: "din-5-kuran", ingilizce: "ing-9-science" } },
  { no: 36, bas: "2027-05-24", bit: "2027-05-28", konu: {
      turkce: "fiilde-cati", matematik: "donusum-geometrisi", fen: "elektrik-enerjisi-donusumu",
      inkilap: "ink-7-olum-sonrasi", din: "din-5-kuran", ingilizce: "ing-10-natural-forces" } },
  // Fen planı 34-36. haftaları "Yıl Sonu Bilim Şenliği"ne ayırmış → konu yok.
  { no: 37, bas: "2027-05-31", bit: "2027-06-04", konu: {
      turkce: "cumlenin-ogeleri", matematik: "geometrik-cisimler", fen: null,
      inkilap: "ink-7-olum-sonrasi", din: "din-5-kuran", ingilizce: "ing-10-natural-forces" } },
  { no: 38, bas: "2027-06-07", bit: "2027-06-11", konu: {
      turkce: "cumle-turleri", matematik: "geometrik-cisimler", fen: null,
      inkilap: "ink-7-olum-sonrasi", din: "din-5-kuran", ingilizce: "ing-10-natural-forces" } },
  { no: 39, bas: "2027-06-14", bit: "2027-06-18", konu: {
      turkce: "anlatim-bozukluklari", matematik: "geometrik-cisimler", fen: null,
      inkilap: "ink-7-olum-sonrasi", din: "din-5-kuran", ingilizce: "ing-10-natural-forces" } },
  // 37. hafta: bütün planlarda "sosyal etkinlik" / konu yok. Okullar 25 Haziran'da kapanıyor.
  { no: 40, bas: "2027-06-21", bit: "2027-06-25", konu: {
      turkce: null, matematik: null, fen: null,
      inkilap: null, din: null, ingilizce: null } }
];
