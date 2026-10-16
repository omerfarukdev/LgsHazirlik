// Matematik — Kareköklü İfadeler: Kademe 1 (Kavrama) YEDEĞİ, sıra 26-75 (kimlik 126-175)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["karekoklu-ifadeler"] = window.LGS_BANK["karekoklu-ifadeler"] || []).push(
/* ===================== KADEME 1 — KAVRAMA YEDEĞİ ===================== */
{
  id: "mat-kk-126",
  kazanim: "M.8.1.3.1",
  kademe: 1,
  zorluk: 1,
  soru: "Bir pul koleksiyoncusunun kare biçimli pulunun bir kenarı 13 mm'dir.\n**Buna göre bu pulun alanı kaç mm²'dir?**",
  gorsel: `<svg viewBox="0 0 360 205" role="img" aria-label="Kare biçimli pul; bir kenarı 13 milimetre, alanı soruluyor."><rect x="90" y="18" width="140" height="140" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="160" y="82" font-size="16" text-anchor="middle" fill="currentColor">Pul</text><text x="160" y="108" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: ? mm²</text><line x1="90" y1="173" x2="230" y2="173" stroke="var(--vurgu)" stroke-width="2"/><text x="160" y="196" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">13 mm</text></svg>`,
  secenekler: ["26", "52", "156", "169"],
  dogru: 3,
  hatalar: [
    "Kenarı 2 ile çarptın: 13 · 2 = 26. Alan için kenar, kendisiyle çarpılır.",
    "Çevreyi hesapladın: 4 · 13 = 52. Soru çevreyi değil alanı soruyor.",
    "13 ile ondan bir küçük sayıyı çarptın: 13 · 12 = 156. Alan için aynı sayı kendisiyle çarpılır: 13 · 13.",
    null
  ],
  aciklama: `Karenin alanı, kenar uzunluğunun kendisiyle çarpımıdır: A = a · a = a^{2}.
Adım 1: Kenar uzunluğu a = 13 mm'dir.
Adım 2: Alanı hesapla: 13 · 13 = 169 mm².
Sağlama: 13 · 13 = 130 + 39 = 169. Ayrıca √{169} = 13'tür; kare almak ile karekök almak birbirinin tersidir.
Sık yapılan hata: Alan ile çevreyi karıştırmak. Çevre 4 · 13 = 52 mm'dir; alan ise 169 mm²'dir.
Cevap D.`
},
{
  id: "mat-kk-127",
  kazanim: "M.8.1.3.5",
  kademe: 1,
  zorluk: 1,
  soru: "**√{45} − √{20} işleminin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["√{5}", "5", "√{65}", "5√{5}"],
  dogru: 0,
  hatalar: [
    null,
    "Kök içlerini çıkardın: 45 − 20 = 25 ve √{25} = 5. Kök içleri birbirinden çıkarılmaz; önce sadeleştirilir.",
    "Çıkarma yerine toplama yapıp kök içlerini topladın: 45 + 20 = 65.",
    "Sadeleştirmeyi doğru yaptın ama katsayıları çıkarmak yerine topladın: 3 + 2 = 5."
  ],
  aciklama: `Kareköklü ifadeler çıkarılırken önce her terim sadeleştirilir; kök içleri aynı olunca yalnızca katsayılar çıkarılır.
Adım 1: √{45}'i sadeleştir: 45 = 9 · 5 olduğundan √{45} = 3√{5}.
Adım 2: √{20}'yi sadeleştir: 20 = 4 · 5 olduğundan √{20} = 2√{5}.
Adım 3: İki terimin de kök içi 5'tir; katsayıları çıkar: 3 − 2 = 1. Sonuç 1√{5}, yani √{5}'tir.
Sağlama: √{45} ≈ 6,71 ve √{20} ≈ 4,47'dir. Farkları yaklaşık 2,24'tür; √{5} ≈ 2,24. Uyuyor.
Sık yapılan hata: √{45} − √{20} = √{45 − 20} sanmak. Bu yolla bulunan √{25} = 5, gerçek farktan çok büyüktür.
Cevap A.`
},
{
  id: "mat-kk-128",
  kazanim: "M.8.1.3.7",
  kademe: 1,
  zorluk: 1,
  soru: "Bir öğrenci defterine √{0,0049} işlemini yazmıştır.\n**Buna göre bu işlemin sonucu kaçtır?**",
  gorsel: null,
  secenekler: ["0,007", "0,07", "0,7", "7"],
  dogru: 1,
  hatalar: [
    "Virgülü fazla kaydırdın. 0,007 · 0,007 = 0,000049 eder, 0,0049 değil.",
    null,
    "Virgülden sonraki basamak sayısını yarıya indirirken bir basamak eksik bıraktın. 0,7 · 0,7 = 0,49 eder, 0,0049 değil.",
    "Virgülü hiç dikkate almadan √{49} = 7 dedin. 7 · 7 = 49 eder, 0,0049 değil."
  ],
  aciklama: `Ondalık gösterimin karekökünü bulmak için sayıyı kesre çevirir, payın ve paydanın karekökünü ayrı ayrı alırsın.
Adım 1: Kesre çevir: 0,0049 = [[49|10000]].
Adım 2: Pay ve paydanın kareköklerini al: √{49} = 7 ve √{10000} = 100.
Adım 3: Sonucu yaz: [[7|100]] = 0,07.
Sağlama: 0,07 · 0,07 = 0,0049. Doğru.
Sık yapılan hata: Karekök alındığında virgülden sonraki basamak sayısı yarıya iner. 0,0049'da dört basamak vardı; sonuçta iki basamak olmalı.
Cevap B.`
},
{
  id: "mat-kk-129",
  kazanim: "M.8.1.3.2",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdaki sayılardan hangisi 5 ile 6 arasındadır?**",
  gorsel: null,
  secenekler: ["√{20}", "√{28}", "√{38}", "√{50}"],
  dogru: 1,
  hatalar: [
    "Kök içinin 25'ten küçük olduğunu gözden kaçırdın: 4^{2} = 16 ve 5^{2} = 25 olduğundan √{20} sayısı 4 ile 5 arasındadır.",
    null,
    "Kök içi 36'dan büyüktür: 6^{2} = 36 ve 7^{2} = 49 olduğundan √{38} sayısı 6 ile 7 arasındadır.",
    "Kök içi 36'dan çok büyüktür: 7^{2} = 49 ve 8^{2} = 64 olduğundan √{50} sayısı 7 ile 8 arasındadır."
  ],
  aciklama: `Bir karekök 5 ile 6 arasındaysa kök içindeki sayı, 5 ile 6'nın karelerinin arasında olmalıdır.
Adım 1: Kareleri yaz: 5^{2} = 25 ve 6^{2} = 36.
Adım 2: Kök içi 25 ile 36 arasında olan şıkkı ara. 25 < 28 < 36 olduğundan 5 < √{28} < 6'dır.
Adım 3: Diğer şıkları ele: 20 < 25, 38 > 36 ve 50 > 36 olduğundan bunlar 5 ile 6 arasında değildir.
Sağlama: 5,3^{2} = 28,09 olduğundan √{28} sayısı yaklaşık 5,3'tür; 5 ile 6 arasındadır.
Sık yapılan hata: Kök içindeki sayıyı doğrudan 5 ile 6'yla kıyaslamak. Kıyaslanacak olan 25 ile 36'dır.
Cevap B.`
},
{
  id: "mat-kk-130",
  kazanim: "M.8.1.3.8",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdaki sayılardan hangisi rasyonel sayıdır?**",
  gorsel: null,
  secenekler: ["π", "√{10}", "√{16}", "2√{5}"],
  dogru: 2,
  hatalar: [
    "π irrasyonel bir sayıdır. [[22|7]] ve 3,14 yalnızca işlem kolaylığı için kullanılan yaklaşık değerlerdir.",
    "10 tam kare olmadığından √{10}, iki tam sayının oranı olarak yazılamaz; irrasyoneldir.",
    null,
    "Katsayı kökü kurtarmaz: 5 tam kare olmadığından 2√{5} de irrasyoneldir."
  ],
  aciklama: `Rasyonel sayı, iki tam sayının oranı ([[a|b]] biçiminde) yazılabilen sayıdır. Tam kare olmayan bir doğal sayının karekökü bu biçimde yazılamaz; böyle sayılar irrasyoneldir.
Adım 1: π irrasyoneldir. √{10} için 10 tam kare değildir (3^{2} = 9, 4^{2} = 16); 2√{5} için de 5 tam kare değildir.
Adım 2: √{16} için 16 = 4^{2} olduğundan √{16} = 4'tür.
Adım 3: 4 = [[4|1]] biçiminde yazılabildiği için rasyoneldir.
Sağlama: 4 · 4 = 16.
Sık yapılan hata: Kök işareti gören her sayıyı irrasyonel saymak. Belirleyici olan, kök içindeki sayının tam kare olup olmadığıdır.
Cevap C.`
},
{
  id: "mat-kk-131",
  kazanim: "M.8.1.3.4",
  kademe: 1,
  zorluk: 1,
  soru: "**2√{3} · 4√{3} işleminin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["8", "8√{3}", "24", "24√{3}"],
  dogru: 2,
  hatalar: [
    "√{3} · √{3} çarpımını 1 saydın: 2 · 4 = 8. Oysa √{3} · √{3} = 3'tür.",
    "Katsayıları çarptın ama kök içlerini çarpmayı unutup tek bir √{3} bıraktın. İki kök de çarpımda yer alır.",
    null,
    "Çarpımı doğru yaptın (8 · 3 = 24) ama kökü yazmaya devam ettin. √{3} · √{3} = 3 olduğundan kök kalmaz."
  ],
  aciklama: `Kareköklü ifadeler çarpılırken katsayılar katsayılarla, kök içleri kök içleriyle çarpılır. Bir karekök kendisiyle çarpılırsa kök içindeki sayı kalır: √{3} · √{3} = 3.
Adım 1: Katsayıları çarp: 2 · 4 = 8.
Adım 2: Kökleri çarp: √{3} · √{3} = 3.
Adım 3: Sonuçları çarp: 8 · 3 = 24.
Sağlama: 2√{3} ≈ 3,46 ve 4√{3} ≈ 6,93'tür. Çarpımları yaklaşık 24'tür.
Sık yapılan hata: √{3} · √{3} çarpımını 1 ya da 9 sanmak. Doğrusu 3'tür.
Cevap C.`
},
{
  id: "mat-kk-132",
  kazanim: "M.8.1.3.3",
  kademe: 1,
  zorluk: 1,
  soru: "**√{108} ifadesinin en sade biçimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["6√{3}", "2√{27}", "3√{12}", "36√{3}"],
  dogru: 0,
  hatalar: [
    null,
    "108 = 4 · 27 ayrımını yaptın ama 27'nin içinde hâlâ tam kare bir çarpan (9) var; sadeleştirme bitmedi.",
    "108 = 9 · 12 ayrımını yaptın ama 12'nin içinde hâlâ tam kare bir çarpan (4) var; sadeleştirme bitmedi.",
    "36'yı karekök almadan dışarı çıkardın. Dışarı çıkan sayı √{36} = 6 olmalıdır."
  ],
  aciklama: `Bir karekökü sadeleştirmek için kök içini, biri en büyük tam kare olan iki çarpana ayırırız; tam karenin karekökü kök dışına çıkar.
Adım 1: 108'in en büyük tam kare çarpanını bul: 108 = 36 · 3.
Adım 2: Kökü ayır: √{108} = √{36} · √{3}.
Adım 3: Tam kare çarpanı dışarı çıkar: √{36} = 6 olduğundan sonuç 6√{3}'tür.
Sağlama: Geri kök içine al: 6^{2} · 3 = 36 · 3 = 108.
Sık yapılan hata: Küçük bir tam kareyle durmak. 2√{27} ve 3√{12} ifadeleri 6√{3}'e eşittir ama sade değildir, çünkü kök içinde hâlâ tam kare çarpan kalmıştır.
Cevap A.`
},
{
  id: "mat-kk-133",
  kazanim: "M.8.1.3.6",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdaki çarpımlardan hangisinin sonucu bir doğal sayıdır?**",
  gorsel: null,
  secenekler: ["√{2} · √{6}", "√{3} · √{15}", "√{6} · √{8}", "√{5} · √{20}"],
  dogru: 3,
  hatalar: [
    "√{2} · √{6} = √{12} olur; 12 tam kare olmadığından sonuç doğal sayı değildir.",
    "√{3} · √{15} = √{45} olur; 45 tam kare olmadığından sonuç doğal sayı değildir.",
    "√{6} · √{8} = √{48} olur; 48 tam kare olmadığından sonuç doğal sayı değildir (6^{2} = 36, 7^{2} = 49).",
    null
  ],
  aciklama: `İki kareköklü ifadenin çarpımı, kök içlerinin çarpımının kareköküdür: √{a} · √{b} = √{a · b}. Sonucun doğal sayı olması için kök içindeki çarpımın tam kare olması gerekir.
Adım 1: Her şıkta kök içlerini çarp: 2 · 6 = 12, 3 · 15 = 45, 6 · 8 = 48, 5 · 20 = 100.
Adım 2: Hangisi tam kare? 12, 45 ve 48 değildir; 100 = 10^{2}'dir.
Adım 3: Yani √{5} · √{20} = √{100} = 10'dur.
Sağlama: √{20} = 2√{5} olduğundan √{5} · 2√{5} = 2 · 5 = 10.
Sık yapılan hata: Kök içlerinin kendisine bakıp çarpımı hesaplamamak. Tam kare olması gereken, çarpımdır.
Cevap D.`
},
{
  id: "mat-kk-134",
  kazanim: "M.8.1.3.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdaki doğal sayılardan hangisi tam kare __değildir__?**",
  gorsel: null,
  secenekler: ["196", "225", "245", "256"],
  dogru: 2,
  hatalar: [
    "196 = 14 · 14 olduğundan tam karedir; bu sayıyı tam kare olmayan sandın.",
    "225 = 15 · 15 olduğundan tam karedir; bu sayıyı tam kare olmayan sandın.",
    null,
    "256 = 16 · 16 olduğundan tam karedir; bu sayıyı tam kare olmayan sandın."
  ],
  aciklama: `Bir doğal sayı, bir doğal sayının karesi olarak yazılabiliyorsa tam karedir.
Adım 1: Şıklara yakın kareleri yaz: 14^{2} = 196, 15^{2} = 225, 16^{2} = 256.
Adım 2: 196, 225 ve 256 bu listede vardır, yani üçü de tam karedir.
Adım 3: 245 ise 15^{2} = 225 ile 16^{2} = 256 arasında kalır; hiçbir doğal sayının karesi değildir.
Sağlama: 245 = 5 · 7^{2} olduğundan 5'in üssü tektir; bütün üsler çift olmadığı için tam kare değildir.
Sık yapılan hata: Soruda "tam kare değildir" denmesine rağmen tam kare olan şıkkı işaretlemek. Kökü her zaman son kez oku.
Cevap C.`
},
{
  id: "mat-kk-135",
  kazanim: "M.8.1.3.4",
  kademe: 1,
  zorluk: 1,
  soru: "**√{10} · √{14} işleminin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["√{24}", "2√{35}", "4√{35}", "140"],
  dogru: 1,
  hatalar: [
    "Kök içlerini çarpmak yerine topladın: 10 + 14 = 24. Çarpmada kök içleri çarpılır.",
    null,
    "√{140} = √{4 · 35} ayrımını yaptın ama 4'ü karekök almadan dışarı çıkardın. Dışarı çıkan sayı √{4} = 2 olmalıdır.",
    "Kök içlerini doğru çarptın (140) ama karekökü yazmayı unuttun. Sonuç hâlâ √{140}'tır, 140 değil."
  ],
  aciklama: `İki kareköklü ifadenin çarpımı, kök içlerinin çarpımının kareköküdür: √{a} · √{b} = √{a · b}. Sonuç mümkünse sadeleştirilir.
Adım 1: Kök içlerini çarp: √{10} · √{14} = √{140}.
Adım 2: 140'ı tam kare bir çarpanla yaz: 140 = 4 · 35.
Adım 3: Tam kareyi dışarı çıkar: √{140} = √{4} · √{35} = 2√{35}.
Sağlama: 2√{35} ifadesini geri kök içine al: 2^{2} · 35 = 4 · 35 = 140.
Sık yapılan hata: Çarpma yerine toplama yapmak. √{10} · √{14} = √{10 + 14} değildir.
Cevap B.`
},
{
  id: "mat-kk-136",
  kazanim: "M.8.1.3.2",
  kademe: 1,
  zorluk: 1,
  soru: "**√{105} sayısına en yakın doğal sayı aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["10", "11", "12", "53"],
  dogru: 0,
  hatalar: [
    null,
    "11^{2} = 121'dir. 105 sayısı 100'e 5, 121'e ise 16 uzaklıktadır; yani √{105} sayısı 11'e değil 10'a daha yakındır.",
    "12^{2} = 144 olup 105'ten çok uzaktır; √{105} sayısı 12'den epey küçüktür.",
    "105'i ikiye bölüp yuvarladın: 105 : 2 ≈ 53. Karekök almak ikiye bölmek değildir."
  ],
  aciklama: `Bir karekökün en yakın doğal sayısını bulmak için kök içindeki sayıyı iki tam kare arasına yerleştirir, hangisine daha yakın olduğuna bakarız.
Adım 1: 10^{2} = 100 ve 11^{2} = 121'dir; 100 < 105 < 121 olduğundan 10 < √{105} < 11'dir.
Adım 2: Uzaklıklara bak: 105 − 100 = 5 ve 121 − 105 = 16.
Adım 3: 105, 100'e daha yakındır; bu yüzden √{105} sayısı 10'a daha yakındır.
Sağlama: 10,2^{2} = 104,04 olduğundan √{105} sayısı yaklaşık 10,2'dir.
Sık yapılan hata: Sayıyı ikiye bölmek. 105 : 2 = 52,5 ile karekök arasında bir ilişki yoktur.
Cevap A.`
},
{
  id: "mat-kk-137",
  kazanim: "M.8.1.3.8",
  kademe: 1,
  zorluk: 1,
  soru: "**√{14} sayısı ile ilgili aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Bir doğal sayıdır.",
    "Sonlu bir ondalık sayıdır.",
    "Devirli bir ondalık sayıdır.",
    "İrrasyonel bir sayıdır."
  ],
  dogru: 3,
  hatalar: [
    "14 tam kare olmadığından √{14} bir doğal sayı değildir; 3 ile 4 arasındadır.",
    "Sonlu ondalık sayılar rasyoneldir. Tam kare olmayan bir sayının karekökü sonlu olarak bitmez.",
    "Devirli ondalık sayılar da rasyoneldir. √{14} sayısının ondalık gösterimi hiçbir zaman tekrar etmez.",
    null
  ],
  aciklama: `Tam kare olmayan bir doğal sayının karekökü iki tam sayının oranı olarak yazılamaz; böyle sayılara irrasyonel sayı denir.
Adım 1: 3^{2} = 9 ve 4^{2} = 16'dır. 14 bu ikisinin arasında kaldığı için tam kare değildir.
Adım 2: Bu yüzden √{14} bir doğal sayı değildir ve iki tam sayının oranı olarak yazılamaz.
Adım 3: Ondalık gösterimi (3,7416…) ne biter ne de düzenli olarak tekrar eder; yani irrasyoneldir.
Sağlama: 3,74^{2} ≈ 13,99 olduğundan √{14} yaklaşık 3,74'tür; 3 ile 4 arasındadır.
Sık yapılan hata: Hesap makinesinde görülen birkaç basamağı sayının tamamı sanmak.
Cevap D.`
},
{
  id: "mat-kk-138",
  kazanim: "M.8.1.3.5",
  kademe: 1,
  zorluk: 1,
  soru: "**6√{2} − 2√{2} + √{2} işleminin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["3√{2}", "5√{2}", "7√{2}", "9√{2}"],
  dogru: 1,
  hatalar: [
    "Son terimi de çıkarma gibi işleme aldın: 6 − 2 − 1 = 3. Üçüncü terimin işareti artıdır.",
    null,
    "İşaretleri karıştırdın: 6 + 2 − 1 = 7. Önce 2√{2} çıkarılıyor, √{2} ise ekleniyor.",
    "Bütün terimleri topladın: 6 + 2 + 1 = 9. İkinci terimin işareti eksidir."
  ],
  aciklama: `Kök içleri aynı olan terimlerde katsayılar işaretleriyle birlikte toplanır, kök içi aynen kalır. Katsayısı yazılmamış √{2} ifadesi 1√{2} demektir.
Adım 1: Üç terimin de kök içi 2'dir; yani aynı cinstendirler.
Adım 2: Katsayıları işaretleriyle işleme koy: 6 − 2 + 1 = 5.
Adım 3: Kök içini aynen yaz: 5√{2}.
Sağlama: √{2} ≈ 1,41 alırsak 8,49 − 2,83 + 1,41 ≈ 7,07 olur; 5√{2} ≈ 7,07. Uyuyor.
Sık yapılan hata: Yazılmamış katsayıyı 0 saymak ya da işaretleri karıştırmak. √{2} = 1√{2}'dir.
Cevap B.`
},
{
  id: "mat-kk-139",
  kazanim: "M.8.1.3.7",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdaki sayılardan hangisinin karekökü sonlu bir ondalık sayıdır?**",
  gorsel: null,
  secenekler: ["0,06", "0,12", "0,18", "0,25"],
  dogru: 3,
  hatalar: [
    "0,06 = [[6|100]] olur ve 6 tam kare değildir; √{0,06} sonlu bir ondalık sayı değildir.",
    "0,12 = [[12|100]] olur ve 12 tam kare değildir; √{0,12} sonlu bir ondalık sayı değildir.",
    "0,18 = [[18|100]] olur ve 18 tam kare değildir; √{0,18} sonlu bir ondalık sayı değildir.",
    null
  ],
  aciklama: `Bir ondalık sayının karekökünün sonlu bir ondalık sayı olması için sayıyı kesre çevirdiğinde payın ve paydanın tam kare olması gerekir.
Adım 1: Şıkları payda 100 olacak biçimde kesre çevir: 0,06 = [[6|100]], 0,12 = [[12|100]], 0,18 = [[18|100]], 0,25 = [[25|100]].
Adım 2: Paylara bak: 6, 12 ve 18 tam kare değildir; 25 = 5^{2} tam karedir. Payda 100 = 10^{2} zaten tam karedir.
Adım 3: Yani √{0,25} = [[5|10]] = 0,5'tir.
Sağlama: 0,5 · 0,5 = 0,25.
Sık yapılan hata: Küçük sayıların karekökünü de "kısa" sanmak. Önemli olan sayının tam kare bir kesre dönüşmesidir.
Cevap D.`
},
{
  id: "mat-kk-140",
  kazanim: "M.8.1.3.3",
  kademe: 1,
  zorluk: 1,
  soru: "Bir öğrenci 5√{2} ifadesini √{n} biçiminde yazmıştır.\n**Buna göre n kaçtır?**",
  gorsel: null,
  secenekler: ["50", "25", "10", "7"],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca katsayının karesini aldın: 5^{2} = 25. Bu sayıyı kök içindeki 2 ile çarpmayı unuttun.",
    "Katsayıyla kök içini doğrudan çarptın: 5 · 2 = 10. Katsayı kök içine karesi alınarak girer.",
    "Katsayıyla kök içini topladın: 5 + 2 = 7."
  ],
  aciklama: `Bir kareköklü ifadede katsayıyı kök içine alırken katsayının karesi alınır ve kök içindeki sayıyla çarpılır: a√{b} = √{a^{2} · b}.
Adım 1: Katsayı 5, kök içindeki sayı 2'dir.
Adım 2: Katsayının karesini al: 5^{2} = 25.
Adım 3: Kök içindeki sayıyla çarp: 25 · 2 = 50. Yani 5√{2} = √{50} ve n = 50'dir.
Sağlama: √{50} = √{25 · 2} = 5√{2}.
Sık yapılan hata: Katsayıyı karesini almadan kök içine sokmak.
Cevap A.`
},
{
  id: "mat-kk-141",
  kazanim: "M.8.1.3.1",
  kademe: 1,
  zorluk: 1,
  soru: "Kenar uzunluğu a olan bir karenin kenarları 3 katına çıkarılarak yeni bir kare elde ediliyor.\n**Buna göre yeni karenin alanı, ilk karenin alanının kaç katıdır?**",
  gorsel: `<svg viewBox="0 0 420 215" role="img" aria-label="Kenarı a olan küçük kare ve kenarı 3a olan büyük kare."><text x="65" y="88" font-size="15" text-anchor="middle" fill="currentColor">İlk kare</text><rect x="40" y="100" width="50" height="50" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="65" y="176" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">a</text><text x="245" y="20" font-size="15" text-anchor="middle" fill="currentColor">Yeni kare</text><rect x="170" y="30" width="150" height="150" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="245" y="204" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">3a</text></svg>`,
  secenekler: ["3", "6", "9", "12"],
  dogru: 2,
  hatalar: [
    "Alanın da kenarla aynı oranda arttığını sandın. Alan, kenarın karesiyle orantılıdır: (3a)^{2} = 9a^{2}.",
    "Kenar sayısını ya da 3 · 2 işlemini kullandın. Kareyi almak, sayıyı 2 ile çarpmak değildir.",
    null,
    "3 · 4 hesabı yaptın (kenar sayısı ile çarptın). Alan için kenar kendisiyle çarpılır."
  ],
  aciklama: `Karenin alanı kenarın karesidir: A = a^{2}. Kenar k katına çıkarsa alan k^{2} katına çıkar.
Adım 1: İlk karenin alanı a · a = a^{2}'dir.
Adım 2: Yeni karenin kenarı 3a olduğundan alanı 3a · 3a = 9a^{2}'dir.
Adım 3: 9a^{2} : a^{2} = 9. Alan 9 katına çıkar.
Sağlama: a = 2 alırsan ilk alan 4, yeni kenar 6 ve yeni alan 36 olur; 36 : 4 = 9.
Sık yapılan hata: Kenar 3 katına çıkınca alanın da 3 katına çıktığını sanmak.
Cevap C.`
},
{
  id: "mat-kk-142",
  kazanim: "M.8.1.3.6",
  kademe: 1,
  zorluk: 1,
  soru: "**3√{5} ifadesi aşağıdaki sayılardan hangisiyle çarpılırsa sonuç bir doğal sayı olur?**",
  gorsel: null,
  secenekler: ["√{3}", "√{5}", "√{6}", "√{15}"],
  dogru: 1,
  hatalar: [
    "3√{5} · √{3} = 3√{15} olur; 15 tam kare olmadığından sonuç doğal sayı değildir.",
    null,
    "3√{5} · √{6} = 3√{30} olur; 30 tam kare olmadığından sonuç doğal sayı değildir.",
    "3√{5} · √{15} = 3√{75} = 15√{3} olur; kök içinde 3 kalır, sonuç doğal sayı değildir."
  ],
  aciklama: `Bir kareköklü ifadeyi doğal sayıya çevirmek için kök içindeki sayıyı tam kare yapacak çarpan gerekir.
Adım 1: Katsayı 3 zaten bir doğal sayıdır; sorun kök içindeki 5'tedir.
Adım 2: 5'i tam kare yapan çarpan 5'in kendisidir: √{5} · √{5} = 5.
Adım 3: 3√{5} · √{5} = 3 · 5 = 15 olur; bu bir doğal sayıdır.
Sağlama: Diğer şıklarda kök içinde 15, 30 ya da 3 kalır; hiçbiri doğal sayı vermez.
Sık yapılan hata: Katsayıyı hesaba katıp çarpanı 3 ile ilişkilendirmek. Kökü yok eden, kök içindeki sayıdır.
Cevap B.`
},
{
  id: "mat-kk-143",
  kazanim: "M.8.1.3.6",
  kademe: 1,
  zorluk: 1,
  soru: "**√{72 · a} ifadesinin değerinin bir doğal sayı olması için a'nın alabileceği en küçük sıfırdan farklı doğal sayı değeri kaçtır?**",
  gorsel: null,
  secenekler: ["2", "3", "6", "12"],
  dogru: 0,
  hatalar: [
    null,
    "72 = 2^{3} · 3^{2} olduğundan 3'ün üssü zaten çifttir. 72 · 3 = 216 tam kare değildir.",
    "72 · 6 = 432 = 2^{4} · 3^{3} olur; 3'ün üssü tek kaldığı için tam kare değildir.",
    "72 · 12 = 864 = 2^{5} · 3^{3} olur; üsler tek kaldığı için tam kare değildir."
  ],
  aciklama: `Kök içindeki sayı tam kare olduğunda karekök bir doğal sayı olur. Bir sayı, asal çarpanlarının bütün üsleri çiftse tam karedir.
Adım 1: 72'yi asal çarpanlarına ayır: 72 = 2^{3} · 3^{2}.
Adım 2: Üssü tek olan çarpan 2'dir (3'ün üssü çifttir). 2'yi bir kez daha çarparsan üssü 4 olur.
Adım 3: En küçük değer a = 2'dir: 72 · 2 = 144 = 12^{2} ve √{144} = 12.
Sağlama: a = 1 için 72 tam kare değildir, a = 2 için 144 tam karedir; yani sıfırdan farklı en küçük değer 2'dir. (Soruda "sıfırdan farklı" denmiştir, çünkü a = 0 için de √{0} = 0 bulunur.)
Sık yapılan hata: Çarpanların hepsini çarpmak (6) ya da en büyük çarpanı seçmek. Yalnızca tek üslü çarpanı tamamla.
Cevap A.`
},
{
  id: "mat-kk-144",
  kazanim: "M.8.1.3.2",
  kademe: 1,
  zorluk: 1,
  soru: "Kare biçimli bir fotoğrafın alanı 150 cm²'dir.\n**Buna göre bu fotoğrafın bir kenar uzunluğu hangi iki ardışık doğal sayı arasındadır?**",
  gorsel: `<svg viewBox="0 0 420 235" role="img" aria-label="Kare biçimli fotoğraf; alanı 150 santimetrekare, bir kenar uzunluğu soruluyor."><rect x="100" y="22" width="160" height="160" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="180" y="96" font-size="16" text-anchor="middle" fill="currentColor">Fotoğraf</text><text x="180" y="124" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 150 cm²</text><line x1="100" y1="199" x2="260" y2="199" stroke="var(--vurgu)" stroke-width="2"/><text x="180" y="222" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">? cm</text></svg>`,
  secenekler: ["14 ile 15", "13 ile 14", "12 ile 13", "11 ile 12"],
  dogru: 2,
  hatalar: [
    "14^{2} = 196 ve 15^{2} = 225'tir; 150 bu iki sayının arasında değil, ikisinden de küçüktür.",
    "13^{2} = 169 ve 14^{2} = 196'dır; 150 bu aralığın altında kalır.",
    null,
    "11^{2} = 121 ve 12^{2} = 144'tür; 150 > 144 olduğundan kenar 12'den büyüktür."
  ],
  aciklama: `Kare biçimli bir yüzeyin kenar uzunluğu, alanının kareköküdür: kenar = √{150} cm. Kenarı bulmak için 150'yi iki tam kare arasına yerleştiririz.
Adım 1: 150'ye yakın kareleri yaz: 12^{2} = 144 ve 13^{2} = 169.
Adım 2: 144 < 150 < 169 olduğundan 12 < √{150} < 13'tür.
Adım 3: Kenar 12 ile 13 cm arasındadır.
Sağlama: 12,2^{2} = 148,84 olduğundan kenar yaklaşık 12,2 cm'dir; 12 ile 13 arasındadır.
Sık yapılan hata: Alanı doğrudan kenar sanmak. 150 bir alan değeridir; kenar için karekök alınır.
Cevap C.`
},
{
  id: "mat-kk-145",
  kazanim: "M.8.1.3.4",
  kademe: 1,
  zorluk: 1,
  soru: "**15√{14} ÷ 5√{7} işleminin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["75√{2}", "20√{2}", "3√{7}", "3√{2}"],
  dogru: 3,
  hatalar: [
    "Katsayıları bölmek yerine çarptın: 15 · 5 = 75.",
    "Katsayıları bölmek yerine topladın: 15 + 5 = 20.",
    "Kök içlerini bölmek yerine çıkardın: 14 − 7 = 7. Bölmede kök içleri bölünür.",
    null
  ],
  aciklama: `Kareköklü ifadeler bölünürken katsayılar katsayılara, kök içleri kök içlerine bölünür.
Adım 1: Katsayıları böl: 15 : 5 = 3.
Adım 2: Kök içlerini böl: √{14} : √{7} = √{14 : 7} = √{2}.
Adım 3: Sonuçları birleştir: 3√{2}.
Sağlama: Bölümü bölenle çarp: 3√{2} · 5√{7} = 15√{14}. Başladığın ifadeye ulaştın.
Sık yapılan hata: Bölme işlemini çıkarma ya da toplama gibi yapmak. Bölmede de katsayılar ve kök içleri ayrı ayrı bölünür.
Cevap D.`
},
{
  id: "mat-kk-146",
  kazanim: "M.8.1.3.7",
  kademe: 1,
  zorluk: 1,
  soru: "Bir sensörün ölçtüğü değer √{6,25} birimdir.\n**Buna göre ölçülen değer kaç birimdir?**",
  gorsel: null,
  secenekler: ["0,25", "2,5", "3,125", "25"],
  dogru: 1,
  hatalar: [
    "Virgülü yanlış kaydırdın. 6,25'te virgülden sonra iki basamak var; karekökte bir basamak olmalı. 0,25 · 0,25 = 0,0625 eder.",
    null,
    "Karekök almak yerine 6,25'i ikiye böldün: 6,25 : 2 = 3,125.",
    "Virgülü yok sayıp √{625} = 25 yazdın. 25 · 25 = 625 eder, 6,25 değil."
  ],
  aciklama: `Ondalık sayının karekökünü bulmak için sayıyı kesre çevirir, payın ve paydanın karekökünü ayrı ayrı alırsın.
Adım 1: Kesre çevir: 6,25 = [[625|100]].
Adım 2: Kareköklerini al: √{625} = 25 ve √{100} = 10.
Adım 3: Sonucu yaz: [[25|10]] = 2,5.
Sağlama: 2,5 · 2,5 = 6,25.
Sık yapılan hata: Virgülü yanlış yere koymak. Karekökte virgülden sonraki basamak sayısı yarıya iner (iki basamak, bir basamağa).
Cevap B.`
},
{
  id: "mat-kk-147",
  kazanim: "M.8.1.3.3",
  kademe: 1,
  zorluk: 1,
  soru: "**√{245} sayısı aşağıdakilerden hangisine eşittir?**",
  gorsel: null,
  secenekler: ["49√{5}", "7√{35}", "7√{5}", "5√{7}"],
  dogru: 2,
  hatalar: [
    "49'u karekök almadan dışarı çıkardın. Dışarı çıkan sayı √{49} = 7 olmalıdır.",
    "245 = 7 · 35 ayrımında 7 tam kare olmadığı için dışarı çıkamaz; ayrımdaki tam kare çarpan 49'dur.",
    null,
    "Çarpanların yerini karıştırdın: 245 = 49 · 5'te dışarı çıkan √{49} = 7'dir, 5 değil. 5√{7} = √{175} eder."
  ],
  aciklama: `Bir karekökü sadeleştirmek için kök içini, biri tam kare olan iki çarpana ayırırız; tam karenin karekökü kök dışına çıkar.
Adım 1: 245'i tam kare bir çarpanla yaz: 245 = 49 · 5.
Adım 2: Kökü ayır: √{245} = √{49} · √{5}.
Adım 3: √{49} = 7 olduğundan sonuç 7√{5}'tir.
Sağlama: 7√{5} ifadesini geri kök içine al: 7^{2} · 5 = 49 · 5 = 245.
Sık yapılan hata: Dışarı tam karenin kendisini ya da çarpanların yerini değiştirerek yazmak. Dışarı çıkan sayı, tam kare çarpanın kareköküdür.
Cevap C.`
},
{
  id: "mat-kk-148",
  kazanim: "M.8.1.3.8",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdaki ifadelerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Her irrasyonel sayı bir gerçek sayıdır.",
    "Her gerçek sayı bir rasyonel sayıdır.",
    "Hiçbir rasyonel sayı bir gerçek sayı değildir.",
    "Bir irrasyonel sayı aynı zamanda rasyonel sayıdır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "√{2} gerçek bir sayıdır ama rasyonel değildir. Gerçek sayılar, rasyonel ve irrasyonel sayıların birleşimidir.",
    "Rasyonel sayılar da gerçek sayıların bir parçasıdır; gerçek sayılar kümesi onları da içerir.",
    "Bir sayı hem rasyonel hem irrasyonel olamaz; bu iki kümenin ortak elemanı yoktur."
  ],
  aciklama: `Gerçek sayılar, rasyonel sayılarla irrasyonel sayıların birleşiminden oluşur.
Adım 1: Rasyonel sayıların hepsi gerçek sayıdır; irrasyonel sayıların hepsi de gerçek sayıdır.
Adım 2: Ama gerçek sayıların hepsi rasyonel değildir: √{2} gerçek sayıdır, rasyonel değildir.
Adım 3: Bir sayı hem rasyonel hem irrasyonel olamaz; yani "bir irrasyonel sayı rasyoneldir" ifadesi yanlıştır. Doğru olan, "Her irrasyonel sayı bir gerçek sayıdır" ifadesidir.
Sağlama: π irrasyoneldir ve sayı doğrusu üzerinde bir noktaya karşılık gelir; yani gerçek sayıdır.
Sık yapılan hata: "Her" ve "hiçbir" sözcüklerini görünce ifadeyi yanlış saymak. Doğrusu, ifadenin gerçekten her durumda geçerli olup olmadığına bakmaktır.
Cevap A.`
},
{
  id: "mat-kk-149",
  kazanim: "M.8.1.3.5",
  kademe: 1,
  zorluk: 1,
  soru: "**√{32} − √{2} işleminin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["5√{2}", "4√{2}", "√{30}", "3√{2}"],
  dogru: 3,
  hatalar: [
    "Çıkarma yerine toplama yaptın: 4 + 1 = 5.",
    "√{32} = 4√{2} sadeleştirmesini yaptın ama √{2} terimini çıkarmayı unuttun.",
    "Kök içlerini çıkardın: 32 − 2 = 30. Kök içleri birbirinden çıkarılmaz; önce sadeleştirilir.",
    null
  ],
  aciklama: `Çıkarma yapabilmek için kök içleri aynı olmalıdır. Bu yüzden önce her terim sadeleştirilir.
Adım 1: √{32}'yi sadeleştir: 32 = 16 · 2 olduğundan √{32} = 4√{2}.
Adım 2: √{2} = 1√{2} olduğunu hatırla.
Adım 3: Katsayıları çıkar: 4 − 1 = 3. Sonuç 3√{2}'dir.
Sağlama: √{32} ≈ 5,66 ve √{2} ≈ 1,41'dir. Farkları 4,25 civarındadır; 3√{2} ≈ 4,24. Uyuyor.
Sık yapılan hata: √{32} − √{2} = √{30} sanmak. Kökte bu kural yoktur.
Cevap D.`
},
/* ===================== Düzey 2 (kimlik 150 ve sonrası) ===================== */
{
  id: "mat-kk-150",
  kazanim: "M.8.1.3.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir matematik kulübünde, kareköklerinin 6 ile 7 arasında olduğu doğal sayılar için birer kart hazırlanmaktadır. Her doğal sayıya bir kart yapılacaktır.\n**Buna göre kaç kart hazırlanır?**",
  gorsel: null,
  secenekler: ["11", "12", "13", "14"],
  dogru: 1,
  hatalar: [
    "48 − 37 = 11 işlemini yaptın. İki ucu da sayarken farka 1 eklemelisin.",
    null,
    "49 − 36 = 13 hesabı yaptın. 36 ve 49'un kareköklerinin tam sayı (6 ve 7) olduğunu unuttun; bu iki sayı aralığa girmez.",
    "49 − 36 + 1 = 14 buldun; yani 36 ve 49'u da kapsadın. Oysa 'arasında' sınırları kapsamaz."
  ],
  aciklama: `Karekökü iki sayı arasında olan doğal sayıları bulmak için bu sayıların karelerine bakarız.
Adım 1: 6 < √{x} < 7 eşitsizliğinin her tarafının karesini al: 36 < x < 49.
Adım 2: x'in alabileceği değerler 37, 38, …, 48'dir. İki ucu dahil bir aralıktaki sayıların adedi büyük − küçük + 1'dir: 48 − 37 + 1 = 12.
Adım 3: Demek ki 12 kart hazırlanır.
Sağlama: √{36} = 6 ve √{49} = 7 tam sayıdır; "arasında" dendiği için bu iki sayı sayılmaz. 37 ve 48 ise aralıktadır.
Sık yapılan hata: Sınırı dahil etmek ya da farka 1 eklemeyi unutmak.
Cevap B.`
},
{
  id: "mat-kk-151",
  kazanim: "M.8.1.3.7",
  kademe: 1,
  zorluk: 2,
  soru: "Bir el sanatları atölyesinde, kenar uzunluğu √{0,64} metre olan kare biçimli bir nakış işi hazırlanmıştır. Nakışın dört kenarı boyunca, hiç boşluk kalmayacak biçimde dantel dikilecektir.\n**Buna göre gereken dantel kaç metredir?**",
  gorsel: `<svg viewBox="0 0 420 240" role="img" aria-label="Kare biçimli nakış işi; bir kenarı kök 0,64 metre, dört kenarı boyunca dantel dikilecek."><text x="180" y="20" font-size="15" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">dantel (dört kenar boyunca)</text><rect x="95" y="32" width="170" height="170" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="4" stroke-dasharray="9 5"/><text x="180" y="110" font-size="16" text-anchor="middle" fill="currentColor">Nakış işi</text><text x="180" y="136" font-size="15" text-anchor="middle" fill="currentColor">(kare biçimli)</text><text x="180" y="228" font-size="16" text-anchor="middle" fill="var(--vurgu2)" font-weight="bold">Bir kenar: √0,64 m</text></svg>`,
  secenekler: ["0,32", "0,8", "2,56", "3,2"],
  dogru: 3,
  hatalar: [
    "√{0,64} = 0,08 sandın (virgülü yanlış kaydırdın) ve 4 ile çarptın: 4 · 0,08 = 0,32. Doğrusu 0,8'dir.",
    "Kenar uzunluğunu buldun ve orada durdun. 0,8 m tek bir kenardır; dört kenar için 4 ile çarpmalısın.",
    "Karekök almayı atladın: 4 · 0,64 = 2,56. Kenar uzunluğu zaten √{0,64} = 0,8 m'dir.",
    null
  ],
  aciklama: `Kare biçimli nakışın kenarı √{0,64} m'dir. Dantelin uzunluğu nakışın çevresi, yani kenarın 4 katıdır.
Adım 1: Kenarı bul. 0,64 = [[64|100]] olduğundan √{0,64} = [[8|10]] = 0,8 m.
Adım 2: Dört kenarın toplamını hesapla: 4 · 0,8 = 3,2 m.
Sağlama: 0,8 · 0,8 = 0,64 olduğundan kenar doğrudur. 0,8 + 0,8 + 0,8 + 0,8 = 3,2.
Sık yapılan hata: Kenarı bulunca durmak. Soru çevreyi istiyorsa son adımda 4 ile çarpmayı unutma.
Cevap D.`
},
{
  id: "mat-kk-152",
  kazanim: "M.8.1.3.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir çiftlikte kare biçimli iki sera bulunmaktadır. Seraların alanları aşağıdaki şekilde verilmiştir.\n**Buna göre büyük seranın çevresi, küçük seranın çevresinden kaç metre fazladır?**",
  gorsel: `<svg viewBox="0 0 460 205" role="img" aria-label="Kare biçimli iki sera: küçüğün alanı 49 metrekare, büyüğün alanı 169 metrekare."><rect x="60" y="90" width="70" height="70" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="95" y="120" font-size="14" text-anchor="middle" fill="currentColor">Sera 1</text><text x="95" y="142" font-size="14" text-anchor="middle" fill="currentColor" font-weight="bold">49 m²</text><rect x="240" y="30" width="130" height="130" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="305" y="88" font-size="16" text-anchor="middle" fill="currentColor">Sera 2</text><text x="305" y="114" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">169 m²</text><text x="230" y="192" font-size="15" text-anchor="middle" fill="currentColor">İki sera da kare biçimlidir.</text></svg>`,
  secenekler: ["218", "120", "24", "6"],
  dogru: 2,
  hatalar: [
    "İki alanı topladın: 169 + 49 = 218. Soru alanları değil, çevrelerin farkını soruyor.",
    "Alanların farkını aldın: 169 − 49 = 120. Çevre için önce karekök alıp kenarları bulmalısın.",
    null,
    "Kenarların farkını buldun (13 − 7 = 6) ve orada durdun. Çevre dört kenarın toplamı olduğundan farkı 4 ile çarpmalısın."
  ],
  aciklama: `Karenin kenarı alanının kareköküdür; çevresi ise kenarın 4 katıdır.
Adım 1: Küçük seranın kenarı √{49} = 7 m, büyük seranın kenarı √{169} = 13 m'dir.
Adım 2: Çevreler: 4 · 7 = 28 m ve 4 · 13 = 52 m.
Adım 3: Fark: 52 − 28 = 24 m.
Sağlama: Aynı sonucu 4 · (13 − 7) = 4 · 6 = 24 ile de bulursun.
Sık yapılan hata: Alanlarla işlem yapıp kareköke geçmemek ya da kenar farkında durmak.
Cevap C.`
},
{
  id: "mat-kk-153",
  kazanim: "M.8.1.3.3",
  kademe: 1,
  zorluk: 2,
  soru: "Kare biçimli bir çıkartmanın bir kenarı √{72} cm'dir. Bu kenar uzunluğu a√{b} biçiminde yazılmıştır; burada a ve b doğal sayıdır ve b mümkün olan en küçük değeri almıştır.\n**Buna göre a + b toplamı kaçtır?**",
  gorsel: `<svg viewBox="0 0 420 225" role="img" aria-label="Kare biçimli çıkartma; bir kenarı kök 72 santimetre."><rect x="95" y="22" width="160" height="160" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="175" y="98" font-size="16" text-anchor="middle" fill="currentColor">Çıkartma</text><text x="175" y="124" font-size="15" text-anchor="middle" fill="currentColor">(kare biçimli)</text><line x1="95" y1="197" x2="255" y2="197" stroke="var(--vurgu)" stroke-width="2"/><text x="175" y="218" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">√72 cm</text></svg>`,
  secenekler: ["8", "11", "20", "38"],
  dogru: 0,
  hatalar: [
    null,
    "72 = 9 · 8 ayrımını yaptın ve 3√{8} yazdın; ama 8'in içinde hâlâ tam kare çarpan (4) var, b en küçük değerini almadı. 3 + 8 = 11.",
    "72 = 4 · 18 ayrımını yaptın ve 2√{18} yazdın; ama 18'in içinde hâlâ tam kare çarpan (9) var. 2 + 18 = 20.",
    "36'yı karekök almadan dışarı çıkardın: 36√{2} yazıp 36 + 2 = 38 buldun. Dışarı çıkan sayı √{36} = 6 olmalıdır."
  ],
  aciklama: `b'nin en küçük olması, kök içinde hiç tam kare çarpan kalmaması demektir. Bunun için en büyük tam kare çarpan dışarı çıkarılır.
Adım 1: 72'nin en büyük tam kare çarpanını bul: 72 = 36 · 2.
Adım 2: Kökü ayır ve tam kareyi dışarı çıkar: √{72} = √{36} · √{2} = 6√{2}. Yani a = 6 ve b = 2.
Adım 3: Toplamı hesapla: a + b = 6 + 2 = 8.
Sağlama: 6^{2} · 2 = 36 · 2 = 72. Kök içine geri alınca √{72} elde edilir.
Sık yapılan hata: Küçük bir tam kareyle durmak (2√{18} ya da 3√{8} gibi). Kök içinde tam kare çarpan kaldıkça sadeleştirme bitmemiştir.
Cevap A.`
},
{
  id: "mat-kk-154",
  kazanim: "M.8.1.3.6",
  kademe: 1,
  zorluk: 2,
  soru: "Bir sayı makinesine girilen sayı, makinenin içindeki gizli sayıyla çarpılarak çıkış ekranına yazılmaktadır. Makineye 2√{3} girildiğinde ekranda 12 görülmüştür.\n**Buna göre makinenin içindeki gizli sayı aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 480 150" role="img" aria-label="Sayı makinesi: girişte 2 kök 3, makinede gizli çarpan, çıkışta 12."><text x="75" y="38" font-size="15" text-anchor="middle" fill="currentColor">Giriş</text><rect x="20" y="50" width="110" height="50" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="75" y="83" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold">2√3</text><line x1="132" y1="75" x2="188" y2="75" stroke="currentColor" stroke-width="2"/><polygon points="188,75 178,69 178,81" fill="currentColor"/><rect x="190" y="35" width="100" height="80" rx="6" fill="none" stroke="var(--vurgu)" stroke-width="3"/><text x="240" y="68" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">Makine</text><text x="240" y="94" font-size="15" text-anchor="middle" fill="currentColor">çarpan: ?</text><line x1="292" y1="75" x2="348" y2="75" stroke="currentColor" stroke-width="2"/><polygon points="348,75 338,69 338,81" fill="currentColor"/><text x="405" y="38" font-size="15" text-anchor="middle" fill="currentColor">Çıkış</text><rect x="350" y="50" width="110" height="50" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="405" y="83" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold">12</text></svg>`,
  secenekler: ["6", "3√{3}", "2√{3}", "√{3}"],
  dogru: 2,
  hatalar: [
    "2√{3} · 6 = 12√{3} olur, 12 değil. 12 : 2 = 6 yapıp kök çarpanını hesaba katmadın.",
    "2√{3} · 3√{3} = 6 · 3 = 18 olur, 12 değil.",
    null,
    "2√{3} · √{3} = 2 · 3 = 6 olur, 12 değil."
  ],
  aciklama: `Gizli sayıyı bulmak için şıkları 2√{3} ile çarpıp sonucun 12 olup olmadığına bakarız. Kökü yok edecek çarpan √{3} kadar bir kök içermelidir.
Adım 1: √{3} · √{3} = 3 olduğundan çarpanın √{3} içermesi gerekir; 6 şıkkı bu yüzden elenir.
Adım 2: √{3} şıkkını dene: 2√{3} · √{3} = 2 · 3 = 6 (12 değil). 3√{3} şıkkını dene: 2√{3} · 3√{3} = 6 · 3 = 18 (12 değil).
Adım 3: 2√{3} şıkkını dene: 2√{3} · 2√{3} = 4 · 3 = 12. Tutuyor.
Sağlama: Bir sayı kendisiyle çarpılınca kare olur: (2√{3})^{2} = 4 · 3 = 12.
Sık yapılan hata: 12 : 2 = 6 deyip kökü unutmak. Çarpan kökü de içerir.
Cevap C.`
},
{
  id: "mat-kk-155",
  kazanim: "M.8.1.3.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir sergide kutular 31'den 199'a kadar numaralandırılmıştır. Numarası tam kare olan kutuların üzerine kırmızı etiket yapıştırılacaktır.\n**Buna göre kaç kutuya kırmızı etiket yapıştırılır?**",
  gorsel: null,
  secenekler: ["8", "9", "10", "14"],
  dogru: 1,
  hatalar: [
    "14 − 6 = 8 işlemini yaptın. İki ucu da sayarken farka 1 eklemelisin.",
    null,
    "25 = 5^{2} sayısını da saydın; oysa 25 < 31 olduğundan kutu numaraları arasında değildir.",
    "En büyük tam karenin kökünü (14) kutu sayısı sandın. 1'den 5'e kadar olanların kareleri 31'den küçüktür ve sayılmaz."
  ],
  aciklama: `Tam kare numaraları bulmak için hangi doğal sayıların karesinin 31 ile 199 arasında kaldığına bakarız.
Adım 1: 5^{2} = 25 < 31 ve 6^{2} = 36 > 31 olduğundan ilk tam kare 6^{2} = 36'dır.
Adım 2: 14^{2} = 196 ≤ 199 ve 15^{2} = 225 > 199 olduğundan son tam kare 14^{2} = 196'dır.
Adım 3: Tam kareler 6^{2}, 7^{2}, …, 14^{2}'dir; sayısı 14 − 6 + 1 = 9'dur.
Sağlama: 36, 49, 64, 81, 100, 121, 144, 169, 196 olmak üzere 9 sayı sayılır.
Sık yapılan hata: Farkı alıp 1 eklemeyi unutmak ya da aralığın dışındaki bir kareyi saymak.
Cevap B.`
},
{
  id: "mat-kk-156",
  kazanim: "M.8.1.3.8",
  kademe: 1,
  zorluk: 2,
  soru: "Bir matematik kulübü, aşağıdaki tabloda gösterilen beş kartı 'rasyonel' ve 'irrasyonel' olarak ayıracaktır.\n**Buna göre bu kartlardan kaç tanesinin üzerindeki sayı irrasyoneldir?**",
  gorsel: `<table class="tablo"><tr><th>Kart</th><th>P</th><th>R</th><th>S</th><th>T</th><th>U</th></tr><tr><td>Üzerindeki sayı</td><td>√49</td><td>√0,64</td><td>√12</td><td>√1,6</td><td>3,14</td></tr></table>`,
  secenekler: ["2", "3", "4", "5"],
  dogru: 0,
  hatalar: [
    null,
    "√{0,64} sayısını da irrasyonel saydın; oysa 0,64 = [[64|100]] olduğundan √{0,64} = 0,8'dir ve rasyoneldir.",
    "Kök işareti taşıyan her sayıyı irrasyonel saydın. √{49} = 7 ve √{0,64} = 0,8 rasyoneldir.",
    "Hepsini irrasyonel saydın. 3,14 sayısı [[314|100]] biçiminde yazılabildiği için rasyoneldir; π'nin yaklaşık değeridir, π değildir."
  ],
  aciklama: `Rasyonel sayı iki tam sayının oranı olarak yazılabilen sayıdır. Kök içindeki sayı (ondalıksa kesre çevrilince pay ve payda) tam kare değilse karekök irrasyoneldir.
Adım 1: P: √{49} = 7 → rasyonel. R: 0,64 = [[64|100]], √{0,64} = 0,8 → rasyonel.
Adım 2: S: 12 tam kare değildir → √{12} irrasyonel. T: 1,6 = [[160|100]] ve 160 tam kare değildir → √{1,6} irrasyonel.
Adım 3: U: 3,14 = [[314|100]] → rasyonel.
Adım 4: İrrasyonel olanlar S ve T'dir; yani 2 tanedir.
Sağlama: S ve T dışındaki üç kartın değeri (7; 0,8; 3,14) sonlu ondalık sayıdır.
Sık yapılan hata: Kök işaretini ya da virgülü irrasyonellik işareti sanmak.
Cevap A.`
},
{
  id: "mat-kk-157",
  kazanim: "M.8.1.3.2",
  kademe: 1,
  zorluk: 2,
  soru: "Üç ip parçasının uzunlukları √{40} cm, 7 cm ve √{50} cm'dir.\n**Buna göre bu ip parçalarının uzunlukları küçükten büyüğe doğru aşağıdakilerden hangisi gibi sıralanır?**",
  gorsel: null,
  secenekler: [
    "7 < √{40} < √{50}",
    "7 < √{50} < √{40}",
    "√{40} < √{50} < 7",
    "√{40} < 7 < √{50}"
  ],
  dogru: 3,
  hatalar: [
    "7 sayısını √{40}'tan küçük sandın. 7 = √{49} ve 49 > 40 olduğundan 7, √{40}'tan büyüktür.",
    "Hem 7'yi hem √{50} ile √{40}'ın sırasını yanlış belirledin. Kök içi büyük olan karekök de büyüktür: √{40} < √{50}.",
    "7 sayısını √{50}'den büyük sandın. 7 = √{49} ve 49 < 50 olduğundan 7, √{50}'den küçüktür.",
    null
  ],
  aciklama: `Bir doğal sayıyla kareköklü sayıyı karşılaştırmak için doğal sayıyı da kök biçiminde yazarız: a = √{a^{2}}.
Adım 1: 7'yi kök içine al: 7 = √{49}.
Adım 2: Üç sayı artık √{40}, √{49} ve √{50}'dir. Kök içi büyük olan karekök de büyüktür.
Adım 3: 40 < 49 < 50 olduğundan √{40} < 7 < √{50}'dir.
Sağlama: √{40} ≈ 6,32 ve √{50} ≈ 7,07'dir; 6,32 < 7 < 7,07.
Sık yapılan hata: 7 sayısını kök içindeki sayılarla (40 ve 50) doğrudan kıyaslamak. Önce 7'yi √{49} yaz.
Cevap D.`
},
{
  id: "mat-kk-158",
  kazanim: "M.8.1.3.4",
  kademe: 1,
  zorluk: 2,
  soru: "**8√{40} ÷ 2√{10} işleminin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["4", "8", "16", "4√{30}"],
  dogru: 1,
  hatalar: [
    "Katsayıları böldün (8 : 2 = 4) ama kök içlerinin bölümü √{4} = 2'yi çarpmayı unuttun.",
    null,
    "√{4} işlemini 4 sandın (4 · 4 = 16). Oysa √{4} = 2'dir.",
    "Kök içlerini bölmek yerine çıkardın: 40 − 10 = 30. Bölmede kök içleri bölünür."
  ],
  aciklama: `Kareköklü ifadeler bölünürken katsayılar katsayılara, kök içleri kök içlerine bölünür.
Adım 1: Katsayıları böl: 8 : 2 = 4.
Adım 2: Kök içlerini böl: √{40} : √{10} = √{40 : 10} = √{4} = 2.
Adım 3: Sonuçları çarp: 4 · 2 = 8.
Sağlama: 2√{10} · 8 = 16√{10} ve 8√{40} = 8 · 2√{10} = 16√{10}. İkisi eşit.
Sık yapılan hata: Bölme sonunda ortaya çıkan √{4}'ü hesaplamayı unutmak ya da √{4} = 4 sanmak.
Cevap B.`
},
{
  id: "mat-kk-159",
  kazanim: "M.8.1.3.7",
  kademe: 1,
  zorluk: 2,
  soru: "Kare biçimli bir deney levhasının alanı 0,36 m²'dir.\n**Buna göre bu levhanın bir kenarı kaç santimetredir?**",
  gorsel: `<svg viewBox="0 0 420 225" role="img" aria-label="Kare biçimli deney levhası; alanı 0,36 metrekare, bir kenarı santimetre cinsinden soruluyor."><rect x="95" y="20" width="160" height="160" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="175" y="92" font-size="16" text-anchor="middle" fill="currentColor">Deney levhası</text><text x="175" y="120" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 0,36 m²</text><line x1="95" y1="196" x2="255" y2="196" stroke="var(--vurgu)" stroke-width="2"/><text x="175" y="218" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">? cm</text></svg>`,
  secenekler: ["6", "36", "60", "600"],
  dogru: 2,
  hatalar: [
    "√{0,36} = 0,6 m buldun ama 0,6 m'yi 6 cm sandın. 1 m = 100 cm olduğundan 0,6 m = 60 cm'dir.",
    "Karekök almadan 0,36 sayısını 36 ile değiştirdin. Önce karekök alıp kenarı metre cinsinden bulmalısın.",
    null,
    "0,6 m'yi 1 000 ile çarptın. 1 m = 100 cm olduğundan 0,6 m = 60 cm'dir."
  ],
  aciklama: `Kare biçimli levhanın kenarı alanının kareköküdür. Sonuç metre cinsinden çıkar; santimetreye çevirmek için 100 ile çarpılır.
Adım 1: Kenarı bul: 0,36 = [[36|100]] olduğundan √{0,36} = [[6|10]] = 0,6 m.
Adım 2: Metreyi santimetreye çevir: 0,6 · 100 = 60 cm.
Sağlama: 60 · 60 = 3 600 cm² ve 1 m² = 10 000 cm² olduğundan 3 600 cm² = 0,36 m²'dir.
Sık yapılan hata: Birim çevirmeyi atlamak ya da yanlış katsayıyla yapmak. 1 m = 100 cm'dir.
Cevap C.`
},
{
  id: "mat-kk-160",
  kazanim: "M.8.1.3.1",
  kademe: 1,
  zorluk: 2,
  soru: "Kare biçimli bir satranç tahtası, her birinin kenarı 4 cm olan 64 eş kareden oluşmaktadır.\n**Buna göre tahtanın bir kenar uzunluğu kaç cm'dir?**",
  gorsel: `<svg viewBox="0 0 420 240" role="img" aria-label="Kare biçimli satranç tahtası 64 eş kareden oluşur; küçük karenin kenarı 4 santimetre, tahtanın kenarı soruluyor."><rect x="50" y="20" width="170" height="170" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="135" y="98" font-size="16" text-anchor="middle" fill="currentColor">Satranç tahtası</text><text x="135" y="124" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">64 eş kare</text><line x1="50" y1="207" x2="220" y2="207" stroke="var(--vurgu)" stroke-width="2"/><text x="135" y="230" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">? cm</text><rect x="270" y="50" width="44" height="44" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="292" y="78" font-size="14" text-anchor="middle" fill="currentColor" font-weight="bold">4 cm</text><text x="292" y="120" font-size="14" text-anchor="middle" fill="currentColor">Her karenin</text><text x="292" y="140" font-size="14" text-anchor="middle" fill="currentColor">kenarı</text></svg>`,
  secenekler: ["8", "16", "32", "256"],
  dogru: 2,
  hatalar: [
    "Bir kenardaki kare sayısını buldun (√{64} = 8) ve orada durdun. Her karenin kenarı 4 cm olduğundan 8 · 4 gerekir.",
    "4 · 4 işlemini yaptın. Tahtanın bir kenarında 4 değil 8 kare vardır.",
    null,
    "Kare sayısını 4 ile çarptın: 64 · 4 = 256. Bu, 64 karenin birer kenarının toplamıdır; tahtanın kenarı değildir."
  ],
  aciklama: `Kare biçimli bir dizilimde, bütün karelerin sayısının karekökü bir kenardaki kare sayısını verir.
Adım 1: Bir kenardaki kare sayısı √{64} = 8'dir.
Adım 2: Her karenin kenarı 4 cm olduğundan tahtanın kenarı 8 · 4 = 32 cm olur.
Sağlama: Tahtanın alanı 32 · 32 = 1 024 cm²'dir. 64 karenin alanı 64 · (4 · 4) = 64 · 16 = 1 024 cm²'dir. İkisi eşit.
Sık yapılan hata: Kenardaki kare sayısını bulunca durmak. Sorulan uzunluktur, kare sayısı değil.
Cevap C.`
},
{
  id: "mat-kk-161",
  kazanim: "M.8.1.3.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir bitkinin boyu dün √{48} dm, bugün √{75} dm olarak ölçülmüştür.\n**Buna göre bitki bir günde kaç dm uzamıştır?**",
  gorsel: `<svg viewBox="0 0 460 150" role="img" aria-label="Bir bitkinin dünkü boyu kök 48, bugünkü boyu kök 75 desimetre; iki çubuk uzunlukları karşılaştırıyor."><text x="84" y="52" font-size="15" text-anchor="end" fill="currentColor">dün</text><rect x="90" y="30" width="277" height="30" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="100" y="51" font-size="15" fill="currentColor" font-weight="bold">√48 dm</text><text x="84" y="112" font-size="15" text-anchor="end" fill="currentColor">bugün</text><rect x="90" y="90" width="346" height="30" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="100" y="111" font-size="15" fill="currentColor" font-weight="bold">√75 dm</text></svg>`,
  secenekler: ["9√{3}", "√{123}", "3√{3}", "√{3}"],
  dogru: 3,
  hatalar: [
    "Toplama yaptın: 4√{3} + 5√{3} = 9√{3}. Uzama, iki boyun farkıdır.",
    "Kök içlerini topladın: 48 + 75 = 123. Kök içleri toplanmaz; fark için de çıkarma gerekir.",
    "Kök içlerini çıkardın: 75 − 48 = 27 ve √{27} = 3√{3} buldun. Kök içleri birbirinden çıkarılmaz; önce sadeleştirilir.",
    null
  ],
  aciklama: `Uzama miktarı, bugünkü boy ile dünkü boyun farkıdır. Kareköklü ifadelerde fark almak için önce terimler sadeleştirilir.
Adım 1: Dünkü boy: √{48} = √{16 · 3} = 4√{3} dm.
Adım 2: Bugünkü boy: √{75} = √{25 · 3} = 5√{3} dm.
Adım 3: Kök içleri aynı olduğundan katsayıları çıkar: 5 − 4 = 1. Uzama 1√{3} = √{3} dm'dir.
Sağlama: √{48} ≈ 6,93 ve √{75} ≈ 8,66'dır; fark yaklaşık 1,73, √{3} ≈ 1,73. Uyuyor.
Sık yapılan hata: √{75} − √{48} = √{27} sanmak. Bu kural yoktur; √{27} ≈ 5,2 olup gerçek farktan çok büyüktür.
Cevap D.`
},
{
  id: "mat-kk-162",
  kazanim: "M.8.1.3.1",
  kademe: 1,
  zorluk: 2,
  soru: "Kenar uzunluğu 20 cm olan kare biçimli bir kâğıdın bir köşesine, alanı 225 cm² olan kare biçimli bir parça kenarları çakışacak biçimde yerleştirilmiştir. Kâğıdın parçanın dışında kalan kısmı, şekilde görüldüğü gibi eş genişlikte iki şerit oluşturmaktadır.\n**Buna göre şeritlerin genişliği kaç cm'dir?**",
  gorsel: `<svg viewBox="0 0 420 250" role="img" aria-label="Kenarı 20 santimetre olan kare kâğıt; sol üst köşedeki parçanın alanı 225 santimetrekare, sağ ve alt şeritlerin genişliği soruluyor."><rect x="60" y="20" width="180" height="180" fill="none" stroke="currentColor" stroke-width="3"/><rect x="60" y="20" width="135" height="135" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/><text x="127" y="82" font-size="16" text-anchor="middle" fill="currentColor">Parça</text><text x="127" y="108" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">225 cm²</text><text x="218" y="115" font-size="16" text-anchor="middle" fill="var(--vurgu2)" font-weight="bold">?</text><text x="127" y="183" font-size="16" text-anchor="middle" fill="var(--vurgu2)" font-weight="bold">?</text><line x1="60" y1="216" x2="240" y2="216" stroke="currentColor" stroke-width="2"/><text x="150" y="238" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">20 cm</text></svg>`,
  secenekler: ["5", "15", "35", "175"],
  dogru: 0,
  hatalar: [
    null,
    "Parçanın kenarını buldun (√{225} = 15) ama bunu kâğıdın kenarından çıkarmadan cevap yazdın. Şerit genişliği 20 − 15'tir.",
    "Kenarları topladın: 20 + 15 = 35. Şerit genişliği, büyük kenardan küçük kenar çıkarılarak bulunur.",
    "Alanları çıkardın: 400 − 225 = 175. Bu, şeritlerin toplam alanıdır; genişlik değildir."
  ],
  aciklama: `Parçanın kenarı alanının kareköküdür. Şeritlerin genişliği, kâğıdın kenarı ile parçanın kenarının farkıdır.
Adım 1: Parçanın kenarı √{225} = 15 cm'dir (15 · 15 = 225).
Adım 2: Kâğıdın kenarı 20 cm olduğundan şerit genişliği 20 − 15 = 5 cm'dir.
Sağlama: 15 + 5 = 20 olduğundan parça ile şerit genişliği birlikte kâğıdın kenarını doldurur. Parçanın dışında kalan alan 400 − 225 = 175 cm²'dir.
Sık yapılan hata: Parçanın kenarını bulup orada durmak ya da alan farkını genişlik sanmak.
Cevap A.`
},
{
  id: "mat-kk-163",
  kazanim: "M.8.1.3.4",
  kademe: 1,
  zorluk: 2,
  soru: "Dikdörtgenler prizması biçimindeki bir kutunun ayrıt uzunlukları şekilde verilmiştir.\n**Buna göre bu kutunun hacmi kaç dm³'tür?**",
  gorsel: `<svg viewBox="0 0 420 235" role="img" aria-label="Dikdörtgenler prizması biçiminde kutu: uzunluk kök 8, yükseklik kök 3, derinlik kök 6 desimetre."><polygon points="70,80 130,35 290,35 230,80" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><polygon points="230,80 290,35 290,125 230,170" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><rect x="70" y="80" width="160" height="90" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="150" y="198" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">√8 dm</text><text x="62" y="130" font-size="16" text-anchor="end" fill="var(--vurgu)" font-weight="bold">√3 dm</text><text x="298" y="68" font-size="16" fill="var(--vurgu)" font-weight="bold">√6 dm</text></svg>`,
  secenekler: ["√{17}", "12", "72", "144"],
  dogru: 1,
  hatalar: [
    "Kök içlerini topladın: 6 + 8 + 3 = 17. Hacim için ayrıtlar çarpılır, toplanmaz.",
    null,
    "Kök içlerini çarptın (144) ve karekök almak yerine ikiye bölüp 72 buldun. Karekök almak ikiye bölmek değildir.",
    "Kök içlerini doğru çarptın (6 · 8 · 3 = 144) ama karekökü almayı unuttun. Hacim √{144} = 12 dm³'tür."
  ],
  aciklama: `Dikdörtgenler prizmasının hacmi, üç ayrıtının çarpımıdır. Kareköklü ifadelerin çarpımında kök içleri çarpılır.
Adım 1: Hacmi yaz: V = √{6} · √{8} · √{3}.
Adım 2: Kök içlerini çarp: 6 · 8 · 3 = 144. Yani V = √{144}.
Adım 3: Karekökü al: √{144} = 12 dm³.
Sağlama: √{6} · √{3} = √{18} = 3√{2} ve √{8} = 2√{2} olduğundan 3√{2} · 2√{2} = 6 · 2 = 12.
Sık yapılan hata: Son karekökü almayı unutmak. 144 bir sonuç değil, kök içindeki çarpımdır.
Cevap B.`
},
{
  id: "mat-kk-164",
  kazanim: "M.8.1.3.6",
  kademe: 1,
  zorluk: 2,
  soru: "Bir sayı oyununda ekranda √{24} sayısı görünmektedir. Dört oyuncu, tabloda gösterilen çarpanlardan birini seçip ekrandaki sayıyı bu çarpanla çarpmıştır. Sonucu bir doğal sayı çıkan oyuncu puan kazanacaktır.\n**Buna göre puan kazanan oyuncu kimdir?**",
  gorsel: `<table class="tablo"><tr><th>Oyuncu</th><th>Ayşe</th><th>Berk</th><th>Cem</th><th>Deniz</th></tr><tr><td>Seçtiği çarpan</td><td>3√2</td><td>2√3</td><td>5</td><td>√6</td></tr></table>`,
  secenekler: ["Ayşe", "Berk", "Cem", "Deniz"],
  dogru: 3,
  hatalar: [
    "√{24} · 3√{2} = 3√{48} = 12√{3} olur; kök içinde 3 kalır.",
    "√{24} · 2√{3} = 2√{72} = 12√{2} olur; kök içinde 2 kalır.",
    "√{24} · 5 = 5√{24} = 10√{6} olur. Bir doğal sayıyla çarpmak kökü yok etmez.",
    null
  ],
  aciklama: `Sonucun doğal sayı olması için kök içindeki çarpımın tam kare olması gerekir.
Adım 1: √{24} sayısını sadeleştir: √{24} = 2√{6}. Kökü yok etmek için kök içinde bir 6 daha gerekir.
Adım 2: Ayşe: 2√{6} · 3√{2} = 6√{12} = 12√{3}. Berk: 2√{6} · 2√{3} = 4√{18} = 12√{2}. Cem: 2√{6} · 5 = 10√{6}. Üçünde de kök kalır.
Adım 3: Deniz: 2√{6} · √{6} = 2 · 6 = 12. Sonuç bir doğal sayıdır.
Sağlama: √{24} · √{6} = √{144} = 12.
Sık yapılan hata: Bir doğal sayıyla çarpmanın kökü yok edeceğini sanmak. Kökü yalnızca kök içini tamamlayan çarpan yok eder.
Cevap D.`
},
{
  id: "mat-kk-165",
  kazanim: "M.8.1.3.4",
  kademe: 1,
  zorluk: 2,
  soru: "Dikdörtgen biçimli bir güneş panelinin alanı ve bir kenarının uzunluğu şekilde verilmiştir.\n**Buna göre panelin diğer kenarı kaç dm'dir?**",
  gorsel: `<svg viewBox="0 0 460 215" role="img" aria-label="Dikdörtgen biçimli güneş paneli: alanı 20 kök 21 desimetrekare, bir kenarı 4 kök 3 desimetre, diğer kenarı soruluyor."><rect x="120" y="22" width="260" height="137" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="250" y="80" font-size="16" text-anchor="middle" fill="currentColor">Güneş paneli</text><text x="250" y="108" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 20√21 dm²</text><line x1="104" y1="22" x2="104" y2="159" stroke="var(--vurgu)" stroke-width="2"/><text x="98" y="97" font-size="16" text-anchor="end" fill="var(--vurgu)" font-weight="bold">4√3 dm</text><line x1="120" y1="176" x2="380" y2="176" stroke="var(--vurgu)" stroke-width="2"/><text x="250" y="200" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">? dm</text></svg>`,
  secenekler: ["5√{7}", "5√{18}", "16√{7}", "240√{7}"],
  dogru: 0,
  hatalar: [
    null,
    "Kök içlerini bölmek yerine çıkardın: 21 − 3 = 18. Bölmede kök içleri bölünür.",
    "Katsayıları bölmek yerine çıkardın: 20 − 4 = 16. Bölmede katsayılar bölünür.",
    "Bölme yerine çarpma yaptın: 20 · 4 = 80 ve √{21 · 3} = 3√{7}, yani 240√{7}. Bir kenarı bulmak için alan diğer kenara bölünür."
  ],
  aciklama: `Dikdörtgende bir kenar, alanın diğer kenara bölünmesiyle bulunur. Kareköklü ifadelerde katsayılar katsayılara, kök içleri kök içlerine bölünür.
Adım 1: Diğer kenarı yaz: [[20√{21}|4√{3}]].
Adım 2: Katsayıları böl: 20 : 4 = 5.
Adım 3: Kök içlerini böl: √{21} : √{3} = √{7}. Kenar 5√{7} dm'dir.
Sağlama: Kenarları çarp: 4√{3} · 5√{7} = 20√{21}. Alan yeniden elde edildi.
Sık yapılan hata: Bölme yerine çıkarma ya da çarpma yapmak.
Cevap A.`
},
{
  id: "mat-kk-166",
  kazanim: "M.8.1.3.3",
  kademe: 1,
  zorluk: 2,
  soru: "**3√{2} sayısı aşağıdaki hangi iki ardışık doğal sayı arasındadır?**",
  gorsel: null,
  secenekler: ["2 ile 3", "3 ile 4", "4 ile 5", "6 ile 7"],
  dogru: 2,
  hatalar: [
    "Katsayıyla kök içini çarpıp √{6} buldun (3 · 2). Katsayı kök içine karesi alınarak girer: 3^{2} · 2 = 18.",
    "√{2} sayısını 1 sanıp 3 · 1 = 3 buldun. Oysa √{2} ≈ 1,4'tür ve 3 · 1,4 ≈ 4,2'dir.",
    null,
    "√{2} yerine 2 yazdın: 3 · 2 = 6. Oysa √{2} ≈ 1,4'tür, 2 değil."
  ],
  aciklama: `Katsayılı bir kökün hangi iki doğal sayı arasında olduğunu bulmak için ifade önce tek bir kök altına alınır: a√{b} = √{a^{2} · b}.
Adım 1: Katsayıyı kök içine al: 3√{2} = √{3^{2} · 2} = √{18}.
Adım 2: 18'i iki tam kare arasına yerleştir: 4^{2} = 16 ve 5^{2} = 25; 16 < 18 < 25.
Adım 3: Yani 4 < √{18} < 5'tir. 3√{2} sayısı 4 ile 5 arasındadır.
Sağlama: 3 · 1,41 = 4,23 olduğundan sayı yaklaşık 4,2'dir.
Sık yapılan hata: Katsayıyı karesini almadan kök içine sokmak ya da √{2}'yi 1 veya 2 gibi yuvarlamak.
Cevap C.`
},
{
  id: "mat-kk-167",
  kazanim: "M.8.1.3.2",
  kademe: 1,
  zorluk: 2,
  soru: "√{30} ile √{60} sayıları bir sayı doğrusu üzerinde işaretlenmiştir.\n**Buna göre bu iki sayı arasında kaç tane tam sayı vardır?**",
  gorsel: null,
  secenekler: ["1", "2", "3", "4"],
  dogru: 1,
  hatalar: [
    "Yalnızca 6'yı saydın. √{60} sayısı 7'den büyük olduğundan 7 de bu iki sayının arasındadır.",
    null,
    "5, 6 ve 7'yi saydın. Oysa √{30} sayısı 5'ten büyüktür; 5 sayısı √{30}'un solunda kalır, arada değildir.",
    "5, 6, 7 ve 8'i saydın. √{30} > 5 ve √{60} < 8 olduğundan 5 ve 8 aralığın dışındadır."
  ],
  aciklama: `İki karekök arasındaki tam sayıları bulmak için her kökün hangi iki doğal sayı arasında kaldığına bakılır.
Adım 1: 25 < 30 < 36 olduğundan 5 < √{30} < 6'dır.
Adım 2: 49 < 60 < 64 olduğundan 7 < √{60} < 8'dir.
Adım 3: √{30}, 5 ile 6 arasında; √{60} ise 7 ile 8 arasındadır. İkisinin arasında kalan tam sayılar 6 ve 7'dir; yani 2 tanedir.
Sağlama: √{30} ≈ 5,5 ve √{60} ≈ 7,7'dir. 5,5 ile 7,7 arasında yalnızca 6 ve 7 vardır.
Sık yapılan hata: Uçların bulunduğu tam sayıları (5 ve 8) de saymak.
Cevap B.`
},
{
  id: "mat-kk-168",
  kazanim: "M.8.1.3.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir kurbağa, bir sıçrayışında √{98} cm, bir sonraki sıçrayışında √{32} cm ilerlemiştir.\n**Buna göre kurbağa iki sıçrayışta toplam kaç cm ilerlemiştir?**",
  gorsel: `<svg viewBox="0 0 420 155" role="img" aria-label="Kurbağa iki sıçrayış yapıyor: ilk sıçrayış kök 98 santimetre, ikinci sıçrayış kök 32 santimetre."><line x1="10" y1="108" x2="410" y2="108" stroke="currentColor" stroke-width="2"/><path d="M30 108 Q140 28 250 108" fill="none" stroke="var(--vurgu)" stroke-width="3"/><path d="M250 108 Q312 48 375 108" fill="none" stroke="var(--vurgu2)" stroke-width="3"/><circle cx="30" cy="108" r="5" fill="currentColor"/><circle cx="250" cy="108" r="5" fill="currentColor"/><circle cx="375" cy="108" r="5" fill="currentColor"/><text x="140" y="136" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">√98 cm</text><text x="312" y="136" font-size="16" text-anchor="middle" fill="var(--vurgu2)" font-weight="bold">√32 cm</text></svg>`,
  secenekler: ["√{130}", "11√{2}", "23√{2}", "28√{2}"],
  dogru: 1,
  hatalar: [
    "Kök içlerini topladın: 98 + 32 = 130. Kök içleri toplanmaz; önce sadeleştirilir.",
    null,
    "√{98} = 7√{2} doğru ama √{32} = 16√{2} sandın; 16'yı karekök almadan dışarı çıkardın. Doğrusu 4√{2}'dir.",
    "Katsayıları toplamak yerine çarptın: 7 · 4 = 28."
  ],
  aciklama: `Toplam ilerleme, iki sıçrayışın uzunluklarının toplamıdır. Kök içleri farklı görünen terimler önce sadeleştirilir.
Adım 1: √{98}'i sadeleştir: 98 = 49 · 2 olduğundan √{98} = 7√{2}.
Adım 2: √{32}'yi sadeleştir: 32 = 16 · 2 olduğundan √{32} = 4√{2}.
Adım 3: Kök içleri aynı olduğundan katsayıları topla: 7 + 4 = 11. Toplam 11√{2} cm'dir.
Sağlama: √{98} ≈ 9,90 ve √{32} ≈ 5,66'dır; toplam ≈ 15,56. 11√{2} ≈ 11 · 1,414 = 15,56. Uyuyor.
Sık yapılan hata: Sadeleştirmeden kök içlerini toplamak. √{98} + √{32} = √{130} değildir.
Cevap B.`
},
{
  id: "mat-kk-169",
  kazanim: "M.8.1.3.2",
  kademe: 1,
  zorluk: 2,
  soru: "Dört öğrenci, tabloda verilen sayıların hangi iki ardışık doğal sayı arasında olduğunu tahmin etmiştir.\n**Buna göre hangi öğrencinin tahmini doğrudur?**",
  gorsel: `<table class="tablo"><tr><th>Öğrenci</th><th>Sayı</th><th>Tahmini</th></tr><tr><td>Aslı</td><td>√70</td><td>8 ile 9 arasında</td></tr><tr><td>Berk</td><td>√40</td><td>5 ile 6 arasında</td></tr><tr><td>Cem</td><td>√90</td><td>8 ile 9 arasında</td></tr><tr><td>Duru</td><td>√120</td><td>11 ile 12 arasında</td></tr></table>`,
  secenekler: ["Aslı", "Berk", "Cem", "Duru"],
  dogru: 0,
  hatalar: [
    null,
    "6^{2} = 36 ve 7^{2} = 49 olduğundan √{40} sayısı 6 ile 7 arasındadır, 5 ile 6 arasında değildir.",
    "9^{2} = 81 ve 10^{2} = 100 olduğundan √{90} sayısı 9 ile 10 arasındadır, 8 ile 9 arasında değildir.",
    "10^{2} = 100 ve 11^{2} = 121 olduğundan √{120} sayısı 10 ile 11 arasındadır; 120 < 121 olduğu için 11'i geçemez."
  ],
  aciklama: `Her kök içindeki sayıyı iki tam kare arasına yerleştirip tahminleri tek tek denetleriz.
Adım 1: Aslı: 8^{2} = 64 ve 9^{2} = 81; 64 < 70 < 81 olduğundan √{70} sayısı 8 ile 9 arasındadır. Tahmin doğru.
Adım 2: Berk: 36 < 40 < 49 olduğundan √{40} sayısı 6 ile 7 arasındadır. Tahmin yanlış.
Adım 3: Cem: 81 < 90 < 100 olduğundan √{90} sayısı 9 ile 10 arasındadır. Duru: 100 < 120 < 121 olduğundan √{120} sayısı 10 ile 11 arasındadır. İkisi de yanlış.
Sağlama: 8,4^{2} = 70,56 olduğundan √{70} yaklaşık 8,4'tür; 8 ile 9 arasındadır.
Sık yapılan hata: Tam kareyi yanlış sayıyla eşleştirmek. Her zaman iki karenin değerini yaz ve karşılaştır.
Cevap A.`
},
{
  id: "mat-kk-170",
  kazanim: "M.8.1.3.6",
  kademe: 1,
  zorluk: 2,
  soru: "Bir atölyede, bir kenarı √{50} dm olan dikdörtgen biçimli beş farklı pano üretilmiştir. Panoların diğer kenar uzunlukları tabloda verilmiştir.\n**Buna göre bu panolardan kaç tanesinin alanı dm² cinsinden bir doğal sayıdır?**",
  gorsel: `<table class="tablo"><tr><th>Pano</th><th>K</th><th>L</th><th>M</th><th>N</th><th>P</th></tr><tr><td>Diğer kenar (dm)</td><td>√2</td><td>√8</td><td>√10</td><td>√18</td><td>√32</td></tr></table>`,
  secenekler: ["1", "2", "3", "4"],
  dogru: 3,
  hatalar: [
    "Yalnızca K panosunu doğru buldun. L, N ve P panolarının alanı da doğal sayıdır: √{50} · √{8} = 20, √{50} · √{18} = 30, √{50} · √{32} = 40.",
    "K ve L panolarını saydın. N ve P panoları da 2'nin tam kare katlarıdır (2 · 9 ve 2 · 16) ve alanları doğal sayıdır.",
    "P panosunu atladın: √{50} · √{32} = √{1 600} = 40 olduğundan bu panonun alanı da doğal sayıdır.",
    null
  ],
  aciklama: `Dikdörtgenin alanı iki kenarın çarpımıdır. 50 = 2 · 5^{2} olduğundan kök içinde eksik olan çarpan 2'dir. Diğer kenarın kök içi 2'nin tam kare katı olursa (2, 8, 18, 32, …) çarpım tam kare olur.
Adım 1: Her panonun alanını yaz: 50 · 2 = 100, 50 · 8 = 400, 50 · 10 = 500, 50 · 18 = 900, 50 · 32 = 1 600 (kök içinde).
Adım 2: Hangileri tam kare? 100 = 10^{2}, 400 = 20^{2}, 900 = 30^{2}, 1 600 = 40^{2}. 500 tam kare değildir (22^{2} = 484, 23^{2} = 529).
Adım 3: K, L, N ve P panolarının alanı doğal sayıdır (10, 20, 30, 40 dm²); M panosunun alanı √{500} = 10√{5} dm²'dir. Yani 4 pano.
Sağlama: 2, 8 = 2 · 4, 18 = 2 · 9 ve 32 = 2 · 16 olduğundan hepsi 2 · (tam kare) biçimindedir; 10 = 2 · 5 ise bu biçimde değildir.
Sık yapılan hata: Sayıların küçük ya da büyük olmasına bakıp kök içi çarpımı denetlememek.
Cevap D.`
},
{
  id: "mat-kk-171",
  kazanim: "M.8.1.3.3",
  kademe: 1,
  zorluk: 2,
  soru: "Bir hesap makinesi, bir doğal sayının karekökünü 4√{5} biçiminde göstermiştir.\n**Buna göre bu doğal sayı kaçtır?**",
  gorsel: null,
  secenekler: ["20", "25", "80", "400"],
  dogru: 2,
  hatalar: [
    "Katsayıyla kök içini çarptın: 4 · 5 = 20. Katsayı kök içine karesi alınarak girer.",
    "Kök içindeki 5'in karesini aldın (25) ve katsayıyı hiç hesaba katmadın.",
    null,
    "Hem katsayının hem kök içindeki sayının karesini aldın: 16 · 25 = 400. Kök içindeki sayının karesi alınmaz."
  ],
  aciklama: `Doğal sayıya n dersek √{n} = 4√{5} olur. Katsayıyı kök içine alınca n bulunur: a√{b} = √{a^{2} · b}.
Adım 1: Katsayının karesini al: 4^{2} = 16.
Adım 2: Kök içindeki sayıyla çarp: 16 · 5 = 80. Yani 4√{5} = √{80} ve n = 80'dir.
Sağlama: √{80} = √{16 · 5} = 4√{5}. Başladığın ifadeye ulaştın.
Sık yapılan hata: Kök içine katsayıyı karesini almadan koymak (20) ya da kök içindeki sayının da karesini almak (400).
Cevap C.`
},
{
  id: "mat-kk-172",
  kazanim: "M.8.1.3.5",
  kademe: 1,
  zorluk: 2,
  soru: "Üçgen biçimli bir yelkenin kenar uzunlukları şekilde verilmiştir. Yelkenin kenarlarına, çevresi boyunca bir takviye şeridi dikilecektir.\n**Buna göre kaç metre şerit gerekir?**",
  gorsel: `<svg viewBox="0 0 400 240" role="img" aria-label="Üçgen biçimli yelken: kenarları kök 18, kök 32 ve kök 50 metre."><polygon points="90,25 90,205 330,205" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="84" y="120" font-size="16" text-anchor="end" fill="var(--vurgu)" font-weight="bold">√18 m</text><text x="210" y="229" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">√32 m</text><text x="250" y="95" font-size="16" fill="var(--vurgu)" font-weight="bold">√50 m</text></svg>`,
  secenekler: ["60√{2}", "12√{2}", "12", "10"],
  dogru: 1,
  hatalar: [
    "Katsayıları toplamak yerine çarptın: 3 · 4 · 5 = 60.",
    null,
    "Katsayıları doğru topladın (3 + 4 + 5 = 12) ama √{2} çarpanını yazmayı unuttun.",
    "Kök içlerini topladın: 18 + 32 + 50 = 100 ve √{100} = 10 buldun. Kök içleri toplanmaz; önce sadeleştirilir."
  ],
  aciklama: `Gereken şerit uzunluğu üçgenin çevresidir, yani üç kenarın toplamıdır. Kök içleri farklı görünen terimler önce sadeleştirilir.
Adım 1: √{18} = √{9 · 2} = 3√{2}.
Adım 2: √{32} = √{16 · 2} = 4√{2}.
Adım 3: √{50} = √{25 · 2} = 5√{2}.
Adım 4: Kök içleri aynı olduğundan katsayıları topla: 3 + 4 + 5 = 12. Çevre 12√{2} m'dir.
Sağlama: 4,24 + 5,66 + 7,07 ≈ 16,97 ve 12 · 1,414 ≈ 16,97. Uyuyor.
Sık yapılan hata: Kök içlerini toplayıp 100 elde etmek. √{18} + √{32} + √{50} = √{100} değildir.
Cevap B.`
},
{
  id: "mat-kk-173",
  kazanim: "M.8.1.3.7",
  kademe: 1,
  zorluk: 2,
  soru: "Dikdörtgen biçimli bir katılım sertifikasının kenar uzunlukları şekilde verilmiştir.\n**Buna göre bu sertifikanın alanı kaç dm²'dir?**",
  gorsel: `<svg viewBox="0 0 420 215" role="img" aria-label="Dikdörtgen biçimli sertifika: uzun kenarı kök 0,49 desimetre, kısa kenarı kök 0,25 desimetre."><rect x="40" y="18" width="210" height="150" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="145" y="86" font-size="16" text-anchor="middle" fill="currentColor">Sertifika</text><text x="145" y="112" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: ? dm²</text><line x1="40" y1="184" x2="250" y2="184" stroke="var(--vurgu)" stroke-width="2"/><text x="145" y="206" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">√0,49 dm</text><line x1="266" y1="18" x2="266" y2="168" stroke="var(--vurgu)" stroke-width="2"/><text x="278" y="98" font-size="16" fill="var(--vurgu)" font-weight="bold">√0,25 dm</text></svg>`,
  secenekler: ["0,0035", "0,1225", "0,35", "1,2"],
  dogru: 2,
  hatalar: [
    "Kenarları 0,07 ve 0,05 buldun (virgülü yanlış kaydırdın): 0,07 · 0,05 = 0,0035. Doğru kenarlar 0,7 ve 0,5'tir.",
    "Karekök almadan kök içlerini çarptın: 0,49 · 0,25 = 0,1225. Önce kenarlar bulunmalıdır.",
    null,
    "Kenarları topladın: 0,7 + 0,5 = 1,2. Alan için kenarlar çarpılır."
  ],
  aciklama: `Dikdörtgenin alanı iki kenarının çarpımıdır. Ondalık gösterimin karekökünü bulmak için sayıyı kesre çevirip payın ve paydanın karekökünü ayrı ayrı alırız.
Adım 1: Uzun kenar: 0,49 = [[49|100]] olduğundan √{0,49} = [[7|10]] = 0,7 dm.
Adım 2: Kısa kenar: 0,25 = [[25|100]] olduğundan √{0,25} = [[5|10]] = 0,5 dm.
Adım 3: Alan: 0,7 · 0,5 = 0,35 dm².
Sağlama: √{0,49} · √{0,25} = √{0,1225} ve 0,35 · 0,35 = 0,1225. Uyuyor.
Sık yapılan hata: Kök içlerini çarpıp karekökü almayı unutmak (0,1225) ya da kenarları toplamak.
Cevap C.`
},
{
  id: "mat-kk-174",
  kazanim: "M.8.1.3.3",
  kademe: 1,
  zorluk: 2,
  soru: "Bir öğretmen tahtaya dört karşılaştırma yazmış ve öğrencilerden doğru olanı bulmalarını istemiştir.\n**Buna göre aşağıdaki karşılaştırmalardan hangisi doğrudur?**",
  gorsel: null,
  secenekler: ["2√{11} < 7", "3√{6} < 7", "4√{3} > 7", "5√{2} < 7"],
  dogru: 0,
  hatalar: [
    null,
    "3√{6} = √{54} ve 54 > 49 olduğundan 3√{6}, 7'den büyüktür; karşılaştırma yanlıştır.",
    "4√{3} = √{48} ve 48 < 49 olduğundan 4√{3}, 7'den küçüktür; karşılaştırma yanlıştır.",
    "5√{2} = √{50} ve 50 > 49 olduğundan 5√{2}, 7'den büyüktür; karşılaştırma yanlıştır."
  ],
  aciklama: `Katsayılı bir kökü bir doğal sayıyla karşılaştırmak için ikisini de tek bir kök altına alırız: a√{b} = √{a^{2} · b} ve 7 = √{49}.
Adım 1: 2√{11} = √{4 · 11} = √{44} < √{49} = 7. Karşılaştırma doğru.
Adım 2: 3√{6} = √{54} > √{49}, yani 3√{6} > 7. "<" yanlış.
Adım 3: 4√{3} = √{48} < √{49}, yani 4√{3} < 7. ">" yanlış. 5√{2} = √{50} > √{49}, yani 5√{2} > 7. "<" yanlış.
Sağlama: 2√{11} ≈ 2 · 3,32 = 6,63 < 7. Diğerleri: 3√{6} ≈ 7,35; 4√{3} ≈ 6,93; 5√{2} ≈ 7,07.
Sık yapılan hata: Yalnızca katsayıya bakıp karar vermek. Katsayısı büyük olan kök her zaman büyük olmaz.
Cevap A.`
},
{
  id: "mat-kk-175",
  kazanim: "M.8.1.3.4",
  kademe: 1,
  zorluk: 2,
  soru: "Dikdörtgen biçimli bir posterin kenar uzunlukları şekilde verilmiştir.\n**Buna göre posterin alanı en sade biçimde kaç dm²'dir?**",
  gorsel: `<svg viewBox="0 0 460 215" role="img" aria-label="Dikdörtgen biçimli poster: kısa kenarı 3 kök 2 desimetre, uzun kenarı 2 kök 10 desimetre."><rect x="110" y="20" width="210" height="141" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="215" y="82" font-size="16" text-anchor="middle" fill="currentColor">Poster</text><text x="215" y="108" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: ? dm²</text><line x1="96" y1="20" x2="96" y2="161" stroke="var(--vurgu)" stroke-width="2"/><text x="90" y="95" font-size="16" text-anchor="end" fill="var(--vurgu)" font-weight="bold">3√2 dm</text><line x1="110" y1="178" x2="320" y2="178" stroke="var(--vurgu)" stroke-width="2"/><text x="215" y="202" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">2√10 dm</text></svg>`,
  secenekler: ["5√{12}", "6√{20}", "24√{5}", "12√{5}"],
  dogru: 3,
  hatalar: [
    "Katsayıları (3 + 2 = 5) ve kök içlerini (2 + 10 = 12) topladın. Çarpmada katsayılar çarpılır, kök içleri çarpılır.",
    "Çarpımı doğru yaptın (6√{20}) ama sadeleştirmeyi yapmadın. √{20} = 2√{5} olduğundan 6√{20} = 12√{5}; soru en sade biçimi istiyor.",
    "20 = 4 · 5 ayrımında 4'ü karekök almadan dışarı çıkardın: 6 · 4 = 24. Dışarı çıkan sayı √{4} = 2 olmalıdır.",
    null
  ],
  aciklama: `Dikdörtgenin alanı iki kenarının çarpımıdır. Kareköklü ifadeleri çarparken katsayılar katsayılarla, kök içleri kök içleriyle çarpılır; sonuç sadeleştirilir.
Adım 1: Katsayıları çarp: 3 · 2 = 6.
Adım 2: Kök içlerini çarp: √{2} · √{10} = √{20}. Çarpım 6√{20} olur.
Adım 3: Sadeleştir: √{20} = √{4 · 5} = 2√{5}. Yani 6 · 2√{5} = 12√{5} dm².
Sağlama: 3√{2} ≈ 4,24 ve 2√{10} ≈ 6,32'dir; çarpımları ≈ 26,83. 12√{5} ≈ 12 · 2,236 = 26,83. Uyuyor.
Sık yapılan hata: Sadeleştirmeyi unutmak ya da dışarı çıkan çarpanın karekökünü almamak.
Cevap D.`
}
);
