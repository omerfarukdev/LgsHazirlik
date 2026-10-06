// Matematik — Basit Olayların Olma Olasılığı (M.8.5.1): Kademe 1 (Kavrama) ve Kademe 2 (Pekiştirme)
// Her soru tek bir denemeye dayanır (bir top, bir kart, bir zar atışı, bir çark çevirme, bir kura). Birden fazla olayın olasılığına girilmez.
// Çarklardaki dilim sayıları ve açıları, torbalardaki top sayıları ve tablolardaki değerler soru metinleriyle birebir tutar.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["olasilik"] = window.LGS_BANK["olasilik"] || []).push(
/* ===================== KADEME 1 — KAVRAMA ===================== */
{
  id: "mat-ol-101",
  kazanim: "M.8.5.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Bir torbada aşağıda gösterilen yeşil, beyaz ve sarı toplar vardır. Bu torbadan rastgele bir top çekilecektir.\n**Bu olaya ait olası durumların sayısı kaçtır?**",
  gorsel: `<svg viewBox="0 0 400 318" role="img" aria-label="Torbada 6 yeşil, 2 beyaz ve 4 sarı top"><path d="M150 62 C 70 80, 52 150, 58 210 C 64 262, 120 282, 200 282 C 280 282, 336 262, 342 210 C 348 150, 330 80, 250 62 Z" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M150 62 L 160 36 L 240 36 L 250 62" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="156" y1="48" x2="244" y2="48" stroke="currentColor" stroke-width="2"/><circle cx="120" cy="234" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="120" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">Y</text><circle cx="160" cy="234" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="160" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><circle cx="200" cy="234" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="200" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">Y</text><circle cx="240" cy="234" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="240" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">Y</text><circle cx="280" cy="234" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="280" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><circle cx="120" cy="192" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="120" y="197" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">B</text><circle cx="160" cy="192" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="160" y="197" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><circle cx="200" cy="192" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="200" y="197" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">Y</text><circle cx="240" cy="192" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="240" y="197" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">Y</text><circle cx="280" cy="192" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="280" y="197" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><circle cx="180" cy="150" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="180" y="155" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">Y</text><circle cx="220" cy="150" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="220" y="155" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">B</text><text x="200" y="308" font-size="15" text-anchor="middle" fill="currentColor">Y: yeşil top · B: beyaz top · S: sarı top</text></svg>`,
  secenekler: ["12", "6", "4", "3"],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca en çok olan yeşil topları saydın. Beyaz ve sarı toplar da çekilebilir; onlar da olası durumlara girer.",
    "Yalnızca sarı topları saydın. Çekilebilecek toplar yalnızca sarılar değildir; torbadaki bütün toplar olası durumdur.",
    "Renkleri saydın: yeşil, beyaz, sarı. Ama torbadaki her top ayrı ayrı çekilebilir; aynı renkteki iki top iki ayrı olası durumdur."
  ],
  aciklama: `Olası durum, bir olayda ortaya çıkabilecek sonuçların her biridir. Torbadan bir top çekildiğinde çekilebilecek her top ayrı bir olası durumdur.
Adım 1: Torbadaki topları renklerine göre say: 6 yeşil, 2 beyaz, 4 sarı.
Adım 2: Hepsini topla: 6 + 2 + 4 = 12. Torbadaki 12 topun her biri çekilebileceği için olası durumların sayısı 12'dir.
Sağlama: Programdaki örnekte de 3 kırmızı ve 5 mavi top bulunan torbadan top çekme olayının olası durum sayısı 3 + 5 = 8'dir; renk sayısı (2) değildir.
Sık yapılan hata: Renk sayısını (3) olası durum sayısı sanmak. Aynı renkteki toplar birbirinden ayrı toplardır; her biri ayrı bir durumdur.
Cevap A.`
},
{
  id: "mat-ol-102",
  kazanim: "M.8.5.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "Aşağıdaki çark 5 eş dilime ayrılmıştır. Çark çevrildiğinde ok dilimlerden birini gösterecektir.\n**Buna göre okun 4 numaralı dilimi gösterme olasılığı kaçtır?**",
  gorsel: `<svg viewBox="0 0 400 345" role="img" aria-label="1'den 5'e kadar numaralı 5 eş dilimli çark"><path d="M200 190 L200 45 A145 145 0 0 1 337.9 145.19 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="254.55" y="122.62" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">1</text><path d="M200 190 L337.9 145.19 A145 145 0 0 1 285.23 307.31 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="288.26" y="226.38" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">2</text><path d="M200 190 L285.23 307.31 A145 145 0 0 1 114.77 307.31 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="200" y="290.5" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">3</text><path d="M200 190 L114.77 307.31 A145 145 0 0 1 62.1 145.19 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="111.74" y="226.38" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">4</text><path d="M200 190 L62.1 145.19 A145 145 0 0 1 200 45 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="145.45" y="122.62" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">5</text><circle cx="200" cy="190" r="6" fill="currentColor"/><polygon points="200,60 184.7,26 215.3,26" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/></svg>`,
  secenekler: ["[[1|5]]", "[[1|4]]", "[[4|5]]", "1"],
  dogru: 0,
  hatalar: [
    null,
    "Dilimin numarasını olası durum sayısı sandın. Çarkta 4 değil 5 dilim vardır; payda 5 olmalıdır.",
    "Dilimin üzerindeki 4 sayısını istenen durum sayısı sandın. 4 numaralı dilim yalnızca 1 tanedir.",
    "4 numaralı dilim çarkta olduğu için okun onu mutlaka göstereceğini düşündün. Ok başka bir dilimde de durabilir; bu kesin olay değildir."
  ],
  aciklama: `Eş dilimli bir çarkta okun her dilimi gösterme şansı eşittir. Olası durum sayısı n ise her dilimin olasılığı [[1|n]] olur.
Adım 1: Çark 5 eş dilime ayrılmıştır; olası durum sayısı 5'tir.
Adım 2: 4 numaralı dilim yalnızca 1 tanedir. Olasılık = [[1|5]].
Sağlama: Beş dilimin her birinin olasılığı [[1|5]] olur; beşi toplanınca [[5|5]] = 1 eder.
Sık yapılan hata: Dilimin üzerindeki sayıyı hesaba katmak. Dilimdeki numara yalnızca bir etikettir; olasılığı dilimlerin sayısı belirler.
Cevap A.`
},
{
  id: "mat-ol-103",
  kazanim: "M.8.5.1.4",
  kademe: 1,
  zorluk: 1,
  soru: "Hilesiz bir zar bir kez atılacaktır.\n**Buna göre aşağıdaki olaylardan hangisinin olma olasılığı 0'dır?**",
  gorsel: null,
  secenekler: ["3'ten büyük bir sayı gelmesi", "7'den küçük bir sayı gelmesi", "2'den küçük bir sayı gelmesi", "6'dan büyük bir sayı gelmesi"],
  dogru: 3,
  hatalar: [
    "3'ten büyük sayılar 4, 5 ve 6'dır; bu olay olabilir, olasılığı [[3|6]] olur. Olasılığı 0 olan olay hiç gerçekleşemeyen olaydır.",
    "Kesin olayı imkânsız olayla karıştırdın. Zarda gelen her sayı 7'den küçüktür; bu olayın olasılığı 1'dir.",
    "2'den küçük tek sayı 1'dir. Az olası olmak imkânsız olmak demek değildir; bu olayın olasılığı [[1|6]] olur.",
    null
  ],
  aciklama: `Hiçbir zaman gerçekleşemeyen olaya imkânsız olay denir; olasılığı 0'dır. Her denemede gerçekleşen olaya kesin olay denir; olasılığı 1'dir.
Adım 1: Zarın yüzlerinde 1, 2, 3, 4, 5 ve 6 sayıları vardır.
Adım 2: 6'dan büyük bir sayı zarda yoktur. Bu olay hiçbir atışta gerçekleşemez; imkânsız olaydır ve olasılığı 0'dır.
Adım 3: Diğer olayları kontrol et: 3'ten büyük sayı gelmesi olabilir, 2'den küçük sayı gelmesi (yalnızca 1) olabilir, 7'den küçük sayı gelmesi ise kesindir.
Sık yapılan hata: Olasılığı küçük olan olayı imkânsız sanmak. 1 gelmesi az olasıdır ama olabilir; imkânsız olay ise hiç olamaz.
Cevap D.`
},
{
  id: "mat-ol-104",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 1,
  soru: "Bir sepetteki meyvelerin türlere göre sayısı aşağıdaki tabloda verilmiştir.\n**Bu sepetten rastgele alınan bir meyvenin armut olma olasılığı kaçtır?**",
  gorsel: `<table class="tablo"><tr><th>Meyve</th><th>Elma</th><th>Armut</th><th>Ayva</th></tr><tr><th>Sayı</th><td>5</td><td>3</td><td>2</td></tr></table>`,
  secenekler: ["[[3|10]]", "[[1|3]]", "[[3|7]]", "[[7|10]]"],
  dogru: 0,
  hatalar: [
    null,
    "Üç meyve türü olduğu için her türün olasılığını eşit sandın. Türlerin meyve sayıları farklı olduğundan armudun olasılığı [[1|3]] değildir.",
    "Armutları, armut olmayan 7 meyveye oranladın. Payda, sepetteki bütün meyvelerin sayısı (10) olmalıdır.",
    "Armut olmama olasılığını buldun: [[7|10]]. Soru armut olma olasılığını istiyor."
  ],
  aciklama: `Bir olayın olma olasılığı, istenen durumların sayısının olası durumların sayısına bölümüdür.
Adım 1: Olası durumlar sepetteki bütün meyvelerdir: 5 + 3 + 2 = 10.
Adım 2: İstenen durumlar armutlardır: 3 tane.
Adım 3: Olasılık = [[3|10]].
Sağlama: Armut olmama olasılığı [[7|10]] olur; [[3|10]] + [[7|10]] = 1 eder.
Cevap A.`
},
{
  id: "mat-ol-105",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 1,
  soru: "Hilesiz bir zar bir kez atılacaktır.\n**Zarın üst yüzüne 3'ün katı olan bir sayı gelme olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[1|6]]", "[[1|3]]", "[[1|2]]", "[[2|3]]"],
  dogru: 1,
  hatalar: [
    "Yalnızca 3'ü saydın, 6'yı unuttun. 6 da 3'ün katıdır.",
    null,
    "3'ün katları yerine 3 ve 3'ten küçük sayıları (1, 2, 3) saydın.",
    "3'ün katı olmama olasılığını buldun: 1, 2, 4 ya da 5 gelmesi [[4|6]] = [[2|3]] eder."
  ],
  aciklama: `Adım 1: Olası durumlar 1, 2, 3, 4, 5 ve 6'dır. Olası durum sayısı 6'dır.
Adım 2: Bu sayılardan 3'ün katı olanlar 3 ve 6'dır. İstenen durum sayısı 2'dir.
Adım 3: Olasılık = [[2|6]] = [[1|3]].
Sağlama: 3'ün katı olmama olasılığı [[4|6]] olur; [[2|6]] + [[4|6]] = 1 eder.
Sık yapılan hata: 6'yı gözden kaçırmak. Bir sayının katlarını yazarken 3, 6, 9… diye devam et; zarda bunlardan 3 ve 6 vardır.
Cevap B.`
},
{
  id: "mat-ol-106",
  kazanim: "M.8.5.1.4",
  kademe: 1,
  zorluk: 1,
  soru: "Ece, dört farklı olay için olma olasılığını hesaplamış ve dört sonuç bulmuştur.\n**Ece'nin bulduğu sonuçlardan hangisi bir olasılık değeri __olamaz__?**",
  gorsel: null,
  secenekler: ["0", "[[5|8]]", "1", "[[8|5]]"],
  dogru: 3,
  hatalar: [
    "0, imkânsız olayın olasılığıdır; bir olayın olasılığı 0 olabilir.",
    "[[5|8]], 0 ile 1 arasındadır. Örneğin 5 kırmızı ve 3 mavi bilyenin bulunduğu bir torbadan kırmızı bilye çekme olasılığı [[5|8]] olur.",
    "1, kesin olayın olasılığıdır; bir olayın olasılığı 1 olabilir.",
    null
  ],
  aciklama: `Bir olayın olma olasılığı en az 0, en çok 1 olabilir. 0 imkânsız olayın, 1 kesin olayın olasılığıdır; diğer olaylarınki 0 ile 1 arasındadır.
Adım 1: Sonuçları tek tek kontrol et: 0 ve 1 sınır değerlerdir, ikisi de olasılık olabilir. [[5|8]] kesrinde pay paydadan küçüktür; bu değer 0 ile 1 arasındadır.
Adım 2: [[8|5]] kesrinde pay paydadan büyüktür; [[8|5]] = 1,6 eder ve 1'den büyüktür.
Adım 3: İstenen durumların sayısı olası durumların sayısını geçemeyeceği için olasılık 1'den büyük olamaz.
Sık yapılan hata: 0 ve 1'in olasılık olamayacağını düşünmek. İmkânsız ve kesin olaylar da birer olaydır; olasılıkları 0 ve 1'dir.
Cevap D.`
},
{
  id: "mat-ol-107",
  kazanim: "M.8.5.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "Dört torbadaki topların renklerine göre sayısı aşağıdaki tabloda verilmiştir.\n**Hangi torbadan rastgele çekilen bir topun mavi olma olasılığı ile kırmızı olma olasılığı eşittir?**",
  gorsel: `<table class="tablo"><tr><th>Torba</th><th>Mavi</th><th>Kırmızı</th><th>Sarı</th></tr><tr><th>1. torba</th><td>4</td><td>3</td><td>0</td></tr><tr><th>2. torba</th><td>2</td><td>5</td><td>2</td></tr><tr><th>3. torba</th><td>3</td><td>3</td><td>1</td></tr><tr><th>4. torba</th><td>5</td><td>3</td><td>2</td></tr></table>`,
  secenekler: ["1. torba", "2. torba", "3. torba", "4. torba"],
  dogru: 2,
  hatalar: [
    "Torbada iki renk olduğu için iki rengin olasılığını eşit sandın. 4 mavi ve 3 kırmızı top vardır; mavi çekme olasılığı daha fazladır.",
    "Mavi top sayısını sarı top sayısıyla karşılaştırdın. Bu torbada mavi ile sarının olasılığı eşittir; kırmızı çekme olasılığı ise daha fazladır.",
    null,
    "Mavi topları, kırmızı ve sarı topların toplamıyla karşılaştırdın. Soru yalnızca kırmızıyla karşılaştırma istiyor; 5 mavi top, 3 kırmızı toptan fazladır."
  ],
  aciklama: `Aynı torbadan çekilen bir topun iki farklı renkte olma olasılıkları, o iki renkteki top sayıları eşitse eşittir. Hesap yapmadan top sayılarını karşılaştırman yeter.
Adım 1: Her torbada mavi ve kırmızı top sayılarını karşılaştır: 1. torbada 4 ve 3, 2. torbada 2 ve 5, 3. torbada 3 ve 3, 4. torbada 5 ve 3.
Adım 2: Mavi ve kırmızı top sayıları yalnızca 3. torbada eşittir. Bu torbadaki sarı top, mavi ile kırmızının eşitliğini bozmaz.
Sık yapılan hata: Torbada iki renk varsa her rengin olasılığını yarı yarıya sanmak. Olasılığı renk sayısı değil, her renkteki top sayısı belirler.
Cevap C.`
},
{
  id: "mat-ol-108",
  kazanim: "M.8.5.1.4",
  kademe: 1,
  zorluk: 1,
  soru: "Bir kutuda üzerinde aşağıdaki sayılar yazılı olan 6 kart vardır. Kutudan rastgele bir kart çekilecektir.\n**Buna göre aşağıdaki olaylardan hangisi kesin olaydır?**",
  gorsel: `<svg viewBox="0 0 426 84" role="img" aria-label="Üzerinde 2, 4, 6, 8, 10 ve 12 yazan altı kart"><rect x="10" y="10" width="56" height="64" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="38" y="49" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">2</text><rect x="80" y="10" width="56" height="64" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="108" y="49" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">4</text><rect x="150" y="10" width="56" height="64" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="178" y="49" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">6</text><rect x="220" y="10" width="56" height="64" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="248" y="49" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">8</text><rect x="290" y="10" width="56" height="64" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="318" y="49" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">10</text><rect x="360" y="10" width="56" height="64" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="388" y="49" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">12</text></svg>`,
  secenekler: ["Kartta tek sayı yazması", "Kartta çift sayı yazması", "Kartta 4'ün katı bir sayı yazması", "Kartta 12'den büyük bir sayı yazması"],
  dogru: 1,
  hatalar: [
    "Kartlardaki sayıların hiçbiri tek değildir; bu olay imkânsız olaydır, olasılığı 0'dır.",
    null,
    "4'ün katı olan kartlar 4, 8 ve 12'dir; 2, 6 ve 10 ise 4'ün katı değildir. Bu olay olabilir ama kesin değildir.",
    "Kartlardaki en büyük sayı 12'dir; 12'den büyük sayı yoktur. Bu olay imkânsızdır, kesin değildir."
  ],
  aciklama: `Kesin olay, deney her yapıldığında gerçekleşen olaydır; olasılığı 1'dir.
Adım 1: Kartlar 2, 4, 6, 8, 10 ve 12'dir. Olası durum sayısı 6'dır.
Adım 2: Hangi kart çekilirse çekilsin üzerindeki sayı çifttir. Çift sayı yazması olayının olasılığı [[6|6]] = 1'dir.
Adım 3: Diğer olaylar: tek sayı ve 12'den büyük sayı imkânsızdır (olasılık 0); 4'ün katı olması ise [[3|6]] olasılıklıdır.
Sık yapılan hata: İmkânsız olay ile kesin olayı karıştırmak. İmkânsız olay hiç gerçekleşmez, kesin olay her denemede gerçekleşir.
Cevap B.`
},
{
  id: "mat-ol-109",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 1,
  soru: "Bir duvardaki 12 eş kare karonun bazıları aşağıdaki gibi boyanmıştır.\n**Bu karolardan rastgele seçilen birinin boyalı olma olasılığı kaçtır?**",
  gorsel: `<svg viewBox="0 0 560 226" role="img" aria-label="Üç sıra ve dört sütundan oluşan 12 karonun 5 tanesi boyalı"><rect x="168" y="14" width="56" height="56" fill="none" stroke="currentColor" stroke-width="2"/><rect x="224" y="14" width="56" height="56" fill="var(--vurgu2)" fill-opacity="0.55" stroke="currentColor" stroke-width="2"/><rect x="280" y="14" width="56" height="56" fill="none" stroke="currentColor" stroke-width="2"/><rect x="336" y="14" width="56" height="56" fill="var(--vurgu2)" fill-opacity="0.55" stroke="currentColor" stroke-width="2"/><rect x="168" y="70" width="56" height="56" fill="var(--vurgu2)" fill-opacity="0.55" stroke="currentColor" stroke-width="2"/><rect x="224" y="70" width="56" height="56" fill="none" stroke="currentColor" stroke-width="2"/><rect x="280" y="70" width="56" height="56" fill="none" stroke="currentColor" stroke-width="2"/><rect x="336" y="70" width="56" height="56" fill="none" stroke="currentColor" stroke-width="2"/><rect x="168" y="126" width="56" height="56" fill="none" stroke="currentColor" stroke-width="2"/><rect x="224" y="126" width="56" height="56" fill="none" stroke="currentColor" stroke-width="2"/><rect x="280" y="126" width="56" height="56" fill="var(--vurgu2)" fill-opacity="0.55" stroke="currentColor" stroke-width="2"/><rect x="336" y="126" width="56" height="56" fill="var(--vurgu2)" fill-opacity="0.55" stroke="currentColor" stroke-width="2"/><rect x="168" y="196" width="18" height="18" fill="var(--vurgu2)" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/><text x="194" y="210" font-size="15" text-anchor="start" fill="currentColor">Boyalı karo</text><rect x="300" y="196" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="326" y="210" font-size="15" text-anchor="start" fill="currentColor">Boyasız karo</text></svg>`,
  secenekler: ["[[1|5]]", "[[5|12]]", "[[7|12]]", "[[5|7]]"],
  dogru: 1,
  hatalar: [
    "Payı 1, paydayı boyalı karo sayısı aldın. Payda bütün karoların sayısı (12), pay ise boyalı karoların sayısı (5) olmalıdır.",
    null,
    "Boyasız karoları saydın: 7 boyasız karo vardır. Soru boyalı olma olasılığını istiyor.",
    "Boyalı karoları boyasız karolara oranladın: 5'e 7. Payda bütün karoların sayısı olmalıdır."
  ],
  aciklama: `Adım 1: Olası durumlar duvardaki bütün karolardır: 3 sıra × 4 karo = 12.
Adım 2: İstenen durumlar boyalı karolardır. Şekilde 5 boyalı karo vardır.
Adım 3: Olasılık = [[5|12]].
Sağlama: Boyasız karo sayısı 12 − 5 = 7'dir. [[5|12]] + [[7|12]] = 1 eder.
Sık yapılan hata: Boyalı ile boyasız karo sayısını oranlamak. Olasılıkta payda, olası durumların tamamının sayısıdır.
Cevap B.`
},
{
  id: "mat-ol-110",
  kazanim: "M.8.5.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "28 kişilik bir sınıfta öğretmen, öğrencilerin isimlerini özdeş kâğıtlara yazıp bir kutuya atmıştır. Kutudan rastgele bir kâğıt çekecektir.\n**Buna göre Ece'nin isminin çekilme olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[27|28]]", "[[1|2]]", "[[1|27]]", "[[1|28]]"],
  dogru: 3,
  hatalar: [
    "Ece'nin isminin çekilmeme olasılığını buldun. Soru çekilme olasılığını istiyor.",
    "\"Ya çekilir ya çekilmez\" diye iki eşit şanslı durum varmış gibi düşündün. Ece'nin kâğıdı 28 kâğıttan yalnızca biridir; bu iki durumun olasılığı eşit değildir.",
    "Ece'yi olası durumlardan çıkardın. Kutuda Ece'ninki dâhil 28 kâğıt vardır; payda 28 olmalıdır.",
    null
  ],
  aciklama: `Eşit şansa sahip n tane olası durum varsa her birinin olma olasılığı [[1|n]] olur.
Adım 1: Kâğıtlar özdeş olduğu için her öğrencinin kâğıdının çekilme şansı eşittir. Olası durum sayısı 28'dir.
Adım 2: Ece'nin ismi yalnızca 1 kâğıtta yazılıdır. Olasılık = [[1|28]].
Sağlama: 28 öğrencinin her birinin olasılığı [[1|28]] olur; hepsi toplanınca [[28|28]] = 1 eder.
Sık yapılan hata: "Ya olur ya olmaz, demek ki olasılık [[1|2]]" diye düşünmek. İki sonuç olması, iki sonucun eşit şanslı olduğu anlamına gelmez.
Cevap D.`
},
{
  id: "mat-ol-111",
  kazanim: "M.8.5.1.4",
  kademe: 1,
  zorluk: 1,
  soru: "Bir çekilişte Arda'nın hediye kazanma olasılığı [[2|9]] olarak hesaplanmıştır.\n**Buna göre Arda'nın hediye kazanamama olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[2|9]]", "[[1|2]]", "[[7|9]]", "[[11|9]]"],
  dogru: 2,
  hatalar: [
    "Olma olasılığını olmama olasılığıyla aynı sandın. İkisi ancak her biri [[1|2]] olduğunda eşit olur.",
    "\"Kazanır ya da kazanamaz\" diye iki eşit şanslı durum varmış gibi düşündün. Kazanma olasılığı [[2|9]] olduğuna göre bu iki durum eşit şanslı değildir.",
    null,
    "Olasılığı 1'e ekledin: 1 + [[2|9]] = [[11|9]]. Bu sayı 1'den büyük olduğu için olasılık olamaz; 1'den çıkarman gerekirdi."
  ],
  aciklama: `Bir olayın olma olasılığı ile olmama olasılığının toplamı 1'dir.
Adım 1: Kazanma olasılığı [[2|9]] ise kazanamama olasılığı 1 − [[2|9]] olur.
Adım 2: 1 sayısını [[9|9]] diye yaz: [[9|9]] − [[2|9]] = [[7|9]].
Sağlama: [[2|9]] + [[7|9]] = [[9|9]] = 1 eder.
Sık yapılan hata: Olmama olasılığını bulmak için verilen olasılığı 1'e eklemek. Olmama olasılığı, 1'den çıkarılarak bulunur.
Cevap C.`
},
{
  id: "mat-ol-112",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 1,
  soru: "Aşağıdaki çark 8 eş dilime ayrılmıştır. Dilimlerdeki harfler dilimlerin rengini göstermektedir.\n**Çark çevrildiğinde okun kırmızı bir dilimi gösterme olasılığı kaçtır?**",
  gorsel: `<svg viewBox="0 0 400 372" role="img" aria-label="Mavi, sarı ve kırmızı dilimlerden oluşan 8 eş dilimli çark"><path d="M200 190 L200 45 A145 145 0 0 1 302.53 87.47 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="235.51" y="111.26" font-size="20" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><path d="M200 190 L302.53 87.47 A145 145 0 0 1 345 190 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="285.74" y="161.49" font-size="20" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><path d="M200 190 L345 190 A145 145 0 0 1 302.53 292.53 Z" fill="var(--vurgu2)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><text x="285.74" y="232.51" font-size="20" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><path d="M200 190 L302.53 292.53 A145 145 0 0 1 200 335 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="235.51" y="282.74" font-size="20" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><path d="M200 190 L200 335 A145 145 0 0 1 97.47 292.53 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="164.49" y="282.74" font-size="20" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><path d="M200 190 L97.47 292.53 A145 145 0 0 1 55 190 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="114.26" y="232.51" font-size="20" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><path d="M200 190 L55 190 A145 145 0 0 1 97.47 87.47 Z" fill="var(--vurgu2)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><text x="114.26" y="161.49" font-size="20" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><path d="M200 190 L97.47 87.47 A145 145 0 0 1 200 45 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="164.49" y="111.26" font-size="20" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><circle cx="200" cy="190" r="6" fill="currentColor"/><polygon points="200,60 184.7,26 215.3,26" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="200" y="362" font-size="15" text-anchor="middle" fill="currentColor">M: mavi · K: kırmızı · S: sarı</text></svg>`,
  secenekler: ["[[3|8]]", "[[1|3]]", "[[1|4]]", "[[1|8]]"],
  dogru: 2,
  hatalar: [
    "Mavi ya da sarı dilimlerin sayısını kullandın. Çarkta 3 mavi ve 3 sarı dilim var ama kırmızı dilim 2 tanedir.",
    "Çarkta 3 renk olduğu için her rengin olasılığını eşit sandın. Renklerin dilim sayıları farklıdır.",
    null,
    "Kırmızı dilimlerden yalnızca birini saydın. Çarkta 2 kırmızı dilim vardır."
  ],
  aciklama: `Adım 1: Olası durumlar çarktaki 8 eş dilimdir.
Adım 2: İstenen durumlar kırmızı (K) dilimlerdir. Çarkta 2 kırmızı dilim vardır.
Adım 3: Olasılık = [[2|8]] = [[1|4]].
Sağlama: Mavi [[3|8]], kırmızı [[2|8]], sarı [[3|8]]; toplamları [[8|8]] = 1 eder.
Sık yapılan hata: Üç renk var diye her rengin olasılığını [[1|3]] sanmak. Bir rengin olasılığı, o renkteki dilim sayısına bağlıdır.
Cevap C.`
},
{
  id: "mat-ol-113",
  kazanim: "M.8.5.1.3",
  kademe: 1,
  zorluk: 2,
  soru: "Aşağıda K, M ve S harfleriyle gösterilen üç renkten oluşan dört çark verilmiştir. I, III ve IV. çarklar eş dilimlere ayrılmıştır. II. çarkta K ve M dilimleri birer çeyrek daire, S dilimi ise yarım dairedir.\n**Buna göre hangi çarkta okun her rengi gösterme olasılığı birbirine eşittir?**",
  gorsel: `<svg viewBox="0 0 560 240" role="img" aria-label="Dört çark: I. çark 6 eş dilim K, M, S, K, M, S; II. çark çeyrek daire K, çeyrek daire M ve yarım daire S; III. çark 4 eş dilim K, M, S, K; IV. çark 6 eş dilim K, M, M, S, M, K"><path d="M70 112 L70 54 A58 58 0 0 1 120.23 83 Z" fill="var(--vurgu2)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><text x="87.98" y="86.11" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><path d="M70 112 L120.23 83 A58 58 0 0 1 120.23 141 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="105.96" y="117.25" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><path d="M70 112 L120.23 141 A58 58 0 0 1 70 170 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="87.98" y="148.39" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><path d="M70 112 L70 170 A58 58 0 0 1 19.77 141 Z" fill="var(--vurgu2)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><text x="52.02" y="148.39" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><path d="M70 112 L19.77 141 A58 58 0 0 1 19.77 83 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="34.04" y="117.25" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><path d="M70 112 L19.77 83 A58 58 0 0 1 70 54 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="52.02" y="86.11" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><circle cx="70" cy="112" r="4" fill="currentColor"/><polygon points="70,60 61,40 79,40" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="70" y="196" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">I. çark</text><path d="M210 112 L210 54 A58 58 0 0 1 268 112 Z" fill="var(--vurgu2)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><text x="235.43" y="91.82" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><path d="M210 112 L268 112 A58 58 0 0 1 210 170 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="235.43" y="142.68" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><path d="M210 112 L210 170 A58 58 0 0 1 210 54 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="174.04" y="117.25" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><circle cx="210" cy="112" r="4" fill="currentColor"/><polygon points="210,60 201,40 219,40" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="210" y="196" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">II. çark</text><path d="M350 112 L350 54 A58 58 0 0 1 408 112 Z" fill="var(--vurgu2)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><text x="375.43" y="91.82" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><path d="M350 112 L408 112 A58 58 0 0 1 350 170 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="375.43" y="142.68" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><path d="M350 112 L350 170 A58 58 0 0 1 292 112 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="324.57" y="142.68" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><path d="M350 112 L292 112 A58 58 0 0 1 350 54 Z" fill="var(--vurgu2)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><text x="324.57" y="91.82" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><circle cx="350" cy="112" r="4" fill="currentColor"/><polygon points="350,60 341,40 359,40" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="350" y="196" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">III. çark</text><path d="M490 112 L490 54 A58 58 0 0 1 540.23 83 Z" fill="var(--vurgu2)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><text x="507.98" y="86.11" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><path d="M490 112 L540.23 83 A58 58 0 0 1 540.23 141 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="525.96" y="117.25" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><path d="M490 112 L540.23 141 A58 58 0 0 1 490 170 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="507.98" y="148.39" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><path d="M490 112 L490 170 A58 58 0 0 1 439.77 141 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="472.02" y="148.39" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><path d="M490 112 L439.77 141 A58 58 0 0 1 439.77 83 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="454.04" y="117.25" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><path d="M490 112 L439.77 83 A58 58 0 0 1 490 54 Z" fill="var(--vurgu2)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><text x="472.02" y="86.11" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><circle cx="490" cy="112" r="4" fill="currentColor"/><polygon points="490,60 481,40 499,40" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="490" y="196" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">IV. çark</text><text x="280" y="228" font-size="15" text-anchor="middle" fill="currentColor">K: kırmızı · M: mavi · S: sarı</text></svg>`,
  secenekler: ["I. çark", "II. çark", "III. çark", "IV. çark"],
  dogru: 0,
  hatalar: [
    null,
    "Her renkten bir dilim olduğu için olasılıkları eşit sandın. S dilimi diğerlerinin iki katı büyüklüktedir; okun S'yi gösterme olasılığı [[1|2]], diğer renklerinki [[1|4]] olur.",
    "Üç rengin de çarkta bulunmasını yeterli saydın. Bu çarkta K iki dilimde, M ve S birer dilimde yer alır; K'nin olasılığı [[2|4]], diğerlerininki [[1|4]] olur.",
    "6 dilim ve 3 renk olduğu için her rengin 2 dilimi olduğunu varsaydın. Dilimleri saydığında M 3, K 2, S 1 dilim çıkar."
  ],
  aciklama: `Okun her rengi gösterme olasılığının eşit olması için her rengin çarkta eşit büyüklükte yer kaplaması gerekir.
Adım 1: Eş dilimli çarklarda her rengin dilim sayısını say. I. çark: K 2, M 2, S 2. III. çark: K 2, M 1, S 1. IV. çark: K 2, M 3, S 1.
Adım 2: II. çarkta dilimler eş değildir: K ve M çeyrek daire, S yarım dairedir. Olasılıklar [[1|4]], [[1|4]] ve [[1|2]] olur.
Adım 3: Her rengin eşit yer kapladığı tek çark I. çarktır; her rengin olasılığı [[2|6]] = [[1|3]] olur.
Sık yapılan hata: Her renkten birer dilim varsa olasılıkları eşit sanmak. Dilimlerin büyüklüğü farklıysa olaylar eşit şanslı değildir.
Cevap A.`
},
{
  id: "mat-ol-114",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir okul kütüphanesinin \"yeni gelenler\" rafındaki kitapların türlere göre sayısı aşağıdaki tabloda verilmiştir. Kütüphane görevlisi bu raftan rastgele bir kitap alıp vitrine koyacaktır.\n**Buna göre vitrine konan kitabın öykü kitabı olma olasılığı kaçtır?**",
  gorsel: `<table class="tablo"><tr><th>Kitap türü</th><th>Roman</th><th>Öykü</th><th>Şiir</th><th>Bilim</th></tr><tr><th>Kitap sayısı</th><td>12</td><td>8</td><td>4</td><td>6</td></tr></table>`,
  secenekler: ["[[2|15]]", "[[1|5]]", "[[1|4]]", "[[4|15]]"],
  dogru: 3,
  hatalar: [
    "Öykü yerine şiir kitaplarının sayısını kullandın: [[4|30]] = [[2|15]].",
    "Öykü yerine bilim kitaplarının sayısını kullandın: [[6|30]] = [[1|5]].",
    "Dört kitap türü olduğu için her türün olasılığını eşit sandın. Türlerdeki kitap sayıları farklıdır.",
    null
  ],
  aciklama: `Adım 1: Olası durumlar raftaki bütün kitaplardır: 12 + 8 + 4 + 6 = 30.
Adım 2: İstenen durumlar öykü kitaplarıdır: 8 tane.
Adım 3: Olasılık = [[8|30]]. Pay ve paydayı 2'ye böl: [[4|15]].
Sağlama: Öykü olmayan 22 kitap vardır. [[8|30]] + [[22|30]] = 1 eder.
Sık yapılan hata: Dört tür var diye her türün olasılığını [[1|4]] almak. Bu ancak her türden eşit sayıda kitap olsaydı doğru olurdu.
Cevap D.`
},
{
  id: "mat-ol-115",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Ela, bir oyun için hilesiz bir zarın yüzlerindeki noktaları kapatmış ve altı yüzüne aşağıdaki sayıları yazmıştır. Bu zar bir kez atılacaktır.\n**Buna göre zarın üst yüzüne 4 gelme olasılığı kaçtır?**",
  gorsel: `<svg viewBox="0 0 560 128" role="img" aria-label="Zarın yüzlerinde 1, 2, 2, 4, 4 ve 4 yazıyor"><rect x="43" y="16" width="64" height="64" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="75" y="57" font-size="26" text-anchor="middle" font-weight="bold" fill="currentColor">1</text><rect x="125" y="16" width="64" height="64" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="157" y="57" font-size="26" text-anchor="middle" font-weight="bold" fill="currentColor">2</text><rect x="207" y="16" width="64" height="64" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="239" y="57" font-size="26" text-anchor="middle" font-weight="bold" fill="currentColor">2</text><rect x="289" y="16" width="64" height="64" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="321" y="57" font-size="26" text-anchor="middle" font-weight="bold" fill="currentColor">4</text><rect x="371" y="16" width="64" height="64" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="403" y="57" font-size="26" text-anchor="middle" font-weight="bold" fill="currentColor">4</text><rect x="453" y="16" width="64" height="64" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="485" y="57" font-size="26" text-anchor="middle" font-weight="bold" fill="currentColor">4</text><text x="280" y="116" font-size="15" text-anchor="middle" fill="currentColor">Zarın altı yüzüne yazılan sayılar</text></svg>`,
  secenekler: ["[[2|3]]", "[[1|2]]", "[[1|3]]", "[[1|6]]"],
  dogru: 1,
  hatalar: [
    "Yüzdeki sayıyı istenen durum sayısı sandın: [[4|6]] = [[2|3]]. Pay, üzerinde 4 yazan yüzlerin sayısıdır.",
    null,
    "Zarda üç farklı sayı (1, 2, 4) olduğu için bu sayıların olasılıklarını eşit sandın. 4 üç yüzde, 1 ise tek yüzde yazılıdır.",
    "4 yazan yüzlerden yalnızca birini saydın. Zarın üç yüzünde 4 yazmaktadır."
  ],
  aciklama: `Hilesiz bir zarda olası durumlar zarın 6 yüzüdür; her yüzün üste gelme şansı eşittir.
Adım 1: Olası durum sayısı 6'dır.
Adım 2: Üzerinde 4 yazan yüz sayısı 3'tür.
Adım 3: Olasılık = [[3|6]] = [[1|2]].
Sağlama: 1 gelme olasılığı [[1|6]], 2 gelme olasılığı [[2|6]], 4 gelme olasılığı [[3|6]] olur; toplamları [[6|6]] = 1 eder.
Sık yapılan hata: Farklı sayıları olası durum saymak. Zarda üç farklı sayı vardır ama altı yüz vardır; olasılığı yüzler belirler.
Cevap B.`
},
{
  id: "mat-ol-116",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir torbada yalnızca mavi ve turuncu renkte toplam 15 top vardır. Bu torbadan rastgele çekilen bir topun mavi olma olasılığı [[2|5]] olarak hesaplanmıştır.\n**Buna göre torbadaki turuncu top sayısı kaçtır?**",
  gorsel: null,
  secenekler: ["9", "6", "3", "2"],
  dogru: 0,
  hatalar: [
    null,
    "Mavi top sayısını buldun ve orada durdun. Soru turuncu top sayısını istiyor: 15 − 6 = 9.",
    "Payda ile payın farkını aldın: 5 − 2 = 3. Bu fark, 5 eş parçadan kaçının turuncu olduğunu gösterir; bir parçanın kaç top olduğunu da bulmalısın.",
    "Olasılığın payını top sayısı sandın. [[2|5]], torbada 2 mavi top olduğu anlamına gelmez; 15 topun [[2|5]] kadarı mavidir."
  ],
  aciklama: `Adım 1: Mavi olma olasılığı [[2|5]] ise torbadaki topların [[2|5]] kadarı mavidir. 15 topu 5 eş parçaya ayır: her parça 15 ÷ 5 = 3 top. Mavi toplar 2 parçadır: 2 · 3 = 6.
Adım 2: Torbada yalnızca mavi ve turuncu top olduğu için turuncu top sayısı 15 − 6 = 9 olur.
Sağlama: Turuncu olma olasılığı [[9|15]] = [[3|5]] olur. [[2|5]] + [[3|5]] = 1 eder; olma ve olmama olasılıklarının toplamı 1'dir.
Sık yapılan hata: Ara sonuç olan mavi top sayısını (6) cevap sanmak. Kökte hangi rengin sorulduğunu yeniden oku.
Cevap A.`
},
{
  id: "mat-ol-117",
  kazanim: "M.8.5.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Okul şenliğinde satılan çekiliş biletleri 25'ten 60'a kadar (25 ve 60 dâhil) ardışık sayılarla numaralandırılmıştır. Her numaradan bir bilet basılmış ve biletlerin hepsi satılmıştır. Çekilişte biletlerden biri rastgele seçilecektir.\n**Buna göre bu çekilişte olası durumların sayısı kaçtır?**",
  gorsel: `<svg viewBox="0 0 560 108" role="img" aria-label="İlk bilet 25 numaralı, son bilet 60 numaralı"><rect x="40" y="14" width="170" height="80" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><text x="125" y="44" font-size="15" text-anchor="middle" fill="currentColor">Çekiliş bileti</text><text x="125" y="76" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">No: 25</text><text x="280" y="62" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">· · · · ·</text><rect x="350" y="14" width="170" height="80" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><text x="435" y="44" font-size="15" text-anchor="middle" fill="currentColor">Çekiliş bileti</text><text x="435" y="76" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">No: 60</text></svg>`,
  secenekler: ["34", "35", "36", "60"],
  dogru: 2,
  hatalar: [
    "İki uçtaki biletleri, yani 25 ve 60 numaralı biletleri saymadın. Soruda ikisinin de dâhil olduğu söyleniyor.",
    "60'tan 25'i çıkardın ama 1 eklemedin. 60 − 25 işlemi 25 numaralı bileti saymaz.",
    null,
    "Son biletin numarasını bilet sayısı sandın. Numaralar 1'den değil 25'ten başladığı için bilet sayısı 60 değildir."
  ],
  aciklama: `Olası durumlar, çekilebilecek biletlerin her biridir. Bu yüzden bilet sayısını bulmalısın.
Adım 1: 25'ten 60'a kadar olan sayıların adedi: 60 − 25 + 1 = 36. Çıkarmadan sonra 1 eklenir, çünkü 60 − 25 işlemi ilk sayıyı (25) dışarıda bırakır.
Adım 2: Her numaradan bir bilet olduğu için olası durum sayısı 36'dır.
Sağlama: Küçük bir örnekle dene: 25, 26 ve 27 numaralı biletler 3 tanedir; 27 − 25 + 1 = 3.
Sık yapılan hata: Yalnızca çıkarma yapmak. Uçlar dâhilse sayıların adedi "son − ilk + 1" ile bulunur.
Cevap C.`
},
{
  id: "mat-ol-118",
  kazanim: "M.8.5.1.3",
  kademe: 1,
  zorluk: 2,
  soru: "Aşağıda dört deney verilmiştir. Her deneyde bir kez deneme yapılıp sonuca bakılacaktır.\n**Buna göre hangi deneyde ortaya çıkabilecek sonuçların olma olasılıkları birbirine eşit __değildir__?**",
  gorsel: null,
  secenekler: ["Hilesiz bir zarı atıp üst yüze gelen sayıya bakmak", "2 yeşil ve 5 beyaz bilyenin bulunduğu torbadan bir bilye çekip rengine bakmak", "4 yeşil ve 4 beyaz bilyenin bulunduğu torbadan bir bilye çekip rengine bakmak", "Hilesiz bir madenî parayı atıp üste gelen yüze bakmak"],
  dogru: 1,
  hatalar: [
    "Hilesiz zarda 1'den 6'ya kadar her sayı bir yüzde yazılıdır; her sayının olasılığı [[1|6]] olur. Bu sonuçlar eşit şanslıdır.",
    null,
    "İki torba deneyini aynı sandın ve bilye sayılarını karşılaştırmadın. Bu torbada yeşil ve beyaz bilye sayıları eşittir; iki rengin olasılığı da [[1|2]] olur.",
    "Hilesiz madenî parada yazı ve tura gelme olasılıkları [[1|2]] ve [[1|2]] olur; bu sonuçlar eşit şanslıdır."
  ],
  aciklama: `Bir deneyde her sonucun olma olasılığı aynıysa bu sonuçlar eşit şansa sahiptir.
Adım 1: Zar: 1, 2, 3, 4, 5 ve 6 sonuçlarının her birinin olasılığı [[1|6]] olur. Eşit şanslıdır.
Adım 2: Madenî para: yazı ve tura gelme olasılıklarının ikisi de [[1|2]] olur. Eşit şanslıdır.
Adım 3: 4 yeşil ve 4 beyaz bilyeli torba: yeşil [[4|8]], beyaz [[4|8]]. Eşit şanslıdır.
Adım 4: 2 yeşil ve 5 beyaz bilyeli torba: yeşil [[2|7]], beyaz [[5|7]]. Beyaz bilye daha çok olduğu için sonuçlar eşit şanslı değildir.
Sık yapılan hata: İki sonucu olan her deneyi yarı yarıya sanmak. Sonuç sayısı değil, her sonuca karşılık gelen durum sayısı belirleyicidir.
Cevap B.`
},
{
  id: "mat-ol-119",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir sınıf oyununda \"BİLGİSAYAR\" sözcüğünün her harfi aynı büyüklükteki kartlara birer birer yazılmış, kartlar ters çevrilip karıştırılmıştır. Kartlardan biri rastgele çekilecektir.\n**Buna göre çekilen kartta ünlü (sesli) bir harf yazma olasılığı kaçtır?**",
  gorsel: `<svg viewBox="0 0 532 76" role="img" aria-label="B, İ, L, G, İ, S, A, Y, A ve R harfleri yazılı on kart"><rect x="10" y="10" width="44" height="56" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="32" y="45" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">B</text><rect x="62" y="10" width="44" height="56" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="84" y="45" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">İ</text><rect x="114" y="10" width="44" height="56" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="136" y="45" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">L</text><rect x="166" y="10" width="44" height="56" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="188" y="45" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">G</text><rect x="218" y="10" width="44" height="56" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="240" y="45" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">İ</text><rect x="270" y="10" width="44" height="56" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="292" y="45" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><rect x="322" y="10" width="44" height="56" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="344" y="45" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">A</text><rect x="374" y="10" width="44" height="56" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="396" y="45" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">Y</text><rect x="426" y="10" width="44" height="56" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="448" y="45" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">A</text><rect x="478" y="10" width="44" height="56" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="500" y="45" font-size="22" text-anchor="middle" font-weight="bold" fill="currentColor">R</text></svg>`,
  secenekler: ["[[1|4]]", "[[2|5]]", "[[3|5]]", "[[2|3]]"],
  dogru: 1,
  hatalar: [
    "Aynı harfleri bir kez saydın: farklı harfler 8, farklı ünlüler 2 (İ ve A) tanedir. Ama her kart ayrı bir olası durumdur; 10 kart ve 4 ünlü harfli kart vardır.",
    null,
    "Ünsüz harfli kartları saydın: [[6|10]] = [[3|5]]. Soru ünlü harf olma olasılığını istiyor.",
    "Ünlü harfli kartları ünsüz harfli kartlara oranladın: [[4|6]] = [[2|3]]. Payda bütün kartların sayısı olmalıdır."
  ],
  aciklama: `Adım 1: Olası durumlar 10 karttır: B, İ, L, G, İ, S, A, Y, A, R.
Adım 2: Ünlü harfli kartlar İ, İ, A ve A'dır. İstenen durum sayısı 4'tür.
Adım 3: Olasılık = [[4|10]] = [[2|5]].
Sağlama: Ünsüz harfli kart sayısı 6'dır. [[4|10]] + [[6|10]] = 1 eder.
Sık yapılan hata: Tekrar eden harfleri bir kez saymak. "İ" harfi iki ayrı kartta yazılıdır; her kart ayrı bir olası durumdur.
Cevap B.`
},
{
  id: "mat-ol-120",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir bilgi yarışmasında sorular, 1'den 20'ye kadar numaralandırılmış 20 zarfa konmuştur. Sunucu zarflardan birini rastgele seçecektir.\n**Buna göre seçilen zarfın numarasının asal sayı olma olasılığı kaçtır?**",
  gorsel: `<svg viewBox="0 0 552 120" role="img" aria-label="1'den 20'ye kadar numaralandırılmış 20 zarf"><rect x="10" y="10" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="33" y="40" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">1</text><rect x="64" y="10" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="87" y="40" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">2</text><rect x="118" y="10" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="141" y="40" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">3</text><rect x="172" y="10" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="195" y="40" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">4</text><rect x="226" y="10" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="249" y="40" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">5</text><rect x="280" y="10" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="303" y="40" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">6</text><rect x="334" y="10" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="357" y="40" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">7</text><rect x="388" y="10" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="411" y="40" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">8</text><rect x="442" y="10" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="465" y="40" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">9</text><rect x="496" y="10" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="519" y="40" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">10</text><rect x="10" y="64" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="33" y="94" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">11</text><rect x="64" y="64" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="87" y="94" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">12</text><rect x="118" y="64" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="141" y="94" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">13</text><rect x="172" y="64" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="195" y="94" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">14</text><rect x="226" y="64" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="249" y="94" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">15</text><rect x="280" y="64" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="303" y="94" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">16</text><rect x="334" y="64" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="357" y="94" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">17</text><rect x="388" y="64" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="411" y="94" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">18</text><rect x="442" y="64" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="465" y="94" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">19</text><rect x="496" y="64" width="46" height="46" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="519" y="94" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">20</text></svg>`,
  secenekler: ["[[1|2]]", "[[9|20]]", "[[2|5]]", "[[7|20]]"],
  dogru: 2,
  hatalar: [
    "Tek sayıları asal sandın. 9 ve 15 tek sayıdır ama asal değildir; 1 de asal değildir, 2 ise asaldır.",
    "1'i de asal saydın. 1'in yalnızca bir böleni vardır; asal sayı değildir.",
    null,
    "2'yi asal saymadın. 2 çift sayıdır ama yalnızca iki böleni (1 ve 2) olduğu için asaldır."
  ],
  aciklama: `Asal sayı, 1'den büyük olan ve yalnızca 1'e ve kendisine bölünebilen sayıdır.
Adım 1: Olası durumlar 20 zarftır.
Adım 2: 1 ile 20 arasındaki asal sayılar: 2, 3, 5, 7, 11, 13, 17, 19. İstenen durum sayısı 8'dir.
Adım 3: Olasılık = [[8|20]] = [[2|5]].
Sağlama: Asal olmayan numaralar 12 tanedir: 1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20. 8 + 12 = 20 eder.
Sık yapılan hata: 2'yi çift olduğu için atlamak ya da 1'i asal saymak. En küçük asal sayı 2'dir.
Cevap C.`
},
{
  id: "mat-ol-121",
  kazanim: "M.8.5.1.4",
  kademe: 1,
  zorluk: 2,
  soru: "Bir sınıftan rastgele seçilen bir öğrencinin gözlük kullanan bir öğrenci olma olasılığı [[2|7]] olarak hesaplanmıştır. Bu sınıfta gözlük kullanmayan 20 öğrenci vardır.\n**Buna göre sınıfta toplam kaç öğrenci vardır?**",
  gorsel: null,
  secenekler: ["7", "8", "20", "28"],
  dogru: 3,
  hatalar: [
    "Olasılığın paydasını öğrenci sayısı sandın. [[2|7]], sınıfın 7 eş parçasından 2 parçanın gözlüklü olduğunu gösterir; bir parçanın kaç öğrenci olduğunu bulmalısın.",
    "Gözlük kullanan öğrenci sayısını buldun ve orada durdun. Soru toplam öğrenci sayısını istiyor: 8 + 20 = 28.",
    "Gözlük kullanmayan öğrenci sayısını toplam sandın. Sınıfta bunlara ek olarak gözlük kullanan öğrenciler de vardır.",
    null
  ],
  aciklama: `Adım 1: Gözlük kullanma olasılığı [[2|7]] ise kullanmama olasılığı 1 − [[2|7]] = [[5|7]] olur.
Adım 2: Sınıfı 7 eş parçaya ayırdığını düşün: gözlük kullanmayanlar 5 parçadır ve 20 öğrencidir. Bir parça 20 ÷ 5 = 4 öğrencidir.
Adım 3: Sınıfın tamamı 7 parçadır: 7 · 4 = 28 öğrenci.
Sağlama: Gözlük kullanan 28 − 20 = 8 öğrenci vardır. [[8|28]] = [[2|7]]; verilen olasılıkla aynıdır.
Sık yapılan hata: Ara sonuç olan gözlüklü öğrenci sayısını (8) cevap sanmak.
Cevap D.`
},
{
  id: "mat-ol-122",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir mağazanın çekiliş çarkı mavi, kırmızı ve sarı olmak üzere üç dilimden oluşmaktadır. Dilimlerin merkez açılarının ölçüleri şekil üzerinde gösterilmiştir.\n**Buna göre çark çevrildiğinde okun kırmızı dilimi gösterme olasılığı kaçtır?**",
  gorsel: `<svg viewBox="0 0 400 345" role="img" aria-label="Merkez açıları mavi 150 derece, kırmızı 90 derece, sarı 120 derece olan üç dilimli çark"><path d="M200 190 L200 45 A145 145 0 0 1 272.5 315.57 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="284.04" y="163.43" font-size="17" text-anchor="middle" font-weight="bold" fill="currentColor">Mavi</text><text x="284.04" y="183.43" font-size="17" text-anchor="middle" font-weight="bold" fill="currentColor">150°</text><path d="M200 190 L272.5 315.57 A145 145 0 0 1 74.43 262.5 Z" fill="var(--vurgu2)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><text x="177.48" y="269.99" font-size="17" text-anchor="middle" font-weight="bold" fill="currentColor">Kırmızı</text><text x="177.48" y="289.99" font-size="17" text-anchor="middle" font-weight="bold" fill="currentColor">90°</text><path d="M200 190 L74.43 262.5 A145 145 0 0 1 200 45 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="124.66" y="142.45" font-size="17" text-anchor="middle" font-weight="bold" fill="currentColor">Sarı</text><text x="124.66" y="162.45" font-size="17" text-anchor="middle" font-weight="bold" fill="currentColor">120°</text><circle cx="200" cy="190" r="6" fill="currentColor"/><polygon points="200,60 184.7,26 215.3,26" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/></svg>`,
  secenekler: ["[[1|4]]", "[[1|3]]", "[[3|8]]", "[[5|12]]"],
  dogru: 0,
  hatalar: [
    null,
    "Çarkta üç dilim olduğu için her dilimin olasılığını eşit sandın. Dilimler farklı büyüklükte olduğu için olasılıkları da farklıdır.",
    "Kırmızı dilimin açısını diğer iki dilimin açılarının toplamına oranladın: 90'ın 240'a oranı. Payda tam açı, yani 360° olmalıdır.",
    "Mavi dilimin açısını kullandın: [[150|360]] = [[5|12]]. Soru kırmızı dilimi soruyor."
  ],
  aciklama: `Dilimleri eş olmayan bir çarkta okun bir dilimi gösterme olasılığı, o dilimin çarkın ne kadarını kapladığına bağlıdır. Dilimin merkez açısı 360°'nin hangi kesriyse olasılık da o kesirdir.
Adım 1: Açıların toplamı: 150° + 90° + 120° = 360°. Çark tam bir dairedir.
Adım 2: Kırmızı dilimin açısı 90°'dir. Olasılık = [[90|360]] = [[1|4]].
Sağlama: Mavi [[150|360]], kırmızı [[90|360]], sarı [[120|360]]; toplamları [[360|360]] = 1 eder.
Sık yapılan hata: Üç dilim var diye her birine [[1|3]] demek. Eşit şans ancak dilimler eşse vardır.
Cevap A.`
},
{
  id: "mat-ol-123",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Aşağıdaki torbada yalnızca sarı toplar vardır. Bu torbaya bir miktar mavi top eklenecektir.\n**Torbadan rastgele çekilen bir topun sarı olma olasılığının [[2|3]] olması için torbaya kaç mavi top eklenmelidir?**",
  gorsel: `<svg viewBox="0 0 400 318" role="img" aria-label="Torbada 6 sarı top"><path d="M150 62 C 70 80, 52 150, 58 210 C 64 262, 120 282, 200 282 C 280 282, 336 262, 342 210 C 348 150, 330 80, 250 62 Z" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M150 62 L 160 36 L 240 36 L 250 62" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="156" y1="48" x2="244" y2="48" stroke="currentColor" stroke-width="2"/><circle cx="120" cy="234" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="120" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><circle cx="160" cy="234" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="160" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><circle cx="200" cy="234" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="200" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><circle cx="240" cy="234" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="240" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><circle cx="280" cy="234" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="280" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><circle cx="200" cy="192" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="200" y="197" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><text x="200" y="308" font-size="15" text-anchor="middle" fill="currentColor">S: sarı top</text></svg>`,
  secenekler: ["9", "4", "3", "2"],
  dogru: 2,
  hatalar: [
    "Mavi toplar eklendikten sonraki toplam top sayısını buldun. Eklenen mavi top sayısı 9 − 6 = 3'tür.",
    "Sarı top sayısını [[2|3]] ile çarptın: 6'nın üçte ikisi 4'tür. Oysa 6 sarı top, yeni toplamın üçte ikisi olmalıdır.",
    null,
    "Mavi olma olasılığını ([[1|3]]) torbadaki ilk 6 topa uyguladın: 6'nın üçte biri 2'dir. Mavi toplar eklendikten sonra toplam 6 olarak kalmaz."
  ],
  aciklama: `Başlangıçta torbada yalnızca sarı top olduğu için sarı top çekmek kesin olaydır, olasılığı 1'dir. Mavi toplar eklenince bu olasılık küçülür.
Adım 1: Sarı top sayısı değişmez: 6. Sarı olma olasılığı [[2|3]] olacaksa 6 sarı top, yeni toplamın 3 eş parçasından 2'si olmalıdır.
Adım 2: 2 parça 6 top ise 1 parça 6 ÷ 2 = 3 top olur. Yeni toplam 3 parçadır: 3 · 3 = 9 top.
Adım 3: Eklenecek mavi top sayısı 9 − 6 = 3'tür.
Sağlama: 6 sarı ve 3 mavi topla toplam 9 top olur; sarı olma olasılığı [[6|9]] = [[2|3]] eder.
Sık yapılan hata: Yeni toplamı (9) eklenen top sayısı sanmak.
Cevap C.`
},
{
  id: "mat-ol-124",
  kazanim: "M.8.5.1.5",
  kademe: 1,
  zorluk: 2,
  soru: "Bir okulun satranç kulübü, Ekim 2026'daki günlerden birini rastgele seçip o gün turnuva düzenleyecektir. Bu ayın takvimi aşağıda verilmiştir.\n**Buna göre seçilen günün pazartesi olma olasılığı kaçtır?**",
  gorsel: `<table class="tablo"><tr><th colspan="7">Ekim 2026</th></tr><tr><th>Pzt</th><th>Sal</th><th>Çar</th><th>Per</th><th>Cum</th><th>Cmt</th><th>Paz</th></tr><tr><td></td><td></td><td></td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td></tr><tr><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td></tr><tr><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td></tr><tr><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td><td></td></tr></table>`,
  secenekler: ["[[5|31]]", "[[1|7]]", "[[2|15]]", "[[4|31]]"],
  dogru: 3,
  hatalar: [
    "Her günün ayda 5 kez geçtiğini düşündün. Bu ayda perşembe, cuma ve cumartesi 5'er kez, pazartesi ise 4 kez geçer.",
    "Haftanın 7 gününden biri olduğu için olasılığı [[1|7]] sandın. 31 gün 7'ye tam bölünmez; günlerin hepsi ayda aynı sayıda geçmez.",
    "Ayı 30 gün saydın: [[4|30]] = [[2|15]]. Takvimde ekim ayı 31 gündür.",
    null
  ],
  aciklama: `Adım 1: Olası durumlar ayın günleridir. Takvime göre ekim ayı 31 gündür.
Adım 2: Pazartesi sütunundaki günler 5, 12, 19 ve 26'dır. İstenen durum sayısı 4'tür.
Adım 3: Olasılık = [[4|31]].
Sağlama: Takvimdeki günleri sütunlara göre say: pazartesi, salı, çarşamba ve pazar 4'er gün; perşembe, cuma ve cumartesi 5'er gün. 4 · 4 + 3 · 5 = 31 eder.
Sık yapılan hata: "Haftada 7 gün var, olasılık [[1|7]]" demek. 31 gün 7'ye tam bölünmediği için bazı günler ayda bir kez fazla geçer.
Cevap D.`
},
{
  id: "mat-ol-125",
  kazanim: "M.8.5.1.3",
  kademe: 1,
  zorluk: 2,
  soru: "Bir kitap fuarındaki çekilişte tek bir ödül vardır. Çekilişe katılan herkesin adı bir kez yazılmış ve her katılımcının ödülü kazanma olasılığı [[1|40]] olarak hesaplanmıştır. Çekiliş yapılmadan önce çekilişe 4 kişi daha katılmıştır.\n**Buna göre çekilişe katılan bir kişinin ödülü kazanma olasılığı kaç olmuştur?**",
  gorsel: null,
  secenekler: ["[[1|44]]", "[[1|40]]", "[[1|36]]", "[[1|11]]"],
  dogru: 0,
  hatalar: [
    null,
    "Yeni katılımların olasılığı değiştirmeyeceğini düşündün. Olası durum sayısı 40'tan 44'e çıktığı için her kişinin olasılığı değişir.",
    "Katılan kişi sayısı artınca 4 çıkardın: 40 − 4 = 36. Katılımcı arttıkça olası durum sayısı da artar.",
    "Yeni katılan 4 kişinin olasılığını birlikte hesapladın: [[4|44]] = [[1|11]]. Soru tek bir kişinin olasılığını istiyor."
  ],
  aciklama: `Eşit şanslı n olası durumdan her birinin olasılığı [[1|n]] olur.
Adım 1: Her kişinin olasılığı [[1|40]] ise başlangıçta çekilişte 40 kişi vardır.
Adım 2: 4 kişi daha katılınca katılımcı sayısı 40 + 4 = 44 olur.
Adım 3: Herkesin adı bir kez yazıldığı için olasılıklar yine eşittir: her kişi için [[1|44]].
Sağlama: [[1|44]] kesri [[1|40]] kesrinden küçüktür. Katılımcı arttıkça bir kişinin kazanma şansı azalır.
Cevap A.`
},
/* ===================== KADEME 2 — PEKİŞTİRME ===================== */
{
  id: "mat-ol-201",
  kazanim: "M.8.5.1.3",
  kademe: 2,
  zorluk: 2,
  soru: "Bir bilgi yarışmasında sorular özdeş kartlara yazılmıştır. Sunucu kartlardan birini rastgele çekecektir ve her kartın çekilme olasılığı [[1|18]] olarak hesaplanmıştır. Kartlardaki soruların 6'sı tarih sorusudur.\n**Buna göre çekilen kartta tarih sorusu yazma olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[1|18]]", "[[1|6]]", "[[1|3]]", "[[1|2]]"],
  dogru: 2,
  hatalar: [
    "Tek bir kartın çekilme olasılığını cevap sandın. Tarih sorusu yazan 6 kart vardır.",
    "Tarih kartlarının sayısını payda yaptın. Payda bütün kartların sayısı (18) olmalıdır.",
    null,
    "Tarih kartlarını tarih sorusu olmayan kartlara oranladın: [[6|12]]. Payda bütün kartların sayısı olmalıdır."
  ],
  aciklama: `Eşit şanslı n olası durumdan her birinin olasılığı [[1|n]] olur.
Adım 1: Her kartın çekilme olasılığı [[1|18]] ise kartlar eşit şanslıdır ve 18 kart vardır.
Adım 2: Tarih sorusu yazan kart sayısı 6'dır. Olasılık = [[6|18]] = [[1|3]].
Sağlama: Tarih kartlarının her birinin olasılığı [[1|18]] olduğu için altısının toplamı 6 · [[1|18]] = [[6|18]] eder.
Sık yapılan hata: Bir kartın olasılığını ([[1|18]]) istenen olayın olasılığı sanmak. İstenen olay 6 kartı kapsar.
Cevap C.`
},
{
  id: "mat-ol-202",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: "Bir spor salonunda 1'den 50'ye kadar numaralandırılmış 50 dolap vardır. Numarası 7'nin katı olan dolapların kapıları kırmızı, diğer dolapların kapıları gridir. Salona gelen bir sporcuya dolaplardan biri rastgele verilecektir.\n**Buna göre sporcuya verilen dolabın kapısının kırmızı olma olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[3|25]]", "[[7|50]]", "[[1|7]]", "[[4|25]]"],
  dogru: 1,
  hatalar: [
    "7'nin katlarını sayarken 49'u atladın: [[6|50]] = [[3|25]]. 7 · 7 = 49 da 50'den küçüktür.",
    null,
    "Her yedi dolaptan biri kırmızı olduğu için olasılığı [[1|7]] sandın. 50, 7'nin katı olmadığından bu oran tam tutmaz; 50 dolapta 7 kırmızı dolap vardır.",
    "7'nin katlarını sayarken 50'yi geçip 56'yı da saydın: [[8|50]] = [[4|25]]. Dolap numaraları 50'de biter."
  ],
  aciklama: `Adım 1: Olası durumlar 50 dolaptır.
Adım 2: 50'ye kadar olan 7'nin katları: 7, 14, 21, 28, 35, 42, 49. Kırmızı kapılı dolap sayısı 7'dir.
Adım 3: Olasılık = [[7|50]].
Sağlama: 7 · 7 = 49, 50'den küçüktür; 7 · 8 = 56 ise 50'den büyüktür. Demek ki 7'nin 50'yi geçmeyen tam 7 katı vardır.
Sık yapılan hata: "Her yedi dolaptan biri kırmızı" deyip [[1|7]] yazmak. Bu, dolap sayısı 7'nin katı olsaydı doğru olurdu.
Cevap B.`
},
{
  id: "mat-ol-203",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: "Bir yaz kampındaki öğrencilerin katıldıkları atölyeler aşağıdaki tabloda verilmiştir. Her öğrenci yalnızca bir atölyeye katılmaktadır. Kamp sorumlusu öğrencilerden birini rastgele seçecektir.\n**Buna göre seçilen öğrencinin okçuluk atölyesine katılan bir kız öğrenci olma olasılığı kaçtır?**",
  gorsel: `<table class="tablo"><tr><th>Atölye</th><th>Kız</th><th>Erkek</th></tr><tr><th>Yüzme</th><td>9</td><td>7</td></tr><tr><th>Okçuluk</th><td>6</td><td>8</td></tr></table>`,
  secenekler: ["[[7|15]]", "[[3|7]]", "[[2|5]]", "[[1|5]]"],
  dogru: 3,
  hatalar: [
    "Okçuluk atölyesindeki bütün öğrencileri saydın: [[14|30]] = [[7|15]]. Soru bu atölyedeki kız öğrencileri istiyor.",
    "Paydayı yalnızca okçuluk atölyesindeki öğrenciler (14) aldın: [[6|14]]. Seçim kamptaki bütün öğrenciler arasından yapılıyor.",
    "Paydayı yalnızca kız öğrencilerin sayısı (15) aldın: [[6|15]]. Seçim kamptaki bütün öğrenciler arasından yapılıyor; payda 30 olmalıdır.",
    null
  ],
  aciklama: `Adım 1: Olası durumlar kamptaki bütün öğrencilerdir: 9 + 7 + 6 + 8 = 30.
Adım 2: İstenen durumlar okçuluk atölyesindeki kız öğrencilerdir: 6 tane.
Adım 3: Olasılık = [[6|30]] = [[1|5]].
Sağlama: Tablodaki dört grubun olasılıkları [[9|30]], [[7|30]], [[6|30]] ve [[8|30]] olur; toplamları [[30|30]] = 1 eder.
Sık yapılan hata: Paydayı tablonun bir satırından ya da sütunundan almak. Seçim bütün kamptan yapıldığı için payda, tablodaki bütün sayıların toplamıdır.
Cevap D.`
},
{
  id: "mat-ol-204",
  kazanim: "M.8.5.1.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir masa oyununda sırası gelen oyuncu, aşağıdaki torbadan rastgele bir top çeker. Mavi top çeken oyuncu bir tur bekler; diğer renklerden birini çeken oyuncu oyuna devam eder.\n**Buna göre sırası gelen bir oyuncunun tur beklememe olasılığı kaçtır?**",
  gorsel: `<svg viewBox="0 0 400 318" role="img" aria-label="Torbada 4 mavi, 5 kırmızı ve 3 yeşil top"><path d="M150 62 C 70 80, 52 150, 58 210 C 64 262, 120 282, 200 282 C 280 282, 336 262, 342 210 C 348 150, 330 80, 250 62 Z" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M150 62 L 160 36 L 240 36 L 250 62" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="156" y1="48" x2="244" y2="48" stroke="currentColor" stroke-width="2"/><circle cx="120" cy="234" r="17" fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="2.5"/><text x="120" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><circle cx="160" cy="234" r="17" fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="2.5"/><text x="160" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><circle cx="200" cy="234" r="17" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2.5"/><text x="200" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><circle cx="240" cy="234" r="17" fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="2.5"/><text x="240" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><circle cx="280" cy="234" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="280" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">Y</text><circle cx="120" cy="192" r="17" fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="2.5"/><text x="120" y="197" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><circle cx="160" cy="192" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="160" y="197" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">Y</text><circle cx="200" cy="192" r="17" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2.5"/><text x="200" y="197" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><circle cx="240" cy="192" r="17" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2.5"/><text x="240" y="197" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><circle cx="280" cy="192" r="17" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2.5"/><text x="280" y="197" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><circle cx="180" cy="150" r="17" fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="2.5"/><text x="180" y="155" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><circle cx="220" cy="150" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="220" y="155" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">Y</text><text x="200" y="308" font-size="15" text-anchor="middle" fill="currentColor">M: mavi top · K: kırmızı top · Y: yeşil top</text></svg>`,
  secenekler: ["[[2|3]]", "[[7|12]]", "[[5|12]]", "[[1|3]]"],
  dogru: 0,
  hatalar: [
    null,
    "Kırmızı top çekmeme olasılığını buldun: [[7|12]]. Tur bekleten renk kırmızı değil mavidir.",
    "Yalnızca kırmızı topları saydın. Yeşil top çeken oyuncu da tur beklemez.",
    "Tur bekleme olasılığını, yani mavi top çekme olasılığını buldun: [[4|12]] = [[1|3]]. Soru beklememe olasılığını istiyor."
  ],
  aciklama: `Bir olayın olma olasılığı ile olmama olasılığının toplamı 1'dir.
Adım 1: Torbada 4 + 5 + 3 = 12 top vardır. Mavi top çekme olasılığı [[4|12]] = [[1|3]] olur.
Adım 2: Tur beklememek, mavi top çekmemek demektir. Olasılık = 1 − [[1|3]] = [[2|3]].
Sağlama: Mavi olmayan toplar 5 kırmızı ve 3 yeşildir, yani 8 toptur. [[8|12]] = [[2|3]] eder.
Sık yapılan hata: Kökteki "beklememe" sözcüğünü atlayıp bekleme olasılığını bulmak.
Cevap A.`
},
{
  id: "mat-ol-205",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: "Bir fidanlıkta satışa hazır fidanların türlere göre sayısı aşağıdaki sütun grafiğinde verilmiştir. Fidanlık, bir okulun bahçesine dikilmek üzere bu fidanlardan birini rastgele seçip hediye edecektir.\n**Buna göre hediye edilen fidanın meşe olma olasılığı kaçtır?**",
  gorsel: `<svg viewBox="0 0 560 312" role="img" aria-label="Sütun grafiği: çam 15, ladin 12, meşe 9, akasya 6 fidan"><text x="10" y="24" font-size="16" text-anchor="start" font-weight="bold" fill="currentColor">Grafik: Fidanlıktaki fidanların türlere göre sayısı</text><text x="10" y="54" font-size="15" text-anchor="start" fill="currentColor">Fidan sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="226" x2="545" y2="226" stroke-opacity="0.35"/><line x1="70" y1="190" x2="545" y2="190" stroke-opacity="0.35"/><line x1="70" y1="154" x2="545" y2="154" stroke-opacity="0.35"/><line x1="70" y1="118" x2="545" y2="118" stroke-opacity="0.35"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><text x="62" y="267" font-size="15" text-anchor="end" fill="currentColor">0</text><text x="62" y="231" font-size="15" text-anchor="end" fill="currentColor">3</text><text x="62" y="195" font-size="15" text-anchor="end" fill="currentColor">6</text><text x="62" y="159" font-size="15" text-anchor="end" fill="currentColor">9</text><text x="62" y="123" font-size="15" text-anchor="end" fill="currentColor">12</text><text x="62" y="87" font-size="15" text-anchor="end" fill="currentColor">15</text><rect x="99.38" y="82" width="60" height="180" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><text x="129.38" y="282" font-size="15" text-anchor="middle" fill="currentColor">Çam</text><rect x="218.13" y="118" width="60" height="144" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><text x="248.13" y="282" font-size="15" text-anchor="middle" fill="currentColor">Ladin</text><rect x="336.88" y="154" width="60" height="108" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><text x="366.88" y="282" font-size="15" text-anchor="middle" fill="currentColor">Meşe</text><rect x="455.63" y="190" width="60" height="72" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><text x="485.63" y="282" font-size="15" text-anchor="middle" fill="currentColor">Akasya</text><text x="307.5" y="304" font-size="15" text-anchor="middle" fill="currentColor">Fidan türü</text></svg>`,
  secenekler: ["[[3|11]]", "[[1|4]]", "[[3|14]]", "[[1|7]]"],
  dogru: 2,
  hatalar: [
    "Meşe fidanlarını meşe olmayan fidanlara oranladın: [[9|33]] = [[3|11]]. Payda bütün fidanların sayısı olmalıdır.",
    "Dört fidan türü olduğu için her türün olasılığını eşit sandın. Türlerin fidan sayıları farklıdır.",
    null,
    "Meşe yerine akasya sütununu okudun: [[6|42]] = [[1|7]]."
  ],
  aciklama: `Adım 1: Grafikten sayıları oku: çam 15, ladin 12, meşe 9, akasya 6.
Adım 2: Olası durumlar bütün fidanlardır: 15 + 12 + 9 + 6 = 42.
Adım 3: Meşe fidanı 9 tanedir. Olasılık = [[9|42]]. Pay ve paydayı 3'e böl: [[3|14]].
Sağlama: Meşe olmayan 33 fidan vardır. [[9|42]] + [[33|42]] = 1 eder.
Sık yapılan hata: Payda olarak "diğer fidanların" sayısını almak. Payda her zaman bütün olası durumların sayısıdır.
Cevap C.`
},
{
  id: "mat-ol-206",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: "Aşağıdaki çark, üzerinde 1'den 12'ye kadar sayılar yazılı 12 eş dilime ayrılmıştır. Çark bir kez çevrilecektir.\n**Buna göre okun gösterdiği sayının 24'ün bir böleni olma olasılığı kaçtır?**",
  gorsel: `<svg viewBox="0 0 400 345" role="img" aria-label="Üzerinde 1'den 12'ye kadar sayılar yazılı 12 eş dilimli çark"><path d="M200 190 L200 45 A145 145 0 0 1 272.5 64.43 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="226.27" y="98.26" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">7</text><path d="M200 190 L272.5 64.43 A145 145 0 0 1 325.57 117.5 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="271.77" y="124.53" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">2</text><path d="M200 190 L325.57 117.5 A145 145 0 0 1 345 190 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="298.04" y="170.03" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">11</text><path d="M200 190 L345 190 A145 145 0 0 1 325.57 262.5 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="298.04" y="222.57" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">6</text><path d="M200 190 L325.57 262.5 A145 145 0 0 1 272.5 315.57 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="271.77" y="268.07" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">9</text><path d="M200 190 L272.5 315.57 A145 145 0 0 1 200 335 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="226.27" y="294.34" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">4</text><path d="M200 190 L200 335 A145 145 0 0 1 127.5 315.57 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="173.73" y="294.34" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">1</text><path d="M200 190 L127.5 315.57 A145 145 0 0 1 74.43 262.5 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="128.23" y="268.07" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">10</text><path d="M200 190 L74.43 262.5 A145 145 0 0 1 55 190 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="101.96" y="222.57" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">3</text><path d="M200 190 L55 190 A145 145 0 0 1 74.43 117.5 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="101.96" y="170.03" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">12</text><path d="M200 190 L74.43 117.5 A145 145 0 0 1 127.5 64.43 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="128.23" y="124.53" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">5</text><path d="M200 190 L127.5 64.43 A145 145 0 0 1 200 45 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="173.73" y="98.26" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">8</text><circle cx="200" cy="190" r="6" fill="currentColor"/><polygon points="200,60 184.7,26 215.3,26" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/></svg>`,
  secenekler: ["[[1|6]]", "[[5|12]]", "[[1|2]]", "[[7|12]]"],
  dogru: 3,
  hatalar: [
    "Yalnızca 24'ün asal bölenlerini (2 ve 3) saydın: [[2|12]]. 1, 4, 6, 8 ve 12 de 24'ün bölenidir.",
    "24'ün böleni olmayan sayıları saydın: 5, 7, 9, 10 ve 11. Soru bölen olma olasılığını istiyor.",
    "1'i bölen saymadın: [[6|12]]. Her sayı 1'e kalansız bölünür; 1, 24'ün de bir bölenidir.",
    null
  ],
  aciklama: `Bir sayının böleni, o sayıyı kalansız bölen doğal sayıdır.
Adım 1: Olası durumlar 12 eş dilimdir.
Adım 2: 24'ün bölenlerini çarpım çiftleriyle bul: 1 · 24, 2 · 12, 3 · 8, 4 · 6. Bölenler 1, 2, 3, 4, 6, 8, 12 ve 24'tür.
Adım 3: Çarkta 24 yoktur. Çarktaki bölenler 1, 2, 3, 4, 6, 8 ve 12'dir; istenen durum sayısı 7'dir.
Adım 4: Olasılık = [[7|12]].
Sağlama: Çarkta 24'ün böleni olmayan sayılar 5, 7, 9, 10 ve 11'dir; 5 tanedir. 7 + 5 = 12 eder.
Sık yapılan hata: 1'i bölen saymamak ya da çarkta bulunmayan 24'ü de istenen durumlara katmak.
Cevap D.`
},
{
  id: "mat-ol-207",
  kazanim: "M.8.5.1.2",
  kademe: 2,
  zorluk: 2,
  soru: "Aşağıdaki torbada kırmızı, mavi ve sarı toplar vardır. Torbadaki toplarla ilgili bir değişiklik yapılacaktır.\n**Hangi değişiklik yapılırsa torbadan rastgele çekilen bir topun kırmızı olma olasılığı ile mavi olma olasılığı eşit olur?**",
  gorsel: `<svg viewBox="0 0 400 318" role="img" aria-label="Torbada 5 kırmızı, 3 mavi ve 2 sarı top"><path d="M150 62 C 70 80, 52 150, 58 210 C 64 262, 120 282, 200 282 C 280 282, 336 262, 342 210 C 348 150, 330 80, 250 62 Z" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M150 62 L 160 36 L 240 36 L 250 62" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="156" y1="48" x2="244" y2="48" stroke="currentColor" stroke-width="2"/><circle cx="120" cy="234" r="17" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2.5"/><text x="120" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><circle cx="160" cy="234" r="17" fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="2.5"/><text x="160" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><circle cx="200" cy="234" r="17" fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="2.5"/><text x="200" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><circle cx="240" cy="234" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="240" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><circle cx="280" cy="234" r="17" fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="2.5"/><text x="280" y="239" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><circle cx="120" cy="192" r="17" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2.5"/><text x="120" y="197" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><circle cx="160" cy="192" r="17" fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="2.5"/><text x="160" y="197" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><circle cx="200" cy="192" r="17" fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="2.5"/><text x="200" y="197" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><circle cx="240" cy="192" r="17" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2.5"/><text x="240" y="197" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><circle cx="280" cy="192" r="17" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><text x="280" y="197" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><text x="200" y="308" font-size="15" text-anchor="middle" fill="currentColor">K: kırmızı top · M: mavi top · S: sarı top</text></svg>`,
  secenekler: ["Torbaya 2 mavi top eklenirse", "Torbadan 2 sarı top çıkarılırsa", "Torbaya 2 kırmızı top eklenirse", "Torbadan 3 kırmızı top çıkarılırsa"],
  dogru: 0,
  hatalar: [
    null,
    "Sarı toplar çıkarılınca iki renk kalacağı için olasılıkların eşitleneceğini düşündün. Torbada 5 kırmızı ve 3 mavi top kalır; kırmızı çekme olasılığı yine daha fazladır.",
    "Ters yönde değişiklik yaptın. Kırmızı top eklemek iki renk arasındaki farkı büyütür: 7 kırmızıya karşı 3 mavi top olur.",
    "Farkı gereğinden çok kapattın. 3 kırmızı top çıkarılınca 2 kırmızı ve 3 mavi top kalır; bu kez mavi çekme olasılığı daha fazla olur."
  ],
  aciklama: `Aynı torbadan çekilen bir topun iki renkte olma olasılıkları, o iki renkteki top sayıları eşitse eşittir.
Adım 1: Torbada 5 kırmızı ve 3 mavi top vardır. Sayıların eşitlenmesi için ya 2 mavi top eklenmeli ya da 2 kırmızı top çıkarılmalıdır.
Adım 2: Şıklarda 2 mavi top ekleme vardır. Bu durumda 5 kırmızı, 5 mavi ve 2 sarı top olur; kırmızı ve mavi çekme olasılıklarının ikisi de [[5|12]] olur.
Sık yapılan hata: Sarı topların eşitliği bozduğunu sanmak. Sarı toplar iki rengin olasılığını aynı ölçüde etkiler; aralarındaki farkı kapatmaz.
Cevap A.`
},
{
  id: "mat-ol-208",
  kazanim: "M.8.5.1.3",
  kademe: 2,
  zorluk: 2,
  soru: "24 kişilik bir sınıfta sınıf temsilcisi kurayla seçilecektir. Her öğrenci adını bir kâğıda yazıp kutuya atmıştır. Ancak Mert, adını yanlışlıkla iki ayrı kâğıda yazıp ikisini de kutuya atmıştır. Öğretmen kutudan rastgele bir kâğıt çekecektir.\n**Buna göre Mert'in adının çekilme olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[1|12]]", "[[2|25]]", "[[1|24]]", "[[1|25]]"],
  dogru: 1,
  hatalar: [
    "Mert'in 2 kâğıdını saydın ama paydayı öğrenci sayısı (24) aldın. Olası durumlar kâğıtlardır; kutuda 25 kâğıt vardır.",
    null,
    "Her öğrencinin şansının eşit olduğunu düşündün. Kutuda 24 değil 25 kâğıt vardır ve Mert'in adı iki kâğıtta yazılıdır.",
    "Kâğıt sayısını doğru buldun ama Mert'in kâğıtlarından yalnızca birini saydın. Mert'in adı 2 kâğıtta yazılıdır."
  ],
  aciklama: `Kurada olası durumlar kutudaki kâğıtlardır. Kâğıtlar özdeş olduğu için her kâğıdın çekilme şansı eşittir; ama bu kurada öğrencilerin şansı eşit değildir.
Adım 1: Kâğıt sayısını bul: 23 öğrenci birer kâğıt, Mert 2 kâğıt atmıştır. 23 + 2 = 25 kâğıt.
Adım 2: Mert'in adı 2 kâğıtta yazılıdır. Olasılık = [[2|25]].
Sağlama: Diğer her öğrencinin olasılığı [[1|25]] olur. 23 öğrencinin toplamı [[23|25]], Mert'inki [[2|25]]; hepsi [[25|25]] = 1 eder.
Sık yapılan hata: Öğrenci sayısını olası durum sayısı sanmak. Bu kurada eşit şanslı olanlar öğrenciler değil kâğıtlardır.
Cevap B.`
},
{
  id: "mat-ol-209",
  kazanim: "M.8.5.1.4",
  kademe: 2,
  zorluk: 2,
  soru: "Bir kargo deposundaki 250 koliden rastgele seçilen bir kolinin hasarsız olma olasılığı 0,96 olarak belirlenmiştir. Depo görevlisi, hasarlı kolileri müşterilere göndermeden önce ayırmak istemektedir.\n**Buna göre bu depodaki hasarlı koli sayısı kaçtır?**",
  gorsel: null,
  secenekler: ["4", "10", "96", "240"],
  dogru: 1,
  hatalar: [
    "Hasarlı olma olasılığındaki 0,04'ü 4 koli sandın. 0,04, kolilerin yüzde 4'ü demektir; 250'nin yüzde 4'ü 10'dur.",
    null,
    "Hasarsız olma olasılığındaki 96'yı koli sayısı sandın. 0,96, kolilerin yüzde 96'sının hasarsız olduğunu gösterir.",
    "Hasarsız koli sayısını buldun: 250 · 0,96 = 240. Soru hasarlı koli sayısını istiyor."
  ],
  aciklama: `Bir olayın olma olasılığı ile olmama olasılığının toplamı 1'dir.
Adım 1: Hasarlı olma olasılığı = 1 − 0,96 = 0,04.
Adım 2: Hasarlı koli sayısı = 250 · 0,04 = 10.
Sağlama: Hasarsız koli sayısı 250 − 10 = 240 olur. [[240|250]] = 0,96 eder; verilen olasılıkla aynıdır.
Sık yapılan hata: Ara sonuç olan hasarsız koli sayısını (240) cevap sanmak.
Cevap B.`
},
{
  id: "mat-ol-210",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: "Bir otoparktaki araçların renklerine göre dağılımı aşağıdaki daire grafiğinde verilmiştir. Otopark görevlisi bu araçlardan birini rastgele seçip bilet kontrolü yapacaktır.\n**Buna göre seçilen aracın siyah olma olasılığı kaçtır?**",
  gorsel: `<svg viewBox="0 0 400 345" role="img" aria-label="Daire grafiği: beyaz 120 derece, gri 105 derece, siyah 75 derece, kırmızı 60 derece"><text x="200" y="22" font-size="16" text-anchor="middle" font-weight="bold" fill="currentColor">Grafik: Araçların renklere göre dağılımı</text><path d="M200 190 L200 45 A145 145 0 0 1 325.57 262.5 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="277.86" y="141.3" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">Beyaz</text><text x="277.86" y="159.3" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">120°</text><path d="M200 190 L325.57 262.5 A145 145 0 0 1 97.47 292.53 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="211.73" y="275.38" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">Gri</text><text x="211.73" y="293.38" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">105°</text><path d="M200 190 L97.47 292.53 A145 145 0 0 1 74.43 117.5 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="110.87" y="197.98" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">Siyah</text><text x="110.87" y="215.98" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">75°</text><path d="M200 190 L74.43 117.5 A145 145 0 0 1 200 45 Z" fill="var(--vurgu2)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><text x="155.05" y="108.39" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">Kırmızı</text><text x="155.05" y="126.39" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">60°</text><circle cx="200" cy="190" r="6" fill="currentColor"/></svg>`,
  secenekler: ["[[7|24]]", "[[5|19]]", "[[1|4]]", "[[5|24]]"],
  dogru: 3,
  hatalar: [
    "Siyah yerine gri dilimin açısını kullandın: [[105|360]] = [[7|24]].",
    "Siyah dilimin açısını diğer dilimlerin açılarının toplamına oranladın: [[75|285]] = [[5|19]]. Payda tam açı, yani 360° olmalıdır.",
    "Dört renk olduğu için her rengin olasılığını eşit sandın. Dilimlerin açıları farklıdır.",
    null
  ],
  aciklama: `Daire grafiğinde bir dilimin merkez açısı, o grubun bütün içindeki payını gösterir. Bir grubun payı, o gruptan rastgele seçilme olasılığıdır.
Adım 1: Açıların toplamı 120° + 105° + 75° + 60° = 360°'dir.
Adım 2: Siyah araçların dilimi 75°'dir. Olasılık = [[75|360]].
Adım 3: Pay ve paydayı 15'e böl: [[5|24]].
Sağlama: Diğer renklerin olasılıkları [[120|360]], [[105|360]] ve [[60|360]] olur; dördünün toplamı [[360|360]] = 1 eder.
Sık yapılan hata: Dört renk var diye her rengin olasılığını [[1|4]] almak.
Cevap D.`
},
{
  id: "mat-ol-211",
  kazanim: "M.8.5.1.3",
  kademe: 2,
  zorluk: 2,
  soru: "Dört arkadaşın sınıflarında okul gezisi için birer öğrenci kurayla seçilecektir. Her sınıfta kuraya o gün okulda olan bütün öğrenciler eşit şansla katılacaktır. Sınıf mevcutları ve o gün okula gelmeyen öğrenci sayıları tabloda verilmiştir.\n**Buna göre kendi sınıfındaki kurada seçilme olasılığı en fazla olan kimdir?**",
  gorsel: `<table class="tablo"><tr><th>Öğrenci</th><th>Sınıf mevcudu</th><th>Okula gelmeyen öğrenci sayısı</th></tr><tr><th>Ada</th><td>30</td><td>8</td></tr><tr><th>Bora</th><td>36</td><td>10</td></tr><tr><th>Cemre</th><td>32</td><td>2</td></tr><tr><th>Duru</th><td>24</td><td>0</td></tr></table>`,
  secenekler: ["Ada", "Bora", "Cemre", "Duru"],
  dogru: 0,
  hatalar: [
    null,
    "Okula gelmeyen öğrencisi en çok olan sınıfı seçtin. Bora'nın sınıfında yine de 36 − 10 = 26 öğrenci kuraya katılır; bu sayı Ada'nın sınıfındaki 22'den fazladır.",
    "Kuraya katılan öğrencisi en çok olan sınıfı seçtin. Katılan öğrenci arttıkça bir öğrencinin seçilme olasılığı azalır; Cemre'nin olasılığı [[1|30]] ile en küçük olandır.",
    "Mevcudu en küçük sınıfı seçtin ama okula gelmeyenleri düşmedin. Ada'nın sınıfında kuraya 30 − 8 = 22 öğrenci katılır; bu sayı 24'ten küçüktür."
  ],
  aciklama: `Eşit şansla kuraya katılan n öğrenciden birinin seçilme olasılığı [[1|n]] olur. Payda küçüldükçe [[1|n]] kesri büyür.
Adım 1: Her sınıfta kuraya katılan öğrenci sayısını bul: Ada 30 − 8 = 22, Bora 36 − 10 = 26, Cemre 32 − 2 = 30, Duru 24 − 0 = 24.
Adım 2: Olasılıklar [[1|22]], [[1|26]], [[1|30]] ve [[1|24]] olur.
Adım 3: Payları eşit kesirlerden paydası en küçük olan en büyüktür: [[1|22]]. En şanslı olan Ada'dır.
Sık yapılan hata: Mevcudu en küçük sınıfa bakıp okula gelmeyenleri düşmemek. Olası durumlar kuraya gerçekten katılan öğrencilerdir.
Cevap A.`
},
{
  id: "mat-ol-212",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: "Bir kırtasiyedeki dört kutuda bulunan kırmızı ve mavi kalemlerin sayısı aşağıdaki tabloda verilmiştir. Ali, kutulardan birini seçip içinden rastgele bir kalem alacaktır.\n**Buna göre Ali hangi kutuyu seçerse aldığı kalemin kırmızı olma olasılığı en fazla olur?**",
  gorsel: `<table class="tablo"><tr><th>Kutu</th><th>Kırmızı kalem</th><th>Mavi kalem</th></tr><tr><th>1. kutu</th><td>7</td><td>7</td></tr><tr><th>2. kutu</th><td>1</td><td>1</td></tr><tr><th>3. kutu</th><td>6</td><td>5</td></tr><tr><th>4. kutu</th><td>3</td><td>2</td></tr></table>`,
  secenekler: ["1. kutu", "2. kutu", "3. kutu", "4. kutu"],
  dogru: 3,
  hatalar: [
    "Kırmızı kalemi en çok olan kutuyu seçtin. Bu kutuda mavi kalem de çoktur; olasılık [[7|14]] = [[1|2]] olur.",
    "Mavi kalemi en az olan kutuyu seçtin. Bu kutuda kırmızı ve mavi kalem sayıları eşittir; olasılık [[1|2]] olur.",
    "Kırmızı kalemi maviden bir fazla olan kutulardan kalemi çok olanı seçtin. [[6|11]] kesri [[3|5]] kesrinden küçüktür: [[6|11]] = [[30|55]], [[3|5]] = [[33|55]].",
    null
  ],
  aciklama: `Her kutu için olasılığı ayrı hesapla, sonra kesirleri karşılaştır.
Adım 1: 1. kutu: [[7|14]] = [[1|2]]. 2. kutu: [[1|2]]. 3. kutu: [[6|11]]. 4. kutu: [[3|5]].
Adım 2: [[6|11]] ile [[3|5]] kesirlerini eş paydalı yap: [[30|55]] ve [[33|55]]. Demek ki [[3|5]] daha büyüktür.
Adım 3: [[3|5]] ve [[6|11]] kesirlerinin ikisi de [[1|2]] kesrinden büyüktür. En büyük olasılık [[3|5]], yani 4. kutudur.
Sık yapılan hata: "En çok kırmızı kalem hangi kutudaysa olasılık oradadır" demek. Olasılık, kırmızı kalemlerin kutudaki bütün kalemlere oranıdır.
Cevap D.`
},
{
  id: "mat-ol-213",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 2,
  soru: "Bir akvaryumdaki balıkların türlere göre sayısı aşağıdaki tabloda verilmiştir. Akvaryumdaki moli balıklarından bir kısmı başka bir akvaryuma alınacaktır.\n**Bu işlemden sonra akvaryumdan kepçeyle rastgele yakalanan bir balığın japon balığı olma olasılığının [[1|3]] olması için kaç moli balığı alınmalıdır?**",
  gorsel: `<table class="tablo"><tr><th>Balık türü</th><th>Japon</th><th>Lepistes</th><th>Moli</th></tr><tr><th>Balık sayısı</th><td>5</td><td>7</td><td>8</td></tr></table>`,
  secenekler: ["3", "5", "10", "15"],
  dogru: 1,
  hatalar: [
    "Japon balığı sayısını moli sayısına eşitlemeye çalıştın: 8 − 5 = 3. Bu, japon ve moli olasılıklarını eşitler; japon balığı olasılığını [[1|3]] yapmaz.",
    null,
    "Japon balığı olmayan balıkların yeni sayısını buldun: 15 − 5 = 10. Soru alınacak moli balığı sayısını istiyor.",
    "Yeni toplam balık sayısını buldun. Alınacak moli sayısı 20 − 15 = 5'tir."
  ],
  aciklama: `Adım 1: Japon balığı sayısı değişmez: 5. Olasılığın [[1|3]] olması için 5 japon balığı, yeni toplamın 3 eş parçasından biri olmalıdır. Yeni toplam 3 · 5 = 15 balıktır.
Adım 2: Şu anki toplam 5 + 7 + 8 = 20 balıktır. Alınması gereken moli sayısı 20 − 15 = 5'tir.
Sağlama: 5 japon, 7 lepistes ve 3 moli balığı kalır; toplam 15 balık. Japon balığı olma olasılığı [[5|15]] = [[1|3]] eder.
Sık yapılan hata: Ara sonuç olan yeni toplamı (15) cevap sanmak.
Cevap B.`
},
{
  id: "mat-ol-214",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: "Melis, bisikletinin dört haneli şifreli kilidinin ilk üç rakamını şekildeki gibi hatırlamakta ama son rakamını unutmuştur. Kilidin her hanesinde 0'dan 9'a kadar rakamlar bulunmaktadır. Melis son rakamla ilgili şunları hatırlamaktadır: Rakam 3'ten büyüktür, asal sayı değildir ve ilk üç hanedeki rakamların hiçbirine eşit değildir. Melis, bu bilgilere uyan rakamlardan birini rastgele seçip deneyecektir.\n**Buna göre Melis'in seçtiği rakamın kilidi açan rakam olma olasılığı kaçtır?**",
  gorsel: `<svg viewBox="0 0 400 196" role="img" aria-label="Dört haneli şifreli kilit; ilk üç hanede 9, 2, 6 yazıyor, son hane bilinmiyor"><path d="M150 92 L150 62 A50 50 0 0 1 250 62 L250 92" fill="none" stroke="currentColor" stroke-width="10"/><rect x="100" y="90" width="200" height="96" rx="14" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><rect x="118" y="114" width="36" height="52" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><text x="136" y="149" font-size="26" text-anchor="middle" font-weight="bold" fill="currentColor">9</text><rect x="161" y="114" width="36" height="52" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><text x="179" y="149" font-size="26" text-anchor="middle" font-weight="bold" fill="currentColor">2</text><rect x="204" y="114" width="36" height="52" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><text x="222" y="149" font-size="26" text-anchor="middle" font-weight="bold" fill="currentColor">6</text><rect x="247" y="114" width="36" height="52" rx="5" fill="none" stroke="var(--vurgu2)" stroke-width="3"/><text x="265" y="149" font-size="26" text-anchor="middle" font-weight="bold" fill="currentColor">?</text></svg>`,
  secenekler: ["[[1|10]]", "[[1|4]]", "[[1|3]]", "[[1|2]]"],
  dogru: 3,
  hatalar: [
    "Hatırladığı bilgileri kullanmadan 0'dan 9'a kadar bütün rakamları olası durum saydın. Melis yalnızca bilgilere uyan rakamlardan birini deneyecektir.",
    "İlk üç hanedeki rakamları ayıklamadın: 3'ten büyük asal olmayan rakamların hepsini (4, 6, 8, 9) saydın. Son rakam ilk üç hanedeki rakamlardan hiçbirine eşit olamaz.",
    "İlk üç hanedeki rakamlardan yalnızca birini ayıkladın (4, 8, 9 ya da 4, 6, 8 buldun). Kilidin ilk hanesindeki 9 da, üçüncü hanesindeki 6 da son rakam olamaz; ikisini de elemelisin.",
    null
  ],
  aciklama: `Adım 1: 3'ten büyük rakamlar 4, 5, 6, 7, 8 ve 9'dur.
Adım 2: Bunlardan asal olmayanlar 4, 6, 8 ve 9'dur. 5 ve 7 asaldır, elenir; 9 = 3 · 3 olduğu için asal değildir.
Adım 3: İlk üç hanede 9, 2 ve 6 rakamları var. Son rakam bunlara eşit olamayacağı için 9 ve 6 da elenir. Geriye 4 ve 8 kalır; olası durum sayısı 2'dir.
Adım 4: Bu iki rakamdan yalnızca biri kilidi açar. Olasılık = [[1|2]].
Sağlama: Melis 4 ile 8'den birini seçer; üç ipucunun hepsi bu iki rakam için de doğrudur ve ikisinin seçilme şansı eşittir.
Sık yapılan hata: İpuçlarından birini unutup olası durumları fazla saymak. Olası durum sayısı, bütün koşulları aynı anda sağlayan rakamların sayısıdır.
Cevap D.`
},
{
  id: "mat-ol-215",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: "Bir sınıftaki öğrencilerin kardeş sayılarına göre dağılımı aşağıdaki tabloda verilmiştir. Tablodaki her sütun, o kadar kardeşi olan öğrencilerin sayısını göstermektedir; örneğin hiç kardeşi olmayan öğrenci sayısı 4'tür. Tablo hazırlandıktan sonra 1 kardeşi olan bir öğrenci ile 4 kardeşi olan öğrenci başka okula nakil olmuş, sınıfa ise 2 kardeşi olan iki öğrenci katılmıştır. Sınıf öğretmeni, \"Ailede paylaşım\" konulu bir sunum yapması için öğrencilerden birini rastgele seçecektir.\n**Buna göre seçilen öğrencinin en az 2 kardeşi olma olasılığı kaçtır?**",
  gorsel: `<table class="tablo"><tr><th>Kardeş sayısı</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>Öğrenci sayısı</th><td>4</td><td>10</td><td>7</td><td>3</td><td>1</td></tr></table>`,
  secenekler: ["[[13|25]]", "[[12|25]]", "[[11|25]]", "[[9|25]]"],
  dogru: 1,
  hatalar: [
    "En az 2 kardeşi olmayanları, yani 0 ya da 1 kardeşi olanları saydın: 4 + 9 = 13. Bu, istenen olayın olmama olasılığıdır.",
    null,
    "Nakil ve katılımı hesaba katmadın; yalnızca ilk tabloya baktın: 7 + 3 + 1 = 11. Seçim, değişen sınıf mevcuduna göre yapılır.",
    "Yalnızca tam 2 kardeşi olanları saydın: 7 + 2 = 9. 3 kardeşi olan öğrencilerin de en az 2 kardeşi vardır."
  ],
  aciklama: `Adım 1: Yeni dağılımı bul. 0 kardeşi olan: 4. 1 kardeşi olan: 10 − 1 = 9. 2 kardeşi olan: 7 + 2 = 9. 3 kardeşi olan: 3. 4 kardeşi olan: 1 − 1 = 0.
Adım 2: Olası durumlar sınıftaki bütün öğrencilerdir: 4 + 9 + 9 + 3 + 0 = 25.
Adım 3: "En az 2 kardeş", 2, 3 ya da 4 kardeş demektir. Bu öğrenciler 9 + 3 + 0 = 12 kişidir.
Adım 4: Olasılık = [[12|25]].
Sağlama: En az 2 kardeşi olmayanlar (0 ya da 1 kardeşi olanlar) 4 + 9 = 13 kişidir. [[12|25]] + [[13|25]] = 1 eder.
Sık yapılan hata: Tablo değiştiği hâlde eski tabloyla çalışmak ya da "en az 2" ifadesinde 2'yi dışarıda bırakmak. "En az" sözü sınır değerini de kapsar.
Cevap B.`
},
{
  id: "mat-ol-216",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: "Bir alışveriş merkezinin otopark katının krokisi aşağıda verilmiştir. Krokide dolu park yerleri koyu renkle, boş park yerleri içi boş olarak gösterilmiştir. Otoparka giren her araç, yönlendirme sistemi tarafından boş park yerlerinden birine rastgele yönlendirilmektedir. Defne'nin annesi, alışveriş poşetlerini taşımak kolay olsun diye asansöre en yakın iki sıradan birine park etmek istemektedir.\n**Buna göre otoparka giren Defne'nin annesinin asansöre en yakın iki sıradan birine yönlendirilme olasılığı kaçtır?**",
  gorsel: `<svg viewBox="0 0 560 318" role="img" aria-label="Otopark katının krokisi: A, B, C, D, E sıralarında 8'er park yeri; A sırası asansöre en yakın. Boş park yerleri: A sırasında 3., 6., 8.; B sırasında 1., 2., 5., 8.; C sırasında 4., 7.; D sırasında 1., 3., 4., 6., 8.; E sırasında 2., 3., 5., 7. yer"><rect x="90" y="12" width="404" height="24" rx="4" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="292" y="30" font-size="15" text-anchor="middle" font-weight="bold" fill="currentColor">ASANSÖR VE ÇIKIŞ</text><text x="66" y="81" font-size="17" text-anchor="middle" font-weight="bold" fill="currentColor">A</text><rect x="90" y="60" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="142" y="60" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="194" y="60" width="40" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="246" y="60" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="298" y="60" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="350" y="60" width="40" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="402" y="60" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="454" y="60" width="40" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="66" y="125" font-size="17" text-anchor="middle" font-weight="bold" fill="currentColor">B</text><rect x="90" y="104" width="40" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="142" y="104" width="40" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="194" y="104" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="246" y="104" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="298" y="104" width="40" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="350" y="104" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="402" y="104" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="454" y="104" width="40" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="66" y="169" font-size="17" text-anchor="middle" font-weight="bold" fill="currentColor">C</text><rect x="90" y="148" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="142" y="148" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="194" y="148" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="246" y="148" width="40" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="298" y="148" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="350" y="148" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="402" y="148" width="40" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="454" y="148" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><text x="66" y="213" font-size="17" text-anchor="middle" font-weight="bold" fill="currentColor">D</text><rect x="90" y="192" width="40" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="142" y="192" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="194" y="192" width="40" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="246" y="192" width="40" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="298" y="192" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="350" y="192" width="40" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="402" y="192" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="454" y="192" width="40" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="66" y="257" font-size="17" text-anchor="middle" font-weight="bold" fill="currentColor">E</text><rect x="90" y="236" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="142" y="236" width="40" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="194" y="236" width="40" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="246" y="236" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="298" y="236" width="40" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="350" y="236" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="402" y="236" width="40" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="454" y="236" width="40" height="30" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><rect x="130" y="286" width="28" height="20" rx="4" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><text x="166" y="302" font-size="15" text-anchor="start" fill="currentColor">Dolu park yeri</text><rect x="320" y="286" width="28" height="20" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="356" y="302" font-size="15" text-anchor="start" fill="currentColor">Boş park yeri</text></svg>`,
  secenekler: ["[[7|18]]", "[[2|5]]", "[[11|18]]", "[[7|11]]"],
  dogru: 0,
  hatalar: [
    null,
    "A ve B sıralarındaki bütün park yerlerini (16) kattaki bütün park yerlerine (40) oranladın. Dolu yerlere yönlendirme yapılmaz; yalnızca boş park yerleri sayılmalıdır.",
    "Asansöre uzak sıralardaki boş park yerlerini saydın: C, D ve E sıralarında 11 boş yer vardır. Soru A ve B sıralarını istiyor.",
    "A ve B sıralarındaki boş park yerlerini (7) diğer sıralardaki boş park yerlerine (11) oranladın. Payda bütün boş park yerlerinin sayısı olmalıdır."
  ],
  aciklama: `Sistem araçları yalnızca boş park yerlerine yönlendirdiği için olası durumlar boş park yerleridir. Asansöre en yakın iki sıra, krokide asansöre bitişik olan A ve B sıralarıdır.
Adım 1: Her sıradaki boş park yerlerini say: A 3, B 4, C 2, D 5, E 4. Toplam 18 boş park yeri vardır.
Adım 2: A ve B sıralarındaki boş park yerleri 3 + 4 = 7 tanedir.
Adım 3: Olasılık = [[7|18]].
Sağlama: C, D ve E sıralarında 2 + 5 + 4 = 11 boş park yeri vardır. 7 + 11 = 18 eder.
Sık yapılan hata: Dolu park yerlerini de olası durum saymak. Yönlendirme yapılamayan bir yer olası durum değildir.
Cevap A.`
},
{
  id: "mat-ol-217",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: "Bir okul şenliği için öğrenci meclisinin topladığı bağışlarla 1'den 40'a kadar numaralandırılmış 40 hediye kutusu hazırlanmıştır. Numarası 4 ile 6'nın ortak katı olan kutulara birer bisiklet, diğer kutulara birer kitap konmuştur. Kutular dışarıdan birbirinin aynısıdır ve kapalı olarak bir masaya dizilmiştir. Şenliğe katılan Kerem, kutulardan birini rastgele seçecektir.\n**Buna göre Kerem'in seçtiği kutudan bisiklet çıkma olasılığı kaçtır?**",
  gorsel: null,
  secenekler: ["[[2|5]]", "[[13|40]]", "[[3|40]]", "[[1|40]]"],
  dogru: 2,
  hatalar: [
    "4'ün katlarının sayısı (10) ile 6'nın katlarının sayısını (6) topladın: [[16|40]] = [[2|5]]. Bisiklet yalnızca iki sayının ortak katı olan kutulardadır.",
    "4'ün katı olan ya da 6'nın katı olan bütün kutuları saydın: 13 kutu. Bisiklet yalnızca hem 4'ün hem 6'nın katı olan kutulardadır.",
    null,
    "4 ile 6'yı çarpıp yalnızca 24'ün katlarını aradın. 4 ve 6'nın ortak katları, EKOK(4, 6) = 12'nin katlarıdır."
  ],
  aciklama: `İki sayının ortak katları, bu sayıların EKOK'unun katlarıdır.
Adım 1: 4 = 2^{2} ve 6 = 2 · 3 olduğundan EKOK(4, 6) = 2^{2} · 3 = 12'dir.
Adım 2: 40'a kadar 12'nin katları 12, 24 ve 36'dır. Bisikletli kutu sayısı 3'tür.
Adım 3: Olası durumlar 40 kutudur. Olasılık = [[3|40]].
Sağlama: 12, 24 ve 36 hem 4'e hem 6'ya kalansız bölünür. Bir sonraki ortak kat 48'dir ve 40'tan büyüktür.
Sık yapılan hata: Ortak katı bulmak için sayıları çarpmak. 4 · 6 = 24 bir ortak kattır ama en küçüğü değildir; böyle yaparsan 12 ve 36'yı atlarsın.
Cevap C.`
},
{
  id: "mat-ol-218",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: "Matematik kulübünün başkanı Selin, bir oyun için 8 kartın her birine bir kareköklü ifade yazmıştır. Aşağıdaki kartlar ters çevrilip karıştırılmıştır; kartların arka yüzleri birbirinin aynısıdır. Oyuncu kartlardan birini rastgele çekecektir. Çekilen karttaki ifadenin değeri bir tam sayı ise oyuncu puan kazanacak, tam sayı değilse sıra rakibine geçecektir.\n**Buna göre oyuncunun puan kazanma olasılığı kaçtır?**",
  gorsel: `<svg viewBox="0 0 560 86" role="img" aria-label="Sekiz kart: karekök 1, karekök 8, karekök 16, karekök 27, karekök 36, karekök 50, karekök 81, karekök 98"><rect x="12" y="10" width="60" height="64" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="29.75" y="50" font-size="21" fill="currentColor">√</text><line x1="41.75" y1="33" x2="55.25" y2="33" stroke="currentColor" stroke-width="1.8"/><text x="42.75" y="50" font-size="20" font-weight="bold" fill="currentColor">1</text><rect x="80" y="10" width="60" height="64" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="97.75" y="50" font-size="21" fill="currentColor">√</text><line x1="109.75" y1="33" x2="123.25" y2="33" stroke="currentColor" stroke-width="1.8"/><text x="110.75" y="50" font-size="20" font-weight="bold" fill="currentColor">8</text><rect x="148" y="10" width="60" height="64" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="160" y="50" font-size="21" fill="currentColor">√</text><line x1="172" y1="33" x2="197" y2="33" stroke="currentColor" stroke-width="1.8"/><text x="173" y="50" font-size="20" font-weight="bold" fill="currentColor">16</text><rect x="216" y="10" width="60" height="64" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="228" y="50" font-size="21" fill="currentColor">√</text><line x1="240" y1="33" x2="265" y2="33" stroke="currentColor" stroke-width="1.8"/><text x="241" y="50" font-size="20" font-weight="bold" fill="currentColor">27</text><rect x="284" y="10" width="60" height="64" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="296" y="50" font-size="21" fill="currentColor">√</text><line x1="308" y1="33" x2="333" y2="33" stroke="currentColor" stroke-width="1.8"/><text x="309" y="50" font-size="20" font-weight="bold" fill="currentColor">36</text><rect x="352" y="10" width="60" height="64" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="364" y="50" font-size="21" fill="currentColor">√</text><line x1="376" y1="33" x2="401" y2="33" stroke="currentColor" stroke-width="1.8"/><text x="377" y="50" font-size="20" font-weight="bold" fill="currentColor">50</text><rect x="420" y="10" width="60" height="64" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="432" y="50" font-size="21" fill="currentColor">√</text><line x1="444" y1="33" x2="469" y2="33" stroke="currentColor" stroke-width="1.8"/><text x="445" y="50" font-size="20" font-weight="bold" fill="currentColor">81</text><rect x="488" y="10" width="60" height="64" rx="6" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="500" y="50" font-size="21" fill="currentColor">√</text><line x1="512" y1="33" x2="537" y2="33" stroke="currentColor" stroke-width="1.8"/><text x="513" y="50" font-size="20" font-weight="bold" fill="currentColor">98</text></svg>`,
  secenekler: ["[[3|8]]", "[[1|2]]", "[[5|8]]", "[[7|8]]"],
  dogru: 1,
  hatalar: [
    "√{1} kartını tam sayı saymadın. 1 · 1 = 1 olduğu için √{1} = 1'dir ve 1 bir tam sayıdır.",
    null,
    "√{27} ifadesini 3 sandın. 3 · 3 · 3 = 27 doğrudur ama karekökte sayının kendisiyle bir kez çarpımına bakılır: 5 · 5 = 25, 6 · 6 = 36. √{27} = 3√{3} olur ve tam sayı değildir.",
    "Karekökü, kök içindeki sayının yarısı sandın. 8, 50 ve 98 tam kare sayı olmadığı için √{8}, √{50} ve √{98} tam sayı değildir."
  ],
  aciklama: `Bir sayının karekökü, ancak o sayı tam kare ise tam sayıdır.
Adım 1: Olası durumlar 8 karttır.
Adım 2: Kök içindeki sayılardan tam kare olanları bul: 1 = 1^{2}, 16 = 4^{2}, 36 = 6^{2}, 81 = 9^{2}. Bu kartların değerleri 1, 4, 6 ve 9'dur.
Adım 3: 8, 27, 50 ve 98 tam kare değildir: √{8} = 2√{2}, √{27} = 3√{3}, √{50} = 5√{2}, √{98} = 7√{2}. İstenen durum sayısı 4'tür.
Adım 4: Olasılık = [[4|8]] = [[1|2]].
Sık yapılan hata: √{1} kartını unutmak ya da √{27} ifadesini 3 sanmak. Karekökte aranan sayı, kendisiyle çarpılınca kök içindeki sayıyı veren sayıdır.
Cevap B.`
},
{
  id: "mat-ol-219",
  kazanim: "M.8.5.1.4",
  kademe: 2,
  zorluk: 3,
  soru: "Bir kutuda 1'den 12'ye kadar numaralandırılmış 12 özdeş kart vardır. Kutudan rastgele bir kart çekilecektir. Bu deneyle ilgili dört olay aşağıdaki tabloda verilmiştir.\n**Buna göre bu olayların olma olasılıklarının büyükten küçüğe doğru sıralanışı aşağıdakilerden hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Olay</th><th>Açıklama</th></tr><tr><th>K</th><td>Kartın numarasının 13'ten küçük olması</td></tr><tr><th>L</th><td>Kartın numarasının 12'nin böleni olması</td></tr><tr><th>M</th><td>Kartın numarasının 4'ün katı olması</td></tr><tr><th>N</th><td>Kartın numarasının asal sayı olması</td></tr></table>`,
  secenekler: ["K, N, L, M", "K, N, M, L", "L, N, M, K", "K, L, N, M"],
  dogru: 3,
  hatalar: [
    "12'nin bölenlerini sayarken 1'i ve 12'yi unuttun. 12'nin bölenleri 1, 2, 3, 4, 6 ve 12'dir; L'nin olasılığı [[6|12]] olur ve N'ninkinden ([[5|12]]) büyüktür.",
    "Bölen ile katı karıştırdın. 12'nin katı olan tek kart 12'dir ama 12'nin böleni olan 6 kart vardır.",
    "K olayını imkânsız sandın. Kartların hepsinin numarası 13'ten küçüktür; K kesin olaydır ve olasılığı 1'dir.",
    null
  ],
  aciklama: `Olasılıkları eş paydalı kesirlerle yazarsan sıralamak kolaylaşır.
Adım 1: K: Bütün kartların numarası 13'ten küçüktür. Olasılık [[12|12]] = 1'dir; K kesin olaydır.
Adım 2: L: 12'nin bölenleri 1, 2, 3, 4, 6 ve 12'dir. Olasılık [[6|12]] olur.
Adım 3: M: 4'ün katları 4, 8 ve 12'dir. Olasılık [[3|12]] olur.
Adım 4: N: Asal sayılar 2, 3, 5, 7 ve 11'dir. Olasılık [[5|12]] olur.
Adım 5: Paydalar eşit olduğu için payları karşılaştır: 12 > 6 > 5 > 3. Sıralama K, L, N, M olur.
Sık yapılan hata: Kesin olayı imkânsız sanmak. Kutuda 13 numaralı kart olmaması, "13'ten küçük olma" olayını imkânsız yapmaz; tersine her kart bu koşulu sağlar.
Cevap D.`
},
{
  id: "mat-ol-220",
  kazanim: "M.8.5.1.2",
  kademe: 2,
  zorluk: 3,
  soru: "Bir sınıf etkinliğinde kullanılan aşağıdaki çark 10 eş dilime ayrılmıştır; dilimlerin 3'ü mavi, 7'si beyazdır. Öğretmen, çark çevrildiğinde okun mavi bir dilimi gösterme olasılığının beyaz bir dilimi gösterme olasılığından fazla olmasını istemektedir. Bunun için beyaz dilimlerin bazılarını maviye boyayacaktır.\n**Buna göre öğretmen en az kaç beyaz dilimi maviye boyamalıdır?**",
  gorsel: `<svg viewBox="0 0 400 372" role="img" aria-label="3 mavi ve 7 beyaz dilimden oluşan 10 eş dilimli çark"><path d="M200 190 L200 45 A145 145 0 0 1 285.23 72.69 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="228.68" y="108.74" font-size="20" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><path d="M200 190 L285.23 72.69 A145 145 0 0 1 337.9 145.19 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="275.08" y="142.45" font-size="20" text-anchor="middle" font-weight="bold" fill="currentColor">B</text><path d="M200 190 L337.9 145.19 A145 145 0 0 1 337.9 234.81 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="292.8" y="197" font-size="20" text-anchor="middle" font-weight="bold" fill="currentColor">B</text><path d="M200 190 L337.9 234.81 A145 145 0 0 1 285.23 307.31 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="275.08" y="251.55" font-size="20" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><path d="M200 190 L285.23 307.31 A145 145 0 0 1 200 335 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="228.68" y="285.26" font-size="20" text-anchor="middle" font-weight="bold" fill="currentColor">B</text><path d="M200 190 L200 335 A145 145 0 0 1 114.77 307.31 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="171.32" y="285.26" font-size="20" text-anchor="middle" font-weight="bold" fill="currentColor">B</text><path d="M200 190 L114.77 307.31 A145 145 0 0 1 62.1 234.81 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="124.92" y="251.55" font-size="20" text-anchor="middle" font-weight="bold" fill="currentColor">B</text><path d="M200 190 L62.1 234.81 A145 145 0 0 1 62.1 145.19 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="107.2" y="197" font-size="20" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><path d="M200 190 L62.1 145.19 A145 145 0 0 1 114.77 72.69 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="124.92" y="142.45" font-size="20" text-anchor="middle" font-weight="bold" fill="currentColor">B</text><path d="M200 190 L114.77 72.69 A145 145 0 0 1 200 45 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="171.32" y="108.74" font-size="20" text-anchor="middle" font-weight="bold" fill="currentColor">B</text><circle cx="200" cy="190" r="6" fill="currentColor"/><polygon points="200,60 184.7,26 215.3,26" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="200" y="362" font-size="15" text-anchor="middle" fill="currentColor">M: mavi · B: beyaz</text></svg>`,
  secenekler: ["6", "4", "3", "2"],
  dogru: 2,
  hatalar: [
    "Mavi dilimlerin ulaşması gereken sayıyı (6) buldun ve bunu boyanacak dilim sayısı sandın. Çarkta zaten 3 mavi dilim var; 6 − 3 = 3 dilim boyanmalıdır.",
    "Beyaz dilim sayısından mavi dilim sayısını çıkardın: 7 − 3 = 4. 4 dilim boyanırsa mavi daha olası olur ama bu en az sayı değildir; 3 dilim de yeter.",
    null,
    "Olasılıkları eşitledin: 2 dilim boyanınca 5 mavi ve 5 beyaz dilim olur, iki olasılık eşit olur. Soru mavinin daha olası olmasını istiyor."
  ],
  aciklama: `Aynı çarkta bir rengin olasılığının diğerinden fazla olması için o rengin dilim sayısı daha fazla olmalıdır.
Adım 1: Toplam dilim sayısı değişmez: 10. Boyanan her dilim beyazları 1 azaltır, mavileri 1 artırır.
Adım 2: 5 mavi ve 5 beyaz dilim olursa olasılıklar eşittir. Mavinin daha olası olması için en az 6 mavi dilim gerekir.
Adım 3: Boyanacak dilim sayısı 6 − 3 = 3'tür.
Sağlama: 3 dilim boyanınca 6 mavi ve 4 beyaz dilim olur; [[6|10]] kesri [[4|10]] kesrinden büyüktür. 2 dilim boyanınca olasılıklar [[5|10]] ve [[5|10]] olur; eşittir, yetmez.
Sık yapılan hata: "Fazla" yerine "eşit" durumunda durmak. Eşitlik sınırdır; istenen durum sınırın bir adım ötesindedir.
Cevap C.`
},
{
  id: "mat-ol-221",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: "Defne'nin elindeki çikolata tableti, aşağıdaki gibi 24 eş kare parçadan oluşmaktadır. Bazı parçaların içinde fındık vardır; fındıklı parçalar şekilde nokta ile gösterilmiştir. Defne, tabletin kenarındaki parçalardan birini rastgele koparacaktır. (Kenardaki parça, en az bir kenarı tabletin dış çerçevesi üzerinde olan parçadır.)\n**Buna göre Defne'nin kopardığı parçanın fındıklı olma olasılığı kaçtır?**",
  gorsel: `<svg viewBox="0 0 560 280" role="img" aria-label="4 sıra ve 6 sütundan oluşan 24 parçalık çikolata tableti; 10 parça fındıklı. Fındıklı parçalar: 1. sıra 2. ve 5. sütun; 2. sıra 1., 3. ve 5. sütun; 3. sıra 2., 4. ve 6. sütun; 4. sıra 3. ve 4. sütun"><rect x="112" y="12" width="336" height="224" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="112" y="12" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="168" y="12" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="196" cy="40" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><rect x="224" y="12" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="280" y="12" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="336" y="12" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="364" cy="40" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><rect x="392" y="12" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="112" y="68" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="140" cy="96" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><rect x="168" y="68" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="224" y="68" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="252" cy="96" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><rect x="280" y="68" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="336" y="68" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="364" cy="96" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><rect x="392" y="68" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="112" y="124" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="168" y="124" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="196" cy="152" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><rect x="224" y="124" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="280" y="124" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="308" cy="152" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><rect x="336" y="124" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="392" y="124" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="420" cy="152" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><rect x="112" y="180" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="168" y="180" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="224" y="180" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="252" cy="208" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><rect x="280" y="180" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="308" cy="208" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><rect x="336" y="180" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="392" y="180" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="222" cy="263" r="9" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="238" y="268" font-size="15" text-anchor="start" fill="currentColor">Fındıklı parça</text></svg>`,
  secenekler: ["[[5|8]]", "[[5|12]]", "[[3|8]]", "[[1|4]]"],
  dogru: 2,
  hatalar: [
    "Paydayı doğru aldın (16) ama paya içteki fındıklı parçaları da kattın: [[10|16]]. İçteki parçalar koparılmayacağı için yalnızca kenardaki 6 fındıklı parça sayılır.",
    "Kenar koşulunu kullanmadın; bütün fındıklı parçaları bütün parçalara oranladın: [[10|24]] = [[5|12]].",
    null,
    "Kenardaki fındıklı parçaları doğru saydın ama paydayı bütün parçalar (24) aldın: [[6|24]]. Defne yalnızca kenardaki 16 parçadan birini koparacaktır."
  ],
  aciklama: `Koşul olası durumları daraltır: Defne yalnızca kenardaki parçalardan birini koparacağı için olası durumlar kenardaki parçalardır.
Adım 1: Kenardaki parçaları say: üst sıra 6, alt sıra 6, aradaki iki sıranın baştaki ve sondaki parçaları 4. Toplam 6 + 6 + 4 = 16 parça.
Adım 2: Kenardaki fındıklı parçaları say: üst sırada 2, alt sırada 2, sol kenarda 1, sağ kenarda 1. Toplam 6 parça.
Adım 3: Olasılık = [[6|16]] = [[3|8]].
Sağlama: İçte kalan parçalar 2 sıra × 4 parça = 8 tanedir; 24 − 8 = 16 kenar parçası eder. İçteki 4 fındıklı parça hesaba girmez.
Sık yapılan hata: Köşe parçalarını iki kez saymak ya da koşulu unutup bütün tableti olası durum saymak.
Cevap C.`
},
{
  id: "mat-ol-222",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: "Ece, bir kutu oyunu için yüzleri boş olan bir zar hazırlayacaktır. Zarın altı yüzüne, 1'den 9'a kadar olan sayılardan birbirinden farklı altı tanesini yazacaktır. Ece, zar atıldığında üst yüze tek sayı gelme olasılığının [[1|3]], 5'ten büyük bir sayı gelme olasılığının ise [[1|2]] olmasını istemektedir.\n**Buna göre Ece'nin zarın yüzlerine yazdığı sayılar aşağıdakilerden hangisi olabilir?**",
  gorsel: null,
  secenekler: ["2, 4, 5, 6, 8, 9", "2, 4, 5, 6, 7, 9", "1, 2, 4, 5, 6, 8", "2, 4, 6, 7, 8, 9"],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca ikinci koşulu kontrol ettin. Bu zarda 3 tek sayı (5, 7, 9) vardır; tek sayı gelme olasılığı [[3|6]] = [[1|2]] olur.",
    "5'i \"5'ten büyük\" sayılara kattın. Bu zarda 5'ten büyük sayılar yalnızca 6 ve 8'dir; olasılık [[2|6]] = [[1|3]] olur.",
    "Yalnızca birinci koşulu kontrol ettin. Bu zarda 5'ten büyük 4 sayı (6, 7, 8, 9) vardır; olasılık [[4|6]] = [[2|3]] olur."
  ],
  aciklama: `Hilesiz bir zarda olası durumlar zarın 6 yüzüdür.
Adım 1: [[1|3]] = [[2|6]] olduğu için zarda tam 2 tek sayı olmalıdır. [[1|2]] = [[3|6]] olduğu için zarda 5'ten büyük tam 3 sayı olmalıdır.
Adım 2: Şıkları iki koşula göre kontrol et:
"2, 4, 5, 6, 8, 9": tek sayılar 5 ve 9 (2 tane), 5'ten büyükler 6, 8 ve 9 (3 tane). İki koşul da sağlanır.
"2, 4, 5, 6, 7, 9": 3 tek sayı vardır, birinci koşul bozulur.
"1, 2, 4, 5, 6, 8": 5'ten büyük yalnızca 2 sayı vardır, ikinci koşul bozulur.
"2, 4, 6, 7, 8, 9": 5'ten büyük 4 sayı vardır, ikinci koşul bozulur.
Sık yapılan hata: 5'i "5'ten büyük" saymak ya da koşullardan yalnızca birini kontrol edip durmak.
Cevap A.`
},
{
  id: "mat-ol-223",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: "Bir oyuncakçıdaki kutuda yalnızca kırmızı ve beyaz renkli, aynı büyüklükte toplar vardır. Kutunun etiketindeki toplam top sayısı silindiği için okunamamaktadır. Etikette okunabilen iki bilgiye göre kutudaki top sayısı 30'dan azdır ve kutudan rastgele çekilen bir topun kırmızı olma olasılığı [[2|5]] olarak hesaplanmıştır.\n**Buna göre kutudaki kırmızı top sayısı aşağıdakilerden hangisi olabilir?**",
  gorsel: null,
  secenekler: ["12", "8", "5", "3"],
  dogru: 1,
  hatalar: [
    "12 kırmızı top için toplam 30 top gerekir: [[12|30]] = [[2|5]]. Ama kutudaki top sayısı 30'dan azdır; 30 bu sınırın içinde değildir.",
    null,
    "Olasılığın paydasındaki 5'i kırmızı top sayısıyla karıştırdın. 5 kırmızı top olsaydı toplam 12,5 top olması gerekirdi; bu mümkün değildir.",
    "Kırmızı top sayısının 2'nin katı olması gerektiğini gözden kaçırdın. 3 kırmızı top için toplam 7,5 top gerekirdi."
  ],
  aciklama: `Adım 1: Kırmızı olma olasılığı [[2|5]] ise topları 5 eş parçaya ayırabilirsin: 2 parça kırmızı, 3 parça beyaz. Bu yüzden toplam top sayısı 5'in katı, kırmızı top sayısı ise 2'nin katıdır.
Adım 2: Toplam 30'dan az olmalıdır: 5, 10, 15, 20 ya da 25. Bunlara karşılık gelen kırmızı top sayıları 2, 4, 6, 8 ve 10'dur.
Adım 3: Şıklardan yalnızca 8 bu listede vardır.
Sağlama: 8 kırmızı top varsa bir parça 4 toptur; toplam 5 · 4 = 20 top, beyaz top 12 olur. [[8|20]] = [[2|5]] ve 20 < 30.
Sık yapılan hata: "30'dan az" koşulunu atlamak. 12 kırmızı top olasılığı sağlar ama toplamı tam 30 yapar.
Cevap B.`
},
{
  id: "mat-ol-224",
  kazanim: "M.8.5.1.5",
  kademe: 2,
  zorluk: 3,
  soru: "Elif, bilye koleksiyonunu bir torbada saklamaktadır. Torbada yalnızca kırmızı ve mavi bilyeler vardır ve torbadan rastgele çekilen bir bilyenin kırmızı olma olasılığı [[3|8]] olarak hesaplanmıştır. Elif torbaya 6 kırmızı bilye daha eklediğinde, torbadan rastgele çekilen bir bilyenin kırmızı olma olasılığı ile mavi olma olasılığı eşit olmuştur.\n**Buna göre başlangıçta torbada kaç bilye vardır?**",
  gorsel: null,
  secenekler: ["9", "15", "24", "30"],
  dogru: 2,
  hatalar: [
    "Başlangıçtaki kırmızı bilye sayısını buldun. Soru torbadaki bütün bilyeleri istiyor: 9 kırmızı ve 15 mavi bilye.",
    "Mavi bilye sayısını buldun. Toplam için kırmızı bilyeleri de eklemelisin.",
    null,
    "Kırmızı bilyeler eklendikten sonraki toplamı buldun. Soru başlangıçtaki bilye sayısını istiyor: 30 − 6 = 24."
  ],
  aciklama: `Adım 1: Kırmızı olma olasılığı [[3|8]] ise torbadaki bilyeleri 8 eş parçaya ayırabilirsin: kırmızı 3 parça, mavi 5 parça.
Adım 2: Eklemeden sonra kırmızı ve mavi olma olasılıkları eşitse kırmızı ve mavi bilye sayıları eşittir. Mavi bilyeler değişmediği için kırmızılar 3 parçadan 5 parçaya çıkmıştır.
Adım 3: Eklenen 2 parça 6 bilyedir; bir parça 6 ÷ 2 = 3 bilye olur.
Adım 4: Başlangıçtaki toplam 8 parçadır: 8 · 3 = 24 bilye.
Sağlama: Başlangıçta 9 kırmızı ve 15 mavi bilye vardır; [[9|24]] = [[3|8]]. 6 kırmızı eklenince 15 kırmızı ve 15 mavi bilye olur; olasılıklar eşittir.
Sık yapılan hata: Eklemeden sonraki toplamı (30) başlangıçtaki sayı sanmak.
Cevap C.`
},
{
  id: "mat-ol-225",
  kazanim: "M.8.5.1.3",
  kademe: 2,
  zorluk: 3,
  soru: "Aşağıdaki çark 12 eş dilime ayrılmıştır; dilimlerin 5'i kırmızı (K), 4'ü mavi (M), 3'ü sarı (S) renktedir. Ayşe, sarı dilimlerin her birini ortasından iki eş parçaya ayırmış ve her sarı dilimin parçalarından birini maviye boyamıştır. Böylece çarkta 15 dilim oluşmuştur.\n**Buna göre bu değişiklikten sonra çark çevrildiğinde okun mavi renkli bir dilimi gösterme olasılığı kaçtır?**",
  gorsel: `<svg viewBox="0 0 400 372" role="img" aria-label="5 kırmızı, 4 mavi ve 3 sarı dilimden oluşan 12 eş dilimli çark"><path d="M200 190 L200 45 A145 145 0 0 1 272.5 64.43 Z" fill="var(--vurgu2)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><text x="226.27" y="98.26" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><path d="M200 190 L272.5 64.43 A145 145 0 0 1 325.57 117.5 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="271.77" y="124.53" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><path d="M200 190 L325.57 117.5 A145 145 0 0 1 345 190 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="298.04" y="170.03" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><path d="M200 190 L345 190 A145 145 0 0 1 325.57 262.5 Z" fill="var(--vurgu2)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><text x="298.04" y="222.57" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><path d="M200 190 L325.57 262.5 A145 145 0 0 1 272.5 315.57 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="271.77" y="268.07" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><path d="M200 190 L272.5 315.57 A145 145 0 0 1 200 335 Z" fill="var(--vurgu2)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><text x="226.27" y="294.34" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><path d="M200 190 L200 335 A145 145 0 0 1 127.5 315.57 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="173.73" y="294.34" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><path d="M200 190 L127.5 315.57 A145 145 0 0 1 74.43 262.5 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="128.23" y="268.07" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><path d="M200 190 L74.43 262.5 A145 145 0 0 1 55 190 Z" fill="var(--vurgu2)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><text x="101.96" y="222.57" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><path d="M200 190 L55 190 A145 145 0 0 1 74.43 117.5 Z" fill="var(--vurgu)" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="101.96" y="170.03" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">M</text><path d="M200 190 L74.43 117.5 A145 145 0 0 1 127.5 64.43 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="128.23" y="124.53" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">S</text><path d="M200 190 L127.5 64.43 A145 145 0 0 1 200 45 Z" fill="var(--vurgu2)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><text x="173.73" y="98.26" font-size="18" text-anchor="middle" font-weight="bold" fill="currentColor">K</text><circle cx="200" cy="190" r="6" fill="currentColor"/><polygon points="200,60 184.7,26 215.3,26" fill="var(--vurgu2)" stroke="currentColor" stroke-width="1.5"/><text x="200" y="362" font-size="15" text-anchor="middle" fill="currentColor">K: kırmızı · M: mavi · S: sarı</text></svg>`,
  secenekler: ["[[7|12]]", "[[7|15]]", "[[11|24]]", "[[1|3]]"],
  dogru: 2,
  hatalar: [
    "Maviye boyanan yarım parçaları tam dilim saydın: 4 + 3 = 7 dilim. Bu parçaların her biri bir dilimin yarısı kadardır.",
    "Yeni dilimleri eş dilim sandın: 15 dilimden 7'si mavi. Sarıdan ayrılan parçalar diğer dilimlerin yarısı büyüklüğündedir; dilimler artık eş değildir.",
    null,
    "Değişikliği hesaba katmadın; ilk durumdaki mavi olasılığını buldun: [[4|12]] = [[1|3]]."
  ],
  aciklama: `Dilimler eş değilse olasılığı dilim sayısı değil, rengin çarkta kapladığı yer belirler.
Adım 1: İlk çarkta her dilim çarkın [[1|12]] kadarıdır. Mavi renk 4 tam dilim kaplar.
Adım 2: Her sarı dilimin yarısı maviye boyanmıştır. 3 yarım dilim 1,5 dilim eder. Mavi renk artık 4 + 1,5 = 5,5 dilim kaplar.
Adım 3: Olasılık = 5,5 ÷ 12. Pay ve paydayı 2 ile çarp: [[11|24]].
Sağlama: Kırmızı 5 dilim, yani [[10|24]]; sarı 1,5 dilim, yani [[3|24]]; mavi [[11|24]]. Toplam [[24|24]] = 1 eder.
Sık yapılan hata: 15 dilimi eş sayıp [[7|15]] bulmak. Bölünen dilimler küçüldüğü için her dilimin olasılığı artık eşit değildir.
Cevap C.`
}
);
