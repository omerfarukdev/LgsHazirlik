// Matematik — Veri Analizi (M.8.4.1): Kademe 1 (Kavrama) yedeği, mat-va-126…175
// Grafiklerdeki her sütun, nokta ve dilim veriden hesaplanmıştır; değerler eksen ölçeğiyle birebir tutar.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["veri-analizi"] = window.LGS_BANK["veri-analizi"] || []).push(
/* ===================== KADEME 1 — KAVRAMA YEDEĞİ (126…175) ===================== */
{
  id: "mat-va-126",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Bir okul kantininde bir günde satılan ürünlerin sayısı aşağıdaki sütun grafiğinde verilmiştir.
**Buna göre en çok satılan ürün ile en az satılan ürün arasında kaç adet fark vardır?**`,
  gorsel: "<svg viewBox=\"0 0 560 312\" role=\"img\" aria-label=\"Sütun grafiği: simit, poğaça, tost ve börek satış sayıları\"><rect x=\"101.38\" y=\"136\" width=\"56\" height=\"126\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"220.13\" y=\"190\" width=\"56\" height=\"72\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"338.88\" y=\"100\" width=\"56\" height=\"162\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"457.63\" y=\"226\" width=\"56\" height=\"36\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Kantinde bir günde satılan ürünler</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Ürün sayısı</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"244\" x2=\"545\" y2=\"244\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"226\" x2=\"545\" y2=\"226\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"208\" x2=\"545\" y2=\"208\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"190\" x2=\"545\" y2=\"190\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"172\" x2=\"545\" y2=\"172\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"154\" x2=\"545\" y2=\"154\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"136\" x2=\"545\" y2=\"136\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"118\" x2=\"545\" y2=\"118\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"100\" x2=\"545\" y2=\"100\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"249\">5</text><text x=\"62\" y=\"231\">10</text><text x=\"62\" y=\"213\">15</text><text x=\"62\" y=\"195\">20</text><text x=\"62\" y=\"177\">25</text><text x=\"62\" y=\"159\">30</text><text x=\"62\" y=\"141\">35</text><text x=\"62\" y=\"123\">40</text><text x=\"62\" y=\"105\">45</text><text x=\"62\" y=\"87\">50</text></g><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"129.38\" y=\"282\">Simit</text><text x=\"248.13\" y=\"282\">Poğaça</text><text x=\"366.88\" y=\"282\">Tost</text><text x=\"485.63\" y=\"282\">Börek</text></g><text x=\"307.5\" y=\"304\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">Ürün</text></svg>",
  secenekler: ["10","25","35","45"],
  dogru: 2,
  hatalar: [
    "Yalnızca en kısa sütunun (börek, 10) değerini okudun. Fark için en uzun sütundan bu değeri çıkarmalısın.",
    "En uzun sütunu (tost, 45) en kısa sütunla değil poğaçayla (20) karşılaştırdın: 45 − 20 = 25.",
    null,
    "Yalnızca en uzun sütunun (tost, 45) değerini okudun. Fark için en kısa sütunun değerini de çıkarmalısın."
  ],
  aciklama: `Sütun grafiğinde bir sütunun ucu, dikey eksendeki bir sayıya denk gelir; o sayı sütunun değeridir. İki sütun arasındaki fark, değerler çıkarılarak bulunur.
Adım 1: Dikey eksen 5'er 5'er artıyor. Simit 35, poğaça 20, tost 45, börek 10 adet satılmıştır.
Adım 2: En çok satılan ürün tosttur (45), en az satılan ürün börektir (10).
Adım 3: Fark: 45 − 10 = 35.
Sağlama: 10 + 35 = 45. Böreğin sayısına 35 eklersen tostun sayısına ulaşırsın.
Sık yapılan hata: Yalnızca en uzun ya da en kısa sütunu okuyup durmak. Kök fark istediğinde iki değeri de bulup çıkarmalısın.
Cevap C.`
},
{
  id: "mat-va-127",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Bir turizm ofisi, 2026 yılında beş ilçeyi ziyaret eden turist sayılarını ilçeleri tek bakışta birbiriyle karşılaştırabilmek için bir gösterim hazırlamak istemektedir.
**Buna göre bu amaca en uygun gösterim aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: ["Sütun grafiği","Çizgi grafiği","Daire grafiği","Tablo"],
  dogru: 0,
  hatalar: [
    null,
    "Çizgi grafiği zaman içindeki değişimi gösterir. İlçeler arasında bir zaman sırası yoktur; çizgi, aralarında bir gidiş varmış izlenimi verir.",
    "Daire grafiği payları gösterir. Beş dilimin büyüklüğünü birbirine bakarak kıyaslamak zordur; karşılaştırma için sütunlar daha açıktır.",
    "Tablo sayıları tek tek verir ama hangi ilçenin daha çok turist ağırladığını tek bakışta göstermez."
  ],
  aciklama: `Her gösterimin güçlü olduğu bir iş vardır: sütun grafiği kategorileri karşılaştırır, çizgi grafiği zaman içindeki değişimi gösterir, daire grafiği bir bütünün parçalarını gösterir.
Adım 1: Amaç, beş ilçeyi birbiriyle karşılaştırmaktır. İlçeler birbirinden bağımsız kategorilerdir ve aralarında zaman sırası yoktur.
Adım 2: Kategorileri karşılaştırmak için sütunlar yan yana çizilir; hangi sütunun daha uzun olduğu tek bakışta görülür. Tablo sayıları verir ama tek bakışta kıyas sağlamaz.
Adım 3: Öyleyse en uygun gösterim sütun grafiğidir.
Sık yapılan hata: Her veri için çizgi grafiğini seçmek. Çizgi, noktalar arasında bir gidiş olduğunu düşündürür; ilçeler arasında böyle bir gidiş yoktur.
Cevap A.`
},
{
  id: "mat-va-128",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Atletizmde uzun atlama çalışan Mina'nın beş denemede atladığı mesafeler aşağıdaki çizgi grafiğinde verilmiştir.
**Buna göre Mina en uzun atlayışını kaçıncı denemede yapmıştır?**`,
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Çizgi grafiği: beş denemede 4, 5, 3, 6 ve 5 metre"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Mina'nın uzun atlama mesafeleri</text><text x="10" y="54" font-size="14" fill="currentColor">Mesafe (m)</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="236.29" x2="545" y2="236.29" stroke-opacity="0.35"/><line x1="70" y1="210.57" x2="545" y2="210.57" stroke-opacity="0.35"/><line x1="70" y1="184.86" x2="545" y2="184.86" stroke-opacity="0.35"/><line x1="70" y1="159.14" x2="545" y2="159.14" stroke-opacity="0.35"/><line x1="70" y1="133.43" x2="545" y2="133.43" stroke-opacity="0.35"/><line x1="70" y1="107.71" x2="545" y2="107.71" stroke-opacity="0.35"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="241.29">1</text><text x="62" y="215.57">2</text><text x="62" y="189.86">3</text><text x="62" y="164.14">4</text><text x="62" y="138.43">5</text><text x="62" y="112.71">6</text><text x="62" y="87">7</text></g><g stroke="currentColor" stroke-width="2"><line x1="117.5" y1="262" x2="117.5" y2="267"/><line x1="212.5" y1="262" x2="212.5" y2="267"/><line x1="307.5" y1="262" x2="307.5" y2="267"/><line x1="402.5" y1="262" x2="402.5" y2="267"/><line x1="497.5" y1="262" x2="497.5" y2="267"/></g><polyline points="117.5,159.14 212.5,133.43 307.5,184.86 402.5,107.71 497.5,133.43" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="117.5" cy="159.14" r="5.5" fill="var(--vurgu)"/><circle cx="212.5" cy="133.43" r="5.5" fill="var(--vurgu)"/><circle cx="307.5" cy="184.86" r="5.5" fill="var(--vurgu)"/><circle cx="402.5" cy="107.71" r="5.5" fill="var(--vurgu)"/><circle cx="497.5" cy="133.43" r="5.5" fill="var(--vurgu)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="117.5" y="282">1. deneme</text><text x="212.5" y="282">2. deneme</text><text x="307.5" y="282">3. deneme</text><text x="402.5" y="282">4. deneme</text><text x="497.5" y="282">5. deneme</text></g></svg>`,
  secenekler: ["1. deneme","2. deneme","3. deneme","4. deneme"],
  dogru: 3,
  hatalar: [
    "Çizginin başlangıç noktasını seçtin. İlk denemede 4 m atlamıştır; bu en yüksek nokta değildir.",
    "2. denemede 5 m atlamıştır ve bu bir artıştır; ama en yüksek nokta 4. denemedeki 6 m'dir.",
    "En alçak noktayı seçtin (3 m). Soru en kısa değil, en uzun atlayışı soruyor.",
    null
  ],
  aciklama: `Çizgi grafiğinde her nokta bir denemeyi gösterir; noktanın yüksekliği o denemedeki mesafedir. En uzun atlayış, en yüksekteki noktadır.
Adım 1: Noktaları oku: 1. deneme 4 m, 2. deneme 5 m, 3. deneme 3 m, 4. deneme 6 m, 5. deneme 5 m.
Adım 2: En büyük değer 6 m'dir ve 4. denemeye aittir.
Sağlama: Dikey eksende en yüksek nokta 6 çizgisindedir; diğer noktaların hiçbiri o çizgiye ulaşmaz.
Sık yapılan hata: En yüksek nokta yerine ilk ya da son noktayı seçmek. Önce bütün noktaları oku, sonra karşılaştır.
Cevap D.`
},
{
  id: "mat-va-129",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Bir mahalledeki 120 hanenin ısınmak için kullandığı yöntemler aşağıdaki daire grafiğinde yüzde olarak verilmiştir. Her hane tek bir yöntem kullanmaktadır.
**Buna göre klima kullanan kaç hane vardır?**`,
  gorsel: `<svg viewBox="0 0 560 350" role="img" aria-label="Daire grafiği: doğal gaz yüzde 50, soba yüzde 25, klima yüzde 15, elektrikli ısıtıcı yüzde 10"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Hanelerin ısınma yöntemleri</text><path d="M280 190 L280 90 A100 100 0 0 1 280 290 Z" fill="var(--vurgu)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><path d="M280 190 L280 290 A100 100 0 0 1 180 190 Z" fill="var(--vurgu2)" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/><path d="M280 190 L180 190 A100 100 0 0 1 221.22 109.1 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M280 190 L221.22 109.1 A100 100 0 0 1 280 90 Z" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><g font-size="14" fill="currentColor"><text x="396" y="188" text-anchor="start" font-weight="bold">Doğal gaz</text><text x="396" y="205" text-anchor="start">%50</text><text x="196.8" y="282.2" text-anchor="end" font-weight="bold">Soba</text><text x="196.8" y="299.2" text-anchor="end">%25</text><text x="176.21" y="137.15" text-anchor="end" font-weight="bold">Klima</text><text x="176.21" y="154.15" text-anchor="end">%15</text><text x="241.39" y="62.48" text-anchor="end" font-weight="bold">Elektrikli ısıtıcı</text><text x="241.39" y="79.48" text-anchor="end">%10</text></g></svg>`,
  secenekler: ["15","18","30","60"],
  dogru: 1,
  hatalar: [
    "%15'teki 15'i hane sayısı sandın. Yüzde bir orandır; 120 haneye uygulanması gerekir.",
    null,
    "Soba diliminin (%25) hane sayısını buldun: 120 : 4 = 30.",
    "Doğal gaz diliminin (%50) hane sayısını buldun: 120 : 2 = 60."
  ],
  aciklama: `Daire grafiğinde dairenin tamamı toplamı (%100) gösterir. Bir dilimin yüzdesi, o dilimin toplamdan aldığı payı verir.
Adım 1: Klima diliminin payı %15'tir.
Adım 2: 120'nin %10'u 12, %5'i 6'dır. %15 = 12 + 6 = 18 haneye karşılık gelir.
Sağlama: Diğer dilimler: doğal gaz 60, soba 30, elektrikli ısıtıcı 12 hane. 60 + 30 + 18 + 12 = 120.
Sık yapılan hata: Yüzdeyi doğrudan sayı sanmak. %15, 15 hane demek değildir; toplamın yüzde 15'idir.
Cevap B.`
},
{
  id: "mat-va-130",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `İki seranın dört gün boyunca topladığı domates kasası sayıları aşağıdaki grafikte verilmiştir.
**Buna göre hangi gün iki seradan toplanan kasa sayıları birbirine eşittir?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"İki veri gruplu sütun grafiği: Güney ve Kuzey seralarından pazartesiden perşembeye toplanan kasa sayıları\"><rect x=\"81.88\" y=\"127\" width=\"47.5\" height=\"135\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"129.38\" y=\"172\" width=\"47.5\" height=\"90\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"200.63\" y=\"149.5\" width=\"47.5\" height=\"112.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"248.13\" y=\"149.5\" width=\"47.5\" height=\"112.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"319.38\" y=\"82\" width=\"47.5\" height=\"180\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"366.88\" y=\"127\" width=\"47.5\" height=\"135\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"438.13\" y=\"172\" width=\"47.5\" height=\"90\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"485.63\" y=\"104.5\" width=\"47.5\" height=\"157.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Seralardan toplanan domates kasası</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Kasa sayısı</text><rect x=\"298.2\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"320.2\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Güney serası</text><rect x=\"430.6\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"452.6\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Kuzey serası</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"239.5\" x2=\"545\" y2=\"239.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"217\" x2=\"545\" y2=\"217\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"194.5\" x2=\"545\" y2=\"194.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"172\" x2=\"545\" y2=\"172\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"149.5\" x2=\"545\" y2=\"149.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"127\" x2=\"545\" y2=\"127\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"104.5\" x2=\"545\" y2=\"104.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"244.5\">5</text><text x=\"62\" y=\"222\">10</text><text x=\"62\" y=\"199.5\">15</text><text x=\"62\" y=\"177\">20</text><text x=\"62\" y=\"154.5\">25</text><text x=\"62\" y=\"132\">30</text><text x=\"62\" y=\"109.5\">35</text><text x=\"62\" y=\"87\">40</text></g><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"129.38\" y=\"282\">Pazartesi</text><text x=\"248.13\" y=\"282\">Salı</text><text x=\"366.88\" y=\"282\">Çarşamba</text><text x=\"485.63\" y=\"282\">Perşembe</text></g></svg>",
  secenekler: ["Pazartesi","Salı","Çarşamba","Perşembe"],
  dogru: 1,
  hatalar: [
    "Pazartesi günü Güney serası 30, Kuzey serası 20 kasa toplamıştır. İki sütun aynı yükseklikte değildir.",
    null,
    "Çarşamba günü sütunlar grafiğin en uzun sütunlarıdır ama biri 40, diğeri 30 kasayı gösterir; eşit değildir.",
    "Perşembe günü Kuzey serası 35, Güney serası 20 kasa toplamıştır. Sütunlar eşit değildir."
  ],
  aciklama: `İki gruplu sütun grafiğinde her günün iki sütunu vardır; renkler lejantta hangi serayı gösterdiğini söyler. İki değer eşitse iki sütunun ucu dikey eksende aynı çizgide biter.
Adım 1: Günleri tek tek karşılaştır: pazartesi 30 - 20, salı 25 - 25, çarşamba 40 - 30, perşembe 20 - 35 (Güney - Kuzey).
Adım 2: İki sütunun aynı yükseklikte olduğu tek gün salıdır; iki seradan da 25'er kasa toplanmıştır.
Sağlama: Salı günü iki sütunun ucu 25 çizgisinde birleşir.
Sık yapılan hata: Sütunların uzun olmasına bakıp günü seçmek. Eşitlik için iki sütunun birbirine eşit olması gerekir.
Cevap B.`
},
{
  id: "mat-va-131",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Bir kitabevinde müşterilere hangi türde kitap okumayı tercih ettikleri sorulmuştur. Her müşteri tek bir tür söylemiştir ve müşterilerin %30'u roman okumayı seçmiştir. Cevaplar daire grafiğiyle gösterilecektir.
**Buna göre roman türünü gösteren dilimin merkez açısı kaç derece olmalıdır?**`,
  gorsel: null,
  secenekler: ["30","54","90","108"],
  dogru: 3,
  hatalar: [
    "Yüzdeyi doğrudan derece yazdın. %30, 30° değildir; tam daire 360°'dir ve %30'u hesaplanmalıdır.",
    "Tam daireyi 180° alıp 180'in %30'unu hesapladın. Tam daire 360°'dir.",
    "%30'u %25 gibi düşünüp 360'ın dörtte birini aldın. %25 = 90° olduğundan %30 daha büyük bir açıdır.",
    null
  ],
  aciklama: `Daire grafiğinde tam daire 360°'dir ve %100'ü gösterir. %1'e karşılık gelen açı 360° : 100 = 3,6°'dir.
Adım 1: %10'luk dilim 36°'dir (360° : 10).
Adım 2: %30 bunun 3 katıdır: 3 · 36° = 108°.
Sağlama: %25 = 90° ve %50 = 180°'dir. %30 bu ikisinin arasında olduğundan 108° makul bir açıdır.
Sık yapılan hata: Yüzdeyi derece sanmak. Yüzde ile derece farklı ölçülerdir; tam daire %100 ve 360°'dir.
Cevap D.`
},
{
  id: "mat-va-132",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Bir göl kıyısındaki Doğu ve Batı iskelelerinden dört gün boyunca kiralanan kayıkların sayısı aşağıdaki çizgi grafiğinde verilmiştir.
**Buna göre 3. gün Doğu iskelesinden kiralanan kayık sayısı, Batı iskelesinden kiralananın kaç katıdır?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"İki veri gruplu çizgi grafiği: Doğu ve Batı iskelelerinden dört günde kiralanan kayıklar\"><rect x=\"124.38\" y=\"128.43\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"243.13\" y=\"179.86\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"361.88\" y=\"179.86\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"480.63\" y=\"102.71\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: İskelelerden kiralanan kayık sayısı</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Kayık sayısı</text><line x1=\"274.8\" y1=\"49\" x2=\"294.8\" y2=\"49\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"284.8\" cy=\"49\" r=\"5.5\" fill=\"var(--vurgu)\"/><text x=\"300.8\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Doğu iskelesi</text><line x1=\"418.9\" y1=\"49\" x2=\"438.9\" y2=\"49\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-dasharray=\"9 5\"/><rect x=\"423.9\" y=\"44\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><text x=\"444.9\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Batı iskelesi</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"236.29\" x2=\"545\" y2=\"236.29\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"210.57\" x2=\"545\" y2=\"210.57\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"184.86\" x2=\"545\" y2=\"184.86\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"159.14\" x2=\"545\" y2=\"159.14\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"133.43\" x2=\"545\" y2=\"133.43\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"107.71\" x2=\"545\" y2=\"107.71\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"241.29\">4</text><text x=\"62\" y=\"215.57\">8</text><text x=\"62\" y=\"189.86\">12</text><text x=\"62\" y=\"164.14\">16</text><text x=\"62\" y=\"138.43\">20</text><text x=\"62\" y=\"112.71\">24</text><text x=\"62\" y=\"87\">28</text></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"129.38\" y1=\"262\" x2=\"129.38\" y2=\"267\"/><line x1=\"248.13\" y1=\"262\" x2=\"248.13\" y2=\"267\"/><line x1=\"366.88\" y1=\"262\" x2=\"366.88\" y2=\"267\"/><line x1=\"485.63\" y1=\"262\" x2=\"485.63\" y2=\"267\"/></g><polyline points=\"129.38,184.86 248.13,133.43 366.88,107.71 485.63,159.14\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polyline points=\"129.38,133.43 248.13,184.86 366.88,184.86 485.63,107.71\" fill=\"none\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-dasharray=\"9 5\"/><circle cx=\"129.38\" cy=\"184.86\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"248.13\" cy=\"133.43\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"366.88\" cy=\"107.71\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"485.63\" cy=\"159.14\" r=\"5.5\" fill=\"var(--vurgu)\"/><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"129.38\" y=\"282\">1. gün</text><text x=\"248.13\" y=\"282\">2. gün</text><text x=\"366.88\" y=\"282\">3. gün</text><text x=\"485.63\" y=\"282\">4. gün</text></g></svg>",
  secenekler: ["2","12","24","36"],
  dogru: 0,
  hatalar: [
    null,
    "Katı değil farkı hesapladın: 24 − 12 = 12.",
    "Doğu iskelesinin değerini (24) kat sayısı sandın. Kat bulmak için bu değeri Batı'nın değerine bölmelisin.",
    "İki değeri toplayıp (24 + 12) durdun. Kat bulmak için bölme yapılır."
  ],
  aciklama: `Bir sayının diğerinin kaç katı olduğu bölmeyle bulunur: kat = büyük sayı : küçük sayı. Fark ise çıkarmayla bulunur; ikisi farklı şeylerdir.
Adım 1: Lejanta göre düz çizgi ve yuvarlak işaretler Doğu iskelesini, kesikli çizgi ve kare işaretler Batı iskelesini gösterir.
Adım 2: 3. günde Doğu iskelesi 24, Batı iskelesi 12 kayık kiralanmıştır.
Adım 3: 24 : 12 = 2.
Sağlama: 2 · 12 = 24.
Sık yapılan hata: Farkı (12) kat sanmak. "Kaç katı" ifadesi bölmeyi, "kaç fazla" ifadesi çıkarmayı gerektirir.
Cevap A.`
},
{
  id: "mat-va-133",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Bir çay ocağında dört günde satılan çay bardağı sayıları aşağıdaki tabloda verilmiştir. Bu veriler sütun grafiğiyle gösterilecek ve dikey eksende her aralık 20 bardağı gösterecektir.
**Buna göre Salı günü için çizilecek sütun, sıfır çizgisinden başlayarak kaç aralık yüksekliğinde olmalıdır?**`,
  gorsel: `<table class="tablo"><tr><th>Gün</th><th>Satılan bardak sayısı</th></tr><tr><td>Pazartesi</td><td>60</td></tr><tr><td>Salı</td><td>80</td></tr><tr><td>Çarşamba</td><td>40</td></tr><tr><td>Perşembe</td><td>100</td></tr></table>`,
  secenekler: ["2","3","4","5"],
  dogru: 2,
  hatalar: [
    "Çarşamba gününün satırını okudun: 40 : 20 = 2.",
    "Pazartesi gününün satırını okudun: 60 : 20 = 3.",
    null,
    "Perşembe gününün satırını okudun: 100 : 20 = 5."
  ],
  aciklama: `Tablodaki bir değeri sütun grafiğine aktarırken sütunun yüksekliği şöyle bulunur: aralık sayısı = değer : bir aralığın gösterdiği değer.
Adım 1: Tabloda Salı günü satılan bardak sayısı 80'dir.
Adım 2: Bir aralık 20 bardağı gösterdiğine göre 80 : 20 = 4 aralık.
Sağlama: 4 · 20 = 80. Sütunun ucu eksendeki 4. çizgide biter.
Sık yapılan hata: Yanlış günün satırını okumak. Önce istenen günü tabloda bul, sonra aralık değerine böl.
Cevap C.`
},
{
  id: "mat-va-134",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Bir ilçedeki Gül, Çınar ve Bahçe mahallelerinin üç farklı yıldaki nüfusları aşağıdaki sütun grafiğinde verilmiştir.
**Buna göre Çınar mahallesinin 2024 yılındaki nüfusu kaç binidir?**`,
  gorsel: "<svg viewBox=\"0 0 560 312\" role=\"img\" aria-label=\"Üç veri gruplu sütun grafiği: Gül, Çınar ve Bahçe mahallelerinin 2022, 2024 ve 2026 nüfusları\"><rect x=\"85.83\" y=\"172\" width=\"42.22\" height=\"90\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"128.06\" y=\"217\" width=\"42.22\" height=\"45\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"170.28\" y=\"149.5\" width=\"42.22\" height=\"112.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"244.17\" y=\"149.5\" width=\"42.22\" height=\"112.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"286.39\" y=\"194.5\" width=\"42.22\" height=\"67.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"328.61\" y=\"127\" width=\"42.22\" height=\"135\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"402.5\" y=\"104.5\" width=\"42.22\" height=\"157.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"444.72\" y=\"172\" width=\"42.22\" height=\"90\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"486.94\" y=\"82\" width=\"42.22\" height=\"180\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Mahallelerin nüfusu</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Nüfus (bin kişi)</text><rect x=\"342.9\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"364.9\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Gül</text><rect x=\"406\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"428\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Çınar</text><rect x=\"484.5\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"506.5\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Bahçe</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"239.5\" x2=\"545\" y2=\"239.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"217\" x2=\"545\" y2=\"217\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"194.5\" x2=\"545\" y2=\"194.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"172\" x2=\"545\" y2=\"172\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"149.5\" x2=\"545\" y2=\"149.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"127\" x2=\"545\" y2=\"127\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"104.5\" x2=\"545\" y2=\"104.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"244.5\">2</text><text x=\"62\" y=\"222\">4</text><text x=\"62\" y=\"199.5\">6</text><text x=\"62\" y=\"177\">8</text><text x=\"62\" y=\"154.5\">10</text><text x=\"62\" y=\"132\">12</text><text x=\"62\" y=\"109.5\">14</text><text x=\"62\" y=\"87\">16</text></g><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"149.17\" y=\"282\">2022</text><text x=\"307.5\" y=\"282\">2024</text><text x=\"465.83\" y=\"282\">2026</text></g><text x=\"307.5\" y=\"304\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">Yıl</text></svg>",
  secenekler: ["6","8","10","12"],
  dogru: 0,
  hatalar: [
    null,
    "Doğru mahalleye baktın ama yanlış yılı okudun. Çınar mahallesinin nüfusu 2026'da 8 bindir.",
    "Sütunların rengini karıştırdın. 2024'te 10 bin, Gül mahallesinin nüfusudur.",
    "Bahçe mahallesinin sütununu okudun. 2024'te 12 bin, Bahçe mahallesinin nüfusudur."
  ],
  aciklama: `Üç gruplu sütun grafiğinde her yılın üç sütunu vardır. Hangi sütunun hangi mahalleye ait olduğunu lejant söyler.
Adım 1: Lejanta göre her grubun soldaki sütunu Gül, ortadaki sütunu Çınar, sağdaki sütunu Bahçe mahallesidir.
Adım 2: "2024" grubunu bul ve ortadaki sütunun ucunu dikey eksende oku: 6.
Sağlama: 2024 grubunda sütunlar soldan sağa 10, 6 ve 12'yi gösterir; Çınar'ınki ikincisidir.
Sık yapılan hata: Yanlış grubu ya da yanlış rengi okumak. Önce yılı, sonra mahalleyi bul.
Cevap A.`
},
{
  id: "mat-va-135",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Bir sınıftaki 40 öğrencinin en sevdiği meyve aşağıdaki daire grafiğinde öğrenci sayılarıyla verilmiştir. Her öğrenci tek bir meyve söylemiştir.
**Buna göre çilek diliminin merkez açısı kaç derecedir?**`,
  gorsel: `<svg viewBox="0 0 560 350" role="img" aria-label="Daire grafiği: elma 16, çilek 12, üzüm 8, kiraz 4 öğrenci"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Öğrencilerin en sevdiği meyve</text><path d="M280 190 L280 90 A100 100 0 0 1 338.78 270.9 Z" fill="var(--vurgu)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><path d="M280 190 L338.78 270.9 A100 100 0 0 1 184.89 220.9 Z" fill="var(--vurgu2)" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/><path d="M280 190 L184.89 220.9 A100 100 0 0 1 221.22 109.1 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M280 190 L221.22 109.1 A100 100 0 0 1 280 90 Z" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><g font-size="14" fill="currentColor"><text x="390.52" y="153.39" text-anchor="start" font-weight="bold">Elma</text><text x="390.52" y="170.39" text-anchor="start">16 kişi</text><text x="241.39" y="309.52" text-anchor="end" font-weight="bold">Çilek</text><text x="241.39" y="326.52" text-anchor="end">12 kişi</text><text x="169.48" y="153.39" text-anchor="end" font-weight="bold">Üzüm</text><text x="169.48" y="170.39" text-anchor="end">8 kişi</text><text x="241.39" y="62.48" text-anchor="end" font-weight="bold">Kiraz</text><text x="241.39" y="79.48" text-anchor="end">4 kişi</text></g></svg>`,
  secenekler: ["12","72","108","144"],
  dogru: 2,
  hatalar: [
    "Çilek diliminin öğrenci sayısını (12) açı olarak yazdın. Sayıyı açıya çevirmek için bir öğrencinin açısıyla (9°) çarpmalısın.",
    "Üzüm diliminin açısını buldun: 8 · 9° = 72°.",
    null,
    "Elma diliminin açısını buldun: 16 · 9° = 144°."
  ],
  aciklama: `Daire grafiğinde 360°, bütün öğrencileri paylaşır. Bir dilimin merkez açısı, o dilimdeki öğrenci sayısına göre belirlenir.
Adım 1: 40 öğrenci 360°'yi paylaştığı için bir öğrenciye 360° : 40 = 9° düşer.
Adım 2: Çilek diliminde 12 öğrenci vardır: 12 · 9° = 108°.
Sağlama: Dört dilimin açıları 144° + 108° + 72° + 36° = 360°'dir.
Sık yapılan hata: Öğrenci sayısını açı sanmak. Sayı ile derece farklı ölçülerdir; aralarındaki geçiş bir öğrencinin açısıyla yapılır.
Cevap C.`
},
{
  id: "mat-va-136",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Bir evin beş gün boyunca tükettiği elektrik miktarı aşağıdaki çizgi grafiğinde verilmiştir.
**Buna göre 3. günden 4. güne geçerken tüketim kaç kWh artmıştır?**`,
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Çizgi grafiği: beş günde 4, 7, 5, 9 ve 6 kWh elektrik tüketimi"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Evin günlük elektrik tüketimi</text><text x="10" y="54" font-size="14" fill="currentColor">Tüketim (kWh)</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="244" x2="545" y2="244" stroke-opacity="0.35"/><line x1="70" y1="226" x2="545" y2="226" stroke-opacity="0.35"/><line x1="70" y1="208" x2="545" y2="208" stroke-opacity="0.35"/><line x1="70" y1="190" x2="545" y2="190" stroke-opacity="0.35"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.35"/><line x1="70" y1="154" x2="545" y2="154" stroke-opacity="0.35"/><line x1="70" y1="136" x2="545" y2="136" stroke-opacity="0.35"/><line x1="70" y1="118" x2="545" y2="118" stroke-opacity="0.35"/><line x1="70" y1="100" x2="545" y2="100" stroke-opacity="0.35"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="249">1</text><text x="62" y="231">2</text><text x="62" y="213">3</text><text x="62" y="195">4</text><text x="62" y="177">5</text><text x="62" y="159">6</text><text x="62" y="141">7</text><text x="62" y="123">8</text><text x="62" y="105">9</text><text x="62" y="87">10</text></g><g stroke="currentColor" stroke-width="2"><line x1="117.5" y1="262" x2="117.5" y2="267"/><line x1="212.5" y1="262" x2="212.5" y2="267"/><line x1="307.5" y1="262" x2="307.5" y2="267"/><line x1="402.5" y1="262" x2="402.5" y2="267"/><line x1="497.5" y1="262" x2="497.5" y2="267"/></g><polyline points="117.5,190 212.5,136 307.5,172 402.5,100 497.5,154" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="117.5" cy="190" r="5.5" fill="var(--vurgu)"/><circle cx="212.5" cy="136" r="5.5" fill="var(--vurgu)"/><circle cx="307.5" cy="172" r="5.5" fill="var(--vurgu)"/><circle cx="402.5" cy="100" r="5.5" fill="var(--vurgu)"/><circle cx="497.5" cy="154" r="5.5" fill="var(--vurgu)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="117.5" y="282">1. gün</text><text x="212.5" y="282">2. gün</text><text x="307.5" y="282">3. gün</text><text x="402.5" y="282">4. gün</text><text x="497.5" y="282">5. gün</text></g></svg>`,
  secenekler: ["3","4","5","9"],
  dogru: 1,
  hatalar: [
    "4. günden 5. güne geçişteki azalmayı (9 − 6 = 3) hesapladın. Soru 3. gün ile 4. gün arasındaki artışı soruyor.",
    null,
    "3. günün değerini (5 kWh) okuyup durdun. Artış, iki günün değerinin farkıdır.",
    "4. günün değerini (9 kWh) okuyup durdun. Artış, 4. gün ile 3. günün farkıdır."
  ],
  aciklama: `Çizgi grafiğinde iki nokta arasındaki artış, sonraki noktanın değerinden önceki noktanın değeri çıkarılarak bulunur.
Adım 1: 3. gün tüketimi 5 kWh, 4. gün tüketimi 9 kWh'dir.
Adım 2: Artış: 9 − 5 = 4 kWh.
Sağlama: 5 + 4 = 9. Grafikte de çizgi bu aralıkta 5 çizgisinden 9 çizgisine yükselir.
Sık yapılan hata: Yanlış aralığı hesaplamak. 4. günden 5. güne geçiş azalmadır (9 → 6); soru artışı soruyor.
Cevap B.`
},
{
  id: "mat-va-137",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Bir okulun dergisini hazırlayan öğrenciler, topladıkları verilerden birini daire grafiğiyle göstermek istemektedir.
**Buna göre aşağıdaki verilerden hangisi daire grafiğiyle göstermeye en uygundur?**`,
  gorsel: null,
  secenekler: ["Beş farklı dağın deniz seviyesinden yükseklikleri","Bir bebeğin ilk altı ayda her ay ölçülen boy uzunlukları","Bir kentte son yedi gün ölçülen hava sıcaklıklarının değerleri","Bir okuldaki 300 öğrencinin okula geliş biçimine göre sayıları"],
  dogru: 3,
  hatalar: [
    "Dağların yükseklikleri toplanınca anlamlı bir bütün oluşmaz. Bu veri sütun grafiğiyle karşılaştırılır.",
    "Boy zamanla değişen bir büyüklüktür ve aylık boylar toplanınca bir bütün oluşmaz. Bu veri çizgi grafiğine uygundur.",
    "Sıcaklıklar toplanınca anlamlı bir bütün oluşmaz. Günlere göre değişim çizgi grafiğiyle gösterilir.",
    null
  ],
  aciklama: `Daire grafiği, bir bütünün parçalara nasıl bölündüğünü gösterir. Bunun için parçalar toplanınca anlamlı bir bütün (örneğin tüm öğrenciler) etmeli ve her birim yalnızca tek bir parçada yer almalıdır.
Adım 1: Dağların yükseklikleri, bebeğin aylık boyları ve günlük sıcaklıklar toplanınca anlamlı bir bütün oluşturmaz.
Adım 2: 300 öğrencinin okula geliş biçimleri ise (yürüyerek, servis, bisiklet gibi) toplanınca 300 öğrenciyi verir ve her öğrenci tek bir biçimde yer alır.
Adım 3: Öyleyse daire grafiğine en uygun veri D seçeneğindeki verilerdir.
Sık yapılan hata: Sayıları görünce her veriyi daire grafiğine uygun saymak. Önce "bu sayılar toplanınca anlamlı bir bütün oluyor mu?" diye sor.
Cevap D.`
},
{
  id: "mat-va-138",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Bir kentte kış aylarında yağışlı geçen gün sayıları aşağıdaki sütun grafiğinde verilmiştir.
**Buna göre bu dört ayda toplam kaç gün yağışlı geçmiştir?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"Sütun grafiği: aralık 15, ocak 10, şubat 25 ve mart 30 yağışlı gün\"><rect x=\"101.38\" y=\"184.86\" width=\"56\" height=\"77.14\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"220.13\" y=\"210.57\" width=\"56\" height=\"51.43\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"338.88\" y=\"133.43\" width=\"56\" height=\"128.57\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"457.63\" y=\"107.71\" width=\"56\" height=\"154.29\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Aylara göre yağışlı gün sayısı</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Gün sayısı</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"236.29\" x2=\"545\" y2=\"236.29\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"210.57\" x2=\"545\" y2=\"210.57\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"184.86\" x2=\"545\" y2=\"184.86\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"159.14\" x2=\"545\" y2=\"159.14\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"133.43\" x2=\"545\" y2=\"133.43\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"107.71\" x2=\"545\" y2=\"107.71\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"241.29\">5</text><text x=\"62\" y=\"215.57\">10</text><text x=\"62\" y=\"189.86\">15</text><text x=\"62\" y=\"164.14\">20</text><text x=\"62\" y=\"138.43\">25</text><text x=\"62\" y=\"112.71\">30</text><text x=\"62\" y=\"87\">35</text></g><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"129.38\" y=\"282\">Aralık</text><text x=\"248.13\" y=\"282\">Ocak</text><text x=\"366.88\" y=\"282\">Şubat</text><text x=\"485.63\" y=\"282\">Mart</text></g></svg>",
  secenekler: ["55","65","70","80"],
  dogru: 3,
  hatalar: [
    "Şubat ayını toplama katmadın: 15 + 10 + 30 = 55.",
    "Aralık ayını toplama katmadın: 10 + 25 + 30 = 65.",
    "Ocak ayını toplama katmadın: 15 + 25 + 30 = 70.",
    null
  ],
  aciklama: `Toplam sorulduğunda grafikteki bütün sütunların değerleri toplanır; hiçbir sütun dışarıda bırakılmaz.
Adım 1: Dikey eksen 5'er 5'er artıyor. Sütunları oku: aralık 15, ocak 10, şubat 25, mart 30 gün.
Adım 2: Topla: 15 + 10 + 25 + 30 = 80.
Sağlama: (15 + 25) + (10 + 30) = 40 + 40 = 80.
Sık yapılan hata: Bir sütunu toplama katmayı unutmak. Dört sütun varsa dört değeri de topladığından emin ol.
Cevap D.`
},
{
  id: "mat-va-139",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Bir bayide bir haftada satılan 80 yayının türlere göre dağılımı aşağıdaki daire grafiğinde yüzde olarak verilmiştir. Bu veriler bir sütun grafiğiyle de gösterilecektir.
**Buna göre sütun grafiğinde dergiyi gösteren sütun, dikey eksende hangi değere kadar uzanmalıdır?**`,
  gorsel: `<svg viewBox="0 0 560 350" role="img" aria-label="Daire grafiği: gazete yüzde 50, dergi yüzde 25, bulmaca yüzde 15, kitap yüzde 10"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Haftalık satılan yayınların dağılımı</text><path d="M280 190 L280 90 A100 100 0 0 1 280 290 Z" fill="var(--vurgu)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><path d="M280 190 L280 290 A100 100 0 0 1 180 190 Z" fill="var(--vurgu2)" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/><path d="M280 190 L180 190 A100 100 0 0 1 221.22 109.1 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M280 190 L221.22 109.1 A100 100 0 0 1 280 90 Z" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><g font-size="14" fill="currentColor"><text x="396" y="188" text-anchor="start" font-weight="bold">Gazete</text><text x="396" y="205" text-anchor="start">%50</text><text x="196.8" y="282.2" text-anchor="end" font-weight="bold">Dergi</text><text x="196.8" y="299.2" text-anchor="end">%25</text><text x="170" y="130" text-anchor="end" font-weight="bold">Bulmaca</text><text x="170" y="147" text-anchor="end">%15</text><text x="247.01" y="60.82" text-anchor="end" font-weight="bold">Kitap</text><text x="247.01" y="77.82" text-anchor="end">%10</text></g></svg>`,
  secenekler: ["8","20","25","40"],
  dogru: 1,
  hatalar: [
    "Kitap diliminin (%10) değerini buldun: 80'in %10'u 8'dir. Dergi diliminin payı %25'tir.",
    null,
    "Dergi diliminin yüzdesini (25) sütun yüksekliği sandın. Sütun, yüzdeyi değil yayın sayısını gösterir.",
    "Gazete diliminin (%50) değerini buldun: 80'in %50'si 40'tır."
  ],
  aciklama: `Sütun grafiğinde sütunun yüksekliği sayıyı gösterir. Daire grafiğinde ise yüzdeler verilmiştir; bu yüzden önce yüzdeyi sayıya çevirmek gerekir.
Adım 1: Dergi diliminin payı %25'tir. Bu, 80 yayının [[25|100]] kadarı demektir: 80 · [[25|100]] = 20.
Adım 2: Dergiyi gösteren sütun dikey eksende 20 değerine kadar uzanmalıdır.
Sağlama: Diğer türler: gazete 80 · [[50|100]] = 40, bulmaca 80 · [[15|100]] = 12, kitap 80 · [[10|100]] = 8. 40 + 20 + 12 + 8 = 80.
Sık yapılan hata: Yüzdeyi doğrudan sütun yüksekliği sanmak. %25, 25 yayın demek değildir; 80 yayının %25'idir.
Cevap B.`
},
{
  id: "mat-va-140",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Bir ilde güneş, rüzgâr ve hidroelektrik santrallerinden ilk dört ayda elde edilen elektrik enerjisi aşağıdaki çizgi grafiğinde verilmiştir.
**Buna göre mart ayında güneş santralinden elde edilen enerji kaç GWh'dir?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"Üç veri gruplu çizgi grafiği: güneş, rüzgâr ve hidroelektrik santrallerinin ocaktan nisana enerji üretimi\"><rect x=\"124.38\" y=\"137\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"243.13\" y=\"167\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"361.88\" y=\"197\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"480.63\" y=\"227\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Santrallerden elde edilen enerji</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Enerji (GWh)</text><line x1=\"246.2\" y1=\"49\" x2=\"266.2\" y2=\"49\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"256.2\" cy=\"49\" r=\"5.5\" fill=\"var(--vurgu)\"/><text x=\"272.2\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Güneş</text><line x1=\"328.7\" y1=\"49\" x2=\"348.7\" y2=\"49\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-dasharray=\"9 5\"/><rect x=\"333.7\" y=\"44\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><text x=\"354.7\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Rüzgâr</text><line x1=\"418.9\" y1=\"49\" x2=\"438.9\" y2=\"49\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"3 4\"/><path d=\"M428.9 42.5 L434.9 54 L422.9 54 Z\" fill=\"currentColor\"/><text x=\"444.9\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Hidroelektrik</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"232\" x2=\"545\" y2=\"232\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"202\" x2=\"545\" y2=\"202\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"172\" x2=\"545\" y2=\"172\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"142\" x2=\"545\" y2=\"142\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"112\" x2=\"545\" y2=\"112\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"237\">10</text><text x=\"62\" y=\"207\">20</text><text x=\"62\" y=\"177\">30</text><text x=\"62\" y=\"147\">40</text><text x=\"62\" y=\"117\">50</text><text x=\"62\" y=\"87\">60</text></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"129.38\" y1=\"262\" x2=\"129.38\" y2=\"267\"/><line x1=\"248.13\" y1=\"262\" x2=\"248.13\" y2=\"267\"/><line x1=\"366.88\" y1=\"262\" x2=\"366.88\" y2=\"267\"/><line x1=\"485.63\" y1=\"262\" x2=\"485.63\" y2=\"267\"/></g><polyline points=\"129.38,232 248.13,202 366.88,142 485.63,112\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polyline points=\"129.38,142 248.13,172 366.88,202 485.63,232\" fill=\"none\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-dasharray=\"9 5\"/><polyline points=\"129.38,172 248.13,112 366.88,172 485.63,202\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"3 4\"/><circle cx=\"129.38\" cy=\"232\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"248.13\" cy=\"202\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"366.88\" cy=\"142\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"485.63\" cy=\"112\" r=\"5.5\" fill=\"var(--vurgu)\"/><path d=\"M129.38 165.5 L135.38 177 L123.38 177 Z\" fill=\"currentColor\"/><path d=\"M248.13 105.5 L254.13 117 L242.13 117 Z\" fill=\"currentColor\"/><path d=\"M366.88 165.5 L372.88 177 L360.88 177 Z\" fill=\"currentColor\"/><path d=\"M485.63 195.5 L491.63 207 L479.63 207 Z\" fill=\"currentColor\"/><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"129.38\" y=\"282\">Ocak</text><text x=\"248.13\" y=\"282\">Şubat</text><text x=\"366.88\" y=\"282\">Mart</text><text x=\"485.63\" y=\"282\">Nisan</text></g></svg>",
  secenekler: ["20","30","40","50"],
  dogru: 2,
  hatalar: [
    "Rüzgâr santralinin çizgisini okudun. Mart ayında rüzgârdan 20 GWh elde edilmiştir.",
    "Hidroelektrik santralinin çizgisini okudun. Mart ayında hidroelektrikten 30 GWh elde edilmiştir.",
    null,
    "Doğru santrale baktın ama yanlış ayı okudun. Güneşten 50 GWh, nisan ayında elde edilmiştir."
  ],
  aciklama: `Üç gruplu çizgi grafiğinde her grubun çizgisi farklı biçimde çizilir; hangi çizginin hangi santrale ait olduğunu lejant söyler.
Adım 1: Lejanta göre düz çizgi ve yuvarlak işaretler güneş santralini gösterir.
Adım 2: Yatay eksende "Mart" noktasını bul ve güneş çizgisinin o noktadaki yüksekliğini dikey eksende oku: 40 GWh.
Sağlama: Mart ayında üç santral sırasıyla 40, 20 ve 30 GWh enerji üretmiştir; güneşinki bunların ilkidir.
Sık yapılan hata: Yanlış çizgiyi ya da yanlış ayı okumak. Önce ayı, sonra çizgiyi bul.
Cevap C.`
},
{
  id: "mat-va-141",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Bir bahçedeki ağaçların türlere göre dağılımı aşağıdaki daire grafiğinde yüzde olarak verilmiştir. Bahçede bu dört türün dışında ağaç yoktur; ceviz ağaçlarının oranı grafikte gösterilmemiştir.
**Buna göre ceviz ağaçları bahçedeki ağaçların yüzde kaçıdır?**`,
  gorsel: `<svg viewBox="0 0 560 350" role="img" aria-label="Daire grafiği: elma yüzde 40, erik yüzde 30, kiraz yüzde 20, ceviz bilinmiyor"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Bahçedeki ağaçların dağılımı</text><path d="M280 190 L280 90 A100 100 0 0 1 338.78 270.9 Z" fill="var(--vurgu)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><path d="M280 190 L338.78 270.9 A100 100 0 0 1 184.89 220.9 Z" fill="var(--vurgu2)" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/><path d="M280 190 L184.89 220.9 A100 100 0 0 1 221.22 109.1 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M280 190 L221.22 109.1 A100 100 0 0 1 280 90 Z" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><g font-size="14" fill="currentColor"><text x="390.52" y="153.39" text-anchor="start" font-weight="bold">Elma</text><text x="390.52" y="170.39" text-anchor="start">%40</text><text x="241.39" y="309.52" text-anchor="end" font-weight="bold">Erik</text><text x="241.39" y="326.52" text-anchor="end">%30</text><text x="169.48" y="153.39" text-anchor="end" font-weight="bold">Kiraz</text><text x="169.48" y="170.39" text-anchor="end">%20</text><text x="241.39" y="62.48" text-anchor="end" font-weight="bold">Ceviz</text><text x="241.39" y="79.48" text-anchor="end">?</text></g></svg>`,
  secenekler: ["10","20","30","70"],
  dogru: 0,
  hatalar: [
    null,
    "Kiraz diliminin yüzdesini (%20) okudun. Ceviz dilimi, grafikte gösterilmeyen dilimdir.",
    "Yalnızca iki dilimi çıkardın (100 − 40 − 30 = 30). Kiraz diliminin %20'sini de çıkarman gerekirdi.",
    "Bilinen iki diliminin yüzdelerini topladın (40 + 30 = 70). Bunu %100'den çıkarmayı unuttun."
  ],
  aciklama: `Daire grafiğinde bütün dilimlerin yüzdeleri toplamı %100'dür. Eksik dilim, %100'den bilinen dilimlerin çıkarılmasıyla bulunur.
Adım 1: Bilinen dilimleri topla: 40 + 30 + 20 = 90.
Adım 2: Eksik dilim: 100 − 90 = 10. Ceviz ağaçları %10'dur.
Sağlama: 40 + 30 + 20 + 10 = 100.
Sık yapılan hata: Bilinen dilimlerden yalnızca birkaçını çıkarmak. Eksik dilimi bulurken bütün bilinen dilimleri hesaba kat.
Cevap A.`
},
{
  id: "mat-va-142",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Bir otogarda cuma, cumartesi ve pazar günlerinde sabah ve akşam seferlerine binen yolcu sayıları aşağıdaki sütun grafiğinde verilmiştir.
**Buna göre pazar günü akşam seferlerine binen yolcu sayısı, sabah seferlerine binenden kaç fazladır?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"İki veri gruplu sütun grafiği: cuma, cumartesi ve pazar günleri sabah ve akşam seferlerine binen yolcular\"><rect x=\"99.17\" y=\"172\" width=\"50\" height=\"90\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"149.17\" y=\"127\" width=\"50\" height=\"135\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"257.5\" y=\"149.5\" width=\"50\" height=\"112.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"307.5\" y=\"104.5\" width=\"50\" height=\"157.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"415.83\" y=\"194.5\" width=\"50\" height=\"67.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"465.83\" y=\"104.5\" width=\"50\" height=\"157.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Seferlere binen yolcu sayısı</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Yolcu sayısı</text><rect x=\"298.2\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"320.2\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Sabah seferi</text><rect x=\"430.6\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"452.6\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Akşam seferi</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"239.5\" x2=\"545\" y2=\"239.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"217\" x2=\"545\" y2=\"217\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"194.5\" x2=\"545\" y2=\"194.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"172\" x2=\"545\" y2=\"172\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"149.5\" x2=\"545\" y2=\"149.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"127\" x2=\"545\" y2=\"127\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"104.5\" x2=\"545\" y2=\"104.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"244.5\">20</text><text x=\"62\" y=\"222\">40</text><text x=\"62\" y=\"199.5\">60</text><text x=\"62\" y=\"177\">80</text><text x=\"62\" y=\"154.5\">100</text><text x=\"62\" y=\"132\">120</text><text x=\"62\" y=\"109.5\">140</text><text x=\"62\" y=\"87\">160</text></g><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"149.17\" y=\"282\">Cuma</text><text x=\"307.5\" y=\"282\">Cumartesi</text><text x=\"465.83\" y=\"282\">Pazar</text></g></svg>",
  secenekler: ["40","60","80","200"],
  dogru: 2,
  hatalar: [
    "Pazar günü yerine cuma ya da cumartesi gününün farkını okudun. O günlerin ikisinde de fark 40'tır.",
    "Pazar günü sabah seferlerinin değerini (60) fark sandın. Fark için akşam değerinden bu değeri çıkarmalısın.",
    null,
    "Farkı değil toplamı buldun: 60 + 140 = 200."
  ],
  aciklama: `İki gruplu sütun grafiğinde "kaç fazla" sorusu, aynı kategorideki iki sütunun farkını ister: büyük değer − küçük değer.
Adım 1: Lejanta göre her günün soldaki sütunu sabah, sağdaki sütunu akşam seferini gösterir.
Adım 2: Pazar günü sabah seferinde 60, akşam seferinde 140 yolcu vardır.
Adım 3: Fark: 140 − 60 = 80.
Sağlama: 60 + 80 = 140.
Sık yapılan hata: Yanlış günün sütunlarını okumak ya da farkı bulmak yerine toplamak. "Kaç fazla" çıkarma ister.
Cevap C.`
},
{
  id: "mat-va-143",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Cemre, balkonunda yetiştirdiği ayçiçeği fidesinin boyunu beş hafta boyunca ölçmüş ve aşağıdaki çizgi grafiğini hazırlamıştır.
**Buna göre fidenin boyu hangi iki ölçüm arasında değişmemiştir?**`,
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Çizgi grafiği: beş haftada fidenin boyu 6, 6, 10, 12 ve 16 santimetre"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Fidenin boyunun haftalara göre değişimi</text><text x="10" y="54" font-size="14" fill="currentColor">Boy (cm)</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="239.5" x2="545" y2="239.5" stroke-opacity="0.35"/><line x1="70" y1="217" x2="545" y2="217" stroke-opacity="0.35"/><line x1="70" y1="194.5" x2="545" y2="194.5" stroke-opacity="0.35"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.35"/><line x1="70" y1="149.5" x2="545" y2="149.5" stroke-opacity="0.35"/><line x1="70" y1="127" x2="545" y2="127" stroke-opacity="0.35"/><line x1="70" y1="104.5" x2="545" y2="104.5" stroke-opacity="0.35"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="244.5">2</text><text x="62" y="222">4</text><text x="62" y="199.5">6</text><text x="62" y="177">8</text><text x="62" y="154.5">10</text><text x="62" y="132">12</text><text x="62" y="109.5">14</text><text x="62" y="87">16</text></g><g stroke="currentColor" stroke-width="2"><line x1="117.5" y1="262" x2="117.5" y2="267"/><line x1="212.5" y1="262" x2="212.5" y2="267"/><line x1="307.5" y1="262" x2="307.5" y2="267"/><line x1="402.5" y1="262" x2="402.5" y2="267"/><line x1="497.5" y1="262" x2="497.5" y2="267"/></g><polyline points="117.5,194.5 212.5,194.5 307.5,149.5 402.5,127 497.5,82" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="117.5" cy="194.5" r="5.5" fill="var(--vurgu)"/><circle cx="212.5" cy="194.5" r="5.5" fill="var(--vurgu)"/><circle cx="307.5" cy="149.5" r="5.5" fill="var(--vurgu)"/><circle cx="402.5" cy="127" r="5.5" fill="var(--vurgu)"/><circle cx="497.5" cy="82" r="5.5" fill="var(--vurgu)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="117.5" y="282">1. hafta</text><text x="212.5" y="282">2. hafta</text><text x="307.5" y="282">3. hafta</text><text x="402.5" y="282">4. hafta</text><text x="497.5" y="282">5. hafta</text></g></svg>`,
  secenekler: ["1. ile 2. hafta arasında","2. ile 3. hafta arasında","3. ile 4. hafta arasında","4. ile 5. hafta arasında"],
  dogru: 0,
  hatalar: [
    null,
    "Bu aralıkta çizgi yukarı çıkar: boy 6 cm'den 10 cm'ye çıkmıştır. Değişmeme, çizginin yatay olmasıdır.",
    "Bu aralıkta çizgi yukarı çıkar: boy 10 cm'den 12 cm'ye çıkmıştır. Değişmeme, çizginin yatay olmasıdır.",
    "Bu aralıkta çizgi yukarı çıkar: boy 12 cm'den 16 cm'ye çıkmıştır. Değişmeme, çizginin yatay olmasıdır."
  ],
  aciklama: `Çizgi grafiğinde yukarı çıkan parça artışı, aşağı inen parça azalışı, yatay parça ise değerin değişmediğini gösterir.
Adım 1: Noktaları oku: 1. hafta 6 cm, 2. hafta 6 cm, 3. hafta 10 cm, 4. hafta 12 cm, 5. hafta 16 cm.
Adım 2: Aralıkları karşılaştır: 6 → 6 değişmemiş, 6 → 10 artış, 10 → 12 artış, 12 → 16 artış.
Adım 3: Boyun değişmediği tek aralık 1. ile 2. hafta arasıdır.
Sağlama: Bu aralıkta çizgi, 6 cm çizgisi boyunca yatay uzanır.
Sık yapılan hata: Değişmeyen aralığı çizginin en alçak ya da en uzun parçası sanmak. Değişmeme, yalnızca iki ucun değerinin eşit olmasıdır.
Cevap A.`
},
{
  id: "mat-va-144",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Bir sınıftaki 36 öğrencinin en sevdiği renk aşağıdaki sütun grafiğinde verilmiştir. Her öğrenci tek bir renk söylemiştir. Bu veriler daire grafiğiyle gösterilecektir.
**Buna göre yeşil rengi gösteren dilimin merkez açısı kaç derece olmalıdır?**`,
  gorsel: "<svg viewBox=\"0 0 560 312\" role=\"img\" aria-label=\"Sütun grafiği: kırmızı 6, mavi 8, yeşil 12, sarı 10 öğrenci\"><rect x=\"101.38\" y=\"172\" width=\"56\" height=\"90\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"220.13\" y=\"142\" width=\"56\" height=\"120\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"338.88\" y=\"82\" width=\"56\" height=\"180\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"457.63\" y=\"112\" width=\"56\" height=\"150\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Öğrencilerin en sevdiği renk</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Öğrenci sayısı</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"232\" x2=\"545\" y2=\"232\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"202\" x2=\"545\" y2=\"202\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"172\" x2=\"545\" y2=\"172\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"142\" x2=\"545\" y2=\"142\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"112\" x2=\"545\" y2=\"112\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"237\">2</text><text x=\"62\" y=\"207\">4</text><text x=\"62\" y=\"177\">6</text><text x=\"62\" y=\"147\">8</text><text x=\"62\" y=\"117\">10</text><text x=\"62\" y=\"87\">12</text></g><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"129.38\" y=\"282\">Kırmızı</text><text x=\"248.13\" y=\"282\">Mavi</text><text x=\"366.88\" y=\"282\">Yeşil</text><text x=\"485.63\" y=\"282\">Sarı</text></g><text x=\"307.5\" y=\"304\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">Renk</text></svg>",
  secenekler: ["12","60","100","120"],
  dogru: 3,
  hatalar: [
    "Yeşil sütununun değerini (12) açı olarak yazdın. Sayıyı açıya çevirmek için bir öğrencinin açısıyla (10°) çarpmalısın.",
    "Kırmızı sütununun açısını buldun: 6 · 10° = 60°.",
    "Sarı sütununun açısını buldun: 10 · 10° = 100°.",
    null
  ],
  aciklama: `Sütun grafiğini daire grafiğine çevirirken önce toplam bulunur; 360° toplama bölünerek bir öğrencinin açısı elde edilir.
Adım 1: Toplam öğrenci: 6 + 8 + 12 + 10 = 36. Bir öğrenciye 360° : 36 = 10° düşer.
Adım 2: Yeşil sütunu 12 öğrenciyi gösterir: 12 · 10° = 120°.
Sağlama: Dört dilimin açıları 60° + 80° + 120° + 100° = 360°'dir.
Sık yapılan hata: Sütunun değerini açı sanmak. 12 öğrenci, 12° değil 120° eder.
Cevap D.`
},
{
  id: "mat-va-145",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Bir yüzücünün üç gün boyunca yüzdüğü mesafeler aşağıdaki sütun grafiğinde verilmiştir.
**Buna göre yüzücünün çarşamba günü yüzdüğü mesafe, pazartesi günü yüzdüğü mesafenin kaç katıdır?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"Sütun grafiği: pazartesi 400, salı 600, çarşamba 1 200 metre\"><rect x=\"121.17\" y=\"210.57\" width=\"56\" height=\"51.43\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"279.5\" y=\"184.86\" width=\"56\" height=\"77.14\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"437.83\" y=\"107.71\" width=\"56\" height=\"154.29\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Yüzücünün günlük yüzdüğü mesafe</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Mesafe (m)</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"236.29\" x2=\"545\" y2=\"236.29\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"210.57\" x2=\"545\" y2=\"210.57\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"184.86\" x2=\"545\" y2=\"184.86\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"159.14\" x2=\"545\" y2=\"159.14\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"133.43\" x2=\"545\" y2=\"133.43\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"107.71\" x2=\"545\" y2=\"107.71\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"241.29\">200</text><text x=\"62\" y=\"215.57\">400</text><text x=\"62\" y=\"189.86\">600</text><text x=\"62\" y=\"164.14\">800</text><text x=\"62\" y=\"138.43\">1 000</text><text x=\"62\" y=\"112.71\">1 200</text><text x=\"62\" y=\"87\">1 400</text></g><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"149.17\" y=\"282\">Pazartesi</text><text x=\"307.5\" y=\"282\">Salı</text><text x=\"465.83\" y=\"282\">Çarşamba</text></g></svg>",
  secenekler: ["1,5","2","3","4"],
  dogru: 2,
  hatalar: [
    "Salı gününü pazartesiyle karşılaştırdın (600 : 400 = 1,5). Soru çarşamba gününü soruyor.",
    "Çarşamba gününü pazartesiyle değil salıyla karşılaştırdın (1 200 : 600 = 2).",
    null,
    "İki günün toplamını (1 200 + 400 = 1 600) pazartesiye böldün. Kat bulmak için yalnızca çarşambayı pazartesiye bölmelisin."
  ],
  aciklama: `Bir sayının diğerinin kaç katı olduğu bölmeyle bulunur: kat = büyük sayı : küçük sayı. Hangi sayının hangisine bölüneceği kökte yazar.
Adım 1: Dikey eksen 200'er 200'er artıyor. Pazartesi 400 m, salı 600 m, çarşamba 1 200 m yüzülmüştür.
Adım 2: Çarşamba, pazartesinin kaç katı? 1 200 : 400 = 3.
Sağlama: 3 · 400 = 1 200.
Sık yapılan hata: Yanlış iki günü karşılaştırmak ya da bölmeden önce değerleri toplamak. "Kaç katı" yalnızca iki değerin bölünmesini ister.
Cevap C.`
},
{
  id: "mat-va-146",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Bir müzik platformunda dinleyicilere en çok dinledikleri tür sorulmuş, sonuçlar aşağıdaki daire grafiğinde yüzde olarak verilmiştir. Her dinleyici tek bir tür söylemiştir.
**Buna göre rock ve klasik müzik dinleyenler, dinleyicilerin toplam yüzde kaçıdır?**`,
  gorsel: `<svg viewBox="0 0 560 350" role="img" aria-label="Daire grafiği: pop yüzde 35, rock yüzde 25, klasik yüzde 15, halk yüzde 25"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Dinleyicilerin en çok dinlediği tür</text><path d="M280 190 L280 90 A100 100 0 0 1 360.9 248.78 Z" fill="var(--vurgu)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><path d="M280 190 L360.9 248.78 A100 100 0 0 1 221.22 270.9 Z" fill="var(--vurgu2)" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/><path d="M280 190 L221.22 270.9 A100 100 0 0 1 180 190 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M280 190 L180 190 A100 100 0 0 1 280 90 Z" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><g font-size="14" fill="currentColor"><text x="383.79" y="137.15" text-anchor="start" font-weight="bold">Pop</text><text x="383.79" y="154.15" text-anchor="start">%35</text><text x="297.52" y="313.62" text-anchor="middle" font-weight="bold">Rock</text><text x="297.52" y="330.62" text-anchor="middle">%25</text><text x="176.21" y="238.85" text-anchor="end" font-weight="bold">Klasik</text><text x="176.21" y="255.85" text-anchor="end">%15</text><text x="196.8" y="89.8" text-anchor="end" font-weight="bold">Halk</text><text x="196.8" y="106.8" text-anchor="end">%25</text></g></svg>`,
  secenekler: ["40","50","60","75"],
  dogru: 0,
  hatalar: [
    null,
    "Rock ile halk müziğini topladın (25 + 25). Klasik müzik dilimi %15'tir.",
    "Pop ile rock dilimlerini topladın (35 + 25). Soru rock ile klasik müziği soruyor.",
    "Üç dilimi topladın (35 + 25 + 15). Soru yalnızca iki türü soruyor."
  ],
  aciklama: `Daire grafiğinde birden fazla dilimin toplam payı, o dilimlerin yüzdeleri toplanarak bulunur.
Adım 1: Rock diliminin payı %25, klasik müzik diliminin payı %15'tir.
Adım 2: Toplam pay: 25 + 15 = 40. Yani %40.
Sağlama: Dört dilimin toplamı 35 + 25 + 15 + 25 = 100'dür; rock ve klasik dışında kalanlar 35 + 25 = %60'tır. 40 + 60 = 100.
Sık yapılan hata: İstenmeyen bir dilimi de toplamaya katmak. Önce hangi dilimlerin istendiğini yaz, sonra topla.
Cevap A.`
},
{
  id: "mat-va-147",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Bir şehirde K ve L duraklarından binen yolcu sayıları dört farklı saatte ölçülmüş ve aşağıdaki çizgi grafiğinde gösterilmiştir.
**Buna göre saat 20.00'de L durağından binen yolcu sayısı kaçtır?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"İki veri gruplu çizgi grafiği: K ve L duraklarından saat 08.00, 12.00, 16.00 ve 20.00'de binen yolcular\"><rect x=\"124.38\" y=\"154.14\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"243.13\" y=\"205.57\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"361.88\" y=\"179.86\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"480.63\" y=\"102.71\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Duraklardan binen yolcu sayısı</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Yolcu sayısı</text><line x1=\"351.8\" y1=\"49\" x2=\"371.8\" y2=\"49\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"361.8\" cy=\"49\" r=\"5.5\" fill=\"var(--vurgu)\"/><text x=\"377.8\" y=\"54\" font-size=\"14\" fill=\"currentColor\">K durağı</text><line x1=\"457.4\" y1=\"49\" x2=\"477.4\" y2=\"49\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-dasharray=\"9 5\"/><rect x=\"462.4\" y=\"44\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><text x=\"483.4\" y=\"54\" font-size=\"14\" fill=\"currentColor\">L durağı</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"236.29\" x2=\"545\" y2=\"236.29\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"210.57\" x2=\"545\" y2=\"210.57\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"184.86\" x2=\"545\" y2=\"184.86\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"159.14\" x2=\"545\" y2=\"159.14\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"133.43\" x2=\"545\" y2=\"133.43\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"107.71\" x2=\"545\" y2=\"107.71\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"241.29\">50</text><text x=\"62\" y=\"215.57\">100</text><text x=\"62\" y=\"189.86\">150</text><text x=\"62\" y=\"164.14\">200</text><text x=\"62\" y=\"138.43\">250</text><text x=\"62\" y=\"112.71\">300</text><text x=\"62\" y=\"87\">350</text></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"129.38\" y1=\"262\" x2=\"129.38\" y2=\"267\"/><line x1=\"248.13\" y1=\"262\" x2=\"248.13\" y2=\"267\"/><line x1=\"366.88\" y1=\"262\" x2=\"366.88\" y2=\"267\"/><line x1=\"485.63\" y1=\"262\" x2=\"485.63\" y2=\"267\"/></g><polyline points=\"129.38,210.57 248.13,184.86 366.88,133.43 485.63,159.14\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polyline points=\"129.38,159.14 248.13,210.57 366.88,184.86 485.63,107.71\" fill=\"none\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-dasharray=\"9 5\"/><circle cx=\"129.38\" cy=\"210.57\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"248.13\" cy=\"184.86\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"366.88\" cy=\"133.43\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"485.63\" cy=\"159.14\" r=\"5.5\" fill=\"var(--vurgu)\"/><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"129.38\" y=\"282\">08.00</text><text x=\"248.13\" y=\"282\">12.00</text><text x=\"366.88\" y=\"282\">16.00</text><text x=\"485.63\" y=\"282\">20.00</text></g></svg>",
  secenekler: ["150","200","250","300"],
  dogru: 3,
  hatalar: [
    "L durağının 16.00'daki değerini okudun. Soru 20.00 saatini soruyor.",
    "K durağının 20.00'deki değerini okudun. Soru L durağını soruyor.",
    "K durağının en yüksek noktasını (16.00'da 250) okudun. Soru L durağının 20.00'deki değerini soruyor.",
    null
  ],
  aciklama: `İki gruplu çizgi grafiğinde her çizginin işaret biçimi farklıdır; hangi çizginin hangi durağa ait olduğunu lejant söyler.
Adım 1: Lejanta göre kesikli çizgi ve kare işaretler L durağını gösterir.
Adım 2: Yatay eksende 20.00'yi bul ve kesikli çizginin o noktadaki yüksekliğini dikey eksende oku: 300 yolcu.
Sağlama: 20.00'de K durağı 200, L durağı 300 yolcuyu gösterir; sorulan L durağıdır.
Sık yapılan hata: Yanlış çizgiyi ya da yanlış saati okumak. Önce saati, sonra doğru çizgiyi seç.
Cevap D.`
},
{
  id: "mat-va-148",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 1,
  soru: `Bir okulun yönetimi, son sekiz yılda okulun öğrenci sayısının nasıl değiştiğini göstermek için bir gösterim hazırlayacaktır.
**Buna göre aşağıdaki gösterimlerden hangisi bu amaç için en az uygundur?**`,
  gorsel: null,
  secenekler: ["Çizgi grafiği","Sütun grafiği","Daire grafiği","Tablo"],
  dogru: 2,
  hatalar: [
    "Çizgi grafiği zamanla değişimi en iyi gösteren gösterimdir. Soru en az uygun olanı soruyor.",
    "Yılların sütunları yan yana konup karşılaştırılabilir; sütun grafiği değişimi gösterebilir.",
    null,
    "Tablo her yılın öğrenci sayısını kesin olarak verir; değişim bu sayılardan okunabilir."
  ],
  aciklama: `Daire grafiği bir bütünün parçalarını gösterir; zamanla değişimi göstermek için tasarlanmamıştır.
Adım 1: Amaç, öğrenci sayısının yıldan yıla nasıl değiştiğini göstermektir.
Adım 2: Çizgi grafiği değişimi en iyi gösterir; sütun grafiği ve tablo da yılları yan yana vererek değişimin okunmasını sağlar.
Adım 3: Yıllara göre öğrenci sayıları toplanınca anlamlı bir bütün oluşmaz (aynı öğrenciler her yıl yeniden sayılır). Bu yüzden daire grafiği bu amaca en az uygundur.
Sık yapılan hata: Soru kökündeki "en az" sözcüğünü atlayıp en uygun gösterimi seçmek. Kökü dikkatle oku.
Cevap C.`
},
{
  id: "mat-va-149",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: `Dört köyün nüfusları aşağıdaki sütun grafiğinde verilmiştir.
**Buna göre Çınarlı köyünün nüfusu kaçtır?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"Sütun grafiği: Akpınar 150, Çınarlı 250, Gökçeler 350, Dereköy 100 kişi\"><rect x=\"101.38\" y=\"194.5\" width=\"56\" height=\"67.5\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"220.13\" y=\"149.5\" width=\"56\" height=\"112.5\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"338.88\" y=\"104.5\" width=\"56\" height=\"157.5\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"457.63\" y=\"217\" width=\"56\" height=\"45\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Köylerin nüfusu</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Nüfus (kişi)</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"239.5\" x2=\"545\" y2=\"239.5\" stroke-opacity=\"0.15\"/><line x1=\"70\" y1=\"217\" x2=\"545\" y2=\"217\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"194.5\" x2=\"545\" y2=\"194.5\" stroke-opacity=\"0.15\"/><line x1=\"70\" y1=\"172\" x2=\"545\" y2=\"172\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"149.5\" x2=\"545\" y2=\"149.5\" stroke-opacity=\"0.15\"/><line x1=\"70\" y1=\"127\" x2=\"545\" y2=\"127\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"104.5\" x2=\"545\" y2=\"104.5\" stroke-opacity=\"0.15\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"222\">100</text><text x=\"62\" y=\"177\">200</text><text x=\"62\" y=\"132\">300</text><text x=\"62\" y=\"87\">400</text></g><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"129.38\" y=\"282\">Akpınar</text><text x=\"248.13\" y=\"282\">Çınarlı</text><text x=\"366.88\" y=\"282\">Gökçeler</text><text x=\"485.63\" y=\"282\">Dereköy</text></g></svg>",
  secenekler: ["200","250","300","350"],
  dogru: 1,
  hatalar: [
    "Etiketsiz ara çizgiyi alttaki etikete (200) yuvarladın. Ara çizgi iki etiketin tam ortasıdır.",
    null,
    "Etiketsiz ara çizgiyi üstteki etikete (300) yuvarladın. Ara çizgi iki etiketin tam ortasıdır.",
    "Gökçeler köyünün sütununu okudun. Soru Çınarlı köyünü soruyor."
  ],
  aciklama: `Dikey eksende her çizginin yanında sayı yazmayabilir. İki etiket arasında tek bir çizgi varsa o çizgi, iki etiketin tam ortasındaki değeri gösterir.
Adım 1: Etiketler 0, 100, 200, 300, 400'dür. Aralarında bir ara çizgi vardır; yani ölçek 50'şer 50'şer artar.
Adım 2: Çınarlı sütununun ucu 200 ile 300 arasındaki ara çizgidedir. Bu çizgi 250'yi gösterir.
Sağlama: 200 + 50 = 250 ve 300 − 50 = 250.
Sık yapılan hata: Ara çizgideki değeri en yakın etikete yuvarlamak. Önce ölçeğin kaçar kaçar arttığını bul.
Cevap B.`
},
{
  id: "mat-va-150",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bir sitedeki A ve B bloklarının ocak–nisan aylarında tükettiği elektrik miktarları aşağıdaki sütun grafiğinde verilmiştir. Site yönetimi, dört ayın sonunda hangi bloğun toplam tüketiminin daha fazla olduğunu ve aradaki farkı öğrenmek istemektedir.
**Buna göre bu dört ayda B bloğu, A bloğundan toplam kaç kWh fazla elektrik tüketmiştir?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"İki veri gruplu sütun grafiği: A ve B bloklarının ocak, şubat, mart ve nisan ayı elektrik tüketimi\"><rect x=\"81.88\" y=\"190\" width=\"47.5\" height=\"72\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"129.38\" y=\"154\" width=\"47.5\" height=\"108\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"200.63\" y=\"154\" width=\"47.5\" height=\"108\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"248.13\" y=\"118\" width=\"47.5\" height=\"144\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"319.38\" y=\"118\" width=\"47.5\" height=\"144\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"366.88\" y=\"154\" width=\"47.5\" height=\"108\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"438.13\" y=\"154\" width=\"47.5\" height=\"108\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"485.63\" y=\"118\" width=\"47.5\" height=\"144\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Blokların aylık elektrik tüketimi</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Tüketim (kWh)</text><rect x=\"375.2\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"397.2\" y=\"54\" font-size=\"14\" fill=\"currentColor\">A bloğu</text><rect x=\"469.1\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"491.1\" y=\"54\" font-size=\"14\" fill=\"currentColor\">B bloğu</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"226\" x2=\"545\" y2=\"226\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"190\" x2=\"545\" y2=\"190\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"154\" x2=\"545\" y2=\"154\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"118\" x2=\"545\" y2=\"118\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"231\">50</text><text x=\"62\" y=\"195\">100</text><text x=\"62\" y=\"159\">150</text><text x=\"62\" y=\"123\">200</text><text x=\"62\" y=\"87\">250</text></g><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"129.38\" y=\"282\">Ocak</text><text x=\"248.13\" y=\"282\">Şubat</text><text x=\"366.88\" y=\"282\">Mart</text><text x=\"485.63\" y=\"282\">Nisan</text></g></svg>",
  secenekler: ["50","100","150","200"],
  dogru: 1,
  hatalar: [
    "Yalnızca tek bir ayın farkını (50 kWh) buldun. Soru dört ayın toplam farkını soruyor.",
    null,
    "B bloğunun önde olduğu ayların farklarını topladın (3 · 50) ve mart ayında A bloğunun önde olduğunu yok saydın.",
    "Farkları yönlerine bakmadan topladın (4 · 50). Mart ayında A bloğu önde olduğu için o ayın farkı çıkarılmalıdır."
  ],
  aciklama: `Toplam farkı bulmanın en güvenli yolu, her grubun toplamını ayrı ayrı bulup çıkarmaktır.
Adım 1: A bloğu: 100 + 150 + 200 + 150 = 600 kWh.
Adım 2: B bloğu: 150 + 200 + 150 + 200 = 700 kWh.
Adım 3: Fark: 700 − 600 = 100 kWh.
Sağlama: Ay ay farklar (B − A): +50, +50, −50, +50. Toplam: 50 + 50 − 50 + 50 = 100.
Sık yapılan hata: Mart ayında A'nın B'den fazla olduğunu unutup farkları hep aynı yönde toplamak.
Cevap B.`
},
{
  id: "mat-va-151",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bir turizm şirketi, tatil bölgesi seçen 72 müşterisinin tercihlerini aşağıdaki daire grafiğiyle göstermiştir. Her müşteri tek bir bölge seçmiştir.
**Buna göre Akdeniz'i seçenler, Karadeniz'i seçenlerden kaç kişi fazladır?**`,
  gorsel: `<svg viewBox="0 0 560 350" role="img" aria-label="Daire grafiği: Ege 100 derece, Akdeniz 130 derece, Karadeniz 70 derece, İç Anadolu 60 derece"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Müşterilerin tatil bölgesi tercihi</text><path d="M280 190 L280 90 A100 100 0 0 1 378.48 207.36 Z" fill="var(--vurgu)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><path d="M280 190 L378.48 207.36 A100 100 0 0 1 203.4 254.28 Z" fill="var(--vurgu2)" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/><path d="M280 190 L203.4 254.28 A100 100 0 0 1 193.4 140 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M280 190 L193.4 140 A100 100 0 0 1 280 90 Z" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><g font-size="14" fill="currentColor"><text x="369.8" y="97.01" text-anchor="start" font-weight="bold">Ege</text><text x="369.8" y="114.01" text-anchor="start">100°</text><text x="312.99" y="311.18" text-anchor="start" font-weight="bold">Akdeniz</text><text x="312.99" y="328.18" text-anchor="start">130°</text><text x="164.43" y="197.76" text-anchor="end" font-weight="bold">Karadeniz</text><text x="164.43" y="214.76" text-anchor="end">70°</text><text x="220" y="72.01" text-anchor="end" font-weight="bold">İç Anadolu</text><text x="220" y="89.01" text-anchor="end">60°</text></g></svg>`,
  secenekler: ["6","8","12","60"],
  dogru: 2,
  hatalar: [
    "Bir kişiye 10° düştüğünü sandın (60 : 10 = 6). 72 kişi için bir kişiye 360° : 72 = 5° düşer.",
    "Ege ile İç Anadolu arasındaki farkı buldun ((100° − 60°) : 5° = 8). Soru Akdeniz ile Karadeniz'i karşılaştırıyor.",
    null,
    "Açıların farkını (130° − 70° = 60°) kişi sayısı sandın. Açıyı kişi sayısına çevirmen gerekir."
  ],
  aciklama: `Daire grafiğinde toplam kişi sayısı bilindiğinde 360°, kişiler arasında eşit paylaşılır. Bir kişiye düşen açı bulunursa her açı kişi sayısına çevrilebilir.
Adım 1: 72 kişi 360°'yi paylaşır; bir kişiye 360° : 72 = 5° düşer.
Adım 2: Akdeniz 130° : 5° = 26 kişi, Karadeniz 70° : 5° = 14 kişidir.
Adım 3: Fark: 26 − 14 = 12 kişi.
Sağlama: Açı farkı 130° − 70° = 60°'dir; 60° : 5° = 12 kişi.
Sık yapılan hata: Açıyı doğrudan kişi sayısı sanmak. Önce bir kişiye düşen açıyı bul, sonra açıları kişi sayısına çevir.
Cevap C.`
},
{
  id: "mat-va-152",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Doğu ve Batı barajlarındaki su miktarı altı ay boyunca her ayın ilk günü ölçülmüş ve aşağıdaki çizgi grafiğinde gösterilmiştir.
**Buna göre kaç ayda Doğu barajındaki su miktarı, Batı barajındakinden daha fazladır?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"İki veri gruplu çizgi grafiği: Doğu ve Batı barajlarının ocaktan hazirana su miktarı\"><rect x=\"104.58\" y=\"179.86\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"183.75\" y=\"179.86\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"262.92\" y=\"128.43\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"342.08\" y=\"154.14\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"421.25\" y=\"128.43\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"500.42\" y=\"128.43\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Barajlardaki su miktarı</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Su miktarı (milyon m³)</text><line x1=\"305.6\" y1=\"49\" x2=\"325.6\" y2=\"49\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"315.6\" cy=\"49\" r=\"5.5\" fill=\"var(--vurgu)\"/><text x=\"331.6\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Doğu barajı</text><line x1=\"434.3\" y1=\"49\" x2=\"454.3\" y2=\"49\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-dasharray=\"9 5\"/><rect x=\"439.3\" y=\"44\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><text x=\"460.3\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Batı barajı</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"236.29\" x2=\"545\" y2=\"236.29\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"210.57\" x2=\"545\" y2=\"210.57\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"184.86\" x2=\"545\" y2=\"184.86\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"159.14\" x2=\"545\" y2=\"159.14\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"133.43\" x2=\"545\" y2=\"133.43\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"107.71\" x2=\"545\" y2=\"107.71\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"241.29\">10</text><text x=\"62\" y=\"215.57\">20</text><text x=\"62\" y=\"189.86\">30</text><text x=\"62\" y=\"164.14\">40</text><text x=\"62\" y=\"138.43\">50</text><text x=\"62\" y=\"112.71\">60</text><text x=\"62\" y=\"87\">70</text></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"109.58\" y1=\"262\" x2=\"109.58\" y2=\"267\"/><line x1=\"188.75\" y1=\"262\" x2=\"188.75\" y2=\"267\"/><line x1=\"267.92\" y1=\"262\" x2=\"267.92\" y2=\"267\"/><line x1=\"347.08\" y1=\"262\" x2=\"347.08\" y2=\"267\"/><line x1=\"426.25\" y1=\"262\" x2=\"426.25\" y2=\"267\"/><line x1=\"505.42\" y1=\"262\" x2=\"505.42\" y2=\"267\"/></g><polyline points=\"109.58,210.57 188.75,184.86 267.92,159.14 347.08,184.86 426.25,159.14 505.42,107.71\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polyline points=\"109.58,184.86 188.75,184.86 267.92,133.43 347.08,159.14 426.25,133.43 505.42,133.43\" fill=\"none\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-dasharray=\"9 5\"/><circle cx=\"109.58\" cy=\"210.57\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"188.75\" cy=\"184.86\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"267.92\" cy=\"159.14\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"347.08\" cy=\"184.86\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"426.25\" cy=\"159.14\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"505.42\" cy=\"107.71\" r=\"5.5\" fill=\"var(--vurgu)\"/><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"109.58\" y=\"282\">Ocak</text><text x=\"188.75\" y=\"282\">Şubat</text><text x=\"267.92\" y=\"282\">Mart</text><text x=\"347.08\" y=\"282\">Nisan</text><text x=\"426.25\" y=\"282\">Mayıs</text><text x=\"505.42\" y=\"282\">Haziran</text></g></svg>",
  secenekler: ["1","2","4","5"],
  dogru: 0,
  hatalar: [
    null,
    "Çizgilerin kesiştiği, yani iki barajda su miktarının eşit olduğu ayı da saydın. Eşit olmak \"daha fazla\" demek değildir.",
    "Çizgileri ters okudun. Batı barajının daha fazla olduğu ayları saydın (ocak, mart, nisan, mayıs).",
    "Batı barajının daha fazla olduğu ayları ve eşit olan ayı birlikte saydın."
  ],
  aciklama: `İki çizgiyi karşılaştırırken her ölçüm noktasında hangi çizginin daha yukarıda olduğuna bakılır. İki çizgi bir noktada kesişiyorsa o noktada değerler eşittir.
Adım 1: Lejanta göre düz çizgi Doğu barajını, kesikli çizgi Batı barajını gösterir.
Adım 2: Ay ay karşılaştır (Doğu - Batı): ocak 20 - 30, şubat 30 - 30, mart 40 - 50, nisan 30 - 40, mayıs 40 - 50, haziran 60 - 50.
Adım 3: Doğu'nun daha fazla olduğu tek ay haziran'dır. Şubat ayında değerler eşittir.
Sağlama: Doğu çizgisi yalnızca haziran noktasında Batı çizgisinin üstündedir.
Sık yapılan hata: Eşit olan ayı "fazla" saymak ya da çizgilerin hangisinin hangi baraj olduğunu karıştırmak.
Cevap A.`
},
{
  id: "mat-va-153",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bir sınıf kitaplığındaki 60 kitabın türlere göre sayısı aşağıdaki sütun grafiğinde verilmiştir. Bu veriler daire grafiğiyle gösterilecektir.
**Buna göre en çok bulunan kitap türünü gösteren dilimin merkez açısı ile en az bulunan kitap türünü gösteren dilimin merkez açısı arasındaki fark kaç derece olacaktır?**`,
  gorsel: "<svg viewBox=\"0 0 560 312\" role=\"img\" aria-label=\"Sütun grafiği: roman 24, öykü 18, şiir 6, deneme 12 kitap\"><rect x=\"101.38\" y=\"82\" width=\"56\" height=\"180\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"220.13\" y=\"127\" width=\"56\" height=\"135\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"338.88\" y=\"217\" width=\"56\" height=\"45\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"457.63\" y=\"172\" width=\"56\" height=\"90\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Sınıf kitaplığındaki kitap türleri</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Kitap sayısı</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"217\" x2=\"545\" y2=\"217\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"172\" x2=\"545\" y2=\"172\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"127\" x2=\"545\" y2=\"127\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"222\">6</text><text x=\"62\" y=\"177\">12</text><text x=\"62\" y=\"132\">18</text><text x=\"62\" y=\"87\">24</text></g><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"129.38\" y=\"282\">Roman</text><text x=\"248.13\" y=\"282\">Öykü</text><text x=\"366.88\" y=\"282\">Şiir</text><text x=\"485.63\" y=\"282\">Deneme</text></g><text x=\"307.5\" y=\"304\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">Tür</text></svg>",
  secenekler: ["18","36","72","108"],
  dogru: 3,
  hatalar: [
    "Kitap sayılarının farkını (24 − 6 = 18) derece sandın. Her kitap 6°'dir; farkı 6 ile çarpmalısın.",
    "Yalnızca en az bulunan türün açısını buldun (6 · 6° = 36°). Soru iki dilimin açı farkını soruyor.",
    "En çok bulunan türü değil, ikinci en çok bulunan türü (18 kitap) en azla karşılaştırdın: (18 − 6) · 6° = 72°.",
    null
  ],
  aciklama: `Bir daire grafiğinde dilimlerin açıları, kitap sayılarıyla doğru orantılıdır. Önce bir kitaba düşen açı bulunur.
Adım 1: Dikey eksen 6'şar 6'şar artıyor. Roman 24, öykü 18, şiir 6, deneme 12 kitaptır. Toplam 60 kitap.
Adım 2: Bir kitaba 360° : 60 = 6° düşer.
Adım 3: En çok roman (24 · 6° = 144°), en az şiir (6 · 6° = 36°). Fark: 144° − 36° = 108°.
Sağlama: Kitap sayısı farkı 24 − 6 = 18'dir; 18 · 6° = 108°.
Sık yapılan hata: Sayı farkını açı farkı sanmak. Sayıları açıya çevirmek için bir kitabın açısıyla çarp.
Cevap D.`
},
{
  id: "mat-va-154",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Ayşe, elektrikli scooter'ının pil yüzdesini yola çıktığı andan başlayarak her saat sonunda kaydetmiş ve aşağıdaki çizgi grafiğini çizmiştir.
**Buna göre scooter'ın pil yüzdesi dört saatte toplam kaç puan azalmıştır?**`,
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Çizgi grafiği: başlangıçta 100, sonraki dört saatte 80, 60, 50 ve 40 yüzde"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Scooter'ın pil yüzdesi</text><text x="10" y="54" font-size="14" fill="currentColor">Pil yüzdesi</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="244" x2="545" y2="244" stroke-opacity="0.35"/><line x1="70" y1="226" x2="545" y2="226" stroke-opacity="0.35"/><line x1="70" y1="208" x2="545" y2="208" stroke-opacity="0.35"/><line x1="70" y1="190" x2="545" y2="190" stroke-opacity="0.35"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.35"/><line x1="70" y1="154" x2="545" y2="154" stroke-opacity="0.35"/><line x1="70" y1="136" x2="545" y2="136" stroke-opacity="0.35"/><line x1="70" y1="118" x2="545" y2="118" stroke-opacity="0.35"/><line x1="70" y1="100" x2="545" y2="100" stroke-opacity="0.35"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="249">10</text><text x="62" y="231">20</text><text x="62" y="213">30</text><text x="62" y="195">40</text><text x="62" y="177">50</text><text x="62" y="159">60</text><text x="62" y="141">70</text><text x="62" y="123">80</text><text x="62" y="105">90</text><text x="62" y="87">100</text></g><g stroke="currentColor" stroke-width="2"><line x1="117.5" y1="262" x2="117.5" y2="267"/><line x1="212.5" y1="262" x2="212.5" y2="267"/><line x1="307.5" y1="262" x2="307.5" y2="267"/><line x1="402.5" y1="262" x2="402.5" y2="267"/><line x1="497.5" y1="262" x2="497.5" y2="267"/></g><polyline points="117.5,82 212.5,118 307.5,154 402.5,172 497.5,190" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="117.5" cy="82" r="5.5" fill="var(--vurgu)"/><circle cx="212.5" cy="118" r="5.5" fill="var(--vurgu)"/><circle cx="307.5" cy="154" r="5.5" fill="var(--vurgu)"/><circle cx="402.5" cy="172" r="5.5" fill="var(--vurgu)"/><circle cx="497.5" cy="190" r="5.5" fill="var(--vurgu)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="117.5" y="282">Başlangıç</text><text x="212.5" y="282">1. saat</text><text x="307.5" y="282">2. saat</text><text x="402.5" y="282">3. saat</text><text x="497.5" y="282">4. saat</text></g></svg>`,
  secenekler: ["15","20","40","60"],
  dogru: 3,
  hatalar: [
    "Saatlik ortalama azalmayı (60 : 4 = 15) buldun. Soru dört saatteki toplam azalmayı soruyor.",
    "Yalnızca ilk saattaki azalmayı (100 − 80) buldun.",
    "4. saat sonundaki pil yüzdesini (40) azalma miktarı sandın. Azalma, başlangıç değeriyle son değerin farkıdır.",
    null
  ],
  aciklama: `Çizgi grafiğinde bir değişimin toplamı, ilk değer ile son değerin farkıdır. Azalmada fark: ilk değer − son değer.
Adım 1: Başlangıçta pil %100'dür, 4. saat sonunda %40'tır.
Adım 2: Toplam azalma: 100 − 40 = 60 puan.
Sağlama: Saatlik azalmalar 20, 20, 10, 10'dur. 20 + 20 + 10 + 10 = 60.
Sık yapılan hata: Son değeri (40) azalma sanmak. 40, kalan pil miktarıdır; azalan miktar 60'tır.
Cevap D.`
},
{
  id: "mat-va-155",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bir spor salonundaki üyelerin kayıtlı olduğu sporlara göre sayısı aşağıdaki tabloda verilmiştir. Salon sorumlusu bu verileri sütun grafiğiyle göstermiş; ancak çizdiği grafikte yalnızca bir sütun tabloyla uyuşmamaktadır.
**Buna göre tabloyla uyuşmayan sütun hangi spora aittir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Spor</th><th>Üye sayısı</th></tr><tr><td>Yüzme</td><td>30</td></tr><tr><td>Pilates</td><td>20</td></tr><tr><td>Fitness</td><td>50</td></tr><tr><td>Yoga</td><td>40</td></tr></table><svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"Sütun grafiği: yüzme 40, pilates 20, fitness 50, yoga 40 üye\"><rect x=\"101.38\" y=\"142\" width=\"56\" height=\"120\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"220.13\" y=\"202\" width=\"56\" height=\"60\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"338.88\" y=\"112\" width=\"56\" height=\"150\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"457.63\" y=\"142\" width=\"56\" height=\"120\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Sorumlunun çizdiği sütun grafiği</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Üye sayısı</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"232\" x2=\"545\" y2=\"232\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"202\" x2=\"545\" y2=\"202\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"172\" x2=\"545\" y2=\"172\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"142\" x2=\"545\" y2=\"142\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"112\" x2=\"545\" y2=\"112\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"237\">10</text><text x=\"62\" y=\"207\">20</text><text x=\"62\" y=\"177\">30</text><text x=\"62\" y=\"147\">40</text><text x=\"62\" y=\"117\">50</text><text x=\"62\" y=\"87\">60</text></g><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"129.38\" y=\"282\">Yüzme</text><text x=\"248.13\" y=\"282\">Pilates</text><text x=\"366.88\" y=\"282\">Fitness</text><text x=\"485.63\" y=\"282\">Yoga</text></g></svg>",
  secenekler: ["Yüzme","Pilates","Fitness","Yoga"],
  dogru: 0,
  hatalar: [
    null,
    "Pilates sütunu 20 çizgisinde biter ve tablodaki 20 ile uyuşur.",
    "Fitness sütunu 50 çizgisinde biter ve tablodaki 50 ile uyuşur.",
    "Yoga sütunu 40 çizgisinde biter ve tablodaki 40 ile uyuşur."
  ],
  aciklama: `Tablodan grafiğe geçişin doğru olması için her kategorinin sütunu, tablodaki değerin gösterdiği çizgide bitmelidir.
Adım 1: Tablodaki değerler: yüzme 30, pilates 20, fitness 50, yoga 40.
Adım 2: Grafikteki sütunları oku: yüzme 40, pilates 20, fitness 50, yoga 40.
Adım 3: Karşılaştır: pilates, fitness ve yoga uyuşuyor. Yüzmenin sütunu 40'ta bitiyor ama tabloda 30 yazıyor.
Sağlama: Yüzme sütunu 30 çizgisinde bitseydi grafik tabloyla tamamen uyuşurdu.
Sık yapılan hata: Yalnızca en uzun sütunlara bakmak. Her sütunu tabloyla tek tek karşılaştırmak gerekir.
Cevap A.`
},
{
  id: "mat-va-156",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bir şehirde üç otobüs hattının perşembeden pazara kadar taşıdığı yolcu sayıları aşağıdaki sütun grafiğinde verilmiştir.
**Buna göre üç hattın toplam yolcu sayısının en az olduğu gün hangisidir?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"Üç veri gruplu sütun grafiği: üç otobüs hattının perşembe, cuma, cumartesi ve pazar günü taşıdığı yolcular\"><rect x=\"81.88\" y=\"104.5\" width=\"31.67\" height=\"157.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"113.54\" y=\"149.5\" width=\"31.67\" height=\"112.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"145.21\" y=\"127\" width=\"31.67\" height=\"135\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"200.63\" y=\"149.5\" width=\"31.67\" height=\"112.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"232.29\" y=\"172\" width=\"31.67\" height=\"90\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"263.96\" y=\"172\" width=\"31.67\" height=\"90\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"319.38\" y=\"127\" width=\"31.67\" height=\"135\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"351.04\" y=\"127\" width=\"31.67\" height=\"135\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"382.71\" y=\"172\" width=\"31.67\" height=\"90\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"438.13\" y=\"194.5\" width=\"31.67\" height=\"67.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"469.79\" y=\"127\" width=\"31.67\" height=\"135\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"501.46\" y=\"127\" width=\"31.67\" height=\"135\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Hatların günlük yolcu sayısı</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Yolcu (bin)</text><rect x=\"304.4\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"326.4\" y=\"54\" font-size=\"14\" fill=\"currentColor\">1. hat</text><rect x=\"390.6\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"412.6\" y=\"54\" font-size=\"14\" fill=\"currentColor\">2. hat</text><rect x=\"476.8\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"498.8\" y=\"54\" font-size=\"14\" fill=\"currentColor\">3. hat</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"239.5\" x2=\"545\" y2=\"239.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"217\" x2=\"545\" y2=\"217\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"194.5\" x2=\"545\" y2=\"194.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"172\" x2=\"545\" y2=\"172\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"149.5\" x2=\"545\" y2=\"149.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"127\" x2=\"545\" y2=\"127\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"104.5\" x2=\"545\" y2=\"104.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"244.5\">2</text><text x=\"62\" y=\"222\">4</text><text x=\"62\" y=\"199.5\">6</text><text x=\"62\" y=\"177\">8</text><text x=\"62\" y=\"154.5\">10</text><text x=\"62\" y=\"132\">12</text><text x=\"62\" y=\"109.5\">14</text><text x=\"62\" y=\"87\">16</text></g><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"129.38\" y=\"282\">Perşembe</text><text x=\"248.13\" y=\"282\">Cuma</text><text x=\"366.88\" y=\"282\">Cumartesi</text><text x=\"485.63\" y=\"282\">Pazar</text></g></svg>",
  secenekler: ["Perşembe","Cuma","Cumartesi","Pazar"],
  dogru: 1,
  hatalar: [
    "Üç hattın toplamının en çok olduğu günü seçtin (14 + 10 + 12 = 36 bin).",
    null,
    "Her günün en kısa sütununa baktın. Cumartesi günü de bir sütun 8 binde biter ama günün toplamı 12 + 12 + 8 = 32 bindir.",
    "Yalnızca 1. hattın sütunlarına baktın. 1. hattın en kısa sütunu pazar gününde (6 bin) ama üç hattın toplamı 6 + 12 + 12 = 30 bindir."
  ],
  aciklama: `Üç gruplu sütun grafiğinde bir günün toplamı, o günün üç sütununun değerlerinin toplanmasıyla bulunur.
Adım 1: Lejanta göre her grubun soldan sağa sütunları 1., 2. ve 3. hattı gösterir.
Adım 2: Günlük toplamlar: perşembe 14 + 10 + 12 = 36, cuma 10 + 8 + 8 = 26, cumartesi 12 + 12 + 8 = 32, pazar 6 + 12 + 12 = 30 (bin yolcu).
Adım 3: En küçük toplam 26 binle cuma gününe aittir.
Sağlama: Cuma günü hiçbir hattın sütunu 10 binden uzun değildir; diğer günlerde en az bir sütun 12 binden uzundur.
Sık yapılan hata: Toplam yerine tek bir sütuna bakmak. Her gün için üç değeri de toplayıp karşılaştır.
Cevap B.`
},
{
  id: "mat-va-157",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bir tatil köyünün konukları kahvaltıda en çok içtikleri içeceği belirtmiş; sonuçlar aşağıdaki daire grafiğinde gösterilmiştir. Her konuk tek bir içecek söylemiş ve kahveyi seçen konuk sayısı 20'dir.
**Buna göre çayı ve meyve suyunu seçen konukların sayısı toplam kaçtır?**`,
  gorsel: `<svg viewBox="0 0 560 350" role="img" aria-label="Daire grafiği: çay 150 derece, kahve 100 derece, su 70 derece, meyve suyu 40 derece"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Konukların kahvaltıda içtiği içecek</text><path d="M280 190 L280 90 A100 100 0 0 1 330 276.6 Z" fill="var(--vurgu)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><path d="M280 190 L330 276.6 A100 100 0 0 1 186.03 224.2 Z" fill="var(--vurgu2)" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/><path d="M280 190 L186.03 224.2 A100 100 0 0 1 215.72 113.4 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M280 190 L215.72 113.4 A100 100 0 0 1 280 90 Z" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><g font-size="14" fill="currentColor"><text x="392.18" y="159.01" text-anchor="start" font-weight="bold">Çay</text><text x="392.18" y="176.01" text-anchor="start">150°</text><text x="237.69" y="308.25" text-anchor="end" font-weight="bold">Kahve</text><text x="237.69" y="325.25" text-anchor="end">100°</text><text x="167.82" y="159.01" text-anchor="end" font-weight="bold">Su</text><text x="167.82" y="176.01" text-anchor="end">70°</text><text x="237.69" y="63.75" text-anchor="end" font-weight="bold">Meyve suyu</text><text x="237.69" y="80.75" text-anchor="end">40°</text></g></svg>`,
  secenekler: ["22","30","38","190"],
  dogru: 2,
  hatalar: [
    "Su ve meyve suyu dilimlerini topladın (14 + 8). Çay diliminin 30 kişisi toplama katılmadı.",
    "Yalnızca çay diliminin kişi sayısını buldun. Meyve suyu diliminin 8 kişisini de eklemelisin.",
    null,
    "Açıların toplamını (150° + 40°) kişi sayısı sandın. Açıyı kişi sayısına çevirmen gerekir."
  ],
  aciklama: `Toplam kişi sayısı verilmese bile bir dilimin kişi sayısı ve açısı biliniyorsa bir kişiye düşen açı bulunabilir. Bu açı, bütün dilimleri kişi sayısına çevirmeye yeter.
Adım 1: Kahve diliminin açısı 100°'dir ve 20 kişiyi gösterir. Bir kişiye 100° : 20 = 5° düşer.
Adım 2: Çay: 150° : 5° = 30 kişi. Meyve suyu: 40° : 5° = 8 kişi.
Adım 3: Toplam: 30 + 8 = 38 konuk.
Sağlama: Çay ve meyve suyunun açıları toplamı 150° + 40° = 190°'dir; 190° : 5° = 38.
Sık yapılan hata: Açıyı kişi sayısı sanmak. Önce bir kişinin açısını bul, sonra açıları kişiye çevir.
Cevap C.`
},
{
  id: "mat-va-158",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bir ilin Kuzey ve Güney ilçelerinde son dört yılda doğan bebek sayıları aşağıdaki çizgi grafiğinde verilmiştir.
**Buna göre iki ilçede doğan bebek sayıları arasındaki fark hangi yılda en büyüktür?**`,
  gorsel: "<svg viewBox=\"0 0 560 312\" role=\"img\" aria-label=\"İki veri gruplu çizgi grafiği: Kuzey ve Güney ilçelerinde 2021, 2022, 2023 ve 2024 yıllarında doğan bebekler\"><rect x=\"124.38\" y=\"185\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"243.13\" y=\"149\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"361.88\" y=\"113\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"480.63\" y=\"149\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: İlçelerde doğan bebek sayısı</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Bebek sayısı</text><line x1=\"290.2\" y1=\"49\" x2=\"310.2\" y2=\"49\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"300.2\" cy=\"49\" r=\"5.5\" fill=\"var(--vurgu)\"/><text x=\"316.2\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Kuzey ilçesi</text><line x1=\"426.6\" y1=\"49\" x2=\"446.6\" y2=\"49\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-dasharray=\"9 5\"/><rect x=\"431.6\" y=\"44\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><text x=\"452.6\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Güney ilçesi</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"226\" x2=\"545\" y2=\"226\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"190\" x2=\"545\" y2=\"190\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"154\" x2=\"545\" y2=\"154\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"118\" x2=\"545\" y2=\"118\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"231\">20</text><text x=\"62\" y=\"195\">40</text><text x=\"62\" y=\"159\">60</text><text x=\"62\" y=\"123\">80</text><text x=\"62\" y=\"87\">100</text></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"129.38\" y1=\"262\" x2=\"129.38\" y2=\"267\"/><line x1=\"248.13\" y1=\"262\" x2=\"248.13\" y2=\"267\"/><line x1=\"366.88\" y1=\"262\" x2=\"366.88\" y2=\"267\"/><line x1=\"485.63\" y1=\"262\" x2=\"485.63\" y2=\"267\"/></g><polyline points=\"129.38,154 248.13,118 366.88,226 485.63,190\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polyline points=\"129.38,190 248.13,154 366.88,118 485.63,154\" fill=\"none\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-dasharray=\"9 5\"/><circle cx=\"129.38\" cy=\"154\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"248.13\" cy=\"118\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"366.88\" cy=\"226\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"485.63\" cy=\"190\" r=\"5.5\" fill=\"var(--vurgu)\"/><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"129.38\" y=\"282\">2021</text><text x=\"248.13\" y=\"282\">2022</text><text x=\"366.88\" y=\"282\">2023</text><text x=\"485.63\" y=\"282\">2024</text></g><text x=\"307.5\" y=\"304\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">Yıl</text></svg>",
  secenekler: ["2021","2022","2023","2024"],
  dogru: 2,
  hatalar: [
    "İlk yılda iki çizgi arasındaki fark 20'dir (60 − 40). Bu fark en büyük değildir.",
    "Kuzey ilçesinin en yüksek noktasının bulunduğu yılı seçtin (80). O yıl Güney 60 olduğundan fark yalnızca 20'dir.",
    null,
    "Çizgilerin son noktasına baktın. 2024'te fark 60 − 40 = 20'dir."
  ],
  aciklama: `Çizgi grafiğinde iki çizginin arasındaki fark, aynı yıl için iki noktanın dikey eksendeki değerlerinin farkıdır. Çizgiler birbirinden en uzak olduğunda fark en büyüktür.
Adım 1: Yıl yıl farkları hesapla: 2021'de 60 − 40 = 20, 2022'de 80 − 60 = 20, 2023'te 80 − 20 = 60, 2024'te 60 − 40 = 20.
Adım 2: En büyük fark 60'tır ve 2023 yılına aittir.
Sağlama: Grafikte 2023'te Kuzey çizgisi en alçak, Güney çizgisi en yüksek noktadadır; çizgiler birbirinden en uzaktır.
Sık yapılan hata: Bir çizginin en yüksek noktasını seçmek. Fark için iki çizginin aynı yıldaki değerlerine birlikte bakmak gerekir.
Cevap C.`
},
{
  id: "mat-va-159",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bir okul gazetesinin yazı kurulu, topladığı verileri uygun grafiklerle göstermek istemektedir. Kurul üyeleri veriler için aşağıdaki gösterimleri önermiştir.
**Buna göre aşağıdaki eşleştirmelerden hangisinde veri için seçilen gösterim, verinin türüne uygundur?**`,
  gorsel: null,
  secenekler: ["Bir kentte her gün ölçülen sıcaklığın değişimi: daire grafiği","Bir mahallede 80 evin ısınma türüne göre dağılımı: daire grafiği","Beş okulun öğrenci sayılarının karşılaştırılması: çizgi grafiği","Bir şirketin on iki ayda gelirinin değişimi: daire grafiği"],
  dogru: 1,
  hatalar: [
    "Sıcaklık gün gün değişen bir büyüklüktür. Sıcaklıklar toplanınca anlamlı bir bütün oluşmaz; değişim çizgi grafiğiyle gösterilir.",
    null,
    "Okullar arasında bir zaman sırası yoktur. Sırasız kategoriler çizgi grafiğiyle değil sütun grafiğiyle karşılaştırılır.",
    "Gelirin aylara göre değişimi bir bütünün parçaları değildir. Zamanla değişim çizgi grafiğiyle gösterilir."
  ],
  aciklama: `Gösterim seçerken veriye şu soruları sor: Zamanla değişim mi var? Kategoriler mi karşılaştırılıyor? Parçalar toplanınca anlamlı bir bütün oluyor mu?
Adım 1: Sıcaklık ve gelirin değişimi zamanla ilgilidir; bunlar çizgi grafiğine uygundur, daire grafiğine değil.
Adım 2: Beş okulun karşılaştırılması kategori karşılaştırmasıdır; sütun grafiği uygundur, çizgi grafiği değil.
Adım 3: 80 evin ısınma türlerine göre dağılımı, evlerin toplamı olan bir bütünün parçalarını gösterir ve her ev tek bir parçada yer alır. Daire grafiği bu eşleştirmede uygundur.
Sık yapılan hata: Sayı içeren her veriyi daire grafiğine uygun saymak. Önce parçaların bir bütün oluşturup oluşturmadığına bak.
Cevap B.`
},
{
  id: "mat-va-160",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bir okuldaki 7-A ve 7-B sınıflarının ocak–nisan aylarında okuduğu kitap sayıları aşağıdaki sütun grafiğinde verilmiştir. Okul kütüphanecisi, iki sınıfın dört ayda okuduğu toplam kitap sayısını bulmak istemektedir.
**Buna göre bu iki sınıf dört ayda toplam kaç kitap okumuştur?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"İki veri gruplu sütun grafiği: 7-A ve 7-B sınıflarının ocak, şubat, mart ve nisan ayında okuduğu kitaplar\"><rect x=\"81.88\" y=\"172\" width=\"47.5\" height=\"90\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"129.38\" y=\"149.5\" width=\"47.5\" height=\"112.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"200.63\" y=\"149.5\" width=\"47.5\" height=\"112.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"248.13\" y=\"194.5\" width=\"47.5\" height=\"67.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"319.38\" y=\"194.5\" width=\"47.5\" height=\"67.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"366.88\" y=\"172\" width=\"47.5\" height=\"90\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"438.13\" y=\"127\" width=\"47.5\" height=\"135\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"485.63\" y=\"104.5\" width=\"47.5\" height=\"157.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Sınıfların okuduğu kitap sayısı</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Kitap sayısı</text><rect x=\"436.8\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"458.8\" y=\"54\" font-size=\"14\" fill=\"currentColor\">7-A</text><rect x=\"499.9\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"521.9\" y=\"54\" font-size=\"14\" fill=\"currentColor\">7-B</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"239.5\" x2=\"545\" y2=\"239.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"217\" x2=\"545\" y2=\"217\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"194.5\" x2=\"545\" y2=\"194.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"172\" x2=\"545\" y2=\"172\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"149.5\" x2=\"545\" y2=\"149.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"127\" x2=\"545\" y2=\"127\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"104.5\" x2=\"545\" y2=\"104.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"244.5\">5</text><text x=\"62\" y=\"222\">10</text><text x=\"62\" y=\"199.5\">15</text><text x=\"62\" y=\"177\">20</text><text x=\"62\" y=\"154.5\">25</text><text x=\"62\" y=\"132\">30</text><text x=\"62\" y=\"109.5\">35</text><text x=\"62\" y=\"87\">40</text></g><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"129.38\" y=\"282\">Ocak</text><text x=\"248.13\" y=\"282\">Şubat</text><text x=\"366.88\" y=\"282\">Mart</text><text x=\"485.63\" y=\"282\">Nisan</text></g></svg>",
  secenekler: ["90","95","150","185"],
  dogru: 3,
  hatalar: [
    "Yalnızca 7-A sınıfının dört aylık toplamını buldun (20 + 25 + 15 + 30).",
    "Yalnızca 7-B sınıfının dört aylık toplamını buldun (25 + 15 + 20 + 35).",
    "Mart ayını toplamaya katmadın: 185 − (15 + 20) = 150.",
    null
  ],
  aciklama: `İki grubun toplamı sorulduğunda iki grubun bütün sütunları toplanır. Sütunlar arasında atlama yapılmamalıdır.
Adım 1: 7-A: 20 + 25 + 15 + 30 = 90 kitap.
Adım 2: 7-B: 25 + 15 + 20 + 35 = 95 kitap.
Adım 3: Toplam: 90 + 95 = 185 kitap.
Sağlama: Aylık toplamlar 45, 40, 35 ve 65'tir. 45 + 40 + 35 + 65 = 185.
Sık yapılan hata: Yalnızca tek bir grubu ya da bir ayı toplamaya katmamak. Sekiz sütunun hepsini saydığından emin ol.
Cevap D.`
},
{
  id: "mat-va-161",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bir mandıranın günlük 80 litre sütünün hangi hayvandan elde edildiği aşağıdaki daire grafiğinde yüzde olarak verilmiştir.
**Buna göre koyun sütü ile keçi sütünün toplamı kaç litredir?**`,
  gorsel: `<svg viewBox="0 0 560 350" role="img" aria-label="Daire grafiği: inek yüzde 45, koyun yüzde 30, keçi yüzde 25"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Sütün elde edildiği hayvanlar</text><path d="M280 190 L280 90 A100 100 0 0 1 310.9 285.11 Z" fill="var(--vurgu)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><path d="M280 190 L310.9 285.11 A100 100 0 0 1 180 190 Z" fill="var(--vurgu2)" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/><path d="M280 190 L180 190 A100 100 0 0 1 280 90 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><g font-size="14" fill="currentColor"><text x="394.62" y="170.48" text-anchor="start" font-weight="bold">İnek</text><text x="394.62" y="187.48" text-anchor="start">%45</text><text x="210.17" y="293.61" text-anchor="end" font-weight="bold">Koyun</text><text x="210.17" y="310.61" text-anchor="end">%30</text><text x="196.8" y="89.8" text-anchor="end" font-weight="bold">Keçi</text><text x="196.8" y="106.8" text-anchor="end">%25</text></g></svg>`,
  secenekler: ["44","55","56","60"],
  dogru: 0,
  hatalar: [
    null,
    "Koyun ve keçi diliminin yüzdelerini topladın (30 + 25 = 55) ve yüzdeyi litre sandın. Yüzdeyi 80 litreye uygulamalısın.",
    "Koyun yerine inek sütünü aldın: inek (36 litre) ile keçi (20 litre) toplamını buldun.",
    "İnek ve koyun sütünü topladın (36 + 24). Soru koyun ile keçiyi soruyor."
  ],
  aciklama: `Bir dilimin miktarı, toplam miktarın o dilimin yüzdesi kadarıdır. Birden fazla dilim için önce yüzdeler toplanabilir.
Adım 1: Koyun ve keçi dilimlerinin toplam payı: %30 + %25 = %55.
Adım 2: 80 litrenin %55'i: 80'in %10'u 8 litredir. %50 = 40 litre, %5 = 4 litre olduğundan %55 = 44 litre.
Sağlama: Tek tek bak: koyun 24 litre, keçi 20 litre. 24 + 20 = 44.
Sık yapılan hata: Yüzdeyi doğrudan litre sanmak. %55, 55 litre değildir; 80 litrenin %55'idir.
Cevap A.`
},
{
  id: "mat-va-162",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bir bilim merkezini hafta içi beş gün boyunca ziyaret eden kişi sayıları aşağıdaki çizgi grafiğinde verilmiştir.
**Buna göre bu merkeze hafta içi günde ortalama kaç kişi gelmiştir?**`,
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Çizgi grafiği: pazartesiden cumaya 30, 50, 70, 40 ve 10 ziyaretçi"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Bilim merkezinin günlük ziyaretçi sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">Ziyaretçi sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="239.5" x2="545" y2="239.5" stroke-opacity="0.35"/><line x1="70" y1="217" x2="545" y2="217" stroke-opacity="0.35"/><line x1="70" y1="194.5" x2="545" y2="194.5" stroke-opacity="0.35"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.35"/><line x1="70" y1="149.5" x2="545" y2="149.5" stroke-opacity="0.35"/><line x1="70" y1="127" x2="545" y2="127" stroke-opacity="0.35"/><line x1="70" y1="104.5" x2="545" y2="104.5" stroke-opacity="0.35"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="244.5">10</text><text x="62" y="222">20</text><text x="62" y="199.5">30</text><text x="62" y="177">40</text><text x="62" y="154.5">50</text><text x="62" y="132">60</text><text x="62" y="109.5">70</text><text x="62" y="87">80</text></g><g stroke="currentColor" stroke-width="2"><line x1="117.5" y1="262" x2="117.5" y2="267"/><line x1="212.5" y1="262" x2="212.5" y2="267"/><line x1="307.5" y1="262" x2="307.5" y2="267"/><line x1="402.5" y1="262" x2="402.5" y2="267"/><line x1="497.5" y1="262" x2="497.5" y2="267"/></g><polyline points="117.5,194.5 212.5,149.5 307.5,104.5 402.5,172 497.5,239.5" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="117.5" cy="194.5" r="5.5" fill="var(--vurgu)"/><circle cx="212.5" cy="149.5" r="5.5" fill="var(--vurgu)"/><circle cx="307.5" cy="104.5" r="5.5" fill="var(--vurgu)"/><circle cx="402.5" cy="172" r="5.5" fill="var(--vurgu)"/><circle cx="497.5" cy="239.5" r="5.5" fill="var(--vurgu)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="117.5" y="282">Pazartesi</text><text x="212.5" y="282">Salı</text><text x="307.5" y="282">Çarşamba</text><text x="402.5" y="282">Perşembe</text><text x="497.5" y="282">Cuma</text></g></svg>`,
  secenekler: ["40","50","70","200"],
  dogru: 0,
  hatalar: [
    null,
    "Toplamı gün sayısına değil 4'e böldün (200 : 4 = 50). Hafta içi beş gün vardır.",
    "En yüksek noktayı (çarşamba, 70) ortalama sandın. Ortalama için bütün değerler toplanıp gün sayısına bölünür.",
    "Beş günün toplamını buldun. Ortalama için toplamı gün sayısına bölmen gerekir."
  ],
  aciklama: `Aritmetik ortalama, değerlerin toplamının değer sayısına bölümüdür.
Adım 1: Noktaları oku: 30, 50, 70, 40 ve 10 kişi.
Adım 2: Toplam: 30 + 50 + 70 + 40 + 10 = 200.
Adım 3: Beş gün olduğundan ortalama 200 : 5 = 40 kişidir.
Sağlama: 5 gün · 40 kişi = 200 kişi; toplamla uyuşuyor.
Sık yapılan hata: Toplamı yanlış sayıya bölmek. Bölen, veri sayısıdır; burada 5 gündür.
Cevap A.`
},
{
  id: "mat-va-163",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bir ilkokuldaki 30 öğrencinin okula geliş biçimi aşağıdaki sütun grafiğinde verilmiştir. Her öğrenci tek bir biçim kullanmaktadır. Bu veriler daire grafiğiyle gösterilecektir.
**Buna göre daire grafiğinde merkez açısı 144° olan dilim hangi geliş biçimini gösterir?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"Sütun grafiği: bisiklet 4, yürüyerek 6, servis 8, veli aracı 12 öğrenci\"><rect x=\"101.38\" y=\"202\" width=\"56\" height=\"60\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"220.13\" y=\"172\" width=\"56\" height=\"90\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"338.88\" y=\"142\" width=\"56\" height=\"120\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"457.63\" y=\"82\" width=\"56\" height=\"180\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Öğrencilerin okula geliş biçimi</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Öğrenci sayısı</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"232\" x2=\"545\" y2=\"232\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"202\" x2=\"545\" y2=\"202\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"172\" x2=\"545\" y2=\"172\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"142\" x2=\"545\" y2=\"142\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"112\" x2=\"545\" y2=\"112\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"237\">2</text><text x=\"62\" y=\"207\">4</text><text x=\"62\" y=\"177\">6</text><text x=\"62\" y=\"147\">8</text><text x=\"62\" y=\"117\">10</text><text x=\"62\" y=\"87\">12</text></g><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"129.38\" y=\"282\">Bisiklet</text><text x=\"248.13\" y=\"282\">Yürüyerek</text><text x=\"366.88\" y=\"282\">Servis</text><text x=\"485.63\" y=\"282\">Veli aracı</text></g></svg>",
  secenekler: ["Bisiklet","Yürüyerek","Servis","Veli aracı"],
  dogru: 3,
  hatalar: [
    "Bisiklet sütunu 4 öğrenciyi gösterir. Bu dilimin açısı 4 · 12° = 48°'dir.",
    "Yürüyerek sütunu 6 öğrenciyi gösterir. Bu dilimin açısı 6 · 12° = 72°'dir.",
    "Servis sütunu 8 öğrenciyi gösterir. Bu dilimin açısı 8 · 12° = 96°'dir.",
    null
  ],
  aciklama: `Bir dilimin merkez açısı, o dilimdeki öğrenci sayısıyla doğru orantılıdır. Açıdan öğrenci sayısına dönmek için açıyı bir öğrencinin açısına bölersin.
Adım 1: Toplam öğrenci: 4 + 6 + 8 + 12 = 30. Bir öğrenciye 360° : 30 = 12° düşer.
Adım 2: 144° açı, 144° : 12° = 12 öğrenciyi gösterir.
Adım 3: Grafikte 12 öğrencilik sütun "veli aracı" sütunudur.
Sağlama: Dilimlerin açıları 48° + 72° + 96° + 144° = 360°'dir.
Sık yapılan hata: Açıyı doğrudan öğrenci sayısıyla karşılaştırmak. Önce bir öğrencinin açısını bul.
Cevap D.`
},
{
  id: "mat-va-164",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bir belediyenin üç spor kulübüne kayıtlı üye sayıları 2025 ve 2026 yıllarında aşağıdaki sütun grafiğinde verilmiştir.
**Buna göre üç kulübün toplam üye sayısı 2025'ten 2026'ya kaç kişi artmıştır?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"İki veri gruplu sütun grafiği: yüzme, tenis ve okçuluk kulüplerinin 2025 ve 2026 üye sayıları\"><rect x=\"99.17\" y=\"172\" width=\"50\" height=\"90\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"149.17\" y=\"82\" width=\"50\" height=\"180\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"257.5\" y=\"127\" width=\"50\" height=\"135\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"307.5\" y=\"172\" width=\"50\" height=\"90\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"415.83\" y=\"217\" width=\"50\" height=\"45\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"465.83\" y=\"127\" width=\"50\" height=\"135\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Kulüplerin üye sayısı</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Üye sayısı</text><rect x=\"421.4\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"443.4\" y=\"54\" font-size=\"14\" fill=\"currentColor\">2025</text><rect x=\"492.2\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"514.2\" y=\"54\" font-size=\"14\" fill=\"currentColor\">2026</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"217\" x2=\"545\" y2=\"217\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"172\" x2=\"545\" y2=\"172\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"127\" x2=\"545\" y2=\"127\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"222\">100</text><text x=\"62\" y=\"177\">200</text><text x=\"62\" y=\"132\">300</text><text x=\"62\" y=\"87\">400</text></g><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"149.17\" y=\"282\">Yüzme</text><text x=\"307.5\" y=\"282\">Tenis</text><text x=\"465.83\" y=\"282\">Okçuluk</text></g></svg>",
  secenekler: ["100","300","400","500"],
  dogru: 1,
  hatalar: [
    "Yalnızca tenis kulübündeki değişimi buldun (300 → 200, yani 100 azalma). Soru üç kulübün toplam değişimini soruyor.",
    null,
    "Yalnızca üye sayısı artan kulüplerin artışlarını topladın (200 + 200). Tenis kulübündeki 100 kişilik azalmayı hesaba katmadın.",
    "Azalışı da artış gibi topladın (200 + 100 + 200). Azalma toplamdan çıkarılmalıdır."
  ],
  aciklama: `Toplam değişimi bulmak için her yılın toplamını ayrı ayrı hesaplayıp çıkarmak en güvenli yoldur.
Adım 1: 2025 toplamı: 200 + 300 + 100 = 600 kişi.
Adım 2: 2026 toplamı: 400 + 200 + 300 = 900 kişi.
Adım 3: Artış: 900 − 600 = 300 kişi.
Sağlama: Kulüp kulüp değişimler: +200, −100, +200. Toplamları 200 − 100 + 200 = 300.
Sık yapılan hata: Azalan kulübü gözden kaçırmak. Üye sayısı azalan kulüp toplam artıştan çıkarılır.
Cevap B.`
},
{
  id: "mat-va-165",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bir spor kompleksinde 400 kişi en çok yaptığı sporu söylemiş, sonuçlar aşağıdaki daire grafiğinde yüzde olarak gösterilmiştir. Her kişi tek bir spor söylemiştir. Bu veriler sütun grafiğiyle gösterilecek ve dikey eksende her aralık 20 kişiyi gösterecektir.
**Buna göre basketbol sütunu, sıfır çizgisinden başlayarak kaç aralık yüksekliğinde olmalıdır?**`,
  gorsel: `<svg viewBox="0 0 560 350" role="img" aria-label="Daire grafiği: basketbol yüzde 35, voleybol yüzde 30, tenis yüzde 20, yüzme yüzde 15"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Kişilerin en çok yaptığı spor</text><path d="M280 190 L280 90 A100 100 0 0 1 360.9 248.78 Z" fill="var(--vurgu)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><path d="M280 190 L360.9 248.78 A100 100 0 0 1 199.1 248.78 Z" fill="var(--vurgu2)" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/><path d="M280 190 L199.1 248.78 A100 100 0 0 1 199.1 131.22 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M280 190 L199.1 131.22 A100 100 0 0 1 280 90 Z" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><g font-size="14" fill="currentColor"><text x="385" y="134" text-anchor="start" font-weight="bold">Basketbol</text><text x="385" y="151" text-anchor="start">%35</text><text x="280" y="312" text-anchor="middle" font-weight="bold">Voleybol</text><text x="280" y="329" text-anchor="middle">%30</text><text x="162" y="188" text-anchor="end" font-weight="bold">Tenis</text><text x="162" y="205" text-anchor="end">%20</text><text x="226" y="70" text-anchor="end" font-weight="bold">Yüzme</text><text x="226" y="87" text-anchor="end">%15</text></g></svg>`,
  secenekler: ["4","6","7","20"],
  dogru: 2,
  hatalar: [
    "Tenis diliminin (%20 = 80 kişi) aralık sayısını buldun: 80 : 20 = 4. Soru basketbolu soruyor.",
    "Voleybol diliminin (%30 = 120 kişi) aralık sayısını buldun. Soru basketbolu soruyor.",
    null,
    "Toplamı (400 kişi) bir aralığın değerine böldün (400 : 20 = 20). Bu bütün dairenin yüksekliğidir."
  ],
  aciklama: `Daire grafiğindeki yüzdeyi önce kişi sayısına çevirirsin; sonra sütunun yüksekliği için kişi sayısını bir aralığın değerine bölersin.
Adım 1: Basketbol diliminin payı %35'tir. 400 kişinin %35'i: 400 · [[35|100]] = 140 kişi.
Adım 2: Bir aralık 20 kişiyi gösterdiğine göre 140 : 20 = 7 aralık.
Sağlama: 7 · 20 = 140 kişi. Diğer sütunlar 6, 4 ve 3 aralık olur; toplam 7 + 6 + 4 + 3 = 20 aralık, yani 20 · 20 = 400 kişi.
Sık yapılan hata: Yüzdeyi doğrudan kişi sayısı sanmak. %35, 35 kişi demek değildir; 400 kişinin %35'idir.
Cevap C.`
},
{
  id: "mat-va-166",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bir şehirdeki Çam, Gül ve Lale parklarının ocak–mayıs aylarında ağırladığı ziyaretçi sayıları aşağıdaki çizgi grafiğinde verilmiştir.
**Buna göre hangi iki ay arasında yalnızca Lale Parkı'nın ziyaretçi sayısı artmıştır?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"Üç veri gruplu çizgi grafiği: Çam, Gül ve Lale parklarının ocaktan mayısa ziyaretçi sayıları\"><rect x=\"112.5\" y=\"137\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"207.5\" y=\"197\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"302.5\" y=\"107\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"397.5\" y=\"227\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"492.5\" y=\"137\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Parkların aylık ziyaretçi sayısı</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Ziyaretçi (bin)</text><line x1=\"215.4\" y1=\"49\" x2=\"235.4\" y2=\"49\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"225.4\" cy=\"49\" r=\"5.5\" fill=\"var(--vurgu)\"/><text x=\"241.4\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Çam Parkı</text><line x1=\"328.7\" y1=\"49\" x2=\"348.7\" y2=\"49\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-dasharray=\"9 5\"/><rect x=\"333.7\" y=\"44\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><text x=\"354.7\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Gül Parkı</text><line x1=\"442\" y1=\"49\" x2=\"462\" y2=\"49\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"3 4\"/><path d=\"M452 42.5 L458 54 L446 54 Z\" fill=\"currentColor\"/><text x=\"468\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Lale Parkı</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"232\" x2=\"545\" y2=\"232\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"202\" x2=\"545\" y2=\"202\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"172\" x2=\"545\" y2=\"172\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"142\" x2=\"545\" y2=\"142\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"112\" x2=\"545\" y2=\"112\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"237\">10</text><text x=\"62\" y=\"207\">20</text><text x=\"62\" y=\"177\">30</text><text x=\"62\" y=\"147\">40</text><text x=\"62\" y=\"117\">50</text><text x=\"62\" y=\"87\">60</text></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"117.5\" y1=\"262\" x2=\"117.5\" y2=\"267\"/><line x1=\"212.5\" y1=\"262\" x2=\"212.5\" y2=\"267\"/><line x1=\"307.5\" y1=\"262\" x2=\"307.5\" y2=\"267\"/><line x1=\"402.5\" y1=\"262\" x2=\"402.5\" y2=\"267\"/><line x1=\"497.5\" y1=\"262\" x2=\"497.5\" y2=\"267\"/></g><polyline points=\"117.5,202 212.5,172 307.5,142 402.5,172 497.5,202\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polyline points=\"117.5,142 212.5,202 307.5,112 402.5,232 497.5,142\" fill=\"none\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-dasharray=\"9 5\"/><polyline points=\"117.5,172 212.5,142 307.5,202 402.5,112 497.5,172\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-dasharray=\"3 4\"/><circle cx=\"117.5\" cy=\"202\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"212.5\" cy=\"172\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"307.5\" cy=\"142\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"402.5\" cy=\"172\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"497.5\" cy=\"202\" r=\"5.5\" fill=\"var(--vurgu)\"/><path d=\"M117.5 165.5 L123.5 177 L111.5 177 Z\" fill=\"currentColor\"/><path d=\"M212.5 135.5 L218.5 147 L206.5 147 Z\" fill=\"currentColor\"/><path d=\"M307.5 195.5 L313.5 207 L301.5 207 Z\" fill=\"currentColor\"/><path d=\"M402.5 105.5 L408.5 117 L396.5 117 Z\" fill=\"currentColor\"/><path d=\"M497.5 165.5 L503.5 177 L491.5 177 Z\" fill=\"currentColor\"/><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"117.5\" y=\"282\">Ocak</text><text x=\"212.5\" y=\"282\">Şubat</text><text x=\"307.5\" y=\"282\">Mart</text><text x=\"402.5\" y=\"282\">Nisan</text><text x=\"497.5\" y=\"282\">Mayıs</text></g></svg>",
  secenekler: ["Ocak ile şubat arasında","Şubat ile mart arasında","Mart ile nisan arasında","Nisan ile mayıs arasında"],
  dogru: 2,
  hatalar: [
    "Lale Parkı artmıştır (30 → 40) ama Çam Parkı da artmıştır (20 → 30). \"Yalnızca\" koşulu sağlanmaz.",
    "Bu aralıkta Lale Parkı azalmıştır (40 → 20). Artan parklar Çam ve Gül'dür.",
    null,
    "Bu aralıkta Lale Parkı azalmıştır (50 → 30). Yalnızca Gül Parkı artmıştır."
  ],
  aciklama: `Üç çizgili grafikte bir aralığı değerlendirirken her çizginin o aralıkta yükselip yükselmediğine ayrı ayrı bakılır. "Yalnızca" koşulu, diğer iki çizginin yükselmemesini ister.
Adım 1: Lejanta göre düz çizgi Çam, kesikli çizgi Gül, noktalı çizgi Lale Parkı'dır.
Adım 2: Aralıkları incele (Çam, Gül, Lale): ocak-şubat ↑ ↓ ↑; şubat-mart ↑ ↑ ↓; mart-nisan ↓ ↓ ↑; nisan-mayıs ↓ ↑ ↓.
Adım 3: Yalnızca Lale'nin arttığı tek aralık mart ile nisan arasıdır (Çam 40 → 30, Gül 50 → 10, Lale 20 → 50).
Sağlama: Bu aralıkta Çam ve Gül çizgileri aşağı inerken Lale çizgisi yukarı çıkar.
Sık yapılan hata: Yalnızca Lale'nin arttığı aralıkla Lale'nin diğerleriyle birlikte arttığı aralığı karıştırmak.
Cevap C.`
},
{
  id: "mat-va-167",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bir alışveriş sitesinde bir ayda verilen 600 siparişin kategorilere göre dağılımı aşağıdaki daire grafiğinde dilimlerin merkez açılarıyla gösterilmiştir. Her sipariş tek bir kategoridedir.
**Buna göre ev eşyası kategorisinde kaç sipariş verilmiştir?**`,
  gorsel: `<svg viewBox="0 0 560 350" role="img" aria-label="Daire grafiği: giyim 90 derece, elektronik 54 derece, kitap 72 derece, ev eşyası 144 derece"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Siparişlerin kategorilere dağılımı</text><path d="M280 190 L280 90 A100 100 0 0 1 380 190 Z" fill="var(--vurgu)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><path d="M280 190 L380 190 A100 100 0 0 1 338.78 270.9 Z" fill="var(--vurgu2)" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/><path d="M280 190 L338.78 270.9 A100 100 0 0 1 221.22 270.9 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M280 190 L221.22 270.9 A100 100 0 0 1 280 90 Z" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><g font-size="14" fill="currentColor"><text x="363.2" y="89.8" text-anchor="start" font-weight="bold">Giyim</text><text x="363.2" y="106.8" text-anchor="start">90°</text><text x="383.79" y="238.85" text-anchor="start" font-weight="bold">Elektronik</text><text x="383.79" y="255.85" text-anchor="start">54°</text><text x="280" y="315" text-anchor="middle" font-weight="bold">Kitap</text><text x="280" y="332" text-anchor="middle">72°</text><text x="169.48" y="153.39" text-anchor="end" font-weight="bold">Ev eşyası</text><text x="169.48" y="170.39" text-anchor="end">144°</text></g></svg>`,
  secenekler: ["120","144","150","240"],
  dogru: 3,
  hatalar: [
    "Kitap diliminin (72°) sipariş sayısını buldun: 600 · [[72|360]] = 120. Soru ev eşyasını soruyor.",
    "Dilimin açısını (144°) sipariş sayısı sandın. Açı derece cinsindendir; sipariş sayısı için açıyı 360°'ye oranlayıp 600 ile çarpmalısın.",
    "Giyim diliminin (90°) sipariş sayısını buldun: 600 · [[90|360]] = 150. Soru ev eşyasını soruyor.",
    null
  ],
  aciklama: `Daire grafiğinde bir dilimin payı, merkez açısının 360°'ye oranıdır: pay = [[açı|360°]]. Sipariş sayısı için bu pay toplamla çarpılır.
Adım 1: Ev eşyası diliminin payı: [[144|360]] = [[2|5]].
Adım 2: 600 siparişin [[2|5]] kadarı: 600 : 5 = 120, 120 · 2 = 240 sipariş.
Sağlama: Diğer kategoriler: giyim 150, elektronik 90, kitap 120. 150 + 90 + 120 + 240 = 600.
Sık yapılan hata: Açıyı sipariş sayısı sanmak ya da yanlış dilimi hesaplamak. 144°, 144 sipariş demek değildir.
Cevap D.`
},
{
  id: "mat-va-168",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bir ortaokulda dört 6. sınıf şubesindeki kız ve erkek öğrenci sayıları aşağıdaki sütun grafiğinde verilmiştir.
**Buna göre dört şubedeki kız öğrenciler, tüm öğrencilerin yüzde kaçıdır?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"İki veri gruplu sütun grafiği: 6-A, 6-B, 6-C ve 6-D şubelerindeki kız ve erkek öğrenciler\"><rect x=\"81.88\" y=\"202\" width=\"47.5\" height=\"60\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"129.38\" y=\"142\" width=\"47.5\" height=\"120\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"200.63\" y=\"172\" width=\"47.5\" height=\"90\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"248.13\" y=\"112\" width=\"47.5\" height=\"150\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"319.38\" y=\"142\" width=\"47.5\" height=\"120\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"366.88\" y=\"112\" width=\"47.5\" height=\"150\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"438.13\" y=\"172\" width=\"47.5\" height=\"90\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"485.63\" y=\"142\" width=\"47.5\" height=\"120\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Şubelerdeki kız ve erkek öğrenci sayısı</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Öğrenci sayısı</text><rect x=\"421.4\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"443.4\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Kız</text><rect x=\"484.5\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"506.5\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Erkek</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"232\" x2=\"545\" y2=\"232\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"202\" x2=\"545\" y2=\"202\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"172\" x2=\"545\" y2=\"172\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"142\" x2=\"545\" y2=\"142\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"112\" x2=\"545\" y2=\"112\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"237\">5</text><text x=\"62\" y=\"207\">10</text><text x=\"62\" y=\"177\">15</text><text x=\"62\" y=\"147\">20</text><text x=\"62\" y=\"117\">25</text><text x=\"62\" y=\"87\">30</text></g><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"129.38\" y=\"282\">6-A</text><text x=\"248.13\" y=\"282\">6-B</text><text x=\"366.88\" y=\"282\">6-C</text><text x=\"485.63\" y=\"282\">6-D</text></g></svg>",
  secenekler: ["40","60","90","150"],
  dogru: 0,
  hatalar: [
    null,
    "Erkek öğrencilerin yüzdesini buldun (90 : 150 = %60). Soru kız öğrencileri soruyor.",
    "Erkek öğrencilerin sayısını (90) yüzde sandın. Sayıyı toplama oranlayıp yüzdeye çevirmelisin.",
    "Tüm öğrencilerin sayısını (150) yüzde sandın. Yüzde, parçanın bütüne oranıdır."
  ],
  aciklama: `Bir grubun yüzdesi, o grubun sayısının toplam sayıya oranıdır: yüzde = [[parça|bütün]] · 100.
Adım 1: Kız öğrenciler: 10 + 15 + 20 + 15 = 60. Erkek öğrenciler: 20 + 25 + 25 + 20 = 90.
Adım 2: Tüm öğrenciler: 60 + 90 = 150.
Adım 3: Kızların payı: [[60|150]] = [[2|5]] = %40.
Sağlama: Kızlar %40 ise erkekler %60'tır: 90 : 150 = %60. %40 + %60 = %100.
Sık yapılan hata: Sayıyı yüzde sanmak. Kız sayısı olan 60, yüzde 60 demek değildir; 150 öğrencinin 60'ıdır.
Cevap A.`
},
{
  id: "mat-va-169",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bir otelin 36 çalışanının görev birimlerine göre dağılımı aşağıdaki daire grafiğinde merkez açılarıyla verilmiştir. Her çalışan tek bir birimde görev yapmaktadır.
**Buna göre aşağıdaki tablolardan hangisi birimlerdeki çalışan sayılarını doğru gösterir?**`,
  gorsel: `<svg viewBox="0 0 560 350" role="img" aria-label="Daire grafiği: mutfak 140 derece, kat hizmetleri 100 derece, resepsiyon 80 derece, güvenlik 40 derece"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Çalışanların görev birimlerine dağılımı</text><path d="M280 190 L280 90 A100 100 0 0 1 344.28 266.6 Z" fill="var(--vurgu)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><path d="M280 190 L344.28 266.6 A100 100 0 0 1 193.4 240 Z" fill="var(--vurgu2)" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/><path d="M280 190 L193.4 240 A100 100 0 0 1 215.72 113.4 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M280 190 L215.72 113.4 A100 100 0 0 1 280 90 Z" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><g font-size="14" fill="currentColor"><text x="389.25" y="149.69" text-anchor="start" font-weight="bold">Mutfak</text><text x="389.25" y="166.69" text-anchor="start">140°</text><text x="260.55" y="313.3" text-anchor="middle" font-weight="bold">Kat hizmetleri</text><text x="260.55" y="330.3" text-anchor="middle">100°</text><text x="165.7" y="168.55" text-anchor="end" font-weight="bold">Resepsiyon</text><text x="165.7" y="185.55" text-anchor="end">80°</text><text x="237.69" y="63.75" text-anchor="end" font-weight="bold">Güvenlik</text><text x="237.69" y="80.75" text-anchor="end">40°</text></g></svg>`,
  secenekler: ["Mutfak: 10, Kat hizmetleri: 14, Resepsiyon: 8, Güvenlik: 4","Mutfak: 14, Kat hizmetleri: 10, Resepsiyon: 8, Güvenlik: 4","Mutfak: 14, Kat hizmetleri: 10, Resepsiyon: 4, Güvenlik: 8","Mutfak: 140, Kat hizmetleri: 100, Resepsiyon: 80, Güvenlik: 40"],
  dogru: 1,
  hatalar: [
    "Mutfak ile kat hizmetlerinin sayılarını yer değiştirdin. 140° → 14 kişi, 100° → 10 kişidir.",
    null,
    "Resepsiyon ile güvenliğin sayılarını yer değiştirdin. 80° → 8 kişi, 40° → 4 kişidir.",
    "Açıları kişi sayısı sandın (toplam 360 kişi eder). Çalışan sayısı 36'dır; her 10° bir kişiyi gösterir."
  ],
  aciklama: `Açıyı kişi sayısına çevirmek için açıyı, bir kişiye düşen açıya bölersin. Bir kişiye düşen açı, 360°'nin toplam kişi sayısına bölünmesiyle bulunur.
Adım 1: 36 çalışan 360°'yi paylaşır; bir çalışana 360° : 36 = 10° düşer.
Adım 2: Mutfak 140° : 10° = 14, kat hizmetleri 100° : 10° = 10, resepsiyon 80° : 10° = 8, güvenlik 40° : 10° = 4 kişidir.
Adım 3: Bu sayıları veren tablo B seçeneğindeki tablodur.
Sağlama: 14 + 10 + 8 + 4 = 36 çalışan.
Sık yapılan hata: Dilimlerin sırasını karıştırmak ya da açıyı kişi sanmak. Her birimi grafikteki açısıyla tek tek eşleştir.
Cevap B.`
},
{
  id: "mat-va-170",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bir kapta ısıtılan suyun sıcaklığı her dakikanın sonunda ölçülmüş ve aşağıdaki çizgi grafiğinde gösterilmiştir.
**Buna göre suyun sıcaklığı ilk dört dakikada dakikada ortalama kaç °C artmıştır?**`,
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Çizgi grafiği: başlangıçta 20, sonraki dört dakikada 30, 50, 60 ve 80 derece"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Isıtılan suyun sıcaklığı</text><text x="10" y="54" font-size="14" fill="currentColor">Sıcaklık (°C)</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="239.5" x2="545" y2="239.5" stroke-opacity="0.35"/><line x1="70" y1="217" x2="545" y2="217" stroke-opacity="0.35"/><line x1="70" y1="194.5" x2="545" y2="194.5" stroke-opacity="0.35"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.35"/><line x1="70" y1="149.5" x2="545" y2="149.5" stroke-opacity="0.35"/><line x1="70" y1="127" x2="545" y2="127" stroke-opacity="0.35"/><line x1="70" y1="104.5" x2="545" y2="104.5" stroke-opacity="0.35"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="244.5">10</text><text x="62" y="222">20</text><text x="62" y="199.5">30</text><text x="62" y="177">40</text><text x="62" y="154.5">50</text><text x="62" y="132">60</text><text x="62" y="109.5">70</text><text x="62" y="87">80</text></g><g stroke="currentColor" stroke-width="2"><line x1="117.5" y1="262" x2="117.5" y2="267"/><line x1="212.5" y1="262" x2="212.5" y2="267"/><line x1="307.5" y1="262" x2="307.5" y2="267"/><line x1="402.5" y1="262" x2="402.5" y2="267"/><line x1="497.5" y1="262" x2="497.5" y2="267"/></g><polyline points="117.5,217 212.5,194.5 307.5,149.5 402.5,127 497.5,82" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="117.5" cy="217" r="5.5" fill="var(--vurgu)"/><circle cx="212.5" cy="194.5" r="5.5" fill="var(--vurgu)"/><circle cx="307.5" cy="149.5" r="5.5" fill="var(--vurgu)"/><circle cx="402.5" cy="127" r="5.5" fill="var(--vurgu)"/><circle cx="497.5" cy="82" r="5.5" fill="var(--vurgu)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="117.5" y="282">Başlangıç</text><text x="212.5" y="282">1. dakika</text><text x="307.5" y="282">2. dakika</text><text x="402.5" y="282">3. dakika</text><text x="497.5" y="282">4. dakika</text></g></svg>`,
  secenekler: ["10","15","60","80"],
  dogru: 1,
  hatalar: [
    "Yalnızca ilk dakikadaki artışı (20 → 30) buldun. Soru dört dakikanın ortalamasını soruyor.",
    null,
    "Dört dakikadaki toplam artışı (80 − 20) buldun. Ortalama için bunu süreye (4 dakikaya) bölmelisin.",
    "Son ölçülen sıcaklığı (80 °C) ortalama artış sandın. Artış, sıcaklıkların farkından bulunur."
  ],
  aciklama: `Ortalama değişim, toplam değişimin süreye bölünmesiyle bulunur: ortalama değişim = toplam değişim : süre.
Adım 1: Toplam artış: 80 − 20 = 60 °C.
Adım 2: Süre 4 dakikadır. Dakikada ortalama artış: 60 : 4 = 15 °C.
Sağlama: 4 dakika · 15 °C = 60 °C; toplam artışla uyuşuyor.
Sık yapılan hata: Toplam artışı süreye bölmeyi unutmak. Ortalama, "dakikada" kaç °C olduğunu anlatır.
Cevap B.`
},
{
  id: "mat-va-171",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bir meyve suyu fabrikasında bir günde üretilen meyve sularının türlere göre dağılımı aşağıdaki daire grafiğinde yüzde olarak verilmiştir.
**Buna göre üretilen portakal suyu miktarı, kayısı suyu miktarının kaç katıdır?**`,
  gorsel: `<svg viewBox="0 0 560 350" role="img" aria-label="Daire grafiği: portakal yüzde 45, elma yüzde 25, kayısı yüzde 15, vişne yüzde 15"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Üretilen meyve sularının dağılımı</text><path d="M280 190 L280 90 A100 100 0 0 1 310.9 285.11 Z" fill="var(--vurgu)" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><path d="M280 190 L310.9 285.11 A100 100 0 0 1 184.89 220.9 Z" fill="var(--vurgu2)" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/><path d="M280 190 L184.89 220.9 A100 100 0 0 1 199.1 131.22 Z" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><path d="M280 190 L199.1 131.22 A100 100 0 0 1 280 90 Z" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><g font-size="14" fill="currentColor"><text x="394.62" y="170.48" text-anchor="start" font-weight="bold">Portakal</text><text x="394.62" y="187.48" text-anchor="start">%45</text><text x="225.15" y="302.79" text-anchor="end" font-weight="bold">Elma</text><text x="225.15" y="319.79" text-anchor="end">%25</text><text x="165.38" y="170.48" text-anchor="end" font-weight="bold">Kayısı</text><text x="165.38" y="187.48" text-anchor="end">%15</text><text x="225.15" y="69.21" text-anchor="end" font-weight="bold">Vişne</text><text x="225.15" y="86.21" text-anchor="end">%15</text></g></svg>`,
  secenekler: ["3","30","45","60"],
  dogru: 0,
  hatalar: [
    null,
    "Katı değil yüzde farkını buldun (45 − 15 = 30). Kat bulmak için bölme yapılır.",
    "Portakal diliminin yüzdesini (%45) kat sayısı sandın. Kat için iki dilimi birbirine bölmelisin.",
    "İki dilimin yüzdelerini topladın (45 + 15). Kat bulmak için toplama değil bölme gerekir."
  ],
  aciklama: `Toplam miktar bilinmese bile iki dilimin oranı, yüzdelerinin oranına eşittir. Kat bulmak için yüzdeler birbirine bölünür.
Adım 1: Portakal diliminin payı %45, kayısı diliminin payı %15'tir.
Adım 2: Kat: 45 : 15 = 3.
Sağlama: Toplam üretim 200 litre olsaydı portakal 90 litre, kayısı 30 litre olurdu; 90 : 30 = 3.
Sık yapılan hata: Katı farkla karıştırmak. "Kaç katı" bölme, "kaç fazla" çıkarma gerektirir.
Cevap A.`
},
{
  id: "mat-va-172",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `K, L ve M şehirlerinde bir haftanın ilk dört günü ölçülen en yüksek sıcaklıklar aşağıdaki sütun grafiğinde verilmiştir.
**Buna göre hangi gün üç şehirdeki en yüksek sıcaklık ile en düşük sıcaklık arasındaki fark en büyüktür?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"Üç veri gruplu sütun grafiği: K, L ve M şehirlerinin pazartesiden perşembeye en yüksek sıcaklıkları\"><rect x=\"81.88\" y=\"194.5\" width=\"31.67\" height=\"67.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"113.54\" y=\"172\" width=\"31.67\" height=\"90\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"145.21\" y=\"149.5\" width=\"31.67\" height=\"112.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"200.63\" y=\"239.5\" width=\"31.67\" height=\"22.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"232.29\" y=\"194.5\" width=\"31.67\" height=\"67.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"263.96\" y=\"194.5\" width=\"31.67\" height=\"67.5\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"319.38\" y=\"239.5\" width=\"31.67\" height=\"22.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"351.04\" y=\"149.5\" width=\"31.67\" height=\"112.5\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"382.71\" y=\"217\" width=\"31.67\" height=\"45\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"438.13\" y=\"194.5\" width=\"31.67\" height=\"67.5\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"469.79\" y=\"172\" width=\"31.67\" height=\"90\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><rect x=\"501.46\" y=\"127\" width=\"31.67\" height=\"135\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Şehirlerde ölçülen en yüksek sıcaklık</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Sıcaklık (°C)</text><rect x=\"281.3\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--vurgu)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"303.3\" y=\"54\" font-size=\"14\" fill=\"currentColor\">K şehri</text><rect x=\"375.2\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--vurgu2)\" stroke=\"currentColor\" stroke-width=\"1\"/><text x=\"397.2\" y=\"54\" font-size=\"14\" fill=\"currentColor\">L şehri</text><rect x=\"469.1\" y=\"42\" width=\"14\" height=\"14\" fill=\"var(--dolgu)\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"491.1\" y=\"54\" font-size=\"14\" fill=\"currentColor\">M şehri</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"239.5\" x2=\"545\" y2=\"239.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"217\" x2=\"545\" y2=\"217\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"194.5\" x2=\"545\" y2=\"194.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"172\" x2=\"545\" y2=\"172\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"149.5\" x2=\"545\" y2=\"149.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"127\" x2=\"545\" y2=\"127\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"104.5\" x2=\"545\" y2=\"104.5\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"244.5\">5</text><text x=\"62\" y=\"222\">10</text><text x=\"62\" y=\"199.5\">15</text><text x=\"62\" y=\"177\">20</text><text x=\"62\" y=\"154.5\">25</text><text x=\"62\" y=\"132\">30</text><text x=\"62\" y=\"109.5\">35</text><text x=\"62\" y=\"87\">40</text></g><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"129.38\" y=\"282\">Pazartesi</text><text x=\"248.13\" y=\"282\">Salı</text><text x=\"366.88\" y=\"282\">Çarşamba</text><text x=\"485.63\" y=\"282\">Perşembe</text></g></svg>",
  secenekler: ["Pazartesi","Salı","Çarşamba","Perşembe"],
  dogru: 2,
  hatalar: [
    "Pazartesi günü en yüksek sıcaklık 25, en düşük 15 °C'dir. Fark yalnızca 10 °C'dir.",
    "Salı günü en yüksek sıcaklık 15, en düşük 5 °C'dir. Fark yalnızca 10 °C'dir.",
    null,
    "Grafikteki en uzun sütunun (30 °C) bulunduğu günü seçtin. O gün en düşük sıcaklık 15 °C olduğundan fark 15 °C'dir."
  ],
  aciklama: `Bir günün üç sütunu arasındaki fark, o günün en uzun sütunu ile en kısa sütununun değerlerinin farkıdır.
Adım 1: Dikey eksen 5'er 5'er artıyor. Günlerin değerleri (K, L, M): pazartesi 15, 20, 25; salı 5, 15, 15; çarşamba 5, 25, 10; perşembe 15, 20, 30.
Adım 2: Farklar: pazartesi 25 − 15 = 10, salı 15 − 5 = 10, çarşamba 25 − 5 = 20, perşembe 30 − 15 = 15.
Adım 3: En büyük fark 20 °C'dir ve çarşamba gününe aittir.
Sağlama: Çarşamba günü sütunlar arasındaki yükseklik farkı, diğer günlerin hepsinden daha büyüktür.
Sık yapılan hata: En uzun sütunun bulunduğu günü seçmek. Fark için o günün en kısa sütununa da bakmak gerekir.
Cevap C.`
},
{
  id: "mat-va-173",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: `Bir manava sabah gelen 50 kasa meyvenin türlere göre sayısı aşağıdaki sütun grafiğinde verilmiştir. Bu veriler daire grafiğiyle gösterilecektir.
**Buna göre daire grafiğindeki en büyük dilim, dairenin yüzde kaçını kaplar?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"Sütun grafiği: elma 18, portakal 14, muz 12, kivi 6 kasa\"><rect x=\"101.38\" y=\"100\" width=\"56\" height=\"162\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"220.13\" y=\"136\" width=\"56\" height=\"126\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"338.88\" y=\"154\" width=\"56\" height=\"108\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"457.63\" y=\"208\" width=\"56\" height=\"54\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Manava gelen meyve kasaları</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Kasa sayısı</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"244\" x2=\"545\" y2=\"244\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"226\" x2=\"545\" y2=\"226\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"208\" x2=\"545\" y2=\"208\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"190\" x2=\"545\" y2=\"190\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"172\" x2=\"545\" y2=\"172\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"154\" x2=\"545\" y2=\"154\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"136\" x2=\"545\" y2=\"136\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"118\" x2=\"545\" y2=\"118\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"100\" x2=\"545\" y2=\"100\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"249\">2</text><text x=\"62\" y=\"231\">4</text><text x=\"62\" y=\"213\">6</text><text x=\"62\" y=\"195\">8</text><text x=\"62\" y=\"177\">10</text><text x=\"62\" y=\"159\">12</text><text x=\"62\" y=\"141\">14</text><text x=\"62\" y=\"123\">16</text><text x=\"62\" y=\"105\">18</text><text x=\"62\" y=\"87\">20</text></g><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"129.38\" y=\"282\">Elma</text><text x=\"248.13\" y=\"282\">Portakal</text><text x=\"366.88\" y=\"282\">Muz</text><text x=\"485.63\" y=\"282\">Kivi</text></g></svg>",
  secenekler: ["18","24","28","36"],
  dogru: 3,
  hatalar: [
    "En uzun sütunun değerini (18 kasa) yüzde sandın. Yüzde, kasa sayısının toplama oranıdır.",
    "Muz diliminin yüzdesini buldun (12 : 50 = %24). En büyük dilim elma diliminidir.",
    "İkinci en büyük dilimin (portakal, 14 : 50 = %28) yüzdesini buldun.",
    null
  ],
  aciklama: `Daire grafiğinde en büyük dilim, en uzun sütuna karşılık gelir. Bir dilimin yüzdesi, sütunun değerinin toplama oranıdır.
Adım 1: Toplam kasa: 18 + 14 + 12 + 6 = 50.
Adım 2: En büyük dilim, 18 kasalık elma dilimidir. Payı [[18|50]] = [[36|100]] = %36.
Sağlama: Diğer dilimler %28, %24 ve %12'dir. 36 + 28 + 24 + 12 = 100.
Sık yapılan hata: Sütunun değerini yüzde sanmak. Toplam 100 olmadığı sürece sayı ile yüzde aynı şey değildir.
Cevap D.`
},
{
  id: "mat-va-174",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bir giyim mağazasında kazak ve mont satışlarının dört hafta boyunca haftalara göre değişimi aşağıdaki çizgi grafiğinde verilmiştir.
**Buna göre hangi hafta satılan kazak sayısı, satılan mont sayısının tam 2 katıdır?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"İki veri gruplu çizgi grafiği: dört haftada satılan kazak ve mont sayıları\"><rect x=\"124.38\" y=\"205.57\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"243.13\" y=\"179.86\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"361.88\" y=\"154.14\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><rect x=\"480.63\" y=\"179.86\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: Haftalık kazak ve mont satışı</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Satılan adet</text><line x1=\"405.7\" y1=\"49\" x2=\"425.7\" y2=\"49\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><circle cx=\"415.7\" cy=\"49\" r=\"5.5\" fill=\"var(--vurgu)\"/><text x=\"431.7\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Kazak</text><line x1=\"488.2\" y1=\"49\" x2=\"508.2\" y2=\"49\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-dasharray=\"9 5\"/><rect x=\"493.2\" y=\"44\" width=\"10\" height=\"10\" fill=\"var(--vurgu2)\"/><text x=\"514.2\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Mont</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"236.29\" x2=\"545\" y2=\"236.29\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"210.57\" x2=\"545\" y2=\"210.57\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"184.86\" x2=\"545\" y2=\"184.86\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"159.14\" x2=\"545\" y2=\"159.14\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"133.43\" x2=\"545\" y2=\"133.43\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"107.71\" x2=\"545\" y2=\"107.71\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"241.29\">10</text><text x=\"62\" y=\"215.57\">20</text><text x=\"62\" y=\"189.86\">30</text><text x=\"62\" y=\"164.14\">40</text><text x=\"62\" y=\"138.43\">50</text><text x=\"62\" y=\"112.71\">60</text><text x=\"62\" y=\"87\">70</text></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"129.38\" y1=\"262\" x2=\"129.38\" y2=\"267\"/><line x1=\"248.13\" y1=\"262\" x2=\"248.13\" y2=\"267\"/><line x1=\"366.88\" y1=\"262\" x2=\"366.88\" y2=\"267\"/><line x1=\"485.63\" y1=\"262\" x2=\"485.63\" y2=\"267\"/></g><polyline points=\"129.38,184.86 248.13,159.14 366.88,133.43 485.63,107.71\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polyline points=\"129.38,210.57 248.13,184.86 366.88,159.14 485.63,184.86\" fill=\"none\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" stroke-dasharray=\"9 5\"/><circle cx=\"129.38\" cy=\"184.86\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"248.13\" cy=\"159.14\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"366.88\" cy=\"133.43\" r=\"5.5\" fill=\"var(--vurgu)\"/><circle cx=\"485.63\" cy=\"107.71\" r=\"5.5\" fill=\"var(--vurgu)\"/><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"129.38\" y=\"282\">1. hafta</text><text x=\"248.13\" y=\"282\">2. hafta</text><text x=\"366.88\" y=\"282\">3. hafta</text><text x=\"485.63\" y=\"282\">4. hafta</text></g></svg>",
  secenekler: ["1. hafta","2. hafta","3. hafta","4. hafta"],
  dogru: 3,
  hatalar: [
    "1. haftada kazak 30, mont 20 adet satılmıştır. 30, 20'nin 1,5 katıdır; 2 katı değildir.",
    "2. haftada kazak 40, mont 30 adet satılmıştır. 40, 30'un 2 katı değildir.",
    "3. haftada kazak 50, mont 40 adet satılmıştır. 50, 40'ın 2 katı değildir.",
    null
  ],
  aciklama: `"Tam 2 katı" ifadesi, büyük değerin küçük değerin iki katı olması demektir: büyük = 2 · küçük. Aradaki farkın küçük olması iki katı olmayı göstermez.
Adım 1: Haftalık değerleri (kazak, mont) oku: 30 - 20, 40 - 30, 50 - 40, 60 - 30.
Adım 2: Her hafta için kazak sayısını mont sayısına böl: 1,5; yaklaşık 1,33; 1,25; 2.
Adım 3: Oran 2 olan tek hafta 4. haftadır (60 = 2 · 30).
Sağlama: 4. haftada kazak çizgisinin yüksekliği, mont çizgisinin yüksekliğinin tam iki katıdır.
Sık yapılan hata: Farkı küçük olan haftaları "yakın" diye seçmek ya da farkı kat sanmak. Katı bulmak için bölme yap.
Cevap D.`
},
{
  id: "mat-va-175",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 2,
  soru: `Bir ilin beş ilçesinin yıllık yağış miktarları aşağıdaki sütun grafiğinde verilmiştir.
**Buna göre hangi iki ilçenin yıllık yağış miktarları toplamı, Merkez ilçesinin yıllık yağış miktarına eşittir?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"Sütun grafiği: Merkez 600, Akçay 500, Çamlı 300, Dere 100, Elmalı 400 milimetre\"><rect x=\"89.5\" y=\"82\" width=\"56\" height=\"180\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"184.5\" y=\"112\" width=\"56\" height=\"150\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"279.5\" y=\"172\" width=\"56\" height=\"90\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"374.5\" y=\"232\" width=\"56\" height=\"30\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><rect x=\"469.5\" y=\"142\" width=\"56\" height=\"120\" fill=\"var(--dolgu)\" stroke=\"var(--vurgu)\" stroke-width=\"2\"/><text x=\"10\" y=\"24\" font-size=\"16\" font-weight=\"bold\" fill=\"currentColor\">Grafik: İlçelerin yıllık yağış miktarı</text><text x=\"10\" y=\"54\" font-size=\"14\" fill=\"currentColor\">Yağış (mm)</text><g stroke=\"currentColor\" stroke-width=\"1\"><line x1=\"70\" y1=\"232\" x2=\"545\" y2=\"232\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"202\" x2=\"545\" y2=\"202\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"172\" x2=\"545\" y2=\"172\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"142\" x2=\"545\" y2=\"142\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"112\" x2=\"545\" y2=\"112\" stroke-opacity=\"0.35\"/><line x1=\"70\" y1=\"82\" x2=\"545\" y2=\"82\" stroke-opacity=\"0.35\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"68\" x2=\"70\" y2=\"262\"/><line x1=\"70\" y1=\"262\" x2=\"545\" y2=\"262\"/></g><g font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\"><text x=\"62\" y=\"267\">0</text><text x=\"62\" y=\"237\">100</text><text x=\"62\" y=\"207\">200</text><text x=\"62\" y=\"177\">300</text><text x=\"62\" y=\"147\">400</text><text x=\"62\" y=\"117\">500</text><text x=\"62\" y=\"87\">600</text></g><g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\"><text x=\"117.5\" y=\"282\">Merkez</text><text x=\"212.5\" y=\"282\">Akçay</text><text x=\"307.5\" y=\"282\">Çamlı</text><text x=\"402.5\" y=\"282\">Dere</text><text x=\"497.5\" y=\"282\">Elmalı</text></g></svg>",
  secenekler: ["Akçay ve Dere","Çamlı ve Dere","Çamlı ve Elmalı","Akçay ve Elmalı"],
  dogru: 0,
  hatalar: [
    null,
    "Çamlı (300) ile Dere'nin (100) toplamı 400 mm'dir. Merkez'in 600 mm'sine ulaşmaz.",
    "Çamlı (300) ile Elmalı'nın (400) toplamı 700 mm'dir. Merkez'in 600 mm'sini aşar.",
    "Akçay (500) ile Elmalı'nın (400) toplamı 900 mm'dir. Merkez'in 600 mm'sini aşar."
  ],
  aciklama: `Bu tür sorularda önce her sütunun değeri okunur, sonra seçeneklerdeki ikililerin toplamı hedef değerle karşılaştırılır.
Adım 1: Dikey eksen 100'er 100'er artıyor. Merkez 600, Akçay 500, Çamlı 300, Dere 100, Elmalı 400 mm'dir.
Adım 2: Seçeneklerin toplamlarını hesapla: Akçay + Dere = 600, Çamlı + Dere = 400, Çamlı + Elmalı = 700, Akçay + Elmalı = 900.
Adım 3: Toplamı Merkez'in değerine (600) eşit olan ikili Akçay ve Dere'dir.
Sağlama: 500 + 100 = 600.
Sık yapılan hata: Toplamı hedefe en yakın olan ikiliyi seçmek. Eşitlik için toplamın hedefe tam olarak eşit olması gerekir.
Cevap A.`
}
);
