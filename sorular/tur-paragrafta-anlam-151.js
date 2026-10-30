(function () {
function sutun(baslik, et, de, o) {
  var s = "<svg viewBox='0 0 560 300' role='img' aria-label='" + baslik + " sütun grafiği'><text x='280' y='26' text-anchor='middle' font-size='16' fill='currentColor'>" + baslik + "</text><line x1='50' y1='250' x2='530' y2='250' stroke='currentColor' stroke-width='2'/>";
  for (var i = 0; i < de.length; i++) {
    var x = 80 + 120 * i, h = de[i] * o;
    s += "<rect x='" + x + "' y='" + (250 - h) + "' width='70' height='" + h + "' fill='var(--dolgu)' stroke='var(--vurgu)' stroke-width='2'/>";
    s += "<text x='" + (x + 35) + "' y='" + (244 - h) + "' text-anchor='middle' font-size='16' fill='currentColor'>" + de[i] + "</text>";
    s += "<text x='" + (x + 35) + "' y='274' text-anchor='middle' font-size='14' fill='currentColor'>" + et[i] + "</text>";
  }
  return s + "</svg>";
}
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["paragrafta-anlam"] = window.LGS_BANK["paragrafta-anlam"] || []).push(
{
  id: "tur-pa-7451",
  kazanim: "T.8.3.16",
  kademe: 0,
  zorluk: 1,
  soru: `Semt pazarında domates, salatalık ve biber gibi sebzelerin fiyatı mevsime göre değişir. Yaz aylarında bu sebzeler bol yetiştiği için ucuzlar. Kış aylarında ise seralarda üretildiğinden pahalıya satılır. Pazarcılar, o gün tezgâha ne kadar mal geldiğine bakarak etiketi yazar. Bu yüzden aynı sebzenin fiyatı bir yıl içinde epey farklılaşır.

**Bu parçanın konusu aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Pazarcıların fiyat etiketlerini yazış biçimi",
    "Sebze fiyatlarının mevsime göre değişmesi",
    "Yaz aylarında sebzelerin bol yetişmesi",
    "Kış aylarında sebzelerin daha ucuz olması"
  ],
  dogru: 1,
  hatalar: [
    "Metinde var ama ilgisiz: Etiketten metinde söz ediliyor, ama bu yalnızca bir ayrıntı; parça etiketin nasıl yazıldığını anlatmıyor.",
    null,
    "Kısmen doğru: Yaz bolluğu metinde geçer, ama konunun yalnızca bir parçasıdır; kış fiyatları ve yıl içindeki değişim dışarıda kalır.",
    "Ters yön: Metne göre kışın sebze seralarda üretildiği için pahalıdır; ucuz olan yaz mevsimidir."
  ],
  aciklama: `Adım 1: Konu, parçanın "neyden söz ettiği" sorusunun kısa cevabıdır. Parçada hep aynı şey tekrar ediliyor: sebzelerin fiyatı mevsimle değişiyor.
Adım 2: Şıkları tek tek sına. A şıkkı metinde geçen bir ayrıntıdır (etiket), ama soru kökü olan "parça neyi anlatıyor?" sorusuna cevap vermez. C şıkkı yalnızca yaz mevsimini kapsar; kışı ve yıl içindeki farkı dışarıda bırakır. D şıkkı metnin tersini söyler.
Adım 3: B şıkkı yazı, kışı ve fiyat değişimini birlikte karşılar.
Sık yapılan hata: "Şık metinde geçiyor mu?" diye bakıp A ya da C'yi seçmek. Doğru soru şudur: "Bu şık parçanın tamamını anlatıyor mu?"
Cevap B.`
},
{
  id: "tur-pa-7452",
  kazanim: "T.8.3.19",
  kademe: 0,
  zorluk: 1,
  soru: `Bisiklet kazalarında en ağır zarar çoğu zaman başta görülür. Kask bu yüzden önemlidir, ama yalnızca takmak yetmez; doğru takmak gerekir. Çenelik bağı gevşekse kask çarpma anında yerinden oynar. Kaskın kenarı alnı örtmeli, kask ne öne ne arkaya yatmalıdır. Başa tam oturmayan kask, sürücüyü yeterince koruyamaz.

**Bu parçaya en uygun başlık aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Çenelik Bağının Gevşemesi",
    "Bisiklet Kazalarının Başlıca Nedenleri",
    "Kaskın Doğru Takılmasının Önemi",
    "Her Kaskın Her Başa Uyması"
  ],
  dogru: 2,
  hatalar: [
    "Kısmen doğru (çok dar başlık): Gevşek çenelik bağı metindeki ayrıntılardan biridir; parçanın tamamını karşılamaz.",
    "Metinde var ama ilgisiz: Kazalardan söz edilir, ama parça kazaların nedenlerini anlatmaz.",
    null,
    "Ters yön: Metin, kaskın başa tam oturması gerektiğini söyler; her kaskın herkese uyduğunu söylemez."
  ],
  aciklama: `Adım 1: Başlık bulurken önce ana fikri tek cümleyle yaz: "Kask ancak doğru takılırsa baş korunur."
Adım 2: Her başlığa sor: Bu başlık metnin tamamını mı, bir parçasını mı karşılıyor? Başlık fazla geniş de olmamalı, fazla dar da.
Adım 3: A başlığı yalnızca bir ayrıntıyı, yani çenelik bağını karşılar (dar). B başlığı metinde geçen "kaza" sözcüğüne dayanır, ama parça nedenleri anlatmaz. D başlığı metnin tersini söyler. C başlığı ana fikri tam karşılar.
Sık yapılan hata: Metinde en çok dikkat çeken ayrıntıyı (çenelik bağı) başlık yapmak.
Cevap C.`
},
{
  id: "tur-pa-7453",
  kazanim: "T.8.3.17",
  kademe: 0,
  zorluk: 1,
  soru: `Cumartesi sabahları erken kalkıp matematik kursuna gitmek bana ilk başta çok zor geliyordu. Arkadaşlarım parkta toplanırken ben defterimle uğraşıyordum. Ama birkaç hafta sonra okuldaki konuları daha rahat anladığımı fark ettim. Artık sınıfta el kaldırıp soru çözmekten çekinmiyorum. Zahmet gibi görünen o sabahlar, bana özgüven kazandırdı.

**Bu parçanın ana fikri aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Cumartesi sabahları arkadaşlar genellikle parkta toplanır.",
    "Zor görünen işlerden uzak durmak özgüven kazandırır.",
    "Başta zor gelen düzenli çalışma, kişiye özgüven kazandırır.",
    "Kursa gitmek, okuldaki konuları anlamayı kolaylaştırır."
  ],
  dogru: 2,
  hatalar: [
    "Metinde var ama ilgisiz: Arkadaşların parkta toplanması bir ayrıntıdır; anlatıcının varmak istediği sonuç değildir.",
    "Ters yön: Anlatıcı zor işten kaçmadığı için özgüven kazandı; metin tam tersini anlatır.",
    null,
    "Kısmen doğru: Konuları rahat anlamak sonuçlardan biridir, ama metnin asıl vurgusu olan özgüveni içermez."
  ],
  aciklama: `Adım 1: Ana fikir, yazarın parçadan çıkardığı derstir. Genellikle sondaki sonuç cümlesi ipucu verir: "Zahmet gibi görünen o sabahlar, bana özgüven kazandırdı."
Adım 2: Şıkları sına. A şıkkı metinde geçiyor ama soru kökü "anlatıcı ne demek istiyor?" diye soruyor; park bir arka plandır. B şıkkı metnin tersidir. D şıkkı sonuçlardan yalnızca birini söyler.
Adım 3: C şıkkı hem başlangıçtaki zorluğu hem de sonundaki özgüveni içerir.
Sık yapılan hata: "Şık metinde geçiyor mu?" diye bakmak. Metinde geçen her bilgi ana fikir değildir.
Cevap C.`
},
{
  id: "tur-pa-7454",
  kazanim: "T.8.3.18",
  kademe: 0,
  zorluk: 1,
  soru: `Kasabamızın kütüphanesi küçüktür ama çok iş görür. Kitap ödünç vermenin yanında yaşlılar için haftalık okuma saati düzenler. Okul çıkışında çocuklar ödevlerini buradaki uzun masalarda yapar. Kapının yanındaki çay ocağı da insanları kitaplardan sonra bir arada tutar. Böylece kütüphane, kasabanın buluşma yeri olmuştur.

**Bu parçadaki yardımcı fikirlerden biri aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Okuma saatleri yalnızca çocuklar için düzenlenmektedir.",
    "Ödünç kitap hizmeti yalnızca okul çıkışında verilmektedir.",
    "Kasaba halkı çay ocağı yüzünden kütüphaneye gelmemektedir.",
    "Çocuklar ödevlerini kütüphanede yapabilmektedir."
  ],
  dogru: 3,
  hatalar: [
    "Aşırı genelleme (çarpıtma): Okuma saati yaşlılar için düzenleniyor; \"yalnızca çocuklar\" metne aykırıdır.",
    "Kısmen doğru (çarpıtma): Metin ödünç kitap hizmetinin saatini sınırlamaz.",
    "Ters yön: Metne göre çay ocağı insanları kütüphanede bir arada tutuyor.",
    null
  ],
  aciklama: `Adım 1: Yardımcı fikir, ana düşünceyi destekleyen ayrıntıdır. Burada ana düşünce: "Kütüphane kasabanın buluşma yeridir." Destekleyen ayrıntılar: yaşlılara okuma saati, çocuklara ödev masası, çay ocağı.
Adım 2: "Biridir" kökünde doğru şık metnin söylediğini aynen taşır. A, B ve C şıkları metindeki bir bilgiyi çarpıtır ("yalnızca çocuklar", "yalnızca okul çıkışında", "gelmemektedir").
Adım 3: D şıkkı, "Okul çıkışında çocuklar ödevlerini buradaki uzun masalarda yapar" cümlesiyle birebir örtüşür.
Sık yapılan hata: Ana düşünceyi ("buluşma yeri") yardımcı fikir sanmak. Yardımcı fikir daha küçük, somut bir ayrıntıdır.
Cevap D.`
},
{
  id: "tur-pa-7455",
  kazanim: "T.8.3.16",
  kademe: 0,
  zorluk: 1,
  soru: `Koroda ilk öğrendiğim şey, tek başına güzel söylemenin yetmediğiydi. İlk haftalarda sesim hep diğerlerinden önce öne çıkıyordu, bu yüzden şef beni sık sık uyarıyordu. Yanımdakini duymam, sesimi onunkine katmam gerekiyordu. Şefin eli kalkınca hep birlikte nefes alıp aynı anda başlıyorduk. Kimimiz ince, kimimiz kalın söylüyorduk ama ortaya tek bir ses çıkıyordu.

**Bu parçanın konusu aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Koroda seslerin birbirine uydurulmasının önemi",
    "Şefin koroyu yönetirken yaptığı el hareketleri",
    "İnce ve kalın seslerin birbirinden farkları",
    "Koroya yalnızca güzel sesli çocukların alınması"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Metinde var ama ilgisiz: Şefin eli metinde geçer, ama parça el hareketlerini anlatmaz; eli yalnızca birlikte başlamanın bir örneği olarak kullanır.",
    "Kısmen doğru: İnce ve kalın sesler geçer, ama metin bu seslerin farkını değil, birleşmesini anlatır.",
    "Ters yön: Anlatıcı güzel söylemenin tek başına yetmediğini söylüyor; koroya kimin alındığı konu edilmiyor."
  ],
  aciklama: `Adım 1: Parçada hep aynı şey anlatılıyor: koroda sesler birbirine uyuyor, tek ses oluyor.
Adım 2: B şıkkı, şefin eli ayrıntısına dayanır ama metnin konusu değildir. C şıkkı "ince ve kalın" sözcüklerini alır, oysa metin bu seslerin birlikte tek ses olmasını anlatır. D şıkkı metinde hiç tartışılmayan bir konudur.
Adım 3: "Bu şık soru köküne cevap veriyor mu?" diye sor. Yalnızca A, "parçanın konusu nedir?" sorusunu yanıtlar.
Sık yapılan hata: Metinde geçen sözcüklerin ("şef", "ince", "kalın") bulunduğu şıkkı seçmek.
Cevap A.`
},
{
  id: "tur-pa-7456",
  kazanim: "T.8.3.21",
  kademe: 0,
  zorluk: 1,
  soru: `Mahallemizin bakkalı, veresiye defterine borçları yazarken yüzünü hiç ekşitmez. "Elinde olunca verirsin, ben nasıl olsa buradayım." der. Yıllardır kimseyi sıkıştırmadı. Geçen kış işi aksayan bir komşusunun borcunu üç ay boyunca hiç anmadı; defterine yalnızca tarihi yazdı. Mahalle de ona her bayramda en güzel kurabiyeyi götürür.

**Bu parçaya göre bakkalın tutumu aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Veresiyeyi yalnızca tanıdıklarına vermektedir.",
    "Müşterisine borcu için hiçbir zaman baskı yapmamaktadır.",
    "Bayramda kurabiye getirenleri tercih etmektedir.",
    "Borçların ödenmesini sert biçimde istemektedir."
  ],
  dogru: 1,
  hatalar: [
    "Aşırı genelleme: Metin, veresiyenin yalnızca tanıdıklara verildiğini söylemez.",
    null,
    "Metinde var ama ilgisiz: Kurabiye mahallenin bakkala gösterdiği teşekkürdür; bakkalın bir tercihi ya da tutumu değildir.",
    "Ters yön: \"Yüzünü ekşitmez\" ve \"kimseyi sıkıştırmadı\" ifadeleri tam tersini gösterir."
  ],
  aciklama: `Adım 1: Tutum, kişinin bir duruma karşı davranış biçimidir. Bakkalın borç karşısındaki sözleri ve davranışı ipucudur: "yüzünü hiç ekşitmez", "Elinde olunca verirsin", "kimseyi sıkıştırmadı".
Adım 2: Bu ipuçları anlayışlı ve sabırlı bir tutumu gösterir. D şıkkı bunun tersidir. A şıkkı metinde olmayan bir sınır (yalnızca tanıdıklar) ekler. C şıkkı metindeki kurabiyeyi alır, ama kurabiye bakkalın değil mahallenin davranışıdır.
Adım 3: B şıkkı, "kimseyi sıkıştırmadı" cümlesiyle örtüşür.
Sık yapılan hata: Metinde geçen son ayrıntıyı (kurabiye) yoruma çevirmek. Soru bakkalın tutumunu soruyor.
Cevap B.`
},
{
  id: "tur-pa-7457",
  kazanim: "T.8.3.18",
  kademe: 0,
  zorluk: 2,
  soru: "Şehirlerde kâğıt bilet yerini temassız kartlara bıraktı. Kart sayesinde yolcu, bilet kuyruğunda beklemeden araca biner. Aktarma indirimi de kendiliğinden uygulandığı için yolcudan ek ücret alınmaz. Görevliler de artık nakit para taşımak zorunda kalmıyor. Kartını kaybeden yolcunun bakiyesini geri alması ise zor olabilir; ancak bu küçük sorun, kartın sağladığı kolaylıkların yanında önemsiz kalır. Toplu taşımada temassız kart, herkes için pratik bir çözümdür.\n\n**Aşağıdakilerden hangisi bu parçadaki yardımcı fikirlerden biri __değildir__?**",
  gorsel: null,
  secenekler: [
    "Yolcu, bilet kuyruğunda beklemeden yolculuğa başlayabilir.",
    "Aktarma indirimi, kart sayesinde kendiliğinden uygulanır.",
    "Görevliler, nakit para taşıma yükünden kurtulmuştur.",
    "Kartlı sistem, araçların sefer sıklığını artırmıştır."
  ],
  dogru: 3,
  hatalar: [
    "Metinde yazan bilgi: \"Bilet kuyruğunda beklemeden araca biner\" cümlesi bunu söylüyor; bu yüzden yardımcı fikirdir.",
    "Metinde yazan bilgi: Aktarma indiriminin kendiliğinden uygulanması metinde açıkça geçiyor.",
    "Metinde yazan bilgi: \"Nakit para taşımak zorunda kalmıyor\" cümlesi bu şıkkın karşılığıdır.",
    null
  ],
  aciklama: `Adım 1: "Değildir" kökünde üç şık metinde vardır, doğru cevap metinde bulunmayan tek şıktır. Önce metindeki destekleyici ayrıntıları çıkar: kuyruk beklememe, aktarma indirimi, görevlilerin nakit yükünün kalkması.
Adım 2: A, B ve C şıkları bu ayrıntıların karşılığıdır.
Adım 3: Sefer sıklığı metinde hiç geçmiyor; D şıkkı parçada olmayan bir bilgidir.
Sık yapılan hata: Kayıp kart cümlesini görüp onu yardımcı fikir saymak ya da D şıkkını "mantıklı geldiği" için metinde var sanmak. Yardımcı fikir metne dayanır, tahmine değil.
Cevap D.`
},
{
  id: "tur-pa-7458",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 2,
  soru: `Kasaba kütüphanesi bu yıl üyelik kartı çıkarmaya başladı. Üyeler yaşa göre iki gruba ayrıldı. Kütüphane kart ücretini yalnızca 15 yaş ve üstü üyelerden alıyor; 15 yaş altındakiler için kart ücretsiz. Ücret kart başına 20 TL ve bir kez ödeniyor. Kütüphane, kart ücretinden elde edilen geliri yeni kitap alımında kullanacağını da duyurdu; bu yüzden görevli, açılıştan sonraki ilk üç haftada üye olanları haftalara göre tabloya yazdı.

**Metin ve tablo birlikte düşünüldüğünde aşağıdakilerden hangisine ulaşılabilir?**`,
  gorsel: "<table class='tablo'><tr><th>Hafta</th><th>15 yaş altı üye sayısı</th><th>15 yaş ve üstü üye sayısı</th></tr><tr><td>1. hafta</td><td>12</td><td>5</td></tr><tr><td>2. hafta</td><td>9</td><td>11</td></tr><tr><td>3. hafta</td><td>14</td><td>7</td></tr></table>",
  secenekler: [
    "İlk üç haftada toplanan kart ücreti toplam 460 TL’dir.",
    "İlk üç haftada toplanan kart ücreti toplam 700 TL’dir.",
    "İkinci haftada üye olanların çoğu 15 yaş altı gruptadır.",
    "Üçüncü haftada 15 yaş ve üstü üye sayısı ilk haftanın iki katıdır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yanlış grubu sayma: 700 TL, ücretsiz olan 15 yaş altı üyeleri (12 + 9 + 14 = 35) de ücretli saymaktan çıkar.",
    "Veriyi yanlış okuma: İkinci haftada 15 yaş altı 9, 15 yaş ve üstü 11 kişidir; çoğunluk 15 yaş ve üstündedir.",
    "Katı hesaplama hatası: Birinci haftada 5 kişi var; iki katı 10 eder, üçüncü haftada ise 7 kişi var."
  ],
  aciklama: `Adım 1: Tablo sorusunda metindeki kural ile tablodaki sayıyı birlikte kullan. Kural: ücret yalnızca 15 yaş ve üstünden alınır, kart başına 20 TL.
Adım 2: 15 yaş ve üstü üyeler 5 + 11 + 7 = 23 kişidir. 23 × 20 = 460 TL. A şıkkı doğrudur.
Adım 3: B şıkkı ücretsiz grubu da sayar (35 × 20 = 700). C şıkkında 9 < 11 olduğu için çoğunluk 15 yaş altı değildir. D şıkkında 5'in iki katı 10'dur, tabloda 7 yazıyor.
Sık yapılan hata: Yalnızca tabloya bakıp metindeki "yalnızca 15 yaş ve üstü" kuralını atlamak.
Cevap A.`
},
{
  id: "tur-pa-7459",
  kazanim: "T.8.3.17",
  kademe: 0,
  zorluk: 2,
  soru: `Telefonumun haftalık raporunu ilk kez açtığımda şaşırdım: günde ortalama dört saat ekrana bakmışım. En çok vakit harcadığım uygulama oyun değil, sürekli açıp kapattığım mesaj ekranıydı. Bildirim sesi geldikçe elim kendiliğinden cebe gidiyordu. Bildirimleri kapatmayı daha önce hiç düşünmemiştim; sonunda onları akşam saatine ertelemeye karar verdim. İki hafta sonra ekran süresi iki saate indi. Demek ki sorun telefonda değil, onu ne zaman ve neden elime aldığımdaydı.

**Bu parçanın ana fikri aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Telefon kullanımı, alışkanlıklar değiştirilerek azaltılabilir.",
    "En çok vakit harcanan uygulama, mesajlaşma uygulamasıdır.",
    "Bildirimleri ertelemek, ekran süresini her zaman yarıya indirir.",
    "Telefon kullanımı, cihaz elden çıkarılmadıkça azaltılamaz."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Metinde var ama ilgisiz: Mesaj ekranı metinde geçer, ama bu bir bulgudur; anlatıcının çıkardığı ders değildir.",
    "Aşırı genelleme: Anlatıcının ekran süresi yarıya indi; bu, her kişi ve her zaman için geçerli bir kural olarak sunulamaz.",
    "Ters yön: Anlatıcı telefonu bırakmadı, yalnızca bildirimleri erteledi ve süresi azaldı."
  ],
  aciklama: `Adım 1: Ana fikri son cümlede ara: "Sorun telefonda değil, onu ne zaman ve neden elime aldığımdaydı." Yani çözüm, alışkanlığı fark edip değiştirmektir.
Adım 2: Şıkları sına. B şıkkı metindeki bir bulguyu söyler; ama "metinde geçiyor mu?" yetmez, "yazar bundan ne ders çıkarıyor?" diye sor. C şıkkı bir kişinin deneyimini herkes için kesin kural yapar. D şıkkı metnin tersidir.
Adım 3: A şıkkı alışkanlığı fark etme ve değiştirme fikrini içerir.
Sık yapılan hata: Parçanın ortasındaki dikkat çekici bulguyu (mesaj ekranı) ana fikir yapmak.
Cevap A.`
},
{
  id: "tur-pa-7460",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Bir hastane, randevu sistemini yeniledi. Telefonla randevu alan hastalar ortalama yirmi dakika telefon hattında beklerken internetten randevu alanlar işlemini iki dakikada bitirdi. Buna rağmen yaşlı hastaların büyük bölümü hâlâ telefonu tercih ediyor. Hastane, telefon hattındaki görevli sayısını artırmak yerine yaşlılara yönelik kısa eğitim videoları hazırlayacağını duyurdu. Bu videolarda internetten randevu almanın adımları, ekran görüntüleriyle gösterilecek. Videolar, hastanenin internet sitesinde ve poliklinik bekleme salonlarındaki ekranlarda yayımlanacak.

**Bu parçadan aşağıdakilerden hangisi çıkarılabilir?**`,
  gorsel: null,
  secenekler: [
    "Telefonla randevu alan hiçbir hasta yirmi dakikadan önce işlem yapamaz.",
    "Hastane, yaşlı hastalar için telefonla randevu hizmetini kaldıracaktır.",
    "Hastane, yaşlıların internetten randevu almasını yaygınlaştırmak istemektedir.",
    "Eğitim videoları hazırlamak, görevli sayısını artırmaktan daha ucuza gelecektir."
  ],
  dogru: 2,
  hatalar: [
    "Aşırı genelleme: Metin yirmi dakikayı bir ortalama olarak verir; hiçbir hastanın daha kısa sürede işlem yapamayacağı söylenemez.",
    "Ters yön: Hastane telefon hattını kaldırmıyor; yalnızca görevli sayısını artırmıyor.",
    null,
    "Metinde var ama ilgisiz: Videolar ve görevli sayısı metinde geçer, ama iki seçeneğin maliyeti hakkında metinde hiçbir bilgi yok."
  ],
  aciklama: `Adım 1: Çıkarım, metinde doğrudan yazmayan ama yazılanlardan mantıkla ulaşılan sonuçtur. Önce verileri sırala: internet iki dakika, telefon yirmi dakika; yaşlılar telefonda ısrar ediyor; hastane görevli artırmıyor, eğitim videosu hazırlıyor.
Adım 2: Hastanenin yaptığı iş, yaşlıları internete alıştırmaktır; hedef de budur.
Adım 3: Diğer şıkları sına. A "ortalama"yı kesin kural yapar. B hastanenin söylemediği bir karar ekler. D, metinde karşılaştırması bulunmayan bir maliyet bilgisine dayanır.
Sık yapılan hata: Metindeki sözcükleri (video, görevli) gören şıkkı seçmek. Doğru çıkarım, metindeki bilgiden zorunlu olarak çıkan sonuçtur.
Cevap C.`
},
{
  id: "tur-pa-7461",
  kazanim: "T.8.3.21",
  kademe: 0,
  zorluk: 2,
  soru: `Müzik öğretmeni sınıfa yeni bir uygulama getirdi: Her ders başında bir öğrenci, kendi seçtiği şarkıyı iki dakika boyunca dinletecekti. Bu uygulamadan önce müzik dersinde yalnızca öğretmenin seçtiği parçalar dinleniyordu. İlk haftalarda şarkıların çoğu birbirine benziyordu. Sonra sınıfta halk türküleri, film müzikleri, hatta bir mehter marşı bile çaldı. Öğretmen her şarkıdan sonra yalnızca şunu sordu: “Bunu neden seçtin?” Bu soruya yanıt verirken kimse çekinmedi.

**Bu parçada anlatılan öğretmenin tutumu aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Seçilen şarkıları beğenip beğenmediğini açıkça söylemektedir.",
    "Yalnızca halk türkülerinin ders başında dinletilmesini istemektedir.",
    "Şarkıların birbirine benzemesinden memnun kalmaktadır.",
    "Öğrencilere tercihlerini serbestçe açıklama fırsatı vermektedir."
  ],
  dogru: 3,
  hatalar: [
    "Ters yön: Öğretmen yalnızca \"Bunu neden seçtin?\" diye soruyor; beğenip beğenmediğini söylemiyor.",
    "Aşırı genelleme: Türküler metinde geçen türlerden yalnızca biridir; öğretmen türü sınırlamıyor.",
    "Metinde var ama ilgisiz: Şarkıların benzemesi ilk haftaların bir gözlemidir; öğretmenin tutumuna dair bir ipucu vermez.",
    null
  ],
  aciklama: `Adım 1: Tutumu anlamak için kişinin ne yaptığına bak. Öğretmen şarkıyı seçmeyi öğrenciye bırakıyor, sonra yalnızca "Bunu neden seçtin?" diye soruyor. Yargılamıyor, yönlendirmiyor.
Adım 2: Bu davranış, öğrencinin seçimini söylemesine fırsat vermektir. A şıkkı öğretmenin yapmadığı bir davranış ekler. B şıkkı "yalnızca" ile metni daraltır. C şıkkı bir gözlemi tutum gibi sunar.
Adım 3: D şıkkı öğretmenin davranışıyla birebir örtüşür.
Sık yapılan hata: Metinde geçen ayrıntıyı (benzer şarkılar) yoruma çevirmek. Önce "kişi ne yapıyor?" diye sor, sonra tutumu çıkar.
Cevap D.`
},
{
  id: "tur-pa-7462",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 2,
  soru: `Bir mahallede gönüllüler dört cumartesi boyunca aynı sokakları temizledi. Toplanan çöp, ağzına kadar doldurulan poşetlere kondu; her poşete tam 3 kg çöp sığıyordu. Temizlik her cumartesi sabah dokuzda başlıyor, öğlene kadar sürüyordu. Çöpler ayrıştırılmadığı için hepsi aynı tür poşetlere konuyordu. Gönüllüler her temizlikte kaç poşet doldurduklarını muhtarlığın önünde sayıp grafiğe işledi. Üçüncü cumartesiden önce mahalle sakinleri sokağa iki ek çöp kutusu koydu.

**Metin ve grafik birlikte düşünüldüğünde aşağıdakilerden hangisine ulaşılabilir?**`,
  gorsel: sutun("Doldurulan çöp poşeti sayısı", ["1. cumartesi", "2. cumartesi", "3. cumartesi", "4. cumartesi"], [10, 16, 12, 8], 8),
  secenekler: [
    "Dördüncü cumartesi toplanan çöp miktarı 30 kg’dır.",
    "İkinci cumartesi toplanan çöp miktarı 48 kg’dır.",
    "Üçüncü cumartesi toplanan çöp, ilk cumartesidekinden azdır.",
    "Dört cumartesi boyunca toplanan çöpün toplamı 100 kg’dır."
  ],
  dogru: 1,
  hatalar: [
    "Poşet sayısını kiloya çevirme hatası: Dördüncü cumartesi 8 poşet vardır; 8 × 3 = 24 kg eder, 30 kg değil.",
    null,
    "Veriyi yanlış okuma: Üçüncü cumartesi 12 poşet (36 kg), ilk cumartesi 10 poşet (30 kg) vardır; üçüncü cumartesi daha fazladır.",
    "Toplama hatası: Toplam poşet 10 + 16 + 12 + 8 = 46'dır; 46 × 3 = 138 kg eder."
  ],
  aciklama: `Adım 1: Grafik poşet sayısını verir, kilo değerini metin verir: her poşet 3 kg. Bu yüzden çöp miktarı = poşet sayısı × 3.
Adım 2: 1. cumartesi 10 × 3 = 30 kg, 2. cumartesi 16 × 3 = 48 kg, 3. cumartesi 12 × 3 = 36 kg, 4. cumartesi 8 × 3 = 24 kg. B şıkkı doğrudur.
Adım 3: A şıkkında 24 yerine 30 yazılmış. C şıkkında 36 kg, 30 kg'dan fazladır. D şıkkında toplam 30 + 48 + 36 + 24 = 138 kg'dır.
Sık yapılan hata: Grafikteki poşet sayısını kilo sanmak. Soru kiloyu sorarsa metindeki 3 kg bilgisini kullan.
Cevap B.`
},
{
  id: "tur-pa-7463",
  kazanim: "T.8.3.19",
  kademe: 0,
  zorluk: 2,
  soru: `Kervansaraylar, ticaret yolları üzerinde genellikle bir günlük yol aralığıyla kurulan konaklama yapılarıdır. Yolcular ve hayvanları burada barınır, dinlenirdi. Yapılar yüksek taş duvarlarla çevrili olduğundan geceleri kapılar kapatılır, yolcular rahat uyurdu. Tüccarlar yüklerini bu yapıların güvenli avlularında bırakabildiği için yola korkusuzca çıkardı. Böylece mal akışı hızlanır, kentler birbirine daha kolay bağlanırdı. Hayvanların bakımı ayrı bir düzen gerektirirdi, ama ticaretin sürekliliği asıl kazançtı.

**Bu parçaya en uygun başlık aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Ticareti Kolaylaştıran Yol Konakları",
    "Tüccarların Hayvan Bakım Düzeni",
    "Kervansarayların Mimari Özellikleri",
    "Bütün Yolların Güvenli Hâle Gelmesi"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Metinde var ama ilgisiz (dar): Hayvan bakımı metinde bir cümlede geçer, ama parçanın ana fikri değildir.",
    "Ters yön (metinde yok): Metin yapıların mimarisinden hiç söz etmez; başlık parçanın dışına çıkar.",
    "Aşırı genelleme: Metin yalnızca kervansaray çevresindeki güvenliği anlatır; bütün yolların güvenli olduğunu söylemez."
  ],
  aciklama: `Adım 1: Önce ana fikri tek cümleyle yaz: "Kervansaraylar yolcuya güvenli konaklama sağlayarak ticareti kolaylaştırırdı."
Adım 2: Her başlığı bu cümleyle karşılaştır; başlık metnin tamamını mı, yalnızca bir parçasını mı karşılıyor? B başlığı yalnızca bir cümleyi (hayvan bakımı) karşılar, yani dardır. C başlığı metinde olmayan bir konuya gider. D başlığı fazla geniştir: bütün yollar değil, yalnızca konaklama yerleri anlatılıyor.
Adım 3: A başlığı hem yapıyı (konak) hem de işlevi (ticareti kolaylaştırma) kapsar.
Sık yapılan hata: Metinde geçen ayrıntıyı (hayvan bakımı) başlık yapmak. Başlık ana fikri karşılamalıdır.
Cevap A.`
},
{
  id: "tur-pa-7464",
  kazanim: "T.8.3.18",
  kademe: 0,
  zorluk: 2,
  soru: `Okul basketbol takımının yedek oyuncusuyum ve maçların çoğunu kenardan izliyorum. Antrenman günlerinde herkesten önce salona gidip topları şişiriyorum; bu iş küçük görünse de takımın düzenini sağlıyor. Yine de bu rolü küçümsemiyorum. Kenardan bakınca oyunun akışını sahadakilerden önce görüyorum; mola sırasında antrenöre söylediklerim işe yarıyor. Ayrıca moladan çıkan arkadaşlarıma havlu ve su uzatmak bile onlara moral veriyor. Sahada geçirilen dakika, bir oyuncunun takıma katkısının tek ölçüsü değildir.

**Bu parçadaki yardımcı fikirlerden biri aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Yedek oyuncuların gözlemleri antrenör tarafından kullanılmamaktadır.",
    "Yedek oyuncunun asıl görevi, molalarda takımın suyunu hazırlamaktır.",
    "Sahada geçirilen dakika, bir oyuncunun katkısının tek ölçüsüdür.",
    "Kenardaki oyuncu, oyunun akışını sahadakilerden önce fark edebilir."
  ],
  dogru: 3,
  hatalar: [
    "Ters yön: Anlatıcı, mola sırasında antrenöre söylediklerinin işe yaradığını belirtiyor.",
    "Kısmen doğru (çarpıtma): Su uzatmak anlatıcının katkılarından biridir, ama \"asıl görev\" olarak sunulmaz.",
    "Ters yön: Bu, parçanın ana düşüncesinin tam tersidir; metnin son cümlesi dakikanın tek ölçü olmadığını söyler.",
    null
  ],
  aciklama: `Adım 1: Ana düşünceyi bul: "Yedek oyuncu da takıma katkı sağlar." Yardımcı fikirler bu düşünceyi destekleyen somut ayrıntılardır: oyunu erken görmek, antrenöre bilgi vermek, moral vermek.
Adım 2: "Biridir" kökünde doğru şık metinde yazan ayrıntıyı taşır. A ve C şıkları metnin söylediğinin tersini yazar. B şıkkı su uzatmayı "asıl görev" yapıp çarpıtır.
Adım 3: D şıkkı, "oyunun akışını sahadakilerden önce görüyorum" cümlesinin karşılığıdır. Ana düşünce de değildir; ana düşünceyi destekleyen bir ayrıntıdır.
Sık yapılan hata: Son cümleyi (ana düşünce) yardımcı fikir sanmak.
Cevap D.`
},
{
  id: "tur-pa-7465",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 2,
  soru: `Harçlığını haftalara bölerek harcayan öğrenciler, ay sonunda para sıkıntısını daha az yaşıyor. Okulda yapılan küçük bir yoklamada bu fark açıkça görüldü. Çünkü her hafta başında ellerindeki miktarı yeniden gözden geçirme fırsatı buluyorlar. Ay başında bütün parayı eline alan öğrenci ise ilk günlerde kendini zengin hissedip bol harcayabiliyor. - - - - . Bu nedenle parayı küçük dilimlere ayırmak, harcamayı denetlemenin kolay bir yoludur.

**Bu parçada boş bırakılan yere, düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: [
    "Harçlığın miktarı arttıkça tasarruf etme isteği de belirgin biçimde güçleniyor.",
    "Haftalara bölmek, ay sonu para sıkıntısını kesinlikle ortadan kaldırıyor.",
    "Sonraki haftalarda cebi boşalınca isteklerinden vazgeçmek zorunda kalıyor.",
    "Ayda bir kez para almak, alışveriş yapmayı daha keyifli hâle getiriyor."
  ],
  dogru: 2,
  hatalar: [
    "Metinde var ama ilgisiz (konu dışı): Harçlığın miktarı bu paragrafın konusu değildir; boşluktan önceki cümle, parayı bir kerede alanın ilk günlerdeki harcamasını anlatıyor.",
    "Aşırı genelleme: Metin, haftalık bölmenin para sıkıntısını daha az yaşattığını söyler; \"kesinlikle ortadan kaldırır\" demez.",
    null,
    "Ters yön: Parçadaki düşünce, parayı bir kerede almanın zorluğunu anlatır; bunun keyifli olduğu savunulmaz."
  ],
  aciklama: `Adım 1: Paragraf tamamlamada boşluktan önceki ve sonraki cümleye bak. Önceki cümle: ay başında parayı alan öğrenci ilk günlerde bol harcıyor. Sonraki cümle: "Bu nedenle parayı küçük dilimlere ayırmak..." diyor. Boşluk, bol harcamanın sonucunu söylemeli.
Adım 2: Bol harcayan kişinin sonraki haftalarda parasız kalması mantıklı sonuçtur. C şıkkı bunu söyler ve sonraki cümlenin "bu nedenle" bağlacıyla da uyumludur.
Adım 3: A şıkkı konu dışıdır, B şıkkı kesinlik katarak abartır, D şıkkı akışın tersine gider.
Sık yapılan hata: Konuyla ilgili görünen (harçlık, tasarruf) ama akışa uymayan şıkkı seçmek.
Cevap C.`
},
{
  id: "tur-pa-7466",
  kazanim: "T.8.3.16",
  kademe: 0,
  zorluk: 2,
  soru: `Görsel sanatlar dersinde ilk kez seramikle çalıştık. Çamuru ellerime aldığımda sandığımdan daha soğuk ve ağır olduğunu fark ettim. Kâse yapmaya çalışırken duvarlar bir yana çöktü; üç kez baştan başlamak zorunda kaldım. Öğretmenimiz, çamurun içindeki havayı almak için hamuru masaya vurarak yoğurmamız gerektiğini söyledi. Bunu yapınca çamur daha dirençli oldu. Fırından çıkan kâsem biraz eğriydi, ama ilk kâsem olarak hoşuma gitti.

**Bu parçanın konusu aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Görsel sanatlar dersinin okuldaki önemi",
    "Seramikle çalışırken yaşanan ilk deneyimler",
    "Çamurun içindeki havayı alma yöntemi",
    "Kâsenin fırında pişirilme süreci"
  ],
  dogru: 1,
  hatalar: [
    "Aşırı genelleme: Parça, görsel sanatlar dersini genel olarak değerlendirmez; yalnızca seramik çalışmasını anlatır.",
    null,
    "Metinde var ama ilgisiz (dar): Hava alma yöntemi bir cümlede geçer; parçanın tamamı bununla ilgili değildir.",
    "Metinde var ama ilgisiz (dar): Fırından yalnızca bir cümlede söz edilir; parça pişirme sürecini anlatmaz."
  ],
  aciklama: `Adım 1: Konuyu bulmak için "Bu parça baştan sona neyi anlatıyor?" diye sor. Çamurun ağırlığı, kâsenin çökmesi, öğretmenin önerisi, çamurun dirençli hâle gelmesi ve eğri kâse: hepsi seramikle yapılan ilk çalışmanın parçalarıdır.
Adım 2: B şıkkı hepsini kapsar. C ve D şıkları parçanın yalnızca bir cümlesini alır. A şıkkı ise metnin ötesine geçip dersin genel önemini tartışır.
Adım 3: Konu sorusunda cevap, metnin tamamını karşılayan en uygun ifadedir.
Sık yapılan hata: Metinde adı geçen ayrıntıyı (hava alma, fırın) konu sanmak.
Cevap B.`
},
{
  id: "tur-pa-7467",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 3,
  soru: `Şehirdeki bir buz pisti, sezon sonuna doğru paten kiralama ücretini her hafta düşürmeye karar verdi. İlk hafta bir çift paten 30 TL'ye kiralandı; sonraki her hafta ücret, bir önceki haftadan 5 TL daha düşük belirlendi. Pist yönetimi, ücret düştükçe kiralamanın artıp artmadığını ve haftalık gelirin nasıl değiştiğini görmek istiyordu. Bu yüzden dört hafta boyunca her hafta kiralanan paten çifti sayısını kaydedip grafiğe aktardı. Bir kiralama tek seansı kapsıyordu ve her kiralamada o haftanın ücreti alınıyordu. Gelir hesabında yalnızca paten kiralama ücretleri esas alınıyor; bilet ve kafeterya gelirleri hesaba katılmıyor. Yönetim, kiralama sayısının tek başına geliri göstermeyeceğini, ücretin de hesaba katılması gerektiğini not etti. Yani haftalık gelir, kiralanan çift sayısı ile o haftanın kira ücretinin çarpımına eşittir.

**Metin ve grafik birlikte düşünüldüğünde aşağıdakilerden hangisine ulaşılabilir?**`,
  gorsel: sutun("Haftalık kiralanan paten çifti sayısı", ["1. hafta", "2. hafta", "3. hafta", "4. hafta"], [40, 60, 70, 90], 2),
  secenekler: [
    "En çok paten kiralanan hafta, en yüksek geliri de getirmiştir.",
    "İkinci haftanın geliri, birinci haftanınkinden 300 TL fazladır.",
    "Üçüncü haftanın geliri, birinci haftanınkinden azdır.",
    "Dördüncü haftanın geliri, 1200 TL olarak hesaplanmıştır."
  ],
  dogru: 1,
  hatalar: [
    "Sayıyla geliri karıştırma: En çok kiralama 4. haftadadır (90 çift), ama ücret 15 TL'ye düştüğü için geliri 1350 TL'dir; en yüksek gelir 2. haftadadır (1500 TL).",
    null,
    "Hesap hatası: 3. hafta geliri 70 × 20 = 1400 TL, 1. hafta geliri 40 × 30 = 1200 TL'dir; üçüncü hafta daha fazladır.",
    "Hafta karıştırma: 1200 TL, 1. haftanın gelirine aittir; 4. hafta geliri 90 × 15 = 1350 TL'dir."
  ],
  aciklama: `Adım 1: Gelir = kiralanan çift sayısı × kira ücreti. Ücretleri metinden çıkar: 1. hafta 30 TL, sonraki her hafta 5 TL düşük; yani 30, 25, 20, 15 TL. Kiralanan çift sayılarını grafikten oku: 40, 60, 70, 90.
Adım 2: Gelirler: 40 × 30 = 1200, 60 × 25 = 1500, 70 × 20 = 1400, 90 × 15 = 1350 TL. İkinci hafta ile birinci hafta arasındaki fark 1500 − 1200 = 300 TL'dir; B şıkkı doğrudur.
Adım 3: A şıkkı en yüksek sütunu en yüksek gelir sanır. C'de 1400 > 1200 olduğundan yanlıştır. D'de 1200 yerine 1350 olmalıdır.
Sık yapılan hata: Yalnızca grafiğe bakıp ücreti metinden almamak.
Cevap B.`
},
{
  id: "tur-pa-7468",
  kazanim: "T.8.3.17",
  kademe: 0,
  zorluk: 3,
  soru: `Yaz tatilinde terzi amcamın dükkânında çalıştım. Ütü kokusu, makas sesleri ve kumaş yığınları arasında ilk günler bana çok yabancı gelmişti. İlk gün bana düğme dikmeyi öğretti. Bir saat içinde kırk düğme diktim ve gururla gösterdim. Amcam, rastgele seçtiği iki düğmenin ipini çekti; ikisi de yerinden çıktı. Hiçbir şey söylemeden hepsini sökmemi işaret etti. Ertesi hafta düğmeleri daha yavaş, ipi dört kez dolayarak diktim. Bir saatte artık yalnızca on iki düğme bitiriyordum, ama o düğmeler ceketlerden aylarca çıkmadı. Dükkâna her gelen müşteri, ceketlerinin ne kadar sağlam durduğunu söylüyordu. Yaz bittiğinde dükkânın en hızlı çırağı ben değildim. Ama amcam, bozulmaması gereken işleri artık bana veriyordu.

**Bu parçanın ana fikri aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Bir işin asıl değeri, hızından çok özenle yapılmasına bağlıdır.",
    "Terzi dükkânlarında çalışanların en çok yaptığı iş düğme dikmektir.",
    "Hızlı çalışan çırakların yaptığı işler her zaman özensiz olur.",
    "Ustanın gösterdiği yöntemi tekrarlamak, mesleği öğrenmenin yoludur."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Metinde var ama ilgisiz: Düğme dikme, olayın geçtiği iştir; anlatıcının çıkardığı ders değildir.",
    "Aşırı genelleme: Anlatıcı kendi deneyimini anlatıyor; hızlı çalışan herkesin işinin özensiz olduğunu söylemiyor.",
    "Kısmen doğru: Amcasının gösterdiği yöntemi uygulaması olayda var, ama metnin vurgusu yöntemin tekrarı değil, hız yerine özenin seçilmesidir."
  ],
  aciklama: `Adım 1: Olayın akışına bak: önce hızlı ama özensiz iş (düğmeler çıkıyor), sonra yavaş ama sağlam iş (düğmeler aylarca duruyor), sonunda amcanın güveni. Bu akış, "iş hızla değil özenle değer kazanır" derse varır.
Adım 2: Şıkları "bu şık anlatıcının çıkardığı ders mi?" diye sına. B şıkkı bir ayrıntıdır. C şıkkı tek bir olayı herkese genelleyip "her zaman" ekler. D şıkkı bir kısmı doğru ama asıl vurguyu kaçırır.
Adım 3: A şıkkı tüm akışı kapsar.
Sık yapılan hata: Olayın geçtiği yeri ya da işi (düğme dikmek) ana fikir sanmak.
Cevap A.`
},
{
  id: "tur-pa-7469",
  kazanim: "T.8.3.18",
  kademe: 0,
  zorluk: 3,
  soru: `Uyumadan önce telefon ekranına bakmak, uykuya dalmayı geciktirebilir. Ekranın yaydığı mavi ışık, beynin “gece oldu” sinyalini geç almasına yol açar. Ayrıca ekranda izlenen heyecanlı bir video, kişiyi uykuya hazırlamak yerine zihni uyanık tutar. Bu yüzden yatmadan en az yarım saat önce ekranları kapatan gençler, daha kolay uykuya dalar. Bu süre içinde kitap okumak, sakin bir yürüyüş yapmak, hafif bir müzik dinlemek ya da ertesi günün çantasını hazırlamak iyi bir seçenektir. Uyku düzeni bozulduğunda ertesi gün derste dikkat dağınıklığı da artar. Uzmanlar, her gün aynı saatte yapılan sakin işlerin vücuda uyku zamanını öğrettiğini söylüyor. Kısacası uykuya geçişi ekran değil, sakin bir rutin kolaylaştırır.

**Bu parçadaki yardımcı fikirlerden biri __değildir__. Aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Heyecanlı videolar, zihni uyanık tutarak uykuyu zorlaştırır.",
    "Yatmadan önce ekranı kapatmak, uykuya dalmayı kolaylaştırır.",
    "Telefonun başka odada şarj edilmesi, uyku sorununu çözer.",
    "Uykusuzluk, ertesi gün derste dikkati dağıtabilir."
  ],
  dogru: 2,
  hatalar: [
    "Metinde yazan bilgi: \"Heyecanlı bir video zihni uyanık tutar\" cümlesi bunun karşılığıdır; yardımcı fikirdir.",
    "Metinde yazan bilgi: Yatmadan yarım saat önce ekranı kapatan gençlerin kolay uyuduğu açıkça söyleniyor.",
    null,
    "Metinde yazan bilgi: \"Ertesi gün derste dikkat dağınıklığı artar\" cümlesi bunu söylüyor."
  ],
  aciklama: `Adım 1: Önce ana düşünceyi bul: "Ekran, uykuya dalmayı zorlaştırır." Yardımcı fikirler bunu destekler: mavi ışık, heyecanlı video, yarım saat önce kapatma, ertesi günkü dikkat dağınıklığı.
Adım 2: "Değildir" kökünde üç şık metinde vardır. A (heyecanlı video), B (ekranı kapatma) ve D (dikkat dağınıklığı) metindeki cümlelerin karşılığıdır.
Adım 3: Telefonu başka odada şarj etmek metinde hiç geçmez; C şıkkı doğru cevaptır.
Sık yapılan hata: Mantıklı geldiği için C şıkkını metinde var sanmak. Soru "doğru mu?" diye değil, "metinde yazıyor mu?" diye soruyor.
Cevap C.`
},
{
  id: "tur-pa-7470",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 3,
  soru: `Bir kafe zinciri, kendi bardağını getiren müşteriye 5 TL indirim uygulamaya başladı. Uygulamanın ilk ayında günlük kâğıt bardak tüketimi yüzde 12 azaldı; ama sonraki aylarda bu düşüş durdu. Yönetim, indirim tutarını 10 TL'ye çıkarmak yerine yeni bir yol seçti: Kendi bardağıyla gelen müşterilere her seferinde puan verildi ve puanlar belli bir sayıya ulaşınca ücretsiz içecek hakkı doğdu. Uygulamanın başlamasından bu yana kendi bardağıyla gelen müşterilerin sayısı artmış olsa da kasadaki kuyruğun uzunluğu değişmedi; kasa ve çalışan sayısı da aynı kaldı. Şubelerdeki toplam müşteri sayısı ilk aydan itibaren değişmedi; yani bardak tüketimindeki düşüş müşterilerin azalmasından kaynaklanmadı. Yönetim, puan sisteminin etkisini ölçebilmek için sonuçları önümüzdeki dönemde yeniden değerlendireceğini açıkladı.

**Bu parçadan aşağıdakilerden hangisi çıkarılabilir?**`,
  gorsel: null,
  secenekler: [
    "Kendi bardağıyla gelen müşterilerin sayısı ilk aydan sonra azalmıştır.",
    "Puan sistemi sayesinde bardak tüketimi yüzde 12'den fazla azalmıştır.",
    "Kasadaki kuyruğun uzamaması, puan sisteminin hızlı işlediğini gösterir.",
    "Yönetim, indirimin tek başına yeterli olmadığını düşünmektedir."
  ],
  dogru: 3,
  hatalar: [
    "Ters yön: Metin, kendi bardağıyla gelenlerin sayısının arttığını söylüyor; ilk aydan sonra düşüş yalnızca bardak tüketiminde durmuştur.",
    "Metinde olmayan bilgi: Puan sisteminin sonuçları henüz değerlendirilmedi; yüzde 12 yalnızca ilk ayın indirim sonucudur.",
    "Metinde var ama ilgisiz: Kuyruğun değişmemesi metinde geçer, ama bu bilgi puan sisteminin hızıyla ilgili bir sonuç vermez.",
    null
  ],
  aciklama: `Adım 1: Metindeki kanıtları sırala: (1) 5 TL indirim ilk ay işe yaradı, sonra düşüş durdu; (2) yönetim indirimi artırmadı, puan sistemini seçti.
Adım 2: Yönetim aynı yolu güçlendirmek yerine yöntem değiştirdi. Bu, indirimin tek başına yetmediğini düşündüğünü gösterir. D şıkkı bu çıkarımdır.
Adım 3: A şıkkı metindeki bir bilginin tersini söyler. B şıkkı yüzde 12'yi puan sistemine bağlar, oysa o oran indirimin ilk ayındaki sonuçtur. C şıkkı kuyruğu puan sisteminin hızıyla ilişkilendirir; metin böyle bir bağ kurmaz.
Sık yapılan hata: "Şık metindeki bir sözcüğü içeriyor" diye C'yi seçmek. Çıkarımın kanıtı metinde olmalı.
Cevap D.`
},
{
  id: "tur-pa-7471",
  kazanim: "T.8.3.21",
  kademe: 0,
  zorluk: 3,
  soru: `Okul kitap fuarında iki sınıf, okudukları kitapları tanıtan birer stant kurdu. 8-A sınıfı, her kitabın özetini ve yazarını uzun uzun anlatan bir broşür hazırlayıp masaya yığdı. 8-B sınıfı ise kitap kapaklarından bir geçit yaptı, duvara da her kitabı tek cümleyle anlatan renkli kartlar astı. Fuarın ilk saatinde 8-A'nın masasındaki broşürlerin çoğu, alanların elinde birkaç adım sonra katlanıp cebe kondu. 8-B'nin standında ise ziyaretçiler geçidin altından geçti, kartları okudu; ardından öğrencilere hangi kitabın neyi anlattığını sormaya başladı. Fuar bittiğinde ziyaretçi defterinde 8-B'nin sayfasında, 8-A'nın sayfasından üç kat fazla imza vardı. 8-B'nin öğrencileri, kartların yalnızca bir başlangıç olduğunu, asıl tanıtımı sohbetle yaptıklarını söyledi.

**Bu parçadaki durumla ilgili aşağıdakilerden hangisi yorumlanabilir?**`,
  gorsel: null,
  secenekler: [
    "Ayrıntılı broşür hazırlamak, bir stant için hiçbir zaman gerekli değildir.",
    "Kitap kapaklarından yapılan geçit, kartlardan daha çok ilgi görmüştür.",
    "Ziyaretçiler, dikkatlerini çeken sunum sayesinde kitaplara ilgi duymuştur.",
    "8-A sınıfı, hazırladığı broşürle kitapları tanıtmayı amaçlamamıştır."
  ],
  dogru: 2,
  hatalar: [
    "Aşırı genelleme: Broşürlerin bu fuarda az ilgi görmesi, broşürün hiçbir standda gerekli olmadığı anlamına gelmez; tek bir olay herkes için kural yapılamaz.",
    "Metinde var ama ilgisiz: Geçit ve kartlar metinde geçer, ama metin ikisini birbiriyle karşılaştırmaz; hangisinin daha çok ilgi gördüğü bilinmez.",
    null,
    "Ters yön: 8-A sınıfı kitapları tanıtmak için broşür hazırladı; amacı vardı, yalnızca yöntemi ilgi çekmedi."
  ],
  aciklama: `Adım 1: Yorum, metindeki bilgilerden hareketle ulaşılan ve metnin desteklediği değerlendirmedir. Önce olayın akışını çıkar: 8-A uzun broşür dağıttı, broşürlerin çoğu cebe kondu; 8-B geçit ve kısa kartlar hazırladı, ziyaretçiler durup okudu ve kitapları sormaya başladı; imza sayısı üç kat fazla oldu.
Adım 2: Bu akış, dikkat çeken sunumun ziyaretçiyi kitaba yönelttiğini gösterir. C şıkkı bunu söyler.
Adım 3: Diğer şıkları "Bu yorumu destekleyen bir cümle var mı?" diye sına. A şıkkı tek bir fuarın sonucunu "hiçbir zaman" ile kurala çevirir. B şıkkında geçit ve kartlar metinde geçer, ama metin ikisini karşılaştırmaz. D şıkkı ters yöndedir: 8-A'nın amacı kitapları tanıtmaktı.
Sık yapılan hata: "Şık metinde geçiyor mu?" diye bakıp B'yi seçmek. Yetmez; "Bu yorumu hangi cümle destekliyor?" diye sor. C şıkkını "kartları okudu; ardından ... sormaya başladı" cümlesi destekler.
Cevap C.`
},
{
  id: "tur-pa-7472",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 3,
  soru: `Bir ilçede hafta sonu destek dersleri açıldı. Derslere yalnızca kayıtlı öğrenciler alınıyor ve her ders gününde yoklama yapılıyor. İlçe millî eğitim müdürlüğü, bir dersteki katılım oranı yüzde 70'in altına düşerse o dersin kapatılacağını, oranı yüzde 70 ve üzeri olan derslerin ise sürdürüleceğini duyurdu. Katılım oranı, dönem boyunca derse gelen öğrenci sayısının ortalamasının, derse kayıtlı öğrenci sayısına bölünmesiyle bulunuyor. Kayıtlar dönem başında yapılıyor ve dönem içinde yeni kayıt alınmıyor; bu yüzden kayıtlı öğrenci sayısı dönem boyunca değişmiyor. Dersin kapatılıp kapatılmayacağına dönem sonundaki bu orana bakılarak karar verilecek. Dönem sonundaki katılım durumu tabloda verilmiştir; tablodaki “derse gelen öğrenci sayısı” sütunu, her dersin dönem boyunca ortalama kaç öğrenciyle yapıldığını göstermektedir.

**Metin ve tablo birlikte düşünüldüğünde aşağıdakilerden hangisine ulaşılabilir?**`,
  gorsel: "<table class='tablo'><tr><th>Ders</th><th>Kayıtlı öğrenci sayısı</th><th>Derse gelen öğrenci sayısı (ortalama)</th></tr><tr><td>Matematik</td><td>40</td><td>32</td></tr><tr><td>Fen Bilimleri</td><td>30</td><td>24</td></tr><tr><td>Türkçe</td><td>25</td><td>15</td></tr><tr><td>İngilizce</td><td>20</td><td>14</td></tr></table>",
  secenekler: [
    "Yalnızca Türkçe dersi kapatılacak, diğer dersler sürecektir.",
    "Matematik dersi, katılım oranı bakımından en düşük olan derstir.",
    "İngilizce dersi de kapatılacak dersler arasında yer almaktadır.",
    "Fen Bilimleri dersine kayıtlı olup gelmeyen öğrenci sayısı 4’tür."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Sayı ile oranı karıştırma: Matematikte en çok öğrenci gelmiştir (32), ama oran 32 ÷ 40 = %80'dir; en düşük oran Türkçededir (%60).",
    "Sınır durumu hatası: İngilizcede oran 14 ÷ 20 = %70'tir; kural \"yüzde 70'in altına düşerse\" dediği için %70 kapatılmaz.",
    "Çıkarma hatası: 30 − 24 = 6; gelmeyen öğrenci sayısı 4 değil, 6'dır."
  ],
  aciklama: `Adım 1: Katılım oranı = gelen ÷ kayıtlı. Matematik 32 ÷ 40 = %80, Fen 24 ÷ 30 = %80, Türkçe 15 ÷ 25 = %60, İngilizce 14 ÷ 20 = %70.
Adım 2: Kural, oran "yüzde 70'in altına düşerse" ders kapanır. Yalnızca Türkçe (%60) 70'in altındadır. İngilizce tam %70'tir, yani altına düşmemiştir; sınır durumu kapanmaz. A şıkkı doğrudur.
Adım 3: B şıkkında en düşük oran Türkçededir. C şıkkı sınırı yanlış yorumlar. D şıkkında 30 − 24 = 6'dır.
Sık yapılan hata: Kişi sayısına bakıp oranı hesaplamamak ya da "altında" ile "altında ya da eşit" sözlerini karıştırmak.
Cevap A.`
},
{
  id: "tur-pa-7473",
  kazanim: "T.8.3.32",
  kademe: 0,
  zorluk: 4,
  soru: `Bir belediyenin kapalı yüzme havuzunda Pazartesi'den Perşembe'ye her gün bir seans yapılır. Her seansın kontenjanı 20 kişidir ve kayıtlar internetten alınır. Her öğrenci yalnızca bir seansa yazılabilir. Belediye, havuz görevlilerinin çalışma çizelgesini yapabilmek için kuralları kayıt başlamadan önce internet sitesinde yayımladı. Buna göre kayıt sayısı kontenjanın yarısının altında kalan seans iptal edilecek. Kayıt sayısı kontenjana ulaşan ya da kontenjanı aşan seansta ise ikinci bir şerit açılacak ve bu seansın kontenjanı 10 kişi artırılacak. Kontenjan artırımı için ayrıca bir başvuru ya da onay gerekmeyecek; artırım, kayıt sayısına göre kendiliğinden uygulanacak. Kayıt sayısı kontenjanın yarısına eşit ya da yarısından fazla olup kontenjana ulaşmayan seanslar, olduğu gibi yapılacak. Artırılmış kontenjanı da aşan kayıtlar olursa fazla kayıtlar kura ile belirlenecek ve kura dışında kalanlar başka seanslara yönlendirilmeyecek. Bir seansın iptal edilmesi diğer seansların kontenjanını ya da kayıt sayısını etkilemeyecek. Kayıt dönemi sona erdi; aşağıdaki sayılar, kayıt süresi bittiği andaki sayılardır. Dört seansın kayıt sayıları tabloda gösterilmiştir.

**Metin ve tablo birlikte düşünüldüğünde aşağıdakilerden hangisine ulaşılabilir?**`,
  gorsel: "<table class='tablo'><tr><th>Seans</th><th>Kayıt sayısı</th></tr><tr><td>Pazartesi</td><td>9</td></tr><tr><td>Salı</td><td>20</td></tr><tr><td>Çarşamba</td><td>10</td></tr><tr><td>Perşembe</td><td>27</td></tr></table>",
  secenekler: [
    "Çarşamba seansı, kayıt sayısı yarıya eşit olduğu için iptal edilecektir.",
    "Salı seansının kontenjanı, kayıt sayısı kontenjanı aşmadığı için artmayacaktır.",
    "Pazartesi seansı, kayıt sayısı yarıya yakın olduğu için yapılacaktır.",
    "Perşembe seansına yazılan bütün öğrenciler kura yapılmadan seansa alınacaktır."
  ],
  dogru: 3,
  hatalar: [
    "Sınır durumu hatası: Çarşamba'da kayıt sayısı 10'dur ve kontenjanın (20) yarısına eşittir; iptal yalnızca yarısının altında kalan seanslar için geçerlidir.",
    "Sınır durumu hatası: Salı'da kayıt sayısı 20'dir ve kontenjana ulaşmıştır; kural \"ulaşan ya da aşan\" seanslarda kontenjanı artırır.",
    "Yaklaşık değerlendirme hatası: Pazartesi'de 9 kayıt vardır; yarısı 10 olduğu için 9, yarısının altındadır ve seans iptal edilir.",
    null
  ],
  aciklama: `Adım 1: Kuralları ayır. İptal: kayıt < 10 (20'nin yarısı). Olduğu gibi yapılır: 10 ≤ kayıt < 20. Ek şerit: kayıt ≥ 20; kontenjan 20 + 10 = 30.
Adım 2: Seansları kurala uydur. Pazartesi 9 < 10: iptal. Salı 20: kontenjana ulaştı, kontenjan 30 olur. Çarşamba 10: yarıya eşit, iptal değil, olduğu gibi yapılır. Perşembe 27 ≥ 20: kontenjan 30 olur; 27 < 30 olduğu için kura gerekmez ve hepsi alınır. D şıkkı doğrudur.
Adım 3: A, B ve C şıkları sınır değerlerini yanlış yorumlar: 10 (yarıya eşit), 20 (kontenjana ulaşmış) ve 9 (yarının altında).
Sık yapılan hata: "Eşit", "altında", "ulaşan" sözlerini aynı sanmak.
Cevap D.`
},
{
  id: "tur-pa-7474",
  kazanim: "T.8.3.25",
  kademe: 0,
  zorluk: 4,
  soru: `Bir ilçedeki ortaokul, çatısına güneş enerjisi paneli yerleştirdi. Kurulumdan önce okulun yıllık elektrik gideri 60 bin liraydı. Panel sisteminin kurulumu ise işçilik dâhil 240 bin liraya mal oldu. Panel kurulduktan sonra okul, elektrik giderini yarıya indirdi. Okul yönetimi, hesaplarını yaparken elektrik birim fiyatının ve okulun elektrik tüketiminin yıldan yıla değişmeyeceğini varsaydı. Bu varsayıma göre yıllık tasarruf, panelin çalıştığı bütün yıllarda aynı tutarda kalıyor. Yatırımın geri kazanıldığı yıl, kurulum bedelinin toplam tasarrufa eşitlendiği yıl sayılıyor. Panelin bakımı için yıllık ek bir gider çıkmıyor; çünkü bakımı okulun teknik görevlisi ücretsiz yapıyor. Panelin üreticisi, ürünün 25 yıl boyunca aynı verimle çalışacağını belirtiyor. Okul müdürü, “Bu parayı geri kazanacağız, ama biraz zaman alacak.” dedi. Panelin fazladan ürettiği elektrik şebekeye satılamıyor; çünkü okul, bunun için gereken izni henüz almadı. Yetkililer, izin çıkarsa okulun elektrik satarak da gelir elde edebileceğini söylüyor. Ancak yönetim, yatırımın karşılığını yalnızca elektrik giderindeki azalmadan hesaplıyor; iznin çıkıp çıkmayacağı belli olmadığı için olası satış gelirini hesaba katmıyor.

**Bu parçadan aşağıdakilerden hangisi çıkarılabilir?**`,
  gorsel: null,
  secenekler: [
    "Okul, panel yatırımının maliyetini ilk yıl içinde çıkarmıştır.",
    "Okul, panelin ömrü dolmadan yatırım maliyetini karşılayacaktır.",
    "Okul, fazla elektriği satarak şimdiden gelir elde etmektedir.",
    "Giderdeki düşüşün nedeni, okuldaki öğrenci sayısının azalmasıdır."
  ],
  dogru: 1,
  hatalar: [
    "Hesap hatası: Yıllık tasarruf 60 − 30 = 30 bin liradır; 240 bin liralık yatırım ilk yılda değil, 240 ÷ 30 = 8 yılda çıkar.",
    null,
    "Ters yön: Metne göre fazla elektrik şebekeye satılamıyor, çünkü izin henüz alınmadı; satıştan gelir yok.",
    "Metinde var ama ilgisiz: Giderin yarıya inmesi metinde geçer, ama nedeni panel olarak verilir; öğrenci sayısı hakkında hiçbir bilgi yoktur."
  ],
  aciklama: `Adım 1: Sayıları sırala. Eski gider 60 bin lira; panelden sonra yarıya indi, yani 30 bin lira. Yıllık tasarruf 30 bin lira. Yatırım 240 bin lira, panelin ömrü 25 yıl.
Adım 2: Maliyet geri dönüş süresi 240 ÷ 30 = 8 yıldır. 8 yıl, 25 yıldan kısa olduğu için okul maliyeti panelin ömrü dolmadan çıkarır. B şıkkı bu çıkarımdır.
Adım 3: A şıkkı süreyi 1 yıl sanar. C şıkkı izin henüz alınmadığı için yanlıştır. D şıkkı giderin düşme nedenini metinde olmayan bir olguya bağlar.
Sık yapılan hata: Müdürün "biraz zaman alacak" sözünü, maliyetin hiç çıkmayacağı sanmak.
Cevap B.`
},
{
  id: "tur-pa-7475",
  kazanim: "T.8.3.17",
  kademe: 0,
  zorluk: 4,
  soru: `Okulun resim atölyesinde görevli öğretmen, iki gruba aynı hafta içinde “deniz” konulu birer resim yaptırdı. Birinci gruba kâğıt boyutu, kullanılacak renkler, ufuk çizgisinin yeri ve teknenin nereye çizileceği tek tek bildirildi. İkinci gruba ise yalnızca konu ve malzeme verildi; gerisini öğrenciler kendileri belirledi. Resimler duvara asıldığında birinci grubun çalışmaları düzgündü, ama birbirine çok benziyordu; hangi resmin kime ait olduğunu ayırt etmek bile zordu. İkinci gruptaki resimlerin kimi çok etkileyiciydi, kimi yarım kalmıştı; bazı öğrenciler kâğıdın neresinden başlayacaklarını bilemediklerini söyledi. Yine de hiçbir resim bir başkasının kopyası gibi durmuyordu. İkinci gruptan bir öğrenci denizi hiç mavi boyamamış, yalnızca gri ve turuncu kullanmıştı; öğretmen bu çalışmayı panonun en önüne astı. Öğretmen, iki gruptaki öğrencilere de çalışırken en çok neye zorlandıklarını sordu. Birinci gruptan öğrenciler, neyi nasıl çizeceklerini düşünmek zorunda kalmadıkları için işi çabuk bitirdiklerini söyledi. İkinci gruptan öğrenciler ise başlamakta zorlansalar da bitirdikleri resimle gurur duyduklarını belirtti. Öğretmen sonraki dönem için yönergeleri kısaltmaya, her çalışmada yalnızca konuyu ve malzemeyi belirleyip kalan kararları öğrencilere bırakmaya karar verdi.

**Bu parçanın ana fikri aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Resimlerin düzgün görünmesi, ayrıntılı yönergeler verilerek sağlanabilir.",
    "Serbest bırakılan öğrencilerin tamamı daha başarılı resimler ortaya koyar.",
    "Her ayrıntısı önceden belirlenen görevler, özgün çözüm üretmeyi zorlaştırır.",
    "Resim çalışmalarının sonuçları sınıfın duvarında sergilenerek değerlendirilmelidir."
  ],
  dogru: 2,
  hatalar: [
    "Kısmen doğru: Birinci grubun resimleri düzgündü, ama parça düzgünlüğü değil, resimlerin birbirine benzemesini sorun olarak öne çıkarır.",
    "Aşırı genelleme: İkinci gruptaki resimlerin bir kısmı yarım kalmıştı; \"tamamı daha başarılı\" demek metne aykırıdır.",
    null,
    "Metinde var ama ilgisiz: Resimlerin duvara asılması metinde geçer, ama parçanın verdiği düşünce bu değildir; duvar yalnızca olayın geçtiği yerdir."
  ],
  aciklama: `Adım 1: Ana fikir, parçanın olaydan çıkardığı genel düşüncedir. Olayın akışına bak: birinci gruba her şey söylendi, resimler düzgün ama birbirine benzer çıktı; ikinci gruba yalnızca konu ve malzeme verildi, resimler birbirinden farklı ve özgün oldu. Öğretmenin sonunda yönergeleri kısaltması da bu sonucu doğrular.
Adım 2: Soru köküne dön: "Parça genel olarak hangi düşünceyi veriyor?" A şıkkı doğru bir ayrıntıya (düzgünlüğe) dayanır, ama parça bunu bir üstünlük olarak değil, benzerliğin yanında bir sınırlılık olarak anlatır (kısmen doğru). B şıkkı "tamamı" diyerek genelleme yapar; yarım kalan resimler de var. D şıkkı metinde geçen duvara asma ayrıntısını alır, ama parçanın verdiği düşünce değildir (metinde var ama ilgisiz).
Adım 3: C şıkkı, birinci grubun benzer resimlerini ve ikinci grubun özgün resimlerini tek cümlede toplar.
Sık yapılan hata: "Şık metinde geçiyor mu?" diye bakıp D'yi seçmek. Doğru kontrol: "Bu şık parçanın tamamından çıkan düşünce mi?"
Cevap C.`
}
);
})();
