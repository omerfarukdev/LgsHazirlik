// Fen Bilimleri — İklim ve Hava Hareketleri: Havuz eki (kademe 0, 016-075)
// Kazanımlar: F.8.1.2.1 (iklim ile hava olayları arasındaki fark), F.8.1.2.2 (iklim bilimi ve iklim bilimci)
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["iklim-hava-hareketleri"] = window.LGS_BANK["iklim-hava-hareketleri"] || []).push(
{
  id: "fen-ik-016",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 1,
  soru: `Tabloda bir ilin 1991-2020 yıllarındaki aylık ortalama yağış miktarlarından dördü verilmiştir.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Ay</th><th>Ortalama yağış (mm)</th></tr><tr><td>Ocak</td><td>120</td></tr><tr><td>Nisan</td><td>70</td></tr><tr><td>Temmuz</td><td>5</td></tr><tr><td>Ekim</td><td>80</td></tr></table>",
  secenekler: [
    "Tabloda verilen dört ayda da düşen yağış miktarı birbirine eşittir.",
    "En az yağış, tabloda verilen aylar içinde yalnızca temmuzda düşer.",
    "Temmuz ayında yağış düşmediği tablodan anlaşılmaktadır.",
    "Ocak ayının her yılında tam olarak 120 mm yağış düşmüş olmaktadır."
  ],
  dogru: 1,
  hatalar: [
    "Sütunları karıştırma: tabloda aylar farklı değerler taşır; 120, 70, 5 ve 80 mm birbirine eşit değildir.",
    null,
    "Ortalamayı hiç yağış yok sanma: 5 mm ortalama, temmuzda yağış düştüğünü gösterir; ortalamadan her yılın değeri çıkarılamaz.",
    "Ortalamayı her yılın değeri sanma: ocak ayı için 120 mm uzun yıllık ortalamadır; bazı yıllar bundan fazla, bazıları az olabilir."
  ],
  aciklama: `Adım 1: Tablonun başlığını oku. Değerler 1991-2020 dönemine ait aylık ortalamalardır; yani tablo iklim bilgisi verir.
Adım 2: Dört değeri karşılaştır: 120, 70, 5 ve 80 mm. En küçük değer 5 mm ile temmuzdadır.
Adım 3: Diğer şıkları ele. Değerler birbirine eşit değildir. Ayrıca ortalama, her yılın değeri demek değildir; bu yüzden "yağış düşmez" ve "her yıl" diyen yargılar tablodan çıkarılamaz.
Sağlama: Tablo yalnızca dört ayı gösterir; bu nedenle doğru yargı "tabloda verilen aylar içinde" diye sınırlanmıştır.
Cevap B.`
},
{
  id: "fen-ik-017",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 1,
  soru: `Bir okulun bahçesindeki meteoroloji istasyonu beş yıldır her gün sıcaklık ve yağış ölçümü yapmaktadır. Fen kulübü öğrencileri bu verilerle okulun bulunduğu bölgenin iklimini belirlemek istemektedir.
**Buna göre bu istek için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Ölçümler her gün yapıldığı için beş yıl iklimi belirlemeye yeter.",
    "Ölçümler günlük olduğundan yalnızca hava olaylarını gösterir.",
    "Okul bahçesindeki ölçümler iklim verisi olarak kullanılamaz.",
    "İklimi belirlemek için ölçüm süresi daha uzun olmalıdır."
  ],
  dogru: 3,
  hatalar: [
    "Ölçüm sıklığını ölçüm süresi sanma: her gün ölçüm yapmak veri sayısını artırır ama kaydın süresini uzatmaz; iklim için en az otuz yıl gerekir.",
    "Ölçüm aralığını verinin türü sanma: veriler günlük alınsa da yıllarca düzenli biriktiğinde iklim verisine dönüşür.",
    "Ölçüm yerini engel sanma: yeterince uzun süre düzenli tutulan kayıt okul bahçesinde de olsa iklim verisi olabilir.",
    null
  ],
  aciklama: `Adım 1: İklim verisinin ölçütünü hatırla: ölçüm uzun yıllar boyunca düzenli ve kesintisiz olmalıdır; ortalamanın iklim değeri sayılabilmesi için en az 30 yıllık kayıt aranır.
Adım 2: İstasyonun kaydı 5 yıllıktır; bu süre 30 yıldan çok kısadır.
Adım 3: Ölçümün her gün yapılması kaydın süresini uzatmaz; yalnızca aynı süre içindeki ölçüm sayısını artırır.
Adım 4: Öyleyse bölgenin iklimini belirlemek için ölçüm süresinin daha uzun olması gerekir.
Sık yapılan hata: "Çok ölçüm = iklim verisi" demek. Gereken ölçüm sayısı değil, kaydın süresidir.
Cevap D.`
},
{
  id: "fen-ik-018",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 1,
  soru: `Bir meteoroloji bülteninde "Hafta boyunca sıcaklıklar mevsim normallerinin 4 °C üzerinde seyredecek." denmiştir.
**Buna göre bu ifade aşağıdakilerden hangisini anlatır?**`,
  gorsel: null,
  secenekler: [
    "Bölgenin iklim tipinin kalıcı olarak değiştiğini",
    "Dünya genelinde ortalama sıcaklığın arttığını",
    "Haftanın uzun yıllar ortalamasından sıcak geçeceğini",
    "Bölgede bütün yıl boyunca sıcak hava görüleceğini"
  ],
  dogru: 2,
  hatalar: [
    "Bir haftalık sapmayı iklim değişimi sanma: haftanın ortalamadan sıcak geçmesi iklim tipinin değiştiğini göstermez.",
    "Yerel tahmini küresel sonuç sanma: bir bölgenin bir haftalık sıcaklığı Dünya ortalaması hakkında bilgi vermez.",
    null,
    "Bir haftayı bütün yıla yayma: bülten yalnızca bu haftayı kapsar."
  ],
  aciklama: `Mevsim normali, bir yerin o mevsim için uzun yıllar ortalamasından hesaplanan sıcaklık değeridir.
Adım 1: "Normallerin 4 °C üzerinde" ifadesi, haftanın sıcaklığının uzun yıllık ortalamadan 4 °C yüksek olacağını söyler.
Adım 2: Bu bir haftalık, yani kısa süreli bir durumdur; hava tahminine aittir.
Adım 3: Bir haftanın ortalamadan sıcak geçmesi iklimin kalıcı olarak değiştiği anlamına gelmez; iklim yargısı için dönem ortalamaları karşılaştırılır.
Sık yapılan hata: Tek bir sıcak haftayı iklim değişikliği sanmak.
Cevap C.`
},
{
  id: "fen-ik-019",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 1,
  soru: `Mert, iklim ile hava olaylarını karşılaştıran bir not hazırlamaktadır.
**Buna göre Mert'in notuna "ortak özellik" olarak yazabileceği ifade aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "İkisi de birkaç gün içinde belirgin biçimde değişir.",
    "İkisi de en az otuz yıllık kayıtla belirlenir.",
    "İkisini de yalnızca iklim bilimci inceleyebilir.",
    "İkisi de sıcaklık ve yağış gibi ölçümlerle anlatılır."
  ],
  dogru: 3,
  hatalar: [
    "Hava olayının özelliğini iklime yükleme: birkaç gün içinde değişen yalnızca hava olaylarıdır; iklim yıllar içinde çok yavaş değişir.",
    "İklimin özelliğini hava olayına yükleme: en az otuz yıllık kayıt iklim için aranır; bir hava olayı için gerekmez.",
    "Uzmanları karıştırma: hava olaylarını meteorolog, iklimi iklim bilimci inceler.",
    null
  ],
  aciklama: `Adım 1: İki kavramı yan yana koy. Hava olayı kısa sürede, iklim ise uzun yıllar boyunca ortalama olarak anlatılır.
Adım 2: Farklı olan özellikleri ele: değişim hızı, kapsadığı süre ve kayıt süresi birbirinden farklıdır. İncelendikleri bilim dalı da farklıdır.
Adım 3: Ortak olan, ikisinin de sıcaklık, yağış, rüzgâr ve nem gibi aynı büyüklüklerle anlatılmasıdır.
Sağlama: İki kavramı ayıran şey ölçülen büyüklük değil, verinin kapsadığı süredir.
Cevap D.`
},
{
  id: "fen-ik-020",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 1,
  soru: `Bir kentin temmuz ayı sıcaklığı için 1991-2020 yılları ortalaması 27 °C olarak hesaplanmıştır.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Kentte temmuzun her günü sıcaklık 27 °C ölçülür.",
    "Gelecek yıl temmuz ayında da ortalama sıcaklık 27 °C olacaktır.",
    "Kentte temmuz ayında sıcaklığın 27 °C'nin altına indiği gün sayısı sıfırdır.",
    "Kentte temmuz ayında genellikle sıcak hava görülür."
  ],
  dogru: 3,
  hatalar: [
    "Ortalamayı her günün değeri sanma: 27 °C bir ortalamadır; kimi gün daha az, kimi gün daha çok olabilir.",
    "İklim ortalamasını tahmin sanma: uzun yıllık ortalama gelecek yılın temmuzunu tam olarak vermez.",
    "Ortalamayı alt sınır sanma: ortalama, değerlerin bir kısmının ondan düşük olabileceği anlamına gelir.",
    null
  ],
  aciklama: `Adım 1: Verinin kapsadığı süreye bak: 1991-2020, yani otuz yıl. Bu bir iklim ortalamasıdır.
Adım 2: Ortalama, kentin temmuz ayındaki genel durumunu özetler. 27 °C yüksek bir değerdir; yani temmuzda genellikle sıcak hava görülür.
Adım 3: Ortalama "her gün bu değer ölçülür", "gelecek yıl da aynı ortalama çıkacak" ya da "sıcaklık bunun altına inmez" anlamına gelmez.
Sık yapılan hata: Ortalamayı kesin kural sanmak. Ortalama bir eğilimi gösterir, tek tek günlerin değerini değil.
Cevap D.`
},
{
  id: "fen-ik-021",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 1,
  soru: `Bir hava durumu uygulamasının ekranında şu bilgi görünmektedir:
Şu an: 17 °C · Nem: %62 · Rüzgâr: 12 km/sa
**Buna göre bu ekran aşağıdakilerden hangisini anlatır?**`,
  gorsel: null,
  secenekler: [
    "Kentin iklim tipini",
    "Kentin o andaki hava koşullarını",
    "Kentin uzun yıllık sıcaklık ortalamasını",
    "Kentin yağış düzeninin değişimini"
  ],
  dogru: 1,
  hatalar: [
    "Anlık ölçümü iklim sanma: \"şu an\" ifadesi birkaç dakikalık bir durumu gösterir; iklim tipi yılların kaydıyla belirlenir.",
    null,
    "Tek ölçümü uzun yıllık ortalama sanma: ekrandaki değer yalnızca şu anın sıcaklığıdır, otuz yılın ortalaması değildir.",
    "Anlık ölçümden değişim çıkarma: yağış düzeninin değişip değişmediği ancak farklı dönemlerin yağış ortalamaları karşılaştırılarak anlaşılır."
  ],
  aciklama: `Adım 1: Ekrandaki ilk ifadeye bak: "Şu an". Sıcaklık, nem ve rüzgâr değerleri bu anda ölçülmüştür.
Adım 2: Bir anlık ölçüm saatler içinde değişebilir. Böyle bilgiler hava olaylarını, yani o andaki hava koşullarını anlatır.
Adım 3: İklim tipi, uzun yıllık ortalama ve yağış düzeninin değişimi ise yılların kaydını gerektirir; tek bir ekran bunları vermez.
Sağlama: Aynı uygulama bir saat sonra farklı değerler gösterebilir. Değişen bilgi iklimi değil, havayı anlatır.
Cevap B.`
},
{
  id: "fen-ik-022",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 1,
  soru: `Ayşe'nin ailesi hafta sonu Antalya'ya gidecektir. Aile, gidecekleri cumartesi günü için hazırlanmış beş günlük hava tahmin tablosuna bakacaktır.
**Buna göre aile bu tablodan aşağıdakilerden hangisini öğrenebilir?**`,
  gorsel: null,
  secenekler: [
    "Cumartesi günü yağmurluk almalarının gerekip gerekmediğini",
    "Antalya'da temmuz ayının genelde ne kadar sıcak geçtiğini",
    "Antalya'nın yıllık ortalama yağışının kaç mm olduğunu",
    "Antalya'da kışların genelde ılık geçip geçmediğini"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Genel durumu günlük tahminden okumaya çalışma: temmuzun genelde ne kadar sıcak geçtiği, uzun yıllık ortalamalarla yani iklim verisiyle öğrenilir.",
    "Yıllık ortalamayı beş günlük tahminden çıkarmaya çalışma: yıllık ortalama yağış, yılların kayıtlarından hesaplanan bir iklim değeridir.",
    "Kışların genel durumunu kısa bir tahminle öğrenmeye çalışma: kışın genelde nasıl geçtiği uzun yıllık kayıtlarla belirlenir."
  ],
  aciklama: `Beş günlük tahmin tablosu, önümüzdeki birkaç günün hava olaylarını gösterir.
Adım 1: Şıklardaki zaman ifadelerine bak. "Temmuz ayının genelde", "yıllık ortalama" ve "kışların genelde" ifadeleri yılların ortalamasını anlatır; bunlar iklim bilgisidir.
Adım 2: "Cumartesi günü" ise tek bir güne aittir. Yağmurluk gerekip gerekmediği, o günün beklenen hava olayına bağlıdır.
Adım 3: Öyleyse beş günlük tahmin tablosundan öğrenilebilecek bilgi, cumartesi gününe ilişkin olandır.
Sağlama: Aynı aile "Antalya'da temmuz genelde nasıl geçer?" sorusunun cevabını ancak uzun yıllık ortalama tablolarından bulabilir.
Cevap A.`
},
{
  id: "fen-ik-023",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 1,
  soru: `Bir haber sitesinde dört başlık yayımlanmıştır.
**Buna göre bu başlıklardan hangisi bir bölgenin iklim özelliğini bildirmektedir?**`,
  gorsel: null,
  secenekler: [
    "Vadide sabaha karşı görülen yoğun sis uçuşları aksattı",
    "Cumartesi günü için kuvvetli rüzgâr uyarısı yapıldı",
    "Dün akşam düşen dolu çay bahçelerine büyük zarar verdi",
    "Bölgenin kış ortalaması 1991-2020 döneminde 2 °C oldu"
  ],
  dogru: 3,
  hatalar: [
    "Kısa süreli bir olayı iklim sanma: sabaha karşı görülen sis, birkaç saat süren bir hava olayıdır.",
    "Tahmini iklim bilgisi sanma: cumartesi için yapılan uyarı tek bir günü kapsar; uzun yıllık bir ortalama değildir.",
    "Zarar veren olayı kalıcı sanma: dün akşam düşen dolu, tek seferlik bir hava olayıdır.",
    null
  ],
  aciklama: `Adım 1: Her başlıktaki zaman ifadesini bul. "Sabaha karşı", "cumartesi günü için" ve "dün akşam" ifadeleri saatler ya da bir iki günlük süreyi anlatır; bunların hepsi hava olayıdır.
Adım 2: "1991-2020 döneminde" ifadesi ise otuz yıllık bir dönemin ortalamasını verir. Uzun yıllara dayanan ortalama iklim bilgisidir.
Adım 3: Öyleyse iklim özelliğini bildiren başlık, kış ortalamasını 1991-2020 dönemine göre veren başlıktır.
Sağlama: Sis, rüzgâr ve dolu her bölgede görülebilir; bunları iklimden ayıran şey olayın tek bir kez ya da kısa sürede yaşanmış olmasıdır.
Cevap D.`
},
{
  id: "fen-ik-024",
  kazanim: "F.8.1.2.2",
  kademe: 0,
  zorluk: 1,
  soru: `Bir meteoroloji kurumunda çalışan uzmanın tanıtım kartında şu cümle yer almaktadır:
"Her sabah rüzgâr, yağış ve sıcaklık ölçümlerini inceler, yarının hava raporunu hazırlarım. Mesleğimin adı - - - -."
**Buna göre boş bırakılan yere aşağıdakilerden hangisi getirilmelidir?**`,
  gorsel: null,
  secenekler: [
    "klimatolog",
    "klimatoloji",
    "meteoroloji",
    "meteorolog"
  ],
  dogru: 3,
  hatalar: [
    "İki uzmanı karıştırma: klimatolog (iklim bilimci) uzun yıllık kayıtları inceler, günlük hava raporu hazırlamaz.",
    "Bilim dalı ile uzmanın adını karıştırma: klimatoloji iklim biliminin adıdır, kişinin mesleği değildir.",
    "Bilim dalı ile uzmanın adını karıştırma: meteoroloji bir bilim dalıdır; \"mesleğimin adı\" diyen cümleye uzmanın adı gelir.",
    null
  ],
  aciklama: `Adım 1: Cümledeki işe bak: yarının hava raporunu hazırlamak. Bu, kısa süreli hava olaylarıyla ilgilidir.
Adım 2: Hava olaylarını inceleyen bilim dalı meteorolojidir; bu alanda çalışan uzmanın adı ise meteorologdur.
Adım 3: Cümle "mesleğimin adı" diyor. Meslek bir kişiye ait olduğundan boşluğa bilim dalının adı değil, uzmanın adı gelir.
Sağlama: Klimatolog da bir uzmandır; ama uzun yıllık iklim kayıtlarını inceler, günlük rapor hazırlamaz.
Cevap D.`
},
{
  id: "fen-ik-025",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 1,
  soru: `Bir öğretmen tahtaya dört cümle yazmış ve öğrencilerden iklim özelliği anlatan cümleyi bulmalarını istemiştir.
**Buna göre öğrencilerin seçmesi gereken cümle aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Bu bölgede kışlar uzun yıllardır karlı geçer.",
    "Dün gece çıkan fırtına bazı ağaçları devirdi.",
    "Bu sabah çimenlerin üzerinde kırağı vardı.",
    "Öğleden sonra kısa süreli bir dolu yağışı oldu."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Fırtınayı iklim özelliği sanma: \"dün gece\" tek bir geceyi anlatır; fırtına bir hava olayıdır.",
    "Kırağıyı iklim sanma: \"bu sabah\" ifadesi tek bir sabahı anlatır; kırağı kısa sürede görülen bir hava olayıdır.",
    "Doluyu iklim sanma: öğleden sonra yağan kısa süreli dolu bir hava olayıdır."
  ],
  aciklama: `Adım 1: Dört cümlenin zaman ifadelerini karşılaştır: "uzun yıllardır", "dün gece", "bu sabah", "öğleden sonra".
Adım 2: Dün gece, bu sabah ve öğleden sonra kısa süreleri anlatır. Fırtına, kırağı ve dolu bu sürelerde görülen hava olaylarıdır.
Adım 3: "Uzun yıllardır" ise yıllarca tekrarlanan bir durumu anlatır. Böyle bir durum o bölgenin iklim özelliğidir.
Sağlama: "Bu bilgi yarın değişebilir mi?" diye sor. Fırtına, kırağı ve dolu için cevap evet; kışların karlı geçmesi için hayır.
Cevap A.`
},
{
  id: "fen-ik-026",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 1,
  soru: `Okul servisinden inen Ali, yarın okula giderken ne giyeceğine karar vermek istemektedir.
**Buna göre Ali'nin aşağıdaki bilgi kaynaklarından hangisine bakması en uygundur?**`,
  gorsel: null,
  secenekler: [
    "Kentin yıllık ortalama sıcaklığına",
    "Kentin yarına ait hava tahminine",
    "Kentin 1991-2020 mevsim ortalamalarına",
    "Kentin son otuz yıllık yağış kayıtlarına"
  ],
  dogru: 1,
  hatalar: [
    "Genel durumu yarına uygulama: yıllık ortalama sıcaklık, bütün yılın ortalamasıdır; yarının havasını vermez.",
    null,
    "İklim verisini günlük karar için kullanma: mevsim ortalamaları genel bir fikir verir ama yarının sıcaklığını söylemez.",
    "Uzun yıllık kayıtları günlük karar için kullanma: otuz yıllık yağış kaydı kentin yağış düzenini anlatır, yarın yağmur yağıp yağmayacağını değil."
  ],
  aciklama: `Adım 1: Karar hangi zaman için veriliyor? "Yarın" için; yani birkaç saatlik bir süre söz konusu.
Adım 2: Yarına ait bilgi, kısa süreli hava olaylarının tahminidir ve meteorolojinin hazırladığı hava tahmininde bulunur.
Adım 3: Yıllık ortalama, 1991-2020 mevsim ortalamaları ve otuz yıllık yağış kayıtları ise iklim verileridir. Kentin genel düzenini anlatır, yarının havasını söylemez.
Sağlama: Ali bir yıl sonraki bir gezi için "temmuz genelde nasıl geçer?" diye merak etseydi iklim verilerine bakması gerekirdi.
Cevap B.`
},
{
  id: "fen-ik-027",
  kazanim: "F.8.1.2.2",
  kademe: 0,
  zorluk: 1,
  soru: `Bir araştırma enstitüsü, ülkemizin 1961'den bu yana tutulan yağış kayıtlarını karşılaştırarak bölgelerin yağış eğilimlerini raporlayacak bir uzman aramaktadır.
**Buna göre bu ilana başvuracak uzmanın mesleği aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Meteorolog",
    "Ziraat mühendisi",
    "Orman mühendisi",
    "İklim bilimci"
  ],
  dogru: 3,
  hatalar: [
    "Kısa süreli hava olaylarını izleyen uzmanla karıştırma: altmış yıllık kayıtları karşılaştırmak meteorologun değil iklim bilimcinin işidir.",
    "Veriyi kullanan her uzmanı iklim bilimci sanma: ziraat mühendisi bitkisel üretimle ilgilenir, yağış kayıtlarından uzun dönemli eğilim çıkarmak onun asıl işi değildir.",
    "Veriyi kullanan her uzmanı iklim bilimci sanma: orman mühendisi ormanların korunması ve işletilmesiyle ilgilenir, iklim eğilimlerini raporlamak onun asıl işi değildir.",
    null
  ],
  aciklama: `İklim bilimci (klimatolog), uzun yıllara ait ölçüm kayıtlarını inceleyerek bir yerin iklimini ve iklimindeki değişimi araştıran uzmandır.
Adım 1: İlandaki süreye bak: "1961'den bu yana", yani altmış yılı aşkın kayıt.
Adım 2: Bu kadar uzun bir kaydı karşılaştırıp eğilim çıkarmak iklim biliminin çalışma biçimidir. Kısa süreli hava olaylarını izleyen meteorolog bu işi yapmaz.
Adım 3: Ziraat mühendisi bitkisel üretimle, orman mühendisi ormanlarla ilgilenir; ikisi de yağış kayıtlarından eğilim çıkarmayı asıl iş olarak yapmaz.
Sağlama: İlanda "yarınki yağışı bildirecek uzman" yazsaydı doğru cevap meteorolog olurdu.
Cevap D.`
},
{
  id: "fen-ik-028",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bir öğretmen tahtaya beş cümle yazmıştır:
• Bu akşam kentte kuvvetli rüzgâr esecek.
• Bölgenin yıllık ortalama yağışı 1991-2020 döneminde 700 mm'dir.
• Dün gece vadide yoğun sis oluştu.
• Bu bölgede ocak ayı ortalama sıcaklığı 1991-2020 döneminde 5 °C'dir.
• Öğleden sonra kısa süreli dolu yağdı.
**Buna göre bu cümlelerden kaç tanesi bir hava olayını anlatmaktadır?**`,
  gorsel: null,
  secenekler: [
    "1",
    "2",
    "3",
    "4"
  ],
  dogru: 2,
  hatalar: [
    "Cümleleri taramadan sayma: \"bu akşam\", \"dün gece\" ve \"öğleden sonra\" ifadeleri üç ayrı kısa süreli olayı anlatır.",
    "Yarım sayma: rüzgâr, sis ve dolu üç hava olayıdır; ikisini saymak birini gözden kaçırmaktır.",
    null,
    "İklim bilgisini de hava olayı sayma: ocak ayı ortalaması ve yıllık ortalama yağış, 1991-2020 dönemine dayanan iki iklim bilgisidir."
  ],
  aciklama: `Adım 1: Her cümlenin zaman ifadesini işaretle: "bu akşam", "1991-2020 döneminde", "dün gece", "bu sabah", "öğleden sonra".
Adım 2: "Yıllık ortalama yağışı 1991-2020 döneminde" ifadesi otuz yıllık bir ortalamayı anlatır; bu cümle iklim bilgisidir.
Adım 3: "Ocak ayı ortalama sıcaklığı 1991-2020 döneminde" ifadesi de otuz yıllık bir ortalamayı anlatır; bu cümle de iklim bilgisidir.
Adım 4: Geriye saatler ya da bir gün içinde olup biten olaylar kalır: rüzgâr, sis ve dolu. Üçü de hava olayıdır.
Sağlama: İklimi anlatan iki cümle bir yıl sonra da aynı kalır; üç hava olayı ise ertesi gün geçerliliğini yitirir.
Cevap C.`
},
{
  id: "fen-ik-029",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: `Grafikte bir kentin 1991-2020 dönemine ait aylık ortalama yağış ve sıcaklık değerleri birlikte gösterilmiştir.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"Bir kentin aylık ortalama yağış ve sıcaklığını gösteren iklim grafiği\"><text x=\"12\" y=\"20\" fill=\"currentColor\" font-size=\"15\" font-weight=\"bold\">Grafik: Aylık ortalama yağış ve sıcaklık</text><text x=\"12\" y=\"40\" fill=\"currentColor\" font-size=\"14\">Sütun: yağış (sol eksen) · Çizgi: sıcaklık (sağ eksen)</text><g stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"><line x1=\"70\" y1=\"190\" x2=\"530\" y2=\"190\"/><line x1=\"70\" y1=\"130\" x2=\"530\" y2=\"130\"/><line x1=\"70\" y1=\"70\" x2=\"530\" y2=\"70\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"70\" y1=\"62\" x2=\"70\" y2=\"250\"/><line x1=\"530\" y1=\"62\" x2=\"530\" y2=\"250\"/><line x1=\"70\" y1=\"250\" x2=\"530\" y2=\"250\"/></g><g fill=\"currentColor\" font-size=\"14\" text-anchor=\"end\"><text x=\"64\" y=\"255\">0</text><text x=\"64\" y=\"195\">40</text><text x=\"64\" y=\"135\">80</text><text x=\"64\" y=\"75\">120</text><text x=\"64\" y=\"58\">mm</text></g><g fill=\"currentColor\" font-size=\"14\" text-anchor=\"start\"><text x=\"536\" y=\"255\">0</text><text x=\"536\" y=\"195\">10</text><text x=\"536\" y=\"135\">20</text><text x=\"536\" y=\"75\">30</text><text x=\"536\" y=\"58\">°C</text></g><g fill=\"var(--vurgu)\" fill-opacity=\"0.6\"><rect x=\"78.2\" y=\"100\" width=\"22\" height=\"150\"/><rect x=\"116.5\" y=\"115\" width=\"22\" height=\"135\"/><rect x=\"154.8\" y=\"145\" width=\"22\" height=\"105\"/><rect x=\"193.2\" y=\"175\" width=\"22\" height=\"75\"/><rect x=\"231.5\" y=\"205\" width=\"22\" height=\"45\"/><rect x=\"269.8\" y=\"235\" width=\"22\" height=\"15\"/><rect x=\"384.8\" y=\"220\" width=\"22\" height=\"30\"/><rect x=\"423.2\" y=\"175\" width=\"22\" height=\"75\"/><rect x=\"461.5\" y=\"130\" width=\"22\" height=\"120\"/><rect x=\"499.8\" y=\"85\" width=\"22\" height=\"165\"/></g><polyline fill=\"none\" stroke=\"var(--vurgu2)\" stroke-width=\"3\" points=\"89.2,202 127.5,196 165.8,178 204.2,154 242.5,124 280.8,94 319.2,76 357.5,76 395.8,100 434.2,136 472.5,172 510.8,196\"/><g fill=\"var(--vurgu2)\"><circle cx=\"89.2\" cy=\"202\" r=\"4\"/><circle cx=\"127.5\" cy=\"196\" r=\"4\"/><circle cx=\"165.8\" cy=\"178\" r=\"4\"/><circle cx=\"204.2\" cy=\"154\" r=\"4\"/><circle cx=\"242.5\" cy=\"124\" r=\"4\"/><circle cx=\"280.8\" cy=\"94\" r=\"4\"/><circle cx=\"319.2\" cy=\"76\" r=\"4\"/><circle cx=\"357.5\" cy=\"76\" r=\"4\"/><circle cx=\"395.8\" cy=\"100\" r=\"4\"/><circle cx=\"434.2\" cy=\"136\" r=\"4\"/><circle cx=\"472.5\" cy=\"172\" r=\"4\"/><circle cx=\"510.8\" cy=\"196\" r=\"4\"/></g><g fill=\"currentColor\" font-size=\"14\" text-anchor=\"middle\"><text x=\"89.2\" y=\"274\">Oca</text><text x=\"127.5\" y=\"274\">Şub</text><text x=\"165.8\" y=\"274\">Mar</text><text x=\"204.2\" y=\"274\">Nis</text><text x=\"242.5\" y=\"274\">May</text><text x=\"280.8\" y=\"274\">Haz</text><text x=\"319.2\" y=\"274\">Tem</text><text x=\"357.5\" y=\"274\">Ağu</text><text x=\"395.8\" y=\"274\">Eyl</text><text x=\"434.2\" y=\"274\">Eki</text><text x=\"472.5\" y=\"274\">Kas</text><text x=\"510.8\" y=\"274\">Ara</text></g></svg>",
  secenekler: [
    "Yağışın en fazla düştüğü ay, sıcaklığın da en yüksek olduğu aydır.",
    "Sıcaklığın en düşük olduğu ay, yağışın da en az olduğu aydır.",
    "Sıcaklığın 25 °C'nin üzerinde olduğu bütün aylarda yağış 20 mm'yi geçmez.",
    "Yağışın 80 mm'yi aştığı aylarda sıcaklık 5 °C'nin altına iner."
  ],
  dogru: 2,
  hatalar: [
    "Eksenleri karıştırma: yağışın en fazla olduğu ay aralıktır (110 mm) ve sıcaklığı yalnızca 9 °C'dir; en sıcak aylar temmuz ve ağustostur.",
    "İki eğriyi aynı yöne gidiyor sanma: en düşük sıcaklık ocakta (8 °C), en az yağış temmuz ve ağustostadır.",
    null,
    "Sıcaklık çizgisini yanlış okuma: yağışı 80 mm'yi aşan aylarda (ocak, şubat, aralık) sıcaklık 8-9 °C'dir; bu değerler 5 °C'nin altında değildir."
  ],
  aciklama: `Adım 1: Grafiği oku. Sütunlar sol eksendeki yağışı (mm), çizgi sağ eksendeki sıcaklığı (°C) gösterir. Değerler 1991-2020 ortalamasıdır; yani grafik iklim bilgisi verir.
Adım 2: Sıcaklığın 25 °C'nin üzerinde olduğu ayları bul: haziran (26 °C), temmuz (29 °C) ve ağustos (29 °C). Bu aylarda yağış sırasıyla 10, 0 ve 0 mm'dir; hepsi 20 mm'nin altındadır.
Adım 3: Diğer yargıları denetle. En yağışlı ay aralıktır (110 mm) ve sıcaklığı 9 °C'dir. En soğuk ay ocaktır (8 °C), ama yağışı 100 mm'dir. Yağışı 80 mm'yi aşan aylarda (ocak, şubat, aralık) sıcaklık 8-9 °C'dir; hiçbiri 5 °C'nin altına inmez.
Sağlama: Bu kentte sıcak aylar kurak, soğuk aylar yağışlı geçer; iki eğri zıt yönlüdür.
Cevap C.`
},
{
  id: "fen-ik-030",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: `Tabloda bir dağ kentinde son beş yılın ocak aylarında kar yağan gün sayıları verilmiştir.
**Buna göre bu beş yıl için ocak ayı kar yağışlı gün sayısının ortalaması kaçtır?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Yıl</th><th>Kar yağışlı gün sayısı</th></tr><tr><td>2019</td><td>2</td></tr><tr><td>2020</td><td>16</td></tr><tr><td>2021</td><td>2</td></tr><tr><td>2022</td><td>4</td></tr><tr><td>2023</td><td>6</td></tr></table>",
  secenekler: [
    "2",
    "4",
    "5",
    "6"
  ],
  dogru: 3,
  hatalar: [
    "En küçük ya da en sık görülen değeri ortalama sanma: ortalama, bütün değerlerin toplamının değer sayısına bölünmesiyle bulunur.",
    "Ortancayı ortalama sanma: değerler sıralandığında ortadaki sayı 4'tür; ortalama ise toplamdan hesaplanır.",
    "Toplamı yanlış sayıya bölme: 30 ÷ 6 = 5 işlemi beş yıl yerine altıya bölmektir.",
    null
  ],
  aciklama: `Ortalama, değerlerin toplamının değer sayısına bölünmesiyle bulunur.
Adım 1: Toplamı bul: 2 + 16 + 2 + 4 + 6 = 30.
Adım 2: Değer sayısına bak: 5 yıl vardır.
Adım 3: Ortalama = 30 ÷ 5 = 6 gündür.
Sağlama: 6 gün × 5 yıl = 30 gün eder; toplamla tutuyor. Ortalama, 16 gibi uç bir değerin etkisiyle ortadaki değer olan 4'ten büyük çıkmıştır.
Not: Bu hesap yalnızca beş yılı kapsadığından kentin iklimi için yeterli değildir; iklim ortalaması için en az 30 yıllık kayıt aranır.
Cevap D.`
},
{
  id: "fen-ik-031",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: `Tabloda Ormanlı ilçesinin iki ayrı otuz yıllık dönem için hesaplanmış ortalamaları verilmiştir.
I. 1961-1990 döneminin her yılında yağış tam olarak 540 mm ölçülmüştür.
II. 1991-2020 dönemi yıllık ortalama yağışı, 1961-1990 dönemininkinden fazladır.
III. 1991-2020 döneminin her yılında ortalama sıcaklık 12,9 °C'nin üzerinde ölçülmüştür.
**Buna göre bu yargılardan hangileri tablodan kesinlikle çıkarılabilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Dönem</th><th>Yıllık ortalama yağış (mm)</th><th>Yıllık ortalama sıcaklık (°C)</th></tr><tr><td>1961-1990</td><td>540</td><td>12,1</td></tr><tr><td>1991-2020</td><td>585</td><td>12,9</td></tr></table>",
  secenekler: [
    "Yalnız II",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Ortalamayı her yılın değeri sanma: 12,9 °C dönemin ortalamasıdır; her yıl bu değerin üzerinde olmak zorunda değildir.",
    "Doğru yargıya yanlış olanı ekleme: II doğrudur ama I, ortalamayı her yılın değeri sayar.",
    "Doğru yargıya yanlış olanı ekleme: 12,9 °C dönemin ortalamasıdır; III. yargı bunu her yılın değeri sayar."
  ],
  aciklama: `Adım 1: Tablodaki değerlerin ortalama olduğunu fark et. Ortalama, o dönemdeki yılların genel durumunu özetler; her yılın değerini vermez.
Adım 2: I. yargıyı denetle. 540 mm bir ortalamadır; otuz yılın her birinde tam olarak 540 mm yağış düşmesi gerekmez. I çıkarılamaz.
Adım 3: II. yargıyı denetle. 585 mm > 540 mm olduğundan 1991-2020 dönemi ortalama olarak daha yağışlıdır. II doğrudur.
Adım 4: III. yargıyı denetle. Ortalaması 12,9 °C olan bir dönemde bazı yılların ortalaması bunun altında, bazılarının üstünde olur. III çıkarılamaz.
Sık yapılan hata: "Ortalama X ise her yıl X'tir." Sorudaki "kesinlikle" sözcüğü, yalnızca veriden zorunlu olarak çıkan yargıyı seçmeni ister.
Sonuç: Yalnız II doğrudur.
Cevap A.`
},
{
  id: "fen-ik-032",
  kazanim: "F.8.1.2.2",
  kademe: 0,
  zorluk: 2,
  soru: `Şemada bir meteorologun ve bir iklim bilimcinin çalışmaları iki küme olarak gösterilmiş, ortak olan çalışma ise "?" ile belirtilmiştir.
**Buna göre "?" ile gösterilen bölgeye aşağıdakilerden hangisi yazılmalıdır?**`,
  gorsel: "<svg viewBox=\"0 0 560 290\" role=\"img\" aria-label=\"Meteorolog ve iklim bilimci kümelerinin kesişimini gösteren Venn şeması\"><g fill=\"var(--dolgu)\" fill-opacity=\"0.55\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"205\" cy=\"165\" r=\"112\"/><circle cx=\"355\" cy=\"165\" r=\"112\"/></g><g fill=\"currentColor\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\"><text x=\"150\" y=\"34\">Meteorolog</text><text x=\"410\" y=\"34\">İklim bilimci</text></g><g fill=\"currentColor\" font-size=\"14\" text-anchor=\"middle\"><text x=\"165\" y=\"158\">Kısa süreli</text><text x=\"165\" y=\"178\">hava tahmini</text><text x=\"395\" y=\"158\">Uzun yıllık</text><text x=\"395\" y=\"178\">eğilim çalışması</text></g><text x=\"280\" y=\"177\" fill=\"var(--vurgu)\" font-size=\"36\" font-weight=\"bold\" text-anchor=\"middle\">?</text></svg>",
  secenekler: [
    "Yarınki hava durumuyla ilgili tahmin yapar.",
    "Otuz yıllık ortalamalar üzerinden çalışır.",
    "Aynı istasyon kayıtlarından yararlanır.",
    "Yalnızca iklime ait ölçümlerle çalışır."
  ],
  dogru: 2,
  hatalar: [
    "Yalnız meteorologa ait işi ortak sanma: yarınki hava durumunu tahmin etmek meteorologun çalışmasıdır, iklim bilimcinin değil.",
    "Yalnız iklim bilimciye ait işi ortak sanma: otuz yıllık ortalamalarla çalışmak iklim bilimcinin alanıdır.",
    null,
    "Aşırı genelleme: iki uzmandan hiçbiri yalnızca iklim ölçümleriyle ilgilenmez; meteorolog hava olaylarını da inceler."
  ],
  aciklama: `Adım 1: Şemadaki kümeleri oku. Sol küme meteorologun "kısa süreli hava tahmini" yaptığını, sağ küme iklim bilimcinin "uzun yıllık eğilim" çalışmasını anlatır.
Adım 2: Kısa süreli tahmin yalnızca sol kümeye, otuz yıllık ortalamalarla çalışmak yalnızca sağ kümeye girer. İkisi de kesişimde olamaz.
Adım 3: Kesişimde iki uzmanın da yaptığı iş olmalıdır. İkisi de aynı istasyonların sıcaklık ve yağış ölçümlerinden yararlanır; meteorologun bugün kullandığı ölçüm, yıllar içinde biriktiğinde iklim bilimcinin verisi olur.
Sık yapılan hata: İki uzmanı farklı ölçüm aletleri kullanıyor sanmak. Farkları aletleri değil, veriye baktıkları zaman ölçeğidir.
Cevap C.`
},
{
  id: "fen-ik-033",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bir gazetenin hava ve çevre sayfasında üç haber başlığı yer almıştır.
I. Bölgenin yıllık ortalama yağışı 1991-2020 döneminde 640 mm olarak hesaplandı.
II. Kuvvetli yağış nedeniyle köy yolu ulaşıma kapandı.
III. Gece boyunca sağanak yağışın sürmesi bekleniyor.
**Buna göre bu başlıklardan hangileri bir hava olayını bildirmektedir?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  dogru: 3,
  hatalar: [
    "İklim verisini hava olayı sanma: I. başlıktaki 640 mm, otuz yıllık bir ortalamadır.",
    "II'yi gözden kaçırma: yolun ulaşıma kapanmasına yol açan kuvvetli yağış da kısa sürede gerçekleşen bir hava olayıdır.",
    "I'i hava olayı sayma ve III'ü gözden kaçırma: yıllık ortalama yağış iklim bilgisidir.",
    null
  ],
  aciklama: `Adım 1: Her başlıktaki zaman ifadesini bul.
Adım 2: I. başlıkta "yıllık ortalama" ve "1991-2020 döneminde" ifadeleri var. Otuz yıllık bir ortalama iklim bilgisidir; hava olayı değildir.
Adım 3: II. başlıktaki kuvvetli yağış, yolu kapatan kısa süreli bir olaydır. Hava olayıdır.
Adım 4: III. başlıktaki "gece boyunca" ifadesi saatlik bir süreyi anlatır. Sağanak yağış beklentisi de hava olayıdır.
Adım 5: Hava olayını bildirenler II ve III'tür.
Sağlama: I. başlık bir yıl sonra da aynı kalır; II ve III ise ertesi gün geçmişte kalır.
Cevap D.`
},
{
  id: "fen-ik-034",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: `Tabloda bir ilde onar yıllık dönemlere ait yıllık ortalama don günü sayısı verilmiştir (don günü: en düşük sıcaklığın 0 °C'nin altına indiği gün).
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Dönem</th><th>Yıllık ortalama don günü sayısı</th></tr><tr><td>1961-1970</td><td>62</td></tr><tr><td>1971-1980</td><td>58</td></tr><tr><td>1981-1990</td><td>51</td></tr><tr><td>1991-2000</td><td>47</td></tr><tr><td>2001-2010</td><td>40</td></tr></table>",
  secenekler: [
    "Her yıl bir önceki yıldan daha az don günü yaşanmıştır.",
    "Her dönemin ortalama don günü sayısı, bir önceki dönemden azdır.",
    "Don günü sayısı 2010'dan sonra sıfıra inmiştir.",
    "Küresel ortalama sıcaklıkların arttığı bu tablodan anlaşılır."
  ],
  dogru: 1,
  hatalar: [
    "Dönem ortalamasını yıl yıl değişim sanma: tablo onar yıllık ortalamaları gösterir; tek tek yıllar hakkında bilgi vermez.",
    null,
    "Tabloda olmayan döneme yargı verme: tablo 2010'da bitiyor; sonrası için bilgi yoktur.",
    "Tek bir ilin verisinden küresel sonuç çıkarma: tablo yalnızca bu ile aittir, Dünya ortalamasını vermez."
  ],
  aciklama: `Don günü sayısı, iklimin değişimini izlemede kullanılan göstergelerden biridir.
Adım 1: Tablonun dönem ortalamalarını sırala: 62, 58, 51, 47, 40. Değerler dönemler ilerledikçe küçülüyor.
Adım 2: Öyleyse "dönemler ilerledikçe ortalama don günü sayısı azalmıştır" yargısı tablodan çıkar.
Adım 3: Diğer şıkları ele. Tablo onar yıllık ortalamaları verdiğinden "her yıl" yargısı çıkarılamaz. 2010'dan sonrası tabloda yoktur. Tek bir ilin verisi de küresel ısınmayı tek başına göstermez.
Sık yapılan hata: Eğilimi kesin kurala çevirmek. "Azalma eğilimindedir" doğrudur; "her yıl azalmıştır" ise veriyle desteklenmez.
Cevap B.`
},
{
  id: "fen-ik-035",
  kazanim: "F.8.1.2.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bir meteoroloji ve iklim araştırma merkezine gelen üç soru aşağıda verilmiştir:
I. Cuma günü kentte kar yağışı başlayacak mı?
II. Son elli yılda kentin ocak ayı ortalama sıcaklığı nasıl değişti?
III. Bu akşam hava saat kaçta soğumaya başlayacak?
**Buna göre bu sorulardan hangilerinin yanıtını bir iklim bilimci arar?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 1,
  hatalar: [
    "Kısa süreli tahmini iklim sorusu sanma: cuma günü kar yağışının başlayıp başlamayacağı meteorologun yanıt aradığı bir sorudur.",
    null,
    "Kısa süreli soruları iklim sorusu sanma: I ve III birkaç gün ya da saat içindeki olayları sorar; bunlar meteorologun alanıdır.",
    "Doğru soruya kısa süreli bir soru ekleme: III. soru bu akşamla ilgilidir; meteorologun alanıdır."
  ],
  aciklama: `Adım 1: Soruların kapsadığı süreyi karşılaştır. I. soru "cuma günü", III. soru "bu akşam" der; ikisi de birkaç gün ya da saat içindeki bir olayı sorar. Bunların yanıtını meteorolog arar.
Adım 2: II. soru "son elli yılda" ifadesini taşır ve değişimi sorar. Elli yıllık kayıtları karşılaştırmak iklim bilimcinin işidir.
Adım 3: Öyleyse iklim bilimcinin yanıt arayacağı soru yalnız II'dir.
Sağlama: Bir soruda "yıllar", "son … yılda" ya da "ortalama" geçiyorsa iklim bilimcinin alanına girer.
Cevap B.`
},
{
  id: "fen-ik-036",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bir giyim firması, Doğu Anadolu'da açacağı yeni mağazasının uzun vadeli ürün planını (hangi aylarda hangi tür kıyafet satılacağını) hazırlamak istemektedir.
**Buna göre firmanın planında kullanması en uygun veri aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Bölgenin son otuz yıllık aylık ortalama sıcaklık ve yağışları",
    "Bölgenin önümüzdeki on gün için yayımlanan hava tahmini",
    "Bölgede dün ölçülen en düşük ve en yüksek sıcaklıklar",
    "Bölgede geçen yıl şubat ayında görülen kar yağışı sayısı"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Kısa süreli tahmini uzun vadeli plana uygulama: on günlük tahmin, yılın geri kalanı için fikir vermez.",
    "Tek günlük ölçümü plana temel yapma: dün ölçülen sıcaklık, mevsimlerin genel düzenini anlatmaz.",
    "Tek yılın verisini genel durum sanma: geçen yıl şubatındaki kar sayısı o yıla özgü olabilir; plan için uzun yıllık ortalama gerekir."
  ],
  aciklama: `Adım 1: Kararın zaman ölçeğine bak: "uzun vadeli ürün planı". Bu plan yıllarca geçerli olacak ve her ay için karar verecektir.
Adım 2: Böyle bir karar, bölgenin her ay genelde nasıl olduğunu bilmeyi gerektirir. Bu bilgi uzun yıllık ortalamalardan, yani iklim verisinden gelir.
Adım 3: On günlük tahmin, dünkü ölçüm ve geçen yılın tek bir ayı birer hava olayı ya da tek yıllık veridir; genel düzeni vermez.
Sık yapılan hata: "En güncel veri en iyi veridir." diye düşünmek. Plan uzunsa güncel olan değil, uzun yıllara dayanan veri gerekir.
Cevap A.`
},
{
  id: "fen-ik-037",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: `Grafikte X ve Y kentlerinin 1991-2020 dönemine ait aylık ortalama sıcaklıkları verilmiştir.
I. X kentinin en sıcak ay ortalaması, Y kentinin en sıcak ay ortalamasından düşüktür.
II. Aylık ortalama sıcaklığı 20 °C'nin altında kalan ay sayısı Y kentinde X kentinden fazladır.
III. Y kentinin aylık ortalama sıcaklığı her ay X kentininkinden 10 °C'den fazla yüksektir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: "<svg viewBox=\"0 0 560 292\" role=\"img\" aria-label=\"X ve Y kentlerinin aylık ortalama sıcaklıklarını gösteren çizgi grafiği\"><text x=\"12\" y=\"20\" fill=\"currentColor\" font-size=\"15\" font-weight=\"bold\">Grafik: Aylık ortalama sıcaklık (°C), 1991-2020</text><g stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"><line x1=\"84\" y1=\"180\" x2=\"476\" y2=\"180\"/><line x1=\"84\" y1=\"110\" x2=\"476\" y2=\"110\"/><line x1=\"84\" y1=\"40\" x2=\"476\" y2=\"40\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"84\" y1=\"36\" x2=\"84\" y2=\"250\"/><line x1=\"84\" y1=\"250\" x2=\"476\" y2=\"250\"/></g><g fill=\"currentColor\" font-size=\"14\" text-anchor=\"end\"><text x=\"76\" y=\"255\">0</text><text x=\"76\" y=\"185\">10</text><text x=\"76\" y=\"115\">20</text><text x=\"76\" y=\"45\">30</text></g><polyline points=\"84.0,250.0 119.6,236.0 155.3,208.0 190.9,173.0 226.5,138.0 262.2,110.0 297.8,89.0 333.5,89.0 369.1,124.0 404.7,166.0 440.4,208.0 476.0,236.0\" fill=\"none\" stroke=\"var(--vurgu)\" stroke-width=\"3\"/><polyline points=\"84.0,187.0 119.6,180.0 155.3,166.0 190.9,145.0 226.5,117.0 262.2,89.0 297.8,68.0 333.5,68.0 369.1,89.0 404.7,124.0 440.4,152.0 476.0,180.0\" fill=\"none\" stroke=\"var(--vurgu2)\" stroke-width=\"3\"/><g fill=\"var(--vurgu)\"><circle cx=\"84.0\" cy=\"250\" r=\"4\"/><circle cx=\"119.6\" cy=\"236\" r=\"4\"/><circle cx=\"155.3\" cy=\"208\" r=\"4\"/><circle cx=\"190.9\" cy=\"173\" r=\"4\"/><circle cx=\"226.5\" cy=\"138\" r=\"4\"/><circle cx=\"262.2\" cy=\"110\" r=\"4\"/><circle cx=\"297.8\" cy=\"89\" r=\"4\"/><circle cx=\"333.5\" cy=\"89\" r=\"4\"/><circle cx=\"369.1\" cy=\"124\" r=\"4\"/><circle cx=\"404.7\" cy=\"166\" r=\"4\"/><circle cx=\"440.4\" cy=\"208\" r=\"4\"/><circle cx=\"476.0\" cy=\"236\" r=\"4\"/></g><g fill=\"var(--vurgu2)\"><rect x=\"80.0\" y=\"183\" width=\"8\" height=\"8\"/><rect x=\"115.6\" y=\"176\" width=\"8\" height=\"8\"/><rect x=\"151.3\" y=\"162\" width=\"8\" height=\"8\"/><rect x=\"186.9\" y=\"141\" width=\"8\" height=\"8\"/><rect x=\"222.5\" y=\"113\" width=\"8\" height=\"8\"/><rect x=\"258.2\" y=\"85\" width=\"8\" height=\"8\"/><rect x=\"293.8\" y=\"64\" width=\"8\" height=\"8\"/><rect x=\"329.5\" y=\"64\" width=\"8\" height=\"8\"/><rect x=\"365.1\" y=\"85\" width=\"8\" height=\"8\"/><rect x=\"400.7\" y=\"120\" width=\"8\" height=\"8\"/><rect x=\"436.4\" y=\"148\" width=\"8\" height=\"8\"/><rect x=\"472.0\" y=\"176\" width=\"8\" height=\"8\"/></g><text x=\"486\" y=\"241\" fill=\"var(--vurgu)\" font-size=\"14\" font-weight=\"bold\">X kenti</text><text x=\"486\" y=\"185\" fill=\"var(--vurgu2)\" font-size=\"14\" font-weight=\"bold\">Y kenti</text><g fill=\"currentColor\" font-size=\"14\" text-anchor=\"middle\"><text x=\"84.0\" y=\"274\">Oca</text><text x=\"119.6\" y=\"274\">Şub</text><text x=\"155.3\" y=\"274\">Mar</text><text x=\"190.9\" y=\"274\">Nis</text><text x=\"226.5\" y=\"274\">May</text><text x=\"262.2\" y=\"274\">Haz</text><text x=\"297.8\" y=\"274\">Tem</text><text x=\"333.5\" y=\"274\">Ağu</text><text x=\"369.1\" y=\"274\">Eyl</text><text x=\"404.7\" y=\"274\">Eki</text><text x=\"440.4\" y=\"274\">Kas</text><text x=\"476.0\" y=\"274\">Ara</text></g></svg>",
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Ay sayısını yanlış sayma: 20 °C'nin altındaki ay sayısı X kentinde 9, Y kentinde 8'dir; II. yargı yanlıştır.",
    "I. yargıyı doğru bulup III'ü de sayma: ocak ayında fark yalnızca 9 °C'dir; \"her ay 10 °C'den fazla\" doğru değildir.",
    "II'yi doğru sayma ve III'ü kontrol etmeme: II yanlıştır, III de ocak ayında bozulur."
  ],
  aciklama: `Adım 1: I. yargıyı denetle. X kentinin en yüksek değeri 23 °C, Y kentininki 26 °C'dir. 23 < 26 olduğundan I doğrudur.
Adım 2: II. yargıyı denetle. 20 °C'nin altındaki aylar: X kentinde ocak, şubat, mart, nisan, mayıs, eylül, ekim, kasım, aralık olmak üzere 9 aydır (haziran tam 20 °C'dir, sayılmaz). Y kentinde ocak, şubat, mart, nisan, mayıs, ekim, kasım, aralık olmak üzere 8 aydır. Y kentinde ay sayısı daha az olduğundan II yanlıştır.
Adım 3: III. yargıyı denetle. Ocak ayında Y kentinde 9 °C, X kentinde 0 °C ölçülmüştür; fark 9 °C'dir, 10 °C'den fazla değildir. III yanlıştır.
Adım 4: Yalnız I doğrudur.
Sağlama: "Her ay" diyen bir yargıyı çürütmek için tek bir ayı bulmak yeter.
Cevap A.`
},
{
  id: "fen-ik-038",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: `Aynı ilin kıyı ve iç kesimlerinde bulunan iki meteoroloji istasyonunun 1991-2020 dönemine ait ortalamaları tabloda verilmiştir.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>İstasyon</th><th>Yıllık ortalama sıcaklık</th><th>Yıllık ortalama yağış</th></tr><tr><td>Kıyı kesimi</td><td>18,2 °C</td><td>640 mm</td></tr><tr><td>İç kesim</td><td>14,1 °C</td><td>410 mm</td></tr></table>",
  secenekler: [
    "Ölçümlerden biri hatalıdır; çünkü aynı ilde iklim tek olmalıdır.",
    "İç kesim, kıyı kesiminden hem daha sıcak hem daha yağışlıdır.",
    "İki istasyonun verileri farklı olduğu için karşılaştırılamaz.",
    "Aynı ilin farklı kesimlerinde iklim özellikleri farklı olabilir."
  ],
  dogru: 3,
  hatalar: [
    "İklimi il sınırına bağlama: aynı il içinde bile yer değiştikçe iklim özellikleri değişebilir.",
    "Sütunları ters okuma: iç kesimin sıcaklığı (14,1 °C) ve yağışı (410 mm) kıyıdan düşüktür.",
    "Farklı verileri karşılaştırılamaz sanma: iki istasyon aynı dönemi kapsıyor; tam da bu yüzden karşılaştırılabilir.",
    null
  ],
  aciklama: `Adım 1: Tablonun dönemini oku: iki istasyon da 1991-2020 dönemini kapsıyor; yani iki satır da iklim bilgisi verir ve aynı ölçekte karşılaştırılabilir.
Adım 2: Değerleri karşılaştır. Kıyıda sıcaklık 18,2 °C, yağış 640 mm; iç kesimde sıcaklık 14,1 °C, yağış 410 mm'dir. Kıyı hem daha sıcak hem daha yağışlıdır.
Adım 3: Öyleyse aynı ilin kıyı ve iç kesimlerinin iklim özellikleri farklıdır. İklim, il sınırlarına göre değil, bölgenin kendi koşullarına göre değişir.
Sağlama: Aynı günde iki kesimde ölçülen sıcaklık farkı bir hava olayı karşılaştırması olurdu; burada uzun yıllık ortalamalar karşılaştırılıyor.
Cevap D.`
},
{
  id: "fen-ik-039",
  kazanim: "F.8.1.2.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bir meteoroloji istasyonunda çalışan uzman, bugün öğlen ölçtüğü sıcaklığı istasyonun kayıt defterine yazmıştır. Aynı istasyon bu kayıtları yıllarca düzenli olarak biriktirmeye devam edecektir.
**Buna göre otuz yıl sonra bu kayıtla ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Kayıt, bugüne ait olduğu için sonraki çalışmalarda kullanılamaz hâle gelir.",
    "Kayıt, biriken ölçümlerle birlikte iklim verisinin parçası olur.",
    "Kayıt, otuz yıl sonra bölgenin iklimini kendi başına belirler.",
    "Kayıt, iklim çalışmalarında değil, günlük tahminlerde kullanılabilen bir veri olarak kalır."
  ],
  dogru: 1,
  hatalar: [
    "Hava olayı verisini işe yaramaz sanma: bugünün ölçümü, yıllar içinde birikince iklim çalışmalarının ham maddesi olur.",
    null,
    "Tek ölçümü iklimi belirleyen veri sanma: iklim, çok sayıda ölçümün uzun yıllık ortalamasıyla belirlenir; bugünkü ölçüm bu ortalamanın küçük bir parçasıdır.",
    "Verinin kullanım alanını daraltma: aynı kayıtlar yıllar içinde biriktiğinde iklim çalışmalarının da verisi olur; günlük tahmine ait kalmaz."
  ],
  aciklama: `Adım 1: Bugünkü ölçümün niteliğine bak. Bu, tek bir ana ait bir hava ölçümüdür; meteorolog onu bugünün ve yarının raporunda kullanır.
Adım 2: Ölçüm kayıt defterine yazılıp yıllarca birikirse, otuz yıl sonra elde onbinlerce ölçümlük uzun bir kayıt olur.
Adım 3: Uzun yıllık kayıtlar iklim bilimcinin çalışma malzemesidir. Bugünkü ölçüm de bu kaydın küçük bir parçası olarak iklim verisine katılır.
Sık yapılan hata: Meteorolog ile iklim bilimcinin farklı ölçümler kullandığını sanmak. İkisi de aynı istasyon kayıtlarını kullanır; fark, veriye hangi zaman ölçeğinde baktıklarıdır.
Cevap B.`
},
{
  id: "fen-ik-040",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bir okulun öğretmenleri mayıs ayında Trabzon'a gezi düzenleyecektir. Gezi planı hazırlanırken şu bilgiler değerlendirilecektir:
I. Trabzon'da mayıs ayının 1991-2020 dönemi ortalama sıcaklığı
II. Gezi günü sabahında kentte sis görülüp görülmeyeceği
III. Mayıs aylarında Trabzon'da yağışlı geçen gün sayısının uzun yıllar ortalaması
**Buna göre bu bilgilerden hangileri bir iklim verisidir?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  dogru: 2,
  hatalar: [
    "III'ü dışarıda bırakma: yağışlı gün sayısının uzun yıllar ortalaması da bir iklim verisidir.",
    "Tek günün olayını iklim sayma: gezi günü sabahındaki sis kısa süreli bir hava olayıdır; üstelik III de iklim verisidir.",
    null,
    "I'i dışarıda bırakıp II'yi iklim sayma: mayıs ayı ortalama sıcaklığı bir iklim verisidir; sis beklentisi ise gezi gününe aittir."
  ],
  aciklama: `Adım 1: Her bilginin kapsadığı süreye bak.
Adım 2: I. bilgi 1991-2020 dönemine, yani otuz yıllık kayda dayanır. Bu bir iklim verisidir.
Adım 3: II. bilgi "gezi günü sabahı" ile ilgilidir. Tek bir sabahın sis durumu hava olayıdır; tahmin gerektirir.
Adım 4: III. bilgi "uzun yıllar ortalaması" ifadesini taşır. Yıllarca biriken kayıtların ortalaması iklim verisidir.
Adım 5: İklim verisi olanlar I ve III'tür.
Sağlama: II. bilgi gezi günü yaklaştıkça hava tahmininden öğrenilir; I ve III ise günler önceden bile uzun yıllık tablolardan okunabilir.
Cevap C.`
},
{
  id: "fen-ik-041",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: `Tabloda dört ürünün yağmurla (sulamasız) yetişebilmesi için gereken yıllık yağış aralıkları verilmiştir. Bir bölgenin 1991-2020 dönemi yıllık ortalama yağışı 420 mm olarak hesaplanmıştır.
**Buna göre bu bölgede, yağış bakımından yetiştirilmesi en uygun olan ürün hangisidir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Ürün</th><th>Gereken yıllık yağış (mm)</th></tr><tr><td>Arpa</td><td>350-500</td></tr><tr><td>Çay</td><td>1000-2500</td></tr><tr><td>Fındık</td><td>700-1500</td></tr><tr><td>Pamuk</td><td>600-1000</td></tr></table>",
  secenekler: [
    "Arpa",
    "Çay",
    "Fındık",
    "Pamuk"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Aralığı bölgenin değeriyle karşılaştırmama: çay en az 1000 mm ister, bölgede 420 mm vardır.",
    "Aralığı bölgenin değeriyle karşılaştırmama: fındık en az 700 mm ister, bölgenin yağışı bundan azdır.",
    "Alt sınırı atlama: pamuk en az 600 mm ister, 420 mm yeterli değildir."
  ],
  aciklama: `Adım 1: Bölgenin değerini belirle. 1991-2020 dönemine ait yıllık ortalama yağış, bölgenin iklim bilgisidir: 420 mm.
Adım 2: Her ürünün aralığına bak. 420 mm yalnızca 350-500 mm aralığına düşer.
Adım 3: Çay (en az 1000), fındık (en az 700) ve pamuk (en az 600) için bölge yeterince yağış almaz. Arpa için 420 mm aralığın içindedir.
Sağlama: Bu gibi uzun vadeli tarım kararlarında yarının tahmini değil, uzun yıllık ortalama iklim verisi kullanılır.
Cevap A.`
},
{
  id: "fen-ik-042",
  kazanim: "F.8.1.2.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bir üniversitenin atmosfer bilimleri bölümünde dört yüksek lisans tezi hazırlanmaktadır. Tez başlıklarından yalnızca biri bir iklim bilimcinin çalışma alanına girmektedir.
**Buna göre bu başlık aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Önümüzdeki hafta kıyı kesimlerde beklenen dolu yağışının saatlik gidişi",
    "Kış başındaki ilk kar yağışının hangi gün başlayacağı",
    "Ege Bölgesi'nde 1960-2020 arasında yaz yağışlarındaki değişim",
    "Yarın gece vadi tabanlarında oluşacak kırağının tahmini"
  ],
  dogru: 2,
  hatalar: [
    "Kısa süreli tahmin konusunu iklim sanma: bir haftalık dolu gidişi meteorolojinin konusudur.",
    "Tek bir olayın başlangıç gününü iklim çalışması sanma: ilk karın hangi gün başlayacağı kısa vadeli bir hava tahminidir.",
    null,
    "Tek geceye ait tahmini iklim çalışması sanma: yarın gece oluşacak kırağı bir hava olayıdır."
  ],
  aciklama: `Adım 1: Başlıkların kapsadığı süreyi bul. "Önümüzdeki hafta", "kış başındaki ilk kar yağışı" ve "yarın gece" kısa süreleri anlatır.
Adım 2: Bu üç başlık da gelecekteki bir hava olayının tahminini konu alır. Bu iş meteorologun alanıdır.
Adım 3: "1960-2020 arasında yaz yağışlarındaki değişim" ise altmış yıllık kayıtların karşılaştırılmasıdır. Bu, iklim bilimcinin çalışma alanıdır.
Sağlama: Bir başlıkta "yıllar", "son … yılda" ya da "değişim" gibi sözcükler varsa çalışma iklimle ilgilidir; "yarın", "bu hafta" gibi sözcükler varsa hava tahminiyle ilgilidir.
Cevap C.`
},
{
  id: "fen-ik-043",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: `Grafikte bir ilin 2014-2023 yıllarındaki yıllık toplam yağış miktarları verilmiştir. İlin 1991-2020 dönemi yıllık ortalama yağışı 610 mm'dir.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: "<svg viewBox=\"0 0 560 290\" role=\"img\" aria-label=\"Grafik: Yıllık toplam yağış (mm)\"><text x=\"12\" y=\"20\" fill=\"currentColor\" font-size=\"15\" font-weight=\"bold\">Grafik: Yıllık toplam yağış (mm)</text><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"64\" y1=\"50\" x2=\"64\" y2=\"250\"/><line x1=\"64\" y1=\"250\" x2=\"548\" y2=\"250\"/></g><g fill=\"currentColor\" font-size=\"14\" text-anchor=\"end\"><text x=\"58\" y=\"255\">0</text><text x=\"58\" y=\"227.28571428571428\">100</text><text x=\"58\" y=\"199.57142857142856\">200</text><text x=\"58\" y=\"171.85714285714286\">300</text><text x=\"58\" y=\"144.14285714285714\">400</text><text x=\"58\" y=\"116.42857142857142\">500</text><text x=\"58\" y=\"88.71428571428572\">600</text><text x=\"58\" y=\"61\">700</text></g><g fill=\"var(--vurgu)\"><rect x=\"74.2\" y=\"80.9\" width=\"28.1\" height=\"169.1\"/><rect x=\"122.6\" y=\"86.5\" width=\"28.1\" height=\"163.5\"/><rect x=\"171.0\" y=\"72.6\" width=\"28.1\" height=\"177.4\"/><rect x=\"219.4\" y=\"83.7\" width=\"28.1\" height=\"166.3\"/><rect x=\"267.8\" y=\"144.7\" width=\"28.1\" height=\"105.3\"/><rect x=\"316.2\" y=\"78.2\" width=\"28.1\" height=\"171.8\"/><rect x=\"364.6\" y=\"75.4\" width=\"28.1\" height=\"174.6\"/><rect x=\"413.0\" y=\"82.3\" width=\"28.1\" height=\"167.7\"/><rect x=\"461.4\" y=\"85.1\" width=\"28.1\" height=\"164.9\"/><rect x=\"509.8\" y=\"79.6\" width=\"28.1\" height=\"170.4\"/></g><g fill=\"currentColor\" font-size=\"14\" text-anchor=\"middle\"><text x=\"88.2\" y=\"74.9\">610</text><text x=\"136.6\" y=\"80.5\">590</text><text x=\"185.0\" y=\"66.6\">640</text><text x=\"233.4\" y=\"77.7\">600</text><text x=\"281.8\" y=\"138.7\">380</text><text x=\"330.2\" y=\"72.2\">620</text><text x=\"378.6\" y=\"69.4\">630</text><text x=\"427.0\" y=\"76.3\">605</text><text x=\"475.4\" y=\"79.1\">595</text><text x=\"523.8\" y=\"73.6\">615</text></g><g fill=\"currentColor\" font-size=\"14\" text-anchor=\"middle\"><text x=\"88.2\" y=\"274\">2014</text><text x=\"136.6\" y=\"274\">2015</text><text x=\"185.0\" y=\"274\">2016</text><text x=\"233.4\" y=\"274\">2017</text><text x=\"281.8\" y=\"274\">2018</text><text x=\"330.2\" y=\"274\">2019</text><text x=\"378.6\" y=\"274\">2020</text><text x=\"427.0\" y=\"274\">2021</text><text x=\"475.4\" y=\"274\">2022</text><text x=\"523.8\" y=\"274\">2023</text></g></svg>",
  secenekler: [
    "İlin iklimi 2018 yılında kurak bir iklime dönüşmüştür.",
    "2018'den sonra yağış her yıl bir öncekinden fazla olmuştur.",
    "2018'e kadar olan yıllarda yağış her yıl azalmıştır.",
    "2018'deki düşüş, tek başına iklimin değiştiğini göstermez."
  ],
  dogru: 3,
  hatalar: [
    "Tek yılı iklim değişimi sanma: bir yılın düşük çıkması iklimin kalıcı olarak değiştiği anlamına gelmez; sonraki yıllar yeniden ortalamaya yaklaşmıştır.",
    "Gidişi yanlış okuma: 2021'de yağış (605 mm) 2020'ye (630 mm) göre azalmıştır; \"her yıl\" yargısı bozulur.",
    "Gidişi yanlış okuma: 2014-2017 arasında yağış iniş çıkış göstermiştir (610, 590, 640, 600); sürekli azalma yoktur.",
    null
  ],
  aciklama: `Adım 1: Grafikteki değerleri oku: 610, 590, 640, 600, 380, 620, 630, 605, 595, 615 mm. İlin uzun yıllık ortalaması 610 mm'dir.
Adım 2: 2018 yılı 380 mm ile ortalamanın çok altındadır; belirgin bir kurak yıldır. Ama sonraki yıllar yeniden 595-630 mm aralığına dönmüştür.
Adım 3: Tek bir yılın ortalamadan sapması olağandır ve iklimin değiştiğini göstermez. İklim yargısı için dönem ortalamaları karşılaştırılır.
Adım 4: "Her yıl artmıştır" yargısı 2021'de bozulur (630 → 605), "her yıl azalmıştır" yargısı 2015-2016'da bozulur (590 → 640).
Sık yapılan hata: Tek bir uç değere bakıp iklim değişikliği sonucuna varmak.
Cevap D.`
},
{
  id: "fen-ik-044",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: `Grafikte Ardıçlı ilinin aylık ortalama yağış miktarları verilmiştir.
**Buna göre bu ilin yağış düzeniyle ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: "<svg viewBox=\"0 0 560 290\" role=\"img\" aria-label=\"Grafik: Aylık ortalama yağış (mm), 1991-2020\"><text x=\"12\" y=\"20\" fill=\"currentColor\" font-size=\"15\" font-weight=\"bold\">Grafik: Aylık ortalama yağış (mm), 1991-2020</text><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"64\" y1=\"50\" x2=\"64\" y2=\"250\"/><line x1=\"64\" y1=\"250\" x2=\"548\" y2=\"250\"/></g><g fill=\"currentColor\" font-size=\"14\" text-anchor=\"end\"><text x=\"58\" y=\"255\">0</text><text x=\"58\" y=\"190.33333333333331\">40</text><text x=\"58\" y=\"125.66666666666666\">80</text><text x=\"58\" y=\"61\">120</text></g><g fill=\"var(--vurgu)\"><rect x=\"72.5\" y=\"104.5\" width=\"23.4\" height=\"145.5\"/><rect x=\"112.8\" y=\"120.7\" width=\"23.4\" height=\"129.3\"/><rect x=\"153.1\" y=\"153.0\" width=\"23.4\" height=\"97.0\"/><rect x=\"193.5\" y=\"177.3\" width=\"23.4\" height=\"72.8\"/><rect x=\"233.8\" y=\"201.5\" width=\"23.4\" height=\"48.5\"/><rect x=\"274.1\" y=\"225.8\" width=\"23.4\" height=\"24.3\"/><rect x=\"314.5\" y=\"241.9\" width=\"23.4\" height=\"8.1\"/><rect x=\"354.8\" y=\"241.9\" width=\"23.4\" height=\"8.1\"/><rect x=\"395.1\" y=\"217.7\" width=\"23.4\" height=\"32.3\"/><rect x=\"435.5\" y=\"169.2\" width=\"23.4\" height=\"80.8\"/><rect x=\"475.8\" y=\"112.6\" width=\"23.4\" height=\"137.4\"/><rect x=\"516.1\" y=\"72.2\" width=\"23.4\" height=\"177.8\"/></g><g fill=\"currentColor\" font-size=\"14\" text-anchor=\"middle\"><text x=\"84.2\" y=\"98.5\">90</text><text x=\"124.5\" y=\"114.7\">80</text><text x=\"164.8\" y=\"147.0\">60</text><text x=\"205.2\" y=\"171.3\">45</text><text x=\"245.5\" y=\"195.5\">30</text><text x=\"285.8\" y=\"219.8\">15</text><text x=\"326.2\" y=\"235.9\">5</text><text x=\"366.5\" y=\"235.9\">5</text><text x=\"406.8\" y=\"211.7\">20</text><text x=\"447.2\" y=\"163.2\">50</text><text x=\"487.5\" y=\"106.6\">85</text><text x=\"527.8\" y=\"66.2\">110</text></g><g fill=\"currentColor\" font-size=\"14\" text-anchor=\"middle\"><text x=\"84.2\" y=\"274\">Oca</text><text x=\"124.5\" y=\"274\">Şub</text><text x=\"164.8\" y=\"274\">Mar</text><text x=\"205.2\" y=\"274\">Nis</text><text x=\"245.5\" y=\"274\">May</text><text x=\"285.8\" y=\"274\">Haz</text><text x=\"326.2\" y=\"274\">Tem</text><text x=\"366.5\" y=\"274\">Ağu</text><text x=\"406.8\" y=\"274\">Eyl</text><text x=\"447.2\" y=\"274\">Eki</text><text x=\"487.5\" y=\"274\">Kas</text><text x=\"527.8\" y=\"274\">Ara</text></g></svg>",
  secenekler: [
    "Yıllık toplam yağış 500 mm'nin altında kalmaktadır.",
    "Yıllık yağışın yarısından fazlası ekim-şubat aylarında düşer.",
    "Haziran-ağustos aylarında düşen toplam yağış 50 mm'den fazladır.",
    "Mart ayında düşen yağış miktarı ocak ayındakinden fazladır."
  ],
  dogru: 1,
  hatalar: [
    "Toplamı hesaplamadan tahmin etme: 12 ayın toplamı 595 mm'dir, 500 mm'nin üstündedir.",
    null,
    "Küçük değerleri toplamayı atlama: haziran, temmuz ve ağustos için 15 + 5 + 5 = 25 mm'dir, 50 mm'den azdır.",
    "Sütunları ters okuma: mart 60 mm, ocak 90 mm'dir; mart ayı daha az yağış alır."
  ],
  aciklama: `Adım 1: Grafiğin başlığını oku: değerler 1991-2020 ortalamasıdır; yani il için iklim bilgisi verir.
Adım 2: Sütunları yaz: 90, 80, 60, 45, 30, 15, 5, 5, 20, 50, 85, 110 mm. Yıllık toplam 595 mm olur.
Adım 3: Ekim, kasım, aralık, ocak, şubat aylarını topla: 50 + 85 + 110 + 90 + 80 = 415 mm. Yarısı 297,5 mm'dir; 415 bunun üstündedir. Yargı doğrudur.
Adım 4: Diğer şıklar: toplam 595 mm olduğundan 500 mm'nin altında değildir; yaz üç ayın toplamı 25 mm'dir; mart (60) ocaktan (90) azdır.
Sağlama: 415 ÷ 595 yaklaşık %70 eder; "yarıdan fazla" ile tutarlıdır.
Cevap B.`
},
{
  id: "fen-ik-045",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: `Tabloda R ve S kentlerinin 1991-2020 dönemine ait mevsimlik ortalama yağış miktarları verilmiştir.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Kent</th><th>İlkbahar (mm)</th><th>Yaz (mm)</th><th>Sonbahar (mm)</th><th>Kış (mm)</th></tr><tr><td>R</td><td>90</td><td>20</td><td>80</td><td>110</td></tr><tr><td>S</td><td>70</td><td>75</td><td>80</td><td>75</td></tr></table>",
  secenekler: [
    "Yıllık yağışları eşit olsa da yağış düzenleri farklıdır.",
    "Yıllık yağışları eşit olduğundan iki kentin iklimi aynıdır.",
    "S kentinde kış mevsiminde hiç yağış düşmemektedir.",
    "R kentinde yağış, yıl boyunca mevsimlere eşit dağılmıştır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Tek ölçütle karar verme: iklim tek bir sayıyla anlatılmaz; yağışın mevsimlere dağılımı da iklimi belirler.",
    "Küçük ortalamayı hiç yağış yok sanma: S kentinde kış ortalaması 75 mm'dir.",
    "Mevsimlik değerleri karşılaştırmama: R kentinde yaz 20 mm, kış 110 mm'dir; yağış mevsimlere eşit dağılmamıştır."
  ],
  aciklama: `Adım 1: Yıllık toplamları bul. R kenti: 90 + 20 + 80 + 110 = 300 mm. S kenti: 70 + 75 + 80 + 75 = 300 mm. İki toplam eşittir.
Adım 2: Mevsimlere bak. R kentinde yağış kışın 110 mm iken yazın 20 mm'dir; fark büyüktür. S kentinde mevsimler arasında fark küçüktür (70-80 mm).
Adım 3: Öyleyse toplam eşit olsa da yağışın mevsimlere dağılımı farklıdır. Yağışın dağılımı iklimin bir parçasıdır; bu yüzden iki kentin iklimi aynı değildir.
Sık yapılan hata: İklimi tek bir sayıyla (yıllık toplam gibi) anlatmak. İklim; sıcaklık, yağış ve bunların mevsimlere dağılımıyla birlikte tanımlanır.
Cevap A.`
},
{
  id: "fen-ik-046",
  kazanim: "F.8.1.2.2",
  kademe: 0,
  zorluk: 2,
  soru: `Bir kamu kurumunun iki biriminde yapılan çalışmalar tabloda özetlenmiştir.
**Buna göre bu birimlerde çalışan uzmanlarla ilgili aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Birim</th><th>Çalışma notu</th></tr><tr><td>1. birim</td><td>1961'den bu yana arşivde biriken kayıtlardan her ay için ortalama hesaplıyoruz.</td></tr><tr><td>2. birim</td><td>Radar görüntüleriyle yağmur bulutlarının saatlik hareketini izliyoruz.</td></tr></table>",
  secenekler: [
    "1. birimde iklim bilimciler, 2. birimde meteorologlar çalışmaktadır.",
    "1. birimde meteorologlar, 2. birimde iklim bilimciler çalışmaktadır.",
    "İki birimde de iklim bilimciler çalışmaktadır.",
    "İki birimde de meteorologlar çalışmaktadır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Uzmanları ters eşleştirme: altmış yıllık arşiv ortalamaları iklim bilimcinin, saatlik bulut izleme ise meteorologun işidir.",
    "İkinci birimi de iklim çalışması sanma: bulutların saatlik hareketini izlemek kısa süreli hava olaylarıyla ilgilidir.",
    "Birinci birimi de hava olayı çalışması sanma: altmış yıllık kayıtlardan aylık ortalama hesaplamak iklim biliminin işidir."
  ],
  aciklama: `Adım 1: 1. birimin notuna bak: "1961'den bu yana arşivde biriken kayıtlar" ve "her ay için ortalama". Altmış yılı aşan kayıtlardan ortalama hesaplamak iklim biliminin çalışma biçimidir; bu birimde iklim bilimciler çalışır.
Adım 2: 2. birimin notuna bak: "saatlik hareket". Birkaç saatlik bulut hareketini izlemek hava olaylarını inceleyen meteorologun işidir.
Adım 3: Öyleyse 1. birimde iklim bilimciler, 2. birimde meteorologlar çalışır.
Sağlama: Radar görüntüleri yıllarca arşivlenip karşılaştırılırsa onlar da iklim bilimcinin verisi olabilir; ama bu notta yapılan iş saatlik izlemedir.
Cevap A.`
},
{
  id: "fen-ik-047",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 2,
  soru: `Bir ziraat odasının toplantısında üç çiftçi şunları söylemiştir:
I. "Dün öğleden sonra düşen dolu bahçemi mahvetti."
II. "Bu hafta sonu için kırağı uyarısı yapılmış."
III. "Bu ovada baharlar uzun yıllardır geç ısınır; don riski mayısa kadar sürer."
**Buna göre bu çiftçilerden hangilerinin sözleri bir bölgenin iklim özelliğini anlatır?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "Yalnız III",
    "I ve II"
  ],
  dogru: 2,
  hatalar: [
    "Zarar veren olayı iklim sanma: dün düşen dolu tek seferlik bir hava olayıdır.",
    "Uyarıyı iklim sanma: hafta sonu için yapılan kırağı uyarısı kısa süreli bir tahmindir.",
    null,
    "Kısa süreli iki olayı iklim sayma: dolu ve kırağı uyarısı hava olaylarıdır."
  ],
  aciklama: `Adım 1: Üç çiftçinin sözlerindeki zaman ifadelerini bul.
Adım 2: I. sözde "dün öğleden sonra", II. sözde "bu hafta sonu" ifadesi geçiyor. İkisi de kısa süreli hava olaylarını anlatır.
Adım 3: III. sözde "uzun yıllardır" ve "baharlar" ifadeleri var. Yıllarca tekrarlanan bu durum ovanın iklim özelliğidir.
Adım 4: Öyleyse yalnız III. çiftçinin sözü iklim özelliğini anlatır.
Sağlama: III. söz bir sonraki hafta da doğrudur; I ve II ise o günlerle birlikte geçmişte kalır.
Cevap C.`
},
{
  id: "fen-ik-048",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 3,
  soru: `Tabloda bir kentin 1991-2020 dönemine ait iklim normallerinden bazıları verilmiştir.
I. Temmuz ayı ortalama sıcaklığı, ocak ayı ortalama sıcaklığından 18 °C yüksektir.
II. Yağışlı bir güne düşen ortalama yağış miktarı yaklaşık 7 mm'dir.
III. Tablodaki değerler birkaç günlük kayıttan değil, uzun yıllara dayanan kayıtlardan hesaplanmıştır.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Büyüklük</th><th>Değer</th></tr><tr><td>Ocak ayı ortalama sıcaklığı</td><td>6 °C</td></tr><tr><td>Temmuz ayı ortalama sıcaklığı</td><td>24 °C</td></tr><tr><td>Yıllık toplam yağış</td><td>840 mm</td></tr><tr><td>Yıllık yağışlı gün sayısı</td><td>118 gün</td></tr></table>",
  secenekler: [
    "Yalnız I",
    "I ve II",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 3,
  hatalar: [
    "Hesap gerektiren ve süreye bağlı yargıları gözden kaçırma: II ve III de doğrudur.",
    "III'ü gözden kaçırma: tablonun başlığı 1991-2020 dönemini belirtir, yani değerler uzun yıllık kayıtlara dayanır.",
    "I'i gözden kaçırma: 24 − 6 = 18 °C'dir, I da doğrudur.",
    null
  ],
  aciklama: `Adım 1: Tablonun başlığını oku: "1991-2020 dönemine ait iklim normalleri". Değerler otuz yıllık kayıttan hesaplanmıştır; III doğrudur.
Adım 2: I. yargıyı hesapla: 24 − 6 = 18 °C. I doğrudur.
Adım 3: II. yargıyı hesapla: yıllık yağış 840 mm, yağışlı gün sayısı 118 olduğundan bir yağışlı güne ortalama 840 ÷ 118 ≈ 7,1 mm düşer. "Yaklaşık 7 mm" doğrudur.
Adım 4: Üç yargı da doğrudur.
Sağlama: Yağışlı gün başına düşen yağış, yağışın şiddetini anlatır; yıllık toplam aynı kalsa bile yağışlı gün sayısı azalırsa bu değer artar.
Cevap D.`
},
{
  id: "fen-ik-049",
  kazanim: "F.8.1.2.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bir kentin eski belediye arşivinde, 1895 yılından beri her gün düzenli olarak tutulmuş yağış defterleri bulunmuştur. Defterlerde yalnızca günlük yağış miktarları yazılıdır ve defterler sayısallaştırılarak araştırmacıların kullanımına açılacaktır.
**Buna göre bu defterlerin bulunması aşağıdakilerden hangisine doğrudan katkı sağlar?**`,
  gorsel: null,
  secenekler: [
    "Meteorologun, önümüzdeki hafta sonu için hazırladığı yağış tahminine",
    "İklim bilimcinin, kentin yağış eğilimini yüzyıllık ölçekte incelemesine",
    "Meteorologun, bu akşam kıyı kesimlerde yayımlayacağı fırtına uyarısına",
    "İklim bilimcinin, yarın sabah vadilerdeki sis olasılığını hesaplamasına"
  ],
  dogru: 1,
  hatalar: [
    "Eski kaydı kısa süreli tahmine bağlama: yüz yıl önceki günlük yağışlar hafta sonunun tahminini doğrudan vermez.",
    null,
    "Eski kaydı anlık uyarıya bağlama: bu akşamki fırtına uyarısı güncel ölçümlere dayanır; defterlerde fırtına kaydı da yoktur.",
    "İklim bilimcinin işini yanlış tanımlama: yarınki sis bir hava olayıdır; iklim bilimci yüzyıllık eğilimle uğraşır."
  ],
  aciklama: `Adım 1: Defterlerin niteliğine bak: 1895'ten beri, yani yüzyılı aşan, düzenli ve kesintisiz günlük yağış kaydı.
Adım 2: Böyle uzun bir kayıt, bir yerin yağış düzeninin yıllar içinde nasıl değiştiğini göstermeye yarar. Bu, iklim bilimcinin çalışma biçimidir.
Adım 3: Hafta sonu tahmini, bu akşamki uyarı ve yarınki sis kısa süreli hava olaylarıyla ilgilidir. Bunlar güncel ölçümlere ve yakın günlerin gözlemlerine dayanır; yüz yıl önceki yağış defterlerinden doğrudan yararlanmaz.
Adım 4: Öyleyse defterlerin doğrudan katkı sağlayacağı çalışma, kentin yağış eğilimini yüzyıllık ölçekte inceleyen iklim bilimcinin çalışmasıdır.
Sağlama: Defterlerde "yarın" ya da "bu akşam" gibi bir ifade geçmediğine dikkat et; elindeki malzeme yüz yılı aşkın bir süreyi kapsıyor.
Cevap B.`
},
{
  id: "fen-ik-050",
  kazanim: "F.8.1.2.2",
  kademe: 0,
  zorluk: 3,
  soru: `Tolga şöyle bir yargıda bulunmuştur: "Meteorologlar on gün sonraki havayı bile doğru tahmin edemiyor. O hâlde iklim bilimciler, 2050'li yıllarda yazların daha sıcak olup olmayacağı konusunda hiçbir şey söyleyemez."
**Buna göre Tolga'nın yargısı için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: null,
  secenekler: [
    "Yargı hatalıdır; çünkü günlük hava ile on yıllık ortalama farklı ölçeklerde ele alınır.",
    "Yargı doğrudur; çünkü meteorolog ve iklim bilimci aynı süre ölçeğinde çalışır.",
    "Yargı hatalıdır; çünkü iklim bilimciler yarının havasını meteorologdan daha iyi bilir.",
    "Yargı doğrudur; çünkü uzun süreli ortalamalar günlük tahminlerin toplamından oluşur."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Uzmanların ölçeklerini aynı sanma: meteorolog günlerle, iklim bilimci yıllarla çalışır; biri için söylenen güçlük diğerine aktarılamaz.",
    "Hatalı yargıya yanlış gerekçe ekleme: iklim bilimcinin işi yarının havasını bilmek değildir; yargı hatalıdır ama gerekçe yanlıştır.",
    "Ortalamayı tahminlerin toplamı sanma: uzun süreli ortalamalar, geçmişte yapılmış ölçümlerden hesaplanır; tahminlerden değil."
  ],
  aciklama: `Adım 1: Tolga'nın akıl yürütmesini parçala: "Belirli bir günü bilemeyen uzman, daha uzun bir dönem hakkında da hiçbir şey söyleyemez."
Adım 2: Meteorolog tek bir günün ya da birkaç günün havasını tahmin etmeye çalışır. Kısa vadeli bu tahmin, atmosferdeki anlık değişimlere duyarlı olduğu için zordur.
Adım 3: İklim bilimci ise belirli bir günü değil, onlarca yılın ortalama eğilimini inceler. Ortalama eğilimler, tek tek günlerin dalgalanmasından daha kararlıdır.
Adım 4: Öyleyse bir günün havasını kestirmenin güçlüğü, on yılların ortalamasındaki eğilimi incelemenin imkânsız olduğunu göstermez. Tolga'nın yargısı hatalıdır.
Sağlama: Bir zar atışının sonucunu önceden bilemeyiz; ama yüz atışın ortalamasının yaklaşık 3,5 olacağını söyleyebiliriz.
Cevap A.`
},
{
  id: "fen-ik-051",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 3,
  soru: `Tabloda dört kentin 1991-2020 dönemine ait en sıcak ay ve en soğuk ay ortalama sıcaklıkları verilmiştir. Bir araştırmacı, yaz ile kış arasındaki ortalama sıcaklık farkının en büyük olduğu kenti bulmak istemektedir.
**Buna göre bu kent aşağıdakilerden hangisidir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Kent</th><th>En sıcak ayın ortalaması</th><th>En soğuk ayın ortalaması</th></tr><tr><td>Akgöl</td><td>28 °C</td><td>−4 °C</td></tr><tr><td>Beyazlı</td><td>33 °C</td><td>8 °C</td></tr><tr><td>Çamlıca</td><td>26 °C</td><td>2 °C</td></tr><tr><td>Dağdere</td><td>31 °C</td><td>9 °C</td></tr></table>",
  secenekler: [
    "Akgöl",
    "Beyazlı",
    "Çamlıca",
    "Dağdere"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Eksi işaretini atlama: Akgöl'de 28 − 4 = 24 hesaplanırsa Beyazlı (33 − 8 = 25 °C) en büyük görünür; oysa 28 − (−4) = 32 °C'dir.",
    "Farkı hesaplamadan tahmin etme: Çamlıca'da fark 26 − 2 = 24 °C'dir; Akgöl'ün 32 °C'lik farkından küçüktür.",
    "En yüksek ve en düşük değere ayrı ayrı bakma: Dağdere'de 31 − 9 = 22 °C'dir, dört kent arasında en küçük farktır."
  ],
  aciklama: `Adım 1: Her kentte yaz-kış farkını bul: en sıcak ayın ortalamasından en soğuk ayın ortalamasını çıkar.
Adım 2: Akgöl: 28 − (−4) = 28 + 4 = 32 °C. Beyazlı: 33 − 8 = 25 °C. Çamlıca: 26 − 2 = 24 °C. Dağdere: 31 − 9 = 22 °C.
Adım 3: En büyük fark Akgöl'dedir.
Sık yapılan hata: Eksi sayıyı çıkarırken işareti atlamak: 28 − 4 = 24 yazarsan Beyazlı'yı seçersin. Eksi bir sayıyı çıkarmak, onun karşıtını eklemektir.
Not: Bu fark, iklimin tek bir sayıyla anlatılamayacağını gösterir; yıllık ortalama sıcaklıkları benzer iki kentin yaz-kış farkları çok farklı olabilir.
Cevap A.`
},
{
  id: "fen-ik-052",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir il afet ve planlama biriminde şu üç karar beklemektedir:
I. Yarın okulların tatil edilip edilmeyeceği
II. Elli yıl hizmet verecek bir barajın taşkın kapasitesinin belirlenmesi
III. Otuz yıl boyunca kullanılacak bir otelin hangi aylarda dolu olacağının planlanması
**Buna göre bu kararlardan hangileri, öncelikle uzun yıllara ait iklim verilerine dayanılarak verilmelidir?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve III",
    "II ve III"
  ],
  dogru: 3,
  hatalar: [
    "Yarına ait kararı iklim verisiyle verme: tatil kararı ertesi günün hava tahminine bağlıdır.",
    "III'ü dışarıda bırakma: otelin otuz yıl boyunca hangi aylarda dolu olacağı, bölgenin mevsimsel düzenine, yani iklime bağlıdır.",
    "Yarına ait kararı iklim verisiyle birlikte sayma: I. karar kısa süreli bir hava tahminine dayanır.",
    null
  ],
  aciklama: `Adım 1: Kararın etkisinin kaç yıl süreceğine bak. Hava olaylarının tahmini kısa vadeli, iklim verisi uzun vadeli kararlar içindir.
Adım 2: I. karar "yarın" ile ilgilidir; ertesi günün hava tahminine bağlıdır.
Adım 3: II. karar elli yıl, III. karar otuz yıl hizmet verecek yatırımlarla ilgilidir. Böyle kararlar, bölgenin yıllar boyunca nasıl bir düzen izlediğini bilmeyi gerektirir; yani uzun yıllara ait iklim verisi ister.
Adım 4: Öyleyse iklim verilerine dayanılması gereken kararlar II ve III'tür.
Sağlama: Kararın etkisi kaç yıl sürecekse veri de o ölçekte olmalıdır.
Cevap D.`
},
{
  id: "fen-ik-053",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir şirket, 25 yıl boyunca çalıştıracağı bir güneş enerjisi santralini kuracağı kenti seçecektir. Tabloda dört kente ait iki bilgi verilmiştir (güneşli gün: gökyüzünün büyük ölçüde açık olduğu gün).
**Buna göre şirketin hangi kenti seçmesi en uygundur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Kent</th><th>Yıllık ortalama güneşli gün sayısı (1991-2020)</th><th>Önümüzdeki hafta için tahmin edilen güneşli gün sayısı</th></tr><tr><td>Aksu</td><td>260</td><td>7</td></tr><tr><td>Bayır</td><td>290</td><td>6</td></tr><tr><td>Cevizli</td><td>320</td><td>3</td></tr><tr><td>Doruk</td><td>300</td><td>5</td></tr></table>",
  secenekler: [
    "Aksu",
    "Bayır",
    "Cevizli",
    "Doruk"
  ],
  dogru: 2,
  hatalar: [
    "Kısa süreli tahmini uzun vadeli karara temel yapma: Aksu önümüzdeki hafta en güneşli kenttir, ama yıllık ortalaması en düşüktür.",
    "Hafta tahminine ve ortalamaya ortada değer verme: Bayır ne uzun yıllık ortalamada ne de karar ölçütünde en iyi değerdedir.",
    null,
    "Uzun yıllık ortalamayı doğru kullanıp en yüksek değeri atlama: Doruk'ta 300 gün, Cevizli'de 320 gün vardır."
  ],
  aciklama: `Adım 1: Kararın süresine bak: santral 25 yıl çalışacak. Uzun süreli bir karar için bölgenin genel düzeni, yani iklim bilgisi gerekir.
Adım 2: Tablonun iki sütununu ayır. "Yıllık ortalama güneşli gün sayısı (1991-2020)" otuz yıllık bir ortalamadır; iklim verisidir. "Önümüzdeki hafta için tahmin" ise bir haftalık hava tahminidir.
Adım 3: Karar için iklim verisi olan birinci sütunu kullan. En yüksek değer Cevizli'de, 320 gündür.
Sık yapılan hata: Önümüzdeki haftanın tahminine bakıp en güneşli kenti seçmek. Bir haftalık tahmin, 25 yıllık bir yatırım için ölçüt olamaz.
Cevap C.`
},
{
  id: "fen-ik-054",
  kazanim: "F.8.1.2.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bir araştırma uydusu hem bulut görüntülerini dakikalar içinde yer istasyonlarına göndermekte hem de bir buzulun kapladığı alanı elli yıldır düzenli olarak kaydetmektedir. Bu uydu verileriyle ilgili üç yargı verilmiştir:
I. Uydu ile yapılan her ölçüm iklim verisidir.
II. Uydunun elli yıllık buzul alanı kayıtlarını inceleyen uzman bir iklim bilimcidir.
III. Uydunun bugünkü bulut görüntülerinden yarın sis olup olmayacağını kestiren uzman bir meteorologdur.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 2,
  hatalar: [
    "Aygıtı iklim verisinin ölçütü sanma: iklim verisini belirleyen aygıt değil, kaydın süresidir; bugünkü bulut görüntüsü tek bir ana aittir.",
    "I'i doğru sayma ve II'yi gözden kaçırma: elli yıllık kayıtların incelenmesi iklim bilimcinin işidir.",
    null,
    "I'i de doğru sayma: yalnızca II ve III doğrudur; uydu ölçümlerinin her biri iklim verisi değildir."
  ],
  aciklama: `Adım 1: I. yargıyı denetle. Uydu gelişmiş bir aygıttır, ama bir ölçümün iklim verisi sayılması aygıta değil kaydın süresine bağlıdır. Bugünkü bulut görüntüsü tek bir ana aittir. I yanlıştır.
Adım 2: II. yargıyı denetle. Elli yıllık düzenli kayıtları inceleyen uzman, uzun dönemli bir değişimle ilgilenir; bu bir iklim bilimcidir. II doğrudur.
Adım 3: III. yargıyı denetle. Bugünkü görüntülerden yarının sisini kestirmek kısa süreli bir hava tahminidir; meteorologun işidir. III doğrudur.
Sağlama: Aynı uydu görüntüleri elli yıl boyunca biriktirilse, onlar da iklim bilimcinin verisi olurdu. Ayıran şey aygıt değil, zamandır.
Sonuç: II ve III doğrudur.
Cevap C.`
},
{
  id: "fen-ik-055",
  kazanim: "F.8.1.2.2",
  kademe: 0,
  zorluk: 3,
  soru: `Bir lise öğrencisi, bir araştırma enstitüsünde çalışan iklim bilimciyle görüşmüş ve aldığı notları sınıfta okumuştur. Öğretmen, notlardan yalnızca birinin hatalı olduğunu söylemiştir.
**Buna göre öğretmenin hatalı bulduğu not aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "İklim bilimci, bir bölgede yıllarca tutulan yağış kayıtlarını karşılaştırabilir.",
    "Meteorolog kısa süreli hava durumunu, iklim bilimci uzun yıllık eğilimleri inceler.",
    "İklim bilimci, iklimdeki değişimi dönem ortalamalarını karşılaştırarak araştırır.",
    "İklim bilimci, ertesi günün hava durumunu tahmin edip haber bültenlerinde duyurur."
  ],
  dogru: 3,
  hatalar: [
    "Doğru bilgiyi hatalı sanma: yıllarca tutulan yağış kayıtlarını karşılaştırmak iklim bilimcinin çalışma biçimidir.",
    "Doğru bilgiyi hatalı sanma: kısa süreli hava durumu meteorologun, uzun yıllık eğilimler iklim bilimcinin alanıdır.",
    "Doğru bilgiyi hatalı sanma: dönem ortalamalarını karşılaştırmak iklimdeki değişimi araştırmanın yoludur.",
    null
  ],
  aciklama: `Adım 1: Soru hatalı notu soruyor; öyleyse doğru olanları eleyip yanlışı bulacaksın.
Adım 2: İklim bilimci, uzun yıllara ait yağış ve sıcaklık kayıtlarını karşılaştırır ve dönem ortalamalarındaki değişimi araştırır. Meteorolog ise kısa süreli hava durumunu inceler. İlk üç not bu bilgilerle uyumludur.
Adım 3: "Ertesi günün hava durumunu tahmin edip duyurur" ifadesi yanlıştır; kısa süreli tahmin yapıp duyurmak meteorologun işidir. İklim bilimci uzun yıllık verilerle çalışır.
Sık yapılan hata: İki uzmanı karıştırmak. Kısa süreli tahmin meteorologa, uzun dönemli eğilim iklim bilimciye aittir.
Cevap D.`
},
{
  id: "fen-ik-056",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir kayak tesisinin yöneticisi, tesisin bulunduğu dağın onar yıllık dönemlere ait ocak ayı ortalama sıcaklığını ve yılda kar örtülü gün sayısını tabloya işlemiştir. Yönetici, tesisin gelecek yıllardaki işletme planını bu verilere göre yapacaktır.
**Buna göre aşağıdakilerden hangisi tablodan çıkarılabilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Dönem</th><th>Ocak ayı ortalama sıcaklığı</th><th>Yılda kar örtülü gün sayısı</th></tr><tr><td>1981-1990</td><td>−4,2 °C</td><td>118</td></tr><tr><td>1991-2000</td><td>−3,6 °C</td><td>112</td></tr><tr><td>2001-2010</td><td>−2,9 °C</td><td>104</td></tr><tr><td>2011-2020</td><td>−2,1 °C</td><td>97</td></tr></table>",
  secenekler: [
    "Ocak sıcaklığı her dönemde artmış, kar örtülü gün sayısı her dönemde azalmıştır.",
    "Kar örtülü gün sayısındaki azalma her on yıllık dönemde birbirine eşit olmuştur.",
    "Ocak ayı sıcaklığındaki artış, kar örtülü gün sayısındaki azalmanın tek nedenidir.",
    "Kar örtülü gün sayısı 2011-2020 döneminde 1981-1990 dönemine göre 31 gün azalmıştır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Azalmaların eşit olduğunu varsayma: azalmalar 118 → 112 (6 gün), 112 → 104 (8 gün), 104 → 97 (7 gün) olarak farklıdır.",
    "İlişkiyi tek nedene bağlama: tablo iki büyüklüğün birlikte değiştiğini gösterir; sıcaklığın tek neden olduğunu kanıtlamaz.",
    "Farkı yanlış hesaplama: 118 − 97 = 21 gündür, 31 gün değildir."
  ],
  aciklama: `Adım 1: Tablonun onar yıllık dönemleri kapsadığını fark et. Dönem değerleri iklim bilgisi verir.
Adım 2: Ocak ayı sıcaklığı −4,2; −3,6; −2,9; −2,1 °C olarak sıralanır; değerler dönem dönem artmıştır. Kar örtülü gün sayısı 118, 112, 104, 97 olarak azalmıştır. Birinci yargı tabloyla uyumludur.
Adım 3: Diğer yargıları ele. Azalmalar 6, 8 ve 7 gündür; eşit değildir. 2011-2020 ile 1981-1990 arasındaki fark 118 − 97 = 21 gündür. İki büyüklüğün birlikte değişmesi, birinin diğerinin tek nedeni olduğunu da kanıtlamaz.
Sık yapılan hata: Birlikte değişen iki büyüklükten birini diğerinin tek nedeni saymak. Tablo yalnızca birlikte değiştiklerini gösterir.
Cevap A.`
},
{
  id: "fen-ik-057",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 3,
  soru: `Üzüm bağı kurmak isteyen bir çiftçi, bağı kuracağı yamacın iklim koşullarını değerlendirmek istemektedir. Çiftçi şu bilgilere ulaşabilmektedir:
I. Bölgenin 1991-2020 dönemi yıllık ortalama don günü sayısı
II. Son otuz yılın nisan ayı ortalama sıcaklıkları
III. Önümüzdeki hafta için yağış beklentisi
**Buna göre çiftçinin yamacın iklim koşullarını değerlendirirken kullanması gereken bilgiler hangileridir?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve II",
    "I ve III"
  ],
  dogru: 2,
  hatalar: [
    "II'yi dışarıda bırakma: son otuz yılın nisan ayı ortalamaları da bir iklim verisidir.",
    "I'i dışarıda bırakma: yıllık ortalama don günü sayısı da uzun yıllık kayıtlardan elde edilen bir iklim verisidir.",
    null,
    "Hava tahminini iklim verisi sayma: önümüzdeki haftanın yağış beklentisi bağın uzun yıllık koşullarını değerlendirmeye yaramaz."
  ],
  aciklama: `Adım 1: Kararın niteliğine bak: bir bağ uzun yıllar kullanılacaktır. Bu yüzden yamacın uzun yıllara ait genel koşulları, yani iklimi önemlidir.
Adım 2: I. bilgi 1991-2020 dönemine, II. bilgi son otuz yıla dayanır; ikisi de uzun yıllık kayıtlardır ve iklim verisidir.
Adım 3: III. bilgi yalnızca önümüzdeki haftayı kapsar; bir hava tahminidir. Haftalık yağış beklentisi bağın yıllar boyunca karşılaşacağı koşulları anlatmaz.
Adım 4: Kullanılması gereken bilgiler I ve II'dir.
Sağlama: III. bilgi ekim ya da hasat günü gibi yakın bir iş için yararlı olabilir, ama bağın kurulup kurulmayacağına karar vermede iklim verisi esastır.
Cevap C.`
},
{
  id: "fen-ik-058",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 3,
  soru: `Tabloda Gökçeli ilçesinin iki ayrı otuz yıllık dönem için hesaplanmış ortalama değerleri verilmiştir.
I. İki dönem arasında yıllık toplam yağış önemli ölçüde artmıştır.
II. İki dönem arasında yıllık ortalama don günü sayısı 8 gün azalmıştır.
III. İki dönemin yıllık ortalama sıcaklıkları arasındaki fark 1 °C'den azdır.
**Buna göre bu yargılardan hangileri tablodan çıkarılabilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Dönem</th><th>Yıllık ortalama sıcaklık</th><th>Yıllık ortalama yağış</th><th>Yıllık ortalama don günü sayısı</th></tr><tr><td>1961-1990</td><td>9,8 °C</td><td>720 mm</td><td>74 gün</td></tr><tr><td>1991-2020</td><td>10,6 °C</td><td>705 mm</td><td>66 gün</td></tr></table>",
  secenekler: [
    "Yalnız II",
    "I ve II",
    "I ve III",
    "II ve III"
  ],
  dogru: 3,
  hatalar: [
    "Doğru yargılardan birini dışarıda bırakma: III de doğrudur; 10,6 − 9,8 = 0,8 °C, yani 1 °C'den azdır.",
    "Yağışın arttığını sanma: yağış 720 mm'den 705 mm'ye inmiştir, I yanlıştır. Ayrıca III de doğru olduğu hâlde dışarıda kalmıştır.",
    "Yağış sütununu ters okuma: I yağışın arttığını ileri sürer ama yağış azalmıştır; ayrıca doğru olan II dışarıda kalmıştır.",
    null
  ],
  aciklama: `Adım 1: Tablodaki değerlerin iki otuz yıllık dönemin ortalaması olduğunu belirle; yani tablo iklim bilgisi verir.
Adım 2: I. yargıyı denetle. Yağış 720 mm'den 705 mm'ye inmiştir; artmamış, azalmıştır. I yanlıştır.
Adım 3: II. yargıyı denetle. Don günü sayısı 74'ten 66'ya inmiştir; 74 − 66 = 8 gün azalmıştır. II doğrudur.
Adım 4: III. yargıyı denetle. Sıcaklık farkı 10,6 − 9,8 = 0,8 °C'dir; bu değer 1 °C'den küçüktür. III doğrudur.
Sağlama: Tablodaki her değer bir dönem ortalamasıdır; bu yüzden doğru yargılar dönemler arasındaki farklar üzerine kuruludur, tek tek yıllar üzerine değil.
Sonuç: II ve III çıkarılabilir.
Cevap D.`
},
{
  id: "fen-ik-059",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir belediyenin çevre raporunda şu bilgiler yer almaktadır: "Kentin 1991-2020 dönemi yıllık ortalama sıcaklığı 13,2 °C, yıllık ortalama yağışı 520 mm'dir. 2021 yazında ise üç günlük bir sıcak hava dalgasında sıcaklık 41 °C'ye çıkmıştır."
I. 13,2 °C ve 520 mm değerleri kentin iklimi hakkında bilgi verir.
II. 41 °C'lik ölçüm, kentin iklimi hakkında tek başına bilgi vermez.
III. 2021 yazındaki sıcak hava dalgası kentin iklimini kalıcı olarak değiştirmiştir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: null,
  secenekler: [
    "I ve II",
    "I ve III",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Kısa süreli bir olayı kalıcı değişim sanma: üç günlük sıcak hava dalgası bir hava olayıdır; iklimin kalıcı değiştiğini kanıtlamaz.",
    "II'yi doğru bulup I'i dışarıda bırakma: otuz yıllık ortalamalar kentin iklimi hakkında bilgi verir. Ayrıca III yanlıştır.",
    "Üç yargıyı birden doğru sayma: III. yargı üç günlük bir olaydan iklimin kalıcı olarak değiştiği sonucunu çıkarır."
  ],
  aciklama: `Adım 1: I. yargıyı denetle. 1991-2020 dönemi ortalamaları otuz yıllık kayda dayanır; kentin iklimi hakkında bilgi verir. I doğrudur.
Adım 2: II. yargıyı denetle. 41 °C, üç günlük bir olayda ölçülmüştür. Tek bir olay kentin iklimini belirlemez. II doğrudur.
Adım 3: III. yargıyı denetle. İklimin değiştiğini söylemek için farklı dönemlerin ortalamaları karşılaştırılmalıdır. Üç günlük bir sıcak hava dalgası iklimi kalıcı olarak değiştirmiş olamaz. III yanlıştır.
Sağlama: Aynı kentte ertesi yaz sıcaklık 33 °C'ye çıksaydı kentin iklimi "yeniden değişmiş" olmazdı; çünkü tek tek olaylar iklim değil, hava olayıdır.
Sonuç: I ve II doğrudur.
Cevap A.`
},
{
  id: "fen-ik-060",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 3,
  soru: `Tabloda dört kentin iki ayrı otuz yıllık dönem için hesaplanmış yıllık ortalama yağış miktarları verilmiştir. Bir araştırmacı, yağışın hangi kentte oransal olarak (yüzde olarak) en çok arttığını belirlemek istemektedir.
**Buna göre bu kent aşağıdakilerden hangisidir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Kent</th><th>1961-1990 (mm)</th><th>1991-2020 (mm)</th></tr><tr><td>Bozova</td><td>800</td><td>880</td></tr><tr><td>Çınarlı</td><td>450</td><td>520</td></tr><tr><td>Dereköy</td><td>1100</td><td>1170</td></tr><tr><td>Elmalık</td><td>300</td><td>345</td></tr></table>",
  secenekler: [
    "Bozova",
    "Çınarlı",
    "Dereköy",
    "Elmalık"
  ],
  dogru: 1,
  hatalar: [
    "Miktar artışını oran artışı sanma: Bozova'da artış 80 mm ile en büyüktür, ama 800 mm'ye oranı yalnızca %10'dur.",
    null,
    "Aynı artışı aynı oran sanma: Dereköy'de de artış 70 mm'dir, ama 1100 mm'ye oranı yaklaşık %6,4'tür.",
    "Yaklaşık hesaplamada yakın değeri seçme: Elmalık'ta artış 45 ÷ 300 = %15'tir; Çınarlı'nın 70 ÷ 450 ≈ %15,6 oranı biraz daha büyüktür."
  ],
  aciklama: `Oransal artış, artış miktarının ilk değere bölünmesiyle bulunur.
Adım 1: Her kentte artışı bul. Bozova 80 mm, Çınarlı 70 mm, Dereköy 70 mm, Elmalık 45 mm.
Adım 2: Her artışı kentin ilk değerine böl. Bozova: 80 ÷ 800 = %10. Çınarlı: 70 ÷ 450 ≈ %15,6. Dereköy: 70 ÷ 1100 ≈ %6,4. Elmalık: 45 ÷ 300 = %15.
Adım 3: En büyük oran Çınarlı'dadır. Miktar olarak en çok artan kent Bozova olsa da soru oransal artışı sorar.
Sık yapılan hata: Yağışı en çok artan kenti artış miktarına bakarak seçmek. İlk değerler farklı olduğunda artışları ancak oranla karşılaştırabilirsin.
Cevap B.`
},
{
  id: "fen-ik-061",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 3,
  soru: `Tabloda aynı ilin kıyı ve yayla istasyonlarında temmuz ayına ait 1991-2020 dönemi ortalamaları ile 2022 temmuzunda ölçülen değerler verilmiştir. Bir fen kulübü, 2022 temmuzunun uzun yıllık ortalamalara göre nasıl geçtiğini yorumlamak istemektedir.
**Buna göre aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>İstasyon</th><th>Sıcaklık, 1991-2020 ortalaması</th><th>Sıcaklık, 2022</th><th>Yağış, 1991-2020 ortalaması</th><th>Yağış, 2022</th></tr><tr><td>Kıyı</td><td>28 °C</td><td>30 °C</td><td>12 mm</td><td>4 mm</td></tr><tr><td>Yayla</td><td>21 °C</td><td>22 °C</td><td>35 mm</td><td>41 mm</td></tr></table>",
  secenekler: [
    "Kıyı istasyonunda 2022 temmuz yağışı, uzun yıllık temmuz ortalamasından fazladır.",
    "İki istasyonda da 2022 temmuz sıcaklığı, uzun yıllık temmuz ortalamasının üzerindedir.",
    "2022 temmuz ölçümleri, iki istasyonun da iklim tipinin değiştiğini kanıtlar.",
    "Kıyı istasyonunun 2022 temmuz sıcaklığı, yayla istasyonunun uzun yıllık ortalamasından düşüktür."
  ],
  dogru: 1,
  hatalar: [
    "Yağış sütunlarını ters okuma: kıyıda 2022 temmuz yağışı 4 mm, uzun yıllık ortalama ise 12 mm'dir; 2022 değeri ortalamanın altındadır.",
    null,
    "Tek yılı iklim değişimi sanma: bir temmuzun ortalamadan sapması iklim tipinin değiştiğini kanıtlamaz; bunun için farklı dönemlerin ortalamaları karşılaştırılır.",
    "İstasyonları karıştırma: kıyının 2022 sıcaklığı 30 °C, yaylanın uzun yıllık ortalaması 21 °C'dir; 30 değeri 21'den büyüktür."
  ],
  aciklama: `Adım 1: Tablodaki iki tür değeri ayır. "1991-2020 ortalaması" sütunları otuz yıllık iklim bilgisidir; "2022" sütunları tek bir temmuzun, yani o yılın hava durumunun ölçümüdür.
Adım 2: Sıcaklığı karşılaştır. Kıyıda 30 °C > 28 °C, yaylada 22 °C > 21 °C; iki istasyonda da 2022 temmuzu ortalamadan sıcak geçmiştir.
Adım 3: Diğer yargıları denetle. Kıyıda 2022 yağışı 4 mm iken ortalama 12 mm'dir; yağış ortalamadan azdır. Kıyının 2022 sıcaklığı (30 °C), yaylanın ortalamasından (21 °C) yüksektir.
Adım 4: Tek bir yılın ortalamadan sapması iklimin değiştiğini göstermez; iklim yargısı için dönem ortalamaları karşılaştırılır.
Sağlama: Aynı istasyonlarda 2023 temmuzu ortalamanın altında çıksaydı bunu da iklim değişimi saymazdık; tek yıl iklimi belirlemez.
Cevap B.`
},
{
  id: "fen-ik-062",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir müzik festivalinin organizatörü, açık havada yapılacak festival için yaz aylarından birini seçecektir. Organizatör; ayın yağışlı gün sayısı uzun yıllar ortalamasının en fazla 3 olmasını ve ayın ortalama en yüksek sıcaklığının 30 °C'yi aşmamasını istemektedir. Tabloda 1991-2020 dönemine ait değerler verilmiştir.
**Buna göre festival hangi ayda düzenlenmelidir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Ay</th><th>Ortalama yağışlı gün sayısı</th><th>Ortalama en yüksek sıcaklık</th></tr><tr><td>Haziran</td><td>7</td><td>26 °C</td></tr><tr><td>Temmuz</td><td>1</td><td>34 °C</td></tr><tr><td>Ağustos</td><td>3</td><td>30 °C</td></tr><tr><td>Eylül</td><td>4</td><td>24 °C</td></tr></table>",
  secenekler: [
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül"
  ],
  dogru: 2,
  hatalar: [
    "Yalnız sıcaklığa bakma: haziranda sıcaklık uygun (26 °C) ama yağışlı gün sayısı 7'dir, 3'ten fazladır.",
    "Yalnız yağışa bakma: temmuzda yağışlı gün sayısı 1 ile en azdır, ama sıcaklık 34 °C ile 30 °C'yi aşar.",
    null,
    "Yalnız sıcaklığa bakma: eylülde sıcaklık 24 °C ile uygundur, ama yağışlı gün sayısı 4'tür, 3'ten fazladır."
  ],
  aciklama: `Adım 1: Tablonun 1991-2020 ortalamaları verdiğini fark et; seçim iklim verisiyle yapılacak.
Adım 2: İki koşulu birlikte uygula: yağışlı gün sayısı ≤ 3 ve ortalama en yüksek sıcaklık ≤ 30 °C.
Adım 3: Haziran: 7 gün (koşul sağlanmaz). Temmuz: 34 °C (sağlanmaz). Ağustos: 3 gün ve 30 °C (iki sınır değer de koşulu sağlar). Eylül: 4 gün (sağlanmaz).
Adım 4: İki koşulu birlikte sağlayan tek ay ağustostur.
Sık yapılan hata: Sınır değerleri dışarıda bırakmak. "En fazla 3" ve "aşmamasını" ifadeleri 3 ve 30 °C değerlerini de kapsar.
Cevap C.`
},
{
  id: "fen-ik-063",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 3,
  soru: `Bir yerel gazetenin hava köşesinde şu dört cümle yer almıştır:
I. Bölge, uzun yıllardır yaz aylarında az yağış alan bir iklime sahiptir.
II. Önümüzdeki üç gün kuzeyden esen rüzgârın hızı artacak.
III. Cumartesi sabahı vadilerde yoğun sis bekleniyor.
IV. Son otuz yılın kış ortalaması, önceki otuz yıla göre 1,5 °C yüksek çıktı.
**Buna göre numaralanmış cümlelerden hangileri iklim bilgisi verir?**`,
  gorsel: null,
  secenekler: [
    "I ve II",
    "I ve IV",
    "II ve III",
    "III ve IV"
  ],
  dogru: 1,
  hatalar: [
    "Rüzgâr tahminini iklim bilgisi sanma: II. cümle yalnızca önümüzdeki üç günü kapsar.",
    null,
    "Kısa süreli iki tahmini iklim sanma: II üç günlük rüzgâr, III cumartesi sabahı sis tahminidir.",
    "Sis tahminini iklim bilgisi sayıp I'i gözden kaçırma: III yalnız cumartesi sabahını anlatır; I ise yıllarca tekrarlanan bir durumdur."
  ],
  aciklama: `Adım 1: Her cümlenin kapsadığı süreyi bul.
Adım 2: I. cümlede "uzun yıllardır" ifadesi var; yıllarca tekrarlanan bir durumu anlatır. İklim bilgisidir.
Adım 3: II. cümle "önümüzdeki üç gün", III. cümle "cumartesi sabahı" ifadesini taşır. İkisi de kısa süreli hava tahminidir.
Adım 4: IV. cümle, iki ayrı otuz yıllık dönemin kış ortalamalarını karşılaştırır. Bu, iklimin değişimini anlatan bir iklim bilgisidir.
Adım 5: İklim bilgisi veren cümleler I ve IV'tür.
Sağlama: I ve IV on yıllar sonra da geçerliliğini korur; II ve III birkaç gün sonra eskir.
Cevap B.`
},
{
  id: "fen-ik-064",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 4,
  soru: `Tabloda bir ilin yirmişer yıllık dönemlere ait yıllık ortalama sıcaklığı ile yılda en yüksek sıcaklığın 35 °C'yi aştığı gün sayısının dönem ortalaması verilmiştir.
I. Dönemler ilerledikçe iki büyüklük de artmıştır.
II. Sıcak gün sayısındaki artış, her yirmi yıllık aralıkta bir öncekinden büyüktür.
III. Sıcak gün sayısındaki artışın tek nedeni yıllık ortalama sıcaklığın yükselmesidir.
IV. 1981-2000 ile 2001-2020 dönemleri arasındaki sıcak gün artışı, 1961-1980 ile 1981-2000 dönemleri arasındaki artışın iki katından fazladır. Bir fen kulübü, tabloyu panoya asmadan önce hangi yargıların tablodan gerçekten çıkarılabildiğini tartışmıştır.
**Buna göre bu yargılardan hangileri tablodan çıkarılabilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Dönem</th><th>Yıllık ortalama sıcaklık (°C)</th><th>Yılda 35 °C'yi aşan gün sayısı</th></tr><tr><td>1941-1960</td><td>14,2</td><td>9</td></tr><tr><td>1961-1980</td><td>14,4</td><td>13</td></tr><tr><td>1981-2000</td><td>14,7</td><td>19</td></tr><tr><td>2001-2020</td><td>15,2</td><td>32</td></tr></table>",
  secenekler: [
    "I ve II",
    "I, II ve IV",
    "I, III ve IV",
    "II, III ve IV"
  ],
  dogru: 1,
  hatalar: [
    "IV'ü hesaplamama: son iki dönem arasındaki artış 32 − 19 = 13 gün, ikinci ve üçüncü dönem arasındaki artış 19 − 13 = 6 gündür; 13 > 2 × 6 = 12 olduğundan IV de doğrudur.",
    null,
    "Birlikte değişimi neden-sonuç sanma: tablo iki büyüklüğün birlikte arttığını gösterir; sıcak gün artışının tek nedeninin ortalama sıcaklık olduğunu kanıtlamaz.",
    "I'i dışarıda bırakıp III'ü ekleme: I doğrudur (iki sütun da dönem dönem artmıştır) ve III tablodan çıkarılamaz."
  ],
  aciklama: `Adım 1: Artışları hesapla. Sıcak gün sayısı: 13 − 9 = 4, 19 − 13 = 6, 32 − 19 = 13 gün. Ortalama sıcaklık: 0,2; 0,3 ve 0,5 °C.
Adım 2: I. yargıyı denetle. Her iki sütun da dört dönemde art arda büyür; I doğrudur.
Adım 3: II. yargıyı denetle. 4 < 6 < 13 olduğundan sıcak gün artışı her aralıkta bir öncekinden büyüktür; II doğrudur.
Adım 4: III. yargıyı denetle. Tablo iki büyüklüğün birlikte arttığını gösterir; sıcak gün artışının tek nedeninin ortalama sıcaklık olduğunu göstermez. III çıkarılamaz.
Adım 5: IV. yargıyı denetle. İkinci ve üçüncü dönem arasındaki artışın iki katı 2 × 6 = 12 gündür; son iki dönem arasındaki artış 13 gün olduğundan 12'den büyüktür. IV doğrudur.
Sonuç: I, II ve IV tablodan çıkarılabilir.
Sık yapılan hata: İki sütun birlikte değişiyor diye birinin diğerinin tek nedeni olduğunu söylemek.
Cevap B.`
},
{
  id: "fen-ik-065",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 4,
  soru: `Bir ilçenin nisan ayı yağışının 1991-2020 dönemi uzun yıllar ortalaması 62 mm'dir. Bir fen kulübü, 2019-2023 yıllarındaki beş nisan ayının yağış ortalamasını bu uzun yıllar ortalamasıyla karşılaştırıp bir yorum yazacaktır. Tabloda 2023 yılının değeri henüz belli değildir.
**Buna göre 2023 nisanında en az kaç mm yağış düşerse beş yıllık ortalama, uzun yıllar ortalamasına eşit ya da ondan büyük olur ve bu beş yıllık ortalama için aşağıdakilerden hangisi söylenebilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Yıl</th><th>Nisan ayı yağışı (mm)</th></tr><tr><td>2019</td><td>55</td></tr><tr><td>2020</td><td>72</td></tr><tr><td>2021</td><td>48</td></tr><tr><td>2022</td><td>66</td></tr><tr><td>2023</td><td>?</td></tr></table>",
  secenekler: [
    "62 mm; beş yıllık ortalama, ilçenin iklimini belirlemek için kısa bir dönemdir.",
    "66 mm; beş yıllık ortalama, ilçenin iklimini belirlemek için kısa bir dönemdir.",
    "69 mm; beş yıllık ortalama, ilçenin iklimini belirlemek için kısa bir dönemdir.",
    "69 mm; beş yıllık ortalama, ilçenin iklimini belirlemek için yeterli bir dönemdir."
  ],
  dogru: 2,
  hatalar: [
    "Hedef ortalamayı beşinci yıla yazma: dört yıl ortalamanın altında kaldığı için beşinci yıl 62 mm'den fazla olmak zorundadır (62 mm ile toplam 303 mm, ortalama 60,6 mm eder).",
    "Yakın değeri deneme: 241 + 66 = 307, ortalaması 307 ÷ 5 = 61,4 mm eder; 62 mm'ye ulaşmaz.",
    null,
    "Doğru hesabı yanlış yorumla birleştirme: 69 mm doğrudur, ama iklim için en az otuz yıllık kayıt aranır; beş yıl yeterli değildir."
  ],
  aciklama: `Ortalama, toplamın değer sayısına bölünmesiyle bulunur.
Adım 1: Beş yıllık ortalamanın en az 62 mm olması için toplam yağışın en az 5 × 62 = 310 mm olması gerekir.
Adım 2: İlk dört yılın toplamını bul: 55 + 72 + 48 + 66 = 241 mm.
Adım 3: 2023 yılının yağışı en az 310 − 241 = 69 mm olmalıdır. Sağlama: 241 + 69 = 310 ve 310 ÷ 5 = 62 mm; 68 mm olsaydı toplam 309, ortalama 61,8 mm kalırdı.
Adım 4: Yorumu seç. İklim, en az otuz yıllık kayıtla belirlenir. Beş yıllık ortalama bu süreden çok kısadır; yani ilçenin iklimini belirlemek için kısa bir dönemdir.
Sık yapılan hata: Hesabı doğru yapıp yorumu atlamak. Beş yıllık ortalama bir karşılaştırma sağlar ama iklim bilgisi yerine geçmez.
Cevap C.`
},
{
  id: "fen-ik-066",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 4,
  soru: `Bir iklim bilimci, bir bölgenin ortalama sıcaklığını iklim verisi olarak kullanabilmek için ölçüm kaydının hem en az 30 yıl sürmesini hem de bu sürede kesintisiz tutulmuş olmasını istemektedir. Tabloda dört meteoroloji istasyonunun kayıt bilgileri verilmiştir. Bilim insanı yalnızca toplam yıl sayısına değil, kayıtlardaki boşluklara da bakmaktadır; çünkü eksik yıllar ortalamayı o dönemin gerçek durumundan uzaklaştırabilir.
**Buna göre bilim insanı hangi istasyonun kaydını iklim verisi olarak kullanabilir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>İstasyon</th><th>Ölçüm yapılan yıllar</th></tr><tr><td>1. istasyon</td><td>1998-2023 (kesintisiz)</td></tr><tr><td>2. istasyon</td><td>1990-2023 (2001-2005 arasında ölçüm yapılmamıştır)</td></tr><tr><td>3. istasyon</td><td>2001-2023 (kesintisiz)</td></tr><tr><td>4. istasyon</td><td>1982-2023 (kesintisiz)</td></tr></table>",
  secenekler: [
    "1. istasyon",
    "2. istasyon",
    "3. istasyon",
    "4. istasyon"
  ],
  dogru: 3,
  hatalar: [
    "Kayıt süresini hesaplamama: 1998-2023 arası 26 yıldır, 30 yıldan kısadır.",
    "Toplam yıl aralığına bakıp kesintiyi görmeme: 1990-2023 aralığı 34 yıl olsa da 2001-2005 arasında ölçüm yoktur; kesintisiz en uzun parça 2006-2023 arası 18 yıldır.",
    "Kayıt süresini hesaplamama: 2001-2023 arası 23 yıldır, 30 yıldan kısadır.",
    null
  ],
  aciklama: `İklim verisi sayılabilmesi için ölçüm uzun yıllar boyunca düzenli ve kesintisiz toplanmalı, ortalama için en az 30 yıllık kayıt aranmalıdır.
Adım 1: 1. istasyonun kaydı 1998-2023, yani 26 yıldır. Kesintisizdir ama 30 yıldan kısadır.
Adım 2: 2. istasyonun aralığı 34 yıl görünür; ama 2001-2005 arasında ölçüm yapılmamıştır. Kayıt kesintisizdir diyemeyiz. Kesintisiz parçaları 1990-2000 (11 yıl) ve 2006-2023 (18 yıl) olup ikisi de 30 yıldan kısadır.
Adım 3: 3. istasyonun kaydı 2001-2023, yani 23 yıldır. Kısadır.
Adım 4: 4. istasyonun kaydı 1982-2023, yani 42 yıldır ve kesintisizdir. İki ölçütü birlikte sağlayan tek istasyon budur.
Sık yapılan hata: İlk ve son yıla bakıp aradaki boşluğu görmemek.
Cevap D.`
},
{
  id: "fen-ik-067",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 4,
  soru: `Bir kentin ocak ayı ortalama sıcaklığı için 1991-2020 dönemi uzun yıllar ortalaması 2 °C'dir. Meteoroloji kurumu, bir ocak ayını ortalama sıcaklığı uzun yıllar ortalamasından en fazla 3 °C farklı (sınır değerler dâhil) olduğunda "normal" olarak sınıflandırmaktadır. Bu yıl ocak ayının ortalama sıcaklığı bir tam sayı (°C) olarak raporlanacak ve −3 °C ile 6 °C arasında (bu değerler dâhil) çıkacaktır.
**Buna göre bu ocak ayının "normal" sayılması için ortalama sıcaklık kaç farklı tam sayı değeri alabilir?**`,
  gorsel: null,
  secenekler: [
    "5",
    "6",
    "7",
    "8"
  ],
  dogru: 2,
  hatalar: [
    "Uç değerleri dışarıda bırakma: sınır değerler dâhil olduğundan −1 °C ve 5 °C de normal sayılır; yalnızca 0'dan 4'e kadar saymak 5 değer verir.",
    "Aralığın uzunluğunu değer sayısı sanma: 5 − (−1) = 6 farktır; uçlar dâhil olduğunda değer sayısı farktan bir fazladır.",
    null,
    "Sınır dışındaki bir değeri sayma: 6 °C, ortalamadan 4 °C farklıdır ve normal sayılmaz; aralık −1 ile 5 arasındadır."
  ],
  aciklama: `Adım 1: "Normal" olma koşulunu yaz: ortalama sıcaklık, 2 °C'den en fazla 3 °C farklı olmalı. Yani 2 − 3 = −1 °C ile 2 + 3 = 5 °C arasında (uçlar dâhil).
Adım 2: Bu aralığı ölçülebilecek aralıkla (−3 ile 6 arası) karşılaştır. [−1, 5] aralığı, [−3, 6] aralığının içindedir; yani sınırlayıcı olan "normal" koşuludur.
Adım 3: [−1, 5] aralığındaki tam sayıları say: −1, 0, 1, 2, 3, 4, 5. Toplam 7 değer.
Sağlama: Uçları dâhil aralıktaki tam sayı sayısı, fark + 1 ile bulunur: (5 − (−1)) + 1 = 7.
Sık yapılan hata: −3 ile 6 arasını (10 değer) saymak ya da sınır değerleri atlamak.
Cevap C.`
},
{
  id: "fen-ik-068",
  kazanim: "F.8.1.2.2",
  kademe: 0,
  zorluk: 4,
  soru: `Bir kentte yaşanan şiddetli sağanak, kısa sürede taşkına yol açmıştır. Olaydan sonra kentteki bir meteorolog ile bir iklim bilimci şu açıklamaları yapmıştır:
I. Meteorolog: "Sağanak, iki gün önce yayımladığımız uyarıdaki saatlerde başladı."
II. İklim bilimci: "Kentte son kırk yılda bu şiddette yağış beş kez görüldü; sıklığının artıp artmadığını kayıtlardan inceleyeceğiz."
III. İklim bilimci: "Bu sağanak, kentin ikliminin kalıcı olarak değiştiğini kanıtlar." Haberi izleyen öğrenciler, açıklamaların her birinin söyleyen uzmanın çalışma biçimine uyup uymadığını tartışmıştır.
**Buna göre bu açıklamalardan hangileri, söyleyen uzmanın çalışma alanına ve bilimsel yaklaşıma uygundur?**`,
  gorsel: null,
  secenekler: [
    "Yalnız I",
    "Yalnız II",
    "I ve II",
    "II ve III"
  ],
  dogru: 2,
  hatalar: [
    "II'yi dışarıda bırakma: kırk yıllık kayıtlardaki sıklığı incelemek iklim bilimcinin çalışma biçimidir. Ayrıca I de uygundur.",
    "I'i dışarıda bırakma: iki gün önceden uyarı yayımlamak, meteorologun kısa süreli tahmin işidir. Yalnız II değildir.",
    null,
    "Tek olayı kalıcı değişimin kanıtı sayma: III. açıklama tek bir sağanaktan iklimin değiştiği sonucunu çıkarır; bilimsel yaklaşıma uygun değildir."
  ],
  aciklama: `Adım 1: I. açıklamayı denetle. İki gün önceden uyarı yayımlamak kısa süreli bir hava olayının tahminidir; meteorologun işidir. Açıklama uzmanın alanına uygundur.
Adım 2: II. açıklamayı denetle. Kırk yıllık kayıtlarda benzer şiddette yağışın kaç kez görüldüğünü ve sıklığının artıp artmadığını incelemek iklim bilimcinin çalışma biçimidir. Uygundur.
Adım 3: III. açıklamayı denetle. Tek bir sağanak bir hava olayıdır. İklimin değiştiğini söylemek için farklı dönemlerin ortalamalarını karşılaştırmak gerekir; tek olay kanıt olamaz. Bir iklim bilimcinin bu yargıyı kanıt diye sunması bilimsel yaklaşıma uygun değildir.
Adım 4: Uygun olanlar I ve II'dir.
Sağlama: III. açıklamanın tersi de aynı hatayı taşır: Şiddetli bir sağanağın olmaması da iklimin değişmediğini kanıtlamaz.
Cevap C.`
},
{
  id: "fen-ik-069",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 4,
  soru: `Bir araştırmacı, yağışın yalnızca toplamıyla değil, kaç güne dağıldığıyla da ilgilenmektedir. Tabloda bir havzanın üç ayrı otuz yıllık dönemi için hesaplanmış ortalamalar verilmiştir.
I. Dönemler ilerledikçe yağışlı gün sayısı artmıştır.
II. Yağışlı bir güne düşen ortalama yağış miktarı, her dönemde bir öncekinden büyüktür.
III. 1991-2020 döneminde yağışlı bir güne ortalama 8 mm'den fazla yağış düşmüştür.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Dönem</th><th>Yıllık toplam yağış (mm)</th><th>Yılda yağışlı gün sayısı</th></tr><tr><td>1931-1960</td><td>700</td><td>110</td></tr><tr><td>1961-1990</td><td>640</td><td>92</td></tr><tr><td>1991-2020</td><td>610</td><td>70</td></tr></table>",
  secenekler: [
    "Yalnız I",
    "Yalnız III",
    "I ve II",
    "II ve III"
  ],
  dogru: 3,
  hatalar: [
    "Sütunu ters okuma: yağışlı gün sayısı 110 → 92 → 70 olarak azalmıştır; I. yargı yanlıştır.",
    "Hesabı yarım bırakma: III doğrudur ama II de doğrudur; her dönemde gün başına düşen yağış artmıştır.",
    "I'i doğru sayma: yağışlı gün sayısı artmamış, azalmıştır.",
    null
  ],
  aciklama: `Yağışlı güne düşen ortalama yağış, yıllık toplam yağışın yağışlı gün sayısına bölünmesiyle bulunur.
Adım 1: Her dönem için hesapla. 1931-1960: 700 ÷ 110 ≈ 6,4 mm. 1961-1990: 640 ÷ 92 ≈ 7,0 mm. 1991-2020: 610 ÷ 70 ≈ 8,7 mm.
Adım 2: I. yargıyı denetle. Yağışlı gün sayısı 110 → 92 → 70 olarak azalmıştır; I yanlıştır.
Adım 3: II. yargıyı denetle. 6,4 < 7,0 < 8,7 olduğundan gün başına yağış her dönemde artmıştır; II doğrudur.
Adım 4: III. yargıyı denetle. 8,7 mm > 8 mm olduğundan III doğrudur.
Adım 5: Doğru yargılar II ve III'tür.
Yorum: Yıllık toplam yağış azalırken yağışlı gün sayısı daha çok azalmıştır; yağış daha az güne toplanmış, yani yoğunlaşmıştır. İklim yalnızca toplam yağışla anlatılmaz.
Cevap D.`
},
{
  id: "fen-ik-070",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 4,
  soru: `Grafikte bir kentin 2016-2023 yıllarındaki yıllık ortalama sıcaklığının, kentin 1991-2020 dönemi uzun yıllar ortalamasından farkı gösterilmiştir. Pozitif değer, o yılın ortalamadan sıcak geçtiğini; negatif değer, ortalamadan soğuk geçtiğini belirtir.
I. Sekiz yılın altısında yıllık ortalama sıcaklık, uzun yıllar ortalamasının üzerindedir.
II. 2022 yılının ortalama sıcaklığı, 2019 yılınınkinden 0,2 °C fazladır.
III. Sekiz yılın uzun yıllar ortalamasından farklarının toplamı sıfırdan büyüktür.
IV. Sekiz yılın tamamında yıllık ortalama sıcaklık, uzun yıllar ortalamasının üzerindedir.
**Buna göre bu yargılardan hangileri doğrudur?**`,
  gorsel: "<svg viewBox=\"0 0 560 276\" role=\"img\" aria-label=\"Sekiz yılın ortalama sıcaklığının 1991-2020 ortalamasından farkını gösteren sütun grafiği\"><text x=\"12\" y=\"20\" fill=\"currentColor\" font-size=\"15\" font-weight=\"bold\">Grafik: 1991-2020 ortalamasından fark (°C)</text><g stroke=\"currentColor\" stroke-opacity=\"0.25\" stroke-width=\"1\"><line x1=\"64\" y1=\"125\" x2=\"548\" y2=\"125\"/><line x1=\"64\" y1=\"80\" x2=\"548\" y2=\"80\"/></g><g stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"64\" y1=\"40\" x2=\"64\" y2=\"236\"/><line x1=\"64\" y1=\"170\" x2=\"548\" y2=\"170\"/></g><g fill=\"currentColor\" font-size=\"14\" text-anchor=\"end\"><text x=\"58\" y=\"85\">1</text><text x=\"58\" y=\"130\">0,5</text><text x=\"58\" y=\"175\">0</text><text x=\"58\" y=\"220\">−0,5</text></g><g fill=\"var(--vurgu)\"><rect x=\"76.3\" y=\"134.0\" width=\"36\" height=\"36.0\"/><rect x=\"136.8\" y=\"170.0\" width=\"36\" height=\"27.0\"/><rect x=\"197.3\" y=\"116.0\" width=\"36\" height=\"54.0\"/><rect x=\"257.8\" y=\"89.0\" width=\"36\" height=\"81.0\"/><rect x=\"318.3\" y=\"152.0\" width=\"36\" height=\"18.0\"/><rect x=\"378.8\" y=\"170.0\" width=\"36\" height=\"9.0\"/><rect x=\"439.3\" y=\"71.0\" width=\"36\" height=\"99.0\"/><rect x=\"499.8\" y=\"98.0\" width=\"36\" height=\"72.0\"/></g><g fill=\"currentColor\" font-size=\"14\" text-anchor=\"middle\"><text x=\"94.3\" y=\"128.0\">+0,4</text><text x=\"154.8\" y=\"215.0\">−0,3</text><text x=\"215.3\" y=\"110.0\">+0,6</text><text x=\"275.8\" y=\"83.0\">+0,9</text><text x=\"336.3\" y=\"146.0\">+0,2</text><text x=\"396.8\" y=\"197.0\">−0,1</text><text x=\"457.3\" y=\"65.0\">+1,1</text><text x=\"517.8\" y=\"92.0\">+0,8</text><text x=\"94.3\" y=\"262\">2016</text><text x=\"154.8\" y=\"262\">2017</text><text x=\"215.3\" y=\"262\">2018</text><text x=\"275.8\" y=\"262\">2019</text><text x=\"336.3\" y=\"262\">2020</text><text x=\"396.8\" y=\"262\">2021</text><text x=\"457.3\" y=\"262\">2022</text><text x=\"517.8\" y=\"262\">2023</text></g></svg>",
  secenekler: [
    "I ve II",
    "I, II ve III",
    "I, III ve IV",
    "II, III ve IV"
  ],
  dogru: 1,
  hatalar: [
    "III'ü hesaplamama: farkların toplamı 0,4 − 0,3 + 0,6 + 0,9 + 0,2 − 0,1 + 1,1 + 0,8 = 3,6 °C'dir, sıfırdan büyüktür; III de doğrudur.",
    null,
    "Sütunları saymadan karar verme: 2017 ve 2021 yılları negatiftir; IV. yargı yanlıştır.",
    "Sekiz yılın tamamının üstte olduğunu sanma: 2017 (−0,3) ve 2021 (−0,1) ortalamanın altındadır."
  ],
  aciklama: `Adım 1: Grafikteki değerleri oku: 2016: +0,4; 2017: −0,3; 2018: +0,6; 2019: +0,9; 2020: +0,2; 2021: −0,1; 2022: +1,1; 2023: +0,8.
Adım 2: I. yargıyı denetle. Pozitif olanlar 2016, 2018, 2019, 2020, 2022 ve 2023'tür; toplam 6 yıl. Negatif olanlar 2017 ve 2021'dir. I doğrudur.
Adım 3: II. yargıyı denetle. Her iki yıl da aynı uzun yıllar ortalamasıyla kıyaslandığından yıllar arasındaki fark, sapmaların farkına eşittir: 1,1 − 0,9 = 0,2 °C. II doğrudur.
Adım 4: III. yargıyı denetle. Toplam: 0,4 − 0,3 + 0,6 + 0,9 + 0,2 − 0,1 + 1,1 + 0,8 = 3,6 °C. 3,6 > 0 olduğundan III doğrudur.
Adım 5: IV. yargıyı denetle. 2017 ve 2021 negatif olduğundan sekiz yılın tamamı ortalamanın üzerinde değildir. IV yanlıştır.
Sonuç: I, II ve III doğrudur.
Not: Sekiz yıllık bu gidiş, iklimin değiştiğini tek başına kanıtlamaz; ama 6 yılın ortalamanın üzerinde olması dönem ortalamalarını karşılaştırmak için bir ipucudur.
Cevap B.`
},
{
  id: "fen-ik-071",
  kazanim: "F.8.1.2.2",
  kademe: 0,
  zorluk: 4,
  soru: `Bir televizyon programında bir meteorolog ile bir iklim bilimci, kentin soğuk geçen bir ocak ayını tartışmaktadır.
Meteorolog: "Bu geceki ölçümlerimize göre yarın sabah kentte don bekliyoruz; uyarıyı ilettik."
İklim bilimci: "Kentin ocak ayı en düşük sıcaklık ortalaması, 1981-2010 ile 1991-2020 dönemleri karşılaştırıldığında 1,8 °C artmıştır."
**Buna göre bu açıklamalardan aşağıdakilerden hangisi __çıkarılamaz__?**`,
  gorsel: null,
  secenekler: [
    "Meteorologun açıklaması, kısa süreli bir hava olayının tahminidir.",
    "Yarın donun görülmesi, kentin ikliminin soğumaya başladığını gösterir.",
    "İklim bilimcinin açıklaması, iki uzun dönemin karşılaştırılmasına dayanır.",
    "Yarın don görülse bile ocak ayı en düşük sıcaklık ortalamasının arttığı yargısı değişmez."
  ],
  dogru: 1,
  hatalar: [
    "Çıkarılabilen yargıyı çıkarılamaz sanma: \"yarın sabah\" ifadesi tek bir sabahı kapsar; tahmin bir hava olayına aittir.",
    null,
    "Çıkarılabilen yargıyı çıkarılamaz sanma: iklim bilimci iki ayrı otuz yıllık dönemin ortalamalarını karşılaştırmıştır.",
    "Çıkarılabilen yargıyı çıkarılamaz sanma: bir sabahın donu, otuz yıllık dönem ortalamalarının karşılaştırmasını değiştirmez."
  ],
  aciklama: `Adım 1: İki açıklamanın zaman ölçeğini ayır. Meteorologun açıklaması "yarın sabah" için bir don tahminidir; kısa süreli bir hava olayıdır. İklim bilimcinin açıklaması ise iki otuz yıllık dönemin ortalamasını karşılaştırır; iklimdeki değişimi anlatır.
Adım 2: Çıkarılabilecek yargıları ele. Meteorologun açıklaması bir hava olayı tahminidir. İklim bilimcinin açıklaması iki uzun dönemin karşılaştırmasına dayanır. Yarın don görülse bile iki dönemin ortalamalarını karşılaştıran sonuç değişmez.
Adım 3: "Yarın donun görülmesi iklimin soğumaya başladığını gösterir" yargısı ise çıkarılamaz. Tek bir sabahın donu bir hava olayıdır; iklimin yönünü belirleyemez. Üstelik iklim bilimcinin verisi tam tersi yönde, yani ısınma yönündedir.
Sık yapılan hata: Tek bir soğuk günü iklimin soğuduğuna kanıt saymak. Tek bir sıcak gün ısınmanın kanıtı olmadığı gibi tek bir soğuk gün de soğumanın kanıtı değildir.
Cevap B.`
},
{
  id: "fen-ik-072",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 4,
  soru: `Tabloda dört kentin 1991-2020 dönemine ait mevsimlik ortalama yağış miktarları verilmiştir. Bir araştırmacı, kış yağışının yıllık toplam yağış içindeki payının en büyük olduğu kenti belirlemek istemektedir.
**Buna göre bu kent aşağıdakilerden hangisidir?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Kent</th><th>İlkbahar (mm)</th><th>Yaz (mm)</th><th>Sonbahar (mm)</th><th>Kış (mm)</th></tr><tr><td>Göldere</td><td>120</td><td>60</td><td>140</td><td>200</td></tr><tr><td>Hasanlı</td><td>60</td><td>20</td><td>90</td><td>130</td></tr><tr><td>İkizce</td><td>80</td><td>40</td><td>100</td><td>180</td></tr><tr><td>Kuzupınar</td><td>100</td><td>100</td><td>150</td><td>250</td></tr></table>",
  secenekler: [
    "Göldere",
    "Hasanlı",
    "İkizce",
    "Kuzupınar"
  ],
  dogru: 2,
  hatalar: [
    "Kış yağışının miktarına bakıp payını hesaplamama: Göldere'de kış payı 200 ÷ 520 ≈ %38'dir; payı en büyük kent değildir.",
    "Payı yaklaşık hesaplama: Hasanlı'da kış payı 130 ÷ 300 ≈ %43'tür; İkizce'deki %45'ten küçüktür.",
    null,
    "En çok kış yağışını en büyük pay sanma: Kuzupınar'da kış yağışı 250 mm ile en fazladır, ama payı 250 ÷ 600 ≈ %41,7'dir."
  ],
  aciklama: `Pay, kış yağışının yıllık toplam yağışa bölünmesiyle bulunur.
Adım 1: Her kentin yıllık toplamını bul. Göldere: 120 + 60 + 140 + 200 = 520 mm. Hasanlı: 60 + 20 + 90 + 130 = 300 mm. İkizce: 80 + 40 + 100 + 180 = 400 mm. Kuzupınar: 100 + 100 + 150 + 250 = 600 mm.
Adım 2: Kış payını hesapla. Göldere: 200 ÷ 520 ≈ %38,5. Hasanlı: 130 ÷ 300 ≈ %43,3. İkizce: 180 ÷ 400 = %45. Kuzupınar: 250 ÷ 600 ≈ %41,7.
Adım 3: En büyük pay İkizce'dedir.
Sık yapılan hata: Kış yağışı en çok olan kenti (Kuzupınar) seçmek. Pay sorulduğunda toplamı da hesaba katmak gerekir.
Not: Yağışın mevsimlere dağılımı iklimin bir parçasıdır; yıllık toplamı aynı olan iki kentin kış payı çok farklı olabilir.
Cevap C.`
},
{
  id: "fen-ik-073",
  kazanim: "F.8.1.2.2",
  kademe: 0,
  zorluk: 4,
  soru: `Bir il yönetimi üç karar için veri toplamaktadır:
1. Pazar günü yapılacak fidan dikimi etkinliğinin sürdürülüp sürdürülmeyeceği
2. Yirmi yıl boyunca kullanılacak yeni seranın ısıtma sisteminin kapasitesi
3. Bu gece trafiğe kapatılıp kapatılmayacağı düşünülen köprüdeki rüzgâr hızı
Kullanılabilecek veriler:
a. Son kırk yılın ocak aylarında ölçülen en düşük sıcaklıklar
b. Bu gece için yayımlanan rüzgâr hızı tahmini
c. Pazar günü için yayımlanan yağış tahmini
**Buna göre kararların hangi veriyle verilmesi uygundur?**`,
  gorsel: null,
  secenekler: [
    "1-c, 2-a, 3-b",
    "1-a, 2-b, 3-c",
    "1-b, 2-c, 3-a",
    "1-c, 2-b, 3-a"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Eşleştirmeleri tersine kurma: pazar günkü etkinlik için kırk yıllık sıcaklık kayıtları değil, pazar gününe ait yağış tahmini gerekir.",
    "Verilerin zaman ölçeğine bakmama: fidan dikimi pazar gününü, köprü kararı bu geceyi ilgilendirir; ikisinin verisi de kısa süreli olmalıdır.",
    "Yalnız ilk kararı doğru eşleştirme: sera sistemi yirmi yıl kullanılacağından kırk yıllık sıcaklık kaydı gerekir; köprü kararı ise bu geceki rüzgâr tahminine bağlıdır."
  ],
  aciklama: `Adım 1: Her kararın zaman ölçeğini bul. 1. karar pazar gününü, 3. karar bu geceyi ilgilendirir; ikisi de kısa süreli hava olaylarına bağlıdır. 2. karar yirmi yıl kullanılacak bir yatırımdır; uzun yıllık veriye bağlıdır.
Adım 2: Verilerin türünü ayır. "a" son kırk yılın kayıtlarıdır; iklim verisidir. "b" ve "c" ise tahmindir; kısa süreli hava olaylarına aittir.
Adım 3: 2. karar için uzun yıllık veri olan "a" kullanılır.
Adım 4: 1. karar pazar gününe aittir; pazar günü için yayımlanan yağış tahmini olan "c" uygundur. 3. karar bu geceye aittir; bu gece için rüzgâr tahmini olan "b" uygundur.
Sonuç: 1-c, 2-a, 3-b.
Sağlama: Seranın ısıtma sistemi için bu geceki rüzgâr tahmininin bir anlamı yoktur; köprü kararı için kırk yıllık sıcaklık kaydı da işe yaramaz.
Cevap A.`
},
{
  id: "fen-ik-074",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 4,
  soru: `Bir ürünün yağmurla yetiştirilebilmesi için bölgede şu üç ölçütün birlikte sağlanması gerekmektedir:
• Yıllık ortalama yağış en az 500 mm olmalıdır.
• Yıllık ortalama don günü sayısı en fazla 40 olmalıdır.
• Temmuz ayı ortalama sıcaklığı en az 24 °C olmalıdır.
Tabloda altı kentin 1991-2020 dönemine ait ortalamaları verilmiştir.
**Buna göre bu kentlerden kaç tanesi ürünün yetiştirilmesi için uygundur?**`,
  gorsel: "<table class=\"tablo\"><tr><th>Kent</th><th>Yıllık yağış (mm)</th><th>Yıllık don günü sayısı</th><th>Temmuz ortalaması (°C)</th></tr><tr><td>Akçay</td><td>520</td><td>35</td><td>26</td></tr><tr><td>Bozdağ</td><td>480</td><td>20</td><td>27</td></tr><tr><td>Çaltı</td><td>610</td><td>45</td><td>25</td></tr><tr><td>Dereli</td><td>500</td><td>40</td><td>24</td></tr><tr><td>Esenli</td><td>700</td><td>10</td><td>22</td></tr><tr><td>Fidanlık</td><td>550</td><td>38</td><td>23</td></tr></table>",
  secenekler: [
    "1",
    "2",
    "3",
    "4"
  ],
  dogru: 1,
  hatalar: [
    "Sınır değerleri dışarıda bırakma: Dereli'nin üç değeri de tam sınırdadır (500 mm, 40 gün, 24 °C) ve \"en az\", \"en fazla\" ifadeleri sınırı kapsar; Dereli de uygundur.",
    null,
    "Üç ölçütten ikisini sağlayan kentleri de sayma: Bozdağ ve Fidanlık gibi kentler bir ölçütü sağlamaz; ölçütler birlikte aranır.",
    "Her ölçütü ayrı ayrı değerlendirip birlikte sağlanma koşulunu atlama: bir kentin üç ölçütü de sağlaması gerekir."
  ],
  aciklama: `Adım 1: Üç ölçütü yaz: yağış ≥ 500 mm, don günü ≤ 40, temmuz ≥ 24 °C. Hepsi birlikte sağlanmalıdır; "en az" ve "en fazla" sınır değerleri de kapsar.
Adım 2: Kentleri tek tek denetle. Akçay: 520 ≥ 500, 35 ≤ 40, 26 ≥ 24; uygun. Bozdağ: 480 < 500; uygun değil. Çaltı: 45 > 40; uygun değil. Dereli: 500 ≥ 500, 40 ≤ 40, 24 ≥ 24; uygun. Esenli: 22 < 24; uygun değil. Fidanlık: 23 < 24; uygun değil.
Adım 3: Uygun kentler Akçay ve Dereli'dir; toplam 2 kent.
Sık yapılan hata: Sınır değerli kenti elemek. Dereli'nin her değeri tam sınırdadır ve koşulu sağlar.
Cevap B.`
},
{
  id: "fen-ik-075",
  kazanim: "F.8.1.2.1",
  kademe: 0,
  zorluk: 4,
  soru: `Bir iklim bilimci, bir havzada "Yağışlar eskiden olduğundan daha az güne yayılıyor ve daha sert yağıyor." hipotezini sınamak istemektedir. Elinde iki ayrı otuz yıllık dönemin her yılına ait günlük yağış kayıtları vardır. Bilim insanı, tek bir yılın ya da tek bir şiddetli yağışın sonucu yanıltabileceğinden, hipotezini yalnızca dönem ortalamaları üzerinden sınamayı planlamaktadır. Havzada yağışın toplamının iki dönemde birbirine yakın olduğu bilinmektedir; yağışın günlere nasıl dağıldığı ise henüz incelenmemiştir.
**Buna göre bilim insanı hipotezini sınamak için aşağıdaki karşılaştırmalardan hangisini yapmalıdır?**`,
  gorsel: null,
  secenekler: [
    "İki dönemin yıllık toplam yağış ve yıllık yağışlı gün sayısı ortalamalarını karşılaştırmalıdır.",
    "Yalnızca son beş yılın yıllık toplam yağışlarını birbiriyle karşılaştırmalıdır.",
    "Son yıldaki en yağışlı ayı, geçen yıldaki aynı ayla karşılaştırmalıdır.",
    "Önümüzdeki hafta için beklenen yağış miktarını, geçen haftaki yağışla karşılaştırmalıdır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Toplamı tek ölçüt yapma ve süreyi kısaltma: son beş yıl çok kısadır ve yağışın kaç güne yayıldığı hakkında bilgi vermez.",
    "Tek aylık, iki yıllık karşılaştırma yapma: iki ay karşılaştırması bir eğilimi göstermez; yağışın gün sayısına dağılımı da yoktur.",
    "Tahmini ölçüt yapma: önümüzdeki haftanın beklentisi henüz gerçekleşmemiş bir hava olayıdır; iki dönemin ortalamaları yerine geçmez."
  ],
  aciklama: `Adım 1: Hipotezi parçala. "Daha az güne yayılıyor" yağışlı gün sayısıyla, "daha sert yağıyor" ise yağışlı gün başına düşen yağış miktarıyla ilgilidir.
Adım 2: İklim hipotezi, kısa süreli olaylarla değil, uzun dönemlerin ortalamalarıyla sınanır. Bu yüzden iki ayrı otuz yıllık dönem karşılaştırılmalıdır.
Adım 3: Her dönem için iki ortalama gerekir: yıllık toplam yağış ve yılda yağışlı gün sayısı. Yağışlı gün sayısı azalmış, toplam yağış değişmemişse (ya da az azalmışsa), gün başına düşen yağış artmıştır; yağış yoğunlaşmış demektir.
Adım 4: Son beş yıl, tek bir ay ya da gelecek haftanın beklentisi bu karşılaştırmanın yerini tutamaz.
Sık yapılan hata: Yalnızca toplam yağışa bakmak. Toplam aynı kalsa bile yağışın günlere dağılımı değişebilir.
Cevap A.`
}
);
