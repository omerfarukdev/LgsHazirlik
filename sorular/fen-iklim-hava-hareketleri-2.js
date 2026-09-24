// Fen Bilimleri — İklim ve Hava Hareketleri: Kademe 3 (LGS Ayarı) 25 soru + havuz 15 soru
// Kazanımlar: F.8.1.2.1 (iklim ile hava olayları arasındaki fark), F.8.1.2.2 (klimatoloji / iklim bilimci)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["iklim-hava-hareketleri"] = window.LGS_BANK["iklim-hava-hareketleri"] || []).push(

/* ===================== KADEME 3 — LGS AYARI (301-325) ===================== */

/* --- Düzey 3 (301-315) --- */
{
  id: "fen-ik-301",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Ada, telefonundaki hava durumu uygulamasında yaşadığı ilçe için aşağıdaki beş günlük tahmini görmüştür. Aynı uygulama, ilçenin son 30 yıla ait eylül ayı ortalama sıcaklığını 23 °C olarak vermektedir.
I. Tablodaki beş günlük değerler ilçede beklenen hava olaylarıyla ilgilidir.
II. Son 30 yıla ait eylül ortalaması, ilçenin ikliminin belirlenmesinde kullanılan verilerdendir.
III. Eylül ortalamasının 23 °C olması, ayın bütün günlerinin 23 °C geçeceği anlamına gelmez.
**Buna göre numaralanmış ifadelerden hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Tarih</th><th>Beklenen en yüksek sıcaklık</th></tr><tr><td>28 Eylül</td><td>26 °C</td></tr><tr><td>29 Eylül</td><td>24 °C</td></tr><tr><td>30 Eylül</td><td>19 °C</td></tr><tr><td>1 Ekim</td><td>21 °C</td></tr><tr><td>2 Ekim</td><td>27 °C</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "I, II ve III"],
  dogru: 3,
  hatalar: [
    "II ile III'ü dışarıda bırakma: 30 yıllık eylül ortalaması bir iklim verisidir; üstelik bir ortalama, ayın bütün günlerinin aynı geçtiği anlamına gelmez.",
    "I ile II'yi dışarıda bırakma: beş günlük tahmin hava olaylarını, 30 yıllık eylül ortalaması ise ilçenin iklimini anlatır.",
    "Ortalamayı her günün değeri sanma: tablodaki beş gün bile birbirinden farklıdır; bir ayın ortalamasının 23 °C olması her günün böyle geçeceği anlamına gelmez. III de doğrudur.",
    null
  ],
  aciklama: `Hava olayları, dar bir alanda kısa süre içinde (saatler, günler) görülen atmosfer olaylarıdır. İklim ise geniş bir bölgede uzun yıllar boyunca görülen ortalama hava koşullarıdır.
Adım 1: Tablodaki beş günlük tahmine bak. Bunlar tek tek günlere ait, kısa süreli değerlerdir; yani hava olaylarıdır. I doğrudur.
Adım 2: 30 yıllık eylül ortalamasına bak. Bu değer tek bir günü değil, otuz eylülün ortalamasını anlatır. Uzun yıllara dayanan böyle ortalamalar iklimi belirlemekte kullanılır. II doğrudur.
Adım 3: III'ü denetle. Ortalama, kendisinden düşük ve yüksek değerlerin ortasında bir yerde durur; bütün günler aynı geçseydi ortalama almaya zaten gerek kalmazdı. Tablodaki beş gün bile birbirinden farklıdır. Öyleyse eylül ortalamasının 23 °C olması, ayın her gününün 23 °C geçeceği anlamına gelmez. III de doğrudur.
Adım 4: Üç ifade de doğrudur.
Sık yapılan hata: Ortalamayı "her gün böyle olur" diye okumak, sonra ortalamanın altında geçen bir günü iklim değişikliği sanmak. Ortalamanın altında ve üstünde geçen günler olmasa ortalama zaten oluşmaz.
Cevap D.`
},
{
  id: "fen-ik-302",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki grafikte Karaçam ilçesinin uzun yıllar aylık ortalama yağış miktarları verilmiştir. Bir öğrenci, ilçeye taşınacak olan arkadaşına bu grafiği göstererek ilçeyi tanıtmak istemektedir.
**Buna göre grafiğe dayanarak aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<svg viewBox="0 0 560 300" role="img" aria-label="Karaçam ilçesinin uzun yıllar aylık ortalama yağış grafiği"><text x="16" y="20" fill="currentColor" font-size="15" font-weight="bold">Grafik: Karaçam'ın uzun yıllar aylık ortalama yağışı (mm)</text><g stroke="currentColor" stroke-width="2"><line x1="70" y1="40" x2="70" y2="250"/><line x1="70" y1="250" x2="520" y2="250"/></g><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="70" y1="180" x2="520" y2="180"/><line x1="70" y1="110" x2="520" y2="110"/><line x1="70" y1="40" x2="520" y2="40"/></g><g fill="currentColor" font-size="14" text-anchor="end"><text x="62" y="255">0</text><text x="62" y="185">40</text><text x="62" y="115">80</text><text x="62" y="45">120</text></g><g fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"><rect x="85" y="57" width="50" height="193"/><rect x="155" y="110" width="50" height="140"/><rect x="225" y="171" width="50" height="79"/><rect x="295" y="241" width="50" height="9"/><rect x="365" y="206" width="50" height="44"/><rect x="435" y="84" width="50" height="166"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="110" y="51">110</text><text x="180" y="104">80</text><text x="250" y="165">45</text><text x="320" y="235">5</text><text x="390" y="200">25</text><text x="460" y="78">95</text><text x="110" y="272">Ocak</text><text x="180" y="272">Mart</text><text x="250" y="272">Mayıs</text><text x="320" y="272">Temmuz</text><text x="390" y="272">Eylül</text><text x="460" y="272">Kasım</text></g></svg>`,
  secenekler: [
    "Grafikteki değerler tek bir yılın ölçümlerinden elde edilmiştir.",
    "Karaçam'da yazlar kurak, kışlar yağışlı geçmektedir.",
    "Gelecek temmuzda Karaçam'da kaç gün yağmur yağacağı bellidir.",
    "Temmuz ayında Karaçam'a hiçbir zaman yağmur düşmemektedir."
  ],
  dogru: 1,
  hatalar: [
    "Uzun yıllar ortalamasını tek yılın ölçümü sanma: grafiğin başlığında bu değerlerin uzun yılların ortalaması olduğu yazılıdır.",
    null,
    "İklim grafiğini hava tahmini sanma: ortalamalar gelecek bir ayın kaç gün yağış alacağını söylemez.",
    "Ortalamayı sıfır sanma: temmuzun ortalaması 5 mm'dir; düşük olması hiç yağmadığı anlamına gelmez."
  ],
  aciklama: `İklim, bir bölgede uzun yıllar boyunca görülen ortalama hava koşullarıdır. Bir yerin iklimini tanımak için aylık ortalama sıcaklık ve yağış değerlerine bakılır.
Adım 1: Grafiğin başlığını oku. Değerler "uzun yıllar aylık ortalaması" olarak verilmiş; yani tek bir yılın değil, pek çok yılın ortalamasıdır. A elenir.
Adım 2: Yaz aylarına bak. Temmuzda ortalama yağış 5 mm, eylülde 25 mm'dir. Yani yazlar kuraktır.
Adım 3: Kış aylarına bak. Ocakta 110 mm, kasımda 95 mm yağış vardır. Yani kışlar yağışlıdır.
Adım 4: Bu iki bulgu birleşince "yazları kurak, kışları yağışlı" bir iklim ortaya çıkar. B doğrudur.
Adım 5: C, ortalamadan gelecek bir ayın günlük havasını çıkarmaya çalışır; bu iklim verisiyle yapılamaz. D ise "ortalama düşük" bilgisini "hiç yağmıyor" diye abartır; 5 mm sıfır değildir.
Sağlama: Kurak yaz - yağışlı kış örüntüsü, Akdeniz kıyılarımızdaki iklimin en bilinen özelliğidir.
Cevap B.`
},
{
  id: "fen-ik-303",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir kentin birbirine komşu iki mahallesi olan Yamaç ve Sahil'e birer yağış ölçer yerleştirilmiştir. 12 Nisan günü Yamaç'ta 14 mm yağış ölçülürken Sahil'de hiç yağış ölçülmemiştir. İki mahalleye ait uzun yıllar ortalamaları da tabloda verilmiştir.
**Buna göre bu iki mahalleyle ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Veri</th><th>Yamaç</th><th>Sahil</th></tr><tr><td>12 Nisan günü ölçülen yağış</td><td>14 mm</td><td>0 mm</td></tr><tr><td>Nisan ayı uzun yıllar ortalama yağışı</td><td>62 mm</td><td>60 mm</td></tr><tr><td>Yıllık ortalama sıcaklık</td><td>15,8 °C</td><td>16,0 °C</td></tr></table>`,
  secenekler: [
    "Aynı gün farklı yağış ölçülmesi, hava olaylarının dar bir alanda bile değişebildiğini gösterir.",
    "Aynı gün farklı yağış ölçülmesi, iki mahallenin iklim özelliklerinin farklı olduğunu gösterir.",
    "Uzun yıllar ortalamalarının yakın olması, iki mahallede her günün aynı geçeceğini gösterir.",
    "Nisan ortalamaları arasındaki fark, Yamaç'ın nisan aylarının belirgin biçimde yağışlı geçtiğini gösterir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bir günün ölçümünü iklim farkı sayma: iklim tek günle değil uzun yıllar ortalamalarıyla karşılaştırılır; tablodaki ortalamalar birbirine çok yakındır.",
    "İklim benzerliğini her günün aynı geçmesi diye okuma: iklimi aynı olan iki yerde bile aynı gün farklı hava olayları görülebilir.",
    "2 mm'lik farkı belirgin sayma: 62 mm ile 60 mm neredeyse aynıdır, aralarındaki fark bir üstünlük anlamına gelmez."
  ],
  aciklama: `Hava olayları dar bir alanda kısa süre içinde görülür; iklim ise geniş bir bölgede uzun yıllar boyunca görülen ortalama koşullardır. Bu yüzden iki yer için "aynı iklim" ile "aynı hava" bambaşka şeylerdir.
Adım 1: Tablonun ilk satırını oku. 12 Nisan'da Yamaç'ta 14 mm yağış varken Sahil'de hiç yağış yoktur. Yani komşu iki mahallede aynı gün farklı hava olayları görülmüştür.
Adım 2: Alt iki satırı oku. Nisan ortalamaları 62 mm ve 60 mm, yıllık ortalama sıcaklıklar 15,8 °C ve 16,0 °C'dir. Uzun yıllar değerleri birbirine çok yakındır; yani iki mahallenin iklim özellikleri benzerdir.
Adım 3: İki bulguyu birleştir. İklimleri benzer olmasına karşın o gün farklı yağış ölçülmüştür. Öyleyse hava olayları dar bir alanda bile değişebilir. A doğrudur.
Adım 4: B yanlıştır, çünkü iklim tek bir günle değil ortalamalarla belirlenir. C yanlıştır, çünkü iklimi benzer yerlerde bile günler farklı geçebilir; zaten tablo bunun örneğidir. D yanlıştır, çünkü 62 mm ile 60 mm arasındaki 2 mm'lik fark belirgin sayılmaz.
Sağlama: Bir sağanak bulutu birkaç kilometrelik bir alanı ıslatıp yandaki mahalleyi kuru bırakabilir; ama aynı bulut otuz yılın ortalamasını değiştiremez.
Cevap A.`
},
{
  id: "fen-ik-304",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir meteoroloji istasyonu 40 yıldır her gün en yüksek sıcaklığı ve yağış miktarını ölçüp kaydetmektedir. İstasyon bu kayıtlardan aşağıdaki iki çizelgeyi hazırlamıştır. Bölgenin kuraklaşıp kuraklaşmadığını araştıran bir iklim bilimci çizelgeleri incelemektedir.
**Buna göre iklim bilimcinin varacağı yargı aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th colspan="3">Çizelge 1 — Son üç günün ölçümleri</th></tr><tr><th>Gün</th><th>En yüksek sıcaklık</th><th>Yağış</th></tr><tr><td>6 Mart</td><td>14 °C</td><td>0 mm</td></tr><tr><td>7 Mart</td><td>11 °C</td><td>8 mm</td></tr><tr><td>8 Mart</td><td>13 °C</td><td>2 mm</td></tr></table><table class="tablo"><tr><th colspan="2">Çizelge 2 — Mart ayı uzun yıllar ortalaması (1985 – 2024)</th></tr><tr><td>Ortalama sıcaklık</td><td>12 °C</td></tr><tr><td>Ortalama yağış</td><td>54 mm</td></tr></table>`,
  secenekler: [
    "Üç günde toplam 10 mm yağış düşmüştür; bu değer 54 mm olan mart ortalamasının çok altında olduğu için bölge kuraklaşmıştır.",
    "Üç günün sıcaklık ortalaması yaklaşık 12,7 °C'dir; bu değer 12 °C olan mart ortalamasına yakın olduğu için bölgenin ikliminde bir değişme yoktur.",
    "Çizelge 2 ortalama değerlerden oluştuğu için kuraklık araştırmasında kullanılamaz; yalnızca günlük ölçümler kullanılmalıdır.",
    "Çizelge 1 yalnızca üç günün havasını gösterir; kuraklık için Çizelge 2'deki gibi uzun yıllık ortalamaların birbiriyle karşılaştırılması gerekir."
  ],
  dogru: 3,
  hatalar: [
    "Üç günü koca bir ayla karşılaştırma: 10 mm üç güne, 54 mm bütün bir marta aittir. Toplamlar zaten farklı süreleri kapsadığı için bu karşılaştırma kuraklık göstermez.",
    "Hesap doğru ama sürenin kısalığını atlama: üç günün ortalaması mart normaline yakın çıkabilir; üç gün, iklimin değişip değişmediğini söyleyemez.",
    "Ortalamayı işe yaramaz sanma: iklim verisi zaten uzun yıllık ölçümlerin ortalamasıdır; kuraklık araştırması tam da bu ortalamalara dayanır.",
    null
  ],
  aciklama: `Hava olayları kısa sürelidir ve tek tek günleri anlatır; iklim ise uzun yılların ortalamasıdır. Bir yargının iklimle ilgili olabilmesi için dayandığı verinin uzun bir süreyi kapsaması gerekir.
Adım 1: Çizelge 1'deki yağışları topla: 0 + 8 + 2 = 10 mm. Sıcaklıkların ortalamasını al: (14 + 11 + 13) ÷ 3 ≈ 12,7 °C. Bu değerler yalnızca üç güne aittir.
Adım 2: A şıkkını sına. 10 mm ile 54 mm'yi karşılaştırıyor; ama 10 mm üç günün, 54 mm bütün bir mart ayının değeridir. Farklı süreleri karşılaştırmak kuraklık kanıtı olmaz.
Adım 3: B şıkkını sına. Hesap doğru (12,7 ≈ 12) ama sonuç yanlıştır: üç günün normale yakın olması ikliminin değişmediğini göstermez. İklim için yıllar karşılaştırılır.
Adım 4: C şıkkını sına. İklim verisi zaten ortalamadır; ortalamayı dışlayan bir iklim araştırması olamaz.
Adım 5: Geriye D kalır: üç günlük çizelge havayı gösterir; kuraklık ancak Çizelge 2 gibi uzun yıllık ortalamaların farklı dönemler için karşılaştırılmasıyla anlaşılır.
Sık yapılan hata: Tablodaki sayıları hesaplayıp doğru sonuca ulaşınca yargının da doğru olduğunu sanmak. Sayı doğru olabilir; asıl soru, o sayının hangi süreyi kapsadığıdır.
Cevap D.`
},
{
  id: "fen-ik-305",
  kazanim: "F.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bilim programına iki konuk katılmıştır. Konuklardan biri hava olaylarını inceleyen meteorolog, diğeri iklimi inceleyen iklim bilimcidir (klimatolog). Program boyunca şu cümleler kurulmuştur:
I. "Cumartesi günü kıyı kesimlerde sağanak yağış bekliyoruz."
II. "Son elli yılda ülkemizin güneyinde karla örtülü gün sayısı azaldı."
III. "Bu yüzyılın sonunda deniz seviyesinin yükselmesi beklenmektedir."
**Buna göre numaralanmış cümlelerden hangileri iklim bilimcinin çalışma alanına girer?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "I ve II", "II ve III", "I, II ve III"],
  dogru: 2,
  hatalar: [
    "Geleceğe yönelik iklim öngörüsünü kapsam dışı sayma: III de on yıllarla ölçülen uzun dönemli bir değerlendirmedir ve iklim bilimcinin alanına girer.",
    "Meteoroloğun sözünü iklim bilimciye yükleme: bir günlük sağanak tahmini hava olayıdır; üstelik bu şıkta III de dışarıda bırakılmıştır.",
    null,
    "Kısa süreli tahmini de iklim bilimciye yükleme: I, saatlerle ölçülen bir hava olayıdır."
  ],
  aciklama: `İklim bilimi (klimatoloji), bir bölgenin uzun yıllar boyunca görülen ortalama hava koşullarını inceleyen bilim dalıdır; bu alanda çalışan uzmana iklim bilimci (klimatolog) denir. Kısa süreli hava olaylarını inceleyen bilim dalı ise meteorolojidir.
Adım 1: I'i incele. "Cumartesi günü" ifadesi tek bir günü anlatır. Bu kısa süreli bir tahmindir, meteoroloğun işidir. I iklim bilimcinin alanına girmez.
Adım 2: II'yi incele. "Son elli yılda" ifadesi uzun bir zaman aralığını anlatır; karla örtülü gün sayısının yıllar içindeki değişimi iklimle ilgilidir. II iklim bilimcinin alanına girer.
Adım 3: III'ü incele. "Bu yüzyılın sonunda" ifadesi on yıllarla ölçülen bir değişimi anlatır. Deniz seviyesinin yükselmesi küresel iklim değişikliğinin sonuçlarındandır. III de iklim bilimcinin alanına girer.
Adım 4: Öyleyse II ve III iklim bilimcinin alanına girer.
Sık yapılan hata: Geleceğe dönük her cümleyi "tahmin" sayıp meteorolojiye vermek. Belirleyici olan cümlenin geleceği anlatması değil, kapsadığı sürenin uzunluğudur.
Cevap C.`
},
{
  id: "fen-ik-306",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Deniz, "Kentimizin iklimi ısındı mı?" sorusunu araştırmak istemiştir. Okul bahçesinde gölgeli bir yere termometre yerleştirmiş, iki hafta boyunca her gün aynı saatte sıcaklığı ölçmüş, ölçtüğü on dört değerin ortalamasını almış ve bu ortalamaya bakarak "Kentimizin iklimi ısındı." sonucuna varmıştır. Öğretmeni, ulaştığı sonucun geçerli olmadığını söylemiştir.
**Buna göre Deniz'in çalışmasıyla ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Ölçümlerin ortalaması alındığı için elde edilen değer bir iklim verisi sayılır.",
    "Ölçümün süresi, kentin bu yılki iklimi hakkında yorum yapmaya yeterlidir.",
    "Ölçümün süresi iklim yorumu için yetersizdir; uzun yılların kayıtları gerekir.",
    "Ölçüm uzun yıllar sürse bile tek bir noktada yapıldığından iklim yorumuna elvermez."
  ],
  dogru: 2,
  hatalar: [
    "Her ortalamayı iklim verisi sanma: bir ortalamanın iklim sayılabilmesi için uzun yılları kapsaması gerekir.",
    "Tek bir yıl için iklim tanımlama: bir yerin ikliminden söz edebilmek için en az otuz yıllık kayıt gerekir, 'bu yılın iklimi' diye bir şey yoktur.",
    null,
    "Sorunu ölçümün yapıldığı noktada arama: meteoroloji istasyonları da tek bir noktada ölçüm yapar; burada eksik olan sürenin kısalığıdır."
  ],
  aciklama: `İklim, bir bölgede uzun yıllar boyunca görülen ortalama hava koşullarıdır. İklim değerlendirmelerinde en az otuz yıllık kesintisiz kayıt kullanılır.
Adım 1: Deniz'in topladığı veriye bak. On dört günlük ölçüm, olsa olsa o iki haftanın havasını anlatır.
Adım 2: "İklim ısındı" diyebilmek için kentin bugünkü uzun dönemli ortalamasının geçmişteki uzun dönemli ortalamasından yüksek olduğunu göstermek gerekir. Bunun için on yıllara yayılan kayıtlar şarttır; Deniz'in elinde karşılaştırma yapacağı eski bir ortalama da yoktur.
Adım 3: Öyleyse eksik olan şey uzun yılların kayıtlarıdır. C doğrudur.
Adım 4: A'yı denetle. Ortalama almak tek başına bir veriyi iklim verisi yapmaz; belirleyici olan ortalamanın kaç yılı kapsadığıdır.
Adım 5: B'yi denetle. İklim en az otuz yılın ortalamasıyla tanımlandığına göre "bu yılın iklimi" diye bir şey yoktur; bir yıl ancak hava koşullarıyla anlatılır.
Adım 6: D'yi denetle. Meteoroloji istasyonları da ölçümlerini tek bir noktada yapar ve bu ölçümlerin uzun yıllar ortalaması iklim verisi sayılır. Öyleyse kusur ölçüm noktasında değil, ölçümün süresindedir.
Sık yapılan hata: Ortalama alınmış her değeri iklim verisi sanmak. Ortalamanın iklim sayılabilmesi için uzun yılları kapsaması gerekir.
Cevap C.`
},
{
  id: "fen-ik-307",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir gazetenin aynı sayfasında yer alan üç haber başlığı aşağıda verilmiştir.
**Buna göre numaralanmış başlıklardan hangileri iklimle ilgilidir?**`,
  gorsel: `<table class="tablo"><tr><th>Haber</th><th>Başlık</th></tr><tr><td>I</td><td>Kuzey kesimlerde yarın kar yağışı etkili olacak</td></tr><tr><td>II</td><td>Kente dün 24 saatte 78 mm yağış düştü; bu, yılın en yağışlı günü oldu</td></tr><tr><td>III</td><td>Ege kıyılarında yaz kuraklıkları on yıllar içinde uzuyor</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve II"],
  dogru: 2,
  hatalar: [
    "Kısa süreli tahmini iklim sanma: yarınki kar yağışı bir hava olayıdır.",
    "Bir günün rekorunu iklim verisi sayma: 'yılın en yağışlı günü' denmesi ölçümü uzun dönemli yapmaz; anlatılan, 24 saat içinde olup biten tek bir yağıştır.",
    null,
    "İki hava olayını birlikte iklim sayma: I yarını, II dünü anlatır; ikisi de günlerle ölçülür."
  ],
  aciklama: `Bir cümlenin iklimle mi hava olayıyla mı ilgili olduğunu anlamanın en pratik yolu, cümlenin anlattığı olayın ne kadar sürdüğüne bakmaktır. Saatler ve günler hava olayını, yıllar ve on yıllar iklimi anlatır.
Adım 1: I'i incele. "Yarın" tek bir günü anlatır. Bu bir hava tahminidir, iklim bilgisi değildir.
Adım 2: II'yi incele. Başlıkta "yılın en yağışlı günü" gibi geniş bir zaman sözcüğü geçtiği için kulağa iklim bilgisi gibi gelir. Ama dikkat et: anlatılan olay dün 24 saatte düşen yağıştır. Bir yılın kayıtları içinden seçilmiş de olsa, tek bir günün ölçümü bir hava olayıdır. Sıralama yapmak için bir yıla bakmak, o ölçümü uzun dönemli yapmaz. II iklimle ilgili değildir.
Adım 3: III'ü incele. "On yıllar içinde uzuyor" ifadesi tek bir olayı değil, yıllar boyunca süren bir eğilimi anlatır. Kuraklık süresinin on yıllar içinde uzaması iklimle ilgilidir.
Adım 4: Öyleyse iklimle ilgili olan yalnızca III'tür.
Sık yapılan hata: Başlıkta geçen en uzun zaman sözcüğüne bakıp karar vermek. Ölçüt, cümlede hangi sözcüğün geçtiği değil, anlatılan olayın kaç günü ya da kaç yılı kapsadığıdır.
Cevap C.`
},
{
  id: "fen-ik-308",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir öğrenci, iklim ile hava olaylarını karşılaştıran aşağıdaki posteri hazırlamıştır. Öğretmen posteri incelediğinde satırlardan birinde bilgilerin yer değiştirdiğini fark etmiştir.
**Buna göre posterde __yanlış__ bilgi içeren satır hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Satır</th><th>Özellik</th><th>Hava olayları</th><th>İklim</th></tr><tr><td>I</td><td>Kapsadığı süre</td><td>Saatler, günler</td><td>Uzun yıllar</td></tr><tr><td>II</td><td>Değişim hızı</td><td>Yavaş değişir</td><td>Hızlı değişir</td></tr><tr><td>III</td><td>Kapsadığı alan</td><td>Dar bölge</td><td>Geniş bölge</td></tr><tr><td>IV</td><td>İnceleyen bilim dalı</td><td>Meteoroloji</td><td>Klimatoloji</td></tr></table>`,
  secenekler: ["I", "II", "III", "IV"],
  dogru: 1,
  hatalar: [
    "Süre satırını yanlış sanma: hava olayları gerçekten saatler ve günlerle, iklim uzun yıllarla ölçülür.",
    null,
    "Alan satırını yanlış sanma: hava olayları dar bir alanda, iklim geniş bir bölgede değerlendirilir.",
    "Bilim dalı satırını yanlış sanma: hava olaylarını meteoroloji, iklimi klimatoloji (iklim bilimi) inceler."
  ],
  aciklama: `İklim ile hava olaylarını dört başlıkta karşılaştırabilirsin: süre, alan, değişim hızı ve inceleyen bilim dalı.
Adım 1: I. satırı denetle. Hava olayları saatler ve günlerle, iklim uzun yıllarla ölçülür. Doğrudur.
Adım 2: II. satırı denetle. Hava olayları çok kısa sürede değişir; sabah güneşli olan hava öğleden sonra yağışlı olabilir. İklim ise yıllar hatta on yıllar içinde, yavaş yavaş değişir. Posterde bu ikisi yer değiştirmiştir. II. satır yanlıştır.
Adım 3: III. satırı denetle. Hava olayı dar bir alanda görülebilir; bir ilçede yağmur yağarken yandaki ilçe kuru kalabilir. İklim ise geniş bölgeleri anlatır. Doğrudur.
Adım 4: IV. satırı denetle. Hava olaylarını meteoroloji, iklimi klimatoloji inceler. Doğrudur.
Adım 5: Öyleyse yanlış olan II. satırdır.
Sağlama: "Hava hızlı değişir, iklim yavaş" cümlesini aklında tut; bu satır ters yazıldığı an fark edilir.
Cevap B.`
},
{
  id: "fen-ik-309",
  kazanim: "F.8.1.2.2",
  kademe: 3,
  zorluk: 3,
  soru: `İklim bilimciler yalnızca bugünün ölçüm aletleriyle yetinmez; geçmişin iklimini öğrenmek için doğadaki kayıtlara da bakarlar. Örneğin buzul katmanlarından çıkarılan buz silindirlerini ve kesilmiş ağaç gövdelerindeki yıllık halkaları incelerler.
I. Buz katmanlarındaki hava kabarcıkları, geçmiş dönemlerin atmosfer bileşimi hakkında bilgi verir.
II. Ağaç halkalarının genişliği, o yılların yağış ve sıcaklık koşulları hakkında ipucu verir.
III. Bu kayıtlar uzun dönemleri kapsadığı için, önümüzdeki haftanın havası da bunlardan çıkarılabilir.
**Buna göre numaralanmış ifadelerden hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız II", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "I'i dışarıda bırakma: buz katmanlarında sıkışıp kalan hava kabarcıkları, o dönemin atmosfer bileşimini bugüne taşıyan bir kayıttır.",
    null,
    "Ağaç halkalarını iklim kaydı saymayıp III'ü doğru sayma: halkanın genişliği o yılın yağış ve sıcaklık koşullarını yansıtır; uzun dönemli bir kayıttan ise gelecek haftanın havası çıkarılamaz.",
    "III'ün gerekçesi doğru diye kendisini de doğru sayma: kayıtların uzun dönemleri kapsaması doğrudur, ama uzun dönem bilgisi belirli bir haftanın havasını vermez."
  ],
  aciklama: `İklim bilimi (klimatoloji), geçmişin ve bugünün iklimini inceleyip gelecekteki eğilimleri değerlendiren bilim dalıdır. Ölçüm aletlerinin bulunmadığı dönemlerin iklimi, doğanın kendi tuttuğu kayıtlardan okunur.
Adım 1: I'i incele. Buzullar her yıl üst üste yeni bir kar katmanı biriktirir. Bu katmanların içinde o döneme ait hava kabarcıkları sıkışıp kalır. Bu kabarcıklar geçmiş dönemlerin atmosfer bileşimi hakkında bilgi verir. I doğrudur.
Adım 2: II'yi incele. Ağaçlar her yıl bir halka ekler. Yağışlı ve elverişli geçen yıllarda halka geniş, kurak yıllarda dar olur. Halka genişliği o yılların koşulları hakkında ipucudur. II doğrudur.
Adım 3: III'ü incele. İfade "uzun dönemleri kapsadığı için" diyerek ölçülü ve gerekçeli görünür; gerekçesi de doğrudur, bu kayıtlar gerçekten yüzyılları kapsar. Ama gerekçe sonucu taşımaz: uzun dönemli bir kayıt, belirli bir haftanın havası hakkında bilgi vermez. Önümüzdeki haftanın havasını tahmin etmek meteorolojinin işidir ve bunun için uydu ile istasyon verileri kullanılır, buz silindiri değil. III yanlıştır.
Adım 4: Doğru olanlar I ve II'dir.
Sık yapılan hata: Bir öncülün gerekçesi doğru diye öncülün tamamını doğru saymak. "Kayıtlar uzun dönemi kapsar" doğrudur; ama bundan "öyleyse gelecek haftayı da verir" sonucu çıkmaz. Öncülü iki parçaya böl, gerekçenin sonucu gerçekten taşıyıp taşımadığına bak.
Cevap B.`
},
{
  id: "fen-ik-310",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Karadeniz kıyısındaki bir ilçede kırk yıl önce neredeyse hiç zeytin ağacı yokken bugün geniş zeytinlikler bulunmaktadır. İlçeye ait bazı veriler tabloda gösterilmiştir.
**Buna göre bu ilçeyle ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Dönem</th><th>Yıllık ortalama sıcaklık</th><th>Zeytin dikili alan</th></tr><tr><td>1985 – 1994</td><td>12,1 °C</td><td>40 hektar</td></tr><tr><td>1995 – 2004</td><td>12,6 °C</td><td>260 hektar</td></tr><tr><td>2005 – 2014</td><td>13,2 °C</td><td>1.150 hektar</td></tr><tr><td>2015 – 2024</td><td>13,9 °C</td><td>3.400 hektar</td></tr></table>`,
  secenekler: [
    "Zeytin dikili alanın genişlemesi, ilçenin sıcaklık ortalamasını yükseltmiştir.",
    "İlçenin sıcaklık ortalamasındaki yükselme son dönemde durmuştur.",
    "İlçede kış mevsiminin ortalama sıcaklığı 1,8 °C yükselmiştir.",
    "İlçenin sıcaklık ortalaması tablodaki bütün dönemler boyunca yükselmiştir."
  ],
  dogru: 3,
  hatalar: [
    "Neden ile sonucu ters çevirme: iki sütun birlikte değişmiştir, ama ısınan ilçe zeytin yetiştirmeye elverişli hâle gelmiştir; zeytinlikler ilçenin sıcaklık ortalamasını yükseltmez.",
    "Yarım doğru: yükselme gerçekten vardır, ama durmamıştır; son dönemdeki 13,2 °C'den 13,9 °C'ye artış tablodaki en büyük artıştır.",
    "Tabloda verilmeyen bilgiyi sonuca yazma: 1,8 °C, yıllık ortalamanın kırk yıldaki artışıdır; tabloda kış aylarına ait ayrı bir satır yoktur.",
    null
  ],
  aciklama: `İklim, uzun yıllar boyunca görülen ortalama hava koşullarıdır. Bir yerin ikliminin değiştiğini anlamak için farklı dönemlerin ortalamaları karşılaştırılır.
Adım 1: Sıcaklık sütununu sırayla oku: 12,1 - 12,6 - 13,2 - 13,9 °C. Her dönem bir öncekinden yüksektir; dört satırın dördü de aynı yöne gider.
Adım 2: D'yi denetle. "Bütün dönemler boyunca yükselmiştir" güçlü bir ifadedir, bu yüzden sütunu baştan sona sınaman gerekir: 12,1'den 12,6'ya, 12,6'dan 13,2'ye, 13,2'den 13,9'a. Üç geçişin üçünde de değer artmıştır. Arada düşen tek bir değer olsaydı D yanlış olurdu; öyle bir değer yoktur. Öyleyse ifade veriyle tam olarak karşılanır. D doğrudur.
Adım 3: A'yı denetle. Sıcaklık yükselirken zeytin dikili alan da 40 hektardan 3.400 hektara çıkmıştır, iki sütun birlikte değişmiştir. Ama yön terstir: zeytin soğuğa dayanıksız bir bitkidir, ortalamanın yükselmesi ilçeyi zeytin yetiştirmeye elverişli hâle getirmiştir. Zeytinlikler ilçeyi ısıtmaz.
Adım 4: B'yi denetle. Cümlenin ilk yarısı doğrudur, yükselme vardır. İkinci yarısı yanlıştır: son artış 13,9 − 13,2 = 0,7 °C ile dönemler arasındaki en büyük artıştır, yükselme durmamıştır.
Adım 5: C'yi denetle. 1,8 °C sayısı tablodan çıkar (13,9 − 12,1), ama bu yıllık ortalamanın artışıdır. Tabloda kış aylarına ait ayrı bir satır yoktur; verilmeyen bir değer sonuç olarak yazılamaz.
Sağlama: Bir şıkta "bütün" sözcüğünü görünce onu okumadan elemeyi alışkanlık hâline getirme. Bu sözcük ancak veriyle çelişiyorsa şıkkı yanlış yapar; burada sütunun tamamı aynı yöne gittiği için "bütün" demek doğrudur.
Cevap D.`
},
{
  id: "fen-ik-311",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir bölgede yapılan üç gözlem aşağıda verilmiştir.
I. Bölgede yıllık ortalama sıcaklığın son elli yılda 1,2 °C yükselmesi
II. Bir sabah kıyıdaki sisin öğleye kadar dağılmaması
III. Sıcak hava dalgası yaşanan gün sayısının on yıllar içinde artması
**Buna göre numaralanmış gözlemlerden hangileri iklim değişikliğinin göstergesi sayılabilir?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız III", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "III'ü göstergeden saymama: sıcak dalgası gün sayısının on yıllar içinde artması uzun dönemli bir değişimdir.",
    "I'i göstergeden saymama: elli yıllık ortalama sıcaklık artışı iklim değişikliğinin en temel göstergesidir.",
    null,
    "Bir sabahın sisini gösterge sayıp I'i dışarıda bırakma: sis birkaç saatte oluşup dağılan bir hava olayıdır."
  ],
  aciklama: `İklim değişikliğinden söz edebilmek için, gözlenen değişimin uzun yıllara yayılması gerekir. Tek bir günün ya da sabahın olayı hava olayıdır.
Adım 1: I'i incele. "Son elli yılda 1,2 °C yükselme" ifadesi uzun dönemli bir ortalamayı anlatır. Bu, iklim değişikliğinin doğrudan göstergesidir. I sayılır.
Adım 2: II'yi incele. Sis bir sabah oluşup birkaç saat sonra dağılan bir hava olayıdır. Bir sabahın sisi iklim hakkında hiçbir sonuç vermez. II sayılmaz.
Adım 3: III'ü incele. "On yıllar içinde artması" ifadesi yine uzun dönemli bir eğilimdir. Sıcak hava dalgalı gün sayısının artması, iklimin ısındığını gösteren göstergelerdendir. III sayılır.
Adım 4: Öyleyse gösterge sayılanlar I ve III'tür.
Sık yapılan hata: Sıra dışı geçen tek bir günü iklim değişikliğinin kanıtı saymak. Kanıt olan, tek tek olaylar değil, yılların ortalamasındaki kalıcı kaymadır.
Cevap C.`
},
{
  id: "fen-ik-312",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki tabloda bir kentin uzun yıllar ortalamalarından (iklim normallerinden) bazıları verilmiştir. Ağustos ayında bu kente gitmeyi düşünen bir gezgin, tabloyu inceleyerek hazırlık yapmaktadır.
**Buna göre gezgin, bu tabloya bakarak aşağıdakilerden hangisine __ulaşamaz__?**`,
  gorsel: `<table class="tablo"><tr><th>Ay</th><th>Ortalama sıcaklık</th><th>Ortalama yağış</th></tr><tr><td>Şubat</td><td>7 °C</td><td>88 mm</td></tr><tr><td>Nisan</td><td>13 °C</td><td>52 mm</td></tr><tr><td>Haziran</td><td>21 °C</td><td>22 mm</td></tr><tr><td>Ağustos</td><td>26 °C</td><td>6 mm</td></tr><tr><td>Ekim</td><td>18 °C</td><td>45 mm</td></tr><tr><td>Aralık</td><td>9 °C</td><td>96 mm</td></tr></table>`,
  secenekler: [
    "Tablodaki en yağışlı ayın hangisi olduğuna",
    "Kentte yazların kışlardan sıcak geçtiğine",
    "Kentte ağustos aylarının genelde kurak geçtiğine",
    "Kentte 15 Ağustos günü yağmur yağıp yağmayacağına"
  ],
  dogru: 3,
  hatalar: [
    "Tabloda bulunan bilgiyi yok sayma: yağış sütunundaki en büyük değer olan 96 mm, en yağışlı ayın aralık olduğunu doğrudan gösterir.",
    "Sıcaklık sütununu karşılaştırmayı atlama: ağustos 26 °C, şubat 7 °C'dir; yazlar kışlardan sıcaktır.",
    "Yağış sütununu okumayı atlama: ağustos satırındaki 6 mm, bu ayların genelde kurak geçtiğini gösterir.",
    null
  ],
  aciklama: `İklim normalleri, bir yerde uzun yıllar boyunca ölçülen değerlerin ortalamasıdır. Ortalama, o ayın genel eğilimini anlatır; belirli bir günde ne olacağını söylemez.
Adım 1: A'yı denetle. Yağış sütununda en büyük değer 96 mm ile aralıktır. Bilgi tabloda vardır, ulaşılır.
Adım 2: B'yi denetle. Ağustos 26 °C, haziran 21 °C iken şubat 7 °C, aralık 9 °C'dir. Yaz ayları kış aylarından sıcaktır. Ulaşılır.
Adım 3: C'yi denetle. Ağustosun ortalama yağışı yalnızca 6 mm'dir; bu, ağustosların genelde kurak geçtiğini gösterir. Ulaşılır.
Adım 4: D'yi denetle. Tabloda tek tek günlerin verisi yoktur; yalnızca ayların uzun yıllar ortalaması vardır. Belirli bir günde yağmur yağıp yağmayacağı ancak o güne yakın yapılan hava tahmininden öğrenilir. Bu bilgiye ulaşılamaz.
Sık yapılan hata: "Ortalama yağış düşükse o gün kesin yağmaz." demek. Ortalama, ayın genel eğilimidir; tek bir günün havasını belirlemez.
Cevap D.`
},
{
  id: "fen-ik-313",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir enerji şirketi kıyı kesimindeki bir alana rüzgâr santrali kuracaktır. Şirketin mühendisleri hazırlık aşamasında şu görüşleri ileri sürmüştür:
I. Santralin kurulacağı yerin son yirmi yıla ait rüzgâr hızı ortalamaları incelenmelidir.
II. Kurulum çalışmalarının yapılacağı günlerin hava tahmini, çalışan güvenliği için izlenmelidir.
III. Kurulum günü ölçülen rüzgâr hızı gerçek bir ölçüm olduğu için, santralin yıllık üretimi bu değerden hesaplanabilir.
**Buna göre numaralanmış görüşlerden hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "Günlük hava tahminini gereksiz sayma: kurulum sırasındaki fırtına ya da yağış çalışmayı ve güvenliği doğrudan etkiler.",
    null,
    "Uzun yıllar rüzgâr verisini dışarıda bırakma: santralin yerini belirleyen asıl veri budur.",
    "III'ün gerekçesi doğru diye kendisini de doğru sayma: ölçüm gerçekten yapılmıştır, ama bir günün rüzgârı o günün havasıdır ve yılın tamamını temsil etmez."
  ],
  aciklama: `Uzun ömürlü yatırımlarda iklim verisi, günlük işlerde hava tahmini kullanılır. İkisi birbirinin yerine geçmez.
Adım 1: I'i incele. Santral yıllarca çalışacaktır. Bir yerde rüzgârın yıl boyunca ne kadar güçlü ve ne kadar düzenli estiği ancak uzun yılların ortalamasından anlaşılır. I doğrudur.
Adım 2: II'yi incele. Kurulum sırasında yüksek direklerde çalışılır. O günlerde fırtına ya da yağış olup olmayacağı kısa süreli hava tahmininden öğrenilir ve güvenlik için gereklidir. II doğrudur.
Adım 3: III'ü incele. İfade "gerçek bir ölçüm olduğu için" diyerek sağlam bir gerekçeye yaslanır gibi görünür. Gerekçe doğrudur, o gün gerçekten ölçüm yapılmıştır; ama bir sayının ölçülmüş olması onu yıl boyunca geçerli yapmaz. Kurulum günü rüzgâr olağandışı güçlü ya da olağandışı zayıf esmiş olabilir. Yıllık üretim, uzun yıllar rüzgâr ortalamasından hesaplanır. III yanlıştır.
Adım 4: Doğru olanlar I ve II'dir.
Sağlama: Aynı ayrımı tarımda da görürsün: tarlaya ne ekileceğine iklim verisiyle, hasadın hangi gün yapılacağına hava tahminiyle karar verilir.
Cevap B.`
},
{
  id: "fen-ik-314",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Aşağıdaki grafikte Yeşilyurt kentinin 1980 - 2020 yılları arasındaki yıllık ortalama sıcaklıkları verilmiştir. Grafiği inceleyen bir öğrenci, "1985 yılı 1980'den, 1995 yılı da 1990'dan serin geçmiş. Demek ki kentimiz ısınmıyor." demiştir.
**Buna göre öğrencinin bu değerlendirmesiyle ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<svg viewBox="0 0 560 300" role="img" aria-label="Yeşilyurt kentinin 1980-2020 yılları arasındaki yıllık ortalama sıcaklık grafiği"><text x="16" y="20" fill="currentColor" font-size="15" font-weight="bold">Grafik: Yeşilyurt'un yıllık ortalama sıcaklığı (°C)</text><g stroke="currentColor" stroke-width="2"><line x1="58" y1="45" x2="58" y2="252"/><line x1="58" y1="252" x2="536" y2="252"/></g><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="58" y1="217" x2="536" y2="217"/><line x1="58" y1="150" x2="536" y2="150"/><line x1="58" y1="83" x2="536" y2="83"/></g><g fill="currentColor" font-size="14" text-anchor="end"><text x="50" y="222">13</text><text x="50" y="155">14</text><text x="50" y="88">15</text></g><polyline points="80,210 135,217 190,190 245,197 300,157 355,163 410,130 465,110 520,83" fill="none" stroke="var(--vurgu)" stroke-width="3"/><g fill="var(--vurgu)"><circle cx="80" cy="210" r="5"/><circle cx="135" cy="217" r="5"/><circle cx="190" cy="190" r="5"/><circle cx="245" cy="197" r="5"/><circle cx="300" cy="157" r="5"/><circle cx="355" cy="163" r="5"/><circle cx="410" cy="130" r="5"/><circle cx="465" cy="110" r="5"/><circle cx="520" cy="83" r="5"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="80" y="272">1980</text><text x="135" y="272">1985</text><text x="190" y="272">1990</text><text x="245" y="272">1995</text><text x="300" y="272">2000</text><text x="355" y="272">2005</text><text x="410" y="272">2010</text><text x="465" y="272">2015</text><text x="520" y="272">2020</text></g></svg>`,
  secenekler: [
    "Yanlıştır; iklimde tek tek yıllar değil, uzun dönemli eğilim dikkate alınır.",
    "Doğrudur; iki yılın bir öncekinden serin geçmesi ısınmanın durduğunu gösterir.",
    "Yanlıştır; grafikte yıllık ortalama sıcaklık hiç değişmemiş, sabit kalmıştır.",
    "Doğrudur; grafikteki değerler hava tahmini olduğu için iklim yorumuna girmez."
  ],
  dogru: 0,
  hatalar: [
    null,
    "İki yılın düşüşünü eğilim sanma: kırk yıllık grafikte çizgi inişli çıkışlı olsa da genel olarak yükselmektedir.",
    "Grafiği yanlış okuma: değerler sabit değildir, 13,1 °C'den 15,0 °C'ye yükselmiştir.",
    "Yıllık ortalamayı hava tahmini sanma: grafikteki her nokta bir yılın ortalamasıdır, yani iklim verisidir."
  ],
  aciklama: `İklim, uzun yılların ortalamasıyla değerlendirilir. Bu yüzden iklim grafiklerinde tek tek noktalara değil, çizginin genel gidişine (eğilimine) bakılır.
Adım 1: Öğrencinin gösterdiği noktaları denetle. 1980'de yaklaşık 13,1 °C iken 1985'te 13,0 °C; 1990'da 13,4 °C iken 1995'te 13,3 °C'dir. Öğrenci grafiği yanlış okumamıştır, bu düşüşler gerçekten vardır.
Adım 2: Şimdi bütün grafiğe bak. Çizgi zaman zaman aşağı inse de 1980'deki 13,1 °C'den 2020'deki 15,0 °C'ye kadar yükselmiştir. Yani genel eğilim artıştır.
Adım 3: İklim, yıldan yıla küçük iniş çıkışlar gösterir. Bunlar doğaldır ve eğilimi ortadan kaldırmaz. Öğrencinin hatası, iki tek yıla bakıp kırk yıllık eğilimi yok saymasıdır.
Adım 4: Öyleyse değerlendirme yanlıştır ve nedeni eğilim yerine tek tek yılların seçilmesidir. A doğrudur.
Adım 5: C yanlıştır, çünkü grafikte değerler açıkça değişmektedir. D de yanlıştır, çünkü grafikte tahmin değil, ölçülmüş yıllık ortalamalar vardır.
Sık yapılan hata: Bir iklim grafiğinde işine gelen iki noktayı seçip bütün eğilime karşı kanıt gibi sunmak.
Cevap A.`
},
{
  id: "fen-ik-315",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 3,
  soru: `Bir okulun iklim kulübü, "Küresel ısınma hızlanıyor mu?" başlıklı bir pano hazırlamaktadır. Panoya asılacak tabloda atmosferdeki karbondioksit oranı ile küresel ortalama sıcaklığın 1960 yılına göre farkı, otuzar yıl arayla verilmiştir. Kulüp üyeleri panonun altına, bu tablodan çıkardıkları bir sonuç cümlesi yazacaktır.
**Buna göre kulüp üyelerinin yazabileceği doğru sonuç cümlesi aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Yıl</th><th>Karbondioksit oranı (ppm)</th><th>1960'a göre sıcaklık farkı</th></tr><tr><td>1960</td><td>317</td><td>0,0 °C</td></tr><tr><td>1990</td><td>354</td><td>+0,4 °C</td></tr><tr><td>2020</td><td>414</td><td>+1,0 °C</td></tr></table>`,
  secenekler: [
    "Karbondioksit oranı da sıcaklık farkı da iki dönemde eşit miktarda artmıştır.",
    "Karbondioksit oranı iki dönemde de artarken sıcaklık farkı ikinci dönemde sabit kalmıştır.",
    "Karbondioksit oranı da sıcaklık farkı da ikinci dönemde birinciye göre daha çok artmıştır.",
    "Karbondioksit oranı ikinci dönemde daha az artarken sıcaklık farkı daha çok artmıştır."
  ],
  dogru: 2,
  hatalar: [
    "Farkları hesaplamadan 'sürekli artıyor' deyip artışları eşit sanma: karbondioksitteki artış 37 ppm'den 60 ppm'e, sıcaklıktaki artış 0,4 °C'den 0,6 °C'ye çıkmıştır.",
    "Sıcaklık sütununun ikinci aralığını atlama: fark +0,4 °C'den +1,0 °C'ye çıkmıştır, yani ikinci dönemde 0,6 °C artmıştır; sabit kalmamıştır.",
    null,
    "İki sütunu ters eşleştirme: ikinci dönemde karbondioksit de daha hızlı artmıştır, 37 ppm'lik artış 60 ppm'e çıkmıştır."
  ],
  aciklama: `Küresel iklim değişikliği, dünya genelindeki ortalama koşulların uzun yıllar içinde kalıcı biçimde değişmesidir. Bir eğilimin hızlanıp hızlanmadığını anlamak için eşit uzunluktaki dönemlerin değişim miktarları karşılaştırılır.
Adım 1: Dönemleri ayır. Tabloda eşit uzunlukta iki dönem vardır: 1960 - 1990 ve 1990 - 2020. Her biri otuz yıldır, bu yüzden karşılaştırmaları adildir.
Adım 2: Karbondioksitteki değişimi hesapla. Birinci dönem: 354 − 317 = 37 ppm. İkinci dönem: 414 − 354 = 60 ppm. Artış ikinci dönemde daha büyüktür.
Adım 3: Sıcaklık farkındaki değişimi hesapla. Birinci dönem: 0,4 − 0,0 = 0,4 °C. İkinci dönem: 1,0 − 0,4 = 0,6 °C. Burada da artış ikinci dönemde daha büyüktür.
Adım 4: İki sütun da aynı sonucu veriyor: ikinci otuz yılda artış birinciye göre daha çoktur. C doğrudur.
Adım 5: A yanlıştır, çünkü 37 ile 60 eşit değildir. B yanlıştır, çünkü sıcaklık farkı ikinci dönemde de yükselmiştir. D yanlıştır, çünkü karbondioksitteki artış azalmamış, tersine büyümüştür.
Sık yapılan hata: Sütunun sürekli arttığını görüp "eşit artıyor" demek. Bir sayı dizisinin artması başka, artışın hızlanması başkadır; hızı görmek için ardışık farkları hesaplaman gerekir.
Cevap C.`
},

