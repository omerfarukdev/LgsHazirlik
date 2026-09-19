// Matematik — Çarpanlar ve Katlar: Kademe 1 (Kavrama) ve Kademe 2 (Pekiştirme)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["carpanlar-katlar"] = window.LGS_BANK["carpanlar-katlar"] || []).push(
/* ===================== KADEME 1 — KAVRAMA ===================== */
{
  id: "mat-ck-101",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**90 sayısının asal çarpanlarına ayrılmış biçimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2 · 3^{2} · 5", "2 · 5 · 9", "2 · 3 · 5", "2^{2} · 3 · 5"],
  dogru: 0,
  hatalar: [
    null,
    "Asal olmayan çarpanda bırakma: 9 asal değildir (9 = 3 · 3); ayırma yarım kalmış.",
    "Tekrarlayan asal çarpanı bir kez yazma: 2 · 3 · 5 = 30 eder, 90 etmez.",
    "Üssü yanlış asal çarpana koyma: 2^{2} · 3 · 5 = 60 eder, 90 etmez."
  ],
  aciklama: `Asal çarpanlara ayırmak, bir sayıyı yalnızca asal sayıların çarpımı olarak yazmaktır. Asal sayı, 1 ve kendisinden başka pozitif böleni olmayan, 1'den büyük sayıdır (2, 3, 5, 7, 11…).
Adım 1: 90'ı en küçük asal sayıdan başlayarak böl: 90 ÷ 2 = 45.
Adım 2: 45 ikiye bölünmez, 3'e geç: 45 ÷ 3 = 15 ve 15 ÷ 3 = 5.
Adım 3: 5 asaldır: 5 ÷ 5 = 1. Bölme bitti.
Adım 4: Kullandığın asal sayıları çarpım olarak yaz: 90 = 2 · 3 · 3 · 5 = 2 · 3^{2} · 5. Aynı asal çarpan kaç kez geçtiyse o sayı üs olarak yazılır.
Sağlama: 2 · 9 · 5 = 90.
Sık yapılan hata: 2 · 5 · 9 çarpımı da 90 eder ama 9 asal olmadığı için bu, asal çarpanlara ayrılmış biçim değildir.
Cevap A.`
},
{
  id: "mat-ck-102",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**28 sayısının pozitif tam sayı çarpanlarının sayısı kaçtır?**",
  gorsel: null,
  secenekler: ["3", "4", "5", "6"],
  dogru: 3,
  hatalar: [
    "Çarpan çiftlerini (1 · 28, 2 · 14, 4 · 7) sayıp her çiftte iki çarpan olduğunu unutma.",
    "1'i ve sayının kendisini (28) çarpan saymama.",
    "1'i ya da 28'i çarpan saymayı unutma.",
    null
  ],
  aciklama: `Bir sayının çarpanı (böleni), o sayıyı kalansız bölen pozitif tam sayıdır. 1 ve sayının kendisi her zaman çarpandır.
Adım 1: Çarpanları çiftler hâlinde ara; böylece hiçbirini atlamazsın: 1 · 28, 2 · 14, 4 · 7.
Adım 2: 3, 5 ve 6 sayıları 28'i kalansız bölmez; 7'ye gelince çiftler tekrar etmeye başlar, aramayı bitir.
Adım 3: Çarpanları sırala: 1, 2, 4, 7, 14, 28. Toplam 6 tane.
Sık yapılan hata: 1'i ve 28'i çarpan saymayı unutmak. 3 çift bulduysan her çiftte iki çarpan olduğunu hatırla: 3 · 2 = 6.
Cevap D.`
},
{
  id: "mat-ck-103",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "Aşağıdaki tabloda 20 ve 30 sayılarının pozitif tam sayı bölenleri verilmiştir.\n**Buna göre EBOB(20, 30) kaçtır?**",
  gorsel: `<table class="tablo"><tr><th>Sayı</th><th>Pozitif tam sayı bölenleri</th></tr><tr><td>20</td><td>1, 2, 4, 5, 10, 20</td></tr><tr><td>30</td><td>1, 2, 3, 5, 6, 10, 15, 30</td></tr></table>`,
  secenekler: ["1", "5", "10", "60"],
  dogru: 2,
  hatalar: [
    "Ortak bölenlerin en büyüğü yerine en küçüğünü alma.",
    "Bir ortak bölen bulunca durma: 5 ortak bölendir ama en büyüğü değildir.",
    null,
    "EBOB ile EKOK'u karıştırma: 60, bu iki sayının en küçük ortak katıdır."
  ],
  aciklama: `EBOB (en büyük ortak bölen), iki sayıyı birden kalansız bölen sayıların en büyüğüdür.
Adım 1: Tablodaki iki listede ortak olan bölenleri bul: 1, 2, 5 ve 10.
Adım 2: Ortak bölenlerin en büyüğünü seç: 10.
Sağlama: 20 ÷ 10 = 2 ve 30 ÷ 10 = 3; ikisi de kalansız bölünüyor ve 10'dan büyük ortak bölen yok.
Sık yapılan hata: EBOB ile EKOK'u karıştırmak. 60, iki sayının en küçük ortak katıdır; bölen değil kattır.
Cevap C.`
},
{
  id: "mat-ck-104",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "**EKOK(8, 12) kaçtır?**",
  gorsel: null,
  secenekler: ["4", "12", "20", "24"],
  dogru: 3,
  hatalar: [
    "EBOB ile EKOK'u karıştırma: 4, bu iki sayının en büyük ortak bölenidir.",
    "Büyük sayıyı ortak kat sanma: 12, 8'in katı değildir.",
    "Sayıları toplama: 8 + 12 = 20; 20 ne 8'in ne de 12'nin katıdır.",
    null
  ],
  aciklama: `EKOK (en küçük ortak kat), iki sayının ikisinin de katı olan pozitif sayıların en küçüğüdür.
Adım 1: Büyük sayının katlarını sırayla yaz: 12, 24, 36…
Adım 2: Bu katlardan 8'e kalansız bölünen ilk sayıyı bul: 12 ÷ 8 kalanlıdır, 24 ÷ 8 = 3 kalansızdır.
Adım 3: Öyleyse EKOK(8, 12) = 24.
İkinci yol: 8 = 2^{3} ve 12 = 2^{2} · 3. EKOK için her asal çarpanın en büyük üslüsünü al: 2^{3} · 3 = 24.
Sık yapılan hata: EBOB ile karıştırmak. 4, bu iki sayının en büyük ortak bölenidir; EKOK ise sayıların hiçbirinden küçük olamaz.
Cevap D.`
},
{
  id: "mat-ck-105",
  kazanim: "M.8.1.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdaki sayı çiftlerinden hangisi aralarında asaldır?**",
  gorsel: null,
  secenekler: ["4 ve 15", "7 ve 28", "9 ve 21", "10 ve 25"],
  dogru: 0,
  hatalar: [
    null,
    "Sayılardan biri asal olunca çifti aralarında asal sanma: 28 = 7 · 4 olduğundan ikisi de 7'ye bölünür.",
    "İki tek sayıyı aralarında asal sanma: 9 ve 21'in ikisi de 3'e bölünür.",
    "Biri çift biri tek olan sayıların ortak böleni olmaz sanma: 10 ve 25'in ikisi de 5'e bölünür."
  ],
  aciklama: `Aralarında asal sayılar, 1'den başka ortak pozitif böleni olmayan sayılardır; yani EBOB'ları 1'dir. Sayıların kendilerinin asal olması gerekmez.
Adım 1: 4 ve 15 → 4'ün bölenleri 1, 2, 4; 15'in bölenleri 1, 3, 5, 15. Ortak bölen yalnızca 1. Aralarında asal.
Adım 2: 7 ve 28 → 28 = 7 · 4 olduğundan ikisi de 7'ye bölünür.
Adım 3: 9 ve 21 → ikisi de 3'e bölünür.
Adım 4: 10 ve 25 → ikisi de 5'e bölünür.
Sık yapılan hata: "Aralarında asal" ifadesini "ikisi de asal" ya da "biri asal" diye anlamak. 4 de 15 de asal değildir ama aralarında asaldır; 7 asaldır ama 28 ile aralarında asal değildir.
Cevap A.`
},
{
  id: "mat-ck-106",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Aşağıda A sayısının çarpan ağacı verilmiştir. Ağaçta her sayı, altındaki iki sayının çarpımına eşittir.\n**Buna göre A + B kaçtır?**",
  gorsel: `<svg viewBox="0 0 360 250" role="img" aria-label="A sayısının çarpan ağacı"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="112" y1="46" x2="68" y2="78"/><line x1="128" y1="46" x2="172" y2="78"/><line x1="172" y1="112" x2="128" y2="144"/><line x1="188" y1="112" x2="232" y2="144"/><line x1="232" y1="178" x2="188" y2="210"/><line x1="248" y1="178" x2="292" y2="210"/><circle cx="60" cy="94" r="16"/><circle cx="120" cy="160" r="16"/><circle cx="180" cy="226" r="16"/></g><rect x="102" y="12" width="36" height="32" rx="4" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="282" y="210" width="36" height="32" rx="4" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><g fill="currentColor" font-size="20" text-anchor="middle"><text x="120" y="35" font-weight="bold">A</text><text x="60" y="101">2</text><text x="180" y="101">30</text><text x="120" y="167">2</text><text x="240" y="167">15</text><text x="180" y="233">3</text><text x="300" y="233" font-weight="bold">B</text></g></svg>`,
  secenekler: ["37", "60", "65", "72"],
  dogru: 2,
  hatalar: [
    "Dalları çarpmak yerine toplama: A = 2 + 30 = 32 bulunur ve 32 + 5 = 37 elde edilir.",
    "Ara sonucu cevap sanma: yalnızca A = 60 bulunmuş, B eklenmemiş.",
    null,
    "B'yi bölmeyle değil çıkarmayla bulma: 15 − 3 = 12 alınırsa 60 + 12 = 72 çıkar."
  ],
  aciklama: `Çarpan ağacında her sayı, altındaki iki dalın çarpımına eşittir. Dalın ucunda asal sayı kalınca o dal biter.
Adım 1: En alttan başla: 15 = 3 · B olduğundan B = 15 ÷ 3 = 5.
Adım 2: En üste çık: A = 2 · 30 = 60.
Adım 3: İsteneni hesapla: A + B = 60 + 5 = 65.
Sağlama: Dalların ucundaki asal sayıları çarp: 2 · 2 · 3 · 5 = 60. Bu, A'nın asal çarpanlarına ayrılmış biçimidir: 60 = 2^{2} · 3 · 5.
Cevap C.`
},
{
  id: "mat-ck-107",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Beden eğitimi dersinde 36 öğrenci, her sırada eşit sayıda öğrenci olacak şekilde sıralara dizilecektir. Hem sıra sayısı hem de bir sıradaki öğrenci sayısı 1'den büyük olacaktır.\n**Buna göre sıra sayısı kaç farklı değer alabilir?**",
  gorsel: null,
  secenekler: ["4", "7", "8", "9"],
  dogru: 1,
  hatalar: [
    "Çarpan çiftlerini (2 · 18, 3 · 12, 4 · 9, 6 · 6) sayma: 2 sıra ile 18 sıra farklı değerlerdir, ikisi de sayılır.",
    null,
    "Yalnızca 1'i çıkarıp 36'yı çıkarmayı unutma: 36 sıra olursa her sırada 1 öğrenci kalır.",
    "Koşulu uygulamadan 36'nın bütün çarpanlarını sayma."
  ],
  aciklama: `Öğrenciler eşit sıralara dizileceği için sıra sayısı 36'yı kalansız bölmelidir; yani sıra sayısı 36'nın bir çarpanıdır.
Adım 1: 36'nın çarpanlarını çiftler hâlinde bul: 1 · 36, 2 · 18, 3 · 12, 4 · 9, 6 · 6. Çarpanlar: 1, 2, 3, 4, 6, 9, 12, 18, 36 (9 tane).
Adım 2: Koşulu uygula. Sıra sayısı 1 olamaz. Sıra sayısı 36 olursa her sırada 1 öğrenci kalır, bu da olamaz. Bu iki değeri çıkar.
Adım 3: Geriye 2, 3, 4, 6, 9, 12, 18 kalır: 7 farklı değer.
Sık yapılan hata: Çarpan çiftlerini sayıp 4 demek. 2 sıra–18 kişi ile 18 sıra–2 kişi farklı dizilişlerdir; sıra sayısı olarak ikisi de sayılır.
Cevap B.`
},
{
  id: "mat-ck-108",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Elif, uzunlukları 30 cm ve 42 cm olan iki kurdeleyi hiç artmayacak şekilde, birbirine eşit uzunlukta parçalara ayıracaktır. Parçaların uzunluğu santimetre cinsinden tam sayı ve olabildiğince büyük olacaktır.\n**Buna göre Elif toplam kaç parça kurdele elde eder?**",
  gorsel: `<svg viewBox="0 0 480 160" role="img" aria-label="30 cm ve 42 cm uzunluğunda iki kurdele"><g stroke="currentColor" stroke-width="2"><rect x="30" y="15" width="250" height="26" fill="var(--dolgu)"/><rect x="30" y="92" width="350" height="26" fill="var(--dolgu)"/><line x1="30" y1="54" x2="280" y2="54"/><line x1="30" y1="48" x2="30" y2="60"/><line x1="280" y1="48" x2="280" y2="60"/><line x1="30" y1="131" x2="380" y2="131"/><line x1="30" y1="125" x2="30" y2="137"/><line x1="380" y1="125" x2="380" y2="137"/></g><g fill="currentColor" font-size="16" text-anchor="middle"><text x="155" y="74">30 cm</text><text x="205" y="151">42 cm</text></g></svg>`,
  secenekler: ["6", "7", "10", "12"],
  dogru: 3,
  hatalar: [
    "Ara sonucu cevap sanma: 6, bir parçanın uzunluğudur (EBOB); soru parça sayısını soruyor.",
    "Yalnızca 42 cm'lik kurdelenin parça sayısını bulma; 30 cm'lik kurdelenin 5 parçasını eklememe.",
    "Parça sayısı yerine kesim sayısını bulma: 4 + 6 = 10 kesim yapılır ama 12 parça oluşur.",
    null
  ],
  aciklama: `İki kurdeleyi de artık bırakmadan eşit parçalara ayırmak için parça uzunluğu hem 30'u hem 42'yi kalansız bölmelidir. En büyük parça istendiğine göre EBOB aranır.
Adım 1: 30 = 2 · 3 · 5 ve 42 = 2 · 3 · 7. Ortak asal çarpanlar 2 ve 3'tür: EBOB(30, 42) = 2 · 3 = 6. Bir parça 6 cm'dir.
Adım 2: Parça sayılarını bul: 30 ÷ 6 = 5 ve 42 ÷ 6 = 7.
Adım 3: Topla: 5 + 7 = 12 parça.
Sağlama: 12 parça · 6 cm = 72 cm = 30 cm + 42 cm.
Sık yapılan hata: EBOB'u bulunca durmak. 6, parçanın uzunluğudur; soru parça sayısını soruyor. "Eşit parçalara ayırma, en büyük" ifadeleri EBOB'a işaret eder.
Cevap D.`
},
{
  id: "mat-ck-109",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir duraktan A hattının otobüsleri 12 dakikada bir, B hattının otobüsleri 18 dakikada bir kalkmaktadır. İki hattın otobüsleri saat 07.00'de birlikte kalkmıştır.\n**Buna göre iki hattın otobüsleri bu saatten sonra ilk kez saat kaçta yeniden birlikte kalkar?**",
  gorsel: null,
  secenekler: ["07.06", "07.30", "07.36", "10.36"],
  dogru: 2,
  hatalar: [
    "EBOB ile EKOK'u karıştırma: EBOB(12, 18) = 6 alınmış; 07.06'da hiçbir otobüs kalkmaz.",
    "Süreleri toplama: 12 + 18 = 30; 30, ne 12'nin ne de 18'in katıdır.",
    null,
    "EKOK yerine 12 · 18 = 216 dakikayı (3 saat 36 dakika) alma: o saatte de birlikte kalkarlar ama ilk kez değil."
  ],
  aciklama: `Otobüslerin birlikte kalktığı anlar, 07.00'den sonra hem 12'nin hem 18'in katı kadar dakika geçen anlardır. İlk buluşma için en küçük ortak kat (EKOK) aranır.
Adım 1: 12 = 2^{2} · 3 ve 18 = 2 · 3^{2}. EKOK için her asal çarpanın en büyük üslüsünü al: 2^{2} · 3^{2} = 36.
Adım 2: 07.00'ye 36 dakika ekle: 07.36.
Sağlama: A hattı 07.12, 07.24, 07.36'da; B hattı 07.18, 07.36'da kalkar. İlk ortak saat 07.36'dır.
Sık yapılan hata: EBOB = 6'yı kullanmak. 07.06'da hiçbir otobüs kalkmaz; "yeniden birlikte, aynı anda" ifadeleri EKOK'a işaret eder.
Cevap C.`
},
{
  id: "mat-ck-110",
  kazanim: "M.8.1.1.3",
  kademe: 1,
  zorluk: 2,
  soru: "Bir sınıf etkinliğinde masaya 1'den 12'ye kadar numaralanmış 12 kart dizilmiştir. Deniz, üzerindeki sayı 12 ile aralarında asal olan kartların hepsini alacaktır.\n**Buna göre Deniz kaç kart alır?**",
  gorsel: null,
  secenekler: ["3", "4", "5", "6"],
  dogru: 1,
  hatalar: [
    "1'i unutma: 1 ile 12'nin 1'den başka ortak böleni yoktur; 1 ve 12 aralarında asaldır.",
    null,
    "Aralarında asal olmayı asal sayı olmakla karıştırma: 2, 3, 5, 7, 11 kartlarını sayma; oysa 2 ve 3, 12'yi böler.",
    "Yalnızca 2'ye bölünmeyi kontrol edip tek sayıları (1, 3, 5, 7, 9, 11) sayma; 3 ve 9'un 12 ile ortak böleni 3'tür."
  ],
  aciklama: `İki sayının 1'den başka ortak pozitif böleni yoksa bu sayılar aralarında asaldır.
Adım 1: 12 = 2^{2} · 3 olduğundan 12'nin asal çarpanları 2 ve 3'tür. 12 ile aralarında asal olan sayı ne 2'ye ne de 3'e bölünmelidir.
Adım 2: 2'ye bölünenleri ele: 2, 4, 6, 8, 10, 12. Kalanlar: 1, 3, 5, 7, 9, 11.
Adım 3: Kalanlardan 3'e bölünenleri ele: 3 ve 9. Geriye 1, 5, 7, 11 kalır.
Adım 4: Deniz 4 kart alır.
Sık yapılan hata: Asal sayıları (2, 3, 5, 7, 11) saymak. 2 ve 3 asaldır ama 12'yi böldükleri için 12 ile aralarında asal değildir. 1 ise asal olmadığı hâlde her sayıyla aralarında asaldır.
Cevap B.`
},
{
  id: "mat-ck-111",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Okul kantinine gelen 84 şişe su, her rafta eşit sayıda şişe olacak şekilde raflara dizilecektir. Kantin görevlisi, bir raftaki şişe sayısının asal sayı olmasını istemektedir.\n**Buna göre bir rafa konulabilecek farklı şişe sayılarının toplamı kaçtır?**",
  gorsel: null,
  secenekler: ["12", "13", "14", "23"],
  dogru: 0,
  hatalar: [
    null,
    "1'i asal sayma: 1 + 2 + 3 + 7 = 13; oysa 1 asal sayı değildir.",
    "Aynı asal çarpanı iki kez toplama: 2 + 2 + 3 + 7 = 14; farklı değerler yalnızca 2, 3 ve 7'dir.",
    "Asal olmayan çarpanda bırakma: 84 = 2 · 2 · 21 deyip 21'i asal sanma ve 2 + 21 = 23 bulma; oysa 21 = 3 · 7."
  ],
  aciklama: `Şişeler raflara eşit dağıtılacağı için bir raftaki şişe sayısı 84'ü kalansız bölmelidir. Bu sayı asal da olacağına göre 84'ün asal çarpanları aranır.
Adım 1: 84'ü asal çarpanlarına ayır: 84 ÷ 2 = 42, 42 ÷ 2 = 21, 21 ÷ 3 = 7, 7 ÷ 7 = 1. Yani 84 = 2^{2} · 3 · 7.
Adım 2: Farklı asal çarpanlar 2, 3 ve 7'dir. Bir rafa 2, 3 ya da 7 şişe konulabilir.
Adım 3: Topla: 2 + 3 + 7 = 12.
Sık yapılan hata: 1'i asal saymak ya da 2'yi iki kez toplamak. 1 asal değildir; 2 iki kez geçse de bir rafa konulabilecek şişe sayısı olarak tek bir değerdir.
Cevap A.`
},
{
  id: "mat-ck-112",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir ritim çalışmasında vuruşlar 1'den başlayarak sayılmaktadır. Davul, 4'ün katı olan vuruşlarda; zil, 6'nın katı olan vuruşlarda çalmaktadır. Çalışmanın ilk 10 vuruşu aşağıda gösterilmiştir.\n**Çalışma 48 vuruş sürdüğüne göre davul ile zil kaç kez aynı vuruşta çalar?**",
  gorsel: `<svg viewBox="0 0 560 150" role="img" aria-label="İlk 10 vuruşta davul 4 ve 8. vuruşlarda, zil 6. vuruşta çalıyor"><g stroke="currentColor" stroke-width="1.5" fill="none"><rect x="10" y="10" width="530" height="126"/><line x1="10" y1="52" x2="540" y2="52"/><line x1="10" y1="94" x2="540" y2="94"/><line x1="100" y1="10" x2="100" y2="136"/><line x1="144" y1="10" x2="144" y2="136"/><line x1="188" y1="10" x2="188" y2="136"/><line x1="232" y1="10" x2="232" y2="136"/><line x1="276" y1="10" x2="276" y2="136"/><line x1="320" y1="10" x2="320" y2="136"/><line x1="364" y1="10" x2="364" y2="136"/><line x1="408" y1="10" x2="408" y2="136"/><line x1="452" y1="10" x2="452" y2="136"/><line x1="496" y1="10" x2="496" y2="136"/></g><g fill="currentColor" font-size="16" text-anchor="middle"><text x="55" y="37" font-weight="bold">Vuruş</text><text x="55" y="79" font-weight="bold">Davul</text><text x="55" y="121" font-weight="bold">Zil</text><text x="122" y="37">1</text><text x="166" y="37">2</text><text x="210" y="37">3</text><text x="254" y="37">4</text><text x="298" y="37">5</text><text x="342" y="37">6</text><text x="386" y="37">7</text><text x="430" y="37">8</text><text x="474" y="37">9</text><text x="518" y="37">10</text></g><circle cx="254" cy="73" r="11" fill="var(--vurgu)"/><circle cx="430" cy="73" r="11" fill="var(--vurgu)"/><circle cx="342" cy="115" r="11" fill="var(--vurgu2)"/></svg>`,
  secenekler: ["2", "4", "12", "24"],
  dogru: 1,
  hatalar: [
    "EKOK yerine 4 · 6 = 24'ü alma: yalnızca 24. ve 48. vuruşları sayma; oysa 12. ve 36. vuruşlarda da birlikte çalarlar.",
    null,
    "Ara sonucu cevap sanma: 12, EKOK'tur; 48 vuruşta kaç tane 12'nin katı olduğu bulunmamış.",
    "EBOB ile EKOK'u karıştırma: EBOB(4, 6) = 2 alınıp 48 ÷ 2 = 24 bulunmuş."
  ],
  aciklama: `Davul 4'ün katlarında, zil 6'nın katlarında çalar. İkisinin birlikte çaldığı vuruşlar hem 4'ün hem 6'nın katıdır; yani EKOK'un katlarıdır.
Adım 1: 4 = 2^{2} ve 6 = 2 · 3 olduğundan EKOK(4, 6) = 2^{2} · 3 = 12.
Adım 2: 48'e kadar 12'nin katlarını yaz: 12, 24, 36, 48.
Adım 3: Say: 4 kez. Kısa yol: 48 ÷ 12 = 4.
Sağlama: 12, 24, 36 ve 48 sayılarının hepsi hem 4'e hem 6'ya kalansız bölünür.
Sık yapılan hata: Ortak kat olarak 4 · 6 = 24'ü almak. 24 bir ortak kattır ama en küçüğü değildir; 12. ve 36. vuruşlar gözden kaçar.
Cevap B.`
},
/* ===================== KADEME 2 — PEKİŞTİRME ===================== */
{
  id: "mat-ck-201",
  kazanim: "M.8.1.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Aşağıda A sayısının asal çarpanlarına ayrılması gösterilmiştir. İşlemdeki iki sayının üzeri kapatılmıştır.\n**Buna göre A sayısı kaçtır?**",
  gorsel: `<svg viewBox="0 0 260 245" role="img" aria-label="A sayısının asal çarpanlarına ayrılması: sağ sütunda 2, 3, 5, 5; sol sütunda A, iki kapalı sayı, 5 ve 1"><line x1="130" y1="15" x2="130" y2="235" stroke="currentColor" stroke-width="2"/><rect x="72" y="67" width="46" height="30" rx="4" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="72" y="112" width="46" height="30" rx="4" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><g fill="currentColor" font-size="20" text-anchor="end"><text x="115" y="45" font-weight="bold" fill="var(--vurgu)">A</text><text x="115" y="180">5</text><text x="115" y="225">1</text></g><g fill="currentColor" font-size="20" text-anchor="start"><text x="145" y="45">2</text><text x="145" y="90">3</text><text x="145" y="135">5</text><text x="145" y="180">5</text></g></svg>`,
  secenekler: ["15", "30", "75", "150"],
  dogru: 3,
  hatalar: [
    "Sağ sütundaki asal çarpanları çarpmak yerine toplama: 2 + 3 + 5 + 5 = 15.",
    "Tekrarlayan asal çarpanı bir kez alma: 2 · 3 · 5 = 30; oysa 5 iki kez yazılmıştır.",
    "İlk satırdaki 2'ye bölmeyi atlama: 3 · 5 · 5 = 75, A'nın değil ikinci satırdaki kapalı sayının değeridir.",
    null
  ],
  aciklama: `Asal çarpanlara ayırma işleminde soldaki sayı, sağındaki asal sayıya bölünür ve sonuç bir alt satıra yazılır. 1'e ulaşınca işlem biter. Bu yüzden A, sağ sütundaki bütün asal sayıların çarpımına eşittir.
Adım 1: Aşağıdan yukarı çık. Son bölme 5 ÷ 5 = 1'dir. Onun üstündeki kapalı sayı 5 · 5 = 25'tir.
Adım 2: Bir üst satır: 25 · 3 = 75.
Adım 3: En üst satır: A = 75 · 2 = 150.
Sağlama: 150 ÷ 2 = 75, 75 ÷ 3 = 25, 25 ÷ 5 = 5, 5 ÷ 5 = 1. Yani 150 = 2 · 3 · 5^{2}.
Sık yapılan hata: 5'in iki kez yazıldığını görmeyip 2 · 3 · 5 = 30 bulmak.
Cevap D.`
},
{
  id: "mat-ck-202",
  kazanim: "M.8.1.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir marangoz, 72 cm uzunluğundaki tahta çıtayı hiç artmayacak şekilde eşit uzunlukta parçalara ayıracaktır. Çıta en az iki parçaya ayrılacak ve her parçanın uzunluğu santimetre cinsinden iki basamaklı bir tam sayı olacaktır.\n**Buna göre bir parçanın uzunluğu kaç farklı değer alabilir?**",
  gorsel: null,
  secenekler: ["3", "4", "5", "12"],
  dogru: 1,
  hatalar: [
    "Çarpanları çiftler hâlinde aramayıp birini atlama: 12, 24 ve 36 bulunmuş, 18 (4 · 18 = 72) gözden kaçmış.",
    null,
    "72'yi de sayma: parça 72 cm olursa çıta kesilmemiş olur, 'en az iki parça' koşulu sağlanmaz.",
    "Koşulları uygulamadan 72'nin bütün çarpanlarını sayma."
  ],
  aciklama: `Çıta artık bırakmadan eşit parçalara ayrılacağı için parça uzunluğu 72'nin bir çarpanı olmalıdır.
Adım 1: 72'nin çarpanlarını çiftler hâlinde yaz: 1 · 72, 2 · 36, 3 · 24, 4 · 18, 6 · 12, 8 · 9.
Adım 2: İki basamaklı olanları seç: 12, 18, 24, 36, 72.
Adım 3: "En az iki parça" koşulunu uygula. Parça 72 cm olursa çıta hiç kesilmemiş olur; 72'yi çıkar.
Adım 4: Geriye 12, 18, 24, 36 kalır: 4 farklı değer.
Sağlama: 72 ÷ 12 = 6, 72 ÷ 18 = 4, 72 ÷ 24 = 3, 72 ÷ 36 = 2 parça; hepsinde parça sayısı en az 2'dir.
Cevap B.`
},
{
  id: "mat-ck-203",
  kazanim: "M.8.1.1.2",
  kademe: 2,
  zorluk: 2,
  soru: "Bir okulun satranç şenliğine 32 kız ve 48 erkek öğrenci katılmıştır. Öğrenciler; bütün gruplardaki kız sayıları birbirine eşit, erkek sayıları da birbirine eşit olacak şekilde, olabildiğince çok sayıda gruba ayrılacaktır. Hiçbir öğrenci açıkta kalmayacaktır.\n**Buna göre bir grupta toplam kaç öğrenci bulunur?**",
  gorsel: null,
  secenekler: ["2", "3", "5", "16"],
  dogru: 2,
  hatalar: [
    "Son adımı atlama: bir gruptaki yalnızca kız sayısı (32 ÷ 16 = 2) bulunmuş, erkekler eklenmemiş.",
    "Son adımı atlama: bir gruptaki yalnızca erkek sayısı (48 ÷ 16 = 3) bulunmuş, kızlar eklenmemiş.",
    null,
    "Ara sonucu cevap sanma: 16, grup sayısıdır (EBOB); soru bir gruptaki öğrenci sayısını soruyor."
  ],
  aciklama: `Kızlar da erkekler de gruplara eşit dağıtılacağı için grup sayısı hem 32'yi hem 48'i kalansız bölmelidir. Olabildiğince çok grup istendiğine göre grup sayısı EBOB'dur.
Adım 1: 32 = 2^{5} ve 48 = 2^{4} · 3. Ortak asal çarpanın küçük üslüsünü al: EBOB(32, 48) = 2^{4} = 16. 16 grup oluşur.
Adım 2: Bir gruptaki kız sayısı 32 ÷ 16 = 2, erkek sayısı 48 ÷ 16 = 3'tür.
Adım 3: Bir grupta 2 + 3 = 5 öğrenci bulunur.
Sağlama: 16 grup · 5 öğrenci = 80 = 32 + 48.
Sık yapılan hata: EBOB'u bulunca durmak. 16, grup sayısıdır; soru bir gruptaki öğrenci sayısını soruyor.
Cevap C.`
},
{
  id: "mat-ck-204",
  kazanim: "M.8.1.1.2",
  kademe: 2,
  zorluk: 2,
  soru: "Yüzme kursuna giden Kerem 4 günde bir kulaç, 6 günde bir dalış antrenmanı yapmaktadır. Kerem bir pazartesi günü iki antrenmanı da yapmıştır.\n**Buna göre Kerem bu iki antrenmanı ilk kez yeniden hangi gün birlikte yapar?**",
  gorsel: null,
  secenekler: ["Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
  dogru: 3,
  hatalar: [
    "EBOB ile EKOK'u karıştırma: EBOB(4, 6) = 2 alınmış; pazartesiden 2 gün sonrası çarşambadır ama o gün antrenman yoktur.",
    "EKOK yerine 4 · 6 = 24'ü (ya da 4 + 6 = 10'u) alma: ikisinde de pazartesiden 3 gün ileri sayılıp perşembe bulunur.",
    "Günleri sayarken pazartesiyi 1. gün kabul etme: böylece 12 gün sonrası yerine 11 gün sonrası (cuma) bulunur.",
    null
  ],
  aciklama: `İki antrenmanın aynı güne denk geldiği günler, pazartesiden hem 4'ün hem 6'nın katı kadar gün sonradır. İlk denk gelme için EKOK aranır.
Adım 1: 4 = 2^{2} ve 6 = 2 · 3 olduğundan EKOK(4, 6) = 2^{2} · 3 = 12. İki antrenman 12 gün sonra yeniden aynı güne gelir.
Adım 2: Haftanın günleri 7 günde bir tekrar eder: 12 = 7 + 5. Pazartesiden 7 gün sonrası yine pazartesidir.
Adım 3: Pazartesiden 5 gün sonrasını say: salı, çarşamba, perşembe, cuma, cumartesi.
Sağlama: Kulaç antrenmanı 4, 8, 12 gün sonra; dalış antrenmanı 6, 12 gün sonra yapılır. İlk ortak gün 12 gün sonrasıdır.
Sık yapılan hata: Saymaya pazartesinin kendisinden başlamak. "12 gün sonra" derken pazartesi 0. gündür; 1. gün salıdır.
Cevap D.`
},
{
  id: "mat-ck-205",
  kazanim: "M.8.1.1.2",
  kademe: 2,
  zorluk: 2,
  soru: "Bir okulun aile birliği, öğrencilere dağıtmak üzere defter ve kalem alacaktır. Defterler 6'lı, kalemler 8'li paketler hâlinde satılmaktadır. Alınan defter sayısı ile kalem sayısı birbirine eşit ve olabildiğince az olacaktır.\n**Buna göre toplam kaç paket satın alınır?**",
  gorsel: null,
  secenekler: ["7", "14", "24", "48"],
  dogru: 0,
  hatalar: [
    null,
    "EKOK yerine 6 · 8 = 48'i alma: 48 ÷ 6 + 48 ÷ 8 = 8 + 6 = 14 paket; bu, en az sayı değildir.",
    "Ara sonucu cevap sanma: 24, her üründen alınacak adettir (EKOK); paket sayısı bulunmamış.",
    "Alınan toplam ürün sayısını (24 defter + 24 kalem = 48) cevap sanma; soru paket sayısını soruyor."
  ],
  aciklama: `Defter sayısı 6'nın, kalem sayısı 8'in katı olmak zorundadır. İki sayı eşit ve en az olacağına göre aranan sayı EKOK'tur.
Adım 1: 6 = 2 · 3 ve 8 = 2^{3} olduğundan EKOK(6, 8) = 2^{3} · 3 = 24. Her üründen 24 tane alınır.
Adım 2: Paket sayıları: 24 ÷ 6 = 4 paket defter, 24 ÷ 8 = 3 paket kalem.
Adım 3: Topla: 4 + 3 = 7 paket.
Sağlama: 4 · 6 = 24 defter ve 3 · 8 = 24 kalem; sayılar eşit.
Sık yapılan hata: Ortak kat olarak 6 · 8 = 48'i almak. 48 de ortak kattır ama en küçüğü değildir; o zaman 14 paket gerekir.
Cevap A.`
},
{
  id: "mat-ck-206",
  kazanim: "M.8.1.1.3",
  kademe: 2,
  zorluk: 2,
  soru: "Bir okul sergisinde 40 fotoğraf, her satırda eşit sayıda fotoğraf olacak şekilde panoya asılmıştır. Satır sayısı ile bir satırdaki fotoğraf sayısı, 1'den büyük ve aralarında asal iki sayıdır.\n**Buna göre satır sayısı ile bir satırdaki fotoğraf sayısının toplamı kaçtır?**",
  gorsel: null,
  secenekler: ["13", "14", "22", "41"],
  dogru: 0,
  hatalar: [
    null,
    "Ortak böleni kontrol etmeme: 4 · 10 = 40 eder ama 4 ve 10'un ikisi de 2'ye bölünür, aralarında asal değildir.",
    "Ortak böleni kontrol etmeme: 2 · 20 = 40 eder ama 2 ve 20'nin ikisi de 2'ye bölünür, aralarında asal değildir.",
    "Koşulu atlama: 1 ve 40 aralarında asaldır ama sayıların 1'den büyük olması isteniyor."
  ],
  aciklama: `İki sayının 1'den başka ortak pozitif böleni yoksa bu sayılar aralarında asaldır.
Adım 1: Satır sayısı ile bir satırdaki fotoğraf sayısının çarpımı 40'tır. Çarpımı 40 olan çiftleri yaz: 1 · 40, 2 · 20, 4 · 10, 5 · 8.
Adım 2: "1'den büyük" koşulu 1 · 40 çiftini eler.
Adım 3: Kalan çiftlerin ortak bölenine bak: 2 ve 20'nin ikisi de 2'ye bölünür; 4 ve 10'un ikisi de 2'ye bölünür; 5 ve 8'in ortak böleni yalnızca 1'dir.
Adım 4: Sayılar 5 ve 8'dir (hangisinin satır sayısı olduğu toplamı değiştirmez): 5 + 8 = 13.
Kısa yol: 40 = 2^{3} · 5. Aralarında asal iki çarpan elde etmek için aynı asal sayının tamamı tek bir tarafa verilir: 2^{3} = 8 ve 5.
Sık yapılan hata: Çarpımı 40 olan ilk çifti seçip ortak böleni kontrol etmemek.
Cevap A.`
},
{
  id: "mat-ck-207",
  kazanim: "M.8.1.1.1",
  kademe: 2,
  zorluk: 3,
  soru: "Bir okul kütüphanesine bağışlanan 60 kitap, aşağıda gösterilen boş kitaplığa yerleştirilecektir. Kütüphane görevlisi Nermin Hanım şu kurallara uymak istemektedir: Kitap konulan her rafta eşit sayıda kitap bulunacak, hiçbir kitap açıkta kalmayacak ve kitaplar en az iki rafa dağıtılacaktır. Kitaplığın raf sayısı ve bir rafın en fazla kaç kitap aldığı görselde verilmiştir.\n**Buna göre Nermin Hanım'ın kitap koyacağı raf sayısı kaç farklı değer alabilir?**",
  gorsel: `<svg viewBox="0 0 460 330" role="img" aria-label="10 raflı boş kitaplık; her raf en fazla 15 kitap alır"><rect x="40" y="20" width="200" height="290" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><g stroke="currentColor" stroke-width="2"><line x1="40" y1="49" x2="240" y2="49"/><line x1="40" y1="78" x2="240" y2="78"/><line x1="40" y1="107" x2="240" y2="107"/><line x1="40" y1="136" x2="240" y2="136"/><line x1="40" y1="165" x2="240" y2="165"/><line x1="40" y1="194" x2="240" y2="194"/><line x1="40" y1="223" x2="240" y2="223"/><line x1="40" y1="252" x2="240" y2="252"/><line x1="40" y1="281" x2="240" y2="281"/></g><g stroke="var(--vurgu)" stroke-width="2" fill="none"><line x1="258" y1="20" x2="258" y2="310"/><line x1="251" y1="20" x2="265" y2="20"/><line x1="251" y1="310" x2="265" y2="310"/></g><g fill="currentColor" font-size="17"><text x="274" y="120" font-weight="bold">10 raf</text><text x="274" y="196">Her raf en fazla</text><text x="274" y="219">15 kitap alır.</text></g></svg>`,
  secenekler: ["3", "4", "6", "9"],
  dogru: 1,
  hatalar: [
    "Sınırı dışarıda bırakma: 4 raf seçilince her rafa 15 kitap düşer; 'en fazla 15' ifadesi 15'i de kapsar.",
    null,
    "Yalnızca raf sayısı koşulunu uygulama: 2, 3, 4, 5, 6, 10 sayılmış; oysa 2 ve 3 rafta raf başına 30 ve 20 kitap düşer, raf bunu almaz.",
    "Yalnızca raf kapasitesi koşulunu uygulama: 4, 5, 6, 10, 12, 15, 20, 30, 60 sayılmış; oysa kitaplıkta yalnızca 10 raf vardır."
  ],
  aciklama: `Her rafta eşit sayıda kitap olacağı ve kitap artmayacağı için kullanılan raf sayısı 60'ın bir çarpanı olmalıdır.
Adım 1: 60'ın çarpanlarını çiftler hâlinde bul: 1 · 60, 2 · 30, 3 · 20, 4 · 15, 5 · 12, 6 · 10. Çarpanlar: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60.
Adım 2: Raf sayısı koşulu: en az 2 raf kullanılacak ve kitaplıkta 10 raf var. Geriye 2, 3, 4, 5, 6, 10 kalır.
Adım 3: Kapasite koşulu: bir rafa en fazla 15 kitap sığar. Bu raf sayılarında raf başına kitap sayıları sırasıyla 30, 20, 15, 12, 10 ve 6'dır. 30 ve 20 sığmaz; 2 ve 3 elenir.
Adım 4: Uygun raf sayıları 4, 5, 6 ve 10'dur: 4 farklı seçim.
Sık yapılan hata: "En fazla 15" ifadesinde 15'i dışarıda bırakmak. "En fazla 15", 15'i de kapsar; 4 raf–15 kitap seçimi uygundur.
Cevap B.`
},
{
  id: "mat-ck-208",
  kazanim: "M.8.1.1.1",
  kademe: 2,
  zorluk: 3,
  soru: "Matematik dersinde \"Sayıyı Bul\" etkinliği yapılmaktadır. Öğretmen aklından iki basamaklı bir sayı tutmuş ve bu sayıyla ilgili üç ipucunu kartlara yazarak tahtaya asmıştır. Öğrencilerden, üç ipucunun hepsine birden uyan sayıyı bulmaları istenmiştir. Zeynep, ipuçlarını tek tek kontrol ederek öğretmenin tuttuğu sayıyı doğru bulmuştur. Kartlarda yazan ipuçları aşağıda verilmiştir.\n**Buna göre Zeynep'in bulduğu sayı aşağıdakilerden hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Kart</th><th>İpucu</th></tr><tr><td>1. kart</td><td>Asal çarpanları yalnızca 2 ve 7'dir.</td></tr><tr><td>2. kart</td><td>Pozitif tam sayı çarpanlarının sayısı 6'dır.</td></tr><tr><td>3. kart</td><td>4'ün katıdır.</td></tr></table>`,
  secenekler: ["28", "44", "56", "98"],
  dogru: 0,
  hatalar: [
    null,
    "1. ipucunu kontrol etmeme: 44 = 2^{2} · 11 olduğundan asal çarpanları 2 ve 11'dir; 7 yoktur.",
    "Çarpan sayarken 1'i ve sayının kendisini saymama: 56'nın çarpanları 1, 2, 4, 7, 8, 14, 28, 56 olmak üzere 8 tanedir, 6 değil.",
    "3. ipucunu kontrol etmeme: 98 = 2 · 7^{2} ilk iki ipucuna uyar ama 4'e kalansız bölünmez."
  ],
  aciklama: `Bir sayının asal çarpanları, o sayıyı kalansız bölen asal sayılardır.
Adım 1 (1. kart): Asal çarpanları yalnızca 2 ve 7 olan iki basamaklı sayıları bul. Bunlar yalnızca 2'lerin ve 7'lerin çarpımıyla oluşur: 2 · 7 = 14, 2^{2} · 7 = 28, 2^{3} · 7 = 56, 2 · 7^{2} = 98. (Sıradaki 2^{4} · 7 = 112 üç basamaklıdır.)
Adım 2 (2. kart): Çarpanlarını say. 14 → 1, 2, 7, 14 (4 tane). 28 → 1, 2, 4, 7, 14, 28 (6 tane). 56 → 1, 2, 4, 7, 8, 14, 28, 56 (8 tane). 98 → 1, 2, 7, 14, 49, 98 (6 tane). Geriye 28 ve 98 kalır.
Adım 3 (3. kart): 28 = 4 · 7 olduğundan 4'ün katıdır. 98 ise 4'e kalansız bölünmez (4 · 24 = 96). Geriye yalnızca 28 kalır.
Sağlama: 28 = 2^{2} · 7; asal çarpanları 2 ve 7, çarpan sayısı 6 ve 4'ün katı. Üç ipucu da sağlanıyor.
Sık yapılan hata: Yalnızca bir iki ipucunu kontrol edip durmak. 44 de 6 çarpanlıdır ve 4'ün katıdır ama asal çarpanları 2 ve 11'dir.
Cevap A.`
},
{
  id: "mat-ck-209",
  kazanim: "M.8.1.1.2",
  kademe: 2,
  zorluk: 3,
  soru: "Bir okulun dikdörtgen biçimindeki bahçesinin kenar uzunlukları görselde verilmiştir. Bahçenin uzun kenarlarından biri okul binasının duvarıdır; diğer üç kenarı boyunca tel örgü vardır. Çevre kulübü öğrencileri, tel örgü boyunca eşit aralıklarla fidan dikecektir. Tel örgünün duvara değdiği iki uç noktaya ve bahçenin diğer iki köşesine birer fidan dikilecek, art arda gelen iki fidan arasındaki uzaklık metre cinsinden tam sayı olacaktır.\n**Buna göre bu iş için en az kaç fidan gerekir?**",
  gorsel: `<svg viewBox="0 0 480 340" role="img" aria-label="Kenarları 105 m ve 75 m olan dikdörtgen bahçe; üstteki uzun kenar okul binasının duvarı, diğer üç kenar tel örgü"><rect x="90" y="34" width="350" height="18" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M90 52 L90 302 L440 302 L440 52" fill="none" stroke="var(--vurgu)" stroke-width="3" stroke-dasharray="9 6"/><g fill="currentColor" font-size="16" text-anchor="middle"><text x="265" y="24">Okul binasının duvarı</text><text x="265" y="170">Bahçe</text><text x="265" y="330" font-weight="bold">105 m</text><text x="48" y="183" font-weight="bold">75 m</text></g><text x="265" y="288" font-size="15" text-anchor="middle" fill="var(--vurgu)">Tel örgü</text></svg>`,
  secenekler: ["15", "17", "18", "24"],
  dogru: 2,
  hatalar: [
    "Ara sonucu cevap sanma: 15, iki fidan arasındaki uzaklıktır (EBOB); fidan sayısı hesaplanmamış.",
    "Aralık sayısını fidan sayısı sanma: 255 ÷ 15 = 17 aralık vardır; iki ucuna da fidan dikilen açık bir hatta fidan sayısı 1 fazladır.",
    null,
    "Duvar olan kenarı da hesaba katma: bütün çevre 360 m alınırsa 360 ÷ 15 = 24 bulunur; oysa duvar boyunca fidan dikilmiyor."
  ],
  aciklama: `Köşelere fidan dikileceği ve aralıklar eşit olacağı için iki fidan arasındaki uzaklık hem 75'i hem 105'i kalansız bölmelidir. Fidan sayısının en az olması için aralık en büyük seçilir: EBOB.
Adım 1: 75 = 3 · 5^{2} ve 105 = 3 · 5 · 7. Ortak asal çarpanlar 3 ve 5'tir: EBOB(75, 105) = 3 · 5 = 15. Fidanlar 15 m arayla dikilir.
Adım 2: Tel örgünün uzunluğunu bul. Duvar olan 105 m'lik kenar sayılmaz: 75 + 105 + 75 = 255 m.
Adım 3: Aralık sayısı: 255 ÷ 15 = 17.
Adım 4: Tel örgü iki ucu açık bir hattır ve iki uca da fidan dikilir; bu durumda fidan sayısı aralık sayısından 1 fazladır: 17 + 1 = 18.
Sağlama: Kısa kenarlarda 75 ÷ 15 + 1 = 6'şar, uzun kenarda 105 ÷ 15 + 1 = 8 fidan olur. İki köşe fidanı ikişer kez sayıldı: 6 + 8 + 6 − 2 = 18.
Sık yapılan hata: Bütün çevreyi (360 m) kullanıp 24 bulmak ya da 17 aralığı fidan sayısı sanmak.
Cevap C.`
},
{
  id: "mat-ck-210",
  kazanim: "M.8.1.1.2",
  kademe: 2,
  zorluk: 3,
  soru: "Bir okulun koridoruna süsleme amacıyla kırmızı ve mavi ışıklar asılmıştır. Her iki ışık da kendi içinde eşit aralıklarla yanıp sönmektedir. Işıklar saat 19.00'da çalıştırıldığında ikisi birlikte yanmıştır; ilk 20 saniyedeki yanma anları aşağıdaki zaman çizelgesinde gösterilmiştir. Işıklar aynı düzenle çalışmaya devam etmiş ve tam 5 dakika sonra, saat 19.05'te kapatılmıştır.\n**Buna göre ışıklar, 19.00'daki ilk yanış da sayıldığında, toplam kaç kez birlikte yanmıştır?**",
  gorsel: `<svg viewBox="0 0 560 190" role="img" aria-label="Zaman çizelgesi: kırmızı ışık 0, 8 ve 16. saniyelerde; mavi ışık 0 ve 12. saniyelerde yanıyor"><g stroke="currentColor" stroke-width="1" opacity="0.35"><line x1="90" y1="50" x2="530" y2="50"/><line x1="90" y1="95" x2="530" y2="95"/><line x1="90" y1="50" x2="90" y2="135" stroke-dasharray="4 4"/><line x1="258" y1="50" x2="258" y2="135" stroke-dasharray="4 4"/><line x1="342" y1="95" x2="342" y2="135" stroke-dasharray="4 4"/><line x1="426" y1="50" x2="426" y2="135" stroke-dasharray="4 4"/></g><g stroke="currentColor" stroke-width="2"><line x1="90" y1="135" x2="535" y2="135"/><line x1="90" y1="129" x2="90" y2="141"/><line x1="174" y1="129" x2="174" y2="141"/><line x1="258" y1="129" x2="258" y2="141"/><line x1="342" y1="129" x2="342" y2="141"/><line x1="426" y1="129" x2="426" y2="141"/><line x1="510" y1="129" x2="510" y2="141"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="90" y="159">0</text><text x="174" y="159">4</text><text x="258" y="159">8</text><text x="342" y="159">12</text><text x="426" y="159">16</text><text x="510" y="159">20</text><text x="300" y="183">Süre (saniye)</text></g><g fill="currentColor" font-size="16" font-weight="bold"><text x="8" y="55">Kırmızı</text><text x="8" y="100">Mavi</text></g><g fill="var(--vurgu)"><circle cx="90" cy="50" r="9"/><circle cx="258" cy="50" r="9"/><circle cx="426" cy="50" r="9"/></g><g fill="var(--vurgu2)"><circle cx="90" cy="95" r="9"/><circle cx="342" cy="95" r="9"/></g></svg>`,
  secenekler: ["4", "12", "13", "14"],
  dogru: 2,
  hatalar: [
    "EKOK yerine 8 · 12 = 96'yı alma: 300 saniyede 3 tane 96'nın katı vardır, başlangıçla 4 bulunur; oysa ışıklar 24 saniyede bir buluşur.",
    "Başlangıçtaki (19.00) birlikte yanışı saymama: 300 ÷ 24 işleminden 12 bulunur ama soru ilk yanışı da saydırıyor.",
    null,
    "300 ÷ 24 = 12,5 sonucunu 13'e yuvarlayıp başlangıcı ekleme; 13. buluşma 312. saniyede olurdu, o anda ışıklar kapalıdır."
  ],
  aciklama: `Işıkların birlikte yandığı anlar, iki ışığın yanma aralıklarının ortak katlarıdır; bu yüzden EKOK kullanılır.
Adım 1: Çizelgeden aralıkları oku. Kırmızı ışık 0, 8 ve 16. saniyelerde yanıyor: 8 saniyede bir. Mavi ışık 0 ve 12. saniyelerde yanıyor: 12 saniyede bir.
Adım 2: 8 = 2^{3} ve 12 = 2^{2} · 3 olduğundan EKOK(8, 12) = 2^{3} · 3 = 24. Işıklar 24 saniyede bir birlikte yanar.
Adım 3: Süreyi saniyeye çevir: 5 dakika = 300 saniye. 300'ün içinde 12 tane 24 vardır (24 · 12 = 288, kalan 12). Yani 19.00'dan sonra 12 kez birlikte yanarlar: 24, 48, …, 288. saniyeler.
Adım 4: 19.00'daki ilk yanışı da ekle: 12 + 1 = 13.
Sağlama: 24 · 12 = 288, 300'den küçüktür ama 24 · 13 = 312, 300'ü aşar; bir sonraki buluşma ışıklar kapandıktan sonraya kalır.
Sık yapılan hata: Başlangıçtaki birlikte yanışı saymayı unutmak. Soru kökünde "ilk yanış da sayıldığında" dendiğine dikkat et.
Cevap C.`
},
{
  id: "mat-ck-211",
  kazanim: "M.8.1.1.2",
  kademe: 2,
  zorluk: 3,
  soru: "Bir okul, 7 ve 8. sınıf öğrencileri için bilim merkezine gezi düzenlemektedir. Geziye katılacak öğrenci sayıları aşağıdaki tabloda verilmiştir. Öğrenciler servis araçlarına şu kurallara göre yerleştirilecektir: Her araçta eşit sayıda öğrenci bulunacak, bir araçtaki öğrencilerin tamamı aynı sınıf düzeyinden olacak ve olabildiğince az sayıda araç kullanılacaktır. Ayrıca her araçta 2 görevli öğretmen yer alacaktır.\n**Buna göre bu gezide toplam kaç öğretmen görev alır?**",
  gorsel: `<table class="tablo"><tr><th>Sınıf düzeyi</th><th>Geziye katılacak öğrenci sayısı</th></tr><tr><td>7. sınıf</td><td>96</td></tr><tr><td>8. sınıf</td><td>132</td></tr></table>`,
  secenekler: ["12", "19", "24", "38"],
  dogru: 3,
  hatalar: [
    "Ara sonucu cevap sanma: 12, bir araçtaki öğrenci sayısıdır (EBOB).",
    "Son adımı atlama: 19, araç sayısıdır; her araçta 2 öğretmen olduğu hesaba katılmamış.",
    "EBOB'u araç sayısı sanma: 12 · 2 = 24 bulunmuş; oysa 12, araç sayısı değil bir araçtaki öğrenci sayısıdır.",
    null
  ],
  aciklama: `Her araçta eşit sayıda ve aynı sınıf düzeyinden öğrenci olacağı için bir araçtaki öğrenci sayısı hem 96'yı hem 132'yi kalansız bölmelidir. Araç sayısının en az olması için bu sayı en büyük seçilir: EBOB.
Adım 1: 96 = 2^{5} · 3 ve 132 = 2^{2} · 3 · 11. Ortak asal çarpanların küçük üslülerini al: EBOB(96, 132) = 2^{2} · 3 = 12. Her araçta 12 öğrenci olur.
Adım 2: Araç sayıları: 96 ÷ 12 = 8 ve 132 ÷ 12 = 11. Toplam 8 + 11 = 19 araç.
Adım 3: Her araçta 2 öğretmen var: 19 · 2 = 38 öğretmen.
Sağlama: 19 araç · 12 öğrenci = 228 = 96 + 132.
Sık yapılan hata: EBOB'un neyi gösterdiğini karıştırmak. 12, araç sayısı değil bir araçtaki öğrenci sayısıdır; bu yüzden 12 · 2 = 24 yanlıştır.
Cevap D.`
},
{
  id: "mat-ck-212",
  kazanim: "M.8.1.1.3",
  kademe: 2,
  zorluk: 3,
  soru: "Bir okulun masa tenisi takımında her sporcunun bir forma numarası vardır. Antrenör, çiftler antrenmanı için ilginç bir kural koymuştur: İki sporcunun aynı çiftte çalışabilmesi için forma numaralarının aralarında asal olması gerekir. Antrenörün planladığı altı çift ve sporcuların forma numaraları aşağıdaki tabloda verilmiştir. Antrenör, kurala uyan çiftlere dokunmayacak; kurala uymayan çiftleri dağıtıp bu çiftlerdeki sporcuları yalnızca kendi aralarında yeniden eşleştirecektir.\n**Buna göre yeniden eşleştirmeden sonra kurala uygun çift sayısı __en fazla__ kaç olur?**",
  gorsel: `<table class="tablo"><tr><th>Çift</th><th>Forma numaraları</th></tr><tr><td>1. çift</td><td>8 ve 15</td></tr><tr><td>2. çift</td><td>13 ve 39</td></tr><tr><td>3. çift</td><td>11 ve 17</td></tr><tr><td>4. çift</td><td>21 ve 35</td></tr><tr><td>5. çift</td><td>9 ve 25</td></tr><tr><td>6. çift</td><td>7 ve 12</td></tr></table>`,
  secenekler: ["3", "4", "5", "6"],
  dogru: 3,
  hatalar: [
    "Aralarında asal olmak için sayılardan birinin asal olması gerektiğini sanma: yalnızca asal sayı içeren 2, 3 ve 6. çiftler sayılmış. Oysa 8–15 ve 9–25 çiftlerinde asal sayı yokken ortak bölen yalnızca 1'dir; 13–39 çifti ise 13'e bölünür.",
    "Son adımı atlama: baştaki uygun çiftler (1, 3, 5 ve 6. çiftler) doğru bulunmuş ama dağıtılan sporcuların yeniden eşleştirilmesi hesaba katılmamış.",
    "Tek eşleştirmeyi deneyip bırakma: 13–35 ve 39–21 eşleştirmesinde 39 ile 21'in ortak böleni 3 olduğu için yalnızca bir çift uygun çıkar. Diğer eşleştirme (13–21 ve 39–35) denenmemiş.",
    null
  ],
  aciklama: `İki sayının 1'den başka ortak pozitif böleni yoksa bu sayılar aralarında asaldır. Bunu anlamanın en kolay yolu sayıları asal çarpanlarına ayırıp ortak asal çarpan aramaktır.
Adım 1: Önce tablodaki çiftleri kontrol et. 8 = 2^{3} ve 15 = 3 · 5 → ortak asal çarpan yok, uygun. 11 ve 17 farklı iki asal sayı → uygun. 9 = 3^{2} ve 25 = 5^{2} → uygun. 7 asal ve 12 = 2^{2} · 3, 7 sayısı 12'yi bölmez → uygun.
Adım 2: 13 asal ama 39 = 3 · 13 → ikisi de 13'e bölünür, uygun değil. 21 = 3 · 7 ve 35 = 5 · 7 → ikisi de 7'ye bölünür, uygun değil. Demek ki 4 çift yerinde kalır; 13, 39, 21 ve 35 numaralı sporcular yeniden eşleştirilir.
Adım 3: Bu dört sporcu iki çifte üç farklı biçimde ayrılabilir. (13–39 ve 21–35) zaten uygun değildi. (13–35 ve 39–21) eşleştirmesinde 13 ile 35 aralarında asaldır ama 39 = 3 · 13 ile 21 = 3 · 7 sayıları 3'e bölünür; yalnızca 1 çift uygun olur. (13–21 ve 39–35) eşleştirmesinde 13 ile 21'in ortak asal çarpanı yoktur; 39 = 3 · 13 ile 35 = 5 · 7 sayılarının da yoktur; 2 çift birden uygun olur.
Adım 4: En fazla çift için son eşleştirme seçilir: 4 + 2 = 6 çift.
Sık yapılan hata: Bir sayı asalsa çifti hemen aralarında asal saymak. Asal sayı diğer sayıyı bölüyorsa (13 ve 39 gibi) çift aralarında asal değildir. “En fazla” diye soran sorularda da ilk bulduğun eşleştirmede durma, bütün olasılıkları dene.
Cevap D.`
}
);
