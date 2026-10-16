// Matematik — Kareköklü İfadeler | Kademe 3 (LGS Ayarı) yedeği
// Kademe 3 yedek: mat-kk-326…375 (sıra 26-75) · 30 düzey 3 + 20 düzey 4
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["karekoklu-ifadeler"] = window.LGS_BANK["karekoklu-ifadeler"] || []).push(
{
  id: "mat-kk-326",
  kazanim: "M.8.1.3.7",
  kademe: 3,
  zorluk: 3,
  soru: "Bir terzi, kare biçimli bir mendil kumaşının dört kenarına dantel dikecektir. Kumaşın alanı ve dantelin fiyatı şekilde verilmiştir. Terzi, dantelin tamamını metre cinsinden hesaplayıp satın alacaktır.\n**Buna göre terzinin dantel için ödeyeceği tutar kaç TL'dir?**",
  gorsel: `<svg viewBox="0 0 460 200" role="img" aria-label="Alanı 0,49 metrekare olan kare biçimli mendil kumaşı; dantelin metresi 30 TL."><rect x="100" y="25" width="150" height="150" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="175" y="92" font-size="16" text-anchor="middle" fill="currentColor">Mendil kumaşı</text><text x="175" y="120" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 0,49 m²</text><text x="270" y="105" font-size="16" fill="var(--vurgu)" font-weight="bold">Dantel:</text><text x="270" y="127" font-size="16" fill="var(--vurgu)" font-weight="bold">30 TL / m</text></svg>`,
  secenekler: ["21", "84", "280", "840"],
  dogru: 1,
  hatalar: [
    "Yalnızca bir kenarın dantelini hesapladın: 0,7 · 30 = 21. Dantel kumaşın dört kenarına da dikilecek.",
    null,
    "Çevreyi doğru buldun (2,8 m = 280 cm) ama santimetre değerini TL gibi yazdın. Tutar için metre cinsinden çevre, metre fiyatıyla çarpılır.",
    "Kenarı 7 m aldın: √{0,49} değeri 0,7'dir, 7 değil. Virgülü yanlış kaydırınca çevre 28 m olur ve 28 · 30 = 840 çıkar."
  ],
  aciklama: `Kare biçimli bir yüzeyin kenarı alanın kareköküdür. Ondalık gösterimin karekökü, sayı kesre çevrilerek bulunur.
Adım 1: 0,49 = [[49|100]] olduğundan kenar √{0,49} = [[7|10]] = 0,7 m'dir.
Adım 2: Dantel dört kenara dikileceği için çevreyi bul: 4 · 0,7 = 2,8 m.
Adım 3: Tutarı hesapla: 2,8 · 30 = 84 TL.
Sağlama: 0,7 · 0,7 = 0,49 olduğundan kenar doğrudur; 2,8 m dantel 30 TL/m ile 84 TL eder.
Sık yapılan hata: Virgülü yanlış kaydırmak. 0,49'un karekökü 0,7'dir; 7 olsaydı alan 49 olurdu.
Cevap B.`
},
{
  id: "mat-kk-327",
  kazanim: "M.8.1.3.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir okulun gösteri ekibi 225 öğrenciden oluşmaktadır. Öğrenciler, sıra sayısı ile her sıradaki öğrenci sayısı birbirine eşit olacak biçimde kare düzende dizilmiştir. Gösterinin başında, ön taraftaki 6 sıra salondan ayrılıp sahneye çıkmıştır.\n**Buna göre salonda kalan öğrenci sayısı kaçtır?**",
  gorsel: `<svg viewBox="0 0 520 200" role="img" aria-label="Kare düzende dizilmiş 225 öğrenci; ön taraftaki 6 sıra sahneye çıkar."><g fill="var(--vurgu)"><circle cx="50" cy="35" r="7"/><circle cx="90" cy="35" r="7"/><circle cx="130" cy="35" r="7"/><circle cx="170" cy="35" r="7"/><circle cx="210" cy="35" r="7"/><circle cx="50" cy="70" r="7"/><circle cx="90" cy="70" r="7"/><circle cx="130" cy="70" r="7"/><circle cx="170" cy="70" r="7"/><circle cx="210" cy="70" r="7"/></g><g fill="currentColor"><circle cx="50" cy="115" r="7"/><circle cx="90" cy="115" r="7"/><circle cx="130" cy="115" r="7"/><circle cx="170" cy="115" r="7"/><circle cx="210" cy="115" r="7"/><circle cx="50" cy="150" r="7"/><circle cx="90" cy="150" r="7"/><circle cx="130" cy="150" r="7"/><circle cx="170" cy="150" r="7"/><circle cx="210" cy="150" r="7"/></g><text x="250" y="45" font-size="20" fill="currentColor">…</text><text x="250" y="130" font-size="20" fill="currentColor">…</text><text x="130" y="188" font-size="20" text-anchor="middle" fill="currentColor">⋮</text><text x="290" y="45" font-size="15" fill="var(--vurgu)" font-weight="bold">Ön 6 sıra sahneye çıkar</text><text x="290" y="110" font-size="15" fill="currentColor">Toplam: 225 öğrenci</text><text x="290" y="132" font-size="15" fill="currentColor">Sıra sayısı = bir sıradaki</text><text x="290" y="154" font-size="15" fill="currentColor">öğrenci sayısı</text></svg>`,
  secenekler: ["9", "81", "90", "135"],
  dogru: 3,
  hatalar: [
    "Salonda kalan sıra sayısını buldun (15 − 6 = 9) ama soru öğrenci sayısını soruyor. Her sırada 15 öğrenci vardır.",
    "Kalan sıra sayısının karesini aldın: 9 · 9 = 81. Kalan düzen artık kare değildir; her sırada hâlâ 15 öğrenci vardır.",
    "Sahneye çıkan öğrencileri hesapladın (6 · 15 = 90). Soru salonda kalanları soruyor.",
    null
  ],
  aciklama: `Kare düzende bir sıradaki sayı, toplamın kareköküdür. Ön sıralar ayrılsa da kalan her sırada aynı sayıda kişi bulunur.
Adım 1: Bir sıradaki öğrenci sayısı √{225} = 15'tir (15 · 15 = 225). Yani 15 sıra vardır.
Adım 2: Kalan sıra sayısı 15 − 6 = 9'dur.
Adım 3: Her sırada 15 öğrenci olduğundan kalan öğrenci sayısı 9 · 15 = 135'tir.
Sağlama: Sahneye çıkanlar 6 · 15 = 90 öğrencidir ve 90 + 135 = 225 eder. Toplam tutuyor.
Sık yapılan hata: Sıra sayısını öğrenci sayısıyla karıştırmak. Soru "kaç sıra" değil, "kaç öğrenci" soruyor.
Cevap D.`
},
{
  id: "mat-kk-328",
  kazanim: "M.8.1.3.8",
  kademe: 3,
  zorluk: 3,
  soru: "Bir sayı avı oyununda oyuncular, ellerindeki dört işlem kartından sonucu iki tam sayının oranı biçiminde yazılabilen kartı bulmaya çalışmaktadır. Kartların sonuçları hesap makinesi kullanılmadan bulunacaktır ve yalnızca bir kartın sonucu bu özelliğe sahiptir.\n**Buna göre hangi kartın sonucu iki tam sayının oranı biçiminde yazılabilir?**",
  gorsel: null,
  secenekler: ["√{8} · √{18}", "√{12} + √{3}", "√{50} : √{5}", "√{2} · √{3}"],
  dogru: 0,
  hatalar: [
    null,
    "Önce sadeleştirmeyi yaptın: √{12} + √{3} = 2√{3} + √{3} = 3√{3}. Kök içi tam kare olmadığından sonuç irrasyoneldir; iki tam sayının oranı olamaz.",
    "Kökleri bölünce √{50 : 5} = √{10} bulunur. 10 tam kare olmadığından sonuç irrasyoneldir.",
    "Kökleri çarpınca √{2 · 3} = √{6} bulunur. 6 tam kare olmadığından sonuç irrasyoneldir."
  ],
  aciklama: `İki tam sayının oranı biçiminde yazılabilen sayılara rasyonel sayı denir. Kök içi tam kare olmayan bir karekök irrasyoneldir; bu yüzden önce işlemi yapıp sonucun kök içine bakmalısın.
Adım 1: Birinci kart: √{8} · √{18} = √{144} = 12. Sonuç bir tam sayıdır; 12 = [[12|1]] biçiminde yazılabilir.
Adım 2: İkinci kart: 2√{3} + √{3} = 3√{3}. Kök içi 3, tam kare değildir.
Adım 3: Üçüncü kart √{10}, dördüncü kart √{6} verir. İkisinin de kök içi tam kare değildir.
Sağlama: Yalnızca birinci kartta kök işareti tamamen kalkmıştır.
Sık yapılan hata: İki irrasyonel sayının çarpımının da irrasyonel olacağını sanmak. √{8} · √{18} gibi çarpımlarda kök içleri tam kare olabilir.
Cevap A.`
},
{
  id: "mat-kk-329",
  kazanim: "M.8.1.3.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir sürücü kursunun kare biçimli deneme alanının büyüklüğü şekilde verilmiştir. Kurs müdürü, alanın dört kenarı boyunca iki sıra bariyer yerleştirecektir. Bariyer miktarını hesaplarken alanın bir kenar uzunluğunu, hesap makinesi kullanmadan, en yakın tam sayıya yuvarlayacaktır. Köşelerde bariyer kaybı olmayacaktır.\n**Buna göre müdürün hesapladığı toplam bariyer uzunluğu kaç metredir?**",
  gorsel: `<svg viewBox="0 0 520 220" role="img" aria-label="Kare biçimli deneme alanı; alanı 200 metrekare, bir kenarı soruluyor; dört kenar boyunca iki sıra bariyer konacak."><rect x="90" y="20" width="160" height="160" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="170" y="95" font-size="16" text-anchor="middle" fill="currentColor">Deneme alanı</text><text x="170" y="122" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 200 m²</text><line x1="90" y1="198" x2="250" y2="198" stroke="var(--vurgu)" stroke-width="2"/><text x="170" y="216" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">? m</text><text x="285" y="90" font-size="16" fill="var(--vurgu)" font-weight="bold">Dört kenar boyunca</text><text x="285" y="114" font-size="16" fill="var(--vurgu)" font-weight="bold">2 sıra bariyer</text></svg>`,
  secenekler: ["28", "56", "112", "120"],
  dogru: 2,
  hatalar: [
    "Yalnızca bir kenar için iki sıra hesapladın (2 · 14 = 28). Bariyer dört kenarın tamamına yerleştirilecek.",
    "Yalnızca bir sıra bariyer hesapladın (4 · 14 = 56). Bariyer iki sıra olacak, çevre 2 ile çarpılmalı.",
    null,
    "Kenarı 15'e yuvarladın (2 · 4 · 15 = 120). 200, 225'e değil 196'ya çok daha yakındır; kenar 14'e daha yakındır."
  ],
  aciklama: `Karekökü tahmin etmek için sayıyı en yakın iki tam kare arasına yerleştirir, hangisine daha yakın olduğuna bakarsın.
Adım 1: 200'ün komşu tam kareleri 14^{2} = 196 ve 15^{2} = 225'tir. 200 − 196 = 4 ve 225 − 200 = 25 olduğundan 200, 196'ya çok daha yakındır; kenar en yakın tam sayıya yuvarlanınca 14 m olur.
Adım 2: Bir sıra bariyer dört kenarı kapladığı için uzunluğu 4 · 14 = 56 m'dir.
Adım 3: İki sıra bariyer için 2 · 56 = 112 m gerekir.
Sağlama: Gerçek kenar yaklaşık 14,14 m'dir; iki sıra için yaklaşık 113 m gerekir. 112 buna çok yakındır.
Sık yapılan hata: 200'ü 225'e yakın sanıp kenarı 15 almak ya da iki sırayı unutup 56 bulmak.
Cevap C.`
},
{
  id: "mat-kk-330",
  kazanim: "M.8.1.3.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir mimar, bir yapı maketindeki sütunun yüksekliğini hesaplamış ve sonucu √{300} cm olarak bulmuştur. Maketi yapacak usta, ölçüyü a√{b} biçiminde, kök içindeki b sayısı mümkün olan en küçük doğal sayı olacak biçimde yazmak istemektedir.\n**Buna göre a + b toplamı kaçtır?**",
  gorsel: null,
  secenekler: ["3", "10", "13", "17"],
  dogru: 2,
  hatalar: [
    "Yalnızca kök içinde kalan sayıyı (3) cevap sandın. Soru a ile b'nin toplamını soruyor.",
    "Yalnızca dışarı çıkan sayıyı (10) cevap sandın. Soru a ile b'nin toplamını soruyor.",
    null,
    "√{300} = 5√{12} yazıp durdun (5 + 12 = 17). 12 = 4 · 3 olduğundan kök içinde hâlâ tam kare çarpan var; b mümkün olan en küçük sayı değil."
  ],
  aciklama: `Bir kareköklü ifadeyi sadeleştirmek için kök içini "en büyük tam kare · kalan" biçiminde yazar, tam kare çarpanın karekökünü dışarı çıkarırsın.
Adım 1: 300'ü en büyük tam kare çarpanla ayır: 300 = 100 · 3.
Adım 2: √{300} = √{100} · √{3} = 10√{3}. Böylece a = 10 ve b = 3 olur.
Adım 3: Toplamı bul: a + b = 10 + 3 = 13.
Sağlama: 10√{3} ifadesini kök içine al: 10^{2} · 3 = 300. Başladığın sayıya döndün.
Sık yapılan hata: Sadeleştirmeyi yarıda bırakmak. 5√{12} yazıldığında kök içi 12 = 4 · 3 olduğundan çalışma bitmemiştir.
Cevap C.`
},
{
  id: "mat-kk-331",
  kazanim: "M.8.1.3.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir mağazanın vitrininde, uzunlukları şekilde verilen üç ışıklı şerit uç uca, aralarında boşluk kalmayacak biçimde eklenecektir. Mağaza sahibi, vitrin genişliğine sığıp sığmayacağını anlamak için toplam şerit uzunluğunu en sade biçimde bulmak istemektedir.\n**Buna göre eklenen şeritlerin toplam uzunluğu kaç metredir?**",
  gorsel: `<svg viewBox="0 0 540 140" role="img" aria-label="Uç uca eklenen üç şerit: kök 48 metre, kök 27 metre ve kök 12 metre."><rect x="30" y="55" width="208" height="30" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="238" y="55" width="156" height="30" fill="none" stroke="var(--vurgu)" stroke-width="3"/><rect x="394" y="55" width="104" height="30" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="134" y="76" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">√48 m</text><text x="316" y="76" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">√27 m</text><text x="446" y="76" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">√12 m</text><text x="134" y="42" font-size="15" text-anchor="middle" fill="currentColor">1. şerit</text><text x="316" y="42" font-size="15" text-anchor="middle" fill="var(--vurgu)">2. şerit</text><text x="446" y="42" font-size="15" text-anchor="middle" fill="currentColor">3. şerit</text><text x="264" y="120" font-size="16" text-anchor="middle" fill="currentColor">Toplam: ? m</text></svg>`,
  secenekler: ["29√{3}", "9√{3}", "7√{3}", "√{87}"],
  dogru: 1,
  hatalar: [
    "Tam kare çarpanın karekökünü almadan dışarı çıkardın (√{48} = 16√{3}, √{27} = 9√{3}, √{12} = 4√{3}). Dışarı √{16} = 4, √{9} = 3 ve √{4} = 2 çıkmalıydı.",
    null,
    "Üçüncü şeridi toplamaya katmadın: 4√{3} + 3√{3} = 7√{3}. Üç şeridin hepsi eklenecek.",
    "Kök içlerini topladın: 48 + 27 + 12 = 87. Kareköklü ifadelerde önce sadeleştirilir, sonra katsayılar toplanır."
  ],
  aciklama: `Kareköklü ifadeler ancak kök içleri aynı olduğunda toplanabilir. Bu yüzden önce her terim sadeleştirilir.
Adım 1: √{48} = √{16 · 3} = 4√{3}.
Adım 2: √{27} = √{9 · 3} = 3√{3} ve √{12} = √{4 · 3} = 2√{3}.
Adım 3: Kök içleri aynı olduğundan katsayıları topla: 4 + 3 + 2 = 9. Toplam uzunluk 9√{3} metredir.
Sağlama: √{3} ≈ 1,73 alırsak 9√{3} ≈ 15,6; şeritler ≈ 6,9 + 5,2 + 3,5 = 15,6. Uyuyor.
Sık yapılan hata: Kök içlerini toplamak. √{48} + √{27} + √{12} ifadesi √{87} etmez.
Cevap B.`
},
{
  id: "mat-kk-332",
  kazanim: "M.8.1.3.4",
  kademe: 3,
  zorluk: 3,
  soru: "Bir kaykay parkında dikdörtgen biçimli bir rampanın tabanının alanı ve bir kenarı şekilde verilmiştir. Park yönetimi, tabanın tamamına kaydırmaz bant yapıştıracaktır ve bandı keserken tabanın diğer kenar uzunluğuna ihtiyaç duymaktadır.\n**Buna göre rampa tabanının diğer kenarı kaç metredir?**",
  gorsel: `<svg viewBox="0 0 470 210" role="img" aria-label="Dikdörtgen rampa tabanı: alan 18 kök 6 metrekare, bir kenar 3 kök 2 metre, diğer kenar soruluyor."><rect x="100" y="35" width="270" height="110" rx="4" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="235" y="86" font-size="16" text-anchor="middle" fill="currentColor">Rampa tabanı</text><text x="235" y="112" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 18√6 m²</text><line x1="100" y1="168" x2="370" y2="168" stroke="var(--vurgu)" stroke-width="2"/><text x="235" y="190" font-size="17" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">? m</text><line x1="80" y1="35" x2="80" y2="145" stroke="var(--vurgu)" stroke-width="2"/><text x="48" y="96" font-size="17" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">3√2 m</text></svg>`,
  secenekler: ["54√{3}", "15√{3}", "12", "6√{3}"],
  dogru: 3,
  hatalar: [
    "Katsayıları böleceğine çarptın (18 · 3 = 54). Alanı bir kenara bölerken katsayılar katsayılara bölünür.",
    "Katsayıları çıkardın: 18 − 3 = 15. Bölme işleminde katsayılar çıkarılmaz, bölünür.",
    "Katsayıları doğru böldün (18 : 3 = 6) ama kök içlerini çıkardın: √{6 − 2} = √{4} = 2. Kök içleri çıkarılmaz, bölünür.",
    null
  ],
  aciklama: `Dikdörtgenin alanı iki kenarının çarpımıdır; bu yüzden bilinmeyen kenar, alanın bilinen kenara bölümüdür. Kareköklü ifadelerde katsayılar katsayılara, kök içleri kök içlerine bölünür.
Adım 1: Bölmeyi yaz: 18√{6} : 3√{2}.
Adım 2: Katsayıları böl: 18 : 3 = 6.
Adım 3: Kök içlerini böl: √{6} : √{2} = √{6 : 2} = √{3}. Diğer kenar 6√{3} metredir.
Sağlama: 3√{2} · 6√{3} = 18√{6}. Alan tutuyor.
Sık yapılan hata: Bölmeyi çıkarma ya da çarpma gibi yapmak. Alan bilinen kenara bölünür.
Cevap D.`
},
{
  id: "mat-kk-333",
  kazanim: "M.8.1.3.6",
  kademe: 3,
  zorluk: 3,
  soru: "Bir terzi, dikdörtgen biçimli bir kumaş parçası kesecektir. Kumaşın bir kenarı √{45} dm, diğer kenarı √{k} dm olacaktır; burada k bir doğal sayıdır. Terzi, kumaşın alanının dm² cinsinden bir doğal sayı olmasını istemekte ve kumaşı en az kullanmak için k değerini mümkün olan en küçük sayı olarak seçmektedir.\n**Buna göre terzi k yerine hangi sayıyı seçmelidir?**",
  gorsel: null,
  secenekler: ["3", "5", "9", "45"],
  dogru: 1,
  hatalar: [
    "45 · 3 = 135 eder ve 135 tam kare değildir (135 = 3^{3} · 5; 3'ün ve 5'in üssü tek kalır). Alan doğal sayı olmaz.",
    null,
    "45 · 9 = 405 eder ve 405 tam kare değildir (405 = 3^{4} · 5; 5'in üssü tek kalır). 9'un tam kare olması çarpımı tam kare yapmaz.",
    "√{45} · √{45} = 45 gerçekten doğal sayı verir ama 45, en küçük değer değildir. Daha küçük bir k çarpımı tam kare yapar."
  ],
  aciklama: `Dikdörtgenin alanı kenarların çarpımıdır: √{45} · √{k} = √{45k}. Bu değerin doğal sayı olması için 45 · k çarpımının tam kare olması gerekir. Tam karede bütün asal çarpanların üsleri çifttir.
Adım 1: 45'i asal çarpanlarına ayır: 45 = 3^{2} · 5.
Adım 2: Üssü tek olan çarpan 5'tir. Çarpımı tam kare yapan en küçük k, bu çarpanı tamamlayan k = 5'tir.
Adım 3: Kontrol et: 45 · 5 = 225 = 15^{2}.
Sağlama: √{45} · √{5} = √{225} = 15; alan 15 dm² olur, doğal sayıdır.
Sık yapılan hata: Tam kare bir sayıyla çarparak kökten kurtulacağını sanmak. 45 · 9 = 405 tam kare değildir.
Cevap B.`
},
{
  id: "mat-kk-334",
  kazanim: "M.8.1.3.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir belediye, alanı 150 m² olan kare biçimli boş bir arsayı park olarak düzenleyecektir. Proje çizilirken arsanın bir kenar uzunluğunun hangi iki ardışık doğal sayı arasında olduğu ve bunlardan hangisine daha yakın olduğu not edilecektir.\n**Buna göre arsanın bir kenar uzunluğu için aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<svg viewBox="0 0 420 220" role="img" aria-label="Kare biçimli arsa; alanı 150 metrekare."><rect x="90" y="20" width="160" height="160" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="170" y="92" font-size="16" text-anchor="middle" fill="currentColor">Park arsası</text><text x="170" y="120" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 150 m²</text><line x1="90" y1="198" x2="250" y2="198" stroke="var(--vurgu)" stroke-width="2"/><text x="170" y="216" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">? m</text></svg>`,
  secenekler: ["11 ile 12 arasında, 12'ye daha yakın","12 ile 13 arasında, 12'ye daha yakın","12 ile 13 arasında, 13'e daha yakın","13 ile 14 arasında, 13'e daha yakın"],
  dogru: 1,
  hatalar: ["Alt sınırı yanlış seçtin: 12^{2} = 144 ve 144 < 150 olduğundan √{150}, 12'den büyüktür; 11 ile 12 arasında olamaz.",null,"Yakınlığı yanlış belirledin: 150, 144'e 6 birim, 169'a 19 birim uzaktır; bu yüzden √{150}, 13'e değil 12'ye daha yakındır.","Üst sınırı yanlış seçtin: 13^{2} = 169 ve 150 < 169 olduğundan √{150}, 13'ten küçüktür."],
  aciklama: "Kenar, alanın kareköküdür: √{150}. Tam kare olmayan bir sayının karekökü, iki ardışık doğal sayı arasındadır.\nAdım 1: 150'ye en yakın tam kareleri bul: 12^{2} = 144 ve 13^{2} = 169.\nAdım 2: 144 < 150 < 169 olduğundan 12 < √{150} < 13'tür.\nAdım 3: 150, 144'e 6 birim; 169'a 19 birim uzaktır. 144'e daha yakın olduğu için √{150} de 12'ye daha yakındır.\nSağlama: 12 ile 13'ün ortası 12,5'tir; 12,5^{2} = 156,25 ve 150 bundan küçüktür. Demek ki √{150}, 12,5'ten küçüktür, yani 12'ye daha yakındır.\nSık yapılan hata: Sınırları bulup hangisine daha yakın olduğunu kontrol etmemek.\nCevap B."
},
{
  id: "mat-kk-335",
  kazanim: "M.8.1.3.8",
  kademe: 3,
  zorluk: 3,
  soru: "Yarıçapı 14 m olan dairesel bir koşu pistinin çevresi, 2 · π · r bağıntısıyla hesaplanacaktır. Hesap yapan teknisyen, π yerine [[22|7]] kesrini almıştır.\n**Buna göre aşağıdaki ifadelerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "Çevre 84 m bulunur ve bu değer pistin gerçek çevresine tam olarak eşittir.",
    "Çevre 88 m bulunur ve bu değer pistin gerçek çevresine tam olarak eşittir.",
    "Çevre 88 m bulunur ve π rasyonel olduğundan pistin gerçek çevresi de rasyoneldir.",
    "Çevre 88 m bulunur ve bu değer pistin gerçek çevresinin yaklaşık değeridir."
  ],
  dogru: 3,
  hatalar: [
    "84 m, π yerine 3 alınırsa bulunur (2 · 3 · 14). Teknisyen [[22|7]] aldığı için sonuç 88 m çıkar. Üstelik yaklaşık değer gerçek değere tam eşit olmaz.",
    "88 değerini doğru buldun ama [[22|7]] sayısını π'nin tam değeri sandın. [[22|7]] ≈ 3,142857… yalnızca π'ye yakın bir kesirdir.",
    "π'yi rasyonel saydın. π iki tam sayının oranı biçiminde yazılamaz; irrasyoneldir. Gerçek çevre 28π irrasyonel bir sayıdır.",
    null
  ],
  aciklama: `π, bir çemberin çevresinin çapına oranıdır; iki tam sayının oranı biçiminde yazılamayan irrasyonel bir sayıdır. İşlemlerde yerine 3; 3,14 ya da [[22|7]] gibi yaklaşık değerler alınır.
Adım 1: Çevreyi hesapla: 2 · [[22|7]] · 14 = 2 · 22 · 2 = 88 m.
Adım 2: Bu sonuç π yerine [[22|7]] alındığı için bulunmuştur; gerçek çevre 28π metredir.
Adım 3: 28π irrasyonel olduğundan 88 m, gerçek çevreye tam eşit olamaz; yalnızca ona yakın bir değerdir.
Sağlama: π ≈ 3,1416 alınırsa 28 · 3,1416 ≈ 87,96 olur; 88'e çok yakındır ama eşit değildir.
Sık yapılan hata: Yaklaşık değeri gerçek değer sanmak. [[22|7]] ve 3,14 sayıları π'ye eşit değildir.
Cevap D.`
},
{
  id: "mat-kk-336",
  kazanim: "M.8.1.3.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir belediye, kare biçimli iki boş arsayı park olarak düzenleyecektir. Arsaların alanları şekilde verilmiştir. Küçük arsanın çevresi tel örgüyle çevrildikten sonra büyük arsa da aynı biçimde çevrilecektir; köşelerde tel örgü kaybı olmayacaktır. Belediye, büyük arsa için küçük arsaya göre ne kadar fazla tel örgü gerektiğini hesaplayacaktır.\n**Buna göre büyük arsa için küçük arsadan kaç metre daha fazla tel örgü gerekir?**",
  gorsel: `<svg viewBox="0 0 480 190" role="img" aria-label="Alanı 169 metrekare olan büyük kare arsa ve alanı 25 metrekare olan küçük kare arsa."><rect x="40" y="25" width="130" height="130" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="230" y="105" width="50" height="50" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="105" y="84" font-size="15" text-anchor="middle" fill="currentColor">Büyük arsa</text><text x="105" y="106" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">169 m²</text><text x="255" y="92" font-size="15" text-anchor="middle" fill="currentColor">Küçük arsa</text><text x="255" y="135" font-size="14" text-anchor="middle" fill="currentColor" font-weight="bold">25 m²</text></svg>`,
  secenekler: ["32", "52", "72", "144"],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca büyük arsanın çevresini buldun (4 · 13 = 52). Küçük arsa için kullanılan tel örgü çıkarılmalıdır; soru ek miktarı soruyor.",
    "İki çevreyi topladın (52 + 20 = 72). Soru ek miktarı, yani çevrelerin farkını soruyor.",
    "Alanların farkını aldın (169 − 25 = 144). Tel örgü uzunluk ister; alanlar farkı uzunluk farkı değildir."
  ],
  aciklama: `Kare biçimli bir bölgenin kenarı alanın kareköküdür, çevresi de kenarının 4 katıdır.
Adım 1: Büyük arsanın kenarı √{169} = 13 m, küçük arsanın kenarı √{25} = 5 m'dir.
Adım 2: Çevreler: 4 · 13 = 52 m ve 4 · 5 = 20 m.
Adım 3: Ek tel örgü, çevrelerin farkıdır: 52 − 20 = 32 m.
Sağlama: Kenar farkı 13 − 5 = 8 m'dir ve 4 · 8 = 32 eder. Aynı sonuç.
Sık yapılan hata: Alanla uzunluğu karıştırmak. 169 − 25 = 144 bir alan farkıdır, tel örgü uzunluğu değildir.
Cevap A.`
},
{
  id: "mat-kk-337",
  kazanim: "M.8.1.3.4",
  kademe: 3,
  zorluk: 3,
  soru: "Bir müzik odasının duvarına dikdörtgen biçimli bir ses yalıtım paneli asılacaktır. Panelin kenar uzunlukları şekilde verilmiştir. Firma, panelin yüzey alanını en sade biçimde yazarak fiyat hesaplayacaktır.\n**Buna göre panelin yüzey alanı kaç metrekaredir?**",
  gorsel: `<svg viewBox="0 0 470 210" role="img" aria-label="Dikdörtgen panel: bir kenarı 12 bölü kök 3 metre, diğer kenarı kök 6 metre."><rect x="100" y="35" width="270" height="110" rx="4" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="235" y="96" font-size="17" text-anchor="middle" fill="currentColor">Ses yalıtım paneli</text><line x1="100" y1="168" x2="370" y2="168" stroke="var(--vurgu)" stroke-width="2"/><text x="235" y="192" font-size="17" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">12 / √3 m</text><line x1="80" y1="35" x2="80" y2="145" stroke="var(--vurgu)" stroke-width="2"/><text x="52" y="96" font-size="17" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">√6 m</text></svg>`,
  secenekler: ["4√{3}", "4√{6}", "12√{2}", "36√{2}"],
  dogru: 2,
  hatalar: [
    "Yalnızca birinci kenarı sadeleştirdin: [[12|√{3}]] = 4√{3}. Bu, panelin bir kenarıdır; alan için ikinci kenarla çarpmak gerekir.",
    "Paydadaki √{3}'ü sanki 3'müş gibi böldün (12 : 3 = 4) ve √{6} ile çarptın. Payı da paydayı da √{3} ile çarpmak gerekir.",
    null,
    "Payı √{3} ile çarptın ama paydayı 3'e bölmeyi unuttun: 12√{3} · √{6} = 12√{18} = 36√{2}. Paydalı kesirde pay ve payda aynı kökle çarpılır."
  ],
  aciklama: `Paydasında tek bir kök bulunan ifadede, pay ve payda aynı kökle çarpılarak payda kökten kurtarılır.
Adım 1: Birinci kenarı sadeleştir: [[12|√{3}]] = [[12 · √{3}|√{3} · √{3}]] = [[12√{3}|3]] = 4√{3} m.
Adım 2: Alanı yaz: 4√{3} · √{6} = 4√{18}.
Adım 3: √{18} = √{9 · 2} = 3√{2} olduğundan alan 4 · 3√{2} = 12√{2} m²'dir.
Sağlama: √{3} ≈ 1,73 ve √{2} ≈ 1,41 alırsak kenarlar ≈ 6,93 ve 2,45'tir; alan ≈ 16,97. 12√{2} ≈ 16,97.
Sık yapılan hata: Payda kök içeriyorken bölmeyi "kolay" yapmaya çalışmak. Önce paydayı kökten kurtar.
Cevap C.`
},
{
  id: "mat-kk-338",
  kazanim: "M.8.1.3.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir marangoz atölyesinde üç ahşap çıtanın uzunlukları desimetre cinsinden aşağıdaki tabloda verilmiştir. Usta, çıtaları kısa olandan uzun olana doğru dizip raflara yerleştirecektir.\n**Buna göre çıtaların küçükten büyüğe doğru sıralanışı aşağıdakilerden hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Çıta</th><th>Uzunluk (dm)</th></tr><tr><td>K</td><td>4√3</td></tr><tr><td>L</td><td>2√13</td></tr><tr><td>M</td><td>3√6</td></tr></table>`,
  secenekler: ["K < L < M", "L < M < K", "K < M < L", "M < L < K"],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca katsayılara baktın (2 < 3 < 4). Katsayısı küçük olan her zaman küçük değildir; hepsini tek kök altına almalısın.",
    "Yalnızca kök içlerine baktın (3 < 6 < 13). Kök içi büyük olan, katsayısı küçükse küçük kalabilir; katsayıyı kök içine almalısın.",
    "Sıralamayı ters kurdun (büyükten küçüğe). Soru küçükten büyüğe sıralamayı istiyor."
  ],
  aciklama: `Katsayılı kökleri karşılaştırmak için hepsini tek kök altına alırsın: a√{b} = √{a^{2} · b}. Katsayı kök içine karesiyle girer.
Adım 1: K: 4√{3} = √{16 · 3} = √{48}.
Adım 2: L: 2√{13} = √{4 · 13} = √{52}; M: 3√{6} = √{9 · 6} = √{54}.
Adım 3: Kök içleri karşılaştır: 48 < 52 < 54 olduğundan K < L < M'dir.
Sağlama: √{3} ≈ 1,73; √{13} ≈ 3,61; √{6} ≈ 2,45 alırsak K ≈ 6,93; L ≈ 7,21; M ≈ 7,35. Sıralama doğru.
Sık yapılan hata: Katsayıya ya da kök içine tek başına bakıp karar vermek. İkisi birlikte değeri belirler.
Cevap A.`
},
{
  id: "mat-kk-339",
  kazanim: "M.8.1.3.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir elektrikçi, bir odaya çekeceği kabloyu hazırlamaktadır. İlk kabloyla başlayacak, bu kablodan bir parça kesecek ve kalan kısmın ucuna yeni bir kablo ekleyecektir. İşlemler aşağıdaki tabloda verilmiştir.\n**Buna göre elektrikçinin hazırladığı kablonun son uzunluğu kaç metredir?**",
  gorsel: `<table class="tablo"><tr><th>Kablo</th><th>Uzunluk (m)</th><th>İşlem</th></tr><tr><td>İlk kablo</td><td>2√18</td><td>Başlangıç</td></tr><tr><td>Kesilen parça</td><td>√8</td><td>Çıkarılır</td></tr><tr><td>Eklenen kablo</td><td>√50</td><td>Eklenir</td></tr></table>`,
  secenekler: ["13√{2}", "9√{2}", "√{114}", "6√{2}"],
  dogru: 1,
  hatalar: [
    "Kesilen parçayı çıkarmak yerine ekledin: 6√{2} + 2√{2} + 5√{2} = 13√{2}. Kesme işlemi çıkarmadır.",
    null,
    "Kök içlerini işleme soktun: 2√{18} = √{72} ve 72 − 8 + 50 = 114. Kök içleri toplanıp çıkarılmaz; katsayılar üzerinden işlem yapılır.",
    "İlk kablonun katsayısı olan 2'yi unuttun: 3√{2} − 2√{2} + 5√{2} = 6√{2}. 2√{18} ifadesinde √{18} = 3√{2} olsa da başındaki 2 ile çarpılmalıdır."
  ],
  aciklama: `Kök içleri aynı olan terimlerde toplama ve çıkarma katsayılar üzerinden yapılır. Bu yüzden önce her kökü sadeleştirirsin.
Adım 1: 2√{18} = 2 · 3√{2} = 6√{2}.
Adım 2: √{8} = 2√{2} ve √{50} = 5√{2}.
Adım 3: Kesme çıkarma, ekleme toplamadır: 6√{2} − 2√{2} + 5√{2} = (6 − 2 + 5)√{2} = 9√{2} metre.
Sağlama: √{2} ≈ 1,41 alırsak kablolar ≈ 8,5 − 2,8 + 7,1 = 12,8 olur; 9√{2} ≈ 12,7. Uyuyor.
Sık yapılan hata: İşlem işaretlerini karıştırmak. Kesilen parça çıkarılır, eklenen toplanır.
Cevap B.`
},
{
  id: "mat-kk-340",
  kazanim: "M.8.1.3.6",
  kademe: 3,
  zorluk: 3,
  soru: "Bir bulmaca kartında √{98} sayısı yazılıdır. Çocuk, kartındaki sayıyı kök içi doğal sayı olan √{k} biçiminde bir sayıyla çarparak sonucun doğal sayı olmasını istemektedir. Çocuk dört farklı k değerini denemiştir.\n**Buna göre k aşağıdakilerden hangisi __olamaz__?**",
  gorsel: null,
  secenekler: ["2", "8", "18", "28"],
  dogru: 3,
  hatalar: [
    "k = 2 olabilir: √{98} · √{2} = √{196} = 14 bir doğal sayıdır. Soru olamayanı soruyor.",
    "k = 8 olabilir: √{98} · √{8} = √{784} = 28 bir doğal sayıdır. Soru olamayanı soruyor.",
    "k = 18 olabilir: √{98} · √{18} = √{1764} = 42 bir doğal sayıdır. Soru olamayanı soruyor.",
    null
  ],
  aciklama: `√{98} · √{k} = √{98 · k} olduğundan çarpımın doğal sayı olması için 98 · k tam kare olmalıdır.
Adım 1: 98'i asal çarpanlarına ayır: 98 = 2 · 7^{2}. Üssü tek olan çarpan 2'dir.
Adım 2: Çarpımı tam kare yapan en küçük k = 2'dir. Daha büyük uygun değerler, 2'nin tam karelerle çarpımıdır: 2, 8, 18, 32, …
Adım 3: Şıkları kontrol et. 2, 2 · 4 = 8 ve 2 · 9 = 18 uygundur. 28 = 2 · 14 ve 14 tam kare olmadığından uygun değildir: 98 · 28 = 2744 tam kare değildir.
Sağlama: 2744 = 2^{3} · 7^{3}; üsler tek olduğundan karekökü doğal sayı değildir.
Sık yapılan hata: 28'in 2'nin katı olduğunu görüp uygun saymak. Uygun değerler 2'nin katları değil, 2'nin tam karelerle çarpımlarıdır.
Cevap D.`
},
{
  id: "mat-kk-341",
  kazanim: "M.8.1.3.7",
  kademe: 3,
  zorluk: 3,
  soru: "Bir mutfak atölyesinde, alanı şekilde verilen kare biçimli bakır plakalar kenarları aynı doğru üzerinde olacak biçimde, aralarında boşluk bırakılmadan yan yana dizilerek bir tezgâh şeridi yapılacaktır. Şeritte 12 plaka kullanılacaktır.\n**Buna göre şeridin toplam uzunluğu kaç desimetredir?**",
  gorsel: `<svg viewBox="0 0 520 170" role="img" aria-label="Alanı 2,25 desimetrekare olan kare plakalar yan yana dizilir; şeritte 12 plaka vardır."><rect x="30" y="40" width="90" height="90" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="120" y="40" width="90" height="90" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="210" y="40" width="90" height="90" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="75" y="80" font-size="15" text-anchor="middle" fill="currentColor">Alan:</text><text x="75" y="102" font-size="15" text-anchor="middle" fill="currentColor" font-weight="bold">2,25 dm²</text><text x="330" y="92" font-size="24" fill="currentColor">…</text><text x="380" y="82" font-size="16" fill="var(--vurgu)" font-weight="bold">Toplam</text><text x="380" y="104" font-size="16" fill="var(--vurgu)" font-weight="bold">12 plaka</text><text x="165" y="28" font-size="15" text-anchor="middle" fill="currentColor">Aralarında boşluk yok</text></svg>`,
  secenekler: ["1,5", "1,8", "18", "27"],
  dogru: 2,
  hatalar: [
    "Yalnızca bir plakanın kenarını buldun (√{2,25} = 1,5). Şeritte 12 plaka vardır.",
    "Kenarı 0,15 dm aldın (virgülü bir basamak fazla kaydırdın) ve 12 ile çarptın: 0,15 · 12 = 1,8. Oysa 0,15 · 0,15 = 0,0225 eder, 2,25 değil.",
    null,
    "Alanı plaka sayısıyla çarptın: 2,25 · 12 = 27. Şeridin uzunluğu için alan değil, kenar uzunluğu kullanılır."
  ],
  aciklama: `Kare biçimli plakanın kenarı alanın kareköküdür. Ondalık gösterimin karekökü, sayı kesre çevrilerek bulunur.
Adım 1: 2,25 = [[225|100]] olduğundan bir plakanın kenarı √{2,25} = [[15|10]] = 1,5 dm'dir.
Adım 2: Plakalar yan yana dizildiği için toplam uzunluk, kenarların toplamıdır: 12 · 1,5 = 18 dm.
Sağlama: 1,5 · 1,5 = 2,25 olduğundan kenar doğrudur; 1,5 · 12 = 18.
Sık yapılan hata: Alanla uzunluğu karıştırmak. Şeridin boyu dm, plakanın alanı dm²'dir; boy hesabında alan değil kenar kullanılır.
Cevap C.`
},
{
  id: "mat-kk-342",
  kazanim: "M.8.1.3.8",
  kademe: 3,
  zorluk: 3,
  soru: "Bir matematik kulübünde öğrenciler, tahtaya yazılan yedi ifadenin değerini hesaplamakta ve sonucu iki tam sayının oranı biçiminde yazılamayan ifadeleri işaretlemektedir. İfadeler aşağıdaki tabloda verilmiştir.\n**Buna göre öğrenciler kaç ifadeyi işaretlemelidir?**",
  gorsel: `<table class="tablo"><tr><th>Kart</th><th>İfade</th></tr><tr><td>K</td><td>√0,4</td></tr><tr><td>L</td><td>√2 · √18</td></tr><tr><td>M</td><td>√20 + √5</td></tr><tr><td>N</td><td>√0,36</td></tr><tr><td>P</td><td>√5 · √11</td></tr><tr><td>R</td><td>√8 : √2</td></tr><tr><td>S</td><td>5√3 − √27</td></tr></table>`,
  secenekler: ["1", "2", "3", "4"],
  dogru: 3,
  hatalar: [
    "Yalnızca ondalık içeren K ifadesini işaretledin. M, P ve S ifadelerinin sonucu da kök içi tam kare olmayan bir sayıdır.",
    "K ve P'yi buldun ama M ve S'yi atladın. Toplama ve çıkarma sonrası M = 3√{5}, S = 2√{3} olur; ikisi de irrasyoneldir.",
    "Rasyonel olan üç ifadeyi (L, N, R) saydın. Soru, iki tam sayının oranı biçiminde yazılamayanları, yani irrasyonel olanları soruyor.",
    null
  ],
  aciklama: `İki tam sayının oranı biçiminde yazılamayan sayılar irrasyoneldir. Karar vermek için önce işlemi yap, sonra kök içi tam kare mi diye bak.
Adım 1: K: √{0,4} = √{[[40|100]]} ve 40 tam kare değildir; irrasyonel.
Adım 2: L: √{2} · √{18} = √{36} = 6; N: √{0,36} = 0,6; R: √{8} : √{2} = √{4} = 2. Bu üçü rasyoneldir.
Adım 3: M: 2√{5} + √{5} = 3√{5}; P: √{55}; S: 5√{3} − 3√{3} = 2√{3}. Üçünün de kök içi tam kare değildir; irrasyoneldir.
Sağlama: İrrasyoneller K, M, P ve S'dir; toplam 4 ifade.
Sık yapılan hata: İfadeye bakıp hesaplamadan karar vermek. Kök işareti görmek irrasyonel olduğunu göstermez, işlemi yapmadan da rasyonel olduğu anlaşılmaz.
Cevap D.`
},
{
  id: "mat-kk-343",
  kazanim: "M.8.1.3.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir dağcılık kulübünde iki halat kullanılmaktadır. Halatların uzunlukları şekilde verilmiştir. Kulüp eğitmeni, uzun halatın kısa halattan ne kadar uzun olduğunu en yakın doğal sayı olarak öğrencilerden bulmalarını istemiştir. Hesapta √{2} ≈ 1,41 alınacaktır.\n**Buna göre bu fark, aşağıdaki doğal sayılardan hangisine en yakındır?**",
  gorsel: `<svg viewBox="0 0 470 160" role="img" aria-label="İki halat: birinci halat 3 kök 2 metre, ikinci halat kök 8 metre."><rect x="30" y="35" width="339" height="26" rx="5" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="30" y="85" width="226" height="26" rx="5" fill="none" stroke="var(--vurgu)" stroke-width="3"/><text x="200" y="54" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">3√2 m</text><text x="143" y="104" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">√8 m</text><text x="30" y="140" font-size="15" fill="currentColor">Uzun halat 3√2 m, kısa halat √8 m</text></svg>`,
  secenekler: ["1", "2", "3", "4"],
  dogru: 0,
  hatalar: [
    null,
    "Farkı 1,41 bulup yukarı yuvarladın. 1,41 sayısı 1'e 2'den daha yakındır: 1,41 − 1 = 0,41 iken 2 − 1,41 = 0,59'dur.",
    "Kök içlerini çıkardın: √{18 − 8} = √{10} ≈ 3,2. Kareköklü ifadelerde fark, kök içleri çıkarılarak değil sadeleştirip katsayıları çıkararak bulunur.",
    "Yalnızca uzun halatı hesapladın (3 · 1,41 ≈ 4,2). Kısa halatın uzunluğunu farktan çıkarmayı unuttun."
  ],
  aciklama: `Kök içleri aynı olan terimlerde çıkarma katsayılar üzerinden yapılır. Bunun için önce her kök sadeleştirilir.
Adım 1: √{8} = √{4 · 2} = 2√{2}.
Adım 2: Farkı bul: 3√{2} − 2√{2} = (3 − 2)√{2} = √{2}.
Adım 3: √{2} ≈ 1,41 olduğundan fark yaklaşık 1,41 m'dir. Bu değer 1'e (uzaklık 0,41) 2'den (uzaklık 0,59) daha yakındır.
Sağlama: 3 · 1,41 = 4,23 ve 2 · 1,41 = 2,82 için 4,23 − 2,82 = 1,41. Aynı sonuç.
Sık yapılan hata: Kök içlerini çıkarmak. √{18} − √{8} ifadesi √{10} etmez.
Cevap A.`
},
{
  id: "mat-kk-344",
  kazanim: "M.8.1.3.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir matematik öğretmeni tahtaya dört eşitlik yazmış ve öğrencilerden doğru olan tek eşitliği bulmalarını istemiştir. Hesap makinesi kullanılmayacak, işlemler kök içleri sadeleştirilerek yapılacaktır.\n**Buna göre öğretmenin yazdığı eşitliklerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: [
    "√{12} + √{27} = √{39}",
    "√{18} + √{8} = √{50}",
    "3√{2} + 2√{2} = 5√{4}",
    "√{75} − √{12} = √{63}"
  ],
  dogru: 1,
  hatalar: [
    "Kök içlerini topladın: 12 + 27 = 39. Sadeleştirince 2√{3} + 3√{3} = 5√{3} = √{75} bulunur, √{39} değil.",
    null,
    "Katsayıları topladın (5) ama kök içlerini de topladın (2 + 2 = 4). Doğrusu 3√{2} + 2√{2} = 5√{2}'dir.",
    "Kök içlerini çıkardın: 75 − 12 = 63. Sadeleştirince 5√{3} − 2√{3} = 3√{3} = √{27} bulunur, √{63} değil."
  ],
  aciklama: `Kareköklü ifadeler toplanırken önce sadeleştirilir; kök içleri aynı olan terimlerin katsayıları toplanır, kök içi aynen kalır. Sağ tarafı kök altında yazmak için katsayı karesiyle içeri alınır.
Adım 1: √{18} = 3√{2} ve √{8} = 2√{2} olduğundan toplam 5√{2} olur.
Adım 2: 5√{2} ifadesini kök içine al: √{5^{2} · 2} = √{50}. Eşitlik doğrudur.
Adım 3: Diğerlerini denetle: ilk eşitlikte sol taraf 5√{3} = √{75}; üçüncüde sol taraf 5√{2}; dördüncüde sol taraf 3√{3} = √{27} olur. Hiçbiri sağ tarafa eşit değildir.
Sağlama: Sayısal olarak √{18} + √{8} ≈ 4,24 + 2,83 = 7,07 ve √{50} ≈ 7,07. Uyuyor.
Sık yapılan hata: Kök içlerini toplayıp çıkarmak. Toplama ve çıkarma kök içlerinde değil, katsayılarda yapılır.
Cevap B.`
},
{
  id: "mat-kk-345",
  kazanim: "M.8.1.3.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir müzede sergilenen tabloların numaraları 10'dan 300'e kadar (10 ve 300 dâhil) ardışık doğal sayılardır. Müze müdürü, numarası bir doğal sayının karesi olan tabloları özel bir salona taşıtacaktır. Bunun için tablo numaralarının karekökleri incelenecektir.\n**Buna göre özel salona kaç tablo taşınacaktır?**",
  gorsel: `<svg viewBox="0 0 520 150" role="img" aria-label="Numaraları 10'dan 300'e kadar giden tablolar; numarası tam kare olanlar özel salona alınacak."><line x1="40" y1="80" x2="480" y2="80" stroke="currentColor" stroke-width="3"/><circle cx="40" cy="80" r="7" fill="var(--vurgu)"/><circle cx="480" cy="80" r="7" fill="var(--vurgu)"/><text x="40" y="112" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">10</text><text x="480" y="112" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">300</text><text x="260" y="52" font-size="16" text-anchor="middle" fill="currentColor">Tablo numaraları (uçlar dâhil)</text><text x="260" y="138" font-size="15" text-anchor="middle" fill="currentColor">Numarası tam kare olanlar özel salona</text></svg>`,
  secenekler: ["12", "13", "14", "17"],
  dogru: 2,
  hatalar: [
    "Aralığın uçlarına yakın en küçük ve en büyük tam kareyi (16 ve 289) dışarıda bıraktın. İkisi de 10 ile 300 arasındadır.",
    "Kökleri 4'ten 17'ye sayarken fark aldın (17 − 4 = 13). İki uç da sayıldığı için 17 − 4 + 1 = 14 olmalıdır.",
    null,
    "En büyük kökü (17) tablo sayısı sandın. 1, 2 ve 3'ün kareleri (1, 4, 9) 10'dan küçüktür; bu kökler sayılmaz."
  ],
  aciklama: `Bir doğal sayının karesi olan sayılara tam kare denir. Aralıktaki tam kareleri bulmak için hangi karekökün aralığa girdiğine bakarsın.
Adım 1: En küçük tam kareyi bul: 3^{2} = 9 < 10 olduğundan 3 uygun değil; 4^{2} = 16 ≥ 10 olduğundan en küçük kök 4'tür.
Adım 2: En büyük tam kareyi bul: 17^{2} = 289 ≤ 300 ve 18^{2} = 324 > 300 olduğundan en büyük kök 17'dir.
Adım 3: Kökler 4, 5, …, 17'dir. Sayısı 17 − 4 + 1 = 14'tür.
Sağlama: 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289. Tam 14 numara.
Sık yapılan hata: İki ucu sayarken 1 eklemeyi unutmak ya da aralığın dışındaki 9 gibi bir kareyi saymak.
Cevap C.`
},
{
  id: "mat-kk-346",
  kazanim: "M.8.1.3.4",
  kademe: 3,
  zorluk: 3,
  soru: "Bir okul laboratuvarında dikdörtgenler prizması biçiminde bir malzeme kutusu kullanılmaktadır. Kutunun taban kenarları ile yüksekliği şekilde verilmiştir. Laborant, kutunun hacmini bulup içine konacak malzemeyi buna göre seçecektir.\n**Buna göre kutunun hacmi kaç desimetreküptür?**",
  gorsel: `<svg viewBox="0 0 380 200" role="img" aria-label="Dikdörtgenler prizması biçiminde kutu: taban kenarları kök 6 ve 2 kök 3 desimetre, yüksekliği kök 2 desimetre."><polygon points="80,70 120,40 260,40 220,70" fill="var(--dolgu)" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><rect x="80" y="70" width="140" height="80" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><polygon points="220,70 260,40 260,120 220,150" fill="var(--dolgu)" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><text x="150" y="176" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">√6 dm</text><text x="68" y="116" font-size="16" text-anchor="end" fill="var(--vurgu)" font-weight="bold">√2 dm</text><text x="272" y="62" font-size="16" fill="var(--vurgu)" font-weight="bold">2√3 dm</text></svg>`,
  secenekler: ["6", "12", "36", "72"],
  dogru: 1,
  hatalar: [
    "2 katsayısını unuttun: √{6} · √{3} · √{2} = √{36} = 6. Taban kenarlarından biri 2√{3}'tür; katsayı da çarpıma girer.",
    null,
    "Kök içlerini doğru çarptın (6 · 3 · 2 = 36) ama karekökü almadın ve katsayıyı da unuttun. √{36} = 6 olmalıydı.",
    "Katsayıyla kök içini çarptın: 2 · 36 = 72. Kök içi çarpımın karekökü alınmalı: 2 · √{36} = 2 · 6."
  ],
  aciklama: `Dikdörtgenler prizmasının hacmi, taban kenarları ile yüksekliğin çarpımıdır. Kareköklü ifadelerde katsayılar katsayılarla, kök içleri kök içleriyle çarpılır.
Adım 1: Hacmi yaz: √{6} · 2√{3} · √{2}.
Adım 2: Katsayı 2'dir. Kök içlerini çarp: 6 · 3 · 2 = 36. İfade 2 · √{36} olur.
Adım 3: √{36} = 6 olduğundan hacim 2 · 6 = 12 dm³'tür.
Sağlama: Adım adım: √{6} · √{2} = √{12} = 2√{3}; sonra 2√{3} · 2√{3} = 4 · 3 = 12. Aynı sonuç.
Sık yapılan hata: Katsayıyı çarpıma katmamak ya da kök içi çarpımı hesaplayıp karekökünü almamak.
Cevap B.`
},
{
  id: "mat-kk-347",
  kazanim: "M.8.1.3.7",
  kademe: 3,
  zorluk: 3,
  soru: "Bir tasarımcı, kare biçimli üç mukavva levhanın alanlarını desimetrekare cinsinden aşağıdaki tabloya yazmıştır. Tasarımcı, birinci ve ikinci levhanın birer kenarını uç uca ekleyerek bir şerit oluşturmuş, sonra bu şeritten üçüncü levhanın bir kenarı uzunluğunda bir parça kesip atmıştır.\n**Buna göre şeritte geriye kalan kısmın uzunluğu kaç desimetredir?**",
  gorsel: `<table class="tablo"><tr><th>Levha</th><th>Alan (dm²)</th></tr><tr><td>Birinci</td><td>1,21</td></tr><tr><td>İkinci</td><td>0,81</td></tr><tr><td>Üçüncü</td><td>0,04</td></tr></table>`,
  secenekler: ["1,8", "1,98", "2,2", "18"],
  dogru: 0,
  hatalar: [
    null,
    "Kenar uzunlukları yerine alanları işleme soktun: 1,21 + 0,81 − 0,04 = 1,98. Uç uca eklenen şey kenarlardır, alanlar değil.",
    "Üçüncü levhanın kenarını çıkarmak yerine ekledin: 1,1 + 0,9 + 0,2 = 2,2. Kesilip atılan parça çıkarılır.",
    "Karekökleri 11, 9 ve 2 aldın (virgülü atladın): 11 + 9 − 2 = 18. Oysa √{1,21} = 1,1, √{0,81} = 0,9 ve √{0,04} = 0,2'dir."
  ],
  aciklama: `Kare levhanın kenarı alanın kareköküdür. Ondalık gösterimlerde karekök için sayı kesre çevrilir.
Adım 1: Kenarları bul: √{1,21} = [[11|10]] = 1,1; √{0,81} = [[9|10]] = 0,9; √{0,04} = [[2|10]] = 0,2 dm.
Adım 2: Şerit, ilk iki kenarın toplamıdır: 1,1 + 0,9 = 2 dm.
Adım 3: Üçüncü kenar kesilip atılınca geriye 2 − 0,2 = 1,8 dm kalır.
Sağlama: 1,1 · 1,1 = 1,21; 0,9 · 0,9 = 0,81; 0,2 · 0,2 = 0,04. Üç kenar da doğru.
Sık yapılan hata: Alanlarla kenarları karıştırmak. Uzunluk hesabında alanın karekökünü almadan toplama ve çıkarma yapılmaz.
Cevap A.`
},
{
  id: "mat-kk-348",
  kazanim: "M.8.1.3.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir alışveriş merkezinde indirim kartları dağıtılmaktadır. Üzerinde k doğal sayısı yazılı olan bir kart, √{3k} ifadesinin değeri 6 ile 7 arasında (uç değerler dâhil değildir) olduğunda \"şanslı\" sayılmaktadır. Şanslı kartların hepsi bir torbada toplanmıştır.\n**Buna göre torbadaki kartların üzerindeki sayıların toplamı kaçtır?**",
  gorsel: null,
  secenekler: ["42", "45", "54", "58"],
  dogru: 3,
  hatalar: [
    "k = 16 kartını dışarıda bıraktın (13 + 14 + 15 = 42). 3 · 16 = 48 < 49 olduğundan √{48} sayısı 7'den küçüktür ve bu kart şanslıdır.",
    "k = 13 kartını dışarıda bıraktın (14 + 15 + 16 = 45). 3 · 13 = 39 > 36 olduğundan √{39} sayısı 6'dan büyüktür ve bu kart şanslıdır.",
    "k = 12 kartını da aldın ve 16'yı bıraktın (12 + 13 + 14 + 15 = 54). 3 · 12 = 36 ve √{36} = 6'dır; 6 ile 7 arasında değil, 6'ya eşittir.",
    null
  ],
  aciklama: `Karekök içindeki ifadeyi sınırlamak için eşitsizliğin her tarafının karesi alınır.
Adım 1: 6 < √{3k} < 7 eşitsizliğinin karesini al: 36 < 3k < 49.
Adım 2: Üç ile böl: 12 < k < 16,33… olur. k doğal sayı olduğundan k = 13, 14, 15, 16'dır (12 sınırdadır, dahil değil).
Adım 3: Sayıları topla: 13 + 14 + 15 + 16 = 58.
Sağlama: k = 16 için √{48} ≈ 6,93 ve k = 13 için √{39} ≈ 6,24'tür; ikisi de 6 ile 7 arasındadır. k = 17 için √{51} > 7, k = 12 için √{36} = 6'dır; ikisi dışarıda.
Sık yapılan hata: Sınır değerlerini yanlış yorumlamak. "Arasında" demek uç değerleri kapsamaz.
Cevap D.`
},
{
  id: "mat-kk-349",
  kazanim: "M.8.1.3.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir sporcu kulübünde üç ipin uzunlukları metre cinsinden aşağıdaki tabloda verilmiştir. Antrenör, iplerin uzunluklarını karşılaştırmak istemektedir.\n**Buna göre iplerin uzunlukları için aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<table class="tablo"><tr><th>İp</th><th>Uzunluk (m)</th></tr><tr><td>K</td><td>2√18</td></tr><tr><td>L</td><td>3√8</td></tr><tr><td>M</td><td>4√5</td></tr></table>`,
  secenekler: ["M < K = L", "K < L < M", "L < K < M", "K = L < M"],
  dogru: 3,
  hatalar: [
    "K ile L'nin eşit olduğunu gördün ama M'nin en büyük olduğunu görmedin. 4√{5} = √{80} iken 2√{18} = 3√{8} = √{72}'dir; M, K ve L'den büyüktür.",
    "K'nin L'den küçük olduğunu sandın. İkisi de tek kök altında √{72} olur (2√{18} = √{72}, 3√{8} = √{72}); birbirine eşittirler.",
    "L'nin K'dan küçük olduğunu sandın. İkisi de tek kök altında √{72} olur (2√{18} = √{72}, 3√{8} = √{72}); birbirine eşittirler.",
    null
  ],
  aciklama: `Katsayılı kökleri karşılaştırmak için hepsini tek kök altına alırsın: a√{b} = √{a^{2} · b}.
Adım 1: K: 2√{18} = √{4 · 18} = √{72}.
Adım 2: L: 3√{8} = √{9 · 8} = √{72}. M: 4√{5} = √{16 · 5} = √{80}.
Adım 3: K ve L'nin kök içi aynı (72), M'ninki daha büyük (80). Bu yüzden K = L < M'dir.
Sağlama: Sadeleştirerek de görülür: 2√{18} = 2 · 3√{2} = 6√{2} ve 3√{8} = 3 · 2√{2} = 6√{2}. İkisi aynı sayıdır.
Sık yapılan hata: Kök içi ya da katsayı farklı diye iki ifadenin farklı olduğunu sanmak. Sadeleştirince eşit çıkabilirler.
Cevap D.`
},
{
  id: "mat-kk-350",
  kazanim: "M.8.1.3.6",
  kademe: 3,
  zorluk: 3,
  soru: "Bir bulmaca kitabındaki bir etkinlikte √{x} · √{20} çarpımının bir doğal sayı olması istenmektedir. Burada x iki basamaklı bir doğal sayıdır.\n**Buna göre x en az kaç olabilir?**",
  gorsel: null,
  secenekler: ["10", "16", "20", "45"],
  dogru: 2,
  hatalar: [
    "İki basamaklı en küçük sayıyı seçtin. 10 · 20 = 200 olur ve 200 tam kare değildir; çarpım doğal sayı vermez.",
    "Tam kare olduğu için 16'yı seçtin. 16 · 20 = 320 olur ve 320 tam kare değildir; çarpanın tam kare olması yetmez.",
    null,
    "45 de uygundur (20 · 45 = 900 = 30^{2}) ama en küçük değer değildir. Daha küçük bir iki basamaklı sayı çarpımı tam kare yapar."
  ],
  aciklama: `√{x} · √{20} = √{20x} olduğundan sonucun doğal sayı olması için 20x çarpımının tam kare olması gerekir.
Adım 1: 20'yi asal çarpanlarına ayır: 20 = 2^{2} · 5. Üssü tek olan çarpan 5'tir.
Adım 2: x, 5'in tam karelerle çarpımı olmalıdır: x = 5, 20, 45, 80, 125, …
Adım 3: Bunlardan iki basamaklı en küçüğü 20'dir (5 tek basamaklıdır).
Sağlama: √{20} · √{20} = 20, yani √{400} = 20 bir doğal sayıdır.
Sık yapılan hata: Çarpanın tam kare olmasının yeterli olduğunu düşünmek. 16 tam karedir ama 16 · 20 tam kare değildir.
Cevap C.`
},
{
  id: "mat-kk-351",
  kazanim: "M.8.1.3.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir doğa yürüyüşü rotasında birinci gün √{32} km yürünmüştür. İkinci gün, birinci günden √{8} km fazla yürünmüştür. Rotayı hazırlayan rehber, iki günde yürünen toplam yolu en sade biçimde yazacaktır.\n**Buna göre iki günde yürünen toplam yol kaç kilometredir?**",
  gorsel: `<svg viewBox="0 0 500 150" role="img" aria-label="Birinci gün kök 32 kilometre; ikinci gün birinci günden kök 8 kilometre fazla."><rect x="30" y="35" width="170" height="28" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="115" y="55" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">1. gün: √32 km</text><rect x="30" y="85" width="170" height="28" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="200" y="85" width="85" height="28" fill="none" stroke="var(--vurgu)" stroke-width="3" stroke-dasharray="7 4"/><text x="115" y="105" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">2. gün</text><text x="242" y="105" font-size="15" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">+ √8 km</text></svg>`,
  secenekler: ["6√{2}", "8√{2}", "10√{2}", "12√{2}"],
  dogru: 2,
  hatalar: [
    "Yalnızca ikinci günün yolunu buldun (4√{2} + 2√{2} = 6√{2}). Soru iki günün toplamını soruyor.",
    "İkinci günü de birinci günle aynı saydın (4√{2} + 4√{2} = 8√{2}). İkinci gün birinciden √{8} km fazladır.",
    null,
    "Fazla kısmı iki kez ekledin: 4√{2} + 6√{2} + 2√{2} = 12√{2}. √{8} km yalnızca ikinci günün içinde bir kez bulunur."
  ],
  aciklama: `Kök içleri aynı olan terimler toplanırken katsayılar toplanır. Bunun için önce her kök sadeleştirilir.
Adım 1: Birinci gün: √{32} = √{16 · 2} = 4√{2} km.
Adım 2: Fazla kısım: √{8} = 2√{2} km. İkinci gün = 4√{2} + 2√{2} = 6√{2} km.
Adım 3: Toplam = 4√{2} + 6√{2} = 10√{2} km.
Sağlama: √{2} ≈ 1,41 alırsak günler ≈ 5,66 ve 8,49 km eder; toplam ≈ 14,15. 10√{2} ≈ 14,1.
Sık yapılan hata: Ara sonucu (6√{2}) cevap sanmak. Sorulan, iki günün toplamıdır.
Cevap C.`
},
{
  id: "mat-kk-352",
  kazanim: "M.8.1.3.8",
  kademe: 3,
  zorluk: 3,
  soru: "Bir matematik yarışmasında yarışmacılara dört işlem kartı verilmiştir. Yarışmacıdan, sonucu 3 ile 4 arasında olan bir irrasyonel sayı veren tek kartı bulması istenmektedir. Hesap makinesi kullanılmayacaktır.\n**Buna göre yarışmacı hangi kartı seçmelidir?**",
  gorsel: null,
  secenekler: ["√{3} · √{5}", "√{2} · √{8}", "√{9,61}", "5 · √{0,36}"],
  dogru: 0,
  hatalar: [
    null,
    "√{2} · √{8} = √{16} = 4 bulunur. Sonuç hem tam sayıdır (rasyonel) hem de 3 ile 4 arasında değil, 4'e eşittir.",
    "√{9,61} = 3,1 bulunur. Bu sayı 3 ile 4 arasındadır ama iki tam sayının oranı biçiminde yazılabildiği için rasyoneldir.",
    "5 · √{0,36} = 5 · 0,6 = 3 bulunur. Sonuç rasyoneldir ve 3 ile 4 arasında değil, 3'e eşittir."
  ],
  aciklama: `İki koşulu birlikte sağlamalısın: sonuç irrasyonel olmalı ve 3 ile 4 arasında olmalı. Bunun için önce her kartın sonucunu hesapla.
Adım 1: √{2} · √{8} = √{16} = 4. Rasyonel ve aralığın dışında (4'e eşit).
Adım 2: √{9,61} = √{[[961|100]]} = [[31|10]] = 3,1. Aralıkta ama rasyonel. 5 · √{0,36} = 5 · 0,6 = 3. Rasyonel ve aralığın dışında.
Adım 3: √{3} · √{5} = √{15}. 15 tam kare değildir, yani irrasyoneldir; 9 < 15 < 16 olduğundan 3 < √{15} < 4'tür.
Sağlama: 3,9^{2} = 15,21 olduğundan √{15} yaklaşık 3,87'dir; gerçekten 3 ile 4 arasındadır.
Sık yapılan hata: Ondalık yazılımlı bir kökü kendiliğinden irrasyonel saymak. √{9,61} = 3,1 gibi sonuçlar rasyoneldir.
Cevap A.`
},
{
  id: "mat-kk-353",
  kazanim: "M.8.1.3.4",
  kademe: 3,
  zorluk: 3,
  soru: "Bir robot, düz bir parkurda iki aşamada ilerlemektedir. Her aşamadaki sabit hızı ve ilerleme süresi aşağıdaki tabloda verilmiştir. Robot aşamalar arasında durmamaktadır. Yol, hız ile sürenin çarpımıdır. Mühendis, robotun iki aşamada aldığı toplam yolu en sade biçimde hesaplayacaktır.\n**Buna göre robot iki aşamada toplam kaç metre yol almıştır?**",
  gorsel: `<table class="tablo"><tr><th>Aşama</th><th>Hız (m/sn)</th><th>Süre (sn)</th></tr><tr><td>1. aşama</td><td>2√5</td><td>√20</td></tr><tr><td>2. aşama</td><td>√6</td><td>√24</td></tr></table>`,
  secenekler: ["12", "20", "32", "240"],
  dogru: 2,
  hatalar: [
    "Yalnızca ikinci aşamanın yolunu buldun (√{6} · √{24} = 12). Soru iki aşamanın toplamını soruyor.",
    "Yalnızca birinci aşamanın yolunu buldun (2√{5} · √{20} = 20). Soru iki aşamanın toplamını soruyor.",
    null,
    "İki aşamanın yollarını toplamak yerine çarptın (20 · 12 = 240). Toplam yol için yollar toplanır."
  ],
  aciklama: `Yol = hız · süre olduğundan her aşamada iki kareköklü ifadeyi çarparsın. Katsayılar katsayılarla, kök içleri kök içleriyle çarpılır.
Adım 1: Birinci aşama: √{20} = 2√{5} olduğundan yol 2√{5} · 2√{5} = 4 · 5 = 20 m'dir.
Adım 2: İkinci aşama: √{6} · √{24} = √{144} = 12 m'dir.
Adım 3: Toplam yol 20 + 12 = 32 m'dir.
Sağlama: Birinci aşamayı 2√{5} · √{20} = 2√{100} = 20 diye de hesaplayabilirsin. Aynı sonuç.
Sık yapılan hata: Ara sonuçlardan birini cevap sanmak. Soru iki aşamanın toplamını soruyor.
Cevap C.`
},
{
  id: "mat-kk-354",
  kazanim: "M.8.1.3.7",
  kademe: 3,
  zorluk: 3,
  soru: "Bir baskı atölyesinde kare biçimli büyük bir karton ile üzerine yapıştırılacak kare biçimli küçük bir mühür bulunmaktadır. Kartonun ve mührün alanları şekilde verilmiştir. Kartonla mühür, birer kenarları aynı doğru üzerinde olacak biçimde yan yana konulmuştur.\n**Buna göre yan yana konulan iki karenin toplam uzunluğu kaç metredir?**",
  gorsel: `<svg viewBox="0 0 480 190" role="img" aria-label="Alanı 1,69 metrekare olan kare karton ile alanı 0,0169 metrekare olan küçük kare mühür yan yana."><rect x="40" y="30" width="120" height="120" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="100" y="86" font-size="15" text-anchor="middle" fill="currentColor">Karton</text><text x="100" y="108" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">1,69 m²</text><rect x="160" y="138" width="12" height="12" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><line x1="170" y1="136" x2="215" y2="108" stroke="var(--vurgu)" stroke-width="2"/><text x="220" y="104" font-size="15" fill="var(--vurgu)" font-weight="bold">Mühür</text><text x="220" y="124" font-size="15" fill="var(--vurgu)" font-weight="bold">0,0169 m²</text><text x="40" y="178" font-size="15" fill="currentColor">Kenarları aynı doğru üzerinde, yan yana</text></svg>`,
  secenekler: ["0,143", "1,3", "1,313", "1,43"],
  dogru: 3,
  hatalar: [
    "Her iki kenarı da bir basamak küçük aldın (0,13 ve 0,013). Doğru kenarlar 1,3 ve 0,13'tür; 1,3 · 1,3 = 1,69 ve 0,13 · 0,13 = 0,0169'dur.",
    "Yalnızca kartonun kenarını (1,3 m) cevap sandın. Mührün kenarını eklemedin.",
    "Mührün kenarını 0,013 aldın. Oysa 0,013 · 0,013 = 0,000169'dur; mührün alanı 0,0169 olduğundan kenarı 0,13 m'dir.",
    null
  ],
  aciklama: `Kare biçimli yüzeylerde kenar, alanın kareköküdür. Ondalık karekökte virgülden sonraki basamak sayısı yarıya iner.
Adım 1: Kartonun kenarı: 1,69 = [[169|100]] olduğundan √{1,69} = [[13|10]] = 1,3 m.
Adım 2: Mührün kenarı: 0,0169 = [[169|10000]] olduğundan √{0,0169} = [[13|100]] = 0,13 m.
Adım 3: Yan yana konunca uzunluklar toplanır: 1,3 + 0,13 = 1,43 m.
Sağlama: 1,3 · 1,3 = 1,69 ve 0,13 · 0,13 = 0,0169. İki kenar da doğru.
Sık yapılan hata: Virgülden sonraki basamak sayısını yanlış yarılamak. 0,0169 sayısında dört basamak vardır; karekökünde iki basamak olmalıdır.
Cevap D.`
},
{
  id: "mat-kk-355",
  kazanim: "M.8.1.3.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir seramik atölyesinde alanı 17 cm² olan kare biçimli fayanslar üretilmektedir. Ustanın tablosunda bazı ondalık sayıların kareleri verilmiştir. Usta, bir fayansın kenarını onda birler basamağına en yakın değer olarak alıp 10 fayansı yan yana dizdiğinde oluşan şeridin uzunluğunu hesaplayacaktır.\n**Buna göre şeridin uzunluğu yaklaşık kaç santimetredir?**",
  gorsel: `<table class="tablo"><tr><th>Sayı</th><th>Karesi</th></tr><tr><td>4,1</td><td>16,81</td></tr><tr><td>4,2</td><td>17,64</td></tr><tr><td>4,3</td><td>18,49</td></tr></table>`,
  secenekler: ["41", "42", "44", "170"],
  dogru: 0,
  hatalar: [
    null,
    "Kenarı 4,2 aldın. 17 sayısı 16,81'e (fark 0,19) 17,64'ten (fark 0,64) daha yakındır; kenar 4,1'e daha yakındır.",
    "Kenarı 4,4 aldın. Tabloda 4,3'ün karesi bile 18,49'dur; 17 bu değerden çok uzaktadır ve 4,4 mantıklı bir tahmin değildir.",
    "Alanı fayans sayısıyla çarptın: 17 · 10 = 170. Şeridin uzunluğu için kenar uzunluğu kullanılır, alan değil."
  ],
  aciklama: `Karekökü ondalık olarak tahmin etmek için adayların karelerini 17 ile karşılaştırırsın.
Adım 1: Tabloya göre 4,1^{2} = 16,81 < 17 < 17,64 = 4,2^{2}. Yani 4,1 < √{17} < 4,2'dir.
Adım 2: Uzaklıkları kıyasla: 17 − 16,81 = 0,19 ve 17,64 − 17 = 0,64. 17, 16,81'e daha yakın olduğundan kenar 4,1'e daha yakındır.
Adım 3: Kenar ≈ 4,1 cm olur. 10 fayansın toplam uzunluğu 10 · 4,1 = 41 cm'dir.
Sağlama: Gerçek değer √{17} ≈ 4,12'dir; 10 fayansın uzunluğu ≈ 41,2 cm'dir, 41'e çok yakın.
Sık yapılan hata: Karelerin 17'ye uzaklığını karşılaştırmadan "büyüğü seçeyim" demek.
Cevap A.`
},
{
  id: "mat-kk-356",
  kazanim: "M.8.1.3.1",
  kademe: 3,
  zorluk: 4,
  soru: "Bir sergi salonunun zemini kare biçimlidir ve alanı şekilde verilmiştir. Salonun tam ortasına, kenarları salonun kenarlarına paralel olan kare biçimli bir halı serilecektir. Halının bir kenarı, salonun bir kenarından 6 m kısadır. Halıyı salona yerleştirdikten sonra, halının dışında kalan zemin bölümü parlatılacaktır ve parlatma işçiliği metrekare başına ücretlendirilecektir.\n**Buna göre parlatılacak zemin bölümünün alanı kaç metrekaredir?**",
  gorsel: `<svg viewBox="0 0 520 200" role="img" aria-label="Alanı 289 metrekare olan kare salon ve ortasındaki kare halı; halının kenarı salonun kenarından 6 metre kısa."><rect x="40" y="15" width="170" height="170" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="70" y="45" width="110" height="110" fill="none" stroke="var(--vurgu)" stroke-width="3"/><text x="125" y="105" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">Halı</text><text x="240" y="75" font-size="16" fill="currentColor" font-weight="bold">Salon alanı: 289 m²</text><text x="240" y="108" font-size="15" fill="currentColor">Halının kenarı, salonun</text><text x="240" y="130" font-size="15" fill="currentColor">kenarından 6 m kısadır.</text></svg>`,
  secenekler: ["121", "168", "253", "283"],
  dogru: 1,
  hatalar: [
    "Halının alanını buldun (11 · 11 = 121). Soru halının dışında kalan bölümü soruyor.",
    null,
    "Alan farkını kenar farkının karesi sandın: 289 − 6^{2} = 253. Kenarlar 6 m kısa diye alanlar 36 m² farklı olmaz.",
    "Alandan doğrudan kenar farkını çıkardın: 289 − 6 = 283. Çıkarma, alanlar arasında yapılmalıdır."
  ],
  aciklama: `Kare biçimli bölgelerde kenar, alanın kareköküdür. Halının dışında kalan bölümün alanı, salon alanı ile halı alanı arasındaki farktır.
Adım 1: Salonun kenarı √{289} = 17 m'dir (17 · 17 = 289).
Adım 2: Halının kenarı 17 − 6 = 11 m ve alanı 11 · 11 = 121 m²'dir.
Adım 3: Parlatılacak bölüm 289 − 121 = 168 m²'dir.
Sağlama: İki karenin alan farkı (17 − 11)(17 + 11) = 6 · 28 = 168 eder. Aynı sonuç.
Sık yapılan hata: Kenar farkını (6 m) alan farkı gibi kullanmak. Kenarlar 6 m farklıysa alanlar 36 m² değil, çok daha fazla farklıdır.
Cevap B.`
},
{
  id: "mat-kk-357",
  kazanim: "M.8.1.3.2",
  kademe: 3,
  zorluk: 4,
  soru: "Bir spor salonunda her üyenin kart numarası bir k doğal sayısıdır. Salon yönetimi, üyeleri grup antrenmanlarına yerleştirirken √{k} ifadesinin değerine en yakın doğal sayıyı kullanmaktadır. Örneğin √{k} sayısına en yakın doğal sayı 7 ise o üye 7. grupta antrenman yapar. Hiçbir kart numarasının karekökü iki doğal sayıya eşit uzaklıkta değildir.\n**Buna göre 7. grupta antrenman yapan üyelerin sahip olabileceği kaç farklı kart numarası vardır?**",
  gorsel: null,
  secenekler: ["12", "13", "14", "15"],
  dogru: 2,
  hatalar: [
    "6 ile 7 arasındaki karekökleri sayarak 37, 38, …, 48 aralığını buldun (12 sayı). Oysa 7'ye en yakın olmak, 6,5 ile 7,5 arasında olmak demektir; 49 ve üzeri sayılar da 7. gruba girer.",
    "Aralığın doğru olduğunu gördün (43, …, 56) ama sayarken bir ucu dışarıda bıraktın. İki uç da dahildir: 56 − 43 + 1 = 14.",
    null,
    "Aralığın bir ucunu fazla aldın (42 ya da 57). 42,25 sınırının altındaki 42 sayısının karekökü 6,5'ten küçüktür, 6'ya daha yakındır; 57'nin karekökü 7,5'ten büyüktür, 8'e daha yakındır."
  ],
  aciklama: `Bir sayıya "en yakın doğal sayı" 7 ise sayı 6,5 ile 7,5 arasındadır (6 ve 8'e olan uzaklığı 7'ye olan uzaklığından büyüktür).
Adım 1: Koşulu yaz: 6,5 < √{k} < 7,5.
Adım 2: Her tarafın karesini al: 6,5^{2} < k < 7,5^{2}, yani 42,25 < k < 56,25.
Adım 3: k doğal sayı olduğundan k = 43, 44, …, 56'dır. Sayısı 56 − 43 + 1 = 14'tür.
Sağlama: √{43} ≈ 6,56 (7'ye yakın), √{42} ≈ 6,48 (6'ya yakın); √{56} ≈ 7,48 (7'ye yakın), √{57} ≈ 7,55 (8'e yakın). Sınırlar doğru.
Sık yapılan hata: "En yakın" ifadesini "arasında" ile karıştırmak. En yakın doğal sayı 7 ise karekök 7'nin iki yanındaki yarım birimlik aralıkta bulunur.
Cevap C.`
},
{
  id: "mat-kk-358",
  kazanim: "M.8.1.3.3",
  kademe: 3,
  zorluk: 4,
  soru: "Bir bilgi yarışmasının final turunda iki kartın üzerinde 2√{10} ve 5√{6} sayıları yazılıdır. Yarışmacıdan, bu iki sayının arasında kalan doğal sayıların kaç tane olduğunu bulması istenmektedir. Kartlardaki sayıların kendileri \"arasında\" kapsamına girmemektedir. Hesap makinesi yoktur; yarışmacı ifadeleri tek kök altına alarak tam karelerle karşılaştırabilir.\n**Buna göre bu iki sayı arasında kaç doğal sayı vardır?**",
  gorsel: `<svg viewBox="0 0 470 140" role="img" aria-label="İki kart: birinde 2 kök 10, diğerinde 5 kök 6 yazıyor."><rect x="50" y="35" width="150" height="70" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="270" y="35" width="150" height="70" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="125" y="78" font-size="24" text-anchor="middle" fill="currentColor" font-weight="bold">2√10</text><text x="345" y="78" font-size="24" text-anchor="middle" fill="currentColor" font-weight="bold">5√6</text><text x="235" y="78" font-size="22" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">…</text><text x="125" y="26" font-size="15" text-anchor="middle" fill="currentColor">1. kart</text><text x="345" y="26" font-size="15" text-anchor="middle" fill="currentColor">2. kart</text></svg>`,
  secenekler: ["3", "4", "5", "6"],
  dogru: 3,
  hatalar: [
    "Yalnızca ortadaki üç doğal sayıyı (9, 10, 11) saydın. Alt uca yakın 7 ve 8, üst uca yakın 12 de aralığa girer.",
    "Alt ve üst uca yakın birer sayıyı dışarıda bıraktın (7 ve 12). 2√{10} = √{40} sayısı 6'dan büyük, 7'den küçüktür; 5√{6} = √{150} sayısı 12'den büyüktür.",
    "Üst ucu kısa tahmin edip 12'yi saymadın. 5√{6} = √{150} ve 12^{2} = 144 < 150 olduğundan 5√{6} sayısı 12'den büyüktür; 12 aralığın içindedir.",
    null
  ],
  aciklama: `Katsayılı kökleri doğal sayılarla karşılaştırmak için katsayıyı kök içine alırsın: a√{b} = √{a^{2} · b}.
Adım 1: 2√{10} = √{4 · 10} = √{40}. 36 < 40 < 49 olduğundan 6 < 2√{10} < 7'dir.
Adım 2: 5√{6} = √{25 · 6} = √{150}. 144 < 150 < 169 olduğundan 12 < 5√{6} < 13'tür.
Adım 3: İki sayının arasında kalan doğal sayılar 7, 8, 9, 10, 11 ve 12'dir. Sayısı 12 − 7 + 1 = 6'dır.
Sağlama: 2√{10} ≈ 6,32 ve 5√{6} ≈ 12,25'tir. Bu iki değer arasında 7'den 12'ye kadar 6 doğal sayı yer alır.
Sık yapılan hata: Uçlardaki doğal sayıları unutmak. Kök değerleri tam sayı olmadığından hem 7 hem 12 aralığın içindedir.
Cevap D.`
},
{
  id: "mat-kk-359",
  kazanim: "M.8.1.3.4",
  kademe: 3,
  zorluk: 4,
  soru: "Bir parkta dikdörtgen biçimli bir çim alanın kenar uzunlukları şekilde verilmiştir. Belediye, çim alanın dört kenarı boyunca, çim alanı her yandan çevreleyen ve her yerde aynı genişlikte olan bir yürüyüş yolu yaptıracaktır. Yolun genişliği de şekilde verilmiştir ve yol yalnızca çim alanın dışında kalan bölümdür.\n**Buna göre yürüyüş yolunun alanı kaç metrekare olur?**",
  gorsel: `<svg viewBox="0 0 520 190" role="img" aria-label="Kenarları 5 kök 3 ve 3 kök 3 metre olan dikdörtgen çim alan ve çevresinde kök 3 metre genişliğinde yol."><rect x="40" y="20" width="210" height="150" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="70" y="50" width="150" height="90" fill="none" stroke="var(--vurgu)" stroke-width="3"/><text x="145" y="90" font-size="15" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">Çim alanı</text><text x="145" y="112" font-size="15" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">5√3 m × 3√3 m</text><text x="145" y="41" font-size="14" text-anchor="middle" fill="currentColor">√3 m</text><text x="280" y="85" font-size="15" fill="currentColor">Yol, çim alanı her yandan</text><text x="280" y="107" font-size="15" fill="currentColor">√3 m genişlikte çevreler.</text></svg>`,
  secenekler: ["27", "48", "60", "105"],
  dogru: 2,
  hatalar: [
    "Yol genişliğini yalnızca bir yandan ekledin: dış dikdörtgen 6√{3} × 4√{3} = 72 olur ve 72 − 45 = 27 bulursun. Yol çim alanı her yandan, yani iki karşı kenarda birden çevreler.",
    "Dört kenar şeridini buldun (2 · 15 + 2 · 9 = 48) ama köşelerdeki dört küçük kareyi (4 · 3 = 12) unuttun.",
    null,
    "Yolla birlikte tüm dikdörtgenin alanını buldun (7√{3} · 5√{3} = 105). Çim alanın alanı (45) çıkarılmalıydı."
  ],
  aciklama: `Yolun alanı, yolla birlikte oluşan dış dikdörtgenin alanı ile çim alanın alanı arasındaki farktır. Karekökler çarpılırken katsayılar katsayılarla, kök içleri kök içleriyle çarpılır; √{3} · √{3} = 3'tür.
Adım 1: Çim alanın alanı: 5√{3} · 3√{3} = 15 · 3 = 45 m².
Adım 2: Yol her yandan √{3} m olduğundan dış kenarlar 5√{3} + 2√{3} = 7√{3} ve 3√{3} + 2√{3} = 5√{3} olur. Dış alan: 7√{3} · 5√{3} = 35 · 3 = 105 m².
Adım 3: Yolun alanı 105 − 45 = 60 m²'dir.
Sağlama: İki uzun şerit 2 · (5√{3} · √{3}) = 30, iki kısa şerit 2 · (3√{3} · √{3}) = 18 ve dört köşe karesi 4 · 3 = 12 eder; 30 + 18 + 12 = 60.
Sık yapılan hata: √{3} · √{3} çarpımını √{3} sanmak. Bir karekök kendisiyle çarpılınca kök içindeki sayı kalır: 3.
Cevap C.`
},
{
  id: "mat-kk-360",
  kazanim: "M.8.1.3.5",
  kademe: 3,
  zorluk: 4,
  soru: "Bir marangoz, uzunluğu 5√{12} desimetre olan bir çıtayı, her biri √{27} desimetre uzunluğunda eş parçalara ayıracaktır. Marangoz çıtadan mümkün olduğunca çok parça kesecek ve geriye kalan kısmı kullanmayarak bir kenara koyacaktır.\n**Buna göre kenara konulan parçanın uzunluğu kaç desimetredir?**",
  gorsel: `<svg viewBox="0 0 520 150" role="img" aria-label="Uzunluğu 5 kök 12 desimetre olan çıta, her biri kök 27 desimetre olan üç parçaya bölünmüş ve geriye bir kısım kalmıştır."><rect x="30" y="50" width="130" height="34" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="160" y="50" width="130" height="34" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="290" y="50" width="130" height="34" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="420" y="50" width="43" height="34" fill="none" stroke="var(--vurgu)" stroke-width="3" stroke-dasharray="6 4"/><g font-size="14" text-anchor="middle" fill="currentColor" font-weight="bold"><text x="95" y="72">√27 dm</text><text x="225" y="72">√27 dm</text><text x="355" y="72">√27 dm</text></g><text x="441" y="72" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">?</text><line x1="30" y1="108" x2="463" y2="108" stroke="currentColor" stroke-width="2"/><text x="246" y="132" font-size="16" text-anchor="middle" fill="currentColor">Çıtanın tamamı: 5√12 dm</text></svg>`,
  secenekler: ["√{3}", "3√{3}", "7√{3}", "9√{3}"],
  dogru: 0,
  hatalar: [
    null,
    "Bir parçanın uzunluğunu (√{27} = 3√{3}) cevap sandın. Soru geriye kalan parçanın uzunluğunu soruyor.",
    "Çıtadan yalnızca bir parça kestiğini varsaydın: 10√{3} − 3√{3} = 7√{3}. Marangoz mümkün olduğunca çok parça kesecektir.",
    "Kesilen parçaların toplam uzunluğunu buldun (3 · 3√{3} = 9√{3}). Soru kalan kısmı soruyor."
  ],
  aciklama: `Önce iki uzunluğu da sadeleştirir, sonra kaç tam parça çıktığını ve geriye ne kaldığını bulursun.
Adım 1: Çıta: 5√{12} = 5 · 2√{3} = 10√{3} dm. Parça: √{27} = 3√{3} dm.
Adım 2: Kaç parça çıktığını bul: 10√{3} : 3√{3} = [[10|3]] = 3 tam ve 1 kalan. Yani 3 parça kesilir.
Adım 3: Kesilen uzunluk 3 · 3√{3} = 9√{3} dm; kalan 10√{3} − 9√{3} = √{3} dm.
Sağlama: Üç parça ile kalan kısım toplanınca 9√{3} + √{3} = 10√{3}; çıtanın uzunluğuna eşit.
Sık yapılan hata: Kesilen parçaların toplamını ya da bir parçanın uzunluğunu kalan kısım sanmak. Önce kaç parçanın tam çıktığını belirle.
Cevap A.`
},
{
  id: "mat-kk-361",
  kazanim: "M.8.1.3.4",
  kademe: 3,
  zorluk: 4,
  soru: "Bir elektronik fabrikasında dikdörtgen biçimli bir devre kartı üretilmektedir. Kartın alanı ve bir kenarı şekilde verilmiştir. Kartın dört kenarına koruyucu şerit çekilecektir ve şerit tedarikçisi, çevre uzunluğunu en sade biçimde yazılmış olarak istemektedir.\n**Buna göre kartın çevresi kaç milimetredir?**",
  gorsel: `<svg viewBox="0 0 470 210" role="img" aria-label="Dikdörtgen devre kartı: alan 30 kök 6 milimetrekare, bir kenar 5 kök 2 milimetre, diğer kenar soruluyor."><rect x="100" y="35" width="270" height="110" rx="4" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="235" y="86" font-size="16" text-anchor="middle" fill="currentColor">Devre kartı</text><text x="235" y="112" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">Alan: 30√6 mm²</text><line x1="100" y1="168" x2="370" y2="168" stroke="var(--vurgu)" stroke-width="2"/><text x="235" y="190" font-size="17" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">? mm</text><line x1="80" y1="35" x2="80" y2="145" stroke="var(--vurgu)" stroke-width="2"/><text x="48" y="96" font-size="17" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">5√2 mm</text></svg>`,
  secenekler: ["22√{5}", "10√{2} + 12√{3}", "10√{2} + 6√{3}", "5√{2} + 6√{3}"],
  dogru: 1,
  hatalar: [
    "Kök içleri farklı iki terimi birleştirdin: (10 + 12)√{2 + 3}. Kök içleri farklı terimler toplanamaz; ifade 10√{2} + 12√{3} olarak kalır.",
    null,
    "Yalnızca birinci kenarı iki katına çıkardın. Karşılıklı kenarlar eşit olduğundan iki kenarın da 2 ile çarpılması gerekir.",
    "Yalnızca iki komşu kenarı topladın (yarı çevre). Çevre için bu toplamı 2 ile çarpmak gerekir."
  ],
  aciklama: `Dikdörtgenin diğer kenarı, alanın bilinen kenara bölümüdür; çevre ise komşu iki kenarın toplamının 2 katıdır. Kök içleri farklı terimler birleşmez.
Adım 1: Diğer kenar: 30√{6} : 5√{2} = (30 : 5) · √{6 : 2} = 6√{3} mm.
Adım 2: Komşu kenarların toplamı: 5√{2} + 6√{3}. Kök içleri farklı olduğundan bu ifade daha fazla sadeleşmez.
Adım 3: Çevre = 2 · (5√{2} + 6√{3}) = 10√{2} + 12√{3} mm.
Sağlama: 5√{2} · 6√{3} = 30√{6}. Alan tutuyor.
Sık yapılan hata: √{2} ve √{3} terimlerini √{5} altında toplamaya çalışmak. Kök içleri aynı olmayan terimler birleştirilemez.
Cevap B.`
},
{
  id: "mat-kk-362",
  kazanim: "M.8.1.3.6",
  kademe: 3,
  zorluk: 4,
  soru: "Bir kart oyununda altı kartın üzerinde sırasıyla √2, √3, √6, √8, √18 ve √32 sayıları yazılıdır. Oyuncu, kartlardan birbirinden farklı ikisini seçip üzerlerindeki sayıları çarpar. Çarpım bir doğal sayı olursa oyuncu puan kazanır. Oyunun hakemi, puan getiren kaç farklı kart çifti bulunduğunu merak etmektedir.\n**Buna göre puan getiren kaç farklı kart çifti vardır?**",
  gorsel: `<svg viewBox="0 0 480 120" role="img" aria-label="Üzerlerinde kök 2, kök 3, kök 6, kök 8, kök 18 ve kök 32 yazan altı kart."><g fill="var(--dolgu)" stroke="currentColor" stroke-width="3"><rect x="14" y="30" width="64" height="60" rx="6"/><rect x="92" y="30" width="64" height="60" rx="6"/><rect x="170" y="30" width="64" height="60" rx="6"/><rect x="248" y="30" width="64" height="60" rx="6"/><rect x="326" y="30" width="64" height="60" rx="6"/><rect x="404" y="30" width="64" height="60" rx="6"/></g><g font-size="20" text-anchor="middle" fill="currentColor" font-weight="bold"><text x="46" y="68">√2</text><text x="124" y="68">√3</text><text x="202" y="68">√6</text><text x="280" y="68">√8</text><text x="358" y="68">√18</text><text x="436" y="68">√32</text></g></svg>`,
  secenekler: ["3", "4", "5", "6"],
  dogru: 3,
  hatalar: [
    "Yalnızca √{2} ile eşleşen çiftleri saydın (√{2} ile √{8}, √{18} ve √{32}). √{8}, √{18} ve √{32} kartları da birbirleriyle çarpılınca doğal sayı verir.",
    "Çiftlerden ikisini (√{8} · √{32} ve √{18} · √{32}) saymadın. √{8} · √{32} = √{256} = 16 ve √{18} · √{32} = √{576} = 24'tür.",
    "Çiftlerden birini atladın. Dört kartın (√{2}, √{8}, √{18}, √{32}) her ikilisi doğal sayı verir; bu 6 çifttir.",
    null
  ],
  aciklama: `İki karekökün çarpımı √{a · b}'dir; doğal sayı olması için a · b tam kare olmalıdır. Kök içleri sadeleşince aynı çarpana sahip olan kartlar birbirleriyle eşleşir.
Adım 1: Kartları sadeleştir: √{2}, √{3}, √{6}, √{8} = 2√{2}, √{18} = 3√{2}, √{32} = 4√{2}.
Adım 2: √{2} çarpanını taşıyan dört kartın (√{2}, √{8}, √{18}, √{32}) her ikilisi doğal sayı verir. Örneğin √{2} · √{8} = 4, √{8} · √{18} = 12 ve √{18} · √{32} = 24 eder.
Adım 3: Dört karttan farklı iki kart seçmenin 6 yolu vardır: (2, 8), (2, 18), (2, 32), (8, 18), (8, 32), (18, 32). √{3} ve √{6} kartları hiçbir eşle doğal sayı vermez.
Sağlama: √{3} · √{6} = √{18} = 3√{2} doğal sayı değildir; √{3} · √{8} = √{24} de değildir.
Sık yapılan hata: Kartları sadeleştirmeden bakmak. Aynı kök çarpanı taşıyan kartlar birbirinin katıdır.
Cevap D.`
},
{
  id: "mat-kk-363",
  kazanim: "M.8.1.3.7",
  kademe: 3,
  zorluk: 4,
  soru: "Bir çiçekçi, alanı şekilde verilen kare biçimli bir sergi tezgâhının üst yüzünü, kenarı 20 cm olan kare biçimli mozaik parçalarıyla boşluk bırakmadan ve parça kesmeden kaplayacaktır. Tezgâhın kenarı boyunca uzanan bir sıradaki parçalar kırmızı, içeride kalan parçalar mavi olacaktır.\n**Buna göre kaç parça kırmızı olur?**",
  gorsel: `<svg viewBox="0 0 520 230" role="img" aria-label="Alanı 1,96 metrekare olan kare tezgâh; kenarı 20 santimetre olan karelerle kaplanacak, kenar boyunca kırmızı, içte mavi."><rect x="40" y="15" width="196" height="196" fill="var(--vurgu)" fill-opacity="0.35"/><rect x="68" y="43" width="140" height="140" fill="var(--dolgu)"/><path d="M40 15V211M68 15V211M96 15V211M124 15V211M152 15V211M180 15V211M208 15V211M236 15V211M40 15H236M40 43H236M40 71H236M40 99H236M40 127H236M40 155H236M40 183H236M40 211H236" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="40" y="15" width="196" height="196" fill="none" stroke="currentColor" stroke-width="3"/><text x="265" y="70" font-size="16" fill="currentColor" font-weight="bold">Tezgâh alanı: 1,96 m²</text><text x="265" y="102" font-size="15" fill="currentColor">Parça kenarı: 20 cm</text><text x="265" y="134" font-size="15" fill="var(--vurgu)" font-weight="bold">Kenardaki sıra: kırmızı</text><text x="265" y="156" font-size="15" fill="currentColor">İçte kalanlar: mavi</text></svg>`,
  secenekler: ["24", "25", "28", "49"],
  dogru: 0,
  hatalar: [
    null,
    "İçeride kalan mavi parçaları saydın (5 · 5 = 25). Soru kırmızı parçaları, yani kenardakileri soruyor.",
    "Köşe parçalarını iki kez saydın: 4 · 7 = 28. Kapalı bir çevrede köşedeki parça iki kenara birden aittir; bir kez sayılır.",
    "Bütün parçaları saydın (7 · 7 = 49). Soru yalnızca kenardaki sıradaki parçaları soruyor."
  ],
  aciklama: `Kare biçimli tezgâhın kenarı alanın kareköküdür. Birimleri aynı yapıp bir kenara kaç parça sığdığını bulur, sonra kenardaki sırayı sayarsın.
Adım 1: Tezgâhın kenarı √{1,96} = [[14|10]] = 1,4 m = 140 cm'dir.
Adım 2: Bir kenara 140 : 20 = 7 parça sığar. Toplam 7 · 7 = 49 parça vardır.
Adım 3: Kenardaki sıra: köşeleri iki kez saymadan 4 · 7 − 4 = 24 parçadır. İçeride kalan mavi parça sayısı 5 · 5 = 25 olur ve 24 + 25 = 49.
Sağlama: Kırmızı sıra, 49 parçadan iç 5 × 5 karesi çıkarılarak da bulunur: 49 − 25 = 24.
Sık yapılan hata: Kapalı çevrede köşeleri iki kez saymak. Çevre boyunca nesne sayısı, aralık sayısına eşittir; köşedeki parça bir kez sayılır.
Cevap A.`
},
{
  id: "mat-kk-364",
  kazanim: "M.8.1.3.8",
  kademe: 3,
  zorluk: 4,
  soru: "Bir bilim şenliğindeki sayı makinesinin ekranında üç değer tanımlanmıştır. Ziyaretçilerden, bu değerlerden hangilerinin iki tam sayının oranı biçiminde yazılabildiğini bulmaları istenmektedir. Değerler aşağıdaki tabloda verilmiştir.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<table class="tablo"><tr><th>Değer</th><th>Tanımı</th></tr><tr><td>K</td><td>√28 − √7</td></tr><tr><td>L</td><td>√28 · √7</td></tr><tr><td>M</td><td>K · L</td></tr></table>`,
  secenekler: [
    "Yalnızca L rasyoneldir.",
    "Yalnızca K irrasyoneldir.",
    "K, L ve M'nin üçü de irrasyoneldir.",
    "L ve M rasyoneldir, K irrasyoneldir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "M = K · L = √{7} · 14 = 14√{7} olduğundan M de irrasyoneldir. Yani irrasyonel olan yalnızca K değildir.",
    "L = √{28} · √{7} = √{196} = 14 olduğundan L rasyoneldir. Üçünün de irrasyonel olduğu söylenemez.",
    "M = 14√{7} bulunur ve kök içi tam kare olmadığından M irrasyoneldir. L rasyoneldir ama M değildir."
  ],
  aciklama: `Rasyonel sayılar iki tam sayının oranı biçiminde yazılabilir; irrasyonel sayılar yazılamaz. Her değeri hesaplayıp sadeleştirmek gerekir.
Adım 1: K = √{28} − √{7} = 2√{7} − √{7} = √{7}. Kök içi tam kare olmadığından K irrasyoneldir.
Adım 2: L = √{28} · √{7} = √{196} = 14. L rasyoneldir.
Adım 3: M = K · L = √{7} · 14 = 14√{7}. Kök içi 7 tam kare olmadığından M irrasyoneldir.
Sağlama: Rasyonel olan yalnızca L'dir; K ve M irrasyoneldir.
Sık yapılan hata: Bir rasyonel sayıyla çarpılınca irrasyonel sayının rasyonelleşeceğini sanmak. 14 · √{7} ifadesi hâlâ √{7} gibi irrasyoneldir.
Cevap A.`
},
{
  id: "mat-kk-365",
  kazanim: "M.8.1.3.1",
  kademe: 3,
  zorluk: 4,
  soru: "Bir bahçede kare biçimli iki çiçek tarhı bulunmaktadır. Büyük tarhın alanı, küçük tarhın alanının 9 katıdır. Bahçıvan, iki tarhın çevrelerini tel örgüyle çevirmek için ölçü almış ve büyük tarhın çevresinin küçük tarhın çevresinden 24 m fazla olduğunu görmüştür.\n**Buna göre büyük tarhın çevresi kaç metredir?**",
  gorsel: `<svg viewBox="0 0 520 200" role="img" aria-label="İki kare tarh: büyük tarhın alanı küçük tarhın alanının 9 katı; çevreleri arasındaki fark 24 metre."><rect x="30" y="20" width="150" height="150" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="215" y="120" width="50" height="50" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="105" y="100" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">Büyük tarh</text><text x="240" y="110" font-size="14" text-anchor="middle" fill="currentColor">Küçük tarh</text><text x="300" y="50" font-size="15" fill="currentColor">Alan (büyük) = 9 · Alan (küçük)</text><text x="300" y="80" font-size="15" fill="var(--vurgu)" font-weight="bold">Çevre farkı: 24 m</text></svg>`,
  secenekler: ["12", "24", "36", "81"],
  dogru: 2,
  hatalar: [
    "Küçük tarhın çevresini buldun (12 m). Soru büyük tarhın çevresini soruyor.",
    "Soruda verilen çevre farkını (24 m) cevap sandın. Fark, büyük tarhın çevresi değildir.",
    null,
    "Büyük tarhın alanını buldun (9 · 9 = 81 m²). Soru alanı değil çevreyi soruyor."
  ],
  aciklama: `Kare biçimli iki şeklin alanları arasındaki oran, kenarları arasındaki oranın karesidir. Bu yüzden kenar oranı, alan oranının kareköküdür; çevre oranı da kenar oranına eşittir.
Adım 1: Alan oranı 9 olduğundan kenar oranı √{9} = 3'tür. Çevre de 3 kat olur.
Adım 2: Küçük tarhın çevresine c diyelim. Büyük tarhın çevresi 3c'dir. Fark: 3c − c = 2c = 24, buradan c = 12 m.
Adım 3: Büyük tarhın çevresi 3 · 12 = 36 m'dir.
Sağlama: Küçük tarhın kenarı 3 m, büyük tarhın kenarı 9 m'dir. Alanlar 9 ve 81 (9 kat), çevreler 12 ve 36 (fark 24) olur.
Sık yapılan hata: Alan oranını (9) çevre oranı sanmak. Çevre oranı alan oranının kareköküdür.
Cevap C.`
},
{
  id: "mat-kk-366",
  kazanim: "M.8.1.3.2",
  kademe: 3,
  zorluk: 4,
  soru: "Bir sitede kapı numaraları 10'dan 99'a kadar iki basamaklı doğal sayılardır. Site yönetimi, kapı numarasının karekökü 7 ile 9 arasında olan daireleri \"B blok\" olarak ayırmıştır; \"arasında\" ifadesi uç değerleri kapsamamaktadır. Yönetim, B blokta kapı numarası 3'ün katı olan dairelerin her birine özel bir posta kutusu taktıracaktır.\n**Buna göre takılacak posta kutusu sayısı kaçtır?**",
  gorsel: null,
  secenekler: ["9", "10", "11", "12"],
  dogru: 1,
  hatalar: [
    "Bir sayıyı dışarıda bıraktın (örneğin 51 yerine 54'ten başladın). 51 = 3 · 17 sayısı 49 ile 81 arasındadır ve 3'ün katıdır; B blokta yer alır.",
    null,
    "81'i de saydın (51, 54, …, 81). √{81} = 9 olduğundan 81 numaralı daire 7 ile 9 arasında değildir; \"arasında\" uç değeri kapsamaz.",
    "Her iki ucu da saydın (48 ve 81). √{49} = 7 ve √{81} = 9 olduğundan 48 de 81 de aralığın dışındadır; üstelik 48'in karekökü 7'den küçüktür."
  ],
  aciklama: `"7 ile 9 arasında" demek, uç değerler dışarıda kalacak biçimde 7 < √{n} < 9 demektir.
Adım 1: Her tarafın karesini al: 49 < n < 81. Kapı numaraları 50, 51, …, 80'dir (hepsi iki basamaklıdır).
Adım 2: Bu aralıktaki 3'ün katları: 51, 54, 57, …, 78.
Adım 3: Sayısı (78 − 51) : 3 + 1 = 10'dur.
Sağlama: 51'den 78'e kadar sırayla yazınca: 51, 54, 57, 60, 63, 66, 69, 72, 75, 78 (10 sayı). 48 ve 81 aralığın dışındadır.
Sık yapılan hata: Uç değerleri aralığa dahil etmek. 49 ve 81 tam kare olduğu için √{49} = 7 ve √{81} = 9 olur; bu iki sayı "arasında" kapsamına girmez.
Cevap B.`
},
{
  id: "mat-kk-367",
  kazanim: "M.8.1.3.3",
  kademe: 3,
  zorluk: 4,
  soru: "Bir ışıklı panoda her yarışmacıya, kartında √{n} biçiminde bir sayı verilmektedir; burada n bir doğal sayıdır. Yarışmanın kuralına göre kartındaki sayı en az 3√{2} ve en çok 4√{3} olmalıdır (iki değer de kabul edilir). Bunun yanında n sayısı 4'ün katı olmalıdır. Hakem, bu koşulları sağlayan kaç farklı n değeri olduğunu hesaplamak istemektedir.\n**Buna göre n'nin kaç farklı değeri vardır?**",
  gorsel: null,
  secenekler: ["5", "6", "7", "8"],
  dogru: 3,
  hatalar: [
    "Hem alt hem üst sınırı dışarıda bıraktın: 20, 24 ve 48 değerlerini saymadın. Sınırlar kabul edildiğine göre 48 de aralığa dahildir; 3√{2} = √{18} olduğundan 20 ve 24 de aralıktadır.",
    "Alt sınırı fazla aldın ve 20 ile 24 değerlerini dışarıda bıraktın (28, …, 48). 3√{2} = √{18} olduğundan 20 ve 24 de şartı sağlar.",
    "Üst sınırı dışarıda bıraktın (20, …, 44). \"En çok 4√{3}\" ifadesinde uç değer kabul edilir; 4√{3} = √{48} olduğundan n = 48 de uygundur.",
    null
  ],
  aciklama: `Katsayılı kökleri kök içine alıp n ile karşılaştırırız: a√{b} = √{a^{2} · b}.
Adım 1: 3√{2} = √{9 · 2} = √{18} ve 4√{3} = √{16 · 3} = √{48}.
Adım 2: Koşul √{18} ≤ √{n} ≤ √{48}, yani 18 ≤ n ≤ 48 olur (uç değerler kabul).
Adım 3: Bu aralıktaki 4'ün katları: 20, 24, 28, 32, 36, 40, 44, 48. Sayısı 8'dir.
Sağlama: n = 16 için √{16} = 4 < √{18} ≈ 4,24 olduğundan 16 uygun değildir; n = 52 için √{52} ≈ 7,2 > √{48} ≈ 6,93 olduğundan 52 de uygun değildir.
Sık yapılan hata: "En az / en çok" ifadesindeki uç değerleri aralığın dışında bırakmak. Bu ifadeler uçları kapsar.
Cevap D.`
},
{
  id: "mat-kk-368",
  kazanim: "M.8.1.3.6",
  kademe: 3,
  zorluk: 4,
  soru: "Bir parke ustası, uzunlukları √{24} m ve √{150} m olan iki dikdörtgen biçimli zemin parçasını döşeyecektir. İki parçanın da genişliği √{k} m olacaktır; burada k bir doğal sayıdır. Usta, her iki parçanın alanının da metrekare cinsinden bir doğal sayı olmasını istemekte ve bunu sağlayan en küçük k değerini seçmektedir.\n**Buna göre iki parçanın alanları toplamı kaç metrekaredir?**",
  gorsel: null,
  secenekler: ["6", "30", "42", "60"],
  dogru: 2,
  hatalar: [
    "Seçilen k değerini (6) cevap sandın. Soru iki alanın toplamını soruyor.",
    "Yalnızca ikinci parçanın alanını buldun (√{150} · √{6} = 30). Birinci parçanın alanı olan 12'yi toplamaya katmadın.",
    null,
    "Alanları toplamak yerine √{24} ile √{150} uzunluklarını birbiriyle çarptın: √{24} · √{150} = √{3600} = 60. Soru, k ile çarpılmış iki alanın toplamını soruyor."
  ],
  aciklama: `√{a} · √{k} doğal sayı olsun diyorsak a · k tam kare olmalıdır. Bunun için a'nın asal çarpanlarında üssü tek kalanları tamamlarız.
Adım 1: 24 = 2^{3} · 3 ve 150 = 2 · 3 · 5^{2}. İkisinde de üssü tek olan çarpanlar 2 ve 3'tür. Bu yüzden her ikisi için de k = 6 (ve 6'nın tam karelerle çarpımları) uygundur; en küçüğü 6'dır.
Adım 2: Alanlar: √{24} · √{6} = √{144} = 12 m² ve √{150} · √{6} = √{900} = 30 m².
Adım 3: Toplam 12 + 30 = 42 m²'dir.
Sağlama: 24 · 6 = 144 = 12^{2} ve 150 · 6 = 900 = 30^{2}. İki alan da doğal sayı.
Sık yapılan hata: İstenen değeri atlamak. Önce k bulunur, sonra soru alanların toplamını sorar.
Cevap C.`
},
{
  id: "mat-kk-369",
  kazanim: "M.8.1.3.4",
  kademe: 3,
  zorluk: 4,
  soru: "Bir bilim kulübünde bir deneyde üç ölçüm alınmıştır. Ölçümlerin sonuçları metre cinsinden aşağıdaki tabloda verilmiştir. Kulüp başkanı, birinci ve ikinci ölçümü toplayıp bulduğu sonuçtan üçüncü ölçümü çıkaracak ve sonucu en sade biçimde yazacaktır.\n**Buna göre bu işlemin sonucu kaç metredir?**",
  gorsel: `<table class="tablo"><tr><th>Ölçüm</th><th>Değer (m)</th></tr><tr><td>1. ölçüm</td><td>6 / √3</td></tr><tr><td>2. ölçüm</td><td>√12</td></tr><tr><td>3. ölçüm</td><td>9 / √27</td></tr></table>`,
  secenekler: ["√{3}", "3√{3}", "4√{3}", "5√{3}"],
  dogru: 1,
  hatalar: [
    "İşaretleri karıştırdın: birinci ölçümden ikinciyi çıkarıp üçüncüyü ekledin (2√{3} − 2√{3} + √{3} = √{3}). Önce birinci ve ikinci toplanır, sonra üçüncü çıkarılır.",
    null,
    "Üçüncü ölçümü işleme katmadın: 2√{3} + 2√{3} = 4√{3}. Toplamdan üçüncü ölçüm de çıkarılacaktı.",
    "Üçüncü ölçümü çıkarmak yerine ekledin: 2√{3} + 2√{3} + √{3} = 5√{3}."
  ],
  aciklama: `Paydasında tek kök olan ifadelerde pay ve payda aynı kökle çarpılarak payda kökten kurtarılır; sonra kök içi aynı olan terimler toplanır ya da çıkarılır.
Adım 1: [[6|√{3}]] = [[6√{3}|3]] = 2√{3}. İkinci ölçüm: √{12} = 2√{3}.
Adım 2: Üçüncü ölçüm: √{27} = 3√{3} olduğundan [[9|√{27}]] = [[9|3√{3}]] = [[3|√{3}]] = [[3√{3}|3]] = √{3}.
Adım 3: İşlemi yap: 2√{3} + 2√{3} − √{3} = (2 + 2 − 1)√{3} = 3√{3} metre.
Sağlama: √{3} ≈ 1,73 alırsak ölçümler ≈ 3,46; 3,46; 1,73 eder ve 3,46 + 3,46 − 1,73 ≈ 5,19. 3√{3} ≈ 5,19.
Sık yapılan hata: Paydadaki kökü sadeleştirmeden işlem yapmaya çalışmak. Önce her terimi kök içi 3 olan sade biçime getir.
Cevap B.`
},
{
  id: "mat-kk-370",
  kazanim: "M.8.1.3.5",
  kademe: 3,
  zorluk: 4,
  soru: "Bir resim atölyesinde kare biçimli bir resmin kenarı 3√{8} cm'dir. Atölye, resmin dört kenarına eşit genişlikte, kare bir çerçeve geçirecektir. Çerçevenin genişliği her kenarda √{18} cm'dir. Çerçeve yalnızca resmin dışında kalan bölümdür ve çerçeve ile resmin birlikte oluşturduğu şekil de bir karedir.\n**Buna göre çerçevenin alanı kaç santimetrekaredir?**",
  gorsel: `<svg viewBox="0 0 480 200" role="img" aria-label="Kenarı 3 kök 8 santimetre olan kare resim ve çevresinde her kenarda kök 18 santimetre genişliğinde çerçeve."><rect x="40" y="20" width="160" height="160" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="80" y="60" width="80" height="80" fill="none" stroke="var(--vurgu)" stroke-width="3"/><text x="120" y="106" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">Resim</text><text x="235" y="85" font-size="15" fill="currentColor">Resmin kenarı: 3√8 cm</text><text x="235" y="117" font-size="15" fill="currentColor">Çerçeve genişliği:</text><text x="235" y="139" font-size="15" fill="currentColor">her kenarda √18 cm</text></svg>`,
  secenekler: ["90", "216", "288", "360"],
  dogru: 1,
  hatalar: [
    "Çerçeve genişliğini yalnızca bir yandan ekledin: dış kenar 6√{2} + 3√{2} = 9√{2}, dış alan 162 ve çerçeve 162 − 72 = 90 bulunur. Çerçeve resmin iki karşı kenarında da vardır.",
    null,
    "Yalnızca dış karenin alanını buldun ((12√{2})^{2} = 288). Resmin alanı olan 72 çıkarılmalıydı.",
    "Dış karenin alanı ile resmin alanını topladın: 288 + 72 = 360. Çerçeve, iki alanın farkıdır."
  ],
  aciklama: `Çerçevenin alanı, dış karenin alanı ile resmin alanı arasındaki farktır. Kareköklü ifadeleri önce sadeleştirmek işlemi kolaylaştırır.
Adım 1: Resmin kenarı: 3√{8} = 3 · 2√{2} = 6√{2} cm. Alanı (6√{2})^{2} = 36 · 2 = 72 cm².
Adım 2: Çerçeve genişliği: √{18} = 3√{2} cm. Dış kenar = 6√{2} + 3√{2} + 3√{2} = 12√{2} cm; dış alan (12√{2})^{2} = 144 · 2 = 288 cm².
Adım 3: Çerçevenin alanı 288 − 72 = 216 cm²'dir.
Sağlama: Çerçeve, dış alanın resmin alanının 4 katı (288 = 4 · 72) olması nedeniyle resmin 3 katı kadardır: 3 · 72 = 216.
Sık yapılan hata: Genişliği dış kenara yalnızca bir kez eklemek. Resmin iki karşı kenarında çerçeve vardır.
Cevap B.`
},
{
  id: "mat-kk-371",
  kazanim: "M.8.1.3.7",
  kademe: 3,
  zorluk: 4,
  soru: "Bir mimar, kare biçimli iki levhayı birer kenarları aynı doğru üzerinde olacak biçimde, aralarında boşluk bırakmadan yan yana yerleştirerek bir gösteri platformu tasarlamıştır. Levhaların alanları şekilde verilmiştir. Platformun dış sınırı boyunca baştan başa bir korkuluk çekilecektir.\n**Buna göre çekilecek korkuluğun uzunluğu kaç metredir?**",
  gorsel: `<svg viewBox="0 0 480 200" role="img" aria-label="Alanları 2,25 ve 0,81 metrekare olan iki kare levha, alt kenarları aynı doğru üzerinde yan yana."><rect x="40" y="20" width="150" height="150" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="190" y="80" width="90" height="90" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><text x="115" y="92" font-size="15" text-anchor="middle" fill="currentColor">Büyük levha</text><text x="115" y="114" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">2,25 m²</text><text x="235" y="118" font-size="14" text-anchor="middle" fill="currentColor">Küçük levha</text><text x="235" y="140" font-size="15" text-anchor="middle" fill="currentColor" font-weight="bold">0,81 m²</text></svg>`,
  secenekler: ["4,8", "6,0", "7,8", "9,6"],
  dogru: 2,
  hatalar: [
    "Yalnızca alt ve üst kenarları saydın (2 · (1,5 + 0,9) = 4,8). Platformun dikey kenarları da korkuluğa dahildir.",
    "Yalnızca büyük levhanın çevresini buldun (4 · 1,5 = 6,0). Küçük levha da sınırın bir parçasıdır.",
    null,
    "İki levhanın çevrelerini topladın (6,0 + 3,6 = 9,6). Levhaların birleştiği 0,9 m'lik ortak kenar platformun dış sınırında bulunmaz; iki levhada da çıkarılmalıdır."
  ],
  aciklama: `Kare biçimli levhanın kenarı alanın kareköküdür. Ondalık karekök, sayı kesre çevrilerek bulunur.
Adım 1: Büyük levha: 2,25 = [[225|100]] olduğundan kenarı [[15|10]] = 1,5 m. Küçük levha: 0,81 = [[81|100]] olduğundan kenarı [[9|10]] = 0,9 m.
Adım 2: İki levhanın çevreleri toplamı 4 · 1,5 + 4 · 0,9 = 6 + 3,6 = 9,6 m'dir. Birleşen 0,9 m'lik kenar iki levhada da iç tarafta kalır, yani iki kez çıkarılır: 9,6 − 2 · 0,9 = 7,8 m.
Adım 3: Korkuluk 7,8 m uzunluğundadır.
Sağlama: Platform, 2,4 m × 1,5 m'lik bir dikdörtgenle aynı çevreye sahiptir: 2 · (2,4 + 1,5) = 7,8 m.
Sık yapılan hata: Birleştirilen şekillerin çevresini bulurken ortak kenarı hesaba katmak. İç tarafta kalan kenar, dış sınıra dahil edilmez.
Cevap C.`
},
{
  id: "mat-kk-372",
  kazanim: "M.8.1.3.2",
  kademe: 3,
  zorluk: 4,
  soru: "Bir fotoğraf stüdyosunda kare biçimli baskılar alınmaktadır. Her baskının bir kenarı 5,5 cm'den uzun ve 6,5 cm'den kısadır. Stüdyo, baskıların alanlarını santimetrekare cinsinden hep bir doğal sayı olarak kaydetmektedir. Müşteri hizmetleri, kayıt defterinde kaç farklı alan değerinin bulunabileceğini merak etmektedir.\n**Buna göre bu baskıların alanı kaç farklı doğal sayı değeri alabilir?**",
  gorsel: null,
  secenekler: ["10", "11", "12", "13"],
  dogru: 2,
  hatalar: [
    "İki ucu da dışarıda bıraktın (32, …, 41). 5,5^{2} = 30,25 olduğundan alan 31 olabilir; 6,5^{2} = 42,25 olduğundan alan 42 de olabilir.",
    "Bir ucu dışarıda bıraktın (31, …, 41 ya da 32, …, 42). 31 ve 42 değerlerinin ikisi de uygundur.",
    null,
    "30'u da saydın (30, …, 42). 5,5^{2} = 30,25 olduğundan alanı 30 olan kare 5,5 cm'den kısa bir kenara sahiptir; 30 uygun değildir."
  ],
  aciklama: `Kare biçimli bir baskının alanı, kenarının karesidir. Kenar bir aralıkta ise alan da, uçların karelerinin oluşturduğu aralıktadır.
Adım 1: Koşulu yaz: 5,5 < kenar < 6,5.
Adım 2: Kareleri al: 5,5^{2} < alan < 6,5^{2}, yani 30,25 < alan < 42,25.
Adım 3: Alan doğal sayı olduğundan alan 31, 32, …, 42 değerlerini alabilir. Sayısı 42 − 31 + 1 = 12'dir.
Sağlama: √{31} ≈ 5,57 > 5,5 ve √{42} ≈ 6,48 < 6,5 olduğundan ikisi de uygundur. √{30} ≈ 5,48 < 5,5 ve √{43} ≈ 6,56 > 6,5 olduğundan ikisi dışarıdadır.
Sık yapılan hata: Uç değerlerin kendisi tam sayı değilse de aralığın hangi tarafına düştüğünü denetlememek. 30,25 ve 42,25 doğal sayı olmadığından yanlarındaki 31 ve 42 aralığa girer.
Cevap C.`
},
{
  id: "mat-kk-373",
  kazanim: "M.8.1.3.6",
  kademe: 3,
  zorluk: 4,
  soru: "Bir güvenlik kasasının şifre ekranı iki aşamalıdır. Birinci aşamada ekranda görünen √{54} sayısı bir x sayısıyla çarpılır ve kasa, sonucun tam olarak 36 olmasıyla bu aşamayı geçer; kasanın üzerinde x'in, kök içindeki sayısı sadeleşmeyen bir kareköklü ifade olduğu yazmaktadır. İkinci aşamada x sayısı, k bir doğal sayı olmak üzere √{k} ile çarpılacak ve sonucun bir doğal sayı olması gerekmektedir. Kasanın sahibi, bu aşamayı geçirecek en küçük k değerini seçmiştir.\n**Buna göre ikinci aşamadaki çarpımın sonucu kaçtır?**",
  gorsel: null,
  secenekler: ["6", "12", "24", "36"],
  dogru: 1,
  hatalar: [
    "Seçilen k değerini (6) cevap sandın. Soru, ikinci aşamadaki çarpımın sonucunu soruyor.",
    null,
    "k = 24 alırsan 2√{6} · √{24} = 2√{144} = 24 bulursun. Bu da doğal sayıdır ama k = 24 en küçük değer değildir.",
    "Birinci aşamanın sonucunu (36) cevap sandın. Soru ikinci aşamadaki çarpımı soruyor."
  ],
  aciklama: `Önce x'i bulmak için sonucu çarpılan sayıya bölersin: x = 36 : √{54}. Sonra ikinci aşamada çarpımın tam kare olmasını sağlayan en küçük k'yi arar, çarpımı hesaplarsın.
Adım 1: √{54} = √{9 · 6} = 3√{6} olduğundan x = [[36|3√{6}]] = [[12|√{6}]]. Pay ve paydayı √{6} ile çarp: [[12√{6}|6]] = 2√{6}.
Adım 2: İkinci aşamada 2√{6} · √{k} = 2√{6k} olur. 6k tam kare olmalıdır; en küçük k = 6'dır.
Adım 3: Çarpım 2√{6 · 6} = 2√{36} = 2 · 6 = 12'dir.
Sağlama: Birinci aşama: √{54} · 2√{6} = 3√{6} · 2√{6} = 6 · 6 = 36. Tutuyor.
Sık yapılan hata: Sorulan değeri atlayıp ara sonucu (k = 6) ya da ilk aşamanın sonucunu (36) cevap sanmak.
Cevap B.`
},
{
  id: "mat-kk-374",
  kazanim: "M.8.1.3.8",
  kademe: 3,
  zorluk: 4,
  soru: "Yarıçapı √{12} m olan dairesel bir havuzun alanı π · r^{2} ve çevresi 2 · π · r bağıntılarıyla hesaplanacaktır. Hesap yapan mühendis, π yerine 3 almıştır. Bulunan alan değerine K, bulunan çevre değerine L denilmiştir.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<svg viewBox="0 0 470 190" role="img" aria-label="Yarıçapı kök 12 metre olan dairesel havuz; hesapta pi yerine 3 alınacak."><circle cx="140" cy="95" r="70" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><line x1="140" y1="95" x2="210" y2="95" stroke="var(--vurgu)" stroke-width="3"/><circle cx="140" cy="95" r="3" fill="currentColor"/><text x="175" y="86" font-size="16" text-anchor="middle" fill="var(--vurgu)" font-weight="bold">r</text><text x="240" y="82" font-size="16" fill="currentColor" font-weight="bold">r = √12 m</text><text x="240" y="108" font-size="15" fill="currentColor">Hesapta π yerine</text><text x="240" y="130" font-size="15" fill="currentColor">3 alınacak.</text></svg>`,
  secenekler: [
    "Yalnızca K irrasyoneldir.",
    "K ve L irrasyoneldir.",
    "K ve L rasyoneldir.",
    "Yalnızca L irrasyoneldir."
  ],
  dogru: 3,
  hatalar: [
    "K = 3 · (√{12})^{2} = 3 · 12 = 36 bulunur. Bu bir doğal sayıdır; rasyoneldir. Ayrıca L de irrasyoneldir.",
    "K = 3 · (√{12})^{2} = 36 bulunur ve 36 rasyoneldir. Kökü kendisiyle çarpınca kök kalkar.",
    "L = 2 · 3 · √{12} = 6 · 2√{3} = 12√{3} bulunur. Kök içi 3 tam kare olmadığından L irrasyoneldir.",
    null
  ],
  aciklama: `π yerine 3 alınırsa hesapta yalnızca yarıçaptaki kök kalır. Alan hesabında yarıçap kendisiyle çarpılırken kök kalkar, çevre hesabında ise kalmaz.
Adım 1: Alan: K = 3 · (√{12})^{2} = 3 · 12 = 36. Bu bir doğal sayıdır, yani rasyoneldir.
Adım 2: Çevre: L = 2 · 3 · √{12} = 6 · 2√{3} = 12√{3}.
Adım 3: 12√{3} ifadesinin kök içi 3 tam kare değildir; L irrasyoneldir.
Sağlama: √{3} ≈ 1,73 ise L ≈ 20,8'dir ve ondalık gösterimi ne biter ne de tekrar eder. K = 36 ise tam sayıdır.
Sık yapılan hata: Alanda da çevrede de aynı sonucu beklemek. Kök, alanda yarıçap ikinci kez çarpıldığı için yok olur; çevrede olmaz.
Cevap D.`
},
{
  id: "mat-kk-375",
  kazanim: "M.8.1.3.1",
  kademe: 3,
  zorluk: 4,
  soru: "Bir sanatçı, 500 küçük kare cam parçasıyla kare biçimli bir mozaik pano yapmak istemektedir. Pano, sıra sayısı ile her sıradaki parça sayısı eşit olacak biçimde hazırlanacaktır. Sanatçı 500 parçanın hepsini kullanarak böyle bir pano yapamayacağını fark etmiş ve ya biraz parça atmaya ya da biraz parça eklemeye karar vermiştir; yalnızca bu iki yoldan birini kullanacak ve değişiklik miktarını mümkün olduğunca az tutacaktır.\n**Buna göre sanatçı en az kaç parçayı atmalı ya da eklemelidir?**",
  gorsel: `<svg viewBox="0 0 470 200" role="img" aria-label="500 küçük kare cam parçası; kare biçimli mozaik pano yapılacak."><rect x="40" y="20" width="160" height="160" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><path d="M80 20V180M120 20V180M160 20V180M40 60H200M40 100H200M40 140H200" stroke="currentColor" stroke-width="1.5" fill="none"/><text x="120" y="107" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">500 parça</text><text x="230" y="85" font-size="15" fill="currentColor">Pano kare düzende olacak:</text><text x="230" y="107" font-size="15" fill="currentColor">sıra sayısı = bir sıradaki</text><text x="230" y="129" font-size="15" fill="currentColor">parça sayısı</text></svg>`,
  secenekler: ["16", "22", "23", "29"],
  dogru: 0,
  hatalar: [
    null,
    "Atılınca oluşan karedeki sıra sayısını (22) cevap sandın. Soru kaç parçanın atılacağını ya da ekleneceğini soruyor.",
    "Eklenince oluşan karedeki sıra sayısını (23) cevap sandın. Soru kaç parçanın atılacağını ya da ekleneceğini soruyor.",
    "Ekleme yolunu seçtin (529 − 500 = 29). Parça atarak (500 − 484 = 16) daha az değişiklikle kare elde edilir."
  ],
  aciklama: `Kare düzende parça sayısı tam karedir. 500 sayısına en yakın iki tam kareyi bulup hangisine daha az değişiklikle ulaşıldığına bakarsın.
Adım 1: 500'ün komşu tam kareleri: 22^{2} = 484 ve 23^{2} = 529. Yani 22 < √{500} < 23'tür.
Adım 2: Parça atarak 484'e inmek için 500 − 484 = 16 parça atılır. Parça ekleyerek 529'a çıkmak için 529 − 500 = 29 parça eklenir.
Adım 3: En az değişiklik 16 parçadır (atma yolu).
Sağlama: 500 − 16 = 484 = 22 · 22; 22 sıra, her sırada 22 parça.
Sık yapılan hata: Komşu karelerin kenarını (22 ve 23) cevap sanmak. Sorulan, parça sayısındaki değişikliktir.
Cevap A.`
}
);