/* --- Düzey 4 (316-325) --- */
{
  id: "fen-ik-316",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Aşağıdaki tabloda K ve L kentlerine ait bazı veriler verilmiştir. İki kentte de 14 Şubat günü en yüksek sıcaklık 12 °C olarak ölçülmüş, ikisinde de gün güneşli geçmiştir.
I. İki kentte 14 Şubat'ta benzer hava koşullarının görülmesi, iklimlerinin benzediğini gösterir.
II. L kentinde kışlar K kentine göre daha soğuk geçmektedir.
III. 14 Şubat, L kenti için mevsim normallerinin üzerinde sıcak bir gün olmuştur.
**Buna göre numaralanmış ifadelerden hangileri kesinlikle söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Veri</th><th>K kenti</th><th>L kenti</th></tr><tr><td>14 Şubat en yüksek sıcaklık</td><td>12 °C</td><td>12 °C</td></tr><tr><td>Şubat ayı uzun yıllar ortalaması</td><td>13 °C</td><td>4 °C</td></tr><tr><td>Yıllık ortalama karla örtülü gün sayısı</td><td>1</td><td>38</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Bir günün havasına bakıp iklim eşitlemesi yapma: aynı gün aynı sıcaklığın ölçülmesi iki kentin ikliminin aynı olduğunu göstermez.",
    "III'ü gözden kaçırma: L kentinde 14 Şubat'ta 12 °C ölçülmüş, şubat ortalaması ise 4 °C'dir; o gün normalin 8 °C üzerindedir.",
    "Aynı gün aynı sıcaklığı iklim benzerliği sayma: I, uzun yıllar verilerine değil tek bir güne dayanmaktadır.",
    null
  ],
  aciklama: `İki yerin iklimi karşılaştırılırken bir günün ölçümüne değil, uzun yıllar ortalamalarına bakılır. Tek bir günde iki kent aynı havayı yaşayabilir, iklimleri yine de tamamen farklı olabilir.
Adım 1: I'i denetle. İki kentte 14 Şubat aynı geçmiştir, bu doğrudur. Ama iklim tek günle belirlenmez. Tablodaki uzun yıllar ortalamalarına bakıldığında şubat ortalamaları 13 °C ile 4 °C, karlı gün sayıları 1 ile 38'dir. Yani iklimler birbirinden çok farklıdır. I yanlıştır.
Adım 2: II'yi denetle. L kentinin şubat ortalaması 4 °C, K kentinin 13 °C'dir; ayrıca L'de yılda ortalama 38 gün kar örtüsü varken K'de yalnızca 1 gün vardır. İki veri de aynı yöne işaret eder: L'de kışlar daha soğuktur. II kesinlikle söylenebilir.
Adım 3: III'ü denetle. L kentinde o gün 12 °C ölçülmüştür; şubat ortalaması 4 °C'dir. Fark 12 − 4 = 8 °C'dir. Yani o gün L için normalin oldukça üzerinde sıcak geçmiştir. III kesinlikle söylenebilir.
Adım 4: Kesinlikle söylenebilecekler II ve III'tür.
Sık yapılan hata: "Bugün ikisi de aynı, demek ki iklimleri aynı." demek. Aynı gün K kenti için normalin bir derece altı, L kenti için normalin sekiz derece üstüdür; aynı sayı iki kentte bambaşka anlam taşır.
Cevap D.`
},
{
  id: "fen-ik-317",
  kazanim: "F.8.1.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `İklim bilimciler bir dağ buzulunun kapladığı alanı 1970'ten bu yana uydu görüntüleriyle düzenli olarak ölçmektedir. Ölçüm sonuçları aşağıdaki grafikte verilmiştir.
**Buna göre bu çalışma ve grafikle ilgili aşağıdakilerden hangisi __yanlıştır__?**`,
  gorsel: `<svg viewBox="0 0 560 300" role="img" aria-label="Bir dağ buzulunun 1970-2020 yılları arasında kapladığı alanın değişimi"><text x="16" y="20" fill="currentColor" font-size="15" font-weight="bold">Grafik: Buzulun kapladığı alan (km²)</text><g stroke="currentColor" stroke-width="2"><line x1="62" y1="45" x2="62" y2="252"/><line x1="62" y1="252" x2="520" y2="252"/></g><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="62" y1="182" x2="520" y2="182"/><line x1="62" y1="113" x2="520" y2="113"/><line x1="62" y1="45" x2="520" y2="45"/></g><g fill="currentColor" font-size="14" text-anchor="end"><text x="54" y="257">0</text><text x="54" y="187">3</text><text x="54" y="118">6</text><text x="54" y="50">9</text></g><g fill="var(--dolgu)" stroke="var(--vurgu)" stroke-width="2"><rect x="80" y="59" width="55" height="193"/><rect x="150" y="77" width="55" height="175"/><rect x="220" y="93" width="55" height="159"/><rect x="290" y="112" width="55" height="140"/><rect x="360" y="153" width="55" height="99"/><rect x="430" y="191" width="55" height="61"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="107" y="53">8,4</text><text x="177" y="71">7,6</text><text x="247" y="87">6,9</text><text x="317" y="106">6,1</text><text x="387" y="147">4,3</text><text x="457" y="185">2,6</text><text x="107" y="273">1970</text><text x="177" y="273">1980</text><text x="247" y="273">1990</text><text x="317" y="273">2000</text><text x="387" y="273">2010</text><text x="457" y="273">2020</text></g></svg>`,
  secenekler: [
    "Bu ölçümler, kısa süreli hava olaylarını inceleyen meteorolojinin çalışma alanına girer.",
    "Buzulun kapladığı alan, ölçümlerin yapıldığı elli yıl boyunca kesintisiz küçülmüştür.",
    "Buzul alanındaki azalma, ilk otuz yıla göre son yirmi yılda daha hızlı gerçekleşmiştir.",
    "Bu veriler, bölgedeki uzun dönemli değişimi izlemeye elveren bir ölçüm dizisi oluşturur."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Grafiğin genel gidişini yanlış okuma: alan 8,4 km²'den 2,6 km²'ye her ölçümde biraz daha küçülmüştür, bu ifade doğrudur.",
    "Azalma hızını karşılaştırmayı atlama: on yıllık azalma ilk otuz yılda 0,7 - 0,8 km² iken son yirmi yılda 1,7 - 1,8 km²'ye çıkmıştır, bu ifade doğrudur.",
    "Ölçüm süresini gözden kaçırma: 1970'ten 2020'ye uzanan elli yıllık dizi uzun dönemli değişimi izlemeye elverir, bu ifade doğrudur."
  ],
  aciklama: `İklimi inceleyen bilim dalı klimatoloji (iklim bilimi), kısa süreli hava olaylarını inceleyen bilim dalı ise meteorolojidir. Hangisinin işi olduğunu, verinin kapsadığı süre belirler.
Adım 1: A'yı denetle. Grafikte üç günün ya da bir haftanın değil, elli yılın ölçümleri vardır. Elli yıla yayılan bir değişimi izlemek iklim biliminin işidir; bu çalışmayı yürütenler iklim bilimcidir. Öyleyse A yanlıştır, aranan şık budur.
Adım 2: B'yi denetle. Değerleri sırayla oku: 8,4 - 7,6 - 6,9 - 6,1 - 4,3 - 2,6 km². Her ölçüm bir öncekinden küçüktür; yani küçülme kesintisizdir. B doğrudur.
Adım 3: C'yi denetle. On yıllık azalmaları hesapla: 0,8; 0,7; 0,8; sonra 1,8 ve 1,7 km². İlk otuz yılda on yılda 0,7 - 0,8 km² olan azalma, son yirmi yılda 1,7 - 1,8 km²'ye çıkmıştır. C doğrudur.
Adım 4: D'yi denetle. Yatay eksende 1970'ten 2020'ye kadar ölçümler vardır. Elli yıllık kesintisiz bir dizi, uzun dönemli değişimi izlemeye elverir. D doğrudur.
Adım 5: Öyleyse yanlış olan tek ifade A'dır.
Sık yapılan hata: Atmosferle ilgili her ölçümü meteorolojinin işi sanmak. Aletler aynı olabilir; ayıran şey, verinin bir günü mü yoksa on yılları mı anlattığıdır.
Cevap A.`
},
{
  id: "fen-ik-318",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Ayça ile Bora aynı kentte yaşayan iki öğrencidir. Ayça "Kentimizde yazlar son otuz yılda uzadı mı?" sorusunu, Bora ise "Bu hafta sonu piknik yapabilir miyiz?" sorusunu merak etmektedir. İkisinin de ulaşabildiği veri kaynakları ile bu kaynakların içeriği ve kapsadığı süre tabloda verilmiştir. Yazın uzayıp uzamadığı, bir yılda sıcaklığın belirli bir değerin üzerinde olduğu gün sayısına bakılarak belirlenmektedir.
I. Ayça'nın sorusu, K1'deki günlük kayıtlar incelenerek yanıtlanabilir.
II. Bora'nın sorusu için K2'deki bültene bakmak yeterlidir.
III. K3 de kentin kendi istasyonuna ait olduğu ve aynı yılları kapsadığı için Ayça, sorusunu K1 yerine K3 ile de yanıtlayabilir.
**Buna göre numaralanmış ifadelerden hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Kaynak</th><th>İçeriği</th><th>Kapsadığı süre</th></tr><tr><td>K1</td><td>Kentin kendi istasyonunun her güne ait sıcaklık kayıtları</td><td>1990 – 2024</td></tr><tr><td>K2</td><td>Kent için hazırlanan hava tahmini bülteni</td><td>Bugünden başlayan ve hafta sonunu da kapsayan 5 gün</td></tr><tr><td>K3</td><td>Kentin kendi istasyonunun her yıl için tek bir ortalama sıcaklık değeri içeren listesi</td><td>1990 – 2024</td></tr></table>`,
  secenekler: ["Yalnız I", "I ve II", "I ve III", "II ve III"],
  dogru: 1,
  hatalar: [
    "II'yi dışarıda bırakma: K2 bülteni bugünden başlar ve hafta sonunu da kapsar; Bora'nın sorduğu süre tam olarak budur.",
    null,
    "III'ün gerekçesi doğru diye kendisini de doğru sayma: K3 gerçekten kentin kendi kaydıdır ve aynı yılları kapsar, ama yıl başına tek bir ortalama değer, o yılın kaç gününün sıcak geçtiğini göstermez.",
    "I'i dışarıda bırakıp III'ü doğru sayma: yazın uzayıp uzamadığı ancak K1'deki günlük kayıtlardan çıkarılır; yıllık tek bir ortalama bunu gizler."
  ],
  aciklama: `Bir soruya hangi verinin yanıt vereceğini üç şey belirler: verinin kapsadığı süre, toplandığı yer ve ne kadar ayrıntı taşıdığı.
Adım 1: Ayça'nın sorusuna bak. "Son otuz yılda" ifadesi uzun dönemli bir değişimi anlatır; bu bir iklim sorusudur. Yazın uzunluğunu bulmak için bir yılda kaç günün sıcak geçtiğini saymak gerekir. K1, kentin kendi istasyonunun 1990 – 2024 arasındaki her gününü içerir; hem süresi yeterlidir, hem kente aittir, hem de gün gün sayım yapmaya elverir. I doğrudur.
Adım 2: Bora'nın sorusuna bak. Hafta sonu birkaç gün sonradır; bu bir hava olayı sorusudur. K2 bugünden başlayıp hafta sonunu da kapsadığına göre Bora'nın sorusunu yanıtlar. II doğrudur.
Adım 3: III'ü denetle. İfade "kentin kendi istasyonuna ait olduğu ve aynı yılları kapsadığı için" diyerek sağlam bir gerekçeye yaslanır; gerekçenin kendisi de doğrudur. Ama K3'te her yıl için tek bir sayı vardır. Bir yılın ortalaması, o yılın günlerinin nasıl dağıldığını anlatmaz: yaz otuz gün uzarken kış birkaç derece daha soğuk geçmiş olabilir; iki değişim birbirini götürür, yıl ortalaması yine aynı çıkar. Gün sayısı sorusunun yanıtı ortalamada kaybolur. K3, K1'in yerini tutmaz. III yanlıştır.
Adım 4: Doğru olanlar I ve II'dir.
Sık yapılan hata: Bir veriyi yalnızca süresine ve yerine bakıp yeterli saymak. Elindeki kayıt doğru yere ve doğru yıllara ait olsa bile, sorunun istediği ayrıntıyı taşımıyorsa yanıt vermez. Ortalama almak, ayrıntıyı silen bir işlemdir.
Cevap B.`
},
{
  id: "fen-ik-319",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir havzada iki ayrı otuzar yıllık dönemde ölçülen yağış verileri tabloda verilmiştir. Havzadaki barajı yöneten ekip, taşkın riskini değerlendirmek için bu verileri incelemektedir.
**Buna göre havzadaki yağışla ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Dönem</th><th>Yıllık toplam yağış</th><th>Yağışlı gün sayısı</th><th>En yağışlı ayın payı</th></tr><tr><td>1961 – 1990</td><td>640 mm</td><td>98</td><td>%14</td></tr><tr><td>1991 – 2020</td><td>635 mm</td><td>71</td><td>%26</td></tr></table>`,
  secenekler: [
    "Yıllık toplam yağış belirgin biçimde azalmış, yağışlı gün sayısı artmıştır.",
    "Yıllık toplam yağış artmış, yağış daha çok güne yayılmıştır.",
    "Yıllık toplam yağış yaklaşık aynı kalmış, yağış daha az güne toplanmıştır.",
    "Yıllık toplam yağış yaklaşık aynı kalmış, yağışlı gün sayısı değişmemiştir."
  ],
  dogru: 2,
  hatalar: [
    "Toplam yağışı azalmış sayma: 640 mm'den 635 mm'ye düşüş çok küçüktür; ayrıca yağışlı gün sayısı artmamış, azalmıştır.",
    "Verileri ters okuma: toplam yağış artmamış, yağışlı gün sayısı da 98'den 71'e inmiştir.",
    null,
    "Yağışlı gün sütununu okumayı atlama: gün sayısı 98'den 71'e düşmüştür, değişmemiş değildir."
  ],
  aciklama: `İklim değişimi yalnızca toplam değerlerde değil, bu değerlerin zamana dağılımında da görülür. Bu yüzden iklim verilerinde her sütun ayrı ayrı okunmalıdır.
Adım 1: Toplam yağış sütununu oku: 640 mm ve 635 mm. Fark yalnızca 5 mm'dir; bu, yaklaşık aynı kalmış demektir.
Adım 2: Yağışlı gün sütununu oku: 98 gün ve 71 gün. Gün sayısı 27 gün azalmıştır.
Adım 3: İki bulguyu birleştir. Neredeyse aynı miktarda yağış, daha az sayıda güne düşmüştür. Öyleyse bir yağışlı günde düşen ortalama yağış artmıştır; yağış daha az güne toplanmıştır.
Adım 4: Üçüncü sütun bu sonucu destekler. En yağışlı ayın payı %14'ten %26'ya çıkmıştır; yani yağış yıl içinde daha da yoğunlaşmıştır.
Adım 5: Öyleyse C doğrudur.
Sağlama: Kaba bir hesapla ilk dönemde günlük ortalama 640 ÷ 98 ≈ 6,5 mm, ikinci dönemde 635 ÷ 71 ≈ 8,9 mm düşmüştür. Yağış gerçekten yoğunlaşmıştır. İşte bu yüzden toplam yağış değişmese bile taşkın riski artabilir.
Cevap C.`
},
{
  id: "fen-ik-320",
  kazanim: "F.8.1.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir iklim bilimci, bir bölgeyi değerlendirmek için üç meteoroloji istasyonunun kayıtlarını incelemektedir. Aşağıdaki tabloda istasyonların 8 Ekim günü ölçtüğü sıcaklık, ekim ayı uzun yıllar ortalaması ve kesintisiz veri süresi verilmiştir.
I. X istasyonunun bulunduğu yerde 8 Ekim, mevsim normallerine yakın geçmiştir.
II. Y istasyonunun ortalaması, düzenli ölçümlerden hesaplandığı için bulunduğu yerin iklimini temsil eder.
III. İstasyonların hiçbirinde 8 Ekim'de ölçülen değer, tek başına o yerin ikliminin değişip değişmediğini göstermez.
**Buna göre numaralanmış ifadelerden hangileri kesinlikle söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>İstasyon</th><th>8 Ekim sıcaklığı</th><th>Ekim ayı uzun yıllar ortalaması</th><th>Kesintisiz veri süresi</th></tr><tr><td>X</td><td>21 °C</td><td>20 °C</td><td>45 yıl</td></tr><tr><td>Y</td><td>24 °C</td><td>18 °C</td><td>3 yıl</td></tr><tr><td>Z</td><td>17 °C</td><td>17 °C</td><td>52 yıl</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız III", "I ve III", "II ve III"],
  dogru: 2,
  hatalar: [
    "III'ü gözden kaçırma: tek bir günün ölçümü, istasyonların hiçbirinde o yerin ikliminin değişip değişmediğini gösteremez; bunun için farklı dönemlerin ortalamaları gerekir.",
    "I'i gözden kaçırma: X istasyonunda ölçülen 21 °C ile 20 °C'lik ekim ortalaması arasındaki fark yalnızca 1 °C'dir; üstelik bu ortalama 45 yıllık kayda dayanır.",
    null,
    "Ölçülü bir dille yazılmış olması ifadeyi doğru yapmaz: Y'nin ölçümleri düzenli olsa bile üç yıl, bir yerin iklimini temsil edecek kadar uzun bir süre değildir."
  ],
  aciklama: `İklim, uzun yıllar boyunca görülen ortalama hava koşullarıdır. Bir ortalamanın iklim değeri sayılabilmesi için en az otuz yıllık kesintisiz kayda dayanması gerekir.
Adım 1: I'i denetle. X istasyonunda o gün 21 °C, ekim ortalaması 20 °C'dir. Aradaki fark yalnızca 1 °C'dir; üstelik bu ortalama 45 yıllık kayda dayanır, yani güvenilirdir. Gün normallere yakın geçmiştir. I kesinlikle söylenebilir.
Adım 2: II'yi denetle. İfade "düzenli ölçümlerden hesaplandığı için" diyerek kulağa bilimsel gelir; ama belirleyici olan ölçümün düzenli olması değil, kaç yılı kapsadığıdır. Y istasyonunun verisi yalnızca 3 yıllıktır. Bu kadar kısa bir kayıtla hesaplanan ortalama, o yerin uzun dönemli ortalamasını yansıtmaz. II söylenemez.
Adım 3: III'ü denetle. Üç istasyonun her birinde yalnızca bir günün ölçümü vardır. Z'de o günün değeri ortalamaya eşit çıkmıştır, ama bu da bir rastlantıdır. İklimin değişip değişmediğini anlamak için farklı dönemlerin ortalamalarının karşılaştırılması gerekir; tabloda böyle bir karşılaştırma yoktur. Öyleyse hiçbir istasyonda tek günün ölçümü iklim hakkında karar verdirmez. III kesinlikle söylenebilir.
Adım 4: Kesinlikle söylenebilecekler I ve III'tür.
Sık yapılan hata: Bir ifadeyi kulağa ölçülü ve bilimsel geldiği için doğru saymak. Burada ölçütün adı bellidir: verinin kapsadığı süre. Üç yıllık bir kayıt, ne kadar düzenli tutulursa tutulsun iklim ortalaması vermez.
Cevap C.`
},
{
  id: "fen-ik-321",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kentte yaşayan bir kişi, "Kentimizde kışlar eskisi kadar soğuk geçmiyor." demiş, gerekçe olarak da "Bu kış kar küreme araçları bir kez bile yola çıkmadı." demiştir. Kentin meteoroloji istasyonu ile belediyesinin kayıtlarından hazırlanan çizelge aşağıda verilmiştir.
**Buna göre bu kişinin ulaştığı sonuç ve gösterdiği gerekçeyle ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Dönem</th><th>Kış aylarının ortalama sıcaklığı</th><th>Kar küreme araçlarının yola çıktığı ortalama gün sayısı</th></tr><tr><td>1985 – 1994</td><td>1,2 °C</td><td>24</td></tr><tr><td>1995 – 2004</td><td>1,9 °C</td><td>19</td></tr><tr><td>2005 – 2014</td><td>2,6 °C</td><td>13</td></tr><tr><td>2015 – 2024</td><td>3,5 °C</td><td>8</td></tr></table>`,
  secenekler: [
    "Sonuç çizelgeyle çelişmektedir; gerekçe de tek bir kışın havasına dayanmaktadır.",
    "Sonuç çizelgeyle uyumludur; ancak gerekçe tek bir kışa dayandığı için yetersizdir.",
    "Sonuç çizelgeyle çelişmektedir; ancak gerekçe uzun dönemli bir iklim verisidir.",
    "Sonuç da gerekçe de çizelgeyle desteklenmektedir; tek kış iklim için yeterlidir."
  ],
  dogru: 1,
  hatalar: [
    "Çizelgenin gidişini ters okuma: kış ortalama sıcaklığı 1,2 °C'den 3,5 °C'ye yükselmiştir, yani sonuç çizelgeyle çelişmez.",
    null,
    "Hem çizelgeyi ters okuma hem tek kışı iklim verisi sayma: bir kışın gözlemi uzun dönemli bir kayıt değildir.",
    "Tek kışı iklim kanıtı sayma: iklim en az otuz yıllık kayıtların ortalamasıyla değerlendirilir; bir kış hava olayıdır."
  ],
  aciklama: `Bir kişinin söylediği sonuç ile o sonuca dayanak gösterdiği gerekçe ayrı ayrı denetlenir. Sonuç doğru olsa bile gerekçe geçersiz olabilir.
Adım 1: Önce sonucu denetle. Kış ortalama sıcaklığı 1,2 - 1,9 - 2,6 - 3,5 °C biçiminde dönemden döneme yükselmiş, kar küreme araçlarının yola çıktığı gün sayısı da 24'ten 8'e inmiştir. İki sütun da aynı yöne işaret eder ve kırk yılı kapsar. Öyleyse "kışlar eskisi kadar soğuk geçmiyor" sonucu çizelgeyle uyumludur.
Adım 2: Şimdi gerekçeyi denetle. Kişi dayanak olarak yalnızca bu kışı göstermiştir. Bir kış, hava olaylarının kapsadığı kısa bir süredir; iklim ise en az otuz yıllık kayıtların ortalamasıyla değerlendirilir. Tek bir kış, kışların genel olarak ılımanlaştığını kanıtlamaz.
Adım 3: Öyleyse sonuç doğru, gerekçe yetersizdir. B doğrudur.
Adım 4: A ve C, sonucun çizelgeyle çeliştiğini söyler; oysa çizelge tam tersini gösterir. D ise tek bir kışı iklim kanıtı sayar.
Sık yapılan hata: "Sonuç doğruysa gerekçe de doğrudur." diye düşünmek. Doğru bir sonuca yanlış bir yoldan da varılabilir; bilimde önemli olan sonucun hangi veriye dayandığıdır.
Cevap B.`
},
{
  id: "fen-ik-322",
  kazanim: "F.8.1.2.2",
  kademe: 3,
  zorluk: 4,
  soru: `Bir iklim bilimci kendisiyle yapılan söyleşide şunları söylemiştir: "Bugünden on gün sonra saat 15.00'te kentinize yağmur yağıp yağmayacağını size söyleyemem. Ama 2050'li yıllarda bu bölgenin yazlarının bugünkünden daha sıcak geçmesini beklediğimizi söyleyebilirim."
I. Hava olayları kısa sürede çok değiştiği için on gün sonrasının saat saat tahmini hiçbir zaman kesin olarak yapılamaz.
II. İklim çalışmaları tek tek günleri değil, uzun dönemli ortalamaları ve eğilimleri konu alır.
III. İklim bilimcinin 2050 öngörüsü ölçülmüş verilere dayandığı için önümüzdeki günlerin havasını da aynı güvenilirlikle verir.
**Buna göre numaralanmış ifadelerden hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["I ve II", "I ve III", "II ve III", "I, II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "III'ü doğru sayma: iklim öngörüsü uzun dönemli ortalamalar için yapılır; ölçülmüş verilere dayanması onu belirli bir günün hava tahmini hâline getirmez. Üstelik bu şıkta II de dışarıda bırakılmıştır.",
    "I'i yanlış sayma: tek tek günlerin havası kısa sürede değiştiği için on gün sonrasının belirli bir saati için kesin tahmin yapılamaz; bilim insanının ilk cümlesi tam da bunu anlatır.",
    "Kulağa bilimsel gelen bir ifadeyi doğru sayma: III, iklim öngörüsünden günlük hava tahmini çıkarmaya çalışır; bu iki iş aynı değildir."
  ],
  aciklama: `Hava tahmini ile iklim öngörüsü farklı sorulara yanıt arar. Biri "hangi gün ne olacak" der, öbürü "uzun dönemde ortalama nereye gidiyor" der.
Adım 1: I'i incele. Hava olayları saatler içinde değişebilir. Bu yüzden günlük tahminler ancak birkaç gün için güvenilirdir; süre uzadıkça güvenilirlik hızla düşer. On gün sonrasının belirli bir saati için kesin bir tahmin verilemez. İfade "hiçbir zaman" gibi güçlü bir söz kullanıyor olsa da doğrudur; zaten bilim insanı da ilk cümlesinde bunu söylemiştir. I doğrudur.
Adım 2: II'yi incele. İklim bilimi tek tek günlerle ilgilenmez; uzun yılların ortalamalarını ve bu ortalamaların hangi yöne gittiğini inceler. II doğrudur.
Adım 3: III'ü incele. İfade ölçülü ve bilimsel görünür, ama yönü terstir. İklim öngörüsü uzun dönemli ortalamalar için yapılır; verilerin ölçülmüş olması, aynı öngörüden belirli bir günün havasının okunabileceği anlamına gelmez. Bilim insanı zaten bunu yapamayacağını söylemiştir. III yanlıştır.
Adım 4: Doğru olanlar I ve II'dir.
Sağlama: Şöyle düşün. Bir sınıfta hangi öğrencinin hangi gün geç kalacağını bilemezsin; ama sınıfın bir yıldaki ortalama geç kalma sayısının kaç olduğunu, kayıtlara bakıp söyleyebilirsin. Tek olayı bilememek, ortalamayı bilememek demek değildir.
Cevap A.`
},
{
  id: "fen-ik-323",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kurumun yayımladığı raporda şu iki bölüm yer almaktadır:
Birinci bölüm: "Yarın kıyı kesimlerde fırtına bekleniyor; küçük teknelerin denize açılmaması önerilir."
İkinci bölüm: "Son otuz yılda bölgede fırtınalı gün sayısı yaklaşık beşte bir oranında artmıştır; liman yapıları buna göre planlanmalıdır."
I. Birinci bölüm, bölgenin iklimi hakkında bilgi vermektedir.
II. Birinci bölüm kısa süreli bir hava tahminine dayanmaktadır.
III. İkinci bölüm uzun yılların kayıtlarına dayanan bir iklim değerlendirmesidir.
**Buna göre numaralanmış ifadelerden hangileri doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "Yalnız II", "I ve III", "II ve III"],
  dogru: 3,
  hatalar: [
    "Yarınki fırtına uyarısını iklim bilgisi sayma: bu, bir günlük hava tahminidir.",
    "III'ü gözden kaçırma: otuz yıllık kayıtlara dayanan değerlendirme iklimle ilgilidir.",
    "Bir günlük uyarıyı iklim bilgisiyle birleştirme: I yanlıştır, birinci bölüm bir hava olayını anlatır.",
    null
  ],
  aciklama: `Aynı raporda hem hava olaylarıyla hem iklimle ilgili bölümler bulunabilir. Ayrımı, bölümün kapsadığı süre ve verdiği öneri belirler.
Adım 1: Birinci bölümü incele. "Yarın" tek bir günü anlatır; öneri de o güne aittir, teknelerin denize açılmaması istenir. Bu bir hava tahminidir. Öyleyse I yanlış, II doğrudur.
Adım 2: İkinci bölümü incele. "Son otuz yılda" ifadesi uzun bir kayıt dönemini anlatır; öneri de yıllarca kullanılacak liman yapılarının planlanmasıyla ilgilidir. Bu bir iklim değerlendirmesidir. III doğrudur.
Adım 3: Doğru olanlar II ve III'tür.
Adım 4: Bir küçük kontrol daha yap: I ile II aynı bölüm hakkındadır ve birbirine terstir. Biri doğruysa öbürü yanlış olmalıdır; bu yüzden I ve III'ü birlikte doğru sayan C şıkkı ancak II yanlışsa seçilebilirdi.
Sağlama: Bir metnin iklimle mi havayla mı ilgili olduğunu anlamak için "bu bilgi ne kadar süre işe yarar" diye sor. Yarınki uyarı bir gün, otuz yıllık eğilim on yıllar boyunca geçerlidir.
Cevap D.`
},
{
  id: "fen-ik-324",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Bir kıyı ilçesinde kurulan çalışma grubu, sahil düzenlemesine başlamadan önce ilçenin iklim koşullarının değişip değişmediğini araştırmaktadır. Aşağıdaki tabloda, ilçedeki istasyonların birbirinden elli yıl arayla başlayan iki otuzar yıllık dönemde tuttuğu kesintisiz kayıtlardan hesaplanan ortalama değerler verilmiştir. Grup, raporuna yalnızca bu tablodan çıkarılabilen yargıları yazacak; tablonun söylemediği hiçbir yorumu rapora almayacaktır.
**Buna göre çalışma grubunun raporuna yazabileceği, bu ilçe için kesinlikle söylenebilecek yargı aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Gözlem</th><th>1941 – 1970 ortalaması</th><th>1991 – 2020 ortalaması</th></tr><tr><td>Deniz suyu yıllık ortalama sıcaklığı</td><td>17,8 °C</td><td>18,9 °C</td></tr><tr><td>Sıcak hava dalgası yaşanan gün sayısı</td><td>6</td><td>19</td></tr><tr><td>Yıllık ortalama yağış</td><td>720 mm</td><td>655 mm</td></tr></table>`,
  secenekler: [
    "Üç gözlemin tümü değiştiğine göre ilçenin iklim koşulları değişmiştir.",
    "Sıcak hava dalgalarının artması, deniz suyunun ortalama sıcaklığını yükseltmiştir.",
    "Sıcak hava dalgalı gün sayısı yaklaşık üçe katlandığına göre deniz suyu sıcaklığı da aynı oranda yükselmiştir.",
    "Deniz suyu sıcaklığı yükselirken yıllık ortalama yağış da yükselmiştir."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Neden ile sonucu ters çevirme: tablo iki satırın birlikte değiştiğini gösterir, hangisinin ötekine yol açtığını göstermez; üstelik deniz suyunun ısınması sıcak hava dalgalarını artıran yandır.",
    "İki satırın değişim oranını aynı sanma: gün sayısı 6'dan 19'a çıkarken deniz suyu sıcaklığı 17,8 °C'den 18,9 °C'ye, yani üç katına değil yalnızca 1,1 °C yükselmiştir.",
    "Yarım doğru: cümlenin ilk yarısı tabloya uyar, ikinci yarısı uymaz; yıllık ortalama yağış 720 mm'den 655 mm'ye inmiştir."
  ],
  aciklama: `"Kesinlikle söylenebilir" kökü, yalnızca verilen veriden çıkan sonucu ister. Veriyi aşan her yorum yanlıştır.
Adım 1: Tabloyu satır satır oku. Deniz suyunun yıllık ortalama sıcaklığı 17,8 °C'den 18,9 °C'ye çıkmış, sıcak hava dalgası yaşanan gün sayısı 6'dan 19'a yükselmiş, yıllık ortalama yağış 720 mm'den 655 mm'ye inmiştir.
Adım 2: A'yı denetle. Şık "üç gözlemin tümü" diyor; bu güçlü bir söz olduğu için üç satırı da tek tek sınamalısın. Üçünde de değer değişmiştir, yani söz veriyle karşılanır. Üstelik değerler otuzar yıllık kesintisiz kayıtlardan hesaplanmıştır; bu uzunluktaki ortalamalar iklim değeri sayılır ve bunların değişmesi iklim koşullarının değişmesi demektir. A kesinlikle söylenebilir.
Adım 3: B'yi denetle. Tablo iki satırın birlikte değiştiğini gösterir; hangisinin ötekine yol açtığını göstermez. Üstelik yön terstir: ısınan deniz ve atmosfer sıcak hava dalgalarını artırır, sıcak hava dalgalarının sayısı denizi ısıtmaz.
Adım 4: C'yi denetle. İlk yarısı doğrudur, gün sayısı 6'dan 19'a çıkmıştır, yani yaklaşık üçe katlanmıştır. İkinci yarısını hesapla: deniz suyu üçe katlansaydı 17,8 × 3 = 53,4 °C olurdu; oysa değer 18,9 °C'dir, artış yalnızca 1,1 °C'dir. İki satır aynı yöne gitmiş olabilir; aynı oranda değişmeleri gerekmez.
Adım 5: D'yi denetle. Cümlenin ilk yarısı doğrudur, deniz suyu ısınmıştır. İkinci yarısı yanlıştır: yağış yükselmemiş, 65 mm azalmıştır. Bir şıkkın yarısının doğru olması onu doğru yapmaz.
Sık yapılan hata: "Tümü, bütün" gibi güçlü sözcük gören şıkkı okumadan elemek. Bu sözcükler ancak veriyle çelişiyorsa şıkkı yanlış yapar; burada üç satırın üçü de değişmiştir.
Cevap A.`
},
{
  id: "fen-ik-325",
  kazanim: "F.8.1.2.1",
  kademe: 3,
  zorluk: 4,
  soru: `Aşağıdaki tabloda M ve N bölgeleri için iki ayrı otuzar yıllık dönemde hesaplanmış yıllık ortalama sıcaklık ve yıllık ortalama yağış değerleri verilmiştir.
I. Tablodaki veriler birlikte değerlendirildiğinde, sıcaklık artışına yağış azalmasının eşlik ettiği söylenebilir.
II. Tablodaki bölgelerin tümünde yıllık ortalama sıcaklık yükselmiştir.
III. N bölgesinde yağışın artmış olması, bu bölgede iklim koşullarının değişmediğini gösterir.
**Buna göre numaralanmış ifadelerden hangileri doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Bölge</th><th>Sıcaklık 1951-1980</th><th>Sıcaklık 1991-2020</th><th>Yağış 1951-1980</th><th>Yağış 1991-2020</th></tr><tr><td>M</td><td>14,2 °C</td><td>15,4 °C</td><td>710 mm</td><td>640 mm</td></tr><tr><td>N</td><td>8,6 °C</td><td>9,9 °C</td><td>540 mm</td><td>560 mm</td></tr></table>`,
  secenekler: ["Yalnız II", "Yalnız III", "I ve II", "II ve III"],
  dogru: 0,
  hatalar: [
    null,
    "II'yi 'tümünde' dediği için eleyip III'ü doğru sayma: sıcaklık M'de 14,2 °C'den 15,4 °C'ye, N'de 8,6 °C'den 9,9 °C'ye çıkmıştır; N'deki yağış artışı da iklimin değişmediğini göstermez.",
    "Isınmanın her yerde kuraklık getireceğini varsayma: I ancak M bölgesi için doğrudur, N'de yağış 540 mm'den 560 mm'ye çıkmıştır.",
    "İklim değişimini yalnızca kuraklık sanma: N'de yağış artmıştır ama sıcaklık 1,3 °C yükselmiştir; bu da bir iklim değişimidir, öyleyse III yanlıştır."
  ],
  aciklama: `İklim değerlendirmesinde farklı dönemlerin ortalamaları karşılaştırılır. Bir değişim iki bölgede de görülüyorsa bu "genel" bir sonuçtur; yalnızca birinde görülüyorsa genelleme yapılamaz.
Adım 1: I'i denetle. İfade "birlikte değerlendirildiğinde" diyerek temkinli görünür, ama tabloyu satır satır sınamak gerekir. M bölgesinde yağış 710 mm'den 640 mm'ye düşmüştür, burası için doğrudur. Ama N bölgesinde yağış 540 mm'den 560 mm'ye yükselmiştir. Sıcaklık artışına yağış azalması yalnızca bir bölgede eşlik etmiştir. I yanlıştır.
Adım 2: II'yi denetle. İfade "tümünde" diyerek güçlü konuşur, bu yüzden tablodaki bölgelerin hepsini sınaman gerekir. M bölgesinde sıcaklık 14,2 °C'den 15,4 °C'ye, N bölgesinde 8,6 °C'den 9,9 °C'ye çıkmıştır. Artışlar sırasıyla 1,2 °C ve 1,3 °C'dir. Tablodaki iki bölge de bu söze uyduğuna göre ifade veriyle karşılanır. II doğrudur.
Adım 3: III'ü denetle. N bölgesinde yağışın artması doğrudur. Ama iklim yalnızca yağıştan ibaret değildir: aynı bölgede yıllık ortalama sıcaklık 8,6 °C'den 9,9 °C'ye, yani 1,3 °C yükselmiştir. Bir ögenin beklenenin tersine değişmesi, "burada iklim değişmedi" demeye yetmez; tersine, N'de de otuzar yıllık ortalamalar değişmiştir. III yanlıştır.
Adım 4: Doğru olan yalnızca II'dir.
Sık yapılan hata: Isınmanın her yerde kuraklık getireceğini varsaymak, sonra kuraklık görmediği yerde "demek ki iklim değişmemiş" demek. Küresel ısınmayla birlikte bazı bölgelerde yağış artar, bazılarında azalır; tablodaki N bölgesi bunun örneğidir. Bir başka tuzak da ifadenin diline aldanmaktır: burada temkinli konuşan I yanlış, "tümünde" diyerek kesin konuşan II doğrudur. Ölçütün sözcükler değil, tablodaki sayılar olduğunu unutma.
Cevap A.`
},

