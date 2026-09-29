// Matematik — Veri Analizi (M.8.4.1): Kademe 1 (Kavrama) ve Kademe 2 (Pekiştirme)
// Grafiklerdeki her sütun, nokta ve dilim veriden hesaplanmıştır; değerler eksen ölçeğiyle birebir tutar.
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["veri-analizi"] = window.LGS_BANK["veri-analizi"] || []).push(
/* ===================== KADEME 1 — KAVRAMA ===================== */
{
  id: "mat-va-101",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Bir kırtasiyenin bir günde sattığı defterlerin türlere göre sayısı aşağıdaki sütun grafiğinde verilmiştir.\n**Buna göre çizgili defterden, resim defterinden kaç tane fazla satılmıştır?**",
  gorsel: `<svg viewBox="0 0 560 312" role="img" aria-label="Sütun grafiği: kareli, çizgili, resim ve müzik defterlerinin bir günde satılan sayıları"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Satılan defterlerin türlere göre sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">Defter sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="244" x2="545" y2="244" stroke-opacity="0.35"/><line x1="70" y1="226" x2="545" y2="226" stroke-opacity="0.35"/><line x1="70" y1="208" x2="545" y2="208" stroke-opacity="0.35"/><line x1="70" y1="190" x2="545" y2="190" stroke-opacity="0.35"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.35"/><line x1="70" y1="154" x2="545" y2="154" stroke-opacity="0.35"/><line x1="70" y1="136" x2="545" y2="136" stroke-opacity="0.35"/><line x1="70" y1="118" x2="545" y2="118" stroke-opacity="0.35"/><line x1="70" y1="100" x2="545" y2="100" stroke-opacity="0.35"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="249">5</text><text x="62" y="231">10</text><text x="62" y="213">15</text><text x="62" y="195">20</text><text x="62" y="177">25</text><text x="62" y="159">30</text><text x="62" y="141">35</text><text x="62" y="123">40</text><text x="62" y="105">45</text><text x="62" y="87">50</text></g><rect x="101.38" y="154" width="56" height="108" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="220.13" y="100" width="56" height="162" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="338.88" y="208" width="56" height="54" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="457.63" y="172" width="56" height="90" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="129.38" y="282">Kareli</text><text x="248.13" y="282">Çizgili</text><text x="366.88" y="282">Resim</text><text x="485.63" y="282">Müzik</text></g><text x="307.5" y="304" font-size="14" text-anchor="middle" fill="currentColor">Defter türü</text></svg>`,
  secenekler: ["15", "20", "30", "45"],
  dogru: 2,
  hatalar: [
    "Farkı bulmadan yalnızca resim defterinin sütununu okudun. Soru iki sütunun farkını istiyor.",
    "Çizgili defteri resim defteriyle değil, müzik defteriyle karşılaştırdın: 45 − 25 = 20.",
    null,
    "Çıkarma yapmadan yalnızca çizgili defterin sütununu okudun. 45, satılan çizgili defter sayısıdır; fark değildir."
  ],
  aciklama: `Sütun grafiğinde her sütunun ucu, dikey eksendeki bir sayıya denk gelir; o sayı, sütunun gösterdiği değerdir.
Adım 1: Çizgili defterin sütununun ucu 45 çizgisindedir. Demek ki 45 çizgili defter satılmıştır.
Adım 2: Resim defterinin sütununun ucu 15 çizgisindedir. 15 resim defteri satılmıştır.
Adım 3: "Kaç tane fazla" sorusu fark ister: 45 − 15 = 30.
Sağlama: 15 + 30 = 45. Resim defterlerinin sayısına 30 eklersen çizgili defterlerin sayısına ulaşırsın.
Sık yapılan hata: Sütunlardan birini okuyup orada durmak. Kökteki "kaç tane fazla" ifadesi bir çıkarma işlemi ister.
Cevap C.`
},
{
  id: "mat-va-102",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Bir marketin rafındaki ekmek sayısının gün içinde saatlere göre değişimi aşağıdaki çizgi grafiğinde verilmiştir.\n**Buna göre raftaki ekmek sayısı hangi zaman aralığında artmıştır?**",
  gorsel: `<svg viewBox="0 0 560 312" role="img" aria-label="Çizgi grafiği: saat 08.00, 10.00, 12.00, 14.00 ve 16.00'da raftaki ekmek sayısı"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Raftaki ekmek sayısının saatlere göre değişimi</text><text x="10" y="54" font-size="14" fill="currentColor">Ekmek sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="247" x2="545" y2="247" stroke-opacity="0.15"/><line x1="70" y1="232" x2="545" y2="232" stroke-opacity="0.35"/><line x1="70" y1="217" x2="545" y2="217" stroke-opacity="0.15"/><line x1="70" y1="202" x2="545" y2="202" stroke-opacity="0.35"/><line x1="70" y1="187" x2="545" y2="187" stroke-opacity="0.15"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.35"/><line x1="70" y1="157" x2="545" y2="157" stroke-opacity="0.15"/><line x1="70" y1="142" x2="545" y2="142" stroke-opacity="0.35"/><line x1="70" y1="127" x2="545" y2="127" stroke-opacity="0.15"/><line x1="70" y1="112" x2="545" y2="112" stroke-opacity="0.35"/><line x1="70" y1="97" x2="545" y2="97" stroke-opacity="0.15"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="237">10</text><text x="62" y="207">20</text><text x="62" y="177">30</text><text x="62" y="147">40</text><text x="62" y="117">50</text><text x="62" y="87">60</text></g><g stroke="currentColor" stroke-width="2"><line x1="117.5" y1="262" x2="117.5" y2="267"/><line x1="212.5" y1="262" x2="212.5" y2="267"/><line x1="307.5" y1="262" x2="307.5" y2="267"/><line x1="402.5" y1="262" x2="402.5" y2="267"/><line x1="497.5" y1="262" x2="497.5" y2="267"/></g><polyline points="117.5,142 212.5,97 307.5,127 402.5,202 497.5,232" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="117.5" cy="142" r="5.5" fill="var(--vurgu)"/><circle cx="212.5" cy="97" r="5.5" fill="var(--vurgu)"/><circle cx="307.5" cy="127" r="5.5" fill="var(--vurgu)"/><circle cx="402.5" cy="202" r="5.5" fill="var(--vurgu)"/><circle cx="497.5" cy="232" r="5.5" fill="var(--vurgu)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="117.5" y="282">08.00</text><text x="212.5" y="282">10.00</text><text x="307.5" y="282">12.00</text><text x="402.5" y="282">14.00</text><text x="497.5" y="282">16.00</text></g><text x="307.5" y="304" font-size="14" text-anchor="middle" fill="currentColor">Saat</text></svg>`,
  secenekler: ["08.00 ile 10.00 arasında", "10.00 ile 12.00 arasında", "12.00 ile 14.00 arasında", "14.00 ile 16.00 arasında"],
  dogru: 0,
  hatalar: [
    null,
    "Raf 10.00'da en dolu hâlindedir ama bu aralık bir artış aralığı değildir; 10.00'dan 12.00'ye sayı 55'ten 45'e inmiştir. Noktanın yüksekte olmasını artış sandın.",
    "Değişimin en büyük olduğu aralığı seçtin; ama sayı 45'ten 20'ye inmiştir. Büyük bir değişim, artış olmak zorunda değildir.",
    "Saatin ilerlemesini ekmek sayısının artması sandın. Bu aralıkta sayı 20'den 10'a düşmüştür."
  ],
  aciklama: `Çizgi grafiğinde iki nokta arasındaki çizgi yukarı doğru çıkıyorsa değer artmış, aşağı doğru iniyorsa azalmıştır.
Adım 1: Noktaları oku: 08.00'de 40, 10.00'da 55, 12.00'de 45, 14.00'te 20, 16.00'da 10 ekmek vardır. 55 ve 45, iki etiketin ortasındaki ara çizgilerdedir.
Adım 2: Aralıkları tek tek karşılaştır: 40 → 55 artış, 55 → 45 azalma, 45 → 20 azalma, 20 → 10 azalma.
Adım 3: Çizginin yukarı çıktığı tek aralık 08.00 ile 10.00 arasıdır. Bu saatlerde rafa yeni ekmek konmuş olmalı.
Sağlama: 55 − 40 = 15. Bu aralıkta ekmek sayısı 15 artmıştır; diğer aralıkların hepsinde sayı azalmıştır.
Sık yapılan hata: Noktanın yüksekte olmasını artış sanmak. Artışı, noktanın bir önceki noktaya göre yükselip yükselmediği gösterir.
Cevap A.`
},
{
  id: "mat-va-103",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "Bir aile, aylık harcamalarında kira, mutfak, ulaşım ve diğer giderlerin her birinin toplam harcama içindeki payını tek bakışta görmek istemektedir.\n**Buna göre bu amaca en uygun gösterim aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Çizgi grafiği", "Sıklık tablosu", "Sütun grafiği", "Daire grafiği"],
  dogru: 3,
  hatalar: [
    "Çizgi grafiği bir verinin zaman içinde nasıl değiştiğini gösterir. Burada zamana bağlı bir değişim yok; parçaların bütündeki payı soruluyor.",
    "Tablo her kalemin miktarını tek tek verir ama payların bütüne göre büyüklüğünü tek bakışta göstermez; bunun için hesap yapman gerekir.",
    "Sütun grafiği kalemleri birbiriyle karşılaştırmakta iyidir ama her kalemin bütünün ne kadarı olduğunu doğrudan göstermez.",
    null
  ],
  aciklama: `Her gösterimin güçlü olduğu bir iş vardır: sütun grafiği kategorileri karşılaştırır, çizgi grafiği zaman içindeki değişimi gösterir, daire grafiği ise bir bütünün parçalara nasıl bölündüğünü gösterir.
Adım 1: Ailenin sorusu şudur: "Her harcama kalemi, toplam harcamanın ne kadarı?" Bu bir parça-bütün sorusudur.
Adım 2: Daire grafiğinde dairenin tamamı toplam harcamayı, her dilim bir kalemi gösterir. Dilimin büyüklüğü, o kalemin bütün içindeki payını tek bakışta gösterir.
Adım 3: Öyleyse en uygun gösterim daire grafiğidir.
Sık yapılan hata: Her veri için sütun grafiğini seçmek. Sütun grafiği "hangisi daha çok?" sorusuna iyi cevap verir; "bütünün ne kadarı?" sorusuna ise daire grafiği daha iyi cevap verir.
Cevap D.`
},
{
  id: "mat-va-104",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Bir çiftlikteki A ve B kümeslerinden dört gün boyunca toplanan yumurta sayıları aşağıdaki grafikte verilmiştir.\n**Buna göre hangi gün B kümesinden toplanan yumurta sayısı, A kümesinden toplanandan fazladır?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="İki veri gruplu sütun grafiği: A ve B kümeslerinden pazartesiden perşembeye toplanan yumurta sayıları"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Kümeslerden toplanan yumurta sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">Yumurta sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="244" x2="545" y2="244" stroke-opacity="0.15"/><line x1="70" y1="226" x2="545" y2="226" stroke-opacity="0.35"/><line x1="70" y1="208" x2="545" y2="208" stroke-opacity="0.15"/><line x1="70" y1="190" x2="545" y2="190" stroke-opacity="0.35"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.15"/><line x1="70" y1="154" x2="545" y2="154" stroke-opacity="0.35"/><line x1="70" y1="136" x2="545" y2="136" stroke-opacity="0.15"/><line x1="70" y1="118" x2="545" y2="118" stroke-opacity="0.35"/><line x1="70" y1="100" x2="545" y2="100" stroke-opacity="0.15"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="231">10</text><text x="62" y="195">20</text><text x="62" y="159">30</text><text x="62" y="123">40</text><text x="62" y="87">50</text></g><rect x="83.06" y="118" width="46.31" height="144" fill="var(--vurgu)"/><rect x="129.38" y="136" width="46.31" height="126" fill="var(--vurgu2)"/><rect x="201.81" y="136" width="46.31" height="126" fill="var(--vurgu)"/><rect x="248.13" y="136" width="46.31" height="126" fill="var(--vurgu2)"/><rect x="320.56" y="100" width="46.31" height="162" fill="var(--vurgu)"/><rect x="366.88" y="154" width="46.31" height="108" fill="var(--vurgu2)"/><rect x="439.31" y="154" width="46.31" height="108" fill="var(--vurgu)"/><rect x="485.63" y="100" width="46.31" height="162" fill="var(--vurgu2)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="129.38" y="282">Pazartesi</text><text x="248.13" y="282">Salı</text><text x="366.88" y="282">Çarşamba</text><text x="485.63" y="282">Perşembe</text></g><rect x="350.8" y="42" width="14" height="14" fill="var(--vurgu)"/><text x="374.8" y="54" font-size="14" fill="currentColor">A kümesi</text><rect x="456.4" y="42" width="14" height="14" fill="var(--vurgu2)"/><text x="480.4" y="54" font-size="14" fill="currentColor">B kümesi</text></svg>`,
  secenekler: ["Pazartesi", "Salı", "Çarşamba", "Perşembe"],
  dogru: 3,
  hatalar: [
    "İki sütunun renklerini karıştırdın. Pazartesi A kümesinden 40, B kümesinden 35 yumurta toplanmıştır; fazla olan A'dır.",
    "Salı günü iki kümesten de 35'er yumurta toplanmıştır. Eşitlik, 'fazla' demek değildir.",
    "Günün en uzun sütununa baktın ama o sütun A kümesine aittir: çarşamba A 45, B 30'dur.",
    null
  ],
  aciklama: `Birden fazla veri grubu olan sütun grafiğinde her grubun rengi, grafiğin üstündeki açıklamada yazar. Karşılaştırma yapmadan önce hangi sütunun hangi gruba ait olduğunu belirle.
Adım 1: Açıklamaya göre her günün soldaki sütunu A kümesini, sağdaki sütunu B kümesini gösterir.
Adım 2: Günleri tek tek karşılaştır: pazartesi A 40, B 35; salı A 35, B 35; çarşamba A 45, B 30; perşembe A 30, B 45.
Adım 3: B'nin A'dan fazla olduğu tek gün perşembedir (45 > 30).
Sağlama: Perşembe günü B'nin sütunu, A'nın sütunundan 15 yumurta yukarıda biter.
Sık yapılan hata: Grafikteki en uzun sütunu görünce o günü seçmek. Önce sütunun hangi gruba ait olduğunu kontrol et.
Cevap D.`
},
{
  id: "mat-va-105",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "Bir spor kulübündeki 72 sporcunun branşlara göre dağılımı aşağıdaki daire grafiğinde verilmiştir.\n**Buna göre bu kulüpte voleybol oynayan kaç sporcu vardır?**",
  gorsel: `<svg viewBox="0 0 560 352" role="img" aria-label="Daire grafiği: yüzme 120 derece, voleybol 90 derece, atletizm 60 derece, güreş 90 derece"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Sporcuların branşlara göre dağılımı</text><g stroke="currentColor" stroke-width="2"><path d="M280 192 L280 82 A110 110 0 0 1 375.26 247 Z" fill="var(--vurgu)" fill-opacity="0.35"/><path d="M280 192 L375.26 247 A110 110 0 0 1 225 287.26 Z" fill="var(--vurgu2)" fill-opacity="0.45"/><path d="M280 192 L225 287.26 A110 110 0 0 1 170 192 Z" fill="var(--dolgu)"/><path d="M280 192 L170 192 A110 110 0 0 1 280 82 Z" fill="currentColor" fill-opacity="0.12"/></g><g font-size="14" fill="currentColor"><text x="385.66" y="128" text-anchor="start">Yüzme</text><text x="385.66" y="145" text-anchor="start" font-weight="bold">120°</text><text x="311.58" y="321.84" text-anchor="start">Voleybol</text><text x="311.58" y="338.84" text-anchor="start" font-weight="bold">90°</text><text x="174.34" y="250" text-anchor="end">Atletizm</text><text x="174.34" y="267" text-anchor="end" font-weight="bold">60°</text><text x="193.73" y="85.73" text-anchor="end">Güreş</text><text x="193.73" y="102.73" text-anchor="end" font-weight="bold">90°</text></g></svg>`,
  secenekler: ["12", "18", "24", "90"],
  dogru: 1,
  hatalar: [
    "90°'lik dilimi dairenin altıda biri sandın: 72 : 6 = 12. Oysa 90°, 360°'nin dörtte biridir.",
    null,
    "Voleybol yerine yüzme dilimine (120°) baktın. 72'nin üçte biri olan 24, yüzmecilerin sayısıdır.",
    "Merkez açısını sporcu sayısı sandın. 90 bir açı ölçüsüdür; sporcu sayısını bulmak için bu açının 360°'nin ne kadarı olduğuna bakmalısın."
  ],
  aciklama: `Daire grafiğinde dairenin tamamı (360°) verinin tamamını gösterir. Bir dilimin merkez açısı 360°'nin hangi kesriyse, o dilim de toplamın o kesri kadardır.
Adım 1: Voleybol diliminin merkez açısı 90°'dir. [[90|360]] = [[1|4]] olduğundan voleybol, sporcuların dörtte birini gösterir.
Adım 2: 72'nin dörtte biri: 72 : 4 = 18.
Sağlama: Diğer dilimleri de hesapla: yüzme [[120|360]] · 72 = 24, atletizm [[60|360]] · 72 = 12, güreş 18. Toplam 24 + 18 + 12 + 18 = 72. Tutuyor.
Sık yapılan hata: Merkez açısını kişi sayısı sanmak. Açı yalnızca payı gösterir; kişi sayısı için toplamı da kullanmalısın.
Cevap B.`
},
{
  id: "mat-va-106",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Duru'nun beş hafta boyunca her pazar koştuğu mesafeler aşağıdaki çizgi grafiğinde verilmiştir.\n**Buna göre Duru kaç hafta 4 kilometreden fazla koşmuştur?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Çizgi grafiği: Duru'nun beş haftada koştuğu mesafeler"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Duru'nun haftalara göre koştuğu mesafe</text><text x="10" y="54" font-size="14" fill="currentColor">Mesafe (km)</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="237" x2="545" y2="237" stroke-opacity="0.35"/><line x1="70" y1="212" x2="545" y2="212" stroke-opacity="0.35"/><line x1="70" y1="187" x2="545" y2="187" stroke-opacity="0.35"/><line x1="70" y1="162" x2="545" y2="162" stroke-opacity="0.35"/><line x1="70" y1="137" x2="545" y2="137" stroke-opacity="0.35"/><line x1="70" y1="112" x2="545" y2="112" stroke-opacity="0.35"/><line x1="70" y1="87" x2="545" y2="87" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="73" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="242">1</text><text x="62" y="217">2</text><text x="62" y="192">3</text><text x="62" y="167">4</text><text x="62" y="142">5</text><text x="62" y="117">6</text><text x="62" y="92">7</text></g><g stroke="currentColor" stroke-width="2"><line x1="117.5" y1="262" x2="117.5" y2="267"/><line x1="212.5" y1="262" x2="212.5" y2="267"/><line x1="307.5" y1="262" x2="307.5" y2="267"/><line x1="402.5" y1="262" x2="402.5" y2="267"/><line x1="497.5" y1="262" x2="497.5" y2="267"/></g><polyline points="117.5,187 212.5,162 307.5,137 402.5,162 497.5,112" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="117.5" cy="187" r="5.5" fill="var(--vurgu)"/><circle cx="212.5" cy="162" r="5.5" fill="var(--vurgu)"/><circle cx="307.5" cy="137" r="5.5" fill="var(--vurgu)"/><circle cx="402.5" cy="162" r="5.5" fill="var(--vurgu)"/><circle cx="497.5" cy="112" r="5.5" fill="var(--vurgu)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="117.5" y="282">1. hafta</text><text x="212.5" y="282">2. hafta</text><text x="307.5" y="282">3. hafta</text><text x="402.5" y="282">4. hafta</text><text x="497.5" y="282">5. hafta</text></g></svg>`,
  secenekler: ["1", "2", "3", "4"],
  dogru: 1,
  hatalar: [
    "Yalnızca en yüksek noktayı (6 km) saydın. 3. haftada koştuğu 5 km de 4 km'den fazladır.",
    null,
    "Çizginin yükseldiği aralıkları saydın (1.→2., 2.→3. ve 4.→5. hafta). Soru aralıkları değil, 4 km'den fazla koşulan haftaları soruyor.",
    "4 km koştuğu haftaları da saydın. '4 kilometreden fazla' ifadesinde 4 dahil değildir."
  ],
  aciklama: `Çizgi grafiğinde her nokta bir haftayı gösterir; noktanın yüksekliği o hafta koşulan mesafedir.
Adım 1: Noktaları oku: 1. hafta 3 km, 2. hafta 4 km, 3. hafta 5 km, 4. hafta 4 km, 5. hafta 6 km.
Adım 2: 4'ten büyük olanları seç: 5 km (3. hafta) ve 6 km (5. hafta). 4 km koşulan haftalar "fazla" sayılmaz.
Adım 3: Duru 2 hafta 4 kilometreden fazla koşmuştur.
Sağlama: Grafikte 4 çizgisine bak: iki nokta bu çizginin üstünde, iki nokta tam üzerinde, bir nokta altındadır.
Sık yapılan hata: Sınırdaki değeri dahil etmek. "Fazla" ve "az" sınırı içermez; "en az" ve "en çok" içerir.
Cevap B.`
},
{
  id: "mat-va-107",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "Bir sınıftaki 24 öğrencinin her biri yalnızca bir kulübe üyedir; bunlardan 6'sı satranç kulübündedir. Öğrencilerin kulüplere göre dağılımı daire grafiğiyle gösterilecektir.\n**Buna göre satranç kulübünü gösteren dilimin merkez açısı kaç derece olmalıdır?**",
  gorsel: null,
  secenekler: ["15", "25", "60", "90"],
  dogru: 3,
  hatalar: [
    "360 : 24 = 15 ile bir öğrenciye düşen açıyı buldun ama bunu 6 öğrenciyle çarpmadın.",
    "Satranççıların payını yüzde olarak buldun (%25) ama bu payı dereceye çevirmedin.",
    "360°'yi toplam öğrenci sayısına değil, satranç kulübündeki öğrenci sayısına böldün: 360 : 6 = 60.",
    null
  ],
  aciklama: `Daire grafiğinde bir dilimin merkez açısı, o dilimin toplam içindeki payı kadar 360°'dir: merkez açısı = [[parça|bütün]] · 360°.
Adım 1: Her öğrenci tek bir kulübe üye olduğu için dairenin tamamı sınıftaki 24 öğrenciyi gösterir. Satranç kulübündekilerin payı: [[6|24]] = [[1|4]].
Adım 2: Merkez açısı: [[1|4]] · 360° = 90°.
Sağlama: Bir öğrenciye 360 : 24 = 15° düşer; 6 öğrenciye 6 · 15 = 90° düşer.
Sık yapılan hata: Payı yüzde olarak bulup (%25) orada durmak. Daire grafiğinde dilim, derece ile çizilir.
Cevap D.`
},
{
  id: "mat-va-108",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Bir okul basketbol takımındaki Ece, Naz ve Selin'in ilk üç maçta attıkları sayılar aşağıdaki grafikte verilmiştir.\n**Buna göre Ece 2. maçta kaç sayı atmıştır?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Üç veri gruplu sütun grafiği: Ece, Naz ve Selin'in üç maçta attığı sayılar"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Oyuncuların maçlara göre attığı sayı</text><text x="10" y="54" font-size="14" fill="currentColor">Sayı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="240" x2="545" y2="240" stroke-opacity="0.35"/><line x1="70" y1="218" x2="545" y2="218" stroke-opacity="0.35"/><line x1="70" y1="196" x2="545" y2="196" stroke-opacity="0.35"/><line x1="70" y1="174" x2="545" y2="174" stroke-opacity="0.35"/><line x1="70" y1="152" x2="545" y2="152" stroke-opacity="0.35"/><line x1="70" y1="130" x2="545" y2="130" stroke-opacity="0.35"/><line x1="70" y1="108" x2="545" y2="108" stroke-opacity="0.35"/><line x1="70" y1="86" x2="545" y2="86" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="72" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="245">2</text><text x="62" y="223">4</text><text x="62" y="201">6</text><text x="62" y="179">8</text><text x="62" y="157">10</text><text x="62" y="135">12</text><text x="62" y="113">14</text><text x="62" y="91">16</text></g><rect x="87.42" y="130" width="41.17" height="132" fill="var(--vurgu)"/><rect x="128.58" y="152" width="41.17" height="110" fill="var(--vurgu2)"/><rect x="169.75" y="174" width="41.17" height="88" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="245.75" y="174" width="41.17" height="88" fill="var(--vurgu)"/><rect x="286.92" y="108" width="41.17" height="154" fill="var(--vurgu2)"/><rect x="328.08" y="152" width="41.17" height="110" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="404.08" y="108" width="41.17" height="154" fill="var(--vurgu)"/><rect x="445.25" y="196" width="41.17" height="66" fill="var(--vurgu2)"/><rect x="486.42" y="130" width="41.17" height="132" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="149.17" y="282">1. maç</text><text x="307.5" y="282">2. maç</text><text x="465.83" y="282">3. maç</text></g><rect x="351.8" y="42" width="14" height="14" fill="var(--vurgu)"/><text x="375.8" y="54" font-size="14" fill="currentColor">Ece</text><rect x="416.4" y="42" width="14" height="14" fill="var(--vurgu2)"/><text x="440.4" y="54" font-size="14" fill="currentColor">Naz</text><rect x="481" y="42" width="14" height="14" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="505" y="54" font-size="14" fill="currentColor">Selin</text></svg>`,
  secenekler: ["8", "10", "12", "14"],
  dogru: 0,
  hatalar: [
    null,
    "Renkleri karıştırıp 2. maçta Selin'in sütununu okudun. Selin o maçta 10 sayı atmıştır.",
    "Doğru oyuncuya baktın ama yanlış maçı okudun: Ece 12 sayıyı 1. maçta atmıştır.",
    "2. maçın en uzun sütununu okudun; o sütun Naz'a aittir."
  ],
  aciklama: `Üç veri grubu olan sütun grafiğinde her maçın üstünde üç sütun vardır; hangi sütunun kime ait olduğunu grafikteki açıklama gösterir.
Adım 1: Açıklamaya göre her maçta soldan sağa Ece, Naz ve Selin'in sütunları yer alır; Ece'nin sütunu her grubun en solundadır.
Adım 2: "2. maç" grubunu bul ve en soldaki sütunun ucunu dikey eksende oku: 8.
Sağlama: 2. maçta üç sütun sırasıyla 8, 14 ve 10'u gösterir; Ece'ninki bunların ilkidir.
Sık yapılan hata: Bir grubun en uzun sütununu okumak. Önce doğru grubu (maçı), sonra doğru rengi (oyuncuyu) bul.
Cevap A.`
},
{
  id: "mat-va-109",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 1,
  soru: "Bir veteriner, bakımını üstlendiği bir yavru kedinin ilk on iki haftada ağırlığının nasıl değiştiğini göstermek istemektedir.\n**Buna göre bu amaca en uygun gösterim aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Çizgi grafiği", "Daire grafiği", "Sıklık tablosu", "Sütun grafiği"],
  dogru: 0,
  hatalar: [
    null,
    "Daire grafiği bir bütünün parçalara nasıl bölündüğünü gösterir. Haftalık ağırlıklar bir bütünün parçaları değildir.",
    "Tablo her haftanın ağırlığını tek tek verir ama artışın gidişatını tek bakışta göstermez.",
    "Sütun grafiği ayrı kategorileri karşılaştırmakta iyidir; bir büyüklüğün zamanla değişimini ve gidişatını çizgi grafiği daha açık gösterir."
  ],
  aciklama: `Bir büyüklüğün zamanla nasıl değiştiğini göstermek için çizgi grafiği kullanılır. Yatay eksende zaman, dikey eksende ölçülen büyüklük yer alır; noktaları birleştiren çizgi artışı ve azalışı gösterir.
Adım 1: Burada ölçülen büyüklük yavru kedinin ağırlığıdır ve bu ağırlık haftadan haftaya değişir.
Adım 2: Veri zaman sırasına bağlı olduğu için noktaları birleştiren bir çizgi, ağırlığın hangi haftalarda hızlı, hangi haftalarda yavaş arttığını tek bakışta gösterir.
Adım 3: Öyleyse en uygun gösterim çizgi grafiğidir.
Sık yapılan hata: Daire grafiğini her türlü veri için kullanmak. Daire grafiği bir bütünün parçalarını gösterir; haftalık ağırlıkların toplamı anlamlı bir bütün değildir.
Cevap A.`
},
{
  id: "mat-va-110",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Bir hayvan barınağına yılın ilk dört ayında yardıma gelen gönüllülerin sayısı aşağıdaki sütun grafiğinde verilmiştir.\n**Buna göre bu dört ayda barınağa toplam kaç gönüllü gelmiştir?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Sütun grafiği: ocak, şubat, mart ve nisan aylarında barınağa gelen gönüllü sayısı"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Barınağa aylara göre gelen gönüllü sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">Gönüllü sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="244" x2="545" y2="244" stroke-opacity="0.15"/><line x1="70" y1="226" x2="545" y2="226" stroke-opacity="0.35"/><line x1="70" y1="208" x2="545" y2="208" stroke-opacity="0.15"/><line x1="70" y1="190" x2="545" y2="190" stroke-opacity="0.35"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.15"/><line x1="70" y1="154" x2="545" y2="154" stroke-opacity="0.35"/><line x1="70" y1="136" x2="545" y2="136" stroke-opacity="0.15"/><line x1="70" y1="118" x2="545" y2="118" stroke-opacity="0.35"/><line x1="70" y1="100" x2="545" y2="100" stroke-opacity="0.15"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="231">4</text><text x="62" y="195">8</text><text x="62" y="159">12</text><text x="62" y="123">16</text><text x="62" y="87">20</text></g><rect x="101.38" y="136" width="56" height="126" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="220.13" y="190" width="56" height="72" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="338.88" y="154" width="56" height="108" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="457.63" y="100" width="56" height="162" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="129.38" y="282">Ocak</text><text x="248.13" y="282">Şubat</text><text x="366.88" y="282">Mart</text><text x="485.63" y="282">Nisan</text></g></svg>`,
  secenekler: ["34", "44", "48", "52"],
  dogru: 3,
  hatalar: [
    "Nisan ayının sütununu toplama katmadın: 14 + 8 + 12 = 34.",
    "Şubat ayının sütununu toplama katmadın: 14 + 12 + 18 = 44.",
    "Etiketsiz ara çizgilerde biten sütunları bir alttaki sayıyla okudun: 14'ü 12, 18'i 16 aldın.",
    null
  ],
  aciklama: `Dikey eksende yalnızca 0, 4, 8, 12, 16 ve 20 yazsa da aradaki çizgiler de bir değer gösterir. İki etiket arasındaki fark 4 olduğuna göre ara çizgi iki etiketin tam ortasıdır; yani ölçek ikişer ikişer artar.
Adım 1: Sütunları oku: ocak 14 (12 ile 16'nın ortası), şubat 8, mart 12, nisan 18 (16 ile 20'nin ortası).
Adım 2: Topla: 14 + 8 + 12 + 18 = 52.
Sağlama: Sayıları uygun biçimde grupla: (14 + 18) + (8 + 12) = 32 + 20 = 52.
Sık yapılan hata: Ara çizgide biten sütunu en yakın etikete yuvarlamak. Önce ölçeğin kaçar kaçar arttığını belirle.
Cevap D.`
},
{
  id: "mat-va-111",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Aynı anda yakılan K ve L mumlarının boylarının saatlere göre değişimi aşağıdaki çizgi grafiğinde verilmiştir.\n**Buna göre iki mumun boyu kaçıncı saatin sonunda birbirine eşit olmuştur?**",
  gorsel: `<svg viewBox="0 0 560 312" role="img" aria-label="İki veri gruplu çizgi grafiği: K ve L mumlarının başlangıçtan 4. saate kadar boyları"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Mumların boyunun zamana göre değişimi</text><text x="10" y="54" font-size="14" fill="currentColor">Boy (cm)</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="247" x2="545" y2="247" stroke-opacity="0.15"/><line x1="70" y1="232" x2="545" y2="232" stroke-opacity="0.35"/><line x1="70" y1="217" x2="545" y2="217" stroke-opacity="0.15"/><line x1="70" y1="202" x2="545" y2="202" stroke-opacity="0.35"/><line x1="70" y1="187" x2="545" y2="187" stroke-opacity="0.15"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.35"/><line x1="70" y1="157" x2="545" y2="157" stroke-opacity="0.15"/><line x1="70" y1="142" x2="545" y2="142" stroke-opacity="0.35"/><line x1="70" y1="127" x2="545" y2="127" stroke-opacity="0.15"/><line x1="70" y1="112" x2="545" y2="112" stroke-opacity="0.35"/><line x1="70" y1="97" x2="545" y2="97" stroke-opacity="0.15"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="237">4</text><text x="62" y="207">8</text><text x="62" y="177">12</text><text x="62" y="147">16</text><text x="62" y="117">20</text><text x="62" y="87">24</text></g><g stroke="currentColor" stroke-width="2"><line x1="117.5" y1="262" x2="117.5" y2="267"/><line x1="212.5" y1="262" x2="212.5" y2="267"/><line x1="307.5" y1="262" x2="307.5" y2="267"/><line x1="402.5" y1="262" x2="402.5" y2="267"/><line x1="497.5" y1="262" x2="497.5" y2="267"/></g><polyline points="117.5,82 212.5,112 307.5,142 402.5,172 497.5,202" fill="none" stroke="var(--vurgu)" stroke-width="3"/><polyline points="117.5,127 212.5,142 307.5,157 402.5,172 497.5,187" fill="none" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="9 5"/><circle cx="117.5" cy="82" r="5.5" fill="var(--vurgu)"/><circle cx="212.5" cy="112" r="5.5" fill="var(--vurgu)"/><circle cx="307.5" cy="142" r="5.5" fill="var(--vurgu)"/><circle cx="402.5" cy="172" r="5.5" fill="var(--vurgu)"/><circle cx="497.5" cy="202" r="5.5" fill="var(--vurgu)"/><rect x="112.5" y="122" width="10" height="10" fill="var(--vurgu2)"/><rect x="207.5" y="137" width="10" height="10" fill="var(--vurgu2)"/><rect x="302.5" y="152" width="10" height="10" fill="var(--vurgu2)"/><rect x="397.5" y="167" width="10" height="10" fill="var(--vurgu2)"/><rect x="492.5" y="182" width="10" height="10" fill="var(--vurgu2)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="117.5" y="282">Başlangıç</text><text x="212.5" y="282">1. saat</text><text x="307.5" y="282">2. saat</text><text x="402.5" y="282">3. saat</text><text x="497.5" y="282">4. saat</text></g><text x="307.5" y="304" font-size="14" text-anchor="middle" fill="currentColor">Süre</text><line x1="383.6" y1="49" x2="403.6" y2="49" stroke="var(--vurgu)" stroke-width="3"/><circle cx="393.6" cy="49" r="5.5" fill="var(--vurgu)"/><text x="407.6" y="54" font-size="14" fill="currentColor">K mumu</text><line x1="472.8" y1="49" x2="492.8" y2="49" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="9 5"/><rect x="477.8" y="44" width="10" height="10" fill="var(--vurgu2)"/><text x="496.8" y="54" font-size="14" fill="currentColor">L mumu</text></svg>`,
  secenekler: ["1. saatin sonunda", "2. saatin sonunda", "3. saatin sonunda", "4. saatin sonunda"],
  dogru: 2,
  hatalar: [
    "1. saatin sonunda K mumu 20 cm, L mumu 16 cm'dir. İki çizginin birbirine yaklaştığını görünce eşitlendiğini sandın.",
    "2. saatin sonunda K mumu 16 cm, L mumu 14 cm'dir; çizgiler yaklaşmış ama henüz kesişmemiştir.",
    null,
    "Kesişmeden sonraki noktayı seçtin. 4. saatin sonunda K mumu 8 cm, L mumu 10 cm'dir; artık L daha uzundur."
  ],
  aciklama: `İki çizginin kesiştiği nokta, iki veri grubunun o anda eşit olduğunu gösterir.
Adım 1: Her saat için iki mumun boyunu oku: başlangıçta K 24, L 18; 1. saatte K 20, L 16; 2. saatte K 16, L 14; 3. saatte K 12, L 12; 4. saatte K 8, L 10 cm.
Adım 2: Değerlerin eşit olduğu an 3. saatin sonudur; iki çizgi de bu noktada 12 cm'dedir.
Sağlama: 3. saatten önce K'nin çizgisi L'ninkinin üstünde, sonra altındadır; çizgiler yer değiştirdiğine göre 3. saatteki noktada kesişmişlerdir.
Sık yapılan hata: İki çizginin birbirine yaklaştığı ilk noktayı kesişme sanmak. Eşitlik için iki değerin aynı olması gerekir.
Cevap C.`
},
{
  id: "mat-va-112",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 1,
  soru: "Bir ayakkabı mağazasında bir günde satılan ayakkabıların numaralarına göre sayısı aşağıdaki sütun grafiğinde verilmiştir.\n**Buna göre satılan ayakkabı numaralarının tepe değeri kaçtır?**",
  gorsel: `<svg viewBox="0 0 560 312" role="img" aria-label="Sütun grafiği: 36, 37, 38, 39 ve 40 numara ayakkabılardan satılan çift sayısı"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Satılan ayakkabıların numaralarına göre sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">Satılan çift sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="244" x2="545" y2="244" stroke-opacity="0.35"/><line x1="70" y1="226" x2="545" y2="226" stroke-opacity="0.35"/><line x1="70" y1="208" x2="545" y2="208" stroke-opacity="0.35"/><line x1="70" y1="190" x2="545" y2="190" stroke-opacity="0.35"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.35"/><line x1="70" y1="154" x2="545" y2="154" stroke-opacity="0.35"/><line x1="70" y1="136" x2="545" y2="136" stroke-opacity="0.35"/><line x1="70" y1="118" x2="545" y2="118" stroke-opacity="0.35"/><line x1="70" y1="100" x2="545" y2="100" stroke-opacity="0.35"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="249">1</text><text x="62" y="231">2</text><text x="62" y="213">3</text><text x="62" y="195">4</text><text x="62" y="177">5</text><text x="62" y="159">6</text><text x="62" y="141">7</text><text x="62" y="123">8</text><text x="62" y="105">9</text><text x="62" y="87">10</text></g><rect x="91.38" y="190" width="52.25" height="72" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="186.38" y="154" width="52.25" height="108" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="281.38" y="100" width="52.25" height="162" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="376.38" y="136" width="52.25" height="126" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="471.38" y="208" width="52.25" height="54" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="117.5" y="282">36</text><text x="212.5" y="282">37</text><text x="307.5" y="282">38</text><text x="402.5" y="282">39</text><text x="497.5" y="282">40</text></g><text x="307.5" y="304" font-size="14" text-anchor="middle" fill="currentColor">Ayakkabı numarası</text></svg>`,
  secenekler: ["4", "9", "38", "40"],
  dogru: 2,
  hatalar: [
    "Açıklığı buldun: 40 − 36 = 4. Açıklık en büyük ve en küçük değerin farkıdır; tepe değer değildir.",
    "En uzun sütunun yüksekliğini yazdın. 9, 38 numaranın kaç kez satıldığını gösterir; tepe değer ise en çok tekrar eden numaranın kendisidir.",
    null,
    "En büyük ayakkabı numarasını seçtin. Tepe değer en büyük değer değil, en çok tekrar eden değerdir."
  ],
  aciklama: `Bir veri grubunda en çok tekrar eden değere tepe değer denir. Sütun grafiğinde tepe değer, en uzun sütunun altında yazan değerdir.
Adım 1: En uzun sütunu bul: 9 birim yüksekliğindeki sütun, 38 numaraya aittir.
Adım 2: Bu sütun, o gün 38 numara ayakkabıdan 9 çift satıldığını gösterir. En çok tekrar eden değer 38'dir.
Sağlama: Diğer numaraların sıklıkları 4, 6, 7 ve 3'tür; hepsi 9'dan küçüktür.
Sık yapılan hata: Tepe değer sorulduğunda sütunun yüksekliğini (sıklığı) yazmak. Soru "hangi numara?" diye soruyor; cevap bir ayakkabı numarası olmalıdır.
Cevap C.`
},
{
  id: "mat-va-113",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir müzik kursunda çalgı eğitimi alan öğrencilerin çalgılara göre sayısı aşağıdaki tabloda verilmiştir. Kurstaki dört öğrenci, bu verileri birer sütun grafiğiyle göstermiştir.\n**Buna göre tablodaki verileri doğru gösteren grafik hangisidir?**",
  gorsel: `<table class="tablo"><tr><th>Çalgı</th><th>Gitar</th><th>Keman</th><th>Piyano</th><th>Ney</th></tr><tr><td>Öğrenci sayısı</td><td>12</td><td>6</td><td>10</td><td>8</td></tr></table><svg viewBox="0 0 560 448" role="img" aria-label="Dört küçük sütun grafiği: K, L, M ve N grafikleri gitar, keman, piyano ve ney için öğrenci sayılarını gösteriyor"><text x="10" y="20" font-size="14" fill="currentColor">Dikey eksenler öğrenci sayısını gösterir.</text><text x="8" y="50" font-size="15" font-weight="bold" fill="currentColor">K grafiği</text><g stroke="currentColor" stroke-width="1"><line x1="46" y1="177" x2="272" y2="177" stroke-opacity="0.15"/><line x1="46" y1="156" x2="272" y2="156" stroke-opacity="0.35"/><line x1="46" y1="135" x2="272" y2="135" stroke-opacity="0.15"/><line x1="46" y1="114" x2="272" y2="114" stroke-opacity="0.35"/><line x1="46" y1="93" x2="272" y2="93" stroke-opacity="0.15"/><line x1="46" y1="72" x2="272" y2="72" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="46" y1="58" x2="46" y2="198"/><line x1="46" y1="198" x2="272" y2="198"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="38" y="203">0</text><text x="38" y="161">4</text><text x="38" y="119">8</text><text x="38" y="77">12</text></g><rect x="59.25" y="72" width="30" height="126" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="115.75" y="114" width="30" height="84" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="172.25" y="93" width="30" height="105" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="228.75" y="135" width="30" height="63" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="74.25" y="218">Gitar</text><text x="130.75" y="218">Keman</text><text x="187.25" y="218">Piyano</text><text x="243.75" y="218">Ney</text></g><text x="288" y="50" font-size="15" font-weight="bold" fill="currentColor">L grafiği</text><g stroke="currentColor" stroke-width="1"><line x1="326" y1="177" x2="552" y2="177" stroke-opacity="0.15"/><line x1="326" y1="156" x2="552" y2="156" stroke-opacity="0.35"/><line x1="326" y1="135" x2="552" y2="135" stroke-opacity="0.15"/><line x1="326" y1="114" x2="552" y2="114" stroke-opacity="0.35"/><line x1="326" y1="93" x2="552" y2="93" stroke-opacity="0.15"/><line x1="326" y1="72" x2="552" y2="72" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="326" y1="58" x2="326" y2="198"/><line x1="326" y1="198" x2="552" y2="198"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="318" y="203">0</text><text x="318" y="161">2</text><text x="318" y="119">4</text><text x="318" y="77">6</text></g><rect x="339.25" y="72" width="30" height="126" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="395.75" y="135" width="30" height="63" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="452.25" y="93" width="30" height="105" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="508.75" y="114" width="30" height="84" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="354.25" y="218">Gitar</text><text x="410.75" y="218">Keman</text><text x="467.25" y="218">Piyano</text><text x="523.75" y="218">Ney</text></g><text x="8" y="260" font-size="15" font-weight="bold" fill="currentColor">M grafiği</text><g stroke="currentColor" stroke-width="1"><line x1="46" y1="387" x2="272" y2="387" stroke-opacity="0.15"/><line x1="46" y1="366" x2="272" y2="366" stroke-opacity="0.35"/><line x1="46" y1="345" x2="272" y2="345" stroke-opacity="0.15"/><line x1="46" y1="324" x2="272" y2="324" stroke-opacity="0.35"/><line x1="46" y1="303" x2="272" y2="303" stroke-opacity="0.15"/><line x1="46" y1="282" x2="272" y2="282" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="46" y1="268" x2="46" y2="408"/><line x1="46" y1="408" x2="272" y2="408"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="38" y="413">0</text><text x="38" y="371">4</text><text x="38" y="329">8</text><text x="38" y="287">12</text></g><rect x="59.25" y="303" width="30" height="105" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="115.75" y="345" width="30" height="63" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="172.25" y="282" width="30" height="126" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="228.75" y="324" width="30" height="84" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="74.25" y="428">Gitar</text><text x="130.75" y="428">Keman</text><text x="187.25" y="428">Piyano</text><text x="243.75" y="428">Ney</text></g><text x="288" y="260" font-size="15" font-weight="bold" fill="currentColor">N grafiği</text><g stroke="currentColor" stroke-width="1"><line x1="326" y1="387" x2="552" y2="387" stroke-opacity="0.15"/><line x1="326" y1="366" x2="552" y2="366" stroke-opacity="0.35"/><line x1="326" y1="345" x2="552" y2="345" stroke-opacity="0.15"/><line x1="326" y1="324" x2="552" y2="324" stroke-opacity="0.35"/><line x1="326" y1="303" x2="552" y2="303" stroke-opacity="0.15"/><line x1="326" y1="282" x2="552" y2="282" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="326" y1="268" x2="326" y2="408"/><line x1="326" y1="408" x2="552" y2="408"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="318" y="413">0</text><text x="318" y="371">4</text><text x="318" y="329">8</text><text x="318" y="287">12</text></g><rect x="339.25" y="282" width="30" height="126" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="395.75" y="345" width="30" height="63" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="452.25" y="303" width="30" height="105" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="508.75" y="324" width="30" height="84" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="354.25" y="428">Gitar</text><text x="410.75" y="428">Keman</text><text x="467.25" y="428">Piyano</text><text x="523.75" y="428">Ney</text></g></svg>`,
  secenekler: ["K grafiği", "L grafiği", "M grafiği", "N grafiği"],
  dogru: 3,
  hatalar: [
    "K grafiğinde keman ile ney sütunları yer değiştirmiştir: kemanı 8, neyi 6 gösteriyor. Tabloda keman 6, ney 8'dir.",
    "L grafiğinde sütunların boyları doğru oranda ama eksendeki sayılar yarıya inmiştir; bu grafik gitarı 6 öğrenci gösteriyor. Sütunların biçimine bakıp ekseni okumadın.",
    "M grafiğinde gitar ile piyano sütunları yer değiştirmiştir: gitarı 10, piyanoyu 12 gösteriyor.",
    null
  ],
  aciklama: `Bir tabloyu sütun grafiğine dönüştürürken her sütunun boyu, dikey eksendeki ölçeğe göre tablodaki sayıya eşit olmalıdır. Grafiği kontrol ederken hem sütunların sırasına hem de eksendeki sayılara bakılır.
Adım 1: Tablodaki değerler: gitar 12, keman 6, piyano 10, ney 8.
Adım 2: Grafikleri tek tek oku. K: 12, 8, 10, 6 (keman ile ney yer değiştirmiş). L: 6, 3, 5, 4 (ölçek yanlış). M: 10, 6, 12, 8 (gitar ile piyano yer değiştirmiş). N: 12, 6, 10, 8.
Adım 3: Tablodaki dört sayıyı da doğru gösteren grafik N'dir.
Sık yapılan hata: Yalnızca sütunların biçimine bakmak. L grafiğinde sütunların boyları doğru görünür ama eksendeki sayılar yanlıştır; grafik okunurken eksen de okunur.
Cevap D.`
},
{
  id: "mat-va-114",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir okulun öğrenci meclisi seçiminde dört aday sırasıyla 104, 100, 80 ve 76 oy almıştır. Seçim kurulu sonuçları daire grafiğiyle duyurmayı düşünürken bir öğrenci, bu veriler için sütun grafiğinin daha uygun olduğunu söylemiştir.\n**Buna göre sütun grafiğinin bu veriler için daire grafiğine göre üstün yönü aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Oyları birbirine yakın adaylardan hangisinin önde olduğunu kolayca gösterir.", "Her adayın oyunun toplam oyun kaçta kaçı olduğunu bir bakışta gösterir.", "Adayların oylarının seçim günü saatlere göre nasıl değiştiğini gösterir.", "Dört adayın toplam oyunu ayrıca bir hesap yapmaya gerek bırakmadan gösterir."],
  dogru: 0,
  hatalar: [
    null,
    "Bu, daire grafiğinin üstün yönüdür: dairenin tamamı toplam oyu, her dilim bir adayın payını gösterir. Sütun grafiğinde payı görmek için önce toplamı bulup bölme yapman gerekir.",
    "Zaman içindeki değişimi çizgi grafiği gösterir. Burada saatlere göre yapılmış ölçümler yok; her adayın tek bir oy sayısı var.",
    "Sütun grafiğinde toplam oy doğrudan görünmez; dört sütunun değerini okuyup toplaman gerekir. Bu, sütun grafiğinin bir üstünlüğü değildir."
  ],
  aciklama: `Her gösterimin güçlü ve zayıf yönleri vardır. Sütun grafiğinde her değer, ortak bir eksene göre okunan bir sütunun boyuyla gösterilir; daire grafiğinde ise her değer, bir dilimin büyüklüğüyle gösterilir.
Adım 1: Oyların toplamı 104 + 100 + 80 + 76 = 360'tır. Daire grafiğinde her oy 1°'lik bir dilime karşılık gelir; dilimler 104°, 100°, 80° ve 76° olur.
Adım 2: 104° ile 100°'lik iki dilimden hangisinin büyük olduğunu gözle ayırt etmek zordur; 80° ile 76° için de durum aynıdır. Sütun grafiğinde ise sütunların uçları aynı eksende okunur; 104'ün 100'den yüksek olduğu hemen görülür.
Adım 3: B şıkkı daire grafiğinin üstün yönüdür, C şıkkı çizgi grafiğinin işidir, D şıkkındaki toplamı ise iki grafik de hesap yapmadan göstermez. Doğru cevap A'dır.
Sık yapılan hata: Daire grafiğinin güçlü yönünü sütun grafiğine yüklemek. Soru, sütun grafiğinin daire grafiğine göre üstünlüğünü soruyor; önce hangi grafiğin hangi işte iyi olduğunu ayır.
Cevap A.`
},
{
  id: "mat-va-115",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir okulun spor şenliğinde satılan içeceklerin türlere göre sayısı aşağıdaki sütun grafiğinde verilmiştir. Şenliği düzenleyen öğrenciler, bu verileri okul panosunda daire grafiğiyle göstermek istemektedir.\n**Buna göre limonatayı gösteren dilimin merkez açısı kaç derece olur?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Sütun grafiği: ayran, limonata, meyve suyu ve süt satış sayıları"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Satılan içeceklerin türlere göre sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">İçecek sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="237" x2="545" y2="237" stroke-opacity="0.35"/><line x1="70" y1="212" x2="545" y2="212" stroke-opacity="0.35"/><line x1="70" y1="187" x2="545" y2="187" stroke-opacity="0.35"/><line x1="70" y1="162" x2="545" y2="162" stroke-opacity="0.35"/><line x1="70" y1="137" x2="545" y2="137" stroke-opacity="0.35"/><line x1="70" y1="112" x2="545" y2="112" stroke-opacity="0.35"/><line x1="70" y1="87" x2="545" y2="87" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="73" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="242">5</text><text x="62" y="217">10</text><text x="62" y="192">15</text><text x="62" y="167">20</text><text x="62" y="142">25</text><text x="62" y="117">30</text><text x="62" y="92">35</text></g><rect x="101.38" y="162" width="56" height="100" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="220.13" y="112" width="56" height="150" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="338.88" y="187" width="56" height="75" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="457.63" y="137" width="56" height="125" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="129.38" y="282">Ayran</text><text x="248.13" y="282">Limonata</text><text x="366.88" y="282">Meyve suyu</text><text x="485.63" y="282">Süt</text></g></svg>`,
  secenekler: ["30", "108", "120", "144"],
  dogru: 2,
  hatalar: [
    "Sütunun gösterdiği sayıyı açı sandın. 30, satılan limonata sayısıdır; merkez açısı değildir.",
    "Toplamı 100 kabul edip 30'u yüzde gibi kullandın: 360'ın %30'u 108'dir. Oysa toplam 90'dır.",
    null,
    "Toplamı bulurken meyve suyunu (15) atladın: 20 + 30 + 25 = 75 aldın. [[30|75]] · 360° = 144° olur."
  ],
  aciklama: `Sütun grafiğini daire grafiğine dönüştürmek için önce toplamı bulur, sonra her değerin toplam içindeki payını 360° ile çarparsın.
Adım 1: Sütunları oku ve topla: 20 + 30 + 15 + 25 = 90 içecek.
Adım 2: Limonatanın payı: [[30|90]] = [[1|3]].
Adım 3: Merkez açısı: [[1|3]] · 360° = 120°.
Sağlama: Bütün dilimleri hesapla: ayran 80°, limonata 120°, meyve suyu 60°, süt 100°. Toplam 360°.
Sık yapılan hata: Toplamı 100 sanmak. Değerler yüzde değil sayıdır; payı bulmak için gerçek toplamı kullanmalısın.
Cevap C.`
},
{
  id: "mat-va-116",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir yaz kampındaki öğrencilerin katıldıkları atölyelere göre dağılımı aşağıdaki daire grafiğinde verilmiştir. Her öğrenci tek bir atölyeye katılmıştır ve seramik atölyesinde 10 öğrenci vardır.\n**Buna göre robotik atölyesinde kaç öğrenci vardır?**",
  gorsel: `<svg viewBox="0 0 560 352" role="img" aria-label="Daire grafiği: robotik 150 derece, tiyatro 90 derece, seramik 60 derece, fotoğraf 60 derece"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Öğrencilerin atölyelere göre dağılımı</text><g stroke="currentColor" stroke-width="2"><path d="M280 192 L280 82 A110 110 0 0 1 335 287.26 Z" fill="var(--vurgu)" fill-opacity="0.35"/><path d="M280 192 L335 287.26 A110 110 0 0 1 184.74 247 Z" fill="var(--vurgu2)" fill-opacity="0.45"/><path d="M280 192 L184.74 247 A110 110 0 0 1 184.74 137 Z" fill="var(--dolgu)"/><path d="M280 192 L184.74 137 A110 110 0 0 1 280 82 Z" fill="currentColor" fill-opacity="0.12"/></g><g font-size="14" fill="currentColor"><text x="397.84" y="157.42" text-anchor="start">Robotik</text><text x="397.84" y="174.42" text-anchor="start" font-weight="bold">150°</text><text x="248.42" y="321.84" text-anchor="end">Tiyatro</text><text x="248.42" y="338.84" text-anchor="end" font-weight="bold">90°</text><text x="158" y="189" text-anchor="end">Seramik</text><text x="158" y="206" text-anchor="end" font-weight="bold">60°</text><text x="219" y="66.34" text-anchor="end">Fotoğraf</text><text x="219" y="83.34" text-anchor="end" font-weight="bold">60°</text></g></svg>`,
  secenekler: ["4", "15", "25", "60"],
  dogru: 2,
  hatalar: [
    "Orantıyı ters kurdun: 10 · 60 : 150 = 4. Açı büyüdükçe öğrenci sayısı da büyür; 150°'lik dilim, 60°'lik dilimden daha çok öğrenci gösterir.",
    "Açıyı öğrenci sayısına böldün: 150 : 10 = 15. Önce bir öğrencinin kaç derecelik dilime karşılık geldiğini bulmalısın.",
    null,
    "Kamptaki toplam öğrenci sayısını buldun ve orada durdun. Soru yalnızca robotik atölyesini soruyor."
  ],
  aciklama: `Daire grafiğinde dilimlerin açıları, gösterdikleri miktarlarla doğru orantılıdır. Bir dilimin kaç kişi olduğu biliniyorsa önce bir kişiye düşen açı bulunur.
Adım 1: Seramik dilimi 60°'dir ve 10 öğrenciyi gösterir. Bir öğrenciye 60 : 10 = 6° düşer.
Adım 2: Robotik dilimi 150°'dir. Bu dilimdeki öğrenci sayısı 150 : 6 = 25'tir.
Sağlama: Kampın tamamı 360 : 6 = 60 öğrencidir. Tiyatro 90 : 6 = 15, fotoğraf 10 öğrencidir; 25 + 15 + 10 + 10 = 60. Tutuyor.
Sık yapılan hata: Orantıyı ters kurmak. Büyük dilim daha çok kişiyi gösterir; cevabın seramikteki 10 öğrenciden büyük çıkması gerekir.
Cevap C.`
},
{
  id: "mat-va-117",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir sahil kasabasında haziran ve temmuz aylarında haftalara göre kiralanan bisiklet sayıları aşağıdaki grafikte verilmiştir.\n**Buna göre hangi hafta, temmuzda kiralanan bisiklet sayısı ile haziranda kiralanan bisiklet sayısı arasındaki fark en büyüktür?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="İki veri gruplu sütun grafiği: haziran ve temmuzda dört haftada kiralanan bisiklet sayıları"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Haftalara göre kiralanan bisiklet sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">Bisiklet sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="244" x2="545" y2="244" stroke-opacity="0.15"/><line x1="70" y1="226" x2="545" y2="226" stroke-opacity="0.35"/><line x1="70" y1="208" x2="545" y2="208" stroke-opacity="0.15"/><line x1="70" y1="190" x2="545" y2="190" stroke-opacity="0.35"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.15"/><line x1="70" y1="154" x2="545" y2="154" stroke-opacity="0.35"/><line x1="70" y1="136" x2="545" y2="136" stroke-opacity="0.15"/><line x1="70" y1="118" x2="545" y2="118" stroke-opacity="0.35"/><line x1="70" y1="100" x2="545" y2="100" stroke-opacity="0.15"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="231">20</text><text x="62" y="195">40</text><text x="62" y="159">60</text><text x="62" y="123">80</text><text x="62" y="87">100</text></g><rect x="83.06" y="190" width="46.31" height="72" fill="var(--vurgu)"/><rect x="129.38" y="118" width="46.31" height="144" fill="var(--vurgu2)"/><rect x="201.81" y="154" width="46.31" height="108" fill="var(--vurgu)"/><rect x="248.13" y="118" width="46.31" height="144" fill="var(--vurgu2)"/><rect x="320.56" y="136" width="46.31" height="126" fill="var(--vurgu)"/><rect x="366.88" y="100" width="46.31" height="162" fill="var(--vurgu2)"/><rect x="439.31" y="172" width="46.31" height="90" fill="var(--vurgu)"/><rect x="485.63" y="118" width="46.31" height="144" fill="var(--vurgu2)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="129.38" y="282">1. hafta</text><text x="248.13" y="282">2. hafta</text><text x="366.88" y="282">3. hafta</text><text x="485.63" y="282">4. hafta</text></g><rect x="375.4" y="42" width="14" height="14" fill="var(--vurgu)"/><text x="399.4" y="54" font-size="14" fill="currentColor">Haziran</text><rect x="472.8" y="42" width="14" height="14" fill="var(--vurgu2)"/><text x="496.8" y="54" font-size="14" fill="currentColor">Temmuz</text></svg>`,
  secenekler: ["1. hafta", "2. hafta", "3. hafta", "4. hafta"],
  dogru: 0,
  hatalar: [
    null,
    "Haziranın bir önceki haftaya göre en çok arttığı haftayı seçtin. Soru iki ay arasındaki farkı soruyor: 2. haftada fark 80 − 60 = 20'dir.",
    "En uzun sütunun (temmuz, 90) bulunduğu haftayı seçtin. O hafta fark 90 − 70 = 20'dir.",
    "Haziran sütununun kısaldığı haftada farkın en çok açıldığını düşündün. 4. haftada fark 80 − 50 = 30'dur; 1. haftadaki 40'tan azdır."
  ],
  aciklama: `İki veri gruplu sütun grafiğinde her haftanın iki sütunu vardır. İki grup arasındaki farkı bulmak için aynı haftanın iki sütunu karşılaştırılır.
Adım 1: Sütunları oku (haziran, temmuz): 1. hafta 40 ve 80; 2. hafta 60 ve 80; 3. hafta 70 ve 90; 4. hafta 50 ve 80. 70, 90 ve 50, etiketlerin ortasındaki ara çizgilerdedir.
Adım 2: Farkları hesapla: 80 − 40 = 40; 80 − 60 = 20; 90 − 70 = 20; 80 − 50 = 30.
Adım 3: En büyük fark 40'tır ve 1. haftaya aittir.
Sağlama: 1. haftada temmuz sütunu, haziran sütununun tam 2 katı uzunluktadır; diğer haftalarda iki sütun birbirine daha yakındır.
Sık yapılan hata: En uzun sütunu görünce o haftayı seçmek. Fark, tek bir sütunun uzunluğuna değil, iki sütunun uçları arasındaki mesafeye bağlıdır.
Cevap A.`
},
{
  id: "mat-va-118",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Aşağıdaki çizgi grafiğinde bir dondurmacının bir haftanın beş iş gününde sattığı külah dondurma sayıları verilmiştir. Dondurmacı bu verileri bir tabloya aktaracaktır.\n**Buna göre tabloya pazartesiden cumaya doğru sırasıyla hangi sayılar yazılmalıdır?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Çizgi grafiği: pazartesiden cumaya satılan külah dondurma sayıları"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Günlere göre satılan külah dondurma sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">Külah sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="240" x2="545" y2="240" stroke-opacity="0.15"/><line x1="70" y1="218" x2="545" y2="218" stroke-opacity="0.35"/><line x1="70" y1="196" x2="545" y2="196" stroke-opacity="0.15"/><line x1="70" y1="174" x2="545" y2="174" stroke-opacity="0.35"/><line x1="70" y1="152" x2="545" y2="152" stroke-opacity="0.15"/><line x1="70" y1="130" x2="545" y2="130" stroke-opacity="0.35"/><line x1="70" y1="108" x2="545" y2="108" stroke-opacity="0.15"/><line x1="70" y1="86" x2="545" y2="86" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="72" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="223">20</text><text x="62" y="179">40</text><text x="62" y="135">60</text><text x="62" y="91">80</text></g><g stroke="currentColor" stroke-width="2"><line x1="117.5" y1="262" x2="117.5" y2="267"/><line x1="212.5" y1="262" x2="212.5" y2="267"/><line x1="307.5" y1="262" x2="307.5" y2="267"/><line x1="402.5" y1="262" x2="402.5" y2="267"/><line x1="497.5" y1="262" x2="497.5" y2="267"/></g><polyline points="117.5,196 212.5,152 307.5,174 402.5,108 497.5,130" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="117.5" cy="196" r="5.5" fill="var(--vurgu)"/><circle cx="212.5" cy="152" r="5.5" fill="var(--vurgu)"/><circle cx="307.5" cy="174" r="5.5" fill="var(--vurgu)"/><circle cx="402.5" cy="108" r="5.5" fill="var(--vurgu)"/><circle cx="497.5" cy="130" r="5.5" fill="var(--vurgu)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="117.5" y="282">Pazartesi</text><text x="212.5" y="282">Salı</text><text x="307.5" y="282">Çarşamba</text><text x="402.5" y="282">Perşembe</text><text x="497.5" y="282">Cuma</text></g></svg>`,
  secenekler: ["30 – 40 – 50 – 70 – 60", "30 – 50 – 40 – 60 – 70", "40 – 60 – 40 – 80 – 60", "30 – 50 – 40 – 70 – 60"],
  dogru: 3,
  hatalar: [
    "Salı ile çarşambayı karıştırdın. Çizgi salıdan çarşambaya iner: salı 50, çarşamba 40 külah satılmıştır.",
    "Perşembe ile cumayı karıştırdın. En yüksek nokta perşembededir (70); cuma 60 külah satılmıştır.",
    "Etiketsiz ara çizgilerde kalan noktaları bir üstteki etikete yuvarladın: 30'u 40, 50'yi 60, 70'i 80 okudun.",
    null
  ],
  aciklama: `Çizgi grafiğini tabloya dönüştürürken her noktanın hangi güne ait olduğunu yatay eksenden, değerini dikey eksenden okursun.
Adım 1: Ölçeği belirle: dikey eksende 0, 20, 40, 60, 80 yazıyor; aradaki çizgiler 10, 30, 50 ve 70'i gösterir.
Adım 2: Noktaları sırayla oku: pazartesi 30, salı 50, çarşamba 40, perşembe 70, cuma 60.
Adım 3: Tabloya yazılacak sayılar sırasıyla 30 – 50 – 40 – 70 – 60'tır.
Sağlama: Çizginin yönüyle karşılaştır: pazartesiden salıya çıkış, çarşambaya iniş, perşembeye çıkış, cumaya iniş. Bulduğun sayılar da artar, azalır, artar, azalır.
Sık yapılan hata: Ara çizgide kalan bir noktayı en yakın etikete yuvarlamak. Önce ölçeğin kaçar kaçar arttığını belirle.
Cevap D.`
},
{
  id: "mat-va-119",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir arıcının beş kovanından bu yaz elde ettiği bal miktarları aşağıdaki sütun grafiğinde verilmiştir.\n**Buna göre bir kovandan elde edilen ortalama bal miktarı kaç kilogramdır?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Sütun grafiği: beş kovandan elde edilen bal miktarları"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Kovanlardan elde edilen bal miktarı</text><text x="10" y="54" font-size="14" fill="currentColor">Bal (kg)</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="247" x2="545" y2="247" stroke-opacity="0.15"/><line x1="70" y1="232" x2="545" y2="232" stroke-opacity="0.35"/><line x1="70" y1="217" x2="545" y2="217" stroke-opacity="0.15"/><line x1="70" y1="202" x2="545" y2="202" stroke-opacity="0.35"/><line x1="70" y1="187" x2="545" y2="187" stroke-opacity="0.15"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.35"/><line x1="70" y1="157" x2="545" y2="157" stroke-opacity="0.15"/><line x1="70" y1="142" x2="545" y2="142" stroke-opacity="0.35"/><line x1="70" y1="127" x2="545" y2="127" stroke-opacity="0.15"/><line x1="70" y1="112" x2="545" y2="112" stroke-opacity="0.35"/><line x1="70" y1="97" x2="545" y2="97" stroke-opacity="0.15"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="237">4</text><text x="62" y="207">8</text><text x="62" y="177">12</text><text x="62" y="147">16</text><text x="62" y="117">20</text><text x="62" y="87">24</text></g><rect x="91.38" y="202" width="52.25" height="60" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="186.38" y="112" width="52.25" height="150" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="281.38" y="172" width="52.25" height="90" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="376.38" y="97" width="52.25" height="165" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="471.38" y="127" width="52.25" height="135" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="117.5" y="282">1. kovan</text><text x="212.5" y="282">2. kovan</text><text x="307.5" y="282">3. kovan</text><text x="402.5" y="282">4. kovan</text><text x="497.5" y="282">5. kovan</text></g></svg>`,
  secenekler: ["14", "16", "18", "20"],
  dogru: 1,
  hatalar: [
    "Açıklığı buldun: 22 − 8 = 14. Ortalama için bütün değerleri toplayıp veri sayısına bölmelisin.",
    null,
    "Ortancayı buldun: değerler sıralanınca (8, 12, 18, 20, 22) ortada 18 kalır. Ortalama ile ortanca farklı kavramlardır.",
    "Toplamı doğru buldun ama 5 yerine 4'e böldün: 80 : 4 = 20. Grafikte beş kovan vardır."
  ],
  aciklama: `Aritmetik ortalama, bütün değerlerin toplamının değer sayısına bölümüdür.
Adım 1: Sütunları oku: 8, 20, 12, 22 ve 18 kg. 22 ve 18, etiketlerin ortasındaki ara çizgilerdedir.
Adım 2: Topla: 8 + 20 + 12 + 22 + 18 = 80 kg.
Adım 3: Kovan sayısına böl: 80 : 5 = 16 kg.
Sağlama: Her kovandan 16 kg alınsaydı toplam 5 · 16 = 80 kg olurdu. Tutuyor.
Sık yapılan hata: Ortalama, ortanca ve açıklığı karıştırmak. Ortalama toplamı eşit paylaştırır; ortanca sıralı dizinin ortasıdır; açıklık en büyük ile en küçüğün farkıdır.
Cevap B.`
},
{
  id: "mat-va-120",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir dağ istasyonunda kış boyunca her hafta aynı noktada ölçülen kar kalınlığı aşağıdaki çizgi grafiğinde verilmiştir. Kar kalınlığı, kar yağdığında artar; hava ısınıp kar eridiğinde azalır.\n**Buna göre kar kalınlığı en çok hangi iki hafta arasında artmıştır?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Çizgi grafiği: altı hafta boyunca ölçülen kar kalınlığı"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Kar kalınlığının haftalara göre değişimi</text><text x="10" y="54" font-size="14" fill="currentColor">Kar kalınlığı (cm)</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="244" x2="545" y2="244" stroke-opacity="0.15"/><line x1="70" y1="226" x2="545" y2="226" stroke-opacity="0.35"/><line x1="70" y1="208" x2="545" y2="208" stroke-opacity="0.15"/><line x1="70" y1="190" x2="545" y2="190" stroke-opacity="0.35"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.15"/><line x1="70" y1="154" x2="545" y2="154" stroke-opacity="0.35"/><line x1="70" y1="136" x2="545" y2="136" stroke-opacity="0.15"/><line x1="70" y1="118" x2="545" y2="118" stroke-opacity="0.35"/><line x1="70" y1="100" x2="545" y2="100" stroke-opacity="0.15"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="231">20</text><text x="62" y="195">40</text><text x="62" y="159">60</text><text x="62" y="123">80</text><text x="62" y="87">100</text></g><g stroke="currentColor" stroke-width="2"><line x1="109.58" y1="262" x2="109.58" y2="267"/><line x1="188.75" y1="262" x2="188.75" y2="267"/><line x1="267.92" y1="262" x2="267.92" y2="267"/><line x1="347.08" y1="262" x2="347.08" y2="267"/><line x1="426.25" y1="262" x2="426.25" y2="267"/><line x1="505.42" y1="262" x2="505.42" y2="267"/></g><polyline points="109.58,226 188.75,190 267.92,172 347.08,118 426.25,100 505.42,172" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="109.58" cy="226" r="5.5" fill="var(--vurgu)"/><circle cx="188.75" cy="190" r="5.5" fill="var(--vurgu)"/><circle cx="267.92" cy="172" r="5.5" fill="var(--vurgu)"/><circle cx="347.08" cy="118" r="5.5" fill="var(--vurgu)"/><circle cx="426.25" cy="100" r="5.5" fill="var(--vurgu)"/><circle cx="505.42" cy="172" r="5.5" fill="var(--vurgu)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="109.58" y="282">1. hafta</text><text x="188.75" y="282">2. hafta</text><text x="267.92" y="282">3. hafta</text><text x="347.08" y="282">4. hafta</text><text x="426.25" y="282">5. hafta</text><text x="505.42" y="282">6. hafta</text></g></svg>`,
  secenekler: ["1. ile 2. hafta arasında", "2. ile 3. hafta arasında", "3. ile 4. hafta arasında", "5. ile 6. hafta arasında"],
  dogru: 2,
  hatalar: [
    "Bu aralıkta kar 20 cm artmıştır. Grafiğin başındaki yükselişi gözle en büyük artış sandın; 3. ile 4. hafta arasındaki artış 30 cm'dir.",
    "Bu aralıkta kar 40 cm'den 50 cm'ye, yani 10 cm artmıştır. Çizginin bu parçası diğer yükselişlerden daha yatıktır.",
    null,
    "Değişimin en büyük olduğu aralığı seçtin ama çizgi burada aşağı iner; kar 90 cm'den 50 cm'ye, yani 40 cm azalmıştır."
  ],
  aciklama: `Çizgi grafiğinde bir aralıktaki artış, sonraki noktanın değerinden önceki noktanın değeri çıkarılarak bulunur. Çizgi ne kadar dik yükseliyorsa artış o kadar büyüktür.
Adım 1: Noktaları oku: 20, 40, 50, 80, 90 ve 50 cm. 50 ve 90, etiketlerin ortasındaki ara çizgilerdedir.
Adım 2: Değişimleri hesapla: 1→2: +20; 2→3: +10; 3→4: +30; 4→5: +10; 5→6: −40.
Adım 3: Artışların en büyüğü +30'dur ve 3. ile 4. hafta arasındadır.
Sağlama: 3. haftadan 4. haftaya çizgi üç ara çizgi yükselir; bu, grafikteki en dik çıkıştır.
Sık yapılan hata: Değişimin büyüklüğüne bakıp yönünü unutmak. 5. ile 6. hafta arasındaki 40 cm'lik değişim bir azalmadır.
Cevap C.`
},
{
  id: "mat-va-121",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir okulun bilim şenliğine katılan 80 öğrencinin proje konularına göre dağılımı aşağıdaki daire grafiğinde verilmiştir. Her öğrenci tek bir proje hazırlamıştır. Bu veriler, dikey ekseni öğrenci sayısını gösteren bir sütun grafiğine dönüştürülecektir.\n**Buna göre bu sütun grafiğinde enerji sütununun gösterdiği öğrenci sayısı, tarım sütununun gösterdiği öğrenci sayısından kaç fazladır?**",
  gorsel: `<svg viewBox="0 0 560 352" role="img" aria-label="Daire grafiği: enerji yüzde 35, su yüzde 25, tarım yüzde 15, sağlık yüzde 25"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Öğrencilerin proje konularına göre dağılımı</text><g stroke="currentColor" stroke-width="2"><path d="M280 192 L280 82 A110 110 0 0 1 368.99 256.66 Z" fill="var(--vurgu)" fill-opacity="0.35"/><path d="M280 192 L368.99 256.66 A110 110 0 0 1 215.34 280.99 Z" fill="var(--vurgu2)" fill-opacity="0.45"/><path d="M280 192 L215.34 280.99 A110 110 0 0 1 170 192 Z" fill="var(--dolgu)"/><path d="M280 192 L170 192 A110 110 0 0 1 280 82 Z" fill="currentColor" fill-opacity="0.12"/></g><g font-size="14" fill="currentColor"><text x="388.7" y="133.61" text-anchor="start">Enerji</text><text x="388.7" y="150.61" text-anchor="start" font-weight="bold">%35</text><text x="299.09" y="324.5" text-anchor="middle">Su</text><text x="299.09" y="341.5" text-anchor="middle" font-weight="bold">%25</text><text x="171.3" y="244.39" text-anchor="end">Tarım</text><text x="171.3" y="261.39" text-anchor="end" font-weight="bold">%15</text><text x="193.73" y="85.73" text-anchor="end">Sağlık</text><text x="193.73" y="102.73" text-anchor="end" font-weight="bold">%25</text></g></svg>`,
  secenekler: ["12", "16", "20", "28"],
  dogru: 1,
  hatalar: [
    "Tarım sütununun değerini buldun (80'in %15'i = 12) ama farkı hesaplamadın.",
    null,
    "Yüzdelerin farkını (35 − 15 = 20) öğrenci sayısı sandın. Sütun grafiğinin dikey ekseni yüzdeyi değil öğrenci sayısını gösterir; %20, 80 öğrencinin 16'sıdır.",
    "Enerji sütununun değerini buldun (80'in %35'i = 28) ama tarımdaki öğrencileri çıkarmadın."
  ],
  aciklama: `Daire grafiğinde yüzdeler payı gösterir. Oluşturulacak sütun grafiğinin dikey ekseni ise öğrenci sayısını gösterecektir. Dönüşüm için her yüzde, toplamla çarpılarak öğrenci sayısına çevrilir.
Adım 1: Enerji: 80'in %35'i = 80 · [[35|100]] = 28 öğrenci. Enerji sütunu 28'i gösterir.
Adım 2: Tarım: 80'in %15'i = 80 · [[15|100]] = 12 öğrenci. Tarım sütunu 12'yi gösterir.
Adım 3: Fark: 28 − 12 = 16 öğrenci.
Sağlama: Yüzdelerin farkı %20'dir; 80'in %20'si de 16 eder. İki yol aynı sonucu veriyor.
Sık yapılan hata: Yüzde farkını doğrudan öğrenci sayısı sanmak. Yüzde bir paydır; sayıya çevirmek için toplamla çarpmalısın.
Cevap B.`
},
{
  id: "mat-va-122",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Ada, Can ve Efe, bilişim dersinde klavye kullanmayı öğrenmektedir. Üç öğrencinin dört ay boyunca her ayın sonunda bir dakikada yazabildikleri sözcük sayısı aşağıdaki grafikte verilmiştir.\n**Buna göre yazma hızı her ay bir önceki aya göre artan öğrenci ya da öğrenciler kimdir?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Üç veri gruplu çizgi grafiği: Ada, Can ve Efe'nin eylülden aralığa bir dakikada yazdığı sözcük sayısı"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Bir dakikada yazılan sözcük sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">Sözcük sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="244" x2="545" y2="244" stroke-opacity="0.15"/><line x1="70" y1="226" x2="545" y2="226" stroke-opacity="0.35"/><line x1="70" y1="208" x2="545" y2="208" stroke-opacity="0.15"/><line x1="70" y1="190" x2="545" y2="190" stroke-opacity="0.35"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.15"/><line x1="70" y1="154" x2="545" y2="154" stroke-opacity="0.35"/><line x1="70" y1="136" x2="545" y2="136" stroke-opacity="0.15"/><line x1="70" y1="118" x2="545" y2="118" stroke-opacity="0.35"/><line x1="70" y1="100" x2="545" y2="100" stroke-opacity="0.15"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="231">10</text><text x="62" y="195">20</text><text x="62" y="159">30</text><text x="62" y="123">40</text><text x="62" y="87">50</text></g><g stroke="currentColor" stroke-width="2"><line x1="129.38" y1="262" x2="129.38" y2="267"/><line x1="248.13" y1="262" x2="248.13" y2="267"/><line x1="366.88" y1="262" x2="366.88" y2="267"/><line x1="485.63" y1="262" x2="485.63" y2="267"/></g><polyline points="129.38,190 248.13,172 366.88,154 485.63,136" fill="none" stroke="var(--vurgu)" stroke-width="3"/><polyline points="129.38,226 248.13,154 366.88,190 485.63,118" fill="none" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="9 5"/><polyline points="129.38,172 248.13,136 366.88,136 485.63,100" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="3 5"/><circle cx="129.38" cy="190" r="5.5" fill="var(--vurgu)"/><circle cx="248.13" cy="172" r="5.5" fill="var(--vurgu)"/><circle cx="366.88" cy="154" r="5.5" fill="var(--vurgu)"/><circle cx="485.63" cy="136" r="5.5" fill="var(--vurgu)"/><rect x="124.38" y="221" width="10" height="10" fill="var(--vurgu2)"/><rect x="243.13" y="149" width="10" height="10" fill="var(--vurgu2)"/><rect x="361.88" y="185" width="10" height="10" fill="var(--vurgu2)"/><rect x="480.63" y="113" width="10" height="10" fill="var(--vurgu2)"/><polygon points="129.38,165.5 123.38,176.5 135.38,176.5" fill="currentColor"/><polygon points="248.13,129.5 242.13,140.5 254.13,140.5" fill="currentColor"/><polygon points="366.88,129.5 360.88,140.5 372.88,140.5" fill="currentColor"/><polygon points="485.63,93.5 479.63,104.5 491.63,104.5" fill="currentColor"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="129.38" y="282">Eylül</text><text x="248.13" y="282">Ekim</text><text x="366.88" y="282">Kasım</text><text x="485.63" y="282">Aralık</text></g><line x1="368.2" y1="49" x2="388.2" y2="49" stroke="var(--vurgu)" stroke-width="3"/><circle cx="378.2" cy="49" r="5.5" fill="var(--vurgu)"/><text x="392.2" y="54" font-size="14" fill="currentColor">Ada</text><line x1="432.8" y1="49" x2="452.8" y2="49" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="9 5"/><rect x="437.8" y="44" width="10" height="10" fill="var(--vurgu2)"/><text x="456.8" y="54" font-size="14" fill="currentColor">Can</text><line x1="497.4" y1="49" x2="517.4" y2="49" stroke="currentColor" stroke-width="3" stroke-dasharray="3 5"/><polygon points="507.4,42.5 501.4,53.5 513.4,53.5" fill="currentColor"/><text x="521.4" y="54" font-size="14" fill="currentColor">Efe</text></svg>`,
  secenekler: ["Yalnız Ada", "Yalnız Can", "Ada ve Efe", "Can ve Efe"],
  dogru: 0,
  hatalar: [
    null,
    "Can'ın hızı ekimden kasıma 30'dan 20'ye düşmüştür. Son aydaki büyük artışa bakıp her ay arttığını sandın.",
    "Efe'nin hızı ekimden kasıma değişmemiştir (35 → 35). Aynı kalmak, artmak demek değildir.",
    "Eylülden aralığa en çok gelişenleri seçtin; ama Can kasımda gerilemiş, Efe ise ekimden kasıma yerinde saymıştır. Soru her ayın bir önceki aydan yüksek olmasını istiyor."
  ],
  aciklama: `Çok veri gruplu çizgi grafiğinde her öğrencinin çizgisi ayrı ayrı izlenir. "Her ay arttı" diyebilmek için çizginin her parçasının yukarı çıkması gerekir.
Adım 1: Ada'nın çizgisi: 20 → 25 → 30 → 35. Her parça yukarı çıkar.
Adım 2: Can'ın çizgisi: 10 → 30 → 20 → 40. Ekimden kasıma iner.
Adım 3: Efe'nin çizgisi: 25 → 35 → 35 → 45. Ekimden kasıma yatay kalır; bu bir artış değildir.
Adım 4: Her ay artan tek öğrenci Ada'dır.
Sık yapılan hata: Yalnızca ilk ve son değere bakmak. Can ve Efe dört ayın sonunda Ada'dan çok gelişmiştir ama aradaki bir ayda artış olmamıştır.
Cevap A.`
},
{
  id: "mat-va-123",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir öğretmen, öğrencilerinden farklı veriler için uygun grafik türünü seçmelerini istemiştir.\n**Buna göre aşağıdaki verilerden hangisini çizgi grafiğiyle göstermek __uygun değildir__?**",
  gorsel: null,
  secenekler: ["Bir hastanın gün boyunca saat başı ölçülen ateşi", "Bir sınıftaki öğrencilerin en sevdikleri renkler", "Bir kasabanın on yıl boyunca yıllık yağış miktarı", "Bir ağacın yıllara göre ölçülen gövde kalınlığı"],
  dogru: 1,
  hatalar: [
    "Ateş saatten saate değişen bir ölçümdür; zamana bağlı değişimi en iyi çizgi grafiği gösterir.",
    null,
    "Yağış miktarı yıllara göre sıralanır; çizgi grafiği yıllar içindeki artışı ve azalışı açıkça gösterir.",
    "Gövde kalınlığı yıllar içinde değişen bir ölçümdür; çizgi grafiği ağacın ne hızla büyüdüğünü gösterir."
  ],
  aciklama: `Çizgi grafiğinde noktalar bir çizgiyle birleştirilir; bu çizgi, iki ölçüm arasında değerin nasıl değiştiğini gösterir. Bu yüzden çizgi grafiği, zaman sırasına göre dizilmiş veriler için kullanılır.
Adım 1: Şıklardaki verilerin zamana bağlı olup olmadığına bak. Ateş saatlere, yağış yıllara, gövde kalınlığı yıllara göre ölçülür; bunlar zaman içindeki değişimi gösterir.
Adım 2: En sevilen renkler ise zamana bağlı değildir; "mavi" ile "kırmızı" arasında bir sıra ya da geçiş yoktur. Renkleri bir çizgiyle birleştirmek, aralarında bir değişim varmış gibi yanlış bir izlenim verir.
Adım 3: Bu veri için sütun grafiği ya da daire grafiği uygundur.
Sık yapılan hata: Sayısal her veriyi çizgi grafiğiyle göstermek. Önce yatay eksende ne olacağını düşün: zaman değilse çizgi grafiği uygun değildir.
Cevap B.`
},
{
  id: "mat-va-124",
  kazanim: "M.8.4.1.1",
  kademe: 1,
  zorluk: 2,
  soru: "Bir doğa kulübü, ilçedeki dört parkta aynı gün serçe, güvercin ve saksağan sayımı yapmıştır. Her parkta üç tür ayrı ayrı sayılmış ve sonuçlar aşağıdaki grafikte gösterilmiştir.\n**Buna göre sayılan kuşların toplamı en fazla olan park hangisidir?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Üç veri gruplu sütun grafiği: dört parkta sayılan serçe, güvercin ve saksağan sayıları"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Parklarda sayılan kuş sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">Kuş sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="244" x2="545" y2="244" stroke-opacity="0.15"/><line x1="70" y1="226" x2="545" y2="226" stroke-opacity="0.35"/><line x1="70" y1="208" x2="545" y2="208" stroke-opacity="0.15"/><line x1="70" y1="190" x2="545" y2="190" stroke-opacity="0.35"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.15"/><line x1="70" y1="154" x2="545" y2="154" stroke-opacity="0.35"/><line x1="70" y1="136" x2="545" y2="136" stroke-opacity="0.15"/><line x1="70" y1="118" x2="545" y2="118" stroke-opacity="0.35"/><line x1="70" y1="100" x2="545" y2="100" stroke-opacity="0.15"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="231">10</text><text x="62" y="195">20</text><text x="62" y="159">30</text><text x="62" y="123">40</text><text x="62" y="87">50</text></g><rect x="83.06" y="172" width="30.88" height="90" fill="var(--vurgu)"/><rect x="113.94" y="100" width="30.88" height="162" fill="var(--vurgu2)"/><rect x="144.81" y="226" width="30.88" height="36" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="201.81" y="154" width="30.88" height="108" fill="var(--vurgu)"/><rect x="232.69" y="154" width="30.88" height="108" fill="var(--vurgu2)"/><rect x="263.56" y="172" width="30.88" height="90" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="320.56" y="118" width="30.88" height="144" fill="var(--vurgu)"/><rect x="351.44" y="190" width="30.88" height="72" fill="var(--vurgu2)"/><rect x="382.31" y="208" width="30.88" height="54" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="439.31" y="136" width="30.88" height="126" fill="var(--vurgu)"/><rect x="470.19" y="118" width="30.88" height="144" fill="var(--vurgu2)"/><rect x="501.06" y="244" width="30.88" height="18" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="129.38" y="282">Kuzey Parkı</text><text x="248.13" y="282">Çınar Parkı</text><text x="366.88" y="282">Göl Parkı</text><text x="485.63" y="282">Sahil Parkı</text></g><rect x="269.8" y="42" width="14" height="14" fill="var(--vurgu)"/><text x="293.8" y="54" font-size="14" fill="currentColor">Serçe</text><rect x="350.8" y="42" width="14" height="14" fill="var(--vurgu2)"/><text x="374.8" y="54" font-size="14" fill="currentColor">Güvercin</text><rect x="456.4" y="42" width="14" height="14" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="480.4" y="54" font-size="14" fill="currentColor">Saksağan</text></svg>`,
  secenekler: ["Kuzey Parkı", "Çınar Parkı", "Göl Parkı", "Sahil Parkı"],
  dogru: 1,
  hatalar: [
    "Grafikteki en uzun sütunun (45 güvercin) bulunduğu parkı seçtin. Kuzey Parkı'nın toplamı 25 + 45 + 10 = 80'dir.",
    null,
    "Yalnızca serçelere baktın; en çok serçe Göl Parkı'nda sayılmıştır (40) ama toplam 40 + 20 + 15 = 75'tir.",
    "Saksağanları toplama katmadın: serçe ve güvercinlerin toplamı en çok Sahil Parkı'ndadır (75) ama saksağanlarla birlikte toplam 80'dir."
  ],
  aciklama: `Üç veri gruplu sütun grafiğinde bir kategorinin toplamını bulmak için o kategorideki üç sütunun değeri toplanır.
Adım 1: Her parkın sütunlarını oku (serçe, güvercin, saksağan): Kuzey 25, 45, 10; Çınar 30, 30, 25; Göl 40, 20, 15; Sahil 35, 40, 5.
Adım 2: Toplamları bul: Kuzey 80, Çınar 85, Göl 75, Sahil 80.
Adım 3: En büyük toplam 85'tir; Çınar Parkı'na aittir.
Sağlama: Çınar Parkı'nda en uzun sütun yoktur ama üç sütunun hiçbiri kısa değildir; toplamı bu yüzden en büyüktür.
Sık yapılan hata: En uzun tek sütuna bakmak ya da bir veri grubunu toplamaya katmamak. Toplam için üç sütunun hepsini kullan.
Cevap B.`
},
{
  id: "mat-va-125",
  kazanim: "M.8.4.1.2",
  kademe: 1,
  zorluk: 2,
  soru: "Bir okuldaki öğrencilere kulüp saatinde hangi etkinliğe katılmak istedikleri sorulmuş ve sonuçlar aşağıdaki daire grafiğinde gösterilmiştir. Grafikte ankete katılan öğrenci sayısı verilmemiştir.\n**Buna göre aşağıdakilerden hangisi yalnızca bu grafiğe bakılarak bulunabilir?**",
  gorsel: `<svg viewBox="0 0 560 352" role="img" aria-label="Daire grafiği: kodlama yüzde 40, resim yüzde 30, halk oyunları yüzde 15, origami yüzde 15"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Öğrencilerin katılmak istediği etkinlikler</text><g stroke="currentColor" stroke-width="2"><path d="M280 192 L280 82 A110 110 0 0 1 344.66 280.99 Z" fill="var(--vurgu)" fill-opacity="0.35"/><path d="M280 192 L344.66 280.99 A110 110 0 0 1 175.38 225.99 Z" fill="var(--vurgu2)" fill-opacity="0.45"/><path d="M280 192 L175.38 225.99 A110 110 0 0 1 191.01 127.34 Z" fill="var(--dolgu)"/><path d="M280 192 L191.01 127.34 A110 110 0 0 1 280 82 Z" fill="currentColor" fill-opacity="0.12"/></g><g font-size="14" fill="currentColor"><text x="396.03" y="151.3" text-anchor="start">Kodlama</text><text x="396.03" y="168.3" text-anchor="start" font-weight="bold">%40</text><text x="242.3" y="320.03" text-anchor="end">Resim</text><text x="242.3" y="337.03" text-anchor="end" font-weight="bold">%30</text><text x="159.5" y="169.91" text-anchor="end">Halk oyunları</text><text x="159.5" y="186.91" text-anchor="end" font-weight="bold">%15</text><text x="224.61" y="63.3" text-anchor="end">Origami</text><text x="224.61" y="80.3" text-anchor="end" font-weight="bold">%15</text></g></svg>`,
  secenekler: ["Kodlama etkinliğini seçen öğrencilerin kaç kişi olduğu", "Ankete katılan öğrencilerin toplam kaç kişi olduğu", "Resmi seçenlerin origamiyi seçenlerden kaç kişi fazla olduğu", "Resmi seçenlerin, origamiyi seçenlerin kaç katı olduğu"],
  dogru: 3,
  hatalar: [
    "Kodlamanın payını (%40) biliyorsun ama toplam verilmediği için bunun kaç kişi ettiğini bulamazsın.",
    "Daire grafiği yalnızca payları gösterir; toplam öğrenci sayısı grafikte yoktur.",
    "Fark bir kişi sayısıdır. Kişi sayısını bulmak için toplamı bilmen gerekir; yüzdelerin farkı (%15) kişi sayısı değildir.",
    null
  ],
  aciklama: `Daire grafiği her grubun bütün içindeki payını gösterir. Toplam verilmezse kişi sayıları bulunamaz; ama iki grubun birbirine oranı yalnızca paylardan bulunabilir.
Adım 1: Grafikten okunanlar: kodlama %40, resim %30, halk oyunları %15, origami %15.
Adım 2: Kişi sayısı isteyen şıklar (A, B ve C) için toplam öğrenci sayısı gerekir; bu bilgi grafikte yoktur.
Adım 3: Oran için toplam gerekmez: toplam kaç olursa olsun resmi seçenler %30, origamiyi seçenler %15'tir. [[30|15]] = 2 olduğundan resmi seçenler, origamiyi seçenlerin 2 katıdır.
Sağlama: Toplamı 100 kişi varsay: 30 ve 15 kişi; 200 kişi varsay: 60 ve 30 kişi. Oran iki durumda da 2'dir. Fark ise 15 ve 30 çıkar; yani fark, toplam bilinmeden bulunamaz.
Sık yapılan hata: Daire grafiğindeki yüzdeleri kişi sayısı gibi kullanmak. Yüzde bir sayı değil, bir paydır.
Cevap D.`
},
/* ===================== KADEME 2 — PEKİŞTİRME ===================== */
{
  id: "mat-va-201",
  kazanim: "M.8.4.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir okul servisine sabah beş duraktan toplam 50 öğrenci binmiştir. Duraklara göre binen öğrenci sayıları aşağıdaki sütun grafiğinde gösterilmiş, ancak 3. durağa ait sütun silinmiştir.\n**Buna göre 3. duraktan servise kaç öğrenci binmiştir?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Sütun grafiği: beş duraktan servise binen öğrenci sayıları; 3. durağın sütunu silinmiş"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Duraklara göre servise binen öğrenci sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">Öğrenci sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="240" x2="545" y2="240" stroke-opacity="0.35"/><line x1="70" y1="218" x2="545" y2="218" stroke-opacity="0.35"/><line x1="70" y1="196" x2="545" y2="196" stroke-opacity="0.35"/><line x1="70" y1="174" x2="545" y2="174" stroke-opacity="0.35"/><line x1="70" y1="152" x2="545" y2="152" stroke-opacity="0.35"/><line x1="70" y1="130" x2="545" y2="130" stroke-opacity="0.35"/><line x1="70" y1="108" x2="545" y2="108" stroke-opacity="0.35"/><line x1="70" y1="86" x2="545" y2="86" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="72" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="245">2</text><text x="62" y="223">4</text><text x="62" y="201">6</text><text x="62" y="179">8</text><text x="62" y="157">10</text><text x="62" y="135">12</text><text x="62" y="113">14</text><text x="62" y="91">16</text></g><rect x="91.38" y="174" width="52.25" height="88" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="186.38" y="108" width="52.25" height="154" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><text x="307.5" y="252" font-size="24" font-weight="bold" text-anchor="middle" fill="currentColor">?</text><rect x="376.38" y="196" width="52.25" height="66" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="471.38" y="152" width="52.25" height="110" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="117.5" y="282">1. durak</text><text x="212.5" y="282">2. durak</text><text x="307.5" y="282">3. durak</text><text x="402.5" y="282">4. durak</text><text x="497.5" y="282">5. durak</text></g></svg>`,
  secenekler: ["10", "12", "18", "38"],
  dogru: 1,
  hatalar: [
    "Toplamı durak sayısına bölüp durak başına ortalamayı buldun: 50 : 5 = 10. Ortalama, silinen sütunun değeri değildir.",
    null,
    "Grafikteki sütunları toplarken 4. durağı (6) atladın: 8 + 14 + 10 = 32 ve 50 − 32 = 18.",
    "Grafikteki dört sütunun toplamını buldun ve orada durdun. 38, 3. durak dışındaki duraklardan binen öğrencilerin sayısıdır."
  ],
  aciklama: `Bir grafikte eksik kalan değer, toplam biliniyorsa diğer değerlerin toplamı bütünden çıkarılarak bulunur.
Adım 1: Görünen sütunları oku: 1. durak 8, 2. durak 14, 4. durak 6, 5. durak 10 öğrenci.
Adım 2: Bunları topla: 8 + 14 + 6 + 10 = 38.
Adım 3: Toplamdan çıkar: 50 − 38 = 12. 3. duraktan 12 öğrenci binmiştir.
Sağlama: 8 + 14 + 12 + 6 + 10 = 50. Tutuyor.
Sık yapılan hata: Ara sonucu (38) cevap sanmak ya da toplarken bir sütunu atlamak. Sütunları toplarken tek tek işaretle.
Cevap B.`
},
{
  id: "mat-va-202",
  kazanim: "M.8.4.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Elif, okuma alışkanlığını izlemek için kitap okumaya ayırdığı süreyi her akşam defterine yazmaktadır. Elif'in bir hafta boyunca hafta içi her gün kitap okumaya ayırdığı süreler aşağıdaki çizgi grafiğinde verilmiştir.\n**Buna göre bu sürelerin ortancası kaç dakikadır?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Çizgi grafiği: pazartesiden cumaya kitap okumaya ayrılan süreler"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Elif'in kitap okumaya ayırdığı süre</text><text x="10" y="54" font-size="14" fill="currentColor">Süre (dakika)</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="247" x2="545" y2="247" stroke-opacity="0.15"/><line x1="70" y1="232" x2="545" y2="232" stroke-opacity="0.35"/><line x1="70" y1="217" x2="545" y2="217" stroke-opacity="0.15"/><line x1="70" y1="202" x2="545" y2="202" stroke-opacity="0.35"/><line x1="70" y1="187" x2="545" y2="187" stroke-opacity="0.15"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.35"/><line x1="70" y1="157" x2="545" y2="157" stroke-opacity="0.15"/><line x1="70" y1="142" x2="545" y2="142" stroke-opacity="0.35"/><line x1="70" y1="127" x2="545" y2="127" stroke-opacity="0.15"/><line x1="70" y1="112" x2="545" y2="112" stroke-opacity="0.35"/><line x1="70" y1="97" x2="545" y2="97" stroke-opacity="0.15"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="237">10</text><text x="62" y="207">20</text><text x="62" y="177">30</text><text x="62" y="147">40</text><text x="62" y="117">50</text><text x="62" y="87">60</text></g><g stroke="currentColor" stroke-width="2"><line x1="117.5" y1="262" x2="117.5" y2="267"/><line x1="212.5" y1="262" x2="212.5" y2="267"/><line x1="307.5" y1="262" x2="307.5" y2="267"/><line x1="402.5" y1="262" x2="402.5" y2="267"/><line x1="497.5" y1="262" x2="497.5" y2="267"/></g><polyline points="117.5,172 212.5,127 307.5,202 402.5,112 497.5,157" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="117.5" cy="172" r="5.5" fill="var(--vurgu)"/><circle cx="212.5" cy="127" r="5.5" fill="var(--vurgu)"/><circle cx="307.5" cy="202" r="5.5" fill="var(--vurgu)"/><circle cx="402.5" cy="112" r="5.5" fill="var(--vurgu)"/><circle cx="497.5" cy="157" r="5.5" fill="var(--vurgu)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="117.5" y="282">Pazartesi</text><text x="212.5" y="282">Salı</text><text x="307.5" y="282">Çarşamba</text><text x="402.5" y="282">Perşembe</text><text x="497.5" y="282">Cuma</text></g></svg>`,
  secenekler: ["20", "30", "35", "36"],
  dogru: 2,
  hatalar: [
    "Değerleri sıralamadan haftanın ortasındaki günün (çarşamba) süresini aldın. Ortanca, veriler küçükten büyüğe sıralandıktan sonra ortada kalan değerdir.",
    "Açıklığı buldun: 50 − 20 = 30. Açıklık, en büyük ile en küçük değerin farkıdır; ortanca değildir.",
    null,
    "Aritmetik ortalamayı buldun: 180 : 5 = 36. Ortalama ile ortanca farklı kavramlardır."
  ],
  aciklama: `Ortanca, bir veri grubu küçükten büyüğe sıralandığında tam ortada kalan değerdir. Veri sayısı tek ise ortada tek bir değer kalır.
Adım 1: Grafikten süreleri oku: pazartesi 30, salı 45, çarşamba 20, perşembe 50, cuma 35 dakika. 45 ve 35, etiketlerin ortasındaki ara çizgilerdedir.
Adım 2: Küçükten büyüğe sırala: 20, 30, 35, 45, 50.
Adım 3: Beş değerin ortasındaki üçüncü değer 35'tir.
Sağlama: 35'ten küçük iki değer (20, 30) ve büyük iki değer (45, 50) vardır; 35 gerçekten ortadadır.
Sık yapılan hata: Grafikteki sırayla ortadaki günü almak. Grafik günlere göre dizilmiştir, büyüklüğe göre değil; önce sıralamalısın.
Cevap C.`
},
{
  id: "mat-va-203",
  kazanim: "M.8.4.1.2",
  kademe: 2,
  zorluk: 2,
  soru: "Okulun bilim kulübü, dört ayrı veri grubunu panoda birer daire grafiğiyle göstermeyi planlamaktadır. Kulübün danışman öğretmeni, bu veri gruplarından birinin daire grafiğine uygun olmadığını ve başka bir grafik türüyle gösterilmesi gerektiğini söylemiştir.\n**Buna göre daire grafiğiyle gösterilmesi __uygun olmayan__ veri grubu aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Kantinde bir günde satılan 240 simidin sabah, öğle ve akşama göre sayıları", "60 dönümlük bir tarlanın buğday, arpa ve mısıra ayrılmış üç bölümünün alanları", "Okuldaki 300 öğrencinin okula yaya, servisle ya da otobüsle gelişine göre sayıları", "Okul basketbol takımındaki beş oyuncunun santimetre cinsinden boy uzunlukları"],
  dogru: 3,
  hatalar: [
    "Veride sabah, öğle ve akşam geçtiği için zamana bağlı bir değişim sandın. Oysa her simit tek bir zaman diliminde satılmıştır ve üç sayının toplamı 240'tır; bu bir bütünün parçalarıdır, daire grafiğine uygundur.",
    "Veri bir sayım değil, dönümle ölçülen bir alan olduğu için daire grafiğine uygun olmadığını düşündün. Tarla 60 dönümlük bir bütündür ve üç bölümün alanları toplanınca 60 dönüm eder; ölçülen büyüklükler de bir bütünün parçalarıysa daire grafiğiyle gösterilebilir.",
    "Geliş biçimi bir sayı olmadığı için grafiğe dökülemeyeceğini düşündün. 300 öğrencinin her biri tek bir yolla gelir; üç grubun sayıları toplanınca 300 eder ve her grup bir dilimle gösterilebilir.",
    null
  ],
  aciklama: `Bir veri grubunun daire grafiğiyle gösterilebilmesi için değerlerin toplamı anlamlı bir bütün oluşturmalı ve her birim yalnızca bir parçaya girmelidir. Bunu sınamanın kısa yolu, "Bu değerlerin toplamı neyi gösterir?" diye sormaktır.
Adım 1: A'da toplam, o gün satılan 240 simittir; B'de toplam, tarlanın tamamı olan 60 dönümdür; C'de toplam, okuldaki 300 öğrencidir. Bu üç veri grubu birer bütünün parçalarıdır ve daire grafiğine uygundur.
Adım 2: D'de beş oyuncunun boyları toplanırsa anlamlı bir bütün ortaya çıkmaz; "Bir oyuncunun boyu, boyların toplamının yüzde kaçıdır?" sorusunun bir anlamı yoktur. Oyuncuların boylarını karşılaştırmak için sütun grafiği kullanılır.
Sağlama: A şıkkındaki zaman sözcükleri seni yanıltmasın. Satışlar gün içindeki zamana göre ayrılmış olsa da her simit tek bir dilime girer ve dilimlerin toplamı 240 eder.
Sık yapılan hata: Sayım dışındaki verileri (alan, para gibi) daire grafiğine uygunsuz saymak ya da içinde zaman geçen her veriyi çizgi grafiğine ayırmak. Belirleyici olan, değerlerin bir bütünün parçaları olup olmadığıdır.
Cevap D.`
},
{
  id: "mat-va-204",
  kazanim: "M.8.4.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir botanik bahçesinin kuzey ve güney kapılarından bir hafta boyunca giren ziyaretçi sayıları aşağıdaki grafikte verilmiştir.\n**Buna göre kaç gün kuzey kapısından giren ziyaretçi sayısı, güney kapısından girenlerin sayısından fazladır?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="İki veri gruplu sütun grafiği: kuzey ve güney kapılarından bir hafta boyunca giren ziyaretçi sayıları"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Kapılardan giren ziyaretçi sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">Ziyaretçi sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="64" y1="244" x2="552" y2="244" stroke-opacity="0.35"/><line x1="64" y1="226" x2="552" y2="226" stroke-opacity="0.35"/><line x1="64" y1="208" x2="552" y2="208" stroke-opacity="0.35"/><line x1="64" y1="190" x2="552" y2="190" stroke-opacity="0.35"/><line x1="64" y1="172" x2="552" y2="172" stroke-opacity="0.35"/><line x1="64" y1="154" x2="552" y2="154" stroke-opacity="0.35"/><line x1="64" y1="136" x2="552" y2="136" stroke-opacity="0.35"/><line x1="64" y1="118" x2="552" y2="118" stroke-opacity="0.35"/><line x1="64" y1="100" x2="552" y2="100" stroke-opacity="0.35"/><line x1="64" y1="82" x2="552" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="64" y1="68" x2="64" y2="262"/><line x1="64" y1="262" x2="552" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="56" y="267">0</text><text x="56" y="249">20</text><text x="56" y="231">40</text><text x="56" y="213">60</text><text x="56" y="195">80</text><text x="56" y="177">100</text><text x="56" y="159">120</text><text x="56" y="141">140</text><text x="56" y="123">160</text><text x="56" y="105">180</text><text x="56" y="87">200</text></g><rect x="71.67" y="154" width="27.19" height="108" fill="var(--vurgu)"/><rect x="98.86" y="172" width="27.19" height="90" fill="var(--vurgu2)"/><rect x="141.38" y="190" width="27.19" height="72" fill="var(--vurgu)"/><rect x="168.57" y="154" width="27.19" height="108" fill="var(--vurgu2)"/><rect x="211.1" y="136" width="27.19" height="126" fill="var(--vurgu)"/><rect x="238.29" y="136" width="27.19" height="126" fill="var(--vurgu2)"/><rect x="280.81" y="172" width="27.19" height="90" fill="var(--vurgu)"/><rect x="308" y="208" width="27.19" height="54" fill="var(--vurgu2)"/><rect x="350.53" y="118" width="27.19" height="144" fill="var(--vurgu)"/><rect x="377.71" y="100" width="27.19" height="162" fill="var(--vurgu2)"/><rect x="420.24" y="100" width="27.19" height="162" fill="var(--vurgu)"/><rect x="447.43" y="100" width="27.19" height="162" fill="var(--vurgu2)"/><rect x="489.95" y="136" width="27.19" height="126" fill="var(--vurgu)"/><rect x="517.14" y="118" width="27.19" height="144" fill="var(--vurgu2)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="98.86" y="282">Pazartesi</text><text x="168.57" y="282">Salı</text><text x="238.29" y="282">Çarşamba</text><text x="308" y="282">Perşembe</text><text x="377.71" y="282">Cuma</text><text x="447.43" y="282">Cumartesi</text><text x="517.14" y="282">Pazar</text></g><rect x="285.2" y="42" width="14" height="14" fill="var(--vurgu)"/><text x="309.2" y="54" font-size="14" fill="currentColor">Kuzey kapısı</text><rect x="423.6" y="42" width="14" height="14" fill="var(--vurgu2)"/><text x="447.6" y="54" font-size="14" fill="currentColor">Güney kapısı</text></svg>`,
  secenekler: ["2", "3", "4", "5"],
  dogru: 0,
  hatalar: [
    null,
    "Lejantı ters okudun: güney kapısından girenlerin fazla olduğu günleri (salı, cuma ve pazar) saydın.",
    "İki kapıdan eşit sayıda ziyaretçinin girdiği çarşamba ve cumartesiyi de saydın. Eşitlik, 'fazla' demek değildir.",
    "Hem lejantı ters okudun hem de eşit olan günleri saydın: güneyin kuzeyden az olmadığı 5 günü buldun."
  ],
  aciklama: `İki veri gruplu sütun grafiğinde her günün iki sütunu vardır. "Hangisi fazla?" sorusunda eşit olan günler sayılmaz.
Adım 1: Açıklamaya göre her günün soldaki sütunu kuzey, sağdaki sütunu güney kapısıdır.
Adım 2: Günleri karşılaştır (kuzey, güney): pazartesi 120 ve 100; salı 80 ve 120; çarşamba 140 ve 140; perşembe 100 ve 60; cuma 160 ve 180; cumartesi 180 ve 180; pazar 140 ve 160.
Adım 3: Kuzeyin fazla olduğu günler pazartesi ve perşembedir; yani 2 gün.
Sağlama: 7 günün 2'sinde kuzey fazla, 2'sinde eşit, 3'ünde güney fazladır: 2 + 2 + 3 = 7.
Sık yapılan hata: Eşit günleri de "fazla" saymak ya da sütunların hangi kapıya ait olduğunu karıştırmak.
Cevap A.`
},
{
  id: "mat-va-205",
  kazanim: "M.8.4.1.2",
  kademe: 2,
  zorluk: 2,
  soru: "Bir çiftlikteki hayvanların türlere göre dağılımı aşağıdaki daire grafiğinde verilmiştir. Çiftlikte bu dört türün dışında hayvan yoktur ve tavukların sayısı, ineklerin sayısından 30 fazladır.\n**Buna göre çiftlikte toplam kaç hayvan vardır?**",
  gorsel: `<svg viewBox="0 0 560 352" role="img" aria-label="Daire grafiği: tavuk 160 derece, koyun 80 derece, inek 40 derece, keçi 80 derece"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Çiftlikteki hayvanların türlere göre dağılımı</text><g stroke="currentColor" stroke-width="2"><path d="M280 192 L280 82 A110 110 0 0 1 317.62 295.37 Z" fill="var(--vurgu)" fill-opacity="0.35"/><path d="M280 192 L317.62 295.37 A110 110 0 0 1 184.74 247 Z" fill="var(--vurgu2)" fill-opacity="0.45"/><path d="M280 192 L184.74 247 A110 110 0 0 1 171.67 172.9 Z" fill="var(--dolgu)"/><path d="M280 192 L171.67 172.9 A110 110 0 0 1 280 82 Z" fill="currentColor" fill-opacity="0.12"/></g><g font-size="14" fill="currentColor"><text x="400.15" y="167.81" text-anchor="start">Tavuk</text><text x="400.15" y="184.81" text-anchor="start" font-weight="bold">160°</text><text x="238.27" y="318.64" text-anchor="end">Koyun</text><text x="238.27" y="335.64" text-anchor="end" font-weight="bold">80°</text><text x="159.85" y="210.19" text-anchor="end">İnek</text><text x="159.85" y="227.19" text-anchor="end" font-weight="bold">40°</text><text x="201.58" y="78.54" text-anchor="end">Keçi</text><text x="201.58" y="95.54" text-anchor="end" font-weight="bold">80°</text></g></svg>`,
  secenekler: ["10", "40", "90", "270"],
  dogru: 2,
  hatalar: [
    "İnek sayısını buldun ve orada durdun. Soru çiftlikteki bütün hayvanları soruyor.",
    "Tavuk sayısını buldun ve orada durdun. Soru çiftlikteki bütün hayvanları soruyor.",
    null,
    "30'u ineklerin sayısı sandın: 40° → 30 hayvan ise 360° → 270 hayvan olur. Oysa 30, tavuklarla inekler arasındaki farktır."
  ],
  aciklama: `Daire grafiğinde iki dilimin açı farkı, o iki grubun sayı farkına karşılık gelir.
Adım 1: Tavuk dilimi 160°, inek dilimi 40°'dir. Aradaki fark 160° − 40° = 120°'dir.
Adım 2: Bu 120°'lik fark 30 hayvana karşılık gelir. 360°, 120°'nin 3 katıdır.
Adım 3: Öyleyse bütün hayvanların sayısı 3 · 30 = 90'dır.
Sağlama: 90 hayvan 360°'ye karşılık geldiğine göre her 4°'lik açı 1 hayvandır. Tavuk 160 : 4 = 40, inek 40 : 4 = 10, koyun ve keçi 80 : 4 = 20'şer. 40 − 10 = 30 ve 40 + 20 + 10 + 20 = 90. Tutuyor.
Sık yapılan hata: Verilen farkı bir dilimin kendisi sanmak. 30, tek bir türün sayısı değil, iki türün sayıları arasındaki farktır.
Cevap C.`
},
{
  id: "mat-va-206",
  kazanim: "M.8.4.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir sahil kasabasındaki Martı ve Yunus pansiyonlarında her ayın ilk günü dolu olan oda sayıları aşağıdaki çizgi grafiğinde verilmiştir.\n**Buna göre hangi ayın ilk günü Martı Pansiyonu'ndaki dolu oda sayısı, Yunus Pansiyonu'ndakinin 2 katıdır?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="İki veri gruplu çizgi grafiği: Martı ve Yunus pansiyonlarında mayıstan eylüle dolu oda sayıları"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Pansiyonlarda dolu oda sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">Dolu oda sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="244" x2="545" y2="244" stroke-opacity="0.15"/><line x1="70" y1="226" x2="545" y2="226" stroke-opacity="0.35"/><line x1="70" y1="208" x2="545" y2="208" stroke-opacity="0.15"/><line x1="70" y1="190" x2="545" y2="190" stroke-opacity="0.35"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.15"/><line x1="70" y1="154" x2="545" y2="154" stroke-opacity="0.35"/><line x1="70" y1="136" x2="545" y2="136" stroke-opacity="0.15"/><line x1="70" y1="118" x2="545" y2="118" stroke-opacity="0.35"/><line x1="70" y1="100" x2="545" y2="100" stroke-opacity="0.15"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="231">4</text><text x="62" y="195">8</text><text x="62" y="159">12</text><text x="62" y="123">16</text><text x="62" y="87">20</text></g><g stroke="currentColor" stroke-width="2"><line x1="117.5" y1="262" x2="117.5" y2="267"/><line x1="212.5" y1="262" x2="212.5" y2="267"/><line x1="307.5" y1="262" x2="307.5" y2="267"/><line x1="402.5" y1="262" x2="402.5" y2="267"/><line x1="497.5" y1="262" x2="497.5" y2="267"/></g><polyline points="117.5,190 212.5,118 307.5,100 402.5,82 497.5,208" fill="none" stroke="var(--vurgu)" stroke-width="3"/><polyline points="117.5,208 212.5,190 307.5,118 402.5,154 497.5,154" fill="none" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="9 5"/><circle cx="117.5" cy="190" r="5.5" fill="var(--vurgu)"/><circle cx="212.5" cy="118" r="5.5" fill="var(--vurgu)"/><circle cx="307.5" cy="100" r="5.5" fill="var(--vurgu)"/><circle cx="402.5" cy="82" r="5.5" fill="var(--vurgu)"/><circle cx="497.5" cy="208" r="5.5" fill="var(--vurgu)"/><rect x="112.5" y="203" width="10" height="10" fill="var(--vurgu2)"/><rect x="207.5" y="185" width="10" height="10" fill="var(--vurgu2)"/><rect x="302.5" y="113" width="10" height="10" fill="var(--vurgu2)"/><rect x="397.5" y="149" width="10" height="10" fill="var(--vurgu2)"/><rect x="492.5" y="149" width="10" height="10" fill="var(--vurgu2)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="117.5" y="282">Mayıs</text><text x="212.5" y="282">Haziran</text><text x="307.5" y="282">Temmuz</text><text x="402.5" y="282">Ağustos</text><text x="497.5" y="282">Eylül</text></g><line x1="400" y1="49" x2="420" y2="49" stroke="var(--vurgu)" stroke-width="3"/><circle cx="410" cy="49" r="5.5" fill="var(--vurgu)"/><text x="424" y="54" font-size="14" fill="currentColor">Martı</text><line x1="481" y1="49" x2="501" y2="49" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="9 5"/><rect x="486" y="44" width="10" height="10" fill="var(--vurgu2)"/><text x="505" y="54" font-size="14" fill="currentColor">Yunus</text></svg>`,
  secenekler: ["Haziran", "Temmuz", "Ağustos", "Eylül"],
  dogru: 0,
  hatalar: [
    null,
    "Farkı 2 olan ayı seçtin (18 − 16 = 2). '2 katı' bir fark değil, çarpma ilişkisidir: 16'nın 2 katı 32'dir.",
    "Martı'nın en yüksek noktasının olduğu ayı seçtin. Ağustosta Martı 20, Yunus 12 odadır; 12'nin 2 katı 24'tür.",
    "Çizgileri karıştırdın. Eylülde Yunus'un dolu oda sayısı (12), Martı'nınkinin (6) 2 katıdır; soru bunun tersini istiyor."
  ],
  aciklama: `"A, B'nin 2 katıdır" demek A = 2 · B demektir. Bunu kontrol etmek için her ayda iki çizginin değerini ayrı ayrı okuruz.
Adım 1: Değerleri oku (Martı, Yunus): mayıs 8 ve 6; haziran 16 ve 8; temmuz 18 ve 16; ağustos 20 ve 12; eylül 6 ve 12.
Adım 2: Her ayda Yunus'un değerini 2 ile çarp ve Martı'yla karşılaştır: 12 ≠ 8; 16 = 16; 32 ≠ 18; 24 ≠ 20; 24 ≠ 6.
Adım 3: Eşitliğin sağlandığı tek ay hazirandır.
Sağlama: Haziranda 16 : 8 = 2. Martı'nın dolu oda sayısı gerçekten Yunus'unkinin 2 katıdır.
Sık yapılan hata: "2 katı" ile "2 fazlası"nı karıştırmak ya da hangi çizginin hangi pansiyona ait olduğunu kontrol etmemek.
Cevap A.`
},
{
  id: "mat-va-207",
  kazanim: "M.8.4.1.2",
  kademe: 2,
  zorluk: 2,
  soru: "Bir serada yetiştirilen çiçek fidelerinin türlere göre sayısı aşağıdaki sütun grafiğinde verilmiştir. Sera sahibi, bu verileri daire grafiğine dönüştürüp bir tanıtım broşürüne koyacaktır.\n**Buna göre hangi çiçeğin fidelerini gösteren dilimin merkez açısı 90° olur?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Sütun grafiği: lale, sümbül, zambak ve nergis fidelerinin sayısı"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Seradaki çiçek fidelerinin türlere göre sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">Fide sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="240" x2="545" y2="240" stroke-opacity="0.35"/><line x1="70" y1="218" x2="545" y2="218" stroke-opacity="0.35"/><line x1="70" y1="196" x2="545" y2="196" stroke-opacity="0.35"/><line x1="70" y1="174" x2="545" y2="174" stroke-opacity="0.35"/><line x1="70" y1="152" x2="545" y2="152" stroke-opacity="0.35"/><line x1="70" y1="130" x2="545" y2="130" stroke-opacity="0.35"/><line x1="70" y1="108" x2="545" y2="108" stroke-opacity="0.35"/><line x1="70" y1="86" x2="545" y2="86" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="72" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="245">10</text><text x="62" y="223">20</text><text x="62" y="201">30</text><text x="62" y="179">40</text><text x="62" y="157">50</text><text x="62" y="135">60</text><text x="62" y="113">70</text><text x="62" y="91">80</text></g><rect x="101.38" y="108" width="56" height="154" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="220.13" y="218" width="56" height="44" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="338.88" y="196" width="56" height="66" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="457.63" y="174" width="56" height="88" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="129.38" y="282">Lale</text><text x="248.13" y="282">Sümbül</text><text x="366.88" y="282">Zambak</text><text x="485.63" y="282">Nergis</text></g></svg>`,
  secenekler: ["Lale", "Sümbül", "Zambak", "Nergis"],
  dogru: 3,
  hatalar: [
    "En uzun sütunu seçtin. En uzun sütun en büyük dilimi verir ama lale 160 fidenin dörtte birinden fazladır; dilimi 90°'den büyük olur.",
    "Dik açıyı dairenin sekizde biri sandın. 90°, 360°'nin dörtte biridir; 20 ise 160'ın sekizde biridir.",
    "Toplamı bulurken nergisi atladın: 70 + 20 + 30 = 120. 120'nin dörtte biri 30 olduğu için zambağı seçtin.",
    null
  ],
  aciklama: `90°, 360°'nin dörtte biridir. Öyleyse daire grafiğinde 90°'lik dilim, toplamın dörtte birini gösterir.
Adım 1: Sütunları oku ve topla: 70 + 20 + 30 + 40 = 160 fide.
Adım 2: Toplamın dörtte biri: 160 : 4 = 40.
Adım 3: 40 fideyi gösteren sütun nergise aittir; nergis dilimi 90° olur.
Sağlama: Nergisin payı [[40|160]] = [[1|4]]'tür ve [[1|4]] · 360° = 90°. Diğer çiçeklerin hiçbiri 40 fide değildir; lale, sümbül ve zambağın dilimleri 90°'den farklı olur.
Sık yapılan hata: Toplamı eksik bulmak. Dönüşümde bütün sütunlar toplama katılmalıdır.
Cevap D.`
},
{
  id: "mat-va-208",
  kazanim: "M.8.4.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Zeynep, 120 sayfalık bir romanı beş günde bitirmiştir. Okurken her akşam o güne kadar okuduğu toplam sayfa sayısını not etmiş ve aşağıdaki çizgi grafiğini çizmiştir.\n**Buna göre Zeynep en çok sayfayı hangi gün okumuştur?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Çizgi grafiği: pazartesiden cumaya her akşam o güne kadar okunan toplam sayfa sayısı"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Zeynep'in okuduğu toplam sayfa sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">Toplam sayfa</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="247" x2="545" y2="247" stroke-opacity="0.15"/><line x1="70" y1="232" x2="545" y2="232" stroke-opacity="0.35"/><line x1="70" y1="217" x2="545" y2="217" stroke-opacity="0.15"/><line x1="70" y1="202" x2="545" y2="202" stroke-opacity="0.35"/><line x1="70" y1="187" x2="545" y2="187" stroke-opacity="0.15"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.35"/><line x1="70" y1="157" x2="545" y2="157" stroke-opacity="0.15"/><line x1="70" y1="142" x2="545" y2="142" stroke-opacity="0.35"/><line x1="70" y1="127" x2="545" y2="127" stroke-opacity="0.15"/><line x1="70" y1="112" x2="545" y2="112" stroke-opacity="0.35"/><line x1="70" y1="97" x2="545" y2="97" stroke-opacity="0.15"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="237">20</text><text x="62" y="207">40</text><text x="62" y="177">60</text><text x="62" y="147">80</text><text x="62" y="117">100</text><text x="62" y="87">120</text></g><g stroke="currentColor" stroke-width="2"><line x1="117.5" y1="262" x2="117.5" y2="267"/><line x1="212.5" y1="262" x2="212.5" y2="267"/><line x1="307.5" y1="262" x2="307.5" y2="267"/><line x1="402.5" y1="262" x2="402.5" y2="267"/><line x1="497.5" y1="262" x2="497.5" y2="267"/></g><polyline points="117.5,217 212.5,202 307.5,142 402.5,112 497.5,82" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="117.5" cy="217" r="5.5" fill="var(--vurgu)"/><circle cx="212.5" cy="202" r="5.5" fill="var(--vurgu)"/><circle cx="307.5" cy="142" r="5.5" fill="var(--vurgu)"/><circle cx="402.5" cy="112" r="5.5" fill="var(--vurgu)"/><circle cx="497.5" cy="82" r="5.5" fill="var(--vurgu)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="117.5" y="282">Pazartesi</text><text x="212.5" y="282">Salı</text><text x="307.5" y="282">Çarşamba</text><text x="402.5" y="282">Perşembe</text><text x="497.5" y="282">Cuma</text></g></svg>`,
  secenekler: ["Pazartesi", "Salı", "Çarşamba", "Cuma"],
  dogru: 2,
  hatalar: [
    "Pazartesi 30 sayfa okunmuştur; bu doğru ama diğer günlerde de iki nokta arasındaki farka bakmalısın. Çarşamba 80 − 40 = 40 sayfa okunmuştur.",
    "Çizginin en yatık olduğu aralığı en çok okunan gün sandın. Salı yalnızca 40 − 30 = 10 sayfa okunmuştur.",
    null,
    "Grafiğin en yüksek noktasını seçtin. Bu grafik gün sonuna kadar okunan toplam sayfayı gösterir; cuma günü okunan sayfa 120 − 100 = 20'dir."
  ],
  aciklama: `Bu grafikte her nokta o güne kadar okunan toplam sayfa sayısını gösterir. Bir günde okunan sayfa sayısı, o günün noktasından bir önceki günün noktası çıkarılarak bulunur.
Adım 1: Noktaları oku: 30, 40, 80, 100, 120.
Adım 2: Günlük okunan sayfaları bul: pazartesi 30; salı 40 − 30 = 10; çarşamba 80 − 40 = 40; perşembe 100 − 80 = 20; cuma 120 − 100 = 20.
Adım 3: En büyük günlük değer 40'tır; Zeynep en çok sayfayı çarşamba okumuştur.
Sağlama: 30 + 10 + 40 + 20 + 20 = 120. Günlük sayfaların toplamı, son noktadaki toplamı veriyor.
Sık yapılan hata: Toplamı gösteren bir grafikte en yüksek noktayı "en çok" sanmak. Böyle grafiklerde çizginin en dik çıktığı yer, en çok okunan gündür.
Cevap C.`
},
{
  id: "mat-va-209",
  kazanim: "M.8.4.1.2",
  kademe: 2,
  zorluk: 2,
  soru: "Bir pastanede bir günde satılan 48 pastanın türlere göre dağılımı aşağıdaki daire grafiğinde verilmiştir. Grafikte havuçlu pastayı gösteren dilimin açısı yazılmamıştır.\n**Buna göre bu pastanede o gün kaç havuçlu pasta satılmıştır?**",
  gorsel: `<svg viewBox="0 0 560 352" role="img" aria-label="Daire grafiği: çikolatalı 135 derece, meyveli 90 derece, havuçlu dilimin açısı yazılmamış, frambuazlı 75 derece"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Satılan pastaların türlere göre dağılımı</text><g stroke="currentColor" stroke-width="2"><path d="M280 192 L280 82 A110 110 0 0 1 357.78 269.78 Z" fill="var(--vurgu)" fill-opacity="0.35"/><path d="M280 192 L357.78 269.78 A110 110 0 0 1 202.22 269.78 Z" fill="var(--vurgu2)" fill-opacity="0.45"/><path d="M280 192 L202.22 269.78 A110 110 0 0 1 173.75 163.53 Z" fill="var(--dolgu)"/><path d="M280 192 L173.75 163.53 A110 110 0 0 1 280 82 Z" fill="currentColor" fill-opacity="0.12"/></g><g font-size="14" fill="currentColor"><text x="392.71" y="142.31" text-anchor="start">Çikolatalı</text><text x="392.71" y="159.31" text-anchor="start" font-weight="bold">135°</text><text x="280" y="326" text-anchor="middle">Meyveli</text><text x="280" y="343" text-anchor="middle" font-weight="bold">90°</text><text x="162.16" y="220.58" text-anchor="end">Havuçlu</text><text x="162.16" y="237.58" text-anchor="end" font-weight="bold">?</text><text x="205.73" y="75.21" text-anchor="end">Frambuazlı</text><text x="205.73" y="92.21" text-anchor="end" font-weight="bold">75°</text></g></svg>`,
  secenekler: ["8", "12", "20", "60"],
  dogru: 0,
  hatalar: [
    null,
    "Havuçlu dilimin açısını hesaplamadan 90° sandın ve 48'in dörtte birini aldın. Açıyı bulmalısın: 360° − (135° + 90° + 75°) = 60°.",
    "Eksik açıyı bulurken meyveli pastanın 90°'sini çıkarmayı unuttun: 360° − (135° + 75°) = 150° buldun.",
    "Eksik açıyı doğru buldun ama açıyı pasta sayısı sandın. 60° bir açı ölçüsüdür."
  ],
  aciklama: `Daire grafiğindeki bütün merkez açılarının toplamı 360°'dir. Eksik açı, bilinen açıların toplamı 360°'den çıkarılarak bulunur.
Adım 1: Havuçlu dilimin açısı: 360° − (135° + 90° + 75°) = 360° − 300° = 60°.
Adım 2: 60°, 360°'nin [[60|360]] = [[1|6]]'sıdır.
Adım 3: 48 pastanın altıda biri: 48 : 6 = 8 havuçlu pasta.
Sağlama: Diğer türleri de hesapla: çikolatalı [[135|360]] · 48 = 18, meyveli 12, frambuazlı 10. 18 + 12 + 8 + 10 = 48. Tutuyor.
Sık yapılan hata: Eksik açıyı bulup onu pasta sayısı sanmak. Açıyı bulduktan sonra toplamla orantı kurmalısın.
Cevap A.`
},
{
  id: "mat-va-210",
  kazanim: "M.8.4.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir tren istasyonundaki emanet dolaplarının bir hafta boyunca günlere göre kaç kez kiralandığı aşağıdaki sütun grafiğinde verilmiştir.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Sütun grafiği: pazartesiden cumartesiye emanet dolaplarının kiralanma sayısı"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Emanet dolaplarının günlere göre kiralanma sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">Kiralama sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="247" x2="545" y2="247" stroke-opacity="0.15"/><line x1="70" y1="232" x2="545" y2="232" stroke-opacity="0.35"/><line x1="70" y1="217" x2="545" y2="217" stroke-opacity="0.15"/><line x1="70" y1="202" x2="545" y2="202" stroke-opacity="0.35"/><line x1="70" y1="187" x2="545" y2="187" stroke-opacity="0.15"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.35"/><line x1="70" y1="157" x2="545" y2="157" stroke-opacity="0.15"/><line x1="70" y1="142" x2="545" y2="142" stroke-opacity="0.35"/><line x1="70" y1="127" x2="545" y2="127" stroke-opacity="0.15"/><line x1="70" y1="112" x2="545" y2="112" stroke-opacity="0.35"/><line x1="70" y1="97" x2="545" y2="97" stroke-opacity="0.15"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="237">10</text><text x="62" y="207">20</text><text x="62" y="177">30</text><text x="62" y="147">40</text><text x="62" y="117">50</text><text x="62" y="87">60</text></g><rect x="87.81" y="187" width="43.54" height="75" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="166.98" y="202" width="43.54" height="60" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="246.15" y="157" width="43.54" height="105" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="325.31" y="202" width="43.54" height="60" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="404.48" y="142" width="43.54" height="120" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="483.65" y="82" width="43.54" height="180" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="109.58" y="282">Pazartesi</text><text x="188.75" y="282">Salı</text><text x="267.92" y="282">Çarşamba</text><text x="347.08" y="282">Perşembe</text><text x="426.25" y="282">Cuma</text><text x="505.42" y="282">Cumartesi</text></g></svg>`,
  secenekler: ["Yalnızca bir gün 40'tan fazla kiralama yapılmıştır.", "Bütün günlerde 20'den fazla kiralama yapılmıştır.", "Çarşambadan sonra kiralamalar hiç azalmamıştır.", "Cuma günkü kiralama, pazartesinin iki katıdır."],
  dogru: 0,
  hatalar: [
    null,
    "Salı ve perşembe tam 20 kiralama yapılmıştır. 20, '20'den fazla' sayılmaz; sınırı dahil ettin.",
    "Çarşambadan perşembeye kiralamalar 35'ten 20'ye düşmüştür. Cumadan sonraki yükselişe bakıp bütün aralık için genelleme yaptın.",
    "Pazartesi sütununu 20 okudun; sütun 20 ile 30 arasındaki ara çizgide, yani 25'tedir. 40, 25'in iki katı değildir."
  ],
  aciklama: `"Hangisi doğrudur?" sorularında her ifade grafikteki verilerle tek tek sınanır. "Fazla", "hiç", "bütün" gibi sözcüklere özellikle dikkat edilir.
Adım 1: Sütunları oku: pazartesi 25, salı 20, çarşamba 35, perşembe 20, cuma 40, cumartesi 60.
Adım 2: A: 40'tan fazla olan tek gün cumartesidir (60). Cuma tam 40'tır, 40'tan fazla değildir. İfade doğrudur.
Adım 3: B: Salı ve perşembe 20'dir; 20'den fazla değildir. C: Çarşambadan perşembeye 35'ten 20'ye düşüş vardır. D: 2 · 25 = 50 ≠ 40. Üçü de yanlıştır.
Sağlama: A şıkkındaki "yalnızca" sözcüğünü sınamak için 40 çizgisinin üstüne çıkan sütunları say: yalnızca cumartesinin sütunu bu çizgiyi aşar.
Sık yapılan hata: Sınırdaki değeri (20 ya da 40) "fazla" saymak. Tam sınırda biten sütun, sınırdan fazla değildir.
Cevap A.`
},
{
  id: "mat-va-211",
  kazanim: "M.8.4.1.2",
  kademe: 2,
  zorluk: 2,
  soru: "Bir köy okulunun kütüphanesine bağışlanan kitapların türlere göre dağılımı aşağıdaki daire grafiğinde verilmiştir. Bağışlanan öykü ve ansiklopedilerin sayısı toplam 18'dir. Okulun kitap kulübü bu verileri, dikey ekseni kitap sayısını gösteren bir sütun grafiğine dönüştürecektir.\n**Buna göre roman sütunu kaç kitabı gösterecek biçimde çizilmelidir?**",
  gorsel: `<svg viewBox="0 0 560 352" role="img" aria-label="Daire grafiği: öykü 90 derece, ansiklopedi 45 derece, roman 150 derece, şiir 75 derece"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Bağışlanan kitapların türlere göre dağılımı</text><g stroke="currentColor" stroke-width="2"><path d="M280 192 L280 82 A110 110 0 0 1 390 192 Z" fill="var(--vurgu)" fill-opacity="0.35"/><path d="M280 192 L390 192 A110 110 0 0 1 357.78 269.78 Z" fill="var(--vurgu2)" fill-opacity="0.45"/><path d="M280 192 L357.78 269.78 A110 110 0 0 1 173.75 163.53 Z" fill="var(--dolgu)"/><path d="M280 192 L173.75 163.53 A110 110 0 0 1 280 82 Z" fill="currentColor" fill-opacity="0.12"/></g><g font-size="14" fill="currentColor"><text x="374" y="98" text-anchor="start">Öykü</text><text x="374" y="115" text-anchor="start" font-weight="bold">90°</text><text x="402" y="242" text-anchor="start">Ansiklopedi</text><text x="402" y="259" text-anchor="start" font-weight="bold">45°</text><text x="216" y="306" text-anchor="end">Roman</text><text x="216" y="323" text-anchor="end" font-weight="bold">150°</text><text x="200" y="86" text-anchor="end">Şiir</text><text x="200" y="103" text-anchor="end" font-weight="bold">75°</text></g></svg>`,
  secenekler: ["15", "20", "30", "48"],
  dogru: 1,
  hatalar: [
    "18 kitabı iki türe eşit paylaştırıp öyküyü 9 kitap aldın: 90° → 9 kitap ise 150° → 15 kitap olur. Oysa öykü dilimi, ansiklopedi diliminin 2 katıdır; iki türün kitap sayıları eşit değildir.",
    null,
    "18 kitabı yalnızca öykü dilimine (90°) ait sandın: 90° → 18 kitap ise 150° → 30 kitap olur. 18, öykü ve ansiklopedinin birlikte oluşturduğu 135°'lik açıya karşılık gelir.",
    "Bağışlanan kitapların toplamını buldun ve orada durdun. Soru yalnızca roman sütununu soruyor."
  ],
  aciklama: `Daire grafiğinde dilim açıları, gösterdikleri kitap sayılarıyla doğru orantılıdır. İki dilimin toplam değeri verilmişse önce bu iki dilimin açıları toplanır.
Adım 1: Öykü ve ansiklopedi dilimlerinin açılarını topla: 90° + 45° = 135°. Bu 135°'lik açı 18 kitabı gösterir.
Adım 2: 135° = 9 · 15° olduğundan 15°'lik bir dilim 18 : 9 = 2 kitaba karşılık gelir.
Adım 3: Roman dilimi 150° = 10 · 15°'dir. Roman sütunu 10 · 2 = 20 kitabı gösterecek biçimde çizilmelidir.
Sağlama: Türleri tek tek bul: öykü 6 · 2 = 12, ansiklopedi 3 · 2 = 6, şiir 5 · 2 = 10, roman 20. Öykü ile ansiklopedi 12 + 6 = 18 eder; bütün kitaplar 20 + 12 + 6 + 10 = 48'dir ve bu da 360° = 24 · 15° → 24 · 2 = 48 ile tutar.
Sık yapılan hata: Verilen 18'i iki dilimden yalnızca birine ait sanmak ya da iki dilime eşit paylaştırmak. 18, iki dilimin birlikte oluşturduğu 135°'lik açıya karşılık gelir.
Cevap B.`
},
{
  id: "mat-va-212",
  kazanim: "M.8.4.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir grup yürüyüşçü, bir dağ yürüyüşünde saat 08.00'den 14.00'e kadar her saat başında bulundukları yüksekliği ölçmüş ve aşağıdaki çizgi grafiğini çizmiştir.\n**Buna göre grafikte yüksekliğin değişmediği görülen zaman aralıkları toplam kaç saattir?**",
  gorsel: `<svg viewBox="0 0 560 312" role="img" aria-label="Çizgi grafiği: saat 08.00'den 14.00'e kadar her saat başında ölçülen yükseklik"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Yürüyüşçülerin bulunduğu yükseklik</text><text x="10" y="54" font-size="14" fill="currentColor">Yükseklik (m)</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="237" x2="545" y2="237" stroke-opacity="0.35"/><line x1="70" y1="212" x2="545" y2="212" stroke-opacity="0.35"/><line x1="70" y1="187" x2="545" y2="187" stroke-opacity="0.35"/><line x1="70" y1="162" x2="545" y2="162" stroke-opacity="0.35"/><line x1="70" y1="137" x2="545" y2="137" stroke-opacity="0.35"/><line x1="70" y1="112" x2="545" y2="112" stroke-opacity="0.35"/><line x1="70" y1="87" x2="545" y2="87" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="73" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="242">200</text><text x="62" y="217">400</text><text x="62" y="192">600</text><text x="62" y="167">800</text><text x="62" y="142">1000</text><text x="62" y="117">1200</text><text x="62" y="92">1400</text></g><g stroke="currentColor" stroke-width="2"><line x1="103.93" y1="262" x2="103.93" y2="267"/><line x1="171.79" y1="262" x2="171.79" y2="267"/><line x1="239.64" y1="262" x2="239.64" y2="267"/><line x1="307.5" y1="262" x2="307.5" y2="267"/><line x1="375.36" y1="262" x2="375.36" y2="267"/><line x1="443.21" y1="262" x2="443.21" y2="267"/><line x1="511.07" y1="262" x2="511.07" y2="267"/></g><polyline points="103.93,212 171.79,162 239.64,162 307.5,137 375.36,112 443.21,112 511.07,162" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="103.93" cy="212" r="5.5" fill="var(--vurgu)"/><circle cx="171.79" cy="162" r="5.5" fill="var(--vurgu)"/><circle cx="239.64" cy="162" r="5.5" fill="var(--vurgu)"/><circle cx="307.5" cy="137" r="5.5" fill="var(--vurgu)"/><circle cx="375.36" cy="112" r="5.5" fill="var(--vurgu)"/><circle cx="443.21" cy="112" r="5.5" fill="var(--vurgu)"/><circle cx="511.07" cy="162" r="5.5" fill="var(--vurgu)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="103.93" y="282">08.00</text><text x="171.79" y="282">09.00</text><text x="239.64" y="282">10.00</text><text x="307.5" y="282">11.00</text><text x="375.36" y="282">12.00</text><text x="443.21" y="282">13.00</text><text x="511.07" y="282">14.00</text></g><text x="307.5" y="304" font-size="14" text-anchor="middle" fill="currentColor">Saat</text></svg>`,
  secenekler: ["1", "2", "3", "4"],
  dogru: 1,
  hatalar: [
    "Yalnızca ilk düz kısmı (09.00–10.00) saydın. 12.00 ile 13.00 arasında da yükseklik 1200 m'de sabit kalmıştır.",
    null,
    "Son saatteki inişi de saydın. 13.00 ile 14.00 arasında yükseklik 1200 m'den 800 m'ye inmiştir; bu bir değişimdir.",
    "Düz kısımların uçlarındaki noktaları saydın (dört nokta). Süreyi iki nokta arasındaki saat farkı verir: iki düz kısmın her biri 1 saattir."
  ],
  aciklama: `Çizgi grafiğinde yatay bir çizgi parçası, o aralıkta değerin değişmediğini gösterir. Parçanın süresi, iki ucundaki zamanların farkıdır.
Adım 1: Noktaları oku: 08.00'de 400, 09.00'da 800, 10.00'da 800, 11.00'de 1000, 12.00'de 1200, 13.00'te 1200, 14.00'te 800 m.
Adım 2: Yan yana iki noktanın eşit olduğu aralıkları bul: 09.00–10.00 (800 m) ve 12.00–13.00 (1200 m).
Adım 3: Her aralık 1 saattir; toplam 1 + 1 = 2 saat.
Sağlama: Diğer aralıklarda çizgi ya yukarı çıkar (08.00–09.00, 10.00–11.00, 11.00–12.00) ya da aşağı iner (13.00–14.00).
Sık yapılan hata: Süreyi noktaları sayarak bulmak. İki nokta bir aralık oluşturur; süre, aralıkların sayısıyla ölçülür.
Cevap B.`
},
{
  id: "mat-va-213",
  kazanim: "M.8.4.1.1",
  kademe: 2,
  zorluk: 2,
  soru: "Bir çiftçinin A ve B tarlalarından son dört yılda aldığı buğday miktarları aşağıdaki grafikte verilmiştir.\n**Buna göre dört yılın toplamında hangi tarladan daha çok buğday alınmıştır ve fark kaç tondur?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="İki veri gruplu sütun grafiği: A ve B tarlalarından 2023-2026 yıllarında alınan buğday miktarı"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Tarlalardan yıllara göre alınan buğday</text><text x="10" y="54" font-size="14" fill="currentColor">Buğday (ton)</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="244" x2="545" y2="244" stroke-opacity="0.35"/><line x1="70" y1="226" x2="545" y2="226" stroke-opacity="0.35"/><line x1="70" y1="208" x2="545" y2="208" stroke-opacity="0.35"/><line x1="70" y1="190" x2="545" y2="190" stroke-opacity="0.35"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.35"/><line x1="70" y1="154" x2="545" y2="154" stroke-opacity="0.35"/><line x1="70" y1="136" x2="545" y2="136" stroke-opacity="0.35"/><line x1="70" y1="118" x2="545" y2="118" stroke-opacity="0.35"/><line x1="70" y1="100" x2="545" y2="100" stroke-opacity="0.35"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="249">5</text><text x="62" y="231">10</text><text x="62" y="213">15</text><text x="62" y="195">20</text><text x="62" y="177">25</text><text x="62" y="159">30</text><text x="62" y="141">35</text><text x="62" y="123">40</text><text x="62" y="105">45</text><text x="62" y="87">50</text></g><rect x="83.06" y="100" width="46.31" height="162" fill="var(--vurgu)"/><rect x="129.38" y="118" width="46.31" height="144" fill="var(--vurgu2)"/><rect x="201.81" y="154" width="46.31" height="108" fill="var(--vurgu)"/><rect x="248.13" y="82" width="46.31" height="180" fill="var(--vurgu2)"/><rect x="320.56" y="118" width="46.31" height="144" fill="var(--vurgu)"/><rect x="366.88" y="136" width="46.31" height="126" fill="var(--vurgu2)"/><rect x="439.31" y="100" width="46.31" height="162" fill="var(--vurgu)"/><rect x="485.63" y="100" width="46.31" height="162" fill="var(--vurgu2)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="129.38" y="282">2023</text><text x="248.13" y="282">2024</text><text x="366.88" y="282">2025</text><text x="485.63" y="282">2026</text></g><rect x="334.4" y="42" width="14" height="14" fill="var(--vurgu)"/><text x="358.4" y="54" font-size="14" fill="currentColor">A tarlası</text><rect x="448.2" y="42" width="14" height="14" fill="var(--vurgu2)"/><text x="472.2" y="54" font-size="14" fill="currentColor">B tarlası</text></svg>`,
  secenekler: ["A tarlası, 5 ton", "A tarlası, 10 ton", "B tarlası, 5 ton", "B tarlası, 10 ton"],
  dogru: 3,
  hatalar: [
    "Yalnızca ilk yıla (2023) baktın: A 45, B 40 ton. Soru dört yılın toplamını soruyor.",
    "Farkı doğru buldun ama lejantı ters okudun; toplamı büyük olan B tarlasıdır.",
    "Yalnızca en uzun sütunları karşılaştırdın (B'nin 50 tonu ile A'nın 45 tonu). Toplamı bulmak için dört yılın hepsini toplamalısın.",
    null
  ],
  aciklama: `İki veri gruplu grafikte her grubun toplamı ayrı ayrı bulunur, sonra toplamlar karşılaştırılır.
Adım 1: A tarlasının sütunları: 45, 30, 40, 45. Toplam: 45 + 30 + 40 + 45 = 160 ton.
Adım 2: B tarlasının sütunları: 40, 50, 35, 45. Toplam: 40 + 50 + 35 + 45 = 170 ton.
Adım 3: B'nin toplamı daha büyüktür; fark 170 − 160 = 10 tondur.
Sağlama: Yıl yıl farklara bak (B − A): 2023'te −5, 2024'te +20, 2025'te −5, 2026'da 0. Toplam: −5 + 20 − 5 + 0 = +10. Aynı sonuç.
Sık yapılan hata: Tek bir yılın ya da en uzun sütunların farkına bakıp karar vermek. Soru dört yılın toplamını istiyor.
Cevap D.`
},
{
  id: "mat-va-214",
  kazanim: "M.8.4.1.2",
  kademe: 2,
  zorluk: 3,
  soru: "Bir gençlik merkezinin dört kursuna kayıtlı kız ve erkek öğrencilerin sayısı aşağıdaki grafikte verilmiştir. Her öğrenci tek bir kursa kayıtlıdır.\nMerkezin yönetimi, giriş panosuna yalnızca kız öğrencilerin kurslara göre dağılımını gösteren bir daire grafiği asacaktır. Bu grafikte her dilim, bir kursa kayıtlı kız öğrencileri gösterecektir.\n**Buna göre bu daire grafiğinde okçuluk kursunu gösteren dilimin merkez açısı kaç derece olmalıdır?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="İki veri gruplu sütun grafiği: ebru, gitar, kaligrafi ve okçuluk kurslarındaki kız ve erkek öğrenci sayıları"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Kurslara kayıtlı öğrenci sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">Öğrenci sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="240" x2="545" y2="240" stroke-opacity="0.15"/><line x1="70" y1="218" x2="545" y2="218" stroke-opacity="0.35"/><line x1="70" y1="196" x2="545" y2="196" stroke-opacity="0.15"/><line x1="70" y1="174" x2="545" y2="174" stroke-opacity="0.35"/><line x1="70" y1="152" x2="545" y2="152" stroke-opacity="0.15"/><line x1="70" y1="130" x2="545" y2="130" stroke-opacity="0.35"/><line x1="70" y1="108" x2="545" y2="108" stroke-opacity="0.15"/><line x1="70" y1="86" x2="545" y2="86" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="72" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="223">10</text><text x="62" y="179">20</text><text x="62" y="135">30</text><text x="62" y="91">40</text></g><rect x="83.06" y="108" width="46.31" height="154" fill="var(--vurgu)"/><rect x="129.38" y="152" width="46.31" height="110" fill="var(--vurgu2)"/><rect x="201.81" y="196" width="46.31" height="66" fill="var(--vurgu)"/><rect x="248.13" y="130" width="46.31" height="132" fill="var(--vurgu2)"/><rect x="320.56" y="218" width="46.31" height="44" fill="var(--vurgu)"/><rect x="366.88" y="174" width="46.31" height="88" fill="var(--vurgu2)"/><rect x="439.31" y="130" width="46.31" height="132" fill="var(--vurgu)"/><rect x="485.63" y="196" width="46.31" height="66" fill="var(--vurgu2)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="129.38" y="282">Ebru</text><text x="248.13" y="282">Gitar</text><text x="366.88" y="282">Kaligrafi</text><text x="485.63" y="282">Okçuluk</text></g><rect x="416.4" y="42" width="14" height="14" fill="var(--vurgu)"/><text x="440.4" y="54" font-size="14" fill="currentColor">Kız</text><rect x="481" y="42" width="14" height="14" fill="var(--vurgu2)"/><text x="505" y="54" font-size="14" fill="currentColor">Erkek</text></svg>`,
  secenekler: ["60", "90", "108", "120"],
  dogru: 3,
  hatalar: [
    "Lejantı ters okudun ve erkek öğrencilerin verisini kullandın: [[15|90]] · 360° = 60°.",
    "Kız ve erkek öğrencileri birlikte düşündün: okçulukta 45, merkezde 180 öğrenci vardır ve [[45|180]] · 360° = 90°. Daire grafiği yalnızca kızları gösterecek.",
    "30'u yüzde gibi kullanıp 360°'nin %30'unu aldın. Kız öğrencilerin toplamı 100 değil, 90'dır.",
    null
  ],
  aciklama: `Bir grafikteki veri gruplarından yalnızca biri daire grafiğine dönüştürülecekse bütün, yalnızca o grubun toplamıdır.
Adım 1: Kız öğrencilerin sütunlarını oku: ebru 35, gitar 15, kaligrafi 10, okçuluk 30. 35 ve 15, etiketlerin ortasındaki ara çizgilerdedir.
Adım 2: Kız öğrencilerin toplamı: 35 + 15 + 10 + 30 = 90.
Adım 3: Okçuluğun payı: [[30|90]] = [[1|3]].
Adım 4: Merkez açısı: [[1|3]] · 360° = 120°.
Sağlama: Diğer dilimler: ebru [[35|90]] · 360° = 140°, gitar 60°, kaligrafi 40°. 140 + 60 + 40 + 120 = 360. Tutuyor.
Sık yapılan hata: Bütünü yanlış seçmek. Burada bütün "bütün öğrenciler" değil, "kız öğrenciler"dir.
Cevap D.`
},
{
  id: "mat-va-215",
  kazanim: "M.8.4.1.1",
  kademe: 2,
  zorluk: 3,
  soru: "Bir manav, ilkbahar ve yaz aylarında sattığı çilek, kiraz ve karpuz kasalarının sayısını her ay not etmiş ve aşağıdaki çizgi grafiğini hazırlamıştır. Manav, gelecek yıl dükkânın en yoğun olduğu ayda yanına bir yardımcı almayı düşünmektedir. En yoğun ay, üç meyveden satılan toplam kasa sayısının en fazla olduğu aydır.\n**Buna göre manav yardımcıyı hangi ay için almalıdır?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Üç veri gruplu çizgi grafiği: nisandan ağustosa satılan çilek, kiraz ve karpuz kasası sayıları"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Aylara göre satılan meyve kasası sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">Kasa sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="244" x2="545" y2="244" stroke-opacity="0.15"/><line x1="70" y1="226" x2="545" y2="226" stroke-opacity="0.35"/><line x1="70" y1="208" x2="545" y2="208" stroke-opacity="0.15"/><line x1="70" y1="190" x2="545" y2="190" stroke-opacity="0.35"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.15"/><line x1="70" y1="154" x2="545" y2="154" stroke-opacity="0.35"/><line x1="70" y1="136" x2="545" y2="136" stroke-opacity="0.15"/><line x1="70" y1="118" x2="545" y2="118" stroke-opacity="0.35"/><line x1="70" y1="100" x2="545" y2="100" stroke-opacity="0.15"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="231">10</text><text x="62" y="195">20</text><text x="62" y="159">30</text><text x="62" y="123">40</text><text x="62" y="87">50</text></g><g stroke="currentColor" stroke-width="2"><line x1="117.5" y1="262" x2="117.5" y2="267"/><line x1="212.5" y1="262" x2="212.5" y2="267"/><line x1="307.5" y1="262" x2="307.5" y2="267"/><line x1="402.5" y1="262" x2="402.5" y2="267"/><line x1="497.5" y1="262" x2="497.5" y2="267"/></g><polyline points="117.5,190 212.5,100 307.5,136 402.5,226 497.5,226" fill="none" stroke="var(--vurgu)" stroke-width="3"/><polyline points="117.5,262 212.5,226 307.5,118 402.5,154 497.5,262" fill="none" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="9 5"/><polyline points="117.5,226 212.5,208 307.5,190 402.5,100 497.5,82" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="3 5"/><circle cx="117.5" cy="190" r="5.5" fill="var(--vurgu)"/><circle cx="212.5" cy="100" r="5.5" fill="var(--vurgu)"/><circle cx="307.5" cy="136" r="5.5" fill="var(--vurgu)"/><circle cx="402.5" cy="226" r="5.5" fill="var(--vurgu)"/><circle cx="497.5" cy="226" r="5.5" fill="var(--vurgu)"/><rect x="112.5" y="257" width="10" height="10" fill="var(--vurgu2)"/><rect x="207.5" y="221" width="10" height="10" fill="var(--vurgu2)"/><rect x="302.5" y="113" width="10" height="10" fill="var(--vurgu2)"/><rect x="397.5" y="149" width="10" height="10" fill="var(--vurgu2)"/><rect x="492.5" y="257" width="10" height="10" fill="var(--vurgu2)"/><polygon points="117.5,219.5 111.5,230.5 123.5,230.5" fill="currentColor"/><polygon points="212.5,201.5 206.5,212.5 218.5,212.5" fill="currentColor"/><polygon points="307.5,183.5 301.5,194.5 313.5,194.5" fill="currentColor"/><polygon points="402.5,93.5 396.5,104.5 408.5,104.5" fill="currentColor"/><polygon points="497.5,75.5 491.5,86.5 503.5,86.5" fill="currentColor"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="117.5" y="282">Nisan</text><text x="212.5" y="282">Mayıs</text><text x="307.5" y="282">Haziran</text><text x="402.5" y="282">Temmuz</text><text x="497.5" y="282">Ağustos</text></g><line x1="310.8" y1="49" x2="330.8" y2="49" stroke="var(--vurgu)" stroke-width="3"/><circle cx="320.8" cy="49" r="5.5" fill="var(--vurgu)"/><text x="334.8" y="54" font-size="14" fill="currentColor">Çilek</text><line x1="391.8" y1="49" x2="411.8" y2="49" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="9 5"/><rect x="396.8" y="44" width="10" height="10" fill="var(--vurgu2)"/><text x="415.8" y="54" font-size="14" fill="currentColor">Kiraz</text><line x1="472.8" y1="49" x2="492.8" y2="49" stroke="currentColor" stroke-width="3" stroke-dasharray="3 5"/><polygon points="482.8,42.5 476.8,53.5 488.8,53.5" fill="currentColor"/><text x="496.8" y="54" font-size="14" fill="currentColor">Karpuz</text></svg>`,
  secenekler: ["Mayıs", "Haziran", "Temmuz", "Ağustos"],
  dogru: 1,
  hatalar: [
    "Çileğin en çok satıldığı ayı seçtin. Mayısta toplam 45 + 10 + 15 = 70 kasa satılmıştır.",
    null,
    "Çileği toplama katmadın: yalnızca kiraz ve karpuza bakınca en yoğun ay temmuz (75) görünür. Üç meyveyle birlikte temmuz toplamı 85, haziran toplamı 95'tir.",
    "Grafikteki en yüksek noktanın (50 kasa karpuz) bulunduğu ayı seçtin. Ağustosta toplam 10 + 0 + 50 = 60 kasadır."
  ],
  aciklama: `Üç veri gruplu çizgi grafiğinde bir ayın toplamı, o aydaki üç noktanın değeri toplanarak bulunur. En yüksek tek nokta, en büyük toplamı göstermeyebilir.
Adım 1: Her ay için üç değeri oku (çilek, kiraz, karpuz): nisan 20, 0, 10; mayıs 45, 10, 15; haziran 35, 40, 20; temmuz 10, 30, 45; ağustos 10, 0, 50.
Adım 2: Toplamları bul: nisan 30, mayıs 70, haziran 95, temmuz 85, ağustos 60.
Adım 3: En büyük toplam 95'tir; en yoğun ay hazirandır.
Sağlama: Haziranda hiçbir meyve zirvede değildir ama üç meyve de yüksek düzeydedir; toplamın en büyük çıkması bu yüzdendir.
Sık yapılan hata: Tek bir çizginin en yüksek noktasına bakmak ya da bir veri grubunu toplamaya katmamak.
Cevap B.`
},
{
  id: "mat-va-216",
  kazanim: "M.8.4.1.2",
  kademe: 2,
  zorluk: 3,
  soru: "Bir ortaokulda kulüplere katılan 120 öğrencinin kulüplere göre dağılımı Grafik 1'de, her kulüpteki kız öğrenci sayısı ise Grafik 2'de verilmiştir. Her öğrenci tek bir kulübe katılmıştır. Okul yönetimi, erkek öğrenci sayısı en fazla olan kulübün çalışma odasını genişletecektir.\n**Buna göre çalışma odası genişletilecek kulüp hangisidir?**",
  gorsel: `<svg viewBox="0 0 560 300" role="img" aria-label="Grafik 1 daire grafiği: drama 120 derece, doğa 60 derece, müzik 90 derece, satranç 90 derece. Grafik 2 sütun grafiği: kulüplerdeki kız öğrenci sayıları"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik 1: Kulüplerin payı</text><g stroke="currentColor" stroke-width="2"><path d="M140 175 L140 75 A100 100 0 0 1 226.6 225 Z" fill="var(--vurgu)" fill-opacity="0.35"/><path d="M140 175 L226.6 225 A100 100 0 0 1 140 275 Z" fill="var(--vurgu2)" fill-opacity="0.45"/><path d="M140 175 L140 275 A100 100 0 0 1 40 175 Z" fill="var(--dolgu)"/><path d="M140 175 L40 175 A100 100 0 0 1 140 75 Z" fill="currentColor" fill-opacity="0.12"/></g><g font-size="14" fill="currentColor"><text x="190.23" y="143" text-anchor="middle">Drama</text><text x="190.23" y="161" text-anchor="middle" font-weight="bold">120°</text><text x="169" y="222.23" text-anchor="middle">Doğa</text><text x="169" y="240.23" text-anchor="middle" font-weight="bold">60°</text><text x="98.99" y="213.01" text-anchor="middle">Müzik</text><text x="98.99" y="231.01" text-anchor="middle" font-weight="bold">90°</text><text x="98.99" y="130.99" text-anchor="middle">Satranç</text><text x="98.99" y="148.99" text-anchor="middle" font-weight="bold">90°</text></g><text x="296" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik 2: Kız öğrenci sayısı</text><text x="296" y="54" font-size="14" fill="currentColor">Kız öğrenci</text><g stroke="currentColor" stroke-width="1"><line x1="332" y1="240" x2="552" y2="240" stroke-opacity="0.35"/><line x1="332" y1="218" x2="552" y2="218" stroke-opacity="0.35"/><line x1="332" y1="196" x2="552" y2="196" stroke-opacity="0.35"/><line x1="332" y1="174" x2="552" y2="174" stroke-opacity="0.35"/><line x1="332" y1="152" x2="552" y2="152" stroke-opacity="0.35"/><line x1="332" y1="130" x2="552" y2="130" stroke-opacity="0.35"/><line x1="332" y1="108" x2="552" y2="108" stroke-opacity="0.35"/><line x1="332" y1="86" x2="552" y2="86" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="332" y1="72" x2="332" y2="262"/><line x1="332" y1="262" x2="552" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="324" y="267">0</text><text x="324" y="245">4</text><text x="324" y="223">8</text><text x="324" y="201">12</text><text x="324" y="179">16</text><text x="324" y="157">20</text><text x="324" y="135">24</text><text x="324" y="113">28</text><text x="324" y="91">32</text></g><rect x="344.5" y="108" width="30" height="154" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="399.5" y="218" width="30" height="44" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="454.5" y="174" width="30" height="88" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="509.5" y="196" width="30" height="66" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="359.5" y="282">Drama</text><text x="414.5" y="282">Doğa</text><text x="469.5" y="282">Müzik</text><text x="524.5" y="282">Satranç</text></g></svg>`,
  secenekler: ["Drama", "Doğa", "Müzik", "Satranç"],
  dogru: 3,
  hatalar: [
    "En büyük dilimi seçtin. Drama kulübünde 40 öğrenci vardır ama 28'i kızdır; erkekler 40 − 28 = 12 kişidir.",
    "Kız öğrenci sayısı en az olan kulübü seçtin. Doğa kulübü küçük bir kulüptür: 20 − 8 = 12 erkek öğrenci vardır.",
    "Müzik ve satranç dilimleri eşittir (30'ar öğrenci). Erkek sayısı, kızı daha az olan kulüpte fazladır: müzikte 30 − 16 = 14, satrançta 30 − 12 = 18 erkek vardır.",
    null
  ],
  aciklama: `İki grafik birlikte kullanılırken biri bütünü (her kulübün toplam öğrencisini), diğeri bir parçayı (kızları) verir. Erkek sayısı = kulübün toplamı − kız sayısı.
Adım 1: Grafik 1'den her kulübün öğrenci sayısını bul. 360° 120 öğrenciyse her 3° bir öğrencidir. Drama 120 : 3 = 40, doğa 60 : 3 = 20, müzik 90 : 3 = 30, satranç 90 : 3 = 30.
Adım 2: Grafik 2'den kız öğrenci sayılarını oku: drama 28, doğa 8, müzik 16, satranç 12.
Adım 3: Erkek öğrenci sayılarını bul: drama 40 − 28 = 12, doğa 20 − 8 = 12, müzik 30 − 16 = 14, satranç 30 − 12 = 18.
Adım 4: En çok erkek öğrenci satranç kulübündedir; çalışma odası genişletilecek kulüp satrançtır.
Sağlama: Erkeklerin toplamı 12 + 12 + 14 + 18 = 56, kızların toplamı 28 + 8 + 16 + 12 = 64; 56 + 64 = 120. Tutuyor.
Sık yapılan hata: Yalnızca bir grafiğe bakarak karar vermek. En büyük dilim ya da en kısa sütun tek başına cevabı vermez.
Cevap D.`
},
{
  id: "mat-va-217",
  kazanim: "M.8.4.1.1",
  kademe: 2,
  zorluk: 3,
  soru: "Bir el sanatları festivalinde Defne'nin standında satılan bileklik ve kolye sayıları günlere göre aşağıdaki grafikte verilmiştir. Standda bir bileklik 40 TL'ye satılmaktadır; bir kolyenin fiyatı ise bir bilekliğin fiyatından 50 TL fazladır. Festival boyunca fiyatlar değişmemiştir.\n**Buna göre Defne'nin pazar günü satışlardan elde ettiği gelir, cumartesi günü elde ettiği gelirden kaç TL fazladır?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="İki veri gruplu sütun grafiği: cuma, cumartesi ve pazar günü satılan bileklik ve kolye sayıları"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Günlere göre satılan takı sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">Takı sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="240" x2="545" y2="240" stroke-opacity="0.15"/><line x1="70" y1="218" x2="545" y2="218" stroke-opacity="0.35"/><line x1="70" y1="196" x2="545" y2="196" stroke-opacity="0.15"/><line x1="70" y1="174" x2="545" y2="174" stroke-opacity="0.35"/><line x1="70" y1="152" x2="545" y2="152" stroke-opacity="0.15"/><line x1="70" y1="130" x2="545" y2="130" stroke-opacity="0.35"/><line x1="70" y1="108" x2="545" y2="108" stroke-opacity="0.15"/><line x1="70" y1="86" x2="545" y2="86" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="72" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="223">10</text><text x="62" y="179">20</text><text x="62" y="135">30</text><text x="62" y="91">40</text></g><rect x="87.42" y="174" width="61.75" height="88" fill="var(--vurgu)"/><rect x="149.17" y="218" width="61.75" height="44" fill="var(--vurgu2)"/><rect x="245.75" y="108" width="61.75" height="154" fill="var(--vurgu)"/><rect x="307.5" y="196" width="61.75" height="66" fill="var(--vurgu2)"/><rect x="404.08" y="130" width="61.75" height="132" fill="var(--vurgu)"/><rect x="465.83" y="152" width="61.75" height="110" fill="var(--vurgu2)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="149.17" y="282">Cuma</text><text x="307.5" y="282">Cumartesi</text><text x="465.83" y="282">Pazar</text></g><rect x="375.4" y="42" width="14" height="14" fill="var(--vurgu)"/><text x="399.4" y="54" font-size="14" fill="currentColor">Bileklik</text><rect x="481" y="42" width="14" height="14" fill="var(--vurgu2)"/><text x="505" y="54" font-size="14" fill="currentColor">Kolye</text></svg>`,
  secenekler: ["50", "700", "900", "1100"],
  dogru: 1,
  hatalar: [
    "Fiyatları karıştırdın: bilekliği 90 TL, kolyeyi 40 TL aldın. Böylece cumartesi 3750 TL, pazar 3700 TL bulup farkı 50 hesapladın.",
    null,
    "Yalnızca kolyeleri hesapladın: (25 − 15) · 90 = 900. Pazar günü bileklik satışı cumartesiye göre 5 azalmıştır; bu azalmayı da hesaba katmalısın.",
    "Bileklik satışındaki azalmayı artış gibi ekledin: 900 + 200 = 1100. Bileklik geliri 200 TL azaldığı için bu tutar çıkarılmalıdır."
  ],
  aciklama: `Gelir = satılan ürün sayısı · ürünün fiyatı. Bir günün geliri, o günkü her ürünün gelirinin toplamıdır.
Adım 1: Kolyenin fiyatı, bilekliğin fiyatından 50 TL fazladır: 40 + 50 = 90 TL.
Adım 2: Cumartesi: 35 bileklik ve 15 kolye. Gelir: 35 · 40 + 15 · 90 = 1400 + 1350 = 2750 TL.
Adım 3: Pazar: 30 bileklik ve 25 kolye. Gelir: 30 · 40 + 25 · 90 = 1200 + 2250 = 3450 TL.
Adım 4: Fark: 3450 − 2750 = 700 TL.
Sağlama: Değişimlere bak: kolye 10 fazla satılmış (+900 TL), bileklik 5 az satılmış (−200 TL). +900 − 200 = 700 TL.
Sık yapılan hata: Bir ürünün azalan satışını görmezden gelmek. Sütunlardan birinin kısalması geliri azaltır.
Cevap B.`
},
{
  id: "mat-va-218",
  kazanim: "M.8.4.1.2",
  kademe: 2,
  zorluk: 3,
  soru: "Bir su markası (M), reklam afişinde kendi satışını iki rakibinin (K ve L) satışıyla karşılaştıran aşağıdaki sütun grafiğini kullanmıştır. Grafiğin dikey ekseni 0'dan değil, 20'den başlamaktadır. Afişi inceleyen Nehir, M'nin sütununun L'nin sütunundan 4 kat uzun göründüğünü fark etmiştir.\n**Buna göre bu grafikle ilgili aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Sütun grafiği: dikey ekseni 20'den başlıyor; K markası 40, L markası 30, M markası 60 bin şişe"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Markaların geçen ay sattığı su (bin şişe)</text><text x="10" y="54" font-size="14" fill="currentColor">Satış (bin şişe)</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="226" x2="545" y2="226" stroke-opacity="0.35"/><line x1="70" y1="190" x2="545" y2="190" stroke-opacity="0.35"/><line x1="70" y1="154" x2="545" y2="154" stroke-opacity="0.35"/><line x1="70" y1="118" x2="545" y2="118" stroke-opacity="0.35"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><path d="M62 255 L78 249 M62 248 L78 242" stroke="currentColor" stroke-width="2" fill="none"/><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">20</text><text x="62" y="231">30</text><text x="62" y="195">40</text><text x="62" y="159">50</text><text x="62" y="123">60</text><text x="62" y="87">70</text></g><rect x="121.17" y="190" width="56" height="72" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="279.5" y="226" width="56" height="36" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="437.83" y="118" width="56" height="144" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="149.17" y="282">K markası</text><text x="307.5" y="282">L markası</text><text x="465.83" y="282">M markası</text></g></svg>`,
  secenekler: ["M'nin satışı L'nin 2 katıdır ve grafik aradaki farkı olduğundan büyük gösterir.", "M'nin satışı L'nin 2 katıdır ve grafik aradaki farkı doğru gösterir.", "M'nin satışı L'nin 4 katıdır ve grafik aradaki farkı olduğundan büyük gösterir.", "M'nin satışı L'nin 4 katıdır ve grafik aradaki farkı doğru gösterir."],
  dogru: 0,
  hatalar: [
    null,
    "Oranı doğru buldun ama grafiği doğru sandın. Sütunlar 20'den başladığı için M'nin sütunu L'ninkinin 4 katı uzunluktadır; gerçek oran ise 2'dir. Grafik farkı büyütüyor.",
    "Sütun boylarını oran sandın: M'nin sütunu 4 birim, L'ninki 1 birim uzunluktadır. Satışı sütunun ucundaki sayı gösterir: 60 ve 30.",
    "Grafiğin görüntüsüne güvendin. Eksen 0'dan başlasaydı sütunlar 60 ve 30 birim, yani 2 kat olurdu; 4 kat görünmesinin nedeni eksenin 20'den başlamasıdır."
  ],
  aciklama: `Bir sütun grafiğinde dikey eksen 0'dan başlamazsa sütunların boyları değerlerle orantılı olmaz. Bu, sütun grafiğinin dikkat edilmesi gereken zayıf yönüdür: küçük farklar büyük görünebilir.
Adım 1: Sütunların uçlarını oku: K 40, L 30, M 60 bin şişe.
Adım 2: Gerçek oranı bul: 60 : 30 = 2. M'nin satışı L'nin 2 katıdır.
Adım 3: Sütun boylarını karşılaştır: eksen 20'den başladığı için L'nin sütunu 30 − 20 = 10, M'nin sütunu 60 − 20 = 40 birim uzunluktadır. 40 : 10 = 4 olduğundan M'nin sütunu 4 kat uzun görünür.
Adım 4: Grafik, 2 katlık bir farkı 4 kat gibi gösterdiğine göre farkı olduğundan büyük gösterir.
Sık yapılan hata: Sütun boylarını değerlerin oranı sanmak. Önce eksenin nereden başladığına bak.
Cevap A.`
},
{
  id: "mat-va-219",
  kazanim: "M.8.4.1.1",
  kademe: 2,
  zorluk: 3,
  soru: "Bir evin çatısındaki güneş panellerinin bir hafta boyunca her gün ürettiği elektrik miktarı aşağıdaki çizgi grafiğinde verilmiştir. Panellerin ürettiği elektrik, havanın bulutlu ya da açık olmasına göre günden güne değişmektedir. Ev sahibi, üretimin haftalık ortalamanın altında kaldığı günlerde elektriğin bir kısmını şehir şebekesinden almaktadır.\n**Buna göre üretimin haftalık ortalamanın altında kaldığı günlerde panellerin ürettiği elektriğin toplamı kaç kWh'dir?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Çizgi grafiği: pazartesiden pazara güneş panellerinin ürettiği günlük elektrik"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Güneş panellerinin ürettiği elektrik</text><text x="10" y="54" font-size="14" fill="currentColor">Elektrik (kWh)</text><g stroke="currentColor" stroke-width="1"><line x1="64" y1="244" x2="552" y2="244" stroke-opacity="0.15"/><line x1="64" y1="226" x2="552" y2="226" stroke-opacity="0.35"/><line x1="64" y1="208" x2="552" y2="208" stroke-opacity="0.15"/><line x1="64" y1="190" x2="552" y2="190" stroke-opacity="0.35"/><line x1="64" y1="172" x2="552" y2="172" stroke-opacity="0.15"/><line x1="64" y1="154" x2="552" y2="154" stroke-opacity="0.35"/><line x1="64" y1="136" x2="552" y2="136" stroke-opacity="0.15"/><line x1="64" y1="118" x2="552" y2="118" stroke-opacity="0.35"/><line x1="64" y1="100" x2="552" y2="100" stroke-opacity="0.15"/><line x1="64" y1="82" x2="552" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="64" y1="68" x2="64" y2="262"/><line x1="64" y1="262" x2="552" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="56" y="267">0</text><text x="56" y="231">6</text><text x="56" y="195">12</text><text x="56" y="159">18</text><text x="56" y="123">24</text><text x="56" y="87">30</text></g><g stroke="currentColor" stroke-width="2"><line x1="98.86" y1="262" x2="98.86" y2="267"/><line x1="168.57" y1="262" x2="168.57" y2="267"/><line x1="238.29" y1="262" x2="238.29" y2="267"/><line x1="308" y1="262" x2="308" y2="267"/><line x1="377.71" y1="262" x2="377.71" y2="267"/><line x1="447.43" y1="262" x2="447.43" y2="267"/><line x1="517.14" y1="262" x2="517.14" y2="267"/></g><polyline points="98.86,190 168.57,154 238.29,172 308,118 377.71,172 447.43,208 517.14,190" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="98.86" cy="190" r="5.5" fill="var(--vurgu)"/><circle cx="168.57" cy="154" r="5.5" fill="var(--vurgu)"/><circle cx="238.29" cy="172" r="5.5" fill="var(--vurgu)"/><circle cx="308" cy="118" r="5.5" fill="var(--vurgu)"/><circle cx="377.71" cy="172" r="5.5" fill="var(--vurgu)"/><circle cx="447.43" cy="208" r="5.5" fill="var(--vurgu)"/><circle cx="517.14" cy="190" r="5.5" fill="var(--vurgu)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="98.86" y="282">Pazartesi</text><text x="168.57" y="282">Salı</text><text x="238.29" y="282">Çarşamba</text><text x="308" y="282">Perşembe</text><text x="377.71" y="282">Cuma</text><text x="447.43" y="282">Cumartesi</text><text x="517.14" y="282">Pazar</text></g></svg>`,
  secenekler: ["33", "42", "63", "105"],
  dogru: 0,
  hatalar: [
    null,
    "Ortalamanın üzerindeki günleri topladın (18 + 24). Soru ortalamanın altında kalan günleri soruyor.",
    "Ortalamaya eşit olan günleri (15 kWh üretilen çarşamba ve cuma) da topladın. 15, ortalamanın altında değildir; ona eşittir.",
    "Haftanın toplam üretimini buldun ve orada durdun. 105, ortalamayı bulmak için kullanılan ara sonuçtur."
  ],
  aciklama: `Ortalamanın altındaki değerleri seçebilmek için önce ortalamayı bulmak gerekir. Aritmetik ortalama, değerlerin toplamının değer sayısına bölümüdür.
Adım 1: Grafikten günlük üretimi oku: 12, 18, 15, 24, 15, 9, 12 kWh. 18, 15 ve 9, etiketlerin arasındaki ara çizgilerdedir.
Adım 2: Topla: 12 + 18 + 15 + 24 + 15 + 9 + 12 = 105 kWh.
Adım 3: Ortalama: 105 : 7 = 15 kWh.
Adım 4: 15'ten küçük değerler: pazartesi 12, cumartesi 9, pazar 12. Toplamları 12 + 9 + 12 = 33 kWh.
Sağlama: Ortalamanın üstündeki günler 18 + 24 = 42, ortalamaya eşit günler 15 + 15 = 30 kWh'dir. 33 + 42 + 30 = 105. Tutuyor.
Sık yapılan hata: Ortalamaya eşit olan günleri "altında" saymak. "Altında" demek ortalamadan küçük demektir.
Cevap A.`
},
{
  id: "mat-va-220",
  kazanim: "M.8.4.1.2",
  kademe: 2,
  zorluk: 3,
  soru: "K ve L köylerindeki tarım alanlarının ürünlere göre dağılımı aşağıdaki daire grafiklerinde verilmiştir. K köyünün toplam tarım alanı 240 dönüm, L köyününki ise 480 dönümdür. İki köyde de tarım alanlarına yalnızca grafikteki üç ürün ekilmektedir.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="İki daire grafiği: K köyünde buğday 180, mısır 90, ayçiçeği 90 derece; L köyünde buğday 90, mısır 120, ayçiçeği 150 derece"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik 1: K köyü (240 dönüm)</text><text x="290" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik 2: L köyü (480 dönüm)</text><g stroke="currentColor" stroke-width="2"><path d="M140 170 L140 60 A110 110 0 0 1 140 280 Z" fill="var(--vurgu)" fill-opacity="0.35"/><path d="M140 170 L140 280 A110 110 0 0 1 30 170 Z" fill="var(--vurgu2)" fill-opacity="0.45"/><path d="M140 170 L30 170 A110 110 0 0 1 140 60 Z" fill="var(--dolgu)"/></g><g font-size="14" fill="currentColor"><text x="203.8" y="167" text-anchor="middle">Buğday</text><text x="203.8" y="185" text-anchor="middle" font-weight="bold">180°</text><text x="94.89" y="212.11" text-anchor="middle">Mısır</text><text x="94.89" y="230.11" text-anchor="middle" font-weight="bold">90°</text><text x="94.89" y="121.89" text-anchor="middle">Ayçiçeği</text><text x="94.89" y="139.89" text-anchor="middle" font-weight="bold">90°</text></g><g stroke="currentColor" stroke-width="2"><path d="M420 170 L420 60 A110 110 0 0 1 530 170 Z" fill="var(--vurgu)" fill-opacity="0.35"/><path d="M420 170 L530 170 A110 110 0 0 1 365 265.26 Z" fill="var(--vurgu2)" fill-opacity="0.45"/><path d="M420 170 L365 265.26 A110 110 0 0 1 420 60 Z" fill="var(--dolgu)"/></g><g font-size="14" fill="currentColor"><text x="465.11" y="121.89" text-anchor="middle">Buğday</text><text x="465.11" y="139.89" text-anchor="middle" font-weight="bold">90°</text><text x="451.9" y="222.25" text-anchor="middle">Mısır</text><text x="451.9" y="240.25" text-anchor="middle" font-weight="bold">120°</text><text x="358.37" y="150.49" text-anchor="middle">Ayçiçeği</text><text x="358.37" y="168.49" text-anchor="middle" font-weight="bold">150°</text></g></svg>`,
  secenekler: ["K köyünde buğday ekilen alan, L köyündekinin 2 katıdır.", "L köyünde buğday ekilen alan da ayçiçeği ekilen alan da K köyündekinden fazladır.", "İki köyde buğday ekilen alanlar birbirine eşittir.", "Mısır ekilen alan, L köyünde K köyündekinden 30 dönüm fazladır."],
  dogru: 2,
  hatalar: [
    "Dilimlerin açılarını karşılaştırdın (180° ve 90°). Açı yalnızca köyün kendi içindeki payı gösterir; iki köyün toplam alanları farklı olduğu için açılar doğrudan karşılaştırılamaz.",
    "L köyünün toplam alanı K'ninkinin 2 katı olduğu için her ürünün alanının da büyük olduğunu varsaydın. Ayçiçeğinde L köyü gerçekten fazladır (200 > 60 dönüm) ama buğday alanları eşittir (120'şer dönüm); iki yargıdan biri yanlış olduğu için ifade yanlıştır.",
    null,
    "Açıların farkını (120° − 90° = 30°) dönüm sandın. Mısır alanı K'de 60, L'de 160 dönümdür; fark 100 dönümdür."
  ],
  aciklama: `Toplamları farklı iki daire grafiği karşılaştırılırken açılar doğrudan karşılaştırılmaz; önce her dilim, kendi toplamı kullanılarak miktara çevrilir.
Adım 1: K köyü (240 dönüm): buğday [[180|360]] · 240 = 120, mısır [[90|360]] · 240 = 60, ayçiçeği 60 dönüm.
Adım 2: L köyü (480 dönüm): buğday [[90|360]] · 480 = 120, mısır [[120|360]] · 480 = 160, ayçiçeği [[150|360]] · 480 = 200 dönüm.
Adım 3: Şıkları sına. A: 120 ile 120 eşittir, 2 kat değildir. B: İfade, buğday ve ayçiçeğinin her biri için ayrı ayrı "L köyünde fazladır" der. Ayçiçeğinde L köyü fazladır (200 > 60) ama buğday alanları eşittir (120 = 120); "da … da" ile bağlanan iki yargıdan biri yanlış olduğu için B yanlıştır. C: İki köyde de buğday 120 dönümdür; doğrudur. D: Mısır farkı 160 − 60 = 100 dönümdür.
Sağlama: K: 120 + 60 + 60 = 240; L: 120 + 160 + 200 = 480. Tutuyor.
Sık yapılan hata: İki ayrı daire grafiğinde büyük dilimin her zaman büyük miktar gösterdiğini sanmak. Bu, daire grafiğinin zayıf yönüdür: dilim payı gösterir, miktarı değil.
Cevap C.`
},
{
  id: "mat-va-221",
  kazanim: "M.8.4.1.1",
  kademe: 2,
  zorluk: 3,
  soru: "Bir ilçede belediye otobüslerinin üç hattında bir günde sabah, öğle ve akşam saatlerinde taşınan yolcu sayıları aşağıdaki grafikte verilmiştir. Her saat diliminde üç hattın taşıdığı yolcular yan yana sütunlarla gösterilmiştir.\n**Buna göre aşağıdakilerden hangisi doğrudur?**",
  gorsel: `<svg viewBox="0 0 560 296" role="img" aria-label="Üç veri gruplu sütun grafiği: üç hattın sabah, öğle ve akşam taşıdığı yolcu sayıları"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Hatlara göre taşınan yolcu sayısı</text><text x="10" y="54" font-size="14" fill="currentColor">Yolcu sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="252" x2="545" y2="252" stroke-opacity="0.15"/><line x1="70" y1="238" x2="545" y2="238" stroke-opacity="0.35"/><line x1="70" y1="224" x2="545" y2="224" stroke-opacity="0.15"/><line x1="70" y1="210" x2="545" y2="210" stroke-opacity="0.35"/><line x1="70" y1="196" x2="545" y2="196" stroke-opacity="0.15"/><line x1="70" y1="182" x2="545" y2="182" stroke-opacity="0.35"/><line x1="70" y1="168" x2="545" y2="168" stroke-opacity="0.15"/><line x1="70" y1="154" x2="545" y2="154" stroke-opacity="0.35"/><line x1="70" y1="140" x2="545" y2="140" stroke-opacity="0.15"/><line x1="70" y1="126" x2="545" y2="126" stroke-opacity="0.35"/><line x1="70" y1="112" x2="545" y2="112" stroke-opacity="0.15"/><line x1="70" y1="98" x2="545" y2="98" stroke-opacity="0.35"/><line x1="70" y1="84" x2="545" y2="84" stroke-opacity="0.15"/><line x1="70" y1="70" x2="545" y2="70" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="56" x2="70" y2="266"/><line x1="70" y1="266" x2="545" y2="266"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="271">0</text><text x="62" y="243">20</text><text x="62" y="215">40</text><text x="62" y="187">60</text><text x="62" y="159">80</text><text x="62" y="131">100</text><text x="62" y="103">120</text><text x="62" y="75">140</text></g><rect x="87.42" y="98" width="41.17" height="168" fill="var(--vurgu)"/><rect x="128.58" y="140" width="41.17" height="126" fill="var(--vurgu2)"/><rect x="169.75" y="126" width="41.17" height="140" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="245.75" y="182" width="41.17" height="84" fill="var(--vurgu)"/><rect x="286.92" y="154" width="41.17" height="112" fill="var(--vurgu2)"/><rect x="328.08" y="210" width="41.17" height="56" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><rect x="404.08" y="126" width="41.17" height="140" fill="var(--vurgu)"/><rect x="445.25" y="112" width="41.17" height="154" fill="var(--vurgu2)"/><rect x="486.42" y="84" width="41.17" height="182" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="149.17" y="286">Sabah</text><text x="307.5" y="286">Öğle</text><text x="465.83" y="286">Akşam</text></g><rect x="319" y="42" width="14" height="14" fill="var(--vurgu)"/><text x="343" y="54" font-size="14" fill="currentColor">Hat 1</text><rect x="400" y="42" width="14" height="14" fill="var(--vurgu2)"/><text x="424" y="54" font-size="14" fill="currentColor">Hat 2</text><rect x="481" y="42" width="14" height="14" fill="var(--dolgu)" stroke="currentColor" stroke-width="1.5"/><text x="505" y="54" font-size="14" fill="currentColor">Hat 3</text></svg>`,
  secenekler: ["Bütün hatlarda en çok yolcu akşam taşınmıştır.", "Öğle saatlerinde taşınan toplam yolcu, sabah taşınanın yarısından azdır.", "Her saat diliminde Hat 3, Hat 1'den daha fazla yolcu taşımıştır.", "Hat 1 ile Hat 2'nin gün boyunca taşıdığı toplam yolcu sayısı eşittir."],
  dogru: 3,
  hatalar: [
    "Hat 2 ve Hat 3'te en çok yolcu akşam taşınmıştır ama Hat 1'de en çok yolcu sabah taşınmıştır (120). İki hattan bütün hatlar için genelleme yaptın.",
    "Yalnızca Hat 3'e baktın: onda öğle (40), sabahın (100) yarısından azdır. Toplamda ise öğle 180, sabah 310'dur; 310'un yarısı 155 olduğundan öğle yarısından fazladır.",
    "Yalnızca akşama baktın (130 > 100). Sabah Hat 1 120, Hat 3 100; öğle Hat 1 60, Hat 3 40 yolcu taşımıştır.",
    null
  ],
  aciklama: `"Hangisi doğrudur?" sorularında her ifade bütün veriyle sınanır. Tek bir hatta ya da tek bir saatte doğru olan ifade, genel olarak doğru olmayabilir.
Adım 1: Sütunları oku (Hat 1, Hat 2, Hat 3): sabah 120, 90, 100; öğle 60, 80, 40; akşam 100, 110, 130. 90, 110 ve 130, etiketlerin arasındaki ara çizgilerdedir.
Adım 2: A: Hat 1'de en çok yolcu sabah taşınmıştır; ifade yanlıştır. B: Öğle toplamı 60 + 80 + 40 = 180, sabah toplamı 120 + 90 + 100 = 310; 180 > 155 olduğundan yanlıştır.
Adım 3: C: Sabah ve öğle Hat 1 daha fazla taşımıştır; yanlıştır. D: Hat 1: 120 + 60 + 100 = 280; Hat 2: 90 + 80 + 110 = 280. Toplamlar eşittir; doğrudur.
Sağlama: Hat 3'ün toplamı 100 + 40 + 130 = 270'tir; gün boyunca taşınan yolcu 280 + 280 + 270 = 830, saat dilimlerinin toplamı da 310 + 180 + 340 = 830'dur.
Sık yapılan hata: Bir örnekte doğru olanı bütün veriye genellemek. "Bütün", "her" gibi sözcükler geçen ifadeleri her durum için tek tek kontrol et.
Cevap D.`
},
{
  id: "mat-va-222",
  kazanim: "M.8.4.1.2",
  kademe: 2,
  zorluk: 3,
  soru: "Bir akvaryum mağazasındaki 72 balığın türlere göre dağılımı Grafik 1'de verilmiştir. Mağazada çalışan Toprak, bu verileri Grafik 2'deki sütun grafiğine dönüştürürken sütunlardan birini yanlış çizmiştir; diğer üç sütun doğrudur. Mağazadaki her balık tek bir türe aittir.\n**Buna göre yanlış çizilen sütun hangi balık türüne aittir?**",
  gorsel: `<svg viewBox="0 0 560 300" role="img" aria-label="Grafik 1 daire grafiği: moli 30, japon balığı 150, lepistes 120, melek balığı 60 derece. Grafik 2 sütun grafiği: japon 30, lepistes 24, melek 15, moli 6 balık"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik 1: Balıkların dağılımı</text><g stroke="currentColor" stroke-width="2"><path d="M140 178 L140 82 A96 96 0 0 1 188 94.86 Z" fill="currentColor" fill-opacity="0.12"/><path d="M140 178 L188 94.86 A96 96 0 0 1 140 274 Z" fill="var(--vurgu)" fill-opacity="0.35"/><path d="M140 178 L140 274 A96 96 0 0 1 56.86 130 Z" fill="var(--vurgu2)" fill-opacity="0.45"/><path d="M140 178 L56.86 130 A96 96 0 0 1 140 82 Z" fill="var(--dolgu)"/></g><g font-size="14" fill="currentColor"><text x="167.95" y="53.68" text-anchor="start">Moli</text><text x="167.95" y="70.68" text-anchor="start" font-weight="bold">30°</text><text x="193.78" y="189.41" text-anchor="middle">Japon</text><text x="193.78" y="207.41" text-anchor="middle" font-weight="bold">150°</text><text x="91.78" y="202.84" text-anchor="middle">Lepistes</text><text x="91.78" y="220.84" text-anchor="middle" font-weight="bold">120°</text><text x="112.16" y="126.78" text-anchor="middle">Melek</text><text x="112.16" y="144.78" text-anchor="middle" font-weight="bold">60°</text></g><text x="296" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik 2: Balık sayısı</text><text x="296" y="54" font-size="14" fill="currentColor">Balık sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="332" y1="244" x2="552" y2="244" stroke-opacity="0.15"/><line x1="332" y1="226" x2="552" y2="226" stroke-opacity="0.35"/><line x1="332" y1="208" x2="552" y2="208" stroke-opacity="0.15"/><line x1="332" y1="190" x2="552" y2="190" stroke-opacity="0.35"/><line x1="332" y1="172" x2="552" y2="172" stroke-opacity="0.15"/><line x1="332" y1="154" x2="552" y2="154" stroke-opacity="0.35"/><line x1="332" y1="136" x2="552" y2="136" stroke-opacity="0.15"/><line x1="332" y1="118" x2="552" y2="118" stroke-opacity="0.35"/><line x1="332" y1="100" x2="552" y2="100" stroke-opacity="0.15"/><line x1="332" y1="82" x2="552" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="332" y1="68" x2="332" y2="262"/><line x1="332" y1="262" x2="552" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="324" y="267">0</text><text x="324" y="231">6</text><text x="324" y="195">12</text><text x="324" y="159">18</text><text x="324" y="123">24</text><text x="324" y="87">30</text></g><rect x="344.5" y="82" width="30" height="180" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="399.5" y="118" width="30" height="144" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="454.5" y="172" width="30" height="90" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="509.5" y="226" width="30" height="36" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="359.5" y="282">Japon</text><text x="414.5" y="282">Lepistes</text><text x="469.5" y="282">Melek</text><text x="524.5" y="282">Moli</text></g></svg>`,
  secenekler: ["Japon balığı", "Lepistes", "Melek balığı", "Moli"],
  dogru: 2,
  hatalar: [
    "Japon balığı sütunu doğrudur: 150°'lik dilim 150 : 5 = 30 balık gösterir. Dilimi yarım daireye yakın görüp 36 balık olması gerektiğini düşündün.",
    "Lepistes sütunu doğrudur: 120°'lik dilim dairenin üçte biridir ve 72'nin üçte biri 24'tür. 120°'yi dörtte bir sayarsan 18 bulur, sütunu yanlış sanırsın.",
    null,
    "Moli sütunu doğrudur: 30°'lik dilim 30 : 5 = 6 balık gösterir. Açıyı balık sayısı sanırsan sütunun 30 olması gerektiğini düşünürsün."
  ],
  aciklama: `Daire grafiğini sütun grafiğine dönüştürürken her dilimin gösterdiği sayı, açısının 360°'ye oranı toplamla çarpılarak bulunur.
Adım 1: 72 balık 360°'ye karşılık gelir. 360 : 72 = 5 olduğundan her balık 5°'lik bir dilimdir.
Adım 2: Doğru değerleri bul: japon 150 : 5 = 30, lepistes 120 : 5 = 24, melek 60 : 5 = 12, moli 30 : 5 = 6.
Adım 3: Grafik 2'yi oku: japon 30, lepistes 24, melek 15, moli 6. 15, 12 ile 18 arasındaki ara çizgidedir.
Adım 4: Melek balığı sütunu 12 olması gerekirken 15 çizilmiştir; yanlış sütun budur.
Sağlama: Doğru değerlerin toplamı 30 + 24 + 12 + 6 = 72'dir. Grafik 2'deki değerlerin toplamı ise 30 + 24 + 15 + 6 = 75 çıkar; 3 fazlalık melek sütunundan gelir.
Sık yapılan hata: Açıyı doğrudan balık sayısı sanmak. Önce bir balığın kaç derecelik dilime karşılık geldiğini bul.
Cevap C.`
},
{
  id: "mat-va-223",
  kazanim: "M.8.4.1.1",
  kademe: 2,
  zorluk: 3,
  soru: "Bir yazlık evin çatısındaki su deposunda bulunan su miktarı, 5 saat boyunca başlangıçta ve her saatin sonunda ölçülmüş ve aşağıdaki çizgi grafiği çizilmiştir. Bu sürede depodan yalnızca evde kullanılan su çıkmıştır. Depoya bir kez tankerle su eklenmiş ve su eklenen saat içinde evde hiç su kullanılmamıştır.\n**Buna göre bu 5 saat boyunca evde toplam kaç litre su kullanılmıştır?**",
  gorsel: `<svg viewBox="0 0 560 312" role="img" aria-label="Çizgi grafiği: başlangıçtan 5. saatin sonuna kadar depodaki su miktarı"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Depodaki su miktarının saatlere göre değişimi</text><text x="10" y="54" font-size="14" fill="currentColor">Su (litre)</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="244" x2="545" y2="244" stroke-opacity="0.15"/><line x1="70" y1="226" x2="545" y2="226" stroke-opacity="0.35"/><line x1="70" y1="208" x2="545" y2="208" stroke-opacity="0.15"/><line x1="70" y1="190" x2="545" y2="190" stroke-opacity="0.35"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.15"/><line x1="70" y1="154" x2="545" y2="154" stroke-opacity="0.35"/><line x1="70" y1="136" x2="545" y2="136" stroke-opacity="0.15"/><line x1="70" y1="118" x2="545" y2="118" stroke-opacity="0.35"/><line x1="70" y1="100" x2="545" y2="100" stroke-opacity="0.15"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="231">200</text><text x="62" y="195">400</text><text x="62" y="159">600</text><text x="62" y="123">800</text><text x="62" y="87">1000</text></g><g stroke="currentColor" stroke-width="2"><line x1="109.58" y1="262" x2="109.58" y2="267"/><line x1="188.75" y1="262" x2="188.75" y2="267"/><line x1="267.92" y1="262" x2="267.92" y2="267"/><line x1="347.08" y1="262" x2="347.08" y2="267"/><line x1="426.25" y1="262" x2="426.25" y2="267"/><line x1="505.42" y1="262" x2="505.42" y2="267"/></g><polyline points="109.58,118 188.75,154 267.92,190 347.08,190 426.25,136 505.42,172" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="109.58" cy="118" r="5.5" fill="var(--vurgu)"/><circle cx="188.75" cy="154" r="5.5" fill="var(--vurgu)"/><circle cx="267.92" cy="190" r="5.5" fill="var(--vurgu)"/><circle cx="347.08" cy="190" r="5.5" fill="var(--vurgu)"/><circle cx="426.25" cy="136" r="5.5" fill="var(--vurgu)"/><circle cx="505.42" cy="172" r="5.5" fill="var(--vurgu)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="109.58" y="282">Başlangıç</text><text x="188.75" y="282">1. saat</text><text x="267.92" y="282">2. saat</text><text x="347.08" y="282">3. saat</text><text x="426.25" y="282">4. saat</text><text x="505.42" y="282">5. saat</text></g><text x="307.5" y="304" font-size="14" text-anchor="middle" fill="currentColor">Süre</text></svg>`,
  secenekler: ["300", "400", "600", "900"],
  dogru: 2,
  hatalar: [
    "İlk ve son ölçümün farkını aldın: 800 − 500 = 300. Arada depoya 300 litre su eklendiği için bu fark, kullanılan suyun tamamını göstermez.",
    "Yalnızca ilk iki saatteki azalmayı topladın (200 + 200). 4. saat ile 5. saat arasında da 200 litre su kullanılmıştır.",
    null,
    "Depoya eklenen 300 litreyi de kullanılan suya ekledin: 600 + 300 = 900. Eklenen su, kullanılmış su değildir."
  ],
  aciklama: `Bu grafikte çizginin inmesi suyun kullanıldığını, çıkması suyun eklendiğini, yatay kalması ise hiçbir şey olmadığını gösterir. Kullanılan su, bütün inişlerin toplamıdır.
Adım 1: Noktaları oku: başlangıç 800, 1. saat 600, 2. saat 400, 3. saat 400, 4. saat 700, 5. saat 500 litre. 700 ve 500, etiketlerin arasındaki ara çizgilerdedir.
Adım 2: Her saati yorumla: 1. saat 200 L kullanıldı; 2. saat 200 L kullanıldı; 3. saat değişim yok; 4. saat 300 L eklendi (su kullanılmadı); 5. saat 200 L kullanıldı.
Adım 3: Kullanılan su: 200 + 200 + 200 = 600 litre.
Sağlama: Başlangıç + eklenen − kullanılan = son: 800 + 300 − 600 = 500. Grafikteki son değer de 500'dür.
Sık yapılan hata: Yalnızca ilk ve son değere bakmak. Arada su eklendiyse bu fark kullanılan suyu eksik gösterir.
Cevap C.`
},
{
  id: "mat-va-224",
  kazanim: "M.8.4.1.2",
  kademe: 2,
  zorluk: 3,
  soru: "Bir köy kooperatifinin 2025 ve 2026 yıllarında sattığı ürünlerin koli sayıları aşağıdaki grafikte verilmiştir. Kooperatif, her yılın satışlarını ayrı bir daire grafiğiyle göstermek istemektedir. Bal satışı 2026'da, 2025'e göre iki katına çıkmıştır.\n**Buna göre bal satışını gösteren dilimin merkez açısı, 2026 grafiğinde 2025 grafiğindekinden kaç derece büyüktür?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="İki veri gruplu sütun grafiği: 2025 ve 2026 yıllarında satılan zeytinyağı, bal, pekmez ve tarhana kolisi sayıları"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Kooperatifin yıllara göre sattığı ürünler</text><text x="10" y="54" font-size="14" fill="currentColor">Koli sayısı</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="232" x2="545" y2="232" stroke-opacity="0.35"/><line x1="70" y1="202" x2="545" y2="202" stroke-opacity="0.35"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.35"/><line x1="70" y1="142" x2="545" y2="142" stroke-opacity="0.35"/><line x1="70" y1="112" x2="545" y2="112" stroke-opacity="0.35"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="237">10</text><text x="62" y="207">20</text><text x="62" y="177">30</text><text x="62" y="147">40</text><text x="62" y="117">50</text><text x="62" y="87">60</text></g><rect x="83.06" y="172" width="46.31" height="90" fill="var(--vurgu)"/><rect x="129.38" y="142" width="46.31" height="120" fill="var(--vurgu2)"/><rect x="201.81" y="172" width="46.31" height="90" fill="var(--vurgu)"/><rect x="248.13" y="82" width="46.31" height="180" fill="var(--vurgu2)"/><rect x="320.56" y="142" width="46.31" height="120" fill="var(--vurgu)"/><rect x="366.88" y="142" width="46.31" height="120" fill="var(--vurgu2)"/><rect x="439.31" y="202" width="46.31" height="60" fill="var(--vurgu)"/><rect x="485.63" y="202" width="46.31" height="60" fill="var(--vurgu2)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="129.38" y="282">Zeytinyağı</text><text x="248.13" y="282">Bal</text><text x="366.88" y="282">Pekmez</text><text x="485.63" y="282">Tarhana</text></g><rect x="416.4" y="42" width="14" height="14" fill="var(--vurgu)"/><text x="440.4" y="54" font-size="14" fill="currentColor">2025</text><rect x="489.2" y="42" width="14" height="14" fill="var(--vurgu2)"/><text x="513.2" y="54" font-size="14" fill="currentColor">2026</text></svg>`,
  secenekler: ["30", "45", "90", "135"],
  dogru: 1,
  hatalar: [
    "Sütunların farkını (60 − 30 = 30 koli) derece sandın. Koli farkı ile açı farkı aynı şey değildir.",
    null,
    "Bal satışı 2 katına çıktığı için dilimin de 2 katına çıkacağını (90°'den 180°'ye) düşündün. Toplam satış da arttığı için dilim 2 katına çıkmaz.",
    "2026 grafiğindeki bal diliminin açısını buldun ama 2025'teki açıyı çıkarmadın."
  ],
  aciklama: `Daire grafiğinde bir dilimin açısı, o ürünün yıl içindeki toplam satıştaki payına bağlıdır. Bir ürünün satışı artsa bile toplam da artıyorsa payı aynı oranda artmaz.
Adım 1: 2025 toplamı: 30 + 30 + 40 + 20 = 120 koli. Balın payı [[30|120]] = [[1|4]]; açısı [[1|4]] · 360° = 90°.
Adım 2: 2026 toplamı: 40 + 60 + 40 + 20 = 160 koli. Balın payı [[60|160]] = [[3|8]]; açısı [[3|8]] · 360° = 135°.
Adım 3: Fark: 135° − 90° = 45°.
Sağlama: 2026 grafiğinin diğer dilimleri: zeytinyağı [[40|160]] · 360° = 90°, pekmez 90°, tarhana 45°. 135 + 90 + 90 + 45 = 360. Tutuyor.
Sık yapılan hata: Satış iki katına çıkınca dilimin de iki katına çıkacağını sanmak. Dilim, satışın kendisini değil toplam içindeki payını gösterir.
Cevap B.`
},
{
  id: "mat-va-225",
  kazanim: "M.8.4.1.1",
  kademe: 2,
  zorluk: 3,
  soru: "Poyraz, bisiklet antrenmanlarında her hafta sürdüğü toplam mesafeyi kaydetmektedir. İlk beş haftaya ait mesafeler aşağıdaki çizgi grafiğinde verilmiştir. Antrenörü, altı haftanın sonunda Poyraz'ın haftalık ortalama mesafesinin en az 23 km olmasını istemektedir.\n**Buna göre Poyraz 6. hafta en az kaç kilometre bisiklet sürmelidir?**",
  gorsel: `<svg viewBox="0 0 560 292" role="img" aria-label="Çizgi grafiği: Poyraz'ın beş haftada bisiklet sürdüğü mesafeler"><text x="10" y="24" font-size="16" font-weight="bold" fill="currentColor">Grafik: Poyraz'ın haftalara göre bisiklet sürdüğü mesafe</text><text x="10" y="54" font-size="14" fill="currentColor">Mesafe (km)</text><g stroke="currentColor" stroke-width="1"><line x1="70" y1="244" x2="545" y2="244" stroke-opacity="0.15"/><line x1="70" y1="226" x2="545" y2="226" stroke-opacity="0.35"/><line x1="70" y1="208" x2="545" y2="208" stroke-opacity="0.15"/><line x1="70" y1="190" x2="545" y2="190" stroke-opacity="0.35"/><line x1="70" y1="172" x2="545" y2="172" stroke-opacity="0.15"/><line x1="70" y1="154" x2="545" y2="154" stroke-opacity="0.35"/><line x1="70" y1="136" x2="545" y2="136" stroke-opacity="0.15"/><line x1="70" y1="118" x2="545" y2="118" stroke-opacity="0.35"/><line x1="70" y1="100" x2="545" y2="100" stroke-opacity="0.15"/><line x1="70" y1="82" x2="545" y2="82" stroke-opacity="0.35"/></g><g stroke="currentColor" stroke-width="2"><line x1="70" y1="68" x2="70" y2="262"/><line x1="70" y1="262" x2="545" y2="262"/></g><g font-size="14" text-anchor="end" fill="currentColor"><text x="62" y="267">0</text><text x="62" y="231">6</text><text x="62" y="195">12</text><text x="62" y="159">18</text><text x="62" y="123">24</text><text x="62" y="87">30</text></g><g stroke="currentColor" stroke-width="2"><line x1="117.5" y1="262" x2="117.5" y2="267"/><line x1="212.5" y1="262" x2="212.5" y2="267"/><line x1="307.5" y1="262" x2="307.5" y2="267"/><line x1="402.5" y1="262" x2="402.5" y2="267"/><line x1="497.5" y1="262" x2="497.5" y2="267"/></g><polyline points="117.5,154 212.5,118 307.5,172 402.5,100 497.5,136" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="117.5" cy="154" r="5.5" fill="var(--vurgu)"/><circle cx="212.5" cy="118" r="5.5" fill="var(--vurgu)"/><circle cx="307.5" cy="172" r="5.5" fill="var(--vurgu)"/><circle cx="402.5" cy="100" r="5.5" fill="var(--vurgu)"/><circle cx="497.5" cy="136" r="5.5" fill="var(--vurgu)"/><g font-size="14" text-anchor="middle" fill="currentColor"><text x="117.5" y="282">1. hafta</text><text x="212.5" y="282">2. hafta</text><text x="307.5" y="282">3. hafta</text><text x="402.5" y="282">4. hafta</text><text x="497.5" y="282">5. hafta</text></g></svg>`,
  secenekler: ["23", "25", "33", "36"],
  dogru: 2,
  hatalar: [
    "İstenen ortalamanın kendisini cevap sandın. 6. hafta 23 km sürülürse toplam 128 olur; 128 : 6 ortalaması 23'ün altında kalır.",
    "Eksik kalan farkı (23 − 21 = 2) yalnızca bir kez ekledin: 23 + 2 = 25. Oysa ilk beş haftanın her biri istenen ortalamanın 2 km altında kaldığı için toplam eksik 5 · 2 = 10 km'dir; 6. hafta 23 + 10 = 33 km olmalıdır.",
    null,
    "Ara çizgideki 3. hafta değerini (15) 12 okudun; toplamı 102 bulunca cevap 36 çıktı."
  ],
  aciklama: `Aritmetik ortalama, değerlerin toplamının değer sayısına bölümüdür. Ortalamanın en az bir değer olması isteniyorsa önce gereken en küçük toplam bulunur.
Adım 1: Grafikten ilk beş haftayı oku: 18, 24, 15, 27 ve 21 km. 15, 27 ve 21, etiketlerin arasındaki ara çizgilerdedir.
Adım 2: Topla: 18 + 24 + 15 + 27 + 21 = 105 km.
Adım 3: Altı haftanın ortalaması en az 23 olacaksa toplam en az 6 · 23 = 138 km olmalıdır.
Adım 4: 6. hafta en az 138 − 105 = 33 km sürülmelidir.
Sağlama: (105 + 33) : 6 = 138 : 6 = 23. 32 km sürülseydi toplam 137 olur ve ortalama 23'ün altında kalırdı.
Sık yapılan hata: Yeni değeri istenen ortalamaya eşit almak. İlk beş haftanın ortalaması 21 olduğu için eksik kalan farkı 6. hafta tek başına kapatmalıdır.
Cevap C.`
}
);
