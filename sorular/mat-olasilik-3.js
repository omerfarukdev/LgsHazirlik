// Matematik — Basit Olayların Olma Olasılığı (M.8.5.1): Kademe 1 (Kavrama) YEDEĞİ, sıra 26-75 (mat-ol-126 … mat-ol-175)
// Her soru tek bir denemeye dayanır (bir top, bir kart, bir zar atışı, bir çark çevirme). Birden fazla olayın olasılığına girilmez.
// Çarklardaki dilim sayıları ve açıları, torbalardaki top sayıları ve tablolardaki değerler soru metinleriyle birebir tutar.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["olasilik"] = window.LGS_BANK["olasilik"] || []).push(
{
  id: "mat-ol-126",
  kazanim: "M.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Bir kutuda 5 kurşun kalem, 4 silgi ve 3 kalemtraş vardır. Kutudan bakmadan bir eşya alınacaktır.\n**Bu olaya ait olası durumların sayısı kaçtır?**",
  gorsel: null,
  secenekler: ["3","5","12","60"],
  dogru: 2,
  hatalar: [
    "Eşya türlerini saydın: kurşun kalem, silgi ve kalemtraş. Kutudaki her eşya ayrı ayrı alınabileceği için her biri ayrı bir olası durumdur.",
    "Yalnızca en çok bulunan eşyayı, yani kurşun kalemleri saydın. Silgiler ve kalemtraşlar da alınabilir; onlar da olası durumdur.",
    null,
    "Sayıları çarptın: 5 · 4 · 3 = 60. Olası durumlar çarpılarak değil, kutudaki eşyalar toplanarak bulunur."
  ],
  aciklama: "Olası durum, bir deneyde ortaya çıkabilecek sonuçların her biridir. Kutudan bir eşya alınırken alınabilecek her eşya ayrı bir olası durumdur.\nAdım 1: Kutudaki eşyaları türlerine göre yaz: 5 kurşun kalem, 4 silgi, 3 kalemtraş.\nAdım 2: Hepsini topla: 5 + 4 + 3 = 12. Alınabilecek 12 eşya olduğu için olası durum sayısı 12'dir.\nSık yapılan hata: Tür sayısını (3) olası durum sayısı sanmak. Aynı türden iki eşya birbirinden ayrı olduğu için ayrı durum sayılır.\nCevap C."
},
{
  id: "mat-ol-127",
  kazanim: "M.8.5.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "Bir sınıfın öğrenci listesinde 14 kız ve 14 erkek öğrenci vardır. Öğretmen, listeden rastgele bir öğrenci seçecektir.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: ["Kız öğrencinin seçilme olasılığı, erkek öğrencinin seçilme olasılığına eşittir.","Kız öğrencinin seçilme olasılığı, erkek öğrencinin seçilme olasılığından büyüktür.","Kız öğrencinin seçilme olasılığı, erkek öğrencinin seçilme olasılığından küçüktür.","Kız öğrencinin seçilme olasılığı 1'dir."],
  dogru: 0,
  hatalar: [
    null,
    "Kızları daha olasılıklı saydın. İki grubun sayıları eşitse olasılıkları da eşittir.",
    "Kızları daha az olasılıklı saydın. İki grubun sayıları eşitse olasılıkları da eşittir.",
    "Listede erkek öğrenciler de vardır; kız seçilme olasılığı [[14|28]] = [[1|2]]'dir, 1 değildir. Olasılığı 1 olan olay her seçimde gerçekleşen olaydır."
  ],
  aciklama: "Aynı listeden yapılan seçimde sayısı çok olan olay daha olasılıklıdır; sayıları eşit olan olaylar eşit olasılıklıdır. Bu durumda hesap yapmak gerekmez.\nAdım 1: Kız ve erkek sayılarını karşılaştır: 14 ve 14. Sayılar eşittir.\nAdım 2: Sayılar eşit olduğu için kız seçilme olasılığı ile erkek seçilme olasılığı da eşittir. İkisi de [[14|28]] = [[1|2]] olur.\nSağlama: [[1|2]] + [[1|2]] = 1 eder.\nCevap A."
},
{
  id: "mat-ol-128",
  kazanim: "M.8.5.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "Bir torbada büyüklükleri ve dokuları aynı olan, 1'den 9'a kadar numaralanmış 9 bilye vardır. Torbadan bakmadan bir bilye çekilecektir.\n**Buna göre 7 numaralı bilyenin çekilme olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[1|9]]","[[1|7]]","[[1|2]]","[[7|9]]"],
  dogru: 0,
  hatalar: [
    null,
    "Bilyenin numarasını (7) olası durum sayısı sandın. Torbada 7 değil 9 bilye vardır; payda 9 olmalıdır.",
    "\"Ya çekilir ya çekilmez\" diye iki eşit şanslı durum varmış gibi düşündün. Torbada 9 bilye olduğu için bu iki durumun olasılığı eşit değildir.",
    "Numarayı pay yaptın. 7 numaralı bilye torbada yalnızca 1 tanedir; pay 1 olmalıdır."
  ],
  aciklama: "Eşit şansa sahip n tane olası durum varsa her birinin olasılığı [[1|n]] olur.\nAdım 1: Bilyeler özdeş olduğu için her birinin çekilme şansı eşittir. Olası durum sayısı 9'dur.\nAdım 2: 7 numaralı bilye torbada yalnızca 1 tanedir. Olasılık = [[1|9]].\nSağlama: 9 bilyenin her birinin olasılığı [[1|9]] olur; dokuzu toplanınca [[9|9]] = 1 eder.\nSık yapılan hata: Bilye üzerindeki numarayı olasılığa katmak. Numara yalnızca bir etikettir; şansı bilye sayısı belirler.\nCevap A."
},
{
  id: "mat-ol-129",
  kazanim: "M.8.5.1.4",
  kademe: 1,
  zorluk: 1,
  soru: "Bir kutuda yalnızca yeşil renkte 8 boncuk vardır. Kutudan bakmadan bir boncuk alınacaktır.\n**Buna göre alınan boncuğun yeşil olmasıyla ilgili aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: ["İmkânsız bir olaydır ve olasılığı 0'dır.","Olasılığı [[1|8]] olan bir olaydır.","Olasılığı [[1|2]] olan bir olaydır.","Kesin bir olaydır ve olasılığı 1'dir."],
  dogru: 3,
  hatalar: [
    "Yeşil boncuğun alınamayacağını düşündün. Kutudaki bütün boncuklar yeşildir; olay imkânsız değildir, olasılığı 0 olamaz.",
    "Her boncuğun alınma olasılığı olan [[1|8]]'i verdin. Soru belirli bir boncuğu değil, yeşil olmayı soruyor; 8 boncuğun hepsi yeşildir.",
    "\"Ya yeşil ya değil\" diye iki eşit şanslı durum varmış gibi düşündün. Kutuda yeşil olmayan boncuk yoktur; bu iki durum eşit şanslı değildir.",
    null
  ],
  aciklama: "Her denemede gerçekleşen olaya kesin olay denir; olasılığı 1'dir. Hiçbir denemede gerçekleşmeyen olaya imkânsız olay denir; olasılığı 0'dır.\nAdım 1: Olası durum sayısı 8'dir (8 boncuk).\nAdım 2: İstenen durumlar yeşil boncuklardır; kutudaki 8 boncuğun hepsi yeşildir. Olasılık = [[8|8]] = 1.\nAdım 3: Olasılığı 1 olan olay kesin olaydır.\nSağlama: Yeşil olmama olasılığı 1 − 1 = 0'dır; kutuda yeşil olmayan boncuk yoktur.\nSık yapılan hata: Bir boncuğun olasılığı ([[1|8]]) ile yeşil olma olasılığını karıştırmak. Burada olay bütün boncukları kapsar.\nCevap D."
},
{
  id: "mat-ol-130",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 1,
  soru: "Bir torbadaki toplar şekilde gösterilmiştir. Torbadan rastgele bir top çekilecektir.\n**Buna göre çekilen topun mavi olma olasılığı kaçtır?**",
  gorsel: "<svg viewBox=\"0 0 400 318\" role=\"img\" aria-label=\"Torbada 3 mavi, 2 kırmızı ve 5 yeşil top\"><path d=\"M150 62 C 70 80, 52 150, 58 210 C 64 262, 120 282, 200 282 C 280 282, 336 262, 342 210 C 348 150, 330 80, 250 62 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><path d=\"M150 62 L 160 36 L 240 36 L 250 62\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/><line x1=\"156\" y1=\"48\" x2=\"244\" y2=\"48\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"120\" cy=\"234\" r=\"17\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"120\" y=\"239\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">M</text><circle cx=\"160\" cy=\"234\" r=\"17\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"160\" y=\"239\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">Y</text><circle cx=\"200\" cy=\"234\" r=\"17\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"200\" y=\"239\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">K</text><circle cx=\"240\" cy=\"234\" r=\"17\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"240\" y=\"239\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">Y</text><circle cx=\"280\" cy=\"234\" r=\"17\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"280\" y=\"239\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">M</text><circle cx=\"120\" cy=\"192\" r=\"17\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"120\" y=\"197\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">Y</text><circle cx=\"160\" cy=\"192\" r=\"17\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"160\" y=\"197\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">M</text><circle cx=\"200\" cy=\"192\" r=\"17\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"200\" y=\"197\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">Y</text><circle cx=\"240\" cy=\"192\" r=\"17\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"240\" y=\"197\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">K</text><circle cx=\"280\" cy=\"192\" r=\"17\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2.5\"/><text x=\"280\" y=\"197\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">Y</text><text x=\"200\" y=\"308\" font-size=\"15\" text-anchor=\"middle\" fill=\"currentColor\">M: mavi · K: kırmızı · Y: yeşil</text></svg>",
  secenekler: ["[[3|10]]","[[1|3]]","[[3|7]]","[[7|10]]"],
  dogru: 0,
  hatalar: [
    null,
    "Üç renk olduğu için her rengin olasılığını eşit sandın. Renklerin top sayıları farklıdır.",
    "Mavi topları, mavi olmayan 7 topa oranladın. Payda torbadaki bütün topların sayısı (10) olmalıdır.",
    "Mavi olmama olasılığını buldun: [[7|10]]. Soru mavi olma olasılığını istiyor."
  ],
  aciklama: "Adım 1: Torbadaki topları say. Mavi (M) 3, kırmızı (K) 2, yeşil (Y) 5 top vardır. Toplam 3 + 2 + 5 = 10 top, yani 10 olası durum vardır.\nAdım 2: İstenen durum mavi toplardır: 3 tane.\nAdım 3: Olasılık = [[3|10]].\nSağlama: Mavi olmayan 7 top vardır. [[3|10]] + [[7|10]] = 1 eder.\nCevap A."
},
{
  id: "mat-ol-131",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 1,
  soru: "1'den 10'a kadar numaralanmış 10 eş dilimli bir çark bir kez çevrilecektir.\n**Okun asal sayı yazılı bir dilimde durma olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[3|10]]","[[2|5]]","[[1|2]]","[[3|5]]"],
  dogru: 1,
  hatalar: ["2'yi unuttun: 2 de asal sayıdır; hem en küçük asal hem de tek çift asal sayıdır.",null,"1'i de asal saydın. 1'in tek böleni kendisidir; asal sayı değildir.","Asal olmayan sayıların olasılığını buldun: 1, 4, 6, 8, 9 ve 10 gelmesi [[6|10]] = [[3|5]] eder."],
  aciklama: "Asal sayı, yalnızca 1'e ve kendisine bölünebilen, 1'den büyük doğal sayıdır.\nAdım 1: Olası durumlar 1'den 10'a kadar 10 dilimdir. Dilimler eş olduğu için her birinin şansı eşittir.\nAdım 2: Bu sayılardan asal olanlar 2, 3, 5 ve 7'dir; 4 tane.\nAdım 3: Olasılık = [[4|10]] = [[2|5]].\nSağlama: Asal olmayanlar 1, 4, 6, 8, 9 ve 10'dur (6 tane); [[4|10]] + [[6|10]] = 1.\nSık yapılan hata: 1'i asal saymak ya da 2'nin asal olduğunu unutmak.\nCevap B."
},
{
  id: "mat-ol-132",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 1,
  soru: "Bir okulda 8. sınıf şubelerinin mevcutları aşağıdaki tabloda verilmiştir. Okul müdürü bu öğrencilerden birini rastgele seçip konuşma yapmasını isteyecektir.\n**Buna göre seçilen öğrencinin 8-B şubesinden olma olasılığı kaçtır?**",
  gorsel: "<table class=\"tablo\"><tr><th>Şube</th><th>8-A</th><th>8-B</th><th>8-C</th></tr><tr><th>Öğrenci sayısı</th><td>24</td><td>21</td><td>15</td></tr></table>",
  secenekler: ["[[1|3]]","[[7|20]]","[[7|13]]","[[7|8]]"],
  dogru: 1,
  hatalar: [
    "Üç şube olduğu için her şubenin olasılığını eşit sandın. Şubelerin mevcutları farklıdır.",
    null,
    "8-B'yi, öteki iki şubenin toplamına (39) oranladın. Payda bütün öğrencilerin sayısı (60) olmalıdır.",
    "8-B'yi yalnızca 8-A ile karşılaştırdın: 21 ve 24. Payda bütün öğrencilerin sayısı olmalıdır."
  ],
  aciklama: "Adım 1: Olası durumlar okuldaki bütün öğrencilerdir: 24 + 21 + 15 = 60.\nAdım 2: İstenen durumlar 8-B'deki öğrencilerdir: 21 tane.\nAdım 3: Olasılık = [[21|60]]. Pay ve paydayı 3'e böl: [[7|20]].\nSağlama: 8-B'de olmayan 39 öğrenci vardır. [[21|60]] + [[39|60]] = 1 eder.\nCevap B."
},
{
  id: "mat-ol-133",
  kazanim: "M.8.5.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "Ayşe'nin bir sınavdan 90 ve üzeri puan alma olasılığı 0,05; Burak'ın aynı sınavdan 90 ve üzeri puan alma olasılığı 0,40 olarak hesaplanmıştır.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: ["Ayşe'nin 90 ve üzeri puan alma şansı, Burak'ınkinden fazladır.","Ayşe'nin 90 ve üzeri puan alması imkânsızdır.","Burak'ın 90 ve üzeri puan alması kesindir.","Burak'ın 90 ve üzeri puan alma şansı, Ayşe'ninkinden fazladır."],
  dogru: 3,
  hatalar: [
    "Olasılığı küçük olanın şansını fazla saydın. Olasılık değeri büyüdükçe olma şansı da artar; 0,40, 0,05'ten büyüktür.",
    "Küçük bir olasılığı imkânsız olay sandın. Olasılığı 0,05 olan olay olabilir; imkânsız olayın olasılığı tam 0'dır.",
    "Olasılığı 0,40 olan olayı kesin sandın. Kesin olayın olasılığı 1'dir; 0,40 bundan küçüktür.",
    null
  ],
  aciklama: "Olasılık, bir olayın olma şansını gösteren bir ölçümdür. Değeri büyük olan olayın olma şansı daha fazladır.\nAdım 1: İki değeri karşılaştır: 0,05 < 0,40.\nAdım 2: Burak'ın olasılığı daha büyük olduğundan Burak'ın 90 ve üzeri alma şansı daha fazladır.\nAdım 3: Değerlerin hiçbiri 0 ya da 1 olmadığı için bu olaylar ne imkânsızdır ne de kesindir.\nSık yapılan hata: Küçük bir olasılığı \"imkânsız\" saymak. Yalnızca 0 imkânsızlığı gösterir.\nCevap D."
},
{
  id: "mat-ol-134",
  kazanim: "M.8.5.1.4",
  kademe: 1,
  zorluk: 1,
  soru: "Bir basketbolcunun serbest atış çizgisinden attığı topun potaya girme olasılığı %60 olarak hesaplanmıştır.\n**Buna göre bu atışın potaya girmeme olasılığı yüzde kaçtır?**",
  gorsel: null,
  secenekler: ["%30","%40","%60","%160"],
  dogru: 1,
  hatalar: [
    "%60'ı ikiye bölerek bulmaya çalıştın. Girme ve girmeme olasılıklarının toplamı %100'dür.",
    null,
    "Girme olasılığını girmeme olasılığı sandın. İkisi ancak %50 olduğunda eşit olur.",
    "%60'ı %100'e ekledin. Girmeme olasılığı %100'den çıkarılarak bulunur; ayrıca olasılık %100'ü aşamaz."
  ],
  aciklama: "Bir olayın olma olasılığı ile olmama olasılığının toplamı 1'dir, yani %100'dür.\nAdım 1: Girme olasılığı %60'tır.\nAdım 2: Girmeme olasılığı = %100 − %60 = %40.\nSağlama: %60 + %40 = %100 eder.\nSık yapılan hata: Olasılığı %100'e eklemek; bu, %100'ü aşan ve olamayacak bir değer verir.\nCevap B."
},
{
  id: "mat-ol-135",
  kazanim: "M.8.5.1.4",
  kademe: 1,
  zorluk: 1,
  soru: "Aşağıda bir olayın olasılığı olarak yazılmış dört sayı verilmiştir.\n**Bu sayılardan hangisi bir olayın olasılığı olabilir?**",
  gorsel: null,
  secenekler: ["−0,5","−0,1","[[5|8]]","1,5"],
  dogru: 2,
  hatalar: [
    "Olasılık negatif olamaz. En küçük olasılık 0'dır (imkânsız olay).",
    "Eksi bir sayı olasılık olamaz; −0,1, 0'dan küçüktür.",
    null,
    "1,5 sayısı 1'den büyüktür. Olasılık en çok 1 olabilir (kesin olay)."
  ],
  aciklama: "Bir olayın olasılığı 0 ile 1 arasındadır (0 ve 1 dâhil). Negatif olamaz, 1'den büyük olamaz.\nAdım 1: −0,5 ve −0,1 negatif sayılardır; olasılık olamazlar.\nAdım 2: 1,5 sayısı 1'den büyüktür; olasılık olamaz.\nAdım 3: [[5|8]] kesrinde pay paydadan küçüktür; değeri 0,625'tir ve 0 ile 1 arasındadır.\nSağlama: 0 ≤ 0,625 ≤ 1 olduğundan [[5|8]] bir olasılık değeri olabilir.\nCevap C."
},
{
  id: "mat-ol-136",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 1,
  soru: "Bir kalemlikte 6 mavi, 4 siyah ve 2 kırmızı kalem vardır. Kalemlikten bakmadan bir kalem alınacaktır.\n**Kalemlikten alınan kalemin kırmızı olmama olasılığı aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["[[1|6]]","[[1|3]]","[[1|2]]","[[5|6]]"],
  dogru: 3,
  hatalar: [
    "Kırmızı olma olasılığını buldun: [[2|12]] = [[1|6]]. Soru kırmızı olmama olasılığını istiyor.",
    "Yalnızca siyah kalemleri saydın: [[4|12]] = [[1|3]]. Kırmızı olmayan kalemler hem mavi hem siyah olanlardır.",
    "Yalnızca mavi kalemleri saydın: [[6|12]] = [[1|2]]. Kırmızı olmayan kalemler siyahları da içerir.",
    null
  ],
  aciklama: "Adım 1: Kalemlikteki kalem sayısı 6 + 4 + 2 = 12'dir.\nAdım 2: Kırmızı olmayan kalemler mavi ve siyah olanlardır: 6 + 4 = 10 tane.\nAdım 3: Olasılık = [[10|12]] = [[5|6]].\nSağlama: Kırmızı olma olasılığı [[2|12]] = [[1|6]]'dır; [[1|6]] + [[5|6]] = 1 eder.\nCevap D."
},
{
  id: "mat-ol-137",
  kazanim: "M.8.5.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "Bir okul şenliğinde şans kutusunda 2 ödüllü ve 8 ödülsüz kart vardır. Katılımcı kutudan bakmadan bir kart çekecektir.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: ["Ödüllü kart çekme olasılığı, ödülsüz kart çekme olasılığından küçüktür.","Ödüllü kart çekme olasılığı, ödülsüz kart çekme olasılığına eşittir.","Ödüllü kart çekme olasılığı, ödülsüz kart çekme olasılığından büyüktür.","Ödüllü kart çekme olasılığı 1'dir."],
  dogru: 0,
  hatalar: [
    null,
    "Kutuda iki tür kart olduğu için olasılıkları eşit sandın. Kart sayıları farklıdır (2 ve 8); sayısı çok olanın olasılığı daha büyüktür.",
    "Az olan kartın olasılığını büyük saydın. Ödüllü kart yalnızca 2 tanedir; olasılığı [[2|10]] iken ödülsüzün olasılığı [[8|10]]'dur.",
    "Ödüllü kartlar 2 tanedir; 8 ödülsüz kart da çekilebilir. Ödüllü kart çekme olasılığı [[2|10]] = [[1|5]]'tir, 1 değildir."
  ],
  aciklama: "Aynı kutudan seçim yapılıyorsa hesap yapmadan sayıları karşılaştırabilirsin: sayısı az olan olay daha az olasılıklıdır.\nAdım 1: Ödüllü kart sayısı 2, ödülsüz kart sayısı 8'dir.\nAdım 2: 2 < 8 olduğundan ödüllü kart çekme olasılığı ([[2|10]]), ödülsüz kart çekme olasılığından ([[8|10]]) küçüktür.\nAdım 3: İki olay da gerçekleşebildiği için hiçbiri imkânsız ya da kesin değildir.\nSık yapılan hata: İki tür kart olduğu için olasılıkları yarı yarıya saymak.\nCevap A."
},
{
  id: "mat-ol-138",
  kazanim: "M.8.5.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "Aşağıdaki çark 12 eş dilime ayrılmıştır ve dilimlere yılın aylarının kısaltmaları yazılmıştır. Çark çevrildiğinde ok dilimlerden birini gösterecektir.\n**Buna göre okun Haziran ayının yazılı olduğu dilimi gösterme olasılığı kaçtır?**",
  gorsel: "<svg viewBox=\"0 0 460 385\" role=\"img\" aria-label=\"Aylar yazılı 12 eş dilimli çark\"><path d=\"M230 195 L230 50 A145 145 0 0 1 302.5 69.43 Z\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"257.02\" y=\"99.06\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">Oca</text><path d=\"M230 195 L302.5 69.43 A145 145 0 0 1 355.57 122.5 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"303.82\" y=\"126.08\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">Şub</text><path d=\"M230 195 L355.57 122.5 A145 145 0 0 1 375 195 Z\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"330.84\" y=\"172.88\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">Mar</text><path d=\"M230 195 L375 195 A145 145 0 0 1 355.57 267.5 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"330.84\" y=\"226.92\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">Nis</text><path d=\"M230 195 L355.57 267.5 A145 145 0 0 1 302.5 320.57 Z\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"303.82\" y=\"273.72\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">May</text><path d=\"M230 195 L302.5 320.57 A145 145 0 0 1 230 340 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"257.02\" y=\"300.74\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">Haz</text><path d=\"M230 195 L230 340 A145 145 0 0 1 157.5 320.57 Z\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"202.98\" y=\"300.74\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">Tem</text><path d=\"M230 195 L157.5 320.57 A145 145 0 0 1 104.43 267.5 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"156.18\" y=\"273.72\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">Ağu</text><path d=\"M230 195 L104.43 267.5 A145 145 0 0 1 85 195 Z\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"129.16\" y=\"226.92\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">Eyl</text><path d=\"M230 195 L85 195 A145 145 0 0 1 104.43 122.5 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"129.16\" y=\"172.88\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">Eki</text><path d=\"M230 195 L104.43 122.5 A145 145 0 0 1 157.5 69.43 Z\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"156.18\" y=\"126.08\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">Kas</text><path d=\"M230 195 L157.5 69.43 A145 145 0 0 1 230 50 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"202.98\" y=\"99.06\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">Ara</text><circle cx=\"230\" cy=\"195\" r=\"6\" fill=\"currentColor\"/><polygon points=\"230,65 214.7,31 245.3,31\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/></svg>",
  secenekler: ["[[1|12]]","[[1|6]]","[[1|2]]","[[11|12]]"],
  dogru: 0,
  hatalar: [
    null,
    "Haziran'ın yılın 6. ayı olduğunu paydaya yazdın. Çarkta 6 değil, 12 dilim vardır.",
    "Haziran'ın sırasını (6) pay aldın: [[6|12]]. Haziran dilimi çarkta yalnızca 1 tanedir; pay 1 olmalıdır.",
    "Haziran dilimini göstermeme olasılığını buldun: [[11|12]]. Soru gösterme olasılığını istiyor."
  ],
  aciklama: "Adım 1: Çark 12 eş dilimli olduğundan olası durum sayısı 12'dir ve her dilimin olasılığı eşittir.\nAdım 2: Haziran yazılı dilim yalnızca 1 tanedir. Olasılık = [[1|12]].\nSağlama: 12 dilimin her birinin olasılığı [[1|12]] olur; hepsi toplanınca [[12|12]] = 1 eder.\nSık yapılan hata: Ayın sıra numarasını (6) olasılığa karıştırmak. Dilimin üzerindeki yazı yalnızca bir etikettir; olasılığı dilim sayısı belirler.\nCevap A."
},
{
  id: "mat-ol-139",
  kazanim: "M.8.5.1.4",
  kademe: 1,
  zorluk: 1,
  soru: "Bir kutuda 5 mavi ve 3 yeşil boncuk vardır. Kutudan bakmadan bir boncuk alınacaktır.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: ["Alınan boncuğun mavi olması kesin bir olaydır.","Alınan boncuğun yeşil olması imkânsız bir olaydır.","Alınan boncuğun mavi olmaması kesin bir olaydır.","Alınan boncuğun kırmızı olması imkânsız bir olaydır."],
  dogru: 3,
  hatalar: [
    "Kutuda 3 yeşil boncuk da vardır; yeşil boncuk çıkarsa olay gerçekleşmez. Mavi olma olasılığı [[5|8]]'dir, 1 değildir.",
    "Kutuda 3 yeşil boncuk vardır; bu olay gerçekleşebilir, olasılığı [[3|8]]'dir, 0 değildir.",
    "Mavi olmama olasılığı [[3|8]]'dir; mavi boncuk da alınabileceği için bu olay kesin değildir.",
    null
  ],
  aciklama: "İmkânsız olay, hiçbir denemede gerçekleşemeyen olaydır; olasılığı 0'dır. Kesin olay her denemede gerçekleşir; olasılığı 1'dir.\nAdım 1: Kutuda yalnızca mavi ve yeşil boncuklar var.\nAdım 2: Kırmızı boncuk olmadığı için kırmızı boncuk alınması hiçbir zaman gerçekleşemez; olasılığı [[0|8]] = 0'dır.\nAdım 3: Mavi olma ([[5|8]]), yeşil olma ([[3|8]]) ve mavi olmama ([[3|8]]) olayları gerçekleşebilir; olasılıkları 0 ya da 1 olmadığı için ne imkânsız ne de kesindirler.\nSık yapılan hata: Sayısı az olan bir rengi (yeşil) imkânsız sanmak.\nCevap D."
},
{
  id: "mat-ol-140",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 1,
  soru: "Bir bahçede 6 lale, 9 gül ve 3 papatya açmıştır. Bahçıvan çiçeklerden birini rastgele koparacaktır.\n**Buna göre koparılan çiçeğin gül olma olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[1|18]]","[[1|2]]","[[2|3]]","1"],
  dogru: 1,
  hatalar: [
    "Tek bir çiçeğin olasılığını verdin. Gül 1 değil, 9 tanedir.",
    null,
    "Laleleri güllere oranladın: [[6|9]] = [[2|3]]. Soru gül olma olasılığını istiyor; payda bütün çiçeklerin sayısı (18) olmalıdır.",
    "Gülleri, gül olmayan 9 çiçeğe oranladın: [[9|9]] = 1. Payda bütün çiçeklerin sayısı (18) olmalıdır."
  ],
  aciklama: "Adım 1: Çiçeklerin hepsi olası durumdur: 6 + 9 + 3 = 18.\nAdım 2: İstenen durum gül sayısıdır: 9.\nAdım 3: Olasılık = [[9|18]] = [[1|2]].\nSağlama: Gül olmayan 9 çiçek vardır. [[9|18]] + [[9|18]] = 1 eder.\nSık yapılan hata: Gül sayısını gül olmayan çiçeklerin sayısına oranlamak. Paydada her zaman bütün olası durumlar bulunur.\nCevap B."
},
{
  id: "mat-ol-141",
  kazanim: "M.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Aşağıdaki kartların her birine ÇİÇEK sözcüğünün bir harfi yazılmıştır. Kartlar ters çevrilip karıştırıldıktan sonra bir kart çekilecektir. Çekilebilecek her kart ayrı bir durum sayılacaktır.\n**Bu olaya ait olası durumların sayısı kaçtır?**",
  gorsel: "<svg viewBox=\"0 0 320 84\" role=\"img\" aria-label=\"Üzerinde Ç, İ, Ç, E ve K harfleri yazılı beş kart\"><rect x=\"10\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"36\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">Ç</text><rect x=\"72\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"98\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">İ</text><rect x=\"134\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">Ç</text><rect x=\"196\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"222\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">E</text><rect x=\"258\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"284\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">K</text></svg>",
  secenekler: ["2","3","4","5"],
  dogru: 3,
  hatalar: [
    "Tekrar eden Ç harfini saydın. Çekilebilecek kartların hepsi olası durumdur.",
    "Sözcükte yalnızca bir kez geçen harfleri (İ, E, K) saydın. Ç kartları da çekilebilir.",
    "Farklı harfleri (Ç, İ, E, K) saydın. Soruda her kartın ayrı bir durum sayılacağı belirtilmiştir; iki Ç kartı da ayrı birer olası durumdur.",
    null
  ],
  aciklama: "Adım 1: Her harf ayrı bir karta yazıldığı için kartları say: Ç, İ, Ç, E, K → 5 kart.\nAdım 2: Çekilebilecek her kart ayrı bir olası durumdur; iki Ç kartı bile ayrı iki kart olduğundan iki ayrı durum oluşturur. Olası durum sayısı 5'tir.\nSık yapılan hata: Farklı harf sayısını (4) olası durum sayısı sanmak.\nCevap D."
},
{
  id: "mat-ol-142",
  kazanim: "M.8.5.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "Aynı büyüklükteki topların bulunduğu iki torbadan birincide 6 kırmızı ve 4 mavi, ikincide 3 kırmızı ve 7 mavi top vardır. Elif, torbalardan birini seçip içinden bakmadan bir top çekecek ve kırmızı top çekmek istemektedir.\n**Buna göre Elif hangi torbayı seçmelidir?**",
  gorsel: null,
  secenekler: ["2. torbayı","Hangisini seçse de olasılık aynıdır.","1. torbayı","Hangisinin daha avantajlı olduğu söylenemez."],
  dogru: 2,
  hatalar: [
    "Kırmızı topları az olan torbayı seçtin. Toplam sayıları eşit olan torbalarda, kırmızısı çok olanın olasılığı daha büyüktür.",
    "İki torbada da 10 top olduğunu görüp olasılıkları eşit sandın. Toplamlar eşit ama kırmızı sayıları (6 ve 3) farklıdır.",
    null,
    "Karar verilebilir: toplamlar eşit olduğundan kırmızı top sayılarını karşılaştırmak yeterlidir."
  ],
  aciklama: "İki torbada toplam top sayısı eşitse, kırmızı top sayısı fazla olan torbada kırmızı çekme olasılığı daha büyüktür.\nAdım 1: İki torbada da 6 + 4 = 10 ve 3 + 7 = 10 top vardır; toplamlar eşittir.\nAdım 2: Kırmızı top sayıları 6 ve 3'tür. 6 > 3 olduğundan 1. torbada kırmızı çekme olasılığı ([[6|10]]), 2. torbadakinden ([[3|10]]) büyüktür.\nSık yapılan hata: Torbalarda eşit sayıda top olduğunu görüp olasılıkların eşit olduğunu sanmak.\nCevap C."
},
{
  id: "mat-ol-143",
  kazanim: "M.8.5.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "Bir mağazanın açılış çarkı 16 eş dilime ayrılmıştır ve dilimlerden yalnızca biri \"büyük ödül\" dilimidir. Çark bir kez çevrilecektir.\n**Buna göre okun büyük ödül dilimini gösterme olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[1|16]]","[[1|15]]","[[1|2]]","[[15|16]]"],
  dogru: 0,
  hatalar: [
    null,
    "Büyük ödül dilimini olası durumlardan çıkardın. Çarkta o dilim de dâhil 16 dilim vardır; payda 16 olmalıdır.",
    "\"Ya kazanır ya kazanamaz\" diye iki eşit şanslı durum varmış gibi düşündün. Dilimler eş olduğundan büyük ödül dilimi 16 dilimden yalnızca biridir.",
    "Büyük ödülü kazanamama olasılığını buldun: [[15|16]]. Soru kazanma olasılığını istiyor."
  ],
  aciklama: "Eş dilimli çarkta okun her dilimi gösterme şansı eşittir; n dilimli çarkta her dilimin olasılığı [[1|n]]'dir.\nAdım 1: Çark 16 eş dilimlidir; olası durum sayısı 16.\nAdım 2: Büyük ödül dilimi 1 tanedir. Olasılık = [[1|16]].\nSağlama: Büyük ödülü kazanamama olasılığı [[15|16]] olur; [[1|16]] + [[15|16]] = 1 eder.\nCevap A."
},
{
  id: "mat-ol-144",
  kazanim: "M.8.5.1.4",
  kademe: 1,
  zorluk: 1,
  soru: "Bir deneyde bir olayın olma olasılığı 1 olarak hesaplanmıştır.\n**Buna göre bu olay için aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: ["Hiçbir denemede gerçekleşmez.","Her denemede gerçekleşir.","Gerçekleşme şansı [[1|2]]'dir.","Yalnızca bazı denemelerde gerçekleşir."],
  dogru: 1,
  hatalar: [
    "Bu, olasılığı 0 olan imkânsız olayın özelliğidir.",
    null,
    "Olasılığı [[1|2]] olan olay yarı yarıya şanslıdır. Olasılığın 1 olması olayın kesin olduğunu gösterir.",
    "Her denemede gerçekleşmeyen bir olayın olasılığı 1'den küçüktür. Olasılığı 1 olan olay hiç aksamaz."
  ],
  aciklama: "Olasılığı 1 olan olaya kesin olay denir; kesin olay deney her yapıldığında gerçekleşir. Olasılığı 0 olan olaya imkânsız olay denir; hiçbir zaman gerçekleşmez.\nAdım 1: Verilen olasılık 1'dir; olay kesin olaydır.\nAdım 2: Kesin olay her denemede gerçekleşir. Örnek: yalnızca kırmızı topun bulunduğu torbadan kırmızı top çekmek.\nSık yapılan hata: Kesin olayı imkânsız olayla karıştırmak. 1 her zaman olur, 0 hiçbir zaman olmaz.\nCevap B."
},
{
  id: "mat-ol-145",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 1,
  soru: "Hilesiz bir zar bir kez atılacaktır.\n**Zarın üst yüzüne gelen sayının 3'ten küçük olmama olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[1|6]]","[[1|3]]","[[2|3]]","[[5|6]]"],
  dogru: 2,
  hatalar: [
    "Tek bir sayının olasılığını verdin. 3'ten küçük olmayan sayılar 3, 4, 5 ve 6'dır.",
    "3'ten küçük olma olasılığını buldun: 1 ve 2 → [[2|6]] = [[1|3]]. Soru olmama olasılığını istiyor.",
    null,
    "Yalnızca 1'i dışarıda bıraktın. 2 de 3'ten küçüktür; dışarıda kalması gereken iki sayı vardır."
  ],
  aciklama: "Adım 1: Olası durumlar 1, 2, 3, 4, 5, 6'dır; sayısı 6.\nAdım 2: 3'ten küçük sayılar 1 ve 2'dir. \"3'ten küçük olmama\" olayına 3, 4, 5 ve 6 girer. İstenen durum sayısı 4.\nAdım 3: Olasılık = [[4|6]] = [[2|3]].\nSağlama: 3'ten küçük olma olasılığı [[2|6]] = [[1|3]]'tür; [[1|3]] + [[2|3]] = 1 eder.\nSık yapılan hata: Soruyu \"olma\" olarak okuyup [[1|3]] bulmak. Kökteki \"olmama\" sözcüğünü iki kez oku.\nCevap C."
},
{
  id: "mat-ol-146",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 1,
  soru: "Bir çekmecede aynı büyüklükte 4 beyaz, 6 siyah ve 5 gri çorap vardır. Çorapların hepsi tektir. Işık yokken çekmeceden bir çorap alınacaktır.\n**Alınan çorabın siyah olma olasılığı aşağıdakilerden hangisine eşittir?**",
  gorsel: null,
  secenekler: ["[[4|15]]","[[2|5]]","[[3|5]]","[[2|3]]"],
  dogru: 1,
  hatalar: [
    "Beyaz çorapların olasılığını buldun: [[4|15]]. Soru siyah çorapları soruyor.",
    null,
    "Siyah olmama olasılığını buldun: [[9|15]] = [[3|5]]. Soru siyah olma olasılığını istiyor.",
    "Siyahları, siyah olmayan 9 çorapla (4 + 5) oranladın: [[6|9]]. Payda bütün çorapların sayısı (15) olmalıdır."
  ],
  aciklama: "Adım 1: Çekmecedeki çorapların hepsi olası durumdur: 4 + 6 + 5 = 15.\nAdım 2: İstenen durum siyah çoraplardır: 6 tane.\nAdım 3: Olasılık = [[6|15]]. Pay ve paydayı 3'e böl: [[2|5]].\nSağlama: Siyah olmayan 9 çorap vardır. [[6|15]] + [[9|15]] = 1 eder.\nCevap B."
},
{
  id: "mat-ol-147",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 1,
  soru: "Aşağıdaki kartların üzerine 1'den 7'ye kadar sayılar yazılmıştır. Kartlar ters çevrilip karıştırıldıktan sonra bir kart çekilecektir.\n**Buna göre çekilen kartın üzerindeki sayının tek sayı olma olasılığı kaçtır?**",
  gorsel: "<svg viewBox=\"0 0 444 84\" role=\"img\" aria-label=\"Üzerinde 1, 2, 3, 4, 5, 6 ve 7 yazılı yedi kart\"><rect x=\"10\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"36\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">1</text><rect x=\"72\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"98\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">2</text><rect x=\"134\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">3</text><rect x=\"196\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"222\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">4</text><rect x=\"258\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"284\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">5</text><rect x=\"320\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"346\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">6</text><rect x=\"382\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"408\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">7</text></svg>",
  secenekler: ["[[3|7]]","[[1|2]]","[[4|7]]","[[5|7]]"],
  dogru: 2,
  hatalar: [
    "Çift sayılı kartları saydın: 2, 4, 6 → [[3|7]]. Soru tek sayıları istiyor.",
    "Tek ve çift sayıları iki eşit grup sandın. Kartlarda 4 tek, 3 çift sayı vardır; gruplar eşit değildir.",
    null,
    "Sayıların tek mi çift mi olduğuna bakmadan ilk beş kartı saydın. Tek sayılar yalnızca 1, 3, 5 ve 7'dir."
  ],
  aciklama: "Adım 1: Kartlar 1, 2, 3, 4, 5, 6, 7'dir; olası durum sayısı 7.\nAdım 2: Tek sayılar 1, 3, 5 ve 7'dir. İstenen durum sayısı 4.\nAdım 3: Olasılık = [[4|7]].\nSağlama: Çift sayılı kartlar 2, 4, 6'dır (3 kart); [[4|7]] + [[3|7]] = 1 eder.\nSık yapılan hata: Tek ve çift sayıları eşit sayıda sanmak. 1'den 7'ye kadar 4 tek, 3 çift sayı vardır.\nCevap C."
},
{
  id: "mat-ol-148",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 1,
  soru: "Bir tombala torbasında 1'den 50'ye kadar numaralanmış, özdeş 50 top vardır. Torbadan bir top çekilecektir.\n**Buna göre çekilen topun numarasının tek sayı olma olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[1|50]]","[[1|25]]","[[12|25]]","[[1|2]]"],
  dogru: 3,
  hatalar: [
    "Tek bir topun çekilme olasılığını verdin. İstenen durum sayısı 1 değil, çok daha fazladır.",
    "Tek sayıların sayısını (25) paydaya yazdın. Payda bütün topların sayısı olan 50 olmalı, pay da 25 olmalıdır.",
    "Tek sayıları 1, 3, 5, …, 47 diye sayıp 24 buldun: [[24|50]] = [[12|25]]. 49 da tek sayıdır; tek sayılar 25 tanedir.",
    null
  ],
  aciklama: "Tek sayılar 1, 3, 5, … biçiminde birer atlayarak gider; 1'den 50'ye kadar tek ve çift sayılar yan yana dizilir.\nAdım 1: Topların hepsi olası durumdur: 50 tane.\nAdım 2: 1'den 50'ye kadar sayıların yarısı tek, yarısı çifttir. Tek sayılar 1, 3, 5, …, 49 olmak üzere 25 tanedir.\nAdım 3: Olasılık = [[25|50]] = [[1|2]].\nSağlama: Çift sayılar da 25 tanedir; [[25|50]] + [[25|50]] = 1 eder.\nSık yapılan hata: Son tek sayıyı (49) unutup 24 bulmak.\nCevap D."
},
{
  id: "mat-ol-149",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 1,
  soru: "Aşağıdaki çark 9 eş dilime ayrılmıştır; dilimlerdeki harfler rengi göstermektedir. Çark çevrilecektir.\n**Buna göre okun sarı bir dilimi gösterme olasılığı kaçtır?**",
  gorsel: "<svg viewBox=\"0 0 460 400\" role=\"img\" aria-label=\"Mavi, kırmızı ve sarı dilimlerden oluşan 9 eş dilimli çark\"><path d=\"M230 195 L230 50 A145 145 0 0 1 323.2 83.92 Z\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"260.75\" y=\"117.52\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">S</text><path d=\"M230 195 L323.2 83.92 A145 145 0 0 1 372.8 169.82 Z\" fill=\"var(--vurgu)\" fill-opacity=\"0.25\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"307.86\" y=\"157.05\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">M</text><path d=\"M230 195 L372.8 169.82 A145 145 0 0 1 355.57 267.5 Z\" fill=\"var(--vurgu2)\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"318.53\" y=\"217.61\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">K</text><path d=\"M230 195 L355.57 267.5 A145 145 0 0 1 279.59 331.26 Z\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"287.79\" y=\"270.87\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">S</text><path d=\"M230 195 L279.59 331.26 A145 145 0 0 1 180.41 331.26 Z\" fill=\"var(--vurgu)\" fill-opacity=\"0.25\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"230\" y=\"291.9\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">M</text><path d=\"M230 195 L180.41 331.26 A145 145 0 0 1 104.43 267.5 Z\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"172.21\" y=\"270.87\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">S</text><path d=\"M230 195 L104.43 267.5 A145 145 0 0 1 87.2 169.82 Z\" fill=\"var(--vurgu2)\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"141.47\" y=\"217.61\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">K</text><path d=\"M230 195 L87.2 169.82 A145 145 0 0 1 136.8 83.92 Z\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"152.14\" y=\"157.05\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">S</text><path d=\"M230 195 L136.8 83.92 A145 145 0 0 1 230 50 Z\" fill=\"var(--vurgu)\" fill-opacity=\"0.25\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"199.25\" y=\"117.52\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">M</text><circle cx=\"230\" cy=\"195\" r=\"6\" fill=\"currentColor\"/><polygon points=\"230,65 214.7,31 245.3,31\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"230\" y=\"390\" font-size=\"15\" text-anchor=\"middle\" fill=\"currentColor\">M: mavi · K: kırmızı · S: sarı</text></svg>",
  secenekler: ["[[2|9]]","[[1|3]]","[[4|9]]","[[5|9]]"],
  dogru: 2,
  hatalar: [
    "Kırmızı dilimleri saydın. Çarkta 2 kırmızı, 4 sarı dilim vardır.",
    "Çarkta 3 renk olduğu için her rengin olasılığını eşit sandın. Renklerin dilim sayıları farklıdır.",
    null,
    "Sarı olmayan dilimleri saydın: 3 mavi + 2 kırmızı = 5. Soru sarı olma olasılığını istiyor."
  ],
  aciklama: "Adım 1: Olası durumlar çarktaki 9 eş dilimdir.\nAdım 2: İstenen durumlar sarı (S) dilimlerdir. Çarkta 4 sarı dilim vardır.\nAdım 3: Olasılık = [[4|9]].\nSağlama: Mavi [[3|9]], kırmızı [[2|9]], sarı [[4|9]]; toplamları [[9|9]] = 1 eder.\nSık yapılan hata: Üç renk var diye her rengin olasılığını eşit sanmak. Olasılığı dilim sayısı belirler.\nCevap C."
},
{
  id: "mat-ol-150",
  kazanim: "M.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Kütüphanedeki bir ansiklopedi serisinin ciltleri 4'ten 19'a kadar (4 ve 19 dâhil) ardışık sayılarla numaralandırılmıştır. Kütüphaneci, ciltlerden birini rastgele seçip sergileyecektir.\n**Buna göre bu olaya ait olası durumların sayısı kaçtır?**",
  gorsel: null,
  secenekler: ["15","16","19","23"],
  dogru: 1,
  hatalar: [
    "Son numaradan ilk numarayı çıkardın: 19 − 4 = 15. Uç değerler dâhil olduğundan ilk cildi de saymak için 1 eklemelisin.",
    null,
    "Son cildin numarasını (19) cilt sayısı sandın. Seri 1'den değil, 4'ten başlıyor; 1, 2 ve 3 numaralı ciltler yok.",
    "İlk ve son numarayı topladın: 4 + 19 = 23. Cilt sayısı numaraların toplamı değildir."
  ],
  aciklama: "Uçları dâhil ardışık numaraların sayısı: son − ilk + 1.\nAdım 1: Cilt sayısı = 19 − 4 + 1 = 16.\nAdım 2: Rastgele seçilebilecek her cilt ayrı bir olası durum olduğundan olası durum sayısı 16'dır.\nSağlama: 4, 5, 6, …, 19 sayılarını say: 4'ten 19'a 15 adım vardır, başlangıç cildi de sayılınca 16 eder.\nSık yapılan hata: 19 − 4 = 15 bulup durmak; ilk cilt de sayılmalıdır.\nCevap B."
},
{
  id: "mat-ol-151",
  kazanim: "M.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir arşivde 1'den 60'a kadar numaralanmış 60 kutu vardır. Arşiv görevlisi, yalnızca numarası 9'un katı olan kutulardan birini rastgele seçip denetleyecektir.\n**Buna göre bu olaya ait olası durumların sayısı kaçtır?**",
  gorsel: null,
  secenekler: ["6","9","54","60"],
  dogru: 0,
  hatalar: [
    null,
    "9'un ilk katını (9'u) kat sayısı sandın. Kaç tane kat olduğunu saymalısın: 9, 18, 27, 36, 45, 54.",
    "9'un en büyük katını (54) kat sayısı sandın. Katların değil, katların kaç tane olduğunu bulmalısın.",
    "60 kutunun hepsini olası durum saydın. Seçim yalnızca numarası 9'un katı olan kutulardan yapılacak."
  ],
  aciklama: "Seçim bir koşulla sınırlıysa olası durumlar yalnızca koşula uyanlardır.\nAdım 1: 9'un katlarını yaz: 9, 18, 27, 36, 45, 54. Bir sonraki kat 63 olup 60'tan büyüktür.\nAdım 2: Bu katların sayısı 6'dır. Seçim yalnızca bunlar arasından yapıldığı için olası durum sayısı 6'dır.\nSağlama: 60 ÷ 9 işleminde bölüm 6 çıkar; katların sayısı bölümdür.\nSık yapılan hata: Bütün kutuları (60) olası durum saymak.\nCevap A."
},
{
  id: "mat-ol-152",
  kazanim: "M.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir manav tezgâhındaki sebzelerin türlere göre sayısı aşağıdaki tabloda verilmiştir. Manav, tezgâhtaki sebzelerden birini (her sebze ayrı sayılarak) rastgele seçip müşteriye hediye edecektir.\n**Buna göre bu olaya ait olası durumların sayısı kaçtır?**",
  gorsel: "<table class=\"tablo\"><tr><th>Sebze</th><th>Domates</th><th>Biber</th><th>Patlıcan</th><th>Salatalık</th></tr><tr><th>Sayı</th><td>9</td><td>6</td><td>4</td><td>5</td></tr></table>",
  secenekler: ["4","19","24","1080"],
  dogru: 2,
  hatalar: [
    "Sebze türlerini saydın. Soruda her sebzenin ayrı sayılacağı belirtilmiştir; seçilebilecek her sebze ayrı bir olası durumdur.",
    "Salatalıkları (5) saymayı unuttun: 9 + 6 + 4 = 19. Tüm sebzeler olası durumdur.",
    null,
    "Sayıları çarptın: 9 · 6 · 4 · 5 = 1080. Olası durumlar toplanarak bulunur."
  ],
  aciklama: "Adım 1: Tablodaki sayıları oku: domates 9, biber 6, patlıcan 4, salatalık 5.\nAdım 2: Hediye edilebilecek her sebze ayrı bir olası durumdur: 9 + 6 + 4 + 5 = 24.\nSık yapılan hata: Tür sayısını (4) olası durum sayısı sanmak.\nCevap C."
},
{
  id: "mat-ol-153",
  kazanim: "M.8.5.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Aynı büyüklükteki topların bulunduğu iki torbadan birincide 6 mavi ve 8 beyaz, ikincide 4 mavi ve 5 beyaz top vardır. Her torbadan ayrı ayrı bakmadan birer top çekilecektir.\n**Buna göre mavi top çekme olasılıkları ile ilgili aşağıdakilerden hangisi doğrudur?**",
  gorsel: null,
  secenekler: ["Birinci torbada daha büyüktür; çünkü [[6|14]], [[4|9]]'dan büyüktür.","İki torbada da eşittir; çünkü her ikisinde de mavi top sayısı beyaz top sayısının yarısından fazladır.","Karşılaştırılamaz; çünkü toplam top sayıları 14 ve 9 olup birbirine eşit değildir.","İkinci torbada daha büyüktür; çünkü [[4|9]], [[6|14]]'ten büyüktür."],
  dogru: 3,
  hatalar: [
    "Kesirleri yanlış karşılaştırdın. [[6|14]] = [[3|7]] = [[27|63]] ve [[4|9]] = [[28|63]] olduğundan [[6|14]], [[4|9]]'dan küçüktür.",
    "Mavi sayısının beyazın yarısından fazla olması olasılıkları eşit yapmaz. Olasılıklar [[3|7]] ve [[4|9]]'dur; bu iki kesir eşit değildir.",
    "Toplam sayıların eşit olması gerekmez; her torbanın olasılığı hesaplanıp kesirler karşılaştırılabilir.",
    null
  ],
  aciklama: "Farklı torbalarda toplam sayı da değiştiği için yalnızca mavi top sayısına bakmak yetmez; olasılıkları kesir olarak yazıp karşılaştır.\nAdım 1: Birinci torba: toplam 6 + 8 = 14; mavi olasılığı [[6|14]] = [[3|7]].\nAdım 2: İkinci torba: toplam 4 + 5 = 9; mavi olasılığı [[4|9]].\nAdım 3: Paydaları eşitle: [[3|7]] = [[27|63]], [[4|9]] = [[28|63]]. 28 > 27 olduğundan ikinci torbadaki olasılık daha büyüktür.\nSık yapılan hata: Mavi top sayısı fazla olan torbayı (6 mavi) seçmek. Toplam sayı farklıysa sayı değil oran karşılaştırılır.\nCevap D."
},
{
  id: "mat-ol-154",
  kazanim: "M.8.5.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Aşağıdaki çarkta K, M, S ve Y harfleriyle gösterilen dört dilimin merkez açılarının ölçüleri şekil üzerinde verilmiştir. Çark çevrildiğinde ok dilimlerden birini gösterecektir.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: "<svg viewBox=\"0 0 460 385\" role=\"img\" aria-label=\"Merkez açıları 90, 120, 90 ve 60 derece olan dört dilimli çark\"><path d=\"M230 195 L230 50 A145 145 0 0 1 375 195 Z\" fill=\"var(--vurgu2)\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"293.57\" y=\"138.43\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">K</text><text x=\"348.09\" y=\"81.91\" font-size=\"16\" text-anchor=\"start\" fill=\"currentColor\">90°</text><path d=\"M230 195 L375 195 A145 145 0 0 1 157.5 320.57 Z\" fill=\"var(--vurgu)\" fill-opacity=\"0.25\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"274.95\" y=\"279.86\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">M</text><text x=\"313.5\" y=\"344.63\" font-size=\"16\" text-anchor=\"start\" fill=\"currentColor\">120°</text><path d=\"M230 195 L157.5 320.57 A145 145 0 0 1 104.43 122.5 Z\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"143.16\" y=\"225.27\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">S</text><text x=\"68.69\" y=\"243.22\" font-size=\"16\" text-anchor=\"end\" fill=\"currentColor\">90°</text><path d=\"M230 195 L104.43 122.5 A145 145 0 0 1 230 50 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"185.05\" y=\"124.14\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">Y</text><text x=\"146.5\" y=\"55.37\" font-size=\"16\" text-anchor=\"end\" fill=\"currentColor\">60°</text><circle cx=\"230\" cy=\"195\" r=\"6\" fill=\"currentColor\"/><polygon points=\"230,65 214.7,31 245.3,31\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/></svg>",
  secenekler: ["Okun K dilimini gösterme olasılığı, S dilimini gösterme olasılığına eşittir.","Okun M dilimini gösterme olasılığı, K dilimini gösterme olasılığından küçüktür.","Okun Y dilimini gösterme olasılığı, K dilimini gösterme olasılığından büyüktür.","Okun dört dilimi gösterme olasılıkları birbirine eşittir."],
  dogru: 0,
  hatalar: [
    null,
    "M diliminin açısı (120°), K diliminin açısından (90°) büyüktür; bu yüzden M'nin olasılığı K'ninkinden büyüktür.",
    "Y diliminin açısı (60°), K diliminin açısından (90°) küçüktür; Y'nin olasılığı K'ninkinden küçüktür.",
    "Çarkta dört dilim olduğu için olasılıkları eşit sandın. Dilimlerin açıları farklı olduğundan olasılıklar eşit değildir."
  ],
  aciklama: "Eş olmayan dilimli çarkta olasılık, dilimin merkez açısının 360°'ye oranıdır. Açı büyüdükçe olasılık büyür; açılar eşitse olasılıklar eşittir.\nAdım 1: Olasılıkları hesapla. K: [[90|360]] = [[1|4]], M: [[120|360]] = [[1|3]], S: [[90|360]] = [[1|4]], Y: [[60|360]] = [[1|6]].\nAdım 2: K ve S'nin açıları (90°) eşit olduğundan olasılıkları da eşittir.\nAdım 3: M'nin olasılığı K'ninkinden büyük, Y'ninki K'ninkinden küçüktür; dört olasılık eşit değildir.\nSağlama: [[1|4]] + [[1|3]] + [[1|4]] + [[1|6]] = [[3|12]] + [[4|12]] + [[3|12]] + [[2|12]] = 1 eder.\nCevap A."
},
{
  id: "mat-ol-155",
  kazanim: "M.8.5.1.3",
  kademe: 1,
  zorluk: 2,
  soru: "Bir kutuda büyüklükleri ve dokuları aynı olan 24 kart vardır. Kutudan 8 kart alınıp kullanılmak üzere ayrılmıştır. Kalan kartlar karıştırılıp bir kart çekilecektir.\n**Buna göre kalan kartlardan belirli bir kartın çekilme olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[1|32]]","[[1|24]]","[[1|16]]","[[1|8]]"],
  dogru: 2,
  hatalar: [
    "Ayrılan 8 kartı kutuya eklenmiş gibi saydın: 24 + 8 = 32. Kartlar çıkarıldığı için kalan kart sayısı 16'dır.",
    "Kart sayısındaki değişikliği hesaba katmadın. Kutuda artık 24 değil, 16 kart var.",
    null,
    "Ayrılan kart sayısını (8) payda yaptın. Kalan kartların sayısı 24 − 8 = 16'dır."
  ],
  aciklama: "Eşit şanslı n kartın her birinin olasılığı [[1|n]]'dir. Kart sayısı değişirse n de değişir.\nAdım 1: Kalan kart sayısı 24 − 8 = 16'dır.\nAdım 2: Kalan 16 kart eşit şanslı olduğundan belirli bir kartın çekilme olasılığı [[1|16]]'dır.\nSağlama: 16 kartın olasılıkları toplanınca [[16|16]] = 1 eder.\nSık yapılan hata: Kart sayısı değiştiği hâlde eski sayıyı (24) paydada tutmak.\nCevap C."
},
{
  id: "mat-ol-156",
  kazanim: "M.8.5.1.3",
  kademe: 1,
  zorluk: 2,
  soru: "Aşağıdaki çarkın boyalı diliminin merkez açısı 18°'dir. Çark çevrildiğinde ok dilimlerden birini gösterecektir.\n**Buna göre okun boyalı dilimi gösterme olasılığı kaçtır?**",
  gorsel: "<svg viewBox=\"0 0 460 385\" role=\"img\" aria-label=\"Merkez açıları 162, 18, 90 ve 90 derece olan dört dilimli çark; 18 derecelik dilim boyalı\"><path d=\"M230 195 L230 50 A145 145 0 0 1 274.81 332.9 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"394.94\" y=\"173.88\" font-size=\"16\" text-anchor=\"start\" fill=\"currentColor\">162°</text><path d=\"M230 195 L274.81 332.9 A145 145 0 0 1 230 340 Z\" fill=\"var(--vurgu2)\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"256.12\" y=\"364.94\" font-size=\"16\" text-anchor=\"start\" fill=\"currentColor\">18°</text><path d=\"M230 195 L230 340 A145 145 0 0 1 85 195 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"111.91\" y=\"318.09\" font-size=\"16\" text-anchor=\"end\" fill=\"currentColor\">90°</text><path d=\"M230 195 L85 195 A145 145 0 0 1 230 50 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"111.91\" y=\"81.91\" font-size=\"16\" text-anchor=\"end\" fill=\"currentColor\">90°</text><circle cx=\"230\" cy=\"195\" r=\"6\" fill=\"currentColor\"/><polygon points=\"230,65 214.7,31 245.3,31\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1.5\"/></svg>",
  secenekler: ["[[1|20]]","[[1|18]]","[[1|10]]","[[19|20]]"],
  dogru: 0,
  hatalar: [
    null,
    "Açının ölçüsünü (18) paydaya yazdın. Olasılık, açının tam daire olan 360°'ye oranıdır: [[18|360]].",
    "Açıyı 360° yerine 180°'ye oranladın: [[18|180]] = [[1|10]]. Tam daire 360°'dir.",
    "Boyalı dilimi göstermeme olasılığını buldun: [[342|360]] = [[19|20]]. Soru gösterme olasılığını istiyor."
  ],
  aciklama: "Eş olmayan dilimlerde bir dilimin olasılığı, merkez açısının tam daire açısına (360°) oranıdır.\nAdım 1: Boyalı dilimin merkez açısı 18°'dir.\nAdım 2: Olasılık = [[18|360]]. Pay ve paydayı 18'e böl: [[1|20]].\nSağlama: Diğer dilimlerin açıları 162° + 90° + 90° = 342°'dir; [[18|360]] + [[342|360]] = 1 eder.\nSık yapılan hata: Tam daireyi 180° almak. Tam daire 360°'dir.\nCevap A."
},
{
  id: "mat-ol-157",
  kazanim: "M.8.5.1.3",
  kademe: 1,
  zorluk: 2,
  soru: "Arda, \"Bir torbada 1 mavi ve 9 kırmızı top var. Çekilen top ya mavi ya kırmızı olacağına göre mavi top çekme olasılığı [[1|2]]'dir.\" demiştir. Torbadaki toplar özdeştir.\n**Buna göre Arda'nın düşüncesi neden yanlıştır?**",
  gorsel: null,
  secenekler: ["Mavi topun olasılığı [[1|9]]'dur; çünkü mavi top yalnızca kırmızı toplarla karşılaştırılır.","Mavi topun olasılığı [[9|10]]'dur; çünkü kırmızı topların sayısı pay olarak alınmalıdır.","Mavi topun olasılığı [[1|11]]'dir; çünkü olası durum sayısı top sayısından bir fazladır.","Mavi topun olasılığı [[1|10]]'dur; çünkü olası durum sayısı torbadaki top sayısı olan 10'dur."],
  dogru: 3,
  hatalar: [
    "Mavi topu yalnızca kırmızı toplarla karşılaştırıp [[1|9]] buldun. Payda, bütün topların sayısı olan 10 olmalıdır.",
    "Kırmızı topların sayısını pay yaptın. [[9|10]], kırmızı top çekme olasılığıdır; soru mavi topu soruyor.",
    "Olası durum sayısını 11 aldın. Torbada 1 + 9 = 10 top vardır; paydaya fazladan bir şey eklenmez.",
    null
  ],
  aciklama: "İki sonuç olması, sonuçların eşit şanslı olduğu anlamına gelmez. Olasılığı bulmak için topları tek tek say.\nAdım 1: Torbada 1 + 9 = 10 top vardır; olası durum sayısı 10'dur. Toplar özdeş olduğundan her topun çekilme şansı eşittir.\nAdım 2: Mavi top 1 tanedir. Mavi çekme olasılığı [[1|10]]'dur; [[1|2]] değildir.\nSağlama: Kırmızı çekme olasılığı [[9|10]] olur; [[1|10]] + [[9|10]] = 1 eder.\nSık yapılan hata: \"Ya olur ya olmaz\" diyerek iki durumu yarı yarıya saymak.\nCevap D."
},
{
  id: "mat-ol-158",
  kazanim: "M.8.5.1.4",
  kademe: 1,
  zorluk: 2,
  soru: "Bir çekilişte kazanmama olasılığı, kazanma olasılığının 4 katıdır.\n**Buna göre kazanma olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[1|5]]","[[1|4]]","[[1|2]]","[[4|5]]"],
  dogru: 0,
  hatalar: [
    null,
    "\"4 katı\" olduğu için kazanma olasılığını [[1|4]] aldın. Kazanma ve kazanmama olasılıklarının toplamı 1'dir; kazanma olasılığı toplam 5 parçadan 1 parçadır.",
    "Kazanmayı ve kazanmamayı eşit şanslı sandın. Verilen oran 4 katıdır, eşit değildir.",
    "Kazanmama olasılığını buldun: [[4|5]]. Soru kazanma olasılığını istiyor."
  ],
  aciklama: "Bir olayın olma ve olmama olasılıklarının toplamı 1'dir.\nAdım 1: Kazanma olasılığına p diyelim. Kazanmama olasılığı 4p olur.\nAdım 2: p + 4p = 1 olduğundan 5p = 1 ve p = [[1|5]] bulunur.\nSağlama: Kazanmama olasılığı 4 · [[1|5]] = [[4|5]]'tir; [[1|5]] + [[4|5]] = 1 eder.\nSık yapılan hata: \"4 katı\" ifadesinden p = [[1|4]] sonucunu çıkarmak. Toplamı 1 yapan parçaları say: 1 parça + 4 parça = 5 parça.\nCevap A."
},
{
  id: "mat-ol-159",
  kazanim: "M.8.5.1.4",
  kademe: 1,
  zorluk: 2,
  soru: "Bir torbada 1'den 15'e kadar numaralanmış, özdeş 15 top vardır. Torbadan rastgele bir top çekilecektir.\n**Aşağıdaki olaylardan hangisinin olma olasılığı 1'dir?**",
  gorsel: null,
  secenekler: ["Çekilen topun numarasının 15'ten küçük olması","Çekilen topun numarasının 16'dan küçük olması","Çekilen topun numarasının çift olması","Çekilen topun numarasının 1'den büyük olması"],
  dogru: 1,
  hatalar: [
    "15 numaralı top da çekilebilir ve bu durumda olay gerçekleşmez; olasılığı [[14|15]]'tir, 1 değil.",
    null,
    "Çift sayı olması her çekilişte gerçekleşmez; olasılığı [[7|15]]'tir.",
    "1 numaralı top çekilirse olay gerçekleşmez; olasılığı [[14|15]]'tir."
  ],
  aciklama: "Olasılığı 1 olan olay, bütün olası durumları kapsayan kesin olaydır.\nAdım 1: Topların numaraları 1, 2, …, 15'tir.\nAdım 2: Her numara 16'dan küçüktür; \"16'dan küçük olması\" olayı 15 durumun hepsini kapsar. Olasılığı [[15|15]] = 1'dir.\nAdım 3: Diğer olaylarda en az bir top olayın dışında kalır: 15 numaralı top birinci olayın, 1 numaralı top dördüncü olayın, tek numaralı toplar üçüncü olayın dışında kalır.\nSık yapılan hata: Sınırı yanlış okumak. 15'ten küçük, 15'i içermez; 16'dan küçük, 15'i de içerir.\nCevap B."
},
{
  id: "mat-ol-160",
  kazanim: "M.8.5.1.4",
  kademe: 1,
  zorluk: 2,
  soru: "Aşağıdaki kartlar ters çevrilip karıştırıldıktan sonra bir kart çekilecektir.\n**Aşağıdaki olaylardan hangisinin olma olasılığı 0'dır?**",
  gorsel: "<svg viewBox=\"0 0 320 84\" role=\"img\" aria-label=\"Üzerinde 6, 8, 9, 12 ve 15 yazılı beş kart\"><rect x=\"10\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"36\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">6</text><rect x=\"72\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"98\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">8</text><rect x=\"134\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">9</text><rect x=\"196\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"222\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">12</text><rect x=\"258\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"284\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">15</text></svg>",
  secenekler: ["Çekilen kartın üzerindeki sayının 6'dan küçük olması","Çekilen kartın üzerindeki sayının 8'den küçük olması","Çekilen kartın üzerindeki sayının 10'dan büyük olması","Çekilen kartın üzerindeki sayının 12'den büyük olması"],
  dogru: 0,
  hatalar: [
    null,
    "6 numaralı kart çekilirse olay gerçekleşir; olasılığı [[1|5]]'tir, 0 değil.",
    "12 ve 15 yazılı kartlar 10'dan büyüktür; olasılığı [[2|5]]'tir.",
    "15 yazılı kart 12'den büyüktür; olasılığı [[1|5]]'tir."
  ],
  aciklama: "Hiçbir olası durumu içermeyen olaya imkânsız olay denir; olasılığı 0'dır.\nAdım 1: Kartlardaki sayılar 6, 8, 9, 12, 15'tir.\nAdım 2: \"6'dan küçük\" olması için sayının 6'dan küçük olması gerekir; kartlardaki en küçük sayı 6 olduğundan hiçbir kart bu koşula uymaz. Olasılık [[0|5]] = 0'dır.\nAdım 3: Diğer olaylarda en az bir kart koşula uyar (8'den küçük: 6; 10'dan büyük: 12 ve 15; 12'den büyük: 15).\nSık yapılan hata: \"6'dan küçük\" ifadesinde 6'yı da dâhil saymak.\nCevap A."
},
{
  id: "mat-ol-161",
  kazanim: "M.8.5.1.3",
  kademe: 1,
  zorluk: 2,
  soru: "Bir şans çarkı eş dilimlere ayrılmıştır. Çark çevrildiğinde okun belirli bir dilimi gösterme olasılığı 0,05 olarak hesaplanmıştır.\n**Buna göre çark kaç dilimlidir?**",
  gorsel: null,
  secenekler: ["5","20","50","100"],
  dogru: 1,
  hatalar: [
    "Ondalık sayıdaki 5 rakamını dilim sayısı sandın. 0,05 = [[5|100]] = [[1|20]].",
    null,
    "0,05 değerini [[1|50]] olarak okudun. [[1|50]] = 0,02'dir; 0,05 = [[5|100]] = [[1|20]].",
    "Paydadaki 100'ü dilim sayısı sandın. Pay 5 olduğu için sadeleştirmek gerekir: [[5|100]] = [[1|20]]."
  ],
  aciklama: "Eş dilimli çarkta n dilim varsa her dilimin olasılığı [[1|n]]'dir.\nAdım 1: Ondalık sayıyı kesre çevir: 0,05 = [[5|100]].\nAdım 2: Pay ve paydayı 5'e böl: [[1|20]]. Her dilimin olasılığı [[1|20]] ise çark 20 dilimlidir.\nSağlama: 20 dilimin her biri 0,05 olduğundan 20 · 0,05 = 1 eder.\nSık yapılan hata: 0,05'i yanlışlıkla [[1|5]] ya da [[1|50]] okumak.\nCevap B."
},
{
  id: "mat-ol-162",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir spor kulübündeki öğrencilerin branşlara göre dağılımı aşağıdaki tabloda verilmiştir. Her öğrenci yalnızca bir branştadır. Antrenör öğrencilerden birini rastgele seçecektir.\n**Buna göre seçilen öğrencinin voleybol oynamayan bir öğrenci olma olasılığı kaçtır?**",
  gorsel: "<table class=\"tablo\"><tr><th>Branş</th><th>Yüzme</th><th>Voleybol</th><th>Basketbol</th><th>Atletizm</th></tr><tr><th>Öğrenci sayısı</th><td>14</td><td>9</td><td>12</td><td>5</td></tr></table>",
  secenekler: ["[[9|40]]","[[1|4]]","[[9|31]]","[[31|40]]"],
  dogru: 3,
  hatalar: [
    "Voleybol oynayanların olasılığını buldun. Soru voleybol oynamayanları istiyor.",
    "Dört branş olduğu için her branşın olasılığını eşit sandın. Branşlardaki öğrenci sayıları farklıdır.",
    "Voleybolcuları, voleybol oynamayan öğrencilerin sayısıyla oranladın: 9 ve 31. Payda bütün öğrencilerin sayısı (40) olmalıdır.",
    null
  ],
  aciklama: "Adım 1: Öğrencilerin hepsi olası durumdur: 14 + 9 + 12 + 5 = 40.\nAdım 2: Voleybol oynamayan öğrenci sayısı 14 + 12 + 5 = 31'dir (40 − 9 = 31).\nAdım 3: Olasılık = [[31|40]].\nSağlama: Voleybol oynama olasılığı [[9|40]]'tır; [[9|40]] + [[31|40]] = 1 eder.\nCevap D."
},
{
  id: "mat-ol-163",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Aşağıdaki kartların her birine MATEMATİK sözcüğünün bir harfi yazılmıştır. Kartlar ters çevrilip karıştırıldıktan sonra bir kart çekilecektir.\n**Buna göre çekilen kartın üzerindeki harfin sesli harf olma olasılığı kaçtır?**",
  gorsel: "<svg viewBox=\"0 0 548 84\" role=\"img\" aria-label=\"Üzerinde M, A, T, E, M, A, T, İ ve K harfleri yazılı dokuz kart\"><rect x=\"8\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"34\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">M</text><rect x=\"68\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"94\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">A</text><rect x=\"128\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"154\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">T</text><rect x=\"188\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"214\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">E</text><rect x=\"248\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"274\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">M</text><rect x=\"308\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"334\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">A</text><rect x=\"368\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"394\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">T</text><rect x=\"428\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"454\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">İ</text><rect x=\"488\" y=\"10\" width=\"52\" height=\"64\" rx=\"6\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"514\" y=\"49\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">K</text></svg>",
  secenekler: ["[[2|9]]","[[1|3]]","[[4|9]]","[[5|9]]"],
  dogru: 2,
  hatalar: [
    "Yalnızca A harfi yazılı kartları (2 kart) saydın. E ve İ kartları da sesli harftir.",
    "Farklı sesli harfleri (A, E, İ) saydın: [[3|9]] = [[1|3]]. Aynı harften iki kart varsa ikisi de sayılır.",
    null,
    "Sesli olmayan (ünsüz) harfleri saydın: M, T, M, T, K → 5 kart. Soru sesli harf olma olasılığını istiyor."
  ],
  aciklama: "Türkçedeki sesli harfler a, e, ı, i, o, ö, u, ü'dür.\nAdım 1: Kart sayısı 9'dur (M, A, T, E, M, A, T, İ, K).\nAdım 2: Sesli harf yazılı kartlar A, E, A, İ → 4 kart.\nAdım 3: Olasılık = [[4|9]].\nSağlama: Ünsüz harfli 5 kart vardır; [[4|9]] + [[5|9]] = 1 eder.\nSık yapılan hata: Aynı harfli kartları tek sayıp farklı harfleri (A, E, İ) saymak. Her kart ayrı bir durumdur.\nCevap C."
},
{
  id: "mat-ol-164",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Hilesiz bir zar bir kez atılacaktır.\n**Zarın üst yüzüne gelen sayının 20'nin böleni olma olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[1|2]]","[[2|3]]","[[5|6]]","1"],
  dogru: 1,
  hatalar: [
    "1, 2 ve 4'ü saydın, 5'i unuttun: [[3|6]]. 5, 20'yi böler (20 = 5 · 4).",
    null,
    "6'yı da 20'nin böleni saydın. 20, 6'ya tam bölünmez.",
    "Her sayının 20'yi böldüğünü düşündün. 3 ve 6, 20'yi tam bölmez."
  ],
  aciklama: "Bir sayının böleni, o sayıyı tam bölen sayıdır.\nAdım 1: Olası durumlar 1, 2, 3, 4, 5, 6'dır.\nAdım 2: 20'yi tam bölenler 1, 2, 4 ve 5'tir (3 ve 6 tam bölmez). İstenen durum sayısı 4.\nAdım 3: Olasılık = [[4|6]] = [[2|3]].\nSağlama: 20 ÷ 3 ve 20 ÷ 6 tam çıkmaz; [[4|6]] + [[2|6]] = 1 eder.\nCevap B."
},
{
  id: "mat-ol-165",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir satranç tahtası 8 × 8 = 64 eş kareden oluşur. Bu karelerden biri rastgele seçilecektir.\n**Buna göre seçilen karenin tahtanın köşelerinden birinde bulunan bir kare olma olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[1|64]]","[[1|16]]","[[1|8]]","[[1|4]]"],
  dogru: 1,
  hatalar: [
    "Tek bir karenin olasılığını verdin. Tahtanın 4 köşe karesi vardır.",
    null,
    "Bir kenardaki 8 kareyi saydın: [[8|64]]. Köşe kareleri yalnızca 4 tanedir.",
    "Köşe sayısı olan 4'ü payda yaptın. Köşe kareleri paydaya değil paya girer; payda bütün karelerin sayısı olan 64'tür."
  ],
  aciklama: "Adım 1: Tahtada 8 · 8 = 64 kare vardır; olası durum sayısı 64.\nAdım 2: Köşe kareleri tahtanın dört köşesindeki karelerdir: 4 tane.\nAdım 3: Olasılık = [[4|64]] = [[1|16]].\nSağlama: Köşe olmayan 60 kare vardır; [[4|64]] + [[60|64]] = 1 eder.\nSık yapılan hata: Köşe karelerini kenar kareleriyle karıştırmak. Köşe, iki kenarın birleştiği karedir.\nCevap B."
},
{
  id: "mat-ol-166",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir voleybol takımındaki 12 sporcunun forma numaraları 4'ten 15'e kadar (4 ve 15 dâhil) ardışık sayılardır ve her sporcunun forma numarası farklıdır. Antrenör, sporculardan birini rastgele seçip kaptan yapacaktır.\n**Buna göre seçilen sporcunun forma numarasının çift sayı olma olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[2|5]]","[[5|12]]","[[1|2]]","[[6|11]]"],
  dogru: 2,
  hatalar: [
    "Paydaya son numarayı (15) yazdın: [[6|15]] = [[2|5]]. Sporcu sayısı 12'dir (15 − 4 + 1).",
    "Çift numaralardan birini unuttun: 6, 8, 10, 12, 14 → [[5|12]]. 4 numaralı forma da çifttir.",
    null,
    "Sporcu sayısını 15 − 4 = 11 buldun: [[6|11]]. Uçlar dâhil olduğundan 4'ü de saymalı ve 12 bulmalısın."
  ],
  aciklama: "Adım 1: Sporcu sayısı 15 − 4 + 1 = 12'dir (uçlar dâhil).\nAdım 2: Forma numaraları 4, 5, 6, …, 15'tir. Bunlardan çift olanlar 4, 6, 8, 10, 12 ve 14'tür; 6 tane.\nAdım 3: Olasılık = [[6|12]] = [[1|2]].\nSağlama: Tek numaralı 6 sporcu vardır; [[6|12]] + [[6|12]] = 1 eder.\nSık yapılan hata: 15 − 4 = 11 bulup payda yapmak ya da ilk çift numarayı (4) unutmak.\nCevap C."
},
{
  id: "mat-ol-167",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir kutuda 40 özdeş kart vardır ve kartların %35'i mavidir. Kutudan bakmadan bir kart çekilecektir.\n**Buna göre çekilen kartın mavi olmama olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[13|40]]","[[7|20]]","[[7|13]]","[[13|20]]"],
  dogru: 3,
  hatalar: [
    "Mavi olmayan kartları 26 buldun ama sadeleştirirken yalnızca payı 2'ye böldün: [[26|40]] → [[13|40]]. Pay ve paydayı aynı sayıya bölmelisin.",
    "Mavi olma olasılığını buldun (%35 = [[7|20]]). Soru mavi olmama olasılığını istiyor.",
    "Mavi kartları mavi olmayan kartlara oranladın. Payda bütün kartların sayısını gösteren değer olmalıdır.",
    null
  ],
  aciklama: "Yüzdeyi kesre çevirerek olasılığı bulabilirsin.\nAdım 1: %35 = [[35|100]] = [[7|20]]. Bu, mavi olma olasılığıdır.\nAdım 2: Mavi olmama olasılığı = 1 − [[7|20]] = [[13|20]].\nSağlama: 40 kartın %35'i 14 mavi karttır; mavi olmayan 26 kart vardır. [[26|40]] = [[13|20]].\nSık yapılan hata: Mavi olma olasılığını cevap sanmak ya da kesri sadeleştirirken yalnızca payı bölmek.\nCevap D."
},
{
  id: "mat-ol-168",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir fabrikada üretilen 500 ampulün 15'inin bozuk olduğu belirlenmiştir. Kalite kontrol görevlisi ampullerden birini rastgele seçip deneyecektir.\n**Seçilen ampulün çalışır olma olasılığı aşağıdakilerden hangisine eşittir?**",
  gorsel: null,
  secenekler: ["[[3|100]]","[[3|97]]","[[97|500]]","[[97|100]]"],
  dogru: 3,
  hatalar: [
    "Bozuk ampul olma olasılığını buldun: [[15|500]] = [[3|100]]. Soru çalışır olma olasılığını istiyor.",
    "Bozuk ampulleri çalışır ampullere oranladın: [[15|485]] = [[3|97]]. Payda bütün ampullerin sayısı (500) olmalıdır.",
    "[[485|500]] kesrini sadeleştirirken yalnızca payı 5'e böldün. Pay ve payda aynı sayıya bölünmelidir: [[97|100]].",
    null
  ],
  aciklama: "Adım 1: Olası durumlar bütün ampullerdir: 500.\nAdım 2: Çalışır ampul sayısı 500 − 15 = 485'tir.\nAdım 3: Olasılık = [[485|500]]. Pay ve paydayı 5'e böl: [[97|100]].\nSağlama: Bozuk olma olasılığı [[15|500]] = [[3|100]]'dür; [[3|100]] + [[97|100]] = 1 eder.\nCevap D."
},
{
  id: "mat-ol-169",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir kutuda 1'den 50'ye kadar numaralanmış, özdeş 50 kart vardır. Kutudan rastgele bir kart çekilecektir.\n**Buna göre çekilen kartın üzerindeki sayının tam kare olma olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[3|25]]","[[7|50]]","[[1|7]]","[[7|43]]"],
  dogru: 1,
  hatalar: [
    "1'i tam kare saymadın: 4, 9, 16, 25, 36, 49 → [[6|50]] = [[3|25]]. 1 = 1 · 1 olduğundan 1 de tam karedir.",
    null,
    "Paydaya son tam kareyi (49) yazdın: [[7|49]] = [[1|7]]. Payda bütün kartların sayısı (50) olmalıdır.",
    "Tam kareleri tam kare olmayan 43 kartla oranladın. Payda bütün kartların sayısıdır."
  ],
  aciklama: "Tam kare sayı, bir doğal sayının kendisiyle çarpımı olan sayıdır: 1 = 1 · 1, 4 = 2 · 2, 9 = 3 · 3…\nAdım 1: 1'den 50'ye kadar tam kareler 1, 4, 9, 16, 25, 36, 49'dur; 7 tane (8 · 8 = 64, 50'den büyüktür).\nAdım 2: Olası durum sayısı 50'dir.\nAdım 3: Olasılık = [[7|50]].\nSağlama: Tam kare olmayan 43 kart vardır; [[7|50]] + [[43|50]] = 1 eder.\nSık yapılan hata: 1'i tam kare saymayı unutmak.\nCevap B."
},
{
  id: "mat-ol-170",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir kavanozda 6 beyaz ve 9 siyah düğme vardır. Kavanoza 5 beyaz düğme daha atıldıktan sonra kavanozdan bakmadan bir düğme alınacaktır.\n**Buna göre alınan düğmenin beyaz olma olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[3|10]]","[[2|5]]","[[11|20]]","[[11|15]]"],
  dogru: 2,
  hatalar: [
    "Eklenen beyaz düğmeleri paydaya kattın ama paya katmadın: [[6|20]] = [[3|10]]. Eklenen beyaz düğmeler paya da girer.",
    "Değişikliği hiç hesaba katmadın: [[6|15]] = [[2|5]]. Kavanozda artık 11 beyaz ve toplam 20 düğme var.",
    null,
    "Eklenen düğmeleri paya kattın ama paydayı güncellemedin: [[11|15]]. Toplam düğme sayısı da 5 artar."
  ],
  aciklama: "Adım 1: Eklemeden sonra beyaz düğme sayısı 6 + 5 = 11 olur.\nAdım 2: Toplam düğme sayısı (6 + 9) + 5 = 20 olur.\nAdım 3: Olasılık = [[11|20]].\nSağlama: Siyah düğme sayısı değişmemiştir: 9. Beyaz olmama olasılığı [[9|20]]'dir; [[11|20]] + [[9|20]] = 1 eder.\nSık yapılan hata: Eklenen düğmeyi yalnızca paya ya da yalnızca paydaya katmak. Eklenen beyaz düğme hem payı hem paydayı artırır.\nCevap C."
},
{
  id: "mat-ol-171",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir sepette 4 elma, 8 armut ve 3 şeftali vardır. Sepetten 3 armut yenildikten sonra kalan meyvelerden biri rastgele alınacaktır.\n**Buna göre alınan meyvenin armut olmama olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[5|12]]","[[7|15]]","[[8|15]]","[[7|12]]"],
  dogru: 3,
  hatalar: [
    "Armut olma olasılığını buldun: [[5|12]]. Soru armut olmama olasılığını istiyor.",
    "Armut olmayan meyveleri doğru (7) saydın ama toplamı 15 aldın. Yenilen armutlar sepetten çıktığı için toplam 12'dir.",
    "Başlangıçtaki armut olma olasılığını verdin: [[8|15]]. Hem değişikliği hem de \"olmama\" ifadesini hesaba katmadın.",
    null
  ],
  aciklama: "Adım 1: Yenilen 3 armuttan sonra sepette 4 elma, 8 − 3 = 5 armut ve 3 şeftali kalır. Toplam 4 + 5 + 3 = 12 meyve olur.\nAdım 2: Armut olmayan meyveler elma ve şeftalidir: 4 + 3 = 7.\nAdım 3: Olasılık = [[7|12]].\nSağlama: Armut olma olasılığı [[5|12]]'dir; [[5|12]] + [[7|12]] = 1 eder.\nSık yapılan hata: Yenilen meyveleri sepette saymaya devam etmek. Çıkan öğeler artık seçilemez.\nCevap D."
},
{
  id: "mat-ol-172",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir bisiklet kulübünde 32 üye vardır. Kulüpten rastgele seçilen bir üyenin kask takan üye olma olasılığı [[5|8]] olarak hesaplanmıştır.\n**Buna göre bu kulüpte kask takmayan kaç üye vardır?**",
  gorsel: null,
  secenekler: ["4","12","20","28"],
  dogru: 1,
  hatalar: [
    "Bir parçanın değerini (32 ÷ 8 = 4) verdin; bu kask takmayanların sayısı değildir.",
    null,
    "Kask takan üyelerin sayısını buldun (32 · [[5|8]] = 20). Soru kask takmayanları soruyor.",
    "Bir parçayı (4) 32'den çıkardın. Kask takmama olasılığı [[3|8]]'dir; 3 parça 12 eder."
  ],
  aciklama: "Adım 1: Kask takan üyelerin sayısı 32 · [[5|8]] = 32 ÷ 8 · 5 = 20'dir.\nAdım 2: Kask takmayan üye sayısı 32 − 20 = 12'dir.\nSağlama: Kask takmama olasılığı 1 − [[5|8]] = [[3|8]]'dir; 32 · [[3|8]] = 12 eder.\nSık yapılan hata: Kask takan üye sayısını cevap sanmak.\nCevap B."
},
{
  id: "mat-ol-173",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir çiftlikteki 24 hayvanın [[3|8]]'i inek, geri kalanı koyundur. Çiftlik sahibi hayvanlardan birini rastgele seçecektir.\n**Seçilen hayvanın koyun olma olasılığı aşağıdakilerden hangisine eşittir?**",
  gorsel: null,
  secenekler: ["[[5|24]]","[[3|8]]","[[3|5]]","[[5|8]]"],
  dogru: 3,
  hatalar: [
    "Kesrin payını (5) koyun sayısı sandın. Koyun sayısı 15'tir; olasılık [[15|24]] = [[5|8]] olur.",
    "İneklerin olasılığını verdin. Soru koyunları istiyor.",
    "İnekleri koyunlara oranladın: [[9|15]] = [[3|5]]. Payda bütün hayvanların sayısı (24) olmalıdır.",
    null
  ],
  aciklama: "Adım 1: İnek sayısı 24 · [[3|8]] = 24 ÷ 8 · 3 = 9'dur. Koyun sayısı 24 − 9 = 15'tir.\nAdım 2: Olasılık = [[15|24]]. Pay ve paydayı 3'e böl: [[5|8]].\nSağlama: İnek olma olasılığı [[3|8]] olduğundan koyun olma olasılığı 1 − [[3|8]] = [[5|8]] bulunur; iki yol aynı sonucu verir.\nSık yapılan hata: Kesrin payını sayı gibi kullanmak. Pay, hayvan sayısı değil, kesrin parçasıdır.\nCevap D."
},
{
  id: "mat-ol-174",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir okul kermesinde kullanılacak çark 30 eş dilimden oluşacaktır. Kermes sorumluları, çark çevrildiğinde okun ödüllü bir dilimi gösterme olasılığını [[1|10]] yapmak istemektedir.\n**Buna göre çarkta kaç dilim ödüllü olmalıdır?**",
  gorsel: null,
  secenekler: ["3","10","27","30"],
  dogru: 0,
  hatalar: [
    null,
    "Olasılığın paydasındaki 10'u ödüllü dilim sayısı yaptın. Ödüllü dilimler 30 dilimin [[1|10]]'u kadardır.",
    "Ödüllü olmayan dilim sayısını buldun (30 − 3 = 27). Soru ödüllü dilimleri istiyor.",
    "Bütün dilimleri ödüllü saydın. Bu durumda olasılık 1 olurdu."
  ],
  aciklama: "Adım 1: Ödüllü dilim sayısına x diyelim. Olasılık [[x|30]] = [[1|10]] olmalıdır.\nAdım 2: [[1|10]] kesrini paydası 30 olan eş kesre çevir: [[1|10]] = [[3|30]]. Buradan x = 3 bulunur.\nSağlama: 30 dilimin 3'ü ödüllü ise olasılık [[3|30]] = [[1|10]] olur.\nSık yapılan hata: Paydadaki 10'u dilim sayısı almak. Çarkta toplam 30 dilim olduğundan önce paydayı 30 yapmalısın.\nCevap A."
},
{
  id: "mat-ol-175",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir kutuda 80 bilet vardır ve bunların 20'si ödüllüdür. Kutudan ödülsüz 10 bilet alınıp ayrılıyor, ardından kutudan bir bilet çekilecektir.\n**Buna göre çekilen biletin ödüllü olma olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[2|9]]","[[1|4]]","[[2|7]]","[[1|3]]"],
  dogru: 2,
  hatalar: [
    "Ödülsüz biletleri çıkarmak yerine kutuya eklemiş gibi düşündün: [[20|90]] = [[2|9]].",
    "Değişikliği hesaba katmadın: [[20|80]] = [[1|4]]. Kutuda artık 70 bilet var.",
    null,
    "Paydadan 10 yerine 20 çıkardın: [[20|60]] = [[1|3]]. Yalnızca 10 ödülsüz bilet ayrıldı."
  ],
  aciklama: "Adım 1: Ödülsüz biletler ayrılınca ödüllü bilet sayısı değişmez: 20.\nAdım 2: Kutudaki bilet sayısı 80 − 10 = 70 olur.\nAdım 3: Olasılık = [[20|70]] = [[2|7]].\nSağlama: Ödülsüz bilet sayısı başlangıçta 60'tı, 10'u ayrıldığı için 50 kaldı. [[20|70]] + [[50|70]] = 1 eder.\nCevap C."
}
);