/* ===================== HAVUZ — KADEME 0 (001-015) ===================== */

/* --- Düzey 1 (001-003) --- */
{
  id: "fen-ik-001",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 1,
  soru: "**Aşağıdakilerden hangisi bir hava olayına örnektir?**",
  gorsel: null,
  secenekler: [
    "Öğleden sonra başlayan sağanak yağış",
    "Bir bölgenin otuz yıllık yağış ortalaması",
    "Bir bölgede kışların ılık geçmesi",
    "Bir bölgenin yıllık ortalama sıcaklığı"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Uzun yıllar ortalamasını hava olayı sanma: otuz yıllık ortalama bir iklim verisidir.",
    "Genel bir iklim özelliğini hava olayı sanma: kışların ılık geçmesi yıllara yayılan bir durumdur.",
    "Yıllık ortalamayı anlık hava sanma: ortalama sıcaklık iklimi anlatan bir değerdir."
  ],
  aciklama: `Hava olayları, dar bir alanda kısa süre içinde görülen atmosfer olaylarıdır: yağmur, kar, dolu, sis, rüzgâr gibi. İklim ise uzun yıllar boyunca görülen ortalama hava koşullarıdır.
Adım 1: Şıkları süreye göre ayır. "Öğleden sonra" birkaç saatlik bir zamanı anlatır; bu kısa süredir.
Adım 2: Öbür şıklara bak. "Otuz yıllık ortalama", "kışların ılık geçmesi" ve "yıllık ortalama sıcaklık" ifadelerinin üçü de uzun yılları kapsar; üçü de iklimle ilgilidir.
Adım 3: Öyleyse tek hava olayı örneği sağanak yağıştır.
Sağlama: Kendine "bu bir günde değişebilir mi?" diye sor. Yanıt evetse hava olayı, hayırsa iklimdir.
Cevap A.`
},
{
  id: "fen-ik-002",
  kazanim: "F.8.1.2.2",
  kademe: 0,
  zorluk: 1,
  soru: "**İklimi inceleyen bilim dalının adı aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: ["Astronomi", "Jeoloji", "Klimatoloji", "Meteoroloji"],
  dogru: 2,
  hatalar: [
    "Gök cisimlerini inceleyen bilim dalıyla karıştırma: astronomi yıldızları ve gezegenleri inceler.",
    "Yer yapısını inceleyen bilim dalıyla karıştırma: jeoloji kayaçları ve yer katmanlarını inceler.",
    null,
    "İklim bilimi ile hava bilimini karıştırma: meteoroloji kısa süreli hava olaylarını inceler."
  ],
  aciklama: `İklim bilimi, yani klimatoloji, bir bölgede uzun yıllar boyunca görülen ortalama hava koşullarını inceleyen bilim dalıdır. Bu alanda çalışan uzmana iklim bilimci (klimatolog) denir.
Adım 1: Şıkları tek tek ele al. Astronomi gök cisimlerini, jeoloji yerin yapısını inceler; ikisi de iklimle ilgili değildir.
Adım 2: Meteoroloji ile klimatolojiyi ayır. Meteoroloji kısa süreli hava olaylarını inceler ve hava tahmini yapar. Klimatoloji ise uzun yılların ortalamalarını inceler.
Adım 3: Soruda istenen iklimi inceleyen bilim dalıdır. Bu klimatolojidir.
Sık yapılan hata: Televizyonda hava durumunu sunan kişiyi iklim bilimci sanmak. O bir meteorologdur.
Cevap C.`
},
{
  id: "fen-ik-003",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 1,
  soru: "**Aşağıdakilerden hangisi bir yerin iklimi hakkında bilgi verir?**",
  gorsel: null,
  secenekler: [
    "Bu sabah ölçülen rüzgâr hızı",
    "Yıllık ortalama yağış miktarı",
    "Dün gece duyulan gök gürültüsü",
    "Şu anda ölçülen hava sıcaklığı"
  ],
  dogru: 1,
  hatalar: [
    "Anlık ölçümü iklim verisi sanma: bir sabahın rüzgârı bir hava olayıdır.",
    null,
    "Tek bir gecenin olayını iklim verisi sanma: gök gürültüsü kısa süreli bir hava olayıdır.",
    "Anlık sıcaklığı iklim verisi sanma: şu anki sıcaklık yalnızca o anın havasını gösterir."
  ],
  aciklama: `İklim, uzun yıllar boyunca görülen ortalama hava koşullarıdır. Bu yüzden iklim hakkında bilgi veren veriler ortalama değerlerdir.
Adım 1: Şıkları zaman bakımından karşılaştır. "Bu sabah", "dün gece" ve "şu anda" ifadeleri tek bir ana ya da güne aittir.
Adım 2: "Yıllık ortalama yağış miktarı" ise pek çok ölçümün ortalamasıdır ve bir yılın tamamını kapsar.
Adım 3: Öyleyse iklim hakkında bilgi veren B şıkkıdır.
Sağlama: İklim verilerinin adında çoğu zaman "ortalama" sözcüğü geçer. Bu, ayırt etmeyi kolaylaştıran bir ipucudur.
Cevap B.`
},

