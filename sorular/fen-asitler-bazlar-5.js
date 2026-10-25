// Fen Bilimleri — Asitler ve Bazlar: Kademe 3 (LGS Ayarı) yedeği (sıra 26-75)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["asitler-bazlar"] = window.LGS_BANK["asitler-bazlar"] || []).push(
/* ===================== KADEME 3 — LGS AYARI YEDEĞİ (düzey 3) ===================== */
{
  id: "fen-ab-326",
  kazanim: "F.8.4.4.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir diş hekimi, tatlı ve ekşi yiyeceklerden sonra ağız ortamının asidik hâle geldiğini ve bunun diş minesine zarar verdiğini anlatıyor. Diş macunlarının ağızdaki asidin etkisini azaltmaya yardımcı olduğunu, incelediği bir diş macunu ambalajında ise pH değerinin 8 olarak yazdığını söylüyor.
**Diş macununun ağızdaki asidin etkisini azaltabilmesinin nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "pH değerinin 7'den küçük olması, çünkü asit eklenince asidin etkisi azalır",
    "pH değerinin 7 olması, çünkü nötr maddeler asidi tamamen yok eder",
    "pH değerinin 7'den büyük olması, çünkü baz özelliği asidin etkisini azaltır",
    "pH değerinin 7'den büyük olması, çünkü baz özelliği ağız ortamını daha ekşi yapar"
  ],
  dogru: 2,
  hatalar: [
    "Asidi asitle azaltma: asit eklemek ortamın asitliğini artırır; ayrıca pH 8 olan bir madde asit değildir.",
    "Nötrü çözüm sanma: pH 8 nötr değil bazik değerdir; nötr madde de asidi yok etmez.",
    null,
    "Baz özelliğini yanlış yorumlama: bazlar acı tatlıdır ve ortamı ekşi değil, daha az asidik yapar."
  ],
  aciklama: `Baz özellikli bir madde, asit özellikli bir maddenin etkisini azaltır; mide ilaçlarının ve diş macunlarının işlevi buna dayanır.
Adım 1: Ambalajdaki pH 8 değeri 7'den büyüktür; diş macunu bazik özelliktedir.
Adım 2: Ağız ortamı ekşi yiyeceklerden sonra asidiktir. Asidin etkisi baz özellikli bir maddeyle azaltılır.
Adım 3: Asit eklemek asitliği artırırdı; nötr bir madde de asidin etkisini azaltmaz.
Sık yapılan hata: "Zararlı asit için asit olmayan her şey işe yarar" demek. Etkiyi azaltan madde baz özellikli olandır.
Cevap C.`
},
{
  id: "fen-ab-327",
  kazanim: "F.8.4.4.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, aynı pil ve ampulle kurduğu devrede iki ayrı kaba sırayla K ve L çözeltilerini koyuyor. K çözeltisi kaba konduğunda ampul yanıyor ve çözelti kırmızı turnusolu maviye çeviriyor. L çözeltisi konduğunda da ampul yanıyor ve çözelti mavi turnusolu kırmızıya çeviriyor.
**Bu gözlemlere göre aşağıdaki yargılardan hangileri doğrudur?**
I. K çözeltisi bazik özelliktedir.
II. Ampulün yanması, L çözeltisinin asit olduğunu gösterir.
III. Elektrik akımını yalnızca K çözeltisi iletmiştir.`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "İletkenliği tür göstergesi sanma: ampul hem asit hem baz çözeltisinde yanar; L'nin asit olduğu turnusoldan anlaşılır, ampulden değil.",
    "III'ü doğru sayma: ampul L'de de yandığı için akımı iki çözelti de iletmiştir.",
    "I'i dışarıda bırakma ve iletkenliği yanlış yorumlama: K baz olduğu için I doğrudur; II ile III ise yanlıştır."
  ],
  aciklama: `Asitlerin de bazların da sulu çözeltisi elektrik akımını iletir; asiti bazdan ayıran iletkenlik değil turnusol ya da pH'tır.
Adım 1: K kırmızı turnusolu maviye çevirdiği için bazdır; I doğru.
Adım 2: Ampul asitte de bazda da yandığı için ampulün yanması L'nin asit olduğunu göstermez; II yanlış.
Adım 3: Ampul L'de de yandığına göre akımı yalnızca K iletmemiştir; III yanlış.
Sağlama: L'nin asit olduğu, mavi turnusolu kırmızıya çevirmesinden anlaşılır.
Cevap A.`
},
{
  id: "fen-ab-328",
  kazanim: "F.8.4.4.4",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, mutfak ve banyodan aldığı dört sıvının pH değerlerini pH kâğıdıyla ölçüp tabloya yazıyor.
**Tablodaki verilere göre aşağıdaki yargılardan hangileri doğrudur?**
I. Ayran, sütten daha kuvvetli asittir.
II. Yemek sodalı su ile gider açıcı çözeltisi kırmızı turnusolu maviye çevirir.
III. Dört sıvıdan yalnızca ikisi mavi turnusolu kırmızıya çevirir.`,
  gorsel: `<table class="tablo"><tr><th>Sıvı</th><th>pH değeri</th></tr><tr><td>Ayran</td><td>4</td></tr><tr><td>Süt</td><td>6</td></tr><tr><td>Yemek sodalı su</td><td>9</td></tr><tr><td>Gider açıcı çözeltisi</td><td>13</td></tr></table>`,
  secenekler: [
    "Yalnız I",
    "I ve II",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 3,
  hatalar: [
    "Eksik değerlendirme: bazların kırmızı turnusolu maviye çevirmesi ve asit sayısı da tablodan doğrulanır; II ve III de doğrudur.",
    "Asit sayısını yanlış sayma: pH'ı 7'den küçük olan iki sıvı vardır (ayran ve süt); III de doğrudur.",
    "pH yönünü ters okuma: pH 4 olan ayran, pH 6 olan sütten daha kuvvetli asittir; I de doğrudur.",
    null
  ],
  aciklama: `pH 7'den küçükse asit, büyükse bazdır; pH küçüldükçe asitlik, büyüdükçe bazlık artar.
Adım 1: Ayran (4) ve süt (6) asidiktir. pH'ı küçük olan ayran daha kuvvetli asittir; I doğru.
Adım 2: Yemek sodalı su (9) ve gider açıcı çözeltisi (13) baziktir; ikisi de kırmızı turnusolu maviye çevirir; II doğru.
Adım 3: Mavi turnusolu kırmızıya yalnızca asitler çevirir; asit olan sıvılar ayran ve süttür, yani iki tanedir; III doğru.
Sağlama: Süt pH 6 olduğu için nötr değil, hafif asittir.
Cevap D.`
},
{
  id: "fen-ab-329",
  kazanim: "F.8.4.4.3",
  kademe: 3,
  zorluk: 3,
  soru: `Zerdeçal asit ve nötr ortamda sarı, baz ortamda kırmızımsı kahverengi olur. Kırmızı lahana suyu ise asitte kırmızı, nötrde mor, bazda mavimsi yeşil renk verir. Bir öğrenci K, L ve M çözeltilerinin her birine bu iki ayracı ayrı örneklerde uygulayıp sonuçları tabloya yazıyor.
**Bu sonuçlara göre aşağıdaki yargılardan hangileri doğrudur?**
I. K çözeltisinin pH değeri 7'den büyüktür.
II. L çözeltisi nötr özelliktedir.
III. K ve L çözeltilerinin zerdeçalda aynı rengi vermesi, ikisinin aynı türde olduğunu gösterir.`,
  gorsel: `<table class="tablo"><tr><th>Çözelti</th><th>Lahana suyu</th><th>Zerdeçal</th></tr><tr><td>K</td><td>Kırmızı</td><td>Sarı</td></tr><tr><td>L</td><td>Mor</td><td>Sarı</td></tr><tr><td>M</td><td>Mavimsi yeşil</td><td>Kırmızımsı kahverengi</td></tr></table>`,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "Rengi ters yorumlama: lahana suyunun kırmızı olması asit ortamı gösterir; K'nin pH değeri 7'den küçüktür.",
    null,
    "Tek ayraca güvenme: zerdeçal asit ve nötrde aynı rengi verdiği için bu iki çözeltinin türü zerdeçaldan ayırt edilemez; I de yanlıştır.",
    "III'ü doğru sayma: K asit, L nötrdür; zerdeçal ikisini ayıramaz ama türleri farklıdır."
  ],
  aciklama: `Bir ayraç iki türü aynı renge boyuyorsa o ayraçla bu iki tür birbirinden ayrılamaz; ikinci bir ayraca bakmak gerekir.
Adım 1: K'de lahana suyu kırmızı olduğuna göre K asittir ve pH değeri 7'den küçüktür; I yanlış.
Adım 2: L'de lahana suyu mor olduğuna göre L nötrdür; II doğru.
Adım 3: Zerdeçal K'de de L'de de sarıdır ama bu, ikisinin aynı tür olduğu anlamına gelmez; zerdeçal asidi nötrden ayıramaz. Lahana suyu ise ayırır; III yanlış.
Sağlama: M'nin zerdeçalda kahverengi, lahana suyunda mavimsi yeşil olması bazlığı gösterir.
Cevap B.`
},
{
  id: "fen-ab-330",
  kazanim: "F.8.4.4.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir mücevher atölyesinde etiketi silinmiş bir sıvıya, aynı anda bir altın yüzük ve bir çinko levha parçası batırılıyor. Bir süre sonra çinko levhadan gaz kabarcıkları çıktığı, altın yüzükte ise hiçbir değişiklik olmadığı görülüyor. Usta bu gözlemden bir sonuç çıkarmak istiyor.
**Buna göre aşağıdaki çıkarımlardan hangisi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Altın etkilenmediği için sıvı asit değildir, çinkodaki gaz çıkışı başka bir nedenden olmuştur",
    "Çinko etkilendiği için sıvı asittir ve asitler bütün metallerle tepkimeye girerek gaz çıkarır",
    "Bir metal etkilenip diğeri etkilenmediği için sıvı hem asit hem baz özelliği gösterir",
    "Çinkodaki gaz çıkışı sıvının asit olduğunu gösterir, altının etkilenmemesi bunu değiştirmez"
  ],
  dogru: 3,
  hatalar: [
    "Etkilenmeyen maddeye bakıp karar verme: altın gibi bazı metaller asitten etkilenmez; bu, sıvının asit olmadığını göstermez.",
    "Genelleme yapma: sıvı asit olabilir ama asitler yalnızca bazı metallerle tepkimeye girer; altın buna örnektir.",
    "Çift özellik sanma: bir sıvı aynı anda hem asit hem baz olmaz; iki metalin farklı davranması metallerin farklı olmasından kaynaklanır.",
    null
  ],
  aciklama: `Asitler bazı metallerle tepkimeye girip gaz çıkarır; altın gibi soy metaller asitten etkilenmez.
Adım 1: Çinkodan gaz çıkması, sıvının çinkoyla tepkimeye girdiğini, yani asit özelliği taşıdığını düşündürür.
Adım 2: Altının etkilenmemesi, altının asitle tepkimeye girmeyen bir metal olmasından kaynaklanır.
Adım 3: Bu yüzden altındaki değişimsizlik sıvının asit olmadığı anlamına gelmez ve "asitler bütün metallerle tepkimeye girer" denemez.
Sık yapılan hata: Etkilenmeyen bir madde görüp çözeltinin asit olmadığına karar vermek.
Cevap D.`
},
{
  id: "fen-ab-331",
  kazanim: "F.8.4.4.6",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kireç çözücü ürününün etiketinde şu bilgiler yer alıyor: "pH: 1. Cilde ve göze temas ettirmeyiniz. Eldiven ve gözlük kullanınız. Ortamı havalandırınız. Çamaşır suyuyla karıştırmayınız."
**Bu etiket bilgilerine göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Kuvvetli asit özelliğindedir, eldiven ve gözlük cildi ve gözü korumak içindir",
    "Kuvvetli baz özelliğindedir, eldiven ve gözlük cildi ve gözü korumak içindir",
    "Kuvvetli asit özelliğindedir, eldiven ve gözlük yalnızca ellerin kirlenmesini önlemek içindir",
    "Zayıf asit özelliğindedir, havalandırma uyarısı gereksiz bir önlemdir"
  ],
  dogru: 0,
  hatalar: [
    null,
    "pH yönünü ters okuma: pH 1 olan ürün baz değil, kuvvetli asittir; bazların pH değeri 7'den büyüktür.",
    "Uyarının nedenini küçümseme: kuvvetli asit cildi yakar, gözü zedeler; eldiven ve gözlük bu zarardan korur, kir meselesi değildir.",
    "Kuvvetli asidi zayıf sanma: pH 7'den ne kadar uzaksa o kadar kuvvetlidir; pH 1 çok kuvvetli asit demektir ve havalandırma gerekir."
  ],
  aciklama: `pH değeri 0-2 civarında olan ürünler kuvvetli asittir; etiketlerinde cilt, göz ve solunum için uyarılar bulunur.
Adım 1: pH 1, 7'den çok küçüktür; ürün kuvvetli asittir.
Adım 2: Kuvvetli asit cildi yakabilir ve gözü zedeleyebilir; bu yüzden eldiven ve gözlük kullanılır.
Adım 3: Buharı solunum yollarını tahriş edebilir; bu yüzden ortam havalandırılır.
Sağlama: Etiketteki "çamaşır suyuyla karıştırmayınız" uyarısı, asit ve bazın birlikte kullanımının tehlikeli olduğunu hatırlatır.
Cevap A.`
},
{
  id: "fen-ab-332",
  kazanim: "F.8.4.4.7",
  kademe: 3,
  zorluk: 3,
  soru: `Dağ eteğindeki bir kasabada evler kükürt oranı yüksek kömürle ısınıyor. Yıllar içinde kasabadaki mermer çeşmelerin yüzeyi aşınmış, yakındaki gölde canlı sayısı azalmıştır. Belediye, asit yağmurlarına yol açan gazların salımını azaltacak bir uygulama seçecektir.
**Belediyenin sorunu kaynağında azaltmak için seçmesi gereken uygulama aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Yağmurlu günlerde evlerin pencerelerini kapalı tutmak",
    "Mermer çeşmelerin yüzeyini koruyucu boyayla kaplamak",
    "Bacalara kükürt gazını tutan bir filtre takmak",
    "Gölün suyuna düzenli olarak kireç taşı tozu eklemek"
  ],
  dogru: 2,
  hatalar: [
    "Gazı azaltmak yerine yağmurdan kaçma: pencereyi kapatmak yağmurun asitliğini değiştirmez, havaya karışan gazı da azaltmaz.",
    "Sonucu giderme: boya zararı geçici engeller ama gaz salımı sürer; sorun kaynağında çözülmez.",
    null,
    "Zararı gidermeyi önlem sanma: kireç taşı gölün asitliğini azaltır ama havaya karışan gaz salımını durdurmaz; yağmur asidik gelmeye devam eder."
  ],
  aciklama: `Asit yağmurlarının nedeni, fosil yakıtlar yanınca havaya karışan kükürt ve azot oksitleridir; kalıcı çözüm bu gazların havaya karışmasını azaltmaktır.
Adım 1: Bacadaki filtre, kükürt içeren gazı havaya çıkmadan tutar; asit yağmurunun nedeni kaynağında azalır.
Adım 2: Çeşmeleri boyamak ve gölü kireç taşıyla düzeltmek, zarar oluştuktan sonra yapılan düzeltmelerdir; gaz salımı sürer.
Adım 3: Pencereyi kapatmak yağmurun oluşmasını etkilemez.
Sık yapılan hata: Zararı örtmeyi ya da gidermeyi çözüm sanmak.
Cevap C.`
},
{
  id: "fen-ab-333",
  kazanim: "F.8.4.4.4",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, dört sıvının pH değerlerini ölçüp sonuçları pH ölçeği üzerinde gösteriyor. P tuvalet temizleyicisini, R kahveyi, S saf suyu, T kabartma tozlu suyu göstermektedir.
**Bu ölçüme göre aşağıdaki yargılardan hangileri doğrudur?**
I. R, P'den daha kuvvetli asittir.
II. T, kırmızı turnusolu maviye çevirir.
III. Mavi turnusol kâğıdı R'de kırmızıya dönerken S'de rengini korur.`,
  gorsel: `<svg viewBox="0 0 560 140" role="img" aria-label="pH ölçeği: P 1, R 5, S 7, T 8"><line x1="30" y1="75" x2="520" y2="75" stroke="currentColor" stroke-width="2"/><line x1="30" y1="69" x2="30" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="30" y="102" text-anchor="middle" font-size="14" fill="currentColor">0</text><line x1="65" y1="69" x2="65" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="65" y="102" text-anchor="middle" font-size="14" fill="currentColor">1</text><line x1="100" y1="69" x2="100" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="100" y="102" text-anchor="middle" font-size="14" fill="currentColor">2</text><line x1="135" y1="69" x2="135" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="135" y="102" text-anchor="middle" font-size="14" fill="currentColor">3</text><line x1="170" y1="69" x2="170" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="170" y="102" text-anchor="middle" font-size="14" fill="currentColor">4</text><line x1="205" y1="69" x2="205" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="205" y="102" text-anchor="middle" font-size="14" fill="currentColor">5</text><line x1="240" y1="69" x2="240" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="240" y="102" text-anchor="middle" font-size="14" fill="currentColor">6</text><line x1="275" y1="69" x2="275" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="275" y="102" text-anchor="middle" font-size="14" fill="currentColor">7</text><line x1="310" y1="69" x2="310" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="310" y="102" text-anchor="middle" font-size="14" fill="currentColor">8</text><line x1="345" y1="69" x2="345" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="345" y="102" text-anchor="middle" font-size="14" fill="currentColor">9</text><line x1="380" y1="69" x2="380" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="380" y="102" text-anchor="middle" font-size="14" fill="currentColor">10</text><line x1="415" y1="69" x2="415" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="415" y="102" text-anchor="middle" font-size="14" fill="currentColor">11</text><line x1="450" y1="69" x2="450" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="450" y="102" text-anchor="middle" font-size="14" fill="currentColor">12</text><line x1="485" y1="69" x2="485" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="485" y="102" text-anchor="middle" font-size="14" fill="currentColor">13</text><line x1="520" y1="69" x2="520" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="520" y="102" text-anchor="middle" font-size="14" fill="currentColor">14</text><circle cx="65" cy="75" r="7" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="65" y="52" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">P</text><circle cx="205" cy="75" r="7" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="205" y="52" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">R</text><circle cx="275" cy="75" r="7" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="275" y="52" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">S</text><circle cx="310" cy="75" r="7" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="310" y="52" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">T</text><text x="30" y="128" font-size="14" fill="currentColor">asidik</text><text x="275" y="128" text-anchor="middle" font-size="14" fill="currentColor">nötr</text><text x="520" y="128" text-anchor="end" font-size="14" fill="currentColor">bazik</text><text x="534" y="80" font-size="14" fill="currentColor">pH</text></svg>`,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 2,
  hatalar: [
    "pH yönünü ters okuma: pH 1 olan P, pH 5 olan R'den daha kuvvetli asittir; I yanlıştır.",
    "Eksik değerlendirme: II doğrudur ama R asit, S nötr olduğu için III de doğrudur.",
    null,
    "I'i doğru sayma: pH küçüldükçe asitlik artar, bu yüzden en kuvvetli asit P'dir, R değil."
  ],
  aciklama: `pH ölçeğinde 7 nötr, 7'den küçük değerler asidik, büyük değerler bazik çözeltileri gösterir.
Adım 1: P 1, R 5'tir. pH'ı küçük olan P daha kuvvetli asittir; R, P'den daha kuvvetli değildir; I yanlış.
Adım 2: T'nin pH değeri 8'dir, bazik özelliktedir ve kırmızı turnusolu maviye çevirir; II doğru.
Adım 3: R asittir, mavi turnusolu kırmızıya çevirir; S nötrdür (7), mavi turnusol rengini korur; III doğru.
Sağlama: Doğru olan yargılar II ve III'tür.
Cevap C.`
},
{
  id: "fen-ab-334",
  kazanim: "F.8.4.4.2",
  kademe: 3,
  zorluk: 3,
  soru: `Fen kulübü öğrencileri evden getirdikleri sıvıları kırmızı ve mavi turnusol kâğıtlarıyla test edecek. Deneyden önce her öğrenci bir tahmin kartı hazırlıyor. Kartlarda ürünün adı, ardından mavi turnusol ve kırmızı turnusol kâğıtlarının davranışı yazıyor.
**Hazırlanan kartlardan hangisi doğru bir tahmin içerir?**`,
  gorsel: null,
  secenekler: [
    "Yoğurt: kırmızı turnusolu maviye çevirir, mavi turnusolu değiştirmez",
    "Kabartma tozlu su: kırmızı turnusolu maviye çevirir, mavi turnusolu değiştirmez",
    "Sabunlu su: mavi turnusolu kırmızıya çevirir, kırmızı turnusolu değiştirmez",
    "Sirke: kırmızı turnusolu maviye çevirir, mavi turnusolu kırmızıya çevirir"
  ],
  dogru: 1,
  hatalar: [
    "Asidi baz sanma: yoğurt ekşidir ve asittir; mavi turnusolu kırmızıya çevirir, kırmızı turnusolu değiştirmez.",
    null,
    "Bazı asit sanma: sabunlu su bazdır; kırmızı turnusolu maviye çevirir, mavi turnusolu değiştirmez.",
    "Çift özellik sanma: bir sıvı iki turnusolu aynı anda değiştiremez; sirke asittir ve yalnızca mavi turnusolu kırmızıya çevirir."
  ],
  aciklama: `Asitler yalnızca mavi turnusolu kırmızıya, bazlar yalnızca kırmızı turnusolu maviye çevirir.
Adım 1: Yoğurt ve sirke asittir; mavi turnusol kırmızıya döner, kırmızı turnusol değişmez.
Adım 2: Kabartma tozlu su ve sabunlu su bazdır; kırmızı turnusol maviye döner, mavi turnusol değişmez.
Adım 3: Kartlardan yalnızca B tüm kuralı doğru yazmıştır; diğerlerinde ya tür ya da turnusol yönü ters verilmiştir.
Sık yapılan hata: Bir sıvının iki turnusolu birden değiştirdiğini düşünmek.
Cevap B.`
},
{
  id: "fen-ab-335",
  kazanim: "F.8.4.4.3",
  kademe: 3,
  zorluk: 3,
  soru: `Elif, pH kâğıdının farklı pH değerlerinde aldığı renkleri tabloya yazıyor. Daha sonra dört sıvıya pH kâğıdı batırıyor: K sıvısında turuncu, L sıvısında yeşil, M sıvısında mavi, N sıvısında kırmızı renk görüyor.
**Bu sonuçlara göre aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>pH aralığı</th><th>pH kâğıdının rengi</th></tr><tr><td>0 - 2</td><td>Kırmızı</td></tr><tr><td>3 - 4</td><td>Turuncu</td></tr><tr><td>5 - 6</td><td>Sarı</td></tr><tr><td>7</td><td>Yeşil</td></tr><tr><td>8 - 10</td><td>Mavi</td></tr><tr><td>11 - 14</td><td>Mor</td></tr></table>`,
  secenekler: [
    "N, K'den daha kuvvetli asittir; L nötrdür; M baziktir",
    "K, N'den daha kuvvetli asittir; L nötrdür; M baziktir",
    "N, K'den daha kuvvetli asittir; L asidiktir; M baziktir",
    "N, K'den daha kuvvetli asittir; L nötrdür; M nötrdür"
  ],
  dogru: 0,
  hatalar: [
    null,
    "pH yönünü ters okuma: N'nin pH aralığı 0-2, K'nin aralığı 3-4'tür; küçük pH daha kuvvetli asit demektir.",
    "Nötrü asit sanma: L'de yeşil renk pH 7'yi, yani nötr çözeltiyi gösterir.",
    "Bazı nötr sanma: M'de mavi renk 8-10 aralığını, yani bazik çözeltiyi gösterir."
  ],
  aciklama: `pH kâğıdı bir ayraçtır; rengi tablodaki pH aralığıyla eşleştirilerek çözeltinin türü bulunur.
Adım 1: N kırmızı, yani pH 0-2; K turuncu, yani pH 3-4. N'nin pH'ı daha küçük olduğundan N, K'den daha kuvvetli asittir.
Adım 2: L yeşil, yani pH 7; L nötrdür.
Adım 3: M mavi, yani pH 8-10; M baziktir.
Sağlama: Üç yargının üçü de ancak A şıkkında doğru verilmiştir.
Cevap A.`
},
{
  id: "fen-ab-336",
  kazanim: "F.8.4.4.1",
  kademe: 3,
  zorluk: 3,
  soru: `Fen öğretmeni, asit ve bazların genel özellikleriyle ilgili öğrencilerin hazırladığı dört bilgi kartını okuyor ve kartlardan birinde bilimsel bir hata bulunduğunu söylüyor.
**Aşağıdaki kartlardan hangisinde yer alan yargı __yanlıştır__?**`,
  gorsel: null,
  secenekler: [
    "Mavi turnusolu kırmızıya çeviren sulu çözelti asit özelliği gösterir",
    "Ele kayganlık hissi veren sulu çözeltilerin pH değeri 7'den büyüktür",
    "Asitlerin ve bazların sulu çözeltileri elektrik akımını iletir",
    "Sulu çözeltisi elektrik akımını ileten her madde asit özelliği gösterir"
  ],
  dogru: 3,
  hatalar: [
    "Doğru yargıyı yanlış sanma: asitler mavi turnusolu kırmızıya çevirir; bu kart doğrudur.",
    "Doğru yargıyı yanlış sanma: kayganlık bazların özelliğidir ve bazların pH değeri 7'den büyüktür; bu kart doğrudur.",
    "Doğru yargıyı yanlış sanma: hem asitlerin hem bazların sulu çözeltisi akımı iletir; bu kart doğrudur.",
    null
  ],
  aciklama: `Elektrik akımını iletmek asitlere de bazlara da ortak bir özelliktir; bu yüzden iletkenlik bir çözeltinin asit olduğunu kanıtlamaz.
Adım 1: Mavi turnusolu kırmızıya çeviren çözelti asittir; birinci kart doğru.
Adım 2: Kayganlık veren çözelti bazdır ve pH değeri 7'den büyüktür; ikinci kart doğru.
Adım 3: Asitler de bazlar da akımı iletir; üçüncü kart doğru. Dördüncü kart ise bazları dışarıda bıraktığı için yanlıştır.
Sık yapılan hata: İletkenliği asidin ayırt edici özelliği sanmak. Asiti bazdan turnusol ya da pH ayırır.
Cevap D.`
},
{
  id: "fen-ab-337",
  kazanim: "F.8.4.4.5",
  kademe: 3,
  zorluk: 3,
  soru: `Ayşe, yağ ve yemek artıklarıyla kirlenmiş fırın camını temizlemek için pH değeri 13 olan bir fırın temizleyiciyle pH değeri 3 olan sirkenin etkisini karşılaştırıyor. Fırın temizleyici sürülen bölgedeki yağ birikintisi çözülüyor; sirke sürülen bölgede ise belirgin bir değişiklik olmuyor.
**Bu gözleme göre aşağıdaki yargılardan hangileri doğrudur?**
I. Sirke baz olduğu için yağı çözememiştir.
II. Fırın temizleyicinin pH değeri 7'den küçük olduğu için yağı çözmüştür.
III. Bazlar yağları çözebildiğinden fırın temizleyici yağlı yüzeylerde kullanılır.`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "Asidi baz sanma: pH 3 olan sirke asittir; yağı çözememesi onun baz olmamasındandır.",
    null,
    "Yönleri ters bağlama: pH 13 olan fırın temizleyici bazdır ve pH değeri 7'den büyüktür; sirke de baz değil asittir.",
    "II'yi doğru sayma: fırın temizleyicinin pH değeri 13, yani 7'den büyüktür; yağı çözme özelliği bazlığından gelir."
  ],
  aciklama: `Bazlar yağları çözer; bu yüzden fırın, ızgara ve gider temizleyicilerinin çoğu baz özelliklidir.
Adım 1: Sirkenin pH değeri 3'tür; asittir. Yağı çözememesi onun baz olmadığındandır; I yanlış.
Adım 2: Fırın temizleyicinin pH değeri 13'tür, 7'den büyüktür; II yanlış.
Adım 3: Bazlar yağları çözdüğü için fırın temizleyici yağlı yüzeylerde kullanılır; III doğru.
Sağlama: Yağlı kirde baz özellikli temizleyici seçilir; ayrıca pH'ı 13 olduğu için eldivenle kullanılmalıdır.
Cevap B.`
},
{
  id: "fen-ab-338",
  kazanim: "F.8.4.4.4",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrencinin elinde yalnızca kırmızı turnusol kâğıdı var. K, L, M ve N çözeltilerinin pH değerleri tabloda verilmiştir. Öğrenci aynı kâğıdın iki çözeltideki davranışını karşılaştırarak o iki çözeltiyi birbirinden ayırmak istiyor.
**Aşağıdaki çözelti çiftlerinden hangisini yalnızca bu kâğıtla birbirinden ayırt edebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Çözelti</th><th>K</th><th>L</th><th>M</th><th>N</th></tr><tr><td>pH değeri</td><td>2</td><td>5</td><td>7</td><td>11</td></tr></table>`,
  secenekler: [
    "M ve N",
    "K ve L",
    "K ve M",
    "L ve M"
  ],
  dogru: 0,
  hatalar: [
    null,
    "pH farkını ayraç farkı sanma: K ve L asittir; kırmızı turnusol ikisinde de rengini korur, pH değerleri farklı olsa da bu çift ayırt edilemez.",
    "Asit ile nötrü ayrılabilir sanma: K asit, M nötrdür; kırmızı turnusol ikisinde de değişmez, bu çift ayırt edilemez.",
    "Asit ile nötrü ayrılabilir sanma: L asit, M nötrdür; kırmızı turnusol ikisinde de değişmez, bu çift ayırt edilemez."
  ],
  aciklama: `Kırmızı turnusol yalnızca baz ortamda maviye döner; asit ve nötr çözeltide rengini korur. Bir çifti ayırt edebilmek için kâğıdın iki çözeltide farklı davranması gerekir.
Adım 1: K (pH 2) ve L (pH 5) asittir, M (pH 7) nötrdür; üçünde de kırmızı turnusol kırmızı kalır.
Adım 2: N (pH 11) baziktir; kırmızı turnusol maviye döner.
Adım 3: Kâğıdın farklı davrandığı tek çift, N'nin bulunduğu çifttir: M ve N. Diğer çiftlerin ikisinde de kâğıt aynı kalır.
Sık yapılan hata: pH değerleri farklı diye çözeltilerin ayraçla da farklı sonuç vereceğini düşünmek.
Cevap A.`
},
{
  id: "fen-ab-339",
  kazanim: "F.8.4.4.7",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kentin yakınındaki çam ormanında ağaçların yaprakları sararıp dökülmüş, orman toprağı da zamanla asitleşmiştir. Kentte kömürlü ısınma yaygındır ve taşıt trafiği yoğundur. Kentin çevre komisyonu, hazırladığı bilgilendirme notundaki üç cümleyi değerlendiriyor.
**Bu cümlelerden hangileri doğrudur?**
I. Yağmur suyunun pH değeri 7'den büyük olduğunda asit yağmuru oluşur.
II. Taşıt egzozundan çıkan azot oksitleri asit yağmurlarına katkı yapar.
III. Ormandaki zayıflama, asit yağmurlarının bir sonucu olabilir.`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  dogru: 3,
  hatalar: [
    "pH yönünü ters okuma: asit yağmurunun pH değeri 7'den küçüktür.",
    "Eksik değerlendirme: III doğrudur ama egzozdan çıkan azot oksitleri de asit yağmuruna yol açtığı için II de doğrudur.",
    "I'i doğru sayma: asit yağmuru 7'den büyük pH ile değil, 7'den küçük pH ile tanımlanır.",
    null
  ],
  aciklama: `Asit yağmurları, havaya karışan kükürt ve azot oksitlerinin yağmur suyuyla birleşmesiyle oluşur ve pH değeri 7'den küçük olan yağmurlardır.
Adım 1: Asit yağmurunun pH değeri 7'den küçüktür; I yanlış.
Adım 2: Taşıt egzozu azot oksitleri verir; bu gazlar asit yağmuruna katkı yapar; II doğru.
Adım 3: Asit yağmurları ağaçları zayıflatır ve toprağı asitleştirir; III doğru.
Sağlama: Doğru olan yargılar II ve III'tür.
Cevap D.`
},
{
  id: "fen-ab-340",
  kazanim: "F.8.4.4.6",
  kademe: 3,
  zorluk: 3,
  soru: `Bir sitenin yönetimi, yüzme havuzunun kenarlarını temizlemek için pH değeri 1 olan bir temizleyici alıyor. Temizlik görevlisine verilecek yazılı talimat için üç öneri hazırlanıyor.
**Bu önerilerden hangileri doğrudur?**
I. Ürünü kullanmadan önce etiketi okunmalı, eldiven ve gözlük takılmalıdır.
II. Temizlik hızlansın diye ürün çamaşır suyuyla birlikte kullanılmalıdır.
III. Artan ürün, kendi etiketli kabında ve çocukların ulaşamayacağı bir yerde saklanmalıdır.`,
  gorsel: null,
  secenekler: [
    "Yalnız II",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  dogru: 2,
  hatalar: [
    "Tehlikeli davranışı doğru sayma: kuvvetli asit ile çamaşır suyu karışınca zehirli gaz çıkabilir; ikisi birlikte kullanılmaz.",
    "II'yi doğru sayma ve III'ü atlama: karıştırmak tehlikelidir; saklama önerisi ise doğrudur.",
    null,
    "I'i atlama: pH 1 olan ürün kuvvetli asittir; etiketi okumak ve eldiven, gözlük takmak gerekir."
  ],
  aciklama: `Kuvvetli asit ya da baz içeren temizlik ürünleri etiketine göre kullanılmalı, korunma araçlarıyla ele alınmalı ve güvenle saklanmalıdır.
Adım 1: pH 1 olan ürün kuvvetli asittir; etiket okunur, eldiven ve gözlük takılır; I doğru.
Adım 2: Asitle çamaşır suyu karıştırılmaz; zehirli gaz çıkabilir. II yanlış.
Adım 3: Ürün başka bir kaba aktarılmaz, kendi etiketli kabında çocukların ulaşamayacağı yerde saklanır; III doğru.
Sağlama: I ve III güvenli davranışları, II tehlikeli davranışı anlatıyor.
Cevap C.`
},
{
  id: "fen-ab-341",
  kazanim: "F.8.4.4.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, pil ve ampulden oluşan bir devrenin arasına sırayla dört çözeltiyi koyuyor. Çözeltilerin pH değerleri ve ampulün durumu tabloda verilmiştir. Öğrenci elektriksel iletkenlik deneyinden çözeltilerin türüyle ilgili bir sonuç çıkarmak istiyor.
**Bu tabloya göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Çözelti</th><th>pH değeri</th><th>Ampulün durumu</th></tr><tr><td>K</td><td>2</td><td>Yandı</td></tr><tr><td>L</td><td>6</td><td>Yandı</td></tr><tr><td>M</td><td>8</td><td>Yandı</td></tr><tr><td>N</td><td>13</td><td>Yandı</td></tr></table>`,
  secenekler: ["Ampul yandığı için dört çözeltinin dördü de asit özelliği gösterir","Ampulün yanması türü göstermez; tür pH ya da ayraçlarla belirlenir","K ve L ampulü yaktırdığı için M ve N ampulü yaktırmamış olmalıdır","M ve N baz olduğu için ampulü K ve L'den daha parlak yaktırmıştır"],
  dogru: 1,
  hatalar: ["İletkenliği asitliğin işareti sanma: bazlar da akımı iletir; M ve N baziktir.",null,"İletkenliği yalnızca asitlere bağlama: bazlar da ampulü yaktırır; tabloda M ve N için de ampul yanmıştır.","Veride olmayan çıkarım: tabloda ampulün parlaklığı karşılaştırılmamıştır; yalnızca yanıp yanmadığı verilmiştir."],
  aciklama: `Asitlerin de bazların da sulu çözeltisi elektrik akımını iletir; bu yüzden iletkenlik, çözeltinin asit mi baz mı olduğunu belirlemez.
Adım 1: Ampul dört çözeltide de yanmıştır; K (2) ve L (6) asit, M (8) ve N (13) bazdır.
Adım 2: Hem asitlerde hem bazlarda ampulün yanması, iletkenliğin asiti bazdan ayırmadığını gösterir.
Adım 3: Türü belirlemek için pH değerine ya da turnusol gibi bir ayraca bakılır. Parlaklık tabloda verilmediği için D yorumu veriye dayanmaz.
Cevap B.`
},
{
  id: "fen-ab-342",
  kazanim: "F.8.4.4.3",
  kademe: 3,
  zorluk: 3,
  soru: `Etiketleri düşmüş üç bardakta limon suyu, saf su ve sabunlu su bulunuyor. Öğrenci her bardaktan aldığı örneğe yalnızca bir çeşit ayraç uygulayacak ve renklere bakarak üç sıvıyı da birbirinden ayırmak istiyor.
**Öğrenci hangi ayracı seçerse bu amacına ulaşır?**`,
  gorsel: null,
  secenekler: [
    "Mavi turnusol; asitte kırmızıya döner, nötrde ve bazda mavi kalır",
    "Zerdeçal; asitte ve nötrde sarı kalır, bazda kırmızımsı kahverengi olur",
    "Kırmızı lahana suyu; asitte kırmızı, nötrde mor, bazda mavimsi yeşil olur",
    "Kırmızı turnusol; asitte ve nötrde kırmızı kalır, bazda maviye döner"
  ],
  dogru: 2,
  hatalar: [
    "Yetersiz ayraç: mavi turnusol yalnızca asidi ayırır; nötr ve baz aynı renkte kaldığından saf su ile sabunlu su ayırt edilemez.",
    "Yetersiz ayraç: zerdeçal yalnızca bazı ayırır; asit ve nötr aynı sarı renktedir, limon suyu ile saf su ayırt edilemez.",
    null,
    "Yetersiz ayraç: kırmızı turnusol yalnızca bazı ayırır; asit ve nötr aynı kırmızı renktedir, limon suyu ile saf su ayırt edilemez."
  ],
  aciklama: `Asit, nötr ve bazı tek ayraçla ayırmak için üç tür için üç ayrı renk veren bir ayraç gerekir.
Adım 1: Seçeneklerdeki ayraçların her birinin üç türdeki rengine bak. Gerekli olan, asit, nötr ve baz için birbirinden farklı üç renk veren ayraçtır.
Adım 2: Turnusol kâğıtları ve zerdeçal üç türün ikisini aynı renkte bırakır: mavi turnusolda nötr ve baz, zerdeçalda ve kırmızı turnusolda asit ve nötr aynıdır.
Adım 3: Kırmızı lahana suyu asitte kırmızı, nötrde mor, bazda mavimsi yeşil olur; limon suyu, saf su ve sabunlu su üç ayrı renkle ayrılır.
Sağlama: Dört ayraçtan yalnızca lahana suyunda üç ayrı renk vardır.
Cevap C.`
},
{
  id: "fen-ab-343",
  kazanim: "F.8.4.4.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir apartmanın mermer basamaklarındaki lekeleri çıkarmak isteyen görevli, pH değeri 2 olan bir temizleyici kullanıyor. Basamakların parlak yüzeyi matlaşıyor ve yüzeyde köpürme gözleniyor. Bir komşu, temizliğin pH değeri 10 olan sabunlu suyla yapılmasını öneriyor.
**Basamakların matlaşmasının nedeni ve doğru çözüm aşağıdakilerden hangisinde verilmiştir?**`,
  gorsel: null,
  secenekler: [
    "Temizleyici asit olduğu için mermeri aşındırmıştır, pH değeri 7'den büyük bir temizleyici seçilmelidir",
    "Temizleyici baz olduğu için mermeri aşındırmıştır, pH değeri 7'den küçük bir temizleyici seçilmelidir",
    "Temizleyici asit olduğu için mermeri aşındırmıştır, pH değeri 1'e yakın daha kuvvetli bir temizleyici seçilmelidir",
    "Temizleyici nötr olduğu için mermeri aşındırmamıştır, matlaşma yalnızca kullanılan suyun etkisidir"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Asidi baz sanma: pH 2 olan ürün asittir; mermeri aşındıran asitlerdir, bazlar aşındırmaz.",
    "Çözümü ters seçme: daha kuvvetli asit mermere daha çok zarar verir; çözüm mermeri aşındırmayan baz özellikli ürün seçmektir.",
    "Nötr sanma: pH 2 olan ürün nötr değildir; köpürme asit–mermer etkileşiminin işaretidir."
  ],
  aciklama: `Asitler mermeri köpürterek aşındırır; mermer yüzeyleri temizlerken asit içeren ürünlerden kaçınılır.
Adım 1: Temizleyicinin pH değeri 2'dir, asittir. Köpürme ve matlaşma mermerin asitten etkilendiğini gösterir.
Adım 2: Sabunlu su bazdır (pH 10) ve mermeri aşındırmaz; böyle bir temizleyici mermer yüzeyde güvenle kullanılır.
Adım 3: Daha kuvvetli asit seçmek aşınmayı artırır, nötr ya da baz söylemek ise veriye uymaz.
Sık yapılan hata: Köpürmeyi temizliğin etkisi sanmak.
Cevap A.`
},
{
  id: "fen-ab-344",
  kazanim: "F.8.4.4.4",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, beş sıvının pH değerlerini ölçüp sonuçları aşağıdaki pH ölçeği üzerinde gösteriyor. Daha sonra her sıvıdan alınan örneklere önce mavi, sonra kırmızı turnusol kâğıdı batıracak.
**Mavi turnusol kâğıdını kırmızıya çeviren sıvıların sayısı ile kırmızı turnusol kâğıdını maviye çeviren sıvıların sayısı sırasıyla aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 560 140" role="img" aria-label="pH ölçeği: U 2, V 6, Y 7, Z 10, W 13"><line x1="30" y1="75" x2="520" y2="75" stroke="currentColor" stroke-width="2"/><line x1="30" y1="69" x2="30" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="30" y="102" text-anchor="middle" font-size="14" fill="currentColor">0</text><line x1="65" y1="69" x2="65" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="65" y="102" text-anchor="middle" font-size="14" fill="currentColor">1</text><line x1="100" y1="69" x2="100" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="100" y="102" text-anchor="middle" font-size="14" fill="currentColor">2</text><line x1="135" y1="69" x2="135" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="135" y="102" text-anchor="middle" font-size="14" fill="currentColor">3</text><line x1="170" y1="69" x2="170" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="170" y="102" text-anchor="middle" font-size="14" fill="currentColor">4</text><line x1="205" y1="69" x2="205" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="205" y="102" text-anchor="middle" font-size="14" fill="currentColor">5</text><line x1="240" y1="69" x2="240" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="240" y="102" text-anchor="middle" font-size="14" fill="currentColor">6</text><line x1="275" y1="69" x2="275" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="275" y="102" text-anchor="middle" font-size="14" fill="currentColor">7</text><line x1="310" y1="69" x2="310" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="310" y="102" text-anchor="middle" font-size="14" fill="currentColor">8</text><line x1="345" y1="69" x2="345" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="345" y="102" text-anchor="middle" font-size="14" fill="currentColor">9</text><line x1="380" y1="69" x2="380" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="380" y="102" text-anchor="middle" font-size="14" fill="currentColor">10</text><line x1="415" y1="69" x2="415" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="415" y="102" text-anchor="middle" font-size="14" fill="currentColor">11</text><line x1="450" y1="69" x2="450" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="450" y="102" text-anchor="middle" font-size="14" fill="currentColor">12</text><line x1="485" y1="69" x2="485" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="485" y="102" text-anchor="middle" font-size="14" fill="currentColor">13</text><line x1="520" y1="69" x2="520" y2="81" stroke="currentColor" stroke-width="1.5"/><text x="520" y="102" text-anchor="middle" font-size="14" fill="currentColor">14</text><circle cx="100" cy="75" r="7" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="100" y="52" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">U</text><circle cx="240" cy="75" r="7" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="240" y="52" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">V</text><circle cx="275" cy="75" r="7" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="275" y="52" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">Y</text><circle cx="380" cy="75" r="7" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="380" y="52" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">Z</text><circle cx="485" cy="75" r="7" fill="var(--vurgu)" stroke="currentColor" stroke-width="1.5"/><text x="485" y="52" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">W</text><text x="30" y="128" font-size="14" fill="currentColor">asidik</text><text x="275" y="128" text-anchor="middle" font-size="14" fill="currentColor">nötr</text><text x="520" y="128" text-anchor="end" font-size="14" fill="currentColor">bazik</text><text x="534" y="80" font-size="14" fill="currentColor">pH</text></svg>`,
  secenekler: [
    "1 ve 2",
    "3 ve 2",
    "2 ve 3",
    "2 ve 2"
  ],
  dogru: 3,
  hatalar: [
    "Zayıf asidi atlama: V'nin pH değeri 6'dır; 7'den küçük olduğu için mavi turnusolu kırmızıya çevirir.",
    "Nötrü asit sayma: Y'nin pH değeri 7'dir; nötrdür ve mavi turnusolun rengini değiştirmez.",
    "Nötrü baz sayma: Y nötrdür; kırmızı turnusolu maviye çevirmez.",
    null
  ],
  aciklama: `Mavi turnusolu yalnızca asitler kırmızıya, kırmızı turnusolu yalnızca bazlar maviye çevirir; nötr çözelti ikisini de değiştirmez.
Adım 1: pH'ı 7'den küçük olan U (2) ve V (6) asittir; mavi turnusolu kırmızıya çeviren 2 sıvı vardır.
Adım 2: pH'ı 7'den büyük olan Z (10) ve W (13) bazdır; kırmızı turnusolu maviye çeviren 2 sıvı vardır.
Adım 3: Y'nin pH değeri 7'dir, nötrdür; hiçbir kâğıdın rengini değiştirmez.
Sağlama: 2 + 2 + 1 = 5 sıvı eder.
Cevap D.`
},
{
  id: "fen-ab-345",
  kazanim: "F.8.4.4.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci evden getirdiği altı ürünün sulu çözeltilerini, asit, baz ve nötr olmak üzere üç gruba ayırıyor ve sonucu tabloya yazıyor.
**Bu sınıflamaya göre aşağıdaki yargılardan hangileri doğrudur?**
I. 1. gruptaki sıvıların pH değerleri 7'den küçüktür.
II. 2. gruptaki iki madde de zerdeçalı kırmızımsı kahverengiye çevirir.
III. 3. gruptaki sıvılar mavi ve kırmızı turnusolun rengini değiştirmez.`,
  gorsel: `<table class="tablo"><tr><th>Grup</th><th>Tür</th><th>Ürünler</th></tr><tr><td>1. grup</td><td>Asit</td><td>Ayran, kola</td></tr><tr><td>2. grup</td><td>Baz</td><td>Diş macunu, kabartma tozu</td></tr><tr><td>3. grup</td><td>Nötr</td><td>Saf su, sofra tuzu çözeltisi</td></tr></table>`,
  secenekler: [
    "Yalnız I",
    "I ve II",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 3,
  hatalar: [
    "Eksik değerlendirme: bazların zerdeçalı kahverengiye çevirmesi ve nötrlerin turnusolu değiştirmemesi de doğrudur.",
    "III'ü atlama: nötr çözeltiler iki turnusolun da rengini değiştirmez; III de doğrudur.",
    "I'i atlama: asit grubundaki sıvıların pH değeri 7'den küçüktür; I de doğrudur.",
    null
  ],
  aciklama: `Asitlerin pH değeri 7'den küçük, bazların büyük, nötrlerin 7'dir; ayraçlar da bu türlere göre renk verir.
Adım 1: Ayran ve kola asittir; pH değerleri 7'den küçüktür. I doğru.
Adım 2: Diş macunu ve kabartma tozu bazdır; baz ortamda zerdeçal kırmızımsı kahverengi olur. II doğru.
Adım 3: Saf su ve sofra tuzu çözeltisi nötrdür; ikisi de turnusolların rengini değiştirmez. III doğru.
Sağlama: Üç yargı da gruplandırmayla uyumludur.
Cevap D.`
},
{
  id: "fen-ab-346",
  kazanim: "F.8.4.4.3",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, dört sıvının pH değerlerini ölçüyor. Ardından her sıvıdan alınan örneklere hem mavi turnusol kâğıdı hem de zerdeçal kâğıdı uygulayarak ikisinin sonucuna birlikte bakıyor. Zerdeçal kâğıdı asit ve nötr ortamda sarı kalır, baz ortamda kırmızımsı kahverengi olur.
**Bu iki ayraçla aşağıdaki sıvı çiftlerinden hangisi birbirinden __ayırt edilemez__?**`,
  gorsel: `<table class="tablo"><tr><th>Sıvı</th><th>Sirke</th><th>Süt</th><th>Saf su</th><th>Sabunlu su</th></tr><tr><td>pH değeri</td><td>3</td><td>6</td><td>7</td><td>10</td></tr></table>`,
  secenekler: [
    "Sirke ve saf su",
    "Sirke ve süt",
    "Süt ve saf su",
    "Saf su ve sabunlu su"
  ],
  dogru: 1,
  hatalar: [
    "Ayraç sonuçlarını karıştırma: sirke mavi turnusolu kırmızıya çevirir, saf su çevirmez; bu çift ayırt edilir.",
    null,
    "Ayraç sonuçlarını karıştırma: süt mavi turnusolu kırmızıya çevirir, saf su çevirmez; bu çift ayırt edilir.",
    "Zerdeçalı yok sayma: sabunlu su zerdeçalı kırmızımsı kahverengi yapar, saf su sarı bırakır; bu çift ayırt edilir."
  ],
  aciklama: `İki sıvı iki ayraçta da aynı sonucu veriyorsa bu ayraçlarla birbirinden ayırt edilemez.
Adım 1: Sirke (3) ve süt (6) asittir; mavi turnusol ikisinde de kırmızıya döner, zerdeçal ikisinde de sarı kalır.
Adım 2: Saf su (7) nötrdür; mavi turnusol mavi kalır, zerdeçal sarı kalır; asitlerden mavi turnusolla ayrılır.
Adım 3: Sabunlu su (10) bazdır; zerdeçal kahverengi olur ve diğerlerinden ayrılır.
Sağlama: İki ayraçta da aynı sonucu veren tek çift sirke ile süttür.
Cevap B.`
},
{
  id: "fen-ab-347",
  kazanim: "F.8.4.4.6",
  kademe: 3,
  zorluk: 3,
  soru: `Bir sitenin yeni temizlik görevlisi için hazırlanan güvenlik kartında, kuvvetli asit ya da baz içeren temizlik ürünleriyle ilgili dört talimat ve her birinin gerekçesi yazıyor. Site yöneticisi, yalnızca bir talimatın gerekçesinin doğru olduğunu söylüyor.
**Hangi talimatın gerekçesi doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Ortam havalandırılmalıdır, çünkü ürünün buharı solunum yollarını tahriş edebilir",
    "Seyreltilmiş ürünle çalışırken eldiven gerekmez, çünkü sulu çözeltiler cilde zarar vermez",
    "Baz özellikli ürün eldivensiz kullanılabilir, çünkü bazlar asitler gibi cildi yakmaz",
    "Kapı ve pencereler kapatılmalıdır, çünkü koku yayılırsa diğer daireler rahatsız olur"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Sulu çözeltiyi zararsız sanma: seyreltilmiş de olsa kuvvetli asit ya da baz çözeltisi cildi tahriş edebilir; eldiven yine gerekir.",
    "Bazı zararsız sanma: kuvvetli bazlar da cildi yakar ve göze zarar verir; baz özellikli ürün de eldivenle kullanılır.",
    "Havalandırmanın amacını yanlış bilme: pencere açmak buharın birikmesini önler; kapalı ortamda buhar solunum yollarına zarar verir."
  ],
  aciklama: `Kuvvetli asit ya da baz içeren temizlik ürünleri eldivenle ve havalandırılan ortamda kullanılır; çünkü hem cilde hem solunum yollarına zarar verebilirler.
Adım 1: Ürünlerin buharı solunum yollarını tahriş edebilir; bu yüzden kapı ve pencereler açılarak ortam havalandırılır. Birinci gerekçe doğrudur.
Adım 2: Ürün seyreltilmiş de olsa, ürün baz da olsa kuvvetli asit ya da baz çözeltileri cildi tahriş eder; eldiven kullanılır. İkinci ve üçüncü gerekçeler yanlıştır.
Adım 3: Kapı ve pencereleri kapatmak buharı odada biriktirir; koku yayılmasını önlemek, solunum güvenliğinden önemli değildir.
Sık yapılan hata: Sulu çözeltilerin ya da bazların zararsız olduğunu düşünmek.
Cevap A.`
},
{
  id: "fen-ab-348",
  kazanim: "F.8.4.4.7",
  kademe: 3,
  zorluk: 3,
  soru: `Sanayi bölgesindeki bir ilçede yağmur suyunun pH değeri 4 olarak ölçülüyor. Bölgedeki tarım arazilerinin toprağı da asitleşmiş durumda. İlçe belediyesi, asit yağmurlarıyla mücadele için dört farklı önlemi tartışıyor. Önlemler iki gruba ayrılıyor: kaynağında azaltanlar ve oluşan zararı giderenler.
**Aşağıdaki önlemlerden hangisi asit yağmurlarını kaynağında __azaltmaz__, oluşan zararı gidermeye yöneliktir?**`,
  gorsel: null,
  secenekler: [
    "Santral bacasına gaz tutucu filtre takılması",
    "Özel araç yerine toplu taşıma kullanılması",
    "Asitleşen tarım arazisine kireç katılması",
    "Binalarda ısı yalıtımı yapılarak yakıt tüketiminin azaltılması"
  ],
  dogru: 2,
  hatalar: [
    "Kaynağında önlemi zarar giderme sanma: filtre kükürt ve azot oksitlerinin havaya karışmasını azaltır.",
    "Kaynağında önlemi zarar giderme sanma: toplu taşıma egzozdan çıkan azot oksitlerini azaltır.",
    null,
    "Kaynağında önlemi zarar giderme sanma: yalıtım yakıt tüketimini ve dolayısıyla gaz salımını azaltır."
  ],
  aciklama: `Gaz salımını azaltmak sorunu kaynağında önler; asitleşen toprağa kireç katmak ise zarar oluştuktan sonra yapılan düzeltmedir.
Adım 1: Filtre, toplu taşıma ve yalıtım, havaya karışan kükürt ve azot oksitlerini azaltır; nedeni ortadan kaldırmaya çalışır.
Adım 2: Kireç baz özellikli bir maddedir ve toprağın asitliğini azaltır; ama gazların salımını durdurmaz.
Sık yapılan hata: Toprağı düzeltmeyi sorunun çözümü sanmak. Gaz salımı sürerse yağmur asidik gelmeye devam eder.
Cevap C.`
},
{
  id: "fen-ab-349",
  kazanim: "F.8.4.4.2",
  kademe: 3,
  zorluk: 3,
  soru: `Okul kantininde bir öğrenci, satılan sekiz ürünü asit, baz ve nötr özelliğine göre sınıflandırmak istiyor. Ürünlerin sulu çözeltileri hazırlanacak ve mavi turnusol kâğıdı batırılacak. Ürünler şunlardır: portakal suyu, kabartma tozlu su, ayran, sabunlu su, kola, çamaşır suyu, saf su ve turşu suyu.
**Bu ürünlerden kaç tanesi mavi turnusol kâğıdını kırmızıya çevirir?**`,
  gorsel: null,
  secenekler: [
    "3",
    "4",
    "5",
    "8"
  ],
  dogru: 1,
  hatalar: [
    "Asit sayısını eksik bulma: portakal suyu, ayran, kola ve turşu suyunun hepsi asittir; bir asidi atlamışsın.",
    null,
    "Nötrü asit sayma: saf su nötrdür ve mavi turnusolun rengini değiştirmez.",
    "Genelleme yapma: bazlar ve nötr su mavi turnusolu kırmızıya çevirmez; yalnızca asitler çevirir."
  ],
  aciklama: `Mavi turnusol kâğıdını yalnızca asit özellikli maddeler kırmızıya çevirir.
Adım 1: Portakal suyu, ayran, kola ve turşu suyu ekşi tatlıdır, asit özelliği gösterir.
Adım 2: Kabartma tozlu su, sabunlu su ve çamaşır suyu bazdır; saf su nötrdür. Bunlar mavi turnusolu değiştirmez.
Sağlama: 4 asit + 3 baz + 1 nötr = 8 ürün.
Cevap B.`
},
{
  id: "fen-ab-350",
  kazanim: "F.8.4.4.5",
  kademe: 3,
  zorluk: 3,
  soru: `Aylin, "asitler mermeri aşındırır" hipotezini sınamak için bir deney tasarlıyor. Elinde aynı büyüklükte mermer ve plastik parçalar, pH değeri 3 olan sirke ve saf su var. Deneyde yalnızca bir şeyi değiştirip diğer her şeyi aynı tutmak istiyor.
**Aylin'in hipotezini en doğru biçimde sınayan düzenek aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "İki kaba da sirke koyup birine mermer, diğerine plastik parça atmak",
    "Bir kaba mermer ve sirke, diğer kaba plastik parça ve saf su koymak",
    "İki kaba da sirke koyup birine küçük, diğerine büyük mermer parçası atmak",
    "İki kaba aynı büyüklükte mermer koyup birine sirke, diğerine saf su eklemek"
  ],
  dogru: 3,
  hatalar: [
    "Yanlış değişkeni değiştirme: burada değişen madde mermer ya da plastiktir; sirkenin mermere etkisi değil, iki maddenin farkı sınanır.",
    "Birden çok değişkeni değiştirme: hem madde hem sıvı farklıdır; sonuç hangisinden kaynaklandığı anlaşılamaz.",
    "Alakasız değişken: parça boyutunu değiştirmek asidin etkisini sınamaz; iki kapta da aynı sıvı vardır.",
    null
  ],
  aciklama: `Bir hipotezi sınarken yalnızca sınanan değişken (asit olup olmaması) değiştirilir, diğerleri aynı tutulur.
Adım 1: Sınanan değişken sıvıdır: sirke (asit) ile saf su (asit değil).
Adım 2: Mermer parçaları aynı büyüklükte olmalıdır; böylece fark yalnızca sıvıdan gelir.
Adım 3: Sirkeli kapta köpürme ve aşınma, saf sulu kapta değişim olmaması hipotezi destekler.
Sık yapılan hata: Aynı anda iki şeyi değiştirip sonucu yorumlamaya çalışmak.
Cevap D.`
},
{
  id: "fen-ab-351",
  kazanim: "F.8.4.4.3",
  kademe: 3,
  zorluk: 3,
  soru: `Mehmet, evdeki doğal ayraçların davranışını önceden tahmin etmek istiyor. Demli çayın rengi asit ortamda açılır, nötr ortamda değişmez, baz ortamda koyulaşır. Zerdeçal ise yalnızca baz ortamda kırmızımsı kahverengi olur; asit ve nötr ortamda sarı kalır. Mehmet'in elindeki L sıvısı zerdeçalı kırmızımsı kahverengi yapıyor, M sıvısı ise demli çayın rengini açıyor. Mehmet, L sıvısından aldığı örneğe demli çay, M sıvısından aldığı örneğe zerdeçal uyguluyor.
**Buna göre L sıvısındaki çayın ve M sıvısındaki zerdeçalın alacağı durum aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Çayın rengi koyulaşır, zerdeçal sarı kalır",
    "Çayın rengi koyulaşır, zerdeçal kırmızımsı kahverengi olur",
    "Çayın rengi açılır, zerdeçal sarı kalır",
    "Çayın rengi açılır, zerdeçal kırmızımsı kahverengi olur"
  ],
  dogru: 0,
  hatalar: [
    null,
    "M'yi baz sanma: demli çayı açan M sıvısı asittir; asitte zerdeçal sarı kalır, kırmızımsı kahverengi olmaz.",
    "L'yi asit sanma: zerdeçalı kahverengi yapan L sıvısı bazdır; baz ortamda çayın rengi açılmaz, koyulaşır.",
    "İki sıvıyı da ters bağlama: L baz, M asittir; bu şık L'yi asit, M'yi baz gibi ele alıyor."
  ],
  aciklama: `Önce her sıvının türünü bul, sonra her ayracın o türdeki rengine bak.
Adım 1: Zerdeçalı kırmızımsı kahverengi yapan L sıvısı bazdır; baz ortamda demli çayın rengi koyulaşır.
Adım 2: Demli çayın rengini açan M sıvısı asittir; asit ortamda zerdeçal sarı kalır.
Sağlama: Zerdeçal asit ve nötrde sarıdır; kahverengi yalnızca baz ortamın sonucudur. Çay ise baz ortamda koyulaşır, asitte açılır.
Cevap A.`
},
{
  id: "fen-ab-352",
  kazanim: "F.8.4.4.4",
  kademe: 3,
  zorluk: 3,
  soru: `Burcu, pH değerleri ölçülen dört sıvıyı tabloda asit, baz ve nötr olarak sınıflamış. Öğretmeni sınıflamanın yalnızca bir satırında hata olduğunu söylüyor.
**Burcu hangi sıvıyı yanlış sınıflamıştır?**`,
  gorsel: `<table class="tablo"><tr><th>Sıvı</th><th>pH değeri</th><th>Burcu'nun sınıflaması</th></tr><tr><td>Elma suyu</td><td>3</td><td>Asit</td></tr><tr><td>Saf su</td><td>7</td><td>Nötr</td></tr><tr><td>Süt</td><td>6</td><td>Nötr</td></tr><tr><td>Kabartma tozlu su</td><td>8</td><td>Baz</td></tr></table>`,
  secenekler: [
    "Elma suyu",
    "Saf su",
    "Süt",
    "Kabartma tozlu su"
  ],
  dogru: 2,
  hatalar: [
    "Doğru satırı hatalı sanma: pH 3 asidiktir, Burcu asit yazmıştır.",
    "Doğru satırı hatalı sanma: pH 7 nötrdür, Burcu nötr yazmıştır.",
    null,
    "Doğru satırı hatalı sanma: pH 8 baziktir, Burcu baz yazmıştır."
  ],
  aciklama: `Nötr yalnızca pH 7'de görülür; 7'den küçük her değer asidik, büyük her değer baziktir.
Adım 1: Elma suyu (3) asit, kabartma tozlu su (8) baz, saf su (7) nötrdür; üç satır doğru.
Adım 2: Sütün pH değeri 6'dır. 7'den küçüktür, yani hafif asidiktir; nötr değildir.
Sık yapılan hata: 7'ye yakın değerleri nötr saymak.
Cevap C.`
},
{
  id: "fen-ab-353",
  kazanim: "F.8.4.4.7",
  kademe: 3,
  zorluk: 3,
  soru: `Bir ilçede 2010 yılında çalışan kömürlü termik santral 2015'te kapatılmış, yerine rüzgâr türbinleri kurulmuştur. İlçede ölçülen yağmur suyu pH değerleri tabloda verilmiştir.
**Bu verilere göre aşağıdaki yargılardan hangileri doğrudur?**
I. 2020'de yağmur suyunun asitliği 2010'a göre artmıştır.
II. Yağmur suyundaki asitliğin azalması, havaya karışan kükürt ve azot oksitlerindeki azalmayla ilişkili olabilir.
III. 2020'de yağmur suyu bazik özellik göstermektedir.`,
  gorsel: `<table class="tablo"><tr><th>Yıl</th><th>Yağmur suyunun pH değeri</th></tr><tr><td>2010</td><td>4</td></tr><tr><td>2020</td><td>6</td></tr></table>`,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "pH yönünü ters okuma: pH 4'ten 6'ya çıkmıştır, yani asitlik azalmıştır.",
    null,
    "pH 6'yı baz sanma ve yönü ters okuma: 6, 7'den küçüktür; asidiktir. Asitlik de artmamış, azalmıştır.",
    "III'ü doğru sayma: pH 6, 7'den küçük olduğu için 2020'deki yağmur suyu hâlâ asidiktir, bazik değildir."
  ],
  aciklama: `pH büyüdükçe asitlik azalır; pH 7'den küçük olan yağmur suyu, nötre yaklaşsa bile asidiktir.
Adım 1: pH 4'ten 6'ya çıkmıştır; asitlik azalmıştır. I yanlış.
Adım 2: Santral fosil yakıt yakıyordu; kapanınca kükürt ve azot oksitleri azalmış olabilir ve bu, asitliğin azalmasıyla ilişkilidir. II doğru.
Adım 3: 2020'de pH 6, 7'den küçüktür; yağmur suyu hâlâ hafif asidiktir, bazik değildir. III yanlış.
Sağlama: Veriler "ilişkili olabilir" demeye yeter, "tek neden" demeye yetmez.
Cevap B.`
},
{
  id: "fen-ab-354",
  kazanim: "F.8.4.4.5",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, K, L ve M sıvılarının mermer, magnezyum şerit ve yağ lekesi üzerindeki etkisini deneyle inceliyor. Gözlemlerini tabloya yazıyor.
**Bu gözlemlere göre K, L ve M sıvılarının pH değerleri büyükten küçüğe doğru nasıl sıralanır?**`,
  gorsel: `<table class="tablo"><tr><th>Sıvı</th><th>Mermer</th><th>Magnezyum şerit</th><th>Yağ lekesi</th></tr><tr><td>K</td><td>Köpürdü</td><td>Gaz çıktı</td><td>Değişmedi</td></tr><tr><td>L</td><td>Değişmedi</td><td>Değişmedi</td><td>Çözüldü</td></tr><tr><td>M</td><td>Değişmedi</td><td>Değişmedi</td><td>Değişmedi</td></tr></table>`,
  secenekler: [
    "L > M > K",
    "K > M > L",
    "M > L > K",
    "L > K > M"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Sırayı ters kurma: K asittir, pH değeri en küçüktür; L baz olduğu için en büyüktür.",
    "Nötrü en büyük sanma: M nötrdür (7); baz olan L ise 7'den büyüktür.",
    "Asidi nötrden büyük sanma: K asittir ve pH değeri 7'den küçüktür, yani M'den küçüktür."
  ],
  aciklama: `Asitler mermeri ve bazı metalleri etkiler, bazlar yağı çözer; ikisini de yapmayan sıvı nötrdür.
Adım 1: K mermeri köpürtüp magnezyumdan gaz çıkardığı için asittir; pH değeri 7'den küçüktür.
Adım 2: L yağ lekesini çözdüğü için bazdır; pH değeri 7'den büyüktür.
Adım 3: M hiçbir etki yapmadığı için nötrdür, pH 7'dir. Sıra baz > nötr > asit olduğundan L > M > K olur.
Sağlama: Asit < nötr < baz sırası, pH küçükten büyüğe K < M < L demektir.
Cevap A.`
},
{
  id: "fen-ab-355",
  kazanim: "F.8.4.4.4",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, mutfaktaki altı sıvının pH değerlerini ölçüp tabloya yazıyor. Daha sonra mavi turnusolu kırmızıya çeviren ve pH değeri 6'dan küçük olan sıvılar arasında en az asidik olanı bulmak istiyor.
**Öğrencinin bulması gereken sıvı aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Sıvı</th><th>Turşu suyu</th><th>Ayran</th><th>Kahve</th><th>Süt</th><th>Saf su</th><th>Sabunlu su</th></tr><tr><td>pH değeri</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>10</td></tr></table>`,
  secenekler: [
    "Süt",
    "Ayran",
    "Turşu suyu",
    "Kahve"
  ],
  dogru: 3,
  hatalar: [
    "Sınırı dahil etme: pH değeri 6'dan küçük denince 6'nın kendisi dahil değildir; süt koşulu sağlamaz.",
    "Karşılaştırmayı eksik yapma: ayranın pH değeri 4'tür; 5 olan kahve ondan daha az asidiktir.",
    "Yönü ters kurma: pH'ı en küçük olan sıvı en kuvvetli asittir; en az asidik olan değil.",
    null
  ],
  aciklama: `pH değeri 7'den küçüldükçe asitlik artar; en az asidik olan asit, pH'ı 7'ye en yakın olandır.
Adım 1: pH değeri 6'dan küçük olanlar turşu suyu (3), ayran (4) ve kahvedir (5). Süt tam 6'dır, koşulu sağlamaz.
Adım 2: Bu üçünden pH'ı en büyük, yani 7'ye en yakın olan kahvedir; en az asidik olan odur.
Sağlama: Saf su (7) nötr, sabunlu su (10) bazdır; ikisi de koşulu sağlamaz.
Cevap D.`
},
/* ===================== DÜZEY 4 ===================== */
{
  id: "fen-ab-356",
  kazanim: "F.8.4.4.3",
  kademe: 3,
  zorluk: 4,
  soru: `Demli çay asit ortamda açılır, nötr ortamda değişmez, baz ortamda koyulaşır. Zerdeçal kâğıdı ise asit ve nötr ortamda sarı kalır, baz ortamda kırmızımsı kahverengi olur. Bir öğrenci dört çözeltiye bu iki ayracı ayrı örneklerde uyguluyor ve sonuçları tabloya yazıyor.
**Bu sonuçlara göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Çözelti</th><th>Çayın rengi</th><th>Zerdeçal kâğıdı</th></tr><tr><td>K</td><td>Açıldı</td><td>Sarı kaldı</td></tr><tr><td>L</td><td>Değişmedi</td><td>Sarı kaldı</td></tr><tr><td>M</td><td>Koyulaştı</td><td>Kırmızımsı kahverengi oldu</td></tr><tr><td>N</td><td>Açıldı</td><td>Sarı kaldı</td></tr></table>`,
  secenekler: [
    "K ve N çözeltilerinin pH değerleri birbirine eşittir",
    "K çözeltisi asit, L çözeltisi nötr, M çözeltisi baz özelliğindedir",
    "K, L ve N çözeltilerinin üçü de mavi turnusolu kırmızıya çevirir",
    "N çözeltisi, K çözeltisinden daha kuvvetli asit özelliği gösterir"
  ],
  dogru: 1,
  hatalar: [
    "Veriden fazlasını söyleme: ikisi de asittir ama çayın açılması pH değerlerinin aynı olduğunu göstermez.",
    null,
    "Nötrü asit sanma: çayın rengi L'de değişmediği için L nötrdür ve mavi turnusolu kırmızıya çevirmez.",
    "Veriden fazlasını söyleme: iki asidin hangisinin daha kuvvetli olduğu çay ve zerdeçal sonuçlarından anlaşılmaz."
  ],
  aciklama: `İki ayracın sonucunu birleştirince türü bulursun; bir ayraç iki türü ayıramadığında ikincisi devreye girer.
Adım 1: K ve N'de çay açıldı; açılma asit ortamı gösterir. Zerdeçalın sarı kalması asitle uyumludur.
Adım 2: L'de çay değişmedi, zerdeçal sarı kaldı; bu, nötr ortamı gösterir.
Adım 3: M'de çay koyulaştı ve zerdeçal kahverengi oldu; ikisi de baz ortamı gösterir.
Adım 4: İki asidin kuvvetini (hangisinin pH'ı daha küçük) bu sonuçlar göstermez; A ve D veriyi aşar.
Sağlama: C yanlıştır çünkü L nötrdür, mavi turnusolu kırmızıya çevirmez.
Cevap B.`
},
{
  id: "fen-ab-357",
  kazanim: "F.8.4.4.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kimya öğrencisi, tam sayı pH değerine sahip K, L ve M çözeltilerine Y ve Z ayraçlarını uyguluyor. Ayraçların farklı pH aralıklarındaki renkleri aşağıdaki tablolarda verilmiştir. Gözlemleri şöyledir: K çözeltisinde Y sarı, Z renksiz; L çözeltisinde Y kırmızı, Z renksiz; M çözeltisinde Y mavi, Z mor renk görülmüştür.
**Bu gözlemlere göre K, L ve M çözeltilerinin pH değer aralıkları sırasıyla aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>pH aralığı</th><th>Y ayracının rengi</th></tr><tr><td>0 - 5</td><td>Kırmızı</td></tr><tr><td>6 - 8</td><td>Sarı</td></tr><tr><td>9 - 14</td><td>Mavi</td></tr></table><br><table class="tablo"><tr><th>pH aralığı</th><th>Z ayracının rengi</th></tr><tr><td>0 - 2</td><td>Pembe</td></tr><tr><td>3 - 7</td><td>Renksiz</td></tr><tr><td>8 - 14</td><td>Mor</td></tr></table>`,
  secenekler: [
    "3 - 8, 0 - 7, 8 - 14",
    "6 - 8, 3 - 5, 9 - 14",
    "6 - 7, 3 - 5, 9 - 14",
    "6 - 7, 0 - 5, 8 - 14"
  ],
  dogru: 2,
  hatalar: [
    "Aralıkları birleştirme: iki ayracın aralıkları birleştirilmez, ortak (kesişen) kısım alınır.",
    "Tek ayraca güvenme: K için yalnızca Y'ye bakılmış; Z renksiz olduğundan K'nin pH'ı 3-7 aralığında da olmalıdır, yani 8 olamaz.",
    null,
    "Eksik daraltma: L için yalnızca Y'ye, M için yalnızca Z'ye bakılmış; ortak aralık L'de 3-5, M'de 9-14'tür."
  ],
  aciklama: `İki ayraç aynı çözeltiye uygulanınca çözeltinin pH'ı iki ayracın aralığına da uymak zorundadır; bu yüzden aralıkların kesişimi alınır.
Adım 1: K: Y sarı (6-8) ve Z renksiz (3-7). Ortak değerler 6 ve 7 olduğundan K'nin pH'ı 6-7'dir.
Adım 2: L: Y kırmızı (0-5) ve Z renksiz (3-7). Ortak değerler 3, 4, 5 olduğundan 3-5'tir.
Adım 3: M: Y mavi (9-14) ve Z mor (8-14). Ortak değerler 9-14'tür.
Sağlama: Her aralık iki tablodaki rengi de sağlıyor.
Cevap C.`
},
{
  id: "fen-ab-358",
  kazanim: "F.8.4.4.4",
  kademe: 3,
  zorluk: 4,
  soru: `K, L, M ve N çözeltilerinin pH değerleri tabloda verilmiştir. Bir öğrenci her çözeltiden alınan örneklere mavi turnusol, kırmızı turnusol ve zerdeçal kâğıdı uygulayacaktır. Zerdeçal kâğıdı asit ve nötr ortamda sarı kalır, baz ortamda kırmızımsı kahverengi olur.
**Bu uygulamada aşağıdaki gözlemlerden hangisi yapılır?**`,
  gorsel: `<table class="tablo"><tr><th>Çözelti</th><th>K</th><th>L</th><th>M</th><th>N</th></tr><tr><td>pH değeri</td><td>2</td><td>5</td><td>9</td><td>12</td></tr></table>`,
  secenekler: [
    "M çözeltisinde kırmızı turnusol maviye döner, zerdeçal sarı kalır",
    "N çözeltisinde mavi turnusol kırmızıya döner, zerdeçal kahverengi olur",
    "K çözeltisinde kırmızı turnusol maviye döner, zerdeçal sarı kalır",
    "L çözeltisinde mavi turnusol kırmızıya döner, zerdeçal sarı kalır"
  ],
  dogru: 3,
  hatalar: [
    "Zerdeçalı yanlış tahmin etme: pH 9 olan M baz olduğu için zerdeçal sarı kalmaz, kırmızımsı kahverengi olur.",
    "Turnusolu yanlış tahmin etme: pH 12 olan N baz olduğu için mavi turnusolu kırmızıya çevirmez; kırmızı turnusolu maviye çevirir.",
    "Turnusolu yanlış tahmin etme: pH 2 olan K asit olduğu için kırmızı turnusolu maviye çevirmez; mavi turnusolu kırmızıya çevirir.",
    null
  ],
  aciklama: `pH 7'den küçükse çözelti asit, büyükse bazdır. Asit mavi turnusolu kırmızıya çevirir; baz kırmızı turnusolu maviye çevirir ve zerdeçalı kırmızımsı kahverengi yapar.
Adım 1: K (2) ve L (5) asittir; mavi turnusol kırmızıya döner, kırmızı turnusol değişmez, zerdeçal sarı kalır.
Adım 2: M (9) ve N (12) baziktir; kırmızı turnusol maviye döner, mavi turnusol değişmez, zerdeçal kırmızımsı kahverengi olur.
Adım 3: Seçenekleri bu kurallarla denetle: M ve N'de zerdeçal sarı kalmaz; K'de kırmızı turnusol maviye dönmez. Yalnızca L ile ilgili şıkkın iki gözlemi de doğrudur.
Sık yapılan hata: Gözlemin yarısı doğru olunca şıkkın tamamını doğru saymak.
Cevap D.`
},
{
  id: "fen-ab-359",
  kazanim: "F.8.4.4.5",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, pH değerleri tabloda verilen K, L, M, N ve P sıvılarının her birinden alınan örneklere ayrı ayrı mermer parçası, magnezyum şerit ve yağ lekesi sürülmüş bir bez uyguluyor. Mermer parçası ve magnezyum şerit asit ile tepkimeye girer; yağ lekesini ise baz çözer.
**Mermer parçasını ve magnezyum şeridi etkilemeyen, yağ lekesini çözen sıvılar arasında pH değeri en küçük olan hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Sıvı</th><th>K</th><th>L</th><th>M</th><th>N</th><th>P</th></tr><tr><td>pH değeri</td><td>9</td><td>4</td><td>7</td><td>13</td><td>2</td></tr></table>`,
  secenekler: [
    "K",
    "L",
    "M",
    "N"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Asidi baz sanma: pH 4 olan L asittir; mermeri köpürtür, magnezyumdan gaz çıkarır ve yağ lekesini çözmez.",
    "Etkisizliği baz sanma: pH 7 olan M nötrdür; mermeri, magnezyumu etkilemez ama yağ lekesini de çözmez.",
    "Yönü ters kurma: N (pH 13) baz olduğu için koşulları sağlar ama baz sıvılar arasında pH değeri en büyük olandır, en küçük olan değil."
  ],
  aciklama: `Asitler mermeri köpürtüp magnezyum gibi bazı metallerle gaz çıkarır; bazlar yağı çözer; ikisini de yapmayan sıvı nötrdür.
Adım 1: Mermeri ve magnezyumu etkilemeyen sıvılar asit olmayanlardır: K (9), M (7) ve N (13). L (4) ve P (2) asittir, elenir.
Adım 2: Bunlardan yağ lekesini çözenler baz olanlardır: K ve N. M nötrdür, yağı çözmez.
Adım 3: Baz olan K (9) ve N (13) arasında pH değeri en küçük olan K'dir.
Sık yapılan hata: Etki yapmayan sıvıyı baz sanmak. Nötr sıvı da mermeri ve metali etkilemez ama yağı da çözmez.
Cevap A.`
},
{
  id: "fen-ab-360",
  kazanim: "F.8.4.4.7",
  kademe: 3,
  zorluk: 4,
  soru: `Bir ülkede kömürlü bir termik santralin bacaları 50 metreden 200 metreye çıkarılıyor. Santralin yaktığı kömür miktarı ve kömürün kükürt oranı değişmiyor. Bacalar yükseltilmeden önce ve sonra iki farklı yerde ölçülen yağmur suyu pH değerleri tabloda verilmiştir.
**Bu verilere göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Ölçüm yeri</th><th>Bacalar yükseltilmeden önce</th><th>Bacalar yükseltildikten sonra</th></tr><tr><td>Santrale 5 km uzaklıktaki kasaba</td><td>4,0</td><td>5,5</td></tr><tr><td>Santrale 150 km uzaklıktaki göl havzası</td><td>6,0</td><td>4,5</td></tr></table>`,
  secenekler: [
    "Baca yükseltmek, asit yağmuru sorununu hem yakın hem uzak bölgelerde çözmüştür",
    "Göl havzasındaki yağmur suyunun pH değerinin düşmesinin santralle ilgisi yoktur",
    "Gaz miktarı azalmadan daha geniş alana yayıldığı için sorun yakından uzağa kaymış olabilir",
    "Kasabadaki yağmur suyunun pH değerinin artması, santralin artık gaz çıkarmadığını gösterir"
  ],
  dogru: 2,
  hatalar: [
    "Veriyi yarım okuma: kasabada pH arttı ama göl havzasında azaldı; sorun her yerde çözülmemiştir.",
    "Kesin ilişki yok deme: baca yükseltildikten sonra uzaktaki pH düşmüştür; bu birlikteliği tesadüf saymak veriyle desteklenmez.",
    null,
    "Veriden fazlasını söyleme: kömür miktarı değişmediği için gaz çıkışı sürer; kasabadaki iyileşme gazın başka yere taşınmasından da olabilir."
  ],
  aciklama: `Baca yükseltmek gazın miktarını azaltmaz; gazları daha uzağa taşır. Asıl çözüm gaz salımını kaynağında azaltmaktır.
Adım 1: Yakındaki kasabada pH 4,0'dan 5,5'e çıkmış; asitlik azalmıştır.
Adım 2: Uzaktaki göl havzasında pH 6,0'dan 4,5'e düşmüş; asitlik artmıştır.
Adım 3: Yakıt miktarı ve kükürt oranı sabit olduğundan gaz miktarı azalmamış, yalnızca daha uzağa yayılmış olabilir.
Adım 4: A, B ve D bu veriyi aşan kesin ifadelerdir.
Sık yapılan hata: Yakın yerdeki iyileşmeyi sorunun çözülmesi sanmak.
Cevap C.`
},
{
  id: "fen-ab-361",
  kazanim: "F.8.4.4.6",
  kademe: 3,
  zorluk: 4,
  soru: `Bir apartman yönetimi, ortak kullanılan dört temizlik ürününün etiket bilgilerini bir tabloda topluyor. Tabloya göre her satırda ürünün pH değeri ve etiketten alınan bir güvenlik talimatı yazıyor. Yönetici, satırlardan yalnızca birindeki talimatın hatalı olduğunu fark ediyor.
**Hangi satırdaki güvenlik talimatı hatalıdır?**`,
  gorsel: `<table class="tablo"><tr><th>Ürün</th><th>pH değeri</th><th>Etiketteki talimat</th></tr><tr><td>Tuvalet temizleyici</td><td>1</td><td>Göze sıçrarsa hemen bol suyla yıkayınız.</td></tr><tr><td>Çamaşır suyu</td><td>12</td><td>Ne olduğundan emin olmak için kapağı açıp kokusuna yakından bakınız.</td></tr><tr><td>Fırın temizleyici</td><td>13</td><td>Cilde temasından kaçınmak için eldiven takınız.</td></tr><tr><td>Kireç çözücü</td><td>2</td><td>İşiniz bitince eldivenli elinizle yüzeyi bol suyla durulayınız.</td></tr></table>`,
  secenekler: [
    "Tuvalet temizleyici",
    "Çamaşır suyu",
    "Fırın temizleyici",
    "Kireç çözücü"
  ],
  dogru: 1,
  hatalar: [
    "Doğru talimatı hatalı sanma: pH 1 olan ürün gözü zedeler; göze sıçrayan kuvvetli asit hemen bol suyla yıkanır, bu talimat doğrudur.",
    null,
    "Doğru talimatı hatalı sanma: pH 13 olan kuvvetli baz cildi yakar; eldiven takmak doğru bir önlemdir.",
    "Doğru talimatı hatalı sanma: pH 2 olan kuvvetli asit, ele temas ederse zarar verir; eldivenle çalışıp sonrasında yüzeyi suyla durulamak doğrudur."
  ],
  aciklama: `Kuvvetli asit ya da baz içeren ürünler eldivenle ve havalandırılan ortamda kullanılır; göze sıçrarsa bol suyla yıkanır.
Adım 1: Tuvalet temizleyici (pH 1) kuvvetli asittir; göze sıçrarsa hemen bol suyla yıkamak doğru bir talimattır.
Adım 2: Fırın temizleyici (pH 13) kuvvetli bazdır, cildi yakar; eldiven talimatı doğrudur. Kireç çözücü (pH 2) için eldivenle çalışıp yüzeyi suyla durulamak da doğrudur.
Adım 3: Çamaşır suyunun (pH 12) buharı solunum yollarına ve göze zarar verir; ürünün kokusuna yakından bakılmaz. Bu talimat hatalıdır.
Sık yapılan hata: Ürünü tanımak için kokusuna bakmak.
Cevap B.`
},
{
  id: "fen-ab-362",
  kazanim: "F.8.4.4.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, etiketi okunmayan K ve L çözeltileriyle deneyler yapıyor. K çözeltisini pil ve ampulden oluşan devreye koyduğunda ampul yanıyor; K çözeltisi kırmızı turnusol kâğıdını maviye çeviriyor. L çözeltisi ise mavi ve kırmızı turnusol kâğıtlarının hiçbirinin rengini değiştirmiyor, zerdeçal kâğıdını da sarı bırakıyor.
**Bu gözlemlere göre aşağıdaki yargılardan hangileri doğrudur?**
I. K çözeltisi mavi turnusolu kırmızıya çevirir.
II. K çözeltisi elektrik akımını iletir.
III. L çözeltisi asit özelliği gösterir.`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "Turnusol yönünü ters bağlama: K kırmızı turnusolu maviye çevirdiği için bazdır; baz mavi turnusolu kırmızıya çevirmez.",
    null,
    "I ve III'ü doğru sayma: K baz olduğu için I yanlıştır; L ise her iki turnusolu da değiştirmediğinden asit değil nötrdür.",
    "III'ü doğru sayma: L her iki turnusolun rengini değiştirmediği için nötrdür; zerdeçalın sarı kalması asit ile nötrü ayıramaz."
  ],
  aciklama: `Kırmızı turnusolu maviye çeviren çözelti bazdır; iki turnusolu da değiştirmeyen çözelti nötrdür; asit ve baz çözeltileri elektrik akımını iletir.
Adım 1: K kırmızı turnusolu maviye çevirdiği için bazdır. Baz, mavi turnusolu kırmızıya çevirmez; I yanlış.
Adım 2: Ampul K'de yandığı için K elektrik akımını iletir; II doğru.
Adım 3: L iki turnusolun da rengini değiştirmediği için nötrdür. Zerdeçalın sarı kalması asitte de nötrde de görülür; L'nin asit olduğunu göstermez; III yanlış.
Sağlama: Doğru olan tek yargı II'dir.
Cevap B.`
},
{
  id: "fen-ab-363",
  kazanim: "F.8.4.4.2",
  kademe: 3,
  zorluk: 4,
  soru: `Mide ekşimesi yaşayan bir kişi ile bahçesindeki toprağın asitleştiğini fark eden bir çiftçi, sorunlarını gidermek için aynı özellikteki bir maddeden yararlanmak istiyor. Önlerindeki dört maddenin pH değerleri şöyledir: yoğurt 4, sofra tuzu çözeltisi 7, kabartma tozlu su 8, gider açıcı çözeltisi 13.
**Her iki sorunu da gidermek için gereken madde özelliği ile mide ekşimesinde güvenle kullanılabilecek madde aşağıdakilerden hangisinde birlikte verilmiştir?**`,
  gorsel: null,
  secenekler: [
    "Asit özellikli, yoğurt",
    "Nötr özellikli, sofra tuzu çözeltisi",
    "Baz özellikli, gider açıcı çözeltisi",
    "Baz özellikli, kabartma tozlu su"
  ],
  dogru: 3,
  hatalar: [
    "Asidi asitle azaltma: yoğurt asidiktir (pH 4); mideye ya da toprağa eklenirse asitliği azaltmaz, artırır.",
    "Nötrü çözüm sanma: pH 7 olan madde asidin etkisini azaltmaz; azaltan baz özellikli maddedir.",
    "Kuvveti göz ardı etme: gider açıcı baz özelliklidir ama pH 13 olduğu için kuvvetli bazdır; cilde ve mideye zarar verir, yutulmaz.",
    null
  ],
  aciklama: `Asidin etkisini azaltmak için baz özellikli bir madde kullanılır: mide ilaçları ve toprağa katılan kireç buna örnektir. Ancak mideye giden madde zararsız olmalıdır; pH 13 gibi kuvvetli bazlar cildi ve dokuyu yakar.
Adım 1: Mide özsuyu asittir; asitliği artıran bir madde ekşimeyi büyütür. Toprak da asitleşmişse asit eklemek durumu kötüleştirir. Yoğurt (pH 4) asittir.
Adım 2: Nötr madde (pH 7) asidin etkisini azaltmaz; ortak özellik baz olmaktır.
Adım 3: Baz özellikli iki madde var: kabartma tozlu su (pH 8) ve gider açıcı çözeltisi (pH 13). Gider açıcı kuvvetli bazdır ve temizlik malzemesidir; içilmez. Mide için güvenli olan, hafif bazik kabartma tozlu sudur.
Sağlama: Yoğurt asit, sofra tuzu çözeltisi nötrdür; baz olanlardan yalnızca biri güvenlidir.
Cevap D.`
},
{
  id: "fen-ab-364",
  kazanim: "F.8.4.4.4",
  kademe: 3,
  zorluk: 4,
  soru: `Kırmızı lahana suyu asit ortamda kırmızı, nötr ortamda mor, baz ortamda mavimsi yeşil renk verir. Kırmızı turnusol kâğıdı yalnızca baz ortamda maviye döner. Grafikte pH değerleri verilen beş çözeltinin her birinden iki örnek alınıyor; birine kırmızı lahana suyu damlatılıyor, diğerine kırmızı turnusol kâğıdı batırılıyor.
**Kırmızı turnusol kâğıdının rengi değişmeyen ve lahana suyunun kırmızıdan farklı bir renk verdiği çözelti aşağıdakilerden hangisidir?**`,
  gorsel: `<svg viewBox="0 0 520 270" role="img" aria-label="Çözeltilerin pH değerleri: K 2, L 6, M 7, N 9, P 12"><line x1="50" y1="34" x2="50" y2="230" stroke="currentColor" stroke-width="1.8"/><line x1="50" y1="230" x2="490" y2="230" stroke="currentColor" stroke-width="1.8"/><text x="44" y="235" text-anchor="end" font-size="14" fill="currentColor">0</text><text x="44" y="137" text-anchor="end" font-size="14" fill="currentColor">7</text><text x="44" y="39" text-anchor="end" font-size="14" fill="currentColor">14</text><line x1="50" y1="132" x2="490" y2="132" stroke="currentColor" stroke-opacity="0.6" stroke-dasharray="5 4"/><text x="56" y="124" font-size="14" fill="currentColor">7 (nötr)</text><rect x="90" y="202" width="56" height="28" fill="var(--vurgu)" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/><text x="118" y="196" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">2</text><text x="118" y="252" text-anchor="middle" font-size="15" fill="currentColor">K</text><rect x="175" y="146" width="56" height="84" fill="var(--vurgu)" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/><text x="203" y="168" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">6</text><text x="203" y="252" text-anchor="middle" font-size="15" fill="currentColor">L</text><rect x="260" y="132" width="56" height="98" fill="var(--dolgu)" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/><text x="288" y="154" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">7</text><text x="288" y="252" text-anchor="middle" font-size="15" fill="currentColor">M</text><rect x="345" y="104" width="56" height="126" fill="var(--vurgu2)" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/><text x="373" y="98" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">9</text><text x="373" y="252" text-anchor="middle" font-size="15" fill="currentColor">N</text><rect x="430" y="62" width="56" height="168" fill="var(--vurgu2)" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/><text x="458" y="56" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">12</text><text x="458" y="252" text-anchor="middle" font-size="15" fill="currentColor">P</text><text x="56" y="22" font-size="14" fill="currentColor">pH değeri</text></svg>`,
  secenekler: [
    "M",
    "L",
    "N",
    "P"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Zayıf asidi nötr sayma: L'nin pH değeri 6'dır; asittir. Kırmızı turnusol değişmez ama lahana suyu kırmızı olur.",
    "Bazı yanlış yorumlama: N'nin pH değeri 9'dur; baz olduğu için kırmızı turnusolu maviye çevirir.",
    "Bazı yanlış yorumlama: P'nin pH değeri 12'dir; baz olduğu için kırmızı turnusolu maviye çevirir."
  ],
  aciklama: `İki koşul birlikte aranır: kırmızı turnusolun değişmemesi asit ya da nötrü, lahana suyunun kırmızı olmaması asit olmayanı gösterir.
Adım 1: Grafikte K (2), L (6) asit, M (7) nötr, N (9), P (12) bazdır.
Adım 2: Kırmızı turnusolun rengi değişmeyen çözeltiler asit ve nötr olanlardır: K, L ve M.
Adım 3: Lahana suyu asitte kırmızı olur; bu yüzden K ve L elenir. Geriye nötr olan M kalır; M'de lahana suyu mor olur.
Sağlama: Kırmızı turnusol tek başına asidi nötrden ayıramaz; lahana suyu ayırır.
Cevap A.`
},
{
  id: "fen-ab-365",
  kazanim: "F.8.4.4.5",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci K, L, M ve N sıvılarını mavi turnusol, kırmızı turnusol ve mermer parçasıyla sınıyor. Gözlemlerini deftere yazdıktan sonra tabloya kopyalarken yalnızca bir sıvının satırına bir gözlemi yanlış aktarıyor.
**Hangi sıvının satırındaki gözlemler birbiriyle çelişmektedir?**`,
  gorsel: `<table class="tablo"><tr><th>Sıvı</th><th>Mavi turnusol</th><th>Kırmızı turnusol</th><th>Mermer parçası</th></tr><tr><td>K</td><td>Kırmızıya döndü</td><td>Değişmedi</td><td>Köpürdü</td></tr><tr><td>L</td><td>Değişmedi</td><td>Maviye döndü</td><td>Değişmedi</td></tr><tr><td>M</td><td>Değişmedi</td><td>Değişmedi</td><td>Köpürdü</td></tr><tr><td>N</td><td>Değişmedi</td><td>Değişmedi</td><td>Değişmedi</td></tr></table>`,
  secenekler: [
    "K",
    "L",
    "M",
    "N"
  ],
  dogru: 2,
  hatalar: [
    "Tutarlı satırı çelişkili sanma: K asittir; mavi turnusolu kırmızıya çevirir ve mermeri köpürtür.",
    "Tutarlı satırı çelişkili sanma: L bazdır; kırmızı turnusolu maviye çevirir ve mermeri etkilemez.",
    null,
    "Tutarlı satırı çelişkili sanma: N nötrdür; iki turnusolu da değiştirmez ve mermeri etkilemez."
  ],
  aciklama: `Asitler mavi turnusolu kırmızıya çevirir ve mermeri köpürtür; bazlar kırmızı turnusolu maviye çevirir, mermeri etkilemez; nötr çözelti hiçbirini değiştirmez.
Adım 1: K'de mavi turnusol kırmızıya dönmüş ve mermer köpürmüş; asit için tutarlı.
Adım 2: L'de kırmızı turnusol maviye dönmüş, mermer değişmemiş; baz için tutarlı. N'de hiçbir değişim yok; nötr için tutarlı.
Adım 3: M'de iki turnusol da değişmemiş yani nötr, ama mermer köpürmüş yani asit; bu iki gözlem çelişir.
Sık yapılan hata: Mermerin etkilenmemesini baz sanmak. Mermerin etkilenmemesi hem baz hem nötr için görülür.
Cevap C.`
},
{
  id: "fen-ab-366",
  kazanim: "F.8.4.4.6",
  kademe: 3,
  zorluk: 4,
  soru: `Bir apartman yöneticisi, temizlik görevlisine iki ürün veriyor. Ürünlerin pH değerleri tabloda verilmiştir. Görevli, banyoyu hızlı temizlemek için ürünlerle ilgili üç yargıyı değerlendiriyor.
**Bu yargılardan hangileri doğrudur?**
I. İki ürün de cilde ve göze zarar verebilecek kadar kuvvetlidir.
II. Çamaşır suyu baz olduğundan ele temas etse bile cilde zarar vermez.
III. Çamaşır suyunun pH değeri 7'den küçük olduğu için kireç çözücüyle aynı türdendir.`,
  gorsel: `<table class="tablo"><tr><th>Ürün</th><th>pH değeri</th></tr><tr><td>Kireç çözücü</td><td>1</td></tr><tr><td>Çamaşır suyu</td><td>12</td></tr></table>`,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bazı zararsız sanma: pH 12 olan çamaşır suyu kuvvetli bazdır ve cildi tahriş eder; baz olması zararsız olduğu anlamına gelmez.",
    "III'ü doğru sayma: çamaşır suyunun pH değeri 12'dir, 7'den büyüktür; baziktir, kireç çözücü ise asittir.",
    "II'yi ve III'ü doğru sayma: çamaşır suyu cilde zarar verebilir ve pH değeri 7'den küçük değildir."
  ],
  aciklama: `pH değeri 7'den çok uzak olan ürünler (yaklaşık 0-2 ya da 12-14) kuvvetli asit ya da baz sayılır ve cilde, göze zarar verir.
Adım 1: Kireç çözücü pH 1 (kuvvetli asit), çamaşır suyu pH 12 (kuvvetli baz); ikisi de cilde ve göze zarar verebilir. I doğru.
Adım 2: Baz olmak zararsız olmak demek değildir; pH 12 olan çamaşır suyu cildi tahriş edebilir. II yanlış.
Adım 3: Çamaşır suyunun pH değeri 12, yani 7'den büyüktür; baz özelliklidir. Kireç çözücü asittir; aynı türden değillerdir; III yanlış.
Sık yapılan hata: "Asit tehlikelidir, baz ise zararsızdır" sanmak. Kuvvetli bazlar da cildi ve gözü yakar.
Cevap A.`
},
{
  id: "fen-ab-367",
  kazanim: "F.8.4.4.4",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, pH değeri 0 ile 14 arasında bir tam sayı olan bir çözeltiyi inceliyor. Çözelti kırmızı turnusol kâğıdının rengini değiştirmiyor ve zerdeçal kâğıdını sarı bırakıyor. Kırmızı turnusol baz ortamda maviye döner; zerdeçal ise yalnızca baz ortamda kırmızımsı kahverengi olur.
**Bu bilgilere göre çözeltinin pH değeri kaç farklı tam sayı değeri alabilir?**`,
  gorsel: null,
  secenekler: [
    "5",
    "6",
    "7",
    "8"
  ],
  dogru: 3,
  hatalar: [
    "Aralığı eksik sayma: asit ve nötr değerlerin tamamı hesaba katılmamış; 0'dan 7'ye kadar olan bütün tam sayılar uygundur.",
    "Uç değerleri dışarıda bırakma: pH 0 ve pH 7 de koşulları sağlar.",
    "Nötrü dışarıda bırakma: pH 7 nötrdür, kırmızı turnusolu değiştirmez ve zerdeçal sarı kalır; bu da sayılmalıdır.",
    null
  ],
  aciklama: `Kırmızı turnusol yalnızca baz ortamda, zerdeçal de yalnızca baz ortamda renk değiştirir; ikisi değişmiyorsa çözelti baz değildir, yani asit ya da nötrdür.
Adım 1: Baz olmaması için pH 7'den büyük olamaz; pH en fazla 7 olabilir.
Adım 2: Ölçekte en küçük değer 0'dır. Uygun tam sayılar 0, 1, 2, 3, 4, 5, 6 ve 7'dir.
Adım 3: İki ipucu aynı bilgiyi verir; ikisi birlikte aralığı daha da daraltmaz.
Sağlama: 0'dan 7'ye kadar 8 tam sayı vardır.
Cevap D.`
},
{
  id: "fen-ab-368",
  kazanim: "F.8.4.4.7",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kentte kömürle çalışan bir termik santral, yoğun bir taşıt trafiği ve asitleşen tarım arazileri bulunuyor. Kent yönetimi sorunu çözmek için üç uygulamayı tartışıyor. Uzmanlar, uygulamaların asit yağmurlarına etkisini şu yargılarla özetliyor.
**Bu yargılardan hangileri doğrudur?**
I. Yağmur suyunun pH değeri 7'ye yaklaştıkça asit yağmurlarının zararı artar.
II. Taşıtlardan çıkan egzoz gazlarını azaltmak, asit yağmurlarına yol açan azot oksitlerinin salımını azaltır.
III. Kükürt oranı yüksek kömür kullanmak, yağmur suyunun pH değerini 7'ye yaklaştırır.`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "pH yönünü ters okuma: pH 7'ye yaklaştıkça yağmur suyunun asitliği azalır, zararı da azalır; I yanlıştır.",
    null,
    "I'i ve III'ü doğru sayma: pH 7'ye yaklaşmak asitliği azaltır, zararı artırmaz; kükürtlü kömür ise yağmuru daha asidik yapar.",
    "III'ü doğru sayma: kükürt oranı yüksek kömür daha çok kükürt oksidi çıkarır ve pH'ı küçültür, 7'ye yaklaştırmaz."
  ],
  aciklama: `Asit yağmurlarını kaynağında önlemenin yolu, kükürt ve azot oksitlerinin salımını azaltmaktır.
Adım 1: pH 7'ye yaklaştıkça yağmur suyunun asitliği azalır; zararı da azalır. I yanlış.
Adım 2: Egzozdan çıkan azot oksitleri asit yağmuruna katkı yapar; bunları azaltmak sorunu kaynağında hafifletir. II doğru.
Adım 3: Kükürt oranı yüksek kömür, havaya daha çok kükürt oksidi verir; yağmurun pH'ı küçülür, yani 7'den uzaklaşır. III yanlış.
Sağlama: Doğru olan tek yargı II'dir; I ve III asit yağmurunun etkisini ters yorumlar.
Cevap B.`
},
{
  id: "fen-ab-369",
  kazanim: "F.8.4.4.3",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci üç kaptan birinde zayıf bir asit, birinde nötr bir sıvı, birinde kuvvetli bir baz olduğunu biliyor ama hangisinin hangi kapta olduğunu bilmiyor. Her kaptan aldığı örneğe iki ayraç birden uygulayacak ve iki sonucu birlikte yorumlayarak kapların hangi sıvıyı içerdiğini bulmaya çalışacak. Çay asitte açılır, nötrde değişmez, baz ortamda koyulaşır.
**Aşağıdaki ayraç ikililerinden hangisiyle üç kabın türü __belirlenemez__?**`,
  gorsel: null,
  secenekler: [
    "Mavi turnusol ve zerdeçal",
    "Çay ve mavi turnusol",
    "Zerdeçal ve kırmızı turnusol",
    "Kırmızı turnusol ve mavi turnusol"
  ],
  dogru: 2,
  hatalar: [
    "Ayırabilen ikiliyi yetersiz sanma: mavi turnusol asidi, zerdeçal bazı ayırır; nötr geriye kalan olarak bulunur.",
    "Ayırabilen ikiliyi yetersiz sanma: çay tek başına asit, nötr ve bazı ayırır; mavi turnusol da asidi doğrular.",
    null,
    "Ayırabilen ikiliyi yetersiz sanma: mavi turnusol asidi, kırmızı turnusol bazı ayırır; hiçbirini değiştirmeyen nötrdür."
  ],
  aciklama: `Üç türü ayırmak için ikililerin birlikte asit için bir, baz için bir, nötr için ise üçüncü bir sonuç vermesi gerekir.
Adım 1: Zerdeçal asit ve nötrde sarı kalır, bazı ayırır. Kırmızı turnusol asit ve nötrde değişmez, bazı ayırır.
Adım 2: Bu ikili de yalnızca bazı ayırabilir; asit ile nötr iki ayraçta da aynı sonucu verir, bu yüzden ayırt edilemez.
Adım 3: Diğer ikililerin her biri asidi ve bazı ayırabilir; nötr de geri kalan kapta bulunur.
Sağlama: Mavi turnusol ve çay asit ile nötrü ayıran ayraçlar içerir.
Cevap C.`
},
{
  id: "fen-ab-370",
  kazanim: "F.8.4.4.5",
  kademe: 3,
  zorluk: 4,
  soru: `Bir laboratuvarda etiketi okunmayan K sıvısı inceleniyor. K sıvısı çinko şeritle tepkimeye girip gaz kabarcığı çıkarıyor ve mavi turnusol kâğıdını kırmızıya çeviriyor. Öğrenci bu gözlemlerden yola çıkarak K sıvısının diğer maddeler üzerindeki etkilerini tahmin ediyor.
**Bu tahminlerden hangileri doğrudur?**
I. K sıvısı mermer parçasını köpürterek aşındırır.
II. K sıvısı yağ lekesini çözer.
III. K sıvısının pH değeri 7'den büyüktür.`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bazın özelliğini asite yazma: yağı çözen bazlardır; K asit olduğu için yağ lekesini çözmez.",
    "pH yönünü ters okuma: mavi turnusolu kırmızıya çeviren K asittir ve pH değeri 7'den küçüktür; III yanlıştır.",
    "Asit ile bazın özelliklerini ters bağlama: yağı çözmek ve pH'ın 7'den büyük olması bazın özellikleridir, K bir asittir."
  ],
  aciklama: `Mavi turnusolu kırmızıya çeviren ve metalle gaz çıkaran sıvı asittir; asitlerin diğer maddeler üzerindeki etkileri bilinir.
Adım 1: K asittir. Asitler mermeri köpürterek aşındırır; I doğru.
Adım 2: Yağları çözen bazlardır; K asit olduğu için yağ lekesini çözmez; II yanlış.
Adım 3: Asitlerin pH değeri 7'den küçüktür; III yanlış.
Sağlama: Tahminlerden yalnızca I asidin gerçek bir özelliğini anlatıyor.
Cevap A.`
},
{
  id: "fen-ab-371",
  kazanim: "F.8.4.4.7",
  kademe: 3,
  zorluk: 4,
  soru: `Bir fen öğretmeni, asit yağmurlarını anlatırken tahtaya "neden, sonuç ve çözüm" üçlüsünü yazan dört farklı kart asıyor. Kartların yalnızca birinde üç bilgi de birbiriyle doğru ilişkilendirilmiştir.
**Hangi kart doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Neden: fosil yakıtların yanması, sonuç: mermer yapıların aşınması, çözüm: kükürt oranı yüksek kömürün tercih edilmesi",
    "Neden: ormanların kesilmesi, sonuç: göl suyunun asitlenmesi, çözüm: bacalara gaz tutucu filtre takılması",
    "Neden: kükürt ve azot oksitlerinin havaya karışması, sonuç: toprağın bazikleşmesi, çözüm: toplu taşımanın yaygınlaşması",
    "Neden: fosil yakıtların yanması, sonuç: göl suyunun asitlenmesi, çözüm: güneş enerjisinden yararlanılması"
  ],
  dogru: 3,
  hatalar: [
    "Çözümü ters seçme: kükürt oranı yüksek kömür havaya daha çok kükürt oksidi verir; neden ve sonuç doğru olsa da çözüm yanlıştır.",
    "Nedeni yanlış bağlama: çözüm doğru olsa da asit yağmurlarının nedeni ormanların kesilmesi değil, fosil yakıtlardan çıkan kükürt ve azot oksitleridir.",
    "Sonucu ters yazma: neden ve çözüm doğru olsa da asit yağmuru toprağı bazik değil asidik yapar.",
    null
  ],
  aciklama: `Asit yağmuru zincirinde neden, kükürt ve azot oksitlerini veren fosil yakıt yanmasıdır; sonuç suyun ve toprağın asitlenmesi, mermer ve metallerin aşınmasıdır; çözüm gaz salımını azaltmaktır.
Adım 1: Neden fosil yakıt yanması (ya da bu yanmadan çıkan kükürt ve azot oksitleri) olmalıdır; ormanların kesilmesi nedeni değildir. B elenir.
Adım 2: Sonuç suyun ya da toprağın asitlenmesi, mermerin aşınması olmalıdır; bazikleşme asit yağmuruyla uyumsuzdur. C elenir.
Adım 3: Çözüm gaz salımını azaltmalıdır; kükürt oranı yüksek kömür salımı artırır, A elenir. Güneş enerjisi yakıt yakmadığı için salımı azaltır.
Sağlama: Üç bilgi de yalnızca D kartında tutarlıdır.
Cevap D.`
},
{
  id: "fen-ab-372",
  kazanim: "F.8.4.4.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, etiketleri düşmüş üç kaptan birinde ayran, birinde kabartma tozlu su, birinde sofra tuzu çözeltisi olduğunu biliyor. Üç kaptaki sıvıları mavi turnusol, kırmızı turnusol ve zerdeçal kâğıdıyla deniyor ve sonuçları tabloya yazıyor.
**Bu sonuçlara göre K, L ve M kaplarında sırasıyla hangi sıvılar vardır?**`,
  gorsel: `<table class="tablo"><tr><th>Kap</th><th>Mavi turnusol</th><th>Kırmızı turnusol</th><th>Zerdeçal</th></tr><tr><td>K</td><td>Kırmızıya döndü</td><td>Değişmedi</td><td>Sarı kaldı</td></tr><tr><td>L</td><td>Değişmedi</td><td>Maviye döndü</td><td>Kırmızımsı kahverengi oldu</td></tr><tr><td>M</td><td>Değişmedi</td><td>Değişmedi</td><td>Sarı kaldı</td></tr></table>`,
  secenekler: [
    "Kabartma tozlu su, ayran, sofra tuzu çözeltisi",
    "Ayran, kabartma tozlu su, sofra tuzu çözeltisi",
    "Ayran, sofra tuzu çözeltisi, kabartma tozlu su",
    "Sofra tuzu çözeltisi, kabartma tozlu su, ayran"
  ],
  dogru: 1,
  hatalar: [
    "Asit ile bazı yer değiştirme: K mavi turnusolu kırmızıya çevirdiği için asittir, yani ayrandır; L bazdır.",
    null,
    "Baz ile nötrü yer değiştirme: L kırmızı turnusolu maviye çevirdiği için bazdır; nötr çözelti iki turnusolu da değiştirmez.",
    "Asit ile nötrü yer değiştirme: K asittir, nötr değildir; M ise hiçbir ayracı değiştirmediği için nötrdür."
  ],
  aciklama: `Ayran asit, kabartma tozlu su baz, sofra tuzu çözeltisi nötrdür; ayraçlar bu üç türü farklı biçimde gösterir.
Adım 1: K mavi turnusolu kırmızıya çevirdiği için asittir; asit olan ayrandır.
Adım 2: L kırmızı turnusolu maviye çevirdi ve zerdeçalı kahverengi yaptı; baz olan kabartma tozlu sudur.
Adım 3: M hiçbir turnusolu değiştirmedi, zerdeçal sarı kaldı; nötr olan sofra tuzu çözeltisidir.
Sağlama: Sıra ayran, kabartma tozlu su, sofra tuzu çözeltisidir.
Cevap B.`
},
{
  id: "fen-ab-373",
  kazanim: "F.8.4.4.4",
  kademe: 3,
  zorluk: 4,
  soru: `Beş sıvıyla yapılan deneylerde şu bilgiler elde ediliyor: K ve N sıvıları mavi turnusolu kırmızıya çeviriyor; N sıvısı, K sıvısından daha kuvvetli asit özelliği gösteriyor. L sıvısı iki turnusolun da rengini değiştirmiyor. M ve P sıvıları kırmızı turnusolu maviye çeviriyor; M sıvısı, P sıvısından daha zayıf baz özelliği gösteriyor.
**Bu sıvıların pH değerleri küçükten büyüğe doğru nasıl sıralanır?**`,
  gorsel: null,
  secenekler: [
    "K < N < L < M < P",
    "N < K < L < P < M",
    "N < K < L < M < P",
    "P < M < L < K < N"
  ],
  dogru: 2,
  hatalar: [
    "Asit sırasını ters kurma: daha kuvvetli asit olan N'nin pH değeri K'nin pH değerinden küçüktür.",
    "Baz sırasını ters kurma: daha zayıf baz olan M'nin pH değeri P'nin pH değerinden küçüktür.",
    null,
    "Bütün sırayı ters kurma: pH küçükten büyüğe giderken önce asitler, sonra nötr, en son bazlar gelir."
  ],
  aciklama: `pH sıralamasında önce türü bul: asit < nötr < baz. Aynı türün içinde asitte pH küçüldükçe, bazda pH büyüdükçe kuvvet artar.
Adım 1: K ve N asittir, L nötrdür, M ve P bazdır.
Adım 2: N, K'den daha kuvvetli asit olduğu için N'nin pH'ı daha küçüktür: N < K.
Adım 3: P, M'den daha kuvvetli baz olduğu için P'nin pH'ı daha büyüktür: M < P.
Adım 4: Asitler, nötr, bazlar sırasıyla dizilince N < K < L < M < P bulunur.
Sağlama: Sıra uçtan uca asit, nötr, baz düzenindedir.
Cevap C.`
},
{
  id: "fen-ab-374",
  kazanim: "F.8.4.4.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir öğrenci, etiketi okunmayan bir çözeltiyle dört ayrı deney yapıyor ve her deneyin sonucunu ayrı bir kâğıda yazıyor. Amacı, kâğıtlardan yalnızca birine bakarak çözeltinin asit olduğuna kesin olarak karar verebilmektir. Çözelti sulu bir çözeltidir.
**Aşağıdaki notlardan hangisi tek başına çözeltinin asit olduğunu kesinlikle gösterir?**`,
  gorsel: null,
  secenekler: [
    "Mavi turnusol kâğıdı kırmızıya döndü",
    "Ampullü devrede ampul yandı",
    "Zerdeçal kâğıdı sarı kaldı",
    "Kırmızı turnusol kâğıdının rengi değişmedi"
  ],
  dogru: 0,
  hatalar: [
    null,
    "İletkenliği asitlik sanma: hem asit hem baz çözeltisi ampulü yaktırır.",
    "Tek ayraca güvenme: zerdeçal asitte de nötrde de sarı kalır; çözelti nötr olabilir.",
    "Tek ayraca güvenme: kırmızı turnusol asitte de nötrde de değişmez; çözelti nötr olabilir."
  ],
  aciklama: `Bir çözeltinin asit olduğunu tek başına kanıtlayan sonuç, yalnızca asitte görülen bir değişimdir.
Adım 1: Mavi turnusolun kırmızıya dönmesi yalnızca asitte görülür; çözelti asittir.
Adım 2: Ampulün yanması asitte de bazda da görülür.
Adım 3: Zerdeçalın sarı kalması ve kırmızı turnusolun değişmemesi hem asitte hem nötrde görülür; nötr çözelti de olabilir.
Sık yapılan hata: Değişmeyen bir kâğıttan bir sonuca varmaya çalışmak.
Cevap A.`
},
{
  id: "fen-ab-375",
  kazanim: "F.8.4.4.7",
  kademe: 3,
  zorluk: 4,
  soru: `Bir araştırmacı, dört şehirde ölçtüğü yağmur suyu pH değerlerini, şehirlerde termik santral bulunup bulunmadığıyla ve trafik yoğunluğuyla birlikte tabloya yazıyor. Santrallerde fosil yakıt kullanılmaktadır.
**Bu verilere göre aşağıdakilerden hangisi kesinlikle doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Şehir</th><th>Termik santral</th><th>Trafik yoğunluğu</th><th>Yağmur suyunun pH değeri</th></tr><tr><td>A</td><td>Var</td><td>Yoğun</td><td>4</td></tr><tr><td>B</td><td>Var</td><td>Az</td><td>5</td></tr><tr><td>C</td><td>Yok</td><td>Yoğun</td><td>6</td></tr><tr><td>D</td><td>Yok</td><td>Az</td><td>7</td></tr></table>`,
  secenekler: [
    "Yağmur suyunun asitliğini yalnızca santralin varlığı belirler",
    "Trafiği yoğun şehirlerin yağmur suyu, trafiği az şehirlerinkinden daha asidiktir",
    "D şehrinin yağmur suyu bazik özellik gösteren bir sıvıdır",
    "Santrali olan şehirlerin yağmur suyu, santrali olmayanlarınkinden daha asidiktir"
  ],
  dogru: 3,
  hatalar: [
    "Veriden fazlasını söyleme: tabloda trafiği yoğun C şehrinin pH'ı 6'dır; trafiğin etkisi dışlanamaz, 'yalnızca' denemez.",
    "Genelleme hatası: C şehri (trafik yoğun, pH 6) trafiği az olan B şehrinden (pH 5) daha az asidiktir; yargı tüm şehirler için doğru değildir.",
    "Nötrü baz sanma: pH 7 nötrdür; D şehrinin yağmur suyu bazik değildir.",
    null
  ],
  aciklama: `Tabloda iki değişken (santral, trafik) bulunduğundan her yargıyı bütün şehirler için tek tek denemek gerekir.
Adım 1: Santrali olan A (4) ve B (5), santrali olmayan C (6) ve D (7) şehirlerinin hepsinden daha asidiktir; D yargısı doğru.
Adım 2: Trafiği yoğun A (4) ve C (6) ile trafiği az B (5) ve D (7) kıyaslanınca C, B'den daha az asidiktir; B yargısı genel olarak doğru değildir.
Adım 3: D şehrinin pH değeri 7'dir, nötrdür; bazik değildir. "Yalnızca santral" demek de veriyi aşar.
Sağlama: Her santralli şehrin pH'ı, her santralsiz şehrin pH'ından küçüktür.
Cevap D.`
}
);
