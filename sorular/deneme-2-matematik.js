// Aylık Deneme 2 — Matematik (4 yeni soru): iki konuyu birleştiren ayırt edici sorular
window.LGS_DENEME = window.LGS_DENEME || {};
(window.LGS_DENEME["deneme-2"] = window.LGS_DENEME["deneme-2"] || []).push(
{
  id: "dn2-mat-01",
  ders: "matematik",
  konu: "karekoklu-ifadeler",
  kazanim: "M.8.1.3.3",
  zorluk: 3,
  soru: "Bir ahşap atölyesinde kare biçimli bir levha kesilecektir. Levhanın alanı, atölye defterine asal çarpanlarına ayrılmış biçimde yazılmıştır.\n**Levhanın bir kenar uzunluğu a√{b} cm biçiminde, b en küçük pozitif tam sayı olacak şekilde yazılırsa a + b toplamı kaç olur?**",
  gorsel: `<table class="tablo"><tr><th>Levha</th><th>Biçim</th><th>Alan (cm²)</th></tr><tr><td>1</td><td>Kare</td><td>2<sup>3</sup> · 3<sup>2</sup> · 5<sup>2</sup></td></tr></table>`,
  secenekler: ["23", "28", "32", "56"],
  dogru: 2,
  hatalar: [
    "Sadeleştirme yarım kaldı: kenar 15√{8} cm yazıldı, oysa 8 = 4 · 2 olduğundan kök içinde hâlâ tam kare çarpan var (a + b = 15 + 8).",
    "Sadeleştirme yarım kaldı: kenar 10√{18} cm yazıldı, oysa 18 = 9 · 2 olduğundan kök içinde hâlâ tam kare çarpan var (a + b = 10 + 18).",
    null,
    "Sadeleştirme yarım kaldı: kenar 6√{50} cm yazıldı, oysa 50 = 25 · 2 olduğundan kök içinde hâlâ tam kare çarpan var (a + b = 6 + 50)."
  ],
  aciklama: `Kare biçimli bir levhanın kenar uzunluğu, alanının karekökü alınarak bulunur. Bir ifade a√{b} biçiminde yazılırken kök içinden, tam kare olan çarpanlar kök dışına çıkarılır; b'de tam kare çarpan kalmamalıdır.
Adım 1: Alan = 2^{3} · 3^{2} · 5^{2} cm². Kenar = √{2^{3} · 3^{2} · 5^{2}}.
Adım 2: 2^{3} = 2^{2} · 2 olduğundan kök içi √{2^{2} · 2 · 3^{2} · 5^{2}} olur.
Adım 3: Üssü çift olan çarpanlar kök dışına çıkar: 2 · 3 · 5 · √{2} = 30√{2}.
Adım 4: a = 30, b = 2 olduğundan a + b = 32.
Sağlama: 30√{2} = √{900 · 2} = √{1 800} ve 2^{3} · 3^{2} · 5^{2} = 8 · 9 · 25 = 1 800.
Sık yapılan hata: Kök içindeki sayıyı tam sadeleştirmeden bırakmak.
Cevap C.`
},
{
  id: "dn2-mat-02",
  ders: "matematik",
  konu: "uslu-ifadeler",
  kazanim: "M.8.1.2.2",
  zorluk: 3,
  soru: "Bir video, yayımlandıktan sonra her saat başında kaç yeni kişiye ulaştığıyla izlenmektedir. İlk üç saatin sonuçları tabloda verilmiştir. Bu üç saatte ulaşılan toplam kişi sayısı bir tam kare sayıdır.\n**Bu sayının karekökü kaçtır?**",
  gorsel: `<table class="tablo"><tr><th>Saat</th><th>Yeni ulaşılan kişi sayısı</th></tr><tr><td>1. saat</td><td>2<sup>10</sup></td></tr><tr><td>2. saat</td><td>2<sup>10</sup></td></tr><tr><td>3. saat</td><td>2<sup>11</sup></td></tr></table>`,
  secenekler: ["64", "128", "1 024", "2 048"],
  dogru: 0,
  hatalar: [
    null,
    "Toplamın çarpanı yanlış yorumlandı: 2^{10} · (1 + 1 + 2) içindeki 4, 2^{4} sanılıp toplam 2^{14} bulundu; karekökü 2^{7} = 128 çıktı.",
    "Karekök hatası: toplam 2^{12} doğru bulundu, ancak karekök alırken üstten yalnızca 2 çıkarıldı (2^{10}).",
    "Karekök hatası: toplam 2^{12} = 4 096 doğru bulundu, ancak karekök almak yerine sayı ikiye bölündü."
  ],
  aciklama: `Aynı tabanlı iki terim toplanırken ortak çarpan parantezine alınır: 2^{n} + 2^{n} = 2 · 2^{n} = 2^{n+1}. Bir tam karenin karekökü bulunurken üs ikiye bölünür: √{2^{12}} = 2^{6}.
Adım 1: İlk iki saat: 2^{10} + 2^{10} = 2 · 2^{10} = 2^{11}.
Adım 2: Üç saatin toplamı: 2^{11} + 2^{11} = 2 · 2^{11} = 2^{12}.
Adım 3: Karekök: √{2^{12}} = 2^{6} = 64.
Sağlama: 64^{2} = 4 096 ve 1 024 + 1 024 + 2 048 = 4 096.
Sık yapılan hata: Karekök almayı "yarısını almak" ya da "üstten 2 çıkarmak" sanmak.
Cevap A.`
},
{
  id: "dn2-mat-03",
  ders: "matematik",
  konu: "carpanlar-katlar",
  kazanim: "M.8.1.1.1",
  zorluk: 4,
  soru: "Bir baskı atölyesi, oyun kartlarını yalnızca 1 350'lik tam paketler hâlinde üretmektedir; paketler bölünemez. Atölye sahibi, bir günde üretilen kartların tamamını artan kart kalmadan, n sıra ve her sırada n kart olacak biçimde (kare düzeninde) bir panoya dizmek istemektedir. Atölye bir günde en fazla 140 000 kart üretebilmektedir.\n**Buna göre n en fazla kaç olabilir?**",
  gorsel: `<table class="tablo"><tr><th>Bilgi</th><th>Değer</th></tr><tr><td>Bir paketteki kart sayısı</td><td>1 350</td></tr><tr><td>Günlük en fazla üretim</td><td>140 000 kart</td></tr><tr><td>Pano düzeni</td><td>n sıra × n kart</td></tr></table>`,
  secenekler: ["90", "180", "270", "360"],
  dogru: 3,
  hatalar: [
    "En küçük çözüm alındı: 8 100 kart (n = 90) koşulu sağlar, ancak soru en fazla n değerini istiyor; daha büyük çözümler günlük sınıra sığıyor.",
    "Erken durma hatası: n = 180 (32 400 kart) koşulu sağlar, ancak daha büyük n değerleri de hem paket hem sınır koşuluna uyuyor.",
    "Erken durma hatası: n = 270 (72 900 kart) koşulu sağlar, ancak n = 360 (129 600 kart) da günlük sınırın altında kalıyor.",
    null
  ],
  aciklama: `Kart sayısı 1 350'nin katı olmalı ve n × n tam kare olmalıdır. Bir sayının tam kare olması için asal çarpanlarının üsleri çift olmalıdır.
Adım 1: 1 350 = 2 · 3^{3} · 5^{2}. Üsleri tek olan çarpanlar 2 ve 3'tür (2^{1} ve 3^{3}).
Adım 2: 1 350'nin tam kare olan katlarında 2 ve 3'ün üsleri çift olmalı; bu yüzden katın içinde en az 2 · 3 = 6 çarpanı bulunur: 1 350 · 6 = 8 100 = 90^{2}.
Adım 3: Tam kare olan diğer katlar bu sayının tam kare katlarıdır: 8 100 · k^{2}. Karekökleri 90, 180, 270, 360, 450 … biçiminde 90'ın katları olur.
Adım 4: Kart sayısı n^{2} ≤ 140 000 olmalı. 360^{2} = 129 600 sınıra sığar; 450^{2} = 202 500 sığmaz.
Adım 5: En büyük değer n = 360.
Sağlama: 129 600 : 1 350 = 96 olduğundan kartlar tam 96 paketten oluşur.
Sık yapılan hata: İlk bulunan çözümde (90) durmak.
Cevap D.`
},
{
  id: "dn2-mat-04",
  ders: "matematik",
  konu: "karekoklu-ifadeler",
  kazanim: "M.8.1.3.5",
  zorluk: 4,
  soru: "Bir belediye, üç etaptan oluşan bir bisiklet parkuru hazırlamıştır. Etap uzunlukları şekilde verilmiştir. Parkuru gezecek elektrikli bir scooterin menzili yalnızca tam kilometre olarak ayarlanabilmektedir ve scooter parkur boyunca şarj edilmeyecektir.\n**Scooterin parkuru tamamlayabilmesi için menzil en az kaç kilometreye ayarlanmalıdır?**",
  gorsel: `<svg viewBox="-7 0 567 140" role="img" aria-label="Üç etaplı parkur"><line x1="30" y1="70" x2="530" y2="70" stroke="currentColor" stroke-width="3"/><circle cx="30" cy="70" r="7" fill="var(--vurgu)"/><circle cx="200" cy="70" r="6" fill="currentColor"/><circle cx="360" cy="70" r="6" fill="currentColor"/><circle cx="530" cy="70" r="7" fill="var(--vurgu2)"/><text x="115" y="50" text-anchor="middle" font-size="16" fill="currentColor">1. etap: √80 km</text><text x="280" y="50" text-anchor="middle" font-size="16" fill="currentColor">2. etap: √45 km</text><text x="445" y="50" text-anchor="middle" font-size="16" fill="currentColor">3. etap: √20 km</text><text x="30" y="108" text-anchor="middle" font-size="16" fill="currentColor">Başlangıç</text><text x="530" y="108" text-anchor="middle" font-size="16" fill="currentColor">Bitiş</text></svg>`,
  secenekler: ["20", "21", "27", "45"],
  dogru: 1,
  hatalar: [
    "Yuvarlama hatası: toplam √{405} olur ve 20^{2} = 400 olduğundan değer 20'nin biraz üstündedir; 20 km menzil yetmez.",
    null,
    "Yaklaşık değer hatası: √{5} yaklaşık 3 alınıp 9 · 3 = 27 bulundu; √{5} 2 ile 3 arasındadır ve 3'e değil 2'ye daha yakındır.",
    "Çarpma hatası: 9√{5} ifadesinde katsayı ile kök içi çarpıldı (9 · 5 = 45); oysa 9√{5}, kök içi 405 olan √{405} demektir."
  ],
  aciklama: `Kök içlerinde tam kare çarpan bulunan terimler önce a√{b} biçimine getirilir; kök içleri aynı olan terimler katsayıları toplanarak birleştirilir. Bir sayının hangi iki tam sayı arasında olduğu, tam kare komşularıyla karşılaştırılarak bulunur.
Adım 1: √{80} = √{16 · 5} = 4√{5}; √{45} = √{9 · 5} = 3√{5}; √{20} = √{4 · 5} = 2√{5}.
Adım 2: Toplam uzunluk 4√{5} + 3√{5} + 2√{5} = 9√{5} km.
Adım 3: Katsayıyı kök içine alalım: 9√{5} = √{81 · 5} = √{405}.
Adım 4: 20^{2} = 400 ve 21^{2} = 441 olduğundan 400 < 405 < 441; yani toplam 20 ile 21 arasındadır (20'den biraz fazladır).
Adım 5: Menzil tam kilometre olacağından ve 20 km yetmediğinden en az 21 km gerekir.
Sağlama: √{5} ≈ 2,24 için 9 · 2,24 ≈ 20,1 km.
Sık yapılan hata: 20,1'i aşağı yuvarlayıp 20 km'nin yeteceğini sanmak.
Cevap B.`
}
);
