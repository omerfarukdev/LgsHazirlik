// Uygulama ayarları. Sınav tarihi ve format MEB kılavuzuna göre güncellenir
// (2027 kılavuzu Mart 2027 civarında bekleniyor).
window.LGS_AYAR = {
  // Ana sayfadaki selamlamada görünür; boş bırakılabilir.
  ogrenciAdi: "",

  // LGS 2027 tarihi henüz açıklanmadı. Açıklanınca "2027-06-12" biçiminde yaz;
  // boşken ana sayfada "Haziran 2027" görünür.
  sinavTarihi: "",
  sinavTahmini: "Haziran 2027",
  // Ana sayfadaki yıl çizelgesinin uçları: okulların açılışı ve (tarih açıklanana kadar) tahmini sınav günü.
  yilBasi: "2026-09-14",
  sinavTahminiTarih: "2027-06-13",

  // Bir kademede bu oranın altında kalınırsa sonraki kademe açılmaz.
  gecmeEsigi: 0.6,
  // Bu oranın üstü "sağlam" (yeşil), altı "zayıf" (sarı) sayılır.
  saglamEsigi: 0.8,

  // Günlük paragraf rutini. Paragraf, LGS'nin en yüksek getirili konusu ve bütün
  // derslerin okuma hızını belirleyen beceri; bu yüzden ayrı bir günlük hedefi var.
  paragrafHedefi: 50,     // günde çözülmesi hedeflenen paragraf sorusu
  paragrafSetBoyutu: 50,  // bir turda kaç soru sorulur (gerçek LGS sözel oturumu da 50 soru / 75 dk)

  // Test süresi: her sorunun zorluk düzeyine göre verilen saniyelerin toplamı.
  // Gerçek LGS temposu: sözel 50 soru / 75 dk = 90 sn, sayısal 40 soru / 80 dk = 120 sn.
  // Aşağıdaki değerler bu tempoyu tutturur; sınav yaklaştıkça kısılabilir.
  sureSoruBasi: { 1: 45, 2: 75, 3: 110, 4: 150 },
  // true: süre geri sayar. false: yalnızca ileri sayar, hedef süre gösterilmez.
  sureSiniri: true,
  // true: süre dolunca test KENDİLİĞİNDEN BİTER (gerçek sınav gibi).
  // false: süre dolunca test sürer, sayaç aşıma geçer ve fazladan harcanan süre kaydedilir.
  //   Yıl başında öğrenciyi kesmemek için false; sınav yaklaşınca true yapılır.
  sureBitinceKes: false,
  // Süre bitimine bu kadar saniye kala sayaç kırmızıya döner.
  sureUyari: 120,

  // Rapor altyapısı. BURAYI DOLDURMA — bu dosya herkese açık depoda tutuluyor ve Apps Script
  // adresi bir anahtardır. Adres, uygulamadaki "Panel bağlantısı" penceresinden girilir ve
  // yalnızca o tarayıcıya kaydedilir. Alan yalnızca geriye dönük uyumluluk için duruyor.
  raporUrl: ""
};