/* --- Düzey 2 (004-008) --- */
{
  id: "fen-ik-004",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: `Elif'in dedesi, "Ben senin yaşındayken burada kışın sokakta kardan adam yapardık; şimdi kar neredeyse hiç yağmıyor." demiştir.
**Buna göre dedenin bu sözü aşağıdakilerden hangisiyle ilgilidir?**`,
  gorsel: null,
  secenekler: [
    "Bugünün hava tahminiyle",
    "Kar tanelerinin oluşumuyla",
    "Yalnızca geçen kışın havasıyla",
    "Bölgenin uzun yıllar içindeki iklim değişimiyle"
  ],
  dogru: 3,
  hatalar: [
    "Geçmişe dönük gözlemi güncel tahmin sanma: dede yarını değil, on yıllar içindeki değişimi anlatıyor.",
    "Sözü kar oluşumuyla ilişkilendirme: dede karın nasıl oluştuğunu değil, ne sıklıkta yağdığını anlatıyor.",
    "Uzun yılları tek kışa indirgeme: 'senin yaşındayken' ifadesi on yılları kapsayan bir karşılaştırmadır.",
    null
  ],
  aciklama: `Bir gözlemin iklimle ilgili olup olmadığını anlamak için kapsadığı süreye bakılır. On yılları kapsayan karşılaştırmalar iklimle ilgilidir.
Adım 1: Dedenin cümlesindeki zaman ifadesini bul: "Ben senin yaşındayken". Dede bugün yaşlı olduğuna göre bu, aradan on yıllar geçtiği anlamına gelir.
Adım 2: Dede iki dönemi karşılaştırıyor: o günlerde kar sık yağıyordu, şimdi neredeyse hiç yağmıyor. Bu, ortalama koşullardaki uzun dönemli bir değişimdir.
Adım 3: Uzun dönemli koşul değişimi iklim değişimidir. D doğrudur.
Adım 4: A ve C kısa süreli, B ise bambaşka bir konudur.
Sık yapılan hata: Geçmişle ilgili her cümleyi "anı" sayıp bilimsel bir gözlem olarak görmemek. Dedenin söylediği, on yıllara yayılan bir iklim gözlemidir.
Cevap D.`
},
{
  id: "fen-ik-005",
  kazanim: "F.8.1.2.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bir kurumda çalışan iki uzmandan biri "Yarın öğleden sonra kıyıda fırtına bekliyoruz." demiştir. Diğeri ise "Son elli yılda bölgemizin yıllık ortalama sıcaklığı yükseldi." demiştir.
**Buna göre ikinci uzmanın uzmanlık alanı aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "İklim bilimi (klimatoloji)",
    "Gök bilimi (astronomi)",
    "Yer bilimi (jeoloji)",
    "Hava bilimi (meteoroloji)"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Uzmanlık alanını gök cisimleriyle karıştırma: astronomi gezegenleri ve yıldızları inceler.",
    "Uzmanlık alanını yer katmanlarıyla karıştırma: jeoloji kayaçları ve yerin yapısını inceler.",
    "İki uzmanın işini karıştırma: meteoroloji, birinci uzmanın yaptığı gibi kısa süreli hava tahmini yapar."
  ],
  aciklama: `Hava olaylarını meteoroloji, iklimi klimatoloji (iklim bilimi) inceler. Klimatoloji alanında çalışan uzmana iklim bilimci (klimatolog) denir.
Adım 1: Birinci uzmanın cümlesine bak. "Yarın öğleden sonra" tek bir günün birkaç saatini anlatır; bu bir hava tahminidir, meteoroloğun işidir.
Adım 2: İkinci uzmanın cümlesine bak. "Son elli yılda yıllık ortalama sıcaklık" ifadesi uzun yılların ortalamasını anlatır; bu iklimle ilgilidir.
Adım 3: Öyleyse ikinci uzman iklim bilimcidir. A doğrudur.
Sağlama: Cümledeki zaman ifadesini işaretle. "Yarın" - meteoroloji, "son elli yılda" - klimatoloji.
Cevap A.`
},
{
  id: "fen-ik-006",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: `Aşağıdaki tabloda bir kent için hazırlanan üç günlük tahmin verilmiştir.
**Buna göre bu tabloyla ilgili aşağıdakilerden hangisi doğrudur?**`,
  gorsel: `<table class="tablo"><tr><th>Gün</th><th>Hava durumu</th><th>En yüksek sıcaklık</th></tr><tr><td>Bugün</td><td>Parçalı bulutlu</td><td>22 °C</td></tr><tr><td>Yarın</td><td>Sağanak yağışlı</td><td>19 °C</td></tr><tr><td>Öbür gün</td><td>Az bulutlu</td><td>23 °C</td></tr></table>`,
  secenekler: [
    "Kentin iklim tipini belirlemek için yeterlidir.",
    "Kentte beklenen hava olaylarını göstermektedir.",
    "Kentin uzun yıllar ortalamalarını içermektedir.",
    "Kentin son otuz yıllık kayıtlarından oluşmaktadır."
  ],
  dogru: 1,
  hatalar: [
    "Üç günlük veriyi iklim belirlemeye yeterli sayma: iklim için en az otuz yıllık kayıt gerekir.",
    null,
    "Günlük tahmini uzun yıllar ortalaması sanma: tabloda yalnızca üç güne ait beklenen değerler vardır.",
    "Tahmini geçmiş kayıt sanma: tablodaki değerler ölçülmüş değil, beklenen değerlerdir."
  ],
  aciklama: `Hava olayları kısa süreli atmosfer olaylarıdır ve birkaç gün öncesinden tahmin edilebilir. İklim ise uzun yılların ortalamasıdır.
Adım 1: Tablonun kapsadığı süreye bak. Bugün, yarın ve öbür gün; toplam üç gün.
Adım 2: Tablodaki bilgiler yağış durumu ve en yüksek sıcaklıktır. Bunlar o günlerde beklenen hava olaylarıdır. B doğrudur.
Adım 3: A yanlıştır, çünkü üç günle iklim belirlenemez. C ve D de yanlıştır, çünkü tabloda geçmişin ortalaması ya da kayıtları değil, gelecek üç günün beklentisi vardır.
Sağlama: Tabloda "bugün, yarın, öbür gün" yazıyorsa elindeki veri hava tahminidir; "ortalama" ya da "1961 - 1990" gibi bir dönem yazıyorsa iklim verisidir.
Cevap B.`
},
{
  id: "fen-ik-007",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: "**İklim ile hava olayları arasındaki temel fark aşağıdakilerden hangisidir?**",
  gorsel: null,
  secenekler: [
    "Hava olayları geniş, iklim dar alanlarda görülür.",
    "Hava olayları ölçülebilir, iklim ölçülemez.",
    "Hava olayları kışın, iklim yazın etkili olur.",
    "Hava olayları kısa, iklim uzun süreyi kapsar."
  ],
  dogru: 3,
  hatalar: [
    "Alan ilişkisini ters kurma: hava olayları dar bir alanda, iklim geniş bir bölgede değerlendirilir.",
    "İklimi ölçülemez sanma: iklim de ölçülen değerlerin uzun yıllar ortalamasıyla belirlenir.",
    "Kavramları mevsimlerle eşleştirme: ikisi de yılın her döneminde söz konusudur.",
    null
  ],
  aciklama: `Hava olayları dar bir alanda kısa süre içinde görülen atmosfer olaylarıdır. İklim ise geniş bir bölgede uzun yıllar boyunca görülen ortalama hava koşullarıdır.
Adım 1: İki kavramı süre bakımından karşılaştır. Hava olayı saatler ve günlerle, iklim on yıllarla ölçülür. Temel fark budur. D doğrudur.
Adım 2: A'yı denetle. Alan ilişkisi ters verilmiştir; dar alan hava olayına, geniş alan iklime aittir.
Adım 3: B'yi denetle. İklim de ölçülür; zaten iklim değerleri, ölçülen günlük değerlerin uzun yıllar ortalamasından elde edilir.
Adım 4: C'yi denetle. İkisi de mevsimle sınırlı değildir; yaz da kış da hem hava olayı hem iklim konusudur.
Sağlama: "Hava bugünün, iklim yılların" cümlesini aklında tut; bu tek cümle dört şıkkı da ayırt etmeye yeter.
Cevap D.`
},
{
  id: "fen-ik-008",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bir kentte 12 Ağustos günü en yüksek sıcaklık 19 °C ölçülmüştür. Kentin ağustos ayı uzun yıllar ortalaması ise 28 °C'dir.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Kentin iklimi bu ölçümle birlikte değişmiştir.",
    "Kentin ağustos ayları genelde serin geçmektedir.",
    "O gün mevsim normallerinin altında serin geçmiştir.",
    "Kentin ağustos ayı mevsim normali 19 °C olarak belirlenmiştir."
  ],
  dogru: 2,
  hatalar: [
    "Tek günün ölçümünü iklim değişikliği sayma: iklim uzun yılların ortalamasıyla belirlenir.",
    "Bir günü ayın geneline yayma: 28 °C'lik ortalama, ağustosların genelde sıcak geçtiğini gösterir.",
    null,
    "Günün ölçümünü mevsim normalinin yerine koyma: 19 °C o günün değeridir; soruda mevsim normali 28 °C olarak verilmiştir."
  ],
  aciklama: `Mevsim normali, bir yerde o ay için hesaplanmış uzun yıllar ortalamasıdır. Bir günün ölçümü bu ortalamayla karşılaştırılarak "normalin üstünde" ya da "normalin altında" denir.
Adım 1: Ölçülen değerle ortalamayı karşılaştır: 19 °C ve 28 °C. Fark 28 − 19 = 9 °C'dir.
Adım 2: Ölçülen değer ortalamadan düşüktür. Öyleyse o gün mevsim normallerinin altında, yani beklenenden serin geçmiştir. C doğrudur.
Adım 3: A'yı denetle. Bir günün ölçümü iklimi değiştirmez; iklim uzun yılların ortalamasıyla belirlenir.
Adım 4: B'yi denetle. 28 °C'lik ortalama, ağustosların genelde sıcak geçtiğini gösterir; tek bir serin gün bunu değiştirmez.
Adım 5: D'yi denetle. Burada iki değer birbirinin yerine konmuştur: 19 °C tek bir günün ölçümü, 28 °C ise uzun yılların ortalamasıdır. Mevsim normali olan değer 28 °C'dir.
Sık yapılan hata: Bir günün ortalamadan sapmasını iklim değişikliği sanmak. Sapmalar her ay, her yıl yaşanır; iklim ancak ortalamanın kendisi kalıcı biçimde değişirse değişir.
Cevap C.`
},

