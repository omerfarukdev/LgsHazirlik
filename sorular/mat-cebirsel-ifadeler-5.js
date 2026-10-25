// Matematik — Cebirsel İfadeler ve Özdeşlikler | 5. dosya
// Kademe 3 (LGS Ayarı) yedeği: mat-ci-326…375
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["cebirsel-ifadeler"] = window.LGS_BANK["cebirsel-ifadeler"] || []).push(
{
  id: "mat-ci-326",
  kazanim: "M.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir sinema salonunda yan yana üç koltuğun numaraları ardışık tek sayılardır. Bu üç koltuğun en küçüğünün numarası 2n − 1 biçiminde yazılmıştır (n pozitif tam sayı).
**n = 14 olduğuna göre bu üç koltuğun en büyüğünün numarası kaçtır?**`,
  gorsel: null,
  secenekler: ["29", "31", "33", "87"],
  dogru: 1,
  hatalar: ["Ortanca koltuğun numarasını (2n + 1) buldun; en büyük koltuk bir sonraki tek sayıdır.", null, "Bir tek sayı fazla gittin: en büyük koltuk 2n + 3'tür, 2n + 5 değil.", "Üç koltuğun numaralarını topladın; soru yalnızca en büyüğünü soruyor."],
  aciklama: `Ardışık tek sayılar birer atlayarak, yani ikişer ikişer artar.
Adım 1: En küçük 2n − 1 ise ortancası 2n + 1, en büyüğü 2n + 3 olur.
Adım 2: n = 14 için en büyük numara 2 · 14 + 3 = 31'dir.
Sağlama: n = 14 iken koltuklar 27, 29, 31'dir; ardışık tek sayılardır ve en büyüğü 31'dir.
Sık yapılan hata: Üç sayının toplamını (87) ya da ortancayı (29) cevap sanmak.
Cevap B.`
},
{
  id: "mat-ci-327",
  kazanim: "M.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kitap kulübünde 8 üyenin her biri aylık aidat olarak t TL ödemektedir. Kulüp kasasında ay başında 25 TL vardır ve bu ay 6 TL'lik bir pasta alınmıştır.
**Aidatlar toplandıktan ve pasta alındıktan sonra kasadaki parayı gösteren cebirsel ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["8t − 19", "8t + 31", "14t + 19", "8t + 19"],
  dogru: 3,
  hatalar: ["Önce 25 − 6 = 19 buldun, sonra bunu aidat toplamından çıkardın; oysa kasadaki 25 TL zaten paradır, eksilmez.", "Pastanın 6 TL'sini kasadaki paraya ekledin; pasta alınca para azalır.", "6 TL'yi üye sayısına ekleyip 14t yazdın; aidat t TL olan üye sayısı 8'dir ve 6 TL ayrı bir sabit terimdir.", null],
  aciklama: `Adım 1: 8 üyenin aidatı 8 · t = 8t TL eder.
Adım 2: Kasadaki 25 TL eklenir: 8t + 25.
Adım 3: Pasta alındığı için 6 TL çıkar: 8t + 25 − 6 = 8t + 19.
Sağlama: t = 10 olsaydı kasada 80 + 25 − 6 = 99 TL olurdu; 8 · 10 + 19 = 99.
Sık yapılan hata: Pastanın parasını kasaya eklemek.
Cevap D.`
},
{
  id: "mat-ci-328",
  kazanim: "M.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Kaan, 4a^{2}b − 6ab − b + 5 cebirsel ifadesindeki bütün terimlerin katsayılarını yazarak toplamak istiyor.
**Buna göre Kaan'ın bulması gereken toplam kaçtır?**`,
  gorsel: null,
  secenekler: ["2", "3", "14", "16"],
  dogru: 0,
  hatalar: [null, "−b teriminin katsayısını 0 saydın; harfin önünde sayı yoksa katsayı 1'dir, burada −1'dir.", "−6ab teriminin işaretini yok saydın; katsayı −6'dır, +6 değil.", "Katsayıların işaretlerini göz ardı edip 4 + 6 + 1 + 5 topladın."],
  aciklama: `Katsayı, terimdeki sayı çarpanıdır; sabit terim de bir katsayıdır.
Adım 1: Terimler 4a^{2}b, −6ab, −b ve 5'tir.
Adım 2: Katsayılar sırasıyla 4, −6, −1 ve 5'tir (−b = −1 · b).
Adım 3: Toplam 4 − 6 − 1 + 5 = 2 olur.
Sağlama: Katsayılar toplamı, bütün harflere 1 verilince bulunan değerdir: 4 − 6 − 1 + 5 = 2.
Sık yapılan hata: Yalnızca sayı yazılı olan terimlerin katsayısını almak.
Cevap A.`
},
{
  id: "mat-ci-329",
  kazanim: "M.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Ece, 5x^{2}y − 2xy^{2} + 3x^{2}y + xy^{2} − 4 ifadesini sadeleştirmek için benzer terimleri birleştirecektir.
**Buna göre ifadenin en sade biçimi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["8x^{2}y − 3xy^{2} − 4", "8x^{2}y + xy^{2} − 4", "8x^{2}y − xy^{2} − 4", "8x^{3}y − xy^{2} − 4"],
  dogru: 2,
  hatalar: ["−2xy^{2} ile xy^{2} terimlerini toplarken −2 − 1 işlemini yaptın; xy^{2} terimi +1 katsayılıdır.", "−2 + 1 işleminde işareti yanlış belirledin; sonuç −1'dir, +1 değil.", null, "Benzer terimleri toplarken üsleri de topladın; yalnızca katsayılar toplanır, değişken kısmı aynı kalır."],
  aciklama: `Benzer terimler, harfleri ve üsleri aynı olan terimlerdir; yalnızca onların katsayıları toplanır.
Adım 1: x^{2}y içerenler: 5x^{2}y + 3x^{2}y = 8x^{2}y.
Adım 2: xy^{2} içerenler: −2xy^{2} + xy^{2} = −1xy^{2} = −xy^{2}.
Adım 3: Sabit terim −4 olduğu gibi kalır: 8x^{2}y − xy^{2} − 4.
Sağlama: x = 1, y = 1 için ilk ifade 5 − 2 + 3 + 1 − 4 = 3; son ifade 8 − 1 − 4 = 3.
Sık yapılan hata: x^{2}y ile xy^{2} terimlerini benzer sanıp birleştirmek.
Cevap C.`
},
{
  id: "mat-ci-330",
  kazanim: "M.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir mühendis, bir makinenin hata payını 3a^{2} − 2ab + 5b − 4 ifadesiyle modelliyor.
**a = −2 ve b = 2 için hata payının değeri kaçtır?**`,
  gorsel: null,
  secenekler: ["2", "10", "26", "30"],
  dogru: 2,
  hatalar: ["(−2)^{2} işlemini −4 hesapladın; negatif sayının karesi pozitiftir, +4'tür.", "−2ab teriminde işareti yanlış hesapladın: −2 · (−2) · 2 = +8'dir, −8 değil.", null, "Sabit terimi (−4) hesaba katmadın."],
  aciklama: `Adım 1: Harflerin yerine sayıları yaz: 3 · (−2)^{2} − 2 · (−2) · 2 + 5 · 2 − 4.
Adım 2: Önce üs: (−2)^{2} = 4. Terimler: 3 · 4 = 12; −2 · (−2) · 2 = +8; 5 · 2 = 10.
Adım 3: 12 + 8 + 10 − 4 = 26.
Sağlama: 12 + 8 = 20; 20 + 10 = 30; 30 − 4 = 26.
Sık yapılan hata: Negatif sayının karesini negatif bulmak.
Cevap C.`
},
{
  id: "mat-ci-331",
  kazanim: "M.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir otopark, ilk saat için 10 TL, sonraki her saat için s TL almaktadır. Bir otomobil bu otoparkta 3 saat, bir minibüs 5 saat kalmıştır.
**Bu iki aracın ödediği toplam ücreti gösteren cebirsel ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["6s + 20", "6s + 10", "8s + 10", "8s + 20"],
  dogru: 0,
  hatalar: [null, "İlk saat ücretini (10 TL) yalnızca bir kez saydın; iki araç da ilk saat için ayrı ayrı 10 TL öder.", "Bütün saatleri s TL'lik sayıp 3 + 5 = 8s yazdın; ilk saat 10 TL'dir ve ücret yalnızca bir kez eklendi.", "Bütün saatleri s TL'lik sayıp 8s yazdın; ilk saatler s TL değil, 10 TL'dir."],
  aciklama: `Adım 1: Otomobil: ilk saat 10 TL, kalan 2 saat 2s TL. Toplam 10 + 2s.
Adım 2: Minibüs: ilk saat 10 TL, kalan 4 saat 4s TL. Toplam 10 + 4s.
Adım 3: İki aracın toplamı: 10 + 2s + 10 + 4s = 6s + 20.
Sağlama: s = 5 olsaydı otomobil 20, minibüs 30, toplam 50 TL; 6 · 5 + 20 = 50.
Sık yapılan hata: İlk saati de s TL'lik saymak ya da ilk saat ücretini tek araç için eklemek.
Cevap A.`
},
{
  id: "mat-ci-332",
  kazanim: "M.8.2.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Şekildeki L biçimli bahçenin ölçüleri metre cinsinden verilmiştir. Bahçenin çevresine tel çekilecektir.
**Buna göre bahçenin çevresini metre cinsinden gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 390 235" role="img" aria-label="Sağ üst köşesi dikdörtgen biçiminde kesilmiş L biçimli bahçe"><path d="M80 30 H248 V115 H320 V200 H80 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M248 30 H320 V115" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="200" y="224" font-size="15" text-anchor="middle" fill="currentColor">3x + 5</text><text x="72" y="120" font-size="15" text-anchor="end" fill="currentColor">2x + 4</text><text x="284" y="22" font-size="15" text-anchor="middle" fill="currentColor">x + 1</text><text x="328" y="76" font-size="15" text-anchor="start" fill="currentColor">x + 2</text></svg>`,
  secenekler: ["5x^{2} + 19x + 18", "6x + 12", "14x + 24", "10x + 18"],
  dogru: 3,
  hatalar: ["Çevre yerine alanı hesapladın: (3x + 5)(2x + 4) − (x + 1)(x + 2).", "Kesik köşenin kenarlarını dış dikdörtgenin çevresinden çıkardın; içeri giren kenarlar çevreyi değiştirmez.", "Kesik köşenin kenarlarını dış dikdörtgenin çevresine ayrıca ekledin; bu kenarlar zaten çevrenin içindedir.", null],
  aciklama: `Adım 1: L biçiminin yatay kenarlarının toplamı, kesik köşe olmayan dikdörtgenin yatay kenarları toplamına eşittir: üstte (3x + 5) − (x + 1) + (x + 1) = 3x + 5; altta 3x + 5.
Adım 2: Aynı şekilde dikey kenarlar toplamı 2 · (2x + 4) olur.
Adım 3: Çevre = 2 · (3x + 5) + 2 · (2x + 4) = 6x + 10 + 4x + 8 = 10x + 18.
Sağlama: x = 1 için dış dikdörtgen 8 × 6, kesik köşe 2 × 3; kenarlar 6 + 3 + 2 + 3 + 8 + 6 = 28 ve 10 · 1 + 18 = 28.
Sık yapılan hata: Çevre isterken alan ifadesini yazmak.
Cevap D.`
},
{
  id: "mat-ci-333",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir terzi, dikdörtgen biçimli bir kumaş parçasını kenar uzunlukları (a + 2b) dm ve (3a − b) dm olacak biçimde kesmiştir.
**Buna göre kumaş parçasının alanını dm^{2} cinsinden gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["3a^{2} − 2b^{2}", "3a^{2} + 5ab − 2b^{2}", "3a^{2} + 5ab + 2b^{2}", "3a^{2} + 7ab − 2b^{2}"],
  dogru: 1,
  hatalar: ["Yalnızca ilk terimleri ve son terimleri çarptın; iki terimli ile iki terimlinin çarpımında dört çarpım yapılır.", null, "2b · (−b) çarpımını +2b^{2} yazdın; sonuç −2b^{2}'dir.", "a · (−b) = −ab iken +ab yazdın; orta terim 6ab − ab = 5ab olmalıydı."],
  aciklama: `Adım 1: Alan = (a + 2b)(3a − b). Birinci paranteze ait her terimi ikinci parantezdeki her terimle çarp.
Adım 2: a · 3a = 3a^{2}; a · (−b) = −ab; 2b · 3a = 6ab; 2b · (−b) = −2b^{2}.
Adım 3: Benzer terimleri birleştir: −ab + 6ab = 5ab. Alan 3a^{2} + 5ab − 2b^{2}.
Sağlama: a = 2, b = 1 için (2 + 2)(6 − 1) = 20; 12 + 10 − 2 = 20.
Sık yapılan hata: Eksi işaretli terimin çarpımında işareti kaçırmak.
Cevap B.`
},
{
  id: "mat-ci-334",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Dikdörtgen biçimli bir sahnenin kenar uzunlukları (2x + 1) metre ve (x − 3) metredir. Sahnenin 4 m^{2}'lik bir köşesi dekor deposu olarak ayrılacaktır.
**Buna göre sahnenin depo dışında kalan alanını gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["2x^{2} − 5x − 7", "2x^{2} − 5x − 3", "2x^{2} − 5x − 1", "2x^{2} − 6x − 7"],
  dogru: 0,
  hatalar: [null, "Depo alanını (4 m^{2}) çıkarmayı unuttun; bu yalnızca sahnenin tamamının alanıdır.", "(+1) · (−3) çarpımını +3 yazdın; sonuç −3'tür.", "x'li terimleri birleştirirken 1 · x = +x terimini hesaba katmadın: −6x + x = −5x."],
  aciklama: `Adım 1: Sahnenin alanı (2x + 1)(x − 3) = 2x^{2} − 6x + x − 3 = 2x^{2} − 5x − 3.
Adım 2: Depo ayrılınca kalan alan, toplam alandan 4 çıkarılarak bulunur: 2x^{2} − 5x − 3 − 4 = 2x^{2} − 5x − 7.
Sağlama: x = 4 için sahne 9 · 1 = 9 m^{2}; depo çıkınca 5 m^{2}. İfade: 32 − 20 − 7 = 5.
Sık yapılan hata: Ayrılan bölümü çıkarmayı unutmak.
Cevap A.`
},
{
  id: "mat-ci-335",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Ela'nın yaşı e'dir. Kardeşi Ela'dan 6 yaş küçüktür.
**4 yıl sonra Ela ile kardeşinin yaşlarının çarpımını gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["e^{2} − 8", "e^{2} + 6e − 8", "e^{2} + 2e + 8", "e^{2} + 2e − 8"],
  dogru: 3,
  hatalar: ["Yalnızca ilk terimleri ve son terimleri çarptın; orta terimler (−2e ve 4e) unutuldu.", "Orta terimi 4e + 2e = 6e aldın; kardeşin 4 yıl sonraki yaşı e − 2'dir, orta terimler 4e − 2e = 2e verir.", "4 · (−2) çarpımını +8 yazdın; sonuç −8'dir.", null],
  aciklama: `Adım 1: 4 yıl sonra Ela'nın yaşı e + 4 olur.
Adım 2: Kardeşin şimdiki yaşı e − 6; 4 yıl sonra e − 6 + 4 = e − 2.
Adım 3: Çarpım (e + 4)(e − 2) = e^{2} − 2e + 4e − 8 = e^{2} + 2e − 8.
Sağlama: e = 10 için Ela 14, kardeşi 8 yaşında olur; çarpım 112. İfade: 100 + 20 − 8 = 112.
Sık yapılan hata: Kardeşin yaşına 4 eklemeyi unutmak.
Cevap D.`
},
{
  id: "mat-ci-336",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Berk, (2x − 3)(x + 5) çarpımını alan modeliyle yapmak için aşağıdaki tabloyu doldurmuştur. Tablodaki hücrelerden yalnızca biri yanlış doldurulmuştur.
**Yanlış doldurulan hücrede yazılı olan terim aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>×</th><th>x</th><th>5</th></tr><tr><th>2x</th><td>2x<sup>2</sup></td><td>10x</td></tr><tr><th>−3</th><td>3x</td><td>−15</td></tr></table>`,
  secenekler: ["2x^{2}", "10x", "3x", "−15"],
  dogru: 2,
  hatalar: ["2x · x = 2x^{2} olduğundan bu hücre doğrudur.", "2x · 5 = 10x olduğundan bu hücre doğrudur.", null, "(−3) · 5 = −15 olduğundan bu hücre doğrudur."],
  aciklama: `Alan modelinde her hücre, satır başlığı ile sütun başlığının çarpımıdır.
Adım 1: 2x · x = 2x^{2} doğru; 2x · 5 = 10x doğru; (−3) · 5 = −15 doğru.
Adım 2: (−3) · x = −3x olmalıydı, tabloda 3x yazılmış. Yanlış hücre budur.
Adım 3: Doğru çarpım 2x^{2} + 10x − 3x − 15 = 2x^{2} + 7x − 15 olur.
Sağlama: x = 1 için (2 − 3)(1 + 5) = −6 ve 2 + 7 − 15 = −6.
Sık yapılan hata: Eksi işaretli satırın işaretini sütundaki terime taşımamak.
Cevap C.`
},
{
  id: "mat-ci-337",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Çiftçi Hakan'ın A tarlası kenar uzunlukları x metre ve (x − 3) metre olan, B tarlası ise kenar uzunlukları (x − 6) metre ve (x + 2) metre olan dikdörtgen biçimindedir.
**A tarlasının alanı B tarlasının alanından kaç metrekare fazladır?**`,
  gorsel: null,
  secenekler: ["−7x − 12", "x + 12", "x − 12", "−7x + 12"],
  dogru: 1,
  hatalar: ["Çıkarırken eksiyi B'nin yalnızca ilk terimine uyguladın: x^{2} − 3x − x^{2} − 4x − 12.", null, "−12'yi çıkarırken işaretini değiştirmedin; −(−12) = +12'dir.", "(x − 6)(x + 2) çarpımında orta terimi +4x buldun; doğrusu −4x'tir."],
  aciklama: `Adım 1: A tarlasının alanı x(x − 3) = x^{2} − 3x.
Adım 2: B tarlasının alanı (x − 6)(x + 2) = x^{2} + 2x − 6x − 12 = x^{2} − 4x − 12.
Adım 3: Fark = (x^{2} − 3x) − (x^{2} − 4x − 12) = x^{2} − 3x − x^{2} + 4x + 12 = x + 12. (Eksi, parantezdeki her terime dağıtılır.)
Sağlama: x = 10 için A = 10 · 7 = 70, B = 4 · 12 = 48; fark 22 ve 10 + 12 = 22.
Sık yapılan hata: Eksi işaretini parantezin yalnızca ilk terimine dağıtmak.
Cevap B.`
},
{
  id: "mat-ci-338",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir terzi, tanesi (3x − 4) TL olan 2x adet düğme satın almış, daha sonra tanesi (x − 2) TL olan 5 düğmeyi iade ederek bu düğmelerin parasını geri almıştır.
**Terzinin net harcamasını TL cinsinden gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["6x^{2} − 13x − 10", "6x^{2} − 13x + 10", "6x^{2} − 3x + 10", "6x^{2} − 3x − 10"],
  dogru: 1,
  hatalar: ["Eksiyi (x − 2) parantezinin yalnızca ilk terimine uyguladın: −5(x − 2) = −5x + 10 olmalıydı.", null, "−8x − 5x işleminde −5x terimini +5x aldın.", "Hem −5x terimini hem de sabit terimi yanlış işaretle yazdın."],
  aciklama: `Adım 1: Alınan düğmelerin tutarı 2x(3x − 4) = 6x^{2} − 8x.
Adım 2: İade edilen düğmelerin tutarı 5(x − 2) = 5x − 10; bu tutar harcamadan düşer.
Adım 3: Net harcama = 6x^{2} − 8x − (5x − 10) = 6x^{2} − 8x − 5x + 10 = 6x^{2} − 13x + 10.
Sağlama: x = 2 için 4 düğme 2 TL'den 8 TL eder, iade 0 TL; net 8. İfade: 24 − 26 + 10 = 8.
Sık yapılan hata: Eksiyi parantezdeki sabit terime dağıtmamak.
Cevap B.`
},
{
  id: "mat-ci-339",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Dikdörtgen biçimli bir panonun boyutları (2x + y) dm ve (x − 3y) dm'dir. Panodan boyutları 2x dm ve (x − 4y) dm olan dikdörtgen biçimli bir parça kesilip çıkarılıyor.
**Buna göre panonun kalan kısmının alanını dm^{2} cinsinden gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["−13xy − 3y^{2}", "2xy − 3y^{2}", "3xy + 3y^{2}", "3xy − 3y^{2}"],
  dogru: 3,
  hatalar: ["Çıkarılan parçanın alanını (2x^{2} − 8xy) çıkarırken eksiyi yalnızca ilk terime uyguladın.", "Pano alanında 2x · (−3y) + y · x işleminde xy'li terimlerden birini unuttun: −6xy + xy = −5xy olmalıydı.", "−3y^{2} terimini +3y^{2} yazdın; y · (−3y) = −3y^{2}'dir.", null],
  aciklama: `Adım 1: Pano alanı (2x + y)(x − 3y) = 2x^{2} − 6xy + xy − 3y^{2} = 2x^{2} − 5xy − 3y^{2}.
Adım 2: Çıkarılan parça 2x(x − 4y) = 2x^{2} − 8xy.
Adım 3: Kalan = (2x^{2} − 5xy − 3y^{2}) − (2x^{2} − 8xy) = −5xy + 8xy − 3y^{2} = 3xy − 3y^{2}.
Sağlama: x = 5, y = 1 için pano 11 · 2 = 22, parça 10 · 1 = 10; kalan 12 ve 15 − 3 = 12.
Sık yapılan hata: Çıkarılan ifadenin her terimini çıkarmamak.
Cevap D.`
},
{
  id: "mat-ci-340",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Şekildeki dikdörtgen biçimli arsanın kenar uzunlukları metre cinsinden verilmiştir. Arsanın içinde kenarı x metre olan kare biçimli bir kulübe (koyu bölge) bulunmaktadır.
**Buna göre arsanın kulübe dışında kalan alanını gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 390 150" role="img" aria-label="Dikdörtgen arsanın içinde kare biçimli kulübe"><rect x="70" y="30" width="240" height="100" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="130" y="58" width="56" height="56" fill="var(--vurgu)" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/><text x="190" y="22" font-size="15" text-anchor="middle" fill="currentColor">4x + 1</text><text x="320" y="86" font-size="15" text-anchor="start" fill="currentColor">x + 3</text><text x="158" y="92" font-size="15" text-anchor="middle" fill="currentColor">x</text></svg>`,
  secenekler: ["3x^{2} + 13x + 3", "4x^{2} + 13x + 3", "3x^{2} + 12x + 3", "5x^{2} + 13x + 3"],
  dogru: 0,
  hatalar: [null, "Kulübenin alanını (x^{2}) çıkarmayı unuttun; bu arsanın tamamının alanıdır.", "(4x + 1)(x + 3) çarpımında 1 · x = x terimini unuttun: 12x + x = 13x olmalıydı.", "Kulübenin alanını arsanın alanından çıkarmak yerine ekledin."],
  aciklama: `Adım 1: Arsanın alanı (4x + 1)(x + 3) = 4x^{2} + 12x + x + 3 = 4x^{2} + 13x + 3.
Adım 2: Kulübenin alanı x · x = x^{2}.
Adım 3: Kulübe dışında kalan alan = 4x^{2} + 13x + 3 − x^{2} = 3x^{2} + 13x + 3.
Sağlama: x = 1 için arsa 5 · 4 = 20, kulübe 1; kalan 19. İfade: 3 + 13 + 3 = 19.
Sık yapılan hata: Kare parçanın alanını çıkarmamak.
Cevap A.`
},
{
  id: "mat-ci-341",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Kenar uzunluğu (3x − 2) desimetre olan kare biçimli bir tabelanın alanı açıldığında ax^{2} + bx + c biçiminde yazılmıştır.
**Buna göre b + c toplamı kaçtır?**`,
  gorsel: null,
  secenekler: ["−16", "−12", "−8", "4"],
  dogru: 2,
  hatalar: ["(−2)^{2} işlemini −4 hesapladın; son terim +4'tür.", "Sabit terimi (c = 4) toplama katmadın.", null, "Orta terimi (b = −12) toplama katmadın."],
  aciklama: `Fark karesi özdeşliği: (p − q)^{2} = p^{2} − 2pq + q^{2}.
Adım 1: p = 3x, q = 2 için (3x − 2)^{2} = 9x^{2} − 2 · 3x · 2 + 4 = 9x^{2} − 12x + 4.
Adım 2: b = −12 ve c = 4 olur.
Adım 3: b + c = −12 + 4 = −8.
Sağlama: x = 1 için (3 − 2)^{2} = 1 ve 9 − 12 + 4 = 1.
Sık yapılan hata: Son terimin işaretini eksi yazmak; kare her zaman pozitiftir.
Cevap C.`
},
{
  id: "mat-ci-342",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `İki kare biçimli fotoğrafın kenar uzunlukları (x + 3) cm ve (x − 1) cm'dir (x > 1). Bu iki fotoğrafın alanları toplamı, kenarı x cm olan iki karenin alanları toplamıyla karşılaştırılıyor.
**Buna göre ilk toplam ikincisinden aşağıdakilerden hangisi kadar fazladır?**`,
  gorsel: null,
  secenekler: ["10", "4x + 8", "8x + 10", "4x + 10"],
  dogru: 3,
  hatalar: ["Açılımlarda orta terimleri yazmadın: (x + 3)^{2} = x^{2} + 9 ve (x − 1)^{2} = x^{2} + 1 aldın; (a ± b)^{2} ≠ a^{2} ± b^{2}.", "(x − 1)^{2} açılımında son terimi −1 aldın; (−1)^{2} = +1'dir.", "(x − 1)^{2} açılımında orta terimi +2x aldın; orta terim −2x'tir.", null],
  aciklama: `Adım 1: (x + 3)^{2} = x^{2} + 6x + 9 ve (x − 1)^{2} = x^{2} − 2x + 1.
Adım 2: Toplam = 2x^{2} + 4x + 10 (6x − 2x = 4x, 9 + 1 = 10).
Adım 3: Kenarı x olan iki karenin alanları toplamı x^{2} + x^{2} = 2x^{2}'dir.
Adım 4: Fark = 2x^{2} + 4x + 10 − 2x^{2} = 4x + 10.
Sağlama: x = 2 için 25 + 1 = 26 ve 4 + 4 = 8; fark 18, 4 · 2 + 10 = 18.
Sık yapılan hata: Kare açılımında orta terimi (2ab) unutmak ya da (x − 1)^{2} içindeki işaretleri yanlış yazmak.
Cevap D.`
},
{
  id: "mat-ci-343",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir arazide A bölgesi kenar uzunluğu (2k − 5) metre olan bir kare, B bölgesi ise kenar uzunlukları 4k metre ve (k − 5) metre olan bir dikdörtgendir (k > 5).
**A bölgesinin alanı B bölgesinin alanından kaç metrekare fazladır?**`,
  gorsel: null,
  secenekler: ["25", "10k + 25", "−25", "8k^{2} − 40k + 25"],
  dogru: 0,
  hatalar: [null, "(2k − 5)^{2} açılımında orta terimi −10k aldın; 2 · 2k · 5 = 20k olmalıydı.", "Alanları ters sırada çıkardın: B'nin alanı A'dan çıkarıldı.", "Alanları çıkarmak yerine topladın."],
  aciklama: `Adım 1: A'nın alanı (2k − 5)^{2} = 4k^{2} − 20k + 25 (orta terim 2 · 2k · 5 = 20k).
Adım 2: B'nin alanı 4k(k − 5) = 4k^{2} − 20k.
Adım 3: Fark = (4k^{2} − 20k + 25) − (4k^{2} − 20k) = 25.
Sağlama: k = 6 için A = 7^{2} = 49, B = 24 · 1 = 24; fark 25.
Sık yapılan hata: Fark karesinin orta terimini 2ab yerine ab ya da yanlış katsayı yazmak.
Cevap A.`
},
{
  id: "mat-ci-344",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Şekilde kenar uzunluğu (2x + 3) birim olan bir kare, iki kare ve iki dikdörtgene ayrılmıştır. Koyu boyalı bölgeler iki dikdörtgendir.
**Buna göre boyalı bölgelerin alanları toplamı aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 260 225" role="img" aria-label="Kenarı 2x + 3 olan kare; iki kare ve iki dikdörtgene ayrılmış"><rect x="60" y="40" width="110" height="110" fill="none" stroke="currentColor" stroke-width="2"/><rect x="170" y="40" width="60" height="110" fill="var(--vurgu)" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/><rect x="60" y="150" width="110" height="60" fill="var(--vurgu)" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/><rect x="170" y="150" width="60" height="60" fill="none" stroke="currentColor" stroke-width="2"/><text x="115" y="30" font-size="15" text-anchor="middle" fill="currentColor">2x</text><text x="200" y="30" font-size="15" text-anchor="middle" fill="currentColor">3</text><text x="52" y="100" font-size="15" text-anchor="end" fill="currentColor">2x</text><text x="52" y="185" font-size="15" text-anchor="end" fill="currentColor">3</text></svg>`,
  secenekler: ["6x", "12x", "4x^{2} + 9", "4x^{2} + 12x + 9"],
  dogru: 1,
  hatalar: ["Dikdörtgenlerden yalnızca birinin alanını (2x · 3 = 6x) aldın; boyalı iki dikdörtgen vardır.", null, "Boyasız iki karenin alanları toplamını (4x^{2} + 9) buldun.", "Kare bölgenin tamamının alanını yazdın."],
  aciklama: `Büyük karenin alanı, dört parçanın alanları toplamıdır: (2x + 3)^{2} = 4x^{2} + 6x + 6x + 9.
Adım 1: Boyasız kareler 2x · 2x = 4x^{2} ve 3 · 3 = 9.
Adım 2: Boyalı dikdörtgenlerin her biri 2x · 3 = 6x alanlıdır.
Adım 3: İki dikdörtgenin toplamı 6x + 6x = 12x.
Sağlama: x = 1 için kare 5 × 5 = 25; kareler 4 + 9 = 13, dikdörtgenler 12; 13 + 12 = 25.
Sık yapılan hata: Orta terim 2ab'yi iki ayrı dikdörtgenden biri sanıp 6x ile bırakmak.
Cevap B.`
},
{
  id: "mat-ci-345",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Dikdörtgen biçimli bir kartonun kenar uzunlukları (5y − 2) cm ve (5y + 2) cm'dir. Bu kartonun alanına 4 cm^{2} eklenirse elde edilen alan bir karenin alanı olur.
**Buna göre bu karenin bir kenarının uzunluğu aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["5y − 2", "5y + 2", "5y", "25y"],
  dogru: 2,
  hatalar: ["Dikdörtgenin kısa kenarını karenin kenarı sandın.", "Dikdörtgenin uzun kenarını karenin kenarı sandın.", null, "Alan 25y^{2} bulundu ama karekökünü almadın; kenar √{25y^{2}} = 5y'dir."],
  aciklama: `Adım 1: İki kare farkı: (5y − 2)(5y + 2) = (5y)^{2} − 2^{2} = 25y^{2} − 4.
Adım 2: 4 cm^{2} eklenince alan 25y^{2} − 4 + 4 = 25y^{2} olur.
Adım 3: Kare alanı kenarın karesidir: 25y^{2} = (5y)^{2}, yani kenar 5y.
Sağlama: y = 2 için kenarlar 8 ve 12, alan 96; 96 + 4 = 100 = 10^{2} ve 5 · 2 = 10.
Sık yapılan hata: Alanı bulup kenara dönmeyi unutmak.
Cevap C.`
},
{
  id: "mat-ci-346",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kare biçimli pano, kenarı (3x + k) birim olacak biçimde çiziliyor (k pozitif tam sayı). Panonun alanı 9x^{2} + 24x + m olarak bulunmuştur.
**Buna göre k + m toplamı kaçtır?**`,
  gorsel: null,
  secenekler: ["8", "12", "20", "72"],
  dogru: 2,
  hatalar: ["Son terimi m = k aldın; son terim k'nin karesidir.", "Son terimi m = 2k aldın; son terim k'nin karesidir.", null, "Orta terimi 3k = 24 yazıp k = 8 buldun; orta terim 2 · 3x · k = 6k · x'tir."],
  aciklama: `Artı karesi özdeşliği: (p + q)^{2} = p^{2} + 2pq + q^{2}.
Adım 1: (3x + k)^{2} = 9x^{2} + 6k · x + k^{2}.
Adım 2: Orta terim 6k = 24 olduğundan k = 4.
Adım 3: m = k^{2} = 16. Toplam k + m = 4 + 16 = 20.
Sağlama: (3x + 4)^{2} = 9x^{2} + 24x + 16 olur.
Sık yapılan hata: Orta terimi 2ab yerine ab sanmak.
Cevap C.`
},
{
  id: "mat-ci-347",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Kenar uzunlukları x dm ve y dm olan iki kare biçimli seramiğin kenar uzunluklarının toplamı 7 dm, alanlarının toplamı 29 dm^{2}'dir.
**Buna göre x · y çarpımı kaçtır?**`,
  gorsel: null,
  secenekler: ["10", "20", "39", "78"],
  dogru: 0,
  hatalar: [null, "(x + y)^{2} − (x^{2} + y^{2}) = 2xy farkını bulup 2'ye bölmeyi unuttun.", "49 ile 29'u toplayıp 2'ye böldün; alanlar farkı alınmalıydı.", "49 ile 29'u topladın."],
  aciklama: `Adım 1: (x + y)^{2} = x^{2} + 2xy + y^{2}. Toplam 7 olduğundan sol taraf 49'dur.
Adım 2: x^{2} + y^{2} = 29 olduğundan 49 = 29 + 2xy.
Adım 3: 2xy = 20, xy = 10.
Sağlama: Kenarlar 2 ve 5 olur: 2 + 5 = 7, 4 + 25 = 29, 2 · 5 = 10.
Sık yapılan hata: 2xy'yi bulup 2'ye bölmeyi unutmak.
Cevap A.`
},
{
  id: "mat-ci-348",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Kenar uzunlukları (a + 2b) metre ve (a − 2b) metre olan iki kare biçimli bahçe vardır (a > 2b). a · b = 8 olduğuna göre
**büyük olan bahçenin alanı, küçük olan bahçenin alanından kaç metrekare fazladır?**`,
  gorsel: null,
  secenekler: ["8", "16", "32", "64"],
  dogru: 3,
  hatalar: ["Farkı ab sandın; alanlar farkında a^{2} ve 4b^{2} terimleri götürülür ama orta terimler 8ab verir.", "Orta terimi 2ab alıp farkı 4ab buldun; 2 · a · 2b = 4ab'dir ve iki açılımın farkı 8ab eder.", "Yalnızca bir açılımın orta terimini (4ab) hesaba kattın; diğer açılımda −4ab vardır ve fark 8ab'dir.", null],
  aciklama: `Adım 1: (a + 2b)^{2} = a^{2} + 4ab + 4b^{2}; (a − 2b)^{2} = a^{2} − 4ab + 4b^{2}.
Adım 2: Fark = (a^{2} + 4ab + 4b^{2}) − (a^{2} − 4ab + 4b^{2}) = 8ab.
Adım 3: ab = 8 olduğundan fark 8 · 8 = 64.
Sağlama: a = 8, b = 1 için 10^{2} − 6^{2} = 100 − 36 = 64.
Sık yapılan hata: Orta terimi 2ab alıp 2 katsayısını (2b) hesaba katmamak.
Cevap D.`
},
{
  id: "mat-ci-349",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 3,
  soru: `**Aşağıdaki ifadelerden hangisinin çarpanlarından biri (2x − 7)'dir?**`,
  gorsel: null,
  secenekler: ["4x^{2} + 49", "4x^{2} − 49", "4x^{2} − 14x + 49", "2x^{2} − 49"],
  dogru: 1,
  hatalar: ["İki karenin toplamı çarpanlarına ayrılmaz; eksi işareti olmadan kare farkı oluşmaz.", null, "Tam kare olması için orta terim 2 · 2x · 7 = 28x olmalıydı; 14x ile tam kare değildir ve (2x − 7) çarpanı çıkmaz.", "2x^{2} bir ifadenin karesi değildir; kare farkı kurulamaz."],
  aciklama: `İki kare farkı: p^{2} − q^{2} = (p − q)(p + q).
Adım 1: 4x^{2} − 49 = (2x)^{2} − 7^{2} = (2x − 7)(2x + 7). Çarpanlardan biri (2x − 7)'dir.
Adım 2: Diğerleri için sağlama: (2x − 7) çarpan olsaydı x = 3,5 iken ifade 0 olurdu. 4x^{2} + 49 → 98; 4x^{2} − 14x + 49 → 49; 2x^{2} − 49 → −24,5; hiçbiri 0 değil.
Sık yapılan hata: Üç terimli ifadeyi tam kare sanmak; ortadaki terim 2pq'ya eşit olmalı.
Cevap B.`
},
{
  id: "mat-ci-350",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 3,
  soru: `**8m^{2}n − 12mn^{2} ifadesi, parantezin içinde ortak çarpan kalmayacak biçimde ortak çarpan parantezine alınırsa aşağıdakilerden hangisi elde edilir?**`,
  gorsel: null,
  secenekler: ["2mn(4m − 6n)", "4m(2mn − 3n^{2})", "4mn(2m + 3n)", "4mn(2m − 3n)"],
  dogru: 3,
  hatalar: ["Ortak çarpanı eksik aldın: parantez içinde 4m ve 6n hâlâ 2'ye bölünebilir.", "Ortak çarpanı eksik aldın: parantez içindeki iki terim de n'ye bölünebilir.", "Parantez içinde ikinci terimin işaretini artı yazdın; açılımda +12mn^{2} elde edilir.", null],
  aciklama: `Adım 1: 8 ile 12'nin en büyük ortak böleni 4'tür.
Adım 2: İki terimde de m ve n harfleri var; en küçük üsleriyle mn dışarı alınır. Ortak çarpan 4mn.
Adım 3: 8m^{2}n ÷ 4mn = 2m; 12mn^{2} ÷ 4mn = 3n. Sonuç 4mn(2m − 3n).
Sağlama: Dağıt: 4mn · 2m − 4mn · 3n = 8m^{2}n − 12mn^{2}.
Sık yapılan hata: Ortak çarpanı eksik almak; parantez içinde ortak çarpan kalmamalı.
Cevap D.`
}
,
{
  id: "mat-ci-351",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 3,
  soru: `Bir atölyede kesilen levhanın alanı 2x^{2} − 50 cm^{2} olarak hesaplanmıştır.
**Bu ifadenin tamamen çarpanlarına ayrılmış biçimi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["2(x − 5)(x + 5)", "2(x − 25)(x + 25)", "2(x − 5)^{2}", "(2x − 10)(2x + 10)"],
  dogru: 0,
  hatalar: [null, "Ortak çarpan 2 alınınca parantez içi x^{2} − 25 kalır; 25'in kare kökünü almadan çarpanlara yazdın (bu çarpım x^{2} − 625 eder).", "Kare farkını tam kare gibi yazdın; (x − 5)^{2} açılınca ortada −10x belirir.", "Ortak çarpanı iki parantezin ikisine de dağıttın; bu çarpım 4x^{2} − 100 eder."],
  aciklama: `Önce ortak çarpan, sonra iki kare farkı: p^{2} − q^{2} = (p − q)(p + q).
Adım 1: 2x^{2} − 50 ifadesinde ortak çarpan 2'dir: 2(x^{2} − 25).
Adım 2: x^{2} − 25 = x^{2} − 5^{2} = (x − 5)(x + 5).
Adım 3: Sonuç 2(x − 5)(x + 5).
Sağlama: x = 7 için 98 − 50 = 48; 2 · 2 · 12 = 48.
Sık yapılan hata: Ortak çarpanı aldıktan sonra kalan sayının kare kökünü almadan çarpanlara yazmak.
Cevap A.`
},
{
  id: "mat-ci-352",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okul kantini her gün 36 TL kâr etmektedir. Kantin sorumlusu, ilk 27 günde ve sonraki 73 günde elde edilen toplam kârı 36 · 27 + 36 · 73 işlemiyle bulacaktır.
**Bu işlemi ortak çarpan parantezine alarak yapan sorumlunun bulacağı toplam kâr kaç TL'dir?**`,
  gorsel: null,
  secenekler: ["136", "3 600", "3 636", "3 700"],
  dogru: 1,
  hatalar: ["Ortak çarpan olan 36'yı parantezdeki toplamla (100) çarpmak yerine topladın.", null, "36 · 100 = 3 600 sonucuna bir de 36 ekledin.", "36 · 100 = 3 600 sonucuna bir de 100 ekledin."],
  aciklama: `Adım 1: İki çarpımda da 36 ortaktır: 36 · 27 + 36 · 73 = 36 · (27 + 73).
Adım 2: Parantez içi 27 + 73 = 100.
Adım 3: 36 · 100 = 3 600.
Sağlama: 36 · 27 = 972 ve 36 · 73 = 2 628; toplamları 3 600.
Sık yapılan hata: Ortak çarpanı dışarı alıp parantezdeki toplamla çarpmak yerine ona eklemek.
Cevap B.`
},
{
  id: "mat-ci-353",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 3,
  soru: `Alanı m^{2} − 18m + k santimetrekare olan kare biçimli bir kartonun bir kenarı (m − p) cm biçimindedir (p pozitif tam sayı).
**Buna göre k kaçtır?**`,
  gorsel: null,
  secenekler: ["9", "18", "81", "324"],
  dogru: 2,
  hatalar: ["2p = 18'den p = 9 buldun ama son terimi p^{2} değil p aldın.", "Orta terimdeki 18 sayısını son terim sandın.", null, "p = 18 aldın; orta terim 2p olduğundan p = 9'dur."],
  aciklama: `Tam kare açılımı: (m − p)^{2} = m^{2} − 2pm + p^{2}.
Adım 1: Orta terim: 2p = 18, yani p = 9.
Adım 2: Son terim p^{2} = 9^{2} = 81, yani k = 81.
Sağlama: (m − 9)^{2} = m^{2} − 18m + 81.
Sık yapılan hata: Orta terimi 2 ile bölmeden son terim yazmak.
Cevap C.`
},
{
  id: "mat-ci-354",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 3,
  soru: `Alanı x^{2} − 12x + 36 santimetrekare olan kare biçimli bir kartonda x = 20'dir.
**Buna göre kartonun bir kenarı kaç santimetredir?**`,
  gorsel: null,
  secenekler: ["14", "26", "32", "196"],
  dogru: 0,
  hatalar: [null, "Kenarı (x + 6) aldın; orta terim eksi olduğu için kenar (x − 6)'dır.", "Kenarı (x + 12) aldın; orta terimdeki 12 sayısı 2 · 6'dır, kenara 6 girer.", "Alanı hesaplayıp kenara dönmedin."],
  aciklama: `Adım 1: x^{2} − 12x + 36 = x^{2} − 2 · 6 · x + 6^{2} = (x − 6)^{2}. Kare olduğundan kenar x − 6'dır.
Adım 2: x = 20 için kenar 20 − 6 = 14.
Sağlama: Alan 400 − 240 + 36 = 196 = 14^{2}.
Sık yapılan hata: Alanı bulup kenarı bulmayı unutmak.
Cevap A.`
},
{
  id: "mat-ci-355",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki tabloda verilen cebir karolarının hepsi, boşluk kalmadan birleştirilerek bir kare oluşturuluyor. Büyük kare karo x^{2}, uzun dikdörtgen karo x, küçük kare karo 1 birim alanı göstermektedir.
**Oluşan karenin bir kenarının uzunluğu aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Karo</th><th>Adet</th></tr><tr><td>Büyük kare (x<sup>2</sup>)</td><td>4</td></tr><tr><td>Uzun dikdörtgen (x)</td><td>12</td></tr><tr><td>Küçük kare (1)</td><td>9</td></tr></table>`,
  secenekler: ["4x + 3", "2x + 6", "2x + 9", "2x + 3"],
  dogru: 3,
  hatalar: ["4x^{2} ifadesinin kenarını 4x sandın; 4x^{2} = (2x)^{2}'dir.", "Orta terim 12x'i ikiye bölüp 6 buldun; 2 · 2x · q = 12x'ten q = 3 çıkar.", "Küçük karelerin sayısını (9) kenara taşıdın; kenarda 9'un kare kökü olan 3 yer alır.", null],
  aciklama: `Adım 1: Toplam alan 4x^{2} + 12x + 9'dur.
Adım 2: 4x^{2} = (2x)^{2} ve 9 = 3^{2}; orta terim 2 · 2x · 3 = 12x olduğundan ifade tam karedir: (2x + 3)^{2}.
Adım 3: Karenin bir kenarı 2x + 3'tür.
Sağlama: x = 1 için kenar 5, alan 25; karolar 4 + 12 + 9 = 25.
Sık yapılan hata: Karo sayılarını doğrudan kenara yazmak.
Cevap D.`
},
{
  id: "mat-ci-356",
  kazanim: "M.8.2.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir tasarımcı, birinci panonun maliyetini 4(2m − n) − 3(m − 2n) + 5 TL, ikinci panonun maliyetini ise 2(3m − n) − 5(m − n) + 7 TL ile hesaplıyor.
**m = 3 ve n = −2 için birinci panonun maliyeti ikincisinden kaç TL fazladır?**`,
  gorsel: null,
  secenekler: ["−12", "−8", "12", "20"],
  dogru: 2,
  hatalar: ["Çıkarmayı ters sırada yaptın: ikinci panonun maliyetinden birincisini çıkardın.", "−5(m − n) çarpımında eksiyi ikinci terime uygulamadın: −5 · (−n) = +5n olmalıydı; ikinci maliyeti 24 buldun.", null, "İki panonun maliyetlerini çıkarmak yerine topladın."],
  aciklama: `Adım 1: Birinci pano: 4(2m − n) = 8m − 4n; −3(m − 2n) = −3m + 6n. Toplam 5m + 2n + 5. m = 3, n = −2 için 15 − 4 + 5 = 16.
Adım 2: İkinci pano: 2(3m − n) = 6m − 2n; −5(m − n) = −5m + 5n. Toplam m + 3n + 7. m = 3, n = −2 için 3 − 6 + 7 = 4.
Adım 3: Fark = 16 − 4 = 12.
Sağlama: Doğrudan yazalım. Birinci: 4(6 + 2) = 32; −3(3 + 4) = −21; 32 − 21 + 5 = 16. İkinci: 2(9 + 2) = 22; −5(3 + 2) = −25; 22 − 25 + 7 = 4.
Sık yapılan hata: Dağıtırken eksi işaretini parantezdeki ikinci terime taşımamak.
Cevap C.`
},
{
  id: "mat-ci-357",
  kazanim: "M.8.2.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Birinci kutuda m tane bilye vardır. İkinci kutudaki bilye sayısı, birinci kutudakinin 3 katından 2 fazladır. Üçüncü kutuda ise birinci kutudan 5 bilye alındıktan sonra kalan bilye sayısının 4 katı kadar bilye vardır.
**Üçüncü kutudaki bilye sayısı ikinci kutudakinden kaç fazladır?**`,
  gorsel: null,
  secenekler: ["m − 18", "m − 22", "m − 7", "7m − 18"],
  dogru: 1,
  hatalar: ["−(3m + 2) çıkarırken +2 yazdın; eksi parantezdeki her terime dağıtılır.", null, "4(m − 5) çarpımını 4m − 5 yazdın; 4, 5 ile de çarpılır.", "Fark yerine iki kutudaki bilyeleri topladın."],
  aciklama: `Adım 1: İkinci kutu: 3m + 2. Üçüncü kutu: kalan m − 5 olduğundan 4(m − 5) = 4m − 20.
Adım 2: Fark = (4m − 20) − (3m + 2) = 4m − 20 − 3m − 2 = m − 22.
Sağlama: m = 30 için ikinci kutuda 92, üçüncü kutuda 100 bilye var; fark 8 ve 30 − 22 = 8.
Sık yapılan hata: Eksi işaretini parantezdeki sabit terime dağıtmamak.
Cevap B.`
},
{
  id: "mat-ci-358",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Dikdörtgen biçimli bir posterin kenar uzunlukları (3x + 4) cm ve (2x + 5) cm'dir. Posterin her kenarından 1 cm içeride boşluk bırakılarak geri kalan dikdörtgen bölüme resim basılacaktır.
**Buna göre resim basılan bölümün alanını cm^{2} cinsinden gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 400 215" role="img" aria-label="Kenarlarında 1 cm boşluk bırakılmış dikdörtgen poster"><rect x="70" y="30" width="200" height="140" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="82" y="42" width="176" height="116" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="170" y="22" font-size="15" text-anchor="middle" fill="currentColor">3x + 4</text><text x="280" y="104" font-size="15" text-anchor="start" fill="currentColor">2x + 5</text><text x="170" y="196" font-size="14" text-anchor="middle" fill="currentColor">her yanda 1 cm boşluk</text></svg>`,
  secenekler: ["6x^{2} + 9x + 6", "6x^{2} + 18x + 12", "6x^{2} + 23x + 20", "6x^{2} + 13x + 6"],
  dogru: 3,
  hatalar: ["(3x + 2)(2x + 3) çarpımında 2 · 2x = 4x terimini unuttun.", "Boşluğu her boyutta yalnızca 1 cm kısaltarak (3x + 3)(2x + 4) hesapladın; boşluk iki yandadır.", "Posterin tamamının alanını yazdın.", null],
  aciklama: `Adım 1: Boşluk her boyutta iki yanda bırakılır; her boyut 1 + 1 = 2 cm kısalır: (3x + 4) − 2 = 3x + 2 ve (2x + 5) − 2 = 2x + 3.
Adım 2: Alan = (3x + 2)(2x + 3) = 6x^{2} + 9x + 4x + 6 = 6x^{2} + 13x + 6.
Sağlama: x = 1 için poster 7 × 7, resim 5 × 5 = 25 cm^{2}; 6 + 13 + 6 = 25.
Sık yapılan hata: 1 cm boşluğu her boyuttan yalnızca bir kez çıkarmak.
Cevap D.`
},
{
  id: "mat-ci-359",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Birinci kasada birim fiyatı (x + 3) TL olan (x + 6) ürün, ikinci kasada birim fiyatı x TL olan (x + 9) ürün satılmıştır.
**Birinci kasanın geliri ikinci kasanın gelirinden kaç TL fazladır?**`,
  gorsel: null,
  secenekler: ["18", "9x + 18", "2x^{2} + 18x + 18", "−18"],
  dogru: 0,
  hatalar: [null, "x(x + 9) çarpımını x^{2} yazdın; 9x terimini unuttun.", "Gelirleri çıkarmak yerine topladın.", "Çıkarmayı ters sırada yaptın: ikinci gelir − birinci gelir."],
  aciklama: `Adım 1: Birinci kasa: (x + 3)(x + 6) = x^{2} + 6x + 3x + 18 = x^{2} + 9x + 18.
Adım 2: İkinci kasa: x(x + 9) = x^{2} + 9x.
Adım 3: Fark = x^{2} + 9x + 18 − x^{2} − 9x = 18. Fark x'e bağlı değildir.
Sağlama: x = 2 için birinci kasa 5 · 8 = 40, ikinci kasa 2 · 11 = 22; fark 18.
Sık yapılan hata: Fark sorulduğunda hangi gelirden hangisinin çıkarılacağını karıştırmak.
Cevap A.`
},
{
  id: "mat-ci-360",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Şekildeki dikdörtgen biçimli bahçe, bir çitle iki dikdörtgen bölüme ayrılmıştır. Sağ bölümün içine kenarı 2 metre olan kare biçimli bir havuz yapılacaktır. Uzunluklar metre cinsinden verilmiştir.
**Buna göre bahçenin havuz dışında kalan alanını m^{2} cinsinden gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 470 200" role="img" aria-label="Çitle iki dikdörtgene ayrılmış bahçe; sağ bölümde kenarı 2 metre olan kare havuz"><rect x="50" y="40" width="160" height="140" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="210" y="40" width="180" height="140" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="280" y="90" width="40" height="40" fill="var(--vurgu)" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/><text x="300" y="116" font-size="14" text-anchor="middle" fill="currentColor">2 m</text><text x="130" y="32" font-size="15" text-anchor="middle" fill="currentColor">2x</text><text x="300" y="32" font-size="15" text-anchor="middle" fill="currentColor">x + 5</text><text x="398" y="115" font-size="15" text-anchor="start" fill="currentColor">x + 3</text></svg>`,
  secenekler: ["3x^{2} + 14x + 11", "3x^{2} + 14x + 15", "3x^{2} + 14x + 13", "3x^{2} + 9x + 11"],
  dogru: 0,
  hatalar: [null, "Havuzun alanını çıkarmadın; 3x^{2} + 14x + 15 bahçenin tamamının alanıdır.", "Havuzun alanını 2 m^{2} aldın; kenarı 2 m olan karenin alanı 2 · 2 = 4 m^{2}'dir.", "(3x + 5)(x + 3) çarpımında 5x terimini unuttun; orta terim 9x + 5x = 14x'tir."],
  aciklama: `Adım 1: Bahçenin genişliği 2x + (x + 5) = 3x + 5, yüksekliği x + 3'tür.
Adım 2: Bahçenin tamamı: (3x + 5)(x + 3) = 3x^{2} + 9x + 5x + 15 = 3x^{2} + 14x + 15.
Adım 3: Havuzun alanı 2 · 2 = 4 m^{2}'dir. Havuz dışında kalan alan 3x^{2} + 14x + 15 − 4 = 3x^{2} + 14x + 11.
Sağlama: x = 1 için bölümler 2 × 4 = 8 ve 6 × 4 = 24; toplam 32, havuz çıkınca 28. İfade: 3 + 14 + 11 = 28.
Sık yapılan hata: Her bölümün alanını ayrı hesaplarken terim kaçırmak ya da havuzu çıkarmayı unutmak.
Cevap A.`
},
{
  id: "mat-ci-361",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Şekildeki dikdörtgen biçimli bahçenin içinden birbirini dik kesen, genişlikleri 2 metre olan iki yol geçmektedir. Bahçenin boyutları metre cinsinden verilmiştir.
**Buna göre bahçenin yollar dışında kalan alanını gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 440 235" role="img" aria-label="Birbirini dik kesen iki yolun geçtiği dikdörtgen bahçe"><rect x="60" y="40" width="300" height="175" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><rect x="190" y="40" width="50" height="175" fill="var(--vurgu2)" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><rect x="60" y="110" width="300" height="50" fill="var(--vurgu2)" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><text x="210" y="32" font-size="15" text-anchor="middle" fill="currentColor">x + 8</text><text x="368" y="132" font-size="15" text-anchor="start" fill="currentColor">x + 3</text><text x="215" y="80" font-size="14" text-anchor="middle" fill="currentColor">2 m</text><text x="115" y="140" font-size="14" text-anchor="middle" fill="currentColor">2 m</text></svg>`,
  secenekler: ["x^{2} + 7x + 2", "x^{2} + 9x + 8", "x^{2} + 7x + 6", "x^{2} + 3x − 4"],
  dogru: 2,
  hatalar: ["Yolların alanlarını ayrı ayrı çıkardın; kesişen 2 × 2 = 4 m^{2}'lik kare iki kez çıkarılmış oldu.", "Yalnızca yatay yolu hesaba katıp (x + 8)(x + 1) yazdın.", null, "Her boyuttan 4 m çıkardın: (x + 4)(x − 1). Yol genişliği 2 m'dir, her boyuttan yalnızca 2 m çıkar."],
  aciklama: `Yollar kenarlara kaydırılsa kalan alan değişmez; bu yüzden yolların kapladığı genişlik her boyuttan yalnızca bir kez düşer.
Adım 1: Kalan bölgenin boyutları (x + 8) − 2 = x + 6 ve (x + 3) − 2 = x + 1.
Adım 2: Alan = (x + 6)(x + 1) = x^{2} + x + 6x + 6 = x^{2} + 7x + 6.
Sağlama: x = 4 için bahçe 12 × 7 = 84. Yollar 2 · 7 + 2 · 12 − 4 = 34 m^{2}; kalan 50. İfade: 16 + 28 + 6 = 50.
Sık yapılan hata: Kesişen kareyi iki kez çıkarmak.
Cevap C.`
},
{
  id: "mat-ci-362",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir atölyede dikdörtgen biçimli bir levhanın kenar uzunlukları (3x + a) cm ve (x − 4) cm'dir (a bir tam sayı). Levhanın alanı açıldığında 3x^{2} + bx − 20 biçiminde bulunmuştur.
**Buna göre a − b farkı kaçtır?**`,
  gorsel: null,
  secenekler: ["−12", "−2", "5", "12"],
  dogru: 3,
  hatalar: ["Farkı ters sırada aldın: b − a.", "a + b toplamını hesapladın.", "Yalnızca a değerini buldun; soru a − b farkını soruyor.", null],
  aciklama: `Adım 1: (3x + a)(x − 4) = 3x^{2} − 12x + ax − 4a = 3x^{2} + (a − 12)x − 4a.
Adım 2: Sabit terim: −4a = −20, yani a = 5.
Adım 3: x'li terim: b = a − 12 = 5 − 12 = −7.
Adım 4: a − b = 5 − (−7) = 12.
Sağlama: (3x + 5)(x − 4) = 3x^{2} − 12x + 5x − 20 = 3x^{2} − 7x − 20.
Sık yapılan hata: a − (−7) işleminde eksi ile eksiyi toplamak yerine çıkarmak.
Cevap D.`
},
{
  id: "mat-ci-363",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Şekilde kenar uzunluğu 15 cm olan kare biçimli bir kartonun bir köşesinden kenarı 6 cm olan kare kesilip atılmıştır. Kalan L biçimli parça, kesikli çizgiden kesilerek iki dikdörtgene ayrılmış ve bu parçalar boşluk kalmadan, üst üste binmeden birleştirilerek tek bir dikdörtgen yapılmıştır.
**Buna göre oluşan dikdörtgenin kısa kenarı kaç cm'dir?**`,
  gorsel: `<svg viewBox="0 0 420 245" role="img" aria-label="Köşesi kesilmiş kare karton ve parçaların yeniden dizilmesiyle oluşan dikdörtgen"><path d="M60 30 H150 V90 H210 V180 H60 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M150 30 H210 V90" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><path d="M150 90 V180" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="52" y="110" font-size="15" text-anchor="end" fill="currentColor">15 cm</text><text x="218" y="64" font-size="15" text-anchor="start" fill="currentColor">6 cm</text><text x="135" y="202" font-size="15" text-anchor="middle" fill="currentColor">15 cm</text><path d="M255 112 H295 M287 105 L297 112 L287 119" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="275" y="96" font-size="14" text-anchor="middle" fill="currentColor">yeniden</text><text x="275" y="136" font-size="14" text-anchor="middle" fill="currentColor">dizilir</text><rect x="310" y="15" width="90" height="210" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M310 75 H400" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/></svg>`,
  secenekler: ["6", "9", "15", "21"],
  dogru: 1,
  hatalar: ["Kesilen karenin kenarını yazdın; dikdörtgenin kenarları (15 − 6) ve (15 + 6)'dır.", null, "Büyük karenin kenarını yazdın; dikdörtgenin kenarları 15 olmaz.", "Uzun kenarı (15 + 6) buldun; soru kısa kenarı soruyor."],
  aciklama: `İki kare farkı özdeşliği: p^{2} − q^{2} = (p − q)(p + q). Kalan L parçasının alanı, büyük karenin alanından küçük karenin alanı çıkarılarak bulunur ve bu iki çarpanın çarpımı olarak bir dikdörtgene dönüşür.
Adım 1: L parçasının alanı 15^{2} − 6^{2} = (15 − 6)(15 + 6).
Adım 2: Dikdörtgenin kenarları 9 cm ve 21 cm olur.
Adım 3: Kısa kenar 9 cm'dir.
Sağlama: 225 − 36 = 189 ve 9 · 21 = 189.
Sık yapılan hata: Kenarlardan birini kesilen kare ya da büyük karenin kenarıyla karıştırmak.
Cevap B.`
},
{
  id: "mat-ci-364",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Kenar uzunlukları a dm ve b dm olan iki kare biçimli pano ile kenarları a dm ve b dm olan dikdörtgen biçimli bir levha vardır. a + b = 13 dm ve a · b = 36 dm^{2}'dir.
**Buna göre iki panonun alanları toplamı, levhanın alanından kaç dm^{2} fazladır?**`,
  gorsel: null,
  secenekler: ["25", "36", "61", "97"],
  dogru: 2,
  hatalar: ["(a − b)^{2} değerini hesapladın; istenen a^{2} + b^{2} − ab'dir.", "Yalnızca levhanın alanını (ab = 36) yazdın.", null, "Yalnızca iki panonun alanları toplamını (a^{2} + b^{2} = 97) buldun; levhanın alanını çıkarmadın."],
  aciklama: `Adım 1: İstenen fark a^{2} + b^{2} − ab'dir.
Adım 2: (a + b)^{2} = a^{2} + 2ab + b^{2} olduğundan a^{2} + b^{2} = 13^{2} − 2 · 36 = 169 − 72 = 97.
Adım 3: Fark = 97 − 36 = 61.
Sağlama: a = 4, b = 9 için 16 + 81 − 36 = 61.
Sık yapılan hata: a^{2} + b^{2} yerine (a + b)^{2} ya da ab kullanmak.
Cevap C.`
},
{
  id: "mat-ci-365",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `**Aşağıdaki eşitliklerden hangisi bir özdeşlik __değildir__?**`,
  gorsel: null,
  secenekler: ["(a + 3b)^{2} − (a − 3b)^{2} = 12ab", "(3x + 2)(3x − 2) + 4 = 9x^{2}", "(x − 5)^{2} + 10x = x^{2} + 25", "(2x − 1)^{2} + 4x = 4x^{2} − 1"],
  dogru: 3,
  hatalar: ["Bu eşitlik bir özdeşliktir: a^{2} ve 9b^{2} terimleri götürülür, 6ab + 6ab = 12ab kalır; soruda özdeşlik olmayanı istiyor.", "Bu eşitlik bir özdeşliktir: 9x^{2} − 4 + 4 = 9x^{2}; soruda özdeşlik olmayanı istiyor.", "Bu eşitlik bir özdeşliktir: x^{2} − 10x + 25 + 10x = x^{2} + 25; soruda özdeşlik olmayanı istiyor.", null],
  aciklama: `Özdeşlik, harflere hangi sayı verilirse verilsin doğru olan eşitliktir.
Adım 1: A: 6ab + 6ab = 12ab; doğru. B: 9x^{2} − 4 + 4 = 9x^{2}; doğru. C: x^{2} − 10x + 25 + 10x = x^{2} + 25; doğru.
Adım 2: D: (2x − 1)^{2} = 4x^{2} − 4x + 1, buna 4x eklenince 4x^{2} + 1 olur; sağ taraf 4x^{2} − 1 olduğundan eşitlik özdeşlik değildir.
Sağlama: x = 1 için sol taraf 1 + 4 = 5, sağ taraf 4 − 1 = 3.
Sık yapılan hata: Son terimin işaretini (+1 yerine −1) yanlış yazmak.
Cevap D.`
},
{
  id: "mat-ci-366",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `**Aşağıdaki yorumlardan hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["(a + b)^{2} ifadesi, a ve b'nin her değeri için a^{2} + b^{2}'ye eşittir.", "(a − b)^{2} ile (b − a)^{2} ifadeleri, a ve b'nin her değeri için birbirine eşittir.", "a^{2} − b^{2} ifadesi, a < b iken negatif olacağından çarpım biçiminde yazılamaz.", "(a + b)^{2} − (a − b)^{2} ifadesi her zaman 2ab'ye eşittir."],
  dogru: 1,
  hatalar: ["Orta terim 2ab eksik: (a + b)^{2} = a^{2} + 2ab + b^{2}; a ve b'den biri 0 değilse eşit olmaz.", null, "Negatif değerler de çarpım biçiminde yazılabilir: a = 1, b = 3 için 1 − 9 = −8 = (1 − 3)(1 + 3); iki kare farkı her a ve b için geçerlidir.", "Fark 4ab'dir: (a^{2} + 2ab + b^{2}) − (a^{2} − 2ab + b^{2}) = 4ab."],
  aciklama: `Adım 1: (b − a) = −(a − b) olduğundan (b − a)^{2} = (−1)^{2}(a − b)^{2} = (a − b)^{2}. Yani B doğrudur.
Adım 2: A yanlış: a = 1, b = 1 için 4 ≠ 2. C yanlış: negatif sayılar da çarpım biçiminde yazılabilir; a < b iken de a^{2} − b^{2} bir çarpıma dönüşür, örneğin a = 1, b = 3 için 1 − 9 = −8 ve (1 − 3)(1 + 3) = −8.
Adım 3: D yanlış: a = 1, b = 1 için (4) − (0) = 4, 2ab = 2.
Sağlama (B): a = 5, b = 2 için 3^{2} = 9 ve (−3)^{2} = 9.
Sık yapılan hata: Kare özdeşliklerinde orta terimi unutmak.
Cevap B.`
},
{
  id: "mat-ci-367",
  kazanim: "M.8.2.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Elif, 1 003 · 997 − 1 004 · 996 işlemini hesap makinesi kullanmadan yapacaktır. Her çarpımda çarpanları 1 000'e göre yazıp iki kare farkı özdeşliğinden yararlanacaktır.
**Buna göre Elif'in bulacağı sonuç kaçtır?**`,
  gorsel: null,
  secenekler: ["25", "7", "1", "−7"],
  dogru: 1,
  hatalar: ["9 ve 16 karelerinin farkını almak yerine toplamını aldın.", null, "Çıkarılacak 3 ve 4 sayılarının karesini almadın; −3 − (−4) = 1 buldun.", "İki kare farkında ikinci sayının karesini çıkarmak yerine ekledin: 1 003 · 997 = 1 000^{2} + 9 ve 1 004 · 996 = 1 000^{2} + 16 yazdın."],
  aciklama: `İki kare farkı: (p − q)(p + q) = p^{2} − q^{2}.
Adım 1: 1 003 · 997 = (1 000 + 3)(1 000 − 3) = 1 000^{2} − 3^{2} = 1 000 000 − 9 = 999 991.
Adım 2: 1 004 · 996 = (1 000 + 4)(1 000 − 4) = 1 000^{2} − 4^{2} = 1 000 000 − 16 = 999 984.
Adım 3: Fark = 999 991 − 999 984 = 7.
Sağlama: 1 003 · 997 = 1 003 000 − 3 009 = 999 991 olur.
Sık yapılan hata: Çıkarılacak sayıyı karesini almadan yazmak.
Cevap B.`
},
{
  id: "mat-ci-368",
  kazanim: "M.8.2.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir resmin boyutları 2x cm ve (x + 1) cm'dir. Resmin dört yanına her yanda 2 cm genişliğinde bir çerçeve yapılacaktır.
**Buna göre çerçevenin alanını cm^{2} cinsinden gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["6x + 6", "12x + 4", "12x + 20", "2x^{2} + 14x + 20"],
  dogru: 2,
  hatalar: ["Çerçeveyi her boyuta yalnızca 2 cm ekleyerek (2x + 2)(x + 3) hesapladın; her yanda 2 cm olduğundan boyutlar 4 cm artar.", "Dört köşedeki 2 × 2 cm'lik kareleri (toplam 16 cm^{2}) hesaba katmadın.", null, "Resim ile çerçevenin birlikte oluşturduğu dış dikdörtgenin alanını yazdın."],
  aciklama: `Adım 1: Dış dikdörtgenin boyutları 2x + 4 ve (x + 1) + 4 = x + 5'tir (her boyutta iki yan çerçeve vardır).
Adım 2: Dış alan (2x + 4)(x + 5) = 2x^{2} + 10x + 4x + 20 = 2x^{2} + 14x + 20.
Adım 3: Resmin alanı 2x(x + 1) = 2x^{2} + 2x. Çerçevenin alanı = 2x^{2} + 14x + 20 − 2x^{2} − 2x = 12x + 20.
Sağlama: x = 2 için resim 4 × 3 = 12, dış dikdörtgen 8 × 7 = 56; çerçeve 44 ve 12 · 2 + 20 = 44.
Sık yapılan hata: Her boyuta çerçeve genişliğini yalnızca bir kez eklemek.
Cevap C.`
},
{
  id: "mat-ci-369",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 4,
  soru: `Alanı 8x^{2} − 32 cm^{2} olan dikdörtgen biçimli bir kartonun bir kenarının uzunluğu (2x + 4) cm'dir.
**Buna göre kartonun çevresini cm cinsinden gösteren ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["4x − 8", "6x − 4", "6x + 4", "12x − 8"],
  dogru: 3,
  hatalar: ["Yalnızca diğer kenarı buldun; çevre istenmişti.", "Yarım çevreyi (iki komşu kenarın toplamı) buldun; çevre bunun 2 katıdır.", "Diğer kenarı x − 2 buldun; 8 ortak çarpanının 2'ye bölünüp geriye 4 kaldığını unuttun.", null],
  aciklama: `Adım 1: Önce ortak çarpan, sonra kare farkı: 8x^{2} − 32 = 8(x^{2} − 4) = 8(x − 2)(x + 2).
Adım 2: (2x + 4) = 2(x + 2) olduğundan diğer kenar 8(x − 2)(x + 2) ÷ 2(x + 2) = 4(x − 2) = 4x − 8.
Adım 3: Çevre = 2(2x + 4 + 4x − 8) = 2(6x − 4) = 12x − 8.
Sağlama: x = 3 için alan 72 − 32 = 40; kenarlar 10 ve 4, çevre 28 ve 36 − 8 = 28.
Sık yapılan hata: Ortak çarpanı atlayıp diğer kenarı eksik bulmak.
Cevap D.`
},
{
  id: "mat-ci-370",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 4,
  soru: `Alanı 4x^{2} − 4x + 1 metrekare olan kare biçimli bir bahçenin çevresine ağaç dikilecektir. Ağaçlar birbirinden 3 metre uzaklıkta olacak ve bahçenin köşelerine de ağaç dikilecektir.
**x = 8 olduğuna göre bu bahçeye kaç ağaç dikilir?**`,
  gorsel: null,
  secenekler: ["15", "20", "30", "60"],
  dogru: 1,
  hatalar: ["Bahçenin bir kenarının uzunluğunu (15 m) ağaç sayısı sandın.", null, "Yarım çevreyi (30 m) ağaç sayısı sandın.", "Çevreyi (60 m) ağaç sayısı sandın; ağaçlar 3 m arayla dikiliyor."],
  aciklama: `Adım 1: 4x^{2} − 4x + 1 = (2x)^{2} − 2 · 2x · 1 + 1^{2} = (2x − 1)^{2}. Kenar 2x − 1 olur.
Adım 2: x = 8 için kenar 15 m, çevre 4 · 15 = 60 m.
Adım 3: Ağaçlar 3 m arayla dikildiğinden 60 ÷ 3 = 20 ağaç gerekir.
Sağlama: Her kenarda 15 ÷ 3 = 5 aralık vardır; dört kenarda 20 aralık ve köşeler dahil kapalı çevrede 20 ağaç bulunur.
Sık yapılan hata: Çevreyi aralığa bölmeyi unutmak.
Cevap B.`
},
{
  id: "mat-ci-371",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 4,
  soru: `Alanı kx^{2} − 30x + 25 santimetrekare olan kare biçimli bir kartonun kenar uzunluğu (px − 5) cm biçimindedir (k ve p pozitif tam sayı).
**Buna göre k kaçtır?**`,
  gorsel: null,
  secenekler: ["9", "15", "25", "30"],
  dogru: 0,
  hatalar: [null, "Orta terimi 2'ye bölüp 15 buldun; 2 · p · 5 = 30'dan p = 3 çıkar ve k = p^{2} olur.", "Sabit terimi (25) k sandın.", "Orta terimin katsayısını (30) k sandın."],
  aciklama: `Adım 1: (px − 5)^{2} = p^{2}x^{2} − 2 · p · 5 · x + 25 = p^{2}x^{2} − 10p · x + 25.
Adım 2: Orta terim: 10p = 30, yani p = 3.
Adım 3: k = p^{2} = 9.
Sağlama: (3x − 5)^{2} = 9x^{2} − 30x + 25.
Sık yapılan hata: İlk terimin katsayısını (p^{2}) kenardaki katsayıyla karıştırmak.
Cevap A.`
},
{
  id: "mat-ci-372",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 4,
  soru: `Bir mimar, kenarları 63 m ve 57 m olan iki kare biçimli arsanın alanları farkını hesap makinesi kullanmadan bulacaktır. Bu fark kadar alanı olan dikdörtgen biçimli bir parkın kısa kenarı 24 m'dir.
**Buna göre bu parkın çevresi kaç metredir?**`,
  gorsel: null,
  secenekler: ["30", "54", "78", "108"],
  dogru: 3,
  hatalar: ["Yalnızca parkın uzun kenarını (720 ÷ 24 = 30) buldun; çevre istenmişti.", "Yarım çevreyi (24 + 30) buldun; çevre bunun 2 katıdır.", "Çevreyi 2 · 24 + 30 diye hesapladın; her kenar iki kez hesaba katılır.", null],
  aciklama: `İki kare farkı: p^{2} − q^{2} = (p − q)(p + q).
Adım 1: 63^{2} − 57^{2} = (63 − 57)(63 + 57) = 6 · 120 = 720. Parkın alanı 720 m^{2}'dir.
Adım 2: Uzun kenar = 720 ÷ 24 = 30 m.
Adım 3: Çevre = 2 · (24 + 30) = 108 m.
Sağlama: 63^{2} = 3 969 ve 57^{2} = 3 249; fark 720 ve 24 · 30 = 720.
Sık yapılan hata: Kenar farkı ile toplamını çarpmayı unutmak.
Cevap D.`
},
{
  id: "mat-ci-373",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 4,
  soru: `Alanı 2x^{2} + 12x + 18 santimetrekare olan dikdörtgen biçimli bir kartonun kısa kenarı (x + 3) cm'dir.
**x = 7 olduğuna göre kartonun çevresi kaç santimetredir?**`,
  gorsel: null,
  secenekler: ["30", "40", "60", "200"],
  dogru: 2,
  hatalar: ["Yarım çevreyi (iki komşu kenarın toplamını) buldun; çevre bunun 2 katıdır.", "Yalnızca uzun kenarın iki katını aldın; çevreye kısa kenarlar da girer.", null, "Kartonun alanını yazdın."],
  aciklama: `Adım 1: Ortak çarpan 2, sonra tam kare: 2x^{2} + 12x + 18 = 2(x^{2} + 6x + 9) = 2(x + 3)^{2}.
Adım 2: Kısa kenar (x + 3) olduğundan uzun kenar 2(x + 3) olur.
Adım 3: x = 7 için kenarlar 10 cm ve 20 cm; çevre 2(10 + 20) = 60 cm.
Sağlama: Alan 98 + 84 + 18 = 200 ve 10 · 20 = 200.
Sık yapılan hata: Alanı çevre sanmak.
Cevap C.`
},
{
  id: "mat-ci-374",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 4,
  soru: `3x^{2} − 18x + 27 ifadesi için üç öğrenci aşağıdaki çarpımları yazmıştır.
Ali: 3(x^{2} − 6x + 9)
Ayşe: 3(x − 3)(x + 3)
Burak: (3x − 9)(x − 3)
**Bu öğrencilerden hangilerinin yazdığı çarpım, verilen ifadeye eşittir?**`,
  gorsel: null,
  secenekler: ["Yalnız Burak", "Ali ve Ayşe", "Ali ve Burak", "Ayşe ve Burak"],
  dogru: 2,
  hatalar: ["Ali'nin yazdığı 3(x^{2} − 6x + 9) da açılınca 3x^{2} − 18x + 27 verir; çarpanlara ayırma tamamlanmamış olsa da ifadeye eşittir.", "Ayşe'nin çarpımı açılınca 3x^{2} − 27 olur; tam kare ifadeyi iki kare farkı sandın. Burak'ın çarpımı ise ifadeye eşittir.", null, "Ayşe'nin çarpımı açılınca 3x^{2} − 27 olur; verilen ifadeye eşit değildir ve Ali'nin çarpımı eşit olmasına rağmen dışarıda bırakılmıştır."],
  aciklama: `Eşitlik için her çarpımı açıp bak.
Adım 1: Ali: 3(x^{2} − 6x + 9) = 3x^{2} − 18x + 27. Eşit.
Adım 2: Ayşe: 3(x − 3)(x + 3) = 3(x^{2} − 9) = 3x^{2} − 27. Eşit değil.
Adım 3: Burak: (3x − 9)(x − 3) = 3x^{2} − 9x − 9x + 27 = 3x^{2} − 18x + 27. Eşit.
Sağlama: x = 5 için ifade 75 − 90 + 27 = 12; Ali 3 · 4 = 12, Ayşe 3 · 2 · 8 = 48, Burak 6 · 2 = 12.
Sık yapılan hata: Tam kare olan üç terimli ifadeyi iki kare farkı gibi çarpanlarına ayırmak.
Cevap C.`
},
{
  id: "mat-ci-375",
  kazanim: "M.8.2.1.4",
  kademe: 3,
  zorluk: 4,
  soru: `a ve b pozitif tam sayılar olmak üzere 36a^{2} − 49b^{2} = 128 ve 6a + 7b = 32'dir.
**Buna göre 6a − 7b kaçtır?**`,
  gorsel: null,
  secenekler: ["4", "96", "160", "4 096"],
  dogru: 0,
  hatalar: [null, "128'den 32'yi çıkardın; ifade bir çarpımdır, toplam ya da fark değil.", "128 ile 32'yi topladın; ifade bir çarpımdır.", "128 ile 32'yi çarptın; 128 zaten çarpımdır, bölmen gerekir."],
  aciklama: `İki kare farkı: p^{2} − q^{2} = (p − q)(p + q).
Adım 1: 36a^{2} − 49b^{2} = (6a)^{2} − (7b)^{2} = (6a − 7b)(6a + 7b).
Adım 2: 128 = (6a − 7b) · 32 olduğundan 6a − 7b = 128 ÷ 32 = 4.
Sağlama: a = 3, b = 2 için 6a + 7b = 18 + 14 = 32, 36 · 9 − 49 · 4 = 324 − 196 = 128 ve 6a − 7b = 18 − 14 = 4.
Sık yapılan hata: Çarpım verildiğinde çarpanı bölme yerine çıkarmakla bulmaya çalışmak.
Cevap A.`
}
);
