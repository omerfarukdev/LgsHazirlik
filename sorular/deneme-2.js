// 2. Aylık Deneme — bilgi dosyası. Bankadan dinamik beslenen ilk deneme (25 Ekim 2026 kararı).
// Sorular: denemeye özel az sayıda yeni soru (deneme-2-<ders>.js → window.LGS_DENEME["deneme-2"]) +
// `dinamik` plandaki konulardan, öğrencinin hiç cevaplamadığı banka soruları (js/app.js "Bankadan dinamik deneme").
// Kapsam: okulda 14 Eylül – 13 Kasım 2026 arasında işlenen konular (MEB yıllık planları 1-9. haftalar).
// Son hafta başlayan konu ya da kazanım girmez (Biyoteknoloji; İTA.8.2.5; DKAB.8.2.2). Okulda yarıda kalan
// konularda yalnızca işlenmiş kazanımlar sorulur (`kazanimSiniri`). 16-20 Kasım ara tatil: deneme tatilin ilk günü açılır.
// Her ders: yeni + dinamik = LGS soru sayısı (Türkçe, Matematik, Fen 20; İnkılap, Din, İngilizce 10).
window.LGS_DENEME_BILGI = window.LGS_DENEME_BILGI || {};
window.LGS_DENEME_BILGI["deneme-2"] = {
  ad: "2. Aylık Deneme",
  acilis: "2026-11-14",
  kapsam: "Okulda 13 Kasım'a kadar işlediğin konulardan: Çarpanlar ve Katlar, Üslü İfadeler, Kareköklü İfadeler; Mevsimler, İklim, DNA ve Genetik Kod, Kalıtım, Mutasyon ve Modifikasyon, Adaptasyon; İnkılap Tarihi 1. ünite ve 2. ünitenin ilk dört konusu; Kader İnancı, İslam'da paylaşma ve yardımlaşma; Fiilimsiler, Cümlenin Ögeleri, paragraf ve anlam bilgisi; İngilizce 1-3. üniteler.",
  dinamik: {
    turkce: {
      "paragrafta-anlam": 7, "cumlenin-ogeleri": 3, "fiilimsiler": 1, "sozcukte-anlam": 1,
      "cumlede-anlam": 1, "gorsel-grafik-okuma": 1, "sozel-mantik": 1, "yazim-kurallari": 1
    },
    matematik: { "carpanlar-katlar": 4, "uslu-ifadeler": 5, "karekoklu-ifadeler": 7 },
    fen: { "mevsimlerin-olusumu": 2, "iklim-hava-hareketleri": 3, "dna-genetik-kod": 3, "kalitim": 4, "mutasyon-modifikasyon": 2, "adaptasyon": 2 },
    inkilap: { "ink-1-kahraman": 3, "ink-2-milli-uyanis": 4 },
    din: { "din-1-kader": 6, "din-2-zekat-sadaka": 1 },
    ingilizce: { "ing-1-friendship": 2, "ing-2-teen-life": 3, "ing-3-kitchen": 2 }
  },
  kazanimSiniri: {
    "karekoklu-ifadeler": ["M.8.1.3.1", "M.8.1.3.2", "M.8.1.3.3", "M.8.1.3.4", "M.8.1.3.5", "M.8.1.3.6"],
    "ink-2-milli-uyanis": ["İTA.8.2.1", "İTA.8.2.2", "İTA.8.2.3", "İTA.8.2.4"],
    "din-2-zekat-sadaka": ["DKAB.8.2.1"]
  }
};
