// Matematik — Üslü İfadeler: Kademe 2 (Pekiştirme) yedeği (226-275)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["uslu-ifadeler"] = window.LGS_BANK["uslu-ifadeler"] || []).push(
{
  id: "mat-ui-226",
  kazanim: "M.8.1.2.1",
  kademe: 2,
  zorluk: 2,
  soru: "Matematik kulübünün bulmaca kartında bir işlem verilmiş ve sonucun kasanın şifresi olacağı söylenmiştir. Kartta yazan işlem şudur: (−2)^{5} + 3^{2}\n**Buna göre bu işlemin sonucu kaçtır?**",
  gorsel: null,
  secenekler: ["−41", "−32", "−23", "41"],
  dogru: 2,
  hatalar: [
    "Pozitif tabanı negatif alma: 3^{2} sayısı −9 yazılmış; oysa pozitif tabanın kuvveti pozitiftir.",
    "Son adımı atlama: yalnızca (−2)^{5} = −32 bulunmuş, 3^{2} = 9 ile toplama yapılmamış.",
    null,
    "Negatif tabanın tek kuvvetinde işareti kaybetme: (−2)^{5} sonucu +32 sanılmış."
  ],
  aciklama: `Negatif tabanın tek kuvveti negatif, çift kuvveti pozitiftir.
Adım 1: (−2)^{5} = (−2) · (−2) · (−2) · (−2) · (−2). Çarpan sayısı 5, yani tek olduğundan sonuç negatiftir: −32.
Adım 2: 3^{2} = 9.
Adım 3: Topla: −32 + 9 = −23.
Sağlama: −32 üzerine 9 eklemek sayıyı sıfıra 9 birim yaklaştırır: −23.
Sık yapılan hata: Üssün tek ya da çift olduğuna bakmadan işareti belirlemek.
Cevap C.`
},
{
  id: "mat-ui-227",
  kazanim: "M.8.1.2.2",
  kademe: 2,
  zorluk: 2,
  soru: "Bir şifreleme yazılımı, girilen kodu 2^{9} · 2^{−4} ÷ 2^{3} işleminden geçirerek anahtar üretmektedir. Anahtar, 2'nin bir kuvveti olarak ekranda görünür.\n**Buna göre ekranda görünen anahtar aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2^{2}", "2^{8}", "2^{10}", "2^{16}"],
  dogru: 0,
  hatalar: [
    null,
    "Bölmede üsleri toplama: 9 − 4 + 3 = 8 alınmış.",
    "Negatif üssü pozitif alma: 9 + 4 − 3 = 10 alınmış.",
    "Bütün üsleri toplama: 9 + 4 + 3 = 16 alınmış."
  ],
  aciklama: `Aynı tabanlı çarpmada üsler toplanır, bölmede çıkarılır. Negatif üs de aynı kurala girer.
Adım 1: Soldan sağa işle: 2^{9} · 2^{−4} = 2^{9+(−4)} = 2^{5}.
Adım 2: 2^{5} ÷ 2^{3} = 2^{5−3} = 2^{2}.
Sağlama: Tek hamlede üsler 9 + (−4) − 3 = 2.
Sık yapılan hata: −4 üssünü 4 gibi toplamak. Üssün işareti işleme dahildir.
Cevap A.`
},
{
  id: "mat-ui-228",
  kazanim: "M.8.1.2.3",
  kademe: 2,
  zorluk: 2,
  soru: "Bir akıllı terazi, tarttığı malzemenin kütlesini kilogram cinsinden çözümlenmiş olarak ekrana yazmaktadır. Bir tartımda ekranda 6 · 10^{2} + 5 · 10^{0} + 8 · 10^{−1} yazmıştır.\n**Buna göre tartılan kütle kaç kilogramdır?**",
  gorsel: null,
  secenekler: ["6,58", "65,8", "605,08", "605,8"],
  dogru: 3,
  hatalar: [
    "Terimleri bir basamak kaydırma: ilk terim birler basamağına konmuş, 6,58 bulunmuş.",
    "Yüzler basamağını onlar basamağı sanma: 6 · 10^{2} yerine 6 · 10^{1} alınmış.",
    "Onda birler basamağını yüzde birler basamağı sanma: 8 · 10^{−1} yerine 8 · 10^{−2} alınmış.",
    null
  ],
  aciklama: `Çözümlemede her terim, rakamın kendi basamağındaki değerini verir: 10^{2} yüzler, 10^{1} onlar, 10^{0} birler, 10^{−1} onda birler basamağıdır.
Adım 1: 6 · 10^{2} = 600.
Adım 2: 5 · 10^{0} = 5.
Adım 3: 8 · 10^{−1} = 0,8.
Adım 4: Topla: 600 + 5 + 0,8 = 605,8. Yazılmayan onlar basamağına 0 gelir.
Sağlama: 605,8 sayısının yüzler basamağı 6, onlar 0, birler 5, onda birler 8'dir.
Sık yapılan hata: Yazılmayan basamağı hiç saymayıp rakamları kaydırmak.
Cevap D.`
},
{
  id: "mat-ui-229",
  kazanim: "M.8.1.2.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir ilçe kütüphanesinde 35 000 kitap vardır. Kütüphane görevlisi bu sayıyı, değeri değişmeyecek biçimde 0,35 · 10^{5} = 35 · 10^{n} şeklinde yazmıştır.\n**Buna göre n tam sayısı kaçtır?**",
  gorsel: null,
  secenekler: ["2", "3", "4", "5"],
  dogru: 1,
  hatalar: [
    "Üssü gereğinden fazla azaltma: 0,35'ten 35'e geçiş 100 kat büyümedir, üs 3 olmalıdır; 2 olamaz.",
    null,
    "Üssü yalnızca 1 azaltma: baştaki sayı 100 kat büyüdüğü hâlde üs bir basamak azaltılmış.",
    "Üssü değiştirmeme: baştaki sayı büyüdüğü hâlde 10'un kuvveti aynı bırakılmış."
  ],
  aciklama: `Baştaki sayı 10 kat büyürse 10'un üssü 1 azalmalıdır; böylece sayının değeri korunur.
Adım 1: Küçük sayıdan büyüğe gidişi say: 0,35 → 3,5 → 35. Baştaki sayı 100 kat büyümüştür.
Adım 2: Üs 2 azalmalıdır: 5 − 2 = 3.
Sağlama: 35 · 10^{3} = 35 000 ve 0,35 · 10^{5} = 35 000. Eşit.
Sık yapılan hata: Baştaki sayıyı büyütüp üssü aynı bırakmak.
Cevap B.`
},
{
  id: "mat-ui-230",
  kazanim: "M.8.1.2.5",
  kademe: 2,
  zorluk: 2,
  soru: "Bir biyoloji kitabında bir polen tanesinin çapı 3,8 · 10^{−5} metre olarak verilmiştir. Öğrenciler bu uzunluğu ondalık gösterimle yazacaktır.\n**Buna göre polen tanesinin çapı ondalık gösterimle kaç metredir?**",
  gorsel: null,
  secenekler: ["0,0000038", "0,000038", "0,00038", "380 000"],
  dogru: 1,
  hatalar: [
    "Virgülü bir basamak fazla kaydırma: 6 basamak kaydırılmış.",
    null,
    "Virgülü bir basamak eksik kaydırma: 4 basamak kaydırılmış.",
    "Üssün işaretini ters okuma: negatif üs, sayıyı büyütmez; küçültür."
  ],
  aciklama: `Negatif üs, sayıyı küçültür: 10^{−5}, virgülü sola 5 basamak kaydırmak demektir.
Adım 1: 3,8 sayısında virgülü sola 5 basamak kaydır: 3,8 → 0,38 → 0,038 → 0,0038 → 0,00038 → 0,000038.
Sağlama: 0,000038 sayısı 3,8'in 100 000'de biridir.
Sık yapılan hata: Kaydırma sayısını yanlış saymak. Virgülün önüne gelen sıfırları tek tek yaz.
Cevap B.`
},
{
  id: "mat-ui-231",
  kazanim: "M.8.1.2.5",
  kademe: 2,
  zorluk: 2,
  soru: "Kurgusal bir bilim kurgu oyununda dört gezegen kolonisinin nüfusu aşağıda verilmiştir: K: 9,5 · 10^{6}, L: 85 · 10^{5}, M: 1,2 · 10^{7}, N: 0,9 · 10^{8}.\n**Buna göre hangi kolonin nüfusu en fazladır?**",
  gorsel: null,
  secenekler: ["K", "L", "M", "N"],
  dogru: 3,
  hatalar: [
    "Yalnızca başkatsayıya bakma: 9,5 sayısı 1,2 ve 0,9'dan büyük göründüğü için K seçilmiş; 10'un üssü hesaba katılmamış.",
    "Başkatsayısı en büyük sayıyı seçme: 85, listedeki en büyük sayı gibi görünür; ancak 10^{5} çarpanı vardır.",
    "Bilimsel gösterim olmayanı eleme: N, başkatsayısı 1'den küçük olduğu için dışarıda bırakılmış; M seçilmiş.",
    null
  ],
  aciklama: `Ortak biçimde yazmadan karşılaştırma yapılmaz. En kolay yol hepsini a · 10^{n} biçimine getirmektir.
Adım 1: K = 9,5 · 10^{6}.
Adım 2: L = 85 · 10^{5} = 8,5 · 10^{6}.
Adım 3: M = 1,2 · 10^{7}.
Adım 4: N = 0,9 · 10^{8} = 9 · 10^{7}.
Adım 5: Üsler 6, 6, 7, 7. En büyük üs 7'de başkatsayılar 1,2 ve 9; büyük olan 9 · 10^{7}, yani N.
Sağlama: N = 90 000 000, M = 12 000 000.
Sık yapılan hata: Başkatsayı 1'den küçük diye ifadeyi dışlamak.
Cevap D.`
},
{
  id: "mat-ui-232",
  kazanim: "M.8.1.2.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir kart oyununda iki kart çekilir; kartların çarpımı oyuncunun puanıdır. Birinci kartta (−2)^{3}, ikinci kartta 3^{2} yazmaktadır.\n**Buna göre oyuncunun puanı kaçtır?**",
  gorsel: null,
  secenekler: ["−72", "−54", "−48", "72"],
  dogru: 0,
  hatalar: [
    null,
    "Birinci kartı üsle çarpma: (−2)^{3} yerine −6 alınmış; −6 · 9 = −54 bulunmuş.",
    "İkinci kartı üsle çarpma: 3^{2} yerine 3 · 2 = 6 alınmış; −8 · 6 = −48 bulunmuş.",
    "Negatif tabanın tek kuvvetinde işareti kaybetme: (−2)^{3} sonucu +8 sanılmış."
  ],
  aciklama: `Önce her kartın değerini bul, sonra çarp.
Adım 1: (−2)^{3} = (−2) · (−2) · (−2) = −8 (üs tek olduğu için negatif).
Adım 2: 3^{2} = 9.
Adım 3: Çarp: −8 · 9 = −72.
Sağlama: 8 · 9 = 72 ve işaret negatiftir.
Sık yapılan hata: Üssü tabanla çarpmak. 3^{2} sayısı 6 değil 9'dur.
Cevap A.`
},
{
  id: "mat-ui-233",
  kazanim: "M.8.1.2.2",
  kademe: 2,
  zorluk: 2,
  soru: "Bir bilgisayar dersinde (2^{4})^{2} ÷ 2^{5} işlemi tahtaya yazılmış ve sonucun 2'nin kuvveti olarak yazılması istenmiştir.\n**Buna göre sonuç aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2^{−2}", "2^{1}", "2^{3}", "2^{8}"],
  dogru: 2,
  hatalar: [
    "İşlem sırasını bozma: önce 4 − 5 = −1 yapılıp sonra 2 ile çarpılmış.",
    "Üssün üssünde üsleri toplama: 4 + 2 = 6 alınıp 6 − 5 = 1 bulunmuş.",
    null,
    "Son adımı atlama: (2^{4})^{2} = 2^{8} bulunmuş ama 2^{5}'e bölme yapılmamış."
  ],
  aciklama: `Üssün üssü alınırken üsler çarpılır: (a^{n})^{m} = a^{n·m}. Aynı tabanlı bölmede üsler çıkarılır.
Adım 1: (2^{4})^{2} = 2^{4·2} = 2^{8}.
Adım 2: 2^{8} ÷ 2^{5} = 2^{8−5} = 2^{3}.
Sağlama: 256 ÷ 32 = 8 = 2^{3}.
Sık yapılan hata: Üssün üssünde üsleri toplamak.
Cevap C.`
},
{
  id: "mat-ui-234",
  kazanim: "M.8.1.2.3",
  kademe: 2,
  zorluk: 2,
  soru: "Sınıf panosunda bir sayının çözümlenmesi yazılmış, bir terim silinmiştir: 35,206 = 3 · 10^{1} + 5 · 10^{0} + ▢ + 6 · 10^{−3}\n**Buna göre silinen terim aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2 · 10^{−3}", "2 · 10^{−2}", "2 · 10^{−1}", "2 · 10^{0}"],
  dogru: 2,
  hatalar: [
    "Aynı basamağı iki kez kullanma: 10^{−3}, 6 rakamının basamağıdır.",
    "Sıfır rakamını sayarak basamağı bir kaydırma: 2, yüzde birler değil onda birler basamağındadır.",
    null,
    "Birler basamağını tekrar kullanma: 10^{0} terimi zaten 5 · 10^{0} olarak yazılmıştır."
  ],
  aciklama: `Virgülden sonra ilk basamak onda birler (10^{−1}), ikinci yüzde birler (10^{−2}), üçüncü binde birler (10^{−3}) basamağıdır.
Adım 1: 35,206 sayısında virgülden sonra 2, 0, 6 rakamları gelir.
Adım 2: 2 onda birler basamağındadır; terimi 2 · 10^{−1}. 0'lı terim yazılmaz, 6 · 10^{−3} yazılmıştır.
Sağlama: 30 + 5 + 0,2 + 0,006 = 35,206.
Sık yapılan hata: Terimleri sıraya sokarken basamakları kaydırmak.
Cevap C.`
},
{
  id: "mat-ui-235",
  kazanim: "M.8.1.2.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir müzeyi geçen yıl 72 000 kişi ziyaret etmiştir. Müze rehberi bu sayıyı dört farklı biçimde yazmıştır; bunlardan üçü 72 000'e eşittir, biri eşit değildir.\n**Buna göre rehberin yazdığı aşağıdaki gösterimlerden hangisi 72 000 sayısına __eşit değildir__?**",
  gorsel: null,
  secenekler: ["0,72 · 10^{4}", "7,2 · 10^{4}", "72 · 10^{3}", "720 · 10^{2}"],
  dogru: 0,
  hatalar: [
    null,
    "Virgülün kayma sayısını yanlış sayma: 7,2 · 10^{4} sayısı 72 000 olduğu hâlde 7 200 sanılmış.",
    "Üssün sıfır sayısını verdiğini unutma: 72 · 10^{3} sayısı 72 000 olduğu hâlde 7 200 sanılmış.",
    "Sıfır eklemeyi yanlış yapma: 720 · 10^{2} sayısı 72 000 olduğu hâlde 7 200 sanılmış."
  ],
  aciklama: `Bir sayı, baştaki sayı 10 kat büyürken üssü 1 azaltılarak, 10 kat küçülürken üssü 1 artırılarak farklı yazılır; sayının değeri değişmez. Hesap yaparak her gösterimin değerini bul.
Adım 1: 7,2 · 10^{4} = 7,2 · 10 000 = 72 000.
Adım 2: 72 · 10^{3} = 72 · 1000 = 72 000.
Adım 3: 720 · 10^{2} = 720 · 100 = 72 000.
Adım 4: 0,72 · 10^{4} = 0,72 · 10 000 = 7 200. Bu değer 72 000 değildir; 0,72 · 10^{5} yazılsaydı eşit olurdu.
Sağlama: 72 000 = 0,72 · 10^{5} = 7,2 · 10^{4} = 72 · 10^{3} = 720 · 10^{2}.
Sık yapılan hata: Üssü sıfır sayısı sanıp çarpmayı yanlış yapmak; her seçeneği ayrı ayrı hesapla.
Cevap A.`
},
{
  id: "mat-ui-236",
  kazanim: "M.8.1.2.1",
  kademe: 2,
  zorluk: 2,
  soru: "Matematik panosuna bir kesrin negatif kuvveti asılmıştır: ([[3|2]])^{−2}\n**Buna göre bu ifadenin değeri aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["−[[9|4]]", "[[4|9]]", "[[3|4]]", "[[9|4]]"],
  dogru: 1,
  hatalar: [
    "Negatif üssü işaret sanma: üs negatif diye sonuç negatif yazılmış.",
    null,
    "Üssü yalnızca paydaya uygulama: kesir ters çevrilmiş ama pay kuvvetsiz bırakılmış.",
    "Kesri ters çevirmeme: yalnızca üs pozitif yapılmış, 9/4 bulunmuş."
  ],
  aciklama: `Bir kesrin negatif kuvvetinde kesir ters çevrilir ve üs pozitif olur: ([[a|b]])^{−n} = ([[b|a]])^{n}.
Adım 1: Kesri ters çevir: ([[3|2]])^{−2} = ([[2|3]])^{2}.
Adım 2: Üs hem paya hem paydaya uygulanır: [[2^{2}|3^{2}]] = [[4|9]].
Sağlama: ([[3|2]])^{2} = [[9|4]] sayısının çarpmaya göre tersi [[4|9]]'dur.
Sık yapılan hata: Negatif üssü sonuca eksi işareti olarak taşımak.
Cevap B.`
},
{
  id: "mat-ui-237",
  kazanim: "M.8.1.2.2",
  kademe: 2,
  zorluk: 2,
  soru: "Bir kulüp kasasının kodu 25^{3} · 5^{2} işleminin sonucudur. Kulüp başkanı sonucu 5'in bir kuvveti olarak yazmıştır.\n**Buna göre başkanın yazdığı kuvvet aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["5^{5}", "5^{6}", "5^{7}", "5^{8}"],
  dogru: 3,
  hatalar: [
    "Tabanı çevirirken üssü unutma: 25^{3} yerine 5^{3} yazılmış.",
    "İkinci çarpanı unutma: yalnızca 25^{3} = 5^{6} alınmış.",
    "Üssün üssünde üsleri toplama: 25^{3} yerine 5^{2+3} alınmış.",
    null
  ],
  aciklama: `Tabanları eşitlemeden üsler toplanamaz. 25 = 5^{2} olduğundan 25 sayısını 5'in kuvveti olarak yaz.
Adım 1: 25^{3} = (5^{2})^{3} = 5^{6}.
Adım 2: 5^{6} · 5^{2} = 5^{6+2} = 5^{8}.
Sağlama: 25^{3} = 15 625 = 5^{6} ve 15 625 · 25 = 390 625 = 5^{8}.
Sık yapılan hata: 25 sayısını 5^{2} yazıp üssü çarpmayı unutmak.
Cevap D.`
},
{
  id: "mat-ui-238",
  kazanim: "M.8.1.2.3",
  kademe: 2,
  zorluk: 2,
  soru: "Bir lazer mesafe ölçer, iki nokta arasındaki uzaklığı metre cinsinden çözümlenmiş biçimde göstermektedir: 8 · 10^{2} + 4 · 10^{−1} + 9 · 10^{−3}\n**Buna göre iki nokta arasındaki uzaklık kaç metredir?**",
  gorsel: null,
  secenekler: ["8,409", "80,409", "800,049", "800,409"],
  dogru: 3,
  hatalar: [
    "Yüzler basamağını birler basamağı sanma: 8 · 10^{2} yerine 8 · 10^{0} alınmış.",
    "Yüzler basamağını onlar basamağı sanma: 8 · 10^{2} yerine 8 · 10^{1} alınmış.",
    "Onda birler basamağını yüzde birler basamağı sanma: 4 · 10^{−1} yerine 4 · 10^{−2} alınmış.",
    null
  ],
  aciklama: `Her terimin üssü, rakamın bulunduğu basamağı gösterir.
Adım 1: 8 · 10^{2} = 800.
Adım 2: 4 · 10^{−1} = 0,4.
Adım 3: 9 · 10^{−3} = 0,009.
Adım 4: Topla: 800 + 0,4 + 0,009 = 800,409. Yüzde birler basamağı boş olduğu için oraya 0 yazılır.
Sağlama: 800,409 sayısında binde birler basamağındaki rakam 9'dur.
Sık yapılan hata: Boş basamağı atlayıp rakamları yan yana kaydırmak.
Cevap D.`
},
{
  id: "mat-ui-239",
  kazanim: "M.8.1.2.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir spor kulübü, stadyumunun kapasitesini milyon biriminde, yani a · 10^{6} biçiminde göstermek istiyor. Stadyumun kapasitesi 250 000 kişidir.\n**Buna göre a kaçtır?**",
  gorsel: null,
  secenekler: ["0,25", "2,5", "25", "250"],
  dogru: 0,
  hatalar: [
    null,
    "Başkatsayıyı 1 ile 10 arasına zorlama: 250 000 = 2,5 · 10^{5} yazılmış, ancak üs 10^{6} olarak istenmiştir.",
    "Üssü değiştirmeme: 25 · 10^{4} biçimindeki baştaki sayı alınmış.",
    "Üssü ters yönde değiştirme: 250 · 10^{3} biçimindeki baştaki sayı alınmış."
  ],
  aciklama: `Üssü 10^{6} olarak verilen biçimde baştaki sayı 1'den küçük çıkabilir. 10'un üssünü büyüttükçe baştaki sayı küçülür.
Adım 1: 250 000 = 250 · 10^{3}.
Adım 2: Üssü 3'ten 6'ya çıkarmak için baştaki sayıyı 1000'e böl: 250 ÷ 1000 = 0,25.
Sağlama: 0,25 · 10^{6} = 0,25 · 1 000 000 = 250 000.
Sık yapılan hata: Üssü büyütüp baştaki sayıyı da büyütmek.
Cevap A.`
},
{
  id: "mat-ui-240",
  kazanim: "M.8.1.2.5",
  kademe: 2,
  zorluk: 2,
  soru: "Kurgusal bir biyoloji ödevinde dört mikroorganizmanın boyu metre cinsinden verilmiştir: K: 2 · 10^{−6}, L: 1,5 · 10^{−5}, M: 9 · 10^{−7}, N: 4 · 10^{−6}.\n**Buna göre hangi mikroorganizma en kısadır?**",
  gorsel: null,
  secenekler: ["K", "L", "M", "N"],
  dogru: 2,
  hatalar: [
    "Yalnızca başkatsayıya bakma: 2 en küçük başkatsayı sanılıp K seçilmiş.",
    "Üssün yönünü ters okuma: −5, en büyük üs olduğu için L en küçük sanılmış.",
    null,
    "Üssü gözden kaçırma: 4 · 10^{−6} değeri 9 · 10^{−7}'den küçük sanılmış."
  ],
  aciklama: `Bilimsel gösterimde önce 10'un üssüne bakılır. Üs küçüldükçe sayı küçülür; üsler eşitse başkatsayı karşılaştırılır.
Adım 1: Üsleri sırala: −7 (M), −6 (K, N), −5 (L). En küçük üs −7'dir.
Adım 2: En küçük üs M'de olduğundan M en küçüktür; başkatsayısı 9 olsa da 10^{−7} çarpanı onu küçültür.
Sağlama: M = 0,0000009, K = 0,000002. M daha küçüktür.
Sık yapılan hata: Başkatsayısı küçük olanı en küçük sanmak.
Cevap C.`
},
{
  id: "mat-ui-241",
  kazanim: "M.8.1.2.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir gün sayma etkinliğinde kartta şu ifade yazılıdır: (−1)^{2027} + (−1)^{2028}\n**Buna göre bu ifadenin değeri kaçtır?**",
  gorsel: null,
  secenekler: ["−2", "0", "1", "2"],
  dogru: 1,
  hatalar: [
    "Çift üssü tek üs gibi işleme sokma: iki terim de −1 alınmış.",
    null,
    "İlk terimi hesaba katmama: yalnızca (−1)^{2028} = 1 alınmış.",
    "Tek üssü çift üs gibi işleme sokma: iki terim de +1 alınmış."
  ],
  aciklama: `(−1) sayısının tek kuvveti −1, çift kuvveti +1'dir.
Adım 1: 2027 tek sayıdır; (−1)^{2027} = −1.
Adım 2: 2028 çift sayıdır; (−1)^{2028} = 1.
Adım 3: Topla: −1 + 1 = 0.
Sağlama: Art arda iki kuvvet birbirini götürür.
Sık yapılan hata: Üssün büyüklüğünden korkup işareti belirlememek; yalnızca üssün tek ya da çift olması önemlidir.
Cevap B.`
},
{
  id: "mat-ui-242",
  kazanim: "M.8.1.2.2",
  kademe: 2,
  zorluk: 2,
  soru: "Bir yarışma programında puan, (3^{4})^{2} ÷ (3^{2})^{4} işleminin sonucu olarak hesaplanmaktadır.\n**Buna göre yarışmacının puanı aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["1", "3^{2}", "3^{6}", "3^{16}"],
  dogru: 0,
  hatalar: [
    null,
    "Üsleri çarpmak yerine çıkarma: 4 − 2 = 2 alınmış.",
    "Üssün üssünde üsleri toplama: 4 + 2 = 6 alınmış.",
    "Bölmede üsleri toplama: 8 + 8 = 16 alınmış."
  ],
  aciklama: `Üssün üssü alınırken üsler çarpılır, bölmede üsler çıkarılır.
Adım 1: (3^{4})^{2} = 3^{8}.
Adım 2: (3^{2})^{4} = 3^{8}.
Adım 3: 3^{8} ÷ 3^{8} = 3^{8−8} = 3^{0} = 1.
Sağlama: Aynı sayıyı kendisine bölmek 1'i verir.
Sık yapılan hata: 3^{0} sayısını 0 sanmak. Sıfırdan farklı sayının 0. kuvveti 1'dir.
Cevap A.`
},
{
  id: "mat-ui-243",
  kazanim: "M.8.1.2.3",
  kademe: 2,
  zorluk: 2,
  soru: "Bir akıllı saatin ekranında bakiye 505,05 TL olarak görünmüştür. Öğretmen, bu sayıdaki baştaki 5 rakamının basamak değerinin sondaki 5 rakamının basamak değerine oranını sormuştur.\n**Buna göre baştaki 5'in değeri sondaki 5'in değerinin kaç katıdır?**",
  gorsel: null,
  secenekler: ["10", "100", "1000", "10 000"],
  dogru: 3,
  hatalar: [
    "Komşu basamak sanma: iki 5 rakamının yan yana olduğu sanılmış.",
    "Üslerden yalnızca birini alma: 10^{2} bulunmuş, diğer üs hesaba katılmamış.",
    "Aradaki basamak sayısını üs sanma: 3 basamak ara alınmış, oysa üs farkı 4'tür.",
    null
  ],
  aciklama: `Bir rakamın basamak değeri, rakam ile basamağın 10'un kuvvetinin çarpımıdır.
Adım 1: Baştaki 5 yüzler basamağındadır: 5 · 10^{2} = 500.
Adım 2: Sondaki 5 yüzde birler basamağındadır: 5 · 10^{−2} = 0,05.
Adım 3: Oranla: 500 ÷ 0,05 = 10 000, yani 10^{2} ÷ 10^{−2} = 10^{2−(−2)} = 10^{4}.
Sağlama: 0,05 · 10 000 = 500.
Sık yapılan hata: Negatif üsü çıkarırken işareti kaybetmek: 2 − 2 = 0 bulmak.
Cevap D.`
},
{
  id: "mat-ui-244",
  kazanim: "M.8.1.2.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir saç telinin kalınlığı 3,4 · 10^{−5} metredir. Mikrometre (μm) biriminde 1 μm = 10^{−6} metredir.\n**Buna göre bu saç telinin kalınlığı kaç mikrometredir?**",
  gorsel: null,
  secenekler: ["0,34", "3,4", "34", "340"],
  dogru: 2,
  hatalar: [
    "Çevirmeyi ters yönde yapma: büyük birim küçük birime çevrilirken sayının büyümesi gerekirken küçültülmüş.",
    "Üs farkını bir eksik bulma: 10^{−5} ile 10^{−6} arasındaki fark 1 basamak sanılmış.",
    null,
    "Üs farkını bir fazla bulma: 10^{2} gibi işlem yapılmış."
  ],
  aciklama: `1 μm = 10^{−6} m olduğundan metre cinsinden değeri μm'ye çevirmek için 10^{−6}'ya bölmek gerekir.
Adım 1: (3,4 · 10^{−5}) ÷ 10^{−6} = 3,4 · 10^{−5−(−6)} = 3,4 · 10^{1}.
Adım 2: 3,4 · 10^{1} = 34.
Sağlama: 34 μm = 34 · 10^{−6} m = 3,4 · 10^{−5} m.
Sık yapılan hata: Üs farkında negatif işaretini kaybetmek.
Cevap C.`
},
{
  id: "mat-ui-245",
  kazanim: "M.8.1.2.5",
  kademe: 2,
  zorluk: 2,
  soru: "Bir müzeyi günde 3 · 10^{4} kişi ziyaret etmektedir. Müze, bir etkinlik döneminde 4 · 10^{2} gün açık kalmıştır.\n**Buna göre bu dönemde müzeyi toplam kaç kişi ziyaret etmiştir? (Sonucu bilimsel gösterimle yazınız.)**",
  gorsel: null,
  secenekler: ["7 · 10^{6}", "1,2 · 10^{7}", "1,2 · 10^{8}", "12 · 10^{8}"],
  dogru: 1,
  hatalar: [
    "Çarpma yerine toplama: baştaki sayılar ve üsler toplanmış.",
    null,
    "Bilimsel gösterimi düzeltirken üssü yanlış artırma: 12 · 10^{6} yazılırken üs 2 artırılmış.",
    "Çarpmada üsleri çarpma: 4 · 2 = 8 alınmış ve 12 baştaki sayı olarak bırakılmış."
  ],
  aciklama: `Bilimsel gösterimde çarpma yapılırken baştaki sayılar çarpılır, 10'un üsleri toplanır; sonra baştaki sayı 1 ile 10 arasına getirilir.
Adım 1: Baştaki sayıları çarp: 3 · 4 = 12.
Adım 2: Üsleri topla: 10^{4} · 10^{2} = 10^{6}.
Adım 3: 12 · 10^{6} sonucunda 12, 10'dan büyüktür; 1,2 · 10 yazılır: 1,2 · 10^{1} · 10^{6} = 1,2 · 10^{7}.
Sağlama: 30 000 · 400 = 12 000 000 = 1,2 · 10^{7}.
Sık yapılan hata: 12 · 10^{6} ifadesini bilimsel gösterim saymak.
Cevap B.`
},
{
  id: "mat-ui-246",
  kazanim: "M.8.1.2.1",
  kademe: 2,
  zorluk: 2,
  soru: "Kerem, matematik defterine yazdığı −2^{4} ifadesinin değerini hesap makinesi kullanmadan bulmaya çalışıyor.\n**Buna göre −2^{4} ifadesinin değeri kaçtır?**",
  gorsel: null,
  secenekler: ["−16", "−8", "8", "16"],
  dogru: 0,
  hatalar: [
    null,
    "Üssü tabanla çarpma: 2 · 4 = 8 bulunmuş ve eksi işareti dışarıda bırakılmış.",
    "Üssü tabanla çarpıp işareti kaybetme: 2 · 4 = 8 alınmış, eksi işareti unutulmuş.",
    "Parantez varmış gibi hesaplama: eksi işareti de kuvvete sokulmuş, (−2)^{4} = 16 bulunmuş."
  ],
  aciklama: `Parantez yoksa üs yalnızca kendisinden önceki sayıya etki eder; eksi işareti dışarıda kalır.
Adım 1: Önce üssü hesapla: 2^{4} = 2 · 2 · 2 · 2 = 16.
Adım 2: Sonra eksi işaretini koy: −16.
Sağlama: (−2)^{4} = 16 ama −2^{4} = −16. İkisi farklı ifadelerdir.
Sık yapılan hata: Parantezi olmayan ifadede eksi işaretini kuvvete katmak.
Cevap A.`
},
{
  id: "mat-ui-247",
  kazanim: "M.8.1.2.2",
  kademe: 2,
  zorluk: 2,
  soru: "Matematik öğretmeni tahtaya 3^{−4} yazmış ve bu ifadeye eşit olan değeri bulmalarını istemiştir.\n**Buna göre 3^{−4} ifadesi aşağıdakilerden hangisine eşittir?**",
  gorsel: null,
  secenekler: ["−81", "−12", "[[1|81]]", "[[1|12]]"],
  dogru: 2,
  hatalar: [
    "Negatif üssü eksi işaret sanma: 3^{4} = 81 bulunup başına eksi konmuş.",
    "Üssü tabanla çarpıp eksi alma: 3 · 4 = 12 hesaplanıp işaret negatif yapılmış.",
    null,
    "Üssü tabanla çarpma: 3 · 4 = 12 alınıp tersi yazılmış."
  ],
  aciklama: `Negatif üs, tabanın çarpmaya göre tersini gösterir: a^{−n} = [[1|a^{n}]].
Adım 1: 3^{−4} = [[1|3^{4}]].
Adım 2: 3^{4} = 3 · 3 · 3 · 3 = 81.
Adım 3: Sonuç [[1|81]].
Sağlama: 3^{−4} · 3^{4} = 3^{0} = 1 olmalıdır; [[1|81]] · 81 = 1.
Sık yapılan hata: Negatif üssü sonucu negatif yapan işaret sanmak.
Cevap C.`
},
{
  id: "mat-ui-248",
  kazanim: "M.8.1.2.3",
  kademe: 2,
  zorluk: 2,
  soru: "Bir bisiklet yarışının sonuç ekranında bir sporcunun etap süresi dakika cinsinden karışık sırayla çözümlenmiş yazılmıştır: 7 · 10^{−1} + 4 · 10^{2} + 9 · 10^{0}\n**Buna göre sporcunun etap süresi kaç dakikadır?**",
  gorsel: null,
  secenekler: ["13,7", "49,7", "409,07", "409,7"],
  dogru: 3,
  hatalar: [
    "Yüzler basamağını birler basamağı sanma: 4 · 10^{2} yerine 4 · 10^{0} alınmış; 4 + 9 + 0,7 toplanmış.",
    "Boş onlar basamağını atlama: 4 ve 9 yan yana yazılmış.",
    "Onda birler basamağını yüzde birler basamağı sanma: 7 · 10^{−1} yerine 7 · 10^{−2} alınmış.",
    null
  ],
  aciklama: `Terimlerin sırası sonucu değiştirmez; her terim kendi basamağına yazılır.
Adım 1: 4 · 10^{2} = 400.
Adım 2: 9 · 10^{0} = 9.
Adım 3: 7 · 10^{−1} = 0,7.
Adım 4: Topla: 400 + 9 + 0,7 = 409,7.
Sağlama: 409,7 sayısının yüzler basamağı 4, onlar 0, birler 9, onda birler 7'dir.
Sık yapılan hata: Boş basamağa 0 koymadan rakamları yan yana yazmak.
Cevap D.`
},
{
  id: "mat-ui-249",
  kazanim: "M.8.1.2.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir yayınevi, bir kitabın toplam satış sayısı olan 5 400 000 sayısını değeri değişmeyecek biçimde 540 · 10^{n} şeklinde yazmıştır.\n**Buna göre n tam sayısı kaçtır?**",
  gorsel: null,
  secenekler: ["3", "4", "5", "6"],
  dogru: 1,
  hatalar: [
    "Üssü gereğinden fazla azaltma: 54'ten 540'a geçiş 10 kat büyümedir ama 100 kat sanılıp üs 2 azaltılmış.",
    null,
    "Üssü değiştirmeme: 54 · 10^{5} yazımındaki üs, baştaki sayı büyüdüğü hâlde aynı bırakılmış.",
    "Üssü ters yönde değiştirme: baştaki sayı büyüdüğünde üs artırılmış."
  ],
  aciklama: `Baştaki sayı 10 kat büyürse üs 1 azalır; 10 kat küçülürse üs 1 artar. Böylece sayının değeri korunur.
Adım 1: 5 400 000 = 54 · 100 000 = 54 · 10^{5}.
Adım 2: 54'ten 540'a geçişte baştaki sayı 10 kat büyür; üs 1 azalır: n = 5 − 1 = 4.
Sağlama: 540 · 10^{4} = 540 · 10 000 = 5 400 000.
Sık yapılan hata: Baştaki sayıyı büyütüp üssü artırmak ya da aynı bırakmak.
Cevap B.`
},
{
  id: "mat-ui-250",
  kazanim: "M.8.1.2.5",
  kademe: 2,
  zorluk: 2,
  soru: "Bir uydu, bir yıl boyunca toplam 63 400 000 kilometre yol almıştır. Öğrenciler bu sayıyı bilimsel gösterimle yazacaktır.\n**Buna göre uydunun aldığı yol aşağıdakilerden hangisiyle gösterilir?**",
  gorsel: null,
  secenekler: ["6,34 · 10^{−7}", "6,34 · 10^{5}", "6,34 · 10^{6}", "6,34 · 10^{7}"],
  dogru: 3,
  hatalar: [
    "Büyük sayıda negatif üs kullanma: sayı 1'den büyüktür, üs pozitif olmalıdır.",
    "Sıfır sayısını üs sanma: sayının sonunda 5 sıfır vardır ama virgül 7 basamak kayar.",
    "Virgülü bir basamak eksik kaydırma: 6 basamak kaydırılmış.",
    null
  ],
  aciklama: `Bilimsel gösterimde başkatsayı 1 ile 10 arasındadır. Virgülün kaç basamak kaydığı üssü verir.
Adım 1: 63 400 000 sayısında virgül en sağdadır. Başkatsayı 6,34 olacak biçimde virgülü sola kaydır.
Adım 2: Virgül 7 basamak kayar; sayı 1'den büyük olduğu için üs pozitiftir: 10^{7}.
Sağlama: 6,34 · 10^{7} = 6,34 · 10 000 000 = 63 400 000.
Sık yapılan hata: Üssü sondaki sıfırların sayısına eşitlemek.
Cevap D.`
},
{
  id: "mat-ui-251",
  kazanim: "M.8.1.2.5",
  kademe: 2,
  zorluk: 2,
  soru: "Kurgusal bir uzay oyununda K gezegeninin çapı 6,4 · 10^{3} kilometre, L gezegeninin çapı 12 800 kilometredir.\n**Buna göre L gezegeninin çapı K gezegeninin çapının kaç katıdır?**",
  gorsel: null,
  secenekler: ["[[1|2]]", "2", "20", "200"],
  dogru: 1,
  hatalar: [
    "Oranı ters kurma: K'nın çapı L'ye bölünmüş.",
    null,
    "Üs farkını bir fazla bulma: başkatsayıların oranı 10 ile yanlış çarpılmış.",
    "Üs farkını iki fazla bulma: bir hesap hatası sonucu 100 kat büyütülmüş."
  ],
  aciklama: `İki büyüklüğü karşılaştırırken aynı biçime getir.
Adım 1: 12 800 = 1,28 · 10^{4} = 12,8 · 10^{3}.
Adım 2: K = 6,4 · 10^{3}.
Adım 3: Oranı yaz: (12,8 · 10^{3}) ÷ (6,4 · 10^{3}) = 12,8 ÷ 6,4 = 2.
Sağlama: 6,4 · 10^{3} = 6400 ve 6400 · 2 = 12 800.
Sık yapılan hata: Kaç katı sorusunda büyük değeri küçüğe bölmek yerine tersini yapmak.
Cevap B.`
},
{
  id: "mat-ui-252",
  kazanim: "M.8.1.2.1",
  kademe: 2,
  zorluk: 3,
  soru: "Bir robotik kulübünde, küçük bir robot her adımda önceki adımdan farklı bir uzunlukta hareket etmektedir. Robotun n. adımdaki hareketi (−2)^{n} birimdir; pozitif değer ileri, negatif değer geri gitmek anlamına gelir. Robot başlangıçta başlangıç çizgisinde durmaktadır ve ilk dört adımı sırayla atmıştır.\n**Buna göre dört adım sonunda robot başlangıç çizgisinin kaç birim ilerisindedir?**",
  gorsel: null,
  secenekler: ["10", "20", "26", "30"],
  dogru: 0,
  hatalar: [
    null,
    "Tek numaralı adımları yok sayma: yalnızca 4 + 16 = 20 toplanmış.",
    "Üçüncü adımın işaretini kaybetme: (−2)^{3} değeri +8 alınmış.",
    "Bütün adımları ileri sayma: 2 + 4 + 8 + 16 = 30 bulunmuş."
  ],
  aciklama: `Negatif tabanın tek kuvveti negatif, çift kuvveti pozitiftir.
Adım 1: Adımları hesapla: (−2)^{1} = −2, (−2)^{2} = 4, (−2)^{3} = −8, (−2)^{4} = 16.
Adım 2: Konumu bul: −2 + 4 − 8 + 16 = 10.
Sağlama: Sırayla konum: −2, 2, −6, 10.
Sık yapılan hata: Geri giden adımları ileri sayıp toplamak.
Cevap A.`
},
{
  id: "mat-ui-253",
  kazanim: "M.8.1.2.2",
  kademe: 2,
  zorluk: 3,
  soru: "Bir bulut depolama şirketi, kullanıcı kotalarını hesaplarken (2^{3})^{2} · 4^{−1} ÷ 8^{−2} işlemini kullanmaktadır. Şirketin yazılımı sonucu 2'nin bir kuvveti olarak göstermektedir. Önce bütün sayılar 2'nin kuvveti biçimine getirilir, ardından işlem yapılır.\n**Buna göre yazılımın gösterdiği sonuç aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2^{−2}", "2^{6}", "2^{10}", "2^{14}"],
  dogru: 2,
  hatalar: [
    "Bölenin negatif üssünü yanlış çıkarma: 6 − 2 − 6 = −2 alınmış; −6 çıkarılırken işaret değiştirilmemiş.",
    "Yalnızca ilk çarpanı alma: (2^{3})^{2} = 2^{6} bulunmuş, diğer çarpanlar unutulmuş.",
    null,
    "Negatif üsleri pozitif alma: 6 + 2 + 6 = 14 bulunmuş."
  ],
  aciklama: `Tabanları eşitle: 4 = 2^{2}, 8 = 2^{3}. Sonra üs kurallarını uygula.
Adım 1: (2^{3})^{2} = 2^{6}.
Adım 2: 4^{−1} = (2^{2})^{−1} = 2^{−2}.
Adım 3: 8^{−2} = (2^{3})^{−2} = 2^{−6}.
Adım 4: 2^{6} · 2^{−2} = 2^{4}; sonra 2^{4} ÷ 2^{−6} = 2^{4−(−6)} = 2^{10}.
Sağlama: Tek satırda üs hesabı 6 − 2 − (−6) = 10.
Sık yapılan hata: Negatif bir üssü çıkarırken eksiyi artıya çevirmeyi unutmak.
Cevap C.`
},
{
  id: "mat-ui-254",
  kazanim: "M.8.1.2.3",
  kademe: 2,
  zorluk: 3,
  soru: "Bir manavda iki sepetin kütlesi, müşteriler basamakları görebilsin diye tabloda çözümlenmiş olarak yazılmıştır. Manav iki sepeti birlikte tartıp kayıt defterine toplam kütleyi yazacaktır. Sepetlerin kütleleri tabloda kilogram cinsinden verilmiştir.\n**Buna göre iki sepetin toplam kütlesi kaç kilogramdır?**",
  gorsel: `<table class="tablo"><tr><th>Sepet</th><th>Kütle (kg)</th></tr><tr><td>Elma</td><td>6 · 10<sup>1</sup> + 2 · 10<sup>0</sup> + 5 · 10<sup>−1</sup></td></tr><tr><td>Armut</td><td>3 · 10<sup>0</sup> + 7 · 10<sup>−2</sup></td></tr></table>`,
  secenekler: ["62,57", "65,07", "65,57", "66,2"],
  dogru: 2,
  hatalar: [
    "Armut sepetinde birler basamağını atlama: 3 · 10^{0} terimi unutulmuş.",
    "Elma sepetinde onda birler basamağını atlama: 5 · 10^{−1} terimi unutulmuş.",
    null,
    "Yüzde birler basamağını onda birler sanma: 7 · 10^{−2} yerine 7 · 10^{−1} alınmış."
  ],
  aciklama: `Önce her sepetin kütlesini ondalık sayıya çevir, sonra topla.
Adım 1: Elma: 60 + 2 + 0,5 = 62,5.
Adım 2: Armut: 3 + 0,07 = 3,07.
Adım 3: Topla: 62,5 + 3,07 = 65,57. Virgülleri alt alta getirerek 62,50 + 3,07 işlemini yap.
Sağlama: 65,57 = 6 · 10^{1} + 5 · 10^{0} + 5 · 10^{−1} + 7 · 10^{−2}.
Sık yapılan hata: Bir terimi atlamak; her terimi mutlaka sayıya çevir.
Cevap C.`
},
{
  id: "mat-ui-255",
  kazanim: "M.8.1.2.4",
  kademe: 2,
  zorluk: 3,
  soru: "Bir filmci, film arşivini harici bir diske yedeklemek istemektedir. Diskin boş kapasitesi 2,52 · 10^{12} bayttır ve her filmin kapladığı yer birbirine eşit olup 4,2 · 10^{9} bayttır. Filmci, diske en fazla kaç film sığacağını bulmak istemektedir. Bu sayıyı ondalık sayı olarak yazacaktır.\n**Buna göre diske en fazla kaç film sığar?**",
  gorsel: null,
  secenekler: ["0,6", "6", "60", "600"],
  dogru: 3,
  hatalar: [
    "Bilimsel gösterimi düzeltmeyi yarım bırakma: 0,6 · 10^{3} ifadesinde 10^{3} çarpanı unutulmuş.",
    "Üs farkını yanlış bulma: 10^{12} ÷ 10^{9} için 10^{1} alınmış.",
    "Üs farkını bir eksik bulma: 10^{2} alınmış.",
    null
  ],
  aciklama: `Film sayısı, kapasitenin bir filmin kapladığı yere bölümüdür. Bilimsel gösterimde baştaki sayılar kendi aralarında, 10'un kuvvetleri kendi aralarında bölünür.
Adım 1: Baştaki sayıları böl: 2,52 ÷ 4,2 = 0,6.
Adım 2: Üsleri çıkar: 10^{12} ÷ 10^{9} = 10^{3}.
Adım 3: 0,6 · 10^{3} = 600.
Sağlama: 600 · 4,2 · 10^{9} = 2520 · 10^{9} = 2,52 · 10^{12}.
Sık yapılan hata: 10^{3} çarpanını yazmayı unutmak.
Cevap D.`
},
{
  id: "mat-ui-256",
  kazanim: "M.8.1.2.5",
  kademe: 2,
  zorluk: 3,
  soru: "Bir bilim şenliğindeki güneş sistemi maketinin yanındaki panoda Dünya ve Neptün'ün Güneş'e uzaklıkları yaklaşık değerlerle bilimsel gösterimde verilmiştir. Maketi inceleyen öğrenciler, Neptün'ün Güneş'e uzaklığının Dünya'nınkinin kaç katı olduğunu hesaplayacaktır.\n**Buna göre Neptün'ün Güneş'e uzaklığı Dünya'nınkinin yaklaşık kaç katıdır?**",
  gorsel: `<table class="tablo"><tr><th>Gezegen</th><th>Güneş'e uzaklık (km)</th></tr><tr><td>Dünya</td><td>1,5 · 10<sup>8</sup></td></tr><tr><td>Neptün</td><td>4,5 · 10<sup>9</sup></td></tr></table>`,
  secenekler: ["0,3", "3", "10", "30"],
  dogru: 3,
  hatalar: [
    "Üs farkını ters yönde alma: 10^{8} ÷ 10^{9} için 10^{−1} alınmış.",
    "Üs farkını hiç hesaba katmama: yalnızca 4,5 ÷ 1,5 = 3 bulunmuş.",
    "Başkatsayıları hesaba katmama: yalnızca 10^{9} ÷ 10^{8} = 10 bulunmuş.",
    null
  ],
  aciklama: `Kaç katı sorusunda büyük değer küçük değere bölünür. Bilimsel gösterimde baştaki sayılar ve 10'un kuvvetleri ayrı ayrı bölünür.
Adım 1: Baştaki sayıları böl: 4,5 ÷ 1,5 = 3.
Adım 2: Üsleri çıkar: 10^{9} ÷ 10^{8} = 10^{1}.
Adım 3: Birleştir: 3 · 10 = 30.
Sağlama: 1,5 · 10^{8} · 30 = 45 · 10^{8} = 4,5 · 10^{9}.
Sık yapılan hata: Yalnızca baştaki sayıları ya da yalnızca 10'un kuvvetlerini bölmek.
Cevap D.`
},
{
  id: "mat-ui-257",
  kazanim: "M.8.1.2.1",
  kademe: 2,
  zorluk: 3,
  soru: "Bir masa oyununda iki kart çekilir ve oyuncunun puanı kartların toplamıdır. Birinci kartta (−2)^{3} · 2^{−2}, ikinci kartta (−1)^{9} yazmaktadır. Oyuncu hesap makinesi kullanmadan puanını bulacak ve puan tablosuna yazacaktır.\n**Buna göre oyuncunun puanı kaçtır?**",
  gorsel: null,
  secenekler: ["−3", "−1", "31", "33"],
  dogru: 0,
  hatalar: [
    null,
    "İkinci kartın işaretini kaybetme: (−1)^{9} değeri +1 alınmış, −2 + 1 = −1 bulunmuş.",
    "Negatif üssü eksi sayı sanma: 2^{−2} yerine −4 alınmış, (−8) · (−4) + (−1) = 31 bulunmuş.",
    "Hem negatif üsü eksi sayı sanma hem ikinci kartın işaretini kaybetme: 32 + 1 = 33 bulunmuş."
  ],
  aciklama: `Negatif üs sayıyı negatif yapmaz, tersini alır. Tek kuvvetli negatif taban ise negatiftir.
Adım 1: (−2)^{3} = −8 ve 2^{−2} = [[1|4]].
Adım 2: Birinci kart: −8 · [[1|4]] = −2.
Adım 3: İkinci kart: (−1)^{9} = −1.
Adım 4: Topla: −2 + (−1) = −3.
Sağlama: Kartların ikisi de negatiftir, toplam −3'tür.
Sık yapılan hata: 2^{−2} sayısını −4 sanmak. Negatif üs bölme anlamına gelir, eksi işareti taşımaz.
Cevap A.`
},
{
  id: "mat-ui-258",
  kazanim: "M.8.1.2.2",
  kademe: 2,
  zorluk: 3,
  soru: "Bir bilgisayar laboratuvarında teknisyen, bir hesaplama için (8^{3} · 4^{2}) ÷ 16^{2} işlemini yapmış ve sonucu 2'nin bir kuvveti olarak yazmak istemiştir. Önce bütün tabanları 2'ye çevirmesi gerekir.\n**Buna göre işlemin sonucu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2^{3}", "2^{5}", "2^{9}", "2^{13}"],
  dogru: 1,
  hatalar: [
    "4^{2} sayısını 2^{2} yazma: üssün çarpılması unutulmuş ve sonuç 2^{3} bulunmuş.",
    null,
    "16^{2} sayısını 2^{4} yazma: üssün çarpılması unutulmuş ve sonuç 2^{9} bulunmuş.",
    "Son adımı atlama: bölme yapılmamış, yalnızca çarpım 2^{13} bulunmuş."
  ],
  aciklama: `Tabanları 2'ye çevirirken üssü çarpmayı unutma: (a^{n})^{m} = a^{n·m}.
Adım 1: 8^{3} = (2^{3})^{3} = 2^{9}.
Adım 2: 4^{2} = (2^{2})^{2} = 2^{4}.
Adım 3: 16^{2} = (2^{4})^{2} = 2^{8}.
Adım 4: 2^{9} · 2^{4} = 2^{13}; sonra 2^{13} ÷ 2^{8} = 2^{5} = 32.
Sağlama: 512 · 16 = 8192 ve 16^{2} = 256; 8192 ÷ 256 = 32.
Sık yapılan hata: Tabanı çevirip üssü yalnızca bir kez almak.
Cevap B.`
},
{
  id: "mat-ui-259",
  kazanim: "M.8.1.2.3",
  kademe: 2,
  zorluk: 3,
  soru: "Bir kuyumcunun hassas terazisi bir yüzüğün kütlesini 757,07 gram olarak göstermektedir. Kuyumcunun çırağı, bu sayıdaki 7 rakamlarının her birinin basamak değerini ayrı ayrı yazmış ve sonra bunları toplamıştır. Çırak, 0 olan basamakların değerini toplama katmamıştır.\n**Buna göre bu 7 rakamlarının basamak değerleri toplamı kaçtır?**",
  gorsel: null,
  secenekler: ["21", "77,07", "707,007", "707,07"],
  dogru: 3,
  hatalar: [
    "Basamak değeri yerine rakamları toplama: 7 + 7 + 7 = 21 bulunmuş.",
    "Yüzler basamağını onlar basamağı sanma: 700 yerine 70 alınmış.",
    "Yüzde birler basamağını binde birler basamağı sanma: 0,07 yerine 0,007 alınmış.",
    null
  ],
  aciklama: `Bir rakamın basamak değeri, rakam ile basamağın 10'un kuvvetinin çarpımıdır.
Adım 1: 757,07 = 7 · 10^{2} + 5 · 10^{1} + 7 · 10^{0} + 0 · 10^{−1} + 7 · 10^{−2}.
Adım 2: Üç tane 7 vardır: 7 · 10^{2} = 700, 7 · 10^{0} = 7, 7 · 10^{−2} = 0,07.
Adım 3: Topla: 700 + 7 + 0,07 = 707,07.
Sağlama: 757,07'den 5 · 10^{1} = 50 çıkarılırsa 707,07 kalır.
Sık yapılan hata: Rakamların kendisini toplamak; basamak değeri rakam ile basamağın çarpımıdır.
Cevap D.`
},
{
  id: "mat-ui-260",
  kazanim: "M.8.1.2.4",
  kademe: 2,
  zorluk: 3,
  soru: "Bir video platformunda bir müzik klibi toplam 36 000 000 kez izlenmiştir. Kanal sorumlusu bu sayıyı rapor için değeri değişmeyecek biçimde üç farklı yazmıştır: 36 · 10^{a}, 0,36 · 10^{b} ve 360 · 10^{c}. Sorumlu, a + b + c toplamını raporun ilk sayfasına yazacaktır.\n**Buna göre a + b + c toplamı kaçtır?**",
  gorsel: null,
  secenekler: ["19", "20", "21", "23"],
  dogru: 0,
  hatalar: [
    null,
    "360 için üssü bir fazla bulma: c = 6 alınmış, oysa 36'dan 360'a geçişte baştaki sayı 10 kat büyür ve üs 6 değil 5 olur.",
    "Üslerin üçünü de aynı bırakma: a = b = c = 7 alınmış.",
    "Üsleri ters yönde değiştirme: baştaki sayı büyüdüğünde üs artırılmış."
  ],
  aciklama: `Baştaki sayı 10 kat büyürse 10'un üssü 1 azalır, 10 kat küçülürse 1 artar.
Adım 1: 36 000 000 = 36 · 10^{6}, yani a = 6.
Adım 2: 36'dan 0,36'ya baştaki sayı 100 kat küçülür; üs 2 artar: b = 8.
Adım 3: 36'dan 360'a baştaki sayı 10 kat büyür; üs 1 azalır: c = 5.
Adım 4: a + b + c = 6 + 8 + 5 = 19.
Sağlama: 0,36 · 10^{8} = 36 000 000 ve 360 · 10^{5} = 36 000 000.
Sık yapılan hata: Üssü, baştaki sayı büyürken de artırmak.
Cevap A.`
},
{
  id: "mat-ui-261",
  kazanim: "M.8.1.2.5",
  kademe: 2,
  zorluk: 3,
  soru: "Bir çevre araştırma laboratuvarı, denizden aldığı örnekteki dört mikroplastik parçasının çapını metre cinsinden ölçmüş ve tabloya yazmıştır. Araştırmacı bu parçaları çaplarına göre küçükten büyüğe sıralayacaktır.\n**Buna göre parçaların çaplarının küçükten büyüğe doğru sıralaması aşağıdakilerden hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Parça</th><th>K</th><th>L</th><th>M</th><th>N</th></tr><tr><td>Çap (m)</td><td>3,2 · 10<sup>−4</sup></td><td>41 · 10<sup>−6</sup></td><td>0,05 · 10<sup>−2</sup></td><td>6 · 10<sup>−5</sup></td></tr></table>`,
  secenekler: ["N, L, K, M", "L, N, M, K", "L, N, K, M", "M, K, N, L"],
  dogru: 2,
  hatalar: [
    "L ile N'yi başkatsayıya bakarak sıralama: 6 < 41 diye N önce yazılmış, 10'un üssü hesaba katılmamış.",
    "M'yi başkatsayısı küçük diye K'den küçük sayma: 0,05 · 10^{−2} = 5 · 10^{−4} olduğundan K'den büyüktür.",
    null,
    "Sıralamayı ters yönde yapma: büyükten küçüğe doğru dizilmiş."
  ],
  aciklama: `Karşılaştırmadan önce hepsini bilimsel gösterime getir: a · 10^{n}, 1 ≤ a < 10.
Adım 1: K = 3,2 · 10^{−4}.
Adım 2: L = 41 · 10^{−6} = 4,1 · 10^{−5}.
Adım 3: M = 0,05 · 10^{−2} = 5 · 10^{−4}.
Adım 4: N = 6 · 10^{−5}.
Adım 5: Üsleri sırala: −5 olanlar L (4,1) ve N (6), −4 olanlar K (3,2) ve M (5). Küçükten büyüğe: L, N, K, M.
Sağlama: L = 0,000041, N = 0,00006, K = 0,00032, M = 0,0005.
Sık yapılan hata: Üslere bakmadan yalnızca başkatsayıları sıralamak.
Cevap C.`
},
{
  id: "mat-ui-262",
  kazanim: "M.8.1.2.1",
  kademe: 2,
  zorluk: 3,
  soru: "Bir matematik etkinliğinde beş kart dağıtılmıştır. Kartlarda şu ifadeler yazılıdır: K: (−2)^{5}, L: −(−2)^{4}, M: −2^{−3}, N: (−2)^{−3}, P: (−2)^{−4}. Öğrencilerden değeri negatif olan kartları bulmaları istenmiştir. Hesap makinesi kullanılmayacaktır.\n**Buna göre bu kartlardan kaç tanesinin değeri negatiftir?**",
  gorsel: null,
  secenekler: ["1", "2", "3", "4"],
  dogru: 3,
  hatalar: [
    "Yalnızca tek üslü parantezli kartı negatif sayma: K dışındakiler pozitif sanılmış.",
    "Negatif üsleri sonucu pozitif yapan işlem sanma: M ve N pozitif alınmış.",
    "Negatif üslü parantezli kartı pozitif sanma: N'nin değeri pozitif alınmış.",
    null
  ],
  aciklama: `Önce her kartın işaretini belirle. Negatif üs işareti değiştirmez; işareti tabanın ve üssün tek ya da çift olması belirler.
Adım 1: K: (−2)^{5} negatif tabanın tek kuvvetidir → −32 (negatif).
Adım 2: L: (−2)^{4} = 16, önündeki eksiyle −16 (negatif).
Adım 3: M: 2^{−3} = [[1|8]], önündeki eksiyle −[[1|8]] (negatif).
Adım 4: N: (−2)^{−3} = [[1|(−2)^{3}]] = [[1|−8]] = −[[1|8]] (negatif).
Adım 5: P: (−2)^{−4} = [[1|16]] (pozitif).
Adım 6: Negatif olanlar K, L, M, N: 4 kart.
Sağlama: Tek pozitif kart P'dir; çünkü üs çifttir.
Sık yapılan hata: Negatif üsleri sonucu pozitif yapan bir işlem sanmak.
Cevap D.`
},
{
  id: "mat-ui-263",
  kazanim: "M.8.1.2.2",
  kademe: 2,
  zorluk: 3,
  soru: "Bir bilgisayar oyunu şirketinde iki sunucunun bellek kapasitesi karşılaştırılmaktadır. Birinci sunucunun kapasitesi 8^{4} birim, ikinci sunucunun kapasitesi 4^{5} birimdir. Mühendis, birinci kapasitenin ikincisine oranını bulmak için iki sayıyı 2'nin kuvveti olarak yazmıştır.\n**Buna göre birinci sunucunun kapasitesi ikincisinin kaç katıdır?**",
  gorsel: null,
  secenekler: ["2", "4", "8", "16"],
  dogru: 1,
  hatalar: [
    "Yalnızca tabanları karşılaştırma: 8 ÷ 4 = 2 alınmış, üsler hesaba katılmamış.",
    null,
    "Üs farkını tabana uygulama: 8^{4−5} yerine 8^{1} alınmış.",
    "Üs farkını yalnızca bir sayıya uygulama: 4^{2} bulunmuş."
  ],
  aciklama: `Tabanları 2'ye çevirip üsleri çıkar.
Adım 1: 8^{4} = (2^{3})^{4} = 2^{12}.
Adım 2: 4^{5} = (2^{2})^{5} = 2^{10}.
Adım 3: 2^{12} ÷ 2^{10} = 2^{2} = 4.
Sağlama: 8^{4} = 4096 ve 4^{5} = 1024; 4096 ÷ 1024 = 4.
Sık yapılan hata: Farklı tabanlı sayılarda üsleri doğrudan çıkarmak.
Cevap B.`
},
{
  id: "mat-ui-264",
  kazanim: "M.8.1.2.3",
  kademe: 2,
  zorluk: 3,
  soru: "Bir kimya laboratuvarında bir sıvının yoğunluğu çözümlenmiş olarak x = 8 · 10^{−1} + 3 · 10^{−3} şeklinde yazılmıştır. Laboratuvar görevlisi, sıvıdan alınan küçük bir örneğin değerini bulmak için x sayısını 10^{−2} ile çarpacaktır. Sonuç ondalık gösterimle yazılacaktır.\n**Buna göre x · 10^{−2} çarpımının ondalık gösterimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["0,00803", "0,0803", "0,803", "80,3"],
  dogru: 0,
  hatalar: [
    null,
    "10^{−2} ile çarpmayı 10 ile bölme sanma: virgül yalnızca bir basamak kaydırılmış.",
    "Çarpma yapmama: yalnızca x değeri yazılmış.",
    "Negatif üssü büyütme sanma: virgül sağa kaydırılmış."
  ],
  aciklama: `10^{−2} ile çarpmak, sayıyı 100'e bölmek ya da virgülü sola 2 basamak kaydırmak demektir.
Adım 1: x'i ondalık yaz: 8 · 10^{−1} = 0,8 ve 3 · 10^{−3} = 0,003. x = 0,803.
Adım 2: x · 10^{−2} = 0,803 ÷ 100.
Adım 3: Virgülü 2 basamak sola kaydır: 0,00803.
Sağlama: 0,00803 · 100 = 0,803.
Sık yapılan hata: Virgülü bir basamak eksik kaydırmak.
Cevap A.`
},
{
  id: "mat-ui-265",
  kazanim: "M.8.1.2.4",
  kademe: 2,
  zorluk: 3,
  soru: "Bir uzay teleskobu bir görev boyunca 2,4 · 10^{6} adet fotoğraf çekmiştir ve her fotoğraf 5 · 10^{2} megabayt (MB) yer kaplamaktadır. Fotoğrafların hepsi bir arşive gigabayt (GB) cinsinden kaydedilecektir. Bilgisayarlarda 1 GB = 10^{3} MB alınmaktadır ve sonuç bilimsel gösterimle yazılacaktır.\n**Buna göre fotoğrafların toplam büyüklüğü kaç GB'tır?**",
  gorsel: null,
  secenekler: ["1,2 · 10^{5}", "1,2 · 10^{6}", "1,2 · 10^{9}", "1,2 · 10^{12}"],
  dogru: 1,
  hatalar: [
    "Bilimsel gösterimi düzeltirken üssü artırmayı unutma: 12 · 10^{5} ifadesi 1,2 · 10^{5} yazılmış.",
    null,
    "Birim çevirmeme: MB cinsinden toplam, GB cinsinden sanılmış.",
    "Birim çevirmeyi ters yönde yapma: 10^{3} ile bölmek yerine çarpılmış."
  ],
  aciklama: `Önce toplam büyüklüğü MB cinsinden bul, sonra GB'a çevir.
Adım 1: Toplam MB: (2,4 · 10^{6}) · (5 · 10^{2}) = 12 · 10^{8} = 1,2 · 10^{9} MB.
Adım 2: GB'a çevirmek için 10^{3}'e böl: 1,2 · 10^{9} ÷ 10^{3} = 1,2 · 10^{6}.
Sağlama: 1,2 · 10^{6} GB · 10^{3} = 1,2 · 10^{9} MB.
Sık yapılan hata: Birim çevirmeyi unutmak ya da ters yönde yapmak.
Cevap B.`
},
{
  id: "mat-ui-266",
  kazanim: "M.8.1.2.5",
  kademe: 2,
  zorluk: 3,
  soru: "Bir biyoloji öğretmeni, bir virüsün boyunu 1,2 · 10^{−7} metre, bir bakterinin boyunu 3 · 10^{−6} metre olarak tahtaya yazmıştır. Öğrencilerden, virüsleri uç uca dizdiklerinde bir bakterinin boyuna eşit uzunluk elde etmek için kaç virüs gerektiğini bulmaları istenmiştir.\n**Buna göre kaç virüs gerekir?**",
  gorsel: null,
  secenekler: ["2,5", "25", "250", "2500"],
  dogru: 1,
  hatalar: [
    "Üs farkını hesaba katmama: yalnızca 3 ÷ 1,2 = 2,5 bulunmuş.",
    null,
    "Üs farkını iki basamak alma: 10^{2} ile çarpılmış.",
    "Üs farkını üç basamak alma: 10^{3} ile çarpılmış."
  ],
  aciklama: `Kaç tane sığar sorusu bölme sorusudur: bakterinin boyu virüsün boyuna bölünür.
Adım 1: Baştaki sayıları böl: 3 ÷ 1,2 = 2,5.
Adım 2: Üsleri çıkar: 10^{−6} ÷ 10^{−7} = 10^{−6−(−7)} = 10^{1}.
Adım 3: Birleştir: 2,5 · 10 = 25.
Sağlama: 25 · 1,2 · 10^{−7} = 30 · 10^{−7} = 3 · 10^{−6}.
Sık yapılan hata: Negatif üsleri çıkarırken işaret hatası yapmak.
Cevap B.`
},
{
  id: "mat-ui-267",
  kazanim: "M.8.1.2.1",
  kademe: 2,
  zorluk: 3,
  soru: "İki arkadaş bir kart oyunu oynamaktadır. Ela'nın kartında ([[1|3]])^{−2}, Mert'in kartında (−3)^{−2} yazmaktadır. Oyunun kuralına göre kazanan, kartındaki sayıyı rakibinin kartındaki sayıya bölerek oranı bulur ve oranı yüksek olan turu alır.\n**Buna göre Ela'nın kartındaki sayının Mert'in kartındaki sayıya oranı kaçtır?**",
  gorsel: null,
  secenekler: ["[[1|81]]", "1", "9", "81"],
  dogru: 3,
  hatalar: [
    "Oranı ters kurma: Mert'in sayısı Ela'nın sayısına bölünmüş.",
    "İki kartı eşit sanma: negatif tabanlı kartın çift üssünün pozitif olması nedeniyle iki sayı da aynı sanılmış.",
    "Yalnızca Ela'nın kartını hesaplama: Mert'in kartı 1 gibi işleme alınmış.",
    null
  ],
  aciklama: `Negatif üs, tabanın tersini alır; kesrin negatif kuvvetinde kesir ters çevrilir.
Adım 1: Ela'nın kartı: ([[1|3]])^{−2} = 3^{2} = 9.
Adım 2: Mert'in kartı: (−3)^{−2} = [[1|(−3)^{2}]] = [[1|9]].
Adım 3: Oran: 9 ÷ [[1|9]] = 9 · 9 = 81.
Sağlama: [[1|9]] · 81 = 9.
Sık yapılan hata: Mert'in sayısını negatif sanmak. Çift üs olduğu için (−3)^{−2} pozitiftir.
Cevap D.`
},
{
  id: "mat-ui-268",
  kazanim: "M.8.1.2.2",
  kademe: 2,
  zorluk: 3,
  soru: "Matematik öğretmeni, çarpımın ve bölümün kuvvetini işlemek için tahtaya (2^{2} · 5)^{3} ÷ (2 · 5)^{3} işlemini yazmıştır. Öğrenciler üs kurallarını kullanarak, 20^{3} ve 10^{3} değerlerini hesaplamadan sonucu bulmak zorundadır.\n**Buna göre işlemin sonucu kaçtır?**",
  gorsel: null,
  secenekler: ["8", "32", "64", "1000"],
  dogru: 0,
  hatalar: [
    null,
    "Üssü paydadaki parantezin yalnızca 5'ine dağıtma: 2^{6} · 5^{3} ÷ (2 · 5^{3}) = 32 bulunmuş.",
    "Paydadaki 2^{3} çarpanını unutma: 2^{6} bulunmuş.",
    "Paydadaki 5^{3} çarpanını unutma: 2^{3} · 5^{3} = 1000 bulunmuş."
  ],
  aciklama: `Çarpımın kuvveti, her çarpanın kuvvetinin çarpımına eşittir: (a · b)^{n} = a^{n} · b^{n}.
Adım 1: Paydaki ifade: (2^{2} · 5)^{3} = 2^{6} · 5^{3}.
Adım 2: Paydadaki ifade: (2 · 5)^{3} = 2^{3} · 5^{3}.
Adım 3: Böl: (2^{6} · 5^{3}) ÷ (2^{3} · 5^{3}) = 2^{3} = 8.
Sağlama: 20^{3} = 8000 ve 10^{3} = 1000; 8000 ÷ 1000 = 8.
Sık yapılan hata: Üssü parantezin içindeki yalnızca bir çarpana uygulamak.
Cevap A.`
},
{
  id: "mat-ui-269",
  kazanim: "M.8.1.2.3",
  kademe: 2,
  zorluk: 3,
  soru: "Bir kırtasiyede iki ürünün fiyat etiketi, fiyatlar kolay okunsun diye çözümlenmiş olarak tabloya yazılmıştır. Ali, pahalı ürünün fiyatı ile ucuz ürünün fiyatı arasındaki farkı bulacaktır. Fiyatlar TL cinsindendir.\n**Buna göre defterin fiyatı ile kalemin fiyatı arasındaki fark kaç TL'dir?**",
  gorsel: `<table class="tablo"><tr><th>Ürün</th><th>Fiyat (TL)</th></tr><tr><td>Defter</td><td>3 · 10<sup>1</sup> + 5 · 10<sup>−1</sup></td></tr><tr><td>Kalem</td><td>2 · 10<sup>0</sup> + 9 · 10<sup>−2</sup></td></tr></table>`,
  secenekler: ["27,6", "28,41", "28,5", "32,59"],
  dogru: 1,
  hatalar: [
    "Yüzde birler basamağını onda birler sanma: 9 · 10^{−2} yerine 9 · 10^{−1} alınmış.",
    null,
    "Kalemin fiyatındaki yüzde birler basamağını atlama: 9 · 10^{−2} terimi unutulmuş.",
    "Çıkarma yerine toplama: iki fiyat toplanmış."
  ],
  aciklama: `Önce her fiyatı ondalık sayıya çevir, sonra çıkar.
Adım 1: Defter: 30 + 0,5 = 30,5.
Adım 2: Kalem: 2 + 0,09 = 2,09.
Adım 3: Çıkar: 30,5 − 2,09 = 28,41. Virgülleri alt alta getir: 30,50 − 2,09.
Sağlama: 28,41 + 2,09 = 30,50.
Sık yapılan hata: 9 · 10^{−2} terimini 0,9 diye okumak.
Cevap B.`
},
{
  id: "mat-ui-270",
  kazanim: "M.8.1.2.4",
  kademe: 2,
  zorluk: 3,
  soru: "Bir bağış kampanyasında toplanan tutar 0,04 · 10^{9} TL olarak açıklanmıştır. Kampanya sorumlusu bu tutarı değeri değişmeyecek biçimde üç farklı yazmıştır: 4 · 10^{a}, 400 · 10^{b} ve 0,4 · 10^{c}. Sorumlu, sunumda a + b + c toplamını kullanacaktır.\n**Buna göre a + b + c toplamı kaçtır?**",
  gorsel: null,
  secenekler: ["17", "18", "19", "20"],
  dogru: 3,
  hatalar: [
    "Her üssü bir eksik bulma: a = 6, b = 4, c = 7 alınmış.",
    "0,4 için üssü üç azaltma: 0,04'ten 0,4'e geçişte c = 6 alınmış.",
    "0,4 için üssü iki azaltma: 0,04'ten 0,4'e geçişte c = 7 alınmış.",
    null
  ],
  aciklama: `Baştaki sayı 10 kat büyürse 10'un üssü 1 azalır; değer korunur.
Adım 1: 0,04'ten 4'e baştaki sayı 100 kat büyür; üs 2 azalır: a = 9 − 2 = 7.
Adım 2: 0,04'ten 400'e baştaki sayı 10 000 kat büyür; üs 4 azalır: b = 9 − 4 = 5.
Adım 3: 0,04'ten 0,4'e baştaki sayı 10 kat büyür; üs 1 azalır: c = 9 − 1 = 8.
Adım 4: Toplam: 7 + 5 + 8 = 20.
Sağlama: 4 · 10^{7} = 40 000 000, 400 · 10^{5} = 40 000 000 ve 0,4 · 10^{8} = 40 000 000.
Sık yapılan hata: Baştaki sayıdaki kaymanın basamak sayısını yanlış saymak.
Cevap D.`
},
{
  id: "mat-ui-271",
  kazanim: "M.8.1.2.5",
  kademe: 2,
  zorluk: 3,
  soru: "Bir böcek sergisinde dört böceğin boyu tabloda farklı gösterimlerle verilmiştir. Ziyaretçilerden en uzun böceği bulmaları istenmektedir. K, N ve M böcekleri metre, L böceği milimetre cinsinden verilmiştir (1 mm = 10^{−3} m).\n**Buna göre hangi böcek en uzundur?**",
  gorsel: `<table class="tablo"><tr><th>Böcek</th><th>Boy</th></tr><tr><td>K</td><td>2,4 · 10<sup>−3</sup> m</td></tr><tr><td>L</td><td>3,5 mm</td></tr><tr><td>M</td><td>0,29 · 10<sup>−1</sup> m</td></tr><tr><td>N</td><td>4,1 · 10<sup>−3</sup> m</td></tr></table>`,
  secenekler: ["K", "L", "M", "N"],
  dogru: 2,
  hatalar: [
    "Negatif üslerde yönü ters okuma: −3 üssü −1 üssünden büyük sanılmış.",
    "Birimleri çevirmeden karşılaştırma: mm cinsinden verilen 3,5, m cinsinden verilenlerle kıyaslanmış.",
    null,
    "Yalnızca başkatsayıya bakma: 4,1 en büyük başkatsayı olduğu için N seçilmiş."
  ],
  aciklama: `Önce hepsini aynı birime, sonra aynı biçime getir.
Adım 1: K = 2,4 · 10^{−3} m.
Adım 2: L = 3,5 mm = 3,5 · 10^{−3} m.
Adım 3: M = 0,29 · 10^{−1} m = 2,9 · 10^{−2} m.
Adım 4: N = 4,1 · 10^{−3} m.
Adım 5: En büyük üs −2'dir ve yalnızca M'de vardır; diğerlerinin üssü −3'tür. En uzun M.
Sağlama: M = 0,029 m, N = 0,0041 m.
Sık yapılan hata: Başkatsayısı 1'den küçük diye ifadeyi küçük saymak.
Cevap C.`
},
{
  id: "mat-ui-272",
  kazanim: "M.8.1.2.1",
  kademe: 2,
  zorluk: 3,
  soru: "Bir mimarlık yarışmasında bir maketin ölçek oranı ([[−2|3]])^{−3} olarak verilmiştir. Jüri üyesi, bu oranın değerini hesap makinesi kullanmadan bulacak ve bulduğu sayıyı değerlendirme formuna yazacaktır. Formda sayının işareti de önemlidir.\n**Buna göre ölçek oranının değeri aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["−[[27|8]]", "−[[8|27]]", "[[8|27]]", "[[27|8]]"],
  dogru: 0,
  hatalar: [
    null,
    "Kesri ters çevirmeme: yalnızca üs pozitif yapılmış, ([[−2|3]])^{3} hesaplanmış.",
    "Kesri ters çevirmeme ve işareti kaybetme: [[8|27]] bulunmuş.",
    "Tek kuvvetli negatif tabanda işareti kaybetme: kesir ters çevrilmiş ama sonuç pozitif yazılmış."
  ],
  aciklama: `Kesrin negatif kuvvetinde kesir ters çevrilir ve üs pozitif olur. Negatif tabanın tek kuvveti negatiftir.
Adım 1: ([[−2|3]])^{−3} = ([[3|−2]])^{3} = (−[[3|2]])^{3}.
Adım 2: Üs hem paya hem paydaya uygulanır: −[[3^{3}|2^{3}]] = −[[27|8]].
Sağlama: ([[−2|3]])^{3} = −[[8|27]] sayısının çarpmaya göre tersi −[[27|8]]'dir.
Sık yapılan hata: Ters çevirdikten sonra negatif işareti kaybetmek.
Cevap A.`
},
{
  id: "mat-ui-273",
  kazanim: "M.8.1.2.2",
  kademe: 2,
  zorluk: 3,
  soru: "Bir bilgisayar yarışmasında dört sunucunun hız puanları üslü ifadelerle verilmiştir: 2^{35}, 4^{18}, 8^{11} ve 16^{8}. Yarışma görevlisi, en yüksek puana sahip sunucuyu belirlemek için bu sayıları aynı tabana getirecektir.\n**Buna göre aşağıdakilerden hangisi en büyüktür?**",
  gorsel: null,
  secenekler: ["2^{35}", "4^{18}", "8^{11}", "16^{8}"],
  dogru: 1,
  hatalar: [
    "Tabanları eşitlemeden en büyük üssü seçme: 35 en büyük üs olduğu için 2^{35} seçilmiş.",
    null,
    "Yalnızca tabana bakma: 8^{11}, 8 ve 11'in dengesinden büyük sanılmış.",
    "Yalnızca en büyük tabana bakma: 16 en büyük taban olduğu için seçilmiş."
  ],
  aciklama: `Farklı tabanlı üslü sayıları karşılaştırmak için tabanları aynı yap. Burada hepsi 2'nin kuvvetidir.
Adım 1: 2^{35} zaten 2 tabanlıdır.
Adım 2: 4^{18} = (2^{2})^{18} = 2^{36}.
Adım 3: 8^{11} = (2^{3})^{11} = 2^{33}.
Adım 4: 16^{8} = (2^{4})^{8} = 2^{32}.
Adım 5: Tabanlar aynı ve 1'den büyük olduğundan üssü büyük olan büyüktür: 2^{36} en büyüktür, yani 4^{18}.
Sağlama: Üsleri sırala: 32 < 33 < 35 < 36.
Sık yapılan hata: Tabanı eşitlemeden yalnızca üslere ya da yalnızca tabanlara bakmak.
Cevap B.`
},
{
  id: "mat-ui-274",
  kazanim: "M.8.1.2.3",
  kademe: 2,
  zorluk: 3,
  soru: "Bir okul bahçesinde üç öğrenci, uzunluğu bilinmeyen bir ipin parçalarını ölçmüştür. Ölçüm defterine her parçanın uzunluğu, basamak değerleri görünsün diye çözümlenmiş olarak yazılmıştır. Öğretmen, üç parçayı uç uca ekleyip toplam uzunluğu metre cinsinden yazacaktır.\n**Buna göre eklenen ipin toplam uzunluğu kaç metredir?**",
  gorsel: `<table class="tablo"><tr><th>Parça</th><th>Uzunluk (m)</th></tr><tr><td>K</td><td>2 · 10<sup>1</sup> + 4 · 10<sup>−1</sup></td></tr><tr><td>L</td><td>6 · 10<sup>0</sup> + 5 · 10<sup>−1</sup> + 3 · 10<sup>−2</sup></td></tr><tr><td>M</td><td>1 · 10<sup>1</sup> + 8 · 10<sup>−2</sup></td></tr></table>`,
  secenekler: ["36,51", "36,93", "36,98", "37,01"],
  dogru: 3,
  hatalar: [
    "L parçasının 5 · 10^{−1} terimini atlama.",
    "M parçasının 8 · 10^{−2} terimini atlama.",
    "L parçasının 3 · 10^{−2} terimini atlama.",
    null
  ],
  aciklama: `Her uzunluğu ondalık yaz, sonra virgülleri alt alta getirerek topla.
Adım 1: K = 20 + 0,4 = 20,4.
Adım 2: L = 6 + 0,5 + 0,03 = 6,53.
Adım 3: M = 10 + 0,08 = 10,08.
Adım 4: Topla: 20,4 + 6,53 + 10,08 = 37,01.
Sağlama: Tam kısımlar 20 + 6 + 10 = 36; ondalık kısımlar 0,4 + 0,53 + 0,08 = 1,01. Toplam 37,01.
Sık yapılan hata: Uzun çözümlemede bir terimi unutmak.
Cevap D.`
},
{
  id: "mat-ui-275",
  kazanim: "M.8.1.2.4",
  kademe: 2,
  zorluk: 3,
  soru: "Bir şehrin yeraltı su deposunda 9 · 10^{6} metreküp su vardır. Depodan her gün 3 · 10^{4} metreküp su çekilmektedir ve depoya hiç su eklenmemektedir. Belediye, depodaki suyun kaç gün yeteceğini hesaplamak istemektedir.\n**Buna göre depodaki su kaç gün yeter?**",
  gorsel: null,
  secenekler: ["300", "600", "3000", "30 000"],
  dogru: 0,
  hatalar: [
    null,
    "Baştaki sayıları çıkarma: 9 − 3 = 6 bulunmuş ve 10^{2} ile çarpılmış.",
    "Üs farkını bir fazla bulma: 10^{6} ÷ 10^{4} için 10^{3} alınmış.",
    "Bölmede üssü bölenden alma: 10^{6} ÷ 10^{4} yerine yalnızca 10^{4} yazılmış ve 3 ile çarpılmış."
  ],
  aciklama: `Yeterlilik süresi, toplam miktarın günlük miktara bölümüdür.
Adım 1: Baştaki sayıları böl: 9 ÷ 3 = 3.
Adım 2: Üsleri çıkar: 10^{6} ÷ 10^{4} = 10^{2}.
Adım 3: Birleştir: 3 · 10^{2} = 300 gün.
Sağlama: 300 · 3 · 10^{4} = 900 · 10^{4} = 9 · 10^{6}.
Sık yapılan hata: Bölmede üsleri toplamak ya da başkatsayıları çıkarmak.
Cevap A.`
}
);
