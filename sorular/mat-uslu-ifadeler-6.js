// Matematik — Üslü İfadeler: Kademe 3 (LGS Ayarı) yedeği — mat-ui-326 … mat-ui-375
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["uslu-ifadeler"] = window.LGS_BANK["uslu-ifadeler"] || []).push(
/* ===================== ZORLUK 3 ===================== */
{
  id: "mat-ui-326",
  kazanim: "M.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir bilgisayar oyununda her bölümün bonus puanı 2 · 3^{2} − (−2)^{3} · 5^{0} + (−1)^{7} işlemiyle hesaplanmaktadır.\n**Buna göre bir bölümün bonus puanı kaçtır?**",
  gorsel: null,
  secenekler: ["43", "25", "17", "9"],
  dogru: 1,
  hatalar: [
    "43: Üssü çarpana da katma: 2 · 3^{2} yerine (2 · 3)^{2} = 36 alınmış. Üs yalnızca hemen solundaki sayıya uygulanır.",
    null,
    "17: Sıfırıncı kuvveti 0 sanma: 5^{0} = 0 alınıp çarpım silinmiş. Sıfırdan farklı her sayının 0. kuvveti 1'dir.",
    "9: Negatif sayıyı çıkarırken işareti değiştirmeme: −(−8) yerine −8 alınmış. Eksi ile eksi artı yapar."
  ],
  aciklama: `Üslü ifadelerde önce üsler hesaplanır, sonra çarpma, en son toplama ve çıkarma yapılır. Negatif tabanın tek kuvveti negatif, sıfırdan farklı her sayının 0. kuvveti 1'dir.
Adım 1: Üsleri hesapla: 3^{2} = 9, (−2)^{3} = −8, 5^{0} = 1, (−1)^{7} = −1.
Adım 2: Çarpmaları yap: 2 · 9 = 18 ve (−8) · 1 = −8.
Adım 3: Topla ve çıkar: 18 − (−8) + (−1) = 18 + 8 − 1 = 25.
Sağlama: Pozitif kısım 18 + 8 = 26 eder, bundan 1 çıkınca 25 kalır.
Sık yapılan hata: 5^{0} ifadesini 0 sanıp çarpımı silmek; sonuç 17 çıkar.
Cevap B.`
},
{
  id: "mat-ui-327",
  kazanim: "M.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir bulmaca etkinliğinde x = (−2)^{5}, y = −2^{4} ve z = (−2)^{4} sayıları verilmiştir. Öğrencilerden z − x − y değerini bulmaları istenmiştir.\n**Buna göre bu değer kaçtır?**",
  gorsel: null,
  secenekler: ["−32", "0", "32", "64"],
  dogru: 3,
  hatalar: [
    "−32: Çıkarma yerine toplama yapma: x + y + z = −32 − 16 + 16 bulunmuş. Soru z − x − y değerini istiyor.",
    "0: x'in işaretini pozitif alma: (−2)^{5} = 32 sanılıp 16 − 32 + 16 = 0 bulunmuş. Tek kuvvette sonuç negatiftir.",
    "32: y'yi pozitif alma: −2^{4} = 16 sanılıp 16 + 32 − 16 = 32 bulunmuş. Parantez yokken eksi işareti kuvvete girmez.",
    null
  ],
  aciklama: `Parantezli (−2)^{n} ifadesinde eksi işareti de tabana girer; parantezsiz −2^{n} ifadesinde üs yalnızca 2'ye uygulanır ve eksi dışarıda kalır.
Adım 1: x'i hesapla: (−2)^{5} = −32. Üs tek olduğu için sonuç negatiftir.
Adım 2: y'yi hesapla: −2^{4} = −(2 · 2 · 2 · 2) = −16.
Adım 3: z'yi hesapla: (−2)^{4} = 16. Üs çift olduğu için sonuç pozitiftir.
Adım 4: Yerine koy: z − x − y = 16 − (−32) − (−16) = 16 + 32 + 16 = 64.
Sağlama: Çıkarılan iki sayı da negatif olduğu için sonuç, 16'dan büyük olmalıdır; 64 bunu sağlar.
Sık yapılan hata: −2^{4} ile (−2)^{4} aynı sanılırsa x'in ve y'nin işareti karışır.
Cevap D.`
},
{
  id: "mat-ui-328",
  kazanim: "M.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir ışıklı panoda 2027 lamba sırayla dizilmiştir. k. lambanın değeri (−1)^{k} kuralıyla belirlenmektedir. Panonun toplam değeri bütün lambaların değerlerinin toplamıdır.\n**Buna göre panonun toplam değeri kaçtır?**",
  gorsel: null,
  secenekler: ["−1", "0", "1", "2027"],
  dogru: 0,
  hatalar: [
    null,
    "0: Lamba sayısını çift sanma. 2027 tek sayıdır, bu yüzden ikişerli gruplar bittikten sonra son lamba tek başına kalır.",
    "1: Son lambanın değerini pozitif alma. 2027 tek olduğu için (−1)^{2027} = −1'dir.",
    "2027: Bütün değerleri pozitif alma. (−1)'in tek kuvvetleri negatiftir; toplam lamba sayısına eşit çıkmaz."
  ],
  aciklama: `(−1)'in tek kuvveti −1, çift kuvveti 1'dir. Art arda gelen bir tek ve bir çift kuvvetin toplamı −1 + 1 = 0 eder.
Adım 1: Lambaları ikişerli gruplara ayır: (1. ve 2.), (3. ve 4.) … Her grupta bir −1 ve bir +1 vardır; grup toplamı 0'dır.
Adım 2: 2027 tek sayı olduğundan 2026 lamba 1013 grup oluşturur; bu gruplar toplamı etkilemez.
Adım 3: Geriye 2027. lamba kalır: (−1)^{2027} = −1.
Sağlama: Küçük deneme yap: 1 lambada toplam −1, 3 lambada −1 + 1 − 1 = −1. Lamba sayısı tek oldukça toplam −1 çıkar.
Sık yapılan hata: Tek sayıda terimde son terimi unutup toplamı 0 bulmak.
Cevap A.`
},
{
  id: "mat-ui-329",
  kazanim: "M.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir dijital kasanın iki rakamlı şifresinde birinci rakam 2^{50} sayısının birler basamağı, ikinci rakam 7^{30} sayısının birler basamağıdır. 2'nin kuvvetlerinin birler basamağı 2, 4, 8, 6 diye; 7'nin kuvvetlerinin birler basamağı 7, 9, 3, 1 diye dörder dörder tekrar eder.\n**Buna göre şifredeki iki rakamın toplamı kaçtır?**",
  gorsel: null,
  secenekler: ["5", "7", "11", "13"],
  dogru: 3,
  hatalar: [
    "5: 7^{30} için dönemin son rakamı olan 1 alınmış (4 + 1). Üssü 4'e bölünce kalan 2 çıkar, yani dönemin 2. rakamı gerekir.",
    "7: 7^{30} için dönemin 3. rakamı olan 3 alınmış (4 + 3). Kalan 2 ise ikinci sıradaki rakamı gösterir.",
    "11: Kalanı rakam sanma: 2^{50} için kalan olan 2 yazılmış (2 + 9). Kalan, rakamın kendisini değil sıra numarasını verir.",
    null
  ],
  aciklama: `Birler basamağı tekrar eden bir dizidir. Büyük bir üste birler basamağı bulmak için üssü tekrar uzunluğu olan 4'e böl, kalana bak: kalan kaçsa dönemde o sıradaki rakam gelir.
Adım 1: 2^{50} için 50 ÷ 4 = 12 kalan 2. Dönem 2, 4, 8, 6 olduğundan 2. rakam 4'tür.
Adım 2: 7^{30} için 30 ÷ 4 = 7 kalan 2. Dönem 7, 9, 3, 1 olduğundan 2. rakam 9'dur.
Adım 3: Rakamları topla: 4 + 9 = 13.
Sağlama: 2^{2} = 4 ve 7^{2} = 49 olduğundan kalan 2 olan üslerde birler basamağı sırasıyla 4 ve 9 çıkar.
Sık yapılan hata: Kalanı rakam sanmak ya da kalan 0 imiş gibi dönemin son rakamını almak.
Cevap D.`
},
{
  id: "mat-ui-330",
  kazanim: "M.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir ortaokulda yeni bir kulübün kuruluş haberi, her günün sonunda haberi bilenlerin sayısı bir önceki günün sonundakinin 3 katı olacak biçimde yayılmaktadır. Pazartesi sabahı haberi 2 öğrenci bilmektedir.\n**Buna göre perşembe günü sona erdiğinde (4 gün sonra) haberi kaç öğrenci bilir?**",
  gorsel: null,
  secenekler: ["24", "54", "81", "162"],
  dogru: 3,
  hatalar: [
    "24: Üsle çarpmayı karıştırma: 2 · 3 · 4 = 24 alınmış. Her gün 3 ile çarpmak, 3 sayısını gün sayısıyla çarpmak değildir.",
    "54: Bir gün eksik sayma. 2 · 3^{3} yalnızca 3 günün sonucunu verir.",
    "81: Başlangıçtaki 2 öğrenciyi unutma. 3^{4}, haberi başlangıçta 1 kişi biliyormuş gibi bir sonuçtur.",
    null
  ],
  aciklama: `Bir miktar her adımda aynı sayıyla çarpılıyorsa n adım sonra miktar, başlangıç değerinin o sayının n. kuvvetiyle çarpımına eşit olur.
Adım 1: Kuralı yaz: 4 gün sonra haberi bilenler 2 · 3^{4} olur.
Adım 2: Üssü hesapla: 3^{4} = 81.
Adım 3: Başlangıç değeriyle çarp: 2 · 81 = 162.
Sağlama: Gün gün git: 2 → 6 → 18 → 54 → 162. Dört çarpma yapıldı.
Sık yapılan hata: Başlangıçtaki kişi sayısını unutup yalnızca 3^{4} = 81 bulmak.
Cevap D.`
},
{
  id: "mat-ui-331",
  kazanim: "M.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir matematik kulübünde dört kart çekilmiştir. Kartlardaki işlemler aşağıda verilmiştir. Kulüp başkanı, değeri en küçük olan karttaki işlemi soracaktır.\n**Buna göre hangi karttaki işlemin değeri en küçüktür?**",
  gorsel: `<table class="tablo"><tr><th>Kart</th><th>İşlem</th></tr><tr><td>1</td><td>−3<sup>4</sup></td></tr><tr><td>2</td><td>(−4)<sup>3</sup></td></tr><tr><td>3</td><td>(−3)<sup>4</sup></td></tr><tr><td>4</td><td>4<sup>3</sup></td></tr></table>`,
  secenekler: ["−3^{4}", "(−4)^{3}", "(−3)^{4}", "4^{3}"],
  dogru: 0,
  hatalar: [
    null,
    "(−4)^{3} = −64: Negatif sayılar arasında mutlak değeri küçük olanı daha küçük sanma. −64, −81'den büyüktür.",
    "(−3)^{4} = 81: Çift kuvvette sonucun pozitif olduğunu görmeme. Pozitif bir sayı, negatif sayılardan küçük olamaz.",
    "4^{3} = 64: Pozitif sayıların arasında tabanı en küçük olanı seçme. Pozitif sayılar negatiflerden büyüktür."
  ],
  aciklama: `Negatif sayıda mutlak değer büyüdükçe sayı küçülür. Bu yüzden değeri en küçük olanı bulmak için önce işaretleri belirleyip negatifler arasında mutlak değere bakılır.
Adım 1: Kartları hesapla: −3^{4} = −81 ve (−4)^{3} = −64 negatiftir; (−3)^{4} = 81 ve 4^{3} = 64 pozitiftir.
Adım 2: Pozitifleri ele: negatiflerin hepsi pozitiflerden küçüktür.
Adım 3: Negatifleri karşılaştır: −81 < −64. Sayı doğrusunda −81, −64'ün solundadır.
Sağlama: Sıralama −81 < −64 < 64 < 81 olur ve en küçük −3^{4}'tür.
Sık yapılan hata: (−3)^{4} ile −3^{4} ifadelerini aynı sanmak; birinde parantez eksi işaretini kuvvete sokar, diğerinde sokmaz.
Cevap A.`
},
{
  id: "mat-ui-332",
  kazanim: "M.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir müzik uygulamasında şarkıların tekrar sayısı kodlanmaktadır. Bir şarkının kodu (2^{3})^{2} · 4^{−1} ÷ 2^{2} ifadesiyle verilmiştir.\n**Buna göre bu kod aşağıdakilerden hangisine eşittir?**",
  gorsel: null,
  secenekler: ["2^{2}", "2^{3}", "2^{6}", "2^{10}"],
  dogru: 0,
  hatalar: [
    null,
    "2^{3}: 4^{−1} ifadesini 2^{−1} yazma. 4 = 2^{2} olduğu için 4^{−1} = 2^{−2}'dir.",
    "2^{6}: Negatif üssü atlama. 4^{−1} ifadesi 2^{2} alınmış ve 6 + 2 − 2 = 6 bulunmuş.",
    "2^{10}: Negatif üssü pozitif alıp bölmede de üsleri toplama: 6 + 2 + 2 = 10 bulunmuş."
  ],
  aciklama: `Önce bütün tabanları 2'ye çevir, sonra kuralları uygula: üssün üssünde üsler çarpılır, aynı tabanlı çarpmada üsler toplanır, bölmede üstteki üsten alttaki çıkarılır.
Adım 1: (2^{3})^{2} = 2^{6}.
Adım 2: 4 = 2^{2} olduğundan 4^{−1} = (2^{2})^{−1} = 2^{−2}.
Adım 3: Çarp: 2^{6} · 2^{−2} = 2^{6+(−2)} = 2^{4}.
Adım 4: Böl: 2^{4} ÷ 2^{2} = 2^{4−2} = 2^{2}.
Sağlama: Sayıyla da deneyebilirsin: 64 · [[1|4]] ÷ 4 = 16 ÷ 4 = 4 = 2^{2}.
Sık yapılan hata: 4 sayısını 2'nin kuvveti yaparken üssü kaybetmek.
Cevap A.`
},
{
  id: "mat-ui-333",
  kazanim: "M.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir fayans firmasının deposunda 6^{5} adet fayans vardır. Fayanslar 3^{4} eşit koliye paylaştırılarak dizilecektir.\n**Buna göre her kolide kaç fayans bulunur?**",
  gorsel: null,
  secenekler: ["2", "6", "32", "96"],
  dogru: 3,
  hatalar: [
    "2: Taban ve üsleri ayrı ayrı bölme: 6 ÷ 3 = 2 ve 5 − 4 = 1 alınıp 2^{1} bulunmuş. Tabanlar farklıyken tabanlar birbirine bölünmez.",
    "6: Tabanlar farklı olduğu hâlde üsleri çıkarma: 6^{5−4} = 6 bulunmuş. Kural yalnızca aynı tabanlarda geçerlidir.",
    "32: 3 çarpanını unutma. 6^{5} = 2^{5} · 3^{5} olur; 3^{5} ÷ 3^{4} = 3 kalır ve bu çarpan atlanmış.",
    null
  ],
  aciklama: `Tabanlar farklıysa önce asal çarpanlara ayır. (a · b)^{n} = a^{n} · b^{n} kuralıyla üs her çarpana dağıtılır; sonra aynı tabanlar kendi arasında sadeleşir.
Adım 1: 6 = 2 · 3 olduğundan 6^{5} = 2^{5} · 3^{5}.
Adım 2: Böl: (2^{5} · 3^{5}) ÷ 3^{4} = 2^{5} · 3^{5−4} = 2^{5} · 3.
Adım 3: Hesapla: 32 · 3 = 96.
Sağlama: 6^{5} = 7776 ve 3^{4} = 81; 7776 ÷ 81 = 96.
Sık yapılan hata: Tabanlar farklıyken üsleri çıkarıp 6^{1} yazmak.
Cevap D.`
},
{
  id: "mat-ui-334",
  kazanim: "M.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: "Selin, Tuna ve Umut matematik defterlerine sırasıyla a = 2^{30}, b = 3^{20} ve c = 5^{10} sayılarını yazmıştır. Öğretmen bu sayıları küçükten büyüğe sıralamalarını istemiştir.\n**Buna göre doğru sıralama aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["a < c < b", "c < a < b", "c < b < a", "a < b < c"],
  dogru: 1,
  hatalar: [
    "a < c < b: 2^{30} sayısını 4^{10} yazma. 2^{30} = (2^{3})^{10} = 8^{10} olmalıdır.",
    null,
    "c < b < a: Yalnızca üssü büyük olanı büyük sanma. Üsler farklıyken ortak üs yakalamadan karşılaştırma yapılamaz.",
    "a < b < c: Yalnızca tabanı büyük olanı büyük sanma. 5^{10} sayısının üssü küçüktür ve gerçekte üçünün en küçüğüdür."
  ],
  aciklama: `Hem taban hem üs farklıysa üsleri eşitle: üs aynıysa tabanı büyük olan büyüktür. Ortak üs olarak 30, 20 ve 10'un ortak böleni olan 10 seçilebilir.
Adım 1: a = 2^{30} = (2^{3})^{10} = 8^{10}.
Adım 2: b = 3^{20} = (3^{2})^{10} = 9^{10}.
Adım 3: c = 5^{10} zaten üssü 10 olan biçimdedir.
Adım 4: Üsler 10 olduğundan tabanlar karşılaştırılır: 5 < 8 < 9, yani c < a < b.
Sağlama: Tabanı 10 olan üç ifade de aynı üstle yazıldı; tabanı en küçük olan 5^{10} en küçüktür.
Sık yapılan hata: Tabana ya da üsse tek başına bakmak. İkisi birlikte değerlendirilmelidir.
Cevap B.`
},
{
  id: "mat-ui-335",
  kazanim: "M.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir mobil oyunda bir seviyenin ödül puanı 8^{3} · 4^{2} ÷ 16^{2} işlemiyle hesaplanmaktadır.\n**Buna göre bu seviyenin ödül puanı kaçtır?**",
  gorsel: null,
  secenekler: ["4", "32", "128", "512"],
  dogru: 1,
  hatalar: [
    "4: 8 sayısını 2^{2} sanma. Sonuç 2^{6} · 2^{4} ÷ 2^{8} = 2^{2} = 4 bulunmuş. Doğrusu 8 = 2^{3}'tür.",
    null,
    "128: 16 sayısını 2^{3} sanma. 16^{2} = 2^{6} alınıp 9 + 4 − 6 = 7 bulunmuş. Doğrusu 16 = 2^{4}'tür.",
    "512: 16^{2} ifadesini 2^{4} yazma. Üssün üssünde üsler çarpılmalıydı: (2^{4})^{2} = 2^{8}."
  ],
  aciklama: `Bütün tabanları aynı sayının kuvveti yaparsan kurallar işler: 4 = 2^{2}, 8 = 2^{3}, 16 = 2^{4}.
Adım 1: 8^{3} = (2^{3})^{3} = 2^{9}.
Adım 2: 4^{2} = (2^{2})^{2} = 2^{4}.
Adım 3: 16^{2} = (2^{4})^{2} = 2^{8}.
Adım 4: Birleştir: 2^{9} · 2^{4} ÷ 2^{8} = 2^{9+4−8} = 2^{5} = 32.
Sağlama: 512 · 16 = 8192 ve 256'ya bölünce 8192 ÷ 256 = 32 çıkar.
Sık yapılan hata: Tabanı çevirdikten sonra dıştaki üsle çarpmayı unutmak.
Cevap B.`
},
{
  id: "mat-ui-336",
  kazanim: "M.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir çevrim içi oyunda her görev 25^{3} puan vermektedir. Bir oyuncu 4^{3} görevi tamamlamıştır.\n**Buna göre oyuncunun bu görevlerden kazandığı toplam puan aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["10^{2}", "10^{5}", "10^{6}", "10^{8}"],
  dogru: 2,
  hatalar: [
    "10^{2}: Üssü unutma. Tabanlar 25 · 4 = 100 olarak çarpılmış ama ortak üs olan 3 yazılmamış.",
    "10^{5}: Üssün üssünde üsleri toplama: (10^{2})^{3} = 10^{2+3} bulunmuş. Üsler çarpılmalıdır.",
    null,
    "10^{8}: Üssün üssünde üssü kuvvet alma: 2^{3} = 8 alınıp 10^{8} yazılmış. Doğrusu 2 · 3 = 6'dır."
  ],
  aciklama: `Üsleri aynı olan iki sayı çarpılırken tabanlar çarpılır, üs aynen kalır: a^{n} · b^{n} = (a · b)^{n}.
Adım 1: Üsler aynı (3) olduğundan 25^{3} · 4^{3} = (25 · 4)^{3} = 100^{3}.
Adım 2: 100 = 10^{2} olduğundan 100^{3} = (10^{2})^{3} = 10^{2·3} = 10^{6}.
Sağlama: 25^{3} = 15 625 ve 4^{3} = 64; 15 625 · 64 = 1 000 000 = 10^{6}.
Sık yapılan hata: Üssün üssünde üsleri toplayıp 10^{5} yazmak.
Cevap C.`
},
{
  id: "mat-ui-337",
  kazanim: "M.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir simülasyon programı, girilen bir değeri ([[1|3]])^{−2} · 3^{−4} ÷ 3^{−3} işlemiyle dönüştürmektedir.\n**Buna göre dönüşüm sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["3^{−5}", "3^{−3}", "3^{1}", "3^{3}"],
  dogru: 2,
  hatalar: [
    "3^{−5}: Bölmede alttaki negatif üssü çıkarırken işaretini dikkate almama: 2 − 4 − 3 = −5 bulunmuş.",
    "3^{−3}: Kesrin negatif kuvvetinde ters çevirmeyi unutma. ([[1|3]])^{−2} = 3^{−2} alınıp −2 − 4 + 3 = −3 bulunmuş.",
    null,
    "3^{3}: 3^{−4} ifadesindeki negatif işaretini görmezden gelme: 2 + 4 − 3 = 3 bulunmuş."
  ],
  aciklama: `Negatif üs tabanın tersini alır: a^{−n} = [[1|a^{n}]]. Kesrin negatif kuvvetinde kesir ters çevrilir ve üs pozitif olur: ([[1|3]])^{−2} = 3^{2}.
Adım 1: Kesri düzelt: ([[1|3]])^{−2} = 3^{2}.
Adım 2: Çarp: 3^{2} · 3^{−4} = 3^{2+(−4)} = 3^{−2}.
Adım 3: Böl: 3^{−2} ÷ 3^{−3} = 3^{−2−(−3)} = 3^{−2+3} = 3^{1}.
Sağlama: Sayıyla yap: 9 · [[1|81]] = [[1|9]] ve [[1|9]] ÷ [[1|27]] = 3.
Sık yapılan hata: Çıkarılan negatif üsün işaretini düşürmek: −(−3) = +3 olmalıdır.
Cevap C.`
},
{
  id: "mat-ui-338",
  kazanim: "M.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir ses mühendisi, bir kaydın yükseltme oranını aşağıdaki kesirle hesaplamaktadır.\n**Buna göre bu kesrin değeri kaçtır?**",
  gorsel: `<svg viewBox="0 0 360 140" role="img" aria-label="Kesir: pay 2 üssü eksi 3 çarpı 4 üssü 2, payda 8 üssü eksi 1"><text x="180" y="52" font-size="26" font-weight="bold" fill="currentColor" text-anchor="middle">2<tspan font-size="16" dy="-11">−3</tspan><tspan dy="11"> · 4</tspan><tspan font-size="16" dy="-11">2</tspan></text><line x1="60" y1="72" x2="300" y2="72" stroke="currentColor" stroke-width="3"/><text x="180" y="118" font-size="26" font-weight="bold" fill="currentColor" text-anchor="middle">8<tspan font-size="16" dy="-11">−1</tspan></text></svg>`,
  secenekler: ["256", "16", "4", "[[1|4]]"],
  dogru: 1,
  hatalar: [
    "256: 4 sayısını 2^{4} sanma. Pay 2^{5} bulunmuş ve 2^{5−(−3)} = 2^{8} = 256 çıkmış. Doğrusu 4 = 2^{2}'dir.",
    null,
    "4: 8 sayısını 2^{1} sanma. Payda 2^{−1} alınıp 2^{1−(−1)} = 2^{2} = 4 bulunmuş. Doğrusu 8 = 2^{3}'tür.",
    "[[1|4]]: Bölmede üsleri toplama: 1 + (−3) = −2 bulunmuş. Bölmede alttaki üs çıkarılır."
  ],
  aciklama: `Tabanları 2'ye eşitle: 4 = 2^{2}, 8 = 2^{3}. Kesir çizgisi bölme demektir; üstteki üsten alttaki üs çıkarılır.
Adım 1: Payı yaz: 2^{−3} · 4^{2} = 2^{−3} · (2^{2})^{2} = 2^{−3} · 2^{4} = 2^{1}.
Adım 2: Paydayı yaz: 8^{−1} = (2^{3})^{−1} = 2^{−3}.
Adım 3: Böl: 2^{1} ÷ 2^{−3} = 2^{1−(−3)} = 2^{4}.
Adım 4: Hesapla: 2^{4} = 16.
Sağlama: Pay = [[1|8]] · 16 = 2 ve payda = [[1|8]]; 2 ÷ [[1|8]] = 16.
Sık yapılan hata: Çıkarma yaparken payda üssünün eksi işaretini göz ardı etmek.
Cevap B.`
},
{
  id: "mat-ui-339",
  kazanim: "M.8.1.2.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir atletizm pistinde bir sporcunun koştuğu mesafe 80,305 kilometre olarak ölçülmüştür. Antrenör bu sayıyı 10'un tam sayı kuvvetleriyle çözümleyerek tahtaya yazacaktır.\n**Buna göre doğru çözümleme aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "8 · 10^{1} + 3 · 10^{−1} + 5 · 10^{−3}",
    "8 · 10^{1} + 3 · 10^{−1} + 5 · 10^{−2}",
    "8 · 10^{1} + 3 · 10^{−2} + 5 · 10^{−3}",
    "8 · 10^{0} + 3 · 10^{−1} + 5 · 10^{−3}"
  ],
  dogru: 0,
  hatalar: [
    null,
    "5'i yüzde birler basamağına koyma: bu çözümleme 80,35 sayısına aittir. 5 rakamı binde birler basamağındadır.",
    "3'ü yüzde birler basamağına koyma: bu çözümleme 80,035 sayısına aittir. 3 rakamı onda birler basamağındadır.",
    "8'i birler basamağına koyma: bu çözümleme 8,305 sayısına aittir. 8 rakamı onlar basamağındadır."
  ],
  aciklama: `Çözümlemede her rakam, bulunduğu basamağın değeriyle çarpılır. Birler basamağı 10^{0}'dır; sola gittikçe üs artar, virgülden sonra negatif olur ve eksi bir artar.
Adım 1: Basamakları adlandır: 8 onlar (10^{1}), 0 birler (10^{0}), 3 onda birler (10^{−1}), 0 yüzde birler (10^{−2}), 5 binde birler (10^{−3}) basamağındadır.
Adım 2: Rakamı 0 olan terimler yazılmaz: 8 · 10^{1} + 3 · 10^{−1} + 5 · 10^{−3}.
Sağlama: 80 + 0,3 + 0,005 = 80,305.
Sık yapılan hata: Virgülden sonraki sıfırı saymayıp rakamları bir basamak sola kaydırmak.
Cevap A.`
},
{
  id: "mat-ui-340",
  kazanim: "M.8.1.2.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir cam atölyesinde kullanılan ince plakaların kalınlığı etiketlere çözümlenmiş biçimde yazılmaktadır. Bir plakanın etiketinde 4 · 10^{−1} + 2 · 10^{−3} cm yazmaktadır. Usta bu plakalardan 10 tanesini üst üste koyacaktır.\n**Buna göre üst üste konulan plakaların toplam yüksekliği kaç santimetredir?**",
  gorsel: null,
  secenekler: ["40,2", "4,2", "4,02", "0,402"],
  dogru: 2,
  hatalar: [
    "40,2: 10 ile değil 100 ile çarpma. Virgül bir basamak yerine iki basamak kaydırılmış.",
    "4,2: Binde birler basamağını yüzde birler sanma. 2 · 10^{−3} terimi 0,002'dir, 0,02 değil.",
    null,
    "0,402: Yalnızca bir plakanın kalınlığını yazma. Soru 10 plakanın toplam yüksekliğini istiyor."
  ],
  aciklama: `Çözümlenmiş bir ifadeyi ondalık gösterime çevirmek için her terim hesaplanıp toplanır. Sonra 10 ile çarpılırken virgül bir basamak sağa kaydırılır.
Adım 1: Bir plakanın kalınlığını bul: 4 · 10^{−1} = 0,4 ve 2 · 10^{−3} = 0,002; toplam 0,402 cm.
Adım 2: On plakanın yüksekliği: 0,402 · 10 = 4,02 cm.
Sağlama: 0,4 · 10 = 4 ve 0,002 · 10 = 0,02 eder; 4 + 0,02 = 4,02.
Sık yapılan hata: 10^{−3} terimini 0,02 sanmak; 10'un negatif kuvvetinde üs kaçsa virgülden sonra o kadar basamak vardır.
Cevap C.`
},
{
  id: "mat-ui-341",
  kazanim: "M.8.1.2.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir fen öğretmeni, tahtaya 703,052 sayısını yazmış ve öğrencilerden bu sayıdaki rakamların basamak değerleri hakkında birer cümle kurmalarını istemiştir.\n**Buna göre aşağıdaki cümlelerden hangisi __yanlıştır__?**",
  gorsel: null,
  secenekler: [
    "7 rakamının basamak değeri 7 · 10^{2}'dir.",
    "3 rakamı birler basamağındadır ve değeri 3 · 10^{0}'dır.",
    "5 rakamının basamak değeri 5 · 10^{−2}'dir.",
    "2 rakamının basamak değeri 2 · 10^{−2}'dir."
  ],
  dogru: 3,
  hatalar: [
    "Bu cümle doğrudur: 7 rakamı yüzler basamağındadır ve değeri 7 · 10^{2} = 700'dür.",
    "Bu cümle doğrudur: 3 rakamı virgülden hemen önceki basamaktadır; birler basamağı 10^{0}'dır.",
    "Bu cümle doğrudur: 5 rakamı virgülden sonra ikinci basamaktadır, yani yüzde birler basamağındadır.",
    null
  ],
  aciklama: `Virgülden sonra basamaklar sırasıyla onda birler (10^{−1}), yüzde birler (10^{−2}) ve binde birler (10^{−3}) diye gider. Rakamın basamak değeri, rakam ile basamağın değerinin çarpımıdır.
Adım 1: 703,052 sayısını basamaklarına ayır: 7 yüzler, 0 onlar, 3 birler, 0 onda birler, 5 yüzde birler, 2 binde birlerdir.
Adım 2: Cümleleri tek tek denetle: 7 · 10^{2}, 3 · 10^{0} ve 5 · 10^{−2} doğrudur.
Adım 3: 2 rakamı binde birler basamağındadır; değeri 2 · 10^{−3} = 0,002 olmalıdır, 2 · 10^{−2} değildir.
Sağlama: 700 + 3 + 0,05 + 0,002 = 703,052.
Sık yapılan hata: Virgülden sonraki sıfırı saymayıp 2'yi yüzde birler basamağında sanmak.
Cevap D.`
},
{
  id: "mat-ui-342",
  kazanim: "M.8.1.2.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir elektronik mağazasında iki ürünün fiyatı etiketlerde çözümlenmiş biçimde yazılmıştır. Fiyatlar aşağıda verilmiştir.\n**Buna göre iki ürünün fiyatları toplamı kaç TL'dir?**",
  gorsel: `<table class="tablo"><tr><th>Ürün</th><th>Fiyat (TL)</th></tr><tr><td>Kulaklık</td><td>2 · 10<sup>2</sup> + 3 · 10<sup>−1</sup> + 5 · 10<sup>−2</sup></td></tr><tr><td>Fare</td><td>8 · 10<sup>1</sup> + 7 · 10<sup>−1</sup> + 9 · 10<sup>−2</sup></td></tr></table>`,
  secenekler: ["282,14", "281,14", "281,04", "280,14"],
  dogru: 1,
  hatalar: [
    "282,14: Elde olan 1'i iki kez ekleme. Onda birler toplamı birler basamağına yalnızca bir kez 1 devreder.",
    null,
    "281,04: Yüzde birler toplamı olan 0,14'ün 1'ini onda birlere devretmeme. 5 + 9 = 14 yüzde birdir.",
    "280,14: Onda birler basamağından birler basamağına gelen 1'i hiç yazmama. 0,35 + 0,79 = 1,14'tür."
  ],
  aciklama: `Çözümlenmiş fiyatlar önce ondalık yazılır, sonra virgüller alt alta gelecek biçimde toplanır. Bir basamakta toplam 10'u geçerse fazlalık soldaki basamağa devreder.
Adım 1: Kulaklık: 200 + 0,3 + 0,05 = 200,35 TL.
Adım 2: Fare: 80 + 0,7 + 0,09 = 80,79 TL.
Adım 3: Topla: 200,35 + 80,79 = 281,14 TL. Yüzde birler: 5 + 9 = 14 (4 yazılır, 1 devreder); onda birler: 3 + 7 + 1 = 11 (1 yazılır, 1 devreder); birler: 0 + 0 + 1 = 1.
Sağlama: 281,14 − 80,79 = 200,35.
Sık yapılan hata: Devirleri unutmak ya da bir devri iki kez saymak.
Cevap B.`
},
{
  id: "mat-ui-343",
  kazanim: "M.8.1.2.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir kargo deposunda iki kolinin kütlesi etiketlerinde çözümlenmiş biçimde yazılmıştır: A kolisinin kütlesi 3 · 10^{2} + 5 · 10^{−1} kg, B kolisinin kütlesi ise 7 · 10^{1} + 8 · 10^{−2} kg'dır.\n**Buna göre A kolisi B kolisinden kaç kilogram ağırdır?**",
  gorsel: null,
  secenekler: ["229,7", "229,97", "230,42", "370,58"],
  dogru: 2,
  hatalar: [
    "229,7: 8 · 10^{−2} terimini 0,8 alma. Yüzde birler basamağı onda birler sanılmış (300,5 − 70,8).",
    "229,97: 5 · 10^{−1} terimini 0,05 alma. Onda birler basamağı yüzde birler sanılmış (300,05 − 70,08).",
    null,
    "370,58: Fark yerine toplam alma. İki kolinin toplam kütlesi 300,5 + 70,08 = 370,58'dir."
  ],
  aciklama: `Fark istendiğinde önce her kütle ondalık yazılır; sonra büyük olandan küçük olan çıkarılır. Çözümlemede 10^{−1} onda birleri, 10^{−2} yüzde birleri gösterir.
Adım 1: A kolisi: 3 · 10^{2} + 5 · 10^{−1} = 300 + 0,5 = 300,5 kg.
Adım 2: B kolisi: 7 · 10^{1} + 8 · 10^{−2} = 70 + 0,08 = 70,08 kg.
Adım 3: Farkı bul: 300,50 − 70,08 = 230,42 kg.
Sağlama: 230,42 + 70,08 = 300,50.
Sık yapılan hata: 10^{−1} ile 10^{−2} basamaklarını karıştırmak.
Cevap C.`
},
{
  id: "mat-ui-344",
  kazanim: "M.8.1.2.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir bilim kulübü, laboratuvarda ölçtüğü değeri 100 ile çarparak (100 kat büyüterek) panoya yazacaktır. Ölçülen değer çözümlenmiş biçimde 9 · 10^{1} + 4 · 10^{−1} + 6 · 10^{−3} olarak kayıtlıdır.\n**Buna göre panoya yazılacak değerin çözümlenmiş biçimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "9 · 10^{3} + 4 · 10^{1} + 6 · 10^{−1}",
    "9 · 10^{3} + 4 · 10^{−1} + 6 · 10^{−3}",
    "9 · 10^{−1} + 4 · 10^{−3} + 6 · 10^{−5}",
    "9 · 10^{2} + 4 · 10^{0} + 6 · 10^{−2}"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca ilk terimi büyütme: 9 · 10^{1} terimi 100 ile çarpılmış ama diğer iki terim aynen bırakılmış. Her terim 100 ile çarpılmalıdır.",
    "Yönü ters alma: bütün üsler 2 azaltılmış, yani sayı 100 ile çarpılmak yerine 100'e bölünmüş.",
    "Yalnızca 10 ile çarpma: bütün üsler 1 artırılmış. 100 ile çarpmak için üsler 2 artırılmalıdır."
  ],
  aciklama: `Bir sayı 10'un kuvvetiyle çarpılınca çözümlemedeki her terimin üssü o kuvvetin üssü kadar artar: 100 = 10^{2} olduğundan bütün üsler 2 artar.
Adım 1: Eski değeri yaz: 9 · 10^{1} + 4 · 10^{−1} + 6 · 10^{−3} = 90,406.
Adım 2: Her terimi 10^{2} ile çarp: 9 · 10^{1+2}, 4 · 10^{−1+2}, 6 · 10^{−3+2}.
Adım 3: Üsleri topla: 9 · 10^{3} + 4 · 10^{1} + 6 · 10^{−1}.
Sağlama: 9000 + 40 + 0,6 = 9040,6 ve 90,406 · 100 = 9040,6.
Sık yapılan hata: Bir terimi ya da yanlış yönü değiştirmek; 100 ile çarpma, virgülü iki basamak sağa kaydırmaktır.
Cevap A.`
},
{
  id: "mat-ui-345",
  kazanim: "M.8.1.2.4",
  kademe: 3,
  zorluk: 3,
  soru: "Okul kermesi için başlatılan bağış kampanyasının hedefi 4,5 · 10^{5} TL'dir. Şimdiye kadar toplanan tutar, hedefin onda biri kadardır. Kampanya sorumlusu, hedefe ulaşmak için toplanması gereken kalan tutarı panoya yazacaktır.\n**Buna göre kalan tutar aşağıdakilerden hangisine eşittir?**",
  gorsel: null,
  secenekler: ["4,5 · 10^{4}", "40,5 · 10^{4}", "45 · 10^{4}", "405 · 10^{4}"],
  dogru: 1,
  hatalar: [
    "4,5 · 10^{4} = 45 000: Kalan tutar yerine toplanan tutarı bulma. Bu değer hedefin onda biridir; soru hedefe daha ne kadar kaldığını soruyor.",
    null,
    "45 · 10^{4} = 450 000: Toplanan tutarı hedeften çıkarmayı unutma. Bu değer hedefin kendisidir.",
    "405 · 10^{4} = 4 050 000: 405 000 sayısını yazarken virgülü bir basamak fazla kaydırma. 405 000 = 405 · 10^{3} olur; 10^{4} ile yazılırsa sayı 10 kat büyür."
  ],
  aciklama: `Bir sayıyı 10'un farklı tam sayı kuvvetleriyle yazarken virgül bir basamak sağa kayarsa üs 1 azalır, bir basamak sola kayarsa üs 1 artar; sayının değeri değişmez.
Adım 1: Toplanan tutarı bul: 4,5 · 10^{5} ÷ 10 = 4,5 · 10^{4} = 45 000 TL.
Adım 2: Kalan tutarı bul: hedef 450 000 TL olduğundan 450 000 − 45 000 = 405 000 TL.
Adım 3: 405 000 sayısını 10^{4} cinsinden yaz: 405 000 ÷ 10 000 = 40,5 olduğundan 405 000 = 40,5 · 10^{4}.
Adım 4: Şıkları aç: 4,5 · 10^{4} = 45 000; 45 · 10^{4} = 450 000; 405 · 10^{4} = 4 050 000. Yalnızca 40,5 · 10^{4} sayısı 405 000'e eşittir.
Sağlama: 45 000 + 405 000 = 450 000 = 4,5 · 10^{5}, yani hedef.
Sık yapılan hata: Kalan tutar yerine toplanan tutarı (45 000) ya da hedefin kendisini (450 000) işaretlemek.
Cevap B.`
},
{
  id: "mat-ui-346",
  kazanim: "M.8.1.2.4",
  kademe: 3,
  zorluk: 3,
  soru: "Bir haber sitesinin dört editörü, aynı ayki ziyaretçi sayısını defterlerine farklı biçimlerde yazmıştır. Üçünün yazdığı sayı birbirine eşittir.\n**Buna göre değeri diğerlerinden farklı olan gösterim aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["0,72 · 10^{6}", "72 · 10^{4}", "7,2 · 10^{5}", "72 · 10^{5}"],
  dogru: 3,
  hatalar: [
    "0,72 · 10^{6} = 720 000: Diğer ikisiyle aynı değerdedir (baştaki sayı 10'a bölünmüş, üs 1 artmış).",
    "72 · 10^{4} = 720 000: Diğer ikisiyle aynı değerdedir (baştaki sayı 10 katına çıkmış, üs 1 azalmış).",
    "7,2 · 10^{5} = 720 000: Diğer ikisiyle aynı değerdedir (bilimsel gösterim).",
    null
  ],
  aciklama: `Aynı sayı 10'un farklı kuvvetleriyle yazılırken baştaki sayı ile üs ters yönde değişir: baştaki sayı 10 katına çıkarsa üs 1 azalır.
Adım 1: Referans olarak bilimsel gösterimi al: 7,2 · 10^{5} = 720 000.
Adım 2: Diğerlerini aç: 0,72 · 10^{6} = 0,72 · 1 000 000 = 720 000 ve 72 · 10^{4} = 72 · 10 000 = 720 000.
Adım 3: Sonuncuyu aç: 72 · 10^{5} = 72 · 100 000 = 7 200 000. Bu sayı diğerlerinin 10 katıdır.
Sağlama: 7,2 → 72 geçişinde baştaki sayı 10 katına çıkmış ama üs 5'te kalmış; denge için üs 4 olmalıydı.
Sık yapılan hata: Baştaki sayıyı büyütürken üsse dokunmamak.
Cevap D.`
},
{
  id: "mat-ui-347",
  kazanim: "M.8.1.2.4",
  kademe: 3,
  zorluk: 3,
  soru: "Bir uygulamada aynı değer bir ekranda 6,03 · 10^{4}, başka bir ekranda x · 10^{−2} biçiminde gösterilmektedir.\n**Buna göre x sayısı kaçtır?**",
  gorsel: null,
  secenekler: ["60 300", "603 000", "6 030 000", "60 300 000"],
  dogru: 2,
  hatalar: [
    "60 300: Sayının kendisini yazma. Üssün 4'ten −2'ye inmesi hesaba katılmamış.",
    "603 000: Üs farkını 5 alma. 4'ten −2'ye 6 basamak iner; virgül 6 basamak kaydırılmalıdır.",
    null,
    "60 300 000: Üs farkını 7 alma. 4 − (−2) = 6'dır, 7 değil."
  ],
  aciklama: `Aynı değeri farklı bir 10'un kuvvetiyle yazarken üs ne kadar azalırsa baştaki sayı o kadar basamak büyür. Üsler arasındaki farkı doğru bulmak gerekir.
Adım 1: Üs farkını bul: 4'ten −2'ye inmek için 4 − (−2) = 6 basamak azalma vardır.
Adım 2: Baştaki sayı 10^{6} = 1 000 000 katına çıkar: 6,03 · 1 000 000 = 6 030 000.
Adım 3: Yaz: 6,03 · 10^{4} = 6 030 000 · 10^{−2}.
Sağlama: 6 030 000 · 0,01 = 60 300 ve 6,03 · 10 000 = 60 300.
Sık yapılan hata: 4 ile −2 arasındaki farkı 2 ya da 5 bulmak; sıfırın iki yanındaki mesafeler toplanır.
Cevap C.`
},
{
  id: "mat-ui-348",
  kazanim: "M.8.1.2.4",
  kademe: 3,
  zorluk: 3,
  soru: "Bir telefonun bekleme modunda çektiği akım 0,0072 amperdir. Bir öğrenci bu sayıyı 10'un farklı kuvvetleriyle dört biçimde yazmıştır.\n**Buna göre aşağıdakilerden hangisi 0,0072 sayısına __eşit değildir__?**",
  gorsel: null,
  secenekler: ["720 · 10^{−6}", "72 · 10^{−4}", "7,2 · 10^{−3}", "0,72 · 10^{−2}"],
  dogru: 0,
  hatalar: [
    null,
    "72 · 10^{−4} = 72 · 0,0001 = 0,0072: Bu gösterim 0,0072'ye eşittir.",
    "7,2 · 10^{−3} = 7,2 · 0,001 = 0,0072: Bu gösterim 0,0072'ye eşittir.",
    "0,72 · 10^{−2} = 0,72 · 0,01 = 0,0072: Bu gösterim 0,0072'ye eşittir."
  ],
  aciklama: `Baştaki sayı 10 katına çıkarsa üs 1 azalır, 10'a bölünürse üs 1 artar. Doğru gösterimlerde baştaki sayı ile üs ters yönde ve aynı oranda değişir.
Adım 1: Bilimsel gösterimi bul: 0,0072 = 7,2 · 10^{−3}.
Adım 2: 72 · 10^{−4}: 7,2 → 72 (10 katı), −3 → −4 (1 azalma). Eşittir.
Adım 3: 0,72 · 10^{−2}: 7,2 → 0,72 (10'a bölünmüş), −3 → −2 (1 artma). Eşittir.
Adım 4: 720 · 10^{−6}: 7,2 → 720 (100 katı) olduğundan üs 2 azalıp −5 olmalıydı; −6 yazıldığı için değer 0,00072 olur. Eşit değildir.
Sağlama: 720 · 0,000001 = 0,00072 ve bu, 0,0072'nin onda biridir.
Sık yapılan hata: Baştaki sayıyı 100 katına çıkarıp üsse 1 eklemek ya da çıkarmak.
Cevap A.`
},
{
  id: "mat-ui-349",
  kazanim: "M.8.1.2.4",
  kademe: 3,
  zorluk: 3,
  soru: "Bir bisiklet turunun rotası, haritada 3,5 · 10^{5} metre olarak verilmiştir. Organizatör bu uzunluğu kilometre cinsinden, 10'un kuvvetini kullanarak yazacaktır. (1 kilometre = 10^{3} metre)\n**Buna göre rota uzunluğunun kilometre cinsinden eşiti aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["0,35 · 10^{2}", "3,5 · 10^{8}", "350 · 10^{2}", "35 · 10^{1}"],
  dogru: 3,
  hatalar: [
    "0,35 · 10^{2} = 35 km: Baştaki sayı 10'a bölünüp üs 1 artırılmamış; bu, rotanın onda biridir.",
    "3,5 · 10^{8}: Metreyi kilometreye çevirirken 10^{3} ile bölmek yerine çarpma. Kilometre daha büyük birimdir, sayı küçülmelidir.",
    "350 · 10^{2} = 35 000 km: 350 km değerini bulup üssü 2 olarak bırakma. 350 sayısı 10^{0} ile birlikte yazılır.",
    null
  ],
  aciklama: `Büyük birime geçerken sayı küçülür. Metreyi kilometreye çevirmek için 10^{3}'e bölünür; aynı tabanlı bölmede üsler çıkarılır.
Adım 1: Böl: (3,5 · 10^{5}) ÷ 10^{3} = 3,5 · 10^{5−3} = 3,5 · 10^{2} km = 350 km.
Adım 2: Şıklarla eşleştir: 35 · 10^{1} = 35 · 10 = 350.
Adım 3: Diğerlerini denetle: 0,35 · 10^{2} = 35; 350 · 10^{2} = 35 000; 3,5 · 10^{8} = 350 000 000.
Sağlama: 350 km = 350 000 m = 3,5 · 10^{5} m.
Sık yapılan hata: Birim büyüdüğünde sayıyı da büyütmek. Daha büyük birimle yazılan sayı küçük olur.
Cevap D.`
},
{
  id: "mat-ui-350",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir fen laboratuvarında dört öğrenci aynı devrede akım şiddetini amper cinsinden ölçmüştür: a = 4,2 · 10^{−3}, b = 9,1 · 10^{−4}, c = 1,6 · 10^{−3} ve d = 8 · 10^{−5}.\n**Buna göre bu ölçümlerin küçükten büyüğe doğru sıralanışı aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "c < a < d < b",
    "d < b < c < a",
    "d < b < a < c",
    "a < c < b < d"
  ],
  dogru: 1,
  hatalar: [
    "Yalnızca baştaki sayılara bakma: 1,6 < 4,2 < 8 < 9,1 sıralaması yapılmış. Önce 10'un üssüne bakılmalıdır.",
    null,
    "Aynı üslü iki sayıyı ters sıralama: a ve c'nin üsleri eşit (−3) ve baştaki sayıya göre 1,6 < 4,2 olduğundan c < a'dır.",
    "Negatif üssü büyük sanma: −5 en büyük üs gibi değerlendirilmiş. Negatif üsler arasında küçük olan, sayıyı daha küçük yapar."
  ],
  aciklama: `Bilimsel gösterimde sıralama için önce 10'un üssüne bakılır; üssü büyük olan büyüktür. Üsler eşitse baştaki sayı karşılaştırılır.
Adım 1: Üsleri sırala: d için −5, b için −4, a ve c için −3. Küçükten büyüğe d, b, sonra a ve c.
Adım 2: Üsleri eşit olan a ve c'yi karşılaştır: 1,6 < 4,2 olduğundan c < a.
Adım 3: Sırala: d < b < c < a.
Sağlama: Ondalık yaz: 0,00008 < 0,00091 < 0,0016 < 0,0042.
Sık yapılan hata: 10'un üssünü atlayıp yalnızca baştaki sayılara bakmak ya da negatif üslerde yönü ters okumak.
Cevap B.`
},
{
  id: "mat-ui-351",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir botanik çalışmasında bir polen tanesinin çapı yaklaşık 2,5 · 10^{−5} metre, bir toz zerresinin çapı yaklaşık 5 · 10^{−7} metre olarak alınmıştır.\n**Buna göre polen tanesinin çapı, toz zerresinin çapının kaç katıdır?**",
  gorsel: null,
  secenekler: ["0,02", "5", "50", "500"],
  dogru: 2,
  hatalar: [
    "0,02: Oranı ters kurma. Bu, toz zerresinin çapının polen tanesinin çapına oranıdır.",
    "5: Üs farkını 1 alma. 10^{−5} ÷ 10^{−7} = 10^{2}'dir, 10^{1} değil.",
    null,
    "500: Üs farkını 3 alma ya da 2,5 ÷ 5 işlemini 5 bulma. Doğrusu 0,5 · 10^{2}'dir."
  ],
  aciklama: `Kaç katı sorusu bölmeyle çözülür. Bilimsel gösterimlerde baştaki sayılar kendi arasında, 10'un kuvvetleri kendi arasında bölünür; aynı tabanlı bölmede üsler çıkarılır.
Adım 1: Oranı kur: (2,5 · 10^{−5}) ÷ (5 · 10^{−7}).
Adım 2: Baştaki sayıları böl: 2,5 ÷ 5 = 0,5.
Adım 3: Üsleri çıkar: 10^{−5−(−7)} = 10^{2}.
Adım 4: Çarp: 0,5 · 10^{2} = 50.
Sağlama: 50 · 5 · 10^{−7} = 250 · 10^{−7} = 2,5 · 10^{−5}.
Sık yapılan hata: Büyük olanı küçüğe değil küçüğü büyüğe bölmek; sonuç 1'den küçük çıkıyorsa oran ters kurulmuştur.
Cevap C.`
},
{
  id: "mat-ui-352",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir kimya laboratuvarında bir damlalık, her damlada 8 · 10^{−5} litre sıvı vermektedir. Damlalıktan 2,5 · 10^{3} damla akıtılmıştır.\n**Buna göre akıtılan sıvının toplam miktarının litre cinsinden bilimsel gösterimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2 · 10^{−1}", "1,05 · 10^{−1}", "2 · 10^{−2}", "2 · 10^{−14}"],
  dogru: 0,
  hatalar: [
    null,
    "1,05 · 10^{−1}: Baştaki sayıları çarpmak yerine toplama: 8 + 2,5 = 10,5 alınmıştır. Çarpmada baştaki sayılar da çarpılır.",
    "2 · 10^{−2}: Bilimsel gösterime düzeltirken üssü artırmayı unutma. 20 · 10^{−2} yazıldıktan sonra 20 = 2 · 10^{1} olduğundan üs 1 artar.",
    "2 · 10^{−14}: Üsleri çarpma: (−5) · 3 = −15 alınmış. Çarpmada üsler toplanır."
  ],
  aciklama: `Bilimsel gösterimlerde çarpma: baştaki sayılar kendi arasında çarpılır, 10'un kuvvetleri için üsler toplanır. Sonuçta baştaki sayı 1 ile 10 arasında değilse düzeltilir.
Adım 1: Çarpımı kur: (8 · 10^{−5}) · (2,5 · 10^{3}).
Adım 2: Baştaki sayıları çarp: 8 · 2,5 = 20. Üsleri topla: −5 + 3 = −2. Sonuç 20 · 10^{−2}.
Adım 3: Bilimsel gösterime düzelt: 20 = 2 · 10^{1} olduğundan 20 · 10^{−2} = 2 · 10^{−1}.
Sağlama: 0,00008 · 2500 = 0,2 ve 2 · 10^{−1} = 0,2.
Sık yapılan hata: 20 · 10^{−2} sonucunu bilimsel gösterim sanmak; baştaki sayı 10'dan küçük olmalıdır.
Cevap A.`
},
{
  id: "mat-ui-353",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir un fabrikasında bir günde 6 · 10^{8} gram un üretilmiştir. Un, her biri 1,5 · 10^{3} gram alan paketlere doldurulacaktır.\n**Buna göre bu un kaç paket doldurur?**",
  gorsel: null,
  secenekler: ["4 · 10^{4}", "4 · 10^{5}", "4,5 · 10^{5}", "4 · 10^{11}"],
  dogru: 1,
  hatalar: [
    "4 · 10^{4}: 6 ÷ 1,5 işlemini 0,4 bulma (0,4 · 10^{5} = 4 · 10^{4}). Doğrusu 6 ÷ 1,5 = 4'tür.",
    null,
    "4,5 · 10^{5}: Baştaki sayıları bölmek yerine çıkarma: 6 − 1,5 = 4,5 alınmış.",
    "4 · 10^{11}: Bölmede üsleri toplama: 8 + 3 = 11 alınmış. Bölmede üsler çıkarılır."
  ],
  aciklama: `Kaç paket sorusu bölmeyle çözülür. Baştaki sayılar kendi arasında bölünür, 10'un kuvvetleri için üsler çıkarılır.
Adım 1: Bölmeyi kur: (6 · 10^{8}) ÷ (1,5 · 10^{3}).
Adım 2: Baştaki sayıları böl: 6 ÷ 1,5 = 4.
Adım 3: Üsleri çıkar: 10^{8−3} = 10^{5}.
Adım 4: Birleştir: 4 · 10^{5} paket. Baştaki sayı 1 ile 10 arasında olduğundan gösterim bilimseldir.
Sağlama: 4 · 10^{5} · 1,5 · 10^{3} = 6 · 10^{8}.
Sık yapılan hata: Bölmeyi çıkarmayla karıştırmak ve üsleri toplamak.
Cevap B.`
},
{
  id: "mat-ui-354",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir ilin iki ilçesinin nüfusu bir raporda bilimsel gösterimle verilmiştir: birinci ilçede 3,4 · 10^{6}, ikinci ilçede 8 · 10^{5} kişi yaşamaktadır.\n**Buna göre iki ilçenin toplam nüfusunun bilimsel gösterimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["4,2 · 10^{5}", "2,6 · 10^{6}", "3,48 · 10^{6}", "4,2 · 10^{6}"],
  dogru: 3,
  hatalar: [
    "4,2 · 10^{5}: İki üsten küçüğünü esas alma. Toplarken üsler farklıysa önce aynı kuvvete getirilir; baştaki sayılar toplanınca üs 10^{6} kalır.",
    "2,6 · 10^{6}: Toplama yerine çıkarma: 3,4 − 0,8 = 2,6 alınmış. Soru toplam nüfusu istiyor.",
    "3,48 · 10^{6}: 8 · 10^{5} terimini 0,08 · 10^{6} alma. Doğrusu 0,8 · 10^{6}'dır.",
    null
  ],
  aciklama: `Bilimsel gösterimlerde toplama yapabilmek için iki sayıyı da 10'un aynı kuvvetine getirmek gerekir. Sonra baştaki sayılar toplanır ve 10'un kuvveti aynen kalır.
Adım 1: İkinci sayıyı 10^{6} cinsinden yaz: 8 · 10^{5} = 0,8 · 10^{6}.
Adım 2: Baştaki sayıları topla: 3,4 + 0,8 = 4,2.
Adım 3: Yaz: 4,2 · 10^{6}. Baştaki sayı 1 ile 10 arasında olduğundan gösterim bilimseldir.
Sağlama: 3 400 000 + 800 000 = 4 200 000 = 4,2 · 10^{6}.
Sık yapılan hata: Üsler farklıyken doğrudan baştaki sayıları toplamak.
Cevap D.`
},
{
  id: "mat-ui-355",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 3,
  soru: "Bir kırtasiyede satılan iki farklı kartonun kalınlığı etiketlerinde yazılıdır: birinin kalınlığı 450 mikrometre, diğerinin kalınlığı ise 3 · 10^{−4} metredir. (1 mikrometre = 10^{−6} metre)\n**Buna göre iki kartonun toplam kalınlığının metre cinsinden bilimsel gösterimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["4,5 · 10^{8}", "4,8 · 10^{−3}", "7,5 · 10^{−4}", "7,5 · 10^{−8}"],
  dogru: 2,
  hatalar: [
    "4,5 · 10^{8}: Mikrometreyi metreye çevirirken 10^{−6} ile çarpmak yerine 10^{6} ile çarpma. Küçük birimden büyük birime geçerken sayı küçülür.",
    "4,8 · 10^{−3}: 450 sayısını 4,5 · 10^{3} sanma (4,5 · 10^{−3} + 3 · 10^{−4}). Doğrusu 450 = 4,5 · 10^{2}'dir.",
    null,
    "7,5 · 10^{−8}: Toplamada üsleri toplama: (−4) + (−4) = −8 alınmış. Toplamada üs aynen kalır."
  ],
  aciklama: `Önce iki kalınlığı da metreye çevir, sonra aynı 10 kuvvetinde topla. Mikrometre küçük bir birimdir; 1 mikrometre 10^{−6} metredir.
Adım 1: 450 mikrometreyi çevir: 450 · 10^{−6} m = 4,5 · 10^{2} · 10^{−6} = 4,5 · 10^{−4} m.
Adım 2: İki kalınlık da 10^{−4} cinsinden: 4,5 · 10^{−4} + 3 · 10^{−4}.
Adım 3: Baştaki sayıları topla: 4,5 + 3 = 7,5; üs aynen kalır: 7,5 · 10^{−4} m.
Sağlama: 0,00045 + 0,0003 = 0,00075 ve 7,5 · 10^{−4} = 0,00075.
Sık yapılan hata: Toplarken 10'un üslerini de toplamak; üsler yalnızca çarpmada toplanır.
Cevap C.`
},
/* ===================== ZORLUK 4 ===================== */
{
  id: "mat-ui-356",
  kazanim: "M.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: "Bir bilgisayar oyunundaki sihirli kapı x = −2 ve y = −3 değerleriyle açılmaktadır. Kapının ödül puanı x^{y} + y^{x} ifadesiyle hesaplanır.\n**Buna göre kapının ödül puanı aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["−[[1|72]]", "[[1|72]]", "[[1|17]]", "[[17|72]]"],
  dogru: 0,
  hatalar: [
    null,
    "[[1|72]]: İşaretleri ters kurma: [[1|8]] − [[1|9]] bulunmuş. (−3)^{−2} pozitiftir, (−2)^{−3} ise negatiftir.",
    "[[1|17]]: Paydaları toplama: [[1|8]] + [[1|9]] için [[1|8+9]] yazılmış. Kesirler toplanırken paydalar eşitlenir.",
    "[[17|72]]: (−2)^{−3} ifadesinin negatifliğini kaybetme: [[1|8]] + [[1|9]] bulunmuş. Tek kuvvette sonuç negatiftir."
  ],
  aciklama: `Negatif üs tabanın tersini alır: a^{−n} = [[1|a^{n}]]. Taban negatifse sonucun işaretini üssün tek ya da çift olması belirler; negatif üs işareti değiştirmez.
Adım 1: x^{y} = (−2)^{−3} = [[1|(−2)^{3}]] = [[1|−8]] = −[[1|8]].
Adım 2: y^{x} = (−3)^{−2} = [[1|(−3)^{2}]] = [[1|9]].
Adım 3: Topla: −[[1|8]] + [[1|9]] = −[[9|72]] + [[8|72]] = −[[1|72]].
Sağlama: [[1|9]] sayısı [[1|8]] sayısından küçüktür; negatif olan daha büyük olduğu için toplam negatiftir.
Sık yapılan hata: Paydadaki (−8) için eksi işaretini kaybetmek.
Cevap A.`
},
{
  id: "mat-ui-357",
  kazanim: "M.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: "Işık panosunda n pozitif tam sayı olmak üzere (−1)^{n} + (−1)^{2n} + (−1)^{3n} ifadesi, her n değeri için panonun o andaki parlaklık puanını göstermektedir.\n**Buna göre bu ifade, n pozitif tam sayısı değiştikçe kaç farklı değer alabilir?**",
  gorsel: null,
  secenekler: ["2", "3", "4", "5"],
  dogru: 0,
  hatalar: [
    null,
    "3: n = 1, 2, 3 için ayrı ayrı sonuç bulunduğunu sanma. Sonuç yalnızca n'nin tek ya da çift olmasına bağlıdır.",
    "4: Her n değeri için farklı bir sonuç çıkacağını sanma. (−1)'in kuvvetleri yalnızca −1 ya da 1 olabilir.",
    "5: Üs değerlerinin her birine ayrı sonuç atama. Toplam sonuçlar sınırlı sayıda olur."
  ],
  aciklama: `(−1)^{k} ifadesi k çiftse 1, k tekse −1 olur. 2n her zaman çifttir; n ve 3n ise aynı tek-çift durumundadır (n çiftse ikisi de çift, n tekse ikisi de tek).
Adım 1: n çift olsun: (−1)^{n} = 1, (−1)^{2n} = 1, (−1)^{3n} = 1. Toplam 3.
Adım 2: n tek olsun: (−1)^{n} = −1, (−1)^{2n} = 1, (−1)^{3n} = −1. Toplam −1.
Adım 3: Başka durum yoktur; ifade yalnızca 3 ve −1 değerlerini alır, yani 2 farklı değer.
Sağlama: n = 1 için −1 + 1 − 1 = −1, n = 2 için 1 + 1 + 1 = 3, n = 3 için yine −1.
Sık yapılan hata: Her n için farklı bir değer bulunacağını sanmak.
Cevap A.`
},
{
  id: "mat-ui-358",
  kazanim: "M.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: "Laboratuvardaki bir sensörün ayar değeri [(−3)^{2} · 3^{−1}]^{3} − (−2)^{3} ÷ 2^{2} işlemiyle hesaplanmaktadır.\n**Buna göre sensörün ayar değeri kaçtır?**",
  gorsel: null,
  secenekler: ["−25", "5", "25", "29"],
  dogru: 3,
  hatalar: [
    "−25: (−3)^{2} ifadesini −9 alma. Parantez negatif tabanı kuvvetin içine sokar; çift kuvvet pozitiftir. Bu hatayla [−3]^{3} = −27 ve −27 + 2 = −25 bulunur.",
    "5: Köşeli parantezin dışındaki 3. kuvveti uygulamama. Parantez içi 3 bulunup 3 + 2 = 5 yazılmış.",
    "25: İşareti yanlış değerlendirme. (−2)^{3} ÷ 2^{2} = −2 bulunmuş ama 27 − (−2) yerine 27 − 2 yapılmış. Eksi ile eksi artı yapar.",
    null
  ],
  aciklama: `Önce parantez içi, sonra üsler, sonra bölme, en son toplama ve çıkarma yapılır. Negatif üs tabanın tersini alır; negatif tabanın çift kuvveti pozitif, tek kuvveti negatiftir.
Adım 1: Köşeli parantezin içi: (−3)^{2} = 9 ve 3^{−1} = [[1|3]]; çarpım 9 · [[1|3]] = 3.
Adım 2: Parantezin dışındaki kuvveti uygula: 3^{3} = 27.
Adım 3: İkinci terim: (−2)^{3} = −8 ve 2^{2} = 4; bölüm −8 ÷ 4 = −2.
Adım 4: Çıkar: 27 − (−2) = 27 + 2 = 29.
Sağlama: Çıkarılan sayı negatif olduğu için sonuç 27'den büyük olmalıdır.
Sık yapılan hata: (−3)^{2} yerine −3^{2} gibi düşünmek ya da −(−2) işlemini −2 sanmak.
Cevap D.`
},
{
  id: "mat-ui-359",
  kazanim: "M.8.1.2.2",
  kademe: 3,
  zorluk: 4,
  soru: "Bir belediye arşivinde bulunan belge sayısı (9^{3})^{2} · 27^{2} ÷ 81 işlemiyle hesaplanmıştır. Arşiv sorumlusu bu sayıyı raporuna 3'ün bir kuvveti olarak yazacaktır.\n**Buna göre rapora yazılacak ifade aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["3^{12}", "3^{14}", "3^{18}", "3^{22}"],
  dogru: 1,
  hatalar: [
    "3^{12}: Üssün üssünde üsleri toplama: (9^{3})^{2} = 9^{5} = 3^{10} alınmış. Üssün üssünde üsler çarpılır: 9^{6} = 3^{12}.",
    null,
    "3^{18}: Bölme adımını unutma. 3^{12} · 3^{6} = 3^{18} bulunup 81'e bölme yapılmamış.",
    "3^{22}: Bölmeyi çarpma gibi yapma. 81 = 3^{4} ile bölünürken üslerden 4 çıkarılacakken 4 eklenmiş."
  ],
  aciklama: `Tabanları farklı üslü ifadelerde önce her tabanı aynı sayının kuvveti olarak yaz (burada 3). Sonra üssün üssünde üsler çarpılır, aynı tabanlı çarpmada üsler toplanır, aynı tabanlı bölmede üsler çıkarılır.
Adım 1: Tabanları 3'ün kuvveti yaz: 9 = 3^{2}, 27 = 3^{3}, 81 = 3^{4}.
Adım 2: (9^{3})^{2} = 9^{6} = (3^{2})^{6} = 3^{12} ve 27^{2} = (3^{3})^{2} = 3^{6}.
Adım 3: Çarp: 3^{12} · 3^{6} = 3^{18}.
Adım 4: 81'e böl: 3^{18} ÷ 3^{4} = 3^{14}.
Sağlama: Üsleri bir arada yaz: 12 + 6 − 4 = 14.
Sık yapılan hata: Bölmeyi unutmak (3^{18}) ya da bölmede üsleri toplamak (3^{22}).
Cevap B.`
},
{
  id: "mat-ui-360",
  kazanim: "M.8.1.2.2",
  kademe: 3,
  zorluk: 4,
  soru: "Bir ses işleme programı, girilen bir değeri ([[2|3]])^{−3} · ([[9|4]])^{2} ÷ ([[3|2]])^{−1} işlemiyle dönüştürmektedir.\n**Buna göre bu işlemin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["([[3|2]])^{2}", "([[3|2]])^{6}", "([[3|2]])^{8}", "([[3|2]])^{12}"],
  dogru: 2,
  hatalar: [
    "([[3|2]])^{2}: ([[2|3]])^{−3} ifadesinde ters çevirmeyi unutma. Bu durumda üs −3 yerine 3 sayılmış ve −3 + 4 + 1 = 2 bulunmuştur.",
    "([[3|2]])^{6}: ([[9|4]])^{2} ifadesini ([[3|2]])^{2} yazma. Üssün üssünde üsler çarpılmadığı için 3 + 2 + 1 = 6 bulunmuş.",
    null,
    "([[3|2]])^{12}: Çarpmada üsleri çarpma: 3 · 4 = 12 alınmış. Aynı tabanlı çarpmada üsler toplanır."
  ],
  aciklama: `Kesirlerin tabanını [[3|2]] yap. Kesrin negatif kuvvetinde kesir ters çevrilir ve üs pozitif olur. Sonra aynı tabanlı çarpma ve bölme kuralları uygulanır.
Adım 1: ([[2|3]])^{−3} = ([[3|2]])^{3}.
Adım 2: [[9|4]] = ([[3|2]])^{2} olduğundan ([[9|4]])^{2} = ([[3|2]])^{4}.
Adım 3: ([[3|2]])^{−1} ile bölmek, ([[3|2]])^{1} ile çarpmak demektir.
Adım 4: Üsleri topla: 3 + 4 + 1 = 8, yani ([[3|2]])^{8}.
Sağlama: Aynı sonuç ([[3|2]])^{3} · ([[3|2]])^{4} ÷ ([[3|2]])^{−1} = ([[3|2]])^{7−(−1)} = ([[3|2]])^{8}.
Sık yapılan hata: Bölmede negatif üssün işaretini düşürüp 7 − 1 = 6 bulmak.
Cevap C.`
},
{
  id: "mat-ui-361",
  kazanim: "M.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: "Bir sanat atölyesinde kalınlığı 0,2 milimetre olan idealleştirilmiş bir kâğıt, her katlamada kalınlığı iki katına çıkacak biçimde ardı ardına 9 kez katlanmaktadır.\n**Buna göre katlanmış kâğıdın kalınlığı kaç santimetredir?**",
  gorsel: null,
  secenekler: ["10,24", "20,48", "102,4", "204,8"],
  dogru: 0,
  hatalar: [
    null,
    "20,48: Katlama sayısını bir fazla sayma (2^{10}). Dokuz katlama 2^{9} = 512 katıdır, 1024 değil.",
    "102,4: Birim dönüşümünü yapmama. Bu değer milimetre cinsindendir; 10'a bölünerek santimetreye çevrilmelidir.",
    "204,8: Hem katlama sayısını bir fazla sayma hem de milimetreyi santimetreye çevirmeme."
  ],
  aciklama: `Her katlamada kalınlık 2 ile çarpıldığına göre 9 katlama sonunda kalınlık, başlangıç kalınlığının 2^{9} katı olur. Milimetreden santimetreye geçerken sayı 10'a bölünür.
Adım 1: 2^{9} değerini bul: 2^{9} = 512.
Adım 2: Kalınlığı milimetre cinsinden yaz: 0,2 · 512 = 102,4 mm.
Adım 3: Santimetreye çevir (1 cm = 10 mm): 102,4 ÷ 10 = 10,24 cm.
Sağlama: 10,24 cm = 102,4 mm ve 102,4 ÷ 512 = 0,2 mm.
Sık yapılan hata: Katlama sayısıyla üssü bir fazla ya da bir eksik almak, ya da birimi çevirmeyi unutmak.
Cevap A.`
},
{
  id: "mat-ui-362",
  kazanim: "M.8.1.2.2",
  kademe: 3,
  zorluk: 4,
  soru: "Bir kongre merkezinin A salonunda 4^{3} · 6^{2}, B salonunda 12^{2} · 8 koltuk bulunmaktadır.\n**Buna göre A salonundaki koltuk sayısı, B salonundakinin kaç katıdır?**",
  gorsel: null,
  secenekler: ["24", "8", "4", "2"],
  dogru: 3,
  hatalar: [
    "24: 12^{2} ifadesinde 3'ün üssünü unutma: 12^{2} = 2^{4} · 3 alınmış. Üs her çarpana dağılır: 12^{2} = 2^{4} · 3^{2}.",
    "8: 12^{2} ifadesinde 2'nin üssünü unutma: 12^{2} = 2^{2} · 3^{2} alınmış. 12 = 2^{2} · 3 olduğundan 2'nin üssü 4 olmalıdır.",
    "4: 8 sayısını 2^{2} sanma. Payda 2^{6} · 3^{2} alınmış; doğrusu 8 = 2^{3}'tür.",
    null
  ],
  aciklama: `Bütün sayıları asal çarpanlarına ayır, üsleri dağıt ve aynı tabanları sadeleştir: (a · b)^{n} = a^{n} · b^{n}.
Adım 1: A salonu: 4^{3} = (2^{2})^{3} = 2^{6} ve 6^{2} = 2^{2} · 3^{2}; çarpım 2^{8} · 3^{2}.
Adım 2: B salonu: 12^{2} = (2^{2} · 3)^{2} = 2^{4} · 3^{2} ve 8 = 2^{3}; çarpım 2^{7} · 3^{2}.
Adım 3: Oranla: (2^{8} · 3^{2}) ÷ (2^{7} · 3^{2}) = 2^{8−7} = 2.
Sağlama: A = 64 · 36 = 2304 ve B = 144 · 8 = 1152; 2304 ÷ 1152 = 2.
Sık yapılan hata: Üssü dağıtırken çarpanlardan birinin üssünü atlamak.
Cevap D.`
},
{
  id: "mat-ui-363",
  kazanim: "M.8.1.2.3",
  kademe: 3,
  zorluk: 4,
  soru: "Bir dijital sayaçta sayı a · 10^{2} + b · 10^{0} + c · 10^{−1} + d · 10^{−2} biçiminde oluşturulmaktadır. a, b, c, d yerine 2, 4, 6 ve 9 rakamları birer kez kullanılmaktadır.\n**Buna göre oluşturulabilecek en büyük sayı ile en küçük sayının farkı kaçtır?**",
  gorsel: null,
  secenekler: ["701,46", "701,55", "701,73", "1 111,11"],
  dogru: 2,
  hatalar: [
    "701,46: En küçük sayıda son iki basamağı ters yerleştirme: 204,96 alınmış. En küçük sayıda küçük rakamlar büyük basamaklara gelir.",
    "701,55: En büyük sayıda son iki basamağı ters yerleştirme: 906,24 alınmış. En büyük sayıda büyük rakamlar büyük basamaklara gelir.",
    null,
    "1 111,11: Fark yerine toplam alma: 906,42 + 204,69 bulunmuş."
  ],
  aciklama: `Basamak değeri büyüdükçe oraya konan rakam sayıyı daha çok etkiler. En büyük sayıyı yapmak için en büyük rakam en büyük basamağa, en küçük sayıyı yapmak için en küçük rakam en büyük basamağa konur.
Adım 1: Basamakları büyükten küçüğe sırala: 10^{2}, 10^{0}, 10^{−1}, 10^{−2}.
Adım 2: En büyük sayı: 9, 6, 4, 2 sırasıyla yerleşir; 9 · 100 + 6 · 1 + 4 · 0,1 + 2 · 0,01 = 906,42.
Adım 3: En küçük sayı: 2, 4, 6, 9 sırasıyla yerleşir; 2 · 100 + 4 · 1 + 6 · 0,1 + 9 · 0,01 = 204,69.
Adım 4: Farkı bul: 906,42 − 204,69 = 701,73.
Sağlama: 204,69 + 701,73 = 906,42.
Sık yapılan hata: Son basamakları sıralarken iki rakamın yerini karıştırmak.
Cevap C.`
},
{
  id: "mat-ui-364",
  kazanim: "M.8.1.2.3",
  kademe: 3,
  zorluk: 4,
  soru: "Okulun robotik kulübünde oyuncak araba yarışı düzenlenmiştir. Dört öğrencinin arabasının pisti bitirme süreleri, saniye cinsinden 10'un tam sayı kuvvetleriyle çözümlenmiş biçimde aşağıdaki tabloda verilmiştir.\n**Buna göre süreleri küçükten büyüğe sıralayınca ikinci sırada hangi öğrencinin arabası yer alır?**",
  gorsel: `<table class="tablo"><tr><th>Öğrenci</th><th>Süre (saniye)</th></tr><tr><td>Ada</td><td>1 · 10<sup>1</sup> + 9 · 10<sup>−1</sup> + 5 · 10<sup>−2</sup></td></tr><tr><td>Berk</td><td>1 · 10<sup>1</sup> + 1 · 10<sup>0</sup> + 2 · 10<sup>−2</sup></td></tr><tr><td>Ceyda</td><td>9 · 10<sup>0</sup> + 9 · 10<sup>−1</sup> + 9 · 10<sup>−2</sup> + 9 · 10<sup>−3</sup></td></tr><tr><td>Deniz</td><td>1 · 10<sup>1</sup> + 8 · 10<sup>−1</sup> + 9 · 10<sup>−2</sup> + 9 · 10<sup>−3</sup></td></tr></table>`,
  secenekler: ["Ada", "Berk", "Ceyda", "Deniz"],
  dogru: 3,
  hatalar: [
    "Ada: Süreleri büyükten küçüğe sıralayıp ikinciyi alma. Ada 10,95 ile üçüncü sıradadır; Deniz'in 10,899 süresi ondan kısadır.",
    "Berk: En uzun süreyi seçme. Berk 11,02 ile dördüncü sıradadır.",
    "Ceyda: En kısa süreyi seçme. Ceyda 9,999 ile birinci sıradadır.",
    null
  ],
  aciklama: `Çözümlenmiş süreleri ondalık yazıp karşılaştır. Önce birler ve onlar basamağına bak; eşitse onda birler, sonra yüzde birler basamağına geç.
Adım 1: Süreleri hesapla: Ada 10 + 0,9 + 0,05 = 10,95; Berk 10 + 1 + 0,02 = 11,02.
Adım 2: Ceyda 9 + 0,9 + 0,09 + 0,009 = 9,999; Deniz 10 + 0,8 + 0,09 + 0,009 = 10,899.
Adım 3: Küçükten büyüğe sırala: Ceyda (9,999) < Deniz (10,899) < Ada (10,95) < Berk (11,02).
Adım 4: İkinci sırada Deniz vardır.
Sağlama: Deniz ile Ada'nın onlar basamağı eşit (1); onda birler basamağı 8 < 9 olduğundan Deniz'in süresi daha kısadır.
Sık yapılan hata: Terim sayısına ya da ilk terime bakıp karar vermek; ondalık gösterime çevirmek gerekir.
Cevap D.`
},
{
  id: "mat-ui-365",
  kazanim: "M.8.1.2.3",
  kademe: 3,
  zorluk: 4,
  soru: "Bir ölçüm cihazında bir değerin 10 000 katı, çözümlenmiş biçimde 4 · 10^{5} + 7 · 10^{2} + 3 · 10^{0} olarak yazılmıştır.\n**Buna göre ölçüm değerinin kendisinin çözümlenmiş biçimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "4 · 10^{2} + 7 · 10^{−1} + 3 · 10^{−3}",
    "4 · 10^{1} + 7 · 10^{−2} + 3 · 10^{−4}",
    "4 · 10^{0} + 7 · 10^{−3} + 3 · 10^{−5}",
    "4 · 10^{9} + 7 · 10^{6} + 3 · 10^{4}"
  ],
  dogru: 1,
  hatalar: [
    "Bütün üsleri 3 azaltma: sayı 10 000'e değil 1000'e bölünmüş. 10 000 = 10^{4} olduğundan üsler 4 azalmalıdır.",
    null,
    "Bütün üsleri 5 azaltma: sayı 10 000'e değil 100 000'e bölünmüş.",
    "Üsleri 4 artırma: 10 000 ile bölmek yerine bir kez daha çarpılmış. Verilen sayı zaten 10 000 katıdır."
  ],
  aciklama: `10 000 = 10^{4} ile çarpmak, çözümlemedeki bütün üsleri 4 artırır. Tersine, 10 000 katı verilen sayıyı bulmak için bütün üsler 4 azaltılır.
Adım 1: Üsleri 4 azalt: 5 − 4 = 1, 2 − 4 = −2, 0 − 4 = −4.
Adım 2: Yaz: 4 · 10^{1} + 7 · 10^{−2} + 3 · 10^{−4}.
Sağlama: Bu sayı 40,0703'tür ve 40,0703 · 10 000 = 400 703 = 4 · 10^{5} + 7 · 10^{2} + 3 · 10^{0}.
Sık yapılan hata: Üslerin kaç azalacağını ya da artacağını yanlış hesaplamak; 10^{4} için 4 basamak vardır.
Cevap B.`
},
{
  id: "mat-ui-366",
  kazanim: "M.8.1.2.4",
  kademe: 3,
  zorluk: 4,
  soru: "Bir şehrin bir yıllık bilet satış sayısı, belediyenin raporunda 4,8 · 10^{6} olarak verilmiştir. Aynı sayı başka bir tabloda 48 · 10^{b}, bir diğerinde 0,0048 · 10^{c} biçiminde yazılmıştır. Raporda verilen 4,8 · 10^{6} gösterimindeki üs a = 6'dır.\n**Buna göre a + b + c toplamı kaçtır?**",
  gorsel: null,
  secenekler: ["22", "20", "19", "14"],
  dogru: 1,
  hatalar: [
    "22: b'yi 7 bulma (6 + 7 + 9). Baştaki sayı 10 katına çıkarsa üs azalır; 4,8 → 48 geçişinde üs 5 olur.",
    null,
    "19: c'yi 8 bulma (6 + 5 + 8). 4,8 → 0,0048 geçişinde virgül 3 basamak kayar, üs 3 artar.",
    "14: c'yi 3 bulma (6 + 5 + 3). Baştaki sayı küçüldüğünde üs azalmaz, artar."
  ],
  aciklama: `Aynı sayıyı farklı biçimlerde yazarken baştaki sayı ile üs ters yönde değişir: baştaki sayı 10 katına çıkarsa üs 1 azalır, 10'a bölünürse üs 1 artar. Virgül kaç basamak kayarsa üs o kadar değişir.
Adım 1: 4,8 → 48 geçişinde baştaki sayı 10 katına çıktı; üs 6'dan 5'e iner, b = 5.
Adım 2: 4,8 → 0,0048 geçişinde baştaki sayı 1000'e bölündü; üs 6'dan 9'a çıkar, c = 9.
Adım 3: Topla: a + b + c = 6 + 5 + 9 = 20.
Sağlama: 48 · 10^{5} = 4 800 000 ve 0,0048 · 10^{9} = 4 800 000.
Sık yapılan hata: Baştaki sayı ile üsü aynı yönde değiştirmek.
Cevap B.`
},
{
  id: "mat-ui-367",
  kazanim: "M.8.1.2.4",
  kademe: 3,
  zorluk: 4,
  soru: "Bir matematik defterinde 0,00036 sayısı için altı farklı gösterim yazılmıştır. Gösterimler aşağıdaki tabloda verilmiştir.\n**Buna göre bu gösterimlerden kaç tanesi 0,00036 sayısına eşittir?**",
  gorsel: `<table class="tablo"><tr><th>Kart</th><th>Gösterim</th></tr><tr><td>1</td><td>36 · 10<sup>−5</sup></td></tr><tr><td>2</td><td>3,6 · 10<sup>−3</sup></td></tr><tr><td>3</td><td>0,36 · 10<sup>−3</sup></td></tr><tr><td>4</td><td>360 · 10<sup>−7</sup></td></tr><tr><td>5</td><td>3600 · 10<sup>−7</sup></td></tr><tr><td>6</td><td>0,36 · 10<sup>−2</sup></td></tr></table>`,
  secenekler: ["3", "4", "5", "6"],
  dogru: 0,
  hatalar: [
    null,
    "4: 4. kartı doğru sayma. 360 · 10^{−7} = 0,000036'dır; 0,00036 değil.",
    "5: Üssü yanlış olan iki kartı da doğru sayma. 2. ve 6. kartların değeri 0,0036'dır.",
    "6: Bütün kartların eşit olduğunu sanma. Her kartın üssü ile baştaki sayısı birlikte değerlendirilmelidir."
  ],
  aciklama: `Aynı sayı farklı biçimlerde yazılırken baştaki sayı ile üs ters yönde değişir. Her kartı, 0,00036 = 3,6 · 10^{−4} bilimsel gösterimiyle ve ondalık değeriyle karşılaştır.
Adım 1: 1. kart: 36 → 3,6 (10'a bölünmüş) için üs −5'ten −4'e çıkmalı; 36 · 10^{−5} = 0,00036. Eşit.
Adım 2: 2. kart: 3,6 · 10^{−3} = 0,0036. Eşit değil.
Adım 3: 3. kart: 0,36 · 10^{−3} = 0,00036. Eşit.
Adım 4: 4. kart: 360 · 10^{−7} = 0,000036. Eşit değil.
Adım 5: 5. kart: 3600 · 10^{−7} = 0,00036. Eşit.
Adım 6: 6. kart: 0,36 · 10^{−2} = 0,0036. Eşit değil.
Sonuç: 1., 3. ve 5. kartlar eşit olduğuna göre 3 tane vardır.
Sağlama: Eşit olanlarda baştaki sayı ve üs ters yönde ve aynı oranda değişmiştir.
Sık yapılan hata: Kartların yarısından fazlasını doğru saymak; her kart ayrı hesaplanmalıdır.
Cevap A.`
},
{
  id: "mat-ui-368",
  kazanim: "M.8.1.2.4",
  kademe: 3,
  zorluk: 4,
  soru: "Bir paketin kütlesi bir tabloda 7,5 · 10^{−2} kilogram, bir başka tabloda ise 75 · 10^{k} gram olarak yazılmıştır. (1 kilogram = 10^{3} gram)\n**Buna göre k kaçtır?**",
  gorsel: null,
  secenekler: ["−6", "−3", "−1", "0"],
  dogru: 3,
  hatalar: [
    "−6: Kilogramı grama çevirirken 10^{3}'e bölme. Gram, kilogramdan küçük birimdir; sayı büyümelidir.",
    "−3: Birim dönüşümünü hiç yapmama. 7,5 · 10^{−2} = 75 · 10^{−3} yalnızca sayıyı yeniden yazar, birimi çevirmez.",
    "−1: 1 kilogramı 100 gram sanma. Dönüşümde 10^{2} kullanılmış; doğrusu 10^{3}'tür.",
    null
  ],
  aciklama: `Kilogramdan grama geçerken sayı 10^{3} ile çarpılır. Sonra elde edilen sayı, baştaki sayı 75 olacak biçimde yeniden yazılır.
Adım 1: Grama çevir: 7,5 · 10^{−2} · 10^{3} = 7,5 · 10^{1} gram = 75 gram.
Adım 2: 75 sayısını 75 · 10^{k} biçiminde yaz: 75 = 75 · 10^{0}.
Adım 3: k = 0 bulunur.
Sağlama: 7,5 · 10^{−2} kg = 0,075 kg = 75 g ve 75 · 10^{0} = 75.
Sık yapılan hata: Birim dönüşümünü atlayıp yalnızca baştaki sayıya göre üs hesaplamak.
Cevap D.`
},
{
  id: "mat-ui-369",
  kazanim: "M.8.1.2.4",
  kademe: 3,
  zorluk: 4,
  soru: "Bir kuyumcu atölyesinde ince bir altın telin kütlesi hassas terazide 0,0036 kilogram olarak ölçülmüştür (1 kilogram = 10^{3} gram). Atölyenin takip programı, gram cinsinden girilen her kütleyi kaydetmeden önce 10^{−2} ile çarpmaktadır. Usta, telin kütlesini gram cinsinden programa girmiştir.\n**Buna göre programın kaydettiği değerin bilimsel gösterimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["3,6 · 10^{−8}", "3,6 · 10^{−5}", "3,6 · 10^{−2}", "3,6 · 10^{2}"],
  dogru: 2,
  hatalar: [
    "3,6 · 10^{−8}: Kilogramı grama çevirirken 10^{3} ile çarpmak yerine 10^{3} ile bölme: 3,6 · 10^{−3} · 10^{−3} · 10^{−2} = 3,6 · 10^{−8}. Kilogramdan grama geçerken sayı büyür.",
    "3,6 · 10^{−5}: Kilogramı grama çevirmeyi unutma. 0,0036 = 3,6 · 10^{−3} sayısı doğrudan 10^{−2} ile çarpılmış.",
    null,
    "3,6 · 10^{2}: 10^{−2} çarpanını 10^{2} gibi kullanma. Gram değeri olan 3,6 · 10^{0}, 10^{2} ile çarpılmış; çarpanın üssü −2'dir."
  ],
  aciklama: `Bilimsel gösterimde a · 10^{n} biçimi kullanılır; 1 ≤ a < 10 olmalıdır. Çarpmada 10'un kuvvetlerinin üsleri toplanır. Kilogramdan grama geçerken sayı 10^{3} ile çarpılır.
Adım 1: Kütleyi bilimsel yaz: 0,0036 kg = 3,6 · 10^{−3} kg (virgül 3 basamak sağa kayar).
Adım 2: Grama çevir: 3,6 · 10^{−3} · 10^{3} = 3,6 · 10^{0} = 3,6 g.
Adım 3: Programın çarpanını uygula: 3,6 · 10^{0} · 10^{−2} = 3,6 · 10^{−2}.
Sağlama: 3,6 g · 0,01 = 0,036 ve 3,6 · 10^{−2} = 0,036.
Sık yapılan hata: Birim dönüşümünü atlamak (3,6 · 10^{−5}) ya da dönüşüm yönünü ters almak.
Cevap C.`
},
{
  id: "mat-ui-370",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 4,
  soru: "Bir biyoloji kitabında bir virüsün çapı 8 · 10^{−5} milimetre, bir bakterinin çapı ise 2 · 10^{−6} metre olarak verilmiştir. (1 metre = 10^{3} milimetre)\n**Buna göre bakterinin çapı, virüsün çapının kaç katıdır?**",
  gorsel: null,
  secenekler: ["0,025", "0,04", "2,5", "25"],
  dogru: 3,
  hatalar: [
    "0,025: Birim dönüşümünü yapmama. Milimetre ile metre doğrudan oranlanmış: (2 · 10^{−6}) ÷ (8 · 10^{−5}).",
    "0,04: Oranı ters kurma. Bu, virüsün çapının bakterinin çapına oranıdır.",
    "2,5: 1 metreyi 100 milimetre sanma. Bakterinin çapı 2 · 10^{−4} mm bulunmuş; doğrusu 2 · 10^{−3} mm'dir.",
    null
  ],
  aciklama: `Oranlamadan önce iki uzunluğu da aynı birime çevir. Metreyi milimetreye çevirmek için sayı 10^{3} ile çarpılır. Sonra baştaki sayılar kendi arasında bölünür, 10'un kuvvetlerinin üsleri çıkarılır.
Adım 1: Bakterinin çapını mm'ye çevir: 2 · 10^{−6} · 10^{3} = 2 · 10^{−3} mm.
Adım 2: Oranı kur: (2 · 10^{−3}) ÷ (8 · 10^{−5}).
Adım 3: Baştaki sayıları böl: 2 ÷ 8 = 0,25. Üsleri çıkar: 10^{−3−(−5)} = 10^{2}.
Adım 4: Çarp: 0,25 · 100 = 25.
Sağlama: 25 · 8 · 10^{−5} = 200 · 10^{−5} = 2 · 10^{−3}.
Sık yapılan hata: Birimleri çevirmeden bölmek; farklı birimlerdeki sayılar doğrudan karşılaştırılamaz.
Cevap D.`
},
{
  id: "mat-ui-371",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 4,
  soru: "Bir laboratuvarda dört tozun kütlesi hassas terazide ölçülmüş, farklı birimlerle aşağıdaki tabloya yazılmıştır. (1 kg = 10^{3} g, 1 g = 10^{3} mg)\n**Buna göre kütlesi en küçük olan toz hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Toz</th><th>Ölçülen kütle</th></tr><tr><td>Kükürt</td><td>4,2 · 10<sup>−3</sup> kg</td></tr><tr><td>Çinko</td><td>5 · 10<sup>2</sup> mg</td></tr><tr><td>Bakır</td><td>7,5 · 10<sup>−1</sup> g</td></tr><tr><td>Demir</td><td>3 · 10<sup>4</sup> mg</td></tr></table>`,
  secenekler: ["Kükürt", "Demir", "Çinko", "Bakır"],
  dogru: 2,
  hatalar: [
    "Kükürt: Üssü en küçük olana bakma (−3). Birimler farklıyken üslere bakmak yanıltır; 4,2 · 10^{−3} kg = 4,2 g'dır.",
    "Demir: Baştaki sayısı en küçük olanı seçme (3). Demirin kütlesi 3 · 10^{4} mg = 30 g'dır ve en büyüktür.",
    null,
    "Bakır: Üssü −1 olduğu için küçük sanma. 7,5 · 10^{−1} g = 0,75 g'dır ve çinkodan büyüktür."
  ],
  aciklama: `Farklı birimlerle verilen kütleleri karşılaştırmak için hepsini aynı birime çevir. Burada gram seçmek kolaydır: 1 kg = 10^{3} g ve 1 mg = 10^{−3} g.
Adım 1: Kükürt: 4,2 · 10^{−3} kg = 4,2 · 10^{−3} · 10^{3} g = 4,2 g.
Adım 2: Çinko: 5 · 10^{2} mg = 5 · 10^{2} · 10^{−3} g = 5 · 10^{−1} g = 0,5 g.
Adım 3: Bakır: 7,5 · 10^{−1} g = 0,75 g. Demir: 3 · 10^{4} mg = 3 · 10^{1} g = 30 g.
Adım 4: Karşılaştır: 0,5 g < 0,75 g < 4,2 g < 30 g. En küçük kütle çinkodur.
Sağlama: Çinko 0,5 g ile, ölçülen en hafif tozdur.
Sık yapılan hata: Birimleri çevirmeden yalnızca üslere ya da baştaki sayılara bakmak.
Cevap C.`
},
{
  id: "mat-ui-372",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 4,
  soru: "Bir ağ bağlantısı saniyede 2,5 · 10^{7} bayt veri aktarmaktadır. Boyutu 6 · 10^{10} bayt olan bir dosya bu bağlantıyla indirilecektir.\n**Buna göre dosyanın indirilmesi kaç dakika sürer?**",
  gorsel: null,
  secenekler: ["40", "240", "400", "2 400"],
  dogru: 0,
  hatalar: [
    null,
    "240: Saniyeyi dakikaya çevirirken 60 yerine 10'a bölme. 2400 saniye 40 dakikadır.",
    "400: Saniyeyi dakikaya çevirirken 60 yerine 6'ya bölme. 1 dakika 60 saniyedir.",
    "2 400: Süreyi saniye cinsinden bırakma. Soru dakika cinsinden istiyor."
  ],
  aciklama: `Süre = veri boyutu ÷ aktarım hızıdır. Bilimsel gösterimde bölme yapılırken baştaki sayılar kendi arasında bölünür, 10'un kuvvetleri için üsler çıkarılır.
Adım 1: Süreyi saniye cinsinden bul: (6 · 10^{10}) ÷ (2,5 · 10^{7}) = 2,4 · 10^{3} saniye = 2400 saniye.
Adım 2: Dakikaya çevir (1 dakika = 60 saniye): 2400 ÷ 60 = 40 dakika.
Sağlama: 40 dakika = 2400 saniye ve 2400 · 2,5 · 10^{7} = 6 · 10^{10} bayt.
Sık yapılan hata: Saniyeyi dakikaya çevirmeyi unutmak ya da 60 yerine başka bir sayıyla bölmek.
Cevap A.`
},
{
  id: "mat-ui-373",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 4,
  soru: "Bir hayır kampanyasının kasasındaki para 4,5 · 10^{n} TL olarak yazılmıştır. Bu tutar 100 TL'den çok, 1 000 000 TL'den azdır. n bir tam sayıdır.\n**Buna göre n kaç farklı değer alabilir?**",
  gorsel: null,
  secenekler: ["3", "4", "5", "6"],
  dogru: 1,
  hatalar: [
    "3: n = 5 değerini dışarıda bırakma. 4,5 · 10^{5} = 450 000 TL, 1 000 000 TL'den azdır.",
    null,
    "5: n = 6 değerini de sayma. 4,5 · 10^{6} = 4 500 000 TL, 1 000 000 TL'den fazladır.",
    "6: n = 1 ve n = 6 değerlerini de sayma. 4,5 · 10^{1} = 45 TL, 100 TL'den azdır."
  ],
  aciklama: `Bilimsel gösterimde üs arttıkça sayı büyür. Sınırlara uyan en küçük ve en büyük üs değerini bulup aradaki tam sayıları say.
Adım 1: Alt sınırı denetle: n = 1 için 45 (100'den az, uygun değil); n = 2 için 450 (100'den çok, uygun).
Adım 2: Üst sınırı denetle: n = 5 için 450 000 (1 000 000'dan az, uygun); n = 6 için 4 500 000 (uygun değil).
Adım 3: n değerleri 2, 3, 4, 5'tir. Toplam 4 farklı değer vardır.
Sağlama: 450, 4500, 45 000 ve 450 000 sayıları 100 ile 1 000 000 arasındadır.
Sık yapılan hata: Sınır değerlerini deneyip sonuç tam sayı aralığını bir eksik ya da bir fazla saymak.
Cevap B.`
},
{
  id: "mat-ui-374",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 4,
  soru: "İki belediye kütüphanesinin geçen yıl ödünç verdiği kitap sayıları 4 · 10^{4} ve 1,5 · 10^{5} adettir. Kütüphane müdürü, iki kütüphane arasındaki ödünç farkının yarısını bilimsel gösterimle rapora yazacaktır.\n**Buna göre rapora yazılacak değer aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["5,5 · 10^{5}", "1,1 · 10^{5}", "5,5 · 10^{4}", "2 · 10^{4}"],
  dogru: 2,
  hatalar: [
    "5,5 · 10^{5}: 0,55 · 10^{5} sayısını bilimsel gösterime çevirirken virgülü kaydırıp üssü azaltmama. Baştaki sayı 1 ile 10 arasına gelirse üs 1 azalmalıdır.",
    "1,1 · 10^{5}: Farkın yarısını değil, farkın kendisini yazma. Soru farkın yarısını istiyor.",
    null,
    "2 · 10^{4}: Farkın yarısı yerine küçük değerin yarısını alma: 4 · 10^{4} ÷ 2. Soru iki değerin farkının yarısını istiyor."
  ],
  aciklama: `Bilimsel gösterimlerde çıkarma yapmak için iki sayı da 10'un aynı kuvvetine getirilir; sonra baştaki sayılar çıkarılır ve 10'un kuvveti aynen kalır.
Adım 1: Küçük sayıyı 10^{5} cinsinden yaz: 4 · 10^{4} = 0,4 · 10^{5}.
Adım 2: Farkı bul: 1,5 · 10^{5} − 0,4 · 10^{5} = 1,1 · 10^{5}.
Adım 3: Yarısını al: 1,1 · 10^{5} ÷ 2 = 0,55 · 10^{5}.
Adım 4: Baştaki sayıyı 1 ile 10 arasına getir: 0,55 · 10^{5} = 5,5 · 10^{4}.
Sağlama: 150 000 − 40 000 = 110 000; 110 000 ÷ 2 = 55 000 = 5,5 · 10^{4}.
Sık yapılan hata: Yarısını alırken ortaya çıkan 0,55 sayısını bilimsel gösterime çevirmeyi unutmak.
Cevap C.`
},
{
  id: "mat-ui-375",
  kazanim: "M.8.1.2.5",
  kademe: 3,
  zorluk: 4,
  soru: "Bir hayvanat bahçesinde bir filin kütlesi 6 · 10^{3} kilogram, bir karıncanın kütlesi ise 4 · 10^{−3} gramdır. (1 kilogram = 10^{3} gram)\n**Buna göre kaç karıncanın kütlesi bir filin kütlesine eşittir?**",
  gorsel: null,
  secenekler: ["1,5 · 10^{12}", "1,5 · 10^{9}", "1,5 · 10^{6}", "1,5 · 10^{3}"],
  dogru: 1,
  hatalar: [
    "1,5 · 10^{12}: Karıncanın kütlesini kilograma çevirirken fazladan bir çevirme daha yapma. Sonuç 10^{3} kat büyük çıkmıştır.",
    null,
    "1,5 · 10^{6}: Birim dönüşümünü hiç yapmama. 6 · 10^{3} ile 4 · 10^{−3} doğrudan oranlanmış; biri kilogram, diğeri gramdır.",
    "1,5 · 10^{3}: Gramı kilograma çevirirken yönü ters alma: karınca 4 kg gibi hesaplanmış. Gram kilogramdan küçük birimdir."
  ],
  aciklama: `Kaç karınca sorusu bölmeyle çözülür; ama önce iki kütle de aynı birime çevrilmelidir. Kilogramı grama çevirmek için 10^{3} ile çarp.
Adım 1: Filin kütlesini grama çevir: 6 · 10^{3} · 10^{3} = 6 · 10^{6} gram.
Adım 2: Oranı kur: (6 · 10^{6}) ÷ (4 · 10^{−3}).
Adım 3: Baştaki sayıları böl: 6 ÷ 4 = 1,5. Üsleri çıkar: 10^{6−(−3)} = 10^{9}.
Adım 4: Sonuç 1,5 · 10^{9} karıncadır.
Sağlama: 1,5 · 10^{9} · 4 · 10^{−3} = 6 · 10^{6} gramdır.
Sık yapılan hata: Birimleri çevirmeden bölmek ya da dönüşümü ters yönde yapmak.
Cevap B.`
}
);
