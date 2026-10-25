// Matematik — Basit Olayların Olma Olasılığı | 6. dosya
// Havuz eki (kademe 0): mat-ol-016…075
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["olasilik"] = window.LGS_BANK["olasilik"] || []).push(
{
  id: "mat-ol-016",
  kazanim: "M.8.5.1.1",
  kademe: 0,
  zorluk: 1,
  soru: `Bir dondurma tezgâhında 5 çikolatalı, 4 vanilyalı ve 3 çilekli külah vardır. Tezgâhtan bakmadan bir külah alınacaktır.
**Bu olaya ait olası durumların sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["12", "9", "5", "3"],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca iki çeşidi topladın (5 + 4).",
    "Yalnızca en çok bulunan çeşidin külah sayısını aldın; bütün külahlar sayılmalı.",
    "Çeşit sayısını saydın. Olası durumlar çeşitler değil, tek tek külahlardır."
  ],
  aciklama: `Olası durum, deneyde ortaya çıkabilecek her ayrı sonuçtur. Burada alınabilecek her külah ayrı bir sonuçtur.
Adım 1: Külah sayılarını topla: 5 + 4 + 3 = 12.
Adım 2: Her külah ayrı bir olası durum olduğundan olası durum sayısı 12'dir.
Sık yapılan hata: Çeşit sayısını (3) durum sayısı sanmak. Durum sayısını bulmak için çeşitleri değil külahları say.
Cevap A.`
},
{
  id: "mat-ol-017",
  kazanim: "M.8.5.1.1",
  kademe: 0,
  zorluk: 1,
  soru: `Bir tombala torbasında 14'ten 30'a kadar (14 ve 30 dâhil) numaralandırılmış özdeş toplar vardır. Torbadan bir top çekilecektir.
**Bu olaya ait olası durumların sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["44", "17", "16", "15"],
  dogru: 1,
  hatalar: [
    "14 ile 30'u topladın; sayıların kendisi değil adedi sayılır.",
    null,
    "Yalnızca 30 − 14 işlemini yaptın; uçlardan biri sayılmadı.",
    "İki ucu da dışarıda bıraktın: 30 − 14 − 1 işlemini yaptın."
  ],
  aciklama: `Uçları dâhil bir aralıktaki sayıların adedi, son sayı − ilk sayı + 1 işlemiyle bulunur.
Adım 1: Aralıktaki top sayısını bul: 30 − 14 + 1 = 17.
Adım 2: Her top ayrı bir olası durum olduğundan olası durum sayısı 17'dir.
Sağlama: 14'ten 20'ye kadar 7 sayı, 21'den 30'a kadar 10 sayı vardır; 7 + 10 = 17.
Cevap B.`
},
{
  id: "mat-ol-018",
  kazanim: "M.8.5.1.2",
  kademe: 0,
  zorluk: 1,
  soru: `Bir çekmecede aynı büyüklükte 10 siyah ve 3 beyaz çorap vardır. Işığı yanmayan odada çekmeceden bir çorap alınacaktır.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["Siyah çorap alma olasılığı, beyaz çorap alma olasılığından fazladır.", "Beyaz çorap alma olasılığı, siyah çorap alma olasılığından fazladır.", "Beyaz çorap alma olasılığı, siyah çorap alma olasılığına eşittir.", "Siyah çorap alma olasılığı, 1'e eşittir."],
  dogru: 0,
  hatalar: [
    null,
    "Sayıları karşılaştırmadın. Sayısı az olan rengin alınma olasılığı da azdır.",
    "İki renk var diye şansı eşit sandın. Renklerin çorap sayıları farklıdır.",
    "Siyah çok olduğu için kesin sandın. Beyaz çorap da alınabilir; olasılık 1 olsaydı bütün çoraplar siyah olurdu."
  ],
  aciklama: `Aynı çekmeceden yapılan seçimde her çorabın alınma şansı eşittir. Bu yüzden hesap yapmadan sayıları karşılaştırmak yeter: Sayısı çok olan renk daha olasıdır.
Adım 1: Sayılara bak: 10 siyah, 3 beyaz.
Adım 2: 10 > 3 olduğundan siyah çorap alma olasılığı beyaz çorap alma olasılığından fazladır.
Adım 3: Beyaz çorap da var, bu yüzden siyah almak kesin bir olay (olasılığı 1) değildir.
Sık yapılan hata: "İki renk var, şans yarı yarıya" demek. Şans, renk sayısına değil o renkteki çorap sayısına bağlıdır.
Cevap A.`
},
{
  id: "mat-ol-019",
  kazanim: "M.8.5.1.2",
  kademe: 0,
  zorluk: 1,
  soru: `Aşağıdaki çark 8 eş dilime ayrılmıştır. Dilimlerdeki harfler dilimlerin rengini göstermektedir: Y yeşil, M mavi, S sarı, K kırmızı. Çark çevrilecek ve ok bir dilimde duracaktır.
**Buna göre okun hangi renkte bir dilimde durma olasılığı en azdır?**`,
  gorsel: `<svg viewBox="0 0 280 240" role="img" aria-label="Sekiz eş dilimli çark: üç yeşil, iki mavi, bir sarı, iki kırmızı dilim."><polygon points="130,2 150,2 140,28" fill="currentColor"/><g stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M140 130 L140 30 A100 100 0 0 1 210.7 59.3 Z" fill="var(--vurgu)"/><path d="M140 130 L210.7 59.3 A100 100 0 0 1 240 130 Z" fill="var(--vurgu2)"/><path d="M140 130 L240 130 A100 100 0 0 1 210.7 200.7 Z" fill="var(--dolgu)"/><path d="M140 130 L210.7 200.7 A100 100 0 0 1 140 230 Z" fill="currentColor" fill-opacity="0.2"/><path d="M140 130 L140 230 A100 100 0 0 1 69.3 200.7 Z" fill="var(--vurgu)"/><path d="M140 130 L69.3 200.7 A100 100 0 0 1 40 130 Z" fill="var(--vurgu2)"/><path d="M140 130 L40 130 A100 100 0 0 1 69.3 59.3 Z" fill="currentColor" fill-opacity="0.2"/><path d="M140 130 L69.3 59.3 A100 100 0 0 1 140 30 Z" fill="var(--vurgu)"/></g><g font-size="16" text-anchor="middle" fill="currentColor" font-weight="700"><text x="165.3" y="74">Y</text><text x="201" y="109.7">M</text><text x="201" y="160.3">S</text><text x="165.3" y="196">K</text><text x="114.7" y="196">Y</text><text x="79" y="160.3">M</text><text x="79" y="109.7">K</text><text x="114.7" y="74">Y</text></g></svg>`,
  secenekler: ["Yeşil", "Mavi", "Sarı", "Kırmızı"],
  dogru: 2,
  hatalar: [
    "Yeşil 3 dilimle en çok bulunan renktir; olasılığı en fazla olan odur.",
    "Mavi 2 dilimdir; sarı 1 dilimle daha azdır.",
    null,
    "Kırmızı 2 dilimdir; sarı 1 dilimle daha azdır."
  ],
  aciklama: `Dilimler eş olduğundan her dilimin gelme şansı aynıdır. Bir rengin olasılığı, o renkteki dilim sayısıyla orantılıdır.
Adım 1: Dilimleri renklere göre say: Y 3, M 2, S 1, K 2 (toplam 8).
Adım 2: En az dilimi olan renk sarıdır (1 dilim). Olasılığı [[1|8]]'dir.
Sağlama: Sarı dışındaki her rengin en az 2 dilimi vardır, yani olasılıkları daha büyüktür.
Cevap C.`
},
{
  id: "mat-ol-020",
  kazanim: "M.8.5.1.3",
  kademe: 0,
  zorluk: 1,
  soru: `Bir mağaza, alışveriş yapan 30 müşterisinin her biri için birer kupon hazırlamış ve kuponları özdeş zarflara koyup bir kutuya atmıştır. Kutudan bakmadan bir zarf çekilecek ve kupon sahibine hediye verilecektir. Sevgi de bu müşterilerden biridir.
**Buna göre Sevgi'nin kuponunun çekilme olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["30", "[[1|2]]", "[[1|29]]", "[[1|30]]"],
  dogru: 3,
  hatalar: [
    "Olası durum sayısını olasılık sandın. Olasılık 1'i geçemez.",
    "Çekilir ya da çekilmez diye iki durum sandın. Bu iki durum eş şanslı değildir.",
    "Sevgi'yi saymadın. Olası durum sayısı 29 değil 30'dur.",
    null
  ],
  aciklama: `Eş şanslı n olası durumdan her birinin olasılığı [[1|n]]'dir.
Adım 1: Kuponlar özdeş olduğundan her kuponun çekilme şansı eşittir.
Adım 2: Olası durum sayısı 30'dur. Sevgi'nin kuponu bunlardan yalnızca biridir.
Adım 3: Olasılık [[1|30]] olur.
Sık yapılan hata: "Ya çekilir ya çekilmez" diye iki durum varmış gibi düşünmek. Bu iki sonucun şansı eşit değildir; sayılması gereken kuponlardır.
Cevap D.`
},
{
  id: "mat-ol-021",
  kazanim: "M.8.5.1.3",
  kademe: 0,
  zorluk: 1,
  soru: `Hilesiz bir zarla oynanan bir oyunda zar bir kez atılacaktır. Dört arkadaş, zarın üst yüzüne gelecek sayılarla ilgili aşağıdaki yorumları yapmıştır.
**Buna göre hangi arkadaşın yorumu doğrudur?**`,
  gorsel: null,
  secenekler: ["Bora: 6 en büyük sayı olduğu için gelme olasılığı daha fazladır.", "Can: Çift sayıların gelme olasılığı tek sayılarınkinden fazladır.", "Akın: Her sayının gelme olasılığı [[1|6]]'dır.", "Defne: 1'in gelme olasılığı 0'dır, çünkü 1 en küçük sayıdır."],
  dogru: 2,
  hatalar: [
    "Sayının büyüklüğü şansı değiştirmez. Hilesiz zarda bütün yüzlerin şansı eşittir.",
    "Çift ve tek sayılar üçer tanedir; iki olay da eş şanslıdır.",
    null,
    "Küçük sayı gelmez diye bir kural yoktur. 1 de gelebilir, olasılığı [[1|6]]'dır."
  ],
  aciklama: `Hilesiz zarın altı yüzü de eşit şansa sahiptir. n olası durum eş şanslıysa her birinin olasılığı [[1|n]]'dir.
Adım 1: Zarda 6 olası durum vardır ve hepsinin şansı eşittir.
Adım 2: Her yüzün olasılığı [[1|6]] olur. Akın doğru söylemiştir.
Adım 3: Çift (2, 4, 6) ve tek (1, 3, 5) sayılar üçer tanedir; Can yanılmıştır. Sayının büyüklüğü şansı etkilemez; Bora ve Defne de yanılmıştır.
Sık yapılan hata: Büyük sayıyı "daha güçlü" saymak. Olasılık sayının değerine değil, durumun kaç eş şanslı sonuçtan biri olduğuna bağlıdır.
Cevap C.`
},
{
  id: "mat-ol-022",
  kazanim: "M.8.5.1.4",
  kademe: 0,
  zorluk: 1,
  soru: `Bir hava durumu uygulaması, yarın İzmir'de yağmur yağma olasılığını %35 olarak göstermektedir.
**Buna göre yarın İzmir'de yağmur __yağmama__ olasılığı yüzde kaçtır?**`,
  gorsel: null,
  secenekler: ["%35", "%50", "%55", "%65"],
  dogru: 3,
  hatalar: [
    "Olma olasılığını olmama olasılığı sandın.",
    "Yağmur yağar ya da yağmaz diye iki durum sayıp yarı yarıya sandın.",
    "100 − 35 işleminde çıkarmayı yanlış yaptın.",
    null
  ],
  aciklama: `Bir olayın olma olasılığı ile olmama olasılığının toplamı 1'dir (yüzde olarak %100).
Adım 1: Yağmur yağma olasılığı %35'tir.
Adım 2: Yağmama olasılığı %100 − %35 = %65 olur.
Sağlama: %35 + %65 = %100.
Cevap D.`
},
{
  id: "mat-ol-023",
  kazanim: "M.8.5.1.4",
  kademe: 0,
  zorluk: 1,
  soru: `Bir torbada 6 yeşil ve 4 sarı top vardır; toplar büyüklük bakımından özdeştir. Torbadan bakmadan bir top çekilecektir.
**Çekilen topun kırmızı olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["1", "[[2|5]]", "[[1|10]]", "0"],
  dogru: 3,
  hatalar: [
    "Olayı kesin sandın. Kesin olay, bütün topların kırmızı olması demektir.",
    "Sarı topların olasılığını yazdın.",
    "Torbada kırmızı top olmadığı hâlde pay olarak 1 yazdın. Bu olay hiçbir olası durumu içermez, payı 0'dır.",
    null
  ],
  aciklama: `İmkânsız olay, hiçbir olası durumu içermeyen olaydır ve olasılığı 0'dır.
Adım 1: Torbada yalnızca yeşil ve sarı top vardır.
Adım 2: Kırmızı top çekmek bu torbada imkânsızdır; olayın istenen durum sayısı 0'dır.
Adım 3: Olasılık [[0|10]] = 0 olur.
Sağlama: Torbada kırmızı top olmadığı için istenen durum sayısı 0'dır ve pay 0 olunca kesir 0 olur.
Cevap D.`
},
{
  id: "mat-ol-024",
  kazanim: "M.8.5.1.4",
  kademe: 0,
  zorluk: 1,
  soru: `Okul kermesinde 1'den 50'ye kadar numaralandırılmış 50 çekiliş bileti satılmıştır. Biletlerin tamamı bir kutuya atılmış ve kutudan rastgele bir bilet çekilecektir.
**Çekilen biletin numarasının 100'den küçük olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["1", "[[1|2]]", "[[1|50]]", "0"],
  dogru: 0,
  hatalar: [
    null,
    "Biletlerin yalnızca bir kısmının 100'den küçük olduğunu düşündün.",
    "Tek bir biletin çekilme olasılığını yazdın.",
    "100'den küçük numara yok sandın. 50'ye kadar bütün numaralar 100'den küçüktür."
  ],
  aciklama: `Kesin olay, bütün olası durumları içeren olaydır ve olasılığı 1'dir.
Adım 1: Biletlerin numaraları 1'den 50'ye kadardır; hepsi 100'den küçüktür.
Adım 2: İstenen durum sayısı 50, olası durum sayısı 50'dir: [[50|50]] = 1.
Sağlama: Bu olay kesindir, çünkü hangi bilet çekilirse çekilsin gerçekleşir.
Cevap A.`
},
{
  id: "mat-ol-025",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 1,
  soru: `Haftanın yedi gününün adı özdeş kartlara ayrı ayrı yazılmış ve kartlar bir kutuya konulmuştur. Kutudan bakmadan bir kart çekilecektir.
**Çekilen kartta yazan günün adının "C" harfiyle başlama olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[1|7]]", "[[2|7]]", "[[2|5]]", "[[3|7]]"],
  dogru: 1,
  hatalar: [
    "Yalnızca Cuma'yı saydın; Cumartesi'yi unuttun.",
    null,
    "Payda olarak C ile başlamayan 5 günü aldın.",
    "Çarşamba'yı da saydın; Ç ile C farklı harflerdir."
  ],
  aciklama: `Olasılık = [[istenen durum sayısı|tüm olası durum sayısı]].
Adım 1: Olası durum sayısı 7'dir (7 gün).
Adım 2: Adı "C" ile başlayan günler Cuma ve Cumartesi'dir. İstenen durum sayısı 2'dir.
Adım 3: Olasılık [[2|7]] olur.
Sık yapılan hata: Çarşamba'yı da saymak. Çarşamba "Ç" ile başlar, "C" ile değil.
Cevap B.`
},
{
  id: "mat-ol-026",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 1,
  soru: `Bir kuru yemiş karışımında özdeş büyüklükte 8 fındık, 6 badem, 4 ceviz ve 2 antep fıstığı vardır. Karışımdan bakmadan bir tane alınacaktır.
**Alınan kuru yemişin badem olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[1|4]]", "[[3|10]]", "[[3|7]]", "[[7|10]]"],
  dogru: 1,
  hatalar: [
    "Dört çeşit var diye [[1|4]] aldın. Çeşitlerin adet sayıları eşit değildir.",
    null,
    "Paydaya badem olmayanların sayısını (14) yazdın: [[6|14]] = [[3|7]].",
    "Badem olmama olasılığını yazdın."
  ],
  aciklama: `Adım 1: Tüm yemişleri say: 8 + 6 + 4 + 2 = 20. Olası durum sayısı 20'dir.
Adım 2: İstenen durum sayısı bademlerin sayısıdır: 6.
Adım 3: Olasılık [[6|20]] = [[3|10]] olur.
Sağlama: Badem olmayanlar 14 tanedir; [[14|20]] = [[7|10]]. [[3|10]] + [[7|10]] = 1.
Cevap B.`
},
{
  id: "mat-ol-027",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 1,
  soru: `1'den 9'a kadar olan rakamlar (1 ve 9 dâhil) birbirinin aynı dokuz karta birer kez yazılmış ve kartlar karıştırılmıştır. Kartlardan biri rastgele çekilecektir.
**Çekilen kartın üzerindeki rakamın asal sayı olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[4|5]]", "[[5|9]]", "[[4|9]]", "[[1|3]]"],
  dogru: 2,
  hatalar: [
    "Payda olarak asal olmayan kartların sayısını (5) aldın.",
    "Asal olmayan kartları saydın (1, 4, 6, 8, 9).",
    null,
    "2'yi asal saymadın; yalnızca 3, 5 ve 7'yi aldın."
  ],
  aciklama: `Asal sayı, 1 ve kendisinden başka pozitif böleni olmayan, 1'den büyük sayıdır.
Adım 1: Olası durum sayısı 9'dur.
Adım 2: 1 ile 9 arasındaki asal sayılar 2, 3, 5 ve 7'dir; istenen durum sayısı 4'tür.
Adım 3: Olasılık [[4|9]] olur.
Sık yapılan hata: 2'yi "çift sayı" diye dışarıda bırakmak. 2 asal sayıdır. 1 ise asal değildir.
Cevap C.`
},
{
  id: "mat-ol-028",
  kazanim: "M.8.5.1.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bir kurs merkezinde 4 sınıf vardır ve sınıfların mevcutları sırasıyla 18, 22, 20 ve 15'tir. Merkez yöneticisi her öğrencinin adını ayrı bir kâğıda yazıp hepsini bir kutuya atmıştır. Kutudan bir kâğıt çekilip adı yazan öğrenciye burs verilecektir.
**Bu olaya ait olası durumların sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["75", "60", "22", "4"],
  dogru: 0,
  hatalar: [
    null,
    "Sınıflardan birini (15 kişilik) toplamaya katmadın.",
    "Yalnızca en kalabalık sınıfın mevcudunu aldın.",
    "Sınıf sayısını saydın. Olası durumlar sınıflar değil, kâğıtlardır."
  ],
  aciklama: `Her öğrencinin adı ayrı bir kâğıttadır; çekilebilecek her kâğıt ayrı bir olası durumdur.
Adım 1: Tüm öğrencilerin sayısını bul: 18 + 22 + 20 + 15 = 75.
Adım 2: Kutuda 75 kâğıt olduğundan olası durum sayısı 75'tir.
Sağlama: 18 + 22 = 40, 40 + 20 = 60, 60 + 15 = 75.
Cevap A.`
},
{
  id: "mat-ol-029",
  kazanim: "M.8.5.1.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bir yarışmada 1'den 36'ya kadar (1 ve 36 dâhil) numaralandırılmış 36 sandalye vardır. Sunucu, yalnızca numarası 4'ün katı olan sandalyeler arasından birini rastgele seçerek kazananı belirleyecektir.
**Bu olaya ait olası durumların sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["9", "18", "32", "36"],
  dogru: 0,
  hatalar: [
    null,
    "Çift numaralı sandalyeleri saydın (36 ÷ 2); 4'ün katları sayılmalıdır.",
    "36'dan 4 çıkardın.",
    "Koşulu dikkate almadın ve bütün sandalyeleri saydın."
  ],
  aciklama: `Seçim bir koşulla sınırlandığında olası durumlar yalnızca koşula uyanlardır.
Adım 1: 1 ile 36 arasında 4'ün katlarını yaz: 4, 8, 12, 16, 20, 24, 28, 32, 36.
Adım 2: Bu sayıları say: 9 tane.
Sağlama: 36 ÷ 4 = 9 işlemi de 4'ün kat sayısını verir.
Sık yapılan hata: Koşulu atlayıp 36 demek. Seçim yalnızca 4'ün katları arasından yapılacaktır.
Cevap A.`
},
{
  id: "mat-ol-030",
  kazanim: "M.8.5.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Aşağıdaki çarkın dilimlerinin merkez açıları şekil üzerinde yazılıdır. Çark çevrilecek ve ok bir dilimde duracaktır. Dilimlerdeki harfler dilimlerin rengini göstermektedir: K kırmızı, M mavi, S sarı, Y yeşil.
**Buna göre okun hangi renkte bir dilimde durma olasılığı en fazladır?**`,
  gorsel: `<svg viewBox="0 0 280 240" role="img" aria-label="Dört dilimli çark: kırmızı 50 derece, mavi 130 derece, sarı 110 derece, yeşil 70 derece."><polygon points="130,2 150,2 140,28" fill="currentColor"/><g stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M140 130 L140 30 A100 100 0 0 1 216.6 65.7 Z" fill="currentColor" fill-opacity="0.2"/><path d="M140 130 L216.6 65.7 A100 100 0 0 1 140 230 Z" fill="var(--vurgu2)"/><path d="M140 130 L140 230 A100 100 0 0 1 46 95.8 Z" fill="var(--dolgu)"/><path d="M140 130 L46 95.8 A100 100 0 0 1 140 30 Z" fill="var(--vurgu)"/></g><g font-size="16" text-anchor="middle" fill="currentColor" font-weight="700"><text x="168.7" y="64.4">K</text><text x="168.7" y="81.4" font-size="14" font-weight="400">50°</text><text x="201.6" y="154.7">M</text><text x="201.6" y="171.7" font-size="14" font-weight="400">130°</text><text x="84.3" y="165">S</text><text x="84.3" y="182" font-size="14" font-weight="400">110°</text><text x="101" y="70.3">Y</text><text x="101" y="87.3" font-size="14" font-weight="400">70°</text></g></svg>`,
  secenekler: ["Kırmızı", "Sarı", "Yeşil", "Mavi"],
  dogru: 3,
  hatalar: [
    "Kırmızı dilim 50° ile en küçük dilimdir; olasılığı en azdır.",
    "Sarı dilim 110° iken mavi dilim 130°'dir; mavi daha geniştir.",
    "Yeşil dilim 70°'dir; mavinin açısı çok daha büyüktür.",
    null
  ],
  aciklama: `Dilimler eş değilse şans dilimin büyüklüğüne bağlıdır: Merkez açısı büyük olan dilimin olasılığı da büyüktür.
Adım 1: Açıları karşılaştır: K 50°, M 130°, S 110°, Y 70° (toplam 360°).
Adım 2: En büyük açı 130° ile mavi dilimdedir.
Sağlama: Mavinin olasılığı [[130|360]] = [[13|36]] olur ve diğer üç rengin olasılığından büyüktür.
Sık yapılan hata: Dört dilim var diye dört rengi eş şanslı saymak. Dilimler eş değildir.
Cevap D.`
},
{
  id: "mat-ol-031",
  kazanim: "M.8.5.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bir okul gezisinde öğrenci kulübünün hediye çekilişi düzenlenmiştir. Dört arkadaşın aldığı bilet sayıları aşağıdaki tabloda verilmiştir. Bütün biletler özdeştir ve bir kutuya atılıp karıştırılmıştır. Kutudan bir bilet çekilecektir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Kişi</th><th>Ali</th><th>Bora</th><th>Ceren</th><th>Deniz</th></tr><tr><td>Bilet sayısı</td><td>3</td><td>5</td><td>4</td><td>2</td></tr></table>`,
  secenekler: ["Ceren'in kazanma olasılığı, Bora'nınkinden fazladır.", "Ali'nin kazanma olasılığı, Ceren'inkine eşittir.", "Deniz'in kazanma olasılığı, Ali'ninkinden fazladır.", "Bora'nın kazanma olasılığı, dördü arasında en fazladır."],
  dogru: 3,
  hatalar: [
    "Karşılaştırmayı ters yaptın. Ceren'in 4, Bora'nın 5 bileti vardır.",
    "Bilet sayıları eşit değil: Ali'nin 3, Ceren'in 4 bileti var.",
    "Deniz'in 2, Ali'nin 3 bileti vardır; Deniz'in olasılığı daha azdır.",
    null
  ],
  aciklama: `Aynı kutudan çekilişte her biletin çekilme şansı eşittir. Bu yüzden bilet sayısı çok olanın kazanma olasılığı da fazladır.
Adım 1: Bilet sayılarını sırala: Bora 5, Ceren 4, Ali 3, Deniz 2.
Adım 2: En çok bileti Bora'dadır; kazanma olasılığı en fazladır.
Adım 3: Diğer ifadeleri kontrol et: Ceren Bora'dan az, Ali Ceren'den az, Deniz Ali'den azdır; bu ifadeler yanlıştır.
Sağlama: Toplam 3 + 5 + 4 + 2 = 14 bilet vardır; Bora'nın olasılığı [[5|14]] ile en büyüktür.
Cevap D.`
},
{
  id: "mat-ol-032",
  kazanim: "M.8.5.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `Bir kutuda 1, 2, 3, 4, 5 numaralı birer kart ile 6 numaralı iki kart vardır. Kartların hepsi aynı büyüklüktedir ve kutuya konup karıştırılmıştır. Kutudan bir kart çekilecektir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["1 numaralı kartın çekilme olasılığı [[1|7]]'dir.", "Her numaranın çekilme olasılığı [[1|6]]'dır.", "6 numaralı kartın çekilme olasılığı [[1|7]]'dir.", "6 numaralı kartın çekilme olasılığı, 1 numaralı kartınkine eşittir."],
  dogru: 0,
  hatalar: [
    null,
    "Altı numara var diye numaraları eş şanslı saydın. 6 numaralı iki kart olduğundan olası durum sayısı 7'dir.",
    "İki 6 numaralı kartı tek kart saydın. İstenen durum sayısı 2'dir.",
    "6 numaralı karttan iki tane, 1 numaralıdan bir tane var; olasılıklar eşit değildir."
  ],
  aciklama: `Olasılıkta numaralar değil kartlar sayılır. Eş şanslı olan, kartlardır; sonuçlar (numaralar) eş şanslı olmayabilir.
Adım 1: Kutudaki kart sayısı 5 + 2 = 7'dir; olası durum sayısı 7'dir.
Adım 2: 1 numaralı kart tektir; olasılığı [[1|7]]'dir.
Adım 3: 6 numaralı iki kart vardır; olasılığı [[2|7]]'dir. Yani 6 numaralının şansı 1 numaralının iki katıdır.
Sık yapılan hata: Numara sayısını (6) olası durum sayısı sanmak.
Cevap A.`
},
{
  id: "mat-ol-033",
  kazanim: "M.8.5.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `Bir etkinlikte kullanılan çark 4 eş dilime ayrılmıştır ve yalnızca 1 dilim "ödül" dilimidir. Katılımcı sayısı arttığı için çark yenilenmiş; yeni çark 10 eş dilime ayrılmış ve yine yalnızca 1 dilim ödül dilimi olarak bırakılmıştır. Çark bir kez çevrilecek ve ok bir dilimde duracaktır.
**Buna göre ödül dilimine gelme olasılığı eski çarka göre ne kadar azalmıştır?**`,
  gorsel: null,
  secenekler: ["[[7|20]]", "[[1|4]]", "[[1|6]]", "[[3|20]]"],
  dogru: 3,
  hatalar: [
    "Farkı değil toplamı aldın.",
    "Yalnızca eski çarkın olasılığını yazdın.",
    "Dilim sayılarının farkını (10 − 4 = 6) paydaya yazdın.",
    null
  ],
  aciklama: `Eş dilimli çarkta bir diliminin gelme olasılığı [[1|dilim sayısı]]'dır.
Adım 1: Eski çarkta ödül olasılığı [[1|4]]'tür.
Adım 2: Yeni çarkta ödül olasılığı [[1|10]]'dur.
Adım 3: Azalma, iki olasılığın farkıdır. Payda eşitle ve çıkar: [[5|20]] − [[2|20]] = [[3|20]].
Sağlama: [[3|20]] = 0,15; 0,25 − 0,10 = 0,15.
Cevap D.`
},
{
  id: "mat-ol-034",
  kazanim: "M.8.5.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `Eş dilimli bir çarkta her bir dilimin gelme olasılığı [[1|9]] olarak hesaplanmıştır. Bu çarkın 3 dilimi mavi, diğerleri beyazdır. Çark bir kez çevrilecektir.
**Buna göre okun mavi bir dilimde durma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["3", "[[1|3]]", "[[1|9]]", "[[1|27]]"],
  dogru: 1,
  hatalar: [
    "Dilim sayısını olasılık sandın. Olasılık 1'i geçemez.",
    null,
    "Tek bir diliminin olasılığını yazdın; mavi 3 dilimdir.",
    "Olasılıkları toplamak yerine çarptın."
  ],
  aciklama: `Her dilimin olasılığı [[1|9]] ise çarkın 9 eş dilimi vardır.
Adım 1: Dilim sayısı 9'dur.
Adım 2: Mavi dilim sayısı 3'tür; istenen durum sayısı 3'tür.
Adım 3: Olasılık [[3|9]] = [[1|3]] olur.
Sağlama: Üç dilimin olasılıkları toplanır: [[1|9]] + [[1|9]] + [[1|9]] = [[3|9]] = [[1|3]].
Cevap B.`
},
{
  id: "mat-ol-035",
  kazanim: "M.8.5.1.4",
  kademe: 0,
  zorluk: 2,
  soru: `Bir kutuda 36 kart vardır. Kutudan rastgele çekilen bir kartın "sayı kartı" olma olasılığı [[5|12]] olarak hesaplanmıştır. Diğer kartların hepsi "harf kartı"dır.
**Buna göre kutudaki harf kartlarının sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["21", "15", "7", "5"],
  dogru: 0,
  hatalar: [
    null,
    "Sayı kartlarının sayısını buldun; harf kartları değil.",
    "12 − 5 = 7 işlemini kart sayısı sandın; 7, olmama olasılığının payıdır.",
    "[[5|12]] ifadesindeki payı kart sayısı sandın."
  ],
  aciklama: `Bir olayın olma ve olmama olasılıklarının toplamı 1'dir.
Adım 1: Sayı kartı olasılığı [[5|12]] ise harf kartı olasılığı 1 − [[5|12]] = [[7|12]] olur.
Adım 2: Harf kartı sayısı 36 ÷ 12 · 7 = 3 · 7 = 21'dir.
Sağlama: Sayı kartı sayısı 3 · 5 = 15'tir. 15 + 21 = 36.
Cevap A.`
},
{
  id: "mat-ol-036",
  kazanim: "M.8.5.1.4",
  kademe: 0,
  zorluk: 2,
  soru: `Olasılık dersinde öğretmen, olasılık değerleriyle ilgili dört öğrencinin söylediği cümleyi tahtaya yazmıştır.
**Buna göre hangi öğrencinin cümlesi doğrudur?**`,
  gorsel: null,
  secenekler: ["Ada: Olasılığı 0 olan bir olay kesinlikle gerçekleşmez.", "Barış: Olasılığı [[9|10]] olan bir olay kesinlikle gerçekleşir.", "Cem: Olasılığı [[1|2]] olan bir olay, her iki denemeden birinde kesinlikle gerçekleşir.", "Deniz: Olasılığı en küçük olan olay hiçbir zaman gerçekleşmez."],
  dogru: 0,
  hatalar: [
    null,
    "[[9|10]] olasılığı çok büyüktür ama 1 değildir; bu olay gerçekleşmeyebilir.",
    "Olasılık bir şans ölçüsüdür, sonucu garanti etmez.",
    "Küçük olasılık, imkânsız demek değildir. Yalnızca olasılığı 0 olan olay imkânsızdır."
  ],
  aciklama: `Olasılık, bir olayın olma şansının ölçüsüdür. Yalnızca 0 imkânsız, yalnızca 1 kesin olayı gösterir.
Adım 1: Olasılığı 0 olan olay imkânsızdır; yani hiçbir zaman gerçekleşmez. Ada doğru söylemiştir.
Adım 2: [[9|10]] kesin olay değildir (1 değildir), bu yüzden gerçekleşmeyebilir; Barış yanılmıştır.
Adım 3: [[1|2]] olasılığı bir garanti vermez; Cem yanılmıştır. Küçük ama sıfırdan büyük olasılıklı olaylar da gerçekleşebilir; Deniz yanılmıştır.
Sık yapılan hata: "Çok olasıdır" ile "kesindir" sözlerini karıştırmak.
Cevap A.`
},
{
  id: "mat-ol-037",
  kazanim: "M.8.5.1.4",
  kademe: 0,
  zorluk: 2,
  soru: `Bir çarkın yalnızca mavi, sarı ve kırmızı olmak üzere üç renkli dilimi vardır. Çark çevrildiğinde okun mavi dilimde durma olasılığı [[1|4]], sarı dilimde durma olasılığı [[3|10]]'dur.
**Buna göre okun kırmızı dilimde durma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[3|4]]", "[[7|10]]", "[[11|20]]", "[[9|20]]"],
  dogru: 3,
  hatalar: [
    "Yalnızca mavinin olasılığını 1'den çıkardın.",
    "Yalnızca sarının olasılığını 1'den çıkardın.",
    "Mavi ve sarının olasılıklarının toplamını yazdın; 1'den çıkarmadın.",
    null
  ],
  aciklama: `Bütün olası durumların olasılıkları toplamı 1'dir.
Adım 1: Mavi ve sarının toplamı: [[1|4]] + [[3|10]] = [[5|20]] + [[6|20]] = [[11|20]].
Adım 2: Kırmızı için kalan: 1 − [[11|20]] = [[20|20]] − [[11|20]] = [[9|20]].
Sağlama: [[5|20]] + [[6|20]] + [[9|20]] = [[20|20]] = 1.
Cevap D.`
},
{
  id: "mat-ol-038",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 2,
  soru: `Bir müzik yarışmasında 10'dan 29'a kadar (10 ve 29 dâhil) numaralı 20 özdeş bilet bir torbaya atılmıştır. Torbadan bir bilet çekilecektir.
**Çekilen biletin numarasının asal sayı olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[1|5]]", "[[1|4]]", "[[3|10]]", "[[7|20]]"],
  dogru: 2,
  hatalar: [
    "23 ve 29'u asal saymadın; yalnızca 4 asal buldun.",
    "Asal sayılardan birini unuttun; 5 asal buldun.",
    null,
    "21'i de asal saydın; 21 = 3 · 7 asal değildir."
  ],
  aciklama: `Adım 1: Olası durum sayısı 29 − 10 + 1 = 20'dir.
Adım 2: 10 ile 29 arasındaki asal sayılar: 11, 13, 17, 19, 23, 29. İstenen durum sayısı 6'dır.
Adım 3: Olasılık [[6|20]] = [[3|10]] olur.
Sağlama: 15 (3 · 5) ve 21 (3 · 7) gibi sayılar asal değildir, bu yüzden sayılmaz.
Cevap C.`
},
{
  id: "mat-ol-039",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 2,
  soru: `Bir okul orkestrasındaki öğrencilerin çaldıkları çalgılar aşağıdaki tabloda verilmiştir. Her öğrenci yalnızca bir çalgı çalmaktadır. Orkestra öğretmeni, bu öğrencilerden birini rastgele seçip konserde konuşma yapmasını isteyecektir.
**Seçilen öğrencinin gitar çalan bir öğrenci __olmama__ olasılığı kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Çalgı</th><th>Keman</th><th>Flüt</th><th>Gitar</th><th>Davul</th></tr><tr><td>Öğrenci sayısı</td><td>6</td><td>4</td><td>8</td><td>2</td></tr></table>`,
  secenekler: ["[[3|5]]", "[[1|2]]", "[[2|5]]", "[[1|5]]"],
  dogru: 0,
  hatalar: [
    null,
    "Gitar çalar ya da çalmaz diye iki durum sayıp yarı yarıya sandın.",
    "Gitar çalma olasılığını yazdın; olmama olasılığı istenmişti.",
    "Yalnızca flüt çalan öğrencileri aldın: [[4|20]]."
  ],
  aciklama: `Adım 1: Tüm öğrenciler: 6 + 4 + 8 + 2 = 20. Olası durum sayısı 20'dir.
Adım 2: Gitar çalmayanlar: 6 + 4 + 2 = 12. İstenen durum sayısı 12'dir.
Adım 3: Olasılık [[12|20]] = [[3|5]] olur.
Sağlama: Gitar çalma olasılığı [[8|20]] = [[2|5]]; [[2|5]] + [[3|5]] = 1.
Cevap A.`
},
{
  id: "mat-ol-040",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 2,
  soru: `Aşağıdaki çark 10 eş dilime ayrılmıştır. Dilimlerdeki harfler dilimlerin rengini göstermektedir: T turuncu, Y yeşil, M mor, B beyaz. Çark bir kez çevrilecektir.
**Okun turuncu olmayan bir dilimde durma olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 280 240" role="img" aria-label="On eş dilimli çark: dört turuncu, üç yeşil, iki mor, bir beyaz dilim."><polygon points="130,2 150,2 140,28" fill="currentColor"/><g stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M140 130 L140 30 A100 100 0 0 1 198.8 49.1 Z" fill="var(--vurgu)"/><path d="M140 130 L198.8 49.1 A100 100 0 0 1 235.1 99.1 Z" fill="var(--vurgu2)"/><path d="M140 130 L235.1 99.1 A100 100 0 0 1 235.1 160.9 Z" fill="var(--dolgu)"/><path d="M140 130 L235.1 160.9 A100 100 0 0 1 198.8 210.9 Z" fill="var(--vurgu)"/><path d="M140 130 L198.8 210.9 A100 100 0 0 1 140 230 Z" fill="none"/><path d="M140 130 L140 230 A100 100 0 0 1 81.2 210.9 Z" fill="var(--vurgu2)"/><path d="M140 130 L81.2 210.9 A100 100 0 0 1 44.9 160.9 Z" fill="var(--vurgu)"/><path d="M140 130 L44.9 160.9 A100 100 0 0 1 44.9 99.1 Z" fill="var(--dolgu)"/><path d="M140 130 L44.9 99.1 A100 100 0 0 1 81.2 49.1 Z" fill="var(--vurgu2)"/><path d="M140 130 L81.2 49.1 A100 100 0 0 1 140 30 Z" fill="var(--vurgu)"/></g><g font-size="16" text-anchor="middle" fill="currentColor" font-weight="700"><text x="160.4" y="72.2">T</text><text x="193.4" y="96.2">Y</text><text x="206" y="135">M</text><text x="193.4" y="173.8">T</text><text x="160.4" y="197.8">B</text><text x="119.6" y="197.8">Y</text><text x="86.6" y="173.8">T</text><text x="74" y="135">M</text><text x="86.6" y="96.2">Y</text><text x="119.6" y="72.2">T</text></g></svg>`,
  secenekler: ["[[3|10]]", "[[2|5]]", "[[3|5]]", "[[2|3]]"],
  dogru: 2,
  hatalar: [
    "Yalnızca yeşil dilimleri saydın.",
    "Turuncu olma olasılığını yazdın.",
    null,
    "Turuncu dilimleri, turuncu olmayan dilimlere böldün: [[4|6]]."
  ],
  aciklama: `Adım 1: Çarkta 10 eş dilim vardır; olası durum sayısı 10'dur.
Adım 2: Turuncu dilimler 4 tanedir; turuncu olmayanlar 10 − 4 = 6 dilimdir (3 yeşil + 2 mor + 1 beyaz).
Adım 3: Olasılık [[6|10]] = [[3|5]] olur.
Sağlama: Turuncu olasılığı [[4|10]] = [[2|5]]; [[2|5]] + [[3|5]] = 1.
Cevap C.`
},
{
  id: "mat-ol-041",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 2,
  soru: `Cem, bir masa oyununda hilesiz bir zarı bir kez atacaktır.
**Zarın üst yüzüne gelen sayının 12'nin böleni olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[5|6]]", "[[2|3]]", "[[1|2]]", "[[1|6]]"],
  dogru: 0,
  hatalar: [
    null,
    "6'yı 12'nin böleni saymadın; yalnızca 1, 2, 3 ve 4'ü aldın.",
    "Yalnızca çift bölenleri (2, 4, 6) aldın.",
    "Yalnızca 12'yi bölmeyen tek sayıyı (5) saydın; bölenleri değil."
  ],
  aciklama: `Bir sayının böleni, o sayıyı kalansız bölen sayıdır.
Adım 1: Zarda 1, 2, 3, 4, 5, 6 sayıları vardır; olası durum sayısı 6'dır.
Adım 2: 12'yi bölenler: 1, 2, 3, 4 ve 6. İstenen durum sayısı 5'tir. (5, 12'yi kalansız bölmez.)
Adım 3: Olasılık [[5|6]] olur.
Sağlama: 12'nin bölenleri 1, 2, 3, 4, 6 ve 12'dir; zarda yalnızca 12 bulunmaz, 5 de bölen değildir.
Cevap A.`
},
{
  id: "mat-ol-042",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 2,
  soru: `Bir oyun kutusunda 36 kart vardır. Kartların [[1|4]]'ü mavi, [[1|3]]'ü sarıdır; kalan kartlar kırmızıdır. Kutudan rastgele bir kart çekilecektir.
**Çekilen kartın kırmızı olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[5|7]]", "[[7|12]]", "[[5|12]]", "[[1|12]]"],
  dogru: 2,
  hatalar: [
    "Kırmızı kartları, mavi ve sarı kartların toplamına (21) böldün.",
    "Mavi ve sarı kartların olasılıklarının toplamını yazdın.",
    null,
    "[[1|3]] − [[1|4]] farkını aldın."
  ],
  aciklama: `Adım 1: Mavi kartlar 36 · [[1|4]] = 9, sarı kartlar 36 · [[1|3]] = 12 tanedir.
Adım 2: Kırmızı kartlar 36 − 9 − 12 = 15 tanedir.
Adım 3: Olasılık [[15|36]] = [[5|12]] olur.
Sağlama: [[1|4]] + [[1|3]] = [[7|12]] ve 1 − [[7|12]] = [[5|12]].
Cevap C.`
},
{
  id: "mat-ol-043",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 2,
  soru: `Bir apartmanın zil panosunda 1'den 30'a kadar (1 ve 30 dâhil) numaralandırılmış 30 düğme vardır. Bir çocuk düğmelerden birine rastgele basacaktır.
**Basılan düğmenin numarasının hem 2'ye hem de 3'e tam bölünebilen bir sayı olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[1|6]]", "[[1|3]]", "[[1|2]]", "[[5|6]]"],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca 3'e bölünen sayıları aldın (10 tane).",
    "Yalnızca 2'ye bölünen sayıları aldın (15 tane).",
    "Koşulu sağlamayan düğmelerin olasılığını yazdın."
  ],
  aciklama: `Hem 2'ye hem 3'e bölünen sayılar, 2 ile 3'ün ortak katlarıdır; yani 6'nın katlarıdır.
Adım 1: Olası durum sayısı 30'dur.
Adım 2: 1 ile 30 arasında 6'nın katları: 6, 12, 18, 24, 30. İstenen durum sayısı 5'tir.
Adım 3: Olasılık [[5|30]] = [[1|6]] olur.
Sık yapılan hata: Yalnızca bir koşula bakmak. Her iki koşul birlikte aranıyorsa ortak katlar sayılır.
Cevap A.`
},
{
  id: "mat-ol-044",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 2,
  soru: `Bir takı atölyesinde 1'den 14'e kadar numaralandırılmış 14 özdeş boncuk bir kavanozda karıştırılmıştır. Atölye öğretmeni kavanozdan rastgele bir boncuk alacaktır.
**Alınan boncuğun numarasının tam kare sayı olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[1|7]]", "[[3|14]]", "[[3|11]]", "[[11|14]]"],
  dogru: 1,
  hatalar: [
    "1'i tam kare saymadın; yalnızca 4 ve 9'u aldın.",
    null,
    "Paydaya tam kare olmayan boncukların sayısını (11) yazdın.",
    "Tam kare olmayanların olasılığını yazdın."
  ],
  aciklama: `Tam kare sayı, bir doğal sayının karesi olan sayıdır: 1, 4, 9, 16, …
Adım 1: Olası durum sayısı 14'tür.
Adım 2: 1 ile 14 arasındaki tam kareler: 1 (1²), 4 (2²), 9 (3²). İstenen durum sayısı 3'tür.
Adım 3: Olasılık [[3|14]] olur.
Sık yapılan hata: 1'i unutmak. 1 = 1² olduğundan tam karedir.
Cevap B.`
},
{
  id: "mat-ol-045",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 2,
  soru: `Bir sınıftaki 30 öğrencinin 18'i kızdır. Öğretmen sınıf başkanını belirlemek için öğrencilerin adlarını özdeş kâğıtlara yazıp bir torbaya atacaktır. Torba hazırlanırken sınıfa 5 kız öğrenci daha katılır ve onların adları da torbaya atılır.
**Buna göre torbadan çekilen bir kâğıtta kız öğrencinin adının olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[18|35]]", "[[3|5]]", "[[23|35]]", "[[23|30]]"],
  dogru: 2,
  hatalar: [
    "Paydayı güncelledin ama payı güncellemedin; 5 yeni kız öğrenci paya da eklenmeli.",
    "Yeni gelen öğrencileri hesaba katmadın.",
    null,
    "Payı güncelledin ama paydayı güncellemedin; toplam 35 olmalı."
  ],
  aciklama: `Torbaya yeni kâğıt girince hem kız sayısı hem toplam sayı değişir.
Adım 1: Yeni kız sayısı 18 + 5 = 23'tür.
Adım 2: Yeni toplam kâğıt sayısı 30 + 5 = 35'tir.
Adım 3: Olasılık [[23|35]] olur.
Sık yapılan hata: Eklenen kâğıtları yalnızca paya ya da yalnızca paydaya yazmak. Eklenen kızlar iki yerde de görünür.
Cevap C.`
},
{
  id: "mat-ol-046",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 2,
  soru: `Bir okulun 8. sınıf şubelerindeki öğrenci sayıları aşağıdaki tabloda verilmiştir. Okul müdürü, 8. sınıf öğrencilerinin adlarının yazılı olduğu listeden rastgele bir ad seçip o öğrenciyi törende bayrak taşımakla görevlendirecektir.
**Seçilen öğrencinin 8-B şubesinde olma olasılığı kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Şube</th><th>8-A</th><th>8-B</th><th>8-C</th></tr><tr><td>Öğrenci sayısı</td><td>26</td><td>28</td><td>26</td></tr></table>`,
  secenekler: ["[[13|20]]", "[[7|13]]", "[[7|20]]", "[[1|3]]"],
  dogru: 2,
  hatalar: [
    "8-B'de olmama olasılığını yazdın.",
    "8-B'dekileri, diğer iki şubedeki öğrencilere (52) böldün: [[28|52]].",
    null,
    "Üç şube var diye şubeleri eş şanslı saydın. Şubelerin öğrenci sayıları eşit değildir."
  ],
  aciklama: `Adım 1: Tüm öğrenciler: 26 + 28 + 26 = 80. Olası durum sayısı 80'dir.
Adım 2: 8-B'deki öğrenci sayısı 28'dir. İstenen durum sayısı 28'dir.
Adım 3: Olasılık [[28|80]] = [[7|20]] olur.
Sağlama: 8-B'de olmama olasılığı [[52|80]] = [[13|20]]; [[7|20]] + [[13|20]] = 1.
Cevap C.`
},
{
  id: "mat-ol-047",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 2,
  soru: `Aşağıdaki çark, üzerinde 1'den 8'e kadar sayılar yazılı 8 eş dilime ayrılmıştır. Çark bir kez çevrilecek ve ok bir dilimde duracaktır.
**Okun gösterdiği sayının 3'ten büyük bir çift sayı olma olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 280 240" role="img" aria-label="Sekiz eş dilimli çark: dilimlerde 1, 2, 3, 4, 5, 6, 7 ve 8 sayıları yazılı."><polygon points="130,2 150,2 140,28" fill="currentColor"/><g stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M140 130 L140 30 A100 100 0 0 1 210.7 59.3 Z" fill="none"/><path d="M140 130 L210.7 59.3 A100 100 0 0 1 240 130 Z" fill="none"/><path d="M140 130 L240 130 A100 100 0 0 1 210.7 200.7 Z" fill="none"/><path d="M140 130 L210.7 200.7 A100 100 0 0 1 140 230 Z" fill="none"/><path d="M140 130 L140 230 A100 100 0 0 1 69.3 200.7 Z" fill="none"/><path d="M140 130 L69.3 200.7 A100 100 0 0 1 40 130 Z" fill="none"/><path d="M140 130 L40 130 A100 100 0 0 1 69.3 59.3 Z" fill="none"/><path d="M140 130 L69.3 59.3 A100 100 0 0 1 140 30 Z" fill="none"/></g><g font-size="16" text-anchor="middle" fill="currentColor" font-weight="700"><text x="166" y="72.2">1</text><text x="202.8" y="109">2</text><text x="202.8" y="161">3</text><text x="166" y="197.8">4</text><text x="114" y="197.8">5</text><text x="77.2" y="161">6</text><text x="77.2" y="109">7</text><text x="114" y="72.2">8</text></g></svg>`,
  secenekler: ["[[1|4]]", "[[3|8]]", "[[1|2]]", "[[5|8]]"],
  dogru: 1,
  hatalar: [
    "8'i saymadın; yalnızca 4 ve 6'yı aldın.",
    null,
    "\"3'ten büyük\" koşulunu unuttun; bütün çift sayıları (2, 4, 6, 8) aldın.",
    "\"Çift\" koşulunu unuttun; 3'ten büyük bütün sayıları (4, 5, 6, 7, 8) aldın."
  ],
  aciklama: `Adım 1: Çarkta 8 eş dilim vardır; olası durum sayısı 8'dir.
Adım 2: Hem çift hem 3'ten büyük sayılar: 4, 6 ve 8. İstenen durum sayısı 3'tür.
Adım 3: Olasılık [[3|8]] olur.
Sık yapılan hata: İki koşuldan yalnızca birini uygulamak. 2 çifttir ama 3'ten büyük değildir; 5 ve 7 3'ten büyüktür ama çift değildir.
Cevap B.`
},
{
  id: "mat-ol-048",
  kazanim: "M.8.5.1.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir pansiyonda her katta 9 oda olmak üzere 4 kat vardır ve her odanın anahtarı ayrı bir anahtarlıkta panoda asılıdır. Bugün 11 odanın anahtarı müşterilere verilmiştir. Resepsiyon görevlisi, panoda kalan anahtarlardan birini rastgele alıp bakım ekibine verecektir.
**Bu olaya ait olası durumların sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["47", "36", "25", "11"],
  dogru: 2,
  hatalar: [
    "Verilen anahtarları çıkarmak yerine ekledin.",
    "Verilen anahtarları çıkarmadın; bütün odaları saydın.",
    null,
    "Müşterilere verilen anahtarların sayısını yazdın."
  ],
  aciklama: `Olası durumlar, seçimin yapılabileceği anahtarlardır.
Adım 1: Pansiyondaki oda sayısı 4 · 9 = 36'dır; toplam 36 anahtar vardır.
Adım 2: 11 anahtar verildiği için panoda 36 − 11 = 25 anahtar kalmıştır.
Adım 3: Seçim panoda kalanlardan yapılacağından olası durum sayısı 25'tir.
Sık yapılan hata: Seçimin yapıldığı kümeyi unutmak. Verilen anahtarlar artık seçilemez.
Cevap C.`
},
{
  id: "mat-ol-049",
  kazanim: "M.8.5.1.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bir şekerlemecinin üç kavanozundaki sarı ve mor şekerlerin sayıları aşağıdaki tabloda verilmiştir. Her kavanoz için bakmadan bir şeker alınması durumu ayrı ayrı incelenecektir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Kavanoz</th><th>Sarı şeker</th><th>Mor şeker</th></tr><tr><td>1. kavanoz</td><td>5</td><td>7</td></tr><tr><td>2. kavanoz</td><td>6</td><td>9</td></tr><tr><td>3. kavanoz</td><td>8</td><td>12</td></tr></table>`,
  secenekler: ["1. kavanozdan sarı şeker alma olasılığı, 2. kavanozdakinden fazladır.", "2. kavanozdan sarı şeker alma olasılığı, 1. kavanozdakine eşittir.", "3. kavanozdan sarı şeker alma olasılığı, 2. kavanozdakinden azdır.", "3. kavanozdan sarı şeker alma olasılığı, 1. kavanozdakinden fazladır."],
  dogru: 0,
  hatalar: [
    null,
    "[[5|12]] ile [[6|15]] aynı değerde değildir; [[5|12]] daha büyüktür.",
    "[[8|20]] ile [[6|15]] sadeleşince [[2|5]] olur; ikisi eşittir.",
    "Sarı şeker sayısına baktın. Kavanozlardaki toplam şeker sayıları da farklıdır, olasılık oranla bulunur."
  ],
  aciklama: `Kavanozların toplam şeker sayıları farklı olduğundan yalnızca sarı sayısına bakmak yetmez; her kavanozdaki sarı şekerin oranı karşılaştırılmalıdır.
Adım 1: 1. kavanoz: [[5|12]] ≈ 0,417. 2. kavanoz: [[6|15]] = [[2|5]] = 0,4. 3. kavanoz: [[8|20]] = [[2|5]] = 0,4.
Adım 2: 0,417 > 0,4 olduğundan 1. kavanozun sarı olasılığı 2. ve 3. kavanozunkinden fazladır; 2. ve 3. kavanozlar eşittir.
Sağlama: [[5|12]] ile [[2|5]]'i [[25|60]] ve [[24|60]] diye yazarsan birincinin büyük olduğunu görürsün.
Sık yapılan hata: Sarı sayısı en çok olan kavanozu (3.) seçmek.
Cevap A.`
},
{
  id: "mat-ol-050",
  kazanim: "M.8.5.1.3",
  kademe: 0,
  zorluk: 3,
  soru: `Dört arkadaş, oynadıkları oyunlardaki sonuçların eş şanslı olup olmadığını tartışmaktadır.
**Buna göre hangi arkadaşın yorumu doğrudur?**`,
  gorsel: null,
  secenekler: ["Ece: Üzerinde 1'den 10'a kadar sayılar yazılı özdeş 10 kâğıttan biri çekildiğinde çıkan sayılar eş şanslıdır.", "Mina: İçinde 1 mavi, 9 sarı özdeş top olan torbadan bir top çekildiğinde çıkan renkler eş şanslıdır.", "Nil: Dilimleri eş olmayan bir çark çevrildiğinde okun gösterdiği renkler eş şanslıdır.", "Zeynep: Yüzlerine 1, 1, 1, 1, 2, 3 yazılmış hilesiz bir zar atıldığında üst yüze gelen sayılar eş şanslıdır."],
  dogru: 0,
  hatalar: [
    null,
    "Renk sayısı 2 diye iki rengi eş saydın. Sarı 9 topla çok daha olasıdır.",
    "Dilimler eş değilse geniş dilimin şansı daha fazladır.",
    "1 dört yüzde yazılıdır, 2 ve 3 birer yüzde; sayılar eş şanslı değildir."
  ],
  aciklama: `Eş şanslı olaylarda her sonuç aynı sayıda eş nesneden gelir. Sonucu üreten nesneler eşitse sonuçlar eş şanslıdır.
Adım 1: 10 özdeş kâğıtta her sayı bir kâğıttadır; her sonucun olasılığı [[1|10]]'dur. Ece doğru söylemiştir.
Adım 2: Torbada sarı top 9, mavi top 1'dir; olasılıklar [[9|10]] ve [[1|10]]. Mina yanılmıştır.
Adım 3: Eş olmayan dilimlerde geniş dilimin şansı fazladır. Zarda ise 1 sayısı dört yüzde bulunduğundan [[4|6]] şansa sahiptir. Nil ve Zeynep yanılmıştır.
Sık yapılan hata: Sonuç sayısına bakıp "N sonuç var, hepsi [[1|N]]" demek. Önce sonuçların eş nesneden gelip gelmediğine bak.
Cevap A.`
},
{
  id: "mat-ol-051",
  kazanim: "M.8.5.1.3",
  kademe: 0,
  zorluk: 3,
  soru: `Bir okul şenliğindeki şans çarkı eş dilimlidir ve dilimlerinden 2'si kırmızı, geri kalanı beyazdır. Çark bir kez çevrildiğinde okun kırmızı bir dilimde durma olasılığı [[1|6]]'dır. Şenliğin ikinci gününde çarka, diğerleriyle aynı genişlikte 4 beyaz dilim daha eklenmiş ve çark yine bir kez çevrilecektir.
**Buna göre ikinci günde okun kırmızı bir dilimde durma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[1|5]]", "[[1|6]]", "[[1|7]]", "[[1|8]]"],
  dogru: 3,
  hatalar: [
    "İlk gündeki dilim sayısını 6 sandın (paydayı doğrudan dilim sayısı aldın): 6 + 4 = 10 dilimde [[2|10]] = [[1|5]] bulunur.",
    "Eklenen beyaz dilimleri hesaba katmadın; ilk günün olasılığını yazdın.",
    "Dilim sayısına 4 yerine kırmızı dilim sayısını (2) ekledin: 12 + 2 = 14 dilim, [[2|14]] = [[1|7]].",
    null
  ],
  aciklama: `Eş dilimli çarkta olasılık = [[kırmızı dilim sayısı|toplam dilim sayısı]]'dır.
Adım 1: İlk gündeki toplam dilim sayısına n dersek [[2|n]] = [[1|6]] olur. [[1|6]] = [[2|12]] olduğundan n = 12'dir.
Adım 2: 4 beyaz dilim eklenince toplam dilim sayısı 12 + 4 = 16 olur; kırmızı dilim sayısı 2 olarak kalır.
Adım 3: İkinci gündeki olasılık [[2|16]] = [[1|8]] olur.
Sağlama: Dilim sayısı arttığı, kırmızı dilim sayısı aynı kaldığı için olasılık [[1|6]]'dan küçülmüştür; [[1|8]] < [[1|6]].
Sık yapılan hata: Eklenen dilimleri yok sayıp ilk günün olasılığını yazmak ya da [[1|6]]'nın paydasını doğrudan dilim sayısı sanmak. Pay 2 olduğundan kesri payı 2 olacak şekilde genişlet.
Cevap D.`
},
{
  id: "mat-ol-052",
  kazanim: "M.8.5.1.4",
  kademe: 0,
  zorluk: 3,
  soru: `Bir yarışmada 1'den 30'a kadar (1 ve 30 dâhil) numaralandırılmış 30 özdeş bilet bir kutuya atılmıştır. Kutudan bakmadan bir bilet çekilecektir.
**Aşağıdaki olaylardan hangisinin olma olasılığı 1'dir?**`,
  gorsel: null,
  secenekler: ["Çekilen biletin numarasının 31'den küçük olması", "Çekilen biletin numarasının 30'dan küçük olması", "Çekilen biletin numarasının 1'den büyük olması", "Çekilen biletin numarasının çift sayı olması"],
  dogru: 0,
  hatalar: [
    null,
    "30 numaralı bilet de çekilebilir ve o zaman olay gerçekleşmez. Olasılığı [[29|30]]'dur.",
    "1 numaralı bilet çekilirse olay gerçekleşmez. Olasılığı [[29|30]]'dur.",
    "Tek numaralı biletler de vardır. Olasılığı [[1|2]]'dir."
  ],
  aciklama: `Olasılığı 1 olan olay kesin olaydır: Bütün olası durumlar olayın içindedir.
Adım 1: Numaralar 1, 2, …, 30'dur. En büyük numara 30'dur.
Adım 2: Her numara 31'den küçüktür; olay her bilette gerçekleşir. Olasılığı [[30|30]] = 1'dir.
Adım 3: Diğer olaylarda en az bir bilet olayın dışında kalır (30, 1 ya da tek numaralılar).
Sık yapılan hata: Sınırı yanlış almak. "30'dan küçük" 30'u içermez, "31'den küçük" 30'u içerir.
Cevap A.`
},
{
  id: "mat-ol-053",
  kazanim: "M.8.5.1.4",
  kademe: 0,
  zorluk: 3,
  soru: `Bir nakliye firması, depodaki 80 paketten rastgele seçilen bir paketin zarar görmüş olma olasılığını %5 olarak belirlemiştir. Firma, zarar görmeyen paketlerin tamamını ertesi gün teslim edecektir.
**Buna göre ertesi gün kaç paket teslim edilecektir?**`,
  gorsel: null,
  secenekler: ["4", "5", "75", "76"],
  dogru: 3,
  hatalar: [
    "Zarar gören paketlerin sayısını buldun; teslim edilenler zarar görmeyenlerdir.",
    "%5'teki 5'i paket sayısı sandın.",
    "%5'i 5 paket sanıp 80'den çıkardın.",
    null
  ],
  aciklama: `Bir olayın olma olasılığı ile olmama olasılığının toplamı 1'dir (%100).
Adım 1: Zarar gören paket sayısı 80 · %5 = 80 · [[5|100]] = 4'tür.
Adım 2: Zarar görmeyen paket sayısı 80 − 4 = 76'dır.
Sağlama: Zarar görmeme olasılığı %95'tir ve 80 · [[95|100]] = 76.
Cevap D.`
},
{
  id: "mat-ol-054",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 3,
  soru: `Aşağıdaki çarkın dilimlerinin merkez açıları şekil üzerinde yazılıdır. K kırmızı, M mavi, Y yeşil, S sarı, T turuncu, P mor renkli dilimi göstermektedir. Çark bir kez çevrilecek ve ok bir dilimde duracaktır.
**Buna göre okun hangi renkli dilimde durma olasılığı, mor dilimde durma olasılığının tam 3 katıdır?**`,
  gorsel: `<svg viewBox="0 0 280 240" role="img" aria-label="Altı dilimli çark: kırmızı 90 derece, mavi 80 derece, yeşil 60 derece, sarı 60 derece, turuncu 40 derece, mor 30 derece."><polygon points="130,2 150,2 140,28" fill="currentColor"/><g stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M140 130 L140 30 A100 100 0 0 1 240 130 Z" fill="currentColor" fill-opacity="0.2"/><path d="M140 130 L240 130 A100 100 0 0 1 157.4 228.5 Z" fill="var(--vurgu2)"/><path d="M140 130 L157.4 228.5 A100 100 0 0 1 63.4 194.3 Z" fill="var(--vurgu)"/><path d="M140 130 L63.4 194.3 A100 100 0 0 1 46 95.8 Z" fill="var(--dolgu)"/><path d="M140 130 L46 95.8 A100 100 0 0 1 90 43.4 Z" fill="none"/><path d="M140 130 L90 43.4 A100 100 0 0 1 140 30 Z" fill="currentColor" fill-opacity="0.2"/></g><g font-size="16" text-anchor="middle" fill="currentColor" font-weight="700"><text x="190.9" y="75.1">K</text><text x="190.9" y="92.1" font-size="14" font-weight="400">90°</text><text x="195.2" y="172.3">M</text><text x="195.2" y="189.3" font-size="14" font-weight="400">80°</text><text x="115.4" y="193.7">Y</text><text x="115.4" y="210.7" font-size="14" font-weight="400">60°</text><text x="69.1" y="138.5">S</text><text x="69.1" y="155.5" font-size="14" font-weight="400">60°</text><text x="84.8" y="79.7">T</text><text x="84.8" y="96.7" font-size="14" font-weight="400">40°</text><text x="121.4" y="56.5">P</text><text x="121.4" y="73.5" font-size="14" font-weight="400">30°</text></g></svg>`,
  secenekler: ["Mavi", "Yeşil", "Kırmızı", "Turuncu"],
  dogru: 2,
  hatalar: [
    "Mavinin açısı 80°'dir; morun 3 katı 90°'dir.",
    "Yeşilin açısı 60°, morun yalnızca 2 katıdır.",
    null,
    "Turuncunun açısı 40°'dir; morun 3 katından çok küçüktür."
  ],
  aciklama: `Dilimler eş değilse bir dilimin olasılığı, merkez açısının 360°'ye oranıdır. Olasılık açıyla orantılı olduğundan olasılığın 3 katı, açının 3 katıdır.
Adım 1: Mor dilimin açısı 30°'dir; olasılığı [[30|360]] = [[1|12]].
Adım 2: Olasılığı 3 kat olan dilimin açısı 3 · 30° = 90° olmalıdır.
Adım 3: Açısı 90° olan dilim kırmızıdır; olasılığı [[90|360]] = [[1|4]] = 3 · [[1|12]].
Sağlama: Yeşil ve sarı 60° ile morun 2 katıdır, turuncu 40°, mavi 80° olup 3 kat değildir.
Cevap C.`
},
{
  id: "mat-ol-055",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 3,
  soru: `Bir bilgi yarışmasında 1'den 60'a kadar (1 ve 60 dâhil) numaralı 60 özdeş kart bir kutuya konulmuştur. Yarışmacı kutudan rastgele bir kart çekecektir.
**Çekilen kartın numarasının 9'a bölündüğünde kalanın 4 olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[1|10]]", "[[1|9]]", "[[7|60]]", "[[4|9]]"],
  dogru: 2,
  hatalar: [
    "9'a tam bölünen kartları saydın (9, 18, …, 54: 6 tane); kalan 4 olanları değil.",
    "Bölen 9 olduğu için olasılığı [[1|9]] sandın. Olasılık kartları saymakla bulunur.",
    null,
    "Bölmenin kalanını ve bölenini olasılık yaptın."
  ],
  aciklama: `9'a bölündüğünde kalanı 4 olan sayılar 9'un katlarının 4 fazlasıdır: 9k + 4.
Adım 1: Olası durum sayısı 60'tır.
Adım 2: Bu sayıları yaz: 4, 13, 22, 31, 40, 49, 58. Bir sonraki 67 olur ve 60'ı aşar. İstenen durum sayısı 7'dir.
Adım 3: Olasılık [[7|60]] olur.
Sağlama: 58 = 9 · 6 + 4 ve 49 = 9 · 5 + 4.
Cevap C.`
},
{
  id: "mat-ol-056",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 3,
  soru: `Bir spor kulübünün üyeleri branşlarına ve yaş gruplarına göre aşağıdaki tabloda gösterilmiştir. Her üye yalnızca bir branşta ve yalnızca bir yaş grubundadır. Kulüp başkanı, üyelerden birini rastgele seçip kupa töreninde konuşma yapmasını isteyecektir.
**Seçilen üyenin basketbol branşında olma olasılığı kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Branş</th><th>10–12 yaş</th><th>13–15 yaş</th></tr><tr><td>Yüzme</td><td>9</td><td>6</td></tr><tr><td>Tenis</td><td>5</td><td>7</td></tr><tr><td>Basketbol</td><td>8</td><td>10</td></tr></table>`,
  secenekler: ["[[8|45]]", "[[2|9]]", "[[1|3]]", "[[2|5]]"],
  dogru: 3,
  hatalar: [
    "Yalnızca 10–12 yaş sütunundaki basketbolcuları saydın.",
    "Yalnızca 13–15 yaş sütunundaki basketbolcuları saydın: [[10|45]].",
    "Üç branş var diye branşları eş şanslı saydın.",
    null
  ],
  aciklama: `Tabloda hem satırları hem sütunları kullanarak istenen durumu bul.
Adım 1: Tüm üyeler: 9 + 6 + 5 + 7 + 8 + 10 = 45. Olası durum sayısı 45'tir.
Adım 2: Basketbolcular: 8 + 10 = 18. İstenen durum sayısı 18'dir.
Adım 3: Olasılık [[18|45]] = [[2|5]] olur.
Sık yapılan hata: Branşın yalnızca bir yaş sütununu almak. Basketbol satırının tamamı sayılır.
Cevap D.`
},
{
  id: "mat-ol-057",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 3,
  soru: `Bir torbada 4 kırmızı, 6 mavi ve 5 yeşil top vardır. Torbadan 3 mavi top çıkarılıp yerine 3 yeşil top konulduktan sonra torbadan bakmadan bir top çekilecektir.
**Çekilen topun yeşil olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[2|3]]", "[[8|15]]", "[[4|9]]", "[[1|3]]"],
  dogru: 1,
  hatalar: [
    "Çıkarılan mavi topları paydadan düştün ama konulan topları paydaya katmadın: [[8|12]].",
    null,
    "Çıkarılan ve konulan topları ikisini de paydaya ekledin: [[8|18]].",
    "Değişikliği hesaba katmadın; başlangıçtaki [[5|15]] olasılığını yazdın."
  ],
  aciklama: `Bir değişiklikten sonra olasılığı yeni sayılarla hesapla.
Adım 1: Başlangıçta toplam 4 + 6 + 5 = 15 top vardır.
Adım 2: 3 mavi çıkıp 3 yeşil girdiğinde toplam sayı değişmez (15); mavi 3, yeşil 5 + 3 = 8 olur.
Adım 3: Olasılık [[8|15]] olur.
Sağlama: Kırmızı 4, mavi 3, yeşil 8 topun toplamı 15'tir.
Cevap B.`
},
{
  id: "mat-ol-058",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 3,
  soru: `Bir elektronik mağazasında A markasının 50 piliyle dolu bir kutudan 4'ü, B markasının 40 piliyle dolu bir kutudan 3'ü bozuktur. Her kutu için rastgele bir pil seçilmesi durumu ayrı ayrı incelenecektir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["Bozuk pil seçme olasılığı B kutusunda daha fazladır.", "Bozuk pil seçme olasılığı iki kutuda eşittir.", "Bozuk olmayan pil seçme olasılığı A kutusunda daha fazladır.", "Bozuk pil seçme olasılığı A kutusunda daha fazladır."],
  dogru: 3,
  hatalar: [
    "Bozuk sayısına (3 < 4) bakıp yorumladın ama kutuların pil sayılarını hesaba katmadın; oranlar [[4|50]] ve [[3|40]]'tır.",
    "[[4|50]] ile [[3|40]] aynı değildir; paydaları eşitlersen [[16|200]] ve [[15|200]] bulursun.",
    "Bozuk olasılığı A'da büyükse bozuk olmayan olasılığı A'da daha küçüktür.",
    null
  ],
  aciklama: `Kutuların pil sayıları farklıdır, bu yüzden bozuk pillerin sayısını değil oranını karşılaştır.
Adım 1: A kutusunda bozuk pil olasılığı [[4|50]] = [[16|200]] = 0,08.
Adım 2: B kutusunda [[3|40]] = [[15|200]] = 0,075.
Adım 3: 0,08 > 0,075 olduğundan bozuk pil seçme olasılığı A'da daha fazladır. Bozuk olmayan pil olasılığı ise A'da daha azdır.
Sağlama: Olma ve olmama olasılıkları toplamı 1'dir; biri artarken diğeri azalır.
Cevap D.`
},
{
  id: "mat-ol-059",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 3,
  soru: `Bir okulun öğrenci meclisi, yılın 12 ayının adını özdeş kartlara yazıp bir torbaya atmıştır. Torbadan çekilen kartta yazan ayda bir etkinlik düzenlenecektir.
**Çekilen ayın adında "r" harfinin bulunma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[3|4]]", "[[1|3]]", "[[1|4]]", "[[1|6]]"],
  dogru: 2,
  hatalar: [
    "İçinde r bulunmayan ayların olasılığını yazdın.",
    "Ekim'i de saydın; Ekim'de r harfi yoktur.",
    null,
    "Aralık'ı unuttun; yalnızca Mart ve Haziran'ı aldın."
  ],
  aciklama: `Adım 1: Olası durum sayısı 12'dir (12 ay).
Adım 2: Adında "r" harfi bulunan aylar: Mart, Haziran ve Aralık. İstenen durum sayısı 3'tür.
Adım 3: Olasılık [[3|12]] = [[1|4]] olur.
Sağlama: Diğer 9 ayın adında (Ocak, Şubat, Nisan, Mayıs, Temmuz, Ağustos, Eylül, Ekim, Kasım) r yoktur; [[9|12]] = [[3|4]] ve [[1|4]] + [[3|4]] = 1.
Cevap C.`
},
{
  id: "mat-ol-060",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 3,
  soru: `Bir sınıftaki 25 öğrenciye en sevdikleri sebze sorulmuş ve yanıtlar aşağıdaki sütun grafiğinde gösterilmiştir. Her öğrenci yalnızca bir sebze söylemiştir. Öğretmen öğrencilerden birini rastgele seçecektir.
**Seçilen öğrencinin en sevdiği sebzenin salatalık __olmama__ olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 370 220" role="img" aria-label="Sütun grafiği: domates 7, biber 5, salatalık 9, patlıcan 4 öğrenci."><line x1="44" y1="190" x2="354" y2="190" stroke="currentColor" stroke-opacity="0.25"/><line x1="44" y1="160" x2="354" y2="160" stroke="currentColor" stroke-opacity="0.25"/><line x1="44" y1="130" x2="354" y2="130" stroke="currentColor" stroke-opacity="0.25"/><line x1="44" y1="100" x2="354" y2="100" stroke="currentColor" stroke-opacity="0.25"/><line x1="44" y1="70" x2="354" y2="70" stroke="currentColor" stroke-opacity="0.25"/><line x1="44" y1="40" x2="354" y2="40" stroke="currentColor" stroke-opacity="0.25"/><line x1="44" y1="190" x2="354" y2="190" stroke="currentColor" stroke-width="2"/><line x1="44" y1="40" x2="44" y2="190" stroke="currentColor" stroke-width="2"/><g font-size="14" fill="currentColor"><text x="38" y="195" text-anchor="end">0</text><text x="38" y="165" text-anchor="end">2</text><text x="38" y="135" text-anchor="end">4</text><text x="38" y="105" text-anchor="end">6</text><text x="38" y="75" text-anchor="end">8</text><text x="38" y="45" text-anchor="end">10</text><rect x="62.8" y="85" width="40" height="105" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><text x="82.8" y="79" text-anchor="middle">7</text><text x="82.8" y="210" text-anchor="middle">Domates</text><rect x="140.3" y="115" width="40" height="75" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><text x="160.3" y="109" text-anchor="middle">5</text><text x="160.3" y="210" text-anchor="middle">Biber</text><rect x="217.8" y="55" width="40" height="135" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><text x="237.8" y="49" text-anchor="middle">9</text><text x="237.8" y="210" text-anchor="middle">Salatalık</text><rect x="295.3" y="130" width="40" height="60" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><text x="315.3" y="124" text-anchor="middle">4</text><text x="315.3" y="210" text-anchor="middle">Patlıcan</text></g></svg>`,
  secenekler: ["[[16|25]]", "[[9|16]]", "[[9|25]]", "[[1|4]]"],
  dogru: 0,
  hatalar: [
    null,
    "Salatalığı sevenleri, diğer öğrencilere (16) böldün.",
    "Salatalık olma olasılığını yazdın; olmama istenmişti.",
    "Dört sebze var diye olasılığı [[1|4]] aldın. Sebzeleri seven öğrenci sayıları eşit değildir."
  ],
  aciklama: `Adım 1: Sütunları oku ve topla: 7 + 5 + 9 + 4 = 25. Olası durum sayısı 25'tir.
Adım 2: Salatalığı sevmeyenler 7 + 5 + 4 = 16 öğrencidir.
Adım 3: Olasılık [[16|25]] olur.
Sağlama: Salatalık olasılığı [[9|25]]; [[9|25]] + [[16|25]] = 1.
Cevap A.`
},
{
  id: "mat-ol-061",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 3,
  soru: `Bir kafede dün satılan 80 içecek aşağıdaki tabloda gösterilmiştir. Kafe sahibi, dünkü satış fişlerinden birini rastgele seçip fiş sahibini ödüllendirecektir. Her fiş yalnızca bir içeceğe aittir.
**Seçilen fişteki içeceğin, dün 15'ten fazla satılan içecek türlerinden biri olma olasılığı kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>İçecek</th><th>Çay</th><th>Kahve</th><th>Limonata</th><th>Su</th></tr><tr><td>Satılan sayı</td><td>24</td><td>16</td><td>28</td><td>12</td></tr></table>`,
  secenekler: ["[[3|20]]", "[[7|20]]", "[[3|4]]", "[[17|20]]"],
  dogru: 3,
  hatalar: [
    "Koşulu sağlamayan içeceği (su) aldın.",
    "Yalnızca en çok satılan türü (limonata) aldın.",
    "Türlere baktın: 4 türün 3'ü. Fişler türlere değil satış adedine göre sayılır.",
    null
  ],
  aciklama: `Olasılık hesabında fişler (satışlar) sayılır, türler değil.
Adım 1: Olası durum sayısı 80'dir (24 + 16 + 28 + 12).
Adım 2: 15'ten fazla satılan türler çay (24), kahve (16) ve limonata (28)'dır. Bunların fiş sayısı 24 + 16 + 28 = 68'dir.
Adım 3: Olasılık [[68|80]] = [[17|20]] olur.
Sağlama: Su 12 fişle koşulu sağlamaz; [[12|80]] = [[3|20]] ve [[3|20]] + [[17|20]] = 1.
Cevap D.`
},
{
  id: "mat-ol-062",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 3,
  soru: `Bir kutuda 4 kırmızı ve 8 mavi kalem vardır. Kutuya kırmızı kalem eklenecek ve ardından kutudan rastgele bir kalem çekilecektir.
**Çekilen kalemin kırmızı olma olasılığının [[2|3]] olması için kutuya kaç kırmızı kalem eklenmelidir?**`,
  gorsel: null,
  secenekler: ["2", "4", "8", "12"],
  dogru: 3,
  hatalar: [
    "[[2|3]] kesrindeki payı eklenecek kalem sayısı sandın.",
    "Kırmızı kalem sayısı kadar ekledin: 8 kırmızı, 16 kalem; olasılık [[1|2]] olur.",
    "Mavi kalem sayısı kadar ekledin: 12 kırmızı, 20 kalem; olasılık [[3|5]] olur.",
    null
  ],
  aciklama: `Eklenen kalem hem kırmızı sayısını hem toplamı artırır.
Adım 1: x kırmızı kalem eklensin. Kırmızı sayısı 4 + x, toplam 12 + x olur.
Adım 2: [[4 + x|12 + x]] = [[2|3]] eşitliğinde içler dışlar çarpımı: 3 · (4 + x) = 2 · (12 + x), yani 12 + 3x = 24 + 2x ve x = 12.
Sağlama: 12 kırmızı eklenince 16 kırmızı, toplam 24 kalem olur; [[16|24]] = [[2|3]].
Cevap D.`
},
{
  id: "mat-ol-063",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 3,
  soru: `Bir dernek, bağış yapanlara her 10 TL için 1 çekiliş bileti vermiştir. Beş kişinin yaptığı bağışlar aşağıdaki tabloda verilmiştir. Tüm biletler özdeş olup bir torbaya atılmış ve torbadan bir bilet çekilecektir.
**Buna göre çekilen biletin Cemre'ye ait olma olasılığı kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Kişi</th><th>Aylin</th><th>Bülent</th><th>Cemre</th><th>Doruk</th><th>Emre</th></tr><tr><td>Bağış (TL)</td><td>50</td><td>30</td><td>70</td><td>20</td><td>30</td></tr></table>`,
  secenekler: ["[[1|5]]", "[[7|20]]", "[[7|13]]", "[[7|10]]"],
  dogru: 1,
  hatalar: [
    "Beş kişi var diye herkesi eş şanslı saydın. Biletleri eşit değildir.",
    null,
    "Cemre'nin biletlerini, diğer kişilerin biletlerine (13) böldün.",
    "Cemre'nin bilet sayısını 10'a böldün; \"10 TL\" kuralını paydaya taşıdın."
  ],
  aciklama: `Her 10 TL için 1 bilet verildiğinden bilet sayıları bağış miktarının onda biridir.
Adım 1: Bilet sayıları: Aylin 5, Bülent 3, Cemre 7, Doruk 2, Emre 3. Toplam 5 + 3 + 7 + 2 + 3 = 20 bilet vardır.
Adım 2: Cemre'nin 7 bileti vardır; istenen durum sayısı 7'dir.
Adım 3: Olasılık [[7|20]] olur.
Sağlama: Bütün bağışlar 50 + 30 + 70 + 20 + 30 = 200 TL'dir ve 200 ÷ 10 = 20 bilet eder.
Cevap B.`
},
{
  id: "mat-ol-064",
  kazanim: "M.8.5.1.1",
  kademe: 0,
  zorluk: 4,
  soru: "Bir bilgi yarışmasında 1'den 40'a kadar (1 ve 40 dâhil) numaralandırılmış 40 özdeş zarf vardır. Sunucu önce numarası 4'ün katı olan zarfları masadan kaldırmıştır. Kalan zarflar arasından numarası tek sayı olan bir zarfı rastgele seçerek yarışmacıya soru soracaktır.\n**Bu olaya ait olası durumların sayısı kaçtır?**",
  gorsel: null,
  secenekler: ["15","20","30","40"],
  dogru: 1,
  hatalar: ["Kalan zarfları ikiye bölme: kaldırılan 4'ün katlarının hepsi çift sayıdır; tek numaralı zarfların hiçbiri kaldırılmamıştır, bu yüzden kalanların yarısı tek değildir.",null,"Koşulu uygulamama: kalan 30 zarfın hepsini saydın; seçim yalnızca tek numaralı zarflar arasından yapılıyor.","Hiçbir koşulu uygulamama: masadan kaldırılan zarfları da, tek numara koşulunu da hesaba katmadan bütün zarfları saydın."],
  aciklama: "Olası durumlar, seçimin yapılabileceği bütün çıktılardır; burada seçim yalnızca masada kalan tek numaralı zarflar arasından yapılır.\nAdım 1: 4'ün katları 4, 8, 12, …, 40'tır; 10 zarf kaldırılır, masada 30 zarf kalır.\nAdım 2: Kaldırılan zarfların hepsinin numarası çifttir. Bu yüzden tek numaralı zarfların hiçbiri kaldırılmamıştır.\nAdım 3: 1 ile 40 arasında 20 tek sayı vardır (1, 3, 5, …, 39). Olası durumların sayısı 20'dir.\nSağlama: Kalan 30 zarfın 20'si tek, 10'u 4'ün katı olmayan çift sayıdır (2, 6, 10, …, 38); 20 + 10 = 30.\nSık yapılan hata: Kalan zarf sayısını ikiye bölüp 15 demek. Kalanların içinde tek ve çift sayılar eşit sayıda değildir.\nCevap B."
},
{
  id: "mat-ol-065",
  kazanim: "M.8.5.1.2",
  kademe: 0,
  zorluk: 4,
  soru: `Dört okulun toplam öğrenci sayıları ve bu öğrencilerden kaçının 8. sınıfta olduğu aşağıdaki tabloda verilmiştir. Her okulda öğrenci listesinden rastgele bir öğrenci seçilecektir.
**Buna göre seçilen öğrencinin 8. sınıfta olma olasılığıyla ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Okul</th><th>I</th><th>II</th><th>III</th><th>IV</th></tr><tr><td>8. sınıf öğrencisi</td><td>30</td><td>36</td><td>45</td><td>33</td></tr><tr><td>Tüm öğrenciler</td><td>120</td><td>144</td><td>150</td><td>130</td></tr></table>`,
  secenekler: ["II. okulda bu olasılık, I. okuldakinden fazladır.", "IV. okulda bu olasılık, I. okuldakinden azdır.", "III. okulda bu olasılık, IV. okuldakinden azdır.", "IV. okulda bu olasılık, I. okuldakinden fazladır."],
  dogru: 3,
  hatalar: [
    "[[30|120]] ile [[36|144]] sadeleşince ikisi de [[1|4]] olur; eşittir.",
    "[[33|130]] ile [[1|4]]'ü karşılaştırdığında 33 · 4 = 132 > 130 olduğunu görürsün; IV daha fazladır.",
    "III. okulda [[45|150]] = 0,30; IV. okulda yaklaşık 0,254'tür. III daha fazladır.",
    null
  ],
  aciklama: `Her okulda toplam öğrenci sayısı farklıdır; bu yüzden 8. sınıf öğrenci sayısına değil oranına bak.
Adım 1: I. okul [[30|120]] = [[1|4]] = 0,25; II. okul [[36|144]] = [[1|4]] = 0,25.
Adım 2: III. okul [[45|150]] = 0,30; IV. okul [[33|130]] ≈ 0,254.
Adım 3: IV. okulun olasılığı I. okuldakinden biraz büyüktür: [[33|130]] > [[1|4]], çünkü 33 · 4 = 132 > 130.
Sağlama: I ve II eşit, III en büyük, IV ise I'den biraz büyüktür; yalnızca bu ifade doğrudur.
Sık yapılan hata: Sadeleştirmeden "130, 120'den büyük" diye bakmak.
Cevap D.`
},
{
  id: "mat-ol-066",
  kazanim: "M.8.5.1.3",
  kademe: 0,
  zorluk: 4,
  soru: `Bir torbada 3 mavi, 5 sarı ve 2 kırmızı top vardır; toplar özdeştir. Torbaya yalnızca top eklenecek (hiç top çıkarılmayacak) ve ardından torbadan bir top çekilecektir.
**Çekilen topun mavi, sarı ve kırmızı olma olasılıklarının üçünün de birbirine eşit olması için torbaya en az kaç top eklenmelidir?**`,
  gorsel: null,
  secenekler: ["3", "5", "10", "15"],
  dogru: 1,
  hatalar: [
    "Yalnızca kırmızı topları sarı topların sayısına tamamladın; mavi toplar da eşitlenmeli.",
    null,
    "Torbada zaten bulunan top sayısını yazdın.",
    "Eşitlendikten sonra torbadaki toplam top sayısını yazdın; eklenecek top sayısı sorulmuştu."
  ],
  aciklama: `Renklerin olasılıkları eşitse renklerin top sayıları da eşittir (toplam aynı olduğu için).
Adım 1: Top çıkarılamadığından renk sayıları en az en büyük sayıya (5 sarı) eşitlenebilir.
Adım 2: Maviye 5 − 3 = 2, kırmızıya 5 − 2 = 3 top eklenir.
Adım 3: Eklenecek top sayısı 2 + 3 = 5'tir.
Sağlama: Torbada 5 mavi, 5 sarı, 5 kırmızı olur. Her rengin olasılığı [[5|15]] = [[1|3]] olur.
Cevap B.`
},
{
  id: "mat-ol-067",
  kazanim: "M.8.5.1.3",
  kademe: 0,
  zorluk: 4,
  soru: `Eş dilimli bir çarkın dilim sayısı en az 8, en çok 20'dir (8 ve 20 dâhil). Çarkın bazı dilimleri kırmızı, diğerleri beyazdır ve çark bir kez çevrildiğinde okun kırmızı bir dilimde durma olasılığı [[1|4]]'tür.
**Buna göre bu çarkın dilim sayısı kaç farklı değer alabilir?**`,
  gorsel: null,
  secenekler: ["12", "5", "4", "3"],
  dogru: 2,
  hatalar: [
    "Aralığın genişliğini (20 − 8) söyledin.",
    "Dilim sayısı 4 olan çarkı da saydın; oysa dilim sayısı en az 8'dir.",
    null,
    "20 dilimli çarkı dışarıda bıraktın; 8, 12 ve 16'yı buldun."
  ],
  aciklama: `Eş dilimli çarkta olasılık [[kırmızı dilim sayısı|dilim sayısı]] olduğundan kırmızı dilimler, dilimlerin dörtte biridir. Bu durumda dilim sayısı 4'ün katıdır.
Adım 1: 8 ile 20 arasında (uçlar dâhil) 4'ün katları: 8, 12, 16, 20.
Adım 2: Her birinde kırmızı dilim sayısı tam sayıdır: 2, 3, 4, 5.
Adım 3: Dilim sayısı 4 farklı değer alabilir.
Sık yapılan hata: Alt sınırı (en az 8) unutup 4'ü de saymak.
Cevap C.`
},
{
  id: "mat-ol-068",
  kazanim: "M.8.5.1.4",
  kademe: 0,
  zorluk: 4,
  soru: `Bir mağaza çekiliş için 36 kupon hazırlamıştır. Kuponların her biri "teşekkür", "indirim" ya da "hediye çeki" kuponudur. Kuponlardan biri rastgele çekildiğinde indirim kuponu gelme olasılığı teşekkür kuponunun 2 katı, hediye çeki gelme olasılığı ise teşekkür kuponunun 3 katıdır.
**Buna göre kaç kupon indirim kuponudur?**`,
  gorsel: null,
  secenekler: ["18", "12", "6", "2"],
  dogru: 1,
  hatalar: [
    "Hediye çeki kuponlarının sayısını buldun.",
    null,
    "Teşekkür kuponlarının sayısını buldun.",
    "Katsayıyı (2) kupon sayısı sandın."
  ],
  aciklama: `Bütün olası durumların olasılıkları toplamı 1'dir.
Adım 1: Teşekkür kuponunun olasılığına p dersek indirim 2p, hediye çeki 3p olur. p + 2p + 3p = 1 olduğundan 6p = 1 ve p = [[1|6]].
Adım 2: İndirim kuponunun olasılığı 2 · [[1|6]] = [[1|3]] olur.
Adım 3: İndirim kuponu sayısı 36 · [[1|3]] = 12'dir.
Sağlama: Teşekkür 6, indirim 12, hediye çeki 18 kupondur; 6 + 12 + 18 = 36.
Cevap B.`
},
{
  id: "mat-ol-069",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 4,
  soru: `Bir oyuncak blok kutusunda 24 blok vardır; bunların 6'sı mavi, geri kalanı sarıdır. Kutudan yalnızca sarı bloklar alınacak (mavi blok alınmayacak) ve ardından kutuda kalan bloklardan rastgele biri çekilecektir.
**Çekilen bloğun mavi olma olasılığının [[1|2]]'den büyük olması için kutudan en az kaç sarı blok alınmalıdır?**`,
  gorsel: null,
  secenekler: ["6", "11", "12", "13"],
  dogru: 3,
  hatalar: [
    "Mavi blok sayısı kadar sarı blok aldın; kalan 18 blokta olasılık [[6|18]] = [[1|3]] olur.",
    "Bir eksik buldun: 11 sarı blok alınınca olasılık [[6|13]] olur ve [[1|2]]'den küçüktür.",
    "Olasılığı tam [[1|2]] yapan sayıyı buldun; olasılık [[1|2]]'den büyük olmalıdır.",
    null
  ],
  aciklama: `Sarı blok alınınca mavi sayısı değişmez, yalnızca toplam blok sayısı azalır.
Adım 1: x sarı blok alınsın. Mavi sayısı 6, toplam 24 − x olur (sarı blok sayısı 18 olduğundan x en çok 18'dir).
Adım 2: [[6|24 − x]] > [[1|2]] için 12 > 24 − x, yani x > 12.
Adım 3: x tam sayı olduğundan en küçük değer 13'tür.
Sağlama: x = 12 için [[6|12]] = [[1|2]] (büyük değil), x = 13 için [[6|11]] > [[1|2]] (çünkü 12 > 11).
Cevap D.`
},
{
  id: "mat-ol-070",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 4,
  soru: `Aşağıdaki çarkın kırmızı (K) diliminin merkez açısı 72°'dir. Çarkın geri kalan kısmı yalnızca mavi (M) ve sarı (S) dilimlerden oluşmaktadır. Mavi dilimin merkez açısı, sarı dilimin merkez açısının 2 katıdır. Çark bir kez çevrilecek ve ok bir dilimde duracaktır.
**Buna göre okun sarı dilimde durma olasılığı kaçtır?**`,
  gorsel: `<svg viewBox="0 0 280 240" role="img" aria-label="Üç dilimli çark: kırmızı dilimin merkez açısı 72 derece; mavi ve sarı dilimler çarkın geri kalanıdır."><polygon points="130,2 150,2 140,28" fill="currentColor"/><g stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M140 130 L140 30 A100 100 0 0 1 235.1 99.1 Z" fill="currentColor" fill-opacity="0.2"/><path d="M140 130 L235.1 99.1 A100 100 0 1 1 40.5 140.5 Z" fill="var(--vurgu2)"/><path d="M140 130 L40.5 140.5 A100 100 0 0 1 140 30 Z" fill="var(--dolgu)"/></g><g font-size="16" text-anchor="middle" fill="currentColor" font-weight="700"><text x="176.4" y="75.8">K</text><text x="176.4" y="92.8" font-size="14" font-weight="400">72°</text><text x="152.9" y="195.6">M</text><text x="93.9" y="93.5">S</text></g></svg>`,
  secenekler: ["[[8|15]]", "[[1|3]]", "[[4|15]]", "[[1|5]]"],
  dogru: 2,
  hatalar: [
    "Mavi dilimin olasılığını yazdın: [[192|360]].",
    "Sarı dilimi, kalan 288°'ye oranladın: [[96|288]]; olasılık 360°'ye oranlanır.",
    null,
    "Kırmızı dilimin olasılığını yazdın: [[72|360]]."
  ],
  aciklama: `Bir dilimin olasılığı, merkez açısının 360°'ye oranıdır.
Adım 1: Mavi ve sarının açıları toplamı 360° − 72° = 288°'dir.
Adım 2: Sarıya s dersek mavi 2s olur; s + 2s = 288° ve s = 96°.
Adım 3: Sarının olasılığı [[96|360]] = [[4|15]] olur.
Sağlama: Mavi 192°, kırmızı 72°, sarı 96° ve toplam 360°; mavi sarının 2 katıdır.
Cevap C.`
},
{
  id: "mat-ol-071",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 4,
  soru: `Bir yüzme havuzuna son 8 gün boyunca her gün giren kişi sayıları aşağıdaki tabloda verilmiştir. Havuz yönetimi bu 8 günden birini rastgele seçip o günün giriş kayıtlarını inceleyecektir.
**Seçilen günde havuza giren kişi sayısının, 8 günün ortalamasından __az__ olma olasılığı kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Gün</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr><tr><td>Giren kişi</td><td>12</td><td>15</td><td>9</td><td>18</td><td>14</td><td>17</td><td>10</td><td>17</td></tr></table>`,
  secenekler: ["[[1|4]]", "[[3|8]]", "[[1|2]]", "[[5|8]]"],
  dogru: 1,
  hatalar: [
    "Yalnızca giriş sayısı en düşük iki günü (9 ve 10) aldın.",
    null,
    "Ortalamaya eşit olan günü (14) de \"az\" saydın.",
    "Ortalamadan az olmayan günleri (14 ve üstü) saydın."
  ],
  aciklama: `Önce ortalamayı bul, sonra koşula uyan günleri say.
Adım 1: Toplam giriş: 12 + 15 + 9 + 18 + 14 + 17 + 10 + 17 = 112. Ortalama 112 ÷ 8 = 14'tür.
Adım 2: Ortalamadan az olan günler: 12, 9 ve 10 kişi girenler; 3 gün. (14 ortalamaya eşittir, "az" değildir.)
Adım 3: Olasılık [[3|8]] olur.
Sağlama: Ortalamadan fazla 4 gün (15, 18, 17, 17) vardır, 1 gün ortalamaya eşittir; 3 + 4 + 1 = 8.
Cevap B.`
},
{
  id: "mat-ol-072",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 4,
  soru: `Bir fabrikada üretilen kalemlerden rastgele seçilen bir kalemin kusurlu olma olasılığı [[1|12]]'dir. Bugün üretilen kalem sayısı 150'den çok, 250'den azdır ve kusurlu kalemlerin sayısı bir doğal sayıdır.
**Buna göre bugün üretilen kalem sayısı kaç farklı değer alabilir?**`,
  gorsel: null,
  secenekler: ["7", "8", "9", "20"],
  dogru: 1,
  hatalar: [
    "240'ı (250'den küçüktür) saymadın; 13 ile 19 arasında kaldın.",
    null,
    "144'ü de saydın; 144, 150'den küçüktür.",
    "12'nin katlarını sayıp en büyük çarpanı (20) adet sandın."
  ],
  aciklama: `Kusurlu kalem sayısı tam sayı olduğundan toplam kalem sayısı 12'nin katıdır ([[1|12]] olasılığı, toplamın 12'ye bölünmesini gerektirir).
Adım 1: Toplam kalem sayısı 12k biçimindedir ve 150 < 12k < 250 olmalıdır.
Adım 2: 12 · 12 = 144 (çok küçük), 12 · 13 = 156 uygun, 12 · 20 = 240 uygun, 12 · 21 = 252 (çok büyük). Yani k = 13, 14, …, 20.
Adım 3: Bu değerlerin sayısı 20 − 13 + 1 = 8'dir.
Sağlama: Uygun sayılar 156, 168, 180, 192, 204, 216, 228, 240 olup tam 8 tanedir.
Cevap B.`
},
{
  id: "mat-ol-073",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 4,
  soru: `Bir yarışmada 1'den 20'ye kadar numaralanmış 20 yarışmacının numaraları özdeş kartlara yazılıp bir şapkaya atılmıştır. Sunucu şapkadan bir kart çekecek ve çekilen kartın numarası, Berk'in numarası olan x'ten büyükse ödül verecektir. Berk, ödül verilme olasılığının en az [[2|5]] olmasını istemektedir.
**Buna göre x en fazla kaç olabilir?**`,
  gorsel: null,
  secenekler: ["8", "11", "12", "13"],
  dogru: 2,
  hatalar: [
    "20 · [[2|5]] = 8 sonucunu x'in kendisi sandın.",
    "Sınırı yanlış aldın: x = 11 olabilir ama en fazla değeri değildir.",
    null,
    "x = 13 için ödül olasılığı [[7|20]] olur ve [[2|5]]'ten küçüktür."
  ],
  aciklama: `x'ten büyük numaralı kartlar x + 1, x + 2, …, 20 numaralı kartlardır; sayıları 20 − x'tir.
Adım 1: Ödül olasılığı [[20 − x|20]]'dir ve en az [[2|5]] = [[8|20]] olmalıdır.
Adım 2: 20 − x ≥ 8 olduğundan x ≤ 12'dir.
Adım 3: x'in en büyük değeri 12'dir.
Sağlama: x = 12 için 13, …, 20 numaralı 8 kart vardır; [[8|20]] = [[2|5]]. x = 13 için 7 kart vardır ve [[7|20]] < [[2|5]].
Cevap C.`
},
{
  id: "mat-ol-074",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 4,
  soru: `Bir ayakkabı mağazasındaki spor ayakkabıların numaralara göre çift sayıları aşağıdaki tabloda verilmiştir. Mağazaya gelen 7 çift 44 numaralı spor ayakkabı da rafa konmuştur. Mağaza müdürü rafa dizilmiş çiftlerden birini rastgele seçip vitrine koyacaktır.
**Seçilen ayakkabı çiftinin numarasının 40'tan büyük olma olasılığı kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Numara</th><th>38</th><th>39</th><th>40</th><th>41</th><th>42</th></tr><tr><td>Çift sayısı</td><td>6</td><td>9</td><td>12</td><td>8</td><td>5</td></tr></table>`,
  secenekler: ["[[1|2]]", "[[20|47]]", "[[13|40]]", "[[13|47]]"],
  dogru: 1,
  hatalar: [
    "Yeni çiftleri paya kattın ama paydaya katmadın: [[20|40]].",
    null,
    "Mağazaya sonradan gelen çiftleri hiç hesaba katmadın.",
    "Yeni gelen çiftleri paydaya kattın ama paya katmadın."
  ],
  aciklama: `Rafa yeni çiftler konunca hem istenen hem toplam durum sayısı değişir.
Adım 1: Tablodaki çiftler: 6 + 9 + 12 + 8 + 5 = 40; yeni gelen 7 çiftle toplam 47 çift olur.
Adım 2: Numarası 40'tan büyük olanlar: 41 numara 8, 42 numara 5 ve yeni gelen 44 numara 7 çift. 8 + 5 + 7 = 20.
Adım 3: Olasılık [[20|47]] olur.
Sık yapılan hata: "40'tan büyük" ifadesine 40 numarayı katmak ya da yeni gelenleri yalnızca paya ya da yalnızca paydaya yazmak.
Cevap B.`
},
{
  id: "mat-ol-075",
  kazanim: "M.8.5.1.5",
  kademe: 0,
  zorluk: 4,
  soru: `Aşağıdaki çark, üzerinde 1'den 15'e kadar sayılar yazılı 15 eş dilime ayrılmıştır. Çarkta üzerinde asal sayı yazan dilimler boyalıdır. Çark bir kez çevrilecek ve ok bir dilimde duracaktır. Çarkı hazırlayan kişi, okun boyalı bir dilimde durma olasılığının [[3|5]]'ten büyük olmasını istemektedir. Bunun için boyasız dilimlerden bazıları da boyanacaktır.
**Buna göre en az kaç dilim daha boyanmalıdır?**`,
  gorsel: `<svg viewBox="0 0 280 240" role="img" aria-label="On beş eş dilimli çark: dilimlerde 1den 15e kadar sayılar yazılı; 2, 3, 5, 7, 11 ve 13 yazan dilimler boyalı."><polygon points="130,2 150,2 140,28" fill="currentColor"/><g stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M140 130 L140 30 A100 100 0 0 1 180.7 38.6 Z" fill="none"/><path d="M140 130 L180.7 38.6 A100 100 0 0 1 214.3 63.1 Z" fill="var(--vurgu)"/><path d="M140 130 L214.3 63.1 A100 100 0 0 1 235.1 99.1 Z" fill="var(--vurgu)"/><path d="M140 130 L235.1 99.1 A100 100 0 0 1 239.5 140.5 Z" fill="none"/><path d="M140 130 L239.5 140.5 A100 100 0 0 1 226.6 180 Z" fill="var(--vurgu)"/><path d="M140 130 L226.6 180 A100 100 0 0 1 198.8 210.9 Z" fill="none"/><path d="M140 130 L198.8 210.9 A100 100 0 0 1 160.8 227.8 Z" fill="var(--vurgu)"/><path d="M140 130 L160.8 227.8 A100 100 0 0 1 119.2 227.8 Z" fill="none"/><path d="M140 130 L119.2 227.8 A100 100 0 0 1 81.2 210.9 Z" fill="none"/><path d="M140 130 L81.2 210.9 A100 100 0 0 1 53.4 180 Z" fill="none"/><path d="M140 130 L53.4 180 A100 100 0 0 1 40.5 140.5 Z" fill="var(--vurgu)"/><path d="M140 130 L40.5 140.5 A100 100 0 0 1 44.9 99.1 Z" fill="none"/><path d="M140 130 L44.9 99.1 A100 100 0 0 1 65.7 63.1 Z" fill="var(--vurgu)"/><path d="M140 130 L65.7 63.1 A100 100 0 0 1 99.3 38.6 Z" fill="none"/><path d="M140 130 L99.3 38.6 A100 100 0 0 1 140 30 Z" fill="none"/></g><g font-size="16" text-anchor="middle" fill="currentColor" font-weight="700"><text x="155.4" y="62.6" font-size="14">1</text><text x="183.5" y="75.1" font-size="14">2</text><text x="204.1" y="98" font-size="14">3</text><text x="213.6" y="127.3" font-size="14">4</text><text x="210.4" y="157.9" font-size="14">5</text><text x="195" y="184.5" font-size="14">6</text><text x="170.1" y="202.6" font-size="14">7</text><text x="140" y="209" font-size="14">8</text><text x="109.9" y="202.6" font-size="14">9</text><text x="85" y="184.5" font-size="14">10</text><text x="69.6" y="157.9" font-size="14">11</text><text x="66.4" y="127.3" font-size="14">12</text><text x="75.9" y="98" font-size="14">13</text><text x="96.5" y="75.1" font-size="14">14</text><text x="124.6" y="62.6" font-size="14">15</text></g></svg>`,
  secenekler: ["3", "4", "5", "10"],
  dogru: 1,
  hatalar: [
    "Olasılığı tam [[3|5]] yapan sayıyı buldun (9 boyalı dilim); olasılık [[3|5]]'ten büyük olmalıdır.",
    null,
    "Asal sayıları 5 buldun (bir asal sayıyı atladın); bu yüzden 10 − 5 = 5 dedin.",
    "Boyalı dilim sayısının ulaşması gereken değeri (10) yazdın; kaç dilim daha boyanacağı sorulmuştu."
  ],
  aciklama: `Asal sayı, 1 ve kendisinden başka pozitif böleni olmayan, 1'den büyük sayıdır.
Adım 1: 1–15 arasındaki asal sayılar 2, 3, 5, 7, 11, 13'tür; başlangıçta 6 dilim boyalıdır. (1 asal değildir.)
Adım 2: Toplam dilim sayısı 15'tir, [[3|5]] = [[9|15]] olur. Boyalı dilim sayısı b ise [[b|15]] > [[9|15]] için b > 9 olmalıdır.
Adım 3: b tam sayı olduğundan en az 10 boyalı dilim gerekir. Zaten 6 boyalı olduğundan 10 − 6 = 4 dilim daha boyanmalıdır.
Sağlama: 9 boyalı dilimde olasılık [[9|15]] = [[3|5]] eder, büyük değildir. 10 boyalı dilimde [[10|15]] > [[9|15]] olur.
Sık yapılan hata: Eşitliği yeterli saymak (9 dilim) ya da asal sayıları sayarken 1'i dâhil etmek.
Cevap B.`
}
);
