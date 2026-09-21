// Matematik — Çarpanlar ve Katlar | Test tamamlama partisi:
// Kademe 1 (mat-ck-113…125), Kademe 2 (mat-ck-213…225), Kademe 3 (mat-ck-313…325), Havuz (mat-ck-013…015)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["carpanlar-katlar"] = window.LGS_BANK["carpanlar-katlar"] || []).push(
/* ===================== KADEME 1 — KAVRAMA ===================== */
{
  id: "mat-ck-113",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdaki sayılardan hangisi 48'in pozitif tam sayı çarpanı __değildir__?**",
  gorsel: null,
  secenekler: ["6", "12", "18", "24"],
  dogru: 2,
  hatalar: [
    "Bölme denenmedi: 48 ÷ 6 = 8 kalansızdır, yani 6 bir çarpandır.",
    "Bölme denenmedi: 48 ÷ 12 = 4 kalansızdır, yani 12 bir çarpandır.",
    null,
    "Bir sayının yarısına yakın çarpanı olamayacağını sanma: 48 ÷ 24 = 2 kalansızdır, 24 bir çarpandır."
  ],
  aciklama: `Bir sayının pozitif tam sayı çarpanı (böleni), o sayıyı kalansız bölen pozitif tam sayıdır.
Adım 1: 48'in çarpanlarını çiftler hâlinde yaz; böylece hiçbirini atlamazsın: 1 · 48, 2 · 24, 3 · 16, 4 · 12, 6 · 8.
Adım 2: Çarpanları sırala: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48.
Adım 3: Şıkları bu listeyle karşılaştır. 6, 12 ve 24 listede vardır; 18 yoktur.
Sağlama: 48 ÷ 18 = 2, kalan 12. Bölme kalansız değildir, öyleyse 18 çarpan değildir.
Sık yapılan hata: 48 = 2^{4} · 3 yazılışında 3 bir kez geçtiği için 18 = 2 · 3^{2} sayısı 48'i bölemez. Bir çarpanın asal çarpanları, bölünen sayının asal çarpanlarından fazla olamaz.
Cevap C.`
},
{
  id: "mat-ck-114",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**2^{3} · 5 çarpımının değeri aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["40", "30", "13", "10"],
  dogru: 0,
  hatalar: [
    null,
    "Üssü çarpan sanma: 2^{3} yerine 2 · 3 = 6 alınıp 6 · 5 = 30 bulunmuş.",
    "Çarpma yerine toplama: 2^{3} = 8 doğru bulunmuş ama 8 + 5 = 13 yazılmış.",
    "Üssü yok sayma: 2^{3} yerine yalnızca 2 alınıp 2 · 5 = 10 bulunmuş."
  ],
  aciklama: `Üslü bir ifadede taban, üs kadar kez kendisiyle çarpılır. Yani 2^{3} demek 2 · 2 · 2 demektir.
Adım 1: Üslü çarpanı aç: 2^{3} = 2 · 2 · 2 = 8.
Adım 2: Diğer çarpanla çarp: 8 · 5 = 40.
Sağlama: 40'ı asal çarpanlarına ayır: 40 ÷ 2 = 20, 20 ÷ 2 = 10, 10 ÷ 2 = 5, 5 ÷ 5 = 1. Yani 40 = 2^{3} · 5. Başladığımız ifadeye döndük.
Sık yapılan hata: 2^{3} ifadesini 2 · 3 = 6 diye okumak. Üs, tabanın kaç kez çarpıma gireceğini söyler; çarpanlardan biri değildir.
Cevap A.`
},
{
  id: "mat-ck-115",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "36 ve 60 sayılarının asal çarpanlarına ayrılmış biçimleri aşağıda verilmiştir.\n36 = 2^{2} · 3^{2}\n60 = 2^{2} · 3 · 5\n**Buna göre EBOB(36, 60) kaçtır?**",
  gorsel: null,
  secenekler: ["6", "12", "36", "180"],
  dogru: 1,
  hatalar: [
    "Ortak asal çarpanların üslerini görmezden gelme: 2 · 3 = 6 alınmış; oysa iki sayıda da 2 çarpanı iki kez vardır.",
    null,
    "Küçük sayıyı EBOB sanma: 36, 60'ı kalansız bölmez.",
    "EBOB ile EKOK'u karıştırma: 2^{2} · 3^{2} · 5 = 180, bu iki sayının en küçük ortak katıdır."
  ],
  aciklama: `İki sayının EBOB'u, asal çarpanlarına ayrılmış biçimlerdeki **ortak** asal çarpanların **küçük** üslülerinin çarpımıdır.
Adım 1: Ortak asal çarpanları belirle. İki yazılışta da 2 ve 3 vardır; 5 yalnızca 60'ta olduğu için alınmaz.
Adım 2: Üsleri karşılaştır. 2 çarpanı ikisinde de 2^{2} olarak geçer, küçüğü 2^{2}'dir. 3 çarpanı 36'da 3^{2}, 60'ta 3^{1}'dir; küçüğü 3'tür.
Adım 3: Çarp: EBOB(36, 60) = 2^{2} · 3 = 12.
Sağlama: 36 ÷ 12 = 3 ve 60 ÷ 12 = 5; ikisi de kalansız bölünür ve 3 ile 5'in ortak böleni kalmamıştır.
Sık yapılan hata: EKOK'ta büyük üslüler, EBOB'ta küçük üslüler alınır. EBOB iki sayıdan da büyük olamaz.
Cevap B.`
},
{
  id: "mat-ck-116",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "Ada 6'şar 6'şar, Bora 10'ar 10'ar sayarken durdukları sayıları aşağıdaki sayı doğrusunda işaretlemiştir. İkisi de 0'dan başlamıştır; Ada'nın işaretleri doğrunun üstünde, Bora'nınkiler altındadır.\n**Buna göre ikisinin de durduğu, 0'dan farklı en küçük sayı kaçtır?**",
  gorsel: `<svg viewBox="0 0 560 170" role="img" aria-label="0 ile 60 arasındaki sayı doğrusu; üstte 6'nın katları, altta 10'un katları işaretli"><g stroke="currentColor" stroke-width="2"><line x1="30" y1="88" x2="540" y2="88"/><line x1="30" y1="82" x2="30" y2="94"/><line x1="115" y1="82" x2="115" y2="94"/><line x1="200" y1="82" x2="200" y2="94"/><line x1="285" y1="82" x2="285" y2="94"/><line x1="370" y1="82" x2="370" y2="94"/><line x1="455" y1="82" x2="455" y2="94"/><line x1="540" y1="82" x2="540" y2="94"/></g><g fill="currentColor" font-size="16" text-anchor="middle"><text x="30" y="112">0</text><text x="115" y="112">10</text><text x="200" y="112">20</text><text x="285" y="112">30</text><text x="370" y="112">40</text><text x="455" y="112">50</text><text x="540" y="112">60</text></g><g fill="var(--vurgu)"><circle cx="30" cy="62" r="8"/><circle cx="81" cy="62" r="8"/><circle cx="132" cy="62" r="8"/><circle cx="183" cy="62" r="8"/><circle cx="234" cy="62" r="8"/><circle cx="285" cy="62" r="8"/><circle cx="336" cy="62" r="8"/><circle cx="387" cy="62" r="8"/><circle cx="438" cy="62" r="8"/><circle cx="489" cy="62" r="8"/><circle cx="540" cy="62" r="8"/></g><g fill="var(--vurgu2)"><circle cx="30" cy="132" r="8"/><circle cx="115" cy="132" r="8"/><circle cx="200" cy="132" r="8"/><circle cx="285" cy="132" r="8"/><circle cx="370" cy="132" r="8"/><circle cx="455" cy="132" r="8"/><circle cx="540" cy="132" r="8"/></g><g fill="currentColor" font-size="15" font-weight="bold"><text x="30" y="26">Ada</text><text x="30" y="162">Bora</text></g></svg>`,
  secenekler: ["2", "16", "30", "60"],
  dogru: 2,
  hatalar: [
    "EBOB ile EKOK'u karıştırma: EBOB(6, 10) = 2'dir; 2 ortak bölendir, ortak kat değildir.",
    "Sayıları toplama: 6 + 10 = 16; 16 ne 6'nın ne de 10'un katıdır.",
    null,
    "6 · 10 = 60'ı en küçük ortak kat sanma: 60 bir ortak kattır ama en küçüğü değildir."
  ],
  aciklama: `Ada'nın durduğu sayılar 6'nın katları, Bora'nın durduğu sayılar 10'un katlarıdır. İkisinin de durduğu sayılar ortak katlardır; bunların en küçüğü EKOK'tur.
Adım 1: Doğrudaki işaretleri oku. Ada: 0, 6, 12, 18, 24, 30… Bora: 0, 10, 20, 30…
Adım 2: 0'dan sonra ilk kez birlikte işaretlenen sayı 30'dur.
Adım 3: Hesapla da doğrula: 6 = 2 · 3 ve 10 = 2 · 5. EKOK için her asal çarpanın en büyük üslüsünü al: 2 · 3 · 5 = 30.
Sağlama: 30 ÷ 6 = 5 ve 30 ÷ 10 = 3; ikisi de kalansız.
Sık yapılan hata: İki sayıyı çarpıp 60 demek. Çarpım her zaman bir ortak kattır ama en küçük ortak kat olmayabilir.
Cevap C.`
},
{
  id: "mat-ck-117",
  kazanim: "M.8.1.1.3",
  kademe: 1,
  zorluk: 1,
  soru: "**Aşağıdaki sayılardan hangisi 21 ile aralarında asaldır?**",
  gorsel: null,
  secenekler: ["9", "14", "15", "20"],
  dogru: 3,
  hatalar: [
    "İki sayı da tek olduğunda ortak böleni olmaz sanma: 9 = 3^{2} ve 21 = 3 · 7; ikisi de 3'e bölünür.",
    "7 ortak asal çarpanını gözden kaçırma: 14 = 2 · 7 ve 21 = 3 · 7.",
    "Yalnızca 7'yi kontrol edip 3'ü unutma: 15 = 3 · 5 ve 21 = 3 · 7; ikisi de 3'e bölünür.",
    null
  ],
  aciklama: `İki sayının 1'den başka ortak pozitif böleni yoksa bu sayılar aralarında asaldır. Sayıların kendilerinin asal olması gerekmez.
Adım 1: 21'i asal çarpanlarına ayır: 21 = 3 · 7. Öyleyse 21 ile aralarında asal olan sayı ne 3'e ne de 7'ye bölünmelidir.
Adım 2: Şıkları tek tek dene. 9 = 3^{2} → 3'e bölünür, olmaz. 14 = 2 · 7 → 7'ye bölünür, olmaz. 15 = 3 · 5 → 3'e bölünür, olmaz.
Adım 3: 20 = 2^{2} · 5 → ne 3 ne 7 vardır. EBOB(21, 20) = 1, yani aralarında asaldırlar.
Sık yapılan hata: Aralarında asal olmayı "ikisi de asal olmak" sanmak. 20 de 21 de asal değildir ama aralarında asaldırlar.
Cevap D.`
},
{
  id: "mat-ck-118",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "**180 sayısının kaç farklı asal çarpanı vardır?**",
  gorsel: null,
  secenekler: ["2", "3", "4", "5"],
  dogru: 1,
  hatalar: [
    "Bölmeyi yarıda bırakma: 180 = 2^{2} · 45 deyip 45'in içindeki 5'i görmeme.",
    null,
    "1'i asal çarpan sayma: 1 asal değildir, çünkü yalnızca bir pozitif böleni vardır.",
    "Tekrar eden asal çarpanları ayrı ayrı sayma: 180 = 2 · 2 · 3 · 3 · 5 yazılışında beş çarpan vardır ama bunların yalnızca üçü farklıdır."
  ],
  aciklama: `Bir sayının asal çarpanları, o sayıyı kalansız bölen asal sayılardır. "Farklı" denmişse aynı asal çarpan kaç kez geçerse geçsin bir kez sayılır.
Adım 1: 180'i en küçük asal sayıdan başlayarak böl: 180 ÷ 2 = 90, 90 ÷ 2 = 45.
Adım 2: 45 ikiye bölünmez, 3'e geç: 45 ÷ 3 = 15, 15 ÷ 3 = 5.
Adım 3: 5 ÷ 5 = 1, bölme bitti. Yani 180 = 2^{2} · 3^{2} · 5.
Adım 4: Kullanılan asal sayılar 2, 3 ve 5'tir: 3 farklı asal çarpan.
Sağlama: 4 · 9 · 5 = 180.
Sık yapılan hata: Çarpan sayısı ile farklı asal çarpan sayısını karıştırmak. 180'in toplam 18 pozitif tam sayı çarpanı vardır ama farklı asal çarpanı yalnızca 3 tanedir.
Cevap B.`
},
{
  id: "mat-ck-119",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir kodlama etkinliğinde öğrenciler 1'den 30'a kadar olan doğal sayıları aşağıdaki tabloya yazdıran bir program hazırlamıştır. Program, yazdırdığı sayılardan yalnızca asal olanların arka planını renklendirmektedir.\n**Buna göre tabloda kaç sayının arka planı renklenir?**",
  gorsel: `<svg viewBox="0 0 560 210" role="img" aria-label="1'den 30'a kadar sayıların 5 satır 6 sütun hâlinde dizildiği tablo"><g stroke="currentColor" stroke-width="1.5" fill="none"><rect x="20" y="15" width="522" height="180"/><line x1="107" y1="15" x2="107" y2="195"/><line x1="194" y1="15" x2="194" y2="195"/><line x1="281" y1="15" x2="281" y2="195"/><line x1="368" y1="15" x2="368" y2="195"/><line x1="455" y1="15" x2="455" y2="195"/><line x1="20" y1="51" x2="542" y2="51"/><line x1="20" y1="87" x2="542" y2="87"/><line x1="20" y1="123" x2="542" y2="123"/><line x1="20" y1="159" x2="542" y2="159"/></g><g fill="currentColor" font-size="18" text-anchor="middle"><text x="63" y="40">1</text><text x="150" y="40">2</text><text x="237" y="40">3</text><text x="324" y="40">4</text><text x="411" y="40">5</text><text x="498" y="40">6</text><text x="63" y="76">7</text><text x="150" y="76">8</text><text x="237" y="76">9</text><text x="324" y="76">10</text><text x="411" y="76">11</text><text x="498" y="76">12</text><text x="63" y="112">13</text><text x="150" y="112">14</text><text x="237" y="112">15</text><text x="324" y="112">16</text><text x="411" y="112">17</text><text x="498" y="112">18</text><text x="63" y="148">19</text><text x="150" y="148">20</text><text x="237" y="148">21</text><text x="324" y="148">22</text><text x="411" y="148">23</text><text x="498" y="148">24</text><text x="63" y="184">25</text><text x="150" y="184">26</text><text x="237" y="184">27</text><text x="324" y="184">28</text><text x="411" y="184">29</text><text x="498" y="184">30</text></g></svg>`,
  secenekler: ["12", "11", "10", "9"],
  dogru: 2,
  hatalar: [
    "Hem 1'i asal sayma hem de 9'u (tek sayı olduğu için) asal sanma: 9 = 3 · 3'tür.",
    "1'i asal sayma: 1'in yalnızca bir pozitif böleni vardır, oysa asal sayının tam iki böleni olur.",
    null,
    "2'yi asal saymama: çift olduğu için 2'yi eleme. Oysa 2, tek çift asal sayıdır."
  ],
  aciklama: `Asal sayı, 1'den büyük olan ve 1 ile kendisinden başka pozitif böleni bulunmayan sayıdır. 1 asal değildir; 2 ise hem çift hem asaldır.
Adım 1: Tablodaki sayıları eleyerek ilerle. 1'i çiz: asal değildir.
Adım 2: 2'yi bırak, 2'nin diğer katlarını (4, 6, 8, …, 30) çiz.
Adım 3: 3'ü bırak, 3'ün diğer katlarını (9, 15, 21, 27) çiz.
Adım 4: 5'i bırak, 25'i çiz. 7'yi bırak; 7'nin 30'a kadar olan katlarından 14, 21, 28 zaten çizilmiştir.
Adım 5: Geriye 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 kalır: 10 sayı.
Sağlama: 30'a kadar 30 sayı vardır; 1 ile birlikte 20 sayı elendi, 10 sayı kaldı.
Sık yapılan hata: 1'i asal saymak. Bu yüzden asal çarpanlara ayırmada da 1 hiçbir zaman çarpan olarak yazılmaz.
Cevap C.`
},
{
  id: "mat-ck-120",
  kazanim: "M.8.1.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir matematik dergisindeki bulmacada bir sayının asal çarpanlarına ayrılmış biçimi yazılmış, çarpanlardan biri koyu bir kutuyla gizlenmiştir. Bulmacanın görüntüsü aşağıdadır.\n**Buna göre kutunun altında gizlenen ifade aşağıdakilerden hangisidir?**",
  gorsel: `<svg viewBox="0 0 470 130" role="img" aria-label="Bulmaca kartı: 360 eşittir 2 üssü 3 çarpı gizli kutu çarpı 5"><rect x="12" y="12" width="446" height="106" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="30"><text x="42" y="78">360 = 2</text><text x="146" y="60" font-size="20">3</text><text x="163" y="78">·</text><text x="290" y="78">·</text><text x="320" y="78">5</text></g><rect x="190" y="44" width="80" height="48" rx="6" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><text x="230" y="76" font-size="28" text-anchor="middle" fill="var(--dolgu)" font-weight="bold">?</text></svg>`,
  secenekler: ["3^{2} · 5", "3^{3}", "3^{2}", "3"],
  dogru: 2,
  hatalar: [
    "5 çarpanını bir kez daha yazma: 2^{3} · 3^{2} · 5 · 5 = 1800 eder, 360 etmez.",
    "Üssü bir fazla alma: 2^{3} · 3^{3} · 5 = 1080 eder, 360 etmez.",
    null,
    "Aynı asal çarpanın kaç kez kullanıldığını saymama: 2^{3} · 3 · 5 = 120 eder, 360 etmez."
  ],
  aciklama: `Asal çarpanlara ayrılmış bir yazılışta bütün çarpanların çarpımı, ayrılan sayıya eşit olmalıdır.
Adım 1: Görünen çarpanları hesapla: 2^{3} = 8 ve diğeri 5. Bunların çarpımı 8 · 5 = 40'tır.
Adım 2: Gizlenen çarpanı bul: 360 ÷ 40 = 9.
Adım 3: 9'u asal çarpanlarıyla yaz. Bulmacada ayrılmış biçim istendiğine göre 9 değil 3^{2} yazılmalıdır.
Sağlama: 2^{3} · 3^{2} · 5 = 8 · 9 · 5 = 360.
Sık yapılan hata: 9'u olduğu gibi bırakmak. 9 asal değildir; asal çarpanlara ayrılmış bir yazılışta asal olmayan çarpan bulunamaz.
Cevap C.`
},
{
  id: "mat-ck-121",
  kazanim: "M.8.1.1.3",
  kademe: 1,
  zorluk: 2,
  soru: "Bir matematik öğretmeni tahtaya 24 ve 36 sayılarını yazmış ve öğrencilerden şunu istemiştir: \"Bu iki sayıyı aynı doğal sayıya bölün; öyle bir sayı seçin ki elde ettiğiniz iki bölüm aralarında asal olsun.\"\n**Buna göre öğrencilerin seçmesi gereken sayı kaçtır?**",
  gorsel: null,
  secenekler: ["2", "4", "6", "12"],
  dogru: 3,
  hatalar: [
    "İki sayının da çift olmasına bakıp ilk ortak böleni alma: 24 ÷ 2 = 12 ve 36 ÷ 2 = 18; 12 ile 18 hâlâ 6'ya bölünür.",
    "Ortak bölenlerden birini alıp durma: 24 ÷ 4 = 6 ve 36 ÷ 4 = 9; 6 ile 9 hâlâ 3'e bölünür.",
    "En büyük ortak böleni bulmadan durma: 24 ÷ 6 = 4 ve 36 ÷ 6 = 6; 4 ile 6 hâlâ 2'ye bölünür.",
    null
  ],
  aciklama: `İki sayı en büyük ortak bölenlerine (EBOB) bölündüğünde elde edilen bölümlerin ortak böleni kalmaz; yani bölümler aralarında asal olur.
Adım 1: 24 = 2^{3} · 3 ve 36 = 2^{2} · 3^{2}.
Adım 2: Ortak asal çarpanların küçük üslülerini çarp: EBOB(24, 36) = 2^{2} · 3 = 12.
Adım 3: Bölümleri bul: 24 ÷ 12 = 2 ve 36 ÷ 12 = 3.
Adım 4: 2 ile 3'ün 1'den başka ortak böleni yoktur; aralarında asaldırlar.
Sağlama: Şıkları küçükten büyüğe denersen her defasında bölümlerin ortak böleni kalır; ancak EBOB'a geldiğinde ortak bölen biter.
Sık yapılan hata: Ortak bölenlerden herhangi birini seçmek. Ortak bölen küçük seçilirse bölümlerde hâlâ ortak çarpan kalır.
Cevap D.`
},
{
  id: "mat-ck-122",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir hediyelik eşya mağazasının deposunda yüksekliği 12 cm olan kutularla yüksekliği 18 cm olan kutular bulunmaktadır. Vitrine, yalnızca 12 cm'lik kutulardan bir kule ile yalnızca 18 cm'lik kutulardan bir kule yan yana dizilecektir. İki kulenin yüksekliği birbirine eşit olacak ve bu iş için olabildiğince az kutu kullanılacaktır.\n**Buna göre vitrine toplam kaç kutu dizilir?**",
  gorsel: null,
  secenekler: ["5", "6", "30", "36"],
  dogru: 0,
  hatalar: [
    null,
    "İki kulenin de eşit sayıda kutudan oluşacağını sanma: 3 + 3 = 6; oysa kutuların yükseklikleri farklı olduğu için kutu sayıları da farklıdır.",
    "EKOK yerine 12 · 18 = 216'yı alma: 216 ÷ 12 + 216 ÷ 18 = 18 + 12 = 30 kutu gerekir; bu, en az kutu sayısı değildir.",
    "Ara sonucu cevap sanma: 36, kulelerin yüksekliğidir (EKOK); soru kutu sayısını soruyor."
  ],
  aciklama: `Bir kulenin yüksekliği 12'nin, diğerininki 18'in katı olmak zorundadır. İki yükseklik eşit ve en az olacağına göre aranan yükseklik EKOK'tur.
Adım 1: 12 = 2^{2} · 3 ve 18 = 2 · 3^{2}. Her asal çarpanın en büyük üslüsünü al: EKOK(12, 18) = 2^{2} · 3^{2} = 36. Kuleler 36 cm yüksekliğinde olur.
Adım 2: Kutu sayılarını bul: 36 ÷ 12 = 3 kutu ve 36 ÷ 18 = 2 kutu.
Adım 3: Topla: 3 + 2 = 5 kutu.
Sağlama: 3 · 12 = 36 ve 2 · 18 = 36; iki kule de aynı yükseklikte.
Sık yapılan hata: EKOK'u bulunca durmak. 36, kutu sayısı değil kule yüksekliğidir.
Cevap A.`
},
{
  id: "mat-ck-123",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir okulun kermesinde 63 bardak limonata ve 84 adet sandviç ziyaretçilere ikram edilecektir. Her ziyaretçiye eşit sayıda limonata ve eşit sayıda sandviç verilecek, ikramlardan hiç artmayacaktır.\n**Buna göre bu ikramdan en çok kaç ziyaretçi yararlanabilir?**",
  gorsel: null,
  secenekler: ["63", "21", "7", "3"],
  dogru: 1,
  hatalar: [
    "EBOB yerine küçük sayıyı alma: 63 ziyaretçi olsaydı 84 sandviç eşit paylaşılamazdı.",
    null,
    "Ortak asal çarpanlardan yalnızca birini alma: 7 bir ortak bölendir ama en büyüğü değildir.",
    "Ortak asal çarpanlardan yalnızca birini alma: 3 bir ortak bölendir ama en büyüğü değildir."
  ],
  aciklama: `İkramlar artmadan eşit paylaşılacağı için ziyaretçi sayısı hem 63'ü hem 84'ü kalansız bölmelidir. En çok ziyaretçi istendiğine göre bu sayı EBOB'tur.
Adım 1: 63 = 3^{2} · 7 ve 84 = 2^{2} · 3 · 7.
Adım 2: Ortak asal çarpanların küçük üslülerini çarp: EBOB(63, 84) = 3 · 7 = 21.
Adım 3: Kontrol et: 63 ÷ 21 = 3 bardak limonata, 84 ÷ 21 = 4 sandviç. Herkese 3 limonata ve 4 sandviç düşer, hiçbir şey artmaz.
Sağlama: 21 · 3 = 63 ve 21 · 4 = 84.
Sık yapılan hata: "En çok kişi, en çok paket, en büyük parça" ifadeleri EBOB'a; "en az süre, ilk kez birlikte, en küçük ortak sayı" ifadeleri EKOK'a işaret eder.
Cevap B.`
},
{
  id: "mat-ck-124",
  kazanim: "M.8.1.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Ada ile Bora, kumsalda aynı noktadan aynı yöne doğru düz bir çizgide yürümeye başlamıştır. Ada'nın bir adımı 36 cm, Bora'nın bir adımı 48 cm'dir ve ikisi de her adımını eşit uzunlukta atmaktadır. Başlangıçtaki ayak izleri aynı noktadadır.\n**Buna göre başlangıç noktasından sonra ikisinin ayak izi ilk kez kaç santimetre ileride yeniden çakışır?**",
  gorsel: `<svg viewBox="0 0 560 190" role="img" aria-label="Aynı noktadan başlayan iki yürüyüşçünün ayak izleri: Ada'nın adımı 36 cm, Bora'nın adımı 48 cm"><g stroke="currentColor" stroke-width="2"><line x1="40" y1="20" x2="40" y2="170" stroke-dasharray="6 5"/></g><g fill="var(--vurgu)"><ellipse cx="40" cy="55" rx="9" ry="13"/><ellipse cx="139" cy="55" rx="9" ry="13"/><ellipse cx="238" cy="55" rx="9" ry="13"/><ellipse cx="337" cy="55" rx="9" ry="13"/><ellipse cx="436" cy="55" rx="9" ry="13"/></g><g fill="var(--vurgu2)"><ellipse cx="40" cy="135" rx="9" ry="13"/><ellipse cx="172" cy="135" rx="9" ry="13"/><ellipse cx="304" cy="135" rx="9" ry="13"/><ellipse cx="436" cy="135" rx="9" ry="13"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="40" y1="78" x2="139" y2="78"/><line x1="40" y1="72" x2="40" y2="84"/><line x1="139" y1="72" x2="139" y2="84"/><line x1="40" y1="158" x2="172" y2="158"/><line x1="40" y1="152" x2="40" y2="164"/><line x1="172" y1="152" x2="172" y2="164"/></g><g fill="currentColor" font-size="15" text-anchor="middle"><text x="90" y="98">36 cm</text><text x="106" y="178">48 cm</text></g><g fill="currentColor" font-size="15" font-weight="bold"><text x="470" y="60">Ada</text><text x="470" y="140">Bora</text></g><text x="40" y="14" font-size="14" text-anchor="middle" fill="currentColor">Başlangıç</text></svg>`,
  secenekler: ["12", "84", "144", "1728"],
  dogru: 2,
  hatalar: [
    "EBOB ile EKOK'u karıştırma: EBOB(36, 48) = 12'dir; 12 cm'de ne Ada'nın ne Bora'nın ayak izi vardır.",
    "Adım uzunluklarını toplama: 36 + 48 = 84; 84 ne 36'nın ne 48'in katıdır.",
    null,
    "36 · 48 = 1728'i en küçük ortak kat sanma: burada da izler çakışır ama ilk kez değil."
  ],
  aciklama: `Ada'nın ayak izleri 36'nın katı, Bora'nınkiler 48'in katı olan uzaklıklardadır. İzlerin çakıştığı yerler ortak katlardır; ilk çakışma için EKOK aranır.
Adım 1: 36 = 2^{2} · 3^{2} ve 48 = 2^{4} · 3.
Adım 2: EKOK için her asal çarpanın en büyük üslüsünü al: 2^{4} · 3^{2} = 16 · 9 = 144.
Adım 3: Başlangıçtan 144 cm sonra izler ilk kez yeniden çakışır.
Sağlama: 144 ÷ 36 = 4, yani Ada 4 adım atar; 144 ÷ 48 = 3, yani Bora 3 adım atar. İkisi de tam adım sayısıyla o noktaya varır.
Sık yapılan hata: Ortak kat ararken EBOB'u kullanmak. EBOB ortak bölendir ve sayıların ikisinden de küçüktür; ortak kat ise ikisinden de küçük olamaz.
Cevap C.`
},
{
  id: "mat-ck-125",
  kazanim: "M.8.1.1.3",
  kademe: 1,
  zorluk: 2,
  soru: "Bir sınıf etkinliğinde üzerinde 6, 10, 21 ve 25 yazan dört taş vardır. Oyunun kuralına göre iki taş, ancak üzerlerindeki sayılar aralarında asalsa yan yana konulabilmektedir. Taşlar aşağıda gösterilmiştir.\n**Buna göre bu taşlardan kaç farklı ikili yan yana konulabilir?**",
  gorsel: `<svg viewBox="0 0 470 110" role="img" aria-label="Üzerlerinde 6, 10, 21 ve 25 yazan dört taş"><g stroke="currentColor" stroke-width="2"><rect x="20" y="22" width="90" height="66" rx="10" fill="var(--dolgu)"/><rect x="134" y="22" width="90" height="66" rx="10" fill="var(--dolgu)"/><rect x="248" y="22" width="90" height="66" rx="10" fill="var(--dolgu)"/><rect x="362" y="22" width="90" height="66" rx="10" fill="var(--dolgu)"/></g><g fill="currentColor" font-size="30" text-anchor="middle" font-weight="bold"><text x="65" y="66">6</text><text x="179" y="66">10</text><text x="293" y="66">21</text><text x="407" y="66">25</text></g></svg>`,
  secenekler: ["2", "3", "4", "6"],
  dogru: 1,
  hatalar: [
    "İçinde asal olmayan iki sayı bulunan ikilileri hiç denememe: 6 ile 25'in de ortak böleni yoktur.",
    null,
    "10 ile 25'i aralarında asal sanma: ikisi de 5'e bölünür.",
    "Bütün ikilileri sayma: dört taştan 6 farklı ikili kurulabilir ama bunların hepsi kurala uymaz."
  ],
  aciklama: `İki sayının 1'den başka ortak pozitif böleni yoksa aralarında asaldırlar. Bunu görmenin en kolay yolu sayıları asal çarpanlarına ayırıp ortak asal çarpan aramaktır.
Adım 1: Sayıları ayır: 6 = 2 · 3, 10 = 2 · 5, 21 = 3 · 7, 25 = 5^{2}.
Adım 2: Bütün ikilileri sırayla yaz; dört sayıdan 6 ikili çıkar: (6, 10), (6, 21), (6, 25), (10, 21), (10, 25), (21, 25).
Adım 3: Ortak asal çarpanı olanları ele: (6, 10) → 2 ortak; (6, 21) → 3 ortak; (10, 25) → 5 ortak. Bu üç ikili kurala uymaz.
Adım 4: Geriye (6, 25), (10, 21) ve (21, 25) kalır: 3 ikili.
Sık yapılan hata: İkilileri rastgele denemek. Dört sayıda ikilileri sıraya koyarak yazarsan (önce 6'lı olanlar, sonra 10'lu olanlar…) hiçbirini atlamazsın.
Cevap B.`
},
/* ===================== KADEME 2 — PEKİŞTİRME ===================== */
{
  id: "mat-ck-213",
  kazanim: "M.8.1.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Ada bir sayı tutmuş ve arkadaşlarına ipucu olarak bu sayının asal çarpanlarına ayrılmış biçimini söylemiştir: 2^{2} · 3 · 5.\n**Buna göre Ada'nın tuttuğu sayının 10'dan küçük kaç pozitif tam sayı çarpanı vardır?**",
  gorsel: null,
  secenekler: ["4", "5", "6", "7"],
  dogru: 2,
  hatalar: [
    "Yalnızca 1'i ve asal çarpanları sayma: 1, 2, 3, 5 bulunmuş; 4 ile 6 atlanmış.",
    "1'i çarpan saymama: 1, her sayının çarpanıdır.",
    null,
    "Sınırı dâhil etme: 10 da bir çarpandır ama \"10'dan küçük\" dendiği için sayılmaz."
  ],
  aciklama: `Bir sayının çarpanları, asal çarpanlarının birbiriyle çarpılmasıyla elde edilir; 1 de her zaman çarpandır.
Adım 1: Sayıyı bul: 2^{2} · 3 · 5 = 4 · 15 = 60.
Adım 2: 60'ın bütün çarpanlarını çiftler hâlinde yaz: 1 · 60, 2 · 30, 3 · 20, 4 · 15, 5 · 12, 6 · 10.
Adım 3: Çarpanları sırala: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60.
Adım 4: 10'dan küçük olanları say: 1, 2, 3, 4, 5, 6 → 6 tane.
Sağlama: 7, 8 ve 9 sayıları 60'ı kalansız bölmez; listede olmamaları doğrudur.
Sık yapılan hata: "10'dan küçük" ifadesine 10'u da katmak. Sınırın dâhil olup olmadığına her zaman dikkat et.
Cevap C.`
},
{
  id: "mat-ck-214",
  kazanim: "M.8.1.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir matematik kulübü, çalıştığı sayıları aşağıdaki tabloya işlemektedir. Tabloda her sayının yanına asal çarpanlarına ayrılmış biçimi yazılmaktadır. Son satırdaki sayı henüz yazılmamıştır.\n**Buna göre son satıra yazılması gereken sayı kaçtır?**",
  gorsel: `<table class="tablo"><tr><th>Sayı</th><th>Asal çarpanlarına ayrılmış biçimi</th></tr><tr><td>50</td><td>2 · 5<sup>2</sup></td></tr><tr><td>75</td><td>3 · 5<sup>2</sup></td></tr><tr><td>150</td><td>2 · 3 · 5<sup>2</sup></td></tr><tr><td>?</td><td>2<sup>3</sup> · 5<sup>2</sup></td></tr></table>`,
  secenekler: ["80", "100", "125", "200"],
  dogru: 3,
  hatalar: [
    "Üsleri yer değiştirme: 80 = 2^{4} · 5 biçimindedir, 2^{3} · 5^{2} değildir.",
    "2'nin üssünü eksik alma: 100 = 2^{2} · 5^{2} eder.",
    "2 çarpanını hiç almama: 125 = 5^{3} eder.",
    null
  ],
  aciklama: `Asal çarpanlarına ayrılmış bir yazılışta çarpanların çarpımı, ayrılan sayıyı verir.
Adım 1: Üslü çarpanları aç: 2^{3} = 2 · 2 · 2 = 8 ve 5^{2} = 5 · 5 = 25.
Adım 2: Çarp: 8 · 25 = 200.
Sağlama: 200'ü ayırmayla geri kontrol et: 200 ÷ 2 = 100, 100 ÷ 2 = 50, 50 ÷ 2 = 25, 25 ÷ 5 = 5, 5 ÷ 5 = 1. Üç kez 2'ye, iki kez 5'e bölündü: 200 = 2^{3} · 5^{2}.
Sık yapılan hata: Üssü hangi tabana ait olduğuna bakmadan okumak. 2^{4} · 5 ile 2^{3} · 5^{2} yazılışlarında da beş çarpan vardır ama sonuçlar farklıdır: 80 ve 200.
Cevap D.`
},
{
  id: "mat-ck-215",
  kazanim: "M.8.1.1.2",
  kademe: 2,
  zorluk: 2,
  soru: "Bir parkın 100 metre uzunluğundaki düz yürüyüş yolunun kenarına, başlangıç noktasından itibaren her 6 metrede bir aydınlatma direği, her 9 metrede bir bank yerleştirilmiştir. Başlangıç noktasına ne direk ne bank konulmuştur.\n**Buna göre bu yolda kaç noktada direk ile bank yan yana bulunur?**",
  gorsel: null,
  secenekler: ["33", "16", "11", "5"],
  dogru: 3,
  hatalar: [
    "EBOB ile EKOK'u karıştırma: EBOB(6, 9) = 3 alınıp 3'ün 100'e kadar olan katları (33 tane) sayılmış.",
    "Yalnızca direkleri sayma: 6'nın 100'e kadar 16 katı vardır.",
    "Yalnızca bankları sayma: 9'un 100'e kadar 11 katı vardır.",
    null
  ],
  aciklama: `Direkler 6'nın katı olan metrelerde, banklar 9'un katı olan metrelerde bulunur. İkisinin yan yana olduğu noktalar ortak katlardır.
Adım 1: 6 = 2 · 3 ve 9 = 3^{2}. EKOK için her asal çarpanın en büyük üslüsünü al: EKOK(6, 9) = 2 · 3^{2} = 18.
Adım 2: Demek ki her 18 metrede bir direk ile bank yan yana gelir.
Adım 3: 100 metreye kadar 18'in katlarını yaz: 18, 36, 54, 72, 90. Bir sonraki 108'dir, yol biter.
Adım 4: 5 nokta vardır. Kısa yol: 100 ÷ 18 = 5, kalan 10.
Sık yapılan hata: Ortak nokta ararken EBOB kullanmak. EBOB sayıları bölen bir değerdir; burada aranan ise iki sayının da katı olan bir uzaklıktır.
Cevap D.`
},
{
  id: "mat-ck-216",
  kazanim: "M.8.1.1.2",
  kademe: 2,
  zorluk: 2,
  soru: "Bir atölyede üretilen 90 mavi ve 150 beyaz düğme, birbirinin aynısı kartonlara dikilecektir. Her kartonda eşit sayıda mavi, eşit sayıda beyaz düğme bulunacak ve hiç düğme artmayacaktır. Kullanılan karton sayısı olabildiğince çok olacaktır.\n**Buna göre bir kartondaki beyaz düğme sayısı ile mavi düğme sayısının farkı kaçtır?**",
  gorsel: null,
  secenekler: ["2", "8", "30", "60"],
  dogru: 0,
  hatalar: [
    null,
    "Farkı değil toplamı alma: bir kartonda 3 mavi ve 5 beyaz düğme vardır; 3 + 5 = 8 bulunmuş.",
    "Ara sonucu cevap sanma: 30, karton sayısıdır (EBOB); soru bir kartondaki düğme sayılarının farkını soruyor.",
    "Kartona inmeden toplam sayıların farkını alma: 150 − 90 = 60."
  ],
  aciklama: `Düğmeler artmadan eşit dağıtılacağı için karton sayısı hem 90'ı hem 150'yi kalansız bölmelidir. Karton sayısı en çok olacağına göre bu sayı EBOB'tur.
Adım 1: 90 = 2 · 3^{2} · 5 ve 150 = 2 · 3 · 5^{2}. Ortak asal çarpanların küçük üslülerini çarp: EBOB(90, 150) = 2 · 3 · 5 = 30. Yani 30 karton kullanılır.
Adım 2: Bir kartondaki düğme sayılarını bul: 90 ÷ 30 = 3 mavi, 150 ÷ 30 = 5 beyaz.
Adım 3: Farkı al: 5 − 3 = 2.
Sağlama: 30 · 3 = 90 ve 30 · 5 = 150; hiçbir düğme artmıyor.
Sık yapılan hata: EBOB'u bulunca durmak. 30, düğme sayısı değil karton sayısıdır; soru bir kartondaki düğmeleri karşılaştırıyor.
Cevap A.`
},
{
  id: "mat-ck-217",
  kazanim: "M.8.1.1.3",
  kademe: 2,
  zorluk: 2,
  soru: "Bir matematik yarışmasının hızlı turunda yarışmacılara şu soru sorulmuştur:\n\"42 ile aralarında asal olan iki basamaklı doğal sayıların en büyüğünü bulunuz.\"\n**Buna göre yarışmacıların vermesi gereken cevap aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["95", "97", "98", "99"],
  dogru: 1,
  hatalar: [
    "97'nin de 42 ile aralarında asal olduğunu fark etmeyip aramayı erken bitirme: 95 koşulu sağlar ama en büyüğü değildir.",
    null,
    "Yalnızca 3'ü kontrol etme: 98 = 2 · 7^{2} sayısı hem 2'ye hem 7'ye bölünür, 42 de öyle.",
    "Yalnızca çift olup olmadığına bakma: 99 tektir ama 99 = 3^{2} · 11 ve 42 = 2 · 3 · 7 sayılarının ikisi de 3'e bölünür."
  ],
  aciklama: `İki sayının 1'den başka ortak pozitif böleni yoksa aralarında asaldırlar.
Adım 1: 42'yi asal çarpanlarına ayır: 42 = 2 · 3 · 7. Aranan sayı ne 2'ye, ne 3'e, ne de 7'ye bölünmelidir.
Adım 2: En büyük iki basamaklı sayıdan başlayarak geriye doğru in. 99 = 3^{2} · 11 → 3'e bölünür, olmaz.
Adım 3: 98 = 2 · 7^{2} → hem 2'ye hem 7'ye bölünür, olmaz.
Adım 4: 97 → tek sayıdır, rakamları toplamı 16 olduğu için 3'e bölünmez, 7 · 13 = 91 ve 7 · 14 = 98 olduğundan 7'ye de bölünmez. Öyleyse 42 ile aralarında asaldır.
Sağlama: 97 zaten asal bir sayıdır ve 42'yi bölmez; bu yüzden EBOB(42, 97) = 1'dir.
Sık yapılan hata: Yalnızca tek olup olmadığına bakmak. 42'nin asal çarpanlarının üçünü de tek tek kontrol etmen gerekir.
Cevap B.`
},
{
  id: "mat-ck-218",
  kazanim: "M.8.1.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir bilim merkezinde ziyaretçilere giriş numarası verilmektedir. Sistem, her ziyaretçinin gideceği salonu şu kuralla belirlemektedir: Giriş numarası asal çarpanlarına ayrılır ve **en büyük** asal çarpan salon numarası olur. Bazı ziyaretçilerin bilgileri aşağıdaki tabloda verilmiştir. Kaan'ın giriş numarası 154'tür.\n**Buna göre Kaan kaç numaralı salona gider?**",
  gorsel: `<table class="tablo"><tr><th>Giriş numarası</th><th>Asal çarpanlarına ayrılmış biçimi</th><th>Salon</th></tr><tr><td>60</td><td>2<sup>2</sup> · 3 · 5</td><td>5</td></tr><tr><td>63</td><td>3<sup>2</sup> · 7</td><td>7</td></tr><tr><td>154</td><td>?</td><td>?</td></tr></table>`,
  secenekler: ["7", "11", "14", "77"],
  dogru: 1,
  hatalar: [
    "Ayırmayı tamamlamadan durma: 154 = 2 · 7 · 11 yazılışında 7 bir asal çarpandır ama en büyüğü değildir.",
    null,
    "14'ü asal sanma: 14 = 2 · 7 olduğundan asal değildir.",
    "77'yi asal sanma: 154 = 2 · 77 yazılıp orada durulmuş; oysa 77 = 7 · 11'dir."
  ],
  aciklama: `Asal çarpanlara ayırmada bölme, 1'e ulaşana kadar sürdürülür; ancak o zaman bütün çarpanların asal olduğundan emin olabilirsin.
Adım 1: 154 çift olduğu için 2'ye böl: 154 ÷ 2 = 77.
Adım 2: 77 sayısı 2'ye, 3'e ve 5'e bölünmez; 7'ye bölünür: 77 ÷ 7 = 11.
Adım 3: 11 asaldır: 11 ÷ 11 = 1. Bölme bitti: 154 = 2 · 7 · 11.
Adım 4: Asal çarpanlar 2, 7 ve 11'dir; en büyüğü 11'dir. Kaan 11 numaralı salona gider.
Sağlama: 2 · 7 · 11 = 154.
Sık yapılan hata: Bölme sonucunda kalan sayıyı asal sanıp durmak. 77 iki basamaklı ve tek olduğu için asal görünür, ama 7'ye bölünür.
Cevap B.`
},
{
  id: "mat-ck-219",
  kazanim: "M.8.1.1.2",
  kademe: 2,
  zorluk: 2,
  soru: "Aşağıdaki şemada A ve B doğal sayılarının asal çarpanları gösterilmiştir. Ortadaki bölgede yazan çarpanlar iki sayıda da bulunmakta, yanlardaki bölgelerde yazanlar ise yalnızca kendi sayısında bulunmaktadır.\n**Buna göre EKOK(A, B) kaçtır?**",
  gorsel: `<svg viewBox="0 0 480 240" role="img" aria-label="A ve B sayılarının asal çarpanlarını gösteren iki kesişen çember; solda 2 ve 2, ortada 3 ve 5, sağda 7"><g fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="185" cy="130" r="95"/><circle cx="295" cy="130" r="95"/></g><g fill="currentColor" font-size="22" text-anchor="middle"><text x="120" y="122">2</text><text x="120" y="152">2</text><text x="240" y="122">3</text><text x="240" y="152">5</text><text x="360" y="138">7</text></g><g font-size="20" font-weight="bold" text-anchor="middle"><text x="120" y="32" fill="var(--vurgu)">A</text><text x="360" y="32" fill="var(--vurgu2)">B</text></g><g stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.6"><line x1="120" y1="42" x2="120" y2="98"/><line x1="360" y1="42" x2="360" y2="112"/></g></svg>`,
  secenekler: ["15", "105", "420", "6300"],
  dogru: 2,
  hatalar: [
    "EBOB ile EKOK'u karıştırma: ortadaki bölgedeki çarpanların çarpımı olan 3 · 5 = 15, EBOB'tur.",
    "Yalnızca bir sayıyı hesaplama: 3 · 5 · 7 = 105, B sayısının kendisidir.",
    null,
    "İki sayıyı çarpma: A · B = 60 · 105 = 6300; burada ortak çarpanlar iki kez sayılmıştır."
  ],
  aciklama: `Bu şemada A sayısı sol ve orta bölgedeki, B sayısı orta ve sağ bölgedeki çarpanların çarpımıdır. EKOK ise üç bölgedeki bütün çarpanların çarpımıdır; çünkü EKOK'ta her asal çarpan en çok geçtiği kadar alınır.
Adım 1: Sayıları yaz: A = 2 · 2 · 3 · 5 = 60 ve B = 3 · 5 · 7 = 105.
Adım 2: EBOB, ortak bölgenin çarpımıdır: 3 · 5 = 15.
Adım 3: EKOK, bütün bölgelerin çarpımıdır: (2 · 2) · (3 · 5) · 7 = 4 · 15 · 7 = 420.
Sağlama: 420 ÷ 60 = 7 ve 420 ÷ 105 = 4; ikisi de kalansız. Ayrıca EBOB · EKOK = 15 · 420 = 6300 = 60 · 105.
Sık yapılan hata: İki sayıyı doğrudan çarpmak. Çarpımda ortak çarpanlar iki kez yer aldığı için sonuç EKOK'tan büyük çıkar.
Cevap C.`
},
{
  id: "mat-ck-220",
  kazanim: "M.8.1.1.1",
  kademe: 2,
  zorluk: 3,
  soru: "Bir televizyon yarışmasının \"Çarpanlara Ayır\" bölümünde yarışmacıya bir sayı verilir. Yarışmacı bu sayıyı, ikisi de 1'den büyük iki doğal sayının çarpımı biçiminde yazmak zorundadır. Yarışmacının o turda aldığı ceza puanı, yazdığı iki sayının toplamına eşittir ve amaç ceza puanını en küçük yapmaktır. Örnek bir tur aşağıdaki tabloda gösterilmiştir. Bu turda Deniz'e 96 sayısı verilmiştir.\n**Buna göre Deniz'in alabileceği __en küçük__ ceza puanı kaçtır?**",
  gorsel: `<table class="tablo"><tr><th>Verilen sayı</th><th>Yazılabilecek çarpımlar</th><th>Ceza puanı</th></tr><tr><td rowspan="2">12</td><td>2 · 6</td><td>8</td></tr><tr><td>3 · 4</td><td>7</td></tr><tr><td>12</td><td colspan="2">En küçük ceza puanı: 7</td></tr></table>`,
  secenekler: ["20", "22", "28", "35"],
  dogru: 0,
  hatalar: [
    null,
    "Bütün çarpan çiftlerini denememe: 6 · 16 çiftinde durulmuş; oysa 8 · 12 çifti daha küçük toplam verir.",
    "Bütün çarpan çiftlerini denememe: 4 · 24 çiftinde durulmuş.",
    "Yalnızca asal çarpanı deneme: 96'yı 3 · 32 biçiminde yazıp orada durma."
  ],
  aciklama: `Bir sayıyı iki çarpanın çarpımı olarak yazmanın bütün yollarını görmek için çarpanları çiftler hâlinde sıralamak gerekir. Çiftteki iki sayı birbirine ne kadar yakınsa toplamları o kadar küçük olur.
Adım 1: 96'yı asal çarpanlarına ayır: 96 = 2^{5} · 3.
Adım 2: 1'den büyük iki çarpandan oluşan bütün çiftleri yaz: 2 · 48, 3 · 32, 4 · 24, 6 · 16, 8 · 12.
Adım 3: Toplamları hesapla: 2 + 48 = 50, 3 + 32 = 35, 4 + 24 = 28, 6 + 16 = 22, 8 + 12 = 20.
Adım 4: En küçüğü 20'dir. Deniz 96'yı 8 · 12 biçiminde yazmalıdır.
Sağlama: 8 · 12 = 96 ve iki sayı da 1'den büyüktür. Bir sonraki çift (12 · 8) aynı çiftin yer değiştirmiş hâlidir, yeni bir toplam vermez.
Sık yapılan hata: İlk bulunan çiftte durmak. "En az / en fazla" diye soran sorularda bütün olasılıkları yazıp karşılaştırmalısın.
Cevap A.`
},
{
  id: "mat-ck-221",
  kazanim: "M.8.1.1.1",
  kademe: 2,
  zorluk: 3,
  soru: "Bir takı atölyesinde 300 boncuk vardır. Boncukların tamamı, her dizide eşit sayıda boncuk bulunacak ve hiç boncuk artmayacak biçimde dizilere ayrılacaktır. Atölye sahibi, bir dizideki boncuk sayısının tek sayı olmasını istemektedir.\n**Buna göre bir dizide __en fazla__ kaç boncuk bulunabilir?**",
  gorsel: null,
  secenekler: ["15", "25", "75", "150"],
  dogru: 2,
  hatalar: [
    "5 çarpanının iki kez bulunduğunu gözden kaçırma: 3 · 5 = 15 tek sayıdır ama en büyük tek çarpan değildir.",
    "Yalnızca 5'in üslülerine bakma: 25 tek sayıdır ama 3 çarpanı da kullanılabilir.",
    null,
    "Tek sayı koşulunu atlama: 150, 300'ün en büyük öz çarpanıdır ama çift sayıdır."
  ],
  aciklama: `Bir dizideki boncuk sayısı 300'ü kalansız bölmelidir; yani 300'ün bir çarpanı olmalıdır. Bu çarpanın tek olması, içinde hiç 2 çarpanı bulunmaması demektir.
Adım 1: 300'ü asal çarpanlarına ayır: 300 = 2^{2} · 3 · 5^{2}.
Adım 2: Tek çarpanlar yalnızca 3 ve 5'ten üretilebilir; 2'lerin hiçbirini kullanamazsın.
Adım 3: 3 ve 5'in hepsini kullanırsan en büyüğünü elde edersin: 3 · 5^{2} = 3 · 25 = 75.
Adım 4: Bütün tek çarpanları listeleyerek doğrula: 1, 3, 5, 15, 25, 75. En büyüğü 75'tir.
Sağlama: 300 ÷ 75 = 4; yani 4 dizi olur ve her dizide 75 boncuk bulunur. Hiç boncuk artmaz.
Sık yapılan hata: "En fazla" deyince doğrudan 150'yi seçmek. 150 = 2 · 3 · 5^{2} çift sayıdır; koşulu sağlamaz.
Cevap C.`
},
{
  id: "mat-ck-222",
  kazanim: "M.8.1.1.2",
  kademe: 2,
  zorluk: 3,
  soru: "Bir kırtasiye deposundaki kalemler ve silgiler, her kutuda eşit sayıda kalem ve eşit sayıda silgi bulunacak biçimde kutulanmıştır. Kutulama bittiğinde 2 kalem ile 2 silgi artmış ve bunlar depoda kalmıştır. Bu iş için olabildiğince çok kutu kullanılmıştır. Depodaki ürün sayıları aşağıdaki tabloda verilmiştir.\n**Buna göre kaç kutu kullanılmıştır?**",
  gorsel: `<table class="tablo"><tr><th>Ürün</th><th>Depodaki toplam sayı</th></tr><tr><td>Kalem</td><td>158</td></tr><tr><td>Silgi</td><td>218</td></tr></table>`,
  secenekler: ["2", "12", "13", "18"],
  dogru: 1,
  hatalar: [
    "Artan ürünleri çıkarmadan işlem yapma: EBOB(158, 218) = 2 bulunur; oysa kutulanan sayılar 156 ve 216'dır.",
    null,
    "Ara sonucu cevap sanma: 13, bir kutudaki kalem sayısıdır.",
    "Ara sonucu cevap sanma: 18, bir kutudaki silgi sayısıdır."
  ],
  aciklama: `Artan ürünler kutulanmadığı için önce kutulanan miktarları bulmalısın; kutu sayısı bu miktarların ortak böleni olur.
Adım 1: Artanları çıkar: 158 − 2 = 156 kalem ve 218 − 2 = 216 silgi kutulanmıştır.
Adım 2: Kutu sayısı hem 156'yı hem 216'yı kalansız bölmeli ve en çok olmalıdır: EBOB aranır.
Adım 3: 156 = 2^{2} · 3 · 13 ve 216 = 2^{3} · 3^{3}. Ortak asal çarpanların küçük üslülerini çarp: EBOB(156, 216) = 2^{2} · 3 = 12.
Adım 4: 12 kutu kullanılmıştır.
Sağlama: 156 ÷ 12 = 13 kalem ve 216 ÷ 12 = 18 silgi; her kutuda 13 kalem, 18 silgi olur ve depoda 2'şer ürün kalır.
Sık yapılan hata: Artan miktarı çıkarmadan doğrudan EBOB almak. "Şu kadarı arttı" diyen sorularda önce artanı çıkar, sonra EBOB'a geç.
Cevap B.`
},
{
  id: "mat-ck-223",
  kazanim: "M.8.1.1.2",
  kademe: 2,
  zorluk: 3,
  soru: "Bir bisiklet tekerleğinin çemberine, jant tellerinin geçirileceği 72 delik eşit aralıklarla açılmış ve delikler 1'den 72'ye kadar numaralanmıştır. Usta, telleri aşağıdaki tabloda verilen kurala göre takmaktadır. Bir deliğe iki tel birden geçmediği için hem gümüş hem siyah tel takılması gereken deliklere yalnızca gümüş tel takılmıştır.\n**Buna göre tekerleğe toplam kaç jant teli takılmıştır?**",
  gorsel: `<table class="tablo"><tr><th>Telin rengi</th><th>Hangi deliklere takılır?</th></tr><tr><td>Gümüş</td><td>Numarası 8'in katı olan delikler</td></tr><tr><td>Siyah</td><td>Numarası 12'nin katı olan delikler</td></tr></table>`,
  secenekler: ["6", "9", "12", "15"],
  dogru: 2,
  hatalar: [
    "Yalnızca siyah telleri sayma: 72'ye kadar 12'nin 6 katı vardır.",
    "Yalnızca gümüş telleri sayma: 72'ye kadar 8'in 9 katı vardır.",
    null,
    "Ortak delikleri iki kez sayma: 9 + 6 = 15; oysa bu deliklere tek tel takılmıştır."
  ],
  aciklama: `Bazı delikler hem 8'in hem 12'nin katıdır; bu delikler iki listede de geçtiği için bir kez sayılmalıdır.
Adım 1: Gümüş tel sayısı: 72 ÷ 8 = 9 delik (8, 16, 24, …, 72).
Adım 2: Siyah tel sayısı: 72 ÷ 12 = 6 delik (12, 24, 36, 48, 60, 72).
Adım 3: İki listede de bulunan delikleri bul. Bunlar hem 8'in hem 12'nin katıdır: 8 = 2^{3}, 12 = 2^{2} · 3 → EKOK(8, 12) = 2^{3} · 3 = 24. 72 ÷ 24 = 3 delik vardır: 24, 48, 72.
Adım 4: Bu 3 delikte iki kez saydığın için bir kez çıkar: 9 + 6 − 3 = 12 tel.
Sağlama: Yalnız gümüş 9 − 3 = 6, yalnız siyah 6 − 3 = 3, ortak 3 delik; 6 + 3 + 3 = 12.
Sık yapılan hata: İki grubu doğrudan toplamak. Ortak elemanları bir kez çıkarmazsan sonuç şişer.
Cevap C.`
},
{
  id: "mat-ck-224",
  kazanim: "M.8.1.1.3",
  kademe: 2,
  zorluk: 3,
  soru: "Bir çerçeveci, çevresi 36 cm olan dikdörtgen biçiminde bir çerçeve yapacaktır. Çerçevenin kenar uzunlukları santimetre cinsinden birer doğal sayı olacak, iki kenar da 1 cm'den uzun olacak ve uzun kenar ile kısa kenarın uzunlukları **aralarında asal** olacaktır.\n**Buna göre uzun kenarın uzunluğu __en fazla__ kaç santimetre olabilir?**",
  gorsel: `<svg viewBox="0 0 420 200" role="img" aria-label="Çevresi 36 santimetre olan bir dikdörtgen çerçeve; uzun kenar a, kısa kenar b"><rect x="70" y="42" width="250" height="110" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="88" y="60" width="214" height="74" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><g fill="currentColor" font-size="17" text-anchor="middle"><text x="195" y="30">a cm</text><text x="360" y="102">b cm</text><text x="195" y="184" font-weight="bold">Çevre = 36 cm</text></g><g stroke="var(--vurgu)" stroke-width="2"><line x1="70" y1="38" x2="320" y2="38"/><line x1="336" y1="42" x2="336" y2="152"/></g></svg>`,
  secenekler: ["11", "13", "15", "17"],
  dogru: 1,
  hatalar: [
    "Bulunan ilk uygun çiftte durma: 11 ile 7 aralarında asaldır ama 13 ile 5 çifti de uygundur ve uzun kenarı daha büyüktür.",
    null,
    "Ortak böleni kontrol etmeme: 15 ile 3'ün ikisi de 3'e bölünür, aralarında asal değillerdir.",
    "\"İki kenar da 1 cm'den uzun\" koşulunu atlama: 17 ile 1 aralarında asaldır ama kısa kenar 1 cm olamaz."
  ],
  aciklama: `Dikdörtgenin çevresi, uzun ve kısa kenarın toplamının iki katıdır.
Adım 1: Kenarların toplamını bul: 36 ÷ 2 = 18. Yani a + b = 18'dir.
Adım 2: Toplamı 18 olan, ikisi de 1'den büyük çiftleri uzun kenarı büyükten küçüğe olacak biçimde yaz: (16, 2), (15, 3), (14, 4), (13, 5), (12, 6), (11, 7), (10, 8).
Adım 3: Baştan başlayıp aralarında asallığı kontrol et. (16, 2) → ikisi de 2'ye bölünür. (15, 3) → ikisi de 3'e bölünür. (14, 4) → ikisi de 2'ye bölünür.
Adım 4: (13, 5) → 13 asaldır ve 5'i bölmez; ortak bölenleri yalnızca 1'dir. Öyleyse uzun kenar en fazla 13 cm olabilir.
Sağlama: 13 + 5 = 18 ve çevre 2 · 18 = 36 cm.
Sık yapılan hata: (17, 1) çiftini seçmek. 17 ile 1 gerçekten aralarında asaldır ama soru iki kenarın da 1 cm'den uzun olmasını istiyor.
Cevap B.`
},
{
  id: "mat-ck-225",
  kazanim: "M.8.1.1.2",
  kademe: 2,
  zorluk: 3,
  soru: "Bir yazılım dersinde öğrenciler, girilen iki doğal sayının **bütün ortak pozitif bölenlerini** ekrana alt alta yazan bir program hazırlamıştır. Programın örnek bir çalışması aşağıda gösterilmiştir. Elif programa 48 ve 72 sayılarını girmiştir.\n**Buna göre ekranda kaç sayı görünür?**",
  gorsel: `<svg viewBox="0 0 500 200" role="img" aria-label="Program ekranı: girilen sayılar 18 ve 30, ekranda 1, 2, 3, 6 yazıyor"><rect x="14" y="14" width="472" height="172" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><line x1="14" y1="56" x2="486" y2="56" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="17"><text x="32" y="42" font-weight="bold">Örnek çalışma — girilen sayılar: 18 ve 30</text><text x="32" y="86">Ortak bölenler:</text></g><g fill="var(--vurgu)" font-size="22" font-weight="bold"><text x="60" y="122">1</text><text x="140" y="122">2</text><text x="220" y="122">3</text><text x="300" y="122">6</text></g><text x="32" y="164" font-size="17" fill="currentColor">Ekrandaki sayı adedi: 4</text></svg>`,
  secenekler: ["4", "6", "8", "24"],
  dogru: 2,
  hatalar: [
    "Yalnızca ortak asal çarpanları ve 1'i sayma: 1, 2, 3 ve 24'ün kendisi alınmış; aradaki bölenler atlanmış.",
    "24'ün bölenlerini yazarken 1'i ve 24'ü saymama: 2, 3, 4, 6, 8, 12 → 6 bulunmuş.",
    null,
    "Ara sonucu cevap sanma: 24, ortak bölenlerin en büyüğüdür (EBOB); soru kaç tane ortak bölen olduğunu soruyor."
  ],
  aciklama: `İki sayının ortak bölenleri, tam olarak EBOB'larının bölenleridir. Örnek çalışmada da 18 ile 30'un EBOB'u 6'dır ve ekrandaki 1, 2, 3, 6 sayıları 6'nın bölenleridir.
Adım 1: 48 = 2^{4} · 3 ve 72 = 2^{3} · 3^{2}.
Adım 2: Ortak asal çarpanların küçük üslülerini çarp: EBOB(48, 72) = 2^{3} · 3 = 24.
Adım 3: 24'ün bölenlerini çiftler hâlinde bul: 1 · 24, 2 · 12, 3 · 8, 4 · 6. Bölenler: 1, 2, 3, 4, 6, 8, 12, 24 → 8 tane.
Adım 4: Ekranda 8 sayı görünür.
Sağlama: Bu sekiz sayının her biri hem 48'i hem 72'yi kalansız böler; örneğin 8 → 48 ÷ 8 = 6 ve 72 ÷ 8 = 9.
Sık yapılan hata: Ortak bölenleri tek tek aramaya kalkmak. EBOB'u bulup onun bölenlerini yazmak hem hızlı hem güvenlidir.
Cevap C.`
},
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "mat-ck-313",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir çiftlikte bir günde toplanan 252 yumurtanın tamamı viyollere yerleştirilecektir. Her viyole eşit sayıda yumurta konulacak ve hiç yumurta artmayacaktır. Çiftliğin kullandığı viyollerin özellikleri aşağıdaki tabloda verilmiştir. Çiftlik sahibi, taşıma kolaylığı için olabildiğince az viyol kullanmak istemektedir.\n**Buna göre en az kaç viyol kullanılır?**",
  gorsel: `<table class="tablo"><tr><th colspan="2">Viyol özellikleri</th></tr><tr><td>Bir viyole konulabilecek en az yumurta</td><td>6</td></tr><tr><td>Bir viyole konulabilecek en çok yumurta</td><td>30</td></tr></table>`,
  secenekler: ["9", "12", "18", "42"],
  dogru: 0,
  hatalar: [
    null,
    "Üst sınıra en yakın çarpanı bulamama: 28'in de 252'yi böldüğü gözden kaçmış ve 252 ÷ 21 = 12 alınmış.",
    "Çarpanları eksik listeleme: 21 ve 28 atlanıp 252 ÷ 14 = 18 alınmış.",
    "En az yerine en çok viyolü bulma: bir viyole 6 yumurta konulursa 42 viyol gerekir."
  ],
  aciklama: `Yumurtalar artmadan eşit dağıtılacağı için bir viyoldeki yumurta sayısı 252'nin bir çarpanı olmalıdır. Viyol sayısı en az olsun istiyorsak bir viyoldeki yumurta sayısı olabildiğince çok olmalıdır.
Adım 1: 252'yi asal çarpanlarına ayır: 252 = 2^{2} · 3^{2} · 7.
Adım 2: Çarpanlarını çiftler hâlinde yaz: 1 · 252, 2 · 126, 3 · 84, 4 · 63, 6 · 42, 7 · 36, 9 · 28, 12 · 21, 14 · 18.
Adım 3: Tablodaki koşulu uygula: bir viyoldeki yumurta sayısı 6 ile 30 arasında olmalı. Uygun çarpanlar: 6, 7, 9, 12, 14, 18, 21, 28.
Adım 4: En çoğunu seç: 28. Viyol sayısı 252 ÷ 28 = 9 olur.
Sağlama: 9 · 28 = 252; hiç yumurta artmaz ve 28, 30'u aşmaz.
Sık yapılan hata: Sınıra yakın çarpanı ararken çarpan çiftlerini yazmadan tahmin yürütmek. 28'i atlarsan bir sonraki uygun değer 21 olur ve 12 viyol bulursun.
Cevap A.`
},
{
  id: "mat-ck-314",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir tesisatçı, uzunlukları görselde verilen iki plastik boruyu hiç artmayacak biçimde eşit uzunlukta parçalara ayıracaktır. Parçalar olabildiğince uzun olacak ve uzunlukları santimetre cinsinden tam sayı olacaktır. Tesisatçı boruların uçlarından kesim yapmaz; her kesim bir parçayı ikiye böler.\n**Buna göre tesisatçı toplam kaç kesim yapar?**",
  gorsel: `<svg viewBox="0 0 520 170" role="img" aria-label="Uzunlukları 144 santimetre ve 180 santimetre olan iki plastik boru"><g stroke="currentColor" stroke-width="2"><rect x="30" y="24" width="352" height="30" rx="6" fill="var(--dolgu)"/><rect x="30" y="98" width="440" height="30" rx="6" fill="var(--dolgu)"/><line x1="30" y1="70" x2="382" y2="70"/><line x1="30" y1="64" x2="30" y2="76"/><line x1="382" y1="64" x2="382" y2="76"/><line x1="30" y1="144" x2="470" y2="144"/><line x1="30" y1="138" x2="30" y2="150"/><line x1="470" y1="138" x2="470" y2="150"/></g><g fill="currentColor" font-size="16" text-anchor="middle"><text x="206" y="90">144 cm</text><text x="250" y="164">180 cm</text></g><g fill="currentColor" font-size="15" font-weight="bold"><text x="392" y="45">1. boru</text><text x="480" y="119">2. boru</text></g></svg>`,
  secenekler: ["7", "8", "9", "36"],
  dogru: 0,
  hatalar: [
    null,
    "İkinci boruda kesim sayısı yerine parça sayısını yazma: 3 + 5 = 8; oysa 5 parça elde etmek için 4 kesim yeter.",
    "Kesim sayısı yerine parça sayısını bulma: 4 + 5 = 9 parça oluşur ama 7 kesim yapılır.",
    "Ara sonucu cevap sanma: 36 cm, bir parçanın uzunluğudur (EBOB)."
  ],
  aciklama: `İki boru da artmadan eşit parçalara ayrılacağı için parça uzunluğu hem 144'ü hem 180'i kalansız bölmelidir. Parça en uzun olacağına göre EBOB aranır.
Adım 1: 144 = 2^{4} · 3^{2} ve 180 = 2^{2} · 3^{2} · 5. Ortak asal çarpanların küçük üslülerini çarp: EBOB(144, 180) = 2^{2} · 3^{2} = 36. Parçalar 36 cm olur.
Adım 2: Parça sayılarını bul: 144 ÷ 36 = 4 parça ve 180 ÷ 36 = 5 parça.
Adım 3: Kesim sayısına geç. Bir boruyu 4 parçaya ayırmak için 3, 5 parçaya ayırmak için 4 kesim gerekir; çünkü boruların uçlarında kesim yapılmaz.
Adım 4: Topla: 3 + 4 = 7 kesim.
Sağlama: 4 · 36 = 144 ve 5 · 36 = 180; toplam 9 parça oluşur ve 9 parça için 7 kesim yeter.
Sık yapılan hata: Parça sayısını kesim sayısı sanmak. Uçları kesilmeyen bir çubukta kesim sayısı her zaman parça sayısından 1 eksiktir.
Cevap A.`
},
{
  id: "mat-ck-315",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir anaokulunda 15 çocuk vardır. Öğretmen, elindeki 60 elma ile 72 mandalinayı çocuklara dağıtacaktır. Her çocuğa eşit sayıda elma ve eşit sayıda mandalina verilecek, hiç meyve artmayacaktır. Öğretmen bu koşullarla olabildiğince çok çocuğa meyve vermek istemektedir; meyve alamayan çocuklara ise oyuncak verecektir.\n**Buna göre kaç çocuğa oyuncak verilir?**",
  gorsel: null,
  secenekler: ["12", "9", "5", "3"],
  dogru: 3,
  hatalar: [
    "Ara sonucu cevap sanma: 12, meyve alan çocuk sayısıdır (EBOB).",
    "En çok çocuk koşulunu atlayıp ortak bölenlerden birini (6) seçme: o zaman 15 − 6 = 9 bulunur.",
    "Bir çocuğa düşen elma sayısını cevap sanma: 60 ÷ 12 = 5.",
    null
  ],
  aciklama: `Meyveler artmadan eşit dağıtılacağı için meyve alan çocuk sayısı hem 60'ı hem 72'yi kalansız bölmelidir. En çok çocuk istendiğine göre bu sayı EBOB'tur.
Adım 1: 60 = 2^{2} · 3 · 5 ve 72 = 2^{3} · 3^{2}. Ortak asal çarpanların küçük üslülerini çarp: EBOB(60, 72) = 2^{2} · 3 = 12.
Adım 2: En çok 12 çocuğa meyve verilebilir. Her biri 60 ÷ 12 = 5 elma ve 72 ÷ 12 = 6 mandalina alır.
Adım 3: Oyuncak alan çocuk sayısını bul: 15 − 12 = 3.
Sağlama: 12 · 5 = 60 ve 12 · 6 = 72; hiç meyve artmaz. 15 çocuğun hepsine dağıtılamaz, çünkü 15 sayısı 60'ı bölse de 72'yi bölmez.
Sık yapılan hata: EBOB'u bulunca durmak. Soru meyve alanları değil alamayanları soruyor; son çıkarma adımını atlama.
Cevap D.`
},
{
  id: "mat-ck-316",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir tiyatro salonundaki 128 koltuk, eşit sayıda koltuk içeren bloklara ayrılmıştır. Salonun krokisi aşağıda verilmiştir. Bir bloktaki koltuk sayısı, salondaki blok sayısının iki katıdır.\n**Buna göre salonda kaç blok vardır?**",
  gorsel: `<svg viewBox="0 0 520 200" role="img" aria-label="Sahnenin karşısında eşit büyüklükte bloklara ayrılmış 128 koltukluk tiyatro salonu krokisi"><rect x="150" y="14" width="220" height="30" rx="4" fill="var(--vurgu)" stroke="currentColor" stroke-width="2"/><text x="260" y="35" font-size="17" text-anchor="middle" fill="var(--dolgu)" font-weight="bold">SAHNE</text><g stroke="currentColor" stroke-width="2" fill="var(--dolgu)"><rect x="40" y="76" width="92" height="46" rx="5"/><rect x="146" y="76" width="92" height="46" rx="5"/><rect x="282" y="76" width="92" height="46" rx="5"/><rect x="388" y="76" width="92" height="46" rx="5"/></g><g fill="currentColor" font-size="17" text-anchor="middle"><text x="86" y="105">blok</text><text x="192" y="105">blok</text><text x="260" y="105">· · ·</text><text x="328" y="105">blok</text><text x="434" y="105">blok</text><text x="260" y="160" font-weight="bold">Toplam 128 koltuk</text><text x="260" y="186">Her blokta eşit sayıda koltuk vardır.</text></g></svg>`,
  secenekler: ["8", "16", "32", "64"],
  dogru: 0,
  hatalar: [
    null,
    "Ara sonucu cevap sanma: 16, bir bloktaki koltuk sayısıdır.",
    "Çarpan çiftini yanlış seçme: 32 blok olsaydı her blokta 4 koltuk olurdu; 4 ise 32'nin iki katı değildir.",
    "Koşulu ters çevirme: 64 blok olsaydı her blokta 2 koltuk olurdu; oysa bir bloktaki koltuk sayısı blok sayısından fazla olmalıdır."
  ],
  aciklama: `Blok sayısı ile bir bloktaki koltuk sayısının çarpımı toplam koltuk sayısına eşittir; yani ikisi de 128'in çarpanıdır ve bir çarpan çifti oluştururlar.
Adım 1: 128'i asal çarpanlarına ayır: 128 = 2^{7}.
Adım 2: Çarpan çiftlerini yaz: 1 · 128, 2 · 64, 4 · 32, 8 · 16.
Adım 3: Koşulu uygula: bir bloktaki koltuk sayısı, blok sayısının iki katı olmalı. Çiftleri tek tek dene. 2 ve 64 → 64, 2'nin 32 katıdır. 4 ve 32 → 32, 4'ün 8 katıdır. 8 ve 16 → 16, 8'in tam iki katıdır.
Adım 4: Uygun çift 8 ve 16'dır. Blok sayısı 8, bir bloktaki koltuk sayısı 16'dır.
Sağlama: 8 · 16 = 128 ve 16 = 2 · 8.
Sık yapılan hata: Çiftteki iki sayıyı karıştırmak. Bir bloktaki koltuk sayısı daha büyük olan 16'dır; soru ise blok sayısını soruyor.
Cevap A.`
},
{
  id: "mat-ck-317",
  kazanim: "M.8.1.1.3",
  kademe: 3,
  zorluk: 3,
  soru: "Bir okul kermesinde çekiliş yapılacaktır. Her bilete iki basamaklı bir numara verilmiştir ve hiçbir numara tekrar etmemektedir. Kermes komitesi, ikramiye kazanacak numaraları aşağıdaki panoya yazdığı iki koşulla belirlemiştir.\n**Buna göre kaç bilet ikramiye kazanır?**",
  gorsel: `<svg viewBox="0 0 500 160" role="img" aria-label="Kermes panosu: kazanan numaranın rakamları toplamı 11 olmalı ve numara 70 ile aralarında asal olmalıdır"><rect x="14" y="12" width="472" height="136" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><line x1="14" y1="52" x2="486" y2="52" stroke="currentColor" stroke-width="2"/><text x="250" y="39" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold">KAZANAN NUMARANIN KOŞULLARI</text><g fill="currentColor" font-size="17"><text x="40" y="86">1. Rakamlarının toplamı 11'dir.</text><text x="40" y="124">2. 70 sayısı ile aralarında asaldır.</text></g><g fill="var(--vurgu)"><circle cx="28" cy="81" r="5"/><circle cx="28" cy="119" r="5"/></g></svg>`,
  secenekler: ["2", "3", "4", "8"],
  dogru: 1,
  hatalar: [
    "Rakamları toplamı 11 olan iki basamaklı sayıları eksik listeleme: 83 atlanmış.",
    null,
    "5'e bölünenleri elemeyi unutma: 65 = 5 · 13 ve 70 de 5'e bölünür; ikisinin ortak böleni 5'tir.",
    "İkinci koşulu hiç uygulamama: rakamları toplamı 11 olan iki basamaklı sayılar 8 tanedir."
  ],
  aciklama: `Önce birinci koşulu sağlayan bütün sayıları listele, sonra ikinci koşulla ele. İki sayının 1'den başka ortak pozitif böleni yoksa aralarında asaldırlar.
Adım 1: Rakamları toplamı 11 olan iki basamaklı sayıları sırayla yaz: 29, 38, 47, 56, 65, 74, 83, 92. Toplam 8 sayı.
Adım 2: İkinci koşul için 70'i ayır: 70 = 2 · 5 · 7. Kazanan numara ne 2'ye, ne 5'e, ne de 7'ye bölünmelidir.
Adım 3: Çift olanları ele: 38, 56, 74, 92 çıkar. Geriye 29, 47, 65, 83 kalır.
Adım 4: 5'e bölüneni ele: 65 = 5 · 13 çıkar. Geriye 29, 47 ve 83 kalır.
Adım 5: 7'ye bölüneni ara. 7 · 4 = 28, 7 · 7 = 49, 7 · 12 = 84 olduğundan 29, 47 ve 83 sayılarının hiçbiri 7'ye bölünmez. Üçü de iki koşulu birden sağlar: 3 bilet kazanır.
Sık yapılan hata: Yalnızca asal sayıları aramak. Burada üç kazanan sayının da asal olması rastlantıdır; örneğin 33 = 3 · 11 asal olmadığı hâlde 70 ile aralarında asaldır.
Cevap B.`
},
{
  id: "mat-ck-318",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir hırdavatçıda vidalar ve dübeller yalnızca kutu hâlinde satılmaktadır. Kutulardaki ürün sayıları aşağıdaki tabloda verilmiştir. Bir usta, aldığı vida sayısı ile dübel sayısı birbirine eşit olacak biçimde alışveriş yapmış ve toplam 15 kutu satın almıştır.\n**Buna göre usta kaç vida almıştır?**",
  gorsel: `<table class="tablo"><tr><th>Ürün</th><th>Bir kutudaki ürün sayısı</th></tr><tr><td>Vida</td><td>24</td></tr><tr><td>Dübel</td><td>36</td></tr></table>`,
  secenekler: ["72", "144", "216", "360"],
  dogru: 2,
  hatalar: [
    "Ara sonucu cevap sanma: 72, vida ve dübel sayısının eşit olabileceği en küçük değerdir (EKOK); ancak usta 5 değil 15 kutu almıştır.",
    "Kutu sayısını yanlış paylaştırma: 15 kutuyu 5'e değil 2'ye bölüp 2 · 72 = 144 bulma.",
    null,
    "Bütün kutuları vida kutusu sayma: 15 · 24 = 360; oysa kutuların bir kısmı dübel kutusudur."
  ],
  aciklama: `Vida sayısı 24'ün, dübel sayısı 36'nın katı olmak zorundadır. İki sayı eşit olacağına göre ortak katlar üzerinden ilerlenir.
Adım 1: 24 = 2^{3} · 3 ve 36 = 2^{2} · 3^{2}. EKOK için her asal çarpanın en büyük üslüsünü al: EKOK(24, 36) = 2^{3} · 3^{2} = 72.
Adım 2: 72'şer alındığında kaç kutu gerektiğini bul: 72 ÷ 24 = 3 vida kutusu ve 72 ÷ 36 = 2 dübel kutusu; toplam 5 kutu.
Adım 3: Eşitliğin bozulmaması için bu 5 kutuluk küme kaç kez alınmalı: 15 ÷ 5 = 3 kez.
Adım 4: Vida kutusu sayısı 3 · 3 = 9 olur. Vida sayısı: 9 · 24 = 216.
Sağlama: Dübel kutusu 3 · 2 = 6 tanedir; 6 · 36 = 216. Vida ve dübel sayıları eşit ve toplam kutu 9 + 6 = 15.
Sık yapılan hata: EKOK'u bulup orada durmak. Toplam kutu sayısı verildiğinde en küçük çözümün kaç katının alındığını bulmalısın.
Cevap C.`
},
{
  id: "mat-ck-319",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: "Bir okul korosunda 187 şarkıcı vardır. Şarkıcılar, her sırada eşit sayıda olacak biçimde sıralar hâlinde sahneye çıkacaktır. Koro şefi, sıra sayısının da bir sıradaki şarkıcı sayısının da 1'den büyük olmasını; ayrıca bir sıradaki şarkıcı sayısının sıra sayısından fazla olmasını istemektedir.\n**Buna göre bir sırada kaç şarkıcı bulunur?**",
  gorsel: null,
  secenekler: ["7", "11", "13", "17"],
  dogru: 3,
  hatalar: [
    "Bölünebilmeyi kontrol etmeme: 7 · 26 = 182 ve 7 · 27 = 189 olduğundan 187, 7'ye kalansız bölünmez.",
    "Sıra sayısı ile bir sıradaki şarkıcı sayısını karıştırma: koroda 11 sıra vardır.",
    "Bölünebilmeyi kontrol etmeme: 13 · 14 = 182 ve 13 · 15 = 195 olduğundan 187, 13'e kalansız bölünmez.",
    null
  ],
  aciklama: `Sıra sayısı ile bir sıradaki şarkıcı sayısının çarpımı 187'dir; yani bu iki sayı 187'nin bir çarpan çiftidir.
Adım 1: 187'yi asal çarpanlarına ayırmayı dene. Çift değildir, rakamları toplamı 16 olduğu için 3'e bölünmez, 0 ya da 5 ile bitmediği için 5'e bölünmez.
Adım 2: 7 ile dene: 7 · 26 = 182, kalan 5 → bölmez. 11 ile dene: 11 · 17 = 187 → böler.
Adım 3: 17 asal olduğuna göre ayırma bitti: 187 = 11 · 17. Çarpan çiftleri 1 · 187 ve 11 · 17'dir.
Adım 4: Koşulu uygula. İki sayı da 1'den büyük olacağı için 1 · 187 çifti elenir. Geriye 11 ve 17 kalır; bir sıradaki şarkıcı sayısı daha büyük olduğuna göre 17'dir.
Sağlama: 11 sıra · 17 şarkıcı = 187.
Sık yapılan hata: Bir sayının asal olup olmadığını göz kararı söylemek. 187 tek ve iki basamaklı bölenlerle sınanmadan asal görünür; 11'e böldüğünde durum değişir.
Cevap D.`
},
{
  id: "mat-ck-320",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: "Bir kitap fuarında A yayınevinin standı 16 dakikada bir, B yayınevinin standı 24 dakikada bir okurlara hediye dağıtmaktadır. Fuar saat 10.00'da açılmış ve iki stant da açılış anında birer hediye dağıtmıştır. Deniz fuara saat 11.00'de girmiş, 12.30'da fuardan ayrılmıştır.\n**Buna göre Deniz, iki standın aynı anda hediye dağıttığı kaç ana tanık olmuştur?**",
  gorsel: null,
  secenekler: ["2", "3", "4", "5"],
  dogru: 0,
  hatalar: [
    null,
    "Deniz'in gelişinden önceki ortak dağıtımı da sayma: 10.48'de Deniz henüz fuarda değildir.",
    "Fuarın açılışından itibaren bütün ortak anları sayma: 10.00, 10.48, 11.36 ve 12.24.",
    "Fuarın açılışından kapanışına kadarki bütün ortak anları sayma: 10.00, 10.48, 11.36, 12.24 ve 13.12; oysa Deniz bunlardan yalnızca ikisini görmüştür."
  ],
  aciklama: `İki standın aynı anda hediye dağıttığı anlar, açılıştan sonra hem 16'nın hem 24'ün katı kadar dakika geçen anlardır; yani EKOK'un katlarıdır.
Adım 1: 16 = 2^{4} ve 24 = 2^{3} · 3. EKOK için her asal çarpanın en büyük üslüsünü al: EKOK(16, 24) = 2^{4} · 3 = 48 dakika.
Adım 2: Açılıştan başlayarak ortak anları saat olarak yaz: 10.00, 10.48, 11.36, 12.24, 13.12…
Adım 3: Deniz'in fuarda bulunduğu aralığı belirle: 11.00 ile 12.30 arası.
Adım 4: Bu aralığa düşen anları say: 11.36 ve 12.24 → 2 an. 10.00 ile 10.48 Deniz gelmeden önce, 13.12 ise o ayrıldıktan sonradır.
Sağlama: 11.36 anı açılıştan 96 dakika, 12.24 anı 144 dakika sonradır; ikisi de hem 16'nın hem 24'ün katıdır.
Sık yapılan hata: Sayma işlemine sıfırdan başlamak. Soruda başlangıç ile bitiş ayrı ayrı verilmişse, ortak anları yazıp aralığa düşenleri işaretlemek en güvenli yoldur.
Cevap A.`
},
{
  id: "mat-ck-321",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 4,
  soru: "Bir okulun kitap bağışı kampanyasında 8. sınıflar 168, 7. sınıflar 252 kitap toplamıştır. Kitaplar kolilenirken şu kurallara uyulacaktır:\n• Her kolide eşit sayıda kitap bulunacak ve hiç kitap açıkta kalmayacaktır.\n• Bir kolide yalnızca tek bir sınıf düzeyinin kitapları bulunacaktır.\n• Bir kolide en az 10 kitap olacaktır.\n• Toplam koli sayısı 30'u geçmeyecektir.\n**Buna göre bir koliye konulacak kitap sayısı __en az__ kaç olabilir?**",
  gorsel: null,
  secenekler: ["8", "12", "13", "14"],
  dogru: 3,
  hatalar: [
    "Yalnızca bir sınıf düzeyini kontrol etme: 8 sayısı 168'i böler (168 ÷ 8 = 21) ama 252'yi bölmez.",
    "Koli sayısı sınırını atlama: bir kolide 12 kitap olursa 420 ÷ 12 = 35 koli gerekir, bu da 30'u aşar.",
    "Ortak bölen olup olmadığını kontrol etmeme: 13 sayısı ne 168'i ne de 252'yi böler.",
    null
  ],
  aciklama: `Kitaplar açıkta kalmadan eşit dağıtılacağı ve bir kolide tek bir sınıf düzeyinin kitapları bulunacağı için bir kolideki kitap sayısı hem 168'i hem 252'yi kalansız bölmelidir; yani iki sayının ortak bölenidir.
Adım 1: 168 = 2^{3} · 3 · 7 ve 252 = 2^{2} · 3^{2} · 7. Ortak asal çarpanların küçük üslülerini çarp: EBOB(168, 252) = 2^{2} · 3 · 7 = 84.
Adım 2: Ortak bölenler, EBOB'un bölenleridir: 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84.
Adım 3: "Bir kolide en az 10 kitap" koşulunu uygula. Geriye 12, 14, 21, 28, 42, 84 kalır.
Adım 4: Koli sayısı koşulunu uygula. Toplam kitap 168 + 252 = 420'dir; bir kolide c kitap varsa koli sayısı 420 ÷ c olur ve bu sayı 30'u geçmemelidir. c = 12 için 420 ÷ 12 = 35 → olmaz. c = 14 için 420 ÷ 14 = 30 → tam sınırda, olur.
Adım 5: En küçük uygun değer 14'tür.
Sağlama: 168 ÷ 14 = 12 koli ve 252 ÷ 14 = 18 koli; toplam 30 koli olur ve "30'u geçmeyecek" koşulu sağlanır.
Sık yapılan hata: "Geçmeyecek" ifadesini "30'dan az olacak" diye okumak. 30, sınırın kendisidir ve dâhildir; bu yüzden 14 uygundur.
Cevap D.`
},
{
  id: "mat-ck-322",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 4,
  soru: "Bir bilim şenliğine iki okul katılmaktadır. A okulundan 84 öğrenci gelmiştir; B okulundan gelen öğrenci sayısı ise 100'den çok, 130'dan azdır. Öğrenciler çalışma masalarına şu kurallarla yerleştirilecektir: Her masada eşit sayıda öğrenci bulunacak, bir masada yalnızca tek bir okulun öğrencileri oturacak ve hiçbir öğrenci açıkta kalmayacaktır. Düzenleme ekibi bir masaya olabildiğince çok öğrenci oturtmuş ve bu sayının 28 olduğunu görmüştür.\n**Buna göre B okulundan kaç öğrenci gelmiştir?**",
  gorsel: null,
  secenekler: ["105", "112", "126", "140"],
  dogru: 1,
  hatalar: [
    "28'in katı olma koşulunu atlama: 105 sayısı 28'e bölünmez ve EBOB(84, 105) = 21'dir.",
    null,
    "Ortak böleni hesaplamadan seçme: 126 = 2 · 3^{2} · 7 olduğundan EBOB(84, 126) = 42'dir, 28 değil.",
    "Aralık koşulunu gözden kaçırma: EBOB(84, 140) = 28'dir ama 140, 130'dan büyüktür."
  ],
  aciklama: `Bir masadaki öğrenci sayısı hem 84'ü hem de B okulunun öğrenci sayısını kalansız bölmelidir. "Olabildiğince çok" dendiğine göre bu sayı iki sayının EBOB'udur; yani EBOB(84, B) = 28'dir.
Adım 1: 84'ü ve 28'i ayır: 84 = 2^{2} · 3 · 7 ve 28 = 2^{2} · 7.
Adım 2: EBOB 28 olduğuna göre B sayısı 28'in katı olmalıdır. 100 ile 130 arasındaki 28 katları: 28 · 4 = 112. (28 · 3 = 84 küçük, 28 · 5 = 140 büyüktür.)
Adım 3: Tek aday olan 112'yi sına: 112 = 2^{4} · 7. EBOB(84, 112) için ortak asal çarpanların küçük üslülerini al: 2^{2} · 7 = 28. Koşul sağlanıyor.
Adım 4: Öyleyse B okulundan 112 öğrenci gelmiştir.
Sağlama: 84 ÷ 28 = 3 masa ve 112 ÷ 28 = 4 masa; toplam 7 masada 28'er öğrenci oturur.
Sık yapılan hata: EBOB'u 28 çıkması için yalnızca "28'e bölünüyor mu?" diye bakmak yetmez; bölümlerin de ortak çarpanı kalmamalıdır. Örneğin 84 ile 168 sayılarının ikisi de 28'e bölünür ama EBOB'ları 84'tür.
Cevap B.`
},
{
  id: "mat-ck-323",
  kazanim: "M.8.1.1.3",
  kademe: 3,
  zorluk: 4,
  soru: "Bir animasyon programında iki hareket döngüsü aynı anda başlatılıp sürekli tekrar ettirilmektedir. Birinci döngü 45 kare, ikinci döngü 60 karedir. Tasarımcı, iki döngünün başlangıçlarının olabildiğince seyrek üst üste gelmesi için döngü uzunluklarının **aralarında asal** olmasını istemektedir. Programda yalnızca birinci döngünün kare sayısı artırılabilmekte, ikinci döngüye dokunulamamaktadır. Tasarımcı en az artışı yapacaktır.\n**Buna göre birinci döngünün kare sayısı kaç olmalıdır?**",
  gorsel: null,
  secenekler: ["49", "48", "47", "46"],
  dogru: 2,
  hatalar: [
    "47'nin de koşulu sağladığını fark etmeyip aramayı sürdürme: 49 = 7^{2} sayısı 60 ile aralarında asaldır ama en az artış değildir.",
    "Yalnızca 5'i kontrol etme: 48 = 2^{4} · 3 sayısı hem 2'ye hem 3'e bölünür, 60 da öyle.",
    null,
    "Yalnızca 3 ve 5'i kontrol edip 2'yi unutma: 46 = 2 · 23 çifttir, 60 da çifttir; ortak bölenleri 2'dir."
  ],
  aciklama: `İki sayının aralarında asal olması, 1'den başka ortak pozitif bölenlerinin bulunmaması demektir.
Adım 1: Değiştirilemeyen sayıyı ayır: 60 = 2^{2} · 3 · 5. Yeni kare sayısı ne 2'ye, ne 3'e, ne de 5'e bölünmelidir.
Adım 2: 45 sayısından başlayarak birer birer yukarı çık. 45 = 3^{2} · 5 → 3'e ve 5'e bölünür, zaten uygun değil.
Adım 3: 46 = 2 · 23 → çifttir, olmaz. 47 → tektir; rakamları toplamı 11 olduğundan 3'e bölünmez; 7 ya da 5 ile bitmediğinden 5'e bölünmez. Uygundur.
Adım 4: En az artış 45'ten 47'ye, yani 2 karedir. Birinci döngü 47 kare olmalıdır.
Sağlama: 47 asal bir sayıdır ve 60'ı bölmez; bu yüzden EBOB(47, 60) = 1'dir. Bu durumda iki döngünün başlangıçları ancak 47 · 60 = 2820 karede bir üst üste gelir.
Sık yapılan hata: Yalnızca tek sayı olmasına ya da yalnızca asal olmasına bakmak. 60'ın üç asal çarpanının (2, 3, 5) hepsini tek tek elemelisin.
Cevap C.`
},
{
  id: "mat-ck-324",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: "Bir okulun geri dönüşüm kulübü topladığı plastik kapakları sayamamış, ancak elindeki kayıtlardan aşağıdaki panoda yazan üç bilgiye ulaşmıştır. Kulüp başkanı, bu üç bilgiye uyan en küçük kapak sayısını hesaplayıp raporuna yazacaktır.\n**Buna göre kulüp başkanının raporuna yazacağı sayı kaçtır?**",
  gorsel: `<svg viewBox="0 0 520 190" role="img" aria-label="Pano: kapak sayısının asal çarpanları yalnızca 2 ve 3, tam 12 pozitif tam sayı çarpanı var, 100'den büyük"><rect x="14" y="12" width="492" height="166" rx="10" fill="var(--dolgu)" stroke="currentColor" stroke-width="2.5"/><line x1="14" y1="50" x2="506" y2="50" stroke="currentColor" stroke-width="2"/><text x="260" y="37" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold">KAPAK SAYISI HAKKINDA BİLİNENLER</text><g fill="currentColor" font-size="17"><text x="42" y="84">Asal çarpanları yalnızca 2 ve 3'tür.</text><text x="42" y="120">Tam 12 pozitif tam sayı çarpanı vardır.</text><text x="42" y="156">100'den büyüktür.</text></g><g fill="var(--vurgu)"><circle cx="30" cy="79" r="5"/><circle cx="30" cy="115" r="5"/><circle cx="30" cy="151" r="5"/></g></svg>`,
  secenekler: ["64", "72", "100", "108"],
  dogru: 3,
  hatalar: [
    "Çarpan sayısını kontrol etmeme: 64 = 2^{6} sayısının asal çarpanı yalnızca 2'dir ve 1, 2, 4, 8, 16, 32, 64 olmak üzere 7 çarpanı vardır.",
    "Üçüncü koşulu atlama: 72 = 2^{3} · 3^{2} ilk iki koşulu sağlar ama 100'den büyük değildir.",
    "Asal çarpan koşulunu kontrol etmeme: 100 = 2^{2} · 5^{2} sayısının asal çarpanları 2 ve 5'tir; ayrıca 100, 100'den büyük değildir.",
    null
  ],
  aciklama: `Asal çarpanları yalnızca 2 ve 3 olan bir sayı 2^{a} · 3^{b} biçimindedir ve burada a ile b'nin ikisi de en az 1'dir.
Adım 1: Böyle sayıların çarpanlarının nasıl oluştuğunu düşün. Her çarpan, 2'den en çok a tane ve 3'ten en çok b tane alınarak yapılır; yani 2 için a + 1, 3 için b + 1 seçenek vardır. Toplam çarpan sayısı (a + 1) · (b + 1)'dir.
Adım 2: Çarpan sayısı 12 olacak: (a + 1) · (b + 1) = 12. İkisi de en az 1 olduğundan çarpanlar en az 2'dir: 2 · 6, 3 · 4, 4 · 3, 6 · 2.
Adım 3: Sayıları yaz. (a, b) = (1, 5) → 2 · 3^{5} = 486. (2, 3) → 4 · 27 = 108. (3, 2) → 8 · 9 = 72. (5, 1) → 32 · 3 = 96.
Adım 4: 100'den büyük olanları seç: 108 ve 486. En küçüğü 108'dir.
Sağlama: 108 = 2^{2} · 3^{3}; çarpanları 1, 2, 3, 4, 6, 9, 12, 18, 27, 36, 54, 108 olmak üzere tam 12 tanedir.
Sık yapılan hata: "En küçük" diye sorulunca listedeki ilk sayıyı seçmek. 72 ile 96 daha küçüktür ama 100'den büyük olma koşulunu sağlamazlar.
Cevap D.`
},
{
  id: "mat-ck-325",
  kazanim: "M.8.1.1.3",
  kademe: 3,
  zorluk: 4,
  soru: "Bir yazılım dersinde Deniz, girilen iki doğal sayının en küçük ortak katını (EKOK) ekrana yazan bir program hazırlamıştır. Ders sonunda Deniz programa iki doğal sayı girmiş; sayıları arkadaşlarına söylememiş, yalnızca şu iki bilgiyi paylaşmıştır:\n• Girdiğim iki sayının toplamı 23'tür.\n• Program ekrana 132 yazdı.\nArkadaşı Bora, iki sayının **aralarında asal** olması durumunda EKOK'un sayıların çarpımına eşit olacağını hatırlayarak sayıları bulmuştur.\n**Buna göre Deniz'in girdiği iki sayının farkı kaçtır?**",
  gorsel: null,
  secenekler: ["1", "3", "9", "11"],
  dogru: 0,
  hatalar: [
    null,
    "Toplamı 23 olan bir çifti EKOK'u denetlemeden seçme: 10 ile 13 seçilmiş, oysa EKOK(10, 13) = 130'dur.",
    "Toplamı 23 olan bir çifti EKOK'u denetlemeden seçme: 7 ile 16 seçilmiş, oysa EKOK(7, 16) = 112'dir.",
    "Sayıları doğru bulup soruyu yanlış okuma: 11 ile 12 bulunmuş ama farkları yerine küçük sayı yazılmış."
  ],
  aciklama: `Toplamı 23 olan iki doğal sayının biri tek biri çift olmak zorundadır; bu da ortak bölen olarak 2'yi eler. Asıl ipucu ise EKOK'tur.
Adım 1: İki sayı aralarında asal olduğunda ortak asal çarpanları bulunmaz; bu durumda EKOK, sayıların çarpımına eşit olur. Öyleyse sayıların çarpımı 132'dir.
Adım 2: Çarpımı 132 olan doğal sayı çiftlerini yaz: 1 · 132, 2 · 66, 3 · 44, 4 · 33, 6 · 22, 11 · 12.
Adım 3: Toplamı 23 olanı ara: 1 + 132 = 133, 2 + 66 = 68, 3 + 44 = 47, 4 + 33 = 37, 6 + 22 = 28, 11 + 12 = 23. Aranan çift 11 ve 12'dir.
Adım 4: Aralarında asallığı doğrula: 11 asaldır ve 12'yi bölmez, yani EBOB(11, 12) = 1. Gerçekten de EKOK(11, 12) = 132'dir.
Adım 5: Farkı al: 12 − 11 = 1.
Sağlama: Ardışık iki doğal sayı her zaman aralarında asaldır; bu yüzden 11 ile 12'nin EKOK'u doğrudan çarpımlarına eşittir.
Sık yapılan hata: Yalnızca toplam koşuluna bakıp ilk akla gelen çifti seçmek. İki koşulu birden sağlayan çift tektir.
Cevap A.`
},
/* ===================== HAVUZ (kademe 0) ===================== */
{
  id: "mat-ck-013",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 2,
  soru: "Bir arıcı, hasat ettiği balı kavanozlara doldurmuş ve şu an elinde 98 kavanoz bal birikmiştir. Arıcının kullandığı iki koli türü aşağıda gösterilmiştir. Arıcı, kavanozların tamamını yalnızca küçük kolilerle de yalnızca büyük kolilerle de hiç kavanoz artmadan paketleyebilmek istemektedir.\n**Buna göre arıcının __en az__ kaç kavanoz bal daha üretmesi gerekir?**",
  gorsel: `<svg viewBox="0 0 520 175" role="img" aria-label="Arıcının kullandığı iki koli türü: 6 kavanozluk küçük koli ve 10 kavanozluk büyük koli"><g stroke="currentColor" stroke-width="2.5" fill="var(--dolgu)"><rect x="25" y="22" width="200" height="92" rx="8"/><rect x="280" y="22" width="228" height="92" rx="8"/></g><g fill="var(--vurgu)"><circle cx="75" cy="52" r="13"/><circle cx="125" cy="52" r="13"/><circle cx="175" cy="52" r="13"/><circle cx="75" cy="88" r="13"/><circle cx="125" cy="88" r="13"/><circle cx="175" cy="88" r="13"/></g><g fill="var(--vurgu2)"><circle cx="306" cy="52" r="11"/><circle cx="350" cy="52" r="11"/><circle cx="394" cy="52" r="11"/><circle cx="438" cy="52" r="11"/><circle cx="482" cy="52" r="11"/><circle cx="306" cy="88" r="11"/><circle cx="350" cy="88" r="11"/><circle cx="394" cy="88" r="11"/><circle cx="438" cy="88" r="11"/><circle cx="482" cy="88" r="11"/></g><g fill="currentColor" font-size="16" text-anchor="middle" font-weight="bold"><text x="125" y="142">Küçük koli: 6 kavanoz</text><text x="394" y="142">Büyük koli: 10 kavanoz</text></g></svg>`,
  secenekler: ["2", "4", "22", "30"],
  dogru: 2,
  hatalar: [
    "Yalnızca büyük koliye göre tamamlama: 98 + 2 = 100 sayısı 10'a bölünür ama 6'ya bölünmez.",
    "Yalnızca küçük koliye göre tamamlama: 98 + 4 = 102 sayısı 6'ya bölünür ama 10'a bölünmez.",
    null,
    "EKOK'u cevap sanma: 30, toplam kavanoz sayısının bölünmesi gereken sayıdır; eklenecek kavanoz sayısı değildir."
  ],
  aciklama: `Kavanozların tamamı hem 6'lı hem 10'lu kolilere artmadan yerleşecekse toplam kavanoz sayısı hem 6'ya hem 10'a kalansız bölünmelidir; yani 6 ile 10'un ortak katı olmalıdır.
Adım 1: 6 = 2 · 3 ve 10 = 2 · 5. EKOK için her asal çarpanın en büyük üslüsünü al: EKOK(6, 10) = 2 · 3 · 5 = 30. Toplam kavanoz sayısı 30'un katı olmalıdır.
Adım 2: 30'un katlarını sırayla yaz: 30, 60, 90, 120…
Adım 3: Elde 98 kavanoz olduğuna göre 98'den küçük olmayan ilk katı seç. 90 sayısı 98'den küçüktür, işe yaramaz; aranan sayı 120'dir.
Adım 4: Farkı al: 120 − 98 = 22 kavanoz.
Sağlama: 120 ÷ 6 = 20 küçük koli, 120 ÷ 10 = 12 büyük koli; iki durumda da hiç kavanoz artmaz.
Sık yapılan hata: Koli türlerinden yalnızca birine bakıp tamamlamak. İki koşulun da sağlanması isteniyorsa ortak kata, yani EKOK'un katlarına gitmelisin.
Cevap C.`
},
{
  id: "mat-ck-014",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 4,
  soru: "Bir çiçekçinin deposunda, sabah halden aldığı laleler durmaktadır. Çiçekçi bu lalelerin tamamını buketler hâlinde bağlayıp vitrine dizecektir. Bütün buketlerde eşit sayıda lale bulunacak, bir buket yapmaya yetmeyen laleler ise vazoya konulacaktır. Çiçekçi iki farklı buket büyüklüğünü denemiş ve her denemede vazoya kalan lale sayısını aşağıdaki tabloya yazmıştır. Çiçekçi lalelerini saymamıştır; ancak deposunda 100'den çok, 200'den az lale bulunduğunu bilmektedir.\n**Buna göre çiçekçinin deposundaki lale sayısı kaç farklı değer alabilir?**",
  gorsel: `<table class="tablo"><tr><th>Bir bukete konulan lale sayısı</th><th>Vazoya kalan lale sayısı</th></tr><tr><td>8</td><td>5</td></tr><tr><td>12</td><td>9</td></tr></table>`,
  secenekler: ["3", "4", "5", "8"],
  dogru: 1,
  hatalar: [
    "Listeyi aralığın başındaki ilk değerden başlatmama: 117 sayısı da 100'den büyüktür ve iki koşulu da sağlar.",
    null,
    "Üst sınırı dâhil etme: 213 sayısı iki koşulu da sağlar ama 200'den az değildir.",
    "Yalnızca tablonun ikinci satırını kullanma: 12'ye bölündüğünde 9 kalanını veren sayılar aralıkta 8 tanedir (105, 117, 129, …, 189); ancak bunların hepsi 8'e bölündüğünde 5 kalanını vermez."
  ],
  aciklama: `Bir sayı 8'e bölündüğünde 5, 12'ye bölündüğünde 9 kalanını veriyorsa her iki bölmede de tam dolmaya 3 birim kalmış demektir: 8 − 5 = 3 ve 12 − 9 = 3. Bu ortak eksik, sorunun anahtarıdır.
Adım 1: Lale sayısına 3 eklersen her iki bölme de kalansız olur. Yani (lale sayısı + 3) hem 8'e hem 12'ye bölünmelidir.
Adım 2: 8 = 2^{3} ve 12 = 2^{2} · 3. EKOK için her asal çarpanın en büyük üslüsünü al: EKOK(8, 12) = 2^{3} · 3 = 24. Öyleyse (lale sayısı + 3) sayısı 24'ün katıdır.
Adım 3: 24'ün katlarını yaz ve her birinden 3 çıkararak olası lale sayılarını bul: 24 → 21, 48 → 45, 72 → 69, 96 → 93, 120 → 117, 144 → 141, 168 → 165, 192 → 189, 216 → 213.
Adım 4: Aralık koşulunu uygula: lale sayısı 100'den çok, 200'den az olacak. Listeden 117, 141, 165 ve 189 uyar; 93 küçük, 213 ise büyüktür.
Adım 5: Lale sayısı 4 farklı değer alabilir.
Sağlama: 189 ÷ 8 = 23, kalan 5; 189 ÷ 12 = 15, kalan 9. İki koşul da sağlanıyor.
Sık yapılan hata: Kalanları doğrudan EKOK'un katlarına eklemek. Burada kalanlar birbirine eşit değildir; eşit olan, tam dolmaya kalan 3 birimlik eksiktir. Böyle sorularda önce kalanların mı yoksa eksiklerin mi ortak olduğuna bak.
Cevap B.`
},
{
  id: "mat-ck-015",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 4,
  soru: "Bir yazılım ekibi, uzun süredir üzerinde çalıştığı mobil oyunu yayımlamaya hazırlanmaktadır. Oyunun toplam 180 bölümü vardır ve bu bölümler oyuncuya dünyalar hâlinde sunulacaktır. Ekip, bölümleri dünyalara ayırırken aşağıdaki kurallara uyacaktır:\n• Her dünyada eşit sayıda bölüm bulunacak, hiçbir bölüm dünyaların dışında kalmayacaktır.\n• Oyunda birden çok dünya olacaktır.\n• Bir dünyadaki bölüm sayısı, dünya sayısından çok olacaktır.\n• Dünya sayısı ile bir dünyadaki bölüm sayısı **aralarında asal** olacaktır.\n**Buna göre oyunda __en çok__ kaç dünya olabilir?**",
  gorsel: null,
  secenekler: ["5", "9", "12", "20"],
  dogru: 1,
  hatalar: [
    "Uygun ilk çiftte durma: 5 dünya ve 36 bölüm bütün kurallara uyar ama 9 dünyalı çift de uygundur ve dünya sayısı daha çoktur.",
    null,
    "Aralarında asal olma kuralını denetlememe: 12 dünya ve 15 bölüm çiftinde iki sayı da 3'e bölünür.",
    "Dünya sayısı ile bir dünyadaki bölüm sayısını yer değiştirme: 20 ile 9 aralarında asaldır ama bu kez bir dünyadaki bölüm sayısı dünya sayısından az olur."
  ],
  aciklama: `Dünya sayısı ile bir dünyadaki bölüm sayısının çarpımı 180'dir; yani bu iki sayı 180'in bir çarpan çiftidir. Kurallar, bu çiftler arasından seçim yapmanı istiyor.
Adım 1: 180'i asal çarpanlarına ayır: 180 = 2^{2} · 3^{2} · 5.
Adım 2: Çarpan çiftlerini, küçük sayı başta olacak biçimde eksiksiz yaz: 1 · 180, 2 · 90, 3 · 60, 4 · 45, 5 · 36, 6 · 30, 9 · 20, 10 · 18, 12 · 15.
Adım 3: Birden çok dünya olacağı için 1 · 180 çifti elenir. Bir dünyadaki bölüm sayısı dünya sayısından çok olacağına göre her çiftte küçük sayı dünya sayısıdır; bu yüzden liste bu hâliyle kullanılabilir.
Adım 4: Kalan çiftlerde aralarında asallığı tek tek denetle. 2 ile 90: ikisi de 2'ye bölünür, olmaz. 3 ile 60: ikisi de 3'e bölünür, olmaz. 4 ile 45: ortak bölenleri yoktur, uygun. 5 ile 36: uygun. 6 ile 30: ikisi de 6'ya bölünür, olmaz. 9 ile 20: uygun. 10 ile 18: ikisi de 2'ye bölünür, olmaz. 12 ile 15: ikisi de 3'e bölünür, olmaz.
Adım 5: Kurallara uyan çiftler 4 · 45, 5 · 36 ve 9 · 20'dir. Bunlar arasında dünya sayısının en çoğu 9'dur.
Sağlama: 9 · 20 = 180'dir, 20 sayısı 9'dan çoktur ve EBOB(9, 20) = 1 olduğundan iki sayı aralarında asaldır.
Sık yapılan hata: Bulunan ilk uygun çiftte durmak. En çok diye soran sorularda bütün çarpan çiftlerini sonuna kadar yazıp kuralları hepsine ayrı ayrı uygulamalısın.
Cevap B.`
}
);
