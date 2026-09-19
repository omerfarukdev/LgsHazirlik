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

  // Test süresi: her sorunun zorluk düzeyine göre verilen saniyelerin toplamı.
  // (Gerçek LGS'de sayısal bölümde soru başına ortalama 120 sn düşer; sınav yaklaştıkça bu değerler kısılabilir.)
  sureSoruBasi: { 1: 60, 2: 100, 3: 150, 4: 210 },
  // true: süre geri sayar, dolunca test kendiliğinden biter (gerçek sınav gibi).
  // false: süre yalnızca ileri sayar, sınır yoktur.
  sureSiniri: true,
  // Süre bitimine bu kadar saniye kala sayaç kırmızıya döner.
  sureUyari: 120,

  // Rapor altyapısı. BURAYI DOLDURMA — bu dosya herkese açık depoda tutuluyor ve Apps Script
  // adresi bir anahtardır. Adres, uygulamadaki "Panel bağlantısı" penceresinden girilir ve
  // yalnızca o tarayıcıya kaydedilir. Alan yalnızca geriye dönük uyumluluk için duruyor.
  raporUrl: ""
};
