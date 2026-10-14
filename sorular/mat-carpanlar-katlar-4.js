// Matematik — Çarpanlar ve Katlar: Kademe 1 (Kavrama) yedeği, ikinci bölüm (mat-ck-126 … 175)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["carpanlar-katlar"] = window.LGS_BANK["carpanlar-katlar"] || []).push(
{
  id: "mat-ck-126",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdaki sayılardan hangisi 56 sayısının bir çarpanıdır?**",
  gorsel: null,
  secenekler: ["14", "15", "16", "18"],
  dogru: 0,
  hatalar: [
    null,
    "Çarpan olmayan sayıyı çarpan sanma: 56 ÷ 15 işleminde kalan 11'dir.",
    "Çarpan olmayan sayıyı çarpan sanma: 56 ÷ 16 işleminde kalan 8'dir.",
    "Çarpan olmayan sayıyı çarpan sanma: 56 ÷ 18 işleminde kalan 2'dir."
  ],
  aciklama: `Bir sayının çarpanı, o sayıyı kalansız bölen pozitif tam sayıdır.
Adım 1: Şıkları tek tek 56'ya böl: 56 ÷ 14 = 4 kalansızdır; 56 ÷ 15 = 3, kalan 11; 56 ÷ 16 = 3, kalan 8; 56 ÷ 18 = 3, kalan 2.
Adım 2: Yalnızca 14, 56'yı kalansız böler.
Sağlama: 56'nın çarpan çiftleri 1 · 56, 2 · 28, 4 · 14 ve 7 · 8'dir; 14 bu çiftlerden birinde yer alır.
Sık yapılan hata: 56'ya yakın görünen sayıları çarpan sanmak. Çarpanı gözle değil bölme yaparak doğrula.
Cevap A.`
},
{
  id: "mat-ck-127",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdaki sayılardan hangisi asal sayıdır?**",
  gorsel: null,
  secenekler: ["21", "25", "27", "31"],
  dogru: 3,
  hatalar: [
    "Tek sayıları asal sanma: 21 = 3 · 7.",
    "Karesi olan sayıyı asal sanma: 25 = 5 · 5.",
    "3'e bölünen sayıyı asal sanma: 27 = 3 · 9.",
    null
  ],
  aciklama: `Asal sayı, 1'den büyük olup yalnızca 1'e ve kendisine bölünebilen sayıdır. 100'den küçük bir sayının asal olup olmadığını anlamak için 2, 3, 5 ve 7'ye bölünüp bölünmediğine bakılır.
Adım 1: 21'in rakamları toplamı 2 + 1 = 3 olduğundan 21, 3'e bölünür (21 = 3 · 7).
Adım 2: 25, 5 ile biter; 5'e bölünür (25 = 5 · 5).
Adım 3: 27'nin rakamları toplamı 9 olduğundan 3'e bölünür (27 = 3 · 9).
Adım 4: 31 çift değildir, rakamları toplamı 4 olduğundan 3'e bölünmez, 5 ile bitmez ve 7'ye de bölünmez (7 · 4 = 28, 7 · 5 = 35). Yani 31 asaldır.
Sık yapılan hata: Tek sayıların hepsini asal sanmak. 21, 25 ve 27 tektir ama asal değildir.
Cevap D.`
},
{
  id: "mat-ck-128",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**2 · 3^{2} · 7 çarpımının değeri kaçtır?**",
  gorsel: null,
  secenekler: ["126", "84", "63", "42"],
  dogru: 0,
  hatalar: [
    null,
    "Üssü çarpma gibi okuma: 3^{2} = 3 · 2 = 6 alınırsa 2 · 6 · 7 = 84 bulunur.",
    "Baştaki 2 çarpanını unutma: 3^{2} · 7 = 63.",
    "Üssü yok sayma: 2 · 3 · 7 = 42."
  ],
  aciklama: `Üslü ifadede üs, tabanın kaç kez kendisiyle çarpılacağını gösterir: 3^{2} = 3 · 3 = 9.
Adım 1: Üslü ifadeyi aç: 3^{2} = 9.
Adım 2: Soldan sağa çarp: 2 · 9 = 18, sonra 18 · 7 = 126.
Sağlama: 2 · 3 · 3 · 7 çarpımını adım adım yap: 2 · 3 = 6, 6 · 3 = 18, 18 · 7 = 126.
Sık yapılan hata: 3^{2} ifadesini 3 · 2 = 6 sanmak. Üs çarpan değil, tekrar sayısıdır.
Cevap A.`
},
{
  id: "mat-ck-129",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "**EBOB(16, 40) kaçtır?**",
  gorsel: null,
  secenekler: ["2", "4", "8", "80"],
  dogru: 2,
  hatalar: [
    "Yalnızca ortak asal çarpanı alma: 2 hem 16'yı hem 40'ı böler ama en büyük ortak bölen değildir.",
    "Ortak bölen bulup durma: 4 hem 16'yı hem 40'ı böler ama 8 daha büyük bir ortak bölendir.",
    null,
    "EBOB ile EKOK'u karıştırma: 80, bu iki sayının en küçük ortak katıdır."
  ],
  aciklama: `EBOB (en büyük ortak bölen), iki sayıyı birden kalansız bölen sayıların en büyüğüdür.
Adım 1: Asal çarpanlarına ayır: 16 = 2^{4} ve 40 = 2^{3} · 5.
Adım 2: EBOB için yalnızca ortak asalı, küçük üssüyle al: ortak asal 2'dir, küçük üs 3'tür; 2^{3} = 8.
Sağlama: 16 ÷ 8 = 2 ve 40 ÷ 8 = 5; ikisi de kalansız. 2 ile 5'in ortak böleni olmadığı için daha büyük ortak bölen çıkmaz.
Sık yapılan hata: 2 ya da 4 gibi bir ortak bölen bulunca durmak. Aranan, ortak bölenlerin en büyüğüdür.
Cevap C.`
},
{
  id: "mat-ck-130",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**20'den küçük kaç tane asal sayı vardır?**",
  gorsel: null,
  secenekler: ["7", "8", "9", "10"],
  dogru: 1,
  hatalar: [
    "Bir asalı atlama: asallar 2, 3, 5, 7, 11, 13, 17 ve 19'dur; toplam sekiz tanedir.",
    null,
    "1'i asal sayma: 1'in yalnızca bir böleni vardır, asal değildir.",
    "Tek sayıları asal sanma: 9 ve 15 tek olduğu hâlde 3'e bölünür, asal değildir."
  ],
  aciklama: `Asal sayı, 1'den büyük olup yalnızca 1'e ve kendisine bölünen sayıdır.
Adım 1: 2 asaldır ve tek çift asal sayıdır. Diğer çift sayılar 2'ye bölündüğü için elenir.
Adım 2: Tek sayıları kontrol et: 3, 5, 7, 11, 13, 17, 19 asaldır; 9 = 3 · 3 ve 15 = 3 · 5 asal değildir.
Adım 3: Say: 2, 3, 5, 7, 11, 13, 17, 19 → 8 sayı.
Sık yapılan hata: 1'i asal saymak ya da 9 ile 15'i asal saymak. 1 asal değildir; 9 ve 15, 3'e bölünür.
Cevap B.`
},
{
  id: "mat-ck-131",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "**EKOK(9, 15) kaçtır?**",
  gorsel: null,
  secenekler: ["3", "15", "30", "45"],
  dogru: 3,
  hatalar: [
    "EBOB ile EKOK'u karıştırma: 3, bu iki sayının en büyük ortak bölenidir.",
    "Büyük sayıyı EKOK sanma: 15, 9'un katı değildir.",
    "Büyük sayının ikinci katında durma: 30, 9'un katı değildir.",
    null
  ],
  aciklama: `EKOK (en küçük ortak kat), iki sayının ikisinin de katı olan sayıların en küçüğüdür.
Adım 1: Büyük sayının katlarını sırayla yaz: 15, 30, 45…
Adım 2: Hangisi 9'a kalansız bölünüyor? 15 ÷ 9 ve 30 ÷ 9 kalanlıdır; 45 ÷ 9 = 5 kalansızdır.
Adım 3: EKOK(9, 15) = 45.
İkinci yol: 9 = 3^{2} ve 15 = 3 · 5. EKOK için bütün asalları büyük üsleriyle al: 3^{2} · 5 = 45.
Sağlama: 45 = 9 · 5 = 15 · 3.
Sık yapılan hata: EBOB ile karıştırmak (3). EKOK, sayılardan küçük olamaz.
Cevap D.`
},
{
  id: "mat-ck-132",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdaki eşitliklerden hangisi __yanlıştır__?**",
  gorsel: null,
  secenekler: ["45 = 3 · 5^{2}", "36 = 2^{2} · 3^{2}", "50 = 2 · 5^{2}", "84 = 2^{2} · 3 · 7"],
  dogru: 0,
  hatalar: [
    null,
    "Doğru eşitliği yanlış sanma: 4 · 9 = 36.",
    "Doğru eşitliği yanlış sanma: 2 · 25 = 50.",
    "Doğru eşitliği yanlış sanma: 4 · 3 · 7 = 84."
  ],
  aciklama: `Her eşitliğin sağ tarafını hesaplayıp soldaki sayıyla karşılaştır.
Adım 1: 3 · 5^{2} = 3 · 25 = 75. Soldaki 45'e eşit değil; bu eşitlik yanlış.
Adım 2: Diğerlerini denetle: 2^{2} · 3^{2} = 4 · 9 = 36 doğru; 2 · 5^{2} = 2 · 25 = 50 doğru; 2^{2} · 3 · 7 = 4 · 3 · 7 = 84 doğru.
Sağlama: 45'in asal çarpanlarına ayrılmış biçimi 3^{2} · 5 = 9 · 5 = 45'tir. Eşitlikte üs yanlış asala verilmiş.
Sık yapılan hata: Üssün hangi asala ait olduğuna bakmamak. 3 · 5^{2} ile 3^{2} · 5 farklı sayılardır.
Cevap A.`
},
{
  id: "mat-ck-133",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdakilerden hangisi 84 sayısının bir çarpanı __olamaz__?**",
  gorsel: null,
  secenekler: ["6", "14", "21", "35"],
  dogru: 3,
  hatalar: [
    "Çarpan olan sayıyı eleme: 84 ÷ 6 = 14, kalansızdır.",
    "Çarpan olan sayıyı eleme: 84 ÷ 14 = 6, kalansızdır.",
    "Çarpan olan sayıyı eleme: 84 ÷ 21 = 4, kalansızdır.",
    null
  ],
  aciklama: `Bir sayının her çarpanı, o sayının asal çarpanlarından kurulur.
Adım 1: 84'ü asal çarpanlarına ayır: 84 = 2 · 2 · 3 · 7 = 2^{2} · 3 · 7. Çarpanlar yalnızca 2, 3 ve 7'den oluşabilir.
Adım 2: 6 = 2 · 3, 14 = 2 · 7 ve 21 = 3 · 7 bu asallardan kurulur.
Adım 3: 35 = 5 · 7 ve 5, 84'ün asal çarpanı değildir; bu yüzden 35 çarpan olamaz.
Sağlama: 84 ÷ 35 = 2, kalan 14.
Sık yapılan hata: Yalnızca 7'ye bakıp 35'i çarpan saymak. Sayıyı oluşturan her asalın 84'te de bulunması gerekir.
Cevap D.`
},
{
  id: "mat-ck-134",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "**Hem 18'i hem 27'yi kalansız bölen en büyük doğal sayı kaçtır?**",
  gorsel: null,
  secenekler: ["3", "9", "27", "54"],
  dogru: 1,
  hatalar: [
    "Ortak bölen bulup durma: 3 hem 18'i hem 27'yi böler ama en büyüğü değildir.",
    null,
    "Büyük sayıyı ortak bölen sanma: 27, 18'i kalansız bölmez.",
    "EBOB ile EKOK'u karıştırma: 54, bu iki sayının en küçük ortak katıdır."
  ],
  aciklama: `Hem 18'i hem 27'yi bölen en büyük sayı, EBOB(18, 27)'dir.
Adım 1: 18 = 2 · 3^{2} ve 27 = 3^{3}.
Adım 2: Ortak asal yalnızca 3'tür; küçük üs 2'dir. EBOB = 3^{2} = 9.
Sağlama: 18 ÷ 9 = 2 ve 27 ÷ 9 = 3; 2 ile 3'ün ortak böleni olmadığından daha büyük ortak bölen yoktur.
Sık yapılan hata: Ortak asal çarpanı (3) EBOB sanmak. EBOB'a ortak asalın küçük üslüsü girer.
Cevap B.`
},
{
  id: "mat-ck-135",
  kazanim: "M.8.1.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdaki kesirlerden hangisi sadeleşmez?**",
  gorsel: null,
  secenekler: ["[[6|15]]", "[[14|21]]", "[[10|27]]", "[[18|45]]"],
  dogru: 2,
  hatalar: [
    "Pay ve payda 3'e bölünür: [[6|15]] = [[2|5]]; kesir sadeleşir.",
    "Pay ve payda 7'ye bölünür: [[14|21]] = [[2|3]]; kesir sadeleşir.",
    null,
    "Pay ve payda 9'a bölünür: [[18|45]] = [[2|5]]; kesir sadeleşir."
  ],
  aciklama: `Bir kesir, payı ile paydası aralarında asal ise sadeleşmez; yani ikisinin 1'den başka ortak böleni yoktur.
Adım 1: Her kesirde pay ile paydanın ortak böleni var mı bak.
Adım 2: 6 ve 15'in ortak böleni 3; 14 ve 21'in ortak böleni 7; 18 ve 45'in ortak böleni 9 (ve 3). Bu üç kesir sadeleşir.
Adım 3: 10 = 2 · 5 ve 27 = 3^{3}; ortak asal çarpan yok. Bu kesir sadeleşmez.
Sık yapılan hata: Pay ve paydanın asal olmasını beklemek. 10 ile 27 asal değildir ama aralarında asaldır.
Cevap C.`
},
{
  id: "mat-ck-136",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**150 sayısının farklı asal çarpanlarının toplamı kaçtır?**",
  gorsel: null,
  secenekler: ["10", "11", "15", "30"],
  dogru: 0,
  hatalar: [
    null,
    "1'i asal çarpan sayma: 1 asal değildir; 1 + 2 + 3 + 5 = 11 bulunur.",
    "Tekrarlanan 5'i iki kez toplama: 2 + 3 + 5 + 5 = 15.",
    "Toplamak yerine çarpma: 2 · 3 · 5 = 30."
  ],
  aciklama: `Farklı asal çarpanlar, tekrarlar sayılmadan yazılan asal çarpanlardır.
Adım 1: 150'yi asal çarpanlarına ayır: 150 ÷ 2 = 75, 75 ÷ 3 = 25, 25 ÷ 5 = 5, 5 ÷ 5 = 1. Yani 150 = 2 · 3 · 5^{2}.
Adım 2: Farklı asal çarpanlar 2, 3 ve 5'tir.
Adım 3: Topla: 2 + 3 + 5 = 10.
Sık yapılan hata: Tekrarlanan 5'i iki kez toplamak (15), çarpmak (30) ya da 1'i asal saymak (11).
Cevap A.`
},
{
  id: "mat-ck-137",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "Aşağıdaki tabloda 24 ve 40 sayılarının ilk beş katı verilmiştir.\n**Buna göre EKOK(24, 40) kaçtır?**",
  gorsel: "<table class=\"tablo\"><tr><th>Sayı</th><th>İlk beş katı</th></tr><tr><td>24</td><td>24, 48, 72, 96, 120</td></tr><tr><td>40</td><td>40, 80, 120, 160, 200</td></tr></table>",
  secenekler: ["8", "64", "120", "960"],
  dogru: 2,
  hatalar: [
    "EBOB ile EKOK'u karıştırma: 8, bu iki sayının en büyük ortak bölenidir.",
    "Sayıları toplama: 24 + 40 = 64; 64, ne 24'ün ne de 40'ın katıdır.",
    null,
    "Çarpımı EKOK sanma: 24 · 40 = 960 ortak kattır ama en küçüğü değildir."
  ],
  aciklama: `EKOK, iki sayının ortak katlarının en küçüğüdür.
Adım 1: Tablodaki iki listede ortak olan sayıyı ara: 120.
Adım 2: Başka ortak sayı yoktur; 48, 72, 96 yalnızca 24'ün, 40, 80, 160, 200 yalnızca 40'ın listesindedir. En küçük ortak kat 120'dir.
Sağlama: 120 ÷ 24 = 5 ve 120 ÷ 40 = 3.
Sık yapılan hata: 24 · 40 = 960'ı almak. Çarpım ortak kattır ama sayıların ortak böleni varsa en küçük ortak kat çarpımdan küçüktür.
Cevap C.`
},
{
  id: "mat-ck-138",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "**Hem 3'ün hem 4'ün katı olan kaç tane iki basamaklı doğal sayı vardır?**",
  gorsel: null,
  secenekler: ["7", "8", "9", "12"],
  dogru: 1,
  hatalar: [
    "Bir katı atlama: 12, 24, 36, 48, 60, 72, 84 ve 96 sekiz sayıdır.",
    null,
    "0'ı da sayma: 0 iki basamaklı bir sayı değildir.",
    "EKOK'un değerini adet sanma: 12, EKOK'un değeridir; sorulan kaç tane sayı olduğudur."
  ],
  aciklama: `Hem 3'ün hem 4'ün katı olan sayılar, EKOK(3, 4)'ün katlarıdır.
Adım 1: 3 ile 4 aralarında asal olduğundan EKOK(3, 4) = 3 · 4 = 12.
Adım 2: 12'nin iki basamaklı katlarını yaz: 12, 24, 36, 48, 60, 72, 84, 96. Sonraki kat 108 üç basamaklıdır.
Adım 3: Say: 8 sayı. Kısa yol: 96 ÷ 12 = 8.
Sık yapılan hata: 0'ı katlara katmak ya da bir katı atlamak. 12'nin katlarını sırayla yazıp say.
Cevap B.`
},
{
  id: "mat-ck-139",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**2 · 2 · 2 · 3 · 3 · 7 çarpımının üslü gösterimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2 · 3 · 7", "2^{2} · 3^{3} · 7", "2^{3} · 3^{2} · 7^{2}", "2^{3} · 3^{2} · 7"],
  dogru: 3,
  hatalar: [
    "Tekrarlayan çarpanları bir kez yazma: 2 · 3 · 7 = 42 eder, 504 etmez.",
    "Üsleri yer değiştirme: 2^{2} · 3^{3} · 7 = 756 eder, 504 etmez.",
    "Tek geçen 7'ye de üs verme: 7 bir kez yazılmıştır; 2^{3} · 3^{2} · 7^{2} = 3528 eder.",
    null
  ],
  aciklama: `Aynı asal çarpan kaç kez yazılmışsa o sayı üs olarak yazılır.
Adım 1: 2 üç kez yazılmış: 2 · 2 · 2 = 2^{3}.
Adım 2: 3 iki kez yazılmış: 3 · 3 = 3^{2}.
Adım 3: 7 bir kez yazılmış: 7.
Adım 4: Birleştir: 2^{3} · 3^{2} · 7.
Sağlama: 8 · 9 · 7 = 504 ve 2 · 2 · 2 · 3 · 3 · 7 = 504.
Sık yapılan hata: Üsleri yanlış asala vermek ya da tek geçen çarpana da üs yazmak.
Cevap D.`
},
{
  id: "mat-ck-140",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "Ayşe, uzunlukları 48 cm ve 72 cm olan iki şeridi hiç artmayacak biçimde eşit uzunlukta parçalara ayıracaktır. Parçalar olabildiğince uzun olacaktır.\n**Buna göre bir parçanın uzunluğu kaç santimetredir?**",
  gorsel: null,
  secenekler: ["12", "24", "72", "144"],
  dogru: 1,
  hatalar: [
    "Ortak bölen bulup durma: 12 hem 48'i hem 72'yi böler ama 24 daha büyük bir ortak bölendir.",
    null,
    "Büyük şeridin boyunu parça uzunluğu sanma: 72, 48'i kalansız bölmez.",
    "EBOB ile EKOK'u karıştırma: 144, iki sayının en küçük ortak katıdır."
  ],
  aciklama: `Şeritler artık bırakmadan eşit parçalara ayrılacağı için parça uzunluğu hem 48'i hem 72'yi kalansız bölmelidir. En uzun parça istendiğine göre EBOB aranır.
Adım 1: 48 = 2^{4} · 3 ve 72 = 2^{3} · 3^{2}.
Adım 2: Ortak asallar 2 ve 3'tür; küçük üsler 2^{3} ve 3. EBOB = 2^{3} · 3 = 24.
Sağlama: 48 ÷ 24 = 2 ve 72 ÷ 24 = 3 parça elde edilir; artan şerit yoktur.
Sık yapılan hata: 12 gibi bir ortak bölenle yetinmek. "Olabildiğince uzun" ifadesi en büyük ortak bölen demektir.
Cevap B.`
},
{
  id: "mat-ck-141",
  kazanim: "M.8.1.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdaki sayı çiftlerinden hangisi aralarında asal __değildir__?**",
  gorsel: null,
  secenekler: ["13 ve 52", "14 ve 15", "16 ve 27", "25 ve 36"],
  dogru: 0,
  hatalar: [
    null,
    "Ardışık sayıları aralarında asal olmayan sanma: 14 ve 15'in ortak böleni yalnızca 1'dir.",
    "16 = 2^{4} ve 27 = 3^{3}; ortak asal çarpanları olmadığından aralarında asaldırlar.",
    "25 = 5^{2} ve 36 = 2^{2} · 3^{2}; ortak asal çarpanları olmadığından aralarında asaldırlar."
  ],
  aciklama: `Aralarında asal sayıların 1'den başka ortak böleni yoktur. Sayıların kendilerinin asal olması gerekmez.
Adım 1: 14 ve 15 ardışıktır; ardışık sayılar her zaman aralarında asaldır.
Adım 2: 16 = 2^{4} ve 27 = 3^{3}; 25 = 5^{2} ve 36 = 2^{2} · 3^{2}. Bu iki çiftte de ortak asal çarpan yoktur.
Adım 3: 52 = 13 · 4 olduğundan 13 ve 52'nin ortak böleni 13'tür; bu çift aralarında asal değildir.
Sık yapılan hata: Sayılardan biri asal diye çifti aralarında asal sanmak. 13 asaldır ama 52'nin çarpanıdır.
Cevap A.`
},
{
  id: "mat-ck-142",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**20 sayısının bütün pozitif tam sayı çarpanlarının toplamı kaçtır?**",
  gorsel: null,
  secenekler: ["21", "22", "41", "42"],
  dogru: 3,
  hatalar: [
    "1'i ve sayının kendisini çarpan saymama: 2 + 4 + 5 + 10 = 21.",
    "Sayının kendisini çarpan saymama: 1 + 2 + 4 + 5 + 10 = 22.",
    "1'i çarpan saymama: 2 + 4 + 5 + 10 + 20 = 41.",
    null
  ],
  aciklama: `Adım 1: 20'nin çarpanlarını çiftler hâlinde bul: 1 · 20, 2 · 10, 4 · 5. Çarpanlar 1, 2, 4, 5, 10 ve 20'dir. (1 ve sayının kendisi her zaman çarpandır.)
Adım 2: Topla: 1 + 2 + 4 + 5 + 10 + 20 = 42.
Sağlama: Çiftleri ayrı ayrı topla: (1 + 20) + (2 + 10) + (4 + 5) = 21 + 12 + 9 = 42.
Sık yapılan hata: 1'i ya da 20'yi çarpan saymayı unutmak.
Cevap D.`
},
{
  id: "mat-ck-143",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "İki doğal sayının EBOB'u 4, EKOK'u 60'tır. Sayılardan biri 12'dir.\n**Buna göre diğer sayı kaçtır?**",
  gorsel: null,
  secenekler: ["5", "15", "20", "240"],
  dogru: 2,
  hatalar: [
    "EBOB'u kullanmadan EKOK'u 12'ye bölme: 60 ÷ 12 = 5.",
    "EKOK'u EBOB'a bölme: 60 ÷ 4 = 15.",
    null,
    "Çarpımı bulup durma: 4 · 60 = 240, iki sayının çarpımıdır; 12'ye bölünmemiş."
  ],
  aciklama: `İki sayının çarpımı, EBOB'ları ile EKOK'larının çarpımına eşittir: a · b = EBOB · EKOK.
Adım 1: İki sayının çarpımı: 4 · 60 = 240.
Adım 2: Sayılardan biri 12 olduğuna göre diğeri 240 ÷ 12 = 20.
Sağlama: 12 = 2^{2} · 3 ve 20 = 2^{2} · 5. EBOB = 2^{2} = 4, EKOK = 2^{2} · 3 · 5 = 60.
Sık yapılan hata: 240'ı bulunca durmak. 240 iki sayının çarpımıdır; diğer sayıyı bulmak için 12'ye bölmek gerekir.
Cevap C.`
},
{
  id: "mat-ck-144",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "Bir kırtasiyeci, 28 kitap ile 42 defteri, her pakette eşit sayıda kitap ve eşit sayıda defter olacak biçimde ve hiçbir şey artmayacak şekilde paketleyecektir.\n**Olabildiğince çok paket hazırlanacağına göre kaç paket hazırlanır?**",
  gorsel: null,
  secenekler: ["1", "2", "7", "14"],
  dogru: 3,
  hatalar: [
    "Hepsini tek pakete koyma: 1 paket mümkündür ama en çok paket istenmiştir.",
    "Yalnızca 2 ortak çarpanını alma: 2 paket mümkündür ama daha fazlası da yapılabilir.",
    "Ortak çarpanlardan yalnızca 7'yi alma: 7 paket mümkündür ama 14 paket de yapılabilir.",
    null
  ],
  aciklama: `Kitaplar da defterler de paketlere eşit dağıtılacağı için paket sayısı hem 28'i hem 42'yi kalansız bölmelidir. En çok paket istendiğine göre EBOB aranır.
Adım 1: 28 = 2^{2} · 7 ve 42 = 2 · 3 · 7.
Adım 2: Ortak asallar 2 ve 7'dir; küçük üsler 2 ve 7. EBOB = 2 · 7 = 14.
Sağlama: Her pakette 28 ÷ 14 = 2 kitap ve 42 ÷ 14 = 3 defter olur.
Sık yapılan hata: Ortak asal çarpanlardan birini atlamak. EBOB'a ortak olan bütün asallar girer.
Cevap D.`
},
{
  id: "mat-ck-145",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "**6 ve 10 sayılarının her ikisine de kalansız bölünebilen en büyük iki basamaklı doğal sayı kaçtır?**",
  gorsel: null,
  secenekler: ["60", "90", "96", "99"],
  dogru: 1,
  hatalar: [
    "Ortak katları sıralarken erken durma: EKOK'un katları 30, 60, 90'dır; 90 da iki basamaklıdır.",
    null,
    "Yalnızca 6'ya bölünmeyi denetleme: 96 ÷ 10 kalanlıdır.",
    "En büyük iki basamaklı sayıyı koşula bakmadan alma: 99, ne 6'ya ne 10'a bölünür."
  ],
  aciklama: `Hem 6'ya hem 10'a bölünen sayılar EKOK(6, 10)'un katlarıdır.
Adım 1: 6 = 2 · 3 ve 10 = 2 · 5 olduğundan EKOK = 2 · 3 · 5 = 30.
Adım 2: 30'un katlarını yaz: 30, 60, 90, 120… 120 üç basamaklıdır.
Adım 3: En büyük iki basamaklı kat 90'dır.
Sağlama: 90 ÷ 6 = 15 ve 90 ÷ 10 = 9.
Sık yapılan hata: Yalnızca bir sayının koşuluna bakmak. 96, 6'ya bölünür ama 10'a bölünmez.
Cevap B.`
},
{
  id: "mat-ck-146",
  kazanim: "M.8.1.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "Aşağıdaki tabloda dört sayının asal çarpanları verilmiştir.\n**Buna göre hangi iki sayı aralarında asaldır?**",
  gorsel: "<table class=\"tablo\"><tr><th>Sayı</th><th>Asal çarpanları</th></tr><tr><td>30</td><td>2, 3, 5</td></tr><tr><td>42</td><td>2, 3, 7</td></tr><tr><td>49</td><td>7</td></tr><tr><td>55</td><td>5, 11</td></tr></table>",
  secenekler: ["30 ve 49", "30 ve 42", "30 ve 55", "42 ve 49"],
  dogru: 0,
  hatalar: [
    null,
    "Ortak asal çarpanları 2 ve 3'tür; EBOB'ları 6'dır, aralarında asal değildirler.",
    "Ortak asal çarpanları 5'tir; EBOB'ları 5'tir, aralarında asal değildirler.",
    "Ortak asal çarpanları 7'dir; EBOB'ları 7'dir, aralarında asal değildirler."
  ],
  aciklama: `Aralarında asal iki sayının ortak asal çarpanı yoktur.
Adım 1: Tabloya bak: 30 → (2, 3, 5), 42 → (2, 3, 7), 49 → (7), 55 → (5, 11).
Adım 2: Şıkları kontrol et. 30 ve 49: ortak asal yok → aralarında asal. 30 ve 42: ortak 2 ve 3. 30 ve 55: ortak 5. 42 ve 49: ortak 7.
Sağlama: 30 = 2 · 3 · 5 ve 49 = 7 · 7; 1'den başka ortak bölen yoktur.
Sık yapılan hata: Sayıların kendilerine ya da çarpan sayısına bakmak. Asıl ölçüt ortak asal çarpandır.
Cevap A.`
},
{
  id: "mat-ck-147",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "A = 2^{3} · 3 · 5 ve B = 2^{2} · 3^{2} sayıları veriliyor.\n**Buna göre EKOK(A, B) kaçtır?**",
  gorsel: null,
  secenekler: ["12", "120", "360", "4320"],
  dogru: 2,
  hatalar: [
    "EBOB ile EKOK'u karıştırma: 12 = 2^{2} · 3, iki sayının EBOB'udur.",
    "A'yı EKOK sanma: A = 120, B = 36'nın katı değildir (120 ÷ 36 kalanlıdır).",
    null,
    "Çarpımı EKOK sanma: A · B = 4320 ortak kattır ama en küçüğü değildir."
  ],
  aciklama: `EKOK için bütün asal çarpanlar alınır ve her biri en büyük üssüyle yazılır.
Adım 1: Asallara bak: 2 (üsler 3 ve 2 → 2^{3}), 3 (üsler 1 ve 2 → 3^{2}), 5 (yalnızca A'da → 5).
Adım 2: EKOK = 2^{3} · 3^{2} · 5 = 8 · 9 · 5 = 360.
Sağlama: A = 8 · 3 · 5 = 120 ve B = 4 · 9 = 36. 360 ÷ 120 = 3 ve 360 ÷ 36 = 10.
Sık yapılan hata: Küçük üsleri almak (bu EBOB'u verir: 2^{2} · 3 = 12) ya da yalnızca bir sayıda bulunan 5'i atlamak.
Cevap C.`
},
{
  id: "mat-ck-148",
  kazanim: "M.8.1.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "**24 ile aralarında asal olan en küçük iki basamaklı doğal sayı kaçtır?**",
  gorsel: null,
  secenekler: ["10", "11", "12", "25"],
  dogru: 1,
  hatalar: [
    "Yalnızca 3'e bakıp 2'yi unutma: 10, 3'e bölünmez ama 24 ile ortak böleni 2'dir.",
    null,
    "24'ün çarpanını aralarında asal sanma: 12, 24'ü böler; EBOB'ları 12'dir.",
    "Uygun ama en küçük değil: 25 ile 24 ardışıktır, aralarında asaldır; fakat 11 daha küçüktür."
  ],
  aciklama: `İki sayının 1'den başka ortak böleni yoksa bu sayılar aralarında asaldır.
Adım 1: 24 = 2^{3} · 3 olduğundan aranan sayı ne 2'ye ne 3'e bölünmelidir.
Adım 2: İki basamaklı en küçük sayıdan başla: 10 çifttir (2'ye bölünür) → olmaz. 11 çift değildir, rakamları toplamı 2 olduğundan 3'e bölünmez → olur.
Sağlama: 11'in bölenleri 1 ve 11'dir; 11, 24'ü bölmez. Ortak bölen yalnızca 1'dir.
Sık yapılan hata: Yalnızca bir asal çarpana bakmak. 24'ün hem 2 hem 3 asalını denetle.
Cevap B.`
},
{
  id: "mat-ck-149",
  kazanim: "M.8.1.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "Aralarında asal iki doğal sayının EKOK'u 60'tır. Sayılardan biri 12'dir.\n**Buna göre diğer sayı kaçtır?**",
  gorsel: null,
  secenekler: ["15", "12", "10", "5"],
  dogru: 3,
  hatalar: [
    "Aralarında asal olma koşulunu unutma: EKOK(12, 15) = 60 olur ama EBOB(12, 15) = 3 olduğundan sayılar aralarında asal değildir.",
    "Verilen sayıyı yeniden yazma: EKOK(12, 12) = 12 eder, 60 etmez.",
    "Aralarında asal olma koşulunu unutma: EKOK(12, 10) = 60 olur ama EBOB(12, 10) = 2 olduğundan sayılar aralarında asal değildir.",
    null
  ],
  aciklama: `Aralarında asal iki sayının EBOB'u 1'dir; bu yüzden EKOK'ları çarpımlarına eşittir.
Adım 1: 12 · (diğer sayı) = 60 yazılır.
Adım 2: Diğer sayı 60 ÷ 12 = 5.
Sağlama: 12 = 2^{2} · 3 ve 5 asaldır; ortak asal çarpan yoktur, yani aralarında asaldır ve EKOK(12, 5) = 60.
Sık yapılan hata: EKOK'u 60 yapan ilk sayıyı seçmek. 10 ve 15 de 12 ile EKOK'u 60 yapar ama 12 ile ortak bölenleri vardır; "aralarında asal" koşulu bunları eler.
Cevap D.`
},
{
  id: "mat-ck-150",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir sınıfta öğretmen, tahtaya 12 ve 18 sayılarını yazmış ve öğrencilerden bu iki sayının ortak katı __olmayan__ bir sayıyı seçmelerini istemiştir. Öğrencilerin seçebileceği sayılar aşağıdaki şıklarda verilmiştir.\n**Buna göre öğretmenin istediği sayı aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["36", "72", "108", "114"],
  dogru: 3,
  hatalar: [
    "Ortak katı olmayan sanma: 36 ÷ 12 = 3 ve 36 ÷ 18 = 2, kalansızdır.",
    "Ortak katı olmayan sanma: 72 ÷ 12 = 6 ve 72 ÷ 18 = 4, kalansızdır.",
    "Ortak katı olmayan sanma: 108 ÷ 12 = 9 ve 108 ÷ 18 = 6, kalansızdır.",
    null
  ],
  aciklama: `İki sayının ortak katı, ikisine de kalansız bölünen sayıdır. Ortak katlar, EKOK'un katlarıdır.
Adım 1: 12 = 2^{2} · 3 ve 18 = 2 · 3^{2}. EKOK(12, 18) = 2^{2} · 3^{2} = 36.
Adım 2: Ortak katlar 36'nın katlarıdır: 36, 72, 108, 144… Şıklardaki 36, 72 ve 108 bunlardandır.
Adım 3: 114 ÷ 36 = 3, kalan 6. 114, 36'nın katı değildir; yani ortak kat değildir.
Sağlama: 114 ÷ 12 = 9, kalan 6 ve 114 ÷ 18 = 6, kalan 6; ikisi de kalanlıdır.
Sık yapılan hata: 114'ün 6'ya (EBOB) bölündüğünü görüp ortak kat sanmak. Ortak kat için hem 12'ye hem 18'e bölünmek gerekir.
Cevap D.`
},
{
  id: "mat-ck-151",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir fotoğraf stüdyosu, 24 fotoğrafı albüm sayfalarına yerleştirecektir. Her sayfada eşit sayıda fotoğraf bulunacak ve hiç fotoğraf açıkta kalmayacaktır. Bir sayfaya en az 2, en çok 8 fotoğraf yerleştirilebilmektedir.\n**Buna göre bir sayfadaki fotoğraf sayısı kaç farklı değer alabilir?**",
  gorsel: null,
  secenekler: ["5", "6", "7", "8"],
  dogru: 0,
  hatalar: [
    null,
    "1'i de sayma: \"en az 2\" koşulu 1'i eler.",
    "Aralıktaki bütün sayıları sayma: 2'den 8'e 7 sayı vardır ama 5 ile 7, 24'ü bölmez.",
    "Koşulu uygulamadan 24'ün bütün çarpanlarını sayma: 24'ün 8 çarpanı vardır."
  ],
  aciklama: `Eşit dağıtım olduğu için bir sayfadaki fotoğraf sayısı 24'ü kalansız bölmelidir; yani 24'ün çarpanı olmalıdır.
Adım 1: 24'ün çarpanlarını çiftler hâlinde bul: 1 · 24, 2 · 12, 3 · 8, 4 · 6. Çarpanlar 1, 2, 3, 4, 6, 8, 12 ve 24'tür.
Adım 2: Koşulu uygula: en az 2, en çok 8 (8 dahil). 1, 12 ve 24 elenir.
Adım 3: Geriye 2, 3, 4, 6, 8 kalır: 5 farklı değer.
Sık yapılan hata: "En çok 8" ifadesinde 8'i dışarıda bırakmak (4) ya da 1'i saymak (6). Sınır değerler koşulda yazılı olduğu gibi işlenir.
Cevap A.`
},
{
  id: "mat-ck-152",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir kırtasiyede 24 kalemlik bir kutu ile 36 kalemlik bir kutu vardır. İki kutudaki kalemler de hiç kalem artmayacak ve her paketteki kalem sayısı aynı olacak biçimde küçük paketlere ayrılacaktır. Bir paket tek kalemden de oluşabilir.\n**Buna göre bir paketteki kalem sayısı kaç farklı değer alabilir?**",
  gorsel: null,
  secenekler: ["12", "9", "6", "2"],
  dogru: 2,
  hatalar: [
    "EBOB'u ortak bölenlerin sayısı sanma: 12 en büyük ortak bölendir; kaç tane olduğu sorulmuştur.",
    "36'nın çarpan sayısını bulma: 9 ve 18 gibi çarpanlar 24'ü bölmez.",
    null,
    "Ortak asal çarpanları sayma: ortak asallar 2 ve 3'tür; ortak bölenler bunlardan çok daha fazladır."
  ],
  aciklama: `Paketteki kalem sayısı hem 24'ü hem 36'yı kalansız bölmelidir; yani ortak bölen olmalıdır. Ortak bölenler, EBOB'un bölenleridir.
Adım 1: 24 = 2^{3} · 3 ve 36 = 2^{2} · 3^{2}. EBOB = 2^{2} · 3 = 12.
Adım 2: 12'nin bölenlerini yaz: 1, 2, 3, 4, 6, 12.
Adım 3: 6 farklı değer vardır.
Sağlama: 24'ün bölenleri 1, 2, 3, 4, 6, 8, 12, 24; 36'nınkiler 1, 2, 3, 4, 6, 9, 12, 18, 36. Ortak olanlar 1, 2, 3, 4, 6, 12 → 6 tane.
Sık yapılan hata: EBOB'u (12) cevap sanmak. Sorulan, ortak bölenlerin sayısıdır.
Cevap C.`
},
{
  id: "mat-ck-153",
  kazanim: "M.8.1.1.3",
  kademe: 1,
  zorluk: 2,
  soru: "Bir bahçıvan, fidanları 7 günde bir sulamakta ve 9 günde bir gübrelemektedir. Fidanların bakımına başladığı 1. gün sulama ile gübrelemeyi birlikte yapmış ve bu düzeni sürdürmüştür.\n**Buna göre bahçıvan sulama ile gübrelemeyi ilk kez yeniden kaçıncı gün birlikte yapar?**",
  gorsel: null,
  secenekler: ["127", "64", "63", "16"],
  dogru: 1,
  hatalar: [
    "İkinci ortak günü alma: 1. günden 126 gün sonrası, ikinci birlikte yapılan gündür.",
    null,
    "EKOK'u gün numarası sanma: 63, 1. günden sonra geçen gün sayısıdır; gün numarası 64'tür.",
    "Aralıkları toplama: 7 + 9 = 16; 1. günden 15 gün sonrası ne 7'nin ne 9'un katıdır."
  ],
  aciklama: `7 ile 9 aralarında asal olduğundan EKOK(7, 9) = 7 · 9 = 63'tür. İki iş, birlikte yapıldıkları günden 63 gün sonra yeniden birlikte yapılır.
Adım 1: Birlikte yapılan gün 1. gündür. Sonraki ortak gün 1 + 63 = 64. gündür.
Sağlama: Sulama günleri 1, 8, 15, …, 64; gübreleme günleri 1, 10, 19, …, 64. İlk ortak gün 64'tür, çünkü 64 − 1 = 63 = 7 · 9.
Sık yapılan hata: 63'ü gün numarası sanmak. 63, geçen gün sayısıdır; başlangıç 1. gün olduğunda ortak gün 64'tür.
Cevap B.`
},
{
  id: "mat-ck-154",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Üç arkadaş birer doğal sayı tutmuş ve sayılarını aşağıdaki tabloya yazmıştır.\n**Buna göre bu üç sayının pozitif tam sayı çarpanlarının sayıları toplamı kaçtır?**",
  gorsel: "<table class=\"tablo\"><tr><th>Öğrenci</th><th>Tuttuğu sayı</th></tr><tr><td>Ela</td><td>36</td></tr><tr><td>Can</td><td>40</td></tr><tr><td>Deniz</td><td>45</td></tr></table>",
  secenekler: ["12", "17", "23", "24"],
  dogru: 2,
  hatalar: [
    "Çarpan çiftlerini sayıp her çiftte iki çarpan olduğunu unutma: 5 + 4 + 3 = 12.",
    "1'i ve sayının kendisini çarpan saymama: 7 + 6 + 4 = 17.",
    null,
    "36'da 6 · 6 çiftinde 6'yı iki kez sayma: 10 + 8 + 6 = 24."
  ],
  aciklama: `Bir sayının çarpan sayısı çarpan çiftlerinden bulunur; 1 ve sayının kendisi de çarpandır.
Adım 1: 36 → 1 · 36, 2 · 18, 3 · 12, 4 · 9, 6 · 6. Çarpanlar 1, 2, 3, 4, 6, 9, 12, 18, 36 → 9 tane (6 · 6 çiftinde 6 bir kez sayılır).
Adım 2: 40 → 1 · 40, 2 · 20, 4 · 10, 5 · 8 → 8 çarpan.
Adım 3: 45 → 1 · 45, 3 · 15, 5 · 9 → 6 çarpan.
Adım 4: Topla: 9 + 8 + 6 = 23.
Sağlama: Asal çarpanlarla da bulunur: 36 = 2^{2} · 3^{2} → 3 · 3 = 9; 40 = 2^{3} · 5 → 4 · 2 = 8; 45 = 3^{2} · 5 → 3 · 2 = 6.
Sık yapılan hata: Eşit çarpanlı çifti (6 · 6) iki kez saymak ya da 1 ile sayının kendisini unutmak.
Cevap C.`
},
{
  id: "mat-ck-155",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir tiyatro kulübü, süresi 1 saat 30 dakika olan bir oyunla süresi 2 saat 15 dakika olan başka bir oyunu, hiç süre artmayacak biçimde eşit uzunlukta bölümlere ayıracaktır. Bölümler olabildiğince uzun olacaktır.\n**Buna göre bir bölüm kaç dakikadır?**",
  gorsel: null,
  secenekler: ["15", "30", "45", "90"],
  dogru: 2,
  hatalar: [
    "Birimi çevirmeme: yalnızca dakika kısımları (30 ve 15) alınıp EBOB(30, 15) = 15 bulunmuş; saatler hesaba katılmamış.",
    "Ortak bölen bulup durma: 30, 90'ı böler ama 135'i bölmez (135 ÷ 30 = 4,5); iki süreyi de bölen sayı olmalı.",
    null,
    "Kısa süreyi bölüm sanma: 90, birinci oyunun tamamıdır; 135 dakikalık oyun 90'a kalansız bölünmez."
  ],
  aciklama: `Adım 1: Süreleri aynı birime çevir: 1 sa 30 dk = 90 dk ve 2 sa 15 dk = 135 dk.
Adım 2: Eşit ve olabildiğince uzun bölüm için EBOB(90, 135) aranır. 90 = 2 · 3^{2} · 5 ve 135 = 3^{3} · 5.
Adım 3: Ortak asallar 3 ve 5'tir; küçük üsler 3^{2} ve 5. EBOB = 9 · 5 = 45.
Sağlama: 90 ÷ 45 = 2 ve 135 ÷ 45 = 3 bölüm elde edilir; artan süre yoktur.
Sık yapılan hata: Saat ve dakikayı ayrı ayrı ele almak ya da 30 gibi ortak bir bölenle yetinmek. Önce tek birime (dakika) çevir, sonra en büyük ortak böleni bul.
Cevap C.`
},
{
  id: "mat-ck-156",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir müzede iki rehber robot vardır. Birincisi 12 dakikada bir, ikincisi 15 dakikada bir sesli anons yapmaktadır. Robotlar saat 10.00'da aynı anda anons yapmış ve çalışmaya devam etmiştir.\n**Buna göre saat 10.00 ile 12.00 arasında (10.00 ve 12.00 dahil) robotlar kaç kez aynı anda anons yapar?**",
  gorsel: null,
  secenekler: ["2", "3", "8", "10"],
  dogru: 1,
  hatalar: [
    "Başlangıç anını ya da bitiş anını saymama: 10.00, 11.00 ve 12.00 olmak üzere üç ortak an vardır.",
    null,
    "Yalnızca 15 dakikalık robotun anons sayısını bulma: 120 ÷ 15 = 8.",
    "Yalnızca 12 dakikalık robotun anons sayısını bulma: 120 ÷ 12 = 10."
  ],
  aciklama: `Robotlar 10.00'da birlikte anons yapmıştır. Sonraki ortak anlar, 12 ile 15'in EKOK'u kadar süre sonra gelir.
Adım 1: 12 = 2^{2} · 3 ve 15 = 3 · 5. EKOK = 2^{2} · 3 · 5 = 60 dakika.
Adım 2: Ortak anons anları: 10.00, 11.00 ve 12.00 (iki uç da aralığa dahildir).
Adım 3: Toplam 3 kez.
Sağlama: 11.00'de 12 dakikalık robot 5., 15 dakikalık robot 4. anonsunu yapar; ikisi de aynı ana denk gelir.
Sık yapılan hata: Yalnızca bir robotun anons sayısını bulmak ya da başlangıç anını saymamak.
Cevap B.`
},
{
  id: "mat-ck-157",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir spor okulunda 120 sporcu, her sırada eşit sayıda sporcu olacak biçimde sıralara dizilecektir. Sıra sayısı, 120'nin herhangi bir çarpanı olabilir. 120 sayısı asal çarpanlarına 120 = 2^{3} · 3 · 5 biçiminde ayrılmaktadır.\n**Buna göre sıra sayısı kaç farklı değer alabilir?**",
  gorsel: null,
  secenekler: ["16", "12", "8", "5"],
  dogru: 0,
  hatalar: [
    null,
    "Bir üssü artırmayı unutma: 3 · (1 + 1) · (1 + 1) = 12.",
    "Artırılmış üsleri toplama: 4 + 2 + 2 = 8.",
    "Üsleri toplama: 3 + 1 + 1 = 5."
  ],
  aciklama: `Bir sayının çarpan sayısı, asal çarpanlarının üslerinin 1 fazlasının çarpımına eşittir.
Adım 1: Üsleri bul: 2^{3} → 3, 3 → 1, 5 → 1.
Adım 2: Her üsse 1 ekle: 4, 2, 2.
Adım 3: Çarp: 4 · 2 · 2 = 16.
Sağlama: Çarpanları yaz: 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 24, 30, 40, 60, 120 → 16 tane.
Sık yapılan hata: Üsleri toplamak (5) ya da 1 eklemeyi unutmak.
Cevap A.`
},
{
  id: "mat-ck-158",
  kazanim: "M.8.1.1.3",
  kademe: 1,
  zorluk: 2,
  soru: "Selin, [[n|40]] biçiminde bir kesir yazmıştır. Burada n, 1'den büyük ve asal olmayan bir doğal sayıdır. Selin'in yazdığı kesir sadeleşmemektedir.\n**Buna göre n'nin alabileceği en küçük değer kaçtır?**",
  gorsel: null,
  secenekler: ["3", "4", "9", "21"],
  dogru: 2,
  hatalar: [
    "Asal olmama koşulunu atlama: 3 asal bir sayıdır.",
    "Asal olmayan en küçük sayıyı sadeleşmeyi denetlemeden alma: [[4|40]] kesri 4 ile sadeleşir.",
    null,
    "Koşulu sağlayan ama en küçük olmayan sayıyı alma: 21 ile 40 aralarında asaldır; fakat 9 daha küçüktür."
  ],
  aciklama: `Kesir sadeleşmiyorsa pay ile payda aralarında asaldır: n ile 40'ın 1'den başka ortak böleni yoktur.
Adım 1: 40 = 2^{3} · 5 olduğundan n ne 2'ye ne 5'e bölünmelidir.
Adım 2: Asal olmayan sayıları küçükten dene: 4, 6 ve 8 çifttir (2'ye bölünür) → olmaz. 9 = 3 · 3 asal değildir, 2'ye ve 5'e bölünmez → olur.
Sağlama: 9'un bölenleri 1, 3, 9; 40'ın bölenleri 1, 2, 4, 5, 8, 10, 20, 40. Ortak bölen yalnızca 1'dir.
Sık yapılan hata: 3'ü almak (asaldır) ya da 4'ü almak (40 ile ortak böleni vardır).
Cevap C.`
},
{
  id: "mat-ck-159",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir tiyatro oyununda 48 kostüm, her askıda eşit sayıda kostüm olacak biçimde askılara asılacaktır. Askı sayısı ile bir askıdaki kostüm sayısı 1'den büyük birer doğal sayıdır.\n**Buna göre askı sayısı ile bir askıdaki kostüm sayısının toplamı en az kaç olabilir?**",
  gorsel: null,
  secenekler: ["14", "16", "19", "26"],
  dogru: 0,
  hatalar: [
    null,
    "Birbirine en yakın çifti seçmeme: 4 + 12 = 16, 6 + 8 = 14'ten büyüktür.",
    "Birbirine en yakın çifti seçmeme: 3 + 16 = 19, 6 + 8 = 14'ten büyüktür.",
    "Birbirine en yakın çifti seçmeme: 2 + 24 = 26, 6 + 8 = 14'ten büyüktür."
  ],
  aciklama: `Askı sayısı ile askıdaki kostüm sayısının çarpımı 48'dir. İki sayı birbirine yaklaştıkça toplamları küçülür.
Adım 1: 1'den büyük çarpan çiftlerini yaz: 2 · 24, 3 · 16, 4 · 12, 6 · 8.
Adım 2: Toplamlar: 26, 19, 16, 14.
Adım 3: En küçük toplam 14'tür.
Sağlama: 6 · 8 = 48 ve 6 + 8 = 14. (1 · 48 çifti "1'den büyük" koşuluyla elenmiştir.)
Sık yapılan hata: İlk bulduğun çiftle yetinmek. Bütün çiftleri yaz, toplamlarını karşılaştır.
Cevap A.`
},
{
  id: "mat-ck-160",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir manavın elma sayısı 50'den fazladır. Elmalar 6'şarlı kasalara dizildiğinde 5 elma, 8'erli kasalara dizildiğinde de yine 5 elma artmaktadır.\n**Buna göre manavın elma sayısı en az kaç olabilir?**",
  gorsel: null,
  secenekler: ["29", "53", "72", "77"],
  dogru: 1,
  hatalar: [
    "Koşulu atlama: 29 da bu özelliği taşır ama 50'den fazla değildir.",
    null,
    "Artan 5'i eklemeyi unutma: 72, 24'ün katıdır ve kalansız bölünür.",
    "Uygun sayılardan ikincisini alma: 53'ten sonraki uygun sayı 77'dir."
  ],
  aciklama: `Elma sayısından 5 çıkarılırsa sayı hem 6'ya hem 8'e kalansız bölünür; yani EKOK(6, 8)'in katıdır.
Adım 1: EKOK(6, 8) = 24.
Adım 2: Elma sayısı, 24'ün bir katının 5 fazlasıdır: 29, 53, 77, …
Adım 3: 50'den fazla olan en küçük değer 53'tür.
Sağlama: 53 = 6 · 8 + 5 ve 53 = 8 · 6 + 5; iki durumda da kalan 5'tir.
Sık yapılan hata: Artan elmaları eklemeyi unutmak ya da "50'den fazla" koşulunu atlamak.
Cevap B.`
},
{
  id: "mat-ck-161",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir okulda 1'den 50'ye kadar numaralanmış 50 dolaptan 2, 3 ya da 5'e tam bölünen numaralı dolaplar bakıma alınmıştır. Bakıma alınmayan dolapların bir kısmının numarası asaldır.\n**Buna göre bakıma alınmayan dolaplardan kaçının numarası asal değildir?**",
  gorsel: null,
  secenekler: ["14", "3", "2", "1"],
  dogru: 2,
  hatalar: [
    "Koşulu uygulamadan kalan dolapların hepsini sayma: kalan 14 numaranın 12'si asaldır.",
    "Asal olan 7'yi de asal olmayan sayma: 7 asaldır.",
    null,
    "1'i ya da 49'u unutma: 1 de 49 da asal değildir."
  ],
  aciklama: `Önce bakıma alınmayan numaraları bul, sonra bunlardan asal olmayanları ayıkla.
Adım 1: 2, 3 ya da 5'e bölünmeyen numaralar: 1, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 49 (14 numara).
Adım 2: Bunlardan asal olanlar: 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 (12 numara).
Adım 3: Asal olmayanlar: 1 (asal sayılmaz) ve 49 = 7 · 7.
Sağlama: 14 − 12 = 2.
Sık yapılan hata: 1'i unutmak ya da 7'yi asal saymamak. 1 asal değildir, 7 asaldır.
Cevap C.`
},
{
  id: "mat-ck-162",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Uzunlukları 84 m ve 120 m olan iki halat, hiç artmayacak biçimde eşit uzunlukta parçalara kesilecektir. Parçalar olabildiğince uzun olacaktır. Her kesimde yalnızca bir halat kesilmektedir.\n**Buna göre toplam kaç kesim yapılır?**",
  gorsel: null,
  secenekler: ["12", "15", "16", "17"],
  dogru: 1,
  hatalar: [
    "Ara sonucu cevap sanma: 12, bir parçanın uzunluğudur (EBOB); soru kesim sayısını soruyor.",
    null,
    "Bir halat için n − 1 kuralını uygulamayı unutma: (7 − 1) + 10 = 16.",
    "Parça sayısını kesim sayısı sanma: 7 + 10 = 17 parça elde edilir."
  ],
  aciklama: `Adım 1: Eşit ve olabildiğince uzun parça için EBOB(84, 120) aranır. 84 = 2^{2} · 3 · 7 ve 120 = 2^{3} · 3 · 5. EBOB = 2^{2} · 3 = 12 m.
Adım 2: Parça sayıları: 84 ÷ 12 = 7 ve 120 ÷ 12 = 10.
Adım 3: n parça için n − 1 kesim gerekir: 7 parça için 6, 10 parça için 9 kesim. Toplam 6 + 9 = 15.
Sağlama: Toplam 17 parça oluşur; her halatın son parçası ayrıca kesilmediği için 17 − 2 = 15 kesim yapılır.
Sık yapılan hata: Parça sayısı (17) ile kesim sayısını karıştırmak.
Cevap B.`
},
{
  id: "mat-ck-163",
  kazanim: "M.8.1.1.3",
  kademe: 1,
  zorluk: 2,
  soru: "Dört öğrenci, aralarında asal olma durumu hakkında birer iddia ileri sürmüş ve gerekçelerini aşağıdaki tabloya yazmıştır.\n**Buna göre hangi öğrencinin hem sonucu hem gerekçesi doğrudur?**",
  gorsel: "<table class=\"tablo\"><tr><th>Öğrenci</th><th>İddia ve gerekçe</th></tr><tr><td>Ali</td><td>24 ile 25 aralarında asaldır; çünkü ardışık sayılardır.</td></tr><tr><td>Beste</td><td>21 ile 35 aralarında asaldır; çünkü ikisi de tek sayıdır.</td></tr><tr><td>Can</td><td>17 ile 34 aralarında asaldır; çünkü 17 asal sayıdır.</td></tr><tr><td>Deniz</td><td>9 ile 15 aralarında asaldır; çünkü ikisi de asal sayı değildir.</td></tr></table>",
  secenekler: ["Ali", "Beste", "Can", "Deniz"],
  dogru: 0,
  hatalar: [
    null,
    "İki tek sayıyı aralarında asal sanma: 21 ile 35'in ikisi de 7'ye bölünür.",
    "Birinin asal olması yetmez: 34 = 2 · 17 olduğundan 17 ortak bölendir.",
    "Asal olmamayı aralarında asal olmak sanma: 9 ile 15'in ikisi de 3'e bölünür."
  ],
  aciklama: `Aralarında asal sayıların 1'den başka ortak böleni yoktur. Sayıların tek olması, asal olması ya da asal olmaması bu özelliği tek başına sağlamaz.
Adım 1: Ali: 24 ile 25 ardışıktır. Ardışık iki sayının ortak böleni yalnızca 1 olduğundan sonuç da gerekçe de doğrudur.
Adım 2: Beste: 21 = 3 · 7 ve 35 = 5 · 7; ortak bölen 7. Sonuç yanlış.
Adım 3: Can: 34 = 2 · 17; 17 ortak bölendir. Sonuç yanlış.
Adım 4: Deniz: 9 = 3 · 3 ve 15 = 3 · 5; ortak bölen 3. Sonuç yanlış.
Sık yapılan hata: "Tek", "asal" ya da "asal değil" gibi bir özelliğin aralarında asal olmayı garanti ettiğini sanmak. Ölçüt her zaman ortak bölendir.
Cevap A.`
},
{
  id: "mat-ck-164",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir belediye, parka dikeceği 90 fidanı sıralar hâlinde dikecektir. Her sırada eşit sayıda fidan bulunacak ve hiç fidan artmayacaktır. Sıra sayısı 1'den büyük bir tek sayı olacaktır.\n**Buna göre sıra sayısı kaç farklı değer alabilir?**",
  gorsel: null,
  secenekler: ["4", "5", "6", "12"],
  dogru: 1,
  hatalar: [
    "Bir çarpanı atlama: 2 · 45 çiftindeki 45 tek bir çarpandır ve gözden kaçmış.",
    null,
    "1'i de sayma: 1 tek sayıdır ama sıra sayısının 1'den büyük olması isteniyor.",
    "Koşulları uygulamadan 90'ın bütün çarpanlarını sayma."
  ],
  aciklama: `Sıra sayısı 90'ı kalansız bölmelidir; yani 90'ın bir çarpanıdır.
Adım 1: 90'ın çarpanlarını çiftler hâlinde bul: 1 · 90, 2 · 45, 3 · 30, 5 · 18, 6 · 15, 9 · 10. Çarpanlar 1, 2, 3, 5, 6, 9, 10, 15, 18, 30, 45, 90 (12 tane).
Adım 2: Tek olanları ayır: 1, 3, 5, 9, 15, 45.
Adım 3: "1'den büyük" koşulu 1'i eler: 3, 5, 9, 15, 45 → 5 farklı değer.
Sağlama: Tek çarpanlar 90 = 2 · 45'in 45 kısmından gelir; 45'in çarpanları 1, 3, 5, 9, 15, 45'tir. Aynı liste.
Sık yapılan hata: 1'i saymak ya da çiftteki büyük çarpanı (45) atlamak.
Cevap B.`
},
{
  id: "mat-ck-165",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir okulda koridor nöbeti ayın 3. gününden başlayarak 5 günde bir, bahçe nöbeti ayın 2. gününden başlayarak 4 günde bir tutulmaktadır.\n**Buna göre iki nöbet bu ay ilk kez ayın kaçıncı gününde aynı güne denk gelir?**",
  gorsel: null,
  secenekler: ["8", "10", "14", "18"],
  dogru: 3,
  hatalar: [
    "Yalnızca koridor nöbeti günlerine bakma: 8. gün bahçe nöbeti günü değildir (bahçe: 2, 6, 10, …).",
    "Yalnızca bahçe nöbeti günlerine bakma: 10. gün koridor nöbeti günü değildir (koridor: 3, 8, 13, …).",
    "Yalnızca bahçe nöbeti günlerine bakma: 14. gün koridor nöbeti günü değildir (koridor: 13, 18, …).",
    null
  ],
  aciklama: `Nöbetler aynı günde başlamadığı için EKOK doğrudan cevap vermez; günleri listelemek gerekir.
Adım 1: Koridor nöbeti günleri: 3, 8, 13, 18, 23, 28 (3'ten başlayıp 5'er artar).
Adım 2: Bahçe nöbeti günleri: 2, 6, 10, 14, 18, 22, 26, 30 (2'den başlayıp 4'er artar).
Adım 3: İlk ortak gün 18'dir.
Sağlama: 18 − 3 = 15 = 5 · 3 ve 18 − 2 = 16 = 4 · 4; ikisi de kendi aralığının katıdır.
Sık yapılan hata: EKOK(4, 5) = 20'yi gün numarası sanmak. Başlangıçlar farklıysa önce ilk ortak anı bul, sonrakiler onun üstüne EKOK eklenerek gelir.
Cevap D.`
},
{
  id: "mat-ck-166",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir otoparkta araç yerleri 100'den 999'a kadar üç basamaklı sayılarla numaralandırılmıştır. Park yönetimi, numarası hem 4'e hem 6'ya kalansız bölünen yerleri engelli araçlar için ayırmıştır.\n**Buna göre ayrılan yerlerin en büyük numarası kaçtır?**",
  gorsel: null,
  secenekler: ["984", "992", "996", "999"],
  dogru: 2,
  hatalar: [
    "Ortak kat bulup en büyüğünü aramama: 984 ortak kattır ama 996 daha büyüktür.",
    "Yalnızca 4'e bölünmeyi denetleme: 992 ÷ 6 kalanlıdır.",
    null,
    "En büyük üç basamaklı sayıyı koşula bakmadan alma: 999 tektir, 4'e de 6'ya da bölünmez."
  ],
  aciklama: `Hem 4'e hem 6'ya bölünen sayılar EKOK(4, 6) = 12'nin katlarıdır.
Adım 1: 999 ÷ 12 = 83, kalan 3 (12 · 83 = 996).
Adım 2: 999'dan kalanı çıkar: 999 − 3 = 996. Bir sonraki kat 12 · 84 = 1008 dört basamaklıdır.
Sağlama: 996 ÷ 4 = 249 ve 996 ÷ 6 = 166; ikisi de kalansız.
Sık yapılan hata: 999'dan başlayıp koşulu denetlemeden durmak ya da yalnızca bir sayıya (4) bakmak.
Cevap C.`
},
{
  id: "mat-ck-167",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir kart oyununda her kartın üzerinde asal bir sayı yazmaktadır. Oyuncu, üzerlerindeki sayıların toplamı 30 olan iki kart seçmelidir.\n**Buna göre seçilen iki kartın üzerindeki sayıların farkı en az kaçtır?**",
  gorsel: null,
  secenekler: ["4", "8", "16", "20"],
  dogru: 0,
  hatalar: [
    null,
    "İlk uygun çiftlerde durma: 11 + 19 çiftinde fark 8'dir ama 13 + 17 çifti daha yakındır.",
    "İlk uygun çiftte durma: 7 + 23 çiftinde fark 16'dır ama başka çiftler daha yakındır.",
    "25'i asal sanma: 5 + 25 = 30 olur ama 25 = 5 · 5 asal değildir."
  ],
  aciklama: `Adım 1: Toplamı 30 olan iki asal sayıyı ara. 2 + 28 olmaz (28 asal değil); 3 + 27, 5 + 25 ve 9 + 21 de olmaz; 1 + 29'da 1 asal değildir.
Adım 2: Uygun çiftler: 7 + 23, 11 + 19 ve 13 + 17.
Adım 3: Farklar: 23 − 7 = 16, 19 − 11 = 8, 17 − 13 = 4. En küçüğü 4.
Sağlama: 13 ve 17 asaldır, 13 + 17 = 30 ve 17 − 13 = 4.
Sık yapılan hata: İlk bulunan çiftle yetinmek ya da asal olmayan bir sayıyı (25) çifte katmak.
Cevap A.`
},
{
  id: "mat-ck-168",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir sağlık ocağında A doktoru 9 günde bir, B doktoru 12 günde bir sahaya çıkmaktadır. İki doktor 5 Mart günü birlikte sahaya çıkmıştır. Mart ayı 31 gün çekmektedir.\n**Buna göre iki doktor yeniden ilk kez hangi tarihte birlikte sahaya çıkar?**",
  gorsel: null,
  secenekler: ["9 Nisan", "10 Nisan", "11 Nisan", "13 Nisan"],
  dogru: 1,
  hatalar: [
    "Başlangıç gününü de sayma: 36 gün yerine 35 gün sonrası bulunur.",
    null,
    "Mart'ı 30 gün sayma: 31 gün çeken Mart'ın son günü atlanır.",
    "Mart'ı 28 gün sayma: Mart 31 gün çeker."
  ],
  aciklama: `Ortak çıkış, EKOK(9, 12) gün sonra olur.
Adım 1: 9 = 3^{2} ve 12 = 2^{2} · 3 olduğundan EKOK = 2^{2} · 3^{2} = 36 gün.
Adım 2: 5 Mart'a 36 gün ekle. 5 Mart'tan 31 Mart'a 26 gün vardır; geriye 36 − 26 = 10 gün kalır. Bu da 10 Nisan'dır.
Sağlama: 5 Mart'tan 10 Nisan'a 26 + 10 = 36 gün geçer ve 36 = 9 · 4 = 12 · 3.
Sık yapılan hata: Mart'ın gün sayısını yanlış almak (28 ya da 30) ya da başlangıç gününü saymak.
Cevap B.`
},
{
  id: "mat-ck-169",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Dört öğrenci 180 sayısını asal çarpanlarına ayırmış ve sonuçlarını aşağıdaki tabloya yazmıştır.\n**Buna göre hangi öğrencinin yazdığı ifade 180 sayısının asal çarpanlarına ayrılmış biçimidir?**",
  gorsel: "<table class=\"tablo\"><tr><th>Öğrenci</th><th>Yazdığı ifade</th></tr><tr><td>Ali</td><td>2 · 3² · 10</td></tr><tr><td>Beste</td><td>4 · 9 · 5</td></tr><tr><td>Can</td><td>2 · 3² · 5</td></tr><tr><td>Deniz</td><td>2² · 3² · 5</td></tr></table>",
  secenekler: ["Ali", "Beste", "Can", "Deniz"],
  dogru: 3,
  hatalar: [
    "Asal olmayan çarpanda bırakma: 10 asal değildir (10 = 2 · 5); ayırma yarım kalmış.",
    "Asal olmayan çarpanlarda bırakma: 4 ve 9 asal değildir; bu yalnızca bir çarpımdır.",
    "Üssü unutma: 2 · 3² · 5 = 90 eder, 180 etmez.",
    null
  ],
  aciklama: `Asal çarpanlarına ayrılmış biçimde bütün çarpanlar asaldır ve çarpımları sayıya eşittir.
Adım 1: 180'i bölen merdiveniyle ayır: 180 ÷ 2 = 90, 90 ÷ 2 = 45, 45 ÷ 3 = 15, 15 ÷ 3 = 5, 5 ÷ 5 = 1. Yani 180 = 2 · 2 · 3 · 3 · 5 = 2^{2} · 3^{2} · 5.
Adım 2: Tabloyu denetle. Ali: 2 · 9 · 10 = 180 ama 10 asal değil. Beste: 4 · 9 · 5 = 180 ama 4 ve 9 asal değil. Can: 2 · 9 · 5 = 90, 180 değil. Deniz: 4 · 9 · 5 = 180 ve 2, 3, 5 asal.
Sık yapılan hata: Çarpımın değerini doğru bulunca ifadenin asal çarpanlara ayrılmış olduğunu sanmak. Her çarpanın asal olduğunu da denetle.
Cevap D.`
},
{
  id: "mat-ck-170",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir sinema salonunda 250 koltuk vardır ve koltuklar 1'den başlayarak numaralandırılmıştır. Numarası hem 9'a hem 12'ye kalansız bölünen koltuklara yıldızlı etiket yapıştırılacaktır.\n**Buna göre numarası 100 ile 200 arasında olan kaç koltuğa yıldızlı etiket yapıştırılır?**",
  gorsel: null,
  secenekler: ["3", "4", "5", "6"],
  dogru: 0,
  hatalar: [
    null,
    "72'yi de sayma: 72, 100'den küçüktür.",
    "Aralığı dikkate almadan 200'e kadar bütün katları sayma: 36, 72, 108, 144 ve 180.",
    "Bölümü yukarı yuvarlama: 200 ÷ 36 = 5,5… olur; katların sayısı tam sayıdır ve aralık da dikkate alınmalıdır."
  ],
  aciklama: `Hem 9'a hem 12'ye bölünen sayılar EKOK(9, 12)'nin katlarıdır.
Adım 1: 9 = 3^{2} ve 12 = 2^{2} · 3 olduğundan EKOK = 2^{2} · 3^{2} = 36.
Adım 2: 36'nın katlarını yaz: 36, 72, 108, 144, 180, 216, …
Adım 3: 100 ile 200 arasında kalanlar 108, 144 ve 180'dir: 3 koltuk.
Sağlama: 108 = 36 · 3, 144 = 36 · 4, 180 = 36 · 5; üçü de 9'a ve 12'ye bölünür.
Sık yapılan hata: Aralığın dışında kalan katları (36 ve 72) saymak.
Cevap A.`
},
{
  id: "mat-ck-171",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir kırtasiyedeki defterler 12'şerli paketlenmek istendiğinde 1 defter eksik kalmaktadır; yani 1 defter daha olsaydı paketler tam dolacaktı. Defterler 18'erli paketlenmek istendiğinde de yine 1 defter eksik kalmaktadır. Defter sayısı 100'den azdır.\n**Buna göre defter sayısı en çok kaç olabilir?**",
  gorsel: null,
  secenekler: ["35", "36", "71", "72"],
  dogru: 2,
  hatalar: [
    "En çok değil, en az değeri alma: 35 uygundur ama 71 daha büyüktür.",
    "EKOK'u defter sayısı sanma: 36, 12'ye de 18'e de tam bölünür; 1 defter eksik kalmaz.",
    null,
    "\"1 eksik\" koşulunu unutma: 72, EKOK'un katıdır ve her iki paketlemede de tam olur."
  ],
  aciklama: `Defter sayısına 1 eklenirse sayı hem 12'ye hem 18'e bölünür; yani defter sayısı, EKOK(12, 18)'in bir katının 1 eksiğidir.
Adım 1: 12 = 2^{2} · 3 ve 18 = 2 · 3^{2}. EKOK = 2^{2} · 3^{2} = 36.
Adım 2: 36'nın katlarından 1 çıkar: 35, 71, 107, …
Adım 3: 100'den az olanlar 35 ve 71'dir. En çok olanı 71'dir.
Sağlama: 71 + 1 = 72 = 12 · 6 = 18 · 4.
Sık yapılan hata: Eksik olan 1'i çıkarmak yerine eklemek ya da hiç dikkate almamak.
Cevap C.`
},
{
  id: "mat-ck-172",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir istasyondan iki hattın trenleri kalkmaktadır. A hattının trenleri 45 dakikada bir, B hattının trenleri 75 dakikada bir kalkar. İki hattın trenleri saat 06.10'da birlikte kalkmıştır.\n**Buna göre iki hattın trenleri bu saatten sonra ilk kez saat kaçta yeniden birlikte kalkar?**",
  gorsel: null,
  secenekler: ["06.25", "08.10", "08.35", "09.55"],
  dogru: 3,
  hatalar: [
    "EBOB ile EKOK'u karıştırma: EBOB(45, 75) = 15 alınmış; 06.25'te hiçbir tren kalkmaz.",
    "Süreleri toplama: 45 + 75 = 120 dakika; bu süre ne 45'in ne 75'in katıdır.",
    "225 dakikayı 2 saat 25 dakika sanma: 1 saat 60 dakikadır, 225 dakika 3 saat 45 dakikadır.",
    null
  ],
  aciklama: `İlk ortak kalkış için en küçük ortak kat (EKOK) aranır.
Adım 1: 45 = 3^{2} · 5 ve 75 = 3 · 5^{2}. EKOK = 3^{2} · 5^{2} = 225 dakika.
Adım 2: 225 dakikayı saate çevir: 225 = 3 · 60 + 45 → 3 saat 45 dakika.
Adım 3: 06.10 + 3 saat 45 dakika = 09.55.
Sağlama: 225 ÷ 45 = 5 ve 225 ÷ 75 = 3; ikisi de tam sayı.
Sık yapılan hata: 225 dakikayı 2,25 saat sanıp 2 saat 25 dakika eklemek (08.35). Saatte 60 dakika vardır.
Cevap D.`
},
{
  id: "mat-ck-173",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir bilgi yarışmasında şu soru sorulmuştur: \"Tam olarak üç farklı asal çarpanı olan en küçük üç basamaklı doğal sayı kaçtır?\"\n**Buna göre doğru cevap aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["100", "102", "105", "108"],
  dogru: 1,
  hatalar: [
    "Asal çarpan sayısına bakmadan en küçük üç basamaklı sayıyı alma: 100 = 2^{2} · 5^{2} olup yalnızca iki farklı asal çarpanı vardır.",
    null,
    "Koşulu sağlayan ama en küçük olmayan sayıyı alma: 105 = 3 · 5 · 7 uygundur, 102 daha küçüktür.",
    "Farklı asal çarpanları yanlış sayma: 108 = 2^{2} · 3^{3} olup yalnızca iki farklı asal çarpanı vardır."
  ],
  aciklama: `Üç basamaklı sayıları en küçüğünden başlayıp asal çarpanlarına ayırarak ilerle.
Adım 1: 100 = 2^{2} · 5^{2} → farklı asallar 2 ve 5 (iki tane).
Adım 2: 101 asaldır (2, 3, 5 ve 7'ye bölünmez) → yalnızca bir asal çarpan.
Adım 3: 102 = 2 · 3 · 17 → farklı asallar 2, 3 ve 17 (üç tane). İlk kez burada üç farklı asal çarpan görülür.
Sağlama: 2 · 3 = 6 ve 6 · 17 = 102; üç çarpan da asaldır.
Sık yapılan hata: Üs sayısını çarpan sayısı sanmak. Farklı asal çarpanlar tekrarlar sayılmadan bulunur.
Cevap B.`
},
{
  id: "mat-ck-174",
  kazanim: "M.8.1.1.3",
  kademe: 1,
  zorluk: 2,
  soru: "Zeynep ile Kaan bir sayı oyunu oynamaktadır. Zeynep, aralarında asal olan iki doğal sayı tutmuş ve Kaan'a şu ipucunu vermiştir: \"Sayıların çarpımı 60, toplamı 17'dir.\"\n**Buna göre tutulan iki sayıdan küçük olanı kaçtır?**",
  gorsel: null,
  secenekler: ["2", "3", "4", "5"],
  dogru: 3,
  hatalar: [
    "Aralarında asal olma ve toplam koşulunu denetlememe: 2 · 30 = 60 olur ama toplam 32'dir ve 2 ile 30'un ortak böleni 2'dir.",
    "Toplam koşulunu denetlememe: 3 · 20 = 60 olur ama toplam 23'tür, 17 değil.",
    "Toplam koşulunu denetlememe: 4 · 15 = 60 olur ama toplam 19'dur, 17 değil.",
    null
  ],
  aciklama: `Çarpımı 60 olan çiftleri yazıp toplamı 17 olanı bul, sonra aralarında asal olup olmadığını denetle.
Adım 1: Çarpımı 60 olan çiftler: 1 · 60, 2 · 30, 3 · 20, 4 · 15, 5 · 12, 6 · 10.
Adım 2: Toplamlar sırasıyla 61, 32, 23, 19, 17, 16'dır. Toplamı 17 olan çift 5 ve 12'dir.
Adım 3: 5 ile 12'nin ortak böleni yalnızca 1'dir; aralarında asaldırlar. Küçük olan 5'tir.
Sağlama: 5 · 12 = 60 ve 5 + 12 = 17.
Sık yapılan hata: İlk bulunan çarpan çiftini seçip toplam koşulunu denetlememek.
Cevap D.`
},
{
  id: "mat-ck-175",
  kazanim: "M.8.1.1.3",
  kademe: 1,
  zorluk: 2,
  soru: "Bir parkta iki aydınlatma lambası vardır. Lambaların yanıp sönme aralıkları saniye cinsinden ardışık iki doğal sayıdır. Lambalar birlikte yandıktan sonra 156 saniye geçince ilk kez yeniden birlikte yanmaktadır.\n**Buna göre aralığı kısa olan lamba kaç saniyede bir yanıp söner?**",
  gorsel: null,
  secenekler: ["12", "13", "78", "156"],
  dogru: 0,
  hatalar: [
    null,
    "Uzun olan lambanın aralığını bulma: 13 saniye, ardışık sayıların büyüğüdür.",
    "156'yı yarıya bölme: 78 ile 79 ardışıktır ama EKOK'ları 6162 eder, 156 etmez.",
    "EKOK'u lambanın aralığı sanma: 156, iki lambanın birlikte yanma aralığıdır."
  ],
  aciklama: `Ardışık iki doğal sayı aralarında asaldır; bu yüzden EKOK'ları çarpımlarına eşittir.
Adım 1: Aralıklar n ve n + 1 ise n · (n + 1) = 156 olmalıdır.
Adım 2: Birbirine yakın iki çarpan ara: 11 · 12 = 132 küçük, 13 · 14 = 182 büyüktür; 12 · 13 = 156.
Adım 3: Kısa olan lambanın aralığı 12 saniyedir.
Sağlama: EKOK(12, 13) = 12 · 13 = 156; 12 ile 13 ardışık olduğundan aralarında asaldır.
Sık yapılan hata: Uzun olan lambayı (13) bulup durmak. Soruda kısa olan istenmiştir.
Cevap A.`
}
);
