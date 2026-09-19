// Matematik — Çarpanlar ve Katlar | Kademe 3 (LGS Ayarı, mat-ck-301…312) + Havuz (mat-ck-001…012)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["carpanlar-katlar"] = window.LGS_BANK["carpanlar-katlar"] || []).push(
/* ===================== KADEME 3 — LGS AYARI ===================== */
{
  id: "mat-ck-301",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kargo firmasının teslimat dolaplarında her dolabın şifresi, dolap numarasından şu kuralla üretilmektedir: Dolap numarası asal çarpanlarına ayrılır, asal çarpanlar küçükten büyüğe doğru sıralanır ve her asal çarpanın üssü aynı sırayla yan yana yazılır. Örneğin 84 = 2^{2} · 3 · 7 olduğundan 84 numaralı dolabın şifresi 211'dir.
Aşağıdaki tabloda bazı dolapların numaraları ve şifreleri verilmiştir. Selin'in kolisi 1200 numaralı dolaba bırakılmıştır.
**Buna göre, Selin'in kolisini almak için girmesi gereken şifre kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Dolap numarası</th><th>Asal çarpanlarına ayrılmış biçimi</th><th>Şifre</th></tr><tr><td>84</td><td>2<sup>2</sup> · 3 · 7</td><td>211</td></tr><tr><td>90</td><td>2 · 3<sup>2</sup> · 5</td><td>121</td></tr><tr><td>1200</td><td>?</td><td>?</td></tr></table>`,
  secenekler: ["312", "411", "412", "421"],
  dogru: 2,
  hatalar: [
    "2'leri eksik saydın: 2^{3} · 3 · 5^{2} = 600 eder, 1200 etmez. Bölme işlemini 2'ye bölünemeyene kadar sürdürmelisin.",
    "25'i 5'e yalnızca bir kez böldün: 2^{4} · 3 · 5 = 240 eder. 5 çarpanı iki kez vardır.",
    null,
    "Üsleri yanlış asal çarpana yazdın: 2^{4} · 3^{2} · 5 = 720 eder. 3'ün üssü 1, 5'in üssü 2 olmalı."
  ],
  aciklama: `Asal çarpanlarına ayırmak, bir sayıyı yalnızca asal sayıların çarpımı olarak yazmaktır; aynı asal çarpan tekrar ediyorsa üslü gösterilir.
Adım 1: 1200'ü en küçük asal sayıdan başlayarak böl: 1200 → 600 → 300 → 150 → 75. Dört kez 2'ye böldün, yani 2^{4}.
Adım 2: 75'i 3'e böl: 25. Bir kez böldün, yani 3^{1}.
Adım 3: 25'i 5'e böl: 5, bir daha böl: 1. İki kez böldün, yani 5^{2}.
Adım 4: 1200 = 2^{4} · 3 · 5^{2}. Asal çarpanlar küçükten büyüğe 2, 3, 5; üsleri sırayla 4, 1, 2. Şifre 412 olur.
Sağlama: 2^{4} · 3 · 5^{2} = 16 · 3 · 25 = 1200.
Sık yapılan hata: Üssü yazılmayan asal çarpanın üssü 0 değil 1'dir (84 örneğindeki 3 ve 7 gibi).
Cevap C.`
},
{
  id: "mat-ck-302",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir yer istasyonu, üzerinden geçen iki gözlem uydusunu izlemektedir. Uyduların istasyonun üzerinden art arda iki geçişi arasındaki süreler aşağıdaki tabloda verilmiştir. İki uydu, istasyonun üzerinden saat 07.30'da birlikte geçmiştir.
İstasyon, yalnızca iki uydunun **birlikte** geçtiği anlarda veri indirebilmekte ve böyle her geçişte 25 dakikalık veri indirmektedir. Saat 07.30'daki geçişte de veri indirilmiştir.
**Buna göre istasyon, saat 07.30'dan aynı günün sonuna (24.00) kadar toplam kaç dakikalık veri indirir?**`,
  gorsel: `<table class="tablo"><tr><th>Uydu</th><th>Art arda iki geçiş arasındaki süre</th></tr><tr><td>Göktürk</td><td>90 dakika</td></tr><tr><td>Poyraz</td><td>120 dakika</td></tr></table>`,
  secenekler: ["50", "75", "100", "125"],
  dogru: 1,
  hatalar: [
    "Başlangıç anını saymadın: 07.30'daki ortak geçişte de veri indirildiği soruda yazıyor. Geçiş sayısı 2 değil 3'tür.",
    null,
    "24 saati 6'ya bölüp 4 ortak geçiş buldun; ama süre gece yarısından değil 07.30'dan başlıyor. Dördüncü ortak geçiş ertesi gün 01.30'a denk gelir.",
    "24 : 6 = 4 deyip başlangıç için 1 ekledin. Sürenin 07.30'da başladığını dikkate almadın; 01.30 ertesi güne kalır."
  ],
  aciklama: `Farklı aralıklarla tekrarlanan iki olayın yeniden aynı ana denk gelmesi, sürelerin en küçük ortak katı (EKOK) kadar zaman sonra olur.
Adım 1: 90 = 2 · 3^{2} · 5 ve 120 = 2^{3} · 3 · 5. EKOK için her asal çarpanın en büyük üslüsünü al: 2^{3} · 3^{2} · 5 = 360 dakika.
Adım 2: 360 dakika = 6 saat. Uydular 6 saatte bir birlikte geçer.
Adım 3: Ortak geçiş saatlerini yaz: 07.30, 13.30, 19.30. Bir sonraki 01.30 olur; bu, ertesi gündür ve sayılmaz.
Adım 4: 3 ortak geçiş vardır: 3 · 25 = 75 dakika.
Sık yapılan hata: "Kaç kez?" sorularında başlangıç anının sayılıp sayılmayacağını ve bitiş sınırını mutlaka saatleri tek tek yazarak kontrol et.
Cevap B.`
},
{
  id: "mat-ck-303",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir pastanede bayram siparişleri için cevizli ve fıstıklı kurabiye üretilmiştir. Kurabiyelerin tamamı, her kutuda eşit sayıda ve tek çeşit kurabiye olacak şekilde kutulanmış; bu iş için **en az sayıda** kutu kullanılmıştır. Pastane sahibi Nermin Hanım kutuları vitrine dizmiş ve gün boyunca yalnızca kutu hâlinde satış yapmıştır. Üretilen kurabiye sayıları ile gün sonunda satılmadan kalan kutu sayıları aşağıdaki tabloda verilmiştir.
**Buna göre, o gün satılan kurabiyelerin toplam sayısı kaçtır?**`,
  gorsel: `<table class="tablo"><tr><th>Çeşit</th><th>Üretilen kurabiye</th><th>Satılmayan kutu</th></tr><tr><td>Cevizli</td><td>168 adet</td><td>2 kutu</td></tr><tr><td>Fıstıklı</td><td>120 adet</td><td>1 kutu</td></tr></table>`,
  secenekler: ["72", "108", "216", "288"],
  dogru: 2,
  hatalar: [
    "Satılmayan kurabiyeleri buldun (3 kutu · 24 = 72) ve orada durdun. Soru satılanları soruyor.",
    "Satılan 9 kutuyu, bir kutudaki kurabiye sayısı (24) yerine toplam kutu sayısı olan 12 ile çarptın. Ara sonuçları karıştırdın.",
    null,
    "Bütün kurabiyeleri topladın (168 + 120 = 288); satılmayan 3 kutuyu çıkarmayı unuttun."
  ],
  aciklama: `Kutu sayısının en az olması için bir kutuya konulan kurabiye sayısı en fazla olmalıdır. İki sayıyı da tam bölen en büyük sayı, en büyük ortak bölendir (EBOB).
Adım 1: 168 = 2^{3} · 3 · 7 ve 120 = 2^{3} · 3 · 5. Ortak asal çarpanların en küçük üslüleri: 2^{3} · 3 = 24. Her kutuda 24 kurabiye var.
Adım 2: Kutu sayıları: 168 : 24 = 7 cevizli kutu, 120 : 24 = 5 fıstıklı kutu; toplam 12 kutu.
Adım 3: Satılmayan 2 + 1 = 3 kutu var; satılan kutu sayısı 12 − 3 = 9.
Adım 4: Satılan kurabiye: 9 · 24 = 216.
Sağlama: Toplam 288 kurabiyeden satılmayan 3 · 24 = 72 kurabiyeyi çıkar: 288 − 72 = 216.
Cevap C.`
},
{
  id: "mat-ck-304",
  kazanim: "M.8.1.1.3",
  kademe: 3,
  zorluk: 3,
  soru: `Makinelerde birbirini döndüren iki dişli çarkın diş sayıları **aralarında asal** seçilirse her diş, karşı çarkın bütün dişleriyle sırayla eşleşir; böylece dişler eşit yıpranır ve çarkların ömrü uzar.
Bir atölyede 28 dişli bir ana çark kullanılmaktadır. Usta, bu çarkla birlikte çalışacak ikinci çarkı aşağıdaki tabloda diş sayıları verilen altı yedek çark arasından, yukarıdaki kurala uyacak biçimde seçecektir.
**Buna göre usta, ikinci çarkı yedek çarkların kaç tanesi arasından seçebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Yedek çark</th><th>K</th><th>L</th><th>M</th><th>N</th><th>P</th><th>R</th></tr><tr><td>Diş sayısı</td><td>9</td><td>13</td><td>21</td><td>25</td><td>35</td><td>39</td></tr></table>`,
  secenekler: ["1", "2", "4", "6"],
  dogru: 2,
  hatalar: [
    "Aralarında asal olmayı 'sayının asal olması' sandın ve yalnızca 13'ü saydın. 9, 25 ve 39 asal değildir ama 28 ile ortak asal çarpanları yoktur.",
    "28 ile ortak böleni olan çarkları (21 ve 35) buldun ve onları saydın. Soru, kurala **uyan** çarkları soruyor.",
    null,
    "Yedek çarkların hepsi tek, 28 çift diye hepsini aralarında asal saydın. Ortak bölen yalnızca 2 olmaz: 21 ve 35, 28 ile birlikte 7'ye bölünür."
  ],
  aciklama: `İki sayının 1'den başka ortak böleni yoksa (EBOB'ları 1 ise) bu sayılar aralarında asaldır. Sayıların kendilerinin asal olması gerekmez.
