// Matematik — Çarpanlar ve Katlar | Havuz eki (kademe 0): mat-ck-016 … mat-ck-075
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["carpanlar-katlar"] = window.LGS_BANK["carpanlar-katlar"] || []).push(
{
  id: "mat-ck-016",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 1,
  soru: "**20 ile 40 arasındaki asal sayıların toplamı kaçtır?**",
  gorsel: null,
  secenekler: ["159", "155", "120", "91"],
  dogru: 2,
  hatalar: [
    "Asal olmayan 39'u (3 · 13) da asal sayarak 120 + 39 = 159 buldun.",
    "Asal olmayan 35'i (5 · 7) da asal sayarak 120 + 35 = 155 buldun.",
    null,
    "29'u listeye almayı unuttun: 23 + 31 + 37 = 91."
  ],
  aciklama: `Asal sayı, 1'den büyük olup 1 ve kendisinden başka pozitif böleni olmayan sayıdır.
Adım 1: 21'den 39'a kadar olan sayıları denetle. Çift sayılar 2'ye bölündüğü için asal olamaz; geriye 21, 23, 25, 27, 29, 31, 33, 35, 37, 39 kalır.
Adım 2: 3'e ve 5'e bölünenleri ele: 21 = 3 · 7, 25 = 5 · 5, 27 = 3 · 9, 33 = 3 · 11, 35 = 5 · 7, 39 = 3 · 13 asal değildir.
Adım 3: Geriye 23, 29, 31, 37 kalır; bunlar 2, 3, 5 ve 7'ye bölünmez.
Adım 4: Topla: 23 + 29 + 31 + 37 = 120.
Sık yapılan hata: Her tek sayıyı asal sanmak. 35 ve 39 tek sayıdır ama asal değildir.
Cevap C.`
},
{
  id: "mat-ck-017",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 1,
  soru: "**Aşağıdaki sayılardan hangisinin pozitif tam sayı çarpanlarının sayısı en fazladır?**",
  gorsel: null,
  secenekler: ["16", "15", "14", "12"],
  dogru: 3,
  hatalar: [
    "Büyük sayının daha çok çarpanı olur sanma: 16'nın 5 çarpanı (1, 2, 4, 8, 16), 12'nin ise 6 çarpanı vardır.",
    "Çarpanları eksik saydın: 15'in yalnızca 4 çarpanı (1, 3, 5, 15) vardır.",
    "Çarpanları eksik saydın: 14'ün yalnızca 4 çarpanı (1, 2, 7, 14) vardır.",
    null
  ],
  aciklama: `Bir sayının çarpanı, onu kalansız bölen pozitif tam sayıdır. Çarpanları çiftler hâlinde yazarsan hiçbirini atlamazsın.
Adım 1: 12 → 1 · 12, 2 · 6, 3 · 4: toplam 6 çarpan (1, 2, 3, 4, 6, 12).
Adım 2: 14 → 1 · 14, 2 · 7: toplam 4 çarpan.
Adım 3: 15 → 1 · 15, 3 · 5: toplam 4 çarpan.
Adım 4: 16 → 1 · 16, 2 · 8, 4 · 4: çarpanlar 1, 2, 4, 8, 16; toplam 5 çarpan (4 · 4 çiftinde 4 bir kez sayılır).
Adım 5: En fazla çarpan 12'dedir.
Sağlama: 12 = 2^{2} · 3 olduğundan çarpan sayısı (2 + 1) · (1 + 1) = 6'dır.
Sık yapılan hata: Sayı büyüdükçe çarpan sayısının da arttığını sanmak. 16, 12'den büyüktür ama daha az çarpanı vardır.
Cevap D.`
},
{
  id: "mat-ck-018",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 1,
  soru: "**675 sayısı asal çarpanlarına ayrılıp üslü biçimde yazıldığında 5'in üssü kaç olur?**",
  gorsel: null,
  secenekler: ["2", "3", "5", "25"],
  dogru: 0,
  hatalar: [
    null,
    "Üsleri karıştırma: 3 sayısı, 3'ün üssüdür (675 = 3^{3} · 5^{2}); soru 5'in üssünü soruyor.",
    "Taban ile üssü karıştırma: 5 tabandır; üs, 5'in kaç kez çarpıldığını gösterir.",
    "Üslü ifadenin değerini üs sanma: 5^{2} = 25'tir; üs ise 2'dir."
  ],
  aciklama: `Asal çarpanlarına ayırmak, sayıyı asal sayıların çarpımı olarak yazmaktır. Aynı asal çarpan birden çok kez geçiyorsa üslü yazılır; üs, o asalın kaç kez çarpıldığını gösterir.
Adım 1: 675 ÷ 3 = 225, 225 ÷ 3 = 75, 75 ÷ 3 = 25. 3 üç kez kullanıldı.
Adım 2: 25 ÷ 5 = 5, 5 ÷ 5 = 1. 5 iki kez kullanıldı.
Adım 3: 675 = 3^{3} · 5^{2}. 5'in üssü 2'dir.
Sağlama: 27 · 25 = 675.
Sık yapılan hata: 5^{2}'nin değeri olan 25'i ya da tabanı (5) üs sanmak.
Cevap A.`
},
{
  id: "mat-ck-019",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 1,
  soru: "**2^{2} · 3 · 7 sayısının pozitif tam sayı çarpanı olan sayı aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["54", "49", "35", "28"],
  dogru: 3,
  hatalar: [
    "54 = 2 · 3 · 3 · 3 içinde 3 üç kez var ama verilen sayıda 3 yalnızca bir kez geçer.",
    "49 = 7 · 7 içinde 7 iki kez var ama verilen sayıda 7 yalnızca bir kez geçer.",
    "35 = 5 · 7 içinde 5 çarpanı var ama verilen sayıda 5 yok; 84 ÷ 35 kalanlıdır.",
    null
  ],
  aciklama: `Bir sayının çarpanları, o sayıyı oluşturan asal çarpanlardan (üslerini aşmadan) kurulur.
Adım 1: Verilen sayıyı hesapla: 2^{2} · 3 · 7 = 4 · 21 = 84. Asal çarpanları 2, 3 ve 7'dir; 2 en fazla iki kez, 3 ve 7 en fazla bir kez kullanılabilir.
Adım 2: 28 = 2 · 2 · 7 → 2'yi iki, 7'yi bir kez kullanıyor. Uygundur.
Adım 3: 35 = 5 · 7 → 84'te 5 çarpanı yok. 49 = 7 · 7 → 7 iki kez gerekir. 54 = 2 · 3 · 3 · 3 → 3 üç kez gerekir. Üçü de uygun değildir.
Sağlama: 84 ÷ 28 = 3 kalansızdır; 84 ÷ 35, 84 ÷ 49 ve 84 ÷ 54 kalanlıdır.
Sık yapılan hata: Şıktaki sayıyı asal çarpanlarına ayırmadan karar vermek.
Cevap D.`
},
{
  id: "mat-ck-020",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 1,
  soru: "**Aşağıdaki sayılardan hangisi asal sayıdır?**",
  gorsel: null,
  secenekler: ["91", "77", "69", "61"],
  dogru: 3,
  hatalar: [
    "91 = 7 · 13 olduğundan 7'ye bölünür; 2, 3 ve 5'e bölünmediği için asal sanılır ama değildir.",
    "77 = 7 · 11 olduğundan 7'ye bölünür; asal değildir.",
    "69 = 3 · 23 olduğundan 3'e bölünür (rakamları toplamı 15); asal değildir.",
    null
  ],
  aciklama: `Asal sayı, 1'den büyük olup yalnızca 1'e ve kendisine bölünen sayıdır. 100'den küçük bir sayının asal olup olmadığını anlamak için onu 2, 3, 5 ve 7'ye bölmeyi dene.
Adım 1: 69 ÷ 3 = 23 (rakamları toplamı 15) → asal değil.
Adım 2: 77 ÷ 7 = 11 → asal değil.
Adım 3: 91 ÷ 7 = 13 → asal değil.
Adım 4: 61 sayısı 2'ye, 3'e (rakamları toplamı 7), 5'e ve 7'ye (7 · 8 = 56, 7 · 9 = 63) bölünmez → asaldır.
Sık yapılan hata: Her tek sayıyı asal sanmak ya da 7'ye bölünmeyi denememek. 91 bu yüzden sık sık asal sanılır.
Cevap D.`
},
{
  id: "mat-ck-021",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 1,
  soru: "**Aşağıdaki sayılardan hangisi hem 15'in hem 20'nin katıdır?**",
  gorsel: null,
  secenekler: ["60", "45", "40", "30"],
  dogru: 0,
  hatalar: [
    null,
    "45, 15'in katıdır (15 · 3) ama 20'nin katı değildir: 45 ÷ 20 kalanlıdır.",
    "40, 20'nin katıdır (20 · 2) ama 15'in katı değildir: 40 ÷ 15 kalanlıdır.",
    "30, 15'in katıdır (15 · 2) ama 20'nin katı değildir: 30 ÷ 20 kalanlıdır."
  ],
  aciklama: `Bir sayının katı, o sayının 1, 2, 3, … ile çarpımıdır. İki sayının ortak katı, ikisinin de katı olan sayıdır.
Adım 1: 15'in katlarını yaz: 15, 30, 45, 60, 75…
Adım 2: 20'nin katlarını yaz: 20, 40, 60, 80…
Adım 3: İki listede de bulunan şıkkı seç: 60.
Sağlama: 60 ÷ 15 = 4 ve 60 ÷ 20 = 3, ikisi de kalansız. Ayrıca 60, EKOK(15, 20)'dir.
Sık yapılan hata: Yalnızca bir sayıya göre karar vermek. 30 ve 45, 15'in katıdır ama 20'nin katı değildir.
Cevap A.`
},
{
  id: "mat-ck-022",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 1,
  soru: "**Aşağıdaki sayılardan hangisi hem 42'nin hem 56'nın böleni __değildir__?**",
  gorsel: null,
  secenekler: ["21", "14", "7", "2"],
  dogru: 0,
  hatalar: [
    null,
    "Köke dikkat etmedin: 42 ÷ 14 = 3 ve 56 ÷ 14 = 4; 14 ortak bölendir.",
    "Köke dikkat etmedin: 42 ÷ 7 = 6 ve 56 ÷ 7 = 8; 7 ortak bölendir.",
    "Köke dikkat etmedin: 42 ÷ 2 = 21 ve 56 ÷ 2 = 28; 2 ortak bölendir."
  ],
  aciklama: `İki sayının ortak böleni, ikisini de kalansız bölen sayıdır. Soru, bu özelliği taşımayan şıkkı istiyor.
Adım 1: Her şıkla 42'yi ve 56'yı böl. 2: 42 ÷ 2 = 21 ve 56 ÷ 2 = 28 (ikisi de kalansız).
Adım 2: 7: 42 ÷ 7 = 6 ve 56 ÷ 7 = 8. 14: 42 ÷ 14 = 3 ve 56 ÷ 14 = 4. Bu üç sayı da ortak bölendir.
Adım 3: 21: 42 ÷ 21 = 2 kalansızdır ama 56 ÷ 21 = 2, kalan 14. Yani 21, 56'yı bölmez.
Sağlama: EBOB(42, 56) = 14 ve ortak bölenler 14'ün bölenleridir: 1, 2, 7, 14. 21 bunların arasında yok.
Sık yapılan hata: 'değildir' köküne dikkat etmeden ortak olan şıkkı işaretlemek.
Cevap A.`
},
{
  id: "mat-ck-023",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 1,
  soru: "**İki doğal sayının EBOB'u 3, EKOK'u 18'dir. Bu iki sayının çarpımı kaçtır?**",
  gorsel: null,
  secenekler: ["6", "18", "21", "54"],
  dogru: 3,
  hatalar: [
    "EKOK'u EBOB'a böldün (18 ÷ 3 = 6); iki sayının çarpımı için EBOB ile EKOK çarpılır.",
    "Verilen EKOK'u (18) cevap sandın; soru, iki sayının çarpımını soruyor.",
    "EBOB ile EKOK'u topladın (3 + 18 = 21); çarpım için bu iki değer çarpılır.",
    null
  ],
  aciklama: `İki doğal sayının çarpımı, EBOB'larıyla EKOK'larının çarpımına eşittir: a · b = EBOB(a, b) · EKOK(a, b).
Adım 1: Değerleri yerine koy: a · b = 3 · 18.
Adım 2: Çarp: 3 · 18 = 54.
Sağlama: Bu koşula uyan sayılar 3 ve 18'dir: EBOB(3, 18) = 3, EKOK(3, 18) = 18 ve 3 · 18 = 54. 6 ile 9 da uyar: EBOB(6, 9) = 3, EKOK(6, 9) = 18 ve 6 · 9 = 54.
Sık yapılan hata: İşlemi karıştırmak. EBOB ile EKOK toplanmaz ya da bölünmez, çarpılır.
Cevap D.`
},
{
  id: "mat-ck-024",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 1,
  soru: "**28 ile 42 sayılarının en büyük ortak böleni (EBOB) kaçtır?**",
  gorsel: null,
  secenekler: ["14", "28", "42", "84"],
  dogru: 0,
  hatalar: [
    null,
    "Küçük sayıyı EBOB sandın; 28, 42'yi kalansız bölmez (42 ÷ 28 kalanlıdır).",
    "Büyük sayıyı EBOB sandın; 42, 28'i bölmez ve EBOB hiçbir zaman sayılardan büyük olamaz.",
    "EBOB ile EKOK'u karıştırdın: 84, bu iki sayının en küçük ortak katıdır."
  ],
  aciklama: `EBOB, iki sayıyı birden kalansız bölen sayıların en büyüğüdür.
Adım 1: Asal çarpanlarına ayır: 28 = 2^{2} · 7 ve 42 = 2 · 3 · 7.
Adım 2: Ortak asal çarpanları küçük üsleriyle al: 2 ve 7.
Adım 3: Çarp: EBOB(28, 42) = 2 · 7 = 14.
Sağlama: 28 ÷ 14 = 2 ve 42 ÷ 14 = 3; bölümler (2 ve 3) aralarında asal olduğundan daha büyük ortak bölen yoktur.
Sık yapılan hata: EBOB'u sayılardan büyük ya da sayılara eşit bulmak. EBOB, küçük sayıdan büyük olamaz; 84 bu yüzden EBOB olamaz, 28 ile 42 ise birbirini bölmediği için EBOB olamaz.
Cevap A.`
},
{
  id: "mat-ck-025",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 1,
  soru: "**9 ve 15 sayılarının en küçük ortak katı (EKOK) kaçtır?**",
  gorsel: null,
  secenekler: ["3", "24", "45", "135"],
  dogru: 2,
  hatalar: [
    "EBOB ile EKOK'u karıştırdın: 3, bu iki sayının en büyük ortak bölenidir.",
    "İki sayıyı topladın (9 + 15 = 24); 24 ne 9'un ne de 15'in katıdır.",
    null,
    "İki sayıyı çarptın (9 · 15 = 135). Çarpım bir ortak kattır ama sayılar 3 ortak çarpanını paylaştığı için en küçük ortak kat değildir."
  ],
  aciklama: `EKOK, iki sayının ortak katlarının en küçüğüdür.
Adım 1: 9 = 3^{2} ve 15 = 3 · 5.
Adım 2: Her asal çarpanın en büyük üslüsünü al: 3^{2} ve 5.
Adım 3: Çarp: EKOK(9, 15) = 9 · 5 = 45.
Sağlama: 45 ÷ 9 = 5 ve 45 ÷ 15 = 3. 15'in daha küçük katları olan 15 ve 30, 9'a bölünmez.
Sık yapılan hata: Çarpımı EKOK sanmak. 9 · 15 = 135 bir ortak kattır ama en küçüğü değildir.
Cevap C.`
},
{
  id: "mat-ck-026",
  kazanim: "M.8.1.1.3",
  kademe: 0,
  zorluk: 1,
  soru: "**Aşağıdaki sayı çiftlerinden hangisi aralarında asal __değildir__?**",
  gorsel: null,
  secenekler: ["8 ve 15", "12 ve 21", "9 ve 16", "10 ve 21"],
  dogru: 1,
  hatalar: [
    "Köke dikkat etmedin: 8 = 2^{3} ve 15 = 3 · 5; ortak asal çarpan yok, bu çift aralarında asaldır.",
    null,
    "Köke dikkat etmedin: 9 = 3^{2} ve 16 = 2^{4}; ortak asal çarpan yok, bu çift aralarında asaldır.",
    "Köke dikkat etmedin: 10 = 2 · 5 ve 21 = 3 · 7; ortak asal çarpan yok, bu çift aralarında asaldır."
  ],
  aciklama: `İki sayının 1'den başka ortak böleni yoksa bu sayılar aralarında asaldır. Soru, bu özelliği taşımayan çifti istiyor.
Adım 1: Her sayıyı asal çarpanlarına ayır: 8 = 2^{3}, 15 = 3 · 5, 12 = 2^{2} · 3, 21 = 3 · 7, 9 = 3^{2}, 16 = 2^{4}, 10 = 2 · 5.
Adım 2: 8 ve 15, 9 ve 16, 10 ve 21 çiftlerinde ortak asal çarpan yoktur; üçü de aralarında asaldır.
Adım 3: 12 ve 21 çiftinde ikisi de 3'e bölünür; EBOB(12, 21) = 3 olduğundan aralarında asal değildir.
Sık yapılan hata: Birinin çift, ötekinin tek olmasına bakıp ortak bölen olmadığını sanmak. 12 çift, 21 tektir ama ikisi de 3'e bölünür.
Cevap B.`
},
{
  id: "mat-ck-027",
  kazanim: "M.8.1.1.3",
  kademe: 0,
  zorluk: 1,
  soru: "**Aşağıdaki sayılardan hangisi 30 ile aralarında asaldır?**",
  gorsel: null,
  secenekler: ["49", "35", "27", "22"],
  dogru: 0,
  hatalar: [
    null,
    "35 = 5 · 7 ve 30 = 2 · 3 · 5; ikisi de 5'e bölünür.",
    "27 = 3^{3} ve 30 = 2 · 3 · 5; ikisi de 3'e bölünür.",
    "22 = 2 · 11 ve 30 = 2 · 3 · 5; ikisi de 2'ye bölünür."
  ],
  aciklama: `30 ile aralarında asal olan sayı, 30'un asal çarpanlarına bölünmemelidir.
Adım 1: 30 = 2 · 3 · 5. Aranan sayı ne 2'ye, ne 3'e, ne de 5'e bölünmelidir.
Adım 2: 22 çifttir (2'ye bölünür). 27'nin rakamları toplamı 9'dur (3'e bölünür). 35'in son rakamı 5'tir (5'e bölünür).
Adım 3: 49 = 7 · 7; 2, 3 ve 5 çarpanı yoktur. EBOB(30, 49) = 1.
Sık yapılan hata: Yalnızca 2'ye bakıp tek sayıyı seçmek. 27 ve 35 tek sayıdır ama 30 ile ortak çarpanı vardır.
Cevap A.`
},
{
  id: "mat-ck-028",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 2,
  soru: `Defne, 90 sayısının pozitif tam sayı çarpanlarının her birini ayrı bir kâğıda yazmıştır. Daha sonra yalnızca tek sayı yazılı olan kâğıtları ayırmıştır.
**Buna göre ayırdığı kâğıtlardaki sayıların toplamı kaçtır?**`,
  gorsel: null,
  secenekler: ["78", "77", "8", "6"],
  dogru: 0,
  hatalar: [
    null,
    "1'i çarpan saymayı unuttun: 3 + 5 + 9 + 15 + 45 = 77.",
    "Yalnızca asal olan tek çarpanları (3 ve 5) topladın; 1, 9, 15 ve 45 de tek çarpandır.",
    "Tek çarpanların toplamı yerine sayısını buldun (1, 3, 5, 9, 15, 45 altı tane)."
  ],
  aciklama: `Bir sayının çarpanı, onu kalansız bölen pozitif tam sayıdır; 1 ve sayının kendisi de çarpandır.
Adım 1: 90'ın çarpanlarını çiftler hâlinde yaz: 1 · 90, 2 · 45, 3 · 30, 5 · 18, 6 · 15, 9 · 10.
Adım 2: Çarpanlar: 1, 2, 3, 5, 6, 9, 10, 15, 18, 30, 45, 90.
Adım 3: Tek olanları seç: 1, 3, 5, 9, 15, 45.
Adım 4: Topla: 1 + 3 + 5 + 9 + 15 + 45 = 78.
Sağlama: 90 = 2 · 45 olduğundan tek çarpanlar, 45'in çarpanlarıdır: 1, 3, 5, 9, 15, 45.
Sık yapılan hata: 1'i unutmak ya da yalnızca asal çarpanlara bakmak. 15 asal değildir ama tek bir çarpandır.
Cevap A.`
},
{
  id: "mat-ck-029",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 2,
  soru: `Ceren, 48 sayısının pozitif tam sayı çarpanlarını, çarpımı 48 olan çiftler hâlinde tabloya yazmaktadır. Tabloya yalnızca üç çifti yazmış, geri kalan çiftleri yazmayı unutmuştur.
**Buna göre Ceren'in tabloya yazmadığı çarpanların toplamı kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Yazılan çarpan çifti</th><th>Çarpım</th></tr><tr><td>1 · 48</td><td>48</td></tr><tr><td>2 · 24</td><td>48</td></tr><tr><td>4 · 12</td><td>48</td></tr></table>`,
  secenekler: ["14", "19", "24", "33"],
  dogru: 3,
  hatalar: [
    "Eksik iki çiftten yalnızca 6 · 8'i buldun (6 + 8 = 14); 3 · 16 çiftini de bulmalıydın.",
    "Eksik iki çiftten yalnızca 3 · 16'yı buldun (3 + 16 = 19); 6 · 8 çiftini de bulmalıydın.",
    "Her eksik çiftten yalnızca büyük çarpanı aldın (16 + 8 = 24); çiftin iki çarpanı da yazılmamıştır.",
    null
  ],
  aciklama: `Bir sayının çarpanı, onu kalansız bölen pozitif tam sayıdır. Çarpanlar, çarpımı o sayıya eşit olan çiftler hâlinde bulunur.
Adım 1: 48'in çarpan çiftlerini sırayla ara: 1 · 48, 2 · 24, 3 · 16, 4 · 12, 6 · 8. (5 ve 7, 48'i bölmez; 6'dan sonra çiftler tekrar eder.)
Adım 2: Tabloda 1 · 48, 2 · 24 ve 4 · 12 var. Eksik çiftler 3 · 16 ve 6 · 8'dir.
Adım 3: Yazılmayan çarpanlar 3, 16, 6 ve 8'dir. Toplam: 3 + 16 + 6 + 8 = 33.
Sağlama: 48'in 10 çarpanı vardır (1, 2, 3, 4, 6, 8, 12, 16, 24, 48). Hepsinin toplamı 124, tabloda yazılı olanların toplamı 1 + 48 + 2 + 24 + 4 + 12 = 91 ve 124 − 91 = 33.
Sık yapılan hata: Çarpan çiftinin yalnızca bir üyesini yazmak. Bir çift iki çarpan demektir: 3 · 16 çiftinde hem 3 hem 16 çarpandır.
Cevap D.`
},
{
  id: "mat-ck-030",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bir çiçekçi, 72 gülü her buketteki gül sayısı eşit olacak ve hiç gül artmayacak biçimde buketlere ayıracaktır. Çiçekçi, buket sayısının **en az 3, en fazla 12** olmasını istemektedir.
**Buna göre buket sayısı kaç farklı değer alabilir?**`,
  gorsel: null,
  secenekler: ["4", "5", "6", "12"],
  dogru: 2,
  hatalar: [
    "Sınırları dışarıda bıraktın: 'en az 3' ve 'en fazla 12' ifadeleri 3'ü ve 12'yi de kapsar; yalnızca 4, 6, 8, 9'u saydın.",
    "Sınırlardan birini (3 ya da 12) dışarıda bıraktın.",
    null,
    "Koşulu uygulamadan 72'nin bütün çarpanlarını saydın."
  ],
  aciklama: `Buket sayısı 72'yi kalansız bölmelidir; yani 72'nin bir çarpanıdır. Koşulları çarpanlar listesine en sonda uygula.
Adım 1: 72'nin çarpanlarını çiftler hâlinde yaz: 1 · 72, 2 · 36, 3 · 24, 4 · 18, 6 · 12, 8 · 9. Çarpanlar: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72.
Adım 2: 'En az 3, en fazla 12' koşulu 3 ile 12 arasındaki (3 ve 12 dâhil) çarpanları ister: 3, 4, 6, 8, 9, 12.
Adım 3: 6 farklı değer.
Sağlama: 3 buketle her buketteki gül sayısı 24, 12 buketle 6 olur; ikisi de tam bölünür.
Sık yapılan hata: 'En az' ve 'en fazla' ifadelerindeki sınırları dışarıda bırakmak. Bu ifadeler sınırın kendisini kapsar.
Cevap C.`
},
{
  id: "mat-ck-031",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bir depoda raf numaraları, etikete asal çarpanlarına ayrılmış biçimiyle de yazılmaktadır. Bir etiketin üzerinde 168 numarası ile aşağıdaki yazı vardır; a'nın değeri silinmiştir.
**Buna göre a kaçtır?**`,
  gorsel: `<svg viewBox="0 0 420 130" role="img" aria-label="Etiket: Raf no 168, asal çarpanları 2 üssü a çarpı 3 çarpı 7"><rect x="12" y="12" width="396" height="106" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="22"><text x="34" y="52" font-weight="bold">Raf no: 168</text><text x="34" y="96">168 = 2<tspan dy="-9" font-size="15">a</tspan><tspan dy="9"> · 3 · 7</tspan></text></g></svg>`,
  secenekler: ["3", "4", "8", "21"],
  dogru: 0,
  hatalar: [
    null,
    "2'nin üssünü bir fazla aldın: 2^{4} · 3 · 7 = 336 eder, 168 etmez.",
    "168 ÷ 21 = 8 bulup 8'i üs sandın; üs, tabanın kaç kez çarpıldığını gösterir: 8 = 2^{3}.",
    "Bilinen çarpanların çarpımını (3 · 7 = 21) üs sandın; önce 168 ÷ 21 = 8 bulup 8'in 2'nin kaçıncı kuvveti olduğuna bakmalısın."
  ],
  aciklama: `Asal çarpanlarına ayrılmış yazılışta bütün çarpanların çarpımı, ayrılan sayıya eşittir.
Adım 1: Bilinen çarpanları çarp: 3 · 7 = 21.
Adım 2: 2^{a} değerini bul: 168 ÷ 21 = 8.
Adım 3: 8 = 2 · 2 · 2 = 2^{3} olduğundan a = 3.
Sağlama: 2^{3} · 3 · 7 = 8 · 21 = 168.
Sık yapılan hata: 2^{a} = 8 bulunca a'yı 8 sanmak. 8, üssün değeri değil, 2'nin üçüncü kuvvetidir.
Cevap A.`
},
{
  id: "mat-ck-032",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 2,
  soru: `Elif'in tuttuğu iki asal sayının çarpımı 91'dir.
**Buna göre bu iki asal sayının toplamı kaçtır?**`,
  gorsel: null,
  secenekler: ["98", "92", "91", "20"],
  dogru: 3,
  hatalar: [
    "Çarpanlardan yalnızca 7'yi bulup diğerini 91 aldın (7 + 91 = 98); oysa 91 ÷ 7 = 13'tür.",
    "91'i asal sanıp 1 · 91 yazdın (1 + 91 = 92); oysa 1 asal değildir ve 91 = 7 · 13'tür.",
    "Soruda verilen çarpımı cevap sandın; sorulan, asal sayıların toplamı.",
    null
  ],
  aciklama: `İki asal sayının çarpımı verildiğinde bu sayılar, çarpımın asal çarpanlarıdır.
Adım 1: 91'i en küçük asal sayıdan başlayarak böl. 2'ye bölünmez (tek), 3'e bölünmez (rakamları toplamı 10), 5'e bölünmez (son rakam 1).
Adım 2: 7'yi dene: 91 ÷ 7 = 13. Kalan yok.
Adım 3: 13 asaldır. Yani 91 = 7 · 13.
Adım 4: Toplam: 7 + 13 = 20.
Sağlama: 7 · 13 = 91.
Sık yapılan hata: 91'i asal sanmak. 2, 3 ve 5'e bölünmediği için asal görünür ama 7'ye bölünür; asal denetiminde 7'yi de dene.
Cevap D.`
},
{
  id: "mat-ck-033",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 2,
  soru: `Beyza, 240 sayısını asal çarpanlarına ayırmak için önce 24 · 10 biçiminde iki çarpana ayırmıştır. Sonra 24'ü 2 · 2 · 2 · 3, 10'u 2 · 5 olarak yazmıştır.
**Buna göre 240 sayısının asal çarpanlarına ayrılmış biçimi aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["2^{3} · 3 · 5", "2^{4} · 3 · 5", "2^{3} · 3 · 10", "2^{5} · 3 · 5"],
  dogru: 1,
  hatalar: [
    "10'daki 2'yi unutarak 2'yi üç kez saydın: 2^{3} · 3 · 5 = 120 eder, 240 etmez.",
    null,
    "Çarpım 240 eder ama 10 asal değildir (10 = 2 · 5); ayırma yarım kalmış.",
    "2'lerin sayısını bir fazla aldın: 2^{5} · 3 · 5 = 480 eder, 240 etmez."
  ],
  aciklama: `Bir sayıyı iki çarpana ayırıp her çarpanı asal çarpanlarına ayırdığında uçlarda aynı asal sayılar çıkar. Aynı asal çarpan kaç kez geçtiyse üs olarak yazılır.
Adım 1: Ayrılmış çarpanları yan yana yaz: 240 = (2 · 2 · 2 · 3) · (2 · 5).
Adım 2: Asal çarpanları say: 2 dört kez, 3 bir kez, 5 bir kez.
Adım 3: Üslü yaz: 240 = 2^{4} · 3 · 5.
Sağlama: 16 · 3 · 5 = 240.
Sık yapılan hata: İki ayrı çarpanın içindeki aynı asalı birleştirmeden saymak. 2 hem 24'ten (üç kez) hem 10'dan (bir kez) geldiği için toplam dört kez yazılır.
Cevap B.`
},
{
  id: "mat-ck-034",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 2,
  soru: `Matematik öğretmeni, pozitif tam sayı çarpanlarının sayısı tam 4 olan bir sayı söyleyen ilk öğrenciye rozet vereceğini duyurmuştur. Öğrenciler, aşağıdaki sayılardan birini söyleyecektir.
**Buna göre hangi sayıyı söyleyen öğrenci rozet kazanır?**`,
  gorsel: null,
  secenekler: ["16", "19", "25", "26"],
  dogru: 3,
  hatalar: [
    "16'nın çarpanları 1, 2, 4, 8, 16'dır; 5 tane.",
    "19 asal sayıdır; çarpanları yalnızca 1 ve 19'dur, yani 2 tane.",
    "25 = 5 · 5 olduğundan çarpanları 1, 5, 25'tir; 3 tane (5 bir kez sayılır).",
    null
  ],
  aciklama: `Bir sayının çarpanları, onu kalansız bölen pozitif tam sayılardır. Çarpanları çiftler hâlinde yazarsan hiçbirini atlamazsın.
Adım 1: 16 → 1 · 16, 2 · 8, 4 · 4: çarpanlar 1, 2, 4, 8, 16 (5 tane; 4 · 4 çiftinde 4 bir kez sayılır).
Adım 2: 19 asaldır → 1 · 19: 2 tane.
Adım 3: 25 → 1 · 25, 5 · 5: çarpanlar 1, 5, 25 (3 tane).
Adım 4: 26 → 1 · 26, 2 · 13: çarpanlar 1, 2, 13, 26 → tam 4 tane.
Sağlama: 26 = 2 · 13 ve çarpan sayısı (1 + 1) · (1 + 1) = 4.
Sık yapılan hata: 4 · 4 ya da 5 · 5 gibi eş çiftte aynı çarpanı iki kez saymak ya da 1'i unutmak.
Cevap D.`
},
{
  id: "mat-ck-035",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bir terzi atölyesinde uzunlukları 36 m ve 60 m olan iki kumaş şerit, hiç artık kalmayacak biçimde ve birbirine eşit uzunlukta, olabildiğince uzun parçalara kesilecektir. Parçaların uzunluğu metre cinsinden bir tam sayıdır.
**Buna göre bu iş için toplam kaç kesim yapılır?**`,
  gorsel: `<svg viewBox="0 0 480 130" role="img" aria-label="36 m ve 60 m uzunluğunda iki kumaş şerit"><g stroke="currentColor" stroke-width="2"><rect x="30" y="14" width="216" height="26" fill="var(--dolgu)"/><rect x="30" y="74" width="360" height="26" fill="var(--dolgu)"/></g><g fill="currentColor" font-size="16" text-anchor="middle"><text x="138" y="62">36 m</text><text x="210" y="122">60 m</text></g></svg>`,
  secenekler: ["6", "7", "8", "12"],
  dogru: 0,
  hatalar: [
    null,
    "Parça sayısından (8) yalnızca 1 çıkardın; iki şerit olduğu için her şeritte 1 olmak üzere toplam 2 çıkarılır.",
    "Parça sayısını (3 + 5) buldun; kesim sayısı, her şeritte parça sayısından 1 eksiktir.",
    "EBOB'u (parça uzunluğu 12 m) cevap sandın; soru kesim sayısını soruyor."
  ],
  aciklama: `Artık kalmaması için parça uzunluğu hem 36'yı hem 60'ı bölmelidir; en uzun parça istendiğinden EBOB aranır.
Adım 1: 36 = 2^{2} · 3^{2} ve 60 = 2^{2} · 3 · 5. EBOB = 2^{2} · 3 = 12. Parçalar 12 m uzunluğundadır.
Adım 2: Parça sayıları: 36 ÷ 12 = 3 ve 60 ÷ 12 = 5.
Adım 3: Düz bir şeritten n parça çıkarmak için n − 1 kesim gerekir: 3 parça için 2 kesim, 5 parça için 4 kesim.
Adım 4: Toplam kesim: 2 + 4 = 6.
Sağlama: Toplam parça 3 + 5 = 8 ve şerit sayısı 2 olduğu için kesim sayısı 8 − 2 = 6.
Sık yapılan hata: Kesim sayısı ile parça sayısını karıştırmak.
Cevap A.`
},
{
  id: "mat-ck-036",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bir iskeleden iki vapur hattının seferleri aşağıdaki tabloda verilen aralıklarla yapılmaktadır. İki hattın vapurları saat 08.00'de birlikte hareket etmiştir.
**Buna göre 08.00 ve 12.00 dâhil olmak üzere bu saatler arasında iki hattın vapurları kaç kez birlikte hareket eder?**`,
  gorsel: `<table class="tablo"><tr><th>Hat</th><th>Sefer aralığı</th></tr><tr><td>A hattı</td><td>20 dakikada bir</td></tr><tr><td>B hattı</td><td>30 dakikada bir</td></tr></table>`,
  secenekler: ["12", "8", "6", "5"],
  dogru: 3,
  hatalar: [
    "Yalnızca A hattının 240 dakikadaki sefer sayısını buldun (240 ÷ 20 = 12); ortak seferleri bulmak için EKOK gerekir.",
    "Yalnızca B hattının 240 dakikadaki sefer sayısını buldun (240 ÷ 30 = 8); ortak seferleri bulmak için EKOK gerekir.",
    "Aralık sayısına (4) hem başlangıç hem bitiş için birer ekledin; nokta sayısı aralık sayısından yalnızca bir fazladır.",
    null
  ],
  aciklama: `Vapurların birlikte hareket ettiği anlar, 08.00'den sonra hem 20'nin hem 30'un katı kadar dakika geçen anlardır. Bunların ilki EKOK ile bulunur.
Adım 1: 20 = 2^{2} · 5 ve 30 = 2 · 3 · 5. EKOK = 2^{2} · 3 · 5 = 60 dakika. Vapurlar saatte bir birlikte hareket eder.
Adım 2: Birlikte hareket saatleri: 08.00, 09.00, 10.00, 11.00, 12.00.
Adım 3: Başlangıç (08.00) ve bitiş (12.00) dâhil olduğundan 5 kez.
Sağlama: 08.00 ile 12.00 arası 240 dakikadır; 240 ÷ 60 = 4 aralık vardır ve başlangıç da sayılınca 4 + 1 = 5.
Sık yapılan hata: Başlangıcı saymamak (4) ya da hem başlangıç hem bitiş için ayrı ayrı 1 eklemek (6). İki ucu dâhil bir sayımda sayı, aralık sayısından tam bir fazladır.
Cevap D.`
},
{
  id: "mat-ck-037",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Selim, tahtaya iki doğal sayı yazmıştır. Sayılardan biri 12'dir. İki sayının EBOB'u 4, EKOK'u 60'tır.
**Buna göre tahtaya yazılan diğer sayı kaçtır?**`,
  gorsel: null,
  secenekler: ["240", "72", "48", "20"],
  dogru: 3,
  hatalar: [
    "EBOB · EKOK = 240 bulup 12'ye bölmeyi unuttun; 240 iki sayının çarpımıdır.",
    "EKOK ile 12'yi topladın (60 + 12 = 72); sayılar arasındaki bağıntı çarpma iledir.",
    "EKOK'tan 12'yi çıkardın (60 − 12 = 48); sayılar arasındaki bağıntı çarpma iledir.",
    null
  ],
  aciklama: `İki sayının çarpımı, EBOB ile EKOK'un çarpımına eşittir: a · b = EBOB · EKOK.
Adım 1: Çarpımı bul: 4 · 60 = 240.
Adım 2: Bilinen sayıya böl: 240 ÷ 12 = 20.
Sağlama: 12 = 2^{2} · 3 ve 20 = 2^{2} · 5. EBOB = 2^{2} = 4 ve EKOK = 2^{2} · 3 · 5 = 60. İkisi de koşula uyuyor.
Sık yapılan hata: 240'ı cevap sanmak. 240 iki sayının çarpımıdır; diğer sayıyı bulmak için 12'ye bölmek gerekir.
Cevap D.`
},
{
  id: "mat-ck-038",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bir koleksiyoncunun pulları 6'şarlı sıralandığında da 8'erli sıralandığında da 5 pul artmaktadır. Koleksiyoncunun 100'den az pulu olduğu bilinmektedir.
**Buna göre koleksiyoncunun en fazla kaç pulu olabilir?**`,
  gorsel: null,
  secenekler: ["77", "72", "53", "29"],
  dogru: 0,
  hatalar: [
    null,
    "Artan 5 pulu eklemeyi unuttun: 72, 24'ün katıdır ama 6'ya ve 8'e kalansız bölünür.",
    "Daha küçük bir değerde durdun: 53 de koşula uyar (24 · 2 + 5) ama en büyüğü değildir.",
    "İlk uygun değerde durdun: 29 (24 + 5) koşula uyar ama en büyüğü değildir."
  ],
  aciklama: `6'ya da 8'e bölündüğünde aynı kalanı veren sayıdan kalanı çıkarırsan hem 6'nın hem 8'in katı olan bir sayı elde edersin; bu sayı EKOK'un katıdır.
Adım 1: EKOK(6, 8) = 24.
Adım 2: Pul sayısı, 24'ün bir katından 5 fazladır: 29, 53, 77, 101…
Adım 3: 100'den az olanların en büyüğü 77'dir.
Sağlama: 77 = 6 · 12 + 5 ve 77 = 8 · 9 + 5. İki sıralamada da 5 pul artıyor.
Sık yapılan hata: EKOK'un katını bulup artan 5'i eklemeyi unutmak ya da 100'ü aşan değeri almak.
Cevap A.`
},
{
  id: "mat-ck-039",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bir okulda 1'den 100'e kadar numaralanmış 100 dolap vardır. Numarası 9'un katı olan dolapların kapağına kırmızı, numarası 12'nin katı olan dolapların kapağına mavi çıkartma yapıştırılacaktır.
**Buna göre kapağında iki renk çıkartma birden bulunan kaç dolap olur?**`,
  gorsel: null,
  secenekler: ["2", "3", "8", "11"],
  dogru: 0,
  hatalar: [
    null,
    "100 ÷ 36 = 2,7 sonucunu yukarı yuvarladın; 3. kat olan 108 numaralı dolap yok.",
    "Yalnızca 12'nin katlarını saydın (100 ÷ 12 = 8); bunların hepsi 9'un katı değildir.",
    "Yalnızca 9'un katlarını saydın (100 ÷ 9 = 11); bunların hepsi 12'nin katı değildir."
  ],
  aciklama: `İki çıkartmanın birlikte bulunduğu dolap numaraları hem 9'un hem 12'nin katıdır; yani EKOK'un katlarıdır.
Adım 1: 9 = 3^{2} ve 12 = 2^{2} · 3. EKOK = 2^{2} · 3^{2} = 36.
Adım 2: 100'e kadar 36'nın katlarını yaz: 36, 72. Bir sonraki kat 108'dir, 100'ü aşar.
Adım 3: İki renk çıkartma taşıyan 2 dolap vardır.
Sağlama: 36 ÷ 9 = 4 ve 36 ÷ 12 = 3; 72 ÷ 9 = 8 ve 72 ÷ 12 = 6. Hepsi kalansız.
Sık yapılan hata: 100 ÷ 36 = 2,7 sonucunu yukarı yuvarlamak. Katları saymada bölümün tam kısmı alınır.
Cevap A.`
},
{
  id: "mat-ck-040",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bir fotoğraf stüdyosunda 48 portre ve 72 manzara fotoğrafı bulunmaktadır. Stüdyo, bu fotoğrafları her albümde eşit sayıda portre ve eşit sayıda manzara olacak, hiçbiri açıkta kalmayacak biçimde albümlere ayıracaktır. Tek albüm hazırlamak da bir seçenektir.
**Buna göre stüdyo kaç farklı albüm sayısı seçebilir?**`,
  gorsel: null,
  secenekler: ["24", "12", "10", "8"],
  dogru: 3,
  hatalar: [
    "EBOB'u bulup durdun: 24, seçilebilecek en büyük albüm sayısıdır; kaç seçenek olduğunu sormuyor.",
    "72'nin çarpan sayısını buldun; albüm sayısı hem 48'i hem 72'yi bölmelidir.",
    "48'in çarpan sayısını buldun; albüm sayısı hem 48'i hem 72'yi bölmelidir.",
    null
  ],
  aciklama: `Albüm sayısı hem 48'i hem 72'yi kalansız bölmelidir; yani 48 ile 72'nin ortak bölenlerinden biri olmalıdır. Ortak bölenler, EBOB'un bölenleridir.
Adım 1: 48 = 2^{4} · 3 ve 72 = 2^{3} · 3^{2}. EBOB = 2^{3} · 3 = 24.
Adım 2: 24'ün çarpanlarını yaz: 1, 2, 3, 4, 6, 8, 12, 24.
Adım 3: 8 farklı albüm sayısı seçilebilir.
Sağlama: 24 = 2^{3} · 3 olduğundan çarpan sayısı (3 + 1) · (1 + 1) = 8.
Sık yapılan hata: EBOB'u bulup durmak. EBOB en çok albüm sayısıdır; seçenek sayısı için EBOB'un çarpanları sayılır.
Cevap D.`
},
{
  id: "mat-ck-041",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Okul kütüphanesinde görevli Nehir Hanım her 9 günde bir, okul hizmetlisi Kemal Bey her 15 günde bir kütüphanenin zemin temizliğini yapmaktadır. İkisi 5 Kasım'da temizliği birlikte yapmıştır. Kasım ayı 30 gün çeker.
**Buna göre ikisi ilk kez yeniden hangi tarihte birlikte temizlik yapar?**`,
  gorsel: null,
  secenekler: ["20 Aralık", "19 Aralık", "29 Kasım", "8 Kasım"],
  dogru: 0,
  hatalar: [
    null,
    "Kasım'ı 31 gün sayarak 45 gün sonrasını 19 Aralık buldun; Kasım 30 gün çeker.",
    "Süreleri topladın (9 + 15 = 24) ve 24 gün sonrasını buldun; 24, ne 9'un ne 15'in katıdır.",
    "EBOB'u (3) kullandın: 3 gün sonrası 8 Kasım'dır ama o gün Nehir Hanım temizlik yapmaz."
  ],
  aciklama: `Aynı güne denk gelme, ilk temizlikten sonra hem 9'un hem 15'in katı kadar gün geçtiğinde olur. İlk buluşma EKOK ile bulunur.
Adım 1: 9 = 3^{2} ve 15 = 3 · 5. EKOK = 3^{2} · 5 = 45 gün.
Adım 2: 5 Kasım'dan 45 gün sonrasını bul. Kasım'ın sonuna (30 Kasım) kadar 30 − 5 = 25 gün vardır.
Adım 3: Kalan 45 − 25 = 20 gün Aralık'ta geçer: 20 Aralık.
Sağlama: Nehir Hanım 45 gün içinde 5 kez, Kemal Bey 3 kez temizlik yapmış olur; ikisi de tam sayıdır.
Sık yapılan hata: Ayın gün sayısını yanlış almak. Kasım 30 gün çeker; 31 alınırsa 19 Aralık bulunur.
Cevap A.`
},
{
  id: "mat-ck-042",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Aysel'in kasasının şifresi üç basamaklı bir sayıdır. Şifre hem 8'e hem 20'ye kalansız bölünmektedir.
**Buna göre Aysel'in şifresi en az kaçtır?**`,
  gorsel: null,
  secenekler: ["40", "80", "120", "160"],
  dogru: 2,
  hatalar: [
    "EKOK'u (40) buldun ama 40 iki basamaklıdır; şifre üç basamaklı olmalı.",
    "80 de ortak kattır ama iki basamaklıdır; şifre üç basamaklı olmalı.",
    null,
    "8 · 20 = 160'ı aldın. 160 ortak kattır ama üç basamaklı en küçük ortak kat değildir."
  ],
  aciklama: `Hem 8'e hem 20'ye bölünen sayılar, ikisinin ortak katlarıdır ve EKOK'un katlarıdır.
Adım 1: 8 = 2^{3} ve 20 = 2^{2} · 5. EKOK = 2^{3} · 5 = 40.
Adım 2: Ortak katlar 40'ın katlarıdır: 40, 80, 120, 160…
Adım 3: Üç basamaklı en küçüğünü seç: 40 ve 80 iki basamaklıdır, ilk üç basamaklı kat 120'dir.
Sağlama: 120 ÷ 8 = 15 ve 120 ÷ 20 = 6, ikisi de kalansız.
Sık yapılan hata: EKOK'u bulunca durmak. Soruda basamak koşulu varsa EKOK'un katlarından koşula uyan ilkini al.
Cevap C.`
},
{
  id: "mat-ck-043",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bir bilgisayar oyununda kapı, aşağıdaki tabloda asal çarpanlarına ayrılmış biçimleri verilen A ve B sayılarının EKOK'u girildiğinde açılmaktadır.
**Buna göre kapıyı açmak için girilmesi gereken sayı kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Sayı</th><th>Asal çarpanlarına ayrılmış biçimi</th></tr><tr><td>A</td><td>2<sup>2</sup> · 3<sup>3</sup></td></tr><tr><td>B</td><td>2 · 3 · 5<sup>2</sup></td></tr></table>`,
  secenekler: ["16200", "2700", "150", "108"],
  dogru: 1,
  hatalar: [
    "A ile B'yi çarptın (108 · 150); çarpım bir ortak kattır ama en küçüğü değildir.",
    null,
    "Her asalı küçük üsleriyle aldın (2 · 3 · 5^{2}); EKOK'ta her asal çarpanın en büyük üslüsü alınır.",
    "Yalnızca A ile B'nin ortak asal çarpanlarını büyük üsleriyle aldın (2^{2} · 3^{3}); 5 çarpanı yalnızca B'de olsa da EKOK'a girer."
  ],
  aciklama: `EKOK için iki sayıdaki bütün asal çarpanlar, en büyük üsleriyle alınır.
Adım 1: Asal çarpanlar 2, 3 ve 5'tir.
Adım 2: En büyük üsler: 2 için 2^{2} (A'da), 3 için 3^{3} (A'da), 5 için 5^{2} (B'de).
Adım 3: Çarp: 2^{2} · 3^{3} · 5^{2} = 4 · 27 · 25 = 2700.
Sağlama: A = 4 · 27 = 108 ve B = 2 · 3 · 25 = 150. 2700 ÷ 108 = 25 ve 2700 ÷ 150 = 18, ikisi de kalansız. A · B = 16200 ise çok daha büyük bir ortak kattır.
Sık yapılan hata: Yalnızca ortak asalları almak (bu EBOB'a özgüdür) ya da çarpımı EKOK sanmak.
Cevap B.`
},
{
  id: "mat-ck-044",
  kazanim: "M.8.1.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `Bir yarışmada 40'tan büyük 50'den küçük numaralı yarışmacılar arasından, numarası 12 ile aralarında asal olanlar finale kalmaktadır.
**Buna göre kaç yarışmacı finale kalır?**`,
  gorsel: null,
  secenekler: ["3", "4", "5", "9"],
  dogru: 1,
  hatalar: [
    "49'u asal olmadığı için eledin; oysa 49 = 7^{2} ile 12'nin ortak asal çarpanı yoktur.",
    null,
    "45'i de saydın; 45 ve 12'nin ikisi de 3'e bölünür.",
    "41'den 49'a kadar bütün numaraları saydın; koşulu uygulamadın."
  ],
  aciklama: `12 = 2^{2} · 3 olduğundan 12 ile aralarında asal olan sayı ne 2'ye ne de 3'e bölünmelidir.
Adım 1: 41'den 49'a kadar sayıları yaz: 41, 42, …, 49. Çift sayıları ele (2'ye bölünür). Kalanlar: 41, 43, 45, 47, 49.
Adım 2: 3'e bölünenleri ele: 45 (rakamları toplamı 9). Kalanlar: 41, 43, 47, 49.
Adım 3: 4 yarışmacı finale kalır.
Sağlama: 49 = 7 · 7 ve 12 ile ortak asal çarpanı yoktur. 41, 43 ve 47 asaldır ve 12'yi bölmez.
Sık yapılan hata: 'Aralarında asal' ile 'asal'ı karıştırıp 49'u elemek. 49 asal değildir ama 12 ile aralarında asaldır.
Cevap B.`
},
{
  id: "mat-ck-045",
  kazanim: "M.8.1.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `Bir matematik yarışmasında, aşağıdaki sayı çiftlerinden birinin EKOK'unun, çiftteki iki sayının çarpımına eşit olduğu bilinmektedir. Yarışmacılardan bu çifti bulmaları istenmiştir.
**Buna göre bu çift aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["12 ve 18", "6 ve 15", "8 ve 20", "9 ve 16"],
  dogru: 3,
  hatalar: [
    "EBOB(12, 18) = 6 olduğundan EKOK = 36'dır; çarpım 216 olduğu için eşit değildir.",
    "EBOB(6, 15) = 3 olduğundan EKOK = 30'dur; çarpım 90 olduğu için eşit değildir.",
    "EBOB(8, 20) = 4 olduğundan EKOK = 40'tır; çarpım 160 olduğu için eşit değildir.",
    null
  ],
  aciklama: `İki sayının çarpımı EBOB · EKOK'a eşittir. EKOK'un çarpıma eşit olması için EBOB'un 1 olması, yani sayıların aralarında asal olması gerekir.
Adım 1: Her çiftin EBOB'unu bul: EBOB(12, 18) = 6, EBOB(6, 15) = 3, EBOB(8, 20) = 4, EBOB(9, 16) = 1.
Adım 2: EBOB'u 1 olan çift 9 ve 16'dır.
Sağlama: 9 = 3^{2} ve 16 = 2^{4}; EKOK = 2^{4} · 3^{2} = 144 = 9 · 16.
Sık yapılan hata: Çarpımı her zaman EKOK sanmak. Çarpım, yalnızca aralarında asal sayılarda EKOK'a eşittir.
Cevap D.`
},
{
  id: "mat-ck-046",
  kazanim: "M.8.1.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `Dört arkadaş, çözdükleri soru sayısının toplam soru sayısına oranını kesir olarak yazmıştır: Ali [[14|21]], Bora [[16|27]], Cem [[15|40]], Duru [[22|33]].
**Buna göre hangi arkadaşın yazdığı kesir sadeleşmez (en sade hâldedir)?**`,
  gorsel: null,
  secenekler: ["Ali", "Bora", "Cem", "Duru"],
  dogru: 1,
  hatalar: [
    "14 ve 21'in ikisi de 7'ye bölünür; [[14|21]] kesri [[2|3]] olarak sadeleşir.",
    null,
    "15 ve 40'ın ikisi de 5'e bölünür; [[15|40]] kesri [[3|8]] olarak sadeleşir.",
    "22 ve 33'ün ikisi de 11'e bölünür; [[22|33]] kesri [[2|3]] olarak sadeleşir."
  ],
  aciklama: `Bir kesrin sadeleşmemesi için pay ile payda aralarında asal olmalıdır, yani 1'den başka ortak bölenleri olmamalıdır.
Adım 1: Her kesirde pay ve paydanın ortak asal çarpanını ara. 16 = 2^{4} ve 27 = 3^{3}: ortak asal çarpan yok.
Adım 2: 14 = 2 · 7 ve 21 = 3 · 7: ortak 7. 15 = 3 · 5 ve 40 = 2^{3} · 5: ortak 5. 22 = 2 · 11 ve 33 = 3 · 11: ortak 11.
Adım 3: Yalnızca [[16|27]] kesrinin payı ile paydası aralarında asaldır; bu kesir sadeleşmez.
Sağlama: [[14|21]] = [[2|3]], [[15|40]] = [[3|8]], [[22|33]] = [[2|3]] olarak sadeleşir; [[16|27]] ise aynı kalır.
Sık yapılan hata: Pay ve paydanın asal olup olmadığına bakmak. 16 ve 27 asal değildir ama aralarında asaldır.
Cevap B.`
},
{
  id: "mat-ck-047",
  kazanim: "M.8.1.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `Bir bulmacada aranan sayı şu koşulları sağlamaktadır: 17'den büyüktür, 29'dan küçüktür, asal sayı değildir ve 15 ile aralarında asaldır.
**Buna göre bu koşulların hepsini sağlayan kaç sayı vardır?**`,
  gorsel: null,
  secenekler: ["5", "4", "3", "2"],
  dogru: 2,
  hatalar: [
    "'Asal değildir' koşulunu uygulamadın; 19 ve 23 de 15 ile aralarında asaldır ama asal olduklarından elenir.",
    "21'i de saydın; 21 ve 15'in ikisi de 3'e bölünür.",
    null,
    "28'i eledin; oysa 28 = 2^{2} · 7 ile 15 = 3 · 5'in ortak asal çarpanı yok."
  ],
  aciklama: `15 = 3 · 5 olduğundan 15 ile aralarında asal olan sayı ne 3'e ne de 5'e bölünmelidir.
Adım 1: 18'den 28'e kadar sayıları yaz: 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28.
Adım 2: 3'e bölünenleri ele: 18, 21, 24, 27. 5'e bölünenleri ele: 20, 25. Kalanlar: 19, 22, 23, 26, 28.
Adım 3: Asal olanları ele: 19 ve 23 asaldır. Kalanlar: 22, 26, 28.
Adım 4: Koşulları sağlayan 3 sayı vardır.
Sağlama: 22 = 2 · 11, 26 = 2 · 13 ve 28 = 2^{2} · 7; üçü de asal değildir ve 3'e ya da 5'e bölünmez.
Sık yapılan hata: Koşullardan birini unutmak. 19 ve 23, 15 ile aralarında asaldır ama asal oldukları için elenir.
Cevap C.`
},
{
  id: "mat-ck-048",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir bilgi yarışmasında sunucu, bir sayıyı aşağıdaki tabloda verilen beş ipucuyla tarif etmiştir. Yarışmacı Ece, beş ipucunun hepsine uyan sayıyı doğru bulmuştur.
**Buna göre Ece'nin bulduğu sayı aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>İpucu</th><th>Bilgi</th></tr><tr><td>1. ipucu</td><td>İki basamaklı bir sayıdır.</td></tr><tr><td>2. ipucu</td><td>10'un katıdır.</td></tr><tr><td>3. ipucu</td><td>Tam 3 farklı asal çarpanı vardır.</td></tr><tr><td>4. ipucu</td><td>Pozitif tam sayı çarpanlarının sayısı 8'dir.</td></tr><tr><td>5. ipucu</td><td>30'dan büyüktür.</td></tr></table>`,
  secenekler: ["30", "60", "70", "90"],
  dogru: 2,
  hatalar: [
    "5. ipucunu kontrol etmedin: 30 ilk dört ipucuna uyar ama 30'dan büyük değildir.",
    "60 = 2^{2} · 3 · 5 sayısının çarpan sayısı 3 · 2 · 2 = 12'dir, 8 değil.",
    null,
    "90 = 2 · 3^{2} · 5 sayısının çarpan sayısı 2 · 3 · 2 = 12'dir, 8 değil."
  ],
  aciklama: `İpuçlarını sırayla uygulayıp şıkları ele.
Adım 1: Dört şık da iki basamaklı ve 10'un katıdır.
Adım 2: Asal çarpanlarına ayır: 30 = 2 · 3 · 5, 60 = 2^{2} · 3 · 5, 70 = 2 · 5 · 7, 90 = 2 · 3^{2} · 5. Dördünün de tam 3 farklı asal çarpanı vardır.
Adım 3: Çarpan sayısını bul (üsleri birer artırıp çarp): 30 → 2 · 2 · 2 = 8; 60 → 3 · 2 · 2 = 12; 70 → 2 · 2 · 2 = 8; 90 → 2 · 3 · 2 = 12. Çarpan sayısı 8 olanlar: 30 ve 70.
Adım 4: 30'dan büyük olan 70'tir.
Sağlama: 70'in çarpanları 1, 2, 5, 7, 10, 14, 35, 70 → 8 tane.
Sık yapılan hata: Son ipucunu kontrol etmeyi unutmak. 30 da ilk dört ipucuna uyar.
Cevap C.`
},
{
  id: "mat-ck-049",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 3,
  soru: `Kerem bir sayı tutmuştur. Tuttuğu sayı tek sayıdır (çift değildir) ve tam 6 pozitif tam sayı çarpanı vardır. Kerem'in tuttuğu sayı, aşağıdaki sayılar arasında bu iki koşulu sağlayan en küçük sayıdır.
**Buna göre Kerem hangi sayıyı tutmuştur?**`,
  gorsel: null,
  secenekler: ["27", "45", "63", "75"],
  dogru: 1,
  hatalar: [
    "27 = 3^{3} sayısının çarpan sayısı 3 + 1 = 4'tür, 6 değil.",
    null,
    "63 = 3^{2} · 7 sayısının 6 çarpanı vardır ama 45'ten büyüktür; en küçüğü değildir.",
    "75 = 3 · 5^{2} sayısının 6 çarpanı vardır ama 45'ten büyüktür; en küçüğü değildir."
  ],
  aciklama: `Çarpan sayısı, asal çarpanlarına ayrılmış biçimdeki üsler birer artırılıp çarpılarak bulunur. Önce çarpan sayısı koşulunu uygula, sonra uygun olanların en küçüğünü seç.
Adım 1: Dört sayı da tektir; ayırt edici koşul çarpan sayısıdır. 27 = 3^{3} → 3 + 1 = 4 çarpan. Olmaz.
Adım 2: 45 = 3^{2} · 5 → (2 + 1) · (1 + 1) = 6 çarpan. Uygun.
Adım 3: 63 = 3^{2} · 7 → 6 çarpan. 75 = 3 · 5^{2} → 6 çarpan. İkisi de uygun.
Adım 4: Uygun olanlardan en küçüğü 45'tir.
Sağlama: 45'in çarpanları 1, 3, 5, 9, 15, 45 → 6 tane.
Sık yapılan hata: Yalnızca 'en küçük' ifadesine bakıp 27'yi seçmek. 27 en küçük adaydır ama çarpan sayısı koşulunu sağlamaz.
Cevap B.`
},
{
  id: "mat-ck-050",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir yazılım şirketinin ürün kodlarından biri, asal çarpanlarına ayrılmış biçimde 2^{2} · 3 · 5^{2} olarak yazılmaktadır. Şirketin güvenlik görevlisi, bu kodun 10'dan büyük ve 50'den küçük olan pozitif tam sayı çarpanlarını bir listeye yazacaktır.
**Buna göre listede kaç sayı bulunur?**`,
  gorsel: null,
  secenekler: ["7", "6", "5", "4"],
  dogru: 2,
  hatalar: [
    "İki sınırı da listeye kattın: 10 ve 50 çarpandır ama koşullara uymaz.",
    "Sınırlardan birini de listeye kattın: 10 ya da 50 çarpandır ama '10'dan büyük' ve '50'den küçük' ifadeleri sınırları kapsamaz.",
    null,
    "Çarpanları çiftler hâlinde yazarken bir çarpanı (örneğin 25'i) atladın."
  ],
  aciklama: `Önce sayıyı hesapla, sonra çarpanlarını çiftler hâlinde yaz. Sınırlar 'büyük' ve 'küçük' ile verildiğinde sınırların kendisi sayılmaz.
Adım 1: 2^{2} · 3 · 5^{2} = 4 · 3 · 25 = 300.
Adım 2: 300'ün çarpanlarını çiftler hâlinde yaz: 1 · 300, 2 · 150, 3 · 100, 4 · 75, 5 · 60, 6 · 50, 10 · 30, 12 · 25, 15 · 20. Toplam 18 çarpan var (kontrol: (2 + 1) · (1 + 1) · (2 + 1) = 18).
Adım 3: 10'dan büyük, 50'den küçük olanları seç: 12, 15, 20, 25, 30.
Adım 4: 5 sayı.
Sık yapılan hata: 10 ve 50'yi de listeye katmak. 10 bir çarpandır ama '10'dan büyük' koşuluna uymaz; 50 de '50'den küçük' koşuluna uymaz.
Cevap C.`
},
{
  id: "mat-ck-051",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 3,
  soru: `Ayşe, bir takvim yaprağında ardışık üç günün tarihini çarpmış ve sonucu 504 bulmuştur.
**Buna göre bu üç tarihin toplamı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 360 150" role="img" aria-label="Takvim yaprağında ardışık üç gün, tarihleri bilinmiyor; çarpımları 504"><rect x="12" y="10" width="336" height="130" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="2" fill="none"><rect x="38" y="30" width="72" height="56" rx="6"/><rect x="144" y="30" width="72" height="56" rx="6"/><rect x="250" y="30" width="72" height="56" rx="6"/></g><g fill="currentColor" font-size="26" text-anchor="middle" font-weight="bold"><text x="74" y="68">?</text><text x="180" y="68">?</text><text x="286" y="68">?</text></g><text x="180" y="120" font-size="18" text-anchor="middle" fill="currentColor">Üç tarihin çarpımı: 504</text></svg>`,
  secenekler: ["24", "21", "9", "8"],
  dogru: 0,
  hatalar: [
    null,
    "6, 7 ve 8'i aldın: 6 · 7 · 8 = 336 eder, 504 etmez.",
    "Yalnızca en büyük tarihi buldun (9); sorulan üç tarihin toplamı.",
    "Yalnızca ortadaki tarihi buldun (8); sorulan üç tarihin toplamı."
  ],
  aciklama: `504'ü asal çarpanlarına ayırıp ardışık üç sayı olacak biçimde gruplandırabilirsin.
Adım 1: 504 ÷ 2 = 252, 252 ÷ 2 = 126, 126 ÷ 2 = 63, 63 ÷ 3 = 21, 21 ÷ 3 = 7, 7 ÷ 7 = 1. Yani 504 = 2^{3} · 3^{2} · 7.
Adım 2: Ardışık üç sayının çarpımı olacak biçimde grupla: 2^{3} = 8, 3^{2} = 9 ve 7. Sayılar 7, 8 ve 9 olur; ardışıktır.
Adım 3: Topla: 7 + 8 + 9 = 24.
Sağlama: 7 · 8 · 9 = 504.
Sık yapılan hata: Ortadaki ya da en büyük sayıyı bulup durmak.
Cevap A.`
},
{
  id: "mat-ck-052",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir kargo firması, paketlerin takip kodunu 2^{x} · 3^{2} sayısı olarak üretmektedir. Bu takip kodunun tam 18 pozitif tam sayı çarpanı bulunduğu bilinmektedir.
**Buna göre x kaçtır?**`,
  gorsel: null,
  secenekler: ["4", "5", "6", "9"],
  dogru: 1,
  hatalar: [
    "Çarpan sayısını üslerin toplamıyla karıştırıp x + 2 = 6 aldın.",
    null,
    "x + 1 = 6 bulup 1'i çıkarmayı unuttun.",
    "18 ÷ 2 = 9 aldın; 3^{2} için çarpan sayısı 2 + 1 = 3'tür, 2 değil."
  ],
  aciklama: `Asal çarpanlarına ayrılmış biçimdeki üsler birer artırılıp çarpılırsa çarpan sayısı bulunur.
Adım 1: 2^{x} · 3^{2} için çarpan sayısı (x + 1) · (2 + 1) = (x + 1) · 3 olur.
Adım 2: Bu çarpım 18'dir: x + 1 = 18 ÷ 3 = 6.
Adım 3: x = 6 − 1 = 5.
Sağlama: 2^{5} · 3^{2} = 32 · 9 = 288. Çarpan sayısı 6 · 3 = 18.
Sık yapılan hata: x + 1 = 6 bulunca x = 6 demek. Önce 1'i çıkar.
Cevap B.`
},
{
  id: "mat-ck-053",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bir okul, aşağıdaki tabloda sayıları verilen öğrenci ve velilerle bir gezi düzenleyecektir. Her minibüste eşit sayıda öğrenci ve eşit sayıda veli bulunacak, hiç kimse açıkta kalmayacaktır.
**Buna göre okul en az kaç minibüs kiralamalıdır?**`,
  gorsel: `<table class="tablo"><tr><th>Bilgi</th><th>Değer</th></tr><tr><td>Öğrenci sayısı</td><td>48</td></tr><tr><td>Veli sayısı</td><td>36</td></tr><tr><td>Bir minibüsün kapasitesi</td><td>15 kişi</td></tr></table>`,
  secenekler: ["3", "4", "6", "12"],
  dogru: 2,
  hatalar: [
    "3 minibüste her birinde 16 öğrenci + 12 veli = 28 kişi olur; 15 kişilik kapasiteyi aşar.",
    "4 minibüste her birinde 12 öğrenci + 9 veli = 21 kişi olur; 15 kişilik kapasiteyi aşar.",
    null,
    "EBOB'u (en çok minibüs sayısını) cevap sandın; soru en az minibüs sayısını soruyor."
  ],
  aciklama: `Minibüs sayısı hem 48'i hem 36'yı kalansız bölmelidir; yani 48 ile 36'nın ortak bölenlerinden biri olmalıdır.
Adım 1: 48 = 2^{4} · 3 ve 36 = 2^{2} · 3^{2}. EBOB = 2^{2} · 3 = 12. Ortak bölenler 12'nin çarpanlarıdır: 1, 2, 3, 4, 6, 12.
Adım 2: Toplam kişi 48 + 36 = 84'tür. Her minibüste 15 kişiyi geçmemek gerekir.
Adım 3: 3 minibüs → 84 ÷ 3 = 28 kişi (olmaz), 4 minibüs → 21 kişi (olmaz), 6 minibüs → 14 kişi (olur).
Adım 4: En az minibüs sayısı 6'dır.
Sağlama: 6 minibüste her birinde 48 ÷ 6 = 8 öğrenci ve 36 ÷ 6 = 6 veli, toplam 14 kişi vardır.
Sık yapılan hata: EBOB'u 'en az' sorusunun cevabı yapmak. EBOB en çok minibüs sayısıdır; en az sayı kapasiteyle sınırlanır.
Cevap C.`
},
{
  id: "mat-ck-054",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bir balkondaki kaktüs ve sardunya, aşağıdaki tabloda verilen düzende sulanmaktadır. Günler yılbaşından itibaren 1, 2, 3, … diye numaralandırılmıştır.
**Buna göre 1. günden 60. güne kadar (1. ve 60. günler dâhil) iki bitki kaç gün aynı günde sulanmıştır?**`,
  gorsel: `<table class="tablo"><tr><th>Bitki</th><th>İlk sulama günü</th><th>Sulama aralığı</th></tr><tr><td>Kaktüs</td><td>3. gün</td><td>8 günde bir</td></tr><tr><td>Sardunya</td><td>5. gün</td><td>6 günde bir</td></tr></table>`,
  secenekler: ["2", "3", "8", "10"],
  dogru: 1,
  hatalar: [
    "60 ÷ 24 = 2 bölümünü cevap yaptın; ilk ortak gün 24 değil 11'dir, bu yüzden bölme kısa yolu çalışmaz.",
    null,
    "Yalnızca kaktüsün sulama günlerini saydın (3, 11, …, 59 → 8 gün).",
    "Yalnızca sardunyanın sulama günlerini saydın (5, 11, …, 59 → 10 gün)."
  ],
  aciklama: `İki bitkinin aynı gün sulandığı günler ortaktır. Başlangıç günleri farklı olduğundan önce ilk ortak günü bulmak gerekir; sonraki ortak günler, ilk ortak günün üstüne EKOK kadar gün eklenerek gelir.
Adım 1: Kaktüs: 3, 11, 19, 27, 35, 43, 51, 59. Sardunya: 5, 11, 17, 23, 29, 35, 41, 47, 53, 59. İlk ortak gün 11'dir.
Adım 2: EKOK(8, 6) = 24 olduğundan ortak günler 24'er artar: 11, 35, 59.
Adım 3: Bir sonraki ortak gün 83'tür, 60'ı aşar. Toplam 3 gün.
Sağlama: 59 = 3 + 8 · 7 ve 59 = 5 + 6 · 9. İki listede de var.
Sık yapılan hata: 60 ÷ 24 = 2 diyerek bölümü cevap yapmak. Başlangıç günleri ortak değilse bölme kısa yolu çalışmaz; günleri listele.
Cevap B.`
},
{
  id: "mat-ck-055",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bir okul, öğrencilere eşit sayıda kalem ve eşit sayıda silgi dağıtmak üzere 98 kalem ve 138 silgi almıştır. Her öğrenciye aynı sayıda kalem ve aynı sayıda silgi verilmiş; dağıtım sonunda 2 kalem ve 6 silgi artmış, bu artanlarla bir öğrenciye daha eksiksiz pay verilememiştir.
**Buna göre okulda en çok kaç öğrenci vardır?**`,
  gorsel: null,
  secenekler: ["12", "6", "4", "2"],
  dogru: 0,
  hatalar: [
    null,
    "6 öğrenci olsaydı 6 silgi artmazdı; artan silgi sayısı öğrenci sayısından küçük olmalıdır.",
    "4, 96 ile 132'nin ortak bölenidir ama en büyüğü değildir.",
    "Artanları çıkarmadan 98 ile 138'in EBOB'unu aldın (2); önce dağıtılan miktarları bulmalısın."
  ],
  aciklama: `Her öğrenciye eşit sayıda kalem ve silgi verilip artanlar çıkarıldığında kalan sayılar öğrenci sayısına tam bölünür. Yani öğrenci sayısı, artanlar çıkarılmış sayıların ortak bölenidir.
Adım 1: Dağıtılan kalem: 98 − 2 = 96. Dağıtılan silgi: 138 − 6 = 132.
Adım 2: Öğrenci sayısı hem 96'yı hem 132'yi böler. En çok öğrenci istendiğine göre EBOB aranır: 96 = 2^{5} · 3 ve 132 = 2^{2} · 3 · 11. EBOB = 2^{2} · 3 = 12.
Adım 3: Artan silgi sayısı (6), öğrenci sayısından küçük olmalıdır. 12 > 6 olduğundan 12 uygundur.
Sağlama: 12 öğrenciye 96 ÷ 12 = 8 kalem ve 132 ÷ 12 = 11 silgi verilir; 98 − 96 = 2 kalem ve 138 − 132 = 6 silgi artar.
Sık yapılan hata: 98 ve 138'in EBOB'unu (2) almak. Önce artanları çıkarmalısın.
Cevap A.`
},
{
  id: "mat-ck-056",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bir mekanik saatte iç içe geçmiş iki dişli çarktan büyüğünün 30, küçüğünün 18 dişi vardır. Başlangıçta çarkların işaretli birer dişi birbirine temas etmektedir. Çarklar duraksamadan dönmekte ve büyük çark 4 saniyede 1 tam tur atmaktadır.
**Buna göre işaretli iki diş, başlangıçtan sonra ilk kez yeniden birbirine temas edene kadar kaç saniye geçer?**`,
  gorsel: `<table class="tablo"><tr><th>Çark</th><th>Diş sayısı</th></tr><tr><td>Büyük çark</td><td>30</td></tr><tr><td>Küçük çark</td><td>18</td></tr></table>`,
  secenekler: ["3", "12", "20", "90"],
  dogru: 1,
  hatalar: [
    "Büyük çarkın tur sayısını (3) buldun ama süreye çevirmedin; her tur 4 saniye sürer.",
    null,
    "Küçük çarkın tur sayısını (5) süre hesabında kullandın (5 · 4 = 20); 4 saniyelik tur büyük çarka aittir ve onun tur sayısı 3'tür.",
    "EKOK'u (90 diş) saniye sandın; 90, geçen diş sayısıdır, süre değil."
  ],
  aciklama: `İç içe geçmiş çarklarda aynı anda aynı sayıda diş geçer. İşaretli dişlerin yeniden buluşması için geçen diş sayısı hem 30'un hem 18'in katı olmalıdır; ilk buluşma EKOK ile bulunur.
Adım 1: 30 = 2 · 3 · 5 ve 18 = 2 · 3^{2}. EKOK = 2 · 3^{2} · 5 = 90. Yani 90 diş geçtiğinde işaretli dişler ilk kez yeniden buluşur.
Adım 2: Büyük çark 90 ÷ 30 = 3 tur, küçük çark 90 ÷ 18 = 5 tur atmış olur.
Adım 3: Büyük çark her tur için 4 saniye harcadığından süre 3 · 4 = 12 saniyedir.
Sağlama: 12 saniyede büyük çark 3 tur (90 diş), küçük çark 5 tur (90 diş) atar. Örneğin 8 saniyede büyük çark 2 tur (60 diş) atar; küçük çark ise 3 tam tur ve 6 diş döner, yani tam tur olmaz.
Sık yapılan hata: Tur sayısını bulup durmak ya da süreyi yanlış çarkın turuyla hesaplamak. 4 saniye büyük çarkın bir turudur; küçük çarkın tur sayısıyla çarpılmaz.
Cevap B.`
},
{
  id: "mat-ck-057",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bir belediye, 360 m uzunluğundaki düz bir yürüyüş yolunun iki ucu dâhil olmak üzere kenarına çınar ve çam fidanı dikecektir. Çınarlar başlangıç noktasından başlayarak her 12 m'de bir, çamlar da yine başlangıç noktasından başlayarak her 18 m'de bir dikilecektir.
**Buna göre yolun başlangıcından itibaren çınar ile çamın aynı uzaklıkta dikildiği kaç nokta vardır?**`,
  gorsel: null,
  secenekler: ["10", "11", "20", "30"],
  dogru: 1,
  hatalar: [
    "Başlangıç noktasını saymadın: 360 ÷ 36 = 10 aralık vardır, nokta sayısı bir fazladır.",
    null,
    "Çamlar için 360 ÷ 18 = 20 işlemini yaptın; ortak noktaları bulmak için EKOK gerekir.",
    "Çınarlar için 360 ÷ 12 = 30 işlemini yaptın; ortak noktaları bulmak için EKOK gerekir."
  ],
  aciklama: `Aynı uzaklıkta dikilen yerler, başlangıçtan itibaren hem 12'nin hem 18'in katı olan uzaklıklardır; bunlar EKOK'un katlarıdır.
Adım 1: 12 = 2^{2} · 3 ve 18 = 2 · 3^{2}. EKOK = 2^{2} · 3^{2} = 36 m.
Adım 2: Ortak noktaların uzaklıkları 0, 36, 72, …, 360 olur. Bunlar 36'nın katlarıdır; 360 ÷ 36 = 10.
Adım 3: Başlangıç noktası (0. m) da dâhil olduğundan 10 + 1 = 11 nokta.
Sağlama: 0, 36, 72, 108, 144, 180, 216, 252, 288, 324, 360 → 11 sayı.
Sık yapılan hata: Aralık sayısını nokta sayısı sanmak. İki ucu dâhil açık bir yolda nokta sayısı, aralık sayısından bir fazladır.
Cevap B.`
},
{
  id: "mat-ck-058",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bir konserde sıraya giren 120 kişi, geliş sırasına göre 1'den 120'ye kadar numaralanmıştır. Numarası 5'in katı olan kişilere bilek bandı, numarası 8'in katı olan kişilere rozet verilmiştir.
**Buna göre bu iki hediyeden en az birini alan kaç kişi vardır?**`,
  gorsel: null,
  secenekler: ["42", "39", "36", "3"],
  dogru: 2,
  hatalar: [
    "Hediyeyi iki kez alanları toplamdan çıkarmak yerine ekledin: 24 + 15 + 3 = 42.",
    "İki hediyeyi birden alan kişileri iki kez saydın: 24 + 15 = 39.",
    null,
    "Yalnızca iki hediyeyi de alan kişileri saydın; soru en az birini alanları soruyor."
  ],
  aciklama: `En az bir hediye alanları sayarken iki hediyeyi birden alanlar iki listede de yer alır; onları bir kez saymak için bir kez çıkarılır.
Adım 1: Bilek bandı alanlar 5'in katlarıdır: 120 ÷ 5 = 24 kişi.
Adım 2: Rozet alanlar 8'in katlarıdır: 120 ÷ 8 = 15 kişi.
Adım 3: İkisini de alanlar 5 ile 8'in ortak katlarıdır. 5 ile 8 aralarında asal olduğundan EKOK(5, 8) = 40. 120 ÷ 40 = 3 kişi (40, 80, 120).
Adım 4: En az birini alanlar: 24 + 15 − 3 = 36.
Sağlama: Yalnızca bilek bandı alan 24 − 3 = 21, yalnızca rozet alan 15 − 3 = 12, ikisini de alan 3 kişi; 21 + 12 + 3 = 36.
Sık yapılan hata: Ortak kişileri iki kez saymak (24 + 15 = 39) ya da toplama eklemek.
Cevap C.`
},
{
  id: "mat-ck-059",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bir hayvanat bahçesinde yunus ve fok gösterileri, aşağıdaki tabloda verilen aralıklarla tekrarlanmaktadır. İki gösteri sabah 09.00'da aynı anda başlamıştır. Bir ziyaretçi, 12.00'den sonra iki gösterinin ilk kez aynı anda başladığı turu izlemek istemektedir.
**Buna göre ziyaretçinin izleyeceği ortak turun başlama saati kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Gösteri</th><th>Başlama aralığı</th></tr><tr><td>Yunus gösterisi</td><td>45 dakikada bir</td></tr><tr><td>Fok gösterisi</td><td>30 dakikada bir</td></tr></table>`,
  secenekler: ["15.00", "13.30", "12.00", "10.30"],
  dogru: 1,
  hatalar: [
    "Bir sonraki ortak anı aldın; 13.30 daha erken ve 12.00'den sonradır.",
    null,
    "12.00 de ortak bir andır ama '12.00'den sonra' ifadesi bu anı kapsamaz.",
    "09.00'dan sonraki ilk ortak anı buldun; soru 12.00'den sonrasını soruyor."
  ],
  aciklama: `İki gösterinin aynı anda başladığı anlar, 09.00'dan sonra hem 45'in hem 30'un katı kadar dakika geçen anlardır.
Adım 1: 45 = 3^{2} · 5 ve 30 = 2 · 3 · 5. EKOK = 2 · 3^{2} · 5 = 90 dakika (1 saat 30 dakika).
Adım 2: Ortak başlama anları: 09.00, 10.30, 12.00, 13.30, 15.00…
Adım 3: 12.00'den sonraki ilk ortak an 13.30'dur.
Sağlama: 09.00 ile 13.30 arası 270 dakikadır; 270 ÷ 45 = 6 ve 270 ÷ 30 = 9, ikisi de kalansız. 12.00 ile 13.30 arasında başka ortak an yoktur.
Sık yapılan hata: '12.00'den sonra' ifadesini '12.00 dâhil' diye okumak. 12.00 bir ortak andır ama 'sonra' dendiği için sayılmaz.
Cevap B.`
},
{
  id: "mat-ck-060",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 3,
  soru: `Seda'nın bilyeleri 12'şerli sıralandığında 10, 18'erli sıralandığında 16 bilye artmaktadır. Seda'nın bilye sayısı üç basamaklıdır.
**Buna göre Seda'nın en az kaç bilyesi vardır?**`,
  gorsel: null,
  secenekler: ["106", "108", "110", "142"],
  dogru: 0,
  hatalar: [
    null,
    "36'nın katını aldın ve artanları dikkate almadın: 108, hem 12'ye hem 18'e kalansız bölünür.",
    "36'nın katına 2 ekledin; oysa 2 eksik olmalı: 36'nın katından 2 çıkarılır.",
    "Bir sonraki değeri aldın (36 · 4 − 2); 106 daha küçüktür ve koşula uyar."
  ],
  aciklama: `Kalanlar farklı olsa da bölenlere göre eksikler aynıysa (12'ye bölününce 10 kalan: 2 eksik; 18'e bölününce 16 kalan: 2 eksik), sayıya 2 eklenince sayı hem 12'ye hem 18'e kalansız bölünür.
Adım 1: Sayıya 2 eklenirse 12'nin ve 18'in ortak katı olur: EKOK(12, 18) = 36.
Adım 2: Bilye sayısı '36'nın bir katının 2 eksiği'dir: 34, 70, 106, 142…
Adım 3: Üç basamaklı en küçüğü 106'dır.
Sağlama: 106 = 12 · 8 + 10 ve 106 = 18 · 5 + 16.
Sık yapılan hata: 'Kalan aynı' kuralını uygulamak. Kalanlar farklıdır ama bölenlere göre eksikleri aynıdır.
Cevap A.`
},
{
  id: "mat-ck-061",
  kazanim: "M.8.1.1.3",
  kademe: 0,
  zorluk: 3,
  soru: `Bir kitapta ardışık iki sayfa numarasının en küçük ortak katı 306'dır.
**Buna göre bu iki sayfa numarasının toplamı kaçtır?**`,
  gorsel: null,
  secenekler: ["306", "37", "35", "33"],
  dogru: 2,
  hatalar: [
    "Soruda verilen EKOK'u cevap sandın; sorulan sayıların toplamı.",
    "18 ve 19'u aldın: EKOK(18, 19) = 342 eder, 306 etmez.",
    null,
    "16 ve 17'yi aldın: EKOK(16, 17) = 272 eder, 306 etmez."
  ],
  aciklama: `Ardışık iki doğal sayı aralarında asaldır; aralarında asal sayıların EKOK'u çarpımlarına eşittir.
Adım 1: Sayıların çarpımı 306'dır.
Adım 2: 306'yı asal çarpanlarına ayır: 306 = 2 · 3^{2} · 17.
Adım 3: Ardışık iki çarpana grupla: 17 ve 2 · 9 = 18. Sayılar 17 ve 18'dir.
Adım 4: Topla: 17 + 18 = 35.
Sağlama: EBOB(17, 18) = 1 ve EKOK(17, 18) = 17 · 18 = 306.
Sık yapılan hata: Ardışık sayıların EKOK'unun çarpımlarına eşit olduğunu fark etmeyip rastgele tahmin yürütmek.
Cevap C.`
},
{
  id: "mat-ck-062",
  kazanim: "M.8.1.1.3",
  kademe: 0,
  zorluk: 3,
  soru: `Elif ile Kaan birer doğal sayı tutmuştur. İkisi de tuttuğu sayının 1'den büyük olduğunu söylemiştir. Sayıların çarpımı 72'dir ve en küçük ortak katları da 72'dir.
**Buna göre iki sayının toplamı kaçtır?**`,
  gorsel: null,
  secenekler: ["73", "38", "18", "17"],
  dogru: 3,
  hatalar: [
    "1 ve 72'yi aldın: aralarında asaldır ama sayıların 1'den büyük olması isteniyor.",
    "2 ve 36'yı aldın: çarpım 72 olsa da ortak çarpan 2 olduğundan EKOK 36'dır.",
    "6 ve 12'yi aldın: çarpım 72 olsa da ortak çarpan 6 olduğundan EKOK 12'dir.",
    null
  ],
  aciklama: `Çarpım EBOB · EKOK'a eşittir. Çarpım ile EKOK eşitse EBOB 1'dir; yani iki sayı aralarında asaldır.
Adım 1: 72 = 2^{3} · 3^{2}. Aralarında asal iki sayıda aynı asal çarpan ikisinde birden bulunamaz; 2^{3} ve 3^{2} farklı sayılara gider.
Adım 2: Sayılar 8 ve 9'dur (1 ve 72 çiftini '1'den büyük' koşulu eler).
Adım 3: Toplam: 8 + 9 = 17.
Sağlama: EBOB(8, 9) = 1; EKOK(8, 9) = 72 = 8 · 9.
Sık yapılan hata: Çarpımı 72 olan ilk çifte bakmak. (6, 12) ve (2, 36) de çarpımı 72 yapar ama EKOK'ları 72 değildir.
Cevap D.`
},
{
  id: "mat-ck-063",
  kazanim: "M.8.1.1.3",
  kademe: 0,
  zorluk: 3,
  soru: `Tuna, tahtaya 84 ve x sayılarını yazmıştır. İki sayı da bu iki sayının EBOB'una bölündüğünde bölümler sırasıyla 3 ve 5 çıkmıştır.
**Buna göre x kaçtır?**`,
  gorsel: null,
  secenekler: ["15", "28", "84", "140"],
  dogru: 3,
  hatalar: [
    "Bölümleri çarptın (3 · 5 = 15); x, EBOB ile bölümün çarpımıdır.",
    "EBOB'u (28) cevap sandın; soru x sayısını soruyor.",
    "Soruda verilen sayıyı cevap sandın; x farklı bir sayıdır.",
    null
  ],
  aciklama: `Bir sayı EBOB'una bölündüğünde elde edilen bölümler aralarında asal olur. Tersi de doğrudur: sayı = EBOB · bölüm.
Adım 1: 84 sayısının bölümü 3 olduğundan EBOB = 84 ÷ 3 = 28.
Adım 2: x sayısının bölümü 5 olduğundan x = 28 · 5 = 140.
Adım 3: Denetle: 3 ile 5 aralarında asaldır, yani 28 gerçekten EBOB'dur.
Sağlama: 84 = 2^{2} · 3 · 7 ve 140 = 2^{2} · 5 · 7. EBOB = 2^{2} · 7 = 28; 84 ÷ 28 = 3 ve 140 ÷ 28 = 5.
Sık yapılan hata: EBOB'u bulup durmak (28) ya da bölümleri çarpmak (15). x, EBOB ile 5'in çarpımıdır.
Cevap D.`
},
{
  id: "mat-ck-064",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 4,
  soru: `Bir şirket, ürün kodlarını şu kurala göre üretmektedir: Kod iki basamaklı bir doğal sayıdır ve tam 3 farklı asal çarpanı vardır.
**Buna göre şirket kaç farklı kod üretebilir?**`,
  gorsel: null,
  secenekler: ["9", "8", "7", "5"],
  dogru: 1,
  hatalar: [
    "Üç basamaklı 105 = 3 · 5 · 7'yi de saydın; kod iki basamaklı olmalı.",
    null,
    "Listeden bir sayıyı atladın (örneğin 90 ya da 84).",
    "Asal çarpanlarının üsleri 1 olan sayıları saydın (30, 42, 66, 70, 78); 60, 84 ve 90 gibi üslü sayıları unuttun."
  ],
  aciklama: `Tam 3 farklı asal çarpanı olan en küçük sayı 2 · 3 · 5 = 30'dur. Üç basamaklıya geçmeden önce çarpanları sistemli ara.
Adım 1: Çarpanlarında 2 ve 3 bulunanlar: 2 · 3 · 5 = 30, 2 · 3 · 7 = 42, 2 · 3 · 11 = 66, 2 · 3 · 13 = 78. Üslülerden 2^{2} · 3 · 5 = 60, 2^{2} · 3 · 7 = 84, 2 · 3^{2} · 5 = 90. (2 · 3 · 17 = 102, 2^{2} · 3 · 11 = 132 ve 2^{3} · 3 · 5 = 120 üç basamaklıdır.)
Adım 2: 3 çarpanı olmayanlar: 2 · 5 · 7 = 70. (2 · 5 · 11 = 110 üç basamaklıdır.)
Adım 3: 2 çarpanı olmayanlar: en küçüğü 3 · 5 · 7 = 105, üç basamaklıdır; hiçbiri uygun değildir.
Adım 4: Liste: 30, 42, 60, 66, 70, 78, 84, 90. Toplam 8 kod.
Sağlama: Her sayıyı çarpanlarına ayırıp farklı asal sayısını say: üçer tane çıkıyor.
Sık yapılan hata: Üslü sayıları (60, 84, 90) unutmak ya da üç basamaklı 105'i listeye katmak.
Cevap B.`
},
{
  id: "mat-ck-065",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 4,
  soru: `Bir spor şenliğine katılan 180 öğrenci, her takımda eşit sayıda öğrenci olacak ve hiçbir öğrenci açıkta kalmayacak biçimde takımlara ayrılacaktır. Organizasyon komitesi, bir takımdaki öğrenci sayısının çift sayı olmasını ve 60'ı geçmemesini istemektedir.
**Buna göre bir takımdaki öğrenci sayısı kaç farklı değer alabilir?**`,
  gorsel: null,
  secenekler: ["9", "10", "12", "16"],
  dogru: 1,
  hatalar: [
    "'60'ı geçmemek' ifadesi 60'ı da kapsar; 60'ı dışarıda bıraktın.",
    null,
    "60'ı geçmeme koşulunu uygulamadın: 180'in bütün çift çarpanlarını saydın (12 tane).",
    "Çift olma koşulunu uygulamadın: 60'a kadar olan çarpanların hepsini saydın (16 tane)."
  ],
  aciklama: `Takımdaki öğrenci sayısı 180'in bir çarpanıdır. Koşulları çarpanlar listesine en sonda uygula.
Adım 1: 180'in çarpanlarını çiftler hâlinde yaz: 1 · 180, 2 · 90, 3 · 60, 4 · 45, 5 · 36, 6 · 30, 9 · 20, 10 · 18, 12 · 15. Toplam 18 çarpan (kontrol: 180 = 2^{2} · 3^{2} · 5 → 3 · 3 · 2 = 18).
Adım 2: Çift olanlar: 2, 4, 6, 10, 12, 18, 20, 30, 36, 60, 90, 180.
Adım 3: 60'ı geçmeyenleri seç (60 dâhil): 2, 4, 6, 10, 12, 18, 20, 30, 36, 60.
Adım 4: 10 farklı değer.
Sağlama: 12 çift çarpandan yalnızca 90 ve 180 elendi; 12 − 2 = 10.
Sık yapılan hata: '60'ı geçmemek' ifadesinde 60'ı dışarıda bırakmak. 60 takım büyüklüğü olarak uygundur: 180 ÷ 60 = 3 takım.
Cevap B.`
},
{
  id: "mat-ck-066",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 4,
  soru: `Bir oyunun gizli odasına girmek için, 100'den küçük ve tam 3 pozitif tam sayı çarpanı olan her sayı ayrı bir anahtar kartına yazılacaktır.
**Buna göre kaç farklı anahtar kartı gerekir?**`,
  gorsel: null,
  secenekler: ["25", "5", "4", "3"],
  dogru: 2,
  hatalar: [
    "Asal sayıları saydın; bir asal sayının 2 çarpanı vardır, 3 değil.",
    "81'i de saydın; 81 = 3^{4} sayısının (4 + 1) = 5 çarpanı vardır, 3 değil.",
    null,
    "7'nin karesini (49) listeye almadın; 49'un çarpanları 1, 7 ve 49'dur."
  ],
  aciklama: `Çarpan sayısı, üslerin birer fazlasının çarpımıdır. Çarpan sayısı 3 ise (üs + 1) = 3 olmalıdır; yani sayı tek bir asalın karesi (p^{2}) olmak zorundadır.
Adım 1: 3 asal sayı olduğundan çarpım yalnızca tek bir çarpanla 3 olabilir: üs + 1 = 3, yani üs = 2. Sayı p^{2} biçimindedir.
Adım 2: 100'den küçük asal kareleri bul: 2^{2} = 4, 3^{2} = 9, 5^{2} = 25, 7^{2} = 49. 11^{2} = 121, 100'den büyüktür.
Adım 3: 4 sayı vardır.
Sağlama: 49'un çarpanları 1, 7, 49; 4'ünki 1, 2, 4; 25'inki 1, 5, 25. Hepsi tam 3 tane.
Sık yapılan hata: 49'u unutmak ya da asal sayıları (2 çarpanlı) saymak.
Cevap C.`
},
{
  id: "mat-ck-067",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 4,
  soru: `Tolga'nın tuttuğu sayı 20'dir ve 20'nin tam 6 pozitif tam sayı çarpanı vardır. Tolga, tuttuğu sayıyı k ile çarparak yeni bir sayı elde edecektir (k, 1'den büyük bir doğal sayıdır) ve bu yeni sayının tam 12 pozitif tam sayı çarpanı olmasını istemektedir.
**Buna göre k en az kaçtır?**`,
  gorsel: null,
  secenekler: ["5", "4", "3", "2"],
  dogru: 2,
  hatalar: [
    "k = 5 için 100 = 2^{2} · 5^{2} sayısının (2 + 1) · (2 + 1) = 9 çarpanı vardır, 12 değil.",
    "k = 4 için 80 = 2^{4} · 5 sayısının (4 + 1) · (1 + 1) = 10 çarpanı vardır, 12 değil.",
    null,
    "k = 2 için 40 = 2^{3} · 5 sayısının (3 + 1) · (1 + 1) = 8 çarpanı vardır, 12 değil."
  ],
  aciklama: `Çarpan sayısı, asal çarpanlarına ayrılmış biçimdeki üsler birer artırılıp çarpılarak bulunur. 20 = 2^{2} · 5 için (2 + 1) · (1 + 1) = 6'dır.
Adım 1: k = 2 → 40 = 2^{3} · 5 → (3 + 1) · (1 + 1) = 8 çarpan. Olmaz.
Adım 2: k = 3 → 60 = 2^{2} · 3 · 5 → (2 + 1) · (1 + 1) · (1 + 1) = 12 çarpan. Olur.
Adım 3: Aranan en küçük k olduğundan 3'te durulur.
Sağlama: 60'ın çarpanları: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60 → 12 tane.
Sık yapılan hata: Sayı büyüdükçe çarpan sayısının da arttığını sanıp deneme yapmadan büyük bir k seçmek. k = 4 için 10, k = 5 için 9 çarpan vardır; çarpan sayısı her zaman büyümez.
Cevap C.`
},
{
  id: "mat-ck-068",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 4,
  soru: `Bir fen laboratuvarındaki saksı sayıları aşağıdaki tabloda verilmiştir. Saksılar sergi masalarına şu kurallara göre dizilecektir:
• Her masada eşit sayıda sardunya ve eşit sayıda menekşe saksısı bulunacak, hiçbir saksı açıkta kalmayacaktır.
• Masa sayısı 5'ten fazla olacaktır.
• Her masada toplam en az 10 saksı bulunacaktır.
**Buna göre masa sayısı kaç farklı değer alabilir?**`,
  gorsel: `<table class="tablo"><tr><th>Saksı türü</th><th>Sayı</th></tr><tr><td>Sardunya</td><td>84</td></tr><tr><td>Menekşe</td><td>126</td></tr></table>`,
  secenekler: ["3", "4", "5", "8"],
  dogru: 1,
  hatalar: [
    "21 masayı eledin; oysa 21 masada her masada tam 10 saksı olur ve 'en az 10' ifadesi 10'u da kapsar.",
    null,
    "Saksı sayısı koşulunu uygulamadın: 42 masada her masada yalnızca 5 saksı kalır.",
    "Koşulları uygulamadan 42'nin bütün çarpanlarını saydın."
  ],
  aciklama: `Masa sayısı hem 84'ü hem 126'yı kalansız bölmelidir; yani 84 ile 126'nın bir ortak bölenidir.
Adım 1: 84 = 2^{2} · 3 · 7 ve 126 = 2 · 3^{2} · 7. EBOB = 2 · 3 · 7 = 42. Ortak bölenler 42'nin çarpanlarıdır: 1, 2, 3, 6, 7, 14, 21, 42.
Adım 2: 'Masa sayısı 5'ten fazla' → 6, 7, 14, 21, 42.
Adım 3: Toplam saksı 84 + 126 = 210'dur. 'Her masada en az 10 saksı' için 210 ÷ masa sayısı ≥ 10 olmalıdır. 42 masada 5, 21 masada 10, 14 masada 15, 7 masada 30, 6 masada 35 saksı düşer. 42 elenir.
Adım 4: Uygun masa sayıları 6, 7, 14, 21: 4 farklı değer.
Sağlama: 21 masada her masada 84 ÷ 21 = 4 sardunya ve 126 ÷ 21 = 6 menekşe, toplam 10 saksı vardır; 'en az 10' olduğu için uygundur.
Sık yapılan hata: Sınır değerini (21) dışarıda bırakmak.
Cevap B.`
},
{
  id: "mat-ck-069",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 4,
  soru: `Kerem, iki basamaklı bir b sayısı tutmuştur. Bu sayı ile 60'ın en büyük ortak böleni 12'dir.
**Buna göre Kerem'in tuttuğu sayı kaç farklı değer alabilir?**`,
  gorsel: null,
  secenekler: ["6", "7", "8", "9"],
  dogru: 1,
  hatalar: [
    "12'yi dışarıda bıraktın; 12 iki basamaklıdır ve EBOB(60, 12) = 12'dir.",
    null,
    "12'nin bütün iki basamaklı katlarını saydın; 60 da 12'nin katıdır ama EBOB(60, 60) = 60'tır.",
    "Üç basamaklı 108'i de saydın; sayı iki basamaklı olmalı."
  ],
  aciklama: `EBOB(60, b) = 12 ise b, 12'nin katıdır ve 60 ÷ 12 = 5 ile b ÷ 12 sayıları aralarında asal olmalıdır. Yani b ÷ 12, 5'in katı olmamalıdır.
Adım 1: b = 12 · k. İki basamaklı katlar: 12, 24, 36, 48, 60, 72, 84, 96 (k = 1, …, 8).
Adım 2: k = 5 elenir (b = 60); çünkü EBOB(60, 60) = 60'tır.
Adım 3: Kalanlar: 12, 24, 36, 48, 72, 84, 96 → 7 değer.
Sağlama: Örneğin b = 84: 60 = 2^{2} · 3 · 5 ve 84 = 2^{2} · 3 · 7; EBOB = 2^{2} · 3 = 12.
Sık yapılan hata: 12'nin her katının işe yaradığını sanmak. 60 da 12'nin katıdır ama EBOB'u 12 yapmaz.
Cevap B.`
},
{
  id: "mat-ck-070",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 4,
  soru: `Dairesel bir koşu pistinde kırmızı, mavi ve yeşil formalı üç koşucu, aşağıdaki tabloda verilen sürelerde birer tur atmaktadır. Her koşucu sabit hızla koşmakta ve her turu aynı sürede tamamlamaktadır. Üçü de 0. dakikada start çizgisinden birlikte yola çıkmıştır. Antrenör, 0. dakika dâhil, 240. dakika dâhil değil olmak üzere bu süre içinde kırmızı ve mavi formalı koşucuların start çizgisinden aynı anda geçtiği ancak yeşil formalı koşucunun o anda çizgiden geçmediği anları işaretlemektedir.
**Buna göre antrenör kaç an işaretler?**`,
  gorsel: `<table class="tablo"><tr><th>Koşucu</th><th>Bir tur süresi</th></tr><tr><td>Kırmızı formalı</td><td>6 dakika</td></tr><tr><td>Mavi formalı</td><td>8 dakika</td></tr><tr><td>Yeşil formalı</td><td>9 dakika</td></tr></table>`,
  secenekler: ["14", "10", "7", "6"],
  dogru: 3,
  hatalar: [
    "Kırmızı-mavi ortak anlarına (10) üçünün ortak anlarını (4) da ekledin; üçünün birlikte geçtiği anlar işaretlenmez, çıkarılır.",
    "Yeşil formalıyı hesaba katmadın: kırmızı ve mavi 24 dakikada bir birlikte geçer (0'dan 216'ya 10 an); bunlardan yeşilin de geçtiği anlar çıkarılmalıdır.",
    "Üçünün birlikte geçtiği anlardan 0. dakikayı saymadın (10 − 3 = 7); bu anlar 0, 72, 144 ve 216 olmak üzere 4 tanedir.",
    null
  ],
  aciklama: `Kırmızı ve mavi koşucunun çizgiden birlikte geçtiği anlar hem 6'nın hem 8'in katı olan dakikalardır; bunlar EKOK'un katlarıdır. Bu anlardan yeşilin de geçtiği olanları ayıklamak gerekir.
Adım 1: EKOK(6, 8) = 24. Kırmızı ve mavi 0, 24, 48, …, 216. dakikalarda birlikte geçer (240. dakika sayılmaz). 216 = 24 · 9 olduğundan 0'dan 9'a kadar 10 çarpan, yani 10 an vardır.
Adım 2: Bu 10 anın hangilerinde yeşil de geçer? Hem 24'ün hem 9'un katı olan dakikalar aranır: EKOK(24, 9) = 72. Üçü birlikte 0, 72, 144 ve 216. dakikalarda geçer: 4 an.
Adım 3: Yeşilin geçmediği anlar: 10 − 4 = 6.
Sağlama: Kırmızı-mavi ortak anları 0, 24, 48, 72, 96, 120, 144, 168, 192, 216'dır. Bunlardan 9'a bölünenler 0, 72, 144, 216'dır. Geriye 24, 48, 96, 120, 168, 192 kalır: 6 an.
Sık yapılan hata: Başlangıç anını (0. dakika) unutmak ya da üçlü anları da sayıma katmak. Üçünün de geçtiği anlar işaretlenmez.
Cevap D.`
},
{
  id: "mat-ck-071",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 4,
  soru: `Mert ve Ayla birer iki basamaklı doğal sayı yazmıştır. Yazdıkları iki sayı birbirinden farklıdır; EBOB'ları 8, EKOK'ları 48'dir.
**Buna göre bu iki sayının toplamı kaçtır?**`,
  gorsel: null,
  secenekler: ["56", "48", "40", "24"],
  dogru: 2,
  hatalar: [
    "8 ve 48'i aldın; 8 iki basamaklı değildir.",
    "Verilen EKOK'u cevap sandın; soru iki sayının toplamını soruyor.",
    null,
    "Sayılardan birini (24) cevap sandın; soru iki sayının toplamını soruyor."
  ],
  aciklama: `İki sayı EBOB'larına bölününce bölümler aralarında asal olur. Ayrıca çarpım EBOB · EKOK'a eşittir.
Adım 1: Sayılar 8 · m ve 8 · n biçimindedir; m ve n aralarında asaldır. EKOK = 8 · m · n = 48 olduğundan m · n = 6.
Adım 2: Çarpımı 6 olan aralarında asal çiftler: (1, 6) ve (2, 3).
Adım 3: (1, 6) → sayılar 8 ve 48: 8 iki basamaklı değildir. (2, 3) → sayılar 16 ve 24: ikisi de iki basamaklıdır.
Adım 4: Toplam: 16 + 24 = 40.
Sağlama: EBOB(16, 24) = 8 ve EKOK(16, 24) = 48.
Sık yapılan hata: (8, 48) çiftini basamak koşulunu denetlemeden almak.
Cevap C.`
},
{
  id: "mat-ck-072",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 4,
  soru: `Bir apartmanda temizlik görevlisi Murat Bey 10 günde bir, bahçıvan Selma Hanım 15 günde bir apartmana uğramaktadır. İkisi bir salı günü apartmanda birlikte bulunmuştur.
**Buna göre bu günden sonra üçüncü kez birlikte bulunacakları gün haftanın hangi günüdür?**`,
  gorsel: null,
  secenekler: ["Pazartesi", "Perşembe", "Cumartesi", "Pazar"],
  dogru: 0,
  hatalar: [
    null,
    "1. ortak günü buldun (30 gün sonra); soru 3. ortak günü soruyor.",
    "2. ortak günü buldun (60 gün sonra); soru 3. ortak günü soruyor.",
    "Sayarken başlangıç gününü de sayıp 90 yerine 89 gün ilerledin."
  ],
  aciklama: `Birlikte bulunulan günler, ilk ortak günden sonra EKOK'un katı kadar gün geçince gelir. Haftanın günleri 7 günde bir tekrar eder.
Adım 1: EKOK(10, 15) = 30. Ortak günler 30'ar gün arayla gelir.
Adım 2: Üçüncü ortak gün, ilk günden 3 · 30 = 90 gün sonradır.
Adım 3: 90 ÷ 7 = 12, kalan 6. 12 hafta sonra yine salıdır; salıdan 6 gün sonrasını say: çarşamba, perşembe, cuma, cumartesi, pazar, pazartesi.
Adım 4: Pazartesi.
Sağlama: 30 ÷ 7 işleminde kalan 2 (perşembe), 60 ÷ 7 işleminde kalan 4 (cumartesi), 90 ÷ 7 işleminde kalan 6 (pazartesi).
Sık yapılan hata: 1. ortak günü (30 gün sonra) üçüncü sanmak ya da gün sayarken başlangıç gününü de saymak.
Cevap A.`
},
{
  id: "mat-ck-073",
  kazanim: "M.8.1.1.3",
  kademe: 0,
  zorluk: 4,
  soru: `Elif'in şifresi iki basamaklı bir x sayısıdır. Şifre hakkında şu bilgiler verilmiştir: x ile 28 aralarında asaldır; x ile 45'in en büyük ortak böleni 9'dur.
**Buna göre Elif'in şifresi kaç farklı değer alabilir?**`,
  gorsel: null,
  secenekler: ["5", "4", "3", "2"],
  dogru: 2,
  hatalar: [
    "Yalnızca 2'yi eleyip 9'un tek katlarını (27, 45, 63, 81, 99) aldın; 63 ve 28'in ortak çarpanı 7'dir.",
    "7'yi eledin ama 45'i unuttun: EBOB(45, 45) = 45 olduğundan 45 koşula uymaz.",
    null,
    "Uygun bir değeri (örneğin 99) gereksiz yere eledin; 99 = 9 · 11 koşulların ikisini de sağlar."
  ],
  aciklama: `x ile 45'in EBOB'u 9 ise x, 9'un katıdır ve x ÷ 9 sayısı 45 ÷ 9 = 5 ile aralarında asal olmalıdır (5'in katı olmamalıdır).
Adım 1: 28 = 2^{2} · 7 olduğundan x ne 2'ye ne 7'ye bölünmelidir.
Adım 2: x, 9'un iki basamaklı katıdır: 18, 27, 36, 45, 54, 63, 72, 81, 90, 99. Çift olanları ele: 27, 45, 63, 81, 99 kalır.
Adım 3: 7'ye bölünen 63'ü ele: 27, 45, 81, 99.
Adım 4: 45 için EBOB(45, 45) = 45 olduğundan 45'i ele. Kalanlar: 27, 81, 99.
Adım 5: 3 değer.
Sağlama: EBOB(45, 27) = 9, EBOB(45, 81) = 9 ve EBOB(45, 99) = 9; üçü de 28 ile aralarında asaldır.
Sık yapılan hata: Koşullardan birini atlamak. 45 ve 63 de 9'un tek katlarıdır ama her biri bir koşula takılır.
Cevap C.`
},
{
  id: "mat-ck-074",
  kazanim: "M.8.1.1.3",
  kademe: 0,
  zorluk: 4,
  soru: `Bir satranç kulübünde formaları 2'den 9'a kadar numaralanmış 8 öğrenci vardır. Eğitmen, forma numaraları aralarında asal olan iki öğrenciden oluşan ikililer kurmak istemektedir. Formalar aşağıda gösterilmiştir.
**Buna göre eğitmen kaç farklı ikili kurabilir?**`,
  gorsel: `<svg viewBox="0 0 520 90" role="img" aria-label="Forma numaraları 2, 3, 4, 5, 6, 7, 8, 9 olan sekiz forma"><g stroke="currentColor" stroke-width="2" fill="var(--dolgu)"><rect x="10" y="14" width="52" height="62" rx="8"/><rect x="72" y="14" width="52" height="62" rx="8"/><rect x="134" y="14" width="52" height="62" rx="8"/><rect x="196" y="14" width="52" height="62" rx="8"/><rect x="258" y="14" width="52" height="62" rx="8"/><rect x="320" y="14" width="52" height="62" rx="8"/><rect x="382" y="14" width="52" height="62" rx="8"/><rect x="444" y="14" width="52" height="62" rx="8"/></g><g fill="currentColor" font-size="26" text-anchor="middle" font-weight="bold"><text x="36" y="55">2</text><text x="98" y="55">3</text><text x="160" y="55">4</text><text x="222" y="55">5</text><text x="284" y="55">6</text><text x="346" y="55">7</text><text x="408" y="55">8</text><text x="470" y="55">9</text></g></svg>`,
  secenekler: ["28", "22", "19", "9"],
  dogru: 2,
  hatalar: [
    "Bütün ikilileri saydın; aralarında asal olmayanları çıkarmadın.",
    "3'ün katlarından oluşan (3, 6), (3, 9), (6, 9) ikililerini çıkarmayı unuttun; yalnızca çift sayılı ikilileri çıkardın.",
    null,
    "Aralarında asal olmayan ikilileri saydın; soru aralarında asal olanları soruyor."
  ],
  aciklama: `Önce bütün ikilileri say, sonra aralarında asal olmayanları çıkar.
Adım 1: 8 öğrenciden iki kişilik ikililer: 7 + 6 + 5 + 4 + 3 + 2 + 1 = 28.
Adım 2: Ortak asal çarpanı 2 olan ikililer, çift numaralı formalar 2, 4, 6, 8'den kurulur: (2, 4), (2, 6), (2, 8), (4, 6), (4, 8), (6, 8) → 6 ikili.
Adım 3: Ortak asal çarpanı 3 olan ikililer 3, 6, 9'dan kurulur: (3, 6), (3, 9), (6, 9) → 3 ikili. Bu üç ikili az önceki 6 ikiliyle aynı değildir.
Adım 4: 5 ve 7'nin, listedeki başka bir sayıyla ortak çarpanı yoktur. Aralarında asal olmayan ikili sayısı 6 + 3 = 9'dur.
Adım 5: Aralarında asal ikili sayısı: 28 − 9 = 19.
Sağlama: Örneğin (2, 9), (3, 8), (4, 9), (5, 6) ve (7, 8) ikilileri aralarında asaldır.
Sık yapılan hata: Yalnızca 2'nin katlarını (çift sayıları) düşünmek. 3, 6 ve 9 da ortak çarpan 3'ü paylaşır.
Cevap C.`
},
{
  id: "mat-ck-075",
  kazanim: "M.8.1.1.3",
  kademe: 0,
  zorluk: 4,
  soru: `Deniz'in tuttuğu sayı üç basamaklıdır, asal sayı değildir ve 30 ile aralarında asaldır.
**Buna göre Deniz'in tuttuğu sayı en az kaçtır?**`,
  gorsel: null,
  secenekler: ["101", "111", "117", "119"],
  dogru: 3,
  hatalar: [
    "'Asal değildir' koşulunu uygulamadın: 101 asal bir sayıdır.",
    "111 = 3 · 37 olduğundan 3'e bölünür; 30 ile aralarında asal değildir.",
    "117 = 3^{2} · 13 olduğundan 3'e bölünür; 30 ile aralarında asal değildir.",
    null
  ],
  aciklama: `30 = 2 · 3 · 5 olduğundan 30 ile aralarında asal olan sayı ne 2'ye, ne 3'e, ne 5'e bölünmelidir. Ayrıca asal olmayan bir sayı aranıyor.
Adım 1: 100'den başlayarak adayları ele. 2'ye bölünenleri (çiftler) ve 5'e bölünenleri (sonu 0 ya da 5 olanlar) ele: 101, 103, 107, 109, 111, 113, 117, 119 kalır.
Adım 2: 3'e bölünenleri ele (rakamları toplamı 3'ün katı olanlar): 111 ve 117. Kalanlar: 101, 103, 107, 109, 113, 119.
Adım 3: Asal olanları ele: 101, 103, 107, 109, 113 asaldır. Geriye 119 kalır.
Adım 4: 119 = 7 · 17 asal değildir ve 2, 3, 5 çarpanı yoktur.
Sağlama: EBOB(30, 119) = 1 ve 119 asal olmadığı için koşulların hepsi sağlanır.
Sık yapılan hata: 100'den sonraki ilk aralarında asal sayıyı (101) seçmek. 101 koşulu sağlar ama asaldır.
Cevap D.`
}
);
