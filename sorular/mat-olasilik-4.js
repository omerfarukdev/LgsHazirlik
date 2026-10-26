// Matematik — Basit Olayların Olma Olasılığı | 4. dosya
// Kademe 2 (Pekiştirme) YEDEĞİ: mat-ol-226…275 (sıra 26-75)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["olasilik"] = window.LGS_BANK["olasilik"] || []).push(
{
  id: "mat-ol-226",
  kazanim: "M.8.5.1.1",
  kademe: 2,
  zorluk: 2,
  soru: `Ceren'in çorap çekmecesinde aynı büyüklükte 5 siyah, 3 gri ve 4 lacivert çorap vardır. Ceren sabah acele ettiği için çekmeceye bakmadan tek bir çorap alacaktır.
**Bu olaya ait olası durumların sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["60", "14", "12", "3"],
  dogru: 2,
  hatalar: [
    "Sayıları toplamak yerine çarptın: 5 · 3 · 4 = 60. Tek çekilişte olası durumlar toplanarak bulunur.",
    "Bir rengi atladın: 5 + 3 + 4 yerine 5 + 4 + 5 gibi eksik ya da yanlış topladın; bütün çoraplar sayılmalı.",
    null,
    "Renk sayısını olası durum sayısı saydın. Çekilebilecek her çorap ayrı bir durumdur; renkler değil çorapların kendisi sayılır."
  ],
  aciklama: `Olası durum, deneyde ortaya çıkabilecek her ayrı sonuçtur. Çekmeceden çıkabilecek her çorap ayrı bir durumdur.
Adım 1: Çorapları say: 5 + 3 + 4.
Adım 2: Toplam 12 çorap vardır; çekilebilecek her çorap bir olası durumdur.
Sağlama: Renk sayısı 3'tür ama olası durum sayısı 12'dir; çünkü aynı renkteki çoraplar da birbirinden ayrı durumlardır.
Sık yapılan hata: Renk sayısını olası durum sayısı sanmak.
Cevap C.`
},
{
  id: "mat-ol-227",
  kazanim: "M.8.5.1.1",
  kademe: 2,
  zorluk: 2,
  soru: `Bir kumbarada 25 kuruşluk 8, 50 kuruşluk 6 ve 1 liralık 9 madeni para vardır. Kumbaranın kapağı açılıp bakılmadan içinden tek bir madeni para alınacaktır.
**Bu olaya ait olası durumların sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["3", "14", "15", "23"],
  dogru: 3,
  hatalar: [
    "Para türlerinin sayısını olası durum saydın. Alınabilecek her madeni para ayrı bir durumdur.",
    "1 liralık paraları saymayı unuttun: 8 + 6 = 14. Üç türün hepsi sayılmalı.",
    "25 kuruşluk paraları saymayı unuttun: 6 + 9 = 15. Üç türün hepsi sayılmalı.",
    null
  ],
  aciklama: `Tek bir parayla yapılan seçimde alınabilecek her madeni para bir olası durumdur.
Adım 1: Para sayılarını yaz: 8, 6 ve 9.
Adım 2: Hepsini topla: 8 + 6 + 9 = 23.
Sağlama: Kumbarada toplam 23 madeni para vardır; her biri alınabileceği için 23 olası durum olur.
Sık yapılan hata: Türlerin sayısını (3) olası durum sanmak ya da bir türü toplamaya katmamak.
Cevap D.`
},
{
  id: "mat-ol-228",
  kazanim: "M.8.5.1.1",
  kademe: 2,
  zorluk: 2,
  soru: `Bir koşu yarışmasına katılan sporcular 14'ten 33'e kadar (14 ve 33 dâhil) numaralı formalar giyecektir. Her numaradan bir forma vardır. Yarışma başlamadan önce forma numaralarının yazılı olduğu özdeş kâğıtlardan biri çekilecek ve çıkan numaralı sporcu bayrağı taşıyacaktır.
**Bu olaya ait olası durumların sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["33", "20", "19", "14"],
  dogru: 1,
  hatalar: [
    "Son sayıyı olası durum sayısı sandın. 1'den başlamıyor; 14'ten başlıyor.",
    null,
    "33 − 14 = 19 buldun; iki uç da dâhil olduğundan 1 eklemen gerekir.",
    "İlk sayıyı olası durum sayısı sandın. Olası durum, çekilebilecek kâğıtların toplam sayısıdır."
  ],
  aciklama: `Uçları dâhil bir aralıkta kâğıt (sayı) adedi son − ilk + 1 işlemiyle bulunur.
Adım 1: Son sayıdan ilk sayıyı çıkar: 33 − 14 = 19.
Adım 2: İki uç da dâhil olduğundan 1 ekle: 19 + 1 = 20.
Sağlama: 14'ten 33'e kadar sayıları 14-23 (10 sayı) ve 24-33 (10 sayı) diye ikiye ayırınca toplam 20 olur.
Sık yapılan hata: 1 eklemeyi unutup 19 bulmak.
Cevap B.`
},
{
  id: "mat-ol-229",
  kazanim: "M.8.5.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bir kalem kutusunda aynı modelden 9 yeşil, 9 mor ve 4 turuncu kalem vardır. Kutudan bakmadan bir kalem çekilecektir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["Üç rengin çekilme olasılığı birbirine eşittir.", "Turuncu kalem çekilme olasılığı, mor kalem çekilme olasılığından fazladır.", "Yeşil kalem çekilme olasılığı, turuncu kalem çekilme olasılığından azdır.", "Mor kalem çekilme olasılığı, yeşil kalem çekilme olasılığına eşittir."],
  dogru: 3,
  hatalar: [
    "Renk sayısına bakıp olasılıkları eşit sandın. Kalem sayıları eşit olmadığı için olasılıklar da eşit değildir.",
    "Karşılaştırmayı ters yaptın. Turuncu kalem 4, mor kalem 9 tanedir; sayısı az olanın olasılığı da azdır.",
    "Karşılaştırmayı ters yaptın. Yeşil kalem 9, turuncu kalem 4 tanedir; yeşilin olasılığı daha fazladır.",
    null
  ],
  aciklama: `Aynı kutudan yapılan seçimde her kalemin çekilme şansı eşittir. Bu yüzden iki rengin olasılığını karşılaştırmak için kalem sayılarını karşılaştırmak yeter: Sayısı çok olanın olasılığı fazla, sayıları eşit olanların olasılığı eşittir.
Adım 1: Kalem sayıları: yeşil 9, mor 9, turuncu 4.
Adım 2: Yeşil ve mor kalemlerin sayıları eşit (9 = 9) olduğundan olasılıkları da eşittir.
Adım 3: Turuncu kalem (4) hem mordan hem yeşilden azdır; yani turuncunun olasılığı onlardan azdır.
Sağlama: Kutuda 22 kalem vardır; yeşil [[9|22]], mor [[9|22]], turuncu [[4|22]] olur.
Sık yapılan hata: Renk sayısına bakıp eşit şans sanmak.
Cevap D.`
},
{
  id: "mat-ol-230",
  kazanim: "M.8.5.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Aşağıdaki çarkta K, M ve S harfleri sırasıyla kırmızı, mavi ve sarı dilimleri göstermektedir. K dilimi yarım daire, M ve S dilimleri ise birer çeyrek dairedir. Çark çevrilip ok bir dilimde duracaktır.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: "<svg viewBox=\"0 0 300 280\" role=\"img\" aria-label=\"Üç dilimli çark: K yarım daire, M ve S birer çeyrek daire.\"><path d=\"M150 155 L150.00 43.00 A112 112 0 0 1 150.00 267.00 Z\" fill=\"var(--vurgu)\" fill-opacity=\"0.30\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"226.2\" y=\"160.0\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">K</text><path d=\"M150 155 L150.00 267.00 A112 112 0 0 1 38.00 155.00 Z\" fill=\"var(--vurgu2)\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"96.1\" y=\"213.9\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">M</text><path d=\"M150 155 L38.00 155.00 A112 112 0 0 1 150.00 43.00 Z\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"96.1\" y=\"106.1\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">S</text><polygon points=\"140,10 160,10 150,38\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/></svg>",
  secenekler: ["Okun K diliminde durma olasılığı, M diliminde durma olasılığından fazladır.", "Okun M diliminde durma olasılığı, S diliminde durma olasılığından fazladır.", "Okun S diliminde durma olasılığı, K diliminde durma olasılığına eşittir.", "Okun üç diliminde de durma olasılığı birbirine eşittir."],
  dogru: 0,
  hatalar: [
    null,
    "M ve S dilimleri birer çeyrek dairedir; alanları eşit olduğundan olasılıkları da eşittir.",
    "K dilimi S diliminin iki katı büyüklüktedir; K'nin olasılığı S'ninkinden fazladır.",
    "Dilim sayısına bakıp olasılıkları eşit sandın. Dilimler eş değildir; alanı büyük olan dilimin şansı daha fazladır."
  ],
  aciklama: `Çarkta dilimler eş değilse olasılığı dilimlerin alanı belirler: Alanı büyük dilimde durma şansı daha fazladır.
Adım 1: K dilimi yarım daire, M ve S dilimleri çeyrek dairedir; K, M'nin iki katı büyüklüktedir.
Adım 2: K diliminin olasılığı M diliminin olasılığından fazladır.
Adım 3: M ve S dilimleri eşit büyüklükte olduğundan olasılıkları eşittir.
Sağlama: Olasılıklar K için [[1|2]], M için [[1|4]], S için [[1|4]] olur.
Sık yapılan hata: Üç dilim var diye her dilimin olasılığını [[1|3]] saymak.
Cevap A.`
},
{
  id: "mat-ol-231",
  kazanim: "M.8.5.1.2",
  kademe: 2,
  zorluk: 2,
  soru: `Bir kavanozda aynı büyüklükte sakızlar vardır: 8 çilekli, 6 naneli, 8 limonlu ve 4 portakallı. Zeynep kavanozdan bakmadan bir sakız alacaktır.
**Buna göre hangi iki çeşit sakızın alınma olasılığı birbirine eşittir?**`,
  gorsel: null,
  secenekler: ["Naneli ile limonlu sakız", "Çilekli ile limonlu sakız", "Çilekli ile naneli sakız", "Limonlu ile portakallı sakız"],
  dogru: 1,
  hatalar: [
    "Naneli sakızlar 6, limonlu sakızlar 8 tanedir. Sayılar eşit olmadığı için olasılıklar da eşit değildir.",
    null,
    "Çilekli sakızlar 8, naneli sakızlar 6 tanedir. Sayılar eşit olmadığı için olasılıklar da eşit değildir.",
    "Limonlu sakızlar 8, portakallı sakızlar 4 tanedir. Sayılar eşit olmadığı için olasılıklar da eşit değildir."
  ],
  aciklama: `Aynı kavanozdan seçimde sayıları eşit olan çeşitlerin olasılıkları da eşittir.
Adım 1: Sakız sayılarını yaz: çilekli 8, naneli 6, limonlu 8, portakallı 4.
Adım 2: Sayısı aynı olan çeşitleri bul: çilekli ve limonlu (ikisi de 8).
Sağlama: Toplam 26 sakız vardır; çilekli ve limonlu için olasılık [[8|26]] = [[4|13]] olur.
Sık yapılan hata: Yalnızca ilk iki çeşidi ya da yan yana yazılan çeşitleri karşılaştırmak.
Cevap B.`
},
{
  id: "mat-ol-232",
  kazanim: "M.8.5.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Aşağıdaki çark 8 eş dilime ayrılmış ve dilimler 1'den 8'e kadar numaralandırılmıştır. Çark çevrildiğinde ok dilimlerden birini gösterecektir.
**Buna göre okun 6 numaralı dilimi göstermesinin olasılığı kaçtır?**`,
  gorsel: "<svg viewBox=\"0 0 300 280\" role=\"img\" aria-label=\"8 eş dilimli, 1'den 8'e numaralı çark.\"><path d=\"M150 155 L150.00 43.00 A112 112 0 0 1 229.20 75.80 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"179.1\" y=\"89.6\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">1</text><path d=\"M150 155 L229.20 75.80 A112 112 0 0 1 262.00 155.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"220.4\" y=\"130.9\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">2</text><path d=\"M150 155 L262.00 155.00 A112 112 0 0 1 229.20 234.20 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"220.4\" y=\"189.1\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">3</text><path d=\"M150 155 L229.20 234.20 A112 112 0 0 1 150.00 267.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"179.1\" y=\"230.4\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">4</text><path d=\"M150 155 L150.00 267.00 A112 112 0 0 1 70.80 234.20 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"120.9\" y=\"230.4\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5</text><path d=\"M150 155 L70.80 234.20 A112 112 0 0 1 38.00 155.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"79.6\" y=\"189.1\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6</text><path d=\"M150 155 L38.00 155.00 A112 112 0 0 1 70.80 75.80 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"79.6\" y=\"130.9\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">7</text><path d=\"M150 155 L70.80 75.80 A112 112 0 0 1 150.00 43.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"120.9\" y=\"89.6\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">8</text><polygon points=\"140,10 160,10 150,38\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/></svg>",
  secenekler: ["[[1|8]]", "[[1|7]]", "[[1|2]]", "8"],
  dogru: 0,
  hatalar: [
    null,
    "Dilim sayısından birini çıkardın. Eş şanslı 8 durum olduğundan payda 8 olmalıdır.",
    "Dilimin ya olacağını ya olmayacağını düşünüp iki durum saydın. Burada olası durum sayısı dilim sayısıdır.",
    "Olasılığı olası durum sayısı olarak yazdın. Olasılık 1'den büyük olamaz."
  ],
  aciklama: `n eş şanslı durumun her birinin olasılığı [[1|n]]'dir.
Adım 1: Çark 8 eş dilime ayrılmıştır; ok 8 dilimden birini gösterir. Olası durum sayısı 8'dir.
Adım 2: Dilimlerin hepsi eşit olduğundan her dilimin şansı aynıdır. 6 numaralı dilimin olasılığı [[1|8]] olur.
Sağlama: 8 dilimin her birinin olasılığı [[1|8]] ise hepsinin toplamı 8 · [[1|8]] = 1 eder.
Sık yapılan hata: Olasılığı 1'den büyük yazmak ya da olası durum sayısını yanlış saymak.
Cevap A.`
},
{
  id: "mat-ol-233",
  kazanim: "M.8.5.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Aşağıda dört farklı deney verilmiştir. Her deneyde işlem bir kez yapılacak ve ortaya çıkan sonuç kaydedilecektir.
**Buna göre hangi deneyde ortaya çıkabilecek sonuçların olma şansı birbirine eşittir?**`,
  gorsel: null,
  secenekler: ["Altı yüzü de aynı büyüklükte olan hilesiz bir zar atılıp üst yüzünde görünen sayının kaydedilmesi", "İçinde 9 kırmızı ve 1 mavi top bulunan bir torbadan top çekilip renginin kaydedilmesi", "Merkez açıları 120°, 90° ve 150° olan üç dilimli bir çarkın çevrilip durduğu rengin kaydedilmesi", "Bir futbol maçı bittikten sonra ev sahibi takımın galibiyet, beraberlik ya da yenilgisinin kaydedilmesi"],
  dogru: 0,
  hatalar: [
    null,
    "Kırmızı top 9, mavi top 1 tanedir; iki renk var diye sonuçlar eşit olmaz. Kırmızının olasılığı [[9|10]], mavinin [[1|10]]'dur.",
    "Dilimlerin merkez açıları farklı olduğundan dilimlerin alanları ve olasılıkları da farklıdır.",
    "Üç sonuç olması bu sonuçların eş şanslı olduğunu göstermez; maç sonuçlarının eş şanslı olduğu varsayılamaz."
  ],
  aciklama: `Bir deneyde bütün sonuçların olma şansı aynıysa sonuçlar eş şanslıdır. Hilesiz zar, özdeş toplar ve eş dilimli çark eş şans verir.
Adım 1: Hilesiz zarın altı yüzü eş olduğundan her sayı [[1|6]] olasılıkla gelir. Sonuçlar eş şanslıdır.
Adım 2: Torbada kırmızı top çok, mavi top az olduğundan renklerin şansı eşit değildir.
Adım 3: Çarkın dilimleri eş değildir; açısı büyük dilimin şansı fazladır.
Adım 4: Maç sonuçlarının şansı eşit varsayılamaz.
Sık yapılan hata: Sonuç sayısına bakıp sonuçların eşit şanslı olduğunu sanmak.
Cevap A.`
},
{
  id: "mat-ol-234",
  kazanim: "M.8.5.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Bir doğa kulübünün üyeleri, kulüp başkanını belirlemek için adlarını özdeş kâğıtlara birer kez yazıp bir şapkaya atmıştır. Şapkadan bakmadan bir kâğıt çekilecektir. Her üyenin adının çekilme olasılığı [[1|15]] olarak hesaplanmıştır.
**Buna göre bu kulübün kaç üyesi vardır?**`,
  gorsel: null,
  secenekler: ["1", "14", "15", "16"],
  dogru: 2,
  hatalar: [
    "Olasılığın payını üye sayısı sandın. [[1|15]] kesrinde 1 bir üyeyi, payda ise bütün üyeleri gösterir.",
    "Paydadan birini çıkardın. Eş şanslı n durumun her birinin olasılığı [[1|n]] olduğundan n = 15'tir.",
    null,
    "Paydaya bir ekledin. Eş şanslı n durumun her birinin olasılığı [[1|n]] olduğundan n = 15'tir."
  ],
  aciklama: `n eş şanslı durum varsa her birinin olasılığı [[1|n]]'dir; yani paydadaki sayı olası durum sayısıdır.
Adım 1: Her üyenin adı bir kez yazıldığından kâğıt sayısı üye sayısına eşittir.
Adım 2: Her kâğıdın çekilme olasılığı [[1|15]] ise payda olan 15, kâğıt sayısıdır.
Sağlama: 15 kâğıttan birinin çekilme olasılığı [[1|15]]'tir.
Sık yapılan hata: Paydaya göre bir fazla ya da bir eksik üye sayısı bulmak.
Cevap C.`
},
{
  id: "mat-ol-235",
  kazanim: "M.8.5.1.3",
  kademe: 2,
  zorluk: 2,
  soru: `Bir oyun zarının altı yüzünden üçü kırmızı, ikisi mavi, biri sarıya boyanmıştır. Zarın diğer özellikleri hilesiz bir zarla aynıdır. Zar bir kez atılacak ve üst yüzün rengine bakılacaktır.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["Sarı gelme olasılığı 0'dır.", "Mavi gelme olasılığı, kırmızı gelme olasılığına eşittir.", "Kırmızı gelme olasılığı [[1|3]]'tür.", "Sarı gelme olasılığı, mavi gelme olasılığından azdır."],
  dogru: 3,
  hatalar: [
    "Sarı renk bir yüzde vardır; sarı gelmesi mümkündür. Olasılığı [[1|6]]'dır, 0 değil.",
    "Mavi renk 2 yüzde, kırmızı renk 3 yüzde vardır. Yüz sayıları farklı olduğundan olasılıklar eşit değildir.",
    "Renk sayısına bakıp [[1|3]] buldun. Kırmızı 6 yüzden 3'ündedir; olasılığı [[3|6]] = [[1|2]]'dir.",
    null
  ],
  aciklama: `Zarın yüzleri eş şanslıdır ama renkler eş şanslı değildir: Bir rengin şansı o renkli yüzlerin sayısına bağlıdır.
Adım 1: Yüz sayılarını yaz: kırmızı 3, mavi 2, sarı 1; olasılıklar sırasıyla [[3|6]], [[2|6]], [[1|6]].
Adım 2: Sarı (1 yüz) maviden (2 yüz) daha az yüzde bulunduğundan sarının olasılığı maviden azdır.
Adım 3: Diğer ifadeleri kontrol et: Mavi ile kırmızı eşit değil, sarı imkânsız değil, kırmızı [[1|3]] değil [[1|2]]'dir.
Sık yapılan hata: Üç renk var diye her renge [[1|3]] vermek.
Cevap D.`
},
{
  id: "mat-ol-236",
  kazanim: "M.8.5.1.4",
  kademe: 2,
  zorluk: 2,
  soru: `Bir hava durumu uygulaması, yarın yağmur yağma olasılığını dört şehir için şöyle göstermiştir: Edirne için [[3|8]], Sivas için %95, Konya için 1,05, Muğla için 0.
**Buna göre hangi şehir için verilen değer bir olasılık değeri __olamaz__?**`,
  gorsel: null,
  secenekler: ["Konya", "Sivas", "Edirne", "Muğla"],
  dogru: 0,
  hatalar: [
    null,
    "%95 = 0,95 değeri 0 ile 1 arasındadır; bir olasılık değeri olabilir.",
    "[[3|8]] kesri 0 ile 1 arasındadır; bir olasılık değeri olabilir.",
    "0 değeri imkânsız olayın olasılığıdır; 0 dâhil olduğundan bir olasılık değeri olabilir."
  ],
  aciklama: `Bir olayın olasılığı 0 ile 1 arasındadır (0 ve 1 dâhil). Bu aralığın dışındaki sayılar olasılık olamaz.
Adım 1: Değerleri ondalık yaz: [[3|8]] = 0,375; %95 = 0,95; 1,05; 0.
Adım 2: 0 ile 1 arasında olmayan değeri bul: 1,05 sayısı 1'den büyüktür.
Sağlama: Edirne 0,375, Sivas 0,95 ve Muğla 0 değerleri [0, 1] aralığındadır.
Sık yapılan hata: Yüzde ya da kesir gösteriminde olan değeri, ondalığa çevirmeden yorumlamak; 0'ı olasılık saymamak.
Cevap A.`
},
{
  id: "mat-ol-237",
  kazanim: "M.8.5.1.4",
  kademe: 2,
  zorluk: 2,
  soru: `Bir okulun panosunda, yarın okul bahçesine kar yağma olasılığı [[3|20]] olarak yazılmıştır.
**Buna göre yarın okul bahçesine kar yağmama olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[3|20]]", "[[3|17]]", "[[17|20]]", "[[20|17]]"],
  dogru: 2,
  hatalar: [
    "Kar yağma olasılığını aynen yazdın. İstenen kar yağmama olasılığıdır: 1 − [[3|20]].",
    "Yağma sayısını yağmama sayısına böldün. Olasılıkta payda tüm durumların sayısıdır, 20 kalmalıdır.",
    null,
    "Pay ile paydayı ters yazdın. Olasılık 1'den büyük olamaz; [[20|17]] 1'den büyüktür."
  ],
  aciklama: `Bir olayın olma ve olmama olasılıklarının toplamı 1'dir.
Adım 1: Olmama olasılığı = 1 − olma olasılığı.
Adım 2: 1 − [[3|20]] = [[20|20]] − [[3|20]] = [[17|20]].
Sağlama: [[3|20]] + [[17|20]] = [[20|20]] = 1 olur.
Sık yapılan hata: Olma olasılığını cevap sanmak ya da 20 − 3 = 17'yi paydaya koymak.
Cevap C.`
},
{
  id: "mat-ol-238",
  kazanim: "M.8.5.1.4",
  kademe: 2,
  zorluk: 2,
  soru: `Bir sınıf kitaplığındaki 6 kitabın sayfa sayıları 100, 120, 140, 160, 180 ve 200'dür. Öğretmen kitaplardan birini bakmadan seçecektir.
**Buna göre aşağıdaki olaylardan hangisi kesin olaydır?**`,
  gorsel: null,
  secenekler: ["Seçilen kitabın sayfa sayısının 40'ın katı olması", "Seçilen kitabın sayfa sayısının 20'nin katı olması", "Seçilen kitabın sayfa sayısının 100'den fazla olması", "Seçilen kitabın sayfa sayısının 210'dan fazla olması"],
  dogru: 1,
  hatalar: [
    "120, 160 ve 200 sayıları 40'ın katıdır; 100, 140 ve 180 değildir. Olasılığı [[3|6]]'dır, kesin değildir.",
    null,
    "100 sayfalı kitap seçilirse olay gerçekleşmez. Olasılığı [[5|6]]'dır, kesin değildir.",
    "Hiçbir kitabın sayfa sayısı 210'dan fazla değildir. Bu olay kesin değil, imkânsızdır."
  ],
  aciklama: `Kesin olay, bütün olası durumları içeren olaydır; olasılığı 1'dir.
Adım 1: Kitapların sayfa sayılarını 20'ye böl: 100, 120, 140, 160, 180, 200 sayıların hepsi 20'nin katıdır.
Adım 2: Altı kitabın altısı da koşulu sağladığı için olasılık [[6|6]] = 1'dir; olay kesindir.
Adım 3: Diğer olaylarda bazı kitaplar koşulu sağlamaz; 210'dan fazla olması ise hiç gerçekleşmez.
Sık yapılan hata: Olasılığı büyük olan olayı (5/6) kesin sanmak.
Cevap B.`
},
{
  id: "mat-ol-239",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: `Bir dondurma dolabında aynı boyutta 6 çikolatalı, 9 vanilyalı ve 5 çilekli dondurma vardır. Dolaptan bakmadan bir dondurma alınacaktır.
**Buna göre alınan dondurmanın çikolatalı __olmama__ olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[7|10]]", "[[9|20]]", "[[3|7]]", "[[3|10]]"],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca vanilyalıları saydın; çilekli dondurmaları unuttun. Çikolatalı olmayanlar 9 + 5 = 14 tanedir.",
    "Çikolatalıları çikolatalı olmayanlara böldün: [[6|14]]. Payda bütün dondurmaların sayısı (20) olmalıdır.",
    "Çikolatalı olma olasılığını verdin ([[6|20]]). İstenen çikolatalı olmama olasılığıdır."
  ],
  aciklama: `Olasılık = istenen durum sayısı ÷ tüm durum sayısı.
Adım 1: Tüm dondurmalar: 6 + 9 + 5 = 20.
Adım 2: Çikolatalı olmayanlar: 9 + 5 = 14.
Adım 3: Olasılık [[14|20]] = [[7|10]].
Sağlama: Çikolatalı olma olasılığı [[6|20]] = [[3|10]]; 1 − [[3|10]] = [[7|10]] olur.
Sık yapılan hata: Çikolatalı olma olasılığını cevap sanmak.
Cevap A.`
},
{
  id: "mat-ol-240",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: `Bora ile Selin bir zar oyunu oynamaktadır. Bora hilesiz bir zar atacak ve üst yüze gelen sayı 2 ile 5 arasında ise (2 ve 5 dâhil) oyunu kazanacaktır.
**Buna göre Bora'nın oyunu kazanma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[5|6]]", "[[2|3]]", "[[1|2]]", "[[1|3]]"],
  dogru: 1,
  hatalar: [
    "1'den 5'e kadar bütün sayıları saydın. Kazandıran sayılar yalnızca 2, 3, 4 ve 5'tir.",
    null,
    "Uçlardan birini saymadın; 3 sayı buldun. 2, 3, 4 ve 5 olmak üzere 4 sayı vardır.",
    "Uç sayıları (2 ve 5) kapsam dışı bıraktın; yalnızca 3 ve 4'ü saydın. Soruda 2 ve 5 dâhildir."
  ],
  aciklama: `Önce istenen olayın durumlarını yaz, sonra olası durum sayısına böl.
Adım 1: Zarda olası durumlar 1, 2, 3, 4, 5, 6 olmak üzere 6 tanedir.
Adım 2: Bora'yı kazandıran sayılar 2, 3, 4 ve 5'tir; 4 durum vardır.
Adım 3: Olasılık [[4|6]] = [[2|3]].
Sağlama: Kazandırmayan sayılar 1 ve 6'dır; 1 − [[2|6]] = [[4|6]] olur.
Sık yapılan hata: Uçların dâhil olup olmadığını okumadan saymak.
Cevap B.`
},
{
  id: "mat-ol-241",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: `Aşağıdaki çark 10 eş dilime ayrılmış ve dilimler 1'den 10'a kadar numaralandırılmıştır. Çark bir kez çevrilecek ve okun gösterdiği sayıya bakılacaktır.
**Buna göre okun gösterdiği sayının tam kare olma olasılığı kaçtır?**`,
  gorsel: "<svg viewBox=\"0 0 300 280\" role=\"img\" aria-label=\"10 eş dilimli, 1'den 10'a numaralı çark.\"><path d=\"M150 155 L150.00 43.00 A112 112 0 0 1 215.83 64.39 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"173.5\" y=\"87.6\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">1</text><path d=\"M150 155 L215.83 64.39 A112 112 0 0 1 256.52 120.39 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"211.6\" y=\"115.2\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">2</text><path d=\"M150 155 L256.52 120.39 A112 112 0 0 1 256.52 189.61 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"226.2\" y=\"160.0\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">3</text><path d=\"M150 155 L256.52 189.61 A112 112 0 0 1 215.83 245.61 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"211.6\" y=\"204.8\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">4</text><path d=\"M150 155 L215.83 245.61 A112 112 0 0 1 150.00 267.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"173.5\" y=\"232.4\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5</text><path d=\"M150 155 L150.00 267.00 A112 112 0 0 1 84.17 245.61 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"126.5\" y=\"232.4\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">6</text><path d=\"M150 155 L84.17 245.61 A112 112 0 0 1 43.48 189.61 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"88.4\" y=\"204.8\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">7</text><path d=\"M150 155 L43.48 189.61 A112 112 0 0 1 43.48 120.39 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"73.8\" y=\"160.0\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">8</text><path d=\"M150 155 L43.48 120.39 A112 112 0 0 1 84.17 64.39 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"88.4\" y=\"115.2\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">9</text><path d=\"M150 155 L84.17 64.39 A112 112 0 0 1 150.00 43.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"126.5\" y=\"87.6\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">10</text><polygon points=\"140,10 160,10 150,38\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/></svg>",
  secenekler: ["[[7|10]]", "[[3|7]]", "[[3|10]]", "[[1|5]]"],
  dogru: 2,
  hatalar: [
    "Tam kare olmama olasılığını verdin. İstenen tam kare olma olasılığıdır.",
    "Tam kare olanları tam kare olmayanlara böldün: [[3|7]]. Payda bütün dilimlerin sayısı (10) olmalıdır.",
    null,
    "1 sayısını tam kare saymadın; yalnızca 4 ve 9'u buldun. 1 = 1 · 1 olduğundan tam karedir."
  ],
  aciklama: `Tam kare sayı, bir doğal sayının kendisiyle çarpımıdır: 1, 4, 9, 16, …
Adım 1: 1'den 10'a kadar tam kare sayılar 1, 4 ve 9'dur; 3 durum vardır.
Adım 2: Çark 10 eş dilimlidir; olası durum sayısı 10'dur.
Adım 3: Olasılık [[3|10]].
Sağlama: Tam kare olmayanlar 7 sayıdır; [[3|10]] + [[7|10]] = 1 olur.
Sık yapılan hata: 1'i tam kare saymamak.
Cevap C.`
},
{
  id: "mat-ol-242",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: `Bir otobüs durağında bekleyen yolcuların yaş gruplarına göre sayıları aşağıdaki tabloda verilmiştir. Şoför, yolculardan birini rastgele seçip ona kısa bir anket yapacaktır.
**Buna göre seçilen yolcunun yetişkin olma olasılığı kaçtır?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Yaş grubu</th><th>Yolcu sayısı</th></tr><tr><td>Çocuk</td><td>7</td></tr><tr><td>Genç</td><td>13</td></tr><tr><td>Yetişkin</td><td>22</td></tr><tr><td>Yaşlı</td><td>8</td></tr></table>",
  secenekler: ["[[11|14]]", "[[11|25]]", "[[13|50]]", "[[1|4]]"],
  dogru: 1,
  hatalar: [
    "Yetişkinleri yetişkin olmayanlara böldün: [[22|28]]. Payda bütün yolcuların sayısı (50) olmalıdır.",
    null,
    "Genç yolcu sayısını okudun. İstenen yetişkin yolculardır: 22 kişi.",
    "Yaş grubu sayısına (4) bakıp her grubu eşit saydın. Grupların yolcu sayıları farklıdır."
  ],
  aciklama: `Tablodan önce bütünü, sonra istenen grubun sayısını bul.
Adım 1: Tüm yolcular: 7 + 13 + 22 + 8 = 50.
Adım 2: Yetişkin yolcular 22 kişidir.
Adım 3: Olasılık [[22|50]] = [[11|25]].
Sağlama: Yetişkin olmayanlar 28 kişidir; [[22|50]] + [[28|50]] = 1 olur.
Sık yapılan hata: Tabloda yanlış satırı okumak ya da paydaya bütünü koymamak.
Cevap B.`
},
{
  id: "mat-ol-243",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: `Aşağıdaki torbada kırmızı (K), mavi (M) ve sarı (S) renkte, boyutları aynı toplar vardır. Torbadan bakmadan bir top çekilecektir.
**Buna göre çekilen topun sarı olma olasılığı kaçtır?**`,
  gorsel: "<svg viewBox=\"0 0 400 202\" role=\"img\" aria-label=\"Torbada 5 kırmızı, 4 mavi ve 3 sarı top vardır.\"><path d=\"M40 24 L200 24 L215 44 L215 174 Q215 190 199 190 L41 190 Q25 190 25 174 L25 44 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"55\" cy=\"70\" r=\"14\" fill=\"var(--vurgu)\" fill-opacity=\"0.30\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"55\" y=\"75\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">K</text><circle cx=\"89\" cy=\"70\" r=\"14\" fill=\"var(--vurgu)\" fill-opacity=\"0.30\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"89\" y=\"75\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">K</text><circle cx=\"123\" cy=\"70\" r=\"14\" fill=\"var(--vurgu)\" fill-opacity=\"0.30\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"123\" y=\"75\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">K</text><circle cx=\"157\" cy=\"70\" r=\"14\" fill=\"var(--vurgu)\" fill-opacity=\"0.30\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"157\" y=\"75\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">K</text><circle cx=\"191\" cy=\"70\" r=\"14\" fill=\"var(--vurgu)\" fill-opacity=\"0.30\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"191\" y=\"75\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">K</text><circle cx=\"55\" cy=\"104\" r=\"14\" fill=\"var(--vurgu2)\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"55\" y=\"109\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">M</text><circle cx=\"89\" cy=\"104\" r=\"14\" fill=\"var(--vurgu2)\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"89\" y=\"109\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">M</text><circle cx=\"123\" cy=\"104\" r=\"14\" fill=\"var(--vurgu2)\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"123\" y=\"109\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">M</text><circle cx=\"157\" cy=\"104\" r=\"14\" fill=\"var(--vurgu2)\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"157\" y=\"109\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">M</text><circle cx=\"191\" cy=\"104\" r=\"14\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"191\" y=\"109\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">S</text><circle cx=\"55\" cy=\"138\" r=\"14\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"55\" y=\"143\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">S</text><circle cx=\"89\" cy=\"138\" r=\"14\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"89\" y=\"143\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">S</text><circle cx=\"250\" cy=\"50\" r=\"10\" fill=\"var(--vurgu)\" fill-opacity=\"0.30\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"270\" y=\"55\" font-size=\"14\" fill=\"currentColor\">K: kırmızı</text><circle cx=\"250\" cy=\"80\" r=\"10\" fill=\"var(--vurgu2)\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"270\" y=\"85\" font-size=\"14\" fill=\"currentColor\">M: mavi</text><circle cx=\"250\" cy=\"110\" r=\"10\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"270\" y=\"115\" font-size=\"14\" fill=\"currentColor\">S: sarı</text></svg>",
  secenekler: ["[[3|4]]", "[[5|12]]", "[[1|3]]", "[[1|4]]"],
  dogru: 3,
  hatalar: [
    "Sarı olmama olasılığını verdin ([[9|12]]). İstenen sarı olma olasılığıdır.",
    "Kırmızı top sayısını aldın. İstenen sarı toplardır: 3 tane.",
    "Üç renk olduğu için [[1|3]] buldun. Renkler değil toplar sayılır; sarı top 12 topun 3'ündedir.",
    null
  ],
  aciklama: `Adım 1: Torbadaki bütün toplar: 5 + 4 + 3 = 12.
Adım 2: Sarı toplar 3 tanedir.
Adım 3: Olasılık [[3|12]] = [[1|4]].
Sağlama: Sarı olmayan 9 top vardır; [[3|12]] + [[9|12]] = 1 olur.
Sık yapılan hata: Renk sayısına bakıp olasılığı [[1|3]] yazmak.
Cevap D.`
},
{
  id: "mat-ol-244",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: `Bir tiyatro topluluğu, yeni oyunun sahnelenme ayını kurayla belirleyecektir. Yılın 12 ayının adı özdeş kâğıtlara birer kez yazılıp bir kutuya atılmış ve kutudan bir kâğıt çekilecektir.
**Buna göre çekilen ayın 31 günlük olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[1|3]]", "[[5|12]]", "[[7|12]]", "[[11|12]]"],
  dogru: 2,
  hatalar: [
    "30 günlük ayları saydın (Nisan, Haziran, Eylül, Kasım). İstenen 31 günlük aylardır.",
    "31 günlük olmayan ayları saydın. Bunlar 4 tane 30 günlük ay ile Şubat'tır; istenen 31 günlük aylardır.",
    null,
    "Şubat dışındaki bütün ayları 31 günlük saydın. Nisan, Haziran, Eylül ve Kasım 30 günlüktür."
  ],
  aciklama: `Adım 1: Olası durum sayısı yılın ay sayısıdır: 12.
Adım 2: 31 günlük aylar Ocak, Mart, Mayıs, Temmuz, Ağustos, Ekim ve Aralık'tır; 7 ay vardır.
Adım 3: Olasılık [[7|12]].
Sağlama: 31 günlük olmayan aylar 5 tanedir (4 tanesi 30 gün, Şubat); [[7|12]] + [[5|12]] = 1 olur.
Sık yapılan hata: 30 ve 31 günlük ayları karıştırmak.
Cevap C.`
},
{
  id: "mat-ol-245",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: `Bir ortaokulun voleybol kursuna 12 kız ve 8 erkek öğrenci devam etmektedir. Antrenör, kaptanı belirlemek için adları özdeş kâğıtlara yazılan öğrencilerden birini çekecektir.
**Buna göre çekilen öğrencinin kız olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[3|2]]", "[[3|5]]", "[[1|2]]", "[[2|5]]"],
  dogru: 1,
  hatalar: [
    "Kız öğrencileri erkek öğrencilere böldün: [[12|8]]. Payda bütün öğrencilerin sayısı olmalıdır; olasılık 1'den büyük olamaz.",
    null,
    "İki grup (kız ve erkek) olduğu için [[1|2]] buldun. Grupların kişi sayıları eşit değildir.",
    "Erkek öğrenci olma olasılığını verdin ([[8|20]]). İstenen kız öğrenci olma olasılığıdır."
  ],
  aciklama: `Adım 1: Kursa devam eden öğrenci sayısı 12 + 8 = 20'dir. Bu, olası durum sayısıdır.
Adım 2: Kız öğrenciler 12 kişidir.
Adım 3: Olasılık [[12|20]] = [[3|5]].
Sağlama: Erkek öğrenci olma olasılığı [[8|20]] = [[2|5]]; [[3|5]] + [[2|5]] = 1 olur.
Sık yapılan hata: İki grup var diye olasılığı [[1|2]] yazmak.
Cevap B.`
},
{
  id: "mat-ol-246",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: `Okul şenliğindeki balık tutma oyununda havuzda 40 plastik balık vardır. Balıkların %30'unun altında hediye etiketi bulunmaktadır. Bir çocuk havuzdan gözü kapalı bir balık tutacaktır.
**Buna göre tutulan balığın hediyeli olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[7|10]]", "[[3|7]]", "[[3|10]]", "[[3|100]]"],
  dogru: 2,
  hatalar: [
    "Hediyeli olmama olasılığını verdin. İstenen hediyeli olma olasılığıdır.",
    "Hediyeli balıkları hediyesiz balıklara böldün: [[12|28]]. Payda bütün balıkların sayısı (40) olmalıdır.",
    null,
    "%30'u 30 ya da 3 ile karıştırıp 100'e böldün: 0,03. %30 = [[30|100]] = [[3|10]]'dur."
  ],
  aciklama: `Yüzde, bir bütünün 100 parçasından kaçının alındığını gösterir: %30 = [[30|100]].
Adım 1: Hediyeli balık sayısı 40'ın %30'udur: 40 · [[30|100]] = 12.
Adım 2: Olasılık [[12|40]] = [[3|10]].
Sağlama: %30'u kesre çevirmek de aynı sonucu verir: [[30|100]] = [[3|10]].
Sık yapılan hata: %30'u 0,03 gibi yanlış ondalığa çevirmek.
Cevap C.`
},
{
  id: "mat-ol-247",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: `Aşağıdaki çarkın dilimlerinin merkez açıları şekil üzerinde gösterilmiştir. Çark çevrilip ok bir dilimde duracaktır.
**Buna göre okun merkez açısı 75° olan dilimde durma olasılığı kaçtır?**`,
  gorsel: "<svg viewBox=\"0 0 300 280\" role=\"img\" aria-label=\"Dört dilimli çark: merkez açıları 135, 90, 75 ve 60 derece.\"><path d=\"M150 155 L150.00 43.00 A112 112 0 0 1 229.20 234.20 Z\" fill=\"var(--vurgu)\" fill-opacity=\"0.30\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"220.4\" y=\"130.9\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">135°</text><path d=\"M150 155 L229.20 234.20 A112 112 0 0 1 70.80 234.20 Z\" fill=\"var(--vurgu2)\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"150.0\" y=\"236.2\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">90°</text><path d=\"M150 155 L70.80 234.20 A112 112 0 0 1 53.01 99.00 Z\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"74.5\" y=\"169.9\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">75°</text><path d=\"M150 155 L53.01 99.00 A112 112 0 0 1 150.00 43.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"111.9\" y=\"94.0\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">60°</text><polygon points=\"140,10 160,10 150,38\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/></svg>",
  secenekler: ["[[3|4]]", "[[5|12]]", "[[1|4]]", "[[5|24]]"],
  dogru: 3,
  hatalar: [
    "75°'yi 100'e böldün. Bu bir yüzdelik değil, açıdır; bütün 360°'dir.",
    "75°'yi 180°'ye böldün. Çarkın tamamı 360°'dir; olasılık açı ÷ 360° ile bulunur.",
    "Dört dilim var diye her dilimi eş saydın. Dilimlerin açıları farklıdır; olasılık açıya bağlıdır.",
    null
  ],
  aciklama: `Eş olmayan dilimlerde bir dilimin olasılığı merkez açısının tam çembere (360°) oranıdır.
Adım 1: Dilimin merkez açısı 75°, tüm çark 360°'dir.
Adım 2: Olasılık [[75|360]].
Adım 3: 15 ile sadeleştir: [[75|360]] = [[5|24]].
Sağlama: Dört açının toplamı 135 + 90 + 75 + 60 = 360 eder; bütün doğru okunmuştur.
Sık yapılan hata: Dilimleri eş sanıp [[1|4]] yazmak.
Cevap D.`
},
{
  id: "mat-ol-248",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: `Bir müzik kursuna kayıtlı öğrencilerin çaldıkları çalgılara göre dağılımı aşağıdaki sütun grafiğinde gösterilmiştir. Her öğrenci yalnızca bir çalgı çalmaktadır. Kurs yöneticisi, öğrencilerden birini rastgele seçip konser sunucusu yapacaktır.
**Buna göre seçilen öğrencinin keman çalma olasılığı kaçtır?**`,
  gorsel: "<svg viewBox=\"0 0 360 230\" role=\"img\" aria-label=\"Sütun grafiği: gitar 12, keman 8, piyano 15, flüt 5 öğrenci.\"><rect x=\"62.0\" y=\"65.5\" width=\"44\" height=\"124.5\" fill=\"var(--vurgu)\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"138.0\" y=\"107.0\" width=\"44\" height=\"83.0\" fill=\"var(--vurgu)\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"214.0\" y=\"34.4\" width=\"44\" height=\"155.6\" fill=\"var(--vurgu)\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"290.0\" y=\"138.1\" width=\"44\" height=\"51.9\" fill=\"var(--vurgu)\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"46\" y1=\"190.0\" x2=\"354\" y2=\"190.0\" stroke=\"currentColor\" stroke-opacity=\"1\" stroke-width=\"1\"/><text x=\"38\" y=\"195.0\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">0</text><line x1=\"46\" y1=\"148.5\" x2=\"354\" y2=\"148.5\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/><text x=\"38\" y=\"153.5\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">4</text><line x1=\"46\" y1=\"107.0\" x2=\"354\" y2=\"107.0\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/><text x=\"38\" y=\"112.0\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">8</text><line x1=\"46\" y1=\"65.5\" x2=\"354\" y2=\"65.5\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/><text x=\"38\" y=\"70.5\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">12</text><line x1=\"46\" y1=\"24.0\" x2=\"354\" y2=\"24.0\" stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"/><text x=\"38\" y=\"29.0\" text-anchor=\"end\" font-size=\"14\" fill=\"currentColor\">16</text><text x=\"84.0\" y=\"59.5\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">12</text><text x=\"84.0\" y=\"210\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Gitar</text><text x=\"160.0\" y=\"101.0\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">8</text><text x=\"160.0\" y=\"210\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Keman</text><text x=\"236.0\" y=\"28.4\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">15</text><text x=\"236.0\" y=\"210\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Piyano</text><text x=\"312.0\" y=\"132.1\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">5</text><text x=\"312.0\" y=\"210\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">Flüt</text></svg>",
  secenekler: ["[[1|8]]", "[[1|5]]", "[[1|4]]", "[[3|8]]"],
  dogru: 1,
  hatalar: [
    "Flüt sütununu okudun (5 öğrenci). İstenen keman sütunudur: 8 öğrenci.",
    null,
    "Dört çalgı var diye olasılığı [[1|4]] yazdın (ya da keman öğrencilerini diğerlerine böldün: [[8|32]]). Payda bütün öğrencilerin sayısı olmalıdır.",
    "Piyano sütununu okudun (15 öğrenci). İstenen keman sütunudur: 8 öğrenci."
  ],
  aciklama: `Grafikte önce bütünü, sonra istenen sütunu oku.
Adım 1: Bütün öğrenciler: 12 + 8 + 15 + 5 = 40.
Adım 2: Keman çalan öğrenci sayısı 8'dir.
Adım 3: Olasılık [[8|40]] = [[1|5]].
Sağlama: Diğer çalgıları çalanlar 32 kişidir; [[8|40]] + [[32|40]] = 1 olur.
Sık yapılan hata: Yanlış sütunu okumak ya da paydaya toplam yerine diğer sütunları koymak.
Cevap B.`
},
{
  id: "mat-ol-249",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: `Bir elektrikçinin kutusunda 60 ampul vardır ve bunlardan 51'i çalışmaktadır. Elektrikçi kutudan bakmadan bir ampul alacaktır.
**Buna göre alınan ampulün bozuk olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[17|3]]", "[[17|20]]", "[[3|17]]", "[[3|20]]"],
  dogru: 3,
  hatalar: [
    "Çalışanları bozuklara böldün: [[51|9]]. Olasılık 1'den büyük olamaz.",
    "Çalışan ampul olma olasılığını verdin ([[51|60]]). İstenen bozuk ampul olma olasılığıdır.",
    "Bozukları çalışanlara böldün: [[9|51]]. Payda bütün ampullerin sayısı (60) olmalıdır.",
    null
  ],
  aciklama: `Adım 1: Bozuk ampul sayısı 60 − 51 = 9'dur.
Adım 2: Olasılık [[9|60]].
Adım 3: 3 ile sadeleştir: [[9|60]] = [[3|20]].
Sağlama: Çalışan ampul olma olasılığı [[51|60]] = [[17|20]]; [[3|20]] + [[17|20]] = 1 olur.
Sık yapılan hata: Bozuk sayısını bulmayı unutup çalışan ampul sayısını kullanmak.
Cevap D.`
},
{
  id: "mat-ol-250",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: `Bir kırtasiyedeki kutuda yalnızca kırmızı ve siyah kalemler vardır. Kutudaki 12 kalem kırmızıdır. Kutudan rastgele çekilen bir kalemin kırmızı olma olasılığı [[3|7]]'dir.
**Buna göre kutuda toplam kaç kalem vardır?**`,
  gorsel: null,
  secenekler: ["4", "16", "28", "36"],
  dogru: 2,
  hatalar: [
    "12'yi 3'e bölüp bir parçanın değerini buldun; bu toplam değil, 1 parçadır. Toplam 7 parçadır.",
    "Siyah kalem sayısını buldun. İstenen kutudaki toplam kalem sayısıdır.",
    null,
    "12'yi 3 ile çarptın. Pay 3 parçayı gösterir; 1 parça 12 ÷ 3 = 4'tür."
  ],
  aciklama: `Olasılık [[3|7]] ise bütün 7 eş parçadır ve kırmızı kalemler bunun 3 parçasıdır.
Adım 1: 3 parça 12 kalem ise 1 parça 12 ÷ 3 = 4 kalemdir.
Adım 2: Toplam 7 parça olduğundan kalem sayısı 7 · 4 = 28'dir.
Sağlama: 28 kalemin 12'si kırmızıysa olasılık [[12|28]] = [[3|7]] olur.
Sık yapılan hata: Bir parçayı (4) ya da siyah kalem sayısını (16) cevap sanmak.
Cevap C.`
},
{
  id: "mat-ol-251",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: `Bir kavanozda aynı büyüklükte 3 mavi ve 5 beyaz bilye vardır. Kavanoza 2 mavi bilye daha atılmış, ardından kavanozdan bakmadan bir bilye alınacaktır.
**Buna göre alınan bilyenin mavi olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[5|8]]", "[[1|2]]", "[[2|5]]", "[[3|8]]"],
  dogru: 1,
  hatalar: [
    "Mavi sayısını 5 yaptın ama paydayı 8'de bıraktın. Toplam bilye sayısı da 10 olur.",
    null,
    "Eklenen mavi bilyeleri beyaz bilyelere böldün: [[2|5]]. Payda bütün bilyelerin sayısı olmalıdır.",
    "Bilye atılmadan önceki durumu kullandın. Eklenen 2 mavi bilye hem mavi sayısını hem toplam sayısını değiştirir."
  ],
  aciklama: `Bir değişiklikten sonra pay ve payda yeniden bulunur.
Adım 1: Eklemeden sonra mavi bilye sayısı 3 + 2 = 5'tir.
Adım 2: Toplam bilye sayısı 5 + 5 = 10'dur.
Adım 3: Olasılık [[5|10]] = [[1|2]].
Sağlama: Mavi olmayan 5 bilye vardır; [[5|10]] + [[5|10]] = 1 olur.
Sık yapılan hata: Eklenen bilyeyi yalnızca paya katıp paydayı güncellememek.
Cevap B.`
},
{
  id: "mat-ol-252",
  kazanim: "M.8.5.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Bir okulun oyun gecesinde kutuda 1'den 25'e kadar numaralandırılmış 25 özdeş top bulunmaktadır. Oyunu yöneten Tuna, kutuda yalnızca numarası 3'ün katı olan topları bırakıp diğer topları kutudan çıkarmıştır. Daha sonra kutuya bakmadan bir top çekilecek ve çekilen topun numarasına göre bir görev verilecektir.
**Buna göre bu çekilişte olası durumların sayısı kaçtır?**`,
  gorsel: null,
  secenekler: ["25", "9", "8", "3"],
  dogru: 2,
  hatalar: [
    "Kutudaki ilk topların sayısını aldın. Çıkarılan toplar artık çekilemez; yalnızca 3'ün katları kalmıştır.",
    "25 ÷ 3 = 8,33 sonucunu yukarı yuvarladın. 3'ün katları 3, 6, …, 24 olup 8 tanedir.",
    null,
    "Katı aranan sayıyı olası durum sayısı sandın. Olası durumlar kutuda kalan topların sayısıdır."
  ],
  aciklama: `Çekilişte yalnızca kutuda kalan toplar olası durum oluşturur; çıkarılan toplar çekilemez.
Adım 1: 1'den 25'e kadar 3'ün katlarını yaz: 3, 6, 9, 12, 15, 18, 21, 24.
Adım 2: Bu sayılar 8 tanedir; kutuda 8 top kalmıştır.
Sağlama: 25 ÷ 3 işleminin bölümü 8'dir (kalan 1); 3 · 8 = 24 ≤ 25 olduğu için sekizinci kat 24'tür.
Sık yapılan hata: Verilen koşulu kullanmayıp ilk top sayısını (25) olası durum saymak.
Cevap C.`
},
{
  id: "mat-ol-253",
  kazanim: "M.8.5.1.1",
  kademe: 2,
  zorluk: 3,
  soru: `Bir yayınevinin satış standındaki kitapların türlere göre sayıları aşağıdaki tabloda verilmiştir. Standın görevlisi, vitrine koymak için şiir kitaplarından 2 tanesini ayırıp bir kenara koymuştur. Kalan kitaplardan biri rastgele seçilip indirimli satışa sunulacaktır.
**Buna göre bu seçimde olası durumların sayısı kaçtır?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Kitap türü</th><th>Kitap sayısı</th></tr><tr><td>Roman</td><td>15</td></tr><tr><td>Öykü</td><td>12</td></tr><tr><td>Şiir</td><td>8</td></tr><tr><td>Deneme</td><td>5</td></tr></table>",
  secenekler: ["42", "40", "38", "4"],
  dogru: 2,
  hatalar: [
    "Ayrılan 2 kitabı toplama ekledin. Ayrılan kitaplar toplamdan çıkarılır.",
    "Ayrılan 2 kitabı çıkarmadın. Kenara konan kitaplar seçilemeyeceği için olası durumlara girmez.",
    null,
    "Tür sayısını olası durum saydın. Seçilebilecek her kitap ayrı bir durumdur."
  ],
  aciklama: `Seçilebilecek her kitap bir olası durumdur; ayrılan kitaplar artık seçilemez.
Adım 1: Tüm kitaplar: 15 + 12 + 8 + 5 = 40.
Adım 2: 2 şiir kitabı ayrıldığından seçilebilecek kitap sayısı 40 − 2 = 38'dir.
Sağlama: Şiir kitapları 8 − 2 = 6'ya düşer; 15 + 12 + 6 + 5 = 38 olur.
Sık yapılan hata: Tür sayısını (4) ya da ilk toplamı (40) olası durum saymak.
Cevap C.`
},
{
  id: "mat-ol-254",
  kazanim: "M.8.5.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Ayşe, okul şenliğindeki bir şans oyunu için aşağıdaki iki çarktan birini seçecektir. Her çarkın dilimleri kendi içinde eştir ve boyalı dilimler renkli olarak gösterilmiştir. Ayşe seçtiği çarkı bir kez çevirecek, ok boyalı bir dilimde durursa ödül kazanacaktır. Ayşe ödül kazanma şansı daha fazla olan çarkı seçmek istemektedir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: "<svg viewBox=\"0 0 620 316\" role=\"img\" aria-label=\"İki çark: Çark 1 sekiz eş dilimli ve üç dilimi boyalı, Çark 2 beş eş dilimli ve iki dilimi boyalı.\"><g><path d=\"M150 155 L150.00 43.00 A112 112 0 0 1 229.20 75.80 Z\" fill=\"var(--vurgu)\" fill-opacity=\"0.30\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M150 155 L229.20 75.80 A112 112 0 0 1 262.00 155.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M150 155 L262.00 155.00 A112 112 0 0 1 229.20 234.20 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M150 155 L229.20 234.20 A112 112 0 0 1 150.00 267.00 Z\" fill=\"var(--vurgu)\" fill-opacity=\"0.30\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M150 155 L150.00 267.00 A112 112 0 0 1 70.80 234.20 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M150 155 L70.80 234.20 A112 112 0 0 1 38.00 155.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M150 155 L38.00 155.00 A112 112 0 0 1 70.80 75.80 Z\" fill=\"var(--vurgu)\" fill-opacity=\"0.30\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M150 155 L70.80 75.80 A112 112 0 0 1 150.00 43.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><polygon points=\"140,10 160,10 150,38\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/></g><g transform=\"translate(320 0)\"><path d=\"M150 155 L150.00 43.00 A112 112 0 0 1 256.52 120.39 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M150 155 L256.52 120.39 A112 112 0 0 1 215.83 245.61 Z\" fill=\"var(--vurgu)\" fill-opacity=\"0.30\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M150 155 L215.83 245.61 A112 112 0 0 1 84.17 245.61 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M150 155 L84.17 245.61 A112 112 0 0 1 43.48 120.39 Z\" fill=\"var(--vurgu)\" fill-opacity=\"0.30\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M150 155 L43.48 120.39 A112 112 0 0 1 150.00 43.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><polygon points=\"140,10 160,10 150,38\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/></g><text x=\"150\" y=\"302\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Çark 1</text><text x=\"470\" y=\"302\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">Çark 2</text></svg>",
  secenekler: ["Çark 2'de ödül kazanma olasılığı, Çark 1'dekinden fazladır.", "Çark 1'de ödül kazanma olasılığı, Çark 2'dekinden fazladır.", "İki çarkta da ödül kazanma olasılığı birbirine eşittir.", "Boyasız dilim sayısı fazla olan çarkta ödül kazanma olasılığı daha fazladır."],
  dogru: 0,
  hatalar: [
    null,
    "Boyalı dilim sayısına (3 > 2) bakıp karar verdin. Dilim sayıları farklı olduğundan oranlar karşılaştırılmalıdır: [[3|8]] = 0,375 ve [[2|5]] = 0,4.",
    "Oranlar eşit değil: [[3|8]] = 0,375 iken [[2|5]] = 0,4'tür. Boyalı ve boyasız dilim farkı da eşit değildir.",
    "Boyasız dilim sayısına baktın. Ödül boyalı dilimde kazanıldığı için boyasız dilimlerin çokluğu şansı artırmaz; Çark 1'de 5, Çark 2'de 3 boyasız dilim vardır ama oran boyalı dilimlerle bulunur."
  ],
  aciklama: `Dilim sayıları farklı olduğunda boyalı dilim sayılarını doğrudan karşılaştırmak yetmez; olasılıklar (kesirler) karşılaştırılır.
Adım 1: Çark 1'de 8 dilimin 3'ü boyalıdır: olasılık [[3|8]].
Adım 2: Çark 2'de 5 dilimin 2'si boyalıdır: olasılık [[2|5]].
Adım 3: Paydaları 40 yap: [[3|8]] = [[15|40]], [[2|5]] = [[16|40]]. [[16|40]] > [[15|40]] olduğundan Çark 2'nin olasılığı fazladır.
Sağlama: Ondalık yazarsak 0,375 < 0,4 çıkar.
Sık yapılan hata: Boyalı dilimi çok olan çarkı seçmek.
Cevap A.`
},
{
  id: "mat-ol-255",
  kazanim: "M.8.5.1.2",
  kademe: 2,
  zorluk: 3,
  soru: `Aşağıdaki çark 6 eş dilime ayrılmıştır ve dilimlere 1, 2, 2, 3, 3, 3 sayıları yazılmıştır. Çark çevrilecek ve okun gösterdiği dilimdeki sayı kaydedilecektir.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: "<svg viewBox=\"0 0 300 280\" role=\"img\" aria-label=\"6 eş dilimli çark; dilimlerde 1, 2, 2, 3, 3, 3 yazıyor.\"><path d=\"M150 155 L150.00 43.00 A112 112 0 0 1 246.99 99.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"188.1\" y=\"94.0\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">1</text><path d=\"M150 155 L246.99 99.00 A112 112 0 0 1 246.99 211.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"226.2\" y=\"160.0\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">2</text><path d=\"M150 155 L246.99 211.00 A112 112 0 0 1 150.00 267.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"188.1\" y=\"226.0\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">2</text><path d=\"M150 155 L150.00 267.00 A112 112 0 0 1 53.01 211.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"111.9\" y=\"226.0\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">3</text><path d=\"M150 155 L53.01 211.00 A112 112 0 0 1 53.01 99.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"73.8\" y=\"160.0\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">3</text><path d=\"M150 155 L53.01 99.00 A112 112 0 0 1 150.00 43.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"111.9\" y=\"94.0\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">3</text><polygon points=\"140,10 160,10 150,38\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/></svg>",
  secenekler: ["Çift sayı kaydedilme olasılığı, tek sayı kaydedilme olasılığından fazladır.", "2'den büyük sayı kaydedilme olasılığı, 2'den küçük sayı kaydedilme olasılığının 2 katıdır.", "Asal sayı kaydedilme olasılığı, [[1|2]]'ye eşittir.", "Tek sayı kaydedilme olasılığı, çift sayı kaydedilme olasılığının 2 katıdır."],
  dogru: 3,
  hatalar: [
    "Çift sayılar iki dilimde (2, 2), tek sayılar dört dilimde (1, 3, 3, 3) yazılıdır; tek sayı olasılığı daha fazladır.",
    "2'den büyük sayı 3 dilimde (3, 3, 3), 2'den küçük sayı 1 dilimde (1) yazılıdır; oran 3 kattır, 2 kat değildir.",
    "Asal sayılar 2 ve 3'tür ve toplam 5 dilimde yazılıdır; olasılık [[5|6]]'dır. 1 asal sayı olmadığı için o dilim dışarıda kalır.",
    null
  ],
  aciklama: `Çark eş dilimli olduğundan her dilimin şansı eşittir; bir olayın olasılığı, olaya uyan dilim sayısının 6'ya oranıdır.
Adım 1: Dilimleri say: tek sayılar 1, 3, 3, 3 olmak üzere 4 dilim; çift sayılar 2, 2 olmak üzere 2 dilim.
Adım 2: Tek sayı olasılığı [[4|6]], çift sayı olasılığı [[2|6]]'dır; [[4|6]], [[2|6]]'nın 2 katıdır.
Adım 3: Diğer ifadeleri dene: 2'den büyük (3 dilim) olasılığı, 2'den küçük (1 dilim) olasılığının 3 katıdır; asal sayılar 2 ve 3 olup 5 dilimdir, olasılık [[5|6]] eder.
Sağlama: Tek ve çift sayı olasılıkları toplamı [[4|6]] + [[2|6]] = 1 eder.
Sık yapılan hata: 1'i asal saymak ya da dilim sayılarını sayıp karşılaştırmadan karar vermek.
Cevap D.`
},
{
  id: "mat-ol-256",
  kazanim: "M.8.5.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Bir okul servisinin şoförü, geçmiş kayıtlara bakarak servisin bir sabah okula zamanında varma olasılığını 0,85 olarak hesaplamıştır. Servisle gelen Efe, bu bilgiyi duyunca olasılığın bir olayın olma şansını gösteren bir ölçüm olduğunu hatırlamıştır.
**Buna göre aşağıdaki yorumlardan hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["Zamanında varma şansı, geç kalma şansından fazladır; yine de servisin geç kalması mümkündür.", "Olasılık 1'den küçük olduğundan servisin zamanında varması beklenen bir durum sayılmaz.", "Servis 100 sabah çalışırsa bu sabahların tam 85'inde zamanında varır, 15'inde geç kalır.", "Geç kalma olasılığı 0,85 olduğundan servis zamanında varmaktan çok geç kalmaya yatkındır."],
  dogru: 0,
  hatalar: [
    null,
    "0,85 sayısı 0,5'ten büyüktür; olayın olma şansı yüksektir. 1'den küçük olmak olayın beklenmemesi anlamına gelmez, yalnızca kesin olmadığını gösterir.",
    "Olasılık, olayın tekrar sayısını kesin olarak belirlemez; 100 sabahın tam 85'inde zamanında varması gerekmez. 85 civarı beklenir, sonuç 83 ya da 88 de olabilir.",
    "0,85 zamanında varma olasılığıdır. Geç kalma olasılığı 1 − 0,85 = 0,15'tir."
  ],
  aciklama: `Olasılık, bir olayın olma şansının ölçüsüdür: 0 imkânsız, 1 kesin olayı gösterir; arada kalan değerler olayın az ya da çok olası olduğunu söyler.
Adım 1: Zamanında varma olasılığı 0,85'tir; geç kalma olasılığı 1 − 0,85 = 0,15'tir.
Adım 2: 0,85 > 0,15 olduğundan zamanında varma şansı geç kalma şansından fazladır.
Adım 3: 0,85 sayısı 1 değildir; bu yüzden zamanında varış kesin değildir, servis geç kalabilir.
Sık yapılan hata: Olasılığı kesin bir sayıma çevirmek ya da olma ile olmama olasılıklarını karıştırmak.
Cevap A.`
},
{
  id: "mat-ol-257",
  kazanim: "M.8.5.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Bir ofisin dolabında boyutları aynı olan 16 klasör vardır. Klasörlerin 8'i mavidir; kırmızı klasörlerin sayısı mavi klasörlerin sayısından 2 azdır, geriye kalan klasörler sarıdır. Sema, hangi klasörü alacağına bakmadan karar verip dolaptan bir klasör çekecektir.
**Buna göre Sema'nın sarı klasörü çekme olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[7|8]]", "[[1|2]]", "[[1|7]]", "[[1|8]]"],
  dogru: 3,
  hatalar: [
    "Sarı olmayan klasörlerin (14 tane) olasılığını verdin. İstenen sarı klasör çekme olasılığıdır.",
    "Mavi klasör çekme olasılığını verdin ([[8|16]]). Sarı klasörler mavilerden çok daha azdır.",
    "Sarı klasör sayısını (2) sarı olmayan klasörlere (14) böldün: [[2|14]] = [[1|7]]. Payda bütün klasörlerin sayısı (16) olmalıdır.",
    null
  ],
  aciklama: `Önce sarı klasörlerin sayısı bulunur; olasılık, sarı klasör sayısının bütün klasörlere oranıdır.
Adım 1: Kırmızı klasör sayısı 8 − 2 = 6'dır.
Adım 2: Sarı klasör sayısı 16 − 8 − 6 = 2'dir.
Adım 3: Olasılık [[2|16]] = [[1|8]] olur.
Sağlama: 8 mavi + 6 kırmızı + 2 sarı = 16 klasör eder.
Sık yapılan hata: Payda olarak bütün klasörler yerine diğer klasörlerin sayısını almak.
Cevap D.`
},
{
  id: "mat-ol-258",
  kazanim: "M.8.5.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Bir bilim şenliğindeki oyun çarkı yalnızca kırmızı ve mavi olmak üzere iki dilimden oluşmaktadır. Çark, okun kırmızı dilimde durma olasılığı [[5|12]] olacak biçimde boyanmıştır. Dilimler eş değildir ve olasılıklar dilimlerin merkez açılarına göre belirlenmiştir.
**Buna göre mavi dilimin merkez açısı kaç derecedir?**`,
  gorsel: null,
  secenekler: ["210°", "150°", "105°", "30°"],
  dogru: 0,
  hatalar: [
    null,
    "Kırmızı dilimin açısını buldun ([[5|12]] · 360°). İstenen mavi dilimin açısıdır.",
    "Olmama olasılığı [[7|12]]'yi 360° yerine 180° ile çarptın. Çarkın tamamı 360°'dir.",
    "Bir parçanın ([[1|12]]) açısını verdin. Mavi dilim, 12 parçanın 7'sini kaplar."
  ],
  aciklama: `Eş olmayan dilimlerde bir dilimin olasılığı, merkez açısının 360°'ye oranıdır; yani açı = olasılık · 360°.
Adım 1: Mavi dilimin olasılığı kırmızı dilimin olmama olasılığıdır: 1 − [[5|12]] = [[7|12]].
Adım 2: Mavi dilimin açısı [[7|12]] · 360° = 210°.
Sağlama: Kırmızı dilimin açısı [[5|12]] · 360° = 150°; 150° + 210° = 360° olur.
Sık yapılan hata: Kırmızı dilimin açısını mavi dilimin açısı sanmak.
Cevap A.`
},
{
  id: "mat-ol-259",
  kazanim: "M.8.5.1.3",
  kademe: 2,
  zorluk: 3,
  soru: `Bir pul koleksiyoncusunun albümünde 4 farklı ülkeden her birine ait 6'şar pul bulunmaktadır; bütün pullar aynı boyuttadır. Koleksiyoncu, Kanada pullarından 2'sini bir arkadaşına vermiş, ardından İspanya'dan 3 yeni pul alarak albüme eklemiştir. Daha sonra sergi vitrinine koyacağı bir pulu seçmek için pulları karıştırıp bakmadan birini alacaktır.
**Buna göre seçilen pulun İspanya'ya ait olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[3|8]]", "[[9|25]]", "[[1|4]]", "[[6|25]]"],
  dogru: 1,
  hatalar: [
    "Payda olarak 24'ü aldın ([[9|24]] = [[3|8]]). Kanada'dan verilen 2 pul çıkarılmalı, eklenen 3 pul katılmalıdır; toplam 25'tir.",
    null,
    "İlk durumu kullandın ([[6|24]] = [[1|4]]). Pul verme ve alma sonrasında İspanya'nın 9 pulu vardır ve toplam 25'tir.",
    "Paya İspanya'nın eski pul sayısını (6) yazdın. Eklenen 3 pul da İspanya'ya aittir; pay 9 olmalıdır."
  ],
  aciklama: `Her pulun seçilme şansı eşittir; olasılık, İspanya pullarının sayısının bütün pullara oranıdır. Değişiklikten sonra pay ve payda yeniden bulunur.
Adım 1: Başlangıçta 4 · 6 = 24 pul vardır.
Adım 2: Kanada'dan 2 pul çıkınca 22, İspanya'dan 3 pul eklenince 25 pul olur.
Adım 3: İspanya pulları 6 + 3 = 9 tanedir.
Adım 4: Olasılık [[9|25]] olur.
Sağlama: Kanada 4, İspanya 9 ve diğer iki ülke 6 + 6 = 12 pul eder; 4 + 9 + 12 = 25 olur.
Sık yapılan hata: Payı ya da paydayı değişiklikten önceki değerlerle bırakmak.
Cevap B.`
},
{
  id: "mat-ol-260",
  kazanim: "M.8.5.1.4",
  kademe: 2,
  zorluk: 3,
  soru: `Bir basketbol antrenmanında antrenör, Deniz'in serbest atışlarını izleyerek istatistik tutmuştur. Antrenör, Deniz'in bir serbest atışta sayı yapma olasılığının, sayı yapamama olasılığının 3 katı olduğunu hesaplamıştır.
**Buna göre Deniz'in bir serbest atışta sayı yapma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["3", "[[3|4]]", "[[1|3]]", "[[1|4]]"],
  dogru: 1,
  hatalar: [
    "Sayı yapma olasılığının 3 olduğunu yazdın. Olasılık 1'den büyük olamaz.",
    null,
    "Oranı olasılık sandın. Sayı yapma ile yapamama olasılıkları toplamı 1 olmalıdır; [[1|3]] ile [[3|3]] bu toplamı vermez.",
    "Sayı yapamama olasılığını verdin. Sayı yapma olasılığı bunun 3 katıdır: 3 · [[1|4]]."
  ],
  aciklama: `Bir olayın olma ve olmama olasılıklarının toplamı 1'dir.
Adım 1: Sayı yapamama olasılığına 1 parça dersek sayı yapma olasılığı 3 parçadır.
Adım 2: Toplam 1 + 3 = 4 parçadır ve toplam olasılık 1 olduğundan her parça [[1|4]]'tür.
Adım 3: Sayı yapma olasılığı 3 · [[1|4]] = [[3|4]].
Sağlama: [[3|4]] + [[1|4]] = 1 ve [[3|4]], [[1|4]]'ün 3 katıdır.
Sık yapılan hata: Sayı yapamama olasılığını cevap sanmak.
Cevap B.`
},
{
  id: "mat-ol-261",
  kazanim: "M.8.5.1.4",
  kademe: 2,
  zorluk: 3,
  soru: `Bir oyun masasındaki kutuda aynı büyüklükte 12 kart vardır. Kartların en az biri kırmızıdır ve en az biri kırmızı değildir. Oyunu yöneten kişi kutudan bakmadan bir kart çekecektir.
**Buna göre çekilen kartın kırmızı olma olasılığı en fazla kaç olabilir?**`,
  gorsel: null,
  secenekler: ["[[12|11]]", "1", "[[11|12]]", "[[1|12]]"],
  dogru: 2,
  hatalar: [
    "Pay ile paydayı yanlış kurdun. Olasılık 1'den büyük olamaz; [[12|11]] 1'den büyüktür.",
    "Bütün kartların kırmızı olabileceğini düşündün; ama en az bir kart kırmızı değildir, bu yüzden olasılık 1 olamaz.",
    null,
    "En az olabilecek değeri verdin (tek kırmızı kart). İstenen en fazla olabilecek değerdir."
  ],
  aciklama: `Kırmızı kart sayısı arttıkça olasılık artar; ama kırmızı olmayan en az 1 kart kalmalıdır.
Adım 1: Kırmızı kart sayısı en çok 12 − 1 = 11 olabilir.
Adım 2: Bu durumda olasılık [[11|12]] olur.
Sağlama: 12 kartın hepsi kırmızı olsaydı olasılık 1 olurdu; ama bu durum koşula aykırıdır, o yüzden [[11|12]] en büyük değerdir.
Sık yapılan hata: Kesin olayı (olasılık 1) seçmek.
Cevap C.`
},
{
  id: "mat-ol-262",
  kazanim: "M.8.5.1.4",
  kademe: 2,
  zorluk: 3,
  soru: `Aşağıdaki çarkın 8 dilimi eştir. Dilimlerden 3'ü mavi (M), 3'ü sarı (S) ve 2'si beyazdır (B). Öğretmen, çarkın bazı dilimlerinin rengini değiştirerek okun sarı bir dilimde durmasını kesin olay hâline getirmek istemektedir. Dilim sayısı değiştirilmeyecektir.
**Bunun için en az kaç dilimin rengi sarıya boyanmalıdır?**`,
  gorsel: "<svg viewBox=\"0 0 300 280\" role=\"img\" aria-label=\"8 eş dilimli çark: 3 mavi (M), 3 sarı (S), 2 beyaz (B) dilim.\"><path d=\"M150 155 L150.00 43.00 A112 112 0 0 1 229.20 75.80 Z\" fill=\"var(--vurgu)\" fill-opacity=\"0.30\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"179.1\" y=\"89.6\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">M</text><path d=\"M150 155 L229.20 75.80 A112 112 0 0 1 262.00 155.00 Z\" fill=\"var(--vurgu2)\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"220.4\" y=\"130.9\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">S</text><path d=\"M150 155 L262.00 155.00 A112 112 0 0 1 229.20 234.20 Z\" fill=\"var(--vurgu)\" fill-opacity=\"0.30\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"220.4\" y=\"189.1\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">M</text><path d=\"M150 155 L229.20 234.20 A112 112 0 0 1 150.00 267.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"179.1\" y=\"230.4\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">B</text><path d=\"M150 155 L150.00 267.00 A112 112 0 0 1 70.80 234.20 Z\" fill=\"var(--vurgu2)\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"120.9\" y=\"230.4\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">S</text><path d=\"M150 155 L70.80 234.20 A112 112 0 0 1 38.00 155.00 Z\" fill=\"var(--vurgu)\" fill-opacity=\"0.30\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"79.6\" y=\"189.1\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">M</text><path d=\"M150 155 L38.00 155.00 A112 112 0 0 1 70.80 75.80 Z\" fill=\"var(--vurgu2)\" fill-opacity=\"0.35\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"79.6\" y=\"130.9\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">S</text><path d=\"M150 155 L70.80 75.80 A112 112 0 0 1 150.00 43.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"120.9\" y=\"89.6\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">B</text><polygon points=\"140,10 160,10 150,38\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/></svg>",
  secenekler: ["8", "5", "3", "2"],
  dogru: 1,
  hatalar: [
    "Bütün dilimleri boyamayı düşündün. Zaten sarı olan 3 dilimin boyanmasına gerek yoktur.",
    null,
    "Sarı dilim sayısını verdin. Kesin olay için sarı olmayan her dilim sarıya boyanmalıdır.",
    "Yalnızca beyaz dilimleri boyamayı düşündün. Mavi dilimler de sarıya boyanmazsa ok mavide durabilir."
  ],
  aciklama: `Kesin olay, olasılığı 1 olan olaydır; yani tüm dilimlerin sarı olması gerekir.
Adım 1: Sarı olmayan dilimler mavi ve beyaz olanlardır: 3 + 2 = 5 dilim.
Adım 2: Bu 5 dilim sarıya boyanırsa 8 dilimin 8'i sarı olur ve olasılık [[8|8]] = 1 olur.
Sağlama: 5'ten az dilim boyanırsa en az bir mavi ya da beyaz dilim kalır ve olasılık 1'den küçük olur.
Sık yapılan hata: Zaten sarı olan dilimleri de boyanacaklar arasında saymak.
Cevap B.`
},
{
  id: "mat-ol-263",
  kazanim: "M.8.5.1.4",
  kademe: 2,
  zorluk: 3,
  soru: `Bir fırının tepsisinde yalnızca susamlı olan 6 özdeş simit vardır. Fırın çalışanı tepsiden bakmadan bir simit alacaktır. Çırak, bu deney hakkında dört ifade söylemiştir.
**Buna göre çırağın söylediği ifadelerden hangisi __yanlıştır__?**`,
  gorsel: null,
  secenekler: ["Susamlı simit alma olasılığı 1'dir.","Susamsız simit alınması imkânsız bir olaydır.","Susamsız simit alma olasılığı 0'dır.","Susamlı simit alma olasılığı 0'dır."],
  dogru: 3,
  hatalar: [
    "Bu ifade doğrudur: Tepsideki bütün simitler susamlı olduğundan olay kesindir ve olasılığı 1'dir.",
    "Bu ifade doğrudur: Susamsız simit hiç yoktur; bu olay imkânsızdır.",
    "Bu ifade doğrudur: Tepside susamsız simit olmadığından olay imkânsızdır ve olasılığı 0'dır.",
    null
  ],
  aciklama: "Kesin olayın olasılığı 1, imkânsız olayın olasılığı 0'dır; bir olayın olma ve olmama olasılıklarının toplamı 1 eder.\nAdım 1: Bütün simitler susamlı olduğundan susamlı simit alma olasılığı [[6|6]] = 1'dir.\nAdım 2: Susamsız simit hiç olmadığından olasılığı 0'dır ve olay imkânsızdır.\nAdım 3: Susamlı simit alma kesin bir olaydır; olasılığı 0 değil 1'dir. \"0'dır\" diyen ifade yanlıştır.\nSağlama: 1 + 0 = 1 olduğundan olma ve olmama olasılıkları toplamı da tutarlıdır.\nSık yapılan hata: Kesin olayın olasılığını imkânsız olayınkiyle karıştırmak ya da soruda yanlış ifade istendiğini unutmak.\nCevap D."
},
{
  id: "mat-ol-264",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: `Bir okul kulübü, yeni üye kartlarını 20'den 59'a kadar (20 ve 59 dâhil) numaralandırmıştır. Her numaradan bir kart vardır. Kartlar bir torbaya konup karıştırılacak ve biri rastgele çekilecektir. Çekilen kartın numarası hem 3'e hem 5'e tam bölünüyorsa kart sahibi hediye kazanacaktır.
**Buna göre bir kartın hediye kazanma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[1|20]]", "[[1|5]]", "[[13|40]]", "[[21|40]]"],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca 5'e bölünenleri saydın (8 kart). Hem 3'e hem 5'e bölünmesi için 15'in katı olmalıdır.",
    "Yalnızca 3'e bölünenleri saydın (13 kart). Hem 3'e hem 5'e bölünmesi için 15'in katı olmalıdır.",
    "İki koşuldan birini sağlayanları topladın (13 + 8 = 21). İki koşul birlikte aranıyor; 15'in katları sayılmalıdır."
  ],
  aciklama: `Hem 3'e hem 5'e bölünen sayılar, 3 ile 5'in ortak katları yani 15'in katlarıdır.
Adım 1: Kart sayısı 59 − 20 + 1 = 40'tır.
Adım 2: 20 ile 59 arasında 15'in katları 30 ve 45'tir; 2 kart vardır.
Adım 3: Olasılık [[2|40]] = [[1|20]].
Sağlama: 60 sayısı aralığın dışında kaldığından 15'in katları 30 ve 45'ten ibarettir.
Sık yapılan hata: "Hem … hem" koşulunu "ya … ya da" gibi okuyup sayıları toplamak.
Cevap A.`
},
{
  id: "mat-ol-265",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: `Bir resim sergisinde 31'den 50'ye kadar (31 ve 50 dâhil) numaralandırılmış 20 tablo sergilenmektedir. Sergi sonunda numaraları özdeş kartlara yazılıp bir kutuya konan tablolardan biri rastgele çekilecek ve bir okula bağışlanacaktır.
**Buna göre bağışlanacak tablonun numarasının asal sayı olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[1|2]]", "[[3|10]]", "[[1|4]]", "[[1|5]]"],
  dogru: 2,
  hatalar: [
    "Tek sayıları asal sandın (10 tek sayı). Tek sayıların hepsi asal değildir; örneğin 33 = 3 · 11.",
    "49'u asal saydın (6 asal buldun). 49 = 7 · 7 olduğundan asal değildir.",
    null,
    "Asal sayılardan birini atladın (4 asal buldun). 31, 37, 41, 43 ve 47 olmak üzere 5 asal sayı vardır."
  ],
  aciklama: `Asal sayı, 1 ve kendisinden başka pozitif böleni olmayan 1'den büyük sayıdır.
Adım 1: Tablo sayısı 50 − 31 + 1 = 20'dir.
Adım 2: 31'den 50'ye kadar asal sayılar 31, 37, 41, 43 ve 47'dir; 5 tanedir.
Adım 3: Olasılık [[5|20]] = [[1|4]].
Sağlama: Aralıktaki diğer tek sayılar bölünebilir: 33 = 3 · 11, 35 = 5 · 7, 39 = 3 · 13, 45 = 5 · 9, 49 = 7 · 7.
Sık yapılan hata: 49'u asal saymak ya da asal sayılardan birini atlamak.
Cevap C.`
},
{
  id: "mat-ol-266",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: `Bir çocuk korosunda ses gruplarına göre öğrenci sayıları aşağıdaki tabloda verilmiştir; bas grubundaki öğrenci sayısı yazılmamıştır. Koro şefi öğrencilerden birini rastgele seçip solo yaptıracaktır. Seçilen öğrencinin bas grubundan olma olasılığı [[1|8]]'dir.
**Buna göre bas grubunda kaç öğrenci vardır?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Ses grubu</th><th>Öğrenci sayısı</th></tr><tr><td>Soprano</td><td>12</td></tr><tr><td>Alto</td><td>9</td></tr><tr><td>Tenor</td><td>7</td></tr><tr><td>Bas</td><td>?</td></tr></table>",
  secenekler: ["20", "8", "4", "3"],
  dogru: 2,
  hatalar: [
    "28 − 8 = 20 işlemini yaptın. Olasılığın paydası 8, öğrenci sayısı değildir.",
    "Olasılıktaki 8 sayısını bas öğrenci sayısı sandın. Bu sayı, bas öğrencilerin toplamın kaçta kaçı olduğunu gösterir.",
    null,
    "Bas öğrencileri toplama katmadan 28'i 8'e bölüp aşağı yuvarladın. Bas öğrenciler de toplam sayıya girer."
  ],
  aciklama: `Bas grubundaki öğrenci sayısına x diyelim. Bütün öğrenci sayısı 12 + 9 + 7 + x = 28 + x'tir.
Adım 1: Olasılık [[x|28 + x]] = [[1|8]] olmalıdır.
Adım 2: Bas öğrenciler toplamın 1 parçası ise diğer öğrenciler 7 parçadır. 7 parça 28 öğrenci ise 1 parça 28 ÷ 7 = 4 öğrencidir.
Adım 3: Bas grubunda 4 öğrenci vardır.
Sağlama: Toplam 32 öğrenci olur ve olasılık [[4|32]] = [[1|8]] çıkar.
Sık yapılan hata: Olasılıktaki paydayı doğrudan öğrenci sayısı sanmak.
Cevap C.`
},
{
  id: "mat-ol-267",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: `Bir dil kursunda sayısı 30'dan fazla, 40'tan az olan öğrenci eğitim görmektedir. Kurs müdürü bu öğrencilerden birini rastgele seçecektir. Seçilen öğrencinin Almanca öğrenen bir öğrenci olma olasılığı [[2|9]]'dur.
**Buna göre bu kursta Almanca öğrenen kaç öğrenci vardır?**`,
  gorsel: null,
  secenekler: ["2", "8", "9", "36"],
  dogru: 1,
  hatalar: [
    "Olasılığın payını (2) öğrenci sayısı sandın. Bu pay, sadeleşmiş kesirdeki paydır; gerçek sayı toplamın 9'a bölümünün 2 katıdır.",
    null,
    "Olasılığın paydasını Almanca öğrenen öğrenci sayısı sandın. Payda bütün öğrencilerin sayısına karşılık gelir.",
    "Kurstaki toplam öğrenci sayısını buldun. İstenen Almanca öğrenen öğrenci sayısıdır."
  ],
  aciklama: `Olasılık [[2|9]] ise toplam öğrenci sayısı 9'un katıdır; Almanca öğrenenler 2'nin aynı katı kadardır.
Adım 1: 30 ile 40 arasında 9'un katı 36'dır (9 · 4).
Adım 2: Toplam 36 öğrenci olduğuna göre Almanca öğrenenler 36 ÷ 9 · 2 = 8 kişidir.
Sağlama: [[8|36]] = [[2|9]] olur.
Sık yapılan hata: Toplam öğrenci sayısını (36) cevap sanmak.
Cevap B.`
},
{
  id: "mat-ol-268",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: `Bir matematik öğretmeni, deneme sınavına giren 8 öğrencinin puanlarını aşağıdaki tabloda göstermiştir. Öğretmen, bu öğrencilerden birini rastgele seçip tahtaya kaldıracaktır.
**Buna göre seçilen öğrencinin puanının, bu 8 öğrencinin puan ortalamasından yüksek olma olasılığı kaçtır?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Öğrenci</th><th>Ada</th><th>Bora</th><th>Ceren</th><th>Deniz</th><th>Efe</th><th>Gül</th><th>Hakan</th><th>İpek</th></tr><tr><td>Puan</td><td>50</td><td>55</td><td>60</td><td>65</td><td>70</td><td>75</td><td>85</td><td>100</td></tr></table>",
  secenekler: ["[[3|8]]", "[[1|2]]", "[[5|8]]", "[[7|8]]"],
  dogru: 0,
  hatalar: [
    null,
    "Ortalamaya eşit olan puanı (70) da ortalamadan yüksek saydın. \"Yüksek\" ifadesi eşiti içermez.",
    "Ortalamaya eşit ya da düşük olanları saydın. İstenen ortalamadan yüksek puanlardır.",
    "Yalnızca ortalamaya eşit olan puanı dışarıda bıraktın. Ortalamadan düşük puanlar da yüksek değildir."
  ],
  aciklama: `Önce ortalamayı bul, sonra ortalamadan yüksek olanları say.
Adım 1: Ortalama = (50 + 55 + 60 + 65 + 70 + 75 + 85 + 100) ÷ 8 = 560 ÷ 8 = 70.
Adım 2: 70'ten yüksek puanlar 75, 85 ve 100'dür; 3 öğrenci vardır.
Adım 3: Olasılık [[3|8]].
Sağlama: Ortalamadan düşük 4 öğrenci (50, 55, 60, 65) ve ortalamaya eşit 1 öğrenci (70) vardır; 3 + 4 + 1 = 8 olur.
Sık yapılan hata: Ortalamaya eşit puanı "yüksek" saymak.
Cevap A.`
},
{
  id: "mat-ol-269",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: `Bir tepside aynı büyüklükte 7 peynirli ve 9 patatesli börek vardır. Aile bireyleri tepsideki patatesli böreklerden bir kısmını yemiştir. Sonra tepsiden bakmadan bir börek alınacaktır ve bu böreğin peynirli olma olasılığı [[1|2]] olmuştur.
**Buna göre kaç patatesli börek yenmiştir?**`,
  gorsel: null,
  secenekler: ["2", "7", "9", "14"],
  dogru: 0,
  hatalar: [
    null,
    "Kalan patatesli börek sayısını buldun. İstenen yenen patatesli börek sayısıdır.",
    "Başlangıçtaki patatesli börek sayısını yazdın. İstenen yenen börek sayısıdır.",
    "Kalan toplam börek sayısını buldun. İstenen yenen patatesli börek sayısıdır."
  ],
  aciklama: `Peynirli börekler değişmediği için 7'dir. Olasılık [[1|2]] ise peynirli börekler toplamın yarısıdır.
Adım 1: 7 börek toplamın yarısı ise tepside 7 · 2 = 14 börek kalmıştır.
Adım 2: Kalan 14 böreğin 7'si peynirli, 7'si patatesli olur.
Adım 3: Başlangıçta 9 patatesli börek vardı; 9 − 7 = 2 patatesli börek yenmiştir.
Sağlama: İlk toplam 16, kalan toplam 14 olduğundan 2 börek eksilmiştir ve olasılık [[7|14]] = [[1|2]] olur.
Sık yapılan hata: Kalan sayıyı yenen sayı sanmak.
Cevap A.`
},
{
  id: "mat-ol-270",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: `Bir pazar tezgâhındaki kasada 3 çürük ve 12 sağlam elma vardır; elmaların hepsi aynı büyüklüktedir. Satıcı kasadan 2 çürük elmayı ve 1 sağlam elmayı ayırıp bir kenara koymuştur. Daha sonra kasada kalan elmalardan biri bakmadan alınacaktır.
**Buna göre alınan elmanın çürük olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[1|4]]", "[[1|5]]", "[[1|11]]", "[[1|12]]"],
  dogru: 3,
  hatalar: [
    "Çürük elma sayısını 3 bırakıp ([[3|12]] = [[1|4]]) yalnızca toplamı güncelledin. Ayrılan 2 çürük elma da çürük sayısından düşülmelidir.",
    "Ayırma işleminden önceki durumu kullandın ([[3|15]] = [[1|5]]). Ayrılan elmalar artık alınamaz; pay ve payda yeniden bulunur.",
    "Çürük elmayı yalnızca sağlam elmalara böldün ([[1|11]]). Payda kasadaki bütün elmaların sayısı (12) olmalıdır.",
    null
  ],
  aciklama: `Olasılık, çürük elma sayısının kasada kalan bütün elmalara oranıdır; ayrılan elmalar artık alınamayacağı için pay ve payda yeniden bulunur.
Adım 1: Kalan çürük elma sayısı 3 − 2 = 1'dir.
Adım 2: Kalan sağlam elma sayısı 12 − 1 = 11'dir.
Adım 3: Kasada 1 + 11 = 12 elma vardır; olasılık [[1|12]] olur.
Sağlama: Kalan elmalar 1 çürük ve 11 sağlamdır; [[1|12]] + [[11|12]] = 1 eder.
Sık yapılan hata: Pay ya da paydadan yalnızca birini güncellemek.
Cevap D.`
},
{
  id: "mat-ol-271",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: `Bir takı atölyesindeki kavanozda kırmızı, mavi ve yeşil boncuklar vardır; boncukların hepsi aynı büyüklüktedir. Kavanozdaki boncuk sayısı 30'dan azdır. Kavanozdan rastgele alınan bir boncuğun kırmızı olma olasılığı [[2|5]], mavi olma olasılığı ise [[1|4]]'tür.
**Buna göre kavanozda kaç boncuk vardır?**`,
  gorsel: null,
  secenekler: ["9", "10", "20", "40"],
  dogru: 2,
  hatalar: [
    "Paydaları topladın (5 + 4). Toplam boncuk sayısı, iki paydanın ortak katıdır.",
    "10 sayısı 4'e bölünmez. Toplam boncuk sayısı hem 5'in hem 4'ün katı olmalıdır.",
    null,
    "5 ve 4'ün ortak katını buldun ama \"30'dan az\" koşulunu kullanmadın. 40 de 20'nin katıdır ama 30'dan fazladır."
  ],
  aciklama: `Olasılıkların paydaları 5 ve 4 ise toplam boncuk sayısı hem 5'in hem 4'ün katıdır; yani 5 ile 4'ün ortak katıdır.
Adım 1: 5 ile 4'ün en küçük ortak katı 20'dir; ortak katlar 20, 40, 60, … olur.
Adım 2: Boncuk sayısı 30'dan az olduğundan toplam 20'dir.
Sağlama: 20 boncuğun [[2|5]]'si 8 kırmızı, [[1|4]]'ü 5 mavi olur; 7 boncuk da yeşildir.
Sık yapılan hata: Paydaları toplamak ya da "30'dan az" koşulunu kullanmamak.
Cevap C.`
},
{
  id: "mat-ol-272",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: `Bir çocuk kulübünde üyelere 10'dan 99'a kadar iki basamaklı numaralar verilmiştir. Her numaradan bir üye vardır. Üyelerin numaraları özdeş kâğıtlara yazılıp bir kutuya konmuş ve kutudan bir kâğıt çekilecektir.
**Buna göre çekilen numaranın rakamları toplamının 9 olma olasılığı kaçtır?**`,
  gorsel: null,
  secenekler: ["[[4|45]]", "[[1|11]]", "[[1|10]]", "[[1|9]]"],
  dogru: 2,
  hatalar: [
    "90 numarasını saymayı unuttun (8 numara buldun). 9 + 0 = 9 olduğundan 90 da koşulu sağlar.",
    "Kâğıt sayısını 99 saydın. 10'dan 99'a kadar 90 numara vardır.",
    null,
    "09 numarasını da sayıp 10 numara buldun. 09 iki basamaklı bir sayı değildir."
  ],
  aciklama: `Önce kâğıt sayısını, sonra koşulu sağlayan numaraları bul.
Adım 1: Numara sayısı 99 − 10 + 1 = 90'dır.
Adım 2: Rakamları toplamı 9 olanlar 18, 27, 36, 45, 54, 63, 72, 81 ve 90'dır; 9 numara vardır.
Adım 3: Olasılık [[9|90]] = [[1|10]].
Sağlama: Onlar basamağı 1, 2, …, 9 olan her sayı için birler basamağı 9'a tamamlayan tek bir rakam vardır; 9 sayı eder.
Sık yapılan hata: 90'ı atlamak ya da 09'u iki basamaklı saymak.
Cevap C.`
},
{
  id: "mat-ol-273",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: `Bir spor okulunda branşlara ve yaşlara göre kayıtlı öğrenci sayıları aşağıdaki tabloda verilmiştir. Her öğrenci yalnızca bir branşa kayıtlıdır. Okul müdürü öğrencilerden birini rastgele seçerek ona forma hediye edecektir.
**Buna göre seçilen öğrencinin 11 yaşında olma olasılığı kaçtır?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Branş</th><th>10 yaş</th><th>11 yaş</th><th>12 yaş</th></tr><tr><td>Yüzme</td><td>8</td><td>12</td><td>10</td></tr><tr><td>Tenis</td><td>6</td><td>9</td><td>5</td></tr><tr><td>Basketbol</td><td>11</td><td>7</td><td>12</td></tr></table>",
  secenekler: ["[[3|8]]", "[[7|20]]", "[[1|3]]", "[[9|80]]"],
  dogru: 1,
  hatalar: [
    "Yüzme satırının toplamını (30) aldın. İstenen 11 yaş sütununun toplamıdır.",
    null,
    "Üç yaş grubu var diye olasılığı [[1|3]] yazdın. Yaş gruplarının öğrenci sayıları eşit değildir.",
    "Tenis satırındaki 11 yaşlı öğrencilerin sayısını aldın. İstenen bütün branşlardaki 11 yaşlı öğrencilerdir."
  ],
  aciklama: `Tabloda önce bütünü, sonra istenen sütunun toplamını bul.
Adım 1: Tüm öğrenciler: yüzme 30, tenis 20, basketbol 30; toplam 80.
Adım 2: 11 yaş sütunu: 12 + 9 + 7 = 28 öğrenci.
Adım 3: Olasılık [[28|80]] = [[7|20]].
Sağlama: Yaş sütunlarının toplamları 25, 28 ve 27'dir; 25 + 28 + 27 = 80 olur.
Sık yapılan hata: Satırlarla sütunları karıştırmak.
Cevap B.`
},
{
  id: "mat-ol-274",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: `Matematik öğretmeni, sınıf etkinliği için aşağıdaki çarkı hazırlamıştır. Çark 12 eş dilime ayrılmış ve dilimlere birer doğal sayı yazılmıştır. Çark bir kez çevrilecek ve okun gösterdiği dilimdeki sayıya bakılacaktır.
**Buna göre okun gösterdiği sayının asal sayı __olmama__ olasılığı kaçtır?**`,
  gorsel: "<svg viewBox=\"0 0 300 280\" role=\"img\" aria-label=\"12 eş dilimli çark; dilimlerde 2, 3, 5, 7, 8, 9, 12, 14, 15, 18, 21, 25 sayıları yazıyor.\"><path d=\"M150 155 L150.00 43.00 A112 112 0 0 1 206.00 58.01 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"169.7\" y=\"86.4\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">2</text><path d=\"M150 155 L206.00 58.01 A112 112 0 0 1 246.99 99.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"203.9\" y=\"106.1\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">3</text><path d=\"M150 155 L246.99 99.00 A112 112 0 0 1 262.00 155.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"223.6\" y=\"140.3\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">5</text><path d=\"M150 155 L262.00 155.00 A112 112 0 0 1 246.99 211.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"223.6\" y=\"179.7\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">7</text><path d=\"M150 155 L246.99 211.00 A112 112 0 0 1 206.00 251.99 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"203.9\" y=\"213.9\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">8</text><path d=\"M150 155 L206.00 251.99 A112 112 0 0 1 150.00 267.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"169.7\" y=\"233.6\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">9</text><path d=\"M150 155 L150.00 267.00 A112 112 0 0 1 94.00 251.99 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"130.3\" y=\"233.6\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">12</text><path d=\"M150 155 L94.00 251.99 A112 112 0 0 1 53.01 211.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"96.1\" y=\"213.9\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">14</text><path d=\"M150 155 L53.01 211.00 A112 112 0 0 1 38.00 155.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"76.4\" y=\"179.7\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">15</text><path d=\"M150 155 L38.00 155.00 A112 112 0 0 1 53.01 99.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"76.4\" y=\"140.3\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">18</text><path d=\"M150 155 L53.01 99.00 A112 112 0 0 1 94.00 58.01 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"96.1\" y=\"106.1\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">21</text><path d=\"M150 155 L94.00 58.01 A112 112 0 0 1 150.00 43.00 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"130.3\" y=\"86.4\" text-anchor=\"middle\" font-size=\"16\" fill=\"currentColor\">25</text><polygon points=\"140,10 160,10 150,38\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/></svg>",
  secenekler: ["[[3|4]]", "[[2|3]]", "[[7|12]]", "[[1|3]]"],
  dogru: 1,
  hatalar: [
    "7'yi asal saymadın (3 asal buldun). 7 asal bir sayıdır.",
    null,
    "25'i asal saydın (5 asal buldun). 25 = 5 · 5 olduğundan asal değildir.",
    "Asal sayı olma olasılığını verdin (4 dilim). İstenen asal olmama olasılığıdır."
  ],
  aciklama: `Asal sayı, 1 ve kendisinden başka pozitif böleni olmayan 1'den büyük sayıdır. Asal olmayanların olasılığı 1 − (asal olma olasılığı) ile de bulunur.
Adım 1: Dilimlerdeki asal sayılar 2, 3, 5 ve 7'dir; 4 dilim.
Adım 2: Asal olmayan dilimler 12 − 4 = 8 tanedir (8, 9, 12, 14, 15, 18, 21, 25).
Adım 3: Olasılık [[8|12]] = [[2|3]].
Sağlama: Asal olma olasılığı [[4|12]] = [[1|3]]; 1 − [[1|3]] = [[2|3]] olur.
Sık yapılan hata: Asal olma olasılığını cevap sanmak ya da 25'i asal saymak.
Cevap B.`
},
{
  id: "mat-ol-275",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: `Selin'in bayram şekeri poşetinde aynı büyüklükte 20 şeker vardır: 8 naneli, 7 portakallı ve 5 çilekli. Selin poşete bakmadan içinden tek bir şeker alacaktır.
**Buna göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: null,
  secenekler: ["Çilekli şeker alma olasılığı [[1|5]]'tir.", "Portakallı şeker alma olasılığı, çilekli şeker alma olasılığının 2 katıdır.", "Naneli olmayan şeker alma olasılığı [[2|5]]'tir.", "Naneli şeker alma olasılığı, portakallı şeker alma olasılığından [[1|20]] fazladır."],
  dogru: 3,
  hatalar: [
    "[[5|20]] kesrini yanlış sadeleştirdin. [[5|20]] = [[1|4]]'tür; [[1|5]] için 25 şeker gerekirdi.",
    "7, 5'in 2 katı değildir. Portakallı olasılığı [[7|20]], çilekli olasılığı [[5|20]]'dir; ikisi arasındaki fark [[2|20]]'dir.",
    "[[2|5]] naneli şeker alma olasılığıdır ([[8|20]]). Naneli olmayan şekerler 12 tanedir ve olasılık [[12|20]] = [[3|5]]'tir.",
    null
  ],
  aciklama: `Eş şanslı şekerlerde olasılık, istenen şeker sayısının bütün şeker sayısına oranıdır. Seçenekleri tek tek hesaplayarak dene.
Adım 1: Olasılıklar: naneli [[8|20]], portakallı [[7|20]], çilekli [[5|20]] = [[1|4]].
Adım 2: Naneli olmayan şekerler 7 + 5 = 12 tanedir; olasılık [[12|20]] = [[3|5]].
Adım 3: Naneli ile portakallı arasındaki fark [[8|20]] − [[7|20]] = [[1|20]]'dir; yani naneli olasılığı [[1|20]] fazladır.
Sağlama: [[8|20]] + [[7|20]] + [[5|20]] = 1 eder.
Sık yapılan hata: Kesri yanlış sadeleştirmek ya da "olmayan" olayı sayarken yanlış gruba bakmak.
Cevap D.`
}
);