Adım 1: 28 = 2^{2} · 7. Demek ki 28'in asal çarpanları 2 ve 7'dir. İkinci çarkın diş sayısı ne 2'ye ne de 7'ye bölünmelidir.
Adım 2: Yedeklerin hepsi tek sayı, yani hiçbiri 2'ye bölünmez. Şimdi 7'ye bölünenleri ara: 21 = 3 · 7 ve 35 = 5 · 7. Bu ikisi elenir.
Adım 3: Kalanlar: 9 = 3^{2}, 13, 25 = 5^{2}, 39 = 3 · 13. Hiçbirinde 2 ya da 7 çarpanı yok; dördü de 28 ile aralarında asaldır.
Adım 4: Usta 4 çark arasından seçim yapabilir.
Sık yapılan hata: "Aralarında asal" ile "asal" aynı şey değildir. 9 ile 28'in ikisi de asal değildir ama ortak bölenleri yalnızca 1'dir.
Cevap C.`
},
{
  id: "mat-ck-305",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kodlama atölyesinde çizgi izleyen iki robot, aşağıda modellenen kapalı pistte test edilmektedir. Robotlar başlangıç çizgisinden aynı anda ve aynı yönde harekete başlamakta, her biri sabit hızla ilerlemektedir. Pistin bir turunun uzunluğu ve robotların bir tam turu tamamlama süreleri şekilde verilmiştir.
Robotlar, harekete başladıktan sonra başlangıç çizgisinden **ilk kez aynı anda** geçtikleri anda durdurulmuştur.
**Buna göre, iki robotun durduruluncaya kadar aldığı yolların toplamı kaç metredir?**`,
  gorsel: `<svg viewBox="0 0 520 230" role="img" aria-label="Kapalı pist: bir tur 6 metre. Robot R1 bir turu 36 saniyede, robot R2 bir turu 48 saniyede tamamlıyor."><rect x="40" y="40" width="440" height="130" rx="65" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="85" y="80" width="350" height="50" rx="25" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/><line x1="260" y1="130" x2="260" y2="170" stroke="var(--vurgu)" stroke-width="5"/><text x="260" y="192" font-size="15" text-anchor="middle" fill="currentColor">Başlangıç çizgisi</text><text x="260" y="26" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">Pistin bir turu: 6 m</text><rect x="215" y="140" width="34" height="20" rx="4" fill="var(--vurgu)"/><rect x="172" y="140" width="34" height="20" rx="4" fill="var(--vurgu2)"/><text x="135" y="218" font-size="15" text-anchor="middle" fill="currentColor">R1: 1 tur = 36 saniye</text><text x="385" y="218" font-size="15" text-anchor="middle" fill="currentColor">R2: 1 tur = 48 saniye</text></svg>`,
  secenekler: ["12", "18", "24", "42"],
  dogru: 3,
  hatalar: [
    "EBOB ile EKOK'u karıştırdın: EBOB(36, 48) = 12 bulup bunu cevap sandın. Yeniden buluşma anı ortak **kat** ile bulunur.",
    "Yalnızca R2'nin yolunu hesapladın (3 tur · 6 m = 18 m). Soru iki robotun yollarının toplamını soruyor.",
    "Yalnızca R1'in yolunu hesapladın (4 tur · 6 m = 24 m). R2'nin 18 metresini eklemeyi unuttun.",
    null
  ],
  aciklama: `Robotların başlangıç çizgisinden birlikte geçebilmesi için geçen sürenin hem 36'nın hem 48'in katı olması gerekir. Bu sürelerin en küçüğü EKOK'tur.
Adım 1: 36 = 2^{2} · 3^{2} ve 48 = 2^{4} · 3. EKOK = 2^{4} · 3^{2} = 144 saniye.
Adım 2: R1 bu sürede 144 : 36 = 4 tur, R2 ise 144 : 48 = 3 tur atar.
Adım 3: Toplam tur sayısı 4 + 3 = 7'dir.
Adım 4: Bir tur 6 m olduğundan toplam yol 7 · 6 = 42 metredir.
Sağlama: R1 4 · 6 = 24 m, R2 3 · 6 = 18 m yol alır; 24 + 18 = 42.
Sık yapılan hata: "İlk kez yeniden aynı anda" ifadesi ortak katı, yani EKOK'u işaret eder; EBOB'u değil.
Cevap D.`
},
{
  id: "mat-ck-306",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okulun bilim şenliği için LED'li bir yazı panosu tasarlanmaktadır. Tasarımcının elinde 96 adet LED vardır ve LED'lerin tamamı kullanılacaktır. LED'ler, her satırda eşit sayıda LED olacak biçimde satırlar hâlinde dizilecektir.
Yazıların okunabilmesi için panoda **en az 4 satır** ve her satırda **en az 4 LED** bulunmalıdır. Satır sayısı farklı olan dizilimler farklı kabul edilmektedir.
**Buna göre, tasarımcı bu panoyu kaç farklı biçimde düzenleyebilir?**`,
  gorsel: null,
  secenekler: ["6", "9", "10", "12"],
  dogru: 0,
  hatalar: [
    null,
    "Yalnızca satır koşulunu uyguladın (4, 6, 8, 12, 16, 24, 32, 48, 96). 32, 48 ve 96 satırlı dizilimlerde bir satıra 3, 2 ve 1 LED düşer; bu da ikinci koşula uymaz.",
    "96'nın 12 çarpanından yalnızca 1 ile 96'yı eledin. 2 ve 3 satırlı dizilimler ile satırında 2 ve 3 LED olan dizilimler de koşullara uymaz.",
    "96'nın bütün pozitif çarpanlarını saydın; 'en az 4 satır' ve 'her satırda en az 4 LED' koşullarını uygulamadın."
  ],
  aciklama: `Bir sayıyı kalansız bölen pozitif tam sayılara o sayının çarpanları denir. Satır sayısı, 96'nın bir çarpanı olmak zorundadır; çünkü LED'ler satırlara eşit paylaştırılıyor.
Adım 1: 96'nın çarpanlarını çiftler hâlinde yaz: 1 · 96, 2 · 48, 3 · 32, 4 · 24, 6 · 16, 8 · 12. Toplam 12 çarpan var.
Adım 2: Satır sayısı en az 4 olmalı: 1, 2 ve 3 elenir.
Adım 3: Her satırda en az 4 LED olmalı: satır sayısı 96, 48 ve 32 olursa bir satıra 1, 2 ve 3 LED düşer; bunlar da elenir.
Adım 4: Uygun satır sayıları 4, 6, 8, 12, 16 ve 24'tür; 6 farklı düzenleme yapılabilir.
Sağlama: 4 · 24, 6 · 16, 8 · 12, 12 · 8, 16 · 6 ve 24 · 4 dizilimlerinin hepsinde çarpım 96'dır ve iki koşul da sağlanır.
Sık yapılan hata: "En az 4" ifadesi 4'ü de kapsar; 4 satırlı ve satırında 4 LED olan dizilimleri elememelisin.
Cevap A.`
},
{
  id: "mat-ck-307",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kargo aktarma merkezine gelen özdeş koliler, araçlara yüklenmeden önce üst üste istiflenmektedir. Merkezdeki sayaç arızalandığı için koliler tek tek sayılamamıştır. Görevli Kerem, kolileri 12'şerli istiflediğinde de 15'erli istiflediğinde de her seferinde 7 kolinin açıkta kaldığını görmüştür. Kerem, koli sayısının 200'den fazla ve 250'den az olduğunu bilmektedir.
Vardiya amiri, kolilerin 9'arlı istiflenmesini istemiştir.
**Buna göre, koliler 9'arlı istiflendiğinde kaç koli açıkta kalır?**`,
  gorsel: null,
  secenekler: ["4", "6", "7", "8"],
  dogru: 0,
  hatalar: [
    null,
    "Koli sayısını 240 aldın; açıkta kalan 7 koliyi eklemeyi unuttun. 240 : 9 işleminin kalanı 6'dır ama koli sayısı 247'dir.",
    "Artanın her istifte aynı kalacağını sandın. 7 artması 12 ve 15 için geçerlidir; 9 için yeniden bölme yapmalısın.",
    "Açıkta kalan 7 koliyi ortak kata ekleyeceğine çıkardın: 240 − 7 = 233 ve 233 : 9 işleminin kalanı 8'dir."
  ],
  aciklama: `Bir sayı hem 12'ye hem 15'e bölündüğünde aynı kalanı veriyorsa, kalan çıkarıldığında elde edilen sayı 12 ile 15'in ortak katıdır. Ortak katlar, EKOK'un katlarıdır.
Adım 1: 12 = 2^{2} · 3 ve 15 = 3 · 5. EKOK = 2^{2} · 3 · 5 = 60.
Adım 2: Koli sayısı "60'ın bir katı + 7" biçimindedir: 67, 127, 187, 247, 307…
Adım 3: 200'den fazla ve 250'den az olan tek değer 247'dir.
Adım 4: 247'yi 9'a böl: 9 · 27 = 243 ve 247 − 243 = 4. Açıkta 4 koli kalır.
Sağlama: 247 = 12 · 20 + 7 ve 247 = 15 · 16 + 7. İki istifte de 7 koli artıyor.
Sık yapılan hata: EKOK'u bulup 7'yi eklemeyi unutmak ya da kalanın her bölende aynı çıkacağını sanmak.
Cevap A.`
},
{
  id: "mat-ck-308",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir belediye, gençlik festivali için dikdörtgen biçimindeki etkinlik alanının çevresine hoparlör direkleri diktirecektir. Alanın kenar uzunlukları aşağıdaki şekilde verilmiştir. Direkler şu kurallara göre yerleştirilecektir:
• Alanın dört köşesinin her birine birer direk dikilecektir.
• Çevre boyunca art arda gelen her iki direk arasındaki uzaklık birbirine eşit ve metre cinsinden bir doğal sayı olacaktır.
• Sesin her noktaya ulaşabilmesi için art arda gelen iki direk arasındaki uzaklık 10 metreden fazla olmayacaktır.
Direklerin hepsi alanın kenar çizgileri üzerine dikilecek, alanın iç kısmına direk konulmayacaktır.
Belediye, maliyeti düşürmek için bu kurallara uyan en az sayıda direği diktirmek istemektedir.
**Buna göre, belediyenin diktirmesi gereken direk sayısı en az kaçtır?**`,
  gorsel: `<svg viewBox="0 0 520 260" role="img" aria-label="Dikdörtgen etkinlik alanı: uzun kenar 84 metre, kısa kenar 60 metre. Dört köşede birer direk var."><rect x="70" y="40" width="380" height="170" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><circle cx="70" cy="40" r="8" fill="var(--vurgu)"/><circle cx="450" cy="40" r="8" fill="var(--vurgu)"/><circle cx="70" cy="210" r="8" fill="var(--vurgu)"/><circle cx="450" cy="210" r="8" fill="var(--vurgu)"/><text x="260" y="130" font-size="16" text-anchor="middle" fill="currentColor">Etkinlik alanı</text><text x="260" y="240" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">84 m</text><text x="486" y="131" font-size="17" text-anchor="middle" fill="currentColor" font-weight="bold">60 m</text><text x="70" y="24" font-size="14" text-anchor="middle" fill="currentColor">Köşe direği</text></svg>`,
  secenekler: ["24", "28", "44", "48"],
  dogru: 3,
  hatalar: [
    "10 metre koşulunu unuttun: EBOB(84, 60) = 12 m aralıkla 288 : 12 = 24 direk buldun. 12 m, izin verilen 10 m'den fazladır.",
    "Aralığı doğrudan 10 m alıp 288 : 10 işlemini yaptın. 10, ne 84'ü ne 60'ı böler; bu aralıkla köşelere direk denk gelmez.",
    "Doğru aralığı (6 m) buldun ama 48'den 4 köşe direğini çıkardın. Kapalı bir çevrede direk sayısı aralık sayısına eşittir; köşeler zaten bu 48'in içindedir.",
    null
  ],
  aciklama: `Köşelere direk gelmesi ve aralıkların eşit olması için aralık uzunluğu, hem 84'ü hem 60'ı kalansız bölmelidir; yani iki sayının ortak böleni olmalıdır. Direk sayısının en az olması için aralık olabildiğince büyük seçilir.
Adım 1: 84 = 2^{2} · 3 · 7 ve 60 = 2^{2} · 3 · 5. EBOB = 2^{2} · 3 = 12. Ortak bölenler, 12'nin çarpanlarıdır: 1, 2, 3, 4, 6, 12.
Adım 2: Aralık 10 m'den fazla olamaz; 12 elenir. Kalanların en büyüğü 6'dır.
Adım 3: Alanın çevresi 2 · (84 + 60) = 288 m'dir.
Adım 4: Kapalı bir çevrede direk sayısı aralık sayısına eşittir: 288 : 6 = 48.
Sağlama: Uzun kenarlarda 84 : 6 = 14, kısa kenarlarda 60 : 6 = 10 aralık vardır: 14 + 10 + 14 + 10 = 48 aralık, 48 direk.
Sık yapılan hata: EBOB'u bulur bulmaz kullanmak. Soruda ek bir sınır varsa EBOB'un kendisi değil, sınıra uyan en büyük ortak bölen alınır.
Cevap D.`
},
{
  id: "mat-ck-309",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir robot atölyesinde iki uyarı robotu test edilmektedir. A robotu 36 saniyede bir, B robotu ise b saniyede bir ışığını yakmaktadır; b bir doğal sayıdır. Test sırasında iki robotun ışığı aynı anda yakılarak süre başlatılmış, robotların ayarları test boyunca değiştirilmemiş ve kontrol ekranına aşağıdaki bilgiler yansımıştır.
Robotların ışıkları her seferinde yalnızca bir an yanıp sönmektedir. Atölye sorumlusu Tuna, B robotunun ayarını not etmeyi unutmuştur. Test tutanağına yalnızca kontrol ekranındaki bütün bilgilerle uyuşan değerler yazılabildiğinden Tuna, ekrandaki notu da dikkate alarak b'nin alabileceği değerlerin tamamını belirlemek istemektedir.
**Buna göre, b'nin alabileceği kaç farklı değer vardır?**`,
  gorsel: `<table class="tablo"><tr><th colspan="2">Kontrol ekranı</th></tr><tr><td>A robotu</td><td>36 saniyede bir ışık yakıyor</td></tr><tr><td>B robotu</td><td>b saniyede bir ışık yakıyor</td></tr><tr><td>Işıkların yeniden aynı anda yandığı <b>ilk</b> an</td><td>180. saniye</td></tr><tr><td>Not</td><td>B robotu, A robotundan daha sık ışık yakıyor.</td></tr></table>`,
  secenekler: ["4", "5", "7", "9"],
  dogru: 1,
  hatalar: [
    "b = 5'i atladın. 5 ile 36'nın ortak böleni yok diye EKOK'un 180 olamayacağını düşünmüş olabilirsin; oysa aralarında asal iki sayının EKOK'u çarpımlarıdır: 5 · 36 = 180.",
    null,
    "36'dan küçük 5'in katlarının hepsini saydın (5, 10, 15, 20, 25, 30, 35). 25 ve 35, 180'in çarpanı değildir; örneğin EKOK(36, 25) = 900 olur.",
    "'Daha sık' koşulunu uygulamadın: 45, 60, 90 ve 180 de EKOK'u 180 yapar ama bunlar 36'dan büyüktür."
  ],
  aciklama: `Işıkların yeniden aynı anda yandığı ilk an, iki sürenin EKOK'udur: EKOK(36, b) = 180. EKOK, iki sayının asal çarpanlarının en büyük üslülerinin çarpımıdır.
Adım 1: 36 = 2^{2} · 3^{2} ve 180 = 2^{2} · 3^{2} · 5. EKOK'taki 5 çarpanı 36'da yok; öyleyse 5 mutlaka b'den gelmelidir. Yani b, 5'in katıdır.
Adım 2: b, EKOK'u böleceği için 180'in bir çarpanıdır. 180'in 5'e bölünen çarpanları: 5, 10, 15, 20, 30, 45, 60, 90, 180.
Adım 3: B robotu daha sık ışık yaktığına göre süresi daha kısadır: b < 36. Geriye 5, 10, 15, 20, 30 kalır.
Adım 4: Tek tek doğrula: EKOK(36, 5) = 180, EKOK(36, 10) = 180, EKOK(36, 15) = 180, EKOK(36, 20) = 180, EKOK(36, 30) = 180. Beş değerin hepsi uygundur.
Sık yapılan hata: 36'dan küçük her 5'in katını saymak. b'nin 180'i bölmesi gerekir; 25 ve 35 bölmez.
Cevap B.`
},
{
  id: "mat-ck-310",
  kazanim: "M.8.1.1.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kodlama atölyesinde öğrenciler "Asal Avcısı" adlı bir oyun programlamıştır. Oyunun kuralları şöyledir:
• Oyun, ekrana yazılan bir başlangıç sayısıyla başlar.
• Oyuncu her hamlede ekrandaki sayıyı, o sayının asal çarpanlarından birine böler ve ekrana bölüm yazılır. Hangi asal çarpana böleceğine her hamlede oyuncu kendisi karar verir.
• Ekrandaki sayı 1 olduğunda oyun biter.
Başlangıç sayısı 12 olan örnek bir oyun aşağıda gösterilmiştir; bu oyun 3 hamle sürmüştür.
Atölyede düzenlenecek turnuvada başlangıç sayısı **üç basamaklı** olacak ve bu sayının **tam iki farklı asal çarpanı** bulunacaktır. Defne, bu koşullara uyan ve oyunun olabildiğince çok hamle sürmesini sağlayan başlangıç sayısını aramaktadır.
**Buna göre, turnuvada en fazla hamle süren oyunun başlangıç sayısı aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 540 150" role="img" aria-label="Örnek oyun: 12 bölü 2 eşittir 6, 6 bölü 2 eşittir 3, 3 bölü 3 eşittir 1. Toplam 3 hamle."><g font-size="20" text-anchor="middle" fill="currentColor"><rect x="20" y="50" width="80" height="50" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="60" y="82">12</text><rect x="160" y="50" width="80" height="50" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="200" y="82">6</text><rect x="300" y="50" width="80" height="50" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><text x="340" y="82">3</text><rect x="440" y="50" width="80" height="50" rx="8" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="3"/><text x="480" y="82">1</text></g><g stroke="currentColor" stroke-width="2"><line x1="104" y1="75" x2="150" y2="75"/><line x1="244" y1="75" x2="290" y2="75"/><line x1="384" y1="75" x2="430" y2="75"/></g><g fill="currentColor"><polygon points="150,69 158,75 150,81"/><polygon points="290,69 298,75 290,81"/><polygon points="430,69 438,75 430,81"/></g><g font-size="15" text-anchor="middle" fill="currentColor"><text x="130" y="40">1. hamle</text><text x="130" y="122">÷ 2</text><text x="270" y="40">2. hamle</text><text x="270" y="122">÷ 2</text><text x="410" y="40">3. hamle</text><text x="410" y="122">÷ 3</text></g></svg>`,
  secenekler: ["512", "768", "864", "972"],
  dogru: 1,
  hatalar: [
    "512 = 2^{9} ile 9 hamle yapılır ama 512'nin tek bir asal çarpanı (2) vardır. 'Tam iki farklı asal çarpan' koşulunu atladın.",
    null,
    "864 = 2^{5} · 3^{3} oyunu 5 + 3 = 8 hamle sürer. Üsleri iki asal çarpana dengeli dağıtmak hamle sayısını artırmaz; küçük asal çarpan ne kadar çok kullanılırsa hamle o kadar artar.",
    "En büyük sayının en çok hamleyi vereceğini sandın. 972 = 2^{2} · 3^{5} oyunu yalnızca 2 + 5 = 7 hamle sürer."
  ],
  aciklama: `Her hamlede sayı bir asal çarpanına bölündüğü için oyun, sayının asal çarpanlarına ayrılmış biçimindeki üslerin toplamı kadar hamle sürer. Örnekte 12 = 2^{2} · 3 olduğundan 2 + 1 = 3 hamle sürmüştür.
Adım 1: Hamle sayısının çok olması için sayıda olabildiğince çok asal çarpan bulunmalı; bunun için en küçük asal sayı olan 2 çokça kullanılmalıdır.
Adım 2: İki farklı asal çarpan zorunlu olduğundan 2'nin yanına en küçük diğer asal olan 3'ü bir kez koy: 2^{8} · 3 = 256 · 3 = 768. Bu oyun 8 + 1 = 9 hamle sürer.
Adım 3: 10 hamle olabilir mi? İki farklı asal çarpanla 10 hamlelik en küçük sayı 2^{9} · 3 = 1536'dır; üç basamaklı değildir. Demek ki en fazla 9 hamle yapılabilir.
Adım 4: Şıkları karşılaştır: 512 = 2^{9} (tek asal çarpan, kurala aykırı), 864 = 2^{5} · 3^{3} (8 hamle), 972 = 2^{2} · 3^{5} (7 hamle). En fazla hamle 768 ile olur.
Sağlama: 768 → 384 → 192 → 96 → 48 → 24 → 12 → 6 → 3 → 1; tam 9 hamle.
Cevap B.`
},
{
  id: "mat-ck-311",
  kazanim: "M.8.1.1.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir serada iki damla sulama vanası zaman ayarlı çalışmaktadır. A vanası 45 dakikada bir, B vanası 60 dakikada bir açılmakta ve her açılıştan birkaç dakika sonra kendiliğinden kapanmaktadır. Seranın kontrol bilgisayarı, vanalardan en az birinin açıldığı her an için kayıt defterine **tek satır** yazmaktadır; iki vana aynı anda açılırsa yine yalnızca bir satır yazılmaktadır.
Sistemin bir günlük çalışma bilgileri aşağıdaki tabloda verilmiştir. Vanalar o gün hiç aksamadan çalışmış, ilk kayıt saat 06.00'da yazılmıştır. Sera sorumlusu Nehir, akşam kayıt defterindeki satırları sayarak sistemin doğru çalışıp çalışmadığını denetlemek istemektedir.
**Buna göre, sistem doğru çalıştıysa o gün kayıt defterine toplam kaç satır yazılmıştır?**`,
  gorsel: `<table class="tablo"><tr><th>Bilgi</th><th>Değer</th></tr><tr><td>İlk açılma (iki vana birlikte)</td><td>06.00</td></tr><tr><td>A vanasının açılma aralığı</td><td>45 dakika</td></tr><tr><td>B vanasının açılma aralığı</td><td>60 dakika</td></tr><tr><td>Sistemin kapanışı</td><td>20.00 (tam 20.00'ye denk gelen açılma yapılır)</td></tr></table>`,
  secenekler: ["24", "27", "28", "29"],
  dogru: 3,
  hatalar: [
    "Ortak açılma anlarını iki kez çıkardın (19 + 15 − 5 − 5). Böylece yalnızca tek vananın açıldığı anları saydın; ortak anlarda da bir satır yazılır.",
    "A ve B'nin açılma sayılarını bulurken 06.00'daki ilk açılmayı saymadın (18 ve 14), ortak anlarda ise saydın (5): 18 + 14 − 5 = 27.",
    "06.00'daki başlangıç anını hiçbir sayıma katmadın (18 + 14 − 4) ya da B'nin tam 20.00'deki açılmasını dışarıda bıraktın. İki sınır anı da dahildir.",
    null
  ],
  aciklama: `İki vananın aynı anda açıldığı anlar, 45 ile 60'ın ortak katlarına denk gelir; bu anlar EKOK aralığıyla tekrar eder. Toplam satır sayısı = A'nın açılmaları + B'nin açılmaları − ortak açılmalar (çünkü ortak anlar iki listede de sayılmıştır).
Adım 1: 06.00'dan 20.00'ye 14 saat, yani 14 · 60 = 840 dakika vardır.
Adım 2: A vanası: 840 : 45 = 18, kalan 30. Başlangıçtan sonra 18 açılma olur; 06.00'daki ile birlikte 19 açılma.
Adım 3: B vanası: 840 : 60 = 14, kalan 0. Başlangıçtan sonra 14 açılma olur (sonuncusu tam 20.00'de); 06.00'daki ile birlikte 15 açılma.
Adım 4: 45 = 3^{2} · 5, 60 = 2^{2} · 3 · 5; EKOK = 2^{2} · 3^{2} · 5 = 180 dakika = 3 saat. Ortak anlar: 06.00, 09.00, 12.00, 15.00, 18.00; yani 5 tane (21.00 kapanıştan sonradır).
Adım 5: Satır sayısı: 19 + 15 − 5 = 29.
Sık yapılan hata: Belirli aralıklarla tekrarlanan olayları sayarken başlangıç anını unutmak. "Bölüm + 1" kuralını her sayımda aynı biçimde uygula.
Cevap D.`
},
{
  id: "mat-ck-312",
  kazanim: "M.8.1.1.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir dosya indirme programı, indirme sürerken ilerlemeyi ekranda kesir olarak göstermektedir. Program, payı indirilen dosya sayısı ve paydası toplam dosya sayısı olan kesri her seferinde **en sade hâline** getirerek yazmaktadır; kesir sadeleşmiyorsa onu olduğu gibi bırakmaktadır.
Elif, 84 dosyadan oluşan bir arşivi indirmektedir. Dosyalar birer birer indiğinden ekrandaki kesir her dosyada güncellenmektedir. Örneğin 63 dosya indiğinde program [[63|84]] kesrini sadeleştirmiş ve ekran aşağıdaki gibi görünmüştür.
Elif, indirilen dosya sayısı 60'tan fazla ve 84'ten az olduğu sürece ekranı izlemiş; kesrin bazı anlarda sadeleşmediğini, yani paydasının 84 olarak kaldığını fark etmiştir.
**Buna göre, Elif ekranı izlediği sürede paydası 84 olan kaç farklı kesir görmüştür?**`,
  gorsel: `<svg viewBox="0 0 520 170" role="img" aria-label="İndirme ekranı: 84 dosyadan 63'ü indirildi, ilerleme çubuğunun dörtte üçü dolu, ekranda üç bölü dört yazıyor."><rect x="20" y="15" width="480" height="140" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="40" y="48" font-size="16" fill="currentColor">İndirilen dosya: 63 / Toplam dosya: 84</text><rect x="40" y="65" width="360" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="40" y="65" width="270" height="30" rx="6" fill="var(--vurgu)"/><text x="40" y="130" font-size="16" fill="currentColor">İlerleme:</text><text x="450" y="76" font-size="20" text-anchor="middle" fill="currentColor" font-weight="bold">3</text><line x1="432" y1="84" x2="468" y2="84" stroke="currentColor" stroke-width="2"/><text x="450" y="106" font-size="20" text-anchor="middle" fill="currentColor" font-weight="bold">4</text><text x="125" y="130" font-size="16" fill="currentColor">kesir en sade hâliyle yazılır</text></svg>`,
  secenekler: ["7", "8", "12", "16"],
  dogru: 0,
  hatalar: [
    null,
    "84'ün asal çarpanlarından 7'yi unuttun: 77 = 7 · 11 olduğundan [[77|84]] kesri 7 ile sadeleşir ve [[11|12]] olur.",
    "Yalnızca 2'ye bölünenleri eleyip 61 ile 83 arasındaki bütün tek sayıları saydın. 3'e ve 7'ye bölünen paylar da sadeleşir.",
    "Yalnızca 3'ün katlarını eledin (23 sayıdan 7'si). 84'ün asal çarpanları 2, 3 ve 7'dir; üçünü de kontrol etmelisin."
  ],
  aciklama: `Bir kesrin sadeleşmemesi için pay ile paydanın 1'den başka ortak böleninin olmaması, yani aralarında asal olmaları gerekir. Payın asal olması şart değildir.
Adım 1: 84 = 2^{2} · 3 · 7. Pay; 2'ye, 3'e ve 7'ye bölünmüyorsa kesir sadeleşmez.
Adım 2: Pay 61'den 83'e kadar olabilir. Çift sayılar 2 ile sadeleşir; tek sayıları yaz: 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83.
Adım 3: 3'e bölünenleri ele (rakamları toplamı 3'ün katı olanlar): 63, 69, 75, 81. Kalanlar: 61, 65, 67, 71, 73, 77, 79, 83.
Adım 4: 7'ye bölünenleri ele: 77 = 7 · 11. Kalanlar: 61, 65, 67, 71, 73, 79, 83; yani 7 kesir.
Sık yapılan hata: "Aralarında asal"ı "asal" sanıp 65'i elemek. 65 = 5 · 13 asal değildir ama 84 ile ortak asal çarpanı yoktur; [[65|84]] sadeleşmez.
Cevap A.`
},
/* ===================== HAVUZ (kademe 0) ===================== */
{
  id: "mat-ck-001",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 1,
  soru: "**126 sayısının asal çarpanlarına ayrılmış biçimi aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["2 · 3^{2} · 7", "2 · 7 · 9", "2^{2} · 3 · 7", "2 · 3 · 21"],
  dogru: 0,
  hatalar: [
    null,
    "Çarpım 126 eder ama 9 asal değildir; ayırmayı yarım bıraktın. 9 yerine 3^{2} yazılmalı.",
    "Üssü yanlış asal çarpana yazdın: 2^{2} · 3 · 7 = 84 eder, 126 etmez.",
    "Çarpım 126 eder ama 21 asal değildir (21 = 3 · 7); ayırma yarım kalmış."
  ],
  aciklama: `Asal çarpanlarına ayırmak, sayıyı yalnızca asal sayıların çarpımı olarak yazmaktır. Asal sayı, 1'den ve kendisinden başka pozitif böleni olmayan, 1'den büyük doğal sayıdır.
Adım 1: 126'yı en küçük asal sayıdan başlayarak böl: 126 : 2 = 63.
Adım 2: 63 : 3 = 21 ve 21 : 3 = 7. 3'e iki kez böldün.
Adım 3: 7 : 7 = 1. Bölme bitti: 126 = 2 · 3 · 3 · 7 = 2 · 3^{2} · 7.
Sağlama: 2 · 9 · 7 = 126.
Sık yapılan hata: Çarpımı 126 eden her yazılış asal çarpanlara ayrılmış biçim değildir; çarpanların hepsi asal olmalıdır (9 ve 21 asal değildir).
Cevap A.`
},
{
  id: "mat-ck-002",
  kazanim: "M.8.1.1.3",
  kademe: 0,
  zorluk: 1,
  soru: "**Aşağıdaki sayı çiftlerinden hangisi aralarında asaldır?**",
  gorsel: null,
  secenekler: ["6 ve 15", "9 ve 21", "14 ve 35", "8 ve 15"],
  dogru: 3,
  hatalar: [
    "Biri çift, biri tek diye aralarında asal sandın; ama 6 ve 15'in ikisi de 3'e bölünür.",
    "İkisi de tek sayı diye ortak bölenleri olmadığını düşündün; 9 ve 21'in ikisi de 3'e bölünür.",
    "14 ve 35'in ikisi de 7'ye bölünür; ortak bölenleri yalnızca 1 değildir.",
    null
  ],
  aciklama: `İki doğal sayının 1'den başka ortak böleni yoksa bu sayılara aralarında asal sayılar denir.
Adım 1: Her çiftin ortak bölenini ara. 6 = 2 · 3 ve 15 = 3 · 5: ortak bölen 3. 9 = 3^{2} ve 21 = 3 · 7: ortak bölen 3. 14 = 2 · 7 ve 35 = 5 · 7: ortak bölen 7.
Adım 2: 8 = 2^{3} ve 15 = 3 · 5. Ortak asal çarpan yok; ortak bölenleri yalnızca 1'dir. 8 ve 15 aralarında asaldır.
Sık yapılan hata: Aralarında asal olmak için sayıların asal olması gerekmez. 8 de 15 de asal değildir ama aralarında asaldır.
Cevap D.`
},
{
  id: "mat-ck-003",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 1,
  soru: "**12 ile 18 sayılarının en küçük ortak katı (EKOK) kaçtır?**",
  gorsel: null,
  secenekler: ["6", "36", "72", "216"],
  dogru: 1,
  hatalar: [
    "EBOB ile EKOK'u karıştırdın: 6, iki sayıyı da bölen en büyük sayıdır (EBOB). Soru ortak katı soruyor.",
    null,
    "72 ortak bir kattır ama en küçüğü değildir; 36 da hem 12'nin hem 18'in katıdır.",
    "İki sayıyı çarptın (12 · 18 = 216). Çarpım her zaman ortak kattır ama sayılar aralarında asal değilse en küçük ortak kat olmaz."
  ],
  aciklama: `EKOK, iki sayının ortak katlarının en küçüğüdür.
Adım 1: 12 = 2^{2} · 3 ve 18 = 2 · 3^{2}.
Adım 2: EKOK için her asal çarpanın en büyük üslüsünü al: 2^{2} · 3^{2} = 4 · 9 = 36.
Sağlama: 12'nin katları 12, 24, 36…; 18'in katları 18, 36… İlk ortak kat 36'dır.
Sık yapılan hata: EBOB (en büyük ortak bölen) sayılardan büyük olamaz, EKOK ise sayılardan küçük olamaz. 6'nın EKOK olamayacağını buradan anlayabilirsin.
Cevap B.`
},
{
  id: "mat-ck-004",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bir robot atölyesindeki 96 kablo ve 72 sensörün tamamı, özdeş deney setlerine paylaştırılacaktır. Her sette eşit sayıda kablo ve eşit sayıda sensör bulunacak, hiç malzeme artmayacaktır. Atölye sorumlusu, olabildiğince çok set hazırlamak istemektedir.
**Buna göre, hazırlanan setlerin her birinde kablo ve sensör olarak toplam kaç parça bulunur?**`,
  gorsel: null,
  secenekler: ["3", "4", "7", "24"],
  dogru: 2,
  hatalar: [
    "Yalnızca bir setteki sensör sayısını buldun (72 : 24 = 3). Kabloları eklemeyi unuttun.",
    "Yalnızca bir setteki kablo sayısını buldun (96 : 24 = 4). Sensörleri eklemeyi unuttun.",
    null,
    "EBOB'u, yani set sayısını cevap sandın. 24, hazırlanan set sayısıdır; soru bir setteki parça sayısını soruyor."
  ],
  aciklama: `Set sayısı hem 96'yı hem 72'yi kalansız bölmelidir. En çok set istendiğine göre iki sayının en büyük ortak böleni (EBOB) aranır.
Adım 1: 96 = 2^{5} · 3 ve 72 = 2^{3} · 3^{2}. Ortak asal çarpanların en küçük üslüleri: 2^{3} · 3 = 24. En fazla 24 set hazırlanır.
Adım 2: Bir setteki kablo sayısı 96 : 24 = 4, sensör sayısı 72 : 24 = 3'tür.
Adım 3: Bir sette toplam 4 + 3 = 7 parça bulunur.
Sağlama: 24 · 7 = 168 ve 96 + 72 = 168.
Sık yapılan hata: EBOB'u bulunca durmak. EBOB burada set sayısıdır; soru ise bir setin içindekileri soruyor.
Cevap C.`
},
{
  id: "mat-ck-005",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bir limanın girişindeki iki deniz fenerinden biri 45 saniyede bir, diğeri 60 saniyede bir ışık çakmaktadır. Bir gemi kaptanı, iki fenerin aynı anda ışık çaktığını görmüştür.
**Buna göre, iki fener bu andan kaç dakika sonra ilk kez yeniden aynı anda ışık çakar?**`,
  gorsel: null,
  secenekler: ["3", "15", "105", "180"],
  dogru: 0,
  hatalar: [
    null,
    "EBOB ile EKOK'u karıştırdın: EBOB(45, 60) = 15 bulup cevap sandın. Yeniden buluşma ortak **kat** ile bulunur.",
    "Süreleri topladın (45 + 60 = 105). 105. saniyede ikinci fener ışık çakmaz; çünkü 105, 60'ın katı değildir.",
    "EKOK'u doğru buldun (180 saniye) ama dakikaya çevirmedin. Soru dakika soruyor: 180 : 60 = 3."
  ],
  aciklama: `İki olayın yeniden aynı ana denk gelmesi için geçen süre her iki sürenin de katı olmalıdır; bunların en küçüğü EKOK'tur.
Adım 1: 45 = 3^{2} · 5 ve 60 = 2^{2} · 3 · 5. EKOK = 2^{2} · 3^{2} · 5 = 180 saniye.
Adım 2: Soru dakika soruyor: 180 : 60 = 3 dakika.
Sağlama: 180 saniyede birinci fener 180 : 45 = 4 kez, ikinci fener 180 : 60 = 3 kez ışık çakar; ikisi de tam sayı.
Sık yapılan hata: Sonucu sorulan birime çevirmemek. Kökte istenen birimi her zaman kontrol et.
Cevap A.`
},
{
  id: "mat-ck-006",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 2,
  soru: `Aşağıdaki çarpan ağacında her kutudaki sayı, o kutunun altındaki iki kutuda yazan sayıların çarpımına eşittir. En alttaki kutularda yalnızca asal sayılar vardır. A ve B birer doğal sayıdır.
**Buna göre, A + B kaçtır?**`,
  gorsel: `<svg viewBox="0 0 440 280" role="img" aria-label="Çarpan ağacı: en üstte A; A'nın altında 6 ve B; 6'nın altında 2 ve 3; B'nin altında 5 ve 7."><g stroke="currentColor" stroke-width="2"><line x1="220" y1="60" x2="120" y2="110"/><line x1="220" y1="60" x2="320" y2="110"/><line x1="120" y1="150" x2="70" y2="200"/><line x1="120" y1="150" x2="170" y2="200"/><line x1="320" y1="150" x2="270" y2="200"/><line x1="320" y1="150" x2="370" y2="200"/></g><g fill="var(--dolgu)" stroke="currentColor" stroke-width="2"><rect x="190" y="20" width="60" height="40" rx="6"/><rect x="90" y="110" width="60" height="40" rx="6"/><rect x="290" y="110" width="60" height="40" rx="6"/><rect x="40" y="200" width="60" height="40" rx="6"/><rect x="140" y="200" width="60" height="40" rx="6"/><rect x="240" y="200" width="60" height="40" rx="6"/><rect x="340" y="200" width="60" height="40" rx="6"/></g><g font-size="20" text-anchor="middle" fill="currentColor"><text x="220" y="47" font-weight="bold">A</text><text x="120" y="137">6</text><text x="320" y="137" font-weight="bold">B</text><text x="70" y="227">2</text><text x="170" y="227">3</text><text x="270" y="227">5</text><text x="370" y="227">7</text></g></svg>`,
  secenekler: ["35", "76", "210", "245"],
  dogru: 3,
  hatalar: [
    "Yalnızca B'yi buldun (5 · 7 = 35). A'yı bulup toplamayı unuttun.",
    "A'yı bulurken çarpmak yerine topladın: 6 + 35 = 41 ve 41 + 35 = 76. Çarpan ağacında üstteki sayı alttakilerin **çarpımıdır**.",
    "Yalnızca A'yı buldun (6 · 35 = 210). Soru A + B'yi soruyor.",
    null
  ],
  aciklama: `Çarpan ağacı, bir sayıyı adım adım çarpanlarına ayırmanın şemasıdır; dalların ucunda asal çarpanlar kalır.
Adım 1: B'nin altında 5 ve 7 var: B = 5 · 7 = 35.
Adım 2: A'nın altında 6 ve B var: A = 6 · 35 = 210.
Adım 3: A + B = 210 + 35 = 245.
Sağlama: En alttaki asal sayıların çarpımı en üstteki sayıyı vermelidir: 2 · 3 · 5 · 7 = 210.
Sık yapılan hata: Ara sonucu (A ya da B) cevap sanmak. Kökte isteneni son kez oku.
Cevap D.`
},
{
  id: "mat-ck-007",
  kazanim: "M.8.1.1.3",
  kademe: 0,
  zorluk: 2,
  soru: `Mert, 20'den büyük ve 30'dan küçük doğal sayıların her birini ayrı bir karta yazmıştır. Ardından üzerinde 15 ile aralarında asal olan bir sayı yazan kartları ayırıp masaya dizmiştir.
**Buna göre, Mert masaya kaç kart dizmiştir?**`,
  gorsel: null,
  secenekler: ["2", "5", "6", "9"],
  dogru: 1,
  hatalar: [
    "Yalnızca asal sayıları (23 ve 29) saydın. Aralarında asal olmak için sayının asal olması gerekmez; 22, 26 ve 28 de 15 ile aralarında asaldır.",
    null,
    "Yalnızca 3'ün katlarını eledin; 25'i elemeyi unuttun. 25 ile 15'in ikisi de 5'e bölünür.",
    "21'den 29'a kadar bütün kartları saydın; 15 ile ortak böleni olanları elemedin."
  ],
  aciklama: `İki sayının 1'den başka ortak böleni yoksa bu sayılar aralarında asaldır.
Adım 1: 15 = 3 · 5. Bir sayının 15 ile aralarında asal olması için 3'e de 5'e de bölünmemesi gerekir.
Adım 2: Kartlardaki sayılar: 21, 22, 23, 24, 25, 26, 27, 28, 29. 3'e bölünenler (21, 24, 27) ve 5'e bölünen (25) elenir.
Adım 3: Kalanlar 22, 23, 26, 28, 29; yani 5 kart.
Sık yapılan hata: "Aralarında asal"ı "asal" ile karıştırmak. 22 asal değildir ama 22 = 2 · 11 olduğundan 15 ile ortak asal çarpanı yoktur.
Cevap B.`
},
{
  id: "mat-ck-008",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 3,
  soru: `Veteriner hekim, Zeynep'in kedisi Pamuk için iki ayrı ilaç yazmıştır. İlaçların verilme sıklığı aşağıdaki tabloda gösterilmiştir. Zeynep, iki ilacı da ilk kez bir **pazartesi** günü vermiş ve sonraki günlerde tablodaki sıklığa tam olarak uymuştur.
Hekim, ilk günden sonra iki ilacın yeniden aynı güne denk geldiği ilk gün Pamuk'u kontrole getirmesini istemiştir.
**Buna göre, Zeynep Pamuk'u haftanın hangi günü kontrole götürecektir?**`,
  gorsel: `<table class="tablo"><tr><th>İlaç</th><th>Verilme sıklığı</th></tr><tr><td>Göz damlası</td><td>6 günde bir</td></tr><tr><td>Vitamin tableti</td><td>8 günde bir</td></tr></table>`,
  secenekler: ["Pazartesi", "Çarşamba", "Perşembe", "Pazar"],
  dogru: 2,
  hatalar: [
    "İki ilaç yeniden buluştuğunda günün de aynı kalacağını sandın. 24 gün tam hafta değildir: 24 = 3 · 7 + 3, yani 3 gün artar.",
    "İlk pazartesiyi 1. gün sayıp 23 gün ilerledin ya da EBOB(6, 8) = 2 gün sonrasını aldın. 24 gün **sonrası** aranır; ilk gün sayılmaz.",
    null,
    "EKOK yerine sayıları çarptın (6 · 8 = 48). 48 gün sonrası pazara denk gelir ama ilaçlar daha önce, 24. günde buluşur."
  ],
  aciklama: `İki ilacın yeniden aynı güne denk gelmesi için geçen gün sayısı hem 6'nın hem 8'in katı olmalıdır; bunların en küçüğü EKOK'tur.
Adım 1: 6 = 2 · 3 ve 8 = 2^{3}. EKOK = 2^{3} · 3 = 24. İlaçlar 24 gün sonra yeniden aynı güne denk gelir.
Adım 2: Haftanın günleri 7 günde bir tekrar eder. 24'ü 7'ye böl: 24 = 3 · 7 + 3. Yani 3 tam hafta ve 3 gün geçer.
Adım 3: Tam haftalar günü değiştirmez. Pazartesiden 3 gün ilerle: salı, çarşamba, perşembe.
Sağlama: Göz damlası günleri 6, 12, 18, 24…; tablet günleri 8, 16, 24… İlk ortak gün 24'tür.
Sık yapılan hata: "24 gün sonra" derken başlangıç gününü 1. gün saymak. Başlangıç günü 0. gündür; saymaya ertesi günden başlanır.
Cevap C.`
},
{
  id: "mat-ck-009",
  kazanim: "M.8.1.1.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir simit fabrikasında sabah üretilen simitlerin sayısı, üretim programının ekranında asal çarpanlarına ayrılmış biçimde 2^{3} · 3^{2} · 5 olarak görünmektedir. Simitlerin tamamı, her bayiye eşit sayıda simit gidecek ve hiç simit artmayacak biçimde bayilere dağıtılacaktır.
Dağıtım sorumlusu Harun Usta, çarpma işlemini yapmadan, yalnızca bu yazılışa bakarak simitlerin kaç bayiye dağıtılabileceğini belirlemek istemektedir.
**Buna göre, simitlerin dağıtıldığı bayi sayısı aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: null,
  secenekler: ["24", "40", "45", "48"],
  dogru: 3,
  hatalar: [
    "24 = 2^{3} · 3 yazılır; 2^{3} de 3 de simit sayısının içinde vardır. 24 bayiye dağıtım yapılabilir (her birine 15 simit).",
    "40 = 2^{3} · 5 yazılır; iki çarpan da simit sayısının içinde vardır. 40 bayiye dağıtım yapılabilir (her birine 9 simit).",
    "45 = 3^{2} · 5 yazılır; iki çarpan da simit sayısının içinde vardır. 45 bayiye dağıtım yapılabilir (her birine 8 simit).",
    null
  ],
  aciklama: `Bir sayının çarpanı olabilmek için, o çarpanın asal çarpanlarının hepsi sayının içinde ve en fazla oradaki üs kadar bulunmalıdır.
Adım 1: Simit sayısında 2 çarpanı en fazla 3 kez, 3 çarpanı en fazla 2 kez, 5 çarpanı en fazla 1 kez vardır.
Adım 2: Şıkları asal çarpanlarına ayır: 24 = 2^{3} · 3, 40 = 2^{3} · 5, 45 = 3^{2} · 5, 48 = 2^{4} · 3.
Adım 3: 24, 40 ve 45'in bütün asal çarpanları simit sayısının içinde yeterince var. 48'de ise 2 çarpanı 4 kez geçiyor; simit sayısında yalnızca 3 tane 2 var. 48, bu sayıyı bölemez.
Sağlama: 2^{3} · 3^{2} · 5 = 8 · 9 · 5 = 360. 360 : 48 = 7,5 tam sayı değildir; 360 : 24 = 15, 360 : 40 = 9, 360 : 45 = 8 tam sayıdır.
Sık yapılan hata: Yalnızca asal çarpanların çeşidine bakıp üsleri kontrol etmemek. 48'in asal çarpanları (2 ve 3) sayıda vardır ama 2'nin üssü yetmez.
Cevap D.`
},
{
  id: "mat-ck-010",
  kazanim: "M.8.1.1.3",
  kademe: 0,
  zorluk: 3,
  soru: `Ekranların en-boy oranı, genişlik ve yükseklikteki piksel sayıları sadeleştirilerek a : b biçiminde yazılır; burada a ile b **aralarında asal** doğal sayılardır. Örneğin genişliği 1920 piksel, yüksekliği 1080 piksel olan bir ekranın en-boy oranı 16 : 9'dur.
Bir kodlama atölyesine yeni alınan monitörün genişlik ve yüksekliğindeki piksel sayıları aşağıdaki şekilde verilmiştir. Bu monitörün en-boy oranı a : b'dir.
**Buna göre, a + b kaçtır?**`,
  gorsel: `<svg viewBox="0 0 520 300" role="img" aria-label="Monitör: genişlik 1680 piksel, yükseklik 1050 piksel."><rect x="70" y="30" width="336" height="210" rx="8" fill="var(--dolgu)" stroke="currentColor" stroke-width="3"/><rect x="218" y="240" width="40" height="22" fill="none" stroke="currentColor" stroke-width="2"/><line x1="178" y1="264" x2="298" y2="264" stroke="currentColor" stroke-width="3"/><text x="238" y="142" font-size="16" text-anchor="middle" fill="currentColor">Monitör</text><line x1="70" y1="16" x2="406" y2="16" stroke="var(--vurgu)" stroke-width="2"/><line x1="70" y1="10" x2="70" y2="22" stroke="var(--vurgu)" stroke-width="2"/><line x1="406" y1="10" x2="406" y2="22" stroke="var(--vurgu)" stroke-width="2"/><text x="238" y="52" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">Genişlik: 1680 piksel</text><line x1="424" y1="30" x2="424" y2="240" stroke="var(--vurgu)" stroke-width="2"/><line x1="418" y1="30" x2="430" y2="30" stroke="var(--vurgu)" stroke-width="2"/><line x1="418" y1="240" x2="430" y2="240" stroke="var(--vurgu)" stroke-width="2"/><text x="238" y="222" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">Yükseklik: 1050 piksel</text></svg>`,
  secenekler: ["13", "26", "39", "210"],
  dogru: 0,
  hatalar: [
    null,
    "Sadeleştirmeyi yarım bıraktın: 16 : 10 oranında 16 ile 10 aralarında asal değildir (ikisi de 2'ye bölünür). Oran 8 : 5 olmalı.",
    "Sadeleştirmeyi yarım bıraktın: 24 : 15 oranında 24 ile 15'in ikisi de 3'e bölünür. 3 çarpanını gözden kaçırdın.",
    "EBOB'u, yani sadeleştirmede kullanılan sayıyı cevap sandın. Soru, sadeleşmiş orandaki a ile b'nin toplamını soruyor."
  ],
  aciklama: `Bir oranı, terimleri aralarında asal olacak biçimde yazmak için iki sayı da EBOB'larına bölünür. Aralarında asal, 1'den başka ortak bölenin kalmaması demektir.
Adım 1: 1680 = 2^{4} · 3 · 5 · 7 ve 1050 = 2 · 3 · 5^{2} · 7.
Adım 2: Ortak asal çarpanların en küçük üslüleri: EBOB = 2 · 3 · 5 · 7 = 210.
Adım 3: 1680 : 210 = 8 ve 1050 : 210 = 5. En-boy oranı 8 : 5'tir; 8 ile 5'in ortak böleni yalnızca 1'dir.
Adım 4: a + b = 8 + 5 = 13.
Sağlama: Örnekteki 1920 ve 1080 için EBOB = 120'dir; 1920 : 120 = 16 ve 1080 : 120 = 9.
Sık yapılan hata: Sadeleştirmeyi erken bırakmak. Elde ettiğin iki sayının hâlâ ortak böleni olup olmadığını mutlaka kontrol et.
Cevap A.`
},
{
  id: "mat-ck-011",
  kazanim: "M.8.1.1.2",
  kademe: 0,
  zorluk: 4,
  soru: `Bir kodlama atölyesinde Defne, girilen iki doğal sayının en büyük ortak bölenini (EBOB) ve en küçük ortak katını (EKOK) hesaplayıp ekrana yazan bir program hazırlamıştır. Arkadaşı Kaan, programı denemek için iki doğal sayı girmiş; ancak hangi sayıları girdiğini Defne'ye söylememiştir. Program, sayıların yazıldığı kutuları sonuç ekranında gizlemektedir; girilen iki sayı birbirinden farklı da olabilir, aynı da olabilir. Programın verdiği sonuçlar aşağıdaki ekran görüntüsünde yer almaktadır.
Defne, ekrandaki sonuçlara bakarak Kaan'ın girmiş olabileceği sayıları araştırmış ve bu sonuçları veren birden fazla sayı çifti bulunduğunu görmüştür. Defne, bulduğu her sayı çiftini programa yeniden girerek sonuçların gerçekten aynı çıkıp çıkmadığını da denetlemiştir.
**Buna göre, Kaan'ın girdiği iki sayının toplamı en az kaçtır?**`,
  gorsel: `<svg viewBox="0 0 460 190" role="img" aria-label="Program ekranı: birinci sayı gizli, ikinci sayı gizli, EBOB eşittir 5, EKOK eşittir 180."><rect x="20" y="15" width="420" height="160" rx="12" fill="var(--dolgu)" stroke="currentColor" stroke-width="2"/><g font-size="17" fill="currentColor"><text x="45" y="52">1. sayı: ■■■</text><text x="250" y="52">2. sayı: ■■■</text><text x="45" y="105" font-weight="bold">EBOB = 5</text><text x="45" y="145" font-weight="bold">EKOK = 180</text></g><line x1="40" y1="70" x2="420" y2="70" stroke="currentColor" stroke-width="1"/></svg>`,
  secenekler: ["60", "65", "75", "100"],
  dogru: 1,
  hatalar: [
    "Çarpımı 900 olan ve birbirine en yakın sayıları (30 ve 30) aldın; ama EBOB(30, 30) = 30 olur, 5 olmaz. Her çiftte EBOB'u denetlemelisin.",
    null,
    "15 ve 60 çiftini seçtin. Çarpımları 900 eder ama EBOB(15, 60) = 15'tir; ekrandaki 5 ile uyuşmaz.",
    "10 ve 90 çiftini seçtin. Çarpımları 900 eder ama EBOB(10, 90) = 10'dur; ekrandaki 5 ile uyuşmaz."
  ],
  aciklama: `İki doğal sayının çarpımı, EBOB'ları ile EKOK'larının çarpımına eşittir. Ayrıca iki sayı da EBOB'un katı ve EKOK'un çarpanı olmak zorundadır.
Adım 1: Sayıların çarpımı 5 · 180 = 900'dür.
Adım 2: İki sayı da 5'in katıdır ve 180'i böler. Çarpımı 900 olan böyle çiftleri yaz: 5 ve 180, 10 ve 90, 15 ve 60, 20 ve 45, 30 ve 30.
Adım 3: Her çiftin EBOB'unu denetle: EBOB(5, 180) = 5 (uygun), EBOB(10, 90) = 10, EBOB(15, 60) = 15, EBOB(20, 45) = 5 (uygun), EBOB(30, 30) = 30.
Adım 4: Uygun çiftlerin toplamları 5 + 180 = 185 ve 20 + 45 = 65'tir. En küçük toplam 65'tir.
Sağlama: 20 = 2^{2} · 5 ve 45 = 3^{2} · 5; EBOB = 5 ve EKOK = 2^{2} · 3^{2} · 5 = 180.
Sık yapılan hata: Yalnızca çarpıma bakmak. Sayılar 5'e bölündükten sonra kalan kısımlar (4 ile 9 gibi) aralarında asal olmalıdır; yoksa EBOB büyür.
Cevap B.`
},
{
  id: "mat-ck-012",
  kazanim: "M.8.1.1.3",
  kademe: 0,
  zorluk: 3,
  soru: `Bora, bisiklet kilidinin iki basamaklı kodunu unutmamak için defterine şu iki ipucunu yazmıştır:
• Kod, bir asal sayı __değildir__.
• Kod ile 90 aralarında asaldır.
Bir süre sonra kodu unutan Bora'ya kardeşi Ada yardım etmiştir. Kilit, yanlış denemelerde kilitlenmediği için istenildiği kadar deneme yapılabilmektedir. Ada, ipuçlarına uyan birden fazla sayı bulunduğunu fark etmiş ve denemelere bu sayıların en büyüğünden başlamaya karar vermiştir. Bunun için önce 90'ı asal çarpanlarına ayırmış, ardından 99'dan başlayıp geriye doğru giderek sayıları tek tek incelemiştir. Ada, incelediği her sayı için iki ipucunu da ayrı ayrı denetlemiş ve uygun ilk sayıyı bulunca durmuştur.
**Buna göre, iki ipucuna da uyan en büyük sayı kaçtır?**`,
  gorsel: null,
  secenekler: ["77", "89", "91", "97"],
  dogru: 2,
  hatalar: [
    "91'i asal sanıp eledin. 91 = 7 · 13 olduğundan asal değildir ve 90 ile ortak böleni yoktur. 77 ipuçlarına uyar ama en büyük değildir.",
    "Kodun 90'dan küçük olması gerektiğini sandın ve ilk ipucunu atladın. 89 asal bir sayıdır; kod asal olamaz.",
    null,
    "Yalnızca ikinci ipucunu uyguladın. 97, 90 ile aralarında asaldır ama asal bir sayıdır; ilk ipucuna uymaz."
  ],
  aciklama: `İki sayının 1'den başka ortak böleni yoksa aralarında asaldırlar. Bunun için sayıların kendilerinin asal olması gerekmez; bu soruda kodun asal **olmaması** isteniyor.
Adım 1: 90 = 2 · 3^{2} · 5. Kod; 2'ye, 3'e ve 5'e bölünmemelidir.
Adım 2: 99'dan geriye doğru git: 99 (3'e bölünür), 98 (çift), 97 (hiçbirine bölünmez ama asaldır, ilk ipucuna uymaz), 96 (çift), 95 (5'e bölünür), 94 (çift), 93 (3'e bölünür), 92 (çift).
Adım 3: 91'i incele: tek sayıdır, rakamları toplamı 10 olduğundan 3'e bölünmez, 5'e bölünmez. Asal mı? 91 = 7 · 13; asal değildir. İki ipucuna da uyar.
Adım 4: Aranan sayı 91'dir.
Sık yapılan hata: 91'i asal sanmak. Bir sayının asal olup olmadığını anlamak için 2, 3, 5'ten sonra 7'yi de denemelisin: 7 · 13 = 91.
Cevap C.`
}
);