/* --- Düzey 3 (009-012) --- */
{
  id: "fen-ik-009",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir öğrenci, "Hava mı iklim mi daha kısa sürede değişir?" sorusunu araştırmak istemiştir. Kentinin meteoroloji istasyonundan aldığı kayıtlarla aşağıdaki çizelgeyi hazırlamış; çizelgeye hem birbirini izleyen iki güne ait ölçümleri hem de kentin nisan ayına ait iki ayrı otuz yıllık dönem ortalamasını yazmıştır. Öğrenci, çizelgedeki değerleri karşılaştırarak sorusuna yanıt arayacaktır.
**Buna göre öğrencinin hazırladığı çizelgeye dayanarak aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Veri</th><th>Değer</th></tr><tr><td>7 Nisan günü en yüksek sıcaklık</td><td>22 °C</td></tr><tr><td>8 Nisan günü en yüksek sıcaklık</td><td>11 °C</td></tr><tr><td>Nisan ayı ortalama sıcaklığı (1961 – 1990)</td><td>13,4 °C</td></tr><tr><td>Nisan ayı ortalama sıcaklığı (1991 – 2020)</td><td>14,6 °C</td></tr></table>`,
  secenekler: [
    "Hava sıcaklığı iki günde 11 °C değişirken iklim ortalaması otuz yılda 1,2 °C yükselmiştir.",
    "Sıcaklığın iki gün içinde 11 °C değişmesi, kentin ikliminin de hızla değiştiğini gösterir.",
    "Nisan ortalamasının 1,2 °C yükselmesi, artık her nisan gününün daha sıcak geçtiğini gösterir.",
    "İki güne ait ölçümler ile otuz yıllık dönem ortalamaları aynı türden iklim verisi sayılır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Bir günün havasındaki değişimi iklim değişimi sayma: iklim yıllar içinde ağır ağır değişir, iki günde değişmez.",
    "Ortalamayı her günün değeri sanma: ortalamanın yükselmesi, o ayın bütün günlerinin daha sıcak geçtiğini göstermez.",
    "İki veriyi aynı türden sayma: günlük ölçümler hava olaylarını, dönem ortalamaları iklimi anlatır."
  ],
  aciklama: `Hava olayları kısa sürede büyük değişimler gösterir; iklim ise uzun yıllar içinde yavaş yavaş değişir. Bu yüzden bir değerin hangisine ait olduğunu anlamak için kapsadığı süreye bakılır.
Adım 1: İlk iki satırı oku. 7 Nisan'da 22 °C, 8 Nisan'da 11 °C ölçülmüştür. Fark: 22 − 11 = 11 °C. Bu değişim yalnızca bir günde gerçekleşmiştir ve bir hava olayıdır.
Adım 2: Son iki satırı oku. Nisan ortalaması 13,4 °C'den 14,6 °C'ye çıkmıştır. Fark: 14,6 − 13,4 = 1,2 °C. Bu değişim otuz yıllık iki dönem arasındadır ve iklimle ilgilidir.
Adım 3: İki farkı yan yana koy. Bir günde 11 °C'lik değişim olurken otuz yılda ortalama yalnızca 1,2 °C yükselmiştir. Öyleyse hava, iklime göre çok daha kısa sürede değişir. A doğrudur.
Adım 4: B yanlıştır, çünkü bir günün ölçümü iklimi değiştirmez. C yanlıştır, çünkü ortalamanın yükselmesi her günün daha sıcak geçtiği anlamına gelmez; çizelgedeki iki gün bile birbirinden 11 °C farklıdır. D yanlıştır, çünkü günlük ölçümler hava olaylarını, dönem ortalamaları iklimi anlatır.
Sık yapılan hata: 1,2 °C'lik artışı "önemsiz", 11 °C'lik günlük değişimi "büyük" sanmak. Süreyi de hesaba kat: bir günde olan değişim sıradandır, otuz yılın ortalamasındaki 1,2 °C ise kalıcı bir iklim değişimidir.
Cevap A.`
},
{
  id: "fen-ik-010",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 3,
  soru: `Aşağıdaki grafikte bir kentin uzun yıllar aylık ortalama sıcaklıkları verilmiştir.
**Buna göre bu grafiğe bakarak aşağıdakilerden hangisine __ulaşılamaz__?**`,
  gorsel: `<svg viewBox="0 0 560 300" role="img" aria-label="Bir kentin uzun yıllar aylık ortalama sıcaklık grafiği"><text x="16" y="20" fill="currentColor" font-size="15" font-weight="bold">Grafik: Uzun yıllar aylık ortalama sıcaklık (°C)</text><g stroke="currentColor" stroke-width="2"><line x1="50" y1="52" x2="50" y2="250"/><line x1="50" y1="250" x2="536" y2="250"/></g><g stroke="currentColor" stroke-width="1" opacity="0.3"><line x1="50" y1="187" x2="536" y2="187"/><line x1="50" y1="123" x2="536" y2="123"/><line x1="50" y1="60" x2="536" y2="60"/></g><g fill="currentColor" font-size="14" text-anchor="end"><text x="44" y="255">0</text><text x="44" y="192">10</text><text x="44" y="128">20</text><text x="44" y="65">30</text></g><polyline points="70,225 110,218 150,199 190,168 230,136 270,111 310,92 350,92 390,117 430,149 470,187 510,212" fill="none" stroke="var(--vurgu)" stroke-width="3"/><g fill="var(--vurgu)"><circle cx="70" cy="225" r="4"/><circle cx="110" cy="218" r="4"/><circle cx="150" cy="199" r="4"/><circle cx="190" cy="168" r="4"/><circle cx="230" cy="136" r="4"/><circle cx="270" cy="111" r="4"/><circle cx="310" cy="92" r="4"/><circle cx="350" cy="92" r="4"/><circle cx="390" cy="117" r="4"/><circle cx="430" cy="149" r="4"/><circle cx="470" cy="187" r="4"/><circle cx="510" cy="212" r="4"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="70" y="272">Oca</text><text x="110" y="272">Şub</text><text x="150" y="272">Mar</text><text x="190" y="272">Nis</text><text x="230" y="272">May</text><text x="270" y="272">Haz</text><text x="310" y="272">Tem</text><text x="350" y="272">Ağu</text><text x="390" y="272">Eyl</text><text x="430" y="272">Eki</text><text x="470" y="272">Kas</text><text x="510" y="272">Ara</text></g></svg>`,
  secenekler: [
    "Kentte en sıcak ayların temmuz ve ağustos olduğuna",
    "Kentte ocak ayının temmuz ayından serin geçtiğine",
    "Kentte mevsimler arasında sıcaklık farkı bulunduğuna",
    "Kentte ağustos aylarında bugüne kadar ölçülmüş en yüksek sıcaklığın kaç derece olduğuna"
  ],
  dogru: 3,
  hatalar: [
    "Grafikte bulunan bilgiyi yok sayma: eğrinin en yüksek noktaları temmuz ve ağustos aylarındadır.",
    "İki ayı karşılaştırmayı atlama: ocak yaklaşık 4 °C, temmuz yaklaşık 25 °C'dir.",
    "Eğrinin genel biçimini okumayı atlama: kışın alçalıp yazın yükselen eğri, mevsimler arasındaki farkı gösterir.",
    null
  ],
  aciklama: `İklim verileri ortalamalardır. Ortalama, bir ayın genel eğilimini gösterir; o ayda ölçülmüş en yüksek ya da en düşük değeri vermez.
Adım 1: A'yı denetle. Eğrinin en yüksek olduğu noktalar temmuz ve ağustostur; ikisi de yaklaşık 25 °C'dir. Ulaşılır.
Adım 2: B'yi denetle. Ocak yaklaşık 4 °C, temmuz yaklaşık 25 °C'dir. Ocak açıkça daha serindir. Ulaşılır.
Adım 3: C'yi denetle. Eğri kışın alçalıp yazın yükseldiğine göre mevsimler arasında belirgin bir sıcaklık farkı vardır. Ulaşılır.
Adım 4: D'yi denetle. Grafikte ağustos için tek bir sayı vardır: uzun yılların ortalaması olan yaklaşık 25 °C. Bu sayı, ağustoslarda ölçülmüş en yüksek değerin kaç derece olduğunu söylemez; o değer ortalamanın çok üzerinde olabilir. Ortalama, uç değerleri gizler. Ulaşılamaz.
Sık yapılan hata: Ortalamayı "en yüksek değer" ya da "her gün böyle olur" diye okumak. Ortalamanın 25 °C olduğu bir ayda tek tek günler 18 °C de olabilir, 38 °C de.
Cevap D.`
},
{
  id: "fen-ik-011",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir öğrenci "Kentimizin iklimi son kırk yılda değişti mi?" sorusunu araştıracaktır. Ulaşabileceği veriler şunlardır:
I. Kentin son kırk yıla ait yıllık ortalama sıcaklık kayıtları
II. Komşu ildeki bir istasyonun son kırk yıla ait sıcaklık kayıtları
III. Kentin son kırk yıla ait yıllık toplam yağış kayıtları
**Buna göre öğrenci hangi verileri kullanmalıdır?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve III", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "Yağış kayıtlarını dışarıda bırakma: iklim yalnızca sıcaklıkla değil, yağışla da değerlendirilir.",
    null,
    "Kentin kendi sıcaklık kaydını dışarıda bırakıp komşu ilinkini alma: soru bu kentin iklimiyle ilgilidir.",
    "Başka bir ilin kayıtlarını da katma: komşu ilin ölçümleri bu kentin ikliminin değişip değişmediğini göstermez."
  ],
  aciklama: `İklim değerlendirmesinde kullanılacak veri iki koşulu birden sağlamalıdır: uzun yılları kapsamalı ve araştırılan yere ait olmalıdır.
Adım 1: I'i değerlendir. Kırk yıllık yıllık ortalama sıcaklık kayıtları hem uzun bir dönemi kapsar hem de kentin kendisine aittir. İlk yirmi yılla son yirmi yılın ortalaması karşılaştırılabilir. Kullanılmalıdır.
Adım 2: II'yi değerlendir. Bu kayıtlar da kırk yıllıktır, yani süresi yeterlidir. Ama başka bir ilde toplanmıştır. İklim bölgeden bölgeye değişir; komşu ilin ısınması bu kentin de ısındığını göstermez. Kullanılmaz.
Adım 3: III'ü değerlendir. Yağış da iklimin temel ögelerindendir ve kayıtlar yine kentin kendisine aittir. Kullanılmalıdır.
Adım 4: Öyleyse öğrenci I ve III'ü kullanmalıdır.
Sık yapılan hata: Bir veriyi yalnızca süresine bakıp yeterli saymak. Kırk yıllık bile olsa başka bir yerin kaydı, senin kentinin iklimi hakkında karar vermeye elvermez.
Cevap B.`
},
{
  id: "fen-ik-012",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 3,
  soru: `Aşağıdaki tabloda P ve R kentlerinin uzun yıllar ortalamaları verilmiştir.
**Buna göre bu iki kentle ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Veri</th><th>P kenti</th><th>R kenti</th></tr><tr><td>En sıcak ayın ortalaması</td><td>28,4 °C</td><td>19,6 °C</td></tr><tr><td>En soğuk ayın ortalaması</td><td>9,1 °C</td><td>0,8 °C</td></tr><tr><td>Yıllık ortalama yağış</td><td>680 mm</td><td>1.240 mm</td></tr></table>`,
  secenekler: [
    "P kentinde kışlar R kentinden daha soğuk geçer.",
    "İki kentin iklim özellikleri birbirinin aynısıdır.",
    "R kenti P kentinden daha serin ve daha yağışlıdır.",
    "P kentinde yıl boyunca hiç yağış görülmemektedir."
  ],
  dogru: 2,
  hatalar: [
    "Sütunları ters okuma: en soğuk ay ortalaması P'de 9,1 °C, R'de 0,8 °C'dir; kışları daha soğuk olan R kentidir.",
    "Farkları görmezden gelme: sıcaklık ve yağış değerleri iki kentte belirgin biçimde farklıdır.",
    null,
    "Tabloda olmayan bilgiyi ekleme: P kentinin yıllık ortalama yağışı 680 mm'dir, yağışsız değildir."
  ],
  aciklama: `İki yerin iklimini karşılaştırmak için uzun yıllar ortalamalarına bakılır. Sıcaklık ve yağış, karşılaştırmada kullanılan iki temel ögedir.
Adım 1: Sıcaklık satırlarını karşılaştır. En sıcak ay P'de 28,4 °C, R'de 19,6 °C; en soğuk ay P'de 9,1 °C, R'de 0,8 °C'dir. İki satırda da R daha düşüktür, yani R daha serindir.
Adım 2: Yağış satırını karşılaştır. P'de 680 mm, R'de 1.240 mm'dir. R yaklaşık iki kat daha yağışlıdır.
Adım 3: İki bulguyu birleştir: R kenti hem daha serin hem daha yağışlıdır. C doğrudur.
Adım 4: A yanlıştır, çünkü kışları soğuk olan R kentidir. B yanlıştır, çünkü değerler belirgin biçimde farklıdır. D yanlıştır, çünkü P kenti de yılda 680 mm yağış almaktadır.
Sağlama: Tabloda üç satır da aynı yöne işaret ediyor mu diye kontrol et. Burada iki sıcaklık satırı R'nin serin, yağış satırı R'nin yağışlı olduğunu söylüyor; bu da C'yi doğruluyor.
Cevap C.`
},

/* --- Düzey 4 (013-015) --- */
{
  id: "fen-ik-013",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 4,
  soru: `Bir dağ köyünde iki ayrı otuzar yıllık dönemde belirlenen değerler tabloda verilmiştir.
I. Köyün iklim özellikleri iki dönem arasında değişmiştir.
II. Ortalamalar otuzar yılı kapsadığı için, köyde kar örtüsünün yıldan yıla düzenli biçimde kısaldığı söylenebilir.
III. 1991 – 2020 döneminin en sıcak yılı, 1961 – 1990 döneminin en sıcak yılından daha sıcak olmuştur.
**Buna göre numaralanmış ifadelerden hangileri kesinlikle söylenebilir?**`,
  gorsel: `<table class="tablo"><tr><th>Veri</th><th>1961 – 1990 ortalaması</th><th>1991 – 2020 ortalaması</th></tr><tr><td>Yıllık ortalama sıcaklık</td><td>6,2 °C</td><td>7,5 °C</td></tr><tr><td>Karla örtülü gün sayısı</td><td>96</td><td>61</td></tr><tr><td>İlk kar yağışının görüldüğü tarih</td><td>12 Kasım</td><td>30 Kasım</td></tr></table>`,
  secenekler: ["Yalnız I", "Yalnız III", "I ve II", "I ve III"],
  dogru: 0,
  hatalar: [
    null,
    "I'i dışarıda bırakıp III'ü kesin sayma: üç satırın da değişmesi iklim değişimini gösterir; en sıcak yıllar ise tabloda yoktur.",
    "Ölçülü bir gerekçeyle yazılmış olması II'yi doğru yapmaz: ortalamanın otuz yılı kapsaması, o otuz yılın tek tek nasıl sıralandığını göstermez.",
    "Ortalamadan tek tek yılların en yüksek değerini çıkarma: tabloda dönem ortalamaları vardır, dönemlerin en sıcak yılları değil."
  ],
  aciklama: `"Kesinlikle söylenebilir" kökü, yalnızca verilen veriden doğrudan çıkan sonucu ister. Ortalamalar, o dönemdeki tek tek yılların nasıl sıralandığını ya da en yüksek değerini göstermez.
Adım 1: I'i denetle. Üç satır da değişmiştir: ortalama sıcaklık 1,3 °C artmış, karla örtülü gün sayısı 96'dan 61'e inmiş, ilk kar yağışı 18 gün gecikmiştir. Uzun dönemli ortalamalardaki bu değişim, iklim özelliklerinin değiştiği anlamına gelir. I kesinlikle söylenebilir.
Adım 2: II'yi denetle. İfade "ortalamalar otuzar yılı kapsadığı için" diyerek yöntemli ve ölçülü görünür; ama gerekçesi sonucunu taşımaz. Uzun bir dönemin ortalaması, o dönemdeki yılların hangi sırayla geldiğini anlatmaz. Ortalamanın düşmesi için her yılın bir öncekinden az olması gerekmez; arada kar bakımından zengin yıllar da bulunabilir. II kesin değildir.
Adım 3: III'ü denetle. Tabloda yalnızca dönem ortalamaları verilmiştir; dönemlerin içindeki en sıcak yılın kaç derece olduğu yazmaz. Ortalama yükselmiş olsa bile ilk dönemde olağandışı sıcak tek bir yıl yaşanmış olabilir. III kesin değildir.
Adım 4: Kesinlikle söylenebilecek yalnızca I'dir.
Sık yapılan hata: Ortalamanın yükselmesinden "demek ki her yıl ve her uç değer de yükseldi" sonucunu çıkarmak. Ortalama, dönemin toplu sonucudur; içindeki yılların sırasını da uç değerlerini de anlatmaz. Bir öncülün temkinli ya da gerekçeli bir dille yazılmış olması da onu doğru yapmaz; gerekçenin sonucu gerçekten taşıyıp taşımadığına bak.
Cevap A.`
},
{
  id: "fen-ik-014",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 4,
  soru: `Bir kentin ağustos ayı ortalama sıcaklıkları dönem dönem tabloda verilmiştir. Aynı kentte 2015 ağustosunun ortalaması 26,0 °C, 2024 ağustosunun ortalaması ise 25,1 °C ölçülmüştür. Bir kişi yalnızca bu iki yılı karşılaştırıp "Kentimizde ağustos ayları giderek serinliyor." demiştir.
**Buna göre bu kişinin yaptığı hata aşağıdakilerden hangisidir?**`,
  gorsel: `<table class="tablo"><tr><th>Dönem</th><th>Ağustos ayı ortalama sıcaklığı</th></tr><tr><td>1995 – 2004</td><td>24,1 °C</td></tr><tr><td>2005 – 2014</td><td>24,8 °C</td></tr><tr><td>2015 – 2024</td><td>25,6 °C</td></tr></table>`,
  secenekler: [
    "Uzun dönemli eğilim yerine iki yılın değerini karşılaştırmıştır.",
    "Ağustos ortalaması yerine ocak ortalamasını karşılaştırmıştır.",
    "Ortalama değerler yerine tek bir günün ölçümünü kullanmıştır.",
    "Sıcaklık değerlerini yağış değerleriyle karıştırarak yorumlamıştır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Hatanın yerini yanlış belirleme: kişi ocak değil, ağustos değerlerini karşılaştırmıştır.",
    "Ay ortalamasını günlük ölçüm sanma: kullanılan değerler bir günün değil, bir ayın ortalamasıdır.",
    "Hatanın türünü yanlış belirleme: kişi yağış verisi değil, sıcaklık verisi kullanmıştır."
  ],
  aciklama: `İklim, tek tek yılların değil, uzun dönemli ortalamaların karşılaştırılmasıyla değerlendirilir. Tek tek yıllar ortalamanın altında ya da üstünde olabilir.
Adım 1: Tabloyu oku. Ağustos ortalaması 24,1 - 24,8 - 25,6 °C biçiminde dönemden döneme artmaktadır. Yani uzun dönemli eğilim ısınma yönündedir.
Adım 2: Kişinin kullandığı veriye bak. 2015 için 26,0 °C, 2024 için 25,1 °C. İkisi de doğru değerlerdir ve gerçekten 2024, 2015'ten serindir.
Adım 3: Ama bu iki yıl, on yıllık ortalamanın içindeki tek tek yıllardır. 2015 ortalamanın üstünde, 2024 ortalamaya yakın bir yıldır. İki yılı seçip karşılaştırmak, otuz yıllık eğilimi göstermez.
Adım 4: Öyleyse hata, uzun dönemli eğilim yerine iki yılın değerini karşılaştırmaktır. A doğrudur.
Adım 5: B, C ve D hatayı yanlış yerde arar; kişi doğru ayı, doğru türde veriyi ve ay ortalamalarını kullanmıştır. Yanlış olan yalnızca seçtiği karşılaştırma biçimidir.
Sık yapılan hata: Bir eğilimi çürütmek için ona uyan iki yılı seçmek. İklimde karar, seçilmiş yıllara değil, dönem ortalamalarına bakılarak verilir.
Cevap A.`
},
{
  id: "fen-ik-015",
  kazanim: "F.8.1.2.2",
  kademe: 0,
  zorluk: 4,
  soru: `İklim bilimcilerden oluşan bir kurulun raporunda şu bilgiler yer almaktadır: "Küresel ortalama sıcaklık 1880'den bu yana yaklaşık 1,1 °C artmıştır. Bu artış her bölgede aynı olmamış; bazı bölgeler daha çok, bazıları daha az ısınmıştır. Aynı dönemde bazı bölgelerde yağış artarken bazılarında azalmıştır."
I. Raporda verilen 1,1 °C'lik artış dünya genelinin ortalamasıdır; hiçbir bölgenin ısınma miktarı bu sayıdan okunamaz.
II. Rapordaki değerlendirme uzun bir zaman aralığının verilerine dayanmaktadır.
III. Rapordaki 1,1 °C'lik artış dünya ortalaması olduğu için, bölgelerin yağışındaki değişimin yönü de bu sayıdan hesaplanabilir.
**Buna göre numaralanmış ifadelerden hangileri rapora göre doğrudur?**`,
  gorsel: null,
  secenekler: ["Yalnız I", "I ve II", "II ve III", "I, II ve III"],
  dogru: 1,
  hatalar: [
    "II'yi dışarıda bırakma: rapor 1880'den bugüne uzanan bir dönemi konu alır, bu uzun bir zaman aralığıdır.",
    null,
    "Küresel ortalamadan bölgesel sonuç çıkarma: rapor bazı bölgelerde yağışın arttığını, bazılarında azaldığını söyler; tek bir sayıdan bir bölgenin yağış yönü bulunamaz. Üstelik bu şıkta I'i de dışarıda bırakmış olursun.",
    "Kulağa hesaplanabilir gelen bir ifadeyi doğru sayma: III, dünya ortalamasından bölgelerin yağışını çıkarmaya çalışır; rapor tam tersini, değişimin bölgeden bölgeye farklı olduğunu söyler."
  ],
  aciklama: `İklim bilimciler küresel değerlendirmeleri dünya ortalaması üzerinden yapar. Ortalamanın artması, her bölgede aynı değişimin yaşandığı anlamına gelmez.
Adım 1: I'i denetle. Raporda "bu artış her bölgede aynı olmamış; bazı bölgeler daha çok, bazıları daha az ısınmıştır" yazmaktadır. Artış bölgeden bölgeye değiştiğine göre, 1,1 °C'lik sayıya bakarak tek bir bölgenin ne kadar ısındığı bulunamaz. İfade "hiçbir bölgenin" gibi kesin bir söz kullanır ama rapora tam olarak uyar. I doğrudur.
Adım 2: II'yi denetle. Rapor 1880'den bugüne, yani yaklaşık yüz kırk yıllık bir aralığı konu almaktadır. Bu uzun bir zaman aralığıdır ve iklim değerlendirmesi için gereken süreyi fazlasıyla karşılar. II doğrudur.
Adım 3: III'ü denetle. İfade "dünya ortalaması olduğu için... hesaplanabilir" diyerek ölçülü görünür, ama raporla çelişir. Rapor, aynı dönemde bazı bölgelerde yağışın arttığını bazılarında azaldığını bildirir. Sıcaklık ortalamasını veren tek bir sayıdan bir bölgenin yağışının hangi yöne gittiği çıkarılamaz. III yanlıştır.
Adım 4: Doğru olanlar I ve II'dir.
Sık yapılan hata: "Küresel ısınma" denince her yerin hem aynı miktarda ısınacağını hem kuraklaşacağını sanmak. Küresel ısınma dünya ortalamasının artmasıdır; bölgesel etkileri farklı farklı olur, bazı yerlerde yağış artar. Ayrıca bir ifadenin kesin ya da temkinli konuşması onu doğru yapmaz; ölçüt, raporun söyledikleridir.
Cevap B.`
}
);
