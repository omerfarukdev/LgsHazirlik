// Fen Bilimleri — İklim ve Hava Hareketleri: Kademe 3 (LGS Ayarı) yedeği, 50 soru (326-375)
// Kazanımlar: F.8.1.2.1 (iklim ile hava olayları arasındaki fark), F.8.1.2.2 (klimatoloji / iklim bilimci)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["iklim-hava-hareketleri"] = window.LGS_BANK["iklim-hava-hareketleri"] || []).push(
{
  id: "fen-ik-326",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir hava durumu uygulamasında bir ilçe için aşağıdaki bilgi kartı görünmektedir.
I. Kartın ilk iki satırı ilçedeki hava olaylarıyla ilgilidir.
II. Bugünkü sıcaklığın temmuz ortalamasından yüksek olması ilçenin ikliminin ısındığını gösterir.
III. Kartın son satırındaki değer ilçenin iklim özelliklerinden birini tanımlar.
**Buna göre numaralanmış ifadelerden hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Bilgi</th><th>Değer</th></tr><tr><td>Bugün saat 16.00</td><td>34 °C</td></tr><tr><td>Yarın için beklenen en yüksek sıcaklık</td><td>35 °C</td></tr><tr><td>Temmuz ayı ortalaması (1991–2020)</td><td>29 °C</td></tr></table>`,
  secenekler: [
    "Yalnız I",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 1,
  hatalar: [
    "Otuz yıllık ortalamayı iklim verisi saymama: III de doğrudur; 1991–2020 temmuz ortalaması uzun yıllara dayandığı için ilçenin iklim özelliklerinden biridir.",
    null,
    "Bir günün ölçümünden iklim sonucu çıkarma: bugünün ortalamadan sıcak olması yalnızca o günün havasını anlatır; üstelik bu şıkta I de dışarıda bırakılmıştır.",
    "Tek günlük sapmayı iklim değişimi sanma: II yanlıştır; iklimin ısındığı, dönem ortalamaları karşılaştırılarak anlaşılır, tek bir günle anlaşılmaz."
  ],
  aciklama: `Hava olayları kısa sürede gözlenen ya da beklenen olaylardır. İklim ise uzun yıllara dayanan ortalamalarla anlatılır.
Adım 1: İlk iki satırı oku. “Bugün saat 16.00” ve “yarın için beklenen” ifadeleri bir iki günü kapsar. Bunlar hava olaylarıdır. I doğrudur.
Adım 2: II'yi incele. 34 °C, 29 °C'lik ortalamadan yüksektir; ama bu fark tek bir günün farkıdır. Ortalamanın üstünde geçen bir gün iklimin ısındığını göstermez. II yanlıştır.
Adım 3: III'ü incele. 1991–2020, otuz yıllık bir dönemdir; bu dönemin temmuz ortalaması ilçenin iklim özelliklerinden biridir. III doğrudur.
Adım 4: Öyleyse doğru olanlar I ve III'tür.
Sık yapılan hata: Bir günün değerini ortalamayla karşılaştırıp “iklim değişti” demek. Ortalamadan sapan günler her yıl olur.
Cevap B.`
},
{
  id: "fen-ik-327",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kayak tesisinin işletmecisi, tesisin bulunduğu dağ için iki otuz yıllık dönemin ortalamalarını içeren aşağıdaki tabloyu hazırlamıştır. Ayrıca 2024 kışında dağın karla örtülü gün sayısının 71 olduğunu not etmiştir.
**Buna göre bu verilerle ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Dönem</th><th>Karla örtülü gün sayısı (yıllık ortalama)</th></tr><tr><td>1961–1990</td><td>112 gün</td></tr><tr><td>1991–2020</td><td>94 gün</td></tr></table>`,
  secenekler: [
    "2024 kışındaki 71 gün, dağın ikliminin değiştiğini tek başına kanıtlayan bir veridir.",
    "İki ortalamanın farklı çıkması, ölçümlerden birinin hatalı olduğunu gösterir.",
    "Kar yağışı bir hava olayı olduğundan bu tablo iklim hakkında bilgi vermez.",
    "İki dönem ortalamasının farkı, dağın iklim özelliklerinin değiştiğini gösterir."
  ],
  dogru: 3,
  hatalar: [
    "Tek bir kışı iklim kanıtı sayma: 71 gün yalnızca 2024 kışına aittir; iklim yargısı için dönem ortalamaları karşılaştırılır.",
    "Gerçek değişimi ölçüm hatası sanma: uzun yıllık ortalamaların dönemler arasında farklı çıkması iklimin zamanla değişebildiğinin işaretidir.",
    "Olayın türüne bakıp süreyi atlama: kar yağışı tek günde bir hava olayıdır; ama otuz yıllık karlı gün ortalaması iklim verisidir.",
    null
  ],
  aciklama: `İklim, uzun yıllara ait ortalamalarla anlatılır. Bir yerin ikliminin değişip değişmediğini anlamak için farklı dönemlerin ortalamaları karşılaştırılır.
Adım 1: Tablodaki iki satırın da otuz yıllık bir dönemin ortalaması olduğunu gör. Yani ikisi de iklim verisidir.
Adım 2: Ortalamalar 112 gün ve 94 gündür; karlı gün sayısı iki dönem arasında 18 gün azalmıştır. Bu fark, dağın iklim özelliklerinden birinin değiştiğini gösterir. D doğrudur.
Adım 3: A'yı ele. 71 gün tek bir kışa aittir; bir tek kış, hiçbir zaman “tek başına kanıt” olamaz.
Adım 4: B'yi ele. Dönemler farklı olduğu için ortalamaların farklı çıkması beklenir; bu bir hata belirtisi değildir.
Adım 5: C'yi ele. Kar yağışı tek bir günde hava olayıdır; ama otuz yılın karlı gün ortalaması iklimi anlatır.
Sık yapılan hata: “Kar = hava olayı” diye düşünüp tabloyu yok saymak. Belirleyici olan olayın adı değil, verinin kapsadığı süredir.
Cevap D.`
},
{
  id: "fen-ik-328",
  kazanim: "F.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir araştırma kurumunda görev yapan bir meteorolog ile bir iklim bilimci, kendilerine gelen soruları aşağıdaki tabloda gösterildiği gibi paylaştırmıştır.
**Buna göre numaralanmış soruların hangileri uygun uzmana verilmiştir?**`,
  gorsel: `<table class="tablo"><tr><th></th><th>Soru</th><th>Soruyu alan uzman</th></tr><tr><td>I</td><td>Hafta sonu kıyı kesimlerde dalgalı deniz uyarısı yapılmalı mı?</td><td>Meteorolog</td></tr><tr><td>II</td><td>Son kırk yılda bölgenin yaz sıcaklıkları nasıl bir eğilim göstermiştir?</td><td>İklim bilimci</td></tr><tr><td>III</td><td>Bu gece kentin üzerindeki yağmur bulutları ne zaman dağılacak?</td><td>İklim bilimci</td></tr></table>`,
  secenekler: [
    "I ve II",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "III'ü doğru sayma: bu gece ne zaman dağılacağı bir saat-gün ölçeğinde tahmindir, meteoroloğun işidir; II'yi de dışarıda bırakıyor.",
    "I'i dışarıda bırakma: hafta sonu için uyarı hazırlamak kısa süreli tahmindir ve meteoroloğa verilmesi doğrudur; III ise yanlış atanmıştır.",
    "Her atamayı uygun sayma: III'te kısa süreli bir hava olayı sorusu iklim bilimciye verilmiştir."
  ],
  aciklama: `Meteorolog, hava olaylarını inceleyip kısa süreli tahmin yapar. İklim bilimci (klimatolog) ise uzun yıllara ait kayıtlarla çalışır. Ayıran şey sorunun kapsadığı süredir.
Adım 1: I'i incele. “Hafta sonu” birkaç günlük bir süredir; uyarı hazırlamak meteoroloğun işidir. Atama uygundur.
Adım 2: II'yi incele. “Son kırk yıl” uzun bir süredir; eğilim çıkarmak iklim bilimcinin işidir. Atama uygundur.
Adım 3: III'ü incele. Bulutların bu gece ne zaman dağılacağı birkaç saatlik bir sorudur; bunu yanıtlayacak kişi meteorologdur. İklim bilimciye verilmesi uygun değildir.
Adım 4: Öyleyse uygun atamalar I ve II'dir.
Sağlama: Sorudaki zaman ifadesini bul. Saat ve gün varsa meteorolog, yıl ve on yıl varsa iklim bilimci.
Cevap A.`
},
{
  id: "fen-ik-329",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki iklim grafiğinde Dereova ilçesinin uzun yıllar aylık ortalama sıcaklık ve yağış değerleri verilmiştir.
**Buna göre bu grafikle ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<svg viewBox="0 0 560 335" role="img" aria-label="Dereova ilçesinin aylık ortalama sıcaklık ve yağış grafikleri"><text x="16" y="20" fill="currentColor" font-size="14" font-weight="bold">Aylık ortalama sıcaklık (°C)</text><line x1="60" y1="125" x2="545" y2="125" stroke="currentColor" stroke-width="1" opacity="0.4"/><polyline points="80,118.6 120,115.4 160,102.6 200,86.6 240,70.6 280,57.8 320,48.2 360,48.2 400,64.2 440,83.4 480,102.6 520,115.4" fill="none" stroke="var(--vurgu)" stroke-width="3"/><circle cx="80" cy="118.6" r="4" fill="var(--vurgu)"/><circle cx="120" cy="115.4" r="4" fill="var(--vurgu)"/><circle cx="160" cy="102.6" r="4" fill="var(--vurgu)"/><circle cx="200" cy="86.6" r="4" fill="var(--vurgu)"/><circle cx="240" cy="70.6" r="4" fill="var(--vurgu)"/><circle cx="280" cy="57.8" r="4" fill="var(--vurgu)"/><circle cx="320" cy="48.2" r="4" fill="var(--vurgu)"/><circle cx="360" cy="48.2" r="4" fill="var(--vurgu)"/><circle cx="400" cy="64.2" r="4" fill="var(--vurgu)"/><circle cx="440" cy="83.4" r="4" fill="var(--vurgu)"/><circle cx="480" cy="102.6" r="4" fill="var(--vurgu)"/><circle cx="520" cy="115.4" r="4" fill="var(--vurgu)"/><g fill="currentColor" font-size="14" text-anchor="middle"><text x="80" y="109.6">2</text><text x="120" y="106.4">3</text><text x="160" y="93.6">7</text><text x="200" y="77.6">12</text><text x="240" y="61.6">17</text><text x="280" y="48.8">21</text><text x="320" y="39.2">24</text><text x="360" y="39.2">24</text><text x="400" y="55.2">19</text><text x="440" y="74.4">13</text><text x="480" y="93.6">7</text><text x="520" y="106.4">3</text></g><text x="16" y="162" fill="currentColor" font-size="14" font-weight="bold">Aylık ortalama yağış (mm)</text><line x1="60" y1="300" x2="545" y2="300" stroke="currentColor" stroke-width="2"/><g fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="2"><rect x="66" y="195" width="28" height="105"/><rect x="106" y="207" width="28" height="93"/><rect x="146" y="217.5" width="28" height="82.5"/><rect x="186" y="225" width="28" height="75"/><rect x="226" y="228" width="28" height="72"/><rect x="266" y="258" width="28" height="42"/><rect x="306" y="273" width="28" height="27"/><rect x="346" y="277.5" width="28" height="22.5"/><rect x="386" y="252" width="28" height="48"/><rect x="426" y="222" width="28" height="78"/><rect x="466" y="201" width="28" height="99"/><rect x="506" y="183" width="28" height="117"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="80" y="189">70</text><text x="120" y="201">62</text><text x="160" y="211.5">55</text><text x="200" y="219">50</text><text x="240" y="222">48</text><text x="280" y="252">28</text><text x="320" y="267">18</text><text x="360" y="271.5">15</text><text x="400" y="246">32</text><text x="440" y="216">52</text><text x="480" y="195">66</text><text x="520" y="177">78</text><text x="80" y="322">Oca</text><text x="120" y="322">Şub</text><text x="160" y="322">Mar</text><text x="200" y="322">Nis</text><text x="240" y="322">May</text><text x="280" y="322">Haz</text><text x="320" y="322">Tem</text><text x="360" y="322">Ağu</text><text x="400" y="322">Eyl</text><text x="440" y="322">Eki</text><text x="480" y="322">Kas</text><text x="520" y="322">Ara</text></g></svg>`,
  secenekler: [
    "Ortalama sıcaklığın 10 °C'nin altında kaldığı aylarda yağış 60 mm'nin altındadır.",
    "Yağışın 50 mm'nin altına indiği ay sayısı üçtür.",
    "Yağışı 30 mm'nin altında olan her ayın ortalama sıcaklığı 20 °C'nin üzerindedir.",
    "Yağışın en fazla olduğu ay, sıcaklığın en yüksek olduğu aydır."
  ],
  dogru: 2,
  hatalar: [
    "Kış aylarını eksik okuma: ocak ayı 2 °C iken 70 mm yağış düşer; bu değer 60 mm'nin üzerindedir.",
    "Sütunları göz kararı sayma: 50 mm'nin altında kalan beş ay vardır (mayıs, haziran, temmuz, ağustos, eylül).",
    null,
    "İki tepe noktasını karıştırma: yağış aralıkta, sıcaklık temmuz ve ağustosta en yüksektir; bu aylar aynı değildir."
  ],
  aciklama: `İklim grafiğinde üstteki çizgi sıcaklığı, alttaki sütunlar yağışı gösterir. Ortalamalar uzun yıllara dayandığı için grafik ilçenin iklimini anlatır.
Adım 1: Yağışı 30 mm'nin altında olan ayları bul: haziran (28 mm), temmuz (18 mm) ve ağustos (15 mm). Eylül 32 mm olduğu için dışarıda kalır.
Adım 2: Bu üç ayın sıcaklıklarına bak: 21 °C, 24 °C ve 24 °C. Üçü de 20 °C'nin üzerindedir. C'deki “her ay” sözcüğü veriyle tam olarak desteklenir.
Adım 3: A'yı sına. Ocak 2 °C'dir ve yağışı 70 mm'dir; 60 mm'nin altı değildir. A yanlıştır.
Adım 4: B'yi sına. 50 mm'nin altındaki aylar: mayıs, haziran, temmuz, ağustos, eylül; beş ay eder.
Adım 5: D'yi sına. En çok yağış aralıkta (78 mm), en yüksek sıcaklık temmuz–ağustostadır.
Sağlama: Bu ilçede yağış kışın, sıcaklık yazın en yüksektir; yani iki çizginin zirveleri farklı aylardadır.
Cevap C.`
},
{
  id: "fen-ik-330",
  kazanim: "F.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Üç araştırmacı, elindeki verilerle tabloda yazılı sorulara yanıt aramaktadır.
**Buna göre hangi araştırmacıların verisi, sorusunu yanıtlamak için süre bakımından yeterlidir ve çalışması iklim biliminin alanına girer?**`,
  gorsel: `<table class="tablo"><tr><th>Araştırmacı</th><th>Elindeki veri</th><th>Yanıt aradığı soru</th></tr><tr><td>K</td><td>1–7 Mart arasında her saat ölçülen sıcaklıklar</td><td>Bu hafta ilçede don riski var mı?</td></tr><tr><td>L</td><td>1970–2020 arası yıllık ortalama sıcaklıklar</td><td>Bölgenin sıcaklık düzeni elli yılda değişti mi?</td></tr><tr><td>M</td><td>Son üç yılın aylık yağış toplamları</td><td>Bölgenin iklimi yağışlı mı?</td></tr></table>`,
  secenekler: [
    "Yalnız K",
    "K ve M",
    "Yalnız L",
    "L ve M"
  ],
  dogru: 2,
  hatalar: [
    "Hava olayı çalışmasını iklim çalışması sanma: K'nin verisi bir haftalıktır ve sorusu bu haftanın don riskidir; bu meteoroloğun alanıdır.",
    "Üç yılı uzun süre sayma: M'nin verisi üç yıllıktır; iklimden söz edebilmek için en az otuz yıllık kayıt gerekir. K da kısa süreli bir çalışmadır.",
    null,
    "M'yi de iklim çalışması sayma: üç yıllık yağış toplamları bölgenin yağışlı olup olmadığına karar vermek için yetersizdir."
  ],
  aciklama: `İklim, uzun yıllara ait ortalamalarla anlatılır; bir çalışmanın iklim biliminin alanına girmesi için hem sorunun uzun dönemli olması hem de verinin sorunun süresine uygun olması gerekir.
Adım 1: K'yi incele. Veri bir haftalıktır, soru da “bu hafta” ile ilgilidir. Bu bir hava olayı çalışmasıdır; meteorolojinin alanına girer.
Adım 2: L'yi incele. Veri elli yıllıktır, soru da elli yıllık değişimi sormaktadır. Süre soruya uygundur ve çalışma iklim bilimine aittir.
Adım 3: M'yi incele. Soru “bölgenin iklimi” ile ilgilidir; ama veri yalnızca üç yıllıktır. Otuz yıldan çok kısa olduğu için bu veriyle iklim yargısına varılamaz.
Adım 4: Süre bakımından yeterli ve iklim bilimine ait olan tek çalışma L'nindir.
Sık yapılan hata: Konunun “iklim” sözcüğünü taşımasına bakıp verinin süresini denetlememek.
Cevap C.`
},
{
  id: "fen-ik-331",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir televizyon kanalında hava durumu sunucusu şöyle demiştir: “Bu kış kentimizde karla kaplı gün sayısı, uzun yıllar ortalamasının 8 gün altında kaldı.”
I. Sunucu, bu kışın değerini uzun yıllar ortalamasıyla karşılaştırmıştır.
II. Karla kaplı gün sayısı, kentin iklimini tek başına tanımlar.
III. Haberdeki uzun yıllar ortalaması hava olayı bilgisi, bu kışın değeri ise iklim bilgisidir.
**Buna göre numaralanmış ifadelerden hangileri doğrudur?**`,
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
    "Tek ölçütü iklim sanma: II yanlıştır; iklim sıcaklık, yağış ve bunların yıl içindeki dağılımı gibi birçok özellikle anlatılır, yalnızca karlı gün sayısıyla tanımlanmaz. Üstelik doğru olan I dışarıda bırakılmıştır.",
    "Sınıflamayı ters çevirme: III yanlıştır; uzun yıllar ortalaması iklim bilgisidir, tek bir kışın değeri ise iklim bilgisi sayılmaz.",
    "İki yanlışı birlikte doğru sayma: II tek ölçütü iklim sayar, III ise sınıflamayı ters çevirir; ikisi de yanlıştır ve doğru olan I dışarıda kalmıştır."
  ],
  aciklama: `İklim, uzun yıllara dayanan ortalamalarla ve birden çok özellikle (sıcaklık, yağış, bunların yıl içindeki dağılımı) anlatılır. Tek bir mevsime ait değer bir ortalama değil, o mevsimin ölçümüdür.
Adım 1: I'i incele. Sunucu, “bu kış” değerini “uzun yıllar ortalaması” ile kıyaslıyor. I doğrudur.
Adım 2: II'yi incele. Karla kaplı gün sayısı iklimin yalnızca bir parçasıdır; sıcaklık, yağış miktarı ve yağışın dağılımı da iklimi oluşturur. Tek bir ölçüt iklimi tanımlamaz. II yanlıştır.
Adım 3: III'ü incele. Uzun yıllar ortalaması iklim bilgisidir; tek bir kışın değeri ise o kışa özgü bir ölçümdür. Sınıflama tersine çevrilmiştir. III yanlıştır.
Adım 4: Doğru olan yalnızca I'dir.
Sık yapılan hata: “Uzun yıllar ortalaması” ile “bu yılın değeri” sınıflarını birbirine karıştırmak. Ortalama iklimi, o yılın değeri ise o yılın havasını anlatır.
Cevap A.`
},
{
  id: "fen-ik-332",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir fen öğretmeni, tahtaya yazdığı yedi cümleden kaçının iklimi anlattığını öğrencilerine sormuştur.
**Buna göre bu cümlelerden kaç tanesi iklimle ilgilidir?**`,
  gorsel: `<table class="tablo"><tr><th></th><th>Cümle</th></tr><tr><td>1</td><td>Geçen kış ilçemizde on iki gün kar yağdı.</td></tr><tr><td>2</td><td>Akdeniz kıyılarında yazlar sıcak ve kurak geçer.</td></tr><tr><td>3</td><td>Dün akşam kentin batısında dolu yağdı.</td></tr><tr><td>4</td><td>Doğu Karadeniz'de yağış yılın bütün mevsimlerine yayılır.</td></tr><tr><td>5</td><td>Kentin 1991–2020 ocak ayı ortalama sıcaklığı 3 °C'dir.</td></tr><tr><td>6</td><td>Bu sabah ilk dersten önce kentte yoğun sis vardı.</td></tr><tr><td>7</td><td>İç Anadolu'da kışlar uzun yıllardır soğuk geçer.</td></tr></table>`,
  secenekler: [
    "1",
    "2",
    "3",
    "4"
  ],
  dogru: 3,
  hatalar: [
    "Yalnız bir cümleyi iklim sayma: 2, 4, 5 ve 7. cümlelerin hepsi uzun yılları anlatır; tek bir cümleyi seçmek diğerlerini gözden kaçırmaktır.",
    "İki cümleyle yetinme: “uzun yıllardır”, “yılın bütün mevsimleri” ve “1991–2020” ifadeleri toplam dört iklim cümlesini ayırt ettirir.",
    "Bir iklim cümlesini atlama: genelde ocak ortalamasını anlatan 5. cümle iklim cümlesidir ve sayıldığında toplam dörde çıkar; üçte kalmak bir cümleyi gözden kaçırmaktır.",
    null
  ],
  aciklama: `Her cümlenin kapsadığı süreye bak: gün ve tek bir mevsim hava olayını, uzun yıllar iklimi anlatır.
Adım 1: 1. cümle: “Geçen kış” tek bir kıştır. Hava olayıdır.
Adım 2: 2. cümle: Akdeniz kıyılarında yazların her yıl sıcak ve kurak geçmesi genel bir düzeni anlatır. İklimdir.
Adım 3: 3. cümle: “Dün akşam” bir olaydır. Hava olayıdır.
Adım 4: 4. cümle: Yağışın yıl boyunca dağılması bölgenin genel düzenidir. İklimdir.
Adım 5: 5. cümle: 1991–2020 otuz yıllık bir dönemin ocak ortalamasıdır. İklimdir.
Adım 6: 6. cümle: “Bu sabah” bir sabahlık süredir. Hava olayıdır.
Adım 7: 7. cümle: “Uzun yıllardır” ifadesi iklime işaret eder. İklimdir.
Adım 8: İklim cümleleri 2, 4, 5 ve 7'dir; toplam dört cümle eder.
Sağlama: Hava olayı cümleleri 1, 3 ve 6'dır; 3 + 4 = 7 ettiği için sayım tutuyor.
Cevap D.`
},
{
  id: "fen-ik-333",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir belediye, aşağıdaki üç kararı vermeden önce farklı bilgi kaynaklarına başvuracaktır.
I. Bu hafta sonu yapılacak fidan şenliğinin açık havada mı salonda mı düzenleneceği
II. Yeni açılacak parkta kullanılacak bitki türlerinin seçimi
III. Bu gece yolların buzlanmaya karşı tuzlanıp tuzlanmayacağı
**Buna göre bu kararlardan hangilerinin verilmesinde öncelikle ilçenin uzun yıllara ait iklim verisinden yararlanılmalıdır?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "Yalnız III",
    "I ve III"
  ],
  dogru: 1,
  hatalar: [
    "Hafta sonunu uzun dönemli sayma: şenliğin yeri birkaç gün sonrasının hava tahminine bakılarak belirlenir.",
    null,
    "Bu geceyi uzun dönemli sayma: buzlanma uyarısı bir geceyi kapsar; kararı hava tahmini belirler.",
    "İki kısa süreli kararı iklim kararı sayma: I birkaç günlük, III tek gecelik bir karardır; ikisinde de hava tahmini kullanılır."
  ],
  aciklama: `Kararın etkisinin süresi, hangi bilginin kullanılacağını belirler. Birkaç gün ya da bir gece sürecek kararlarda hava tahmini, yıllarca sürecek kararlarda iklim verisi kullanılır.
Adım 1: I'i incele. Hafta sonu şenliği birkaç günlüktür; karar hava tahminine bakılarak verilir.
Adım 2: III'ü incele. Bu gece yolların tuzlanması tek bir geceyi ilgilendirir; yine hava tahmini gerekir.
Adım 3: II'yi incele. Parka dikilecek bitkiler yıllarca orada yaşayacaktır. Hangi bitkinin o ilçede yaşayabileceğini, bölgenin yıllar boyunca nasıl bir sıcaklık ve yağış düzenine sahip olduğu belirler. Bu karar uzun yıllık iklim verisine dayanmalıdır.
Adım 4: Öyleyse yalnız II'de iklim verisi gerekir.
Sağlama: Kararın etkisi kaç gün sürecekse veri de o ölçekte olmalıdır; yıllar sürecekse veri de yıllarla ölçülmelidir.
Cevap B.`
},
{
  id: "fen-ik-334",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Grafikte Ardıç ilçesinde 2011–2020 yıllarının her biri için yıllık ortalama sıcaklığın, ilçenin 1961–1990 dönemi ortalamasından farkı gösterilmiştir. Pozitif değerler o yılın bu ortalamadan sıcak, negatif değerler serin geçtiğini belirtir.
**Buna göre bu grafikle ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<svg viewBox="0 0 560 290" role="img" aria-label="Ardıç ilçesinde yıllık ortalama sıcaklığın 1961-1990 ortalamasından farkını gösteren sütun grafiği"><text x="16" y="20" fill="currentColor" font-size="14" font-weight="bold">Yıllık ortalama sıcaklığın 1961–1990 ortalamasına göre farkı (°C)</text><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="70" y1="70" x2="540" y2="70"/><line x1="70" y1="120" x2="540" y2="120"/></g><line x1="70" y1="170" x2="540" y2="170" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="14" text-anchor="end"><text x="62" y="75">+1,0</text><text x="62" y="125">+0,5</text><text x="62" y="175">0</text><text x="62" y="225">−0,5</text></g><g fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"><rect x="80" y="170" width="30" height="40"/><rect x="126" y="140" width="30" height="30"/><rect x="172" y="160" width="30" height="10"/><rect x="218" y="170" width="30" height="20"/><rect x="264" y="110" width="30" height="60"/><rect x="310" y="80" width="30" height="90"/><rect x="356" y="150" width="30" height="20"/><rect x="402" y="100" width="30" height="70"/><rect x="448" y="120" width="30" height="50"/><rect x="494" y="70" width="30" height="100"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="95" y="226">−0,4</text><text x="95" y="270">2011</text><text x="141" y="134">+0,3</text><text x="141" y="270">2012</text><text x="187" y="154">+0,1</text><text x="187" y="270">2013</text><text x="233" y="206">−0,2</text><text x="233" y="270">2014</text><text x="279" y="104">+0,6</text><text x="279" y="270">2015</text><text x="325" y="74">+0,9</text><text x="325" y="270">2016</text><text x="371" y="144">+0,2</text><text x="371" y="270">2017</text><text x="417" y="94">+0,7</text><text x="417" y="270">2018</text><text x="463" y="114">+0,5</text><text x="463" y="270">2019</text><text x="509" y="64">+1,0</text><text x="509" y="270">2020</text></g></svg>`,
  secenekler: [
    "2014 yılı, 1961–1990 ortalamasından daha sıcak geçen yıllar arasındadır.",
    "On yılın sekizi, 1961–1990 ortalamasından sıcak geçmiştir.",
    "Ortalamadan en büyük sapma, grafikteki yıllar içinde 2016'da görülmüştür.",
    "Grafikteki yılların her biri, bir öncekinden daha sıcak geçmiştir."
  ],
  dogru: 1,
  hatalar: [
    "Negatif değeri pozitif okuma: 2014'ün farkı −0,2 °C'dir; yani o yıl ortalamadan serindir.",
    null,
    "En yüksek sütunu yanlış eşleştirme: 2016'daki fark +0,9 °C, 2020'deki fark +1,0 °C'dir; en büyük sapma 2020'dedir.",
    "Eğilimi kesin kurala çevirme: çizgi genel olarak yükselse de 2013, 2014 ve 2017 gibi yıllarda bir öncekinden düşüş vardır."
  ],
  aciklama: `Bu tür grafiklerde sıfır çizgisi karşılaştırma ölçüsüdür (burada 1961–1990 ortalaması). Sütun sıfırın üstündeyse o yıl ortalamadan sıcak, altındaysa serindir.
Adım 1: Negatif sütunları bul: 2011 (−0,4) ve 2014 (−0,2). Bu iki yıl ortalamadan serin geçmiştir; geriye sekiz yıl kalır.
Adım 2: Pozitif sütunlar 2012, 2013, 2015, 2016, 2017, 2018, 2019 ve 2020'dir. Sayısı sekizdir. B doğrudur.
Adım 3: A'yı ele. 2014 sütunu sıfırın altındadır; ortalamadan serindir.
Adım 4: C'yi ele. En uzun sütun 2020'ninkidir (+1,0); 2016 (+0,9) ikinci sıradadır.
Adım 5: D'yi ele. 2013 (+0,1), 2012'den (+0,3) düşüktür; yani “her yıl” ifadesi yanlıştır.
Sık yapılan hata: Yükselme eğilimi gören öğrencinin “her yıl arttı” demesi. Eğilim genel gidişi anlatır; tek tek yıllarda iniş çıkış olur.
Cevap B.`
},
{
  id: "fen-ik-335",
  kazanim: "F.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir üniversitedeki üç laboratuvarın çalışmaları tabloda verilmiştir.
**Buna göre bu laboratuvarların çalışmaları, ilgili bilim dalı bakımından aşağıdakilerin hangisinde doğru eşleştirilmiştir?**`,
  gorsel: `<table class="tablo"><tr><th>Laboratuvar</th><th>Çalışması</th></tr><tr><td>X</td><td>Her sabah hava balonu bırakıp önümüzdeki 48 saatin yağış tahminini hazırlar.</td></tr><tr><td>Y</td><td>Buz silindirleri ve ağaç gövdelerindeki yıllık halkaları inceleyerek son 800 yılın yağış ve sıcaklık koşullarını araştırır.</td></tr><tr><td>Z</td><td>Yakındaki havalimanı için bu öğleden sonra sis çıkıp çıkmayacağını bildirir.</td></tr></table>`,
  secenekler: [
    "X: iklim bilimi — Y: meteoroloji — Z: iklim bilimi",
    "X: iklim bilimi — Y: iklim bilimi — Z: meteoroloji",
    "X: meteoroloji — Y: iklim bilimi — Z: meteoroloji",
    "X: meteoroloji — Y: meteoroloji — Z: iklim bilimi"
  ],
  dogru: 2,
  hatalar: [
    "Üç eşleştirmeyi de tersine çevirme: 48 saatlik tahmin ve öğleden sonraki sis meteorolojinin, 800 yıllık kayıt iklim biliminin konusudur.",
    "X'i iklim bilimine verme: 48 saatlik tahmin kısa süreli olduğu için meteorolojinin işidir.",
    null,
    "Uzun süreli kaydı meteorolojiye, kısa süreli sis tahminini iklim bilimine verme: Y ve Z'nin eşleşmeleri ters çevrilmiştir."
  ],
  aciklama: `Meteoroloji hava olaylarını ve kısa süreli tahminleri, iklim bilimi (klimatoloji) uzun yıllara ait kayıtları inceler. Aracın değil, kapsadığı sürenin önemi vardır.
Adım 1: X'i incele. Önümüzdeki 48 saatin tahmini kısa sürelidir. Meteoroloji.
Adım 2: Y'yi incele. Buz silindirleri ve ağaç halkaları geçmişin iklimi hakkında ipucu verir; son 800 yıl çok uzun bir süredir. İklim bilimi.
Adım 3: Z'yi incele. “Bu öğleden sonra” birkaç saatlik bir süredir. Meteoroloji.
Adım 4: Doğru eşleştirme X: meteoroloji, Y: iklim bilimi, Z: meteorolojidir.
Sık yapılan hata: Buz silindirleri, ağaç halkaları gibi “bilimsel” görünen yöntemleri hep iklim bilimine bağlamak ya da balonla yapılan ölçümleri iklim bilimine vermek. Belirleyici olan sorulan sürenin uzunluğudur.
Cevap C.`
},
{
  id: "fen-ik-336",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir aile Karadeniz'deki bir kente tatile gidecektir. Aile iki karar verecektir:
1. karar: Gelecek yıl tatile gitmek için haziran, temmuz ve ağustos aylarından hangisinin genelde daha az yağışlı olduğu
2. karar: Bu hafta sonu başlayacak tatilin ilk günü şemsiye alınıp alınmayacağı
Ailenin önündeki bilgi kaynakları tabloda verilmiştir.
**Buna göre aile hangi kararı hangi kaynağa bakarak vermelidir?**`,
  gorsel: `<table class="tablo"><tr><th>Kaynak</th><th>İçeriği</th></tr><tr><td>1</td><td>Kentin beş günlük hava tahmini</td></tr><tr><td>2</td><td>Kentin 1991–2020 aylık ortalama sıcaklık ve yağış tablosu</td></tr><tr><td>3</td><td>Kentte dün ölçülen sıcaklık ve yağış değerleri</td></tr></table>`,
  secenekler: [
    "1. karar: Kaynak 2 — 2. karar: Kaynak 1",
    "1. karar: Kaynak 1 — 2. karar: Kaynak 2",
    "1. karar: Kaynak 3 — 2. karar: Kaynak 1",
    "1. karar: Kaynak 2 — 2. karar: Kaynak 3"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Kaynakları ters kullanma: ay seçimi için beş günlük tahmin yetmez; hafta sonu kararı için de aylık ortalama tablosu yeterli bilgi vermez.",
    "Dünkü ölçümü ay seçiminde kullanma: bir günün ölçümü hangi ayın genelde daha az yağışlı olduğunu göstermez.",
    "Dünkü ölçümü bu hafta sonu için kullanma: dün yağmur yağmış olması hafta sonu yağmur yağacağı anlamına gelmez, tahmin gerekir."
  ],
  aciklama: `İki kararın etkisini kaç gün ya da kaç yıl kapsadığına göre bilgi kaynağını seç.
Adım 1: 1. karar “genelde” ve “hangi ay” ifadeleriyle uzun dönemli bir bilgi ister. Bunu 1991–2020 aylık ortalamalarını veren Kaynak 2 sağlar.
Adım 2: 2. karar bu hafta sonuyla ilgilidir; yani birkaç gün sonrasının havasını sorar. Bunun için beş günlük tahmin olan Kaynak 1 gerekir.
Adım 3: Kaynak 3 dün ölçülmüş değerlerdir. Dün yaşanan hava ne ay seçimine ne de hafta sonuna ışık tutar.
Adım 4: Öyleyse 1. karar Kaynak 2'ye, 2. karar Kaynak 1'e bakılarak verilmelidir.
Sağlama: Ay seçimi için tahmin yetmez, çünkü tahmin yalnızca birkaç gün ilerisini gösterir; şemsiye kararı için de ortalama yetmez, çünkü ortalama belirli bir günü söylemez.
Cevap A.`
},
{
  id: "fen-ik-337",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Tabloda üç kentin temmuz ayına ait uzun yıllar ortalama sıcaklıkları ile 2024 temmuz ayında ölçülen ortalama sıcaklıklar verilmiştir.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Kent</th><th>Temmuz ortalaması (1991–2020)</th><th>Temmuz 2024 ortalaması</th></tr><tr><td>P</td><td>27,0 °C</td><td>28,5 °C</td></tr><tr><td>R</td><td>22,4 °C</td><td>21,8 °C</td></tr><tr><td>S</td><td>24,6 °C</td><td>26,0 °C</td></tr></table>`,
  secenekler: [
    "P'nin temmuz ayı iklim ortalaması, tablodaki en yüksek değer olan 28,5 °C'dir.",
    "R'nin 2024 temmuz ortalaması, R için bir iklim verisi sayılır.",
    "S'nin temmuz ayı iklim ortalaması, 2024'te ölçülen 26,0 °C'dir.",
    "P'nin 2024 temmuzu, uzun yıllar ortalamasından 1,5 °C sıcaktır."
  ],
  dogru: 3,
  hatalar: [
    "Sütunları karıştırma: 28,5 °C, P'nin 2024 temmuzunun ortalamasıdır; uzun yıllar ortalaması 27,0 °C'dir.",
    "Tek ayı iklim verisi sayma: yalnızca 2024 temmuzuna ait ortalama, kısa süreli bir ölçümdür ve R'nin iklim verisi değildir.",
    "Sütunları karıştırma: 26,0 °C, S'nin 2024 temmuzunun ortalamasıdır; uzun yıllar ortalaması 24,6 °C'dir.",
    null
  ],
  aciklama: `Tablonun ikinci sütunu 1991–2020 dönemine ait, yani otuz yıllık ortalamalardır; bunlar kentlerin temmuz ayı iklim değerleridir. Üçüncü sütun ise yalnızca 2024 temmuzunu anlatır.
Adım 1: Sütunları ayır. İklim verisi ikinci sütundur; üçüncü sütun tek bir ayın ölçümüdür.
Adım 2: A ve C, 2024 değerlerini “iklim ortalaması” diye sunuyor; sütunları karıştırmışlardır.
Adım 3: B, R'nin 2024 değerini iklim verisi sayıyor. Tek bir ayın ortalaması iklim verisi sayılmaz.
Adım 4: D'yi sına. P'nin 2024 temmuzu 28,5 °C, uzun yıllar ortalaması 27,0 °C'dir. Fark: 28,5 − 27,0 = 1,5 °C. D doğrudur.
Sağlama: Üç kentte de 2024 değeri ortalamadan farklıdır (P ve S'de sıcak, R'de serin); ama bu farklar tek bir temmuzun sapmasıdır ve iklimin değiştiğini göstermez.
Cevap D.`
},
{
  id: "fen-ik-338",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir haber sitesinin ana sayfasında dört başlık yan yana yer almıştır.
**Buna göre numaralanmış başlıklardan hangileri iklimle ilgilidir?**`,
  gorsel: `<table class="tablo"><tr><th></th><th>Başlık</th></tr><tr><td>I</td><td>Bu hafta sonu İç Anadolu'da kuvvetli rüzgâr bekleniyor</td></tr><tr><td>II</td><td>Marmara'da kırk yıllık kayıtlara göre yazlar eskisine göre 12 gün uzadı</td></tr><tr><td>III</td><td>Meteoroloji bu gece sıcaklığın −8 °C'ye düşeceğini duyurdu</td></tr><tr><td>IV</td><td>Kıyı kentlerinde nisan yağışlarının son otuz yılda azaldığı bildirildi</td></tr></table>`,
  secenekler: [
    "I ve II",
    "I ve IV",
    "II ve IV",
    "III ve IV"
  ],
  dogru: 2,
  hatalar: [
    "I'i iklim başlığı sayma: hafta sonu için beklenen rüzgâr kısa süreli bir hava tahminidir; IV'ü de dışarıda bırakıyor.",
    "Hafta sonu tahminini iklim sayma: I birkaç günlüktür; II'yi de gözden kaçırıyor.",
    null,
    "Bir geceyi iklim sayma: III bu geceye ait bir hava tahminidir; II'yi de dışarıda bırakıyor."
  ],
  aciklama: `Bir başlığın iklimle mi hava olaylarıyla mı ilgili olduğunu, anlattığı sürenin uzunluğu belirler.
Adım 1: I'i incele. “Bu hafta sonu” birkaç günlüktür. Hava olayı.
Adım 2: II'yi incele. “Kırk yıllık kayıtlara göre yazlar 12 gün uzadı” ifadesi onlarca yılın karşılaştırmasıdır. İklim.
Adım 3: III'ü incele. “Bu gece” tek bir geceyi anlatır. Hava olayı.
Adım 4: IV'ü incele. “Son otuz yılda nisan yağışlarının azalması” uzun dönemli bir eğilimdir. İklim.
Adım 5: İklimle ilgili başlıklar II ve IV'tür.
Sık yapılan hata: Başlıktaki kurum adına bakıp karar vermek. “Meteoroloji” sözcüğünün geçmesi başlığı hava olayı yapmaz; ölçüt, anlatılan sürenin kaç gün ya da kaç yıl olduğudur.
Cevap C.`
},
{
  id: "fen-ik-339",
  kazanim: "F.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir iklim bilimci, bir ilçede yağışın yıl içinde mevsimlere nasıl dağıldığını ve bu dağılımın değişip değişmediğini araştırmaktadır. Elindeki veri setleri şunlardır:
I. 1961–1990 ve 1991–2020 dönemlerine ait mevsimlik ortalama yağış tabloları
II. Son altmış yılın aylık yağış toplamları
III. Son altmış yılın yıllık toplam yağış değerleri (aylara ayrılmamış)
**Buna göre iklim bilimci bu araştırmada hangi veri setlerinden yararlanabilir?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "Yalnız III",
    "I ve II"
  ],
  dogru: 3,
  hatalar: [
    "II'yi dışarıda bırakma: aylık toplamlar mevsimlere gruplanabilir ve altmış yıl boyunca karşılaştırılabilir; bu veri de işe yarar.",
    "I'i dışarıda bırakma: mevsimlik ortalamaları iki ayrı dönem için veren tablolar, dağılımın değişip değişmediğini doğrudan gösterir.",
    "Yıllık toplamı yeterli sayma: yıllık toplam yağış, yağışın mevsimlere nasıl dağıldığını göstermez.",
    null
  ],
  aciklama: `İklim bilimci, uzun yıllara ait kayıtları karşılaştırarak bir bölgenin iklim özelliklerini ve bunlardaki değişimi araştırır. Verinin işe yarayıp yaramadığı, sorulan soruya göre belirlenir.
Adım 1: Araştırma sorusunu ayır. Soru, yağışın mevsimlere dağılımı ve bu dağılımın zamanla değişip değişmediğidir. Yani veri hem mevsim ayrıntısı taşımalı hem de uzun süreyi kapsamalıdır.
Adım 2: I'i incele. İki ayrı otuz yıllık dönemin mevsimlik ortalamaları doğrudan karşılaştırılabilir. Yararlıdır.
Adım 3: II'yi incele. Altmış yıllık aylık veriler mevsimlere toplanabilir; hem uzun süreyi hem de ayrıntıyı taşır. Yararlıdır.
Adım 4: III'ü incele. Yıllık toplamda ayrıntı kaybolur; yağışın hangi mevsimde düştüğü anlaşılmaz. Soruyu yanıtlamak için yetersizdir.
Adım 5: Yararlı veri setleri I ve II'dir.
Sık yapılan hata: “Uzun süreli veri her zaman yeterlidir” demek. Veri süre bakımından uygun olsa bile sorulan ayrıntıyı içermiyorsa işe yaramaz.
Cevap D.`
},
{
  id: "fen-ik-340",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Tabloda bir bölgenin iki ayrı otuz yıllık dönemdeki yıllık ortalama don olaylı gün sayısı ile en yüksek sıcaklığın 35 °C ve üzerine çıktığı (çok sıcak) gün sayısı verilmiştir.
I. İki dönem arasında don olaylı gün sayısı azalmıştır.
II. 1991–2020 döneminin her yılında tam 29 gün don olmuştur.
III. Çok sıcak gün sayısındaki artış, aynı bölgede ocak ayı sıcaklıklarının da yükseldiğini gösterir.
**Buna göre numaralanmış ifadelerden hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Dönem</th><th>Don olaylı gün sayısı (yıllık ortalama)</th><th>Çok sıcak gün sayısı (yıllık ortalama)</th></tr><tr><td>1961–1990</td><td>38</td><td>6</td></tr><tr><td>1991–2020</td><td>29</td><td>14</td></tr></table>`,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Ortalamayı her yıla yayma: 29, otuz yılın ortalamasıdır; bazı yıllarda don olaylı gün sayısı daha az, bazılarında daha çok olmuştur.",
    "Tabloda olmayan bilgiyi sonuca yazma: tabloda ocak ayı sıcaklığına ait veri yoktur; III'e bu tablodan ulaşılamaz.",
    "Her iki hatayı birden yapma: II ortalamayı her yıla yayar, III tabloda olmayan ocak sıcaklığı hakkında sonuç çıkarır."
  ],
  aciklama: `İki dönemin ortalamalarını karşılaştırarak bir bölgenin ikliminde değişme olup olmadığına bakılır. Ama tablodaki bilginin ötesine geçilmez.
Adım 1: I'i incele. Don olaylı gün sayısı 38'den 29'a inmiştir. I doğrudur.
Adım 2: II'yi incele. 29, otuz yılın ortalamasıdır. Ortalama, her yılın aynı olduğu anlamına gelmez. II yanlıştır.
Adım 3: III'ü incele. Tabloda yalnızca iki sütun vardır: don olaylı gün sayısı ve çok sıcak gün sayısı. Ocak ayı ortalamasına dair hiçbir veri yoktur; bu yüzden III'e tablodan ulaşılamaz. III yanlıştır.
Adım 4: Doğru olan yalnızca I'dir.
Sık yapılan hata: Bir sütundaki değişimi başka bir büyüklüğe taşımak. Tabloda olmayan bir büyüklük hakkında yargı kuramazsın.
Cevap A.`
},
{
  id: "fen-ik-341",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki grafikte K ve L kentlerinin aylık ortalama sıcaklıkları gösterilmiştir. Değerler uzun yıllar ortalamasıdır.
**Buna göre bu grafikle ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<svg viewBox="0 0 560 290" role="img" aria-label="K ve L kentlerinin aylık ortalama sıcaklıklarını gösteren çizgi grafiği"><text x="16" y="20" fill="currentColor" font-size="14" font-weight="bold">Aylık ortalama sıcaklık (°C)</text><g stroke="var(--vurgu)" stroke-width="3"><line x1="330" y1="15" x2="356" y2="15"/></g><text x="362" y="20" fill="currentColor" font-size="14">K kenti</text><g stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="7 4"><line x1="440" y1="15" x2="466" y2="15"/></g><text x="472" y="20" fill="currentColor" font-size="14">L kenti</text><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="70" y1="40" x2="545" y2="40"/><line x1="70" y1="100" x2="545" y2="100"/><line x1="70" y1="160" x2="545" y2="160"/></g><line x1="70" y1="220" x2="545" y2="220" stroke="currentColor" stroke-width="2"/><line x1="70" y1="40" x2="70" y2="250" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="14" text-anchor="end"><text x="62" y="45">30</text><text x="62" y="105">20</text><text x="62" y="165">10</text><text x="62" y="225">0</text></g><polyline fill="none" stroke="var(--vurgu)" stroke-width="3" points="90,166 129,166 168,154 207,130 246,100 285,76 324,64 363,64 402,82 441,106 480,136 519,160"/><polyline fill="none" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="7 4" points="90,244 129,232 168,196 207,160 246,124 285,88 324,46 363,46 402,88 441,148 480,196 519,232"/><g fill="var(--vurgu)"><circle cx="90" cy="166" r="4"/><circle cx="129" cy="166" r="4"/><circle cx="168" cy="154" r="4"/><circle cx="207" cy="130" r="4"/><circle cx="246" cy="100" r="4"/><circle cx="285" cy="76" r="4"/><circle cx="324" cy="64" r="4"/><circle cx="363" cy="64" r="4"/><circle cx="402" cy="82" r="4"/><circle cx="441" cy="106" r="4"/><circle cx="480" cy="136" r="4"/><circle cx="519" cy="160" r="4"/></g><g fill="var(--vurgu2)"><circle cx="90" cy="244" r="4"/><circle cx="129" cy="232" r="4"/><circle cx="168" cy="196" r="4"/><circle cx="207" cy="160" r="4"/><circle cx="246" cy="124" r="4"/><circle cx="285" cy="88" r="4"/><circle cx="324" cy="46" r="4"/><circle cx="363" cy="46" r="4"/><circle cx="402" cy="88" r="4"/><circle cx="441" cy="148" r="4"/><circle cx="480" cy="196" r="4"/><circle cx="519" cy="232" r="4"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="90" y="274">Oca</text><text x="129" y="274">Şub</text><text x="168" y="274">Mar</text><text x="207" y="274">Nis</text><text x="246" y="274">May</text><text x="285" y="274">Haz</text><text x="324" y="274">Tem</text><text x="363" y="274">Ağu</text><text x="402" y="274">Eyl</text><text x="441" y="274">Eki</text><text x="480" y="274">Kas</text><text x="519" y="274">Ara</text></g></svg>`,
  secenekler: [
    "K'nin aylık ortalama sıcaklığı yılın her ayında L'ninkinden yüksektir.",
    "En sıcak ve en soğuk ay arasındaki fark L'de K'dekinden büyüktür.",
    "Haziran ayında L'nin ortalama sıcaklığı, K'ninkinden daha yüksektir.",
    "K'nin en soğuk ayının ortalaması, L'ninkinden daha düşüktür."
  ],
  dogru: 1,
  hatalar: [
    "Yaz aylarını atlama: temmuz ve ağustosta L'nin eğrisi K'nin eğrisinin üstündedir; “her ay” ifadesi yanlıştır.",
    null,
    "Haziran değerlerini ters okuma: haziranda K yaklaşık 24 °C, L yaklaşık 22 °C'dir; L daha serindir.",
    "Alt uçları ters yorumlama: K'nin en soğuk ayı yaklaşık 9 °C, L'nin en soğuk ayı yaklaşık −4 °C'dir; L daha soğuktur."
  ],
  aciklama: `Aylık ortalama sıcaklık grafikleri bir yerin iklimini anlatır. Grafikte iki eğriyi ay ay karşılaştırırken en yüksek ve en düşük değerlere ayrı ayrı bakmak gerekir.
Adım 1: En sıcak ve en soğuk ayları oku. K: yaklaşık 26 °C (temmuz–ağustos) ve 9 °C (ocak–şubat). L: yaklaşık 29 °C (temmuz–ağustos) ve −4 °C (ocak).
Adım 2: Farkları hesapla. K için 26 − 9 = 17 °C, L için 29 − (−4) = 33 °C. L'nin farkı daha büyüktür. B doğrudur.
Adım 3: A'yı sına. Temmuz ve ağustosta L (29 °C), K'den (26 °C) sıcaktır; K her ay yüksek değildir.
Adım 4: C'yi sına. Haziranda K yaklaşık 24 °C, L yaklaşık 22 °C'dir.
Adım 5: D'yi sına. En soğuk ay L'dedir (−4 °C), K'de değil.
Sağlama: L'nin eğrisi K'ninkinden daha çok yükselip daha çok alçalıyor; yani yaz–kış farkı daha büyük.
Cevap B.`
},
{
  id: "fen-ik-342",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Tabloda M kentinin nisan ayı yağışına ait iki ayrı otuz yıllık dönemin ortalamaları ile 2022 nisanında ölçülen yağış verilmiştir.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Veri</th><th>Nisan yağışı</th></tr><tr><td>1961–1990 ortalaması</td><td>74 mm</td></tr><tr><td>1991–2020 ortalaması</td><td>58 mm</td></tr><tr><td>Nisan 2022</td><td>12 mm</td></tr></table>`,
  secenekler: [
    "İki dönem arasında nisan yağışı ortalaması 16 mm azalmıştır; bu, kentin nisan yağışı özelliğinin değiştiğini gösterir.",
    "İki dönem arasında nisan yağışı ortalaması 16 mm artmıştır; bu, kentin nisan yağışı özelliğinin değiştiğini gösterir.",
    "Nisan 2022'deki yağış, 1991–2020 ortalamasından 70 mm azdır; bu, o yılın nisanının ortalamadan saptığını gösterir.",
    "1961–1990 döneminin nisan yağışı ortalaması 58 mm'dir; bu, kentin eski nisan yağışı düzenini anlatır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yönü ters okuma: ortalama 74 mm'den 58 mm'ye inmiştir; bu bir azalmadır, artış değildir.",
    "Çıkarmayı yanlış yapma: 58 − 12 = 46 mm'dir, 70 mm değildir.",
    "Dönemleri karıştırma: 58 mm, 1991–2020 dönemine aittir; 1961–1990 döneminin ortalaması 74 mm'dir."
  ],
  aciklama: `İklim, uzun yıllara ait ortalamalarla anlatılır; iki farklı dönemin ortalamaları karşılaştırılarak iklim özelliğinin değişip değişmediğine bakılır. Tek bir yılın değeri ise o yılın nisanını anlatır.
Adım 1: Tablodaki ilk iki satır otuzar yıllık ortalamadır, yani iklim verisidir. Üçüncü satır tek bir nisan ayına aittir.
Adım 2: İki dönemi karşılaştır: 74 − 58 = 16 mm. Ortalama azalmıştır ve bu azalma kentin nisan yağışı özelliğinin değiştiğini gösterir. A doğrudur.
Adım 3: B'yi ele. Yön yanlış okunmuş; ortalama artmamış, azalmıştır.
Adım 4: C'yi ele. 58 − 12 = 46 mm'dir; 70 mm değildir.
Adım 5: D'yi ele. 58 mm, 1991–2020 döneminin ortalamasıdır; 1961–1990 için değer 74 mm'dir.
Sağlama: Seçeneklerde hem doğru sayıyı hem de doğru dönemi aradım; yalnızca A'da ikisi birlikte tutuyor.
Sık yapılan hata: Satırlardaki dönemleri karıştırmak ya da fark alırken sayıyı yanlış çıkarmak.
Cevap A.`
},
{
  id: "fen-ik-343",
  kazanim: "F.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir meteoroloji ve iklim araştırma kurumunun giriş katındaki panoda dört bölümün adı ve yaptığı iş yazılıdır. Öğrenciler bölüm adı ile yapılan iş arasındaki uyumu denetlemektedir.
**Buna göre hangi bölümün adı ile yaptığı iş birbiriyle uyumsuzdur?**`,
  gorsel: `<table class="tablo"><tr><th>Bölüm</th><th>Adı</th><th>Yaptığı iş</th></tr><tr><td>1</td><td>Tahmin Odası</td><td>Önümüzdeki 72 saatin yağış ve rüzgâr tahminlerini hazırlar.</td></tr><tr><td>2</td><td>Uzun Dönem Arşivi</td><td>1950'den bu yana ölçülen yıllık sıcaklık kayıtlarının eğilimini inceler.</td></tr><tr><td>3</td><td>İklim Atölyesi</td><td>Bu hafta sonu hangi kıyıda deniz dalgalı olacağını belirler.</td></tr><tr><td>4</td><td>Uyarı Birimi</td><td>Bu gece oluşacak buzlanma için yol uyarısı yayımlar.</td></tr></table>`,
  secenekler: [
    "1. bölüm",
    "2. bölüm",
    "3. bölüm",
    "4. bölüm"
  ],
  dogru: 2,
  hatalar: [
    "Tahmini iklim işi sanma: 72 saatlik tahmin kısa süreli olduğu için Tahmin Odası'nın işiyle uyumludur.",
    "Uzun süreli kaydı yanlış yere koyma: 1950'den bu yana sıcaklık eğilimi uzun dönemli bir iştir ve Uzun Dönem Arşivi adıyla uyumludur.",
    null,
    "Uyarıyı iklim işi sanma: bu geceki buzlanma kısa süreli olduğu için Uyarı Birimi'nin işi meteorolojiye aittir ve ad ile iş uyumludur."
  ],
  aciklama: `Kısa süreli tahmin ve uyarılar meteorolojinin, uzun yıllık kayıtların incelenmesi iklim biliminin işidir.
Adım 1: 1. bölümü incele. 72 saatlik tahmin kısa süreli bir iştir; “Tahmin Odası” adıyla uyumludur.
Adım 2: 2. bölümü incele. 1950'den bu yana sıcaklık eğilimi uzun dönemlidir; “Uzun Dönem Arşivi” adıyla uyumludur.
Adım 3: 3. bölümü incele. “İklim Atölyesi” adı iklim çalışmasını akla getirir; ama hafta sonu için denizin dalgalı olup olmayacağı birkaç günlük bir tahmindir ve meteorolojiye aittir. Ad ile iş uyumsuzdur.
Adım 4: 4. bölümü incele. Bu geceki buzlanma uyarısı kısa süreli bir iştir; “Uyarı Birimi” adıyla uyumludur.
Adım 5: Uyumsuz bölüm 3'tür.
Sık yapılan hata: Bölümün adına bakıp işini sorgulamamak. Ayıran şey adı değil, işin süresidir.
Cevap C.`
},
{
  id: "fen-ik-344",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Tabloda R ve S kentlerinin uzun yıllar ortalamalarından bazıları verilmiştir.
I. R ve S kentlerinin yıllık ortalama sıcaklıkları eşit olduğundan iklimleri aynıdır.
II. R'de temmuz ile ocak ortalamaları arasındaki fark, S'dekinden büyüktür.
III. S, R'ye göre daha çok yağış alır ve yağışı yıla daha dengeli dağılmıştır.
**Buna göre numaralanmış ifadelerden hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Kent</th><th>Yıllık ort. sıcaklık</th><th>Ocak ort.</th><th>Temmuz ort.</th><th>Yıllık toplam yağış</th><th>Yağışın dağılımı</th></tr><tr><td>R</td><td>15 °C</td><td>3 °C</td><td>27 °C</td><td>400 mm</td><td>Yağışın %70'i kış üç ayında düşer</td></tr><tr><td>S</td><td>15 °C</td><td>10 °C</td><td>20 °C</td><td>800 mm</td><td>Yıl içine dengeli dağılmıştır</td></tr></table>`,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "Yalnız III",
    "II ve III"
  ],
  dogru: 3,
  hatalar: [
    "Tek ölçütle iklimi eşitleme: yıllık ortalamanın eşit olması iklimin aynı olduğunu göstermez; ocak–temmuz farkı ve yağış çok farklıdır.",
    "III'ü dışarıda bırakma: S 800 mm ile R'nin (400 mm) iki katı yağış alır ve yağışı yıla dengelidir; III de doğrudur.",
    "II'yi dışarıda bırakma: R'de fark 27 − 3 = 24 °C, S'de 20 − 10 = 10 °C'dir; II de doğrudur.",
    null
  ],
  aciklama: `İklim tek bir sayıyla anlatılmaz; sıcaklığın yıl içindeki değişimi ve yağış miktarı ile dağılımı da iklimin parçalarıdır.
Adım 1: I'i incele. İki kentin yıllık ortalaması 15 °C'dir; ama ocak ve temmuz değerleri ile yağış çok farklıdır. Yıllık ortalama eşit olsa da iklimler aynı değildir. I yanlıştır.
Adım 2: II'yi incele. R için 27 − 3 = 24 °C, S için 20 − 10 = 10 °C. R'nin farkı daha büyüktür. II doğrudur.
Adım 3: III'ü incele. S'nin yağışı 800 mm, R'nin 400 mm'dir; ayrıca R'de yağışın büyük kısmı kışa, S'de ise yıla dengeli dağılmıştır. III doğrudur.
Adım 4: Doğru olanlar II ve III'tür.
Sık yapılan hata: Yıllık ortalama sıcaklığı eşit olan iki yerin iklimini aynı sanmak. Aynı ortalamayı çok farklı yaz–kış düzenleri verebilir.
Cevap D.`
},
{
  id: "fen-ik-345",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir ilçenin çevresinde dört meteoroloji istasyonu bulunmaktadır. İstasyonların kayıtlarına ilişkin bilgiler tabloda verilmiştir. Bir araştırmacı, ilçenin iklim ortalamasını hesaplamak için bu istasyonlardan birinin kayıtlarını kullanacaktır.
**Buna göre araştırmacı hangi istasyonun kayıtlarını kullanmalıdır?**`,
  gorsel: `<table class="tablo"><tr><th>İstasyon</th><th>Kayıt dönemi</th><th>Kayıt durumu</th></tr><tr><td>P</td><td>1998–2024 (27 yıl)</td><td>Her gün ölçüm yapılmış</td></tr><tr><td>R</td><td>1985–2024 (40 yıl)</td><td>Her gün ölçüm yapılmış</td></tr><tr><td>S</td><td>1990–2024 (35 yıl)</td><td>1996–2004 arasında ölçüm yapılmamış</td></tr><tr><td>T</td><td>2010–2024 (15 yıl)</td><td>Her gün ölçüm yapılmış</td></tr></table>`,
  secenekler: [
    "P istasyonu",
    "R istasyonu",
    "S istasyonu",
    "T istasyonu"
  ],
  dogru: 1,
  hatalar: [
    "Yetersiz süreyi yeterli sayma: P'nin kaydı 27 yıldır; iklim ortalaması için en az 30 yıllık kayıt aranır.",
    null,
    "Kesintili kaydı kesintisiz sayma: S'nin dönemi uzun görünür; ama dokuz yıl ölçüm yapılmadığı için kayıt kesintisizdir denemez.",
    "Kısa kaydı yeterli sayma: T'nin 15 yıllık kaydı, bir ortalamanın iklim değeri sayılması için çok kısadır."
  ],
  aciklama: `Bir ortalamanın iklim değeri sayılabilmesi için kayıtların uzun yıllar boyunca düzenli ve kesintisiz toplanmış olması gerekir; ölçüt olarak en az 30 yıl aranır.
Adım 1: P'yi incele. 27 yıl otuzdan azdır. Yetersiz.
Adım 2: R'yi incele. 40 yıl, her gün ölçüm. Hem uzun hem kesintisiz. Uygun.
Adım 3: S'yi incele. Dönem 35 yıl görünür; ama 1996–2004 arasındaki dokuz yıl ölçüm yoktur. Kayıt kesintisizdir denemez; fiilen 26 yıllık ölçüm vardır.
Adım 4: T'yi incele. 15 yıl çok kısadır.
Adım 5: Araştırmacı R istasyonunun kayıtlarını kullanmalıdır.
Sağlama: Süre tek başına yetmez; sürenin içinde boşluk olmamalıdır. S bunun örneğidir.
Cevap B.`
},
{
  id: "fen-ik-346",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki grafiklerden ilki bir kentin 12 Mayıs günü saatlik sıcaklığını, ikincisi aynı kentin 1991–2020 yılları arasındaki aylık ortalama sıcaklıklarını göstermektedir.
**Buna göre bu grafiklerle ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<svg viewBox="0 0 560 340" role="img" aria-label="Bir kentin 12 Mayıs günü saatlik sıcaklığını ve aylık ortalama sıcaklıklarını gösteren iki çizgi grafiği"><text x="16" y="18" fill="currentColor" font-size="14" font-weight="bold">Grafik 1: Kentin 12 Mayıs günü saatlik sıcaklığı (°C)</text><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="70" y1="90" x2="545" y2="90"/><line x1="70" y1="50" x2="545" y2="50"/></g><line x1="70" y1="130" x2="545" y2="130" stroke="currentColor" stroke-width="2"/><line x1="70" y1="40" x2="70" y2="130" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="14" text-anchor="end"><text x="62" y="55">20</text><text x="62" y="95">10</text><text x="62" y="135">0</text></g><polyline fill="none" stroke="var(--vurgu)" stroke-width="3" points="80,94 137,98 194,90 251,70 308,54 365,46 422,62 479,82 536,90"/><g fill="var(--vurgu)"><circle cx="80" cy="94" r="4"/><circle cx="137" cy="98" r="4"/><circle cx="194" cy="90" r="4"/><circle cx="251" cy="70" r="4"/><circle cx="308" cy="54" r="4"/><circle cx="365" cy="46" r="4"/><circle cx="422" cy="62" r="4"/><circle cx="479" cy="82" r="4"/><circle cx="536" cy="90" r="4"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="80" y="85">9</text><text x="137" y="89">8</text><text x="194" y="81">10</text><text x="251" y="61">15</text><text x="308" y="45">19</text><text x="365" y="37">21</text><text x="422" y="53">17</text><text x="479" y="73">12</text><text x="536" y="81">10</text></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="80" y="149">0</text><text x="137" y="149">3</text><text x="194" y="149">6</text><text x="251" y="149">9</text><text x="308" y="149">12</text><text x="365" y="149">15</text><text x="422" y="149">18</text><text x="479" y="149">21</text><text x="536" y="149">24</text><text x="520" y="168" text-anchor="end">saat</text></g><text x="16" y="190" fill="currentColor" font-size="14" font-weight="bold">Grafik 2: Aynı kentin aylık ortalama sıcaklığı, 1991–2020 (°C)</text><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="70" y1="265" x2="545" y2="265"/><line x1="70" y1="230" x2="545" y2="230"/></g><line x1="70" y1="300" x2="545" y2="300" stroke="currentColor" stroke-width="2"/><line x1="70" y1="215" x2="70" y2="300" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="14" text-anchor="end"><text x="62" y="235">20</text><text x="62" y="270">10</text><text x="62" y="305">0</text></g><polyline fill="none" stroke="var(--vurgu2)" stroke-width="3" points="90,289.5 129,286 168,275.5 207,258 246,240.5 285,226.5 324,216 363,216 402,230 441,251 480,272 519,286"/><g fill="var(--vurgu2)"><circle cx="90" cy="289.5" r="4"/><circle cx="129" cy="286" r="4"/><circle cx="168" cy="275.5" r="4"/><circle cx="207" cy="258" r="4"/><circle cx="246" cy="240.5" r="4"/><circle cx="285" cy="226.5" r="4"/><circle cx="324" cy="216" r="4"/><circle cx="363" cy="216" r="4"/><circle cx="402" cy="230" r="4"/><circle cx="441" cy="251" r="4"/><circle cx="480" cy="272" r="4"/><circle cx="519" cy="286" r="4"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="90" y="280.5">3</text><text x="129" y="277">4</text><text x="168" y="266.5">7</text><text x="207" y="249">12</text><text x="246" y="231.5">17</text><text x="285" y="217.5">21</text><text x="324" y="207">24</text><text x="363" y="207">24</text><text x="402" y="221">20</text><text x="441" y="242">14</text><text x="480" y="263">8</text><text x="519" y="277">4</text><text x="90" y="322">Oca</text><text x="129" y="322">Şub</text><text x="168" y="322">Mar</text><text x="207" y="322">Nis</text><text x="246" y="322">May</text><text x="285" y="322">Haz</text><text x="324" y="322">Tem</text><text x="363" y="322">Ağu</text><text x="402" y="322">Eyl</text><text x="441" y="322">Eki</text><text x="480" y="322">Kas</text><text x="519" y="322">Ara</text></g></svg>`,
  secenekler: [
    "12 Mayıs'ın en yüksek sıcaklığı mayıs ortalamasından 4 °C yüksektir; bu, kentin ikliminin ısınmakta olduğunu gösterir.",
    "12 Mayıs'ta saat 03.00'te ölçülen sıcaklık mayıs ortalamasının 9 °C altındadır; bu, iklimin soğuduğunu gösterir.",
    "Grafik 2'deki mayıs ortalaması, Grafik 1'de gösterilen saatlik değerlerin ortalamasına eşittir; çünkü ikisi de mayıs ayına aittir.",
    "12 Mayıs'ın en yüksek sıcaklığı mayıs ortalamasından 4 °C yüksektir; bu, o günün havasının ortalamadan saptığını gösterir."
  ],
  dogru: 3,
  hatalar: [
    "Doğru farktan yanlış sonuç çıkarma: 21 − 17 = 4 °C farkı doğru bulunmuştur; ama tek günün sapması iklimin ısındığını göstermez.",
    "Doğru farktan yanlış sonuç çıkarma: 17 − 8 = 9 °C doğrudur; ama gece saatlerinin ortalamadan düşük olması iklimin soğuduğunu göstermez, gün içinde sıcaklık zaten değişir.",
    "Ortalamaları karıştırma: saatlik değerlerin ortalaması (111 ÷ 8 ≈ 13,9 °C) 17 °C değildir; üstelik Grafik 2 otuz yıllık bir ortalamadır.",
    null
  ],
  aciklama: `Grafik 1 tek bir güne, Grafik 2 otuz yıllık ortalamaya aittir. Birincisi hava olayı, ikincisi iklim verisidir.
Adım 1: Grafik 1'deki en yüksek değeri bul: saat 15'te 21 °C. Grafik 2'de mayıs ortalaması 17 °C'dir.
Adım 2: Farkı hesapla: 21 − 17 = 4 °C. Yani 12 Mayıs'ın en sıcak saati mayıs ortalamasının 4 °C üstüne çıkmıştır.
Adım 3: Bu farkı doğru yorumla. Tek günün ortalamadan sapması o günün havasının ortalamadan ayrıldığını gösterir; iklim yargısı için farklı dönemlerin ortalamaları karşılaştırılmalıdır. D doğrudur, A yanlıştır.
Adım 4: B'yi ele. Saat 03.00'te 8 °C ölçülmüştür; 17 − 8 = 9 °C fark doğrudur. Ama gece saatlerinin serin olması günlük bir olaydır ve iklimin soğuduğunu göstermez.
Adım 5: C'yi ele. Saatlik değerlerin toplamı 9 + 8 + 10 + 15 + 19 + 21 + 17 + 12 = 111, ortalaması yaklaşık 13,9 °C'dir; 17 °C değildir.
Sık yapılan hata: Hesabı doğru yapınca yorumun da doğru olduğunu sanmak. Fark doğru çıkabilir; yorum ise sürenin kapsamına bağlıdır.
Cevap D.`
},
{
  id: "fen-ik-347",
  kazanim: "F.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir lisede “Uzmana sor” etkinliği düzenlenmektedir. Öğrenciler, konuk iklim bilimciye aşağıdaki soruları hazırlamıştır.
I. Bu akşam saat 20.00'de kentte sis oluşacak mı?
II. Bölgenin kış yağışı son altmış yılda mevsimsel olarak nasıl bir değişim gösterdi?
III. Bölgede son yetmiş yılda kurak geçen yılların sayısı arttı mı?
**Buna göre bu sorulardan hangilerini iklim bilimci kendi uzmanlık alanında yanıtlayabilir?**`,
  gorsel: null,
  secenekler: [
    "Yalnız II",
    "Yalnız III",
    "II ve III",
    "I ve III"
  ],
  dogru: 2,
  hatalar: [
    "III'ü dışarıda bırakma: son yetmiş yılda kurak geçen yılların sayısı uzun dönemli bir sorudur ve iklim bilimcinin alanına girer.",
    "II'yi dışarıda bırakma: son altmış yıldaki değişim uzun dönemli bir sorudur ve iklim bilimcinin alanına girer.",
    null,
    "Bu akşamki sis sorusunu iklim sorusu sanma: I birkaç saatlik bir hava olayı sorusudur ve meteoroloğa aittir; II de dışarıda bırakılmıştır."
  ],
  aciklama: `İklim bilimci (klimatolog), uzun yıllara ait kayıtlarla çalışır; meteorolog ise hava olaylarını izleyip kısa süreli tahmin yapar.
Adım 1: I'i incele. “Bu akşam saat 20.00” birkaç saatlik bir süredir. Sis oluşup oluşmayacağını meteorolog yanıtlar.
Adım 2: II'yi incele. “Son altmış yıl” uzun bir süredir; yağışın mevsimlere göre değişimi iklim biliminin konusudur.
Adım 3: III'ü incele. “Son yetmiş yıl” da uzun bir süredir; kurak geçen yılların sayısındaki eğilimi uzun yıllık kayıtlardan çıkarmak iklim bilimcinin işidir.
Adım 4: İklim bilimcinin yanıtlayabileceği sorular II ve III'tür.
Sık yapılan hata: “Sis” gibi tanıdık bir hava olayını görünce soruyu iklim sanmak ya da sorulan sürenin uzunluğuna bakmamak. Belirleyici olan sorunun kapsadığı süredir.
Cevap C.`
},
{
  id: "fen-ik-348",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir çiftçi, bölgesinde sonbahar donlarının başlangıcının zamanla değişip değişmediğini öğrenmek istemektedir. Tabloda iki ayrı otuz yıllık dönemde ilk donun görüldüğü günün ortalaması verilmiştir.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Dönem</th><th>İlk donun görüldüğü günün ortalaması</th></tr><tr><td>1961–1990</td><td>12 Ekim</td></tr><tr><td>1991–2020</td><td>25 Ekim</td></tr></table>`,
  secenekler: [
    "İlk don ortalaması 13 gün ertelenmiştir; bu, bir iklim özelliğinin değiştiğini gösterir.",
    "2023 sonbaharında ilk don 20 Ekim'de görüldüğü için bölgenin ilk don ortalaması 20 Ekim olmuştur.",
    "İlk don bundan sonra her yıl 25 Ekim'de görülecektir; çünkü son otuz yılın ortalaması budur.",
    "İlk donun ertelenmesi, bölgede kış mevsiminin bütün aylarının daha sıcak geçtiğini gösterir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Tek yılı ortalamaya karıştırma: 2023'ün ilk don günü yalnızca o yıla aittir; tabloda böyle bir veri de yoktur ve ortalama tek yılla belirlenmez.",
    "Ortalamayı her yıl için kesin kural sayma: 25 Ekim, otuz yılın ortalamasıdır; bazı yıllar daha erken, bazıları daha geç olur.",
    "Tabloda olmayan bilgiyi sonuca yazma: tabloda yalnızca ilk don tarihi vardır; kış aylarının sıcaklığı hakkında bilgi yoktur."
  ],
  aciklama: `İki dönemin ortalamasını karşılaştırmak, bir bölgenin ikliminde değişim olup olmadığını anlamanın yoludur. Ama yorum tablonun kapsadığı bilgiyle sınırlı kalmalıdır.
Adım 1: Fark hesapla. 12 Ekim'den 25 Ekim'e: 25 − 12 = 13 gün. İlk don ortalaması 13 gün ertelenmiştir.
Adım 2: İki değer de otuz yıllık ortalamadır; yani iklim verisidir. Ortalamadaki bu kayma, bölgenin iklim özelliklerinden birinin değiştiğini gösterir. A doğrudur.
Adım 3: B'yi ele. Tek bir yılın değeri ortalamayı belirlemez; üstelik tabloda 2023'e dair bir veri de yoktur.
Adım 4: C'yi ele. Ortalama, her yıl böyle olacağı anlamına gelmez.
Adım 5: D'yi ele. Tabloda kış aylarına ait veri yoktur; yalnızca ilk don tarihi vardır.
Sık yapılan hata: Ortalamayı bir sonraki yılın tarihi gibi okumak.
Cevap A.`
},
{
  id: "fen-ik-349",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, tablodaki bilgileri “hava olayı” ya da “iklim” olarak sınıflandırmıştır.
**Buna göre öğrencinin yaptığı sınıflandırmalardan hangileri yanlıştır?**`,
  gorsel: `<table class="tablo"><tr><th></th><th>Bilgi</th><th>Öğrencinin sınıflaması</th></tr><tr><td>I</td><td>Dün Muş'ta kar kalınlığı 40 cm'e ulaştı.</td><td>Hava olayı</td></tr><tr><td>II</td><td>Bu kıyı şeridinde yağışın yaklaşık dörtte üçü kasım–mart arasında düşer.</td><td>Hava olayı</td></tr><tr><td>III</td><td>Doğu Anadolu'da kışlar uzun yıllardır sert geçer.</td><td>İklim</td></tr></table>`,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "Yalnız III",
    "I ve III"
  ],
  dogru: 1,
  hatalar: [
    "Doğru sınıflamayı yanlış sayma: “dün” ifadesi tek bir günü anlatır; I'in hava olayı olarak sınıflanması doğrudur.",
    null,
    "Doğru sınıflamayı yanlış sayma: “uzun yıllardır” ifadesi iklime işaret eder; III'ün iklim olarak sınıflanması doğrudur.",
    "İki doğru sınıflamayı yanlış sayma: I hava olayı, III iklimdir; öğrenci bu ikisinde yanılmamıştır."
  ],
  aciklama: `Bir bilginin hava olayı mı iklim mi olduğuna, kapsadığı süreye bakarak karar verilir.
Adım 1: I'i incele. “Dün” tek bir gündür. Hava olayıdır; öğrenci doğru sınıflamış.
Adım 2: II'yi incele. “Yağışın dörtte üçü kasım–mart arasında düşer” cümlesi yıllar boyu tekrarlanan bir düzeni, yani yağışın mevsimlere dağılımını anlatır. Bu bir iklim bilgisidir. Öğrenci “hava olayı” demiştir; yanlıştır.
Adım 3: III'ü incele. “Uzun yıllardır” iklime işaret eder; öğrenci doğru sınıflamış.
Adım 4: Yanlış sınıflama yalnızca II'dedir.
Sık yapılan hata: Yağış gibi “olay” sözcüklerini görünce hava olayı demek. Yağış miktarının yıl içindeki genel dağılımı, uzun yıllara dayandığı için iklimdir.
Cevap B.`
},
{
  id: "fen-ik-350",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Tabloda üç bölgenin 1961–1990 dönemine göre 1991–2020 döneminde yıllık ortalama sıcaklıkta ve yıllık yağışta görülen değişim verilmiştir.
**Buna göre aşağıdakilerden hangisi kesinlikle söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Bölge</th><th>Yıllık ortalama sıcaklıktaki değişim</th><th>Yıllık yağıştaki değişim</th></tr><tr><td>A</td><td>+0,9 °C</td><td>%8 artış</td></tr><tr><td>B</td><td>+0,4 °C</td><td>%12 azalma</td></tr><tr><td>C</td><td>+1,3 °C</td><td>Değişmemiş</td></tr></table>`,
  secenekler: [
    "Bütün bölgelerde yıllık yağış azalmıştır.",
    "Üç bölgenin üçünde de yıllık ortalama sıcaklık yükselmiştir.",
    "Sıcaklığı en çok yükselen bölgede yağış da en çok artmıştır.",
    "Yağışı azalan bölgede sıcaklık da azalmıştır."
  ],
  dogru: 1,
  hatalar: [
    "Bir bölgeyi bütüne yayma: yağış yalnızca B'de azalmıştır; A'da artmış, C'de değişmemiştir.",
    null,
    "İki sütunu aynı yönde sanma: sıcaklığı en çok artan C'de yağış değişmemiştir; en çok yağış artışı A'dadır.",
    "Sıcaklığı yağışa bağlama: yağışı azalan B'de sıcaklık +0,4 °C artmıştır."
  ],
  aciklama: `Tablo her bölge için iki ayrı büyüklüğün değişimini verir; sütunları ayrı ayrı okumak gerekir. Bir sütundaki gidiş, öteki sütuna taşınamaz.
Adım 1: Sıcaklık sütununu oku: +0,9, +0,4 ve +1,3 °C. Üçünün üçü de pozitiftir; yani üç bölgenin hepsinde sıcaklık yükselmiştir. B doğrudur. “Üç bölgenin üçünde” ifadesi veriyle tam desteklenir.
Adım 2: Yağış sütununu oku: A artmış, B azalmış, C değişmemiş. Bu yüzden A'daki “bütün bölgelerde azalmıştır” yanlıştır.
Adım 3: C'yi sına. Sıcaklığı en çok artan bölge C'dir; yağışı en çok artan bölge ise A'dır. C yanlıştır.
Adım 4: D'yi sına. Yağışı azalan bölge B'dir ve sıcaklığı +0,4 °C artmıştır. D yanlıştır.
Sık yapılan hata: Sıcaklık ve yağışın birlikte aynı yöne gitmesi gerektiğini sanmak. Bu iki büyüklük birbirinden bağımsız değişebilir.
Cevap B.`
},
{
  id: "fen-ik-351",
  kazanim: "F.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir araştırma kurumunda çalışan meteorolog ile iklim bilimci, tabloda verilen veri türleriyle çalışmaktadır.
I. K verisi, iklim bilimcinin ocak ayı sıcaklıklarındaki uzun dönemli değişimi incelemesine uygundur.
II. L verisi, meteoroloğun havalimanı için kısa süreli bir uyarı hazırlamasına uygundur.
III. M verisi, meteoroloğun yarın için yapacağı kar yağışı tahmininin ana verisidir.
**Buna göre numaralanmış ifadelerden hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Veri</th><th>İçeriği</th></tr><tr><td>K</td><td>1990–2024 arasında her yıl ocak ayında ölçülen ortalama sıcaklıklar</td></tr><tr><td>L</td><td>Bu sabah 08.00–11.00 arasında havalimanında ölçülen görüş mesafeleri</td></tr><tr><td>M</td><td>Son elli yılın kış mevsimi yağış toplamları</td></tr></table>`,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "II ve III",
    "I ve II"
  ],
  dogru: 3,
  hatalar: [
    "II'yi dışarıda bırakma: bu sabahki görüş mesafesi kısa süreli bir hava olayı verisidir ve havalimanı uyarısı hazırlayan meteoroloğun çalışmasına uygundur.",
    "I'i dışarıda bırakma: 35 yıllık ocak ortalamaları uzun dönemli bir veridir ve iklim bilimcinin çalışmasına uygundur.",
    "Uzun dönemli veriyi kısa süreli tahmine bağlama: elli yıllık kış yağışı toplamları iklim verisidir; yarınki kar tahmini güncel ölçümlerle hazırlanır, III yanlıştır. Üstelik I dışarıda bırakılmıştır.",
    null
  ],
  aciklama: `Meteorolog hava olaylarını izleyip kısa süreli tahmin yapar; iklim bilimci (klimatolog) uzun yıllara ait kayıtlarla çalışır. Verinin hangi uzmana uygun olduğunu, kapsadığı süre belirler.
Adım 1: I'i incele. K verisi 1990–2024, yani 35 yıllıktır. Uzun dönemli ocak sıcaklıklarındaki değişimi iklim bilimci inceler. I doğrudur.
Adım 2: II'yi incele. L verisi bu sabahın üç saatini kapsar. Havalimanı için kısa süreli uyarı hazırlamak meteoroloğun işidir. II doğrudur.
Adım 3: III'ü incele. M verisi elli yıllık kış yağışı toplamlarıdır; bu uzun dönemli bir iklim verisidir. Yarınki kar yağışı tahmini ise güncel ölçümlerle yapılır. III yanlıştır.
Adım 4: Doğru olanlar I ve II'dir.
Sık yapılan hata: Verinin konusuna (kar, yağış) bakıp süresini denetlememek. Aynı konu hem kısa süreli hem uzun yıllık veriyle çalışılabilir; uzmanı süre belirler.
Cevap D.`
},
{
  id: "fen-ik-352",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Grafikte Çamlık ilçesinin iki ayrı otuz yıllık dönemdeki mevsimlik ortalama yağışları karşılaştırılmıştır.
**Buna göre bu grafikle ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<svg viewBox="0 0 560 300" role="img" aria-label="Çamlık ilçesinin iki dönemdeki mevsimlik ortalama yağışlarını karşılaştıran sütun grafiği"><text x="16" y="20" fill="currentColor" font-size="14" font-weight="bold">Çamlık'ın mevsimlik ortalama yağışı (mm)</text><rect x="16" y="32" width="16" height="14" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><text x="38" y="44" fill="currentColor" font-size="14">1961–1990</text><rect x="140" y="32" width="16" height="14" fill="var(--vurgu)"/><text x="162" y="44" fill="currentColor" font-size="14">1991–2020</text><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="70" y1="175" x2="545" y2="175"/><line x1="70" y1="100" x2="545" y2="100"/></g><line x1="70" y1="250" x2="545" y2="250" stroke="currentColor" stroke-width="2"/><line x1="70" y1="60" x2="70" y2="250" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="14" text-anchor="end"><text x="62" y="255">0</text><text x="62" y="180">100</text><text x="62" y="105">200</text></g><rect x="109" y="137.5" width="34" height="112.5" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="147" y="145" width="34" height="105" fill="var(--vurgu)"/><rect x="219" y="220" width="34" height="30" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="257" y="231.25" width="34" height="18.75" fill="var(--vurgu)"/><rect x="329" y="115" width="34" height="135" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="367" y="103.75" width="34" height="146.25" fill="var(--vurgu)"/><rect x="439" y="55" width="34" height="195" fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"/><rect x="477" y="62.5" width="34" height="187.5" fill="var(--vurgu)"/><g fill="currentColor" font-size="14" text-anchor="middle"><text x="126" y="131.5">150</text><text x="164" y="139">140</text><text x="145" y="272">İlkbahar</text><text x="236" y="214">40</text><text x="274" y="225.25">25</text><text x="255" y="272">Yaz</text><text x="346" y="109">180</text><text x="384" y="97.75">195</text><text x="365" y="272">Sonbahar</text><text x="456" y="49">260</text><text x="494" y="56.5">250</text><text x="475" y="272">Kış</text></g></svg>`,
  secenekler: [
    "Dört mevsimin dördünde de yağış miktarı birinciye göre azalmıştır.",
    "Yağış miktarı en çok azalan mevsim, kış mevsimi olmuştur.",
    "Yaz, iki dönemde de en az yağışlı mevsimdir ve daha da azalmıştır.",
    "Yıllık toplam yağış ikinci dönemde birinciye göre artmıştır."
  ],
  dogru: 2,
  hatalar: [
    "Bir mevsimi atlama: sonbaharda yağış 180 mm'den 195 mm'ye çıkmıştır; azalma dört mevsimde değildir.",
    "Azalmayı yanlış karşılaştırma: kış 10 mm, ilkbahar 10 mm, yaz 15 mm azalmıştır; en çok azalan mevsim yazdır.",
    null,
    "Toplamı hesaplamadan karar verme: birinci dönemde toplam 630 mm, ikinci dönemde 610 mm'dir; yıllık yağış azalmıştır."
  ],
  aciklama: `Kümeli sütun grafiğinde her mevsimin iki sütunu iki dönemi gösterir. İkili karşılaştırmayı mevsim mevsim yapmak gerekir.
Adım 1: Değerleri yaz. İlkbahar 150 → 140, yaz 40 → 25, sonbahar 180 → 195, kış 260 → 250.
Adım 2: Farkları hesapla. İlkbahar −10, yaz −15, sonbahar +15, kış −10 mm.
Adım 3: C'yi sına. Yaz, iki dönemde de en kısa sütunlara sahiptir (40 ve 25 mm). İkinci dönemde 15 mm azalmıştır. C doğrudur.
Adım 4: A'yı sına. Sonbahar artmıştır; “dördünde de” ifadesi yanlıştır.
Adım 5: B'yi sına. En büyük azalma −15 mm ile yazdadır.
Adım 6: D'yi sına. Birinci dönem 150 + 40 + 180 + 260 = 630 mm, ikinci dönem 140 + 25 + 195 + 250 = 610 mm; toplam azalmıştır.
Sağlama: “Her”, “dördünde de” gibi ifadeleri tüm sütunları kontrol ederek sına; tek bir karşıt örnek ifadeyi yanlış yapar.
Cevap C.`
},
{
  id: "fen-ik-353",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir üniversite, 14 Ağustos günü bir kentin elli ayrı noktasına sıcaklık ölçer yerleştirmiş ve ölçümlerin ortalamasını 36,2 °C bulmuştur. Üç öğrenci bu çalışmayı yorumlamıştır:
Ali: “Bu ortalama, 14 Ağustos günü kent genelindeki sıcaklığı yansıtır.”
Beyza: “Elli noktada ölçüm yapıldığı için bu ortalama kentin ağustos ikliminin değeri sayılır.”
Cem: “Kentin ağustos ikliminin değerini bulmak için ölçümlerin yıllarca sürdürülmesi gerekir.”
**Buna göre bu öğrencilerden hangilerinin söyledikleri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Ali ve Cem",
    "Ali ve Beyza",
    "Beyza ve Cem",
    "Ali, Beyza ve Cem"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Ölçüm noktası sayısını süre yerine koyma: Beyza'nın söylediği yanlıştır; noktaları çoğaltmak kaydın süresini uzatmaz, gereken uzun yıllık kayıttır. Cem de doğrudur.",
    "Ali'yi dışarıda bırakma: elli noktanın ortalaması, o günün kent genelindeki sıcaklığını gerçekten yansıtır; üstelik Beyza yanlıştır.",
    "Beyza'yı doğru sayma: elli noktada yapılan tek günlük ölçüm iklim verisi olmaz."
  ],
  aciklama: `İklim verisi için gereken şey ölçüm noktası sayısı değil, kaydın uzun yıllar sürmesidir.
Adım 1: Ali'yi incele. Elli noktanın ortalaması o günün kent genelindeki sıcaklığını iyi yansıtır; çünkü nokta sayısı çoktur. Ali doğrudur.
Adım 2: Beyza'yı incele. Ölçüm tek bir güne aittir. Elli nokta kullanılması günün havasını daha güvenilir kılar; ama süreyi uzatmaz. Tek gün hiçbir zaman iklim verisi değildir. Beyza yanlıştır.
Adım 3: Cem'i incele. İklim değeri için ölçümlerin uzun yıllar, ölçüt olarak en az otuz yıl sürdürülmesi gerekir. Cem doğrudur.
Adım 4: Doğru söyleyenler Ali ve Cem'dir.
Sık yapılan hata: Ölçüm yerini çoğaltmanın ölçüm süresinin yerini tutacağını sanmak.
Cevap A.`
},
{
  id: "fen-ik-354",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, yaşadığı ilçede on kış boyunca karla örtülü gün sayısını tabloya yazmış, değerlerin ortalamasını alarak “İlçemizin ikliminde kış başına 14 gün kar vardır.” sonucuna varmıştır.
**Buna göre öğrencinin çalışmasıyla ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Kış</th><th>Karla örtülü gün sayısı</th></tr><tr><td>2014–2015</td><td>12</td></tr><tr><td>2015–2016</td><td>18</td></tr><tr><td>2016–2017</td><td>9</td></tr><tr><td>2017–2018</td><td>15</td></tr><tr><td>2018–2019</td><td>20</td></tr><tr><td>2019–2020</td><td>11</td></tr><tr><td>2020–2021</td><td>14</td></tr><tr><td>2021–2022</td><td>17</td></tr><tr><td>2022–2023</td><td>10</td></tr><tr><td>2023–2024</td><td>14</td></tr></table>`,
  secenekler: [
    "Ortalama 15 gündür; bu yüzden öğrencinin hesabı yanlıştır.",
    "Ortalama doğru bulunmuştur ve ortalama alındığı için ilçenin kesin iklim değeridir.",
    "Ortalama doğru bulunmuştur; ancak on kışlık kayıt bir iklim değeri için yetersizdir.",
    "Kışlar arasında fark bulunan verinin ortalaması alınamaz; bu yüzden hesap geçersizdir."
  ],
  dogru: 2,
  hatalar: [
    "Toplamı yanlış hesaplama: değerlerin toplamı 140, ortalaması 140 ÷ 10 = 14'tür; 15 değildir.",
    "Her ortalamayı iklim değeri sayma: ortalama alınması tek başına yetmez, ortalamanın uzun yılları (en az otuz yıl) kapsaması gerekir.",
    null,
    "Değişkenliği ortalamaya engel sanma: yıldan yıla farklı çıkan değerlerin ortalaması elbette alınır; zaten ortalama bu farkları özetlemek içindir."
  ],
  aciklama: `Ortalama, birçok ölçümü tek sayıyla özetler; ama bir ortalamanın iklim değeri sayılabilmesi için kaydın uzun yıllara (en az otuz yıl) yayılması gerekir.
Adım 1: Değerlerin toplamını bul: 12 + 18 + 9 + 15 + 20 + 11 + 14 + 17 + 10 + 14 = 140.
Adım 2: Ortalamayı hesapla: 140 ÷ 10 = 14 gün. Öğrencinin hesabı doğrudur; A yanlıştır.
Adım 3: Kaydın süresine bak. Veri yalnızca on kışı kapsamaktadır. Otuz yıldan çok kısa olduğu için ortalama ilçenin kesin iklim değeri sayılamaz. B yanlış, C doğrudur.
Adım 4: D'yi ele. Değerlerin birbirinden farklı olması ortalama almaya engel değildir; ortalama, farklı değerleri özetlemek içindir.
Sık yapılan hata: Hesabın doğru olmasını sonucun da güvenilir olması sanmak. Hesap doğru olsa da kayıt süresi yetersiz kalabilir.
Cevap C.`
},
{
  id: "fen-ik-355",
  kazanim: "F.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Tabloda dört uzmanın mesleği ve yaptıkları açıklamalar verilmiştir. Bu uzmanlardan biri, mesleğinin çalışma alanı dışında bir açıklama yapmıştır.
**Buna göre mesleğinin çalışma alanı dışında açıklama yapan uzman kimdir?**`,
  gorsel: `<table class="tablo"><tr><th>Uzman</th><th>Mesleği</th><th>Açıklaması</th></tr><tr><td>Ada</td><td>Meteorolog</td><td>“Cumartesi öğleden sonra kentte kuvvetli rüzgâr bekliyoruz.”</td></tr><tr><td>Barış</td><td>İklim bilimci</td><td>“Son yetmiş yılda ülkemizin yıllık ortalama sıcaklığı yükseldi.”</td></tr><tr><td>Derya</td><td>Meteorolog</td><td>“Havalimanında şu anda görüş mesafesi 800 metredir.”</td></tr><tr><td>Cem</td><td>İklim bilimci</td><td>“Önümüzdeki iki gün dağlarda yoğun kar yağışı olacak.”</td></tr></table>`,
  secenekler: [
    "Ada",
    "Barış",
    "Derya",
    "Cem"
  ],
  dogru: 3,
  hatalar: [
    "Doğru açıklamayı yanlış sanma: kısa süreli rüzgâr beklentisi meteoroloğun işidir; Ada mesleğiyle uyumlu konuşmuştur.",
    "Doğru açıklamayı yanlış sanma: yetmiş yıllık sıcaklık eğilimi iklim bilimcinin işidir; Barış mesleğiyle uyumlu konuşmuştur.",
    "Doğru açıklamayı yanlış sanma: şu anki görüş mesafesi bir hava ölçümüdür ve meteoroloğun işidir; Derya mesleğiyle uyumlu konuşmuştur.",
    null
  ],
  aciklama: `Meteorolog hava olaylarını izler ve kısa süreli tahmin yapar. İklim bilimci uzun yıllara ait kayıtlarla çalışır.
Adım 1: Ada'yı incele. “Cumartesi öğleden sonra” kısa süreli bir tahmindir; meteorologa uygundur.
Adım 2: Barış'ı incele. “Son yetmiş yıl” uzun bir süredir; iklim bilimciye uygundur.
Adım 3: Derya'yı incele. “Şu anda” anlık bir ölçümdür; meteorologa uygundur.
Adım 4: Cem'i incele. “Önümüzdeki iki gün” kısa süreli bir tahmindir; bu bir meteoroloğun işidir. Cem, iklim bilimci olduğu hâlde mesleğinin çalışma alanı dışında konuşmuştur.
Sağlama: Ada, Barış ve Derya'da meslek ile açıklamanın süresi uyuşuyor; yalnızca Cem'de kısa süreli bir tahmin iklim bilimciye atfedilmiştir.
Cevap D.`
},
{
  id: "fen-ik-356",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir seyahat acentesi, müşterilerine temmuz ayında hangi kente gidilmesi gerektiğini önermek için Aktepe ve Gölova kentlerinin verilerini bir araya getirmiştir. Acente çalışanı, 18 Temmuz günü ölçülen değerleri de tabloya eklemiştir.
I. Uzun yıllar ortalamalarına göre Aktepe'nin temmuzları, Gölova'nınkilerden hem daha sıcak hem daha kuraktır.
II. 18 Temmuz'da Gölova daha sıcak olduğuna göre Gölova'nın temmuz iklimi Aktepe'ninkinden daha sıcaktır.
III. Aktepe'de 18 Temmuz'da 12 mm yağış düşmüş olması, Aktepe'nin temmuz ikliminin yağışlı olduğu anlamına gelmez.
**Buna göre numaralanmış çıkarımlardan hangilerine kesinlikle ulaşılabilir?**`,
  gorsel: `<table class="tablo"><tr><th></th><th>Aktepe</th><th>Gölova</th></tr><tr><td>Temmuz ayı ortalama sıcaklığı (1991–2020)</td><td>27 °C</td><td>22 °C</td></tr><tr><td>Temmuz ayı ortalama yağışı (1991–2020)</td><td>6 mm</td><td>41 mm</td></tr><tr><td>18 Temmuz günü en yüksek sıcaklık</td><td>25 °C</td><td>31 °C</td></tr><tr><td>18 Temmuz günü yağış</td><td>12 mm</td><td>0 mm</td></tr></table>`,
  secenekler: [
    "Yalnız II",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 1,
  hatalar: [
    "Bir günün sıcaklığını iklim yerine koyma: 18 Temmuz'un Gölova'da sıcak geçmesi, Gölova'nın temmuz ikliminin daha sıcak olduğunu göstermez; uzun yıllar ortalaması tersini söylüyor.",
    null,
    "II'yi doğru sayma: tek bir günün sıcaklık sıralaması, iki kentin temmuz iklimini karşılaştırmaya yetmez; I'i de dışarıda bırakıyor.",
    "II'yi de doğru sayma: tek günün verisi iklim yargısına temel olamaz."
  ],
  aciklama: `İki kentin iklimini karşılaştırmak için uzun yıllar ortalamalarına, tek bir günün durumunu anlamak için o günün ölçümüne bakılır. İkisi birbirinin yerine konmaz.
Adım 1: I'i incele. Temmuz sıcaklığında Aktepe 27 °C, Gölova 22 °C; yağışta Aktepe 6 mm, Gölova 41 mm. Aktepe hem daha sıcak hem daha kurak. I doğrudur.
Adım 2: II'yi incele. 18 Temmuz'da Gölova 31 °C, Aktepe 25 °C ölçmüştür; ama bu tek bir günün farkıdır. Temmuz ortalamalarında Aktepe daha sıcaktır. Tek günden iklim sonucu çıkarılamaz. II yanlıştır.
Adım 3: III'ü incele. Aktepe'nin temmuz ortalama yağışı 6 mm, yani kurak bir iklimdir. Bir günde 12 mm yağış düşmesi bu iklimi yağışlı yapmaz. III doğrudur.
Adım 4: Doğru olanlar I ve III'tür.
Sık yapılan hata: 18 Temmuz satırlarını (gün) ortalama satırlarıyla (iklim) karıştırmak. Bir satır günün havasını, öteki iki kentin iklimini anlatır.
Cevap B.`
},
{
  id: "fen-ik-357",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir çay kooperatifinin müdürü şöyle demiştir: “Bu yıl mayıs ayında üç gece art arda don görüldü ve verim düştü. Son yirmi yıldır don riskinin azaldığını sanıyorduk; bu yılki don bunu çürüttü. Oysa kooperatifimizin elli yıllık kayıtlarına göre mayıs donu on yılda ortalama bir kez görülüyor.”
I. Müdürün “son yirmi yılda don riski azalıyor” çıkarımı, bu yılki donla çürütülmüş olur.
II. Mayıs donunun elli yıllık kayıtlarda on yılda bir görülmesi, bu yılki donun iklimin değiştiğini gösterdiği anlamına gelir.
III. Bu yılki üç gecelik don bir hava olayıdır; mayıs donunun on yılda bir görülmesi ise bölgenin iklim bilgisidir.
**Buna göre numaralanmış ifadelerden hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız III",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Tek bir olayı eğilim sanma: I ve II, bu yılki donu iklimin yönünü belirleyen bir olay gibi sunuyor; oysa tek bir don ne eğilimi çürütür ne de iklimin değiştiğini gösterir.",
    "I'i doğru sayma: yirmi yıllık bir azalma eğilimi tek bir yılın donuyla çürütülmüş olmaz; III doğru olsa da I yanlıştır.",
    "II'yi doğru sayma: kayıtlarda on yılda bir görülen donun bu yıl görülmesi olağan bir durumdur, iklimin değiştiğini göstermez."
  ],
  aciklama: `Hava olayları kısa süreli, iklim ise uzun yıllara dayalıdır. Tek bir olay ne bir eğilimi çürütür ne de iklimin değiştiğini kanıtlar.
Adım 1: I'i incele. Müdürün çıkarımı yirmi yıla yayılan bir eğilimdir. Tek bir yılın donu, yirmi yıllık eğilimi çürütmez; çünkü eğilim içindeki yıllarda da ara sıra don görülebilir. I yanlıştır.
Adım 2: II'yi incele. Elli yıllık kayıtta mayıs donu on yılda bir görülüyorsa, bir yılda görülmesi olağandır. Olağan bir olay iklimin değiştiğini göstermez. II yanlıştır.
Adım 3: III'ü incele. Üç gecelik don bu yıla ait kısa süreli bir hava olayıdır; elli yıllık kayıtlardan çıkan “on yılda bir” bilgisi ise bölgenin iklim bilgisidir. III doğrudur.
Adım 4: Doğru olan yalnız III'tür.
Sık yapılan hata: Zarar veren bir olayı iklimin değişimiyle açıklamak. Zararın büyük olması olayın iklim değişikliği olduğunu göstermez.
Cevap A.`
},
{
  id: "fen-ik-358",
  kazanim: "F.8.1.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Üç uzman aynı kıyı kasabası için çalışmaktadır. Her biri farklı bir görevi yerine getirmek için kendi kayıtlarını kullanmaktadır; görevlerin hepsi kasabanın havası ya da iklimiyle ilgilidir.
**Buna göre hangi uzmanın çalışması hem iklim biliminin alanına girer hem de elindeki kaydın süresi görevi yerine getirmek için yeterlidir?**`,
  gorsel: `<table class="tablo"><tr><th>Uzman</th><th>Görevi</th><th>Elindeki kayıt</th></tr><tr><td>1</td><td>Hafta sonu feribot seferlerinin yapılıp yapılmayacağına karar verecek raporu hazırlıyor.</td><td>Son beş günün saatlik rüzgâr ölçümleri ve üç günlük tahminler</td></tr><tr><td>2</td><td>Limandaki yeni yapıların tasarımı için kasabanın rüzgâr ve yağış düzenini değerlendiriyor.</td><td>1960'tan bugüne rüzgâr ve yağış kayıtları</td></tr><tr><td>3</td><td>Kasabada yağışın azalıp azalmadığını araştırıyor.</td><td>2019–2024 yıllık yağış toplamları</td></tr></table>`,
  secenekler: [
    "Yalnız 1. uzman",
    "1. ve 3. uzman",
    "2. ve 3. uzman",
    "Yalnız 2. uzman"
  ],
  dogru: 3,
  hatalar: [
    "Kısa süreli kararı iklim çalışması sanma: hafta sonu seferleri için yapılan değerlendirme beş günlük ölçüm ve üç günlük tahminle yürür; bu meteoroloğun alanındadır.",
    "Hava olayı çalışmasını ve kısa kaydı birlikte seçme: 1. uzman meteoroloğun alanında çalışır, 3. uzmanın altı yıllık kaydı ise iklim yargısı için çok kısadır.",
    "Altı yıllık kaydı yeterli sayma: 3. uzmanın görevi iklime ilişkindir; ama yağışın azalıp azalmadığı en az otuz yıllık kayıtla anlaşılabilir.",
    null
  ],
  aciklama: `İklim bilimcinin çalışması uzun yıllara ait kayıtlara dayanır. Çalışmanın iklim biliminin alanına girmesi için görevin uzun dönemli olması, verinin de görevin süresine uygun olması gerekir.
Adım 1: 1. uzmanı incele. Görev hafta sonu seferleriyle ilgilidir ve veri son beş gündür. Bu kısa süreli bir hava olayı çalışmasıdır; meteoroloji alanına girer.
Adım 2: 2. uzmanı incele. Limandaki yapılar uzun yıllar kullanılacaktır; rüzgâr ve yağış düzeni uzun dönemli bilgi ister. Eldeki kayıt 1960'tan bugüne, yani altmış yılı aşkındır. Görev iklim bilimine aittir ve süre yeterlidir.
Adım 3: 3. uzmanı incele. Görev iklimle ilgilidir (yağış azalıyor mu?); ama kayıt yalnızca altı yıllıktır. Bir eğilim için en az otuz yıllık kayıt gerekir. Süre yeterli değildir.
Adım 4: İki ölçütü birlikte sağlayan yalnızca 2. uzmandır.
Sık yapılan hata: Görevin konusunu “iklim” görüp verinin süresini denetlememek.
Cevap D.`
},
{
  id: "fen-ik-359",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir meteoroloji istasyonunun kayıtlarını inceleyen üç öğrenci, tabloya aşağıdaki yorumları yapmıştır.
Hakan: “9 Ocak, 1991–2020 ocak ortalamasından 11 °C daha soğuk geçmiştir; bu, o günün havasının ortalamadan ayrıldığını gösterir.”
Irmak: “İki otuz yıllık dönemin ocak ortalamaları arasında 1 °C fark vardır; bu, istasyonun ocak ikliminin biraz ısındığını gösterir.”
Jale: “9 Ocak'ta −14 °C ölçüldüğüne göre bu bölgede ocak ayları artık −14 °C ile anılmalıdır.”
**Buna göre bu öğrencilerden hangilerinin yorumu doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Veri</th><th>Değer</th></tr><tr><td>Ocak ayı ortalaması (1961–1990)</td><td>−4 °C</td></tr><tr><td>Ocak ayı ortalaması (1991–2020)</td><td>−3 °C</td></tr><tr><td>9 Ocak günü ölçülen ortalama sıcaklık</td><td>−14 °C</td></tr></table>`,
  secenekler: [
    "Yalnız Hakan",
    "Yalnız Irmak",
    "Hakan ve Irmak",
    "Hakan ve Jale"
  ],
  dogru: 2,
  hatalar: [
    "Irmak'ı dışarıda bırakma: iki otuz yıllık dönemin ortalamalarını karşılaştırmak iklimdeki değişimi anlamanın yoludur; −4 °C'den −3 °C'ye 1 °C'lik artış vardır.",
    "Hakan'ı dışarıda bırakma: −3 − (−14) = 11 °C'dir; 9 Ocak ortalamadan 11 °C soğuktur ve bu tek günün sapmasıdır.",
    null,
    "Jale'yi doğru sayma: tek bir günün ölçümü bir bölgenin ocak ayını tanımlamaz; ocak ikliminin değeri uzun yıllar ortalamasıdır."
  ],
  aciklama: `Bir günün ortalamadan sapması hava olayıdır; iki ayrı dönemin ortalamalarının farkı ise iklimdeki değişimi gösterir.
Adım 1: Hakan'ı incele. 1991–2020 ocak ortalaması −3 °C, 9 Ocak ise −14 °C'dir. Fark: −3 − (−14) = 11 °C. 9 Ocak, ortalamadan 11 °C soğuktur ve bu o günün havasının ortalamadan ayrıldığını gösterir. Hakan doğrudur.
Adım 2: Irmak'ı incele. Ocak ortalaması −4 °C'den −3 °C'ye çıkmıştır; fark 1 °C'dir. İki otuz yıllık ortalamanın farkı ocak ikliminde küçük bir ısınmayı gösterir. Irmak doğrudur.
Adım 3: Jale'yi incele. Tek bir günün ölçümü ocak ayını tanımlamaz. Ocak ayının iklim değeri −3 °C'dir. Jale yanlıştır.
Adım 4: Doğru yorum yapanlar Hakan ve Irmak'tır.
Sık yapılan hata: Sıra dışı bir günü bölgenin yeni normali saymak.
Cevap C.`
},
{
  id: "fen-ik-360",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kış turizmi yazarı, Taşlıca ve Ormanköy için hazırladığı tabloya 12 Ocak günü yaptığı gözlemleri de eklemiştir.
I. Ormanköy'ün ocak ayı ortalama yağışı, Taşlıca'nınkinin üç katıdır.
II. 12 Ocak günü Ormanköy, Taşlıca'dan 15 °C daha ılık olmuştur.
III. Ormanköy'de ocak aylarında kar yağışı hiç görülmez.
**Buna göre numaralanmış çıkarımlardan hangilerine bu tablodan ulaşılamaz?**`,
  gorsel: `<table class="tablo"><tr><th></th><th>Taşlıca</th><th>Ormanköy</th></tr><tr><td>Ocak ayı ortalama sıcaklığı (1991–2020)</td><td>−2 °C</td><td>4 °C</td></tr><tr><td>Ocak ayı ortalama yağışı (1991–2020)</td><td>30 mm</td><td>90 mm</td></tr><tr><td>12 Ocak günü sıcaklık</td><td>−9 °C</td><td>6 °C</td></tr><tr><td>12 Ocak günü hava durumu</td><td>Kar yağışlı</td><td>Yağmurlu</td></tr></table>`,
  secenekler: [
    "Yalnız III",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Tablodan çıkan bilgileri ulaşılamaz sanma: 90 ÷ 30 = 3 ve 6 − (−9) = 15 işlemleri tablodaki sayılarla yapılabilir; I ve II'ye ulaşılabilir.",
    "I'i ulaşılamaz sanma: ocak yağış ortalamaları tabloda vardır ve 90 mm, 30 mm'nin üç katıdır; I'e ulaşılabilir.",
    "II'yi ulaşılamaz sanma: 12 Ocak sıcaklıkları tabloda vardır ve 6 − (−9) = 15 °C'dir; II'ye ulaşılabilir."
  ],
  aciklama: `Bir tablodan yalnızca tabloda bulunan bilgiyle ya da bu bilgiden hesaplanabilen sonuçlarla yargıya varılır.
Adım 1: I'i incele. İki kentin ocak ortalama yağışları 30 mm ve 90 mm'dir; 90 ÷ 30 = 3. I'e ulaşılabilir.
Adım 2: II'yi incele. 12 Ocak günü sıcaklıkları 6 °C ve −9 °C'dir; 6 − (−9) = 15 °C. II'ye ulaşılabilir.
Adım 3: III'ü incele. Tabloda Ormanköy'ün ocak ayı ortalama yağışı vardır; ama bu yağışın kar mı yağmur mu olarak düştüğüne dair uzun yıllık bir bilgi yoktur. Yalnızca 12 Ocak günü Ormanköy'ün yağmurlu olduğu yazılıdır. Tek bir günün yağmurlu olması, ocaklarda hiç kar görülmediğini göstermez; ayrıca “hiç” gibi mutlak bir sonuç tablodan çıkarılamaz. III'e ulaşılamaz.
Adım 4: Ulaşılamayan yalnızca III'tür.
Sık yapılan hata: Tek bir günün gözleminden “hiç görülmez” gibi mutlak bir iklim yargısına varmak.
Cevap A.`
},
{
  id: "fen-ik-361",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir ilçenin yıllık ortalama sıcaklığı ve yıllık yağışı üç dönem için tabloda verilmiştir. Üçüncü satır yalnızca 2021–2024 yıllarını kapsamaktadır. Bir iklim bilimci tabloyu yorumlamıştır.
I. İlk iki otuz yıllık dönemin karşılaştırması, ilçenin sıcaklık ve yağış özelliklerinde değişim olduğunu gösterir.
II. 2021–2024 satırı dört yıllık olduğundan ilçenin iklim değeri olarak kullanılamaz.
III. Üçüncü satırdaki yağış artışı, ilk iki dönem arasındaki yağış azalmasının sürmediğini kanıtlamaz.
**Buna göre numaralanmış yorumlardan hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Dönem</th><th>Yıllık ortalama sıcaklık</th><th>Yıllık yağış</th></tr><tr><td>1961–1990</td><td>11,8 °C</td><td>640 mm</td></tr><tr><td>1991–2020</td><td>12,6 °C</td><td>610 mm</td></tr><tr><td>2021–2024</td><td>13,4 °C</td><td>700 mm</td></tr></table>`,
  secenekler: [
    "I ve II",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 3,
  hatalar: [
    "III'ü yanlış sayma: dört yıllık bir yağış artışı, otuz yıllık eğilimin sona erdiğini göstermez; III de doğrudur.",
    "II'yi yanlış sayma: dört yıllık bir kayıt, ilçenin iklim değeri olarak kullanılamaz; II de doğrudur.",
    "I'i yanlış sayma: 1961–1990 ve 1991–2020 gibi iki otuz yıllık dönemin ortalamalarını karşılaştırmak iklimde değişim olup olmadığını gösterir; I de doğrudur.",
    null
  ],
  aciklama: `İklim değerleri uzun yıllara (en az otuz yıl) dayanır; iklimdeki değişim, farklı dönemlerin ortalamalarının karşılaştırılmasıyla anlaşılır.
Adım 1: I'i incele. İlk iki satır otuzar yıllık dönemlerdir. Sıcaklık 11,8 °C'den 12,6 °C'ye çıkmış, yağış 640 mm'den 610 mm'ye inmiştir. İki özellik de değişmiştir. I doğrudur.
Adım 2: II'yi incele. 2021–2024 yalnızca dört yıldır. Bir iklim değeri için en az otuz yıl gerekir. II doğrudur.
Adım 3: III'ü incele. 700 mm yağış dört yılın ortalamasıdır. Dört yıl, otuz yıllık bir azalma eğiliminin sürüp sürmediğini kanıtlamaya yetmez; kısa bir dönemde yağış artmış olabilir, eğilim sonra da sürebilir. III doğrudur.
Adım 4: Üç yorum da doğrudur.
Sağlama: “Kanıtlamaz” sözcüğü, ifadenin “yanlış olduğunu” değil, “yeterli olmadığını” söyler. Dört yıllık bir satır ne eğilimi çürütür ne de doğrular.
Cevap D.`
},
{
  id: "fen-ik-362",
  kazanim: "F.8.1.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir iklim araştırma merkezinin bu hafta için hazırladığı iş listesi ve her görev için elde bulunan veri tabloda verilmiştir. Merkezde bir meteorolog ve bir iklim bilimci görev yapmaktadır. Bir görev, yalnızca konusu iklim bilimine uygunsa ve elde bulunan veri o görevi yapmaya süre bakımından yetiyorsa iklim bilimci tarafından yürütülebilir.
**Buna göre bu görevlerden kaç tanesi iklim bilimci tarafından yürütülebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Görev</th><th>İçeriği</th><th>Elde bulunan veri</th></tr><tr><td>1</td><td>Önümüzdeki iki gün için kar kalınlığı tahmini yayımlamak</td><td>Son üç saatin ölçümleri</td></tr><tr><td>2</td><td>Kış sıcaklıklarındaki eğilimi çıkarmak</td><td>1980–2024 arası kış ortalamaları</td></tr><tr><td>3</td><td>Bu ay yaşanan yağışlı günlerin sayısını derlemek</td><td>Bu ayın günlük kayıtları</td></tr><tr><td>4</td><td>Dağ buzulunun küçülmesini incelemek</td><td>Son 60 yılda her yıl çekilen uydu görüntüleri</td></tr><tr><td>5</td><td>Bölgenin yağış ikliminin nasıl olduğunu belirlemek</td><td>Son dört yılın yağış toplamları</td></tr></table>`,
  secenekler: [
    "1",
    "2",
    "3",
    "4"
  ],
  dogru: 1,
  hatalar: [
    "Bir görevi atlama: 2. ve 4. görevlerin ikisi de uzun dönemlidir ve verileri yeterlidir; yalnız birini saymak eksik sayımdır.",
    null,
    "Veri süresini denetlememe: 5. görevin konusu iklimdir, ama dört yıllık veriyle bölgenin iklimi belirlenemez; bu görev sayıya katılmaz.",
    "Kısa süreli görevi de sayma: 3. görev yalnızca bu ayı kapsar, 5. görevin verisi ise yetersizdir; ikisi de sayıya katılmaz."
  ],
  aciklama: `İklim bilimci uzun yıllara ait kayıtlarla, meteorolog kısa süreli hava olaylarıyla ilgilenir. Bu soruda iki koşul birlikte aranır: görevin konusu iklim bilimine uygun olmalı ve elde bulunan veri o görevi yapmaya süre bakımından yetmeli. İklim yargısı için en az otuz yıllık kayıt gerekir.
Adım 1: 1. görev “önümüzdeki iki gün” için tahmindir ve verisi üç saatliktir. Kısa süreli bir iştir; meteorologa aittir.
Adım 2: 2. görev kış sıcaklıklarındaki eğilimi çıkarır. Konu uzun dönemlidir, veri 45 yıllıktır; iki koşul da sağlanır.
Adım 3: 3. görev yalnızca bu ayı kapsar. Hava olaylarının derlenmesidir; meteorologa aittir.
Adım 4: 4. görev buzulun küçülmesini inceler. Uydu bir ölçüm aracıdır ama veri 60 yıllıktır; iki koşul da sağlanır.
Adım 5: 5. görevin konusu bölgenin iklimidir, yani iklim bilimine uygundur. Ama veri yalnızca dört yıllıktır; otuz yıldan çok kısadır ve bu veriyle iklim yargısına varılamaz. İkinci koşul sağlanmaz.
Adım 6: Yürütülebilen görevler 2 ve 4'tür; sayısı ikidir.
Sık yapılan hata: Konusu iklimle ilgili olan her görevi sayıp verinin süresini denetlememek (5. görev gibi). Ölçüt aygıt değil, süredir.
Cevap B.`
},
{
  id: "fen-ik-363",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Grafikte Bozova ilçesinin 2010–2024 yıllarındaki temmuz ayı ortalama sıcaklıkları ile ilçenin 1991–2020 temmuz ortalaması (kesikli çizgi) gösterilmiştir. Bir iklim bilimci grafiğe bakarak bazı sayımlar yapmıştır.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<svg viewBox="0 0 560 300" role="img" aria-label="Bozova ilçesinin 2010-2024 temmuz ortalama sıcaklıklarını ve 1991-2020 temmuz ortalamasını gösteren çizgi grafiği"><text x="16" y="18" fill="currentColor" font-size="14" font-weight="bold">Temmuz ortalama sıcaklığı (°C); eksen 24,5 °C'den başlar</text><g stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="7 4"><line x1="16" y1="36" x2="44" y2="36"/></g><text x="50" y="41" fill="currentColor" font-size="14">1991–2020 temmuz ortalaması: 26,0 °C</text><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="70" y1="222.5" x2="545" y2="222.5"/><line x1="70" y1="112.5" x2="545" y2="112.5"/><line x1="70" y1="57.5" x2="545" y2="57.5"/></g><line x1="70" y1="167.5" x2="545" y2="167.5" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="7 4"/><line x1="70" y1="250" x2="545" y2="250" stroke="currentColor" stroke-width="2"/><line x1="70" y1="55" x2="70" y2="250" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="14" text-anchor="end"><text x="62" y="227.5">25</text><text x="62" y="172.5">26</text><text x="62" y="117.5">27</text><text x="62" y="62.5">28</text></g><polyline fill="none" stroke="var(--vurgu)" stroke-width="2" points="80,134.49999999999991 111,211.50000000000006 142,118.00000000000009 173,195 204,233.49999999999997 235,140 266,106.99999999999991 297,79.49999999999991 328,200.50000000000009 359,112.5 390,90.50000000000009 421,134.49999999999991 452,63.000000000000085 483,205.99999999999994 514,95.99999999999997"/><g fill="var(--vurgu)"><circle cx="80" cy="134.49999999999991" r="5"/><circle cx="111" cy="211.50000000000006" r="5"/><circle cx="142" cy="118.00000000000009" r="5"/><circle cx="173" cy="195" r="5"/><circle cx="204" cy="233.49999999999997" r="5"/><circle cx="235" cy="140" r="5"/><circle cx="266" cy="106.99999999999991" r="5"/><circle cx="297" cy="79.49999999999991" r="5"/><circle cx="328" cy="200.50000000000009" r="5"/><circle cx="359" cy="112.5" r="5"/><circle cx="390" cy="90.50000000000009" r="5"/><circle cx="421" cy="134.49999999999991" r="5"/><circle cx="452" cy="63.000000000000085" r="5"/><circle cx="483" cy="205.99999999999994" r="5"/><circle cx="514" cy="95.99999999999997" r="5"/></g><g stroke="currentColor" stroke-width="1"><line x1="80" y1="250" x2="80" y2="255"/><line x1="111" y1="250" x2="111" y2="255"/><line x1="142" y1="250" x2="142" y2="255"/><line x1="173" y1="250" x2="173" y2="255"/><line x1="204" y1="250" x2="204" y2="255"/><line x1="235" y1="250" x2="235" y2="255"/><line x1="266" y1="250" x2="266" y2="255"/><line x1="297" y1="250" x2="297" y2="255"/><line x1="328" y1="250" x2="328" y2="255"/><line x1="359" y1="250" x2="359" y2="255"/><line x1="390" y1="250" x2="390" y2="255"/><line x1="421" y1="250" x2="421" y2="255"/><line x1="452" y1="250" x2="452" y2="255"/><line x1="483" y1="250" x2="483" y2="255"/><line x1="514" y1="250" x2="514" y2="255"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="80" y="274">2010</text><text x="142" y="274">2012</text><text x="204" y="274">2014</text><text x="266" y="274">2016</text><text x="328" y="274">2018</text><text x="390" y="274">2020</text><text x="452" y="274">2022</text><text x="514" y="274">2024</text></g></svg>`,
  secenekler: [
    "Temmuz ortalaması, grafikteki her yılda bir önceki yıldakinden yüksektir.",
    "Temmuz ortalaması kesikli çizginin altında kalan yıl sayısı altıdır.",
    "Kesikli çizginin üzerinde kalan yıl sayısı, altında kalanın iki katıdır.",
    "Temmuz ortalaması kesikli çizginin üzerinde olan yıl sayısı yedidir."
  ],
  dogru: 2,
  hatalar: [
    "Eğilimi her yıl için geçerli sanma: çizgi yıldan yıla iner çıkar; örneğin 2011, 2014, 2018 ve 2023'te bir önceki yıla göre düşüş vardır.",
    "Sayımda hata yapma: kesikli çizginin altında kalan yıllar 2011, 2013, 2014, 2018 ve 2023'tür; sayısı beştir.",
    null,
    "Sayımda hata yapma: kesikli çizginin üzerindeki on yıl vardır (2010, 2012, 2015, 2016, 2017, 2019, 2020, 2021, 2022 ve 2024)."
  ],
  aciklama: `Kesikli çizgi 1991–2020 temmuz ortalamasını (iklim değerini) gösterir. Her yılın temmuz ortalaması bu çizginin ya üstünde ya altındadır; tek tek yılların sapması olağandır.
Adım 1: Çizginin altında kalan noktaları say: 2011, 2013, 2014, 2018 ve 2023. Beş yıl.
Adım 2: Çizginin üzerinde kalan noktaları say: 2010, 2012, 2015, 2016, 2017, 2019, 2020, 2021, 2022 ve 2024. On yıl. Toplam 5 + 10 = 15 yıl eder.
Adım 3: Oranla. Üzerindeki yıl sayısı (10), altındakinin (5) iki katıdır. C doğrudur.
Adım 4: A yanlıştır, çünkü 2011, 2014, 2018 ve 2023'te değer bir önceki yıldan düşüktür. B yanlıştır, çünkü altında kalan yıllar altı değil beştir. D yanlıştır, çünkü üzerindeki yıllar yedi değil ondur.
Sağlama: Çizginin üzerindeki yılların çoğunlukta olması, tek başına iklimin değiştiğini kanıtlamaz; ama dönem ortalamaları karşılaştırıldığında anlamlı bir işarettir.
Cevap C.`
},
{
  id: "fen-ik-364",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir ziraat mühendisi, iki kentte yetiştirilecek ürünleri karşılaştırmak için Yeşilova ve Bozyayla kentlerine ait uzun yıllar ortalamalarını ve 3 Mart günü ölçülen değerleri tabloda toplamıştır.
**Buna göre bu tabloya bakılarak aşağıdakilerden hangisine ulaşılamaz?**`,
  gorsel: `<table class="tablo"><tr><th></th><th>Yeşilova</th><th>Bozyayla</th></tr><tr><td>Ocak ayı ortalama sıcaklığı (1991–2020)</td><td>5 °C</td><td>−6 °C</td></tr><tr><td>Temmuz ayı ortalama sıcaklığı (1991–2020)</td><td>24 °C</td><td>22 °C</td></tr><tr><td>Yıllık toplam yağış (1991–2020)</td><td>1100 mm</td><td>350 mm</td></tr><tr><td>3 Mart günü sıcaklık</td><td>16 °C</td><td>−1 °C</td></tr><tr><td>3 Mart günü yağış</td><td>20 mm</td><td>0 mm</td></tr></table>`,
  secenekler: [
    "Bozyayla'nın ocak aylarının genelde Yeşilova'nınkilerden daha soğuk olduğuna",
    "Yeşilova'nın yıllık yağışının Bozyayla'nınkinin üç katından fazla olduğuna",
    "Bozyayla'da mart aylarının genelde yağışsız geçtiğine",
    "İki kentin temmuz ortalamaları arasındaki farkın 2 °C olduğuna"
  ],
  dogru: 2,
  hatalar: [
    "Tablodaki bilgiyi ulaşılamaz sanma: ocak ortalamaları −6 °C ve 5 °C'dir; Bozyayla'nın ocakları genelde daha soğuktur, bu sonuca ulaşılır.",
    "Hesaplanabilen sonucu ulaşılamaz sanma: 1100 ÷ 350 ≈ 3,1'dir; yani Yeşilova'nın yağışı Bozyayla'nınkinin üç katından fazladır, bu sonuca ulaşılır.",
    null,
    "Hesaplanabilen sonucu ulaşılamaz sanma: 24 − 22 = 2 °C'dir; bu sonuca ulaşılır."
  ],
  aciklama: `Tablodan, tabloda bulunan bilgilere ve bu bilgilerle yapılabilen hesaplara dayanan sonuçlara ulaşılır. Tek bir günün verisinden bir ayın ya da yılların durumuna ulaşılamaz.
Adım 1: A'yı incele. Ocak ortalamaları Bozyayla −6 °C, Yeşilova 5 °C. Bozyayla'nın ocakları genelde daha soğuktur. Ulaşılır.
Adım 2: B'yi incele. 1100 ÷ 350 ≈ 3,1. Üç katından fazladır. Ulaşılır.
Adım 3: D'yi incele. Temmuz ortalamaları 24 °C ve 22 °C, fark 2 °C. Ulaşılır.
Adım 4: C'yi incele. Tabloda mart ayı ortalama yağışı yoktur; yalnızca 3 Mart günü Bozyayla'da 0 mm yağış ölçüldüğü yazılıdır. Tek günün yağışsız olması mart aylarının genelde yağışsız geçtiğini göstermez. C'ye ulaşılamaz.
Sık yapılan hata: Tek günün verisini ayın ya da mevsimin genel durumu sanmak.
Cevap C.`
},
{
  id: "fen-ik-365",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir gazetede şu haber yer almıştır: “Dün ilçemizde sıcaklık 44 °C ile bu yılın en yüksek değerine ulaştı. Meteorolog, sıcak havanın yalnızca birkaç gün süreceğini açıkladı. İklim bilimci ise ilçenin yaz ortalamasının otuz yıl önceki döneme göre 1,5 °C arttığını belirtti.”
I. Haberdeki 44 °C, ilçenin iklim özelliklerinden biridir.
II. Meteoroloğun “birkaç gün sürecek” açıklaması, iklim bilimcinin ortalama artışı bilgisiyle çelişmez.
III. İklim bilimcinin verdiği 1,5 °C artış, tek bir yazın ölçümüne dayanır.
**Buna göre numaralanmış ifadelerden hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "I ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Dönem karşılaştırmasını tek yaza bağlama: 1,5 °C, iki ayrı dönemin yaz ortalamalarının farkıdır; tek bir yazdan çıkmaz.",
    "I'i doğru sayma: 44 °C dünkü tek bir günün ölçümüdür; iklim özelliği değildir.",
    "I'i ve III'ü doğru sayma: dünkü ölçüm iklim özelliği sayılmaz, 1,5 °C'lik fark da tek bir yaza dayanmaz."
  ],
  aciklama: `Kısa süreli sıcaklık bir hava olayıdır. İklimdeki değişim ise farklı dönemlerin ortalamalarının karşılaştırılmasıyla bulunur. İki bilgi birbirini yalanlamaz; farklı zaman ölçeklerini anlatır.
Adım 1: I'i incele. 44 °C, dünkü bir ölçümdür; hava olayıdır. İlçenin iklim özelliği sayılmaz. I yanlıştır.
Adım 2: II'yi incele. Meteorolog birkaç günlük sıcak havayı, iklim bilimci ise otuz yıllık ortalamadaki artışı anlatıyor. Biri kısa, biri uzun süreli bir bilgidir; çelişmezler. II doğrudur.
Adım 3: III'ü incele. “Otuz yıl önceki döneme göre” ifadesi iki ayrı dönemin ortalamalarını karşılaştırır. Tek bir yazla ilgili değildir. III yanlıştır.
Adım 4: Doğru olan yalnızca II'dir.
Sık yapılan hata: Rekor bir günü ortalamanın artışına neden göstermek ya da ikisini birbirine rakip bilgi saymak. Biri günün, diğeri onlarca yılın bilgisidir.
Cevap A.`
},
{
  id: "fen-ik-366",
  kazanim: "F.8.1.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir turizm şirketinin üç işi vardır:
1. iş: Bu hafta sonu yamaç paraşütü uçuşlarının yapılıp yapılmayacağına karar vermek
2. iş: Yeni tesisin açık yüzme havuzunun her yıl kaç ay kullanılabileceğini hesaplamak
3. iş: Havuzun açılış töreni için yılın en az yağışlı ayını seçmek ve seçilen ayın tören haftasında yağış beklenip beklenmediğini önceden öğrenmek
Şirket, bu işler için bir meteorologdan ve bir iklim bilimciden rapor isteyecektir.
**Buna göre şirket hangi işte hangi uzmana başvurmalıdır?**`,
  gorsel: null,
  secenekler: [
    "1. iş: meteorolog — 2. iş: iklim bilimci — 3. iş: yalnız iklim bilimci",
    "1. iş: iklim bilimci — 2. iş: iklim bilimci — 3. iş: iki uzman birlikte",
    "1. iş: meteorolog — 2. iş: meteorolog — 3. iş: yalnız meteorolog",
    "1. iş: meteorolog — 2. iş: iklim bilimci — 3. iş: iki uzman birlikte"
  ],
  dogru: 3,
  hatalar: [
    "3. işi tek uzmana verme: en az yağışlı ayı seçmek uzun yıllık veri ister, ama tören haftasındaki yağış beklentisi kısa süreli tahmindir; iklim bilimci bu ikinci parçayı tek başına karşılayamaz.",
    "1. işi iklim bilimciye verme: hafta sonu uçuş kararı kısa süreli bir hava olayı kararıdır ve meteoroloğun işidir.",
    "Uzun dönemli işleri meteoroloğa verme: havuzun yıllık kullanım süresi ve en az yağışlı ay uzun yıllık verilerle belirlenir; bu, iklim bilimcinin işidir.",
    null
  ],
  aciklama: `Meteorolog hava olaylarını izleyip kısa süreli tahmin yapar, iklim bilimci uzun yıllara ait kayıtlarla çalışır. Her işte hangi sürenin söz konusu olduğuna bak; iki süre birlikte geçiyorsa iki uzman gerekir.
Adım 1: 1. işi incele. Karar “bu hafta sonu” içindir; kısa süreli bir hava tahmini gerekir. Uzman meteorologdur.
Adım 2: 2. işi incele. Havuzun “her yıl” kaç ay kullanılabileceği yıllarca tekrarlanan bir düzendir; uzun yıllık sıcaklık kayıtlarından hesaplanır. Uzman iklim bilimcidir.
Adım 3: 3. işi iki parçaya ayır. “Yılın en az yağışlı ayını seçmek” uzun yıllık yağış ortalamalarına dayanır; bu iklim bilimcinin işidir. “Seçilen ayın tören haftasında yağış beklenip beklenmediğini öğrenmek” kısa süreli bir tahmindir; bu meteoroloğun işidir. Bu iş için iki uzman birlikte gerekir.
Adım 4: Üç eşleştirmeyi birlikte veren şık D'dir.
Sağlama: A, 3. işin kısa süreli parçasını unutur. B, 1. işi iklim bilimciye verir. C ise uzun dönemli işleri meteoroloğa verir.
Cevap D.`
},
{
  id: "fen-ik-367",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Grafikte bir kentin aylık ortalama sıcaklıkları iki ayrı otuz yıllık dönem için gösterilmiştir. Grafiği inceleyen bir iklim bilimci aşağıdaki yorumları yapmıştır.
I. Dönemler arasındaki sıcaklık farkı on iki ayın hepsinde aynıdır.
II. Dönemler arasındaki fark en çok temmuz, ağustos ve eylül aylarında görülür.
III. Her iki dönemde de en soğuk ay ocaktır.
**Buna göre numaralanmış yorumlardan hangileri doğrudur?**`,
  gorsel: `<svg viewBox="0 0 560 305" role="img" aria-label="Bir kentin aylık ortalama sıcaklıklarını iki ayrı otuz yıllık dönem için gösteren çizgi grafiği"><text x="16" y="18" fill="currentColor" font-size="14" font-weight="bold">Aylık ortalama sıcaklık (°C)</text><g stroke="var(--vurgu)" stroke-width="3"><line x1="260" y1="13" x2="286" y2="13"/></g><text x="292" y="18" fill="currentColor" font-size="14">1991–2020</text><g stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="7 4"><line x1="400" y1="13" x2="426" y2="13"/></g><text x="432" y="18" fill="currentColor" font-size="14">1961–1990</text><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="70" y1="190" x2="545" y2="190"/><line x1="70" y1="110" x2="545" y2="110"/></g><line x1="70" y1="270" x2="545" y2="270" stroke="currentColor" stroke-width="2"/><line x1="70" y1="50" x2="70" y2="270" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="14" text-anchor="end"><text x="62" y="275">0</text><text x="62" y="195">10</text><text x="62" y="115">20</text></g><polyline fill="none" stroke="var(--vurgu2)" stroke-width="3" stroke-dasharray="7 4" points="90,270 129,262 168,230 207,190 246,150 285,110 324,86 363,86 402,126 441,174 480,222 519,254"/><polyline fill="none" stroke="var(--vurgu)" stroke-width="3" points="90,262 129,254 168,222 207,182 246,142 285,102 324,62 363,62 402,102 441,166 480,214 519,246"/><g fill="var(--vurgu2)"><circle cx="90" cy="270" r="4"/><circle cx="129" cy="262" r="4"/><circle cx="168" cy="230" r="4"/><circle cx="207" cy="190" r="4"/><circle cx="246" cy="150" r="4"/><circle cx="285" cy="110" r="4"/><circle cx="324" cy="86" r="4"/><circle cx="363" cy="86" r="4"/><circle cx="402" cy="126" r="4"/><circle cx="441" cy="174" r="4"/><circle cx="480" cy="222" r="4"/><circle cx="519" cy="254" r="4"/></g><g fill="var(--vurgu)"><circle cx="90" cy="262" r="4"/><circle cx="129" cy="254" r="4"/><circle cx="168" cy="222" r="4"/><circle cx="207" cy="182" r="4"/><circle cx="246" cy="142" r="4"/><circle cx="285" cy="102" r="4"/><circle cx="324" cy="62" r="4"/><circle cx="363" cy="62" r="4"/><circle cx="402" cy="102" r="4"/><circle cx="441" cy="166" r="4"/><circle cx="480" cy="214" r="4"/><circle cx="519" cy="246" r="4"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="90" y="294">Oca</text><text x="129" y="294">Şub</text><text x="168" y="294">Mar</text><text x="207" y="294">Nis</text><text x="246" y="294">May</text><text x="285" y="294">Haz</text><text x="324" y="294">Tem</text><text x="363" y="294">Ağu</text><text x="402" y="294">Eyl</text><text x="441" y="294">Eki</text><text x="480" y="294">Kas</text><text x="519" y="294">Ara</text></g></svg>`,
  secenekler: [
    "Yalnız II",
    "II ve III",
    "I ve III",
    "I, II ve III"
  ],
  dogru: 1,
  hatalar: [
    "III'ü dışarıda bırakma: iki dönemde de ocak ayının eğrisi en alçak noktadadır; III de doğrudur.",
    null,
    "I'i doğru sayma: fark ayların çoğunda 1 °C, yaz sonunda 3 °C'dir; on iki ayın hepsinde aynı değildir. II'yi de dışarıda bırakıyor.",
    "I'i de doğru sayma: “hepsinde aynı” ifadesi yanlıştır; fark temmuz, ağustos ve eylülde diğer aylardan daha büyüktür."
  ],
  aciklama: `İki ayrı dönemin aylık ortalamalarını karşılaştıran grafikte, aynı aya ait iki noktanın arasındaki dikey uzaklık o ayın dönemler arasındaki farkını gösterir.
Adım 1: Ay ay farkları oku. Ocaktan hazirana kadar fark yaklaşık 1 °C'dir. Temmuzda 23 → 26, ağustosta 23 → 26, eylülde 18 → 21; yani 3 °C. Ekim, kasım ve aralıkta yine 1 °C.
Adım 2: I'i sına. Fark her ayda aynı değildir; üç ayda 3 °C, dokuz ayda 1 °C'dir. I yanlıştır.
Adım 3: II'yi sına. En büyük fark (3 °C) temmuz, ağustos ve eylülde görülür. II doğrudur.
Adım 4: III'ü sına. 1961–1990 döneminde en düşük değer ocakta (0 °C), 1991–2020 döneminde de ocakta (1 °C) görülür. III doğrudur.
Adım 5: Doğru yorumlar II ve III'tür.
Sık yapılan hata: Tüm ayları aynı farkla artmış sanmak. Dönemler arası fark mevsime göre değişebilir.
Cevap B.`
},
{
  id: "fen-ik-368",
  kazanim: "F.8.1.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir iklim bilimci, bir bölgedeki iki ağaçtan aldığı gövde örneklerinde yıllık halkaların genişliğini ölçmüştür. Halkaların geniş olması ağacın o yıllarda elverişli (yeterince yağışlı) koşullarda, dar olması ise elverişsiz (kurak) koşullarda yaşadığına işaret eder. Ölçümler, on yıllık ortalamalar olarak tabloda verilmiştir.
**Buna göre bu tabloyla ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>On yıllık dönem</th><th>A ağacı halka genişliği</th><th>B ağacı halka genişliği</th></tr><tr><td>1900–1909</td><td>3,1 mm</td><td>2,8 mm</td></tr><tr><td>1910–1919</td><td>2,9 mm</td><td>3,0 mm</td></tr><tr><td>1920–1929</td><td>1,2 mm</td><td>1,1 mm</td></tr><tr><td>1930–1939</td><td>1,0 mm</td><td>1,3 mm</td></tr><tr><td>1940–1949</td><td>3,0 mm</td><td>2,9 mm</td></tr></table>`,
  secenekler: [
    "İki ağaçtaki 1920–1939 arası dar halkalar, o yıllarda bölgede kurak koşulların sürdüğüne işaret eder.",
    "İki ağaçtaki 1920–1939 arası dar halkalar, o yıllarda bölgede bol yağış alındığına işaret eder.",
    "On yıllık ortalama halka genişlikleri, 1930 yılındaki belirli bir günün hava durumunu da gösterir.",
    "Tablodaki ölçümler, bölgenin bugünkü iklim değerlerini doğrudan belirleyen kayıtlar sayılır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Halka genişliğini ters yorumlama: geniş halka elverişli yılları, dar halka elverişsiz yılları gösterir; dar halkalar bol yağışa işaret etmez.",
    "Kaydın ayrıntısını abartma: on yıllık ortalamalar belirli bir günün havasını vermez; halkalar yılları ve on yılları anlatır.",
    "Geçmiş kaydı bugünkü iklim sanma: 1900–1949 arasının halkaları o yılların koşulları hakkında ipucu verir, bugünkü iklim değerlerini belirlemez."
  ],
  aciklama: `Ağaçlar her yıl bir halka ekler. Elverişli yıllarda halka geniş, elverişsiz (kurak) yıllarda dar olur. İklim bilimci bu kayıtlardan geçmişin koşullarını yorumlar.
Adım 1: Tabloyu dönem dönem oku. 1900–1919 arasında iki ağaçta da halkalar yaklaşık 3 mm, 1940–1949'da yine yaklaşık 3 mm'dir. 1920–1929 ve 1930–1939 dönemlerinde ise halkalar yaklaşık 1 mm'ye inmiştir.
Adım 2: İki ağaç aynı iki dönemde de dar halka üretmiştir. İki bağımsız kaydın aynı yönde olması, nedenin tek bir ağaca özgü olmadığını, bölgenin koşullarına bağlı olduğunu düşündürür.
Adım 3: Dar halka elverişsiz (kurak) koşullara işaret eder. A doğrudur.
Adım 4: B yanlıştır, çünkü yorum tersine çevrilmiş. C yanlıştır, çünkü on yıllık ortalama bir günü anlatmaz. D yanlıştır, çünkü 1900–1949 arasının halkaları bugünkü iklimi belirlemez.
Sık yapılan hata: Geçmişin doğal kayıtlarından “kesin bilgi” beklemek. Bu kayıtlar ipucu verir ve uzun yılları kapsadığı için iklim biliminin verisidir.
Cevap A.`
},
{
  id: "fen-ik-369",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir meteoroloji uzmanı, dün akşam “Yarın kentte yağış beklenmiyor.” tahminini yayımlamıştır. Ertesi gün kentte 14 mm yağış düşmüştür. Bir fen kulübü, bu olay üzerine kentin nisan yağışına ilişkin bilgileri tabloda toplamıştır.
I. Dünkü tahmin ile bugünkü ölçüm, kısa süreli hava olayı bilgileridir.
II. Tahminin tutmaması, kentin nisan yağışı ortalamasının hatalı olduğunu gösterir.
III. Kentin nisan yağışı ortalaması uzun yıllara dayandığı için iklim bilgisidir; bugünkü ölçüm bu bilginin yerini tutmaz.
**Buna göre numaralanmış ifadelerden hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Bilgi</th><th>Değer</th></tr><tr><td>Nisan ayı yağış ortalaması (1991–2020)</td><td>60 mm</td></tr><tr><td>Dün akşam yayımlanan tahmin</td><td>Yağış beklenmiyor</td></tr><tr><td>Bugün ölçülen yağış</td><td>14 mm</td></tr></table>`,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "II ve III",
    "I ve III"
  ],
  dogru: 3,
  hatalar: [
    "III'ü dışarıda bırakma: otuz yıllık nisan ortalaması iklim bilgisidir ve bugünkü ölçüm onun yerini tutmaz; III de doğrudur.",
    "Tahmin hatasını ortalamaya yükleme: tahminin tutmaması otuz yıllık ortalamanın hatalı olduğunu göstermez; II yanlıştır. Üstelik I ve III dışarıda bırakılmıştır.",
    "II'yi doğru sayma: tahmin ile ortalama farklı süreli bilgilerdir; bir günün tahmin hatası otuz yıllık ortalamayı çürütmez. Üstelik I dışarıda bırakılmıştır.",
    null
  ],
  aciklama: `Hava durumu tahmini ve günlük ölçüm kısa süreli bilgilerdir; iklim bilgisi ise uzun yıllara dayanan ortalamalarla verilir. İkisi birbirinin yerine geçmez ve birinin sonucu diğerini yanlışlamaz.
Adım 1: I'i incele. Dünkü tahmin ve bugünkü ölçüm bir günü kapsar. İkisi de kısa süreli hava olayı bilgisidir. I doğrudur.
Adım 2: II'yi incele. Meteorolog bir gün için tahmin yapmıştır; tahmin tutmamıştır. Bu, 1991–2020 yağış ortalamasının hatalı olduğunu göstermez; ortalama otuz yıllık ölçümlerden hesaplanmıştır. II yanlıştır.
Adım 3: III'ü incele. 60 mm'lik değer otuz yıllık bir ortalamadır, yani iklim bilgisidir. Bugünkü 14 mm bir günün ölçümüdür ve bu bilginin yerini tutmaz. III doğrudur.
Adım 4: Doğru olanlar I ve III'tür.
Sık yapılan hata: Bir günlük tahmin hatasını ya da bir günlük ölçümü iklim bilgisini değiştiren bir kanıt saymak. Tahmin hava olayını, ortalama iklimi anlatır.
Cevap D.`
},
{
  id: "fen-ik-370",
  kazanim: "F.8.1.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir iklim bilimci, bir dağın çevresinde kar sınırının (yıl boyu karın kaldığı en alçak yüksekliğin) yıllar içinde yükselip yükselmediğini araştırmaktadır. Elinde şu veriler bulunmaktadır:
I. Dağda 1980'den bu yana her yıl aynı ayda ölçülen kar sınırı yükseklikleri
II. Dağ eteğindeki köyün geçen kışa ait günlük kar kalınlığı ölçümleri
III. Aynı dağın 1985–2024 arasında her yıl aynı tarihte çekilen uydu görüntülerinden belirlenen kar sınırı yükseklikleri
**Buna göre iklim bilimci bu araştırmada hangi verilerden yararlanabilir?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız III",
    "I ve III",
    "II ve III"
  ],
  dogru: 2,
  hatalar: [
    "III'ü dışarıda bırakma: uydu görüntüleri de elli yıla yakın düzenli bir kayıt sağlar; ölçüm aracı değil, kaydın süresi önemlidir.",
    "I'i dışarıda bırakma: 1980'den bu yana düzenli ölçülen kar sınırı doğrudan araştırma konusunun uzun dönemli verisidir.",
    null,
    "II'yi uzun dönemli veri sayma: tek bir kışın günlük ölçümleri kar sınırının yıllar içindeki değişimini göstermez."
  ],
  aciklama: `İklimdeki bir değişimi araştırmak için verinin hem konuya uygun hem de uzun yıllara yayılmış olması gerekir. Aynı büyüklük farklı araçlarla ölçülmüş olsa da uzun süreli ve düzenli kayıt iklim bilimcinin verisidir.
Adım 1: I'i incele. 1980'den bu yana her yıl aynı ayda ölçülen kar sınırı; hem konuya uygun hem düzenli hem uzun. Yararlıdır.
Adım 2: II'yi incele. Tek bir kışa ait günlük kar kalınlığı; kısa süreli bir hava olayı verisidir ve kar sınırının yıllar içindeki değişimini göstermez. Yararlı değildir.
Adım 3: III'ü incele. 1985–2024 arasında her yıl aynı tarihte uydu görüntülerinden belirlenen kar sınırı; ölçüm aracı uydudur ama kayıt kırk yıla yakındır, düzenlidir ve konuya uygundur. Yararlıdır.
Adım 4: Yararlı veriler I ve III'tür.
Sık yapılan hata: Uydu gibi aletlerle toplanan her veriyi meteorolojiye ait saymak. Belirleyici olan kaydın süresidir.
Cevap C.`
},
{
  id: "fen-ik-371",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir çiftçi, ürün yetiştirmeyi düşündüğü Sazlıdere ve Karataş kentlerinin uzun yıllar ortalamalarını ve bu hafta için yayımlanan haftalık hava raporlarını tabloya geçirmiştir. Çiftçi, tabloya bakarak iki kenti karşılaştırmaktadır.
**Buna göre aşağıdakilerden hangisine kesinlikle ulaşılabilir?**`,
  gorsel: `<table class="tablo"><tr><th></th><th>Sazlıdere</th><th>Karataş</th></tr><tr><td>Yıllık ortalama sıcaklık (1991–2020)</td><td>18 °C</td><td>12 °C</td></tr><tr><td>Yıllık toplam yağış (1991–2020)</td><td>520 mm</td><td>1300 mm</td></tr><tr><td>Bu hafta için beklenen hava</td><td>38 °C, güneşli</td><td>9 °C, sağanak yağışlı</td></tr></table>`,
  secenekler: [
    "Sazlıdere'nin iklimi, yılın her mevsiminde Karataş'ın iklimine göre daha sıcaktır.",
    "Sazlıdere, Karataş'tan hem daha sıcak hem de daha az yağışlı bir iklime sahiptir.",
    "Karataş'ta bu hafta sağanak yağış beklendiği için Karataş'ın iklimi yağışlı sayılır.",
    "Sazlıdere'de bu hafta 38 °C beklendiği için Sazlıdere'nin iklimi çok sıcak sayılır."
  ],
  dogru: 1,
  hatalar: [
    "Yıllık ortalamadan mevsim sonucu çıkarma: tabloda mevsimlere ait veri yoktur; yıllık ortalamanın yüksek olması her mevsimin daha sıcak olduğunu göstermez.",
    null,
    "Bu haftanın tahminini iklim yargısına çevirme: tek haftalık sağanak beklentisi hava olayı bilgisidir; Karataş'ın yağışlı iklimi 1300 mm'lik uzun yıllık yağıştan anlaşılır.",
    "Haftalık tahminden iklim sonucu çıkarma: 38 °C bu haftaya ait bir beklentidir; Sazlıdere'nin iklimini bu değer değil, uzun yıllar ortalamaları anlatır."
  ],
  aciklama: `İki yerin iklimini karşılaştırmak için uzun yıllar ortalamalarına bakılır. Haftalık hava raporu ise yalnızca o haftanın beklentisini verir.
Adım 1: Uzun yıllar satırlarını oku. Sıcaklık: Sazlıdere 18 °C, Karataş 12 °C. Yağış: Sazlıdere 520 mm, Karataş 1300 mm. Sazlıdere daha sıcak, Karataş daha yağışlıdır. B doğrudur.
Adım 2: A'yı sına. Tabloda mevsimlere ait veri yoktur; “yılın her mevsimi” kesin olarak söylenemez.
Adım 3: C'yi sına. Bu haftaki sağanak bir hava olayıdır. Karataş'ın yağışlı olduğu 1300 mm'lik uzun yıllık yağıştan anlaşılır, bu haftadan değil.
Adım 4: D'yi sına. 38 °C bu haftanın beklentisidir. İklim, uzun yıllar ortalamasıyla belirlenir.
Sık yapılan hata: Haftalık hava raporunu iklim bilgisi gibi okumak.
Cevap B.`
},
{
  id: "fen-ik-372",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kentin 1991–2020 dönemine ait yıllık ortalama yağışı 600 mm olarak hesaplanmıştır. Bir iklim bilimci bu değerin, otuz yılın her birinde ölçülen yıllık yağışların toplanıp otuza bölünmesiyle bulunduğunu belirtmiştir. Ölçümler her yıl düzenli yapılmıştır ve hiçbir yılın verisi eksik değildir. Yıllar arasında yağış miktarının değiştiği de bilinmektedir.
**Buna göre bu kent ve bu otuz yıl için aşağıdakilerden hangisi __olamaz__?**`,
  gorsel: null,
  secenekler: [
    "Otuz yılın her birinde yıllık yağış 600 mm'den fazla olmuştur.",
    "Otuz yılın yirmi dokuzunda yıllık yağış 600 mm'den fazla olmuştur.",
    "Otuz yılın hiçbirinde yıllık yağış tam olarak 600 mm olmamıştır.",
    "Otuz yılın birinde yıllık yağış 900 mm'yi aşmıştır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Olabilecek durumu olamaz sanma: yirmi dokuz yıl 605 mm olsa toplam 17.545 mm eder; kalan yıl 455 mm olursa ortalama 600 mm çıkar, yani bu durum olabilir.",
    "Olabilecek durumu olamaz sanma: ortalamanın 600 mm olması, hiçbir yılın tam 600 mm olması gerektiği anlamına gelmez.",
    "Olabilecek durumu olamaz sanma: bir yılın 900 mm olması, diğer yıllar 600 mm'nin altında kalırsa ortalamayı 600 mm yapabilir."
  ],
  aciklama: `Ortalama, ölçümlerin toplamının ölçüm sayısına bölünmesiyle bulunur. Ortalamanın 600 mm olması, bazı yılların 600 mm'nin üstünde, bazılarının altında olmasıyla bile elde edilebilir.
Adım 1: A'yı sına. Bütün yıllar 600 mm'den fazlaysa toplam, 30 × 600 = 18.000 mm'yi aşar ve ortalama 600 mm'den büyük çıkar. Ortalama tam 600 mm olduğuna göre A olamaz.
Adım 2: B'yi sına. Yirmi dokuz yıl 605 mm olsun: 29 × 605 = 17.545 mm. Kalan yıl 18.000 − 17.545 = 455 mm olursa ortalama tam 600 mm olur. B olabilir.
Adım 3: C'yi sına. Hiçbir yılın tam 600 mm olmaması ortalamayı bozmaz; örneğin yarısı 580, yarısı 620 mm olabilir. C olabilir.
Adım 4: D'yi sına. Bir yıl 900 mm, bazı yıllar 600 mm'nin altında olabilir ve ortalama yine 600 mm çıkabilir. D olabilir.
Sık yapılan hata: “Ortalama 600 ise bütün yıllar 600 civarındadır” ya da “çoğu yıl ortalamanın üstündeyse ortalama yükselir” sanmak. Ortalama, uç değerleri de içine alan tek bir özettir.
Cevap A.`
},
{
  id: "fen-ik-373",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir havzanın yıllık yağışları üç dönem için ortalamaya çevrilerek tabloda verilmiştir. Havza 1941'den beri kesintisiz izlenmektedir; üçüncü dönemin kaydı henüz tamamlanmamıştır, çünkü dönem hâlâ sürmektedir. Havzadaki baraj işletmesi bu tabloyu su yönetimi toplantısına sunacaktır.
**Buna göre bu tabloya bakılarak aşağıdakilerden hangisine ulaşılamaz?**`,
  gorsel: `<table class="tablo"><tr><th>Dönem</th><th>Dönemin uzunluğu</th><th>Yıllık ortalama yağış</th></tr><tr><td>1941–1970</td><td>30 yıl</td><td>640 mm</td></tr><tr><td>1971–2000</td><td>30 yıl</td><td>610 mm</td></tr><tr><td>2001–2024</td><td>24 yıl</td><td>540 mm</td></tr></table>`,
  secenekler: [
    "Birinci ve ikinci dönemlerin karşılaştırılmasıyla havzada yağışın azaldığına",
    "Ortalamadaki azalmanın en büyük olduğu aralığın ikinci ve üçüncü dönemler arası olduğuna",
    "Üçüncü dönemde yıllık yağışın her yıl bir önceki yıldan daha az olduğuna",
    "Üçüncü dönem otuz yıldan kısa olduğundan bu ortalamanın dikkatle kullanılması gerektiğine"
  ],
  dogru: 2,
  hatalar: [
    "Tablodan çıkan sonucu ulaşılamaz sanma: 640 mm'den 610 mm'ye iki otuz yıllık ortalama arasında 30 mm azalma vardır; bu sonuca ulaşılır.",
    "Hesaplanabilen sonucu ulaşılamaz sanma: ilk aralıkta azalma 30 mm, ikinci aralıkta 70 mm'dir; en büyük azalma ikinci ve üçüncü dönemler arasındadır, bu sonuca ulaşılır.",
    null,
    "Tabloda yazan bilgiyi ulaşılamaz sanma: üçüncü dönemin uzunluğu 24 yıl olarak yazılıdır ve bu, otuz yıldan kısadır; bu sonuca ulaşılır."
  ],
  aciklama: `Bir tabloda yalnızca tablonun verdiği bilgiler ve bunlardan hesaplanabilen sonuçlar kullanılır. Dönem ortalamaları yıl yıl gidişi göstermez.
Adım 1: A'yı sına. 640 mm'den 610 mm'ye iki otuz yıllık dönem arasında yağış azalmıştır. Ulaşılır.
Adım 2: B'yi sına. 640 → 610: 30 mm azalma. 610 → 540: 70 mm azalma. En büyük azalma ikinci ve üçüncü dönemler arasındadır. Ulaşılır.
Adım 3: D'yi sına. Üçüncü dönem 24 yıl, yani otuz yıldan kısa. İklim değeri için en az otuz yıl gerektiğinden bu ortalama dikkatle kullanılmalıdır. Ulaşılır.
Adım 4: C'yi sına. Tabloda üçüncü dönemin yıl yıl yağışı yoktur, yalnızca 24 yılın ortalaması vardır. Ortalama, yıl yıl düşüş olup olmadığını söylemez. C'ye ulaşılamaz.
Sık yapılan hata: Dönem ortalamasındaki azalmayı “her yıl azaldı” diye okumak. Ortalamanın düşmesi, her yılın bir öncekinden az olması demek değildir.
Cevap C.`
},
{
  id: "fen-ik-374",
  kazanim: "F.8.1.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kurumda yürütülen üç çalışma tabloda verilmiştir. Çalışmaların her birinde bir uzman, bir konu ve bir veri kaydı yer almaktadır.
**Buna göre numaralanmış çalışmalardan hangilerinde uzmanın alanı, çalışmanın konusu ve kullanılan verinin süresi birbiriyle uyumludur?**`,
  gorsel: `<table class="tablo"><tr><th></th><th>Uzman</th><th>Çalışma</th><th>Kullanılan veri</th></tr><tr><td>I</td><td>İklim bilimci</td><td>Bölgenin iklim tipini belirlemek</td><td>2021–2024 aylık ortalamalar</td></tr><tr><td>II</td><td>Meteorolog</td><td>Yarın akşam kıyıda dalga yüksekliğini tahmin etmek</td><td>Son 12 saatin ölçümleri</td></tr><tr><td>III</td><td>İklim bilimci</td><td>Kış sıcaklıklarındaki eğilimi bulmak</td><td>1975–2024 yıllık kış ortalamaları</td></tr></table>`,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "Yalnız III",
    "II ve III"
  ],
  dogru: 3,
  hatalar: [
    "Yetersiz kaydı yeterli sayma: I'de uzman ve konu uyumludur; ama dört yıllık veri bölgenin iklim tipini belirlemek için çok kısadır.",
    "III'ü dışarıda bırakma: elli yıllık kış ortalamaları, kış sıcaklıklarındaki eğilimi bulmak için süre bakımından uygundur; III de uyumludur.",
    "II'yi dışarıda bırakma: yarın akşamki dalga yüksekliği kısa süreli bir tahmindir; meteorolog ve son saatlerin ölçümleri uyumludur.",
    null
  ],
  aciklama: `Bir çalışmada üç şey birbirine uymalıdır: uzmanın alanı, çalışmanın konusunun süresi ve kullanılan verinin süresi.
Adım 1: I'i incele. İklim tipini belirlemek iklim biliminin işidir; ama bunun için en az otuz yıllık kayıt gerekir. Kullanılan veri dört yıllıktır. Veri süresi uyumsuzdur.
Adım 2: II'yi incele. Yarın akşamki dalga yüksekliği kısa süreli bir tahmindir; meteoroloğun işidir. Son 12 saatin ölçümleri bu iş için uygun veridir. Uyumludur.
Adım 3: III'ü incele. Kış sıcaklıklarındaki eğilim uzun dönemlidir; iklim bilimcinin işidir. 1975–2024, elli yıllık bir kayıttır. Uyumludur.
Adım 4: Uyumlu çalışmalar II ve III'tür.
Sık yapılan hata: Uzmanın alanını ve konuyu doğru eşleştirip verinin süresini denetlememek. I'de uzman ve konu uyumludur; ama veri süresi uyumlu değildir.
Cevap D.`
},
{
  id: "fen-ik-375",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Grafikte K ve L kentlerinin dört ayına ait uzun yıllar ortalama yağışları verilmiştir. Bir gazeteci haberine ayrıca şunu yazmıştır: “17 Temmuz günü K'de 38 mm sağanak yağış ölçüldü, L'de ise hiç yağış olmadı.”
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<svg viewBox="0 0 560 300" role="img" aria-label="K ve L kentlerinin dört ayına ait uzun yıllar ortalama yağışlarını karşılaştıran sütun grafiği"><text x="16" y="20" fill="currentColor" font-size="14" font-weight="bold">Uzun yıllar aylık ortalama yağış (mm)</text><rect x="16" y="32" width="16" height="14" fill="var(--vurgu)"/><text x="38" y="44" fill="currentColor" font-size="14">K kenti</text><rect x="130" y="32" width="16" height="14" fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="2"/><text x="152" y="44" fill="currentColor" font-size="14">L kenti</text><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="70" y1="160" x2="545" y2="160"/><line x1="70" y1="70" x2="545" y2="70"/></g><line x1="70" y1="250" x2="545" y2="250" stroke="currentColor" stroke-width="2"/><line x1="70" y1="60" x2="70" y2="250" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="14" text-anchor="end"><text x="62" y="255">0</text><text x="62" y="165">50</text><text x="62" y="75">100</text></g><rect x="102" y="88" width="36" height="162" fill="var(--vurgu)"/><rect x="142" y="196" width="36" height="54" fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="2"/><rect x="217" y="142" width="36" height="108" fill="var(--vurgu)"/><rect x="257" y="169" width="36" height="81" fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="2"/><rect x="332" y="232" width="36" height="18" fill="var(--vurgu)"/><rect x="372" y="187" width="36" height="63" fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="2"/><rect x="447" y="124" width="36" height="126" fill="var(--vurgu)"/><rect x="487" y="178" width="36" height="72" fill="var(--dolgu)" stroke="var(--vurgu2)" stroke-width="2"/><g fill="currentColor" font-size="14" text-anchor="middle"><text x="120" y="82">90</text><text x="160" y="190">30</text><text x="140" y="274">Ocak</text><text x="235" y="136">60</text><text x="275" y="163">45</text><text x="255" y="274">Nisan</text><text x="350" y="226">10</text><text x="390" y="181">35</text><text x="370" y="274">Temmuz</text><text x="465" y="118">70</text><text x="505" y="172">40</text><text x="485" y="274">Ekim</text></g></svg>`,
  secenekler: [
    "17 Temmuz'da K'ye düşen 38 mm yağış, K'nin temmuz ayının L'ninkinden daha yağışlı olduğunu gösterir.",
    "K'de kış yağışı yaz yağışından çok fazladır; 17 Temmuz'daki sağanak bu iklim düzenini değiştirmez.",
    "L'nin dört aylık yağış toplamı, K'nin dört aylık yağış toplamından fazladır.",
    "17 Temmuz'da L'de yağış olmaması, L'nin temmuzlarının yağışsız geçtiğini gösterir."
  ],
  dogru: 1,
  hatalar: [
    "Tek günün yağışını ay ortalamasına yayma: grafiğe göre temmuz ortalaması K'de 10 mm, L'de 35 mm'dir; L'nin temmuzu daha yağışlıdır.",
    null,
    "Toplamı hesaplamadan karar verme: K'nin dört ayı 90 + 60 + 10 + 70 = 230 mm, L'nin dört ayı 30 + 45 + 35 + 40 = 150 mm eder; K'nin toplamı daha büyüktür.",
    "Tek günün yağışsızlığını iklim sanma: grafiğe göre L'nin temmuz ortalaması 35 mm'dir; yağışsız geçen tek bir gün temmuzların yağışsız geçtiğini göstermez."
  ],
  aciklama: `Grafik, uzun yıllar ortalamalarını gösterdiği için iki kentin iklimini anlatır. Gazetecinin yazdığı 17 Temmuz bilgisi ise tek bir günün hava olayıdır. İkisi birbirinin yerine konmaz.
Adım 1: Grafiği oku. K: ocak 90, nisan 60, temmuz 10, ekim 70 mm. L: ocak 30, nisan 45, temmuz 35, ekim 40 mm.
Adım 2: A'yı sına. K'nin temmuz ortalaması 10 mm, L'ninki 35 mm. Tek günlük 38 mm bu sıralamayı değiştirmez. A yanlıştır.
Adım 3: B'yi sına. K'de ocakta 90 mm yağış düşerken temmuzda yalnızca 10 mm düşer; yağış kışın yazdan çok fazladır. 17 Temmuz'daki sağanak, uzun yıllar ortalamasının oluşturduğu bu düzeni değiştirmez. B doğrudur.
Adım 4: C'yi sına. K'nin toplamı 230 mm, L'nin toplamı 150 mm'dir. C yanlıştır.
Adım 5: D'yi sına. L'nin temmuz ortalaması 35 mm'dir. Tek günün yağışsız olması temmuzların yağışsız geçtiği anlamına gelmez. D yanlıştır.
Sağlama: Gazete haberindeki iki değer de gerçek ölçümdür; ama hiçbiri grafiğin anlattığı iklim bilgisini değiştirmez.
Cevap B.`
}
);
