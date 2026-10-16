// Türkçe — Anlatım Bozuklukları: Kademe 1 (Kavrama) ve Kademe 2 (Pekiştirme)
// Kazanım: T.8.3.8 (dil bilgisi yönünden anlatım bozuklukları; ağırlık dil bilgisinde, bir kısmı anlam yönünden)
// Bozukluk türleri: kişi ve sayı uyumsuzluğu, yüklem eksikliği, ek ve tamlama yanlışlığı, çatı uyuşmazlığı, bağlaç, gereksiz sözcük, anlam çelişkisi
window.LGS_BANK = window.LGS_BANK || {};
(window.LGS_BANK["anlatim-bozukluklari"] = window.LGS_BANK["anlatim-bozukluklari"] || []).push(
/* ===================== KADEME 1 — KAVRAMA ===================== */
{
  id: "tur-ab-101",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde özne ile yüklem arasında kişi bakımından uyumsuzluk vardır?**`,
  gorsel: null,
  secenekler: [
    "Sen ve ben bu akşam sinemaya gideceğiz.",
    "Ben ve kardeşim hafta sonu kampa gidecek.",
    "Kardeşimle ben yarın pazara gideceğiz.",
    "Sen ve arkadaşların bugün bize geliyorsunuz."
  ],
  dogru: 1,
  hatalar: [
    "Doğru cümleyi bozuk sanma: 'sen ve ben' birlikte 'biz' demektir, 'gideceğiz' bu özneye uyar.",
    null,
    "Doğru cümleyi bozuk sanma: 'kardeşimle ben' birlikte 'biz' demektir, 'gideceğiz' bu özneye uyar.",
    "Doğru cümleyi bozuk sanma: 'sen ve arkadaşların' birlikte 'siz' demektir, 'geliyorsunuz' bu özneye uyar."
  ],
  aciklama: `Özne ile yüklem kişi ve sayı bakımından uyumlu olmalıdır. 'Ben' ile bir başkası birlikte 'biz', 'sen' ile bir başkası birlikte 'siz' olur.
Adım 1: Her cümlede özneyi bul ve kaç kişi olduğunu say.
Adım 2: 'Sen ve ben' ile 'kardeşimle ben' özneleri 'biz' demektir; 'gideceğiz' uyar. 'Sen ve arkadaşların' 'siz' demektir; 'geliyorsunuz' uyar.
Adım 3: 'Ben ve kardeşim' de 'biz' demektir; yüklem 'gideceğiz' olmalıydı. 'Gidecek' üçüncü tekil kişi ekini taşır, özneye uymaz.
Sağlama: Cümleyi 'Ben ve kardeşim hafta sonu kampa gideceğiz.' diye düzeltirsen uyum kurulur.
Cevap B.`
},
{
  id: "tur-ab-102",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde anlatım bozukluğu __yoktur__?**`,
  gorsel: null,
  secenekler: [
    "Sınava bir hafta kala bütün konuları tekrar ettim ve yeterli buldu.",
    "Kütüphanede hem kitap okudum hem de ödevimi.",
    "Nisan gelince okulumuzun bahçe rengârenk çiçeklerle doldu.",
    "Kardeşim elindeki kitabı okuyup bitirdi ve masanın üstüne bıraktı."
  ],
  dogru: 3,
  hatalar: [
    "Özne–yüklem uyumsuzluğu: 'ettim' birinci, 'buldu' üçüncü kişidir; aynı özne için ikisi de 'ettim … buldum' olmalı.",
    "Yüklem eksikliği: 'okudum' ödevi karşılamaz; ödev için 'yaptım' gibi ayrı bir yüklem gerekir.",
    "Tamlama eki eksikliği: 'okulumuzun' tamlayan eki aldığı için 'bahçe' tamlanan eki alıp 'bahçesi' olmalı.",
    null
  ],
  aciklama: `Anlatım bozukluğu olmayan cümlede özne ile yüklem uyumludur, her öğenin yüklemi ve eki yerindedir.
Adım 1: A'da 'ettim' ile 'buldu' aynı özneye bağlı ama kişi ekleri farklı.
Adım 2: B'de 'okudum' yalnız kitaba uyar; 'ödevimi okudum' demek istediğimizi tam anlatmaz.
Adım 3: C'de 'okulumuzun' tamlayan eki aldığı için 'bahçe' sözcüğü -si eki almak zorundadır.
Adım 4: D'de 'okuyup bitirdi' ve 'bıraktı' aynı özneye ve aynı kişi ekine bağlı; nesne 'kitabı' ikisine de uyar.
Sağlama: D'yi sesli oku; her fiilin öznesini ve nesnesini bulabiliyorsan cümle kusursuzdur.
Cevap D.`
},
{
  id: "tur-ab-103",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde yüklem eksikliğinden kaynaklanan bir anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Mehmet, kutlamada hem şarkı söyledi hem de gitar.",
    "Mehmet, kutlamada hem şarkı söyledi hem de gitar çaldı.",
    "Elif, kutlamada hem resim yaptı hem de müzik dinledi.",
    "Dedem, gitar çalmayı da şarkı söylemeyi de çok sever."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Doğru cümleyi bozuk sanma: 'çaldı' gitara uygun; her öğenin kendi yüklemi var.",
    "Doğru cümleyi bozuk sanma: 'yaptı' resme, 'dinledi' müziğe uygun; ortak yüklem yok.",
    "Doğru cümleyi bozuk sanma: 'çalmayı' gitara, 'söylemeyi' şarkıya uygun."
  ],
  aciklama: `Bir yüklem birden çok öğeye bağlanıyorsa her öğeye uymalıdır. Uymuyorsa ikinci öğeye ayrı bir yüklem gerekir; buna yüklem eksikliği denir.
Adım 1: Ortak kullanılan yüklemi bul: A'da 'söyledi' hem şarkıya hem gitara bağlanmış.
Adım 2: 'Şarkı söylenir' ama 'gitar söylenmez'; gitar için 'çaldı' gerekir.
Adım 3: B, C ve D'de her öğenin kendi yüklemi yazılmış.
Sağlama: A'yı 'Mehmet hem şarkı söyledi hem de gitar çaldı.' diye yazarsan sorun kalkar.
Cevap A.`
},
{
  id: "tur-ab-104",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde anlatım bozukluğu __vardır__?**`,
  gorsel: null,
  secenekler: [
    "Yağmur yağdığı için maç bir hafta ertelendi.",
    "Çok çalıştığı hâlde sınavdan istediği notu alamadı.",
    "Hava çok soğuk olduğu için bu yüzden kalın giyindik.",
    "Havanın güzel olması nedeniyle pikniğe gitmeye karar verdik."
  ],
  dogru: 2,
  hatalar: [
    "Doğru cümleyi bozuk sanma: 'için' neden bildirir; yağmur ile erteleme arasındaki neden-sonuç ilişkisi doğru.",
    "Doğru cümleyi bozuk sanma: '-dığı hâlde' karşıtlık bildirir; çok çalışmak ile düşük not arasındaki karşıtlık yerinde.",
    null,
    "Doğru cümleyi bozuk sanma: 'nedeniyle' neden bildirir; sonuç olarak 'karar verdik' uyumludur."
  ],
  aciklama: `Bir cümlede aynı anlamı veren iki sözcük ya da kalıp birlikte kullanılırsa gereksiz yineleme olur. 'İçin' de 'bu yüzden' de neden bildirir.
Adım 1: Her cümlede neden-sonuç bağını bul.
Adım 2: C'de 'soğuk olduğu için' nedeni zaten söylüyor; 'bu yüzden' aynı nedeni ikinci kez söylüyor.
Adım 3: Düzeltme: 'Hava çok soğuk olduğu için kalın giyindik.'
Sık yapılan hata: Cümle uzun diye doğru sanmak. Aynı işi yapan iki bağ sözcüğü görürsen birini at.
Cevap C.`
},
{
  id: "tur-ab-105",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde ek yanlışlığından kaynaklanan bir anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Ahmet'in kitabı masanın üstünde duruyor.",
    "Kardeşim okuldan eve yürüyerek geldi.",
    "Dün akşam arkadaşımı bir kitap ödünç verdim.",
    "Öğretmenimiz öğrencilere sabırla yardım etti."
  ],
  dogru: 2,
  hatalar: [
    "Doğru cümleyi bozuk sanma: 'Ahmet'in kitabı' tamlamasındaki ekler yerinde.",
    "Doğru cümleyi bozuk sanma: 'okuldan' çıkma, 'eve' yönelme hâli; ikisi de yerinde.",
    null,
    "Doğru cümleyi bozuk sanma: 'yardım etmek' fiili yönelme hâlini (-e) ister, 'öğrencilere' doğru."
  ],
  aciklama: `Bir fiil, kime ya da neye yöneldiğini belli eden ekle kullanılır. 'Ödünç vermek' fiilinde kişi, yönelme hâliyle (-e, -a) söylenir.
Adım 1: Her fiilin hangi eki istediğini düşün: 'Kime ödünç verdin?' sorusu -e ekini ister.
Adım 2: C'de 'arkadaşımı' -i ekiyle yazılmış; doğrusu 'arkadaşıma'.
Adım 3: Diğer cümlelerdeki ekler fiillere uyuyor.
Sağlama: 'Kimi ödünç verdim?' diye sormak anlamsızdır; 'Kime ödünç verdim?' doğaldır.
Cevap C.`
},
{
  id: "tur-ab-106",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde özne ile yüklem arasında sayı bakımından uyumsuzluk vardır?**`,
  gorsel: null,
  secenekler: [
    "Bahçedeki çocuklardan biri ağaca tırmandılar.",
    "Bahçedeki çocukların tamamı ağaca tırmandı.",
    "Bahçedeki çocuklar ağaca tırmanmaya başladı.",
    "Bahçedeki çocuklardan üçü ağaca tırmandı."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Doğru cümleyi bozuk sanma: 'tamamı' üçüncü kişi öznedir; 'tırmandı' yüklemi uyumludur.",
    "Doğru cümleyi bozuk sanma: üçüncü kişi çoğul özne yüklemde çoğul eki almadan da kullanılır; 'başladı' yanlış değildir.",
    "Doğru cümleyi bozuk sanma: 'üçü' üçüncü kişi öznedir; 'tırmandı' yüklemi uyumludur."
  ],
  aciklama: `Özne tek bir kişiyse yüklem de tek kişiyi göstermelidir. 'Biri' tek kişiyi, 'tırmandılar' ise birden çok kişiyi gösterir.
Adım 1: A'da özne 'çocuklardan biri'dir, yani tek kişidir.
Adım 2: Yüklem 'tırmandılar' ise çoğul kişi ekiyle bitmiş.
Adım 3: Tek kişi için 'tırmandı' demek gerekir.
Sık yapılan hata: Cümlede 'çocuklar' sözcüğünü görünce özneyi çoğul sanmak. Özne 'biri'dir.
Cevap A.`
},
{
  id: "tur-ab-107",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanımından kaynaklanan bir anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Yeni açılan tarih müzesini arkadaşlarımla dün gezdik.",
    "Gelen konuklar için balkonda büyük bir sofra hazırladık.",
    "Geçen yıl ailemle yaptığımız Karadeniz gezisi çok eğlenceliydi.",
    "Bütün öğrenciler hep birlikte toplu hâlde bahçeye indi."
  ],
  dogru: 3,
  hatalar: [
    "Doğru cümleyi bozuk sanma: 'dün' ve 'yeni açılan' farklı bilgiler veriyor, biri ötekini tekrar etmiyor.",
    "Doğru cümleyi bozuk sanma: 'konuklar için' ve 'büyük bir sofra' birbirini yinelemiyor.",
    "Doğru cümleyi bozuk sanma: 'geçen yıl' zaman, 'ailemle' eşlik bilgisi veriyor; tekrar yok.",
    null
  ],
  aciklama: `Aynı anlamı taşıyan sözcüklerin birlikte kullanılması gereksiz sözcük kullanımıdır.
Adım 1: Her cümlede aynı anlamı veren sözcükleri ara.
Adım 2: D'de 'bütün', 'hep birlikte' ve 'toplu hâlde' aynı fikri üç kez söylüyor.
Adım 3: Düzeltme: 'Öğrenciler bahçeye indi.' ya da 'Bütün öğrenciler bahçeye indi.'
Sağlama: Bir sözcüğü atınca anlam değişmiyorsa o sözcük fazladır.
Cevap D.`
},
{
  id: "tur-ab-108",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde anlamca çelişen sözcükler birlikte kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Yarın akşamki yarışmaya mutlaka katılacağım.",
    "Yarın akşamki yarışmaya kesinlikle belki katılacağım.",
    "Yarın akşamki yarışmaya belki katılırım.",
    "Yarın akşamki yarışmaya büyük olasılıkla katılacağım."
  ],
  dogru: 1,
  hatalar: [
    "Doğru cümleyi bozuk sanma: 'mutlaka' kesinlik bildirir; tek başına kullanılmış, çelişki yok.",
    null,
    "Doğru cümleyi bozuk sanma: 'belki' kararsızlık bildirir; tek başına kullanılmış, çelişki yok.",
    "Doğru cümleyi bozuk sanma: 'büyük olasılıkla' yüksek ihtimali anlatır; tutarlı."
  ],
  aciklama: `Birbirinin zıddı olan ifadelerin aynı cümlede birlikte kullanılması anlam çelişkisi yaratır. 'Kesinlikle' kesin kararı, 'belki' belirsizliği gösterir.
Adım 1: Her cümlede kesinlik ve belirsizlik bildiren sözcükleri bul.
Adım 2: B'de 'kesinlikle' ve 'belki' yan yana; biri 'eminim', öteki 'emin değilim' diyor.
Adım 3: Diğer cümlelerde yalnız biri var.
Sağlama: B'yi 'kesinlikle katılacağım' ya da 'belki katılırım' diye tek yönlü yazarsan çelişki biter.
Cevap B.`
},
{
  id: "tur-ab-109",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde anlatım bozukluğu __vardır__?**`,
  gorsel: null,
  secenekler: [
    "Sınıf başkanını görmek ve konuşmak için yanına gittim.",
    "Sınıf başkanını görmek ve onunla konuşmak için yanına gittim.",
    "Sınıf başkanıyla konuşmak için hemen yanına gittim.",
    "Sınıf başkanının yanına konuşmak için gittim."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Doğru cümleyi bozuk sanma: 'görmek' için -i, 'konuşmak' için 'onunla' ayrı yazılmış; her fiilin tümleci tamam.",
    "Doğru cümleyi bozuk sanma: 'konuşmak' fiili -le ekini ister ve 'başkanıyla' onu karşılar.",
    "Doğru cümleyi bozuk sanma: 'yanına' yönelme, 'konuşmak için' amaç bildirir; ekler yerinde."
  ],
  aciklama: `Bir öğe iki fiile birden bağlanıyorsa her iki fiilin istediği eki taşımalıdır. 'Görmek' -i, 'konuşmak' ise -le ekini ister; tek ek ikisine birden uymaz.
Adım 1: 'Başkanı görmek' diyoruz (-i eki); 'başkanı konuşmak' demiyoruz.
Adım 2: A'da 'başkanını' sözcüğü hem 'görmek' hem 'konuşmak' fiiline bağlanmış; konuşmak için 'onunla' eksik.
Adım 3: B'de bu eksik 'onunla' ile giderilmiş.
Sağlama: Fiillerin her birine 'kimi?' ya da 'kiminle?' diye sor; cevaplardan biri cümlede yoksa eksiklik vardır.
Cevap A.`
},
{
  id: "tur-ab-110",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde çatı uyuşmazlığından kaynaklanan bir anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Yeni kurallar öğrencilere duyuruldu ve uygulamaya konuldu.",
    "Yönetim yeni kuralları duyurdu ve uygulamaya koydu.",
    "Öğrenciler yeni kuralları duydu ve hemen uyguladı.",
    "Yeni kurallar öğrencilere duyuruldu ve hemen uyguladık."
  ],
  dogru: 3,
  hatalar: [
    "Doğru cümleyi bozuk sanma: 'duyuruldu' ve 'konuldu' ikisi de edilgen; çatıları uyumlu.",
    "Doğru cümleyi bozuk sanma: 'duyurdu' ve 'koydu' ikisi de etken; çatıları uyumlu.",
    "Doğru cümleyi bozuk sanma: 'duydu' ve 'uyguladı' ikisi de etken; özne 'öğrenciler'.",
    null
  ],
  aciklama: `İşi yapanı belli olmayan yüklem edilgen, belli olan yüklem etkendir. Aynı özneye bağlanan yüklemler aynı çatıda olmalıdır.
Adım 1: Her cümlede yüklemlerin çatısına bak.
Adım 2: D'de 'duyuruldu' edilgen (işi yapan belli değil), 'uyguladık' etken (işi biz yapıyoruz).
Adım 3: 'Kurallar' hem edilgen yüklemin hem de etken yüklemin öznesi olamaz.
Sağlama: D'yi 'Yeni kurallar öğrencilere duyuruldu ve hemen uygulandı.' yaparsan ikisi de edilgen olur.
Cevap D.`
},
{
  id: "tur-ab-111",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde tamlama yanlışlığından kaynaklanan bir anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Okulun kütüphanesi hafta sonu da açık.",
    "Okulumuzun kütüphane hafta sonu da açık.",
    "Kütüphanenin kapısı bugün erken kapandı.",
    "Kütüphane kapısı bugün erken kapandı."
  ],
  dogru: 1,
  hatalar: [
    "Doğru cümleyi bozuk sanma: 'okulun' tamlayan eki, 'kütüphanesi' tamlanan eki taşıyor; tamlama tamam.",
    null,
    "Doğru cümleyi bozuk sanma: 'kütüphanenin kapısı' belirtili isim tamlamasıdır, iki ek de var.",
    "Doğru cümleyi bozuk sanma: 'kütüphane kapısı' belirtisiz isim tamlamasıdır; tamlayan ek almaz, tamlanan -ı alır."
  ],
  aciklama: `Belirtili isim tamlamasında tamlayan -ın eki, tamlanan -ı/-si eki alır. İkisinden biri eksikse tamlama bozulur.
Adım 1: 'Okulumuzun' tamlayan ekini (-ın) almış.
Adım 2: O zaman tamlanan 'kütüphane' sözcüğü 'kütüphanesi' olmak zorunda.
Adım 3: Diğer üç cümlede tamlama ekleri tam.
Sık yapılan hata: 'Kütüphane kapısı'nı yanlış sanmak. Burada tamlayan ek almadığı için tamlama doğrudur.
Cevap B.`
},
{
  id: "tur-ab-112",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 1,
  soru: `**Aşağıdaki cümlelerin hangisinde birbiriyle çelişen sözcükler yan yana kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Annem sabah erkenden kalkıp herkes için kahvaltıyı hazırladı.",
    "Uzun yolculuktan sonra bütün yolcular çok yorulmuştu.",
    "Küçük kardeşim kocaman minicik elleriyle çiçekleri suladı.",
    "Eski evimizin bahçesinde büyük bir ceviz ağacı vardı."
  ],
  dogru: 2,
  hatalar: [
    "Doğru cümleyi bozuk sanma: 'sabah' ve 'erkenden' birbirini destekler; çelişki yok.",
    "Doğru cümleyi bozuk sanma: 'uzun yolculuk' ile 'yorulmak' tutarlı.",
    null,
    "Doğru cümleyi bozuk sanma: 'eski ev' ve 'büyük ağaç' farklı varlıkları niteliyor, çelişmiyor."
  ],
  aciklama: `Bir varlık aynı anda hem büyük hem küçük olamaz. Zıt anlamlı sıfatların aynı ismi nitelemesi anlam bozukluğudur.
Adım 1: Her cümlede ismi niteleyen sıfatlara bak.
Adım 2: C'de 'kocaman' ve 'minicik' aynı elleri niteliyor ve zıt anlam taşıyor.
Adım 3: Diğer cümlelerde sıfatlar farklı varlıkları niteliyor ya da birbirini destekliyor.
Sağlama: Elleri ya 'kocaman' ya da 'minicik' yaparsan çelişki biter.
Cevap C.`
},
{
  id: "tur-ab-113",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 2,
  soru: `"Pazar günü babamla birlikte dağa tırmandık ve manzarayı seyrettim."
**Bu cümledeki anlatım bozukluğunun nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Nesnenin gereksiz yere tekrar edilmesi",
    "Ortak yüklemin öğelerden birine uymaması",
    "Hâl ekinin yanlış kullanılması",
    "Yüklemlerin kişi bakımından uyuşmaması"
  ],
  dogru: 3,
  hatalar: [
    "Gereksiz tekrar sanma: 'manzarayı' cümlede yalnız bir kez geçiyor.",
    "Ortak yüklem sanma: cümlede iki ayrı yüklem var ve her biri kendi öğesine bağlı.",
    "Hâl eklerini suçlama: 'dağa' yönelme, 'manzarayı' belirtme hâli ve ikisi de doğru.",
    null
  ],
  aciklama: `Aynı özneye bağlı yüklemler kişi bakımından birbiriyle uyumlu olmalıdır.
Adım 1: Yüklemleri bul: 'tırmandık' ve 'seyrettim'.
Adım 2: 'Tırmandık' birinci çoğul kişi, 'seyrettim' birinci tekil kişi ekini taşıyor.
Adım 3: Özne aynı olduğu için ikisi de 'tırmandık … seyrettik' ya da 'tırmandım … seyrettim' olmalı.
Sık yapılan hata: 'Babamla birlikte' ifadesine bakıp 'tırmandık' yüklemini suçlamak. Asıl uyumsuzluk iki yüklemin kişi eki arasındadır.
Cevap D.`
},
{
  id: "tur-ab-114",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 2,
  soru: `**Aşağıdaki numaralı cümlelerin hangisinde anlatım bozukluğu __vardır__?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Hafta sonu ailecek göl kenarında balık tutmaya ve yüzmeyi denedik.</td></tr><tr><td>II</td><td>Babam çadırı kurarken annem ve ben yemeği hazırladık.</td></tr><tr><td>III</td><td>Akşam göl kenarında yaktığımız ateşin etrafında sohbet ettik.</td></tr><tr><td>IV</td><td>Gece yıldızlarla dolu gökyüzünü uzun süre seyrettik.</td></tr></table>`,
  secenekler: [
    "I",
    "II",
    "III",
    "IV"
  ],
  dogru: 0,
  hatalar: [
    null,
    "II'yi bozuk sanma: 'annem ve ben' birlikte 'biz' demektir, 'hazırladık' uyar.",
    "III'ü bozuk sanma: 'yaktığımız ateşin etrafında' doğru kurulmuş, 'sohbet ettik' özneyle uyumlu.",
    "IV'ü bozuk sanma: 'seyrettik' yüklemi 'gökyüzünü' nesnesine ve özneye uyar."
  ],
  aciklama: `Bir fiilin istediği ek, ona bağlanan bütün öğelerde aynı olmalıdır. 'Denemek' fiili nesne ister: 'balık tutmayı denedik'.
Adım 1: Her cümlede yüklemin istediği eki kontrol et.
Adım 2: I'de 'denedik' hem 'balık tutmaya' hem 'yüzmeyi' öğelerine bağlanıyor; ilki -e, ikincisi -i ekini almış.
Adım 3: Doğrusu 'balık tutmayı ve yüzmeyi denedik' olmalıdır.
Adım 4: II, III ve IV'te ekler ve kişiler uyumlu.
Sağlama: 'Neyi denedik?' diye sorarsan iki cevap da -i ekiyle gelir.
Cevap A.`
},
{
  id: "tur-ab-115",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 2,
  soru: `"Annem akşam yemeği için sebzeleri doğradı ve yemeği pişirdik."
**Bu cümledeki anlatım bozukluğu aşağıdakilerden hangisi yapılarak giderilir?**`,
  gorsel: null,
  secenekler: [
    "'doğradı' sözcüğü 'doğradık' biçiminde yazılmalıdır.",
    "'sebzeleri' sözcüğü 'sebzelere' biçiminde yazılmalıdır.",
    "'pişirdik' sözcüğü 'pişirdi' biçiminde yazılmalıdır.",
    "'yemeği' sözcüğü 'yemekleri' biçiminde yazılmalıdır."
  ],
  dogru: 2,
  hatalar: [
    "Yanlış yüklemi değiştirme: 'doğradı' zaten 'annem'e uyuyor; 'doğradık' yapılırsa iki yüklem de özneyle uyuşmaz.",
    "Eki değiştirerek giderme: 'doğramak' fiili -i ekini ister, 'sebzeleri' doğru.",
    null,
    "Yanlış ögeyi değiştirme: 'yemeği' nesnesini çoğul yapmak, 'annem' öznesi ile 'pişirdik' yüklemi arasındaki kişi uyumsuzluğunu gidermez."
  ],
  aciklama: `Aynı özneye bağlı yüklemler aynı kişi ekini taşımalıdır.
Adım 1: Özneyi bul: 'annem' üçüncü tekil kişidir.
Adım 2: 'Doğradı' üçüncü tekil, 'pişirdik' birinci çoğul kişi ekini taşıyor.
Adım 3: Uymayan 'pişirdik' yüklemi 'pişirdi' yapılmalı.
Sağlama: 'Annem sebzeleri doğradı ve yemeği pişirdi.' cümlesinde iki yüklem de özneyle uyuşur.
Cevap C.`
},
{
  id: "tur-ab-116",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde anlatım bozukluğu __yoktur__?**`,
  gorsel: null,
  secenekler: [
    "Sınavda başarılı olmak için hem çok çalışmalı hem de düzenli uyku.",
    "Dün konuştuğumuz ve bana çok yardım eden arkadaşım bugün yurt dışına gidiyor.",
    "Bahçemizdeki elma ağacı dalları meyveyle doldu.",
    "Okul takımının maç programı açıklandı ve öğrenciler tarafından heyecanla bekliyoruz."
  ],
  dogru: 1,
  hatalar: [
    "Yüklem eksikliği: 'çalışmalı' yüklemi 'uyku' için uymaz; 'uyumalı' gerekir.",
    null,
    "Tamlama yanlışlığı: 'elma ağacı' ile 'dalları' arasında tamlayan eki eksik; 'ağacının dalları' olmalı.",
    "Çatı uyuşmazlığı: 'açıklandı' edilgen, 'bekliyoruz' etken; 'öğrenciler tarafından' ise edilgen yapıya özgü."
  ],
  aciklama: `Bozukluk olmayan cümlede özne, yüklem, ekler ve anlam birbirine uyar.
Adım 1: A'da 'uyku' için bir yüklem yok.
Adım 2: C'de 'ağacı dalları' tamlaması yanlış kurulmuş.
Adım 3: D'de edilgen ve etken yüklem karışmış.
Adım 4: B'de 'konuştuğumuz ve yardım eden' sıfat-fiilleri aynı ismi ('arkadaşım') niteliyor; yüklem 'gidiyor' özneyle uyumlu.
Sağlama: B'de 've' iki sıfat-fiili eşit biçimde bağlıyor; bozukluk yok.
Cevap B.`
},
{
  id: "tur-ab-117",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 2,
  soru: `"Fırtınada devrilen ağaç, belediye ekipleri tarafından tekrar yeniden yerine dikildi."
**Bu cümledeki anlatım bozukluğunun nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Aynı anlamdaki iki sözcüğün birlikte kullanılması",
    "Yüklemin özneyle sayı bakımından uyuşmaması",
    "Zıt anlamlı iki sözcüğün birlikte kullanılması",
    "Gerekli olan nesnenin cümlede bulunmaması"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Özne–yüklem uyumsuzluğu sanma: 'ağaç' tekil, 'dikildi' üçüncü tekil kişi; uyumlu.",
    "Zıtlık sanma: 'tekrar' ve 'yeniden' zıt değil, eş anlamlıdır.",
    "Nesne eksikliği sanma: yüklem edilgen olduğu için nesne istemez, 'ağaç' özne."
  ],
  aciklama: `Eş anlamlı iki sözcüğün birlikte kullanılması anlatımı gereksiz uzatır. 'Tekrar' ile 'yeniden' aynı şeyi söyler.
Adım 1: Cümledeki sözcük çiftlerine bak: 'tekrar yeniden'.
Adım 2: İkisi de işin ikinci kez yapıldığını anlatıyor.
Adım 3: Biri atılınca anlam aynı kalır.
Sağlama: 'Ağaç belediye ekipleri tarafından yeniden yerine dikildi.' kusursuzdur.
Cevap A.`
},
{
  id: "tur-ab-118",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 2,
  soru: `**Aşağıdaki numaralı cümlelerin hangisinde anlatım bozukluğu __vardır__?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Okulumuzun kütüphanesi bu yıl yeni raflarla donatıldı.</td></tr><tr><td>II</td><td>Öğrenciler ödünç aldıkları kitapları iki hafta içinde teslim etmek zorundadır.</td></tr><tr><td>III</td><td>Kütüphane görevlisi kitapları her sabah raflara yerleştiriyor.</td></tr><tr><td>IV</td><td>Kütüphaneye gelen öğrenciler çantalarını girişteki dolaba bırakıp içeri girebilirsiniz.</td></tr></table>`,
  secenekler: [
    "I",
    "II",
    "III",
    "IV"
  ],
  dogru: 3,
  hatalar: [
    "I'i bozuk sanma: 'kütüphanesi' tamlama eki tam, 'donatıldı' edilgen ve özneye uyar.",
    "II'yi bozuk sanma: 'öğrenciler' üçüncü çoğul, 'zorundadır' üçüncü kişi ile uyumlu.",
    "III'ü bozuk sanma: 'görevlisi' ile 'yerleştiriyor' uyumlu, nesne 'kitapları' belirtme hâlinde.",
    null
  ],
  aciklama: `Özne ile yüklemin kişi ekleri uyumlu olmalıdır. Özne üçüncü kişiyse yüklem de üçüncü kişi ekini taşır.
Adım 1: Her cümlenin öznesini bul, yüklemin kişi ekine bak.
Adım 2: IV'te özne 'öğrenciler' (üçüncü çoğul kişi) ama yüklem 'girebilirsiniz' (ikinci çoğul).
Adım 3: Doğrusu 'girebilir' ya da 'girebilirler' olmalıdır.
Sağlama: IV'ü 'Kütüphaneye gelen öğrenciler çantalarını bırakıp içeri girebilir.' diye yazarsan uyum kurulur.
Cevap D.`
},
{
  id: "tur-ab-119",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde bağlaç nedeniyle neden-sonuç ilişkisi ters kurulmuştur?**`,
  gorsel: null,
  secenekler: [
    "Bütün gün denizde kaldık, çünkü hava çok sıcaktı.",
    "Hava çok sıcaktı, çünkü bütün gün denizde kaldık.",
    "Hava çok sıcak olduğu için bütün gün denizde kaldık.",
    "Hava çok sıcaktı, bu yüzden bütün gün denizde kaldık."
  ],
  dogru: 1,
  hatalar: [
    "Doğru cümleyi bozuk sanma: 'çünkü' kendinden önce sonucu, sonra nedeni getirir; burada doğru kullanılmış.",
    null,
    "Doğru cümleyi bozuk sanma: 'olduğu için' önce nedeni verir, sonra sonucu; doğru.",
    "Doğru cümleyi bozuk sanma: 'bu yüzden' önce nedeni, sonra sonucu getirir; doğru."
  ],
  aciklama: `'Çünkü' kendisinden önce sonucu, kendisinden sonra nedeni söyler. 'Bu yüzden' ve '-dığı için' ise önce nedeni, sonra sonucu getirir.
Adım 1: Her cümlede neden ve sonucu belirle: neden 'hava çok sıcaktı', sonuç 'bütün gün denizde kaldık'.
Adım 2: B'de 'çünkü' ters yönde kullanılmış; sıcak havayı denizde kalmanın sonucu gibi gösteriyor.
Adım 3: Diğer cümlelerde bağlaç nedeni doğru yere koyuyor.
Sağlama: B'yi 'Bütün gün denizde kaldık, çünkü hava çok sıcaktı.' diye çevirirsen A olur.
Cevap B.`
},
{
  id: "tur-ab-120",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 2,
  soru: `"Komşumuzun kızı bu yaz üniversiteden bitirecek ve doktor olacak."
**Bu cümledeki anlatım bozukluğu aşağıdakilerden hangisi yapılarak giderilir?**`,
  gorsel: null,
  secenekler: [
    "'üniversiteden' sözcüğü 'üniversiteyi' biçiminde yazılmalıdır.",
    "'olacak' sözcüğü 'olacaklar' biçiminde yazılmalıdır.",
    "'bu yaz' sözcük grubu 'bu yaza' biçiminde yazılmalıdır.",
    "'doktor' sözcüğü 'doktoru' biçiminde yazılmalıdır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Özneyi çoğul sanma: 'komşumuzun kızı' tek kişidir; 'olacak' zaten özneye uyuyor, çoğul yapmak yeni bozukluk doğurur.",
    "Zaman ekini suçlama: 'bu yaz' zarf tümlecidir, ek istemez; bozukluk nesnenin hâl ekindedir.",
    "Ek eklemeyle giderme: 'olmak' fiili nesne almaz; 'doktor' yüklem adıdır ve ek almaz."
  ],
  aciklama: `Yüklemin gerektirdiği hâl eki nesnede bulunmalıdır. 'Bitirmek' geçişli bir fiildir ve nesnesini belirtme hâliyle (-i) ister.
Adım 1: Yüklemi bul: 'bitirecek'. 'Neyi bitirecek?' diye sor.
Adım 2: Cevap 'üniversiteyi' olmalı; metindeki 'üniversiteden' ayrılma hâlindedir ve yükleme uymaz.
Adım 3: 'Üniversiteden' sözcüğü 'üniversiteyi' olunca cümle düzelir; 'doktor olacak' kısmında sorun yoktur.
Sağlama: 'Komşumuzun kızı bu yaz üniversiteyi bitirecek ve doktor olacak.' kusursuzdur.
Cevap A.`
},
{
  id: "tur-ab-121",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 2,
  soru: `**Aşağıdaki numaralı cümlelerin hangisinde anlatım bozukluğu __vardır__?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Meteoroloji, hafta sonu için yağış uyarısı yaptı.</td></tr><tr><td>II</td><td>Uyarıya göre sabah saatlerinde sağanak etkili olacak.</td></tr><tr><td>III</td><td>Yetkililer, vatandaşları dikkatli olmaya ve araç kullanırken hızı düşürmeyi çağırdı.</td></tr><tr><td>IV</td><td>Hafta başından itibaren havanın yeniden ısınması bekleniyor.</td></tr></table>`,
  secenekler: [
    "I",
    "II",
    "III",
    "IV"
  ],
  dogru: 2,
  hatalar: [
    "I'i bozuk sanma: 'uyarısı yaptı' özneyle uyumlu, ekler yerinde.",
    "II'yi bozuk sanma: 'sağanak etkili olacak' sade ve uyumlu.",
    null,
    "IV'ü bozuk sanma: 'ısınması bekleniyor' edilgen yüklem, nesne gerekmiyor."
  ],
  aciklama: `Ortak kullanılan yüklem, bağlandığı bütün öğelerden aynı eki istemelidir. 'Çağırmak' fiili -e ekiyle kullanılır: 'bir şeye çağırmak'.
Adım 1: Yüklemi 'çağırdı' olan cümleyi incele: Neye çağırdı?
Adım 2: 'Dikkatli olmaya' çağırdı (-e); 'hızı düşürmeyi' çağırdı (-i) denmez.
Adım 3: Doğrusu 'hızı düşürmeye çağırdı' olmalıdır.
Sık yapılan hata: İki öğe de fiille uyumlu görününce ekin farkını gözden kaçırmak.
Cevap C.`
},
{
  id: "tur-ab-122",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanımından kaynaklanan bir anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Takım, ikinci yarıda geriye düştüğü hâlde maçı kazandı.",
    "Öğretmen, ödevleri yarına kadar teslim etmemizi istedi.",
    "Yeni mahallemizde herkes birbirini yakından tanıyor.",
    "Yeni açılan marketten sadece yalnızca iki kutu süt aldım."
  ],
  dogru: 3,
  hatalar: [
    "Doğru cümleyi bozuk sanma: 'geriye düşmek' ve 'maçı kazanmak' farklı anlamlar; yineleme yok.",
    "Doğru cümleyi bozuk sanma: 'yarına kadar' süre, 'teslim etmemizi' istek bildirir; tekrar yok.",
    "Doğru cümleyi bozuk sanma: 'herkes' ve 'birbirini' farklı işlev görüyor, aynı şeyi yinelemiyor.",
    null
  ],
  aciklama: `Aynı anlama gelen iki sözcüğün art arda kullanılması gereksiz sözcük kullanımıdır.
Adım 1: Her cümlede eş anlamlı sözcük çiftlerini ara.
Adım 2: D'de 'sadece' ve 'yalnızca' eş anlamlıdır ve yan yana kullanılmış.
Adım 3: Biri atılırsa cümle bozulmaz.
Sağlama: D'yi 'Yeni açılan marketten yalnızca iki kutu süt aldım.' yaparsan düzelir.
Cevap D.`
},
{
  id: "tur-ab-123",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 2,
  soru: `"Dedem, bahçedeki kuşları beslemeyi ve su koymak çok sever."
**Bu cümledeki anlatım bozukluğu aşağıdakilerden hangisi yapılarak giderilir?**`,
  gorsel: null,
  secenekler: [
    "'koymak' sözcüğü 'koymayı' biçiminde yazılmalıdır.",
    "'beslemeyi' sözcüğü 'beslemek' biçiminde yazılmalıdır.",
    "'çok' sözcüğü 'pek' biçiminde yazılmalıdır.",
    "'bahçedeki' sözcüğü 'bahçenin' biçiminde yazılmalıdır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yanlış öğeyi düzeltme: 'sevmek' fiili -i ekini ister; 'beslemek' olursa iki öğe de 'sever' ile uyuşmaz.",
    "Sıklık zarfını suçlama: 'çok' ile 'pek' arasında bozukluk sorunu yok, sorun ek uyumunda.",
    "Sıfat ekini suçlama: 'bahçedeki' doğru; 'bahçenin kuşları' anlamı bozar."
  ],
  aciklama: `Ortak kullanılan yüklem, bağlandığı bütün öğelerde aynı eki istemelidir. 'Sevmek' fiili nesne ister.
Adım 1: 'Dedem neyi sever?' sorusunu sor.
Adım 2: 'Beslemeyi' -i ekini almış; 'koymak' ise eksiz kalmış.
Adım 3: 'Koymak' sözcüğü 'koymayı' olunca iki öğe de 'sever' ile uyumlu olur.
Sağlama: 'Dedem kuşları beslemeyi ve su koymayı çok sever.' cümlesi kusursuzdur.
Cevap A.`
},
{
  id: "tur-ab-124",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde birbiriyle çelişen ifadeler birlikte kullanılmıştır?**`,
  gorsel: null,
  secenekler: [
    "Müdür, sınavı bütün öğrencilerin geçtiğini, hiçbirinin kalmadığını söyledi.",
    "Müdür, sınavı hiçbir öğrencinin geçemediğini, herkesin başarılı olduğunu söyledi.",
    "Müdür, sınavı öğrencilerin çoğunun geçtiğini, birkaç kişinin kaldığını söyledi.",
    "Müdür, sınavı yalnızca birkaç öğrencinin geçtiğini, çoğunun kaldığını söyledi."
  ],
  dogru: 1,
  hatalar: [
    "Doğru cümleyi bozuk sanma: 'bütün geçti' ile 'hiçbiri kalmadı' aynı durumu iki biçimde söylüyor; çelişki yok.",
    null,
    "Doğru cümleyi bozuk sanma: 'çoğu geçti' ile 'birkaç kişi kaldı' birbirini tamamlıyor.",
    "Doğru cümleyi bozuk sanma: 'birkaç kişi geçti' ile 'çoğu kaldı' aynı durumu anlatıyor."
  ],
  aciklama: `Aynı cümlede birbirini yok eden iki bilgi verilirse anlam çelişkisi oluşur.
Adım 1: Her cümlede iki yargının uyumuna bak.
Adım 2: B'de 'hiçbir öğrenci geçemedi' ile 'herkes başarılı oldu' aynı anda doğru olamaz.
Adım 3: Öteki cümlelerde iki yargı aynı durumu iki yönden anlatıyor.
Sağlama: 'Hiçbiri geçemedi' denirse 'herkes başarılı' denemez.
Cevap B.`
},
{
  id: "tur-ab-125",
  kazanim: "T.8.3.8",
  kademe: 1,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde anlatım bozukluğu __yoktur__?**`,
  gorsel: null,
  secenekler: [
    "Kasabamızdaki sağlık merkezin doktoru bu hafta göreve başlıyor.",
    "Mahalle parkındaki bankların boyası yenilendi ve yeni fidanlar diktik.",
    "Dönüşte sınıf arkadaşımla karşılaştım ve birlikte kitapçıya uğradım.",
    "Bu sabah servis kaçınca okula otobüs ve yürüyerek geldim."
  ],
  dogru: 2,
  hatalar: [
    "Tamlama yanlışlığı: 'sağlık merkezin doktoru' yerine 'sağlık merkezinin doktoru' olmalı.",
    "Çatı uyuşmazlığı: 'yenilendi' edilgen, 'diktik' etken; aynı işe bağlanan yüklemler aynı çatıda olmalı.",
    null,
    "Ek eksikliği: 'otobüs' ile 'yürüyerek' yan yana kullanılınca 'otobüsle' olmalıydı."
  ],
  aciklama: `Bozukluk olmayan cümlede ekler, yüklemler ve anlam uyumludur.
Adım 1: A'da tamlayan eki eksik, B'de çatı karışmış, D'de ek eksik.
Adım 2: C'de 'karşılaştım' ve 'uğradım' aynı kişi ekini taşıyor.
Adım 3: Ayrıca 'karşılaşmak' ile 'uğramak' ayrı öğelere bağlı ve her biri kendi ekini almış.
Sağlama: C'yi sesli okuduğunda her yüklemin öznesi 'ben' olarak kalır.
Cevap C.`
},
/* ===================== KADEME 2 — PEKİŞTİRME ===================== */
{
  id: "tur-ab-201",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde bağlaç kullanımından kaynaklanan bir anlatım bozukluğu vardır?**`,
  gorsel: null,
  secenekler: [
    "Hava kapalı olmasına rağmen pikniğe gitmekten vazgeçmedik.",
    "Meltem hem sınavı kazandı hem de burs sahibi oldu.",
    "Çocuk, kapıyı tıklatarak ve sessizce içeri girdi.",
    "Ya bu akşam yola çıkarız ya da yarın sabah ayrılırız."
  ],
  dogru: 2,
  hatalar: [
    "Doğru cümleyi bozuk sanma: 'rağmen' karşıtlık bildirir; hava kapalı olsa da vazgeçmemek karşıt bir durumdur.",
    "Doğru cümleyi bozuk sanma: 'hem … hem de' iki başarıyı doğru bağlıyor.",
    null,
    "Doğru cümleyi bozuk sanma: 'ya … ya da' iki seçeneği doğru bağlıyor."
  ],
  aciklama: `Zarf-fiil eki ('-arak') iki eylemi zaten birbirine bağlar. Yanına 've' bağlacı getirmek gereksizdir ve cümleyi bozar.
Adım 1: Her cümlede bağlaçların işlevine bak.
Adım 2: C'de 'tıklatarak' zarf-fiildir; 'içeri girdi' eylemini zaten bağlıyor.
Adım 3: 'Ve' bağlacı burada fazladır.
Adım 4: Düzeltme: 'Çocuk, kapıyı tıklatarak sessizce içeri girdi.'
Sık yapılan hata: Bağlacı her yerde doğru sanmak. Zarf-fiilin yanında 've' kullanılmaz.
Cevap C.`
},
{
  id: "tur-ab-202",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde birbiriyle çelişen ifadeler yer almaktadır?**`,
  gorsel: null,
  secenekler: [
    "Kimsenin duymadığı bu sır, mahallenin her köşesinde konuşuluyor.",
    "Çok az kişinin bildiği bu sır, mahallede fısıltıyla konuşuluyor.",
    "Gece boyunca kimsenin uyumadığı evde sabaha kadar ışıklar yandı.",
    "Bu sırrı iki kişi biliyor ve ikisi de sessiz kalıyor."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Doğru cümleyi bozuk sanma: 'az kişi biliyor' ile 'fısıltıyla konuşuluyor' tutarlıdır.",
    "Doğru cümleyi bozuk sanma: kimse uyumadığı için ışıkların yanması tutarlıdır.",
    "Doğru cümleyi bozuk sanma: 'iki kişi biliyor' ile 'sessiz kalıyor' birbirini destekler."
  ],
  aciklama: `Aynı cümlede birbirini yok eden iki yargı bulunursa anlam çelişkisi vardır.
Adım 1: Her cümlede bilgi ve sonuç arasındaki bağı kur.
Adım 2: A'da sırrı kimse duymamış ama 'mahallenin her köşesinde konuşuluyor'; bu ikisi aynı anda doğru olamaz.
Adım 3: Diğerlerinde bilgiyle sonuç tutarlı.
Sağlama: 'Kimsenin duymadığı' ile 'her köşesinde konuşuluyor' yan yana gelemez.
Cevap A.`
},
{
  id: "tur-ab-203",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde altı çizili sözcük anlamına uygun kullanılmamıştır?**`,
  gorsel: null,
  secenekler: [
    "Sınıfımız, geçen yılki geziden güzel bir __anı__ biriktirdi.",
    "Yeni gelen öğretmenin __deneyimli__ olması derslere katkı sağladı.",
    "Bu bölgede yağışlar yıl boyunca __düzenli__ biçimde sürüyor.",
    "Fen öğretmenimiz laboratuvarda öğrencilere yeni bir __deneyim__ gösterdi."
  ],
  dogru: 3,
  hatalar: [
    "Doğru cümleyi bozuk sanma: 'anı' geçmişte yaşananın hatırasıdır, doğru kullanılmış.",
    "Doğru cümleyi bozuk sanma: 'deneyimli' yaşayarak bilgi kazanmış demektir, doğru kullanılmış.",
    "Doğru cümleyi bozuk sanma: 'düzenli' belli bir düzen içinde demektir, doğru kullanılmış.",
    null
  ],
  aciklama: `Deney, bir fikri sınamak için yapılan uygulamadır ve gösterilebilir. Deneyim ise yaşayarak kazanılan bilgidir; gösterilmez.
Adım 1: Altı çizili sözcüklerin anlamını cümleyle karşılaştır.
Adım 2: Öğretmen laboratuvarda yeni bir şey gösteriyorsa bu bir deneydir.
Adım 3: 'Deneyim' yaşayarak kazanılan birikimdir; gösterilemez.
Sık yapılan hata: 'Deney' ile 'deneyim'i aynı anlamda sanmak.
Cevap D.`
},
{
  id: "tur-ab-204",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 2,
  soru: `**Aşağıdaki numaralı cümlelerin hangisinde anlam yönünden anlatım bozukluğu vardır?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Okulumuzun spor festivali bu yıl 12 Mayıs'ta başlayacak.</td></tr><tr><td>II</td><td>Festival yalnızca bir gün sürecek ve öğrenciler bütün hafta boyunca turnuvalarda yarışacak.</td></tr><tr><td>III</td><td>Katılmak isteyen öğrenciler başvurularını sınıf öğretmenlerine iletecek.</td></tr><tr><td>IV</td><td>Final maçlarını izlemeye veliler de davet edilecek.</td></tr></table>`,
  secenekler: [
    "I",
    "II",
    "III",
    "IV"
  ],
  dogru: 1,
  hatalar: [
    "I'i bozuk sanma: tarih ve eylem arasında çelişki yok.",
    null,
    "III'ü bozuk sanma: 'başvurularını … iletecek' özneyle uyumlu, ekler yerinde.",
    "IV'ü bozuk sanma: 'veliler de davet edilecek' edilgen ve uyumlu."
  ],
  aciklama: `Aynı cümlede birbirini yok eden iki bilgi bulunursa anlam çelişkisi oluşur.
Adım 1: Her cümlede verilen süre bilgilerini karşılaştır.
Adım 2: II'de festival bir gün sürecek deniyor; hemen ardından öğrenciler bütün hafta yarışacak deniyor.
Adım 3: Bu iki yargı aynı anda doğru olamaz.
Sağlama: Sürelerden birini düzeltirsen çelişki kalkar.
Cevap B.`
},
{
  id: "tur-ab-205",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 2,
  soru: `"Gezi sırasında sınıfımızdaki herkes kurallara uydu ve rehberi dikkatle dinledim."
**Bu cümledeki anlatım bozukluğu aşağıdakilerden hangisi yapılarak giderilir?**`,
  gorsel: null,
  secenekler: [
    "'uydu' sözcüğü 'uydum' biçiminde yazılmalıdır.",
    "'dinledim' sözcüğü 'dinledi' biçiminde yazılmalıdır.",
    "'herkes' sözcüğü 'biz' biçiminde yazılmalıdır.",
    "'rehberi' sözcüğü 'rehbere' biçiminde yazılmalıdır."
  ],
  dogru: 1,
  hatalar: [
    "Yanlış yüklemi değiştirme: 'herkes' üçüncü kişidir; 'uydum' yapılırsa özneyle uyuşmaz.",
    null,
    "Özneyi değiştirme: 'sınıfımızdaki biz' kullanımı anlamsızdır ve tamlama oluşturmaz.",
    "Eki değiştirme: 'dinlemek' fiili -i ekini ister, 'rehberi' doğrudur."
  ],
  aciklama: `Aynı özneye bağlı yüklemler aynı kişi ekiyle bitmelidir.
Adım 1: Özne 'herkes' üçüncü tekil kişidir.
Adım 2: 'Uydu' üçüncü tekil, 'dinledim' birinci tekil.
Adım 3: 'Dinledim' yüklemi 'dinledi' olunca iki yüklem de özneyle uyuşur.
Sağlama: 'Herkes kurallara uydu ve rehberi dikkatle dinledi.' cümlesi kusursuzdur.
Cevap B.`
},
{
  id: "tur-ab-206",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde anlatım bozukluğu __yoktur__?**`,
  gorsel: null,
  secenekler: [
    "Bu yılki bilim fuarının katılımcılar sayısı geçen yılı geçti.",
    "Yeni gelen öğretmenimiz sınıfa girdi ve öğrencilere selamladı.",
    "Sessiz sedasız kapıyı gürültüyle kapatıp odasına çekilen çocuk uyudu.",
    "Fırından yeni çıkan sıcak ekmeklerin kokusu bütün sokağa yayılmıştı."
  ],
  dogru: 3,
  hatalar: [
    "Tamlama yanlışlığı: 'katılımcılar sayısı' yerine 'katılımcı sayısı' olmalı; tamlayan çoğul eki almaz.",
    "Hâl eki yanlışlığı: 'selamlamak' fiili belirtili nesne (-i) ister; 'öğrencilere' yerine 'öğrencileri' olmalı.",
    "Anlam çelişkisi: 'sessiz sedasız' ile 'gürültüyle' birbirinin zıddıdır.",
    null
  ],
  aciklama: `Bozukluk olmayan cümlede tamlamalar, çatılar ve anlam birbirine uyar.
Adım 1: A'da tamlama, B'de nesnenin hâl eki, C'de anlam hatası var.
Adım 2: D'de 'ekmeklerin kokusu' tamlaması doğru, 'yayılmıştı' özneye uyuyor.
Adım 3: 'Sıcak' ve 'yeni çıkan' sözcükleri birbirini destekliyor.
Sağlama: D'de çelişen, tekrar eden ya da eksik bir öğe bulunmaz.
Cevap D.`
},
{
  id: "tur-ab-207",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 2,
  soru: `"Maç sonrasında sahaya çıkan takım, taraftarlar tarafından alkışladı."
**Bu cümledeki anlatım bozukluğunun nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Edilgen çatıya özgü tümlecin etken yüklemle kullanılması",
    "Nesnenin yüklemin gerektirdiği hâl ekini almaması",
    "Birbiriyle çelişen iki ifadenin art arda gelmesi",
    "Yüklemin özneyle sayı bakımından uyuşmaması"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Nesne eki sanma: cümlede nesne yok, hata nesnenin ekinde değil; 'tarafından' tümlecinin etken yüklemle kullanılmasındadır.",
    "Çelişki sanma: 'çıkan takım' ve 'alkışladı' birbirini yok etmiyor.",
    "Sayı uyumsuzluğu sanma: 'takım' tekil, 'alkışladı' üçüncü tekil kişi; uyumlu."
  ],
  aciklama: `'Tarafından' tümleci işi yapanı gösterir ve edilgen yüklemle kullanılır: 'taraftarlar tarafından alkışlandı'.
Adım 1: 'Tarafından' ile kurulan öğeyi bul: 'taraftarlar tarafından'.
Adım 2: Bu öğe işi yapanı gösterir, yani yüklem edilgen olmalıdır.
Adım 3: Yüklem 'alkışladı' etken olduğu için çatı uyuşmazlığı doğuyor.
Sağlama: 'Takım, taraftarlar tarafından alkışlandı.' kusursuzdur.
Cevap A.`
},
{
  id: "tur-ab-208",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde anlatım bozukluğu __yoktur__?**`,
  gorsel: null,
  secenekler: [
    "Mühendis, yeni köprünün planını ve inşaatına bu sabah başladı.",
    "Dün sabah erken saatlerde sabahleyin kalkıp okula gittim.",
    "Kütüphanede ders çalışırken yanımdaki öğrenci telefonunu kapattı.",
    "Annemin sofraya koyduğu yemeklerin hepsi çok lezzetliydiler."
  ],
  dogru: 2,
  hatalar: [
    "Yüklem eksikliği: 'başladı' planı karşılayamaz; plan için 'çizdi' gibi ayrı bir yüklem gerekir.",
    "Gereksiz sözcük: 'sabah' ve 'sabahleyin' aynı zamanı iki kez söylüyor.",
    null,
    "Özne–yüklem uyumsuzluğu: cansız çoğul özne ('yemeklerin hepsi') tekil yüklem ister; 'lezzetliydi' olmalı."
  ],
  aciklama: `Bozukluk olmayan cümlede yüklemler öğelere uyar, gereksiz sözcük ve uyumsuzluk bulunmaz.
Adım 1: A'da yüklem eksik, B'de sözcük fazla, D'de yüklem çoğul ek almış.
Adım 2: C'de 'çalışırken' zarf-fiili zamanı bildirir; -ken ekli zarf-fiilin öznesi yüklemin öznesinden farklı olabilir (ben çalışırken öğrenci kapattı). 'Kapattı' yüklemi tekil özne 'öğrenci' ile uyumludur; eksik ya da fazla öge yoktur.
Sağlama: C'de her sözcüğün bir görevi vardır, hiçbiri yinelenmemiştir.
Cevap C.`
},
{
  id: "tur-ab-209",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 2,
  soru: `**Aşağıdaki numaralı cümlelerin hangisinde anlatım bozukluğu __vardır__?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Mahallemizdeki bisiklet kulübü her cumartesi sabahı toplanıyor.</td></tr><tr><td>II</td><td>Üyeler hem rota planlıyor hem de bisikletlerinin bakımını yapıyor.</td></tr><tr><td>III</td><td>Yeni katılanlara kask ve eldiven veriliyor.</td></tr><tr><td>IV</td><td>Bu hafta şehir merkezinde ve nehir kenarına pedal çevireceğiz.</td></tr></table>`,
  secenekler: [
    "I",
    "II",
    "III",
    "IV"
  ],
  dogru: 3,
  hatalar: [
    "I'i bozuk sanma: 'toplanıyor' özne 'kulübü' ile uyumlu.",
    "II'yi bozuk sanma: 'planlıyor' rotaya, 'yapıyor' bakıma uyar; her öğenin kendi yüklemi var.",
    "III'ü bozuk sanma: 'veriliyor' edilgen ve nesne ('kask ve eldiven') ile uyumlu.",
    null
  ],
  aciklama: `Ortak kullanılan yüklem, bütün yer tümleçlerinde aynı hâl ekini istemelidir. 'Pedal çevirmek' için 'merkezinde ve kenarında' ya da 'merkezine ve kenarına' denir.
Adım 1: IV'te iki yer tümleci var: 'şehir merkezinde' ve 'nehir kenarına'.
Adım 2: Bir ortak yüklem iki ayrı ek almış: ilki bulunma (-de), ikincisi yönelme (-e).
Adım 3: Doğrusu 'merkezinde ve kenarında' ya da 'merkezine ve kenarına' olmalıdır.
Sağlama: Aynı yüklemin yanındaki bütün yer öğeleri aynı hâl ekini almalıdır.
Cevap D.`
},
{
  id: "tur-ab-210",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 2,
  soru: `"Doktor, hastanın tahlil sonuçlarını inceledi ve ona ilaç yazıldı."
**Bu cümledeki anlatım bozukluğu aşağıdakilerden hangisi yapılarak giderilir?**`,
  gorsel: null,
  secenekler: [
    "'yazıldı' sözcüğü 'yazdı' biçiminde yazılmalıdır.",
    "'inceledi' sözcüğü 'incelendi' biçiminde yazılmalıdır.",
    "'hastanın' sözcüğü 'hastaya' biçiminde yazılmalıdır.",
    "'sonuçlarını' sözcüğü 'sonuçları' biçiminde yazılmalıdır."
  ],
  dogru: 0,
  hatalar: [
    null,
    "Yanlış yüklemi değiştirme: 'incelendi' edilgen olursa 'doktor' özne olmaktan çıkar ve ikinci yüklem de etkenle uyuşmaz.",
    "Eki değiştirerek giderme: 'hastanın tahlil sonuçları' tamlaması doğru kurulmuş.",
    "Nesne ekini silme: 'inceledi' yüklemi belirtili nesne (-ı) ister, 'sonuçlarını' doğru; sorun çatıdadır."
  ],
  aciklama: `Aynı özneye bağlı yüklemler aynı çatıda olmalıdır. İşi yapan belliyse etken, belli değilse edilgen kullanılır.
Adım 1: 'Doktor' öznedir ve 'inceledi' etken yüklemdir.
Adım 2: 'Yazıldı' edilgen olduğu için işi yapan belli değildir.
Adım 3: Çatı uyuşmazlığı 'yazıldı' → 'yazdı' ile giderilir.
Sağlama: 'Doktor tahlil sonuçlarını inceledi ve ona ilaç yazdı.' kusursuzdur.
Cevap A.`
},
{
  id: "tur-ab-211",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 2,
  soru: `**Aşağıda verilen cümlelerin hangilerinde özne ile yüklem arasında uyumsuzluk vardır?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Sınıfımızdaki öğrencilerin tamamı gezi için izin kâğıdını getirdi.</td></tr><tr><td>II</td><td>Okul bahçesindeki kuşların biri pencereye kondular.</td></tr><tr><td>III</td><td>Mahalle takımımızın oyuncuları maça iyi hazırlanmıştım.</td></tr></table>`,
  secenekler: [
    "Yalnız II",
    "I ve II",
    "II ve III",
    "I, II ve III"
  ],
  dogru: 2,
  hatalar: [
    "Eksik bulma: III'te de uyumsuzluk var; 'oyuncuları' üçüncü kişi, 'hazırlanmıştım' birinci tekil.",
    "I'i bozuk sanma: 'tamamı' üçüncü kişi, 'getirdi' ile uyumlu.",
    null,
    "I'i de bozuk sanma: 'tamamı getirdi' kusursuzdur."
  ],
  aciklama: `Özne ile yüklem kişi ve sayı bakımından uyumlu olmalıdır.
Adım 1: I'de özne 'öğrencilerin tamamı' (üçüncü kişi), yüklem 'getirdi': uyumlu.
Adım 2: II'de özne 'kuşların biri' tek kuş; yüklem 'kondular' çoğul: uyumsuz.
Adım 3: III'te özne 'oyuncuları' (üçüncü kişi), yüklem 'hazırlanmıştım' (birinci tekil): uyumsuz.
Sık yapılan hata: 'Tamamı' ve 'biri' sözcüklerinde çoğul ek görmek. Çoğul olan sözcük yalnızca tamlayandır.
Cevap C.`
},
{
  id: "tur-ab-212",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 2,
  soru: `**Aşağıdaki cümlelerin hangisinde ortak kullanılan yüklem nedeniyle ek yanlışlığı vardır?**`,
  gorsel: null,
  secenekler: [
    "Dedem, her sabah gazete okumayı ve yürüyüş yapmayı alışkanlık edinmiş.",
    "Dedem, her sabah gazete okumayı ve yürüyüş yapmak alışkanlık edinmiş.",
    "Kardeşimin en sevdiği uğraş, bahçede oynamak ve kedisine bakmaktır.",
    "Dedemin en sevdiği şey, bahçede çalışmak ve sabah gazete okumaktır."
  ],
  dogru: 1,
  hatalar: [
    "Doğru cümleyi bozuk sanma: 'okumayı' ve 'yapmayı' aynı eki alıyor; 'edinmek' -i ekini ister.",
    null,
    "Doğru cümleyi bozuk sanma: 'oynamak' ve 'bakmak' ikisi de -mak eki taşıyor ve 'uğraş' ile uyumlu.",
    "Doğru cümleyi bozuk sanma: 'çalışmak' ve 'okumak' ikisi de aynı eki alıyor ve 'şey' ile uyumlu."
  ],
  aciklama: `Aynı yükleme bağlanan koşut öğeler aynı eki taşımalıdır. 'Edinmek' fiili -i ekini ister.
Adım 1: B'de 'okumayı' -i ekini almış; 'yapmak' eksiz bırakılmış.
Adım 2: 'Alışkanlık edinmek' ifadesinde nesne belirtme hâlinde olmalı.
Adım 3: Doğrusu 'yürüyüş yapmayı' olmalıdır.
Sağlama: A cümlesinde iki öğe de aynı ekle sıralanmıştır.
Cevap B.`
},
{
  id: "tur-ab-213",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 2,
  soru: `"Birkaç kişi dışında hiç kimse toplantıya gelmedi, ancak salon tamamen doluydu."
**Bu cümledeki anlatım bozukluğunun nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Birbiriyle çelişen ifadelerin aynı cümlede kullanılması",
    "Yüklemin özneyle sayı bakımından uyuşmaması",
    "Aynı anlamlı sözcüklerin birlikte kullanılması",
    "Tümlecin yüklemin gerektirdiği ekle kullanılmaması"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Sayı uyumsuzluğu sanma: 'gelmedi' ve 'doluydu' ayrı özneleri (hiç kimse, salon) olan yüklemler ve ikisi de uyumlu.",
    "Eş anlam sanma: cümlede aynı anlama gelen iki sözcük yok.",
    "Ek hatası sanma: 'toplantıya' yönelme hâli 'gelmek' fiiline uygun."
  ],
  aciklama: `Aynı cümlede iki bilgi birbirini yok ediyorsa anlam çelişkisi vardır.
Adım 1: İlk yargı: birkaç kişi dışında kimse gelmedi, yani çok az kişi geldi.
Adım 2: İkinci yargı: salon tamamen doluydu.
Adım 3: Çok az kişiyle salon dolu olamaz; iki yargı çelişiyor.
Sağlama: Birkaç kişi gelmişse salon tamamen dolu olamaz; iki bilgi birlikte doğru olmaz.
Cevap A.`
},
{
  id: "tur-ab-214",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 3,
  soru: `**Aşağıdaki numaralı cümlelerin hangilerinde anlatım bozukluğu vardır?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Şehir müzesinde açılan fotoğraf sergisi ilk haftasında binlerce kişi tarafından gezildi.</td></tr><tr><td>II</td><td>Sergide, kentin yüz yıl önceki sokaklarını ve insanlarını gösteren çok sayıda fotoğraf yer alıyor.</td></tr><tr><td>III</td><td>Sergiyi hazırlayan ekip üyeleri fotoğraflar seçimi için aylarca çalıştı.</td></tr><tr><td>IV</td><td>Yetkililer, sergiyi bir ay daha uzatmayı kararlaştırdı.</td></tr><tr><td>V</td><td>Ziyaret saatleri, pazartesi hariç her gün yaklaşık olarak 18.00 civarında sona erecek.</td></tr></table>`,
  secenekler: [
    "I ve II",
    "I ve IV",
    "II ve V",
    "III ve V"
  ],
  dogru: 3,
  hatalar: [
    "I'i ve II'yi bozuk sanma: 'gezildi' edilgen, 'tarafından' ile uyumlu; II'de de uyumsuzluk yok.",
    "IV'ü bozuk sanma: 'uzatmayı kararlaştırdı' fiil ve eki uyumlu; I de kusursuz.",
    "II'yi bozuk sanma: iki nesne ('sokaklarını ve insanlarını') aynı eki alıyor, uyumlu.",
    null
  ],
  aciklama: `Tamlamada tamlayan ya da tamlanan eki eksikse tamlama bozulur. Aynı anlamdaki sözcükler art arda kullanılırsa gereksiz yineleme olur.
Adım 1: III'te 'fotoğraflar seçimi' tamlaması yanlış: 'fotoğrafların seçimi' olmalıydı.
Adım 2: V'te 'yaklaşık olarak' ve 'civarında' aynı anlamı iki kez veriyor.
Adım 3: I, II ve IV'te ek, çatı ve anlam sorunu yok.
Sağlama: Bozuk cümleleri düzeltince bir ek eklenir (III) ve bir sözcük atılır (V).
Cevap D.`
},
{
  id: "tur-ab-215",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 3,
  soru: `"Yeni doktorumuz hastalarına sabırla dinliyor ve ilgi gösteriyor."
**Bu cümlenin anlatım bozukluğu aşağıdakilerden hangisiyle yeniden yazılırsa giderilir?**`,
  gorsel: null,
  secenekler: [
    "Yeni doktorumuz hastalarını sabırla dinliyor ve ilgi gösteriyor.",
    "Yeni doktorumuz hastalarına sabırla dinliyor ve onlara ilgi gösteriyor.",
    "Yeni doktorumuz hastalarını sabırla dinliyor ve onlara ilgi gösteriyor.",
    "Yeni doktorumuz hastalarına sabırla dinleyip ilgi gösteriyor."
  ],
  dogru: 2,
  hatalar: [
    "Yarım düzeltme: 'hastalarını' dinlemeye uyar ama 'ilgi göstermek' fiili -e ister; 'hastalarını ilgi gösteriyor' bozuk kalır.",
    "Yarım düzeltme: 'onlara ilgi' kısmını düzeltir ama 'hastalarına dinliyor' hâlâ yanlış; 'dinlemek' -i ister.",
    null,
    "Zarf-fiille kaçma: 'hastalarına dinleyip' ek hatasını gidermez; 'dinlemek' hâlâ -i ister."
  ],
  aciklama: `Ortak nesne iki fiilin istediği ekle uyuşmuyorsa her fiil için ayrı nesne yazılır. 'Dinlemek' -i, 'ilgi göstermek' -e ister.
Adım 1: 'Dinlemek' fiili 'kimi dinliyor?' diye sorulur: 'hastalarını'.
Adım 2: 'İlgi göstermek' fiili 'kime?' diye sorulur: 'onlara'.
Adım 3: İki fiilin istediği ek farklı olduğu için ikinci fiil için 'onlara' eklenmeli.
Sağlama: C'de her fiilin nesnesi kendi ekini almıştır.
Cevap C.`
},
{
  id: "tur-ab-216",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerin hepsinde anlatım bozukluğu vardır. Bu cümlelerden hangisindeki bozukluğun nedeni, diğerlerindekinden farklıdır?**`,
  gorsel: null,
  secenekler: [
    "Ben ve sınıf arkadaşlarım yarın bisiklet turuna çıkacaklar.",
    "Eve yeniden tekrar döndüğümüzde annem çoktan uyumuştu.",
    "Sen ve kardeşin yarın sabah erkenden yola çıkacaklar.",
    "Biz ve komşularımız bu akşam toplantıya katılacaksınız."
  ],
  dogru: 1,
  hatalar: [
    "Aynı türü ayırt edememe: A'da 'ben ve arkadaşlarım' biz demektir; 'çıkacaklar' uymaz. Bu, kişi uyumsuzluğudur.",
    null,
    "Aynı türü ayırt edememe: C'de 'sen ve kardeşin' siz demektir; 'çıkacaklar' uymaz. Bu da kişi uyumsuzluğudur.",
    "Aynı türü ayırt edememe: D'de 'biz ve komşularımız' biz demektir; 'katılacaksınız' uymaz. Bu da kişi uyumsuzluğudur."
  ],
  aciklama: `Cümlelerin bozukluk türlerini ayırt etmek için hatanın nerede olduğuna bak: yüklemde mi, sözcük seçiminde mi?
Adım 1: A'da özne 'ben ve arkadaşlarım' (biz), yüklem 'çıkacaklar' (onlar): kişi uyumsuzluğu.
Adım 2: C'de özne 'sen ve kardeşin' (siz), yüklem 'çıkacaklar' (onlar): kişi uyumsuzluğu.
Adım 3: D'de özne 'biz ve komşularımız' (biz), yüklem 'katılacaksınız' (siz): kişi uyumsuzluğu.
Adım 4: B'de 'yeniden' ve 'tekrar' eş anlamlı: gereksiz sözcük kullanımı, yani anlamla ilgili bir bozukluk.
Sık yapılan hata: Hepsinde 'yüklem hatası' arayıp B'yi atlamak. B'de yüklem kusursuzdur, hata sözcüklerdedir.
Cevap B.`
},
{
  id: "tur-ab-217",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 3,
  soru: `**Aşağıdaki numaralı cümlelerin hangisinde anlam yönünden anlatım bozukluğu vardır?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Gökbilimci olmak isteyen Selin, geceleri teleskopuyla gökyüzünü izlemeyi çok seviyordu ve her hafta sonu şehir dışına çıkıyordu.</td></tr><tr><td>II</td><td>Geçen yaz katıldığı bilim kampında, yıldızların ışığının Dünya'ya ulaşmasının yıllar aldığını öğrenince çok şaşırmıştı.</td></tr><tr><td>III</td><td>Kampın son gecesinde rehber, takımyıldızlarının nasıl bulunacağını tek tek gösterdi.</td></tr><tr><td>IV</td><td>Gökyüzü bulutlarla kaplı olduğu için bütün yıldızları net biçimde seçebildi.</td></tr></table>`,
  secenekler: [
    "I",
    "II",
    "III",
    "IV"
  ],
  dogru: 3,
  hatalar: [
    "I'i bozuk sanma: iki yüklem aynı özneye bağlı ve zaman uyumlu; mantık sorunu yok.",
    "II'yi bozuk sanma: 'öğrenince çok şaşırmıştı' mantıklı ve uyumlu bir neden-sonuç.",
    "III'ü bozuk sanma: rehberin takımyıldızlarını göstermesi mantıklı bir olaydır.",
    null
  ],
  aciklama: `Neden-sonuç ilişkisi mantığa aykırı kurulursa anlam yönünden anlatım bozukluğu oluşur.
Adım 1: IV'te neden 'gökyüzünün bulutlarla kaplı olması', sonuç 'bütün yıldızları net seçmek'.
Adım 2: Bulutlu bir gökyüzünde yıldızlar net seçilemez; sonuç nedene aykırıdır.
Adım 3: Düzeltme: 'Gökyüzü bulutsuz olduğu için bütün yıldızları net biçimde seçebildi.'
Sağlama: Nedenle sonucun birbirini doğurup doğurmadığını test et.
Cevap D.`
},
{
  id: "tur-ab-218",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 3,
  soru: `**Tabloda üç cümle ve bu cümlelerdeki bozukluğun nedenleri verilmiştir. Hangi satırdaki eşleştirme yanlıştır?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th><th>Bozukluğun nedeni</th></tr><tr><td>I</td><td>Ablam ve ben akşam yürüyüşe çıkacak.</td><td>Özne ile yüklemin kişi bakımından uyuşmaması</td></tr><tr><td>II</td><td>Yeni sezonda takımımız sahaya yeniden tekrar çıktı.</td><td>Gereksiz sözcük kullanımı</td></tr><tr><td>III</td><td>Öğretmenimiz, ödevleri okudu ve değerlendirildi.</td><td>Ek eksikliği</td></tr></table>`,
  secenekler: [
    "I",
    "II",
    "III",
    "II ve III"
  ],
  dogru: 2,
  hatalar: [
    "I'i yanlış sanma: 'ablam ve ben' biz demektir, 'çıkacak' üçüncü kişidir; kişi uyumsuzluğu doğru.",
    "II'yi yanlış sanma: 'yeniden' ve 'tekrar' eş anlamlı, gereksiz sözcük doğru.",
    null,
    "II'yi de yanlış sanma: II'deki eşleştirme doğrudur."
  ],
  aciklama: `Bozukluğun türünü, hatanın nerede olduğuna bakarak belirleriz: yüklemde, ekte, sözcük seçiminde ya da çatıda.
Adım 1: I: 'ablam ve ben' = biz, yüklem 'çıkacak' (o): kişi uyumsuzluğu; etiket doğru.
Adım 2: II: 'yeniden' ve 'tekrar' aynı anlamı iki kez veriyor: gereksiz sözcük; etiket doğru.
Adım 3: III: 'okudu' etken, 'değerlendirildi' edilgen: çatı uyuşmazlığı; etiket 'ek eksikliği' diyor, yani yanlış.
Sık yapılan hata: Her bozukluğa 'ek' demek. Ek, çatı ve kişi hatalarını ayrı ayrı düşün.
Cevap C.`
},
{
  id: "tur-ab-219",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 3,
  soru: `**Aşağıdaki numaralı cümlelerin kaç tanesinde anlatım bozukluğu vardır?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Okulumuzun serasındaki domates fideleri, haftalar süren bakımın ardından meyve vermeye başladı.</td></tr><tr><td>II</td><td>Sera kulübünün başkanı, bütün üyelere ve gönüllü velilere teşekkür etti.</td></tr><tr><td>III</td><td>Kulübe katılan her öğrenci fideleri dikecek, sulayacak ve ilgilenecek.</td></tr><tr><td>IV</td><td>Hasat edilen domateslerin tamamı okul mutfağına teslim edilecek.</td></tr></table>`,
  secenekler: [
    "Bir",
    "İki",
    "Üç",
    "Dört"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Fazla sayma: I'i ya da IV'ü bozuk sanma. 'Fideleri … başladı' ve 'domateslerin tamamı … teslim edilecek' kusursuzdur.",
    "Fazla sayma: II'yi de bozuk sanma. 'Teşekkür etmek' fiili -e ister ve 'üyelere, velilere' bunu karşılıyor.",
    "Fazla sayma: Dört cümlenin üçünde bozukluk yoktur."
  ],
  aciklama: `Bir cümlede özne, yüklem ve nesne uyumlu, ekler doğru ve anlam tutarlıysa bozukluk yoktur.
Adım 1: I: cansız çoğul özne ('fideleri') tekil yüklem ('başladı') alır; doğru.
Adım 2: II: 'teşekkür etti' fiiline 'üyelere' ve 'velilere' yönelme hâliyle bağlanmış; doğru.
Adım 3: III: 'dikecek, sulayacak ve ilgilenecek' yüklemleri tek nesneye ('fideleri') bağlı; 'ilgilenmek' -le ister, bu ek eksik: bozuk.
Adım 4: IV: 'tamamı … teslim edilecek' edilgen ve uyumlu.
Sağlama: III'ü 'dikecek, sulayacak ve onlarla ilgilenecek' diye yazarsan düzelir.
Cevap A.`
},
{
  id: "tur-ab-220",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerin hangisinde anlatım bozukluğu __yoktur__?**`,
  gorsel: null,
  secenekler: [
    "Çocukluk anılarını anlatan dedem, hem bizi güldürdü hem de duygulandırdık.",
    "Müzik öğretmenimiz, hem koro çalışmalarını hem de okul orkestrasını yönetiyor.",
    "Doğada yapılan yürüyüşler hem vücudumuzu güçlendirir hem de ruh sağlığımıza.",
    "Sergiye katılan öğrencilerin ürünleri öğretmenler tarafından incelendi ve ödül verdiler."
  ],
  dogru: 1,
  hatalar: [
    "Özne–yüklem uyumsuzluğu: 'güldürdü' üçüncü tekil, 'duygulandırdık' birinci çoğul; özne 'dedem'.",
    null,
    "Yüklem eksikliği: 'güçlendirir' ruh sağlığına uymaz; ikinci öğe için 'iyi gelir' gibi ayrı bir yüklem gerekir.",
    "Çatı uyuşmazlığı: 'incelendi' edilgen, 'verdiler' etken; 'tarafından' ile birlikte yüklem edilgen olmalı."
  ],
  aciklama: `Bozukluk olmayan cümlede ortak yüklem bütün öğelere uyar, kişi ve çatı uyumlu kalır.
Adım 1: A'da kişi, C'de yüklem eksikliği, D'de çatı bozukluğu var.
Adım 2: B'de 'yönetiyor' hem 'koro çalışmalarına' hem 'orkestraya' uyar: 'yönetmek' ikisinde de doğal bir fiildir.
Adım 3: Özne 'öğretmenimiz' ve yüklem 'yönetiyor' kişi bakımından uyumlu.
Sağlama: 'Çalışmaları yönetmek' ve 'orkestrayı yönetmek' ifadelerinin ikisi de doğaldır.
Cevap B.`
},
{
  id: "tur-ab-221",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 3,
  soru: `**Aşağıdaki numaralı cümlelerin hangisinde ek eksikliğinden kaynaklanan bir anlatım bozukluğu vardır?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Okulumuzun bahçeye yeni oyun alanları yapıldı.</td></tr><tr><td>II</td><td>Alanlar, öğrencilerin güvenliği düşünülerek yumuşak zeminle kaplandı.</td></tr><tr><td>III</td><td>Açılışa öğrencilerin yanı sıra veliler de davet edilecek.</td></tr><tr><td>IV</td><td>Törende okul korosu iki şarkı söyleyecek ve müdürümüz kısa bir konuşma yapacak.</td></tr></table>`,
  secenekler: [
    "I",
    "II",
    "III",
    "IV"
  ],
  dogru: 0,
  hatalar: [
    null,
    "II'yi bozuk sanma: 'düşünülerek' zarf-fiili ve 'kaplandı' edilgen yüklemi uyumlu.",
    "III'ü bozuk sanma: 'yanı sıra' edat grubudur ve 'veliler de davet edilecek' edilgen, uyumlu.",
    "IV'ü bozuk sanma: iki yüklem ('söyleyecek', 'yapacak') iki ayrı özneye bağlı ve kendi nesneleriyle uyumlu."
  ],
  aciklama: `Belirtili isim tamlamasında tamlayan -ın eki alırsa tamlanan da -ı/-si eki almalıdır.
Adım 1: I'de 'okulumuzun' tamlayan eki taşıyor; tamlananı 'bahçe' 'bahçesine' biçimine girmeli.
Adım 2: Cümlede 'bahçeye' yazılmış; tamlanan eki eksik.
Adım 3: Düzeltme: 'Okulumuzun bahçesine yeni oyun alanları yapıldı.'
Sağlama: 'Okulumuzun bahçeye' ifadesini sesli oku; 'okulumuzun' bir tamlanan bekler.
Cevap A.`
},
{
  id: "tur-ab-222",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 3,
  soru: `"Takımdaki sporculardan hiçbiri, sakatlığı yüzünden maça çıkamayacaklardır."
**Bu cümledeki anlatım bozukluğu aşağıdakilerden hangisi yapılarak giderilir?**`,
  gorsel: null,
  secenekler: [
    "'sporculardan' sözcüğü 'sporcuların' biçiminde yazılmalıdır.",
    "'maça' sözcüğü 'maçı' biçiminde yazılmalıdır.",
    "'sakatlığı' sözcüğü 'sakatlıkları' biçiminde yazılmalıdır.",
    "'çıkamayacaklardır' sözcüğü 'çıkamayacaktır' biçiminde yazılmalıdır."
  ],
  dogru: 3,
  hatalar: [
    "Özneyi değiştirme: 'sporcuların hiçbiri' de 'hiçbiri' ile aynı özneyi verir; yüklem çoğul kaldıkça bozukluk sürer.",
    "Eki değiştirme: 'çıkmak' fiili yönelme (-e) ister, 'maça' doğru; hata ekte değil yüklemdedir.",
    "Çoğullama: 'sakatlığı yüzünden' ifadesi doğru; çoğul eki bozukluğu gidermez.",
    null
  ],
  aciklama: `'Hiçbiri' ve 'biri' gibi sözcükler tek kişiyi gösterir; yüklem de tek kişi ekini taşımalıdır.
Adım 1: Özne 'sporculardan hiçbiri': tek kişi.
Adım 2: Yüklem 'çıkamayacaklardır': çoğul kişi ekiyle bitiyor.
Adım 3: Tek kişi için 'çıkamayacaktır' gerekir.
Sık yapılan hata: 'Sporculardan' sözcüğüne bakıp özneyi çoğul sanmak. Özne 'hiçbiri'dir.
Cevap D.`
},
{
  id: "tur-ab-223",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 3,
  soru: `**Aşağıdaki numaralı cümlelerin hangilerinde anlatım bozukluğu vardır?**`,
  gorsel: `<table class="tablo"><tr><th>No</th><th>Cümle</th></tr><tr><td>I</td><td>Belediye yüzme havuzu, hafta içi her gün sabah dokuzdan akşam altıya kadar hizmet veriyor.</td></tr><tr><td>II</td><td>Çocuk havuzunda can simidi ve yüzme tahtası ücretsiz olarak veriliyor.</td></tr><tr><td>III</td><td>Havuza üye olmak isteyenler kimlik fotokopisi ve bir vesikalık fotoğraf getirmesi gerekiyor.</td></tr><tr><td>IV</td><td>Üyelik kartları, başvurudan yaklaşık iki gün kadar sonra verilecek.</td></tr><tr><td>V</td><td>Havuza girmeden önce duş almak ve bone takmak zorunludur.</td></tr></table>`,
  secenekler: [
    "I ve III",
    "II ve V",
    "III ve IV",
    "IV ve V"
  ],
  dogru: 2,
  hatalar: [
    "I'i bozuk sanma: 'sabah dokuzdan akşam altıya kadar' çıkma ve sınır hâlleriyle doğru kurulmuş.",
    "II'yi bozuk sanma: 'ücretsiz olarak' kalıbı kusursuzdur; V de uyumlu.",
    null,
    "V'i bozuk sanma: 'duş almak ve bone takmak' iki ayrı fiil ve iki ayrı nesneyle doğru kurulmuş."
  ],
  aciklama: `Tamlayan ile tamlanan arasında iyelik uyumu aranır. Eş anlamlı iki ifade art arda kullanılırsa gereksiz sözcük olur.
Adım 1: III'te 'getirmesi' iyelik eki taşıyor; ona uyan tamlayanın 'isteyenlerin' biçiminde olması gerekirdi, ek eksik.
Adım 2: IV'te 'yaklaşık' ve 'kadar' aynı belirsizliği iki kez söylüyor.
Adım 3: I, II ve V'te ek, çatı ve anlam sorunu yok.
Sağlama: III ve IV düzeltilince bir ek eklenir (isteyenlerin) ve bir sözcük atılır (kadar).
Cevap C.`
},
{
  id: "tur-ab-224",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 3,
  soru: `"Yıllardır görmediği köyüne dönen ve tanıdık yüzleri arayan yaşlı adam, hiç kimseyi bulamadılar."
**Bu cümledeki anlatım bozukluğunun nedeni aşağıdakilerden hangisidir?**`,
  gorsel: null,
  secenekler: [
    "Özne ile yüklemin sayı bakımından uyuşmaması",
    "Sıfat-fiilin niteleyeceği adın cümlede yer almaması",
    "Ortak kullanılan yüklemin öğelerden birine uymaması",
    "Nesnenin yüklemin gerektirdiği hâl ekini almaması"
  ],
  dogru: 0,
  hatalar: [
    null,
    "Ad eksik sanma: 'dönen' ve 'arayan' sıfat-fiilleri 'yaşlı adam'ı niteliyor ve bu ad cümlede var.",
    "Ortak yüklem sanma: cümlede tek yüklem var ve o, öznenin tamamına bağlı.",
    "Nesne eki hatası sanma: 'kimseyi' belirtme hâlinde ve 'bulmak' fiiline uygun."
  ],
  aciklama: `Özne tekilse yüklem de tekil kişi ekini taşımalıdır. Sıfat-fiil öbekleri özneyi nitelese bile yüklem özneye uymak zorundadır.
Adım 1: Özne: 'yaşlı adam' (tek kişi), sıfat-fiil öbekleri onu niteliyor.
Adım 2: Yüklem: 'bulamadılar' (çoğul kişi).
Adım 3: Tek özneyle çoğul yüklem uyuşmuyor; doğrusu 'bulamadı'.
Sağlama: 'Yıllardır görmediği köyüne dönen ve tanıdık yüzleri arayan yaşlı adam, hiç kimseyi bulamadı.' kusursuzdur.
Cevap A.`
},
{
  id: "tur-ab-225",
  kazanim: "T.8.3.8",
  kademe: 2,
  zorluk: 3,
  soru: `**Aşağıdaki cümlelerin hangisinde anlatım bozukluğu __yoktur__?**`,
  gorsel: null,
  secenekler: [
    "Evcil hayvanlar arasında örneğin kedi, köpek ve kuş gibi hayvanlar en çok tercih edilenlerdir.",
    "Dağ yürüyüşüne çıkanların yanında su, yedek kıyafet ve ilk yardım çantası bulunmalıdır.",
    "Tek başına ormanda kalan avcı, yanındaki iki arkadaşıyla birlikte yolunu buldu.",
    "Eski binanın kapısı onarıldı, camlarını yeniledi ve duvarlarını bu hafta boyadı."
  ],
  dogru: 1,
  hatalar: [
    "Gereksiz sözcük: 'örneğin' ve 'gibi' aynı örnekleme görevini iki kez yapıyor.",
    null,
    "Anlam çelişkisi: 'tek başına' ile 'iki arkadaşıyla birlikte' birbirini yok ediyor.",
    "Çatı uyuşmazlığı: 'onarıldı' edilgen, 'yeniledi' ve 'boyadı' etken; kapı özne olarak ikisiyle uyuşmaz."
  ],
  aciklama: `Bozukluk olmayan cümlede örnekleme, anlam ve çatı bakımından tutarsızlık yoktur.
Adım 1: A'da iki örnekleme sözcüğü, C'de iki zıt bilgi, D'de iki çatı karışmış.
Adım 2: B'de 'su, yedek kıyafet ve ilk yardım çantası' üç ad olarak sıralanıp tek yükleme ('bulunmalıdır') bağlanmış.
Adım 3: Her ad, 'bulunmalıdır' yüklemiyle doğal bir bütün oluşturur.
Sağlama: B'de özne çoğul adlar, yüklem tekil; cansız çoğul özneye tekil yüklem uyar.
Cevap B.`
}
);
